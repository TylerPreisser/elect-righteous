/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const RIC_KOEHN_V2: CandidateFullV2 = {
  "slug": "ric-koehn",
  "name": "Ric Koehn",
  "party": "NP",
  "position": "Kansas Insurance Commissioner campaign-finance account holder",
  "electionSlug": "kansas-insurance-2026",
  "incumbent": false,
  "occupation": "Insurance Commissioner candidate / campaign-finance account holder",
  "issues": [
    {
      "id": "i-ballot-status",
      "title": "Ballot / filing status",
      "stated": {
        "text": "KPDC lists Ric Koehn under Insurance Commissioner candidates; this pass did not verify a current Secretary-of-State filing-row entry or candidate-controlled platform.",
        "sourceIds": [
          "s-kpdc-statewide",
          "s-kpdc-at"
        ]
      },
      "actions": [
        {
          "id": "a-record-appearance",
          "date": "2026-05-20",
          "body": "Ric Koehn was identified in the reviewed official or campaign-finance source for Kansas Insurance Commissioner campaign-finance account holder.",
          "sourceIds": [
            "s-kpdc-statewide",
            "s-kpdc-at"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Ballot / filing status: KPDC lists Ric Koehn under Insurance Commissioner candidates; this pass did not verify a current Secretary-of-State filing-row entry or candidate-controlled platform.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kpdc-statewide"
          ],
          "mappedToIssueId": "i-ballot-status"
        }
      ]
    },
    {
      "id": "i-public-issue-record",
      "title": "Where they stand on big issues",
      "stated": {
        "text": "No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-kpdc-statewide",
          "s-kpdc-at"
        ]
      },
      "actions": [
        {
          "id": "a-platform-gap",
          "date": "2026-05-20",
          "body": "The reviewed source set confirms public-record status but did not provide a candidate-controlled issue platform with enough detail to summarize policy positions.",
          "sourceIds": [
            "s-kpdc-statewide",
            "s-kpdc-at"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Where they stand on big issues: No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliation, follows, likes, comments, or associations.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kpdc-statewide"
          ],
          "mappedToIssueId": "i-public-issue-record"
        }
      ]
    },
    {
      "id": "i-donor-funding",
      "title": "Donor / funding information",
      "stated": {
        "text": "Campaign-finance information is limited to the public filing or committee-account record captured in this pass. Donor-by-donor interpretation is not inferred beyond the public report.",
        "sourceIds": [
          "s-kpdc-statewide",
          "s-kpdc-at"
        ]
      },
      "actions": [
        {
          "id": "a-finance-record",
          "date": "2026-05-20",
          "body": "The reviewed finance source confirms either a campaign-finance account, committee record, or no itemized summary yet; final donor detail needs the next public report if one is not already posted.",
          "sourceIds": [
            "s-kpdc-statewide",
            "s-kpdc-at"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Donor / funding information: Campaign-finance information is limited to the public filing or committee-account record captured in this pass. Donor-by-donor interpretation is not inferred beyond the public report.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kpdc-statewide"
          ],
          "mappedToIssueId": "i-donor-funding"
        }
      ]
    }
  ],
  "whoTheyAre": "Ric Koehn appears in KPDC's statewide campaign-finance index under Insurance Commissioner candidates. This pass did not verify a current statewide filing-row entry.",
  "recordSummary": "This profile keeps the insurance-race roster complete against KPDC account data while distinguishing account status from final ballot status.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records for this pass",
    "narrative": "No donor-by-donor public finance interpretation is made from the available records in this pass.",
    "donors": [],
    "reportingPeriod": "Most recent public record reviewed",
    "source": "Kansas State Wide Office - 2026 Election Cycle"
  },
  "socialResearchNote": "Public social-media follows, likes, comments, and reposts were not treated as beliefs. This pass records only issue-relevant public observations found in the candidate-controlled or official source set.",
  "sources": [
    {
      "id": "s-kpdc-statewide",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas State Wide Office - 2026 Election Cycle",
      "publisher": "Kansas Governmental Ethics Commission / KPDC",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "KPDC index lists Koehn, Ric under Insurance Commissioner candidates"
      ]
    },
    {
      "id": "s-kpdc-at",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03RK_AT.pdf",
      "title": "Ric Koehn Appointment of Treasurer",
      "publisher": "Kansas Governmental Ethics Commission / KPDC",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Appointment-of-treasurer report identifies Insurance Commissioner as the office sought"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(RIC_KOEHN_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ric-koehn.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
