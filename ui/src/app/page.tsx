import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  FileText,
  ChevronRight,
  Landmark,
  Building2,
  ScrollText,
  MapPin,
} from "lucide-react";

interface HowItWorksItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HOW_IT_WORKS: HowItWorksItem[] = [
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: "Multi-Layer Source Collection",
    description:
      "The working archive already spans 54 candidate research files, 25 long-form reports, more than 154,000 lines of consolidated candidate research, and 15,700+ captured source URLs. We pull from campaign sites, government filings, court records, local reporting, social media, meeting records, archived web pages, and finance databases.",
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "Primary-Source Verification",
    description:
      "Whenever possible, claims are checked against the underlying document, not just a campaign summary or a quoted article. That means cross-checking legislative records, FEC and Kansas ethics filings, city and county minutes, church websites, court dockets, licensing records, archived snapshots, and direct quotes in context.",
  },
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: "Research Pipeline, Not Spin",
    description:
      "Each candidate page is built from multiple research layers: biography, public record, campaign finance, faith/church documentation, verbatim quotes, and verified adverse-public-record findings. We write in plain English, surface uncertainty when the record is thin, and keep the source trail visible so readers can inspect the evidence for themselves.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Category cards for the homepage
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    label: "Federal",
    hash: "federal",
    icon: <Landmark size={28} strokeWidth={1.5} />,
    color: "var(--color-navy)",
    description: "U.S. Senate and KS-01 House races",
  },
  {
    label: "State",
    hash: "state",
    icon: <Building2 size={28} strokeWidth={1.5} />,
    color: "var(--color-teal-dark)",
    description: "Governor, AG, Secretary of State, Insurance Commissioner, House 111, State Board of Education",
  },
  {
    label: "Ballot Measures",
    hash: "ballot-measures",
    icon: <ScrollText size={28} strokeWidth={1.5} />,
    color: "var(--color-gold)",
    description: "Supreme Court amendment and citizenship amendment",
  },
  {
    label: "Local",
    hash: "local",
    icon: <MapPin size={28} strokeWidth={1.5} />,
    color: "var(--color-slate)",
    description: "Hays city leadership, Ellis County officials, USD 489 school board",
  },
];

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

        {/* ── ELECTION CATEGORIES ───────────────────────────────────── */}
        <section className="section-light" aria-labelledby="elections-heading">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2
                id="elections-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                2026 Elections
              </h2>
              <p
                className="text-lg"
                style={{ color: "var(--color-slate)" }}
              >
                Every race on your ballot, organized by level
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.hash}
                  href={`/elections#${cat.hash}`}
                  className="card block p-6 group text-center"
                  aria-label={`View ${cat.label} elections`}
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${cat.color} 12%, transparent)`,
                      color: cat.color,
                    }}
                    aria-hidden="true"
                  >
                    {cat.icon}
                  </div>
                  <h3
                    className="text-xl font-heading font-bold mb-2 transition-colors duration-200 group-hover:text-teal"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {cat.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-slate)" }}
                  >
                    {cat.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-heading font-semibold uppercase tracking-wide transition-colors duration-200 group-hover:text-teal"
                    style={{ color: "var(--color-teal-dark)" }}
                    aria-hidden="true"
                  >
                    View races <ChevronRight size={14} strokeWidth={2.5} />
                  </span>
                </Link>
              ))}
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
              <p
                className="text-lg max-w-4xl mx-auto leading-relaxed"
                style={{ color: "var(--color-slate)" }}
              >
                This is not a single Google search and a campaign-bio rewrite.
                It is a layered research workflow built to gather, compare,
                verify, and preserve large volumes of public-record material
                before anything gets turned into a published candidate page.
              </p>
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

      </main>

    </>
  );
}
