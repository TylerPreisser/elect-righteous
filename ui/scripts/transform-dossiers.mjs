import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");
const reportsDir = path.join(repoRoot, "reports");
const memoryCandidatesDir = path.join(repoRoot, "memory", "candidates");
const candidatesFile = path.join(repoRoot, "ui", "src", "data", "candidates.ts");
const traceyDossierFile = path.join(repoRoot, "TRACEY-MANN-DOSSIER.md");

const CANDIDATES = [
  {
    slug: "tracey-mann",
    name: "Tracey Mann",
    party: "R",
    position: "U.S. Representative, KS-01",
    electionSlug: "ks-01-house-2026",
    incumbent: true,
    occupation: "Farmer / Real Estate Broker",
  },
  {
    slug: "roger-marshall",
    name: "Roger Marshall",
    party: "R",
    position: "U.S. Senator",
    electionSlug: "us-senate-2026",
    incumbent: true,
    occupation: "Physician / Rancher",
  },
  {
    slug: "jason-hart",
    name: "Jason Hart",
    party: "D",
    position: "U.S. Senate candidate",
    electionSlug: "us-senate-2026",
    incumbent: false,
    occupation: "U.S. Senate candidate",
  },
  {
    slug: "patrick-schmidt",
    name: "Patrick Schmidt",
    party: "D",
    position: "U.S. Senate candidate",
    electionSlug: "us-senate-2026",
    incumbent: false,
    occupation: "State Senator / Navy Veteran",
  },
  {
    slug: "christy-cauble-davis",
    name: "Christy Cauble Davis",
    party: "D",
    position: "U.S. Senate candidate",
    electionSlug: "us-senate-2026",
    incumbent: false,
    occupation: "Rural Development Administrator",
  },
  {
    slug: "sandy-spidel-neumann",
    name: "Sandy Spidel Neumann",
    party: "D",
    position: "U.S. Senate candidate",
    electionSlug: "us-senate-2026",
    incumbent: false,
    occupation: "U.S. Senate candidate",
  },
  {
    slug: "erik-murray",
    name: "Erik Murray",
    party: "D",
    position: "U.S. Senate candidate",
    electionSlug: "us-senate-2026",
    incumbent: false,
    occupation: "Attorney / Public Servant",
  },
  {
    slug: "anne-parelkar",
    name: "Anne Parelkar",
    party: "D",
    position: "U.S. Senate candidate",
    electionSlug: "us-senate-2026",
    incumbent: false,
    occupation: "Community Advocate",
  },
  {
    slug: "michael-soetaert",
    name: "Michael Soetaert",
    party: "D",
    position: "U.S. Senate candidate",
    electionSlug: "us-senate-2026",
    incumbent: false,
    occupation: "City Council Member",
  },
  {
    slug: "chase-laporte",
    name: "Chase LaPorte",
    party: "R",
    position: "U.S. Senate candidate",
    electionSlug: "us-senate-2026",
    incumbent: false,
    occupation: "Army Veteran / Business Administrator",
  },
  {
    slug: "colin-mcroberts",
    name: "Colin McRoberts",
    party: "D",
    position: "U.S. House candidate, KS-01",
    electionSlug: "ks-01-house-2026",
    incumbent: false,
    occupation: "Law Professor / Negotiation Expert",
  },
  {
    slug: "lauren-reinhold",
    name: "Lauren Reinhold",
    party: "D",
    position: "U.S. House candidate, KS-01",
    electionSlug: "ks-01-house-2026",
    incumbent: false,
    occupation: "Federal Lawyer",
  },
  {
    slug: "craig-musser",
    name: "Craig Musser",
    party: "I",
    position: "U.S. House candidate, KS-01",
    electionSlug: "ks-01-house-2026",
    incumbent: false,
    occupation: "Health and Safety Manager",
  },
  {
    slug: "scott-schwab",
    name: "Scott Schwab",
    party: "R",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Kansas Secretary of State",
  },
  {
    slug: "vicki-schmidt",
    name: "Vicki Schmidt",
    party: "R",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Insurance Commissioner / Pharmacist",
  },
  {
    slug: "ty-masterson",
    name: "Ty Masterson",
    party: "R",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Kansas Senate President",
  },
  {
    slug: "jeff-colyer",
    name: "Jeff Colyer",
    party: "R",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Physician / Former Governor",
  },
  {
    slug: "ethan-corson",
    name: "Ethan Corson",
    party: "D",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "State Senator / Attorney",
  },
  {
    slug: "cindy-holscher",
    name: "Cindy Holscher",
    party: "D",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "State Senator",
  },
  {
    slug: "marty-tuley",
    name: "Marty Tuley",
    party: "D",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Governor candidate",
  },
  {
    slug: "charlotte-ohara",
    name: "Charlotte O'Hara",
    party: "R",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Activist / Former Local Official",
  },
  {
    slug: "stacy-rogers",
    name: "Stacy Rogers",
    party: "R",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Businesswoman / Former School Board Member",
  },
  {
    slug: "joy-eakins",
    name: "Joy Eakins",
    party: "R",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Governor candidate",
  },
  {
    slug: "philip-sarnecki",
    name: "Philip Sarnecki",
    party: "R",
    position: "Governor candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Businessman",
  },
  {
    slug: "kris-kobach",
    name: "Kris Kobach",
    party: "R",
    position: "Kansas Attorney General",
    electionSlug: "kansas-ag-2026",
    incumbent: true,
    occupation: "Attorney General / Former Secretary of State",
  },
  {
    slug: "chris-mann",
    name: "Chris Mann",
    party: "D",
    position: "Attorney General candidate",
    electionSlug: "kansas-ag-2026",
    incumbent: false,
    occupation: "Attorney / Former Federal Prosecutor",
  },
  {
    slug: "pat-proctor",
    name: "Pat Proctor",
    party: "R",
    position: "Secretary of State candidate",
    electionSlug: "kansas-sos-2026",
    incumbent: false,
    occupation: "State Representative / Retired Army Colonel",
  },
  {
    slug: "ken-rahjes",
    name: "Ken Rahjes",
    party: "R",
    position: "Secretary of State candidate",
    electionSlug: "kansas-sos-2026",
    incumbent: false,
    occupation: "State Representative / Agriculture Broadcaster",
  },
  {
    slug: "jennifer-day",
    name: "Jennifer Day",
    party: "D",
    position: "Secretary of State candidate",
    electionSlug: "kansas-sos-2026",
    incumbent: false,
    occupation: "Former State Representative / Real Estate Investor",
  },
  {
    slug: "sam-lane",
    name: "Sam Lane",
    party: "D",
    position: "Secretary of State candidate",
    electionSlug: "kansas-sos-2026",
    incumbent: false,
    occupation: "Secretary of State candidate",
  },
  {
    slug: "daniel-hawkins",
    name: "Daniel Hawkins",
    party: "R",
    position: "Insurance Commissioner candidate",
    electionSlug: "kansas-insurance-2026",
    incumbent: false,
    occupation: "House Speaker / Insurance Executive",
  },
  {
    slug: "dinah-sykes",
    name: "Dinah Sykes",
    party: "D",
    position: "Insurance Commissioner candidate",
    electionSlug: "kansas-insurance-2026",
    incumbent: false,
    occupation: "State Senator / Consumer Advocate",
  },
  {
    slug: "barb-wasinger",
    name: "Barb Wasinger",
    party: "R",
    position: "KS House District 111",
    electionSlug: "ks-house-111",
    incumbent: true,
    occupation: "State Representative",
  },
  {
    slug: "mason-ruder",
    name: "Mason Ruder",
    party: "NP",
    position: "Hays Mayor",
    electionSlug: "hays-city-current",
    incumbent: true,
    occupation: "Mayor / Business Services Specialist",
  },
  {
    slug: "alaina-cunningham",
    name: "Alaina Cunningham",
    party: "NP",
    position: "Hays Vice Mayor / City Commissioner",
    electionSlug: "hays-city-current",
    incumbent: true,
    occupation: "Nurse / Fitness Instructor",
  },
  {
    slug: "shaun-musil",
    name: "Shaun Musil",
    party: "NP",
    position: "Hays City Commissioner",
    electionSlug: "hays-city-current",
    incumbent: true,
    occupation: "Nex-Tech Employee / Business Owner",
  },
  {
    slug: "sandy-jacobs",
    name: "Sandy Jacobs",
    party: "NP",
    position: "Hays City Commissioner",
    electionSlug: "hays-city-current",
    incumbent: true,
    occupation: "Former Mayor / Foundation Executive",
  },
  {
    slug: "david-vilaysing",
    name: "David Vilaysing",
    party: "NP",
    position: "Hays City Commissioner",
    electionSlug: "hays-city-current",
    incumbent: true,
    occupation: "Retired Police Officer / Trainer",
  },
  {
    slug: "toby-dougherty",
    name: "Toby Dougherty",
    party: "NP",
    position: "Hays City Manager",
    electionSlug: "hays-city-current",
    incumbent: true,
    occupation: "City Manager",
  },
  {
    slug: "scott-braun",
    name: "Scott Braun",
    party: "R",
    position: "Ellis County Sheriff",
    electionSlug: "ellis-county-current",
    incumbent: true,
    occupation: "Sheriff / Career Law Enforcement Officer",
  },
  {
    slug: "aaron-cunningham",
    name: "Aaron Cunningham",
    party: "R",
    position: "Ellis County Attorney",
    electionSlug: "ellis-county-current",
    incumbent: true,
    occupation: "County Attorney / Attorney",
  },
  {
    slug: "bobbi-dreiling",
    name: "Bobbi Dreiling",
    party: "R",
    position: "Ellis County Clerk",
    electionSlug: "ellis-county-current",
    incumbent: true,
    occupation: "County Clerk / Election Officer",
  },
  {
    slug: "nathan-leiker",
    name: "Nathan Leiker",
    party: "R",
    position: "Ellis County Commissioner, District 3",
    electionSlug: "ellis-county-current",
    incumbent: true,
    occupation: "Farmer / County Commissioner",
  },
  {
    slug: "neal-younger",
    name: "Neal Younger",
    party: "R",
    position: "Ellis County Commissioner, District 2",
    electionSlug: "ellis-county-current",
    incumbent: true,
    occupation: "Electrician / Plumber",
  },
  {
    slug: "rebecca-herzog",
    name: "Rebecca Herzog",
    party: "R",
    position: "Ellis County Register of Deeds",
    electionSlug: "ellis-county-current",
    incumbent: true,
    occupation: "Register of Deeds",
  },
  {
    slug: "vernon-ruder-jr",
    name: "Vernon Ruder Jr.",
    party: "R",
    position: "Ellis County Treasurer",
    electionSlug: "ellis-county-current",
    incumbent: true,
    occupation: "County Treasurer",
  },
  {
    slug: "ken-brooks",
    name: "Ken Brooks",
    party: "NP",
    position: "USD 489 Board President",
    electionSlug: "usd-489-current",
    incumbent: true,
    occupation: "School Board Member",
  },
  {
    slug: "curt-vajnar",
    name: "Curt Vajnar",
    party: "NP",
    position: "USD 489 Board Member",
    electionSlug: "usd-489-current",
    incumbent: true,
    occupation: "School Board Member",
  },
  {
    slug: "ruth-ruder",
    name: "Ruth Ruder",
    party: "NP",
    position: "USD 489 Board Member",
    electionSlug: "usd-489-current",
    incumbent: true,
    occupation: "School Board Member",
  },
  {
    slug: "derek-yarmer",
    name: "Derek Yarmer",
    party: "NP",
    position: "USD 489 Board Member",
    electionSlug: "usd-489-current",
    incumbent: true,
    occupation: "School Board Member",
  },
  {
    slug: "allen-park",
    name: "Allen Park",
    party: "NP",
    position: "USD 489 Board Member",
    electionSlug: "usd-489-current",
    incumbent: true,
    occupation: "School Board Member",
  },
  {
    slug: "jayme-goetz",
    name: "Jayme Goetz",
    party: "NP",
    position: "USD 489 Board Member",
    electionSlug: "usd-489-current",
    incumbent: true,
    occupation: "School Board Member",
  },
  {
    slug: "craig-pallister",
    name: "Craig Pallister",
    party: "NP",
    position: "USD 489 Board Member",
    electionSlug: "usd-489-current",
    incumbent: true,
    occupation: "School Board Member",
  },
  {
    slug: "ron-wilson",
    name: "Ron Wilson",
    party: "NP",
    position: "USD 489 Superintendent",
    electionSlug: "usd-489-current",
    incumbent: true,
    occupation: "Superintendent",
  },
];

