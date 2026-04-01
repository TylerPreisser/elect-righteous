import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  FileText,
  GitBranch,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Home,
  BookOpen,
  Scale,
  HandHeart,
  Gavel,
  Leaf,
  Users,
  ChevronRight,
  Star,
  Database,
  Newspaper,
  MessageSquare,
  Globe,
  Hash,
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
      "The workhorse. Runs 15+ parallel search passes per candidate — campaign finance, court records, property filings, social media (including archived/deleted posts), news archives, voting records, public meeting minutes, endorsements, and donor analysis.",
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

interface ValuePillar {
  icon: React.ReactNode;
  name: string;
  scripture: string;
  description: string;
}

const VALUES_PILLARS: ValuePillar[] = [
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    name: "Sanctity of Life",
    scripture: "Jeremiah 1:5",
    description:
      "We assess a candidate's stated positions and actual record on abortion, euthanasia, healthcare access, and policies that affect human mortality. We look for consistency across all life issues, not selective application.",
  },
  {
    icon: <Home size={22} strokeWidth={1.5} />,
    name: "Protection of Family",
    scripture: "Proverbs 22:6",
    description:
      "We evaluate support for parental rights in education, marriage and family policy, child welfare, and economic policies that affect family stability. Personal conduct is considered only where publicly documented and relevant to public trust.",
  },
  {
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    name: "Religious Liberty",
    scripture: "2 Corinthians 3:17",
    description:
      "We examine the candidate's defense of First Amendment freedoms, support for religious expression in public life, conscience protections, and how they balance religious liberty against other rights for people of all faiths.",
  },
  {
    icon: <Scale size={22} strokeWidth={1.5} />,
    name: "Honesty & Integrity",
    scripture: "Proverbs 12:22",
    description:
      "We track verified public statements against the record, review transparency in governance or business dealings, and identify patterns of truthfulness or deception. Campaign claims are fact-checked against independent sources.",
  },
  {
    icon: <HandHeart size={22} strokeWidth={1.5} />,
    name: "Care for the Vulnerable",
    scripture: "Matthew 25:40",
    description:
      "We look at positions on poverty, homelessness, mental health services, care for the elderly and disabled, education access for underserved communities, and personal charitable involvement beyond political positions.",
  },
  {
    icon: <Gavel size={22} strokeWidth={1.5} />,
    name: "Justice & Rule of Law",
    scripture: "Micah 6:8",
    description:
      "We assess respect for constitutional processes, equal application of rules without favoritism, response to corruption (including within their own party), support for fair judicial processes, and criminal justice positions.",
  },
  {
    icon: <Leaf size={22} strokeWidth={1.5} />,
    name: "Stewardship of Resources",
    scripture: "Luke 16:10",
    description:
      "We examine fiscal responsibility with public money, environmental stewardship, responsible use of authority, long-term versus short-term decision making, and personal financial responsibility where publicly relevant.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    name: "Community & Neighborly Love",
    scripture: "Mark 12:31",
    description:
      "We analyze unifying versus divisive rhetoric, treatment of political opponents, civic engagement beyond self-interest, bridge-building across differences, and whether the candidate promotes respectful discourse.",
  },
];

interface SourceTier {
  tier: string;
  icon: React.ReactNode;
  label: string;
  examples: string;
  treatment: string;
  trustColor: string;
  barWidth: string;
}

