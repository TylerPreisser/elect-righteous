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
  Search,
  Database,
} from "lucide-react";
import { ELECTIONS } from "@/data/elections";
import { V2_CANDIDATES } from "@/data/v2";

interface HowItWorksItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HOW_IT_WORKS: HowItWorksItem[] = [
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: "Wide Source Collection",
    description:
      "The archive pulls from campaign sites, government filings, court records, local reporting, meeting records, archived web pages, social platforms, and finance databases.",
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "Primary-Source Checks",
    description:
      "Whenever possible, claims are checked against the underlying record, with filings, minutes, court dockets, archived pages, and direct quotes kept in context.",
  },
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: "Plain-English Dossiers",
    description:
      "Each profile separates biography, issue positions, campaign finance, community notes, quotes, public actions, and linked sources so readers can inspect the evidence themselves.",
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
    description: "Governor, AG, Secretary of State, Treasurer, Insurance Commissioner, House 111, State Board of Education",
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
    hash: "local-2026",
    icon: <MapPin size={28} strokeWidth={1.5} />,
    color: "var(--color-slate)",
    description: "Hays city leadership, Ellis County officials, USD 489 school board",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const sourceCount = V2_CANDIDATES.reduce((sum, candidate) => sum + candidate.sources.length, 0);
  const actionCount = V2_CANDIDATES.reduce(
    (sum, candidate) => sum + candidate.issues.reduce((issueSum, issue) => issueSum + issue.actions.length, 0),
    0,
  );

  return (
    <>

      <main>
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0b1f2a] text-white" aria-label="Election intelligence command center">
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
          </div>

          <div className="relative container-main py-14 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-heading font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--color-teal)" }}>
                  Election intelligence for Hays, Kansas
                </p>

                <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.03] md:text-6xl">
                  Source-backed candidate intelligence for the 2026 ballot.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/76 md:text-lg">
                  A quiet, inspectable voter guide for Hays-area races: candidate statements,
                  public actions, campaign finance, and cited source trails in one place.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/candidates"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal px-5 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Search size={17} aria-hidden="true" />
                    Search profiles
                  </Link>
                  <Link
                    href="/elections"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-5 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Database size={17} aria-hidden="true" />
                    Browse races
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,.35)] backdrop-blur">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-heading text-sm font-bold uppercase tracking-widest text-white/82">
                    Research archive
                  </span>
                  <span className="rounded bg-teal/15 px-2 py-1 text-xs font-semibold text-teal">
                    2026 cycle
                  </span>
                </div>

                <dl className="divide-y divide-white/10">
                  {[
                    ["Profiles", V2_CANDIDATES.length.toLocaleString()],
                    ["Races", ELECTIONS.length.toLocaleString()],
                    ["Public sources", sourceCount.toLocaleString()],
                    ["Record items", actionCount.toLocaleString()],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                      <dt className="text-xs uppercase tracking-wide text-white/55">{label}</dt>
                      <dd className="font-heading text-2xl font-bold text-white">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-wide text-white/50">Profile standard</p>
                  <p className="mt-1 font-heading text-lg font-bold">14 issue areas, cited line by line</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ELECTION CATEGORIES ───────────────────────────────────── */}
        <section id="elections" className="section-light scroll-mt-0" aria-labelledby="elections-heading">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2
                id="elections-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                Start with the ballot
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                Races are grouped by how voters usually scan a ballot, from federal offices to local seats.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.hash}
                  href={`/elections#${cat.hash}`}
                  className="group block rounded-lg border bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_18px_45px_rgba(16,64,93,0.10)]"
                  style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
                  aria-label={`View ${cat.label} elections`}
                >
                  <div
                    className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${cat.color} 12%, transparent)`,
                      color: cat.color,
                    }}
                    aria-hidden="true"
                  >
                    {cat.icon}
                  </div>
                  <h3
                    className="mb-2 text-xl font-heading font-bold transition-colors duration-200 group-hover:text-teal"
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
                Built for receipts, not vibes
              </h2>
              <p
                className="text-lg max-w-4xl mx-auto leading-relaxed"
                style={{ color: "var(--color-slate)" }}
              >
                Profiles are assembled from traceable citations,
                then edited down into a readable voter guide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.title} className="text-left">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-md mb-5"
                    style={{
                      backgroundColor: "rgba(28, 195, 175, 0.1)",
                      color: "var(--color-teal)",
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-heading font-bold mb-3"
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
