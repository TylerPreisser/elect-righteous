#!/usr/bin/env node
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const ORCHESTRATION_RUNS = join(ROOT, "memory/orchestration/agent-runs");
const TODAY = "2026-05-20";
const NOW = "2026-05-20T18:46:44Z";

const ISSUE_LABELS = {
  1: "Abortion / life",
  2: "LGBT / gender / parental rights",
  3: "Education / curriculum / schools",
  4: "Religious liberty / church / civic morality",
  5: "Taxes / spending / debt",
  6: "Economy / jobs / labor",
  7: "Guns / Second Amendment",
  8: "Immigration / border",
  9: "Health care / insurance / Medicaid",
  10: "Election integrity / voting / courts",
  11: "Public safety / law enforcement / criminal justice",
  12: "Agriculture / rural economy / water",
  13: "Local governance / transparency / ethics",
  14: "Environment / energy / land use",
};

const ISSUE_PATTERNS = [
  [1, /\b(abortion|pro-life|prolife|unborn|born-alive|born alive|roe|dobbs|pregnan|reproductive|life issue|sanctity)\b/i],
  [2, /\b(lgbt|lgbtq|gender|transgender|trans\b|pronoun|parental rights|bathroom|same-sex|same sex|marriage equality|pride)\b/i],
  [3, /\b(education|school|curriculum|teacher|student|classroom|library|universit|college|sboe|usd|board of education)\b/i],
  [4, /\b(religious liberty|religion|church|faith|worship|pastor|prayer|conscience|christian|civic moral|title ix)\b/i],
  [5, /\b(tax|taxes|spending|budget|debt|deficit|appropriation|fee|mill levy|fiscal)\b/i],
  [6, /\b(economy|jobs|labor|worker|business|wage|union|inflation|cost of living|small business|employment)\b/i],
  [7, /\b(gun|guns|firearm|second amendment|2a|nra|weapon|red flag)\b/i],
  [8, /\b(immigration|border|migrant|asylum|deport|ice\b|noncitizen|non-citizen|e-verify|everify)\b/i],
  [9, /\b(health care|healthcare|health|medicaid|medicare|insurance|hospital|mental health|vaccine|covid|doctor|medical|aca|obamacare)\b/i],
  [10, /\b(election|voting|vote|ballot|court|judge|judicial|constitution|amendment|supreme court|democracy|filing|candidate filing)\b/i],
  [11, /\b(public safety|law enforcement|police|sheriff|crime|criminal|jail|prison|fentanyl|prosecutor|court filing)\b/i],
  [12, /\b(agriculture|farm|farmer|ranch|rural|water|ogallala|cattle|crop|food|fertilizer|ethanol|e15)\b/i],
  [13, /\b(governance|transparen|ethic|committee|filing|campaign finance|fec|kpdc|donor|office|official|meeting|minutes|local|county|city|district|accountability|stock trading|lobbying)\b/i],
  [14, /\b(environment|energy|climate|land use|oil|gas|pipeline|renewable|electric|utility|weather|storm|forecast)\b/i],
];

const CANDIDATE_SOURCE_ALLOW = new Set([
  ".md",
  ".yaml",
  ".yml",
  ".json",
  ".ts",
  ".txt",
]);

