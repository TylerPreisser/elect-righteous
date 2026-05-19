/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ALLEN_PARK_V2: CandidateFullV2 = {
  "slug": "allen-park",
  "name": "Allen Park",
  "party": "NP",
  "position": "USD 489 Board of Education member",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "School Board Member",
  "issues": [
    {
      "id": "governance-transparency-process",
      "title": "Board transparency, governance process, and policy clarity",
      "stated": {
        "text": "Park's candidate questionnaires center on communication, minority opinions, public trust, open discussion, and clear policy boundaries. In 2023 he wrote that board meetings should be inclusive and transparent, that public discussions should not take place behind closed doors, and that day-to-day management is not the board's role even though the board writes policy and sets expectations.",
        "sourceIds": [
          "klc-2019-survey",
          "hayspost-2023-profile",
          "hayspost-2023-qa"
        ]
      },
      "actions": [
        {
          "id": "minutes-detail-dispute-2023",
          "date": "2023-02-21",
          "body": "Park argued that USD 489 board minutes should include more detail about why members voted no. Board counsel Bill Jeter said Kansas law did not direct what must be contained in individual minutes and cited board policy against summarizing comments unless the board chooses to include them.",
          "sourceIds": [
            "greatbendpost-minutes-2023"
          ]
        },
        {
          "id": "nepotism-policy-vote-2023",
          "date": "2023-04-26",
          "body": "Park voted against personnel transactions involving the superintendent's wife and said he was unsure whether the district was following its nepotism policy. He asked the board to review the policy further.",
          "sourceIds": [
            "hayspost-nepotism-2023"
          ]
        },
        {
          "id": "admin-contract-process-2024",
          "date": "2024-01-24",
          "body": "Park voted no on one-year contract extensions for district-level administrators, saying the process was too fast and that board members had not had enough time with the evaluations.",
          "sourceIds": [
            "hayspost-admin-contracts-2024"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "no-candidate-social-governance",
          "platform": "Public web",
          "observation": "No verified candidate-controlled campaign website or public social account was found. Public messaging available for this issue comes from candidate questionnaires, official district pages, and attributed local coverage rather than social media.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "governance-transparency-process"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Allen Park's accessible public messaging is not centered on a verified campaign website or public campaign social account. The usable record is primarily candidate questionnaires, attributed local-news quotes, USD 489 board coverage, and official district meeting/member pages. The current candidate data's campaignWebsite value was treated as unverified and was not used.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "usd489-board-page"
          ],
          "mappedToIssueId": "governance-transparency-process"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "The 2019 KLC Journal survey presented Park as a longtime Hays resident and former para, teacher, coach, and school administrator. He said he wanted to join a board team that puts \"kids and families first\" and identified reconnecting with the Hays community as the single most important issue. His stated approach was to rebuild trust, encourage involvement, increase communication, listen genuinely, and create an...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "usd489-board-page"
          ],
          "mappedToIssueId": "governance-transparency-process"
        }
      ],
      "gap": {
        "summary": "The public record supports Park's stated emphasis on transparency and process. It also shows disagreement from board counsel and other members about whether his requested process changes were required or useful. BoardDocs was not fully extractable in static capture, so several action details rely on local reporting.",
        "evidenceIds": [
          "minutes-detail-dispute-2023"
        ]
      }
    },
    {
      "id": "bond-facilities-fiscal-oversight",
      "title": "Bond, facilities, property, and fiscal oversight",
      "stated": {
        "text": "Park has publicly supported facilities replacement and repair after the bond while saying the board must ensure bond work is executed correctly, timely, and fiscally responsibly. His profile also connects fiscal responsibility to budget questions, local purchasing where possible, grants, partnerships, efficient facility use, and academic achievement.",
        "sourceIds": [
          "hayspost-2023-profile",
          "hayspost-2023-qa"
        ]
      },
      "actions": [
        {
          "id": "bond-special-election-questions-2022",
          "date": "2022-02-08",
          "body": "In USD 489's official bond article, Park asked about the cost of a special election, raised concerns about elementary configuration and school choice during realignment, and asked about use of local contractors.",
          "sourceIds": [
            "usd489-bond-article-2022"
          ]
        },
        {
          "id": "project-manager-motion-2025",
          "date": "2025-03-28",
          "body": "Park supported exploring a project manager who would answer specifically to the board for remaining bond work. The motion failed 3-4, with Park, Derek Yarmer, and Curt Vajnar voting in favor.",
          "sourceIds": [
            "hayspost-project-manager-2025"
          ]
        },
        {
          "id": "asbestos-change-order-votes-2025",
          "date": "2025-09-23",
          "body": "Park voted no on a $69,480 asbestos-removal contract and also voted against an $88,347 high-school change order. He said the asbestos vote was about process, not opposition to doing the safety work.",
          "sourceIds": [
            "hayspost-asbestos-2025"
          ]
        },
        {
          "id": "property-sale-appraisal-2025",
          "date": "2025-11-11",
          "body": "Park asked why the board was moving quickly on a sale of 7.23 acres north of Hays Middle School, said he wanted an appraisal completed, and asked what the water rights were worth. A motion to complete an appraisal before bidding passed 4-2.",
          "sourceIds": [
            "tiger-property-sale-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "questionnaire-bond-oversight",
          "platform": "Hays Post candidate Q&A",
          "observation": "Park's public questionnaire answer framed the passed bond as an opportunity but said nearly half the community did not vote for it and needed information, answers, and input on how the investment was being spent.",
          "observedAt": "2023-10-25",
          "sourceIds": [
            "hayspost-2023-qa"
          ],
          "mappedToIssueId": "bond-facilities-fiscal-oversight"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "Hays Post's 2019 profile quoted Park on facilities and community involvement. He supported previous bond issues, said anything that helps kids deserves support, and argued that bond planning should invite community, teacher, and staff input. His listed goals included what is best for all kids, public trust and involvement, safe facilities, fiscal soundness, local businesses, board teamwork, data-informed...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "usd489-board-page"
          ],
          "mappedToIssueId": "bond-facilities-fiscal-oversight"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "In the July 2023 Hays Post profile, Park described himself as a retired USD 489 elementary principal, licensed insurance agent, part-time UPS worker, incumbent board member, and parent of four Hays High graduates. He emphasized that he came from a family of educators, that his wife Patti had also worked in education, and that his USD 489 service included paraprofessional, teacher, coach, migrant director,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "usd489-board-page"
          ],
          "mappedToIssueId": "bond-facilities-fiscal-oversight"
        }
      ],
      "gap": {
        "summary": "Park's record should not be summarized as simply pro- or anti-bond. Candidate materials show support for facilities investment; meeting coverage shows recurring requests for more review, documentation, appraisal, or oversight before spending or property actions.",
        "evidenceIds": [
          "bond-special-election-questions-2022"
        ]
      }
    },
    {
      "id": "student-family-operations",
      "title": "Student, family, staff, and district operations",
      "stated": {
        "text": "Park's campaign materials emphasize 'kids and families first,' decisions that are best for kids, manageable class sizes, lower fees where possible, technology needs, teacher training, and budget decisions tied to academic achievement.",
        "sourceIds": [
          "klc-2019-survey",
          "hayspost-2023-profile"
        ]
      },
      "actions": [
        {
          "id": "calendar-parent-support-2024",
          "date": "2024-02-06",
          "body": "During discussion of 2024-25 and 2025-26 calendars with monthly Monday professional-development days, Park asked whether the district was giving parents support on student days off. The calendars passed 5-2, with Park and Yarmer voting no.",
          "sourceIds": [
            "usd489-calendar-2024"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "In the October 2023 Q&A, Park said the one thing he would change was communication, especially communication that includes minority opinions and makes board meetings inclusive and transparent. He framed the bond as an exciting opportunity but said nearly half of the community did not vote for it and needed information, answers, and input on how the investment was being spent.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "usd489-board-page"
          ],
          "mappedToIssueId": "student-family-operations"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "He described board compromise as frequent, open, honest dialog and consensus-building. He said public deliberations should not happen behind closed doors. On district administration, he said administrators need tools, guidance, and expectations from the board. On day-to-day operations, he said the board writes policy and should not run daily management. On the bond, he said the board has responsibility to ensure...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "usd489-board-page"
          ],
          "mappedToIssueId": "student-family-operations"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "He also said he had not received money outside the school district; donations came from family, friends, and community members, with remaining expenses paid personally.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "usd489-board-page"
          ],
          "mappedToIssueId": "student-family-operations"
        }
      ],
      "gap": {
        "summary": "This issue area has clear candidate-statement support but fewer documented action examples than governance and facilities oversight.",
        "evidenceIds": [
          "calendar-parent-support-2024"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No donor-by-donor report or PAC ledger was found for Park. The only located candidate-specific funding statement is from his 2023 Hays Post Q&A.",
    "narrative": "No donor-by-donor report or PAC ledger was found for Park. The only located candidate-specific funding statement is from his 2023 Hays Post Q&A.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Hays USD 489 school board candidate: Allen Park"
  },
  "sources": [
    {
      "id": "usd489-board-page",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "BOARD OF EDUCATION",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official USD 489 board/district page and district contact context."
      ]
    },
    {
      "id": "usd489-bond-article-2022",
      "tier": "primary",
      "url": "https://www.usd489.com/article/651221",
      "title": "School Board Sends 143.5M Bond to Voters",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park asked about special-election cost, elementary configuration, school choice, and local contractors."
      ]
    },
    {
      "id": "usd489-calendar-2024",
      "tier": "primary",
      "url": "https://www.usd489.com/article/1447496",
      "title": "Hays USD 489 approves calendars with Monday professional development days",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park asked about parent support on student days off.",
        "Calendars passed 5-2 with Park and Yarmer voting no."
      ]
    },
    {
      "id": "klc-2019-survey",
      "tier": "secondary",
      "url": "https://klcjournal.com/local2019hays/",
      "title": "Hays: How would commission candidates shape the city's future?",
      "publisher": "KLC Journal",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park's 2019 school-board survey statements on kids/families first, trust, involvement, communication, and open culture."
      ]
    },
    {
      "id": "hayspost-2023-profile",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
      "title": "Hays USD 489 school board candidate: Allen Park",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park's biography, occupation, education, family, and 2023 campaign priorities."
      ]
    },
    {
      "id": "hayspost-2023-qa",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hays USD 489 school board candidate: Allen Park",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park's communication/transparency, board-role, bond-oversight, and campaign-finance statements."
      ]
    },
    {
      "id": "greatbendpost-minutes-2023",
      "tier": "secondary",
      "url": "https://greatbendpost.com/posts/11e68e53-1cdc-4676-afb0-aef5b6ee450e",
      "title": "Hays USD 489 board member alleges misconduct, board attorney says no",
      "publisher": "Great Bend Post / Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park challenged board-minute detail; counsel disagreed that Kansas law required it."
      ]
    },
    {
      "id": "hayspost-nepotism-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
      "title": "Hays USD 489 BOE debates nepotism again at Monday meeting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park voted against personnel transactions involving superintendent's wife and asked for policy review."
      ]
    },
    {
      "id": "hayspost-admin-contracts-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
      "title": "Hays USD 489 district administrators' contracts extended another year",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park voted no on administrator contract extensions and said process was too fast."
      ]
    },
    {
      "id": "hayspost-project-manager-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "Hays USD 489 board votes not to add another manager for bond work",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park supported exploring additional project manager; motion failed 3-4."
      ]
    },
    {
      "id": "hayspost-asbestos-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
      "title": "Board member calls out fellow member after repeated no votes, including 1 on asbestos removal",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park voted no on asbestos-removal contract and high-school change order; stated process/safety distinction."
      ]
    },
    {
      "id": "tiger-property-sale-2025",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=92038",
      "title": "Board of Education approves sale of property north of Hays Middle School",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Park asked for appraisal and questioned water-rights value before property sale."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ALLEN_PARK_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[allen-park.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
