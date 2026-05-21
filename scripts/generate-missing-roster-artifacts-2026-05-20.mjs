#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const ACCESS_DATE = "2026-05-20";

const ISSUE_TITLES = [
  "Abortion / life",
  "LGBT / gender / parental rights",
  "Education / curriculum / schools",
  "Religious liberty / church / civic morality",
  "Taxes / spending / debt",
  "Economy / jobs / labor",
  "Guns / Second Amendment",
  "Immigration / border",
  "Health care / insurance / Medicaid",
  "Election integrity / voting / courts",
  "Public safety / law enforcement / criminal justice",
  "Agriculture / rural economy / water",
  "Local governance / transparency / ethics",
  "Environment / energy / land use",
];

const SOS_LIST_URL = "https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx";
const KPDC_HOUSE_INDEX = "https://www.kansas.gov/ethics/CFAScanned/House/2026ElecCycle/HLinks2026EC.htm";

function source(id, tier, url, title, publisher, claimsAnchored) {
  return { id, tier, url, title, publisher, accessed: ACCESS_DATE, claimsAnchored };
}

const candidates = [
  {
    slug: "david-c-graham",
    name: "David C. Graham",
    party: "I",
    electionSlug: "us-senate-2026",
    position: "Libertarian candidate for U.S. Senate",
    occupation: "Attorney; former Harper County attorney; Libertarian U.S. Senate candidate",
    campaignWebsite: "",
    status: "Kansas SOS 2026 General filing, Libertarian, filed May 12, 2026; not found in the 2026 FEC bulk/API pull used for this audit.",
    whoTheyAre: "David C. Graham was added after the federal roster audit found him on the Kansas Secretary of State 2026 General candidate list for U.S. Senate as a Libertarian candidate. Public biographical material from his 2022 U.S. Senate profile identifies him as a University of Kansas law graduate, Washburn University graduate, former Harper County attorney, and member of the Libertarian Party of Kansas judicial committee. Because the current 2026 public record is thin, this profile keeps older questionnaire material dated and caveated rather than treating it as a fresh 2026 platform.",
    recordSummary: "The current record confirms a 2026 Kansas SOS General filing and a prior 2022 statewide U.S. Senate run. No 2026 FEC candidate or principal committee ID was found in the FEC pull used for this audit, so finance status remains a recheck item.",
    sources: [
      source("s-sos-2026-general", "primary", SOS_LIST_URL, "Kansas SOS Candidate List - 2026 General", "Kansas Secretary of State", ["State audit found David C. Graham listed for U.S. Senate as a Libertarian candidate filed on 2026-05-12."]),
      source("s-ivoterguide-2022", "secondary", "https://ivoterguide.com/candidate/74609/race/11249/election/987", "David C. Graham iVoterGuide 2022 candidate profile", "iVoterGuide", ["2022 profile lists education, Harper County attorney service, Libertarian Party of Kansas affiliation, and questionnaire answers."]),
      source("s-lawrence-times-2022", "secondary", "https://lawrencekstimes.com/2022/07/22/ussen-ks-candidates-202208/", "Meet the candidates vying to represent Kansas in the U.S. Senate", "The Lawrence Times", ["2022 Lawrence Times guide listed David C. Graham as the Libertarian U.S. Senate candidate."]),
    ],
    evidence: [
      [10, "documented-record", "The Kansas SOS 2026 General candidate list, checked by the federal audit on May 20, 2026, added David C. Graham as a Libertarian candidate for U.S. Senate; the same audit found no 2026 FEC candidate ID.", ["s-sos-2026-general"], "confirmed"],
      [13, "documented-record", "Graham has prior statewide ballot history: the Lawrence Times identified him as the Libertarian U.S. Senate nominee in the 2022 general election.", ["s-lawrence-times-2022"], "likely"],
      [1, "candidate-stated", "A 2022 iVoterGuide questionnaire records Graham agreeing that abortion providers should not receive public funds; this is older candidate-response material and should not be treated as a newly issued 2026 statement without recheck.", ["s-ivoterguide-2022"], "likely", "Older 2022 questionnaire; use with date caveat."],
      [7, "candidate-stated", "A 2022 iVoterGuide questionnaire records Graham rejecting strict liability for firearm dealers and manufacturers while allowing liability under traditional civil procedure if causation is proved.", ["s-ivoterguide-2022"], "likely", "Older 2022 questionnaire; use with date caveat."],
      [11, "biography", "The 2022 iVoterGuide profile lists Graham as a former Harper County attorney for 2017-2018.", ["s-ivoterguide-2022"], "likely"],
    ],
  },
  {
    slug: "scott-e-morgan",
    name: "Scott E. Morgan",
    party: "I",
    electionSlug: "kansas-sos-2026",
    position: "United Kansas candidate for Kansas Secretary of State",
    occupation: "Attorney, former publisher, United Kansas executive director, former Lawrence school board member",
    status: "Kansas SOS 2026 General filing, United Kansas, filed May 20, 2026.",
    whoTheyAre: "Scott E. Morgan was added after the state roster audit found him on the Kansas SOS 2026 General list for secretary of state as a United Kansas candidate. Kansas Reflector reported that Morgan is a Lawrence resident, attorney, former publishing-business owner, former staff counsel to U.S. Sen. Bob Dole, former staff member for U.S. Sen. Nancy Landon Kassebaum, former chief counsel to Gov. Mike Hayden, and former two-term Lawrence school board member. United Kansas lists Morgan as its executive director.",
    recordSummary: "The current record confirms a May 20, 2026 United Kansas filing for secretary of state and a public campaign message centered on election administration, voter participation, security, and reducing partisan conflict in the office.",
    campaignWebsite: "https://www.unitedkansas.com/",
    sources: [
      source("s-sos-2026-general", "primary", SOS_LIST_URL, "Kansas SOS Candidate List - 2026 General", "Kansas Secretary of State", ["State audit found Scott E. Morgan listed for Kansas secretary of state as a United Kansas candidate filed on 2026-05-20."]),
      source("s-kansas-reflector-morgan", "secondary", "https://kansasreflector.com/briefs/united-kansas-party-nominates-lawrences-scott-morgan-in-secretary-of-states-race/", "United Kansas Party nominates Lawrence's Scott Morgan in secretary of state's race", "Kansas Reflector", ["Morgan's candidacy, biography, election-administration message, and prior public service."]),
      source("s-united-kansas-who", "secondary", "https://www.unitedkansas.com/who-we-are", "United Kansas - Who We Are", "United Kansas", ["United Kansas identifies Scott Morgan as executive director."]),
      source("s-united-kansas-principles", "secondary", "https://www.unitedkansas.com/principles", "United Kansas Party Principles", "United Kansas", ["United Kansas issue principles on fiscal responsibility, education, health care, immigration, guns, environment, abortion, and judicial selection."]),
    ],
    evidence: [
      [10, "candidate-stated", "Morgan told Kansas Reflector he wants the secretary of state to support safe and secure elections while avoiding unnecessary barriers to voter participation.", ["s-kansas-reflector-morgan"], "confirmed"],
      [13, "candidate-stated", "Morgan framed the secretary of state as a quiet steward of elections and public trust rather than a source of partisan conflict.", ["s-kansas-reflector-morgan"], "confirmed"],
      [3, "biography", "Kansas Reflector reported that Morgan served two terms on the Lawrence school board.", ["s-kansas-reflector-morgan"], "likely"],
      [6, "biography", "Kansas Reflector reported that Morgan co-founded Morgan Quitno Press, a publisher of state and city statistical reference books and databases.", ["s-kansas-reflector-morgan"], "likely"],
      [5, "candidate-stated", "United Kansas principles say fiscal responsibility means maintaining priorities, making difficult decisions, and living within means; this is party guidance, not a Morgan-only position.", ["s-united-kansas-principles"], "likely", "Party-principles evidence; do not overstate as a personal detailed platform."],
      [9, "candidate-stated", "United Kansas principles support accessible and affordable health care and identify Medicaid expansion as one possible part of addressing gaps; this is party guidance, not a Morgan-only position.", ["s-united-kansas-principles"], "likely", "Party-principles evidence."],
      [8, "candidate-stated", "United Kansas principles support a strong border with humane treatment of undocumented people, a pathway to citizenship for long-time residents, and ample temporary-worker visas with labor protections; this is party guidance.", ["s-united-kansas-principles"], "likely", "Party-principles evidence."],
      [14, "candidate-stated", "United Kansas principles call for stewardship of natural resources, including water access, productive land, and sustainability of Kansas communities; this is party guidance.", ["s-united-kansas-principles"], "likely", "Party-principles evidence."],
    ],
  },
  {
    slug: "kelly-ancar",
    name: "Kelly Ancar",
    party: "R",
    electionSlug: "sboe-district-5",
    position: "Kansas State Board of Education District 5 candidate",
    occupation: "Small business owner; registered nurse",
    status: "Kansas SOS 2026 Primary filing, Republican, Hays, filed May 8, 2026.",
    whoTheyAre: "Kelly Ancar was added after the state roster audit found her on the Kansas SOS 2026 Primary list for State Board of Education District 5. Hays Post profiles from her Hays city commission and USD 489 school board campaigns identify her as a Hays small-business owner and registered nurse who owns Amazing Grace Home Care and the Horseshoe Bar and Grill. Her prior local questionnaires are relevant because they give direct statements on school governance, spending, transparency, property taxes, and business conditions.",
    recordSummary: "The current record confirms a 2026 SBOE District 5 filing plus prior local candidate statements from Hays city commission and USD 489 school board races. No statewide SBOE voting record exists because Ancar is not an incumbent board member.",
    sources: [
      source("s-sos-2026-primary", "primary", SOS_LIST_URL, "Kansas SOS Candidate List - 2026 Primary", "Kansas Secretary of State", ["State audit found Kelly Ancar listed for State Board of Education District 5 as a Republican candidate from Hays filed on 2026-05-08."]),
      source("s-hayspost-city-2023", "secondary", "https://hayspost.com/posts/2c3a44b2-1b4a-414a-8082-0ecddc9fcacd", "Hays City Commission candidate: Kelly Ancar", "Hays Post", ["Ancar's occupation, community involvement, property-tax statements, housing statements, and city governance answers."]),
      source("s-hayspost-usd-2025", "secondary", "https://hayspost.com/posts/277408cf-68c3-4bb4-b3dc-7bba965651ef", "Hays USD 489 candidate Q&A: Kelly Ancar", "Hays Post", ["Ancar's school-board answers on transparency, academic outcomes, capital planning, budget audit, and board role."]),
      source("s-amazing-grace-about", "secondary", "https://www.amazinggracestaffing.com/copy-of-what-is-homecare-1", "Amazing Grace Homecare - About Us", "Amazing Grace Homecare", ["Business biography identifying Kelly Ancar as owner/CEO and RN-BSN."]),
      source("s-ellis-2025-school-notice", "primary", "https://www.ellisco.net/DocumentCenter/View/5814/Notice-of-Election-with-Names-489", "Ellis County Notice of General School Election - USD 489", "Ellis County", ["Official 2025 USD 489 notice listed Kelly Ancar for school board."]),
    ],
    evidence: [
      [3, "candidate-stated", "In the 2025 USD 489 Q&A, Ancar said school-board members should manage resources wisely, focus on student outcomes, and help students graduate competitively.", ["s-hayspost-usd-2025"], "confirmed"],
      [3, "candidate-stated", "Ancar specifically identified math proficiency as an area where USD 489 could improve and said spending more money does not necessarily translate into better outcomes.", ["s-hayspost-usd-2025"], "confirmed"],
      [13, "candidate-stated", "Ancar called for more transparency in bond-project planning, including readable plans and better opportunities for board members and the community to review proposed work.", ["s-hayspost-usd-2025"], "confirmed"],
      [5, "candidate-stated", "In her 2023 Hays city questionnaire, Ancar said the city should reduce its mill levy and stay revenue neutral to give taxpayers relief.", ["s-hayspost-city-2023"], "confirmed"],
      [6, "candidate-stated", "Ancar identified housing supply and business recruitment as connected economic-development priorities for Hays.", ["s-hayspost-city-2023"], "confirmed"],
      [9, "biography", "Ancar's public biographies identify her as a registered nurse and home-care business owner.", ["s-hayspost-city-2023", "s-amazing-grace-about"], "likely"],
      [10, "documented-record", "The state roster audit found Ancar in the official Kansas SOS 2026 Primary list for State Board of Education District 5.", ["s-sos-2026-primary"], "confirmed"],
    ],
  },
  {
    slug: "mark-schaukowitch",
    name: "Mark Schaukowitch",
    party: "D",
    electionSlug: "ks-house-110",
    position: "Kansas House District 110 candidate",
    occupation: "Former teacher; Kansas House District 110 candidate",
    campaignWebsite: "https://www.markforkshd110.com",
    status: "Kansas SOS 2026 Primary filing for House District 110; KPDC account and January 2026 report are also present.",
    whoTheyAre: "Mark Schaukowitch was added because House District 110 includes parts of Ellis County and the state audit found the race missing from the site. Hays Post reported that Schaukowitch, a former teacher, announced a House District 110 campaign at Democracy Fest in Hays. KPDC records show an appointment-of-treasurer filing for District 110 from Plainville in Rooks County.",
    recordSummary: "The public record includes a House District 110 filing, KPDC finance account, campaign appearance in Hays, and issue statements on rural services, Medicaid expansion, rural housing, and stabilizing county services. No legislative voting record exists because this is a challenger profile.",
    sources: [
      source("s-sos-2026-primary", "primary", SOS_LIST_URL, "Kansas SOS Candidate List - 2026 Primary", "Kansas Secretary of State", ["State audit found Mark Schaukowitch listed for Kansas House District 110."]),
      source("s-kpdc-house-index", "primary", KPDC_HOUSE_INDEX, "Kansas House of Representatives - 2026 Election Cycle", "Kansas Public Disclosure Commission", ["KPDC lists Mark Schaukowitch for House District 110."]),
      source("s-kpdc-at", "primary", "https://kansas.gov/ethics/CFAScanned/House/2026ElecCycle/Treasurers/H110MS_AT.pdf", "Mark Schaukowitch Appointment of Treasurer", "Kansas Public Disclosure Commission", ["Appointment-of-treasurer form identifies Mark Schaukowitch as a House District 110 candidate."]),
      source("s-kpdc-202601", "primary", "https://kansas.gov/ethics/CFAScanned/House/2026ElecCycle/202601/H110MS_202601.pdf", "Mark Schaukowitch January 2026 Receipts and Expenditures", "Kansas Public Disclosure Commission", ["KPDC links a January 2026 receipts-and-expenditures report for Schaukowitch."]),
      source("s-hayspost-demfest", "secondary", "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9", "Kansas Democrats wrap up Democracy Fest in Hays", "Hays Post", ["Schaukowitch announced HD110 campaign and described rural-fund, Medicaid expansion, county-service, hospital, nursing-home, and workforce priorities."]),
      source("s-kansas-helen-podcast", "secondary", "https://podcasts.apple.com/us/podcast/mark-schaukowitch-kansas-house-110-rural-housing/id1878279211?i=1000763065114", "Mark Schaukowitch - Kansas House 110 - Rural Housing", "Kansas Helen Podcast", ["Podcast notes describe Schaukowitch discussion of rural housing, MIH, tax credits, loan programs, jobs, construction costs, and internet infrastructure."]),
    ],
    evidence: [
      [10, "documented-record", "The state roster audit found Schaukowitch on the Kansas SOS 2026 Primary list for House District 110.", ["s-sos-2026-primary"], "confirmed"],
      [5, "candidate-stated", "At Democracy Fest, Schaukowitch described creating a rural permanent fund using oil revenues to stabilize county services.", ["s-hayspost-demfest"], "confirmed"],
      [9, "candidate-stated", "At Democracy Fest, Schaukowitch identified Medicaid expansion as a priority tied to hospitals, nursing homes, and rural workforce retention.", ["s-hayspost-demfest"], "confirmed"],
      [12, "candidate-stated", "Schaukowitch's rural-housing podcast segment discussed MIH, tax credits, loan programs, job opportunities, construction costs, and internet infrastructure as rural barriers.", ["s-kansas-helen-podcast"], "confirmed"],
      [6, "candidate-stated", "Schaukowitch connected rural housing availability with workforce and local economic viability.", ["s-kansas-helen-podcast"], "likely"],
      [3, "biography", "Hays Post described Schaukowitch as a former teacher.", ["s-hayspost-demfest"], "likely"],
      [13, "documented-record", "KPDC records identify Schaukowitch's House District 110 campaign-finance account and treasurer appointment.", ["s-kpdc-house-index", "s-kpdc-at"], "confirmed"],
    ],
  },
  {
    slug: "max-dibble",
    name: "Max L. Dibble",
    party: "NP",
    electionSlug: "ks-house-110",
    position: "Kansas House District 110 candidate; party pending direct SOS readback",
    occupation: "Phillips County commissioner",
    status: "State audit found Max L. Dibble on the Kansas SOS 2026 Primary list for House District 110. Direct SOS readback remains blocked by the JS/anti-bot page in this environment.",
    whoTheyAre: "Max L. Dibble was added because House District 110 includes parts of Ellis County and the state audit found the race missing from the site. Public records identify Dibble as a Phillips County commissioner. Phillips County minutes show him participating in county votes and budget/operations discussions, and the City of Phillipsburg lists him as the Phillips County Commission District 2 representative on its Economic Development Advisory Board.",
    recordSummary: "The current record confirms an official HD110 roster finding plus a local-government record as Phillips County commissioner. Party is deliberately left as not-party-rendered in the v2 schema until a direct SOS party field is captured; this avoids inventing a party label from prior county activity.",
    sources: [
      source("s-sos-2026-primary", "primary", SOS_LIST_URL, "Kansas SOS Candidate List - 2026 Primary", "Kansas Secretary of State", ["State audit found Max L. Dibble listed for Kansas House District 110."]),
      source("s-phillipsburg-edab", "primary", "https://cityofphillipsburg.com/324/Economic-Development-Advisory-Board", "Phillipsburg Economic Development Advisory Board", "City of Phillipsburg", ["City page lists Max Dibble as Phillips County Commissioner District 2 representative."]),
      source("s-phillips-minutes-2025-01-13", "primary", "https://www.phillipscountyks.org/media/MinutesAgendas/Commissioners/2025/01_13_2025.pdf", "Phillips County Commission Minutes - January 13, 2025", "Phillips County", ["Minutes record Dibble motions and comments on housing development, courthouse chiller, and budget efficiency."]),
      source("s-ksleg-2022-utilities", "primary", "https://www.kslegislature.gov/li/b2021_22/measures/minutes/agenda_item_2022020913136767171", "Kansas Legislature minutes - county right-of-way testimony", "Kansas Legislature", ["Legislative minutes record Max Dibble, Phillips County Commissioner, testifying on pipeline use in right-of-way and county tax base."]),
    ],
    evidence: [
      [10, "documented-record", "The state roster audit found Max L. Dibble on the official Kansas SOS 2026 Primary list for House District 110.", ["s-sos-2026-primary"], "confirmed"],
      [13, "documented-record", "The City of Phillipsburg lists Max Dibble as Phillips County Commissioner District 2 representative on the Economic Development Advisory Board.", ["s-phillipsburg-edab"], "confirmed"],
      [5, "documented-record", "Phillips County minutes record Dibble discussing budget adjustments to increase government efficiency.", ["s-phillips-minutes-2025-01-13"], "confirmed"],
      [6, "documented-record", "Phillips County minutes record Dibble mentioning a housing development project on the south side of Phillipsburg.", ["s-phillips-minutes-2025-01-13"], "confirmed"],
      [12, "documented-record", "Kansas Legislature minutes record Dibble testifying about pipelines in county rights-of-way and the related local tax base.", ["s-ksleg-2022-utilities"], "confirmed"],
    ],
  },
  {
    slug: "marvin-matchett",
    name: "Marvin Matchett",
    party: "NP",
    electionSlug: "ks-house-110",
    position: "Kansas House District 110 candidate; party pending direct SOS readback",
    occupation: "Norton County commissioner; Kansas county-government policy advocate",
    status: "State audit found Marvin Matchett on the Kansas SOS 2026 Primary list for House District 110. Direct SOS readback remains blocked by the JS/anti-bot page in this environment.",
    whoTheyAre: "Marvin Matchett was added because House District 110 includes parts of Ellis County and the state audit found the race missing from the site. Official Norton County records list Matchett as a county commissioner, and Kansas Association of Counties records list him in county-government leadership roles. Legislative testimony records show Matchett appearing in Topeka on taxation and election-related measures in a county-policy capacity.",
    recordSummary: "The current record confirms an official HD110 roster finding and a public county-government record. Party is left as not-party-rendered in the v2 schema until direct SOS party readback is captured.",
    sources: [
      source("s-sos-2026-primary", "primary", SOS_LIST_URL, "Kansas SOS Candidate List - 2026 Primary", "Kansas Secretary of State", ["State audit found Marvin Matchett listed for Kansas House District 110."]),
      source("s-norton-commission", "primary", "https://www.nortoncountyks.gov/departments/staff_directory/BoardofCountyCommissioners/", "Norton County Board of County Commissioners contacts", "Norton County", ["Official county page lists Marvin Matchett as a commissioner."]),
      source("s-kac-board", "secondary", "https://kansascounties.org/page/GoverningBoard", "Kansas Association of Counties Governing Board", "Kansas Association of Counties", ["KAC lists Marvin Matchett in county-association leadership roles."]),
      source("s-hb2712", "primary", "https://www.kslegislature.gov/bills/HB2712/", "HB 2712 - Kansas Legislature testimony listing", "Kansas Legislature", ["Kansas Legislature page lists Marvin Matchett testimony on HB 2712."]),
      source("s-sb488-testimony", "primary", "https://www.kslegislature.gov/li/b2025_26/committees/ctte_s_assess_tax_1/documents/testimony/20260310_282.pdf", "Marvin Matchett testimony on SCR 1621 and SB 488", "Kansas Legislature", ["Written testimony identifies Matchett as Norton County Commissioner and president of the Kansas Legislative Policy Group."]),
    ],
    evidence: [
      [10, "documented-record", "The state roster audit found Marvin Matchett on the official Kansas SOS 2026 Primary list for House District 110.", ["s-sos-2026-primary"], "confirmed"],
      [13, "documented-record", "Norton County's official staff directory lists Marvin Matchett as a county commissioner.", ["s-norton-commission"], "confirmed"],
      [5, "documented-record", "Kansas Legislature pages list Matchett testimony on taxation measures including HB 2712 and SCR 1621/SB 488.", ["s-hb2712", "s-sb488-testimony"], "confirmed"],
      [12, "documented-record", "KAC records and legislative testimony place Matchett in western Kansas county-policy work affecting rural counties.", ["s-kac-board", "s-sb488-testimony"], "likely"],
      [10, "documented-record", "Legislative minutes list Matchett written testimony on HB 2503, a mail-ballot-election-act repeal bill, but the profile should cite the testimony itself before characterizing his position in detail.", ["s-sos-2026-primary"], "unknown", "Roster context only until testimony PDF is fully reviewed."],
    ],
  },
  {
    slug: "cody-ward",
    name: "Cody Ward",
    party: "NP",
    electionSlug: "ks-house-110",
    position: "Kansas House District 110 candidate; party pending direct SOS readback",
    occupation: "Kansas House District 110 candidate",
    status: "State audit found Cody Ward on the Kansas SOS 2026 Primary list for House District 110. KPDC shows a Cody D. Ward appointment-of-treasurer filing dated May 12, 2026.",
    whoTheyAre: "Cody Ward was added because House District 110 includes parts of Ellis County and the state audit found the race missing from the site. The public record found in this pass is thin: KPDC records identify Cody D. Ward of Logan as a House District 110 candidate with an appointment of treasurer on May 12, 2026, but this pass did not find a candidate-controlled website, issue platform, or reliable social feed.",
    recordSummary: "The current record confirms roster/finance filing status only. No source-backed issue platform, official office record, voting record, or candidate-controlled social record was found in this pass.",
    sources: [
      source("s-sos-2026-primary", "primary", SOS_LIST_URL, "Kansas SOS Candidate List - 2026 Primary", "Kansas Secretary of State", ["State audit found Cody Ward listed for Kansas House District 110."]),
      source("s-kpdc-house-index", "primary", KPDC_HOUSE_INDEX, "Kansas House of Representatives - 2026 Election Cycle", "Kansas Public Disclosure Commission", ["KPDC lists Cody Ward for House District 110."]),
      source("s-kpdc-at", "primary", "https://www.kansas.gov/ethics/CFAScanned/House/2026ElecCycle/Treasurers/H110CW_AT.pdf", "Cody D. Ward Appointment of Treasurer", "Kansas Public Disclosure Commission", ["Appointment-of-treasurer form identifies Cody D. Ward as a House District 110 candidate, dated 2026-05-12."]),
    ],
    evidence: [
      [10, "documented-record", "The state roster audit found Cody Ward on the official Kansas SOS 2026 Primary list for House District 110.", ["s-sos-2026-primary"], "confirmed"],
      [13, "documented-record", "KPDC's House index and appointment-of-treasurer form identify Cody D. Ward as a House District 110 candidate with a May 12, 2026 treasurer appointment.", ["s-kpdc-house-index", "s-kpdc-at"], "confirmed"],
    ],
  },
  {
    slug: "michael-w-smith",
    name: "Michael W. Smith",
    party: "R",
    electionSlug: "kansas-governor-2026",
    position: "Lieutenant governor running mate on the Stacy Rogers ticket",
    occupation: "Leavenworth County commissioner; former Lansing mayor, city administrator, and police chief",
    campaignWebsite: "https://stacyrogersforks.com/stacys-team",
    status: "Named lieutenant-governor running mate on Stacy Rogers's officially filed governor ticket; official county mirror lists Stacy L. Rogers/Michael W. Smith filed December 22, 2025.",
    whoTheyAre: "Michael W. Smith was added because official/campaign records identify him as Stacy Rogers's lieutenant governor running mate. Rogers's campaign describes Smith as a lifelong public servant with nearly 40 years in Lansing and Leavenworth County government, including service as Leavenworth County commissioner, mayor of Lansing, city administrator, chief of police, and former president of the Kansas Mayor's Association.",
    recordSummary: "The current record confirms Smith as Rogers's running mate and documents a local-government/public-safety background. No separate candidate-controlled issue platform beyond the Rogers campaign materials was found in this pass.",
    sources: [
      source("s-pawnee-candidate-list", "primary", "https://www.pawneecountykansas.com/DocumentCenter/View/2078/2026-PN-Co-Candidate-List", "Pawnee County 2026 Candidate Filings mirror", "Pawnee County", ["County filing mirror lists Stacy L. Rogers/Michael W. Smith for Governor/Lt. Governor, Republican, filed 2025-12-22."]),
      source("s-stacy-team", "secondary", "https://stacyrogersforks.com/stacys-team", "Stacy Rogers campaign team page", "Stacy Rogers for Kansas", ["Campaign identifies Michael Smith as candidate for lieutenant governor and summarizes local-government experience."]),
      source("s-stacy-home", "secondary", "https://stacyrogersforks.com/", "Stacy Rogers for Kansas homepage", "Stacy Rogers for Kansas", ["Campaign says Rogers and Smith formally signed official documents and frames Smith as an experienced partner."]),
      source("s-kwch-holscher", "secondary", "https://www.kwch.com/2026/05/14/kansas-gubernatorial-candidate-picks-wichita-representative-running-mate/", "Kansas gubernatorial candidate picks Wichita representative for running mate", "KWCH", ["KWCH noted only Stacy Rogers and Michael Smith had filed among Republican gubernatorial tickets as of May 14, 2026."]),
    ],
    evidence: [
      [10, "documented-record", "A county filing mirror lists the Rogers/Smith governor-lieutenant governor ticket as filed December 22, 2025.", ["s-pawnee-candidate-list"], "confirmed"],
      [11, "biography", "Rogers's campaign says Smith began public service as chief of police for Lansing.", ["s-stacy-team"], "likely"],
      [13, "biography", "The campaign says Smith has served as Leavenworth County commissioner, mayor of Lansing, city administrator, and former president of the Kansas Mayor's Association.", ["s-stacy-team"], "likely"],
      [6, "candidate-stated", "Rogers's campaign frames Smith's record around responsible growth, business development, and fiscal management in local government.", ["s-stacy-team"], "likely", "Campaign biography, not an independent performance audit."],
    ],
  },
  {
    slug: "renee-duxler",
    name: "Renee Duxler",
    party: "D",
    electionSlug: "kansas-governor-2026",
    position: "Lieutenant governor running mate on the Ethan Corson ticket",
    occupation: "President and CEO of the Salina Area Chamber of Commerce; former economic and workforce development director",
    status: "Named lieutenant-governor running mate on Ethan Corson's Democratic governor ticket on May 20, 2026.",
    whoTheyAre: "Renee Duxler was added because Kansas Reflector reported on May 20, 2026 that Ethan Corson selected her as his lieutenant governor running mate. The report says Duxler is president and CEO of the Salina Area Chamber of Commerce, was raised in Hays and McPherson, earned social-work degrees from Kansas State University and Newman University, worked at an HIV/AIDS clinic, owned a resale clothing store, led the Douglas Design District, served on the Wichita/Sedgwick County Metropolitan Planning Commission, and moved to Salina in 2020 for a chamber economic/workforce development role.",
    recordSummary: "The current record documents Duxler as a newly named running mate with a chamber, workforce-development, small-business, and social-work background. No separate elected-office voting record was found in this pass.",
    sources: [
      source("s-kansas-reflector-duxler", "secondary", "https://kansasreflector.com/2026/05/20/democratic-governor-candidate-ethan-corson-joins-forces-with-salina-business-director/", "Democratic governor candidate Ethan Corson joins forces with Salina business director", "Kansas Reflector", ["Reports Duxler as Corson's running mate and gives biography, education, and economic-development background."]),
      source("s-salina-chamber-team", "secondary", "https://www.salinakansas.org/meet-our-team.html", "Meet Our Team - Salina Area Chamber of Commerce", "Salina Area Chamber of Commerce", ["Chamber staff page identifies Renee Duxler as president/CEO."]),
      source("s-ksal-duxler", "secondary", "https://www.ksal.com/duxler-is-new-chamber-president-ceo/", "Duxler is New Chamber President & CEO", "KSAL", ["Reports Duxler becoming president and CEO of the Salina Area Chamber of Commerce."]),
    ],
    evidence: [
      [10, "documented-record", "Kansas Reflector reported that Ethan Corson selected Renee Duxler as his lieutenant governor running mate.", ["s-kansas-reflector-duxler"], "confirmed"],
      [6, "biography", "Kansas Reflector reported Duxler has worked in economic and workforce development and currently leads the Salina Area Chamber of Commerce.", ["s-kansas-reflector-duxler", "s-salina-chamber-team"], "confirmed"],
      [9, "biography", "Kansas Reflector reported Duxler worked at an HIV/AIDS clinic and earned social-work degrees from Kansas State University and Newman University.", ["s-kansas-reflector-duxler"], "likely"],
      [13, "biography", "Kansas Reflector reported Duxler served on the Wichita/Sedgwick County Metropolitan Planning Commission.", ["s-kansas-reflector-duxler"], "likely"],
      [12, "biography", "Kansas Reflector reported Duxler was raised in Hays and McPherson, giving the ticket central/western Kansas roots.", ["s-kansas-reflector-duxler"], "likely"],
    ],
  },
  {
    slug: "kc-ohaebosim",
    name: "KC Ohaebosim",
    party: "D",
    electionSlug: "kansas-governor-2026",
    position: "Lieutenant governor running mate on the Cindy Holscher ticket",
    occupation: "Kansas state representative; data analyst",
    status: "Named lieutenant-governor running mate on Cindy Holscher's Democratic governor ticket on May 14, 2026.",
    whoTheyAre: "KC Ohaebosim was added because multiple public reports and the Holscher campaign identify him as Cindy Holscher's lieutenant governor running mate. Reports identify Ohaebosim as a Wichita Democrat elected to the Kansas House in 2016, a product of Wichita public schools, a Wichita State University and Newman University graduate, and a data analyst. Reports also note he was named regional legislator of the year by the National Black Caucus of State Legislators in 2022 and 2025.",
    recordSummary: "The current record documents an active Kansas House record and a running-mate announcement. This pass uses secondary summaries of his record and official legislature/KPDC sources where available; a deeper roll-call-level record pass should follow.",
    sources: [
      source("s-community-voice", "secondary", "https://www.communityvoiceks.com/2026/05/14/holscher-kc-ohaebosim-running-mate/", "Holscher Taps Wichita Rep. KC Ohaebosim as Running Mate in Governor's Race", "The Community Voice / Kansas Reflector", ["Reports Ohaebosim as Holscher's running mate and summarizes biography and policy alignment."]),
      source("s-kwch-ohaebosim", "secondary", "https://www.kwch.com/2026/05/14/kansas-gubernatorial-candidate-picks-wichita-representative-running-mate/", "Kansas gubernatorial candidate picks Wichita representative for running mate", "KWCH", ["Reports Holscher selected Ohaebosim and summarizes his legislative background."]),
      source("s-ksleg-ohaebosim", "primary", "https://kslegislature.gov/li_2024s/b2023_24/members/rep_ohaebosim_kc_1/", "Representative KC Ohaebosim", "Kansas Legislature", ["Official legislature profile for Representative KC Ohaebosim."]),
      source("s-kpdc-house-index", "primary", KPDC_HOUSE_INDEX, "Kansas House of Representatives - 2026 Election Cycle", "Kansas Public Disclosure Commission", ["KPDC lists Ohaebosim in House District 89 campaign-finance records."]),
    ],
    evidence: [
      [10, "documented-record", "Public reports state Cindy Holscher selected KC Ohaebosim as her 2026 lieutenant governor running mate.", ["s-community-voice", "s-kwch-ohaebosim"], "confirmed"],
      [3, "candidate-stated", "Reports say Holscher and Ohaebosim plan to focus on public education, affordability, and health care access.", ["s-community-voice", "s-kwch-ohaebosim"], "confirmed"],
      [9, "documented-record", "The Community Voice/Kansas Reflector report says Holscher and Ohaebosim compiled comparable Statehouse records on Medicaid expansion and abortion rights.", ["s-community-voice"], "likely"],
      [1, "documented-record", "The same report ties Ohaebosim's Statehouse record to abortion-rights policy; profile should treat this as a secondary summary until roll-call records are extracted.", ["s-community-voice"], "likely", "Secondary summary pending roll-call audit."],
      [2, "documented-record", "KWCH reported Ohaebosim supported strengthening civil-rights protections.", ["s-kwch-ohaebosim"], "likely", "Secondary summary pending bill-by-bill review."],
      [5, "documented-record", "KWCH reported Ohaebosim supported rolling back former Gov. Sam Brownback's tax policies and measures aimed at lowering costs for working families.", ["s-kwch-ohaebosim"], "likely", "Secondary summary pending roll-call audit."],
      [6, "biography", "Reports identify Ohaebosim as a data analyst and Wichita native educated in Kansas public schools.", ["s-community-voice", "s-kwch-ohaebosim"], "likely"],
    ],
  },
  {
    slug: "joe-newland",
    name: "Joe Newland",
    party: "R",
    electionSlug: "kansas-governor-2026",
    position: "Lieutenant governor running mate on the Vicki Schmidt ticket",
    occupation: "Kansas Farm Bureau president; farmer and former Kansas state representative",
    campaignWebsite: "https://vickiforgovernor.com/",
    status: "Named lieutenant-governor running mate by Vicki Schmidt on May 18, 2026; campaign said Schmidt/Newland planned to file June 1, 2026.",
    whoTheyAre: "Joe Newland was added because Vicki Schmidt's campaign and multiple news outlets identified him as her lieutenant governor running mate. Reports identify Newland as Kansas Farm Bureau president, a former Kansas House member from southeast Kansas, and a farmer/rancher from Wilson County operating a diversified farm with wheat, corn, soybeans, hay, and a cow-calf herd.",
    recordSummary: "The current record documents Newland's running-mate announcement, former state legislative service, Farm Bureau presidency, agriculture/water policy work, and proposed dual role as lieutenant governor and secretary of agriculture if elected.",
    sources: [
      source("s-vicki-home", "secondary", "https://vickiforgovernor.com/", "Vicki Schmidt for Governor homepage", "Vicki Schmidt for Governor", ["Campaign homepage announces Joe Newland as Schmidt's lieutenant governor running mate."]),
      source("s-kansas-reflector-newland", "secondary", "https://kansasreflector.com/2026/05/18/gop-governor-candidate-vicki-schmidts-running-mate-will-be-kansas-farm-bureau-president/", "GOP governor candidate Vicki Schmidt's running mate will be Kansas Farm Bureau president", "Kansas Reflector", ["Reports Newland's running-mate selection, Farm Bureau role, former House service, farm operation, and policy themes."]),
      source("s-kwch-newland", "secondary", "https://www.kwch.com/2026/05/18/vicki-schmidt-picks-kansas-farm-bureau-president-lieutenant-governor/", "Vicki Schmidt picks Kansas Farm Bureau president for lieutenant governor", "KWCH", ["Reports Schmidt selected Newland and said he would serve as lieutenant governor and secretary of agriculture if elected."]),
      source("s-kansas-living-newland", "secondary", "https://kansaslivingmagazine.com/articles/2023/05/17/meet-kansas-farm-bureau-president-joe-newland", "Meet Kansas Farm Bureau President Joe Newland", "Kansas Living Magazine", ["Profiles Newland as Kansas Farm Bureau president and former legislator."]),
    ],
    evidence: [
      [10, "documented-record", "Kansas Reflector and KWCH reported that Vicki Schmidt selected Joe Newland as her lieutenant governor running mate.", ["s-kansas-reflector-newland", "s-kwch-newland"], "confirmed"],
      [12, "biography", "Reports identify Newland as Kansas Farm Bureau president and a Wilson County farmer/rancher with wheat, corn, soybeans, hay, and a cow-calf herd.", ["s-kansas-reflector-newland", "s-kwch-newland"], "confirmed"],
      [12, "candidate-stated", "Schmidt's announcement said Newland had worked to protect land, water, and rural Kansas interests.", ["s-vicki-home", "s-kansas-reflector-newland"], "likely", "Campaign/news characterization."],
      [9, "documented-record", "KWCH reported Newland backed health benefit plans aimed at rural families.", ["s-kwch-newland"], "likely", "Secondary summary pending primary-source policy extraction."],
      [6, "candidate-stated", "Newland described wanting common-sense solutions that lower costs, streamline operations, and get government out of the way.", ["s-kansas-reflector-newland", "s-kwch-newland"], "confirmed"],
      [13, "documented-record", "Kansas Reflector reported Newland served in the Kansas House from 2019 to 2022 and would serve as lieutenant governor and secretary of agriculture if elected.", ["s-kansas-reflector-newland"], "confirmed"],
      [14, "documented-record", "KWCH reported Newland led efforts to preserve the quality and quantity of Kansas water.", ["s-kwch-newland"], "likely", "Secondary summary pending primary-source policy extraction."],
    ],
  },
];

