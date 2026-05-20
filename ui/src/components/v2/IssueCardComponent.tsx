/**
 * IssueCardComponent — renders one IssueCard.
 *
 * Sections:
 *   1. Heading (issue title)
 *   2. "What they say" (stated.text + source chips)
 *   3. "What they did" (ActionList of actions)
 *   4. "Relevant social activity" (SocialSignalChips — only if signals exist)
 *   5. "Where they diverge" (gap.summary + evidence references — only if gap present)
 *
 * No badge, no score, no consistency label, no flag-alert UI.
 * IDENTITY.md symmetry test applies to all prose rendered here.
 */

"use client";

import { useState } from "react";
import type { IssueCard, Source } from "@/data/types-v2";
import ActionList from "./ActionList";
import SocialSignalChip from "./SocialSignalChip";
import { ChevronDown, ExternalLink } from "lucide-react";

interface IssueCardComponentProps {
  issue: IssueCard;
  /** Full source registry for the candidate, used to resolve sourceIds. */
  sources: Source[];
  /** Whether the card starts expanded. Default: false. */
  defaultExpanded?: boolean;
  /** Label for the action section, e.g. "Public Record" or "Official / Reported Actions". */
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
      className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-body font-semibold transition-colors duration-150 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      style={{
        backgroundColor: "rgba(16, 64, 93, 0.07)",
        color: "var(--color-navy-light)",
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
      className="mb-3 border-l-4 pl-3 font-heading font-bold uppercase tracking-wider"
      style={{ borderColor: "var(--color-teal)", fontSize: "0.95rem", color: "var(--color-navy)" }}
    >
      {children}
    </h4>
  );
}

export default function IssueCardComponent({
  issue,
  sources,
  defaultExpanded = false,
  recordLabel = "Public Record",
}: IssueCardComponentProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const sourceById = new Map<string, Source>(sources.map((s) => [s.id, s]));

  const statedSources = issue.stated.sourceIds
    .map((id) => sourceById.get(id))
    .filter((s): s is Source => Boolean(s));

  const hasSocialSignals = issue.socialSignals.length > 0;
  const hasGap = issue.gap !== undefined;

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
      className="overflow-hidden rounded-lg border bg-white"
      style={{ borderColor: "rgba(16, 64, 93, 0.14)" }}
      aria-labelledby={`issue-${issue.id}-heading`}
    >
      {/* Card header / toggle */}
      <button
        type="button"
        className="group flex w-full items-start justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal sm:p-6"
        style={{
          backgroundColor: expanded ? "white" : "#f8f9fa",
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
            style={{ fontSize: "clamp(1.15rem, 3.5vw, 1.55rem)", color: "var(--color-navy)", lineHeight: 1.15 }}
          >
            {issue.title}
          </h3>

          {/* Compact preview of action count when collapsed */}
          {!expanded && issue.actions.length > 0 && (
            <p
              className="mt-1 font-body text-sm"
              style={{ color: "var(--color-slate)" }}
            >
              {issue.actions.length} documented or reported action
              {issue.actions.length !== 1 ? "s" : ""} on file
            </p>
          )}
        </div>

        {/* Expand/collapse indicator */}
        <ChevronDown
          size={22}
          className={`mt-1 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          style={{ color: "var(--color-teal-dark)" }}
          aria-hidden="true"
        />
      </button>

      {/* Card body */}
      <div
        id={`issue-${issue.id}-body`}
        className={expanded ? "block" : "hidden"}
      >
        <div className="p-5 sm:p-6 grid gap-7">

          <section aria-label="Where they stand">
            <SectionLabel>Where they stand</SectionLabel>
            {issue.stated.text ? (
              <div className="grid gap-3">
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: "0.9375rem", color: "var(--color-charcoal)" }}
                >
                  {issue.stated.text}
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
                style={{ color: "var(--color-slate)" }}
              >
                No public statement found on this issue.
              </p>
            )}
          </section>

          <section aria-label="Their record">
            <SectionLabel>{recordLabel}</SectionLabel>
            <ActionList actions={issue.actions} sources={sources} />
          </section>

          {/* Section 3: Relevant social activity (only if signals exist) */}
          {hasSocialSignals && (
            <section aria-label="Relevant social activity">
              <SectionLabel>Relevant social activity</SectionLabel>
              <div className="grid gap-3">
                {issue.socialSignals.map((signal) => (
                  <SocialSignalChip
                    key={signal.id}
                    signal={signal}
                    sources={sources}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Where they diverge (only if gap present) */}
          {hasGap && (
            <section
              aria-label="Where stated position and documented actions differ"
              className="rounded-md border-l-4 pl-4 py-3"
              style={{ borderColor: "var(--color-gold)", backgroundColor: "rgba(196, 146, 42, 0.05)" }}
            >
              <SectionLabel>Where the record differs from the stated position</SectionLabel>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "0.9375rem", color: "var(--color-charcoal)" }}
              >
                {issue.gap!.summary}
              </p>

              {/* Evidence references */}
              {gapEvidenceRefs.length > 0 && (
                <div className="mt-2">
                  <p
                    className="font-body text-xs font-semibold mb-1.5"
                    style={{ color: "var(--color-slate)" }}
                  >
                    Supporting evidence:
                  </p>
                  <ul className="grid gap-1.5" role="list">
                    {gapEvidenceRefs.map(({ evId, action, signal }) => (
                      <li
                        key={evId}
                        className="font-body text-sm"
                        style={{ color: "var(--color-slate)" }}
                      >
                        {action
                          ? `Action: ${action.body.slice(0, 100)}${action.body.length > 100 ? "…" : ""}`
                          : signal
                          ? `Online: ${signal.observation.slice(0, 100)}${signal.observation.length > 100 ? "…" : ""}`
                          : `Evidence ID: ${evId}`}
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
