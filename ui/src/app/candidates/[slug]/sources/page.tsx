import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { getAllCandidateSlugs, getFullCandidateBySlug } from "@/data/candidates";

export function generateStaticParams() {
  return getAllCandidateSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SourcesPage({ params }: PageProps) {
  const { slug } = await params;
  const candidate = getFullCandidateBySlug(slug);

  if (!candidate) {
    notFound();
  }

  const partyLabel =
    candidate.party === "R"
      ? "Republican"
      : candidate.party === "D"
      ? "Democrat"
      : candidate.party === "NP"
      ? "Nonpartisan"
      : "Independent";

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
      <header className="section-navy" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {candidate.sources.length} public sources used in researching this candidate.
              Every claim in the profile traces back to one or more of these URLs.
            </p>
          </div>
        </div>
      </header>

      {/* Sources list */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <ol className="flex flex-col gap-3">
            {candidate.sources.map((s, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm"
                style={{ color: "var(--color-charcoal)" }}
              >
                <span
                  className="flex-shrink-0 font-heading font-bold text-xs pt-0.5 w-6 text-right"
                  style={{ color: "var(--color-slate)" }}
                >
                  {i + 1}.
                </span>
                <div className="min-w-0">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold font-heading inline-flex items-center gap-1 hover:underline break-all"
                    style={{ color: "var(--color-teal-dark)" }}
                  >
                    {s.title}
                    <ExternalLink size={11} className="flex-shrink-0" aria-hidden="true" />
                  </a>
                  <p className="text-xs mt-0.5 break-all" style={{ color: "var(--color-slate)" }}>
                    {s.url}
                  </p>
                </div>
              </li>
            ))}
          </ol>

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
