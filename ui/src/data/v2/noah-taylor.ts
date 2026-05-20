/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const NOAH_TAYLOR_V2: CandidateFullV2 = {
  "slug": "noah-taylor",
  "name": "Noah Taylor",
  "party": "D",
  "position": "U.S. Senate candidate, Kansas",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "U.S. Senate candidate",
  "issues": [
    {
      "id": "i-ballot-status",
      "title": "Ballot / filing status",
      "stated": {
        "text": "Noah Taylor appears in the reviewed official or campaign-finance records connected to U.S. Senate candidate, Kansas. This profile does not treat that appearance as a final certified ballot until the final election-office list is checked after the filing deadline.",
        "sourceIds": [
          "s-fec-candidate"
        ]
      },
      "actions": [
        {
          "id": "a-record-appearance",
          "date": "2026-05-20",
          "body": "FEC identifies Noah Taylor as a Democratic challenger for the 2026 Kansas U.S. Senate race.",
          "sourceIds": [
            "s-fec-candidate"
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
          "s-fec-candidate"
        ]
      },
      "actions": [
        {
          "id": "a-platform-gap",
          "date": "2026-05-20",
          "body": "The reviewed source set confirms public-record status but did not provide a candidate-controlled issue platform with enough detail to summarize policy positions.",
          "sourceIds": [
            "s-fec-candidate"
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
            "s-fec-candidate"
          ],
          "mappedToIssueId": "i-public-issue-record"
        }
      ]
    },
    {
      "id": "i-donor-funding",
      "title": "Donor / funding information",
      "stated": {
        "text": "FEC reports a processed 2026 first-quarter finance summary for Noah Taylor for Kansas.",
        "sourceIds": [
          "s-fec-candidate"
        ]
      },
      "actions": [
        {
          "id": "a-finance-record",
          "date": "2026-05-20",
          "body": "FEC lists $72,435.00 total receipts and $68,633.06 ending cash on hand for coverage through March 31, 2026.",
          "sourceIds": [
            "s-fec-candidate"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Noah Taylor is a Democratic U.S. Senate candidate in the FEC record. His candidate page identifies Noah Taylor for Kansas as the principal campaign committee.",
  "recordSummary": "The strongest verified record in this pass is federal filing and finance data. No candidate-controlled issue platform was captured.",
  "campaignFinance": {
    "totalRaised": "$72,435.00",
    "narrative": "FEC Q1 2026 coverage lists $72,435.00 total receipts, $3,801.94 total disbursements, and $68,633.06 ending cash on hand for Noah Taylor for Kansas.",
    "donors": [
      {
        "name": "Itemized individual contributions",
        "amount": "$33,400.00"
      },
      {
        "name": "Unitemized individual contributions",
        "amount": "$25,534.83"
      },
      {
        "name": "Candidate contributions",
        "amount": "$3,500.00"
      },
      {
        "name": "Other committee contributions",
        "amount": "$10,000.00"
      }
    ],
    "reportingPeriod": "FEC coverage 2026-01-01 to 2026-03-31",
    "source": "FEC candidate overview"
  },
  "socialResearchNote": "Public social-media follows, likes, comments, and reposts were not treated as beliefs. This pass records only issue-relevant public observations found in the candidate-controlled or official source set.",
  "sources": [
    {
      "id": "s-fec-candidate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00296/",
      "title": "TAYLOR, NOAH - Candidate overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "FEC identifies Noah Taylor as a Democratic candidate for Kansas Senate",
        "FEC lists Noah Taylor for Kansas as the authorized campaign committee",
        "FEC shows total receipts, disbursements, and cash on hand for coverage through 2026-03-31"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(NOAH_TAYLOR_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[noah-taylor.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
