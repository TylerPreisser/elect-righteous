/**
 * ClaimAnchoredSourcePanel — lists all sources backing a candidate or claim.
 *
 * The ONLY badge in v2 components is the source-tier badge: it classifies
 * the source type (primary / secondary / social), not the candidate.
 *
 * When `claim` prop is provided, filters to sources whose claimsAnchored[]
 * includes that claim string.
 *
 * Sources are grouped and sorted: primary first, secondary second, social last.
 */

import type { Source, SourceTier } from "@/data/types-v2";
import { normalizePublicCopy } from "@/lib/public-copy";
import { ExternalLink } from "lucide-react";

interface ClaimAnchoredSourcePanelProps {
  sources: Source[];
  /** Optional: if provided, filter to sources that anchor this claim. */
  claim?: string;
}

// Tier display config
const TIER_CONFIG: Record<
  SourceTier,
  { label: string; badgeStyle: React.CSSProperties; description: string }
> = {
  primary: {
    label: "Primary",
    badgeStyle: {
      backgroundColor: "var(--color-navy)",
      color: "white",
    },
    description: "Official record: board minutes, voting rolls, government filings, court records",
  },
  secondary: {
    label: "Secondary",
    badgeStyle: {
      backgroundColor: "transparent",
      color: "var(--color-navy)",
      border: "1px solid var(--color-navy)",
    },
    description: "News reporting, profile pieces, fact-checks",
  },
  social: {
    label: "Social",
    badgeStyle: {
      backgroundColor: "rgba(74, 74, 74, 0.12)",
      color: "var(--color-slate)",
    },
    description: "Public social media, candidate-authored posts",
  },
};

const TIER_ORDER: SourceTier[] = ["primary", "secondary", "social"];

function TierBadge({ tier }: { tier: SourceTier }) {
  const cfg = TIER_CONFIG[tier];
  return (
    <span
      className="inline-block rounded px-2 py-0.5 text-xs font-heading font-bold uppercase tracking-wider shrink-0"
      style={cfg.badgeStyle}
      title={cfg.description}
    >
      {cfg.label}
    </span>
  );
}

function formatAccessDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function SourceRow({ source }: { source: Source }) {
  return (
    <li className="flex flex-col gap-1.5 py-3 border-b last:border-b-0" style={{ borderColor: "rgba(16, 64, 93, 0.08)" }}>
      <div className="flex flex-wrap items-start gap-2">
        {/* Tier badge */}
        <TierBadge tier={source.tier} />

        {/* Title link */}
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-body font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal leading-snug min-w-0"
          style={{ color: "var(--color-navy-light)", fontSize: "0.9375rem" }}
        >
          <span className="min-w-0 break-words">{normalizePublicCopy(source.title)}</span>
          <ExternalLink
            size={12}
            aria-hidden="true"
            className="shrink-0 opacity-70 mt-0.5"
          />
        </a>
      </div>

      {/* Publisher + accessed date */}
      <div
        className="flex flex-wrap gap-x-3 gap-y-0.5 font-body text-xs"
        style={{ color: "var(--color-slate)" }}
      >
        {source.publisher && (
          <span>{source.publisher}</span>
        )}
        <span>Accessed {formatAccessDate(source.accessed)}</span>
      </div>

      {/* Claims anchored */}
      {source.claimsAnchored.length > 0 && (
        <ul
          className="mt-0.5 flex flex-wrap gap-1.5"
          aria-label="Claims this source supports"
        >
          {source.claimsAnchored.map((claim) => normalizePublicCopy(claim)).filter(Boolean).map((claim, i) => (
            <li
              key={i}
              className="rounded px-2 py-0.5 font-body text-xs"
              style={{
                backgroundColor: "rgba(28, 195, 175, 0.08)",
                color: "var(--color-teal-dark)",
              }}
            >
              {claim}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function ClaimAnchoredSourcePanel({
  sources,
  claim,
}: ClaimAnchoredSourcePanelProps) {
  // Optionally filter by claim
  const filtered = claim
    ? sources.filter((s) => s.claimsAnchored.includes(claim))
    : sources;

  // Group by tier, then sort within each tier by accessed date (newest first)
  const grouped: Record<SourceTier, Source[]> = {
    primary: [],
    secondary: [],
    social: [],
  };
  for (const s of filtered) {
    grouped[s.tier].push(s);
  }
  for (const tier of TIER_ORDER) {
    grouped[tier].sort((a, b) => (a.accessed < b.accessed ? 1 : -1));
  }

  const allSorted = [...grouped.primary, ...grouped.secondary, ...grouped.social];

  if (allSorted.length === 0) {
    return (
      <p className="font-body text-sm italic" style={{ color: "var(--color-slate)" }}>
        {claim
          ? `No sources found for claim: "${claim}"`
          : "No sources on file."}
      </p>
    );
  }

  return (
    <section aria-label={claim ? `Sources for: ${claim}` : "All sources"}>
      {/* Legend */}
      <div
        className="mb-4 flex flex-wrap gap-3 rounded-md p-3 font-body text-xs"
        style={{ backgroundColor: "var(--color-light)" }}
        aria-label="Source tier legend"
      >
        {TIER_ORDER.map((tier) => {
          const count = grouped[tier].length;
          if (count === 0) return null;
          const cfg = TIER_CONFIG[tier];
          return (
            <span key={tier} className="flex items-center gap-1.5 min-w-0">
              <TierBadge tier={tier} />
              {/* min-w-0: prevents flex item from overflowing on narrow mobile viewports */}
              <span className="min-w-0 break-words" style={{ color: "var(--color-slate)" }}>
                {cfg.description} ({count})
              </span>
            </span>
          );
        })}
      </div>

      {/* Source list */}
      <ul className="divide-y" style={{ borderColor: "rgba(16, 64, 93, 0.08)" }} role="list">
        {allSorted.map((source) => (
          <SourceRow key={source.id} source={source} />
        ))}
      </ul>
    </section>
  );
}
