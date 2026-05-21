import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, ExternalLink, MapPin, Users } from "lucide-react";
import Container from "@/components/layout/container";
import Badge from "@/components/ui/badge";
import CandidateCard from "@/components/ui/candidate-card";
import { ELECTIONS, getAllElectionSlugs, getElectionBySlug } from "@/data/elections";
import { V2_CANDIDATES } from "@/data/v2";
import { getProfileMetrics } from "@/lib/profile-metrics";

export function generateStaticParams() {
  return getAllElectionSlugs().map((slug) => ({ slug }));
}

function formatDate(dateStr: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateStr + "T12:00:00"));
  } catch {
    return dateStr;
  }
}

function formatDateShort(dateStr: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateStr + "T12:00:00"));
  } catch {
    return dateStr;
  }
}

function getCollectionCopy(slug: string, candidateCount: number) {
  if (slug === "hays-city-current") {
    return {
      heading: "Current City Officials and Administration",
      description:
        "These are current Hays city leaders, not 2026 ballot candidates. Elected commissioners and the appointed city manager are labeled separately.",
    };
  }

  if (slug === "usd-489-current") {
    return {
      heading: "Current School Board and Administration",
      description:
        "These are current USD 489 school leaders, not a 2026 candidate field. Board members are elected officials; the superintendent is an appointed administrator.",
    };
  }

  if (slug === "ellis-county-incumbents-off-cycle") {
    return {
      heading: "Current County Officials Not on the 2026 Ballot",
      description:
        "These profiles cover current Ellis County officials whose seats are not shown on the current 2026 filing list.",
    };
  }

  if (slug === "ellis-county-2026-ballot") {
    return {
      heading: candidateCount === 1 ? "The 2026 Candidate" : "The 2026 Candidates",
      description:
        "This list follows the current official Ellis County 2026 candidate filing PDF and should be rechecked after the filing deadline.",
    };
  }

  return {
    heading: candidateCount === 1 ? "The Candidate" : "The Candidates",
    description: "Open any profile for the sourced background, issue matrix, actions, online observations, and source trail.",
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ElectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const election = getElectionBySlug(slug);

  if (!election) {
    notFound();
  }

  const candidates = V2_CANDIDATES.filter((c) => election.candidateSlugs.includes(c.slug));
  const isBallotMeasure = election.level === "Ballot Measure";
  const collectionCopy = getCollectionCopy(election.slug, candidates.length);
  const otherElections = ELECTIONS.filter((e) => e.slug !== election.slug).slice(0, 6);

  return (
    <main id="main-content" className="er-shell min-h-screen">
      <div className="er-grid-bg" aria-hidden="true" />
      <div className="er-scanline" aria-hidden="true" />

      <div className="relative z-10 border-b border-white/10">
        <Container>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 py-3 text-sm text-white/56">
            <Link href="/" className="text-teal hover:underline">
              Home
            </Link>
            <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
            <Link href="/elections" className="text-teal hover:underline">
              Elections
            </Link>
            <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
            <span aria-current="page" className="text-white/72">
              {election.name}
            </span>
          </nav>
        </Container>
      </div>

      <section className="relative z-10 py-12 md:py-16" aria-labelledby="election-heading">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
            <div className="max-w-4xl">
              <Badge variant="type">{election.level}</Badge>
              <h1
                id="election-heading"
                className="mt-5 font-heading text-4xl font-extrabold leading-[1.04] text-white md:text-5xl"
              >
                {election.name}
              </h1>
              <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-sm text-white/72">
                  <Calendar size={15} className="text-teal" aria-hidden="true" />
                  <dt className="sr-only">Election date</dt>
                  <dd>{formatDate(election.date)}</dd>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/72">
                  <MapPin size={15} className="text-teal" aria-hidden="true" />
                  <dt className="sr-only">Jurisdiction</dt>
                  <dd>{election.jurisdiction}</dd>
                </div>
              </dl>
              <p className="mt-5 max-w-3xl font-serif text-lg leading-relaxed text-white/76">
                {election.plainEnglish}
              </p>
            </div>

            <aside className="er-panel rounded-lg p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/48">Race snapshot</p>
              <dl className="mt-4 grid gap-3">
                {[
                  ["Profiles", candidates.length || election.candidateCount],
                  ["Level", election.level],
                  ["Date", formatDateShort(election.date)],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 rounded border border-white/10 bg-white/[0.045] px-3 py-2.5">
                    <dt className="text-xs uppercase tracking-wide text-white/50">{label}</dt>
                    <dd className="text-right font-heading text-lg font-bold text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section className="relative z-10 border-y border-teal/20 bg-teal/[0.055] py-5" aria-label="Why this election matters">
        <Container>
          <div className="grid gap-2 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-teal">Why it matters</p>
            <p className="text-sm leading-relaxed text-white/72">{election.whyItMatters}</p>
          </div>
        </Container>
      </section>

      <section className="relative z-10 py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="grid gap-10">
              {election.jobDescription && (
                <section className="er-panel rounded-lg p-6" aria-labelledby="job-heading">
                  <p className="er-kicker mb-3">{isBallotMeasure ? "Ballot language" : "Office context"}</p>
                  <h2 id="job-heading" className="font-heading text-2xl font-bold text-white">
                    {isBallotMeasure ? "What am I voting on?" : "What does this job actually do?"}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/72">{election.jobDescription}</p>
                </section>
              )}

              {!isBallotMeasure && (
                <section aria-labelledby="candidates-heading">
                  <div className="mb-6">
                    <p className="er-kicker mb-3">Profiles</p>
                    <h2 id="candidates-heading" className="font-heading text-2xl font-bold text-white">
                      {candidates.length > 0 ? `${collectionCopy.heading} (${candidates.length})` : collectionCopy.heading}
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/62">{collectionCopy.description}</p>
                  </div>

                  {candidates.length > 0 ? (
                    <ul className="grid gap-4 sm:grid-cols-2" role="list">
                      {candidates.map((candidate) => {
                        const metrics = getProfileMetrics(candidate);
                        return (
                          <li key={candidate.slug}>
                            <CandidateCard
                              name={candidate.name}
                              position={candidate.position}
                              party={candidate.party}
                              incumbent={candidate.incumbent}
                              occupation={candidate.occupation}
                              slug={candidate.slug}
                              sourceCount={metrics.sourceCount}
                              issueCount={metrics.issueCount}
                              actionCount={metrics.actionCount}
                              socialCount={metrics.socialCount}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <div className="rounded-lg border border-dashed border-white/18 p-10 text-center">
                      <p className="font-heading text-lg font-bold text-white">No candidates filed yet</p>
                      <p className="mt-2 text-sm text-white/60">Candidate profiles will appear here as filing deadlines approach.</p>
                    </div>
                  )}
                </section>
              )}

              {isBallotMeasure && (
                <section className="er-panel rounded-lg p-6" aria-labelledby="measure-detail-heading">
                  <p className="er-kicker mb-3">Measure brief</p>
                  <h2 id="measure-detail-heading" className="font-heading text-2xl font-bold text-white">
                    What this measure does
                  </h2>
                  <div className="mt-5 grid gap-6 text-base leading-relaxed text-white/72">
                    <p className="border-l-2 border-teal pl-5 font-serif text-lg text-white/80">{election.plainEnglish}</p>
                    <p>{election.whyItMatters}</p>
                    <p>
                      This is not a candidate race. It is a direct vote on Kansas law or the state constitution.
                      If it passes, the change remains in force until another lawful process changes it.
                    </p>
                  </div>
                </section>
              )}
            </div>

            <aside className="grid h-fit gap-5" aria-label="Voting information">
              <div className="er-panel rounded-lg p-5">
                <h2 className="font-heading text-lg font-bold text-white">How to Vote</h2>
                <dl className="mt-5 grid gap-5 text-sm">
                  {[
                    ["Election Date", formatDateShort(election.date), ""],
                    ["Candidate Filing", "June 1, 2026 at noon", "Independent nominations: August 3, 2026 at noon."],
                    ["Registration Deadline", "21 days before election day", "Verify exact date at sos.ks.gov."],
                    ["Polling Hours", "7:00 AM - 7:00 PM", "Kansas polling hours."],
                    ["Advance Voting", "Available at the county clerk's office", "Begins 20 days before election."],
                  ].map(([label, value, note]) => (
                    <div key={label}>
                      <dt className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-teal">{label}</dt>
                      <dd className="mt-1 text-white/74">
                        {value}
                        {note && <span className="mt-1 block text-xs text-white/48">{note}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 grid gap-2">
                  <a
                    href="https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-teal px-4 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-teal-dark"
                  >
                    Register to vote
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://www.sos.ks.gov/elections/candidate-information.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/12 px-4 font-heading text-xs font-bold uppercase tracking-wide text-white/70 transition hover:border-teal/60 hover:text-white"
                  >
                    Kansas filing info
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="er-card rounded-lg p-5">
                <h3 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.16em] text-white">
                  <Users size={16} className="text-teal" />
                  Other 2026 Elections
                </h3>
                <ul className="mt-4 grid gap-2" role="list">
                  {otherElections.map((e) => (
                    <li key={e.slug}>
                      <Link
                        href={`/elections/${e.slug}`}
                        className="group flex items-center justify-between gap-2 rounded px-2 py-2 text-sm text-white/68 transition hover:bg-white/[0.08] hover:text-white"
                      >
                        <span>{e.name}</span>
                        <ChevronRight size={14} className="shrink-0 opacity-45 transition group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/elections" className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-bold text-teal">
                  View all elections
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
