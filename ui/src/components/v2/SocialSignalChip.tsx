"use client";

/**
 * SocialSignalChip renders one issue-mapped SocialSignal as readable prose.
 *
 * IDENTITY.md commitment encoded here: every item states that it is an observed
 * online signal, not a confirmed policy position.
 *
 * No grading, no position inference, no flag coloring.
 */

import { useState } from "react";
import type { SocialSignal, Source } from "@/data/types-v2";
import { cleanEvidenceCopy } from "@/lib/public-copy";
import { ExternalLink } from "lucide-react";

/** Platform icon/label — text fallback if we don't have a known platform icon */
function PlatformLabel({ platform }: { platform: string }) {
  const known: Record<string, string> = {
    facebook: "FB",
    x: "X",
    twitter: "X",
    instagram: "IG",
    youtube: "YT",
    linkedin: "LI",
    tiktok: "TT",
    bluesky: "BS",
    threads: "TH",
  };
  const key = platform.toLowerCase();
  const abbr = known[key] ?? platform.slice(0, 2).toUpperCase();

  return (
    <span
      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-heading font-bold"
      style={{
        backgroundColor: "rgba(28, 195, 175, 0.14)",
        color: "white",
      }}
      aria-label={`Platform: ${platform}`}
      title={platform}
    >
      {abbr}
    </span>
  );
}

interface SocialSignalChipProps {
  signal: SocialSignal;
  /** Full source registry, used to resolve sourceIds for the link chip. */
  sources: Source[];
}

const TRUNCATE_AT = 140;

export default function SocialSignalChip({
  signal,
  sources,
}: SocialSignalChipProps) {
  const [expanded, setExpanded] = useState(false);
  const sourceById = new Map<string, Source>(sources.map((s) => [s.id, s]));

  const cleanedObservation = cleanEvidenceCopy(signal.observation);
  const needsTruncation = cleanedObservation.length > TRUNCATE_AT;
  const displayText =
    needsTruncation && !expanded
      ? cleanedObservation.slice(0, TRUNCATE_AT).trimEnd() + "…"
      : cleanedObservation;

  const linkedSources = signal.sourceIds
    .map((id) => sourceById.get(id))
    .filter((s): s is Source => Boolean(s));

  return (
    <div
      className="rounded-md border p-4"
      style={{ borderColor: "rgba(255,255,255,0.10)", backgroundColor: "rgba(255,255,255,0.045)" }}
    >
      <div className="flex items-start gap-3">
        <PlatformLabel platform={signal.platform} />

        <div className="min-w-0 flex-1">
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.76)" }}
          >
            {displayText}
            {needsTruncation && (
              <button
                type="button"
                className="ml-1 font-semibold underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{
                  color: "var(--color-teal-dark)",
                  fontSize: "0.85rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                  marginTop: "-0.75rem",
                  marginBottom: "-0.75rem",
                  paddingLeft: "0.25rem",
                  paddingRight: "0.25rem",
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                  /* min-width ensures the button is tappable even when "less" is short */
                  minWidth: "2.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  verticalAlign: "middle",
                }}
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
              >
                {expanded ? "less" : "more"}
              </button>
              )}
          </p>

          <p
            className="mt-1 font-body text-xs"
            style={{ color: "rgba(255,255,255,0.52)" }}
          >
            Public activity only; not a policy position.
          </p>

          {/* Source link(s) */}
          {linkedSources.length > 0 && (
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {linkedSources.map((src) => (
                <a
                  key={src.id}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 max-w-full items-center gap-1 rounded px-2.5 py-1 text-xs font-body font-semibold transition-colors duration-150 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "var(--color-teal)",
                  }}
                  aria-label={`Source: ${src.publisher ?? src.title} (opens in new tab)`}
                  title={src.title}
                >
                  {(src.publisher ?? src.title).slice(0, 32)}
                  {(src.publisher ?? src.title).length > 32 ? "…" : ""}
                  <ExternalLink size={10} aria-hidden="true" className="opacity-70 shrink-0" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
