import type { CandidateFull, Source } from "@/data/candidates";

function sourceTitleFromUrl(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host
      .split(".")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(".");
  } catch {
    return "Public source";
  }
}

function collectTextUrls(value: unknown, urls: Set<string>) {
  if (typeof value === "string") {
    for (const match of value.matchAll(/\((https?:\/\/[^)\s]+)\)|\bhttps?:\/\/[^\s)]+/g)) {
      const url = (match[1] || match[0]).replace(/[.,;:]+$/, "");
      urls.add(url);
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectTextUrls(item, urls));
    return;
  }

  if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectTextUrls(item, urls));
  }
}

export function getCandidateResearchSources(candidate: CandidateFull): Source[] {
  const seen = new Set<string>();
  const sources: Source[] = [];

  for (const source of candidate.sources) {
    if (!source.url || seen.has(source.url)) continue;
    seen.add(source.url);
    sources.push(source);
  }

  const discoveredUrls = new Set<string>();
  collectTextUrls(candidate, discoveredUrls);

  for (const url of discoveredUrls) {
    if (seen.has(url)) continue;
    seen.add(url);
    const title = sourceTitleFromUrl(url);
    sources.push({
      title,
      url,
      publication: title,
      date: "",
    });
  }

  return sources;
}
