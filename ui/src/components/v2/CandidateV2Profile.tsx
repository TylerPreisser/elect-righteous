import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  DollarSign,
  ExternalLink,
  FileText,
  Heart,
  ListChecks,
  MessageSquare,
  User,
} from "lucide-react";
import type { CandidateFullV2, SocialSignal, Source } from "@/data/types-v2";
import IssueCardComponent from "@/components/v2/IssueCardComponent";
import CorrectionForm from "@/components/ui/correction-form";

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
  title: string;
  kicker: string;
  icon: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}

function DossierSection({
  title,
  kicker,
  icon,
  defaultOpen = false,
  children,
}: DossierSectionProps) {
  return (
    <details
      className="group scroll-mt-24 border-t"
      style={{ borderColor: "rgba(16, 64, 93, 0.14)" }}
      open={defaultOpen}
    >
      <summary
        className="flex cursor-pointer list-none items-center gap-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:py-7"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: "rgba(28, 195, 175, 0.10)", color: "var(--color-teal-dark)" }}
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span
            className="block font-body text-sm"
            style={{ color: "var(--color-slate)" }}
          >
            {kicker}
          </span>
          <span
            className="block font-heading font-bold"
            style={{ color: "var(--color-navy)", fontSize: "clamp(1.35rem, 3vw, 1.85rem)", lineHeight: 1.12 }}
          >
            {title}
          </span>
        </span>
        <ChevronRight
          size={20}
          className="shrink-0 transition-transform group-open:rotate-90"
          style={{ color: "var(--color-navy)" }}
          aria-hidden="true"
        />
      </summary>
      <div className="pb-9 pt-1">{children}</div>
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
      className="inline-flex max-w-full items-center gap-1 rounded px-2 py-1 text-xs font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      style={{ backgroundColor: "rgba(16, 64, 93, 0.07)", color: "var(--color-teal-dark)" }}
      title={source.title}
    >
      <span className="truncate">{label}</span>
      <ExternalLink size={11} className="shrink-0" aria-hidden="true" />
    </a>
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
        className="font-semibold underline decoration-teal/40 underline-offset-2 hover:decoration-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
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
  return paragraph
    .replace(/^[-*_]{3,}$/g, "")
    .replace(/^_([^_]+)_$/g, "$1")
    .replace(/^\*([^*]+)\*$/g, "$1")
    .trim();
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
          style={{ color: "var(--color-charcoal)" }}
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
      style={{ borderColor: "rgba(16, 64, 93, 0.10)" }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="rounded px-2 py-1 font-body text-xs font-semibold"
          style={{ backgroundColor: "rgba(196, 146, 42, 0.10)", color: "var(--color-navy)" }}
        >
          {signal.platform}
        </span>
        <span className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
          {issueTitle}
        </span>
      </div>
      <p
        className="font-body leading-relaxed"
        style={{ color: "var(--color-charcoal)", fontSize: "0.95rem" }}
      >
        {signal.observation}
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

export default function CandidateV2Profile({ candidate }: CandidateV2ProfileProps) {
  const partyLabel = PARTY_LABEL[candidate.party] ?? candidate.party;
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
    <main id="main-content">
      <div className="border-b bg-white" style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}>
        <div className="container-main py-8 md:py-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-sm font-body"
            style={{ color: "var(--color-slate)" }}
          >
            <Link
              href="/candidates"
              className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
              style={{ color: "var(--color-teal-dark)" }}
            >
              Candidates
            </Link>
            <span aria-hidden="true">/</span>
            <span>{candidate.name}</span>
          </nav>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
            <div>
              <h1
                className="font-heading font-bold"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: "var(--color-navy)", lineHeight: 1.08 }}
              >
                {candidate.name}
              </h1>
              <p
                className="mt-3 max-w-3xl font-body text-lg leading-relaxed"
                style={{ color: "var(--color-charcoal)" }}
              >
                {partyLabel} - {candidate.position}
                {candidate.incumbent ? " - incumbent" : ""}
              </p>
            </div>

            <div
              className="rounded-lg border bg-white p-4 shadow-sm"
              style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
              aria-label="Profile summary"
            >
              <dl className="grid gap-3 text-sm">
                <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3">
                  <dt className="font-body" style={{ color: "var(--color-slate)" }}>Office</dt>
                  <dd className="font-body font-semibold" style={{ color: "var(--color-navy)" }}>{candidate.position}</dd>
                </div>
                <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3">
                  <dt className="font-body" style={{ color: "var(--color-slate)" }}>Status</dt>
                  <dd className="font-body font-semibold" style={{ color: "var(--color-navy)" }}>
                    {candidate.incumbent ? "Currently in office" : "Candidate / challenger"}
                  </dd>
                </div>
                <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3">
                  <dt className="font-body" style={{ color: "var(--color-slate)" }}>Research</dt>
                  <dd className="font-body font-semibold" style={{ color: "var(--color-navy)" }}>
                    {candidate.sources.length} linked public sources
                  </dd>
                </div>
              </dl>
              <Link
                href={sourcePageHref}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-heading font-bold uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ backgroundColor: "var(--color-navy)", color: "white" }}
              >
                Source Trail
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main py-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <DossierSection
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
                  <dt className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
                    {label}
                  </dt>
                  <dd
                    className="mt-1 font-body leading-snug"
                    style={{ color: "var(--color-charcoal)", fontSize: "1rem" }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
              {candidate.campaignWebsite && (
                <div className="min-w-0">
                  <dt className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
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
            title="Their Record"
            kicker="Documented actions"
            icon={<ListChecks size={20} />}
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div className="md:col-span-2">
                {candidate.recordSummary ? (
                  <NarrativeBlock text={candidate.recordSummary} />
                ) : (
                  <p className="font-body leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                    This page currently contains {actions.length} dated actions across {candidate.issues.length} issue areas.
                    {gaps.length > 0
                      ? ` ${gaps.length} issue area includes an evidence-anchored stated/action gap.`
                      : " No stated/action gap is asserted unless evidence is strong enough to anchor it."}
                  </p>
                )}
              </div>
              <div className="rounded border p-4" style={{ borderColor: "rgba(16, 64, 93, 0.12)", backgroundColor: "#f8f9fa" }}>
                <p className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
                  Source rule
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                  Actions require primary or secondary backing; social-only material stays observational.
                </p>
              </div>
            </div>

            <ul className="mt-5 divide-y" style={{ borderColor: "rgba(16, 64, 93, 0.10)" }}>
              {candidate.issues.map((issue) => (
                <li key={issue.id} className="grid gap-1 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <span className="font-body font-semibold" style={{ color: "var(--color-navy)" }}>
                    {issue.title}
                  </span>
                  <span className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
                    {issue.actions.length} action{issue.actions.length === 1 ? "" : "s"}
                    {issue.socialSignals.length > 0 ? `, ${issue.socialSignals.length} social signal${issue.socialSignals.length === 1 ? "" : "s"}` : ""}
                    {issue.gap ? ", gap noted" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </DossierSection>

          <DossierSection
            title="Where They Stand on Big Issues"
            kicker="Statements beside actions"
            icon={<BookOpen size={20} />}
            defaultOpen
          >
            <div className="grid gap-4">
              {candidate.issues.map((issue, idx) => (
                <IssueCardComponent
                  key={issue.id}
                  issue={issue}
                  sources={sourcesForIssue(issue)}
                  defaultExpanded={idx === 0}
                />
              ))}
            </div>
          </DossierSection>

          {(candidate.socialResearchNote || candidate.ownWordsNarrative || socialSignals.length > 0) && (
            <DossierSection
              title="Relevant Social / Online Signals"
              kicker="Relevant social activity"
              icon={<MessageSquare size={20} />}
            >
              {candidate.socialResearchNote && (
                <p className="font-body leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
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
                  {socialSignals.map(({ signal, issueTitle }) => (
                    <SocialSignalRow
                      key={signal.id}
                      signal={signal}
                      issueTitle={issueTitle}
                      sources={candidate.sources}
                    />
                  ))}
                </ul>
              ) : (
                <p className="mt-3 font-body text-sm italic" style={{ color: "var(--color-slate)" }}>
                  No issue-relevant follows, likes, comments, reposts, or candidate-controlled posts were rendered as evidence on this pass.
                </p>
              )}
            </DossierSection>
          )}

          {candidate.whereTheyWorship && (
            <DossierSection
              title="Where They Worship"
              kicker="Faith affiliation"
              icon={<Heart size={20} />}
            >
              <p className="font-body leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                {candidate.whereTheyWorship}
              </p>
              {candidate.church && (
                <div className="mt-4 grid gap-1 font-body text-sm" style={{ color: "var(--color-charcoal)" }}>
                  <p className="font-semibold" style={{ color: "var(--color-navy)" }}>
                    {candidate.church.name}
                  </p>
                  {candidate.church.denomination && <p>{candidate.church.denomination}</p>}
                  {candidate.church.details && <p>{candidate.church.details}</p>}
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
              title="Donor/Funding Information"
              kicker="Campaign finance"
              icon={<DollarSign size={20} />}
            >
              <dl className="grid gap-3 sm:grid-cols-3">
                <div>
                  <dt className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
                    Total raised
                  </dt>
                  <dd className="font-heading font-bold" style={{ color: "var(--color-navy)", fontSize: "1.2rem" }}>
                    {candidate.campaignFinance.totalRaised}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
                    Reporting period
                  </dt>
                  <dd className="font-body" style={{ color: "var(--color-charcoal)" }}>
                    {candidate.campaignFinance.reportingPeriod}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 font-body leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                {candidate.campaignFinance.narrative}
              </p>
              {candidate.campaignFinance.donors.length > 0 && (
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[28rem] text-sm">
                    <thead>
                      <tr className="border-b" style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}>
                        <th className="px-3 py-2 text-left font-body font-semibold" style={{ color: "var(--color-navy)" }}>
                          Donor
                        </th>
                        <th className="px-3 py-2 text-right font-body font-semibold" style={{ color: "var(--color-navy)" }}>
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidate.campaignFinance.donors.map((donor) => (
                        <tr key={`${donor.name}-${donor.amount}`} className="border-b" style={{ borderColor: "rgba(16, 64, 93, 0.08)" }}>
                          <td className="px-3 py-2 font-body" style={{ color: "var(--color-charcoal)" }}>
                            {donor.name}
                          </td>
                          <td className="px-3 py-2 text-right font-body" style={{ color: "var(--color-charcoal)" }}>
                            {donor.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {candidate.campaignFinance.undisclosed && (
                <p className="mt-3 font-body text-sm italic" style={{ color: "var(--color-slate)" }}>
                  {candidate.campaignFinance.undisclosed}
                </p>
              )}
              <p className="mt-3 font-body text-xs" style={{ color: "var(--color-slate)" }}>
                Source: {candidate.campaignFinance.source}
              </p>
            </DossierSection>
          )}

          <DossierSection
            title="Sources"
            kicker="Research trail"
            icon={<FileText size={20} />}
          >
            <div className="rounded-lg border p-5 sm:flex sm:items-center sm:justify-between sm:gap-6" style={{ borderColor: "rgba(16, 64, 93, 0.12)", backgroundColor: "#f8f9fa" }}>
              <div>
                <p className="font-heading font-bold" style={{ color: "var(--color-navy)" }}>
                  {candidate.sources.length} linked public sources
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed" style={{ color: "var(--color-charcoal)" }}>
                  Open the complete source trail with every public URL used for this profile.
                </p>
              </div>
              <Link
                href={sourcePageHref}
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-heading font-bold uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:mt-0"
                style={{ backgroundColor: "var(--color-navy)", color: "white" }}
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
