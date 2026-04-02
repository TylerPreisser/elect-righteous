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
  "opposition research",
  "adverse public record",
  "verified adverse findings",
  "public criticism",
  "litigation",
  "complaints",
  "investigations",
  "ethics",
  "discipline",
  "conflicts of interest",
  "contradictions",
  "deleted content",
  "archived deleted content",
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

const OPPOSITION_KEYWORDS = [
  "opposition research",
  "adverse public record",
  "verified adverse findings",
  "public criticism",
  "litigation",
  "complaints",
  "investigations",
  "ethics",
  "discipline",
  "conflicts of interest",
  "contradictions",
  "deleted content",
  "archived deleted content",
  "controvers",
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

function donor(name, amount) {
  return { name, amount };
}

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
    "No public church affiliation is documented in cited sources",
  ],
  "chase-laporte": [
    "LaPorte is a Republican primary challenger to Roger Marshall with a much thinner campaign footprint than the incumbent",
    "He is an Army veteran who served from 2005 to 2013 and has also run for other offices, including governor and the U.S. House",
    "The public record does not show a dedicated Senate campaign website, and much of his web presence still points back to older campaigns",
    "A Kansas finance snippet tied to the research trail listed named contributors including Ty Masterson and several smaller-dollar donors",
    "No public church affiliation is documented in cited sources",
  ],
};

