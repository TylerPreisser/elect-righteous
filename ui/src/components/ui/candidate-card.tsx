import Link from "next/link";
import { ArrowRight, Briefcase, FileText, ListChecks, MessageSquare } from "lucide-react";

interface CandidateCardProps {
  name: string;
  position: string;
  party: string;
  incumbent: boolean;
  occupation: string;
  slug: string;
  oneSentence?: string;
  sourceCount?: number;
  issueCount?: number;
  actionCount?: number;
  socialCount?: number;
  className?: string;
}

export default function CandidateCard({
  name,
  position,
  party,
  incumbent,
  occupation,
  slug,
  oneSentence,
  sourceCount,
  issueCount,
  actionCount,
  socialCount,
  className = "",
}: CandidateCardProps) {
  const partyLabel =
    party === "R"
      ? "Republican"
      : party === "D"
      ? "Democrat"
      : party === "NP"
      ? "Nonpartisan"
      : "Independent";

  const metrics = [
    typeof sourceCount === "number" ? { icon: FileText, label: "sources", value: sourceCount } : undefined,
    typeof actionCount === "number" ? { icon: ListChecks, label: "records", value: actionCount } : undefined,
    typeof socialCount === "number" ? { icon: MessageSquare, label: "online", value: socialCount } : undefined,
  ].filter((item): item is { icon: typeof FileText; label: string; value: number } => Boolean(item));

  return (
    <Link
      href={`/candidates/${slug}`}
      className={`group block h-full rounded-lg border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_18px_45px_rgba(16,64,93,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${className}`}
      style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
      aria-label={`Open dossier for ${name}`}
    >
      <article className="flex min-h-[15.5rem] h-full flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex max-w-full items-center rounded px-2.5 py-1 text-[0.68rem] font-heading font-bold uppercase tracking-wider"
            style={{ backgroundColor: "rgba(16, 64, 93, 0.07)", color: "var(--color-navy)" }}
          >
            {partyLabel}
          </span>
          {incumbent && (
            <span
              className="inline-flex items-center rounded px-2.5 py-1 text-[0.68rem] font-heading font-bold uppercase tracking-wider"
              style={{ backgroundColor: "rgba(28, 195, 175, 0.10)", color: "var(--color-teal-dark)" }}
            >
              In office
            </span>
          )}
        </div>

        <h3
          className="mb-2 font-heading font-bold text-navy text-xl leading-tight transition-colors duration-200 group-hover:text-teal"
        >
          {name}
        </h3>

        <p
          className="mb-3 text-sm font-semibold leading-snug sm:min-h-[2.25rem]"
          style={{ color: "var(--color-teal-dark)" }}
        >
          {position}
        </p>

        <div
          className="mb-5 flex items-start gap-2 text-sm leading-snug sm:min-h-[2.75rem]"
          style={{ color: "var(--color-slate)" }}
        >
          <Briefcase size={14} className="mt-0.5 shrink-0 opacity-60" aria-hidden="true" />
          <span>{occupation || "Public office / campaign profile"}</span>
        </div>

        {oneSentence ? (
          <p
            className="mb-5 flex-1 text-sm leading-relaxed"
            style={{
              color: "var(--color-charcoal)",
              fontFamily: "var(--font-serif)",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {oneSentence}
          </p>
        ) : (
          <div className="flex-1" />
        )}

        {metrics.length > 0 && (
          <div
            className="mt-auto grid grid-cols-3 gap-2 border-t pt-4"
            style={{ borderColor: "rgba(16, 64, 93, 0.10)" }}
            aria-label="Dossier metrics"
          >
            {metrics.map(({ icon: Icon, label, value }) => (
              <span key={label} className="min-w-0 rounded bg-slate-50 px-2 py-2">
                <span className="flex items-center gap-1.5 font-heading text-sm font-bold" style={{ color: "var(--color-navy)" }}>
                  <Icon size={13} className="shrink-0" aria-hidden="true" />
                  {value}
                </span>
                <span className="block truncate text-[0.68rem] uppercase tracking-wide" style={{ color: "var(--color-slate)" }}>
                  {label}
                </span>
              </span>
            ))}
          </div>
        )}

        {typeof issueCount === "number" && (
          <span
            className="mt-4 inline-flex min-h-10 items-center justify-between gap-3 rounded-md px-3 text-sm font-heading font-bold transition-colors duration-200 group-hover:bg-navy group-hover:text-white"
            style={{ backgroundColor: "rgba(16, 64, 93, 0.07)", color: "var(--color-navy)" }}
            aria-hidden="true"
          >
            {issueCount} issue dossier
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        )}
      </article>
    </Link>
  );
}
