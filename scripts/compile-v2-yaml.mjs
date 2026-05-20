#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const UI_CANDIDATES = join(ROOT, "ui/src/data/candidates.ts");
const UI_V2 = join(ROOT, "ui/src/data/v2");
const CANDIDATE_SLUGS = existsSync(MEMORY_CANDIDATES)
  ? readdirSync(MEMORY_CANDIDATES, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
  : [];
function slugToConst(slug) {
  return `${slug.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toUpperCase()}_V2`;
}

function titleCaseSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizedForMatch(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function significantSlugParts(slug) {
  return String(slug)
    .split("-")
    .map((part) => normalizedForMatch(part))
    .filter((part) => part.length >= 4 && !["jr"].includes(part));
}

const SLUG_PART_COUNTS = CANDIDATE_SLUGS
  .flatMap((slug) => slug.split("-"))
  .map((part) => normalizedForMatch(part))
  .filter((part) => part.length >= 4)
  .reduce((counts, part) => counts.set(part, (counts.get(part) ?? 0) + 1), new Map());
const SHARED_SLUG_PARTS = new Set([...SLUG_PART_COUNTS].filter(([, count]) => count > 1).map(([part]) => part));

const V2_ONLY_METADATA = {
  "cathy-hopkins": {
    name: "Cathy Hopkins",
    party: "R",
    position: "Kansas State Board of Education District 5 member/chair",
    electionSlug: "sboe-district-5",
    incumbent: true,
    occupation: "Kansas State Board of Education District 5 member/chair",
  },
};

const RENDER_METADATA_OVERRIDES = {
  "chase-laporte": {
    electionSlug: "us-senate-2026",
    position: "U.S. Senate filing-conflict profile; local and FEC House records also point to KS-03 and require final SOS recheck",
  },
};

function loadYaml(path) {
  const json = execFileSync(
    "ruby",
    [
      "-ryaml",
      "-rjson",
      "-e",
      "path=ARGV.fetch(0); obj=YAML.load_file(path); puts JSON.generate(obj)",
      path,
    ],
    { encoding: "utf8" },
  );
  return JSON.parse(json);
}

function loadJsonIfExists(path, fallback = undefined) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

const SOURCE_URL_OVERRIDES = loadJsonIfExists(join(ROOT, "memory/orchestration/source-url-overrides.json"), {
  replace: {},
  drop: [],
});
const DROPPED_SOURCE_URLS = new Set(SOURCE_URL_OVERRIDES.drop ?? []);

function findCandidateBlock(text, slug) {
  const slugRegex = /(^|\n)\s*"?slug"?\s*:\s*"([^"]+)"/g;
  const matches = [...text.matchAll(slugRegex)];
  for (let i = 0; i < matches.length; i += 1) {
    if (matches[i][2] !== slug) continue;
    const start = matches[i].index ?? 0;
    const end = matches[i + 1]?.index ?? text.indexOf("\n];", start);
    return text.slice(start, end > start ? end : undefined);
  }
  return "";
}

function readStringField(block, key) {
  const keyMatch = block.match(new RegExp(`"?${key}"?\\s*:`));
  if (!keyMatch || keyMatch.index === undefined) return undefined;
  let i = keyMatch.index + keyMatch[0].length;
  while (/\s/.test(block[i] ?? "")) i += 1;

  const quote = block[i];
  if (quote !== '"' && quote !== "`") return undefined;
  i += 1;
  let out = "";
  while (i < block.length) {
    const ch = block[i];
    if (ch === "\\" && quote === '"') {
      out += ch + (block[i + 1] ?? "");
      i += 2;
      continue;
    }
    if (ch === quote) break;
    out += ch;
    i += 1;
  }

  if (quote === '"') {
    try {
      return JSON.parse(`"${out}"`);
    } catch {
      return out.replace(/\\"/g, '"').replace(/\\n/g, "\n");
    }
  }
  return out;
}

function readBoolField(block, key) {
  const match = block.match(new RegExp(`"?${key}"?\\s*:\\s*(true|false)`));
  if (!match) return undefined;
  return match[1] === "true";
}

function omitEmpty(value) {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "string" && value.trim() === "") return undefined;
  return value;
}

function asArray(value) {
  if (Array.isArray(value)) return value;
  if (value === undefined || value === null) return [];
  return [value];
}

function asObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function firstValue(...values) {
  for (const value of values) {
    if (value === undefined || value === null) continue;
    if (typeof value === "string" && value.trim() === "") continue;
    return value;
  }
  return undefined;
}

function textValue(...values) {
  const value = firstValue(...values);
  if (value === undefined) return undefined;
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map((item) => textValue(item)).filter(Boolean).join("; ");
  if (typeof value === "object") {
    return Object.entries(value)
      .map(([key, item]) => {
        const rendered = textValue(item);
        return rendered ? `${key}: ${rendered}` : "";
      })
      .filter(Boolean)
      .join("; ");
  }
  return undefined;
}

function slugifyId(value, fallback) {
  const base = textValue(value) ?? fallback;
  return String(base)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || fallback;
}

function normalizeParty(value, fallback = "NP") {
  const text = textValue(value)?.toLowerCase();
  if (text === "r" || text?.startsWith("rep")) return "R";
  if (text === "d" || text?.startsWith("dem")) return "D";
  if (text === "i" || text?.startsWith("ind")) return "I";
  if (text === "np" || text?.includes("nonpartisan") || text?.includes("non-partisan")) return "NP";
  return fallback === "R" || fallback === "D" || fallback === "I" || fallback === "NP" ? fallback : "NP";
}

function normalizeTier(value, url = "") {
  const text = textValue(value)?.toLowerCase();
  if (text === "primary" || text === "secondary" || text === "social") return text;
  const lowerUrl = String(url).toLowerCase();
  if (
    lowerUrl.includes(".gov") ||
    lowerUrl.includes("kansas.gov") ||
    lowerUrl.includes("kslegislature.gov") ||
    lowerUrl.includes("fec.gov") ||
    lowerUrl.includes("ellisco.net") ||
    lowerUrl.includes("haysusa.com") ||
    lowerUrl.includes("usd489.com") ||
    lowerUrl.includes("boarddocs.com") ||
    lowerUrl.includes("senate.gov") ||
    lowerUrl.includes("house.gov")
  ) {
    return "primary";
  }
  if (
    lowerUrl.includes("facebook.com") ||
    lowerUrl.includes("x.com") ||
    lowerUrl.includes("twitter.com") ||
    lowerUrl.includes("instagram.com") ||
    lowerUrl.includes("youtube.com") ||
    lowerUrl.includes("tiktok.com") ||
    lowerUrl.includes("linkedin.com") ||
    lowerUrl.includes("bsky.app") ||
    lowerUrl.includes("threads.net")
  ) {
    return "social";
  }
  return "secondary";
}

function isPublicUrl(url) {
  return /^https?:\/\//i.test(String(url ?? ""));
}