const FINANCE_OVERRIDES = {
  "jason-hart": {
    totalRaised: "No public FEC finance summary available online as of 2026-04-01",
    narrative:
      "Hart entered the Senate race in March 2026, and this pass did not surface an official FEC candidate-overview page or a posted 2025-2026 finance summary with receipts, spending, or cash-on-hand figures. In practical terms, that means there was still no usable public donor ledger online to reconstruct as of April 1, 2026.",
    donors: [donor("Campaign finance data", "No campaign finance data available online yet")],
    undisclosed:
      "Hart's first meaningful federal finance report may still be pending the next FEC disclosure window.",
    reportingPeriod: "through 2026-04-01",
    source: "FEC search, campaign records, and reviewed public reporting",
  },
  "patrick-schmidt": {
    totalRaised: "FEC says no 2025-2026 finance summary is available yet",
    narrative:
      "Patrick Schmidt now has an official FEC Senate candidate page and committee, PATRICK SCHMIDT FOR SENATE (C00937599). But the FEC candidate overview currently says, 'We don't have SCHMIDT, PATRICK for 2025-2026,' which is more precise than the older report-based guesswork. So the official status is: committee on file, but no processed receipts, spending, or cash-on-hand summary published yet.",
    donors: [
      donor("PATRICK SCHMIDT FOR SENATE (C00937599)", "Committee on file"),
      donor("Campaign finance data", "No campaign finance data available online yet"),
    ],
    undisclosed:
      "The FEC confirms the committee exists, but not yet a processed 2025-2026 donor ledger or summary table.",
    reportingPeriod: "through 2026-04-01",
    source: "FEC candidate overview S6KS00288 / committee C00937599",
  },
  "christy-cauble-davis": {
    totalRaised: "$80,478.96 (FEC coverage: 07/01/2025 to 12/31/2025)",
    narrative:
      "CHRISTY DAVIS FOR KANSAS 2026 (C00915934) reported $80,478.96 in receipts, $38,100.53 in disbursements, and $42,378.43 cash on hand for the coverage period from July 1, 2025 through December 31, 2025. Public reporting also focused heavily on disclosure and compliance issues, but the official FEC page shows a real reported finance operation with clear topline totals.",
    donors: [
      donor("Itemized individual contributions", "$76,528.96"),
      donor("Unitemized individual contributions", "$3,950.00"),
    ],
    undisclosed:
      "The official FEC summary totals are public, but a full donor-by-donor Schedule A is not summarized here.",
    reportingPeriod: "through 2025-12-31",
    source: "FEC candidate overview S6KS00247 / committee C00915934",
  },
  "sandy-spidel-neumann": {
    totalRaised: "$167,587.11 (FEC coverage: 10/14/2025 to 12/31/2025)",
    narrative:
      "SANDY FOR KANSAS (C00923474) reported $167,587.11 in receipts, $40,660.59 in disbursements, and $126,926.52 cash on hand for the period from October 14, 2025 through December 31, 2025. The key finance fact is the structure of the money: $100,000 came in as candidate loans, only $3,500 as direct candidate contributions, $37,150 as itemized individual contributions, and $26,937.11 as unitemized contributions.",
    donors: [
      donor("Loans made by candidate", "$100,000.00"),
      donor("Itemized individual contributions", "$37,150.00"),
      donor("Unitemized individual contributions", "$26,937.11"),
      donor("Candidate contributions", "$3,500.00"),
    ],
    undisclosed:
      "The official FEC summary shows a substantial self-loan-backed campaign, even though the full donor-by-donor transactions page is not summarized here.",
    reportingPeriod: "through 2025-12-31",
    source: "FEC candidate overview S6KS00262 / committee C00923474",
  },
  "erik-murray": {
    totalRaised: "$124,598.62 (FEC coverage: 11/23/2025 to 12/31/2025)",
    narrative:
      "ERIK MURRAY FOR KANSAS (C00929240) reported $124,598.62 in receipts, $15,625.69 in disbursements, and $108,972.93 cash on hand for the period from November 23, 2025 through December 31, 2025. The money was donor-driven rather than self-loan-driven: the FEC summary shows $119,800 in itemized individual contributions, $4,798.62 in unitemized contributions, and $0 in candidate loans.",
    donors: [
      donor("Itemized individual contributions", "$119,800.00"),
      donor("Unitemized individual contributions", "$4,798.62"),
      donor("Loans made by candidate", "$0.00"),
    ],
    undisclosed:
      "The official FEC summary totals are clear, but a full donor-by-donor transaction list is not summarized here.",
    reportingPeriod: "through 2025-12-31",
    source: "FEC candidate overview S6KS00270 / committee C00929240",
  },
  "anne-parelkar": {
    totalRaised: "$16,982.00 (FEC coverage: 03/03/2025 to 12/31/2025)",
    narrative:
      "Parelkar's official FEC candidate page provides a complete topline summary. ANNE FOR KANSAS (C00913293) reported $16,982.00 in receipts, $16,478.89 in disbursements, and just $503.11 cash on hand for the period from March 3, 2025 through December 31, 2025. The notable detail is that $4,500.00 of the total came from candidate loans, meaning the campaign was modest and partially self-financed rather than broadly donor-backed.",
    donors: [
      donor("Itemized individual contributions", "$8,876.00"),
      donor("Unitemized individual contributions", "$3,606.00"),
      donor("Loans made by candidate", "$4,500.00"),
    ],
    undisclosed:
      "The FEC summary totals and candidate-loan figure are public, but a full donor-by-donor transaction table is not summarized here.",
    reportingPeriod: "through 2025-12-31",
    source: "FEC candidate overview S6KS00239 / committee C00913293",
  },
  "michael-soetaert": {
    totalRaised: "FEC says no 2025-2026 finance summary is available yet",
    narrative:
      "The current official FEC candidate page for SOETAERT, MICHAEL says, 'We don't have SOETAERT, MICHAEL for 2025-2026.' That is the cleanest public answer right now. Soetaert does have a federal candidate page, but as of April 1, 2026 the FEC is not showing a processed receipts, spending, or cash-on-hand summary for this cycle.",
    donors: [donor("Campaign finance data", "No campaign finance data available online yet")],
    undisclosed:
      "Older federal runs exist in the record, but the current Senate-cycle summary page does not yet show 2025-2026 finance data.",
    reportingPeriod: "through 2026-04-01",
    source: "FEC candidate overview S2KS00097",
  },
  "chase-laporte": {
    totalRaised: "FEC says no 2025-2026 finance summary is available yet",
    narrative:
      "LaPorte has an official FEC Senate candidate overview page, but the page says, 'We don't have LAPORTE, CHASE for 2025-2026.' The candidacy is officially filed, but the FEC is not yet showing a processed summary of receipts, spending, or cash on hand for this cycle.",
    donors: [donor("Campaign finance data", "No campaign finance data available online yet")],
    undisclosed:
      "The candidate page exists, but the FEC has not yet published a processed 2025-2026 donor ledger or summary table.",
    reportingPeriod: "through 2026-04-01",
    source: "FEC candidate overview S6KS00254",
  },
  "colin-mcroberts": {
    totalRaised: "$24,699.29 (Jul.-Dec. 2025)",
    narrative:
      "McRoberts has the clearest federal filing record of the KS-01 Democratic challengers. COLIN FOR KANSAS (C00919860) reported $24,699.29 in receipts, $17,243.10 in disbursements, and $7,456.19 cash on hand for the period from July 1, 2025 through December 31, 2025. The receipts breakdown shows $19,130.00 in itemized individual contributions, $4,912.00 in unitemized individual contributions, and $338.00 in direct candidate contributions.",
    donors: [
      donor("Itemized individual contributions", "$19,130.00"),
      donor("Unitemized individual contributions", "$4,912.00"),
      donor("Candidate contributions", "$338.00"),
    ],
    undisclosed:
      "The committee is clearly active, but a full donor-by-donor FEC transactions table is not summarized here.",
    reportingPeriod: "Jul.-Dec. 2025",
    source: "FEC candidate overview H6KS01195 / committee C00919860",
  },
  "lauren-reinhold": {
    totalRaised: "FEC says no 2025-2026 finance summary is available yet",
    narrative:
      "Reinhold does now have an official FEC candidate page and committee, LAUREN REINHOLD FOR KANSAS (C00932855). But the FEC summary page says, 'We don't have REINHOLD, LAUREN for 2025-2026.' So the official position is no longer 'no committee filed'; it is 'committee exists, but the FEC is not yet showing processed finance data for this cycle.'",
    donors: [
      donor("LAUREN REINHOLD FOR KANSAS (C00932855)", "Committee on file"),
      donor("Campaign finance data", "No campaign finance data available online yet"),
    ],
    undisclosed:
      "The FEC confirms a committee exists, but not yet a processed donor ledger or topline receipts summary for 2025-2026.",
    reportingPeriod: "through 2026-04-01",
    source: "FEC candidate overview H6KS01203 / committee C00932855",
  },
  "craig-musser": {
    totalRaised: "FEC says no 2025-2026 finance summary is available yet",
    narrative:
      "Musser does have an official FEC House candidate page, but that page says, 'We don't have MUSSER, CRAIG A for 2025-2026.' That is the clean public status as of April 1, 2026: official candidacy page present, no processed receipts/spending/cash summary posted yet.",
    donors: [donor("Campaign finance data", "No campaign finance data available online yet")],
    undisclosed:
      "The official candidate page exists, but the FEC is not yet showing a usable finance summary or donor ledger for this cycle.",
    reportingPeriod: "through 2026-04-01",
    source: "FEC candidate overview H6KS01211",
  },
  "scott-schwab": {
    totalRaised: "$1,418,672 (2025 year-end)",
    narrative:
      "Scott Schwab raised $1,418,672 in 2025, spent $365,533, and had $1,053,139 cash on hand at year-end. Of that total, $1,045,000 came from personal loans, which means only about $374,000 was truly donor-funded. That makes him one of the most heavily self-funded candidates in the race.",
    donors: [
      donor("Scott Schwab (self-funded loans)", "$1,045,000"),
      donor("Jenni Prochnow", "$4,000"),
      donor("Frankie Giudicessi", "$4,000"),
      donor("Michael Rader", "$2,000"),
      donor("Jeanette Prenger", "$2,000"),
      donor("Julie Mirray", "$2,000"),
      donor("Kent Needham", "$500"),
      donor("Tim Garvey", "$500"),
    ],
    undisclosed:
      "Full line-item donor detail remains in the Kansas ethics filing PDF and itemized-contributions database.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing SW01SS_202601 and Kansas Reflector",
  },
  "vicki-schmidt": {
    totalRaised: "$980,372.71 (2025 year-end)",
    narrative:
      "Schmidt's 2025 filing showed $980,372.71 raised, $52,211.35 spent, and $928,161.36 cash on hand. Only about $81,500 of that total was self-funded, which is why she has been able to claim the broadest donor-funded operation in the Republican governor field. The public reporting also pegged her donor count at 800-plus, with 57% of the money coming from Kansans.",
    donors: [
      donor("Jeanette Elder", "$25"),
      donor("David Pope", "$50"),
      donor("James Daniel", "$75"),
      donor("Steven Steele", "$100"),
      donor("David Kerr", "$250"),
      donor("Lisa Stubbs", "$250"),
      donor("Robert Regnier", "$500"),
      donor("Thomas Blackburn", "$500"),
      donor("Strategic Partners International LLC", "$1,000"),
    ],
    undisclosed:
      "The filing shows a much larger donor universe than the small sample extracted here, including major out-of-state participation.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and statewide campaign-finance reporting",
  },
  "ty-masterson": {
    totalRaised: "$695,998.16 (2025 year-end)",
    narrative:
      "Masterson's year-end filing showed $695,998.16 raised, only $8,476.06 spent, and $687,522.10 cash on hand. Unlike the self-loan-heavy candidates, this was donor-funded money. The much bigger story, though, is the aligned dark-money vehicle Take Back Kansas, which reportedly had another $700,000 without public donor disclosure.",
    donors: [
      donor("David Murfm", "$4,000"),
      donor("Janet Murfm", "$4,000"),
      donor("SHAMAN BOTANICALS LLC", "$4,000"),
      donor("Rick Kloos", "$1,000"),
      donor("Pennie Kloos", "$1,000"),
      donor("Brad Starnes", "$104.10"),
    ],
    undisclosed:
      "Take Back Kansas, the aligned 501(c)(4), remains the major undisclosed-money story around Masterson.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and statewide campaign-finance reporting",
  },
  "jeff-colyer": {
    totalRaised: "$2,070,322.09 (2025 year-end)",
    narrative:
      "Colyer's year-end filing showed $2,070,322.09 raised, $185,812.31 spent, and $1,884,509.78 cash on hand, plus additional in-kind support. He personally loaned the campaign $1.05 million, but he also matched that with roughly another million dollars in donor support, giving him the strongest pure donor operation in the GOP field.",
    donors: [
      donor("Stephen Reintjes", "$516.53"),
      donor("Alan Cobb", "$104.10"),
      donor("Janie Welsh", "$1,033.06"),
      donor("Dylan Avatar Arnold", "$520.51"),
      donor("Sarah Demovish", "$516.53"),
    ],
    undisclosed:
      "The reviewed sample donors are only a slice of a very large statewide filing.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing SW01JC_202601 and campaign-finance reporting",
  },
  "ethan-corson": {
    totalRaised: "$902,641.13 (2025 year-end)",
    narrative:
      "Corson's 2025 filing showed $902,641.13 raised, $375,665.32 spent, and $526,975.81 cash on hand. Public reporting stressed that the campaign took no personal loans, drew more than 3,000 contributions, and got about 70% of those donations in amounts under $100. That makes Corson one of the clearest grassroots-funded candidates in the race.",
    donors: [
      donor("Tony Atterbury", "$4,000"),
      donor("Amy Bartak", "$250"),
      donor("Mary Becker", "$200"),
      donor("Matt Birch", "$500"),
      donor("Louis Bornman", "$100"),
      donor("William Bradley", "$500"),
      donor("Jim Breneman", "$25"),
    ],
    undisclosed:
      "The filing contains many more donors than the small extracted sample listed here.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and campaign-finance reporting",
  },
  "cindy-holscher": {
    totalRaised: "$397,952.07 (2025 year-end)",
    narrative:
      "Holscher's year-end filing showed $397,952.07 raised, $218,060.34 spent, and $179,891.73 cash on hand. She was clearly behind Corson financially, but still had a real statewide donor base and no sign of self-funding. Her numbers looked more like a conventional Democratic primary campaign than a vanity project.",
    donors: [
      donor("Thomas Adrian", "$500"),
      donor("Quinta Avance", "$50"),
      donor("Elizabeth Bishop", "$100"),
      donor("Archie Blumhorst", "$250"),
      donor("Rick Blumhorst", "$100"),
      donor("Rick Blumhorst", "$1,000"),
    ],
    undisclosed:
      "The extracted donor sample is only a partial view of the full filing.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and campaign-finance reporting",
  },
  "marty-tuley": {
    totalRaised: "$2,600.00 (2025 year-end)",
    narrative:
      "Tuley's filing was tiny by statewide standards: $2,600.00 raised, $193.89 spent, and $2,406.11 cash on hand. That matches the rest of the public record, which portrays him as a long-shot outsider campaign with a small early donor circle rather than a developed statewide finance machine.",
    donors: [
      donor("Todd Decuir", "$500"),
      donor("George Grieb", "$500"),
      donor("Ernesto Hodison", "$100"),
      donor("William England", "$50"),
    ],
    undisclosed:
      "The raw-dump pass did not fully reconstruct the complete itemized schedule.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and public finance reporting",
  },
  "charlotte-ohara": {
    totalRaised: "$589,550.97 (2025 year-end)",
    narrative:
      "O'Hara's filing showed $589,550.97 raised, $78,652.57 spent, and $510,898.40 cash on hand. A large piece of that came from O'Hara herself, including a $193,000 self-funding entry, which makes her campaign far more financially serious than her long-shot status might otherwise suggest.",
    donors: [
      donor("Charlotte O'Hara (self-funding entry)", "$193,000"),
      donor("Victor Wirtz", "$104.10"),
      donor("Ralph Yaple", "$100"),
      donor("Sandra Nider", "$35"),
      donor("Nancy Czinege", "$104.10"),
      donor("Pam and Robb Ferguson", "$260.25"),
    ],
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and public finance reporting",
  },
  "stacy-rogers": {
    totalRaised: "$24,862.65 (2025 year-end)",
    narrative:
      "Rogers' filing showed $24,862.65 in receipts, $11,072.75 in expenditures, and $14,470.23 cash on hand, plus $1,200 in in-kind support. That is enough to prove a real campaign committee, but it remains a minor operation in a very crowded governor primary.",
    donors: [
      donor("James Korf Jr.", "$200.00"),
      donor("Shae's Point of View (in-kind video services)", "$1,200.00"),
      donor("Stacy Rogers loan to campaign", "$2,397.79"),
      donor("Itemized receipts", "$20,989.36"),
      donor("Unitemized contributions", "$3,873.29"),
    ],
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and public finance reporting",
  },
  "joy-eakins": {
    totalRaised: "$1,142,759.55 (2025 year-end)",
    narrative:
      "Eakins reported $1,142,759.55 in contributions and other receipts, $116,268.91 in expenditures, and $1,026,490.64 cash on hand. The central fact is the $1,000,000 personal loan, which means this was overwhelmingly a self-funded campaign with only about $140,000 in outside support.",
    donors: [
      donor("Joy Eakins (self-loan)", "$1,000,000.00"),
      donor("Ryan Baty", "$1,041.02"),
      donor("Debby Ponton", "$364.36"),
      donor("Sandy Pickert", "$250.00"),
      donor("Walter Rosenbaum", "$260.25"),
      donor("Fred Postlewait", "$100.00"),
    ],
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and public finance reporting",
  },
  "philip-sarnecki": {
    totalRaised: "$2,528,715.73 (direct committee receipts at 2025 year-end)",
    narrative:
      "Sarnecki's year-end committee filing showed $2,528,715.73 in contributions and other receipts, $209,667.81 spent, and $2,319,047.92 cash on hand, plus more than $215,000 in in-kind support. The defining feature is a $2,000,000 self-loan, which means the campaign was still dominated by Sarnecki's personal money even before counting the outside organizations aligned with him.",
    donors: [
      donor("Philip Sarnecki (self-loan)", "$2,000,000.00"),
      donor("John Goodwin", "$2,500.00"),
      donor("Ronda Anderson", "$260.25"),
      donor("Jim Burt", "$250.00"),
      donor("Eben Fowler", "$100.00"),
      donor("Lenin Guerra", "$100.00"),
    ],
    undisclosed:
      "Separate supportive organizations were repeatedly referenced in reporting, but not fully identified donor by donor.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and statewide campaign-finance reporting",
  },
  "kris-kobach": {
    totalRaised: "$337,330.24 (2025 year-end)",
    narrative:
      "Kobach's 2025 filing showed $337,330.24 raised, $52,558.52 spent, and $502,626 cash on hand. He did not need self-funding to post a strong cash position, and the early itemized sample suggested a donor base built more on many smaller Kansas contributions than on one or two giant checks.",
    donors: [
      donor("Kevin Arburn", "$10.41"),
      donor("Gary Grimes", "$25.00"),
      donor("Julia Kirk", "$26.03"),
      donor("Karen Piper", "$26.03"),
      donor("Barbara Anderson", "$26.03"),
      donor("John Rysavy", "$29.80"),
      donor("Timothy Voth", "$50.00"),
      donor("David Powell", "$50.00"),
      donor("Ann Peterson", "$100.00"),
    ],
    undisclosed:
      "The extracted sample covers only the first visible slice of a much longer Schedule A.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and public finance reporting",
  },
  "chris-mann": {
    totalRaised: "$536,639.57 (2025 year-end)",
    narrative:
      "Mann's filing showed $536,639.57 raised, $280,041.49 spent, and $257,257.08 cash on hand, plus $7,655.77 in in-kind support and no personal loans on the public summary page. The filing shows a donor-backed challenger who outraised the incumbent during that reporting period.",
    donors: [
      donor("James Bartimus", "$1,000.00"),
      donor("Andrea Himoff", "$1,000.00"),
      donor("Scott Teeter", "$1,000.00"),
      donor("Thomas Adrian", "$500.00"),
      donor("Karen Mann", "$500.00"),
      donor("Linda Salem", "$500.00"),
      donor("Paige Ballard", "$200.00"),
      donor("Louis Bornman", "$50.00"),
    ],
    undisclosed:
      "The filing includes many more contributors than the small extracted sample listed here.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and public finance reporting",
  },
  "pat-proctor": {
    totalRaised: "$312,046.74 (2025 year-end)",
    narrative:
      "Proctor's filing showed $312,046.74 raised in 2025 and about $209,383.28 cash on hand entering 2026. Statewide reporting also indicated roughly $134,000 of that total came from personal loans, which means the donor-funded portion was much smaller than the topline figure first suggests.",
    donors: [
      donor("John Lahnes", "$250.00"),
      donor("Dennis White", "$250.00"),
      donor("John Jacob Kotzman", "$100.00"),
      donor("Mike Lehnherr", "$100.00"),
      donor("Chad Stafford", "$100.00"),
      donor("John Donovan", "$100.00"),
      donor("George Pogge", "$50.00"),
      donor("Michelle Cebe", "$50.00"),
    ],
    undisclosed:
      "The full Schedule A contains many more donors than the sample extracted here.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing SW04PP_202601 and statewide reporting",
  },
  "ken-rahjes": {
    totalRaised: "$24,070.30 (2025 year-end)",
    narrative:
      "Rahjes reported $24,070.30 raised, only $1,442.98 spent, and $22,627.32 cash on hand. He was financially dwarfed by Pat Proctor, which fits the broader story of Rahjes as the traditional but under-resourced Republican in the secretary of state primary.",
    donors: [
      donor("Scott Foote", "$3,300"),
      donor("Kansas Sorghum Producers Association", "$2,000"),
      donor("Michael McClellan", "$1,000"),
      donor("Clay Scott", "$500"),
      donor("Kent Glasscock", "$100"),
      donor("Johnson Farms", "$100"),
      donor("Kent Winter", "$100"),
    ],
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing and public finance reporting",
  },
  "jennifer-day": {
    totalRaised: "$84,304.87 (2025 year-end)",
    narrative:
      "Day's official Kansas statewide filing showed $84,304.87 raised, $69,564.35 spent, and $14,740.52 cash on hand for the period from January 1, 2025 through December 31, 2025. The donor mix in the filing is exactly what her public brand suggests: mostly small and medium individual contributions from northeast Kansas rather than a PAC-driven statewide machine.",
    donors: [
      donor("James D Childers", "$25"),
      donor("Louis Bornman", "$100"),
      donor("Michael Tourtellot", "$100"),
      donor("Dan Wancura", "$50"),
      donor("David Lambertson", "$250"),
      donor("Leslie Mark", "$25"),
      donor("Diana Stewart", "$10"),
      donor("Dan Osman", "$250"),
    ],
    undisclosed:
      "The filing contained more itemized contributors than the short extracted sample shown here.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing SW04JD_202601",
  },
  "sam-lane": {
    totalRaised: "$590.91 (early public filing)",
    narrative:
      "Lane's filing was tiny compared with the rest of the statewide field: $590.91 raised, including $580.27 from Lane himself. That lines up with the larger public picture of a personal, lightly resourced outsider campaign without a serious donor network or PAC structure behind it.",
    donors: [donor("Samuel Lane", "$580.27")],
    undisclosed:
      "The reviewed record did not show a broader institutional donor base beyond Lane's own contribution and a very small handful of minor activity.",
    reportingPeriod: "most recent public filing reviewed",
    source: "Reviewed public finance summary",
  },
  "daniel-hawkins": {
    totalRaised: "$417,305.07 (2025 year-end)",
    narrative:
      "Hawkins' filing showed $417,305.07 raised, $33,295.22 spent, and $384,009.85 cash on hand, including a $10,000 personal loan. The money proves this is a real statewide campaign, but the more important finance story is the conflict question: Hawkins is an active insurance agent receiving commissions from companies he would regulate as insurance commissioner.",
    donors: [
      donor("Kenny Doonan", "$2,000.00"),
      donor("Chad Stafford", "$1,000.00"),
      donor("Visa", "$1,000.00"),
      donor("Gary Obomy", "$1,041.02"),
      donor("Pat Do", "$350.00"),
      donor("Bill Pickert", "$104.10"),
      donor("Kyle Hoffman", "$100.00"),
      donor("C. Douglas Blex", "$52.05"),
    ],
    undisclosed:
      "The larger filing should be read alongside Hawkins' statements of substantial interest because of the insurance-industry conflict question.",
    reportingPeriod: "2025 year-end (2026 election cycle)",
    source: "Kansas ethics filing SW03DH_202601 and public finance reporting",
  },
  "dinah-sykes": {
    totalRaised: "No Kansas statewide finance report listed online as of 2026-04-01",
    narrative:
      "The official Kansas statewide filings index lists Dinah Sykes with a treasurer appointment form, but the report columns for 2024, 2025, and 2026 are all N/A. That means no statewide receipts-and-expenditures report was posted online for her insurance-commissioner campaign. The clearest public finance statement is her own pledge not to take money from the insurance industry.",
    donors: [
      donor("Kansas statewide filing report", "No report listed online"),
      donor("Insurance-industry contributions", "Pledged to decline"),
    ],
    undisclosed:
      "The treasurer appointment is public, but a statewide donor ledger/report was not listed on the Kansas filing index as of April 1, 2026.",
    reportingPeriod: "through 2026-04-01",
    source: "Kansas statewide filings index / campaign statements / Kansas Reflector",
  },
  "barb-wasinger": {
    totalRaised: "$11,134.20 (House filing coverage: 01/01/2025 to 12/31/2025)",
    narrative:
      "Wasinger's 2025 year-end House report showed $11,134.20 in contributions and other receipts, $31,179.60 in expenditures, and $17,133.63 cash on hand after starting the period with $37,179.03 already in the account. The donor mix in the filing is notable for a rural Republican incumbent: DoorDash, elevator-union money, security and healthcare interests, banking and contractor PACs, plus Wasinger's own contribution all appear in the posted Schedule A.",
    donors: [
      donor("DoorDash, Inc.", "$500.00"),
      donor("International Union of Elevator Constructors Political Account", "$250.00"),
      donor("Amarok Ultimate Perimeter Security", "$250.00"),
      donor("Operating Engineers Local 101", "$500.00"),
      donor("POM of Kansas LLC", "$500.00"),
      donor("Kansas Livestock", "$500.00"),
      donor("Kansas Bankers Association PAC", "$500.00"),
      donor("Barbara Wasinger", "$2,792.50"),
    ],
    undisclosed:
      "The posted House PDF contains additional donors beyond the sample listed here.",
    reportingPeriod: "2025 year-end (2026 House cycle)",
    source: "Kansas House ethics filing H111BW_202601",
  },
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

const TONE_REPLACEMENTS = [
  { pattern: /THIS IS YOUR GUY\.?\s*/gi, replacement: "" },
  {
    pattern: /Publicly available records reviewed in this pass did not verify a current church affiliation\./gi,
    replacement: "Public sources do not identify a current church affiliation.",
  },
  {
    pattern: /I verified the church name, location, and related reporting here\./gi,
    replacement: "Public reporting clearly identifies the church and its location.",
  },
  {
    pattern: /\bthe raw candidate file\b/gi,
    replacement: "the public record",
  },
  {
    pattern: /\bthe raw research file\b/gi,
    replacement: "public reporting",
  },
  {
    pattern: /\bthe research file says\b/gi,
    replacement: "public reporting shows",
  },
  {
    pattern: /\bthe research file describes\b/gi,
    replacement: "public reporting describes",
  },
  {
    pattern: /\bthe research file identifies\b/gi,
    replacement: "public sources identify",
  },
  {
    pattern: /\bthe research file ties\b/gi,
    replacement: "public sources tie",
  },
  {
    pattern: /\baccording to the raw research file\b/gi,
    replacement: "according to public reporting",
  },
  {
    pattern: /\bthe public record reviewed\b/gi,
    replacement: "public sources",
  },
  {
    pattern: /\bthe accessible research trail\b/gi,
    replacement: "cited sources",
  },
  {
    pattern: /\bthe accessible record\b/gi,
    replacement: "cited sources",
  },
  {
    pattern: /\bthe reviewed record\b/gi,
    replacement: "cited sources",
  },
  {
    pattern: /\bHis raw file ties him to\b/gi,
    replacement: "Public records tie him to",
  },
  {
    pattern: /\bher raw file ties her to\b/gi,
    replacement: "Public records tie her to",
  },
  {
    pattern: /\breviewed in this repo\b/gi,
    replacement: "public",
  },
  {
    pattern: /\bin the sources reviewed for this pass\b/gi,
    replacement: "",
  },
  {
    pattern: /\bin the sources reviewed\b/gi,
    replacement: "in public sources",
  },
  {
    pattern: /\bin this pass\b/gi,
    replacement: "",
  },
  {
    pattern: /\bin the reviewed record\b/gi,
    replacement: "in the public record",
  },
  {
    pattern: /\bthe sources I reviewed\b/gi,
    replacement: "public sources",
  },
  {
    pattern: /\bthe public record I reviewed\b/gi,
    replacement: "the public record",
  },
  {
    pattern: /\bthe public material I reviewed\b/gi,
    replacement: "public materials",
  },
  {
    pattern: /\bthe accessible material I reviewed\b/gi,
    replacement: "the publicly available material",
  },
  {
    pattern: /\bthe accessible pages I reviewed\b/gi,
    replacement: "the publicly available pages",
  },
  {
    pattern: /\bthe accessible sample\b/gi,
    replacement: "the public sample",
  },
  {
    pattern: /\bthe reviewed summary page\b/gi,
    replacement: "the public summary page",
  },
  {
    pattern: /\bthe reviewed summary\b/gi,
    replacement: "the public summary",
  },
  {
    pattern: /\bthe file says\b/gi,
    replacement: "public reporting says",
  },
  {
    pattern: /\bThe repo notes\b/gi,
    replacement: "The public summary shows",
  },
  {
    pattern: /\bthe raw file makes clear that\b/gi,
    replacement: "Public records show that",
  },
  {
    pattern: /\breviewed for this pass\b/gi,
    replacement: "",
  },
  {
    pattern: /\bin the public material reviewed\b/gi,
    replacement: "in public materials",
  },
  {
    pattern: /\bthe public material reviewed\b/gi,
    replacement: "public materials",
  },
  {
    pattern: /\bthe public record reviewed here\b/gi,
    replacement: "the public record",
  },
  {
    pattern: /\bOfficial FEC summary data public shows\b/gi,
    replacement: "Official FEC summary data show",
  },
  {
    pattern: /\bThe official FEC summary public shows\b/gi,
    replacement: "The official FEC summary shows",
  },
  {
    pattern: /No public church affiliation in the material reviewed was verified\./gi,
    replacement: "Public sources do not identify a current church affiliation.",
  },
  {
    pattern: /No public church affiliation for ([^.]+?) in the public record was verified/gi,
    replacement: "Public sources do not identify a current church affiliation for $1",
  },
  {
    pattern: /No current public church affiliation for ([^.]+?) was verified\./gi,
    replacement: "Public sources do not identify a current church affiliation for $1.",
  },
  {
    pattern: /No current church affiliation was publicly verified in public sources for ([^.]+?)\./gi,
    replacement: "Public sources do not identify a current church affiliation for $1.",
  },
  {
    pattern: /No public church affiliation was verified in the public record\./gi,
    replacement: "Public sources do not identify a current church affiliation.",
  },
  {
    pattern: /No public church affiliation was verified in the sweep/gi,
    replacement: "Public sources do not identify a current church affiliation.",
  },
  {
    pattern: /No public church affiliation was verified in public sources here/gi,
    replacement: "Public sources do not identify a current church affiliation.",
  },
  {
    pattern: /No public church affiliation was verified for ([^.]+?)\./gi,
    replacement: "Public sources do not identify a current church affiliation for $1.",
  },
  {
    pattern: /No public church affiliation is documented in cited sources\./gi,
    replacement: "Public sources do not identify a current church affiliation.",
  },
  {
    pattern: /No public church affiliation is documented in cited sources/gi,
    replacement: "Public sources do not identify a current church affiliation",
  },
  {
    pattern: /No public church affiliation was verified/gi,
    replacement: "Public sources do not identify a current church affiliation",
  },
  {
    pattern: /No current church affiliation is documented in public sources/gi,
    replacement: "Public sources do not identify a current church affiliation",
  },
  {
    pattern: /No public church affiliation or church website is documented for ([^.]+?)\./gi,
    replacement: "Public sources do not identify a church affiliation or church website for $1.",
  },
  {
    pattern: /No reliable public source identifies ([^.]+?)'s church home or denomination\./gi,
    replacement: "Public sources do not identify $1's church home or denomination.",
  },
  {
    pattern: /No congregation without evidence is assigned without direct public evidence\./gi,
    replacement: "No congregation is identified without direct public evidence.",
  },
  {
    pattern: /No full receipts-and-cash-on-hand report in the public sources, so the money picture is still incomplete online was located/gi,
    replacement:
      "No full receipts-and-cash-on-hand report was publicly available online, so the money picture remains incomplete.",
  },
  {
    pattern: /No complete a clean donor-by-donor table in this sweep was extracted/gi,
    replacement: "No clean donor-by-donor table was extracted.",
  },
  {
    pattern: /No clearly indexed public campaign finance report was found/gi,
    replacement: "No public campaign finance report was readily available online",
  },
  {
    pattern: /No clearly indexed public campaign finance report was available online/gi,
    replacement: "No public campaign finance report was readily available online",
  },
  {
    pattern: /No indexed public campaign finance report was available online/gi,
    replacement: "No public campaign finance report was readily available online",
  },
  {
    pattern: /No usable public campaign finance ledger was found/gi,
    replacement: "No public campaign finance ledger was available online",
  },
  {
    pattern: /No usable public campaign finance ledger was available online/gi,
    replacement: "No public campaign finance ledger was available online",
  },
  {
    pattern: /No usable public donor ledger was found/gi,
    replacement: "No public donor ledger was available online",
  },
  {
    pattern: /No reliable public donor ledger was available online/gi,
    replacement: "No public donor ledger was available online",
  },
  {
    pattern: /No donor-by-donor campaign finance ledger was found/gi,
    replacement: "No donor-by-donor campaign finance ledger was available online",
  },
  {
    pattern: /No donor-by-donor campaign finance ledger was available online/gi,
    replacement: "No donor-by-donor campaign finance ledger was available online",
  },
  {
    pattern: /No clean public itemized donor table was available online for ([^.]+?)\./gi,
    replacement: "No public itemized donor table was available online for $1.",
  },
  {
    pattern: /No major public controversy in public sources was found/gi,
    replacement: "No major public controversy surfaced in public sources",
  },
  {
    pattern: /No Vernon Ruder Jr was verified.’s specific parish participation\./gi,
    replacement: "No specific parish participation was verified for Vernon Ruder Jr.",
  },
  {
    pattern: /your project's home church and inspiration/gi,
    replacement: "Celebration Community Church",
  },
  {
    pattern: /This is not someone who shows up on Easter and Christmas\./g,
    replacement: "The public record describes sustained church involvement over many years.",
  },
  {
    pattern: /\ban notable level\b/gi,
    replacement: "a notable level",
  },
  {
    pattern: /this is not a photo-op position/gi,
    replacement: "this is a long-running volunteer role",
  },
  {
    pattern: /This is someone who has been faithfully serving/gi,
    replacement: "Public records describe him as serving",
  },
  {
    pattern: /Celebration Community Church -- Celebration Community Church --/g,
    replacement: "Celebration Community Church --",
  },
  {
    pattern: /He is the Board PRESIDENT of USD 489\./g,
    replacement: "He is the board president of USD 489.",
  },
  {
    pattern: /This is someone who knows theology\./g,
    replacement:
      "The language used is more theological and specific than a generic campaign faith reference.",
  },
  {
    pattern: /This is a man whose faith clearly informs his worldview\./g,
    replacement: "The available public record suggests his faith informs his worldview.",
  },
  {
    pattern: /\bnot performative\b/gi,
    replacement: "documented in public reporting",
  },
  {
    pattern: /\bgenuine, sustained commitment\b/gi,
    replacement: "documented, sustained involvement",
  },
  {
    pattern: /\bgenuine legacy initiative\b/gi,
    replacement: "documented initiative",
  },
  {
    pattern: /\bgenuine community investment\b/gi,
    replacement: "documented community involvement",
  },
  {
    pattern: /\bgenuinely bipartisan\b/gi,
    replacement: "described in public reporting as bipartisan",
  },
  {
    pattern: /\bgenuinely invisible\b/gi,
    replacement: "largely absent",
  },
  { pattern: /\bextraordinary\b/gi, replacement: "notable" },
  { pattern: /\bcompelling\b/gi, replacement: "notable" },
  { pattern: /\bremarkable\b/gi, replacement: "unusual" },
  { pattern: /\bemphatic\b/gi, replacement: "clear" },
  {
    pattern: /\belder statesperson\b/gi,
    replacement: "long-serving member",
  },
  {
    pattern: /\belder stateswoman\b/gi,
    replacement: "long-serving member",
  },
  {
    pattern: /\binstitutional backbone of the commission\b/gi,
    replacement: "longest-serving member of the commission",
  },
  {
    pattern: /\battack dog\b/gi,
    replacement: "aggressive critic",
  },
  {
    pattern: /\bcrossover appeal\b/gi,
    replacement: "cross-party appeal",
  },
  {
    pattern: /\bpowerful signal\b/gi,
    replacement: "notable signal",
  },
  {
    pattern: /\bhigh-profile Republican insider\b/gi,
    replacement: "well-known Republican insider",
  },
  {
    pattern: /\bleading conservative legislative figure\b/gi,
    replacement: "senior conservative legislative figure",
  },
  {
    pattern: /\bmajor statewide storyline\b/gi,
    replacement: "significant statewide race dynamic",
  },
  {
    pattern: /\bstrong cash position\b/gi,
    replacement: "large cash-on-hand balance",
  },
  {
    pattern: /\bserious donor network\b/gi,
    replacement: "substantial donor network",
  },
  {
    pattern: /\breal statewide campaign\b/gi,
    replacement: "active statewide campaign",
  },
  {
    pattern: /\breal campaign committee\b/gi,
    replacement: "active campaign committee",
  },
  {
    pattern: /\breal campaign identity\b/gi,
    replacement: "prominent part of his campaign identity",
  },
  {
    pattern: /\blong-shot outsider campaign\b/gi,
    replacement: "lower-profile outsider campaign",
  },
  {
    pattern: /\blong-shot candidate\b/gi,
    replacement: "lower-profile candidate",
  },
  {
    pattern: /\bmost enigmatic candidate\b/gi,
    replacement: "least documented candidate",
  },
  {
    pattern: /\bmost unconventional candidate\b/gi,
    replacement: "one of the more unconventional candidates",
  },
  {
    pattern: /\bmost experienced commissioner\b/gi,
    replacement: "longest-serving commissioner",
  },
  {
    pattern: /\bmost dramatic personal story\b/gi,
    replacement: "most widely reported personal story",
  },
  {
    pattern: /\bmost powerful person in Hays city government\b/gi,
    replacement: "central administrator in Hays city government",
  },
  {
    pattern: /\bmost consequential unelected official\b/gi,
    replacement: "one of the most influential unelected officials",
  },
  {
    pattern: /\beffectively irreplaceable\b/gi,
    replacement: "difficult to replace in the near term",
  },
  {
    pattern: /\bstrongest pure donor operation\b/gi,
    replacement: "largest non-self-loan donor base",
  },
  {
    pattern: /\bclearest grassroots-funded candidates?\b/gi,
    replacement: "more heavily small-dollar-funded candidates",
  },
  {
    pattern: /\bclearest federal filing record\b/gi,
    replacement: "most fully documented federal filing record",
  },
  {
    pattern: /\bclearest finance fact\b/gi,
    replacement: "most explicit public finance fact",
  },
  {
    pattern: /\bclearest neutral third-party identity anchor\b/gi,
    replacement: "most straightforward third-party identity anchor",
  },
  {
    pattern: /\bclearest current messaging\b/gi,
    replacement: "most current messaging",
  },
  {
    pattern: /\bclearest public view\b/gi,
    replacement: "most direct public view",
  },
  {
    pattern: /\bclearest public-facing theme\b/gi,
    replacement: "main public-facing theme",
  },
  {
    pattern: /\bstrongest public throughline\b/gi,
    replacement: "main public throughline",
  },
  {
    pattern: /\bfaith credentials are among the strongest on this entire investigation\b/gi,
    replacement: "public faith record is among the most extensively documented in this investigation",
  },
  {
    pattern: /\bdeepest and most documented church leadership records\b/gi,
    replacement: "most fully documented church leadership records",
  },
  {
    pattern: /\bstrongest credential\b/gi,
    replacement: "most prominent credential",
  },
  {
    pattern: /\bstrongest corporate-finance résumé\b/gi,
    replacement: "most extensive corporate-finance résumé",
  },
  {
    pattern: /\bstrongest corporate resume\b/gi,
    replacement: "most extensive corporate resume",
  },
  {
    pattern: /\bstrongest geographic credentials\b/gi,
    replacement: "clearest geographic ties",
  },
  {
    pattern: /\bstrongest economic development credentials\b/gi,
    replacement: "deepest economic-development background",
  },
  {
    pattern: /\bstrongest institutional candidate\b/gi,
    replacement: "most institutionally established candidate",
  },
  {
    pattern: /\bstrongest Democratic candidate by every measurable metric\b/gi,
    replacement: "best-funded and most institutionally backed Democratic candidate in the available public record",
  },
  {
    pattern: /\bstrongest policy-focused Democrats?\b/gi,
    replacement: "more policy-focused Democrats",
  },
  {
    pattern: /\bstrongest corporate-finance\b/gi,
    replacement: "most extensive corporate-finance",
  },
  {
    pattern: /\bHis profile is strongest among Republicans who prioritize election security above all else\b/gi,
    replacement: "His profile is most aligned with Republicans who prioritize election security above all else",
  },
  {
    pattern: /\bmost credible establishment alternative\b/gi,
    replacement: "most established alternative",
  },
  {
    pattern: /\bmost credible Democratic institutional figure\b/gi,
    replacement: "most senior Democratic institutional figure",
  },
  {
    pattern: /\bcredible military-and-business conservative\b/gi,
    replacement: "military-and-business conservative",
  },
  {
    pattern: /\bcredible Jewish candidate\b/gi,
    replacement: "visible Jewish candidate",
  },
  {
    pattern: /\benough prior legislative identity to be credible\b/gi,
    replacement: "enough prior legislative identity to be recognizable",
  },
  {
    pattern: /\beither refreshingly authentic or dangerously unprepared -- depends on the voter\b/gi,
    replacement: "a mix of outsider appeal and limited campaign infrastructure",
  },
  {
    pattern: /\bno viable path to the nomination\b/gi,
    replacement: "a limited visible path to the nomination",
  },
  {
    pattern: /\bdisqualifying for most voters\b/gi,
    replacement: "a likely vulnerability with many voters",
  },
  {
    pattern: /\bessentially a placeholder candidate at this stage\b/gi,
    replacement: "still minimally documented at this stage",
  },
  {
    pattern: /\bThe January 6 motivation for entering politics is sincere\b/gi,
    replacement: "He has publicly tied his decision to run to January 6",
  },
  {
    pattern: /\bRecommend direct inquiry\b/gi,
    replacement: "Direct inquiry would be required for verification",
  },
  {
    pattern: /\bThis is not generic \"I'm spiritual\" language\./gi,
    replacement: "This language is more specific than a generic campaign faith reference.",
  },
  {
    pattern: /\bThe money proves this is a real statewide campaign\b/gi,
    replacement: "The filing shows an active statewide campaign",
  },
  {
    pattern: /\bThe state ethics report gives the clearest public view of how his campaign is funded\b/gi,
    replacement: "The state ethics report gives the most direct public view of how his campaign is funded",
  },
  {
    pattern: /\bone of the clearest examples of a self-funded challenge\b/gi,
    replacement: "one of the more clearly documented self-funded challenges",
  },
  {
    pattern: /\bfar more developed public paper trail than any challenger\b/gi,
    replacement: "more extensive public paper trail than any challenger",
  },
  {
    pattern: /\bdwarf the rest of the field\b/gi,
    replacement: "are larger than the rest of the field",
  },
  {
    pattern: /\bone of the clearest perennial candidates in the field\b/gi,
    replacement: "one of the more visible perennial candidates in the field",
  },
  {
    pattern: /\bthe clearest geographic ties\b/gi,
    replacement: "the most direct geographic ties",
  },
  {
    pattern: /\bThe clearest public policy marker\b/gi,
    replacement: "The most visible public policy marker",
  },
  {
    pattern: /\bone of the clearest examples in this cohort\b/gi,
    replacement: "one of the more visible examples in this cohort",
  },
  {
    pattern: /\bHe is the clearest example of faith lived out in public service on this entire list\b/gi,
    replacement:
      "He is one of the most fully documented examples of faith connected to public service on this list",
  },
  {
    pattern: /\bone of the clearest board voices on capital planning\b/gi,
    replacement: "one of the more consistent board voices on capital planning",
  },
  {
    pattern: /\bone of the clearest \"process first\" voices on the board\b/gi,
    replacement: "one of the more consistently \"process first\" voices on the board",
  },
  {
    pattern: /\bone of the clearest supporters of the bond-buildout phase\b/gi,
    replacement: "one of the more consistent supporters of the bond-buildout phase",
  },
  {
    pattern: /\bthe clearest finance answer\b/gi,
    replacement: "the most explicit finance answer",
  },
  {
    pattern: /\bone of the clearest public answers in the field\b/gi,
    replacement: "one of the most explicit public answers in the field",
  },
  {
    pattern: /\bhistoric significance as the first openly gay Kansas Senate candidate is genuine\b/gi,
    replacement: "historic significance as the first openly gay Kansas Senate candidate is documented",
  },
  {
    pattern: /\bnotable and genuine\b/gi,
    replacement: "notable and well documented",
  },
  {
    pattern: /\bgenuine cross-party appeal\b/gi,
    replacement: "some cross-party appeal",
  },
  {
    pattern: /\bCatholic faith appears genuine\b/gi,
    replacement: "Catholic faith appears well documented",
  },
  {
    pattern: /\bThis is genuine, documented in public reporting\b/gi,
    replacement: "This appears well documented in public reporting",
  },
  {
    pattern: /\bthe \"moderate Republican\" wing of Kansas politics sees her as credible\b/gi,
    replacement: "the \"moderate Republican\" wing of Kansas politics appears to see her as a recognizable contender",
  },
  {
    pattern: /\bmost consequential campaign action\b/gi,
    replacement: "main campaign action",
  },
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
  const oppositionBoost = reportName === "opposition-research.md" ? 35 : 0;
  const authoredProfileBoost = reportName === "site-profile.md" ? 140 : 0;

  return fileScore + headingScore + codexBoost + roundTwoBoost + oppositionBoost + authoredProfileBoost;
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

function neutralizePublishedText(value) {
  if (!value) {
    return value;
  }

  let updated = value
    .replace(/\bI did not verify\s+(.+?)(?:\.|$)/gi, "No $1 was verified.")
    .replace(/\bI did not confirm\s+(.+?)(?:\.|$)/gi, "No $1 was confirmed.")
    .replace(/\bI did not find\s+(.+?)(?:\.|$)/gi, "No $1 was found.")
    .replace(/\bI did not surface\s+(.+?)(?:\.|$)/gi, "No $1 was found.")
    .replace(/\bI did not locate\s+(.+?)(?:\.|$)/gi, "No $1 was located.")
    .replace(/\bI did not extract\s+(.+?)(?:\.|$)/gi, "No complete $1 was extracted.")
    .replace(/\bI did not reconstruct\s+(.+?)(?:\.|$)/gi, "No complete $1 is summarized here.")
    .replace(/\bI did not fully reconstruct\s+(.+?)(?:\.|$)/gi, "No complete $1 is summarized here.")
    .replace(/\bI am not assigning\s+(.+?)(?:\.|$)/gi, "No $1 is assigned without direct public evidence.")
    .replace(/\bI am not claiming\s+(.+?)(?:\.|$)/gi, "Public sources do not confirm $1.")
    .replace(/\bI am not assigning a church without evidence\./gi, "No church is assigned without direct public evidence.")
    .replace(/\bNo a\b/gi, "No ")
    .replace(/\bNo an\b/gi, "No ");

  for (const { pattern, replacement } of TONE_REPLACEMENTS) {
    updated = updated.replace(pattern, replacement);
  }

  return updated
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s{2,}/g, " ")
    .replace(/([.!?]\s+)the public /g, "$1The public ")
    .replace(/([.!?]\s+)public records /g, "$1Public records ")
    .replace(/\bbut No\b/g, "but no")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function neutralizeCampaignFinance(finance) {
  if (!finance) {
    return finance;
  }

  return {
    ...finance,
    narrative: neutralizePublishedText(finance.narrative),
    undisclosed: finance.undisclosed ? neutralizePublishedText(finance.undisclosed) : undefined,
  };
}

function neutralizeCandidateTone(candidateRecord) {
  candidateRecord.whoTheyAre = neutralizePublishedText(candidateRecord.whoTheyAre);
  candidateRecord.theirRecord = neutralizePublishedText(candidateRecord.theirRecord);

  if (candidateRecord.whereTheyWorship) {
    candidateRecord.whereTheyWorship = neutralizePublishedText(candidateRecord.whereTheyWorship);
  }

  if (candidateRecord.church?.details) {
    candidateRecord.church.details = neutralizePublishedText(candidateRecord.church.details);
  }

  if (Array.isArray(candidateRecord.whatYouShouldKnow)) {
    candidateRecord.whatYouShouldKnow = dedupeParagraphs(
      candidateRecord.whatYouShouldKnow
        .map((fact) => ensureSentence(neutralizePublishedText(fact)))
        .filter(Boolean)
    ).map((fact) => fact.replace(/\.$/, ""));
  }

  if (candidateRecord.campaignFinance) {
    candidateRecord.campaignFinance = neutralizeCampaignFinance(candidateRecord.campaignFinance);
  }

  return candidateRecord;
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
  if (normalized.includes("adverse public record")) return 98;
  if (normalized.includes("verified adverse findings")) return 97;
  if (normalized.includes("opposition research")) return 96;
  if (normalized.includes("conflicts of interest")) return 95;
  if (normalized.includes("litigation complaints investigations")) return 94;
  if (normalized.includes("contradictions and reversals")) return 94;
  if (normalized.includes("public criticism")) return 92;
  if (normalized.includes("deleted changed archived content")) return 90;
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
    paragraphs.push(
      ...sectionToParagraphs(segment.content, maxParagraphs).map((paragraph) =>
        neutralizePublishedText(paragraph)
      )
    );
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
  let children = pickField(fieldMaps, ["children", "family"]);

  // Filter out denomination/religion data that leaks into the family field
  if (children && /denomination|catholic|baptist|methodist|lutheran|church|faith|christian|worship/i.test(children)) {
    children = undefined;
  }
  // Filter out paragraph-length entries and data that isn't actually family info
  if (children && children.length > 200) {
    children = undefined;
  }
  if (children && /county attorney|hays high|k-state|washburn/i.test(children)) {
    children = undefined;
  }

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
  const raw = familySegments
    .flatMap((segment) => sectionToParagraphs(segment.content, 1))
    .at(0)
    ?.replace(/\.$/, "");

  // Filter junk that leaks into the family field
  if (raw && (raw.length > 200 || /denomination|catholic|baptist|methodist|lutheran|church|worship|county attorney|hays high|k-state|washburn/i.test(raw))) {
    return undefined;
  }
  return raw;
}

function buildFacts(candidate, segments, finance, faithNarrative) {
  const facts = [];
  const factSegments = dedupeSegments([
    ...selectSegments(segments, OPPOSITION_KEYWORDS, 5),
    ...selectSegments(segments, FACT_KEYWORDS, 8),
  ]);

  for (const segment of factSegments) {
    const lines = sectionToParagraphs(segment.content, 3);
    for (const line of lines) {
      const cleaned = neutralizePublishedText(line).replace(/\.$/, "");
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
    const firstSentence = neutralizePublishedText(faithNarrative).split(/[.!?]\s/)[0]?.trim();
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
        const cleaned = neutralizePublishedText(line).replace(/\.$/, "");
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
        const block = [];
        while (index < lines.length && lines[index].trim().startsWith(">")) {
          block.push(lines[index].trim().replace(/^>\s*/, ""));
          index += 1;
        }
        index -= 1;

        const attributionLines = block.filter((entry) => /^--/.test(entry));
        const quoteLines = block.filter((entry) => !/^--/.test(entry));
        const text = stripInlineMarkdown(quoteLines.join(" ").trim()).replace(/^"+|"+$/g, "");
        if (!isMeaningfulQuote(text)) {
          continue;
        }

        quotes.push({
          text,
          source: stripInlineMarkdown(
            attributionLines[0]?.replace(/^--\s*/, "") ?? `${candidate.name} campaign materials`
          ),
          date: segment.reportDate,
          url: extractUrls(attributionLines[0] ?? "")[0] ?? fallbackUrl,
          topic: prettifyHeading(segment.title),
        });
      }

      const bulletQuoteMatch = line.match(
        /^(?:[-*]|\d+\.)\s*["“]([^"”]+)["”](?:\s*[-—–]\s*(.+))?$/
      );
      if (bulletQuoteMatch) {
        const text = stripInlineMarkdown(bulletQuoteMatch[1]);
        if (!isMeaningfulQuote(text) || /^--/.test(text)) {
          continue;
        }

        const source = stripInlineMarkdown(
          bulletQuoteMatch[2] ?? `${candidate.name} campaign materials`
        );

        quotes.push({
          text,
          source,
          date: segment.reportDate,
          url: extractUrls(source)[0] ?? fallbackUrl,
          topic: prettifyHeading(segment.title),
        });
      }
    }

    for (const match of segment.content.matchAll(/\*\*Key Quote\*\*:?\s*"?([^"\n]+)"?/gi)) {
      const text = stripInlineMarkdown(match[1]);
      if (!isMeaningfulQuote(text) || /^--/.test(text)) {
        continue;
      }

      quotes.push({
        text,
        source: `${candidate.name} campaign materials`,
        date: segment.reportDate,
        url: fallbackUrl,
        topic: prettifyHeading(segment.title),
      });
    }

    for (const match of segment.content.matchAll(/"([^"\n]{45,})"/g)) {
      const text = stripInlineMarkdown(match[1]).trim();
      const contextStart = Math.max(0, (match.index ?? 0) - 80);
      const contextEnd = Math.min(segment.content.length, (match.index ?? 0) + match[0].length + 80);
      const context = segment.content.slice(contextStart, contextEnd);

      if (
        !isMeaningfulQuote(text) ||
        /^--/.test(text) ||
        !/(said|says|stated|told|called|wrote|tweeted|argued|described|quote)/i.test(context)
      ) {
        continue;
      }

      quotes.push({
        text,
        source: `${candidate.name} campaign materials`,
        date: segment.reportDate,
        url: fallbackUrl,
        topic: prettifyHeading(segment.title),
      });
    }
  }

  return dedupeQuotes(quotes).slice(0, 6);
}

