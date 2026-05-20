#!/usr/bin/env node
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const ORCHESTRATION_RUNS = join(ROOT, "memory/orchestration/agent-runs");
const TODAY = "2026-05-20";
const NOW = "2026-05-20T17:15:00Z";

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

const TIER_RANK = {
  primary: 4,
  secondary: 3,
  social: 2,
  "internal-memory": 1,
};

const USE_RANK = {
  use: 5,
  "use-with-caveat": 4,
  "source-only": 3,
  "background-only": 2,
  reject: 1,
};

const CONFIDENCE_RANK = {
  confirmed: 5,
  likely: 4,
  "weak-signal": 3,
  unknown: 2,
  contradicted: 1,
};

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  ensureDir(dirname(path));
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compactText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function isNonSubstantive(row) {
  const text = compactText(`${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""}`);
  if (!text) return true;
  if (/^[-_*#\s]+$/.test(text)) return true;
  if (/^(url|source|sources|publisher|accessed|claimsanchored|id|tier|agent|source handling|issue mapping|election grouping|incumbent|position):?\s/i.test(text)) return true;
  if (/^\{?\s*"?id"?\s*:/i.test(text)) return true;
  if (/^"?sourceids"?\s*:/i.test(text)) return true;
  if (/^"?socialsignals"?\s*:/i.test(text)) return true;
  if (/^"?issues"?\s*:/i.test(text)) return true;
  return false;
}

function hasCaveatLanguage(row) {
  return /\b(caveat|conflict|contradict|blocked|unverified|unclear|unknown|could not|cannot confirm|not confirmed|no direct|limitation|unsupported|stale|final filing|unofficial)\b/i.test(
    `${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""} ${row.reasonForDecision ?? ""}`,
  );
}

function hasContradictionLanguage(row) {
  return /\b(source conflict|sources? conflict|sources? disagree|conflict(?:s|ed)? (?:on|between)|conflicts? with (?:the )?(?:current|official|source|senate|campaign|record|bio|biography)|contradict(?:s|ed|ion)|mismatch|material disagreement)\b/i.test(
    `${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""} ${row.reasonForDecision ?? ""}`,
  );
}

function loadCandidateAliases() {
  const dir = join(ROOT, "ui/src/data/v2");
  const aliases = new Map();
  const commonLastNames = new Set([
    "lane",
    "day",
    "ray",
    "wood",
    "park",
    "brown",
    "smith",
    "johnson",
    "wilson",
  ]);
  for (const file of readdirSync(dir).filter((entry) => entry.endsWith(".ts") && entry !== "index.ts")) {
    const text = readFileSync(join(dir, file), "utf8");
    const slug = file.replace(/\.ts$/, "");
    const name = text.match(/"name":\s*"([^"]+)"/)?.[1];
    if (!name) continue;
    const parts = name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    const these = new Set([name.toLowerCase()]);
    const last = parts.at(-1);
    if (last && last.length >= 5 && !commonLastNames.has(last)) {
      these.add(last);
    }
    aliases.set(slug, [...these]);
  }
  return aliases;
}

const CANDIDATE_ALIASES = loadCandidateAliases();

function hasCandidateAlias(text, slug) {
  const aliases = CANDIDATE_ALIASES.get(slug) ?? [];
  const haystack = ` ${normalizeText(text)} `;
  return aliases.some((alias) => haystack.includes(` ${normalizeText(alias)} `));
}

function isCrossCandidateContamination(row) {
  const currentSlug = row.candidateSlug;
  const text = `${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""}`;
  if (hasCandidateAlias(text, currentSlug)) return false;

  const haystack = ` ${normalizeText(text)} `;
  for (const [slug, aliases] of CANDIDATE_ALIASES.entries()) {
    if (slug === currentSlug) continue;
    if (aliases.some((alias) => haystack.includes(` ${normalizeText(alias)} `))) {
      return true;
    }
  }
  return false;
}

function asIssueNumbers(raw, row) {
  const values = new Set();
  for (const item of Array.isArray(raw) ? raw : []) {
    const value = Number(item);
    if (Number.isInteger(value) && value >= 1 && value <= 14) {
      values.add(value);
    }
  }

  const haystack = `${row.evidenceType ?? ""} ${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""}`;
  for (const [issue, pattern] of ISSUE_PATTERNS) {
    if (pattern.test(haystack)) values.add(issue);
  }

  if (row.evidenceType === "donor/funding") values.add(13);
  if (row.evidenceType === "ballot status") {
    values.add(10);
    values.add(13);
  }
  if (row.evidenceType === "church/worship") values.add(4);
  if (row.evidenceType === "legal/court") {
    values.add(10);
    values.add(11);
  }
  if (row.evidenceType === "meeting record" || row.evidenceType === "public office") {
    values.add(13);
  }

  return [...values].sort((a, b) => a - b);
}

function chooseBest(rows) {
  return [...rows].sort((a, b) => {
    const tier = (TIER_RANK[b.sourceTier] ?? 0) - (TIER_RANK[a.sourceTier] ?? 0);
    if (tier) return tier;
    const use = (USE_RANK[b.useDecision] ?? 0) - (USE_RANK[a.useDecision] ?? 0);
    if (use) return use;
    const url = Number(Boolean(b.sourceUrl)) - Number(Boolean(a.sourceUrl));
    if (url) return url;
    const issueCount = (b.issueMappedTo?.length ?? 0) - (a.issueMappedTo?.length ?? 0);
    if (issueCount) return issueCount;
    return compactText(b.exactEvidenceSummary).length - compactText(a.exactEvidenceSummary).length;
  })[0];
}

function groupKey(row) {
  const claim = normalizeText(row.claim || row.exactEvidenceSummary);
  if (claim.length > 24) return claim;
  return normalizeText(`${row.evidenceType ?? ""} ${row.sourceUrl ?? ""} ${row.exactEvidenceSummary ?? ""}`);
}

function finalConfidence(best, groupRows, issueMappedTo) {
  if (hasContradictionLanguage(best)) return "contradicted";
  if (best.sourceTier === "social") return "weak-signal";
  if (!best.sourceUrl && best.sourceTier === "internal-memory") return "unknown";

  const primaryUrls = new Set(
    groupRows
      .filter((row) => row.sourceTier === "primary" && row.sourceUrl)
      .map((row) => row.sourceUrl),
  );
  if (primaryUrls.size >= 2) return "confirmed";
  if (best.sourceTier === "primary" && best.sourceUrl && !hasCaveatLanguage(best)) return "confirmed";
  if ((best.sourceTier === "primary" || best.sourceTier === "secondary") && best.sourceUrl) return "likely";
  if (issueMappedTo.length > 0 && best.confidence === "likely") return "likely";
  return "unknown";
}

function finalUseDecision(best, confidence, issueMappedTo) {
  if (isCrossCandidateContamination(best)) return "reject";
  if (isNonSubstantive(best)) return "reject";
  if (confidence === "contradicted") return "use-with-caveat";
  if (best.sourceTier === "internal-memory" && !best.sourceUrl) return "background-only";
  if (best.sourceTier === "social") {
    return issueMappedTo.length > 0 ? "use-with-caveat" : "background-only";
  }
  if (hasCaveatLanguage(best)) return "use-with-caveat";
  if (best.sourceUrl && issueMappedTo.length === 0) return "source-only";
  if (best.sourceUrl) return "use";
  return best.useDecision === "use" ? "use-with-caveat" : "background-only";
}

function reasonFor(best, confidence, useDecision, groupRows) {
  if (useDecision === "reject") {
    if (isCrossCandidateContamination(best)) {
      return "Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.";
    }
    return "Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.";
  }
  if (confidence === "contradicted") {
    return "Use only with caveat because the raw matrix flagged conflicting or contradictory source language.";
  }
  if (useDecision === "background-only") {
    if (best.sourceTier === "internal-memory" && !best.sourceUrl) {
      return "Preserved for context, but not used as a standalone public claim because it is internal memory without a public URL.";
    }
    return "Preserved for context because the row is useful background but lacks enough public support or issue specificity for direct profile use.";
  }
  if (useDecision === "source-only") {
    return "Kept as a source-trail pointer; the row identifies a useful public source but does not itself state a complete voter-facing claim.";
  }
  if (useDecision === "use-with-caveat") {
    if (best.sourceTier === "social") {
      return "Usable only as an observed public social/online signal, not as a confirmed policy position or belief.";
    }
    if (hasCaveatLanguage(best)) {
      return "Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.";
    }
    return "Usable with caveat because the claim is relevant but rests on limited or indirect support.";
  }
  const duplicateNote =
    groupRows.length > 1 ? ` Deduplicated from ${groupRows.length} raw rows.` : "";
  return `Usable as sourced evidence; best available row has ${best.sourceTier} tier support.${duplicateNote}`.trim();
}

function tally(rows, field) {
  return rows.reduce((acc, row) => {
    const key = row[field] ?? "missing";
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
}

function issueCoverage(rows) {
  const out = {};
  for (let issue = 1; issue <= 14; issue += 1) {
    out[issue] = rows.filter((row) => row.issueMappedTo.includes(issue)).length;
  }
  return out;
}

function topRows(rows, predicate, limit = 25) {
  return rows.filter(predicate).slice(0, limit);
}

function toMarkdownTable(rows, headers) {
  const matrix = [headers, ...rows];
  const widths = headers.map((_, i) =>
    Math.max(...matrix.map((row) => String(row[i] ?? "").length)),
  );
  return matrix
    .map((row, index) => {
      const rendered = `| ${row.map((cell, i) => String(cell ?? "").padEnd(widths[i])).join(" | ")} |`;
      if (index === 0) {
        return `${rendered}\n| ${widths.map((w) => "-".repeat(w)).join(" | ")} |`;
      }
      return rendered;
    })
    .join("\n");
}

function buildCandidate(slug) {
  const candidateDir = join(MEMORY_CANDIDATES, slug);
  const rawPath = join(candidateDir, "evidence-matrix-raw.json");
  const minerNotesPath = join(candidateDir, "agent-work/candidate-evidence-miner/notes.md");
  if (!existsSync(rawPath)) {
    throw new Error(`Missing raw matrix for ${slug}: ${rawPath}`);
  }

  const rawRows = readJson(rawPath);
  const groups = new Map();
  for (const row of rawRows) {
    const key = groupKey(row);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }

  const finalRows = [];
  let index = 1;
  for (const groupRows of groups.values()) {
    const best = chooseBest(groupRows);
    const issueMappedTo = asIssueNumbers(best.issueMappedTo, best);
    const confidence = finalConfidence(best, groupRows, issueMappedTo);
    const useDecision = finalUseDecision(best, confidence, issueMappedTo);
    const sourceIds = [
      ...new Set(groupRows.flatMap((row) => Array.isArray(row.sourceIds) ? row.sourceIds : [])),
    ];
    const supportingSourceUrls = [
      ...new Set(groupRows.map((row) => row.sourceUrl).filter(Boolean)),
    ];
    const supportingSourceFiles = [
      ...new Set(groupRows.map((row) => row.sourceFile).filter(Boolean)),
    ];

    finalRows.push({
      id: `em-${slug}-${String(index).padStart(5, "0")}`,
      candidateSlug: best.candidateSlug,
      candidateName: best.candidateName,
      raceSlug: best.raceSlug,
      sourceFile: best.sourceFile,
      sourceUrl: best.sourceUrl ?? null,
      sourceTier: best.sourceTier,
      evidenceType: best.evidenceType,
      issueMappedTo,
      claim: compactText(best.claim),
      exactEvidenceSummary: compactText(best.exactEvidenceSummary),
      confidence,
      useDecision,
      reasonForDecision: reasonFor(best, confidence, useDecision, groupRows),
      sourceIds,
      rawRowIds: groupRows.map((row) => row.id).filter(Boolean),
      duplicateCount: groupRows.length,
      supportingSourceUrls,
      supportingSourceFiles,
    });
    index += 1;
  }

  finalRows.sort((a, b) => {
    const use = (USE_RANK[b.useDecision] ?? 0) - (USE_RANK[a.useDecision] ?? 0);
    if (use) return use;
    const confidence = (CONFIDENCE_RANK[b.confidence] ?? 0) - (CONFIDENCE_RANK[a.confidence] ?? 0);
    if (confidence) return confidence;
    const issue = (a.issueMappedTo[0] ?? 99) - (b.issueMappedTo[0] ?? 99);
    if (issue) return issue;
    return a.id.localeCompare(b.id);
  });

  const outputPath = join(candidateDir, "evidence-matrix.json");
  writeJson(outputPath, finalRows);

  const runDir = join(candidateDir, "agent-work/evidence-matrix-builder");
  ensureDir(runDir);
  const inputsRead = [
    rawPath.replace(`${ROOT}/`, ""),
    existsSync(minerNotesPath) ? minerNotesPath.replace(`${ROOT}/`, "") : null,
  ].filter(Boolean);

  const filesWritten = [
    outputPath,
    join(runDir, "run-state.json"),
    join(runDir, "notes.md"),
    join(runDir, "handoff.md"),
  ].map((path) => path.replace(`${ROOT}/`, ""));

  const rejected = finalRows.filter((row) => row.useDecision === "reject");
  const caveated = finalRows.filter((row) => row.useDecision === "use-with-caveat");
  const unresolved = finalRows.filter((row) => row.confidence === "contradicted");
  const sourceOnly = finalRows.filter((row) => row.useDecision === "source-only");
  const noIssue = finalRows.filter((row) => row.issueMappedTo.length === 0);

  const issueRows = Object.entries(issueCoverage(finalRows)).map(([issue, count]) => [
    issue,
    ISSUE_LABELS[issue],
    count,
  ]);

  const notes = [
    `# Notes — evidence-matrix-builder — ${slug} — ${TODAY}`,
    "",
    "## Summary",
    `- Raw rows read: ${rawRows.length}`,
    `- Final deduplicated rows written: ${finalRows.length}`,
    `- Duplicate rows absorbed: ${rawRows.length - finalRows.length}`,
    `- Rejected rows retained in final matrix: ${rejected.length}`,
    `- Use-with-caveat rows: ${caveated.length}`,
    `- Source-only rows: ${sourceOnly.length}`,
    `- Rows without issue mapping: ${noIssue.length}`,
    "",
    "## Final Use Decisions",
    "```json",
    JSON.stringify(tally(finalRows, "useDecision"), null, 2),
    "```",
    "",
    "## Final Confidence",
    "```json",
    JSON.stringify(tally(finalRows, "confidence"), null, 2),
    "```",
    "",
    "## Source Tiers",
    "```json",
    JSON.stringify(tally(finalRows, "sourceTier"), null, 2),
    "```",
    "",
    "## Issue Coverage",
    toMarkdownTable(issueRows, ["Issue", "Title", "Rows"]),
    "",
    "## Conflict / Caveat Review",
    unresolved.length
      ? `- ${unresolved.length} rows are marked contradicted and must not be asserted without explicit caveat.`
      : "- No final rows were marked contradicted by the builder.",
    `- ${caveated.length} rows require caveat language if used downstream.`,
    "",
    "## Representative Caveated Rows",
    ...topRows(finalRows, (row) => row.useDecision === "use-with-caveat", 20).map(
      (row) => `- ${row.id}: ${row.claim.slice(0, 220)} — ${row.reasonForDecision}`,
    ),
    "",
    "## Representative Rejected Rows",
    ...topRows(rejected, () => true, 20).map(
      (row) => `- ${row.id}: ${row.claim.slice(0, 220)} — ${row.reasonForDecision}`,
    ),
    "",
    "## Builder Decisions",
    "- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.",
    "- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.",
    "- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.",
    "- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.",
    "- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.",
    "",
  ].join("\n");

  writeFileSync(join(runDir, "notes.md"), notes);

  const handoff = [
    `# Handoff — evidence-matrix-builder — ${slug} — ${TODAY}`,
    "",
    "## What I Did",
    `Read ${rawRows.length} raw evidence rows and wrote ${finalRows.length} deduplicated, reconciled rows to evidence-matrix.json.`,
    "",
    "## Key Findings",
    `- ${rawRows.length - finalRows.length} duplicate raw rows were absorbed into canonical rows.`,
    `- ${finalRows.filter((row) => row.useDecision === "use").length} rows are marked use.`,
    `- ${caveated.length} rows are marked use-with-caveat.`,
    unresolved.length
      ? `- ${unresolved.length} row(s) are marked contradicted; these are resolved caveat rows, not blockers.`
      : "- No rows are marked contradicted.",
    `- ${sourceOnly.length} rows are source-only.`,
    `- ${rejected.length} rows are retained as reject for auditability.`,
    `- ${noIssue.length} rows currently have no issue mapping and should be treated as background/source-trail material unless later mapped by a specialist.`,
    "",
    "## Files Created or Modified",
    `- memory/candidates/${slug}/evidence-matrix.json: final reconciled evidence matrix.`,
    `- memory/candidates/${slug}/agent-work/evidence-matrix-builder/notes.md: deduplication, confidence, issue-coverage, and rejection notes.`,
    `- memory/candidates/${slug}/agent-work/evidence-matrix-builder/run-state.json: execution metadata.`,
    `- memory/candidates/${slug}/agent-work/evidence-matrix-builder/handoff.md: this handoff.`,
    "",
    "## What the Next Task Should Do",
    `Run social-footprint-analyst for ${slug}, using social-harvest.md plus social/social-like/social-follow/social-comment/public-absence rows from evidence-matrix.json. Then run source-tier-validator for this same candidate.`,
    "",
    "## Blockers",
    "- None.",
    "",
    "## Assumptions",
    "- Final matrix keeps rejected/non-substantive rows with useDecision=reject so future reviewers can see what was filtered and why.",
    "- Existing raw source tier labels were used as the starting point and only behaviorally downgraded through confidence/useDecision here; full URL health and tier correction belongs to source-tier-validator.",
    "",
  ].join("\n");

  writeFileSync(join(runDir, "handoff.md"), handoff);

  writeJson(join(runDir, "run-state.json"), {
    agent_id: "evidence-matrix-builder",
    agent_role: "Analytical evidence reconciler",
    candidate_slug: slug,
    phase: "2",
    status: "complete",
    started_at: NOW,
    completed_at: NOW,
    inputs_read: inputsRead,
    files_written: filesWritten,
    commands_run: ["node scripts/build-evidence-matrix.mjs roger-marshall damon-anderson jason-hart"],
    blockers: [],
    errors_encountered: [],
    next_steps: [
      `Run social-footprint-analyst for ${slug}.`,
      `Run source-tier-validator for ${slug}.`,
    ],
    handoff_summary: `Built final evidence matrix for ${slug}: ${rawRows.length} raw rows to ${finalRows.length} deduplicated rows.`,
  });

  return {
    slug,
    rawRows: rawRows.length,
    finalRows: finalRows.length,
    duplicateRowsAbsorbed: rawRows.length - finalRows.length,
    useDecision: tally(finalRows, "useDecision"),
    confidence: tally(finalRows, "confidence"),
    sourceTier: tally(finalRows, "sourceTier"),
    issueCoverage: issueCoverage(finalRows),
    filesWritten,
    contradictedRows: unresolved.length,
  };
}

const slugs = process.argv.slice(2);
if (slugs.length === 0) {
  console.error("Usage: node scripts/build-evidence-matrix.mjs <slug> [slug...]");
  process.exit(1);
}

const results = slugs.map(buildCandidate);

const globalRunDir = join(ORCHESTRATION_RUNS, TODAY, "evidence-matrix-builder");
ensureDir(globalRunDir);

writeJson(join(globalRunDir, "run-state.json"), {
  agent_id: "evidence-matrix-builder",
  agent_role: "Analytical evidence reconciler",
  candidate_slug: null,
  phase: "2",
  status: "complete",
  started_at: NOW,
  completed_at: NOW,
  inputs_read: slugs.flatMap((slug) => [
    `memory/candidates/${slug}/evidence-matrix-raw.json`,
    `memory/candidates/${slug}/agent-work/candidate-evidence-miner/notes.md`,
  ]),
  files_written: [
    ...results.flatMap((result) => result.filesWritten),
    `memory/orchestration/agent-runs/${TODAY}/evidence-matrix-builder/run-state.json`,
    `memory/orchestration/agent-runs/${TODAY}/evidence-matrix-builder/notes.md`,
    `memory/orchestration/agent-runs/${TODAY}/evidence-matrix-builder/outputs.md`,
    `memory/orchestration/agent-runs/${TODAY}/evidence-matrix-builder/handoff.md`,
  ],
  commands_run: [
    "cd ui && npx tsc --noEmit --incremental false",
    "node scripts/build-evidence-matrix.mjs roger-marshall damon-anderson jason-hart",
  ],
  blockers: [],
  errors_encountered: [],
  next_steps: [
    "Run social-footprint-analyst for roger-marshall, damon-anderson, and jason-hart.",
    "Run source-tier-validator for roger-marshall, damon-anderson, and jason-hart.",
    "Continue candidate-evidence-miner on the next federal batch after this validator batch is queued.",
  ],
  handoff_summary: `Built final evidence matrices for ${slugs.join(", ")}.`,
});

const notes = [
  `# Notes — evidence-matrix-builder batch — ${TODAY}`,
  "",
  ...results.flatMap((result) => [
    `## ${result.slug}`,
    `- Raw rows: ${result.rawRows}`,
    `- Final rows: ${result.finalRows}`,
    `- Duplicate rows absorbed: ${result.duplicateRowsAbsorbed}`,
    `- Use decisions: \`${JSON.stringify(result.useDecision)}\``,
    `- Confidence: \`${JSON.stringify(result.confidence)}\``,
    `- Source tiers: \`${JSON.stringify(result.sourceTier)}\``,
    "",
  ]),
].join("\n");

writeFileSync(join(globalRunDir, "notes.md"), notes);

writeFileSync(
  join(globalRunDir, "outputs.md"),
  [
    `# Outputs — evidence-matrix-builder batch — ${TODAY}`,
    "",
    ...slugs.map((slug) => `- memory/candidates/${slug}/evidence-matrix.json`),
    ...slugs.map((slug) => `- memory/candidates/${slug}/agent-work/evidence-matrix-builder/*`),
    "",
  ].join("\n"),
);

writeFileSync(
  join(globalRunDir, "handoff.md"),
  [
    `# Handoff — evidence-matrix-builder — ${TODAY}`,
    "",
    "## What I Did",
    `Built final evidence-matrix.json files for ${slugs.join(", ")} from the raw line-level matrices produced by candidate-evidence-miner.`,
    "",
    "## Key Findings",
    ...results.map(
      (result) =>
        `- ${result.slug}: ${result.rawRows} raw rows → ${result.finalRows} final rows; use decisions ${JSON.stringify(result.useDecision)}.`,
    ),
    "",
    "## Files Created or Modified",
    ...slugs.map((slug) => `- memory/candidates/${slug}/evidence-matrix.json: final reconciled evidence matrix.`),
    ...slugs.map((slug) => `- memory/candidates/${slug}/agent-work/evidence-matrix-builder/*: candidate-specific run files.`),
    "- memory/orchestration/agent-runs/2026-05-20/evidence-matrix-builder/*: batch run files.",
    "- scripts/build-evidence-matrix.mjs: reusable builder used for this batch.",
    "",
    "## What the Next Task Should Do",
    "Run social-footprint-analyst for roger-marshall, damon-anderson, and jason-hart, then run source-tier-validator for the same three candidates.",
    "",
    "## Blockers for Next Task",
    "- None.",
    "",
    "## Decisions I Made That Could Be Questioned",
    "The builder retained rejected/non-substantive rows in the final matrix with useDecision=reject rather than deleting them. This makes rejection auditable and avoids losing extracted research, at the cost of larger matrix files.",
    "",
  ].join("\n"),
);

nodeReplWrite(JSON.stringify(results, null, 2));

function nodeReplWrite(text) {
  process.stdout.write(`${text}\n`);
}
