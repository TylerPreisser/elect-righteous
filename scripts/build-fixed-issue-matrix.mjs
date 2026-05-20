#!/usr/bin/env node
import { execFileSync } from "node:child_process";
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

const ISSUES = [
  [1, "Abortion / life"],
  [2, "LGBT / gender / parental rights"],
  [3, "Education / curriculum / schools"],
  [4, "Religious liberty / church / civic morality"],
  [5, "Taxes / spending / debt"],
  [6, "Economy / jobs / labor"],
  [7, "Guns / Second Amendment"],
  [8, "Immigration / border"],
  [9, "Health care / insurance / Medicaid"],
  [10, "Election integrity / voting / courts"],
  [11, "Public safety / law enforcement / criminal justice"],
  [12, "Agriculture / rural economy / water"],
  [13, "Local governance / transparency / ethics"],
  [14, "Environment / energy / land use"],
];

const RANK = {
  use: 5,
  "use-with-caveat": 4,
  "source-only": 3,
  "background-only": 2,
  reject: 1,
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

function writeText(path, value) {
  ensureDir(dirname(path));
  writeFileSync(path, value);
}

function compact(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function excerpt(value, limit = 900) {
  const text = compact(value);
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1)}…`;
}

function classifyEvidence(row) {
  if (row.evidenceType === "campaign statement") return "candidate-stated";
  if (["voting record", "meeting record", "public office", "legal/court", "ballot status"].includes(row.evidenceType)) {
    return "documented-record";
  }
  if (row.evidenceType === "donor/funding" || row.evidenceType === "endorsement") return "donor-organization-signal";
  if (row.evidenceType?.startsWith("social") || row.evidenceType === "public absence" || row.sourceTier === "social") {
    return "social-online-signal";
  }
  if (row.evidenceType === "church/worship") return "faith-community-record";
  if (row.evidenceType === "controversy") return "public-controversy";
  return "background-context";
}

function evidenceSort(a, b) {
  const use = (RANK[b.useDecision] ?? 0) - (RANK[a.useDecision] ?? 0);
  if (use) return use;
  const source = Number(Boolean(b.sourceUrl)) - Number(Boolean(a.sourceUrl));
  if (source) return source;
  return String(a.id).localeCompare(String(b.id));
}

function sourceLabel(row) {
  if (row.sourceUrl) return row.sourceUrl;
  return row.sourceFile;
}

function buildIssueEntry(issueNumber, issueTitle, evidenceRows, socialSignals, sourceAudit) {
  const rows = evidenceRows
    .filter((row) => row.issueMappedTo?.includes(issueNumber) && row.useDecision !== "reject")
    .sort(evidenceSort);
  const social = socialSignals.filter((signal) => signal.issueMappedTo?.includes(issueNumber));

  const byClass = {
    "candidate-stated": rows.filter((row) => classifyEvidence(row) === "candidate-stated").slice(0, 8),
    "documented-record": rows.filter((row) => classifyEvidence(row) === "documented-record").slice(0, 8),
    "donor-organization-signal": rows.filter((row) => classifyEvidence(row) === "donor-organization-signal").slice(0, 6),
    "social-online-signal": rows.filter((row) => classifyEvidence(row) === "social-online-signal").slice(0, 8),
    "faith-community-record": rows.filter((row) => classifyEvidence(row) === "faith-community-record").slice(0, 4),
    "public-controversy": rows.filter((row) => classifyEvidence(row) === "public-controversy").slice(0, 4),
    "background-context": rows.filter((row) => classifyEvidence(row) === "background-context").slice(0, 6),
  };

  const evidenceItems = Object.entries(byClass).flatMap(([classification, items]) =>
    items.map((row) => ({
      evidenceRowId: row.id,
      classification,
      text: excerpt(row.claim || row.exactEvidenceSummary),
      sourceIds: row.sourceIds ?? [],
      sourceUrl: row.sourceUrl,
      sourceFile: row.sourceFile,
      confidence: row.confidence,
      useDecision: row.useDecision,
      caveat:
        row.useDecision === "use-with-caveat"
          ? row.reasonForDecision
          : classification === "social-online-signal"
            ? "Social/online signal only; do not infer belief or policy position from this item alone."
            : undefined,
    })),
  );

  const socialItems = social
    .filter((signal) => signal.signalStrength !== "not-usable")
    .slice(0, 10)
    .map((signal) => ({
      socialSignalId: signal.id,
      evidenceRowId: signal.evidenceRowId,
      platform: signal.platform,
      actionType: signal.actionType,
      signalStrength: signal.signalStrength,
      observation: excerpt(signal.observation),
      sourceUrl: signal.sourceUrl,
      caveat: signal.caveat,
    }));

  const sourceCoverage = rows.reduce(
    (acc, row) => {
      if (row.sourceUrl) acc.publicUrlRows += 1;
      if (row.sourceTier === "primary") acc.primary += 1;
      if (row.sourceTier === "secondary") acc.secondary += 1;
      if (row.sourceTier === "social") acc.social += 1;
      if (row.sourceTier === "internal-memory") acc.internalMemory += 1;
      return acc;
    },
    { primary: 0, secondary: 0, social: 0, internalMemory: 0, publicUrlRows: 0 },
  );

  const summary = evidenceItems.length
    ? `${issueTitle}: ${evidenceItems.length} selected evidence items from ${rows.length} mapped rows. Public URL-backed rows: ${sourceCoverage.publicUrlRows}.`
    : `No relevant public evidence was found for ${issueTitle} after searching the evidence matrix, social-evidence-matrix, and source audit for this candidate.`;

  return {
    issueNumber,
    title: issueTitle,
    summary,
    evidenceItems,
    socialSignals: socialItems,
    sourceCoverage,
    caveats: [
      ...(evidenceItems.length ? [] : ["No relevant public evidence found in the current matrix pass; do not infer a position from party, faith, follows, likes, or associations."]),
      ...(socialItems.length ? ["Social signals are observations only and are not treated as confirmed beliefs or policy positions."] : []),
      ...(sourceCoverage.internalMemory > sourceCoverage.publicUrlRows ? ["This issue still relies heavily on internal-memory rows; downstream profile writers should prefer public URL-backed rows where possible."] : []),
    ],
  };
}

function yamlDump(value) {
  return execFileSync(
    "ruby",
    ["-ryaml", "-rjson", "-e", "obj=JSON.parse(STDIN.read); print YAML.dump(obj).sub(/^---\\n/, '')"],
    { input: JSON.stringify(value), encoding: "utf8", maxBuffer: 1024 * 1024 * 128 },
  ).replace(/[ \t]+$/gm, "");
}

function patchV2Issues(path, fixedIssueMatrix) {
  const text = readFileSync(path, "utf8");
  if (text.trim().startsWith("{")) {
    const obj = JSON.parse(text);
    obj.fixed_issue_matrix = fixedIssueMatrix;
    writeFileSync(path, `${JSON.stringify(obj, null, 2)}\n`);
    return;
  }

  const markerStart = "# BEGIN FIXED 14 ISSUE MATRIX";
  const markerEnd = "# END FIXED 14 ISSUE MATRIX";
  const withoutOld = text.replace(
    new RegExp(`\\n?${markerStart}[\\s\\S]*?${markerEnd}\\n?`, "m"),
    "\n",
  ).replace(/\s+$/, "\n");
  const block = `${markerStart}\n${yamlDump({ fixed_issue_matrix: fixedIssueMatrix })}${markerEnd}\n`;
  writeFileSync(path, `${withoutOld}\n${block}`);
}

function markdownFor(slug, matrix) {
  const lines = [
    `# Fixed 14-Issue Matrix — ${slug} — ${TODAY}`,
    "",
    "This matrix is built from `evidence-matrix.json`, `social-evidence-matrix.json`, and `source-audit.json`. It is a candidate-rebuild input, not final public prose.",
    "",
  ];

  for (const issue of matrix) {
    lines.push(`## ${issue.issueNumber}. ${issue.title}`);
    lines.push("");
    lines.push(issue.summary);
    lines.push("");
    if (issue.evidenceItems.length) {
      lines.push("### Evidence");
      for (const item of issue.evidenceItems) {
        lines.push(`- **${item.classification}** [${item.evidenceRowId}] ${item.text}`);
        lines.push(`  - Source: ${item.sourceUrl || item.sourceFile}`);
        lines.push(`  - Confidence/use: ${item.confidence} / ${item.useDecision}`);
        if (item.caveat) lines.push(`  - Caveat: ${item.caveat}`);
      }
      lines.push("");
    }
    if (issue.socialSignals.length) {
      lines.push("### Social / Online Signals");
      for (const signal of issue.socialSignals) {
        lines.push(`- **${signal.signalStrength} ${signal.platform} ${signal.actionType}** [${signal.socialSignalId}] ${signal.observation}`);
        if (signal.sourceUrl) lines.push(`  - Source: ${signal.sourceUrl}`);
        lines.push(`  - Caveat: ${signal.caveat}`);
      }
      lines.push("");
    }
    if (issue.caveats.length) {
      lines.push("### Caveats");
      for (const caveat of issue.caveats) lines.push(`- ${caveat}`);
      lines.push("");
    }
  }
  while (lines.at(-1) === "") lines.pop();
  return `${lines.join("\n")}\n`;
}