function prettifyHeading(title) {
  return title
    .replace(/^\d+\.\s*/, "")
    .replace(/\{#[^}]+\}/g, "")
    .replace(/\s*\([^)]*\)\s*$/, "")
    .trim();
}

function buildCampaignFinance(candidate, segments) {
  const override = FINANCE_OVERRIDES[candidate.slug];
  if (override) {
    return neutralizeCampaignFinance(override);
  }

  const financeSegments = selectSegments(segments, FINANCE_KEYWORDS, 6);

  if (financeSegments.length === 0) {
    return buildContextualFinanceFallback(candidate);
  }

  const narrative = neutralizePublishedText(
    buildNarrative(
    financeSegments,
    `Campaign finance reporting for ${candidate.name} is documented in the source links below.`,
    2
    )
  );

  let totalRaised =
    pickField(financeSegments.map((segment) => extractFieldMap(segment.content)), ["total raised"]) ??
    findMoneyLine(financeSegments, /total raised|raised/i) ??
    inferFinanceHeadline(candidate, narrative);

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

  if (shouldUseContextualFinanceFallback(candidate, narrative)) {
    return buildContextualFinanceFallback(candidate, narrative);
  }

  if (donors.length === 0) {
    donors.push(...fallbackDonorsFromNarrative(candidate, narrative));
  }

  const undisclosed =
    /not identified|not disclosed|gap|require|check/i.test(narrative) || donors[0].amount.includes("Not")
      ? buildContextualUndisclosed(candidate, narrative)
      : undefined;

  return neutralizeCampaignFinance({
    totalRaised,
    narrative,
    donors,
    undisclosed,
    reportingPeriod: inferFinanceReportingPeriod(candidate, financeSegments, narrative),
    source: buildFinanceSourceLabel(candidate, narrative),
  });
}

function shouldUseContextualFinanceFallback(candidate, narrative) {
  const lowered = (narrative ?? "").toLowerCase();

  return (
    /not applicable/.test(lowered) ||
    /not a candidate/.test(lowered) ||
    /appointed superintendent/.test(lowered) ||
    /no itemized donor ledger/.test(lowered) ||
    /no public donor table/.test(lowered) ||
    /no donor-by-donor table/.test(lowered) ||
    /no public itemized donor table/.test(lowered) ||
    /did not surface a clearly indexed public campaign finance report/.test(lowered) ||
    /no candidate-specific public campaign finance ledger surfaced/.test(lowered) ||
    /did not find a donor table or itemized county-race finance report/.test(lowered) ||
    /family, friends, and community members/.test(lowered) ||
    /no outside money/.test(lowered) ||
    /outside the school district/.test(lowered) ||
    /self-funded or very lightly funded/.test(lowered) ||
    /county republican committee spending \$999/.test(lowered) ||
    /text broadcast for "clerk bobbi dreiling"/.test(lowered) ||
    candidate.position.includes("City Manager") ||
    candidate.position.includes("Superintendent")
  );
}

function buildContextualFinanceFallback(candidate, narrative) {
  const lowered = (narrative ?? "").toLowerCase();

  if (
    /not applicable/.test(lowered) ||
    /not a candidate/.test(lowered) ||
    /appointed superintendent/.test(lowered) ||
    candidate.position.includes("City Manager") ||
    candidate.position.includes("Superintendent")
  ) {
    return {
      totalRaised: "Not applicable",
      narrative:
        narrative ||
        `${candidate.name} is not running in a campaign-finance context in the reviewed public record, so there is no donor ledger to reconstruct.`,
      donors: [donor("Campaign finance", "Not applicable")],
      reportingPeriod: "not applicable",
      source: "Reviewed public records",
    };
  }

  if (/county republican committee spending \$999/.test(lowered) || /text broadcast/.test(lowered)) {
    return {
      totalRaised: "No clean candidate total verified from reviewed county materials",
      narrative,
      donors: [
        donor("County Republican committee text broadcast for Clerk Bobbi Dreiling", "$999"),
        donor("Meeting-room rental tied to race activity", "$50"),
      ],
      undisclosed:
        "The reviewed county-level material showed support spending tied to the race, but not a full candidate donor ledger.",
      reportingPeriod: "most recent public county materials reviewed",
      source: "Local reporting, county records, and reviewed public filings",
    };
  }

  if (
    /family, friends, and community members/.test(lowered) ||
    /no outside money/.test(lowered) ||
    /outside the school district/.test(lowered)
  ) {
    return {
      totalRaised: schoolBoardFinanceLabel(candidate),
      narrative,
      donors: [
        donor("Outside PAC/out-of-district money", "None reported"),
        donor("Support base", "Family, friends, and community members"),
      ],
      undisclosed:
        "The public record supports a local, low-dollar school-board finance profile rather than a donor-by-donor PAC ledger.",
      reportingPeriod: "most recent school-board materials reviewed",
      source: "Candidate questionnaires, local reporting, and reviewed public records",
    };
  }

  if (/self-funded or very lightly funded/.test(lowered)) {
    return {
      totalRaised: "No public total verified; campaign appears self-funded or lightly funded",
      narrative,
      donors: [
        donor("Public donor table", "No itemized ledger surfaced"),
        donor("Campaign profile", "Appears self-funded or lightly funded"),
      ],
      undisclosed:
        "The reviewed material pointed to a small, lightly financed campaign rather than a robust donor network.",
      reportingPeriod: "most recent public materials reviewed",
      source: "Local reporting and reviewed public records",
    };
  }

  if (
    /no itemized donor ledger|no public donor table|no donor-by-donor table|no public itemized donor table/.test(lowered) ||
    /did not surface a clearly indexed public campaign finance report/.test(lowered) ||
    /no candidate-specific public campaign finance ledger surfaced/.test(lowered) ||
    /did not find a donor table or itemized county-race finance report/.test(lowered)
  ) {
    return {
      totalRaised: "No campaign finance data available online",
      narrative,
      donors: [donor("Campaign finance data", "No campaign finance data available online")],
      undisclosed:
        "No searchable online donor ledger or filed campaign-finance report was located.",
      reportingPeriod: "most recent public materials reviewed",
      source: buildFinanceSourceLabel(candidate, narrative),
    };
  }

  return {
    totalRaised: inferFinanceHeadline(candidate, narrative),
    narrative:
      narrative ||
      `The reviewed finance material for ${candidate.name} did not yield a clean donor ledger or a confirmed top-line total.`,
    donors: fallbackDonorsFromNarrative(candidate, narrative),
    undisclosed: buildContextualUndisclosed(candidate, narrative),
    reportingPeriod: inferFinanceReportingPeriod(candidate, [], narrative),
    source: buildFinanceSourceLabel(candidate, narrative),
  };
}

function fallbackDonorsFromNarrative(candidate, narrative) {
  const lowered = (narrative ?? "").toLowerCase();

  if (/outside the school district|no outside money|family, friends, and community members/.test(lowered)) {
    return [
      donor("Outside PAC/out-of-district money", "None reported"),
      donor("Support base", "Family, friends, and community members"),
    ];
  }

  if (
    /no itemized donor ledger|no public donor table|no donor-by-donor table|no public itemized donor table/.test(lowered) ||
    /did not surface a clearly indexed public campaign finance report/.test(lowered) ||
    /no candidate-specific public campaign finance ledger surfaced/.test(lowered) ||
    /did not find a donor table or itemized county-race finance report/.test(lowered)
  ) {
    return [donor("Campaign finance data", "No campaign finance data available online")];
  }

  return [donor("Campaign finance data", "No campaign finance data available online")];
}

function inferFinanceHeadline(candidate, narrative) {
  const lowered = (narrative ?? "").toLowerCase();

  if (/not applicable|not a candidate|appointed superintendent/.test(lowered)) {
    return "Not applicable";
  }

  if (/outside the school district|no outside money|family, friends, and community members/.test(lowered)) {
    return schoolBoardFinanceLabel(candidate);
  }

  if (
    /no itemized donor ledger|no public donor table|no donor-by-donor table|no public itemized donor table/.test(lowered) ||
    /did not surface a clearly indexed public campaign finance report/.test(lowered) ||
    /no candidate-specific public campaign finance ledger surfaced/.test(lowered) ||
    /did not find a donor table or itemized county-race finance report/.test(lowered)
  ) {
    return "No campaign finance data available online";
  }

  if (/self-funded or very lightly funded/.test(lowered)) {
    return "No public total verified; campaign appears self-funded or lightly funded";
  }

  if (candidate.position.includes("U.S.")) {
    return "No confirmed public federal total surfaced in public sources.";
  }

  return "No clean total verified in reviewed public sources";
}

function schoolBoardFinanceLabel(candidate) {
  return `${candidate.name} reported a local, no-outside-money school-board finance profile`;
}

function localFinanceLabel(candidate) {
  return "No campaign finance data available online";
}

function buildContextualUndisclosed(candidate, narrative) {
  const lowered = (narrative ?? "").toLowerCase();

  if (/not applicable|not a candidate|appointed superintendent/.test(lowered)) {
    return undefined;
  }

  if (candidate.position.includes("U.S.")) {
    return "The reviewed public record confirmed campaign activity but not a full federal donor-by-donor breakdown.";
  }

  if (/outside the school district|no outside money|family, friends, and community members/.test(lowered)) {
    return "The public record supports a local donor story, but not a complete itemized ledger.";
  }

  return "Public sources still show gaps in line-item donor detail, so the linked filing trail remains the best source for deeper verification.";
}

function inferFinanceReportingPeriod(candidate, financeSegments, narrative) {
  const lowered = (narrative ?? "").toLowerCase();

  if (/not applicable|not a candidate|appointed superintendent/.test(lowered)) {
    return "not applicable";
  }

  if (/most recent public|school-board|county-level|local/.test(lowered)) {
    return "most recent public materials reviewed";
  }

  return financeSegments[0]?.reportDate?.slice(0, 4) === "2026" ? "2026 cycle" : "recent reporting period";
}

function buildFinanceSourceLabel(candidate, narrative) {
  const lowered = (narrative ?? "").toLowerCase();

  if (/not applicable|not a candidate|appointed superintendent/.test(lowered)) {
    return "Reviewed public records";
  }

  if (candidate.position.includes("U.S.")) {
    return "FEC records and reviewed public reporting";
  }

  if (/USD 489/.test(candidate.position)) {
    return "Candidate questionnaires, local reporting, and reviewed public records";
  }

  if (/Hays|Ellis County/.test(candidate.position)) {
    return "Local reporting, county records, and reviewed public filings";
  }

  return "Reviewed campaign-finance materials and public reporting";
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
    .map((paragraph) => neutralizePublishedText(paragraph))
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

  narrative = neutralizePublishedText(narrative);

  const church =
    churchName
      ? {
          name: churchName,
          denomination,
          url: churchUrl,
          details: neutralizePublishedText((details || narrative).replace(/\n\n/g, " ")),
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

function dedupeSources(sources) {
  const result = [];
  const seen = new Set();

  for (const source of sources) {
    addSource(result, seen, source);
  }

  return result;
}

function parseSourceList(text) {
  const sources = [];
  const seen = new Set();

  for (const url of extractUrls(text)) {
    addSource(sources, seen, {
      title: publicationFromUrl(url),
      url,
    });
  }

  return sources;
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

function findCandidateReport(reports, slug, fileName) {
  return reports.find((report) => report.id === `memory/candidates/${slug}/${fileName}`);
}

function getHeadingBody(report, headingNames) {
  const headings = parseHeadings(report.content);
  const target = headings.find((heading) =>
    headingNames.some((name) => normalize(heading.title) === normalize(name))
  );

  if (!target) {
    return "";
  }

  return report.content.slice(target.bodyStart, target.end).trim();
}

function parseAuthoredFactList(text) {
  const lines = text.split("\n");
  const facts = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }

    if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const item = stripInlineMarkdown(trimmed.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, ""));
      if (item) {
        facts.push(item.replace(/\.$/, ""));
      }
    }
  }

  if (facts.length > 0) {
    return dedupeParagraphs(facts);
  }

  return sectionToParagraphs(text, 8).map((paragraph) => paragraph.replace(/\.$/, ""));
}

