"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  MessageSquare,
  Radio,
  Users,
} from "lucide-react";
import type { CandidateFull, OwnWordsSection as OwnWordsData } from "@/data/candidates";
import { getCandidateResearchSources } from "@/lib/candidate-sources";

// ─── Body Paragraph ──────────────────────────────────────────────────────────

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body leading-relaxed"
      style={{ fontSize: "1.125rem", color: "var(--color-charcoal)" }}
    >
      {children}
    </p>
  );
}

function ProfileSection({
  title,
  kicker,
  children,
  className = "",
  defaultOpen = false,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className={`group my-12 overflow-hidden rounded-lg border bg-white ${className}`}
      style={{ borderColor: "rgba(16, 64, 93, 0.14)" }}
      open={defaultOpen}
    >
      <summary
        className="flex cursor-pointer list-none items-center gap-4 border-b p-5 sm:p-6 lg:p-7"
        style={{ borderColor: "#e2e8f0", backgroundColor: "#f8f9fa" }}
      >
        <span className="min-w-0 flex-1">
          {kicker && (
            <span className="block font-heading text-xs font-bold uppercase tracking-widest text-teal-dark">
              {kicker}
            </span>
          )}
          <span className="mt-1 block font-heading text-2xl font-bold text-navy">
            {title}
          </span>
        </span>
        <ChevronRight
          size={20}
          className="shrink-0 text-navy transition-transform group-open:rotate-90"
          aria-hidden="true"
        />
      </summary>
      <div className="p-5 sm:p-6 lg:p-7">
        {children}
      </div>
    </details>
  );
}

function ParagraphStack({ text }: { text: string }) {
  return (
    <div className="grid gap-5">
      {text.split("\n\n").map((paragraph, index) => (
        <BodyText key={index}>{paragraph}</BodyText>
      ))}
    </div>
  );
}

// ─── Social Scrub + Own Words ───────────────────────────────────────────────

type ScrubTopic =
  | "statements"
  | "context"
  | "interactions"
  | "response"
  | "accounts"
  | "limits"
  | "method";

interface NarrativeCard {
  title: string;
  topic: ScrubTopic;
  text: string;
}

interface VerbatimItem {
  quote: string;
  context: string;
  url?: string;
  sourceLabel?: string;
}

const SCRUB_TOPIC_STYLES: Record<
  ScrubTopic,
  {
    label: string;
    icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
    accent: string;
    bg: string;
  }
> = {
  statements: {
    label: "Posts, comments, and public statements",
    icon: MessageSquare,
    accent: "var(--color-navy)",
    bg: "rgba(16, 64, 93, 0.06)",
  },
  context: {
    label: "Scrub context",
    icon: FileText,
    accent: "var(--color-navy-light)",
    bg: "rgba(16, 64, 93, 0.05)",
  },
  interactions: {
    label: "Interaction signals",
    icon: Users,
    accent: "var(--color-gold)",
    bg: "rgba(196, 146, 42, 0.10)",
  },
  response: {
    label: "Reach and response",
    icon: BarChart3,
    accent: "var(--color-teal-dark)",
    bg: "rgba(28, 195, 175, 0.10)",
  },
  accounts: {
    label: "Accounts and platform footprint",
    icon: Radio,
    accent: "var(--color-slate)",
    bg: "rgba(74, 74, 74, 0.08)",
  },
  limits: {
    label: "Not found or not accessible",
    icon: AlertTriangle,
    accent: "var(--color-red-flag)",
    bg: "rgba(155, 34, 38, 0.08)",
  },
  method: {
    label: "Harvest notes",
    icon: FileText,
    accent: "var(--color-navy-light)",
    bg: "rgba(16, 64, 93, 0.05)",
  },
};

