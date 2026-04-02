import Container from "@/components/layout/container";
import ElectionCard from "@/components/ui/election-card";
import { ELECTIONS } from "@/data/elections";

// ── Category definitions in prescribed display order ──────────────────────────

interface ElectionCategory {
  id: string;
  heading: string;
  description: string;
  slugs: string[];
}

const ELECTION_CATEGORIES: ElectionCategory[] = [
  {
    id: "federal",
    heading: "Federal Elections",
    description:
      "The U.S. Senate and KS-01 races are the highest-profile contests for Hays-area voters in 2026.",
    slugs: ["us-senate-2026", "ks-01-house-2026"],
  },
  {
    id: "state",
    heading: "State Elections",
    description:
      "These statewide and legislative races decide who writes policy in Topeka and how Kansas government is run.",
    slugs: [
      "kansas-governor-2026",
      "kansas-ag-2026",
      "kansas-sos-2026",
      "kansas-insurance-2026",
      "ks-house-111",
      "sboe-district-5",
    ],
  },
  {
    id: "ballot-measures",
    heading: "Ballot Measures",
    description:
      "Statewide amendments can change the rules of the game for Kansas voters long after one election cycle ends.",
    slugs: ["supreme-court-amendment", "citizenship-amendment"],
  },
  {
    id: "local",
    heading: "Local Officials",
    description:
      "These pages group the current city, county, and school leaders whose decisions shape daily life in Hays — even when their seats are not all on this year's ballot.",
    slugs: ["hays-city-current", "ellis-county-current", "usd-489-current"],
  },
];

// ── Open-seat note map ─────────────────────────────────────────────────────────
const OPEN_SEAT_SLUGS = new Set([
  "kansas-governor-2026",
  "kansas-sos-2026",
  "kansas-insurance-2026",
]);

export default function ElectionsPage() {
  return (
    <main id="main-content">
      {/* ── Page Header ──────────────────────────────────────────────── */}
      <section
        className="section-navy"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
        aria-labelledby="elections-heading"
      >
        <Container>
          <div className="max-w-3xl">
            <p
              className="text-xs font-heading font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-teal)" }}
            >
              Hays, Kansas &middot; 2026 Cycle
            </p>
            <h1
              id="elections-heading"
              className="font-heading font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              2026 Elections
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(246,246,246,0.82)" }}
            >
              Every election relevant to Hays voters, organized the way most
              people think about them: federal first, then state, then ballot
              measures, then local officials.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Categorized Election Sections ────────────────────────────── */}
      <section className="section-light" aria-labelledby="elections-list-heading">
        <Container>
          <div className="max-w-3xl mb-10">
            <h2
              id="elections-list-heading"
              className="font-heading font-bold text-2xl mb-3"
              style={{ color: "var(--color-navy)" }}
            >
              Election Guide
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-slate)" }}
            >
              Each card links to a plain-English overview of the race, why it
              matters, and every candidate currently researched for that election.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {ELECTION_CATEGORIES.map((category) => {
              const elections = category.slugs
                .map((slug) => ELECTIONS.find((e) => e.slug === slug))
                .filter((e): e is NonNullable<typeof e> => e !== undefined);

              if (elections.length === 0) {
                return null;
              }

              return (
                <section key={category.id} id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-24">
                  {/* Category heading */}
                  <div className="flex flex-col gap-2 mb-6">
                    <h3
                      id={`${category.id}-heading`}
                      className="font-heading font-bold text-2xl"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {category.heading}
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-3xl"
                      style={{ color: "var(--color-slate)" }}
                    >
                      {category.description}
                    </p>
                  </div>

                  {/* Election cards */}
                  <ul
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                    aria-label={`${category.heading} election list`}
                  >
                    {elections.map((election) => (
                      <li key={election.slug}>
                        <ElectionCard
                          name={election.name}
                          date={election.date}
                          type={election.level}
                          candidateCount={election.candidateCount}
                          jurisdiction={election.jurisdiction}
                          slug={election.slug}
                          plainEnglish={election.plainEnglish}
                          openSeat={OPEN_SEAT_SLUGS.has(election.slug)}
                        />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
