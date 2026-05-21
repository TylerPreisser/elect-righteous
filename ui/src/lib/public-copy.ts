interface CopyOptions {
  stripUrls?: boolean;
}

export function normalizePublicCopy(value: unknown, options: CopyOptions = {}) {
  if (typeof value !== "string") return "";

  let text = value
    .replace(/\[object Object\]/g, "")
    .replace(
      /The reviewed public record did not identify a source-backed candidate statement or documented action for ([^.]+)\./gi,
      "No sourced position or public action found for $1.",
    )
    .replace(
      /the reviewed public record did not identify a source-backed candidate statement or documented action for ([^.]+)\./gi,
      "no sourced position or public action found for $1.",
    )
    .replace(
      /No separate source-backed vote, meeting action, filing, or public-record action was identified for ([^.]+) in the reviewed public record\./gi,
      "No separate vote, meeting action, filing, or public action was found for $1 in the linked sources.",
    )
    .replace(
      /The public record summary contains ([^.]+?) source-backed item(s?) across ([^.]+?) of the 14 issue areas\./gi,
      "This profile links $1 public item$2 across $3 of the 14 issue areas.",
    )
    .replace(/Representative public-record entries include:/gi, "Examples include:")
    .replace(/Social-only material is listed separately as online observation, not official action\./gi, "Public online activity is listed separately as context.")
    .replace(/Social\/online observations are public signals, not confirmed policy positions\.?/gi, "")
    .replace(/Additional social observations are treated as context only, not confirmed policy positions\.?/gi, "Additional online activity is treated as context, not a policy position.")
    .replace(/public source-backed social\/online observation(s?) are listed across the issue matrix/gi, "public online item$1 are tied to issue areas")
    .replace(/source-backed social\/online observation(s?)/gi, "public online item$1")
    .replace(/\bDocumented public record:\s*/gi, "")
    .replace(/\bCandidate statement:\s*/gi, "")
    .replace(/\bPublic evidence:\s*/gi, "")
    .replace(/\bsource-backed\b/gi, "sourced")
    .replace(/\bsource-cited\b/gi, "cited")
    .replace(/\bin this missing-roster pass\b/gi, "")
    .replace(/\bmissing-roster pass\b/gi, "roster review")
    .replace(/because the state audit found the race missing from the site/gi, "because public records list this race")
    .replace(/was added because ([^.]+?) the state audit found the race missing from the site/gi, "is listed in public records for the race")
    .replace(/not-party-rendered in the v2 schema until a direct SOS party field is captured/gi, "the current source set does not list a party affiliation")
    .replace(/party pending direct SOS readback/gi, "party not listed in the current source set")
    .replace(/Agent:\s*[^.\n]+\.?/gi, "")
    .replace(/agent:\s*[^.\n]+\.?/gi, "")
    .replace(/Raw Dump(?: V2| v2)?[:\s-]*/gi, "")
    .replace(/deep-scraper equivalent/gi, "public-source review")
    .replace(/online-sleuth fallback/gi, "public-source review")
    .replace(/JavaScript \/ CloudFront anti-bot block during public-source review\. The review could not/gi, "The live public source was not accessible during review, so this item could not")
    .replace(/\bsourceIds:\s*[^.;\n]+/gi, "")
    .replace(/\breportingPeriod:\s*/gi, "Reporting period: ")
    .replace(/\btotalRaised:\s*/gi, "Total raised: ");

  if (options.stripUrls) {
    text = text.replace(/https?:\/\/\S+/g, "");
  }

  return text
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\s+\)/g, ")")
    .replace(/\(\s+/g, "(")
    .trim();
}

export function cleanEvidenceCopy(value: unknown) {
  return normalizePublicCopy(value, { stripUrls: true });
}
