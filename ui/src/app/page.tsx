import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  FileText,
  Heart,
  Home,
  BookOpen,
  Scale,
  HandHeart,
  Gavel,
  Leaf,
  Users,
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import SiteHeader from "@/components/layout/site-header";

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
    candidateCount: "10+ candidates",
    level: "State",
    note: "Open Seat",
  },
  {
    id: "us-senate-2026",
    name: "U.S. Senate",
    date: "Nov 3, 2026",
    candidateCount: "8+ candidates",
    level: "Federal",
  },
  {
    id: "ks01-house-2026",
    name: "KS-01 U.S. House",
    date: "Nov 3, 2026",
    candidateCount: "4 candidates",
    level: "Federal",
  },
  {
    id: "ks-ag-2026",
    name: "Kansas Attorney General",
    date: "Nov 3, 2026",
    candidateCount: "2 candidates",
    level: "State",
  },
  {
    id: "ks-sos-2026",
    name: "Kansas Secretary of State",
    date: "Nov 3, 2026",
    candidateCount: "4 candidates",
    level: "State",
    note: "Open Seat",
  },
  {
    id: "ks-house-111-2026",
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
      "Comprehensive, source-cited reports analyzed through our 8-pillar values framework. We never endorse — you decide. Every conclusion traces back to specific, verifiable evidence.",
  },
];

interface ValuePillar {
  icon: React.ReactNode;
  name: string;
}

const VALUES_PILLARS: ValuePillar[] = [
  { icon: <Heart size={24} strokeWidth={1.5} />, name: "Sanctity of Life" },
  { icon: <Home size={24} strokeWidth={1.5} />, name: "Protection of Family" },
  { icon: <BookOpen size={24} strokeWidth={1.5} />, name: "Religious Liberty" },
  { icon: <Scale size={24} strokeWidth={1.5} />, name: "Honesty & Integrity" },
  { icon: <HandHeart size={24} strokeWidth={1.5} />, name: "Care for Vulnerable" },
  { icon: <Gavel size={24} strokeWidth={1.5} />, name: "Justice & Rule of Law" },
  { icon: <Leaf size={24} strokeWidth={1.5} />, name: "Stewardship" },
  { icon: <Users size={24} strokeWidth={1.5} />, name: "Community Love" },
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
        className="text-sm font-semibold"
        style={{ color: "var(--color-charcoal)" }}
      >
        {election.candidateCount}
      </div>
      <div
        className="flex items-center gap-1 mt-4 text-sm font-heading font-semibold uppercase tracking-wide transition-colors duration-200 group-hover:text-teal"
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
      <SiteHeader />

      <main>
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[80vh] flex items-center justify-center text-center"
          aria-label="Hero"
        >
          {/* Background image placeholder — navy gradient behind overlay so it
              looks intentional even without a background photo set */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--color-navy-dark)" }}
            aria-hidden="true"
          />
          {/* Dark navy overlay */}
          <div className="hero-overlay absolute inset-0" aria-hidden="true" />

          {/* Content */}
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
                Critical Ballot Measures
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Measure 1 */}
              <div
                className="rounded-lg p-7"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div
                  className="text-xs font-heading font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "var(--color-teal)" }}
                >
                  August 4, 2026 — Primary
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 leading-snug">
                  Supreme Court Election Amendment
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Would abolish merit-based judicial selection. 93% Republican
                  support. Opposed by the Kansas Bar Association.
                </p>
                <Link
                  href="/elections/ks-supreme-court-amendment"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-heading font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--color-teal)" }}
                >
                  Read analysis <ChevronRight size={14} strokeWidth={2.5} />
                </Link>
              </div>

              {/* Measure 2 */}
              <div
                className="rounded-lg p-7"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div
                  className="text-xs font-heading font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "var(--color-teal)" }}
                >
                  November 3, 2026 — General
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 leading-snug">
                  Citizenship Voting Requirement
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Would amend the Kansas Constitution. Non-citizen voting is
                  already illegal under current law.
                </p>
                <Link
                  href="/elections/ks-citizenship-amendment"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-heading font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--color-teal)" }}
                >
                  Read analysis <ChevronRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES FRAMEWORK ───────────────────────────────────────── */}
        <section className="section-light" aria-labelledby="values-heading">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2
                id="values-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                Our Values Assessment Framework
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--color-slate)" }}
              >
                Every candidate assessed across 8 Judeo-Christian values pillars
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {VALUES_PILLARS.map((pillar) => (
                <div
                  key={pillar.name}
                  className="flex flex-col items-center text-center p-5 rounded-lg bg-white shadow-sm"
                >
                  <div
                    className="mb-3"
                    style={{ color: "var(--color-teal)" }}
                    aria-hidden="true"
                  >
                    {pillar.icon}
                  </div>
                  <span
                    className="text-sm font-heading font-semibold leading-snug"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {pillar.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/about#values-framework"
                className="inline-flex items-center gap-1.5 font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--color-teal-dark)" }}
              >
                Learn more about our methodology{" "}
                <ChevronRight size={14} strokeWidth={2.5} />
              </Link>
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

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer
        className="py-8 border-t"
        style={{
          backgroundColor: "var(--color-charcoal)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            &copy; {new Date().getFullYear()} Elect Righteous. Research only —
            not a political endorsement.
          </p>
          <nav
            className="flex items-center gap-6"
            aria-label="Footer navigation"
          >
            {[
              { href: "/about", label: "About" },
              { href: "/about#methodology", label: "Methodology" },
              { href: "/about#disclaimer", label: "Disclaimer" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
