#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const UI_V2 = join(ROOT, "ui/src/data/v2");
const OUT_DIR = join(ROOT, "memory/orchestration");
const TODAY = "2026-05-20";
const JSON_OUT = join(OUT_DIR, `source-health-${TODAY}.json`);
const MD_OUT = join(OUT_DIR, `source-health-${TODAY}.md`);
const CONCURRENCY = Number(process.env.SOURCE_HEALTH_CONCURRENCY ?? 24);
const TIMEOUT_MS = Number(process.env.SOURCE_HEALTH_TIMEOUT_MS ?? 8000);

function parseCandidate(path) {
  const text = readFileSync(path, "utf8");
  const match = text.match(/export const [A-Z0-9_]+: CandidateFullV2 = ([\s\S]*?);\n\nif \(process\.env\.NODE_ENV/);
  if (!match) throw new Error(`Could not locate candidate JSON in ${path}`);
  return JSON.parse(match[1]);
}

function sourceRows() {
  const rows = [];
  const files = readdirSync(UI_V2)
    .filter((file) => file.endsWith(".ts") && file !== "index.ts")
    .sort();
  for (const file of files) {
    const candidate = parseCandidate(join(UI_V2, file));
    for (const source of candidate.sources ?? []) {
      rows.push({
        candidateSlug: candidate.slug ?? basename(file, ".ts"),
        sourceId: source.id,
        tier: source.tier,
        url: source.url,
        title: source.title,
        publisher: source.publisher,
      });
    }
  }
  return rows;
}

function groupByUrl(rows) {
  const byUrl = new Map();
  for (const row of rows) {
    if (!byUrl.has(row.url)) {
      byUrl.set(row.url, {
        url: row.url,
        candidates: new Set(),
        tiers: new Set(),
        sourceIds: [],
        title: row.title,
        publisher: row.publisher,
      });
    }
    const entry = byUrl.get(row.url);
    entry.candidates.add(row.candidateSlug);
    entry.tiers.add(row.tier);
    entry.sourceIds.push(`${row.candidateSlug}:${row.sourceId}`);
  }
  return [...byUrl.values()].map((entry) => ({
    ...entry,
    candidates: [...entry.candidates].sort(),
    tiers: [...entry.tiers].sort(),
  }));
}

async function fetchWithTimeout(url, method) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "ElectRighteousSourceHealth/1.0 (+https://electrighteous.com/)",
        accept: "text/html,application/xhtml+xml,application/pdf,*/*;q=0.8",
      },
    });
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      finalUrl: response.url,
      method,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function checkUrl(entry) {
  try {
    let result = await fetchWithTimeout(entry.url, "HEAD");
    if ([405, 403, 400, 501].includes(result.status) || !result.ok) {
      const fallback = await fetchWithTimeout(entry.url, "GET");
      if (fallback.ok || !result.ok) result = fallback;
    }
    return {
      ...entry,
      status: result.ok ? "live" : result.status === 403 ? "blocked" : "http-error",
      httpStatus: result.status,
      method: result.method,
      finalUrl: result.finalUrl,
      error: null,
    };
  } catch (error) {
    return {
      ...entry,
      status: error?.name === "AbortError" ? "timeout" : "network-error",
      httpStatus: null,
      method: "HEAD/GET",
      finalUrl: null,
      error: error?.message ?? String(error),
    };
  }
}

async function runPool(items, worker) {
  const results = new Array(items.length);
  let index = 0;
  async function next() {
    while (index < items.length) {
      const current = index;
      index += 1;
      results[current] = await worker(items[current], current);
      if ((current + 1) % 100 === 0) {
        process.stderr.write(`checked ${current + 1}/${items.length}\n`);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, next));
  return results;
}

function markdownReport(payload) {
  const counts = payload.counts;
  const problemRows = payload.results
    .filter((row) => row.status !== "live")
    .slice(0, 200);
  const lines = [
    `# Rendered Source Health — ${TODAY}`,
    "",
    "This checks unique public URLs referenced by rendered v2 candidate source trails.",
    "",
    "## Counts",
    "",
    `- Rendered source entries: ${payload.renderedSourceEntries}`,
    `- Unique URLs checked: ${payload.uniqueUrls}`,
    `- Live: ${counts.live ?? 0}`,
    `- Blocked/forbidden: ${counts.blocked ?? 0}`,
    `- HTTP errors: ${counts["http-error"] ?? 0}`,
    `- Timeouts: ${counts.timeout ?? 0}`,
    `- Network errors: ${counts["network-error"] ?? 0}`,
    "",
    "## Non-Live / Blocked Sample",
    "",
  ];
  if (problemRows.length === 0) {
    lines.push("No non-live URLs found.");
  } else {
    lines.push("| Status | HTTP | URL | Candidates | Error |");
    lines.push("|--------|------|-----|------------|-------|");
    for (const row of problemRows) {
      lines.push(`| ${row.status} | ${row.httpStatus ?? ""} | ${row.url} | ${row.candidates.join(", ")} | ${(row.error ?? "").replace(/\|/g, "/")} |`);
    }
  }
  lines.push("");
  lines.push("## Caveat");
  lines.push("");
  lines.push("A blocked/forbidden result means the URL did not allow this automated checker; it does not automatically mean the source is bad. Human browser verification may still be needed for blocked government, social, or anti-bot-protected pages.");
  lines.push("");
  return `${lines.join("\n")}\n`;
}

if (!existsSync(UI_V2)) {
  console.error(`Missing ${UI_V2}`);
  process.exit(1);
}

const rows = sourceRows();
const unique = groupByUrl(rows);
const results = await runPool(unique, checkUrl);
const counts = results.reduce((acc, row) => {
  acc[row.status] = (acc[row.status] ?? 0) + 1;
  return acc;
}, {});
const payload = {
  generated: new Date().toISOString(),
  renderedSourceEntries: rows.length,
  uniqueUrls: unique.length,
  timeoutMs: TIMEOUT_MS,
  concurrency: CONCURRENCY,
  counts,
  results,
};

mkdirSync(dirname(JSON_OUT), { recursive: true });
writeFileSync(JSON_OUT, `${JSON.stringify(payload, null, 2)}\n`);
writeFileSync(MD_OUT, markdownReport(payload));
console.log(JSON.stringify({
  renderedSourceEntries: payload.renderedSourceEntries,
  uniqueUrls: payload.uniqueUrls,
  counts: payload.counts,
  json: JSON_OUT,
  markdown: MD_OUT,
}, null, 2));
