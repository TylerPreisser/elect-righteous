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

  whatTheyStandFor: [
    { issue: "Abortion", stance: "Supports restrictions on abortion. Co-sponsored the Born-Alive Abortion Survivors Protection Act and voted for the Pain-Capable Unborn Child Protection Act." },
    { issue: "Guns", stance: "Strong Second Amendment supporter. Endorsed by the NRA. Opposes new federal gun restrictions." },
    { issue: "Immigration", stance: "Supports the Secure the Border Act. Favors stricter border enforcement and opposes amnesty for undocumented immigrants." },
    { issue: "Government Spending", stance: "Consistently votes against large omnibus spending packages. Supported the REIN IN Inflation Act to cut federal spending." },
    { issue: "Agriculture", stance: "Sits on the House Agriculture Committee. Champions farm bill funding and crop insurance programs for western Kansas." },
    { issue: "January 6 Certification", stance: "Voted against certifying Arizona and Pennsylvania's electoral votes on January 6, 2021, after the Capitol breach." },
    { issue: "Energy", stance: "Supports the Energy Independence and Security Act and opposes regulations that restrict oil and gas production." },
    { issue: "Education", stance: "Supported the Parents Bill of Rights Act, giving parents more say in school curricula and library materials." },
  ],

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
    "education": "Has not taken a clear public position",
    "family": "Laina Marshall — married 40+ years; Not yet verified",
    "campaignWebsite": "https://kansansformarshall.com",
    "whoTheyAre": "Roger Marshall is Kansas's Republican U.S. senator, a physician from Great Bend, and one of the best-known statewide political figures in Kansas. He was born in El Dorado in 1960, grew up in a fifth-generation Kansas farm family, and moved to Great Bend in 1991 after medical training. Over the course of his OB-GYN career, he delivered more than 5,000 babies before entering politics. Marshall's public biography combines medicine, agriculture, and church life. He and his wife Laina have been married more than 40 years, and their family life has long been tied to Great Bend. Before the Senate, he represented Kansas's 1st Congressional District in the U.S. House, and he remains one of the few Kansas politicians whose public profile is simultaneously local, statewide, and national.",
    "theirRecord": "Marshall's Senate record is built around conservative positions on health care, abortion, immigration, spending, and COVID policy. He sits on major committees including Agriculture, Finance, HELP, and Budget, and he has used that platform to stay visible in both farm-state policy fights and national conservative media disputes. Two parts of that record are especially significant. First, he voted to object to the 2020 presidential election certification on January 6, 2021, putting him among the Republicans who continued to challenge electoral votes after the Capitol attack. Second, he has repeatedly drawn attention for a combative public style, including his clashes with Dr. Anthony Fauci and his March 2025 Oakley town hall, where he left early and later said the crowd included \"paid agitators.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Strongly pro-life with a 100% score from SBA Pro-Life America. His first bill as a U.S. Senator was pro-life legislation. He co-sponsored the Born-Alive Abortion Survivors Protection Act, opposes taxpayer funding of abortion, and has said he opposes abortion including in cases of rape and incest. He called for overturning Roe v. Wade and supported Kansas's \"Value Them Both\" amendment in 2022."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Strong supporter. He has called red flag laws a \"gun-grabbing scheme\" that \"violate the Second Amendment.\" He has sponsored bills including the Fire Arms Safety Act (tax credits for firearms safety courses), the Modern Firearms Safety Act (prohibit states from enforcing handgun rosters), and the Firearms Interstate Commerce Reform Act."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Hardline border hawk. Supports finishing the border wall, ending catch-and-release, and adding more border patrol agents. Supported the Secure the Border Act (H.R. 2). Has called Biden's border policy an \"open borders agenda\" and argued border security should be prioritized before foreign aid."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Healthcare / Spending",
        "stance": "Opposes government-run healthcare. As an OB-GYN who delivered over 5,000 babies, he frames healthcare through a physician's lens. He fought Dr. Fauci publicly over COVID policy and introduced the FAUCI Act. He opposes large government spending bills and has voted against continuing resolutions that don't include border security funding."
      },
      {
        "issue": "Tariffs / Agriculture",
        "stance": "Supports Trump tariff policies, though multiple Democratic challengers argue these tariffs hurt Kansas farmers. Has been criticized for failure to pass the Farm Bill."
      },
      {
        "issue": "January 6 / Election Certification",
        "stance": "Voted to object to the 2020 presidential election certification on January 6, 2021. He later said he believed \"six states broke their own laws or their own constitution\" but that \"it's time to move on.\""
      }
    ],
    "whatYouShouldKnow": [
      "Marshall spent more than 25 years as an OB-GYN in Great Bend before entering Congress",
      "He first won the U.S. House seat in 2016 and then the U.S. Senate seat in 2020",
      "He voted to object to the 2020 election certification on January 6, 2021",
      "He publicly fought with Dr. Anthony Fauci during a Senate hearing and later introduced the FAUCI Act",
      "He left an Oakley town hall early in March 2025 and later described the audience as containing \"paid agitators",
      "He has long-standing public involvement at First Christian Church in Great Bend as an elder, deacon, board chair, and Sunday school teacher",
      "His campaign remains one of the strongest finance operations in Kansas politics, with millions in cash on hand"
    ],
    "whereTheyWorship": "Marshall's church is First Christian Church in Great Bend, a Disciples of Christ congregation. Public records tie him to the church as an elder, deacon, board chair, and Sunday school teacher, making his involvement long-running and public rather than incidental.",
    "church": {
      "name": "First Christian Church, Great Bend, KS",
      "denomination": "Christian Church (Disciples of Christ) / Non-denominational",
      "url": "https://www.firstchristianchurchgb.com/",
      "details": "Denomination: Christian Church (Disciples of Christ) / Non-denominational. Church Roles: Elder, Deacon, Board Chairman, Sunday School Teacher (25+ years)."
    },
    "quotes": [
      {
        "text": "I don't wear my faith on my shirt sleeve, but in my heart.",
        "source": "Roger Marshall Senate biography, accessed April 2, 2026, https://www.marshall.senate.gov/about/",
        "date": "2026-03-31",
        "url": "https://www.marshall.senate.gov/about/",
        "topic": "Quotes"
      },
      {
        "text": "I have tried to read the Bible every day since I was 10 years of age, so a lot of the wisdom I've been given comes from reading the Bible.",
        "source": "Roger Marshall Senate biography, accessed April 2, 2026, https://www.marshall.senate.gov/about/",
        "date": "2026-03-31",
        "url": "https://www.marshall.senate.gov/about/",
        "topic": "Quotes"
      },
      {
        "text": "Calling me a moron during a Senate hearing may have alleviated the stress of the least trusted bureaucrat in America, but it didn't take away from the facts. We need the truth Dr. Fauci!",
        "source": "Roger Marshall press release, January 2022, https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-responds-to-dr-fauci-hot-mic-situation/",
        "date": "2026-03-31",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-responds-to-dr-fauci-hot-mic-situation/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Marshall's public FEC record shows a large incumbent operation. Public summaries and prior filings point to roughly $4.76 million in lifetime receipts and more than $4.07 million cash on hand by the end of 2025, with roughly $621,400 raised in the fourth quarter of 2025 alone.",
      "narrative": "Marshall's public FEC record shows a large incumbent operation. Public summaries and prior filings point to roughly $4.76 million in lifetime receipts and more than $4.07 million cash on hand by the end of 2025, with roughly $621,400 raised in the fourth quarter of 2025 alone. That financial position matches his status in the race: no serious Republican primary threat, national Republican fundraising support, and a donor network built at the incumbent-senator level rather than at the challenger level.",
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
    "education": "Has not taken a clear public position",
    "family": "Married with family. Describes himself as a husband and father.",
    "campaignWebsite": "https://hartforsenate.com",
    "whoTheyAre": "Jason Hart is a Wichita lawyer and former federal prosecutor running for the Democratic nomination for U.S. Senate in 2026. His public biography is built around more than two decades in prosecution, including work in Dodge City, the Shawnee County District Attorney's office, the Kansas Attorney General's office, and 16 years as an assistant U.S. attorney in Kansas. Hart entered the race in March 2026 after leaving his federal post. That made him one of the latest entrants in the field, but also one of the most unusual. He launched with a law-and-order résumé, a deliberate pitch to disaffected Republicans, and a party-history story that drew immediate attention. That party-history story is central to his profile. Hart had been registered as an independent, changed to Republican in February 2026 while considering a run against Rep. Ron Estes, and then changed to Democrat in March 2026 when he entered the Senate race. He has described the decision to run as the product of prayerful and tearful discussions with his wife and family.",
    "theirRecord": "Hart does not have a legislative record, so his public record is mostly his work as a prosecutor and the circumstances of his campaign launch. The most prominent credential in the raw material is his 16-year tenure as an assistant U.S. attorney handling child exploitation and cybercrime cases under both Republican and Democratic administrations. His candidacy has been shaped as much by rhetoric as by résumé. Kansas Reflector reported that Hart has openly courted Republicans who feel estranged from the current GOP, and he has argued that Kansas Democrats need a candidate who can draw those voters rather than just consolidate the party base. That argument has also created controversy inside the Democratic field. Hart publicly described himself as a \"white, male, Christian, hetero, 2A-friendly, LEO-friendly\" candidate, presenting those traits as part of his electability case in Kansas. Supporters can read that as blunt realism; critics can read it as a narrow theory of representation.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a specific public position on abortion in the available record."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Describes himself as \"2A-friendly\" and has made his support for gun rights a central part of his electability pitch as a Democrat in Kansas."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Law Enforcement",
        "stance": "Strongly pro-law enforcement. He spent 16 years as a federal prosecutor and describes himself as \"LEO-friendly.\" Protecting children from predators and cybercrime was his career focus."
      },
      {
        "issue": "Reaching Across Party Lines",
        "stance": "His main campaign theme is courting Republicans who feel \"lost in the wilderness.\" He explicitly positions himself as a crossover candidate rather than a standard Democrat."
      },
      {
        "issue": "Tariffs / Economy",
        "stance": "Has not laid out detailed economic policy positions, though his campaign is framed around listening to communities rather than pushing a specific platform."
      }
    ],
    "whatYouShouldKnow": [
      "Hart spent 16 years as an assistant U.S. attorney in Kansas after earlier work in local and state prosecution offices",
      "He entered the Senate race in March 2026 after leaving his federal job",
      "He switched party affiliation twice in early 2026, moving from independent to Republican and then to Democrat within weeks",
      "His campaign has explicitly targeted Republicans who no longer feel at home in the current GOP",
      "He has no prior elected-office record, so his public record is mostly prosecutorial work and campaign statements",
      "Public sources identify Hart as Christian, but they do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources identify Hart as Christian, but they do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "There are many Republicans who are in the wilderness right now.",
        "source": "Kansas Reflector, March 23, 2026, https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "Quotes"
      },
      {
        "text": "I ask people questions for a living, and that's what we need more of, not talking at people.",
        "source": "Kansas Reflector, March 23, 2026, https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "Quotes"
      },
      {
        "text": "Prayerful and tearful discussions with my wife and family.",
        "source": "Kansas Reflector, March 23, 2026, https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No public FEC finance summary available online as of 2026-04-01",
      "narrative": "No campaign finance data available online. The raw material cited his campaign site, ActBlue page, and FEC registration, but it did not provide a usable public totals summary.",
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
        "title": "Secure.Actblue.Com",
        "url": "https://secure.actblue.com/donate/jason-hart",
        "publication": "Secure.Actblue.Com",
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
    "whoTheyAre": "Patrick Schmidt is a Democratic state senator from the Lawrence-Topeka area and a former U.S. Navy intelligence officer running for U.S. Senate. He was born in Overland Park, graduated from Tufts University in 2013, and served on the USS Ronald Reagan, with the Joint Special Operations Task Force in the Arabian Peninsula, and at the Office of Naval Intelligence in Washington, D.C. Schmidt entered the Kansas Senate in January 2025 after winning District 19 in 2024. That makes him the only current elected officeholder in the Democratic Senate field. His public biography leans heavily on military service, family roots, and a Kansas identity tied to teachers, farmers, and small-town work rather than celebrity or outsider branding.",
    "theirRecord": "Schmidt's legislative record is still short, but it is already more concrete than most of the Democratic Senate field. In Topeka he has made property tax relief one of his signature issues and broke with many Democrats to support a constitutional amendment that would cap annual property-value increases for tax purposes. He also sponsored Senate Resolution 1706 condemning the pardons and commutations for people involved in the January 6 Capitol attack. His military background is not just biographical decoration in this race. Schmidt has said witnessing the aftermath of January 6 while stationed in Washington helped push him toward politics, and he presents himself as someone trying to connect national-security experience with Kansas governance. That gives him a public record built on service, an identifiable issue portfolio, and a clearer governing profile than candidates whose Senate runs are their first real test in office.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion. His campaign focuses on other issues, and the available public record does not include a direct statement on reproductive rights."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a specific public position on immigration, though his campaign platform includes a general reference to immigration reform."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Supports public education funding."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Property Taxes",
        "stance": "This is his signature issue. He broke with his own party to support a constitutional amendment that would cap annual property-value increases for tax purposes. He has called property tax relief his top legislative priority."
      },
      {
        "issue": "Corporate Taxes",
        "stance": "Wants corporations to \"pay their fair share\" and close tax loopholes."
      },
      {
        "issue": "Healthcare",
        "stance": "Supports rural healthcare access and opposes Medicaid cuts that affect rural hospitals."
      },
      {
        "issue": "January 6 / Democracy",
        "stance": "Sponsored a Kansas Senate resolution condemning the pardons and commutations of January 6 participants. His witnessing of the Capitol attack while stationed at the Office of Naval Intelligence was a motivating factor in his entry into politics."
      }
    ],
    "whatYouShouldKnow": [
      "Schmidt is the only current elected official in the Democratic U.S. Senate primary",
      "He served in Navy intelligence on the USS Ronald Reagan, at Joint Special Operations Task Force-Arabian Peninsula, and at the Office of Naval Intelligence",
      "He took office in the Kansas Senate in January 2025 after winning District 19 in 2024",
      "He broke with many Democrats to support a constitutional amendment aimed at limiting annual property-value increases for tax purposes",
      "He sponsored Senate Resolution 1706 condemning January 6 pardons and commutations",
      "His federal campaign committee is on file with the FEC, but no processed 2025-2026 federal finance summary was publicly posted online in this source set"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Schmidt's public profile emphasizes service, family history, and Kansas roots rather than a named congregation or denomination.",
    "quotes": [
      {
        "text": "I was close enough to smell the tear gas and bear spray and to see the people violently assaulting law enforcement officers, and I'm really saddened, especially by what we saw last month at the pardons of people that violently attacked law enforcement officers. And I think that it's a sad day. I think it's a dangerous day for the country.",
        "source": "Kansas Reflector, March 3, 2025, https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
        "topic": "Quotes"
      },
      {
        "text": "I would love to see real property tax relief for Kansans.",
        "source": "Kansas Reflector, March 3, 2025, https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
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
      "narrative": "Schmidt's public money trail is clearer in his recent Kansas Senate campaign than in his federal Senate committee so far. His 2024 Kansas Senate filing reported $51,967.24 in total contributions and $1,296.50 in in-kind support in the July reporting period, and his January 10, 2025 filing reported $9,450.58 in contributions for the late-2024 reporting window, plus $206.34 in unitemized contributions. For the 2026 U.S. Senate race, the FEC shows a committee on file, but this source set did not surface a processed federal summary with receipts, spending, or cash on hand. That means the public campaign-finance picture is real but still incomplete online.",
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
    "whoTheyAre": "Christy Cauble Davis is a Democratic U.S. Senate candidate from Cottonwood Falls and one of the few contenders in the field with a long résumé in rural development work. She is a fifth-generation Kansan who graduated from Sedgwick High School, earned a bachelor's degree from Kansas State University in 1997, and completed a graduate degree at Wichita State University in 1999. Davis spent much of her career in historic preservation and small-town development. She worked as a preservation planner for the City of Newton, served as a preservation officer at the Kansas Historical Society, and later became executive director of Symphony in the Flint Hills after moving to Chase County in 2013. Public profiles also identify her as the owner of Davis Preservation, LLC. She and her husband, Luke Davis, renovated historic buildings in Cottonwood Falls, including a laundromat project and a former bank building converted into housing and a bookstore. Her highest-profile job came in federal government. Davis served as Kansas state director of USDA Rural Development from 2023 until January 2025, an office that she says oversaw more than $1.3 billion in investment across Kansas communities.",
    "theirRecord": "Davis's record is defined less by roll-call votes than by programs and projects. At USDA Rural Development, she became the public face of housing, infrastructure, healthcare, and business financing programs across the state. The source material says her office oversaw more than $1.3 billion in Kansas investments and worked on a broader push to cut red tape in how federal programs reached communities. Before that federal appointment, Davis built a reputation in preservation and civic development circles rather than in elected office. Her work at Symphony in the Flint Hills and her building rehabilitation projects in Cottonwood Falls fit the same pattern as her Senate pitch: invest in towns that are often overlooked and treat rural Kansas as a place worth building, not just defending rhetorically. She also has prior campaign history. Davis ran in the 2020 Democratic primary for Kansas's 1st Congressional District and lost to Kali Barnett, so her Senate campaign is not her first appearance on a statewide or federal ballot.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a detailed public position, but her campaign lists \"protecting reproductive freedom\" as a priority."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Supports immigration reform that \"provides a pathway to citizenship and ends inhumane policies that terrorize families and unconstitutionally deprive Kansans of due process.\""
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Supports restoring federal funding for special education and affordable housing programs."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Tariffs / Trade",
        "stance": "Opposes Trump tariffs and says they cause instability for Kansas farmers and rural communities."
      },
      {
        "issue": "Healthcare / Medicaid",
        "stance": "Wants to restore funding for Medicaid and opposes cuts she says threaten rural hospitals. Called the Medicaid cuts \"the big abomination of a bill.\""
      },
      {
        "issue": "Rural Investment",
        "stance": "Her signature issue. Her entire campaign is built around delivering federal resources to rural Kansas, pointing to the $1.3 billion she oversaw at USDA Rural Development."
      }
    ],
    "whatYouShouldKnow": [
      "Davis lives in Cottonwood Falls and presents herself as a fifth-generation Kansan with a career rooted in rural communities rather than party office",
      "She worked in historic preservation and community development before entering federal service, including jobs with the City of Newton, the Kansas Historical Society, and Symphony in the Flint Hills",
      "From 2023 to January 2025, she served as Kansas state director of USDA Rural Development and says the office oversaw more than $1.3 billion in investment across the state",
      "She and her husband, Luke Davis, renovated historic buildings in Cottonwood Falls, including a laundromat project and a former bank building turned into housing and a bookstore",
      "Davis previously ran for Congress in 2020 and lost the Democratic primary in the 1st District",
      "Her campaign also drew notice when Republicans called for an ethics review over a late personal financial disclosure filing"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "It's time for Kansas to have a Senator who shows up.",
        "source": "Christy Davis campaign launch, 2025, https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u",
        "date": "2026-03-31",
        "url": "https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u",
        "topic": "Quotes"
      },
      {
        "text": "Kansans are uniquely equipped to tackle national challenges.",
        "source": "Emporia Gazette, August 19, 2025, https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
        "date": "2026-03-31",
        "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$80,478.96 (FEC coverage: 07/01/2025 to 12/31/2025)",
      "narrative": "Federal filings showed Davis with a modest but real early fundraising base. The public FEC summary cited in the source set reported $80,478.96 in receipts, $38,100.53 spent, and $42,378.43 cash on hand through December 31, 2025. The larger money story is scale. Those numbers are enough to put her in the race, but they are still small for a statewide federal campaign and far below what an incumbent senator can raise. The source set did not provide a fuller donor-by-donor ledger beyond the public summary.",
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
        "title": "Rd.Usda.Gov",
        "url": "https://www.rd.usda.gov/newsroom/news-release/usda-announces-rural-development-state-director-kansas"
      },
      {
        "title": "Americancoinop.Com",
        "url": "https://americancoinop.com/articles/clean-history-laundromat-anchors-kansas-town"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00247/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00915934/"
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
        "title": "Vote Smart: Davis biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/192415/christy-cauble-davis",
        "publication": "Justfacts.Votesmart.Org",
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
    "whoTheyAre": "Sandy Spidel Neumann is a Democratic U.S. Senate candidate from Mission with a long business career and no previous elected office. She was born in Topeka, adopted as a newborn, grew up in Johnson County, earned an economics degree from the University of Chicago, and later completed an MBA at Northwestern while working full time. Her professional life spans about 40 years, including 22 years as an executive at Ameriprise Financial Services. Spidel Neumann's campaign is built around experience in business and finance rather than a public-office resume. She returned to Kansas after years away, retired from Ameriprise in 2025, and entered the Senate race arguing that her management background and economic experience would be useful in a state where Democrats have struggled for decades to win federal office.",
    "theirRecord": "Because she has not held office, Spidel Neumann's public record is mostly professional. Her campaign says Roger Marshall's conduct in office, including the atmosphere around a western Kansas town hall, helped push her into the race. Her message has focused on health care costs, reproductive rights, Social Security, Medicare, the VA, and support for farmers. Her early financial filing is also part of the public record. It showed a serious launch by Democratic-primary standards, including a six-figure candidate loan. That does not substitute for governing experience, but it does tell voters that she entered the race with the means to build a campaign rather than test the waters quietly.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Supports protecting reproductive freedom. Her campaign website lists it as a core issue, and she has said she wants to keep \"government out of women's healthcare.\""
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a specific public position on immigration in available sources."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Healthcare / Medicaid",
        "stance": "This is one of her strongest issues. She called Medicaid cuts \"the big abomination of a bill\" and said reversing them \"would be a good first step because health care is a significant concern in rural Kansas.\" She supports extending ACA subsidies and fighting pharmaceutical companies on drug prices."
      },
      {
        "issue": "Social Security and Medicare",
        "stance": "Supports defending Social Security, Medicare, and the VA. These are central to her campaign message."
      },
      {
        "issue": "Tariffs / Agriculture",
        "stance": "Opposes tariffs she says are harmful to Kansas farmers. This is one of the reasons she says she entered the race."
      },
      {
        "issue": "School Safety",
        "stance": "Her campaign mentions \"working to make kids safer at school\" as a priority."
      }
    ],
    "whatYouShouldKnow": [
      "Spidel Neumann spent 22 years as an Ameriprise executive and brings one of the strongest private-sector resumes in the Democratic Senate field",
      "She has no prior elected-office record, so voters are judging her mostly on business experience and campaign message",
      "She is based in Mission, in Johnson County, which is the state's largest Democratic vote center",
      "Her filing showed $167,587.11 in receipts, $40,660.59 spent, and $126,926.52 cash on hand through the end of 2025",
      "That same filing included a $100,000 candidate loan, showing meaningful self-funding at the outset"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "In Washington, Sandy will bring that same tenacity to lowering costs for families, fighting for farmers, protecting reproductive freedom, defending Social Security, Medicare and the VA, working to make kids safer at school and ensuring every Kansan -- regardless of economic status -- has the same opportunity she fought for.",
        "source": "Sandy for Kansas campaign website, accessed April 1, 2026, https://sandyforkansas.com/",
        "date": "2026-03-31",
        "url": "https://sandyforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "Called Medicaid cuts 'the big abomination of a bill' and said reversing them 'would be a good first step because health care is a significant concern in rural Kansas.'",
        "source": "Kansas Reflector brief, accessed April 1, 2026, https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
        "topic": "Quotes"
      },
      {
        "text": "Marshall's town hall walkout was one of the moments that convinced her to run.",
        "source": "Kansas Reflector brief, accessed April 1, 2026, https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$167,587.11 (FEC coverage: 10/14/2025 to 12/31/2025)",
      "narrative": "Spidel Neumann's public FEC summary showed $167,587.11 in receipts, $40,660.59 spent, and $126,926.52 cash on hand through December 31, 2025. The most important line in the filing was a $100,000 loan from the candidate to her campaign. That gave her an early financial base, but it also means the first phase of the campaign leaned significantly on her own money. The public record showed a real campaign structure, but not yet a deep statewide donor story.",
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
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Sandy_Spidel_Neumann"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
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
    "whoTheyAre": "Erik Murray is a Kansas City, Kansas, developer and entrepreneur running for the Democratic nomination for U.S. Senate in 2026. He was born at KU Med, grew up in Kansas City, Kansas, and has described himself as a local candidate returning home after years in California business and investment work. Murray's public identity is tied most strongly to development. The centerpiece is the proposed redevelopment of the former Indian Springs Mall site in Wyandotte County, a large mixed-use plan that has been described in public reporting as a billion-dollar effort built around housing, retail, childcare, job training, transit access, and other community uses. He has never held elected office. His case for office is that a developer who has worked with lenders, investors, and local governments can better connect federal policy to neighborhood outcomes, especially for small businesses and distressed communities.",
    "theirRecord": "Murray's record is not a legislative one. It is a business and redevelopment record, and the largest public project attached to his name is the Indian Springs plan in Kansas City, Kansas. The project has been promoted as a major reinvestment proposal for the east side of the city, but it has also been slowed by disputes with the Unified Government over land price, financing, and project terms. Those negotiations became part of Murray's political profile in 2026. KSHB reported that the developer and the Unified Government remained far apart on key terms, and Murray publicly argued that taxpayers deserved more transparency about the stalled talks. That turned a local development fight into one of the clearest public tests of his management style. Murray has also drawn attention for how he talks about politics and capital. Kansas Reflector reported that he became attuned to the disconnect between what capital wants and what communities want, and later national conservative coverage highlighted his comments about the influence of former Black Panther leader Elaine Brown. That made him one of the more unusual biographies in the Democratic field: part developer, part civic-reinvestment candidate, and part culture-war target.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Small Business / Economy",
        "stance": "His central issue. He wants to lower the costs of starting and running small businesses and supports Opportunity Zone tax incentives for economically distressed areas."
      },
      {
        "issue": "Tariffs",
        "stance": "Opposes Trump-era tariff policies, calling them \"politician-created problems\" that \"are tearing apart the fabric of our communities.\""
      },
      {
        "issue": "Community Investment",
        "stance": "Argues there is a disconnect between what capital wants and what communities need, and says federal policy should bridge that gap rather than widen it."
      }
    ],
    "whatYouShouldKnow": [
      "Murray's largest public project is the proposed redevelopment of the former Indian Springs Mall site in Wyandotte County",
      "He has never held elected office, so his public record is made up of development projects, interviews, and campaign statements rather than votes",
      "The Indian Springs project has remained in limbo amid disputes with the Unified Government over land price, financing, and outside-counsel costs",
      "He has argued that federal policy should lower the cost of starting and running small businesses",
      "His public message emphasizes bridging the gap between what investors want and what local communities need",
      "Public sources describe childhood ties to Fellowship Christian Church and St. Patrick's Catholic School, but they do not identify a current church affiliation",
      "Public FEC summary data cited in the raw material showed $124,598.62 raised, $15,625.69 spent, and $108,972.93 cash on hand through December 31, 2025"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. His public background includes childhood ties to Fellowship Christian Church and schooling at St. Patrick's Catholic School, but the available record does not identify a present-day congregation.",
    "quotes": [
      {
        "text": "Politician-created problems, such as tariffs and tax policies that benefit billionaires, are tearing apart the fabric of our communities.",
        "source": "KCUR, December 30, 2025, https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "date": "2026-03-31",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "topic": "Quotes"
      },
      {
        "text": "We are pushing for the Unified Government to provide that transparency to the taxpayers about what's really going on here.",
        "source": "KSHB, March 2026, https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan",
        "date": "2026-03-31",
        "url": "https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan",
        "topic": "Quotes"
      },
      {
        "text": "As a kid who's from here, I'm so excited to do it. We just need to get over this hump with the UG.",
        "source": "KSHB, March 2026, https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan",
        "date": "2026-03-31",
        "url": "https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$124,598.62 (FEC coverage: 11/23/2025 to 12/31/2025)",
      "narrative": "Public FEC summary data cited in the raw material showed Murray with $124,598.62 in receipts, $15,625.69 in disbursements, and $108,972.93 cash on hand through December 31, 2025. The same summary described the campaign as donor-funded rather than self-funded, but the raw material did not provide a fuller donor-by-donor breakdown.",
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
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/"
      },
      {
        "title": "Sunflowerstatejournal.Com",
        "url": "https://sunflowerstatejournal.com/kck-developer-announces-for-u-s-senate-as-democratic-primary-grows-to-five/"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
      },
      {
        "title": "Kshb.Com",
        "url": "https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00270/"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00929240/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Freebeacon.Com",
        "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
        "publication": "Freebeacon.Com",
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
    "whoTheyAre": "Anne Parelkar is an Overland Park immigration attorney running in the 2026 Democratic primary for the U.S. Senate seat held by Roger Marshall. She was born in Pine Bluff, Arkansas, raised in White Hall, and studied at Lyon College before earning her law degree at the University of Arkansas at Little Rock in 2011. She later moved to Kansas through marriage and built a practice focused on immigration law. Parelkar has never held elected office. Her public biography is that of a lawyer and mother of two who says she sees the country's immigration machinery up close and believes Washington is failing both families and employers. In a crowded Democratic field, that professional specialty makes her more distinct than many first-time candidates.",
    "theirRecord": "Because she is a first-time candidate, Parelkar's record is rooted less in prior office than in the issues she has chosen to make central. She has argued that the immigration system is broken in practical ways, not just ideological ones, and she has paired that message with a proposal to replace the patchwork of Medicaid, CHIP, and other programs for minors with a single health-care program for people under 18. She has also called for stronger antitrust and consumer-protection laws. Her campaign grew partly out of frustration with constituent access. Public interviews say attending Marshall town halls helped convince her to run, and she has used transparency and responsiveness as a contrast point. The one clear controversy in the source file is procedural: she was named in an NRSC complaint over a late personal financial disclosure filing.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion in the source material reviewed."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Parelkar says the immigration system is broken in practical ways, not just ideological ones. As a working immigration attorney, she has made fixing the system a centerpiece of her campaign, arguing that it fails both families and employers."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Healthcare for Children",
        "stance": "She has proposed replacing the patchwork of Medicaid, CHIP, and other programs for minors with a single consolidated health-care program for everyone under 18."
      },
      {
        "issue": "Consumer Protection",
        "stance": "She has called for stronger antitrust and consumer-protection laws, though specific policy details beyond that broad call have not been made public."
      },
      {
        "issue": "Transparency and Constituent Access",
        "stance": "She has said frustration with Roger Marshall's town halls and lack of constituent communication helped push her into the race, and she frames responsiveness as a core difference between herself and the incumbent."
      }
    ],
    "whatYouShouldKnow": [
      "Parelkar is the only immigration attorney in the Democratic Senate field",
      "She is a first-time candidate with no prior elected office",
      "Her campaign is centered on immigration reform, children's health coverage, and tougher consumer-protection law",
      "She said frustration with Marshall town halls and constituent communication helped push her into the race",
      "Her campaign was named in an NRSC complaint over a late personal financial disclosure filing",
      "She is running from Johnson County, the same base several other Democratic contenders are targeting"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Parelkar has spoken publicly about being raised Presbyterian in Arkansas, but the source material does not identify a current Kansas congregation.",
    "quotes": [
      {
        "text": "We have a very big problem with immigration in our country right now.",
        "source": "Kansas Reflector, August 25, 2025, https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "topic": "Quotes"
      },
      {
        "text": "answer to the people. Not to party leaders. Not to political donors. Just to the people.",
        "source": "Anne for Kansas, accessed April 1, 2026, https://www.anneforkansas.com/",
        "date": "2026-03-31",
        "url": "https://www.anneforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "We have a very big problem with immigration in our country right now, in the sense that there's a lot of confusion over it.",
        "source": "Anne Parelkar campaign materials",
        "date": "2026-03-31",
        "topic": "Key Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$16,982.00 (FEC coverage: 03/03/2025 to 12/31/2025)",
      "narrative": "Federal filings in the source material show a small campaign. Through December 31, 2025, her committee reported $16,982 in receipts, $16,478.89 in disbursements, and $503.11 cash on hand, including $4,500 in candidate loans. That is enough to show a real campaign structure, but it leaves her far behind the better-funded statewide contenders.",
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
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/"
      },
      {
        "title": "1350kman.Com",
        "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/"
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
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Anne_Parelkar"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
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
    "education": "Has not taken a clear public position",
    "family": "Not detailed",
    "campaignWebsite": "https://mikeforkansas.my.canva.site",
    "whoTheyAre": "Michael Soetaert is a Wellington-based Democratic candidate for the U.S. Senate. He grew up in Spring Hill, lives in south-central Kansas, and has built an unusual political biography that includes work in local government, repeated runs for office, and a very public ideological shift from Republican politics to the Democratic field. His candidacy is historically notable because he is the first openly gay person to run for the Kansas Senate seat. At the same time, he is running a visibly lean campaign. His public web presence centers on a free Canva campaign site and an ActBlue page rather than a polished statewide operation. Soetaert's personal story is unusually public in some places and thin in others. Public sources say he was adopted into a Roman Catholic family and now identifies as Christian, but they do not identify a current church. His background matters because much of his campaign message is framed as a story of political and personal change rather than a long record of officeholding.",
    "theirRecord": "Soetaert's public record is less a story of long service in one office than of repeated candidacies and visible movement across the political spectrum. He previously ran in the 2020 Republican primary for Kansas's 1st Congressional District, served briefly on the Wellington City Council, and later entered the Democratic Senate race. His issue positions have also changed in public. Campaign materials and reporting show that he moved from an earlier anti-abortion position to a rights-based position after the 2022 Kansas abortion referendum, summarizing that shift with the line, \"Kansans voted for bodily autonomy.\" He has also publicly supported the Respect for Marriage Act. That combination makes him one of the most unusual Democrats in the Senate field: a small-town candidate with Republican roots, a short local-government record, and a campaign centered as much on personal political evolution as on legislative accomplishments.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Soetaert publicly changed his position on abortion after the 2022 Kansas referendum. He previously held an anti-abortion position but now supports abortion rights, saying \"Kansans voted for bodily autonomy.\""
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "He has publicly supported the federal Respect for Marriage Act, which protects same-sex marriages. As the first openly gay person to run for the Kansas Senate seat, this is a core part of his identity and campaign."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy in available materials."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration in available materials."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Healthcare",
        "stance": "Has not laid out a detailed healthcare platform in the available public record."
      }
    ],
    "whatYouShouldKnow": [
      "Soetaert is the first openly gay person to run for the Kansas Senate seat",
      "He previously ran as a Republican, served briefly on the Wellington City Council, and later entered the Democratic Senate primary",
      "His current campaign is small and lightly built, with a Canva-hosted website and a limited public finance footprint",
      "He publicly changed his abortion position after the 2022 Kansas referendum, saying Kansans had voted for bodily autonomy",
      "He has also publicly backed the Respect for Marriage Act",
      "Public sources describe him as Christian and note a Roman Catholic adoptive-family background, but they do not identify a current church affiliation",
      "His political story is defined more by candidacy history and issue shifts than by a long record in office"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Soetaert. The available record describes him as Christian and references a Roman Catholic adoptive-family background, but no congregation or denomination is named in his current public materials.",
    "quotes": [
      {
        "text": "If I had to choose between your vote and your health and safety, this is easy. I pick your health and safety. I would love to represent you and the great state of Kansas in the U.S. Senate. However, I'm not willing to walk over your body bag, coffin or funereal urn to do so.",
        "source": "The Iola Register, July 28, 2022, https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "date": "2026-03-31",
        "url": "https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "topic": "Quotes"
      },
      {
        "text": "It really is an online campaign, a pandemic campaign, and I don't see that changing between now and November.",
        "source": "The Iola Register, July 28, 2022, https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "date": "2026-03-31",
        "url": "https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "topic": "Quotes"
      },
      {
        "text": "No. 1, the mismanagement of the pandemic under the Republican party was in and of itself reason enough to go home to the Democratic party.",
        "source": "The Iola Register, July 28, 2022, https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "date": "2026-03-31",
        "url": "https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
      "narrative": "Soetaert has an FEC candidate page and an ActBlue donation page, but no clear 2025-2026 campaign finance totals were available online in the source set reviewed for this profile. The visible public record points to a small campaign operation rather than a well-financed statewide effort.",
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
    "education": "Has not taken a clear public position",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://www.laporte4ksgov.com/",
    "whoTheyAre": "Chase LaPorte is a Republican candidate for the U.S. Senate in Kansas and a primary challenger to Roger Marshall. Public candidate biographies say he was born in Carthage, Missouri, served in the U.S. Army from 2005 to 2013, earned an associate degree from Cowley County Community College in 2017, and works as a business administrator. The rest of his public record is thin. Ballotpedia and campaign listings tie him to Kansas, and source material also links him to the Shriners, American Legion, and Veterans of Foreign Wars. But compared with the better-known statewide candidates, LaPorte has left behind only a limited paper trail.",
    "theirRecord": "LaPorte has no identified record in elected office. His public positions, as captured in campaign aggregators and race summaries, center on smaller government, lower spending, term limits, inflation, and support for a strong National Guard presence. He has also run for other offices, including the U.S. House and governor, which gives him the profile of a repeat candidate rather than a first-time local official rising through Kansas politics. In the 2026 Senate race, his campaign infrastructure appears limited, and the source set did not surface a dedicated Senate website or a substantial body of speeches, interviews, or issue papers.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion in the source material reviewed."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy in the source material reviewed."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration in the source material reviewed. LaPorte's public platform is thin compared with most statewide candidates. The source material shows a short list of general principles rather than detailed policy proposals."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Government Size and Spending",
        "stance": "LaPorte has said he supports smaller government and lower spending. He frames inflation and government spending as core concerns."
      },
      {
        "issue": "Term Limits",
        "stance": "He supports term limits for elected officials."
      },
      {
        "issue": "Government Transparency",
        "stance": "He has stated that \"transparency in government keep officials accountable.\""
      },
      {
        "issue": "National Guard",
        "stance": "He has said he believes in \"maintaining a strong National Guard presence.\""
      }
    ],
    "whatYouShouldKnow": [
      "Public biographies describe LaPorte as an Army veteran who served from 2005 to 2013",
      "He earned an associate degree from Cowley County Community College in 2017 and is identified as a business administrator",
      "The source material links him to veterans' and civic groups including the American Legion, VFW, and Shriners",
      "He has no identified record in elected office, so voters are mostly left with a short biography and a small set of stated positions",
      "The research trail also shows earlier runs for other offices, including the U.S. House and governor, making him a repeat candidate rather than a new local officeholder",
      "In this Senate race, his public campaign footprint is minimal compared with Roger Marshall's operation and with several of the Democrats on the other side of the ballot"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "I believe in maintaining a strong National Guard presence.",
        "source": "OpenCampaign issue positions page, accessed April 1, 2026, https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions",
        "date": "2026-03-31",
        "url": "https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
      "narrative": "LaPorte has an FEC candidate page and a filing trail, but the source material did not yield a clear cyclewide summary of money raised or cash on hand. Public snippets did surface itemized donations, including a $2,500 contribution from Ty Masterson and smaller donations from Carri Person, Joy Eakins, Kristina Smith, Nancy Moneymaker, TerriLois Todd, Steve Roberts, Brittany Jones, Randy Ross, Chase LaPorte, and Carolyn Keller. Because cited sources was fragmentary, the money picture is still incomplete. What is clear is that nothing in the source set points to a large or well-financed statewide campaign.",
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
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Chase_LaPorte"
      },
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
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates"
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
    "education": "Has not taken a clear public position",
    "family": "A professor at the University of Kansas (scientist and bestselling author -- name not confirmed in sources); Yes, raised family in Lawrence (number not specified)",
    "campaignWebsite": "https://colinforkansas.com/",
    "whoTheyAre": "Colin McRoberts is a Democratic candidate for Kansas's 1st Congressional District, a seat that covers most of western and central Kansas and has been safely Republican for decades. Public records identify him as Kenneth Colin McRoberts, a Lawrence resident, an associate teaching professor of law at the University of Kansas School of Business, and a lawyer with degrees from Trinity University and Harvard Law School. Before entering politics, McRoberts worked as a commercial litigator at Steptoe & Johnson and later founded Vasher McRoberts LLC, a consulting firm focused on negotiation and communication analysis. His university and writing work also gave him a more academic public profile than most congressional candidates in Kansas. He teaches business law and related courses at KU and has published writing on conspiracy theories, persuasion, and public culture.",
    "theirRecord": "McRoberts does not come to the race from elected office. His public record is instead a mix of legal practice, teaching, consulting, and writing. That professional background shapes the way he talks about politics: less as a partisan contest than as a problem of negotiation, accountability, and communication across a district split between Lawrence and the western half of the state. His immediate trigger for running was political. McRoberts says he drove from Lawrence to Oakley for Roger Marshall's March 2025 town hall, recorded one of the videos that spread after the event turned hostile, and came away convinced that the district needed a more serious challenge to the Republican establishment. He filed for Congress in September 2025 and began campaigning as a first-time candidate against Rep. Tracey Mann.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a detailed public position in the available source material."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has criticized what he describes as \"ICE arrests of U.S. citizens\" as part of executive overreach, but has not laid out a detailed immigration platform."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Tariffs / Trade",
        "stance": "Wants to return tariff power to Congress and away from the executive branch. Supports a small business exemption so family farms can import items with no reasonable domestic substitute at reasonable cost."
      },
      {
        "issue": "Healthcare",
        "stance": "Lists \"healthcare you can count on\" as a central campaign issue but has not spelled out a detailed plan in the available record."
      },
      {
        "issue": "Social Security / Medicare",
        "stance": "Pledges to protect Social Security and Medicare from cuts."
      },
      {
        "issue": "Executive Overreach",
        "stance": "His most clearly defined issue. Opposes what he calls illegal executive actions including unilateral tariffs, federalized troop deployments, and firing federal employees during a shutdown."
      },
      {
        "issue": "USAID / Agriculture",
        "stance": "Wants to restore USAID and its mission of buying American crops to prevent famine overseas, which he frames as both a humanitarian and farm-economy issue."
      }
    ],
    "whatYouShouldKnow": [
      "McRoberts is a Harvard Law graduate and KU law professor running in a district where academic credentials can be either an asset or a political burden",
      "He lives in Lawrence, which is inside the district after redistricting but remains culturally and politically distinct from much of western Kansas",
      "He built his campaign in part around Roger Marshall's 2025 Oakley town hall, where he recorded video that helped bring wider attention to the event",
      "His campaign message emphasizes negotiation, accountability, and the idea that eastern and western Kansas have been set against each other for partisan advantage",
      "He has no prior elected-office record, so his résumé is almost entirely professional rather than governmental",
      "His public FEC summary showed $24,699.29 in receipts, $17,243.10 spent, and $7,456.19 cash on hand through December 31, 2025"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "The long odds are exactly why this fight is so important. Gerrymandering and partisanship have kept our incumbent politicians safe even as they give up on representing Kansans in order to serve national donors and powerbrokers. This campaign is about giving Kansans the power to choose a better deal.",
        "source": "Colin McRoberts campaign announcement, September 17, 2025, https://colinforkansas.com/",
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
        "text": "I'm running not as a politician, but as a businessman and negotiator.",
        "source": "Hays Post coverage of Kansas Democracy Fest, 2026, https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$24,699.29 (Jul.-Dec. 2025)",
      "narrative": "McRoberts is running a real but still small federal campaign. The public FEC summary cited in the source material showed $24,699.29 in receipts, $17,243.10 spent, and $7,456.19 cash on hand through December 31, 2025. The money appears to be heavily individual-donor driven rather than fueled by major institutional backing. The same summary showed $19,130 in itemized individual donations and $338 in candidate contributions, which is modest even by House standards and tiny compared with the incumbent's operation.",
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
        "title": "Colinforkansas.Com",
        "url": "https://colinforkansas.com/"
      },
      {
        "title": "Business.Ku.Edu",
        "url": "https://business.ku.edu/people/colin-mcroberts"
      },
      {
        "title": "Colin-mcroberts.Com",
        "url": "https://www.colin-mcroberts.com/"
      },
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
        "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9"
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
        "title": "Hayspost.Com",
        "url": "https://www.hayspost.com/",
        "publication": "Hayspost.Com",
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
    "education": "Has not taken a clear public position",
    "family": "Not publicly identified by name; Has children (raised family in Lawrence)",
    "campaignWebsite": "https://www.laurenforkansas.com",
    "whoTheyAre": "Lauren Reinhold is a Democratic candidate in Kansas' 1st Congressional District. She is a lawyer with 28 years of legal experience and a former Social Security Administration employee whose campaign grew directly out of the federal workforce upheaval tied to DOGE. Her public biography is thinner than those of the statewide candidates, but the main outlines are clear: law, federal service, and a run for Congress launched in response to layoffs and buyout pressure inside government. Reinhold's professional record includes legal work, disability-related cases, administrative law, and federal union service. Unlike many congressional candidates, she did not come up through local office or party leadership. She entered the race from the federal workforce and made that disruption the emotional core of her campaign.",
    "theirRecord": "Reinhold has no legislative record, so her public record is mainly professional. She worked as an attorney-adviser at the Social Security Administration, handling disability and administrative-law matters, and she presents that work as proof that she understands how federal decisions land in ordinary people's lives. Her campaign was triggered by the DOGE push for federal employees to leave their jobs. Reinhold has said she initially resisted the pressure, then decided to run when it became clear she could either leave government quietly or fight publicly. That has made her campaign a direct rebuke to the federal-cutback politics now championed by some Kansas Republicans.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion in available materials."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Federal Government Services / DOGE",
        "stance": "Reinhold's entire candidacy is a response to the DOGE-driven federal workforce cuts. She opposes the mass layoffs of federal employees and argues the government should deliver the services people need. This is the centerpiece of her campaign."
      },
      {
        "issue": "Healthcare",
        "stance": "\"Healthcare you can count on\" is a central pillar of her campaign. She has criticized what she describes as broken promises on healthcare but has not laid out a detailed healthcare plan in available public materials."
      },
      {
        "issue": "Social Security",
        "stance": "As a former Social Security Administration attorney-adviser, she has positioned herself as a defender of Social Security and federal benefit programs."
      },
      {
        "issue": "Labor / Workers' Rights",
        "stance": "She served as a federal union officer, giving her a pro-labor, worker-advocacy angle that is unusual for a Kansas congressional candidate."
      }
    ],
    "whatYouShouldKnow": [
      "Reinhold is a lawyer with 28 years of legal experience and former federal service at the Social Security Administration",
      "Her candidacy is rooted in the DOGE-driven federal workforce cuts, which she has made the central story of her campaign",
      "She has also served as a federal union officer, giving her a labor and workplace angle that is unusual in this field",
      "Public records describe her as Christian, but public sources do not identify a current church affiliation",
      "Public FEC pages were available, but the accessible summary material was thin and did not provide a clean, detailed money trail for this profile"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Some records describe Reinhold as Christian, but no congregation or church website was documented in the accessible material.",
    "quotes": [
      {
        "text": "I was a proud public servant. When DOGE pushed hardworking employees like me out the door, I decided if Washington won't fight for people, then I will.",
        "source": "Campaign announcement cited in research materials, accessed April 1, 2026, https://www.laurenforkansas.com/",
        "date": "2026-03-31",
        "url": "https://www.laurenforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "I could run for Congress and try to fight this mess they've made of the federal government.",
        "source": "Kansas Reflector, January 5, 2026, https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "topic": "Quotes"
      },
      {
        "text": "It's not about me. It's not about, oh, poor Lauren lost her job to DOGE. I really care that the American people get the government they deserve, that we get the governmental services we need and deserve to make our lives better.",
        "source": "Kansas Reflector, January 5, 2026, https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
      "narrative": "Campaign finance data exists at the federal level through the FEC, but the accessible summary material for this profile was too thin to establish a reliable narrative about totals, donors, or cash on hand. No campaign finance data available online.",
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
    "education": "Lists \"strong schools\" as a priority on his platform but has not elaborated publicly",
    "family": "Not publicly identified; Not publicly identified",
    "campaignWebsite": "https://musserforuscongress.com/",
    "whoTheyAre": "Craig Musser is a 2026 candidate for Kansas' 1st Congressional District running under the United Kansas Party label. Public records describe him as the manager of environment, health, and safety at PureField Ingredients in Russell and place him near Ellinwood in Barton County, squarely inside the geography of the Big First. He filed his federal statement of candidacy on February 14, 2026. Musser is not coming out of an established Republican or Democratic organization. His candidacy is tied instead to the new United Kansas Party, a small formation trying to pitch itself as a cross-partisan alternative for voters who are tired of the two-party structure. That makes him unusual in a district where most serious congressional campaigns are shaped first by Republican primary politics.",
    "theirRecord": "Musser has no elected-office record in the source material. The record is the campaign itself: a congressional bid with a modest digital footprint, limited media attention, and a message built around service, practicality, and frustration with party insiders. His public comments argue that government should listen and deliver results rather than serve donors or national party machinery. That outsider pitch is paired with a thin campaign infrastructure. The file shows a website, an FEC candidate page, and a party listing, but little sign of the donor network, endorsements, or heavy media presence that usually mark a mature districtwide campaign in western Kansas.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Lists \"strong schools\" as a priority on his platform but has not elaborated publicly."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Healthcare",
        "stance": "Lists \"accessible healthcare\" as a priority and says he will \"bring discipline to fixing the healthcare system that is failing too many Kansans,\" but has not provided specifics."
      },
      {
        "issue": "Taxes",
        "stance": "Says he will work on \"fixing the tax code,\" but details are thin."
      },
      {
        "issue": "Housing",
        "stance": "Lists \"affordable housing\" as a campaign priority."
      },
      {
        "issue": "Government Reform",
        "stance": "His clearest theme. Argues that Kansans need a representative independent of donors, party bosses, and Washington insiders, and that \"effective governance is not about ideology -- it's about listening and delivering outcomes.\""
      }
    ],
    "whatYouShouldKnow": [
      "Musser works in environmental health and safety at PureField Ingredients in Russell",
      "He filed to run for Congress on February 14, 2026",
      "He is running under the United Kansas Party banner rather than as a Republican or Democrat",
      "The accessible source record shows no prior elected office",
      "His campaign argues that Kansans need a representative independent of donors, party bosses, and Washington insiders",
      "The public record on him is considerably thinner than it is for major-party candidates in the same race"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "Kansans deserve a representative who serves them -- not donors, party bosses or Washington insiders.",
        "source": "Musser for U.S. Congress, accessed April 1, 2026, https://musserforuscongress.com/",
        "date": "2026-03-31",
        "url": "https://musserforuscongress.com/",
        "topic": "Quotes"
      },
      {
        "text": "Effective governance is not about ideology -- it's about listening and delivering outcomes.",
        "source": "Musser for U.S. Congress, accessed April 1, 2026, https://musserforuscongress.com/",
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
      "narrative": "No campaign finance data was available online. The source material confirms a federal filing and candidate page, but it does not provide a reliable receipts, cash-on-hand, or donor summary for the campaign.",
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
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Craig_Musser"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7"
      },
      {
        "title": "Unitedkansas.Com",
        "url": "https://www.unitedkansas.com/"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/craig-musser-82880838/"
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
    "education": "Has not taken a clear public position",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://scottschwab.com/",
    "whoTheyAre": "Scott Schwab is the Kansas secretary of state and a Republican candidate for governor in 2026. He grew up in Great Bend, graduated from Fort Hays State University in 1994, worked in Farm Bureau insurance and medical-equipment sales, and spent years in the Kansas House before moving into statewide office. He represented House District 49 over seven terms, served as speaker pro tempore, and won the secretary of state's office in 2018 and 2022. Schwab is an established Kansas Republican, but not a fringe figure. His public image is that of an institutional conservative with a business background, a long legislative resume, and direct election-management experience. His personal story also carries a nationally known tragedy: the 2016 death of his son Caleb on the Verruckt waterslide, an event that has shaped the public way Schwab talks about faith, family, and leadership.",
    "theirRecord": "As secretary of state, Schwab has been responsible for Kansas elections, business filings, and state records. He supported voter ID and other election-integrity measures earlier in his legislative career, but he also broke with election conspiracy politics after 2020 and publicly said he had seen no evidence that the presidential election in Kansas was stolen. That made him stand out inside his own party. His record is not without controversy. Kansas courts ruled that his office violated the state's open-records law by altering a computer system in a way that made some records harder to obtain. He has also been under pressure from both sides of the election debate, drawing criticism from hard-line skeptics who wanted more fraud claims and from transparency advocates who wanted more openness. In the governor's race, Schwab has centered property taxes, state control over elections, and opposition to federal interference. He also entered 2026 while dealing publicly with a lung-cancer diagnosis, which added another personal challenge to a campaign already shaped by grief, faith, and years in the spotlight.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Opposes abortion. Believes personhood begins at implantation. At a GOP debate he said: \"I feel horrible that a young woman can be manipulated to have an abortion, and there's no recourse.\""
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has said \"We will protect our Second Amendment rights\" on his campaign website."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Supports working with the Trump administration to enforce immigration laws and fund public safety."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Property Taxes",
        "stance": "This is the centerpiece of his campaign. He has criticized both the Legislature and Governor Kelly for delivering only a \"$25.88 property tax break for the owner of a $150,000 home\" and wants to overhaul the county appraisal process."
      },
      {
        "issue": "Election Integrity",
        "stance": "Championed Kansas voter ID law and multiple election security bills. Made Kansas one of the first states to use the federal SAVE database to verify citizenship of registered voters. Also publicly rejected 2020 stolen-election claims, saying he saw no evidence of organized fraud."
      },
      {
        "issue": "China / National Security",
        "stance": "Wants to ban China from buying land near Kansas military bases."
      },
      {
        "issue": "Rural Economy",
        "stance": "Wants to bring manufacturing and jobs back to rural Kansas, saying \"rural Kansas is no longer left behind.\""
      }
    ],
    "whatYouShouldKnow": [
      "Schwab is the sitting secretary of state and a former House leader, giving him one of the deepest public records in the 2026 governor's field",
      "After the 2020 election, he publicly rejected stolen-election claims, a position that separated him from election-denial politics inside the GOP",
      "His office was also at the center of a Kansas open-records dispute that ended with a court ruling against the secretary of state's office",
      "His 2025 year-end filing reported $1,418,671.56 raised, $365,533.06 spent, and $1,053,138.50 cash on hand",
      "The same filing showed $1,045,000 in personal loans, making self-funding a major part of his campaign"
    ],
    "whereTheyWorship": "Public sources tie Schwab and his family to LifeMission Church in Olathe. The church website is https://www.lifemission.church/, and the congregation became part of the public record after Caleb Schwab's funeral was held there in 2016.",
    "church": {
      "name": "LifeMission Church, Olathe, KS",
      "denomination": "Non-denominational",
      "url": "https://www.lifemission.church/",
      "details": "Denomination: Non-denominational. Church Address: 16111 S Lone Elm Rd, Olathe, KS."
    },
    "quotes": [
      {
        "text": "I'm Scott Schwab, a proud son of Great Bend, a Christian, a father, a believer in the American dream.",
        "source": "Scott Schwab campaign website, accessed April 1, 2026, https://scottschwab.com/",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "Quotes"
      },
      {
        "text": "There are people who try to make money off conspiracy theories - it's nothing new.",
        "source": "Associated Press, January 8, 2025, https://apnews.com/article/4587939711dc7a5effb1879374405147",
        "date": "2026-03-31",
        "url": "https://apnews.com/article/4587939711dc7a5effb1879374405147",
        "topic": "Quotes"
      },
      {
        "text": "We use a mix of laws, regulations, and internal reforms to deliver better service, protect election integrity, modernize the agency, and run government more efficiently.",
        "source": "Kansas Secretary of State press release, January 7, 2026, https://sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
        "date": "2026-03-31",
        "url": "https://sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$1,418,672 (2025 year-end)",
      "narrative": "Schwab's 2025 year-end report showed $1,418,671.56 raised, $365,533.06 spent, and $1,053,138.50 cash on hand. The filing also reported $1,045,000 in personal loans, which means most of the campaign's financial strength came from Schwab himself rather than outside donors. That leaves him well funded, but it also opens him to the same line faced by other self-financed candidates in the 2026 Republican field: real resources, but a money trail dominated by personal wealth rather than a broad donor base.",
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
        "title": "Apnews.Com",
        "url": "https://apnews.com/article/4587939711dc7a5effb1879374405147"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2020/11/09/as-other-republicans-lied-about-voter-fraud-kansas-secretary-of-state-was-a-voice-of-sanity/"
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
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
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
    "education": "Has not taken a clear public position",
    "family": "Two sons (names not publicly identified)",
    "district": "20 (Shawnee and Wabaunsee counties)",
    "campaignWebsite": "https://vickiforgovernor.com",
    "whoTheyAre": "Vicki Schmidt is the Kansas insurance commissioner and a Republican candidate for governor. She was born and raised in Wichita, graduated from the University of Kansas School of Pharmacy, and spent decades working as a pharmacist before moving into electoral politics. Her campaign repeatedly describes her as the first pharmacist to hold statewide elected office in Kansas. Schmidt and her husband Mike have been married for more than 50 years and have two sons and four grandchildren. Her public image is built less around ideological confrontation than around health-care credentials, consumer protection, and the argument that she already knows how to run a statewide office.",
    "theirRecord": "Schmidt's record stretches across both the Legislature and statewide regulation. As a state senator, she built much of her public identity around health-policy issues such as autism coverage and access to cancer care. As insurance commissioner, she has promoted her office as a practical consumer-protection agency and has made recovered money for Kansans a centerpiece of her pitch for higher office. That administrative record is central to her gubernatorial case. Her campaign argues that she has already managed a statewide department, returned money to consumers, and lowered the cost of doing business in Kansas. In a Republican field that includes more overtly ideological rivals, Schmidt is running as the candidate of executive competence and health-policy experience.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not made abortion a prominent part of her campaign messaging. At the January 2026 GOP debate (which she did not attend), other Republican candidates found unity on opposing abortion and marijuana legalization. Schmidt's public record does not include clear statements on this issue in the current race."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy in her current campaign."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not made immigration a visible part of her campaign platform. Schmidt's campaign is built around health-care credentials and consumer protection rather than the culture-war issues that dominate other Republican campaigns. Among the GOP gubernatorial candidates, she has the least ideological public profile."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Healthcare / Insurance",
        "stance": "This is her signature issue. As insurance commissioner, she says her office returned over $206 million to Kansas families and lowered the cost of doing business by over $96 million. As a state senator, she championed autism coverage and cancer-care access."
      },
      {
        "issue": "Government Efficiency",
        "stance": "Her campaign centers on executive competence. She cites finding errors in the Kansas Medical Assistance Program that were costing the state millions and implementing a plan that recouped more than $391 million."
      }
    ],
    "whatYouShouldKnow": [
      "Schmidt enters the governor's race as a sitting statewide executive, which gives her more governing experience than most candidates in the field",
      "She is the first pharmacist to hold statewide elected office in Kansas, and her pharmacy background is one of the defining facts of her public biography",
      "Her record as insurance commissioner is central to her campaign, especially her claim that the office has returned large sums of money to Kansans and reduced costs for businesses",
      "She previously built a legislative record around health-care issues including autism coverage and cancer-care access",
      "Her 2025 year-end filing showed $980,372.71 raised, $52,211.35 spent, and $928,161.36 cash on hand, giving her one of the stronger early financial positions in the governor's race",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Her campaign uses faith language, but the available record does not name a parish, congregation, or church website.",
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
        "source": "Vicki Schmidt campaign biography, 2026-04-01, https://vickischmidt.org/meet-vicki/",
        "date": "2026-03-31",
        "url": "https://vickischmidt.org/meet-vicki/",
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
      "narrative": "Schmidt's 2025 year-end filing showed $980,372.71 raised, $52,211.35 spent, and $928,161.36 cash on hand. That gives her a substantial early war chest without the kind of dominant self-funding pattern seen in some other gubernatorial campaigns. Named contributors visible in the filing include Jeanette Elder, David Pope, James Daniel, Steven Steele, David Kerr, Lisa Stubbs, Robert Regnier, Thomas Blackburn, and Strategic Partners International LLC. The public donor sample suggests a real statewide fundraising operation rather than a symbolic campaign committee.",
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
        "title": "Insurance.Kansas.Gov",
        "url": "https://insurance.kansas.gov/about-us/"
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
        "url": "https://www.kctv5.com/2025/07/09/another-woman-throws-her-hat-into-kansas-gubernatorial-race-vicki-schmidt/"
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
    "family": "Has not taken a clear public position",
    "district": "16th District (since 2009)",
    "campaignWebsite": "https://www.mastersonforgovernor.com/",
    "whoTheyAre": "Ty Masterson is the president of the Kansas Senate and a Republican candidate for governor. He has represented Senate District 16 since 2009, previously served on the Andover City Council, and has spent years at the center of Republican power in Topeka. That makes him very different from the outsider candidates in the race: he is not asking voters to imagine how he would govern, because he has already helped shape the state's agenda. Masterson's public biography combines legislative leadership, Wichita-area civic and business connections, and explicit Christian identity. Public sources tie him to NewSpring Church in Wichita, and his campaign biography says he and his family attend there. His campaign presents him as a conservative who wants to take the priorities he has advanced in the Senate and bring them to the governor's office.",
    "theirRecord": "Masterson's record is mostly a record of power inside the Legislature. As Senate president, he has guided Republican priorities on taxes, regulation, education, and social issues, and he has played a central role in how the chamber has confronted Democratic Governor Laura Kelly. His public record is less about one signature local issue than about institutional control of the Senate and the broader direction of state government. He has also used that leadership role to advance an openly ideological campaign for governor. His public message ties tax cuts, anti-\"woke\" rhetoric, conservative social policy, and structural reforms such as changes to judicial selection into one package. That makes him one of the clearest cases in the race where legislative record and campaign platform are tightly aligned.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Opposes abortion. At the January 2026 GOP debate, all six Republican candidates found unity on abortion opposition. Masterson has led the Kansas Senate through fights over abortion policy, and his campaign language ties the sanctity of life to his faith: \"every life is precious -- it doesn't matter your background, your ethnicity, or your color... we're all one people, created by God.\""
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not released detailed immigration policy, but his campaign rhetoric aligns with Republican enforcement-first positioning. His general message is about \"safe communities.\""
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "His campaign attacks what he calls the \"woke agenda\" in schools and government. He frames education reform as part of a broader conservative governing vision."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Opposes legalization, based on his debate position."
      },
      {
        "issue": "Taxes",
        "stance": "Championed what his campaign calls a \"$2 billion tax cut for Kansas families\" as Senate president. His campaign accuses Governor Kelly of hiking taxes and promises to continue cutting them."
      },
      {
        "issue": "Judicial Selection",
        "stance": "Pushed a constitutional amendment to change how Kansas Supreme Court justices are selected, requiring Senate consent for appointments. Critics say this is a step toward overturning the court's 2019 abortion rights ruling."
      },
      {
        "issue": "Israel",
        "stance": "Led a Kansas Senate delegation visit to Israel and has spoken publicly about the importance of the U.S.-Israel relationship."
      }
    ],
    "whatYouShouldKnow": [
      "Masterson is already one of the most powerful elected officials in Kansas because he serves as president of the state Senate",
      "He has represented Senate District 16 since 2009, giving him one of the longest public records in the governor's field",
      "His campaign is explicitly tied to conservative Christian language, including public references to faith, family, and the belief that every life is created by God",
      "Public sources identify NewSpring Church in Wichita as his church, making his faith affiliation more clearly documented than many other candidates in the race",
      "His 2025 year-end filing showed $695,998.16 raised, only $8,476.06 spent, and $687,522.10 cash on hand, which gave him a very large opening war chest",
      "The donor pattern in the public filing is concentrated near the top, with several large individual and LLC contributions rather than a broad small-dollar base"
    ],
    "whereTheyWorship": "Public sources identify Masterson with NewSpring Church in Wichita, and the church website is https://www.newspring.org/. His campaign biography and faith language make religion a visible part of his public identity rather than a private background detail.",
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
        "text": "I'm running for governor to take back Kansas from politicians like Laura Kelly who have hiked our taxes, padded the woke agenda, and left our schools and communities behind. Let's get to work.",
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
      "narrative": "Masterson's 2025 year-end report showed $695,998.16 raised, $8,476.06 spent, and $687,522.10 cash on hand. That is a strong early position for a statewide race because it shows he entered 2026 with a large reserve and very little burn rate. The public filing also suggests a top-heavy donor pattern. Several large contributions are visible in the report, including donors and entities such as David Murfin, Janet Murfin, SHAMAN BOTANICALS LLC, Rick Kloos, Pennie Kloos, and Brad Starnes.",
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
    "education": "Wants to remove DEI directives and what he calls \"political indoctrination\" from Kansas schools. Pledges to \"get the woke out of our schools\" and refocus classrooms on math, reading, and STEM skills including coding and AI",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
    "whoTheyAre": "Jeff Colyer is a physician, plastic surgeon, former lieutenant governor, and former governor of Kansas who is running for governor again in 2026 as a Republican. He grew up in Hays, graduated from Thomas More Prep, studied economics at Georgetown, earned a master's degree at Cambridge, and received his medical degree from the University of Kansas. Colyer's public identity has long combined medicine and politics. Before becoming governor, he served in the Kansas House, then as Sam Brownback's lieutenant governor. He became governor in 2018 when Brownback resigned for a federal post, making Colyer the only Kansas governor from Hays. His biography also includes an unusually extensive humanitarian medical record. The raw material describes decades of volunteer surgical work through International Medical Corps in conflict zones and humanitarian emergencies, including Rwanda in 1994 and Ukraine in 2024. That international work remains one of the most distinctive parts of his public profile.",
    "theirRecord": "Colyer's Kansas political record is anchored in his short tenure as governor and his longer stretch as lieutenant governor. His campaign and later public speeches have pointed to budget management, tax policy, and the end of long-running school-finance litigation as central accomplishments of that period. He also carries unresolved political history from the Republican side. In 2018 he lost the GOP primary to Kris Kobach by about 345 votes after serving as governor, and in 2021 he suspended a later campaign after a prostate-cancer diagnosis. Those two events remain central to how Kansas Republicans remember him. In the 2026 race, Colyer has run as an experienced conservative with a heavy emphasis on abortion, school policy, property taxes, immigration, and alignment with Donald Trump. The raw material also notes that he served as Trump's 2024 Kansas chair, making his current campaign more directly tied to Trump politics than his earlier gubernatorial run.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Strongly pro-life. Calls abortion \"one of the civil rights issues of our time\" and says Kansas should stop being a \"Midwest magnet for abortion.\" Signed abortion restriction legislation as governor."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "As governor, signed Senate Bill 284 granting legal protections to faith-based adoption agencies that cite religious beliefs for not placing children in LGBTQ+ homes."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not made gun policy a centerpiece of his 2026 campaign, though his overall conservative platform and Trump alignment suggest support for gun rights."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Supports deportation of undocumented immigrants and wants to \"keep criminal illegal aliens out of Kansas.\""
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Wants to remove DEI directives and what he calls \"political indoctrination\" from Kansas schools. Pledges to \"get the woke out of our schools\" and refocus classrooms on math, reading, and STEM skills including coding and AI."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Taxes / Property Taxes",
        "stance": "Wants to cut taxes broadly, including amending the state constitution to impose a hard cap on property tax growth. Also proposes cutting residential property taxes and adding exemptions for seniors and disabled veterans."
      },
      {
        "issue": "Trump Alignment",
        "stance": "Served as Trump's 2024 Kansas campaign chairman and runs explicitly on standing \"shoulder to shoulder with President Trump.\""
      },
      {
        "issue": "Healthcare / Medicaid",
        "stance": "Architected KanCare, Kansas's privatized Medicaid system, which he considers a signature achievement from his time as lieutenant governor."
      }
    ],
    "whatYouShouldKnow": [
      "Colyer already served as governor, giving him a statewide executive record no other major candidate can match",
      "He is the only Kansas governor from Hays, a detail that remains politically important in western Kansas",
      "His background as a surgeon is not just professional branding; it includes decades of volunteer medical work in war zones and disaster areas",
      "He lost the 2018 Republican primary to Kris Kobach by roughly 345 votes after becoming governor",
      "He later suspended a gubernatorial campaign after a prostate-cancer diagnosis, then returned to statewide politics for the 2026 race",
      "His 2025 year-end filing showed $2,070,322.09 raised and $1,884,509.78 cash on hand, including a major personal loan",
      "Public sources point to a Catholic background, but they do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. His public background points to a Catholic upbringing in Hays, including attendance at Thomas More Prep and family ties to St. Joseph's Catholic Church, but the available record does not identify a present-day parish.",
    "church": {
      "name": "Specific current church not confirmed",
      "denomination": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
      "details": "Denomination: Catholic background (TMP-Marian, Hays); current affiliation uncertain. Graduated from Thomas More Prep-Marian Catholic High School in Hays (Class of 1978)."
    },
    "quotes": [
      {
        "text": "I'm Jeff Colyer - Trump's 2024 Kansas Chair - and I'm running for Governor.",
        "source": "Jeff Colyer campaign materials, 2026, https://www.jeffcolyer.com/",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "Quotes"
      },
      {
        "text": "I held the line on taxes, including property taxes, and I ended 50 years of litigation over our schools that had eluded over a dozen governors.",
        "source": "Jeff Colyer campaign website, 2026, https://www.jeffcolyer.com/",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "Quotes"
      },
      {
        "text": "How do we defend innocent life? I think this is one of the civil rights issues of our time.",
        "source": "Jeff Colyer campaign materials, 2026, https://www.jeffcolyer.com/get-involved/",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/get-involved/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$2,070,322.09 (2025 year-end)",
      "narrative": "Colyer's 2025 year-end filing showed $2,070,322.09 raised, $185,812.31 spent, and $1,884,509.78 cash on hand. The same filing listed $17,493.28 in-kind and $63,346.68 in other transactions. The raw material also described the campaign as partly self-funded, including a $1.05 million personal loan alongside donor support.",
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
        "title": "Kansashistory.Gov",
        "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011"
      },
      {
        "title": "Nga.Org",
        "url": "https://www.nga.org/governor/jeff-colyer/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/"
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
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
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
    "education": "Strengthening investment in public schools is one of his top campaign themes. His slogan includes \"Better Schools",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://ethanforkansas.com",
    "whoTheyAre": "Ethan Corson is a Democratic state senator from Fairway who is running for governor in 2026. He is a lifelong Kansan whose public biography runs from Garden City Community College baseball to degrees from Washington University in St. Louis and Washington University School of Law, followed by work in Washington and Kansas politics. Corson's resume combines law, party leadership, and government service. Public accounts describe him as a lawyer, a former executive director of the Kansas Democratic Party, and a former official at the U.S. Department of Commerce. He later won a seat in the Kansas Senate, giving him both state and federal policy experience before launching a statewide campaign. He has emerged as one of the most institutionally backed Democrats in the governor's race. The raw material ties him to endorsements from Gov. Laura Kelly, former Gov. Kathleen Sebelius, and Rep. Sharice Davids, which has helped establish him as a leading candidate in the field.",
    "theirRecord": "Corson's record is centered on the Kansas Senate and on policy work outside elected office. Public materials connect him to Senate committee work on judiciary, transportation, taxation, utilities, and oversight, while his campaign has highlighted schools, lower taxes, cost of living, health care access, and agriculture. His candidacy has also been shaped by establishment support and by fundraising. Kansas Reflector's campaign-finance roundup cited his 2025 year-end total at $902,641.13 raised, with $526,975.81 cash on hand after $375,665.32 in spending. The same reporting described him as drawing support from thousands of contributors, with roughly 70% giving less than $100. Corson's public record also stands out because his Jewish identity is part of the public file. Coverage by the Kansas City Jewish Chronicle and other sources makes that religious background clear, even though the available sources did not identify a current synagogue membership.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear, specific public position in the governor's race, though his Democratic platform and party alignment suggest support for abortion access."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Strengthening investment in public schools is one of his top campaign themes. His slogan includes \"Better Schools.\""
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Taxes / Cost of Living",
        "stance": "Wants to lower the cost of living for working families. Helped eliminate the Kansas grocery sales tax. His slogan includes \"Lower Taxes.\""
      },
      {
        "issue": "Healthcare",
        "stance": "Supports expanding healthcare access, especially in rural Kansas. Said \"Kansans should be able to get the care that they need without going broke and without driving for hours to see a doctor.\""
      },
      {
        "issue": "Agriculture / Tariffs",
        "stance": "Opposes Trump-era tariffs on Kansas farmers. Called them \"a completely self-inflicted wound that the federal government has put on Kansas farmers.\""
      },
      {
        "issue": "Small Business",
        "stance": "Says small business is \"how we rebuild rural Kansas\" and wants to make Kansas more affordable for entrepreneurs."
      }
    ],
    "whatYouShouldKnow": [
      "Corson is a sitting Kansas senator and a former executive director of the Kansas Democratic Party",
      "His background also includes work at the U.S. Department of Commerce, giving him a federal policy résumé before entering the governor's race",
      "He has won endorsements from Laura Kelly, Kathleen Sebelius, and Sharice Davids, a significant cluster of Democratic support in Kansas politics",
      "His 2025 year-end campaign report showed $902,641.13 raised, $375,665.32 spent, and $526,975.81 cash on hand",
      "Public reporting described about 70% of his contributors as giving less than $100, pointing to a broad small-dollar base",
      "Public sources identify Corson as Jewish, but they do not identify a current synagogue affiliation"
    ],
    "whereTheyWorship": "Public sources identify Corson as Jewish, but they do not identify a current synagogue affiliation.",
    "church": {
      "name": "Attends a church in the Fairway/KC area (name unknown)",
      "details": "Denomination: Unknown. Lives in Fairway with wife Jenna and sons Isaac and Aiden."
    },
    "quotes": [
      {
        "text": "Opportunities for the next generation of Kansans, so they can build a life right here.",
        "source": "Ethan Corson campaign website, April 1, 2026, https://ethanforkansas.com/",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "Work hard, give back whenever you can and always keep your word.",
        "source": "Ethan Corson campaign website, April 1, 2026, https://ethanforkansas.com/about",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/about",
        "topic": "Quotes"
      },
      {
        "text": "Kansans should be able to get the care that they need without going broke and without driving for hours to see a doctor.",
        "source": "Kansas Reflector, March 8, 2026, https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$902,641.13 (2025 year-end)",
      "narrative": "Corson's 2025 year-end report showed $902,641.13 raised, $375,665.32 spent, and $526,975.81 cash on hand, with $43,019 in other transactions also listed in the filing. The available reporting described the campaign as broad-based rather than self-funded, with thousands of contributors and a large share of small-dollar donations.",
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
        "url": "https://ethanforkansas.com/about"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01EC_202601.pdf"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/"
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
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/"
      },
      {
        "title": "Kcjc.Com",
        "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/"
      },
      {
        "title": "About Ethan",
        "url": "https://ethanforkansas.com/about/",
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
    "education": "One of her signature issues. Fiercely opposes private-school vouchers, calling them \"a scam, a transfer of wealth to the already rich\" and arguing that 60 Kansas counties have no private schools, making vouchers useless for most rural families. Strong advocate for public school funding. Walked from Shawnee to Topeka with education advocates to push for school funding increases",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://cindyforkansas.com/",
    "whoTheyAre": "Cindy Holscher is a Democratic state senator from Overland Park running for governor. She was born April 26, 1969, in Slater, Missouri, and her campaign biography places her in a working-class family headed by a union construction worker and an elementary school custodian. She says she was raised on a farm, became the first college graduate in her family, and has lived in Kansas for more than 25 years with her husband, Greg, and their three children. Before running for office, Holscher worked in communications and business operations, including jobs at R.H. Donnelley, The Add Sheet, and Sprint, where her campaign says she managed multimillion-dollar budgets and operations. She later entered politics through Johnson County, carrying a biography built around public schools, family economics, and practical statehouse work rather than celebrity or movement politics.",
    "theirRecord": "Holscher served in the Kansas House from 2017 through 2020 and has served in the Kansas Senate since 2021. She was part of the coalition that reversed key pieces of the Brownback tax experiment in 2017, pushed for Medicaid expansion, and became a frequent Democratic voice on school funding, reproductive rights, and consumer concerns. One of her clearest institutional projects was co-founding the Women's Bipartisan Caucus in the Legislature, an effort meant to create cross-party working relationships in a polarized statehouse. She has also made opposition to private-school vouchers a signature issue, arguing that the policy would drain public money from local schools while doing little for many rural counties that have no private-school option at all. Her 2026 governor's race also carries a more personal political fight. In August 2025, Holscher publicly accused aides to Gov. Laura Kelly of pressuring Democrats to stay out of the gubernatorial primary when Chris Mann was seen as the preferred candidate. Mann later ran for attorney general instead, but the episode exposed a split between Holscher and the party establishment.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Supports reproductive freedom. Has been a visible Democratic voice on reproductive rights in the Kansas Legislature."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy in the available source material."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "One of her signature issues. Fiercely opposes private-school vouchers, calling them \"a scam, a transfer of wealth to the already rich\" and arguing that 60 Kansas counties have no private schools, making vouchers useless for most rural families. Strong advocate for public school funding. Walked from Shawnee to Topeka with education advocates to push for school funding increases."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Supports legalization of medical marijuana."
      },
      {
        "issue": "Healthcare / Medicaid",
        "stance": "Supports Medicaid expansion and protecting ACA tax credits. Said \"Politicians are making dangerous cuts to our programs, Medicaid and Social Security. That's hurting us.\""
      },
      {
        "issue": "Tariffs / Agriculture",
        "stance": "Opposes Trump tariffs, saying the federal government inflicted \"a completely self-inflicted wound\" on Kansas farmers."
      },
      {
        "issue": "Taxes",
        "stance": "Campaigns on lowering cost of living for working-class families. Was part of the bipartisan coalition that reversed the Brownback-era tax cuts in 2017."
      }
    ],
    "whatYouShouldKnow": [
      "Holscher has nearly a decade in the Kansas Legislature, first in the House and then in the Senate, giving her one of the deeper governing records in the Democratic field",
      "She was part of the coalition that helped reverse the Brownback tax cuts in 2017, a major turning point in recent Kansas fiscal politics",
      "She co-founded the Women's Bipartisan Caucus, one of the clearest examples of her attempt to work across party lines while still running as a distinctly Democratic candidate",
      "Public education is central to her record and campaign, and she has highlighted walking from Shawnee to Topeka with education advocates to push for school funding",
      "She has become one of the Legislature's sharper critics of school-voucher proposals, arguing they mainly benefit families already using private schools and leave many rural counties out entirely",
      "Her 2025 year-end filing reported $397,952.07 raised, $218,060.34 spent, and $179,891.73 cash on hand"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "church": {
      "name": "Not confirmed; attended events at Shawnee Mission UU Church and St. Andrew's Episcopal",
      "details": "Denomination: Unknown. Attended a meeting at Shawnee Mission Unitarian Universalist Church in Lenexa (October 2025 -- likely a campaign event, not worship)."
    },
    "quotes": [
      {
        "text": "The push for 'school choice' is just another way to get more of our taxpayer dollars into the hands of those who are already wealthy.",
        "source": "Johnson County Post, March 13, 2023, https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
        "date": "2026-03-31",
        "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
        "topic": "Quotes"
      },
      {
        "text": "Politicians are making dangerous cuts to our programs, Medicaid and Social Security. That's hurting us, and with the expiration of ACA tax credits, that's a huge threat.",
        "source": "Kansas Reflector, March 8, 2026, https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "topic": "Quotes"
      },
      {
        "text": "All three of us were told basically 'do not run' because Chris Mann's the guy.",
        "source": "Kansas Reflector, August 1, 2025, https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$397,952.07 (2025 year-end)",
      "narrative": "Holscher entered the race with a respectable but clearly second-tier fundraising position in the Democratic primary for governor. Her 2025 year-end filing reported $397,952.07 raised, $218,060.34 spent, and $179,891.73 cash on hand, with no personal loans listed in the source material. The filing points to a conventional donor-backed campaign rather than a self-financed one. Named contributors visible in the raw material included Thomas Adrian, Quinta Avance, Elizabeth Bishop, Archie Blumhorst, Rick Blumhorst, and Ross Boelling.",
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
        "title": "Johnsoncountypost.Com",
        "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CH_202601.pdf"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Cindy_Holscher"
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
    "education": "Has not taken a clear public position",
    "family": "Opposes allowing transgender girls to compete in girls' sports. This is an unusual position for a Democrat in a gubernatorial primary and one of his most politically distinctive stances",
    "campaignWebsite": "https://www.tuley4gov2026.com/about-marty",
    "whoTheyAre": "Marty Tuley is a Lawrence-area Democrat running for governor in 2026. He presents himself as a fourth-generation Kansan whose family roots run through farming, football, and public education, and his campaign biography says his people are \"farmers, teachers, and working people.\" He is married to Lovena Tuley. Unlike the better-known Democrats in the race, Tuley is not coming out of the Legislature, county government, or statewide advocacy groups. His public identity is built around work as an author, personal trainer, and former gym owner. His campaign has relied heavily on his own website and social-media accounts rather than on a long trail of public office, endorsements, or institutional support. That outsider status is one of the main facts about his candidacy. The record available online shows a first-time statewide candidate trying to build a plain-spoken, culturally moderate Democratic message around health, schools, family life, and personal freedom.",
    "theirRecord": "Tuley does not bring an elected-office record into the governor's race. What voters have instead is a campaign platform centered on public schools, health and fitness, marijuana legalization, economic growth, and what he describes as common-sense government. His message is less about party structure than about broad dissatisfaction with politics as usual. His clearest break with the rest of the Democratic field is on transgender athletes in girls' sports. Tuley opposes allowing transgender girls to compete in girls' sports, a position that is unusual in a Democratic gubernatorial primary and one of the few issue positions that clearly distinguishes him from the better-funded candidates. The older public record around him is thin, but it is not spotless. Raw research on his background points to legal battles tied to Total Fitness Athletic Center in 2003, when he was associated with the gym business. That episode sits much farther back in time than this campaign, but it is one of the few documented disputes attached to his name in public sources.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion in available materials."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Opposes allowing transgender girls to compete in girls' sports. This is an unusual position for a Democrat in a gubernatorial primary and one of his most politically distinctive stances."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Supports legalizing marijuana in Kansas, with tax revenue invested in public schools."
      },
      {
        "issue": "Public Schools",
        "stance": "Tuley supports strong public school funding, wants to raise teacher pay, and wants two healthy meals a day for every Kansas public school child. He opposes school vouchers, saying they funnel taxpayer dollars to private schools while 60 Kansas counties do not even have a private school."
      },
      {
        "issue": "Health and Fitness",
        "stance": "As an author and personal trainer, he wants to address obesity as a statewide health crisis and promote farm-to-table food programs."
      },
      {
        "issue": "Personal Freedoms",
        "stance": "His campaign language emphasizes \"protecting personal freedoms,\" but the specifics beyond marijuana legalization are not well defined in available public materials."
      }
    ],
    "whatYouShouldKnow": [
      "Tuley is running for governor without prior elected-office experience, so his campaign rises or falls on biography and message rather than on a governing record",
      "He works from a health-and-fitness background as an author, personal trainer, and former gym owner, which makes him an unusual candidate in a race dominated by legislators and statewide officials",
      "His opposition to transgender girls competing in girls' sports is one of the most specific and politically distinctive positions in his campaign",
      "His 2025 year-end filing showed a very small operation: $2,600 raised, $193.89 spent, and $2,406.11 cash on hand",
      "The named donors visible in that filing were Todd Decuir ($500), George Grieb ($500), Ernesto Hodison ($100), and William England ($50)",
      "Most of the public information about Tuley comes from his own campaign materials and social-media pages rather than from sustained independent coverage",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Tuley. His campaign language leans heavily on values, family, and Kansas roots, but the available public record does not name a congregation or denomination.",
    "quotes": [
      {
        "text": "I'm a fourth-generation Kansan with deep roots in our state's soil and values.",
        "source": "Tuley campaign about page, April 1, 2026, https://www.tuley4gov2026.com/about-marty",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/about-marty",
        "topic": "Quotes"
      },
      {
        "text": "I'm not here to play party politics. I'm here to lead - with common sense, straight talk, and Kansas values.",
        "source": "Tuley campaign about page, April 1, 2026, https://www.tuley4gov2026.com/about-marty",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/about-marty",
        "topic": "Quotes"
      },
      {
        "text": "I believe in strong public schools, growing our local economy, and protecting personal freedoms.",
        "source": "Tuley campaign about page, April 1, 2026, https://www.tuley4gov2026.com/about-marty",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/about-marty",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$2,600.00 (2025 year-end)",
      "narrative": "Tuley's 2025 year-end Kansas ethics filing showed $2,600.00 raised, $193.89 spent, and $2,406.11 cash on hand. By gubernatorial standards, that is a very small campaign operation. The filing shows a short list of named contributors, including Todd Decuir ($500), George Grieb ($500), Ernesto Hodison ($100), and William England ($50). The available public finance record points to a low-dollar campaign with limited outside support.",
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
        "title": "Www2.Ljworld.Com",
        "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/"
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
    "education": "She homeschooled her two youngest children and her campaign emphasizes restoring parental rights in education",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/charlotte-o-hara",
    "whoTheyAre": "Charlotte O'Hara is a Republican candidate for governor and a longtime conservative figure in Johnson County politics. Her campaign biography says she was raised on a farm in Bourbon County, graduated from the University of Kansas, spent more than 20 years as a general contractor, homeschooled her two youngest children, and later co-owned a small manufacturing company in Olathe with two of her sons. O'Hara is not a new face in Kansas politics. She served in the Kansas House and later on the Johnson County Commission, where she built a public identity around taxes, spending, property rights, and confrontational local politics. By the time she entered the 2026 governor's race, she was already well known to Republican activists looking for a harder-edged candidate in a crowded field.",
    "theirRecord": "O'Hara's record is rooted more in local government and movement politics than in statewide office. In Johnson County she became closely identified with fights over tax policy, public spending, and the direction of county government. Her earlier service in the Kansas House and her work as a Republican district chairwoman and precinct committeewoman gave her a long runway inside party politics before this statewide bid. During the COVID-19 years, O'Hara made opposition to masks, vaccines, school closures, and business shutdowns a central part of her public message. Her 2026 campaign carries that same approach into statewide politics, pairing anti-shutdown rhetoric with broader attacks on what she describes as government overreach, election problems, and cultural drift. The result is a candidacy aimed squarely at the party's hard-right lane.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Her campaign platform includes \"supporting families and protecting life,\" though specific policy details beyond that broad framing have not been elaborated in the source material."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a detailed public position on gun policy in the source material reviewed, though her broader \"constitutional freedoms\" messaging implies support for gun rights."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a specific public position on immigration in the source material reviewed."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "She homeschooled her two youngest children and her campaign emphasizes restoring parental rights in education."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "COVID / Government Overreach",
        "stance": "O'Hara has made opposition to masks, vaccines, school closures, and business shutdowns one of the most visible parts of her political identity. She says she refused masks and vaccines while serving on the Johnson County Commission, and her 2026 campaign carries that anti-lockdown message forward."
      },
      {
        "issue": "Property Taxes",
        "stance": "A central campaign issue. She has said she \"cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes\" and opposes tax incentive programs that she says increase property taxes for everyone else."
      },
      {
        "issue": "Property Rights",
        "stance": "Strongly pro-property-rights. This has been a defining theme of her Johnson County political career."
      },
      {
        "issue": "Election Integrity",
        "stance": "Listed as a campaign priority, though specific proposals were not detailed in the source material."
      },
      {
        "issue": "Anti-DEI",
        "stance": "O'Hara has positioned herself against what she describes as left-leaning cultural influences in Kansas institutions."
      }
    ],
    "whatYouShouldKnow": [
      "O'Hara's campaign biography says she was raised on a Bourbon County farm, graduated from KU, worked as a general contractor for more than two decades, and now co-owns a manufacturing company in Olathe with two sons",
      "She has held both local and state office, serving in the Kansas House and on the Johnson County Commission before launching a race for governor",
      "Her political brand has long been tied to tax, spending, and property-rights fights in Johnson County, where she became a familiar conservative voice",
      "During COVID, she publicly opposed masks, vaccines, and shutdowns while serving on the Johnson County Commission, and she has kept that message central to her statewide campaign",
      "Her 2025 year-end state filing reported $589,550.97 raised, $78,652.57 spent, and $510,898.40 cash on hand",
      "The same filing showed a $193,000 contribution from O'Hara herself, making self-funding a major part of her early money story"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. O'Hara's campaign biography says she grew up in a family tradition of faith, but the source material does not name a current congregation or church website.",
    "quotes": [
      {
        "text": "I grew up in our farm family's tradition of faith, grit and hard work.",
        "source": "O'Hara campaign biography, April 1, 2026, https://oharaforkansas.com/about-charlotte-ohara/",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/about-charlotte-ohara/",
        "topic": "Quotes"
      },
      {
        "text": "I would be honored to earn your support for a PROVEN conservative to bring Kansas back to its promise.",
        "source": "O'Hara campaign biography, April 1, 2026, https://oharaforkansas.com/about-charlotte-ohara/",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/about-charlotte-ohara/",
        "topic": "Quotes"
      },
      {
        "text": "I cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes.",
        "source": "Charlotte O'Hara campaign materials",
        "date": "2026-03-31",
        "topic": "Property Taxes:"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$589,550.97 (2025 year-end)",
      "narrative": "O'Hara opened the race with one of the stronger balances among the non-establishment candidates for governor. Her 2025 year-end filing reported $589,550.97 raised, $78,652.57 spent, and $510,898.40 cash on hand. That total was not built entirely on outside donors. The filing showed a $193,000 contribution from O'Hara herself, alongside smaller listed donations from contributors including Victor Wirtz, Ralph Yaple, Sandra Nider, Nancy Czinege, and Pam and Robb Ferguson.",
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
    "education": "Emphasizes parental rights and school support, informed by her experience homeschooling children with learning challenges. Rogers has not released detailed policy papers on guns, immigration, or most other statewide issues. Her campaign is built more around themes of government waste and family-centered values than specific legislative proposals",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://stacyrogersforks.com/",
    "whoTheyAre": "Stacy Rogers is a Wichita business owner running in the 2026 Republican primary for governor. Public campaign materials present her as a political newcomer, a mother of three sons, and a candidate shaped by family experience rather than time in the Legislature. Two of her sons have learning challenges, and that has become part of how she talks about education, parental authority, and state policy. Rogers built her campaign around a straight-talk, outsider image. She was one of the earliest Republicans to enter the race, and she has tried to frame that early start as proof that she is less cautious and less consultant-driven than better-known candidates in the field. Her public profile is much thinner than candidates such as Ty Masterson, Jeff Colyer, or Vicki Schmidt, but her campaign has worked to make family life, small business, and frustration with politics-as-usual the center of her biography.",
    "theirRecord": "Rogers does not have a legislative voting record or a long history in statewide office, so her record is mostly the campaign itself and the themes she has emphasized in public appearances. She has focused on property taxes, medical freedom, government efficiency, and a family-centered approach to school policy. That makes her candidacy less about a governing paper trail and more about how she wants voters to read her background. Her campaign messaging is openly anti-bureaucratic. She says Kansas government should be audited department by department for waste, mishandling, and fraud, and she casts herself as someone who would run state government more like a business than a political institution. The tradeoff is that the public record is still relatively thin. Compared with the front-runners, there is less evidence of how she has handled a major public office, a legislative fight, or a statewide crisis.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Describes herself as pro-life. Her campaign lists \"Supporting families and protecting life\" with expanded resources for parents and affordable healthcare."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Emphasizes parental rights and school support, informed by her experience homeschooling children with learning challenges. Rogers has not released detailed policy papers on guns, immigration, or most other statewide issues. Her campaign is built more around themes of government waste and family-centered values than specific legislative proposals."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Property Taxes",
        "stance": "This is her lead issue. She says she \"cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes\" and wants to sunset STAR bonds that she says \"funnel millions into investor pockets.\""
      },
      {
        "issue": "Medical Freedom",
        "stance": "Believes families should have the right to make their own medical decisions, \"even if those decisions are different from what government bureaucrats recommend.\" This extends to her experience raising children with learning challenges."
      },
      {
        "issue": "Government Efficiency",
        "stance": "Wants a \"Day One Executive Order\" to audit every state department for \"inefficiencies, mishandling and fraud.\""
      }
    ],
    "whatYouShouldKnow": [
      "Rogers is one of the least established candidates in the governor's race, with far less public record than the statewide officeholders and legislative leaders in the field",
      "She has made raising children with learning challenges a central part of her political identity and uses that experience when talking about school policy and parental rights",
      "Her campaign message is built around property taxes, small business, medical freedom, and government efficiency rather than a long list of detailed policy proposals",
      "She was one of the first Republicans to declare for the 2026 governor's race and has tried to use that early start to stand out in a crowded field",
      "Her 2025 year-end filing showed about $25,542.98 raised and $14,470.23 cash on hand, which is a real campaign account but far smaller than the leading governor candidates",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Rogers uses Christian language in her public presentation, including describing herself as a \"Child of God,\" but the available record does not name a congregation, denomination, or church website.",
    "quotes": [
      {
        "text": "I cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes.",
        "source": "Stacy Rogers campaign website, 2026-04-01, https://stacyrogersforks.com/",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "Quotes"
      },
      {
        "text": "Go through each Department with a fine tooth comb, root out inefficiencies, mishandling and fraud.",
        "source": "Stacy Rogers campaign website, 2026-04-01, https://stacyrogersforks.com/",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "Quotes"
      },
      {
        "text": "Families should have the right to make the medical decisions that benefit themselves and their kids, even if those decisions are different from what government bureaucrats recommend.",
        "source": "Yahoo News / campaign coverage, 2026-04-01, https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html",
        "date": "2026-03-31",
        "url": "https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$24,862.65 (2025 year-end)",
      "narrative": "Rogers' 2025 year-end filing showed roughly $25,542.98 raised and $14,470.23 cash on hand. That is enough to show a functioning campaign committee, but it leaves her far behind the better-funded candidates in the Republican field. The public money trail suggests a modest campaign still trying to build donor support rather than a statewide operation with major institutional backing. No large self-funding pattern surfaced in the reporting reviewed for this profile.",
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
        "title": "Yahoo.Com",
        "url": "https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html"
      },
      {
        "title": "Kake.Com",
        "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html"
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
    "education": "Her signature issue. She fought for school reopening during COVID using data from her analytics firm and champions \"parents' rights\" in education decisions. Wants to root out what she calls \"left-leaning cultural influences from Kansas institutions",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://www.kansascomeback.com/about",
    "whoTheyAre": "Joy Eakins is a Wichita business executive and Republican candidate for governor in 2026. Her public biography runs through the technology and data world before turning to local education politics. Campaign material and business profiles tie her to Cornerstone Data, the Wichita school board, and a long professional resume that includes Bell Labs, Lucent, and Avaya before she founded her own analytics firm in 2008. Eakins served on the Wichita Board of Education after winning a close race in 2013. Her statewide campaign leans heavily on that chapter, especially her arguments during the COVID era that schools could reopen safely. She presents herself as an outsider to the party hierarchy, but not as a newcomer to public arguments over education, public health, and local government.",
    "theirRecord": "Eakins' clearest public record comes from the Wichita school board. She has used that experience to argue that Kansas leaders were too slow and too rigid during the pandemic, and she has said her firm's data analysis showed schools could bring students back sooner. That reopening fight is the strongest policy thread running through her campaign. Her gubernatorial message also puts her on the populist side of the Republican primary. In debate coverage and campaign interviews, she has embraced Donald Trump, talked about a coming \"golden age,\" and argued that families should have more control over medical and educational decisions. Her record is thinner on statewide office or legislation, but her school-board years and business history give voters a clear sense of the issues she wants to own.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a specific public position on abortion in the available record, though her self-described identity as a \"strong conservative and America First patriot\" and alignment with Trump suggest a pro-life stance."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy, though her overall conservative positioning suggests support for gun rights."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Her signature issue. She fought for school reopening during COVID using data from her analytics firm and champions \"parents' rights\" in education decisions. Wants to root out what she calls \"left-leaning cultural influences from Kansas institutions.\""
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Medical Freedom",
        "stance": "Believes families should have the right to make their own medical decisions, \"even if those decisions are different from what government bureaucrats recommend.\" This is a direct reference to COVID-era vaccine and health mandates."
      },
      {
        "issue": "Taxes",
        "stance": "Wants to cut taxes and reduce regulations. Supports limiting the size of government and cutting state budgets."
      },
      {
        "issue": "Trump Alignment",
        "stance": "Explicitly aligns with Donald Trump and claims Kansas is on the cusp of a \"golden age\" under his leadership."
      }
    ],
    "whatYouShouldKnow": [
      "Eakins built her campaign around her time on the Wichita school board and her argument that Kansas could have reopened classrooms sooner during COVID",
      "She founded Cornerstone Data in 2008 and has made her business background a central credential in the governor's race",
      "Her campaign site describes her as a devout Christian and a faithful member of River Community Church",
      "Her 2025 finance report showed $1,142,759.55 in receipts, but the defining number in the filing was a $1,000,000 personal loan to her own campaign",
      "The filing shows she had $1,026,490.64 cash on hand after limited early spending, which put her in the top tier of self-funded Republican candidates"
    ],
    "whereTheyWorship": "Eakins' campaign biography says she is a faithful member of River Community Church. The church website is https://www.rivercc.org/, and that is the clearest public church tie in the available record.",
    "church": {
      "name": "River Community Church",
      "details": "The campaign bio says she is a \"devout Christian\" and a \"faithful member of River Community Church. Church URL verified in public web search: https://www.rivercc.org/."
    },
    "quotes": [
      {
        "text": "Joy used her data analytics firm to prove how we could get kids back into Kansas classrooms safely.",
        "source": "Kansas Comeback campaign website, accessed April 1, 2026, https://www.kansascomeback.com/education",
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
        "source": "KSN, accessed April 1, 2026, https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
        "date": "2026-03-31",
        "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$1,142,759.55 (2025 year-end)",
      "narrative": "Eakins reported $1,142,759.55 in receipts, $116,268.91 in spending, and $1,026,490.64 cash on hand. The filing also shows a $1,000,000 personal loan made on December 29, 2025, which means the campaign's financial strength came primarily from her own money. That makes her one of the most heavily self-funded candidates in the race. The campaign has resources, but the public filing shows far less evidence of a broad outside donor base than of personal wealth underwriting the run.",
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
        "url": "https://www.kansascomeback.com/"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/about"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/education"
      },
      {
        "title": "Cornerstonedata.Com",
        "url": "https://cornerstonedata.com/about-us/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01JK_AT.pdf"
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
        "title": "Rivercc.Org",
        "url": "https://www.rivercc.org/"
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
    "education": "Supports restoring parental rights in education",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://philipsarnecki.org/",
    "whoTheyAre": "Philip Sarnecki is a Republican candidate for governor from Bucyrus who is trying to turn private-sector success into a statewide political brand. His public identity is built around business ownership, Christian language, and an outsider message aimed at voters who are frustrated with the existing Republican field. He is married to Heidi, and his campaign materials present him as a husband, father, and businessman rather than a career officeholder. Sarnecki's biography is rooted in ventures such as RPS Financial and 513 Films. Public materials say his companies have employed nearly 1,000 Kansans across multiple industries. He has not held statewide office, so his case for governor depends almost entirely on how persuasive voters find his business history, values language, and self-presentation.",
    "theirRecord": "Sarnecki does not bring a legislative or executive government record into this race. His public record is mainly business, campaign activity, and media appearances, including promotion of 513 Films as a faith-based enterprise and a broader argument that Kansas needs a governor from outside the political establishment. That outsider posture is paired with unusually large self-funding. His 2025 year-end filing shows a campaign with real financial heft, but much of that money came from Sarnecki himself rather than from a broad donor network. So the record here is less about what he has done in public office and more about whether voters see him as a credible businessman or as a wealthy newcomer trying to buy his way into the top tier.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Opposes abortion. He participated in the January 2026 GOP gubernatorial debate where all six Republican candidates found unity on abortion opposition."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a detailed public position, but his campaign is built around conservative values and alignment with President Trump."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a specific public position on immigration in available sources."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Supports restoring parental rights in education."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Opposes marijuana legalization. This was one of the consensus positions among all six GOP candidates at the January 2026 debate."
      },
      {
        "issue": "Taxes",
        "stance": "Wants to lower taxes, especially property taxes. He says \"career politicians have failed to fix the issue.\""
      },
      {
        "issue": "Election Integrity",
        "stance": "Lists ensuring election integrity as a campaign priority."
      },
      {
        "issue": "Medical Freedom",
        "stance": "Lists protecting medical freedoms as a campaign priority, though he has not specified what that means in detail."
      }
    ],
    "whatYouShouldKnow": [
      "Sarnecki is running as a businessman and outsider, not as a current officeholder or former statewide official",
      "His campaign messaging is explicitly Christian and treats faith as part of his public identity",
      "His public business story includes RPS Financial, 513 Films, and claims of employing nearly 1,000 Kansans",
      "His 2025 year-end filing reported $2,528,715.73 raised and $2,306,000 cash on hand",
      "The dominant finance fact is self-funding: the filing reflects a $2 million self-loan and a campaign structure driven heavily by Sarnecki's own money",
      "He entered the race with enough cash to be financially serious even without a long political donor history",
      "Public sources do not identify a current church affiliation or church website"
    ],
    "whereTheyWorship": "Public materials identify Sarnecki as Christian, but public sources do not name a current church affiliation or church website. His campaign is faith-forward, but the available record stops short of tying him to a specific congregation.",
    "quotes": [
      {
        "text": "I'm just a Kansas dad, husband and businessman.",
        "source": "Philip Sarnecki campaign materials, April 1, 2026, https://philipsarnecki.org/",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "Quotes"
      },
      {
        "text": "Guided by his Christian faith and conservative values, Philip believes in hard work, strong families, and accountable leadership, not career politics.",
        "source": "Real Media KC, September 19, 2025, https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "date": "2026-03-31",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "topic": "Quotes"
      },
      {
        "text": "Philip Sarnecki is a Kansas businessman, family man, and job creator who has built companies that today employ approximately 1,000 people across multiple industries.",
        "source": "Real Media KC, September 19, 2025, https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "date": "2026-03-31",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$2,528,715.73 (direct committee receipts at 2025 year-end)",
      "narrative": "Sarnecki's 2025 year-end report shows $2,528,715.73 raised, $222,715.73 spent, and $2,306,000 cash on hand. That is one of the largest early totals in the governor's race, but it is not a conventional donor-driven buildout. The filing reflects a campaign powered primarily by Sarnecki's own money, including a $2 million self-loan. The named outside donors visible in the filing are much smaller than the self-funding component, which makes this less a broad-based grassroots finance story than a heavily self-financed campaign with some outside support layered on top.",
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
    "education": "He wants to remove what he calls DEI directives and political indoctrination from Kansas schools and focus classrooms on math, reading, STEM, coding, and AI",
    "family": "Has not taken a clear public position",
    "campaignWebsite": "https://kriskobach.com/meet-kris/",
    "whoTheyAre": "Kris Kobach is Kansas attorney general and a Republican candidate for governor in 2026. He grew up in Topeka, graduated from Washburn Rural High School, and built a national reputation as a lawyer and conservative activist before returning to Kansas elective politics. His resume includes degrees from Harvard, Oxford, and Yale, a law-teaching career, federal service, and years in Kansas statewide office. He lives near Lecompton with his wife, Heather, and their five children. Kobach has been one of the best-known and most polarizing Republicans in Kansas for more than a decade. He served as secretary of state from 2011 to 2019, lost the 2018 governor's race to Laura Kelly, won the attorney general's office in 2022, and has kept the same political identity throughout: hard-line on immigration, aggressive on election law, and eager to turn legal fights into public arguments.",
    "theirRecord": "As attorney general, Kobach has used the office for high-profile conservative litigation, including lawsuits involving federal vaccine policy, immigration enforcement, and COVID-era claims against Pfizer. That work fits the broader pattern of his career, which has long favored visible legal combat over low-profile administrative work. His earlier tenure as secretary of state remains central to his public record. Kobach championed Kansas' proof-of-citizenship voter registration law, which federal courts struck down after finding scant evidence of noncitizen voting and large numbers of eligible voters blocked from the rolls. The law's collapse, and the litigation costs that came with it, remain one of the defining controversies of his career. Kobach also still carries the political baggage of the 2022 Federal Election Commission penalty tied to his 2020 U.S. Senate campaign. The FEC fined him $30,000 after concluding his campaign had received an illegal in-kind corporate contribution through below-market access to We Build the Wall's fundraising list. That episode kept alive another longstanding theme in Kobach's career: national profile, sharp elbows, and ethical fights that do not fully fade.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Kobach has described abortion as \"one of the civil rights issues of our time.\" He has said Kansas should shed its status as a \"Midwest magnet for abortion\" and cited the record 19,811 abortions performed in Kansas in 2024. He supports restricting abortion access."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a prominent public position on gun policy in his governor's campaign materials, though he has a long record as a conservative and no history of supporting gun restrictions."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Kobach has made immigration enforcement a defining issue of his entire career. As attorney general, he has pursued federal immigration-related litigation, and his governor's campaign promises to \"keep criminal illegal aliens out of Kansas\" and support deportation. He has been one of the loudest conservative voices on border enforcement in Kansas for over a decade."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "He wants to remove what he calls DEI directives and political indoctrination from Kansas schools and focus classrooms on math, reading, STEM, coding, and AI."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Election Law / Voter Registration",
        "stance": "As secretary of state, Kobach championed a proof-of-citizenship voter registration law that was struck down in federal court after it blocked over 31,000 eligible citizens while finding only 39 noncitizens on the rolls. He remains a leading voice for stricter voter registration rules."
      },
      {
        "issue": "Judicial Selection",
        "stance": "Kobach is one of the most prominent backers of the 2026 amendment to elect Kansas Supreme Court justices. He has argued that \"people, not only lawyers in smoke-filled back rooms, should have a voice in selecting Kansas Supreme Court justices.\""
      },
      {
        "issue": "Taxes / Economy",
        "stance": "He supports cutting property taxes, imposing a hard constitutional cap on property tax growth, adding exemptions for seniors and disabled veterans, and cutting residential property taxes broadly."
      }
    ],
    "whatYouShouldKnow": [
      "Kobach is the sitting attorney general and a former secretary of state, so his record spans both law enforcement and election administration",
      "His proof-of-citizenship law as secretary of state was struck down in federal court after Kansas blocked more than 31,000 eligible voters while proving very few noncitizen registrations",
      "He ended 2025 with $502,626 cash on hand after raising $337,330.24, giving him a real war chest for a Kansas primary",
      "In December 2022, the FEC fined him $30,000 over an illegal in-kind contribution tied to We Build the Wall's email list during his Senate campaign",
      "He has become a leading public voice for the 2026 push to elect Kansas Supreme Court justices rather than keep the state's current nominating commission system"
    ],
    "whereTheyWorship": "Public reporting ties Kobach to Morning Star Church in Lawrence. The church website is https://msclawrence.com/, and local reporting has referred to it as his church.",
    "church": {
      "name": "Morning Star Church, Lawrence, KS",
      "denomination": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "details": "Denomination: Evangelical / Non-denominational (affiliated with Morning Star International, Nashville). Church Address: 998 N 1771 Rd, Lawrence, KS 66049."
    },
    "quotes": [
      {
        "text": "People, not only lawyers in smoke-filled back rooms, should have a voice in selecting Kansas Supreme Court justices.",
        "source": "Kansas Reflector, March 19, 2025, https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
        "topic": "Quotes"
      },
      {
        "text": "Today marks an historic turning point in Kansas. Voters will now get to decide whether to reclaim the right to vote for justices, which they enjoyed from statehood until 1958.",
        "source": "Kris Kobach campaign document, 2022, https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "topic": "Quotes"
      },
      {
        "text": "Currently, Kobach is engaged in three federal lawsuits against the Biden administration.",
        "source": "Kris Kobach campaign biography, 2022, https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$337,330.24 (2025 year-end)",
      "narrative": "Kobach's January 2026 state filing showed $337,330.24 raised, $52,558.52 spent, and $502,626 cash on hand. That left him with a substantial balance entering a crowded Republican primary. The filing shows a broad list of individual contributors rather than one overwhelming self-loan. But the larger money story around Kobach is not only the current balance. It is the long public trail of legal and ethical fights attached to earlier campaigns, including the FEC penalty over We Build the Wall.",
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
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/"
      },
      {
        "title": "Npr.Org",
        "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba"
      },
      {
        "title": "Aclukansas.Org",
        "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/"
      },
      {
        "title": "Msclawrence.Com",
        "url": "https://msclawrence.com/"
      },
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf"
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
    "education": "Has not taken a clear public position",
    "family": "Ashley Mann -- Cardiothoracic surgeon practicing in Topeka (some reports say Olathe). Supported Chris in opening his law firm in 2016.; Details",
    "campaignWebsite": "https://chrismannforkansas.com/",
    "whoTheyAre": "Chris Mann is a Lawrence attorney and Democratic candidate for Kansas attorney general. His campaign and race profiles describe a career that moved from policing into prosecution and private law practice. He became a police officer at 21, was struck by a drunk driver during a traffic stop in 2002, then left law enforcement, went to law school, and later worked as a prosecutor in Wyandotte County and at the Kansas Securities Commission before opening a Lawrence law firm in 2016. Mann first ran statewide in 2022 and nearly beat Kris Kobach in one of the closest Kansas races of that cycle. He returned for a rematch in 2026 with a biography that is still built around public safety, courtroom work, and the argument that the attorney general's office should focus more on basic law enforcement than on partisan headline fights. Public sources also identify his wife, Ashley, as a surgeon practicing in Olathe.",
    "theirRecord": "Mann's record is professional rather than legislative. His campaign points to his time as a police officer, his work as a prosecutor, and his service at the Kansas Securities Commission as the clearest evidence of what kind of attorney general he would be. He has also served as national chairman of Mothers Against Drunk Driving, a role that ties his public life to anti-DUI advocacy and to Kansas's ignition-interlock law for offenders. His electoral record is already unusual for a Kansas Democrat. In 2022 he lost to Kobach by 17,363 votes, 50.8% to 49.1%, the closest statewide race in Kansas that year. He announced a second run on July 30, 2025, framing the race as a choice between a law-enforcement-focused attorney general and Kobach's highly ideological approach to the office.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion in the source material reviewed. His campaign focuses on law enforcement and constitutional themes rather than social issues."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy in the source material reviewed."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration in the source material reviewed. Mann's public record is professional rather than legislative. He is asking voters to judge him on his career as a police officer and prosecutor rather than on a list of issue positions."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Public Safety and Law Enforcement",
        "stance": "Mann's entire campaign is built around his background as a police officer and prosecutor. He frames the attorney general's job as protecting Kansas families and defending the rule of law rather than waging partisan culture wars. His campaign slogan is \"common sense, common ground.\""
      },
      {
        "issue": "DUI / Drunk Driving",
        "stance": "Mann was struck by a drunk driver during a traffic stop in 2002, which ended his police career. He went on to become national chairman of Mothers Against Drunk Driving and is closely tied to Kansas's ignition-interlock law for DUI offenders."
      },
      {
        "issue": "Contrast with Kobach",
        "stance": "His campaign is explicitly positioned as a practical alternative to Kris Kobach. He argues the attorney general's office should focus on basic law enforcement and consumer protection rather than headline-grabbing ideological fights."
      }
    ],
    "whatYouShouldKnow": [
      "Mann worked as a police officer before he went to law school, and his campaign still treats that early law-enforcement experience as the core of his résumé",
      "In 2002 he was hit by a drunk driver during a traffic stop, an event that ended his police career and became part of the story behind his later legal and anti-DUI work",
      "He later worked as a prosecutor in Wyandotte County, served at the Kansas Securities Commission, and opened a private law firm in Lawrence in 2016",
      "Mann was the 2022 Democratic nominee for attorney general and lost to Kris Kobach by 17,363 votes, making it the closest statewide Kansas race of that cycle",
      "He has served on the national board of Mothers Against Drunk Driving since 2014 and is identified in the source material as the group's national chairman",
      "His 2025 year-end filing reported $536,639.57 raised, $280,041.49 spent, and $257,257.08 cash on hand"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Mann's campaign uses faith language in places, but the source material does not name a congregation or church website.",
    "quotes": [
      {
        "text": "Chris Mann has dedicated his life to serving and protecting Kansas communities - first as a police officer and then as a prosecutor.",
        "source": "Chris Mann campaign biography, April 1, 2026, https://chrismannforkansas.com/",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "He will defend the Constitution, protect the rule of law, and ensure Kansas families are safe.",
        "source": "Chris Mann campaign biography, April 1, 2026, https://chrismannforkansas.com/",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "Defend the rule of law, protect our rights, protect our families and make Kansas a safer place to live.",
        "source": "Chris Mann campaign platform, July 30, 2025, https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/",
        "date": "2026-03-31",
        "url": "https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$536,639.57 (2025 year-end)",
      "narrative": "Mann started the rematch with Kobach as a serious statewide fundraiser. His 2025 year-end filing reported $536,639.57 raised, $280,041.49 spent, and $257,257.08 cash on hand, along with $7,655.77 in in-kind support and no personal loans in the summary reviewed in the source set. The donor list in the raw material pointed to a broad base rather than one dominant patron. Named contributors included James Bartimus, Andrea Himoff, Karen Mann, Scott Teeter, Thomas Adrian, Paige Ballard, Linda Salem, and many smaller donors spread across the state.",
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
        "title": "Wibw.Com",
        "url": "https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02CM_202601.pdf"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/rep_mann_chris_1/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2026/03/23/former-prosecutor-enters-kansas-senate-race/",
        "publication": "Kansasreflector.Com",
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
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/",
        "publication": "Opensecrets.Org",
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
    "education": "Has not taken a clear public position",
    "family": "Aree Proctor; Not publicly disclosed in detail",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/pat-proctor",
    "whoTheyAre": "Pat Proctor is a Leavenworth Republican, retired Army colonel, Kansas House member, and 2026 candidate for secretary of state. His public biography says he served 25 years in the U.S. Army, including deployments to Iraq and Afghanistan, before moving into state politics. He has represented Leavenworth in the Kansas House since 2020. Outside politics, he and his wife Aree co-own Baan Thai Restaurant, which gives him a small-business identity alongside his military and legislative background. That combination of soldier, lawmaker, and business owner is central to how he presents himself statewide. Proctor is not running as an outsider to election law. He chairs the House Elections Committee and has already spent years working inside the legislative machinery that writes, revises, and tightens Kansas election rules.",
    "theirRecord": "Proctor's record is defined above all by election policy. As chair of the House Elections Committee, he has been one of the Legislature's most visible advocates for stricter election rules, including requiring proof of citizenship, ending the three-day grace period for mailed ballots after Election Day, and expanding paper-based audit measures. Those are not abstract campaign promises for him; they are the core issues of his legislative identity. That matters because the secretary of state's office is where those ideas would be administered, not just debated. Proctor is running as someone who has already helped shape the state's election-law agenda from inside the House. His campaign presents that agenda as restoring confidence in elections, while critics of that approach have argued that Kansas has already seen how proof-of-citizenship rules can block eligible voters. His public record also includes a more conventional conservative frame around business services. He argues that the secretary of state's office should help Kansas businesses form and operate efficiently, and he uses Baan Thai and his military command background to support the case that he can run a rules-driven office.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion in the context of this race."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy in the context of this race."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration in the context of this race."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Election Law / Voter Access",
        "stance": "This is Proctor's defining issue. As chair of the House Elections Committee, he has pushed for proof-of-citizenship voter registration requirements, repealing the three-day grace period for mailed ballots to arrive after Election Day, banning ranked-choice voting in Kansas, and expanding paper-based audit measures. He frames these as election security measures; critics argue they could make it harder for eligible Kansans to vote."
      },
      {
        "issue": "Campaign Finance",
        "stance": "He has championed banning foreign nationals from contributing to Kansas constitutional amendment campaigns and has also pushed to limit the Kansas Governmental Ethics Commission's power to investigate campaign finance violations."
      },
      {
        "issue": "Business Services",
        "stance": "He argues the secretary of state's office should help Kansas businesses form and operate efficiently, pointing to his experience co-owning Baan Thai Restaurant."
      }
    ],
    "whatYouShouldKnow": [
      "Proctor is the chair of the Kansas House Elections Committee, which makes him one of the architects of the election rules he now wants to administer as secretary of state",
      "He has pushed for proof-of-citizenship requirements, stricter ballot deadlines, and paper-audit measures as part of his election agenda",
      "He is a retired Army colonel whose public biography emphasizes 25 years of service, including Iraq and Afghanistan",
      "He and his wife Aree co-own Baan Thai Restaurant in Leavenworth, which is a regular part of his campaign biography",
      "His 2025 year-end filing showed $312,046.74 raised and $209,383.28 cash on hand, giving him a real statewide finance operation",
      "Named donors in the accessible filing included John Lahnes, John Jacob Kotzman, Mike Lehnherr, Chad Stafford, George Pogge, Dennis White, John Donovan, and Michelle Cebe",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Proctor. His campaign and legislative biographies emphasize military service, elections, and business ownership rather than church membership or denomination.",
    "quotes": [
      {
        "text": "The Kansas Secretary of State has two primary duties - securing and accurately executing our elections, and being the key agency to facilitate establishing and operating businesses in Kansas.",
        "source": "Proctor campaign website, April 1, 2026, https://patproctor4ks.com/",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "Quotes"
      },
      {
        "text": "As Secretary of State, I will be ever vigilant regarding these threats.",
        "source": "Proctor campaign website, April 1, 2026, https://patproctor4ks.com/",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "Quotes"
      },
      {
        "text": "Serving 25 years in the U.S. Army, I've defended our freedoms and fought for the ideals of democracy.",
        "source": "Proctor campaign website, April 1, 2026, https://patproctor4ks.com/",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$312,046.74 (2025 year-end)",
      "narrative": "Proctor's 2025 year-end Kansas ethics filing showed $312,046.74 raised and $209,383.28 cash on hand. That puts him in the category of candidates with a functioning statewide finance operation rather than a paper campaign. The accessible donor list shows a network of individual supporters rather than one dominant publicly visible PAC source. Named contributors in the filing included John Lahnes ($250), John Jacob Kotzman ($100), Mike Lehnherr ($100), Chad Stafford ($100), George Pogge ($50), Dennis White ($250), John Donovan ($100), and Michelle Cebe ($50).",
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
    "education": "Has not taken a clear public position",
    "family": "Lori (Hoopingarner) Rahjes, originally from Manter, Kansas; Four grown children, one granddaughter",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/ken-rahjes",
    "whoTheyAre": "Ken Rahjes is a Republican state representative from northwest Kansas and a 2026 candidate for secretary of state. He comes out of the farm-and-ranch world near Agra and has built his public identity around agriculture, rural business, and small-town civic life. Campaign material says he was raised on a diversified family farm and ranch, studied agricultural communications at Kansas State University, and lives near Agra with his wife, Lori. Rahjes is not new to Kansas politics. He has spent a decade in the House representing the 110th District, a sprawling rural seat where water, land use, farm economics, and local infrastructure matter more than the party's national fights. His candidacy for secretary of state extends that image of a rural Republican trying to move from legislative work into statewide administration.",
    "theirRecord": "Rahjes has served in the Kansas House since 2015 and chairs the Agriculture and Natural Resources Committee. He has also served on budget and water-related committees, which places him squarely in the policy terrain that matters most in western and northwestern Kansas. In the secretary of state race, Rahjes has taken a lower-key tone than some of the better-known Republicans in Kansas politics. His campaign says the office should run elections people trust, simplify business filings, and stay out of the way when Kansans are trying to build something. That is a conventional conservative message, but it is rooted in the administrative work of the office rather than a personality-driven campaign.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion in the context of this race."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy in the context of this race."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration in the context of this race."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Election Integrity",
        "stance": "Rahjes has framed his secretary of state campaign around making sure votes are counted accurately and that Kansans have confidence in the process. His message is conventional conservative -- fair and honest elections, accessible office, get out of the way -- but delivered in a lower-key tone than some of his Republican opponents."
      },
      {
        "issue": "Agriculture and Water",
        "stance": "As chair of the House Agriculture and Natural Resources Committee, Rahjes has spent a decade focused on farm economics, water policy, and land use in western Kansas. These are the issues he has legislated on most visibly."
      },
      {
        "issue": "Business Services",
        "stance": "He has said the secretary of state's office should simplify business filings and make it easier for Kansans to build something, reflecting a small-government, pro-business posture."
      }
    ],
    "whatYouShouldKnow": [
      "Rahjes has represented House District 110 for a decade, giving him a longer legislative record than several other candidates in the secretary of state field",
      "He chairs the House Agriculture and Natural Resources Committee, one of the key posts for a lawmaker from rural Kansas",
      "His campaign biography ties him closely to Agra, farm life, and agricultural communications rather than to urban legal or political circles",
      "His 2025 filing reported $24,070.30 raised, $1,442.98 spent, and $22,627.32 cash on hand",
      "Public records identify Rahjes and his wife as members of the United Presbyterian Church in Phillipsburg"
    ],
    "whereTheyWorship": "Public records identify Rahjes and his wife as members of the United Presbyterian Church in Phillipsburg. Public sources reviewed for this profile did not provide a verified church website.",
    "quotes": [
      {
        "text": "I wanted to be one to help work on solutions in the arena not on the sidelines.",
        "source": "Ken Rahjes campaign website, accessed April 1, 2026, https://kenforkansas.com/news/first-adjournment-is-here/",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/news/first-adjournment-is-here/",
        "topic": "Quotes"
      },
      {
        "text": "We as Kansans, get up everyday and head off to work, school or other daily activities, and all face challenges to pay the bills and have a little for retirement or a rainy day.",
        "source": "Ken Rahjes campaign website, accessed April 1, 2026, https://kenforkansas.com/",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "Quotes"
      },
      {
        "text": "We will work hand in hand to make the process as smooth as possible with as few delays as possible then get out of the way and watch their success.",
        "source": "Ken Rahjes campaign website, accessed April 1, 2026, https://kenforkansas.com/",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$24,070.30 (2025 year-end)",
      "narrative": "Rahjes reported $24,070.30 raised, $1,442.98 spent, and $22,627.32 cash on hand in his 2025 state filing. The donor list in the research trail includes names tied to agriculture and rural business, including Scott Foote, the Kansas Sorghum Producers Association, Michael McClellan, Clay Scott, Johnson Farms, Kent Glasscock, and Kent Winter. The pattern fits the rest of his profile. It is a smaller statewide campaign with support from farm, commodity, and rural business circles rather than a big metropolitan donor base.",
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
    "education": "Has not taken a clear public position",
    "family": "Jesse Day; Not specifically enumerated in available sources",
    "campaignWebsite": "https://www.electjenday.com/",
    "whoTheyAre": "Jennifer Day is a former Kansas House member from Johnson County and a 2026 Democratic candidate for secretary of state. Her public biography is built around business work in technology, real estate, and finance, followed by a turn into election work and state politics. She says she spent 16 years in business, built a small real-estate investment firm, founded an interior design company, volunteered with the League of Women Voters, and worked for seven years as an election worker before serving in the Legislature. Day represented House District 48 from 2020 to 2021. That is a short legislative run, but it gives her a public record beyond campaign language. Her current bid for secretary of state is framed less as an ideological crusade than as an argument that the office should run elections accurately, communicate clearly with the public, and handle business filings without unnecessary friction.",
    "theirRecord": "Day's legislative archive ties her to bills and votes on concealed carry in the Capitol, the death penalty, World War II funeral honors, and international relations. It is not a long record, but it is a real one, and it distinguishes her from candidates whose public history begins with the current campaign. In the secretary of state race, Day has made election administration and business services the center of her case. She argues that voting should be accessible and secure at the same time, and she pairs that with a promise to streamline business registration and reduce bureaucratic hurdles for Kansas employers. The through line in her campaign is administrative competence rather than culture-war rhetoric.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a clear public position on abortion in her secretary of state campaign."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy in her secretary of state campaign."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Voting Rights / Election Access",
        "stance": "This is her signature issue. She says \"our right to vote is fundamental\" and wants to make elections both accessible and secure. Her campaign explicitly says leaders have spread lies and disinformation about elections."
      },
      {
        "issue": "Election Integrity",
        "stance": "Argues that election integrity is \"increasingly under threat\" but frames the threat as disinformation and political manipulation, not voter fraud."
      },
      {
        "issue": "Business Services",
        "stance": "Wants the secretary of state's office to streamline business registration and reduce bureaucratic hurdles for Kansas employers."
      }
    ],
    "whatYouShouldKnow": [
      "Day served in the Kansas House from 2020 to 2021, so she enters the race with an actual voting record rather than only campaign messaging",
      "She says she spent seven years as an election worker, which is central to her argument that she understands how Kansas elections function at the ground level",
      "Her campaign explicitly says leaders have spread lies and disinformation about elections, and she presents herself as a candidate who would lower the temperature rather than raise it",
      "She links election administration and business filing work in the same campaign pitch, arguing that the office should both protect ballots and make it easier to start and run a business in Kansas",
      "Her 2025 state filing reported $84,304.87 raised and $14,740.52 cash on hand, a modest total compared with the better-funded statewide campaigns"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Her public message is framed in civic and administrative terms, and the accessible campaign and legislative material does not tie her to a named congregation.",
    "quotes": [
      {
        "text": "The Secretary of State is charged with overseeing and protecting the electoral process across Kansas.",
        "source": "Jennifer Day campaign website, accessed April 1, 2026, https://www.electjenday.com/",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$84,304.87 (2025 year-end)",
      "narrative": "Day's 2025 filing reported $84,304.87 raised, $69,564.35 spent, and $14,740.52 cash on hand. The publicly visible donor list includes small and mid-sized contributions from individuals such as James D. Childers, Louis Bornman, Michael Tourtellot, David Lambertson, and Dan Osman. The filing reads like a conventional donor-supported statewide campaign rather than a self-funded operation. The available names and amounts point to a smaller network of individual supporters, not one dominant donor or a large personal loan.",
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
    "education": "Has not taken a clear public position",
    "family": "Not publicly identified; Not publicly identified",
    "campaignWebsite": "https://www.samuellane.org/about-me",
    "whoTheyAre": "Sam Lane is a Democratic candidate for Kansas secretary of state who presents himself as a lifelong Kansan, a former independent, and a working-class outsider. The public biography available online is spare. He describes himself as a University of Kansas psychology graduate with work experience in construction testing, retail, shipping, and food service, and he says he entered the race because he did not want to stand by while trust in elections kept deteriorating. Lane's operation is plainly small. He is not running as a party insider, a former officeholder, or a candidate with a large donor network. His appeal is built on simplicity: protect elections, take the office seriously, and stop turning it into a political weapon.",
    "theirRecord": "Lane has no previous elected office, so his public record is essentially the campaign itself. He uses his website to explain the secretary of state's duties and to argue that the office should be a safeguard for Kansas elections and business filings rather than a stage for ideological fights. That makes him different from better-known candidates in the field, but it also leaves a thinner paper trail. There are no committee assignments, legislative votes, or statewide controversies to review. Voters are being asked to judge him mostly on message, biography, and a very small early filing.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Has not taken a public position on abortion."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position on gun policy."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position on immigration."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Election Integrity / Voter Access",
        "stance": "This is his only real issue. Lane frames the secretary of state's office as the front line for democracy. He argues against voter suppression, says the office should be about fair elections and honest administration, and opposes turning it into a partisan weapon. He wants to \"safeguard Kansas\" elections."
      },
      {
        "issue": "Party Identity",
        "stance": "Describes himself as a lifelong independent who chose to run as a Democrat. His appeal is built on simplicity and nonpartisan competence rather than ideology."
      }
    ],
    "whatYouShouldKnow": [
      "Lane has no prior elected-office record, so his campaign is his main public footprint",
      "He describes himself as a lifelong Kansan and a former independent who chose to run as a Democrat",
      "His 2025 filing showed just $590.91 raised, with $580.27 coming from Lane himself",
      "The tiny filing makes this one of the lightest-funded statewide campaigns in Kansas",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "I'm a lifelong Kansan and lifelong independent, but I'm throwing my hat in with the Democrats to run for Secretary of State.",
        "source": "Samuel Lane campaign website, accessed April 1, 2026, https://www.samuellane.org/",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "Quotes"
      },
      {
        "text": "In Kansas, the office of the Secretary of State has several duties.",
        "source": "Samuel Lane campaign website, accessed April 1, 2026, https://www.samuellane.org/what-does-the-secretary-of-state-do",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/what-does-the-secretary-of-state-do",
        "topic": "Quotes"
      },
      {
        "text": "I can't fix this whole country by myself. But with your vote, I'll at least be able to safeguard Kansas.",
        "source": "Samuel Lane campaign website, accessed April 1, 2026, https://www.samuellane.org/",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$590.91 (early public filing)",
      "narrative": "Lane's 2025 filing showed $590.91 raised, and $580.27 of that came from Lane himself. The report reads like a seed-stage campaign financed almost entirely out of the candidate's own pocket.",
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
    "education": "Has not taken a clear public position",
    "family": "Diane Hawkins (married 1985, \"college sweetheart\"); Not detailed in available sources",
    "campaignWebsite": "https://hawkinsforinsurance.com",
    "whoTheyAre": "Daniel Hawkins is the Kansas House speaker and the 2026 Republican candidate for insurance commissioner. He is a Wichita-area legislator who first won his House seat in 2012 and climbed through committee and leadership posts before becoming speaker in 2023. Public biographies say he graduated from Hutchinson Community College and Emporia State University, served in the Kansas Army National Guard, married his wife Diane in 1985, and has spent roughly three decades in the insurance business. Hawkins is not running as an outsider. He is one of the central Republican power brokers in Topeka, and his campaign for insurance commissioner leans heavily on that fact. The pitch is that he knows business, regulation, and the Legislature well enough to step into one of the state's most technical statewide offices without a long learning curve.",
    "theirRecord": "His record in this race is tied directly to his legislative leadership. As speaker, Hawkins has been part of the Republican governing core on taxes, abortion, and Medicaid expansion, and his insurance commissioner candidacy turns that broader conservative record into a case for regulatory authority. In public campaign language, he frames government expansion as a threat to liberty and presents himself as a defender of business growth and traditional family politics. The most politically important issue in the source file is his handling of Senate Bill 360, the pharmacy benefit manager bill. Kansas Reflector reported that Hawkins repeatedly maneuvered to keep the measure from advancing, even as it had broad bipartisan support and would have tightened state oversight of middlemen in the prescription-drug market. The bill ultimately moved forward anyway, leaving Hawkins open to criticism that he used the speaker's office to block a consumer-protection measure while seeking a job as the state's top insurance regulator.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Describes himself as \"pro-life\" and lists defending life as a core belief. His campaign website leads with \"PRO-LIFE. PRO-GUN. PRO-TRUMP.\""
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Describes himself as \"pro-gun.\" Has made Second Amendment support part of his campaign branding."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Healthcare / Medicaid",
        "stance": "Opposes Medicaid expansion. As House Speaker, made a public case against Medicaid expansion in Plainville and said the insurance commissioner's office has \"nothing to do with Medicaid.\" He also proposed cutting $200 million from the state budget, including targeting Medicaid."
      },
      {
        "issue": "Prescription Drug Costs",
        "stance": "As House Speaker, repeatedly maneuvered to block Senate Bill 360, a bipartisan pharmacy benefit manager bill that would have tightened state oversight of middlemen in the prescription-drug market. The bill passed 104-17 over his efforts to kill it."
      },
      {
        "issue": "Limited Government",
        "stance": "Says \"unchecked government expansion limits our freedom as individuals and hinders the growth of the businesses our state's economy relies on to thrive.\""
      },
      {
        "issue": "Trump Alignment",
        "stance": "Explicitly campaigns on alignment with President Trump, saying \"Just like President Trump has made it his mission to make life miserable for foreign cartels, it will be my job as Insurance Commissioner to do the same for any insurance company that does not follow the law.\""
      },
      {
        "issue": "Insurance Regulation",
        "stance": "Has spent about 30 years in the insurance business and frames that experience as his core qualification for the office. He receives commissions from six insurance companies, which his opponents have flagged as a potential conflict of interest."
      }
    ],
    "whatYouShouldKnow": [
      "Hawkins has represented his House district since 2013 and became speaker in 2023",
      "He has spent about 30 years in the insurance business, which is the core credential of his statewide campaign",
      "His 2025 campaign filing showed more than $417,000 raised and about $384,000 cash on hand",
      "He is running with overtly conservative branding built around Trump alignment, abortion politics, and limited government",
      "His handling of the pharmacy benefit manager bill became one of the sharpest criticisms of his candidacy",
      "He is not a fresh face in Kansas politics; he is already one of the most powerful Republicans in the Statehouse"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "Unchecked government expansion limits our freedom as individuals and hinders the growth of the businesses our state's economy relies on to thrive.",
        "source": "Daniel Hawkins campaign website, accessed April 1, 2026, https://danhawkinskansas.com/about/",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/about/",
        "topic": "Quotes"
      },
      {
        "text": "I believe in the importance of defending life, strengthening the family, and protecting our most cherished rights.",
        "source": "Daniel Hawkins campaign website, accessed April 1, 2026, https://danhawkinskansas.com/about/",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/about/",
        "topic": "Quotes"
      },
      {
        "text": "Just like President Trump has made it his mission to make life miserable for foreign cartels, it will be my job as Insurance Commissioner to do the same for any insurance company that does not follow the law.",
        "source": "Hawkins for Insurance, accessed April 1, 2026, https://www.hawkinsforinsurance.com/",
        "date": "2026-03-31",
        "url": "https://www.hawkinsforinsurance.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$417,305.07 (2025 year-end)",
      "narrative": "Hawkins entered 2026 with one of the stronger financial positions in the race. The 2025 filing in the source record showed $417,305.07 raised, $33,295.22 spent, and $384,009.85 cash on hand. The accessible filing also listed donors including Kenny Doonan, Pat Do, Kyle Hoffman, Chad Stafford, Gary Obomy, C. Douglas Blex, and Bill Pickert, along with a $10,000 personal loan.",
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
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW03DH_202601.pdf"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Daniel_Hawkins_(Kansas"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/22/kansas-house-speaker-desperately-maneuvers-to-sabotage-vote-on-senate-bill-capping-drug-costs/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
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
    "education": "Has been an advocate for public school funding and early childhood education throughout her Senate career",
    "family": "Jeffrey Sykes; Two sons: William and Tyler",
    "campaignWebsite": "https://www.dinahsykes.com/",
    "whoTheyAre": "Dinah Sykes is a Lenexa state senator who serves as Kansas Senate minority leader and is running for insurance commissioner in 2026 as a Democrat. She first won her Senate seat in 2016, then switched parties in late 2018 after breaking with Kansas Republicans. That party switch remains one of the most visible turning points in her public career. Sykes has built her public profile in Johnson County and in the Statehouse as a legislative leader rather than as an insurance-industry figure. In this race, she is presenting herself as a consumer-focused candidate who wants the insurance department to concentrate on household costs, coverage problems, and oversight of insurers. Her campaign has also benefited from support from two former Kansas insurance commissioners, Kathleen Sebelius and Sandy Praeger. That gives her a notable coalition in a race where most candidates are trying to prove they understand both regulation and retail politics.",
    "theirRecord": "Sykes's record is rooted in legislative leadership. As Senate minority leader, she has been one of the most visible Democrats in the Kansas Legislature, and her public record includes advocacy on health care costs, Medicaid expansion, school funding, and protections for vulnerable Kansans. Her insurance campaign extends that same affordability argument into a regulatory office. In the insurance race, Sykes has made the clearest public case that Kansas households are paying too much for coverage and that the office should be more willing to challenge insurers. She has said the cost of health insurance in Kansas is out of control, and she has framed the job as one that should protect policyholders rather than the industry it regulates. She has also tried to draw a sharper ethical distinction in the field by pledging to reject insurance-industry money. That stance, together with endorsements from Praeger and Sebelius, has helped define her as the candidate arguing for a more independent regulator.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Supports access to abortion. Her legislative platform includes abortion access as part of her broader healthcare and consumer-protection agenda."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has been an advocate for public school funding and early childhood education throughout her Senate career."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Health Insurance Costs",
        "stance": "This is her signature issue. She has called the cost of health insurance in Kansas \"simply out of control\" and says the insurance commissioner should hold big insurance companies accountable rather than protect the industry."
      },
      {
        "issue": "Healthcare / Medicaid",
        "stance": "Supports Medicaid expansion in Kansas. Her legislative record includes advocacy for expanding healthcare access and lowering costs for families."
      },
      {
        "issue": "Domestic Violence / Human Trafficking",
        "stance": "Has championed protections for survivors of domestic violence, sexual assault, human trafficking, and stalking in the Legislature."
      },
      {
        "issue": "Campaign Ethics",
        "stance": "Has pledged to reject all insurance-industry campaign contributions, making her the only candidate in the insurance commissioner race to draw that line."
      }
    ],
    "whatYouShouldKnow": [
      "Sykes is the current Kansas Senate minority leader, giving her a statewide political platform that most down-ballot candidates do not have",
      "She first entered the Senate as a Republican and then switched to the Democratic Party in December 2018, a change that became a lasting part of her public identity",
      "Her campaign is centered on health insurance costs, consumer protection, and oversight of large insurers",
      "She has pledged to reject insurance-industry contributions, making campaign money part of her case for independence",
      "Former Insurance Commissioner Sandy Praeger, a Republican, and former Insurance Commissioner and Gov. Kathleen Sebelius, a Democrat, have both endorsed her",
      "Public coverage has framed her as the candidate most directly running against insurance-industry influence in the race"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "The cost of health insurance in Kansas is simply out of control.",
        "source": "Kansas Reflector, April 1, 2026, https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "topic": "Quotes"
      },
      {
        "text": "Kansas deserves an Insurance Commissioner who puts people first.",
        "source": "Dinah Sykes campaign website, April 1, 2026, https://www.dinahsykes.com/",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "Quotes"
      },
      {
        "text": "For Dinah, it all comes down to two things: fairness and affordability.",
        "source": "Dinah Sykes campaign website, April 1, 2026, https://www.dinahsykes.com/",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No Kansas statewide finance report listed online as of 2026-04-01",
      "narrative": "No campaign finance data available online. The public filing trail cited in the raw material included a treasurer filing, but not a usable receipts-and-expenditures report with totals or donor patterns.",
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
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Dinah_Sykes"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DS_AT.pdf"
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
    "education": "Has not taken a clear public position",
    "family": "Tom Wasinger; Spouse: Tom",
    "district": "Kansas House District 111",
    "campaignWebsite": "https://barbforkansas.com/",
    "whoTheyAre": "Barbara K. Wasinger is the Republican state representative for Kansas House District 111, a Hays-based seat she has held since 2019. Her political career began locally and moved up step by step: Hays city commissioner in 2005, mayor in 2008 and again in 2010, Ellis County commissioner in 2012, then the Kansas House. Public biographical material describes her as a small-business owner in the title and abstract business, a St. Catherine University graduate with concentrations in journalism and theology, and a longtime Hays resident married to Tom Wasinger with four adult children. Wasinger is one of those western Kansas politicians whose identity is inseparable from the local civic world. She has spent more than two decades in elected office, writes regular legislative updates, and keeps up a steady public presence at coffees, town halls, and local media appearances. Her political style is less firebrand than operator: a lawmaker who knows the committees, the local governments, and the bureaucracies she is trying to move.",
    "theirRecord": "Her biggest recent legislative achievement is House Bill 2433, the 2026 measure that cleared the way for water to move through county rights-of-way without local permitting barriers. The bill was aimed directly at the long-running R9 Ranch dispute that has shaped Hays' search for a durable water supply, and Wasinger was the primary sponsor and chief public advocate. In a district where water security is a practical issue, not an abstraction, that was a signature win. Wasinger also carried Senate Bill 334 on nursing faculty requirements, arguing that Kansas needed a wider pool of instructors as hospitals and community colleges struggled with workforce shortages. She played a central role in the state's 2024 cybersecurity push after the judicial branch hack, and in 2026 she used a parliamentary motion to cut off debate and force an immediate House vote to override Gov. Laura Kelly's veto of Senate Bill 244, the biological-sex bill affecting state documents and access to sex-separated spaces. That move made her a focal point in one of the Legislature's most divisive fights.",
    "whatTheyStandFor": [
      {
        "issue": "Abortion / Sanctity of Life",
        "stance": "Strongly pro-life. She has stated that \"human life begins at conception and deserves legal protection at every stage until natural death.\" She voted yes on the Value Them Both Amendment and supports the Born Alive Abortion Survivors Protection Act. Her only stated exception is the life of the mother."
      },
      {
        "issue": "Marriage & Family / LGBTQ+ Policy",
        "stance": "Voted to override Gov. Kelly's veto on Senate Bill 244, the biological-sex bill that requires birth-sex markers on state documents and restricts access to sex-separated facilities. She made the procedural motion to cut off debate and force the vote, making her a central figure in that fight. Notably, on an iVoterGuide survey she reportedly indicated support for adding sexual orientation and gender identity as protected classes in non-discrimination laws, which is an unusual position for a conservative Republican and may warrant further verification."
      },
      {
        "issue": "Religious Liberty",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Guns / Second Amendment",
        "stance": "Endorsed by the Kansas State Rifle Association in 2024. No anti-gun votes identified. Kansas has been a constitutional carry state since 2015."
      },
      {
        "issue": "Immigration / Border",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "School Choice / Parental Rights in Education",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Marijuana / Drug Policy",
        "stance": "Has not taken a clear public position."
      },
      {
        "issue": "Property Taxes",
        "stance": "This is her stated top priority. She has said Kansas needs \"a more equitable way to impose property taxes\" and wants to keep older residents from being taxed out of their homes."
      },
      {
        "issue": "Water",
        "stance": "She authored and passed House Bill 2433, the 2026 water-transfer law that cleared the way for the R9 Ranch pipeline to bring water to Hays. She favors private ownership of water rights over government control."
      },
      {
        "issue": "Food Sales Tax",
        "stance": "She has said eliminating sales tax on food is \"great\" but wants to make sure no state departments are crippled by lost revenue."
      },
      {
        "issue": "Executive Authority / COVID",
        "stance": "Supports limiting executive branch emergency powers. She has advocated for a constitutional amendment giving the Legislature veto power over executive regulations."
      },
      {
        "issue": "Judeo-Christian Values",
        "stance": "She has stated publicly that \"Judeo-Christian values established a framework of morality which is necessary for our system of limited government.\""
      }
    ],
    "whatYouShouldKnow": [
      "Wasinger has held elected office continuously since 2005, moving from city hall to county government to the Kansas House",
      "She was the lead House sponsor on the 2026 water-transfer bill tied to the R9 Ranch project, a major issue for Hays",
      "She carried the 2026 nursing faculty bill as Kansas argued over how to ease workforce shortages",
      "She used a procedural motion to shut off debate during the House fight over Senate Bill 244 and the veto override",
      "She chairs the House General Government Budget Committee and also works on rules and budget matters that carry real procedural power",
      "Her 2024 re-election was not close; she won with 7,739 votes, or 73.25 percent, in a safe Republican district"
    ],
    "whereTheyWorship": "Wasinger publicly identifies as a member of St. Joseph Catholic Church in Hays, and her campaign biography says she serves there as a lector and an notable Minister of Holy Communion. Church website: https://www.stj-church.com/.",
    "church": {
      "name": "St. Joseph Catholic Church, Hays, KS",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.stj-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Roles: Lector; notable Minister of Holy Communion."
    },
    "quotes": [
      {
        "text": "A lot of the requirements in the bill mirror what the federal government does.",
        "source": "Kansas Reflector, 2024, https://kansasreflector.com/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/",
        "topic": "Quotes"
      },
      {
        "text": "We've been given broad authority to not only carry out the law but also to create it.",
        "source": "Hays Post, 2026, https://hayspost.com/",
        "date": "2026-03-31",
        "url": "https://hayspost.com/",
        "topic": "Quotes"
      },
      {
        "text": "Judeo-Christian values established a framework of morality which is necessary for our system of limited government.",
        "source": "iVoterGuide, accessed March 30, 2026, https://ivoterguide.com/candidate/48696/race/11694/election/797",
        "date": "2026-03-31",
        "url": "https://ivoterguide.com/candidate/48696/race/11694/election/797",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "$11,134.20 (House filing coverage: 01/01/2025 to 12/31/2025)",
      "narrative": "State campaign finance records exist for Wasinger, but the source material provided for this assignment did not include a usable donor breakdown or a current summary total comparable to a federal FEC page.",
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
        "title": "Barbwasinger.Com",
        "url": "https://barbwasinger.com/"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Barbara_Wasinger"
      },
      {
        "title": "Sos.Ks.Gov",
        "url": "https://sos.ks.gov/elections/24elec/2024-General-Election-Official-Vote-Totals.pdf"
      },
      {
        "title": "Stj-church.Com",
        "url": "https://www.stj-church.com/"
      },
      {
        "title": "Ivoterguide.Com",
        "url": "https://ivoterguide.com/candidate/48696/race/11694/election/797"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/"
      },
      {
        "title": "Barbforkansas.Com",
        "url": "https://barbforkansas.com/",
        "publication": "Barbforkansas.Com",
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
    "whoTheyAre": "Mason Ruder is the mayor of Hays and a member of the Hays City Commission. He is a Fort Hays State University graduate, a Certified Public Manager, and one of the more institutionally connected young officials in Ellis County public life. Public records also tie him to work with Northwest Kansas Economic Innovation Center and to Hays Catholic Schools, where he has served in advancement leadership. Ruder's public identity is intensely local. He came up through Hays schools and Hays civic networks, and his name is attached to the city's Catholic institutions, city government, and business-development efforts. He was also identified in public coverage as the youngest city commissioner in Hays history. That mix of city hall, Catholic-school leadership, and local economic development explains why his profile is broader than a typical small-city commissioner. He is not just an officeholder; he is part of the web of institutions that shape public life in Hays.",
    "theirRecord": "Ruder has served on the Hays City Commission since 2019 and was elected mayor by fellow commissioners during the January 2026 reorganization. His tenure has overlapped with the city's biggest ongoing policy fights, especially long-term water supply, housing growth, and downtown development. One of the clearest public markers of his record is the R9 Ranch water project. He testified before the Kansas House Local Government Committee in January 2026 defending the Hays water transfer plan, and city coverage has shown him repeatedly framing R9 as a generational infrastructure project rather than a routine public-works item. He has also backed downtown and quality-of-life projects, including a permanent stage proposal in Municipal Park and other development efforts tied to housing and retail growth. Ruder has also tried to build a more visible civic role for younger residents. He helped create a youth advisory board for Hays High and TMP-Marian students so they could speak directly to city leaders. During the COVID period, he was also publicly identified with a split on city pandemic policy: the raw record ties him to the lone dissenting vote against a local mask mandate.",
    "whatTheyStandFor": [
      {
        "issue": "Water Supply",
        "stance": "The R9 Ranch water project is Ruder's signature issue. He has testified before the Kansas Legislature defending the Hays water transfer plan and has called it a generational infrastructure project. He has said \"Every day is now an R9 Ranch Day.\""
      },
      {
        "issue": "Growth and Development",
        "stance": "Ruder has consistently pushed for housing growth, downtown development, and quality-of-life improvements in Hays, including a permanent stage proposal in Municipal Park. He ran on a platform of \"Let's keep growing Hays.\""
      },
      {
        "issue": "Youth Civic Engagement",
        "stance": "He created a youth advisory board for Hays High and TMP-Marian students so they could speak directly to city commissioners."
      },
      {
        "issue": "COVID-Era Policy",
        "stance": "Ruder was the lone dissenting vote against a local mask mandate during the pandemic, placing him on the more skeptical side of government COVID restrictions."
      }
    ],
    "whatYouShouldKnow": [
      "Ruder became mayor of Hays in January 2026 after serving as a city commissioner and vice mayor",
      "He was identified in public coverage as the youngest city commissioner in Hays history",
      "He testified in Topeka in defense of the Hays R9 Ranch water transfer project, one of the biggest long-term infrastructure fights in western Kansas",
      "He helped create a youth advisory board so students from Hays High and TMP-Marian could advise the city commission directly",
      "His public background is tied closely to Hays Catholic Schools and Immaculate Heart of Mary Parish, making faith a visible part of his civic identity",
      "The public record also links him to the sole dissenting vote against Hays' COVID-era mask mandate",
      "No campaign finance data was available online"
    ],
    "whereTheyWorship": "Ruder's Catholic affiliation is publicly documented. Hays Catholic Schools said he is a member of Immaculate Heart of Mary Parish in Hays. The parish website is https://www.ihm-church.com/. His religious identity is also part of his broader public biography. He is a Thomas More Prep-Marian graduate and has held a leadership role with Hays Catholic Schools, so the parish connection fits into a larger Catholic institutional presence rather than a passing mention.",
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
        "text": "Let's keep growing Hays. We have a lot of work to do.",
        "source": "Hays Post, November 8, 2023, https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
        "topic": "Quotes"
      },
      {
        "text": "Forgetting the lesson of 9/11 is the danger we face now, says Ruder.",
        "source": "Mason Ruder campaign materials",
        "date": "2026-03-31",
        "topic": "9/11 Editorial"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No campaign finance data was available online for Ruder's city races. Public coverage of him is much stronger on city meetings, water policy, and Catholic-school involvement than on donor or spending records.",
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
        "title": "Hdnews.Net",
        "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e"
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
    "whoTheyAre": "Alaina Cunningham is a Hays city commissioner and, since January 2026, the city's vice mayor. Public profiles describe her as a registered nurse and ACE-certified group fitness instructor at HaysMed's Center for Health Improvement. She moved to Hays from Dodge City in 2010 and built her local profile through healthcare work, parent involvement, and civic boards before stepping into city government. She first joined the commission by appointment after Michael Berges left for the Ellis County Commission, then won a full term in 2023. Public records also place her on the HaysMed Foundation board and the Downtown Hays Development Corporation board. That background has made her one of the commission's more community-facing members rather than one of its louder political personalities.",
    "theirRecord": "Cunningham's record on the commission has been tied to the unglamorous issues that dominate city government in western Kansas: water, housing supply, growth, and budget tradeoffs. In candidate forums and local coverage, she has treated water as a long-term survival issue for Hays and linked housing and quality of life to whether the city can keep families and retirees in town. Her rise to vice mayor in the 2026 commission reorganization marked a step up in visibility, but her public record still reads more administrative than ideological. The source material shows a commissioner who talks about service delivery, sustainable growth, and local livability, not a figure known for public feuds or a long list of polarizing votes.",
    "whatTheyStandFor": [
      {
        "issue": "Water",
        "stance": "Cunningham has consistently treated water supply as a long-term survival issue for Hays. She has spoken publicly about the value of water to the region and has supported the city's efforts to secure a durable supply."
      },
      {
        "issue": "Housing and Growth",
        "stance": "She has linked housing availability and quality of life to whether Hays can keep families and retirees in town. Her public comments focus on sustainable growth rather than rapid expansion."
      },
      {
        "issue": "City Services and Budget",
        "stance": "Her record on the commission is more administrative than ideological. She has focused on service delivery, livability, and the unglamorous tradeoffs that dominate city government in western Kansas. Cunningham has not taken clear public positions on issues like abortion, guns, or immigration. As a city commissioner, her public focus has been on local infrastructure and quality-of-life issues rather than state or federal policy debates."
      }
    ],
    "whatYouShouldKnow": [
      "Cunningham came into office by appointment before winning election to a full term in 2023",
      "Her day job is in health and wellness at HaysMed, where she works as a registered nurse and group fitness instructor",
      "She became vice mayor in January 2026 when the commission reorganized",
      "Water supply is one of the issues she has discussed most consistently in public",
      "Her local profile is built heavily around healthcare and nonprofit board service",
      "Public source material on her is thinner than it is for several other Hays elected officials"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "I feel it is my duty to serve the public and 'Do Good.'",
        "source": "Hays Post, October 25, 2023, https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "Quotes"
      },
      {
        "text": "We are all aware how valuable water is to our area.",
        "source": "Hays Post, October 25, 2023, https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
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
      "narrative": "No campaign finance data was available online.",
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
        "url": "https://www.haysmed.com/provider/alaina-cunningham/"
      },
      {
        "title": "Haysmedfoundation.Org",
        "url": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/"
      },
      {
        "title": "Tigermedianet.Com",
        "url": "https://tigermedianet.com/?p=75270"
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
        "title": "Hays Post: 2026 budget",
        "url": "https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69",
        "publication": "Hayspost.Com",
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
    "whoTheyAre": "Shaun Musil is a longtime Hays city commissioner and former mayor whose public profile is built on local government, business, and infrastructure. He works as an account representative for Nex-Tech, has lived in Hays for about 30 years, and spent seven years as co-owner of the Paisley Pear Wine Bar, Bistro and Market with his wife, Heather, before the business was sold in 2024. Musil has been on the commission since 2013, which makes him one of the city's most experienced elected officials. His public style is understated. He is not a partisan brand-builder. He reads instead as a city hall veteran whose name is tied to the daily grind of water policy, development debates, and pandemic decisions.",
    "theirRecord": "Musil's record is dominated by the R9 Ranch water project, the long-running effort to secure Hays' future water supply. In candidate Q&A coverage, he has repeatedly described water as the city's main unfinished business and has treated the pipeline as a generational project rather than a routine utility upgrade. He also had a prominent role during the COVID period. Musil voted to extend Hays' mask ordinance while serving as mayor, and local coverage later reported that his family faced vandalism and threats after the decision. That episode remains one of the sharpest tests of political pressure in recent Hays city government. Musil has also backed housing and retail-development efforts and has argued that city growth depends on expanding the tax base while keeping long-term utility planning on track. His ownership of the Paisley Pear gave him a visible downtown stake during some of those debates, though public sources here showed no formal ethics complaint.",
    "whatTheyStandFor": [
      {
        "issue": "Water Supply",
        "stance": "Musil has consistently treated the R9 Ranch water pipeline as the city's top long-term responsibility, calling it \"unfinished business\" and saying \"I believe it's going to happen.\""
      },
      {
        "issue": "Retail and Economic Development",
        "stance": "Has pushed for retail growth and a stronger sales-tax base, supporting incentives like IRBs for new businesses and calling retail development a \"priority.\""
      },
      {
        "issue": "Housing",
        "stance": "Strong advocate for Reinvestment Housing Incentive Districts (RHIDs), calling them one of the \"most impactful pieces of legislation\" and pointing to more houses being built as proof."
      },
      {
        "issue": "COVID Response",
        "stance": "Voted to extend the Hays mask ordinance while serving as mayor, a decision that led to vandalism and threats against his family. As a city commissioner, Musil's public record centers on local infrastructure and development rather than state or federal policy issues. He has not taken clear public positions on abortion, guns, immigration, or other statewide debates."
      }
    ],
    "whatYouShouldKnow": [
      "Musil has served on the Hays commission since 2013 and remains one of its most experienced members",
      "He has consistently treated the R9 Ranch water project as the city's top long-term responsibility",
      "During the pandemic, he voted to extend the mask ordinance and later spoke about vandalism and threats directed at his family",
      "He worked for Nex-Tech while also co-owning the Paisley Pear with his wife until the business was sold in 2024",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "I think we have some unfinished business. For me, mainly, it's our water project.",
        "source": "Hays Post, October 24, 2025, https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "topic": "Quotes"
      },
      {
        "text": "He was scared to death making those decisions, but the people came out of the woodwork thanking us.",
        "source": "Hays Post, 2020, https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
        "topic": "Quotes"
      },
      {
        "text": "This shows that we're serious about development. ... We need retail. It's a priority.",
        "source": "Hays Post, December 7, 2024, https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No campaign finance data available online.",
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
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b"
      },
      {
        "title": "Nex-tech.Com",
        "url": "https://www.nex-tech.com/business/shaun/"
      },
      {
        "title": "Hutchpost.Com",
        "url": "https://hutchpost.com/posts/f240fb89-d1f0-4373-ac4b-605d5e5f9c32"
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
    "whoTheyAre": "Sandy Jacobs is a Hays city commissioner, former mayor, retired banker, and former nonprofit executive. Her public identity is rooted in local finance and civic stewardship rather than ideology. City and local-news profiles tie her to a long career at Sunflower Bank, followed by five years as executive director of the Heartland Community Foundation before she retired from that role at the end of 2020. Jacobs is one of the most experienced members of the Hays commission. She has described herself as a Hays native and has spent years in city leadership, including multiple turns as mayor. The public record shows a commissioner whose emphasis stays on infrastructure, water, development, and budgets rather than personal branding.",
    "theirRecord": "Jacobs has been one of the commission's most consistent public advocates for the R9 Ranch water project, the long-running effort to secure Hays' future water supply through a major pipeline project. In local coverage, she has treated water as the city's top long-term responsibility and has defended the project as necessary even as costs rose and litigation dragged on. She has also taken visible positions on development and budget questions. Jacobs has argued for retail growth, defended sustainable budgeting, and supported city investment when she believed it would strengthen Hays over the long term. During the pandemic-era mask debate, she voted with the majority to extend the ordinance. In January 2026, she stepped aside from the mayor's role when the commission reorganized and chose Mason Ruder as mayor.",
    "whatTheyStandFor": [
      {
        "issue": "Water",
        "stance": "The R9 Ranch water pipeline project is her top priority. She has repeatedly called it the city's number one focus and has defended it as essential for Hays' long-term survival, even as costs rose to nearly $145 million and litigation dragged on. She has said \"We've asked for less water than is allowed by the state.\""
      },
      {
        "issue": "Taxes / Budgeting",
        "stance": "She has defended revenue-neutral budgeting and taken a conservative approach to city spending. She has said the city should avoid overspending and maintain a sustainable budget, telling Hays Post \"we're rock stars compared to other communities.\""
      },
      {
        "issue": "Retail and Economic Development",
        "stance": "She has pushed for retail growth in Hays and supported development incentives when she believed they would strengthen the city long-term."
      },
      {
        "issue": "COVID Mask Mandate",
        "stance": "She voted with the commission majority to extend the mask ordinance in 2020 (3-1 vote)."
      }
    ],
    "whatYouShouldKnow": [
      "Jacobs is one of the most experienced elected officials in Hays and has served multiple times as mayor",
      "Her banking and foundation background give her one of the strongest finance-and-development resumes on the city commission",
      "She has been a steady public advocate for the R9 Ranch water project, calling it the city's top focus",
      "Her public comments often return to retail development, sustainable budgets, and long-range infrastructure rather than partisan issues",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "I've served for eight years, and my passion continues to be for this city as a native.",
        "source": "Hays Post, October 22, 2025, https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "Quotes"
      },
      {
        "text": "We've asked for less water than is allowed by the state.",
        "source": "Hays Post, October 22, 2025, https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "Quotes"
      },
      {
        "text": "I continue to say we're rock stars compared to other communities, and I think that will continue if we keep our heads where they're at, understand that we don't want to overspend, that we don't want to put a budget out there that is not sustainable.",
        "source": "Hays Post, July 9, 2025, https://hayspost.com/posts/ab9f126e-6b0d-4482-9212-ba76a853c772",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ab9f126e-6b0d-4482-9212-ba76a853c772",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No campaign finance data available online.",
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
        "title": "Heartlandcommunityfoundation.Org",
        "url": "https://heartlandcommunityfoundation.org/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ab9f126e-6b0d-4482-9212-ba76a853c772"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b"
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
    "whoTheyAre": "David Vilaysing is a Hays city commissioner, retired police sergeant, and owner of DXI Training Solutions. Public records credit him with 19 years in the Hays Police Department and additional military police service, giving him more than two decades in law enforcement and public safety before he entered city politics. His business work after policing has centered on de-escalation, tactical communication, and self-defense training. Vilaysing's public image is practical and service-oriented. He is not a career politician and did not rise through a party ladder. He came to the commission from the worlds of policing, instruction, and community safety, which helps explain why his public comments often focus on operations, procedures, and whether the city is handling everyday problems effectively.",
    "theirRecord": "Vilaysing was elected to the Hays City Commission in 2025, so his formal governing record is still new. In candidate statements and early meeting coverage, he emphasized water, housing, transparency, and basic city competence. Once in office, he asked pointed operational questions about the cost and purpose of city programs, including pet licensing, and pressed staff and fellow commissioners on how decisions were being made. That detail-first style matches his law-enforcement background. The source material does not show a long list of headline-making votes or a major ideological crusade. It shows a new commissioner trying to work from the mechanics of city government outward.",
    "whatTheyStandFor": [
      {
        "issue": "Water",
        "stance": "Considers securing the city's water supply a top priority. Hays sits over the depleting Ogallala Aquifer and the city's long-term water future depends on the R9 Ranch water project."
      },
      {
        "issue": "Housing",
        "stance": "Supports efforts to increase affordable housing in Hays. Lists housing as one of his top three issues alongside water and retail."
      },
      {
        "issue": "City Spending / Transparency",
        "stance": "Has asked pointed operational questions about the cost and purpose of city programs. His first notable initiative was questioning pet licensing requirements, noting the city collects about $14,000 per year in pet license fees while most owners already buy their own tags."
      },
      {
        "issue": "Law Enforcement",
        "stance": "Comes from 19 years in the Hays Police Department plus military police service. His background in de-escalation training shapes his approach to community safety."
      },
      {
        "issue": "Core Values in Governance",
        "stance": "Has spoken broadly about \"core values\" being \"missing in how the current city commission handles matters,\" though he has not spelled out specific policy details beyond his operational focus on water, housing, and fiscal accountability."
      }
    ],
    "whatYouShouldKnow": [
      "Vilaysing came into office after a long career in the Hays Police Department and military police service",
      "He owns DXI Training Solutions, a business focused on de-escalation and tactical communication training",
      "He was elected to the city commission in 2025, so his official record is still in its first stretch",
      "His public comments have focused on water, housing, transparency, and the day-to-day cost of city services",
      "The source material shows him asking operational questions more often than making ideological speeches",
      "Public information about his faith background and campaign finance is limited"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "I knew at my core I missed giving back to my community.",
        "source": "Hays Post, October 25, 2025, https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "Quotes"
      },
      {
        "text": "David began his employment with the Hays Police Department in 2005 as a Police Officer.",
        "source": "Hays Post, November 15, 2020, https://hayspost.com/posts/40e17885-6833-42a5-9562-0abd9f173b21",
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
      "narrative": "No campaign finance data was available online.",
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
        "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
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
    "whoTheyAre": "Toby Dougherty is the city manager of Hays, an appointed administrator who has been the city's top staff official since 2007. He previously served as assistant city manager after arriving in Hays in 2005, which means he has been the constant figure in city government while mayors and commissioners changed around him. His public identity is administrative, not electoral, but his influence over long-range planning, budgeting, and infrastructure is substantial. Dougherty grew up in Lucas, Kansas, graduated from the University of Kansas in political science, and spent time in the transportation industry before moving into municipal government. Before Hays, he served as city administrator in Gallatin, Missouri. In local coverage, he is the staff official most closely associated with Hays' long-term water strategy, capital planning, and the practical mechanics of city government.",
    "theirRecord": "Dougherty's record is defined above all by water policy. He has been one of the main public defenders of the R9 Ranch Water Pipeline, the city's long-running attempt to secure a larger and more dependable water supply. That work has put him at the center of litigation, state-level hearings, conservation rules, and repeated public explanations about why Hays sees water as a generational problem rather than a short-term inconvenience. He has also become the public face of Hays' conservation strategy. In interviews over several years, he has pointed to western cities such as Las Vegas, Tucson, and Phoenix as examples of how dry communities survive by treating water use as a long-term management problem. More recently, he has been the official explaining the Build Kansas grant for water planning, budget caution, maintenance schedules, and infrastructure projects ranging from meters to airport upgrades.",
    "whatTheyStandFor": [
      {
        "issue": "Water Supply",
        "stance": "The R9 Ranch water pipeline is the defining project of Dougherty's tenure. He has repeatedly argued that Hays must think in generational terms about water, comparing the city's challenge to Las Vegas, Tucson, and Phoenix."
      },
      {
        "issue": "Water Conservation",
        "stance": "Has publicly defended aggressive conservation measures and looked to western cities for management ideas."
      },
      {
        "issue": "Budgeting",
        "stance": "Advocates a \"maintenance-first\" approach to city spending. He described the 2025 budget as based on \"a slightly cautionary approach\" and has focused on keeping infrastructure funded before expanding services."
      },
      {
        "issue": "Infrastructure",
        "stance": "Has been the main city official explaining grant strategy and large projects, including securing a $1.5 million Build Kansas grant for water planning and overseeing airport and utility upgrades. As an appointed city manager rather than an elected candidate, Dougherty does not take positions on partisan or social policy issues. His public record is entirely focused on city administration, infrastructure, and long-range planning."
      }
    ],
    "whatYouShouldKnow": [
      "Dougherty has been the top appointed administrator in Hays since 2007, giving him far more continuity than any elected city official",
      "The R9 Ranch Water Pipeline is the defining project of his tenure, and he has repeatedly argued that Hays must think in generational terms about water supply",
      "He has publicly defended aggressive conservation measures and has said Hays has looked to cities like Las Vegas, Tucson, and Phoenix for water-management ideas",
      "He is not an elected candidate, so his influence comes from long institutional authority inside city government rather than campaigns or partisan politics",
      "He has been the main city official explaining maintenance-first budgeting, grant strategy, and large infrastructure decisions to both commissioners and the public",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. The public record around Dougherty is overwhelmingly professional and administrative, with very little reporting on his personal or religious life.",
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
        "source": "Kansas Reflector, 2024-10-18, https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/",
        "topic": "Quotes"
      },
      {
        "text": "Securing this Build Kansas grant marks a significant step forward.",
        "source": "KWCH / Hays water coverage, 2025-04-03, https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
        "date": "2026-03-31",
        "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Not applicable",
      "narrative": "No campaign finance data was available online. Dougherty is an appointed city manager rather than an elected candidate, and no public political finance filing is associated with him.",
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
        "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c"
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
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/292e6398-09de-4575-8f00-59772bbb0c0c",
        "publication": "Hayspost.Com",
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
    "campaignWebsite": "https://www.kansassheriffs.org/county_map/county/914",
    "whoTheyAre": "Scott Braun is the elected Ellis County sheriff and a career law-enforcement officer whose public record runs almost entirely through local service. He is a Victoria High School graduate who attended Barton County Community College and Fort Hays State University, then moved up through reserve work, deputy service, narcotics investigation, undersheriff duties, and finally the sheriff's office itself. The current official record also identifies him as president of the Kansas Sheriffs' Association. Braun's public identity in Ellis County rests on two pillars: law enforcement and Catholic parish life. He is tied to St. Nicholas of Myra Catholic Church in Hays through church council leadership and the Knights of Columbus, which gives him a visible place inside one of the county's most durable civic networks.",
    "theirRecord": "Braun has made jail capacity one of the defining issues of his term. In public meetings and local coverage, he has argued that the county's need for a larger facility is not speculative and not political. He has tied the issue to mental-health placement problems, inmate transport burdens, and the practical cost of housing prisoners elsewhere. He has also taken a public role in explaining Ellis County's cooperation with federal immigration enforcement. After signing an ICE memorandum in 2025, Braun said the county could honor detainers only within the legal 48-hour window and made clear that local deputies are not roaming the county doing federal immigration work. That combination of hard-line enforcement language and legal caution has become one of the clearest features of his public record.",
    "whatTheyStandFor": [
      {
        "issue": "Jail Capacity / Public Safety",
        "stance": "Braun has made building a new county jail his top priority, calling it \"a need, not a want\" and tying it to mental-health placement problems and inmate transport burdens."
      },
      {
        "issue": "Immigration / ICE Cooperation",
        "stance": "Signed an ICE memorandum in 2025 to honor federal detainers, but publicly emphasized the 48-hour legal limit and said local deputies are not doing federal immigration work. He also testified before a Kansas House committee supporting a bill to cover agencies enforcing federal immigration law."
      },
      {
        "issue": "Drug Forfeiture",
        "stance": "As Kansas Sheriffs' Association president, he advocated against reforms that would limit law enforcement access to seized drug funds, saying loss of forfeiture revenue would affect taxpayers."
      },
      {
        "issue": "Property Taxes",
        "stance": "Has not taken a direct position on property tax policy, but frames the jail and office budgets as taxpayer concerns. Braun's public record is focused on law enforcement operations rather than the broader social or cultural issues that state and federal candidates typically address. He has not taken clear public positions on abortion, guns, or most statewide policy debates."
      }
    ],
    "whatYouShouldKnow": [
      "Braun rose through the Ellis County law-enforcement ranks before winning the sheriff's office in 2020 and re-election in 2024",
      "He is president of the Kansas Sheriffs' Association, giving him a higher statewide profile than most county sheriffs",
      "He has made a new jail one of his main policy priorities and has argued the county needs it for capacity and safety, not prestige",
      "In 2025 he signed an ICE memorandum and then publicly emphasized that Ellis County cannot hold people beyond the lawful 48-hour detainer window",
      "Public records identify him as vice chair of the St. Nicholas of Myra Church Council and a fourth-degree Knight of Columbus"
    ],
    "whereTheyWorship": "Braun is publicly tied to St. Nicholas of Myra Catholic Church in Hays. The parish website is https://stn-church.com/, and the diocesan listing is https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/.",
    "church": {
      "name": "St. Nicholas of Myra Catholic Church, Hays",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://stn-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Role: Vice Chair, St. Nicholas of Myra Church Council."
    },
    "quotes": [
      {
        "text": "We need a jail. I don't want it. We need it, and it's not going to be for me. It's for the public, so we can keep them safe.",
        "source": "Hays Post, July 11, 2024, https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d",
        "topic": "Quotes"
      },
      {
        "text": "It has to be within that 48-hour window. We will not hold them one minute longer than that.",
        "source": "Hays Post, November 20, 2025, https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "topic": "Quotes"
      },
      {
        "text": "We are not trained in that, and we have enough things to do.",
        "source": "Hays Post, November 20, 2025, https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No campaign finance data available online.",
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
        "title": "Kansassheriffs.Org",
        "url": "https://www.kansassheriffs.org/county_map/county/914"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/162/Sheriff"
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
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/69131eb8-04ac-4b1d-9561-e24c9309ad07"
      },
      {
        "title": "Stn-church.Com",
        "url": "https://stn-church.com/"
      },
      {
        "title": "Salinadiocese.Org",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/"
      },
      {
        "title": "Archive.Hayspost.Com",
        "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
        "publication": "Archive.Hayspost.Com",
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
    "whoTheyAre": "Aaron J. Cunningham is the Ellis County attorney, a Hays native who followed a straight local path into public office. He graduated from Hays High School in 2012, earned his undergraduate degree at Kansas State University, and received his law degree from Washburn University School of Law in 2019. Public biographies say a Dane G. Hansen Foundation scholarship helped shape his decision to return to western Kansas after law school. Cunningham interned for former Ellis County Attorney Tom Drees, then joined the office after passing the bar. He handled drug and DUI work as an assistant county attorney, stayed on under Drees' successor Robert Anderson, and ran unopposed for the top job in 2024 after Anderson left to return to private practice. In public, he presents himself as a homegrown prosecutor who came back to Hays to build a career in the same county where he grew up.",
    "theirRecord": "Cunningham's clearest early break with the recent past was his decision to resume prosecuting marijuana possession cases after the office had paused many of them. In a February 17, 2025, profile, he said the county attorney does not get to decide on his own what should be legal and what should not. He took the same line with hemp-derived Delta-8 and Delta-10 products, warning that the office would enforce Kansas law as written even if neighboring states were moving in a different direction. The office he runs is broader than a single drug-policy debate. Ellis County assigns the attorney's office to prosecute misdemeanors and felonies, handle juvenile and child-in-need-of-care cases, and work through alcohol, drug, and mental-illness proceedings. Cunningham has also spoken about a practical problem familiar in rural Kansas: too few lawyers, too many defendants waiting in jail, and a need to prioritize cases without letting victims lose contact with the system.",
    "whatTheyStandFor": [
      {
        "issue": "Marijuana / Drug Enforcement",
        "stance": "Cunningham reversed his predecessor's decision to pause marijuana prosecutions, saying the Legislature decides what is criminal and he will enforce the law as written. He has also taken a hard line on hemp-derived Delta-8 and Delta-10 products, warning that the office will prosecute those cases under existing Kansas law."
      },
      {
        "issue": "Role of the County Attorney",
        "stance": "He has said plainly that a county attorney does not get to pick which laws matter and which do not. He frames his job as enforcement, not policy-making, and leaves the question of what should be legal to the state Legislature."
      },
      {
        "issue": "Case Prioritization",
        "stance": "Despite his strict enforcement posture, he has acknowledged the office cannot prosecute everything. His stated priority order is: deaths first, then crimes against children, sex crimes, violent crimes, property crimes, and drug distribution. A traveler passing through with a marijuana pipe may not be prosecuted if they are not a local threat."
      },
      {
        "issue": "Faith and Public Identity",
        "stance": "Cunningham describes himself publicly in explicitly Christian terms, referencing God's sovereignty and Christ's salvation. He has not stated specific policy positions rooted in that faith, but it clearly shapes how he presents himself."
      }
    ],
    "whatYouShouldKnow": [
      "Cunningham is a Hays native who returned after law school and built his legal career inside the Ellis County attorney's office",
      "He worked first under Tom Drees and then Robert Anderson before winning the office himself in 2024",
      "His most visible policy move was restoring marijuana prosecutions after the county had paused many of those cases",
      "He has also taken a hard public line on Delta-8 and Delta-10 cases, saying the office will enforce Kansas law as it stands",
      "His office handles juvenile, child-in-need-of-care, mental-health, and drug-related matters in addition to standard criminal prosecutions",
      "Public biographical material uses explicit Christian language, but no named congregation appears in the source record"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Cunningham does describe himself publicly in explicitly Christian terms on his about.me page, including references to God's sovereignty and Christ's salvation, but the source material does not tie him to a current church.",
    "quotes": [
      {
        "text": "I tend to be of the philosophy that whether or not something is a crime is up to the Legislature.",
        "source": "Hays Post, February 17, 2025, https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "topic": "Quotes"
      },
      {
        "text": "I have an obligation to enforce the law as it's written.",
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
      "narrative": "No campaign finance data was available online.",
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
        "title": "Hayshighguidon.Com",
        "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/9397fb25-5dc6-4443-a340-6aae96abc594"
      },
      {
        "title": "About.Me",
        "url": "https://about.me/aaron.cunningham"
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
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_jud_1/documents/testimony/20250121_03.pdf",
        "publication": "Kslegislature.Gov",
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
    "whoTheyAre": "Bobbi L. Dreiling is the Ellis County clerk and election officer, the official who runs county elections and manages a large share of the county's daily paperwork. Public records say she earned an associate degree from Hutchinson Community College, spent eight years as deputy clerk under Donna Maskus, then won the clerk's office in 2020. She was re-elected in 2024 by a wide margin, beating Democrat Laura Allen 9,971 votes to 2,975. County clerk is one of those offices voters mostly notice only when something goes wrong. In Ellis County, that means Dreiling's biography is tightly bound to administration rather than ideology: election calendars, tax rolls, commission minutes, and the mechanics of getting ballots printed, counted, and secured. Her public profile is stronger on that work than on personal biography.",
    "theirRecord": "Dreiling's most visible public controversy was the fight over closing the polling place at Fort Hays State University. She defended the move by pointing to low turnout and ADA concerns, and the dispute turned into a larger argument over campus voting access, cost, and whether the county was discouraging student participation. The issue drew intervention from voting-rights advocates and made a county clerk's administrative decision part of a wider public debate. Her office has also pushed a series of practical election changes, including security cameras at the ballot drop box and ballot-counting rooms, Saturday early voting, and voter-notification efforts. The source material also points back to a 2020 episode, before she became elected clerk, when 3,800 misprinted ballots were sent out while she was deputy clerk. Even in that record, the through line is administrative: a clerk's office under pressure to get details right in public.",
    "whatTheyStandFor": [
      {
        "issue": "Election Security",
        "stance": "Dreiling has pushed election-security improvements including security cameras at the ballot drop box and in ballot-counting rooms, and she enrolled in the federal Election Infrastructure Information Sharing network through the Department of Homeland Security."
      },
      {
        "issue": "Campus Voting Access",
        "stance": "She closed the polling location nearest to Fort Hays State University, citing low turnout (69 registered on-campus voters) and ADA compliance issues. She defended the move on cost and usage grounds, saying \"the numbers don't show for me to allow to spend taxpayer dollars.\" The decision drew opposition from the ACLU and voting-rights advocates who saw it as reducing student access."
      },
      {
        "issue": "Early Voting",
        "stance": "Her office expanded Saturday early voting as part of its election logistics improvements."
      },
      {
        "issue": "Property Tax Transparency",
        "stance": "She was the first Ellis County clerk to implement the revenue-neutral-rate mailings required by 2021 state law, notifying taxpayers how proposed tax rates compare to the revenue-neutral rate for each taxing district. Dreiling has not taken clear public positions on issues like abortion, guns, or immigration. Her public record is focused entirely on county administration and election management."
      }
    ],
    "whatYouShouldKnow": [
      "Dreiling spent eight years inside the county clerk's office before winning the top job in 2020",
      "She was re-elected in 2024 with 77 percent of the vote",
      "The Fort Hays State polling-place closure became the defining public dispute of her tenure",
      "Her office has added election-security cameras and expanded early-voting logistics",
      "Public source material says she is a member of the federal Election Infrastructure Information Sharing network through the Department of Homeland Security",
      "Personal background details are sparse compared with the public record on her office's work"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation. Family and obituary material in the source record points to a Catholic background, but the file does not support naming a current parish.",
    "church": {
      "name": "Specific parish not named in obituary",
      "denomination": "Roman Catholic (devout)",
      "details": "Denomination: Roman Catholic (devout). Note: Passed away October 16, 2024."
    },
    "quotes": [
      {
        "text": "Because I know the office. You definitely need experience in the office.",
        "source": "Hays Post, October 28, 2020, https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "topic": "Quotes"
      },
      {
        "text": "I am member of Election Infrastructure Information Sharing, which is part of the Department of Homeland Security.",
        "source": "Hays Post, October 28, 2020, https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "topic": "Quotes"
      },
      {
        "text": "The County Clerk's Office is located in the Administrative Center, 718 Main in Hays, Kansas.",
        "source": "Ellis County Clerk official page - https://www.ellisco.net/93/Clerk - topic: office location",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/93/Clerk",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean candidate total verified from reviewed county materials",
      "narrative": "No campaign finance data was available online. The source material did identify a county Republican committee expenditure tied to her 2024 race, including a text broadcast and a room rental, but not a full candidate finance record.",
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
        "title": "Aclukansas.Org",
        "url": "https://www.aclukansas.org/give-hays-voters-their-poll/"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/CentralComm/2024ElecCycle/202501/CC_EL_R_202501.pdf"
      },
      {
        "title": "Downing & Lahey obituary",
        "url": "https://downingandlahey.com/obits/bobjane-bobbi-dreiling/",
        "publication": "Downingandlahey.Com",
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
    "whoTheyAre": "Nathan Leiker is the Ellis County Commissioner for District 3 and the commission's vice chair in 2026. He is vice president of L5 Farms, a Hays-based crop operation with work in Ellis and Rush counties, and his public biography is rooted in western Kansas agriculture rather than in law, lobbying, or party politics. Leiker grew up in the Hays area, graduated from Thomas More Prep-Marian in 2004, and entered county government through a competitive Republican primary in 2022 rather than through appointment or inheritance. He won that four-way primary with 764 votes, defeating both challenger Chris McGowne and incumbent Joe LeRoux. His public identity is that of a farm operator asked to make county-government decisions. The language around him is practical: land use, water, budgets, tax pressure, and whether county spending pays off over time.",
    "theirRecord": "Leiker's record on the county commission combines fiscal conservatism with a willingness to fund specific priorities. During the 2026 budget process, he supported the county's 1.96 mill levy increase after what he described as nearly 13 hours of department-by-department review. In that same discussion, he argued that increased mental-health spending was \"less expensive than building a new jail,\" which put him on the side of preventive spending rather than simply cutting costs. He has also taken concrete positions on growth and development. He supported Big Creek Estates housing approvals and has spoken openly about the need for the county to work with the city of Hays on water and higher-paying jobs. That places him in the lane of commissioners who want development, but with close attention to infrastructure and tax consequences. Outside county government, Leiker's record is tied to agricultural and rural institutions. Public sources connect him to L5 Farms, the Kansas Hereford Association, and county and regional boards, reinforcing that his political base is the farm economy and the surrounding Ellis County civic network.",
    "whatTheyStandFor": [
      {
        "issue": "County Spending / Taxes",
        "stance": "Leiker is fiscally conservative but not reflexively anti-spending. He supported the 2026 budget increase after what he described as nearly 13 hours of line-by-line department review. He believes the county sales tax is \"a viable alternative to raising property taxes\" and wants to leave the sales tax rate alone."
      },
      {
        "issue": "Mental Health Funding",
        "stance": "He supported additional mental-health spending with the argument that it is \"less expensive than building a new jail.\" This is a practical, cost-based position rather than an ideological one."
      },
      {
        "issue": "Water and Economic Development",
        "stance": "He has said the county should work with the city of Hays to get more water and higher-paying jobs into the area. He backed the Big Creek Estates housing development."
      },
      {
        "issue": "Commission Size",
        "stance": "He does not believe the Ellis County Commission would benefit from expanding from three members to five."
      }
    ],
    "whatYouShouldKnow": [
      "Leiker came to county office from large-scale farming, not from a traditional political or legal career",
      "He won a four-way Republican primary in 2022 with 764 votes, defeating the incumbent commissioner in the process",
      "During the 2026 budget process, he said commissioners spent almost 13 hours going through county departments item by item before approving the budget",
      "He supported additional mental-health spending with the argument that it was less expensive than building a new jail",
      "He backed the Big Creek Estates housing development and has linked housing, water, and job growth in his public comments",
      "He has said the county should work with Hays to get more water and higher-paying jobs into the area",
      "Public sources point strongly to a Catholic background, but they do not verify a current parish membership"
    ],
    "whereTheyWorship": "Public sources do not identify a confirmed current church affiliation for Leiker. The public record strongly suggests a Catholic background through his Thomas More Prep-Marian education and family ties to St. Nicholas of Myra Catholic Church in Hays, but no direct public statement from Leiker confirms current parish membership.",
    "church": {
      "name": "Likely St. Nicholas of Myra Catholic Church, Hays (family connection)",
      "denomination": "Likely Roman Catholic",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "details": "Denomination: Likely Roman Catholic. The Leiker surname is one of the most prominent German-Catholic families in Ellis County history -- Peter Leiker of Obermunjou was one of the original delegates sent to scout settlement locations in Kansas for the Volga German Catholic community."
    },
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
        "source": "Hays Post, July 19, 2022, https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "Quotes"
      },
      {
        "text": "The county should be proactive in recruiting new business for economic development.",
        "source": "Hays Post, July 19, 2022, https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No campaign finance data available online",
      "narrative": "No campaign finance data was available online for Leiker's county race.",
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
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6"
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
        "title": "Lkm.Org",
        "url": "https://www.lkm.org/members/?id=41501857",
        "publication": "Lkm.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "publication": "Hayspost.Com",
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
    "whoTheyAre": "Neal Younger is the Ellis County Commissioner for District 2 and the commission chairman in 2026. He came into office from the trades, not from a political résumé, and public sources consistently describe him as an electrician and plumber with a blue-collar background. Younger first won the seat in 2020, defeating incumbent Dustin Roths and Kerry McCue in a three-way Republican primary with 639 votes, or 40.16 percent. He then ran unopposed in the general election. His public style has stayed close to that origin story: low-profile, direct, and focused on county budgets, roads, water, and departmental operations rather than personality or branding. He has almost no social-media presence and very little public biographical material beyond office-related coverage. What the public record does show is a commissioner who talks in practical terms about staffing, infrastructure, communication, and whether county spending is actually worth it.",
    "theirRecord": "Younger's clearest governing trait is fiscal skepticism paired with case-by-case pragmatism. He ran in 2020 on the argument that Ellis County was spending too much money, but in 2026 he supported a budget increase after deciding that added mental-health funding was \"less expensive than building a new jail.\" That is one of the most concrete statements of his governing philosophy in the record. He has also taken visible positions on development and infrastructure. Public coverage shows him calling for closer county-city cooperation, especially around water and economic development, and saying the county should work with the city of Hays to bring in more water and higher-paying jobs. In housing discussions, he pressed for practical answers on rural water access during the Big Creek Estates conversation. Younger has also talked about government in a hands-on way. In campaign coverage, he said he wanted to spend time in every county department to understand staffing and needs directly rather than govern from a distance. That fits with the broader picture of a commissioner who approaches county government like a working manager rather than a public personality.",
    "whatTheyStandFor": [
      {
        "issue": "County Spending / Taxes",
        "stance": "Younger ran on the argument that Ellis County was spending too much money. Once in office, he supported the 2026 budget increase but only after detailed department-by-department review. He believes the county sales tax should be left alone rather than raised."
      },
      {
        "issue": "Mental Health Funding",
        "stance": "He supported increased mental-health spending, saying the increase \"is less expensive than building a new jail.\" This reflects a practical, cost-prevention approach to county budgeting."
      },
      {
        "issue": "Water and Economic Development",
        "stance": "He has said the county should work with the city of Hays to bring in more water and higher-paying jobs. During housing discussions, he raised practical questions about whether new developments would have enough water service if wells failed."
      },
      {
        "issue": "Government Efficiency",
        "stance": "He pledged to spend one to two hours in every county department to understand staffing and needs directly, rather than governing from a distance."
      }
    ],
    "whatYouShouldKnow": [
      "Younger is an electrician and plumber by trade, and his public profile is built around that working-class background",
      "He won his seat in a 2020 three-way Republican primary with 639 votes, or 40.16 percent",
      "He campaigned on concern that Ellis County was spending too much money, but later supported a budget increase when he concluded mental-health spending could reduce jail costs",
      "He has publicly argued that Ellis County should work with Hays on water supply and higher-paying jobs",
      "During housing discussions, he raised practical questions about whether residents would have enough water service if wells failed",
      "He has maintained almost no social-media footprint, so most of the public record comes from county coverage and candidate questionnaires rather than campaign branding",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Younger.",
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
      "narrative": "No campaign finance data was available online for Younger's county race.",
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
    "whoTheyAre": "Rebecca Herzog is the Ellis County Register of Deeds, an officeholder whose public profile is far smaller than the importance of the job she holds. The county and statewide register-of-deeds listings confirm her role in Hays, and election reporting shows she won the office in 2024 and took over in January 2025. That low visibility is itself one of the defining facts about her. Herzog does not appear in the public record as a political personality, a frequent speaker, or a campaign brand-builder. She reads instead as an administrative county official whose public identity is tied almost entirely to the work of the office.",
    "theirRecord": "Herzog's public record is the office itself. The register of deeds records property documents, maintains land indexes, and keeps most office records open to the public under Kansas law. In county government, that means responsibility for one of the basic institutions that underpins land ownership, title work, and public access to real-estate records. There is very little else in the public record to attach to her personally. That does not make the office unimportant; it means the role is administrative rather than personality-driven. Voters can learn a lot about what the office does, but much less about Herzog's biography, community life, or public-facing political style.",
    "whatTheyStandFor": [],
    "whatYouShouldKnow": [
      "Herzog won the Ellis County Register of Deeds office in 2024 and took office in January 2025",
      "Her public footprint is unusually small compared with other county officeholders",
      "The office is legally important even though it attracts little public attention",
      "The register of deeds records real-estate documents and maintains public land indexes",
      "Most of the usable public record is about the office's duties, not Herzog's personal background",
      "No public campaign finance data was available online in this source set"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation, denomination, or parish website for Herzog.",
    "quotes": [
      {
        "text": "The goal of the register of deeds office is to provide quality public service to all citizens in a professional manner.",
        "source": "Ellis County Register of Deeds, accessed April 2, 2026, https://www.ellisco.net/100/Register-of-Deeds",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "Quotes"
      },
      {
        "text": "This office files and records documents that pertain to real estate.",
        "source": "Ellis County Register of Deeds, accessed April 2, 2026, https://www.ellisco.net/100/Register-of-Deeds",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "Quotes"
      },
      {
        "text": "All records in the register of deeds office are required by law to be open to the public.",
        "source": "Ellis County Register of Deeds, accessed April 2, 2026, https://www.ellisco.net/100/Register-of-Deeds",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No campaign finance data available online",
      "narrative": "No campaign finance data was available online for Herzog's county race. Publicly available material confirms her election result and her office role, but not a donor table or itemized finance report.",
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
    "whoTheyAre": "Vernon Ruder Jr. is the Ellis County treasurer, a county official whose public work centers on taxes, motor-vehicle transactions, and the day-to-day administrative functions that most voters notice only when something changes. Before serving as treasurer, public records tie him to finance, operations, and work connected to local government and business administration in Hays. He is also part of a well-known Hays family network. He is married to school board member Ruth Ruder, and his family name is also tied to Hays Mayor Mason Ruder. Public records point strongly to a Catholic family and school background in Hays, but they do not clearly identify a current parish membership for Vernon Ruder Jr. himself.",
    "theirRecord": "Ruder's most visible office action has been the decision to add a $2.50 walk-in fee for motor-vehicle transactions. He defended the fee as a state-authorized way to make the motor-vehicle side of the office pay more of its own costs instead of shifting those expenses onto property taxpayers. That decision gave voters a clear example of how he approaches county administration: user-fee based, budget-minded, and focused on office operations. He has also pointed to budget reductions and customer-flow improvements as evidence that the treasury office became more efficient under his watch. In local coverage, he said the fee generated more than $50,000 a year and helped reduce the office budget substantially. That is not flashy politics, but it is the kind of concrete administrative record county treasurers are usually judged on.",
    "whatTheyStandFor": [
      {
        "issue": "Property Taxes",
        "stance": "Ruder frames his office decisions around reducing the burden on property taxpayers. His $2.50 motor-vehicle walk-in fee was specifically designed so the motor-vehicle side of the office pays its own costs instead of shifting expenses onto property tax revenue."
      },
      {
        "issue": "Government Efficiency",
        "stance": "Has pointed to cutting the treasury budget from roughly $452,000 to about $367,000 as evidence that county offices can do more with less. The motor-vehicle fee alone generated more than $50,000 a year."
      },
      {
        "issue": "Sales Tax",
        "stance": "Supports the two quarter-cent sales taxes as \"a viable alternative to raising property taxes.\" As a county treasurer, Ruder's public record is administrative rather than ideological. He has not taken clear public positions on abortion, guns, immigration, or other statewide policy debates. His work centers on tax collection, motor-vehicle services, and office management."
      }
    ],
    "whatYouShouldKnow": [
      "Ruder is a county treasurer, so his public record is administrative rather than legislative or ideological",
      "His most visible policy change was a $2.50 walk-in fee for motor-vehicle transactions, which he defended as a way to fund the office without leaning more heavily on property taxpayers",
      "He has said the motor-vehicle fee raised more than $50,000 a year and helped cut the treasury budget from roughly $452,000 to about $367,000",
      "The Ruder name is tied to multiple public offices in Hays and Ellis County, including school, city, and county government",
      "Public records point strongly to a Catholic family and school background, but they do not identify a current parish membership for him",
      "No campaign finance data was available online"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation for Vernon Ruder Jr. The public record does point to a Catholic family and school background in Hays, but no current parish participation is clearly documented under his own name.",
    "church": {
      "name": "Specific parish not confirmed",
      "denomination": "Roman Catholic (strong indicators)",
      "url": "https://www.ihm-church.com/",
      "details": "Denomination: Roman Catholic (strong indicators). 2010 TMP-Marian graduate (Catholic high school)."
    },
    "quotes": [
      {
        "text": "I feel like we should be funding our motor vehicle department with motor vehicle money.",
        "source": "Hays Post, 2023-11-20, https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
        "topic": "Quotes"
      },
      {
        "text": "The Ellis County Treasurer's Office ... is responsible for the tax billing, collection, and distribution.",
        "source": "Ellis County Treasury official page, accessed 2026-04-02, https://www.ellisco.net/566/Treasury",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "Quotes"
      },
      {
        "text": "The Treasurer's Office also acts as an agent for the Kansas Department of Revenue.",
        "source": "Ellis County Treasury official page, accessed 2026-04-02, https://www.ellisco.net/566/Treasury",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No campaign finance data was available online.",
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
        "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4"
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
    "whoTheyAre": "Ken Brooks is a longtime USD 489 board member in Hays and one of the district's most visible parent figures. Public profiles identify him as a loss-control safety specialist at Insurance Planning, a Kiwanis member, and a Hays High graduate whose three daughters all went through the district. His public life is local and practical, with schools, church, and community service doing most of the biographical work. Brooks has been on the board through one of the biggest construction eras in district history. By the time he ran again in 2025, he was speaking less as the parent of current students than as a veteran board member with years of experience in budgets, facilities, and district oversight.",
    "theirRecord": "Brooks has been part of the board majority supporting USD 489's major facilities work, including the bond-backed building program and the new Hays High School. In public Q&A material, he has defended the district's handling of money and said the board has found ways to address immediate facility needs while keeping larger projects moving. He has also made student costs a recurring issue. Brooks has repeatedly said the district lowered school fees during his time on the board, and he has pointed to that as a concrete measure of whether the board is helping families. His public style is not combative. He tends to talk about oversight, trust in administrators, and keeping the district stable while large projects are completed.",
    "whatTheyStandFor": [
      {
        "issue": "School Fees",
        "stance": "Has repeatedly pointed to lower school fees as one of his top priorities and accomplishments on the board. He pushed for reducing the textbook fee from $90 to $70 after identifying a surplus in the textbook fund."
      },
      {
        "issue": "Bond / Facilities Support",
        "stance": "Supports the district's $143.5 million bond program and the new Hays High School construction. He has voted with the majority on major construction and facilities decisions."
      },
      {
        "issue": "Transparency",
        "stance": "Called a special board meeting specifically because \"the board was striving for transparency.\" Supports open communication with the community about district decisions."
      },
      {
        "issue": "School Mascot",
        "stance": "Voted against changing the Hays Middle School mascot to Indians in the 5-2 board vote, putting him in the minority on that cultural question."
      },
      {
        "issue": "District Stability",
        "stance": "His general approach is to trust administrators, maintain stable district operations, and keep large building projects on track rather than push for dramatic changes."
      }
    ],
    "whatYouShouldKnow": [
      "Brooks was re-elected to the USD 489 board in November 2025 and remains one of the district's longest-serving members",
      "He has publicly backed the district's bond work and the larger facilities buildout that produced the new Hays High School",
      "He has repeatedly pointed to lower school fees as one of the board's practical achievements for families",
      "His 2021 candidate profile said he had helped lead children's ministry at Celebration Community Church for almost 14 years",
      "He also said in that same profile that he had not received funds or in-kind support from outside the district or from a PAC"
    ],
    "whereTheyWorship": "Brooks publicly identifies Celebration Community Church in Hays as his church. The Hays campus website is https://www.celebratejesus.org/hays-campus, and Brooks said he had helped lead the children's ministry there for almost 14 years.",
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
        "source": "Hays Post candidate profile, 2021, https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No campaign finance data available online",
      "narrative": "Brooks' 2021 candidate profile said he had not accepted outside funds or in-kind support from a PAC or other outside source. No itemized campaign finance data available online.",
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
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
      },
      {
        "title": "Celebratejesus.Org",
        "url": "https://www.celebratejesus.org/hays-campus"
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
    "whoTheyAre": "Curt Vajnar is president of the USD 489 Board of Education and one of the best-known education figures in Hays. Public records describe him as a retired agriculture teacher who spent 31 years in the district, won Kansas Teacher of the Year while still relatively young, and later moved into ranching, farming, and small business work around Antonino and Hays. He and his wife Ruth raised five children. Vajnar brings more than a teacher's biography to the board. He is one of those local figures who stayed visible after retirement and then translated a long school career into school governance. In Hays, that gives him credibility with people who know the district from inside and with taxpayers who see him as a rural, fiscally cautious voice.",
    "theirRecord": "Vajnar has made transparency and contract review recurring themes of his board service. He has argued that meetings and work sessions should be held at times the public can actually attend, that proceedings should be recorded, and that board members need enough time to read major contracts before voting. In 2025 he voted against the Hays High and Roosevelt construction contract, saying he did not believe board members had enough opportunity to educate themselves on it. He has also been central in several of the district's internal fights. He opposed hiring Superintendent Ron Wilson's wife through the consent agenda, pressed for a closer look at nepotism rules, and pulled the proposed Golden Belt Bank naming-rights agreement from the agenda because he believed the district should seek better value and let other businesses compete. Even as board president, he has not been a reflexive vote for the administration.",
    "whatTheyStandFor": [
      {
        "issue": "Fiscal Oversight",
        "stance": "His signature issue. Voted against the Hays High and Roosevelt construction contract because he said board members did not have enough time to review it. Has consistently pushed for tighter spending controls on the $143.5 million bond program."
      },
      {
        "issue": "Transparency",
        "stance": "Has advocated for evening meetings so the public can attend, video recording of all board proceedings, and more time for board members to review agendas and contracts before voting."
      },
      {
        "issue": "Nepotism / Ethics",
        "stance": "Opposed hiring Superintendent Ron Wilson's wife through the consent agenda and pressed for closer scrutiny of nepotism policies."
      },
      {
        "issue": "Naming Rights / District Revenue",
        "stance": "Pulled the Golden Belt Bank naming-rights deal from the agenda, arguing the district should seek better value and let other businesses compete rather than rushing into a weak contract."
      },
      {
        "issue": "Teacher Retention",
        "stance": "While his governance focus is on oversight, he has supported the broader goal of keeping good teachers and staff in the district."
      }
    ],
    "whatYouShouldKnow": [
      "Vajnar spent 31 years teaching in USD 489 and was named Kansas Teacher of the Year",
      "He is board president, which gives him influence over agendas and meeting procedure as well as votes",
      "He has pushed for evening meetings, public video access, and broader transparency in district business",
      "He voted against the Hays High and Roosevelt construction contract because he said the board needed more review time",
      "He opposed hiring the superintendent's wife through the consent agenda and pushed for more scrutiny of nepotism policy",
      "He also blocked the first version of the Golden Belt Bank naming-rights deal, arguing the district should not rush into a weak contract"
    ],
    "whereTheyWorship": "Vajnar is publicly identified with Our Lady, Help of Christians Catholic Church in Antonino, where the source record says he has served on the parish council. Church website: https://www.ihm-church.com/.",
    "church": {
      "name": "Our Lady, Help of Christians Catholic Church, Antonino, KS",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.ihm-church.com/",
      "details": "Denomination: Roman Catholic (Diocese of Salina). Church Role: Parish Council Member."
    },
    "quotes": [
      {
        "text": "I did not believe he had an opportunity to educate himself on the contract.",
        "source": "Hays Post, 2025, https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
        "topic": "Quotes"
      },
      {
        "text": "It is something fiscally important that we do so we are accountable to our taxpayers.",
        "source": "Hays Post, 2025, https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "topic": "Quotes"
      },
      {
        "text": "Communication is a key component of trying to regain and establish trust.",
        "source": "Hays Post, 2025, https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No campaign finance data was available online.",
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
        "url": "https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a"
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
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2"
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
    "whoTheyAre": "Ruth Ruder is a USD 489 school board member and board vice president in Hays. She grew up in Hays, graduated from Hays High in 1988, and spent 30 years at Golden Plains Credit Union, including more than 15 years as vice president. Her public profile is local, finance-oriented, and closely tied to Hays civic life. She is also part of one of the most visible political families in the area. Ruder is married to Vernon Ruder Jr., the Ellis County treasurer, and she is the mother of Mason Ruder, the mayor of Hays. That means the family has held visible roles in county, city, and school government at the same time.",
    "theirRecord": "Ruder's record on the school board is pragmatic and budget-conscious. She has supported technology and bond-related spending, but her public comments show a willingness to slow down or question transactions that do not clearly benefit students or taxpayers. Her board style is not ideological or theatrical; it is more often procedural and skeptical. That approach shows up most clearly in how she talks about fiscal responsibility, district employees, and board trust. Her public comments consistently frame the job as stewardship: making sure purchases, land decisions, and district priorities can be justified to taxpayers as well as to families.",
    "whatTheyStandFor": [
      {
        "issue": "Fiscal Responsibility",
        "stance": "This is her defining issue. She consistently frames her board role as stewardship of taxpayer money. She has said \"I will do my best at representing the taxpayer in being fiscally responsible\" and has questioned land deals, sponsorships, and purchases that do not clearly benefit students."
      },
      {
        "issue": "District Land Use",
        "stance": "She has been willing to slow down land transactions when the public benefit is unclear. In 2025, she raised concerns that a buyer of district land near the middle school might purchase it only for a tax deduction rather than put it to productive use."
      },
      {
        "issue": "Students First",
        "stance": "She has said her \"first obligation, if elected, will be to the children in our district\" and that all district employees are equally important, pushing back against any hierarchy that elevates administrators over support staff."
      },
      {
        "issue": "Board Transparency",
        "stance": "She has emphasized communication and trust-building between the school board and the community, saying \"communication is a key component of trying to regain and establish trust.\""
      }
    ],
    "whatYouShouldKnow": [
      "Ruder is a Hays High graduate who spent three decades at Golden Plains Credit Union before or alongside her school-board service",
      "She is already on the USD 489 board, so voters can judge her by an existing public record rather than campaign promises alone",
      "She is part of a family that also includes the Hays mayor and the Ellis County treasurer",
      "Her public comments show a consistent emphasis on fiscal responsibility and whether district actions clearly serve students",
      "She has been willing to question sponsorship, land, and purchasing decisions rather than simply rubber-stamp them",
      "No campaign finance data was available online for her local school-board race"
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
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No campaign finance data was available online for Ruder's school-board race. Public sources were strong enough to document her board record and local profile, but not a donor table or itemized finance report.",
      "donors": [
        {
          "name": "Campaign finance data",
          "amount": "No campaign finance data available online"
        }
      ],
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
    "whoTheyAre": "Derek Yarmer is a USD 489 school board member and an emergency medicine physician at HaysMed. Public biographical material says he grew up in Albert, attended Otis-Bison schools, earned a chemistry degree from Fort Hays State University, graduated from the University of Kansas School of Medicine, and completed an emergency medicine residency through UMKC. He and his wife Emily moved back to Hays in 2015 and have three children in district schools. That medical background makes Yarmer unusual on a local school board. He arrived with a professional life built around evidence, crisis decision-making, and large institutional systems, and that perspective shows in the way he talks about district spending, board oversight, and the need to separate urgent problems from routine business.",
    "theirRecord": "Yarmer has been one of the board's most visible fiscal skeptics. In public commentary on the district's bond and capital outlay spending, he criticized what he called weak oversight and pointed to specific line items, including a concession stand, a digital scoreboard, tennis courts, and a marquee sign, while arguing that other needs were waiting. He has also pushed to see multiple project prices together before approving individual phases of the bond work. His record includes a broader argument about governance. Yarmer has asked for bids and board review before major purchases, pressed for more time to study agendas, and argued during emergency policy discussions that parents do not surrender their rights during the school day. He has often aligned with Allen Park as part of the board's tighter-scrutiny bloc.",
    "whatTheyStandFor": [
      {
        "issue": "Bond and Capital Spending",
        "stance": "His most prominent issue. He is the board's most vocal fiscal hawk, criticizing what he called \"reckless spending\" on items like a $753,700 concession stand, a $777,680 digital scoreboard, $687,937 for tennis courts, and a $66,364 marquee sign while roofing and classroom projects were deferred. He has said the board is \"to blame for reckless spending by failing to provide proper oversight of the school administration.\""
      },
      {
        "issue": "Board Oversight",
        "stance": "Has pushed for multiple project prices to be presented together before the board approves individual phases, rather than voting on projects piecemeal. Wants earlier access to agendas and more complete pricing information before votes."
      },
      {
        "issue": "Parental Rights",
        "stance": "Made one of the board's clearest parental-rights statements during an emergency policy discussion, saying: \"I don't think you give up your parental rights between 8 and 3.\""
      },
      {
        "issue": "Emergency Policy",
        "stance": "Has argued the board overuses emergency procedures, stating \"If everything is an emergency, then nothing is an emergency.\""
      },
      {
        "issue": "Student Advocacy",
        "stance": "Describes his core motivation as wanting \"to be an advocate for the students' interests, as well as be fiscally responsible.\""
      }
    ],
    "whatYouShouldKnow": [
      "Yarmer is a practicing emergency physician, not a full-time political figure",
      "He grew up in central Kansas, trained through FHSU, KU, and UMKC, and returned to Hays in 2015",
      "He has been one of the board's loudest critics of bond and capital outlay spending",
      "He has argued for earlier agenda access, more complete pricing information, and stronger board oversight",
      "He made one of the board's clearest public parental-rights statements during emergency policy debates",
      "The public source record on faith and formal campaign finance is thin"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "I want to be an advocate for the students' interests, as well as be fiscally responsible.",
        "source": "Hays Post, 2023, https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "Quotes"
      },
      {
        "text": "I don't think you give up your parental rights between 8 and 3.",
        "source": "Hays Post, 2025, https://hayspost.com/posts/d89d076f-4f16-4002-a12d-d27ea8cd6471",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/d89d076f-4f16-4002-a12d-d27ea8cd6471",
        "topic": "Quotes"
      },
      {
        "text": "If everything is an emergency, then nothing is an emergency.",
        "source": "Hays Post, 2025, https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No public total verified; campaign appears self-funded or lightly funded",
      "narrative": "No campaign finance data was available online.",
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
        "url": "https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/52e53c90-5182-42f0-919e-2c7dc145305b"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ed7e23f5-7116-4798-87ff-ff11bf8563d4"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d89d076f-4f16-4002-a12d-d27ea8cd6471"
      },
      {
        "title": "Haysmed.Com",
        "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
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
        "title": "Hays USD 489 board scrutinizes bond budget",
        "url": "https://hayspost.com/posts/87f9b442-e928-4c9d-bb85-03acad9d2a3f",
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
    "whoTheyAre": "Allen Park is a longtime USD 489 school board member and a retired district educator whose career ran through nearly every level of the Hays school system. Public records describe 31 years in USD 489 as a paraprofessional, teacher, coach, migrant director, Washington Elementary principal, and transition coordinator during the school's closure in 2015. He also holds degrees from Fort Hays State University in industrial and elementary education and school administration. Park's family life is woven into the district. His wife Patti also worked in education, and all four of their children went through USD 489 from prekindergarten to Hays High. That long institutional memory shows in the way he talks about the board: not as an outsider railing at the schools, but as someone who has spent decades inside the district's buildings, budgets, and personnel decisions.",
    "theirRecord": "Park has been one of the board's most persistent voices for process, transparency, and close review of spending. He has backed the district's bond work and broader facilities plan, but he has also voted no or asked for delays when he believed contracts, purchases, or personnel items were moving too quickly. In the district's repeated arguments over bond oversight, he has aligned often with Derek Yarmer as part of the faction asking harder questions about timing, pricing, and administrative detail. He was one of two dissenting votes when the board approved hiring Superintendent Ron Wilson's wife as a teacher, and he has pushed for more direct review of administrator contracts instead of broad approval through the consent agenda. His record is not anti-district, but it is skeptical of autopilot decision-making, especially when public money and board authority are involved.",
    "whatTheyStandFor": [
      {
        "issue": "Board Transparency and Oversight",
        "stance": "Park has been one of the most persistent voices on the USD 489 board for closer review of spending, contracts, and personnel decisions. He has voted no or asked for delays when he believed items were moving too fast through the consent agenda."
      },
      {
        "issue": "Bond Spending Accountability",
        "stance": "He has backed the district's bond work and facilities plan but aligned with the oversight faction that asks harder questions about timing, pricing, and administrative detail on bond-related contracts."
      },
      {
        "issue": "Nepotism and Hiring Practices",
        "stance": "Park was one of two board members who voted against hiring Superintendent Ron Wilson's wife as a teacher, and he has pushed for more direct review of administrator contracts rather than rubber-stamping them."
      },
      {
        "issue": "Campaign Independence",
        "stance": "He has said his campaign support came from family, friends, and local community members rather than outside money, and he has positioned himself as an insider who asks hard questions rather than an outsider railing at the schools. Park has not taken clear public positions on state or federal issues like abortion, guns, or immigration. His public record is focused entirely on local school governance."
      }
    ],
    "whatYouShouldKnow": [
      "Park spent 31 years working inside USD 489 before serving on the board",
      "He was Washington Elementary principal for 25 years and managed the transition when the school closed",
      "He has often voted with the oversight bloc on the board in disputes about bond spending and administrative review",
      "He opposed hiring the superintendent's wife through the consent agenda and pushed for closer scrutiny of nepotism rules",
      "He has said his campaign support came from family, friends, and local community members rather than outside money",
      "Public records do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "Communication is a key component of trying to regain and establish trust.",
        "source": "Hays Post, October 25, 2023, https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "topic": "Quotes"
      },
      {
        "text": "With the recently passed bond, the facilities are being replaced and repaired.",
        "source": "Hays Post, October 25, 2023, https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "topic": "Quotes"
      },
      {
        "text": "I have not received any money outside of the school district.",
        "source": "Hays Post, October 2023, https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Allen Park reported a local, no-outside-money school-board finance profile",
      "narrative": "No campaign finance data was available online. Park said during the 2023 campaign that he had not received money from outside the school district and that his support came from family, friends, and community members.",
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
        "title": "Archive.Hayspost.Com",
        "url": "https://archive.hayspost.com/2015/05/19/park-announces-retirement-after-30-years-with-usd-489/"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
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
        "title": "Takeaways from Hays USD 489 Education Board Meeting",
        "url": "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/",
        "publication": "Citizenjournal.Us",
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
    "whoTheyAre": "Jayme Goetz is a lifelong Hays resident, a Fort Hays State University mathematics instructor, and a member of the USD 489 school board. Public candidate profiles say she attended local schools, earned three degrees from Fort Hays State, taught for a year in Ellsworth, then spent seven years at Hays High before joining the FHSU math faculty. Her public identity is closely tied to the district she helps oversee. Goetz has children in USD 489, and her comments in board and campaign settings often come from the perspective of a teacher and parent rather than from the perspective of a district administrator. That local, teacher-first profile is what defines her in public life. She is not a statewide figure or a culture-war personality. She is a local board member whose public record is built from candidate questionnaires, board meetings, and school policy debates in Hays.",
    "theirRecord": "Goetz has developed a record as a board member who asks for clearer explanations of district decisions. The raw material links her to questions about how salary figures were calculated, whether discipline rules in the student handbook were specific enough, and how spending choices would be understood by families. She has also been willing to take positions in local disputes rather than simply stay quiet. In the mascot debate at Hays Middle School, she supported the 5-2 vote to change the school mascot to Indians after reviewing survey responses that she said reflected ignorance and immaturity. In other board matters, she backed laptops for Hays High students after hearing from teachers who preferred them. Her voting pattern in the raw material generally places her with the board majority, but not as a passive member. The record points instead to a member who supports district operations while pressing for clearer communication, more predictable rules, and more understandable justifications.",
    "whatTheyStandFor": [
      {
        "issue": "Transparency",
        "stance": "Identified transparency as the number one thing she would change about USD 489. She wants clearer communication between the district and families about decisions and spending."
      },
      {
        "issue": "Student Discipline",
        "stance": "Has pushed for more specific, written-out consequences in the student handbook so that discipline is consistent. She brought at least six complaints about inconsistency at Hays High to the board."
      },
      {
        "issue": "School Mascot",
        "stance": "Supported the board vote to change the Hays Middle School mascot to Indians after reviewing community survey responses and calling many of them ignorant and immature."
      },
      {
        "issue": "Technology in Schools",
        "stance": "Backed providing laptops to Hays High students after hearing from teachers who preferred them over other options."
      },
      {
        "issue": "Bond Spending",
        "stance": "Generally supports the district's approach to bond project management, though she has asked questions about how salary and spending figures are calculated."
      }
    ],
    "whatYouShouldKnow": [
      "Goetz is a lifelong Hays resident and a graduate of the local school system she now helps govern",
      "She taught at Hays High before moving to Fort Hays State University, where she teaches mathematics",
      "She has children in USD 489, which gives her a direct family stake in district policy",
      "She has pushed for clearer discipline rules and more transparent explanations of district decisions",
      "She supported the board vote to change the Hays Middle School mascot to Indians",
      "She has raised questions about compensation decisions, handbook language, and technology spending"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
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
      "narrative": "No campaign finance data available online.",
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
    "whoTheyAre": "Craig Pallister is a returning USD 489 school board member and a retired district administrator in Hays. Public profiles say he worked 21 years as a middle-school principal after three years as an assistant principal, and that he started with the district even earlier as a bus driver while still in college. He and his wife Sue, a retired teacher and librarian, raised their children in the school system. Pallister's connection to USD 489 is long and personal. He has served on the board before, including as vice president and president, then returned to win a seat again in 2025 after losing a 2023 race by three votes. He is the kind of candidate whose public identity comes almost entirely from the schools.",
    "theirRecord": "Because Pallister only returned to the board in 2025, his fresh voting record is still developing. The source material puts more emphasis on the priorities he ran on than on a long list of new votes. He has said the district needs to keep teacher, administrator, and staff retention at the center of its work and has linked that concern to everyday questions about facilities, fees, and classroom stability. He comes back to the board with a deep administrator's perspective rather than an insurgent one. Public comments frame him as someone interested in steady operations, strong staffing, and protecting the district's ability to recruit and keep people over time.",
    "whatTheyStandFor": [
      {
        "issue": "Teacher and Staff Retention",
        "stance": "His top stated priority. Has said the board \"needs to continue to make teacher, administrator and staff retention and recruitment a priority.\""
      },
      {
        "issue": "Facilities and Fees",
        "stance": "Has linked staffing concerns to everyday questions about building upkeep, school fees, and classroom stability."
      },
      {
        "issue": "School Governance",
        "stance": "Comes from an administrator's perspective after 21 years as a middle-school principal. His approach emphasizes steady operations and institutional continuity rather than ideological overhaul."
      },
      {
        "issue": "Bond / Spending Oversight",
        "stance": "The public record does not show him taking a strong position on either side of the board's fiscal-oversight debates. As the newest returning member (seated January 2026), his alignment on spending questions is still developing."
      }
    ],
    "whatYouShouldKnow": [
      "Pallister spent 21 years as a middle-school principal and three years as an assistant principal in USD 489",
      "He began his district career as a bus driver while still in college",
      "His wife Sue is a retired teacher and librarian, and their children attended USD 489",
      "He returned to the board in 2025 after losing a race in 2023 by three votes",
      "His stated priorities include teacher retention, staff recruitment, and keeping schools stable for families",
      "Public information about his personal life and faith background is limited"
    ],
    "whereTheyWorship": "Public sources do not identify a current church affiliation.",
    "quotes": [
      {
        "text": "I worked for the school district as a middle school principal for 21 years, an assistant principal for three years prior to that.",
        "source": "Hays Post, 2025, https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "Quotes"
      },
      {
        "text": "I have just been involved with education all my life.",
        "source": "Hays Post, 2025, https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
        "topic": "Quotes"
      },
      {
        "text": "The USD 489 Board of Education needs to continue to make teacher, administrator and staff retention and recruitment a priority.",
        "source": "Hays Post, 2023, https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e",
        "topic": "Quotes"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No clean total verified in reviewed public sources",
      "narrative": "No campaign finance data was available online.",
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
        "url": "https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18"
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
    "whoTheyAre": "Ron Wilson is the superintendent of Hays USD 489. He is not an elected candidate, but he is one of the most important figures in local education because he runs the district's day-to-day operations and carries out the decisions the school board makes. His public profile is tied almost entirely to administration. In the public record, Wilson is the face of the district's bond-era building projects, staffing questions, facilities debates, and capital planning. That is why he appears in this project: school-board politics in Hays are inseparable from the superintendent who executes the board's agenda.",
    "theirRecord": "Wilson's tenure is closely associated with the district's major facilities push. He has been the superintendent during the construction of the new Hays High School, the Roosevelt Elementary addition, and the broader debate over how aggressively the district should keep investing in its buildings and athletic facilities. The most notable controversy in his public record came during the 2022 bond election, when an email he sent to district staff about turnout incentives drew scrutiny and public criticism. Even with that episode, the larger public record still presents him mainly as an operational superintendent: the person responsible for moving bond projects, staffing, and district logistics forward once the board has voted.",
    "whatTheyStandFor": [
      {
        "issue": "School Facilities / Bond Spending",
        "stance": "Wilson is the strongest public advocate for upgrading USD 489 facilities. He has repeatedly said Hays should \"stop settling for the schools and facilities that we have\" and pushed the $143.5 million bond that built the new Hays High School and funded other construction."
      },
      {
        "issue": "School Funding",
        "stance": "He has spoken out against state legislation that threatens district funding, including flagging Kansas HB 2468 (private school tax credits) as a threat to divert public dollars from public schools. He also warned the board about state budget bills that could cut mental health funding."
      },
      {
        "issue": "Turnout Controversy",
        "stance": "During the 2022 bond election, Wilson emailed district staff offering to buy lunch for buildings where 100% of eligible voters cast ballots. This was reported as potential election bribery under Kansas law. The county attorney declined to prosecute, citing limited resources, but did not say it wasn't a violation."
      }
    ],
    "whatYouShouldKnow": [
      "Wilson is the superintendent of Hays USD 489, not an elected candidate",
      "He has been the public face of the district's bond-era construction and facilities program",
      "His tenure includes the new Hays High School project and the Roosevelt Elementary addition",
      "He drew criticism during the 2022 bond election over an email to district staff about turnout",
      "His public comments focus heavily on facilities, staffing, and district operations",
      "Public sources do not identify a current church affiliation"
    ],
    "whereTheyWorship": "Public sources do not identify Wilson's church home or denomination.",
    "quotes": [
      {
        "text": "If 100% of the eligible voters in your building vote before May 10th we will bring lunch for you one day before the end of school...The first building in our district to get 100% also gets dessert with their lunch!",
        "source": "Hays Daily News, May 2, 2022, https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/",
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
      "narrative": "Not applicable. Wilson is an appointed superintendent, not a candidate running for office in this source set.",
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
        "title": "Usd489.Com",
        "url": "https://www.usd489.com/page/board-of-education"
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