const SOURCE_TIERS: SourceTier[] = [
  {
    tier: "Tier 1",
    icon: <Star size={16} strokeWidth={1.5} />,
    label: "Primary / Official Sources",
    examples:
      "Government websites (.gov), court records, FEC filings, official meeting minutes, legislative voting records, property and business filings",
    treatment: "Facts from these sources can be stated directly.",
    trustColor: "var(--color-green-flag)",
    barWidth: "100%",
  },
  {
    tier: "Tier 2",
    icon: <Newspaper size={16} strokeWidth={1.5} />,
    label: "Established Journalism",
    examples:
      "Wichita Eagle, Topeka Capital-Journal, Hays Daily News, AP/Reuters, KWCH/KSNW, Ballotpedia (well-sourced entries)",
    treatment: "Generally trustworthy; corroborated when possible.",
    trustColor: "var(--color-teal)",
    barWidth: "80%",
  },
  {
    tier: "Tier 3",
    icon: <MessageSquare size={16} strokeWidth={1.5} />,
    label: "Candidate's Own Statements",
    examples:
      "Campaign websites, verified social media accounts, interview transcripts, press releases",
    treatment:
      "Trustworthy as evidence of what the candidate says — claims within must be independently verified.",
    trustColor: "var(--color-gold)",
    barWidth: "60%",
  },
  {
    tier: "Tier 4",
    icon: <Database size={16} strokeWidth={1.5} />,
    label: "Community & Analysis Sources",
    examples:
      "OpenSecrets, FollowTheMoney, Vote Smart, local blogs, community forums, business review sites",
    treatment:
      "Useful for context and leads; claims verified against Tier 1–2 sources.",
    trustColor: "var(--color-gold-light)",
    barWidth: "40%",
  },
  {
    tier: "Tier 5",
    icon: <Hash size={16} strokeWidth={1.5} />,
    label: "Social Media & Informal",
    examples:
      "Reddit, Facebook groups, Twitter/X threads, anonymous comments, political advocacy sites",
    treatment:
      "Never cited as sole source. Useful for identifying leads and understanding public sentiment.",
    trustColor: "var(--color-slate)",
    barWidth: "20%",
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
              About Elect Righteous
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

            {/* Parallelism note */}
            <div
              className="mt-10 max-w-3xl mx-auto rounded-lg px-6 py-5 flex gap-4 items-start"
              style={{
                backgroundColor: "rgba(28,195,175,0.08)",
                border: "1px solid rgba(28,195,175,0.25)",
              }}
            >
              <CheckCircle2
                size={20}
                strokeWidth={1.5}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--color-teal)" }}
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                <strong style={{ color: "var(--color-navy)" }}>
                  All 15+ search passes run in parallel per candidate,
                </strong>{" "}
                and multiple candidates are researched simultaneously. This
                ensures complete, timely coverage even when there are dozens of
                candidates across many races.
              </p>
            </div>
          </div>
        </section>

        {/* ── VALUES FRAMEWORK ───────────────────────────────────────── */}
        <section
          id="values-framework"
          className="section-white"
          aria-labelledby="values-heading"
        >
          <div className="container-main">
            <div className="text-center mb-4">
              <h2
                id="values-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                Our Values Assessment Framework
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto mb-3"
                style={{ color: "var(--color-slate)" }}
              >
                Every candidate is assessed across 8 Judeo-Christian values
                pillars. Each assessment is evidence-based — every rating cites
                specific public evidence, not assumptions.
              </p>
            </div>

            {/* Important disclaimer */}
            <div
              className="max-w-3xl mx-auto rounded-lg px-6 py-5 mb-12 flex gap-4 items-start"
              style={{
                backgroundColor: "rgba(196,146,42,0.08)",
                border: "1px solid rgba(196,146,42,0.25)",
              }}
            >
              <AlertTriangle
                size={20}
                strokeWidth={1.5}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--color-gold)" }}
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                <strong style={{ color: "var(--color-charcoal)" }}>
                  Important:
                </strong>{" "}
                This framework assesses public record, not the state of
                anyone&rsquo;s soul. We look for patterns over time, not single
                incidents. People change and grow — historical positions that
                were acknowledged and corrected are weighted differently than
                ongoing patterns.
              </p>
            </div>

            {/* 8 pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {VALUES_PILLARS.map((pillar) => (
                <div
                  key={pillar.name}
                  className="flex gap-5 p-6 bg-white rounded-lg shadow-sm border"
                  style={{ borderColor: "rgba(16,64,93,0.08)" }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full"
                    style={{
                      backgroundColor: "rgba(28,195,175,0.10)",
                      color: "var(--color-teal)",
                    }}
                    aria-hidden="true"
                  >
                    {pillar.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3
                        className="text-base font-heading font-bold"
                        style={{ color: "var(--color-navy)" }}
                      >
                        {pillar.name}
                      </h3>
                      <span
                        className="text-xs font-body italic"
                        style={{ color: "var(--color-slate)" }}
                      >
                        {pillar.scripture}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-slate)" }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SOURCE RELIABILITY ─────────────────────────────────────── */}
        <section
          id="source-reliability"
          className="section-light"
          aria-labelledby="sources-heading"
        >
          <div className="container-main">
            <div className="text-center mb-12">
              <h2
                id="sources-heading"
                className="text-3xl md:text-4xl font-heading font-bold mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                Source Reliability Standards
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--color-slate)" }}
              >
                Not all sources are equal. We apply a 5-tier reliability system
                to every piece of information we publish.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {SOURCE_TIERS.map((tier) => (
                <div
                  key={tier.tier}
                  className="bg-white rounded-lg p-6 shadow-sm border"
                  style={{ borderColor: "rgba(16,64,93,0.08)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Tier label */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full"
                        style={{
                          backgroundColor: `${tier.trustColor}15`,
                          color: tier.trustColor,
                        }}
                        aria-hidden="true"
                      >
                        {tier.icon}
                      </div>
                      <span
                        className="text-xs font-heading font-bold uppercase tracking-wider"
                        style={{ color: tier.trustColor }}
                      >
                        {tier.tier}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3
                          className="text-base font-heading font-bold"
                          style={{ color: "var(--color-navy)" }}
                        >
                          {tier.label}
                        </h3>
                        {/* Trust bar */}
                        <div
                          className="hidden sm:flex items-center gap-2"
                          aria-hidden="true"
                        >
                          <span
                            className="text-xs font-body"
                            style={{ color: "var(--color-slate)" }}
                          >
                            Trust
                          </span>
                          <div
                            className="w-24 h-1.5 rounded-full overflow-hidden"
                            style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: tier.barWidth,
                                backgroundColor: tier.trustColor,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <p
                        className="text-sm mb-1.5"
                        style={{ color: "var(--color-slate)" }}
                      >
                        <strong style={{ color: "var(--color-charcoal)" }}>
                          Examples:{" "}
                        </strong>
                        {tier.examples}
                      </p>
                      <p
                        className="text-sm italic"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        {tier.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Two-source rule callout */}
            <div
              className="mt-8 max-w-3xl mx-auto rounded-lg px-6 py-5 flex gap-4 items-start"
              style={{
                backgroundColor: "rgba(28,195,175,0.08)",
                border: "1px solid rgba(28,195,175,0.25)",
              }}
            >
              <CheckCircle2
                size={20}
                strokeWidth={1.5}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--color-teal)" }}
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                <strong style={{ color: "var(--color-navy)" }}>
                  Two-source rule:
                </strong>{" "}
                Any significant claim in our reports must be verified by at
                least two independent sources. Official records always take
                priority over news reports, which take priority over social
                media.
              </p>
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
