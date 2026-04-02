import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const CANDIDATES_DIR = "/Users/tylerpreisser/Desktop/elect-righteous/memory/candidates";

// Extract all URLs from markdown text (both bare and [text](url) format)
function extractUrls(text) {
  const urls = new Set();
  // Markdown links: [text](url)
  const mdRegex = /\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;
  let match;
  while ((match = mdRegex.exec(text)) !== null) {
    urls.add(match[2].replace(/[.,;:!?)]+$/, ""));
  }
  // Bare URLs
  const bareRegex = /(?<!\()(https?:\/\/[^\s\)\]\>"',]+)/g;
  while ((match = bareRegex.exec(text)) !== null) {
    urls.add(match[1].replace(/[.,;:!?)]+$/, ""));
  }
  return [...urls];
}

// Try to derive a title from the URL or surrounding context
function titleFromUrl(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    // Known sources
    const knownNames = {
      "ballotpedia.org": "Ballotpedia",
      "kansasreflector.com": "Kansas Reflector",
      "fec.gov": "FEC Filing",
      "opensecrets.org": "OpenSecrets",
      "votesmart.org": "Vote Smart",
      "kslegislature.gov": "Kansas Legislature",
      "kansas.gov": "State of Kansas",
      "senate.gov": "U.S. Senate",
      "house.gov": "U.S. House",
      "congress.gov": "Congress.gov",
      "facebook.com": "Facebook",
      "twitter.com": "Twitter/X",
      "x.com": "Twitter/X",
      "youtube.com": "YouTube",
      "linkedin.com": "LinkedIn",
      "cjonline.com": "Topeka Capital-Journal",
      "kcur.org": "KCUR",
      "ksnewsservice.org": "Kansas News Service",
      "kwch.com": "KWCH",
      "ksn.com": "KSN",
      "hutchnews.com": "Hutchinson News",
      "leavenworthtimes.com": "Leavenworth Times",
      "ljworld.com": "Lawrence Journal-World",
      "kmbc.com": "KMBC",
      "hdnews.net": "Hays Daily News",
      "nytimes.com": "New York Times",
      "washingtonpost.com": "Washington Post",
      "politico.com": "Politico",
      "thehill.com": "The Hill",
      "npr.org": "NPR",
      "apnews.com": "Associated Press",
      "reuters.com": "Reuters",
    };
    return knownNames[host] || host;
  } catch {
    return "Source";
  }
}

// Also extract markdown link titles where available
function extractUrlsWithTitles(text) {
  const results = new Map(); // url -> title
  // Markdown links first (these have titles)
  const mdRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let match;
  while ((match = mdRegex.exec(text)) !== null) {
    const url = match[2].replace(/[.,;:!?)]+$/, "");
    if (!results.has(url)) {
      results.set(url, match[1].trim());
    }
  }
  // Bare URLs (no title, derive from hostname)
  const bareRegex = /(?<!\()(https?:\/\/[^\s\)\]\>"',]+)/g;
  while ((match = bareRegex.exec(text)) !== null) {
    const url = match[1].replace(/[.,;:!?)]+$/, "");
    if (!results.has(url)) {
      results.set(url, titleFromUrl(url));
    }
  }
  return results;
}

const slugs = readdirSync(CANDIDATES_DIR).filter(s => {
  try { return readFileSync(join(CANDIDATES_DIR, s, "raw-dump.md"), "utf8").length > 0; }
  catch { return false; }
}).sort();

let totalAdded = 0;

for (const slug of slugs) {
  const rawPath = join(CANDIDATES_DIR, slug, "raw-dump.md");
  const profilePath = join(CANDIDATES_DIR, slug, "site-profile.md");
  
  let rawContent, profileContent;
  try {
    rawContent = readFileSync(rawPath, "utf8");
    profileContent = readFileSync(profilePath, "utf8");
  } catch { continue; }

  // Extract all URLs with titles from raw dump
  const allUrls = extractUrlsWithTitles(rawContent);
  
  // Also extract from site-profile itself
  const profileUrls = extractUrlsWithTitles(profileContent);
  for (const [url, title] of profileUrls) {
    if (!allUrls.has(url)) allUrls.set(url, title);
  }

  if (allUrls.size === 0) {
    console.log(`SKIP ${slug} — no URLs found`);
    continue;
  }

  // Filter junk URLs
  const filtered = [...allUrls.entries()].filter(([url]) => {
    if (url.length < 15) return false;
    if (url.includes("localhost")) return false;
    if (url.includes("example.com")) return false;
    if (url.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|woff)$/i)) return false;
    return true;
  });

  // Build new sources section
  const sourceLines = filtered.map(([url, title]) => `- [${title}](${url})`);

  // Replace or append sources section
  if (profileContent.includes("## Sources")) {
    const newContent = profileContent.replace(
      /## Sources[\s\S]*$/,
      `## Sources\n\n${sourceLines.join("\n")}\n`
    );
    writeFileSync(profilePath, newContent);
  } else {
    writeFileSync(profilePath, profileContent.trimEnd() + `\n\n## Sources\n\n${sourceLines.join("\n")}\n`);
  }

  totalAdded += filtered.length;
  console.log(`OK ${slug} — ${filtered.length} sources`);
}

console.log(`\nDone. ${totalAdded} total sources across all candidates.`);