const GENERATED_BASENAMES = new Set([
  "evidence-matrix-raw.json",
  "evidence-matrix.json",
  "social-evidence-matrix.json",
  "source-audit.json",
  "source-audit.md",
  "fixed-issue-matrix.json",
  "issue-matrix.md",
  "social-analysis.md",
]);

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function writeJson(path, value) {
  ensureDir(dirname(path));
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function writeText(path, value) {
  ensureDir(dirname(path));
  writeFileSync(path, value);
}

function rel(path) {
  return relative(ROOT, path);
}

function compact(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function stripMarkdown(line) {
  return compact(
    line
      .replace(/^#+\s*/, "")
      .replace(/^\s*[-*]\s+/, "")
      .replace(/^\s*\d+\.\s+/, "")
      .replace(/\*\*/g, "")
      .replace(/`/g, ""),
  );
}

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return normalize(value).replace(/\s+/g, "-");
}

function firstUrl(text) {
  const match = String(text).match(/https?:\/\/[^\s)"'<>\]]+/i);
  return match ? match[0].replace(/[),.;]+$/, "") : null;
}

function hostFor(url) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function sourceTierFor(url, sourceFile) {
  const file = sourceFile.toLowerCase();
  const host = hostFor(url).toLowerCase();
  if (
    host.endsWith(".gov") ||
    host.includes("congress.gov") ||
    host.includes("fec.gov") ||
    host.includes("sos.ks.gov") ||
    host.includes("kslegislature.gov") ||
    host.includes("house.gov") ||
    host.includes("senate.gov") ||
    host.includes("ellisco.net") ||
    host.includes("haysusa.com") ||
    host.includes("usd489.com") ||
    host.includes("candidatefiling.us")
  ) return "primary";
  if (
    host.includes("x.com") ||
    host.includes("twitter.com") ||
    host.includes("facebook.com") ||
    host.includes("instagram.com") ||
    host.includes("youtube.com") ||
    host.includes("tiktok.com") ||
    host.includes("bsky.app") ||
    host.includes("linkedin.com") ||
    file.includes("social-harvest")
  ) return "social";
  if (url) return "secondary";
  return "internal-memory";
}

function evidenceTypeFor(text, sourceFile, tier) {
  const haystack = `${text} ${sourceFile}`.toLowerCase();
  if (tier === "social") {
    if (/\b(follow|follows|following)\b/i.test(haystack)) return "social follow";
    if (/\b(like|liked)\b/i.test(haystack)) return "social like";
    if (/\b(comment|commented|reply|replied)\b/i.test(haystack)) return "social comment";
    if (/\b(no account|not found|absence|could not locate|no public)\b/i.test(haystack)) return "public absence";
    return "social post";
  }
  if (/\b(fec|kpdc|donor|donation|contribution|committee|raised|fundraising|actblue|winred)\b/i.test(haystack)) return "donor/funding";
  if (/\b(church|worship|pastor|faith|congregation|christian|catholic|methodist|baptist|lutheran)\b/i.test(haystack)) return "church/worship";
  if (/\b(endorse|endorsement|endorsed|rating|scorecard)\b/i.test(haystack)) return "endorsement";
  if (/\b(lawsuit|court|case|criminal|charge|conviction|complaint|ethics|investigation)\b/i.test(haystack)) return "legal/court";
  if (/\b(controversy|scandal|allegation|criticized|backlash|accused)\b/i.test(haystack)) return "controversy";
  if (/\b(voted|vote on|roll call|bill|sponsored|cosponsored|amendment|legislation|resolution)\b/i.test(haystack)) return "voting record";
  if (/\b(minutes|agenda|meeting|motion|approved|resolution|ordinance|commission|board)\b/i.test(haystack)) return "meeting record";
  if (/\b(candidate|filed|filing|ballot|race|election|incumbent|officeholder|campaign)\b/i.test(haystack)) return "ballot status";
  if (/\b(said|says|statement|platform|campaign site|believes|supports|opposes|pledged|promised)\b/i.test(haystack)) return "campaign statement";
  return "biography";
}

function issuesFor(text, evidenceType) {
  const found = new Set();
  for (const [issue, pattern] of ISSUE_PATTERNS) {
    if (pattern.test(text)) found.add(issue);
  }
  if (evidenceType === "donor/funding") found.add(13);
  if (evidenceType === "ballot status") {
    found.add(10);
    found.add(13);
  }
  if (evidenceType === "church/worship") found.add(4);
  if (evidenceType === "legal/court") {
    found.add(10);
    found.add(11);
  }
  if (evidenceType === "meeting record") found.add(13);
  return [...found].sort((a, b) => a - b);
}

function loadV2Metadata() {
  const dir = join(ROOT, "ui/src/data/v2");
  const map = new Map();
  for (const file of readdirSync(dir).filter((entry) => entry.endsWith(".ts") && entry !== "index.ts")) {
    const text = readFileSync(join(dir, file), "utf8");
    const slug = file.replace(/\.ts$/, "");
    const name = text.match(/"name":\s*"([^"]+)"/)?.[1] ?? slug;
    const electionSlug = text.match(/"electionSlug":\s*"([^"]+)"/)?.[1] ?? "";
    map.set(slug, { slug, name, electionSlug });
  }
  return map;
}

function walkFiles(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      if (entry === "agent-work" || entry === ".git") continue;
      out.push(...walkFiles(path));
      continue;
    }
    out.push(path);
  }
  return out;
}

function candidateFiles(slug) {
  const dir = join(MEMORY_CANDIDATES, slug);
  const files = walkFiles(dir).filter((path) => {
    const base = path.split("/").at(-1);
    if (GENERATED_BASENAMES.has(base)) return false;
    const ext = base.includes(".") ? `.${base.split(".").at(-1)}` : "";
    return CANDIDATE_SOURCE_ALLOW.has(ext);
  });
  const v2Path = join(ROOT, `ui/src/data/v2/${slug}.ts`);
  if (existsSync(v2Path)) files.push(v2Path);
  return files;
}

function broadFilesFor(candidate) {
  const files = [
    ...walkFiles(join(ROOT, "memory/elections")),
    ...walkFiles(join(ROOT, "reports")),
    join(ROOT, "ui/src/data/candidates.ts"),
    join(ROOT, "ui/src/data/elections.ts"),
  ].filter((path) => existsSync(path));

  const aliases = [
    candidate.slug,
    candidate.name,
    candidate.name.replace(/\s+/g, "-"),
  ].map(normalize).filter(Boolean);

  return files.filter((path) => {
    const text = normalize(readFileSync(path, "utf8"));
    return aliases.some((alias) => alias && text.includes(alias));
  });
}

function aliasPatterns(candidate) {
  const escaped = [
    candidate.slug,
    candidate.name,
    candidate.name.replace(/\s+/g, "-"),
  ]
    .filter(Boolean)
    .map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return new RegExp(`(?:${escaped.join("|")})`, "i");
}

function broadLineWindowSet(path, candidate) {
  const lines = readFileSync(path, "utf8").split(/\r?\n/);
  const pattern = aliasPatterns(candidate);
  const keep = new Set();
  const windowBefore = path.endsWith("ui/src/data/candidates.ts") ? 8 : 10;
  const windowAfter = path.endsWith("ui/src/data/candidates.ts") ? 120 : 35;
  lines.forEach((line, index) => {
    if (!pattern.test(line)) return;
    const start = Math.max(0, index - windowBefore);
    const end = Math.min(lines.length - 1, index + windowAfter);
    for (let i = start; i <= end; i += 1) keep.add(i + 1);
  });
  return keep;
}

function sourceIdFor(path, lineNumber) {
  return `mem-${rel(path).replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase()}-l${lineNumber}`;
}

function shouldKeepLine(line) {
  const text = stripMarkdown(line);
  if (!text) return false;
  if (/^[-_*=\s]+$/.test(text)) return false;
  if (/^```/.test(text)) return false;
  return true;
}

function rowForLine({ slug, candidate, path, line, lineNumber, index }) {
  const sourceFile = `${rel(path)}:${lineNumber}`;
  const cleaned = stripMarkdown(line);
  const sourceUrl = firstUrl(line);
  const sourceTier = sourceTierFor(sourceUrl, sourceFile);
  const evidenceType = evidenceTypeFor(cleaned, sourceFile, sourceTier);
  const issueMappedTo = issuesFor(cleaned, evidenceType);
  const confidence = sourceTier === "social"
    ? "weak-signal"
    : sourceUrl && sourceTier === "primary"
      ? "confirmed"
      : sourceUrl
        ? "likely"
        : "unknown";
  const useDecision = sourceTier === "social"
    ? "use-with-caveat"
    : sourceUrl
      ? "use"
      : "background-only";
  const reasonForDecision = sourceTier === "social"
    ? "Raw social or platform evidence preserved only as an observed signal; do not infer belief, endorsement, or policy position from this row alone."
    : sourceUrl
      ? "Raw source-backed evidence preserved for matrix-builder reconciliation and source-tier review."
      : "Internal research line preserved for matrix-builder review; requires public-source confirmation before use as a standalone public claim.";

  return {
    id: `raw-${slug}-${String(index).padStart(5, "0")}`,
    candidateSlug: slug,
    candidateName: candidate.name,
    raceSlug: candidate.electionSlug,
    sourceFile,
    sourceUrl,
    sourceTier,
    evidenceType,
    issueMappedTo,
    claim: cleaned,
    exactEvidenceSummary: compact(line),
    confidence,
    useDecision,
    reasonForDecision,
    sourceIds: [sourceIdFor(path, lineNumber)],
  };
}

function buildForSlug(slug, metadata) {
  const candidate = metadata.get(slug);
  if (!candidate) throw new Error(`No v2 metadata found for ${slug}`);
  const candidateSpecific = new Set(candidateFiles(slug));
  const broad = new Set(broadFilesFor(candidate));
  const files = [...new Set([...candidateSpecific, ...broad])].sort();
  const broadWindows = new Map(
    [...broad].map((path) => [path, broadLineWindowSet(path, candidate)]),
  );
  const rows = [];

  for (const path of files) {
    const lines = readFileSync(path, "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      if (!candidateSpecific.has(path)) {
        const keepLines = broadWindows.get(path);
        if (!keepLines?.has(index + 1)) return;
      }
      if (!shouldKeepLine(line)) return;
      rows.push(rowForLine({
        slug,
        candidate,
        path,
        line,
        lineNumber: index + 1,
        index: rows.length + 1,
      }));
    });
  }

  const dir = join(MEMORY_CANDIDATES, slug);
  const rawPath = join(dir, "evidence-matrix-raw.json");
  writeJson(rawPath, rows);

  const runDir = join(dir, "agent-work/candidate-evidence-miner");
  ensureDir(runDir);

  const caveatRows = rows.filter((row) =>
    /\b(caveat|conflict|contradict|unverified|unknown|could not|not confirmed|limitation|recheck|preliminary|final filing)\b/i.test(
      `${row.claim} ${row.reasonForDecision}`,
    ),
  );
  const internalRows = rows.filter((row) => row.sourceTier === "internal-memory" && !row.sourceUrl);

  const notes = [
    `# Notes — candidate-evidence-miner — ${slug} — ${TODAY}`,
    "",
    "## Summary",
    `- Files read: ${files.length}`,
    `- Raw rows extracted: ${rows.length}`,
    `- Caveat/conflict/source-limitation rows: ${caveatRows.length}`,
    `- Internal-memory rows without URL: ${internalRows.length}`,
    "",
    "## Files Read",
    ...files.map((file) => `- ${rel(file)}`),
    "",
    "## Issue Coverage",
    ...Object.entries(ISSUE_LABELS).map(([issue, label]) => `- ${issue}. ${label}: ${rows.filter((row) => row.issueMappedTo.includes(Number(issue))).length} rows`),
    "",
    "## Extraction Notes",
    "- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.",
    "- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.",
    "- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.",
    "",
  ].join("\n");

  const handoff = [
    `# Handoff — candidate-evidence-miner — ${slug} — ${TODAY}`,
    "",
    "## What I Did",
    `Read ${files.length} candidate/relevant project files and extracted ${rows.length} raw evidence rows.`,
    "",
    "## Key Findings",
    `- Caveat/conflict/source-limitation rows: ${caveatRows.length}`,
    `- Internal-memory rows without URL: ${internalRows.length}`,
    "",
    "## Files Created or Modified",
    `- memory/candidates/${slug}/evidence-matrix-raw.json`,
    `- memory/candidates/${slug}/agent-work/candidate-evidence-miner/run-state.json`,
    `- memory/candidates/${slug}/agent-work/candidate-evidence-miner/notes.md`,
    `- memory/candidates/${slug}/agent-work/candidate-evidence-miner/outputs.md`,
    `- memory/candidates/${slug}/agent-work/candidate-evidence-miner/handoff.md`,
    "",
    "## What the Next Task Should Do",
    `Run evidence-matrix-builder for ${slug}, preserving rejected rows with reasons and promoting public URL-backed evidence where appropriate.`,
    "",
    "## Blockers",
    "- None.",
    "",
  ].join("\n");

  const outputs = [
    `# Outputs — candidate-evidence-miner — ${slug} — ${TODAY}`,
    "",
    `- memory/candidates/${slug}/evidence-matrix-raw.json`,
    `- memory/candidates/${slug}/agent-work/candidate-evidence-miner/*`,
    "",
  ].join("\n");

  const filesWritten = [
    `memory/candidates/${slug}/evidence-matrix-raw.json`,
    `memory/candidates/${slug}/agent-work/candidate-evidence-miner/run-state.json`,
    `memory/candidates/${slug}/agent-work/candidate-evidence-miner/notes.md`,
    `memory/candidates/${slug}/agent-work/candidate-evidence-miner/outputs.md`,
    `memory/candidates/${slug}/agent-work/candidate-evidence-miner/handoff.md`,
  ];

  writeText(join(runDir, "notes.md"), notes);
  writeText(join(runDir, "handoff.md"), handoff);
  writeText(join(runDir, "outputs.md"), outputs);
  writeJson(join(runDir, "run-state.json"), {
    agent_id: "candidate-evidence-miner",
    agent_role: "Candidate evidence extraction researcher",
    candidate_slug: slug,
    phase: "2",
    status: "complete",
    started_at: NOW,
    completed_at: NOW,
    inputs_read: files.map(rel),
    files_written: filesWritten,
    commands_run: [`node scripts/build-raw-evidence-matrix.mjs ${slug}`],
    blockers: [],
    errors_encountered: [],
    next_steps: [`Run evidence-matrix-builder for ${slug}.`],
    handoff_summary: `Extracted ${rows.length} raw evidence rows for ${slug}.`,
  });

  return {
    slug,
    filesRead: files.length,
    rawRows: rows.length,
    caveatRows: caveatRows.length,
    internalRowsWithoutUrl: internalRows.length,
    filesWritten,
  };
}

const requested = process.argv.slice(2);
const metadata = loadV2Metadata();
const slugs = requested.length ? requested : [...metadata.keys()].sort();
if (!slugs.length) {
  console.error("Usage: node scripts/build-raw-evidence-matrix.mjs <slug> [slug...]");
  process.exit(1);
}

const results = slugs.map((slug) => buildForSlug(slug, metadata));
const runDir = join(ORCHESTRATION_RUNS, TODAY, "candidate-evidence-miner");
ensureDir(runDir);

writeJson(join(runDir, "run-state.json"), {
  agent_id: "candidate-evidence-miner",
  agent_role: "Candidate evidence extraction researcher",
  candidate_slug: null,
  phase: "2",
  status: "complete",
  started_at: NOW,
  completed_at: NOW,
  inputs_read: slugs.flatMap((slug) => {
    const candidate = metadata.get(slug);
    return [...new Set([...candidateFiles(slug), ...broadFilesFor(candidate)])].sort().map(rel);
  }),
  files_written: [
    ...results.flatMap((result) => result.filesWritten),
    `memory/orchestration/agent-runs/${TODAY}/candidate-evidence-miner/run-state.json`,
    `memory/orchestration/agent-runs/${TODAY}/candidate-evidence-miner/notes.md`,
    `memory/orchestration/agent-runs/${TODAY}/candidate-evidence-miner/outputs.md`,
    `memory/orchestration/agent-runs/${TODAY}/candidate-evidence-miner/handoff.md`,
  ],
  commands_run: [`node scripts/build-raw-evidence-matrix.mjs ${slugs.join(" ")}`],
  blockers: [],
  errors_encountered: [],
  next_steps: [`Run evidence-matrix-builder for ${slugs.join(", ")}.`],
  handoff_summary: `Extracted raw evidence matrices for ${slugs.length} candidates.`,
});

writeText(
  join(runDir, "notes.md"),
  [
    `# Notes — candidate-evidence-miner batch — ${TODAY}`,
    "",
    ...results.flatMap((result) => [
      `## ${result.slug}`,
      `- Files read: ${result.filesRead}`,
      `- Raw rows: ${result.rawRows}`,
      `- Caveat/conflict/source-limitation rows: ${result.caveatRows}`,
      `- Internal-memory rows without URL: ${result.internalRowsWithoutUrl}`,
      "",
    ]),
  ].join("\n"),
);

writeText(
  join(runDir, "outputs.md"),
  [
    `# Outputs — candidate-evidence-miner batch — ${TODAY}`,
    "",
    ...slugs.map((slug) => `- memory/candidates/${slug}/evidence-matrix-raw.json`),
    ...slugs.map((slug) => `- memory/candidates/${slug}/agent-work/candidate-evidence-miner/*`),
    "",
  ].join("\n"),
);

writeText(
  join(runDir, "handoff.md"),
  [
    `# Handoff — candidate-evidence-miner — ${TODAY}`,
    "",
    "## What I Did",
    `Extracted raw evidence matrices for ${slugs.length} candidates: ${slugs.join(", ")}.`,
    "",
    "## Key Findings",
    ...results.map((result) => `- ${result.slug}: ${result.rawRows} rows from ${result.filesRead} files; ${result.caveatRows} caveat/source-limitation rows; ${result.internalRowsWithoutUrl} internal-memory rows without URL.`),
    "",
    "## Files Created or Modified",
    ...slugs.map((slug) => `- memory/candidates/${slug}/evidence-matrix-raw.json`),
    ...slugs.map((slug) => `- memory/candidates/${slug}/agent-work/candidate-evidence-miner/*`),
    `- memory/orchestration/agent-runs/${TODAY}/candidate-evidence-miner/*`,
    "",
    "## What the Next Task Should Do",
    `Run evidence-matrix-builder for these ${slugs.length} candidates, then social-footprint/source-tier passes.`,
    "",
    "## Blockers",
    "- None.",
    "",
    "## Decisions I Made That Could Be Questioned",
    "The extraction is line-level and intentionally redundant. Generated matrices/audits are excluded so the pipeline does not cite itself.",
    "",
  ].join("\n"),
);

console.log(JSON.stringify(results, null, 2));
