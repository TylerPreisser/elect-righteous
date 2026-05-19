/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ALAINA_CUNNINGHAM_V2: CandidateFullV2 = {
  "slug": "alaina-cunningham",
  "name": "Alaina Cunningham",
  "party": "NP",
  "position": "Hays Vice Mayor / City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Nurse / Fitness Instructor",
  "education": "RN (Registered Nurse) credential -- school not confirmed",
  "issues": [
    {
      "id": "i-water-r9",
      "title": "Water and R9 long-term supply",
      "stated": {
        "text": "Cunningham has consistently treated water supply as a long-term city issue.\nIn her 2023 candidate Q&A she named securing a sustainable water source as\na top challenge, connected that work to conservation and the R9 framework,\nand said the pipeline would give Hays a sustainable supply for years to come.\nIn 2025 R9 coverage, she framed the project in survival terms.",
        "sourceIds": [
          "s-hayspost-qa-2023",
          "s-hayspost-r9-2025"
        ]
      },
      "actions": [
        {
          "id": "a-r9-implementation-question-2023-11-15",
          "date": "2023-11-15",
          "body": "During coverage of a R9 wellfield and pipeline update, Cunningham asked\nhow many property owners would need to be worked with along the proposed\n67-mile pipeline. The response estimated roughly 150 to 200 property\nowners. This is an implementation question, not a roll-call vote.",
          "sourceIds": [
            "s-hayspost-r9-2023"
          ]
        },
        {
          "id": "a-r9-survival-statement-2025-08-29",
          "date": "2025-08-29",
          "body": "At a Hays-Russell R9 update, Cunningham said the project was about\nsustainability and survival and said Hays does not survive without it.\nThis is direct candidate-attributed issue evidence; no primary roll-call\nvote on this specific R9 item was located in this pass.",
          "sourceIds": [
            "s-hayspost-r9-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-no-campaign-social-water",
          "platform": "Public web / social search",
          "observation": "No candidate-controlled campaign social feed was verified, so water issue evidence comes from local candidate Q&A, local coverage, and official city records rather than social posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2023"
          ],
          "mappedToIssueId": "i-water-r9"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "Her 2023 candidate Q&A is the densest first-person source. She framed her run around public service, saying she wanted to make positive change and that she tries to apply the motto \"Do Good\" in all areas of life. Her stated priorities were sustainable water, economic growth, housing supply, youth retention, retirees and aging residents, budget discipline, infrastructure, and quality of life. (Hays Post, Oct. 25,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2023"
          ],
          "mappedToIssueId": "i-water-r9"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "On water, Cunningham's own statements put R9 and long-term water supply in survival terms. In her 2023 Q&A, she said securing a sustainable water source was one of the top issues facing Hays and praised conservation and the R9 framework. (Hays Post, Oct. 25, 2023) At a 2025 Hays-Russell R9 update, she said, \"This is about sustainability and survival,\" and \"without it, we don't survive.\" (Hays Post, Aug. 29, 2025)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2023"
          ],
          "mappedToIssueId": "i-water-r9"
        }
      ],
      "gap": {
        "summary": "The strongest Cunningham-specific water evidence is secondary-source\ncandidate attribution. A primary roll-call vote or official R9 meeting\nminute with a Cunningham-specific action was not confirmed in this pass.",
        "evidenceIds": [
          "a-r9-implementation-question-2023-11-15"
        ]
      }
    },
    {
      "id": "i-housing-growth-incentives",
      "title": "Housing, workforce growth, and development incentives",
      "stated": {
        "text": "Cunningham has linked housing availability, workforce retention, retirees,\nand business growth. Her 2023 Q&A called for diversified housing and\nincentives to make development feasible. Later public comments continued\nto describe incentives as a practical tool for getting projects built in Hays.",
        "sourceIds": [
          "s-hayspost-qa-2023",
          "s-tigermedia-profile-2023",
          "s-hayspost-forum-2023",
          "s-hayspost-development-2023",
          "s-hayspost-agiliti-2025",
          "s-hayspost-incentives-2025"
        ]
      },
      "actions": [
        {
          "id": "a-exit157-tif-cid-2026-04-09",
          "date": "2026-04-09",
          "body": "Cunningham, attending by Zoom, voted aye on Ordinance No. 4097 adopting\nthe Exit 157 24-7 TIF project plan and development agreement, and voted\naye on Ordinance No. 4098 establishing the community improvement district\nand levying a 2.0 percent CID sales tax.",
          "sourceIds": [
            "s-hays-agenda-04232026"
          ]
        },
        {
          "id": "a-pioneer-run-irb-2026-04-23",
          "date": "2026-04-23",
          "body": "Cunningham voted aye on Resolution No. 2026-005, an intent to issue\nIndustrial Revenue Bonds for the Pioneer Run affordable multifamily\nproject. The packet says the resolution could help the developer's Low\nIncome Housing Tax Credit application by granting up to 10 additional\npoints.",
          "sourceIds": [
            "s-hays-agenda-05142026"
          ]
        },
        {
          "id": "a-lihtc-fee-waiver-support-2026-04-23",
          "date": "2026-04-23",
          "body": "Cunningham voted aye on the consent agenda that included letters of\nsupport to waive development fees for eligible 2026 LIHTC projects.\nThe packet letters say the projects would fill a substantial housing\nneed and cite a city housing study identifying 189 low-income units\nneeded by 2030.",
          "sourceIds": [
            "s-hays-agenda-05142026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-housing-local-media-only",
          "platform": "Hays Post / Tiger Media",
          "observation": "Housing and growth signals are candidate-attributed through local media and official votes, not through a verified campaign social feed.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2023",
            "s-hayspost-forum-2023"
          ],
          "mappedToIssueId": "i-housing-growth-incentives"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Tiger Media Network",
          "observation": "Tiger Media Network's 2023 candidate feature repeats the service frame and adds biography: she moved to Hays in August 2010, raised three children in the city, works as a registered nurse and group fitness instructor, and has served with Downtown Hays Development Corporation, HaysMed Foundation, Hays High Academic Booster Club, and O'Loughlin PTA. (Tiger Media Network, 2023)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-tigermedia-profile-2023"
          ],
          "mappedToIssueId": "i-housing-growth-incentives"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "On development incentives, she repeatedly frames incentives as a practical tool for growth rather than an ideological talking point. In late 2023, after commissioners approved development-related agreements, she said, \"We've all agreed that growth is what we want,\" and argued that the first developer paying infrastructure costs should have a chance to recoup costs. (Hays Post) In November 2025, she said of...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-development-2023"
          ],
          "mappedToIssueId": "i-housing-growth-incentives"
        }
      ]
    },
    {
      "id": "i-budget-taxes-city-services",
      "title": "Budget, taxes, and city services",
      "stated": {
        "text": "Cunningham's public budget language is tradeoff-oriented. She supported a\nconstrained, revenue-neutral 2026 city budget and has warned that removing\nfunding sources can shift costs elsewhere. On local ordinances and services,\nher visible comments emphasize resident feedback and practical city operations.",
        "sourceIds": [
          "s-hayspost-budget-2026",
          "s-hayspost-property-tax-2025",
          "s-hayspost-budget-prep-2026",
          "s-hayspost-fireworks-2025"
        ]
      },
      "actions": [
        {
          "id": "a-2026-budget-revenue-neutral-2025-09-11",
          "date": "2025-09-11",
          "body": "Cunningham voted aye on the amended 2026 City of Hays budget at the\nrevenue-neutral rate of 24.382 mills. The official minutes state the\ncity found a way to stay revenue-neutral without affecting operations\nor capital projects.",
          "sourceIds": [
            "s-hays-agenda-09252025",
            "s-hayspost-budget-2026"
          ]
        },
        {
          "id": "a-code-abatement-actions-2025-09-11",
          "date": "2025-09-11",
          "body": "Cunningham moved Resolution No. 2025-017 for nuisance abatement at\n515 East 11th Street and seconded Resolution No. 2025-019 for nuisance\nand inoperable-vehicle abatement at 231 East 12th Street. Both actions\npassed with Cunningham voting aye.",
          "sourceIds": [
            "s-hays-agenda-09252025"
          ]
        },
        {
          "id": "a-2025-audit-accepted-2026-04-09",
          "date": "2026-04-09",
          "body": "Cunningham voted aye to accept the 2025 City of Hays audit as presented\nby Adams Brown.",
          "sourceIds": [
            "s-hays-agenda-04232026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-budget-no-national-feed",
          "platform": "Public web / social search",
          "observation": "No verified candidate-controlled public posts were found on national partisan issues; the accessible public record centers city budgets, taxes, services, housing, water, and resident feedback.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-budget-2026",
            "s-hayspost-fireworks-2025"
          ],
          "mappedToIssueId": "i-budget-taxes-city-services"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "On budget and tax tradeoffs, she is visible as a constrained-budget voice. During 2026 budget approval, she told staff, \"You brought us a constrained budget which is what we asked for.\" (Hays Post, Sep. 12, 2025) When Rep. Barb Wasinger asked local officials for property-tax-relief ideas, Cunningham warned, \"When we eliminate sources of funding, we're just shifting the burden.\" (Hays Post, Dec. 20, 2025) In April...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-budget-2026"
          ],
          "mappedToIssueId": "i-budget-taxes-city-services"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "1. City of Hays commission page: current role/status, vice mayor listing, commission structure, agenda/minutes and video links. (source) 2. Hays Post appointment coverage: unanimous appointment, swearing-in, nursing/civic background, first public thank-you quote. (source) 3. Hays Post candidate Q&A: first-person platform on water, housing, economic growth, retirees, budget, infrastructure, and \"Do Good.\" (source) 4.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-current-commission"
          ],
          "mappedToIssueId": "i-budget-taxes-city-services"
        }
      ]
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No clean online donor list, campaign-finance total, committee report, or itemized contribution record for Alaina Cunningham was located in reviewed public sources.",
    "narrative": "No clean online donor list, campaign-finance total, committee report, or itemized contribution record for Alaina Cunningham was located in reviewed public sources.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Campaign Finance"
  },
  "sources": [
    {
      "id": "s-hays-current-commission",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "City Commission",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The City of Hays lists Alaina Cunningham as vice mayor",
        "The City of Hays describes the commission as the city's policy-making body",
        "Hays commissioners are elected at large every two years",
        "Observed public online activity mapped to Budget, taxes, and city services."
      ]
    },
    {
      "id": "s-hayspost-qa-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
      "title": "Hays City Commission candidate: Alaina Cunningham",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham identified water, economic growth, housing, youth retention, retirees, budget discipline, infrastructure, and quality of life as priorities",
        "Cunningham said she felt a duty to serve the public and Do Good",
        "Cunningham said Hays needs developer incentives and diversified housing",
        "Observed public online activity mapped to Water and R9 long-term supply."
      ]
    },
    {
      "id": "s-tigermedia-profile-2023",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Get to know the Hays City Commission candidates",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham said she moved to Hays in August 2010",
        "Cunningham described herself as a practicing registered nurse and group fitness instructor",
        "Cunningham listed Downtown Hays, HaysMed Foundation, Hays High Academic Booster Club, and O'Loughlin PTA involvement",
        "Observed public online activity mapped to Housing, workforce growth, and development incentives."
      ]
    },
    {
      "id": "s-hayspost-forum-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/686c41a0-31e3-415a-8fdf-3df810e7f5be",
      "title": "Housing, business development needs dominate Hays city commission candidate forum",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Housing and business development dominated the 2023 candidate forum",
        "Cunningham identified youth retention as a priority"
      ]
    },
    {
      "id": "s-hayspost-r9-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9c981d45-80ed-4135-b051-8be7b0481957",
      "title": "Water sampling, wellfield design for Hays' R9 Ranch to begin in new year",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham asked how many property owners would need to be worked with along the R9 pipeline"
      ]
    },
    {
      "id": "s-hayspost-r9-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/72cef8d3-79bf-4085-b070-bccbdc589f9d",
      "title": "R9 water pipeline project should be out to bid early next year despite litigation",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham said R9 is about sustainability and survival",
        "Cunningham said without the project Hays does not survive"
      ]
    },
    {
      "id": "s-hayspost-development-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eeb37c70-d05e-427e-bdb6-b673010bd8af",
      "title": "Hays City Commission approves 3 development-related agreements",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham said growth is what the commission wanted",
        "Cunningham supported a developer cost-recoupment rationale for infrastructure",
        "Observed public online activity mapped to Housing, workforce growth, and development incentives."
      ]
    },
    {
      "id": "s-hays-agenda-09252025",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_09252025-1571",
      "title": "Hays City Commission Agenda Packet - September 25, 2025",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The packet includes September 11, 2025 minutes",
        "The September 11 minutes show the city stayed revenue-neutral at 24.382 mills",
        "Cunningham voted aye on the amended 2026 budget",
        "Cunningham moved or seconded nuisance-abatement actions"
      ]
    },
    {
      "id": "s-hayspost-budget-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69",
      "title": "Hays approves 2026 revenue-neutral budget",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The Hays city 2026 budget was $54.3 million and revenue-neutral at 24.382 mills",
        "Cunningham said staff brought the constrained budget commissioners asked for",
        "Observed public online activity mapped to Budget, taxes, and city services."
      ]
    },
    {
      "id": "s-hayspost-property-tax-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9",
      "title": "Local officials discuss property-tax-relief ideas",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham warned that eliminating funding sources can shift the burden"
      ]
    },
    {
      "id": "s-hayspost-budget-prep-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb",
      "title": "Hays officials discuss property-tax caps and city impacts",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham said residents should understand early that tax caps could affect city services and amenities"
      ]
    },
    {
      "id": "s-hays-agenda-04232026",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_04232026-1609",
      "title": "Hays City Commission Agenda Packet - April 23, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The packet includes April 9, 2026 minutes",
        "Cunningham voted aye on Exit 157 24-7 TIF and CID actions",
        "Cunningham voted aye on the 2025 audit"
      ]
    },
    {
      "id": "s-hays-agenda-05142026",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_05142026-1611",
      "title": "Hays City Commission Agenda Packet - May 14, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The packet includes April 23, 2026 minutes",
        "Cunningham voted aye on the Pioneer Run IRB resolution",
        "Cunningham voted aye on LIHTC fee-waiver support letters"
      ]
    },
    {
      "id": "s-hayspost-agiliti-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4d49c8ec-b445-4b28-a49c-d154c709104f",
      "title": "Hays commission discusses Agiliti incentives",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham said the economic benefit from Agiliti's expansion made incentives valuable to the community"
      ]
    },
    {
      "id": "s-hayspost-incentives-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a308442f-a0fc-49ea-b6a1-b905513a368b",
      "title": "Hays commission discusses development incentives",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham said conversations with developers showed incentives are needed to get projects to Hays"
      ]
    },
    {
      "id": "s-hayspost-fireworks-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/26608269-25e1-4f29-b80f-d2edbb3bba3d",
      "title": "Hays seeks resident feedback on fireworks",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham called fireworks a hot topic and asked residents to provide feedback"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ALAINA_CUNNINGHAM_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[alaina-cunningham.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
