/**
 * IssueCardComponent — renders one IssueCard.
 *
 * Sections:
 *   1. Heading (issue title + prose preview)
 *   2. Current position summary (stated.text + source chips)
 *   3. Dated actions, when present
 *   4. Observed online signals, when present
 *   5. Stated/action differences, only if gap present
 *
 * No badge, no score, no consistency label, no flag-alert UI.
 * IDENTITY.md symmetry test applies to all prose rendered here.
 */

"use client";

import { useState } from "react";
import type { IssueCard, Source } from "@/data/types-v2";
import { cleanEvidenceCopy } from "@/lib/public-copy";
import ActionList from "./ActionList";
import SocialSignalChip from "./SocialSignalChip";
import { ChevronDown, ExternalLink } from "lucide-react";

interface IssueCardComponentProps {
  issue: IssueCard;
  /** Full source registry for the candidate, used to resolve sourceIds. */
  sources: Source[];
  /** Whether the card starts expanded. Default: false. */
  defaultExpanded?: boolean;
  /** Label for the action section. */
  recordLabel?: string;
}

function SourceChipInline({
  source,
}: {
  source: Source;
}) {
  const label = source.publisher ?? source.title;
  const shortLabel = label.length > 30 ? label.slice(0, 30) + "…" : label;

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
      <ExternalLink size={10} aria-hidden="true" className="opacity-70 shrink-0" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="mb-3 font-heading font-bold"
      style={{ fontSize: "1rem", color: "var(--er-text-strong)" }}
    >
      {children}
    </h4>
  );
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  const clipped = text.slice(0, maxLength).trimEnd();
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 80 ? lastSpace : clipped.length)}...`;
}

export default function IssueCardComponent({
  issue,
  sources,
  defaultExpanded = false,
  recordLabel = "What they have done",
}: IssueCardComponentProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const sourceById = new Map<string, Source>(sources.map((s) => [s.id, s]));

  const statedSources = issue.stated.sourceIds
    .map((id) => sourceById.get(id))
    .filter((s): s is Source => Boolean(s));

  const hasSocialSignals = issue.socialSignals.length > 0;
  const hasActions = issue.actions.length > 0;
  const hasGap = issue.gap !== undefined;
  const statedText = cleanEvidenceCopy(issue.stated.text);
  const previewText =
    statedText ||
    (hasActions
      ? cleanEvidenceCopy(issue.actions[0].body)
      : hasSocialSignals
      ? `Social/online observation: ${cleanEvidenceCopy(issue.socialSignals[0].observation)}`
      : "No sourced position or public action found for this issue.");

  // Resolve gap evidence IDs to their source references for display
  const gapEvidenceRefs = hasGap
    ? issue.gap!.evidenceIds.map((evId) => {
        const action = issue.actions.find((a) => a.id === evId);
        const signal = issue.socialSignals.find((ss) => ss.id === evId);
        return { evId, action, signal };
      })
    : [];

  return (
    <article
      className="overflow-hidden rounded-lg border shadow-[0_8px_30px_rgba(0,0,0,0.16)]"
      style={{
        borderColor: expanded ? "rgba(28, 195, 175, 0.38)" : "var(--er-border)",
        backgroundColor: "var(--er-soft-bg)",
      }}
      aria-labelledby={`issue-${issue.id}-heading`}
    >
      {/* Card header / toggle */}
      <button
        type="button"
        className="group flex w-full items-start justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal sm:p-6"
        style={{
          backgroundColor: expanded ? "var(--er-card-hover-bg)" : "var(--er-soft-bg)",
          /* iOS Safari: eliminate 300ms tap delay + remove gray flash */
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
        }}
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-controls={`issue-${issue.id}-body`}
      >
        <div className="min-w-0 flex-1">
          <h3
            id={`issue-${issue.id}-heading`}
            className="font-heading font-bold"
            style={{ fontSize: "clamp(1.15rem, 3.5vw, 1.55rem)", color: "var(--er-text-strong)", lineHeight: 1.15 }}
          >
            {issue.title}
          </h3>

          <p
            className="mt-2 font-body leading-relaxed"
            style={{ color: "var(--er-muted)", fontSize: "0.95rem" }}
          >
            {truncateText(previewText, expanded ? 220 : 150)}
          </p>
        </div>

        {/* Expand/collapse indicator */}
        <span
          className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 font-heading text-xs font-bold uppercase tracking-wide"
          style={{ color: "var(--color-teal-dark)" }}
        >
          {expanded ? "Show less" : "See more"}
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </span>
      </button>

      {/* Card body */}
      <div
        id={`issue-${issue.id}-body`}
        className={expanded ? "block" : "hidden"}
      >
        <div className="grid gap-7 p-5 sm:p-6">

          <section aria-label="Position summary">
            <SectionLabel>Where they stand</SectionLabel>
            {issue.stated.text ? (
              <div className="grid gap-3">
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: "0.9375rem", color: "var(--er-text)" }}
                  >
                  {statedText}
                </p>
                {statedSources.length > 0 && (
                  <div className="flex flex-wrap gap-1.5" aria-label="Sources for stated position">
                    {statedSources.map((src) => (
                      <SourceChipInline key={src.id} source={src} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p
                className="font-body text-sm italic"
                style={{ color: "var(--er-muted-soft)" }}
              >
                No sourced position found on this issue.
              </p>
            )}
          </section>

          {(hasActions || !hasSocialSignals) && (
            <section aria-label="Dated actions">
              <SectionLabel>{recordLabel}</SectionLabel>
              <ActionList actions={issue.actions} sources={sources} />
            </section>
          )}

          {hasSocialSignals && (
            <section aria-label="Social and online observations">
              <SectionLabel>Social/online observations</SectionLabel>
              <p className="mb-3 font-body text-sm leading-relaxed" style={{ color: "var(--er-muted-soft)" }}>
                These observations show public activity tied to this issue. They are context, not confirmed positions.
              </p>
              <div className="grid gap-3">
                {issue.socialSignals.map((signal, index) => (
                  <SocialSignalChip
                    key={`${signal.id}-${index}`}
                    signal={signal}
                    sources={sources}
                  />
                ))}
              </div>
            </section>
          )}

          {hasGap && (
            <section
              aria-label="Where stated position and documented actions differ"
              className="rounded-md border p-4"
              style={{ borderColor: "rgba(196, 146, 42, 0.45)", backgroundColor: "rgba(196, 146, 42, 0.10)" }}
            >
              <SectionLabel>Where words and actions may differ</SectionLabel>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "0.9375rem", color: "var(--er-text)" }}
              >
                {cleanEvidenceCopy(issue.gap!.summary)}
              </p>

              {gapEvidenceRefs.length > 0 && (
                <div className="mt-2">
                  <p
                    className="font-body text-xs font-semibold mb-1.5"
                    style={{ color: "var(--er-muted-soft)" }}
                  >
                    Sources behind this note:
                  </p>
                  <ul className="grid gap-1.5" role="list">
                    {gapEvidenceRefs.map(({ evId, action, signal }) => (
                      <li
                        key={evId}
                        className="font-body text-sm"
                        style={{ color: "var(--er-muted-soft)" }}
                      >
                        {action
                          ? truncateText(cleanEvidenceCopy(action.body), 115)
                          : signal
                          ? `Online activity: ${truncateText(cleanEvidenceCopy(signal.observation), 100)}`
                          : `Referenced source item: ${evId}`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