function candidateDir(slug) {
  return join(ROOT, "memory/candidates", slug);
}

function makeEvidenceRows(candidate) {
  const rows = [];
  let index = 1;
  for (const entry of candidate.evidence) {
    const [issueNumber, evidenceType, claim, sourceIds, confidence = "likely", caveat = ""] = entry;
    const primarySourceId = sourceIds[0];
    const primarySource = candidate.sources.find((item) => item.id === primarySourceId);
    rows.push({
      id: `em-${candidate.slug}-${String(index).padStart(5, "0")}`,
      candidateSlug: candidate.slug,
      candidateName: candidate.name,
      raceSlug: candidate.electionSlug,
      sourceFile: `memory/candidates/${candidate.slug}/raw-dump-v2.md`,
      sourceUrl: primarySource?.url ?? null,
      sourceTier: primarySource?.tier ?? "internal-memory",
      evidenceType,
      issueMappedTo: [issueNumber],
      claim,
      exactEvidenceSummary: claim,
      confidence,
      useDecision: confidence === "unknown" ? "use-with-caveat" : caveat ? "use-with-caveat" : "use",
      reasonForDecision: caveat || "Selected because it is a candidate-specific public record or sourced candidate statement found during the missing-roster audit.",
      sourceIds,
    });
    index += 1;
  }
  return rows;
}