function buildForSlug(slug) {
  const dir = join(MEMORY_CANDIDATES, slug);
  const evidence = readJson(join(dir, "evidence-matrix.json"));
  const social = readJson(join(dir, "social-evidence-matrix.json"));
  const sourceAudit = readJson(join(dir, "source-audit.json"));

  const matrix = ISSUES.map(([number, title]) =>
    buildIssueEntry(number, title, evidence, social.signals ?? [], sourceAudit),
  );

  writeText(join(dir, "issue-matrix.md"), markdownFor(slug, matrix));
  writeJson(join(dir, "fixed-issue-matrix.json"), {
    candidateSlug: slug,
    generated: NOW,
    issueCount: matrix.length,
    issues: matrix,
  });
  patchV2Issues(join(dir, "v2-issues.yaml"), matrix);

  const runDir = join(dir, "agent-work/fixed-issue-matrix-builder");
  ensureDir(runDir);
  const filesWritten = [
    `memory/candidates/${slug}/issue-matrix.md`,
    `memory/candidates/${slug}/fixed-issue-matrix.json`,
    `memory/candidates/${slug}/v2-issues.yaml`,
    `memory/candidates/${slug}/agent-work/fixed-issue-matrix-builder/run-state.json`,
    `memory/candidates/${slug}/agent-work/fixed-issue-matrix-builder/notes.md`,
    `memory/candidates/${slug}/agent-work/fixed-issue-matrix-builder/handoff.md`,
  ];
  const emptyIssues = matrix.filter((issue) => issue.evidenceItems.length === 0);
  const socialOnlyIssues = matrix.filter((issue) => issue.evidenceItems.length > 0 && issue.evidenceItems.every((item) => item.classification === "social-online-signal"));

  writeJson(join(runDir, "run-state.json"), {
    agent_id: "fixed-issue-matrix-builder",
    agent_role: "Issue-by-issue content builder",
    candidate_slug: slug,
    phase: "3",
    status: "complete",
    started_at: NOW,
    completed_at: NOW,
    inputs_read: [
      `memory/candidates/${slug}/evidence-matrix.json`,
      `memory/candidates/${slug}/social-evidence-matrix.json`,
      `memory/candidates/${slug}/source-audit.json`,
    ],
    files_written: filesWritten,
    commands_run: [`node scripts/build-fixed-issue-matrix.mjs ${slug}`],
    blockers: [],
    errors_encountered: [],
    next_steps: [`Run biography/record/funding/faith/profile assembler passes for ${slug}.`],
    handoff_summary: `Built fixed 14-issue matrix for ${slug}.`,
  });

  writeText(
    join(runDir, "notes.md"),
    [
      `# Notes — fixed-issue-matrix-builder — ${slug} — ${TODAY}`,
      "",
      `- Fixed issues written: ${matrix.length}`,
      `- Empty issues: ${emptyIssues.length}`,
      `- Social-only issues: ${socialOnlyIssues.length}`,
      `- Total selected evidence items: ${matrix.reduce((sum, issue) => sum + issue.evidenceItems.length, 0)}`,
      `- Total selected social signals: ${matrix.reduce((sum, issue) => sum + issue.socialSignals.length, 0)}`,
      "",
    ].join("\n"),
  );

  writeText(
    join(runDir, "handoff.md"),
    [
      `# Handoff — fixed-issue-matrix-builder — ${slug} — ${TODAY}`,
      "",
      "## What I Did",
      "Built the required 14-issue matrix from the candidate's evidence, social, and source-audit artifacts.",
      "",
      "## Key Findings",
      `- Fixed issues written: ${matrix.length}`,
      `- Empty issues: ${emptyIssues.length}`,
      `- Social-only issues: ${socialOnlyIssues.length}`,
      "",
      "## Files Created or Modified",
      ...filesWritten.map((file) => `- ${file}`),
      "",
      "## What the Next Task Should Do",
      `Run biography-writer, record-writer, donor-funding-analyst, faith-worship-researcher, and candidate-profile-assembler for ${slug}.`,
      "",
      "## Blockers",
      "- None.",
      "",
    ].join("\n"),
  );

  return {
    slug,
    issueCount: matrix.length,
    emptyIssues: emptyIssues.length,
    socialOnlyIssues: socialOnlyIssues.length,
    selectedEvidenceItems: matrix.reduce((sum, issue) => sum + issue.evidenceItems.length, 0),
    selectedSocialSignals: matrix.reduce((sum, issue) => sum + issue.socialSignals.length, 0),
    filesWritten,
  };
}

