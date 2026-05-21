import Link from "next/link";
import { ArrowRight, FileText, ListChecks, MessageSquare } from "lucide-react";
import { normalizePublicCopy } from "@/lib/public-copy";

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
      aria-label={`Open profile for ${name}`}
    >
      <article className="flex min-h-[12.25rem] h-full flex-col p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex max-w-full items-center rounded px-2 py-0.5 text-[0.66rem] font-heading font-bold uppercase tracking-wider"
            style={{ backgroundColor: "rgba(16, 64, 93, 0.07)", color: "var(--color-navy)" }}
          >
            {partyLabel}
          </span>
          {incumbent && (
            <span
              className="inline-flex items-center rounded px-2 py-0.5 text-[0.66rem] font-heading font-bold uppercase tracking-wider"
              style={{ backgroundColor: "rgba(28, 195, 175, 0.10)", color: "var(--color-teal-dark)" }}
            >
              In office
            </span>
          )}
        </div>

        <h3
          className="mb-2 font-heading font-bold text-navy text-lg leading-tight transition-colors duration-200 group-hover:text-teal"
        >
          {name}
        </h3>

        <p
          className="mb-3 text-sm font-semibold leading-snug"
          style={{ color: "var(--color-teal-dark)" }}
        >
          {position}
        </p>

        {occupation && (
          <p
            className="mb-4 text-xs leading-snug"
            style={{ color: "var(--color-slate)" }}
          >
            {normalizePublicCopy(occupation)}
          </p>
        )}

        {oneSentence ? (
          <p
            className="mb-4 flex-1 text-sm leading-relaxed"
            style={{
              color: "var(--color-charcoal)",
              fontFamily: "var(--font-serif)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {normalizePublicCopy(oneSentence)}
          </p>
        ) : (
          <div className="flex-1" />
        )}

        {metrics.length > 0 && (
          <div
            className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t pt-3"
            style={{ borderColor: "rgba(16, 64, 93, 0.10)" }}
            aria-label="Profile metrics"
          >
            {metrics.map(({ icon: Icon, label, value }) => (
              <span key={label} className="inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--color-slate)" }}>
                <Icon size={12} className="shrink-0 text-teal" aria-hidden="true" />
                <strong className="font-heading text-sm" style={{ color: "var(--color-navy)" }}>
                  {value}
                </strong>
                <span className="uppercase tracking-wide">
                  {label}
                </span>
              </span>
            ))}
          </div>
        )}

        {typeof issueCount === "number" && (
          <span
            className="mt-3 inline-flex items-center gap-2 text-sm font-heading font-bold transition-colors duration-200 group-hover:text-teal"
            style={{ color: "var(--color-navy)" }}
            aria-hidden="true"
          >
            See more
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        )}
      </article>
    </Link>
  );
}
