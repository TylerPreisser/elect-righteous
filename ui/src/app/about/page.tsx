import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Elect Righteous",
  description:
    "How Elect Righteous helps Hays and Kansas voters examine public office, public records, and candidates with source-backed care.",
};

const STANDARDS = [
  {
    icon: <FileSearch size={21} strokeWidth={1.7} />,
    title: "Public record first",
    text: "Official filings, meeting records, campaign finance reports, court records, and direct candidate statements carry the most weight.",
  },
  {
    icon: <ShieldCheck size={21} strokeWidth={1.7} />,
    title: "Words and actions separated",
    text: "A campaign answer, a vote, a board comment, and a public online interaction are different kinds of evidence, so profiles label them differently.",
  },
  {
    icon: <Scale size={21} strokeWidth={1.7} />,
    title: "No endorsements",
    text: "The site does not tell voters who is righteous, biblical, conservative, liberal, or preferable. It shows the record and the sources.",
  },
  {
    icon: <CheckCircle2 size={21} strokeWidth={1.7} />,
    title: "Corrections welcomed",
    text: "Candidates, campaigns, officials, and voters can submit corrections with documentation. The goal is truthful public record, not winning an argument.",
  },
];

const METHOD = [
  "Verify the roster from official election sources before treating anyone as a candidate.",
  "Read existing research, source trails, filings, local reporting, and candidate-controlled material before writing.",
  "Build every profile around the same issue matrix so voters can compare candidates without changing standards.",
  "Keep online observations as context unless the candidate directly made the statement or action.",
  "Mark thin public records plainly instead of filling gaps with party assumptions or private speculation.",
];

const WILL_NOT_DO = [
  "Infer a policy position from church attendance, family background, party label, or private rumor.",
  "Treat a follow, like, share, or group membership as a confirmed belief.",
  "Publish private information or login-only material.",
  "Hide sources when a claim is important to the profile.",
];

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
                Public office is a trust. Voters deserve receipts.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/74">
                Elect Righteous is a voter-intelligence project for Hays, Kansas and Kansas elections.
                It organizes public records, campaign statements, local reporting, finance data, and
                observable online activity into sourced profiles ordinary voters can inspect before
                they cast a ballot.
              </p>
            </div>

            <aside className="er-panel er-reveal er-reveal-delay-1 rounded-lg p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/50">Guiding passage</p>
              <blockquote className="mt-3">
                <p className="font-serif text-xl leading-relaxed text-white">
                  "For rulers are not a terror to good works, but to the evil... for he is the
                  minister of God to thee for good."
                </p>
                <footer className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.16em] text-teal">
                  Romans 13:3-4, KJV
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
                Make public power easier to examine.
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
                  The project is shaped by Christian civic concern: government should restrain evil,
                  reward good, and serve the public rather than itself. That conviction guides the work,
                  but it is not used as a shortcut for judging candidates.
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
              Fair, sourced, and readable.
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

      <section className="relative py-12 md:py-18" aria-labelledby="method-heading">
        <div className="container-main relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
            <div className="er-panel rounded-lg p-6 md:p-8">
              <div className="mb-7 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold/15 text-gold">
                  <Landmark size={21} />
                </span>
                <div>
                  <p className="er-kicker">Method</p>
                  <h2 id="method-heading" className="font-heading text-2xl font-bold text-white">
                    How a profile earns trust
                  </h2>
                </div>
              </div>
              <ol className="grid gap-4" role="list">
                {METHOD.map((item, index) => (
                  <li key={item} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] font-heading text-sm font-bold text-teal">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-white/72">{item}</p>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="er-card rounded-lg p-6">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/[0.08] text-teal">
                <BookOpen size={21} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">What the site will not do</h2>
              <ul className="mt-5 grid gap-3" role="list">
                {WILL_NOT_DO.map((item) => (
                  <li key={item} className="border-t border-white/10 pt-3 text-sm leading-relaxed text-white/68 first:border-t-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative pb-16 pt-8 md:pb-24" aria-label="Explore the guide">
        <div className="container-main relative z-10">
          <div className="er-panel overflow-hidden rounded-lg">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_22rem]">
              <div className="p-6 md:p-8">
                <p className="er-kicker mb-3">Start reading</p>
                <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                  Open the races, then inspect the source trail.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                  Each candidate profile includes background, issue summaries, public actions,
                  online observations where available, finance notes, faith/community information
                  when public, and linked sources.
                </p>
              </div>
              <div className="grid border-t border-white/10 lg:border-l lg:border-t-0">
                <Link
                  href="/elections"
                  className="group flex items-center justify-between gap-4 border-b border-white/10 p-6 font-heading text-lg font-bold text-white transition hover:bg-white/[0.08]"
                >
                  Explore elections
                  <ArrowRight size={19} className="transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/candidates"
                  className="group flex items-center justify-between gap-4 p-6 font-heading text-lg font-bold text-white transition hover:bg-white/[0.08]"
                >
                  View candidates
                  <ArrowRight size={19} className="transition group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://electrighteous.com/"
                  className="group flex items-center justify-between gap-4 border-t border-white/10 p-6 text-sm font-semibold text-white/60 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Production site
                  <ExternalLink size={16} className="transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
