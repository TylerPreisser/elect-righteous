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
    "whoTheyAre": "Roger Marshall is a Kansas-born physician and U.S. senator who built his public identity around medicine, farm roots, and Great Bend. He was born in El Dorado in 1960, grew up in a fifth-generation Kansas farm family, and finished medical training before moving to Great Bend in 1991. Over a long OB-GYN career, he delivered more than 5,000 babies. Marshall married Laina Marshall more than 40 years ago and they have four children and four grandchildren. His public life is tied closely to Great Bend, where he practiced medicine, served on civic boards, and became active in First Christian Church. He entered politics after decades in medicine and local service, first winning the U.S. House seat in 2016 and then the U.S. Senate in 2020.",
    "theirRecord": "Marshall's Senate record includes a vote against certifying the 2020 presidential election on January 6, 2021, and a public style that has often been combative in national fights over COVID policy, health care, and election issues. He questioned Dr. Anthony Fauci during a Senate hearing, later posting a response that became widely quoted, and introduced the FAUCI Act after that exchange. He also drew attention in March 2025 when he left a town hall in Oakley early and later described the audience as \"paid agitators.\" The same public record shows him arguing for tighter positions on abortion, immigration, and federal spending while serving on Agriculture, Finance, HELP, and Budget committees.",
    "whatYouShouldKnow": [
      "He is a fifth-generation Kansas farm kid from Butler County who moved to Great Bend in 1991",
      "He spent more than 25 years as an OB-GYN before running for Congress",
      "He voted to object to the 2020 election certification on January 6, 2021",
      "He left an Oakley town hall early in 2025 and later said \"paid agitators\" had been present",
      "He has long-standing, public involvement at First Christian Church in Great Bend",
      "His Senate campaign remains one of the best-funded in Kansas politics"
    ],
    "whereTheyWorship": "Marshall's current church is First Christian Church in Great Bend, a Disciples of Christ congregation. The public record shows him serving there as an elder, deacon, board chair, and Sunday school teacher. That church involvement is long-running and public, not incidental.",
    "church": {
      "name": "First Christian Church, Great Bend, KS",
      "denomination": "Christian Church (Disciples of Christ) / Non-denominational",
      "url": "https://www.firstchristianchurchgb.com/",
      "details": "Denomination: Christian Church (Disciples of Christ) / Non-denominational. Church Roles: Elder, Deacon, Board Chairman, Sunday School Teacher (25+ years)."
    },
    "quotes": [
      {
        "text": "I don't wear my faith on my shirt sleeve, but in my heart.",
        "source": "Senator Roger Marshall, n.d., https://www.marshall.senate.gov/about/",
        "date": "2026-03-31",
        "url": "https://www.marshall.senate.gov/about/",
        "topic": "Quotes"
      },
      {
        "text": "I have tried to read the Bible every day since I was 10 years of age, so a lot of the wisdom I've been given comes from reading the Bible.",
        "source": "Senator Roger Marshall, n.d., https://www.marshall.senate.gov/about/",
        "date": "2026-03-31",
        "url": "https://www.marshall.senate.gov/about/",
        "topic": "Quotes"
      },
      {
        "text": "Calling me a moron during a Senate hearing may have alleviated the stress of the least trusted bureaucrat in America, but it didn't take away from the facts. We need the truth Dr. Fauci!",
        "source": "Senator Roger Marshall response on Twitter, January 2022, https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-responds-to-dr-fauci-hot-mic-situation/",
        "date": "2026-03-31",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-responds-to-dr-fauci-hot-mic-situation/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Marshall's public FEC record shows a large incumbent operation. Public summaries and prior filings point to roughly $4.76 million in lifetime receipts and more than $4.07 million cash on hand by the end of 2025, with around $621,400 raised in Q4 2025. His committee is Kansans for Marshall, FEC ID C00576173.",
      "narrative": "Marshall's public FEC record shows a large incumbent operation. Public summaries and prior filings point to roughly $4.76 million in lifetime receipts and more than $4.07 million cash on hand by the end of 2025, with around $621,400 raised in Q4 2025. His committee is Kansans for Marshall, FEC ID C00576173.",
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
      "source": "FEC records and reviewed public reporting"
    },
    "sources": [
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/about/"
      },
      {
        "title": "Kansansformarshall.Com",
        "url": "https://kansansformarshall.com/meet-doc/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00576173/?cycle=2026"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-responds-to-dr-fauci-hot-mic-situation/"
      },
      {
        "title": "Amp.Cnn.Com",
        "url": "https://amp.cnn.com/cnn/2021/05/03/politics/roger-marshall-january-6-cnn-big-lie/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/03/05/marshall-says-paid-agitators-swamped-kansas-forum-if-he-proves-it-ill-eat-a-copy-of-project-2025/"
      },
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
    "whoTheyAre": "Jason Hart is a Wichita Democrat whose public career comes from prosecution, not elected office. He spent years as an Assistant U.S. Attorney, worked on child exploitation and cybercrime cases, and also served with the Shawnee County District Attorney's office and the Kansas Attorney General's office. He later quit his federal job to enter the Senate race in March 2026. Hart's public identity includes his party switches and his family discussion about running. He switched from independent to Republican and then to Democrat in early 2026, and he says the decision to run came after prayerful and tearful conversations with his wife and family. Public sources describe him as Christian, but no denomination or church is documented.",
    "theirRecord": "Hart does not have an elected voting record, so the public trail is mostly his legal work and his campaign launch. His strongest professional credential is more than 20 years in criminal justice, including work on cases involving children and cybercrime. His Senate campaign launched late and immediately drew attention because of the party-switch sequence and his deliberate outreach to Republicans. His campaign also uses a law-and-order frame that tries to make him legible to Kansas voters who are not automatic Democrats. That means the public record is still mostly his biography and campaign statements rather than legislative actions or officeholder decisions.",
    "whatYouShouldKnow": [
      "He is a former federal prosecutor with more than 20 years in criminal justice work",
      "He has no prior elected office",
      "He switched party affiliation twice in one month in early 2026",
      "He says the decision to run came after prayerful conversations with his wife and family",
      "He publicly identifies as Christian, but no current church is documented in cited sources",
      "A clean federal totals summary was not publicly available online"
    ],
    "whereTheyWorship": "Hart publicly self-identifies as Christian, but no denomination or current church affiliation is documented in cited sources. His campaign materials stress faith language and family discussion rather than a named congregation.",
    "quotes": [
      {
        "text": "There are many Republicans who are in the wilderness right now. They are sort of like, 'the Republican Party that I grew up with is not the Republican Party right now,' and they are really struggling with where their place is in the world. And they're looking for someone who is someone they can vote for and not simply vote against.",
        "source": "Kansas Reflector, March 23, 2026, https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "Quotes"
      },
      {
        "text": "I ask people questions for a living, and that's what we need more of, not talking at people. I listen to the experts, and the experts are our Kansas voters, our Kansas constituents, our Kansas communities that can tell us exactly what they need, and then take that and go to D.C. and advocate for them.",
        "source": "Kansas Reflector, March 23, 2026, https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "Quotes"
      },
      {
        "text": "The Alex Pretti killing led to prayerful and tearful discussions with my wife and family before deciding to run.",
        "source": "Kansas Reflector, March 23, 2026, https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No public FEC finance summary available online as of 2026-04-01",
      "narrative": "No clean public federal totals summary was available for Hart. His campaign site and ActBlue page are the main public finance touchpoints so far, which suggests a campaign still building out its reporting footprint.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online yet"
        }
      ],
      "undisclosed": "Hart's first meaningful federal finance report may still be pending the next FEC disclosure window.",
      "reportingPeriod": "through 2026-04-01",
      "source": "FEC search, campaign records, and reviewed public reporting"
    },
    "sources": [
      {
        "title": "Hartforsenate.Com",
        "url": "https://hartforsenate.com/"
      },
      {
        "title": "Secure.Actblue.Com",
        "url": "https://secure.actblue.com/donate/jason-hart"
      },
      {
        "title": "Kmuw.Org",
        "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/"
      },
      {
        "title": "Justice.Gov",
        "url": "https://www.justice.gov/archive/usao/ks/PressReleases/2012/Nov%202012/Nov29a.html"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
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
    "whoTheyAre": "Patrick Schmidt is a Kansas State Senator from the Lawrence-Topeka area and a former U.S. Navy intelligence officer. He was born in Overland Park, earned a degree from Tufts University in 2013, and served on the USS Ronald Reagan, at the Joint Special Operations Task Force in the Arabian Peninsula, and at the Office of Naval Intelligence in Washington, D.C. Schmidt's public identity is rooted in family and service. The public record describes him as married to Megan and coming from six generations of Kansas farmers, miners, and teachers. He entered the Kansas Senate in January 2025 after winning District 19 in 2024, making him the only current elected officeholder in the Democratic Senate field.",
    "theirRecord": "Schmidt's state Senate record is short but visible. He has made property tax relief one of his main issues and broke with his party to support a constitutional amendment that would cap annual property-value increases for tax purposes. He also sponsored Senate Resolution 1706 condemning the pardons and commutations for people involved in the January 6 Capitol attack. His public career before the Senate was military rather than political. He says the January 6 attack helped motivate his move into politics, and his campaign frames him as someone who understands both national security and Kansas governance. That leaves him with a smaller public voting record than more established candidates, but it also gives him a more defined public trail than most of the Democratic field.",
    "whatYouShouldKnow": [
      "He is the only current elected official running in the Democratic Senate primary",
      "He served in Navy intelligence on the USS Ronald Reagan and at the Office of Naval Intelligence",
      "He won his state Senate seat in 2024 and took office in January 2025",
      "He broke with his party on property taxes to support a constitutional amendment",
      "He sponsored SR 1706 condemning January 6 pardons and commutations",
      "His campaign finance trail is public, but it is still much smaller than Roger Marshall's"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Public materials emphasize family values, Kansas roots, and service, but not a specific congregation or denomination.",
    "quotes": [
      {
        "text": "I was close enough to smell the tear gas and bear spray and to see the people violently assaulting law enforcement officers, and I’m really saddened, especially by what we saw last month at the pardons of people that violently attacked law enforcement officers. And I think that it’s a sad day. I think it’s a dangerous day for the country.",
        "source": "Kansas Reflector, 2025-03-03, https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
        "topic": "Quotes"
      },
      {
        "text": "I would love to see real property tax relief for Kansans.",
        "source": "Kansas Reflector, 2025-03-03, https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
        "topic": "Quotes"
      },
      {
        "text": "Patrick will be guided by the family values he learned from his mother, his father, and the generations of Kansans who came before him",
        "source": "campaign about page, n.d., https://patrickforkansas.com/about/ (family-values line)",
        "date": "2026-03-31",
        "url": "https://patrickforkansas.com/about/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
      "narrative": "Schmidt's Kansas Senate filings show a modest but real fundraising trail. His 2024 Kansas Senate report shows $51,967.24 in total contributions and $1,296.50 in in-kind support for the July 2024 period. His January 10, 2025 Kansas Senate report shows $9,450.58 in total contributions for the October 25 to December 31, 2024 period, plus $206.34 in unitemized contributions. A Kansas AFL-CIO expenditure report also lists a $500 contribution to his state Senate campaign.",
      "donors": [
        {
          "name": "PATRICK SCHMIDT FOR SENATE (C00937599)",
          "amount": "Committee on file"
        },
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online yet"
        }
      ],
      "undisclosed": "The FEC confirms the committee exists, but not yet a processed 2025-2026 donor ledger or summary table.",
      "reportingPeriod": "through 2026-04-01",
      "source": "FEC candidate overview S6KS00288 / committee C00937599"
    },
    "sources": [
      {
        "title": "Patrickforkansas.Com",
        "url": "https://patrickforkansas.com/"
      },
      {
        "title": "Patrickforkansas.Com",
        "url": "https://patrickforkansas.com/about/"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/"
      },
      {
        "title": "Kssenatedems.Org",
        "url": "https://www.kssenatedems.org/patrick-schmidt"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00288/?cycle=2026&election_full=true"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/"
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
    "whoTheyAre": "Christy Cauble Davis is a fifth-generation Kansan from Cottonwood Falls who has spent much of her career working on preservation, rural development, and community projects. She graduated from Kansas State University in 1997 and earned a graduate degree from Wichita State University in 1999. Before running for Senate, she worked as a preservation planner, preservation officer, and executive director of Symphony in the Flint Hills. Her most recent public role was Kansas State Director of USDA Rural Development from 2023 to January 2025. In that position, she oversaw more than $1.3 billion of investment in Kansas communities, including housing, hospitals, clinics, nursing homes, and community facilities. She also moved to Chase County in 2013, which anchors the local side of her public identity.",
    "theirRecord": "Davis's federal and state work centers on rural investment and place-based projects. Her USDA role gave her a statewide footprint, because she worked in all 105 Kansas counties and led efforts to reduce red tape in federal programs. Her preservation background also gives her a different kind of public record than most Senate candidates, because she has spent years working on buildings, communities, and rural landscapes rather than elected office. She previously ran for Congress in 2020 and lost the Democratic primary, so she is not a first-time public candidate. Her 2026 Senate campaign is built around service delivery and rural follow-through rather than ideology alone.",
    "whatYouShouldKnow": [
      "She is a fifth-generation Kansan who lives in Cottonwood Falls",
      "She ran Kansas USDA Rural Development and oversaw more than $1.3 billion in state investment",
      "Her work has taken her to all 105 Kansas counties",
      "She has a long background in historic preservation and rural community projects",
      "She ran for Congress in 2020 and lost the Democratic primary",
      "Her campaign faced disclosure-related criticism tied to a late personal financial disclosure filing"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Her public materials talk about rural Kansas, community work, and federal service rather than a specific congregation.",
    "quotes": [
      {
        "text": "Kansans are uniquely equipped to tackle national challenges.",
        "source": "Emporia Gazette, August 19, 2025, https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
        "date": "2026-03-31",
        "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
        "topic": "Quotes"
      },
      {
        "text": "Called Medicaid cuts 'the big abomination of a bill' and said reversing them 'would be a good first step because health care is a significant concern in rural Kansas.'",
        "source": "Kansas Reflector, 2025, https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
        "topic": "Quotes"
      },
      {
        "text": "Wants to create 'a single consolidated program' to provide health care to people under 18, rather than relying on 'a patchwork of options like Medicaid and CHIP.'",
        "source": "Kansas Reflector, Aug. 2025, https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$80,478.96 (FEC coverage: 07/01/2025 to 12/31/2025)",
      "narrative": "The official FEC page shows that CHRISTY DAVIS FOR KANSAS 2026 (C00915934) reported $80,478.96 in receipts, $38,100.53 in disbursements, and $42,378.43 cash on hand for the period from July 1, 2025 through December 31, 2025. Public coverage of her campaign also focused on the NRSC complaint over a late personal financial disclosure filing, so the money story includes both real reported fundraising and a compliance controversy.",
      "donors": [
        {
          "name": "Itemized individual contributions",
          "amount": "$76,528.96"
        },
        {
          "name": "Unitemized individual contributions",
          "amount": "$3,950.00"
        }
      ],
      "undisclosed": "The official FEC summary totals are public, but a full donor-by-donor Schedule A is not summarized here.",
      "reportingPeriod": "through 2025-12-31",
      "source": "FEC candidate overview S6KS00247 / committee C00915934"
    },
    "sources": [
      {
        "title": "Christydavisforkansas.Com",
        "url": "https://www.christydavisforkansas.com/"
      },
      {
        "title": "Christydavisforkansas.Com",
        "url": "https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u"
      },
      {
        "title": "Emporiagazette.Com",
        "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/"
      },
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
    "whoTheyAre": "Sandy Spidel Neumann is a Mission-based Democrat with a long business career and no prior elected office. She was born in Topeka, grew up in Johnson County, earned an economics degree from the University of Chicago, and completed an MBA at Northwestern while working full time. Her professional life spans about 40 years, including 22 years as an Ameriprise executive before retiring in 2025. Her public biography is built around business, family, and financial services rather than legislative office. She entered the race after a long career in the private sector and now presents herself as someone who can bring that background to federal policy questions affecting families, farmers, and retirees.",
    "theirRecord": "Neumann does not have a voting record in public office, so her public record is mostly her business career and the way she talks about policy. Her campaign says Marshall's town hall walkout helped push her into the race, and her platform emphasizes health care costs, farmers, Social Security, Medicare, the VA, and reproductive freedom. Because she has not held elected office, her public paper trail is still developing. What is visible now is a substantial private-sector background, a sizable campaign loan, and a message aimed at affordability and consumer protection.",
    "whatYouShouldKnow": [
      "She is a Mission resident with deep Johnson County roots",
      "She spent 22 years as an Ameriprise executive before retiring in 2025",
      "She has no prior elected office",
      "Her campaign finance filings show meaningful self-funding through a candidate loan",
      "She says Marshall's conduct in office and at his town hall helped motivate her run",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Her public profile emphasizes business experience and policy goals rather than faith language or a named congregation.",
    "quotes": [
      {
        "text": "In Washington, Sandy will bring that same tenacity to lowering costs for families, fighting for farmers, protecting reproductive freedom, defending Social Security, Medicare and the VA, working to make kids safer at school and ensuring every Kansan -- regardless of economic status -- has the same opportunity she fought for.",
        "source": "campaign site, n.d., https://sandyforkansas.com/",
        "date": "2026-03-31",
        "url": "https://sandyforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "We have a very big problem with immigration in our country right now, in the sense that there's a lot of confusion over it.",
        "source": "Kansas Reflector, Aug. 25, 2025, https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "topic": "Quotes"
      },
      {
        "text": "would be a good first step because health care is a significant concern in rural Kansas.",
        "source": "Sandy Spidel Neumann campaign materials",
        "date": "2026-03-31",
        "topic": "Key Quote:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$167,587.11 (FEC coverage: 10/14/2025 to 12/31/2025)",
      "narrative": "Neumann's public FEC summary shows $167,587.11 in receipts, $40,660.59 spent, and $126,926.52 cash on hand through 2025-12-31. The filing also includes a $100,000 candidate loan, which is the clearest public sign of her own financial commitment to the race. Her FEC candidate page is S6KS00262 and the committee page is C00923474.",
      "donors": [
        {
          "name": "Loans made by candidate",
          "amount": "$100,000.00"
        },
        {
          "name": "Itemized individual contributions",
          "amount": "$37,150.00"
        },
        {
          "name": "Unitemized individual contributions",
          "amount": "$26,937.11"
        },
        {
          "name": "Candidate contributions",
          "amount": "$3,500.00"
        }
      ],
      "undisclosed": "The official FEC summary shows a substantial self-loan-backed campaign, even though the full donor-by-donor transactions page is not summarized here.",
      "reportingPeriod": "through 2025-12-31",
      "source": "FEC candidate overview S6KS00262 / committee C00923474"
    },
    "sources": [
      {
        "title": "Sandyforkansas.Com",
        "url": "https://sandyforkansas.com/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00262/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00923474/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/"
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
    "whoTheyAre": "Erik Murray is a Democratic candidate for the U.S. Senate from Kansas City, Kansas. He is a commercial real estate developer and entrepreneur whose public identity is tied to the proposed Midtown Station redevelopment at the former Indian Springs Mall site in Wyandotte County. Public reporting describes that project as a nearly $1 billion mixed-use development with housing, retail, childcare, job-training, transit, and energy components. Murray grew up in Kansas City, Kansas, attended Sumner Academy, and later studied at the University of Southern California, where he met his wife Nicole. After years in California, including roughly a decade in Oakland and San Francisco, he returned to Kansas in 2023. Public materials tie him to Eastside Innovation Kansas, Oak Impact Group in Oakland, and the Indian Springs redevelopment effort in Kansas City, Kansas. He has never held elected office. His campaign presents him as a builder and problem-solver rather than a legislator, and his public message centers on entrepreneurship, small-business costs, economic development, and reconnecting capital investment to community outcomes. Public sources do not identify a current church affiliation.",
    "theirRecord": "Murray's public record is built around business and development work rather than legislative office. The biggest item attached to his name is the Midtown Station / Indian Springs redevelopment project in Kansas City, Kansas. Research in his file describes the plan as a large-scale redevelopment of the former mall site with multi-family housing, single-family homes, townhomes, affordable housing, childcare, retail, grocery, hotel, and infrastructure components. He also spent years in Oakland, California, where he founded Oak Impact Group, a venture-capital and real-estate investment firm that intersected with social-impact investing and helped bring FDIC-insured real-estate lending into parts of the cannabis industry. That California period is part of his public biography because he now frames his return to Kansas as a homecoming and a reason he sees economic development differently. The most visible controversy in his file came from a late-2025 Disruption Lab podcast appearance that was later highlighted by the Washington Free Beacon. In that appearance, Murray said that spending a decade having lunch with Elaine Brown, a former Black Panther leader, changed \"some wiring\" in his brain. His file also notes an NRSC complaint over missing federal disclosure paperwork and says the Indian Springs redevelopment effort had disputes with the Unified Government of Wyandotte County over the project plan.",
    "whatYouShouldKnow": [
      "Murray has never held public office, so his public record is mostly his business history, development work, campaign messaging, and controversies rather than roll-call votes",
      "The centerpiece of his public biography is Midtown Station, a proposed redevelopment of the former Indian Springs Mall site in Kansas City, Kansas, with housing, retail, childcare, job training, a hotel, a grocery store, and a solar microgrid",
      "KSHB reported in March 2026 that Murray and the Unified Government were still far apart on key terms for the Indian Springs deal, including the land price, the project's financing plan, and whether the developer should pay the government's outside-counsel costs before there was an agreement in principle",
      "Murray spent roughly a decade in Oakland and San Francisco before returning to Kansas in 2023, so both his supporters and his critics treat the California period as a major part of his political story",
      "On a late-November 2025 Disruption Lab podcast appearance, Murray said that spending a decade having lunch with former Black Panther leader Elaine Brown would \"change some wiring in your brain.\" The Washington Free Beacon later used that remark to frame him as aligned with Brown's radical politics",
      "Murray told KSHB that the Indian Springs project had already been revised three times and that delay on the solar component could cost the project about $30 million in federal investment tax credits",
      "His campaign says he wants to lower the costs of starting and running small businesses, use Opportunity Zones, and visit all 105 counties on a \"Heart of America Tour\" across Kansas",
      "Official FEC summary data shows Murray raised $124,598.62 from November 23, 2025 through December 31, 2025, spent $15,625.69, and reported $108,972.93 cash on hand with no candidate loans listed in that summary"
    ],
    "whereTheyWorship": "No current church affiliation is documented in cited sources. Public materials note childhood ties to Fellowship Christian Church and schooling at St. Patrick's Catholic School, but that is background information rather than a verified present-day congregation. No current church URL is documented.",
    "quotes": [
      {
        "text": "Politician-created problems, such as tariffs and tax policies that benefit billionaires, are tearing apart the fabric of our communities.",
        "source": "KCUR candidate guide, December 30, 2025, https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "date": "2026-03-31",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "topic": "Quotes"
      },
      {
        "text": "Go spend a decade, you know, having lunch with Elaine Brown, who's one of the original founders of the Black Panther[s]. It'll change some wiring in your brain.",
        "source": "The Disruption Lab podcast, late November 2025, quoted in Washington Free Beacon coverage, https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
        "date": "2026-03-31",
        "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
        "topic": "Quotes"
      },
      {
        "text": "We are pushing for the Unified Government to provide that transparency to the taxpayers about what's really going on here. It bothers me as a community member the amount of public processes that happen behind closed doors.",
        "source": "KSHB, March 2026, https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan",
        "date": "2026-03-31",
        "url": "https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$124,598.62 (FEC coverage: 11/23/2025 to 12/31/2025)",
      "narrative": "The official FEC summary shows ERIK MURRAY FOR KANSAS (C00929240) reported $124,598.62 in receipts, $15,625.69 in disbursements, and $108,972.93 cash on hand for the period ending December 31, 2025. The finance structure was donor-driven rather than self-loan-driven. Public FEC summary data lists $119,800 in itemized individual contributions, $4,798.62 in unitemized contributions, and $0 in candidate loans.",
      "donors": [
        {
          "name": "Itemized individual contributions",
          "amount": "$119,800.00"
        },
        {
          "name": "Unitemized individual contributions",
          "amount": "$4,798.62"
        },
        {
          "name": "Loans made by candidate",
          "amount": "$0.00"
        }
      ],
      "undisclosed": "The official FEC summary totals are clear, but a full donor-by-donor transaction list is not summarized here.",
      "reportingPeriod": "through 2025-12-31",
      "source": "FEC candidate overview S6KS00270 / committee C00929240"
    },
    "sources": [
      {
        "title": "Erikforkansas.Com",
        "url": "https://erikforkansas.com/"
      },
      {
        "title": "Erikforkansas.Com",
        "url": "https://erikforkansas.com/meet-erik/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00270/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00929240/"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/"
      },
      {
        "title": "Sunflowerstatejournal.Com",
        "url": "https://sunflowerstatejournal.com/kck-developer-announces-for-u-s-senate-as-democratic-primary-grows-to-five/"
      },
      {
        "title": "Freebeacon.Com",
        "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/"
      },
      {
        "title": "Afrotech.Com",
        "url": "https://afrotech.com/erik-murray-oakland-impact-group"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/erikmurraysior"
      },
      {
        "title": "Kshb.Com",
        "url": "https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan"
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
    "whoTheyAre": "Anne Parelkar is an Overland Park immigration attorney licensed in Kansas, Arkansas, and Missouri. She was raised in Arkansas, earned a degree from Lyon College in 2005 and a law degree from the University of Arkansas at Little Rock in 2011, and moved to Kansas through marriage. Public sources describe her as married to a first-generation immigrant and the mother of two children. Her professional life is immigration law and legal work for families. The public record does not show prior elected office, which makes her Senate bid a first run for office rather than a return to politics. Her campaign leans heavily on her legal background and on the claim that she has seen immigration-system failures up close.",
    "theirRecord": "Parelkar's public record is mainly her legal practice and the way she talks about immigration and children' health coverage. She says the immigration system is confusing and needs reform, and she wants to replace the current patchwork of children's coverage with a single consolidated program. She also pushes stronger antitrust and consumer-protection rules. She attended Marshall town halls and described concerns about transparency and constituent communication as part of what pushed her to run. The public record also shows that she was named in an NRSC complaint over a late personal financial disclosure filing, which is a procedural issue rather than a policy record.",
    "whatYouShouldKnow": [
      "She is the only immigration attorney in the Democratic Senate field",
      "She is based in Overland Park and competes for the same Johnson County voters as Sandy Spidel Neumann",
      "Her main issues are immigration reform and children's health coverage",
      "She has no prior elected office",
      "The NRSC complaint named her over a late personal financial disclosure filing",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Her public profile centers on immigration law, family life, and children's health care rather than faith language or a named congregation.",
    "quotes": [
      {
        "text": "We have a very big problem with immigration in our country right now, in the sense that there's a lot of confusion over it.",
        "source": "Kansas Reflector, August 25, 2025, https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "topic": "Quotes"
      },
      {
        "text": "answer to the people. Not to party leaders. Not to political donors. Just to the people.",
        "source": "campaign site, n.d., https://www.anneforkansas.com/",
        "date": "2026-03-31",
        "url": "https://www.anneforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "We have a very big problem with immigration in our country right now.",
        "source": "Kansas Reflector, 2025-08-25, https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$16,982.00 (FEC coverage: 03/03/2025 to 12/31/2025)",
      "narrative": "Parelkar's public FEC summary shows $16,982.00 in receipts, $16,478.89 spent, and $503.11 cash on hand through 2025-12-31. Candidate loans totaled $4,500, and her committee page is C00913293. That gives her a small but visible financial footprint, though it remains much smaller than the major statewide candidates.",
      "donors": [
        {
          "name": "Itemized individual contributions",
          "amount": "$8,876.00"
        },
        {
          "name": "Unitemized individual contributions",
          "amount": "$3,606.00"
        },
        {
          "name": "Loans made by candidate",
          "amount": "$4,500.00"
        }
      ],
      "undisclosed": "The FEC summary totals and candidate-loan figure are public, but a full donor-by-donor transaction table is not summarized here.",
      "reportingPeriod": "through 2025-12-31",
      "source": "FEC candidate overview S6KS00239 / committee C00913293"
    },
    "sources": [
      {
        "title": "Anneforkansas.Com",
        "url": "https://www.anneforkansas.com/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00239/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00913293/?cycle=2026"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/"
      },
      {
        "title": "1350kman.Com",
        "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Anne_Parelkar"
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
    "whoTheyAre": "Michael Soetaert is a Wellington-based Kansas Senate candidate who grew up in Spring Hill and now lives in south-central Kansas. He is a former Republican, a former Wellington city council member, and the first openly gay person to run for U.S. Senate in Kansas. Public sources also describe him as a serial candidate who has run for several offices under different party labels. His personal background is unusually public in some ways and thin in others. The record says he was given up for adoption into a Roman Catholic family and that he publicly identifies as Christian, but no current church affiliation is documented in cited sources. His campaign site is built on a free Canva page, which tells you a lot about the scale of the operation.",
    "theirRecord": "Soetaert's public record is mostly a trail of candidacies and issue changes. He ran in the 2020 Republican primary for Kansas's 1st Congressional District, served briefly on the Wellington City Council, and then moved into the Democratic Senate race. His public issue positions changed on abortion after the 2022 referendum, and he also backed the Respect for Marriage Act. That means his visible public life is less about elected-office accomplishments and more about political evolution and identity. He is a notable figure in Kansas politics because of his candidacy history and his place in the public conversation about abortion, marriage, and LGBTQ representation.",
    "whatYouShouldKnow": [
      "He is the first openly gay candidate to run for U.S. Senate in Kansas",
      "He ran in the 2020 Republican primary for Kansas's 1st Congressional District, served briefly on the Wellington City Council, and then switched from Republican to Democrat after the pandemic, Jan. 6, and LGBTQ issues pushed him out of the GOP",
      "His public trail includes a brief Wellington City Council stint, but not a long record of state or federal office",
      "His campaign website is a free Canva page, which suggests a very small budget operation",
      "He publicly identifies as Christian, but no current church is documented in cited sources",
      "The public finance trail is thin and does not yet show a clean totals summary"
    ],
    "whereTheyWorship": "Public sources describe Soetaert as Christian and note a Roman Catholic adoptive-family background, but no current church affiliation is documented. His public materials do not identify a congregation or denomination.",
    "quotes": [
      {
        "text": "If I had to choose between your vote and your health and safety, this is easy. I pick your health and safety. I would love to represent you and the great state of Kansas in the U.S. Senate. However, I’m not willing to walk over your body bag, coffin or funereal urn to do so.",
        "source": "The Iola Register, 2022-07-28, https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "date": "2026-03-31",
        "url": "https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "topic": "Quotes"
      },
      {
        "text": "It really is an online campaign, a pandemic campaign, and I don’t see that changing between now and November.",
        "source": "The Iola Register, 2022-07-28, https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "date": "2026-03-31",
        "url": "https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "topic": "Quotes"
      },
      {
        "text": "No. 1, the mismanagement of the pandemic under the Republican party was in and of itself reason enough to go home to the Democratic party.",
        "source": "The Iola Register, 2022-07-28, https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "date": "2026-03-31",
        "url": "https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
      "narrative": "Soetaert has an FEC candidate page, but the accessible public summary did not surface a clean 2025-2026 totals display. The main public finance touchpoints are his FEC filing, his ActBlue page, and the low-cost Canva campaign site. That points to a very lean operation rather than a fully built statewide fundraising machine.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online yet"
        }
      ],
      "undisclosed": "Older federal runs exist in the record, but the current Senate-cycle summary page does not yet show 2025-2026 finance data.",
      "reportingPeriod": "through 2026-04-01",
      "source": "FEC candidate overview S2KS00097"
    },
    "sources": [
      {
        "title": "Mikeforkansas.My.Canva.Site",
        "url": "https://mikeforkansas.my.canva.site/"
      },
      {
        "title": "Secure.Actblue.Com",
        "url": "https://secure.actblue.com/donate/michael-soetaert"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S2KS00097/"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Michael_Soetaert"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
      },
      {
        "title": "Cityofwellington.Net",
        "url": "https://www.cityofwellington.net/newsview.aspx?nid=6940"
      },
      {
        "title": "Kake.Com",
        "url": "https://www.kake.com/kansas-senate-candidate-shows-support-for-respect-for-marriage-act/article_7d6721ed-79ed-52f2-8765-2e521ef88df5.html"
      },
      {
        "title": "Iolaregister.Com",
        "url": "https://www.iolaregister.com/news/candidate-eschews-in-person-campaign"
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
    "whoTheyAre": "Chase LaPorte is a Kansas Republican primary challenger to Roger Marshall who was born in Carthage, Missouri and served in the U.S. Army from 2005 to 2013. He later earned an associate degree from Cowley County Community College in 2017 and works as a business administrator. Public sources also list him with community ties to the Shriners, American Legion, and VFW. His public campaign trail is limited compared with the major statewide candidates. The Senate race exists alongside other campaign efforts, including a gubernatorial web presence, but the public record in the Senate race itself is mostly limited to a short biography and a few issue statements.",
    "theirRecord": "LaPorte has no elected office record. His campaign positions are limited to a small-government message, including reduced spending, inflation concerns, term limits, and a stronger National Guard presence. He appears in the race as a challenger with a very small public footprint rather than as a candidate with a long record in Kansas government. The reporting trail also shows that his web presence is not Senate-specific, since the campaign site that surfaced in the research is a gubernatorial page rather than a dedicated Senate site. That leaves the Senate race with little more than a basic public footprint rather than a fully built campaign archive.",
    "whatYouShouldKnow": [
      "He is a U.S. Army veteran with eight years of active-duty service",
      "He earned an associate degree from Cowley County Community College in 2017",
      "His campaign materials emphasize spending cuts, term limits, and a strong National Guard presence",
      "He has no elected office record",
      "The Senate race does not appear to have a dedicated, well-developed campaign website",
      "Public finance records show small donations, but no clean totals were surfaced in the accessible text"
    ],
    "whereTheyWorship": "No public church or faith affiliation is documented in cited sources. The public record does not show a current congregation or denomination.",
    "quotes": [
      {
        "text": "God's word directs us to protect unborn and innocent.",
        "source": "OnTheIssues Kansas archive, accessed 2026-04-01, https://www.ontheissues.org/Archive_KS.htm",
        "date": "2026-03-31",
        "url": "https://www.ontheissues.org/Archive_KS.htm",
        "topic": "Quotes"
      },
      {
        "text": "I believe in the Biblical standard for marriage.",
        "source": "OnTheIssues Kansas archive, accessed 2026-04-01, https://www.ontheissues.org/Archive_KS.htm",
        "date": "2026-03-31",
        "url": "https://www.ontheissues.org/Archive_KS.htm",
        "topic": "Quotes"
      },
      {
        "text": "Kansas schools are inadequately staffed and under-funded.",
        "source": "OnTheIssues Kansas archive, accessed 2026-04-01, https://www.ontheissues.org/Archive_KS.htm",
        "date": "2026-03-31",
        "url": "https://www.ontheissues.org/Archive_KS.htm",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
      "narrative": "LaPorte has an FEC candidate page and a filing PDF, but the accessible FEC summary did not show a clean 2025-2026 totals display. A Kansas ethics report snippet surfaced itemized contributions including Ty Masterson at $2,500 plus several smaller donors such as Carri Person, Joy Eakins, Kristina Smith, Nancy Moneymaker, TerriLois Todd, Steve Roberts, Brittany Jones, Randy Ross, Chase LaPorte, and Carolyn Keller. No full total was surfaced in the accessible text.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online yet"
        }
      ],
      "undisclosed": "The candidate page exists, but the FEC has not yet published a processed 2025-2026 donor ledger or summary table.",
      "reportingPeriod": "through 2026-04-01",
      "source": "FEC candidate overview S6KS00254"
    },
    "sources": [
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS03258/"
      },
      {
        "title": "Docquery.Fec.Gov",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf"
      },
      {
        "title": "Opencampaign.Com",
        "url": "https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Chase_LaPorte"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
      },
      {
        "title": "Ontheissues.Org",
        "url": "https://www.ontheissues.org/Archive_KS.htm"
      },
      {
        "title": "Docquery.Fec.Gov",
        "url": "https://docquery.fec.gov/pdf/488/202306099581781488/202306099581781488.pdf",
        "publication": "Docquery.Fec.Gov",
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
    "whoTheyAre": "Colin McRoberts is the Democratic candidate for Kansas's 1st Congressional District. He is a lawyer, an Associate Teaching Professor of Law at the University of Kansas School of Business, and a consultant whose work is about negotiation and communication analysis. His public biography also includes Harvard Law School and earlier commercial litigation work. McRoberts lives in Lawrence and built his campaign after attending Roger Marshall's town hall in Oakley. He says that event convinced him the district needed another candidate willing to talk about policy, negotiation, and the east-west split in Kansas instead of just repeating partisan talking points. His public material also notes that he teaches business law, business fundamentals, and a course on the origin and spread of conspiracy theories. That combination of legal training, classroom work, and consulting is the clearest way to understand how he presents himself in public life.",
    "theirRecord": "McRoberts does not have a prior elected office record, so his public record is mostly the campaign itself, his university role, and his professional background. He is running as a first-time candidate in a district that has voted Republican for decades, and he has made the case that the race should be about how people communicate and negotiate across regional differences. His campaign launch and later interviews put a lot of weight on that theme. He describes himself as a businessman and negotiator rather than a conventional politician, and he has tied the race to the idea that Kansans in different parts of the 1st District share more in common than national politics suggests. The public record also shows a small federal finance profile. His FEC filing had enough activity to keep the campaign viable, but it remains much smaller than the better-funded statewide and congressional campaigns in the race.",
    "whatYouShouldKnow": [
      "He is a Harvard Law graduate who teaches law at the University of Kansas School of Business",
      "He built his campaign after attending Roger Marshall's Oakley town hall",
      "His public message emphasizes negotiation, communication, and the need for eastern and western Kansas to talk to each other",
      "He does not have prior elected-office experience",
      "His FEC receipts were small compared with the major statewide races",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation, and no confirmed congregation name or church URL is tied to McRoberts.",
    "quotes": [
      {
        "text": "The long odds are exactly why this fight is so important. Gerrymandering and partisanship have kept our incumbent politicians safe even as they give up on representing Kansans in order to serve national donors and powerbrokers. This campaign is about giving Kansans the power to choose a better deal.",
        "source": "Colin McRoberts campaign launch, September 17, 2025, https://colinforkansas.com/ and https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "I think that's been going on for a long time, an intentional strategy to use the east against the west, and maybe to a lesser extent, the west against the east, to drive these wedges for the benefit of party politics. And I will not and cannot play that game. We're all neighbors. The 1st District is much more alike than it is different.",
        "source": "Kansas Reflector, January 5, 2026, https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "topic": "Quotes"
      },
      {
        "text": "The first district is red in a red state. This is not going to be an easy race, it's not going to be a cheap race, it's not going to be a short race, but it's possible to win in a way it hasn't been before.",
        "source": "Hays Post / Kansas Democracy Fest, 2026, https://www.hayspost.com/",
        "date": "2026-03-31",
        "url": "https://www.hayspost.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$24,699.29 (Jul.-Dec. 2025)",
      "narrative": "McRoberts's public FEC summary showed $24,699.29 in receipts, $17,243.10 spent, and $7,456.19 cash on hand through 2025-12-31. The itemized mix was mostly individual contributions, with $19,130.00 in itemized individual donations and $338.00 in candidate contributions. That is a small federal campaign by Kansas congressional standards, but it is enough to show an active filing and a active campaign committee. No richer donor ledger was publicly available beyond the FEC summary.",
      "donors": [
        {
          "name": "Itemized individual contributions",
          "amount": "$19,130.00"
        },
        {
          "name": "Unitemized individual contributions",
          "amount": "$4,912.00"
        },
        {
          "name": "Candidate contributions",
          "amount": "$338.00"
        }
      ],
      "undisclosed": "The committee is clearly active, but a full donor-by-donor FEC transactions table is not summarized here.",
      "reportingPeriod": "Jul.-Dec. 2025",
      "source": "FEC candidate overview H6KS01195 / committee C00919860"
    },
    "sources": [
      {
        "title": "Kwch.Com",
        "url": "https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://www.hayspost.com/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS01195/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00919860/"
      },
      {
        "title": "Colinforkansas.Com",
        "url": "https://colinforkansas.com/"
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
    "whoTheyAre": "Lauren Reinhold is a Democratic candidate in Kansas's 1st Congressional District. She is an attorney with 28 years of legal experience and previously worked for the Social Security Administration, where she handled disability cases and administrative law. Her campaign origin story is tied to the DOGE federal workforce reduction effort. She has said she was working at the Social Security Administration when the DOGE push to get employees to quit arrived, and she turned that experience into a congressional campaign. She is also a former federal union officer, which gives her a public-service background that is separate from elective politics. The public record describes her as Christian, but no specific church or denomination is documented. That is the limit of cited sources on faith.",
    "theirRecord": "Reinhold's record is mostly professional and campaign-driven rather than legislative. She spent years in legal practice, then moved into federal service, and her campaign now centers on defending government services and the people who use them. Her campaign framing is consistent across the sources: she says the federal government should work for ordinary people, not treat them as a problem to be managed. That is the through-line of her public comments, her campaign launch, and her media appearances. She entered the race after McRoberts and appears to have a lighter campaign infrastructure. The record available online shows a serious contender, but not one with the same volume of public material as the better-known statewide candidates.",
    "whatYouShouldKnow": [
      "She is a lawyer and former Social Security Administration employee",
      "The DOGE federal layoffs were the trigger for her campaign",
      "She worked on disability and administrative-law matters in federal service",
      "She is described in public records as Christian, but no church was verified",
      "Her campaign entered later than Colin McRoberts's and has less visible infrastructure",
      "No donor-by-donor finance ledger surfaced in the accessible FEC summary"
    ],
    "whereTheyWorship": "Public sources describe Reinhold as Christian, but no current church name or church URL is documented.",
    "quotes": [
      {
        "text": "I was a proud public servant. When DOGE pushed hardworking employees like me out the door, I decided if Washington won't fight for people, then I will.",
        "source": "Kansas Reflector, January 5, 2026, https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "topic": "Quotes"
      },
      {
        "text": "I could run for Congress and try to fight this mess they've made of the federal government. Fight back and restore what the American people need.",
        "source": "Kansas Reflector, January 5, 2026, https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "topic": "Quotes"
      },
      {
        "text": "It's not about me. It's not about, oh, poor Lauren lost her job to DOGE. That's going to be part of the campaign, but I really care that the American people get the government they deserve, that we get the governmental services we need and deserve to make our lives better, and I feel so passionate about that.",
        "source": "Kansas Reflector, January 5, 2026, https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
      "narrative": "The accessible FEC summary showed the filing but did not surface a clean 2025-2026 total in the material I reviewed. I also did not find a donor-by-donor ledger in the accessible summary view. That means the honest description here is simple: campaign finance data exists at the federal level, but the public summary I could read was too thin to reconstruct a reliable money trail from it.",
      "donors": [
        {
          "name": "LAUREN REINHOLD FOR KANSAS (C00932855)",
          "amount": "Committee on file"
        },
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online yet"
        }
      ],
      "undisclosed": "The FEC confirms a committee exists, but not yet a processed donor ledger or topline receipts summary for 2025-2026.",
      "reportingPeriod": "through 2026-04-01",
      "source": "FEC candidate overview H6KS01203 / committee C00932855"
    },
    "sources": [
      {
        "title": "Laurenforkansas.Com",
        "url": "https://www.laurenforkansas.com/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS01203/?cycle=2026&election_full=true"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00932855/"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/laurenreinhold/"
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
    "whoTheyAre": "Craig Musser is the United Kansas Party candidate for Kansas's 1st Congressional District. He works as Manager of Environment, Health, and Safety at PureField Ingredients in Russell and lives near Ellinwood in Barton County. Musser filed with the FEC on February 14, 2026. He is running under the United Kansas Party label, a new third party that positions itself as a cross-partisan alternative rather than as a standard Republican or Democratic operation. His public identity is rooted in industrial work, safety management, and rural Kansas geography. The public record shows a candidate who is trying to speak from the working side of the district rather than from a party institution.",
    "theirRecord": "Musser has no prior elected-office record in the accessible material. His campaign record is the story: a late-filed general-election candidacy under a new party label, aimed at voters who want a different sort of Kansas politics. His public statements emphasize service, practicality, and outcomes. He frames governance as listening and delivering rather than following ideology for its own sake. The available record also shows a campaign with limited infrastructure. He has a website and a filing, but not the kind of donor base or media presence that comes with a mature congressional operation.",
    "whatYouShouldKnow": [
      "He lives near Ellinwood, in the rural core of KS-01",
      "He works in industrial safety and environmental health at PureField Ingredients",
      "He filed for Congress on February 14, 2026",
      "He is running under the new United Kansas Party label",
      "Public sources do not identify a current church affiliation",
      "No substantive fundraising data surfaced in cited sources"
    ],
    "whereTheyWorship": "No public church affiliation is documented, and no confirmed congregation name or church URL is tied to Musser.",
    "quotes": [
      {
        "text": "Kansans deserve a representative who serves them -- not donors, party bosses or Washington insiders.",
        "source": "MusserforUsCongress.com, accessed April 1, 2026, https://musserforuscongress.com/",
        "date": "2026-03-31",
        "url": "https://musserforuscongress.com/",
        "topic": "Quotes"
      },
      {
        "text": "Effective governance is not about ideology -- it's about listening and delivering outcomes.",
        "source": "MusserforUsCongress.com, accessed April 1, 2026, https://musserforuscongress.com/",
        "date": "2026-03-31",
        "url": "https://musserforuscongress.com/",
        "topic": "Quotes"
      },
      {
        "text": "The long odds are exactly why this fight is so important.",
        "source": "Hays Post, 2026, https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
      "narrative": "No substantive fundraising data is available in the public record. The FEC filing exists, but no reliable total, donor ledger, or cash-on-hand figure was available online to summarize confidently. The clearest finance statement here is simply that the campaign appears to be very small and early stage, with limited public fundraising visibility.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online yet"
        }
      ],
      "undisclosed": "The official candidate page exists, but the FEC is not yet showing a usable finance summary or donor ledger for this cycle.",
      "reportingPeriod": "through 2026-04-01",
      "source": "FEC candidate overview H6KS01211"
    },
    "sources": [
      {
        "title": "Musserforuscongress.Com",
        "url": "https://musserforuscongress.com/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS01211/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7"
      },
      {
        "title": "Unitedkansas.Com",
        "url": "https://unitedkansas.com/"
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
    "whoTheyAre": "Scott Schwab is the Kansas Secretary of State and a Republican candidate for governor. He was born in Great Bend on July 9, 1972, graduated from Emporia State University, and represented House District 49 in the Kansas House from 2003 to 2006 and again from 2009 to 2019. He and his wife Michele live in the Kansas City area, and his campaign and public biography identify him as a Christian. Schwab's public record and campaign messaging both draw heavily on his background as a small-business owner and election administrator. He has spent years in statewide office, which means he is already a familiar figure in Kansas politics rather than a new entrant trying to build a name from scratch.",
    "theirRecord": "Schwab has served as Secretary of State since 2019, so his record centers on election administration, business filing systems, and state records. His campaign and office biographies say he championed election integrity legislation, including voter ID, and he publicly rejected claims that the 2020 election was stolen. He has also presented himself as someone focused on keeping election authority close to Kansas voters and county election officials. His record also includes several public disputes. Kansas courts and advocacy groups challenged his handling of records requests, and he was tied to the League of Women Voters v. Schwab litigation. He also drew attention in 2024 after USPS ballot-mishandling concerns and has been a prominent conservative voice on abortion and property taxes during the 2026 governor race.",
    "whatYouShouldKnow": [
      "Schwab is the sitting Kansas Secretary of State, so his campaign starts from an existing statewide office rather than a local or legislative base",
      "He spent more than a decade in the Kansas House before moving into statewide office",
      "He publicly rejected the claim that the 2020 election was stolen, which separates him from the election-denial wing of Kansas politics",
      "His public faith identity is part of his campaign story, and public sources point to LifeMission Church in Olathe",
      "His 2025 year-end campaign filing shows $1,418,671.56 raised, with $1,045,000 of that reflected as personal loans and about $1.05 million cash on hand",
      "The donor list is real but not broad compared with the loan amount, with smaller contributions from named donors such as Jenni Prochnow, Frankie Giudicessi, Michael Rader, Jeanette Prenger, Julie Mirray, Kent Needham, Tim Garvey, and Roger Mason",
      "His record includes both election-management accomplishments and controversies over records compliance and ballot handling"
    ],
    "whereTheyWorship": "Public sources identify Schwab as Christian and tie him to LifeMission Church in Olathe, with the church website listed as https://www.lifemission.church/. No separate staff bio or denominational statement is publicly documented beyond those references.",
    "church": {
      "name": "LifeMission Church, Olathe, KS",
      "denomination": "Non-denominational",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "details": "Denomination: Non-denominational. Church Address: 16111 S Lone Elm Rd, Olathe, KS."
    },
    "quotes": [
      {
        "text": "We use a mix of laws, regulations, and internal reforms to deliver better service, protect election integrity, modernize the agency, and run government more efficiently.",
        "source": "Kansas Secretary of State press release, 2026-01-07, https://sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
        "date": "2026-03-31",
        "url": "https://sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
        "topic": "Quotes"
      },
      {
        "text": "There are people who try to make money off conspiracy theories - it's nothing new.",
        "source": "Associated Press, 2025-01-08, https://apnews.com/article/4587939711dc7a5effb1879374405147",
        "date": "2026-03-31",
        "url": "https://apnews.com/article/4587939711dc7a5effb1879374405147",
        "topic": "Quotes"
      },
      {
        "text": "Good government isn’t about how much government does. It’s about making smart, practical improvements that save money and serve Kansans better.",
        "source": "Kansas Secretary of State press release, 2026-01-07, https://sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
        "date": "2026-03-31",
        "url": "https://sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$1,418,672 (2025 year-end)",
      "narrative": "Schwab's 2025 year-end report shows $1,418,671.56 raised, $365,533.06 spent, and $1,053,138.50 cash on hand. The biggest number in the filing is $1,045,000 in other transactions, which the research notes as personal loans, so the race is heavily self-financed. The itemized donor list is real but secondary to the loan amount. The named contributors visible in the filing are mostly smaller gifts, which means the campaign has money on hand, but not from a broad donor base.",
      "donors": [
        {
          "name": "Scott Schwab (self-funded loans)",
          "amount": "$1,045,000"
        },
        {
          "name": "Jenni Prochnow",
          "amount": "$4,000"
        },
        {
          "name": "Frankie Giudicessi",
          "amount": "$4,000"
        },
        {
          "name": "Michael Rader",
          "amount": "$2,000"
        },
        {
          "name": "Jeanette Prenger",
          "amount": "$2,000"
        },
        {
          "name": "Julie Mirray",
          "amount": "$2,000"
        },
        {
          "name": "Kent Needham",
          "amount": "$500"
        },
        {
          "name": "Tim Garvey",
          "amount": "$500"
        }
      ],
      "undisclosed": "Full line-item donor detail remains in the Kansas ethics filing PDF and itemized-contributions database.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing SW01SS_202601 and Kansas Reflector"
    },
    "sources": [
      {
        "title": "Scottschwab.Com",
        "url": "https://scottschwab.com/"
      },
      {
        "title": "Sos.Ks.Gov",
        "url": "https://www.sos.ks.gov/about/schwab-biography.html"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SS_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Apnews.Com",
        "url": "https://apnews.com/article/4587939711dc7a5effb1879374405147"
      },
      {
        "title": "Christianpost.Com",
        "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html"
      },
      {
        "title": "Lifemission.Church",
        "url": "https://www.lifemission.church/"
      },
      {
        "title": "Sos.Ks.Gov",
        "url": "https://sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html"
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
        "title": "FOX 4: At funeral for his son",
        "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
        "publication": "Fox4kc.Com",
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
    "whoTheyAre": "Vicki Schmidt is Kansas Insurance Commissioner and a 2026 Republican candidate for governor. She was born and raised in Wichita, graduated from KU's School of Pharmacy, and spent decades working as a local pharmacist before moving into statewide politics. She is the first pharmacist to hold statewide elected office in Kansas. Schmidt and her husband Mike have been married for more than 50 years and have two sons and four grandchildren. Her public image emphasizes health care, consumer protection, and competence rather than the kind of combative ideological branding that marks some of the other Republicans in the field.",
    "theirRecord": "As insurance commissioner, Schmidt has been the face of Kansas insurance regulation and consumer complaints. Her office and campaign materials repeatedly point to the money she says has been returned to Kansans, and that consumer-recovery story is central to her pitch for governor. As a state senator, she pushed autism coverage and cancer-care access. In the governor race, she is trying to translate that record into a broader argument that she understands health care, regulation, and the mechanics of statewide administration better than a typical partisan politician.",
    "whatYouShouldKnow": [
      "Schmidt enters the governor race with statewide executive experience already on her résumé",
      "Her public brand leans on health care, consumer protection, and practical management",
      "Her 2025 filing showed $980,372.71 raised and $928,161.36 cash on hand",
      "She is one of the few women in the Republican gubernatorial field",
      "No current church or parish affiliation is documented in public sources"
    ],
    "whereTheyWorship": "Public campaign language references faith, but no current church or parish membership page is publicly documented. No church website was confirmed in cited sources.",
    "quotes": [
      {
        "text": "It's time Kansans have a governor that works as hard as they do.",
        "source": "Vicki Schmidt campaign homepage, 2026-04-01, https://vickiforgovernor.com/",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "Quotes"
      },
      {
        "text": "As a working mom and state employee, Vicki found errors in the Kansas Medical Assistance Program that were costing the state millions of dollars. She implemented a plan to make the state more efficient and it resulted in more than $391 million in recouped dollars for the state.",
        "source": "Vicki Schmidt campaign homepage, 2026-04-01, https://vickiforgovernor.com/",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "Quotes"
      },
      {
        "text": "As Insurance Commissioner, Vicki has returned over $206 million and counting to Kansas families and lowered the cost of doing business by over $96 million.",
        "source": "Vicki Schmidt campaign homepage, 2026-04-01, https://vickiforgovernor.com/",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$980,372.71 (2025 year-end)",
      "narrative": "Schmidt's 2025 year-end filing shows $980,372.71 raised, $52,211.35 spent, and $928,161.36 cash on hand. The accessible donor list includes Jeanette Elder, David Pope, James Daniel, Steven Steele, David Kerr, Lisa Stubbs, Robert Regnier, Thomas Blackburn, and Strategic Partners International LLC.",
      "donors": [
        {
          "name": "Jeanette Elder",
          "amount": "$25"
        },
        {
          "name": "David Pope",
          "amount": "$50"
        },
        {
          "name": "James Daniel",
          "amount": "$75"
        },
        {
          "name": "Steven Steele",
          "amount": "$100"
        },
        {
          "name": "David Kerr",
          "amount": "$250"
        },
        {
          "name": "Lisa Stubbs",
          "amount": "$250"
        },
        {
          "name": "Robert Regnier",
          "amount": "$500"
        },
        {
          "name": "Thomas Blackburn",
          "amount": "$500"
        },
        {
          "name": "Strategic Partners International LLC",
          "amount": "$1,000"
        }
      ],
      "undisclosed": "The filing shows a much larger donor universe than the small sample extracted here, including major out-of-state participation.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and statewide campaign-finance reporting"
    },
    "sources": [
      {
        "title": "Vickiforgovernor.Com",
        "url": "https://vickiforgovernor.com/"
      },
      {
        "title": "Vickischmidt.Org",
        "url": "https://vickischmidt.org/meet-vicki/"
      },
      {
        "title": "Tkmagazine.Com",
        "url": "https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt"
      },
      {
        "title": "Insurance.Kansas.Gov",
        "url": "https://insurance.kansas.gov/about-us/"
      },
      {
        "title": "Facebook.Com",
        "url": "https://www.facebook.com/VickiSchmidtKS"
      },
      {
        "title": "X.Com",
        "url": "https://x.com/VickiSchmidtKS"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01VS_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
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
    "whoTheyAre": "Ty Masterson is the Kansas Senate President and a Republican candidate for governor. He has represented Senate District 16 since 2009, and before that he served on the Andover City Council. His public biography also places him in Wichita-area business and civic life, including his role as executive director of GoCreate at Wichita State University. Masterson's family and faith life are part of his public record. Public materials identify NewSpring Church in Wichita as his church, and his campaign biography says his family attends there. He is married and has been a visible figure in Kansas Republican politics for years, especially through legislative leadership.",
    "theirRecord": "Masterson's record is primarily legislative leadership. He has been a central figure in the Kansas Senate, where he has guided Republican priorities on taxes, regulation, education, and social issues. Public coverage also ties him to a push for judicial selection changes and other structural reforms, which makes his record more about institutional power than about a single signature bill. His campaign materials and public statements are explicit about ideology. He frames himself around conservative identity, faith, and the idea that Kansas government should be more aggressive on security, spending, and cultural issues. That record matters because he is not running as a new face; he is running as one of the people who has already helped set the agenda.",
    "whatYouShouldKnow": [
      "Masterson is the Kansas Senate President, so he is already one of the most powerful people in state government",
      "He has served in the Senate since 2009 and previously served on the Andover City Council",
      "Public sources identify NewSpring Church in Wichita as his church, and the church website is public",
      "His campaign site says he wants tax cuts, smaller government, and a hard line against what it calls the woke agenda",
      "His 2025 year-end filing shows $695,998.16 raised, $8,476.06 spent, and $687,522.10 cash on hand",
      "The filing includes several large individual or LLC contributions, including David Murfm, Janet Murfm, SHAMAN BOTANICALS LLC, Rick Kloos, Pennie Kloos, and Brad Starnes"
    ],
    "whereTheyWorship": "Public sources tie Masterson to NewSpring Church in Wichita and list https://www.newspring.org/ as the church website.",
    "church": {
      "name": "NewSpring Church, Wichita, KS",
      "denomination": "Non-denominational / Independent",
      "details": "Denomination: Non-denominational / Independent. Church Address: 12200 East 21st Street North, Wichita, KS."
    },
    "quotes": [
      {
        "text": "Born and raised in Butler County, Ty learned Kansas values early - live your faith, stand by your family, work hard, and if you're not willing to do something about it, don't waste time complaining.",
        "source": "Ty Masterson for Governor, 2026-04-01, https://www.mastersonforgovernor.com/services",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/services",
        "topic": "Quotes"
      },
      {
        "text": "I’m running for governor to take back Kansas from politicians like Laura Kelly who have hiked our taxes, padded the woke agenda, and left our schools and communities behind. Let’s get to work.",
        "source": "Ty Masterson for Governor, 2026-04-01, https://www.mastersonforgovernor.com/services",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/services",
        "topic": "Quotes"
      },
      {
        "text": "As President of the Kansas Senate, Ty has led the fight to get Kansas back on track. He championed a $2 billion tax cut for Kansas families.",
        "source": "Ty Masterson for Governor, 2026-04-01, https://www.mastersonforgovernor.com/services",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/services",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$695,998.16 (2025 year-end)",
      "narrative": "Masterson's 2025 year-end report shows $695,998.16 raised, only $8,476.06 spent, and $687,522.10 cash on hand. That means the campaign entered the 2026 race with a large cushion and very little money burned through. The donor pattern is concentrated near the top, with several $4,000 and $1,000 contributions visible in the filing and relatively few small-dollar gifts.",
      "donors": [
        {
          "name": "David Murfm",
          "amount": "$4,000"
        },
        {
          "name": "Janet Murfm",
          "amount": "$4,000"
        },
        {
          "name": "SHAMAN BOTANICALS LLC",
          "amount": "$4,000"
        },
        {
          "name": "Rick Kloos",
          "amount": "$1,000"
        },
        {
          "name": "Pennie Kloos",
          "amount": "$1,000"
        },
        {
          "name": "Brad Starnes",
          "amount": "$104.10"
        }
      ],
      "undisclosed": "Take Back Kansas, the aligned 501(c)(4), remains the major undisclosed-money story around Masterson.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and statewide campaign-finance reporting"
    },
    "sources": [
      {
        "title": "Mastersonforgovernor.Com",
        "url": "https://www.mastersonforgovernor.com/"
      },
      {
        "title": "Senatortymasterson.Com",
        "url": "https://senatortymasterson.com/meet-ty/"
      },
      {
        "title": "Newspring.Org",
        "url": "https://www.newspring.org/"
      },
      {
        "title": "Combatantisemitism.Org",
        "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/"
      },
      {
        "title": "Facebook.Com",
        "url": "https://www.facebook.com/TyMastersonKansas"
      },
      {
        "title": "Twitter.Com",
        "url": "https://twitter.com/TyMastersonKS"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01TM_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Mastersonforgovernor.Com",
        "url": "https://www.mastersonforgovernor.com/services"
      },
      {
        "title": "Apnews.Com",
        "url": "https://apnews.com/article/c465aadcc7c53c6c274f790928fc6208",
        "publication": "Apnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CSG Midwest Profile: Ty Masterson",
        "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
        "publication": "Csgmidwest.Org",
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
    "whoTheyAre": "Jeff Colyer is a physician, surgeon, and former governor of Kansas who is running again for governor as a Republican. He grew up in Hays, earned his medical degree and practiced as a surgeon, and has long presented himself as a fifth-generation Kansan with a strong connection to western Kansas. He is married to Ruth Gutierrez Colyer, and public sources describe him as Roman Catholic. Colyer's background combines medicine, public service, and national policy work. He was a White House Fellow, served in the Kansas Legislature, became lieutenant governor, and then served as governor after Sam Brownback resigned to take a federal post. That history makes him one of the most recognizable people in the field.",
    "theirRecord": "Colyer's state record is built around his time as lieutenant governor and governor, especially KanCare and the budget fights that followed the Brownback era. His supporters point to a budget surplus, school-funding work, and his effort to end long-running school finance litigation. His campaign also leans on his medical background, his humanitarian work as a war-zone surgeon, and his close alignment with Donald Trump. He also carries older political baggage. He lost the 2018 Republican primary by 345 votes after serving as governor, and he stepped away from the 2022 race after a prostate-cancer diagnosis. In the 2026 race, he has made abortion, CRT, property taxes, immigration, and school policy central to his pitch.",
    "whatYouShouldKnow": [
      "Colyer has already served as governor, which gives him a statewide record that none of the other major Republican candidates can match",
      "His public identity combines medicine and politics, and he uses his surgical and humanitarian work as part of his governing story",
      "He was the 47th governor of Kansas for a short period after Brownback resigned",
      "His 2026 campaign is heavily tied to Trump alignment, school policy, and abortion restrictions",
      "Public sources describe him as Roman Catholic, but no current church membership page is documented",
      "His 2025 year-end campaign filing shows $2,070,322.09 raised and $1,884,509.78 cash on hand, making him the best-funded candidate in this group",
      "The filing includes both donor support and a $1.05 million personal loan, so his campaign has outside support but also a major self-funding element"
    ],
    "whereTheyWorship": "Public sources identify Colyer as Roman Catholic and note his schooling at Thomas More Prep-Marian in Hays, but no current parish or church website is documented.",
    "church": {
      "name": "Specific current church not confirmed",
      "denomination": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
      "details": "Denomination: Catholic background (TMP-Marian, Hays); current affiliation uncertain. Graduated from Thomas More Prep-Marian Catholic High School in Hays (Class of 1978)."
    },
    "quotes": [
      {
        "text": "I'm running for governor to make this the best place to raise a family and have a small business.",
        "source": "campaign announcement, 2025-05-14, https://www.kctv5.com/2025/05/14/former-kansas-governor-jeff-colyer-announces-he-will-run-again-2026/",
        "date": "2026-03-31",
        "url": "https://www.kctv5.com/2025/05/14/former-kansas-governor-jeff-colyer-announces-he-will-run-again-2026/",
        "topic": "Quotes"
      },
      {
        "text": "I held the line on taxes, including property taxes, and I ended 50 years of litigation over our schools that had eluded over a dozen governors.",
        "source": "campaign statement, 2026-04-01, https://www.jeffcolyer.com/",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "Quotes"
      },
      {
        "text": "How do we defend innocent life? I think this is one of the civil rights issues of our time.",
        "source": "campaign statement, 2026-04-01, https://www.jeffcolyer.com/get-involved/",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/get-involved/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$2,070,322.09 (2025 year-end)",
      "narrative": "Colyer's 2025 year-end report shows $2,070,322.09 raised, $185,812.31 spent, and $1,884,509.78 cash on hand. The filing also includes $17,493.28 in-kind and $63,346.68 in other transactions, and the research notes a $1.05 million personal loan alongside donor support. The named contributors visible in the filing are a mix of individual donors rather than a single dominant source, with Stephen Reintjes, Alan Cobb, Janie Welsh, Dylan Avatar Arnold, and Sarah Demovish among those publicly listed in the filing.",
      "donors": [
        {
          "name": "Stephen Reintjes",
          "amount": "$516.53"
        },
        {
          "name": "Alan Cobb",
          "amount": "$104.10"
        },
        {
          "name": "Janie Welsh",
          "amount": "$1,033.06"
        },
        {
          "name": "Dylan Avatar Arnold",
          "amount": "$520.51"
        },
        {
          "name": "Sarah Demovish",
          "amount": "$516.53"
        }
      ],
      "undisclosed": "The reviewed sample donors are only a slice of a very large statewide filing.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing SW01JC_202601 and campaign-finance reporting"
    },
    "sources": [
      {
        "title": "Jeffcolyer.Com",
        "url": "https://www.jeffcolyer.com/"
      },
      {
        "title": "Jeffcolyer.Com",
        "url": "https://www.jeffcolyer.com/get-involved/"
      },
      {
        "title": "Kctv5.Com",
        "url": "https://www.kctv5.com/2025/05/14/former-kansas-governor-jeff-colyer-announces-he-will-run-again-2026/"
      },
      {
        "title": "Docs.House.Gov",
        "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/"
      },
      {
        "title": "Kansashistory.Gov",
        "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011"
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
        "title": "Jeff Colyer - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
        "publication": "En.Wikipedia.Org",
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
    "whoTheyAre": "Ethan Corson is a Democratic state senator from Fairway running for governor. He was born in 1982, lives in Johnson County with his wife Jenna Brofsky and their sons Isaac and Aiden, and is publicly identified as Jewish. His education includes Garden City Community College, Washington University in St. Louis, and Georgetown Law. Corson's professional background combines law, economic development, and federal service. He worked as an attorney, served in the U.S. Commerce Department and the International Trade Administration, led the Kansas Democratic Party, and later became a Dole Institute Fellow. That mix gives him a more policy-and-administration-oriented resume than many other candidates in the field.",
    "theirRecord": "Corson has served in the Kansas Senate and sits on committees dealing with judiciary, transportation, taxation, utilities, and oversight. His public record and campaign messaging cover schools, lower taxes, rural healthcare, agriculture, and keeping more Kansans in the state by making life more affordable. He also has a real federal and state policy background outside the Legislature. His campaign is backed by major endorsements from Laura Kelly, Kathleen Sebelius, and Sharice Davids, and it is built around a moderate, policy-heavy pitch rather than culture-war politics.",
    "whatYouShouldKnow": [
      "Corson is a sitting Kansas senator with experience in both state and federal policy work",
      "He is publicly Jewish, but no specific synagogue or current place of worship is documented in cited sources",
      "His background includes law, trade policy, and party leadership, which is unusual in the Kansas governor field",
      "He has built his campaign around schools, healthcare, agriculture, and affordability",
      "His 2025 year-end report shows $902,641.13 raised, $375,665.32 spent, and $526,975.81 cash on hand",
      "The filing lists more than 3,000 contributors, with about 70 percent of them giving under $100",
      "He has bipartisan-style institutional support in the public record, including endorsements from Kelly, Sebelius, and Davids"
    ],
    "whereTheyWorship": "Public sources identify Corson as Jewish, but no specific synagogue membership or synagogue website is documented. The record is clear about his religious identity and not clear about a current congregation.",
    "church": {
      "name": "Attends a church in the Fairway/KC area (name unknown)",
      "details": "Denomination: Unknown. Lives in Fairway with wife Jenna and sons Isaac and Aiden."
    },
    "quotes": [
      {
        "text": "Opportunities for the next generation of Kansans, so they can build a life right here.",
        "source": "campaign homepage, 2026-04-01, https://ethanforkansas.com/",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "work hard, give back whenever you can and always keep your word",
        "source": "campaign biography, 2026-04-01, https://ethanforkansas.com/about/",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/about/",
        "topic": "Quotes"
      },
      {
        "text": "Kansans should be able to get the care that they need without going broke and without driving for hours to see a doctor.",
        "source": "Kansas Reflector, 2026-03-08, https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$902,641.13 (2025 year-end)",
      "narrative": "Corson's 2025 year-end report shows $902,641.13 raised, $375,665.32 spent, and $526,975.81 cash on hand. The campaign is well funded and broad-based, with more than 3,000 contributors and a large share of small-dollar donors. The filing does not show a self-funding-heavy operation. Instead, it shows a donor network that is larger and more diversified than some of the other governor candidates.",
      "donors": [
        {
          "name": "Tony Atterbury",
          "amount": "$4,000"
        },
        {
          "name": "Amy Bartak",
          "amount": "$250"
        },
        {
          "name": "Mary Becker",
          "amount": "$200"
        },
        {
          "name": "Matt Birch",
          "amount": "$500"
        },
        {
          "name": "Louis Bornman",
          "amount": "$100"
        },
        {
          "name": "William Bradley",
          "amount": "$500"
        },
        {
          "name": "Jim Breneman",
          "amount": "$25"
        }
      ],
      "undisclosed": "The filing contains many more donors than the small extracted sample listed here.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and campaign-finance reporting"
    },
    "sources": [
      {
        "title": "Ethanforkansas.Com",
        "url": "https://ethanforkansas.com/"
      },
      {
        "title": "Ethanforkansas.Com",
        "url": "https://ethanforkansas.com/about/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01EC_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kcjc.Com",
        "url": "https://www.kcjc.com/section-blog/1819-news/archived-news/4844-from-a-love-of-baseball-to-a-love-of-politics"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/"
      },
      {
        "title": "Ethanforkansas.Com",
        "url": "https://ethanforkansas.com/about",
        "publication": "Ethanforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ethanforkansas.com",
        "url": "https://ethanforkansas.com",
        "publication": "Ethanforkansas.Com",
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
    "whoTheyAre": "Cindy Holscher is a Democratic state senator from Johnson County running for governor. She was born April 26, 1969, grew up in Slater, Missouri, and lives in Overland Park with her husband Greg and their three children. She earned degrees from the University of Missouri in journalism, marketing, and political science, and she has described herself as the first college graduate in her family. Before entering the legislature, Holscher worked in business and communications, including time at R.H. Donnelley, Add Sheet, and Sprint. Her public biography also centers on family economics and school advocacy, which has become a major part of her campaign identity.",
    "theirRecord": "Holscher served in the Kansas House from 2017 to 2020 and has served in the Kansas Senate since 2021. She co-founded the Women's Bipartisan Caucus and has been one of the more visible Democratic voices on public schools, Medicaid expansion, reproductive rights, and opposition to school vouchers. Her legislative story is tied to the Brownback tax era and the effort to reverse it. She was part of the coalition that moved Kansas away from the Brownback tax cuts and has repeatedly framed public education and health care as state priorities. In the governor race, that record is the foundation for her argument that Kansas needs a more policy-driven Democratic leader.",
    "whatYouShouldKnow": [
      "Holscher is a sitting Kansas senator, so she already has a public legislative record that voters can evaluate",
      "Her background is working-class and family-centered, and she has used that story consistently in her campaign",
      "She co-founded the Women's Bipartisan Caucus, which is one of the clearest examples of her public governing style",
      "Her record is strongest on school funding, Medicaid expansion, and opposition to vouchers",
      "She has been a visible critic of the Brownback tax legacy and a supporter of reversing it",
      "Her 2025 year-end report shows $397,952.07 raised, $218,060.34 spent, and $179,891.73 cash on hand",
      "No current church affiliation is documented in cited sources"
    ],
    "whereTheyWorship": "No public church or denomination is documented in the cited sources. The available record points much more clearly to family, school, and legislative work than to any current congregation.",
    "church": {
      "name": "Not confirmed; attended events at Shawnee Mission UU Church and St. Andrew's Episcopal",
      "details": "Denomination: Unknown. Attended a meeting at Shawnee Mission Unitarian Universalist Church in Lenexa (October 2025 -- likely a campaign event, not worship)."
    },
    "quotes": [
      {
        "text": "I walked with a group of education advocates from Shawnee to Topeka twice",
        "source": "campaign about page, 2026-04-01, https://cindyforkansas.com/about/",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/about/",
        "topic": "Quotes"
      },
      {
        "text": "The push for 'school choice' is just another way to get more of our taxpayer dollars into the hands of those who are already wealthy.",
        "source": "Johnson County Post, 2023-03-13, https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
        "date": "2026-03-31",
        "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
        "topic": "Quotes"
      },
      {
        "text": "Politicians are making dangerous cuts to our programs, Medicaid and Social Security. That's hurting us, and with the expiration of ACA tax credits, that's a huge threat.",
        "source": "Kansas Reflector, 2026-03-08, https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$397,952.07 (2025 year-end)",
      "narrative": "Holscher's 2025 year-end report shows $397,952.07 raised, $218,060.34 spent, and $179,891.73 cash on hand. The filing does not show a personal-loan-driven campaign; the money trail is built more on regular contributions and a moderate-sized donor base. The named contributors visible in the filing include Thomas Adrian, Quinta Avance, Elizabeth Bishop, Archie Blumhorst, Rick Blumhorst, and Ross Boelling. That gives the campaign a steady donor pattern without the very large self-funding numbers seen in some of the Republican field.",
      "donors": [
        {
          "name": "Thomas Adrian",
          "amount": "$500"
        },
        {
          "name": "Quinta Avance",
          "amount": "$50"
        },
        {
          "name": "Elizabeth Bishop",
          "amount": "$100"
        },
        {
          "name": "Archie Blumhorst",
          "amount": "$250"
        },
        {
          "name": "Rick Blumhorst",
          "amount": "$100"
        },
        {
          "name": "Rick Blumhorst",
          "amount": "$1,000"
        }
      ],
      "undisclosed": "The extracted donor sample is only a partial view of the full filing.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and campaign-finance reporting"
    },
    "sources": [
      {
        "title": "Cindyforkansas.Com",
        "url": "https://cindyforkansas.com/"
      },
      {
        "title": "Cindyforkansas.Com",
        "url": "https://cindyforkansas.com/about/"
      },
      {
        "title": "Facebook.Com",
        "url": "https://www.facebook.com/p/Cindy-Holscher-for-Kansas-100057624806871/"
      },
      {
        "title": "Instagram.Com",
        "url": "https://www.instagram.com/cindyforkansas/"
      },
      {
        "title": "X.Com",
        "url": "https://x.com/cindy4kansas"
      },
      {
        "title": "Johnsoncountypost.Com",
        "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CH_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/"
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
    "whoTheyAre": "Marty Tuley is a Democratic candidate for governor from Lawrence. He describes himself as a fourth-generation Kansan with roots in farming, football, and classroom learning, and his campaign biography says his family is made up of farmers, teachers, and working people. He is married to Lovena Tuley. Tuley is an author, personal trainer, and former gym owner rather than a career politician. His campaign materials make that outsider identity part of the pitch, and the public record shows a first-time candidate leaning on family roots, fitness, and social-media campaigning instead of prior elected office.",
    "theirRecord": "Tuley does not have an elected office record. public materials shows a candidate running on plain-language themes such as public schools, health and fitness, economics, and personal freedoms, with a style that is much more campaign-driven than institutional. His most distinctive policy position in the Democratic field is his opposition to transgender athletes competing in girls' sports. That is the clearest issue separating him from the rest of the Democratic field and is likely to be the first thing voters notice about his campaign.",
    "whatYouShouldKnow": [
      "Tuley has no prior public office record, so his candidacy rests on biography, campaign message, and social-media outreach",
      "He is running as a first-time candidate who points to his farming, football, classroom, and working-family background rather than to elected-office experience",
      "His campaign is unusually visible on social media for a candidate with such a thin political record",
      "He is running on public-school support, personal freedom, and economic language that he says speaks to ordinary Kansas families",
      "His opposition to transgender athletes in girls' sports is the most specific policy difference between him and most Democratic candidates",
      "His 2025 year-end filing shows $2,600.00 raised and $2,406.11 cash on hand",
      "No public church affiliation or denomination was verified in the material reviewed"
    ],
    "whereTheyWorship": "No public church affiliation or denomination is documented, and no current congregation is identified for Tuley.",
    "quotes": [
      {
        "text": "I'm a fourth-generation Kansan with deep roots in our state's soil and values.",
        "source": "campaign about page, 2026-04-01, https://www.tuley4gov2026.com/about-marty",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/about-marty",
        "topic": "Quotes"
      },
      {
        "text": "We have the geography, the work ethic and the heart to lead the country again in education, agriculture, energy and small business.",
        "source": "WIBW, 2025-07-28, https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
        "date": "2026-03-31",
        "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
        "topic": "Quotes"
      },
      {
        "text": "We want a candidate that's in the middle. Where's the middle? right here, I'm the middle. I think that I'm the best chance the democratic party has to win the general.",
        "source": "WIBW, 2025-07-28, https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
        "date": "2026-03-31",
        "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$2,600.00 (2025 year-end)",
      "narrative": "Tuley's 2025 year-end filing shows $2,600.00 raised, $193.89 spent, and $2,406.11 cash on hand. That is a very small campaign by gubernatorial standards, even for a low-name-ID candidate. The filing lists only a handful of named contributors, which matches the rest of the public record: this is a small, mostly self-contained campaign with limited outside money.",
      "donors": [
        {
          "name": "Todd Decuir",
          "amount": "$500"
        },
        {
          "name": "George Grieb",
          "amount": "$500"
        },
        {
          "name": "Ernesto Hodison",
          "amount": "$100"
        },
        {
          "name": "William England",
          "amount": "$50"
        }
      ],
      "undisclosed": "The raw-dump pass did not fully reconstruct the complete itemized schedule.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and public finance reporting"
    },
    "sources": [
      {
        "title": "Tuley4gov2026.Com",
        "url": "https://www.tuley4gov2026.com/"
      },
      {
        "title": "Tuley4gov2026.Com",
        "url": "https://www.tuley4gov2026.com/about-marty"
      },
      {
        "title": "Wibw.Com",
        "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/"
      },
      {
        "title": "Facebook.Com",
        "url": "https://www.facebook.com/profile.php?id=100088545015076"
      },
      {
        "title": "Instagram.Com",
        "url": "https://www.instagram.com/tuley_for_gov"
      },
      {
        "title": "Youtube.Com",
        "url": "https://www.youtube.com/@MartyTuley"
      },
      {
        "title": "Tiktok.Com",
        "url": "http://www.tiktok.com/@tuley_for_gov"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01MT_202601.pdf"
      },
      {
        "title": "Tuley4gov2026.Com",
        "url": "https://www.tuley4gov2026.com/health-and-fitness"
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
    "whoTheyAre": "Charlotte O'Hara is a Republican candidate for governor from Overland Park. She was raised on a farm in Bourbon County, graduated from the University of Kansas, spent more than 20 years as a general contractor, and later co-owned a manufacturing company in Olathe with two of her sons. She is the mother of five and grandmother of seven. O'Hara's public record also includes local and state office. She served in the Kansas House and later on the Johnson County Commission, and public coverage has made her a familiar conservative voice in Johnson County politics. Her campaign materials and public columns lean heavily on tax, spending, and cultural issues.",
    "theirRecord": "O'Hara's record includes a term on the Johnson County Commission, service in the Kansas House, and a long run as a conservative commentator. During COVID, she publicly opposed masks, vaccines, and shutdowns while serving on the county commission. She also wrote columns that argued for lower taxes, smaller government, and more conservative policy positions. In the 2026 governor race, she has continued to run as a hard-right Republican with a clear anti-spending and anti-regulatory message. She has attacked government waste, DEI, CRT, STAR bond tax incentives, and what she sees as overly broad public spending. She lost the 2024 governor race in her earlier run for office, but she remains visible in the field because of her long record in Kansas Republican politics.",
    "whatYouShouldKnow": [
      "O'Hara has real governing experience from both the Kansas House and the Johnson County Commission",
      "She is one of the most ideologically conservative candidates in the governor field",
      "Her campaign material and columns consistently emphasize taxes, property rights, and reduced government spending",
      "She has used faith language in her campaign, but no current church affiliation is documented in cited sources",
      "Her 2025 year-end filing shows $589,550.97 raised, $78,652.57 spent, and $510,898.40 cash on hand",
      "The filing includes $193,000 in self-funding, so personal money is a meaningful part of her campaign",
      "She remains a recognizable Republican figure in Johnson County and Kansas statewide politics even after her earlier loss"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. The campaign uses faith language, but the available sources do not identify a current church website or membership page.",
    "quotes": [
      {
        "text": "I grew up in our farm family's tradition of faith, grit and hard work.",
        "source": "campaign about page, 2026-04-01, https://oharaforkansas.com/about-charlotte-ohara/",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/about-charlotte-ohara/",
        "topic": "Quotes"
      },
      {
        "text": "strong families and strong faith communities are building blocks for a strong and safe Kansas.",
        "source": "campaign page, 2026-04-01, https://oharaforkansas.com/meet-charlotte-ohara/",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/meet-charlotte-ohara/",
        "topic": "Quotes"
      },
      {
        "text": "I cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes.",
        "source": "campaign material, 2026-04-01, https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$589,550.97 (2025 year-end)",
      "narrative": "O'Hara's 2025 year-end report shows $589,550.97 raised, $78,652.57 spent, and $510,898.40 cash on hand. The filing also shows $193,000 in self-funding, which is a meaningful part of her overall campaign budget. Her donor pattern is broader than the smallest campaigns in the field, but she still relies partly on her own money. That makes her a hybrid of donor-backed and self-financed candidate rather than a purely grassroots operation.",
      "donors": [
        {
          "name": "Charlotte O'Hara (self-funding entry)",
          "amount": "$193,000"
        },
        {
          "name": "Victor Wirtz",
          "amount": "$104.10"
        },
        {
          "name": "Ralph Yaple",
          "amount": "$100"
        },
        {
          "name": "Sandra Nider",
          "amount": "$35"
        },
        {
          "name": "Nancy Czinege",
          "amount": "$104.10"
        },
        {
          "name": "Pam and Robb Ferguson",
          "amount": "$260.25"
        }
      ],
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and public finance reporting"
    },
    "sources": [
      {
        "title": "Oharaforkansas.Com",
        "url": "https://oharaforkansas.com/"
      },
      {
        "title": "Oharaforkansas.Com",
        "url": "https://oharaforkansas.com/about-charlotte-ohara/"
      },
      {
        "title": "Oharaforkansas.Com",
        "url": "https://oharaforkansas.com/meet-charlotte-ohara/"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/charlotte-o-hara"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CO_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/"
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
    "whoTheyAre": "Stacy Rogers is a Republican business owner from Wichita running for governor. Public coverage describes her as a school board member and businesswoman who has three sons, including two children with learning challenges, which has shaped how she talks about schools and family policy. She is a first-time statewide candidate and built her campaign around a plainspoken style rather than a long political record. Her public launch materials emphasize that she was the first candidate to declare and file. The campaign presents her as someone trying to bring a business-owner's mindset to state government, with a focus on direct language and low-drama politics.",
    "theirRecord": "Rogers does not have a legislative voting record, so the public record is mostly campaign positioning and prior local civic work. She has leaned on business experience and school board work, with her campaign arguing that Kansas needs less political theater and more practical management. Because she is new to statewide politics, there are fewer formal public actions to review than for the senator and statewide officeholders in the field. Her campaign materials and filings make the clearest case for how she would govern: conservative, business-oriented, and focused on family and school policy.",
    "whatYouShouldKnow": [
      "Rogers is a Wichita business owner and former school board member, not a career state legislator",
      "She is one of the newer candidates in the governor field and has a smaller public footprint than the major officeholders",
      "Her campaign messaging centers on property taxes, small business, medical freedom, and a school-board background shaped by raising children with learning challenges",
      "Two of her sons have learning challenges, which is part of how she talks about school policy",
      "Her 2026 filing shows about $25,542.98 raised and $14,470.23 cash on hand, which is much smaller than the top-tier governor campaigns",
      "No current church affiliation is documented in cited sources"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Public materials are clear about her campaign style and family story, but not about a specific congregation.",
    "quotes": [
      {
        "text": "I cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes.",
        "source": "campaign statement, 2026-04-01, https://stacyrogersforks.com/",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "Quotes"
      },
      {
        "text": "Go through each Department with a fine tooth comb, root out inefficiencies, mishandling and fraud",
        "source": "campaign statement, 2026-04-01, https://stacyrogersforks.com/",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "Quotes"
      },
      {
        "text": "Families should have the right to make the medical decisions that benefit themselves and their kids, even if those decisions are different from what government bureaucrats recommend.",
        "source": "campaign reporting, 2026-04-01, https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html",
        "date": "2026-03-31",
        "url": "https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$24,862.65 (2025 year-end)",
      "narrative": "Rogers' filing shows a small campaign by statewide standards, with roughly $25,542.98 raised and $14,470.23 cash on hand. That level of money is enough to keep a campaign active, but it is far below the governor race leaders. The money trail is consistent with a lower-profile operation that is still trying to build donor support. There is no sign of the kind of self-funding or large-donor concentration seen in some of the other campaigns.",
      "donors": [
        {
          "name": "James Korf Jr.",
          "amount": "$200.00"
        },
        {
          "name": "Shae's Point of View (in-kind video services)",
          "amount": "$1,200.00"
        },
        {
          "name": "Stacy Rogers loan to campaign",
          "amount": "$2,397.79"
        },
        {
          "name": "Itemized receipts",
          "amount": "$20,989.36"
        },
        {
          "name": "Unitemized contributions",
          "amount": "$3,873.29"
        }
      ],
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and public finance reporting"
    },
    "sources": [
      {
        "title": "Stacyrogersforks.Com",
        "url": "https://stacyrogersforks.com/"
      },
      {
        "title": "Stacyrogersforks.Com",
        "url": "https://stacyrogersforks.com/the-rogers-report"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SR_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/stacy-l-rogers-michael-w-smith"
      },
      {
        "title": "Yahoo.Com",
        "url": "https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html"
      },
      {
        "title": "Facebook.Com",
        "url": "https://www.facebook.com/StacyHepnerRogers/"
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
        "title": "stacyrogersforks.com",
        "url": "https://stacyrogersforks.com",
        "publication": "Stacyrogersforks.Com",
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
    "whoTheyAre": "Joy Eakins is a Wichita business owner and Republican candidate for governor in 2026. Her public biography centers on data analytics, the company Cornerstone Data, and service on the Wichita school board. She describes herself as a conservative Christian and says she is a faithful member of River Community Church. The public record ties that church to her campaign identity more directly than it does for most statewide candidates in the race. Her school-board background matters because it is the clearest public office she has held. The school-closure period during COVID gave her a platform to talk about reopening schools, data, and family decision-making.",
    "theirRecord": "Eakins's public record is mostly local and educational rather than legislative. She served on the Wichita Board of Education and used her data-analytics background to argue that schools could reopen safely during the pandemic. Her campaign materials present that experience as practical rather than ideological: she argues that data, family priorities, and school outcomes should drive policy. She also built a campaign site around the \"Kansas comeback\" brand, which frames her as a statewide conservative candidate with a business and education background. The public finance record shows that her campaign is large and heavily self-funded. That matters because it shows she is operating at the scale of a serious statewide campaign, not a symbolic entry.",
    "whatYouShouldKnow": [
      "She is a Wichita business owner and former Wichita school board member",
      "She built Cornerstone Data as a data-analytics firm",
      "Her campaign story centers on reopening schools safely during COVID",
      "She says she is a faithful member of River Community Church",
      "Her campaign is dominated by a very large self-loan",
      "A full donor-by-donor ledger was not publicly available online"
    ],
    "whereTheyWorship": "Eakins's campaign bio says she is a faithful member of River Community Church. The church URL is https://www.rivercc.org/, and that is the clearest public faith connection I found. cited sources does not show a different church or denomination beyond that named congregation.",
    "church": {
      "name": "River Community Church",
      "details": "The campaign bio says she is a \"devout Christian\" and a \"faithful member of River Community Church. Church URL verified in public web search: https://www.rivercc.org/."
    },
    "quotes": [
      {
        "text": "Joy used her data analytics firm to prove how we could get kids back into Kansas classrooms safely",
        "source": "KansasComeback.com, education page, https://www.kansascomeback.com/education",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com/education",
        "topic": "Quotes"
      },
      {
        "text": "The United States was on the cusp of a 'golden age' under President Donald Trump, but Kansas could miss out on that good fortune if it failed to elect a conservative governor.",
        "source": "Kansas Reflector, January 19, 2026, https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "topic": "Quotes"
      },
      {
        "text": "Families should have the right to make the medical decisions that benefit themselves and their kids, even if those decisions are different from what government bureaucrats recommend.",
        "source": "KSN News, https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
        "date": "2026-03-31",
        "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$1,142,759.55 (2025 year-end)",
      "narrative": "Kansas ethics filing totals in the raw record show total contributions and other receipts of $1,142,759.55, expenditures of $116,268.91, cash on hand of $1,026,490.64, and other transactions of $1,000,000.00. The major self-financing piece was a $1,000,000 loan to her campaign on 12/29/25. That makes her one of the better-funded candidates in the gubernatorial field, with the money trail heavily shaped by self-funding rather than by a long donor list.",
      "donors": [
        {
          "name": "Joy Eakins (self-loan)",
          "amount": "$1,000,000.00"
        },
        {
          "name": "Ryan Baty",
          "amount": "$1,041.02"
        },
        {
          "name": "Debby Ponton",
          "amount": "$364.36"
        },
        {
          "name": "Sandy Pickert",
          "amount": "$250.00"
        },
        {
          "name": "Walter Rosenbaum",
          "amount": "$260.25"
        },
        {
          "name": "Fred Postlewait",
          "amount": "$100.00"
        }
      ],
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and public finance reporting"
    },
    "sources": [
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/about"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/education"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/"
      },
      {
        "title": "Rivercc.Org",
        "url": "https://www.rivercc.org/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/campaign-finance/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/"
      },
      {
        "title": "Ksn.Com",
        "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/"
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
    "whoTheyAre": "Philip Sarnecki is a businessman from Bucyrus running for governor as a Republican. He built his public identity around private-sector work, including RPS Financial and 513 Films, and public materials say he has helped build businesses that employed nearly 1,000 Kansans. He is married to Heidi, and his campaign materials present him as a Christian and as someone rooted in family and business rather than elected office. His campaign materials stress business experience, faith, and a desire to challenge the existing Republican political class. Sarnecki has not held statewide office, so his public case rests on private-sector biography rather than a legislative record.",
    "theirRecord": "Sarnecki does not have a legislative voting record. His public record is mainly business, media, and campaign work, including 513 Films, which public materials describe as a faith-based film company, and his public profile as an owner and operator rather than a career officeholder. The campaign messaging also links him closely to conservative Christian identity and to pro-Trump politics. Because he has not served in elected office, the main record to evaluate is his business history and how he presents that history on the campaign trail. The available material shows a candidate trying to convert private-sector credibility into political support, while giving voters very little history of how he would govern inside state government.",
    "whatYouShouldKnow": [
      "Sarnecki is a business candidate, not a legislator, governor, or statewide officeholder",
      "He presents himself as a Christian and uses faith as a central part of his public identity",
      "His business record includes 513 Films and other ventures that public materials say employed nearly 1,000 Kansans",
      "The campaign is heavily self-financed, with the 2025 year-end filing showing $2,528,715.73 raised and $2,306,000 in self-loan and related funding reflected in the report",
      "He had $2,306,000 in cash on hand at year-end, which means his campaign entered the cycle with significant resources despite being a newer political operation",
      "The donor list includes a mix of smaller contributions and a few larger checks, rather than a huge donor network",
      "No specific church membership page is publicly available"
    ],
    "whereTheyWorship": "Public materials identify Sarnecki as Christian, but no specific church membership or church website is documented. His campaign is faith-forward, but the public record stops short of naming a current congregation.",
    "quotes": [
      {
        "text": "Philip Sarnecki is a Kansas businessman, family man, and job creator who has built companies that today employ approximately 1,000 people across multiple industries.",
        "source": "Real Media KC, 2025-09-19, https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "date": "2026-03-31",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "topic": "Quotes"
      },
      {
        "text": "Guided by his Christian faith and conservative values, Philip believes in hard work, strong families, and accountable leadership, not career politics.",
        "source": "Real Media KC, 2025-09-19, https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "date": "2026-03-31",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "topic": "Quotes"
      },
      {
        "text": "He’s the largest national owner of a quick lube franchise, and that has established locations across Kansas.",
        "source": "Real Media KC, 2025-09-19, https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "date": "2026-03-31",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$2,528,715.73 (direct committee receipts at 2025 year-end)",
      "narrative": "Sarnecki's 2025 year-end report shows $2,528,715.73 raised, $222,715.73 spent, and $2,306,000 in cash on hand. The file reflects a campaign that is very heavily self-financed, with the research noting a $2 million self-loan and a large amount of cash still unused at year-end. The named donors visible in the filing are a mix of individual supporters rather than a broad institutional donor base. That matters because most of the financial strength in the race comes from Sarnecki himself rather than from a long-established political network.",
      "donors": [
        {
          "name": "Philip Sarnecki (self-loan)",
          "amount": "$2,000,000.00"
        },
        {
          "name": "John Goodwin",
          "amount": "$2,500.00"
        },
        {
          "name": "Ronda Anderson",
          "amount": "$260.25"
        },
        {
          "name": "Jim Burt",
          "amount": "$250.00"
        },
        {
          "name": "Eben Fowler",
          "amount": "$100.00"
        },
        {
          "name": "Lenin Guerra",
          "amount": "$100.00"
        }
      ],
      "undisclosed": "Separate supportive organizations were repeatedly referenced in reporting, but not fully identified donor by donor.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and statewide campaign-finance reporting"
    },
    "sources": [
      {
        "title": "Philipsarnecki.Org",
        "url": "https://philipsarnecki.org/"
      },
      {
        "title": "Philipsarnecki.Org",
        "url": "https://philipsarnecki.org/contact/"
      },
      {
        "title": "Realmediakc.Com",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01PS_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026"
      },
      {
        "title": "Followthemoney.Org",
        "url": "https://www.followthemoney.org/"
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
    "whoTheyAre": "Kris Kobach is Kansas Attorney General and a Republican candidate for the 2026 gubernatorial race. He is a Topeka-raised lawyer with Harvard, Oxford, and Yale credentials who built his public identity around immigration law, election law, and conservative legal fights. He lives near Lecompton with his wife Heather and their five children. His name has been part of Kansas politics for years. Before becoming attorney general in 2023, Kobach served as Kansas secretary of state from 2011 to 2019, where he became one of the state GOP's most polarizing figures. His public record and campaign messaging still revolve around the same themes: elections, immigration, federal litigation, and court selection.",
    "theirRecord": "As attorney general, Kobach has used the office for aggressive conservative litigation. His campaign bio says he has brought or joined suits against OSHA over vaccine mandates, DHS on behalf of ICE agents and sheriffs, and the Air Force on behalf of pilots facing religious-belief penalties. He has also used the office to keep Kansas in the center of national fights over state authority and federal policy. His earlier tenure as secretary of state remains a major part of his public record. That chapter includes voter-roll fights, proof-of-citizenship litigation, and the election-law controversies that made him a national figure. His 2022 Senate campaign ethics penalty for We Build the Wall-related violations is still part of the public story, and his current gubernatorial messaging continues to lean into election and court reform.",
    "whatYouShouldKnow": [
      "Kobach is Kansas attorney general and a former secretary of state, so his public record spans both statewide law enforcement and election administration",
      "His work in office has centered on immigration cases, election-law fights, and the push to change how Kansas selects Supreme Court justices",
      "His 2025 state filing showed $337,330.24 raised and $502,626 cash on hand",
      "The We Build the Wall penalty from his 2022 Senate campaign is still part of the public record",
      "Public reporting ties him to Morning Star Church in Lawrence"
    ],
    "whereTheyWorship": "Kobach is publicly tied to Morning Star Church in Lawrence. Public reporting also covered vandalism at that church, which places the congregation in the public record for him.",
    "church": {
      "name": "Morning Star Church, Lawrence, KS",
      "denomination": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "details": "Denomination: Evangelical / Non-denominational (affiliated with Morning Star International, Nashville). Church Address: 998 N 1771 Rd, Lawrence, KS 66049."
    },
    "quotes": [
      {
        "text": "Today marks an historic turning point in Kansas. Voters will now get to decide whether to reclaim the right to vote for justices, which they enjoyed from statehood until 1958.",
        "source": "Kris Kobach campaign statement, 2022, https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "topic": "Quotes"
      },
      {
        "text": "People, not only lawyers in smoke-filled back rooms, should have a voice in selecting Kansas Supreme Court justices.",
        "source": "Kansas Reflector, 2025-03-19, https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
        "topic": "Quotes"
      },
      {
        "text": "Currently, Kobach is engaged in three federal lawsuits against the Biden administration.",
        "source": "Kris Kobach campaign bio, 2022, https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$337,330.24 (2025 year-end)",
      "narrative": "The Kansas ethics filing shows Kobach ended 2025 with $502,626 cash on hand after raising $337,330.24 and spending $52,558.52. The accessible donor list includes small contributors such as Kevin Arburn, Gary Grimes, Julia Kirk, Karen Piper, Barbara Anderson, John Rysavy, Timothy Voth, David Powell, and Ann Peterson, which suggests a broad base rather than a single major outside funder.",
      "donors": [
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
      "undisclosed": "The extracted sample covers only the first visible slice of a much longer Schedule A.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and public finance reporting"
    },
    "sources": [
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/meet-kris/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02KK_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/officeholders/kris-kobach/summary"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/"
      },
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
        "publication": "Kansasreflector.Com",
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
    "whoTheyAre": "Chris Mann is a Kansas Attorney General candidate from the Johnson County and Overland Park orbit. His campaign biography says he spent his career first as a police officer and then as a prosecutor, and his public pitch centers on law enforcement, the Constitution, and the rule of law. His filing presents him as a former law-enforcement attorney who wants the attorney general's office to stay on public safety and courtroom work. The public materials reviewed for this sweep show a candidate who is trying to keep the race on public safety and courtroom work. His campaign leans on the idea that he understands how criminal justice works because he has spent years inside it.",
    "theirRecord": "Mann does not have a long elected record to audit, so his public record is largely professional. He is the former police officer and prosecutor whose campaign says he has dedicated his life to serving Kansas communities. That background is the core of his case for the office. The campaign frame is that the attorney general's office should stay on public safety, constitutional law, and ordinary courtroom work instead of national spectacle. Mann is trying to make the contest about institutional trust and courtroom experience rather than ideology.",
    "whatYouShouldKnow": [
      "Mann is running as a former police officer and prosecutor, so his case for the office comes from law-enforcement work rather than prior elected office",
      "His campaign says the attorney general's job should stay on public safety, constitutional law, and courtroom work",
      "He has no long elected record, so his public résumé is the professional record voters can actually compare",
      "His 2026 fundraising is substantial, with $536,639.57 raised and $257,257.08 cash on hand",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "No public church affiliation could be verified for Chris Mann in public sources. His campaign materials do not foreground faith, and the public record I checked did not identify a congregation.",
    "quotes": [
      {
        "text": "Chris Mann has dedicated his life to serving and protecting Kansas communities - first as a police officer and then as a prosecutor.",
        "source": "Chris Mann campaign bio, 2026-04-01, https://chrismannforkansas.com/",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "He will defend the Constitution, protect the rule of law, and ensure Kansas families are safe.",
        "source": "Chris Mann campaign bio, 2026-04-01, https://chrismannforkansas.com/",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "Defend the rule of law, protect our rights, protect our families and make Kansas a safer place to live.",
        "source": "Chris Mann campaign platform, 2026-04-01, https://chrismannforkansas.com/",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$536,639.57 (2025 year-end)",
      "narrative": "Mann's 2026 finance report shows a serious statewide campaign: $536,639.57 raised, $280,041.49 spent, and $257,257.08 cash on hand. The itemized donor list includes names such as James Bartimus, Andrea Himoff, Karen Mann, Scott Teeter, Thomas Adrian, Paige Ballard, and several smaller donors, which points to a broad donor network rather than one giant patron.",
      "donors": [
        {
          "name": "James Bartimus",
          "amount": "$1,000.00"
        },
        {
          "name": "Andrea Himoff",
          "amount": "$1,000.00"
        },
        {
          "name": "Scott Teeter",
          "amount": "$1,000.00"
        },
        {
          "name": "Thomas Adrian",
          "amount": "$500.00"
        },
        {
          "name": "Karen Mann",
          "amount": "$500.00"
        },
        {
          "name": "Linda Salem",
          "amount": "$500.00"
        },
        {
          "name": "Paige Ballard",
          "amount": "$200.00"
        },
        {
          "name": "Louis Bornman",
          "amount": "$50.00"
        }
      ],
      "undisclosed": "The filing includes many more contributors than the small extracted sample listed here.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and public finance reporting"
    },
    "sources": [
      {
        "title": "Chrismannforkansas.Com",
        "url": "https://chrismannforkansas.com/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02CM_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/23/former-prosecutor-enters-kansas-senate-race/"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/rep_mann_chris_1/"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2026/03/23/former-prosecutor-enters-kansas-senate-race/",
        "publication": "Kansasreflector.Com",
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
    "whoTheyAre": "Pat Proctor is a retired Army colonel, Leavenworth Republican, business owner, and Kansas House member running for Secretary of State in 2026. His public biography says he served 25 years in the Army, including Iraq and Afghanistan, and later built a Kansas political career that combines military service, business ownership, and legislative work. He and his wife Aree co-own Baan Thai Restaurant, and he has represented Leavenworth in the Kansas House since 2020. He chairs the House Elections Committee and has made election security the center of his statewide campaign.",
    "theirRecord": "Proctor's record is built around elections, security, and administrative order. In the House, he has been one of the strongest advocates for tighter election rules, including citizenship verification, ballot deadlines, and paper audit measures. He presents that as a way to protect confidence in the system rather than as a partisan stunt. The rest of his public identity is just as structured. The Army service gives him a national-security frame, the restaurant gives him a small-business frame, and the legislature gives him a policymaker frame. That combination is why his campaign reads less like an outsider bid and more like a conventional conservative promotion into statewide office.",
    "whatYouShouldKnow": [
      "Proctor has a real military resume, not just campaign rhetoric about service",
      "He chairs the House Elections Committee and has spent years on election-law issues",
      "He and his wife own Baan Thai Restaurant, which gives him a business-owner credential",
      "His 2025 filing showed $312,046.74 raised and $209,383.28 cash on hand",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "No verified public church affiliation is documented for Pat Proctor. His campaign literature emphasizes service, family, and security more than worship or denomination, and no congregation-level record is publicly available.",
    "quotes": [
      {
        "text": "The Kansas Secretary of State has two primary duties - securing and accurately executing our elections, and being the key agency to facilitate establishing and operating businesses in Kansas.",
        "source": "Pat Proctor campaign site, 2026-04-01, https://patproctor4ks.com/",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "Quotes"
      },
      {
        "text": "As Secretary of State, I will be ever vigilant regarding these threats.",
        "source": "Pat Proctor campaign page, 2026-04-01, https://patproctor4ks.com/",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "Quotes"
      },
      {
        "text": "Serving 25 years in the U.S. Army, I've defended our freedoms and fought for the ideals of democracy.",
        "source": "Pat Proctor campaign bio, 2026-04-01, https://patproctor4ks.com/",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$312,046.74 (2025 year-end)",
      "narrative": "Proctor's ethics filing shows a functioning statewide campaign with $312,046.74 raised and $209,383.28 cash on hand. The itemized donor list includes military, business, and conservative donors such as John Lahnes, John Jacob Kotzman, Mike Lehnherr, Chad Stafford, Dennis White, John Donovan, and Michelle Cebe.",
      "donors": [
        {
          "name": "John Lahnes",
          "amount": "$250.00"
        },
        {
          "name": "Dennis White",
          "amount": "$250.00"
        },
        {
          "name": "John Jacob Kotzman",
          "amount": "$100.00"
        },
        {
          "name": "Mike Lehnherr",
          "amount": "$100.00"
        },
        {
          "name": "Chad Stafford",
          "amount": "$100.00"
        },
        {
          "name": "John Donovan",
          "amount": "$100.00"
        },
        {
          "name": "George Pogge",
          "amount": "$50.00"
        },
        {
          "name": "Michelle Cebe",
          "amount": "$50.00"
        }
      ],
      "undisclosed": "The full Schedule A contains many more donors than the sample extracted here.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing SW04PP_202601 and statewide reporting"
    },
    "sources": [
      {
        "title": "Patproctor4ks.Com",
        "url": "https://patproctor4ks.com/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04PP_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_proctor_pat_1/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://www.hayspost.com/posts/2026-kansas-election-guide/"
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
    "whoTheyAre": "Ken Rahjes is a Republican Kansas House member from northwest Kansas and a 2026 candidate for Secretary of State. He comes out of the High Plains agricultural world rather than a big-city political machine, and his public identity is tied to farming, ranching, local institutions, and a long Kansas civic footprint. Rahjes is from Agra, where he was raised on a family farm and ranch and still lives. He and his wife Lori are members of the United Presbyterian Church in Phillipsburg, and his campaign message leans on the kind of rural conservatism that is familiar in western Kansas: trust, stewardship, and practical systems.",
    "theirRecord": "Rahjes has spent the last decade in the Kansas House representing the 110th District. His public record is anchored in agriculture, rural infrastructure, budget work, and water issues, which means he has spent most of his legislative life on the subjects that matter most to western Kansas communities. For Secretary of State, he is running on a straightforward premise: make elections trusted and business filings simple, and keep government from getting in the way. He presents that pitch in a more measured tone than some of the louder statewide candidates, which is part of why he reads as a conventional rural Republican rather than a hardline disruptor.",
    "whatYouShouldKnow": [
      "Rahjes raised $24,070.30 in 2025 and ended the year with $22,627.32 cash on hand",
      "He was raised on a farm and ranch near Agra and still lives there",
      "He chairs the House Agriculture and Natural Resources Committee",
      "The public record identifies him and his wife as members of the United Presbyterian Church in Phillipsburg",
      "His Secretary of State campaign says the office should make elections trusted, business filings simpler, and government less intrusive for rural Kansas communities"
    ],
    "whereTheyWorship": "The raw research notes identify Rahjes and his wife as members of the United Presbyterian Church in Phillipsburg. I was not able to verify a congregation website from the current public sweep, so I am treating the church name as identified but the URL as not publicly verified.",
    "quotes": [
      {
        "text": "I wanted to be one to help work on solutions in the arena not on the sidelines.",
        "source": "Ken Rahjes campaign news page, 2026-04-01, https://kenforkansas.com/news/first-adjournment-is-here/",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/news/first-adjournment-is-here/",
        "topic": "Quotes"
      },
      {
        "text": "We as Kansans, get up everyday and head off to work, school or other daily activities, and all face challenges to pay the bills and have a little for retirement or a rainy day.",
        "source": "Ken Rahjes campaign language, 2026-04-01, https://kenforkansas.com/",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "We will work hand in hand to make the process as smooth as possible with as few delays as possible then get out of the way and watch their success.",
        "source": "Ken Rahjes campaign language, 2026-04-01, https://kenforkansas.com/",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$24,070.30 (2025 year-end)",
      "narrative": "Rahjes's filing shows a compact but very Kansas donor base. The accessible report includes contributions from Scott Foote, the Kansas Sorghum Producers Association, Michael McClellan, Clay Scott, Kent Glasscock, Johnson Farms, and Kent Winter, which fits a campaign rooted in farm policy and rural business networks.",
      "donors": [
        {
          "name": "Scott Foote",
          "amount": "$3,300"
        },
        {
          "name": "Kansas Sorghum Producers Association",
          "amount": "$2,000"
        },
        {
          "name": "Michael McClellan",
          "amount": "$1,000"
        },
        {
          "name": "Clay Scott",
          "amount": "$500"
        },
        {
          "name": "Kent Glasscock",
          "amount": "$100"
        },
        {
          "name": "Johnson Farms",
          "amount": "$100"
        },
        {
          "name": "Kent Winter",
          "amount": "$100"
        }
      ],
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing and public finance reporting"
    },
    "sources": [
      {
        "title": "Kenforkansas.Com",
        "url": "https://kenforkansas.com/"
      },
      {
        "title": "Kenforkansas.Com",
        "url": "https://kenforkansas.com/news/first-adjournment-is-here/"
      },
      {
        "title": "Kenforkansas.Com",
        "url": "https://kenforkansas.com/news/rahjes-files-for-secretary-of-state/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04KR_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_rahjes_ken_1/"
      },
      {
        "title": "Followthemoney.Org",
        "url": "https://www.followthemoney.org/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
        "publication": "Kansasreflector.Com",
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
    "whoTheyAre": "Jennifer Day is a former Kansas House member from Overland Park and a 2026 Democratic candidate for Secretary of State. She is a Pepperdine graduate, entrepreneur, and former state representative whose case for the office rests on business experience and direct experience working elections. Her campaign materials say she spent 16 years in technology, real estate, and finance, built a small real-estate investment firm, founded an interior design company, volunteered with the League of Women Voters, and worked seven years as an election worker before serving in the Legislature. Those are the core facts she uses to argue that the secretary of state's office should be run as an administrative office rather than as a culture-war platform.",
    "theirRecord": "Day served in the Kansas House from 2020 to 2021. The Legislature's archive ties her to bills and votes on concealed carry in the Capitol, the death penalty, World War II funeral honors, and international relations. It is not a long legislative record, but it is enough to show how she operated when she actually held office. Her current campaign argues that the office has two practical jobs: run elections and manage business filings. On her campaign site, she says Kansans deserve elections that are accurate, reliable, and free from political influence, disinformation, and fearmongering, and she pairs that with a promise to streamline registration and business-formation processes. That puts her in direct contrast with candidates who mainly frame the office around election-fraud politics.",
    "whatYouShouldKnow": [
      "Day served in the Kansas House from 2020 to 2021, so unlike some candidates in this race, she has an actual legislative record that can be checked",
      "Her campaign says she spent seven years as an election worker and volunteered with the League of Women Voters, which is central to her argument that she understands election administration from the ground up",
      "She explicitly says state and federal leaders have spread lies and disinformation about elections and that she wants the Secretary of State's office to restore trust instead of amplifying that rhetoric",
      "Her business agenda is specific, not generic. She says the office should modernize and streamline registration, give founders clearer guidance, and make it easier to start and operate a business in Kansas",
      "Her 2025 statewide filing reports $84,304.87 raised and $14,740.52 cash on hand, with itemized donors in the public filing including James D. Childers, Louis Bornman, Michael Tourtellot, David Lambertson, Dan Osman, and other small- to mid-dollar contributors",
      "No public church affiliation is documented for Day in cited sources"
    ],
    "whereTheyWorship": "No public church affiliation is documented for Jennifer Day. Her campaign messaging uses civic language rather than faith language, and public sources do not identify a congregation.",
    "quotes": [
      {
        "text": "I'm in this race because election integrity is increasingly under threat across the country, and the people of Kansas deserve a safe, secure and accessible voting experience for all who are eligible.",
        "source": "Jennifer Day campaign site, accessed 2026-04-01, https://www.electjenday.com/",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "Quotes"
      },
      {
        "text": "As a State Representative, I've grown increasingly frustrated with leaders at both the federal and state levels who spread lies and disinformation about our elections, creating confusion and eroding trust in the process.",
        "source": "Jennifer Day campaign site, accessed 2026-04-01, https://www.electjenday.com/",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "Quotes"
      },
      {
        "text": "By strengthening transparent communication with the public and coordinating with county election officials, we can secure each and every ballot cast, and restore trust in the process that sustains our fragile democracy.",
        "source": "Jennifer Day campaign site, accessed 2026-04-01, https://www.electjenday.com/",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$84,304.87 (2025 year-end)",
      "narrative": "Day's 2025 statewide filing reports $84,304.87 raised and $14,740.52 cash on hand. The publicly visible donor sample in the filing includes James D. Childers, Louis Bornman, Michael Tourtellot, Dan Wancura, David Lambertson, Leslie Mark, Diana Stewart, and Dan Osman. The filing reads like a donor-backed campaign rather than a self-funded one. The public sample shows mostly small- and mid-dollar individual contributions rather than one dominant self-loan or a single outside patron.",
      "donors": [
        {
          "name": "James D Childers",
          "amount": "$25"
        },
        {
          "name": "Louis Bornman",
          "amount": "$100"
        },
        {
          "name": "Michael Tourtellot",
          "amount": "$100"
        },
        {
          "name": "Dan Wancura",
          "amount": "$50"
        },
        {
          "name": "David Lambertson",
          "amount": "$250"
        },
        {
          "name": "Leslie Mark",
          "amount": "$25"
        },
        {
          "name": "Diana Stewart",
          "amount": "$10"
        },
        {
          "name": "Dan Osman",
          "amount": "$250"
        }
      ],
      "undisclosed": "The filing contained more itemized contributors than the short extracted sample shown here.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing SW04JD_202601"
    },
    "sources": [
      {
        "title": "Electjenday.Com",
        "url": "https://www.electjenday.com/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04JD_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/rep_day_jennifer_1/"
      },
      {
        "title": "Thebeaconnews.Org",
        "url": "https://www.thebeaconnews.org/stories/2023/01/17/johnson-county-wyandotte-county-representatives-2023-kansas-legislature/"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/"
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
    "whoTheyAre": "Samuel Lane is a Kansas Secretary of State candidate who presents himself as a lifelong Kansan and former Independent now running as a Democrat. His public profile is intentionally small, which makes him look less like a machine politician and more like a low-budget civic entrant. Lane's background is working-class and varied. The campaign materials describe a KU psychology graduate from Leavenworth with experience in construction testing, retail, shipping, and food service. He also claims a family connection to Abolitionist James Henry Lane, but his spouse and broader family details are not publicly identified.",
    "theirRecord": "Lane has no prior elected office, so his public record is basically his campaign itself. He is asking voters to trust a candidate with limited political experience and a small operation because he argues the office should be run by someone who plays fair and takes the job seriously. His pitch is notable mostly for what it is not. He is not trying to run as a partisan fighter or a statewide insider. Instead, he presents himself as an outsider with a light footprint, minimal money, and a basic civic message about fair elections.",
    "whatYouShouldKnow": [
      "Lane raised $590.91, and $580.27 of that came from himself",
      "His campaign is overwhelmingly self-funded and very lightly resourced",
      "He has no prior elected-office experience",
      "He is campaigning on fair elections, honesty, and a small-scale operation",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a church affiliation or church website for Lane. His site and other public materials do not foreground a denomination.",
    "quotes": [
      {
        "text": "I'm a lifelong Kansan and lifelong independent, but I'm throwing my hat in with the Democrats to run for Secretary of State.",
        "source": "Samuel Lane campaign launch language, 2026-04-01, https://www.samuellane.org/",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "Quotes"
      },
      {
        "text": "I can't fix this whole country by myself. But with your vote, I'll at least be able to safeguard Kansas.",
        "source": "Samuel Lane campaign language, 2026-04-01, https://www.samuellane.org/",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "Quotes"
      },
      {
        "text": "I'm a lifelong Kansan and lifelong independent, but I'm throwing my hat in with the Democrats...",
        "source": "campaign launch language, source: https://www.samuellane.org/ (accessed 2026-04-01)",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH ROUND 2 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$590.91 (early public filing)",
      "narrative": "The public finance picture is tiny. The accessible report shows $590.91 raised, with Samuel Lane himself contributing $580.27. That means the campaign is overwhelmingly self-funded and not backed by a large donor network.",
      "donors": [
        {
          "name": "Samuel Lane",
          "amount": "$580.27"
        }
      ],
      "undisclosed": "cited sources did not show a broader institutional donor base beyond Lane's own contribution and a very small handful of minor activity.",
      "reportingPeriod": "most recent public filing reviewed",
      "source": "Reviewed public finance summary"
    },
    "sources": [
      {
        "title": "Samuellane.Org",
        "url": "https://www.samuellane.org/"
      },
      {
        "title": "Samuellane.Org",
        "url": "https://www.samuellane.org/what-does-the-secretary-of-state-do"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04SL_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Samuel_Lane"
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
    "whoTheyAre": "Daniel Hawkins is Kansas House Speaker and a 2026 Republican candidate for Insurance Commissioner. He is a Johnson County-based conservative legislator and insurance executive whose public biography emphasizes business experience, legislative leadership, and long-standing ties to Kansas politics. Hawkins graduated from Emporia State University, served 12 years in the Kansas Army National Guard, and has spent about 30 years in the insurance business. He and his wife Diane married in 1985 and have two daughters and four grandchildren. His campaign site opens with hard-edged conservative branding, which is part of how he introduces himself to voters.",
    "theirRecord": "Hawkins has represented the 100th District since 2013 and rose from committee chair to Majority Leader and then Speaker. His public record in this race is tied to both his work in the insurance business and his leadership of the House Republican caucus. That matters because he is not entering the race as a neutral administrator. He is already a major Republican power broker in Topeka, and his insurance commissioner campaign turns that legislative leadership into a statewide regulatory pitch.",
    "whatYouShouldKnow": [
      "Hawkins's 2025 filing showed $417,305.07 raised and $384,009.85 cash on hand",
      "He spent 30 years in the insurance business before running for statewide office",
      "He is Speaker of the Kansas House",
      "His public faith background is suggested by Trevecca Nazarene University, but no current church is documented in cited sources",
      "His campaign site opens with conservative branding and a strong Trump-alignment message"
    ],
    "whereTheyWorship": "No current public church affiliation is documented for Daniel Hawkins. His educational background includes Trevecca Nazarene University, which suggests a Christian environment, but no congregation or church website is publicly identified.",
    "quotes": [
      {
        "text": "Unchecked government expansion limits our freedom as individuals and hinders the growth of the businesses our state's economy relies on to thrive.",
        "source": "Daniel Hawkins campaign about page, 2026-04-01, https://danhawkinskansas.com/about/",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/about/",
        "topic": "Quotes"
      },
      {
        "text": "Dan has been a strong supporter of President Trump and will serve as a vocal ally for his agenda.",
        "source": "Daniel Hawkins campaign platform, 2026-04-01, https://danhawkinskansas.com/about/",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/about/",
        "topic": "Quotes"
      },
      {
        "text": "Just like President Trump has made it his mission to make life miserable for foreign cartels, it will be my job as Insurance Commissioner to do the same for any insurance company that does not follow the law.",
        "source": "Daniel Hawkins campaign site, 2026-04-01, https://www.hawkinsforinsurance.com/",
        "date": "2026-03-31",
        "url": "https://www.hawkinsforinsurance.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$417,305.07 (2025 year-end)",
      "narrative": "The 2025 filing shows $417,305.07 raised, $33,295.22 spent, and $384,009.85 cash on hand. The accessible donor list includes Kenny Doonan, Pat Do, Kyle Hoffman, Chad Stafford, Gary Obomy, C. Douglas Blex, Bill Pickert, and Visa, which points to a mix of political allies, small donors, and payment activity.",
      "donors": [
        {
          "name": "Kenny Doonan",
          "amount": "$2,000.00"
        },
        {
          "name": "Chad Stafford",
          "amount": "$1,000.00"
        },
        {
          "name": "Visa",
          "amount": "$1,000.00"
        },
        {
          "name": "Gary Obomy",
          "amount": "$1,041.02"
        },
        {
          "name": "Pat Do",
          "amount": "$350.00"
        },
        {
          "name": "Bill Pickert",
          "amount": "$104.10"
        },
        {
          "name": "Kyle Hoffman",
          "amount": "$100.00"
        },
        {
          "name": "C. Douglas Blex",
          "amount": "$52.05"
        }
      ],
      "undisclosed": "The larger filing should be read alongside Hawkins' statements of substantial interest because of the insurance-industry conflict question.",
      "reportingPeriod": "2025 year-end (2026 election cycle)",
      "source": "Kansas ethics filing SW03DH_202601 and public finance reporting"
    },
    "sources": [
      {
        "title": "Danhawkinskansas.Com",
        "url": "https://danhawkinskansas.com/"
      },
      {
        "title": "Danhawkinskansas.Com",
        "url": "https://danhawkinskansas.com/about/"
      },
      {
        "title": "Hawkinsforinsurance.Com",
        "url": "https://www.hawkinsforinsurance.com/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW03DH_202601.pdf"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Daniel_Hawkins_(Kansas"
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
    "whoTheyAre": "Dinah Sykes is the Kansas Senate minority leader and a 2026 Democratic candidate for Insurance Commissioner. She lives in Lenexa with her husband Jeffrey and their two sons, William and Tyler, and earned a business degree from Trevecca Nazarene University in Nashville with minors in finance and economics. Sykes won her Senate seat in 2016 as a Republican and later switched to the Democratic Party in December 2018. That switch made national news and remains part of her biography. She now runs as the top Democrat in the Kansas Senate and as a candidate who says the insurance office should be about affordability and accountability.",
    "theirRecord": "Sykes has spent nine years in the Kansas Senate and now serves as Senate Minority Leader. Her record in that role includes leadership work and advocacy for public school funding, Medicaid expansion, and protections for survivors of domestic violence and human trafficking. For Insurance Commissioner, she says the office should lower costs, hold insurers accountable, and put policyholders ahead of the companies being regulated. She also has bipartisan credibility in the race because both Kathleen Sebelius and Sandy Praeger endorsed her.",
    "whatYouShouldKnow": [
      "Sykes is the top Democrat in the Kansas Senate",
      "She switched from Republican to Democrat in 2018",
      "Her campaign centers on affordability, consumer protection, transparency, and fairness",
      "Former Insurance Commissioners Kathleen Sebelius and Sandy Praeger both endorsed her",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Dinah Sykes. Her campaign language is values-oriented, but the public sources reviewed here did not identify a congregation or worship site.",
    "quotes": [
      {
        "text": "The cost of health insurance in Kansas is simply out of control",
        "source": "Kansas Reflector brief, 2026-04-01, https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "topic": "Quotes"
      },
      {
        "text": "Kansas deserves an Insurance Commissioner who puts people first.",
        "source": "Dinah Sykes campaign site, 2026-04-01, https://www.dinahsykes.com/",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "Quotes"
      },
      {
        "text": "For Dinah, it all comes down to two things: fairness and affordability.",
        "source": "Dinah Sykes campaign site, 2026-04-01, https://www.dinahsykes.com/",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No Kansas statewide finance report listed online as of 2026-04-01",
      "narrative": "No public 2026 receipts report was located online in this sweep. The state index I reviewed surfaced only a treasurer setup filing, not a usable itemized donor report, so the honest summary is that the public campaign-finance picture was not yet available in a way I could reconstruct.",
      "donors": [
        {
          "name": "Kansas statewide filing report",
          "amount": "No report listed online"
        },
        {
          "name": "Insurance-industry contributions",
          "amount": "Pledged to decline"
        }
      ],
      "undisclosed": "The treasurer appointment is public, but a statewide donor ledger/report was not listed on the Kansas filing index as of April 1, 2026.",
      "reportingPeriod": "through 2026-04-01",
      "source": "Kansas statewide filings index / campaign statements / Kansas Reflector"
    },
    "sources": [
      {
        "title": "Dinahsykes.Com",
        "url": "https://www.dinahsykes.com/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Dinah_Sykes"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DS_AT.pdf"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/"
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
    "whoTheyAre": "Barb Wasinger is the Republican state representative for Kansas House District 111 in Hays. Before the Legislature, she served eight years on the Hays City Commission, including two terms as mayor, and six years as an Ellis County commissioner. Her public biography is tied closely to Hays and to local Catholic life. The record identifies her as an active member of St. Joseph Catholic Church in Hays, where she serves as a lector and as an notable Minister of Holy Communion. Her public materials also note a theology concentration from St. Catherine University. Wasinger has represented District 111 since 2019. Her public role is built on long local-government service rather than on a statewide or national political profile.",
    "theirRecord": "In Topeka, Wasinger chairs the General Government Budget Committee and works on administrative rules. That gives her real procedural leverage, even though she is not one of the most visible members of the House. Her public record in Hays is strongly tied to local infrastructure, especially the R9 Ranch water work that has been central to Hays's long-term water planning. She has also spoken publicly about taxes, education, and the idea that her job is to work through issues instead of just talking about them. Public coverage shows a legislator who is locally rooted, committee-active, and publicly comfortable with Catholic language in her own political speech.",
    "whatYouShouldKnow": [
      "She served eight years on the Hays City Commission before entering the Legislature",
      "She also served six years as an Ellis County commissioner",
      "She chairs the General Government Budget Committee in the House",
      "Her public church is St. Joseph Catholic Church in Hays",
      "Her public statements include explicit references to Judeo-Christian values",
      "A clean donor-by-donor table was not publicly available online"
    ],
    "whereTheyWorship": "Wasinger's worship home is publicly identified as St. Joseph Catholic Church in Hays. The church URL is https://www.stj-church.com/, and her public profile says she is active there. Her public record also shows Catholic parish service, not just membership. The sources identify her as a lector and an notable Minister of Holy Communion, which are recurring liturgical roles.",
    "church": {
      "name": "St. Joseph Catholic Church, Hays, KS",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.stj-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Roles: Lector; notable Minister of Holy Communion."
    },
    "quotes": [
      {
        "text": "My approach in Topeka is simple: talk less, listen more, and work together to actually get things done.",
        "source": "BarbForKansas.com, accessed April 1, 2026, https://barbforkansas.com/about/",
        "date": "2026-03-31",
        "url": "https://barbforkansas.com/about/",
        "topic": "Quotes"
      },
      {
        "text": "It’s an honor to serve the good people of Ellis County.",
        "source": "BarbForKansas.com, accessed April 1, 2026, https://barbforkansas.com/",
        "date": "2026-03-31",
        "url": "https://barbforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "Judeo-Christian values established a framework of morality which is necessary for our system of limited government.",
        "source": "iVoterGuide, accessed April 1, 2026, https://ivoterguide.com/candidate/48696/race/11694/election/797",
        "date": "2026-03-31",
        "url": "https://ivoterguide.com/candidate/48696/race/11694/election/797",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$11,134.20 (House filing coverage: 01/01/2025 to 12/31/2025)",
      "narrative": "Campaign finance records are available through Kansas state systems, but a clean donor-by-donor table was not publicly available online. The public record confirms that a state filing trail exists, but not every contribution was readily usable as a clean customer-facing ledger.",
      "donors": [
        {
          "name": "DoorDash, Inc.",
          "amount": "$500.00"
        },
        {
          "name": "International Union of Elevator Constructors Political Account",
          "amount": "$250.00"
        },
        {
          "name": "Amarok Ultimate Perimeter Security",
          "amount": "$250.00"
        },
        {
          "name": "Operating Engineers Local 101",
          "amount": "$500.00"
        },
        {
          "name": "POM of Kansas LLC",
          "amount": "$500.00"
        },
        {
          "name": "Kansas Livestock",
          "amount": "$500.00"
        },
        {
          "name": "Kansas Bankers Association PAC",
          "amount": "$500.00"
        },
        {
          "name": "Barbara Wasinger",
          "amount": "$2,792.50"
        }
      ],
      "undisclosed": "The posted House PDF contains additional donors beyond the sample listed here.",
      "reportingPeriod": "2025 year-end (2026 House cycle)",
      "source": "Kansas House ethics filing H111BW_202601"
    },
    "sources": [
      {
        "title": "Barbforkansas.Com",
        "url": "https://barbforkansas.com/about/"
      },
      {
        "title": "Barbforkansas.Com",
        "url": "https://barbforkansas.com/"
      },
      {
        "title": "Stj-church.Com",
        "url": "https://www.stj-church.com/"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/campaign-finance/"
      },
      {
        "title": "Ivoterguide.Com",
        "url": "https://ivoterguide.com/candidate/48696/race/11694/election/797"
      },
      {
        "title": "Barbwasinger.Com",
        "url": "https://barbwasinger.com/",
        "publication": "Barbwasinger.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Justfacts.Votesmart.Org",
        "url": "https://justfacts.votesmart.org/candidate/145676/barb-wasinger",
        "publication": "Justfacts.Votesmart.Org",
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
    "whoTheyAre": "Mason Ruder is the mayor of Hays and a member of the Hays City Commission. Public records describe him as a Certified Public Manager and a Fort Hays State University graduate, and earlier Hays Catholic Schools material identifies him as part of the Catholic school system in Hays. He is also tied to Hays civic life in a very local way. Public materials connect him to NWKEICI business services work, to family ties in Hays civic government, and to the younger-generation side of the city's public institutions. His public identity is strongly local. The visible parts of his biography are Hays, Catholic schools, city government, and the water and growth debates that shape the city.",
    "theirRecord": "Ruder has served on the Hays City Commission since 2019 and became mayor during the January 2026 reorganization. During COVID, he served as mayor and spoke publicly about the city's response and about the pressure on local leaders. His public actions include defending the controversial Hays water transfer project before the Kansas House Local Government Committee in January 2026 and helping push the city toward long-term water planning. He also created a youth advisory board for Hays High and TMP-Marian students so they could advise the city commission directly. The public record also shows him writing and speaking beyond city meetings. In September 2025 he gave a 9/11 anniversary speech that Kansas Press Association turned into a feature under his name.",
    "whatYouShouldKnow": [
      "He is the mayor of Hays and a city commissioner",
      "He was the youngest city commissioner in Hays history",
      "He testified in Topeka on the Hays water transfer project",
      "He created a youth advisory board for Hays High and TMP-Marian students",
      "He has a public Catholic identity tied to Immaculate Heart of Mary Parish",
      "No public campaign finance report was readily available online"
    ],
    "whereTheyWorship": "Ruder's Catholic identity is publicly identified. Hays Catholic Schools materials say he is a member of Immaculate Heart of Mary Parish in Hays, and the parish URL is https://www.ihm-church.com/. The public record also ties him to the Catholic school system in Hays, which makes the parish connection part of his broader civic identity rather than a standalone biographical note.",
    "church": {
      "name": "Immaculate Heart of Mary Parish, Hays",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.ihm-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Parish Address: 1805 Vine St, Hays, KS 67601."
    },
    "quotes": [
      {
        "text": "Faith and family have always provided a solid foundation.",
        "source": "Hays Catholic Schools, November 30, 2022, https://www.hfehays.org/o/hfe/article/923439",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "Quotes"
      },
      {
        "text": "It was about getting youth involved in our community a little more and having that direct connection to the city commission and really influence change.",
        "source": "Hays city commission youth advisory board coverage, 2026, https://www.hayspost.com/",
        "date": "2026-03-31",
        "url": "https://www.hayspost.com/",
        "topic": "Quotes"
      },
      {
        "text": "True government means disagreeing and working things out.",
        "source": "Hays city commission coverage, 2026, https://www.hayspost.com/",
        "date": "2026-03-31",
        "url": "https://www.hayspost.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No public campaign finance report was readily available online. Public coverage is much stronger on city minutes, Catholic school sources, and the water-transfer record than on receipts or donor lists. No public donor ledger was available online.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission"
      },
      {
        "title": "Hfehays.Org",
        "url": "https://www.hfehays.org/o/hfe/article/923439"
      },
      {
        "title": "Ihm-church.Com",
        "url": "https://www.ihm-church.com/"
      },
      {
        "title": "Kspress.Com",
        "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://www.hayspost.com/"
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
    "whoTheyAre": "Alaina Cunningham is the vice mayor of Hays and a sitting city commissioner. Public records describe her as a registered nurse and ACE-certified group fitness instructor at HaysMed, and she originally came to Hays from Dodge City. She is one of the commission's least noisy members, but her public profile is still built around healthcare, community boards, and city service. Cunningham was appointed to fill the unexpired term left by Michael Berges and then won election to a full term in 2023. She has also served as president of the HaysMed Foundation board for many years and has been active in other local boards. Her public record is more community-involvement driven than partisan.",
    "theirRecord": "Cunningham's record centers on water, housing, economic development, and the city's long-term ability to keep residents and retirees. She has treated sustainable water supply as a central issue and has supported the kinds of development incentives the city uses to keep housing and businesses moving. She was elected vice mayor in January 2026 when the commission reorganized. Her public comments tend to connect city finance, housing supply, and quality-of-life questions instead of treating them as separate fights. That gives her a straightforward administrative profile.",
    "whatYouShouldKnow": [
      "Cunningham moved into city government through appointment before winning a full term in her own right",
      "Her background is healthcare and civic board work, not law or partisanship",
      "She was chosen vice mayor by her fellow commissioners in 2026",
      "She has publicly addressed water, housing, and sustainable growth",
      "Her record is relatively low-drama and service-oriented",
      "No major public controversy surfaced in the cited coverage"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Cunningham. The public record covered nursing, civic boards, and city service rather than a named congregation.",
    "quotes": [
      {
        "text": "I feel it is my duty to serve the public and 'Do Good.'",
        "source": "Hays Post, 2023-10-25, https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "Quotes"
      },
      {
        "text": "We are all aware how valuable water is to our area.",
        "source": "Hays Post, 2023-10-25, https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "Quotes"
      },
      {
        "text": "You (staff) brought us a constrained budget which is what we asked for.",
        "source": "Alaina Cunningham campaign materials",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "topic": "ALAINA CUNNINGHAM -- Vice Mayor, City Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No public campaign finance report was readily available online for Cunningham. Public coverage is much stronger on city minutes, candidate Q&A, and local media than on formal committee filings.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "most recent public materials reviewed",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/26608269-25e1-4f29-b80f-d2edbb3bba3d"
      },
      {
        "title": "Haysmed.Com",
        "url": "https://www.haysmed.com/services/chi-what-we-offer/"
      },
      {
        "title": "Lkm.Org",
        "url": "https://www.lkm.org/members/?id=50545549"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01042024-1458"
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
    "whoTheyAre": "Shaun Musil is a longtime Hays city commissioner and former mayor who has spent more than a decade in city government. He works as an account representative for Nex-Tech and has lived in Hays for roughly 30 years. In local reporting, he comes across as a steady, low-key official whose public identity is tied to city operations more than partisan branding. Musil and his wife Heather co-owned the Paisley Pear Wine Bar, Bistro and Market in downtown Hays until they sold it in 2024. He also served as mayor during the COVID period, which put him at the center of one of the city's most difficult public-health and ordinance debates. His public record shows a person who has stayed in Hays for the long haul and built his civic reputation around practical city management.",
    "theirRecord": "Musil's record is dominated by the R9 water project and the broader question of how Hays grows without breaking its utility system. In his candidate Q&A and election coverage, he repeatedly described the water project as unfinished business and a generational necessity. He also framed retail growth and a stronger sales-tax base as part of the city's financial stability. He has backed housing policy changes, including RHID and other adjustments that he says have helped new houses get built. Public coverage also shows him treating sustainability and city services as linked questions rather than separate fights. That makes him one of the more policy-oriented commissioners on the board, even if he does not talk like a national politician.",
    "whatYouShouldKnow": [
      "Musil has been on the commission long enough to shape the city's water, housing, and retail debates over multiple election cycles",
      "He treats the R9 water project as the main unfinished task facing Hays, not as a side issue",
      "He has said Hays needs retail growth and a stronger sales-tax base to stay financially healthy",
      "His wife Heather's work in education and their former Paisley Pear ownership give him a visible downtown connection, but his public record is still centered on city government",
      "He was mayor during the COVID era, voted for the mask ordinance, and later said his family faced vandalism and threats because of that decision",
      "No major public ethics complaint or scandal surfaced in the reviewed sources"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Musil. The public record centered on city service, business ownership, and the R9 debate rather than faith identity or a named congregation.",
    "quotes": [
      {
        "text": "I think we have some unfinished business. For me, mainly, it's our water project.",
        "source": "Hays Post, 2025-10-24, https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "topic": "Quotes"
      },
      {
        "text": "He was scared to death making those decisions, but the people came out of the woodwork thanking us.",
        "source": "Hays city COVID coverage, 2020, https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
        "topic": "Quotes"
      },
      {
        "text": "This shows that we're serious about development. ... We need retail. It's a priority.",
        "source": "Hays Post, 2024-12-07, https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No public campaign finance report was readily available online for Musil. Public coverage is much stronger on city coverage, candidate Q&A, and election results than on donor-by-donor finance detail.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/273/Shaun-Musil"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/39d62580-9e3b-4536-85da-783f3cfe22bd"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1afb725b-f6c4-4d09-93de-94b9008ba5ae",
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
    "whoTheyAre": "Sandy Jacobs is a Hays city commissioner, former mayor, and retired banker who has spent years in local public life. The public record describes her as a native Hays resident who moved from banking into city government and now serves as one of the commission's more experienced members. Her biography is rooted in local continuity rather than a big political brand. Jacobs' background is in finance and nonprofit work. She retired from Sunflower Bank after serving as executive vice president and later led the Heartland Community Foundation before retiring from that role in 2020. On the commission, she is known for a calm, collaborative style and for treating infrastructure and budgeting as long-term stewardship tasks.",
    "theirRecord": "Jacobs' record is closely tied to the R9 water project, housing, park spending, and the city's budget process. She has supported the city through repeated water discussions and has treated the pipeline issue as a core long-term responsibility rather than a one-off capital item. She was elected mayor before the 2026 reorganization, when the commission chose Mason Ruder as mayor and Alaina Cunningham as vice mayor. Her public comments also show a willingness to defend revenue-neutral budgeting and a conservative tax posture while still supporting city investment in key infrastructure and development work.",
    "whatYouShouldKnow": [
      "Jacobs is one of the city's longest-serving and most experienced elected officials",
      "She has been a steady supporter of the R9 water effort for years",
      "Her public comments in Hays Post coverage keep returning to water, retail development, and sustainable budgets rather than partisan conflict",
      "She brings banking and foundation-management experience into city government",
      "She has supported housing and infrastructure decisions while defending tax restraint",
      "No major public controversy surfaced in public sources"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Jacobs. The public record centered on city leadership, water policy, and budgeting rather than church identity or parish membership.",
    "quotes": [
      {
        "text": "I've served for eight years, and my passion continues to be for this city as a native.",
        "source": "Hays Post, 2025-10-22, https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "Quotes"
      },
      {
        "text": "I'm very focused on retail development in this community, as are many. I think we need to be looking at everything possible we can do to make ourselves attractive to people out there, and I know Grow Hays is working closely with a broker to find (it).",
        "source": "Hays Post, 2024-12-07, https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
        "topic": "Quotes"
      },
      {
        "text": "I continue to say we're rock stars compared to other communities, and I think that will continue if we keep our heads where they're at, understand that we don't want to overspend, that we don't want to put a budget out there that is not sustainable.",
        "source": "Hays Post, 2025-07-09, https://hayspost.com/posts/ab9f126e-6b0d-4482-9212-ba76a853c772",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ab9f126e-6b0d-4482-9212-ba76a853c772",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No public campaign finance report was readily available online for Jacobs. Public coverage is much stronger on city leadership and budget coverage than on donor-by-donor finance detail.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/270/Sandy-Jacobs"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/021a5674-353e-46c4-b816-42284ec8514b"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ab9f126e-6b0d-4482-9212-ba76a853c772"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b"
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
    "whoTheyAre": "David Vilaysing is a Hays city commissioner, retired Hays police sergeant, and owner of DXI Training Solutions. He has 19 years with the Hays Police Department plus military police experience, and local reporting describes him as someone who moved from frontline public safety into training and civic leadership. He is one of the newer elected faces on the commission, but his public-service background is substantial. Vilaysing's company provides de-escalation, tactical communication, self-defense, and first-responder training. He is also active in the wider training community through ILEETA. His public image is rooted in law enforcement, practical safety work, and a desire to stay connected to the Hays community after leaving the police department.",
    "theirRecord": "Vilaysing was elected to the Hays City Commission in 2025 on a platform about water, housing, and transparency. His first set of public comments and questions as a commissioner were about the R9 water process, city operations, and the cost of ordinary city services such as pet licensing. He has also pushed practical questions about city costs, including pet licensing and whether the program is worth its annual expense. That kind of detail-oriented, operational approach fits his background in policing and training more than a traditional political profile.",
    "whatYouShouldKnow": [
      "Vilaysing entered office with 22 years of combined law-enforcement and military-police experience",
      "He runs a training company, not a political consulting operation",
      "His public questions as a commissioner have been about water, housing, city transparency, pet licensing costs, and basic city operations",
      "He was elected in 2025, so his city-government record is still early",
      "He has no major public controversy in the source set I reviewed",
      "His commission style reads as practical and operational rather than ideological"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Vilaysing. The public record covered his law-enforcement work, his training company, and his first year on the commission rather than faith identity.",
    "quotes": [
      {
        "text": "I knew at my core I missed giving back to my community.",
        "source": "Hays Post, 2025-10-25, https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "Quotes"
      },
      {
        "text": "David began his employment with the Hays Police Department in 2005 as a Police Officer.",
        "source": "Hays Post, 2020-11-15, https://hayspost.com/posts/40e17885-6833-42a5-9562-0abd9f173b21",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/40e17885-6833-42a5-9562-0abd9f173b21",
        "topic": "Quotes"
      },
      {
        "text": "The most important factor in de-escalation is an officer's self-control.",
        "source": "David Vilaysing campaign materials",
        "date": "2026-03-31",
        "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
        "topic": "DAVID VILAYSING -- Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No public campaign finance report was readily available online for Vilaysing. Public coverage is more detailed on his police career and candidate Q&A than on committee filings.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/40e17885-6833-42a5-9562-0abd9f173b21"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
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
    "whoTheyAre": "Toby Dougherty is the Hays city manager, an appointed administrator who has been the city's top staff leader since 2007. He previously served as assistant city manager and is the person who translates commission decisions into the budget, capital planning, and day-to-day city work that most residents never see. His public identity is administrative rather than electoral. Dougherty has a University of Kansas political science background and spent time in the transportation industry before moving into municipal government. He also served as city administrator in Gallatin, Missouri. In Hays, he has become the central operator behind long-term planning, especially on water and infrastructure.",
    "theirRecord": "Dougherty's record is defined by water, conservation, and the R9 Ranch Water Pipeline. He helped steer the city through repeated legal and policy battles over the transfer and has been the staff voice explaining why Hays treats water as a generational issue. He has also overseen budgets that emphasize maintenance and caution rather than aggressive expansion. In local coverage, he is the person explaining street maintenance, water meter replacement, and airport lighting upgrades in plain language so the public and commissioners can follow what is happening.",
    "whatYouShouldKnow": [
      "Dougherty has run Hays city administration for nearly two decades",
      "He is appointed, not elected, so his power comes from long institutional continuity",
      "His signature issue is the R9 water pipeline and the city's conservation strategy",
      "He is the person the city relies on to explain pipeline costs, water conservation, bond rolloff, and other infrastructure details to the public",
      "He is closely associated with maintenance-first budgeting and capital planning",
      "No major personal controversy surfaced in public sources"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Dougherty. The public record was almost entirely professional and administrative, with little to no personal faith reporting.",
    "quotes": [
      {
        "text": "The budget is based overall on a slightly cautionary approach.",
        "source": "Hays Post, 2025-06-22, https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "topic": "Quotes"
      },
      {
        "text": "The opponents in this have succeeded in weaponizing the legal and judicial system against Hays and Russell.",
        "source": "Hays Post / Kansas water coverage, 2024, https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/",
        "topic": "Quotes"
      },
      {
        "text": "Securing this Build Kansas grant marks a significant step forward.",
        "source": "Hays Post / Kansas water coverage, 2025, https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
        "date": "2026-03-31",
        "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Not applicable",
      "narrative": "Not applicable in the same way as an elected candidate. No public political finance filing is associated with Dougherty.",
      "donors": [
        {
          "name": "Campaign finance",
          "amount": "Not applicable"
        }
      ],
      "reportingPeriod": "not applicable",
      "source": "Reviewed public records"
    },
    "sources": [
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/149/City-Managers-Office"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/Directory.aspx?DID=6"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/292e6398-09de-4575-8f00-59772bbb0c0c"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/92c6bbf2-25be-47de-ad1c-a2e44e17e420"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/84fcc453-7b77-49a8-a26e-b9011a8d1597"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/227c6d39-b8a1-4133-9b9a-8843072fe5a2"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/"
      },
      {
        "title": "Kwch.Com",
        "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/"
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
    "campaignWebsite": "https://www.elliscountyks.org/162/Sheriff",
    "whoTheyAre": "Scott Braun is the elected Ellis County Sheriff and a long-tenured local law-enforcement officer. The public record ties him to Victoria High School, Barton County Community College, Fort Hays State University, and more than two decades of service with the Ellis County and Ellis Police departments before he won the sheriff's race. He is also publicly identified as a Catholic. The record ties him to St. Nicholas of Myra Catholic Church in Hays through parish council leadership and Knights of Columbus involvement, and the public material makes clear that this is a visible part of his public life. Braun's biography is unusually local and unusually complete for a county officeholder. It is built around law enforcement, Hays-area schools, and Catholic parish life.",
    "theirRecord": "Braun's public work has focused on jail capacity, county enforcement, and how the sheriff's office interacts with other agencies. He has been one of the clearest voices in the county's jail-expansion discussion, arguing that the existing facility is not enough for the county's needs. He has also spoken publicly about ICE detainers and county limits. The record shows him explaining what the sheriff's office can and cannot do, rather than presenting county authority as broader than it is. His office record is reinforced by the annual workload statistics in the raw material, which show the kind of transport, security, and call volume the sheriff's office handles in a typical year.",
    "whatYouShouldKnow": [
      "He is the elected Ellis County Sheriff",
      "He has a long local law-enforcement career before becoming sheriff",
      "He has said the county needs a jail, even though he does not like the idea, and has been one of the clearest public voices in the jail-expansion discussion",
      "He has explained the county's ICE detainer role in public interviews and has described the 48-hour pickup window used by the sheriff's office",
      "He is tied to St. Nicholas of Myra Catholic Church through parish leadership",
      "No public campaign finance ledger was available online"
    ],
    "whereTheyWorship": "Braun's worship home is publicly identified as St. Nicholas of Myra Catholic Church in Hays, and the parish URL is https://stn-church.com/. The diocesan listing is https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/. The public record also ties him to church council leadership and Knights of Columbus involvement, which makes his Catholic identity an active part of his public biography.",
    "church": {
      "name": "St. Nicholas of Myra Catholic Church, Hays",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://stn-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Role: Vice Chair, St. Nicholas of Myra Church Council."
    },
    "quotes": [
      {
        "text": "It has to be within that 48-hour window. We will not hold them one minute longer than that.",
        "source": "Hays Post, 2025-11-20, https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "topic": "Quotes"
      },
      {
        "text": "ICE has been really good with us in letting us know if they are going to pick them up within 48 hours or to let them go.",
        "source": "Hays Post, November 20, 2025, https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "topic": "Quotes"
      },
      {
        "text": "If forfeiture is taken away from law enforcement, it will have an effect on taxpayers.",
        "source": "JC Post / KSA coverage, https://jcpost.com/posts/0b4a5662-3939-49d6-808a-c3857ad67db9",
        "date": "2026-03-31",
        "url": "https://jcpost.com/posts/0b4a5662-3939-49d6-808a-c3857ad67db9",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No clean county-campaign donor table was available online. Public coverage is much stronger on office work, parish involvement, and policy positions than on donor-by-donor finance detail. No public donor ledger was available online.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Stn-church.Com",
        "url": "https://stn-church.com/"
      },
      {
        "title": "Salinadiocese.Org",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6"
      },
      {
        "title": "Elliscountyks.Org",
        "url": "https://www.elliscountyks.org/162/Sheriff"
      },
      {
        "title": "Jcpost.Com",
        "url": "https://jcpost.com/posts/0b4a5662-3939-49d6-808a-c3857ad67db9"
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
    "whoTheyAre": "Aaron J. Cunningham is the Ellis County Attorney in Hays, Kansas. The public record ties him to Hays High School, Kansas State University, and Washburn University School of Law, and the county office materials describe him as the elected county attorney rather than an assistant prosecutor. He returned to Hays after law school and has stayed rooted in the community he grew up in. His public biography is local, and Cunningham’s about.me profile uses Christian language to describe his worldview. The Hays civic record presents him as a hometown prosecutor who came back to serve.",
    "theirRecord": "Cunningham’s most visible action as county attorney was the decision to resume marijuana prosecutions after a prior pause. He has said that the Legislature, not the county attorney, decides what is criminal, and he has applied that logic to marijuana and hemp-derived Delta-8 and Delta-10 cases. That is a concrete policy choice, not a rhetorical one, and it shows how he understands the office. His office also handles the full weight of rural county prosecution: misdemeanors, felonies, juvenile matters, alcohol and drug care cases, child-in-need-of-care cases, and mental-illness related work. Public reporting shows Cunningham managing a backlogged office with limited attorney capacity while trying to keep victims informed and cases prioritized. That is a practical administrative record, not just a campaign biography.",
    "whatYouShouldKnow": [
      "Cunningham is a hometown Hays graduate who came back after law school and chose to build his career in Ellis County",
      "He reversed the prior marijuana-prosecution pause and has said the office must enforce the law as written",
      "He has also taken a hard line on hemp-derived Delta-8 and Delta-10 cases",
      "The county attorney’s office is not just a criminal docket; it also handles juvenile, drug, and child-in-need-of-care matters",
      "His public faith language is explicit and Christian, but no specific church home was publicly verified",
      "The public record for this office is stronger on prosecutorial action than on campaign-finance detail"
    ],
    "whereTheyWorship": "No specific church or denomination was verified in public sources. Cunningham does present himself in explicitly Christian terms on about.me, but no responsible current church URL was identified.",
    "quotes": [
      {
        "text": "I wanted to return to my hometown and serve my community.",
        "source": "Hays Post, February 17, 2025, https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "topic": "Quotes"
      },
      {
        "text": "I tend to be of the philosophy that whether or not something is a crime is up to the Legislature.",
        "source": "Hays Post, February 17, 2025, https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "topic": "Quotes"
      },
      {
        "text": "In a misdemeanor marijuana case, the victim is the state of Kansas at large with no individual attached to the case.",
        "source": "Aaron Cunningham campaign materials",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "Staff:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No candidate-specific county-attorney campaign finance ledger surfaced in public sources. The available record is office-focused rather than donor-focused.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/92/Attorney"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/Directory/Home/SingleStaff?EID=101"
      },
      {
        "title": "Kcdaa.Org",
        "url": "https://kcdaa.org/Sys/PublicProfile/52134000"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1"
      },
      {
        "title": "Hayshighguidon.Com",
        "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/"
      },
      {
        "title": "About.Me",
        "url": "https://about.me/aaron.cunningham"
      },
      {
        "title": "Fhsu.Edu",
        "url": "https://www.fhsu.edu/news/2021/03/fhsu-announces-inaugural-advisory-board-for-civic-learning-and-community-engagement",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_jud_1/documents/testimony/20250121_03.pdf",
        "publication": "Kslegislature.Gov",
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
    "whoTheyAre": "Bobbi L. Dreiling is the Ellis County Clerk and Election Officer. She won reelection in 2024 with 9,971 votes and serves as the county's top election administrator. The public record shows an ordinary Kansas county-office path: Hutchinson Community College, eight years as deputy clerk under Donna Maskus, then election to the clerk's office in 2020. Dreiling's job is not flashy, but it matters. She handles elections, tax-roll certification, commission minutes, and other county administrative work that shapes how the county operates. Her public reputation is built more on process and election administration than on ideology.",
    "theirRecord": "Dreiling's defining public issue has been election administration, especially the Fort Hays State polling-location fight. She closed the 601 Main site for low turnout and ADA reasons, combined precincts, and defended the decision with the number of registered campus voters she saw in the record. That made her a central figure in a very local but very visible access-versus-cost dispute. She also pushed procedural changes in the clerk's office. Her tenure includes revenue-neutral-rate mailings, election security cameras, Saturday early voting, and a notification system for voters. The one blemish in the record is the misprinted-ballots episode from her deputy-clerk years, but her later work shows a clerk tightening systems rather than improvising around them.",
    "whatYouShouldKnow": [
      "Dreiling is one of the few county officials whose entire public identity is tied to election administration",
      "She had eight years inside the clerk's office before taking the top job",
      "She won reelection comfortably in 2024 even after the campus polling-place fight",
      "Her office has pushed practical election changes like cameras, notifications, and early voting",
      "Public materials show very little about her personal life, which makes the office itself the main story",
      "A full donor ledger was not publicly available, but one county-committee expenditure tied to her race did surface in the public record"
    ],
    "whereTheyWorship": "No current church affiliation is documented in the cited sources for Dreiling. Her obituary and family material point to a devout Catholic background, and funeral services were held at St. Thomas Aquinas Catholic Church, but Public sources do not confirm a current parish membership from the sources reviewed.",
    "church": {
      "name": "Specific parish not named in obituary",
      "denomination": "Roman Catholic (devout)",
      "details": "Denomination: Roman Catholic (devout). Note: Passed away October 16, 2024."
    },
    "quotes": [
      {
        "text": "Because I know the office. You definitely need experience in the office. I enjoy serving the public. I enjoy working with people. Ellis County in general is a great employer to work for. I really like the job -- being deputy right now.",
        "source": "Ellis County Clerk Candidate: Bobbi Dreiling, October 28, 2020, https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "topic": "Quotes"
      },
      {
        "text": "We can promote it by doing public announcements. Letting [voters] know when advance voting is taking place. Letting them know where it is at and the hours and know where their poll sites are. Unfortunately, the budget does not allow for a lot of advertising.",
        "source": "Ellis County Clerk Candidate: Bobbi Dreiling, October 28, 2020, https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "topic": "Quotes"
      },
      {
        "text": "I am member of Election Infrastructure Information Sharing, which is part of the Department of Homeland Security. We get security alerts from the Department of Homeland Security.",
        "source": "Ellis County Clerk Candidate: Bobbi Dreiling, October 28, 2020, https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean candidate total verified from reviewed county materials",
      "narrative": "No clean candidate donor ledger surfaced in the public source set I reviewed. The clearest finance detail I found was a county Republican committee expenditure trail tied to her race, including a $999 text broadcast and a $50 meeting-room rental.",
      "donors": [
        {
          "name": "County Republican committee text broadcast for Clerk Bobbi Dreiling",
          "amount": "$999"
        },
        {
          "name": "Meeting-room rental tied to race activity",
          "amount": "$50"
        }
      ],
      "undisclosed": "The reviewed county-level material showed support spending tied to the race, but not a full candidate donor ledger.",
      "reportingPeriod": "most recent public county materials reviewed",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/93/Clerk"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/100/Register-of-Deeds"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1ca1d07e-cccf-4688-8fc2-5482906b6b6d"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1"
      },
      {
        "title": "Aclukansas.Org",
        "url": "https://www.aclukansas.org/give-hays-voters-their-poll/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/CentralComm/2024ElecCycle/202501/CC_EL_R_202501.pdf"
      },
      {
        "title": "Downingandlahey.Com",
        "url": "https://downingandlahey.com/obits/bobjane-bobbi-dreiling/"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/directory.aspx?EID=19",
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
    "whoTheyAre": "Nathan Leiker is the Ellis County Commissioner for District 3 and vice chair of the commission in 2026. He is a farmer and vice president of L5 Farms, with operations in Ellis and Rush counties and a long local agriculture background. The public record places him squarely inside the Hays-area farm and county-government world. Leiker graduated from TMP-Marian in 2004 and appears in the county's broader Catholic-heritage network, although no direct personal statement confirming current parish membership is documented. His public life is built around agriculture, county budgeting, and the practical math of running a farm in western Kansas.",
    "theirRecord": "Leiker has been one of the more fiscally conservative county commissioners, but his record is not just about saying no to spending. He supported the 2026 budget increase while arguing the county needed to justify each line item, and he framed mental-health funding as cheaper than building a larger jail. He also backed the Big Creek Estates housing approvals and said the county should work with the city of Hays on water and job growth. He has served on the county zoning board, the Kansas Hereford Association board, and other local bodies, which reinforces the sense that his county work is tied to the region's farm economy and land-use decisions.",
    "whatYouShouldKnow": [
      "Leiker is a working farmer who moved into county government from the agricultural economy",
      "He is the vice chair of the Ellis County Commission in 2026",
      "He tends to support county spending only when it is tied to long-term savings or infrastructure need",
      "He has been explicit that water, housing, and jobs are linked local issues",
      "Public coverage focuses more on his budget votes, farm background, and county infrastructure decisions than on personal biography",
      "The family and obituary trail strongly suggests a Catholic background, but no current church membership statement is documented"
    ],
    "whereTheyWorship": "The strongest evidence points toward St. Nicholas of Myra Catholic Church in Hays, but no direct statement from Leiker confirms current parish membership. The family-obituary trail and the St. Nicholas parish link make the Catholic connection strong, but I am treating it as an indicator rather than a hard confirmation. Parish URL: https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/.",
    "church": {
      "name": "Likely St. Nicholas of Myra Catholic Church, Hays (family connection)",
      "denomination": "Likely Roman Catholic",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "details": "Denomination: Likely Roman Catholic. The Leiker surname is one of the most prominent German-Catholic families in Ellis County history -- Peter Leiker of Obermunjou was one of the original delegates sent to scout settlement locations in Kansas for the Volga German Catholic community."
    },
    "quotes": [
      {
        "text": "I believe that the county should leave the sales tax alone.",
        "source": "Hays Post, 2022-07-19, https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "Quotes"
      },
      {
        "text": "We are too far behind to use those funds in any other manner.",
        "source": "Hays Post, 2022-07-19, https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "Quotes"
      },
      {
        "text": "The county should be proactive in recruiting new business for economic development.",
        "source": "Hays Post, 2022-07-19, https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No campaign finance data available online",
      "narrative": "No public itemized donor table surfaced in the materials. If county-level filings exist, they were not present in the source set I could verify here.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "undisclosed": "No searchable online donor ledger or filed campaign-finance report was located.",
      "reportingPeriod": "most recent public materials reviewed",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/120/County-Commission"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17"
      },
      {
        "title": "Manta.Com",
        "url": "https://www.manta.com/c/mhxwpdc/l5-farms-inc"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276"
      },
      {
        "title": "Salinadiocese.Org",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/"
      },
      {
        "title": "Haysmemorial.Com",
        "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/"
      },
      {
        "title": "Fhsuguides.Fhsu.Edu",
        "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty"
      },
      {
        "title": "Lkm.Org",
        "url": "https://www.lkm.org/members/?id=41501857",
        "publication": "Lkm.Org",
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
    "whoTheyAre": "Neal Younger is the Ellis County Commissioner for District 2 and the 2026 commission chairman. He is an electrician and plumber by trade, and the public record consistently presents him as a working county resident rather than a polished political operator. He won his seat in 2020 and is now in his second term. Younger's public biography is modest, and that is part of the point. He comes out of construction and trades, has a very limited digital footprint, and talks about county government in practical language. In a county where infrastructure, water, and budgets matter every year, that is a recognizable kind of officeholder.",
    "theirRecord": "Younger campaigned on the county spending too much money, but once in office he supported the 2026 budget increase because he thought mental-health funding was cheaper than building a jail. That combination of skepticism and pragmatism shows up repeatedly in his record. He has also been a steady voice on water, housing, and county-city coordination. He backed Big Creek Estates discussions, pushed for proactive economic development, and said the county should work with the city of Hays to get more water and higher-paying jobs. His record is policy-focused rather than personality-driven.",
    "whatYouShouldKnow": [
      "Younger is a trade worker first and a county commissioner second",
      "He is the longest-serving commissioner on the current board",
      "He supports close scrutiny of county spending but is willing to spend where he sees long-term savings",
      "He has no meaningful public controversy in the reviewed source set",
      "His public footprint is smaller than most county officials, and most of the record is budget meetings rather than campaign branding",
      "He is one of the clearest examples of a practical, budget-first commissioner in Ellis County"
    ],
    "whereTheyWorship": "No public church or denomination record was located for Younger in the source set. Public sources do not confirm any congregation or church URL for him because the public record did not verify one.",
    "quotes": [
      {
        "text": "We spent almost 13 hours going through each department, item by item, justifying costs and adjustments.",
        "source": "Hays Post, 2026, https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
        "topic": "Quotes"
      },
      {
        "text": "I believe that the county should leave the sales tax alone.",
        "source": "Hays Post candidate profile, 2020, https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "Quotes"
      },
      {
        "text": "We need to work with the city of Hays to get more water to Hays and higher-paying jobs.",
        "source": "Hays Post candidate profile, 2020, https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No campaign finance data available online",
      "narrative": "No public itemized donor table surfaced in the materials reviewed. The available record is almost entirely office activity and budget coverage.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "undisclosed": "No searchable online donor ledger or filed campaign-finance report was located.",
      "reportingPeriod": "most recent public materials reviewed",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/120/County-Commission"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6"
      },
      {
        "title": "Voterly.Com",
        "url": "https://voterly.com/politicians/DmRJRnnSKN/neal-younger"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4"
      },
      {
        "title": "Lkm.Org",
        "url": "https://www.lkm.org/members/?id=41501857",
        "publication": "Lkm.Org",
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
    "whoTheyAre": "Rebecca Herzog is the Ellis County Register of Deeds and one of the least publicly visible officeholders in the county. The official county page and the Kansas Register of Deeds Association both confirm her role in Hays. Beyond that, the public record stays almost completely quiet, which is itself a useful fact for a countywide office. Her record shows a person who appears to keep to the administrative side of government. She won the office in 2024 and took over the work of recording deeds, maintaining land indexes, and handling other document-recording functions under Kansas law. The office matters, even if the person holding it is intentionally low-profile.",
    "theirRecord": "Her public record is the office itself. The register of deeds is responsible for recording property documents and keeping records open to the public except where law limits access. The office is one of the county's core land-record institutions, which makes Herzog important even though she has almost no public-facing persona. The 2024 election result page confirms that she won the office countywide, and the county office page shows the service mission of the position. There is very little else in the public record to attach to her, which makes her a strong example of a county official whose work is administrative rather than personality-driven.",
    "whatYouShouldKnow": [
      "Herzog has one of the smallest public footprints of any county officeholder in the project",
      "Her job is administrative and legally important, not ceremonial",
      "She won election in 2024 and entered office in January 2025",
      "Public records do not provide much on her background, family, or church life",
      "The office records deeds, maintains land indexes, and must keep most records open to the public",
      "The public record is thin enough that the office itself is the main story"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Herzog. The public record did not identify a congregation or parish URL, and Public sources do not confirm one here.",
    "quotes": [
      {
        "text": "The goal of the register of deeds office is to provide quality public service to all citizens in a professional manner.",
        "source": "Ellis County Register of Deeds, https://www.ellisco.net/100/Register-of-Deeds",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "Quotes"
      },
      {
        "text": "This office files and records documents that pertain to real estate.",
        "source": "Ellis County Register of Deeds, https://www.ellisco.net/100/Register-of-Deeds",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "Quotes"
      },
      {
        "text": "All records in the register of deeds office are required by law to be open to the public.",
        "source": "Ellis County Register of Deeds, https://www.ellisco.net/100/Register-of-Deeds",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No campaign finance data available online",
      "narrative": "No candidate-specific public campaign finance ledger is available online, and no donor table or itemized county-race finance report is publicly attributed to Herzog.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "undisclosed": "No searchable online donor ledger or filed campaign-finance report was located.",
      "reportingPeriod": "most recent public materials reviewed",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/100/Register-of-Deeds"
      },
      {
        "title": "Ksrods.Com",
        "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496"
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
    "campaignWebsite": "https://www.ellisco.net/566/Treasury",
    "whoTheyAre": "Vernon Ruder Jr. is the Ellis County Treasurer in Hays, Kansas. The public record ties him to a career in finance and operations, including work as a financial advisor, district manager for E.A. Sween, and county solid-waste management before he became treasurer. He is one of the county’s more administrative officeholders. His biography also sits inside the Ruder family network that runs through Hays government. He is married to Ruth Ruder, sits in the same family orbit as Mayor Mason Ruder, and his public background is heavily shaped by Catholic schooling and Catholic-work connections in Hays. Even when the specific parish is not named, the family and school trail is strong.",
    "theirRecord": "Ruder’s clearest office action was the decision to add a $2.50 fee for walk-in motor-vehicle transactions. He said the fee was allowed by state law, helped fund the office, and reduced pressure on property taxpayers. The office also modernized its queue flow and customer handling, which makes the record more than just a fee hike. He says the fee raised more than $50,000 annually and helped reduce the treasury budget from $452,000 to $367,000. That is the kind of practical county-office result that matters to taxpayers even if it never becomes a big public fight.",
    "whatYouShouldKnow": [
      "Ruder is a county treasurer, not a campaign-style political figure",
      "His office is built around tax billing, motor-vehicle work, and customer flow",
      "He implemented a motor-vehicle fee and used the revenue to lower the office budget",
      "The public record places him in the broader Ruder family network that also includes city and school government",
      "His faith trail points strongly toward Catholic background, but no specific parish was confirmed",
      "No usable public donor ledger is available online"
    ],
    "whereTheyWorship": "The public record suggests a Catholic background through family and schooling, but no specific parish participation is documented for Vernon Ruder Jr. A related public parish URL is https://www.ihm-church.com/.",
    "church": {
      "name": "Specific parish not confirmed",
      "denomination": "Roman Catholic (strong indicators)",
      "url": "https://www.ihm-church.com/",
      "details": "Denomination: Roman Catholic (strong indicators). 2010 TMP-Marian graduate (Catholic high school)."
    },
    "quotes": [
      {
        "text": "The Ellis County Treasurer's Office ... is responsible for the tax billing, collection, and distribution.",
        "source": "Ellis County Treasury official page, https://www.ellisco.net/566/Treasury",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "Quotes"
      },
      {
        "text": "The Treasurer's Office also acts as an agent for the Kansas Department of Revenue.",
        "source": "Ellis County Treasury official page, https://www.ellisco.net/566/Treasury",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "Quotes"
      },
      {
        "text": "I feel like we should be funding our motor vehicle department with motor vehicle money.",
        "source": "Hays Post, November 20, 2023, https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No candidate-specific public campaign finance ledger is available online for Ruder. The current source set is office-focused rather than finance-focused.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Local reporting, county records, and reviewed public filings"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/566/Treasury"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494"
      },
      {
        "title": "Hdnews.Net",
        "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/"
      },
      {
        "title": "Kspress.Com",
        "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/directory.aspx?EID=129"
      },
      {
        "title": "Ihm-church.Com",
        "url": "https://www.ihm-church.com/"
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
    "whoTheyAre": "Ken Brooks is a Hays USD 489 board incumbent and one of the district's most visible local family-and-church figures. Public profiles identify him as a loss-control safety specialist at Insurance Planning, a Kiwanis member, and a long-time Hays parent whose three daughters all graduated from Hays High. He has spent most of his adult life in Hays. The public record shows a school-board member whose identity is built around family life, local service, and church involvement rather than around party politics. Brooks also appears regularly in district materials because he occupies a central role on a board that has been managing one of the largest school-building efforts in western Kansas.",
    "theirRecord": "Brooks's record on the board is about facilities, fees, and general oversight. He supported the district's bond work, backed the new Hays High construction, and repeatedly discussed how the district should handle costs for families. He has also taken a pro-oversight position without trying to micromanage daily administration. In his public Q&A material, he said the board should trust Superintendent Ron Wilson and the finance team to answer budget questions, while still giving the board broad responsibility for accountability. His public comments show a consistent pattern: support the bond work, keep fees down for families, and avoid letting daily operations drift while the district finishes the construction work.",
    "whatYouShouldKnow": [
      "He is a USD 489 board incumbent and a current board leader",
      "He has helped lead children's ministry at Celebration Community Church for nearly 14 years",
      "He supported the district bond and the Hays High facilities buildout",
      "He has repeatedly argued for lower student fees",
      "He presents himself as a local service figure, not a partisan operator",
      "No itemized donor ledger surfaced in public materials"
    ],
    "whereTheyWorship": "Brooks publicly identifies Celebration Community Church in Hays as his worship community. The Hays campus is at https://www.celebratejesus.org/hays-campus. His public profile says he has helped lead the children's ministry there for almost 14 years. That makes his church connection unusually specific and easy to verify.",
    "church": {
      "name": "Celebration Community Church, Hays, KS",
      "denomination": "Non-denominational / Evangelical",
      "details": "Denomination: Non-denominational / Evangelical. Church Role: Children's Ministry Leader (~14 years)."
    },
    "quotes": [
      {
        "text": "I have a love for our community, and I have a love for kids.",
        "source": "Hays Post candidate Q&A, 2025, https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220",
        "topic": "Quotes"
      },
      {
        "text": "Since I've been on the board, we've lowered the school fees.",
        "source": "Hays Post candidate Q&A, 2025, https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
        "topic": "Quotes"
      },
      {
        "text": "I have helped lead the Children's Ministry at Celebration Community Church for almost 14 years.",
        "source": "Hays Post profile, 2021, https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No campaign finance data available online",
      "narrative": "No itemized donor ledger surfaced in public materials. The clearest finance note available is that his 2021 candidate profile said he had not taken outside money or in-kind support from a PAC or other outside source. That makes Brooks look like a locally rooted, low-dollar school-board campaign rather than a money-heavy race.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "undisclosed": "No searchable online donor ledger or filed campaign-finance report was located.",
      "reportingPeriod": "most recent public materials reviewed",
      "source": "Candidate questionnaires, local reporting, and reviewed public records"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf"
      },
      {
        "title": "Celebratejesus.Org",
        "url": "https://www.celebratejesus.org/hays-campus"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
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
        "title": "Celebratejesus.Org",
        "url": "https://www.celebratejesus.org/",
        "publication": "Celebratejesus.Org",
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
    "whoTheyAre": "Curt Vajnar is the president of the USD 489 Board of Education in Hays, Kansas. He is a retired teacher, rancher, and business owner who spent 31 years in USD 489 and won Kansas Teacher of the Year during his teaching career. Vajnar’s public identity is tied to Hays education and to rural Catholic life. He is a parish council member at Our Lady, Help of Christians Catholic Church in Antonino, and the sources also tie him to a long family life in Hays, five children, and a long-running role in local school and youth activities.",
    "theirRecord": "Vajnar has built a public record as one of the board's more skeptical voices on contracts, bond oversight, and board process. He has argued for a 10-year facilities plan instead of a shorter horizon, pushed for evening meetings and public video access so more residents can watch school-board business, and pressed the district to treat bond and naming-rights dollars with a long-term replacement-reserve mindset. He also took clear public positions on several concrete disputes. He voted against the Hays High/Roosevelt construction contract after saying board members had not had enough opportunity to review it. He voted against hiring Superintendent Ron Wilson's wife Andrea through the consent agenda and pushed for closer review of the district's nepotism policy. He also pulled the Golden Belt Bank naming-rights deal from the agenda because he thought the price and terms were too weak and that other businesses should be able to compete for the opportunity.",
    "whatYouShouldKnow": [
      "Vajnar taught in USD 489 for 31 years and won Kansas Teacher of the Year",
      "He is the board president, so he helps shape agendas and meeting procedure, not just individual votes",
      "He publicly pushed for more transparency by arguing that board meetings, work sessions, and special meetings should be held in the evening, recorded, and made available to the public",
      "He voted against the Hays High/Roosevelt construction contract after saying he did not believe board members had enough opportunity to review and understand the agreement before approval",
      "He opposed hiring Superintendent Ron Wilson's wife Andrea through the consent agenda and later pushed for tighter review of the district's nepotism policy",
      "He removed the proposed Golden Belt Bank football field naming-rights deal from the agenda, arguing the district should not lock itself into a 10-year deal without testing whether other businesses would offer more",
      "He is a confirmed Catholic and serves on the parish council at Our Lady, Help of Christians in Antonino",
      "The public record does not show a strong campaign-finance trail"
    ],
    "whereTheyWorship": "Curt Vajnar is publicly tied to Our Lady, Help of Christians Catholic Church in Antonino. The record shows him as a parish council member. Church URL: https://www.ihm-church.com/.",
    "church": {
      "name": "Our Lady, Help of Christians Catholic Church, Antonino, KS",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.ihm-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Role: Parish Council Member."
    },
    "quotes": [
      {
        "text": "I did not believe he had an opportunity to educate himself on the contract.",
        "source": "Hays Post board coverage, 2025, https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
        "topic": "Quotes"
      },
      {
        "text": "We have half of the bond left. I agree we are way late. It doesn't hurt. Let's see what we can do... It is something fiscally important that we do so we are accountable to our taxpayers.",
        "source": "Hays Post board coverage, 2025, https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "topic": "Quotes"
      },
      {
        "text": "Communication is a key component of trying to regain and establish trust, including communication between the entire school community and the opinions of the minority.",
        "source": "Hays Post board coverage, 2025, https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No reliable public itemized donor table is available for Vajnar. Public coverage is stronger on biography and board governance than on contribution detail.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Candidate questionnaires, local reporting, and reviewed public records"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df"
      },
      {
        "title": "Doczz.Net",
        "url": "https://doczz.net/doc/6776409/3rd-degree-monthly-newsletter---immaculate-heart-of-mary-church"
      },
      {
        "title": "Ihm-church.Com",
        "url": "https://www.ihm-church.com/"
      },
      {
        "title": "Emporia.Edu",
        "url": "https://www.emporia.edu/teachers-college/about-college/honors-awards/kansas-master-teacher-award-home/previous-winners/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126"
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
    "whoTheyAre": "Ruth Ruder is a USD 489 school board member and vice president in Hays, Kansas. She grew up in Hays, graduated from Hays High in 1988, and spent 30 years at Golden Plains Credit Union, including more than 15 years as vice president. The public record places her inside the local finance and family network that runs through Hays. Her family connection is a major part of her public identity. She is married to Vernon Ruder Jr., the Ellis County Treasurer, and she is the mother of Mason Ruder, the mayor of Hays. That means the Ruder family occupies elected roles across county, city, and school government.",
    "theirRecord": "Ruder’s board record is practical and generally pro-administration, but she is willing to slow down decisions that do not obviously help students. She has supported technology and bond-related spending while also asking whether land or sponsorship transactions actually serve a public purpose. Her comments about taxpayer responsibility, district employees, and the board’s duty to children show a steady, budget-minded approach.",
    "whatYouShouldKnow": [
      "Ruder is a Hays High graduate who spent three decades at Golden Plains Credit Union",
      "She is already on the USD 489 board, so her votes are part of the public record",
      "She is part of a family that also includes the Hays mayor and the Ellis County treasurer",
      "She has a tendency to ask whether a transaction or purchase really serves students",
      "Her public faith trail is thin, and no verified church home was publicly identified",
      "No donor-by-donor campaign finance ledger was available online"
    ],
    "whereTheyWorship": "Public sources do not identify Ruth Ruder's church home or denomination.",
    "quotes": [
      {
        "text": "My first obligation, if elected, will be to the children in our district.",
        "source": "Hays Post, 2023 candidate profile, https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "Quotes"
      },
      {
        "text": "All employees of USD 489 are equally important.",
        "source": "Hays Post, 2023 candidate profile, https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
        "topic": "Quotes"
      },
      {
        "text": "I will do my best at representing the taxpayer in being fiscally responsible.",
        "source": "Hays Post, 2023 candidate profile, https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No campaign finance data available online",
      "narrative": "No public itemized donor table was available online for Ruder. The public record was enough to confirm her board role and local profile, but not enough to reconstruct a reliable donor ledger.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "undisclosed": "No searchable online donor ledger or filed campaign-finance report was located.",
      "reportingPeriod": "most recent public materials reviewed",
      "source": "Candidate questionnaires, local reporting, and reviewed public records"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/fc95a5ee-b8b3-4d06-b876-7cba2008d1cb"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
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
    "whoTheyAre": "Derek Yarmer is a Hays USD 489 board member and an emergency medicine physician at HaysMed. He grew up in Albert, attended Otis-Bison schools, earned a chemistry degree from Fort Hays State, completed medical school at the University of Kansas, and finished an emergency-medicine residency at UMKC. He and his wife Emily moved back to Hays in 2015. Yarmer’s public identity is medical and local. He is the only physician on this part of the board, and he speaks from the perspective of a parent with children in USD 489 schools. His biography is easy to verify because it runs through Albert, Otis-Bison, FHSU, KU, UMKC, and HaysMed.",
    "theirRecord": "Yarmer has asked for bids and board review before major purchases, pushed for earlier agendas, and argued that if everything is treated like an emergency then nothing is. He has also been the board member most willing to draw a hard line on parental rights. During emergency policy revisions, he said he did not think parents give up their rights between 8 and 3, and he has generally framed classroom decisions through the lens of core academics and fiscal restraint.",
    "whatYouShouldKnow": [
      "Yarmer is a practicing emergency physician, not a full-time politician",
      "He moved through a local-to-state medical path that is unusual for a school-board member",
      "He has three children in USD 489 schools, so his comments are tied to family life",
      "He is one of the board’s strongest voices for spending scrutiny and earlier public review",
      "He has made parental rights and core academics central to his board comments",
      "No church or donor ledger was verified in the public material"
    ],
    "whereTheyWorship": "Public sources do not identify Derek Yarmer's church home or denomination.",
    "quotes": [
      {
        "text": "I want to be an advocate for the students' interests, as well as be fiscally responsible.",
        "source": "Hays Post candidate profile, 2023, https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "Quotes"
      },
      {
        "text": "I believe extra-curricular activities are important ... but the main responsibility of the school is to teach the core subjects.",
        "source": "Hays Post candidate profile, 2023, https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649",
        "topic": "Quotes"
      },
      {
        "text": "If everything is an emergency, then nothing is an emergency.",
        "source": "Hays Post board coverage, 2025, https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No public total verified; campaign appears self-funded or lightly funded",
      "narrative": "No reliable itemized donor table is publicly available for Yarmer. The public record supports a lightly documented local profile, but not a contribution ledger.",
      "donors": [
        {
          "name": "Public donor table",
          "amount": "No itemized ledger surfaced"
        },
        {
          "name": "Campaign profile",
          "amount": "Appears self-funded or lightly funded"
        }
      ],
      "undisclosed": "The reviewed material pointed to a small, lightly financed campaign rather than a robust donor network.",
      "reportingPeriod": "most recent public materials reviewed",
      "source": "Local reporting and reviewed public records"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390"
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
    "whoTheyAre": "Allen Park is a longtime USD 489 school board member and retired educator in Hays, Kansas. The public record shows a 31-year career in the district that included work as a paraprofessional, teacher, coach, migrant director, Washington Elementary principal, and transition coordinator. Park’s biography is rooted in school operations rather than politics. He and his wife Patti have spent decades in education, and all four of their children came through USD 489 from pre-K through Hays High. He also works part-time at UPS.",
    "theirRecord": "Park’s record is defined by stewardship, transparency, and caution around spending. He has been a consistent voice asking whether bond money, staffing decisions, and district purchases are being handled with enough scrutiny. He supported the facilities work tied to the bond but keeps returning to the question of whether spending is being reviewed carefully enough. He has 100 percent board-meeting attendance across four years, and his public finance answer was that his support came from family, friends, and community members who care about kids and education.",
    "whatYouShouldKnow": [
      "Park spent 31 years in USD 489 in roles ranging from classroom teacher to principal to migrant director",
      "He ran the transition when Washington Elementary closed, so he knows what district reorganization looks like in real life",
      "He has four children, and all four attended USD 489 schools",
      "He has asked questions about bond money, staffing decisions, and district purchases",
      "He says he has not taken money from outside the school district",
      "No current church affiliation is documented in the cited sources"
    ],
    "whereTheyWorship": "Public sources do not identify Allen Park's church home or denomination.",
    "quotes": [
      {
        "text": "Communication is a key component of trying to regain and establish trust. This means communication between the entire school community, including the opinions of the minority. All views need to be heard and discussed. Board meetings should establish a culture to be inclusive and transparent.",
        "source": "Hays USD 489 school board candidate: Allen Park, October 25, 2023, https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "topic": "Quotes"
      },
      {
        "text": "The school board has an awesome responsibility in the following months and years to ensure the bond process is executed correctly, timely, and fiscally responsibly. We need to be willing to invest the time and energy for meetings, conversations, visits to schools, and professional workshops. We need to do whatever it takes to accomplish these bond projects. Our decisions today have implications decades from now. I am the only board member that has 100 percent attendance at board meetings over four years. I am serious about this position and am willing to use my experience from previous 489 building projects and work with the board, administration and community in this process.",
        "source": "Hays USD 489 school board candidate: Allen Park, October 25, 2023, https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "topic": "Quotes"
      },
      {
        "text": "I have not received any money outside of the school district.",
        "source": "Hays Post, 2023 candidate profile, https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Allen Park reported a local, no-outside-money school-board finance profile",
      "narrative": "Park told Hays Post that he had not received money outside of the school district and that his support came from family, friends, and community members. No donor-by-donor public ledger was available beyond that statement.",
      "donors": [
        {
          "name": "Outside PAC/out-of-district money",
          "amount": "None reported"
        },
        {
          "name": "Support base",
          "amount": "Family, friends, and community members"
        }
      ],
      "undisclosed": "The public record supports a local, low-dollar school-board finance profile rather than a donor-by-donor PAC ledger.",
      "reportingPeriod": "most recent school-board materials reviewed",
      "source": "Candidate questionnaires, local reporting, and reviewed public records"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
      },
      {
        "title": "Fhsu.Edu",
        "url": "https://www.fhsu.edu/news/2020/05/pizza-kits-and-book-giveaways-set-for-monday-in-downtown-hays",
        "publication": "Fhsu.Edu",
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
    "whoTheyAre": "Jayme Goetz is a Fort Hays State University mathematics instructor and USD 489 board member from Hays, Kansas. She grew up in Hays, attended USD 489 schools, taught at Ellsworth for one year and at Hays High for seven years, and then returned to FHSU, where she now teaches algebra. She is a mathematics instructor at Fort Hays State University and a USD 489 board member. She is the parent of two young daughters in USD 489, which gives her a direct household stake in the district she helps oversee.",
    "theirRecord": "Goetz has been one of the board’s more transparency-focused members. She asked questions about how the district calculated raises, pushed for clearer discipline rules, and pressed the board to explain spending decisions in ways regular families could understand. That makes her record concrete even when the issue itself is procedural. She also backed some administration decisions, including laptops for Hays High students, while still challenging the board to be clearer and more accountable. Her record is therefore not a simple yes-or-no pattern; it is more like a teacher trying to make board decisions legible to parents and students.",
    "whatYouShouldKnow": [
      "Goetz is a lifelong Hays resident and a USD 489 graduate",
      "She taught at Hays High for seven years before moving to FHSU",
      "She has two daughters in the district, so school policy hits close to home",
      "Her board style is practical: she asks how decisions will work for families",
      "She is not a public faith figure, and no church home was verified in public sources",
      "The public record does not show a detailed donor ledger"
    ],
    "whereTheyWorship": "Public sources do not identify Jayme Goetz's church home or denomination.",
    "quotes": [
      {
        "text": "I have greatly enjoyed getting involved in all different levels of education.",
        "source": "Hays Post candidate profile, 2023, https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "Quotes"
      },
      {
        "text": "I believe in the importance of transparency and clear communication.",
        "source": "Hays Post candidate profile, 2023, https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
        "topic": "Quotes"
      },
      {
        "text": "Each decision that comes through the board impacts someone in our community.",
        "source": "Hays Post candidate profile, 2023, https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No reliable itemized donor table is publicly available for Goetz. The public record supports her biography and board actions, but not a clean contribution ledger.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Candidate questionnaires, local reporting, and reviewed public records"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/fc95a5ee-b8b3-4d06-b876-7cba2008d1cb"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
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
    "whoTheyAre": "Craig Pallister is a retired USD 489 principal and current school-board member in Hays, Kansas. The public record says he spent 21 years as a middle-school principal and three years as an assistant principal before that, and he also started in the district as a bus driver while he was still in college. His family history is tied tightly to the schools. His wife Sue is a retired teacher and librarian, all of their children attended USD 489, and he returned to the board in 2025 after previously serving as vice president and president.",
    "theirRecord": "Pallister’s public record centers on staffing, retention, and district resources. He has said the board needs to keep teacher, administrator, and staff retention high, and his comments about facilities and staffing come from years inside USD 489. He also has the kind of district memory that comes from having been a bus driver, an assistant principal, and a principal before becoming a board member.",
    "whatYouShouldKnow": [
      "Pallister spent 21 years as a middle-school principal and three years as an assistant principal in USD 489",
      "He started in the district as a bus driver, so he knows the system from the ground up",
      "His wife is a retired district teacher and librarian, and all of their children attended USD 489",
      "He returned to the board after losing by three votes in 2023",
      "His public comments keep returning to retention, recruitment, fees, and steady district operations",
      "No verified church home or donor ledger is documented in the public record"
    ],
    "whereTheyWorship": "No public record reliably identifies Craig Pallister's current church home.",
    "quotes": [
      {
        "text": "I worked for the school district as a middle school principal for 21 years, an assistant principal for three years prior to that.",
        "source": "Hays Post candidate Q&A, 2025, https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "Quotes"
      },
      {
        "text": "I have just been involved with education all my life.",
        "source": "Hays Post candidate Q&A, 2025, https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
        "topic": "Quotes"
      },
      {
        "text": "The USD 489 Board of Education needs to continue to make teacher, administrator and staff retention and recruitment a priority.",
        "source": "Hays Post candidate profile, 2023, https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No reliable itemized donor table is publicly available for Pallister. The public record supports his biography and board positions, but not a donor ledger.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Candidate questionnaires, local reporting, and reviewed public records"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
      },
      {
        "title": "Fhsu.Edu",
        "url": "https://www.fhsu.edu/news/2020/05/pizza-kits-and-book-giveaways-set-for-monday-in-downtown-hays"
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
    "whoTheyAre": "Ron Wilson is the superintendent of Hays USD 489. He is not an elected candidate in the material I reviewed, but he is the district's top administrator and the public face of the implementation side of school-board decisions. The public record places him at the center of the district's bond rollout, the Roosevelt addition, the new Hays High School project, staffing issues, and the capital-outlay debate. That is why he appears in this project at all: his decisions shape the environment every school-board candidate talks about. His public biography is more administrative than personal. I found the office, the district, and the facilities work much more clearly than I found any private background.",
    "theirRecord": "Wilson's record is the bond era itself. He has been the superintendent while the district built a new Hays High School, renovated Roosevelt Elementary, and continued managing the long-term consequences of those projects. He has also been public about the district's facilities needs. In one Hays Post opinion piece he said the district needed to stop settling for outdated schools, and in another story he said the baseball stadium would go from the district's best facility to its worst if the system did not keep investing. The more controversial part of his record came during the 2022 bond election, when he emailed district staff about vote turnout and later drew a public scrutiny report over that message. Even so, the public record still treats him mainly as the person who executes board decisions and keeps the district moving.",
    "whatYouShouldKnow": [
      "He is the superintendent of Hays USD 489",
      "He is not an elected candidate in public sources",
      "He was the public face of the district bond and construction work",
      "He was involved in the 2022 bond-election staff email controversy",
      "His public comments focus on facilities, staffing, and district operations",
      "No verified public church home or denomination is documented"
    ],
    "whereTheyWorship": "Public sources do not identify Ron Wilson's church home or denomination.",
    "quotes": [
      {
        "text": "If 100% of the eligible voters in your building vote before May 10th we will bring lunch for you one day before the end of school...The first building in our district to get 100% also gets dessert with their lunch!",
        "source": "district email reported by Hays Daily News, 2022-05-02, https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/",
        "date": "2026-03-31",
        "url": "https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/",
        "topic": "Quotes"
      },
      {
        "text": "We have to stop settling for the schools and facilities that we have, and we need to start building for schools that we deserve.",
        "source": "Hays Post, 2024, https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d",
        "topic": "Quotes"
      },
      {
        "text": "Our baseball stadium is probably the best facility we have now. However, in three years, it will go from being our best facility to our worst facility.",
        "source": "Hays Post, 2023, https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Not applicable",
      "narrative": "Not applicable. Wilson is an appointed superintendent, not a candidate running for office in public sources.",
      "donors": [
        {
          "name": "Campaign finance",
          "amount": "Not applicable"
        }
      ],
      "reportingPeriod": "not applicable",
      "source": "Reviewed public records"
    },
    "sources": [
      {
        "title": "Hdnews.Net",
        "url": "https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483"
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
