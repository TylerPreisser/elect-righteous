import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  DollarSign,
  ExternalLink,
  FileText,
  Heart,
  ListChecks,
  MessageSquare,
  User,
} from "lucide-react";
import type { CampaignFinanceV2, CandidateFullV2, SocialSignal, Source } from "@/data/types-v2";
import IssueCardComponent from "@/components/v2/IssueCardComponent";
import CorrectionForm from "@/components/ui/correction-form";
import { getProfileStatus } from "@/lib/profile-status";
import { formatDateLabel, getProfileMetrics } from "@/lib/profile-metrics";
import { cleanEvidenceCopy, normalizePublicCopy } from "@/lib/public-copy";

const PARTY_LABEL: Record<string, string> = {
  R: "Republican",
  D: "Democrat",
  I: "Independent",
  NP: "Nonpartisan",
};

interface CandidateV2ProfileProps {
  candidate: CandidateFullV2;
}

interface DossierSectionProps {
  id?: string;
  title: string;
  kicker: string;
  icon: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}

function DossierSection({
  id,
  title,
  kicker,
  icon,
  defaultOpen = false,
  children,
}: DossierSectionProps) {
  return (
    <details
      id={id}
      className="group scroll-mt-24 border-t"
      style={{ borderColor: "var(--er-border)" }}
      open={defaultOpen}
    >
      <summary
        className="flex cursor-pointer list-none items-center gap-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:py-7"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: "rgba(28, 195, 175, 0.11)", color: "var(--color-teal-dark)" }}
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span
            className="block font-body text-sm"
            style={{ color: "var(--er-muted-soft)" }}
          >
            {kicker}
          </span>
          <span
            className="block font-heading font-bold"
            style={{ color: "var(--er-text-strong)", fontSize: "clamp(1.35rem, 3vw, 1.85rem)", lineHeight: 1.12 }}
          >
            {title}
          </span>
        </span>
        <ChevronRight
          size={20}
          className="shrink-0 transition-transform group-open:rotate-90"
          style={{ color: "var(--er-muted)" }}
          aria-hidden="true"
        />
      </summary>
      <div className="pb-10 pt-1">{children}</div>
    </details>
  );
}

function SourceLink({ source }: { source: Source }) {
  const label = source.publisher ?? source.title;

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-9 max-w-full items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      style={{ backgroundColor: "var(--er-chip-bg)", color: "var(--color-teal)" }}
      title={source.title}
    >
      <span className="truncate">{label}</span>
      <ExternalLink size={11} className="shrink-0" aria-hidden="true" />
    </a>
  );
}

function IntelligenceStat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string | number;
  detail?: string;
}) {
  return (
    <div
      className="rounded-md border p-3"
      style={{ borderColor: "var(--er-border)", backgroundColor: "var(--er-soft-bg)" }}
    >
      <p className="text-[0.68rem] uppercase tracking-wide" style={{ color: "var(--er-muted-soft)" }}>{label}</p>
      <p className="mt-1 font-heading text-2xl font-bold" style={{ color: "var(--er-text-strong)" }}>{value}</p>
      {detail && <p className="mt-1 text-xs leading-snug" style={{ color: "var(--er-muted-soft)" }}>{detail}</p>}
    </div>
  );
}

