import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Badge from "./badge";

interface ElectionCardProps {
  name: string;
  date: string;
  type: string;
  candidateCount: number;
  jurisdiction: string;
  slug: string;
  plainEnglish?: string;
  className?: string;
}

function formatDate(dateStr: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateStr + "T12:00:00"));
  } catch {
    return dateStr;
  }
}

export default function ElectionCard({
  name,
  date,
  type,
  candidateCount,
  jurisdiction,
  slug,
  plainEnglish,
  className = "",
}: ElectionCardProps) {
  return (
    <article className={`card group ${className}`}>
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <Badge variant="type" className="shrink-0 mt-0.5">
            {type}
          </Badge>
        </div>

        {/* Election Name */}
        <h3 className="font-heading font-bold text-navy text-lg leading-snug mb-2 group-hover:text-teal transition-colors duration-200">
          {name}
        </h3>

        {/* Plain English description */}
        {plainEnglish && (
          <p
            className="text-sm leading-relaxed mb-4 flex-1"
            style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}
          >
            {plainEnglish.length > 140
              ? plainEnglish.slice(0, 140).trimEnd() + "…"
              : plainEnglish}
          </p>
        )}

        {/* Meta */}
        <dl className="space-y-1.5 mb-5">
          <div className="flex items-center gap-2 text-sm text-slate">
            <Calendar size={14} className="shrink-0 text-teal" aria-hidden="true" />
            <dt className="sr-only">Date</dt>
            <dd>{formatDate(date)}</dd>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate">
            <MapPin size={14} className="shrink-0 text-teal" aria-hidden="true" />
            <dt className="sr-only">Jurisdiction</dt>
            <dd>{jurisdiction}</dd>
          </div>
        </dl>

        {/* CTA */}
        <Link
          href={`/elections/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold font-heading text-teal hover:text-teal-dark transition-colors duration-200 mt-auto"
          aria-label={`Read about ${name}`}
        >
          {candidateCount > 0 ? "View Candidates" : "Read More"}
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
