import type { CandidateFullV2, SourceTier } from "@/data/types-v2";

export interface ProfileMetrics {
  issueCount: number;
  actionCount: number;
  socialCount: number;
  gapCount: number;
  sourceCount: number;
  sourceTierCounts: Record<SourceTier, number>;
  sourcedIssueCount: number;
  latestAccessed?: string;
}

export function getProfileMetrics(candidate: CandidateFullV2): ProfileMetrics {
  const sourceTierCounts: Record<SourceTier, number> = {
    primary: 0,
    secondary: 0,
    social: 0,
  };

  for (const source of candidate.sources) {
    sourceTierCounts[source.tier] += 1;
  }

  const actionCount = candidate.issues.reduce(
    (total, issue) => total + issue.actions.length,
    0,
  );
  const socialCount = candidate.issues.reduce(
    (total, issue) => total + issue.socialSignals.length,
    0,
  );
  const gapCount = candidate.issues.filter((issue) => issue.gap).length;
  const sourcedIssueCount = candidate.issues.filter((issue) => {
    return (
      issue.stated.sourceIds.length > 0 ||
      issue.actions.length > 0 ||
      issue.socialSignals.length > 0
    );
  }).length;

  const latestAccessed = candidate.sources
    .map((source) => source.accessed)
    .filter(Boolean)
    .sort()
    .at(-1);

  return {
    issueCount: candidate.issues.length,
    actionCount,
    socialCount,
    gapCount,
    sourceCount: candidate.sources.length,
    sourceTierCounts,
    sourcedIssueCount,
    latestAccessed,
  };
}

export function formatDateLabel(iso?: string) {
  if (!iso) return "Not dated";

  const date = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(date.getTime())) return iso;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function sourceHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").split("/")[0] || url;
  }
}
