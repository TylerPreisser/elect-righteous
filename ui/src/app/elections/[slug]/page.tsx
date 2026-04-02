import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, MapPin, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
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
            <div className="flex flex-col gap-4 max-w-3xl">
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
              </dl>

              {/* Plain English intro */}
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "rgba(246,246,246,0.85)",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                {election.plainEnglish}
              </p>
            </div>
          </Container>
        </section>

        {/* ── Why It Matters strip ─────────────────────────────────── */}
        <div
          style={{
            backgroundColor: "rgba(28, 195, 175, 0.08)",
            borderTop: "1px solid rgba(28, 195, 175, 0.2)",
            borderBottom: "1px solid rgba(28, 195, 175, 0.2)",
          }}
        >
          <Container>
            <div className="py-5 flex flex-col sm:flex-row gap-2 sm:items-start">
              <span
                className="text-xs font-heading font-bold uppercase tracking-widest shrink-0 pt-0.5"
                style={{ color: "var(--color-teal-dark)" }}
              >
                Why It Matters
              </span>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-charcoal)" }}
              >
                {election.whyItMatters}
              </p>
            </div>
          </Container>
        </div>

        {/* ── Main Content ─────────────────────────────────────────── */}
        <div className="section-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

              {/* Left: Candidates OR Ballot Measure */}
              <div className="lg:col-span-2 flex flex-col gap-10">

                {/* Candidates section */}
                {!isBallotMeasure && (
                  <section aria-labelledby="candidates-heading">
                    <h2
                      id="candidates-heading"
                      className="font-heading font-bold text-2xl mb-1"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {candidates.length > 0 ? `The Candidates (${candidates.length})` : "Candidates"}
                    </h2>
                    <p
                      className="text-sm mb-7"
                      style={{ color: "var(--color-slate)" }}
                    >
                      Click any name to read the full research dossier.
                    </p>

                    {candidates.length > 0 ? (
                      <ul className="flex flex-col gap-5" role="list">
                        {candidates.map((candidate) => {
                          const partyLabel =
                            candidate.party === "R"
                              ? "Republican"
                              : candidate.party === "D"
                              ? "Democrat"
                              : "Independent";

                          return (
                            <li key={candidate.slug}>
                              <Link
                                href={`/candidates/${candidate.slug}`}
                                className="group block rounded-lg border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                                style={{ borderColor: "#e2e8f0" }}
                                aria-label={`Read more about ${candidate.name}`}
                              >
                                <div className="p-6">
                                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                      {/* Party + status */}
                                      <p
                                        className="text-xs font-heading font-semibold tracking-widest uppercase mb-1.5"
                                        style={{ color: "var(--color-slate)" }}
                                      >
                                        {partyLabel}
                                        {candidate.incumbent && (
                                          <span
                                            className="ml-2"
                                            style={{ color: "var(--color-teal-dark)" }}
                                          >
                                            &middot; Currently in Office
                                          </span>
                                        )}
                                      </p>

                                      {/* Name */}
                                      <h3
                                        className="font-heading font-bold text-xl leading-snug mb-1 transition-colors duration-200 group-hover:text-teal"
                                        style={{ color: "var(--color-navy)" }}
                                      >
                                        {candidate.name}
                                      </h3>

                                      {/* Occupation */}
                                      <p
                                        className="text-sm"
                                        style={{ color: "var(--color-slate)" }}
                                      >
                                        {candidate.occupation}
                                      </p>
                                    </div>

                                    {/* Arrow CTA */}
                                    <div
                                      className="flex items-center gap-1.5 text-sm font-semibold font-heading shrink-0 transition-colors duration-200 group-hover:text-teal"
                                      style={{ color: "var(--color-teal-dark)" }}
                                      aria-hidden="true"
                                    >
                                      Read Dossier
                                      <ArrowRight
                                        size={15}
                                        className="transition-transform duration-200 group-hover:translate-x-1"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
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

                {/* Ballot measure editorial */}
                {isBallotMeasure && (
                  <section aria-labelledby="measure-detail-heading">
                    <h2
                      id="measure-detail-heading"
                      className="font-heading font-bold text-2xl mb-6"
                      style={{ color: "var(--color-navy)" }}
                    >
                      What This Measure Does
                    </h2>

                    {/* Editorial article layout */}
                    <div
                      className="prose prose-slate max-w-none"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {/* Lead paragraph — plain English in larger serif */}
                      <p
                        className="text-lg leading-relaxed mb-6"
                        style={{
                          color: "var(--color-charcoal)",
                          fontFamily: "var(--font-serif)",
                          borderLeft: "3px solid var(--color-teal)",
                          paddingLeft: "1.25rem",
                        }}
                      >
                        {election.plainEnglish}
                      </p>

                      {/* Why it matters — editorial */}
                      <h3
                        className="font-heading font-bold text-lg mb-3 mt-8"
                        style={{ color: "var(--color-navy)" }}
                      >
                        Why It Matters
                      </h3>
                      <p
                        className="text-base leading-relaxed mb-6"
                        style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-body)" }}
                      >
                        {election.whyItMatters}
                      </p>

                      {/* Research in progress note */}
                      <div
                        className="rounded-lg p-5 mt-6"
                        style={{
                          backgroundColor: "var(--color-light)",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--color-slate)" }}
                        >
                          Our full analysis — including the exact ballot language, fiscal note, legislative history, and a breakdown of who&rsquo;s funding the Yes and No campaigns — is currently being compiled. Check back as the election approaches.
                        </p>
                        <a
                          href={`https://ballotpedia.org/wiki/index.php?search=${encodeURIComponent(election.name + " Kansas 2026")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold font-heading transition-colors duration-200 hover:opacity-80"
                          style={{ color: "var(--color-teal)" }}
                        >
                          View current status on Ballotpedia
                          <ExternalLink size={13} aria-hidden="true" />
                        </a>
                      </div>
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
                        {formatDateShort(election.date)}
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
                        7:00 AM &ndash; 7:00 PM (Kansas)
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
                        Available at county clerk&rsquo;s office
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
                    href="https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx"
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

    </>
  );
}