const BIO_KEYWORDS = [
  "full biography",
  "biographical summary",
  "basic profile",
  "background summary",
  "background occupation",
  "background",
  "biography",
  "deep biography",
  "bio facts",
  "bio",
  "verified identity",
  "identity background",
  "personal information",
  "full profile",
  "education",
  "family",
  "career",
  "career before",
  "community involvement",
  "medical career",
  "origin story",
  "military service",
  "published books",
];

const RECORD_KEYWORDS = [
  "voting record",
  "legislative record",
  "political record",
  "legislative service",
  "state senate record",
  "committee work",
  "bills sponsored",
  "policy positions",
  "policy record",
  "record votes actions",
  "detailed record actions",
  "platform",
  "campaign positions",
  "career timeline",
  "service history",
  "electoral history",
  "board appointments",
  "record",
];

const FACT_KEYWORDS = [
  "controvers",
  "assessment",
  "key vulnerabilities",
  "key findings",
  "what public sources show",
  "what we know",
  "salary",
  "serial candidacy",
  "party switch",
  "incident",
  "timeline",
  "legacy",
  "defining project",
  "full context",
  "notable",
  "vulnerabilities",
  "bottom line",
  "what you should know",
  "additional public record findings",
  "public record findings",
];

const FAITH_KEYWORDS = [
  "faith",
  "church",
  "where they worship",
  "church membership",
  "faith connection",
];

const FINANCE_KEYWORDS = [
  "campaign finance",
  "fundraising",
  "donor",
  "fec",
  "cash on hand",
  "receipts",
  "disbursements",
];

const FIELD_LABELS = {
  born: ["born"],
  hometown: ["hometown", "residence", "birthplace"],
  religion: ["religion"],
  district: ["district", "district coverage"],
  campaignWebsite: ["campaign website", "campaign site", "official website", "website"],
};

