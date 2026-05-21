import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Layers,
  ChevronRight,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Elect Righteous",
  description:
    "Learn how Elect Righteous researches candidates, checks public sources, and keeps citations visible behind each profile.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

interface AgentStep {
  phase: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const AGENT_PIPELINE: AgentStep[] = [
  {
    phase: "Phase 1",
    name: "Roster check",
    icon: <Search size={20} strokeWidth={1.5} />,
    description:
      "We identify federal, state, county, city, and school-board races relevant to Hays voters and separate filed candidates from current officials or off-cycle officeholders.",
  },
  {
    phase: "Phase 2",
    name: "Profile research",
    icon: <Layers size={20} strokeWidth={1.5} />,
    description:
      "For each person, we gather campaign pages, official filings, finance records, local reporting, public statements, and community background where it is public and relevant.",
  },
  {
    phase: "Phase 3",
    name: "Public-record review",
    icon: <Globe size={20} strokeWidth={1.5} />,
    description:
      "Meeting minutes, filings, votes, dockets, public notices, archived pages, and candidate-controlled statements are checked against the underlying source whenever possible.",
  },
  {
    phase: "Phase 4",
    name: "Media and statements",
    icon: <FileText size={20} strokeWidth={1.5} />,
    description:
      "Interviews, forums, videos, questionnaires, campaign posts, and public comments are summarized with links so voters can inspect the original context.",
  },
  {
    phase: "Phase 5",
    name: "Words and actions",
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    description:
      "Candidate statements and public actions are kept distinct. If the two appear to differ, the profile says so only when the difference is supported by linked sources.",
  },
  {
    phase: "Phase 6",
    name: "Readable profile",
    icon: <CheckCircle2 size={20} strokeWidth={1.5} />,
    description:
      "The final page is edited into plain English with citations nearby, clear caveats where the record is thin, and no endorsement language.",
  },
];


// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>

      <main>
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-16 md:py-24"
          aria-label="About page hero"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--color-navy-dark)" }}
            aria-hidden="true"
          />
          <div className="hero-overlay absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-0 opacity-25" aria-hidden="true">
            <div className="h-full w-full bg-[linear-gradient(135deg,rgba(28,195,175,.16),transparent_42%),linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px]" />
          </div>

          <div className="relative z-10 container-main">
            <p
              className="text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--color-teal)" }}
            >
              Transparency &amp; Methodology
            </p>
            <h1 className="max-w-4xl text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight">
              A voter guide built from public records, not campaign polish.
            </h1>
            <p
              className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              Elect Righteous gathers the source trail behind Hays-area races
              and turns it into plain-English profiles voters can check for themselves.
            </p>
          </div>
        </section>

        {/* ── MISSION ────────────────────────────────────────────────── */}
        <section
          id="mission"
          className="section-white"
          aria-labelledby="mission-heading"
        >
          <div className="container-main">
            <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
              <div>
                <p
                  className="mb-3 text-xs font-heading font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-teal-dark)" }}
                >
                  Mission
                </p>
                <h2
                  id="mission-heading"
                  className="text-3xl md:text-4xl font-heading font-bold"
                  style={{ color: "var(--color-navy)" }}
                >
                  Help voters inspect the record before the ballot is due.
                </h2>
              </div>

              <div className="max-w-3xl space-y-5">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                  Elect Righteous exists to help citizens of Hays, Kansas make
                  informed voting decisions with source-cited information about
                  the people asking for public trust.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                  Most voters do not have days to research every office,
                  filing, quote, and public record on their ballot. We organize
                  that material systematically, keep the citations visible, and
                  present the facts in plain English.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                  We are guided by Judeo-Christian values, not partisan
                  politics. We do not endorse candidates or tell you who to vote
                  for. We show the record and trust voters to use judgment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY / PIPELINE ─────────────────────────────────── */}
        <section
          id="methodology"
          className="section-light"
          aria-labelledby="methodology-heading"
        >
          <div className="container-main">
            <div className="text-center mb-12">
              <h2
                id="methodology-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                How the research comes together
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--color-slate)" }}
              >
                Six repeatable checks move a candidate from roster discovery to
                a cited, readable profile.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical connector line (desktop only) */}
              <div
                className="hidden md:block absolute left-[2.25rem] top-10 bottom-10 w-px"
                style={{ backgroundColor: "rgba(28, 195, 175, 0.25)" }}
                aria-hidden="true"
              />

              <ol className="space-y-6" aria-label="Research checks">
                {AGENT_PIPELINE.map((step, index) => (
                  <li
                    key={step.phase}
                    className="relative flex gap-6 md:gap-8 items-start"
                  >
                    {/* Phase number bubble */}
                    <div
                      className="relative z-10 flex-shrink-0 flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-full font-heading font-bold text-white text-sm shadow-md"
                      style={{ backgroundColor: "var(--color-teal)" }}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>

                    <div
                      className="flex-1 bg-white rounded-lg p-5 shadow-sm border"
                      style={{ borderColor: "rgba(16,64,93,0.08)" }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-xs font-heading font-semibold uppercase tracking-wider"
                          style={{ color: "var(--color-teal-dark)" }}
                        >
                          {step.phase}
                        </span>
                        <span
                          className="flex items-center gap-1.5"
                          style={{ color: "var(--color-navy)" }}
                          aria-hidden="true"
                        >
                          {step.icon}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-heading font-bold mb-2"
                        style={{ color: "var(--color-navy)" }}
                      >
                        {step.name}
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--color-slate)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </section>


        {/* ── DISCLAIMER ─────────────────────────────────────────────── */}
        <section
          id="disclaimer"
          className="section-navy"
          aria-labelledby="disclaimer-heading"
        >
          <div className="container-main max-w-3xl">
            <h2
              id="disclaimer-heading"
              className="text-2xl md:text-3xl font-heading font-bold text-white mb-6"
            >
              Disclaimer
            </h2>
            <div className="space-y-4">
              {[
                "Elect Righteous is an independent, non-partisan research platform. We are not affiliated with any political party, campaign, government agency, or advocacy organization.",
                "We do not endorse, oppose, or recommend any candidate, political party, or ballot measure. All content is presented for informational purposes only.",
                "All information is gathered from publicly available sources. We do not use or attempt to access private records. Every published claim includes its source citation so readers can verify independently.",
                "We strive for accuracy, but we are not infallible. If you believe we have made an error, please contact us with the correction and your source documentation.",
                "Our Judeo-Christian values framework is one lens of analysis among many. Voters should apply their own values, priorities, and judgment when making final decisions.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING SCRIPTURE ──────────────────────────────────────── */}
        <section
          className="section-white text-center"
          aria-label="Closing scripture"
        >
          <div className="container-main max-w-2xl">
            <blockquote>
              <p
                className="text-2xl md:text-3xl leading-relaxed mb-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "var(--color-navy)",
                }}
              >
                &ldquo;Learn to do right; seek justice. Defend the oppressed.
                Take up the cause of the fatherless; plead the case of the
                widow.&rdquo;
              </p>
              <footer
                className="text-sm font-heading font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-teal-dark)" }}
              >
                Isaiah 1:17
              </footer>
            </blockquote>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/elections" className="btn-primary">
                Explore Elections
              </Link>
              <Link
                href="/candidates"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View All Candidates{" "}
                <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
