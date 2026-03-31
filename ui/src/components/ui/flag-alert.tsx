import { CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";

interface FlagAlertProps {
  type: "red" | "green";
  title: string;
  description: string;
  sourceUrl?: string;
  className?: string;
}

export default function FlagAlert({
  type,
  title,
  description,
  sourceUrl,
  className = "",
}: FlagAlertProps) {
  const isGreen = type === "green";

  const containerClasses = isGreen
    ? "bg-green-flag-bg border-green-flag/40"
    : "bg-red-flag-bg border-red-flag/40";

  const iconClasses = isGreen ? "text-green-flag" : "text-red-flag";
  const titleClasses = isGreen ? "text-green-flag" : "text-red-flag";
  const Icon = isGreen ? CheckCircle2 : AlertCircle;
  const label = isGreen ? "Green flag" : "Red flag";

  return (
    <div
      className={`flex gap-4 p-4 rounded-lg border-2 ${containerClasses} ${className}`}
      role="note"
      aria-label={`${label}: ${title}`}
    >
      {/* Icon */}
      <div className="shrink-0 mt-0.5">
        <Icon size={20} className={iconClasses} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h4 className={`font-heading font-bold text-sm mb-1 ${titleClasses}`}>
          {title}
        </h4>
        <p className="text-sm text-charcoal leading-relaxed">{description}</p>

        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 mt-2 text-xs font-semibold font-heading transition-opacity duration-200 hover:opacity-70 ${titleClasses}`}
            aria-label="View source for this flag"
          >
            View Source
            <ExternalLink size={11} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}
