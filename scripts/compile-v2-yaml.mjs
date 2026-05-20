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
    const text = textValue(claim);
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
    if (!isPublicUrl(url) || !id) return;
    const key = String(url).trim();
    if (!sourceIdsByUrl.has(key)) sourceIdsByUrl.set(key, []);
    if (!sourceIdsByUrl.get(key).includes(id)) sourceIdsByUrl.get(key).push(id);
  }

  function addSource(raw, index, fallbackId, aliases = [], rowIds = []) {
    const source = typeof raw === "string" ? { url: raw } : asObject(raw);
    const originalId = textValue(source.id, source.sourceId, source.source_id) ?? fallbackId;
    const url = textValue(source.url);

    if (!isPublicUrl(url)) {
      idMap.set(originalId, null);
      for (const alias of aliases) rememberAlias(alias, null);
      return;
    }

    const key = String(url).trim();
    const claims = asArray(
      firstValue(source.claimsAnchored, source.claims_anchored, source.claims, source.claims_supported),
    )
      .map((claim) => textValue(claim))
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
    /^narrative:/i.test(text) ||
    /^issue mapping:/i.test(text) ||
    /^source trail$/i.test(text) ||
    /^where they stand on big issues:?$/i.test(text) ||
    /\|\s*(primary|secondary|social)\s*\|\s*https?:\/\//i.test(text)
  );
}

function sourceIdsForFixedItem(item, rowSourceIds, sourceIdsByUrl) {
  const ids = [
    ...asArray(rowSourceIds.get(textValue(item.evidenceRowId))),
    ...asArray(sourceIdsByUrl.get(textValue(item.sourceUrl))),
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

function fixedIssueStatedText(issue, evidenceItems, socialSignals, candidateSlug) {
  const title = textValue(issue.title, "this issue");
  const publicItems = evidenceItems
    .filter((item) => item.sourceUrl && !isMetaEvidenceText(item.text))
    .filter((item) => isCandidateRelevantUrl(item.sourceUrl, candidateSlug))
    .filter((item) => item.classification !== "social-online-signal");
  const stated = publicItems.find((item) => item.classification === "candidate-stated");
  const documented = publicItems.find((item) => item.classification === "documented-record");
  const fallback = publicItems[0];
  const lead = stated ?? documented ?? fallback;

  if (!lead) {
    const internalOnly = evidenceItems.length;
    const socialText = socialSignals.length > 0
      ? " Public social/online observations exist on disk, but they are not treated as confirmed issue positions."
      : "";
    return `No public URL-backed candidate statement or documented action was separated for ${title} in the rendered profile. ${internalOnly ? `${internalOnly} internal-memory evidence item${internalOnly === 1 ? " remains" : "s remain"} on disk for editorial review, but ` : ""}this page does not infer a position from party, faith, follows, likes, associations, or internal-only notes.${socialText}`;
  }

  const parts = [];
  if (lead) {
    const label = lead.classification === "candidate-stated"
      ? "Candidate-stated evidence"
      : lead.classification === "documented-record"
        ? "Documented-record evidence"
        : "Reviewed evidence";
    parts.push(`${label}: ${excerpt(lead.text, 420)}`);
  } else {
    parts.push(`No candidate-controlled statement was found for ${title}; the rendered material is limited to observed public signals.`);
  }

  const publicCount = publicItems.length;
  const internalOnly = Math.max(0, evidenceItems.length - publicCount);
  if (publicCount > 1 || internalOnly > 0) {
    parts.push(`The disk matrix keeps ${evidenceItems.length} selected evidence item${evidenceItems.length === 1 ? "" : "s"} for this issue, including ${publicCount} public URL-backed item${publicCount === 1 ? "" : "s"}${internalOnly ? ` and ${internalOnly} internal-memory item${internalOnly === 1 ? "" : "s"}` : ""}.`);
  }
  if (socialSignals.length > 0) {
    parts.push("Social/online signals are included only as observed behavior and are not treated as confirmed beliefs or policy positions.");
  }
  return parts.join(" ");
}

function normalizeFixedIssues(yaml, rowSourceIds, sourceIdsByUrl, sourceById, candidateSlug) {
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
          .filter((item) => isCandidateRelevantUrl(item.sourceUrl, candidateSlug))
          .filter((item) => item.classification !== "social-online-signal")
          .flatMap((item) => sourceIdsForFixedItem(item, rowSourceIds, sourceIdsByUrl))
          .filter((id) => sourceById.has(id))
          .slice(0, 6),
      )];

      const actionCandidates = evidenceItems
        .filter((item) => !isMetaEvidenceText(item.text))
        .filter((item) => isCandidateRelevantUrl(item.sourceUrl, candidateSlug))
        .filter((item) => ACTION_ELIGIBLE_FIXED_CLASSES.has(item.classification))
        .map((item) => ({
          item,
          sourceIds: sourceIdsForFixedItem(item, rowSourceIds, sourceIdsByUrl)
            .filter((id) => sourceById.has(id)),
        }))
        .filter(({ sourceIds }) => sourceIds.length > 0 && hasNonSocialSource(sourceIds, sourceById));

      const seenActionBodies = new Set();
      const actions = [];
      for (const { item, sourceIds } of actionCandidates) {
        const body = excerpt(item.text, 520);
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
        if (!isCandidateRelevantUrl(signal.sourceUrl, candidateSlug)) continue;
        const observation = excerpt(signal.observation, 420);
        const key = `${textValue(signal.platform)}:${observation}`.toLowerCase();
        if (seenSocial.has(key)) continue;
        seenSocial.add(key);
        const sourceIds = [
          ...asArray(rowSourceIds.get(textValue(signal.evidenceRowId))),
          ...asArray(sourceIdsByUrl.get(textValue(signal.sourceUrl))),
        ]
          .map((sourceId) => textValue(sourceId))
          .filter((sourceId) => sourceId && sourceById.has(sourceId));
        if (sourceIds.length === 0) continue;
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
          text: fixedIssueStatedText(issue, evidenceItems, rawSocialSignals, candidateSlug),
          sourceIds: statedSourceIds,
        },
        actions,
        socialSignals,
      };
    })
    .filter((issue) => issue.title);
}