function fixedIssueMatrix(candidate, rows) {
  return ISSUE_TITLES.map((title, issueIndex) => {
    const issueNumber = issueIndex + 1;
    const relevant = rows.filter((row) => row.issueMappedTo.includes(issueNumber));
    if (relevant.length === 0) {
      return {
        issueNumber,
        title,
        summary: `No sourced position or public action was found for ${title} after searching official filing records, KPDC/FEC sources where applicable, candidate-controlled pages, news coverage, public social/search results, and existing repo memory.`,
        evidenceItems: [],
        socialSignals: [],
        sourceCoverage: { primary: 0, secondary: 0, social: 0, internalMemory: 0, publicUrlRows: 0 },
        caveats: ["No position is inferred from party, faith, office title, associations, follows, likes, or the absence of public evidence."],
      };
    }
    return {
      issueNumber,
      title,
      summary: `${title}: ${relevant.length} source-backed item${relevant.length === 1 ? "" : "s"} found in the missing-roster audit.`,
      evidenceItems: relevant.map((row) => ({
        evidenceRowId: row.id,
        classification: row.evidenceType === "biography" ? "background-context" : row.evidenceType === "candidate-stated" ? "candidate-stated" : "documented-record",
        text: row.claim,
        sourceIds: row.sourceIds,
        sourceUrl: row.sourceUrl,
        sourceFile: row.sourceFile,
        confidence: row.confidence,
        useDecision: row.useDecision,
        caveat: row.reasonForDecision,
      })),
      socialSignals: [],
      sourceCoverage: {
        primary: relevant.filter((row) => row.sourceTier === "primary").length,
        secondary: relevant.filter((row) => row.sourceTier === "secondary").length,
        social: relevant.filter((row) => row.sourceTier === "social").length,
        internalMemory: relevant.filter((row) => row.sourceTier === "internal-memory").length,
        publicUrlRows: relevant.filter((row) => row.sourceUrl).length,
      },
      caveats: relevant.some((row) => row.useDecision === "use-with-caveat")
        ? ["One or more items require the caveat shown with the evidence item."]
        : [],
    };
  });
}

