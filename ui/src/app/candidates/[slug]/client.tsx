"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import type { CandidateFull } from "@/data/candidates";

// ─── Pull Quote ───────────────────────────────────────────────────────────────

function PullQuote({
  text,
  source,
  date,
  url,
  topic,
}: {
  text: string;
  source: string;
  date?: string;
  url?: string;
  topic?: string;
}) {
  const formattedDate =
    date
      ? new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
          new Date(date + "T12:00:00")
        )
      : null;

  return (
    <figure
      className="my-10"
      style={{ borderLeft: "4px solid var(--color-teal)" }}
    >
      <blockquote className="pl-6 pr-2">
        {/* Large decorative quotation mark */}
        <span
          className="block font-serif leading-none select-none"
          style={{
            fontSize: "4rem",
            lineHeight: 1,
            color: "var(--color-teal)",
            marginBottom: "-0.5rem",
            opacity: 0.4,
          }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p
          className="font-serif text-xl leading-relaxed"
          style={{ color: "var(--color-charcoal)", fontStyle: "italic" }}
        >
          {text}
        </p>
      </blockquote>
      <figcaption className="pl-6 mt-4 text-sm" style={{ color: "var(--color-slate)" }}>
        {topic && (
          <span
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1"
            style={{ color: "var(--color-teal-dark)" }}
          >
            {topic}
          </span>
        )}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--color-slate)" }}
          >
            {source}
          </a>
        ) : (
          <span>{source}</span>
        )}
        {formattedDate && (
          <time dateTime={date} className="ml-2" style={{ color: "var(--color-slate)", opacity: 0.7 }}>
            &mdash; {formattedDate}
          </time>
        )}
      </figcaption>
    </figure>
  );
}

// ─── Section Divider ─────────────────────────────────────────────────────────

function SectionDivider() {
  return <div className="border-t my-12" style={{ borderColor: "#e2e8f0" }} />;
}

// ─── Article Section Heading ─────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-heading font-bold mt-12 mb-4"
      style={{
        fontSize: "1.375rem",
        color: "var(--color-navy)",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

// ─── Body Paragraph ──────────────────────────────────────────────────────────

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body leading-relaxed mb-5"
      style={{ fontSize: "1.125rem", color: "var(--color-charcoal)" }}
    >
      {children}
    </p>
  );
}

// ─── Correction Form ────────────────────────────────────────────────────────

