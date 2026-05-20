#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const ACCESSED = "2026-05-20";

const sourceDefaults = {
  accessed: ACCESSED,
  publisher: "Public record",
  claimsAnchored: [],
};

function source(source) {
  return {
    ...sourceDefaults,
    ...source,
    claimsAnchored: source.claimsAnchored ?? [],
  };
}

function issue({ id, title, stated, sourceIds, actions = [], socialSignals = [], gap }) {
  return {
    id,
    title,
    stated: {
      text: stated,
      sourceIds,
    },
    actions: actions.map((action, index) => ({
      id: action.id ?? `a-${id}-${index + 1}`,
      date: action.date ?? "2026-05-20",
      body: action.body,
      sourceIds: action.sourceIds ?? sourceIds,
    })),
    socialSignals,
    ...(gap ? { gap } : {}),
  };
}

function sparseIssues(profile, filingSourceIds, financeSourceIds = filingSourceIds) {
  return [
    issue({
      id: "i-ballot-status",
      title: "Ballot / filing status",
      stated:
        profile.statusText ??
        `${profile.name} appears in the reviewed official or campaign-finance records connected to ${profile.position}. This profile does not treat that appearance as a final certified ballot until the final election-office list is checked after the filing deadline.`,
      sourceIds: filingSourceIds,
      actions: [
        {
          id: "a-record-appearance",
          body:
            profile.statusAction ??
            `${profile.name} was identified in the reviewed official or campaign-finance source for ${profile.position}.`,
          sourceIds: filingSourceIds,
        },
      ],
    }),
    issue({
      id: "i-public-issue-record",
      title: "Where they stand on big issues",
      stated:
        profile.issueStatement ??
        "No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliation, follows, likes, comments, or associations.",
      sourceIds: filingSourceIds,
      actions: [
        {
          id: "a-platform-gap",
          body:
            profile.issueAction ??
            "The reviewed source set confirms public-record status but did not provide a candidate-controlled issue platform with enough detail to summarize policy positions.",
          sourceIds: filingSourceIds,
        },
      ],
    }),
    issue({
      id: "i-donor-funding",
      title: "Donor / funding information",
      stated:
        profile.financeStatement ??
        "Campaign-finance information is limited to the public filing or committee-account record captured in this pass. Donor-by-donor interpretation is not inferred beyond the public report.",
      sourceIds: financeSourceIds,
      actions: [
        {
          id: "a-finance-record",
          body:
            profile.financeAction ??
            "The reviewed finance source confirms either a campaign-finance account, committee record, or no itemized summary yet; final donor detail needs the next public report if one is not already posted.",
          sourceIds: financeSourceIds,
        },
      ],
    }),
  ];
}