const CAMPAIGN_WEBSITE_OVERRIDES = {
  "roger-marshall": "https://kansansformarshall.com",
  "patrick-schmidt": "https://patrickforkansas.com/",
  "christy-cauble-davis": "https://www.christydavisforkansas.com/",
  "sandy-spidel-neumann": "https://sandyforkansas.com/",
  "erik-murray": "https://erikforkansas.com/",
  "anne-parelkar": "https://www.anneforkansas.com/",
  "michael-soetaert": "https://mikeforkansas.my.canva.site",
  "chase-laporte": "https://www.laporte4ksgov.com/",
  "colin-mcroberts": "https://colinforkansas.com/",
  "lauren-reinhold": "https://www.laurenforkansas.com",
  "scott-schwab": "https://scottschwab.com/",
  "ethan-corson": "https://ethanforkansas.com",
  "cindy-holscher": "https://cindyforkansas.com/",
  "stacy-rogers": "https://stacyrogersforks.com/",
  "chris-mann": "https://chrismannforkansas.com/",
  "barb-wasinger": "https://barbforkansas.com/",
  "mason-ruder": "https://www.haysusa.com/269/City-Commission",
  "nathan-leiker": "https://www.ellisco.net/120/County-Commission",
};

const QUOTE_OVERRIDES = {
  "chase-laporte": [
    {
      text: "I have built my core values upon Biblical foundation.",
      source: "OnTheIssues / 2022 Kansas governor campaign website",
      date: "2022-06-24",
      url: "https://www.ontheissues.org/Chase_LaPorte.htm",
      topic: "Principles & Values",
    },
    {
      text: "Kansas schools are inadequately staffed and under-funded.",
      source: "OnTheIssues / 2022 Kansas governor campaign website",
      date: "2022-06-24",
      url: "https://www.ontheissues.org/Chase_LaPorte.htm",
      topic: "Education",
    },
    {
      text: "Transparency in government keep officials accountable.",
      source: "OnTheIssues / 2022 Kansas governor campaign website",
      date: "2022-06-24",
      url: "https://www.ontheissues.org/Chase_LaPorte.htm",
      topic: "Government Reform",
    },
  ],
};

const FACT_OVERRIDES = {
  "patrick-schmidt": [
    "Schmidt is the only Democratic U.S. Senate candidate in the field who currently holds elected office in Kansas",
    "He served as a U.S. Naval Intelligence Officer and uses national-security experience as a central credential",
    "He entered the Senate race shortly after starting his first state-senate term, which makes ambition and timing part of his public story",
    "His 2024 Kansas Senate filings showed more than $51,000 in contributions in the July reporting period and additional PAC-backed support later in the cycle",
    "No verified public church affiliation surfaced in the accessible research trail",
  ],
  "chase-laporte": [
    "LaPorte is a Republican primary challenger to Roger Marshall with a much thinner campaign footprint than the incumbent",
    "He is an Army veteran who served from 2005 to 2013 and has also run for other offices, including governor and the U.S. House",
    "The public record does not show a dedicated Senate campaign website, and much of his web presence still points back to older campaigns",
    "A Kansas finance snippet tied to the research trail listed named contributors including Ty Masterson and several smaller-dollar donors",
    "No verified public church affiliation surfaced in the accessible research trail",
  ],
};

const BAD_HEADING_PHRASES = [
  "relationship to",
  "information gaps",
  "comparative analysis",
  "key dynamics",
  "key themes",
  "source index",
  "summary table",
  "key findings",
  "recommended next steps",
  "gold standard",
];

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/’/g, "'")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function buildAliases(candidate) {
  const parts = new Set([
    candidate.name,
    candidate.name.replace(/'/g, ""),
    candidate.name.replace(/\./g, ""),
    candidate.name.replace(/ Jr\.$/, " Jr"),
    candidate.slug.replace(/-/g, " "),
  ]);
  return [...parts]
    .map(normalize)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
}

function titleFromDomain(hostname) {
  const base = hostname.replace(/^www\./, "");
  return base
    .split(".")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(".");
}

function readReport(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const reportName = path.basename(filePath);
  const reportDateMatch =
    content.match(/(?:Investigation Date|Report Date|Date|Last Updated|Consolidated):\s*([A-Za-z]+\s+\d{1,2},\s+\d{4}|\d{4}-\d{2}-\d{2})/i) ??
    reportName.match(/(20\d{2}-\d{2}-\d{2})/);

  return {
    id: path.relative(repoRoot, filePath),
    name: reportName,
    content,
    reportDate: reportDateMatch ? normalizeDate(reportDateMatch[1]) : "2026-03-31",
  };
}

function collectCandidateMemoryFiles() {
  if (!fs.existsSync(memoryCandidatesDir)) {
    return [];
  }

  return fs
    .readdirSync(memoryCandidatesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const candidateDir = path.join(memoryCandidatesDir, entry.name);
      return fs
        .readdirSync(candidateDir, { withFileTypes: true })
        .filter((file) => file.isFile() && file.name.endsWith(".md"))
        .map((file) => path.join(candidateDir, file.name));
    });
}

function normalizeDate(value) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return "2026-03-31";
  }

  return parsed.toISOString().slice(0, 10);
}