function parseAuthoredIssuePositions(text) {
  const lines = text.split("\n");
  const positions = [];
  let currentIssue = null;
  let currentStance = [];

  function flush() {
    if (currentIssue && currentStance.length > 0) {
      positions.push({
        issue: stripInlineMarkdown(currentIssue).replace(/[:\.]$/, "").trim(),
        stance: stripInlineMarkdown(currentStance.join(" ")).trim(),
      });
    }
    currentIssue = null;
    currentStance = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Bold issue header pattern: **Abortion**: stance text
    const boldMatch = trimmed.match(/^\*\*(.+?)\*\*[:\s]*(.*)$/);
    if (boldMatch) {
      flush();
      currentIssue = boldMatch[1];
      if (boldMatch[2]?.trim()) {
        currentStance.push(boldMatch[2].trim());
      }
      continue;
    }

    // "- **Issue**: stance" pattern
    const bulletBoldMatch = trimmed.match(/^[-*]\s+\*\*(.+?)\*\*[:\s]*(.*)$/);
    if (bulletBoldMatch) {
      flush();
      currentIssue = bulletBoldMatch[1];
      if (bulletBoldMatch[2]?.trim()) {
        currentStance.push(bulletBoldMatch[2].trim());
      }
      continue;
    }

    // "### Issue" pattern
    const h3Match = trimmed.match(/^###\s+(.+)$/);
    if (h3Match) {
      flush();
      currentIssue = h3Match[1];
      continue;
    }

    // Continuation line for current issue
    if (currentIssue) {
      const cleaned = trimmed.replace(/^[-*]\s+/, "");
      if (cleaned) currentStance.push(cleaned);
    }
  }

  flush();
  return positions.length > 0 ? positions : undefined;
}

function isMeaningfulQuote(text) {
  const cleaned = stripInlineMarkdown(text).replace(/^"+|"+$/g, "").trim();
  if (!cleaned || cleaned.includes("\\")) {
    return false;
  }

  const words = cleaned.split(/\s+/).filter(Boolean);
  if (cleaned.length < 45 || words.length < 7) {
    return false;
  }

  if (!/[A-Za-z]/.test(cleaned)) {
    return false;
  }

  if (/^[A-Z][A-Za-z'’-]+(?:\s+[A-Z][A-Za-z'’-]+){0,3}$/.test(cleaned)) {
    return false;
  }

  return true;
}

