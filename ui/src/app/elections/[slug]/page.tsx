import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, MapPin, Users, ChevronRight, ExternalLink } from "lucide-react";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import Container from "@/components/layout/container";
import Badge from "@/components/ui/badge";
import { ELECTIONS, getAllElectionSlugs, getElectionBySlug } from "@/data/elections";
import { CANDIDATE_CARDS } from "@/data/candidates";

// ── Static export: pre-render all election slugs ──────────────────────────────
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
    }).format(new Date(dateStr + "T12:00:00")); // noon UTC avoids timezone edge cases
  } catch {
    return dateStr;
  }
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

  const candidates = CANDIDATE_CARDS.filter((c) =>
    election.candidateSlugs.includes(c.slug)
  );

  const isBallotMeasure = election.level === "Ballot Measure";

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        {/* ── Breadcrumb ──────────────────────────────────────────── */}
        <div
          className="border-b"
          style={{
            backgroundColor: "var(--color-light)",
            borderColor: "#e2e8f0",
          }}
        >
          <Container>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 py-3 text-sm font-body"
              style={{ color: "var(--color-slate)" }}
            >
              <Link
                href="/"
                className="hover:underline transition-colors duration-200"
                style={{ color: "var(--color-teal-dark)" }}
              >
                Home
              </Link>
              <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
              <Link
                href="/elections"
                className="hover:underline transition-colors duration-200"
                style={{ color: "var(--color-teal-dark)" }}
              >
                Elections
              </Link>
              <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
              <span aria-current="page" style={{ color: "var(--color-charcoal)" }}>
                {election.name}
              </span>
            </nav>
          </Container>
        </div>

        {/* ── Header ──────────────────────────────────────────────── */}
        <section
          className="section-navy"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          aria-labelledby="election-heading"
        >
          <Container>
            <div className="flex flex-col gap-4">
              {/* Level badge */}
              <div>
                <Badge variant="type">{election.level}</Badge>
              </div>

              <h1
                id="election-heading"
                className="font-heading font-bold text-white leading-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                {election.name}
              </h1>

              {/* Meta row */}
              <dl className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(246,246,246,0.80)" }}>
                  <Calendar size={15} style={{ color: "var(--color-teal)" }} aria-hidden="true" />
                  <dt className="sr-only">Election date</dt>
                  <dd>{formatDate(election.date)}</dd>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(246,246,246,0.80)" }}>
                  <MapPin size={15} style={{ color: "var(--color-teal)" }} aria-hidden="true" />
                  <dt className="sr-only">Jurisdiction</dt>
                  <dd>{election.jurisdiction}</dd>
                </div>
                {!isBallotMeasure && (
                  <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(246,246,246,0.80)" }}>
                    <Users size={15} style={{ color: "var(--color-teal)" }} aria-hidden="true" />
                    <dt className="sr-only">Seats</dt>
                    <dd>{election.seats} seat{election.seats !== 1 ? "s" : ""}</dd>
                  </div>
                )}
              </dl>

              {/* Description */}
              <p
                className="text-base leading-relaxed max-w-2xl"
                style={{ color: "rgba(246,246,246,0.75)" }}
              >
                {election.description}
              </p>
            </div>
          </Container>
        </section>

        {/* ── Main Content ─────────────────────────────────────────── */}
        <div className="section-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

              {/* Left: Candidate Comparison OR Ballot Measure Info */}
              <div className="lg:col-span-2 flex flex-col gap-10">

                {/* Candidates section */}
                {!isBallotMeasure && (
                  <section aria-labelledby="candidates-heading">
                    <h2
                      id="candidates-heading"
                      className="font-heading font-bold text-2xl mb-6"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {candidates.length > 0 ? "Candidates" : "Candidates"}
                    </h2>

                    {candidates.length > 0 ? (
                      <>
                        {/* Comparison table */}
                        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "#e2e8f0" }}>
                          <table className="w-full text-sm" aria-label="Candidate comparison">
                            <thead>
                              <tr style={{ backgroundColor: "var(--color-light)" }}>
                                <th
                                  scope="col"
                                  className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest"
                                  style={{ color: "var(--color-navy)" }}
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest"
                                  style={{ color: "var(--color-navy)" }}
                                >
                                  Party
                                </th>
                                <th
                                  scope="col"
                                  className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest"
                                  style={{ color: "var(--color-navy)" }}
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest"
                                  style={{ color: "var(--color-navy)" }}
                                >
                                  Dossier
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {candidates.map((candidate, idx) => (
                                <tr
                                  key={candidate.slug}
                                  className="border-t transition-colors duration-150 hover:bg-light"
                                  style={{ borderColor: "#f1f5f9" }}
                                >
                                  <td className="px-5 py-4">
                                    <span className="font-heading font-bold" style={{ color: "var(--color-navy)" }}>
                                      {candidate.name}
                                    </span>
                                  </td>
                                  <td className="px-5 py-4">
                                    <Badge variant="party">{candidate.party === "R" ? "Republican" : candidate.party === "D" ? "Democrat" : "Independent"}</Badge>
                                  </td>
                                  <td className="px-5 py-4">
                                    <Badge variant="status">
                                      {candidate.incumbent ? "Incumbent" : "Challenger"}
                                    </Badge>
                                  </td>
                                  <td className="px-5 py-4">
                                    <Link
                                      href={`/candidates/${candidate.slug}`}
                                      className="inline-flex items-center gap-1.5 text-sm font-semibold font-heading transition-colors duration-200"
                                      style={{ color: "var(--color-teal)" }}
                                      aria-label={`View dossier for ${candidate.name}`}
                                    >
                                      View Dossier
                                      <ChevronRight size={14} aria-hidden="true" />
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Individual candidate cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                          {candidates.map((candidate) => (
                            <Link
                              key={candidate.slug}
                              href={`/candidates/${candidate.slug}`}
                              className="card group p-5 flex flex-col gap-3 no-underline"
                              aria-label={`Full dossier: ${candidate.name}`}
                            >
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="party">{candidate.party === "R" ? "Republican" : candidate.party === "D" ? "Democrat" : "Independent"}</Badge>
                                <Badge variant="status">{candidate.incumbent ? "Incumbent" : "Challenger"}</Badge>
                              </div>
                              <h3
                                className="font-heading font-bold text-lg leading-snug group-hover:text-teal transition-colors duration-200"
                                style={{ color: "var(--color-navy)" }}
                              >
                                {candidate.name}
                              </h3>
                              <p className="text-sm" style={{ color: "var(--color-slate)" }}>
                                {candidate.occupation}
                              </p>
                              <span
                                className="text-sm font-semibold font-heading mt-auto"
                                style={{ color: "var(--color-teal)" }}
                              >
                                Read Full Dossier &rarr;
                              </span>
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div
                        className="rounded-lg border-2 border-dashed p-10 text-center"
                        style={{ borderColor: "#e2e8f0" }}
                      >
                        <p
                          className="font-heading font-bold mb-2"
                          style={{ color: "var(--color-navy)" }}
                        >
                          No candidates filed yet
                        </p>
                        <p className="text-sm" style={{ color: "var(--color-slate)" }}>
                          Candidate profiles will appear here as filing deadlines approach.
                        </p>
                      </div>
                    )}
                  </section>
                )}

                {/* Ballot measure detail */}
                {isBallotMeasure && (
                  <section aria-labelledby="measure-detail-heading">
                    <h2
                      id="measure-detail-heading"
                      className="font-heading font-bold text-2xl mb-6"
                      style={{ color: "var(--color-navy)" }}
                    >
                      About This Measure
                    </h2>
                    <div
                      className="rounded-lg border p-6"
                      style={{ borderColor: "#e2e8f0" }}
                    >
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        {election.description}
                      </p>
                      <p
                        className="text-sm mt-4 leading-relaxed"
                        style={{ color: "var(--color-slate)" }}
                      >
                        Full analysis of the ballot measure language, fiscal notes, and
                        potential impact will be added as we complete our research. Check
                        Ballotpedia for current status.
                      </p>
                      <a
                        href={`https://ballotpedia.org/Kansas_${encodeURIComponent(election.name.replace(/ /g, "_"))},_2026`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold font-heading transition-colors duration-200"
                        style={{ color: "var(--color-teal)" }}
                      >
                        View on Ballotpedia
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </div>
                  </section>
                )}
              </div>

              {/* Right: How to Vote sidebar */}
              <aside
                className="flex flex-col gap-6"
                aria-label="Voting information"
              >
                {/* How to Vote card */}
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <h2
                    className="font-heading font-bold text-lg mb-5"
                    style={{ color: "var(--color-navy)" }}
                  >
                    How to Vote
                  </h2>

                  <dl className="flex flex-col gap-5 text-sm">
                    <div>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-1"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        Election Date
                      </dt>
                      <dd style={{ color: "var(--color-charcoal)" }}>
                        {formatDate(election.date)}
                      </dd>
                    </div>

                    <div>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-1"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        Registration Deadline
                      </dt>
                      <dd style={{ color: "var(--color-charcoal)" }}>
                        21 days before election day
                        <span className="block text-xs mt-0.5" style={{ color: "var(--color-slate)" }}>
                          Verify exact date at sos.ks.gov
                        </span>
                      </dd>
                    </div>

                    <div>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-1"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        Polling Hours
                      </dt>
                      <dd style={{ color: "var(--color-charcoal)" }}>
                        7:00 AM – 7:00 PM (Kansas)
                      </dd>
                    </div>

                    <div>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-1"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        Ellis County Clerk
                      </dt>
                      <dd>
                        <a
                          href="https://www.ellisco.net/clerk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition-colors duration-200"
                          style={{ color: "var(--color-teal)" }}
                        >
                          ellisco.net/clerk
                          <ExternalLink size={11} aria-hidden="true" />
                        </a>
                      </dd>
                    </div>

                    <div>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-1"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        Advance Voting
                      </dt>
                      <dd style={{ color: "var(--color-charcoal)" }}>
                        Available at county clerk's office
                        <span className="block text-xs mt-0.5" style={{ color: "var(--color-slate)" }}>
                          Begins 20 days before election
                        </span>
                      </dd>
                    </div>

                    <div>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-1"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        Mail Ballot
                      </dt>
                      <dd style={{ color: "var(--color-charcoal)" }}>
                        Request by mail-in deadline
                        <span className="block text-xs mt-0.5" style={{ color: "var(--color-slate)" }}>
                          Must be received by election day
                        </span>
                      </dd>
                    </div>
                  </dl>

                  <a
                    href="https://sos.ks.gov/elections/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center mt-6 block text-sm"
                    aria-label="Register to vote at Kansas Secretary of State website"
                  >
                    Register to Vote
                  </a>
                </div>

                {/* Other elections in this cycle */}
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <h3
                    className="font-heading font-bold text-sm uppercase tracking-widest mb-4"
                    style={{ color: "var(--color-navy)" }}
                  >
                    Other 2026 Elections
                  </h3>
                  <ul className="flex flex-col gap-2" role="list">
                    {ELECTIONS.filter((e) => e.slug !== election.slug)
                      .slice(0, 5)
                      .map((e) => (
                        <li key={e.slug}>
                          <Link
                            href={`/elections/${e.slug}`}
                            className="flex items-center justify-between gap-2 text-sm py-1.5 transition-colors duration-200 group"
                            style={{ color: "var(--color-charcoal)" }}
                          >
                            <span className="group-hover:underline">{e.name}</span>
                            <ChevronRight
                              size={14}
                              className="shrink-0 opacity-40"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    <li className="mt-1 pt-2 border-t" style={{ borderColor: "#f1f5f9" }}>
                      <Link
                        href="/elections"
                        className="text-sm font-semibold font-heading transition-colors duration-200"
                        style={{ color: "var(--color-teal)" }}
                      >
                        View all elections &rarr;
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </Container>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
