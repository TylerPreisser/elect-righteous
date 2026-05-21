/**
 * ActionList — renders a sorted list of ActionEvidence entries.
 *
 * Each row shows: date (formatted), factual body, and source chip(s).
 * Sorted newest-first by default. No grading, no badges, no flags.
 */

import type { ActionEvidence, Source } from "@/data/types-v2";
import { cleanEvidenceCopy } from "@/lib/public-copy";
import { ExternalLink } from "lucide-react";

interface ActionListProps {
  actions: ActionEvidence[];
  /** Full source registry for the candidate, used to resolve sourceIds. */
  sources: Source[];
}

/** Format ISO date string to human-readable, e.g. "Mar 15, 2024". */
function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function SourceChip({ source }: { source: Source }) {
  const label = source.publisher ?? source.title;
  const shortLabel = label.length > 32 ? label.slice(0, 32) + "…" : label;

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-9 max-w-full items-center gap-1 rounded px-2.5 py-1 text-xs font-body font-semibold transition-colors duration-150 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      style={{
        backgroundColor: "var(--er-chip-bg)",
        color: "var(--color-teal)",
      }}
      aria-label={`Source: ${label} (opens in new tab)`}
      title={source.title}
    >
      {shortLabel}
      <ExternalLink
        size={10}
        aria-hidden="true"
        className="shrink-0 opacity-70"
      />
    </a>
  );
}

export default function ActionList({ actions, sources }: ActionListProps) {
  const sourceById = new Map<string, Source>(sources.map((s) => [s.id, s]));

  if (actions.length === 0) {
    return (
      <p
        className="font-body text-sm italic"
        style={{ color: "var(--er-muted-soft)" }}
      >
        No public action found for this issue.
      </p>
    );
  }

  // Sort newest-first by date string (ISO sorts lexicographically)
  const sorted = [...actions].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <ol className="divide-y rounded-md border" style={{ borderColor: "var(--er-border)" }} role="list">
      {sorted.map((action) => {
        const resolvedSources = action.sourceIds
          .map((id) => sourceById.get(id))
          .filter((s): s is Source => Boolean(s));

        return (
          <li
            key={action.id}
            className="flex flex-col gap-2 p-4 sm:flex-row sm:gap-3"
            style={{ borderColor: "var(--er-border)" }}
          >
            {/* Date column */}
            <time
              dateTime={action.date}
              className="shrink-0 font-body text-sm font-semibold sm:w-28"
              style={{ color: "var(--er-muted-soft)" }}
            >
              {formatDate(action.date)}
            </time>

            {/* Body + sources */}
            <div className="min-w-0 flex-1">
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "0.9375rem", color: "var(--er-text)" }}
              >
                {cleanEvidenceCopy(action.body)}
              </p>

              {resolvedSources.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5" aria-label="Sources">
                  {resolvedSources.map((source) => (
                    <SourceChip key={source.id} source={source} />
                  ))}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