function parseHeadings(content) {
  const matches = [...content.matchAll(/^(#{1,6})\s+(.+)$/gm)];
  return matches.map((match, index) => ({
    level: match[1].length,
    title: match[2].trim(),
    start: match.index ?? 0,
    bodyStart: (match.index ?? 0) + match[0].length + 1,
    end: matches[index + 1]?.index ?? content.length,
  }));
}

function isUsefulHeading(title) {
  const normalized = normalize(title);
  return !BAD_HEADING_PHRASES.some((phrase) => normalized.includes(phrase));
}

function scoreSection(candidate, reportId, reportName, title) {
  const fileText = `${reportId} ${reportName}`.toLowerCase();
  const isCandidateOwnedFile = reportId.includes(`memory/candidates/${candidate.slug}/`);
  let fileScore =
    isCandidateOwnedFile ||
    fileText.includes(candidate.slug) ||
    fileText.includes(candidate.name.toLowerCase().split(" ").at(-1)?.toLowerCase() ?? "")
      ? 40
      : reportName === "TRACEY-MANN-DOSSIER.md"
      ? 40
      : 15;

  if (isCandidateOwnedFile) {
    fileScore += 10;
  }

  const headingScore =
    normalize(title).includes(normalize(candidate.name)) ||
    normalize(title).includes(normalize(candidate.slug.replace(/-/g, " ")))
      ? 25
      : 0;

  const codexBoost = /codex deep research/i.test(title) ? 60 : 0;
  const roundTwoBoost = /round 2/i.test(title) ? 5 : 0;

  return fileScore + headingScore + codexBoost + roundTwoBoost;
}

function captureCandidateSections(candidate, reports) {
  const aliases = buildAliases(candidate);
  const sections = [];

  for (const report of reports) {
    const headings = parseHeadings(report.content);
    const isCandidateOwnedFile = report.id.includes(`memory/candidates/${candidate.slug}/`);
    const isCandidateSpecificNote = isCandidateOwnedFile && report.name !== "raw-dump.md";

    for (const heading of headings) {
      const headingText = normalize(heading.title);
      const isCodexDeepResearchRoot =
        isCandidateOwnedFile && /codex deep research/i.test(heading.title);
      const shouldIncludeHeading =
        isCandidateSpecificNote ||
        isCodexDeepResearchRoot ||
        aliases.some((alias) => headingText.includes(alias));

      if (!shouldIncludeHeading) {
        continue;
      }

      if (!isUsefulHeading(heading.title)) {
        continue;
      }

      const nextSameOrHigher = headings.find(
        (item) => item.start > heading.start && item.level <= heading.level
      );

      const end = nextSameOrHigher?.start ?? report.content.length;
      const content = report.content.slice(heading.start, end).trim();
      if (!content) {
        continue;
      }

      sections.push({
        reportId: report.id,
        reportName: report.name,
        reportDate: report.reportDate,
        title: heading.title,
        level: heading.level,
        score: scoreSection(candidate, report.id, report.name, heading.title),
        content,
      });
    }
  }

  const deduped = [];
  const seen = new Set();

  for (const section of sections.sort((a, b) => b.score - a.score)) {
    const key = `${section.reportId}:${normalize(section.title)}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    deduped.push(section);
  }

  return deduped;
}

function parseSegments(section) {
  const headings = parseHeadings(section.content);
  const segments = [];

  for (const heading of headings) {
    const nextSameOrHigher = headings.find(
      (item) => item.start > heading.start && item.level <= heading.level
    );
    const end = nextSameOrHigher?.start ?? section.content.length;
    const body = section.content.slice(heading.bodyStart, end).trim();

    if (!body) {
      continue;
    }

    segments.push({
      ...section,
      title: heading.title,
      content: body,
    });
  }

  if (segments.length === 0) {
    segments.push(section);
  }

  const expandedSegments = [];
  for (const segment of segments) {
    const labeledSegments = parseInlineLabelSegments(segment);
    if (labeledSegments.length > 0) {
      expandedSegments.push(...labeledSegments);
    } else {
      expandedSegments.push(segment);
    }
  }

  return expandedSegments;
}

function parseInlineLabelSegments(section) {
  const lines = section.content.split("\n");
  const segments = [];
  let current = null;

  function pushCurrent() {
    if (!current) {
      return;
    }

    const content = current.lines.join("\n").trim();
    if (!content) {
      current = null;
      return;
    }

    segments.push({
      ...section,
      title: current.title,
      content,
    });
    current = null;
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const labelMatch = line.match(/^\s*\*\*([^*\n]+)\*\*:?\s*(.*)\s*$/);

    if (labelMatch) {
      pushCurrent();
      current = {
        title: labelMatch[1].trim(),
        lines: [],
      };

      if (labelMatch[2].trim()) {
        current.lines.push(labelMatch[2].trim());
      }
      continue;
    }

    if (current) {
      current.lines.push(rawLine);
    }
  }

  pushCurrent();
  return segments;
}

function extractFieldMap(text) {
  const values = new Map();

  const linePatterns = [
    /^\s*[-*]\s+\*\*([^*]+)\*\*:\s*(.+)\s*$/gm,
    /^\s*\*\*([^*]+)\*\*:\s*(.+)\s*$/gm,
  ];

  for (const pattern of linePatterns) {
    for (const match of text.matchAll(pattern)) {
      addFieldValue(values, match[1], match[2]);
    }
  }

  for (const line of text.split("\n")) {
    if (!line.trim().startsWith("|")) {
      continue;
    }

    const cells = line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => stripInlineMarkdown(cell.trim()));

    if (
      cells.length >= 2 &&
      cells[0] &&
      cells[1] &&
      !/^[-:]+$/.test(cells[0]) &&
      !/^[-:]+$/.test(cells[1]) &&
      !/field/i.test(cells[0])
    ) {
      addFieldValue(values, cells[0], cells[1]);
    }
  }

  return values;
}

function addFieldValue(map, rawKey, rawValue) {
  const key = normalize(rawKey);
  const value = stripInlineMarkdown(rawValue).replace(/\s+/g, " ").trim();

  if (!key || !value) {
    return;
  }

  if (!map.has(key)) {
    map.set(key, []);
  }

  if (!map.get(key).includes(value)) {
    map.get(key).push(value);
  }
}

function stripInlineMarkdown(value) {
  return value
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1")
    .trim();
}

function sectionToParagraphs(text, maxParagraphs = 4) {
  const lines = text.split("\n");
  const paragraphs = [];
  const buffer = [];

  function flushBuffer() {
    if (buffer.length === 0) {
      return;
    }

    const paragraph = buffer
      .join(" ")
      .replace(/\s+/g, " ")
      .replace(/\s+([.,;:!?])/g, "$1")
      .trim();

    if (paragraph) {
      paragraphs.push(ensureSentence(paragraph));
    }

    buffer.length = 0;
  }

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();

    if (!line) {
      flushBuffer();
      continue;
    }

    if (/^#{1,6}\s/.test(line) || /^---+$/.test(line)) {
      flushBuffer();
      continue;
    }

    if (line.startsWith("|")) {
      const tableLines = [line];
      while (lines[index + 1]?.trim().startsWith("|")) {
        index += 1;
        tableLines.push(lines[index].trim());
      }
      flushBuffer();
      paragraphs.push(...tableToParagraphs(tableLines));
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      flushBuffer();
      const item = stripInlineMarkdown(line.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, ""));
      if (item && !/^sources?:?$/i.test(item)) {
        paragraphs.push(ensureSentence(item));
      }
      continue;
    }

    if (/^>\s*/.test(line)) {
      flushBuffer();
      continue;
    }

    buffer.push(stripInlineMarkdown(line));
  }

  flushBuffer();

  return dedupeParagraphs(paragraphs).slice(0, maxParagraphs);
}

function tableToParagraphs(lines) {
  const rows = lines
    .map((line) =>
      line
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => stripInlineMarkdown(cell.trim()))
    )
    .filter((row) => row.some(Boolean));

  if (rows.length < 2) {
    return [];
  }

  const dataRows = rows.filter(
    (row) => !row.every((cell) => /^[-:]+$/.test(cell)) && !/field/i.test(row[0] ?? "")
  );

  if (dataRows.length === 0) {
    return [];
  }

  const header = dataRows[0];
  const bodyRows = dataRows.slice(1);

  if (header.length === 2 && /^field$/i.test(header[0])) {
    return bodyRows
      .filter((row) => row[0] && row[1])
      .map((row) => ensureSentence(`${row[0]}: ${row[1]}`));
  }

  if (header.length === 2 && bodyRows.length > 0) {
    return bodyRows
      .filter((row) => row[0] && row[1])
      .map((row) => ensureSentence(`${row[0]}: ${row[1]}`));
  }

  return bodyRows
    .filter((row) => row.filter(Boolean).length >= 2)
    .map((row) => ensureSentence(row.filter(Boolean).join(" — ")));
}

function ensureSentence(value) {
  const trimmed = value
    .replace(/^"+|"+$/g, "")
    .replace(/^\[(.+)\]$/, "$1")
    .trim();

  if (!trimmed) {
    return "";
  }

  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function dedupeParagraphs(paragraphs) {
  const result = [];
  const seen = new Set();

  for (const paragraph of paragraphs) {
    const key = normalize(paragraph);
    if (!key || seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(paragraph);
  }

  return result;
}

function titlePriority(title) {
  const normalized = normalize(title);

  if (normalized.includes("background summary")) return 100;
  if (normalized.includes("full profile")) return 95;
  if (normalized.includes("biographical summary")) return 92;
  if (normalized.includes("full biography")) return 90;
  if (normalized.includes("deep biography")) return 89;
  if (normalized.includes("biography")) return 88;
  if (normalized.includes("bio facts")) return 87;
  if (normalized.includes("verified identity")) return 86;
  if (normalized.includes("career")) return 80;
  if (normalized.includes("voting record")) return 100;
  if (normalized.includes("legislative record")) return 96;
  if (normalized.includes("political record")) return 94;
  if (normalized.includes("record votes actions")) return 93;
  if (normalized.includes("detailed record actions")) return 92;
  if (normalized.includes("policy positions")) return 92;
  if (normalized.includes("campaign positions")) return 90;
  if (normalized.includes("platform")) return 88;
  if (normalized.includes("bills sponsored")) return 86;
  if (normalized.includes("committee work")) return 84;
  if (normalized.includes("assessment")) return 82;
  if (normalized.includes("what you should know")) return 89;
  if (normalized.includes("public record findings")) return 86;
  if (normalized.includes("campaign finance deep dive")) return 92;
  if (normalized.includes("faith church denomination church url")) return 92;
  if (normalized.includes("controvers")) return 80;
  if (normalized.includes("personal information")) return 55;
  if (normalized.includes("basic profile")) return 54;
  if (normalized.includes("education")) return 48;
  if (normalized.includes("family")) return 44;
  return 0;
}

function selectSegments(segments, keywords, limit = 6) {
  const matches = segments
    .filter((segment) => keywords.some((keyword) => normalize(segment.title).includes(keyword)))
    .sort(
      (a, b) =>
        titlePriority(b.title) - titlePriority(a.title) ||
        b.score - a.score ||
        a.reportName.localeCompare(b.reportName)
    );

  return dedupeSegments(matches).slice(0, limit);
}

function dedupeSegments(segments) {
  const result = [];
  const seen = new Set();

  for (const segment of segments) {
    const key = `${segment.reportId}:${normalize(segment.title)}:${normalize(segment.content).slice(0, 160)}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(segment);
  }

  return result;
}

function buildNarrative(segments, fallback, maxParagraphs = 4) {
  const paragraphs = [];
  for (const segment of segments) {
    paragraphs.push(...sectionToParagraphs(segment.content, maxParagraphs));
    if (paragraphs.length >= maxParagraphs) {
      break;
    }
  }

  let unique = dedupeParagraphs(paragraphs).slice(0, maxParagraphs);
  if (unique.length === 1) {
    const split = splitLongParagraph(unique[0], maxParagraphs);
    if (split.length > 1) {
      unique = split;
    }
  }
  if (unique.length > 0) {
    return unique.join("\n\n");
  }

  return fallback;
}

function splitLongParagraph(paragraph, maxParagraphs) {
  const sentences = paragraph.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length < 4) {
    return [paragraph];
  }

  const chunkSize = Math.ceil(sentences.length / Math.min(maxParagraphs, 2));
  const chunks = [];

  for (let index = 0; index < sentences.length; index += chunkSize) {
    chunks.push(sentences.slice(index, index + chunkSize).join(" ").trim());
  }

  return chunks.filter(Boolean).slice(0, maxParagraphs);
}

function pickField(fieldMaps, labels) {
  for (const fieldMap of fieldMaps) {
    for (const label of labels) {
      for (const [key, values] of fieldMap.entries()) {
        if (key.includes(normalize(label)) && values[0]) {
          return values[0];
        }
      }
    }
  }

  return undefined;
}

function buildEducation(segments) {
  const educationSegments = selectSegments(segments, ["education"], 2);
  const paragraphs = educationSegments.flatMap((segment) => sectionToParagraphs(segment.content, 2));
  return paragraphs[0]?.replace(/\.$/, "");
}

function buildFamily(fieldMaps, segments) {
  const spouse = pickField(fieldMaps, ["wife", "spouse"]);
  const children = pickField(fieldMaps, ["children", "family"]);

  if (spouse && children) {
    return `${spouse}; ${children}`;
  }

  if (spouse) {
    return spouse;
  }

  if (children) {
    return children;
  }

  const familySegments = selectSegments(segments, ["family"], 1);
  return familySegments
    .flatMap((segment) => sectionToParagraphs(segment.content, 1))
    .at(0)
    ?.replace(/\.$/, "");
}

function buildFacts(candidate, segments, finance, faithNarrative) {
  const facts = [];
  const factSegments = selectSegments(segments, FACT_KEYWORDS, 8);

  for (const segment of factSegments) {
    const lines = sectionToParagraphs(segment.content, 3);
    for (const line of lines) {
      const cleaned = line.replace(/\.$/, "");
      if (cleaned.length < 30) {
        continue;
      }
      facts.push(cleaned);
    }
  }

  if (finance?.totalRaised) {
    facts.push(`Campaign finance filings reviewed for this profile show ${finance.totalRaised.toLowerCase()}.`);
  }

  if (faithNarrative) {
    const firstSentence = faithNarrative.split(/[.!?]\s/)[0]?.trim();
    if (firstSentence && firstSentence.length > 25) {
      facts.push(firstSentence.replace(/\.$/, ""));
    }
  }

  if (facts.length < 5) {
    const supplementalSegments = dedupeSegments([
      ...selectSegments(segments, RECORD_KEYWORDS, 4),
      ...selectSegments(segments, BIO_KEYWORDS, 3),
    ]);

    for (const segment of supplementalSegments) {
      const lines = sectionToParagraphs(segment.content, 3);
      for (const line of lines) {
        const cleaned = line.replace(/\.$/, "");
        if (cleaned.length < 30) {
          continue;
        }
        facts.push(cleaned);
        if (facts.length >= 8) {
          break;
        }
      }
      if (facts.length >= 8) {
        break;
      }
    }
  }

  const normalizedFacts = dedupeParagraphs(facts.map(ensureSentence))
    .slice(0, 8)
    .map((fact) => fact.replace(/\.$/, ""));

  if (normalizedFacts.length >= 5) {
    return normalizedFacts;
  }

  const overrideFacts = FACT_OVERRIDES[candidate.slug];
  if (overrideFacts) {
    return dedupeParagraphs([...normalizedFacts, ...overrideFacts.map(ensureSentence)])
      .slice(0, 8)
      .map((fact) => fact.replace(/\.$/, ""));
  }

  return normalizedFacts;
}

function extractQuotes(candidate, sections, segments) {
  const quotes = [];

  for (const segment of [...segments, ...sections]) {
    const lines = segment.content.split("\n");
    const segmentUrls = extractUrls(segment.content);
    const fallbackUrl = segmentUrls[0];

    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index].trim();

      if (line.startsWith(">")) {
        const text = stripInlineMarkdown(line.replace(/^>\s*/, "")).replace(/^"+|"+$/g, "");
        if (!text || !/[A-Za-z]/.test(text) || /^--/.test(text)) {
          continue;
        }

        let source = `${candidate.name} research file`;
        const nextLine = lines[index + 1]?.trim();
        if (nextLine?.startsWith(">") || /^--/.test(nextLine ?? "")) {
          source = stripInlineMarkdown((nextLine ?? "").replace(/^(>\s*)?--?\s*/, ""));
        }

        quotes.push({
          text,
          source,
          date: segment.reportDate,
          url: fallbackUrl,
          topic: prettifyHeading(segment.title),
        });
      }

      const bulletQuoteMatch = line.match(/^(?:[-*]|\d+\.)\s*"([^"]+)"\s*$/);
      if (bulletQuoteMatch) {
        const text = stripInlineMarkdown(bulletQuoteMatch[1]);
        if (!text || text.length < 25 || /^--/.test(text)) {
          continue;
        }

        let source = `${candidate.name} research file`;
        const nextLine = lines[index + 1]?.trim();
        if (nextLine && (/^--/.test(nextLine) || /^source:/i.test(nextLine))) {
          source = stripInlineMarkdown(nextLine.replace(/^(?:--\s*|source:\s*)/i, ""));
        }

        quotes.push({
          text,
          source,
          date: segment.reportDate,
          url: fallbackUrl,
          topic: prettifyHeading(segment.title),
        });
      }
    }

    for (const match of segment.content.matchAll(/\*\*Key Quote\*\*:?\s*"?([^"\n]+)"?/gi)) {
      const text = stripInlineMarkdown(match[1]);
      if (!text || /^--/.test(text)) {
        continue;
      }

      quotes.push({
        text,
        source: `${candidate.name} research file`,
        date: segment.reportDate,
        url: fallbackUrl,
        topic: prettifyHeading(segment.title),
      });
    }

    for (const match of segment.content.matchAll(/"([^"\n]{25,})"/g)) {
      const text = stripInlineMarkdown(match[1]).trim();
      if (!text || /^--/.test(text)) {
        continue;
      }

      quotes.push({
        text,
        source: `${candidate.name} research file`,
        date: segment.reportDate,
        url: fallbackUrl,
        topic: prettifyHeading(segment.title),
      });
    }
  }

  const unique = [];
  const seen = new Set();
  for (const quote of quotes) {
    const key = normalize(quote.text);
    if (!key || seen.has(key)) {
      continue;
    }
    seen.add(key);
    unique.push(quote);
  }

  return unique.slice(0, 6);
}