const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error("Usage: node scripts/build-fixed-issue-matrix.mjs <slug> [slug...]");
  process.exit(1);
}

const results = slugs.map(buildForSlug);
const runDir = join(ORCHESTRATION_RUNS, TODAY, "fixed-issue-matrix-builder");
ensureDir(runDir);

writeJson(join(runDir, "run-state.json"), {
  agent_id: "fixed-issue-matrix-builder",
  agent_role: "Issue-by-issue content builder",
  candidate_slug: null,
  phase: "3",
  status: "complete",
  started_at: NOW,
  completed_at: NOW,
  inputs_read: slugs.flatMap((slug) => [
    `memory/candidates/${slug}/evidence-matrix.json`,
    `memory/candidates/${slug}/social-evidence-matrix.json`,
    `memory/candidates/${slug}/source-audit.json`,
  ]),
  files_written: [
    ...results.flatMap((result) => result.filesWritten),
    `memory/orchestration/agent-runs/${TODAY}/fixed-issue-matrix-builder/run-state.json`,
    `memory/orchestration/agent-runs/${TODAY}/fixed-issue-matrix-builder/notes.md`,
    `memory/orchestration/agent-runs/${TODAY}/fixed-issue-matrix-builder/outputs.md`,
    `memory/orchestration/agent-runs/${TODAY}/fixed-issue-matrix-builder/handoff.md`,
  ],
  commands_run: [`node scripts/build-fixed-issue-matrix.mjs ${slugs.join(" ")}`],
  blockers: [],
  errors_encountered: [],
  next_steps: [`Run profile-writing and assembler passes for ${slugs.join(", ")}.`],
  handoff_summary: `Built fixed 14-issue matrices for ${slugs.join(", ")}.`,
});