function SourceMixBar({
  primary,
  secondary,
  social,
}: {
  primary: number;
  secondary: number;
  social: number;
}) {
  const total = Math.max(primary + secondary + social, 1);
  const segments = [
    { label: "Primary", value: primary, color: "var(--color-teal)" },
    { label: "Secondary", value: secondary, color: "var(--color-gold)" },
    { label: "Social", value: social, color: "#8fb4ff" },
  ];

  return (
    <div
      className="rounded-md border p-3"
      style={{ borderColor: "var(--er-border)", backgroundColor: "var(--er-soft-bg)" }}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-wide" style={{ color: "var(--er-muted-soft)" }}>Source mix</p>
        <p className="font-heading text-sm font-bold" style={{ color: "var(--er-text-strong)" }}>{primary + secondary + social} total</p>
      </div>
      <div className="flex h-2 overflow-hidden rounded-full" style={{ backgroundColor: "var(--er-border)" }}>
        {segments.map((segment) => (
          <span
            key={segment.label}
            style={{ width: `${(segment.value / total) * 100}%`, backgroundColor: segment.color }}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-xs" style={{ color: "var(--er-muted)" }}>
        {segments.map((segment) => (
          <span key={segment.label}>
            <span className="font-semibold" style={{ color: "var(--er-text-strong)" }}>{segment.value}</span> {segment.label.toLowerCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

function LinkedNarrativeText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={`${match[2]}-${match.index}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="break-words font-semibold underline decoration-teal/40 underline-offset-2 hover:decoration-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        style={{ color: "var(--color-teal-dark)" }}
      >
        {match[1]}
      </a>,
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}

function cleanNarrativeParagraph(paragraph: string) {
  return normalizePublicCopy(paragraph
    .replace(/^[-*_]{3,}$/g, "")
    .replace(/^_([^_]+)_$/g, "$1")
    .replace(/^\*([^*]+)\*$/g, "$1")
    .trim());
}

function NarrativeBlock({ text }: { text: string }) {
  const paragraphs = text
    .split(/\n{2,}/)
    .map(cleanNarrativeParagraph)
    .filter(Boolean);

  return (
    <div className="grid gap-4">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
        className="font-body leading-relaxed"
          style={{ color: "var(--er-text)" }}
        >
          <LinkedNarrativeText text={paragraph} />
        </p>
      ))}
    </div>
  );
}

function SocialSignalRow({
  signal,
  issueTitle,
  sources,
}: {
  signal: SocialSignal;
  issueTitle: string;
  sources: Source[];
}) {
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const signalSources = signal.sourceIds
    .map((id) => sourceById.get(id))
    .filter((source): source is Source => Boolean(source));

  return (
    <li
      className="grid gap-2 border-t py-4 first:border-t-0"
      style={{ borderColor: "var(--er-border)" }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="rounded px-2 py-1 font-body text-xs font-semibold"
            style={{ backgroundColor: "rgba(196, 146, 42, 0.14)", color: "var(--color-gold-light)" }}
        >
          {signal.platform}
        </span>
        <span className="font-body text-sm" style={{ color: "var(--er-muted-soft)" }}>
          Related issue: {issueTitle}
        </span>
      </div>
      <p
        className="font-body leading-relaxed"
        style={{ color: "var(--er-text)", fontSize: "0.95rem" }}
      >
        {cleanEvidenceCopy(signal.observation)}
      </p>
      <p className="font-body text-xs" style={{ color: "var(--er-muted-soft)" }}>
        Public activity only; not a policy position.
      </p>
      {signalSources.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {signalSources.map((source) => (
            <SourceLink key={source.id} source={source} />
          ))}
        </div>
      )}
    </li>
  );
}

function CampaignFinanceSection({ finance }: { finance: CampaignFinanceV2 }) {
  const totalRaised = normalizePublicCopy(finance.totalRaised);
  const narrative = normalizePublicCopy(finance.narrative);
  const reportingPeriod = normalizePublicCopy(finance.reportingPeriod);
  const source = normalizePublicCopy(finance.source);
  const undisclosed = normalizePublicCopy(finance.undisclosed);
  const totalIsNarrative = totalRaised.length > 90;
  const primarySummary = totalIsNarrative ? totalRaised : narrative;

  return (
    <div className="grid gap-5">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,0.55fr)]">
        <div
          className="rounded-lg border p-4"
          style={{ borderColor: "var(--er-border)", backgroundColor: "var(--er-soft-bg)" }}
        >
          <p className="font-body text-sm" style={{ color: "var(--er-muted-soft)" }}>
            Finance snapshot
          </p>
          <p
            className={totalIsNarrative ? "mt-2 font-body leading-relaxed" : "mt-1 font-heading text-2xl font-bold"}
            style={{ color: "var(--er-text-strong)" }}
          >
            {totalRaised || "No public finance total listed."}
          </p>
        </div>

        <div
          className="rounded-lg border p-4"
          style={{ borderColor: "var(--er-border)", backgroundColor: "var(--er-soft-bg)" }}
        >
          <p className="font-body text-sm" style={{ color: "var(--er-muted-soft)" }}>
            Reporting period
          </p>
          <p className="mt-1 font-body leading-relaxed" style={{ color: "var(--er-text)" }}>
            {reportingPeriod || "Not listed"}
          </p>
          {source && (
            <p className="mt-3 font-body text-xs leading-relaxed" style={{ color: "var(--er-muted-soft)" }}>
              Source: {source}
            </p>
          )}
        </div>
      </div>

      {primarySummary && primarySummary !== totalRaised && (
        <p className="font-body leading-relaxed" style={{ color: "var(--er-text)" }}>
          {primarySummary}
        </p>
      )}

      {finance.donors.length > 0 && (
        <ul className="grid gap-2 sm:grid-cols-2" role="list">
          {finance.donors.map((donor) => (
            <li
              key={`${donor.name}-${donor.amount}`}
              className="rounded-md border px-4 py-3"
              style={{ borderColor: "var(--er-border)", backgroundColor: "var(--er-soft-bg)" }}
            >
              <p className="font-body text-sm leading-snug" style={{ color: "var(--er-muted)" }}>
                {normalizePublicCopy(donor.name)}
              </p>
              <p className="mt-1 font-heading text-lg font-bold" style={{ color: "var(--er-text-strong)" }}>
                {normalizePublicCopy(donor.amount)}
              </p>
            </li>
          ))}
        </ul>
      )}

      {undisclosed && (
        <p className="font-body text-sm italic" style={{ color: "var(--er-muted-soft)" }}>
          {undisclosed}
        </p>
      )}
    </div>
  );
}

export default function CandidateV2Profile({ candidate }: CandidateV2ProfileProps) {
  const partyLabel = PARTY_LABEL[candidate.party] ?? candidate.party;
  const profileStatus = getProfileStatus(candidate);
  const metrics = getProfileMetrics(candidate);
  const sourcePageHref = `/candidates/${candidate.slug}/sources`;
  const actions = candidate.issues.flatMap((issue) => issue.actions);
  const gaps = candidate.issues.filter((issue) => issue.gap);
  const socialSignals = candidate.issues.flatMap((issue) =>
    issue.socialSignals.map((signal) => ({ signal, issueTitle: issue.title })),
  );
  const sourceById = new Map(candidate.sources.map((source) => [source.id, source]));

  function sourcesForIssue(issue: CandidateFullV2["issues"][number]) {
    const ids = new Set<string>([
      ...issue.stated.sourceIds,
      ...issue.actions.flatMap((action) => action.sourceIds),
      ...issue.socialSignals.flatMap((signal) => signal.sourceIds),
    ]);
    return [...ids]
      .map((id) => sourceById.get(id))
      .filter((source): source is Source => Boolean(source));
  }

  const facts = [
    ["Party", partyLabel],
    ["Office", candidate.position],
    ["Occupation", candidate.occupation],
    ["Hometown", candidate.hometown],
    ["Education", candidate.education],
    ["Family", candidate.family],
    ["District", candidate.district],
    ["Last margin", candidate.margin2024],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <main id="main-content" className="er-shell">
      <div className="er-grid-bg" aria-hidden="true" />
      <div className="er-hero-band relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <div className="er-hero-grid h-full w-full" />
        </div>

        <div className="relative container-main py-8 md:py-11">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm font-body text-white/62"
          >
            <Link
              href="/candidates"
              className="rounded text-teal hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              Candidates
            </Link>
            <span aria-hidden="true">/</span>
            <span>{candidate.name}</span>
          </nav>

          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-start">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded bg-white/10 px-2.5 py-1 text-xs font-heading font-bold uppercase tracking-wide text-white/82">
                  {partyLabel}
                </span>
                <span className="rounded bg-teal/15 px-2.5 py-1 text-xs font-heading font-bold uppercase tracking-wide text-teal">
                  {profileStatus.label}
                </span>
              </div>
              <h1
                className="font-heading font-extrabold"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.25rem)", lineHeight: 1.02 }}
              >
                {candidate.name}
              </h1>
              <p
                className="mt-3 max-w-3xl font-body text-lg leading-relaxed"
                style={{ color: "var(--er-muted)" }}
              >
                {candidate.position} - {profileStatus.headlineSuffix}
              </p>
              {profileStatus.note && (
                <p
                  className="mt-3 max-w-3xl rounded-md border px-4 py-3 font-body text-sm leading-relaxed"
                  style={{
                    borderColor: "rgba(28, 195, 175, 0.28)",
                    backgroundColor: "rgba(28, 195, 175, 0.08)",
                    color: "var(--er-text)",
                  }}
                >
                  {profileStatus.note}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  ["Background", "#background"],
                  ["Issues", "#issues"],
                  ["Actions", "#record"],
                  ["Sources", "#sources"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="inline-flex min-h-10 items-center rounded-md border border-white/14 px-3 text-sm font-heading font-semibold text-white/78 transition hover:border-teal/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur"
              aria-label="Profile summary"
            >
              <div className="grid grid-cols-2 gap-3">
                <IntelligenceStat label="Sources" value={metrics.sourceCount} detail="linked public trail" />
                <IntelligenceStat label="Issues" value={`${metrics.sourcedIssueCount}/${metrics.issueCount}`} detail="with evidence" />
                <IntelligenceStat
                  label="Records"
                  value={metrics.actionCount}
                  detail={`${profileStatus.actionLabel}${metrics.actionCount === 1 ? "" : "s"}`}
                />
                <IntelligenceStat label="Online" value={metrics.socialCount} detail="observations" />
              </div>
              <div className="mt-3">
                <SourceMixBar
                  primary={metrics.sourceTierCounts.primary}
                  secondary={metrics.sourceTierCounts.secondary}
                  social={metrics.sourceTierCounts.social}
                />
              </div>
              <p className="mt-3 flex items-center gap-2 text-xs text-white/58">
                <Calendar size={13} aria-hidden="true" />
                Latest source access: {formatDateLabel(metrics.latestAccessed)}
              </p>
              <Link
                href={sourcePageHref}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-teal px-4 text-sm font-heading font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Source Trail
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main relative z-10 py-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <DossierSection
            id="background"
            title="Who They Are"
            kicker="Background"
            icon={<User size={20} />}
            defaultOpen
          >
            {candidate.whoTheyAre && (
              <div className="mb-6">
                <NarrativeBlock text={candidate.whoTheyAre} />
              </div>
            )}

            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {facts.map(([label, value]) => (
                <div key={label} className="min-w-0">
                  <dt className="font-body text-sm" style={{ color: "var(--er-muted-soft)" }}>
                    {label}
                  </dt>
                  <dd
                    className="mt-1 font-body leading-snug"
                    style={{ color: "var(--er-text)", fontSize: "1rem" }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
              {candidate.campaignWebsite && (
                <div className="min-w-0">
                  <dt className="font-body text-sm" style={{ color: "var(--er-muted-soft)" }}>
                    Campaign or official page
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={candidate.campaignWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex max-w-full items-center gap-1 font-body text-sm font-semibold hover:underline"
                      style={{ color: "var(--color-teal-dark)" }}
                    >
                      <span className="truncate">{candidate.campaignWebsite.replace(/^https?:\/\//, "")}</span>
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </DossierSection>

          <DossierSection
            id="issues"
            title="Where They Stand on Big Issues"
            kicker="Issue overview"
            icon={<BookOpen size={20} />}
          >
            <div
              className="mb-5 grid gap-3 rounded-lg border p-4 sm:grid-cols-3"
              style={{ borderColor: "var(--er-border)", backgroundColor: "var(--er-soft-bg)" }}
            >
              <div>
                <p className="text-xs uppercase tracking-wide" style={{ color: "var(--er-muted-soft)" }}>
                  Position summary
                </p>
                <p className="mt-1 font-heading font-bold" style={{ color: "var(--er-text-strong)" }}>
                  Shown first when sourced
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide" style={{ color: "var(--er-muted-soft)" }}>
                  Dated actions
                </p>
                <p className="mt-1 font-heading font-bold" style={{ color: "var(--er-text-strong)" }}>
                  {metrics.actionCount} items on file
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide" style={{ color: "var(--er-muted-soft)" }}>
                  Online signals
                </p>
                <p className="mt-1 font-heading font-bold" style={{ color: "var(--er-text-strong)" }}>
                  {metrics.socialCount} observed
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {candidate.issues.map((issue) => (
                <IssueCardComponent
                  key={issue.id}
                  issue={issue}
                  sources={sourcesForIssue(issue)}
                  recordLabel="What they have done"
                />
              ))}
            </div>
          </DossierSection>

          <DossierSection
            id="record"
            title="Actions and Decisions"
            kicker="Actions and source trail"
            icon={<ListChecks size={20} />}
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div className="md:col-span-2">
                {candidate.recordSummary ? (
                  <NarrativeBlock text={candidate.recordSummary} />
                ) : (
                  <p className="font-body leading-relaxed" style={{ color: "var(--er-text)" }}>
                    This page currently contains {actions.length} dated action entries across {candidate.issues.length} issue areas.
                    {gaps.length > 0
                      ? ` ${gaps.length} issue area includes an evidence-anchored stated/action gap.`
                      : " No stated/action gap is asserted unless evidence is strong enough to anchor it."}
                  </p>
                )}
              </div>
              <div className="rounded border p-4" style={{ borderColor: "var(--er-border)", backgroundColor: "var(--er-soft-bg)" }}>
                <p className="font-body text-sm" style={{ color: "var(--er-muted-soft)" }}>
                  How to read this section
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed" style={{ color: "var(--er-muted)" }}>
                  Dated actions appear here when a linked source supports them. Candidate statements, reporting, and public online activity are labeled where they appear.
                </p>
              </div>
            </div>

            <ul className="mt-5 divide-y" style={{ borderColor: "var(--er-border)" }}>
              {candidate.issues.map((issue) => (
                <li key={issue.id} className="grid gap-1 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <span className="font-body font-semibold" style={{ color: "var(--er-text-strong)" }}>
                    {issue.title}
                  </span>
                  <span className="font-body text-sm" style={{ color: "var(--er-muted-soft)" }}>
                    {issue.actions.length} {profileStatus.actionLabel}{issue.actions.length === 1 ? "" : "s"}
                    {issue.socialSignals.length > 0 ? `, ${issue.socialSignals.length} online observation${issue.socialSignals.length === 1 ? "" : "s"}` : ""}
                    {issue.gap ? ", gap noted" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </DossierSection>

          {(candidate.socialResearchNote || candidate.ownWordsNarrative || socialSignals.length > 0) && (
            <DossierSection
              id="social"
              title="Public Online Activity"
              kicker="Social/online observations"
              icon={<MessageSquare size={20} />}
            >
              {candidate.socialResearchNote && (
                <p className="font-body leading-relaxed" style={{ color: "var(--er-text)" }}>
                  {candidate.socialResearchNote}
                </p>
              )}

              {candidate.ownWordsNarrative && (
                <div className={candidate.socialResearchNote ? "mt-4" : ""}>
                  <NarrativeBlock text={candidate.ownWordsNarrative} />
                </div>
              )}

              {socialSignals.length > 0 ? (
                <ul className={candidate.socialResearchNote || candidate.ownWordsNarrative ? "mt-4" : ""}>
                  {socialSignals.map(({ signal, issueTitle }, index) => (
                    <SocialSignalRow
                      key={`${signal.id}-${issueTitle}-${index}`}
                      signal={signal}
                      issueTitle={issueTitle}
                      sources={candidate.sources}
                    />
                  ))}
                </ul>
              ) : (
                <p className="mt-3 font-body text-sm italic" style={{ color: "var(--er-muted-soft)" }}>
                  No issue-relevant follows, likes, comments, reposts, or candidate-controlled posts are listed.
                </p>
              )}
            </DossierSection>
          )}

          {candidate.whereTheyWorship && (
            <DossierSection
              id="faith"
              title="Where They Worship"
              kicker="Faith affiliation"
              icon={<Heart size={20} />}
            >
              <p className="font-body leading-relaxed" style={{ color: "var(--er-text)" }}>
                {normalizePublicCopy(candidate.whereTheyWorship)}
              </p>
              {candidate.church && (
                <div className="mt-4 grid gap-1 font-body text-sm" style={{ color: "var(--er-muted)" }}>
                  <p className="font-semibold" style={{ color: "var(--er-text-strong)" }}>
                    {candidate.church.name}
                  </p>
                  {candidate.church.denomination && <p>{normalizePublicCopy(candidate.church.denomination)}</p>}
                  {candidate.church.details && <p>{normalizePublicCopy(candidate.church.details)}</p>}
                  {candidate.church.url && (
                    <a
                      href={candidate.church.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold hover:underline"
                      style={{ color: "var(--color-teal-dark)" }}
                    >
                      Visit church website
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </DossierSection>
          )}

          {candidate.campaignFinance && (
            <DossierSection
              id="funding"
              title="Donor/Funding Information"
              kicker="Campaign finance"
              icon={<DollarSign size={20} />}
            >
              <CampaignFinanceSection finance={candidate.campaignFinance} />
            </DossierSection>
          )}

          <DossierSection
            id="sources"
            title="Sources"
            kicker="Research trail"
            icon={<FileText size={20} />}
          >
            <div className="rounded-lg border p-5 sm:flex sm:items-center sm:justify-between sm:gap-6" style={{ borderColor: "var(--er-border)", backgroundColor: "var(--er-soft-bg)" }}>
              <div>
                <p className="font-heading font-bold" style={{ color: "var(--er-text-strong)" }}>
                  {candidate.sources.length} linked public sources
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed" style={{ color: "var(--er-muted)" }}>
                  Open the complete source trail with every public URL used for this profile.
                </p>
              </div>
              <Link
                href={sourcePageHref}
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-heading font-bold uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:mt-0"
                style={{ backgroundColor: "var(--color-teal)", color: "white" }}
              >
                Open Sources
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </DossierSection>

          <CorrectionForm candidateName={candidate.name} />
        </div>
      </div>
    </main>
  );
}