function prettifyHeading(title) {
  return title
    .replace(/^\d+\.\s*/, "")
    .replace(/\{#[^}]+\}/g, "")
    .replace(/\s*\([^)]*\)\s*$/, "")
    .trim();
}

function buildCampaignFinance(candidate, segments) {
  const financeSegments = selectSegments(segments, FINANCE_KEYWORDS, 6);

  if (financeSegments.length === 0) {
    return {
      totalRaised: "no detailed total was published in the report materials reviewed",
      narrative:
        `The report materials reviewed for ${candidate.name} did not include a full donor-by-donor breakdown. We still linked every finance source we found below so readers can inspect the filings directly.`,
      donors: [{ name: "Detailed donor list", amount: "Not disclosed in the report materials reviewed" }],
      undisclosed:
        "This profile uses the campaign-finance sources available in the dossier set. Some filings may require direct review at FEC, OpenSecrets, or Kansas ethics records for line-item detail.",
      reportingPeriod: "2026 cycle",
      source: "Report dossiers and linked finance sources",
    };
  }

  const narrative = buildNarrative(
    financeSegments,
    `Campaign finance reporting for ${candidate.name} is documented in the source links below.`,
    2
  );

  let totalRaised =
    pickField(financeSegments.map((segment) => extractFieldMap(segment.content)), ["total raised"]) ??
    findMoneyLine(financeSegments, /total raised|raised/i) ??
    "finance totals were discussed in the report materials reviewed";

  if (!/^[$~0-9]/.test(totalRaised) && !/finance totals/i.test(totalRaised)) {
    totalRaised = totalRaised.replace(/^Total raised:\s*/i, "");
  }

  const donors = [];
  const seen = new Set();

  for (const segment of financeSegments) {
    for (const line of segment.content.split("\n")) {
      const cleaned = stripInlineMarkdown(line.trim());
      if (!cleaned || /^(sources?|assessment)$/i.test(cleaned)) {
        continue;
      }

      if (cleaned.startsWith("|")) {
        const cells = cleaned
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean);
        const amount = cells.find((cell) => /\$[\d,.]+/.test(cell));
        const donorName = cells.find(
          (cell) =>
            cell !== amount &&
            !/^(type|source|sector|industry|category|amount|notes?)$/i.test(cell)
        );

        if (amount && donorName) {
          const key = `${donorName}:${amount}`;
          if (!seen.has(key)) {
            seen.add(key);
            donors.push({ name: donorName, amount });
          }
        }

        continue;
      }

      const moneyMatch = cleaned.match(/(\$[\d,.]+(?:\s*(?:million|billion|m|k))?)/i);
      if (!moneyMatch) {
        continue;
      }

      if (/cash on hand|total raised|self-loan|loan|spent|reporting period|candidate id|committee|check fec|full financial data/i.test(cleaned)) {
        continue;
      }

      const amount = moneyMatch[1];
      const name = cleaned
        .replace(/^[-*]\s*/, "")
        .replace(/\*\*/g, "")
        .replace(amount, "")
        .replace(/[:—-]\s*$/, "")
        .replace(/\s+/g, " ")
        .trim();

      const donorName = name || "Reported finance figure";
      const key = `${donorName}:${amount}`;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      donors.push({ name: donorName, amount });
    }
  }

  if (donors.length === 0) {
    donors.push({ name: "Detailed donor list", amount: "Not broken out in the report materials" });
  }

  const undisclosed =
    /not identified|not disclosed|gap|require|check/i.test(narrative) || donors[0].amount.includes("Not")
      ? "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record."
      : undefined;

  return {
    totalRaised,
    narrative,
    donors,
    undisclosed,
    reportingPeriod: financeSegments[0]?.reportDate?.slice(0, 4) === "2026" ? "2026 cycle" : "recent reporting period",
    source: "Report dossiers and linked filing sources",
  };
}

