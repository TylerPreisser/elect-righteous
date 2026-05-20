/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ERIC_LUND_V2: CandidateFullV2 = {
  "slug": "eric-lund",
  "name": "Eric Lund",
  "party": "NP",
  "position": "Kansas State Treasurer campaign-finance account holder",
  "electionSlug": "kansas-treasurer-2026",
  "incumbent": false,
  "occupation": "State Treasurer candidate / campaign-finance account holder",
  "issues": [
    {
      "id": "i-ballot-status",
      "title": "Ballot / filing status",
      "stated": {
        "text": "KPDC lists Eric Lund under State Treasurer candidates, but this pass did not find Lund on the statewide Secretary-of-State filing mirror used for confirmed ballot rows.",
        "sourceIds": [
          "s-kpdc-statewide",
          "s-kpdc-at"
        ]
      },
      "actions": [
        {
          "id": "a-record-appearance",
          "date": "2026-05-20",
          "body": "KPDC's statewide index includes an Eric Lund appointment-of-treasurer link under State Treasurer.",
          "sourceIds": [
            "s-kpdc-statewide",
            "s-kpdc-at"
          ]
        }
      ],
      "socialSignals": []
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
  "whoTheyAre": "Eric Lund appears in the KPDC statewide index under State Treasurer candidates. This pass did not verify a current Secretary of State filing-row entry or a candidate-controlled platform.",
  "recordSummary": "Treat Lund as a treasurer-race public-record profile until final filing records clarify whether the KPDC account corresponds to a certified ballot candidate.",
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
        "KPDC index lists Lund, Eric under State Treasurer candidates"
      ]
    },
    {
      "id": "s-kpdc-at",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW05EL_AT.pdf",
      "title": "Eric S. Lund Appointment of Treasurer",
      "publisher": "Kansas Governmental Ethics Commission / KPDC",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Appointment-of-treasurer report identifies State Treasurer as the office sought"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ERIC_LUND_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[eric-lund.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
