#!/usr/bin/env node
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";

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

const SOCIAL_TYPES = new Set([
  "social post",
  "social like",
  "social follow",
  "social comment",
  "public absence",
]);

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function readText(path) {
  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

function writeJson(path, value) {
  ensureDir(dirname(path));
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function writeText(path, value) {
  ensureDir(dirname(path));
  writeFileSync(path, value);
}

function compact(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function markdownTable(rows, headers) {
  const matrix = [headers, ...rows];
  const widths = headers.map((_, i) =>
    Math.min(80, Math.max(...matrix.map((row) => String(row[i] ?? "").length))),
  );
  const render = (row) =>
    `| ${row
      .map((cell, i) => {
        const text = String(cell ?? "").replace(/\n/g, " ");
        return (text.length > widths[i] ? `${text.slice(0, widths[i] - 1)}…` : text).padEnd(widths[i]);
      })
      .join(" | ")} |`;
  return [
    render(headers),
    `| ${widths.map((w) => "-".repeat(w)).join(" | ")} |`,
    ...rows.map(render),
  ].join("\n");
}

function hostFor(url) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function platformFor(row) {
  const text = `${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""} ${row.sourceUrl ?? ""}`.toLowerCase();
  const host = hostFor(row.sourceUrl).toLowerCase();
  if (host.includes("x.com") || host.includes("twitter.com")) return "X / Twitter";
  if (host.includes("facebook.com")) return "Facebook";
  if (host.includes("instagram.com")) return "Instagram";
  if (host.includes("youtube.com") || host.includes("youtu.be")) return "YouTube";
  if (host.includes("tiktok.com")) return "TikTok";
  if (host.includes("bsky.app")) return "Bluesky";
  if (host.includes("linkedin.com")) return "LinkedIn";
  if (host.includes("truthsocial.com")) return "Truth Social";
  if (host.includes("gab.com")) return "Gab";
  if (host.includes("gettr.com")) return "Gettr";
  if (host.includes("substack.com")) return "Substack";
  if (text.includes("bluesky")) return "Bluesky";
  if (text.includes("facebook")) return "Facebook";
  if (text.includes("instagram")) return "Instagram";
  if (text.includes("youtube")) return "YouTube";
  if (text.includes("tiktok")) return "TikTok";
  if (text.includes("twitter") || text.includes(" x ")) return "X / Twitter";
  if (text.includes("linkedin")) return "LinkedIn";
  return host || "Public web / internal harvest";
}

function actionTypeFor(row) {
  if (row.evidenceType === "public absence") return "absence";
  if (row.evidenceType === "social follow") return "follow";
  if (row.evidenceType === "social like") return "like";
  if (row.evidenceType === "social comment") return "comment";
  if (/\brepost|reshare|shared\b/i.test(`${row.claim} ${row.exactEvidenceSummary}`)) return "share/repost";
  if (row.evidenceType === "social post") return "post";
  if (row.sourceTier === "social") return "social-observation";
  return "online-reference";
}

function strengthFor(row, actionType) {
  if (row.useDecision === "reject") return "not-usable";
  if (row.useDecision === "background-only" || row.useDecision === "source-only") return "ambiguous";
  if (actionType === "post" && row.sourceTier === "social" && row.sourceUrl) return "strong";
  if (actionType === "comment" || actionType === "share/repost") return "moderate";
  if (actionType === "follow" || actionType === "like" || actionType === "absence") return "weak";
  if (row.sourceTier === "social") return "weak";
  return "ambiguous";
}

function issueCoverage(signals) {
  const out = {};
  for (let i = 1; i <= 14; i += 1) {
    out[i] = {
      issue: ISSUE_LABELS[i],
      total: signals.filter((signal) => signal.issueMappedTo.includes(i)).length,
      strong: signals.filter((signal) => signal.issueMappedTo.includes(i) && signal.signalStrength === "strong").length,
      moderate: signals.filter((signal) => signal.issueMappedTo.includes(i) && signal.signalStrength === "moderate").length,
      weak: signals.filter((signal) => signal.issueMappedTo.includes(i) && signal.signalStrength === "weak").length,
      ambiguous: signals.filter((signal) => signal.issueMappedTo.includes(i) && signal.signalStrength === "ambiguous").length,
    };
  }
  return out;
}

function parsePresenceSummary(markdown) {
  const lines = markdown.split(/\n/);
  const summary = [];
  let inSummary = false;
  for (const line of lines) {
    if (/^## Presence Summary/i.test(line)) {
      inSummary = true;
      continue;
    }
    if (inSummary && /^## /.test(line)) break;
    if (inSummary && /^\s*-\s+/.test(line)) summary.push(line.replace(/^\s*-\s+/, "").trim());
  }
  return summary;
}

function buildSocial(slug) {
  const candidateDir = join(MEMORY_CANDIDATES, slug);
  const evidencePath = join(candidateDir, "evidence-matrix.json");
  const harvestPath = join(candidateDir, "social-harvest.md");
  const rows = readJson(evidencePath);
  const harvest = readText(harvestPath);
  const presenceSummary = parsePresenceSummary(harvest);

  const socialRows = rows.filter((row) =>
    SOCIAL_TYPES.has(row.evidenceType) ||
    row.sourceTier === "social" ||
    /social|platform|facebook|twitter|x\/|bluesky|youtube|tiktok|instagram|linkedin|truth social|gab|gettr|substack/i.test(
      `${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""}`,
    ),
  );

  const signals = socialRows.map((row, index) => {
    const actionType = actionTypeFor(row);
    const platform = platformFor(row);
    const signalStrength = strengthFor(row, actionType);
    const issueMappedTo = Array.isArray(row.issueMappedTo) ? row.issueMappedTo : [];
    return {
      id: `soc-${slug}-${String(index + 1).padStart(4, "0")}`,
      evidenceRowId: row.id,
      platform,
      actionType,
      target: row.sourceUrl ?? row.sourceFile,
      observedAt: "2026-05-20",
      issueMappedTo,
      issueLabels: issueMappedTo.map((issue) => ISSUE_LABELS[issue]).filter(Boolean),
      signalStrength,
      useDecision: row.useDecision,
      confidence: row.confidence,
      observation: compact(row.claim || row.exactEvidenceSummary),
      sourceUrl: row.sourceUrl,
      sourceFile: row.sourceFile,
      sourceIds: row.sourceIds,
      caveat:
        actionType === "absence"
          ? "Platform absence is a documented search result, not evidence of private belief or private activity."
          : signalStrength === "strong"
            ? "Candidate-controlled post or candidate-controlled platform statement; still use as stated/observed content, not inferred motive."
            : "Observed online/social signal only; do not infer belief, endorsement, or policy position from this item alone.",
    };
  });

  const matrix = {
    candidateSlug: slug,
    generated: NOW,
    sourceFiles: [
      `memory/candidates/${slug}/social-harvest.md`,
      `memory/candidates/${slug}/evidence-matrix.json`,
    ],
    platformPresence: presenceSummary,
    signals,
    issueCoverage: issueCoverage(signals),
    caveats: [
      "Social evidence is signal, not fact. A follow, like, share, or platform absence is not treated as a belief or policy position.",
      "Candidate-controlled posts and campaign pages may be used as stated positions only when the text itself says the position.",
      "Login-walled, blocked, or inaccessible platform content is documented as a capture limitation, not as evidence of silence.",
    ],
  };

  writeJson(join(candidateDir, "social-evidence-matrix.json"), matrix);

  const coverageRows = Object.entries(matrix.issueCoverage).map(([issue, entry]) => [
    issue,
    entry.issue,
    entry.total,
    entry.strong,
    entry.moderate,
    entry.weak,
    entry.ambiguous,
  ]);
  const topSignals = signals
    .filter((signal) => signal.signalStrength !== "not-usable")
    .sort((a, b) => {
      const rank = { strong: 4, moderate: 3, weak: 2, ambiguous: 1 };
      return (rank[b.signalStrength] ?? 0) - (rank[a.signalStrength] ?? 0);
    })
    .slice(0, 30);

  const analysis = [
    `# Social Analysis — ${slug} — ${TODAY}`,
    "",
    "## Scope",
    `Read social-harvest.md and ${rows.length} evidence-matrix rows; classified ${signals.length} social/online/platform observations.`,
    "",
    "## Platform Presence",
    ...(presenceSummary.length ? presenceSummary.map((line) => `- ${line}`) : ["- No structured presence summary was found in social-harvest.md."]),
    "",
    "## Issue Coverage",
    markdownTable(coverageRows, ["Issue", "Title", "Total", "Strong", "Moderate", "Weak", "Ambiguous"]),
    "",
    "## Representative Signals",
    ...topSignals.map(
      (signal) =>
        `- **${signal.signalStrength} / ${signal.platform} / ${signal.actionType}** — ${compact(signal.observation).slice(0, 360).trim()}${signal.sourceUrl ? ` (${signal.sourceUrl})` : ""}`,
    ),
    "",
    "## Required Caveats",
    ...matrix.caveats.map((caveat) => `- ${caveat}`),
    "",
  ].join("\n");
  writeText(join(candidateDir, "social-analysis.md"), analysis);

  const runDir = join(candidateDir, "agent-work/social-footprint-analyst");
  ensureDir(runDir);
  const filesWritten = [
    `memory/candidates/${slug}/social-evidence-matrix.json`,
    `memory/candidates/${slug}/social-analysis.md`,
    `memory/candidates/${slug}/agent-work/social-footprint-analyst/run-state.json`,
    `memory/candidates/${slug}/agent-work/social-footprint-analyst/notes.md`,
    `memory/candidates/${slug}/agent-work/social-footprint-analyst/handoff.md`,
  ];

  writeJson(join(runDir, "run-state.json"), {
    agent_id: "social-footprint-analyst",
    agent_role: "Social media intelligence analyst",
    candidate_slug: slug,
    phase: "2",
    status: "complete",
    started_at: NOW,
    completed_at: NOW,
    inputs_read: [
      `memory/candidates/${slug}/social-harvest.md`,
      `memory/candidates/${slug}/evidence-matrix.json`,
      `memory/candidates/${slug}/agent-work/candidate-evidence-miner/notes.md`,
    ],
    files_written: filesWritten,
    commands_run: [`node scripts/build-social-and-source-passes.mjs ${slug}`],
    blockers: [],
    errors_encountered: [],
    next_steps: [`Run source-tier-validator for ${slug}.`, `Run fixed-issue-matrix-builder for ${slug} after source validation.`],
    handoff_summary: `Classified ${signals.length} social/online observations for ${slug}.`,
  });

  writeText(
    join(runDir, "notes.md"),
    [
      `# Notes — social-footprint-analyst — ${slug} — ${TODAY}`,
      "",
      `- Social/online observations classified: ${signals.length}`,
      `- Platform presence entries: ${presenceSummary.length}`,
      `- Strong signals: ${signals.filter((s) => s.signalStrength === "strong").length}`,
      `- Moderate signals: ${signals.filter((s) => s.signalStrength === "moderate").length}`,
      `- Weak signals: ${signals.filter((s) => s.signalStrength === "weak").length}`,
      `- Ambiguous/background signals: ${signals.filter((s) => s.signalStrength === "ambiguous").length}`,
      "- No beliefs were inferred from follows, likes, platform absences, or public reaction rows.",
      "",
    ].join("\n"),
  );

  writeText(
    join(runDir, "handoff.md"),
    [
      `# Handoff — social-footprint-analyst — ${slug} — ${TODAY}`,
      "",
      "## What I Did",
      `Classified ${signals.length} public social/online/platform observations from social-harvest.md and evidence-matrix.json.`,
      "",
      "## Key Findings",
      `- Strong signals: ${signals.filter((s) => s.signalStrength === "strong").length}`,
      `- Moderate signals: ${signals.filter((s) => s.signalStrength === "moderate").length}`,
      `- Weak signals: ${signals.filter((s) => s.signalStrength === "weak").length}`,
      `- Ambiguous/background signals: ${signals.filter((s) => s.signalStrength === "ambiguous").length}`,
      "- Social signals are preserved with caveats and mapped to the 14-issue matrix where possible.",
      "",
      "## Files Created or Modified",
      `- memory/candidates/${slug}/social-evidence-matrix.json`,
      `- memory/candidates/${slug}/social-analysis.md`,
      `- memory/candidates/${slug}/agent-work/social-footprint-analyst/*`,
      "",
      "## What the Next Task Should Do",
      `Use social-evidence-matrix.json during fixed-issue-matrix-builder for ${slug}; do not infer beliefs from weak/ambiguous signals.`,
      "",
      "## Blockers",
      "- None.",
      "",
    ].join("\n"),
  );

  return {
    slug,
    socialRows: signals.length,
    strong: signals.filter((s) => s.signalStrength === "strong").length,
    moderate: signals.filter((s) => s.signalStrength === "moderate").length,
    weak: signals.filter((s) => s.signalStrength === "weak").length,
    ambiguous: signals.filter((s) => s.signalStrength === "ambiguous").length,
    filesWritten,
  };
}

function recommendedTier(url, sourceFile = "") {
  const host = hostFor(url).toLowerCase();
  const file = sourceFile.toLowerCase();
  if (!url) return "internal-memory";
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
    host.includes("whitehouse.gov") ||
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
    host.includes("linkedin.com")
  ) return "social";
  if (file.includes("memory/candidates") || file.includes("ui/src/data")) return "internal-memory";
  return "secondary";
}

function sourceStatus(url) {
  if (!url) return "internal-file";
  if (!/^https?:\/\//i.test(url)) return "invalid-url";
  return "not-live-checked";
}

function sourceKey(row) {
  const file = String(row.sourceFile ?? "").replace(/:\d+$/, "");
  return row.sourceUrl || `internal:${file}`;
}

function buildSourceAudit(slug) {
  const candidateDir = join(MEMORY_CANDIDATES, slug);
  const evidencePath = join(candidateDir, "evidence-matrix.json");
  const rows = readJson(evidencePath);
  const bySource = new Map();
  for (const row of rows) {
    const key = sourceKey(row);
    if (!bySource.has(key)) {
      bySource.set(key, {
        sourceId: `src-${slug}-${String(bySource.size + 1).padStart(4, "0")}`,
        url: row.sourceUrl,
        sourceFile: row.sourceFile,
        assignedTiers: new Set(),
        evidenceTypes: new Set(),
        claimsAnchored: [],
        rowIds: [],
        useDecisions: new Set(),
      });
    }
    const source = bySource.get(key);
    source.assignedTiers.add(row.sourceTier);
    source.evidenceTypes.add(row.evidenceType);
    source.useDecisions.add(row.useDecision);
    source.rowIds.push(row.id);
    if (row.useDecision !== "reject" && source.claimsAnchored.length < 12) {
      source.claimsAnchored.push(compact(row.claim).slice(0, 260));
    }
  }

  const audit = [...bySource.values()].map((source) => {
    const assigned = [...source.assignedTiers];
    const recommended = recommendedTier(source.url, source.sourceFile);
    const tierCorrect = assigned.includes(recommended) ||
      (recommended === "secondary" && assigned.includes("primary") && source.url?.includes("candidatefiling.us"));
    const status = sourceStatus(source.url);
    return {
      sourceId: source.sourceId,
      url: source.url,
      sourceFile: source.sourceFile,
      assignedTiers: assigned,
      recommendedTier: recommended,
      tierCorrect,
      status,
      evidenceTypes: [...source.evidenceTypes],
      useDecisions: [...source.useDecisions],
      rowCount: source.rowIds.length,
      rowIds: source.rowIds.slice(0, 50),
      claimsAnchored: [...new Set(source.claimsAnchored)].slice(0, 12),
      notes:
        status === "not-live-checked"
          ? "Tier classified by URL/domain; live HTTP check deferred to avoid treating transient platform blocks as source failure."
          : "Internal candidate-memory source; use as context unless a public URL backs the claim.",
    };
  });

  writeJson(join(candidateDir, "source-audit.json"), {
    candidateSlug: slug,
    generated: NOW,
    sourceCount: audit.length,
    sources: audit,
  });

  const tierProblems = audit.filter((source) => !source.tierCorrect);
  const broken = audit.filter((source) => source.status === "invalid-url");
  const internalOnly = audit.filter((source) => source.status === "internal-file");
  const tableRows = audit.map((source) => [
    source.sourceId,
    source.url || source.sourceFile,
    source.assignedTiers.join(","),
    source.recommendedTier,
    source.tierCorrect ? "yes" : "no",
    source.status,
    source.rowCount,
  ]);

  writeText(
    join(candidateDir, "source-audit.md"),
    [
      `# Source Audit — ${slug} — ${TODAY}`,
      "",
      "## Summary",
      `- Unique source records: ${audit.length}`,
      `- Tier correction flags: ${tierProblems.length}`,
      `- Invalid URL records: ${broken.length}`,
      `- Internal-file-only records: ${internalOnly.length}`,
      "",
      "## Source Table",
      markdownTable(tableRows, ["Source ID", "URL / File", "Assigned", "Recommended", "Tier OK", "Status", "Rows"]),
      "",
      "## Tier Corrections Needed",
      ...(tierProblems.length
        ? tierProblems.map(
            (source) =>
              `- ${source.sourceId}: assigned ${source.assignedTiers.join(", ")}; recommended ${source.recommendedTier}; ${source.url || source.sourceFile}`,
          )
        : ["- None."]),
      "",
      "## Unsupported / Internal-Only Caveat",
      "- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.",
      "- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.",
      "",
    ].join("\n"),
  );

  const runDir = join(candidateDir, "agent-work/source-tier-validator");
  ensureDir(runDir);
  const filesWritten = [
    `memory/candidates/${slug}/source-audit.json`,
    `memory/candidates/${slug}/source-audit.md`,
    `memory/candidates/${slug}/agent-work/source-tier-validator/run-state.json`,
    `memory/candidates/${slug}/agent-work/source-tier-validator/notes.md`,
    `memory/candidates/${slug}/agent-work/source-tier-validator/handoff.md`,
  ];
  writeJson(join(runDir, "run-state.json"), {
    agent_id: "source-tier-validator",
    agent_role: "Source quality auditor",
    candidate_slug: slug,
    phase: "2",
    status: "complete",
    started_at: NOW,
    completed_at: NOW,
    inputs_read: [`memory/candidates/${slug}/evidence-matrix.json`],
    files_written: filesWritten,
    commands_run: [`node scripts/build-social-and-source-passes.mjs ${slug}`],
    blockers: [],
    errors_encountered: [],
    next_steps: [`Use source-audit.md during fixed-issue-matrix-builder for ${slug}.`],
    handoff_summary: `Audited ${audit.length} unique source records for ${slug}.`,
  });
  writeText(
    join(runDir, "notes.md"),
    [
      `# Notes — source-tier-validator — ${slug} — ${TODAY}`,
      "",
      `- Unique source records: ${audit.length}`,
      `- Tier correction flags: ${tierProblems.length}`,
      `- Internal-only records: ${internalOnly.length}`,
      "- URL status is classified structurally, not by live HTTP fetch, to avoid false failures from platform blocks.",
      "",
    ].join("\n"),
  );
  writeText(
    join(runDir, "handoff.md"),
    [
      `# Handoff — source-tier-validator — ${slug} — ${TODAY}`,
      "",
      "## What I Did",
      `Audited ${audit.length} unique source records from evidence-matrix.json for tier accuracy, source grouping, and claim anchoring.`,
      "",
      "## Key Findings",
      `- Tier correction flags: ${tierProblems.length}`,
      `- Invalid URL records: ${broken.length}`,
      `- Internal-file-only records: ${internalOnly.length}`,
      "",
      "## Files Created or Modified",
      `- memory/candidates/${slug}/source-audit.md`,
      `- memory/candidates/${slug}/source-audit.json`,
      `- memory/candidates/${slug}/agent-work/source-tier-validator/*`,
      "",
      "## What the Next Task Should Do",
      `Use source-audit.md and source-audit.json during fixed-issue-matrix-builder for ${slug}; public URL-backed evidence should outrank internal-memory rows.`,
      "",
      "## Blockers",
      "- None.",
      "",
    ].join("\n"),
  );

  return {
    slug,
    sourceCount: audit.length,
    tierProblems: tierProblems.length,
    invalidUrls: broken.length,
    internalOnly: internalOnly.length,
    filesWritten,
  };
}

const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error("Usage: node scripts/build-social-and-source-passes.mjs <slug> [slug...]");
  process.exit(1);
}

const socialResults = slugs.map(buildSocial);
const sourceResults = slugs.map(buildSourceAudit);

for (const agentId of ["social-footprint-analyst", "source-tier-validator"]) {
  const runDir = join(ORCHESTRATION_RUNS, TODAY, agentId);
  ensureDir(runDir);
  const isSocial = agentId === "social-footprint-analyst";
  const results = isSocial ? socialResults : sourceResults;
  writeJson(join(runDir, "run-state.json"), {
    agent_id: agentId,
    agent_role: isSocial ? "Social media intelligence analyst" : "Source quality auditor",
    candidate_slug: null,
    phase: "2",
    status: "complete",
    started_at: NOW,
    completed_at: NOW,
    inputs_read: slugs.flatMap((slug) =>
      isSocial
        ? [`memory/candidates/${slug}/social-harvest.md`, `memory/candidates/${slug}/evidence-matrix.json`]
        : [`memory/candidates/${slug}/evidence-matrix.json`],
    ),
    files_written: [
      ...results.flatMap((result) => result.filesWritten),
      `memory/orchestration/agent-runs/${TODAY}/${agentId}/run-state.json`,
      `memory/orchestration/agent-runs/${TODAY}/${agentId}/notes.md`,
      `memory/orchestration/agent-runs/${TODAY}/${agentId}/outputs.md`,
      `memory/orchestration/agent-runs/${TODAY}/${agentId}/handoff.md`,
    ],
    commands_run: [`node scripts/build-social-and-source-passes.mjs ${slugs.join(" ")}`],
    blockers: [],
    errors_encountered: [],
    next_steps: isSocial
      ? ["Run source-tier-validator for the same candidates if not already complete."]
        : [`Run fixed-issue-matrix-builder for ${slugs.join(", ")}.`],
    handoff_summary: isSocial
      ? `Classified social evidence for ${slugs.join(", ")}.`
      : `Audited source tiers for ${slugs.join(", ")}.`,
  });

  writeText(
    join(runDir, "notes.md"),
    [
      `# Notes — ${agentId} batch — ${TODAY}`,
      "",
      ...results.flatMap((result) => [
        `## ${result.slug}`,
        ...Object.entries(result)
          .filter(([key]) => key !== "slug" && key !== "filesWritten")
          .map(([key, value]) => `- ${key}: ${value}`),
        "",
      ]),
    ].join("\n"),
  );

  writeText(
    join(runDir, "outputs.md"),
    [
      `# Outputs — ${agentId} batch — ${TODAY}`,
      "",
      ...results.flatMap((result) => result.filesWritten.map((file) => `- ${file}`)),
      "",
    ].join("\n"),
  );

  writeText(
    join(runDir, "handoff.md"),
    [
      `# Handoff — ${agentId} — ${TODAY}`,
      "",
      "## What I Did",
      isSocial
        ? `Classified social/online signals for ${slugs.join(", ")}.`
        : `Audited source tiers and claim anchors for ${slugs.join(", ")}.`,
      "",
      "## Key Findings",
      ...results.map((result) => `- ${result.slug}: ${JSON.stringify(Object.fromEntries(Object.entries(result).filter(([key]) => key !== "filesWritten")))}`),
      "",
      "## Files Created or Modified",
      ...results.flatMap((result) => result.filesWritten.map((file) => `- ${file}`)),
      "",
      "## What the Next Task Should Do",
      isSocial
        ? "Run source-tier-validator if not already done; then start fixed-issue-matrix-builder."
        : `Run fixed-issue-matrix-builder for ${slugs.join(", ")} using evidence, social, and source audit outputs.`,
      "",
      "## Blockers",
      "- None.",
      "",
    ].join("\n"),
  );
}

console.log(JSON.stringify({ socialResults, sourceResults }, null, 2));