writeText(
  join(runDir, "notes.md"),
  [
    `# Notes — fixed-issue-matrix-builder batch — ${TODAY}`,
    "",
    ...results.flatMap((result) => [
      `## ${result.slug}`,
      `- issueCount: ${result.issueCount}`,
      `- emptyIssues: ${result.emptyIssues}`,
      `- socialOnlyIssues: ${result.socialOnlyIssues}`,
      `- selectedEvidenceItems: ${result.selectedEvidenceItems}`,
      `- selectedSocialSignals: ${result.selectedSocialSignals}`,
      "",
    ]),
  ].join("\n"),
);

writeText(
  join(runDir, "outputs.md"),
  [
    `# Outputs — fixed-issue-matrix-builder batch — ${TODAY}`,
    "",
    ...results.flatMap((result) => result.filesWritten.map((file) => `- ${file}`)),
    "",
  ].join("\n"),
);

writeText(
  join(runDir, "handoff.md"),
  [
    `# Handoff — fixed-issue-matrix-builder — ${TODAY}`,
    "",
    "## What I Did",
    `Built fixed 14-issue matrices for ${slugs.join(", ")} and attached them to each candidate's v2-issues.yaml as fixed_issue_matrix.`,
    "",
    "## Key Findings",
    ...results.map((result) => `- ${result.slug}: ${result.issueCount} issues, ${result.emptyIssues} empty, ${result.socialOnlyIssues} social-only, ${result.selectedEvidenceItems} selected evidence items.`),
    "",
    "## Files Created or Modified",
    ...results.flatMap((result) => result.filesWritten.map((file) => `- ${file}`)),
    "",
    "## What the Next Task Should Do",
    `Run profile-writing and candidate-profile-assembler for ${slugs.join(", ")}, then continue the remaining candidate pipeline.`,
    "",
    "## Blockers",
    "- None.",
    "",
  ].join("\n"),
);

console.log(JSON.stringify(results, null, 2));
