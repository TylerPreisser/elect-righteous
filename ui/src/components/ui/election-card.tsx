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
  openSeat?: boolean;
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
  openSeat = false,
  className = "",
}: ElectionCardProps) {
  return (
    <Link
      href={`/elections/${slug}`}
      className={`group block h-full rounded-lg border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_18px_45px_rgba(16,64,93,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${className}`}
      style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
      aria-label={`Read about ${name}`}
    >
      <article className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <Badge variant="type" className="shrink-0 mt-0.5">
            {type}
          </Badge>
          {openSeat && (
            <span
              className="text-xs font-heading font-semibold uppercase tracking-wide shrink-0"
              style={{ color: "var(--color-teal-dark)" }}
            >
              Open Seat
            </span>
          )}
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
        <span
          className="mt-auto inline-flex min-h-10 items-center justify-between gap-2 rounded-md px-3 text-sm font-semibold font-heading transition-colors duration-200 group-hover:bg-navy group-hover:text-white"
          style={{ color: "var(--color-teal-dark)", backgroundColor: "rgba(28, 195, 175, 0.08)" }}
          aria-hidden="true"
        >
          Read More
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </article>
    </Link>
  );
}