function dedupeQuotes(quotes) {
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
  return unique;
}

function scoreQuote(quote) {
  let score = quote.text.length;

  if (/research file/i.test(quote.source ?? "")) {
    score -= 15;
  }

  if (quote.url) {
    score += 5;
  }

  return score;
}

function parseAuthoredQuotes(candidate, report, text) {
  const quotes = [];
  const lines = text.split("\n");
  const fallbackUrl = extractUrls(text)[0] ?? extractUrls(report.content)[0];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) {
      continue;
    }

    if (line.startsWith(">")) {
      const block = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        block.push(lines[index].trim().replace(/^>\s*/, ""));
        index += 1;
      }
      index -= 1;

      const attributionLines = block.filter((entry) => /^--/.test(entry));
      const quoteLines = block.filter((entry) => !/^--/.test(entry));
      const joinedQuote = quoteLines.join(" ").trim();
      const inlineAttributionMatch = joinedQuote.match(/^["“]([^"”]+)["”]\s*[-—–]\s*(.+)$/);
      const rawText = inlineAttributionMatch ? inlineAttributionMatch[1] : joinedQuote;
      const inlineAttribution = inlineAttributionMatch ? inlineAttributionMatch[2] : undefined;
      const textValue = stripInlineMarkdown(rawText).replace(/^"+|"+$/g, "").trim();

      if (!isMeaningfulQuote(textValue)) {
        continue;
      }

      const attribution = stripInlineMarkdown(
        attributionLines[0]?.replace(/^--\s*/, "") ??
          inlineAttribution ??
          `${candidate.name} campaign materials`
      );
      const quoteUrl = extractUrls(attribution)[0] ?? fallbackUrl;

      quotes.push({
        text: textValue,
        source: attribution || `${candidate.name} campaign materials`,
        date: report.reportDate,
        url: quoteUrl,
        topic: "Quotes",
      });
      continue;
    }

    const attributedBullet = line.match(
      /^(?:[-*]|\d+\.)\s*["“]([^"”]+)["”](?:\s*[-—–]\s*(.+))?$/
    );
    if (attributedBullet) {
      const textValue = stripInlineMarkdown(attributedBullet[1]).trim();
      const attribution = stripInlineMarkdown(attributedBullet[2] ?? `${candidate.name} campaign materials`).trim();
      const quoteUrl = extractUrls(attribution)[0] ?? fallbackUrl;

      if (!isMeaningfulQuote(textValue)) {
        continue;
      }

      quotes.push({
        text: textValue,
        source: attribution || `${candidate.name} campaign materials`,
        date: report.reportDate,
        url: quoteUrl,
        topic: "Quotes",
      });
    }
  }

  return dedupeQuotes(quotes);
}

