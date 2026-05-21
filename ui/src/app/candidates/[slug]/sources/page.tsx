import Link from "next/link";
import { ChevronLeft, ExternalLink, FileText, ShieldCheck, MessageSquare } from "lucide-react";
import { notFound } from "next/navigation";
import { getAllCandidateSlugs, getFullCandidateBySlug } from "@/data/candidates";
import { getAllCandidateV2Slugs, getFullCandidateV2BySlug } from "@/data/v2";
import { getCandidateResearchSources } from "@/lib/candidate-sources";
import { sourceHost } from "@/lib/profile-metrics";
import { normalizePublicCopy } from "@/lib/public-copy";

export function generateStaticParams() {
  return Array.from(new Set([...getAllCandidateSlugs(), ...getAllCandidateV2Slugs()]))
    .map((slug) => ({ slug }));
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
    ? getCandidateResearchSources(candidateV1)
        .map((source) => ({
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
    <main>
      {/* Breadcrumb */}
      <div
        className="border-b"
        style={{ backgroundColor: "var(--color-light)", borderColor: "#e2e8f0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 py-3 text-sm font-body flex-wrap"
            style={{ color: "var(--color-slate)" }}
          >
            <Link href="/" className="hover:underline" style={{ color: "var(--color-teal-dark)" }}>
              Home
            </Link>
            <span className="opacity-40">/</span>
            <Link href="/candidates" className="hover:underline" style={{ color: "var(--color-teal-dark)" }}>
              Candidates
            </Link>
            <span className="opacity-40">/</span>
            <Link
              href={`/candidates/${candidate.slug}`}
              className="hover:underline"
              style={{ color: "var(--color-teal-dark)" }}
            >
              {candidate.name}
            </Link>
            <span className="opacity-40">/</span>
            <span aria-current="page" style={{ color: "var(--color-charcoal)" }}>
              Sources
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="section-navy" style={{ paddingTop: "2.5rem", paddingBottom: "2.75rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <p
              className="font-heading font-semibold text-sm uppercase tracking-widest mb-2"
              style={{ color: "rgba(246,246,246,0.55)" }}
            >
              {partyLabel} · {candidate.position}
            </p>
            <h1
              className="font-heading font-bold text-white leading-tight mb-2"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Sources for {candidate.name}
            </h1>
            <p className="text-base" style={{ color: "rgba(246,246,246,0.70)" }}>
              {researchSources.length} public sources used in researching this candidate.
              Every claim in the profile traces back to one or more of these URLs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-white">
            {sourceGroups.map((group) => (
              <div key={group.tier}>
                <p className="font-heading text-2xl font-bold">{group.sources.length}</p>
                <p className="text-xs uppercase tracking-wide text-white/60">{group.tier}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </header>

      {/* Sources list */}
      <div className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="grid gap-8">
            {sourceGroups.map((group) => (
              <section key={group.tier} aria-labelledby={`${group.tier}-sources-heading`} className="min-w-0 max-w-full">
                <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h2
                    id={`${group.tier}-sources-heading`}
                    className="flex min-w-0 items-center gap-2 font-heading text-xl font-bold"
                    style={{ color: "var(--color-navy)" }}
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-teal/10 text-teal-dark" aria-hidden="true">
                      {group.icon}
                    </span>
                    {group.title}
                  </h2>
                  <span className="shrink-0 rounded bg-slate-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-slate)" }}>
                    {group.sources.length} sources
                  </span>
                </div>

                <ol className="grid min-w-0 max-w-full gap-3">
                  {group.sources.map((s, i) => (
                    <li
                      key={`${s.url}-${i}`}
                      className="min-w-0 max-w-full rounded-lg border bg-white p-4 shadow-sm"
                      style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
                    >
                      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p className="mb-1 text-xs uppercase tracking-wide" style={{ color: "var(--color-slate)" }}>
                            {s.publication || sourceHost(s.url)} · {s.date || "access date not listed"}
                          </p>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex max-w-full items-start gap-1 font-heading font-semibold leading-snug hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                            style={{ color: "var(--color-teal-dark)", overflowWrap: "anywhere" }}
                          >
                            {normalizePublicCopy(s.title)}
                            <ExternalLink size={12} className="mt-1 flex-shrink-0" aria-hidden="true" />
                          </a>
                          <p className="mt-1 text-xs" style={{ color: "var(--color-slate)", overflowWrap: "anywhere" }}>
                            {sourceHost(s.url)}
                          </p>
                        </div>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 items-center justify-center rounded-md border px-3 text-xs font-heading font-bold uppercase tracking-wide transition hover:bg-navy hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                          style={{ borderColor: "rgba(16, 64, 93, 0.14)", color: "var(--color-navy)" }}
                        >
                          Open
                        </a>
                      </div>
                      {s.claimsAnchored.length > 0 && (
                        <ul className="mt-3 grid gap-1 border-t pt-3" style={{ borderColor: "rgba(16, 64, 93, 0.10)" }}>
                          {s.claimsAnchored
                            .map((claim) => normalizePublicCopy(claim))
                            .filter(Boolean)
                            .slice(0, 3)
                            .map((claim, claimIndex) => (
                              <li key={`${claim}-${claimIndex}`} className="text-sm leading-relaxed [overflow-wrap:anywhere]" style={{ color: "var(--color-charcoal)" }}>
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

          {/* Back link */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e2e8f0" }}>
            <Link
              href={`/candidates/${candidate.slug}`}
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-colors duration-200 hover:opacity-75"
              style={{ color: "var(--color-navy)" }}
            >
              <ChevronLeft size={15} aria-hidden="true" />
              Back to {candidate.name}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
