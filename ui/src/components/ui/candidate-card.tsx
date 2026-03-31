import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";
import Badge from "./badge";
import ConsistencyBadge from "./consistency-badge";

type ConsistencyRating = "HIGH" | "MODERATE" | "LOW" | "INSUFFICIENT_DATA";

interface CandidateCardProps {
  name: string;
  position: string;
  party: string;
  incumbent: boolean;
  occupation: string;
  consistencyRating: ConsistencyRating;
  slug: string;
  className?: string;
}

export default function CandidateCard({
  name,
  position,
  party,
  incumbent,
  occupation,
  consistencyRating,
  slug,
  className = "",
}: CandidateCardProps) {
  return (
    <article className={`card group ${className}`}>
      <div className="p-6 flex flex-col h-full">
        {/* Party + Incumbent badges */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <Badge variant="party">{party}</Badge>
          {incumbent && <Badge variant="status">Incumbent</Badge>}
          {!incumbent && <Badge variant="status">Challenger</Badge>}
        </div>

        {/* Name */}
        <h3 className="font-heading font-bold text-navy text-xl leading-tight mb-1 group-hover:text-teal transition-colors duration-200">
          {name}
        </h3>

        {/* Position */}
        <p className="text-sm font-semibold text-teal-dark uppercase tracking-wide mb-3">
          {position}
        </p>

        {/* Occupation */}
        <div className="flex items-center gap-2 text-sm text-slate mb-5">
          <Briefcase size={14} className="shrink-0 text-unknown" aria-hidden="true" />
          <span>{occupation}</span>
        </div>

        {/* Consistency rating */}
        <div className="mb-6">
          <p className="text-xs text-unknown uppercase tracking-widest font-heading mb-2">
            Record Consistency
          </p>
          <ConsistencyBadge rating={consistencyRating} />
        </div>

        {/* CTA */}
        <Link
          href={`/candidates/${slug}`}
          className="btn-primary inline-flex items-center justify-center gap-2 text-sm mt-auto"
          aria-label={`View full dossier for ${name}`}
        >
          View Dossier
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