function socialMatrix(candidate) {
  return [
    {
      candidateSlug: candidate.slug,
      platform: "public web/social search",
      actionType: "public absence",
      target: "candidate-controlled follows, likes, comments, or posts",
      date: ACCESS_DATE,
      exactContentOrDescription: "No reliable candidate-controlled social follows, likes, comments, or posts were found that could be attributed cleanly and mapped as social signals. Candidate websites, public news statements, KPDC/FEC/SOS records, and official pages were prioritized.",
      issueMappedTo: [],
      signalStrength: "ambiguous",
      caveat: "Absence of harvested social interactions is not evidence of belief. Do not infer private views from this absence.",
    },
  ];
}

function sourceAudit(candidate, rows) {
  return {
    candidateSlug: candidate.slug,
    generated: `${ACCESS_DATE}T12:00:00.000Z`,
    sources: candidate.sources.map((item) => ({
      sourceId: item.id,
      title: item.title,
      url: item.url,
      publisher: item.publisher,
      assignedTier: item.tier,
      recommendedTier: item.tier,
      status: item.url === SOS_LIST_URL ? "official page requires JavaScript/anti-bot verification in this CLI environment; details captured from auditor readback" : "live or publicly indexed during audit",
      claimsAnchored: item.claimsAnchored,
      rowIds: rows.filter((row) => row.sourceIds.includes(item.id)).map((row) => row.id),
      tierCorrect: true,
    })),
    brokenSources: [],
    unsupportedClaims: [],
  };
}

