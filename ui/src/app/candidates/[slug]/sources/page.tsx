import Link from "next/link";
import { ChevronLeft, ExternalLink, FileText, MessageSquare, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { getAllCandidateSlugs, getFullCandidateBySlug } from "@/data/candidates";
import { getAllCandidateV2Slugs, getFullCandidateV2BySlug } from "@/data/v2";
import { getCandidateResearchSources } from "@/lib/candidate-sources";
import { sourceHost } from "@/lib/profile-metrics";
import { normalizePublicCopy } from "@/lib/public-copy";

export function generateStaticParams() {
  return Array.from(new Set([...getAllCandidateSlugs(), ...getAllCandidateV2Slugs()])).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SourcesPage({ params }: PageProps) {
  const { slug } = await params;
  const candidateV2 = getFullCandidateV2BySlug(slug);
  const candidateV1 = getFullCandidateBySlug(slug);
  const candidate = candidateV2 ?? candidateV1;

  if (!candidate) {
    notFound();
  }

  const researchSources = candidateV2
    ? candidateV2.sources.map((source) => ({
        title: source.title,
        url: source.url,
        publication: source.publisher ?? source.tier,
        date: source.accessed,
        tier: source.tier,
        claimsAnchored: source.claimsAnchored,
      }))
    : candidateV1
    ? getCandidateResearchSources(candidateV1).map((source) => ({
        ...source,
        tier: "secondary",
        claimsAnchored: [],
      }))
    : [];

  const partyLabel =
    candidate.party === "R"
      ? "Republican"
      : candidate.party === "D"
      ? "Democrat"
      : candidate.party === "NP"
      ? "Nonpartisan"
      : "Independent";

  const sourceGroups = [
    {
      tier: "primary",
      title: "Primary Records",
      icon: <ShieldCheck size={17} />,
      sources: researchSources.filter((source) => source.tier === "primary"),
    },
    {
      tier: "secondary",
      title: "Reporting and Public Context",
      icon: <FileText size={17} />,
      sources: researchSources.filter((source) => source.tier === "secondary"),
    },
    {
      tier: "social",
      title: "Public Online Activity",
      icon: <MessageSquare size={17} />,
      sources: researchSources.filter((source) => source.tier === "social"),
    },
  ].filter((group) => group.sources.length > 0);

  return (
    <main className="er-shell min-h-screen" id="main-content">
      <div className="er-grid-bg" aria-hidden="true" />
      <div className="er-scanline" aria-hidden="true" />

      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 py-3 text-sm text-white/56">
            <Link href="/" className="text-teal hover:underline">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <Link href="/candidates" className="text-teal hover:underline">
              Candidates
            </Link>
            <span className="opacity-40">/</span>
            <Link href={`/candidates/${candidate.slug}`} className="text-teal hover:underline">
              {candidate.name}
            </Link>
            <span className="opacity-40">/</span>
            <span aria-current="page" className="text-white/72">
              Sources
            </span>
          </nav>
        </div>
      </div>

      <header className="relative z-10 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white/52">
                {partyLabel} - {candidate.position}
              </p>
              <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Sources for {candidate.name}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
                {researchSources.length} public source entries are attached to this profile. Primary records,
                reporting, and public online activity are grouped separately so readers can inspect the record.
              </p>
            </div>

            <div className="er-panel grid grid-cols-3 gap-2 rounded-lg p-3 text-white">
              {sourceGroups.map((group) => (
                <div key={group.tier}>
                  <p className="font-heading text-2xl font-bold">{group.sources.length}</p>
                  <p className="text-xs uppercase tracking-wide text-white/58">{group.tier}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-9">
            {sourceGroups.map((group) => (
              <section key={group.tier} aria-labelledby={`${group.tier}-sources-heading`} className="min-w-0 max-w-full">
                <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h2 id={`${group.tier}-sources-heading`} className="flex min-w-0 items-center gap-2 font-heading text-xl font-bold text-white">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-teal/12 text-teal" aria-hidden="true">
                      {group.icon}
                    </span>
                    {group.title}
                  </h2>
                  <span className="shrink-0 rounded bg-white/[0.08] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white/58">
                    {group.sources.length} sources
                  </span>
                </div>

                <ol className="grid min-w-0 max-w-full gap-3">
                  {group.sources.map((s, i) => (
                    <li
                      key={`${s.url}-${i}`}
                      className="er-card min-w-0 max-w-full rounded-lg p-4"
                    >
                      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p className="mb-1 text-xs uppercase tracking-wide text-white/50">
                            {s.publication || sourceHost(s.url)} - {s.date || "access date not listed"}
                          </p>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex max-w-full items-start gap-1 font-heading font-semibold leading-snug text-teal hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                            style={{ overflowWrap: "anywhere" }}
                          >
                            {normalizePublicCopy(s.title)}
                            <ExternalLink size={12} className="mt-1 flex-shrink-0" aria-hidden="true" />
                          </a>
                          <p className="mt-1 text-xs text-white/46" style={{ overflowWrap: "anywhere" }}>
                            {sourceHost(s.url)}
                          </p>
                        </div>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/12 px-3 text-xs font-heading font-bold uppercase tracking-wide text-white/72 transition hover:border-teal/60 hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                        >
                          Open
                        </a>
                      </div>
                      {s.claimsAnchored.length > 0 && (
                        <ul className="mt-3 grid gap-1 border-t border-white/10 pt-3">
                          {s.claimsAnchored
                            .map((claim) => normalizePublicCopy(claim))
                            .filter(Boolean)
                            .slice(0, 3)
                            .map((claim, claimIndex) => (
                              <li key={`${claim}-${claimIndex}`} className="text-sm leading-relaxed text-white/64 [overflow-wrap:anywhere]">
                                {claim}
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <Link
              href={`/candidates/${candidate.slug}`}
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-white/78 transition hover:text-teal"
            >
              <ChevronLeft size={15} aria-hidden="true" />
              Back to {candidate.name}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
