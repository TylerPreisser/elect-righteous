import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  FileText,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

type ElectionLevel = "Federal" | "State" | "Local";

interface Election {
  id: string;
  name: string;
  date: string;
  candidateCount: string;
  level: ElectionLevel;
  note?: string;
}

const ELECTIONS: Election[] = [
  {
    id: "ks-governor-2026",
    name: "Kansas Governor",
    date: "Nov 3, 2026",
    candidateCount: "4 candidates",
    level: "State",
    note: "Open Seat",
  },
  {
    id: "us-senate-2026",
    name: "U.S. Senate",
    date: "Nov 3, 2026",
    candidateCount: "1 candidate",
    level: "Federal",
  },
  {
    id: "ks-01-house-2026",
    name: "KS-01 U.S. House",
    date: "Nov 3, 2026",
    candidateCount: "1 candidate",
    level: "Federal",
  },
  {
    id: "kansas-ag-2026",
    name: "Kansas Attorney General",
    date: "Nov 3, 2026",
    candidateCount: "1 candidate",
    level: "State",
  },
  {
    id: "kansas-sos-2026",
    name: "Kansas Secretary of State",
    date: "Nov 3, 2026",
    candidateCount: "TBD",
    level: "State",
    note: "Open Seat",
  },
  {
    id: "ks-house-111",
    name: "KS House District 111",
    date: "Nov 3, 2026",
    candidateCount: "1 candidate",
    level: "Local",
  },
];

