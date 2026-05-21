import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Users } from "lucide-react";
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
      className={`er-card group block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${className}`}
      aria-label={`Read about ${name}`}
    >
      <article className="p-4 flex min-h-[11rem] flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge variant="type" className="shrink-0 mt-0.5">
            {type}
          </Badge>
          {openSeat && (
            <span
              className="text-xs font-heading font-semibold uppercase tracking-wide shrink-0"
              style={{ color: "var(--color-teal)" }}
            >
              Open Seat
            </span>
          )}
        </div>

        {/* Election Name */}
        <h3 className="font-heading font-bold text-white text-lg leading-snug mb-2 group-hover:text-teal transition-colors duration-200">
          {name}
        </h3>

        {/* Plain English description */}
        {plainEnglish && (
          <p
            className="text-sm leading-relaxed mb-4 flex-1"
            style={{ color: "rgba(255,255,255,0.64)", fontFamily: "var(--font-body)" }}
          >
            {plainEnglish.length > 96
              ? plainEnglish.slice(0, 96).trimEnd() + "..."
              : plainEnglish}
          </p>
        )}

        {/* Meta */}
        <dl className="mt-auto grid gap-1.5 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
          <div className="flex items-center gap-2 text-sm text-white/62">
            <Calendar size={14} className="shrink-0 text-teal" aria-hidden="true" />
            <dt className="sr-only">Date</dt>
            <dd>{formatDate(date)}</dd>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/62">
            <MapPin size={14} className="shrink-0 text-teal" aria-hidden="true" />
            <dt className="sr-only">Jurisdiction</dt>
            <dd>{jurisdiction}</dd>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/62">
            <Users size={14} className="shrink-0 text-teal" aria-hidden="true" />
            <dt className="sr-only">Candidates</dt>
            <dd>{candidateCount} {candidateCount === 1 ? "profile" : "profiles"}</dd>
          </div>
        </dl>

        <span
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold font-heading transition-colors duration-200 group-hover:text-teal"
          style={{ color: "rgba(255,255,255,0.78)" }}
          aria-hidden="true"
        >
          View guide
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </article>
    </Link>
  );
}
