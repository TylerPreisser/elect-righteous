export type PartyKey = "R" | "D" | "I" | "NP";

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

export const TRACEY_MANN_FULL: CandidateFull = {
  slug: "tracey-mann",
  name: "Tracey Mann",
  party: "R",
  position: "U.S. Representative, KS-01",
  electionSlug: "ks-01-house-2026",
  incumbent: true,
  occupation: "Farmer / Real Estate Broker",

  // At A Glance
  born: "December 17, 1976",
  hometown: "Quinter, Kansas",
  religion: "Christian (Evangelical Covenant)",
  education: "Kansas State University, B.S. Business Administration",
  family: "Married to Audra Mann; four children",
  district: "KS-01 (R+16) — western and central Kansas including Hays",
  margin2024: "Won re-election 2024 with 66.2% of the vote",
  campaignWebsite: "https://mann.house.gov",

  // Article body
  whoTheyAre: `Tracey Robert Mann, born December 17, 1976, is a fifth-generation Kansas farmer from Quinter who became a commercial real estate broker in Salina before entering politics. He grew up on the family's Gove County farm — an operation still active today — and attended Kansas State University, earning a B.S. in Business Administration before returning to western Kansas to work the land and build a real estate career.

Mann first entered public life when he won a seat in the Kansas Senate in 2009, representing Senate District 36. After a narrow loss in the 2010 Republican primary for the KS-01 congressional seat, he returned to private business for nearly a decade. He re-entered the congressional race in 2020, won the Republican primary, and defeated Democrat Kali Barnett in the general election with 67% of the vote. He has since been re-elected in 2022 and 2024 by similar margins, cementing KS-01 as among the most reliably Republican districts in the nation.

Before entering Congress, Mann served as Senior Program Director for the National Student Leadership Forum on Faith and Values — a Washington-based faith leadership program. He and his wife Audra have four children and live in Quinter. His congressional biography foregrounds his farming identity and stated commitment to rural Kansas values.`,

  theirRecord: `Mann serves on the House Agriculture Committee and the House Transportation and Infrastructure Committee. His tenure has centered on four areas: agricultural policy, including the Farm Bill and crop insurance programs; border security legislation; energy production and opposition to green energy mandates; and fiscal conservatism, including opposition to large spending packages. Heritage Action rates him at 96%, placing him among the most conservative members of the House.

On January 6–7, 2021, Mann voted to object to certifying Arizona's and Pennsylvania's electoral votes, citing "election integrity" concerns. This vote placed him among the 147 House Republicans who maintained their objections even after the Capitol breach earlier that day. Mann has defended the vote in subsequent constituent communications, framing it as responding to voter concerns rather than endorsing the attack.

Mann also voted against the bipartisan ROTOR Act — legislation that would have expanded drone delivery infrastructure in rural areas. The bill had support from agricultural organizations and rural broadband advocates, and its failure drew criticism from rural development groups. Mann has not offered detailed public comment on the vote.

Key legislation Mann has supported includes the Secure the Border Act, the REIN IN Inflation Act, the Parents Bill of Rights Act, and the Energy Independence and Security Act. He has consistently voted against large omnibus spending packages and opposed expanded federal social programs.`,

  whatYouShouldKnow: [
    "Voted against certifying Arizona AND Pennsylvania's electoral votes on January 6, 2021 — one of 147 House Republicans to do so after the Capitol breach that same day.",
    "The only member of the Kansas congressional delegation to vote against the ROTOR Act, bipartisan legislation that would have expanded drone delivery routes in rural and agricultural communities.",
    "56.71% of his campaign funding comes from PACs — with only 0.72% from small-dollar donors (under $200). The majority of his individual grassroots support comes from larger donors.",
    "His single largest donor category is the Crop Production industry ($197,200), representing large agricultural input corporations — chemical, seed, and fertilizer companies — rather than individual family farmers.",
    "He served as Senior Program Director for the National Student Leadership Forum on Faith and Values prior to Congress — a faith-based leadership development organization based in Washington, D.C.",
  ],

  whereTheyWorship: `Mann attends First Covenant Church in Salina, Kansas, affiliated with the Evangelical Covenant Church denomination — a theologically centrist Protestant tradition with roots in Swedish pietism. Before his congressional career, Mann served as Senior Program Director for the National Student Leadership Forum on Faith and Values, a Washington-based nonprofit that runs faith-oriented leadership programs for high school and college students. His public statements frequently invoke faith as a personal anchor, though he does not typically make church policy a campaign centerpiece.`,

  // Quotes
  quotes: [
    {
      text: "I voted to object to certifying Arizona and Pennsylvania because my constituents deserved to have their concerns heard. Millions of Americans had legitimate questions about the integrity of that election, and I believe Congress had a responsibility to examine those concerns.",
      source: "Tracey Mann, constituent town hall, Hays, KS",
      date: "2021-03-15",
      topic: "January 6 Objection",
    },
    {
      text: "Western Kansas is farm country. When Washington forgets the farmer, it forgets the backbone of this nation. I will always fight for crop insurance, for fair commodity prices, and for the freedom to farm without federal interference.",
      source: "Tracey Mann, House Agriculture Committee hearing",
      date: "2023-06-08",
      url: "https://mann.house.gov",
      topic: "Agriculture",
    },
    {
      text: "America's energy independence is a national security issue, not just an economic one. We have the resources. We have the workers. The only thing standing in the way is bad policy from Washington.",
      source: "Tracey Mann, House floor speech",
      date: "2022-09-22",
      topic: "Energy Policy",
    },
  ],

  // Church
  church: {
    name: "First Covenant Church",
    denomination: "Evangelical Covenant Church",
    url: "https://fccsalina.com/",
    details: "Salina, Kansas. Mann was active in faith-oriented leadership before Congress, serving as Senior Program Director for the National Student Leadership Forum on Faith and Values. He co-chaired the National Prayer Breakfast in 2023 and 2024.",
  },

  // Finance
  campaignFinance: {
    totalRaised: "$1.4M (2023–2024 cycle)",
    narrative: "In the 2023–2024 election cycle, Tracey Mann raised approximately $1.4 million. 56.71% of that total came from Political Action Committees, 30.81% from large individual contributions, and only 0.72% from small-dollar donors giving under $200. His funding is overwhelmingly institutional, not grassroots.",
    donors: [
      { name: "Crop Production & Basic Processing PACs", amount: "$197,200" },
      { name: "AIPAC (American Israel Public Affairs Committee)", amount: "$33,607" },
      { name: "Koch Industries PAC", amount: "Top 20 donor" },
      { name: "American Farm Bureau Federation PAC", amount: "Top 20 donor" },
      { name: "National Cattlemen's Beef Association PAC", amount: "Top 20 donor" },
      { name: "National Rural Electric Cooperative Association PAC", amount: "Top 20 donor" },
      { name: "AT&T PAC", amount: "Top 20 donor" },
      { name: "U.S. Chamber of Commerce", amount: "$1.9M independent expenditure (2020)" },
    ],
    undisclosed: "Exact individual itemized donor breakdowns require OpenSecrets premium access. 56.71% PAC, 30.81% large individual, 11.75% other, 0.72% small-dollar.",
    reportingPeriod: "2023–2024 election cycle",
    source: "OpenSecrets.org / FEC",
  },

  // Sources
  sources: [
    {
      title: "Tracey Mann Official Biography",
      url: "https://mann.house.gov/about",
      publication: "mann.house.gov",
      date: "2024-01-01",
    },
    {
      title: "Kansas 1st Congressional District Election Results 2024",
      url: "https://ballotpedia.org/Kansas%27s_1st_Congressional_District_election,_2024",
      publication: "Ballotpedia",
      date: "2024-11-06",
    },
    {
      title: "Tracey Mann Campaign Finance Overview",
      url: "https://www.opensecrets.org/members-of-congress/tracey-mann",
      publication: "OpenSecrets.org",
      date: "2024-12-31",
    },
    {
      title: "Heritage Action Congressional Scorecard",
      url: "https://heritageaction.com/scorecard/members/M001212/congress/117",
      publication: "Heritage Action for America",
      date: "2024-01-01",
    },
    {
      title: "Roll Call Vote: Objection to Arizona Electoral Votes",
      url: "https://clerk.house.gov/Votes/2021",
      publication: "Office of the Clerk, U.S. House of Representatives",
      date: "2021-01-07",
    },
    {
      title: "ROTOR Act Vote Record",
      url: "https://clerk.house.gov/Votes/2022",
      publication: "Office of the Clerk, U.S. House of Representatives",
      date: "2022-07-20",
    },
    {
      title: "First Covenant Church — Salina, KS",
      url: "https://www.firstcovenantchurchsalina.org",
      publication: "First Covenant Church",
      date: "2024-01-01",
    },
    {
      title: "National Student Leadership Forum on Faith and Values",
      url: "https://www.nslf.org",
      publication: "NSLF",
      date: "2024-01-01",
    },
  ],
};

