/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const MASON_RUDER_V2: CandidateFullV2 = {
  "slug": "mason-ruder",
  "name": "Mason Ruder",
  "party": "NP",
  "position": "Hays Mayor; Hays City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Certified Public Manager; Hays civic and Catholic-school advancement work",
  "hometown": "Hays, Kansas",
  "religion": "Catholic",
  "education": "Fort Hays State University -- Political Leadership and Public Service degree (completing/completed)",
  "family": "Tori Ruder (childcare provider in Hays)",
  "issues": [
    {
      "id": "i-water-r9",
      "title": "Water security and the R9 Ranch project",
      "stated": {
        "text": "Ruder's most consistent public issue is Hays' long-term water supply.\nHe has described the R9 Ranch project as an everyday governing priority\nand later as a multi-generational battle. The City of Hays also\npublishes R9 Ranch and R9 Property materials as official project pages,\nso the issue is not merely campaign rhetoric; it is a city policy lane\nwhere Ruder has spoken and acted in office.",
        "sourceIds": [
          "s-haysusa-r9-ranch",
          "s-haysusa-r9-property",
          "s-hayspost-r9-2023",
          "s-hayspost-r9-2025"
        ]
      },
      "actions": [
        {
          "id": "a-hb2433-house-testimony-2026-01-28",
          "date": "2026-01-28",
          "body": "Appeared as a proponent witness on HB 2433 before the Kansas House\nLocal Government Committee. His testimony argued that Edwards County\nzoning restrictions on water transfers above 500 acre-feet created a\nsecond regulatory process for Hays and Russell in the R9 dispute.",
          "sourceIds": [
            "s-ksleg-hb2433",
            "s-ksleg-hb2433-testimony",
            "s-ksleg-house-ruder-testimony",
            "s-kansas-reflector-hb2433"
          ]
        },
        {
          "id": "a-hb2433-senate-testimony-2026-02-26",
          "date": "2026-02-26",
          "body": "Returned as a proponent witness for HB 2433 before the Senate Local\nGovernment, Transparency and Ethics Committee. Two separate Ruder\ntestimony files are registered on the official Senate committee page\nfor that hearing date.",
          "sourceIds": [
            "s-ksleg-hb2433-testimony",
            "s-ksleg-senate-ruder-testimony-1",
            "s-ksleg-senate-ruder-testimony-2"
          ]
        },
        {
          "id": "a-r9-public-framing-2023-2025",
          "date": "2025-08-29",
          "body": "Repeatedly framed R9 as a long-run city responsibility, including\nthe 2023 statement that every day had become an R9 Ranch day and the\n2025 statement that Hays was in a multi-generational battle that\nbegan decades ago.",
          "sourceIds": [
            "s-haysusa-r9-ranch",
            "s-hayspost-r9-2023",
            "s-hayspost-r9-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2023 R9 update: Ruder said, \"Every day is now an R9 Ranch Day.\" Source: Hays Post, Jan. 16, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-r9-2023"
          ],
          "mappedToIssueId": "i-water-r9"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2023 candidate forum: Ruder prioritized the R9 water transfer and said Hays should focus on partnerships with business leaders, Grow Hays, and others to grow the workforce and develop housing. Source: Hays Post, Oct. 18, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-r9"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Facebook",
          "observation": "I searched the candidate name with Hays, mayor, city commission, campaign, Facebook, Instagram, Twitter/X, LinkedIn, Hays Post, Hays USA, Kansas Legislature, R9 Ranch, TMP-Marian, and Hays Catholic Schools. I prioritized candidate-controlled or candidate-attributed public sources: the City of Hays commission page, Kansas Legislature testimony listings, public Hays Post reporting with direct quotes,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksleg-hb2433"
          ],
          "mappedToIssueId": "i-water-r9"
        }
      ]
    },
    {
      "id": "i-housing-development-incentives",
      "title": "Housing, workforce growth, and development incentives",
      "stated": {
        "text": "Ruder's growth language is practical rather than ideological. Public\ncoverage ties him to workforce housing, developer incentives, and\ncity-return calculations. He has said Hays has opened every possible\nincentive for homebuilding while still facing slow project timelines,\nand he has publicly framed city incentive packages in terms of housing,\nworkforce, and measurable local return.",
        "sourceIds": [
          "s-hayspost-housing-incentives",
          "s-hayspost-travel-plaza",
          "s-tigermedia-pioneer-run"
        ]
      },
      "actions": [
        {
          "id": "a-pioneer-run-irb-2026-04-23",
          "date": "2026-04-23",
          "body": "As mayor, presided over and joined a unanimous 5-0 approval of an\nIndustrial Revenue Bond resolution for Overland Property Group's\n48-unit Pioneer Run affordable-housing project. The IRB provides a\nconstruction sales-tax exemption reported at $147,962.50 and bonus\npoints for the developer's state tax-credit application. Ruder said\nthe properties look great, are run well, and provide an affordable\nplace to live.",
          "sourceIds": [
            "s-haysusa-agenda-04232026",
            "s-tigermedia-pioneer-run"
          ]
        },
        {
          "id": "a-travel-plaza-incentives-2026-02-19",
          "date": "2026-02-19",
          "body": "Publicly supported moving the I-70 24/7 Travel Plaza TIF and CID\npackage toward hearing and action. He cited an estimated city rate\nof return of almost 2,200 percent and described the incentive package\nas a good investment. The package included a pay-as-you-go TIF and a\nCID sales-tax overlay for a 9,000-square-foot travel plaza.",
          "sourceIds": [
            "s-haysusa-agenda-02192026",
            "s-haysusa-minutes-02192026",
            "s-haysusa-agenda-02262026",
            "s-hayspost-travel-plaza"
          ]
        },
        {
          "id": "a-chickfila-irb-2026-03-26",
          "date": "2026-03-26",
          "body": "Participated as mayor in the unanimous approval of a resolution of\nintent to issue Industrial Revenue Bonds for a new $6.2 million\nChick-fil-A project at 3404 Vine. The reported construction\nsales-tax exemption was estimated at $66,875.",
          "sourceIds": [
            "s-haysusa-agenda-03262026",
            "s-haysusa-minutes-03262026",
            "s-hayspost-chickfila"
          ]
        },
        {
          "id": "a-workforce-housing-incentives-2025",
          "date": "2025-05-01",
          "body": "In workforce-housing coverage, said Hays had opened every possible\nincentive for homebuilding but project timelines still remained\nslow. This action is a public governing statement rather than a vote,\nand it is included to show how he frames the incentive pipeline.",
          "sourceIds": [
            "s-hayspost-housing-incentives"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2025 workforce/housing: Ruder said Hays had opened up \"every possible incentive\" for homebuilding but that the incentive process and funding timeline still made projects slow. Source: Hays Post, workforce committee coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-housing-incentives"
          ],
          "mappedToIssueId": "i-housing-development-incentives"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Tiger Media Network",
          "observation": "2026 mayor transition: Ruder thanked outgoing mayor Sandy Jacobs for bringing people together \"not just to talk, but to actually move work forward through collaboration,\" and described her economic-development voice as practical and community-minded. Source: Tiger Media Network, Jan. 12, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-tigermedia-mayor-2026"
          ],
          "mappedToIssueId": "i-housing-development-incentives"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2026 travel plaza: Ruder called proposed incentives for the I-70 travel plaza a good investment and cited an estimated city rate of return of almost 2,200%. Source: Hays Post, Feb. 21, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-travel-plaza"
          ],
          "mappedToIssueId": "i-housing-development-incentives"
        }
      ]
    },
    {
      "id": "i-budget-taxes-infrastructure",
      "title": "City budget, taxes, and infrastructure tradeoffs",
      "stated": {
        "text": "Ruder's visible budget record is tied to city services, infrastructure,\nand growth tradeoffs. The corrected record matters here: the 1.96-mill\n2026 increase was an Ellis County budget action, not a Hays city vote\nby Mason Ruder. The Hays city 2026 budget was reported as\nrevenue-neutral at 24.382 mills, below the prior 25 mills and part of\na long city pattern at or below 25 mills.",
        "sourceIds": [
          "s-hayspost-budget-2026"
        ]
      },
      "actions": [
        {
          "id": "a-city-budget-2026",
          "date": "2025-09-12",
          "body": "Served on the Hays City Commission body that approved the 2026 city\nbudget at $54.3 million and 24.382 mills. Available coverage does\nnot quote Ruder individually or report a dissent from him; Deputy\nCity Manager Collin Bielser certified the budget as revenue-neutral.",
          "sourceIds": [
            "s-hayspost-budget-2026"
          ]
        },
        {
          "id": "a-essential-air-service-warning-2025",
          "date": "2025-05-24",
          "body": "Warned that replacing a proposed federal Essential Air Service\nsubsidy cut for Hays Regional Airport with local funding could\nrequire a major increase in the city mill levy. This is included as\na public tradeoff statement, not as a completed tax vote.",
          "sourceIds": [
            "s-hayspost-eas"
          ]
        },
        {
          "id": "a-north-vine-roundabout-2022",
          "date": "2022-08-10",
          "body": "Publicly supported the North Vine roundabout corridor project,\ncalling it an elegant solution to a complex problem and tying it to\nsafety, traffic flow, pedestrian access, and redevelopment potential.",
          "sourceIds": [
            "s-hayspost-north-vine"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2024 Catholic education fundraising: Ruder said TMP-Marian was blessed by alumni and community generosity, including donors who did not attend the school, and described carrying forward earlier generations' work as a privilege. Source: Hays Post, May 5, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-budget-taxes-infrastructure"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2025 airport funding: Ruder said replacing a federal Essential Air Service subsidy cut would require a mill levy increase from 25 to 44 mills. Source: Hays Post, May 24, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-eas"
          ],
          "mappedToIssueId": "i-budget-taxes-infrastructure"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2025 property tax discussion: Ruder said Kansas' vacant-land valuation structure incentivizes holding land rather than building, and suggested marijuana tax revenue could offset property taxes and help sales-tax-reliant communities. Source: Hays Post, Dec. 20, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-budget-taxes-infrastructure"
        }
      ],
      "gap": {
        "summary": "Earlier project notes and the sleuth pass misattributed an Ellis County\n1.96-mill levy increase to Ruder's city record. The corrected evidence\nshows a different picture: the Hays city budget action tied to Ruder's\ncommission role was revenue-neutral and below the prior 25-mill rate.",
        "evidenceIds": [
          "a-city-budget-2026"
        ]
      }
    },
    {
      "id": "i-public-health-mandates",
      "title": "COVID-era public health mandates",
      "stated": {
        "text": "In the 2020 Hays mask-ordinance debate, Ruder's stated position was\nnot that masks were useless; he said he would wear a mask as his doctor\nrecommended. His objection was to the city mandate itself, saying the\ndecision should not be a mandate and that risk mitigation should be up\nto organizations.",
        "sourceIds": [
          "s-hayspost-mask-original"
        ]
      },
      "actions": [
        {
          "id": "a-mask-original-no-2020-07-23",
          "date": "2020-07-23",
          "body": "Cast the lone no vote when the Hays City Commission approved\nOrdinance 3988, the city's original mask ordinance. The city press\nrelease anchors the ordinance and date; Hays Post reports the 4-1\nroll-call split and Ruder's quoted mandate objection.",
          "sourceIds": [
            "s-haysusa-civic-alert-mask",
            "s-hayspost-mask-original"
          ]
        },
        {
          "id": "a-mask-extension-no-2020-08-27",
          "date": "2020-08-27",
          "body": "Voted no when the commission extended the mask ordinance through\nOctober 5, 2020. The reported vote was 3-2, with Ruder and Michael\nBerges voting no.",
          "sourceIds": [
            "s-hayspost-mask-aug"
          ]
        },
        {
          "id": "a-mask-extension-no-2020-10-02",
          "date": "2020-10-02",
          "body": "Was the sole no vote at the October 2, 2020 special meeting where the\ncommission extended the ordinance until specified COVID metrics or a\nstatewide emergency change were met. Mellick was absent; Berges,\nMusil, and Jacobs voted yes.",
          "sourceIds": [
            "s-hayspost-mask-oct"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "LinkedIn",
          "observation": "The visible social footprint is thin. A public LinkedIn preview for Mason Ruder, CPM, shows 151 followers and 131 connections and visible liked/amplified items around R9, Northwest Kansas economic development, Kansas SBDC, childcare, housing, and mental health/community support. Full LinkedIn activity is login-gated, and no reliable public campaign website, campaign Facebook page, X/Twitter, Instagram, or...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksleg-hb2433"
          ],
          "mappedToIssueId": "i-public-health-mandates"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Body: Ruder cast the only \"no\" vote on the city's October 2020 mask ordinance extension and voted against the original ordinance and other extensions. Hays Post quoted him saying he would wear a mask as recommended by his doctor but believed \"the decision should not be a mandate.\" Pattern: 3-2 then 3-1 then sole dissenter, consistent across the ordinance's duration.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksleg-hb2433"
          ],
          "mappedToIssueId": "i-public-health-mandates"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "UM-1 — Youth Leadership Advisory Board creation. Ruder conceived the YLAB as his FHSU capstone project; the city formalized it. Board has 7 student members from Hays High and TMP-Marian, has presented to the commission, hosted mock elections, and run mental-health and fire-explorer projects. Sources: Hays Post (https://hayspost.com/posts/e141bbcd-d4c5-4a9d-83bc-996979742cb2), City of Hays YLAB page...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-public-health-mandates"
        }
      ]
    },
    {
      "id": "i-civic-role-public-presence",
      "title": "Civic role, mayoral selection, and public presence",
      "stated": {
        "text": "Ruder's office is not directly elected as mayor by city voters; Hays\ncommissioners select the mayor from among themselves. His public role\ntherefore combines electoral support for the commission seat with\ncommission selection for the mayoral chair. The visible record also\nincludes public-comment use and civic messaging, while no verified\ncandidate-controlled campaign social page surfaced in the latest pass.",
        "sourceIds": [
          "s-haysusa-minutes-01082026",
          "s-tigermedia-mayor-2026",
          "s-ellis-2023-results",
          "s-hayspost-2023-results"
        ]
      },
      "actions": [
        {
          "id": "a-reelected-commission-2023",
          "date": "2023-11-07",
          "body": "Was re-elected to the Hays City Commission as the top vote-getter in\nthe 2023 city race. Hays Post reported 2,199 votes, or 31.32 percent,\nand described the result as a four-year commission term.",
          "sourceIds": [
            "s-ellis-election-results",
            "s-ellis-2023-results",
            "s-hayspost-2023-results"
          ]
        },
        {
          "id": "a-selected-mayor-2026-01-08",
          "date": "2026-01-08",
          "body": "Was selected by fellow commissioners for a second one-year mayoral\nterm at the January 8, 2026 reorganization meeting. Alaina\nCunningham was selected as vice-mayor.",
          "sourceIds": [
            "s-haysusa-agenda-01082026",
            "s-haysusa-minutes-01082026",
            "s-tigermedia-mayor-2026"
          ]
        },
        {
          "id": "a-911-personal-comments-2025-09-11",
          "date": "2025-09-11",
          "body": "Used the commission personal-comments portion of a September 11, 2025\ncity meeting for an anniversary address. The September 25 minutes\nprovide a transitive official meeting anchor; the speech content was\nreported by Kansas Press Association but remained paywalled in this\npass.",
          "sourceIds": [
            "s-haysusa-agenda-09252025",
            "s-haysusa-minutes-09252025",
            "s-kpa-911"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whereTheyWorship": "Ruder's Catholic affiliation is publicly documented in the existing record.\nHays Catholic Schools identified him with Immaculate Heart of Mary Parish,\nand his biography is tied to TMP-Marian and Hays Catholic Schools. This is\ndescriptive background only, not a grading category.\n",
  "campaignFinance": {
    "totalRaised": "Not itemized in public web records",
    "narrative": "No clean online campaign-finance total was verified for Ruder's city races.\nDo not imply hidden donors from this absence; a local records request would\nbe needed for a full city-campaign filing record.",
    "donors": [],
    "undisclosed": "No donor-by-donor public web ledger was found in the reviewed local records.",
    "reportingPeriod": "Most recent local cycle reviewed",
    "source": "Candidate memory v2 issue file and local filing-system notes"
  },
  "socialResearchNote": "The public-facing social record is limited. Prior harvests found a LinkedIn\npublic preview and local institutional coverage, but no reliable\ncandidate-controlled campaign website, campaign Facebook page, public X,\nInstagram, TikTok, YouTube, Substack, or comparable campaign account.\nLogin-gated or ambiguous social material was not used as issue evidence.\n",
  "sources": [
    {
      "id": "s-ksleg-hb2433",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/HB2433/",
      "title": "HB 2433 Bill Record",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "HB 2433 was the Kansas bill carrying the water-transfer authority dispute involving Hays and Russell",
        "The bill record is the official legislative anchor for Ruder's 2026 testimony"
      ]
    },
    {
      "id": "s-ksleg-hb2433-testimony",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/measures/HB2433/testimony",
      "title": "HB 2433 Testimony Register",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mason Ruder appeared on the HB 2433 testimony register as a proponent on January 28, 2026",
        "Mason Ruder appeared on the HB 2433 testimony register as a proponent on February 26, 2026"
      ]
    },
    {
      "id": "s-ksleg-house-ruder-testimony",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_loc_govt_1/documents/testimony/20260128_05.pdf",
      "title": "Mason Ruder HB 2433 House Committee Testimony",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder submitted written testimony to the House Local Government Committee on January 28, 2026",
        "The testimony argued that Edwards County zoning restrictions created a second regulatory process for the R9 Ranch transfer"
      ]
    },
    {
      "id": "s-ksleg-senate-ruder-testimony-1",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_s_local_government_transparency_and_ethics_1/documents/testimony/20260226_16.pdf",
      "title": "Mason Ruder HB 2433 Senate Committee Testimony 1",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder submitted Senate committee testimony on HB 2433 on February 26, 2026"
      ]
    },
    {
      "id": "s-ksleg-senate-ruder-testimony-2",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_s_local_government_transparency_and_ethics_1/documents/testimony/20260226_24.pdf",
      "title": "Mason Ruder HB 2433 Senate Committee Testimony 2",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "A second Ruder Senate testimony file is registered for the February 26, 2026 HB 2433 hearing"
      ]
    },
    {
      "id": "s-haysusa-r9-ranch",
      "tier": "primary",
      "url": "https://www.haysusa.com/1007/R9-Ranch",
      "title": "R9 Ranch Project",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The City of Hays publishes R9 Ranch as an official city water-supply project",
        "The official project page anchors the institutional context for Ruder's R9 statements"
      ]
    },
    {
      "id": "s-haysusa-r9-property",
      "tier": "primary",
      "url": "https://www.haysusa.com/879/R9-Property",
      "title": "R9 Property",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The City of Hays maintains official R9 property information"
      ]
    },
    {
      "id": "s-hayspost-r9-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
      "title": "Hays Mayor: Every day is now an R9 Ranch Day",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder was quoted in 2023 saying every day is now an R9 Ranch Day",
        "Observed public online activity mapped to Water security and the R9 Ranch project."
      ]
    },
    {
      "id": "s-hayspost-r9-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/72cef8d3-79bf-4085-b070-bccbdc589f9d",
      "title": "Hays officials frame R9 as multi-generational water project",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder called the R9 dispute a multi-generational battle in 2025 coverage",
        "The project cost was reported at $144.9 million in the same coverage"
      ]
    },
    {
      "id": "s-kansas-reflector-hb2433",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute/",
      "title": "Kansas lawmakers weigh where authority lies in 11-year water dispute",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Kansas Reflector carried Ruder's wording about a second regulatory process controlled by Edwards County"
      ]
    },
    {
      "id": "s-haysusa-agenda-04232026",
      "tier": "primary",
      "url": "https://haysusa.com/AgendaCenter/ViewFile/Agenda/_04232026-1609",
      "title": "Hays City Commission Agenda Packet - April 23, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The April 23, 2026 agenda packet included the Pioneer Run affordable-housing IRB item"
      ]
    },
    {
      "id": "s-tigermedia-pioneer-run",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=97002",
      "title": "Hays commission approves Pioneer Run affordable-housing IRB",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The Pioneer Run IRB passed 5-0",
        "The IRB's construction sales-tax exemption was reported at $147,962.50",
        "Ruder said the properties look great, are run well, and provide an affordable place to live"
      ]
    },
    {
      "id": "s-haysusa-agenda-02192026",
      "tier": "primary",
      "url": "https://haysusa.com/AgendaCenter/ViewFile/Agenda/_02192026-1596",
      "title": "Hays City Commission Work Session Agenda - February 19, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The February 19, 2026 work session agenda included the I-70 24/7 Travel Plaza TIF and CID discussion"
      ]
    },
    {
      "id": "s-haysusa-minutes-02192026",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_02192026-1596",
      "title": "Hays City Commission Work Session Minutes - February 19, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The February 19, 2026 work session minutes anchor the travel-plaza incentive discussion"
      ]
    },
    {
      "id": "s-haysusa-agenda-02262026",
      "tier": "primary",
      "url": "https://haysusa.com/AgendaCenter/ViewFile/Agenda/_02262026-1597",
      "title": "Hays City Commission Agenda - February 26, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The February 26, 2026 agenda carried follow-on action for the travel-plaza incentive package"
      ]
    },
    {
      "id": "s-hayspost-travel-plaza",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6988fcbc-170e-42d1-9dbd-cb28e017baba",
      "title": "Hays commission discusses I-70 24/7 Travel Plaza incentives",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder said the rate of return for Hays was almost 2,200 percent",
        "Ruder framed the TIF and CID package as a good investment",
        "The travel-plaza package involved a pay-as-you-go TIF and a CID sales-tax overlay",
        "Observed public online activity mapped to Housing, workforce growth, and development incentives."
      ]
    },
    {
      "id": "s-haysusa-agenda-03262026",
      "tier": "primary",
      "url": "https://haysusa.com/AgendaCenter/ViewFile/Agenda/_03262026-1603",
      "title": "Hays City Commission Agenda - March 26, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The March 26, 2026 agenda packet included the Chick-fil-A IRB resolution of intent"
      ]
    },
    {
      "id": "s-haysusa-minutes-03262026",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_03262026-1603",
      "title": "Hays City Commission Minutes - March 26, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The March 26, 2026 minutes anchor the Chick-fil-A IRB action"
      ]
    },
    {
      "id": "s-hayspost-chickfila",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/433c0ff0-f645-4a6a-a4be-6f8549de14f9",
      "title": "Hays commission approves Chick-fil-A IRB resolution of intent",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The Chick-fil-A IRB was tied to a $6.2 million project at 3404 Vine",
        "The sales-tax exemption was estimated at $66,875",
        "The commission vote was unanimous"
      ]
    },
    {
      "id": "s-hayspost-housing-incentives",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/016d6ea0-0b96-4188-81d9-42efa7a327a0",
      "title": "Hays workforce housing incentive discussion",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder said Hays had opened every possible incentive for homebuilding, but project timelines remained slow",
        "Observed public online activity mapped to Housing, workforce growth, and development incentives."
      ]
    },
    {
      "id": "s-haysusa-agenda-01082026",
      "tier": "primary",
      "url": "https://haysusa.com/AgendaCenter/ViewFile/Agenda/_01082026-1589",
      "title": "Hays City Commission Reorganization Agenda - January 8, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The January 8, 2026 agenda anchored the city commission reorganization"
      ]
    },
    {
      "id": "s-haysusa-minutes-01082026",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01082026-1589",
      "title": "Hays City Commission Reorganization Minutes - January 8, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The commission selected Mason Ruder as mayor and Alaina Cunningham as vice-mayor"
      ]
    },
    {
      "id": "s-tigermedia-mayor-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=93385",
      "title": "Hays commission reelects Mason Ruder mayor",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder was selected by the commission to a second one-year mayoral term",
        "Ruder thanked Sandy Jacobs for collaborative leadership",
        "Observed public online activity mapped to Housing, workforce growth, and development incentives."
      ]
    },
    {
      "id": "s-haysusa-agenda-09252025",
      "tier": "primary",
      "url": "https://haysusa.com/AgendaCenter/ViewFile/Agenda/_09252025-1571",
      "title": "Hays City Commission Agenda - September 25, 2025",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The September 25, 2025 meeting materials reference approval of September 11, 2025 minutes"
      ]
    },
    {
      "id": "s-haysusa-minutes-09252025",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_09252025-1571",
      "title": "Hays City Commission Minutes - September 25, 2025",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The September 25, 2025 minutes are a transitive primary record for the September 11, 2025 meeting"
      ]
    },
    {
      "id": "s-kpa-911",
      "tier": "secondary",
      "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
      "title": "Forgetting the lesson of 9/11 is the danger we face now, says Ruder",
      "publisher": "Kansas Press Association",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "KPA coverage reported Ruder's September 11, 2025 personal-comments address"
      ]
    },
    {
      "id": "s-haysusa-civic-alert-mask",
      "tier": "primary",
      "url": "https://www.haysusa.com/CivicAlerts.aspx?AID=444&ARC=624",
      "title": "City of Hays Ordinance 3988 Announcement",
      "publisher": "City of Hays",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The City of Hays announced Ordinance 3988 after the July 23, 2020 commission vote",
        "The ordinance required masks in public places and set an initial expiration date of August 31, 2020"
      ]
    },
    {
      "id": "s-hayspost-mask-original",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/78a708f5-4f1e-401f-9bd3-85c618edb4de",
      "title": "Hays approves mask ordinance after 4-1 vote",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder cast the lone no vote on the original Hays mask ordinance",
        "Ruder said the decision should not be a mandate",
        "Ruder said risk mitigation should be up to organizations"
      ]
    },
    {
      "id": "s-hayspost-mask-aug",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/71b2e036-1db2-45b6-86a9-c9d86520f000",
      "title": "Hays extends mask ordinance in August 2020",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The August 27, 2020 mask-ordinance extension passed 3-2",
        "Ruder and Michael Berges voted no"
      ]
    },
    {
      "id": "s-hayspost-mask-oct",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1a241ad5-d176-4494-9e9a-aa4a286f3bf4",
      "title": "Hays extends mask ordinance after October 2020 special meeting",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The October 2, 2020 special-meeting extension passed 3-1",
        "Ruder was the sole no vote; Mellick was absent"
      ]
    },
    {
      "id": "s-hayspost-budget-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69",
      "title": "Hays approves 2026 city budget",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The Hays city 2026 budget was $54.3 million",
        "The city mill levy was 24.382 mills, below the prior 25 mills",
        "Deputy City Manager Collin Bielser certified the city budget as revenue-neutral",
        "The city was in its 17th consecutive year at or below 25 mills"
      ]
    },
    {
      "id": "s-hayspost-eas",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2730c5cd-1026-4098-9e5f-ebf15c8fd949",
      "title": "Hays discusses Essential Air Service subsidy tradeoff",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder warned that locally replacing an Essential Air Service subsidy cut could require a major city mill-levy increase",
        "Observed public online activity mapped to City budget, taxes, and infrastructure tradeoffs."
      ]
    },
    {
      "id": "s-hayspost-north-vine",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b4422e87-ed3f-4d70-937d-b25e3a396187",
      "title": "North Vine roundabout corridor coverage",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder called the North Vine roundabout an elegant solution to a complex problem"
      ]
    },
    {
      "id": "s-ellis-election-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/435/Election-Results",
      "title": "Ellis County Election Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ellis County publishes official city and school election results"
      ]
    },
    {
      "id": "s-ellis-2023-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5815/OFFICIAL-RESULTS-2023-CITY-SCHOOL-GENERAL-ELECTION",
      "title": "Official Results - 2023 City/School General Election",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder was re-elected to the Hays City Commission in the 2023 city/school general election"
      ]
    },
    {
      "id": "s-hayspost-2023-results",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hays city commission 2023 election results",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder was the top vote-getter in the 2023 Hays City Commission race",
        "Ruder received 2,199 votes, or 31.32 percent",
        "Ruder said city decisions affect residents almost immediately"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/686c41a0-31e3-415a-8fdf-3df810e7f5be",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water security and the R9 Ranch project.",
        "2023 candidate forum: Ruder prioritized the R9 water transfer and said Hays should focus on partnerships with business leaders, Grow Hays, and others to grow the workforce and deve"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to City budget, taxes, and infrastructure tradeoffs.",
        "2024 Catholic education fundraising: Ruder said TMP-Marian was blessed by alumni and community generosity, including donors who did not attend the school, and described carrying fo"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to City budget, taxes, and infrastructure tradeoffs.",
        "2025 property tax discussion: Ruder said Kansas' vacant-land valuation structure incentivizes holding land rather than building, and suggested marijuana tax revenue could offset pr"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e141bbcd-d4c5-4a9d-83bc-996979742cb2",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to COVID-era public health mandates.",
        "UM-1 — Youth Leadership Advisory Board creation. Ruder conceived the YLAB as his FHSU capstone project; the city formalized it. Board has 7 student members from Hays High and TMP-M"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(MASON_RUDER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[mason-ruder.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