function findMoneyLine(segments, pattern) {
  for (const segment of segments) {
    for (const line of segment.content.split("\n")) {
      if (!pattern.test(line)) {
        continue;
      }
      const cleaned = stripInlineMarkdown(line.replace(/^[-*]\s*/, "").trim());
      if (cleaned) {
        return cleaned;
      }
    }
  }
  return undefined;
}

function buildFaith(candidate, sections, segments, sources) {
  const faithSections = sections.filter((section) =>
    /faith-church-investigation/i.test(section.reportName)
  );
  const faithSegments = [
    ...faithSections.flatMap((section) => parseSegments(section)),
    ...selectSegments(segments, FAITH_KEYWORDS, 4),
  ];

  const fieldMaps = faithSegments.map((segment) => extractFieldMap(segment.content));
  const churchName = sanitizeChurchName(
    pickField(fieldMaps, ["church"]) ?? inferChurchName(faithSegments)
  );
  const denomination = sanitizeChurchValue(pickField(fieldMaps, ["denomination"]));
  const churchUrl = inferChurchUrl(faithSegments) ?? findChurchUrl(sources, churchName);
  const noChurchNarrative = extractNoChurchNarrative(candidate, faithSegments);
  const details = dedupeParagraphs(
    faithSegments.flatMap((segment) => [
      ...extractLabeledParagraphs(segment.content, "Evidence"),
      ...extractLabeledParagraphs(segment.content, "Assessment"),
      ...extractLabeledParagraphs(segment.content, "Faith Statements"),
    ])
  )
    .slice(0, 3)
    .join("\n\n");

  let narrative =
    details ||
    buildNarrative(
      faithSegments,
      `Public faith material reviewed for ${candidate.name} did not yield a detailed church profile.`,
      2
    );
  if (!faithSegments.length) {
    narrative = `No public church affiliation was identified in the report materials reviewed for ${candidate.name}.`;
  } else if (!churchName && noChurchNarrative) {
    narrative = noChurchNarrative;
  } else if (!churchName && (/denomination:\s*unknown/i.test(narrative) || narrative.length < 80)) {
    narrative = `No public church affiliation was identified in the report materials reviewed for ${candidate.name}.`;
  }

  const church =
    churchName
      ? {
          name: churchName,
          denomination,
          url: churchUrl,
          details: (details || narrative).replace(/\n\n/g, " "),
        }
      : undefined;

  return { narrative, church };
}