const profiles = [
  {
    slug: "damon-anderson",
    name: "Damon Anderson",
    party: "D",
    position: "U.S. Senate candidate, Kansas",
    electionSlug: "us-senate-2026",
    occupation: "Business owner / entrepreneur",
    campaignWebsite: "https://www.andersonforkansas.com/",
    whoTheyAre:
      "Damon Anderson is a Democratic U.S. Senate candidate from Shawnee. His campaign frames him as a lifelong Kansan, parent, and business owner running on a democracy-and-money-in-politics theme.",
    recordSummary:
      "The strongest records found in this pass are the Kansas candidate-filing entry and candidate-controlled issue pages. No elected voting record was identified in the reviewed material.",
    ownWordsNarrative:
      "Anderson's own campaign repeatedly frames the race around reducing the influence of corporate money, lobbyists, and party leadership. His issue page contains explicit stated positions on health care, education, AI regulation, immigration, agriculture, labor, budget policy, prison reform, privatization, LGBTQ rights, and reproductive rights.",
    financeStatement:
      "The campaign says Anderson does not answer to corporate PACs and centers donor influence as a core issue. This pass did not capture a processed FEC financial summary for an Anderson committee.",
    financeAction:
      "The Kansas filing mirror lists Anderson as filed for U.S. Senate and links the campaign site; the campaign site carries its paid-for disclaimer.",
    sources: [
      source({
        id: "s-ks-filing-senate",
        tier: "primary",
        url: "https://candidatefiling.us/Info/Default?c=181035409877&e=545606222&j=2795522868&s=802933811&st=KS",
        title: "Candidate Filing Info - United States Senate, Kansas",
        publisher: "Kansas candidate filing mirror / State of Kansas filing data",
        claimsAnchored: [
          "Damon Anderson appears as a Democratic U.S. Senate candidate",
          "The filing entry links AndersonforKansas.com",
        ],
      }),
      source({
        id: "s-campaign-issues",
        tier: "primary",
        url: "https://www.andersonforkansas.com/issues",
        title: "Where I Stand",
        publisher: "Damon Anderson for U.S. Senate",
        claimsAnchored: [
          "Campaign states positions on health care, education, tech, AI, immigration, agriculture, labor, balanced budget, prison reform, privatization, LGBTQ rights, and reproductive rights",
        ],
      }),
      source({
        id: "s-campaign-systemfix",
        tier: "primary",
        url: "https://www.andersonforkansas.com/systemfix",
        title: "Fixing the System",
        publisher: "Damon Anderson for U.S. Senate",
        claimsAnchored: [
          "Campaign supports overturning Citizens United, limiting leadership PACs, banning congressional stock trading, lobbying restrictions, donor disclosure, bill transparency, and national E-Verify",
        ],
      }),
    ],
    issues: [
      issue({
        id: "i-ballot-status",
        title: "Ballot / filing status",
        stated:
          "Anderson is presented in the reviewed Kansas filing source as a Democratic U.S. Senate candidate for the 2026 cycle.",
        sourceIds: ["s-ks-filing-senate"],
        actions: [
          {
            id: "a-filed-senate",
            body:
              "The Kansas candidate-filing mirror lists Damon Anderson under United States Senate with Democratic affiliation and the Anderson for Kansas campaign site.",
            sourceIds: ["s-ks-filing-senate"],
          },
        ],
      }),
      issue({
        id: "i-money-politics",
        title: "Money in politics / ethics reform",
        stated:
          "Anderson's campaign says Washington answers too much to corporate donors, lobbyists, and party leadership; his reform list includes overturning Citizens United, limiting leadership PACs, banning congressional stock trading, limiting lobbying after office, strengthening donor disclosure, and increasing bill transparency.",
        sourceIds: ["s-campaign-systemfix"],
        actions: [
          {
            id: "a-systemfix-platform",
            body:
              "The campaign published a dedicated 'Fixing the System' page tying its agenda to campaign-finance reform, lobbying limits, stock-trading limits, transparency, and budget accountability.",
            sourceIds: ["s-campaign-systemfix"],
          },
        ],
      }),
      issue({
        id: "i-big-issues-platform",
        title: "Where they stand on big issues",
        stated:
          "Anderson's campaign states support for affordable health care and prescription drugs, public education investments, tech-sector growth with guardrails, AI regulation, strong-border immigration reform with E-Verify and guest-worker systems, small-farmer agriculture policy, labor-union support, a balanced-budget amendment, public prison reform, and public-service accountability before privatization.",
        sourceIds: ["s-campaign-issues"],
        actions: [
          {
            id: "a-issues-platform",
            body:
              "The campaign published a detailed issue page covering health care, education, technology, AI, immigration, agriculture, labor, budget policy, prison reform, privatization, LGBTQ rights, and reproductive rights.",
            sourceIds: ["s-campaign-issues"],
          },
        ],
      }),
      issue({
        id: "i-cultural-rights",
        title: "LGBTQ and reproductive-rights positions",
        stated:
          "Anderson's campaign states support for the LGBTQ+ community and says he is pro-choice while also saying he respects those who disagree.",
        sourceIds: ["s-campaign-issues"],
        actions: [
          {
            id: "a-cultural-positions",
            body:
              "The campaign issue page includes explicit LGBTQ+ rights and reproductive-rights sections rather than requiring inference from social-media behavior.",
            sourceIds: ["s-campaign-issues"],
          },
        ],
      }),
    ],
  },
  {
    slug: "kevin-latz",
    name: "Kevin Latz",
    party: "D",
    position: "U.S. Senate candidate, Kansas",
    electionSlug: "us-senate-2026",
    occupation: "U.S. Senate candidate",
    whoTheyAre:
      "Kevin Latz appears in current Kansas U.S. Senate filing material as a Democratic candidate from Mission Hills. This pass did not find a candidate-controlled platform or public elected record.",
    recordSummary:
      "The verified record is limited to candidate-filing appearances. The profile is intentionally sparse until a candidate-controlled platform, FEC committee page, or reliable coverage is captured.",
    sources: [
      source({
        id: "s-ks-filing-senate",
        tier: "primary",
        url: "https://candidatefiling.us/Info/Default?c=181035409877&e=545606222&j=2795522868&s=802933811&st=KS",
        title: "Candidate Filing Info - United States Senate, Kansas",
        publisher: "Kansas candidate filing mirror / State of Kansas filing data",
        claimsAnchored: [
          "Kevin Latz appears as a Democratic U.S. Senate candidate",
        ],
      }),
      source({
        id: "s-saline-unofficial-list",
        tier: "primary",
        url: "https://www.salinecountyks.gov/media/Election%20Office/election/PR2026%20Candidates.pdf",
        title: "2026 Saline County Candidate Filings - Unofficial",
        publisher: "Saline County, Kansas",
        claimsAnchored: [
          "An unofficial county list included Kevin Latz under United States Senate",
        ],
      }),
    ],
    issues: sparseIssues(
      {
        name: "Kevin Latz",
        position: "U.S. Senate candidate, Kansas",
        statusAction:
          "The Kansas candidate-filing mirror lists Kevin Latz under United States Senate as a Democratic candidate.",
      },
      ["s-ks-filing-senate", "s-saline-unofficial-list"],
    ),
  },
  {
    slug: "noah-taylor",
    name: "Noah Taylor",
    party: "D",
    position: "U.S. Senate candidate, Kansas",
    electionSlug: "us-senate-2026",
    occupation: "U.S. Senate candidate",
    whoTheyAre:
      "Noah Taylor is a Democratic U.S. Senate candidate in the FEC record. His candidate page identifies Noah Taylor for Kansas as the principal campaign committee.",
    recordSummary:
      "The strongest verified record in this pass is federal filing and finance data. No candidate-controlled issue platform was captured.",
    financeStatement:
      "FEC coverage through March 31, 2026 shows $72,435.00 in total receipts, $3,801.94 in total disbursements, and $68,633.06 ending cash on hand for Noah Taylor for Kansas.",
    financeAction:
      "FEC lists Noah Taylor for Kansas as the principal campaign committee and shows the Q1 2026 financial summary.",
    sources: [
      source({
        id: "s-fec-candidate",
        tier: "primary",
        url: "https://www.fec.gov/data/candidate/S6KS00296/",
        title: "TAYLOR, NOAH - Candidate overview",
        publisher: "Federal Election Commission",
        claimsAnchored: [
          "FEC identifies Noah Taylor as a Democratic candidate for Kansas Senate",
          "FEC lists Noah Taylor for Kansas as the authorized campaign committee",
          "FEC shows total receipts, disbursements, and cash on hand for coverage through 2026-03-31",
        ],
      }),
    ],
    campaignFinance: {
      totalRaised: "$72,435.00",
      narrative:
        "FEC Q1 2026 coverage lists $72,435.00 total receipts, $3,801.94 total disbursements, and $68,633.06 ending cash on hand for Noah Taylor for Kansas.",
      donors: [
        { name: "Itemized individual contributions", amount: "$33,400.00" },
        { name: "Unitemized individual contributions", amount: "$25,534.83" },
        { name: "Candidate contributions", amount: "$3,500.00" },
        { name: "Other committee contributions", amount: "$10,000.00" },
      ],
      reportingPeriod: "FEC coverage 2026-01-01 to 2026-03-31",
      source: "FEC candidate overview",
    },
    issues: sparseIssues(
      {
        name: "Noah Taylor",
        position: "U.S. Senate candidate, Kansas",
        statusAction:
          "FEC identifies Noah Taylor as a Democratic challenger for the 2026 Kansas U.S. Senate race.",
        financeStatement:
          "FEC reports a processed 2026 first-quarter finance summary for Noah Taylor for Kansas.",
        financeAction:
          "FEC lists $72,435.00 total receipts and $68,633.06 ending cash on hand for coverage through March 31, 2026.",
      },
      ["s-fec-candidate"],
    ),
  },
  {
    slug: "adam-hamilton",
    name: "Adam Hamilton",
    party: "D",
    position: "U.S. Senate candidate, Kansas",
    electionSlug: "us-senate-2026",
    occupation: "Founding pastor / author",
    campaignWebsite: "https://hamiltonforkansas.com/",
    whereTheyWorship:
      "Hamilton's campaign biography says he founded Church of the Resurrection; this is background only and is not used to infer policy positions.",
    whoTheyAre:
      "Adam Hamilton is a fifth-generation Kansan and founding pastor of Church of the Resurrection. His campaign biography says the church grew from four people in a borrowed space to a large multi-location United Methodist congregation.",
    recordSummary:
      "The reviewed candidate-controlled material emphasizes listening, affordability, bridge-building, and decency in government. FEC bulk records identify Hamilton as a Democratic U.S. Senate candidate with Hamilton for Kansas as the committee.",
    ownWordsNarrative:
      "Hamilton's campaign uses the phrases 'People Over Politics,' 'Faith. Family. Kansas,' and says the campaign is focused on listening to Kansans, solving affordability and opportunity problems, building bridges, and restoring decency and humanity in government.",
    sources: [
      source({
        id: "s-campaign-home",
        tier: "primary",
        url: "https://hamiltonforkansas.com/",
        title: "Adam Hamilton for Kansas",
        publisher: "Hamilton for Kansas",
        claimsAnchored: [
          "Campaign identifies Hamilton as a U.S. Senate candidate",
          "Campaign biography describes Hamilton's Kansas roots, family, and Church of the Resurrection background",
          "Campaign states themes of listening, affordability, bridge-building, and decency",
        ],
      }),
      source({
        id: "s-fec-candidate",
        tier: "primary",
        url: "https://www.fec.gov/data/candidate/S6KS00312/",
        title: "HAMILTON, ADAM - Candidate overview",
        publisher: "Federal Election Commission",
        claimsAnchored: [
          "FEC candidate master data identifies Adam Hamilton as a Democratic candidate for Kansas Senate in 2026",
          "FEC identifies Hamilton for Kansas as the principal committee",
        ],
      }),
    ],
    issues: [
      issue({
        id: "i-ballot-status",
        title: "Ballot / filing status",
        stated:
          "Hamilton's campaign site presents him as a U.S. Senate candidate, and FEC candidate data identifies him as a Democratic candidate for Kansas Senate.",
        sourceIds: ["s-campaign-home", "s-fec-candidate"],
        actions: [
          {
            id: "a-campaign-launch",
            body:
              "Hamilton's campaign site published donation, volunteer, biography, and U.S. Senate campaign content.",
            sourceIds: ["s-campaign-home"],
          },
          {
            id: "a-fec-record",
            body:
              "FEC candidate data identifies Adam Hamilton as a 2026 Kansas Senate candidate with Hamilton for Kansas as the committee.",
            sourceIds: ["s-fec-candidate"],
          },
        ],
      }),
      issue({
        id: "i-campaign-themes",
        title: "Where they stand on big issues",
        stated:
          "Hamilton's campaign says he is focused on listening to Kansans, addressing high costs for food, energy, and health care, building bridges across party lines, and restoring decency and shared humanity in government.",
        sourceIds: ["s-campaign-home"],
        actions: [
          {
            id: "a-platform-summary",
            body:
              "The campaign site lists listening, affordability and opportunity, bridge-building, and restoring decency and humanity as campaign focus areas.",
            sourceIds: ["s-campaign-home"],
          },
        ],
      }),
      issue({
        id: "i-donor-funding",
        title: "Donor / funding information",
        stated:
          "Hamilton's campaign site links ActBlue donation flows. This pass did not capture a processed FEC financial summary for the committee.",
        sourceIds: ["s-campaign-home", "s-fec-candidate"],
        actions: [
          {
            id: "a-actblue-donation-flow",
            body:
              "The campaign home page includes ActBlue donation buttons and the paid-for line for Hamilton for Kansas.",
            sourceIds: ["s-campaign-home"],
          },
        ],
      }),
    ],
  },
  {
    slug: "steven-jacob",
    name: "Steven Robert Jacob",
    party: "I",
    position: "U.S. House candidate, Kansas 1st District",
    electionSlug: "ks-01-house-2026",
    occupation: "U.S. House candidate",
    whoTheyAre:
      "Steven Robert Jacob appears in FEC candidate data as a Libertarian candidate for Kansas's 1st Congressional District.",
    recordSummary:
      "The verified record captured in this pass is the federal filing and committee record. No candidate-controlled issue platform was captured.",
    sources: [
      source({
        id: "s-fec-candidate",
        tier: "primary",
        url: "https://www.fec.gov/data/candidate/H6KS01229/",
        title: "JACOB, STEVEN ROBERT - Candidate overview",
        publisher: "Federal Election Commission",
        claimsAnchored: [
          "FEC candidate master data identifies Steven Robert Jacob as a Libertarian candidate for Kansas House District 1 in 2026",
          "FEC identifies Steven Jacob for Kansas 1 as the committee",
        ],
      }),
    ],
    issues: sparseIssues(
      {
        name: "Steven Robert Jacob",
        position: "U.S. House candidate, Kansas 1st District",
        statusAction:
          "FEC candidate data identifies Steven Robert Jacob as a 2026 Kansas District 1 U.S. House candidate.",
      },
      ["s-fec-candidate"],
    ),
  },
  {
    slug: "steven-johnson",
    name: "Steven Johnson",
    party: "R",
    position: "Kansas State Treasurer candidate",
    electionSlug: "kansas-treasurer-2026",
    incumbent: true,
    occupation: "Kansas State Treasurer",
    campaignWebsite: "https://stevenjohnsonks.com/",
    whoTheyAre:
      "Steven Johnson is the incumbent Kansas State Treasurer and is listed in current statewide filing material as a Republican candidate for State Treasurer.",
    recordSummary:
      "The record captured in this pass confirms filed status through a statewide filing mirror and a campaign-finance account through KPDC. A deeper office-record pass should connect his treasurer work to specific official actions before expanding beyond filing and finance.",
    sources: [
      source({
        id: "s-state-filing",
        tier: "primary",
        url: "https://candidatefiling.us/Info/Default?det=Y&e=545606222&j=2795522868&pj=26405586&s=802933811&st=KS",
        title: "Candidate Filing Info - State of Kansas statewide offices",
        publisher: "Kansas candidate filing mirror / State of Kansas filing data",
        claimsAnchored: [
          "Steven Johnson appears as a Republican candidate for Kansas State Treasurer",
          "The filing entry lists Assaria and links stevenjohnsonks.com",
        ],
      }),
      source({
        id: "s-kpdc-statewide",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        title: "Kansas State Wide Office - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Johnson, Steven under State Treasurer candidates",
          "KPDC links 2024, 2025, and 2026 reports for Johnson",
        ],
      }),
      source({
        id: "s-kpdc-202601",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/ReceiptsExpenditures/SW05SJ_202601.pdf",
        title: "Steven Johnson 2026 Receipts and Expenditures",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Report provides Johnson's 2025 receipts, expenditures, and cash-on-hand figures for the 2026 cycle",
        ],
      }),
    ],
    campaignFinance: {
      totalRaised: "$192,668.21",
      narrative:
        "KPDC 202601 reporting extracted in the audit showed $192,668.21 in receipts, $5,418.17 in expenditures, and $222,037.92 cash on hand.",
      donors: [],
      reportingPeriod: "KPDC 202601 / 2025 reporting period",
      source: "KPDC Steven Johnson 202601 report",
    },
    issues: sparseIssues(
      {
        name: "Steven Johnson",
        position: "Kansas State Treasurer candidate",
        statusAction:
          "The Kansas statewide filing mirror lists Steven Johnson as a Republican candidate for State Treasurer.",
        financeStatement:
          "KPDC reports for Johnson include a 202601 receipts-and-expenditures filing.",
        financeAction:
          "Audit extraction from the KPDC 202601 report recorded $192,668.21 in receipts and $222,037.92 cash on hand.",
      },
      ["s-state-filing"],
      ["s-kpdc-statewide", "s-kpdc-202601"],
    ),
  },
  {
    slug: "eric-lund",
    name: "Eric Lund",
    party: "NP",
    position: "Kansas State Treasurer campaign-finance account holder",
    electionSlug: "kansas-treasurer-2026",
    occupation: "State Treasurer candidate / campaign-finance account holder",
    whoTheyAre:
      "Eric Lund appears in the KPDC statewide index under State Treasurer candidates. This pass did not verify a current Secretary of State filing-row entry or a candidate-controlled platform.",
    recordSummary:
      "Treat Lund as a treasurer-race public-record profile until final filing records clarify whether the KPDC account corresponds to a certified ballot candidate.",
    sources: [
      source({
        id: "s-kpdc-statewide",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        title: "Kansas State Wide Office - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Lund, Eric under State Treasurer candidates",
        ],
      }),
      source({
        id: "s-kpdc-at",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW05EL_AT.pdf",
        title: "Eric S. Lund Appointment of Treasurer",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Appointment-of-treasurer report identifies State Treasurer as the office sought",
        ],
      }),
    ],
    issues: sparseIssues(
      {
        name: "Eric Lund",
        position: "Kansas State Treasurer campaign-finance account holder",
        statusText:
          "KPDC lists Eric Lund under State Treasurer candidates, but this pass did not find Lund on the statewide Secretary-of-State filing mirror used for confirmed ballot rows.",
        statusAction:
          "KPDC's statewide index includes an Eric Lund appointment-of-treasurer link under State Treasurer.",
      },
      ["s-kpdc-statewide", "s-kpdc-at"],
    ),
  },
  {
    slug: "brandon-adams",
    name: "Brandon Adams",
    party: "NP",
    position: "Kansas Governor campaign-finance account holder",
    electionSlug: "kansas-governor-2026",
    occupation: "Governor candidate / campaign-finance account holder",
    whoTheyAre:
      "Brandon Adams appears in KPDC's 2026 statewide campaign-finance index under gubernatorial candidates. Party and final ballot status were not confirmed in the reviewed filing mirror.",
    recordSummary:
      "This profile exists so the site does not miss a public campaign-finance account connected to the governor race. It should remain clearly marked as finance-account confirmed, not final-ballot confirmed.",
    sources: [
      source({
        id: "s-kpdc-statewide",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        title: "Kansas State Wide Office - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Adams, Brandon under gubernatorial candidates",
        ],
      }),
      source({
        id: "s-kpdc-at",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01BA_AT.pdf",
        title: "Brandon Adams Appointment of Treasurer",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Appointment-of-treasurer report identifies Governor as the office sought",
        ],
      }),
    ],
    issues: sparseIssues(
      {
        name: "Brandon Adams",
        position: "Kansas Governor campaign-finance account holder",
        statusText:
          "KPDC lists Brandon Adams under gubernatorial candidates; this pass did not verify a current Secretary-of-State filing-row entry or candidate-controlled platform.",
      },
      ["s-kpdc-statewide", "s-kpdc-at"],
    ),
  },
  {
    slug: "doug-billings",
    name: "Doug Billings",
    party: "R",
    position: "Kansas Governor candidate / campaign-finance account holder",
    electionSlug: "kansas-governor-2026",
    occupation: "Conservative broadcaster / podcaster",
    campaignWebsite: "https://dougbillingsforkansas.com/",
    whereTheyWorship:
      "Campaign and reporting describe Billings in explicitly Christian/conservative terms; that background is descriptive and is not used as a substitute for governance evidence.",
    whoTheyAre:
      "Doug Billings is a conservative broadcaster and Republican governor candidate associated with a 2026 gubernatorial campaign and KPDC account. Reporting also says his SOS candidate-list status changed after a running-mate dispute, so the page must distinguish campaign/account evidence from final ballot certification.",
    recordSummary:
      "The profile captures campaign-account status, candidate-controlled platform themes, and reporting about removal from the Secretary of State candidate list. It should be rechecked against the final SOS list.",
    ownWordsNarrative:
      "Billings's campaign site frames him as a MAGA conservative and lists campaign pillars including Kansas sovereignty, gold and silver, trafficking, government efficiency, taxes, regulation, election integrity, education, property rights, and social-conservative themes.",
    sources: [
      source({
        id: "s-kpdc-statewide",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        title: "Kansas State Wide Office - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Billings, Doug under gubernatorial candidates",
          "KPDC links a 202601 report for Billings",
        ],
      }),
      source({
        id: "s-campaign-home",
        tier: "primary",
        url: "https://dougbillingsforkansas.com/",
        title: "Doug Billings For Kansas Governor 2026",
        publisher: "Doug Billings for Kansas Governor",
        claimsAnchored: [
          "Campaign site presents Billings as a 2026 Kansas Governor candidate",
          "Campaign site lists candidate-controlled policy pillars",
        ],
      }),
      source({
        id: "s-kctv-filed",
        tier: "secondary",
        url: "https://www.kctv5.com/2025/05/05/conservative-podcaster-run-kansas-governor-2026/",
        title: "Conservative podcaster to run for Kansas Governor in 2026",
        publisher: "KCTV5 / WIBW",
        claimsAnchored: [
          "Reporting described Billings as seeking the Kansas Republican Party nomination",
          "Reporting summarized campaign themes including K-DOGE, tax cuts, and regulation cuts",
        ],
      }),
      source({
        id: "s-kcstar-removed",
        tier: "secondary",
        url: "https://www.kansascity.com/news/politics-government/article311905084.html",
        title: "Doug Billings removed from Kansas governor's candidate list",
        publisher: "Kansas City Star",
        claimsAnchored: [
          "Reporting said Billings was removed from the Secretary of State candidate list after a running-mate dispute and legal opinion",
        ],
      }),
    ],
    campaignFinance: {
      totalRaised: "$9,337.09",
      narrative:
        "KPDC 202601 extraction in the audit recorded $9,337.09 receipts, $13,208.88 expenditures, and negative $3,245.30 cash on hand. Reporting also raised disputed allegations around a $2,700 contribution; Billings denied wrongdoing.",
      donors: [],
      reportingPeriod: "KPDC 202601 / 2025 reporting period",
      source: "KPDC statewide index and 202601 report extraction",
    },
    issues: [
      issue({
        id: "i-ballot-status",
        title: "Ballot / filing status",
        stated:
          "Billings has campaign and KPDC account evidence connected to the 2026 governor race, but reporting says he was removed from the Secretary of State candidate list after a running-mate dispute. Treat final ballot status as unresolved until the final SOS list is checked.",
        sourceIds: ["s-kpdc-statewide", "s-kcstar-removed"],
        actions: [
          {
            id: "a-kpdc-account",
            body:
              "KPDC lists Billings under gubernatorial candidates and links a 202601 finance report.",
            sourceIds: ["s-kpdc-statewide"],
          },
          {
            id: "a-reported-removal",
            body:
              "The Kansas City Star reported Billings was removed from the Secretary of State candidate list after a running-mate dispute and legal opinion.",
            sourceIds: ["s-kcstar-removed"],
          },
        ],
        gap: {
          summary:
            "Campaign/KPDC-account evidence and reported SOS-list status point in different directions; this is a ballot-status conflict, not a policy inference.",
          evidenceIds: ["a-kpdc-account", "a-reported-removal"],
        },
      }),
      issue({
        id: "i-campaign-platform",
        title: "Where they stand on big issues",
        stated:
          "Billings's campaign materials and reporting describe a conservative/MAGA platform including state sovereignty, government efficiency, tax and regulation cuts, pro-life and Second Amendment themes, election integrity, education, property rights, and anti-trafficking themes.",
        sourceIds: ["s-campaign-home", "s-kctv-filed"],
        actions: [
          {
            id: "a-campaign-platform",
            body:
              "The campaign site and launch reporting published candidate-controlled or candidate-attributed platform themes.",
            sourceIds: ["s-campaign-home", "s-kctv-filed"],
          },
        ],
      }),
      issue({
        id: "i-donor-funding",
        title: "Donor / funding information",
        stated:
          "KPDC records provide a finance-report path for Billings, and reporting separately describes disputed accusations about a contribution; the candidate denied wrongdoing.",
        sourceIds: ["s-kpdc-statewide", "s-kcstar-removed"],
        actions: [
          {
            id: "a-finance-report",
            body:
              "Audit extraction from KPDC 202601 recorded receipts, expenditures, and negative cash-on-hand figures for Billings.",
            sourceIds: ["s-kpdc-statewide"],
          },
          {
            id: "a-finance-allegation-reporting",
            body:
              "The Kansas City Star reported allegations involving a $2,700 contribution and said Billings denied wrongdoing.",
            sourceIds: ["s-kcstar-removed"],
          },
        ],
      }),
    ],
  },
  {
    slug: "mark-lane",
    name: "Mark Lane",
    party: "NP",
    position: "Kansas Governor campaign-finance account holder",
    electionSlug: "kansas-governor-2026",
    occupation: "Governor candidate / campaign-finance account holder",
    whoTheyAre:
      "Mark Lane appears in KPDC's 2026 statewide campaign-finance index under gubernatorial candidates. The appointment-of-treasurer report identifies Marcus Mark Lane with Governor as the office sought.",
    recordSummary:
      "This is a public-record profile for a campaign-finance account; party, platform, and final ballot status were not confirmed in this pass.",
    sources: [
      source({
        id: "s-kpdc-statewide",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        title: "Kansas State Wide Office - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Lane, Mark under gubernatorial candidates",
        ],
      }),
      source({
        id: "s-kpdc-at",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01ML_AT.pdf",
        title: "Marcus Mark Lane Appointment of Treasurer",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Appointment-of-treasurer report identifies Governor as the office sought",
        ],
      }),
    ],
    issues: sparseIssues(
      {
        name: "Mark Lane",
        position: "Kansas Governor campaign-finance account holder",
        statusText:
          "KPDC lists Mark Lane under gubernatorial candidates; this pass did not verify a current Secretary-of-State filing-row entry or candidate-controlled platform.",
      },
      ["s-kpdc-statewide", "s-kpdc-at"],
    ),
  },
  {
    slug: "sharilyn-ray",
    name: "Sharilyn Ray",
    party: "NP",
    position: "Kansas Governor campaign-finance account holder",
    electionSlug: "kansas-governor-2026",
    occupation: "Governor candidate / campaign-finance account holder",
    whoTheyAre:
      "Sharilyn Ray appears in KPDC's 2026 statewide campaign-finance index under gubernatorial candidates. Party and final ballot status were not confirmed in the reviewed filing mirror.",
    recordSummary:
      "This profile preserves the campaign-finance account in the site roster while clearly limiting claims to the records found.",
    sources: [
      source({
        id: "s-kpdc-statewide",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        title: "Kansas State Wide Office - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Ray, Sharilyn under gubernatorial candidates",
          "KPDC links a 202601 report for Ray",
        ],
      }),
      source({
        id: "s-kpdc-at",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01SRay_AT.pdf",
        title: "Sharilyn Ray Appointment of Treasurer",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Appointment-of-treasurer report identifies Governor as the office sought",
        ],
      }),
      source({
        id: "s-kpdc-202601",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/ReceiptsExpenditures/SW01SRay_202601.pdf",
        title: "Sharilyn Ray 2026 Receipts and Expenditures",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Report provides Ray's 2025 receipts, expenditures, and cash-on-hand figures for the 2026 cycle",
        ],
      }),
    ],
    campaignFinance: {
      totalRaised: "$7,720.72",
      narrative:
        "KPDC 202601 extraction in the audit recorded $7,720.72 receipts, $7,620.72 expenditures, and $100.00 cash on hand.",
      donors: [],
      reportingPeriod: "KPDC 202601 / 2025 reporting period",
      source: "KPDC Sharilyn Ray 202601 report",
    },
    issues: sparseIssues(
      {
        name: "Sharilyn Ray",
        position: "Kansas Governor campaign-finance account holder",
        statusText:
          "KPDC lists Sharilyn Ray under gubernatorial candidates; this pass did not verify a current Secretary-of-State filing-row entry or candidate-controlled platform.",
        financeStatement:
          "KPDC links a 202601 receipts-and-expenditures report for Ray.",
        financeAction:
          "Audit extraction recorded $7,720.72 receipts and $100.00 cash on hand.",
      },
      ["s-kpdc-statewide", "s-kpdc-at"],
      ["s-kpdc-statewide", "s-kpdc-202601"],
    ),
  },
  {
    slug: "ric-koehn",
    name: "Ric Koehn",
    party: "NP",
    position: "Kansas Insurance Commissioner campaign-finance account holder",
    electionSlug: "kansas-insurance-2026",
    occupation: "Insurance Commissioner candidate / campaign-finance account holder",
    whoTheyAre:
      "Ric Koehn appears in KPDC's statewide campaign-finance index under Insurance Commissioner candidates. This pass did not verify a current statewide filing-row entry.",
    recordSummary:
      "This profile keeps the insurance-race roster complete against KPDC account data while distinguishing account status from final ballot status.",
    sources: [
      source({
        id: "s-kpdc-statewide",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        title: "Kansas State Wide Office - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Koehn, Ric under Insurance Commissioner candidates",
        ],
      }),
      source({
        id: "s-kpdc-at",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03RK_AT.pdf",
        title: "Ric Koehn Appointment of Treasurer",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Appointment-of-treasurer report identifies Insurance Commissioner as the office sought",
        ],
      }),
    ],
    issues: sparseIssues(
      {
        name: "Ric Koehn",
        position: "Kansas Insurance Commissioner campaign-finance account holder",
        statusText:
          "KPDC lists Ric Koehn under Insurance Commissioner candidates; this pass did not verify a current Secretary-of-State filing-row entry or candidate-controlled platform.",
      },
      ["s-kpdc-statewide", "s-kpdc-at"],
    ),
  },
  {
    slug: "michelle-cunningham",
    name: "Michelle Cunningham",
    party: "NP",
    position: "Kansas State Board of Education District 5 campaign-finance account holder",
    electionSlug: "sboe-district-5",
    occupation: "State Board of Education candidate / campaign-finance account holder",
    whoTheyAre:
      "Michelle Cunningham appears in KPDC's State Board of Education odd-district index under District 5. Party, platform, and final ballot status were not confirmed in this pass.",
    recordSummary:
      "This profile exists because the SBOE District 5 roster was missing current KPDC account entries and incorrectly treated the current officeholder profile as the only 2026 candidate view.",
    sources: [
      source({
        id: "s-kpdc-sboe-index",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/BOELinksOdd2026EC.htm",
        title: "State Board of Education Odd Districts - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Michelle Cunningham in District 5",
        ],
      }),
      source({
        id: "s-kpdc-at",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/Treasurers/BOE05MC_AT.pdf",
        title: "Michelle Cunningham Appointment of Treasurer",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Appointment-of-treasurer PDF is linked from the District 5 KPDC index",
        ],
      }),
    ],
    issues: sparseIssues(
      {
        name: "Michelle Cunningham",
        position: "Kansas State Board of Education District 5 campaign-finance account holder",
        statusText:
          "KPDC lists Michelle Cunningham in the State Board of Education District 5 finance index; this pass did not verify a final certified candidate list.",
      },
      ["s-kpdc-sboe-index", "s-kpdc-at"],
    ),
  },
  {
    slug: "lorie-wood",
    name: "Lorie Wood",
    party: "NP",
    position: "Kansas State Board of Education District 5 campaign-finance account holder",
    electionSlug: "sboe-district-5",
    occupation: "State Board of Education candidate / campaign-finance account holder",
    whoTheyAre:
      "Lorie Wood appears in KPDC's State Board of Education odd-district index under District 5. The appointment-of-treasurer report identifies State Board of Education District 5 as the office sought.",
    recordSummary:
      "This profile captures the SBOE District 5 campaign-finance record and avoids treating absence of a broader platform as a position.",
    sources: [
      source({
        id: "s-kpdc-sboe-index",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/BOELinksOdd2026EC.htm",
        title: "State Board of Education Odd Districts - 2026 Election Cycle",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "KPDC index lists Lorie Wood in District 5",
        ],
      }),
      source({
        id: "s-kpdc-at",
        tier: "primary",
        url: "https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/Treasurers/BOE05LW_AT.pdf",
        title: "Lorie Wood Appointment of Treasurer",
        publisher: "Kansas Governmental Ethics Commission / KPDC",
        claimsAnchored: [
          "Appointment-of-treasurer report identifies State Board of Education District 5 as the office sought",
        ],
      }),
    ],
    issues: sparseIssues(
      {
        name: "Lorie Wood",
        position: "Kansas State Board of Education District 5 campaign-finance account holder",
        statusText:
          "KPDC lists Lorie Wood in the State Board of Education District 5 finance index; this pass did not verify a final certified candidate list.",
        statusAction:
          "KPDC links a Lorie Wood appointment-of-treasurer report for State Board of Education District 5.",
      },
      ["s-kpdc-sboe-index", "s-kpdc-at"],
    ),
  },
];

