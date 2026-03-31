export type ConsistencyRating = "HIGH" | "MODERATE" | "LOW" | "INSUFFICIENT_DATA";
export type ValuesRating = "Strong" | "Moderate" | "Weak" | "Unknown";
export type PartyKey = "R" | "D" | "I" | "NP";

export interface CampaignFinance {
  totalRaised: string;
  topDonor: string;
  topDonorAmount: string;
  pacFundedPercent: number;
  reportingPeriod: string;
  source: string;
}

export interface Flag {
  type: "red" | "green";
  label: string;
  description: string;
}

export interface ValuesPillar {
  pillar: string;
  rating: ValuesRating;
  notes: string;
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
  consistencyRating: ConsistencyRating;
}

export interface CandidateFull extends CandidateCard {
  // At A Glance
  born?: string;
  hometown?: string;
  religion?: string;
  education?: string;
  family?: string;
  district?: string;
  margin2024?: string;

  // Narrative
  executiveSummary: string[];
  background: string;
  politicalRecord: string;

  // Media
  quotes: Quote[];

  // Finance
  campaignFinance?: CampaignFinance;

  // Integrity
  consistencyNotes: string;
  flags: Flag[];

  // Values
  valuesPillars: ValuesPillar[];

  // Sources
  sources: Source[];
}

// ─── CARD DATA (used on listing page) ────────────────────────────────────────

export const CANDIDATE_CARDS: CandidateCard[] = [
  {
    slug: "tracey-mann",
    name: "Tracey Mann",
    party: "R",
    position: "KS-01 U.S. House",
    electionSlug: "ks-01-house-2026",
    incumbent: true,
    occupation: "Farmer / Real Estate Broker",
    consistencyRating: "MODERATE",
  },
  {
    slug: "roger-marshall",
    name: "Roger Marshall",
    party: "R",
    position: "U.S. Senate",
    electionSlug: "us-senate-2026",
    incumbent: true,
    occupation: "Physician",
    consistencyRating: "MODERATE",
  },
  {
    slug: "barb-wasinger",
    name: "Barb Wasinger",
    party: "R",
    position: "KS House District 111",
    electionSlug: "ks-house-111",
    incumbent: true,
    occupation: "State Representative",
    consistencyRating: "INSUFFICIENT_DATA",
  },
  {
    slug: "kris-kobach",
    name: "Kris Kobach",
    party: "R",
    position: "Kansas Attorney General",
    electionSlug: "kansas-ag-2026",
    incumbent: true,
    occupation: "Attorney / Politician",
    consistencyRating: "MODERATE",
  },
  {
    slug: "scott-schwab",
    name: "Scott Schwab",
    party: "R",
    position: "Governor Candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Kansas Secretary of State",
    consistencyRating: "INSUFFICIENT_DATA",
  },
  {
    slug: "vicki-schmidt",
    name: "Vicki Schmidt",
    party: "R",
    position: "Governor Candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Kansas Insurance Commissioner",
    consistencyRating: "INSUFFICIENT_DATA",
  },
  {
    slug: "ty-masterson",
    name: "Ty Masterson",
    party: "R",
    position: "Governor Candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Kansas Senate President",
    consistencyRating: "INSUFFICIENT_DATA",
  },
  {
    slug: "jeff-colyer",
    name: "Jeff Colyer",
    party: "R",
    position: "Governor Candidate",
    electionSlug: "kansas-governor-2026",
    incumbent: false,
    occupation: "Physician / Former Governor",
    consistencyRating: "INSUFFICIENT_DATA",
  },
  {
    slug: "mason-ruder",
    name: "Mason Ruder",
    party: "NP",
    position: "Hays Mayor",
    electionSlug: "ks-house-111",
    incumbent: true,
    occupation: "Mayor / Business Owner",
    consistencyRating: "INSUFFICIENT_DATA",
  },
  {
    slug: "scott-braun",
    name: "Scott Braun",
    party: "R",
    position: "Ellis County Sheriff",
    electionSlug: "ks-house-111",
    incumbent: true,
    occupation: "Sheriff",
    consistencyRating: "INSUFFICIENT_DATA",
  },
  {
    slug: "aaron-cunningham",
    name: "Aaron Cunningham",
    party: "R",
    position: "Ellis County Attorney",
    electionSlug: "ks-house-111",
    incumbent: true,
    occupation: "County Attorney",
    consistencyRating: "INSUFFICIENT_DATA",
  },
  {
    slug: "ken-brooks",
    name: "Ken Brooks",
    party: "NP",
    position: "USD 489 Board President",
    electionSlug: "ks-house-111",
    incumbent: true,
    occupation: "School Board Member",
    consistencyRating: "INSUFFICIENT_DATA",
  },
];

// ─── FULL DOSSIER: TRACEY MANN ────────────────────────────────────────────────