function extractNoChurchNarrative(candidate, segments) {
  const patterns = [
    /no verified public church affiliation/i,
    /no public church affiliation/i,
    /did not verify a public church affiliation/i,
    /no church affiliation was identified/i,
    /no verified congregation/i,
  ];

  for (const segment of segments) {
    const paragraphs = sectionToParagraphs(segment.content, 3);
    const matches = paragraphs.filter((paragraph) => patterns.some((pattern) => pattern.test(paragraph)));
    if (matches.length > 0) {
      return matches.slice(0, 2).join("\n\n");
    }
  }

  return `No public church affiliation was identified in the report materials reviewed for ${candidate.name}.`;
}

function sanitizeChurchName(value) {
  return sanitizeChurchValue(value, true);
}

function sanitizeChurchValue(value, allowChurchName = false) {
  if (!value) {
    return undefined;
  }

  const cleaned = stripInlineMarkdown(value).replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return undefined;
  }

  if (
    /^(unknown|not identified|not publicly identified|not found|none|n\/a)$/i.test(cleaned) ||
    /\bnot found in public record\b/i.test(cleaned) ||
    /\bnot identified in any public source\b/i.test(cleaned) ||
    /\bno public record\b/i.test(cleaned) ||
    /no verified public church affiliation/i.test(cleaned) ||
    /no public church affiliation/i.test(cleaned) ||
    /specific church not identified/i.test(cleaned)
  ) {
    return undefined;
  }

  if (!allowChurchName && /^denomination:\s*unknown$/i.test(cleaned)) {
    return undefined;
  }

  return cleaned;
}