function cleanPublicUrl(url) {
  let value = textValue(url);
  if (!isPublicUrl(value)) return value;
  value = value
    .replace(/[`'"\]]+$/g, "")
    .replace(/[.,;]+$/g, "");
  return value;
}

function resolvePublicUrl(url) {
  const cleaned = cleanPublicUrl(url);
  return SOURCE_URL_OVERRIDES.replace?.[cleaned] ?? cleaned;
}

function isDroppedPublicUrl(url) {
  return DROPPED_SOURCE_URLS.has(cleanPublicUrl(url));
}

function publisherFromUrl(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host
      .split(".")
      .slice(0, -1)
      .join(".")
      .replace(/\b\w/g, (char) => char.toUpperCase()) || host;
  } catch {
    return undefined;
  }
}

function uniqueId(id, used, fallback) {
  let next = slugifyId(id, fallback);
  let suffix = 2;
  while (used.has(next)) {
    next = `${slugifyId(id, fallback)}-${suffix}`;
    suffix += 1;
  }
  used.add(next);
  return next;
}

function tierRank(tier) {
  if (tier === "primary") return 3;
  if (tier === "secondary") return 2;
  if (tier === "social") return 1;
  return 0;
}

function mergeClaims(target, claims) {
  const seen = new Set(target.claimsAnchored);
  for (const claim of claims) {
    const text = cleanSourceClaimText(claim);
    if (!text || seen.has(text)) continue;
    seen.add(text);
    target.claimsAnchored.push(text);
  }
}

function normalizeSources(slug, yamlSources, auditSources = []) {
  const used = new Set();
  const idMap = new Map();
  const rowSourceIds = new Map();
  const sourceIdsByUrl = new Map();
  const sourceByUrl = new Map();
  const sources = [];

  function rememberAlias(alias, id) {
    const text = textValue(alias);
    if (!text) return;
    idMap.set(text, id);
  }

  function rememberRow(rowId, id) {
    const text = textValue(rowId);
    if (!text || !id) return;
    if (!rowSourceIds.has(text)) rowSourceIds.set(text, []);
    rowSourceIds.get(text).push(id);
  }

  function rememberUrl(url, id) {
    if (isDroppedPublicUrl(url)) return;
    const key = resolvePublicUrl(url);
    if (!isPublicUrl(key) || !id) return;
    if (!sourceIdsByUrl.has(key)) sourceIdsByUrl.set(key, []);
    if (!sourceIdsByUrl.get(key).includes(id)) sourceIdsByUrl.get(key).push(id);
  }

  function addSource(raw, index, fallbackId, aliases = [], rowIds = []) {
    const source = typeof raw === "string" ? { url: raw } : asObject(raw);
    const originalId = textValue(source.id, source.sourceId, source.source_id) ?? fallbackId;
    if (isDroppedPublicUrl(source.url)) {
      idMap.set(originalId, null);
      for (const alias of aliases) rememberAlias(alias, null);
      return;
    }
    const url = resolvePublicUrl(source.url);

    if (!isPublicUrl(url)) {
      idMap.set(originalId, null);
      for (const alias of aliases) rememberAlias(alias, null);
      return;
    }

    const key = String(url).trim();
    const claims = asArray(
      firstValue(source.claimsAnchored, source.claims_anchored, source.claims, source.claims_supported),
    )
      .map((claim) => cleanSourceClaimText(claim))
      .filter(Boolean);

    if (sourceByUrl.has(key)) {
      const existing = sourceByUrl.get(key);
      const nextTier = normalizeTier(source.tier ?? source.recommendedTier ?? source.recommended_tier, url);
      if (tierRank(nextTier) > tierRank(existing.tier)) existing.tier = nextTier;
      mergeClaims(existing, claims);
      rememberAlias(originalId, existing.id);
      for (const alias of aliases) rememberAlias(alias, existing.id);
      for (const rowId of rowIds) rememberRow(rowId, existing.id);
      rememberUrl(url, existing.id);
      return;
    }

    const id = uniqueId(originalId, used, `s-${index + 1}`);
    idMap.set(originalId, id);
    for (const alias of aliases) rememberAlias(alias, id);
    for (const rowId of rowIds) rememberRow(rowId, id);
    rememberUrl(url, id);

    const normalized = {
      id,
      tier: normalizeTier(source.tier ?? source.recommendedTier ?? source.recommended_tier, url),
      url,
      title: textValue(source.title, source.name, source.label, publisherFromUrl(url), `Source ${index + 1}`),
      publisher: omitEmpty(textValue(source.publisher, source.publication, publisherFromUrl(url))),
      accessed: textValue(source.accessed, source.captured, source.date, "2026-05-19"),
      claimsAnchored: claims,
    };

    sources.push(normalized);
    sourceByUrl.set(key, normalized);
  }

  for (const [index, raw] of asArray(yamlSources).entries()) {
    addSource(raw, index, `s-${index + 1}`);
  }

  for (const [index, raw] of asArray(auditSources).entries()) {
    const audit = asObject(raw);
    const aliases = [
      audit.sourceId,
      audit.source_id,
      ...asArray(audit.aliases),
    ].filter(Boolean);
    addSource(
      {
        id: textValue(audit.sourceId, audit.source_id) ?? `audit-${index + 1}`,
        tier: textValue(audit.recommendedTier, audit.recommended_tier),
        url: audit.url,
        title: textValue(audit.title, publisherFromUrl(audit.url), `Source audit ${index + 1}`),
        publisher: textValue(audit.publisher, publisherFromUrl(audit.url)),
        accessed: textValue(audit.accessed, "2026-05-20"),
        claimsAnchored: audit.claimsAnchored,
      },
      sources.length + index,
      `audit-${index + 1}`,
      aliases,
      audit.rowIds,
    );
  }

  return { sources, idMap, rowSourceIds, sourceIdsByUrl };
}

function sourceRefs(rawRefs, idMap, fallback = []) {
  const refs = asArray(rawRefs)
    .map((ref) => textValue(ref))
    .filter(Boolean)
    .map((ref) => (idMap.has(ref) ? idMap.get(ref) : ref))
    .filter((ref) => typeof ref === "string");

  return [...new Set(refs.length ? refs : fallback)];
}

function topLevelIssues(yaml) {
  return asArray(firstValue(yaml.issues, yaml.issueCards, yaml.issue_cards, yaml.issueAreas));
}

function normalizeAction(rawAction, issueId, actionIndex, idMap, fallbackSourceIds) {
  const action = asObject(rawAction);
  const body = textValue(
    action.body,
    action.summary,
    action.description,
    action.text,
    action.outcome && action.description ? `${action.description} ${action.outcome}` : undefined,
    action.outcome,
    action.label,
  );
  if (!body) return undefined;

  const sourceIds = sourceRefs(action.sourceIds ?? action.source_ids ?? action.sources, idMap, fallbackSourceIds);
  if (sourceIds.length === 0) return undefined;

  return {
    id: slugifyId(action.id, `a-${issueId}-${actionIndex + 1}`),
    date: textValue(action.date, action.filed, action.published, action.observedAt, "Undated"),
    body,
    sourceIds,
  };
}

function normalizeSocialSignal(rawSignal, issueId, signalIndex, idMap) {
  const signal = asObject(rawSignal);
  const observation = textValue(
    signal.observation,
    signal.body,
    signal.summary,
    signal.description,
    signal.text,
    signal.note,
  );
  if (!observation) return undefined;

  return {
    id: slugifyId(signal.id, `ss-${issueId}-${signalIndex + 1}`),
    platform: textValue(signal.platform, signal.source, signal.channel, "Public web"),
    observation,
    observedAt: textValue(signal.observedAt, signal.observed_at, signal.date, "2026-05-19"),
    sourceIds: sourceRefs(signal.sourceIds ?? signal.source_ids ?? signal.sources, idMap, []),
    mappedToIssueId: issueId,
  };
}

function normalizeGap(rawGap, actions, socialSignals) {
  const gap = asObject(rawGap);
  const summary = textValue(gap.summary, gap.text, gap.description);
  if (!summary) return undefined;

  const evidenceIds = asArray(gap.evidenceIds ?? gap.evidence_ids)
    .map((id) => textValue(id))
    .filter(Boolean);
  const valid = new Set([...actions.map((action) => action.id), ...socialSignals.map((signal) => signal.id)]);
  const resolved = evidenceIds.filter((id) => valid.has(id));

  if (resolved.length > 0) {
    return { summary, evidenceIds: resolved };
  }

  const fallback = actions[0]?.id ?? socialSignals[0]?.id;
  return fallback ? { summary, evidenceIds: [fallback] } : undefined;
}

function normalizeIssueTitle(value, fallback) {
  const title = textValue(value, fallback) ?? fallback;
  return title
    .replace(/\bUnconfirmed Issue Areas\b/gi, "Unconfirmed Public Positions")
    .replace(/\bIssue Areas Without Candidate-Controlled Findings\b/gi, "Topics Without Candidate-Controlled Findings")
    .replace(/\bIssue Areas Not Confirmed\b/gi, "Topics Not Confirmed")
    .replace(/\bIssue Areas\b/gi, "Public Positions")
    .replace(/\bissue areas\b/g, "public positions");
}

function socialSignalFromAction(action, issueId, sourceById) {
  const firstSource = action.sourceIds
    .map((id) => sourceById.get(id))
    .find(Boolean);
  return {
    id: slugifyId(`ss-${action.id}`, `ss-${issueId}`),
    platform: firstSource?.publisher ?? firstSource?.title ?? "Public web",
    observation: action.body,
    observedAt: action.date === "Undated" ? "2026-05-19" : action.date,
    sourceIds: action.sourceIds,
    mappedToIssueId: issueId,
  };
}

function isSocialOnlyAction(action, sourceById) {
  if (action.sourceIds.length === 0) return false;
  const tiers = action.sourceIds
    .map((id) => sourceById.get(id)?.tier)
    .filter(Boolean);
  return tiers.length > 0 && tiers.every((tier) => tier === "social");
}

const FIXED_ISSUE_IDS = [
  "i-abortion-life",
  "i-lgbt-gender-parental-rights",
  "i-education-curriculum-schools",
  "i-religious-liberty-church-civic-morality",
  "i-taxes-spending-debt",
  "i-economy-jobs-labor",
  "i-guns-second-amendment",
  "i-immigration-border",
  "i-health-care-insurance-medicaid",
  "i-election-integrity-voting-courts",
  "i-public-safety-law-enforcement-criminal-justice",
  "i-agriculture-rural-economy-water",
  "i-local-governance-transparency-ethics",
  "i-environment-energy-land-use",
];

const ACTION_ELIGIBLE_FIXED_CLASSES = new Set([
  "candidate-stated",
  "documented-record",
  "public-controversy",
]);

function compactWhitespace(value) {
  return String(value ?? "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/^["']?text["']?\s*:\s*/i, "")
    .replace(/^["']?observation["']?\s*:\s*/i, "")
    .replace(/^[-*]\s+/, "")
    .replace(/,\s*$/, "")
    .replace(/^"([^"]+)"(\s+-|\s+--|\s+—|$)/, "$1$2")
    .replace(/\s+/g, " ")
    .trim();
}

function excerpt(value, max = 360) {
  const text = compactWhitespace(value);
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}...`;
}

function isMetaEvidenceText(value) {
  const text = compactWhitespace(value);
  return (
    text.length < 18 ||
    /^\|/.test(text) ||
    /^["']?(url|id|slug|platform|publisher|sourceIds|sourceUrl|evidenceRowId|recordSummary|ownWordsNarrative|social_presence_note|incumbent)["']?\s*:/i.test(text) ||
    /^campaign website to\b/i.test(text) ||
    /^narrative:/i.test(text) ||
    /^issue mapping:/i.test(text) ||
    /^methodology:/i.test(text) ||
    /^disclaimer:/i.test(text) ||
    /^research caveat/i.test(text) ||
    /^source trail$/i.test(text) ||
    /^where they stand on big issues:?$/i.test(text) ||
    /\|\s*(primary|secondary|social)\s*\|\s*https?:\/\//i.test(text) ||
    /\b(this pass|current matrix pass|current evidence matrix|disk evidence|on disk|rendered profile|rendered record|rendered issue cards|candidate-completeness audit|missing-candidate audit|this artifact|generated during|generated from|codex|agent-work|run-state|handoff|profile should|internal-only|the page therefore|no candidate-controlled issue platform|ui\/src\/data|worker scope|worker is not authorized|orchestrator|site-profile-writer|narrative-writer|later compiler|current ui object|existing ui v2 object|important correction for later compilers|sensitivity flag|implication for)\b/i.test(text)
  );
}

function cleanPublicNarrative(value) {
  const text = compactWhitespace(value);
  if (!text) return undefined;
  return text
    .replace(/\bI found no\b/g, "The reviewed public record did not identify")
    .replace(/\bI did not find\b/g, "The reviewed public record did not identify")
    .replace(/\bI did not verify\b/g, "The review did not verify")
    .replace(/\bI could not directly confirm\b/g, "The review could not directly confirm")
    .replace(/\bI could not verify\b/g, "The review could not verify")
    .replace(/\bI am not assigning\b/g, "No affiliation is assigned")
    .replace(/\bI am not naming\b/g, "No church is named")
    .replace(/\bI am not claiming\b/g, "No affiliation is claimed")
    .replace(/\bI would treat this as\b/g, "This is treated as")
    .replace(/\bI treated it as\b/g, "It is treated as")
    .replace(/\bI treated\b/g, "The review treated")
    .replace(/\bI used\b/g, "The review used")
    .replace(/\bI reviewed\b/g, "The review covered")
    .replace(/\b(in|from|to) this environment\b/gi, "during public-source review")
    .replace(/\bthis environment\b/gi, "public-source review")
    .replace(/\bCLI environment\b/gi, "public-source review")
    .replace(/\blogged-out fetcher\b/gi, "public logged-out review")
    .replace(/\bDIRECT FETCH BLOCKED\b/g, "Direct source access was blocked")
    .replace(/\bFETCH-BLOCKED\b/g, "source access blocked")
    .replace(/\bfetch-blocked\b/g, "source access blocked")
    .replace(/\bpdftotext\b/gi, "text extraction")
    .replace(/\b(for|from|during) this pass\b/gi, "in the reviewed public record")
    .replace(/\bin this pass\b/gi, "in the reviewed public record")
    .replace(/\bthis pass\b/gi, "the reviewed public record")
    .replace(/\bDo not infer\b/g, "The public record does not establish")
    .replace(/\bdo not infer\b/g, "the public record does not establish")
    .replace(/\bDo not imply hidden donors from this absence\b/g, "That absence does not establish hidden donors")
    .replace(/\bdo not imply hidden donors from this absence\b/g, "that absence does not establish hidden donors")
    .replace(/\bDo not describe the absence of an online donor table as proof that no campaign-finance filing exists\./g, "The absence of an online donor table is not proof that no campaign-finance filing exists.")
    .replace(/\bDo not use 2022 donors as evidence of 2026 funding unless a current Hopkins 2026 committee\/report is later found\./g, "2022 donor records are not treated as evidence of 2026 funding without a current Hopkins 2026 committee or report.")
    .replace(/\bdo not use those names as ([^.]+)\./gi, "those names are not treated as $1.")
    .replace(/\bdo not treat those amounts as confirmed until sourced\b/gi, "those amounts are not treated as confirmed without a source")
    .replace(/\bdo not describe the ballot as final\b/gi, "the ballot description remains provisional until final status is confirmed")
    .replace(/\bverify original PDF before publication\b/gi, "donor examples require original-PDF verification before publication")
    .replace(/\bverify the original PDF before relying on that specific donor example\b/gi, "donor examples require original-PDF verification before publication")
    .replace(/\bcandidate memory\b/gi, "reviewed source notes")
    .replace(/\bNo affiliation is assigned a church\b/g, "No church affiliation is assigned")
    .replace(/\bcurrent evidence matrix\b/gi, "reviewed public records")
    .replace(/\bevidence matrix\b/gi, "reviewed public records")
    .replace(/\bdisk evidence\b/gi, "reviewed public evidence")
    .replace(/\bon disk\b/gi, "as research context")
    .replace(/\brendered profile\b/gi, "profile")
    .replace(/\brendered record\b/gi, "public record summary")
    .replace(/\brendered issue cards\b/gi, "issue cards")
    .replace(/\brendered as\b/gi, "listed as")
    .replace(/\brendered across\b/gi, "listed across")
    .replace(/\bsafely separated\b/gi, "identified clearly")
    .replace(/\bsource-backed issue signals\b/gi, "source-backed social/online observations")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanSourceClaimText(value) {
  const text = cleanPublicNarrative(value);
  if (!text || isMetaEvidenceText(text)) return undefined;
  if (/\b(candidate-completeness audit|missing-candidate audit|this artifact|codex|agent|prompt|tyler|internal-only|profile should|run-state|handoff|source audit|candidate memory v2|local filing-system notes)\b/i.test(text)) {
    return undefined;
  }
  return excerpt(text, 220);
}

function candidateAliases(context) {
  const slug = context.slug ?? "";
  const name = context.name ?? titleCaseSlug(slug);
  const aliases = new Set([
    normalizedForMatch(name),
    normalizedForMatch(slug.replace(/-/g, " ")),
  ]);
  const nameParts = normalizedForMatch(name).split(" ").filter((part) => part.length >= 3);
  if (nameParts.length >= 2) aliases.add(`${nameParts[0]} ${nameParts[nameParts.length - 1]}`);
  for (const part of significantSlugParts(slug)) aliases.add(part);
  return [...aliases].filter(Boolean);
}

function textMentionsCandidate(context, value, { allowSinglePart = false } = {}) {
  const text = normalizedForMatch(value);
  if (!text) return false;
  const aliases = candidateAliases(context);
  return aliases.some((alias) => {
    if (!alias.includes(" ")) {
      if (!allowSinglePart || SHARED_SLUG_PARTS.has(alias)) return false;
    }
    return new RegExp(`(^|\\s)${alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`).test(text);
  });
}

function urlMentionsCandidate(context, url) {
  const text = normalizedForMatch(url);
  if (!text) return false;
  return significantSlugParts(context.slug)
    .filter((part) => !SHARED_SLUG_PARTS.has(part))
    .some((part) => new RegExp(`(^|\\s)${part}(\\s|$)`).test(text));
}

function otherCandidateMentioned(context, value) {
  const text = normalizedForMatch(value);
  if (!text) return false;
  for (const slug of CANDIDATE_SLUGS) {
    if (slug === context.slug) continue;
    const full = normalizedForMatch(titleCaseSlug(slug));
    if (full && full.includes(" ") && new RegExp(`(^|\\s)${full.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`).test(text)) {
      return true;
    }
    const parts = significantSlugParts(slug);
    if (parts.length >= 2 && parts.every((part) => new RegExp(`(^|\\s)${part}(\\s|$)`).test(text))) return true;
  }
  return false;
}

function otherCandidateLeadsText(context, value) {
  const text = normalizedForMatch(value);
  const currentIndexes = candidateAliases(context)
    .map((alias) => text.indexOf(alias))
    .filter((index) => index >= 0);
  const firstCurrent = currentIndexes.length ? Math.min(...currentIndexes) : Number.POSITIVE_INFINITY;
  for (const slug of CANDIDATE_SLUGS) {
    if (slug === context.slug) continue;
    const full = normalizedForMatch(titleCaseSlug(slug));
    if (!full || !full.includes(" ")) continue;
    const index = text.indexOf(full);
    if (index >= 0 && index < firstCurrent) return true;
  }
  return false;
}

function issueEvidenceBundle(item, sourceIds = [], sourceById = new Map()) {
  const sourceText = sourceIds
    .map((id) => sourceById.get(id))
    .filter(Boolean)
    .map((source) => `${source.title} ${source.publisher ?? ""} ${source.url} ${asArray(source.claimsAnchored).join(" ")}`)
    .join(" ");
  return `${item.text ?? ""} ${item.sourceUrl ?? ""} ${sourceText}`;
}

function isFinanceOrFilingOnlyUrl(url) {
  const value = String(url ?? "").toLowerCase();
  return (
    value.includes("fec.gov/data/candidate/") ||
    value.includes("fec.gov/data/committee/") ||
    value.includes("kansas.gov/ethics/cfascanned/") ||
    value.includes("kssos.org/elections/cfr_viewer/")
  );
}

function isGenericRaceOrLocalContextUrl(url) {
  const value = String(url ?? "").toLowerCase();
  return (
    value.includes("wisconsin-supreme-court") ||
    value.includes("hays_unified_school_district_489") ||
    value.includes("usd489.com") ||
    value.includes("boarddocs.com/ks/usd489") ||
    value.includes("haysusa.com/335/public-library-board") ||
    value.includes("kansas_state_board_of_education_election")
  );
}

function isCandidateRelevantEvidenceItem(item, context, sourceIds = [], sourceById = new Map(), { social = false } = {}) {
  if (isMetaEvidenceText(item.text)) return false;
  const url = resolvePublicUrl(item.sourceUrl);
  if (isDroppedPublicUrl(url)) return false;
  const bundle = issueEvidenceBundle(item, sourceIds, sourceById);
  const mentionsCurrent = textMentionsCandidate(context, bundle, { allowSinglePart: true }) || urlMentionsCandidate(context, url);
  const mentionsOther = otherCandidateMentioned(context, bundle);
  if (mentionsOther && (!mentionsCurrent || otherCandidateLeadsText(context, bundle))) return false;
  if (/public absence|no (candidate controlled|twitter|x account|facebook|bluesky|social|posts?|feed)|absence of/i.test(bundle)) {
    return false;
  }
  if (/\b(family network|married to|husband|wife|children|spouse)\b/i.test(bundle)) {
    return false;
  }
  if (/\b(usd 489|boarddocs|dress code|satanism ban|hays public library board)\b/i.test(bundle) && !mentionsCurrent) return false;
  if (social) {
    if (mentionsOther && !mentionsCurrent) return false;
    return true;
  }
  if (isFinanceOrFilingOnlyUrl(url)) return false;
  if (isGenericRaceOrLocalContextUrl(url) && !mentionsCurrent) return false;
  if (!mentionsCurrent && !urlMentionsCandidate(context, url)) return false;
  return true;
}

function sourceIdsForFixedItem(item, rowSourceIds, sourceIdsByUrl) {
  const ids = [
    ...asArray(rowSourceIds.get(textValue(item.evidenceRowId))),
    ...asArray(sourceIdsByUrl.get(resolvePublicUrl(item.sourceUrl))),
  ]
    .map((id) => textValue(id))
    .filter(Boolean);
  return [...new Set(ids)];
}

function hasNonSocialSource(sourceIds, sourceById) {
  return sourceIds.some((id) => {
    const tier = sourceById.get(id)?.tier;
    return tier === "primary" || tier === "secondary";
  });
}

function isCandidateRelevantUrl(url, candidateSlug) {
  const lowerUrl = String(url ?? "").toLowerCase();
  if (!lowerUrl) return true;
  const urlParts = new Set(lowerUrl.split(/[^a-z0-9]+/).filter(Boolean));
  const currentParts = new Set(String(candidateSlug).split("-").filter(Boolean));
  const currentMentioned = [...currentParts].some((part) => part.length >= 4 && urlParts.has(part));
  if (!currentMentioned && ["lawsuit", "lawsuits", "sue", "sues", "alleging", "accuses"].some((part) => urlParts.has(part))) {
    return false;
  }
  for (const otherSlug of CANDIDATE_SLUGS) {
    if (otherSlug === candidateSlug) continue;
    if (lowerUrl.includes(otherSlug)) return false;
    for (const part of otherSlug.split("-").filter((token) => token.length >= 4)) {
      if (!currentParts.has(part) && urlParts.has(part)) return false;
    }
  }
  return true;
}

function fixedIssueStatedText(issue, evidenceItems, socialSignals, candidateContext, rowSourceIds, sourceIdsByUrl, sourceById) {
  const title = textValue(issue.title, "this issue");
  const publicItems = evidenceItems
    .filter((item) => item.sourceUrl && !isMetaEvidenceText(item.text))
    .filter((item) => {
      const sourceIds = sourceIdsForFixedItem(item, rowSourceIds, sourceIdsByUrl)
        .filter((id) => sourceById.has(id));
      return isCandidateRelevantEvidenceItem(item, candidateContext, sourceIds, sourceById);
    })
    .filter((item) => item.classification !== "social-online-signal");
  const stated = publicItems.find((item) => item.classification === "candidate-stated");
  const documented = publicItems.find((item) => item.classification === "documented-record");
  const fallback = publicItems[0];
  const lead = stated ?? documented ?? fallback;

  if (!lead) {
    return `The reviewed public record did not identify a source-backed candidate statement or documented action for ${title}.`;
  }

  const parts = [];
  if (lead) {
    const label = lead.classification === "candidate-stated"
      ? "Candidate statement"
      : lead.classification === "documented-record"
        ? "Documented public record"
        : "Public evidence";
    parts.push(`${label}: ${excerpt(cleanPublicNarrative(lead.text), 420)}`);
  } else {
    parts.push(`No candidate-controlled statement was found for ${title}; the available material is limited to observed public signals.`);
  }

  if (socialSignals.length > 0) {
    parts.push("Social/online observations are public signals, not confirmed policy positions.");
  }
  return parts.join(" ");
}

function normalizeFixedIssues(yaml, rowSourceIds, sourceIdsByUrl, sourceById, candidateContext) {
  const fixedMatrix = yaml.fixed_issue_matrix;
  const fixedIssues = Array.isArray(fixedMatrix)
    ? fixedMatrix
    : asArray(asObject(fixedMatrix).issues);
  if (fixedIssues.length === 0) return undefined;

  return fixedIssues
    .map((rawIssue, issueIndex) => {
      const issue = asObject(rawIssue);
      const issueNumber = Number(issue.issueNumber ?? issue.issue_number ?? issueIndex + 1);
      const id = FIXED_ISSUE_IDS[issueNumber - 1] ?? slugifyId(issue.title, `i-${issueIndex + 1}`);
      const title = normalizeIssueTitle(issue.title, `Issue ${issueNumber || issueIndex + 1}`);
      const rawEvidenceItems = asArray(issue.evidenceItems ?? issue.evidence_items);
      const evidenceItems = rawEvidenceItems
        .map((item) => asObject(item))
        .filter((item) => textValue(item.text));
      const rawSocialSignals = asArray(issue.socialSignals ?? issue.social_signals)
        .map((signal) => asObject(signal))
        .filter((signal) => textValue(signal.observation));

      const statedSourceIds = [...new Set(
        evidenceItems
          .filter((item) => item.sourceUrl && !isMetaEvidenceText(item.text))
          .filter((item) => item.classification !== "social-online-signal")
          .flatMap((item) => {
            const sourceIds = sourceIdsForFixedItem(item, rowSourceIds, sourceIdsByUrl)
              .filter((id) => sourceById.has(id));
            return isCandidateRelevantEvidenceItem(item, candidateContext, sourceIds, sourceById) ? sourceIds : [];
          })
          .slice(0, 6),
      )];

      const actionCandidates = evidenceItems
        .filter((item) => !isMetaEvidenceText(item.text))
        .filter((item) => ACTION_ELIGIBLE_FIXED_CLASSES.has(item.classification))
        .map((item) => ({
          item,
          sourceIds: sourceIdsForFixedItem(item, rowSourceIds, sourceIdsByUrl)
            .filter((id) => sourceById.has(id)),
        }))
        .filter(({ item, sourceIds }) => isCandidateRelevantEvidenceItem(item, candidateContext, sourceIds, sourceById))
        .filter(({ sourceIds }) => sourceIds.length > 0 && hasNonSocialSource(sourceIds, sourceById));

      const seenActionBodies = new Set();
      const actions = [];
      for (const { item, sourceIds } of actionCandidates) {
        const body = excerpt(cleanPublicNarrative(item.text), 520);
        const key = body.toLowerCase();
        if (seenActionBodies.has(key)) continue;
        seenActionBodies.add(key);
        actions.push({
          id: slugifyId(textValue(item.evidenceRowId), `a-${id}-${actions.length + 1}`),
          date: textValue(compactWhitespace(item.text).match(/\b20\d{2}-\d{2}-\d{2}\b/)?.[0], "Undated"),
          body,
          sourceIds: [...new Set(sourceIds)].slice(0, 4),
        });
        if (actions.length >= 6) break;
      }

      const socialSignals = [];
      const seenSocial = new Set();
      for (const signal of rawSocialSignals) {
        if (isMetaEvidenceText(signal.observation)) continue;
        const observation = excerpt(cleanPublicNarrative(signal.observation), 420);
        const sourceIds = [
          ...asArray(rowSourceIds.get(textValue(signal.evidenceRowId))),
          ...asArray(sourceIdsByUrl.get(resolvePublicUrl(signal.sourceUrl))),
        ]
          .map((sourceId) => textValue(sourceId))
          .filter((sourceId) => sourceId && sourceById.has(sourceId));
        if (sourceIds.length === 0) continue;
        const signalItem = { ...signal, text: signal.observation };
        if (!isCandidateRelevantEvidenceItem(signalItem, candidateContext, sourceIds, sourceById, { social: true })) continue;
        const key = `${textValue(signal.platform)}:${observation}`.toLowerCase();
        if (seenSocial.has(key)) continue;
        seenSocial.add(key);
        socialSignals.push({
          id: slugifyId(textValue(signal.socialSignalId, signal.evidenceRowId), `ss-${id}-${socialSignals.length + 1}`),
          platform: textValue(signal.platform, "Public web"),
          observation,
          observedAt: textValue(compactWhitespace(signal.observation).match(/\b20\d{2}-\d{2}-\d{2}\b/)?.[0], "2026-05-20"),
          sourceIds: [...new Set(sourceIds)].slice(0, 3),
          mappedToIssueId: id,
        });
        if (socialSignals.length >= 4) break;
      }

      return {
        id,
        title,
        stated: {
          text: fixedIssueStatedText(issue, evidenceItems, rawSocialSignals, candidateContext, rowSourceIds, sourceIdsByUrl, sourceById),
          sourceIds: statedSourceIds,
        },
        actions,
        socialSignals,
      };
    })
    .filter((issue) => issue.title);
}

function normalizeIssues(yaml, idMap, fallbackSourceIds, sourceById, rowSourceIds = new Map(), sourceIdsByUrl = new Map(), candidateContext = {}) {
  const fixedIssues = normalizeFixedIssues(yaml, rowSourceIds, sourceIdsByUrl, sourceById, candidateContext);
  if (fixedIssues) return fixedIssues;

  return topLevelIssues(yaml)
    .map((rawIssue, issueIndex) => {
      const issue = asObject(rawIssue);
      const id = slugifyId(issue.id, `i-${issueIndex + 1}-${issue.title ?? "issue"}`);
      const title = normalizeIssueTitle(issue.title ?? issue.name, `Issue ${issueIndex + 1}`);
      const stated = asObject(issue.stated);
      const statedText = textValue(
        stated.text,
        stated.summary,
        stated.description,
        issue.statement,
        issue.stated,
        "No candidate-controlled statement was found in the reviewed public record for this issue.",
      );
      const statedSourceIds = sourceRefs(
        stated.sourceIds ?? stated.source_ids ?? issue.sourceIds ?? issue.source_ids ?? issue.sources,
        idMap,
        fallbackSourceIds,
      );

      const normalizedActions = asArray(issue.actions ?? issue.actionEvidence ?? issue.action_evidence)
        .map((action, actionIndex) => normalizeAction(action, id, actionIndex, idMap, statedSourceIds))
        .filter(Boolean);
      const actions = normalizedActions.filter((action) => !isSocialOnlyAction(action, sourceById));
      const socialSignals = [
        ...normalizedActions
          .filter((action) => isSocialOnlyAction(action, sourceById))
          .map((action) => socialSignalFromAction(action, id, sourceById)),
        ...asArray(issue.socialSignals ?? issue.social_signals ?? issue.social)
        .map((signal, signalIndex) => normalizeSocialSignal(signal, id, signalIndex, idMap))
          .filter(Boolean),
      ];
      const gap = normalizeGap(issue.gap, actions, socialSignals);

      return {
        id,
        title,
        stated: {
          text: statedText,
          sourceIds: statedSourceIds,
        },
        actions,
        socialSignals,
        ...(gap ? { gap } : {}),
      };
    })
    .filter((issue) => issue.title);
}

function mergeMetadata(yaml) {
  return [
    yaml.candidate_metadata,
    yaml.candidate,
    yaml.candidateStatus,
    yaml.status,
    yaml.profile,
    typeof yaml.race === "object" ? yaml.race : undefined,
    yaml.official_status,
    yaml.status_summary,
  ].reduce((merged, value) => ({ ...merged, ...asObject(value) }), {});
}

function financeText(value) {
  if (value === undefined || value === null) return undefined;
  if (typeof value === "number") return `$${value.toLocaleString("en-US")}`;
  return textValue(value);
}

function normalizeDonors(value) {
  return asArray(value)
    .map((donor) => {
      if (typeof donor === "string") return { name: cleanPublicNarrative(donor), amount: "listed" };
      const object = asObject(donor);
      const name = cleanPublicNarrative(textValue(object.name, object.donor, object.source, object.entity, object.description));
      if (!name) return undefined;
      return {
        name,
        amount: cleanPublicNarrative(textValue(object.amount, object.total, object.value, object.note, "listed")) ?? "listed",
      };
    })
    .filter(Boolean)
    .slice(0, 12);
}

function normalizeCampaignFinance(yaml, idMap, sources) {
  const finance = asObject(firstValue(
    yaml.campaignFinance,
    yaml.campaign_finance,
    yaml.donor_funding,
    yaml.donorFunding,
    yaml.funding,
  ));
  if (Object.keys(finance).length === 0) return undefined;

  const sourceIds = sourceRefs(finance.sourceIds ?? finance.source_ids, idMap, []);
  const source = sourceIds
    .map((id) => sources.find((candidateSource) => candidateSource.id === id))
    .find(Boolean);
  const totalRaised = cleanPublicNarrative(financeText(
    firstValue(
      finance.totalRaised,
      finance.total_raised,
      finance.total_receipts,
      finance.totalReceipts,
      finance.known,
      finance.summary,
    ),
  ));
  const narrative = cleanPublicNarrative(textValue(
    finance.narrative,
    finance.summary,
    finance.donor_summary,
    finance.donorSummary,
    finance.donor_funding_notes,
    finance.notes,
    finance.status,
    totalRaised,
  ));

  return {
    totalRaised: totalRaised ?? "Not itemized in the reviewed public records",
    narrative: narrative ?? "Campaign finance details were not fully itemized in the reviewed public records.",
    donors: normalizeDonors(
      firstValue(
        finance.donors,
        finance.donorExamples,
        finance.notableReceipts,
        finance.selectedDonors,
        finance.candidateLoans,
      ),
    ),
    undisclosed: omitEmpty(cleanPublicNarrative(textValue(
      finance.undisclosed,
      finance.disclosure_issue,
      finance.donor_blocker,
      finance.donorNotes,
      finance.caveat,
      finance.note,
    ))),
    reportingPeriod: cleanPublicNarrative(textValue(finance.reportingPeriod, finance.reporting_period, finance.filed, "Most recent public filing reviewed")) ?? "Most recent public filing reviewed",
    source: cleanPublicNarrative(source?.title ?? source?.url ?? textValue(finance.source, "Reviewed public records")) ?? "Reviewed public records",
  };
}

function normalizeNarrative(value) {
  return omitEmpty(cleanPublicNarrative(value));
}

function cleanClaimText(value) {
  const text = cleanPublicNarrative(value) ?? "";
  return text
    .replace(/^["']?claim["']?\s*:\s*/i, "")
    .replace(/^["']?summary["']?\s*:\s*/i, "")
    .trim();
}

function isNarrativeUsableClaim(value) {
  const text = cleanClaimText(value);
  if (text.length < 35) return false;
  if (/^"[^"]+"\s*:/.test(text)) return false;
  if (/^(url|id|slug|platform|publisher|sourceIds|sourceUrl|evidenceRowId)\b/i.test(text)) return false;
  if (/^jurisdiction\b/i.test(text)) return false;
  if (/^\{|\}$/.test(text)) return false;
  if (/^candidate_metadata\b/i.test(text)) return false;
  if (/\bin their own words\b/i.test(text)) return false;
  if (/\b(generated|social_presence_note|candidate overview)\b/i.test(text)) return false;
  if (/^narrative:/i.test(text)) return false;
  if (/auto-normalized|hydrate-v2-social-signals/i.test(text)) return false;
  if (/no candidate-controlled issue platform|does not infer positions|sparse profiles|final certified ballot status|does not treat that appearance|final election-office list|filing deadline/i.test(text)) return false;
  return true;
}

function isCandidateRelevantEvidenceRow(row, context, { allowGenericOfficial = false, social = false } = {}) {
  const bundle = `${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""} ${row.sourceUrl ?? ""}`;
  const mentionsCurrent = textMentionsCandidate(context, bundle, { allowSinglePart: true }) || urlMentionsCandidate(context, row.sourceUrl);
  const mentionsOther = otherCandidateMentioned(context, bundle);
  if (mentionsOther && (!mentionsCurrent || otherCandidateLeadsText(context, bundle))) return false;
  if (/public absence|no (candidate controlled|twitter|x account|facebook|bluesky|social|posts?|feed)|absence of/i.test(bundle)) return false;
  if (isFinanceOrFilingOnlyUrl(row.sourceUrl) && !allowGenericOfficial) return false;
  if (isGenericRaceOrLocalContextUrl(row.sourceUrl) && !mentionsCurrent) return false;
  if (social) return true;
  return mentionsCurrent || allowGenericOfficial;
}

function selectEvidenceClaims(rows, {
  types = [],
  issueNumbers = [],
  limit = 4,
  requirePublicUrl = false,
  includeSocial = false,
  candidateContext = undefined,
  allowGenericOfficial = false,
} = {}) {
  const wantedTypes = new Set(types);
  const wantedIssues = new Set(issueNumbers);
  const seen = new Set();
  const selected = [];

  const sortedRows = [...asArray(rows)].sort((a, b) => {
    const aPublic = a.sourceUrl ? 1 : 0;
    const bPublic = b.sourceUrl ? 1 : 0;
    if (aPublic !== bPublic) return bPublic - aPublic;
    const aUse = a.useDecision === "use" ? 1 : a.useDecision === "use-with-caveat" ? 0.5 : 0;
    const bUse = b.useDecision === "use" ? 1 : b.useDecision === "use-with-caveat" ? 0.5 : 0;
    if (aUse !== bUse) return bUse - aUse;
    return String(a.id ?? "").localeCompare(String(b.id ?? ""));
  });

  for (const row of sortedRows) {
    if (wantedTypes.size > 0 && !wantedTypes.has(row.evidenceType)) continue;
    if (requirePublicUrl && !row.sourceUrl) continue;
    if (!includeSocial && String(row.evidenceType ?? "").startsWith("social ")) continue;
    if (candidateContext && !isCandidateRelevantEvidenceRow(row, candidateContext, { allowGenericOfficial })) continue;
    if (wantedIssues.size > 0) {
      const mapped = asArray(row.issueMappedTo).map((n) => Number(n));
      if (!mapped.some((n) => wantedIssues.has(n))) continue;
    }
    const claim = cleanClaimText(row.claim || row.exactEvidenceSummary);
    if (!isNarrativeUsableClaim(claim)) continue;
    const key = claim.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    selected.push(excerpt(claim, 260));
    if (selected.length >= limit) break;
  }

  return selected;
}

function sentenceList(items) {
  return items
    .map((item) => item.replace(/[.]\s*$/, ""))
    .filter(Boolean)
    .map((item) => `${item}.`)
    .join(" ");
}

function derivedWhoTheyAre(candidate, evidenceRows) {
  const candidateScopedRows = asArray(evidenceRows).filter((row) => {
    const sourceFile = String(row.sourceFile ?? "");
    const sourceUrl = String(row.sourceUrl ?? "");
    return (
      (sourceFile.includes(`memory/candidates/${candidate.slug}/`) &&
        isCandidateRelevantEvidenceRow(row, candidate, { allowGenericOfficial: true })) ||
      sourceUrl.includes("fec.gov") ||
      sourceUrl.includes("kansas.gov")
    );
  });
  const bioClaims = selectEvidenceClaims(candidateScopedRows, {
    types: ["biography", "ballot status", "church/worship"],
    limit: 3,
    candidateContext: candidate,
    allowGenericOfficial: true,
  });
  const publicBioClaims = selectEvidenceClaims(candidateScopedRows, {
    types: ["biography", "ballot status", "church/worship"],
    limit: 2,
    requirePublicUrl: true,
    candidateContext: candidate,
    allowGenericOfficial: true,
  });
  const claims = publicBioClaims.length ? publicBioClaims : bioClaims;
  const partyLabels = { R: "Republican", D: "Democratic", I: "Independent", NP: "nonpartisan" };
  const partyLabel = partyLabels[candidate.party] ?? candidate.party;
  const partyPhrase = partyLabel === "Independent" ? "an Independent" : `a ${partyLabel}`;
  const intro = `${candidate.name} is profiled here for ${candidate.position || candidate.electionSlug} as ${partyPhrase}${candidate.incumbent ? " incumbent/current official" : ""}.`;
  if (claims.length === 0) {
    return `${intro} The available public biography record is thin, so the profile avoids filling gaps with assumptions.`;
  }
  return `${intro} ${sentenceList(claims)} These biography/status records are descriptive background only; no policy position is inferred from identity, faith, family, or associations.`;
}

function derivedRecordSummary(candidate, issues, evidenceRows) {
  const actionCount = issues.reduce((count, issue) => count + issue.actions.length, 0);
  const issueCountWithActions = issues.filter((issue) => issue.actions.length > 0).length;
  const recordClaims = selectEvidenceClaims(evidenceRows, {
    types: ["voting record", "meeting record", "campaign statement", "legal/court", "controversy", "endorsement"],
    limit: 4,
    requirePublicUrl: true,
    candidateContext: candidate,
  });
  const renderedExamples = issues
    .flatMap((issue) => issue.actions.map((action) => `${issue.title}: ${action.body}`))
    .slice(0, 4)
    .map((body) => excerpt(body, 240));

  if (actionCount === 0 && recordClaims.length === 0) {
    return `No separate source-backed vote, meeting action, filing, or public-record action was identified for ${candidate.name} in the reviewed public record.`;
  }

  const examples = renderedExamples.length ? renderedExamples : recordClaims;
  return `The public record summary contains ${actionCount} source-backed item${actionCount === 1 ? "" : "s"} across ${issueCountWithActions} of the 14 issue areas. ${examples.length ? `Representative public-record entries include: ${sentenceList(examples)}` : ""} Social-only material is listed separately as online observation, not official action.`;
}

function derivedWhereTheyWorship(candidate, evidenceRows) {
  const worshipRows = asArray(evidenceRows).filter((row) => {
    if (row.evidenceType !== "church/worship") return false;
    if (!isCandidateRelevantEvidenceRow(row, candidate)) return false;
    if (otherCandidateMentioned(candidate, `${row.claim ?? ""} ${row.exactEvidenceSummary ?? ""}`)) return false;
    const text = cleanClaimText(row.claim || row.exactEvidenceSummary);
    if (/no candidate-controlled issue platform|does not infer|sparse profiles|where they stand/i.test(text)) return false;
    return /\b(church|worship|faith|religion|pastor|minister|congregation|parish|temple|mosque|synagogue|chapel|denomination)\b/i.test(text);
  });
  const worshipClaims = selectEvidenceClaims(worshipRows, {
    types: ["church/worship"],
    limit: 3,
    candidateContext: candidate,
  });
  if (worshipClaims.length === 0) {
    return "No public worship affiliation was confirmed in the reviewed public record. No policy position is inferred from the absence or presence of faith-related public records.";
  }
  return `${sentenceList(worshipClaims)} This faith/worship note is descriptive only and is not used to infer any policy position.`;
}

function derivedCampaignFinance(candidate, evidenceRows) {
  const financeRows = asArray(evidenceRows)
    .filter((row) => row.evidenceType === "donor/funding")
    .filter((row) => isCandidateRelevantEvidenceRow(row, candidate, { allowGenericOfficial: true }));
  if (financeRows.length === 0) {
    return {
      totalRaised: "No public finance total identified",
      narrative: `No FEC/KPDC finance total was identified for ${candidate.name} in the reviewed public records. Treat this as a research gap, not as evidence that no money was raised or spent.`,
      donors: [],
      undisclosed: "No donor-by-donor public ledger is listed unless donor name, amount, and reporting source are all available.",
      reportingPeriod: "Reviewed public records as of 2026-05-20",
      source: "Reviewed public records",
    };
  }

  const claims = selectEvidenceClaims(financeRows, {
    types: ["donor/funding"],
    limit: 4,
    candidateContext: candidate,
    allowGenericOfficial: true,
  });
  const publicRows = financeRows.filter((row) => row.sourceUrl);
  const moneyMatch = claims.join(" ").match(/\$[0-9][0-9,]*(?:\.[0-9]{2})?/);
  const source = publicRows[0]?.sourceUrl
    ? `${publisherFromUrl(publicRows[0].sourceUrl) ?? "Public finance source"} (${publicRows[0].sourceUrl})`
    : "Reviewed public records";

  return {
    totalRaised: moneyMatch?.[0] ?? "Not itemized in reviewed public records",
    narrative: claims.length
      ? `${sentenceList(claims)} Finance figures are shown only when the reporting period/source is available; otherwise this remains a research caveat.`
      : `The reviewed public records include ${financeRows.length} campaign-finance row${financeRows.length === 1 ? "" : "s"}, but no clean public total was identified for ${candidate.name}.`,
    donors: [],
    undisclosed: "No donor-by-donor list is shown unless the donor name, amount, and reporting source were all identified clearly.",
    reportingPeriod: "Reviewed public filings as of 2026-05-20",
    source,
  };
}

function derivedSocialResearchNote(issues, socialMatrix) {
  const renderedSignals = issues.reduce((count, issue) => count + issue.socialSignals.length, 0);
  const socialRows = asArray(socialMatrix?.signals ?? socialMatrix?.socialSignals ?? socialMatrix?.items ?? socialMatrix);
  if (renderedSignals === 0 && socialRows.length === 0) {
    return "No issue-relevant public social signals were identified in the reviewed public record. Do not infer private beliefs from a lack of visible social evidence.";
  }
  if (renderedSignals === 0) {
    return `The social review found ${socialRows.length} public observation${socialRows.length === 1 ? "" : "s"}, but none were tied closely enough to a specific issue to show as an issue signal. Social evidence remains a signal layer only, not proof of belief.`;
  }
  return `${renderedSignals} public source-backed social/online observation${renderedSignals === 1 ? "" : "s"} are listed across the issue matrix. Additional social observations are treated as context only, not confirmed policy positions.`;
}

function renderedSourceIds(candidate) {
  const ids = new Set();
  for (const issue of asArray(candidate.issues)) {
    for (const id of asArray(issue.stated?.sourceIds)) ids.add(id);
    for (const action of asArray(issue.actions)) {
      for (const id of asArray(action.sourceIds)) ids.add(id);
    }
    for (const signal of asArray(issue.socialSignals)) {
      for (const id of asArray(signal.sourceIds)) ids.add(id);
    }
  }
  return ids;
}

function isCandidateRelevantSource(source, candidate) {
  if (!source?.url || isDroppedPublicUrl(source.url)) return false;
  const bundle = `${source.title} ${source.publisher ?? ""} ${source.url} ${asArray(source.claimsAnchored).join(" ")}`;
  const mentionsCurrent = textMentionsCandidate(candidate, bundle, { allowSinglePart: true }) || urlMentionsCandidate(candidate, source.url);
  if (otherCandidateMentioned(candidate, bundle) && (!mentionsCurrent || otherCandidateLeadsText(candidate, bundle))) return false;
  if (isGenericRaceOrLocalContextUrl(source.url) && !mentionsCurrent) return false;
  if (source.tier === "social") return mentionsCurrent || urlMentionsCandidate(candidate, source.url);
  return mentionsCurrent;
}

function filterRenderedSources(candidate) {
  const ids = renderedSourceIds(candidate);
  const rendered = [];
  const seen = new Set();
  for (const source of candidate.sources) {
    if (!ids.has(source.id) && !isCandidateRelevantSource(source, candidate)) continue;
    if (seen.has(source.id)) continue;
    seen.add(source.id);
    rendered.push(source);
  }
  if (ids.size === 0) {
    return rendered.filter((source) => source.tier !== "social").slice(0, 8);
  }
  return rendered;
}

function chooseNarrative(existing, derived, minimumLength = 120) {
  const current = normalizeNarrative(existing);
  const next = normalizeNarrative(derived);
  if (!next) return current;
  if (!current || current.length < minimumLength) return next;
  return current;
}

function campaignWebsiteFromSources(slug, yaml, sources) {
  const explicitMeta = mergeMetadata(yaml);
  const explicit = textValue(
    explicitMeta.campaignWebsite,
    explicitMeta.campaign_website,
    explicitMeta.current_campaign_site,
    explicitMeta.website,
    explicitMeta.campaignSite,
  );
  if (explicit && isPublicUrl(explicit)) return resolvePublicUrl(explicit);

  const terms = slug.split("-").filter((term) => term.length > 2);
  const badHosts = /(fec\.gov|kansas\.gov|kslegislature\.gov|sos\.ks\.gov|jocoelection\.org|ellisco\.net|haysusa\.com|docs\.house\.gov|house\.gov|senate\.gov|facebook\.com|x\.com|twitter\.com|instagram\.com|youtube\.com|actblue\.com|secure\.actblue\.com|winred\.com)/i;
  const candidateSources = sources.filter((source) => {
    if (badHosts.test(source.url)) return false;
    let host = "";
    try {
      host = new URL(source.url).hostname.toLowerCase();
    } catch {
      return false;
    }
    if (!terms.some((term) => host.includes(term))) return false;
    const haystack = `${source.url} ${source.title} ${source.publisher ?? ""}`.toLowerCase();
    if (/did not resolve|dns check|older url|not found|blocked|inactive|suspended/.test(haystack)) return false;
    if (/\bcampaign\b|\bfor\b|\bgovernor\b|\bkansas\b/.test(haystack) && terms.some((term) => haystack.includes(term))) return true;
    return terms.length >= 2 && terms.every((term) => haystack.includes(term));
  });

  if (!candidateSources[0]) return undefined;
  try {
    return new URL(candidateSources[0].url).origin + "/";
  } catch {
    return candidateSources[0].url;
  }
}

function cleanReligion(value) {
  if (!value) return undefined;
  if (/^(likely|unknown|unconfirmed)/i.test(value)) return undefined;
  return value;
}

function cleanCampaignWebsite(slug, value) {
  if (!value) return undefined;
  if (/ellisco\.net|usd489\.com|haysusa\.com/i.test(value)) return undefined;
  if (slug !== "tracey-mann" && /mann\.house\.gov/i.test(value)) return undefined;
  if (/docs\.house\.gov/i.test(value)) return undefined;
  return value;
}

function cleanMetaField(value) {
  return omitEmpty(cleanPublicNarrative(value));
}

function campaignFinanceFromNote(note) {
  if (!note) return undefined;
  return {
    totalRaised: "Not itemized in public web records",
    narrative: cleanPublicNarrative(note),
    donors: [],
    undisclosed: "No donor-by-donor public web ledger was found in the reviewed local records.",
    reportingPeriod: "Most recent local cycle reviewed",
    source: "Reviewed public records",
  };
}

function normalizeCandidate(slug, yaml, v1) {
  const meta = { ...(V2_ONLY_METADATA[slug] ?? {}), ...mergeMetadata(yaml), ...(RENDER_METADATA_OVERRIDES[slug] ?? {}) };
  const evidenceRows = loadJsonIfExists(join(MEMORY_CANDIDATES, slug, "evidence-matrix.json"), []);
  const socialMatrix = loadJsonIfExists(join(MEMORY_CANDIDATES, slug, "social-evidence-matrix.json"), []);
  const sourceAudit = loadJsonIfExists(join(MEMORY_CANDIDATES, slug, "source-audit.json"), {});
  const { sources, idMap, rowSourceIds, sourceIdsByUrl } = normalizeSources(
    slug,
    yaml.sources ?? [],
    sourceAudit.sources ?? [],
  );
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const fallbackSourceIds = sources
    .filter((source) => source.tier !== "social")
    .slice(0, 4)
    .map((source) => source.id);
  const whereTheyWorship =
    omitEmpty(meta.whereTheyWorship) ??
    omitEmpty(meta.whereTheyWorship_note) ??
    omitEmpty(v1.whereTheyWorship);
  const inferredCampaignWebsite = campaignWebsiteFromSources(slug, yaml, sources);
  const explicitCampaignWebsite = textValue(
    meta.campaignWebsite,
    meta.campaign_website,
    meta.current_campaign_site,
    meta.website,
    meta.campaignSite,
  );
  const campaignWebsite =
    inferredCampaignWebsite ??
    (explicitCampaignWebsite && isPublicUrl(explicitCampaignWebsite) ? resolvePublicUrl(explicitCampaignWebsite) : undefined) ??
    (sources.length === 0 ? v1.campaignWebsite : undefined);

  const candidateCore = {
    slug,
    name: meta.name ?? v1.name ?? titleCaseSlug(slug),
    party: normalizeParty(meta.party, v1.party),
    position: cleanMetaField(textValue(meta.position, meta.office, meta.race, meta.election, v1.position)) ?? "",
    electionSlug: meta.electionSlug ?? meta.election_slug ?? v1.electionSlug ?? "",
    incumbent: typeof meta.incumbent === "boolean" ? meta.incumbent : typeof v1.incumbent === "boolean" ? v1.incumbent : false,
    occupation: cleanMetaField(textValue(meta.occupation, meta.currentOffice, meta.current_role, v1.occupation)) ?? "",
  };
  const issues = normalizeIssues(yaml, idMap, fallbackSourceIds, sourceById, rowSourceIds, sourceIdsByUrl, candidateCore);
  const safeWhereTheyWorship = whereTheyWorship && !otherCandidateMentioned(candidateCore, whereTheyWorship)
    ? whereTheyWorship
    : undefined;

  const candidate = {
    ...candidateCore,

    born: cleanMetaField(meta.born ?? v1.born),
    hometown: cleanMetaField(meta.hometown ?? v1.hometown),
    religion: cleanReligion(meta.religion ?? v1.religion),
    education: cleanMetaField(meta.education ?? v1.education),
    family: cleanMetaField(meta.family ?? v1.family),
    district: cleanMetaField(meta.district ?? v1.district),
    margin2024: cleanMetaField(meta.margin2024 ?? v1.margin2024),
    campaignWebsite: cleanCampaignWebsite(slug, campaignWebsite),

    issues,
    whoTheyAre: chooseNarrative(
      meta.whoTheyAre ?? meta.statusSummary ?? meta.status_summary ?? v1.whoTheyAre,
      derivedWhoTheyAre(candidateCore, evidenceRows),
    ),
    recordSummary: chooseNarrative(
      meta.recordSummary ?? meta.theirRecord ?? meta.currentOffice ?? v1.theirRecord,
      derivedRecordSummary(candidateCore, issues, evidenceRows),
    ),
    ownWordsNarrative: normalizeNarrative(
      meta.ownWordsNarrative ??
        yaml.socialResearchNote ??
        yaml.social_research_note ??
        yaml.social_online_relevance ??
        yaml.socialOnlineRelevance ??
        yaml.social_online,
    ),
    whereTheyWorship: chooseNarrative(safeWhereTheyWorship, derivedWhereTheyWorship(candidateCore, evidenceRows), 80),
    campaignFinance: normalizeCampaignFinance(yaml, idMap, sources) ??
      campaignFinanceFromNote(meta.campaign_finance_note) ??
      derivedCampaignFinance(candidateCore, evidenceRows),
    socialResearchNote: chooseNarrative(meta.social_presence_note, derivedSocialResearchNote(issues, socialMatrix), 80),
    sources: [],
  };

  candidate.sources = filterRenderedSources({ ...candidate, sources });

  for (const key of Object.keys(candidate)) {
    if (candidate[key] === undefined) delete candidate[key];
  }

  return candidate;
}

function readV1Metadata(slug) {
  const text = readFileSync(UI_CANDIDATES, "utf8");
  const block = findCandidateBlock(text, slug);
  return {
    name: readStringField(block, "name"),
    party: readStringField(block, "party"),
    position: readStringField(block, "position"),
    electionSlug: readStringField(block, "electionSlug"),
    incumbent: readBoolField(block, "incumbent"),
    occupation: readStringField(block, "occupation"),
    born: readStringField(block, "born"),
    hometown: readStringField(block, "hometown"),
    religion: readStringField(block, "religion"),
    education: readStringField(block, "education"),
    family: readStringField(block, "family"),
    district: readStringField(block, "district"),
    margin2024: readStringField(block, "margin2024"),
    campaignWebsite: readStringField(block, "campaignWebsite"),
    whereTheyWorship: readStringField(block, "whereTheyWorship"),
  };
}

function emitTs(slug, candidate) {
  const constName = slugToConst(slug);
  const rel = `${slug}.ts`;
  const path = join(UI_V2, rel);
  const body = JSON.stringify(candidate, null, 2);
  const ts = `/* Auto-generated from memory/candidates/${slug}/v2-issues.yaml.
 * Edit the YAML source, then run:
 *   node scripts/compile-v2-yaml.mjs ${slug}
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ${constName}: CandidateFullV2 = ${body};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(${constName});
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[${rel}] validateCandidateV2 FAILED:\\n" +
        result.errors.join("\\n"),
    );
  }
}
`;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, ts);
  return path;
}

const slugs = process.argv.slice(2);
if (slugs.length === 0) {
  console.error("Usage: node scripts/compile-v2-yaml.mjs <slug> [slug...]");
  process.exit(2);
}

for (const slug of slugs) {
  const yamlPath = join(MEMORY_CANDIDATES, slug, "v2-issues.yaml");
  if (!existsSync(yamlPath)) {
    console.error(`Missing ${yamlPath}`);
    process.exitCode = 1;
    continue;
  }
  const yaml = loadYaml(yamlPath);
  const v1 = readV1Metadata(slug);
  const candidate = normalizeCandidate(slug, yaml, v1);
  const path = emitTs(slug, candidate);
  console.log(`Wrote ${path}`);
}
