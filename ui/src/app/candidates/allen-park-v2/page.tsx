/**
 * Allen Park v2 — server-rendered candidate page.
 *
 * Route: /candidates/allen-park-v2
 *
 * Legacy direct route for the sourced Allen Park profile.
 *
 * Page sections:
 *   1. Candidate header (name, party, position, election, occupation)
 *   2. Issues list — each IssueCard via IssueCardComponent
 *   3. Sources appendix — ClaimAnchoredSourcePanel (all sources, tier-sorted)
 *   4. Methodology footer
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ALLEN_PARK_V2 } from "@/data/v2/allen-park";
import IssueCardComponent from "@/components/v2/IssueCardComponent";
import ClaimAnchoredSourcePanel from "@/components/v2/ClaimAnchoredSourcePanel";
import { normalizePublicCopy } from "@/lib/public-copy";

export const metadata: Metadata = {
  title: "Allen Park — USD 489 School Board Member",
  description:
    "Allen Park is a USD 489 school board member and retired district principal. Every claim includes linked sources.",
};

const PARTY_LABEL: Record<string, string> = {
  R: "Republican",
  D: "Democrat",
  I: "Independent",
  NP: "Nonpartisan",
};

export default function AllenParkV2Page() {
  const candidate = ALLEN_PARK_V2;
  const partyLabel = PARTY_LABEL[candidate.party] ?? candidate.party;

  return (
    <main id="main-content">
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div
        className="py-10 md:py-14"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <div className="container-main">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-sm font-body"
            style={{ color: "rgba(246,246,246,0.65)" }}
          >
            <Link
              href="/candidates"
              className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
              style={{ color: "rgba(246,246,246,0.65)" }}
            >
              Candidates
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "white" }}>Allen Park</span>
            <span
              className="ml-2 rounded px-2 py-0.5 text-xs font-heading font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(28,195,175,0.25)", color: "var(--color-teal)" }}
              title="Sourced profile"
            >
              sourced profile
            </span>
          </nav>

          {/* Name + meta */}
          <h1
            className="font-heading font-bold"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", color: "white", lineHeight: 1.15 }}
          >
            {candidate.name}
          </h1>

          <div
            className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-base"
            style={{ color: "rgba(246,246,246,0.80)" }}
          >
            <span>{partyLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{candidate.position}</span>
            <span aria-hidden="true">·</span>
            <span>{candidate.occupation}</span>
          </div>

          {/* At-a-glance */}
          {(candidate.hometown || candidate.education || candidate.family) && (
            <dl
              className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 font-body text-sm"
              style={{ color: "rgba(246,246,246,0.70)" }}
            >
              {candidate.hometown && (
                <div>
                  <dt className="font-semibold" style={{ color: "rgba(246,246,246,0.50)" }}>
                    Hometown
                  </dt>
                  <dd>{candidate.hometown}</dd>
                </div>
              )}
              {candidate.education && (
                <div>
                  <dt className="font-semibold" style={{ color: "rgba(246,246,246,0.50)" }}>
                    Education
                  </dt>
                  <dd>{candidate.education}</dd>
                </div>
              )}
              {candidate.family && (
                <div>
                  <dt className="font-semibold" style={{ color: "rgba(246,246,246,0.50)" }}>
                    Family
                  </dt>
                  <dd>{candidate.family}</dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </div>

      {/* ── Page body ─────────────────────────────────────────────────────── */}
      <div className="container-main py-10 md:py-14">
        <div className="max-w-3xl">

          {/* ── Issues section ────────────────────────────────────────────── */}
          <section aria-labelledby="issues-heading">
            <h2
              id="issues-heading"
              className="font-heading font-bold mb-1"
              style={{ fontSize: "1.5rem", color: "var(--color-navy)" }}
            >
              Issues
            </h2>
            <p
              className="font-body text-sm mb-6"
              style={{ color: "var(--color-slate)" }}
            >
              Each issue shows what {candidate.name.split(" ")[0]} says about the topic, what they have done in their board role, and any online behavior tied to the same topic. Sources are linked inline.
            </p>

            <div className="grid gap-4">
              {candidate.issues.map((issue) => (
                <IssueCardComponent
                  key={issue.id}
                  issue={issue}
                  sources={candidate.sources}
                />
              ))}
            </div>
          </section>

          {/* ── Faith / worship ───────────────────────────────────────────── */}
          {candidate.whereTheyWorship && (
            <section
              aria-labelledby="worship-heading"
              className="mt-12 rounded-lg border p-5"
              style={{ borderColor: "rgba(16, 64, 93, 0.14)" }}
            >
              <h2
                id="worship-heading"
                className="font-heading font-bold mb-3"
                style={{ fontSize: "1.1rem", color: "var(--color-navy)" }}
              >
                Church and faith
              </h2>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "0.9375rem", color: "var(--color-charcoal)" }}
              >
                {normalizePublicCopy(candidate.whereTheyWorship)}
              </p>
            </section>
          )}

          {/* ── Campaign finance ──────────────────────────────────────────── */}
          {candidate.campaignFinance && (
            <section
              aria-labelledby="finance-heading"
              className="mt-8 rounded-lg border p-5"
              style={{ borderColor: "rgba(16, 64, 93, 0.14)" }}
            >
              <h2
                id="finance-heading"
                className="font-heading font-bold mb-3"
                style={{ fontSize: "1.1rem", color: "var(--color-navy)" }}
              >
                Campaign funding
              </h2>
              <dl
                className="grid gap-2 font-body text-sm mb-3"
                style={{ color: "var(--color-charcoal)" }}
              >
                <div>
                  <dt className="font-semibold inline" style={{ color: "var(--color-slate)" }}>
                    Total raised:{" "}
                  </dt>
                  <dd className="inline">{normalizePublicCopy(candidate.campaignFinance.totalRaised)}</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{ color: "var(--color-slate)" }}>
                    Reporting period:{" "}
                  </dt>
                  <dd className="inline">{normalizePublicCopy(candidate.campaignFinance.reportingPeriod)}</dd>
                </div>
                <div>
                  <dt className="font-semibold inline" style={{ color: "var(--color-slate)" }}>
                    Source:{" "}
                  </dt>
                  <dd className="inline">{normalizePublicCopy(candidate.campaignFinance.source)}</dd>
                </div>
              </dl>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "0.9375rem", color: "var(--color-charcoal)" }}
              >
                {normalizePublicCopy(candidate.campaignFinance.narrative)}
              </p>
              {candidate.campaignFinance.undisclosed && (
                <p
                  className="mt-2 font-body text-sm italic"
                  style={{ color: "var(--color-slate)" }}
                >
                  {normalizePublicCopy(candidate.campaignFinance.undisclosed)}
                </p>
              )}
            </section>
          )}

          {/* ── Sources appendix ──────────────────────────────────────────── */}
          <section
            aria-labelledby="sources-heading"
            className="mt-14 pt-8 border-t"
            style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
          >
            <h2
              id="sources-heading"
              className="font-heading font-bold mb-2"
              style={{ fontSize: "1.5rem", color: "var(--color-navy)" }}
            >
              Sources
            </h2>
            <p
              className="font-body text-sm mb-6"
              style={{ color: "var(--color-slate)" }}
            >
              All {candidate.sources.length} sources used on this page, sorted by type. Primary sources are official records (board portals, government pages). Secondary sources are news reporting. Source chips on each claim link directly to the relevant record.
            </p>

            <ClaimAnchoredSourcePanel sources={candidate.sources} />
          </section>

          {/* ── Source note ────────────────────────────────────────── */}
          <footer
            className="mt-12 rounded-md p-4 font-body text-sm"
            style={{ backgroundColor: "var(--color-light)", color: "var(--color-slate)" }}
            aria-label="Source note"
          >
            <p>
              <strong className="font-semibold" style={{ color: "var(--color-charcoal)" }}>
                Source note.
              </strong>{" "}
              Elect Righteous researches candidates using publicly available sources: official board records, local news, candidate questionnaires, and government databases. Every claim is source-cited. This platform does not grade, score, or endorse candidates. The lens guiding what we notice — including why stewardship of office and honesty matter to us — is documented in our{" "}
              <Link
                href="/about"
                className="font-semibold underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ color: "var(--color-navy)" }}
              >
                About page
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