function cleanNarrativeText(text: string) {
  return text
    .replace(/^#+\s.*\n+/, "")
    .replace(/^\s*[-]{3,}\s*$/gm, "")
    .trim();
}

function cleanParagraph(text: string) {
  return text
    .replace(/^\*\*(Methodology:)\*\*\s*/i, "$1 ")
    .replace(/^\*([\s\S]+)\*$/, "$1")
    .replace(/^_([\s\S]+)_$/, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\\\$/g, "$")
    .trim();
}

function getTopicForParagraph(paragraph: string): ScrubTopic {
  const text = paragraph.toLowerCase();

  if (
    text.startsWith("methodology:") ||
    text.includes("date range covered:") ||
    text.includes("sources checked included")
  ) {
    return "method";
  }
  if (
    text.includes("not accessible") ||
    text.includes("contains no") ||
    text.includes("no posts about") ||
    text.includes("no reviewed item") ||
    text.includes("not visible") ||
    text.includes("visible absences")
  ) {
    return "limits";
  }
  if (
    text.includes("platform footprint") ||
    text.includes("presence") ||
    text.includes("facebook") ||
    text.includes("instagram") ||
    text.includes("bluesky") ||
    text.includes("x presence") ||
    text.includes("truth social") ||
    text.includes("linkedin")
  ) {
    return "accounts";
  }
  if (
    text.includes("audience") ||
    text.includes("engagement") ||
    text.includes("likes") ||
    text.includes("views") ||
    text.includes("highest-response") ||
    text.includes("highest-viewed")
  ) {
    return "response";
  }
  if (
    text.includes("commented") ||
    text.includes("comment") ||
    text.includes("reply") ||
    text.includes("replies") ||
    text.includes("follows") ||
    text.includes("followers") ||
    text.includes("alignment") ||
    text.includes("amplification") ||
    text.includes("reposted") ||
    text.includes("reposts") ||
    text.includes("endorsed") ||
    text.includes("tagged")
  ) {
    return "interactions";
  }
  return "context";
}

function getNarrativeCards(narrative: string): {
  summary: string | null;
  cards: NarrativeCard[];
  methodNotes: string[];
} {
  const paragraphs = cleanNarrativeText(narrative)
    .split(/\n{2,}/)
    .map(cleanParagraph)
    .filter(Boolean);

  let summary: string | null = null;
  const methodNotes: string[] = [];
  const body: string[] = [];

  for (const paragraph of paragraphs) {
    if (/^methodology:/i.test(paragraph) || /^date range covered:/i.test(paragraph)) {
      methodNotes.push(paragraph);
    } else if (!summary && /summary of what/i.test(paragraph)) {
      summary = paragraph;
    } else if (!/^we report patterns/i.test(paragraph)) {
      body.push(paragraph);
    }
  }

  return {
    summary,
    methodNotes,
    cards: body.map((text) => {
      const topic = getTopicForParagraph(text);
      return {
        topic,
        title: SCRUB_TOPIC_STYLES[topic].label,
        text,
      };
    }),
  };
}

function hostLabel(href: string) {
  if (!href.startsWith("http")) return "Harvest";

  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "Source";
  }
}

function stripMarkdown(text: string) {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSourceLinks(text: string) {
  return Array.from(text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)).map((match) => ({
    label: match[1],
    href: match[2],
  }));
}

function shortenContext(text: string, maxLength = 185) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;

  const sentenceEnd = cleaned.slice(0, maxLength).search(/[.!?](?=\s|$)(?!.*[.!?](?=\s|$))/);
  if (sentenceEnd > 60) {
    return cleaned.slice(0, sentenceEnd + 1);
  }

  const lastBreak = Math.max(
    cleaned.lastIndexOf("; ", maxLength),
    cleaned.lastIndexOf(", ", maxLength),
    cleaned.lastIndexOf(" ", maxLength)
  );
  const end = lastBreak > 60 ? lastBreak : maxLength;
  return `${cleaned.slice(0, end).replace(/[,\s]+$/g, "")}...`;
}

function getQuoteContext(paragraph: string, quoteWithMarks: string) {
  const [before, after = ""] = paragraph.split(quoteWithMarks);
  const sourceFreeBefore = stripMarkdown(before)
    .replace(/[,;:\s]*$/g, "")
    .trim();
  const sourceFreeAfter = stripMarkdown(after)
    .replace(/^\s*(?:,|and|or|with|that|saying|said|wrote)\s*/i, "")
    .replace(/\s*\(?source\)?\s*$/i, "")
    .trim();

  if (sourceFreeBefore.length > 18) {
    return shortenContext(sourceFreeBefore);
  }

  if (sourceFreeAfter.length > 18) {
    return shortenContext(sourceFreeAfter);
  }

  return "Publicly attributed statement from the harvested source set.";
}

