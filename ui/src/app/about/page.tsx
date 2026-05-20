import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  FileText,
  GitBranch,
  Layers,
  ChevronRight,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Elect Righteous",
  description:
    "Learn how Elect Righteous researches candidates, how the reporting pipeline works, and the source reliability standards behind each profile.",
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
    name: "Election Finder",
    icon: <Search size={20} strokeWidth={1.5} />,
    description:
      "Discovers every upcoming election relevant to your location — city, county, school board, state, and federal — using official Secretary of State websites, county clerk databases, Ballotpedia, and local government records.",
  },
  {
    phase: "Phase 2",
    name: "Candidate Profiler",
    icon: <Layers size={20} strokeWidth={1.5} />,
    description:
      "For each election, identifies every candidate: declared, filed, and potential write-ins. Sources include official filings, FEC records, state campaign finance databases, campaign websites, and local news announcements.",
  },
  {
    phase: "Phase 3",
    name: "Deep Scraper",
    icon: <Globe size={20} strokeWidth={1.5} />,
    description:
      "The workhorse. Runs 15+ parallel search passes per candidate — campaign finance, court records, property filings, social media (including archived/deleted posts), news archives, official votes where available, public meeting minutes, endorsements, and donor analysis.",
  },
  {
    phase: "Phase 4",
    name: "Media Extractor",
    icon: <FileText size={20} strokeWidth={1.5} />,
    description:
      "Finds and transcribes every video, interview, podcast appearance, and debate involving the candidate. Extracts verbatim quotes with timestamps and source links so voters can see exactly what each candidate said, in context.",
  },
  {
    phase: "Phase 5",
    name: "Integrity Analyzer",
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    description:
      "Reviews all gathered intelligence for patterns, contradictions, and notable facts. It checks words against actions, highlights documented context, and helps shape the final editorial profile without reducing people to a score.",
  },
  {
    phase: "Phase 6",
    name: "Report Generator",
    icon: <GitBranch size={20} strokeWidth={1.5} />,
    description:
      "Compiles everything into beautiful, readable, source-cited reports: full candidate dossiers, election comparison guides, and executive summaries — all published here for voters to review.",
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
          className="relative flex items-center justify-center text-center py-24 md:py-32"
          aria-label="About page hero"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--color-navy-dark)" }}
            aria-hidden="true"
          />
          <div className="hero-overlay absolute inset-0" aria-hidden="true" />

          <div className="relative z-10 container-main">
            <p
              className="text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--color-teal)" }}
            >
              Transparency &amp; Methodology
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight">
              About
            </h1>
            <p
              className="mt-5 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              How we find candidates, how we research them, and the values
              framework behind every assessment.
            </p>
          </div>
        </section>

        {/* ── MISSION ────────────────────────────────────────────────── */}
        <section
          id="mission"
          className="section-white"
          aria-labelledby="mission-heading"
        >
          <div className="container-main max-w-3xl">
            <h2
              id="mission-heading"
              className="text-3xl md:text-4xl font-heading font-bold mb-6"
              style={{ color: "var(--color-navy)" }}
            >
              Our Mission
            </h2>
            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: "var(--color-slate)" }}
            >
              Elect Righteous exists to help citizens of Hays, Kansas make
              fully informed voting decisions grounded in truth and values. We
              believe that democracy works best when voters have access to
              complete, accurate, source-cited information about the people
              asking for their trust.
            </p>
            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: "var(--color-slate)" }}
            >
              Most voters don&rsquo;t have 40 hours to research every candidate
              on their ballot. We do the research for you — systematically,
              transparently, and without editorial bias. We present the facts
              and let you decide.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-slate)" }}
            >
              We are guided by Judeo-Christian values, not partisan politics.
              Our assessment framework measures observable actions against a
              consistent moral standard. We never endorse candidates. We never
              tell you who to vote for. We show you the record and trust you to
              act on it.
            </p>
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
                How We Research Every Candidate
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--color-slate)" }}
              >
                A 6-phase intelligence pipeline runs for every candidate in
                every race on your ballot.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical connector line (desktop only) */}
              <div
                className="hidden md:block absolute left-[2.25rem] top-10 bottom-10 w-px"
                style={{ backgroundColor: "rgba(28, 195, 175, 0.25)" }}
                aria-hidden="true"
              />

              <ol className="space-y-6" aria-label="Research pipeline phases">
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

                    {/* Card */}
                    <div
                      className="flex-1 bg-white rounded-lg p-6 shadow-sm border"
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