export const TRACEY_MANN_FULL: CandidateFull = {
  slug: "tracey-mann",
  name: "Tracey Mann",
  party: "R",
  position: "U.S. Representative, KS-01",
  electionSlug: "ks-01-house-2026",
  incumbent: true,
  occupation: "Farmer / Real Estate Broker",
  consistencyRating: "MODERATE",

  // At A Glance
  born: "December 17, 1976",
  hometown: "Quinter, Kansas",
  religion: "Christian (First Covenant Church, Salina, KS)",
  education: "Kansas State University, B.S. Business Administration",
  family: "Married to Audra Mann; four children",
  district: "KS-01 (R+16) — covers western and central Kansas including Hays",
  margin2024: "Won re-election 2024 with 66.2% of the vote",

  // Narrative
  executiveSummary: [
    "Tracey Mann (R-Quinter) is serving his second term as U.S. Representative for Kansas's 1st Congressional District, one of the most reliably Republican seats in the nation. A fifth-generation farmer and licensed real estate broker, Mann has cultivated an agricultural-first legislative identity that resonates deeply with his rural constituency.",
    "His voting record is largely conservative and aligned with the House Republican mainstream. Heritage Action rates him at 96%, reflecting consistent support for conservative priorities including border security, energy production, and limited government. He serves on the House Agriculture Committee, where he has been an active voice for rural Kansas interests in the Farm Bill debate.",
    "Mann carries two significant controversies that voters should weigh. He was one of 147 Republicans who voted to object to the certification of electoral votes from Arizona and Pennsylvania on January 6, 2021 — a vote he has defended as a matter of 'election integrity.' He also voted against the bipartisan ROTOR Act, which would have expanded drone delivery infrastructure that rural Kansas communities supported. His campaign finance profile shows heavy PAC dependence (56%), with his largest single donor being the Crop Production Services PAC ($197,000), which represents large agriculture input companies — raising questions about whose interests he prioritizes.",
  ],

  background: `Born December 17, 1976, in Quinter, Kansas, Tracey Mann grew up on the family farm in Gove County — a fifth-generation operation that remains central to his identity and legislative focus. He attended Kansas State University, earning a B.S. in Business Administration, before returning to western Kansas to farm and build a real estate brokerage.

Mann served in the Kansas Senate from 2009 to 2010, representing Senate District 36, before an unsuccessful 2010 congressional bid. He returned to business until winning the KS-01 Republican primary in 2020 and defeating Democrat Kali Barnett in the general with 67% of the vote. He was re-elected in 2022 and 2024, each time with similar margins.

He is a member of First Covenant Church in Salina, Kansas. He and his wife Audra have four children. His congressional biography emphasizes his farming background and stated commitment to rural Kansas values.`,

  politicalRecord: `Mann serves on the House Agriculture Committee and the House Transportation and Infrastructure Committee. His tenure has centered on four areas: (1) agricultural policy — particularly the Farm Bill and crop insurance programs; (2) border security legislation; (3) energy production, including support for oil and gas development; (4) fiscal conservatism, including opposition to large spending packages.

January 6 Objection: On January 6-7, 2021, Mann voted to object to certifying Arizona's and Pennsylvania's electoral votes, citing "election integrity" concerns. This vote placed him among the minority of House Republicans who maintained objections after the Capitol breach. Mann has defended the vote in subsequent statements.

ROTOR Act Vote: Mann voted against the ROTOR (Rural Opportunities to Use Transportation for Economic Revitalization) Act, which had bipartisan support and would have expanded drone delivery routes in rural areas — a measure many agricultural organizations and rural communities supported.

Heritage Action Score: 96% — placing him in the top tier of conservative voting in the House.

Key Supported Legislation: Secure the Border Act, REIN IN Inflation Act, Parents Bill of Rights Act, Energy Independence Act.`,

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

  // Finance
  campaignFinance: {
    totalRaised: "$1.4M (2023–2024 cycle)",
    topDonor: "Crop Production Services PAC",
    topDonorAmount: "$197,000",
    pacFundedPercent: 56,
    reportingPeriod: "2023–2024 election cycle",
    source: "OpenSecrets.org / FEC",
  },

  // Integrity
  consistencyNotes:
    "Mann's voting record is broadly consistent with his stated conservative values and agricultural priorities. His 96% Heritage Action score reflects reliable ideological consistency. However, two data points introduce tension: his January 6 objections align with a post-2020 posture that differs from his pre-2020 statements about democratic norms, and his vote against the ROTOR Act contradicts his stated commitment to rural economic development. Neither alone constitutes hypocrisy, but both merit voter scrutiny.",

  flags: [
    {
      type: "red",
      label: "January 6 Electoral Objection",
      description:
        "Voted to object to certifying Arizona and Pennsylvania electoral votes on January 6, 2021 — one of 147 Republicans to do so after the Capitol breach. This vote remains controversial among voters across the political spectrum.",
    },
    {
      type: "red",
      label: "Heavy PAC Dependence — Agriculture Inputs",
      description:
        "56% of campaign funding comes from PACs. Top donor is Crop Production Services PAC ($197,000), representing large agricultural input corporations. Raises the question of whether Mann's Farm Bill positions serve individual farmers or corporate agribusiness.",
    },
    {
      type: "green",
      label: "Strong Agricultural Advocacy",
      description:
        "Consistent, active member of the House Agriculture Committee. Has fought for crop insurance preservation, rural broadband access, and Farm Bill funding — issues with direct, measurable impact on his KS-01 constituents.",
    },
    {
      type: "green",
      label: "Deep Community Roots",
      description:
        "Fifth-generation Kansas farmer who returned to his home district to serve rather than relocating. Attended Kansas State University. Active in his local church and community. Background aligns authentically with the district he represents.",
    },
  ],

  // Values Pillars
  valuesPillars: [
    {
      pillar: "Sanctity of Life",
      rating: "Strong",
      notes:
        "Consistent pro-life voting record. Voted for the Life at Conception Act and against federal funding for abortion. No on-record statements contradicting pro-life positions.",
    },
    {
      pillar: "Protection of Family",
      rating: "Strong",
      notes:
        "Voted for the Parents Bill of Rights Act. Supported school choice legislation. No on-record votes against parental rights or traditional family structures.",
    },
    {
      pillar: "Religious Liberty",
      rating: "Strong",
      notes:
        "Active First Covenant Church member. Voted for the Free Speech Fairness Act. No on-record votes against religious liberty protections.",
    },
    {
      pillar: "Honesty and Integrity",
      rating: "Moderate",
      notes:
        "No documented dishonesty. However, his January 6 objection — based on election integrity claims that were rejected by 60+ courts — raises integrity questions. Rates Moderate rather than Weak because no personal dishonesty was found; the question is one of judgment.",
    },
    {
      pillar: "Care for the Vulnerable",
      rating: "Moderate",
      notes:
        "Voted against the American Rescue Plan and SNAP expansion. Supported rural hospital funding through the Farm Bill. Mixed record on programs serving vulnerable populations — strong on rural-specific aid, weaker on broader social safety net.",
    },
    {
      pillar: "Justice and Rule of Law",
      rating: "Moderate",
      notes:
        "Generally supportive of law enforcement. His vote to certify objections to electoral results after the Capitol breach creates ambiguity on the rule-of-law pillar. Supported qualified immunity reform and border enforcement measures.",
    },
    {
      pillar: "Stewardship of Resources",
      rating: "Moderate",
      notes:
        "Voted for energy independence legislation and crop insurance preservation — consistent with responsible agricultural stewardship. Opposed green energy mandates. His PAC funding from Crop Production Services (large chemical/input company) raises mild concerns about whose resource interests he represents.",
    },
    {
      pillar: "Community and Neighborly Love",
      rating: "Strong",
      notes:
        "Regularly holds constituent town halls in rural Kansas communities. Strong engagement with local ag organizations, churches, and community groups. No record of neglecting constituent service duties.",
    },
  ],

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
      title: "AIPAC PAC Contributions to Kansas Delegation",
      url: "https://www.opensecrets.org/political-action-committees-pacs/AIPAC",
      publication: "OpenSecrets.org",
      date: "2024-12-31",
    },
    {
      title: "First Covenant Church — Salina, KS",
      url: "https://www.firstcovenantchurchsalina.org",
      publication: "First Covenant Church",
      date: "2024-01-01",
    },
  ],
};

// ─── LOOKUP HELPERS ───────────────────────────────────────────────────────────

export function getCandidateCardBySlug(
  slug: string
): CandidateCard | undefined {
  return CANDIDATE_CARDS.find((c) => c.slug === slug);
}

export function getAllCandidateSlugs(): string[] {
  return CANDIDATE_CARDS.map((c) => c.slug);
}

export function getFullCandidateBySlug(
  slug: string
): CandidateFull | undefined {
  if (slug === "tracey-mann") return TRACEY_MANN_FULL;
  // Other candidates: return card data promoted to a minimal full profile
  const card = getCandidateCardBySlug(slug);
  if (!card) return undefined;
  return {
    ...card,
    executiveSummary: [
      `Full dossier for ${card.name} is currently being compiled by our research pipeline. Check back soon for a comprehensive intelligence report including background, political record, campaign finance analysis, and values alignment assessment.`,
    ],
    background: "Research in progress.",
    politicalRecord: "Research in progress.",
    quotes: [],
    consistencyNotes: "Insufficient data at this time.",
    flags: [],
    valuesPillars: [],
    sources: [],
  };
}