function getVerbatimItems(narrative: string, quotes: CandidateFull["quotes"]): VerbatimItem[] {
  const items: VerbatimItem[] = [];
  const seen = new Set<string>();
  const paragraphs = cleanNarrativeText(narrative)
    .split(/\n{2,}/)
    .map(cleanParagraph)
    .filter(Boolean);

  for (const paragraph of paragraphs) {
    const links = extractSourceLinks(paragraph);
    const quoteMatches = Array.from(paragraph.matchAll(/"([^"]{12,700})"/g));

    for (const match of quoteMatches) {
      const quote = match[1].trim();
      const normalized = quote.toLowerCase().replace(/\W+/g, " ");
      if (seen.has(normalized)) continue;
      seen.add(normalized);

      items.push({
        quote,
        context: getQuoteContext(paragraph, match[0]),
        url: links[0]?.href,
        sourceLabel: links[0]?.label,
      });
    }
  }

  for (const quote of quotes) {
    const normalized = quote.text.toLowerCase().replace(/\W+/g, " ");
    if (seen.has(normalized)) continue;
    seen.add(normalized);

    items.push({
      quote: quote.text,
      context: [quote.topic, quote.source, quote.date ? formatOwnWordsDate(quote.date) : ""]
        .filter(Boolean)
        .join(" · "),
      url: quote.url,
      sourceLabel: quote.source,
    });
  }

  return items;
}

