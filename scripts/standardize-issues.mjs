import { readFileSync, writeFileSync } from "fs";
import { readdirSync } from "fs";
import { join } from "path";

const CANDIDATES_DIR = "/Users/tylerpreisser/Desktop/elect-righteous/memory/candidates";

// Core Christian issues — every state/federal candidate gets these in this order
const CORE_ISSUES = [
  "Abortion / Sanctity of Life",
  "Marriage & Family / LGBTQ+ Policy",
  "Religious Liberty",
  "Guns / Second Amendment",
  "Immigration / Border",
  "School Choice / Parental Rights in Education",
  "Marijuana / Drug Policy",
];

// Local candidates — skip core issues, keep what they have
const LOCAL_SLUGS = new Set([
  "aaron-cunningham", "alaina-cunningham", "allen-park", "bobbi-dreiling",
  "craig-pallister", "curt-vajnar", "david-vilaysing", "derek-yarmer",
  "jayme-goetz", "ken-brooks", "mason-ruder", "nathan-leiker", "neal-younger",
  "rebecca-herzog", "ron-wilson", "ruth-ruder", "sandy-jacobs", "scott-braun",
  "shaun-musil", "toby-dougherty", "vernon-ruder-jr",
]);

// Map existing issue names to core issue names
function matchCore(existingIssue) {
  const lower = existingIssue.toLowerCase();
  if (lower.includes("abort") || lower.includes("pro-life") || lower.includes("sanctity") || lower.includes("reproductive"))
    return "Abortion / Sanctity of Life";
  if (lower.includes("marriage") || lower.includes("lgbtq") || lower.includes("transgender") || lower.includes("gender identity") || lower.includes("same-sex"))
    return "Marriage & Family / LGBTQ+ Policy";
  if (lower.includes("religious liberty") || lower.includes("religious freedom") || lower.includes("faith-based"))
    return "Religious Liberty";
  if (lower.includes("gun") || lower.includes("second amendment") || lower.includes("2a") || lower.includes("firearms"))
    return "Guns / Second Amendment";
  if (lower.includes("immigra") || lower.includes("border") || lower.includes("deporta"))
    return "Immigration / Border";
  if (lower.includes("school choice") || lower.includes("parental rights") || lower.includes("education") || lower.includes("voucher") || lower.includes("curriculum"))
    return "School Choice / Parental Rights in Education";
  if (lower.includes("marijuana") || lower.includes("cannabis") || lower.includes("drug policy"))
    return "Marijuana / Drug Policy";
  return null;
}

const slugs = readdirSync(CANDIDATES_DIR).filter(s => {
  try { return readFileSync(join(CANDIDATES_DIR, s, "site-profile.md"), "utf8").length > 0; }
  catch { return false; }
}).sort();

let updated = 0;

for (const slug of slugs) {
  if (LOCAL_SLUGS.has(slug)) continue; // keep local as-is

  const filePath = join(CANDIDATES_DIR, slug, "site-profile.md");
  const content = readFileSync(filePath, "utf8");

  // Find the What They Stand For section
  const standForMatch = content.match(/## What They Stand For\n([\s\S]*?)(?=\n## )/);
  if (!standForMatch) {
    console.log(`SKIP ${slug} — no What They Stand For section`);
    continue;
  }

  const sectionBody = standForMatch[1];

  // Parse existing issues: **Issue**: stance
  const existing = new Map();
  const lines = sectionBody.split("\n");
  let currentIssue = null;
  let currentStance = [];

  function flush() {
    if (currentIssue && currentStance.length > 0) {
      existing.set(currentIssue, currentStance.join(" ").trim());
    }
    currentIssue = null;
    currentStance = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const boldMatch = trimmed.match(/^\*\*(.+?)\*\*[:\s]*(.*)$/);
    if (boldMatch) {
      flush();
      currentIssue = boldMatch[1];
      if (boldMatch[2]?.trim()) currentStance.push(boldMatch[2].trim());
    } else if (currentIssue) {
      currentStance.push(trimmed);
    }
  }
  flush();

  // Build the standardized section
  // First: map existing issues to core issues
  const coreMap = new Map(); // core issue name -> stance text
  const extraIssues = []; // non-core issues to keep

  for (const [issueName, stance] of existing) {
    const core = matchCore(issueName);
    if (core) {
      // Merge if multiple existing issues map to same core
      if (coreMap.has(core)) {
        coreMap.set(core, coreMap.get(core) + " " + stance);
      } else {
        coreMap.set(core, stance);
      }
    } else {
      extraIssues.push({ issue: issueName, stance });
    }
  }

  // Build output: core issues first (in order), then extras
  const outputLines = [];
  for (const coreIssue of CORE_ISSUES) {
    const stance = coreMap.get(coreIssue);
    if (stance) {
      outputLines.push(`**${coreIssue}**: ${stance}`);
    } else {
      outputLines.push(`**${coreIssue}**: Has not taken a clear public position.`);
    }
    outputLines.push("");
  }

  // Add extras
  for (const extra of extraIssues) {
    outputLines.push(`**${extra.issue}**: ${extra.stance}`);
    outputLines.push("");
  }

  const newSection = `## What They Stand For\n\n${outputLines.join("\n").trim()}\n`;
  const newContent = content.replace(/## What They Stand For\n[\s\S]*?(?=\n## )/, newSection + "\n");

  if (newContent !== content) {
    writeFileSync(filePath, newContent);
    updated++;
    console.log(`OK ${slug} — ${coreMap.size} core matched, ${CORE_ISSUES.length - coreMap.size} defaulted, ${extraIssues.length} extras kept`);
  }
}

console.log(`\nDone. Updated ${updated} candidates.`);
