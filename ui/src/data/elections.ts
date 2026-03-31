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
  },
];

export function getElectionBySlug(slug: string): Election | undefined {
  return ELECTIONS.find((e) => e.slug === slug);
}

export function getAllElectionSlugs(): string[] {
  return ELECTIONS.map((e) => e.slug);
}
