export type ElectionLevel = "Federal" | "State" | "Local" | "Ballot Measure";

export interface Election {
  slug: string;
  name: string;
  level: ElectionLevel;
  date: string;
  jurisdiction: string;
  seats: number;
  status: "Open Seat" | "Incumbent Running" | "N/A";
  candidateCount: number;
  candidateSlugs: string[];
  description: string;
  plainEnglish: string;
  whyItMatters: string;
  jobDescription: string;
}

export const ELECTIONS: Election[] = [
  {
    slug: "us-senate-2026",
    name: "U.S. Senate",
    level: "Federal",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 13,
    candidateSlugs: [
      "roger-marshall",
      "damon-anderson",
      "jason-hart",
      "kevin-latz",
      "patrick-schmidt",
      "christy-cauble-davis",
      "sandy-spidel-neumann",
      "erik-murray",
      "anne-parelkar",
      "michael-soetaert",
      "noah-taylor",
      "adam-hamilton",
      "chase-laporte",
    ],
    description:
      "Roger Marshall faces a crowded field of Democratic challengers plus Republican-side filing activity in one of Kansas's highest-profile races.",
    plainEnglish:
      "Kansas gets only two U.S. senators, and this seat is on the ballot in November 2026. Incumbent Roger Marshall is running again, while Democratic challengers now include Damon Anderson, Jason Hart, Kevin Latz, Patrick Schmidt, Christy Cauble Davis, Sandy Spidel Neumann, Erik Murray, Anne Parelkar, Michael Soetaert, Noah Taylor, and Adam Hamilton. Chase LaPorte remains flagged because federal filing evidence exists, but his profile notes conflicting House/Senate records that require final-list recheck.",
    whyItMatters:
      "U.S. senators vote on judges, war powers, federal spending, farm policy, healthcare, and the national laws that affect Kansas every day. This race shapes who speaks for the entire state in Washington.",
    jobDescription:
      "A U.S. Senator is one of two people who represent your entire state in Washington, D.C. They serve six-year terms and vote on every federal law, confirm or reject Supreme Court justices and cabinet members, approve treaties, and control the federal budget. If you have a problem with Social Security, Medicare, veterans' benefits, farm subsidies, or any federal program, your senator's office is who you call.",
  },
  {
    slug: "ks-01-house-2026",
    name: "KS-01 U.S. House",
    level: "Federal",
    date: "2026-11-03",
    jurisdiction: "Kansas 1st Congressional District",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 5,
    candidateSlugs: [
      "tracey-mann",
      "colin-mcroberts",
      "lauren-reinhold",
      "craig-musser",
      "steven-jacob",
    ],
    description:
      "Tracey Mann is seeking another term in the Big First, with Democratic, independent, and Libertarian challengers already in the field.",
    plainEnglish:
      "If you live in Hays, this is your U.S. House race. Tracey Mann is the incumbent, and Colin McRoberts, Lauren Reinhold, Craig Musser, and Steven Robert Jacob have all appeared in the contest to represent western and central Kansas.",
    whyItMatters:
      "The KS-01 member of Congress becomes the main federal voice for agriculture, water, roads, trade, and rural infrastructure across a huge stretch of Kansas.",
    jobDescription:
      "Your U.S. Representative is the one person in Congress who represents your specific district — not the whole state, just your area. They serve two-year terms, vote on federal laws and spending bills, and are supposed to be your direct voice in Washington on everything from farm policy to highway funding to military spending. If Hays has a federal issue, this is the person whose phone should ring.",
  },
  {
    slug: "kansas-governor-2026",
    name: "Kansas Governor",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 15,
    candidateSlugs: [
      "scott-schwab",
      "vicki-schmidt",
      "ty-masterson",
      "jeff-colyer",
      "philip-sarnecki",
      "charlotte-ohara",
      "stacy-rogers",
      "brandon-adams",
      "doug-billings",
      "joy-eakins",
      "ethan-corson",
      "cindy-holscher",
      "mark-lane",
      "marty-tuley",
      "sharilyn-ray",
    ],
    description:
      "With Laura Kelly term-limited, both parties and multiple campaign-account holders are building a large field for one of the most important open-seat races in Kansas politics.",
    plainEnglish:
      "Kansas will elect a new governor in 2026 because Laura Kelly cannot run again. The site now includes confirmed filing rows where available and KPDC statewide campaign-account records that still need final ballot readback after the filing deadline.",
    whyItMatters:
      "The governor signs or vetoes bills, writes budgets, appoints agency leaders, and shapes policy on education, taxes, roads, public health, and much more.",
    jobDescription:
      "The governor is the boss of Kansas state government. They sign or veto every law the legislature passes, write the state budget, appoint the heads of state agencies, and set the direction on taxes, schools, roads, and healthcare. When there's a disaster, a crisis, or a big policy fight, the governor is the person making the call. Think of it as the CEO of the state.",
  },
  {
    slug: "kansas-ag-2026",
    name: "Kansas Attorney General",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 2,
    candidateSlugs: ["kris-kobach", "chris-mann"],
    description:
      "Kris Kobach is seeking another term as attorney general while Chris Mann runs as the Democratic challenger.",
    plainEnglish:
      "The attorney general is Kansas's top lawyer and one of its most visible statewide offices. Kris Kobach is the incumbent, and Chris Mann is the main challenger on the board right now.",
    whyItMatters:
      "This office decides which lawsuits Kansas joins, which criminal or civil fights get statewide attention, and how aggressively state law is enforced in court.",
    jobDescription:
      "The attorney general is Kansas's top lawyer. They decide which lawsuits the state files or joins, prosecute major crimes that cross county lines, protect consumers from scams, and defend or challenge state laws in court. If a company rips off Kansans, if there's a statewide criminal case, or if Kansas sues the federal government, this is the person running that fight.",
  },
  {
    slug: "kansas-sos-2026",
    name: "Kansas Secretary of State",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 4,
    candidateSlugs: ["pat-proctor", "ken-rahjes", "jennifer-day", "sam-lane"],
    description:
      "Scott Schwab is leaving the office to run for governor, which opens a four-candidate contest over who will manage Kansas elections and business filings.",
    plainEnglish:
      "The secretary of state runs Kansas elections, handles candidate filings, and oversees major state records. With Scott Schwab stepping aside, Pat Proctor, Ken Rahjes, Jennifer Day, and Sam Lane are all in the race.",
    whyItMatters:
      "This office decides how easy or difficult it is to vote, how election disputes are handled, and how confidently Kansans can trust the statewide process.",
    jobDescription:
      "The secretary of state runs elections in Kansas. They decide the rules for voter registration, manage candidate filings, oversee how ballots are counted, and handle business registrations for every company in the state. When there's a question about whether your vote counted or whether an election was fair, this is the office in charge.",
  },
  {
    slug: "kansas-treasurer-2026",
    name: "Kansas State Treasurer",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 2,
    candidateSlugs: ["steven-johnson", "eric-lund"],
    description:
      "Steven Johnson is listed as a filed Republican candidate for state treasurer, and Eric Lund appears in the KPDC statewide campaign-finance index for the treasurer race.",
    plainEnglish:
      "The treasurer race was missing from the site. It now includes the confirmed statewide filing row for incumbent Steven Johnson and the KPDC account record for Eric Lund, with final ballot status still subject to official post-deadline verification.",
    whyItMatters:
      "The state treasurer oversees state cash management, debt, public deposits, unclaimed property, and college-savings programs that affect Kansas taxpayers and families.",
    jobDescription:
      "The Kansas State Treasurer manages the state's money functions: cash management, public deposits, debt-related work, unclaimed property, and several public savings programs. The office is less flashy than governor or attorney general, but it affects how public funds are handled and how Kansans recover property or use state-backed savings programs.",
  },
  {
    slug: "kansas-insurance-2026",
    name: "Kansas Insurance Commissioner",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 3,
    candidateSlugs: ["daniel-hawkins", "dinah-sykes", "ric-koehn"],
    description:
      "The open-seat insurance commissioner race currently includes Daniel Hawkins and Dinah Sykes in filing rows, plus Ric Koehn in KPDC campaign-finance records.",
    plainEnglish:
      "Kansas elects its insurance commissioner, and this office touches rates, claims, consumer complaints, and company oversight. Daniel Hawkins and Dinah Sykes are confirmed in the statewide filing mirror; Ric Koehn is included from the KPDC account index until final ballot records are rechecked.",
    whyItMatters:
      "Insurance decisions affect what Kansans pay for health, auto, crop, and home coverage, and whether regulators push back when companies fail consumers.",
    jobDescription:
      "The insurance commissioner regulates every insurance company doing business in Kansas. They approve or reject the rates you pay for health, auto, home, and crop insurance, investigate complaints when companies deny claims, and decide whether insurers are treating customers fairly. If your insurance premiums go up or a claim gets denied, this office is the one with the power to do something about it.",
  },
  {
    slug: "ks-house-111",
    name: "KS House District 111",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "Kansas House District 111",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 1,
    candidateSlugs: ["barb-wasinger"],
    description:
      "Barb Wasinger currently anchors the House District 111 race on the site as the district's incumbent representative.",
    plainEnglish:
      "House District 111 is one of the most directly local state races for Hays-area voters. Barb Wasinger is the incumbent, and this race affects the laws and budget choices that hit closest to home.",
    whyItMatters:
      "Your state representative votes on school funding, tax policy, roads, public safety, and the state laws that shape daily life in Ellis County.",
    jobDescription:
      "Your state representative is one of 125 members of the Kansas House. They vote on every state law — property taxes, school funding, criminal penalties, road projects, gun laws, abortion policy, and the state budget. District 111 covers the Hays area, so this person is your direct voice in Topeka. They serve two-year terms and are supposed to bring your concerns to the statehouse floor.",
  },
  {
    slug: "sboe-district-5",
    name: "State Board of Education District 5",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "Kansas State Board of Education District 5",
    seats: 1,
    status: "N/A",
    candidateCount: 2,
    candidateSlugs: ["michelle-cunningham", "lorie-wood"],
    description:
      "District 5 covers western Kansas, including Ellis County. The KPDC 2026 odd-district index currently lists Michelle Cunningham and Lorie Wood for District 5; current officeholder Cathy Hopkins remains profiled separately but is not treated as the only 2026 candidate.",
    plainEnglish:
      "The State Board of Education helps decide statewide standards, curriculum fights, accreditation, and major school policy. District 5 includes Hays and much of western Kansas. The site now separates current-officeholder context from the KPDC 2026 account records so the race is not missing Cunningham and Wood.",
    whyItMatters:
      "Board members influence what schools teach, how districts are judged, and what statewide education debates look like for years to come.",
    jobDescription:
      "The State Board of Education sets the standards for what Kansas kids learn in school. They approve curriculum frameworks, oversee school accreditation, hire the state education commissioner, and weigh in on statewide fights over textbooks, testing, and teaching standards. District 5 covers western Kansas including Hays. These board members serve four-year terms and their decisions affect every public school student in the region.",
  },
  {
    slug: "hays-city-current",
    name: "Hays City Officials and Administration",
    level: "Local",
    date: "2027-11-02",
    jurisdiction: "City of Hays, Kansas",
    seats: 5,
    status: "N/A",
    candidateCount: 6,
    candidateSlugs: [
      "mason-ruder",
      "alaina-cunningham",
      "shaun-musil",
      "sandy-jacobs",
      "david-vilaysing",
      "toby-dougherty",
    ],
    description:
      "City races are not on the 2026 Hays ballot. This page profiles the elected city commissioners plus the appointed city manager who handles day-to-day administration.",
    plainEnglish:
      "Hays city elections are not on the 2026 ballot, but current city leaders still make decisions about water, housing, growth, budgeting, and city services. The elected commissioners and appointed city manager are labeled separately.",
    whyItMatters:
      "Local city decisions shape day-to-day life faster than almost anything else: utility projects, zoning, housing growth, city spending, and how Hays responds to long-running issues like water.",
    jobDescription:
      "The Hays city commission is the elected body that sets water rates, approves development, hires the city manager, decides where tax money goes, and votes on city policy. The appointed city manager handles day-to-day operations. This page separates those elected and appointed roles.",
  },
  {
    slug: "ellis-county-2026-ballot",
    name: "Ellis County Commission — 2026 Ballot",
    level: "Local",
    date: "2026-11-03",
    jurisdiction: "Ellis County, Kansas",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 1,
    candidateSlugs: [
      "michael-berges",
    ],
    description:
      "The current Ellis County 2026 candidate filing PDF lists Commission District 1 with Michael Berges. Nathan Leiker is a current District 3 commissioner but is not listed in that 2026 filing PDF.",
    plainEnglish:
      "Ellis County's current 2026 filing PDF shows Michael Berges for Commission District 1. Leiker stays on the site as a current county commissioner profile, but he is no longer shown as a 2026 ballot candidate unless the county filing list changes.",
    whyItMatters:
      "County commissioners set the county budget, approve road projects, decide on jail funding and mental health services, and make land-use decisions that shape Ellis County for years.",
    jobDescription:
      "Ellis County commissioners are the three-person board that runs county government. They set property tax mill levies, approve the county budget, vote on zoning and road projects, oversee the jail and mental health programs, and hire key county staff. District 1 covers part of Hays and the northwest corner of the county. Commissioners serve four-year terms.",
  },
  {
    slug: "ellis-county-incumbents-off-cycle",
    name: "Ellis County Officials — Not on 2026 Ballot",
    level: "Local",
    date: "2028-11-07",
    jurisdiction: "Ellis County, Kansas",
    seats: 7,
    status: "N/A",
    candidateCount: 7,
    candidateSlugs: [
      "nathan-leiker",
      "scott-braun",
      "aaron-cunningham",
      "bobbi-dreiling",
      "neal-younger",
      "rebecca-herzog",
      "vernon-ruder-jr",
    ],
    description:
      "These Ellis County officeholders are current county officials not shown on the current 2026 county filing PDF. Nathan Leiker is grouped here as a current District 3 commissioner until official county filing records show otherwise.",
    plainEnglish:
      "Not every county office is on the ballot every two years. This page profiles the current county officials who matter to Ellis County voters even when they are not on the current 2026 filing list: Nathan Leiker, Sheriff Scott Braun, County Attorney Aaron Cunningham, County Clerk Bobbi Dreiling, Commissioner Neal Younger, Register of Deeds Rebecca Herzog, and Treasurer Vernon Ruder Jr.",
    whyItMatters:
      "The people running county law enforcement, elections, property records, and tax collection are in office right now and making decisions that affect you, even though you will not vote on them again until 2028. Knowing who holds these positions — and what they have done — keeps voters informed year-round, not just on Election Day.",
    jobDescription:
      "Ellis County's non-commission elected offices run the day-to-day operations of county government. The sheriff commands all county law enforcement and runs the jail. The county attorney prosecutes crimes. The county clerk runs every election in Ellis County and keeps official county records. The treasurer collects property taxes and manages county funds. The register of deeds records every land sale, mortgage, and property transfer. Commissioner Neal Younger (District 2) is the third member of the county commission; he was re-elected in 2024 and is currently serving as commission chairman. All six of these seats were decided in November 2024 and are not up for election again until November 2028.",
  },
  {
    slug: "usd-489-current",
    name: "USD 489 School Board and Administration",
    level: "Local",
    date: "2027-11-02",
    jurisdiction: "Hays USD 489",
    seats: 7,
    status: "N/A",
    candidateCount: 8,
    candidateSlugs: [
      "ken-brooks",
      "curt-vajnar",
      "ruth-ruder",
      "derek-yarmer",
      "allen-park",
      "jayme-goetz",
      "craig-pallister",
      "ron-wilson",
    ],
    description:
      "The next USD 489 school board election is in 2027. This page profiles the seven elected board members plus the appointed superintendent, with those roles labeled separately.",
    plainEnglish:
      "USD 489 is not a 2026 ballot fight, but the board and superintendent still matter right now. The elected board controls policy and oversight; the appointed superintendent manages day-to-day administration.",
    whyItMatters:
      "School leaders influence what kids are taught, how tax-backed bond projects are managed, and how parents experience the district long before the next board election arrives.",
    jobDescription:
      "The USD 489 school board is the seven-member elected body that hires and evaluates the superintendent, approves the budget, sets district policy, and votes on facilities and bond work. The superintendent manages day-to-day operations. This page separates elected board authority from appointed administration.",
  },
  {
    slug: "supreme-court-amendment",
    name: "Supreme Court Amendment",
    level: "Ballot Measure",
    date: "2026-08-04",
    jurisdiction: "State of Kansas",
    seats: 0,
    status: "N/A",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "A constitutional amendment that would change how Kansans choose state Supreme Court justices.",
    plainEnglish:
      "This August 4, 2026 measure would reshape how Kansas Supreme Court justices are selected. It is one of the most important statewide ballot questions because it changes the rules, not just the people involved.",
    whyItMatters:
      "Judicial selection changes can outlast any single election cycle and affect abortion law, school funding, constitutional rights, and the court's independence from direct political pressure.",
    jobDescription:
      "This is not a person you are voting for — it is a change to the Kansas Constitution itself. Right now, Kansas Supreme Court justices are picked by a nonpartisan commission and then confirmed by the governor. This amendment would change that so the governor picks them directly and the Senate confirms them, more like how federal judges work. Once a constitutional amendment passes, it cannot be undone by the legislature — only another vote of the people can reverse it.",
  },
  {
    slug: "citizenship-amendment",
    name: "Citizenship Amendment",
    level: "Ballot Measure",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 0,
    status: "N/A",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "A constitutional amendment about citizen-only voting language that will appear on the November 2026 ballot.",
    plainEnglish:
      "This measure would add explicit citizen-only voting language to the Kansas Constitution. Supporters call it a safeguard, while opponents say it solves a problem already covered by existing law.",
    whyItMatters:
      "Even when a measure changes little on day one, it can shape future voting laws and court fights by changing the language written into the state constitution itself.",
    jobDescription:
      "This is a vote on whether to add the words \"only a citizen of the United States\" to the Kansas Constitution's voting requirements. Kansas law already requires citizenship to vote, so supporters say this just makes it explicit in the constitution. Opponents say it solves a problem that doesn't exist and could be used to justify stricter ID requirements down the road. Like all constitutional amendments, once it passes it stays until the people vote again to change it.",
  },
];

export function getElectionBySlug(slug: string): Election | undefined {
  return ELECTIONS.find((election) => election.slug === slug);
}

export function getAllElectionSlugs(): string[] {
  return ELECTIONS.map((election) => election.slug);
}