function normalizeIssues(yaml, idMap, fallbackSourceIds, sourceById, rowSourceIds = new Map(), sourceIdsByUrl = new Map(), candidateSlug = "") {
  const fixedIssues = normalizeFixedIssues(yaml, rowSourceIds, sourceIdsByUrl, sourceById, candidateSlug);
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
      if (typeof donor === "string") return { name: donor, amount: "listed" };
      const object = asObject(donor);
      const name = textValue(object.name, object.donor, object.source, object.entity, object.description);
      if (!name) return undefined;
      return {
        name,
        amount: textValue(object.amount, object.total, object.value, object.note, "listed"),
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
  const totalRaised = financeText(
    firstValue(
      finance.totalRaised,
      finance.total_raised,
      finance.total_receipts,
      finance.totalReceipts,
      finance.known,
      finance.summary,
    ),
  );
  const narrative = textValue(
    finance.narrative,
    finance.summary,
    finance.donor_summary,
    finance.donorSummary,
    finance.donor_funding_notes,
    finance.notes,
    finance.status,
    totalRaised,
  );

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
    undisclosed: omitEmpty(textValue(
      finance.undisclosed,
      finance.disclosure_issue,
      finance.donor_blocker,
      finance.donorNotes,
      finance.caveat,
      finance.note,
    )),
    reportingPeriod: textValue(finance.reportingPeriod, finance.reporting_period, finance.filed, "Most recent public filing reviewed"),
    source: source?.title ?? source?.url ?? textValue(finance.source, "Candidate v2 issue file"),
  };
}

function normalizeNarrative(value) {
  return omitEmpty(textValue(value));
}

function cleanClaimText(value) {
  return compactWhitespace(value)
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
  if (/auto-normalized|hydrate-v2-social-signals/i.test(text)) return false;
  if (/no candidate-controlled issue platform|does not infer positions|sparse profiles|final certified ballot status|does not treat that appearance|final election-office list|filing deadline/i.test(text)) return false;
  return true;
}