function extractAuthoredProfile(candidate, reports) {
  const report = findCandidateReport(reports, candidate.slug, "site-profile.md");
  if (!report) {
    return null;
  }

  const whoTheyAreBody = getHeadingBody(report, ["Who They Are"]);
  const theirRecordBody = getHeadingBody(report, ["Their Record"]);
  const whatYouShouldKnowBody = getHeadingBody(report, ["What You Should Know"]);
  const whereTheyWorshipBody = getHeadingBody(report, ["Where They Worship"]);
  const whatTheyStandForBody = getHeadingBody(report, ["What They Stand For"]);
  const quotesBody = getHeadingBody(report, ["Quotes"]);
  const campaignFinanceBody = getHeadingBody(report, ["Campaign Finance"]);
  const sourcesBody = getHeadingBody(report, ["Sources"]);

  return {
    whoTheyAre:
      whoTheyAreBody.length > 0 ? sectionToParagraphs(whoTheyAreBody, 6).join("\n\n") : undefined,
    theirRecord:
      theirRecordBody.length > 0 ? sectionToParagraphs(theirRecordBody, 6).join("\n\n") : undefined,
    whatTheyStandFor:
      whatTheyStandForBody.length > 0 ? parseAuthoredIssuePositions(whatTheyStandForBody) : undefined,
    whatYouShouldKnow:
      whatYouShouldKnowBody.length > 0 ? parseAuthoredFactList(whatYouShouldKnowBody) : undefined,
    whereTheyWorship:
      whereTheyWorshipBody.length > 0 ? sectionToParagraphs(whereTheyWorshipBody, 3).join("\n\n") : undefined,
    quotes: quotesBody.length > 0 ? parseAuthoredQuotes(candidate, report, quotesBody) : undefined,
    campaignFinanceNarrative:
      campaignFinanceBody.length > 0 ? sectionToParagraphs(campaignFinanceBody, 4).join("\n\n") : undefined,
    sources: parseSourceList(`${sourcesBody}\n${quotesBody}\n${campaignFinanceBody}`),
  };
}

