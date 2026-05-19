/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const DEREK_YARMER_V2: CandidateFullV2 = {
  "slug": "derek-yarmer",
  "name": "Derek Yarmer",
  "party": "NP",
  "position": "USD 489 Board of Education member",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "Emergency medicine physician; USD 489 board member",
  "district": "Hays USD 489, Ellis County, Kansas",
  "issues": [
    {
      "id": "i-bond-capital-oversight",
      "title": "Bond and Capital Spending Oversight",
      "stated": {
        "text": "As a 2023 candidate, Yarmer said he wanted Hays residents to receive the\npromised schools at the promised price and argued that the school board had\nultimate responsibility to watch the $143.5 million bond budget. In a 2025\nwritten statement, he said capital-outlay funds were being used for items he\nbelieved should have been bond-covered and wrote that board oversight had\nfailed.",
        "sourceIds": [
          "s-hayspost-yarmer-qa-2023",
          "s-hayspost-yarmer-bond-statement-2025"
        ]
      },
      "actions": [
        {
          "id": "a-mar24-2025-project-manager",
          "date": "2025-03-24",
          "body": "Moved to look into hiring a project manager for the remaining bond work.\nAllen Park seconded. Official minutes show Yarmer, Park, and Curt Vajnar\nvoting yes; Ken Brooks, Meagan Zampieri-Lillpopp, Jayme Goetz, and Ruth\nRuder voting no; motion failed 3-4.",
          "sourceIds": [
            "s-usd489-mar24-2025-minutes",
            "s-hayspost-project-manager-2025"
          ]
        },
        {
          "id": "a-mar24-2025-athletics-and-equipment",
          "date": "2025-03-24",
          "body": "Voted no on Hays High softball bleachers/press box, Hays Middle School\nathletic field bleachers, and Hays High weights/equipment, while voting yes\non the Hays High Dell student-device purchase. This shows selective spending\nscrutiny rather than a blanket no-spending stance.",
          "sourceIds": [
            "s-usd489-mar24-2025-minutes"
          ]
        },
        {
          "id": "a-sep22-2025-hhs-change-order",
          "date": "2025-09-22",
          "body": "Voted no, with Allen Park, on Hays High PCCO 007 change orders for $88,347.\nThe motion carried 5-2.",
          "sourceIds": [
            "s-usd489-sep22-2025-minutes"
          ]
        },
        {
          "id": "a-oct13-2025-furniture-playground",
          "date": "2025-10-13",
          "body": "Voted no, with Allen Park, on a $181,236.17 Hays Middle School furniture\npurchase and a $32,832 Lincoln Elementary playground-equipment removal,\nwhile voting yes on district staff desktop replacements.",
          "sourceIds": [
            "s-usd489-oct13-2025-minutes",
            "s-tigermedia-furniture-playground-2025"
          ]
        },
        {
          "id": "a-feb23-2026-felten-gmp",
          "date": "2026-02-23",
          "body": "Voted no, with Allen Park, on the Felten Elementary GMP of $5,734,887.\nThe motion carried 4-2.",
          "sourceIds": [
            "s-usd489-feb23-2026-minutes",
            "s-tigermedia-felten-gmp-2026",
            "s-hayspost-felten-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-bond-no-candidate-social",
          "platform": "Public web",
          "observation": "No candidate-controlled social posts about bond spending were verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "i-bond-capital-oversight"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Derek Yarmer's accessible public messaging is not centered on a campaign website or active campaign social accounts. The usable record is primarily attributed local-news questionnaires and quotes, a published written statement, USD 489 board coverage and meeting materials, and professional medical profiles. The current candidate data's campaignWebsite value was not used because I did not verify a current official...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-highbond-members"
          ],
          "mappedToIssueId": "i-bond-capital-oversight"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "In a 2021 application letter published by Hays Post, Yarmer wrote that educating children is \"one of the most important responsibilities we have as parents\" and said he wanted to be active in the education of his daughters and other students in the district. He also presented his medical background as directly relevant to pandemic-era school decisions, saying his \"front-line healthcare\" experience and access to...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-highbond-members"
          ],
          "mappedToIssueId": "i-bond-capital-oversight"
        }
      ],
      "gap": {
        "summary": "Strong evidence exists for spending/process skepticism, but no full alternative\nbond budget, capital-outlay plan, or project-management proposal document was\nfound in candidate-controlled sources.",
        "evidenceIds": [
          "a-mar24-2025-project-manager",
          "a-feb23-2026-felten-gmp"
        ]
      }
    },
    {
      "id": "i-board-process-procurement-contracts",
      "title": "Board Process, Procurement, And Contracts",
      "stated": {
        "text": "In the 2023 Q&A, Yarmer asked for board meetings to be broadcast, agendas\nreleased at least a week ahead, and easy board-member agenda additions. He\nsaid the board should oversee broad goals, spending, and what students are\ntaught while not managing day-to-day district operations.",
        "sourceIds": [
          "s-hayspost-yarmer-qa-2023"
        ]
      },
      "actions": [
        {
          "id": "a-jan22-2024-admin-contract-abstain",
          "date": "2024-01-22",
          "body": "Abstained on the district-level administrator contract extension motion,\nwhich passed 5-1-1. Hays Post attributed the abstention to his objection\nthat he was being asked to vote without enough information.",
          "sourceIds": [
            "s-usd489-jan22-2024-agenda",
            "s-hayspost-admin-contracts-2024"
          ]
        },
        {
          "id": "a-feb09-2026-hvac-table",
          "date": "2026-02-09",
          "body": "Voted no on the Glassman HVAC update and moved to table the decision until\nmore information could be provided. The no vote defeated the HVAC motion\n2-3, while his table motion failed 3-2.",
          "sourceIds": [
            "s-usd489-feb09-2026-minutes"
          ]
        },
        {
          "id": "a-feb23-2026-hvac-rfp",
          "date": "2026-02-23",
          "body": "Voted no on the annual Glassman HVAC update but seconded a narrower motion\napproving service through Dec. 31, 2026 with direction to bring back a\ndistrictwide preventive-maintenance RFP by November 2026. The narrower\nmotion passed 5-0.",
          "sourceIds": [
            "s-usd489-feb23-2026-minutes",
            "s-hayspost-hvac-contracts-2026"
          ]
        },
        {
          "id": "a-feb23-2026-contract-delay",
          "date": "2026-02-23",
          "body": "Seconded motions to postpone administrator contract extensions and moved to\ntable district director contract extensions. One administrator-extension\npostponement motion ultimately carried 4-2; the director-extension table\nmotion failed 3-3.",
          "sourceIds": [
            "s-usd489-feb23-2026-minutes",
            "s-hayspost-hvac-contracts-2026"
          ]
        },
        {
          "id": "a-mar09-2026-contract-language",
          "date": "2026-03-09",
          "body": "Seconded tabling administrator/director contract language updates until a\nwork session and later board meeting; motion carried 5-2.",
          "sourceIds": [
            "s-usd489-mar09-2026-minutes",
            "s-tigermedia-admin-contracts-2026"
          ]
        },
        {
          "id": "a-mar09-2026-contract-extensions",
          "date": "2026-03-09",
          "body": "Voted no on district administrator contract extensions through 2027-28,\nwhich carried 5-2, but voted yes on district director contract extensions,\nwhich carried 7-0.",
          "sourceIds": [
            "s-usd489-mar09-2026-minutes",
            "s-tigermedia-admin-contracts-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-process-no-candidate-social",
          "platform": "Public web",
          "observation": "No candidate-controlled social posts about board process or contracts were verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "i-board-process-procurement-contracts"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "The same letter cited his post-secondary and medical training as a different perspective for the board and said his construction-industry experience could help with infrastructure decisions.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-highbond-members"
          ],
          "mappedToIssueId": "i-board-process-procurement-contracts"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "In the 2023 Hays Post candidate questionnaire, Yarmer described himself as a 39-year-old ER doctor with children in USD 489 schools. His campaign financing answer was: \"My campaign is 100 percent personally financed.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-highbond-members"
          ],
          "mappedToIssueId": "i-board-process-procurement-contracts"
        }
      ],
      "gap": {
        "summary": "Official minutes confirm roll calls and motions, but many of the fuller\nprocess rationales come from local-news attribution rather than official\ntranscript text.",
        "evidenceIds": [
          "a-jan22-2024-admin-contract-abstain",
          "a-mar09-2026-contract-language"
        ]
      }
    },
    {
      "id": "i-core-academics-school-scope",
      "title": "Core Academics, Special Education, And School Scope",
      "stated": {
        "text": "His 2021 application framed education as a major parental responsibility and\nsaid his medical background could help keep students and staff safe while\nminimizing educational interruptions. In 2025 special-education coverage,\nHays Post attributed to him comments questioning needs versus wants, saying\nthe district could work leaner, and emphasizing core academics.",
        "sourceIds": [
          "s-hayspost-yarmer-vacancy-2021",
          "s-hayspost-sped-sel-2025"
        ]
      },
      "actions": [
        {
          "id": "a-feb20-2025-sped-efficiency-comments",
          "date": "2025-02-20",
          "body": "During special-education and district-spending coverage, Hays Post reported\nYarmer asking whether requested items were needs, questioning whether money\nwas the core education problem, and asking about special-education goal\nprogress.",
          "sourceIds": [
            "s-hayspost-sped-sel-2025"
          ]
        },
        {
          "id": "a-feb20-2025-sel-comments",
          "date": "2025-02-20",
          "body": "Hays Post attributed to Yarmer a critique of social-emotional and mental\nhealth programming inside schools and a preference for core academic focus.",
          "sourceIds": [
            "s-hayspost-sped-sel-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-academics-no-candidate-social",
          "platform": "Public web",
          "observation": "No candidate-controlled social posts on curriculum, SEL, or special education were verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "i-core-academics-school-scope"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Board transparency: he said all school board meetings should be broadcast, agendas should be released at least a week in advance, and board members should be able to add agenda items easily.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-highbond-members"
          ],
          "mappedToIssueId": "i-core-academics-school-scope"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Board role: he said the board should oversee \"the broad goals of the district, how money is spent, and what students are taught,\" while not managing day-to-day operations.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-highbond-members"
          ],
          "mappedToIssueId": "i-core-academics-school-scope"
        }
      ],
      "gap": {
        "summary": "This issue lane is mostly attributed statements, not a detailed written\ncurriculum plan. No public platform was found on vouchers, library materials,\nteacher unions, state standards, or state testing policy.",
        "evidenceIds": [
          "a-feb20-2025-sped-efficiency-comments",
          "a-feb20-2025-sel-comments"
        ]
      }
    },
    {
      "id": "i-parent-rights-safety-facilities",
      "title": "Parent Rights, Safety, And Facilities",
      "stated": {
        "text": "In his 2021 application, Yarmer tied his emergency-medicine work to responsible\npandemic management for students and staff. Hays Post later attributed to him\na direct parental-rights statement in an emergency-policy discussion.",
        "sourceIds": [
          "s-hayspost-yarmer-vacancy-2021",
          "s-hayspost-parent-rights-2025"
        ]
      },
      "actions": [
        {
          "id": "a-sep22-2025-asbestos-yes",
          "date": "2025-09-22",
          "body": "Voted yes on HMS floor tile removal and asbestos-containing mastic abatement\nfor $69,480, while voting no the same night on the Hays High change-order\nmotion. This separates safety/facility remediation from change-order\nskepticism.",
          "sourceIds": [
            "s-usd489-sep22-2025-minutes"
          ]
        },
        {
          "id": "a-dec16-2025-asbestos-emergency-comment",
          "date": "2025-12-16",
          "body": "Tiger Media reported Yarmer seconded a tabling motion during asbestos\nabatement discussion and used an emergency-process critique. Official\nminutes for this specific meeting were not separately extracted in this pass.",
          "sourceIds": [
            "s-tigermedia-asbestos-2025"
          ]
        },
        {
          "id": "a-feb09-2026-felten-asbestos-yes",
          "date": "2026-02-09",
          "body": "Voted yes on a Felten Elementary asbestos-tile change order for $26,199.",
          "sourceIds": [
            "s-usd489-feb09-2026-minutes"
          ]
        },
        {
          "id": "a-apr20-2026-hhs-bathrooms",
          "date": "2026-04-20",
          "body": "Seconded adding HHS Bathroom Discussion to the agenda. Official minutes\nrecord discussion of vandalism, report tracking, processes, and bathroom\nclosures; Hays Post attributed to Yarmer concern that outside-bathroom\ncameras were inadequate for safety/security.",
          "sourceIds": [
            "s-usd489-apr20-2026-minutes",
            "s-hayspost-bathrooms-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-safety-no-candidate-social",
          "platform": "Public web",
          "observation": "No candidate-controlled social posts about bathrooms, emergency policy, or school safety were verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "i-parent-rights-safety-facilities"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "He said capital outlay was \"meant to maintain our facilities\" and should not be used for things he believed belonged under the bond.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-highbond-members"
          ],
          "mappedToIssueId": "i-parent-rights-safety-facilities"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Derek Yarmer's public record is built around local school-board oversight rather than a broad campaign-media operation. In his 2023 Hays Post questionnaire, he described himself as an ER doctor, a parent of children in USD 489, and a non-incumbent candidate whose campaign was \"100 percent personally financed.\" He said he thought there were \"a lot of great things going on within the district,\" including new...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-yarmer-qa-2023"
          ],
          "mappedToIssueId": "i-parent-rights-safety-facilities"
        }
      ],
      "gap": {
        "summary": "The public record shows facility and safety questions, but no complete\ncandidate-authored safety, bathroom, or emergency-policy platform was found.",
        "evidenceIds": [
          "a-apr20-2026-hhs-bathrooms"
        ]
      }
    }
  ],
  "whoTheyAre": "Derek Yarmer is a current USD 489 board member and emergency physician. His public\npersona is built around local board oversight: bond and capital-outlay scrutiny,\nearlier board materials, contract review, and practical facilities/safety questions.",
  "recordSummary": "Official USD 489 minutes show repeated no or table votes on bond-related change\norders, furniture/playground purchases, HVAC agreements, Felten GMP approval, and\nadministrator contract extensions, paired with yes votes on other purchases and\nsafety/facility work. This is best read as a process-and-oversight record, not as\nan across-the-board anti-spending posture.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "No official itemized donor ledger found online in reviewed sources.",
    "donors": [],
    "undisclosed": "Treat the funding profile as candidate-attested self-financing plus absence of a\nfound online ledger, not as an independently audited proof that no outside money\nexisted.",
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Hays USD 489 BOE candidate: Derek Yarmer"
  },
  "socialResearchNote": "No verified public candidate-controlled campaign website or social account was found\nin the existing social harvest or this v2 pass. The USD 489 HighBond member page is\nan official board-member page, not a campaign website.\n",
  "sources": [
    {
      "id": "s-usd489-highbond-members",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
      "title": "USD 489 HighBond/Diligent member page",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Derek Yarmer is listed as Dr. and Board Member.",
        "Yarmer is associated with regular, special, retreat, and work-session board meetings."
      ]
    },
    {
      "id": "s-hayspost-yarmer-vacancy-2021",
      "tier": "primary",
      "url": "https://hayspost.com/posts/f743144f-86f5-409f-af1d-729253115b28",
      "title": "Five apply for vacant USD 489 board seat; app deadline Monday",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post published Yarmer's 2021 applicant letter as submitted.",
        "Yarmer framed education as a parental responsibility.",
        "Yarmer cited emergency medicine, pandemic response, and construction experience."
      ]
    },
    {
      "id": "s-hayspost-yarmer-qa-2023",
      "tier": "primary",
      "url": "https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649",
      "title": "Hays USD 489 BOE candidate: Derek Yarmer",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Yarmer identified as a 39-year-old ER doctor with children in USD 489.",
        "Yarmer asked for board meetings to be broadcast and agendas to be released earlier.",
        "Yarmer described the board role as oversight of goals, spending, and what students are taught.",
        "Yarmer said his campaign was 100 percent personally financed.",
        "Observed public online activity mapped to Parent Rights, Safety, And Facilities."
      ]
    },
    {
      "id": "s-hayspost-yarmer-bond-statement-2025",
      "tier": "primary",
      "url": "https://hayspost.com/posts/52e53c90-5182-42f0-919e-2c7dc145305b",
      "title": "Opinion: Hays USD 489 board member critical of use of bond, capital funds",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post said Yarmer responded by email and published his statement in full.",
        "Yarmer criticized capital-outlay spending on items he said should have been bond-covered.",
        "Yarmer criticized spending priorities including concession stand, scoreboards, tennis courts, and marquee.",
        "Yarmer wrote that the board shared blame for insufficient oversight."
      ]
    },
    {
      "id": "s-usd489-jan22-2024-agenda",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/4617/File.html?handle=7A80C62703E94B0E80A35ACBCCEDEF73",
      "title": "Regular Meeting - Jan. 22, 2024 - Agenda/Minutes",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "District-level administrator contract extension passed 5-1-1.",
        "Derek Yarmer abstained on the administrator contract extension vote."
      ]
    },
    {
      "id": "s-usd489-mar24-2025-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/58b62a8d-8fc5-4292-9392-8a873dcee103",
      "title": "Regular Meeting - Mar. 24, 2025 - Minutes",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Yarmer moved to look into hiring a project manager for the remainder of the bond; motion failed 3-4.",
        "Yarmer voted no on Hays High softball bleachers/press box and Hays Middle School athletic field bleachers.",
        "Yarmer voted yes on Hays High student devices from Dell.",
        "Yarmer voted no on Hays High weights/equipment."
      ]
    },
    {
      "id": "s-usd489-sep22-2025-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/a2b7b53a-f656-418f-b119-8b12a9bb09db",
      "title": "Regular Meeting - Sep. 22, 2025 - Minutes",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Yarmer voted no on Hays High PCCO 007 change orders for $88,347.",
        "Yarmer voted yes on HMS floor tile removal and asbestos-containing mastic abatement for $69,480.",
        "Yarmer voted yes on the HHS marketing partnership contract."
      ]
    },
    {
      "id": "s-usd489-oct13-2025-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/a9206cea-3bbe-4ae5-bc24-538e5caef631",
      "title": "Regular Meeting - Oct. 13, 2025 - Minutes",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Yarmer voted no on HMS furniture purchase from Circadia for $181,236.17.",
        "Yarmer voted no on Lincoln Elementary playground equipment removal for $32,832.",
        "Yarmer voted yes on district staff desktop replacements."
      ]
    },
    {
      "id": "s-usd489-feb09-2026-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/995368df-1067-4426-ad7a-a460a55355b4",
      "title": "Regular Meeting - Feb. 9, 2026 - Minutes",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Yarmer voted no on the Glassman HVAC preventive maintenance update.",
        "Yarmer moved to table the HVAC decision until more information could be provided.",
        "Yarmer voted yes to table administrative personnel contract extensions until the next meeting.",
        "Yarmer moved the activity bus purchase motion and voted yes on the Felten asbestos change order."
      ]
    },
    {
      "id": "s-usd489-feb23-2026-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/8172c018-ca24-4283-9234-7a8805e449b4",
      "title": "Regular Meeting - Feb. 23, 2026 - Minutes",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Yarmer voted no on the annual Glassman HVAC update but seconded a limited 2026 update with RFP direction.",
        "Yarmer voted no on the Felten Elementary GMP of $5,734,887.",
        "Yarmer seconded administrator contract postponement motions.",
        "Yarmer moved to table district director contract extensions."
      ]
    },
    {
      "id": "s-usd489-mar09-2026-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/8316fb03-2128-4a97-b733-dfea83edcb53",
      "title": "Regular Meeting - Mar. 9, 2026 - Minutes",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Yarmer seconded tabling administrator/director contract language updates for work-session discussion.",
        "Yarmer voted no on administrator contract extensions through 2027-28.",
        "Yarmer voted yes on district director contract extensions through 2027-28.",
        "Yarmer voted no on intent to non-renew a teacher."
      ]
    },
    {
      "id": "s-usd489-apr20-2026-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/02c978bc-f804-4cbe-b927-88b6d4cbd04d",
      "title": "Regular Meeting - Apr. 20, 2026 - Minutes",
      "publisher": "Unified School District 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Yarmer seconded adding HHS Bathroom Discussion to the agenda.",
        "Bathroom discussion included vandalism, tracking reports, processes, and bathroom closures.",
        "Yarmer voted no on the first personnel-transactions motion and seconded the revised motion."
      ]
    },
    {
      "id": "s-hayspost-admin-contracts-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
      "title": "Hays USD 489 district administrators' contracts extended another year",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post attributed Yarmer's abstention to lacking information on the contract vote."
      ]
    },
    {
      "id": "s-hayspost-sped-sel-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/753ae9c5-9a0b-4bc2-b319-57e7fc4efdeb",
      "title": "Hays BOE debates need for state special education funding, district spending",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage attributed to Yarmer comments about leaner spending, needs versus wants, money not being the core education problem, and core academic focus."
      ]
    },
    {
      "id": "s-hayspost-project-manager-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "Hays USD 489 board votes not to add another manager for bond work",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage describes the failed March 2025 project-manager motion and related oversight debate."
      ]
    },
    {
      "id": "s-tigermedia-furniture-playground-2025",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=90779",
      "title": "USD 489 Board approves furniture purchase, playground removal, device purchases",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Tiger Media attributed to Yarmer an objection to receiving numbers and voting the same night."
      ]
    },
    {
      "id": "s-tigermedia-asbestos-2025",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=93176",
      "title": "USD 489 Board of Education approves asbestos abatement at Hays Middle School",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Tiger Media attributed to Yarmer the emergency-process quote during asbestos-abatement discussion."
      ]
    },
    {
      "id": "s-hayspost-hvac-contracts-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0c27e966-61e9-4c00-b6d7-7f37f6d3bba7",
      "title": "Hays BOE approves bid process for HVAC contract; delays admin contracts",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage describes HVAC bidding questions and delayed administrator/director contract decisions."
      ]
    },
    {
      "id": "s-tigermedia-felten-gmp-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=94701",
      "title": "Board of Education approves Felten Elementary School bond projects",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Tiger Media attributed to Yarmer a process objection about purchases over $100,000 being discussed before a vote."
      ]
    },
    {
      "id": "s-hayspost-felten-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f5e69fbd-0165-4db1-b896-07613f7a31ed",
      "title": "Hays USD 489 board approves Felten Elementary contract",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage attributed to Yarmer questions about whether Felten plumbing was scoped before bidding."
      ]
    },
    {
      "id": "s-tigermedia-admin-contracts-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=95549",
      "title": "Board of Education extends administrator, director contracts",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Tiger Media attributed to Yarmer concerns about superintendent contract language and a motion to vote on administrator contracts individually."
      ]
    },
    {
      "id": "s-hayspost-bathrooms-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede",
      "title": "USD 489 board members express concerns about bathrooms, vandalism",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage attributed to Yarmer a concern that cameras outside bathrooms were not adequate for safety/security."
      ]
    },
    {
      "id": "s-hayspost-parent-rights-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d89d076f-4f16-4002-a12d-d27ea8cd6471",
      "title": "Hays USD 489 board members question parental rights in emergency policy revision",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage attributed to Yarmer a direct parental-rights statement in an emergency-policy discussion."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(DEREK_YARMER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[derek-yarmer.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