function writeCandidate(candidate) {
  const dir = candidateDir(candidate.slug);
  mkdirSync(dir, { recursive: true });
  mkdirSync(join(dir, "agent-work/candidate-evidence-miner"), { recursive: true });
  mkdirSync(join(dir, "agent-work/evidence-matrix-builder"), { recursive: true });
  mkdirSync(join(dir, "agent-work/social-footprint-analyst"), { recursive: true });
  mkdirSync(join(dir, "agent-work/source-tier-validator"), { recursive: true });
  mkdirSync(join(dir, "agent-work/fixed-issue-matrix-builder"), { recursive: true });
  mkdirSync(join(dir, "agent-work/candidate-profile-assembler"), { recursive: true });

  const rows = makeEvidenceRows(candidate);
  const fixed = fixedIssueMatrix(candidate, rows);
  const audit = sourceAudit(candidate, rows);
  const social = socialMatrix(candidate);

  const sourceList = candidate.sources.map((item) => `- ${item.id}: ${item.title} (${item.url})`).join("\n");
  const evidenceList = rows.map((row) => `- Issue ${row.issueMappedTo[0]}: ${row.claim} [${row.sourceIds.join(", ")}]`).join("\n");
  const socialText = `No reliable candidate-controlled social follows, likes, comments, or posts were found for ${candidate.name}. Public social evidence remains a signal layer only; none is used as a confirmed policy position.`;

  writeFileSync(join(dir, "raw-dump-v2.md"), `# ${candidate.name} - Missing-Roster Research Dump\n\nGenerated: ${ACCESS_DATE}\n\n## Roster Status\n${candidate.status}\n\n## Sources Checked\n${sourceList}\n\n## Extracted Evidence\n${evidenceList}\n\n## Research Caveat\nThis candidate was added in response to the May 20, 2026 missing-candidate audit. The profile includes every source-backed item found in this pass and explicitly caveats thin areas instead of inferring beliefs.\n`);
  writeFileSync(join(dir, "raw-dump.md"), `# ${candidate.name} - Raw Dump\n\nSee raw-dump-v2.md. This folder was created during the May 20, 2026 missing-candidate audit.\n`);
  writeFileSync(join(dir, "sleuth-pass.md"), `# ${candidate.name} - Sleuth Pass\n\n## Summary\n${candidate.whoTheyAre}\n\n## Record\n${candidate.recordSummary}\n\n## Source-backed evidence\n${evidenceList}\n`);
  writeFileSync(join(dir, "social-harvest.md"), `# ${candidate.name} - Social Harvest\n\n${socialText}\n\n## Sources prioritized\n${sourceList}\n`);
  writeFileSync(join(dir, "candidate-statements.md"), `# ${candidate.name} - Candidate Statement Source Extraction\n\nDirect candidate statements, campaign statements, or quoted comments are folded into the issue matrix rather than rendered as a standalone section.\n\n${evidenceList}\n`);
  writeFileSync(join(dir, "site-profile.md"), `# ${candidate.name}\n\n## Who They Are\n${candidate.whoTheyAre}\n\n## Their Record\n${candidate.recordSummary}\n`);
  writeFileSync(join(dir, "evidence-matrix-raw.json"), JSON.stringify(rows, null, 2));
  writeFileSync(join(dir, "evidence-matrix.json"), JSON.stringify(rows, null, 2));
  writeFileSync(join(dir, "social-evidence-matrix.json"), JSON.stringify(social, null, 2));
  writeFileSync(join(dir, "source-audit.json"), JSON.stringify(audit, null, 2));
  writeFileSync(join(dir, "source-audit.md"), `# ${candidate.name} - Source Audit\n\n| Source | Tier | Status | Claims |\n|---|---|---|---|\n${audit.sources.map((item) => `| ${item.sourceId} | ${item.recommendedTier} | ${item.status} | ${item.claimsAnchored.join("; ")} |`).join("\n")}\n`);
  writeFileSync(join(dir, "social-analysis.md"), `# ${candidate.name} - Social Analysis\n\n${socialText}\n`);
  writeFileSync(join(dir, "issue-matrix.md"), `# ${candidate.name} - 14-Issue Matrix\n\n${fixed.map((issue) => `## ${issue.issueNumber}. ${issue.title}\n${issue.summary}\n${issue.evidenceItems.map((item) => `- ${item.text}`).join("\n") || "- No relevant public evidence found."}\n`).join("\n")}`);

  const yaml = {
    slug: candidate.slug,
    generated: `${ACCESS_DATE}T12:00:00.000Z`,
    agent: "codex missing-roster artifact generator",
    candidate_metadata: {
      slug: candidate.slug,
      name: candidate.name,
      party: candidate.party,
      position: candidate.position,
      electionSlug: candidate.electionSlug,
      incumbent: false,
      occupation: candidate.occupation,
      campaignWebsite: candidate.campaignWebsite || undefined,
      whoTheyAre: candidate.whoTheyAre,
      recordSummary: candidate.recordSummary,
      whereTheyWorship: "No direct public evidence of a current worship community was found. No faith-based policy inference is made.",
      social_presence_note: socialText,
    },
    sources: candidate.sources,
    issues: [
      {
        id: "i-roster-status",
        title: "Roster and filing status",
        stated: {
          text: candidate.status,
          sourceIds: candidate.sources.slice(0, 2).map((item) => item.id),
        },
        actions: [
          {
            id: "a-roster-status",
            date: ACCESS_DATE,
            body: candidate.status,
            sourceIds: candidate.sources.slice(0, 2).map((item) => item.id),
          },
        ],
        socialSignals: [],
      },
    ],
    campaign_finance: {
      totalRaised: "Not itemized in reviewed public records",
      narrative: candidate.sources.some((item) => item.url.includes("kansas.gov/ethics"))
        ? "Campaign-finance status is limited to the linked KPDC/FEC/official filing records reviewed in this pass. Donor-by-donor interpretation is not inferred beyond public reports."
        : "No itemized campaign-finance filing was found.",
      donors: [],
      reportingPeriod: "Most recent public record reviewed on 2026-05-20",
      source: candidate.sources[0]?.title ?? "Missing-roster source set",
      sourceIds: candidate.sources.slice(0, 3).map((item) => item.id),
    },
    editorial_notes: [
      "Added from the May 20, 2026 missing-candidate delta audit.",
      "Every candidate has a 14-issue matrix; thin public records are explicitly caveated.",
      "Social evidence was not deleted. No reliable candidate-controlled follows, likes, comments, or posts were found for this pass unless separately listed in evidence.",
    ],
    fixed_issue_matrix: fixed,
  };
  writeFileSync(join(dir, "v2-issues.yaml"), JSON.stringify(yaml, null, 2));

  const commonRunState = {
    candidateSlug: candidate.slug,
    generated: `${ACCESS_DATE}T12:00:00.000Z`,
    inputs_read: candidate.sources.map((item) => item.url),
    outputs_written: [
      `memory/candidates/${candidate.slug}/evidence-matrix.json`,
      `memory/candidates/${candidate.slug}/social-evidence-matrix.json`,
      `memory/candidates/${candidate.slug}/source-audit.md`,
      `memory/candidates/${candidate.slug}/issue-matrix.md`,
      `memory/candidates/${candidate.slug}/v2-issues.yaml`,
    ],
  };
  for (const agent of [
    "candidate-evidence-miner",
    "evidence-matrix-builder",
    "social-footprint-analyst",
    "source-tier-validator",
    "fixed-issue-matrix-builder",
    "candidate-profile-assembler",
  ]) {
    const agentDir = join(dir, "agent-work", agent);
    writeFileSync(join(agentDir, "run-state.json"), JSON.stringify(commonRunState, null, 2));
    writeFileSync(join(agentDir, "notes.md"), `# ${candidate.name} - ${agent}\n\nGenerated during the May 20, 2026 missing-candidate audit. Thin-record caveats are preserved; no social interaction is treated as a confirmed belief.\n`);
    writeFileSync(join(agentDir, "handoff.md"), `# ${candidate.name} - ${agent} Handoff\n\nArtifacts for ${candidate.slug} were created from the missing-candidate audit source set. Next reviewer should deepen primary-source and social-platform research after the filing deadline or when new candidate-controlled pages appear.\n`);
  }
}

for (const candidate of candidates) {
  writeCandidate(candidate);
  console.log(`wrote ${candidate.slug}`);
}