function candidateYaml(profile) {
  return {
    slug: profile.slug,
    generated: new Date().toISOString(),
    agent: "codex candidate-completeness generator",
    candidate_metadata: {
      slug: profile.slug,
      name: profile.name,
      party: profile.party,
      position: profile.position,
      electionSlug: profile.electionSlug,
      incumbent: profile.incumbent ?? false,
      occupation: profile.occupation,
      campaignWebsite: profile.campaignWebsite,
      whoTheyAre: profile.whoTheyAre,
      recordSummary: profile.recordSummary,
      ownWordsNarrative: profile.ownWordsNarrative,
      whereTheyWorship: profile.whereTheyWorship,
      social_presence_note:
        profile.socialResearchNote ??
        "Public social-media follows, likes, comments, and reposts were not treated as beliefs. This pass records only issue-relevant public observations found in the candidate-controlled or official source set.",
    },
    sources: profile.sources,
    issues: profile.issues,
    campaign_finance: profile.campaignFinance ?? {
      totalRaised:
        profile.financeStatement ??
        "Not itemized in the reviewed public records for this pass",
      narrative:
        profile.financeStatement ??
        "No donor-by-donor public finance interpretation is made from the available records in this pass.",
      donors: [],
      reportingPeriod: "Most recent public record reviewed",
      source: profile.sources[0]?.title ?? "Candidate completeness pass",
      sourceIds: [profile.sources[0]?.id].filter(Boolean),
    },
    editorial_notes: [
      "Generated from the separate candidate-completeness audit so newly discovered names have individual v2 profile artifacts.",
      "Sparse profiles are intentionally labeled as sparse. The page may say no candidate-controlled issue platform was found, but it does not infer positions from party, faith, follows, likes, comments, or associations.",
      "Final certified ballot status must be rechecked after the 2026 Kansas filing deadline and official list publication.",
    ],
  };
}

