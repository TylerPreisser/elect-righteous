/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const STEVEN_JOHNSON_V2: CandidateFullV2 = {
  "slug": "steven-johnson",
  "name": "Steven Johnson",
  "party": "R",
  "position": "Kansas State Treasurer candidate",
  "electionSlug": "kansas-treasurer-2026",
  "incumbent": true,
  "occupation": "Kansas State Treasurer",
  "campaignWebsite": "https://stevenjohnsonks.com/",
  "issues": [
    {
      "id": "i-ballot-status",
      "title": "Ballot / filing status",
      "stated": {
        "text": "Steven Johnson appears in the reviewed official or campaign-finance records connected to Kansas State Treasurer candidate. This profile does not treat that appearance as a final certified ballot until the final election-office list is checked after the filing deadline.",
        "sourceIds": [
          "s-state-filing"
        ]
      },
      "actions": [
        {
          "id": "a-record-appearance",
          "date": "2026-05-20",
          "body": "The Kansas statewide filing mirror lists Steven Johnson as a Republican candidate for State Treasurer.",
          "sourceIds": [
            "s-state-filing"
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
          "s-state-filing"
        ]
      },
      "actions": [
        {
          "id": "a-platform-gap",
          "date": "2026-05-20",
          "body": "The reviewed source set confirms public-record status but did not provide a candidate-controlled issue platform with enough detail to summarize policy positions.",
          "sourceIds": [
            "s-state-filing"
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
            "s-state-filing"
          ],
          "mappedToIssueId": "i-public-issue-record"
        }
      ]
    },
    {
      "id": "i-donor-funding",
      "title": "Donor / funding information",
      "stated": {
        "text": "KPDC reports for Johnson include a 202601 receipts-and-expenditures filing.",
        "sourceIds": [
          "s-kpdc-statewide",
          "s-kpdc-202601"
        ]
      },
      "actions": [
        {
          "id": "a-finance-record",
          "date": "2026-05-20",
          "body": "Audit extraction from the KPDC 202601 report recorded $192,668.21 in receipts and $222,037.92 cash on hand.",
          "sourceIds": [
            "s-kpdc-statewide",
            "s-kpdc-202601"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Steven Johnson is the incumbent Kansas State Treasurer and is listed in current statewide filing material as a Republican candidate for State Treasurer.",
  "recordSummary": "The record captured in this pass confirms filed status through a statewide filing mirror and a campaign-finance account through KPDC. A deeper office-record pass should connect his treasurer work to specific official actions before expanding beyond filing and finance.",
  "campaignFinance": {
    "totalRaised": "$192,668.21",
    "narrative": "KPDC 202601 reporting extracted in the audit showed $192,668.21 in receipts, $5,418.17 in expenditures, and $222,037.92 cash on hand.",
    "donors": [],
    "reportingPeriod": "KPDC 202601 / 2025 reporting period",
    "source": "KPDC Steven Johnson 202601 report"
  },
  "socialResearchNote": "Public social-media follows, likes, comments, and reposts were not treated as beliefs. This pass records only issue-relevant public observations found in the candidate-controlled or official source set.",
  "sources": [
    {
      "id": "s-state-filing",
      "tier": "primary",
      "url": "https://candidatefiling.us/Info/Default?det=Y&e=545606222&j=2795522868&pj=26405586&s=802933811&st=KS",
      "title": "Candidate Filing Info - State of Kansas statewide offices",
      "publisher": "Kansas candidate filing mirror / State of Kansas filing data",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Steven Johnson appears as a Republican candidate for Kansas State Treasurer",
        "The filing entry lists Assaria and links stevenjohnsonks.com"
      ]
    },
    {
      "id": "s-kpdc-statewide",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas State Wide Office - 2026 Election Cycle",
      "publisher": "Kansas Governmental Ethics Commission / KPDC",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "KPDC index lists Johnson, Steven under State Treasurer candidates",
        "KPDC links 2024, 2025, and 2026 reports for Johnson"
      ]
    },
    {
      "id": "s-kpdc-202601",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/ReceiptsExpenditures/SW05SJ_202601.pdf",
      "title": "Steven Johnson 2026 Receipts and Expenditures",
      "publisher": "Kansas Governmental Ethics Commission / KPDC",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Report provides Johnson's 2025 receipts, expenditures, and cash-on-hand figures for the 2026 cycle"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(STEVEN_JOHNSON_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[steven-johnson.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