function CorrectionForm({
  candidateName,
}: {
  candidateName: string;
  candidateSlug: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Elect Righteous — Correction for ${candidateName}`);
    const body = encodeURIComponent(
      `Candidate: ${candidateName}\nFrom: ${name} (${email})\nRelationship: ${relationship}\n\n${message}`
    );
    window.location.href = `mailto:tylerpreisser@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="rounded-xl p-6 sm:p-8"
      style={{ backgroundColor: "#f8f9fa", border: "1px solid #e2e8f0" }}
    >
      <h2
        className="font-heading font-bold text-lg mb-1"
        style={{ color: "var(--color-navy)" }}
      >
        Is Something Wrong or Missing?
      </h2>
      <p
        className="font-body text-sm mb-6 leading-relaxed"
        style={{ color: "var(--color-slate)" }}
      >
        If you are {candidateName} or represent their campaign, or if you have a correction or
        additional information, let us know. We want to get this right.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <label
            htmlFor="correction-name"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Your Name
          </label>
          <input
            type="text"
            id="correction-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="Jane Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="correction-email"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Email
          </label>
          <input
            type="email"
            id="correction-email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="you@example.com"
          />
        </div>

        {/* Relationship */}
        <div>
          <label
            htmlFor="correction-relationship"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Your Relationship to This Candidate
          </label>
          <select
            id="correction-relationship"
            required
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
          >
            <option value="">Select one...</option>
            <option value="I am this candidate">I am this candidate</option>
            <option value="I represent this candidate's campaign">I represent this candidate&apos;s campaign</option>
            <option value="Local voter with information">I&apos;m a local voter with information</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="correction-message"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            What Should We Change or Add?
          </label>
          <textarea
            id="correction-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2 resize-y"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="Tell us what's incorrect, missing, or needs to be updated..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="self-start flex items-center gap-2 px-6 py-2.5 rounded-md font-heading font-semibold text-sm uppercase tracking-wider text-white transition-all duration-200 hover:shadow-lg"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          Submit Correction
        </button>

        <p className="text-xs font-body" style={{ color: "var(--color-slate)", opacity: 0.7 }}>
          This will open your email app with your message pre-filled.
        </p>
      </form>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CandidateDetailClient({
  candidate,
}: {
  candidate: CandidateFull;
}) {
  const partyLabel =
    candidate.party === "R"
      ? "Republican"
      : candidate.party === "D"
      ? "Democrat"
      : "Independent";

  // At-a-glance facts for the key facts box
  const glanceFacts = [
    { label: "Age / Born", value: candidate.born },
    { label: "Hometown", value: candidate.hometown },
    { label: "Church / Faith", value: candidate.religion },
    { label: "Education", value: candidate.education },
    { label: "Family", value: candidate.family },
    { label: "Occupation", value: candidate.occupation },
    { label: "District", value: candidate.district },
    { label: "Last Result", value: candidate.margin2024 },
    ...(candidate.campaignWebsite
      ? [{ label: "Campaign Website", value: candidate.campaignWebsite, isLink: true }]
      : []),
  ].filter((f) => f.value);

  // Split into two columns for the grid
  const col1 = glanceFacts.filter((_, i) => i % 2 === 0);
  const col2 = glanceFacts.filter((_, i) => i % 2 !== 0);

  return (
    <article>
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <div
        className="border-b"
        style={{ backgroundColor: "var(--color-light)", borderColor: "#e2e8f0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 py-3 text-sm font-body flex-wrap"
            style={{ color: "var(--color-slate)" }}
          >
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "var(--color-teal-dark)" }}
            >
              Home
            </Link>
            <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
            <Link
              href="/candidates"
              className="hover:underline"
              style={{ color: "var(--color-teal-dark)" }}
            >
              Candidates
            </Link>
            <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
            <span aria-current="page" style={{ color: "var(--color-charcoal)" }}>
              {candidate.name}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Article Header ───────────────────────────────────────────────── */}
      <header className="section-navy" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Party + status line */}
            <p
              className="font-heading font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ color: "rgba(246,246,246,0.55)" }}
            >
              {partyLabel}
              {" · "}
              {candidate.incumbent ? "Currently in Office" : "Candidate"}
            </p>

            {/* Candidate name */}
            <h1
              className="font-heading font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
            >
              {candidate.name}
            </h1>

            {/* Position */}
            <p
              className="font-heading font-bold text-lg uppercase tracking-wide mb-3"
              style={{ color: "var(--color-teal)" }}
            >
              {candidate.position}
            </p>

            {/* One-liner occupation */}
            <p
              className="font-body text-base"
              style={{ color: "rgba(246,246,246,0.70)" }}
            >
              {candidate.occupation}
              {candidate.hometown ? ` · ${candidate.hometown}` : ""}
            </p>
          </div>
        </div>
      </header>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">

          {/* ── Key Facts Box ───────────────────────────────────────────── */}
          {glanceFacts.length > 0 && (
            <aside
              className="rounded-xl mb-12 p-6 sm:p-8"
              style={{ backgroundColor: "#f8f9fa" }}
              aria-label="Key facts at a glance"
            >
              <p
                className="font-heading font-bold text-xs uppercase tracking-widest mb-5"
                style={{ color: "var(--color-navy)" }}
              >
                At a Glance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {/* Column 1 */}
                <dl className="flex flex-col gap-4">
                  {col1.map((fact) => (
                    <div key={fact.label}>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        {fact.label}
                      </dt>
                      <dd
                        className="font-body text-sm leading-snug"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        {"isLink" in fact && fact.isLink ? (
                          <a
                            href={fact.value as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                            style={{ color: "var(--color-teal-dark)" }}
                          >
                            {(fact.value as string).replace(/^https?:\/\//, "")}
                            <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                {/* Column 2 */}
                <dl className="flex flex-col gap-4">
                  {col2.map((fact) => (
                    <div key={fact.label}>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        {fact.label}
                      </dt>
                      <dd
                        className="font-body text-sm leading-snug"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        {"isLink" in fact && fact.isLink ? (
                          <a
                            href={fact.value as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                            style={{ color: "var(--color-teal-dark)" }}
                          >
                            {(fact.value as string).replace(/^https?:\/\//, "")}
                            <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          )}

          {/* ── Who They Are ────────────────────────────────────────────── */}
          {candidate.whoTheyAre && (
            <>
              <SectionHeading>Who They Are</SectionHeading>
              {candidate.whoTheyAre.split("\n\n").map((paragraph, i) => (
                <BodyText key={i}>{paragraph}</BodyText>
              ))}
            </>
          )}

          {/* ── Their Record ────────────────────────────────────────────── */}
          {candidate.theirRecord && (
            <>
              <SectionDivider />
              <SectionHeading>Their Record</SectionHeading>
              {candidate.theirRecord.split("\n\n").map((paragraph, i) => (
                <BodyText key={i}>{paragraph}</BodyText>
              ))}
            </>
          )}

          {/* ── What They Stand For ──────────────────────────────────── */}
          {candidate.whatTheyStandFor && candidate.whatTheyStandFor.length > 0 && (
            <>
              <SectionDivider />
              <SectionHeading>What They Stand For</SectionHeading>
              <p
                className="font-body text-sm mb-6 leading-relaxed"
                style={{ color: "var(--color-slate)", fontStyle: "italic" }}
              >
                Based on public statements, voting record, and campaign materials.
                When a candidate has not taken a clear public position, we say so.
              </p>
              <dl className="flex flex-col gap-5 mb-5">
                {candidate.whatTheyStandFor.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-4"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <dt
                      className="font-heading font-bold text-sm uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {item.issue}
                    </dt>
                    <dd
                      className="font-body leading-relaxed"
                      style={{ fontSize: "1.0625rem", color: "var(--color-charcoal)" }}
                    >
                      {item.stance}
                    </dd>
                  </div>
                ))}
              </dl>
            </>
          )}

          {/* ── In Their Own Words ──────────────────────────────────────── */}
          {candidate.quotes.length > 0 && (
            <>
              <SectionDivider />
              <SectionHeading>In Their Own Words</SectionHeading>
              <div>
                {candidate.quotes.map((q, i) => (
                  <PullQuote
                    key={i}
                    text={q.text}
                    source={q.source}
                    date={q.date}
                    url={q.url}
                    topic={q.topic}
                  />
                ))}
              </div>
            </>
          )}

          {/* ── Follow the Money ────────────────────────────────────────── */}
          {candidate.campaignFinance && (
            <>
              <SectionDivider />
              <SectionHeading>Follow the Money</SectionHeading>
              {candidate.campaignFinance.narrative && (
                <BodyText>{candidate.campaignFinance.narrative}</BodyText>
              )}

              {/* Donor Table */}
              {candidate.campaignFinance.donors && candidate.campaignFinance.donors.length > 0 && (
                <div className="my-8 rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: "#f8f9fa" }}>
                        <th className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Donor</th>
                        <th className="text-right px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidate.campaignFinance.donors.map((d, i) => (
                        <tr key={i} className="border-t" style={{ borderColor: "#f1f5f9" }}>
                          <td className="px-5 py-3 font-body" style={{ color: "var(--color-charcoal)" }}>{d.name}</td>
                          <td className="px-5 py-3 font-heading font-semibold text-right" style={{ color: "var(--color-navy)" }}>{d.amount}</td>
                        </tr>
                      ))}
                      {candidate.campaignFinance.undisclosed && (
                        <tr className="border-t" style={{ borderColor: "#e2e8f0", backgroundColor: "#f8f9fa" }}>
                          <td colSpan={2} className="px-5 py-3 text-xs font-body italic" style={{ color: "var(--color-slate)" }}>
                            {candidate.campaignFinance.undisclosed}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              <p className="text-xs mt-4" style={{ color: "var(--color-slate)" }}>
                Source: {candidate.campaignFinance.source} — {candidate.campaignFinance.reportingPeriod}
              </p>
            </>
          )}

          {/* ── What You Should Know ────────────────────────────────────── */}
          {candidate.whatYouShouldKnow.length > 0 && (
            <>
              <SectionDivider />
              <SectionHeading>What You Should Know</SectionHeading>
              <ul className="flex flex-col gap-5 mb-5" role="list">
                {candidate.whatYouShouldKnow.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4"
                    style={{ color: "var(--color-charcoal)" }}
                  >
                    {/* Numbered bullet */}
                    <span
                      className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full font-heading font-bold text-xs mt-0.5"
                      style={{
                        backgroundColor: "var(--color-navy)",
                        color: "white",
                        minWidth: "1.75rem",
                      }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p
                      className="font-body leading-relaxed"
                      style={{ fontSize: "1.0625rem", paddingTop: "0.125rem" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* ── Where They Worship ──────────────────────────────────────── */}
          {(candidate.whereTheyWorship || candidate.church) && (
            <>
              <SectionDivider />
              <SectionHeading>Where They Worship</SectionHeading>
              {candidate.whereTheyWorship && (
                <BodyText>{candidate.whereTheyWorship}</BodyText>
              )}
              {candidate.church && (
                <div className="my-6 rounded-lg p-5" style={{ backgroundColor: "#f8f9fa" }}>
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: "var(--color-navy)" }}>
                    {candidate.church.name}
                  </p>
                  {candidate.church.denomination && (
                    <p className="text-sm mb-1" style={{ color: "var(--color-slate)" }}>
                      {candidate.church.denomination}
                    </p>
                  )}
                  {candidate.church.url && (
                    <a
                      href={candidate.church.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold hover:underline mt-1"
                      style={{ color: "var(--color-teal-dark)" }}
                    >
                      Visit Church Website <ExternalLink size={12} />
                    </a>
                  )}
                  {candidate.church.details && (
                    <p className="text-sm mt-2" style={{ color: "var(--color-charcoal)" }}>
                      {candidate.church.details}
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          {/* ── Sources Link ──────────────────────────────────────────────── */}
          {candidate.sources.length > 0 && (
            <>
              <SectionDivider />
              <section aria-labelledby="sources-heading">
                <h2
                  id="sources-heading"
                  className="font-heading font-bold mb-2"
                  style={{ fontSize: "1rem", color: "var(--color-navy)", textTransform: "uppercase", letterSpacing: "0.07em" }}
                >
                  Sources
                </h2>
                <p
                  className="font-body text-sm mb-5"
                  style={{ color: "var(--color-slate)" }}
                >
                  All facts and claims in this profile are drawn from {candidate.sources.length} publicly
                  available sources.
                </p>
                <Link
                  href={`/candidates/${candidate.slug}/sources`}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
                >
                  View All {candidate.sources.length} Sources
                  <ExternalLink size={14} aria-hidden="true" />
                </Link>
              </section>
            </>
          )}

          {/* ── Candidate Correction Form ─────────────────────────────── */}
          <SectionDivider />
          <CorrectionForm candidateName={candidate.name} candidateSlug={candidate.slug} />

          {/* ── Navigation ──────────────────────────────────────────────── */}
          <div
            className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ borderColor: "#e2e8f0" }}
          >
            <Link
              href="/candidates"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-colors duration-200 hover:opacity-75"
              style={{ color: "var(--color-navy)" }}
            >
              <ChevronLeft size={15} aria-hidden="true" />
              All Candidates
            </Link>

            {candidate.electionSlug && (
              <Link
                href={`/elections/${candidate.electionSlug}`}
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-colors duration-200 hover:opacity-75 sm:ml-auto"
                style={{ color: "var(--color-teal-dark)" }}
              >
                View election details
                <ChevronRight size={15} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
