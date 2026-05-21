import type { Metadata } from "next";
import {
  Bot,
  CheckCircle2,
  Database,
  FileSearch,
  Layers3,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { ELECTIONS } from "@/data/elections";
import { V2_CANDIDATES } from "@/data/v2";

export const metadata: Metadata = {
  title: "About | Elect Righteous",
  description:
    "How Elect Righteous helps Hays and Kansas voters examine public office, public records, and candidates with source-backed care.",
};

const STANDARDS = [
  {
    icon: <FileSearch size={21} strokeWidth={1.7} />,
    title: "What we use",
    text: "Official filings, meeting records, campaign finance reports, court records, candidate statements, local reporting, and public online observations.",
  },
  {
    icon: <ShieldCheck size={21} strokeWidth={1.7} />,
    title: "How it is checked",
    text: "Candidate claims are cross-referenced against source trails, public records, archived research, and the same issue matrix across the site.",
  },
  {
    icon: <Scale size={21} strokeWidth={1.7} />,
    title: "How bias is reduced",
    text: "Profiles separate statements, actions, finance, online observations, and source limits so a reader can see what is known and what is not.",
  },
  {
    icon: <CheckCircle2 size={21} strokeWidth={1.7} />,
    title: "Corrections welcomed",
    text: "Candidates, campaigns, officials, and voters can submit corrections with documentation. The goal is an accurate public record voters can check.",
  },
];

const RESEARCH_SYSTEM = [
  {
    icon: <Bot size={22} strokeWidth={1.7} />,
    title: "Specialized research agents",
    text: "The project uses many focused agent passes for roster checks, candidate evidence, source trails, social signals, issue summaries, finance notes, faith/community references, legal review, and UI validation.",
  },
  {
    icon: <Layers3 size={22} strokeWidth={1.7} />,
    title: "Cross-reference before publishing",
    text: "Agent outputs are compared against official sources, prior research files, public records, local reporting, and candidate-controlled material before the profile copy is rendered.",
  },
  {
    icon: <Database size={22} strokeWidth={1.7} />,
    title: "Large public record file",
    text: "The live build carries every rendered profile through the same public data shape: source trail, issue matrix, record summary, finance context, online observations, and correction path.",
  },
];

const DATA_POINTS = [
  { label: "profiles", value: V2_CANDIDATES.length },
  { label: "race pages", value: ELECTIONS.length },
  {
    label: "public sources",
    value: V2_CANDIDATES.reduce((sum, candidate) => sum + candidate.sources.length, 0),
  },
  {
    label: "record items",
    value: V2_CANDIDATES.reduce(
      (sum, candidate) => sum + candidate.issues.reduce((issueSum, issue) => issueSum + issue.actions.length, 0),
      0,
    ),
  },
];

const GUIDING_VERSE =
  "But select from all the people some capable, honest men who fear God and hate bribes. Appoint them as leaders.";

export default function AboutPage() {
  return (
    <main className="er-shell min-h-screen" id="main-content">
      <div className="er-grid-bg" aria-hidden="true" />

      <section className="relative overflow-hidden py-16 md:py-24" aria-labelledby="about-heading">
        <div className="container-main relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
            <div className="er-reveal max-w-4xl">
              <p className="er-kicker mb-4">About Elect Righteous</p>
              <h1
                id="about-heading"
                className="font-heading text-4xl font-extrabold leading-[1.02] text-white md:text-6xl"
              >
                Transparency for better voting.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/74">
                Elect Righteous is a voter-intelligence project for Hays, Kansas and Kansas elections.
                The goal is to add transparency, gather the public record in one place, and help
                voters examine candidates for public office with care.
              </p>
            </div>

            <aside className="er-panel er-reveal er-reveal-delay-1 rounded-lg p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/50">Guiding passage</p>
              <blockquote className="mt-3">
                <p className="font-serif text-xl leading-relaxed text-white">
                  &ldquo;{GUIDING_VERSE}&rdquo;
                </p>
                <footer className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.16em] text-teal">
                  Exodus 18:21
                </footer>
              </blockquote>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-16" aria-labelledby="mission-heading">
        <div className="container-main relative z-10">
          <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <div>
              <p className="er-kicker mb-3">Mission</p>
              <h2 id="mission-heading" className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
                Help voters see the record.
              </h2>
            </div>
            <div className="er-panel rounded-lg p-6 md:p-8">
              <div className="grid gap-5 text-base leading-relaxed text-white/74 md:text-lg">
                <p>
                  Local and state elections ask voters to make serious decisions with limited time.
                  Candidate filings, school-board minutes, county records, campaign posts, news stories,
                  and finance reports are scattered across the internet.
                </p>
                <p>
                  This site brings that material together, keeps citations close, and uses the same
                  framework across candidates so a voter can compare people without changing standards
                  from one profile to the next.
                </p>
                <p>
                  Exodus 18:21 gives the lens: capable, honest leaders who fear God and hate bribes.
                  The site does not declare who meets that standard. It gives voters a clearer record
                  so they can judge wisely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-18" aria-labelledby="standard-heading">
        <div className="container-main relative z-10">
          <div className="mb-8 max-w-3xl">
            <p className="er-kicker mb-3">The standard</p>
            <h2 id="standard-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
              What the system checks.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {STANDARDS.map((item, index) => (
              <article key={item.title} className={`er-card er-reveal rounded-lg p-5 er-reveal-delay-${Math.min(index, 3)}`}>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-teal/12 text-teal">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/66">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-18" aria-labelledby="research-heading">
        <div className="container-main relative z-10">
          <div className="mb-8 max-w-3xl">
            <p className="er-kicker mb-3">Research engine</p>
            <h2 id="research-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
              Built from many agent-level checks, not a single summary pass.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              Elect Righteous uses specialized AI research agents to gather, classify, compare, and
              validate public information. Across the project, those passes create thousands of
              agent-level checks against source files, URLs, candidate pages, and rendered output. The
              work is still judged by source quality: official records first, candidate-controlled
              statements next, reliable reporting after that, and social observations clearly labeled
              as observations.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {RESEARCH_SYSTEM.map((item, index) => (
              <article key={item.title} className={`er-card er-reveal rounded-lg p-6 er-reveal-delay-${Math.min(index, 3)}`}>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold/15 text-gold">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-16 pt-8 md:pb-24" aria-label="Research file totals">
        <div className="container-main relative z-10">
          <div className="er-panel er-reveal overflow-hidden rounded-lg">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_28rem]">
              <div className="p-6 md:p-8">
                <p className="er-kicker mb-3">Scale</p>
                <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                  A public record file large enough to compare candidates carefully.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                  The same core structure is used across candidates: identity and ballot status,
                  the 14-issue matrix, public actions, social/online observations, donor and funding
                  notes, worship/community references when public, source trails, and corrections.
                </p>
              </div>
              <dl className="grid border-t border-white/10 sm:grid-cols-2 lg:border-l lg:border-t-0">
                {DATA_POINTS.map((item) => (
                  <div key={item.label} className="border-b border-white/10 p-6 even:sm:border-l lg:even:border-l">
                    <dt className="text-xs uppercase tracking-[0.16em] text-white/45">{item.label}</dt>
                    <dd className="mt-2 font-heading text-4xl font-extrabold text-white">
                      {item.value.toLocaleString()}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
