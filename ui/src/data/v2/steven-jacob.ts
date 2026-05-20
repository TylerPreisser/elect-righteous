/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const STEVEN_JACOB_V2: CandidateFullV2 = {
  "slug": "steven-jacob",
  "name": "Steven Robert Jacob",
  "party": "I",
  "position": "U.S. House candidate, Kansas 1st District",
  "electionSlug": "ks-01-house-2026",
  "incumbent": false,
  "occupation": "U.S. House candidate",
  "issues": [
    {
      "id": "i-ballot-status",
      "title": "Ballot / filing status",
      "stated": {
        "text": "Steven Robert Jacob appears in the reviewed official or campaign-finance records connected to U.S. House candidate, Kansas 1st District. This profile does not treat that appearance as a final certified ballot until the final election-office list is checked after the filing deadline.",
        "sourceIds": [
          "s-fec-candidate"
        ]
      },
      "actions": [
        {
          "id": "a-record-appearance",
          "date": "2026-05-20",
          "body": "FEC candidate data identifies Steven Robert Jacob as a 2026 Kansas District 1 U.S. House candidate.",
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
        "text": "Campaign-finance information is limited to the public filing or committee-account record captured in this pass. Donor-by-donor interpretation is not inferred beyond the public report.",
        "sourceIds": [
          "s-fec-candidate"
        ]
      },
      "actions": [
        {
          "id": "a-finance-record",
          "date": "2026-05-20",
          "body": "The reviewed finance source confirms either a campaign-finance account, committee record, or no itemized summary yet; final donor detail needs the next public report if one is not already posted.",
          "sourceIds": [
            "s-fec-candidate"
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
            "s-fec-candidate"
          ],
          "mappedToIssueId": "i-donor-funding"
        }
      ]
    }
  ],
  "whoTheyAre": "Steven Robert Jacob appears in FEC candidate data as a Libertarian candidate for Kansas's 1st Congressional District.",
  "recordSummary": "The verified record captured in this pass is the federal filing and committee record. No candidate-controlled issue platform was captured.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records for this pass",
    "narrative": "No donor-by-donor public finance interpretation is made from the available records in this pass.",
    "donors": [],
    "reportingPeriod": "Most recent public record reviewed",
    "source": "JACOB, STEVEN ROBERT - Candidate overview"
  },
  "socialResearchNote": "Public social-media follows, likes, comments, and reposts were not treated as beliefs. This pass records only issue-relevant public observations found in the candidate-controlled or official source set.",
  "sources": [
    {
      "id": "s-fec-candidate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS01229/",
      "title": "JACOB, STEVEN ROBERT - Candidate overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "FEC candidate master data identifies Steven Robert Jacob as a Libertarian candidate for Kansas House District 1 in 2026",
        "FEC identifies Steven Jacob for Kansas 1 as the committee"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(STEVEN_JACOB_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[steven-jacob.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