interface HowItWorksItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HOW_IT_WORKS: HowItWorksItem[] = [
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: "We Search Everything",
    description:
      "15+ parallel internet searches per candidate. Every public record, social media post, news article, court filing, and campaign finance report — systematically searched and documented.",
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "We Verify Every Claim",
    description:
      "Every fact is traced to its source URL. Campaign promises are checked against voting records. Words are compared to actions. We follow a strict two-source rule for significant claims.",
  },
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: "We Present the Facts",
    description:
      "Comprehensive, source-cited reports written in plain English. We never endorse — you decide. Every conclusion traces back to specific, verifiable evidence you can check yourself.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function LevelBadge({ level }: { level: ElectionLevel }) {
  const styles: Record<ElectionLevel, string> = {
    Federal: "bg-navy text-white",
    State: "bg-teal text-white",
    Local: "bg-gold text-white",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-heading font-semibold tracking-wide ${styles[level]}`}
    >
      {level}
    </span>
  );
}

function ElectionCard({ election }: { election: Election }) {
  return (
    <Link
      href={`/elections/${election.id}`}
      className="card block p-6 group"
      aria-label={`View candidates for ${election.name}`}
    >
      <div className="flex items-start justify-between mb-3">
        <LevelBadge level={election.level} />
        {election.note && (
          <span
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: "var(--color-teal)" }}
          >
            {election.note}
          </span>
        )}
      </div>
      <h3
        className="text-lg font-heading font-bold mb-2 leading-snug transition-colors duration-200 group-hover:text-teal"
        style={{ color: "var(--color-navy)" }}
      >
        {election.name}
      </h3>
      <div
        className="flex items-center gap-1.5 text-sm mb-1"
        style={{ color: "var(--color-slate)" }}
      >
        <CalendarDays size={14} strokeWidth={1.5} aria-hidden="true" />
        <span>{election.date}</span>
      </div>
      <div
        className="text-sm font-semibold mb-4"
        style={{ color: "var(--color-charcoal)" }}
      >
        {election.candidateCount}
      </div>
      <div
        className="flex items-center gap-1 text-sm font-heading font-semibold uppercase tracking-wide transition-colors duration-200 group-hover:text-teal"
        style={{ color: "var(--color-teal-dark)" }}
        aria-hidden="true"
      >
        View candidates <ChevronRight size={14} strokeWidth={2.5} />
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>

      <main>
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[80vh] flex items-center justify-center text-center"
          aria-label="Hero"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--color-navy-dark)" }}
            aria-hidden="true"
          />
          <div className="hero-overlay absolute inset-0" aria-hidden="true" />

          <div className="relative z-10 container-main py-24 md:py-32">
            <p
              className="text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "var(--color-teal)" }}
            >
              Election Intelligence for Hays, Kansas
            </p>

            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
              Know Your Candidates.
              <br />
              Vote Your Values.
            </h1>

            <p
              className="max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.70)",
              }}
            >
              &ldquo;When the righteous thrive, the people rejoice; when the
              wicked rule, the people groan.&rdquo;
              <span className="block mt-1 not-italic text-sm tracking-wider">
                &mdash; Proverbs 29:2
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/elections" className="btn-primary">
                Explore Elections
              </Link>
              <Link href="/candidates" className="btn-outline">
                View All Candidates
              </Link>
            </div>
          </div>
        </section>

        {/* ── FEATURED ELECTIONS ─────────────────────────────────────── */}
        <section className="section-light" aria-labelledby="elections-heading">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2
                id="elections-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                2026 Elections for Hays, Kansas
              </h2>
              <p
                className="text-lg"
                style={{ color: "var(--color-slate)" }}
              >
                12 races on your ballot this year
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ELECTIONS.map((election) => (
                <ElectionCard key={election.id} election={election} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/elections"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View All 12 Elections <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────────────────────────── */}
        <section className="section-white" aria-labelledby="how-heading">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2
                id="how-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                How We Research Every Candidate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.title} className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                    style={{
                      backgroundColor: "rgba(28, 195, 175, 0.1)",
                      color: "var(--color-teal)",
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-heading font-bold mb-3"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-slate)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BALLOT MEASURES ────────────────────────────────────────── */}
        <section className="section-navy" aria-labelledby="ballot-heading">
          <div className="container-main">
            <div className="text-center mb-10">
              <h2
                id="ballot-heading"
                className="text-3xl md:text-4xl font-heading font-bold text-white mb-3"
              >
                Ballot Measures on Your Ballot
              </h2>
              <p
                className="text-base max-w-xl mx-auto"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                These aren&rsquo;t candidate races &mdash; they&rsquo;re direct
                votes on changes to Kansas law and the state constitution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Measure 1 — Supreme Court Amendment */}
              <article
                className="rounded-lg p-7 flex flex-col gap-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div>
                  <p
                    className="text-xs font-heading font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-teal)" }}
                  >
                    August 4, 2026 &mdash; Primary Ballot
                  </p>
                  <h3 className="text-xl font-heading font-bold text-white leading-snug">
                    Supreme Court Selection Amendment
                  </h3>
                </div>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    color: "rgba(246,246,246,0.78)",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  Right now, Kansas Supreme Court justices are selected by a
                  nonpartisan commission. This amendment would change who
                  controls that process &mdash; shifting more power to the
                  governor and legislature. The court has final say on abortion,
                  school funding, and constitutional rights.
                </p>

                <Link
                  href="/elections/supreme-court-amendment"
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-white self-start"
                  style={{ color: "var(--color-teal)" }}
                >
                  Read full analysis <ChevronRight size={14} strokeWidth={2.5} />
                </Link>
              </article>

              {/* Measure 2 — Citizenship Amendment */}
              <article
                className="rounded-lg p-7 flex flex-col gap-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div>
                  <p
                    className="text-xs font-heading font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-teal)" }}
                  >
                    November 3, 2026 &mdash; General Ballot
                  </p>
                  <h3 className="text-xl font-heading font-bold text-white leading-snug">
                    Citizenship Voting Requirement
                  </h3>
                </div>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    color: "rgba(246,246,246,0.78)",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  This would add explicit citizenship language to the Kansas
                  Constitution. Non-citizen voting is already illegal under
                  current state and federal law. The question is whether that
                  prohibition belongs in the constitution itself.
                </p>

                <Link
                  href="/elections/citizenship-amendment"
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-white self-start"
                  style={{ color: "var(--color-teal)" }}
                >
                  Read full analysis <ChevronRight size={14} strokeWidth={2.5} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ── OUR APPROACH ───────────────────────────────────────────── */}
        <section className="section-light" aria-labelledby="approach-heading">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id="approach-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-8"
                style={{ color: "var(--color-navy)" }}
              >
                Our Approach
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-10">
                {[
                  { step: "01", text: "We search everywhere." },
                  { step: "02", text: "We verify everything." },
                  { step: "03", text: "We present the facts." },
                  { step: "04", text: "You decide." },
                ].map(({ step, text }) => (
                  <div key={step} className="flex flex-col items-center text-center">
                    <span
                      className="text-3xl font-heading font-extrabold mb-2 leading-none"
                      style={{ color: "var(--color-teal)" }}
                    >
                      {step}
                    </span>
                    <p
                      className="text-base font-heading font-bold leading-snug"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-base leading-relaxed"
                style={{
                  color: "var(--color-slate)",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                Every report we publish is sourced, dated, and traceable.
                We don&rsquo;t grade candidates or tell you who to vote for.
                We give you the complete, verified record &mdash; and trust
                you to make your own judgment before God.
              </p>

              <div className="mt-8">
                <Link
                  href="/about#methodology"
                  className="inline-flex items-center gap-1.5 font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--color-teal-dark)" }}
                >
                  Read our full methodology{" "}
                  <ChevronRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <section className="section-navy text-center" aria-labelledby="cta-heading">
          <div className="container-main">
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            >
              Ready to know who&rsquo;s on your ballot?
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Explore all 2026 elections for Hays, Kansas
            </p>
            <Link href="/elections" className="btn-primary">
              Explore Elections
            </Link>
          </div>
        </section>
      </main>

    </>
  );
}
