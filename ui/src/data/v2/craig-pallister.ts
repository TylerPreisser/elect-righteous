/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CRAIG_PALLISTER_V2: CandidateFullV2 = {
  "slug": "craig-pallister",
  "name": "Craig Pallister",
  "party": "NP",
  "position": "USD 489 Board Member",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "USD 489 Board of Education Member",
  "issues": [
    {
      "id": "facilities-bond-completion",
      "title": "Facilities and Bond Completion",
      "stated": {
        "text": "Pallister's strongest public issue is completing USD 489 bond and facility work. In 2025 he said he ran again to see Roosevelt, Hays High, the new middle school, O'Loughlin, Wilson/Felten, and the administration-building work reach a positive end, and he supported the district's five-year capital plan while noting it can change as needs develop.",
        "sourceIds": [
          "s-hayspost-2025-q-and-a",
          "s-hayspost-2025-sponsored",
          "s-hayspost-2025-forum"
        ]
      },
      "actions": [
        {
          "id": "ae-felten-contract-2026",
          "date": "2026-02-25",
          "body": "Supported moving the $5.7 million Felten Elementary renovation contract forward rather than delaying it.",
          "sourceIds": [
            "s-hayspost-2026-felten"
          ]
        },
        {
          "id": "ae-feb09-capital-items",
          "date": "2026-02-09",
          "body": "Participated in a regular meeting whose agenda included an activity bus, Hays Middle School kitchen equipment, and Felten asbestos-removal change order; local coverage reported the board approved those items.",
          "sourceIds": [
            "s-usd489-diligent-regular",
            "s-hayspost-2026-hvac-bus-asbestos"
          ]
        },
        {
          "id": "ae-hvac-maintenance-2026",
          "date": "2026-02-23",
          "body": "Supported HVAC maintenance continuity with Glassman and then joined unanimous support for a revised maintenance/RFP path.",
          "sourceIds": [
            "s-hayspost-2026-hvac-bus-asbestos",
            "s-hayspost-2026-hvac-contracts"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-no-campaign-social-facilities",
          "platform": "Public web",
          "observation": "No candidate-controlled social feed was found; facilities evidence comes from candidate Q&As, sponsored material, official agendas, and local meeting coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2025-q-and-a"
          ],
          "mappedToIssueId": "facilities-bond-completion"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "Pallister is a USD 489 Board of Education member after winning a seat in the November 4, 2025 general election. Hays Post described him as a retired educator and former school-board member who had served four years, narrowly lost reelection in 2023, and was returning to the board in January 2026. The official Ellis County results list Curt Vajnar with 2,549 votes and both Ken Brooks and Craig Pallister with 1,962...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2025-election-night"
          ],
          "mappedToIssueId": "facilities-bond-completion"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Pallister's accessible public message is school-district specific and comes mostly through candidate questionnaires, a sponsored candidate announcement, and board-meeting coverage rather than candidate-controlled social media.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-diligent-members"
          ],
          "mappedToIssueId": "facilities-bond-completion"
        }
      ],
      "gap": {
        "summary": "Official signed minutes were not cleanly extracted for every 2026 vote; local coverage supplies vote detail where BoardDocs/Diligent did not expose it as text.",
        "evidenceIds": [
          "ae-felten-contract-2026"
        ]
      }
    },
    {
      "id": "student-learning-staffing",
      "title": "Student Learning, Class Sizes, and Staffing",
      "stated": {
        "text": "Pallister's candidate materials support smaller class sizes, lower teacher-to-student ratios, more individual attention, expanded course offerings for college and workforce paths, additional counselors, and competitive pay and benefits for teachers, administrators, para-educators, secretaries, cooks, custodians, coaches, and bus drivers.",
        "sourceIds": [
          "s-hayspost-2025-sponsored",
          "s-hayspost-2023-q-and-a",
          "s-hayspost-2025-forum"
        ]
      },
      "actions": [
        {
          "id": "ae-director-contracts-2026",
          "date": "2026-02-23",
          "body": "Opposed delaying district director contract extensions and supported a failed motion to extend those contracts.",
          "sourceIds": [
            "s-hayspost-2026-hvac-contracts"
          ]
        },
        {
          "id": "ae-admin-contract-delay-2026",
          "date": "2026-02-23",
          "body": "Voted to delay administrator contract extensions until March 9.",
          "sourceIds": [
            "s-hayspost-2026-hvac-contracts"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-sponsored-not-social",
          "platform": "Hays Post sponsored",
          "observation": "The densest 2025 platform statement was a sponsored Hays Post article, not a candidate-controlled social account.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2025-sponsored"
          ],
          "mappedToIssueId": "student-learning-staffing"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "His core identity is retired educator and former administrator. In 2025, he said he had been involved with education throughout his life, including service as a bus driver, teacher, principal, retired grandparent, and previous school-board member. His family tie is also part of the message: his wife is a retired USD 489 teacher, his children attended USD 489, and a grandchild was attending Hays Middle School in...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2025-q-and-a"
          ],
          "mappedToIssueId": "student-learning-staffing"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Facilities and the bond program dominate the visible record. In 2019, Pallister supported a bond issue for USD 489 facility needs, including elementary renovations or replacement where needed and middle/high school additions and renovations. In 2021 board coverage, he said the deferred capital outlay list had kept growing and that the district had met immediate needs but not moved forward enough on facility...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "student-learning-staffing"
        }
      ],
      "gap": {
        "summary": "No specific 2026 vote was found that directly changes class-size, counselor, or course-offering policy.",
        "evidenceIds": [
          "ae-director-contracts-2026"
        ]
      }
    },
    {
      "id": "board-governance-oversight",
      "title": "Board Governance and Oversight",
      "stated": {
        "text": "Pallister states that board members set policy, provide review and oversight, and bring community voice while administrators and teachers handle day-to-day operations. He has not run on replacing a specific district policy.",
        "sourceIds": [
          "s-hayspost-2025-q-and-a",
          "s-hayspost-2023-q-and-a",
          "s-hayspost-2025-forum"
        ]
      },
      "actions": [
        {
          "id": "ae-bathroom-vandalism-admin-lens",
          "date": "2026-04-20",
          "body": "During bathroom/vandalism discussion, commented from former-principal experience rather than proposing a separate ideological policy.",
          "sourceIds": [
            "s-hayspost-2026-bathrooms"
          ]
        },
        {
          "id": "ae-board-relations-forum",
          "date": "2025-10-06",
          "body": "At the candidate forum, framed professional board relations around judging votes by what is good for students.",
          "sourceIds": [
            "s-hayspost-2025-forum"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-social-absence-governance",
          "platform": "Public web",
          "observation": "No public candidate-controlled social posts were found on governance; the record is Q&A/forum/meeting-based.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-goodparty-shell"
          ],
          "mappedToIssueId": "board-governance-oversight"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "His school-board philosophy emphasizes policy, oversight, and community voice instead of day-to-day management. In the 2023 Q&A, he said the board sets policy and provides oversight while the superintendent makes day-to-day operational decisions. In 2025, he repeated that administrators and teachers are hired for day-to-day work and that board members should set policy and bring in the community voice. (Hays...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2023-q-and-a"
          ],
          "mappedToIssueId": "board-governance-oversight"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "His staff message is pro-retention and pro-administration. The 2023 Q&A called retention of strong administrators key to continual improvement and consistency. The 2025 sponsored piece said Pallister wanted the district's next focus, after bond completion, to be hiring and retaining the best teachers and staff, with competitive pay and benefits for teachers, administrators, para-educators, secretaries, cooks,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2023-q-and-a"
          ],
          "mappedToIssueId": "board-governance-oversight"
        }
      ],
      "gap": {
        "summary": "No current board policy change authored by Pallister was confirmed.",
        "evidenceIds": [
          "ae-bathroom-vandalism-admin-lens"
        ]
      }
    },
    {
      "id": "budget-funding-local-operations",
      "title": "Budget, Funding, and Local Operations",
      "stated": {
        "text": "Pallister describes USD 489 budgeting as year-round work and supports advocacy for public K-12 and special-education funding. In operational matters, he has shown support for maintenance continuity and local-company benefits while later accepting an RFP path.",
        "sourceIds": [
          "s-hayspost-2025-q-and-a",
          "s-hayspost-2025-sponsored",
          "s-hayspost-2026-hvac-bus-asbestos",
          "s-hayspost-2026-hvac-contracts"
        ]
      },
      "actions": [
        {
          "id": "ae-special-ed-funding-stated",
          "date": "2025-10-20",
          "body": "Called for state and federal advocacy on special-education funding in sponsored candidate material.",
          "sourceIds": [
            "s-hayspost-2025-sponsored"
          ]
        },
        {
          "id": "ae-hvac-rfp-compromise",
          "date": "2026-02-23",
          "body": "Joined unanimous support for a revised HVAC motion that continued near-term maintenance and required a districtwide preventive-maintenance RFP.",
          "sourceIds": [
            "s-hayspost-2026-hvac-contracts"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-goodparty-unclaimed",
          "platform": "GoodParty.org",
          "observation": "GoodParty profile is unclaimed and contains no candidate-filled issue or finance details; do not use it as platform evidence.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-goodparty-shell"
          ],
          "mappedToIssueId": "budget-funding-local-operations"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "On budget and public funding, Pallister frames finance as year-round planning and outside advocacy. In 2019 he said financial health required lobbying the Kansas Legislature, governor, and public to adequately fund K-12 education. In 2025 he described budgeting as ongoing work beginning immediately after the board sets the prior budget, with the superintendent, administrators, and schools working all year. He...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "budget-funding-local-operations"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Ellis County election-results page: official county page linking 2025 official results. (source) 5. Ellis County 2025 official results PDF/text: official result lists Pallister with 1,962 votes for USD 489 Board of Education. (source) 6. Hays Post Archive 2019 candidate profile: education, granddaughter in USD 489, facilities bond support, K-12 funding, teacher relations, technology, KESA/student performance,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "budget-funding-local-operations"
        }
      ],
      "gap": {
        "summary": "No official campaign-finance report or donor list was located for the 2025 USD 489 campaign.",
        "evidenceIds": [
          "ae-special-ed-funding-stated"
        ]
      }
    },
    {
      "id": "community-identity-mascot",
      "title": "Community Identity and Mascot Decisions",
      "stated": {
        "text": "As board president in 2023, Pallister supported keeping Hays High as Indians after community input, supported removing racist or hurtful imagery, and did not support adding the Indian mascot at the middle school. This is a dated prior board-action issue rather than a visible 2025-2026 campaign centerpiece.",
        "sourceIds": [
          "s-hayspost-2023-mascot"
        ]
      },
      "actions": [
        {
          "id": "ae-2023-mascot-position",
          "date": "2023-02-20",
          "body": "Supported keeping Hays High Indians, eliminating harmful imagery, and not extending the mascot to the middle school.",
          "sourceIds": [
            "s-hayspost-2023-mascot"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "On the Hays High/Hays Middle mascot issue in February 2023, Hays Post reported that Pallister supported keeping the Hays High Indians mascot after hearing community pride, supported eliminating racist or hurtful images, said changes were needed if the district kept the mascot, and did not support adding the Indian mascot at the middle school. (Hays Post, Feb. 22, 2023)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2023-mascot"
          ],
          "mappedToIssueId": "community-identity-mascot"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post 2023 canvass story: Pallister lost by three votes and praised Jayme Goetz and board colleagues. (source) 11. Hays Post 2025 candidate Q&A: education biography, bond completion, capital plan, board role, budget, policies, gratitude to community and staff, student-centered decision test. (source) 12.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "community-identity-mascot"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Dominant accessible signal: a retired USD 489 educator and returning board member focused on completing the bond program, maintaining facilities and operations, supporting teachers/staff/administrators, and judging decisions by effects on students. No visible candidate-controlled social feed presents a separate ideological campaign.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-diligent-members"
          ],
          "mappedToIssueId": "community-identity-mascot"
        }
      ],
      "gap": {
        "summary": "No later 2025-2026 Pallister campaign material centered the mascot issue in the reviewed evidence.",
        "evidenceIds": [
          "ae-2023-mascot-position"
        ]
      }
    }
  ],
  "recordSummary": "USD 489 Board of Education Member",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "2023 Hays Post questionnaire includes Pallister's candidate-reported statement that he received no money or in-kind donations from outside the school district; this is not an official 2025 filing.; 2025 Hays Post sponsored article does not disclose sponsor, cost, donor, committee, or treasurer.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Hays USD 489 BOE candidate: Craig Pallister"
  },
  "sources": [
    {
      "id": "s-usd489-diligent-members",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
      "title": "Hays School District USD 489 - Members",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Craig Pallister is listed as Board Member",
        "Pallister is linked to Board Retreat, Regular Meeting, Special Board Meeting, and Work Session categories",
        "Public term field is blank"
      ]
    },
    {
      "id": "s-usd489-diligent-regular",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/Portal/MeetingInformation.aspx?Id=358",
      "title": "Hays School District USD 489 - Regular Meeting",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Regular meeting portal lists 2026 meetings and includes Craig Pallister among members",
        "February 9, 2026 agenda included activity bus, Hays Middle School steamer, and Felten asbestos-removal action items"
      ]
    },
    {
      "id": "s-hayspost-2025-q-and-a",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hays USD 489 candidate Q&A: Craig Pallister",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Pallister described retired teacher/principal background and USD 489 family ties",
        "He said he ran again to see bond projects through",
        "He favored the five-year capital plan",
        "He described the board role as setting policy and bringing community voice",
        "He framed votes around whether decisions are good for kids",
        "Observed public online activity mapped to Student Learning, Class Sizes, and Staffing."
      ]
    },
    {
      "id": "s-hayspost-2025-sponsored",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/94f59897-4370-450a-b4ed-f5ebbf54a523",
      "title": "SPONSORED: Craig Pallister running for USD 489 school board",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Sponsored candidate material lists smaller classes, more individual attention, expanded course offerings, additional counselors, facility completion, competitive pay/benefits, and special-education funding advocacy",
        "Article does not disclose campaign-finance donor or cost information"
      ]
    },
    {
      "id": "s-hayspost-2025-forum",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e326ecf7-cf47-4f86-8ab8-57f7169f8536",
      "title": "Hays USD forum focuses on budget, class size, board relations",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Pallister pointed to USD 489 Foundation grants",
        "He said bond promises had been delivered",
        "He discussed reallocation for lower-grade class sizes",
        "He framed board votes around what is good for students"
      ]
    },
    {
      "id": "s-hayspost-2023-q-and-a",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
      "title": "Hays USD 489 BOE candidate: Craig Pallister",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Pallister supported new college-bound and technical/training course offerings",
        "He described board role as policy and oversight, not day-to-day operation",
        "He said he received no money or in-kind donations from outside the school district in the 2023 campaign context",
        "Observed public online activity mapped to Board Governance and Oversight."
      ]
    },
    {
      "id": "s-hayspost-2025-election-night",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
      "title": "3 veterans elected to Hays USD 489 school board",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Pallister was elected as a former board member returning to the board",
        "Election-night totals were unofficial and later differed from official results",
        "Winning candidates focused on completing bond projects",
        "New terms were reported to begin in January",
        "Observed public online activity mapped to Facilities and Bond Completion."
      ]
    },
    {
      "id": "s-hayspost-2026-hvac-bus-asbestos",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8eeba75c-7a82-4bf4-983a-15ce03bd6f7f",
      "title": "Hays BOE purchases activity bus, votes no on HVAC maintenance contract",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Board approved activity bus, Hays Middle School steamers, and Felten asbestos-removal change order",
        "Pallister and Brooks voted for HVAC maintenance contract; motion failed 2-3",
        "Pallister said there are benefits to having a local company maintain equipment"
      ]
    },
    {
      "id": "s-hayspost-2026-felten",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f5e69fbd-0165-4db1-b896-07613f7a31ed",
      "title": "Hays USD 489 board approves construction contract for Felten Elementary",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Board approved $5.7 million maximum guaranteed price for Felten Elementary renovations",
        "Pallister opposed delay and cited effects on students and teachers"
      ]
    },
    {
      "id": "s-hayspost-2026-hvac-contracts",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0c27e966-61e9-4c00-b6d7-7f37f6d3bba7",
      "title": "Hays BOE approves HVAC contract; admin. contracts on hold",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Revised HVAC motion including current maintenance and districtwide RFP passed unanimously",
        "Pallister opposed delaying district director contract extensions and supported a failed extension motion",
        "Pallister voted to delay administrator contract extensions until March 9"
      ]
    },
    {
      "id": "s-hayspost-2026-bathrooms",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede",
      "title": "USD 489 board members express concerns about bathrooms, vandalism",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Pallister said bathroom issues were present when he was a student and during his years as principal",
        "He said principals would prefer not to monitor bathrooms but do"
      ]
    },
    {
      "id": "s-hayspost-2023-mascot",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b03de214-a1e1-44df-8ea5-f597e5e62646",
      "title": "Hays High to remain Indians, Hays Middle will not become Indians",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "As board president, Pallister supported keeping Hays High Indians after community input",
        "He supported eliminating racist or hurtful images",
        "He did not support adding the Indian mascot at the middle school",
        "Observed public online activity mapped to Community Identity and Mascot Decisions."
      ]
    },
    {
      "id": "s-goodparty-shell",
      "tier": "secondary",
      "url": "https://goodparty.org/candidate/craig-pallister/hays-usd-489-school-board",
      "title": "Craig Pallister for Hays USD 489 School Board",
      "publisher": "GoodParty.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Unclaimed civic profile shell lists Pallister for Hays USD 489 School Board and November 4, 2025 election date"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/page/32/",
      "title": "Hays Post / Archive.Hayspost",
      "publisher": "Archive.Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Student Learning, Class Sizes, and Staffing.",
        "Facilities and the bond program dominate the visible record. In 2019, Pallister supported a bond issue for USD 489 facility needs, including elementary renovations or replacement w",
        "Observed public online activity mapped to Budget, Funding, and Local Operations."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "primary",
      "url": "https://www.ellisco.net/435/Election-Results",
      "title": "Hays Post / Ellisco",
      "publisher": "Ellisco",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Budget, Funding, and Local Operations.",
        "Ellis County election-results page: official county page linking 2025 official results. (source) 5. Ellis County 2025 official results PDF/text: official result lists Pallister wit"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Community Identity and Mascot Decisions.",
        "Hays Post 2023 canvass story: Pallister lost by three votes and praised Jayme Goetz and board colleagues. (source) 11. Hays Post 2025 candidate Q&A: education biography, bond compl"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CRAIG_PALLISTER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[craig-pallister.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