function selectEvidenceClaims(rows, {
  types = [],
  issueNumbers = [],
  limit = 4,
  requirePublicUrl = false,
  includeSocial = false,
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
      sourceFile.includes(`memory/candidates/${candidate.slug}/`) ||
      sourceUrl.includes("fec.gov") ||
      sourceUrl.includes("kansas.gov")
    );
  });
  const bioClaims = selectEvidenceClaims(candidateScopedRows, {
    types: ["biography", "ballot status", "church/worship"],
    limit: 3,
  });
  const publicBioClaims = selectEvidenceClaims(candidateScopedRows, {
    types: ["biography", "ballot status", "church/worship"],
    limit: 2,
    requirePublicUrl: true,
  });
  const claims = publicBioClaims.length ? publicBioClaims : bioClaims;
  const partyLabels = { R: "Republican", D: "Democratic", I: "Independent", NP: "nonpartisan" };
  const partyLabel = partyLabels[candidate.party] ?? candidate.party;
  const partyPhrase = partyLabel === "Independent" ? "an Independent" : `a ${partyLabel}`;
  const intro = `${candidate.name} is profiled here for ${candidate.position || candidate.electionSlug} as ${partyPhrase}${candidate.incumbent ? " incumbent/current official" : ""}.`;
  if (claims.length === 0) {
    return `${intro} The available public biography record is thin in the current evidence matrix, so this profile avoids filling gaps with assumptions and keeps the source trail open for follow-up.`;
  }
  return `${intro} ${sentenceList(claims)} The profile uses these biography/status records as descriptive background only and does not infer policy positions from identity, faith, family, or associations.`;
}

function derivedRecordSummary(candidate, issues, evidenceRows) {
  const actionCount = issues.reduce((count, issue) => count + issue.actions.length, 0);
  const issueCountWithActions = issues.filter((issue) => issue.actions.length > 0).length;
  const recordClaims = selectEvidenceClaims(evidenceRows, {
    types: ["voting record", "meeting record", "campaign statement", "legal/court", "controversy", "endorsement"],
    limit: 4,
    requirePublicUrl: true,
  });
  const renderedExamples = issues
    .flatMap((issue) => issue.actions.map((action) => `${issue.title}: ${action.body}`))
    .slice(0, 4)
    .map((body) => excerpt(body, 240));

  if (actionCount === 0 && recordClaims.length === 0) {
    return `No separate source-backed vote, meeting action, filing, or public-record action has been split out for ${candidate.name} in the current rendered issue cards. The disk evidence matrix remains available for follow-up, and the profile should not infer a record where the public record is thin.`;
  }

  const examples = renderedExamples.length ? renderedExamples : recordClaims;
  return `The rendered record now contains ${actionCount} source-backed action${actionCount === 1 ? "" : "s"} across ${issueCountWithActions} of the 14 issue areas. ${examples.length ? `Representative public-record entries include: ${sentenceList(examples)}` : ""} Social-only material is excluded from this record summary and remains labeled as observation when rendered.`;
}

function derivedWhereTheyWorship(evidenceRows) {
  const worshipRows = asArray(evidenceRows).filter((row) => {
    if (row.evidenceType !== "church/worship") return false;
    const text = cleanClaimText(row.claim || row.exactEvidenceSummary);
    if (/no candidate-controlled issue platform|does not infer|sparse profiles|where they stand/i.test(text)) return false;
    return /\b(church|worship|faith|religion|pastor|minister|congregation|parish|temple|mosque|synagogue|chapel|denomination)\b/i.test(text);
  });
  const worshipClaims = selectEvidenceClaims(worshipRows, {
    types: ["church/worship"],
    limit: 3,
  });
  if (worshipClaims.length === 0) {
    return "No public worship affiliation was confirmed in the reviewed evidence matrix. This section is descriptive only; no policy position is inferred from the absence or presence of faith-related public records.";
  }
  return `${sentenceList(worshipClaims)} This faith/worship note is descriptive only and is not used to infer any policy position.`;
}

function derivedCampaignFinance(candidate, evidenceRows) {
  const financeRows = asArray(evidenceRows).filter((row) => row.evidenceType === "donor/funding");
  if (financeRows.length === 0) {
    return {
      totalRaised: "No public finance total separated in this pass",
      narrative: `No FEC/KPDC finance total was separated for ${candidate.name} in the current evidence matrix. Treat this as a research gap, not as evidence that no money was raised or spent.`,
      donors: [],
      undisclosed: "No donor-by-donor public ledger was safely separated into the rendered profile in this pass.",
      reportingPeriod: "Current evidence matrix reviewed 2026-05-20",
      source: "Candidate evidence matrix",
    };
  }

  const claims = selectEvidenceClaims(financeRows, {
    types: ["donor/funding"],
    limit: 4,
  });
  const publicRows = financeRows.filter((row) => row.sourceUrl);
  const moneyMatch = claims.join(" ").match(/\$[0-9][0-9,]*(?:\.[0-9]{2})?/);
  const source = publicRows[0]?.sourceUrl
    ? `${publisherFromUrl(publicRows[0].sourceUrl) ?? "Public finance source"} (${publicRows[0].sourceUrl})`
    : "Candidate evidence matrix and source audit";

  return {
    totalRaised: moneyMatch?.[0] ?? "Not itemized in rendered profile",
    narrative: claims.length
      ? `${sentenceList(claims)} Finance figures are shown only when the reporting period/source was preserved in the evidence matrix; otherwise this remains a research caveat.`
      : `The evidence matrix includes ${financeRows.length} campaign-finance row${financeRows.length === 1 ? "" : "s"}, but no clean public total was safely separated for ${candidate.name} in this pass.`,
    donors: [],
    undisclosed: "No donor-by-donor list is rendered unless the donor name, amount, and reporting source were all separated cleanly.",
    reportingPeriod: "Current public filings/evidence matrix reviewed 2026-05-20",
    source,
  };
}

