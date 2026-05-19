#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const UI_CANDIDATES = join(ROOT, "ui/src/data/candidates.ts");
const UI_V2 = join(ROOT, "ui/src/data/v2");

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

function normalizeSources(slug, yamlSources) {
  const used = new Set();
  const idMap = new Map();
  const sources = [];

  for (const [index, raw] of asArray(yamlSources).entries()) {
    const source = typeof raw === "string" ? { url: raw } : asObject(raw);
    const originalId = textValue(source.id) ?? `s-${index + 1}`;
    const url = textValue(source.url);

    if (!isPublicUrl(url)) {
      idMap.set(originalId, null);
      continue;
    }

    const id = uniqueId(originalId, used, `s-${index + 1}`);
    idMap.set(originalId, id);
    sources.push({
      id,
      tier: normalizeTier(source.tier, url),
      url,
      title: textValue(source.title, source.name, source.label, publisherFromUrl(url), `Source ${index + 1}`),
      publisher: omitEmpty(textValue(source.publisher, source.publication, publisherFromUrl(url))),
      accessed: textValue(source.accessed, source.captured, source.date, "2026-05-19"),
      claimsAnchored: asArray(
        firstValue(source.claimsAnchored, source.claims_anchored, source.claims, source.claims_supported),
      )
        .map((claim) => textValue(claim))
        .filter(Boolean),
    });
  }

  return { sources, idMap };
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

function normalizeIssues(yaml, idMap, fallbackSourceIds, sourceById) {
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
    .filter((issue) => issue.title && issue.stated.sourceIds.length > 0);
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
  const { sources, idMap } = normalizeSources(slug, yaml.sources ?? []);
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const fallbackSourceIds = sources
    .filter((source) => source.tier !== "social")
    .slice(0, 4)
    .map((source) => source.id);
  const issues = normalizeIssues(yaml, idMap, fallbackSourceIds, sourceById);
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

  const candidate = {
    slug,
    name: meta.name ?? v1.name ?? titleCaseSlug(slug),
    party: normalizeParty(meta.party, v1.party),
    position: textValue(meta.position, meta.office, meta.race, meta.election, v1.position) ?? "",
    electionSlug: meta.electionSlug ?? meta.election_slug ?? v1.electionSlug ?? "",
    incumbent: typeof meta.incumbent === "boolean" ? meta.incumbent : typeof v1.incumbent === "boolean" ? v1.incumbent : false,
    occupation: textValue(meta.occupation, meta.currentOffice, meta.current_role, v1.occupation) ?? "",

    born: omitEmpty(meta.born ?? v1.born),
    hometown: omitEmpty(meta.hometown ?? v1.hometown),
    religion: cleanReligion(meta.religion ?? v1.religion),
    education: omitEmpty(meta.education ?? v1.education),
    family: omitEmpty(meta.family ?? v1.family),
    district: omitEmpty(meta.district ?? v1.district),
    margin2024: omitEmpty(meta.margin2024 ?? v1.margin2024),
    campaignWebsite: cleanCampaignWebsite(slug, campaignWebsite),

    issues,
    whoTheyAre: normalizeNarrative(meta.whoTheyAre ?? meta.statusSummary ?? meta.status_summary ?? v1.whoTheyAre),
    recordSummary: normalizeNarrative(meta.recordSummary ?? meta.theirRecord ?? meta.currentOffice ?? v1.theirRecord),
    ownWordsNarrative: normalizeNarrative(
      meta.ownWordsNarrative ??
        yaml.socialResearchNote ??
        yaml.social_research_note ??
        yaml.social_online_relevance ??
        yaml.socialOnlineRelevance ??
        yaml.social_online,
    ),
    whereTheyWorship,
    campaignFinance: normalizeCampaignFinance(yaml, idMap, sources) ?? campaignFinanceFromNote(meta.campaign_finance_note),
    socialResearchNote: omitEmpty(meta.social_presence_note),
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
