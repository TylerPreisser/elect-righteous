import { ExternalLink } from "lucide-react";

interface QuoteBlockProps {
  text: string;
  source: string;
  date?: string;
  url?: string;
  topic?: string;
  className?: string;
}

function formatDate(dateStr: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
}

export default function QuoteBlock({
  text,
  source,
  date,
  url,
  topic,
  className = "",
}: QuoteBlockProps) {
  return (
    <figure
      className={`relative pl-5 border-l-4 border-teal my-6 ${className}`}
      aria-label={`Quote from ${source}`}
    >
      {/* Topic label */}
      {topic && (
        <p className="text-xs font-heading font-semibold uppercase tracking-widest text-teal mb-2">
          {topic}
        </p>
      )}

      {/* Quote text */}
      <blockquote
        className="font-serif text-lg md:text-xl italic leading-relaxed text-charcoal"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Citation */}
      <figcaption className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate">
        <span className="font-semibold font-heading text-navy">&mdash; {source}</span>
        {date && (
          <>
            <span aria-hidden="true" className="text-unknown">
              &middot;
            </span>
            <time dateTime={date}>{formatDate(date)}</time>
          </>
        )}
        {url && (
          <>
            <span aria-hidden="true" className="text-unknown">
              &middot;
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal hover:text-teal-dark transition-colors duration-200"
              aria-label="View original source"
            >
              Source
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}
