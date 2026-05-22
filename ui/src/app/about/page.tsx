import type { Metadata } from "next";
import {
  Bot,
  Database,
  FileSearch,
  GitBranch,
  Layers3,
  Scale,
  Search,
  ShieldCheck,
} from "lucide-react";
import { ELECTIONS } from "@/data/elections";
import { V2_CANDIDATES } from "@/data/v2";

export const metadata: Metadata = {
  title: "About | Elect Righteous",
  description:
    "How Elect Righteous helps Hays and Kansas voters examine public office, public records, and candidates with source-backed care.",
};

const AGENT_PIPELINE = [
  {
    phase: "Step 1",
    icon: <Search size={21} strokeWidth={1.7} />,
    title: "Find the races and classify the people",
    text: "Roster agents check Secretary of State filings, FEC records, KPDC records, county documents, city pages, school-board records, and election calendars. Filed candidates, current officials, off-cycle officeholders, administrators, and ballot measures are kept in separate categories.",
  },
  {
    phase: "Step 2",
    icon: <FileSearch size={21} strokeWidth={1.7} />,
    title: "Extract the evidence before writing",
    text: "Evidence-mining agents read the candidate folders, old research dumps, social harvests, reports, race files, source trails, and rendered data. Facts are pulled into evidence matrices before public prose is written.",
  },
  {
    phase: "Step 3",
    icon: <Layers3 size={21} strokeWidth={1.7} />,
    title: "Cross-check sources and online signals",
    text: "Source-tier agents separate official records, candidate-controlled statements, reliable reporting, social evidence, and internal memory. Social observations such as posts, likes, follows, and comments are labeled as observations unless the candidate directly made the statement.",
  },
  {
    phase: "Step 4",
    icon: <Database size={21} strokeWidth={1.7} />,
    title: "Put every candidate through the same issue matrix",
    text: "Each profile uses the same 14 issues. When no source-backed statement or action is found, the profile says that plainly instead of filling the gap with party assumptions.",
  },
  {
    phase: "Step 5",
    icon: <Scale size={21} strokeWidth={1.7} />,
    title: "Write through a disciplined Christian lens",
    text: "The prompt files direct the workflow to notice truthfulness, stewardship, bribery, care for vulnerable people, public faith references, and consistency. That lens shapes what gets checked, while the public writing stays reportorial: no endorsements, no faith-based policy guesses, and no partisan shortcuts.",
  },
  {
    phase: "Step 6",
    icon: <ShieldCheck size={21} strokeWidth={1.7} />,
    title: "Review, validate, and publish",
    text: "Editorial, legal-accuracy, symmetry, source-health, mobile-display, public-copy, build, GitHub Pages, and Cloudflare checks all sit at the end of the process before changes are treated as shipped.",
  },
];

const RESEARCH_SYSTEM = [
  {
    icon: <Bot size={22} strokeWidth={1.7} />,
    title: "Custom prompt files",
    text: "The workflow is built around specialized prompt files and agent roles, not one generic summary request. Each role has a narrow job: roster audit, evidence extraction, source validation, social analysis, issue building, profile writing, review, validation, or deployment.",
  },
  {
    icon: <GitBranch size={22} strokeWidth={1.7} />,
    title: "Model-assisted passes with a paper trail",
    text: "The system uses custom large-language-model workflows for extraction, classification, and writing support, but the durable record lives on disk: evidence matrices, source audits, issue matrices, social matrices, validation reports, and handoffs that the next run can inspect.",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.7} />,
    title: "Bias discipline",
    text: "The agents are instructed to apply the same source order, issue list, caveats, and symmetry test to every person. The goal is not to erase worldview; it is to keep worldview from becoming party favoritism or unsourced inference.",
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
                A free public record file for serious voters.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/74">
                Elect Righteous gathers the candidate information Hays and Kansas voters would
                otherwise have to hunt across filings, meeting records, campaign pages, finance
                reports, local coverage, and public online activity.
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
                Make local voting easier to take seriously.
              </h2>
            </div>
            <div className="er-panel rounded-lg p-6 md:p-8">
              <div className="grid gap-5 text-base leading-relaxed text-white/74 md:text-lg">
                <p>
                  Local and state elections ask voters to make serious decisions with limited time,
                  and the useful facts are scattered. This site puts those facts in one organized
                  place so ordinary voters can compare candidates without spending hundreds of
                  hours searching the internet.
                </p>
                <p>
                  The role is simple: make information easier to find, keep sources close, encourage
                  people to vote, and give readers room to weigh candidates according to conscience,
                  Scripture, and the values they believe should guide public office.
                </p>
                <p>
                  Elect Righteous does not endorse candidates or tell voters what conclusion to
                  reach. It organizes public evidence, names source limits, welcomes documented
                  corrections, and lets the reader judge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-18" aria-labelledby="research-engine-heading">
        <div className="container-main relative z-10">
          <div className="mb-8 max-w-3xl">
            <p className="er-kicker mb-3">Research engine</p>
            <h2 id="research-engine-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
              Many focused agents, one public record.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              The research process is built from specialized agent prompts and large-language-model
              passes. Each pass has a defined job, and each output is checked against the files and
              sources that came before it.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {AGENT_PIPELINE.map((item, index) => (
              <article key={item.title} className={`er-card er-reveal rounded-lg p-6 er-reveal-delay-${Math.min(index % 4, 3)}`}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-teal/12 text-teal">
                    {item.icon}
                  </span>
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-teal">
                    {item.phase}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
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
