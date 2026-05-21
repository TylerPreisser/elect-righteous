import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Database,
  FileText,
  Landmark,
  MapPin,
  MessageSquare,
  ScrollText,
  Search,
  ShieldCheck,
} from "lucide-react";
import { ELECTIONS } from "@/data/elections";
import { V2_CANDIDATES } from "@/data/v2";

const CATEGORIES = [
  {
    label: "Federal",
    hash: "federal",
    icon: <Landmark size={24} strokeWidth={1.6} />,
    description: "U.S. Senate and Kansas House District 1 races.",
  },
  {
    label: "State",
    hash: "state",
    icon: <Building2 size={24} strokeWidth={1.6} />,
    description: "Statewide offices, Kansas House seats, and State Board of Education.",
  },
  {
    label: "Ballot Measures",
    hash: "ballot-measures",
    icon: <ScrollText size={24} strokeWidth={1.6} />,
    description: "Constitutional questions and statewide amendments.",
  },
  {
    label: "Local",
    hash: "local-2026",
    icon: <MapPin size={24} strokeWidth={1.6} />,
    description: "Hays, Ellis County, and USD 489 public-office context.",
  },
];

const SOURCE_STRIP = [
  "candidate filings",
  "meeting records",
  "campaign statements",
  "finance reports",
  "local reporting",
  "public online activity",
  "official biographies",
  "ballot language",
];

const METHOD_CARDS = [
  {
    icon: <ShieldCheck size={26} strokeWidth={1.6} />,
    title: "Roster verified before writing",
    description:
      "Profiles separate filed candidates, current officials, off-cycle officeholders, administrators, and ballot measures.",
  },
  {
    icon: <FileText size={26} strokeWidth={1.6} />,
    title: "Every claim has a trail",
    description:
      "Sources stay close enough for readers to inspect the original record instead of relying on a summary alone.",
  },
  {
    icon: <MessageSquare size={26} strokeWidth={1.6} />,
    title: "Online signals stay in context",
    description:
      "Posts, follows, likes, and comments are described as public observations unless the candidate directly made a statement.",
  },
];

export default function HomePage() {
  const sourceCount = V2_CANDIDATES.reduce((sum, candidate) => sum + candidate.sources.length, 0);
  const actionCount = V2_CANDIDATES.reduce(
    (sum, candidate) => sum + candidate.issues.reduce((issueSum, issue) => issueSum + issue.actions.length, 0),
    0,
  );
  const socialCount = V2_CANDIDATES.reduce(
    (sum, candidate) =>
      sum + candidate.issues.reduce((issueSum, issue) => issueSum + issue.socialSignals.length, 0),
    0,
  );

  return (
    <main className="er-shell min-h-screen" id="main-content">
      <div className="er-grid-bg" aria-hidden="true" />
      <div className="er-scanline" aria-hidden="true" />

      <section className="relative overflow-hidden py-16 md:py-24" aria-label="Election intelligence command center">
        <div className="container-main relative z-10">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
            <div className="er-reveal">
              <p className="er-kicker mb-4">Election intelligence for Hays, Kansas</p>
              <h1 className="max-w-5xl font-heading text-4xl font-extrabold leading-[1.02] text-white md:text-6xl">
                A source-backed civic dossier for the Kansas 2026 ballot.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/74">
                Candidate statements, public actions, campaign finance, race context, and linked
                sources in one voter guide built for inspection.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/candidates"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal px-5 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Search size={17} aria-hidden="true" />
                  Search profiles
                </Link>
                <Link
                  href="/elections"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:border-teal/70 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Database size={17} aria-hidden="true" />
                  Browse races
                </Link>
              </div>
            </div>

            <aside className="er-panel er-reveal er-reveal-delay-1 rounded-lg p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-white/78">
                  Research archive
                </span>
                <span className="rounded bg-teal/15 px-2 py-1 text-xs font-semibold text-teal">
                  2026 cycle
                </span>
              </div>
              <dl className="grid gap-3">
                {[
                  ["Profiles", V2_CANDIDATES.length.toLocaleString()],
                  ["Races", ELECTIONS.length.toLocaleString()],
                  ["Public sources", sourceCount.toLocaleString()],
                  ["Record items", actionCount.toLocaleString()],
                  ["Online observations", socialCount.toLocaleString()],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 rounded border border-white/[0.08] bg-white/[0.045] px-3 py-2.5">
                    <dt className="text-xs uppercase tracking-wide text-white/52">{label}</dt>
                    <dd className="font-heading text-2xl font-bold text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 py-4" aria-label="Sources reviewed">
        <div className="flex w-[200%] gap-8 er-marquee">
          {[...SOURCE_STRIP, ...SOURCE_STRIP, ...SOURCE_STRIP, ...SOURCE_STRIP].map((item, index) => (
            <span key={`${item}-${index}`} className="whitespace-nowrap font-heading text-sm font-bold uppercase tracking-[0.18em] text-white/42">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="elections" className="relative py-14 md:py-20" aria-labelledby="elections-heading">
        <div className="container-main relative z-10">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="er-kicker mb-3">Start with the ballot</p>
              <h2 id="elections-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
                Find the office, then inspect the people.
              </h2>
            </div>
            <Link
              href="/elections"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/14 px-4 font-heading text-sm font-bold uppercase tracking-wide text-white/76 transition hover:border-teal/70 hover:text-white"
            >
              All election pages
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat, index) => (
              <Link
                key={cat.hash}
                href={`/elections#${cat.hash}`}
                className={`er-card er-reveal rounded-lg p-5 er-reveal-delay-${Math.min(index, 3)}`}
                aria-label={`View ${cat.label} elections`}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-teal/12 text-teal">
                  {cat.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{cat.label}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-white/64">{cat.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-teal">
                  View races
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-20" aria-labelledby="method-heading">
        <div className="container-main relative z-10">
          <div className="grid gap-8 lg:grid-cols-[22rem_minmax(0,1fr)]">
            <div>
              <p className="er-kicker mb-3">Research discipline</p>
              <h2 id="method-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
                Built for public trust, not campaign polish.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/66">
                The point is not to make candidates look better or worse. The point is to make the public
                record easier to understand and easier to check.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {METHOD_CARDS.map((item) => (
                <article key={item.title} className="er-panel rounded-lg p-5">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold/12 text-gold">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/64">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 pt-10 md:pb-24" aria-labelledby="office-heading">
        <div className="container-main relative z-10">
          <div className="er-panel overflow-hidden rounded-lg">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_22rem]">
              <div className="p-6 md:p-8">
                <p className="er-kicker mb-3">Office context</p>
                <h2 id="office-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
                  What are they running for, and what does that office do?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
                  Race pages explain the office in plain English before listing candidates. That matters
                  for local government, where a commissioner, school-board member, county official, and
                  appointed administrator can have very different authority.
                </p>
              </div>
              <div className="grid border-t border-white/10 lg:border-l lg:border-t-0">
                <div className="border-b border-white/10 p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/46">Voter lens</p>
                  <p className="mt-2 font-heading text-2xl font-bold text-white">Role before rhetoric</p>
                </div>
                <div className="border-b border-white/10 p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/46">Evidence lens</p>
                  <p className="mt-2 font-heading text-2xl font-bold text-white">Action before assumption</p>
                </div>
                <Link
                  href="/about"
                  className="group flex items-center justify-between gap-4 p-6 font-heading text-sm font-bold uppercase tracking-wide text-teal transition hover:bg-white/[0.08]"
                >
                  Read the methodology
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