function markdown(profile, kind) {
  const issueLines = profile.issues
    .map((item) => `- ${item.title}: ${item.stated.text}`)
    .join("\n");
  return `# ${profile.name} - ${kind}

Generated: ${ACCESSED}
Agent: codex candidate-completeness generator

## Scope

This artifact was created because the candidate-completeness audit found ${profile.name} in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page.

## Current profile status

- Slug: ${profile.slug}
- Position: ${profile.position}
- Election grouping: ${profile.electionSlug}
- Incumbent: ${profile.incumbent ? "yes" : "no"}

## Evidence summary

${issueLines}

## Source handling

Primary sources are treated first. Candidate-controlled campaign pages are used for stated positions. Social-media or online-presence observations are not used to infer belief unless the observed item itself is issue-relevant and cited.
`;
}

for (const profile of profiles) {
  const dir = join(MEMORY_CANDIDATES, profile.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "v2-issues.yaml"),
    `${JSON.stringify(candidateYaml(profile), null, 2)}\n`,
  );
  writeFileSync(join(dir, "sleuth-pass.md"), markdown(profile, "sleuth pass"));
  writeFileSync(join(dir, "raw-dump-v2.md"), markdown(profile, "raw dump v2"));
  writeFileSync(join(dir, "social-harvest.md"), markdown(profile, "social harvest"));
  writeFileSync(join(dir, "in-their-own-words.md"), markdown(profile, "in their own words"));
}

console.log(`Wrote completeness artifacts for ${profiles.length} candidates.`);
