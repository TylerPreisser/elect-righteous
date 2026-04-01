export type ElectionLevel = "Federal" | "State" | "Local" | "Ballot Measure";

export interface Election {
  slug: string;
  name: string;
  level: ElectionLevel;
  date: string; // ISO format YYYY-MM-DD
  jurisdiction: string;
  seats: number;
  status: "Open Seat" | "Incumbent Running" | "N/A";
  candidateCount: number;
  candidateSlugs: string[];
  description: string;
  plainEnglish: string;
  whyItMatters: string;
}

export const ELECTIONS: Election[] = [
  {
    slug: "kansas-governor-2026",
    name: "Kansas Governor",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 4,
    candidateSlugs: [
      "scott-schwab",
      "vicki-schmidt",
      "ty-masterson",
      "jeff-colyer",
    ],
    description:
      "The race to succeed term-limited Governor Laura Kelly. Four Republican candidates are competing in the primary for this open seat.",
    plainEnglish:
      "Governor Laura Kelly is term-limited and cannot run again, so this seat is wide open. Four Republicans are competing in the primary — the winner will almost certainly become the next governor of Kansas. The governor sets the state budget, appoints judges, and can veto legislation.",
    whyItMatters:
      "Whoever wins this race will have more influence over Kansas than almost any other elected official — signing or vetoing every bill that comes out of the legislature, appointing judges, and directing state agencies that touch education, roads, and public health.",
  },
  {
    slug: "us-senate-2026",
    name: "U.S. Senate",
    level: "Federal",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 1,
    candidateSlugs: ["roger-marshall"],
    description:
      "U.S. Senator Roger Marshall seeks re-election to his Senate seat representing all Kansans.",
    plainEnglish:
      "Senator Roger Marshall, a physician from Great Bend, is seeking a second six-year term in the U.S. Senate. He was elected in 2020, previously serving as the KS-01 Congressman. He sits on the Senate Agriculture and Health committees.",
    whyItMatters:
      "U.S. Senators serve six-year terms and vote on every major federal issue — from Supreme Court nominees to the federal budget. Kansas has only two senators, so this vote carries significant weight in Washington.",
  },
  {
    slug: "ks-01-house-2026",
    name: "KS-01 U.S. House",
    level: "Federal",
    date: "2026-11-03",
    jurisdiction: "Kansas 1st Congressional District",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 1,
    candidateSlugs: ["tracey-mann"],
    description:
      "Congressman Tracey Mann seeks his third term representing Kansas's 1st Congressional District, which includes Hays.",
    plainEnglish:
      "Tracey Mann, a fifth-generation farmer from Quinter, is running for his third term in Congress representing the Big First — the massive western Kansas district that includes Hays, Dodge City, and Salina. He sits on the Agriculture and Transportation committees.",
    whyItMatters:
      "The KS-01 district covers most of the western half of Kansas, making its congressman the primary voice in Washington for rural Kansas agriculture, water rights, and rural infrastructure. If you live in Hays, this is your representative.",
  },
  {
    slug: "kansas-ag-2026",
    name: "Kansas Attorney General",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 1,
    candidateSlugs: ["kris-kobach"],
    description:
      "Attorney General Kris Kobach seeks re-election after winning his AG race in 2022.",
    plainEnglish:
      "Kris Kobach is the state's top law enforcement officer and chief legal counsel. He decides which cases to prosecute, which federal laws to challenge, and how the state's legal resources are deployed. He was elected in 2022 after previously serving as Kansas Secretary of State.",
    whyItMatters:
      "The Attorney General enforces state laws, protects consumers, and can file lawsuits on behalf of Kansas against the federal government or corporations. The AG's decisions on which cases to pursue directly affect Kansans' daily lives.",
  },
  {
    slug: "kansas-sos-2026",
    name: "Kansas Secretary of State",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "An open-seat race for Kansas Secretary of State. No candidates have formally announced as of this writing.",
    plainEnglish:
      "The Secretary of State oversees Kansas elections — managing voter registration, certifying results, and administering the voting process statewide. Scott Schwab currently holds this office but is vacating it to run for governor, leaving this seat open.",
    whyItMatters:
      "The Secretary of State is the official in charge of how elections are run in Kansas. Who holds this office directly shapes voter registration rules, ballot access, and the overall integrity of the election process.",
  },
  {
    slug: "kansas-insurance-2026",
    name: "Kansas Insurance Commissioner",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "An open-seat race for the elected Kansas Insurance Commissioner position.",
    plainEnglish:
      "The Insurance Commissioner regulates insurance companies doing business in Kansas — approving rate increases, investigating complaints, and ensuring companies pay claims. Vicki Schmidt currently holds this office and is vacating it to run for governor.",
    whyItMatters:
      "Health insurance premiums, auto insurance rates, and homeowners coverage are all subject to review by this office. The Commissioner's decisions affect what Kansans pay for insurance and whether their claims get paid.",
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
      "State Representative Barb Wasinger seeks re-election in House District 111, covering parts of Ellis County.",
    plainEnglish:
      "Barb Wasinger is seeking re-election to the Kansas House in District 111, which covers parts of Ellis County including portions of Hays. State representatives vote on the state budget, education funding, and local issues that directly affect your community.",
    whyItMatters:
      "Your state representative is the closest elected official to home — voting on school funding, road budgets, and the laws that govern everyday life in Kansas. This is one of the most local and direct votes on your ballot.",
  },
  {
    slug: "sboe-district-5",
    name: "SBOE District 5",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "Kansas State Board of Education District 5",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "The Kansas State Board of Education seat for District 5, which includes Ellis County.",
    plainEnglish:
      "The State Board of Education sets curriculum standards, oversees testing, and makes policy decisions affecting every public school in Kansas. District 5 covers a large swath of central and western Kansas including Ellis County.",
    whyItMatters:
      "The State Board of Education determines what Kansas children are taught — from reading standards to science curriculum to sex education policy. This board also controls the accreditation of Kansas schools and teacher licensing requirements.",
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
      "A proposed constitutional amendment regarding the structure and appointment process for the Kansas Supreme Court. Appears on the August primary ballot.",
    plainEnglish:
      "Right now, Kansas Supreme Court justices are selected by a nonpartisan commission of lawyers and citizens, then confirmed by a retention vote. This amendment would change that process — likely moving toward direct gubernatorial appointment or partisan elections. The exact language changes how much political control the governor and legislature have over who sits on the state's highest court.",
    whyItMatters:
      "The Kansas Supreme Court is the final word on Kansas law — including abortion access, school funding, and constitutional rights. How justices are selected determines whether the court is insulated from political pressure or subject to it. This amendment would make a permanent change to that balance.",
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
      "A proposed constitutional amendment clarifying that only U.S. citizens may vote in Kansas elections.",
    plainEnglish:
      "This amendment would add language to the Kansas Constitution explicitly stating that only U.S. citizens may vote in Kansas elections. Non-citizen voting in state elections is already illegal under current Kansas and federal law. Supporters say this adds permanent constitutional protection; opponents say it addresses a problem that doesn't exist and could complicate voter verification processes.",
    whyItMatters:
      "While the practical impact may be limited — since non-citizen voting is already prohibited — this vote is fundamentally about what belongs in Kansas's constitution. A yes vote adds explicit citizenship language; a no vote leaves existing law in place without constitutional amendment.",
  },
  {
    slug: "judicial-retention-2026",
    name: "Judicial Retention",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 0,
    status: "N/A",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "Kansans will vote yes or no on retaining several Kansas Court of Appeals judges under the merit selection system.",
    plainEnglish:
      "Under Kansas's merit selection system, judges are appointed by the governor but must periodically face a retention vote — voters simply say yes or no, they are not choosing between competing candidates. In 2026, several Court of Appeals judges are on the retention ballot.",
    whyItMatters:
      "Judicial retention votes are how Kansans hold appointed judges accountable without making judicial seats partisan contests. A no vote removes a judge from the bench; a yes vote keeps them for another term. These judges hear thousands of appeals each year on criminal, civil, and family law cases.",
  },
];

export function getElectionBySlug(slug: string): Election | undefined {
  return ELECTIONS.find((e) => e.slug === slug);
}

export function getAllElectionSlugs(): string[] {
  return ELECTIONS.map((e) => e.slug);
}