function requireAuthoredProfile(candidate, authoredProfile) {
  if (!authoredProfile) {
    throw new Error(`Missing authored site-profile.md for ${candidate.slug}`);
  }

  const missing = [];

  if (!authoredProfile.whoTheyAre?.trim()) {
    missing.push("Who They Are");
  }

  if (!authoredProfile.theirRecord?.trim()) {
    missing.push("Their Record");
  }

  if (!Array.isArray(authoredProfile.whatYouShouldKnow) || authoredProfile.whatYouShouldKnow.length === 0) {
    missing.push("What You Should Know");
  }

  if (missing.length > 0) {
    throw new Error(
      `Authored site profile for ${candidate.slug} is missing required section(s): ${missing.join(", ")}`
    );
  }

  return authoredProfile;
}

function authoredTextOrDefault(text, fallback) {
  return typeof text === "string" && text.trim().length > 0 ? text.trim() : fallback;
}

function buildFinanceNarrativePlaceholder(candidate, finance) {
  if (/no campaign finance data/i.test(finance?.narrative ?? "")) {
    return "No campaign finance data available online.";
  }

  if (finance?.totalRaised || (Array.isArray(finance?.donors) && finance.donors.length > 0)) {
    return `Public campaign finance records for ${candidate.name} were reviewed and summarized in the structured filing data below.`;
  }

  return "No campaign finance data available online.";
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
  const authoredProfile = requireAuthoredProfile(candidate, extractAuthoredProfile(candidate, reports));
  const sources = dedupeSources([...(authoredProfile?.sources ?? []), ...buildSources(sections)]);
  const faith = buildFaith(candidate, sections, segments, sources);
  const finance = buildCampaignFinance(candidate, segments);
  const normalizedFinance = {
    ...finance,
    narrative: authoredTextOrDefault(
      authoredProfile.campaignFinanceNarrative,
      buildFinanceNarrativePlaceholder(candidate, finance)
    ),
  };

  const whoTheyAre = authoredProfile.whoTheyAre;

  const theirRecord = authoredProfile.theirRecord;

  const extractedQuotes = dedupeQuotes(extractQuotes(candidate, sections, segments)).sort(
    (a, b) => scoreQuote(b) - scoreQuote(a)
  );
  const authoredQuotes = authoredProfile?.quotes ?? [];

  let normalizedQuotes;
  if (authoredQuotes.length >= 3) {
    normalizedQuotes = authoredQuotes.slice(0, 3);
  } else if (authoredQuotes.length > 0) {
    normalizedQuotes = dedupeQuotes([...authoredQuotes, ...extractedQuotes]).slice(0, 3);
  } else {
    normalizedQuotes =
      extractedQuotes.length >= 3
        ? extractedQuotes.slice(0, 6)
        : QUOTE_OVERRIDES[candidate.slug] ?? extractedQuotes;
  }

  const whatYouShouldKnow = authoredProfile.whatYouShouldKnow;

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
    whatTheyStandFor: authoredProfile.whatTheyStandFor ?? [],
    whatYouShouldKnow,
    whereTheyWorship: authoredTextOrDefault(
      authoredProfile.whereTheyWorship,
      `No public church affiliation is documented in cited sources for ${candidate.name}.`
    ),
    church: faith.church,
    quotes: normalizedQuotes,
    campaignFinance: normalizedFinance,
    sources,
  };

  neutralizeCandidateTone(built);

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

export interface IssuePosition {
  issue: string;
  stance: string;
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
  whatTheyStandFor: IssuePosition[];
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
