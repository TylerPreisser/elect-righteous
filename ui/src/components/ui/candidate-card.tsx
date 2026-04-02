import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";
import Badge from "./badge";

interface CandidateCardProps {
  name: string;
  position: string;
  party: string;
  incumbent: boolean;
  occupation: string;
  slug: string;
  oneSentence?: string;
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
  className = "",
}: CandidateCardProps) {
  const partyLabel =
    party === "R"
      ? "Republican"
      : party === "D"
      ? "Democrat"
      : party === "NP"
      ? "Nonpartisan"
      : party;

  return (
    <article className={`card group ${className}`}>
      <div className="p-6 flex flex-col h-full">
        {/* Party + Incumbent */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span
            className="text-xs font-heading font-semibold tracking-wide"
            style={{ color: "var(--color-slate)" }}
          >
            {partyLabel}
            {incumbent && (
              <span
                className="ml-2 font-normal"
                style={{ color: "var(--color-teal-dark)" }}
              >
                &middot; Incumbent
              </span>
            )}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-heading font-bold text-navy text-xl leading-tight mb-1 group-hover:text-teal transition-colors duration-200">
          {name}
        </h3>

        {/* Position */}
        <p
          className="text-sm font-semibold uppercase tracking-wide mb-3"
          style={{ color: "var(--color-teal-dark)" }}
        >
          {position}
        </p>

        {/* Occupation */}
        <div
          className="flex items-center gap-2 text-sm mb-4"
          style={{ color: "var(--color-slate)" }}
        >
          <Briefcase size={14} className="shrink-0 opacity-60" aria-hidden="true" />
          <span>{occupation}</span>
        </div>

        {/* One-sentence description */}
        {oneSentence && (
          <p
            className="text-sm leading-relaxed mb-5 flex-1"
            style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-serif)" }}
          >
            {oneSentence}
          </p>
        )}

        {/* CTA */}
        <Link
          href={`/candidates/${slug}`}
          className="btn-primary inline-flex items-center justify-center gap-2 text-sm mt-auto"
          aria-label={`View full dossier for ${name}`}
        >
          Read More
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
