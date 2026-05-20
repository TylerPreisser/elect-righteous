/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const MICHELLE_CUNNINGHAM_V2: CandidateFullV2 = {
  "slug": "michelle-cunningham",
  "name": "Michelle Cunningham",
  "party": "NP",
  "position": "Kansas State Board of Education District 5 campaign-finance account holder",
  "electionSlug": "sboe-district-5",
  "incumbent": false,
  "occupation": "State Board of Education candidate / campaign-finance account holder",
  "issues": [
    {
      "id": "i-ballot-status",
      "title": "Ballot / filing status",
      "stated": {
        "text": "KPDC lists Michelle Cunningham in the State Board of Education District 5 finance index; this pass did not verify a final certified candidate list.",
        "sourceIds": [
          "s-kpdc-sboe-index",
          "s-kpdc-at"
        ]
      },
      "actions": [
        {
          "id": "a-record-appearance",
          "date": "2026-05-20",
          "body": "Michelle Cunningham was identified in the reviewed official or campaign-finance source for Kansas State Board of Education District 5 campaign-finance account holder.",
          "sourceIds": [
            "s-kpdc-sboe-index",
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
          "s-kpdc-sboe-index",
          "s-kpdc-at"
        ]
      },
      "actions": [
        {
          "id": "a-platform-gap",
          "date": "2026-05-20",
          "body": "The reviewed source set confirms public-record status but did not provide a candidate-controlled issue platform with enough detail to summarize policy positions.",
          "sourceIds": [
            "s-kpdc-sboe-index",
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
            "s-kpdc-sboe-index"
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
          "s-kpdc-sboe-index",
          "s-kpdc-at"
        ]
      },
      "actions": [
        {
          "id": "a-finance-record",
          "date": "2026-05-20",
          "body": "The reviewed finance source confirms either a campaign-finance account, committee record, or no itemized summary yet; final donor detail needs the next public report if one is not already posted.",
          "sourceIds": [
            "s-kpdc-sboe-index",
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
            "s-kpdc-sboe-index"
          ],
          "mappedToIssueId": "i-donor-funding"
        }
      ]
    }
  ],
  "whoTheyAre": "Michelle Cunningham appears in KPDC's State Board of Education odd-district index under District 5. Party, platform, and final ballot status were not confirmed in this pass.",
  "recordSummary": "This profile exists because the SBOE District 5 roster was missing current KPDC account entries and incorrectly treated the current officeholder profile as the only 2026 candidate view.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records for this pass",
    "narrative": "No donor-by-donor public finance interpretation is made from the available records in this pass.",
    "donors": [],
    "reportingPeriod": "Most recent public record reviewed",
    "source": "State Board of Education Odd Districts - 2026 Election Cycle"
  },
  "socialResearchNote": "Public social-media follows, likes, comments, and reposts were not treated as beliefs. This pass records only issue-relevant public observations found in the candidate-controlled or official source set.",
  "sources": [
    {
      "id": "s-kpdc-sboe-index",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/BOELinksOdd2026EC.htm",
      "title": "State Board of Education Odd Districts - 2026 Election Cycle",
      "publisher": "Kansas Governmental Ethics Commission / KPDC",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "KPDC index lists Michelle Cunningham in District 5"
      ]
    },
    {
      "id": "s-kpdc-at",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/Treasurers/BOE05MC_AT.pdf",
      "title": "Michelle Cunningham Appointment of Treasurer",
      "publisher": "Kansas Governmental Ethics Commission / KPDC",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Appointment-of-treasurer PDF is linked from the District 5 KPDC index"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(MICHELLE_CUNNINGHAM_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[michelle-cunningham.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