function inferChurchName(segments) {
  const patterns = [
    /\bmember of ([A-Z][A-Za-z'&.\- ]+(?:Church|Parish|Cathedral|Fellowship|Ministr(?:y|ies)))\b/,
    /\battends? ([A-Z][A-Za-z'&.\- ]+(?:Church|Parish|Cathedral|Fellowship|Ministr(?:y|ies)))\b/,
    /\bbelongs to ([A-Z][A-Za-z'&.\- ]+(?:Church|Parish|Cathedral|Fellowship|Ministr(?:y|ies)))\b/,
  ];

  for (const segment of segments) {
    for (const pattern of patterns) {
      const match = segment.content.match(pattern);
      if (match?.[1]) {
        return match[1].trim();
      }
    }
  }

  return undefined;
}

function inferChurchUrl(segments) {
  for (const segment of segments) {
    const match = segment.content.match(/church url:\s*(https?:\/\/[^\s)]+)/i);
    if (match?.[1]) {
      return match[1].replace(/[),."']+$/, "");
    }
  }

  return undefined;
}

function findChurchUrl(sources, churchName) {
  if (!churchName) {
    return undefined;
  }

  const normalizedChurch = normalize(churchName);

  for (const source of sources) {
    if (normalize(source.title).includes(normalizedChurch)) {
      return source.url;
    }
  }

  return sources.find((source) => /church|parish|cathedral|ministry|fellowship/i.test(source.url))?.url;
}

function buildSources(sections) {
  const sources = [];
  const seen = new Set();

  for (const section of sections) {
    const linked = [...section.content.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)];
    for (const match of linked) {
      addSource(sources, seen, {
        title: stripInlineMarkdown(match[1]),
        url: match[2],
        publication: publicationFromUrl(match[2]),
        date: section.reportDate,
      });
    }

    const urls = [...section.content.matchAll(/https?:\/\/[^\s)\]">]+/g)];
    for (const match of urls) {
      const url = match[0].replace(/[),."']+$/, "");
      addSource(sources, seen, {
        title: titleFromDomain(new URL(url).hostname),
        url,
        publication: publicationFromUrl(url),
        date: section.reportDate,
      });
    }
  }

  return sources;
}

function extractUrls(text) {
  return [...text.matchAll(/https?:\/\/[^\s)\]">]+/g)].map((match) =>
    match[0].replace(/[),."']+$/, "")
  );
}

function addSource(sources, seen, source) {
  if (!source.url) {
    return;
  }

  const key = source.url;
  if (seen.has(key)) {
    return;
  }

  seen.add(key);
  sources.push(source);
}

function publicationFromUrl(url) {
  try {
    return titleFromDomain(new URL(url).hostname);
  } catch {
    return "Source";
  }
}

function extractTraceyBlock() {
  const existing = fs.readFileSync(candidatesFile, "utf8");
  const match = existing.match(/export const TRACEY_MANN_FULL: CandidateFull = \{[\s\S]*?\n\};/);
  if (!match) {
    throw new Error("Could not preserve existing TRACEY_MANN_FULL block.");
  }
  return match[0];
}

function extractLabeledParagraphs(text, label) {
  const regex = new RegExp(
    String.raw`\*\*${label}\*\*:?\s*([\s\S]*?)(?=\n\s*\*\*[A-Z][^*]+\*\*:|\n#{1,6}\s|$)`,
    "i"
  );
  const match = text.match(regex);
  if (!match) {
    return [];
  }
  return sectionToParagraphs(match[1], 3);
}

function buildCandidate(candidate, reports) {
  if (candidate.slug === "tracey-mann") {
    return null;
  }

  const sections = captureCandidateSections(candidate, reports);
  const segments = dedupeSegments(sections.flatMap((section) => parseSegments(section))).sort(
    (a, b) => b.score - a.score
  );
  const fieldMaps = segments.map((segment) => extractFieldMap(segment.content));
  const sources = buildSources(sections);
  const faith = buildFaith(candidate, sections, segments, sources);
  const finance = buildCampaignFinance(candidate, segments);

  const whoTheyAre = buildNarrative(
    selectSegments(segments, BIO_KEYWORDS, 6),
    `Research files for ${candidate.name} were reviewed in full for this profile, but the biography sections were thin. The linked sources below carry the original reporting and document trail.`,
    4
  );

  const theirRecord = buildNarrative(
    selectSegments(segments, RECORD_KEYWORDS, 6),
    `The report files for ${candidate.name} do not include a long voting-record narrative, but they do include office history, platform material, and source links for further review.`,
    4
  );

  const quotes = extractQuotes(candidate, sections, segments);
  const normalizedQuotes = quotes.length >= 3 ? quotes : QUOTE_OVERRIDES[candidate.slug] ?? quotes;

  const built = {
    slug: candidate.slug,
    name: candidate.name,
    party: candidate.party,
    position: candidate.position,
    electionSlug: candidate.electionSlug,
    incumbent: candidate.incumbent,
    occupation:
      sanitizeOccupation(pickField(fieldMaps, ["occupation", "current office"]), candidate.occupation),
    born: pickField(fieldMaps, FIELD_LABELS.born),
    hometown: pickField(fieldMaps, FIELD_LABELS.hometown),
    religion:
      pickField(fieldMaps, FIELD_LABELS.religion) ??
      faith.church?.denomination ??
      undefined,
    education: buildEducation(segments),
    family: buildFamily(fieldMaps, segments),
    district: pickField(fieldMaps, FIELD_LABELS.district),
    campaignWebsite: firstCampaignWebsite(candidate, fieldMaps, sources),
    whoTheyAre,
    theirRecord,
    whatYouShouldKnow: buildFacts(candidate, segments, finance, faith.narrative),
    whereTheyWorship: faith.narrative,
    church: faith.church,
    quotes: normalizedQuotes,
    campaignFinance: finance,
    sources,
  };

  Object.keys(built).forEach((key) => {
    if (built[key] === undefined) {
      delete built[key];
    }
  });

  return built;
}

function firstCampaignWebsite(candidate, fieldMaps, sources) {
  const override = CAMPAIGN_WEBSITE_OVERRIDES[candidate.slug];
  if (override) {
    return override;
  }

  const explicit = pickField(fieldMaps, FIELD_LABELS.campaignWebsite);
  const explicitUrl = explicit ? extractFirstUrl(explicit) : undefined;
  if (explicitUrl && scoreCampaignWebsiteSource(candidate, { title: "explicit", url: explicitUrl }) >= 30) {
    return explicitUrl;
  }

  const ranked = sources
    .map((source) => ({
      source,
      score: scoreCampaignWebsiteSource(candidate, source),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.source.url;
}

function extractFirstUrl(value) {
  const match = value.match(/https?:\/\/[^\s)]+/);
  if (match?.[0]) {
    return match[0].replace(/[),."']+$/, "");
  }

  const bareDomainMatch = value.match(/\b(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s]*)?\b/i);
  if (!bareDomainMatch?.[0]) {
    return undefined;
  }

  return `https://${bareDomainMatch[0].replace(/^https?:\/\//, "").replace(/[),."']+$/, "")}`;
}

function scoreCampaignWebsiteSource(candidate, source) {
  const domain = new URL(source.url).hostname.replace(/^www\./, "");
  if (
    /facebook|twitter|x\.com|instagram|linkedin|wikipedia|ballotpedia|kansasreflector|hayspost|kcur|wibw|yahoo|opensecrets|fec\.gov|youtube|youtu\.be|tiktok|reddit|kake|ksn|kwch|kansas\.com|cjonline|washingtonexaminer|insurancenewsnet|greatbendpost|emporiagazette|kmuw|hppr|thebeaconnews|flatlandkc|newsbreak|votesmart|voterly|zoominfo|whatreligionisinfo|opencampaign|immirail|jcpost|1350kman|strongtowns|wltreport|tigermedianet|hayshighguidon|guidon|hdnews|kspress|ileeta|citizenjournal|about\.me/i.test(
      domain
    )
  ) {
    return -1;
  }

  const haystack = `${source.title} ${source.url}`.toLowerCase();
  let score = 0;
  const candidateTokens = candidate.name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 4);

  if (
    /campaign website|official website|campaign site|donate|meet|about|issues|platform|for kansas|forkansas|for governor|forgovernor|for senate|forsenate|for congress|forcongress|for secretary|forsecretary|for attorney general|forag|for insurance commissioner|forinsurance|elect|vote/i.test(
      haystack
    )
  ) {
    score += 40;
  }

  if (candidateTokens.some((token) => haystack.includes(token))) {
    score += 15;
  }

  if (/\.house\.gov$|\.senate\.gov$/.test(domain)) {
    score += 25;
  }

  if (/church|parish|diocese|catholic|fellowship|ministry|faith/i.test(haystack)) {
    score -= 30;
  }

  if (/canva\.site$/.test(domain)) {
    score += 15;
  }

  if (source.title.toLowerCase().includes("campaign")) {
    score += 15;
  }

  if (/\.(com|org|net|us|gov)$/.test(domain) && !domain.includes("archive")) {
    score += 5;
  }

  return score;
}

function sanitizeOccupation(value, fallback) {
  if (!value) {
    return fallback;
  }

  if (
    value.length > 90 ||
    /https?:\/\//i.test(value) ||
    /"[^"]+"/.test(value) ||
    /\b(article|story|post|page|says|news|coverage)\b/i.test(value)
  ) {
    return fallback;
  }

  return value;
}

function buildOutput(traceyBlock, generatedCandidates) {
  return `export type PartyKey = "R" | "D" | "I" | "NP";

export interface Donor {
  name: string;
  amount: string;
}

export interface CampaignFinance {
  totalRaised: string;
  narrative: string;
  donors: Donor[];
  undisclosed?: string;
  reportingPeriod: string;
  source: string;
}

export interface ChurchInfo {
  name: string;
  denomination?: string;
  url?: string;
  details?: string;
}

export interface Source {
  title: string;
  url: string;
  publication: string;
  date: string;
}

export interface Quote {
  text: string;
  source: string;
  date?: string;
  url?: string;
  topic?: string;
}

export interface CandidateCard {
  slug: string;
  name: string;
  party: PartyKey;
  position: string;
  electionSlug: string;
  incumbent: boolean;
  occupation: string;
}

export interface CandidateFull extends CandidateCard {
  born?: string;
  hometown?: string;
  religion?: string;
  education?: string;
  family?: string;
  district?: string;
  margin2024?: string;
  campaignWebsite?: string;
  whoTheyAre: string;
  theirRecord: string;
  whatYouShouldKnow: string[];
  whereTheyWorship: string;
  church?: ChurchInfo;
  quotes: Quote[];
  campaignFinance?: CampaignFinance;
  sources: Source[];
}

${traceyBlock}

export const FULL_CANDIDATES: CandidateFull[] = [
  TRACEY_MANN_FULL,
  ...(${JSON.stringify(generatedCandidates, null, 2)} as CandidateFull[]),
];

export const CANDIDATE_CARDS: CandidateCard[] = FULL_CANDIDATES.map(
  ({ slug, name, party, position, electionSlug, incumbent, occupation }) => ({
    slug,
    name,
    party,
    position,
    electionSlug,
    incumbent,
    occupation,
  })
);

export function getCandidateCardBySlug(
  slug: string
): CandidateCard | undefined {
  return CANDIDATE_CARDS.find((candidate) => candidate.slug === slug);
}

export function getAllCandidateSlugs(): string[] {
  return FULL_CANDIDATES.map((candidate) => candidate.slug);
}

export function getFullCandidateBySlug(
  slug: string
): CandidateFull | undefined {
  return FULL_CANDIDATES.find((candidate) => candidate.slug === slug);
}
`;
}

function main() {
  const reports = [
    ...fs
      .readdirSync(reportsDir)
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => readReport(path.join(reportsDir, fileName))),
    ...collectCandidateMemoryFiles().map((filePath) => readReport(filePath)),
    readReport(traceyDossierFile),
  ];

  const generated = CANDIDATES.map((candidate) => buildCandidate(candidate, reports)).filter(Boolean);
  const traceyBlock = extractTraceyBlock();
  const output = buildOutput(traceyBlock, generated);
  fs.writeFileSync(candidatesFile, output);
  console.log(`Wrote ${generated.length + 1} candidate profiles to ${candidatesFile}`);
}

main();