export const FULL_CANDIDATES: CandidateFull[] = [
  TRACEY_MANN_FULL,
  ...([
  {
    "slug": "roger-marshall",
    "name": "Roger Marshall",
    "party": "R",
    "position": "U.S. Senator",
    "electionSlug": "us-senate-2026",
    "incumbent": true,
    "occupation": "Obstetrician / U.S. Senator",
    "born": "August 9, 1960, El Dorado, Kansas",
    "hometown": "Great Bend, Kansas",
    "religion": "Christian Church (Disciples of Christ) / Non-denominational",
    "education": "~1978-1980 — Butler Community College (El Dorado, KS) — Associate's Degree (1980)",
    "family": "Laina Marshall — married 40+ years; Not yet verified",
    "campaignWebsite": "https://kansansformarshall.com",
    "whoTheyAre": "Marshall is a 5th-generation Kansas farm kid from Butler County. He was the first in his family to attend college. After completing his medical training, he moved to Great Bend, Kansas in 1991, where he practiced obstetrics and gynecology for over 25 years. He delivered more than 5,000 babies during his career.\n\nHe entered politics in 2016 by defeating incumbent Rep. Tim Huelskamp in the Republican primary for Kansas's 1st Congressional District (\"The Big First\"), served two terms in the House (2017-2021), then won election to the U.S. Senate in 2020.",
    "theirRecord": "Vote Smart Key Votes.\n\nHeritage Action Scorecard.\n\nNational Pro-Life Scorecard.\n\nOn The Issues.",
    "whatYouShouldKnow": [
      "Marshall has a far more developed public paper trail than any challenger",
      "Faith is not subtle in his brand; it is a real campaign identity",
      "His controversies are mostly political and rhetorical, not criminal",
      "Marshall's federal service record, campaign filings, and local town-hall coverage all reinforce the same core identity: rural doctor turned hard-right senator",
      "His 2025-26 campaign finance totals are in the multi-million-dollar range and dwarf the rest of the field",
      "Roger Marshall has one of the deepest and most documented church leadership records of anyone on this list. Elder + Deacon + Board Chairman + 25 years of Sunday school teaching is an extraordinary level of sustained church commitment. This is not someone who shows up on Easter and Christmas. The Disciples of Christ tradition emphasizes local church autonomy and practical Christian service, which aligns with Marshall's \"small-town values\" messaging. His faith credentials are among the strongest on this entire investigation",
      "This seat is rated Solid Republican. An upset would be historic. But 2022 showed that \"impossible\" is a word Kansas voters do not always respect",
      "Marshall's faith appears deeply personal and longstanding -- not performative. 25+ years of Sunday school teaching, elder/deacon/board chairman service, and daily Bible reading since age 10 represent genuine, sustained commitment. His pro-life positions are rooted in both his faith and his medical career delivering thousands of babies"
    ],
    "whereTheyWorship": "Denomination: Christian Church (Disciples of Christ) / Non-denominational.\n\nChurch Roles: Elder, Deacon, Board Chairman, Sunday School Teacher (25+ years).",
    "church": {
      "name": "First Christian Church, Great Bend, KS",
      "denomination": "Christian Church (Disciples of Christ) / Non-denominational",
      "url": "https://www.firstchristianchurchgb.com/",
      "details": "Denomination: Christian Church (Disciples of Christ) / Non-denominational. Church Roles: Elder, Deacon, Board Chairman, Sunday School Teacher (25+ years)."
    },
    "quotes": [
      {
        "text": "Faith and community continue to be pillars in Doc Marshall's life.",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://www.firstchristianchurchgb.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Active in his church as an Elder, Deacon and twice serving as board chair",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://www.firstchristianchurchgb.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "paid Democratic operatives.",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://kansansformarshall.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "abortion is wrong at any stage",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://kansansformarshall.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "We cannot continue selling our grandchildren down a river...",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://kansansformarshall.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "small-town Christian values",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "topic": "Evidence:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S0KS00315/.\n\nPublic FEC pages and prior summaries show roughly $4.76 million in lifetime receipts and more than $4.07 million cash on hand by the end of 2025.",
      "donors": [
        {
          "name": "2025 receipts alone were with $195,870.35 in disbursements.",
          "amount": "$2,563,147.27,"
        },
        {
          "name": "Public donor notes from prior research: Koch Industries PAC Spirit AeroSystems PAC $10,000, and U.S. Chamber of Commerce IE support of roughly $1.9M.",
          "amount": "$10,000,"
        },
        {
          "name": "Koch Industries PAC",
          "amount": "$10,000 contribution (2020)"
        },
        {
          "name": "Spirit AeroSystems PAC",
          "amount": "$10,000 contribution (2020)"
        },
        {
          "name": "U.S. Chamber of Commerce",
          "amount": "$1.9 million supporting Marshall (2020)"
        },
        {
          "name": "Koch Industries was the biggest overall corporate donor to GOP spending groups ( total) -- strong Kansas connection",
          "amount": "$13.75M"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Firstchristianchurchgb.Com",
        "url": "https://www.firstchristianchurchgb.com/",
        "publication": "Firstchristianchurchgb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasdisciples.Org",
        "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
        "publication": "Kansasdisciples.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S0KS00315/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/about/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansansformarshall.Com",
        "url": "https://kansansformarshall.com/meet-doc/",
        "publication": "Kansansformarshall.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kwch.Com",
        "url": "https://www.kwch.com/2025/03/04/sen-marshall-doubles-down-decision-leave-town-hall-early-claim-that-it-was-sabotaged/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansansformarshall.Com",
        "url": "https://kansansformarshall.com/",
        "publication": "Kansansformarshall.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansansformarshall.Com",
        "url": "https://kansansformarshall.com/life",
        "publication": "Kansansformarshall.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Thehill.Com",
        "url": "https://thehill.com/homenews/senate/5778492-roger-marshall-iran-nuclear-program-comments/",
        "publication": "Thehill.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-releases-statement-on-foreign-aid-bill/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00576173/?cycle=2026",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-releases-statement-after-president-trumps-joint-address-to-congress/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-introduces-comprehensive-bill-to-reform-americas-dysfunctional-budget-process/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/members-of-congress/roger-marshall/summary?cid=N00037034",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Justfacts.Votesmart.Org",
        "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov",
        "url": "https://marshall.senate.gov",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR Candidate Guide",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "FEC.gov",
        "url": "https://www.fec.gov/data/elections/senate/KS/2026/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall - Federal Watch / KSOpen",
        "url": "https://ksopen.org/marshall",
        "publication": "Ksopen.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Congress.gov Profile",
        "url": "https://www.congress.gov/member/roger-marshall/M001198",
        "publication": "Congress.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "GovTrack Profile",
        "url": "https://www.govtrack.us/congress/members/roger_marshall/412704",
        "publication": "Govtrack.Us",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Roger_Marshall",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Roger_Marshall",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Historical Society - Kansapedia",
        "url": "https://www.kansashistory.gov/kansapedia/roger-w-marshall/19968",
        "publication": "Kansashistory.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "OpenSecrets Industries",
        "url": "https://www.opensecrets.org/members-of-congress/roger-marshall/industries?cid=N00037034",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Quiver Quantitative Net Worth",
        "url": "https://www.quiverquant.com/congresstrading/politician/Roger%20Marshall-M001198/net-worth",
        "publication": "Quiverquant.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart Key Votes",
        "url": "https://justfacts.votesmart.org/candidate/key-votes/172080/roger-marshall",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Heritage Action Scorecard",
        "url": "https://heritageaction.com/scorecard/members/m001198",
        "publication": "Heritageaction.Com",
        "date": "2026-03-31"
      },
      {
        "title": "National Pro-Life Scorecard",
        "url": "https://sbaprolife.org/senator/roger-marshall",
        "publication": "Sbaprolife.Org",
        "date": "2026-03-31"
      },
      {
        "title": "On The Issues",
        "url": "https://www.ontheissues.org/house/Roger_Marshall_Principles_+_Values.htm",
        "publication": "Ontheissues.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Democrats Focus on Defeating Marshall",
        "url": "https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-focus-on-defeating-gop-incumbent/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CNN - Marshall and January 6",
        "url": "https://www.cnn.com/2021/05/03/politics/roger-marshall-january-6-cnn-big-lie",
        "publication": "Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CBS News - Fauci Hot Mic",
        "url": "https://www.cbsnews.com/news/anthony-fauci-roger-marshall-hot-mic-moron/",
        "publication": "Cbsnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Marshall COVID Positions",
        "url": "https://www.kcur.org/news/2021-08-26/kansas-senator-roger-marshall-is-a-doctor-but-his-covid-19-advice-doesnt-always-sound-like-it",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Oakley Town Hall",
        "url": "https://kansasreflector.com/2025/03/05/marshall-says-paid-agitators-swamped-kansas-forum-if-he-proves-it-ill-eat-a-copy-of-project-2025/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Yahoo News - Florida Property Controversy",
        "url": "https://www.yahoo.com/news/roger-marshall-calls-kansas-cabin-160558825.html",
        "publication": "Yahoo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Moran/Marshall Ukraine Aid Split",
        "url": "https://kansasreflector.com/briefs/moran-marshall-diverge-on-95-billion-ukraine-israel-aid-passed-by-congress/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jason Hart - hartforsenate.com",
        "url": "https://hartforsenate.com/",
        "publication": "Hartforsenate.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Patrick Schmidt - patrickforkansas.com",
        "url": "https://patrickforkansas.com/",
        "publication": "Patrickforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Christy Cauble Davis - christydavisforkansas.com",
        "url": "https://www.christydavisforkansas.com/",
        "publication": "Christydavisforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sandy Spidel Neumann - sandyforkansas.com",
        "url": "https://sandyforkansas.com/",
        "publication": "Sandyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Erik Murray - erikforkansas.com",
        "url": "https://erikforkansas.com/",
        "publication": "Erikforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Anne Parelkar - anneforkansas.com",
        "url": "https://www.anneforkansas.com/",
        "publication": "Anneforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Quiver Quantitative - Financial Disclosure",
        "url": "https://www.quiverquant.com/news/Senator+Roger+Marshall+has+filed+a+new+financial+disclosure+-+here%E2%80%99s+what+we+see",
        "publication": "Quiverquant.Com",
        "date": "2026-03-31"
      },
      {
        "title": "GovTrack 2024 Report Card",
        "url": "https://www.govtrack.us/congress/members/roger_marshall/412704/report-card/2024",
        "publication": "Govtrack.Us",
        "date": "2026-03-31"
      },
      {
        "title": "Heritage Action Scorecard 118",
        "url": "https://heritageaction.com/scorecard/members/M001198/118",
        "publication": "Heritageaction.Com",
        "date": "2026-03-31"
      },
      {
        "title": "On the Issues - Gun Control",
        "url": "https://www.ontheissues.org/house/Roger_Marshall_Gun_Control.htm",
        "publication": "Ontheissues.Org",
        "date": "2026-03-31"
      },
      {
        "title": "On the Issues - Immigration",
        "url": "https://www.ontheissues.org/house/Roger_Marshall_Immigration.htm",
        "publication": "Ontheissues.Org",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - Gun Grabbing Scheme vote",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-votes-against-gun-grabbing-scheme/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "propublica.org/politwoops/user/RogerMarshallMD",
        "url": "https://projects.propublica.org/politwoops/user/RogerMarshallMD",
        "publication": "Projects.Propublica.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Twitter/X - @RogerMarshallMD",
        "url": "https://x.com/RogerMarshallMD",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Stand With Crypto - Roger Marshall",
        "url": "https://www.standwithcrypto.org/politicians/person/roger---marshall",
        "publication": "Standwithcrypto.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Cowardly",
        "url": "https://kansasreflector.com/2025/03/03/cowardly-roger-marshall-claims-real-kansans-love-trump-and-doge-we-know-otherwise/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Paid Operatives",
        "url": "https://www.kcur.org/2025-03-07/roger-marshall-called-them-paid-democratic-operatives-they-say-theyre-just-concerned-kansans",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH - Town Hall",
        "url": "https://www.kwch.com/2025/03/02/constituents-direct-questions-senator-roger-marshall-town-hall-which-he-ends-early/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Daily Beast - Backtracks Iran",
        "url": "https://www.thedailybeast.com/maga-senator-embarrassingly-backtracks-on-strike-comments/",
        "publication": "Thedailybeast.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Healthgrades - Dr. Roger Marshall",
        "url": "https://www.healthgrades.com/physician/dr-roger-marshall-ydm6m",
        "publication": "Healthgrades.Com",
        "date": "2026-03-31"
      },
      {
        "title": "US News - Dr. Roger Marshall",
        "url": "https://health.usnews.com/doctors/roger-marshall-279058",
        "publication": "Health.Usnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Doximity - Dr. Roger Marshall",
        "url": "https://www.doximity.com/pub/roger-marshall-md",
        "publication": "Doximity.Com",
        "date": "2026-03-31"
      },
      {
        "title": "accountability.gop/profile/sen-roger-marshall",
        "url": "https://accountability.gop/profile/sen-roger-marshall/",
        "publication": "Accountability.Gop",
        "date": "2026-03-31"
      },
      {
        "title": "insurrectionexposed.org/marshall-roger",
        "url": "https://insurrectionexposed.org/marshall-roger/",
        "publication": "Insurrectionexposed.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB - Kansas politicians join Hawley",
        "url": "https://www.kshb.com/news/local-news/senator-elect-roger-marshall-joins-hawley-in-plans-to-object-electoral-college-vote",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fox4KC - Acknowledges Biden",
        "url": "https://fox4kc.com/news/senator-roger-marshall-acknowledges-biden-victory-after-objecting-to-electoral-votes/",
        "publication": "Fox4kc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CNN - Big Lie, Move On",
        "url": "https://amp.cnn.com/cnn/2021/05/03/politics/roger-marshall-january-6-cnn-big-lie/",
        "publication": "Amp.Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Newsweek - So Ready to Move On",
        "url": "https://www.newsweek.com/gop-senator-roger-marshall-objecting-2020-election-results-so-ready-move-1588113",
        "publication": "Newsweek.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - Counting of Electoral Votes",
        "url": "https://ballotpedia.org/Counting_of_electoral_votes_(January_6-7,_2021",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Newsweek - Fauci Moron Response",
        "url": "https://www.newsweek.com/roger-marshall-responds-fauci-calling-him-moron-1668391",
        "publication": "Newsweek.Com",
        "date": "2026-03-31"
      },
      {
        "title": "The Hill - Fauci Spars",
        "url": "https://thehill.com/homenews/senate/589249-hot-mic-catches-fauci-calling-gop-senator-a-moron/",
        "publication": "Thehill.Com",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - Fauci Response",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-responds-to-dr-fauci-hot-mic-situation/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - FAUCI Lied",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/breaking-sen-marshall-proves-fauci-lied-by-obtaining-previously-unpublished-financial-records/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - Vaccine Transparency",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-we-are-fighting-for-vaccine-transparency/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Rolling Stone - FAUCI Act",
        "url": "https://www.rollingstone.com/politics/politics-news/fauci-act-roger-marshall-anthony-fauci-moron-argument-1284867/",
        "publication": "Rollingstone.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KMUW - Opens Arms to Republicans",
        "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
        "publication": "Kmuw.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Democratic Candidate",
        "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Democrats Sharpen Attack",
        "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Kansas City Entrepreneur",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia - 2026 KS Senate Election",
        "url": "https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Kansas",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - KS 2026 Senate",
        "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "ballotpedia.org/EndorsementsbyRoger_Marshall",
        "url": "https://ballotpedia.org/Endorsements_by_Roger_Marshall",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Washington Examiner - Trump Endorsement Tracker",
        "url": "https://www.washingtonexaminer.com/news/campaigns/4460164/trump-endorsement-tracker-gop-2026-election-primaries/",
        "publication": "Washingtonexaminer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KAKE - Files for Re-election",
        "url": "https://www.kake.com/home/senator-roger-marshall-files-for-re-election/article_5845f418-b2ea-42e0-804e-a035d83f76b5.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CU Today - Credit Card Bill + Trump",
        "url": "https://www.cutoday.info/Fresh-Today/With-Trump-s-Endorsement-Marshall-s-Credit-Card-Bill-May-Suddenly-Have-New-Life-On-Capitol-Hill",
        "publication": "Cutoday.Info",
        "date": "2026-03-31"
      },
      {
        "title": "Durbin/Marshall - Credit Card Competition Act",
        "url": "https://www.durbin.senate.gov/newsroom/press-releases/durbin-marshall-reintroduce-the-credit-card-competition-act",
        "publication": "Durbin.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - Credit Card Competition Act",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/marshall-durbin-reintroduce-credit-card-competition-act-backed-by-president-trump/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov press release, March 28, 2026",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-praises-trump-admins-historic-renewable-fuel-standard-rule/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Mediaite",
        "url": "https://www.mediaite.com/media/news/republican-senator-says-i-was-wrong-when-confronted-with-past-claim-about-iran/",
        "publication": "Mediaite.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Breitbart, March 11, 2026",
        "url": "https://www.breitbart.com/clips/2026/03/11/gop-sen-marshall-i-was-wrong-irans-program-wasnt-set-back-years-by-midnight-hammer/",
        "publication": "Breitbart.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CNN Fauci confrontation video",
        "url": "https://www.cnn.com/videos/politics/2022/01/12/fauci-calls-marshall-moron-financial-disclosures-mh-orig.cnn",
        "publication": "Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LegiStorm - Financial Disclosures",
        "url": "https://www.legistorm.com/memberdisclosure/3141/Sen_Roger_Marshall.html",
        "publication": "Legistorm.Com",
        "date": "2026-03-31"
      },
      {
        "title": "OpenSecrets - Personal Finances",
        "url": "https://www.opensecrets.org/personal-finances/roger-marshall/reports?cid=N00037034",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Finbold - Net Worth",
        "url": "https://finbold.com/guide/roger-marshall-net-worth/",
        "publication": "Finbold.Com",
        "date": "2026-03-31"
      },
      {
        "title": "OpenSecrets - Assets",
        "url": "https://www.opensecrets.org/personal-finances/roger-marshall/assets?cid=N00037034",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "jason-hart",
    "name": "Jason Hart",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "U.S. Senate candidate",
    "hometown": "Wichita, KS",
    "education": "Juris Doctor, University of Kansas School of Law",
    "family": "Married with family. Describes himself as a husband and father.",
    "campaignWebsite": "https://hartforsenate.com",
    "whoTheyAre": "Hart's biography is built around legal work: Kansas Attorney General's office, Shawnee County, and a long run as an Assistant U.S. Attorney.\n\nHe has tried to frame that legal background as evidence of seriousness and bipartisan fluency.\n\nThe party-registration switches in early 2026 became part of the story almost immediately.\n\nEducation: Juris Doctor, University of Kansas School of Law.",
    "theirRecord": "He left his AUSA post to run and immediately became a media topic because of the late entry and party-switch sequence.\n\nPublic coverage shows him speaking to Republicans as persuadables rather than as political enemies.\n\nHe has no prior elected record, so his public trail is almost entirely professional and campaign-based.\n\nTariffs: Opposes current tariff policies, says \"Kansas families are paying the price for unfair tariffs.",
    "whatYouShouldKnow": [
      "Hart's party-switch chronology is his biggest vulnerability",
      "He is trying to occupy a blue-collar, law-and-order lane that is unusual for a Kansas Democrat",
      "His self-description as \"Christian\" is public, but the current faith trail is thin",
      "DOJ archive material and local news confirm the prosecutorial background",
      "KMUW, HPPR, and Kansas Reflector treated his candidacy as a late-breaking Senate development",
      "Hart is the most unconventional candidate in the Democratic primary. A career federal prosecutor who switched parties twice in one month, running on a blunt \"electability\" argument centered on his identity as a straight white Christian male in Kansas. His wife's quip has become his most quoted line. His lack of political experience or campaign infrastructure is either refreshingly authentic or dangerously unprepared -- depends on the voter. His 21-year record prosecuting child predators is his strongest credential",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation was identified in the report materials reviewed for Jason Hart"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Jason Hart.",
    "quotes": [
      {
        "text": "There are many Republicans who are in the wilderness right now.",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://hartforsenate.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I ask people questions for a living.",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://hartforsenate.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "prayerful and tearful discussions with my wife and family",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://hartforsenate.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "white, male, Christian, hetero, 2A-friendly, LEO-friendly",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "straight, white, Christian man",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "prayerful and tearful discussions",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "topic": "Family:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Campaign site: https://hartforsenate.com/.\n\nActBlue page: https://secure.actblue.com/donate/jason-hart.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hartforsenate.Com",
        "url": "https://hartforsenate.com/",
        "publication": "Hartforsenate.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Secure.Actblue.Com",
        "url": "https://secure.actblue.com/donate/jason-hart",
        "publication": "Secure.Actblue.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kmuw.Org",
        "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
        "publication": "Kmuw.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Justice.Gov",
        "url": "https://www.justice.gov/archive/usao/ks/PressReleases/2012/Nov%202012/Nov29a.html",
        "publication": "Justice.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Avvo: Jason Hart profile",
        "url": "https://www.avvo.com/attorneys/67202-ks-jason-hart-1922169.html",
        "publication": "Avvo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "DOJ: Cases prosecuted by Hart",
        "url": "https://www.justice.gov/usao-ks/pr/kansas-man-sentenced-480-months-production-child-porn",
        "publication": "Justice.Gov",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "patrick-schmidt",
    "name": "Patrick Schmidt",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "State Senator / Navy Veteran",
    "born": "Overland Park, Kansas",
    "hometown": "Represents Shawnee and Douglas County (Lawrence/Topeka area)",
    "education": "Born: Overland Park, Kansas",
    "family": "Not detailed",
    "campaignWebsite": "https://patrickforkansas.com/",
    "whoTheyAre": "Born: Overland Park, Kansas.\n\n6th-generation Kansan -- family includes six generations of farmers, miners, and teachers.\n\nParents: Both public school teachers; mother worked retail as second job, father did custom harvesting with family business and later tutoring.\n\nHigh School: Grew up in Overland Park area.",
    "theirRecord": "Property tax relief (core issue).\n\nRural healthcare access.\n\nPublic education funding.\n\nVeterans' issues.",
    "whatYouShouldKnow": [
      "Schmidt is the only Democratic candidate currently holding elected office, which gives him a legislative record to run on (or defend). His Navy intelligence background on the USS Ronald Reagan provides a military credential rare in the Democratic field. His willingness to break with party lines on property taxes shows political pragmatism. The January 6 motivation for entering politics is sincere but may alienate some Kansas voters who view that framing as partisan. He is arguably the strongest institutional candidate in the Democratic primary",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation was verified in the accessible research trail",
      "Schmidt is the only Democratic U.S. Senate candidate in the field who currently holds elected office in Kansas",
      "He served as a U.S. Naval Intelligence Officer and uses national-security experience as a central credential",
      "He entered the Senate race shortly after starting his first state-senate term, which makes ambition and timing part of his public story",
      "His 2024 Kansas Senate filings showed more than $51,000 in contributions in the July reporting period and additional PAC-backed support later in the cycle",
      "No verified public church affiliation surfaced in the accessible research trail"
    ],
    "whereTheyWorship": "No public church affiliation was verified in the accessible research trail.",
    "quotes": [
      {
        "text": "Patrick Schmidt is a former U.S. Naval Intelligence Officer running to represent Kansas in the US Senate",
        "source": "Patrick Schmidt research file",
        "date": "2026-03-31",
        "url": "https://patrickforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Patrick will be guided by the family values he learned from his mother, his father, and the generations of Kansans who came before him",
        "source": "Patrick Schmidt research file",
        "date": "2026-03-31",
        "url": "https://patrickforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "defending U.S. interests from China and Russia",
        "source": "Patrick Schmidt research file",
        "date": "2026-03-31",
        "url": "https://patrickforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00288/?cycle=2026&election_full=true.\n\nFEC currently shows the filing, but no 2025-2026 totals yet in the accessible summary view.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Patrickforkansas.Com",
        "url": "https://patrickforkansas.com/",
        "publication": "Patrickforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Patrickforkansas.Com",
        "url": "https://patrickforkansas.com/about/",
        "publication": "Patrickforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kssenatedems.Org",
        "url": "https://www.kssenatedems.org/patrick-schmidt",
        "publication": "Kssenatedems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00288/?cycle=2026&election_full=true",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H2KS02143/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Patrick_Schmidt",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Com",
        "url": "https://www.kansas.com/news/politics-government/election/article",
        "publication": "Kansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook - @patrickforkansas",
        "url": "https://www.facebook.com/patrickforkansas/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Patrick Schmidt - Kansas Legislature",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Patrick Schmidt - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Patrick_Schmidt_(politician",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW - State Senator Files for U.S. Senate (Feb 2026)",
        "url": "https://www.wibw.com/2026/02/05/kansas-state-senator-files-us-senate/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Freshman senator",
        "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Senator files for U.S. Senate",
        "url": "https://www.kwch.com/2026/02/05/kansas-state-senator-files-us-senate/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LegiScan: Schmidt sponsored bills",
        "url": "https://legiscan.com/KS/people/patrick-schmidt/id/26167",
        "publication": "Legiscan.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "christy-cauble-davis",
    "name": "Christy Cauble Davis",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "Rural Development Administrator",
    "born": "Kansas. Fifth-generation Kansan.",
    "hometown": "Cottonwood Falls, KS (Chase County -- deep rural Kansas, population ~900)",
    "education": "Born: Sedgwick, Kansas",
    "family": "Not detailed in available sources",
    "campaignWebsite": "https://www.christydavisforkansas.com/",
    "whoTheyAre": "Davis presents herself as a fifth-generation Kansan with a long rural-service résumé.\n\nHer public career includes historic preservation, arts/cultural programming, and federal rural-development leadership.\n\nShe has a particularly strong rural authenticity story compared with the Johnson County lane in the primary.\n\nBorn: Sedgwick, Kansas.",
    "theirRecord": "She says she helped move more than $1.3 billion into Kansas communities through USDA Rural Development.\n\nShe ran for Congress in 2020 and lost the Democratic primary, giving her a prior campaign record.\n\nHer campaign frames Marshall's absence and rural neglect as key themes.\n\nExpanding access to rural healthcare.",
    "whatYouShouldKnow": [
      "Davis has the most tangible rural-development executive record in the Democratic field",
      "Her biggest resume asset is also a likely general-election attack line: USDA under Biden",
      "She has prior campaign experience, unlike several newer entrants",
      "Kansas Reflector and Emporia Gazette coverage support her story as a serious rural Democrat, not a placeholder",
      "Ballotpedia confirms the 2020 congressional campaign history",
      "Davis has the deepest rural Kansas credentials in the Democratic primary. A 5th-generation Kansan who actually lives in the Flint Hills (population ~2,800 in Chase County), she's the anti-Overland Park candidate. Her USDA appointment under Biden gives her federal experience and a $1.3 billion Kansas investment talking point. The historic building restorations in Cottonwood Falls show she practices what she preaches about rural community investment. Her vulnerability is being tied to the Biden administration in a state Trump won by 14+ points",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation was identified in the report materials reviewed for Christy Cauble Davis"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Christy Cauble Davis.",
    "quotes": [
      {
        "text": "It's time for Kansas to have a Senator who shows up.",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00247/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Kansans are uniquely equipped to tackle national challenges.",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00247/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Rooted in Kansas. Ready to Rebuild.",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00247/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "steeped in the politics of incumbency",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "topic": "Why She's Running:"
      },
      {
        "text": "Fight for immigration reform that provides a pathway to citizenship and ends inhumane policies that terrorize families and unconstitutionally deprive Kansans of due process",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "topic": "Platform"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00247/.\n\nCommittee page: https://www.fec.gov/data/committee/C00915934/.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00247/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00915934/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Christydavisforkansas.Com",
        "url": "https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u",
        "publication": "Christydavisforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Emporiagazette.Com",
        "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
        "publication": "Emporiagazette.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Christydavisforkansas.Com",
        "url": "https://www.christydavisforkansas.com/",
        "publication": "Christydavisforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Christy_Davis",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Christy Cauble Davis",
        "url": "https://www.facebook.com/christy.davis.710/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Christy Davis - Davis Preservation",
        "url": "https://www.linkedin.com/in/christy-davis-19286b224/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "USDA: KS State Director announcement",
        "url": "https://www.rd.usda.gov/newsroom/news-release/usda-announces-rural-development-state-director-kansas",
        "publication": "Rd.Usda.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart: Davis biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/192415/christy-cauble-davis",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "American Coin-Op: Clean History laundromat",
        "url": "https://americancoinop.com/articles/clean-history-laundromat-anchors-kansas-town",
        "publication": "Americancoinop.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "sandy-spidel-neumann",
    "name": "Sandy Spidel Neumann",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "U.S. Senate candidate",
    "born": "Near Topeka. Grew up in Overland Park.",
    "hometown": "Mission, KS (Johnson County -- suburban Kansas City)",
    "education": "Born: Near Topeka, Kansas",
    "family": "Not detailed in available sources.",
    "campaignWebsite": "https://sandyforkansas.com/",
    "whoTheyAre": "Spidel Neumann was born in Topeka, adopted as a newborn, and grew up in Johnson County.\n\nHer public biography emphasizes a 40-year business career, including 22 years at Ameriprise.\n\nShe entered politics only after retirement, which makes her a classic late-career candidate.\n\nBorn: Near Topeka, Kansas.",
    "theirRecord": "She entered the race after Marshall's Oakley town hall and tariff/Medicaid posture became motivating issues for her.\n\nHer campaign centers on cost-of-living, fairness, and competence rather than ideological experimentation.\n\nPublic filings show a heavy personal investment in the race.\n\nOpposes tariffs harmful to Kansas farmers.",
    "whatYouShouldKnow": [
      "She has the strongest corporate-finance résumé in the Democratic field",
      "Her campaign is one of the clearest examples of a self-funded challenge",
      "She has no elected-office record, so trust has to be built from scratch",
      "LinkedIn and campaign material corroborate the Ameriprise history",
      "Kansas Reflector and KCUR both frame her as a legitimate entrant, not a vanity candidate",
      "Spidel Neumann brings the strongest corporate resume in the field -- 22 years as an Ameriprise executive with a UChicago/Kellogg pedigree. The Girls Nation story is a compelling narrative arc (dreaming of the Senate as a teenager). However, she's been away from Kansas for decades, only returning in summer 2025 -- a potential \"carpetbagger\" vulnerability. She's never held elected office. Her Johnson County base is the Democratic stronghold in Kansas, but that also means she'll compete with Murray and Parelkar for those same metro voters",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation or denomination was verified"
    ],
    "whereTheyWorship": "No public church affiliation or denomination was verified.",
    "quotes": [
      {
        "text": "Let's Get to Work, Kansas.",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00262/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "everyone deserves a fair shot",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00262/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "the big abomination of a bill",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00262/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "big abomination of a bill",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "topic": "Platform / Key Positions:"
      },
      {
        "text": "I know how the economy works",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "topic": "Strengths:"
      },
      {
        "text": "would be a good first step because health care is a significant concern in rural Kansas.",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "topic": "Key Quote:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00262/.\n\nCommittee page: https://www.fec.gov/data/committee/C00923474/.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00262/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00923474/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Sandyforkansas.Com",
        "url": "https://sandyforkansas.com/",
        "publication": "Sandyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Sandy_Spidel_Neumann",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@speumann",
        "url": "https://x.com/speumann",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@speumann",
        "url": "https://www.instagram.com/speumann/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@speumann",
        "url": "https://www.threads.com/@speumann",
        "publication": "Threads.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post photo",
        "url": "https://johnsoncountypost.com/2026/01/07/2026-u-s-senate-candidates-kansas-277190/sandy-spidel-neumann/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "erik-murray",
    "name": "Erik Murray",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "Attorney / Public Servant",
    "born": "Kansas City, Kansas. Attended Sumner Academy (magnet high school).",
    "hometown": "Kansas City, Kansas (Wyandotte County)",
    "education": "Born: KU Medical Center, Kansas City, KS",
    "family": "Married to Nicole. Lives in Wyandotte County.",
    "campaignWebsite": "https://erikforkansas.com/",
    "whoTheyAre": "Murray was born in KCK, later spent years in California, and then returned to Kansas.\n\nHis campaign biography is heavily shaped by the redevelopment work he helped drive after that return.\n\nHe presents himself as a builder who thinks in terms of jobs, mixed-use development, and community outcomes.\n\nBorn: KU Medical Center, Kansas City, KS.",
    "theirRecord": "He has no public elected-record voting history; his record is in private-sector development and project delivery.\n\nThe Indian Springs project is the centerpiece of his public résumé.\n\nHe also became a controversy target after comments on The Disruption Lab podcast connected him to Elaine Brown and the Black Panther tradition.\n\nLowering costs for starting and running small businesses.",
    "whatYouShouldKnow": [
      "Murray is the most development-centric candidate in the Democratic field",
      "His California years remain a built-in political attack line",
      "The Black Panther comment is the most obvious opposition-ad line against him",
      "Kansas Reflector and Sunflower State Journal coverage corroborate the redevelopment focus",
      "LinkedIn and campaign material give a coherent business-leader profile",
      "This story is almost certainly fatal to Murray's general election viability in Kansas. Whether the podcast comments are taken in or out of context, the attack ads write themselves. In a state that last elected a Democratic senator in 1932, praising a former Black Panther leader as a personal inspiration is disqualifying with the general electorate. It may not even play well in a Democratic primary where electability is the paramount concern",
      "Murray is the most complex candidate in the field. A KCK native with legitimate deep roots (Sumner Academy multigenerational), elite real estate credentials (CCIM/SIOR), and a nearly $1 billion redevelopment project in his hometown. But the decade in Oakland, the cannabis industry work, and especially the Elaine Brown quote create a massive vulnerability in Kansas. He's essentially running on the narrative that leaving Kansas and coming back made him better -- a risky pitch in a state that values people who stayed. The Free Beacon hit piece was the first real opposition research deployed against any Democratic candidate in this race",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Erik Murray.",
    "quotes": [
      {
        "text": "between what capital wants and what community wants",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00270/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "politician-created problems",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00270/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "It'll change some wiring in your brain.",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00270/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "attuned to the disconnect between what capital wants and what community wants.",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "topic": "Key Quote:"
      },
      {
        "text": "transformative experience",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "topic": "Source"
      },
      {
        "text": "in the fight to bring about a",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "topic": "Source"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00270/.\n\nCommittee page: https://www.fec.gov/data/committee/C00929240/.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00270/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00929240/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Freebeacon.Com",
        "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
        "publication": "Freebeacon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Erikforkansas.Com",
        "url": "https://erikforkansas.com/",
        "publication": "Erikforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Erikforkansas.Com",
        "url": "https://erikforkansas.com/meet-erik/",
        "publication": "Erikforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflowerstatejournal.Com",
        "url": "https://sunflowerstatejournal.com/kck-developer-announces-for-u-s-senate-as-democratic-primary-grows-to-five/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/erikmurraysior",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Erik Murray - Ballotpedia",
        "url": "https://ballotpedia.org/Erik_Murray",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Erik Murray for Kansas",
        "url": "https://www.facebook.com/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@erik.murray.820582",
        "url": "https://www.facebook.com/erik.murray.820582/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@erik4ks",
        "url": "https://www.instagram.com/erik4ks/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "AfroTech: Oak Impact Group",
        "url": "https://afrotech.com/erik-murray-oakland-impact-group",
        "publication": "Afrotech.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Guide to candidates",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KSN: Missing financial disclosures",
        "url": "https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/",
        "publication": "Ksn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "GEN Global: Erik Murray",
        "url": "https://www.genglobal.org/user/erik",
        "publication": "Genglobal.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Len's Political Notes #792",
        "url": "https://lenspoliticalnotes.com/lens-political-note-792-erik-murray-kansas-us-senate/",
        "publication": "Lenspoliticalnotes.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "anne-parelkar",
    "name": "Anne Parelkar",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "Community Advocate",
    "hometown": "Overland Park, KS (Johnson County)",
    "education": "Born: Pine Bluff, Arkansas",
    "family": "Not detailed in available sources.",
    "campaignWebsite": "https://www.anneforkansas.com/",
    "whoTheyAre": "Parelkar's biography centers on immigration law, legal service, and Kansas civic identity.\n\nMultiple public profiles connect her decision to run with Marshall's town-hall behavior and constituent access issues.\n\nShe is one of the newer Senate entrants, but her legal specialization gives her a distinct niche in the field.\n\nBorn: Pine Bluff, Arkansas.",
    "theirRecord": "She filed early in the cycle and made immigration and children's healthcare the centerpiece of her policy messaging.\n\nHer campaign argues for a consolidated healthcare program rather than fragmented Medicaid/CHIP administration.\n\nPublic interviews portray her as a policy-oriented challenger rather than a pure protest candidacy.\n\nImmigration reform (core issue, professional expertise).",
    "whatYouShouldKnow": [
      "Immigration is both her professional strength and a likely electoral liability in Kansas",
      "She is a serious policy candidate, not a vanity entrant",
      "Her public fundraising is still very small",
      "Ballotpedia and the KCUR candidate guide both corroborate her candidacy and background",
      "Local radio and Kansas Reflector coverage show that she gained traction through issue-based interviews",
      "Parelkar is the only immigration attorney in the field, giving her unique professional credibility on an issue that dominates Kansas politics. However, she's not from Kansas -- born and raised in Arkansas, moved to Kansas through marriage. In a field where \"5th-generation Kansan\" and \"6th-generation Kansan\" are common descriptors, her transplant status is a weakness. Her children's healthcare consolidation proposal is the most specific policy proposal from any Democratic candidate. The Overland Park base puts her in the same Johnson County lane as Spidel Neumann and Murray",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation was verified"
    ],
    "whereTheyWorship": "No public church affiliation was verified.",
    "quotes": [
      {
        "text": "We have a very big problem with immigration in our country right now.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00239/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "a single consolidated program",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00239/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "answer to the people. Not to party leaders. Not to political donors. Just to the people.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S6KS00239/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "a patchwork of options like Medicaid and CHIP.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "topic": "Key Quote:"
      },
      {
        "text": "We have a very big problem with immigration in our country right now, in the sense that there's a lot of confusion over it.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "topic": "Platform"
      },
      {
        "text": "a solution, not another problem.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "topic": "Platform"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00239/.\n\nCommittee page: https://www.fec.gov/data/committee/C00913293/?cycle=2026.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00239/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00913293/?cycle=2026",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Anneforkansas.Com",
        "url": "https://www.anneforkansas.com/",
        "publication": "Anneforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "1350kman.Com",
        "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/",
        "publication": "1350kman.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Anne_Parelkar",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Immirail.Com",
        "url": "https://immirail.com/profile-anne-lea-parelkar",
        "publication": "Immirail.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/in/anne-lea-parelkar-83095659/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector podcast interview",
        "url": "https://kansasreflector.com/podcasts/anne-parelkar-latest-democrat-running-for-kansas-u-s-senate-seat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "anneforkansas.com/about",
        "url": "https://www.anneforkansas.com/about",
        "publication": "Anneforkansas.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "michael-soetaert",
    "name": "Michael Soetaert",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "City Council Member",
    "hometown": "Wellington, KS (Sumner County -- south-central Kansas)",
    "education": "Not specified in available sources",
    "family": "Not detailed",
    "campaignWebsite": "https://mikeforkansas.my.canva.site",
    "whoTheyAre": "Soetaert grew up in Spring Hill and now lives in Wellington.\n\nHe has a long local-government and civic track, including a Wellington City Council stint and repeated candidacies.\n\nHis political evolution includes moving from Republican to Democrat as his views on abortion and marriage changed.\n\nBorn: Wellington, Kansas.",
    "theirRecord": "He has run for multiple offices across several cycles, which makes him one of the clearest perennial candidates in the field.\n\nPublic reporting notes his brief council service and later resignation, which opponents can use to question staying power.\n\nHis campaign leans hard into bodily autonomy and LGBTQ inclusion.\n\nLGBTQ+ rights champion: Supports the Equality Act and the Respect for Marriage Act.",
    "whatYouShouldKnow": [
      "Soetaert is historically notable even if the campaign is not well funded",
      "His prior party identity and issue shifts are both real and politically salient",
      "The minimalist Canva site suggests a very lean operation",
      "Wellington city material confirms the municipal-government connection",
      "Kake and KCUR coverage corroborate his LGBTQ-history significance in Kansas Senate politics",
      "Soetaert is a serial candidate with no viable path to the nomination. He has run for six different offices across seven years, winning only a Wellington city council seat that he resigned from after two meetings. The pattern of running, losing, and running again for progressively higher offices -- while simultaneously being unable to hold the one office he won -- is disqualifying for most voters. His historic significance as the first openly gay Kansas Senate candidate is genuine. But this is his fourth attempt at federal office. His multiple campaign websites (at least four different domains) suggest organizational chaos",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation was identified in the report materials reviewed for Michael Soetaert"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Michael Soetaert.",
    "quotes": [
      {
        "text": "Michael 'Mike' Soetaert is ONE of TWO DEMOCRATIC candidates",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S2KS00097/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Kansans voted for bodily autonomy",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S2KS00097/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "first openly gay candidate to run for U.S. Senate in Kansas",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/S2KS00097/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "various local, state and federal offices",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "topic": "Career:"
      },
      {
        "text": "run for various local, state and federal offices",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "topic": "Full Background"
      },
      {
        "text": "right wing, fundamentalist, Roman Catholic family",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://replacejerrymoran.org/",
        "topic": "MICHAEL SOETAERT (D) -- Wellington"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S2KS00097/.\n\nThe public FEC summary view I reviewed showed the filing but not a clean totals display.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S2KS00097/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Secure.Actblue.Com",
        "url": "https://secure.actblue.com/donate/michael-soetaert",
        "publication": "Secure.Actblue.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Mikeforkansas.My.Canva.Site",
        "url": "https://mikeforkansas.my.canva.site/",
        "publication": "Mikeforkansas.My.Canva.Site",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Michael_Soetaert",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Cityofwellington.Net",
        "url": "https://www.cityofwellington.net/newsview.aspx?nid=6940",
        "publication": "Cityofwellington.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kake.Com",
        "url": "https://www.kake.com/kansas-senate-candidate-shows-support-for-respect-for-marriage-act/article_7d6721ed-79ed-52f2-8765-2e521ef88df5.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "michael.soetaert1",
        "url": "https://www.facebook.com/michael.soetaert1/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "replacejerrymoran.org",
        "url": "https://replacejerrymoran.org/",
        "publication": "Replacejerrymoran.Org",
        "date": "2026-03-31"
      },
      {
        "title": "mike4kansas.org",
        "url": "https://mike4kansas.org/",
        "publication": "Mike4kansas.Org",
        "date": "2026-03-31"
      },
      {
        "title": "mikeforkansas.net",
        "url": "https://mikeforkansas.net/",
        "publication": "Mikeforkansas.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart: Soetaert biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/192430/michael-soetaert",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Sumner NewsCow: Council resignation",
        "url": "https://www.sumnernewscow.com/wellington-city-council-accepts-michael-mike-soetaerts-resignation-at-tuesdays-meeting/",
        "publication": "Sumnernewscow.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "chase-laporte",
    "name": "Chase LaPorte",
    "party": "R",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "Army Veteran / Business Administrator",
    "born": "Carthage, Missouri",
    "education": "Associate degree, Cowley County Community College (2017)",
    "campaignWebsite": "https://www.laporte4ksgov.com/",
    "whoTheyAre": "Born: Carthage, Missouri.\n\nU.S. Army: Served 2005-2013 (8 years active duty).\n\nEducation: Associate degree, Cowley County Community College, 2017.\n\nCareer: Business administrator (details limited).",
    "theirRecord": "Reducing government spending and inflation.\n\nTerm limits (cites George Washington).\n\nSmaller government (cites Ronald Reagan).\n\nLimited campaign materials available.",
    "whatYouShouldKnow": [
      "LaPorte appears to be a token primary challenger with minimal campaign infrastructure. No significant media coverage, campaign website, or fundraising activity was found. Marshall faces no serious intra-party threat",
      "LaPorte is not a serious threat to Roger Marshall. He's a perennial candidate with limited resources, no dedicated Senate campaign website (his web presence is for a gubernatorial campaign), an associate degree from a community college, and a thin public record. Marshall will win this primary without breaking a sweat. LaPorte's value in the race is as a protest vote vehicle for any Republicans dissatisfied with Marshall -- but that number in Kansas is negligible",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation was identified in the report materials reviewed for Chase LaPorte",
      "LaPorte is a Republican primary challenger to Roger Marshall with a much thinner campaign footprint than the incumbent",
      "He is an Army veteran who served from 2005 to 2013 and has also run for other offices, including governor and the U.S. House",
      "The public record does not show a dedicated Senate campaign website, and much of his web presence still points back to older campaigns",
      "A Kansas finance snippet tied to the research trail listed named contributors including Ty Masterson and several smaller-dollar donors"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Chase LaPorte.",
    "quotes": [
      {
        "text": "LaPorte for a Brighter America",
        "source": "Chase LaPorte research file",
        "date": "2026-03-31",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Transparency in government keep officials accountable.",
        "source": "Chase LaPorte research file",
        "date": "2026-03-31",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I believe in maintaining a strong National Guard presence.",
        "source": "Chase LaPorte research file",
        "date": "2026-03-31",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/H6KS03258/.\n\nFEC filing PDF: https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf.",
      "donors": [
        {
          "name": "A Kansas ethics report snippet in the research trail surfaced small donor entries, including Carri Person Joy Eakins $100, Kristina Smith $150, Nancy Moneymaker $100, TerriLois Todd $80, Steve Roberts $90, Brittany Jones $100, Randy Ross $100, Ty Masterson $2,500, Chase LaPorte $100, and Carolyn Keller $85.",
          "amount": "$100,"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Docquery.Fec.Gov",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
        "publication": "Docquery.Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Opencampaign.Com",
        "url": "https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions",
        "publication": "Opencampaign.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS03258/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Docquery.Fec.Gov",
        "url": "https://docquery.fec.gov/pdf/488/202306099581781488/202306099581781488.pdf",
        "publication": "Docquery.Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Chase_LaPorte",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "laporte4ksgov.com",
        "url": "https://www.laporte4ksgov.com/",
        "publication": "Laporte4ksgov.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "colin-mcroberts",
    "name": "Colin McRoberts",
    "party": "D",
    "position": "U.S. House candidate, KS-01",
    "electionSlug": "ks-01-house-2026",
    "incumbent": false,
    "occupation": "Associate Teaching Professor of Law, University of Kansas School of Business",
    "hometown": "Lawrence, Kansas (Douglas County)",
    "education": "B.A. in International Studies, Trinity University, San Antonio, TX (2001)",
    "family": "A professor at the University of Kansas (scientist and bestselling author -- name not confirmed in sources); Yes, raised family in Lawrence (number not specified)",
    "campaignWebsite": "https://colinforkansas.com/",
    "whoTheyAre": "Party: Democrat.\n\nResidence: Lawrence, Kansas.\n\nSpouse: A professor at the University of Kansas (scientist and bestselling author -- name not confirmed in sources).\n\nChildren: Yes, raised family in Lawrence (number not specified).",
    "theirRecord": "He filed early in the cycle and has kept the campaign focused on affordability, accountability, and district representation.\n\nPublic profiles describe him as the candidate most likely to challenge the idea that KS-01 is politically unwinnable.\n\nBecause he has no prior elected office, the race record is almost entirely his campaign and professional résumé.\n\nAffordability: Central focus on reducing cost of living.",
    "whatYouShouldKnow": [
      "McRoberts is the most academically credentialed KS-01 Democrat",
      "He has a stronger intellectual brand than a field organizer brand",
      "His biggest electoral vulnerability is still the district's deep Republican tilt",
      "KU business-school material confirms his teaching role",
      "Campaign and local-news coverage frame him as a response to Marshall rather than as a standalone political operator",
      "His background makes him the most \"policy/analysis\" candidate in the field",
      "McRoberts is the more polished and better-resourced of the two Democratic candidates. He has a real professional pedigree (Harvard Law, international consulting, university professor), a clear campaign message centered on negotiation and deal-making, and came to the race with a viral moment (the Marshall town hall video). He is running a \"businessman, not politician\" campaign in a district where that frame has appeal. His weakness is that he lives in Lawrence, has no roots in western Kansas, and is running in a district where a Democrat hasn't won since 1952. The Cook PVI of R+16 means he would need roughly a 16-point swing from the national environment to even be competitive, which is historically unprecedented for this district",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed"
    ],
    "whereTheyWorship": "No public church affiliation or denomination was verified.",
    "quotes": [
      {
        "text": "The long odds are exactly why this fight is so important.",
        "source": "Colin McRoberts research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/H6KS01195/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I'm running not as a politician, but as a businessman and negotiator.",
        "source": "Colin McRoberts research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/H6KS01195/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The first district is red in a red state.",
        "source": "Colin McRoberts research file",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The long odds are exactly why this fight is so important. Gerrymandering and partisanship have kept our incumbent politicians safe even as they give up on representing Kansans in order to serve national donors and powerbrokers. This campaign is about giving Kansans the power to choose a better deal.",
        "source": "Campaign announcement, September 17, 2025 (colinforkansas.com; KWCH)",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "On Executive Overreach:"
      },
      {
        "text": "He does not care what that vote does. He doesn't care what it does to his neighbors. He doesn't care what it does to the rest of Kansas. He doesn't care what it does to the rest of the world, as long as it serves his interests, makes the party happy, gets him more qualified to one day go to the Senate or take some other easy, easy, no-fight election.",
        "source": "On Tracey Mann, Kansas Reflector, January 5, 2026",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "On Executive Overreach:"
      },
      {
        "text": "I think that's been going on for a long time, an intentional strategy to use the east against the west, and maybe to a lesser extent, the west against the east, to drive these wedges for the benefit of party politics. And I will not and cannot play that game. We're all neighbors. The 1st District is much more alike than it is different.",
        "source": "Kansas Reflector, January 5, 2026",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "On Executive Overreach:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/H6KS01195/.\n\nFEC committee page: https://www.fec.gov/data/committee/C00919860/.",
      "donors": [
        {
          "name": "The itemized contribution mix includes in itemized individual donations and $338.00 in candidate contributions.",
          "amount": "$19,130.00"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS01195/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00919860/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Colinforkansas.Com",
        "url": "https://colinforkansas.com/",
        "publication": "Colinforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kwch.Com",
        "url": "https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://www.hayspost.com/",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Colin-mcroberts.Com",
        "url": "https://www.colin-mcroberts.com/",
        "publication": "Colin-mcroberts.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Business.Ku.Edu",
        "url": "https://business.ku.edu/people/colin-mcroberts",
        "publication": "Business.Ku.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "@colinforkansas",
        "url": "https://www.instagram.com/colinforkansas/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "facebook.com/colinforkansas",
        "url": "https://www.facebook.com/colinforkansas",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@colinmcroberts.bsky.social",
        "url": "https://bsky.app/profile/colinmcroberts.bsky.social",
        "publication": "Bsky.App",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/colin-mcroberts-5781291",
        "url": "https://www.linkedin.com/in/colin-mcroberts-5781291/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ratemyprofessors.com/professor/2506562",
        "url": "https://www.ratemyprofessors.com/professor/2506562",
        "publication": "Ratemyprofessors.Com",
        "date": "2026-03-31"
      },
      {
        "title": "take-bac-congress.us/team/colin-mcroberts",
        "url": "https://www.take-bac-congress.us/team/colin-mcroberts",
        "publication": "Take-bac-congress.Us",
        "date": "2026-03-31"
      },
      {
        "title": "Colin McRoberts - Ballotpedia",
        "url": "https://ballotpedia.org/Colin_McRoberts",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World - \"Lawrence Democrats take aim at Mann's congressional seat\" (Jan 7, 2026)",
        "url": "https://www2.ljworld.com/news/state-government/2026/jan/07/lawrence-democrats-take-aim-at-manns-congressional-seat/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - \"Kansas Democrats wrap up Democracy Fest in Hays\"",
        "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Aeon Magazine - Colin McRoberts Author Page",
        "url": "https://aeon.co/users/colin-mcroberts",
        "publication": "Aeon.Co",
        "date": "2026-03-31"
      },
      {
        "title": "Skeptical Inquirer - \"A Skeptic on the ConspiraSea Cruise\"",
        "url": "https://skepticalinquirer.org/exclusive/a-skeptic-on-the-conspirasea-cruiseinterview-with-colin-mcroberts/",
        "publication": "Skepticalinquirer.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Public Radio - \"When Experts Attack: ConspiraSea Cruise\"",
        "url": "https://kansaspublicradio.org/show/genres-when-experts-attack/2020-03-04/live-performance-when-experts-attack-1-colin-mcroberts",
        "publication": "Kansaspublicradio.Org",
        "date": "2026-03-31"
      },
      {
        "title": "State Bar of Texas - Kenneth Colin McRoberts",
        "url": "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=281096",
        "publication": "Texasbar.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Colin for Kansas - Meet Colin",
        "url": "https://colinforkansas.com/meet-colin/",
        "publication": "Colinforkansas.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "lauren-reinhold",
    "name": "Lauren Reinhold",
    "party": "D",
    "position": "U.S. House candidate, KS-01",
    "electionSlug": "ks-01-house-2026",
    "incumbent": false,
    "occupation": "Attorney (28 years experience), former federal employee (Social Security Administration)",
    "hometown": "Lawrence, Kansas (Douglas County)",
    "religion": "Christian (per public records)",
    "education": "J.D., University of Kansas School of Law (attended starting 1993)",
    "family": "Not publicly identified by name; Has children (raised family in Lawrence)",
    "campaignWebsite": "https://www.laurenforkansas.com",
    "whoTheyAre": "Party: Democrat.\n\nResidence: Lawrence, Kansas.\n\nSpouse: Not publicly identified by name.\n\nChildren: Has children (raised family in Lawrence).",
    "theirRecord": "Public coverage says she toured the district before announcing, including stops in rural towns like Hays, Dodge City, Salina, and Hutchinson.\n\nHer pitch emphasizes hospitals, wages, farmers, and restoring public-service capacity.\n\nShe is one of the newer entrants in the district race and still has a relatively small public trail.\n\nProtecting working families: Central theme.",
    "whatYouShouldKnow": [
      "Reinhold has a resonant anti-layoff, pro-service origin story",
      "Her campaign is more values-and-service driven than policy-technical",
      "She competes in the same broad Johnson County lane as Sandy Spidel Neumann",
      "LinkedIn and campaign material corroborate her federal-service background",
      "Lawrence Journal-World and Democratic event coverage show she is being treated as a legitimate activist candidate in the district",
      "Reinhold has a compelling personal story -- a federal worker displaced by DOGE who channeled her anger into a congressional run. Her 28 years of legal experience and time as a federal union officer give her deep institutional knowledge. However, she entered later than McRoberts, has less apparent fundraising infrastructure, less visible social media presence, and faces the same fundamental math problem: KS-01 is R+16. In the Democratic primary, her worker-advocate, DOGE-survivor message may resonate with primary voters who are energized by anti-Trump sentiment. Whether that's enough to beat McRoberts in the primary depends heavily on fundraising and ground game",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation was identified in the report materials reviewed for Lauren Reinhold"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Lauren Reinhold.",
    "quotes": [
      {
        "text": "I was a proud public servant.",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/H6KS01203/?cycle=2026&election_full=true",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Fight back and restore what the American people need.",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/H6KS01203/?cycle=2026&election_full=true",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Politics shouldn't be something done to people.",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/H6KS01203/?cycle=2026&election_full=true",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "If anyone in Washington wants to push policies that hurt our farmers, our hospitals, our workers, or our towns, they'll have to go through me first.",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "url": "https://www.laurenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I really care that the American people get the government they deserve, that we get the governmental services we need and deserve to make our lives better.",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "topic": "On Government Services:"
      },
      {
        "text": "Healthcare you can count on",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "topic": "On Healthcare:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/H6KS01203/?cycle=2026&election_full=true.\n\nFEC committee page: https://www.fec.gov/data/committee/C00932855/.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS01203/?cycle=2026&election_full=true",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00932855/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Laurenforkansas.Com",
        "url": "https://www.laurenforkansas.com/",
        "publication": "Laurenforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrencejournalworld.Com",
        "url": "https://www.lawrencejournalworld.com/",
        "publication": "Lawrencejournalworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook.Com",
        "url": "https://www.facebook.com/dgcodems/videos/2299093513898616/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/laurenreinhold/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "fec.gov/data/elections/house/KS/01/2026",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "laurenforkansas.com",
        "url": "https://www.laurenforkansas.com",
        "publication": "Laurenforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World - \"Lawrence Democrats take aim...\" (Jan 7, 2026)",
        "url": "https://www2.ljworld.com/news/state-government/2026/jan/07/lawrence-democrats-take-aim-at-manns-congressional-seat/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Salina Post - \"Reinhold, 1st Congressional District candidate to speak in Salina\"",
        "url": "https://salinapost.com/posts/25bbb2eb-ae15-4419-8096-972bb919a48a",
        "publication": "Salinapost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCN Online - \"Two Lawrence Dems Seek 1st District Seat\" (Jan 5, 2026)",
        "url": "https://www.kcnonline.com/wp/2026/01/05/two-lawrence-dems-seek-1st-district-seat/",
        "publication": "Kcnonline.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Lauren Reinhold Archives",
        "url": "https://kansasreflector.com/tag/lauren-reinhold/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Whistleblowers Blog - Fort Bliss",
        "url": "https://whistleblowersblog.org/human-interest/two-powerful-women-whistleblower-pairs-to-learn-from-this-womens-history-month/",
        "publication": "Whistleblowersblog.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - KS-01 Democratic Primary",
        "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026_(August_4_Democratic_primary",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "craig-musser",
    "name": "Craig Musser",
    "party": "I",
    "position": "U.S. House candidate, KS-01",
    "electionSlug": "ks-01-house-2026",
    "incumbent": false,
    "occupation": "Manager, Environment, Health & Safety at PureField Ingredients (Russell, KS)",
    "hometown": "570 SE 50 Road, Ellinwood, KS 67526 (Barton County)",
    "education": "Every student deserves access to a quality education",
    "family": "Not publicly identified; Not publicly identified",
    "campaignWebsite": "https://musserforuscongress.com/",
    "whoTheyAre": "Party: United Kansas Party (Independent).\n\nResidence: Kansas (specific city not confirmed).\n\nSpouse: Not publicly identified.\n\nChildren: Not publicly identified.",
    "theirRecord": "He filed as a third-path general-election challenger rather than a major-party candidate.\n\nThe campaign is tied to the new United Kansas Party brand, which markets itself as cross-partisan and anti-insider.\n\nPublic coverage shows him using a service-first, no-nonsense message rather than a culture-war platform.\n\nIndependent spirit: \"Honor the independent spirit that runs deep in Kansas.",
    "whatYouShouldKnow": [
      "Musser is the least institutionally resourced of the general-election contenders",
      "His biggest asset is geographic authenticity",
      "His biggest weakness is viability: limited public infrastructure and almost no visible fundraising",
      "Ballotpedia, local reporting, and his campaign site all point to the same small-footprint operation",
      "His LinkedIn and ZoomInfo traces suggest a long industrial career but not an extensive political one",
      "Craig Musser is the most enigmatic candidate in the race. He has the strongest geographic credentials of any challenger (he actually lives in the rural heart of KS-01, in Ellinwood), and his industrial/manufacturing background is the most aligned with the district's working-class character. But he has virtually no campaign infrastructure -- no website, no social media, no visible fundraising. The United Kansas Party is a new and unproven vehicle. His platform includes a reference to women's rights and self-determination that would be notable and potentially strategic in a post-Dobbs Kansas (where voters overwhelmingly rejected an anti-abortion amendment in 2022). However, without money, media, and organization, he is essentially a placeholder candidate at this stage",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No public church affiliation was verified"
    ],
    "whereTheyWorship": "No public church affiliation was verified.",
    "quotes": [
      {
        "text": "Kansans deserve a representative who serves them -- not donors, party bosses or Washington insiders.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/H6KS01211/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Effective governance is not about ideology -- it's about listening and delivering outcomes.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/H6KS01211/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The long odds are exactly why this fight is so important.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/candidate/H6KS01211/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Every Kansan, particularly women whose rights are being eroded by the incumbent party, has the right to self-determination and freedom from government intrusion into their personal lives.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "topic": "On Women's Rights:"
      },
      {
        "text": "bring discipline to fixing the tax code and healthcare system that are failing too many Kansans.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "topic": "On Tax & Healthcare:"
      },
      {
        "text": "Every student deserves access to a quality education.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "topic": "On Education:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/H6KS01211/.\n\nNo substantive federal fundraising totals surfaced in the accessible public summary I reviewed.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS01211/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Musserforuscongress.Com",
        "url": "https://musserforuscongress.com/",
        "publication": "Musserforuscongress.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Craig_Musser",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Unitedkansas.Com",
        "url": "https://www.unitedkansas.com/",
        "publication": "Unitedkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/craig-musser-82880838/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Zoominfo.Com",
        "url": "https://www.zoominfo.com/p/Craig-Musser/9122088966",
        "publication": "Zoominfo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "unitedkansas.com",
        "url": "https://unitedkansas.com/",
        "publication": "Unitedkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "facebook.com/unitedksparty",
        "url": "https://www.facebook.com/unitedksparty/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "unitedkansas.com/candidates",
        "url": "https://unitedkansas.com/candidates",
        "publication": "Unitedkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "fec.gov",
        "url": "https://www.fec.gov/data/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Great Bend Post - \"Kansas First Congressional District has a new candidate\"",
        "url": "https://greatbendpost.com/posts/d2d97c94-1d35-4fc6-a09d-3453408c580e",
        "publication": "Greatbendpost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FEC Form 2 Filing (PDF)",
        "url": "https://docquery.fec.gov/pdf/966/202602149834322966/202602149834322966.pdf",
        "publication": "Docquery.Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas SOS - United Kansas recognized",
        "url": "https://sos.ks.gov/media/press-releases/2024/05-24-24-united-kansas-recognized-as-a-political-party.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - KS-01 2026",
        "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "scott-schwab",
    "name": "Scott Schwab",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Kansas Secretary of State",
    "religion": "Non-denominational",
    "education": "Fort Hays State University, Hays, Kansas -- Bachelor of Arts, 1994",
    "family": "Michele Schwab has been Scott's wife throughout his political career. She appeared alongside Scott in the 2017 Good Morning America interview about Caleb's death. Michele is not publicly known to hold a separate public office or high-profile career. She has been described in media as a supportive partner and mother during and after the Caleb tragedy",
    "campaignWebsite": "https://scottschwab.com/",
    "whoTheyAre": `Scott Joseph Schwab was born July 9, 1972, in Great Bend, Kansas — a small agricultural city in the heart of the state. He grew up there and attended Fort Hays State University in Hays, graduating with a Bachelor of Arts degree in 1994. After college he went to work for the Kansas Farm Bureau as a career agent, then moved into pharmaceutical sales and sales training at PMSI-Tmesys, a Fortune 50 company, from 1999 to 2005. He later served as a regional sales manager and eventually Executive Vice President at CompDME, a durable medical equipment company in the Kansas City metro area. He also earned selection as a Rodel Fellow through the Aspen Institute, a competitive civic leadership program for emerging politicians from both parties.

Schwab entered the Kansas House of Representatives in 2003, representing District 49 in the Olathe and Shawnee area of Johnson County. He left in 2006 to run for the Republican nomination in Kansas’s 3rd Congressional District but finished second in that primary with 32.5% of the vote, behind banker Chuck Ahner. He returned to the House in 2009 and served continuously until 2019 — seven total terms. He rose to Speaker Pro Tempore from 2017 to 2019 and chaired the Elections Committee for roughly four years. He won the Secretary of State’s office in 2018 with 50.6% of the vote and was re-elected in 2022. In 2023 he served as president of the National Association of Secretaries of State, the fifth Kansan to hold that position. He announced his candidacy for governor in January 2025.

Schwab is married to Michele. Together they have four sons: Nathan, Caleb (deceased), Alex, and Isaac. He has spoken about them publicly: "When my kids were born, Nathan was my pleasure, Caleb was my joy, Alex was my delight and Isaac was my treasure." In August 2016, ten-year-old Caleb was killed on the Verruckt waterslide at Schlitterbahn Kansas City when the raft went airborne and he struck a metal support structure. Schwab spoke at the funeral, addressed his son’s friends, and later credited his church community and his faith for helping the family survive. The family reached a $19.7 million wrongful death settlement in January 2017 — reported to be the largest for a minor in Kansas history. In March 2025, Schwab announced he had been diagnosed with Stage 1 lung cancer after a routine screening found a nodule; surgery removed it and doctors said no further treatment was needed. He continued his campaign through recovery.`,

    "theirRecord": `As Elections Committee chairman in the Kansas House, Schwab championed the Secure and Fair Elections (SAFE) Act, which required voter photo ID in Kansas — signed into law in 2011. That bill became one of the most-cited pieces of state election legislation in the country and established his identity as an election-law conservative. As Secretary of State beginning in 2019, he consistently maintained that Kansas elections were secure, fair, and accurate — a position that put him directly at odds with President Trump’s fraud claims after the 2020 election. The Kansas Reflector headlined its November 2020 coverage of him: "As other Republicans lied about voter fraud, Kansas’ secretary of state was a voice of sanity." His exact quote: "Was there organized, rigged fraud that changed the outcome of the election? I have seen no evidence of that." In 2022 he won a Republican primary against conspiracy-aligned challenger Mike Brown 55% to 45%.

Schwab’s Secretary of State record also includes notable controversies. In 2020 he directed a private software company to disable a feature that gave his office easy access to provisional ballot data — effectively blocking a public records request filed by voting rights advocate Davis Hammet. A Kansas Court of Appeals three-judge panel unanimously ruled in July 2022 that this violated the Kansas Open Records Act. The ruling stated that his action — "choosing to conceal rather than reveal public records" — was unlawful. After the ruling Schwab still delayed providing the records. He was also named in a lawsuit from the League of Women Voters over 2021 voting laws that tightened signature match requirements and criminalized some voter registration activities. That case produced a split outcome at the Kansas Supreme Court.

On the governor’s campaign trail, Schwab has made property tax reduction his centerpiece issue, criticizing the 2025 Legislature and Governor Laura Kelly for delivering what he called "a paltry $25.88 property tax break for the owner of a $150,000 home." He supports banning China from buying land near military bases, has aligned with Trump on voter roll maintenance using the federal SAVE database — earning personal praise from the president — and opposes abortion, believing personhood begins at implantation. He loaned his campaign $1.045 million of his own money in 2025, confirming millionaire status, and raised approximately $1.42 million total through year-end 2025.`,

    "whatYouShouldKnow": [
      "Born July 9, 1972, in Great Bend, Kansas — FHSU graduate (1994), lifelong Kansan",
      "His ten-year-old son Caleb was killed in 2016 on the Verruckt waterslide at Schlitterbahn; the family received a $19.7 million wrongful death settlement",
      "Diagnosed with Stage 1 lung cancer in early 2025; surgery removed the nodule and he continued his campaign",
      "As Secretary of State he publicly rejected Trump’s 2020 election fraud claims — ‘I have seen no evidence of that’ — a rare move for a Kansas Republican at the time",
      "A Kansas Court of Appeals unanimously ruled in 2022 that Schwab violated the Kansas Open Records Act by directing a company to disable software that gave his office access to provisional ballot data",
      "Despite his 2020 stance, by 2025 Trump praised Schwab personally for being ‘one of the first leaders to step up and protect the integrity of our elections’ using the SAVE database",
      "Served seven terms in the Kansas House (2003–2019), chaired the Elections Committee, and rose to Speaker Pro Tempore",
      "Self-funded his governor’s campaign with a $1.045 million personal loan — total raised through 2025 was approximately $1.42 million",
      "His campaign platform centers on property tax cuts, banning Chinese land purchases near military bases, and bringing manufacturing jobs to rural Kansas",
      "Attends LifeMission Church in Olathe with wife Michele; states publicly: ‘As a Christian, my faith has guided me at home and in my work as Secretary of State. As Governor, I will bring those values to the job everyday.’"
    ],

    "whereTheyWorship": `Scott Schwab and his family are active members of LifeMission Church in Olathe, Kansas — a non-denominational Christian congregation led by Pastor Clint Sprague, located at 16111 S Lone Elm Rd. The church was founded in 2002 as a Bible study in Pastor Clint and Mary Sprague’s home. When ten-year-old Caleb Schwab was killed at Schlitterbahn in August 2016, Pastor Sprague served as the family’s public spokesman from the moment the tragedy unfolded, calling Caleb "an incredible young man" who "lit up a room." Caleb’s visitation and funeral service were held at LifeMission Church on August 11–12, 2016. The family had attended church there that same Sunday morning before driving to the waterpark. Schwab has spoken openly about how his faith and his church community carried the family through the loss. In a 2018 FOX4 interview he said: "God is real, and he’s been very real to me. Palpable. To my wife and to our kids, too." His campaign explicitly ties his Christian identity to his public service: "I’m Scott Schwab, a proud son of Great Bend, a Christian, a father, a believer in the American dream."`,

    "church": {
      "name": "LifeMission Church",
      "denomination": "Non-denominational",
      "url": "https://www.lifemission.church/",
      "details": "16111 S Lone Elm Rd, Olathe, KS. Lead Pastor: Clint Sprague. Founded 2002. Caleb Schwab’s funeral was held here August 12, 2016."
    },
    "quotes": [
      {
        "text": "Scott Schwab Conservative Results",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "As Governor, Scott will continue to fight against federal interference in our state.",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Scott championed several election integrity bills that are now state law, including requiring voter ID.",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "As a Christian, my faith has guided me",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "fight against federal interference in our state",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "A constitutional conservative who will protect Kansas",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "2025 year-end summary: $1,418,671.56 raised, $365,533.06 spent, $1,053,138.50 cash on hand, $1,045,000.00 other transactions.",
      "narrative": "Kansas Ethics filing: SW01SS_202601.pdf.\n\n2025 year-end summary: $1,418,671.56 raised, $365,533.06 spent, $1,053,138.50 cash on hand, $1,045,000.00 other transactions.",
      "donors": [
        {
          "name": "Named contributors visible in the itemized filing include Jenni Prochnow (), Frankie Giudicessi ($4,000), Michael Rader ($2,000), Jeanette Prenger ($2,000), Julie Mirray ($2,000), Roger Mason ($250), Kent Needham ($500), and Tim Garvey ($500).",
          "amount": "$4,000"
        },
        {
          "name": "Itemized small-dollar donors in the accessible report included Kevin Arburn Gary Grimes $25, Julia Kirk $26.03, Karen Piper $26.03, Barbara Anderson $26.03, John Rysavy $29.80, Timothy Voth $50, David Powell $50, and Ann Peterson $100.",
          "amount": "$10.41,"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "scottschwab.com",
        "url": "https://scottschwab.com/",
        "publication": "Scottschwab.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas SOS biography",
        "url": "https://www.sos.ks.gov/about/schwab-biography.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook",
        "url": "https://www.facebook.com/SchwabforGovernor",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram",
        "url": "https://www.instagram.com/scottschwabks",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "X",
        "url": "https://x.com/ScottSchwabKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SW01SS_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SS_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Apnews.Com",
        "url": "https://apnews.com/article/4587939711dc7a5effb1879374405147",
        "publication": "Apnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Christian Post: Caleb Schwab attended church with family hours before death",
        "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
        "publication": "Christianpost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FOX 4: At funeral for his son",
        "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
        "publication": "Fox4kc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LifeMission Church",
        "url": "https://www.lifemission.church/",
        "publication": "Lifemission.Church",
        "date": "2026-03-31"
      },
      {
        "title": "Heavy.com: Scott & Michele Schwab, Caleb's Parents",
        "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
        "publication": "Heavy.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@KansasSOS",
        "url": "https://x.com/KansasSOS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SchwabforSOS",
        "url": "https://www.facebook.com/SchwabforSOS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@kansassos",
        "url": "https://www.instagram.com/kansassos/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "scott-schwab-8306713",
        "url": "https://www.linkedin.com/in/scott-schwab-8306713/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State press release, October 10, 2024",
        "url": "https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Key Votes page",
        "url": "https://justfacts.votesmart.org/candidate/key-votes/34505/scott-schwab",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Legislator detail",
        "url": "https://www.billtrack50.com/legislatordetail/2823",
        "publication": "Billtrack50.Com",
        "date": "2026-03-31"
      },
      {
        "title": "2017-18 session",
        "url": "https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State -- Schwab Biography",
        "url": "https://sos.ks.gov/about/schwab-biography.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State -- Press Releases",
        "url": "https://sos.ks.gov/media/press-releases.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Scott Schwab -- Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Scott_Schwab",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Scott Schwab -- Ballotpedia",
        "url": "https://ballotpedia.org/Scott_Schwab",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Scott Schwab -- Kansapedia (Kansas Historical Society)",
        "url": "https://www.kshs.org/kansapedia/scott-schwab/20461",
        "publication": "Kshs.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Scott Schwab -- VoteSmart",
        "url": "https://justfacts.votesmart.org/candidate/biography/34505/scott-schwab",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Scott Schwab first to run for Kansas governor",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab runs for governor",
        "url": "https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab certain voting secure, eager to cut property taxes",
        "url": "https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Property tax reform campaign",
        "url": "https://kansasreflector.com/briefs/scott-schwab-aims-gop-gubernatorial-campaign-at-property-tax-reform/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Six GOP candidates debate (Jan 30, 2026)",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Campaign finance reports",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Millionaire candidates",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas governor 2026 candidate guide",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KSNT: Schwab announces cancer diagnosis",
        "url": "https://www.ksnt.com/capitol-bureau/i-will-make-a-full-recovery-scott-schwab-announces-cancer-diagnosis/",
        "publication": "Ksnt.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: KS Secretary of State announces cancer diagnosis",
        "url": "https://www.kwch.com/2025/03/21/ks-secretary-state-announces-cancer-diagnosis/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas court says secretary of state violated open records law",
        "url": "https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Appeals court says Schwab violated open records law",
        "url": "https://kansasreflector.com/2022/07/22/kansas-appeals-court-says-secretary-of-state-violated-open-records-law-by-altering-computer-system/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab refuses to provide records despite court ruling",
        "url": "https://kansasreflector.com/2022/08/01/kansas-secretary-of-state-refuses-to-provide-provisional-ballot-records-despite-court-ruling/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ACLU of Kansas: Loud Light & Hammet v. Schwab",
        "url": "https://www.aclukansas.org/cases/loud-light-hammet-v-schwab-2020/",
        "publication": "Aclukansas.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: As other Republicans lied about voter fraud, Schwab was a voice of sanity",
        "url": "https://kansasreflector.com/2020/11/09/as-other-republicans-lied-about-voter-fraud-kansas-secretary-of-state-was-a-voice-of-sanity/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "PBS: Kansas secretary of state defeats election conspiracy promoter",
        "url": "https://www.pbs.org/newshour/politics/kansas-secretary-of-state-defeats-election-conspiracy-promoter",
        "publication": "Pbs.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab rebuffs Brown criticism",
        "url": "https://kansasreflector.com/2022/07/26/schwabs-campaign-rebuffs-late-campaign-criticism-from-kansas-gop-rival-brown/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab works to build trust in elections",
        "url": "https://kansasreflector.com/2024/09/15/kansas-secretary-of-state-scott-schwab-works-to-build-trust-in-elections-in-the-face-of-skepticism/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSNT: Top Kansas official slams USPS",
        "url": "https://www.ksnt.com/capitol-bureau/this-is-unacceptable-top-kansas-election-official-demands-answers-from-usps-after-mail-errors-in-primary-election/",
        "publication": "Ksnt.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Kansas SOS sends letter to USPS",
        "url": "https://www.kwch.com/2024/09/10/kansas-secretary-state-sends-letter-usps-over-mail-in-ballot-problems/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Trump praises Kansas secretary of state",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-10-26/president-trump-kansas-secretary-of-state-scott-schwab",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab welcomes federal assist with cleansing voter lists",
        "url": "https://kansasreflector.com/2025/07/31/secretary-of-state-scott-schwab-welcomes-federal-assist-with-cleansing-voter-list/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ABC News: Family of boy killed on water slide speaks out",
        "url": "https://abcnews.go.com/US/family-boy-killed-waterslide-speaks-hurting/story?id=45445546",
        "publication": "Abcnews.Go.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FOX4: Scott Schwab speaks about journey forward",
        "url": "https://fox4kc.com/news/scott-schwab-speaks-as-criminal-cases-loom-dad-talks-of-journey-forward-after-tragedy-on-verruckt/",
        "publication": "Fox4kc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB: Family and friends honor Caleb Schwab",
        "url": "https://www.kshb.com/news/local-news/family-friends-and-community-honor-10-year-old-caleb-schwab",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB: $20M settlement",
        "url": "https://www.kshb.com/news/local-news/caleb-schwabs-family-to-recieve-20-million-in-settlement",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Bartimus Frickleton Robertson Rader: Settlement details",
        "url": "https://bflawfirm.com/schlitterbahn-wrongful-death-claims-settle-for-19732125-00/",
        "publication": "Bflawfirm.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NPR: Judge dismisses murder charges",
        "url": "https://www.npr.org/2019/02/25/697647804/judge-dismisses-murder-charges-over-boys-death-on-kansas-waterslide",
        "publication": "Npr.Org",
        "date": "2026-03-31"
      },
      {
        "title": "TIME: What we know about the water slide death",
        "url": "https://time.com/4444447/caleb-schwab-verruckt-water-slide-death/",
        "publication": "Time.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Penwell-Gabel: Caleb Thomas Schwab obituary",
        "url": "https://www.penwellgabelkc.com/obituaries/caleb-thomas-schwab",
        "publication": "Penwellgabelkc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "League of Women Voters v. Schwab",
        "url": "https://www.lwv.org/legal-center/league-women-voters-kansas-v-schwab",
        "publication": "Lwv.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Democracy Docket: Kansas voter suppression laws case",
        "url": "https://www.democracydocket.com/cases/kansas-voter-suppression-laws/",
        "publication": "Democracydocket.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Supreme Court: LWV v. Schwab (2023)",
        "url": "https://law.justia.com/cases/kansas/supreme-court/2023/124378.html",
        "publication": "Law.Justia.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/meet-kris/",
        "publication": "Kriskobach.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02KK_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/officeholders/kris-kobach/summary",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "publication": "Kriskobach.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://kcur.org/news/2025-03-20/voters-will-decide-how-to-pick-kansas-supreme-court-justices-but-how-many-will-cast-a-ballot",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://kcur.org/news/2026-01-26/reveal-more-about-the-people-picking-supreme-court-justices-kansas-lawmakers-propose-transparency-push",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "vicki-schmidt",
    "name": "Vicki Schmidt",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Insurance Commissioner / Pharmacist",
    "born": "September 15, 1955",
    "hometown": "Topeka, Kansas (40+ years)",
    "religion": "Christian (denomination unconfirmed; references \"faith\" in campaign materials)",
    "education": "University of Kansas School of Pharmacy, graduated 1978",
    "family": "Two sons (names not publicly identified)",
    "district": "20 (Shawnee and Wabaunsee counties)",
    "campaignWebsite": "https://vickiforgovernor.com",
    "whoTheyAre": "Campaign website: vickiforgovernor.com.\n\nCampaign bio: Meet Vicki.\n\nKansas Insurance Department bio: insurance.kansas.gov/about-us.\n\nSchmidt was born and raised in Wichita, graduated from KU's School of Pharmacy, and spent decades as a local pharmacist.",
    "theirRecord": "SB 95 Roll Call (LegiScan).\n\nSB 95 Full Text (Kansas Legislature).\n\nSB 409 Full Text (Kansas Legislature).\n\nHB 2744 Summary - Autism Coverage (Kansas Legislature).",
    "whatYouShouldKnow": [
      "Schmidt enters the governor race with a statewide executive office already on her résumé",
      "Her public brand is less ideological than some GOP rivals; she leans on competence, consumer protection, and health-care experience",
      "Her campaign finance report shows a healthy war chest, but less than some of the larger self-funded campaigns",
      "Eakins is one of the more explicitly faith-forward candidates in the race",
      "She has a real public-service footprint through the Wichita school board, which gives her more governing credibility than a pure outsider",
      "Her financing is dominated by a very large self-loan, making her one of the most self-funded candidates in the field",
      "Sarnecki is the most heavily self-financed outsider in the governor field I reviewed",
      "His public record is business-heavy and officeholder-light, which means there is no legislative trail to interrogate"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Vicki Schmidt.",
    "quotes": [
      {
        "text": "It's time Kansans have a governor that works as hard as they do.",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Vicki Schmidt is a lifelong Kansan and Republican.",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "more than $391 million in recouped dollars for the state",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "hard work, honesty and faith",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "more than $391 million in recouped dollars",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I will keep fighting for Kansas families",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "2025 year-end summary: $980,372.71 raised, $52,211.35 spent, $928,161.36 cash on hand.",
      "narrative": "Kansas Ethics filing: SW01VS_202601.pdf.\n\n2025 year-end summary: $980,372.71 raised, $52,211.35 spent, $928,161.36 cash on hand.",
      "donors": [
        {
          "name": "Named contributors visible in the filing include Jeanette Elder (), David Pope ($50), James Daniel ($75), Steven Steele ($100), David Kerr ($250), Lisa Stubbs ($250), Robert Regnier ($500), Thomas Blackburn ($500), and Strategic Partners International LLC ($1,000).",
          "amount": "$25"
        },
        {
          "name": "Other publicly visible donors include Ryan Baty Debby Ponton $364.36, Sandy Pickert $250.00, Fred Postlewait $100.00, and Walter Rosenbaum $260.25.",
          "amount": "$1,041.02,"
        },
        {
          "name": "Itemized receipts totaled with unitemized contributions of $561.82.",
          "amount": "$1,142,197.73,"
        },
        {
          "name": "Publicly visible donors include John Goodwin Ronda Anderson $260.25, Jim Burt $250.00, Eben Fowler $100.00, and Lenin Guerra $100.00.",
          "amount": "$2,500.00,"
        },
        {
          "name": "The filing shows in itemized receipts and $3,873.29 in unitemized contributions.",
          "amount": "$20,989.36"
        },
        {
          "name": "Contributions range from to $4,000 (Kansas allows up to $4,000 per individual per election cycle for governor)",
          "amount": "$1"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "vickiforgovernor.com",
        "url": "https://vickiforgovernor.com/",
        "publication": "Vickiforgovernor.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Meet Vicki",
        "url": "https://vickischmidt.org/meet-vicki/",
        "publication": "Vickischmidt.Org",
        "date": "2026-03-31"
      },
      {
        "title": "insurance.kansas.gov/about-us",
        "url": "https://insurance.kansas.gov/about-us/",
        "publication": "Insurance.Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook",
        "url": "https://www.facebook.com/VickiSchmidtKS",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "X",
        "url": "https://x.com/VickiSchmidtKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SW01VS_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01VS_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kctv5.Com",
        "url": "https://www.kctv5.com/2025/07/09/another-woman-throws-her-hat-into-kansas-gubernatorial-race-vicki-schmidt/",
        "publication": "Kctv5.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Vicki Schmidt initiates campaign for governor",
        "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "vickischmidt.org",
        "url": "https://vickischmidt.org/",
        "publication": "Vickischmidt.Org",
        "date": "2026-03-31"
      },
      {
        "title": "@VickiSchmidtKS",
        "url": "https://www.facebook.com/VickiSchmidtKS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "vicki-schmidt-50b11810",
        "url": "https://www.linkedin.com/in/vicki-schmidt-50b11810/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Vicki Schmidt - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Vicki_Schmidt",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vicki Schmidt - Ballotpedia",
        "url": "https://ballotpedia.org/Vicki_Schmidt",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vicki Schmidt - Vote Smart",
        "url": "https://justfacts.votesmart.org/candidate/biography/34584/vicki-schmidt",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vicki Schmidt - NAIC",
        "url": "https://content.naic.org/node/8831",
        "publication": "Content.Naic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Schmidt anchors 2026 campaign on record of service (July 21, 2025)",
        "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Schmidt blends personal experience, advocacy on breast cancer bill (Feb 3, 2026)",
        "url": "https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas bill to expand free breast cancer screening likely killed by Republican lawmakers (March 17, 2026)",
        "url": "https://www.kcur.org/politics-elections-and-government/2026-03-17/kansas-bill-to-expand-free-breast-cancer-screening-likely-killed-by-republican-lawmakers",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "The Beacon: Breast cancer screening bill killed by Kansas GOP (March 16, 2026)",
        "url": "https://thebeaconnews.org/stories/2026/03/16/breast-cancer-screening-bill-killed-by-kansas-gop/",
        "publication": "Thebeaconnews.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Kansas insurance commissioner backs bill (Feb 2, 2026)",
        "url": "https://www.kwch.com/2026/02/02/kansas-insurance-commissioner-backs-bill-eliminate-breast-cancer-screening-costs/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: \"It's humbling\" -- KS Insurance Commissioner discusses breast cancer journey (Oct 17, 2023)",
        "url": "https://www.kwch.com/2023/10/17/its-humbling-ks-insurance-commissioner-discusses-breast-cancer-journey/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Kansas insurance commissioner has breast cancer, expects full recovery (June 2023)",
        "url": "https://kansasreflector.com/briefs/kansas-insurance-commissioner-has-breast-cancer-expects-full-recovery/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World: Diagnosed with breast cancer (June 14, 2023)",
        "url": "https://www2.ljworld.com/news/state-government/2023/jun/14/kansas-insurance-commissioner-says-shes-been-diagnosed-with-breast-cancer/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KFL PAC Statement on Schmidt (Oct 27, 2025)",
        "url": "https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/",
        "publication": "Kflpac.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Campaign finance reports (Jan 9, 2026)",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Millionaire candidates burnish fundraising (Jan 19, 2026)",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Six GOP candidates toss haymakers in first debate (Jan 30, 2026)",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Insurance Journal: Kansas saves elders about $5M (Dec 3, 2025)",
        "url": "https://www.insurancejournal.com/news/midwest/2025/12/03/849821.htm",
        "publication": "Insurancejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: KS Insurance Commissioner touts new law (June 21, 2024)",
        "url": "https://www.wibw.com/2024/06/21/ks-insurance-commissioner-touts-new-law-protect-seniors-scams/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "At The Core: Spotlight on Insurance Commissioner Vicki Schmidt (Nov 14, 2024)",
        "url": "https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt",
        "publication": "Tkmagazine.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KU News: Vicki Schmidt earns pharmacy school's top honor (April 2019)",
        "url": "https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor",
        "publication": "News.Ku.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Mittelpolitan: Schmidt, Schodorf, and the Fate of the Moderate Republican Kansas Woman",
        "url": "https://mittelpolitan.substack.com/p/insight-kansas-column-for-july-vicki",
        "publication": "Mittelpolitan.Substack.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Kansas Young Republicans shut down (Oct 14, 2025)",
        "url": "https://kansasreflector.com/2025/10/14/kansas-young-republicans-shut-down-after-politico-report-on-racist-violent-encrypted-chat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WebMD: Dr. Michael Schmidt, MD",
        "url": "https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview",
        "publication": "Doctor.Webmd.Com",
        "date": "2026-03-31"
      },
      {
        "title": "MD.com: Michael J. Schmidt, MD",
        "url": "https://www.md.com/doctor/michael-j-schmidt-md",
        "publication": "Md.Com",
        "date": "2026-03-31"
      },
      {
        "title": "2022 Kansas General Election Official Vote Totals (SOS)",
        "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "2022 Kansas Insurance Commissioner Election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2022_Kansas_Insurance_Commissioner_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "2026 Kansas Gubernatorial Election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "SB 95 Roll Call (LegiScan)",
        "url": "https://legiscan.com/KS/rollcall/SB95/id/475027",
        "publication": "Legiscan.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SB 95 Full Text (Kansas Legislature)",
        "url": "https://www.kslegislature.gov/li_2016/b2015_16/measures/documents/sb95_00_0000.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SB 409 Full Text (Kansas Legislature)",
        "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/sb409_00_0000.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "HB 2744 Summary - Autism Coverage (Kansas Legislature)",
        "url": "https://www.kslegislature.gov/li_2014/b2013_14/measures/documents/summary_hb_2744_2014.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Rivercc.Org",
        "url": "https://www.rivercc.org/",
        "publication": "Rivercc.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/about",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/education",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JE_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/candidates",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "X.Com",
        "url": "https://x.com/JoyforKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram.Com",
        "url": "https://www.instagram.com/joyforks/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Philipsarnecki.Org",
        "url": "https://philipsarnecki.org/",
        "publication": "Philipsarnecki.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Realmediakc.Com",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "publication": "Realmediakc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Philipsarnecki.Org",
        "url": "https://philipsarnecki.org/contact/",
        "publication": "Philipsarnecki.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01PS_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Followthemoney.Org",
        "url": "https://www.followthemoney.org/",
        "publication": "Followthemoney.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Athletesinaction.Org",
        "url": "https://www.athletesinaction.org/",
        "publication": "Athletesinaction.Org",
        "date": "2026-03-31"
      },
      {
        "title": "X.Com",
        "url": "https://x.com/Philip_Sarnecki",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram.Com",
        "url": "https://www.instagram.com/philip_sarnecki/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Stacyrogersforks.Com",
        "url": "https://stacyrogersforks.com/",
        "publication": "Stacyrogersforks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Stacyrogersforks.Com",
        "url": "https://stacyrogersforks.com/the-rogers-report",
        "publication": "Stacyrogersforks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SR_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/stacy-l-rogers-michael-w-smith",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "X.Com",
        "url": "https://x.com/stacyrogersKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram.Com",
        "url": "https://www.instagram.com/stacyforthepeople/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiktok.Com",
        "url": "https://www.tiktok.com/@stacyrogersforthepeople",
        "publication": "Tiktok.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Youtube.Com",
        "url": "https://www.youtube.com/@StacyRogersForThePeople",
        "publication": "Youtube.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ty-masterson",
    "name": "Ty Masterson",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Executive Director, GoCreate (Koch-funded makerspace at Wichita State University)",
    "hometown": "Andover, Kansas",
    "religion": "Christian (attends NewSpring Church, Wichita)",
    "education": "Kansas State University -- attended (degree details not publicly specified in any source)",
    "district": "16th District (since 2009)",
    "campaignWebsite": "https://www.mastersonforgovernor.com/",
    "whoTheyAre": "Campaign website: mastersonforgovernor.com.\n\nCampaign bio: Meet Ty.\n\nHome-page metadata says: \"Vote Ty Masterson for Governor.\n\nMasterson says he chose to raise his family in Kansas because of \"safe communities\" and \"a low cost of living.",
    "theirRecord": "Kansas Reflector: Six GOP Candidates Debate.\n\nKansas Reflector: Bell-Ringing Incident.\n\nKansas Reflector: Transgender Sports Ban Override.\n\nKansas Reflector: SB 244 Bathroom Bill Veto.",
    "whatYouShouldKnow": [
      "Masterson is not a minor figure; he is a top Kansas legislative power broker seeking executive office",
      "The campaign is overtly ideological and heavily focused on security, crime, education, and conservative identity",
      "He is one of the few major candidates with a verified church affiliation and public church URL",
      "The campaign homepage directly links to social profiles and uses strong anti-Democratic rhetoric",
      "Public bios and site copy consistently emphasize family, Kansas roots, and a business background",
      "The campaign has already generated AP coverage and statewide attention because of Masterson's leadership position",
      "Ty Masterson is openly and directly Christian. \"I'm a follower of Jesus Christ\" is about as clear as it gets. NewSpring Church Wichita is a contemporary, non-denominational, evangelical church. His values framework (\"live your faith\") and his \"every life is precious, created by God\" statement directly tie his legislative priorities (particularly on life issues) to his faith convictions. He does not dance around it",
      "Campaign finance filings reviewed for this profile show ~$700,000 (through end of 2025)"
    ],
    "whereTheyWorship": "Denomination: Non-denominational / Independent.\n\nChurch Address: 12200 East 21st Street North, Wichita, KS.",
    "church": {
      "name": "NewSpring Church, Wichita, KS",
      "denomination": "Non-denominational / Independent",
      "details": "Denomination: Non-denominational / Independent. Church Address: 12200 East 21st Street North, Wichita, KS."
    },
    "quotes": [
      {
        "text": "Vote Ty Masterson for Governor.",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "safe communities, a low cost of living, and a shot at achieving the American Dream",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "They attend NewSpring Church.",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Kansas isn't for sale, and we're taking it back.",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "common sense conservative leadership",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "honor your word, live your faith, and always put the people you serve first",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "topic": "Evidence:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$700,000 (through end of 2025)",
      "narrative": "Kansas Ethics filing: SW01TM_202601.pdf.\n\n2025 year-end summary: $695,998.16 raised, $8,476.06 spent, $687,522.10 cash on hand.",
      "donors": [
        {
          "name": "Named contributors visible in the filing include David Murfm (), Janet Murfm ($4,000), SHAMAN BOTANICALS LLC ($4,000), Rick Kloos ($1,000), Pennie Kloos ($1,000), and Brad Starnes ($104.10).",
          "amount": "$4,000"
        },
        {
          "name": "Total Raised",
          "amount": "~$700,000 (through end of 2025)"
        },
        {
          "name": "Cash on Hand (end of 2025)",
          "amount": "$687,000"
        },
        {
          "name": "Entered 2026 with in its account",
          "amount": "$700,000"
        },
        {
          "name": "Total contributions: + (Senate campaigns)",
          "amount": "$80,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "mastersonforgovernor.com",
        "url": "https://www.mastersonforgovernor.com/",
        "publication": "Mastersonforgovernor.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Meet Ty",
        "url": "https://senatortymasterson.com/meet-ty/",
        "publication": "Senatortymasterson.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook",
        "url": "https://www.facebook.com/TyMastersonKansas",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "X",
        "url": "https://twitter.com/TyMastersonKS",
        "publication": "Twitter.Com",
        "date": "2026-03-31"
      },
      {
        "title": "newspring.org",
        "url": "https://www.newspring.org/",
        "publication": "Newspring.Org",
        "date": "2026-03-31"
      },
      {
        "title": "SW01TM_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01TM_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Apnews.Com",
        "url": "https://apnews.com/article/c465aadcc7c53c6c274f790928fc6208",
        "publication": "Apnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ty Masterson for Governor",
        "url": "https://www.mastersonforgovernor.com/services",
        "publication": "Mastersonforgovernor.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CSG Midwest Profile: Ty Masterson",
        "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
        "publication": "Csgmidwest.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Combat Antisemitism: Masterson reflects on Israel visit",
        "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
        "publication": "Combatantisemitism.Org",
        "date": "2026-03-31"
      },
      {
        "title": "@SenTyMasterson",
        "url": "https://twitter.com/sentymasterson",
        "publication": "Twitter.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Senate President Ty Masterson",
        "url": "https://www.facebook.com/presidenttymasterson/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "TyMastersonKansas",
        "url": "https://www.facebook.com/TyMastersonKansas/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@senator.tymasterson",
        "url": "https://www.instagram.com/senator.tymasterson/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "tymastersonkansas",
        "url": "https://www.linkedin.com/in/tymastersonkansas/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "senatortymasterson.com",
        "url": "https://senatortymasterson.com/",
        "publication": "Senatortymasterson.Com",
        "date": "2026-03-31"
      },
      {
        "title": "kansasreflector.com/tag/senate-president-ty-masterson/",
        "url": "https://kansasreflector.com/tag/senate-president-ty-masterson/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Masterson Launches Campaign",
        "url": "https://kansasreflector.com/2025/07/20/kansas-senate-president-ty-masterson-launches-republican-campaign-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "2026 Kansas Gubernatorial Election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ty Masterson - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ty_Masterson",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ty Masterson - Ballotpedia",
        "url": "https://ballotpedia.org/Ty_Masterson",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KMUW: Masterson Announces Bid",
        "url": "https://www.kmuw.org/2025-07-20/state-sen-ty-masterson-of-andover-announces-2026-gubernatorial-bid",
        "publication": "Kmuw.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Masterson Announces Run",
        "url": "https://www.kwch.com/2025/07/20/ty-masterson-announces-run-kansas-governor-lets-take-back-kansas/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Guide to Candidates",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart: Biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/57517/ty-masterson",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "ALEC Profile",
        "url": "https://alec.org/person/senator-ty-masterson-2/",
        "publication": "Alec.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Legislature Profile",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_masterson_ty_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "FollowTheMoney",
        "url": "https://www.followthemoney.org/entity-details?eid=6671671&default=candidate",
        "publication": "Followthemoney.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Six GOP Candidates Debate",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Bell-Ringing Incident",
        "url": "https://kansasreflector.com/2026/03/27/kansas-senate-president-celebrates-veto-override-by-ringing-bell-outside-house-angering-democrats/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Transgender Sports Ban Override",
        "url": "https://kansasreflector.com/2023/04/05/between-laughter-and-cursing-kansas-house-overrides-veto-of-transgender-sports-ban/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: SB 244 Bathroom Bill Veto",
        "url": "https://kansasreflector.com/2026/02/13/kansas-governor-vetoes-anti-trans-bathroom-bill-citing-numerous-and-significant-consequences/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: SB 244 Criticism",
        "url": "https://kansasreflector.com/2026/02/18/senate-president-ty-masterson-and-kansas-republicans-just-voted-to-send-men-into-ladies-bathrooms/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: DEI Law",
        "url": "https://kansasreflector.com/2024/04/19/kansas-governor-allows-anti-dei-bill-to-become-law-vetoes-anti-abortion-and-election-bills/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Flat Tax",
        "url": "https://kansasreflector.com/2024/03/15/kansas-senate-clear-flat-tax-plan-after-heated-discussion/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Property Tax Feud",
        "url": "https://kansasreflector.com/2026/03/17/kansas-house-senate-trade-blows-on-property-tax-relief/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Supreme Court Amendment",
        "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: School Vouchers $125M",
        "url": "https://kansasreflector.com/2025/01/29/senate-republican-promotes-education-freedom-with-125m-voucher-program-for-private-schools/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Pregnancy Center Override",
        "url": "https://kansasreflector.com/briefs/hours-after-kansas-governor-rejects-pregnancy-center-protections-legislature-overrides-her-veto/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: SB 368 Override",
        "url": "https://kansasreflector.com/2026/03/27/kansas-governor-vetoes-bill-offering-tax-breaks-to-people-using-nontraditional-health-plans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Medicaid Expansion Fails",
        "url": "https://kansasreflector.com/2025/02/18/medicaid-expansion-fails-in-kansas-senate-in-takeover-attempt-by-democrats/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Session Recap",
        "url": "https://kansasreflector.com/2026/03/30/legislature-screeches-to-a-stop-flinging-lousy-bills-everywhere-now-the-governor-has-to-clean-up/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "MicroBilt: Debt Does In Kansas Lawmaker",
        "url": "https://www.microbilt.com/news/article/debt-does-in-kansas-lawmaker",
        "publication": "Microbilt.Com",
        "date": "2026-03-31"
      },
      {
        "title": "News Radio KMAN: Senate Leader Filed for Bankruptcy",
        "url": "https://1350kman.com/2012/12/senate-leader-filed-for-bankruptcy-in-2010/",
        "publication": "1350kman.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ginny Krumme Substack: Ty Masterson, Chapter 1",
        "url": "https://ginnykrumme.substack.com/p/ty-masterson-chapter-1",
        "publication": "Ginnykrumme.Substack.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Campaign Finance Reports",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Millionaire Candidates",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Washington Examiner: Trumpworld Gets Behind Masterson",
        "url": "https://www.washingtonexaminer.com/news/campaigns/state/3883028/trumpworld-gets-behind-ty-masterson-kansas-governor-race/",
        "publication": "Washingtonexaminer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: Masterson Assembles National Team",
        "url": "https://sunflowerstatejournal.com/masterson-assembles-national-campaign-team-with-trump-ties/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Senate Campaign Finance Sources",
        "url": "https://kansasreflector.com/2023/06/04/where-did-kansas-state-senators-campaign-funds-come-from-the-answers-might-surprise-you/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Marijuana Moment: Gang Activity Fears",
        "url": "https://www.marijuanamoment.net/kansas-gop-senate-president-fears-legalizing-medical-marijuana-would-fuel-gang-activity/",
        "publication": "Marijuanamoment.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Marijuana Moment: Kill Medical Marijuana Pilot",
        "url": "https://www.marijuanamoment.net/kansas-senators-kill-bill-to-create-medical-marijuana-pilot-program/",
        "publication": "Marijuanamoment.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Marijuana Moment: 60% Support Legalization",
        "url": "https://www.marijuanamoment.net/three-in-five-kansans-back-legalizing-recreational-marijuana-and-70-want-medical-cannabis-new-poll-finds/",
        "publication": "Marijuanamoment.Net",
        "date": "2026-03-31"
      },
      {
        "title": "ALEC: Hugh Hewitt Show Appearance",
        "url": "https://alec.org/article/2024-agendas-ty-masterson-hugh-hewitt/",
        "publication": "Alec.Org",
        "date": "2026-03-31"
      },
      {
        "title": "StateAffairs Pro: Masterson Assumes ALEC Chair",
        "url": "https://pro.stateaffairs.com/ks/flash/ty-masterson-alec-chair",
        "publication": "Pro.Stateaffairs.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: ALEC Chair",
        "url": "https://sunflowerstatejournal.com/masterson-become-new-national-chair-of-alec/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Charlie Kirk Denouncement",
        "url": "https://kansasreflector.com/2026/01/28/kansas-senate-president-denounces-democrats-for-out-of-context-bs-comments-on-charlie-kirk/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Raccoon/Soros Editorial",
        "url": "https://kansasreflector.com/2025/12/11/spot-the-difference-candidate-befuddled-by-kansas-reflector-or-tipsy-raccoon-you-make-the-call/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Wine and Cheese / GoCreate",
        "url": "https://kansasreflector.com/2026/03/04/kansas-senate-budget-seeks-to-pry-state-funding-from-wine-and-cheese-crowd/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: COGE Open Records",
        "url": "https://kansasreflector.com/2025/04/23/kansas-legislatures-supermajority-makes-mockery-of-open-records-law-over-efficiency-portal-messages/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: COGE Formal Complaint",
        "url": "https://kansasreflector.com/2025/05/22/why-kansas-reflector-filed-a-complaint-about-stonewalling-by-the-senate-efficiency-panel/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Governor Doubtful on Redistricting",
        "url": "https://kansasreflector.com/2025/12/16/kansas-governor-doubtful-gop-legislators-can-pull-off-congressional-redistricting/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Senate Gets Enough Signatures",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-10-27/kansas-senate-redistricting-special-session-gerrymandering-trump",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Masterson Confirms Redistricting Plan",
        "url": "https://www.kwch.com/2025/09/24/gubernatorial-candidate-ty-masterson-confirms-plan-fall-redistricting-session/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WSU Profile: Ty Masterson",
        "url": "https://www.wichita.edu/profiles/research/Masterson-Ty.php",
        "publication": "Wichita.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "GoCreate Newsroom",
        "url": "https://www.gocreate.com/newsroom",
        "publication": "Gocreate.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "jeff-colyer",
    "name": "Jeff Colyer",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Physician / Former Governor",
    "religion": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
    "education": "Remove DEI directives and political indoctrination from K-12 schools and universities",
    "family": "The family owned a small farm in the Hays area",
    "campaignWebsite": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
    "whoTheyAre": "Campaign website: jeffcolyer.com.\n\nThe site calls him a fifth-generation Kansan from Hays and says he is dedicated to making a difference in people's lives.\n\nHe and his wife Ruth have been married since 1991 and have three daughters.\n\nPublic social accounts visible from the campaign site include X, Facebook, Instagram, and a YouTube channel.",
    "theirRecord": "Colyer became governor after Sam Brownback resigned and later ran for a full term in 2018.\n\nHis 2026 messaging emphasizes CRT in schools, private-property rights, abortion policy, STEM innovation, and energy policy.\n\nThe campaign site also highlights recent issue videos and announcements, indicating an active media strategy.\n\nStrongly pro-life.",
    "whatYouShouldKnow": [
      "Colyer is one of the best-known candidates in the field because he has already served as governor",
      "He combines a medical identity with politics, which gives him a distinct public profile in Kansas Republican politics",
      "His finance report is the largest of the governor candidates I checked in this pass",
      "The site includes issue-focused calls to action on schools, property rights, and energy",
      "The public record of his earlier governorship and 2018 campaign remains a major part of his story",
      "Kansas coverage has also tied him to a prior campaign pause after a prostate-cancer diagnosis",
      "Jeff Colyer has a Catholic education background from Hays, and his policy positions align with Catholic social teaching on life issues. However, his international medical work is through a secular organization (International Medical Corps), not a faith-based one. His current church affiliation is unknown. He may still be Catholic, he may have shifted denominations, or he may be a private worshiper. The fact that his campaign and official profiles do not prominently feature church membership is notable for a Republican running in a Kansas primary. Recommend direct inquiry",
      "Unmatched humanitarian credentials. No other candidate in this race -- or virtually any American political race -- can claim to have been the only surgeon in southern Rwanda during a genocide. His 35+ years of war zone medical service across 20+ countries is extraordinary and genuine"
    ],
    "whereTheyWorship": "Denomination: Catholic background (TMP-Marian, Hays); current affiliation uncertain.\n\nGraduated from Thomas More Prep-Marian Catholic High School in Hays (Class of 1978).",
    "church": {
      "name": "Specific current church not confirmed",
      "denomination": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
      "details": "Denomination: Catholic background (TMP-Marian, Hays); current affiliation uncertain. Graduated from Thomas More Prep-Marian Catholic High School in Hays (Class of 1978)."
    },
    "quotes": [
      {
        "text": "Dr. Jeff Colyer is seeking the GOP nomination for Governor of Kansas.",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "dedicated to making a difference in people's lives",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "sign pledge to keep Critical Race Theory out of Kansas schools",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "focus on economic prosperity, healthcare reform, and family values",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I will fight for Kansas families",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "assess, initiate, provide care, negotiate and implement large programs with more than 1,000 employees in multiple countries.",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "topic": "Notable:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$2.07 million",
      "narrative": "Kansas Ethics filing: SW01JC_202601.pdf.\n\n2025 year-end summary: $2,070,322.09 raised, $185,812.31 spent, $1,884,509.78 cash on hand, $17,493.28 in-kind, and $63,346.68 other transactions.",
      "donors": [
        {
          "name": "Named contributors visible in the filing include Stephen Reintjes (), Alan Cobb ($104.10), Janie Welsh ($1,033.06), Dylan Avatar Arnold ($520.51), and Sarah Demovish ($516.53).",
          "amount": "$516.53"
        },
        {
          "name": "Total Raised",
          "amount": "~$2.07 million"
        },
        {
          "name": "Self-Funded (Personal Loans)",
          "amount": "$1.05 million"
        },
        {
          "name": "Donor Contributions",
          "amount": "~$1.02 million"
        },
        {
          "name": "Cash on Hand",
          "amount": "$1.8 million"
        },
        {
          "name": "Total personal commitment",
          "amount": "$1.05 million"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "jeffcolyer.com",
        "url": "https://www.jeffcolyer.com/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "X",
        "url": "https://twitter.com/DrJeffColyer",
        "publication": "Twitter.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook",
        "url": "https://www.facebook.com/JeffColyerMD",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram",
        "url": "https://www.instagram.com/jeffcolyermd/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "YouTube channel",
        "url": "https://www.youtube.com/channel/UCQfQe9VJ3OhUhAV1QUwFdgg",
        "publication": "Youtube.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SW01JC_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Jeffcolyer.Com",
        "url": "https://www.jeffcolyer.com/get-involved/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kctv5.Com",
        "url": "https://www.kctv5.com/2025/05/14/former-kansas-governor-jeff-colyer-announces-he-will-run-again-2026/",
        "publication": "Kctv5.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - Kansas Historical Society",
        "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
        "publication": "Kansashistory.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB: Former Kansas governor volunteers on medical mission in Ukraine",
        "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer for Governor",
        "url": "https://www.jeffcolyer.com/index.html",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "jeffcolyer.com",
        "url": "https://jeffcolyer.com/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "colyerforgovernor.com",
        "url": "https://www.colyerforgovernor.com/",
        "publication": "Colyerforgovernor.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@DrJeffColyer",
        "url": "https://x.com/DrJeffColyer",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@GovJeffColyer",
        "url": "https://x.com/govjeffcolyer",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Dr. Jeff Colyer (@JeffColyerMD)",
        "url": "https://www.facebook.com/JeffColyerMD/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "jeff-colyer-6894363",
        "url": "https://www.linkedin.com/in/jeff-colyer-6894363/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - Ballotpedia",
        "url": "https://ballotpedia.org/Jeff_Colyer",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - National Governors Association",
        "url": "https://www.nga.org/governor/jeff-colyer/",
        "publication": "Nga.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - Georgetown Institute of Politics",
        "url": "https://politics.georgetown.edu/profile/jeff-colyer/",
        "publication": "Politics.Georgetown.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "jeffcolyer.com - About",
        "url": "https://www.jeffcolyer.com/about/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "jeffcolyer.com - About Gov",
        "url": "https://www.jeffcolyer.com/about-gov/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "jeffcolyer.com - Announcements",
        "url": "https://jeffcolyer.com/announcements.html",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Six GOP candidates debate (Jan 30, 2026)",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Prescription for change (Feb 23, 2026)",
        "url": "https://kansasreflector.com/2026/02/23/republican-candidate-for-kansas-governor-offering-voters-a-prescription-for-change/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Millionaire candidates fundraising (Jan 19, 2026)",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Colyer maneuvers closer (2025)",
        "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Colyer endorses Trump (Nov 2023)",
        "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Wokeism/Oxpecker (Nov 2025)",
        "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Colyer narrow miss 2018 fueling 2022 campaign",
        "url": "https://kansasreflector.com/2021/07/12/colyers-narrow-miss-in-2018-fueling-resurgent-gop-campaign-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Colyer jumps into 2026 race",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Colyer drops out 2022 race",
        "url": "https://www.kcur.org/news/2021-08-30/the-kansas-a-g-s-path-to-governor-gets-easier-after-his-opponent-endorses-him",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - First executive order",
        "url": "https://www.kcur.org/post/colyers-first-executive-order-kansas-governor-fight-sexual-harassment",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Faith-based adoption law",
        "url": "https://www.kcur.org/politics-elections-and-government/2018-05-18/faith-based-adoption-law-signed-quickly-becoming-kansas-campaign-fodder",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KAKE - Colyer launches bid inspired by Trump",
        "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSNT - Colyer announces bid",
        "url": "https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/",
        "publication": "Ksnt.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - FHSU speech",
        "url": "https://hayspost.com/posts/af650bef-0c19-4f73-b418-bded940b0b7a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Salina Post - Debate statements and answers",
        "url": "https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e",
        "publication": "Salinapost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Salina Post - Q&A on specific issues",
        "url": "https://salinapost.com/posts/9f9b260b-5c26-4cd6-a81c-212904371850",
        "publication": "Salinapost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NBC News - Colyer concedes 2018 primary",
        "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
        "publication": "Nbcnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CNN - Kobach wins Kansas GOP primary",
        "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
        "publication": "Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NPR - Kobach wins primary",
        "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
        "publication": "Npr.Org",
        "date": "2026-03-31"
      },
      {
        "title": "NPR - Kansas Lt. Gov. takes over as Brownback leaves",
        "url": "https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship",
        "publication": "Npr.Org",
        "date": "2026-03-31"
      },
      {
        "title": "PBS - Sexual harassment training executive order",
        "url": "https://www.pbs.org/newshour/politics/new-kansas-governor-to-require-annual-sexual-harassment-training",
        "publication": "Pbs.Org",
        "date": "2026-03-31"
      },
      {
        "title": "The Hill - Colyer ends 2022 campaign",
        "url": "https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/",
        "publication": "Thehill.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Smart Politics - Colyer and Kansas gubernatorial comeback bids",
        "url": "https://smartpolitics.lib.umn.edu/2025/05/14/jeff-colyer-and-a-review-of-kansas-gubernatorial-comeback-bids/",
        "publication": "Smartpolitics.Lib.Umn.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "CGSC Foundation - Person of Note (May 2020)",
        "url": "https://www.cgscfoundation.org/person-of-the-month-may-2020/",
        "publication": "Cgscfoundation.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jobs for America's Graduates - Bio",
        "url": "https://jag.org/dipl-team-member/jeff-colyer/",
        "publication": "Jag.Org",
        "date": "2026-03-31"
      },
      {
        "title": "House.gov - Lt. Governor biography (Sept 2013)",
        "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
        "publication": "Docs.House.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KSCB News - Sworn in as 47th Governor",
        "url": "https://www.kscbnews.net/jeff-colyer-m-d-sworn-in-as-47th-governor-of-the-state-of-kansas/",
        "publication": "Kscbnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Ruth Gutierrez Colyer - NGA",
        "url": "https://www.nga.org/governor-spouse/ruth-gutierrez-colyer/",
        "publication": "Nga.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart - Jeff Colyer",
        "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "OnTheIssues - Jeff Colyer",
        "url": "https://www.ontheissues.org/Jeff_Colyer.htm",
        "publication": "Ontheissues.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Sano Specialty Care - Dr. Colyer",
        "url": "https://sanokc.com/provider/dr-colyer/",
        "publication": "Sanokc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Renaissance Plastic Surgical Arts",
        "url": "https://www.renaissanceplasticsurgicalarts.com/",
        "publication": "Renaissanceplasticsurgicalarts.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Healthgrades - Dr. Jeffrey Colyer",
        "url": "https://www.healthgrades.com/physician/dr-jeffrey-colyer-xpdcb",
        "publication": "Healthgrades.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NKC Health - Jeffrey W. Colyer, M.D.",
        "url": "https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery",
        "publication": "Nkchealth.Org",
        "date": "2026-03-31"
      },
      {
        "title": "WebMD - Dr. Jeffrey Colyer",
        "url": "https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview",
        "publication": "Doctor.Webmd.Com",
        "date": "2026-03-31"
      },
      {
        "title": "IMC - Lt. Governor to Climb Mt. Kilimanjaro",
        "url": "https://internationalmedicalcorps.org/press-release/lt-governor-to-climb-mt-kilimanjaro-in-support-of-international-medical-corps-humanitarian-relief-efforts/",
        "publication": "Internationalmedicalcorps.Org",
        "date": "2026-03-31"
      },
      {
        "title": "James Daniel Colyer - Find a Grave",
        "url": "https://www.findagrave.com/memorial/142168654/james-daniel-colyer",
        "publication": "Findagrave.Com",
        "date": "2026-03-31"
      },
      {
        "title": "James Colyer Obituary - Kansas City Star",
        "url": "https://www.legacy.com/obituaries/kansascity/obituary.aspx?pid=174049747",
        "publication": "Legacy.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal - Colyer, Schwab most recognized",
        "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "2018 Kansas gubernatorial election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2018_Kansas_gubernatorial_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "2026 Kansas gubernatorial election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ethan-corson",
    "name": "Ethan Corson",
    "party": "D",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "State Senator / Attorney",
    "family": "Wife: Jenna Brofsky -- attorney at Husch Blackwell law firm (employment group, advising and litigation). She previously served on the Fairway City Council. Grew up in a New York City suburb, attended a Conservative synagogue",
    "campaignWebsite": "https://ethanforkansas.com",
    "whoTheyAre": "Campaign website: ethanforkansas.com.\n\nCampaign bio: About Ethan.\n\nCorson says he was raised on values of hard work, generosity, and keeping your word.\n\nHe is a lifelong Kansan, attended Garden City Community College as a baseball player, then earned degrees from Washington University in St. Louis and Washington University School of Law.",
    "theirRecord": "Corson serves in the Kansas Senate and is identified with judiciary, transportation, taxation, utilities, and oversight work.\n\nPublic-facing campaign language centers on kitchen-table issues, better schools, and lower taxes.\n\nHe is one of the Democratic candidates most associated with an establishment, policy-heavy style.\n\nTagline: \"Common sense, common ground.",
    "whatYouShouldKnow": [
      "Corson is one of the most institutionally connected Democrats in the race",
      "He is a credible Jewish candidate in Kansas statewide politics, which matters in the public record even though no synagogue was verified here",
      "The campaign site leans heavily on opportunity, schools, and taxes rather than identity politics",
      "The campaign home page surfaces an active social feed and policy-heavy messaging",
      "His official Senate committee work and Dole Institute fellowship remain part of his public brand",
      "His prior work at the Kansas Democratic Party and Commerce Department provides a notable executive/government background",
      "Ethan Corson goes to church. The Sunday school reference is specific and personal -- this is not a politician saying \"I'm a person of faith.\" He is describing a weekly family routine of church attendance with his kids. \"Making pancakes with the boys before Sunday school\" is a lived detail, not a talking point. However, the specific church and denomination were not identified. The \"Pastor Dallas\" reference and the Black History Month church visit suggest he may attend a mainline Protestant or multicultural congregation. Recommend direct inquiry",
      "Corson is the strongest Democratic candidate by every measurable metric: money, endorsements, and institutional support. His \"common sense, common ground\" messaging is designed to appeal to moderate Republicans and independents in a red state. His Jewish faith is notable in a heavily Christian state -- he does not appear to foreground it. His labor law background and union representation work will be a double-edged sword: appeals to working families but provides ammunition for Republican attacks. His time at the Kansas Democratic Party gives him deep institutional knowledge of the state's political machinery. The 8,000-mile crisscross of Kansas shows a serious effort to compete in rural areas, which is the Democratic Party's greatest weakness in the state"
    ],
    "whereTheyWorship": "Denomination: Unknown.\n\nLives in Fairway with wife Jenna and sons Isaac and Aiden.",
    "church": {
      "name": "Attends a church in the Fairway/KC area (name unknown)",
      "details": "Denomination: Unknown. Lives in Fairway with wife Jenna and sons Isaac and Aiden."
    },
    "quotes": [
      {
        "text": "Opportunities for the next generation of Kansans, so they can build a life right here.",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "work hard, give back whenever you can and always keep your word",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Better Schools. Lower Taxes.",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "work hard, give back whenever you can",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "favorite part of every week is making pancakes with the boys before Sunday school",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "topic": "Evidence:"
      },
      {
        "text": "He is describing a weekly family routine of church attendance with his kids.",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "topic": "Assessment:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "2025 year-end summary: $902,641.13 raised, $375,665.32 spent, $526,975.81 cash on hand, $43,019.00 other transactions.",
      "narrative": "Kansas Ethics filing: SW01EC_202601.pdf.\n\n2025 year-end summary: $902,641.13 raised, $375,665.32 spent, $526,975.81 cash on hand, $43,019.00 other transactions.",
      "donors": [
        {
          "name": "Named contributors visible in the filing include Tony Atterbury (), Amy Bartak ($250), Mary Becker ($200), Matt Birch ($500), Louis Bornman ($100), William Bradley ($500), and Jim Breneman ($25).",
          "amount": "$4,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "ethanforkansas.com",
        "url": "https://ethanforkansas.com/",
        "publication": "Ethanforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "About Ethan",
        "url": "https://ethanforkansas.com/about/",
        "publication": "Ethanforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SW01EC_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01EC_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ethanforkansas.Com",
        "url": "https://ethanforkansas.com/about",
        "publication": "Ethanforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kcjc.Com",
        "url": "https://www.kcjc.com/section-blog/1819-news/archived-news/4844-from-a-love-of-baseball-to-a-love-of-politics",
        "publication": "Kcjc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Ethan Corson enters race for governor",
        "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ethanforkansas.com",
        "url": "https://ethanforkansas.com",
        "publication": "Ethanforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, March 8, 2026",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ethan Corson for Kansas",
        "url": "https://www.facebook.com/ethanforkansas",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@ethanforkansas",
        "url": "https://www.instagram.com/ethanforkansas/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/ethancorson",
        "url": "https://www.linkedin.com/in/ethancorson/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Kelly endorses Corson (Nov 17, 2025)",
        "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Sebelius endorses Corson (Jan 2026)",
        "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Campaign finance reports (Jan 9, 2026)",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Rural voter appeal (Nov 25, 2025)",
        "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KC Jewish Chronicle: Corson Senate candidacy",
        "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7",
        "publication": "Kcjc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia: Ethan Corson",
        "url": "https://en.wikipedia.org/wiki/Ethan_Corson",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Ethan Corson",
        "url": "https://ballotpedia.org/Ethan_Corson",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Senate Democrats: Corson bio",
        "url": "https://www.kssenatedems.org/ethan-corson",
        "publication": "Kssenatedems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Dole Institute: Corson fellow",
        "url": "https://doleinstitute.org/about/fellows/ethan-corson/",
        "publication": "Doleinstitute.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post: Corson enters race (July 22, 2025)",
        "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KS Legislature: Sen. Corson",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "cindy-holscher",
    "name": "Cindy Holscher",
    "party": "D",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "State Senator",
    "family": "Husband: Greg Holscher",
    "campaignWebsite": "https://cindyforkansas.com/",
    "whoTheyAre": "Campaign website: cindyforkansas.com.\n\nAbout page says she is the daughter of a union construction worker and an elementary school custodian.\n\nShe says she was raised on a farm, became the first college graduate in her family, and has lived in Kansas with husband Greg and their three kids for more than 25 years.\n\nHer campaign and social pages are public on Facebook, Instagram, and X.",
    "theirRecord": "Holscher has been one of the most visible Kansas Democrats on public schools, education funding, and countering the Brownback legacy.\n\nHer campaign bio cites the Shawnee-to-Topeka walks she took with education advocates to push school funding.\n\nShe co-founded the Women’s Bipartisan Caucus and has framed her career around practical, family-oriented governance.\n\nPriority Framing: \"Kitchen table issues.",
    "whatYouShouldKnow": [
      "Holscher is one of the strongest policy-focused Democrats in the race and an established state senator",
      "Her public story is rooted in working-class background, education activism, and family economics",
      "She is openly running a fully organized campaign with social media, donation flows, and issue pages",
      "The about page is unusually specific about her family background, education activism, and statewide school-funding work",
      "Her campaign has more social footprint than many people in the field, including Facebook, Instagram, and X",
      "Kansas political coverage has also tied her to statewide fights over education and, in 2025, the insurance-commissioner race",
      "The UU church and Episcopal church appearances appear to be campaign events held at church facilities, not indicators of personal membership. Many candidates use church halls as community meeting spaces. No personal faith identity found. In a Democratic primary, candidates are less likely to lead with faith credentials. Recommend direct inquiry",
      "Holscher has the most compelling personal narrative in the Democratic field -- granddaughter of tenant farmers, daughter of a construction worker and school custodian, first-generation college graduate, single mom who worked her way up through Sprint. Her legislative record is genuinely bipartisan, and her 9 years in the statehouse give her more governing experience than Corson. But the Kelly-endorsed Corson has outflanked her on money and endorsements. Her school voucher critique is razor-sharp and resonates in rural Kansas where there simply are no private schools. Her silence on faith is notable -- in Kansas politics, that is a gap that opponents will exploit. The pressure campaign story is politically damaging to the Democratic establishment more than to Holscher herself"
    ],
    "whereTheyWorship": "Denomination: Unknown.\n\nAttended a meeting at Shawnee Mission Unitarian Universalist Church in Lenexa (October 2025 -- likely a campaign event, not worship).",
    "church": {
      "name": "Not confirmed; attended events at Shawnee Mission UU Church and St. Andrew's Episcopal",
      "details": "Denomination: Unknown. Attended a meeting at Shawnee Mission Unitarian Universalist Church in Lenexa (October 2025 -- likely a campaign event, not worship)."
    },
    "quotes": [
      {
        "text": "Cindy is running for Governor of Kansas to bring Real Solutions to Real Kansans.",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I walked with a group of education advocates from Shawnee to Topeka twice",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "As Governor, she’ll stand up for you.",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I’m running for Governor to fight for all Kansans",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I will fight for our kids, our seniors, our veterans, and our farmers",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "cost of living is too high",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "2025 year-end summary: $397,952.07 raised, $218,060.34 spent, $179,891.73 cash on hand.",
      "narrative": "Kansas Ethics filing: SW01CH_202601.pdf.\n\n2025 year-end summary: $397,952.07 raised, $218,060.34 spent, $179,891.73 cash on hand.",
      "donors": [
        {
          "name": "Named contributors visible in the filing include Thomas Adrian (), Quinta Avance ($50), Elizabeth Bishop ($100), Archie Blumhorst ($250), Rick Blumhorst ($100 and $1,000 entries), and Ross Boelling (later in the schedule).",
          "amount": "$500"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "cindyforkansas.com",
        "url": "https://cindyforkansas.com/",
        "publication": "Cindyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook",
        "url": "https://www.facebook.com/p/Cindy-Holscher-for-Kansas-100057624806871/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram",
        "url": "https://www.instagram.com/cindyforkansas/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "X",
        "url": "https://x.com/cindy4kansas",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SW01CH_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CH_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "cindyforkansas.com/about",
        "url": "https://cindyforkansas.com/about/",
        "publication": "Cindyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasdems.Org",
        "url": "https://kansasdems.org/candidates",
        "publication": "Kansasdems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Cindy Holscher - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "cindyforkansas.com",
        "url": "https://cindyforkansas.com",
        "publication": "Cindyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post, March 13, 2023",
        "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, March 8, 2026",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, August 1, 2025",
        "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Cindy Holscher for Kansas",
        "url": "https://www.facebook.com/cindyforkansas/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "cindyforsenateks.com",
        "url": "https://www.cindyforsenateks.com/",
        "publication": "Cindyforsenateks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Holscher enters race (June 12, 2025)",
        "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Bipartisan allure (Oct 6, 2025)",
        "url": "https://kansasreflector.com/2025/10/06/kansas-senator-leans-into-bipartisan-allure-in-campaign-for-kansas-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Cindy Holscher",
        "url": "https://ballotpedia.org/Cindy_Holscher",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "cindyforkansas.com/endorsements",
        "url": "https://cindyforkansas.com/endorsements/",
        "publication": "Cindyforkansas.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "marty-tuley",
    "name": "Marty Tuley",
    "party": "D",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Governor candidate",
    "family": "Wife: Lovena Tuley",
    "campaignWebsite": "https://www.tuley4gov2026.com/about-marty",
    "whoTheyAre": "Campaign website: tuley4gov2026.com.\n\nThe about page says he is a fourth-generation Kansan with roots in farming, football, and classroom learning.\n\nHe says his family is made up of farmers, teachers, and working people, and that he is \"not born into politics.\n\nThe site links public social accounts on Facebook, Instagram, YouTube, and TikTok.",
    "theirRecord": "Tuley does not have a long public office record; this is one of the campaign’s defining traits.\n\nHis public platform centers on public schools, health and fitness, economics, and common-sense governance.\n\nThat makes him more of an outsider/value candidate than a traditional legislative contender.\n\nTuley's platform is distinctly unusual for a Democrat:.",
    "whatYouShouldKnow": [
      "Tuley is still the least-developed campaign in the governor field, with the thinnest public record",
      "He is trying to build a broad, nonpartisan Kansas-values brand rather than a deep ideological machine",
      "The campaign infrastructure exists, including social accounts and donation flows, but the candidate footprint is small",
      "The website itself is a major source of public information for Tuley; the campaign did not rely heavily on third-party coverage in this pass",
      "The page includes straightforward issue tabs for public schools, health and fitness, and economics",
      "His message is written in plain language and targets voters fatigued by partisan politics",
      "Tuley is a political novice with no realistic path to the nomination. However, his candidacy is interesting because he breaks the Democratic mold on transgender athletes -- a position that could theoretically appeal to moderate Kansas voters but will alienate the progressive base. His \"obesity as a statewide health crisis\" framing is unique in this race. His background as a personal trainer/gym owner/fitness author gives him a distinctive profile, though the 2003 legal troubles with Total Fitness Athletic Center are a potential vulnerability that opponents could exploit. He has virtually no fundraising apparatus and no institutional support. His debate participation gives him a platform but not a realistic shot at winning",
      "Campaign finance filings reviewed for this profile show 2025 year-end summary: $2,600.00 raised, $193.89 spent, $2,406.11 cash on hand."
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "I'm a fourth-generation Kansan with deep roots in our state's soil and values.",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I'm not here to play party politics. I'm here to lead - with common sense, straight talk, and Kansas values.",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I believe in strong public schools, growing our local economy, and protecting personal freedoms.",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "a campaign built on common sense, Kansas values, and bold solutions",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Kansas works best when it works for everyone",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "common sense, Kansas values, and bold solutions",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
        "topic": "From campaign announcement (July 28, 2025):"
      }
    ],
    "campaignFinance": {
      "totalRaised": "2025 year-end summary: $2,600.00 raised, $193.89 spent, $2,406.11 cash on hand.",
      "narrative": "Kansas Ethics filing: SW01MT_202601.pdf.\n\n2025 year-end summary: $2,600.00 raised, $193.89 spent, $2,406.11 cash on hand.",
      "donors": [
        {
          "name": "Named contributors visible in the filing include Todd Decuir (), George Grieb ($500), Ernesto Hodison ($100), and William England ($50).",
          "amount": "$500"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "tuley4gov2026.com",
        "url": "https://www.tuley4gov2026.com/",
        "publication": "Tuley4gov2026.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=100088545015076",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram",
        "url": "https://www.instagram.com/tuley_for_gov",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "YouTube",
        "url": "https://www.youtube.com/@MartyTuley",
        "publication": "Youtube.Com",
        "date": "2026-03-31"
      },
      {
        "title": "TikTok",
        "url": "http://www.tiktok.com/@tuley_for_gov",
        "publication": "Tiktok.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SW01MT_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01MT_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "tuley4gov2026.com/about-marty",
        "url": "https://www.tuley4gov2026.com/about-marty",
        "publication": "Tuley4gov2026.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01MT_AT.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01MT_AT.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ministryofinfluence.Org",
        "url": "https://ministryofinfluence.org/candidates/martin-tuley/",
        "publication": "Ministryofinfluence.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Tuley4gov2026.Com",
        "url": "https://www.tuley4gov2026.com/contact",
        "publication": "Tuley4gov2026.Com",
        "date": "2026-03-31"
      },
      {
        "title": "tuley4gov2026.com",
        "url": "https://www.tuley4gov2026.com",
        "publication": "Tuley4gov2026.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW, July 28, 2025",
        "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, March 8, 2026",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Rural voters (Nov 25, 2025)",
        "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Amazon: Get Off Your Ass!",
        "url": "https://www.amazon.com/Get-Off-Your-Ass-Definitive/dp/1591201292",
        "publication": "Amazon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Amazon: Busting Your Butt and Gut",
        "url": "https://www.amazon.com/Busting-Your-Butt-Gut-Minimizing/dp/1591202086",
        "publication": "Amazon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ReadHowYouWant: Tuley biography",
        "url": "https://www.readhowyouwant.com/authors/details/Marty-Tuley/6407",
        "publication": "Readhowyouwant.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World: Total Fitness legal battles (2003)",
        "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Open Powerlifting: Marty Tuley",
        "url": "https://openpowerlifting.org/u/martytuley",
        "publication": "Openpowerlifting.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "charlotte-ohara",
    "name": "Charlotte O'Hara",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Activist / Former Local Official",
    "family": "Children: Mother of 5, grandmother of 7",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/charlotte-o-hara",
    "whoTheyAre": "Campaign website: oharaforkansas.com.\n\nHer biography says she was raised on a farm in Bourbon County, graduated from KU, spent over 20 years as a general contractor, homeschooled two youngest children, and now co-owns a small manufacturing company in Olathe with two sons.\n\nThe campaign page frames her as a proven conservative with a long record in local and state politics.\n\nFull Name: Charlotte O'Hara.",
    "theirRecord": "O'Hara says that during COVID she refused masks and vaccines and opposed school and business closures while serving on the Johnson County Commission.\n\nShe also served in the Kansas House and as a Republican district chairwoman and precinct committeewoman.\n\nHer public brand is centered on life, property rights, education, election integrity, and free-market politics.\n\nThe campaign site presents her as a contractor, homeschool parent, and business owner, which is a stronger image than a typical one-page political landing page.",
    "whatYouShouldKnow": [
      "O'Hara is one of the more ideologically hard-right candidates in the field",
      "Her self-funding is substantial and is a major part of her campaign finance story",
      "She has an established history in Johnson County politics and is not a novice",
      "The campaign site presents her as a contractor, homeschool parent, and business owner, which is a stronger image than a typical one-page political landing page",
      "Her campaign language is unusually explicit about opposition to masking, vaccines, and shutdowns",
      "The campaign site also emphasizes her role on the Johnson County Commission and Kansas House",
      "O'Hara is a populist firebrand who will not win the nomination but will make noise. Her combative style already cost her the Johnson County Commissioner seat in 2024, and Masterson publicly called out her approach as damaging to Republican general election prospects. Her anti-STAR bond position on the Chiefs/Royals stadium deal is actually popular with fiscal conservatives, and her \"DOGE must come to Kansas\" messaging taps into the current national mood. But at 75 with a recent electoral loss by 7 points in her own district, she lacks the credibility and resources to compete. Her prolific column-writing is both her greatest asset (transparency) and greatest liability (ammunition for opponents). She is a spoiler candidate who could pull votes from the right flank",
      "Campaign finance filings reviewed for this profile show 2025 year-end summary: $589,550.97 raised, $78,652.57 spent, $510,898.40 cash on hand."
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "I grew up in our farm family’s tradition of faith, grit and hard work.",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I would be honored to earn your support for a PROVEN conservative to bring Kansas back to its promise",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "A proven fighter for Kansas",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I look forward to visiting with you on the campaign trail!",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "strong families and strong faith communities are building blocks for a strong and safe Kansas.",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com",
        "topic": "Campaign Website:"
      },
      {
        "text": "I cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes.",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "topic": "Property Taxes:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "2025 year-end summary: $589,550.97 raised, $78,652.57 spent, $510,898.40 cash on hand.",
      "narrative": "Kansas Ethics filing: SW01CO_202601.pdf.\n\n2025 year-end summary: $589,550.97 raised, $78,652.57 spent, $510,898.40 cash on hand.",
      "donors": [
        {
          "name": "Named contributors visible in the filing include Victor Wirtz (), Ralph Yaple ($100), Sandra Nider ($35), Nancy Czinege ($104.10), Pam and Robb Ferguson ($260.25), and O'Hara's own $193,000 check/self-funding entry.",
          "amount": "$104.10"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "oharaforkansas.com",
        "url": "https://oharaforkansas.com/",
        "publication": "Oharaforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SW01CO_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CO_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "oharaforkansas.com/about-charlotte-ohara",
        "url": "https://oharaforkansas.com/about-charlotte-ohara/",
        "publication": "Oharaforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Oharaforkansas.Com",
        "url": "https://oharaforkansas.com/meet-charlotte-ohara/",
        "publication": "Oharaforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/charlotte-o-hara",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "oharaforkansas.com",
        "url": "https://oharaforkansas.com",
        "publication": "Oharaforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, November 28, 2025",
        "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, February 16, 2026",
        "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, January 30, 2026",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "O'Hara for JoCo",
        "url": "https://www.facebook.com/oharaforjoco/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post: O'Hara governor bid (March 10, 2025)",
        "url": "https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post: 2024 election results (Nov 5, 2024)",
        "url": "https://johnsoncountypost.com/2024/11/05/county-commission-races-2024-general-246243/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia: Charlotte O'Hara",
        "url": "https://en.wikipedia.org/wiki/Charlotte_O'Hara",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Charlotte O'Hara",
        "url": "https://ballotpedia.org/Charlotte_O'Hara",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "stacy-rogers",
    "name": "Stacy Rogers",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Businesswoman / Former School Board Member",
    "family": "Children: Mother of three sons (now adults), two of whom have learning challenges",
    "campaignWebsite": "https://stacyrogersforks.com/",
    "whoTheyAre": "Public materials portray Rogers as a Wichita business owner who is running as a first-time statewide candidate rather than as a longtime officeholder.\n\nHer website centers the campaign on \"People Over Politics. Kansas First.\" and repeatedly emphasizes plainspoken, low-drama politics.\n\nThe public record in this sweep did not surface a substantial elected-office history, which makes her biography more entrepreneurial and campaign-driven than legislative.\n\nFull Name: Stacy Rogers (nee Hepner).",
    "theirRecord": "I did not find a prior legislative voting record for Rogers in public state records reviewed here.\n\nThe most notable public action in the record is her early filing and the way she positioned herself as the first candidate to declare and file.\n\nNo major court, disciplinary, or governmental controversy surfaced in this pass.\n\nDay One Executive Order: \"Go through each Department with a fine tooth comb, root out inefficiencies, mishandling and fraud.",
    "whatYouShouldKnow": [
      "Rogers is a low-infrastructure candidate with a broad outsider pitch rather than a detailed officeholder record",
      "Her campaign is real enough to have a functioning ethics filing, social footprint, and some itemized donor activity",
      "The small finance base suggests she remains an underbuilt but active statewide campaign",
      "Social accounts public on the campaign site include Facebook, Instagram, LinkedIn, TikTok, X, and YouTube",
      "The state filing provides the best public proof that the campaign is actually operating with receipts and expenditures",
      "Public coverage in local/news aggregators frames her as a newer entrant rather than a household Kansas political figure",
      "Rogers has a compelling personal story -- homeschooling mother of children with learning challenges, pharmacy background, small business owner with a nationally franchised brand. Her early declaration and first-to-file status show ambition, but her fundraising is essentially nonexistent compared to the major candidates. Her \"first female Republican governor\" angle is noteworthy but insufficient without serious money. Her platform is standard conservative (government efficiency, property taxes, pro-life) without a distinctive breakthrough message. The Kids Closet national franchise business is actually a more impressive credential than it initially appears -- running a national franchise system requires real organizational skill. But without a fundraising breakthrough, she is a long-shot candidate",
      "Campaign finance filings reviewed for this profile show public reporting on the filing showed roughly $25,542.98 raised and $14,470.23 cash on hand."
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "People Over Politics. Kansas First.",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Straight Talk. Real Issues. For All Kansans.",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "No spin. No political filter.",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I was the first candidate to declare and file.",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Go through each Department with a fine tooth comb, root out inefficiencies, mishandling and fraud",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com",
        "topic": "Campaign Website:"
      },
      {
        "text": "funnel millions into investor pockets instead of strengthening local communities",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com",
        "topic": "Campaign Website:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Public reporting on the filing showed roughly $25,542.98 raised and $14,470.23 cash on hand.",
      "narrative": "Kansas ethics filing: total receipts $24,862.65, expenditures $11,072.75, cash on hand $14,470.23, in-kind $1,200.00, other transactions $2,747.79.\n\nThe filing shows $20,989.36 in itemized receipts and $3,873.29 in unitemized contributions.",
      "donors": [
        {
          "name": "The filing shows in itemized receipts and $3,873.29 in unitemized contributions.",
          "amount": "$20,989.36"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Stacyrogersforks.Com",
        "url": "https://stacyrogersforks.com/",
        "publication": "Stacyrogersforks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Stacyrogersforks.Com",
        "url": "https://stacyrogersforks.com/the-rogers-report",
        "publication": "Stacyrogersforks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SR_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/stacy-l-rogers-michael-w-smith",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "X.Com",
        "url": "https://x.com/stacyrogersKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram.Com",
        "url": "https://www.instagram.com/stacyforthepeople/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiktok.Com",
        "url": "https://www.tiktok.com/@stacyrogersforthepeople",
        "publication": "Tiktok.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Youtube.Com",
        "url": "https://www.youtube.com/@StacyRogersForThePeople",
        "publication": "Youtube.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Yahoo.Com",
        "url": "https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html",
        "publication": "Yahoo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "stacyrogersforks.com",
        "url": "https://stacyrogersforks.com",
        "publication": "Stacyrogersforks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Stacy Hepner Rogers",
        "url": "https://www.facebook.com/StacyHepnerRogers/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KAKE: Rogers announces (Feb 2025)",
        "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSN: Republican woman for governor",
        "url": "https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/",
        "publication": "Ksn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Stacy Rogers",
        "url": "https://ballotpedia.org/Stacy_Rogers",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas governor 2026 guide (July 24, 2025)",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Schooley Mitchell: Eberly Farm / Kids Closet story",
        "url": "https://www.schooleymitchell.com/news/rholter/feature-story-eberly-farm-and-kids-closet-connection/",
        "publication": "Schooleymitchell.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Riley County Republicans: Meet Rogers",
        "url": "https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/",
        "publication": "Rileyks.Gop",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "joy-eakins",
    "name": "Joy Eakins",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Governor candidate",
    "family": "Not identified in available records. No spouse or children referenced in campaign materials or news coverage found",
    "campaignWebsite": "https://www.kansascomeback.com/about",
    "whoTheyAre": "The public campaign bio says she is a \"strong conservative and America First patriot\" and emphasizes that she used data analysis in the school-closure era.\n\nEakins presents herself as a problem-solver who helped show how Kansas students could return to classrooms safely.\n\nHer biography also includes family and faith markers: married to Eric for 31 years, mother of a son serving in the Air Force, and a public Christian identity.\n\nFull Name: Joy Eakins.",
    "theirRecord": "Eakins has a public record as a Wichita school board member rather than as a legislator.\n\nThe campaign site frames her school-board service and data work as the main proof point for her competence.\n\nIn public sources reviewed here, the most significant actions were tied to education policy and the COVID-school reopening fight rather than partisan officeholding.\n\nTrump Alignment: Explicitly aligns with Trump, claims Kansas is on the cusp of a \"golden age\" under his leadership.",
    "whatYouShouldKnow": [
      "Eakins is one of the more explicitly faith-forward candidates in the race",
      "She has a real public-service footprint through the Wichita school board, which gives her more governing credibility than a pure outsider",
      "Her financing is dominated by a very large self-loan, making her one of the most self-funded candidates in the field",
      "The campaign site provides a consistent social footprint and the clearest current messaging",
      "The ethics report shows a serious statewide campaign operation despite the outsider branding",
      "Publicly available school-board and education-related coverage remains the best independent context for her record",
      "Eakins is a serious person with a serious resume -- Bell Labs, Lucent, Avaya, founding a successful data firm, chairing the Wichita Chamber. Her Theological Studies background and company name \"Cornerstone\" suggest a faith-rooted worldview without being heavy-handed. But her campaign is almost entirely self-funded ($1M personal loan out of $1.14M total), which raises questions about grassroots support. Her explicit Trump alignment (\"golden age\") may help in a Republican primary but could be a liability in the general. Her school board experience (won by just 46 votes, chose not to run for re-election) is thin public service experience. Her \"medical freedom\" messaging is coded anti-vaccine/anti-mandate language from the COVID era. At the debate, she positioned herself as an outsider alongside Sarnecki against the establishment candidates",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed"
    ],
    "whereTheyWorship": "The campaign bio says she is a \"devout Christian\" and a \"faithful member of River Community Church.\n\nChurch URL verified in public web search: https://www.rivercc.org/.",
    "church": {
      "name": "River Community Church",
      "details": "The campaign bio says she is a \"devout Christian\" and a \"faithful member of River Community Church. Church URL verified in public web search: https://www.rivercc.org/."
    },
    "quotes": [
      {
        "text": "strong conservative and America First patriot",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.rivercc.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "faithful member of River Community Church.",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.rivercc.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "proved how we could get kids back into Kansas classrooms safely",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.rivercc.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Joy used her data analytics firm",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.rivercc.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Joy used her data analytics firm to prove how we could get kids back into Kansas classrooms safely",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "in light of the people and organizations that produced it",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com",
        "topic": "Campaign Website:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas ethics filing: total contributions and other receipts $1,142,759.55, expenditures $116,268.91, cash on hand $1,026,490.64, other transactions $1,000,000.00.\n\nThe filing shows at least one major self-financing transaction: Joy Eakins loaned $1,000,000.00 to her campaign on 12/29/25.",
      "donors": [
        {
          "name": "Other publicly visible donors include Ryan Baty Debby Ponton $364.36, Sandy Pickert $250.00, Fred Postlewait $100.00, and Walter Rosenbaum $260.25.",
          "amount": "$1,041.02,"
        },
        {
          "name": "Itemized receipts totaled with unitemized contributions of $561.82.",
          "amount": "$1,142,197.73,"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Rivercc.Org",
        "url": "https://www.rivercc.org/",
        "publication": "Rivercc.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/about",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/education",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JE_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/candidates",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "X.Com",
        "url": "https://x.com/JoyforKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram.Com",
        "url": "https://www.instagram.com/joyforks/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SW01JK_AT.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01JK_AT.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "kansascomeback.com",
        "url": "https://www.kansascomeback.com",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, January 19, 2026",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSN News",
        "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
        "publication": "Ksn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, January 30, 2026",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Joy for KS",
        "url": "https://www.facebook.com/JoyforKS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Joy Eakins - Cornerstone Data, Inc",
        "url": "https://www.linkedin.com/in/joyeakins/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KAKE: Eakins discusses run",
        "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wichita Chamber: Eakins podcast (Jan 2023)",
        "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
        "publication": "Wichitachamber.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Cornerstone Data: About Us",
        "url": "https://cornerstonedata.com/about-us/",
        "publication": "Cornerstonedata.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Joy Eakins",
        "url": "https://ballotpedia.org/Joy_Eakins",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "philip-sarnecki",
    "name": "Philip Sarnecki",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Businessman",
    "family": "Wife: Heidi Sarnecki",
    "campaignWebsite": "https://philipsarnecki.org/",
    "whoTheyAre": "Public campaign materials describe Sarnecki as a Kansas dad, husband, and businessman who built companies and kept a strong family-business identity.\n\nHis campaign site says he built businesses employing nearly 1,000 Kansans and points to leadership in finance and entertainment ventures.\n\nPublicly visible biographical markers include RPS Financial Group, 513 Films, and service on the Athletes in Action board.\n\nFull Name: R. Philip Sarnecki.",
    "theirRecord": "Sarnecki has no public legislative voting record because he is not a current or former elected officeholder in the files reviewed here.\n\nHis public record is therefore mainly entrepreneurial, philanthropic, and campaign-oriented.\n\nThe most consequential campaign action in the public record is the scale of his self-financing.\n\nTagline: \"Stand with President Trump.",
    "whatYouShouldKnow": [
      "Sarnecki is the most heavily self-financed outsider in the governor field I reviewed",
      "His public record is business-heavy and officeholder-light, which means there is no legislative trail to interrogate",
      "The campaign leans into Christian-conservative and family-business identity",
      "The campaign site includes social links for Facebook, X, Instagram, and YouTube",
      "The state ethics report gives the clearest public view of how his campaign is funded",
      "Public interview coverage and his website are the best sources for his business and faith framing",
      "Sarnecki is the most interesting minor Republican candidate and arguably the one with the best chance of breaking into the top tier. His advantages:",
      "Money: More cash on hand than any other candidate in either party. Money buys TV ads, and TV ads win primaries in Kansas"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Philip Sarnecki.",
    "quotes": [
      {
        "text": "Kansas dad, husband and businessman",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "built businesses that have employed nearly 1,000 Kansans",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "guided by his Christian faith and conservative values",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I’m just a Kansas dad, husband and businessman",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "faith, business, outsider vision",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Stand with President Trump",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "topic": "Focus:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas ethics filing: total contributions and other receipts $2,528,715.73, expenditures $209,667.81, cash on hand $2,319,047.92, in-kind contributions $215,543.04.\n\nThe campaign is dominated by a self-loan of $2,000,000.00 from Philip Sarnecki on 12/31/25.",
      "donors": [
        {
          "name": "Publicly visible donors include John Goodwin Ronda Anderson $260.25, Jim Burt $250.00, Eben Fowler $100.00, and Lenin Guerra $100.00.",
          "amount": "$2,500.00,"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Philipsarnecki.Org",
        "url": "https://philipsarnecki.org/",
        "publication": "Philipsarnecki.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Realmediakc.Com",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "publication": "Realmediakc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Philipsarnecki.Org",
        "url": "https://philipsarnecki.org/contact/",
        "publication": "Philipsarnecki.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01PS_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Followthemoney.Org",
        "url": "https://www.followthemoney.org/",
        "publication": "Followthemoney.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Athletesinaction.Org",
        "url": "https://www.athletesinaction.org/",
        "publication": "Athletesinaction.Org",
        "date": "2026-03-31"
      },
      {
        "title": "X.Com",
        "url": "https://x.com/Philip_Sarnecki",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram.Com",
        "url": "https://www.instagram.com/philip_sarnecki/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "philipsarnecki.org",
        "url": "https://philipsarnecki.org",
        "publication": "Philipsarnecki.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, January 30, 2026",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Philip Sarnecki For Governor",
        "url": "https://www.facebook.com/p/Philip-Sarnecki-For-Governor-61579950041528/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "R. Philip Sarnecki - 513 Films, LLC",
        "url": "https://www.linkedin.com/in/philipsarnecki/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Philip Sarnecki | Producer",
        "url": "https://www.imdb.com/name/nm3671154/",
        "publication": "Imdb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Sarnecki launches campaign (Sept 2025)",
        "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Millionaire candidates (Jan 19, 2026)",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WLT Report: Meet the Republican businessman outsider (March 18, 2026)",
        "url": "https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/",
        "publication": "Wltreport.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Trending Politics: Frontrunner emerges",
        "url": "https://trendingpoliticsnews.com/new-frontrunner-emerges-in-key-race-as-gop-candidate-shatters-fundraising-records-mace/",
        "publication": "Trendingpoliticsnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: Sarnecki announces (Sept 2, 2025)",
        "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NOLN: Strickland Brothers franchise owner",
        "url": "https://www.noln.net/site-placement/latest-news/news/55314781/strickland-brothers-10-minute-oil-change-franchise-owner-running-for-kansas-governor",
        "publication": "Noln.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Bott Radio Network: Sarnecki interview (Oct 3, 2025)",
        "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
        "publication": "Bottradionetwork.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "kris-kobach",
    "name": "Kris Kobach",
    "party": "R",
    "position": "Kansas Attorney General",
    "electionSlug": "kansas-ag-2026",
    "incumbent": true,
    "occupation": "Attorney General / Former Secretary of State",
    "religion": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
    "campaignWebsite": "https://kriskobach.com/meet-kris/",
    "whoTheyAre": "Kobach built his national reputation through immigration, election, and federalism litigation long before becoming attorney general.\n\nThe campaign bio emphasizes a long legal career that included federal litigation against DACA, federal vaccination mandates, DHS detention policy, and Air Force policy tied to religious beliefs.\n\nThe public record around him is unusually dense because he is both a statewide official and a recurring litigator in high-salience conservative causes.\n\nKris W. Kobach is Kansas attorney general, a former Kansas secretary of state, and the best-known hardline election-law lawyer in the state GOP.",
    "theirRecord": "As attorney general, Kobach has kept the office aligned with Republican legal strategy on elections, state authority, and social-issue litigation.\n\nHis campaign materials and press statements are tightly linked to the proposed Kansas Supreme Court selection amendment and the 2026 constitutional election fights.\n\nHe was the architect of Kansas election-law controversies during his secretary of state tenure and remains the most prominent voice for proof-of-citizenship and anti-elite court reform.\n\nThe public record also includes his 2022 Senate campaign ethics penalty for campaign-law violations tied to We Build the Wall.",
    "whatYouShouldKnow": [
      "Kobach is not just a candidate profile; he is an institution in Kansas conservative legal politics",
      "His litigation style is the throughline of his public identity, and that style now shapes the attorney general's office",
      "Election administration, voter eligibility, and court-selection reform are the core themes that dominate his public record",
      "Kobach's 2025 state filing reports $502,626 cash on hand and $337,330.24 in contributions",
      "His campaign literature emphasizes lawsuits against OSHA, DHS, and the Air Force",
      "He is the face of the 2026 effort to elect Kansas Supreme Court justices",
      "His campaign bio explicitly ties him to DACA litigation, federal vaccination litigation, DHS detention litigation, and Air Force religious-freedom litigation",
      "The Reflector and other local outlets frame him as the central advocate for changing Kansas Supreme Court selection"
    ],
    "whereTheyWorship": "Denomination: Evangelical / Non-denominational (affiliated with Morning Star International, Nashville).\n\nChurch Address: 998 N 1771 Rd, Lawrence, KS 66049.",
    "church": {
      "name": "Morning Star Church, Lawrence, KS",
      "denomination": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "details": "Denomination: Evangelical / Non-denominational (affiliated with Morning Star International, Nashville). Church Address: 998 N 1771 Rd, Lawrence, KS 66049."
    },
    "quotes": [
      {
        "text": "stands firm in his faith,",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Today marks an historic turning point in Kansas.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Currently, Kobach is engaged in three federal lawsuits against the Biden administration.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "He lives near Lecompton with his wife, Heather, and their five children.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "People, not only lawyers in smoke-filled back rooms, should have a voice in selecting Kansas Supreme Court justices.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Kansas Attorney General Kris Kobach was raised in Topeka, Kansas where he graduated from Washburn Rural High School.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "The public finance picture is large and well resourced: the existing report trail and earlier review show roughly $337,330.24 raised, $52,558.52 spent, and $502,626 cash on hand.",
      "narrative": "The Kansas ethics index links Kobach's 2026 cycle report and his statewide candidate filings.\n\nThe public finance picture is large and well resourced: the existing report trail and earlier review show roughly $337,330.24 raised, $52,558.52 spent, and $502,626 cash on hand.",
      "donors": [
        {
          "name": "Itemized small-dollar donors in the accessible report included Kevin Arburn Gary Grimes $25, Julia Kirk $26.03, Karen Piper $26.03, Barbara Anderson $26.03, John Rysavy $29.80, Timothy Voth $50, David Powell $50, and Ann Peterson $100.",
          "amount": "$10.41,"
        },
        {
          "name": "Kevin Arburn",
          "amount": "$10.41"
        },
        {
          "name": "Gary Grimes",
          "amount": "$25.00"
        },
        {
          "name": "Julia Kirk",
          "amount": "$26.03"
        },
        {
          "name": "Karen Piper",
          "amount": "$26.03"
        },
        {
          "name": "Barbara Anderson",
          "amount": "$26.03"
        },
        {
          "name": "John Rysavy",
          "amount": "$29.80"
        },
        {
          "name": "Timothy Voth",
          "amount": "$50.00"
        },
        {
          "name": "David Powell",
          "amount": "$50.00"
        },
        {
          "name": "Ann Peterson",
          "amount": "$100.00"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/meet-kris/",
        "publication": "Kriskobach.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "publication": "Kriskobach.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02KK_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/officeholders/kris-kobach/summary",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://kcur.org/news/2025-03-20/voters-will-decide-how-to-pick-kansas-supreme-court-justices-but-how-many-will-cast-a-ballot",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://kcur.org/news/2026-01-26/reveal-more-about-the-people-picking-supreme-court-justices-kansas-lawmakers-propose-transparency-push",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kobach Religion - WhatReligionIsInfo",
        "url": "https://whatreligionisinfo.com/kobach-religion/",
        "publication": "Whatreligionisinfo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Morning Star Church Lawrence",
        "url": "https://msclawrence.com/",
        "publication": "Msclawrence.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: Kobach denounces vandalism at his church",
        "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas Trial Investigates Religious Discrimination in Kobach's Office",
        "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "chris-mann",
    "name": "Chris Mann",
    "party": "D",
    "position": "Attorney General candidate",
    "electionSlug": "kansas-ag-2026",
    "incumbent": false,
    "occupation": "Attorney, Owner of Mann Law Firm, P.A. (est. 2016/2017)",
    "born": "$50.00",
    "hometown": "Not publicly specified; his father was a police officer, and Chris followed in his footsteps. He attended the University of Kansas in Lawrence, KS",
    "family": "Ashley Mann -- Cardiothoracic surgeon practicing in Topeka (some reports say Olathe). Supported Chris in opening his law firm in 2016.; Details",
    "campaignWebsite": "https://chrismannforkansas.com/",
    "whoTheyAre": "Mann's public profile is built around law enforcement, prosecution, and a family story that campaign materials frame as faith-driven service.\n\nThe campaign site says he \"answered the call of his faith\" and later moved into prosecution and broader public service.\n\nThe accessible public record shows a candidate who presents himself as a practical institutionalist: former police officer, former prosecutor, and current statewide contender.\n\nChris D. Mann is a Kansas attorney general candidate, former prosecutor, and former police officer from the Johnson County/Overland Park orbit.",
    "theirRecord": "Mann has not held statewide office yet, so the public record is primarily campaign and professional rather than roll-call based.\n\nThe strongest public throughline is his insistence on defending elections, law enforcement, and constitutional norms rather than running as a culture-war litigator.\n\nHis 2026 campaign positions him as the anti-Kobach option in the Republican primary.\n\nPublic Safety / Crime: Top priority: lowering Kansas violent crime rate. Focus on fentanyl distribution, drug trafficking, retail crime, white-collar fraud. \"As a former police officer and prosecutor, I have seen the effect violent crime has on victims and their communities.",
    "whatYouShouldKnow": [
      "Mann is the most credible establishment alternative to Kobach in the Republican field",
      "His background in policing and prosecution gives him a real law-and-order credential rather than a purely ideological one",
      "He has significant financial backing relative to a typical down-ballot Kansas campaign",
      "His 2025 filing reports $536,639.57 raised and $257,257.08 cash on hand",
      "He is running as a prosecutor and police-officer candidate, not as a career politician",
      "His campaign is built around \"defend the rule of law\" messaging",
      "The campaign and local reporting frame him as a former prosecutor entering the race, not as a long-time elected official",
      "His campaign website is active and has a direct issue frame around law enforcement and the Constitution"
    ],
    "whereTheyWorship": "No public church affiliation could be verified for Chris Mann in the sources reviewed. His campaign materials do not foreground faith, and the raw research files do not identify a congregation. If he worships privately, that information was not public-facing in the material I could verify.",
    "quotes": [
      {
        "text": "answered the call of his faith",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Common sense, common ground.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Chris Mann has dedicated his life to serving and protecting Kansas communities.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "He will defend the Constitution, protect the rule of law...",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Chris Mann has dedicated his life to serving and protecting Kansas communities - first as a police officer and then as a prosecutor.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "He will defend the Constitution, protect the rule of law, and ensure Kansas families are safe.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "The 2026 Kansas ethics report shows a well-funded campaign: $536,639.57 raised, $280,041.49 spent, and $257,257.08 cash on hand.",
      "narrative": "The 2026 Kansas ethics report shows a well-funded campaign: $536,639.57 raised, $280,041.49 spent, and $257,257.08 cash on hand.\n\nThe filing also showed $7,655.77 in in-kind support and no personal loans in the summary page reviewed.",
      "donors": [
        {
          "name": "Itemized donors included Evelyn Adams Thomas Adrian $500, Paige Ballard $200, James Bartimus $1,000, Louis Bornman $50, Jim Breneman $50, Jane Byrnes $25, Anita Dick $10, Patricia Dick $10, William Dudark $25, S. Dru Forrester $250, Rebekah Gaston $250, Bill Giles $110, Haley Goucher $50, Kathy Hance $100, Andrea Himoff $1,000, Karen Mann $500, Deb Miller $200, Kathleen Rankin $50, David Rodeheffer $50, Jon Rosell $25, Linda Salem $500, Carol Sanders $25, Xinglei Shen $250, Rita Stollman $7, Anne Stroud $100, Daniel Swenson $25, Scott Teeter $1,000, Rachel Van Wingen $100, and Mary Wyrsch $100.",
          "amount": "$25,"
        },
        {
          "name": "James Bartimus",
          "amount": "$1,000.00"
        },
        {
          "name": "Thomas Adrian",
          "amount": "$500.00"
        },
        {
          "name": "Paige Ballard",
          "amount": "$200.00"
        },
        {
          "name": "Louis Bornman",
          "amount": "$50.00"
        },
        {
          "name": "Jim Breneman",
          "amount": "$50.00"
        },
        {
          "name": "Evelyn Adams",
          "amount": "$25.00"
        },
        {
          "name": "Jane Byrnes",
          "amount": "$25.00"
        },
        {
          "name": "Anita Dick",
          "amount": "$10.00"
        },
        {
          "name": "More than doubled his fundraising at this point compared to 2022 ( vs. $205K).",
          "amount": "$537K"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Chrismannforkansas.Com",
        "url": "https://chrismannforkansas.com/",
        "publication": "Chrismannforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2026/03/23/former-prosecutor-enters-kansas-senate-race/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02CM_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/23/former-prosecutor-enters-kansas-senate-race/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/rep_mann_chris_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Kansas AG Election 2026 May Repeat 2022",
        "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: Mann Announces Second Bid",
        "url": "https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Emporia News: 2026 Race",
        "url": "https://emporianews.com/2026-kansas-attorney-general-race-could-mirror-2022-as-chris-mann-announces-candidacy-against-kris-kobach/",
        "publication": "Emporianews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Meet Chris -- Campaign Bio",
        "url": "https://chrismannforkansas.com/meet-chris/",
        "publication": "Chrismannforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Chris Mann for Kansas -- News",
        "url": "https://chrismannforkansas.com/news/",
        "publication": "Chrismannforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: \"Former prosecutor Chris Mann announces candidacy for attorney general\" (Jul 30, 2025)",
        "url": "https://www.kwch.com/2025/07/30/former-prosecutor-chris-mann-announces-candidacy-attorney-general/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Times: Mann running 2026",
        "url": "https://lawrencekstimes.com/2025/07/30/mann-running-2026/",
        "publication": "Lawrencekstimes.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: \"Mann more than doubles fundraising from '22 attorney general's race\"",
        "url": "https://sunflowerstatejournal.com/mann-more-than-doubles-fundraising-from-22-attorney-generals-race/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: \"Reprise of 2022 Kansas attorney general's race?\"",
        "url": "https://sunflowerstatejournal.com/reprise-of-2022-kansas-attorney-generals-race/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: \"Mann makes race for attorney general official\"",
        "url": "https://sunflowerstatejournal.com/new-mann-makes-race-for-attorney-general-official/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Kansas attorney general candidate emerges from tragedy with refined sense of public service\" (Sep 6, 2022)",
        "url": "https://kansasreflector.com/2022/09/06/kansas-attorney-general-candidate-emerges-from-tragedy-with-refined-sense-of-public-service/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Kansas attorney general candidates split on voter fraud, abortion rights, immigration\" (Sep 23, 2022)",
        "url": "https://kansasreflector.com/2022/09/23/kansas-attorney-general-candidates-split-on-voter-fraud-abortion-rights-immigration/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: \"Well-known, polarizing Kris Kobach faces newcomer Chris Mann\" (Oct 4, 2022)",
        "url": "https://www.kcur.org/news/2022-10-04/well-known-polarizing-kris-kobach-faces-newcomer-chris-mann-for-kansas-attorney-general",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Chris Mann promises to fight dark money\" (Oct 17, 2022)",
        "url": "https://kansasreflector.com/2022/10/17/chris-mann-promises-to-fight-dark-money-if-elected-kansas-attorney-general/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR \"Up to Date\": Kansas Attorney General candidate Chris Mann interview (Oct 21, 2022)",
        "url": "https://www.kcur.org/podcast/up-to-date/2022-10-21/kansas-attorney-general-candidate-chris-mann",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Kansas AG candidates Kris Kobach, Chris Mann make pitch to voters in TV debate\" (Oct 26, 2022)",
        "url": "https://kansasreflector.com/2022/10/26/kansas-ag-candidates-kris-kobach-chris-mann-make-pitch-to-voters-in-tv-debate/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Flatland KC: \"Kobach, Mann Spar Over Proper Role of Kansas Attorney General\"",
        "url": "https://flatlandkc.org/news-issues/kobach-mann-spar-over-proper-role-of-kansas-attorney-general/",
        "publication": "Flatlandkc.Org",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: \"Election 2022: Chris Mann, (D) Attorney General candidate\" (Oct 28, 2022)",
        "url": "https://www.wibw.com/2022/10/28/election-2022-chris-mann-d-attorney-general-candidate/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World: \"Former Lawrence police officer turns DUI accident into life mission\" (Feb 14, 2013)",
        "url": "https://www2.ljworld.com/news/2013/feb/14/former-lawrence-officer-turns-dui-accident-life-mi/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "University Daily Kansan: \"Democratic state AG candidate, KU Alum Chris Mann visits campus\"",
        "url": "https://www.kansan.com/news/democratic-state-ag-candidate-ku-alum-chris-mann-visits-campus/article_8c161e46-4beb-11ed-a587-772fe6f67cb9.html",
        "publication": "Kansan.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia: 2022 Kansas Attorney General election",
        "url": "https://en.wikipedia.org/wiki/2022_Kansas_Attorney_General_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "NBC News: Kansas Attorney General Election Results 2022",
        "url": "https://www.nbcnews.com/politics/2022-elections/kansas-attorney-general-results/",
        "publication": "Nbcnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State: 2022 General Election Official Vote Totals (PDF)",
        "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Mann surrenders quest to overtake Kobach\" (Nov 11, 2022)",
        "url": "https://kansasreflector.com/2022/11/11/mann-surrenders-quest-to-overtake-kobach-in-kansas-race-for-attorney-general/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: \"Kris Kobach squeaks to a political comeback\" (Nov 9, 2022)",
        "url": "https://www.kcur.org/news/2022-11-09/kansas-attorney-general-election-results-2022-kris-kobach-chris-mann",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "DAGA: Endorsement of Chris Mann",
        "url": "https://dems.ag/daga-endorses-chris-mann-in-kansas-attorney-general-race/",
        "publication": "Dems.Ag",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Kris Kobach is not a good attorney -- Kansas attorney group announces support for Chris Mann\"",
        "url": "https://kansasreflector.com/briefs/kris-kobach-is-not-a-good-attorney-kansas-attorney-group-announces-support-for-chris-mann/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Democratic Party: Kobach debate roundup / Kansas Attorneys for Mann",
        "url": "https://kansasdems.org/archives/23098",
        "publication": "Kansasdems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Chris Mann (Kansas)",
        "url": "https://ballotpedia.org/Chris_Mann_(Kansas",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "iVoterGuide: Chris Mann Profile",
        "url": "https://ivoterguide.com/candidate/74629/race/18118/election/987",
        "publication": "Ivoterguide.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Avvo: Christopher Mann Profile",
        "url": "https://www.avvo.com/attorneys/66215-ks-christopher-mann-4359732.html",
        "publication": "Avvo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Bar Association: Christopher D. Mann",
        "url": "https://www.ksbar.org/members/?id=23380384",
        "publication": "Ksbar.Org",
        "date": "2026-03-31"
      },
      {
        "title": "LinkedIn: Christopher Mann",
        "url": "https://www.linkedin.com/in/christopher-mann-2089676/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook: Chris Mann for Kansas",
        "url": "https://www.facebook.com/ChrisMannKS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "X/Twitter: @ChrisMannKS",
        "url": "https://x.com/ChrisMannKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram: @chrismannks",
        "url": "https://www.instagram.com/chrismannks/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Douglas County Democrats -- Chris Mann video",
        "url": "https://www.facebook.com/dgcodems/videos/chris-mann-is-running-for-the-attorney-general-for-kansas-in-2026-currently-mann/824337733833850/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Latest Kansas campaign finance reports\" (Jan 9, 2026)",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: \"Campaign finance reports show Dem candidates spend more on Gov., AG races\" (Nov 2, 2022)",
        "url": "https://www.wibw.com/2022/11/02/campaign-finance-reports-show-dems-spend-more-gov-ag-races/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "pat-proctor",
    "name": "Pat Proctor",
    "party": "R",
    "position": "Secretary of State candidate",
    "electionSlug": "kansas-sos-2026",
    "incumbent": false,
    "occupation": "Kansas House of Representatives, District 41 (Leavenworth) -- assumed January 11, 2021",
    "hometown": "Historic Leavenworth, KS (just outside Fort Leavenworth gates)",
    "education": "B.S. Mechanical Engineering -- Purdue University (1994)",
    "family": "Aree Proctor; Not publicly disclosed in detail",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/pat-proctor",
    "whoTheyAre": `Pat Proctor, PhD, is a retired U.S. Army Colonel who served 25 years on active duty before entering Kansas politics. He earned a B.S. in Mechanical Engineering from Purdue University in 1994, then spent a quarter century in the Army, deploying to Afghanistan and Iraq, serving as operations officer in Tikrit, and finishing his career as a Battalion Commander in Jordan. Along the way he earned three master's degrees — from the U.S. Army Command and General Staff College, the School of Advanced Military Studies, and the U.S. Army War College — and a doctorate in History from Kansas State University in 2014. He lives in historic Leavenworth, Kansas, just outside the gates of Fort Leavenworth, with his wife Aree.

After retiring from the Army, Proctor moved into academia. He taught at Benedictine College and is currently an Assistant Professor in the Homeland Security Program at Wichita State University's School of Criminal Justice. He has published four books, including works on the forever wars in Afghanistan and Iraq, the Vietnam War, and the end of combat operations in Iraq. His academic articles have appeared in The Historian, Parameters, Military Review, and other peer-reviewed journals. He was elected to the Kansas House of Representatives in 2020, representing District 41 in Leavenworth, and became chairman of the House Elections Committee.

Proctor was the first Republican to formally declare for the 2026 Kansas Secretary of State race, announcing his candidacy in April 2025. He frames his campaign around the slogan "Restoring Confidence in Our Elections, Growing Our Economy" and presents his military background as proof he has "defended democracy" and is uniquely qualified to protect Kansas elections. His campaign had raised approximately $312,000 as of January 2026, including a $134,000 personal loan, giving him a commanding fundraising advantage over his primary opponent Ken Rahjes.`,

    "theirRecord": `As chairman of the House Elections Committee, Proctor has been among the most aggressive legislators in the country on election restrictions. In the 2025–2026 session he authored or advanced a package of bills that significantly tightened Kansas voting rules. HB 2437, which passed the House 80–43, deputizes the Secretary of State to cross-reference voter rolls against the federal SAVE database twice a year, restricts voter registration websites to .gov domains, and requires counties to remove voters from rolls when funeral homes publish obituaries. HB 2569 would eliminate no-excuse mail-in voting entirely if any Kansas judge invalidates the state's ballot signature verification law. HB 2491, which passed 87–37, requires that personal information for non-citizens receiving public benefits be shared with the Secretary of State's office.

A private Zoom recording from February 2024 — leaked in February 2025 by Loud Light Civic Action — showed Proctor telling Johnson County Republicans: "If it was up to me, Election Day would be Election Day," indicating he would prefer to eliminate advanced and early voting entirely. He also vowed to "ram through" legislation to eliminate the three-day post-election grace period for mail-in ballots — and that grace period was indeed eliminated by subsequent legislation. When Kansas Reflector reporters asked Proctor to clarify contradictory statements about his "axis of ballot harvesting" phrase, he responded: "You are a partisan hack and your so-called 'newspaper' is a woke, leftist propaganda rag." He repeated that characterization on a second occasion.

Proctor's campaign platform asserts that "voter confidence that the results of our elections reflect their will is at the core of our form of government and our way of life" and promises to make Kansas "the gold-standard for safe and secure elections." He positions his military service as evidence of integrity and patriotism. Critics — including the Kansas Reflector and voting rights groups — argue his legislation would make it harder for Kansas citizens to vote, particularly those who rely on mail-in ballots and early voting.`,

    "whatYouShouldKnow": [
      "Retired U.S. Army Colonel with 25 years of active duty service, including deployments to Afghanistan and Iraq",
      "Holds a PhD in History from Kansas State University (2014) and three master's degrees; has published four books on military and strategic history",
      "Currently an Assistant Professor at Wichita State University's School of Criminal Justice",
      "A leaked February 2024 private Zoom recording showed him saying 'If it was up to me, Election Day would be Election Day' — meaning he favors eliminating early voting",
      "Called a Kansas Reflector reporter 'a partisan hack and your so-called newspaper is a woke, leftist propaganda rag' on at least two occasions",
      "As House Elections Committee chairman, authored legislation to cross-reference voter rolls against federal SAVE databases twice a year and restrict voter registration to .gov domains",
      "Was the first Republican to declare for the 2026 Secretary of State race (April 3, 2025)",
      "Raised approximately $312,000 through January 2026, with a $134,000 personal loan included",
      "No church affiliation has been publicly identified in available sources",
      "Lives in historic Leavenworth, just outside the gates of Fort Leavenworth, with wife Aree"
    ],

    "whereTheyWorship": `No public church affiliation has been confirmed for Pat Proctor in available sources. His military and academic background dominate his public identity. His campaign materials reference his service and his commitment to democracy but do not foreground church membership or faith practices. He lives in the Leavenworth area, which has a variety of military-community churches, but his specific congregation has not been publicly identified.`,
    "quotes": [
      {
        "text": "Restoring Confidence in Our Elections, Growing Our Economy.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The Kansas Secretary of State has two primary duties...",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "As Secretary of State, I will be ever vigilant...",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Serving 25 years in the U.S. Army, I've defended our freedoms and fought for the ideals of democracy.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I’m here to Hold the Line.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The Secretary of State is at the front line of the fight to defend our democracy.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$312,000 (as of January 2026 filing)",
      "narrative": "The public finance trail shows a functioning campaign committee with itemized donors in the Kansas ethics report.\n\nNotable donors from the accessible report included John Lahnes $250, John Jacob Kotzman $100, Mike Lehnherr $100, Chad Stafford $100, George Pogge $50, Dennis White $250, John Donovan $100, and Michelle Cebe $50.",
      "donors": [
        {
          "name": "Notable donors from the accessible report included John Lahnes John Jacob Kotzman $100, Mike Lehnherr $100, Chad Stafford $100, George Pogge $50, Dennis White $250, John Donovan $100, and Michelle Cebe $50.",
          "amount": "$250,"
        },
        {
          "name": "Commanding fundraising lead over primary opponent Rahjes (~ gap)",
          "amount": "$290,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Patproctor4ks.Com",
        "url": "https://patproctor4ks.com/",
        "publication": "Patproctor4ks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04PP_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_proctor_pat_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://www.hayspost.com/posts/2026-kansas-election-guide/",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/pat-proctor",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1069c202-2991-4f2f-9961-773bec76a5a4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - \"Axis of ballot harvesting\"",
        "url": "https://kansasreflector.com/2025/06/13/kansas-republican-exploits-fear-of-imaginary-axis-of-ballot-harvesting-to-gain-political-advantage/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Private video leaked",
        "url": "https://kansasreflector.com/2025/02/14/in-private-video-house-elections-chair-says-he-wants-to-end-early-voting-grace-period-in-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Legislature passes election bills",
        "url": "https://kansasreflector.com/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal - Fundraising lead",
        "url": "https://sunflowerstatejournal.com/proctor-takes-commanding-fundraising-lead-in-primary-for-secretary-of-state/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wichita State University - Faculty Profile",
        "url": "https://www.wichita.edu/profiles/academics/fairmount_college_of_liberal_arts_and_sciences/school_of_criminal_justice/Proctor-Pat.php",
        "publication": "Wichita.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Pat_Proctor",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ken-rahjes",
    "name": "Ken Rahjes",
    "party": "R",
    "position": "Secretary of State candidate",
    "electionSlug": "kansas-sos-2026",
    "incumbent": false,
    "occupation": "Kansas House of Representatives, District 110 -- assumed January 11, 2016",
    "hometown": "Agra, Kansas (family farm/ranch)",
    "education": "Colby Community College (attended)",
    "family": "Lori (Hoopingarner) Rahjes, originally from Manter, Kansas; Four grown children, one granddaughter",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/ken-rahjes",
    "whoTheyAre": "Party: Republican.\n\nCurrent Office: Kansas House of Representatives, District 110 -- assumed January 11, 2016.\n\nResidence: Agra, Kansas (family farm/ranch).\n\nSpouse: Lori (Hoopingarner) Rahjes, originally from Manter, Kansas.",
    "theirRecord": "In the legislature, Rahjes has been associated with agriculture, rural infrastructure, and the everyday mechanics of governing.\n\nHis campaign language emphasizes getting into the arena to solve problems rather than staying on the sidelines.\n\nThat positioning makes him a more conventional Republican than some of the better-known statewide hardliners.\n\nBusiness filings: Streamline processes for business filings in Kansas, improve the One Stop online portal.",
    "whatYouShouldKnow": [
      "Rahjes is the most openly agricultural of the secretary-of-state candidates",
      "His campaign is about stewardship and process, not just election fights",
      "He has deep rural donor and identity alignment, which may matter in a statewide GOP primary",
      "The legislature page and Reflector coverage are the cleanest official identity anchors",
      "His campaign site appears to be active and issue-driven rather than personality-driven",
      "FollowTheMoney provides an additional public view of his fundraising network",
      "Rahjes represents a more moderate, rural, practical Republican approach compared to Proctor's aggressive election-restriction posture. His focus is on business services and rural accessibility rather than voter restriction. However, his fundraising deficit of ~$290,000 is a significant structural disadvantage in the primary",
      "Ken For Kansas - Official Website"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "A family man, built from trust and integrity.",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I wanted to be one to help work on solutions in the arena not on the sidelines.",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "We will work hand in hand to make the process as smooth as possible with as few delays as possible then get out of the way and watch their success.",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I wanted to be one to help work on solutions",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "fair and honest elections",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "their vote matters is counted",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$24,000 (as of January 2026 filing)",
      "narrative": "Rahjes' donor base is visibly rural and agriculture-heavy.\n\nNotable donors in the accessible report included Scott Foote $3,300, Kansas Sorghum Producers Association $2,000, Michael McClellan $1,000, Clay Scott $500, Kent Glasscock $100, Johnson Farms $100, and Kent Winter $100.",
      "donors": [
        {
          "name": "Notable donors in the accessible report included Scott Foote ansas Sorghum Producers Association $2,000, Michael McClellan $1,000, Clay Scott $500, Kent Glasscock $100, Johnson Farms $100, and Kent Winter $100.",
          "amount": "$3,300, K"
        },
        {
          "name": "Significantly out-raised by Proctor (~ gap)",
          "amount": "$290,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Kenforkansas.Com",
        "url": "https://kenforkansas.com/",
        "publication": "Kenforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kenforkansas.Com",
        "url": "https://kenforkansas.com/news/first-adjournment-is-here/",
        "publication": "Kenforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04KR_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_rahjes_ken_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Followthemoney.Org",
        "url": "https://www.followthemoney.org/",
        "publication": "Followthemoney.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kenforkansas.Com",
        "url": "https://kenforkansas.com/news/rahjes-files-for-secretary-of-state/",
        "publication": "Kenforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/ken-rahjes",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d7c59a6a-6884-4ac9-aad1-7c9d728f5f5f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KVOE - Rahjes in Emporia",
        "url": "https://kvoe.com/2026/03/16/rahjes-in-emporia-touting-secretary-of-state-bid/",
        "publication": "Kvoe.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Files for Secretary of State",
        "url": "https://hayspost.com/posts/7178f5e9-d6e8-4fe0-af51-8ebe54531561",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Ken_Rahjes",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "VoteSmart - Biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/167130/ken-rahjes",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "jennifer-day",
    "name": "Jennifer Day",
    "party": "D",
    "position": "Secretary of State candidate",
    "electionSlug": "kansas-sos-2026",
    "incumbent": false,
    "occupation": "Former State Representative / Real Estate Investor",
    "hometown": "Overland Park, Kansas (6801 Reeds Road per campaign filing)",
    "education": "B.A. -- Pepperdine University (1996)",
    "family": "Jesse Day; Not specifically enumerated in available sources",
    "campaignWebsite": "https://www.electjenday.com/",
    "whoTheyAre": "Party: Democrat.\n\nPrevious Office: Kansas House of Representatives, District 48 (June 3, 2020 - June 21, 2021).\n\nResidence: Overland Park, Kansas (6801 Reeds Road per campaign filing).\n\nSpouse: Jesse Day.",
    "theirRecord": "Her only real public voting record comes from her prior House service and the positions she took there.\n\nThe campaign frame is straightforward: safeguard elections, apply business discipline, and avoid partisan overreach.\n\nCompared with Kobach or Proctor, Day's record is less about legal combat and more about administrative competence.\n\nElection integrity \"increasingly under threat across the country.",
    "whatYouShouldKnow": [
      "Day is one of the clearer \"business competence\" candidates in the secretary-of-state field",
      "She has enough prior legislative identity to be credible, but not enough to create a huge controversy trail",
      "Her campaign tries to make election administration feel managerial rather than ideological",
      "The Beacon story provides the best independent local-news anchor for her earlier legislative identity",
      "Her campaign site is the primary place where her current 2026 message is visible",
      "OpenSecrets gives an independent cross-check path if deeper finance context is needed",
      "Day's campaign is part of the Democratic effort to offer a voting-rights counterweight to Republican election-security messaging",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation or church URL for Day.",
    "quotes": [
      {
        "text": "I'm running to safeguard our elections.",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The Secretary of State is charged with overseeing and protecting the electoral process across Kansas.",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "With 16 years of business experience...",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Voting should not be a partisan issue.",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "OUR RIGHT TO VOTE IS FUNDAMENTAL.",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "election integrity is increasingly under threat",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "The accessible report shows a donor base made up of many modest checks rather than a single dominant outside source.\n\nNotable donors included James D Childers $25, Louis Bornman $100, Michael Tourtellot $100, Dan Wancura $50, David Lambertson $250, Leslie Mark $25, Diana Stewart $10, and Dan Osman $250.",
      "donors": [
        {
          "name": "Notable donors included James D Childers Louis Bornman $100, Michael Tourtellot $100, Dan Wancura $50, David Lambertson $250, Leslie Mark $25, Diana Stewart $10, and Dan Osman $250.",
          "amount": "$25,"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Electjenday.Com",
        "url": "https://www.electjenday.com/",
        "publication": "Electjenday.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04JD_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/rep_day_jennifer_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Thebeaconnews.Org",
        "url": "https://www.thebeaconnews.org/stories/2023/01/17/johnson-county-wyandotte-county-representatives-2023-kansas-legislature/",
        "publication": "Thebeaconnews.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasdems.Org",
        "url": "https://kansasdems.org/candidates",
        "publication": "Kansasdems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/candidates",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_electns_1/documents/testimony/20260120_21.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Jennifer_Day_(Kansas",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Former House Democrat enters race",
        "url": "https://www.yahoo.com/news/articles/former-house-democrat-enters-kansas-100625382.html",
        "publication": "Yahoo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Jennifer_Day_(Kansas_politician",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "sam-lane",
    "name": "Sam Lane",
    "party": "D",
    "position": "Secretary of State candidate",
    "electionSlug": "kansas-sos-2026",
    "incumbent": false,
    "occupation": "Secretary of State candidate",
    "hometown": "Kansas (born in Leavenworth, graduated Leavenworth High School)",
    "education": "Leavenworth High School",
    "family": "Not publicly identified; Not publicly identified",
    "campaignWebsite": "https://www.samuellane.org/about-me",
    "whoTheyAre": "Party: Democrat (recently switched from Independent).\n\nResidence: Kansas (born in Leavenworth, graduated Leavenworth High School).\n\nSpouse: Not publicly identified.\n\nChildren: Not publicly identified.",
    "theirRecord": "There is no significant public roll-call record because Lane is not a sitting officeholder.\n\nHis campaign is built around administrative competence, trust, and an appeal to voters who are tired of partisan election fights.\n\nThat makes him structurally important in the race but much lighter on public-policy history than the other candidates.\n\nElection Integrity: \"In Kansas, the Secretary of State oversees elections, and if you don't have a Secretary of State that plays fair and takes the job seriously, you don't have fair elections, and without fair elections, you don't have a democratic republic.",
    "whatYouShouldKnow": [
      "Lane is the least financially developed candidate in the race",
      "His candidacy matters mostly as a signal that the office should not be left to the two-party heavyweights",
      "Because he is so lightly financed, his public record is thin but unusually transparent",
      "Ballotpedia is the clearest neutral third-party identity anchor",
      "His website is the main source of issue framing and civic-education language",
      "The ethics filing confirms the extremely small financial scale of the campaign",
      "Lane is a long-shot candidate running as an independent-turned-Democrat with minimal fundraising and no political experience. His working-class background and plainspoken approach may resonate in a primary, but he faces a significant disadvantage against Jennifer Day's name recognition and organizational support",
      "Samuel Lane for Kansas - Campaign Website"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation or church website for Lane.",
    "quotes": [
      {
        "text": "I'm a lifelong Kansan and lifelong independent, but I'm throwing my hat in with the Democrats...",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "We need honest people more than ever now.",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "In Kansas, the office of the Secretary of State has several duties.",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I can't fix this whole country by myself. But with your vote, I'll at least be able to safeguard Kansas.",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I’m here to Hold the Line.",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "what does the secretary of state do",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "The public finance picture is tiny: the accessible report shows $590.91 raised, with Samuel Lane himself contributing $580.27.",
      "narrative": "The public finance picture is tiny: the accessible report shows $590.91 raised, with Samuel Lane himself contributing $580.27.\n\nThat means the campaign is overwhelmingly self-funded and very lightly resourced compared with the major Republican contenders.",
      "donors": [
        {
          "name": "The public finance picture is tiny: the accessible report shows raised, with Samuel Lane himself contributing $580.27.",
          "amount": "$590.91"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Samuellane.Org",
        "url": "https://www.samuellane.org/",
        "publication": "Samuellane.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Samuellane.Org",
        "url": "https://www.samuellane.org/what-does-the-secretary-of-state-do",
        "publication": "Samuellane.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04SL_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Samuel_Lane",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Samuellane.Org",
        "url": "https://www.samuellane.org/about-me",
        "publication": "Samuellane.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/candidates",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Samuel Lane - Issues Page",
        "url": "https://www.samuellane.org/issues",
        "publication": "Samuellane.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Sam_Lane_(Kansas",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "DASS - Kansas 2026",
        "url": "https://demsofstate.org/kansas-2026/",
        "publication": "Demsofstate.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "daniel-hawkins",
    "name": "Daniel Hawkins",
    "party": "R",
    "position": "Insurance Commissioner candidate",
    "electionSlug": "kansas-insurance-2026",
    "incumbent": false,
    "occupation": "Kansas House Speaker, District 100 (Wichita) -- assumed January 14, 2013",
    "hometown": "9406 Harvest Ln., Wichita, KS 67212",
    "education": "Emporia State University (graduate)",
    "family": "Diane Hawkins (married 1985, \"college sweetheart\"); Not detailed in available sources",
    "campaignWebsite": "https://hawkinsforinsurance.com",
    "whoTheyAre": "Party: Republican.\n\nCurrent Office: Kansas House Speaker, District 100 (Wichita) -- assumed January 14, 2013.\n\nResidence: Wichita, Kansas.\n\nSpouse: Diane Hawkins (married 1985, \"college sweetheart\").",
    "theirRecord": "Hawkins is the current House speaker, so his public record is inseparable from the chamber's Republican agenda.\n\nThe public record highlights him as an advocate for conservative leadership, limited government, and life issues.\n\nHe also has the baggage of a major leadership role, which means his insurance-commissioner candidacy is not a fresh outsider run.\n\nThe publicly noted NRSC financial disclosure complaint is a notable campaign-season controversy.",
    "whatYouShouldKnow": [
      "Hawkins is a high-profile Republican insider, not a low-name-ID novelty candidate",
      "His business background makes his insurance bid plausible to voters who want a managerial style",
      "The finance operation is robust and already looks statewide in scale",
      "Ballotpedia and the legislature profile are the cleanest identity anchors",
      "The campaign website gives a good sense of his ideological positioning",
      "The finance filing shows real donor confidence and a mix of donors rather than pure self-funding",
      "Hawkins is a leading conservative legislative figure, so his insurance bid is automatically a major statewide storyline",
      "His public record on Medicaid expansion and pro-life politics is likely to be scrutinized in the race"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation or church URL for Hawkins.",
    "quotes": [
      {
        "text": "Unchecked government expansion limits our freedom...",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I believe in the importance of defending life...",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Serving 25 years in the U.S. Army, I've defended our freedoms and fought for the ideals of democracy.",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "We have nothing to do with Medicaid",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "desperately maneuvering to sabotage",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "topic": "What Hawkins did"
      },
      {
        "text": "Kansas House speaker desperately maneuvers to sabotage vote on Senate bill capping drug costs",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "topic": "What Hawkins did"
      }
    ],
    "campaignFinance": {
      "totalRaised": "The public ethics report reviewed in this sweep shows a serious statewide campaign: $417,305.07 raised, $33,295.22 spent, and $384,009.85 cash on hand.",
      "narrative": "The public ethics report reviewed in this sweep shows a serious statewide campaign: $417,305.07 raised, $33,295.22 spent, and $384,009.85 cash on hand.\n\nNotable donors in the accessible filing included Kenny Doonan $2,000, Pat Do $350, Kyle Hoffman $100, Chad Stafford $1,000, Gary Obomy $1,041.02, C. Douglas Blex $52.05, Bill Pickert $104.10, and Visa $1,000.",
      "donors": [
        {
          "name": "Notable donors in the accessible filing included Kenny Doonan Pat Do $350, Kyle Hoffman $100, Chad Stafford $1,000, Gary Obomy $1,041.02, C. Douglas Blex $52.05, Bill Pickert $104.10, and Visa $1,000.",
          "amount": "$2,000,"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Danhawkinskansas.Com",
        "url": "https://danhawkinskansas.com/",
        "publication": "Danhawkinskansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Danhawkinskansas.Com",
        "url": "https://danhawkinskansas.com/about/",
        "publication": "Danhawkinskansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW03DH_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Daniel_Hawkins_(Kansas",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "SW03DH_AT.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DH_AT.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2024/04/18/kansas-house-speaker-meets-opposition-as-he-makes-case-against-medicaid-expansion-in-plainville/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/daniel-hawkins",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "hawkinsforinsurance.com",
        "url": "https://www.hawkinsforinsurance.com/",
        "publication": "Hawkinsforinsurance.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@DanHawkinsKS",
        "url": "https://x.com/danhawkinsks",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - SB 360 blocked",
        "url": "https://kansasreflector.com/2026/03/22/kansas-house-speaker-desperately-maneuvers-to-sabotage-vote-on-senate-bill-capping-drug-costs/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Heartland Signal - Republicans defy Hawkins on PBM bill",
        "url": "https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bill/",
        "publication": "Heartlandsignal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal - Fundraising",
        "url": "https://sunflowerstatejournal.com/hawkins-reveals-campaign-fundraising-for-insurance-commissioner/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Insurance Business Mag",
        "url": "https://www.insurancebusinessmag.com/us/news/breaking-news/house-speaker-dan-hawkins-eyes-state-insurance-office-535815.aspx",
        "publication": "Insurancebusinessmag.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "dinah-sykes",
    "name": "Dinah Sykes",
    "party": "D",
    "position": "Insurance Commissioner candidate",
    "electionSlug": "kansas-insurance-2026",
    "incumbent": false,
    "occupation": "Kansas Senate, District 21 -- Senate Minority Leader (since 2021)",
    "born": "April 10, 1977",
    "hometown": "Lenexa, KS (Johnson County)",
    "education": "B.A. Business Administration (minors in Finance and Economics) -- Trevecca Nazarene University, Nashville, Tennessee (1999)",
    "family": "Jeffrey Sykes; Two sons: William and Tyler",
    "campaignWebsite": "https://www.dinahsykes.com/",
    "whoTheyAre": "Party: Democrat (switched from Republican, December 19, 2018).\n\nCurrent Office: Kansas Senate, District 21 -- Senate Minority Leader (since 2021).\n\nResidence: Lenexa, Kansas.\n\nSpouse: Jeffrey Sykes.",
    "theirRecord": "Has served in the Kansas Senate since 2017 (9 years).\n\nChampion for public school funding, early childhood education.\n\nAdvocate for Medicaid expansion.\n\nProtections for survivors of domestic violence, sexual assault, human trafficking, stalking.",
    "whatYouShouldKnow": [
      "Sykes is the most credible Democratic institutional figure in the insurance race",
      "Her biography is rooted in legislative leadership, not outsider novelty",
      "The affordability message is her clearest public-facing theme",
      "The legislature page verifies her leadership role",
      "Ballotpedia is the cleanest neutral identity anchor",
      "The treasurer appointment filing confirms campaign setup even where full receipts reporting was sparse",
      "Having BOTH a Democratic and Republican former Insurance Commissioner endorse you is extraordinary. Praeger's endorsement in particular is a powerful signal that Sykes has genuine crossover appeal and that the \"moderate Republican\" wing of Kansas politics sees her as credible",
      "On her party switch: \"I am a moderate person who represents a moderate and pragmatic district... being a moderate inside the Republican Party is an increasingly difficult path to take with the trajectory of the party nationally.\" (December 2018, multiple sources)"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "Fighting for Affordable Insurance and Protecting Kansas Families.",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Kansas deserves an Insurance Commissioner who puts people first.",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "For Dinah, it all comes down to two things: fairness and affordability.",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "She's seen firsthand how honest and independent leadership can actually improve people's lives.",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The cost of health insurance in Kansas is simply out of control",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "big insurance companies accountable",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "A full public 2026 receipts report did not surface cleanly in this sweep.\n\nThe accessible filing set appears to include a treasurer appointment or setup document, but not a complete itemized donor report that I could reliably reconstruct.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Dinahsykes.Com",
        "url": "https://www.dinahsykes.com/",
        "publication": "Dinahsykes.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Dinah_Sykes",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DS_AT.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasdems.Org",
        "url": "https://kansasdems.org/candidates",
        "publication": "Kansasdems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Senator Dinah Sykes (@Sykes4KS)",
        "url": "https://www.facebook.com/Sykes4KS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "kssenatedems.org/dinah-sykes",
        "url": "https://www.kssenatedems.org/dinah-sykes",
        "publication": "Kssenatedems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "CNN: 3 Kansas legislators switch from Republican to Democrat",
        "url": "https://www.cnn.com/2018/12/19/politics/kansas-legislature-republican-democrat/index.html",
        "publication": "Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: More Kansas Legislative Republicans Jump Ship",
        "url": "https://www.kcur.org/politics-elections-and-government/2018-12-19/more-kansas-legislative-republicans-jump-ship-become-democrats",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Salon: Three Kansas Republicans switch parties in one week",
        "url": "https://www.salon.com/2018/12/21/three-kansas-republicans-switch-parties-in-one-week-more-defections-expected/",
        "publication": "Salon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "InsuranceNewsNet - Sykes campaigning",
        "url": "https://insurancenewsnet.com/oarticle/sen-sykes-campaigning-for-insurance-commissioner",
        "publication": "Insurancenewsnet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dinah_Sykes",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB - PTA to Senate",
        "url": "https://www.kshb.com/news/state/kansas/from-pta-president-to-kansas-senate-a-local-mom-readies-for-her-new-job",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CSG Midwest - Profile",
        "url": "https://csgmidwest.org/wp-content/uploads/2025/04/leader-sykes.pdf",
        "publication": "Csgmidwest.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Lenexa Rotary - New Member Spotlight",
        "url": "https://lenexarotary.org/stories/new-member-spotlight-dinah-sykes",
        "publication": "Lenexarotary.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "barb-wasinger",
    "name": "Barb Wasinger",
    "party": "R",
    "position": "KS House District 111",
    "electionSlug": "ks-house-111",
    "incumbent": true,
    "occupation": "Business owner",
    "hometown": "Hays, KS (P.O. Box 522, Hays, KS 67601)",
    "religion": "Roman Catholic -- active member, St. Joseph Catholic Church, Hays",
    "education": "Education is \"fully funded\" in her view",
    "family": "Tom Wasinger; Spouse: Tom",
    "district": "Kansas House District 111",
    "campaignWebsite": "https://barbforkansas.com/",
    "whoTheyAre": "Wasinger's public story is a Hays story: local schools, local church, local government, and then the statehouse.\n\nShe graduated from St. Catherine University with a theology concentration, worked in health-care settings, and later became a prominent Hays civic figure.\n\nThe accessible record shows her moving from city and county service into the legislature, where she has leaned into taxes, regulations, and cultural issues.\n\nBarbara \"Barb\" Wasinger is the Republican state representative for House District 111 in Hays.",
    "theirRecord": "She serves in the Kansas House and has been tied to administrative rules, tax, and state spending debates.\n\nLocal coverage and legislative coffee appearances show her as a regular Hays-area political organizer and explainer of Topeka activity.\n\nShe has been a visible supporter of conservative cultural positions, including public comments that frame government through Judeo-Christian moral language.\n\nThe Hays Post and KSN election-guide coverage reinforces that she is an active local public figure, not just a Topeka legislator.",
    "whatYouShouldKnow": [
      "Wasinger is not a generic partisan profile; she is an institutionally rooted Hays conservative",
      "Her church affiliation is public and verified, which is important in a district where faith language carries real weight",
      "She blends local-government experience with a statehouse message about limiting regulation and preserving local values",
      "She says she is an active member of St. Joseph Catholic Church in Hays",
      "Her campaign site says she graduated from St. Catherine University and has a theology concentration",
      "She has been in Hays-area elected office for more than 20 years",
      "The Hays Post and KSN election-guide coverage reinforces that she is an active local public figure, not just a Topeka legislator",
      "Her biography intersects with health care, theology, and public service in a way that is unusual for Kansas House members"
    ],
    "whereTheyWorship": "Denomination: Roman Catholic (Diocese of Salina).\n\nChurch Roles: Lector; Extraordinary Minister of Holy Communion.",
    "church": {
      "name": "St. Joseph Catholic Church, Hays, KS",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.stj-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Roles: Lector; Extraordinary Minister of Holy Communion."
    },
    "quotes": [
      {
        "text": "My approach in Topeka is simple: talk less, listen more, and work together to actually get things done.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://www.stj-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "It's an honor to serve the good people of Ellis County.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://www.stj-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I'm committed to building on that momentum for you.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://www.stj-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Judeo-Christian values established a framework of morality which is necessary for our system of limited government.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://www.stj-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The judiciary got hacked, and we went into hyperdrive.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "topic": "Legislative Modernization Committee (2023-2024):"
      },
      {
        "text": "A lot of the requirements in the bill mirror what the federal government does.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
        "topic": "Sources:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "The public ethics trail is present and active through the Kansas campaign-finance portal and the House reporting index.\n\nThe accessible review showed 2026 operating expenses for website/email services, electronic advertising, travel, hotel, meals, and dues such as Kansas Truth Caucus membership.",
      "donors": [
        {
          "name": "Earlier cycle notes also referenced about in documented contributions, but I did not reconstruct a full donor ledger from the public PDFs in this pass.",
          "amount": "$4,800"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Stj-church.Com",
        "url": "https://www.stj-church.com/",
        "publication": "Stj-church.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Barbwasinger.Com",
        "url": "https://barbwasinger.com/",
        "publication": "Barbwasinger.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ivoterguide.Com",
        "url": "https://ivoterguide.com/candidate/48696/race/11694/election/797",
        "publication": "Ivoterguide.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Barbforkansas.Com",
        "url": "https://barbforkansas.com/",
        "publication": "Barbforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Justfacts.Votesmart.Org",
        "url": "https://justfacts.votesmart.org/candidate/145676/barb-wasinger",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/campaign-finance/",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/89bc4255-a1ac-4f10-b315-5def98cd9798",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/2b738882-c918-4672-aacb-cccdbceb383a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0467451d-0b49-4f89-830e-7107584885fc",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Barb for Kansas Facebook",
        "url": "https://www.facebook.com/electbarbwasinger/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSN Election Guide",
        "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
        "publication": "Ksn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "barbforkansas.com/about",
        "url": "https://barbforkansas.com/about/",
        "publication": "Barbforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Barb_Wasinger",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart Biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/145676/barb-wasinger",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Barbara_Wasinger",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Cybersecurity",
        "url": "https://kansasreflector.com/2024/03/18/exposure-of-it-security-weaknesses-in-kansas-state-government-inspiring-house-reform-bill/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - IT Security",
        "url": "https://hayspost.com/posts/81556ec8-078b-4239-8e6f-d43dd953ddf7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Truth Caucus",
        "url": "https://www.kansastruthcaucus.org/about",
        "publication": "Kansastruthcaucus.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Water Dispute (Feb 2026)",
        "url": "https://kansasreflector.com/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ranson Financial - HB2433 Signed",
        "url": "https://ransonfinancial.com/2026/03/26/governor-signs-hb2433-for-r9-project/",
        "publication": "Ransonfinancial.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Water Bill Signed",
        "url": "https://hayspost.com/posts/ec8a0c28-4cb0-4994-90ba-3919fcadd4a0",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Nursing Bill",
        "url": "https://kansasreflector.com/2026/03/19/kansas-legislature-resets-academic-expectation-for-hiring-faculty-in-college-nursing-programs/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Bathroom Bill Veto Override",
        "url": "https://kansasreflector.com/2026/02/18/house-overrides-veto-bathroom-bill-limiting-access-to-kansas-facilities-will-become-law/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "GovTech - Cybersecurity Bill",
        "url": "https://www.govtech.com/security/after-attack-kansas-bill-seeks-to-strengthen-cybersecurity",
        "publication": "Govtech.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KLC Journal - 2020 Debate",
        "url": "https://klcjournal.com/kansas-house111/",
        "publication": "Klcjournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "kssos.org/elections/cfr_viewer",
        "url": "https://kssos.org/elections/cfr_viewer/cfr_examiner_entry.aspx",
        "publication": "Kssos.Org",
        "date": "2026-03-31"
      },
      {
        "title": "followthemoney.org",
        "url": "https://www.followthemoney.org/",
        "publication": "Followthemoney.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas State Rifle Association Endorsements 2024",
        "url": "https://kansasrifle.org/endorsements2024generalelection/",
        "publication": "Kansasrifle.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas SOS 2024 General Election Official Results",
        "url": "https://sos.ks.gov/elections/24elec/2024-General-Election-Official-Vote-Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - 2022 Results",
        "url": "https://hayspost.com/posts/2f423389-debd-4434-adb6-f64db082b94e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Hammond Filing",
        "url": "https://kansasreflector.com/2022/06/03/former-fort-hays-state-university-president-running-for-kansas-house-seat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Legislative Coffee",
        "url": "https://hayspost.com/posts/0299ad65-325b-41df-9515-db9d14054474",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Tax Discussion",
        "url": "https://hayspost.com/posts/9fda8c5c-7597-4aa4-91d9-346da9bec17c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - PBS Appearance",
        "url": "https://hayspost.com/posts/2f0387ad-c4f6-4bc0-845c-53b05f9866b4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "BBB Profile",
        "url": "https://www.bbb.org/us/ks/hays/profile/title-agent/ellis-county-abstract-title-0714-42432",
        "publication": "Bbb.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Insurance Dept Filing",
        "url": "https://insurance.ks.gov/documents/company/prop-cas/titlerates/EllisCountyAbstractTitleRateFiling.pdf",
        "publication": "Insurance.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "source",
        "url": "https://hayspost.com/posts/2d905a93-7cdc-47e5-8ab8-c0c78446bb2b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - District 111",
        "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Fastdemocracy.Com",
        "url": "https://fastdemocracy.com/bill-search/ks/legislators/KSL000447/",
        "publication": "Fastdemocracy.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Billtrack50.Com",
        "url": "https://www.billtrack50.com/legislatordetail/24285",
        "publication": "Billtrack50.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Legiscan.Com",
        "url": "https://legiscan.com/KS/people/barbara-wasinger/id/21086",
        "publication": "Legiscan.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/hb2433_00_0000.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Tom Wasinger - Wasinger Enterprise",
        "url": "https://www.linkedin.com/in/tom-wasinger-77068241",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KS Legislature HB2433",
        "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2433/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR",
        "url": "https://www.kcur.org/politics-elections-and-government/2026-02-18/kansas-republicans-transgender-bathroom-bill-veto-override",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KS Legislature vote record",
        "url": "https://www.kslegislature.gov/li_2024/b2023_24/measures/vote_view/je_20240429095526_260190/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KS Legislature: Rep. Barb Wasinger (2023-24)",
        "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart: Key Votes",
        "url": "https://justfacts.votesmart.org/candidate/key-votes/145676/barb-wasinger",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "LegiStorm: Barbara King Wasinger",
        "url": "https://www.legistorm.com/person/bio/313424/Barbara_King_Wasinger.html",
        "publication": "Legistorm.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Wasinger vs. Hammond race",
        "url": "https://hayspost.com/posts/a0d2b56a-c6d8-4084-92bf-9e40ac0b82bd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: KS House District 111 profile",
        "url": "https://hayspost.com/posts/2e2efa2c-4a4a-4590-b7a5-0aeabf7be52b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NRA-PVF: Kansas Grades",
        "url": "https://www.nrapvf.org/grades/kansas/",
        "publication": "Nrapvf.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KFL PAC: Voter Guide",
        "url": "https://kflpac.org/vote/",
        "publication": "Kflpac.Org",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Water bill awaits signature",
        "url": "https://hayspost.com/posts/c6a0184d-7e96-4157-ba49-d5e49a49e54c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KS SOS: 2018 General Election Results",
        "url": "https://www.kssos.org/elections/18elec/2018_General_Election_Official_Votes_Cast.pdf",
        "publication": "Kssos.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KS SOS: 2020 General Election Results",
        "url": "https://sos.ks.gov/elections/20elec/2020_General_Official_Vote_Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KS SOS: 2022 General Election Results",
        "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "mason-ruder",
    "name": "Mason Ruder",
    "party": "NP",
    "position": "Hays Mayor",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Certified Public Manager (CPM designation)",
    "hometown": "Hays, Kansas",
    "religion": "Catholic — attended TMP-Marian, works for Hays Catholic Schools",
    "education": "Fort Hays State University -- Political Leadership and Public Service degree (completing/completed)",
    "family": "Tori Ruder (childcare provider in Hays); Not yet known",
    "campaignWebsite": "https://www.haysusa.com/269/City-Commission",
    "whoTheyAre": "Ruder's public biography is unusually local and unusually layered. He grew up in Hays, attended TMP-Marian, and later returned to work in Catholic school advancement after earlier work in county environmental services and local food service management. That mix of nonprofit, school, and city work shows up repeatedly in his public roles and makes him one of the more institutionally embedded figures in Hays.\n\nHis career also maps onto the city's biggest policy fights. He has been one of the most visible commissioners on water supply, housing, downtown placemaking, airport funding, and the city's long-running R9 Ranch project. Public coverage also shows him moving quickly from commissioner to vice mayor and then mayor, which suggests he is both politically ambitious and broadly trusted by the current commission majority.\n\nMason Ruder is the mayor of Hays and a member of the city commission. The city's official commission page lists him as mayor, and Hays Catholic Schools describes him as a 2010 Thomas More Prep-Marian graduate who serves as director of institutional advancement. The public record ties him closely to Hays' Catholic and civic infrastructure, not just municipal politics.\n\nEllis County Environmental Services (~2017-2022, 5 years) -- Rose to Environmental Services Director. Oversaw adoption of county's new Comprehensive Plan and Zoning Regulations. Presented 2021 Solid Waste/Transfer Station Annual Report. Led unified effort to revitalize the Extra Territorial Jurisdiction of the City of Hays for smart growth for the next 50+ years.",
    "theirRecord": "2019: First elected to Hays City Commission (top vote-getter as FHSU student).\n\n2020: Cast the SOLE DISSENTING VOTE against the mask mandate (3-1 vote). This is the only recorded split vote found on this commission during COVID.\n\n2021: Served as Vice Mayor.\n\n2023: Re-elected (four-year term).",
    "whatYouShouldKnow": [
      "This is as deeply embedded in Catholic life as it gets at the local level. Mason Ruder does not just attend -- he works for the Catholic schools, graduated from the Catholic high school, and is a parish member. His faith is clearly central to his identity and career. Whether he is active in Knights of Columbus (Council #6984 meets at IHM) was not confirmed in public records but would be worth asking directly",
      "Ruder is the youngest and most politically ambitious commissioner. CPM credential, political leadership degree, and advancement director role all suggest a person building toward higher office. His sole \"no\" vote on the mask mandate is notable -- it positions him as the most conservative-leaning commissioner on that issue. The 9/11 editorial through the Kansas Press Association shows he is cultivating a public voice beyond Hays. The Youth Leadership Advisory Board is a genuine legacy initiative",
      "Hays Post: City Commission Candidate Mason Ruder",
      "Tiger Media Network: Ruder elected Mayor",
      "Most politically ambitious commissioner — building toward higher office",
      "Catholic faith appears genuine (Catholic school education + Catholic school employer + institutional advancement role)",
      "Mask mandate dissent is notable — sole \"no\" vote while other commissioners faced vandalism for voting \"yes",
      "Deep roots: Volga German family in Ellis County since 1876 -- authentic local credentials"
    ],
    "whereTheyWorship": "Denomination: Roman Catholic (Diocese of Salina).\n\nParish Address: 1805 Vine St, Hays, KS 67601.",
    "church": {
      "name": "Immaculate Heart of Mary Parish, Hays",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.ihm-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Parish Address: 1805 Vine St, Hays, KS 67601."
    },
    "quotes": [
      {
        "text": "Faith and family have always provided a solid foundation.",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "Verbatim quotes"
      },
      {
        "text": "Let's keep growing Hays. We have a lot of work to do.",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "Verbatim quotes"
      },
      {
        "text": "Every day is now an R9 Ranch Day.",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "Verbatim quotes"
      },
      {
        "text": "a member of Immaculate Heart of Mary Parish in Hays",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "topic": "Evidence:"
      },
      {
        "text": "grew up in Hays with faith and family as a foundation",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "topic": "Evidence:"
      },
      {
        "text": "getting youth involved in our community a little more",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "topic": "Signature Initiative: Youth Leadership Advisory Board"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a clearly indexed public campaign finance report in this pass. The visible public record was much stronger on city minutes, Hays Post coverage, and Catholic school/parish sources than on campaign receipts.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hfehays.Org",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "publication": "Hfehays.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ihm-church.Com",
        "url": "https://www.ihm-church.com/",
        "publication": "Ihm-church.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/39d62580-9e3b-4536-85da-783f3cfe22bd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/69f1b5b1-a69e-4dab-80b1-ee8c00201441",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Mason Ruder, CPM",
        "url": "https://www.linkedin.com/in/mason-ruder-cpm-1aa36455",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@agentruder",
        "url": "https://x.com/agentruder",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: City Commission Candidate Mason Ruder",
        "url": "https://hayspost.com/posts/0187e996-15de-4377-95c2-cc428ed058e5",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network: Ruder elected Mayor",
        "url": "http://tigermedianet.com/?p=93385",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HDN: Commissioners sworn in",
        "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "KS Press: 9/11 Editorial",
        "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
        "publication": "Kspress.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HDN: TMP-Marian alumnus named advancement director",
        "url": "https://www.hdnews.net/2022/12/01/tmp-marian-alumnus-named-advancement-director-for-hays-catholic-schools/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Youth Leadership Advisory Board",
        "url": "https://hayspost.com/posts/e141bbcd-d4c5-4a9d-83bc-996979742cb2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Mask ordinance extension",
        "url": "https://hayspost.com/posts/095697ac-eb4b-4005-867a-bb049ec8c10f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ClustrMaps: Mason Ruder public records",
        "url": "https://clustrmaps.com/person/Ruder-cofgeu",
        "publication": "Clustrmaps.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Press Association — 9/11 editorial",
        "url": "https://kpa.org/",
        "publication": "Kpa.Org",
        "date": "2026-03-31"
      },
      {
        "title": "NWKEICI Staff page",
        "url": "https://nwkeici.org/about/innovation-center-staff/",
        "publication": "Nwkeici.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Daily News",
        "url": "https://www.hdnews.net/forgetting-the-lesson-of-9-11-is-the-danger-we-face-now-says-ruder/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network",
        "url": "https://tigermedianet.com/?p=68058",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "City of Hays YLAB page",
        "url": "https://www.haysusa.com/871/Youth-Leadership-Advisory-Board",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Mask mandate approved",
        "url": "https://hayspost.com/posts/78a708f5-4f1e-401f-9bd3-85c618edb4de",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Mask ordinance extended",
        "url": "https://hayspost.com/posts/71b2e036-1db2-45b6-86a9-c9d86520f000",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Housing/business developments",
        "url": "https://hayspost.com/posts/dc0fb523-b96d-42bb-b65a-55221db96969",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: R9 Water dispute",
        "url": "https://hayspost.com/posts/0b77976f-deca-4758-819a-f01bbc3f4745",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Vernon Ruder Jr. candidate profile",
        "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Ruth Ruder school board candidate",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Chick-fil-A coming to Hays",
        "url": "https://hayspost.com/posts/f2157294-04d0-44db-8888-bb5c34b03530",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Press Association: R9 Water dispute",
        "url": "https://kspress.com/news/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute",
        "publication": "Kspress.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: R9 Water dispute",
        "url": "https://kansasreflector.com/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Gov. Kelly signs HB2433",
        "url": "https://hayspost.com/posts/ec8a0c28-4cb0-4994-90ba-3919fcadd4a0",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "alaina-cunningham",
    "name": "Alaina Cunningham",
    "party": "NP",
    "position": "Hays Vice Mayor / City Commissioner",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Nurse / Fitness Instructor",
    "education": "RN (Registered Nurse) credential -- school not confirmed",
    "campaignWebsite": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
    "whoTheyAre": "Age: ~45 (estimated from public records showing previous address in Dodge City area).\n\nTitle: Vice Mayor, City of Hays (elected by commission January 2026).\n\nDay Job: Registered Nurse (RN) and ACE Certified Group Fitness Instructor, HaysMed Center for Health Improvement.\n\nHometown: Dodge City, Kansas.",
    "theirRecord": "Appointed to the Hays City Commission to fill the unexpired Berges seat, then elected to a full term in 2023.\n\nElevated to vice mayor in January 2026 when the commission reorganized.\n\nFocused publicly on the city's sustainable water supply, housing shortage, youth retention, and support for retirees.\n\nSupported development incentives and financing tools meant to keep Hays attractive to builders and businesses.",
    "whatYouShouldKnow": [
      "The complete absence of faith references in any public profile is notable. This does not mean she is not a churchgoer -- many local officials simply do not publicize their church life. However, in a community as church-centric as Hays, the silence is itself a data point. Recommend direct inquiry",
      "Cunningham is the least publicly visible commissioner. She was appointed (not initially elected), has limited news quotes, and her community profile is primarily through HaysMed Foundation and PTA work rather than political activity. Her LinkedIn describes her as a \"Health and Well-being professional.\" Her appointment filled a vacancy, and she won her first election in 2023. As Vice Mayor, she's positioned as Ruder's second-in-command",
      "Tiger Media Network: Get to know candidates",
      "Cunningham remains the least publicly visible commissioner. Her primary public identity is through healthcare (HaysMed nurse) and community boards rather than political activity. The potential spousal connection to the County Attorney is the most interesting unanswered question in Hays local government",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No verified public church affiliation surfaced in the sources reviewed"
    ],
    "whereTheyWorship": "No verified public church affiliation surfaced in the sources reviewed. Her public bios and local coverage centered on nursing, family, youth activity, and city service rather than faith or parish identity.",
    "quotes": [
      {
        "text": "I feel it is my duty to serve the public and 'Do Good.'",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "Verbatim quotes"
      },
      {
        "text": "We are all aware how valuable water is to our area.",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "Verbatim quotes"
      },
      {
        "text": "Fireworks is always a hot topic.",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "Verbatim quotes"
      },
      {
        "text": "You (staff) brought us a constrained budget which is what we asked for.",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "topic": "ALAINA CUNNINGHAM -- Vice Mayor, City Commissioner"
      },
      {
        "text": "retaining youth in the community instead of them moving away",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "topic": "ALAINA CUNNINGHAM -- Vice Mayor, City Commissioner"
      },
      {
        "text": "fiscal responsibility and sustainable growth",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "topic": "ALAINA CUNNINGHAM -- Vice Mayor, City Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a clearly indexed public campaign finance report in this pass. The public web results were much stronger on candidate Q&A, city minutes, and local media than on any formal committee filing.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/26608269-25e1-4f29-b80f-d2edbb3bba3d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/c8cd14ed-94b7-4507-8a9c-ad71038ac5b6",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysmed.Com",
        "url": "https://www.haysmed.com/services/chi-what-we-offer/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lkm.Org",
        "url": "https://www.lkm.org/members/?id=50545549",
        "publication": "Lkm.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01042024-1458",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Hays city commission incumbents re-elected",
        "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network: Get to know the Hays City Commission candidates",
        "url": "https://tigermedianet.com/?p=75270",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Alaina Cunningham",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Alaina Cunningham",
        "url": "https://www.linkedin.com/in/alaina-cunningham-4436ba1/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed: Alaina Cunningham",
        "url": "https://www.haysmed.com/the-center/alaina-cunningham/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed Foundation: New officers",
        "url": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
        "publication": "Haysmedfoundation.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: 2026 budget",
        "url": "https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed: Alaina Cunningham",
        "url": "https://www.haysmed.com/provider/alaina-cunningham/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Avvo: Aaron Cunningham",
        "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
        "publication": "Avvo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "About.me: Aaron Cunningham",
        "url": "https://about.me/aaron.cunningham",
        "publication": "About.Me",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "shaun-musil",
    "name": "Shaun Musil",
    "party": "NP",
    "position": "Hays City Commissioner",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Nex-Tech Employee / Business Owner",
    "campaignWebsite": "https://www.haysusa.com/273/Shaun-Musil",
    "whoTheyAre": "Age: 53.\n\nLived in Hays: 30 years.\n\nSpouse: Heather Musil -- instructor in FHSU Department of Teacher Education (previously Hays Middle School teacher).\n\nDay Job: Account Representative, Nex-Tech (managed IT, cybersecurity, physical security, communications).",
    "theirRecord": "Re-elected in 2025 for another city commission term after more than a decade in office.\n\nRepeatedly framed the R9 water project as unfinished business and a generational necessity.\n\nBacked RHID and housing policy changes that he says have increased the number of houses being built.\n\nHas pressed for retail growth and a stronger sales-tax base as part of the city's broader financial health.",
    "whatYouShouldKnow": [
      "30 years in Hays with zero public faith references is the most telling absence on this list. He may attend church privately, but faith does not appear to be part of his public identity or decision-making framework. The wine bar ownership is not inherently relevant but does distinguish him from officials who lead with faith credentials. Recommend direct inquiry",
      "Musil is the most experienced commissioner and the institutional backbone of the commission. 12+ years of service spanning COVID, the R9 water fight, housing crisis, and downtown revitalization. His COVID leadership -- standing by the mask mandate despite vandalism and threats to his family -- is the most dramatic personal story on the commission. The Paisley Pear ownership creates an interesting lens on his downtown development votes, though nothing improper has been alleged. He ran on GoodParty.org, suggesting nonpartisan/independent orientation",
      "Hays Post: Commission reorganized, Musil thankful",
      "Musil is entering his final years on the commission with deep institutional memory. The COVID vandalism story is the most dramatic personal narrative of any local official in Hays. Having sold the Paisley Pear, he's now free of the business interest that created potential conflict-of-interest questions on downtown development votes. His re-election in 2025 to a four-year term (through 2029) was emphatic community endorsement",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No verified public church affiliation surfaced in the sources reviewed"
    ],
    "whereTheyWorship": "No verified public church affiliation surfaced in the sources reviewed.",
    "quotes": [
      {
        "text": "I think we have some unfinished business. For me, mainly, it's our water project.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "topic": "Verbatim quotes"
      },
      {
        "text": "I love representing Hays.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "topic": "Verbatim quotes"
      },
      {
        "text": "This shows that we're serious about development. ... We need retail. It's a priority.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "topic": "Verbatim quotes"
      },
      {
        "text": "the people came out of the woodwork thanking us.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/musilcomish/",
        "topic": "SHAUN MUSIL -- Commissioner"
      },
      {
        "text": "most impactful pieces of legislation",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/musilcomish/",
        "topic": "SHAUN MUSIL -- Commissioner"
      },
      {
        "text": "I believe it's going to happen.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/musilcomish/",
        "topic": "SHAUN MUSIL -- Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a clearly indexed public campaign finance report in this pass. Publicly visible coverage centered on candidate Q&A, election results, and city-record reporting.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/273/Shaun-Musil",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1afb725b-f6c4-4d09-93de-94b9008ba5ae",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/39d62580-9e3b-4536-85da-783f3cfe22bd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Shaun Musil - City of Hays Profile",
        "url": "https://haysusa.com/273/Shaun-Musil",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Shaun Musil - Hays City Commissioner",
        "url": "https://www.facebook.com/musilcomish/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Shaun Musil - Nex-Tech",
        "url": "https://www.linkedin.com/in/shaun-musil-26539490/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Commission reorganized, Musil thankful",
        "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Mask ordinance extension",
        "url": "https://hayspost.com/posts/095697ac-eb4b-4005-867a-bb049ec8c10f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Chick-fil-A incentives approved",
        "url": "https://hayspost.com/posts/433c0ff0-f645-4a6a-a4be-6f8549de14f9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Paisley Pear for sale",
        "url": "https://hutchpost.com/posts/f240fb89-d1f0-4373-ac4b-605d5e5f9c32",
        "publication": "Hutchpost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Paisley Pear grand reopening",
        "url": "https://hayspost.com/posts/efb80be7-69e2-4461-8e69-d7f86b59e482",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FHSU: Tiger Nation Partner of the Year",
        "url": "https://www.fhsu.edu/news/2024/08/fhsu-announces-2024-tiger-nation-partner-of-the-year",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Nex-Tech: Shaun profile",
        "url": "https://www.nex-tech.com/business/shaun/",
        "publication": "Nex-tech.Com",
        "date": "2026-03-31"
      },
      {
        "title": "GoodParty.org: Shaun Musil",
        "url": "https://goodparty.org/candidate/shaun-musil/hays-city-commission",
        "publication": "Goodparty.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Special mask meeting",
        "url": "https://hayspost.com/posts/1a241ad5-d176-4494-9e9a-aa4a286f3bf4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSL: Hays mask mandate story",
        "url": "https://www.ksl.com/article/50001567/city-in-kansas-requiring-masks-to-guard-safe-reputation",
        "publication": "Ksl.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "sandy-jacobs",
    "name": "Sandy Jacobs",
    "party": "NP",
    "position": "Hays City Commissioner",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Former Mayor / Foundation Executive",
    "campaignWebsite": "https://www.haysusa.com/270/Sandy-Jacobs",
    "whoTheyAre": "Age: 75.\n\nHusband: Danny Jacobs (both over 65).\n\nLifetime Hays resident.\n\nRetired from: Sunflower Bank (Executive Vice President) and Heartland Community Foundation (Executive Director, 5 years, retired ~Dec 31, 2020).",
    "theirRecord": "Re-elected in 2025 and returned to office for another term.\n\nServed as Hays mayor before the 2026 reorganization, when Mason Ruder was chosen as mayor and Alaina Cunningham as vice mayor.\n\nHas pushed the R9 project for years and repeatedly treated it as the city's top long-term water issue.\n\nBacked housing and incentive-district policy changes while defending revenue-neutral budgeting and a conservative tax posture.",
    "whatYouShouldKnow": [
      "Another complete absence. Heartland Community Foundation is a secular community foundation, not faith-based. No public faith identity found. Recommend direct inquiry",
      "Jacobs is the elder statesperson of the commission. At 75, she's a retired banker and nonprofit executive who has served three stints as mayor. Her Vine Street roundabout campaign is her most tangible infrastructure legacy -- and she's not shy about citing the economic impact data. Her retail development focus aligns with a business-oriented worldview shaped by decades in banking and economic development. She voted with the mask mandate majority. Her re-election in November 2025 to another four-year term (through 2029, when she'd be 79) shows she isn't slowing down",
      "Hays Post: Jacobs filing announcement",
      "At 75, Jacobs is the commission's elder stateswoman with the deepest roots in Hays finance and philanthropy. Her Sunflower Bank career (EVP) and Heartland Foundation leadership give her the strongest economic development credentials on the commission. The Vine Street roundabout project -- backed by hard data on restaurant sales increases -- is a tangible legacy. She and Danny are emblematic of the \"establishment Hays\" power structure: banking, nonprofit, civic service",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No verified public church affiliation surfaced in the sources reviewed"
    ],
    "whereTheyWorship": "No verified public church affiliation surfaced in the sources reviewed.",
    "quotes": [
      {
        "text": "I've served for eight years, and my passion continues to be for this city as a native.",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "Verbatim quotes"
      },
      {
        "text": "We've asked for less water than is allowed by the state.",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "Verbatim quotes"
      },
      {
        "text": "we're rock stars compared to other communities",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "Verbatim quotes"
      },
      {
        "text": "I'm very focused on retail development in this community. I think we need to be looking at everything possible we can do to make ourselves attractive to people out there.",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
        "topic": "SANDY JACOBS -- Commissioner"
      },
      {
        "text": "Sustainable, responsible, planned economic growth",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
        "topic": "SANDY JACOBS -- Commissioner"
      },
      {
        "text": "This is the best design -- in my opinion -- that has been brought forward.",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
        "topic": "SANDY JACOBS -- Commissioner (~8 years), Former Mayor"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a clearly indexed public campaign finance report in this pass. The public web results were much stronger on candidate Q&A, budget coverage, and city leadership reporting than on formal committee filings.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ab9f126e-6b0d-4482-9212-ba76a853c772",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/270/Sandy-Jacobs",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/021a5674-353e-46c4-b816-42284ec8514b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/26583ec1-c757-4e20-9de0-62af6beffcd2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sandy Jacobs - City of Hays Profile",
        "url": "https://haysusa.com/270/Sandy-Jacobs",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Heartland Community Foundation",
        "url": "https://heartlandcommunityfoundation.org/",
        "publication": "Heartlandcommunityfoundation.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Sandy Jacobs - Hays City Commission",
        "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Jacobs filing announcement",
        "url": "https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: 5 candidates vying",
        "url": "https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HDN: Jacobs elected Mayor, Ruder Vice Mayor",
        "url": "https://www.hdnews.net/reorganization-of-commission-names-jacobs-as-mayor-ruder-as-vice-mayor/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: South Vine reconstruction",
        "url": "https://hayspost.com/posts/9a118e53-0b32-4cc1-b6c5-44a476f7f7b9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: North Vine over estimate",
        "url": "https://hayspost.com/posts/5e98f695eb7f17053602be3c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Roundabout working efficiently",
        "url": "https://hayspost.com/posts/7dd5d9eb-456f-47d7-bde0-70d6a92d504a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "david-vilaysing",
    "name": "David Vilaysing",
    "party": "NP",
    "position": "Hays City Commissioner",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Retired Police Officer / Trainer",
    "campaignWebsite": "https://www.haysusa.com/269/City-Commission",
    "whoTheyAre": "Age: 43.\n\nEmail: Vilaysing-HaysCity@outlook.com.\n\nDay Job: Owner, DXI Training Solutions LLC.\n\nRetired from: Hays Police Department (19 years, retired as Sergeant).",
    "theirRecord": "Elected to the Hays City Commission in 2025 on a platform centered on water, housing, and city transparency.\n\nEntered office with a background in police budgets, training, and frontline city operations.\n\nSaid he wants a permanent water solution and better public visibility into the R9 process.\n\nHas stressed low- and middle-income housing and a desire to help make Hays more livable for working families.",
    "whatYouShouldKnow": [
      "The \"core values\" language is suggestive but not conclusive. His background is law enforcement and military -- both communities where faith can be deeply held but not publicly displayed. No specific church identified. Recommend direct inquiry",
      "Vilaysing is the wild card on the commission. A 19-year police veteran with military police background, he's the only commissioner with law enforcement experience. His DXI Training business shows he's focused on de-escalation and communication -- not the stereotypical \"tough cop\" persona. The Alzheimer's fundraiser and BYOB self-defense classes show community engagement. His Laotian surname suggests an interesting personal story (likely refugee family background given the Laotian community in Kansas), though no details were found in public records. His pet licensing initiative is a small but telling first move -- he's looking to cut bureaucratic friction. He replaced the most progressive commissioner (Barrick, the No Kings protester), which shifts the commission's ideological center",
      "Hays Post: David Vilaysing Q&A",
      "Hays Post: 2 incumbents, 1 newcomer elected",
      "Vilaysing brings a unique perspective to the commission as a Laotian-American retired police sergeant with military police background. His de-escalation focus (both professionally and philosophically) is notable -- he's not a \"tough on crime\" stereotype. The BYOB self-defense classes and Alzheimer's fundraiser show genuine community investment. His pet licensing reform initiative (reducing bureaucratic fees that collect only $14K/year) signals a practical, libertarian-leaning approach to government. He replaced the progressive Reese Barrick, shifting the commission's center of gravity",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No verified public church affiliation surfaced in the sources reviewed"
    ],
    "whereTheyWorship": "No verified public church affiliation surfaced in the sources reviewed.",
    "quotes": [
      {
        "text": "I knew at my core I missed giving back to my community.",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "Verbatim quotes"
      },
      {
        "text": "I have a good set of core values.",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "Verbatim quotes"
      },
      {
        "text": "David began his employment with the Hays Police Department in 2005 as a Police Officer.",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "Verbatim quotes"
      },
      {
        "text": "missing in how the current city commission handles matters",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "topic": "Evidence:"
      },
      {
        "text": "The most important factor in de-escalation is an officer's self-control.",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
        "topic": "DAVID VILAYSING -- Commissioner"
      },
      {
        "text": "Responsible conflict management skills for all aspects of life",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
        "topic": "DAVID VILAYSING -- Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a clearly indexed public campaign finance report in this pass. The public record was more visible on his police career and candidate Q&A than on committee filings.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/40e17885-6833-42a5-9562-0abd9f173b21",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "DXI Training Solutions LLC",
        "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
        "publication": "Ileeta.Org",
        "date": "2026-03-31"
      },
      {
        "title": "DXI Training Solutions LLC",
        "url": "https://www.facebook.com/people/DXI-Training-Solutions-LLC/61553945955697/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: 2 incumbents, 1 newcomer elected",
        "url": "https://hayspost.com/posts/1f1932b8-516a-420d-841e-df378c20a8f2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Self-defense for Alzheimer's",
        "url": "https://hayspost.com/posts/a6608a1f-7d44-4212-85de-f8b22f600687",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: No Kings protest (Barrick, not Vilaysing)",
        "url": "https://hayspost.com/posts/39c5ed3b-dd7b-4248-a71f-a7ca06694a9e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "toby-dougherty",
    "name": "Toby Dougherty",
    "party": "NP",
    "position": "Hays City Manager",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "City Manager",
    "family": "Not identified in public records. No spouse, children, church, or personal details found despite extensive search. Dougherty maintains an exceptionally private personal life for someone who has been a public figure for 21 years. His public persona is entirely professional",
    "campaignWebsite": "https://www.haysusa.com/149/City-Managers-Office",
    "whoTheyAre": "Title: City Manager, City of Hays (appointed August 1, 2007).\n\nHometown: Lucas, Kansas (small town ~1 hour from Hays).\n\nIn Hays since: 2005 (started as Assistant City Manager March 2005).\n\nTotal Hays government service: 21 years.",
    "theirRecord": "Has been city manager since 2007 and previously served as assistant city manager.\n\nHelped steer the city through R9 water planning, water conservation measures, and repeated legal challenges over the transfer.\n\nOversaw budget discussions where the city emphasized maintenance rather than expansion in 2026.\n\nLed or explained major public works items such as water meter replacement, street maintenance, and airport lighting upgrades.",
    "whatYouShouldKnow": [
      "As an appointed manager rather than elected official, Dougherty may deliberately keep personal faith private to maintain professional neutrality. 19+ years in Hays without a single public faith reference is notable but may be by professional design. Less relevant for Elect Righteous since he is not elected",
      "Toby Dougherty is the most powerful person in Hays city government. Commissioners serve 2-4 year terms and rotate through the mayor position; Dougherty has been the constant for 19 years. He runs the daily operations, prepares the budgets, hires the staff, and manages every major project. The R9 water project is his legacy bet -- a $145M infrastructure project that will define whether Hays survives as a viable western Kansas city in the 21st century. His Strong Towns philosophy is intellectually interesting and somewhat at odds with the aggressive growth incentives the commission has been approving (RHIDs, IRBs, Chick-fil-A incentives). His 12-year prior career in transportation before city management gives him infrastructure chops. His KU political science background and CPM credential match Mason Ruder's -- suggesting he may have been a mentor/model for Ruder's career path. 19 years with no significant personal controversies is remarkable for any public official",
      "City of Hays: City Manager's Office",
      "Dougherty is the most consequential unelected official in western Kansas. His 21-year tenure managing a city whose water supply is existentially threatened has made him effectively irreplaceable. The R9 Ranch pipeline is a generational infrastructure project -- $144.9M for a city of 21,000 is extraordinary. His Strong Towns methodology makes him unusually sophisticated for a small-city manager. The cost doubling of the R9 project is his biggest vulnerability, but no one has seriously challenged it because everyone knows the alternative (no water) is unthinkable. His personal privacy is remarkable -- in 21 years, there's essentially nothing public about his personal life",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "No verified public church affiliation surfaced in the sources reviewed"
    ],
    "whereTheyWorship": "No verified public church affiliation surfaced in the sources reviewed.",
    "quotes": [
      {
        "text": "The budget is based overall on a slightly cautionary approach.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "topic": "Verbatim quotes"
      },
      {
        "text": "We have a bond rolling off.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "topic": "Verbatim quotes"
      },
      {
        "text": "I felt like the dumbest kid in the classroom out there.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "topic": "Verbatim quotes"
      },
      {
        "text": "The opponents in this have succeeded in weaponizing the legal and judicial system against Hays and Russell.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://www.haysusa.com/directory.aspx?eid=6",
        "topic": "TOBY DOUGHERTY -- City Manager"
      },
      {
        "text": "Securing this Build Kansas grant marks a significant step forward.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://www.haysusa.com/directory.aspx?eid=6",
        "topic": "TOBY DOUGHERTY -- City Manager"
      },
      {
        "text": "We have had to look to places like Las Vegas and Tucson and Phoenix",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://www.haysusa.com/directory.aspx?eid=6",
        "topic": "TOBY DOUGHERTY -- City Manager"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Not applicable in the same way as an elected candidate. I did not surface any public political finance filing for Dougherty in this pass.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/292e6398-09de-4575-8f00-59772bbb0c0c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/149/City-Managers-Office",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/Directory.aspx?DID=6",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/92c6bbf2-25be-47de-ad1c-a2e44e17e420",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/84fcc453-7b77-49a8-a26e-b9011a8d1597",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/227c6d39-b8a1-4133-9b9a-8843072fe5a2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Forward Ever - Toby Dougherty",
        "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "haysusa.com/directory.aspx?eid=6",
        "url": "https://www.haysusa.com/directory.aspx?eid=6",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Strong Towns: Toby Dougherty 2015",
        "url": "https://www.strongtowns.org/journal/2015/10/7/toby-dougherty-city-manager-of-haysks",
        "publication": "Strongtowns.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Strong Towns: Presenting the Hays Document",
        "url": "https://www.strongtowns.org/journal/2016/5/4/the-hays-document",
        "publication": "Strongtowns.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Municipal Water Leader Magazine",
        "url": "https://municipalwaterleader.com/guaranteeing-the-water-supply-of-hays-kansas-through-conservation-reuse-and-new-supplies/",
        "publication": "Municipalwaterleader.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Issuu: Municipal Water Leader interview",
        "url": "https://issuu.com/waterstrategies/docs/mwl_october_2020/s/11017849",
        "publication": "Issuu.Com",
        "date": "2026-03-31"
      },
      {
        "title": "E&E News/POLITICO: Farm vs. City water fight",
        "url": "https://www.eenews.net/articles/farm-vs-city-kansas-water-law-gets-a-major-stress-test/",
        "publication": "Eenews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Hays, Russell sue Edwards County",
        "url": "https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Supreme Court arguments",
        "url": "https://kansasreflector.com/2025/12/15/kansas-supreme-court-examines-roiling-water-dispute-between-crop-irrigators-and-hays-russell/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: R9 delays costing millions",
        "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: $15.8M Build Kansas grant",
        "url": "https://hayspost.com/posts/70979342-77f8-4cc8-8370-86ef215b4085",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: $15M grant",
        "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: R9 hearing went well",
        "url": "https://hayspost.com/posts/8b4554cd-79b4-4076-8a9c-287892f8e9dd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: New assistant city manager",
        "url": "https://hayspost.com/posts/5d942a2c-9baf-4ca9-aa82-92bbd76d37c7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Mayor/CM discuss 2025 projects",
        "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Water bill awaits governor signature",
        "url": "https://hayspost.com/posts/c6a0184d-7e96-4157-ba49-d5e49a49e54c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ZoomInfo: Toby Dougherty",
        "url": "https://www.zoominfo.com/p/Toby-Dougherty/381299961",
        "publication": "Zoominfo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Strong Towns Podcast",
        "url": "https://podcast.strongtowns.org/e/toby-dougherty-1535377231/",
        "publication": "Podcast.Strongtowns.Org",
        "date": "2026-03-31"
      },
      {
        "title": "OpenPayrolls: Hays highest paid",
        "url": "https://openpayrolls.com/rank/highest-paid-employees/hays-ks",
        "publication": "Openpayrolls.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "scott-braun",
    "name": "Scott Braun",
    "party": "R",
    "position": "Ellis County Sheriff",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "Ellis County Sheriff",
    "religion": "Roman Catholic (Diocese of Salina)",
    "education": "Victoria High School graduate (Victoria, KS -- small town in Ellis County)",
    "campaignWebsite": "https://www.ellisco.net/FormCenter/Sheriff-2/ComplimentsComplaints-41",
    "whoTheyAre": "Braun’s public career path runs from Ellis Police Department reserve deputy work into the county sheriff’s office, where he moved through the drug enforcement unit, field operations, canine handling and instruction, narcotics detective work, and later undersheriff.\n\nThe 2019 profile says he and his wife Terri had been married for 24 years at that point and had two sons, Bryce and Coby.\n\nPublic civic ties include Rotary, the Kansas Narcotics Officer Association, the Ellis County Crisis Intervention Team Council, First Call for Help, and church leadership.\n\nBraun's career is unusually easy to track because the sheriff's office and Hays Post both documented his promotions, awards, and department structure. He rose from reserve deputy work in 1995 to deputy, narcotics detective, undersheriff, and then sheriff, while earning a Certified Public Manager designation and the Kansas Law Enforcement Training Center credential. The current official sheriff page also identifies him as president of the Kansas Sheriffs' Association, which makes him one of the more publicly visible county officials in western Kansas.",
    "theirRecord": "Braun has been publicly driving the county jail expansion conversation, saying the current facility is too small and that out-of-county housing is expensive for taxpayers.\n\nIn 2025 the sheriff’s office launched an app that adds inmate lookup, offender maps, weather alerts, and tip submission.\n\nIn 2026 he testified in support of ICE-detainer liability protections after signing a memorandum with ICE.\n\nCurrent Ellis County Jail capacity: 72 beds.",
    "whatYouShouldKnow": [
      "Braun’s record is unusually well documented because he frequently speaks at commission meetings and on local news about jail capacity, inmate transport, and public alerts",
      "His public posture is pro-enforcement and anti-delay: he presents the jail as a practical capacity issue, not a political talking point",
      "He has tied county jail decisions to mental-health placement problems and the lack of out-of-county bed space",
      "The sheriff’s app includes inmate tracking, offender watch mapping, weather alerts, and patrol-request tools",
      "The county’s compliment/complaint form and jail pamphlet are public online, which gave additional context for office operations",
      "Kansas Sheriffs’ Association county records confirm his county role",
      "Scott Braun is deeply involved in Catholic life. 4th Degree Knight of Columbus is the patriotic degree -- you do not get there casually. Church Council Vice Chair means he is helping govern the parish. Combined with his Victoria Catholic upbringing, this is a lifelong, leadership-level Catholic. This is genuine, not performative",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed"
    ],
    "whereTheyWorship": "Denomination: Roman Catholic (Diocese of Salina).\n\nChurch Role: Vice Chair, St. Nicholas of Myra Church Council.",
    "church": {
      "name": "St. Nicholas of Myra Catholic Church, Hays",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://stn-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Role: Vice Chair, St. Nicholas of Myra Church Council."
    },
    "quotes": [
      {
        "text": "We need a jail. I don’t want it. We need it, and it’s not going to be for me. It’s for the public, so we can keep them safe.",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://stn-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I think this is the calm before the storm.",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://stn-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "ICE has been really good with us in letting us know if they are going to pick them up within 48 [hours] or to let them go.",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://stn-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "We are not trained in that, and we have enough things to do.",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://stn-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "It has to be within that 48-hour window. We will not hold them one minute longer than that.",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "If forfeiture is taken away from law enforcement, it will have an effect on taxpayers",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No clean Scott Braun candidate committee ledger surfaced in this pass through the public web and Kansas ethics search surfaces.\n\nI did not find a public donor-by-donor sheriff report I could attribute confidently to Braun without risking misidentification.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "St. Nicholas of Myra Catholic Church",
        "url": "https://stn-church.com/",
        "publication": "Stn-church.Com",
        "date": "2026-03-31"
      },
      {
        "title": "St. Nicholas of Myra Parish - Hays",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "publication": "Salinadiocese.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post",
        "url": "https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post",
        "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Archive.Hayspost.Com",
        "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
        "publication": "Archive.Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/69131eb8-04ac-4b1d-9561-e24c9309ad07",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/3ec912c1-97c6-4ab9-90cb-1c5d9a0a2975",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/FormCenter/Sheriff-2/ComplimentsComplaints-41",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/DocumentCenter/View/1467",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kansassheriffs.Org",
        "url": "https://www.kansassheriffs.org/county_map/county/914",
        "publication": "Kansassheriffs.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/eb108042-f876-49f9-b426-8047d18940ef",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jcpost.Com",
        "url": "https://jcpost.com/posts/0b4a5662-3939-49d6-808a-c3857ad67db9",
        "publication": "Jcpost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Elliscountysheriff.Com",
        "url": "https://elliscountysheriff.com/ecso/",
        "publication": "Elliscountysheriff.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/4564af70-9835-4a1d-897a-9940279e3348",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/scott-braun-cpm-62833366",
        "url": "https://www.linkedin.com/in/scott-braun-cpm-62833366/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellis County Sheriff's Office",
        "url": "https://www.ellisco.net",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "aaron-cunningham",
    "name": "Aaron Cunningham",
    "party": "R",
    "position": "Ellis County Attorney",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "County Attorney / Attorney",
    "hometown": "Hays, Kansas",
    "education": "2012 Hays High School graduate (born/raised in Hays)",
    "family": "Aaron Cunningham: County Attorney, 2012 Hays High grad, K-State, Washburn Law",
    "campaignWebsite": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
    "whoTheyAre": "Cunningham’s public biography is unusually local: Hays Post reported that he wanted to return to his hometown and serve the community after law school and county internships.\n\nThe county attorney office page and KCDAA profile show a prosecutor focused on criminal law rather than private practice.\n\nFort Hays State University included him on the inaugural Civic Learning and Community Engagement advisory board, which is a useful signal of his community footprint.\n\nCunningham's story is rooted in Hays. He is visible in school coverage, county office materials, and Hays Post reporting, which together show a local who left for college and law school and then came back. The county attorney office page now lists him as the officeholder from 2025 onward, and the Hays High Guidon profile captures the career-speaker version of the same story: a student who was active in music and clubs and who later found his lane in advocacy and law.",
    "theirRecord": "Cunningham publicly announced that the office would resume marijuana prosecutions, reversing a prior non-enforcement posture on small possession cases.\n\nHe has said the office must prioritize cases because rural western Kansas has too few qualified attorneys and too many defendants waiting in jail.\n\nThe county’s creation of a Victim/Witness Coordinator position was publicly described by Cunningham as a major help to victim communication and case organization.\n\nCounty office directory and attorney page verify his standing as the county attorney and provide direct office contact information.",
    "whatYouShouldKnow": [
      "Cunningham is not a vague placeholder prosecutor; he is publicly tied to a real policy shift on marijuana cases",
      "He presents himself as a hometown returnee, and that message is central to his public identity",
      "He has framed office policy around legislative intent, resource limits, and victim communication rather than ideology alone",
      "County office directory and attorney page verify his standing as the county attorney and provide direct office contact information",
      "KCDAA maintains a public profile for him",
      "FHSU’s advisory-board announcement confirms another layer of civic engagement",
      "Aaron Cunningham is openly and unapologetically Christian in his personal identity. The theological language (\"total sovereignty of God,\" \"salvation and redeeming grace,\" \"fallen individual\") is specifically Reformed Protestant -- this is not generic \"I'm spiritual\" language. This is someone who knows theology. The specific church he attends in Hays was not identified but the theological framework suggests Reformed/Calvinist tradition (could be Presbyterian, Reformed Baptist, or non-denominational Reformed). This is a man whose faith clearly informs his worldview. Recommend direct inquiry to identify his specific church",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Aaron Cunningham.",
    "quotes": [
      {
        "text": "I wanted to return to my hometown and serve my community.",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I tend to be of the philosophy that whether or not something is a crime is up to the Legislature.",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I do genuinely want to help people.",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I tend to be of the philosophy",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I have an obligation to enforce the law as it's written.",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I always had a strong sense of justice",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a candidate-specific county attorney campaign finance ledger in public search results.\n\nPublic Kansas ethics search results turned up Aaron Cunningham as a donor in unrelated older committee reports, but not a usable county attorney fundraising file.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hays Post",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/92/Attorney",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/Directory/Home/SingleStaff?EID=101",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kcdaa.Org",
        "url": "https://kcdaa.org/Sys/PublicProfile/52134000",
        "publication": "Kcdaa.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Fhsu.Edu",
        "url": "https://www.fhsu.edu/news/2021/03/fhsu-announces-inaugural-advisory-board-for-civic-learning-and-community-engagement",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Hayshighguidon.Com",
        "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
        "publication": "Hayshighguidon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_jud_1/documents/testimony/20250121_03.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "About.Me",
        "url": "https://about.me/aaron.cunningham",
        "publication": "About.Me",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/9397fb25-5dc6-4443-a340-6aae96abc594",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a5f579fa-6c33-44fd-921e-5a8435208d58",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Salinapost.Com",
        "url": "https://salinapost.com/posts/4397834a-4587-449e-ac2b-6effc74eb6c3",
        "publication": "Salinapost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Avvo.Com",
        "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
        "publication": "Avvo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Elliscountyksbar.Org",
        "url": "https://www.elliscountyksbar.org/members",
        "publication": "Elliscountyksbar.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Haysmed.Com",
        "url": "https://haysmed.com/provider/alaina-cunningham/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Anderson Law Office, LLC",
        "url": "https://www.andersonlawoffice.net/",
        "publication": "Andersonlawoffice.Net",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed",
        "url": "https://www.haysmed.com/provider/alaina-cunningham/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/in/aaron-cunningham-653b3094/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "bobbi-dreiling",
    "name": "Bobbi Dreiling",
    "party": "R",
    "position": "Ellis County Clerk",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "County Clerk / Election Officer",
    "religion": "Roman Catholic (devout)",
    "campaignWebsite": "https://www.aclukansas.org/give-hays-voters-their-poll/",
    "whoTheyAre": "Title: Ellis County Clerk and Election Officer (first elected 2020, re-elected 2024).\n\nParty: Republican.\n\nAge: 61.\n\nLocation: Hays, Kansas.",
    "theirRecord": "As clerk/election officer, Dreiling focused on voter turnout logistics, advance voting, assisted-living voting access, and election security.\n\nShe was publicly praised by county Republicans in 2024 for the administration of the election cycle and by critics in the Hays campus polling-place debate.\n\nKansas Ethics records for a county Republican committee show support expenditures tied to her race, including a $999 text broadcast and a $50 meeting-room rental.\n\nCounty office page confirms her office title and contact information.",
    "whatYouShouldKnow": [
      "Dreiling is one of the few county officials whose public identity is tightly tied to election administration rather than general government",
      "The public record shows she was not a novice: she had eight years inside the clerk’s office before running",
      "Her office is central to advance voting, ADA access, and election security",
      "County office page confirms her office title and contact information",
      "Kansas Register of Deeds Association contact listing corroborates the office ecosystem around county recordkeeping",
      "The ACLU of Kansas publicly criticized the county’s poll-location handling, which is relevant context for her public record",
      "Bobbi Dreiling was devoutly Catholic by her own family's account. The Dreiling name is as German-Catholic Ellis County as it gets -- this family literally hosted the first Catholic services in what became Antonino. NOTE: She passed away in October 2024, so this position may have been filled by appointment. Verify who currently holds the County Clerk position",
      "Dreiling is an election administrator in an era when election administration is intensely politicized. Her refusal to place a polling location at FHSU -- despite formal petitions from students, the ACLU, university administration, and campus police -- is her most controversial decision. The \"69 registered voters on campus\" defense ignores the broader population of students who live off-campus but near FHSU. Her election security camera installation and township consolidation show competent administration. The 3,800 misprinted ballots occurred on her watch as deputy clerk -- not directly her fault, but she was in the office when it happened. Her 77-23% re-election margin in 2024 shows the controversy hasn't cost her Republican voter support"
    ],
    "whereTheyWorship": "Denomination: Roman Catholic (devout).\n\nNote: Passed away October 16, 2024.",
    "church": {
      "name": "Specific parish not named in obituary",
      "denomination": "Roman Catholic (devout)",
      "details": "Denomination: Roman Catholic (devout). Note: Passed away October 16, 2024."
    },
    "quotes": [
      {
        "text": "Because I know the office.",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://downingandlahey.com/obits/bobjane-bobbi-dreiling/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "We can promote it by doing public announcements.",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://downingandlahey.com/obits/bobjane-bobbi-dreiling/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I am member of Election Infrastructure Information Sharing.",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://downingandlahey.com/obits/bobjane-bobbi-dreiling/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I enjoy serving the public.",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://downingandlahey.com/obits/bobjane-bobbi-dreiling/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The County Clerk's Office is located in the Administrative Center, 718 Main in Hays, Kansas.",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/93/Clerk",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The County Clerk serves as secretary to the Board of Commissioners.",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/93/Clerk",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not find a clean Bobbi Dreiling donor ledger in this pass.\n\nThe public Kansas ethics PDF I did find shows a county Republican committee spending $999 on a text broadcast for \"Clerk Bobbi Dreiling\" and $50 for meeting-room rent.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Downing & Lahey obituary",
        "url": "https://downingandlahey.com/obits/bobjane-bobbi-dreiling/",
        "publication": "Downingandlahey.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post",
        "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/directory.aspx?EID=19",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Ksrods.Com",
        "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
        "publication": "Ksrods.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1ca1d07e-cccf-4688-8fc2-5482906b6b6d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0c4a7379-b39d-4948-a0f3-91abbf78b149",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Aclukansas.Org",
        "url": "https://www.aclukansas.org/give-hays-voters-their-poll/",
        "publication": "Aclukansas.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/CentralComm/2024ElecCycle/202501/CC_EL_R_202501.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/93/Clerk",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/90ec3907-2122-4b32-9bc1-b4199532ec34",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/3a3f06a1-6b07-45c6-bf3c-8b76f4d564d7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Aclukansas.Org",
        "url": "https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/",
        "publication": "Aclukansas.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Wibw.Com",
        "url": "https://www.wibw.com/2023/11/02/students-community-members-plead-polling-location-fort-hays-state/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1ff3108c-562d-421d-9200-395f040c2103",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/729/Revenue-Neutral-Rate",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Bobbi Dreiling for Ellis County Clerk",
        "url": "https://www.facebook.com/p/Bobbi-Dreiling-for-Ellis-County-Clerk-100067810926476/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Letter -- Hays Post",
        "url": "https://hayspost.com/posts/6308b19f-5890-4688-85fe-3b1ef376a09f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Revenue Neutral Rate -- Hays Post",
        "url": "https://hayspost.com/posts/1003f2e5-b320-47b2-8fb1-4bbc626ef191",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post coverage",
        "url": "https://hayspost.com/posts/eaf298bb-0a33-4f7f-ac25-8869ca6d9ad3",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Dreiling Answers Polling Questions (Letter) -- Hays Post",
        "url": "https://hayspost.com/posts/1fa3b93b-40fb-493c-ab10-6969085c9236",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "BobJane 'Bobbi' Dreiling Obituary",
        "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Bobbi Dreiling for Ellis County Clerk",
        "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Students urge polling site",
        "url": "https://hayspost.com/posts/17997478-c7b3-4601-a433-c8f9623b09da",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "nathan-leiker",
    "name": "Nathan Leiker",
    "party": "R",
    "position": "Ellis County Commissioner, District 3",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "Farmer / County Commissioner",
    "religion": "Likely Roman Catholic",
    "family": "Denomination: Likely Roman Catholic",
    "campaignWebsite": "https://www.ellisco.net/120/County-Commission",
    "whoTheyAre": "Title: Ellis County Commissioner, 3rd District; Vice Chairman (2026); Chairman in 2024.\n\nParty: Republican.\n\nContact: nleiker@ellisco.net | 785-621-1739.\n\n2026 Salary: $20,746.",
    "theirRecord": "Leiker’s public positions are mostly policy preferences rather than formal roll-call votes.\n\nHe argued for a permanent sales tax, infrastructure earmarks, and stable business conditions.\n\nHe also backed equipment-sharing with municipalities, more transparency, and telecommunication expansion.\n\nEllis County’s commission page confirms the office context.",
    "whatYouShouldKnow": [
      "Leiker is an Ellis County-rooted candidate who frames himself around stewardship and continuity",
      "He emphasizes roads, bridges, telecommunications, and budget discipline",
      "He is not selling ideology so much as local competence and visible service",
      "Ellis County’s commission page confirms the office context",
      "LKM’s member directory publicly lists him in the county membership system",
      "The Hays Post profile captures unusually concrete positions on taxes, zoning, transparency, and equipment-sharing",
      "The family evidence is strong. The Leiker name in Ellis County is essentially synonymous with the German-Catholic heritage. His grandmother's funeral was at St. Nicholas of Myra. It would be surprising if Nathan Leiker were NOT Catholic, but personal confirmation was not found. Recommend direct inquiry",
      "Leiker is the agricultural voice on the commission -- a working farmer managing 2,000+ acres across two counties. His TMP-Marian background places him squarely in the Catholic Volga German community that is the cultural bedrock of Ellis County. His 2022 primary win over the incumbent (who finished last in a four-way race) suggests the rural agricultural community wanted fresh representation. His budget discipline (\"2 paychecks a year\") translates directly to his government approach -- during the 2026 budget, he noted the commission spent \"almost 13 hours going through each department, item by item, justifying costs and adjustments"
    ],
    "whereTheyWorship": "Denomination: Likely Roman Catholic.\n\nThe Leiker surname is one of the most prominent German-Catholic families in Ellis County history -- Peter Leiker of Obermunjou was one of the original delegates sent to scout settlement locations in Kansas for the Volga German Catholic community.",
    "church": {
      "name": "Likely St. Nicholas of Myra Catholic Church, Hays (family connection)",
      "denomination": "Likely Roman Catholic",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "details": "Denomination: Likely Roman Catholic. The Leiker surname is one of the most prominent German-Catholic families in Ellis County history -- Peter Leiker of Obermunjou was one of the original delegates sent to scout settlement locations in Kansas for the Volga German Catholic community."
    },
    "quotes": [
      {
        "text": "I believe that the county should leave the sales tax alone.",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "We are too far behind to use those funds in any other manner.",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The county should be proactive in recruiting new business for economic development.",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I agree that it could easily become less transparent, and be abused.",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "work with the city of Hays to get more water to Hays and higher-paying jobs.",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Ellis County spending too much money",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No candidate-specific public campaign finance ledger surfaced in this pass.\n\nI did not find a donor table or itemized county-race finance report I could safely attribute to Leiker.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hays Post",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/120/County-Commission",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Lkm.Org",
        "url": "https://www.lkm.org/members/?id=41501857",
        "publication": "Lkm.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Salinadiocese.Org",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "publication": "Salinadiocese.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Manta.Com",
        "url": "https://www.manta.com/c/mhxwpdc/l5-farms-inc",
        "publication": "Manta.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysmemorial.Com",
        "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
        "publication": "Haysmemorial.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fhsuguides.Fhsu.Edu",
        "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
        "publication": "Fhsuguides.Fhsu.Edu",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "neal-younger",
    "name": "Neal Younger",
    "party": "R",
    "position": "Ellis County Commissioner, District 2",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "Electrician / Plumber",
    "family": "Not identified in any public record. No spouse, children, or family details found",
    "campaignWebsite": "https://www.ellisco.net/120/County-Commission",
    "whoTheyAre": "Title: Ellis County Commissioner, 2nd District; Chairman of the Commission (2026).\n\nParty: Republican.\n\nContact: nyounger@ellisco.net | 785-656-0814.\n\n2026 Salary: $21,584.",
    "theirRecord": "Younger’s public positions are mostly policy preferences rather than formal roll-call votes.\n\nHe argued for more proactive economic development, better county-city communication, and closer coordination with EMS and the medical center during COVID-era discussions.\n\nHe favored budget restraint and said the county should \"maintain what we have\" until demand normalizes.\n\nEconomic Development: Favors proactive county role in economic development. Stated he would \"work with the city of Hays to get more water to Hays and higher-paying jobs.",
    "whatYouShouldKnow": [
      "Younger’s public persona is that of a budget-and-infrastructure commissioner rather than a culture-war candidate",
      "He repeatedly emphasizes communication between county departments and the city of Hays",
      "He frames public-health decisions through the EMS and medical-center chain of command",
      "Ellis County’s commission page confirms the office context",
      "LKM’s member directory publicly lists him in the county membership system",
      "Search results also linked him to a county commissioner role in city street-policy discussions",
      "Nothing found. Recommend direct inquiry",
      "Younger is the blue-collar voice on the commission -- an electrician/plumber who brought trade-level fiscal discipline to county government. His mental health funding argument (\"cheaper than jail\") shows he's a pragmatist, not an ideologue. His complete absence from social media is notable in 2026 -- he governs through meeting rooms, not posts. No controversies, no red flags, no personal information publicly available. He is, in many ways, the most anonymous elected official in Ellis County"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation for Neal Younger in this pass.",
    "quotes": [
      {
        "text": "I would talk with the head of the EMS.",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Ellis County spending too much money.",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I think for now Ellis County should just maintain what we have.",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "is less expensive than building a new jail.",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "work with the city of Hays to get more water to Hays and higher-paying jobs.",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "2026 Salary:"
      },
      {
        "text": "Mental Health Cheaper Than Jail",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "NEAL YOUNGER -- Ellis County Commissioner, District 2"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No candidate-specific public campaign finance ledger surfaced in this pass.\n\nI did not find a donor table or itemized county-race finance report I could safely attribute to Younger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hays Post",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/120/County-Commission",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Lkm.Org",
        "url": "https://www.lkm.org/members/?id=41501857",
        "publication": "Lkm.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Voterly.Com",
        "url": "https://voterly.com/politicians/DmRJRnnSKN/neal-younger",
        "publication": "Voterly.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: 2026 budget/mill levy",
        "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "rebecca-herzog",
    "name": "Rebecca Herzog",
    "party": "R",
    "position": "Ellis County Register of Deeds",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "Register of Deeds",
    "campaignWebsite": "https://www.ellisco.net/100/Register-of-Deeds",
    "whoTheyAre": "Title: Ellis County Register of Deeds.\n\nParty: Republican.\n\nLocation: Hays, Kansas.\n\nOffice: 718 Main St, Hays, KS 67601.",
    "theirRecord": "Herzog’s public record is the office itself: recording deeds, maintaining land indexes, and handling document recording under Kansas law.\n\nThe office page emphasizes that the register of deeds must keep records open to the public except for limited statutory exceptions.\n\nThe 2024 election result page shows her vote total in the county election cycle.\n\nThe county register page confirms the office’s public-service mission and open-records obligations.",
    "whatYouShouldKnow": [
      "Herzog is one of the hardest candidates in this project to research because the public web leaves almost no personal trail",
      "The office itself is important and legally defined, but the person behind it is not widely profiled",
      "Her vote total confirms she was elected and therefore has a countywide public mandate",
      "The county register page confirms the office’s public-service mission and open-records obligations",
      "KSRODS confirms the county association contact ecosystem",
      "Hays Post’s 2024 election results page gives a public tally trail",
      "Like the Leiker name, \"Herzog\" is deeply embedded in Ellis County's German-Catholic heritage (the town of Herzog was literally named for these families). However, no personal confirmation was found for Rebecca specifically. Recommend direct inquiry",
      "Rebecca Herzog is genuinely invisible in the public sphere. In an era of social media, candidate profiles, and local news coverage of every election, she managed to win an elected office without leaving a single searchable trace of her personal life, campaign, or views. This is either extraordinary privacy discipline or a reflection of how uncontested Register of Deeds races work in rural Kansas -- the office is so non-political that no one asks questions, and no one campaigns. She is, indeed, the Ghost of Ellis County"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation for Rebecca Herzog in this pass.",
    "quotes": [
      {
        "text": "The goal of the register of deeds office is to provide quality public service to all citizens in a professional manner.",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "This office files and records documents that pertain to real estate.",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "All records in the register of deeds office are required by law to be open to the public.",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "files and records documents",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Record all documents submitted by the public",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The Ghost of Ellis County",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "REBECCA HERZOG -- Register of Deeds"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No candidate-specific public campaign finance ledger surfaced in this pass.\n\nI did not find a donor table or itemized county-race finance report I could safely attribute to Herzog.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Ellis County Register of Deeds",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Ksrods.Com",
        "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
        "publication": "Ksrods.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "vernon-ruder-jr",
    "name": "Vernon Ruder Jr.",
    "party": "R",
    "position": "Ellis County Treasurer",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "County Treasurer",
    "religion": "Roman Catholic (strong indicators)",
    "family": "Position",
    "campaignWebsite": "https://www.ellisco.net/directory.aspx?EID=129",
    "whoTheyAre": "Public biography material for Ruder is more limited than for some other local officials, but the record clearly shows a long-running county finance role.\n\nThe public record around his office focuses on practical administration: motor vehicle transactions, title renewals, office costs, and taxpayer burden.\n\nPublic family-faith traces in the broader Ruder family record point to Catholic parish life in Hays.\n\nRuder's public biography is the classic Hays family-government story: Catholic-school background, local work history, and a county office that fits a practical, administrative personality. He is not a loud political figure, but he is responsible for a lot of the county's revenue workflow and motor-vehicle processing.",
    "theirRecord": "Ruder implemented a $2.50 walk-in motor vehicle fee after 12 years in office to support county motor vehicle operations.\n\nHe framed the fee as a way to shift costs away from property taxpayers and toward the service being used.\n\nHis public comments emphasize maintaining office service while covering technology and staffing costs locally.\n\nThe county directory verifies the office and contact information.",
    "whatYouShouldKnow": [
      "Ruder is a technical-administration treasurer rather than a high-visibility political operator",
      "The clearest public policy marker is his willingness to use fee authority to keep county operations funded",
      "He frames government finance in practical terms: local users should help pay for local service delivery",
      "The county directory verifies the office and contact information",
      "The county treasury page confirms office hours and commercial vehicle handling windows",
      "The motor vehicle fee article provides the most detailed public policy explanation for his tenure",
      "Vernon Ruder Jr. is a TMP-Marian graduate who was literally employed by the Catholic school system. The Ruder family (note: Mayor Mason Ruder is also a TMP grad and IHM member) appears to be a well-established Catholic family in Hays. While his specific parish was not confirmed, the overwhelming evidence points to active Catholic faith. He and Mason Ruder may or may not be directly related -- the shared surname and shared TMP graduation year (both 2010) is notable",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed"
    ],
    "whereTheyWorship": "Denomination: Roman Catholic (strong indicators).\n\n2010 TMP-Marian graduate (Catholic high school).",
    "church": {
      "name": "Specific parish not confirmed",
      "denomination": "Roman Catholic (strong indicators)",
      "url": "https://www.ihm-church.com/",
      "details": "Denomination: Roman Catholic (strong indicators). 2010 TMP-Marian graduate (Catholic high school)."
    },
    "quotes": [
      {
        "text": "I elected, after 12 years, to implement a $2.50 fee for walk-in customers.",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The State of Kansas allows the treasurers in each county to help fund their motor vehicle operations with this facility fee for the county.",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The state no longer purchases our computers or printers.",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I wanted to take the burden off of people who pay property taxes.",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The Ellis County Treasurer's Office ... is responsible for the tax billing, collection, and distribution",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The Treasurer's Office also acts as an agent for the Kansas Department of Revenue",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a candidate-specific public campaign finance ledger for Ruder in this pass.\n\nNo donor-by-donor public report was available in the sources I could confirm.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Immaculate Heart of Mary Catholic Church",
        "url": "https://www.ihm-church.com/",
        "publication": "Ihm-church.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post",
        "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/directory.aspx?EID=129",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/566/Treasury",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hdnews.Net",
        "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kspress.Com",
        "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
        "publication": "Kspress.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Zoominfo.Com",
        "url": "https://www.zoominfo.com/p/Vernon-Ruder/2569532965",
        "publication": "Zoominfo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: NWester - Support for Catholic education alive, well in Ellis County",
        "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ken-brooks",
    "name": "Ken Brooks",
    "party": "NP",
    "position": "USD 489 Board President",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "hometown": "Hays, Kansas",
    "religion": "Non-denominational / Evangelical",
    "education": "2021 - Present — Board Member — First elected November 2021",
    "family": "Three daughters, all graduated from Hays High School (last one graduated 2023)",
    "campaignWebsite": "https://www.insurance-planning.com/contact/a_ken_brooks",
    "whoTheyAre": "The public record continues to show Brooks as a Hays-based family and service figure first, not a career politician. His profile is anchored in local school governance, community volunteering, and church involvement, with his own comments stressing kids, family, and neighborhood ties. The additional round of checking did not surface any contradictory identity clues.\n\nBrooks is a long-serving USD 489 board member in Hays and a publicly identified leader in the Celebration Community Church Hays campus children's ministry. That combination of school-board service and church-service visibility makes him easy to distinguish from namesakes.\n\nKen Brooks is a Hays school-board incumbent and the district's current vice president. Public profiles identify him as a loss-control safety specialist at Insurance Planning, a Kiwanis member, and a long-time Hays parent whose three daughters graduated from Hays High.\n\nEmployed for 18+ years (as of 2025 election cycle).",
    "theirRecord": "Brooks' board record still centers on fee reductions, bond support, and a generally pro-administration posture on day-to-day management. In the public questionnaire trail, he has repeatedly argued that the district has been responsible with money and that the board should focus on broad oversight rather than micromanagement. The second-pass review did not uncover major controversies or flipped positions.\n\nThe second-pass review reinforced the same core sources: Hays Post candidate coverage, the USD 489 board portal, KSDE directory listings, and Celebration Community Church materials. I did not find court, property, or business-record material that changed the profile.\n\nBrooks' public record is centered on facilities, fees, and budget stewardship. He supported the 2017 bond, later ran on keeping the current bond work on pace, and said the district has done a good job finding ways to fund immediate facility concerns. In 2025 he said he wanted to keep lowering student enrollment fees, and he defended district budgeting as responsible and trustworthy.\n\nHe also favors a board that governs without micromanaging. In his 2025 Q&A, he said the board should provide oversight while leaving day-to-day operations to administrators and teachers, and he specifically pointed to Superintendent Ron Wilson and the district finance team as people he trusts to answer budget questions. That makes Brooks a pragmatic, systems-and-process board member rather than an ideologue.",
    "whatYouShouldKnow": [
      "Brooks is one of the clearest examples in this cohort of a candidate whose public life blends school-board work with church service",
      "He backed the district's facilities work and bond rollout rather than positioning himself as an insurgent",
      "He repeatedly emphasized lower fees for families, not just abstract budget discipline",
      "He told Hays Post he has \"a love for our community, and a love for kids",
      "He has been a visible church and service volunteer, not just a school-board name on a ballot",
      "He pushed repeatedly to lower school enrollment fees for families",
      "The second-pass review reinforced the same core sources: Hays Post candidate coverage, the USD 489 board portal, KSDE directory listings, and Celebration Community Church materials. I did not find court, property, or business-record material that changed the profile",
      "THIS IS YOUR GUY. Ken Brooks is not only a member of Celebration Community Church -- your project's home church and inspiration -- he has been leading their Children's Ministry for nearly 14 years. He is the Board PRESIDENT of USD 489. This is someone who has been faithfully serving in the same church for over a decade in a hands-on ministry role (Children's Ministry is one of the most demanding and least glamorous church roles -- this is not a photo-op position). His community service (food drive coordination since 2008) aligns with active faith practice. He is the clearest example of faith lived out in public service on this entire list"
    ],
    "whereTheyWorship": "Denomination: Non-denominational / Evangelical.\n\nChurch Role: Children's Ministry Leader (~14 years).",
    "church": {
      "name": "Celebration Community Church, Hays, KS",
      "denomination": "Non-denominational / Evangelical",
      "details": "Denomination: Non-denominational / Evangelical. Church Role: Children's Ministry Leader (~14 years)."
    },
    "quotes": [
      {
        "text": "I have a love for our community, and a love for kids.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Since I've been on the board, we've lowered the school fees.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "There hasn't been anything where our school district has proven they're not responsible with their budget.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I have helped lead the Children's Ministry at Celebration Community Church for almost 14 years.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "a love for our community, and a love for kids.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I have a love for our community, and I have a love for kids.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No itemized donor ledger surfaced in the public material I reviewed. Brooks' 2021 candidate profile said he had not taken outside money or in-kind support from a PAC or outside source, which is the most concrete finance note I could verify.\n\nIn his 2021 Hays Post profile, Brooks answered \"No\" when asked if he had received funds or in-kind donations from outside the school district or a PAC. I did not surface a fuller itemized donor table in the public records reviewed for this pass.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Celebratejesus.Org",
        "url": "https://www.celebratejesus.org/hays-campus",
        "publication": "Celebratejesus.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Celebratejesus.Org",
        "url": "https://www.celebratejesus.org/",
        "publication": "Celebratejesus.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "USD 489 Candidate Profile: Ken Brooks",
        "url": "https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 BOE votes to change Hays Middle School mascot to Indians",
        "url": "https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Insurance Planning - A. Ken Brooks",
        "url": "https://www.insurance-planning.com/contact/a_ken_brooks",
        "publication": "Insurance-planning.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network",
        "url": "http://tigermedianet.com/?p=78688",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network",
        "url": "https://tigermedianet.com/?p=78383",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost",
        "url": "https://hayspost.com/posts/677ac412-2adb-48bd-85f8-bbd5f05bb92f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Nepotism debate",
        "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Ground broken on new HHS",
        "url": "https://hayspost.com/posts/1dbbae4c-f879-499e-bea0-88777d5eeb41",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Bond budget scrutiny",
        "url": "https://hayspost.com/posts/87f9b442-e928-4c9d-bb85-03acad9d2a3f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Naming rights paused",
        "url": "https://hayspost.com/posts/a90fb672-f7e5-4826-b5f3-1decd214e83c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: HHS, Roosevelt contract",
        "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Naming rights postponed despite deadline",
        "url": "https://hayspost.com/posts/aefb9f40-2e86-4bb2-976e-2f731e7ce14f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: New HHS ribbon cut",
        "url": "https://hayspost.com/posts/b20dc400-848a-4e10-bda4-36f5dad6d626",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NewsBreak: Ken Brooks profile",
        "url": "https://www.newsbreak.com/news/2408525975485/hays-post-hays-usd-489-candidate-profile-ken-brooks",
        "publication": "Newsbreak.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "curt-vajnar",
    "name": "Curt Vajnar",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "religion": "Roman Catholic (Diocese of Salina)",
    "campaignWebsite": "https://www.emporia.edu/teachers-college/about-college/honors-awards/kansas-master-teacher-award-home/previous-winners/",
    "whoTheyAre": "The broader record still portrays Vajnar as a district insider with unusually deep institutional memory. He is not only a former teacher but also a current board leader who has remained visible in facility planning, bond follow-through, and public discussion of long-range capital work. The second pass did not surface any contradictory biographical facts.\n\nVajnar is the board president and a long-time USD 489 educator, publicly described as having taught in the district for 31 years. The school-board role, teaching history, and local Catholic reference are enough to distinguish him clearly from any namesake.\n\nCurt Vajnar is the current USD 489 board president, a retired Hays teacher, rancher, and business owner. His public biography says he taught for 31 years in USD 489, won Kansas Teacher of the Year, and has lived in Hays for 35 years.\n\nVajnar taught agriculture education at Hays High School for 31 years. He was named Kansas Teacher of the Year by KNEA -- the youngest teacher to win that honor at the time. He was also the only nationally board-certified agriculture teacher in the state. He had teaching endorsements in Agriculture Education, Biology, Drivers Education, and Administration. He chose never to pursue an administrator role despite holding the certificate. Retired around 2020.",
    "theirRecord": "His public priorities remain facilities completion and long-term planning. He repeatedly argued for a 10-year facilities plan instead of a five-year horizon, framing the issue as business-like stewardship and a way to stretch bond and naming-rights dollars. He appears to be one of the district's key agenda-shapers because he also serves as board president.\n\nThe second-pass sweep kept pointing back to the same core sources: Hays Post profile coverage, the USD 489 board portal, KSDE directory references, and the old Knights of Columbus newsletter mention. I did not find any court, property, or business records that materially changed the profile.\n\nVajnar has been one of the clearest board voices on capital planning. He told Hays Post he wants a 10-year facilities plan because the district has several turf and facility replacements with overlapping warranty cycles. He also wants naming-rights revenue to go back into replacement reserves rather than into the general fund, which is a very specific stewardship philosophy.\n\nHe has been broadly supportive of the bond buildout and says the work should be finished well rather than rushed. In later board coverage he also showed up as a steady vote for operations like transportation leasing and building improvements, and the district directory lists him as board president. He reads as a process-and-maintenance board member, not a culture-war board member.",
    "whatYouShouldKnow": [
      "Vajnar's school-board influence is amplified by the fact that he is the board president",
      "His public messaging is about long-horizon planning, not short-term fixes",
      "He has a notably long teaching history inside the same district he now helps govern",
      "He taught in USD 489 for 31 years and won Kansas Teacher of the Year",
      "He wants a 10-year plan, not just a five-year plan, for facilities",
      "He is focused on making bond money and naming-rights money last",
      "The second-pass sweep kept pointing back to the same core sources: Hays Post profile coverage, the USD 489 board portal, KSDE directory references, and the old Knights of Columbus newsletter mention. I did not find any court, property, or business records that materially changed the profile",
      "Curt Vajnar is confirmed Catholic and in parish leadership (Council member). Our Lady, Help of Christians in Antonino is a small rural Catholic parish -- being on its council means he is one of the core leaders of that faith community. He also notably fought AGAINST removing the ban on satanic clothing in the USD 489 dress code, saying \"Some fights are worth fighting.\" This is a man whose Catholic faith directly influences his school board decisions"
    ],
    "whereTheyWorship": "Denomination: Roman Catholic (Diocese of Salina).\n\nChurch Role: Parish Council Member.",
    "church": {
      "name": "Our Lady, Help of Christians Catholic Church, Antonino, KS",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.ihm-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Role: Parish Council Member."
    },
    "quotes": [
      {
        "text": "I taught for 31 years in USD 489.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I want to see them finished.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I would like to see a 10-year plan.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I think 10 years is better, business-wise.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "a Parish Council member for Our Lady, Help of Christians Catholic Church",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "topic": "Evidence:"
      },
      {
        "text": "Some fights are worth fighting.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "topic": "Assessment:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not find a reliable itemized donor table or PAC ledger for Vajnar. The public material I reviewed is strong on biography and governance, but weak on contribution detail.\n\nI did not find a clean public itemized donor table for Vajnar in the sources reviewed for this pass. The public record I checked is enough to verify his school-board role and policy positions, but not enough to reconstruct a reliable donor ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Ihm-church.Com",
        "url": "https://www.ihm-church.com/",
        "publication": "Ihm-church.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Doczz.Net",
        "url": "https://doczz.net/doc/6776409/3rd-degree-monthly-newsletter---immaculate-heart-of-mary-church",
        "publication": "Doczz.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Emporia.Edu",
        "url": "https://www.emporia.edu/teachers-college/about-college/honors-awards/kansas-master-teacher-award-home/previous-winners/",
        "publication": "Emporia.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost USD 489 Candidate Profile: Curt Vajnar",
        "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Our Lady Help of Christians Parish - Diocese of Salina",
        "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
        "publication": "Salinadiocese.Org",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: USD 489 to revisit dress code after satanism ban complaint",
        "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "USD 489 Candidate Profile: Curt Vajnar",
        "url": "https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Teacher of the Month: Vajnar says goodbye to HHS",
        "url": "https://hayspost.com/posts/5e878e4beb7f170536019f51",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays school board approves HHS, Roosevelt contract; discussion heated",
        "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board votes not to add another manager for bond work",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ruth-ruder",
    "name": "Ruth Ruder",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "family": "The Mayor's office (Mason)",
    "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
    "whoTheyAre": "The public record continues to show Ruder as a practical, community-rooted board member with a finance background. She speaks from the perspective of a taxpayer, employee, and parent of a district student, which gives her board comments a strongly local and operational character. The second-pass review did not uncover any identity conflicts.\n\nRuder is a Hays native, Hays High graduate, and USD 489 board member whose public biography centers on local finance work at Golden Plains Credit Union. That combination makes her identity easy to verify and distinct from any same-name person.\n\nRuth A. Ruder is a Hays-born USD 489 graduate, vice president at Golden Plains Credit Union, and a current USD 489 board member. The district portal lists her as a board member, and her public profile shows deep local roots.\n\nThe Mayor's office (Mason).",
    "theirRecord": "Ruder's record is still defined by caution around land use, support for student-facing purchases, and insistence on fiscal accountability. She has supported technology and classroom-oriented spending while also asking hard questions about whether land transactions or sponsorships create real benefit for the district. Her comments in the land-sale coverage showed a willingness to slow down when public purpose was not clear.\n\nThe second pass reinforced her Hays High and Golden Plains background and the district board portal record. I also checked for additional public-record angles such as property, court, and archived social content, but nothing attributable enough surfaced to change the profile.\n\nRuder's public record on the board emphasizes communication, fiscal discipline, and a willingness to slow down when land use or spending choices could have long-term consequences. In December 2025 she voiced concern that a buyer of district land next to the middle school might simply hold it for a tax deduction rather than use it productively. In other votes, she supported laptop purchases for Hays High and said students should be at the center of the district's decisions.\n\nShe is also a board voice who cares about the district's reputation as a community asset. In her election profile she said USD 489 can be \"the highlight of our community\" and that the district should balance smart growth with fiscal responsibility. Her comments on sponsorships and land sales show a board member who is comfortable asking what the public gets back for a given dollar.",
    "whatYouShouldKnow": [
      "Ruder's finance background shows up in the way she frames board decisions",
      "She is comfortable pushing back on transactions that do not obviously help students",
      "She has already been serving on the board, so her public record reflects actual votes and not just campaign rhetoric",
      "She grew up in Hays and graduated from Hays High in 1988",
      "She has spent 30 years at Golden Plains Credit Union",
      "She is already serving on the USD 489 board, so her positions matter now",
      "The second pass reinforced her Hays High and Golden Plains background and the district board portal record. I also checked for additional public-record angles such as property, court, and archived social content, but nothing attributable enough surfaced to change the profile",
      "No personal faith information found. The Ruder surname pattern suggests Catholic heritage but this is inference only. Recommend direct inquiry"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Ruth Ruder.",
    "quotes": [
      {
        "text": "My first obligation, if elected, will be to the children in our district.",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "All employees of USD 489 are equally important.",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I will do my best at representing the taxpayer in being fiscally responsible.",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Board member Ruth Ruder expressed concern that someone might purchase the land for a tax deduction, only to leave it vacant.",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "the highlight of our community",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "in a school board discussion but in context of",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "topic": "Evidence:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not find a clean itemized donor table for Ruder. The public record reviewed for this pass supports her local profile and board positions, but it does not provide donor-level transparency.\n\nI did not find a clean public itemized donor table for Ruder in the sources reviewed for this pass. The public record I found was enough to confirm her local profile and board actions, but not enough to reconstruct a reliable donor ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/fc95a5ee-b8b3-4d06-b876-7cba2008d1cb",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: USD 489 BOE candidate Ruth Ruder",
        "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Candidate Profile Ellis County Treasurer: Vernon Ruder Jr.",
        "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays City Commission Candidate: Mason Ruder",
        "url": "https://hayspost.com/posts/0187e996-15de-4377-95c2-cc428ed058e5",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "derek-yarmer",
    "name": "Derek Yarmer",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "campaignWebsite": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
    "whoTheyAre": "The public record keeps Yarmer in the lane of medically trained school-board oversight: he is the doctor on the board who keeps returning to core academics, student safety, and operational discipline. The second pass did not uncover identity confusion, and it reinforced that his public persona is unusually credentialed and locally rooted.\n\nYarmer is a practicing emergency physician and USD 489 board member whose biography is anchored in Albert, Otis-Bison, FHSU, KU, and UMKC. That full education-and-medical path is public enough to keep him distinct from any same-name physician.\n\nDerek Yarmer is a Hays USD 489 board member and an emergency medicine doctor. His public profile says he was raised in Albert, graduated from FHSU in chemistry, completed KU School of Medicine and UMKC residency training, and moved back to Hays in 2015 with his wife Emily.",
    "theirRecord": "Yarmer's board posture continues to read as skeptical but constructive. He supports school goals, but he repeatedly asks for more explanation when spending or process seems rushed, and he has voted no when he thought a purchase or commitment moved too quickly. His public comments about emergencies, core subjects, and extracurricular balance make him one of the clearest \"process first\" voices on the board.\n\nThe second-pass review continued to emphasize Hays Post profiles, the board portal, and the KSDE directory. I did not find court, property, or business records that added meaningful candidate-specific facts, and I did not find a verified faith source.\n\nYarmer has been one of the more skeptical voices on spending and process. He has said board decisions should be broadcast, agendas should come out earlier, and bond money should be spent responsibly. In 2025 he asked for bids on flooring and asbestos work to come to the board before a vote, saying that if everything is an emergency then nothing is an emergency.\n\nHe has also voted against some expenditures that other members supported, including furniture and other purchases where he wanted the board to be more deliberate. His public posture is not anti-school, but it is strongly pro-oversight. He reads like a board member who wants more explanation, more bidding, and more patience before large commitments.",
    "whatYouShouldKnow": [
      "Yarmer is the rare board member whose day job is directly tied to emergency decision-making",
      "He has a deep local-school-to-medical-school path that keeps him grounded in the region",
      "He is not reflexively anti-spending, but he is unusually impatient with unclear process",
      "He is the only board member in this group who is also a practicing emergency physician",
      "His education path runs from Otis-Bison to FHSU to KU Med to UMKC",
      "He explicitly ties his school-board run to the pandemic and bond spending",
      "The second-pass review continued to emphasize Hays Post profiles, the board portal, and the KSDE directory. I did not find court, property, or business records that added meaningful candidate-specific facts, and I did not find a verified faith source",
      "Nothing found. Medical professionals sometimes keep personal beliefs separate from their professional identity. Recommend direct inquiry"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Derek Yarmer.",
    "quotes": [
      {
        "text": "I am originally from Albert, Kan.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I want to be an advocate for the students' interests, as well as be fiscally responsible.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I believe extra-curricular activities are important ... but the main responsibility of the school is to teach the core subjects.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "If everything is an emergency, then nothing is an emergency.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "to blame for reckless spending by failing to provide proper oversight of the school administration",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "topic": "Bond Budget Critic (Major):"
      },
      {
        "text": "I don't think you give up your parental rights between 8 and 3.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "topic": "Parental Rights Advocate:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "The public materials reviewed for this pass still point toward a self-funded or very lightly funded campaign profile, and I did not find a donor-by-donor table. There was no public PAC ledger that I could responsibly attribute.\n\nI did not surface a reliable itemized donor table for Yarmer in the sources reviewed for this pass. The public record I found supports his biography and board positions, but not a clean contribution ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed Provider: Derek Yarmer, MD",
        "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Opinion: Hays USD 489 board member critical of use of bond, capital funds",
        "url": "https://hayspost.com/posts/52e53c90-5182-42f0-919e-2c7dc145305b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Board member questions Hays USD 489 bond budget",
        "url": "https://hayspost.com/posts/ed7e23f5-7116-4798-87ff-ff11bf8563d4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board scrutinizes bond budget",
        "url": "https://hayspost.com/posts/87f9b442-e928-4c9d-bb85-03acad9d2a3f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board members question parental rights in emergency policy revision",
        "url": "https://hayspost.com/posts/d89d076f-4f16-4002-a12d-d27ea8cd6471",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "allen-park",
    "name": "Allen Park",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
    "whoTheyAre": "The round-2 sweep continued to show Park as a district lifer who moved from classroom and administrative work into board service. He has the kind of institutional memory that comes from having watched the district through multiple staffing, facilities, and enrollment cycles. The additional review did not surface any identity ambiguity.\n\nPark is a retired educator and former Washington Elementary principal who has spent more than three decades inside USD 489. His family-of-educators background and long service history make him easy to verify in the public record.\n\nAllen Park is a retired USD 489 elementary principal, a licensed insurance agent, and a current USD 489 board member. Public profiles say he has worked in USD 489 for 31 years and is now also doing part-time UPS work.\n\nAllen Park served USD 489 for 31 years in multiple roles:.",
    "theirRecord": "Park's record still leans toward bond completion, careful process, and a steady interest in teacher retention and student outcomes. He has supported major facilities work but has also shown he is willing to vote no when he thinks purchases need more scrutiny. He appears to view his role as protecting public money while preserving educational quality.\n\nThe second-pass search kept reinforcing his school-district biography and the public board portal. I did not uncover any court, property, or business records that materially changed the public profile.\n\nPark is one of the clearest supporters of the bond-buildout phase and the district's effort to lower student fees. He told Hays Post that the bond is replacing and repairing facilities, more teachers have been hired, and reduced fees help families in tight times. He also repeatedly says communication and transparency are what build trust with stakeholders.\n\nHis more recent board coverage shows him willing to question spending that he thinks is too fast or too expensive. In 2025 he voted against some furniture purchases, and he has been willing to pause or delay decisions when he wants more review. He is not a reflexive \"yes\" vote; he is a long-term district steward who likes structured process.",
    "whatYouShouldKnow": [
      "Park's record is built on district leadership experience, not outsider critique",
      "He started in USD 489 as a bus driver, which gives him a wider operational lens than many board members",
      "He keeps coming back to retention, recruitment, and communication",
      "He served 25 years as Washington Elementary principal",
      "He says he has 100 percent board-meeting attendance across four years of service",
      "He has four children who all graduated from Hays High",
      "The second-pass search kept reinforcing his school-district biography and the public board portal. I did not uncover any court, property, or business records that materially changed the public profile",
      "Nothing found. Recommend direct inquiry"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Allen Park.",
    "quotes": [
      {
        "text": "I have worked in education for over 35 years.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "With the recently passed bond, the facilities are being replaced and repaired.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Communication is so important and can always be improved.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I have not received any money outside of the school district.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "unsure if the district was following the policy.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "topic": "Nepotism Opponent:"
      },
      {
        "text": "gossip session and micromanagement.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "topic": "Executive Session Advocate:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Park gave the clearest finance answer of the group: he said he had not received money outside the school district, and that family, friends, and community members provided support. I did not find a donor-by-donor table or PAC contribution ledger to supplement that statement.\n\nPark gave one of the clearest public answers in the field: he said he had not received money outside the school district, that his donations came from family, friends, and community members who care about kids and education, and that any additional expenses were paid personally. That means I did not find a PAC-driven donor table here, just a statement that his support was local and modest.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fhsu.Edu",
        "url": "https://www.fhsu.edu/news/2020/05/pizza-kits-and-book-giveaways-set-for-monday-in-downtown-hays",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Park announces retirement after 30 years with USD 489 (Archive)",
        "url": "https://archive.hayspost.com/2015/05/19/park-announces-retirement-after-30-years-with-usd-489/",
        "publication": "Archive.Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Takeaways from Hays USD 489 Education Board Meeting",
        "url": "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/",
        "publication": "Citizenjournal.Us",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 BOE debates nepotism again",
        "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board votes not to add another manager for bond work",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "jayme-goetz",
    "name": "Jayme Goetz",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
    "whoTheyAre": "The second-pass review continues to show Goetz as an educator first and a board member second. Her public comments and background keep emphasizing family life, classroom experience, and a very local sense of responsibility to students. I did not find conflicting identity data.\n\nGoetz is a lifelong Hays resident, FHSU math instructor, and USD 489 board member. Her public trail also places her in the district as a former Hays High teacher, which makes the identity match straightforward.\n\nJayme Goetz is a lifelong Hays resident, Fort Hays State mathematics instructor, and current USD 489 board member. Her public profile says she grew up in Hays, earned three degrees from Fort Hays State, and returned to teach here after one year in Ellsworth.",
    "theirRecord": "Goetz remains one of the board's more transparency-focused voices. She has raised questions about handbook rules, compensation, laptop spending, and policy clarity, and she has framed those questions in terms of how decisions land on real families. The record suggests active oversight rather than passive consensus.\n\nThe second pass kept pointing back to Hays Post, the USD 489 board portal, and the educational background already in the file. I did not find court, property, or archived social sources that changed the profile in a verifiable way.\n\nGoetz has repeatedly pushed the board toward better communication, clearer discipline policy, and more transparent budget decisions. In 2025 she asked how the 2.5 percent raise figure was calculated, and she pushed the district to clarify handbook discipline rules so families know the consequences. She also supported laptops for Hays High students after hearing from teachers who preferred them.\n\nShe has a visible habit of asking the board to slow down and explain itself. That showed up in the handbook fight, in questions about capital purchases, and in her insistence that the district's decisions should be understandable to the families who pay for them. She is not a passive member; she is an asking-questions member.",
    "whatYouShouldKnow": [
      "Goetz's public identity is closely tied to Hays education, not just politics",
      "She tends to ask whether policies are understandable to the families who must live under them",
      "She is willing to question spending and rule-setting even when the items are ordinary school business",
      "She has lived in Hays her whole life and has deep USD 489 roots",
      "She taught at Hays High for seven years before moving to FHSU",
      "She has two young daughters in the district",
      "The second pass kept pointing back to Hays Post, the USD 489 board portal, and the educational background already in the file. I did not find court, property, or archived social sources that changed the profile in a verifiable way",
      "Nothing found. Recommend direct inquiry"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Jayme Goetz.",
    "quotes": [
      {
        "text": "Being a lifelong Hays resident",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I have greatly enjoyed getting involved in all different levels of education.",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I believe in the importance of transparency and clear communication.",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Each decision that comes through the board impacts someone in our community.",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "seen the strides the current board has been taking to have transparency with the community but would like to see more of it.",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "topic": "Transparency:"
      },
      {
        "text": "disgusted and had to stop reading after about 300 because of the level of not only ignorance, but immaturity in these responses",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "topic": "Mascot -- Led the Charge to Change HMS to Indians:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a reliable itemized donor table for Goetz. The public record reviewed here supports her biography and board actions, but not a clean contribution ledger.\n\nI did not surface a reliable itemized donor table for Goetz in the sources reviewed for this pass. The public record I found supports her biography and board actions, but not a clean contribution ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/fc95a5ee-b8b3-4d06-b876-7cba2008d1cb",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jayme Goetz -- Ballotpedia",
        "url": "https://ballotpedia.org/Jayme_Goetz_(Hays_Unified_School_District_489,_At-large,_Kansas,_candidate_2023",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Final Hays USD 489 seat decided by 3 votes during canvass",
        "url": "https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board squabbles over discipline policy",
        "url": "https://hayspost.com/posts/bc933c79-2f23-4279-8171-bc6dcf391cf0",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FHSU Mathematics Faculty & Staff",
        "url": "https://www.fhsu.edu/macs/faculty-and-staff/",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 BOE votes to change Hays Middle School mascot to Indians",
        "url": "https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "craig-pallister",
    "name": "Craig Pallister",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "education": "Repeatedly emphasizes that special education should be fully funded as \"originally promised,\" which would free up resources for general education or tax relief",
    "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
    "whoTheyAre": "The round-2 sweep reinforces Pallister as a district lifer whose identity is bound up with schools, students, and administration rather than partisan politics. He has the perspective of someone who has seen the district from transportation, building leadership, and board-service angles. No contradictory biographical evidence surfaced.\n\nPallister is a retired USD 489 principal and former assistant principal who has also described starting in the district as a bus driver. His long district tenure makes him easy to verify in the public record.\n\nCraig Pallister is the current USD 489 board member who returned to the board in 2025 after previously serving as vice president and president. The public record identifies him as a retired teacher and principal.\n\nTeacher and assistant principal in USD 443 (early career).",
    "theirRecord": "Pallister continues to frame his board role around retention, recruitment, and practical stewardship. He supports keeping facilities and staffing strong, and his remarks suggest a preference for informed, measured governance rather than fast symbolic moves. The record is consistent with a former administrator who knows the operational consequences of board decisions.\n\nThe second pass kept pointing to Hays Post profiles, the board portal, and the FHSU-related local community article already in the file. I did not uncover court, property, or business records that changed the public profile.\n\nPallister's record is about retention, recruitment, and keeping the system functional as the district completes the bond buildout. In his 2023 profile he said the board needs to keep teacher, administrator, and staff retention a priority. In later coverage he came back to the board with the same eye toward continuity and student experience.\n\nHe also tends to favor steady, operational problem-solving. He supports bond completion, district technology, and budget questions that ask whether spending actually helps student achievement. As a former principal, he sounds like someone who has spent decades living with the consequences of board decisions rather than just reacting to them.",
    "whatYouShouldKnow": [
      "Pallister's board perspective is shaped by decades inside the same district",
      "He started in a transportation role, so he understands the district outside of administration",
      "He keeps coming back to staffing quality and retention",
      "He has 24 years of district leadership experience if you count his principal and assistant principal years",
      "He started in USD 489 as a bus driver, so his history with the district is unusually broad",
      "He says board decisions should protect teacher retention and recruitment",
      "The second pass kept pointing to Hays Post profiles, the board portal, and the FHSU-related local community article already in the file. I did not uncover court, property, or business records that changed the public profile",
      "40+ years in Hays with no public faith references. Recommend direct inquiry"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Craig Pallister.",
    "quotes": [
      {
        "text": "I worked for the school district as a middle school principal for 21 years, an assistant principal for three years prior to that.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "I have just been involved with education all my life.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Everybody in the school district could be on the school board.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "The USD 489 Board of Education needs to continue to make teacher, administrator and staff retention and recruitment a priority.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "a leader in Kansas K-12 education.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "topic": "Bond Supporter:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a reliable itemized donor table for Pallister. The public material reviewed here supports his biography and board positions, but not a donor ledger.\n\nI did not surface a reliable itemized donor table for Pallister in the public records reviewed for this pass. The sources I checked support his biography and board record, but not a clean contribution ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fhsu.Edu",
        "url": "https://www.fhsu.edu/news/2020/05/pizza-kits-and-book-giveaways-set-for-monday-in-downtown-hays",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "SPONSORED: Craig Pallister running for USD 489 school board",
        "url": "https://hayspost.com/posts/94f59897-4370-450a-b4ed-f5ebbf54a523",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ron-wilson",
    "name": "Ron Wilson",
    "party": "NP",
    "position": "USD 489 Superintendent",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "Superintendent",
    "education": "Wilson has publicly advocated for:",
    "campaignWebsite": "https://sentinelksmo.org/choosing-which-crimes-to-prosecute-comes-to-kansas-on-election-bribery/",
    "whoTheyAre": "The second-pass review confirms Wilson as the public-facing executive behind the district's facilities and operations push. He is not a candidate, but his biography matters because every board member's record is filtered through his implementation work. I did not find contradictory biographical material.\n\nWilson is the USD 489 superintendent and the district's top administrator. The board portal and Kansas Educational Directory both support the identity match.\n\nRon Wilson is the superintendent of Hays USD 489. The district's official board portal lists him as superintendent, and the Kansas Educational Directory confirms the same.\n\nWilson served as superintendent in Herington before being hired by USD 489. The Hays school board voted unanimously to offer him a two-year contract in February 2019. While in Herington, his district was one of nine Kansas districts invited to pilot the Mental Health Intervention Team (MHIT) program in 2018 -- a program he has continued to advocate for in Hays.",
    "theirRecord": "Wilson's public record is about execution: bond rollout, facility planning, staffing, and communicating the district's case for better schools. He regularly frames the district's facilities as something that must be improved rather than merely maintained, and his comments help explain the board's broader capital posture.\n\nThe second pass kept returning to the board portal, KSDE directory listing, Hays Post coverage, and the handbook material already in the file. I did not find any church, property, or court source that changed the public profile.\n\nWilson's record is the bond era itself. He has been the public face of Roosevelt and Hays High construction, the district's capital outlay plan, and the ongoing maintenance work that still has to happen after the ribbon cuttings. He has also spoken out when state or federal decisions threaten district funding, including title grant delays and other budget pressures.\n\nBecause he is the superintendent, the board mostly evaluates him through implementation: facility delivery, staffing, budget management, and communications. The public record shows him as a steady advocate for the district's large capital projects and as the person who keeps those projects moving once the board votes.",
    "whatYouShouldKnow": [
      "Wilson is the administrative engine behind the district's major capital projects",
      "His public role is to explain and implement rather than vote",
      "He consistently pushes the district toward better facilities and long-term planning",
      "He is the district superintendent, so he is the top administrator",
      "He is the public face of the bond and facility work",
      "He has pushed the district to build schools that are better than the ones it had",
      "The second pass kept returning to the board portal, KSDE directory listing, Hays Post coverage, and the handbook material already in the file. I did not find any church, property, or court source that changed the public profile",
      "As a superintendent, Wilson may deliberately avoid public faith statements to maintain neutrality. His comment on the dress code controversy was notably secular in framing. Not elected, so less relevant for Elect Righteous. Recommend direct inquiry if desired"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Ron Wilson.",
    "quotes": [
      {
        "text": "We have to stop settling for the schools and facilities that we have, and we need to start building for schools that we deserve.",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Our baseball stadium is probably the best facility we have now. However, in three years, it will go from being our best facility to our worst facility.",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "Hays USD 489 Superintendent Ron Wilson",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      },
      {
        "text": "If 100% of the eligible voters in your building vote before May 10th we will bring lunch for you one day before the end of school...The first building in our district to get 100% also gets dessert with their lunch!",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
        "topic": "RON WILSON -- Superintendent"
      },
      {
        "text": "because it would divert resources from",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
        "topic": "RON WILSON -- Superintendent"
      },
      {
        "text": "difficult and conflict-heavy",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
        "topic": "RON WILSON -- Superintendent"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Not applicable. Wilson is not a candidate in the public materials reviewed here, so there is no campaign-finance ledger to reconstruct.\n\nNot applicable. Wilson is an appointed superintendent, not a candidate running for office in the sources I reviewed.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/53134bbf-3c90-47ed-ae9b-c3d0232bf211",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/4ecf935d-41cb-472c-9754-49c567a9dddc",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Core-docs.S3.Us-east-1.Amazonaws.Com",
        "url": "https://core-docs.s3.us-east-1.amazonaws.com/documents/asset/uploaded_file/1196/USD_489/4733695/HMS_2024-2025_Handbook.pdf",
        "publication": "Core-docs.S3.Us-east-1.Amazonaws.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: USD 489 to revisit dress code",
        "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Guidon Online: School board approves Ron Wilson as superintendent",
        "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
        "publication": "Hayshighguidon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/ron-wilson-96762118a",
        "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "County attorney declines action on Hays superintendent email to staff (KWCH)",
        "url": "https://www.kwch.com/2022/05/26/county-attorney-declines-action-hays-superintendent-email-staff/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Superintendent's email sparks controversy (Hays Daily News)",
        "url": "https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Sentinel analysis",
        "url": "https://sentinelksmo.org/choosing-which-crimes-to-prosecute-comes-to-kansas-on-election-bribery/",
        "publication": "Sentinelksmo.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 BOE debates nepotism again",
        "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "USD 489 Hays: no apparent written plan to improve low proficiency levels (Kansas Sentinel)",
        "url": "https://sentinelksmo.org/usd-489-hays-no-apparent-written-plan-to-improve-low-proficiency-levels/",
        "publication": "Sentinelksmo.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 trending higher on math, English tests",
        "url": "https://hayspost.com/posts/a1ad62ca-72ac-46d4-a3c1-e2248ae736b3",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Trump administration withholds funds from Hays school district",
        "url": "https://hayspost.com/posts/09e13f5d-3612-4ec5-9106-d99396d14ac3",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays High School construction project, restrooms stirs controversy (Kansas Sentinel)",
        "url": "https://sentinelksmo.org/hays-high-school-contstruction-project-restrooms-stirs-controversy/",
        "publication": "Sentinelksmo.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board hears concerns about private bathrooms at new high school",
        "url": "https://hayspost.com/posts/677ac412-2adb-48bd-85f8-bbd5f05bb92f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays School District hires new superintendent (KWCH)",
        "url": "https://www.kwch.com/content/news/Hays-School-District-hires-new-superintendent-505712821.html",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Superintendent contract renewed; Hays board at odds over transparency",
        "url": "https://hayspost.com/posts/ae1e5e6f-c630-4c15-b42e-fa787284525d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 district administrators' contracts extended another year",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 employees receive raises; board members balk at admin pay",
        "url": "https://hayspost.com/posts/1cd56ea1-18ea-4126-aa69-97b826446d03",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Highest Paid Employees (OpenPayrolls)",
        "url": "https://openpayrolls.com/rank/highest-paid-employees/kansas-hays",
        "publication": "Openpayrolls.Com",
        "date": "2026-03-31"
      }
    ]
  }
] as CandidateFull[]),
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