function derivedSocialResearchNote(issues, socialMatrix) {
  const renderedSignals = issues.reduce((count, issue) => count + issue.socialSignals.length, 0);
  const socialRows = asArray(socialMatrix?.signals ?? socialMatrix?.socialSignals ?? socialMatrix?.items ?? socialMatrix);
  if (renderedSignals === 0 && socialRows.length === 0) {
    return "No issue-relevant public social signals were separated in this pass. Do not infer private beliefs from a lack of visible social evidence.";
  }
  if (renderedSignals === 0) {
    return `The social harvest contains ${socialRows.length} observed item${socialRows.length === 1 ? "" : "s"}, but none were rendered as public source-backed issue signals in this pass. Social evidence remains a signal layer only, not proof of belief.`;
  }
  return `${renderedSignals} public source-backed social/online signal${renderedSignals === 1 ? "" : "s"} are rendered across the issue matrix. Additional social harvest rows remain on disk and should be treated as observations only, not confirmed policy positions.`;
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
  if (explicit && isPublicUrl(explicit)) return explicit;

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

function campaignFinanceFromNote(note) {
  if (!note) return undefined;
  return {
    totalRaised: "Not itemized in public web records",
    narrative: String(note).trim(),
    donors: [],
    undisclosed: "No donor-by-donor public web ledger was found in the reviewed local records.",
    reportingPeriod: "Most recent local cycle reviewed",
    source: "Candidate memory v2 issue file and local filing-system notes",
  };
}

function normalizeCandidate(slug, yaml, v1) {
  const meta = { ...(V2_ONLY_METADATA[slug] ?? {}), ...mergeMetadata(yaml) };
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
  const issues = normalizeIssues(yaml, idMap, fallbackSourceIds, sourceById, rowSourceIds, sourceIdsByUrl, slug);
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
    (explicitCampaignWebsite && isPublicUrl(explicitCampaignWebsite) ? explicitCampaignWebsite : undefined) ??
    (sources.length === 0 ? v1.campaignWebsite : undefined);

  const candidateCore = {
    slug,
    name: meta.name ?? v1.name ?? titleCaseSlug(slug),
    party: normalizeParty(meta.party, v1.party),
    position: textValue(meta.position, meta.office, meta.race, meta.election, v1.position) ?? "",
    electionSlug: meta.electionSlug ?? meta.election_slug ?? v1.electionSlug ?? "",
    incumbent: typeof meta.incumbent === "boolean" ? meta.incumbent : typeof v1.incumbent === "boolean" ? v1.incumbent : false,
    occupation: textValue(meta.occupation, meta.currentOffice, meta.current_role, v1.occupation) ?? "",
  };

  const candidate = {
    ...candidateCore,

    born: omitEmpty(meta.born ?? v1.born),
    hometown: omitEmpty(meta.hometown ?? v1.hometown),
    religion: cleanReligion(meta.religion ?? v1.religion),
    education: omitEmpty(meta.education ?? v1.education),
    family: omitEmpty(meta.family ?? v1.family),
    district: omitEmpty(meta.district ?? v1.district),
    margin2024: omitEmpty(meta.margin2024 ?? v1.margin2024),
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
    whereTheyWorship: chooseNarrative(whereTheyWorship, derivedWhereTheyWorship(evidenceRows), 80),
    campaignFinance: normalizeCampaignFinance(yaml, idMap, sources) ??
      campaignFinanceFromNote(meta.campaign_finance_note) ??
      derivedCampaignFinance(candidateCore, evidenceRows),
    socialResearchNote: chooseNarrative(meta.social_presence_note, derivedSocialResearchNote(issues, socialMatrix), 80),
    sources,
  };

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