function renderPlainText(text: string, keyPrefix: string) {
  const parts = text.split(/("[^"]+"|\b\d+(?:,\d{3})*(?:\.\d+)?(?:\s+of\s+\d+(?:,\d{3})*)?(?:\s*(?:percent|%|likes|reposts|replies|views|posts|followers|items|pages))?)/g);

  return parts.map((part, index) => {
    if (/^".+"$/.test(part)) {
      return (
        <strong key={`${keyPrefix}-quote-${index}`} className="font-heading font-bold text-navy">
          {part}
        </strong>
      );
    }

    if (/^\d/.test(part)) {
      return (
        <strong key={`${keyPrefix}-num-${index}`} className="font-heading font-bold text-navy">
          {part}
        </strong>
      );
    }

    return <span key={`${keyPrefix}-text-${index}`}>{part}</span>;
  });
}

function LinkedNarrativeText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let sourceIndex = 1;

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    const before = text.slice(lastIndex, match.index);
    if (before) nodes.push(...renderPlainText(before, `plain-${lastIndex}`));

    const isExternal = href.startsWith("http");
    const chipText = label.toLowerCase() === "source" ? `Source ${sourceIndex++}` : label;

    if (isExternal) {
      nodes.push(
        <a
          key={`link-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline break-words border-b font-heading text-[0.78em] font-bold normal-case tracking-normal transition-colors hover:text-navy sm:mx-1 sm:inline-flex sm:max-w-full sm:items-center sm:gap-1 sm:rounded-full sm:border sm:px-2 sm:py-0.5 sm:align-middle sm:text-[0.7rem] sm:uppercase sm:tracking-wider sm:hover:bg-teal sm:hover:text-white"
          style={{ borderColor: "rgba(28, 195, 175, 0.35)", color: "var(--color-teal-dark)" }}
          aria-label={`${chipText}: ${hostLabel(href)}`}
          title={hostLabel(href)}
        >
          {chipText}
          <ExternalLink size={10} className="hidden shrink-0 sm:inline" aria-hidden="true" />
        </a>
      );
    } else {
      nodes.push(
        <span
          key={`note-${match.index}`}
          className="inline font-heading text-[0.78em] font-bold normal-case tracking-normal sm:mx-1 sm:inline-flex sm:rounded-full sm:px-2 sm:py-0.5 sm:align-middle sm:text-[0.7rem] sm:uppercase sm:tracking-wider"
          style={{ backgroundColor: "rgba(16, 64, 93, 0.08)", color: "var(--color-navy)" }}
        >
          {label}
        </span>
      );
    }

    lastIndex = match.index + fullMatch.length;
  }

  const after = text.slice(lastIndex);
  if (after) nodes.push(...renderPlainText(after, `plain-${lastIndex}`));

  return <>{nodes}</>;
}

function formatOwnWordsDate(date: string, style: "short" | "long" = "short") {
  return new Intl.DateTimeFormat("en-US", {
    month: style === "short" ? "short" : "long",
    day: style === "long" ? "numeric" : undefined,
    year: "numeric",
  }).format(new Date(date + "T12:00:00"));
}

function SocialPresenceScrub({
  candidateName,
  data,
  quotes,
}: {
  candidateName: string;
  data: OwnWordsData;
  quotes: CandidateFull["quotes"];
}) {
  const { summary, cards, methodNotes } = getNarrativeCards(data.narrative);
  const verbatimItems = getVerbatimItems(data.narrative, quotes);
  const groupedCards = cards.reduce<Record<ScrubTopic, NarrativeCard[]>>(
    (groups, card) => {
      groups[card.topic].push(card);
      return groups;
    },
    {
      statements: [],
      context: [],
      interactions: [],
      response: [],
      accounts: [],
      limits: [],
      method: [],
    }
  );
  const sections = (Object.keys(groupedCards) as ScrubTopic[]).filter(
    (topic) => topic !== "statements" && topic !== "context" && groupedCards[topic].length > 0
  );

  return (
    <section aria-labelledby="presence-scrub-heading" className="my-12">
      <div
        className="overflow-hidden rounded-lg border"
        style={{ borderColor: "rgba(16, 64, 93, 0.14)", backgroundColor: "#ffffff" }}
      >
        <div className="p-5 sm:p-6 lg:p-8" style={{ backgroundColor: "var(--color-navy)" }}>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div>
              <p
                className="font-heading text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--color-teal-light)" }}
              >
                Public-posting readout
              </p>
              <h2
                id="presence-scrub-heading"
                className="mt-2 font-heading text-2xl font-bold text-white"
              >
                Social Media & Online Presence Scrub
              </h2>
              <p className="mt-3 max-w-4xl font-body text-sm leading-relaxed text-white/75">
                {summary ||
                  `Public posts, comments, account footprint, response signals, and source limits found for ${candidateName}.`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-white lg:grid-cols-1">
              <div className="rounded-md bg-white/10 px-3 py-2">
                <span className="block font-heading text-[0.65rem] font-bold uppercase tracking-wider text-white/55">
                  Sources
                </span>
                <span className="font-heading text-sm font-bold">{data.platformsCovered.length} platforms</span>
              </div>
              <div className="rounded-md bg-white/10 px-3 py-2">
                <span className="block font-heading text-[0.65rem] font-bold uppercase tracking-wider text-white/55">
                  Updated
                </span>
                <span className="font-heading text-sm font-bold">
                  {formatOwnWordsDate(data.lastUpdated, "long")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-2 lg:p-8">
          {verbatimItems.length > 0 && (
            <details
              className="group rounded-lg border bg-white lg:col-span-2"
              style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 p-4 sm:p-5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                  style={{
                    backgroundColor: SCRUB_TOPIC_STYLES.statements.bg,
                    color: SCRUB_TOPIC_STYLES.statements.accent,
                  }}
                  aria-hidden="true"
                >
                  <MessageSquare size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className="block font-heading text-sm font-bold uppercase tracking-widest"
                    style={{ color: SCRUB_TOPIC_STYLES.statements.accent }}
                  >
                    {SCRUB_TOPIC_STYLES.statements.label}
                  </span>
                  <span className="mt-1 block font-body text-xs text-slate">
                    Verbatim posts, comments, and attributed public statements only
                  </span>
                </span>
                <ChevronRight
                  size={18}
                  className="shrink-0 transition-transform group-open:rotate-90"
                  aria-hidden="true"
                />
              </summary>
              <div className="border-t p-4 sm:p-5" style={{ borderColor: "#e2e8f0" }}>
                <div className="grid gap-4 lg:grid-cols-2">
                  {verbatimItems.map((item, itemIndex) => (
                    <figure
                      key={`${item.quote}-${itemIndex}`}
                      className="min-w-0 rounded-lg border-l-4 p-4 sm:p-5"
                      style={{
                        borderColor: "#e2e8f0",
                        borderLeftColor: "var(--color-teal)",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      <figcaption className="mb-3 font-body text-[0.68rem] font-semibold uppercase leading-snug tracking-wide text-slate sm:text-xs sm:tracking-wider">
                        {item.context}
                      </figcaption>
                      <blockquote className="break-words font-heading text-xl font-bold leading-snug text-navy sm:text-2xl lg:text-3xl">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex max-w-full items-center gap-1 rounded-full border px-2.5 py-1 font-heading text-[0.68rem] font-bold uppercase tracking-wide hover:bg-teal hover:text-white sm:text-[0.7rem] sm:tracking-wider"
                          style={{ borderColor: "rgba(28, 195, 175, 0.35)", color: "var(--color-teal-dark)" }}
                          title={item.sourceLabel || hostLabel(item.url)}
                        >
                          <span className="truncate">{hostLabel(item.url)}</span>
                          <ExternalLink size={10} aria-hidden="true" />
                        </a>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            </details>
          )}

          {sections.map((topic, index) => {
            const topicStyle = SCRUB_TOPIC_STYLES[topic];
            const Icon = topicStyle.icon;
            const topicCards = groupedCards[topic];

            return (
              <details
                key={topic}
                className="group rounded-lg border bg-white"
                style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 p-4 sm:p-5">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: topicStyle.bg, color: topicStyle.accent }}
                    aria-hidden="true"
                  >
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="block font-heading text-sm font-bold uppercase tracking-widest"
                      style={{ color: topicStyle.accent }}
                    >
                      {topicStyle.label}
                    </span>
                    <span className="mt-1 block font-body text-xs text-slate">
                      {topicCards.length} item{topicCards.length === 1 ? "" : "s"}
                    </span>
                  </span>
                  <ChevronRight
                    size={18}
                    className="shrink-0 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <div className="border-t px-4 pb-4 sm:px-5 sm:pb-5" style={{ borderColor: "#e2e8f0" }}>
                  <div className="divide-y" style={{ borderColor: "#e2e8f0" }}>
                    {topicCards.map((card, cardIndex) => (
                      <p
                        key={`${card.title}-${cardIndex}`}
                        className="py-4 font-body text-[0.98rem] leading-8 sm:text-base sm:leading-relaxed"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        <LinkedNarrativeText text={card.text} />
                      </p>
                    ))}
                  </div>
                </div>
              </details>
            );
          })}

          <details
            className="group rounded-lg border bg-white lg:col-span-2"
            style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 p-4 sm:p-5">
              <CalendarDays size={20} className="shrink-0 text-teal" aria-hidden="true" />
              <span className="min-w-0 flex-1 font-heading text-sm font-bold uppercase tracking-widest text-navy">
                Sources, date range, and limits
              </span>
              <ChevronRight
                size={18}
                className="shrink-0 transition-transform group-open:rotate-90"
                aria-hidden="true"
              />
            </summary>
            <div className="grid gap-4 border-t p-4 sm:p-5 lg:grid-cols-[18rem_minmax(0,1fr)]" style={{ borderColor: "#e2e8f0" }}>
              <div>
                <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-navy">
                  Date Range
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal">
                  {formatOwnWordsDate(data.dateRangeStart)} to {formatOwnWordsDate(data.dateRangeEnd)}
                </p>
                <h3 className="mt-5 font-heading text-xs font-bold uppercase tracking-widest text-navy">
                  Platforms Covered
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.platformsCovered.map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full px-2.5 py-1 font-heading text-[0.7rem] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: "rgba(28, 195, 175, 0.10)", color: "var(--color-teal-dark)" }}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                {[...methodNotes, data.disclaimer].map((note, index) => (
                  <p
                    key={index}
                    className="mb-3 font-body text-sm leading-relaxed last:mb-0"
                    style={{ color: "var(--color-slate)" }}
                  >
                    <LinkedNarrativeText text={note} />
                  </p>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

// ─── Correction Form ────────────────────────────────────────────────────────

function CorrectionForm({
  candidateName,
}: {
  candidateName: string;
  candidateSlug: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", `Elect Righteous — Correction for ${candidateName}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("candidate", candidateName);

    try {
      const res = await fetch("https://formsubmit.co/ajax/tylerpreisser@gmail.com", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success === "true") {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl p-6 sm:p-8 text-center"
        style={{ backgroundColor: "#f0fdf9", border: "1px solid rgba(28, 195, 175, 0.3)" }}
      >
        <p className="font-heading font-bold text-lg mb-1" style={{ color: "var(--color-navy)" }}>
          Thank you!
        </p>
        <p className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
          Your submission has been received. We&apos;ll review it and update this profile if needed.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl p-6 sm:p-8"
      style={{ backgroundColor: "#f8f9fa", border: "1px solid #e2e8f0" }}
    >
      <h2
        className="font-heading font-bold text-lg mb-1"
        style={{ color: "var(--color-navy)" }}
      >
        Is Something Wrong or Missing?
      </h2>
      <p
        className="font-body text-sm mb-6 leading-relaxed"
        style={{ color: "var(--color-slate)" }}
      >
        If you are {candidateName} or represent their campaign, or if you have a correction or
        additional information, let us know. We want to get this right.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <label
            htmlFor="correction-name"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Your Name
          </label>
          <input
            type="text"
            id="correction-name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="Jane Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="correction-email"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Email
          </label>
          <input
            type="email"
            id="correction-email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="you@example.com"
          />
        </div>

        {/* Relationship */}
        <div>
          <label
            htmlFor="correction-relationship"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Your Relationship to This Candidate
          </label>
          <select
            id="correction-relationship"
            name="relationship"
            required
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
          >
            <option value="">Select one...</option>
            <option value="I am this candidate">I am this candidate</option>
            <option value="I represent this candidate's campaign">I represent this candidate&apos;s campaign</option>
            <option value="Local voter with information">I&apos;m a local voter with information</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="correction-message"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            What Should We Change or Add?
          </label>
          <textarea
            id="correction-message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2 resize-y"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="Tell us what's incorrect, missing, or needs to be updated..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="self-start flex items-center gap-2 px-6 py-2.5 rounded-md font-heading font-semibold text-sm uppercase tracking-wider text-white transition-all duration-200 hover:shadow-lg disabled:opacity-50"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          {submitting ? "Sending..." : "Submit Correction"}
        </button>

        {error && (
          <p className="text-sm font-body" style={{ color: "var(--color-red-flag)" }}>
            Something went wrong. Please try again or email us directly at tylerpreisser@gmail.com
          </p>
        )}
      </form>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CandidateDetailClient({
  candidate,
}: {
  candidate: CandidateFull;
}) {
  const researchSources = getCandidateResearchSources(candidate);
  const partyLabel =
    candidate.party === "R"
      ? "Republican"
      : candidate.party === "D"
      ? "Democrat"
      : "Independent";

  // At-a-glance facts for the key facts box
  const glanceFacts = [
    { label: "Age / Born", value: candidate.born },
    { label: "Hometown", value: candidate.hometown },
    { label: "Church / Faith", value: candidate.religion },
    { label: "Education", value: candidate.education },
    { label: "Family", value: candidate.family },
    { label: "Occupation", value: candidate.occupation },
    { label: "District", value: candidate.district },
    { label: "Last Result", value: candidate.margin2024 },
    ...(candidate.campaignWebsite
      ? [{ label: "Campaign Website", value: candidate.campaignWebsite, isLink: true }]
      : []),
  ].filter((f) => f.value);

  // Split into two columns for the grid
  const col1 = glanceFacts.filter((_, i) => i % 2 === 0);
  const col2 = glanceFacts.filter((_, i) => i % 2 !== 0);

  return (
    <article>
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <div
        className="border-b"
        style={{ backgroundColor: "var(--color-light)", borderColor: "#e2e8f0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 py-3 text-sm font-body flex-wrap"
            style={{ color: "var(--color-slate)" }}
          >
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "var(--color-teal-dark)" }}
            >
              Home
            </Link>
            <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
            <Link
              href="/candidates"
              className="hover:underline"
              style={{ color: "var(--color-teal-dark)" }}
            >
              Candidates
            </Link>
            <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
            <span aria-current="page" style={{ color: "var(--color-charcoal)" }}>
              {candidate.name}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Article Header ───────────────────────────────────────────────── */}
      <header className="section-navy" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Party + status line */}
            <p
              className="font-heading font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ color: "rgba(246,246,246,0.55)" }}
            >
              {partyLabel}
              {" · "}
              {candidate.incumbent ? "Currently in Office" : "Candidate"}
            </p>

            {/* Candidate name */}
            <h1
              className="font-heading font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
            >
              {candidate.name}
            </h1>

            {/* Position */}
            <p
              className="font-heading font-bold text-lg uppercase tracking-wide mb-3"
              style={{ color: "var(--color-teal)" }}
            >
              {candidate.position}
            </p>

            {/* One-liner occupation */}
            <p
              className="font-body text-base"
              style={{ color: "rgba(246,246,246,0.70)" }}
            >
              {candidate.occupation}
              {candidate.hometown ? ` · ${candidate.hometown}` : ""}
            </p>
          </div>
        </div>
      </header>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">

          {/* ── Key Facts Box ───────────────────────────────────────────── */}
          {glanceFacts.length > 0 && (
            <aside
              className="rounded-xl mb-12 p-6 sm:p-8"
              style={{ backgroundColor: "#f8f9fa" }}
              aria-label="Key facts at a glance"
            >
              <p
                className="font-heading font-bold text-xs uppercase tracking-widest mb-5"
                style={{ color: "var(--color-navy)" }}
              >
                At a Glance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {/* Column 1 */}
                <dl className="flex flex-col gap-4">
                  {col1.map((fact) => (
                    <div key={fact.label}>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        {fact.label}
                      </dt>
                      <dd
                        className="font-body text-sm leading-snug"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        {"isLink" in fact && fact.isLink ? (
                          <a
                            href={fact.value as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                            style={{ color: "var(--color-teal-dark)" }}
                          >
                            {(fact.value as string).replace(/^https?:\/\//, "")}
                            <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                {/* Column 2 */}
                <dl className="flex flex-col gap-4">
                  {col2.map((fact) => (
                    <div key={fact.label}>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        {fact.label}
                      </dt>
                      <dd
                        className="font-body text-sm leading-snug"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        {"isLink" in fact && fact.isLink ? (
                          <a
                            href={fact.value as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                            style={{ color: "var(--color-teal-dark)" }}
                          >
                            {(fact.value as string).replace(/^https?:\/\//, "")}
                            <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          )}

          {/* ── Who They Are ────────────────────────────────────────────── */}
          {candidate.whoTheyAre && (
            <ProfileSection title="Who They Are" kicker="Background">
              <ParagraphStack text={candidate.whoTheyAre} />
            </ProfileSection>
          )}

          {/* ── Their Record ────────────────────────────────────────────── */}
          {candidate.theirRecord && (
            <ProfileSection title="Their Record Summary" kicker="Public record">
              <ParagraphStack text={candidate.theirRecord} />
            </ProfileSection>
          )}

          {/* ── Social Media & Online Presence Scrub ─────────────────── */}
          {candidate.inTheirOwnWords && (
            <SocialPresenceScrub
              candidateName={candidate.name}
              data={candidate.inTheirOwnWords}
              quotes={candidate.quotes}
            />
          )}

          {/* ── What They Stand For ──────────────────────────────────── */}
          {candidate.whatTheyStandFor && candidate.whatTheyStandFor.length > 0 && (
            <ProfileSection title="What They Stand For" kicker="Issue positions">
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "var(--color-slate)", fontStyle: "italic" }}
              >
                Based on public statements, voting record, and campaign materials.
                When a candidate has not taken a clear public position, we say so.
              </p>
              <dl className="mt-6 grid gap-4 lg:grid-cols-2">
                {candidate.whatTheyStandFor.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg border p-4 sm:p-5"
                    style={{ backgroundColor: "#f8f9fa", borderColor: "#e2e8f0" }}
                  >
                    <dt
                      className="font-heading font-bold text-sm uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {item.issue}
                    </dt>
                    <dd
                      className="font-body leading-relaxed"
                      style={{ fontSize: "1.0625rem", color: "var(--color-charcoal)" }}
                    >
                      {item.stance}
                    </dd>
                  </div>
                ))}
              </dl>
            </ProfileSection>
          )}

          {/* ── Follow the Money ────────────────────────────────────────── */}
          {candidate.campaignFinance && (
            <ProfileSection title="Follow the Money" kicker="Campaign finance">
              {candidate.campaignFinance.narrative && (
                <BodyText>{candidate.campaignFinance.narrative}</BodyText>
              )}

              {/* Donor Table */}
              {candidate.campaignFinance.donors && candidate.campaignFinance.donors.length > 0 && (
                <div className="my-8 overflow-x-auto rounded-lg border" style={{ borderColor: "#e2e8f0" }}>
                  <table className="w-full min-w-[28rem] text-sm">
                    <thead>
                      <tr style={{ backgroundColor: "#f8f9fa" }}>
                        <th className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Donor</th>
                        <th className="text-right px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidate.campaignFinance.donors.map((d, i) => (
                        <tr key={i} className="border-t" style={{ borderColor: "#f1f5f9" }}>
                          <td className="px-5 py-3 font-body" style={{ color: "var(--color-charcoal)" }}>{d.name}</td>
                          <td className="px-5 py-3 font-heading font-semibold text-right" style={{ color: "var(--color-navy)" }}>{d.amount}</td>
                        </tr>
                      ))}
                      {candidate.campaignFinance.undisclosed && (
                        <tr className="border-t" style={{ borderColor: "#e2e8f0", backgroundColor: "#f8f9fa" }}>
                          <td colSpan={2} className="px-5 py-3 text-xs font-body italic" style={{ color: "var(--color-slate)" }}>
                            {candidate.campaignFinance.undisclosed}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              <p className="text-xs mt-4" style={{ color: "var(--color-slate)" }}>
                Source: {candidate.campaignFinance.source} — {candidate.campaignFinance.reportingPeriod}
              </p>
            </ProfileSection>
          )}

          {/* ── What You Should Know ────────────────────────────────────── */}
          {candidate.whatYouShouldKnow.length > 0 && (
            <ProfileSection title="What You Should Know" kicker="Key takeaways">
              <ul className="grid gap-4 lg:grid-cols-2" role="list">
                {candidate.whatYouShouldKnow.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-lg border p-4 sm:p-5"
                    style={{ color: "var(--color-charcoal)", borderColor: "#e2e8f0", backgroundColor: "#f8f9fa" }}
                  >
                    {/* Numbered bullet */}
                    <span
                      className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full font-heading font-bold text-xs mt-0.5"
                      style={{
                        backgroundColor: "var(--color-navy)",
                        color: "white",
                        minWidth: "1.75rem",
                      }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p
                      className="font-body leading-relaxed"
                      style={{ fontSize: "1.0625rem", paddingTop: "0.125rem" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </ProfileSection>
          )}

          {/* ── Where They Worship ──────────────────────────────────────── */}
          {(candidate.whereTheyWorship || candidate.church) && (
            <ProfileSection title="Where They Worship" kicker="Faith affiliation">
              {candidate.whereTheyWorship && (
                <BodyText>{candidate.whereTheyWorship}</BodyText>
              )}
              {candidate.church && (
                <div className="mt-6 rounded-lg border p-5" style={{ backgroundColor: "#f8f9fa", borderColor: "#e2e8f0" }}>
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: "var(--color-navy)" }}>
                    {candidate.church.name}
                  </p>
                  {candidate.church.denomination && (
                    <p className="text-sm mb-1" style={{ color: "var(--color-slate)" }}>
                      {candidate.church.denomination}
                    </p>
                  )}
                  {candidate.church.url && (
                    <a
                      href={candidate.church.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold hover:underline mt-1"
                      style={{ color: "var(--color-teal-dark)" }}
                    >
                      Visit Church Website <ExternalLink size={12} />
                    </a>
                  )}
                  {candidate.church.details && (
                    <p className="text-sm mt-2" style={{ color: "var(--color-charcoal)" }}>
                      {candidate.church.details}
                    </p>
                  )}
                </div>
              )}
            </ProfileSection>
          )}

          {/* ── Sources Link ──────────────────────────────────────────────── */}
          {researchSources.length > 0 && (
            <ProfileSection title="Sources" kicker="Research trail">
                <p
                  className="font-body text-sm mb-5"
                  style={{ color: "var(--color-slate)" }}
                >
                  All facts and claims in this profile are drawn from {researchSources.length} publicly
                  available sources.
                </p>
                <Link
                  href={`/candidates/${candidate.slug}/sources`}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
                >
                  View All {researchSources.length} Sources
                  <ExternalLink size={14} aria-hidden="true" />
                </Link>
            </ProfileSection>
          )}

          {/* ── Candidate Correction Form ─────────────────────────────── */}
          <CorrectionForm candidateName={candidate.name} candidateSlug={candidate.slug} />

          {/* ── Navigation ──────────────────────────────────────────────── */}
          <div
            className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ borderColor: "#e2e8f0" }}
          >
            <Link
              href="/candidates"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-colors duration-200 hover:opacity-75"
              style={{ color: "var(--color-navy)" }}
            >
              <ChevronLeft size={15} aria-hidden="true" />
              All Candidates
            </Link>

            {candidate.electionSlug && (
              <Link
                href={`/elections/${candidate.electionSlug}`}
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-colors duration-200 hover:opacity-75 sm:ml-auto"
                style={{ color: "var(--color-teal-dark)" }}
              >
                View election details
                <ChevronRight size={15} aria-hidden="true" />
              </Link>
            )}
          </div>
          </div>
        </div>
      </div>
    </article>
  );
}
