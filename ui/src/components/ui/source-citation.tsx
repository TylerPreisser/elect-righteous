import { ExternalLink } from "lucide-react";

interface SourceCitationProps {
  title: string;
  url: string;
  dateAccessed?: string;
  block?: boolean;
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

export default function SourceCitation({
  title,
  url,
  dateAccessed,
  block = false,
  className = "",
}: SourceCitationProps) {
  const content = (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-teal hover:text-teal-dark transition-colors duration-200 font-medium"
        aria-label={`Source: ${title} (opens in new tab)`}
      >
        {title}
        <ExternalLink size={11} className="shrink-0" aria-hidden="true" />
      </a>
      {dateAccessed && (
        <span className="text-unknown ml-1.5">
          (accessed {formatDate(dateAccessed)})
        </span>
      )}
    </>
  );

  if (block) {
    return (
      <p
        className={`text-xs leading-relaxed ${className}`}
        aria-label="Source citation"
      >
        {content}
      </p>
    );
  }

  return (
    <span
      className={`inline text-xs leading-relaxed ${className}`}
      aria-label="Source citation"
    >
      {content}
    </span>
  );
}
