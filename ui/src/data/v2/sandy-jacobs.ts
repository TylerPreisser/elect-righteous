/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SANDY_JACOBS_V2: CandidateFullV2 = {
  "slug": "sandy-jacobs",
  "name": "Sandy Jacobs",
  "party": "NP",
  "position": "Hays City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Retired banker",
  "issues": [
    {
      "id": "i-water-r9",
      "title": "Water security and the R9 Ranch project",
      "stated": {
        "text": "Jacobs' clearest long-term issue is Hays' water supply and the R9 Ranch\nproject. In her 2025 candidate Q&A, she said R9 was unfinished work she\nwanted to help finish and said Hays had asked for less water than state\nrules allowed. The City of Hays official R9 page anchors the project as\na long-term sustainable water-supply investment, but issue language\nshould distinguish city institutional claims from Jacobs' direct quotes.",
        "sourceIds": [
          "s-hayspost-qa-2025",
          "s-hays-r9-ranch"
        ]
      },
      "actions": [
        {
          "id": "a-r9-public-priority-2025-10-22",
          "date": "2025-10-22",
          "body": "In the Hays Post candidate Q&A, Jacobs named R9 among the projects she\nwanted to stay around to finish and defended the city's posture by\nsaying Hays had asked for less water than state rules allowed. This is\na candidate-attributed statement rather than a roll-call vote.",
          "sourceIds": [
            "s-hayspost-qa-2025"
          ]
        },
        {
          "id": "a-mayor-transition-r9-summary-2026-01-08",
          "date": "2026-01-08",
          "body": "During the January 2026 governing-body transition, Hays Post reported\nJacobs saying the commission had made major strides on R9, housing,\neconomic growth, a police facility commitment, parks, and the airport.\nOfficial minutes anchor the meeting and reorganization.",
          "sourceIds": [
            "s-hays-minutes-01082026",
            "s-hayspost-reorg-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-water-no-campaign-feed",
          "platform": "Public web / social search",
          "observation": "No verified candidate-controlled public social feed with water/R9 posts was available; water evidence comes from official city context and candidate-attributed local coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2025",
            "s-facebook-local-harvest"
          ],
          "mappedToIssueId": "i-water-r9"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "I coded 18 accessible candidate-controlled or candidate-attributed items. Categories are non-exclusive because one interview answer or meeting quote often covered water, budget, and development together.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-local-harvest"
          ],
          "mappedToIssueId": "i-water-r9"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "\"We've asked for less water than is allowed by the state, and that is huge.\" Source: Hays Post Q&A, Oct. 22, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2025"
          ],
          "mappedToIssueId": "i-water-r9"
        }
      ],
      "gap": {
        "summary": "A Jacobs-specific recent R9 roll-call vote was not isolated in this pass.\nHer strongest R9 evidence is stated-priority coverage plus her role on\nthe governing body overseeing the city project.",
        "evidenceIds": [
          "a-r9-public-priority-2025-10-22"
        ]
      }
    },
    {
      "id": "i-budget-taxes-services",
      "title": "City budget, taxes, and service tradeoffs",
      "stated": {
        "text": "Jacobs' budget language emphasizes revenue neutrality, conservative\nbudgeting, and tradeoffs. She said the city should first try to remain\nrevenue neutral and avoid unsustainable budgeting. Official minutes show\nthe city found a path to a 24.382-mill revenue-neutral 2026 budget that\nwould not affect operations or capital projects, and Jacobs voted aye.",
        "sourceIds": [
          "s-hayspost-qa-2025",
          "s-hays-agenda-09252025",
          "s-hayspost-budget-prep-2026"
        ]
      },
      "actions": [
        {
          "id": "a-2026-city-budget-revenue-neutral-2025-09-11",
          "date": "2025-09-11",
          "body": "As mayor, Jacobs voted aye on the 2026 City of Hays budget action after\ncity staff identified a path to remain revenue neutral at 24.382 mills.\nThe minutes say maintaining revenue neutral would not affect city\noperations or capital projects.",
          "sourceIds": [
            "s-hays-agenda-09252025"
          ]
        },
        {
          "id": "a-budget-tradeoff-statement-2026-04-06",
          "date": "2026-04-06",
          "body": "In budget-prep coverage, Jacobs asked where money would come from and\nwhat residents would be willing to give up under budget constraints.\nThis is a public tradeoff statement, not a completed tax vote.",
          "sourceIds": [
            "s-hayspost-budget-prep-2026"
          ]
        },
        {
          "id": "a-nuisance-abatement-votes-2025-09-11",
          "date": "2025-09-11",
          "body": "Jacobs voted aye on nuisance-abatement resolutions at the same meeting\nas the 2026 budget hearings, including actions tied to nuisance items\nand an inoperable vehicle. These are routine city operations actions,\nnot broad code-enforcement ideology by themselves.",
          "sourceIds": [
            "s-hays-agenda-09252025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-budget-social-absence",
          "platform": "Facebook / LinkedIn / public web",
          "observation": "No accessible candidate-controlled social posts on budget or taxes were found; budget evidence is from official minutes and local candidate-attributed coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-local-harvest",
            "s-linkedin-local-harvest"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "\"My first goal, other than maintaining taxes, would be retail development.\" Source: Hays Post Q&A, Oct. 22, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2025"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Hays Post Archive: Foundation announces results of Twice as Nice fundraising program",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        }
      ]
    },
    {
      "id": "i-housing-affordability-incentives",
      "title": "Housing, affordability, and development incentives",
      "stated": {
        "text": "Jacobs identifies housing as one of the commission's most impactful\nareas of work, including changes to economic-development policy,\nincentive districts, and moderate-income housing. In 2026, the record\nshows support for Low-Income Housing Tax Credit-adjacent fee waivers and\nIRB sales-tax exemptions intended to help affordable-housing projects\ncompete for state tax credits.",
        "sourceIds": [
          "s-hayspost-qa-2025",
          "s-hays-agenda-04232026",
          "s-tigermedia-pioneer-run",
          "s-hays-agenda-05142026",
          "s-hayspost-low-income-housing-05182026"
        ]
      },
      "actions": [
        {
          "id": "a-pioneer-run-irb-2026-04-23",
          "date": "2026-04-23",
          "body": "Tiger Media reported the commission approved a 5-0 IRB resolution for\nOverland Property Group's Pioneer Run affordable-housing project, with\nan estimated $147,962.50 construction sales-tax exemption benefit.\nJacobs said low-income housing is difficult to make financially\nfeasible without LIHTC assistance. The city agenda packet anchors the\nfee-waiver and Resolution 2026-005 context.",
          "sourceIds": [
            "s-hays-agenda-04232026",
            "s-tigermedia-pioneer-run"
          ]
        },
        {
          "id": "a-lihtc-fee-waiver-support-2026-04-23",
          "date": "2026-04-23",
          "body": "The April 23 agenda packet included letters supporting fee waivers for\neligible LIHTC projects, including a Pioneer Run letter citing a city\nhousing study that identified 189 low-income units needed by 2030 and\ncommitting to waive the lesser of $80,000 or all combined impact,\nutility, and other fees if tax credits were awarded.",
          "sourceIds": [
            "s-hays-agenda-04232026"
          ]
        },
        {
          "id": "a-willow-wheatland-irb-2026-05-14",
          "date": "2026-05-14",
          "body": "Hays Post reported commissioners unanimously agreed to two more IRB\nresolutions for low-income housing projects: Willow Grove and\nWheatland Commons. The May 14 agenda packet listed Resolution 2026-006\nfor Willow Grove and Resolution 2026-007 for Wheatland Commons.\nApproved minutes were not visible in this pass, so use this as\nagenda-plus-secondary evidence until city minutes post.",
          "sourceIds": [
            "s-hays-agenda-05142026",
            "s-hayspost-low-income-housing-05182026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-housing-no-post-feed",
          "platform": "Facebook / GoodParty",
          "observation": "GoodParty links a Facebook page but the profile is unclaimed and Facebook did not expose a usable public post feed; housing issue evidence is from official agenda records and local reporting.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-goodparty-jacobs",
            "s-facebook-local-harvest"
          ],
          "mappedToIssueId": "i-housing-affordability-incentives"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "Hays Post: Planned travel plaza and 2027 draft budget",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-budget-prep-2026"
          ],
          "mappedToIssueId": "i-housing-affordability-incentives"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "The dominant theme is long-term stewardship of Hays. In her 2025 Hays Post Q&A, Jacobs framed the race around finishing city work already underway, especially the R9 water project. She said she had served eight years and that her \"passion continues to be for this city as a native,\" then described a commission that does not always agree but finds common solutions. In the coded harvest, economic development,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-local-harvest"
          ],
          "mappedToIssueId": "i-housing-affordability-incentives"
        }
      ],
      "gap": {
        "summary": "May 14, 2026 approved minutes were not available during this pass. The\nMay 14 housing action should be upgraded to primary vote evidence once\nminutes are posted.",
        "evidenceIds": [
          "a-pioneer-run-irb-2026-04-23"
        ]
      }
    },
    {
      "id": "i-economic-development-retail",
      "title": "Retail growth and economic development",
      "stated": {
        "text": "Jacobs repeatedly frames retail development as important to Hays' tax\nbase and quality of life. Her visible 2026 record includes support for\nthe I-70 travel-plaza concept, tying Vine Street roundabouts to retail\ndevelopment access, and seconding the Chick-fil-A IRB resolution. The\nrecord should note support without overstating every incentive as a\nJacobs-authored policy.",
        "sourceIds": [
          "s-hayspost-qa-2025",
          "s-hayspost-election-2025-issues",
          "s-hays-minutes-02192026",
          "s-hayspost-travel-plaza",
          "s-hayspost-chickfila-worksession",
          "s-hays-minutes-03262026"
        ]
      },
      "actions": [
        {
          "id": "a-travel-plaza-work-session-support-2026-02-19",
          "date": "2026-02-19",
          "body": "Jacobs was present for the work session discussing the Exit 157 24-7\nTravel Plaza TIF, CID, and IRB request. Hays Post quoted her calling\nit an exciting project and saying she was ready to see what it did to\nthe interchange. Do not list Jacobs as voting on the final April 9\nTIF/CID ordinances; city minutes list her absent for that meeting.",
          "sourceIds": [
            "s-hays-minutes-02192026",
            "s-hayspost-travel-plaza",
            "s-hays-agenda-04232026"
          ]
        },
        {
          "id": "a-chickfila-irb-2026-03-26",
          "date": "2026-03-26",
          "body": "Jacobs seconded and voted aye on Resolution 2026-004 evidencing intent\nto issue Industrial Revenue Bonds for the Chick-fil-A project. The\nminutes say the developer sought a construction sales-tax exemption and\ndid not request property-tax abatement.",
          "sourceIds": [
            "s-hays-minutes-03262026",
            "s-hayspost-chickfila-worksession"
          ]
        },
        {
          "id": "a-roundabouts-retail-access-2026-03-21",
          "date": "2026-03-21",
          "body": "In Chick-fil-A work-session coverage, Jacobs said the city's Vine\nStreet roundabouts were installed for development like this, allowing\npeople to get in and out without stop signs or red lights. This is a\npublic infrastructure/economic-development statement rather than a\nseparate vote.",
          "sourceIds": [
            "s-hayspost-chickfila-worksession"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "\"Retail is really high on my list, and the workforce needs some attention.\" Source: Hays Post, Nov. 6, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-election-2025-issues"
          ],
          "mappedToIssueId": "i-economic-development-retail"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Her economic-development message is practical and city-budget centered. Jacobs talks about retail not as culture-war identity or partisan branding, but as a sales-tax base and quality-of-life issue. In the 2025 Q&A, she said her first goal beyond maintaining taxes would be retail development and that Grow Hays was focused on it because the general fund depends on sales tax. After winning re-election, she told...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-election-2025-issues"
          ],
          "mappedToIssueId": "i-economic-development-retail"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Housing, parks, and quality of life fill out the local frame. Jacobs credits the commission's prior four-year focus on housing, including economic-development policy changes and moderate-income housing tools. She also says low-income housing is difficult without incentives and may require mill-levy decisions the community may not be ready to make. On parks, she points to the ARC Park as a model but says broader...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2025"
          ],
          "mappedToIssueId": "i-economic-development-retail"
        }
      ],
      "gap": {
        "summary": "Final April 9, 2026 travel-plaza TIF/CID votes should not be attributed\nto Jacobs because city minutes in the April 23 packet list her absent.",
        "evidenceIds": [
          "a-travel-plaza-work-session-support-2026-02-19"
        ]
      }
    },
    {
      "id": "i-infrastructure-codes-operations",
      "title": "Infrastructure maintenance, codes, and city operations",
      "stated": {
        "text": "Jacobs' operational record includes routine but concrete votes on sewer\nmaintenance, water-reclamation equipment, fire/property/electrical codes,\nproperty maintenance, and street design. These fit her public emphasis on\nmaintaining city assets and planning for long-term quality of life.",
        "sourceIds": [
          "s-hays-minutes-03262026",
          "s-hays-agenda-05142026",
          "s-hayspost-low-income-housing-05182026",
          "s-hayspost-2021-profile"
        ]
      },
      "actions": [
        {
          "id": "a-sewer-cleaning-contract-2026-03-26",
          "date": "2026-03-26",
          "body": "Jacobs voted aye to authorize sanitary sewer cleaning and video\ninspection of 118,198.53 linear feet at a price of $133,028.65, with\nadditional authority up to $150,000 for heavier cleaning, tap intrusion\nand root removal, and patching as needed.",
          "sourceIds": [
            "s-hays-minutes-03262026"
          ]
        },
        {
          "id": "a-centrifuge-maintenance-2026-03-26",
          "date": "2026-03-26",
          "body": "Jacobs moved to authorize a Water Reclamation and Reuse Facility\ncentrifuge maintenance contract at $48,572.28.",
          "sourceIds": [
            "s-hays-minutes-03262026"
          ]
        },
        {
          "id": "a-code-adoptions-2026-03-26",
          "date": "2026-03-26",
          "body": "Jacobs seconded adoption of the 2024 International Fire Code, moved\nadoption of the 2024 International Property Maintenance Code, and\nseconded adoption of the 2023 National Electrical Code, each with local\namendments and unanimous aye votes recorded.",
          "sourceIds": [
            "s-hays-minutes-03262026"
          ]
        },
        {
          "id": "a-street-design-contract-2026-05-14",
          "date": "2026-05-14",
          "body": "Hays Post reported commissioners approved a $94,400 design contract\nwith Driggs Design Group for reconstruction design work on portions of\n22nd Street, General Hays Road, and Oak Street. The May 14 agenda\npacket anchors the contract item; approved minutes were not yet visible.",
          "sourceIds": [
            "s-hays-agenda-05142026",
            "s-hayspost-low-income-housing-05182026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "What was observed: Official September 2025 minutes show the city found a path to remain revenue neutral at 24.382 mills and that maintaining revenue-neutral status would not affect operations or capital projects. Jacobs voted aye on the budget action. In the 2025 Q&A she praised conservative budgeting, said the city was not overtaxing from her perspective, and said the first goal is to remain revenue neutral. In...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-local-harvest"
          ],
          "mappedToIssueId": "i-infrastructure-codes-operations"
        }
      ]
    },
    {
      "id": "i-civic-style-public-presence",
      "title": "Civic style and public presence",
      "stated": {
        "text": "Jacobs' public style is collaborative and institution-focused. She\ndescribes leadership as listening, bringing people together, and keeping\nthe community at the center of decisions. Her online footprint is thin:\na Facebook page and LinkedIn preview exist, but no reliable public\npost-level feed was available, and GoodParty's profile is unclaimed.",
        "sourceIds": [
          "s-hayspost-qa-2025",
          "s-hayspost-reorg-2026",
          "s-tigermedia-reorg-2026",
          "s-goodparty-jacobs",
          "s-facebook-local-harvest",
          "s-linkedin-local-harvest"
        ]
      },
      "actions": [
        {
          "id": "a-sworn-in-commissioner-2026-01-08",
          "date": "2026-01-08",
          "body": "Official minutes show Jacobs was sworn in again as commissioner after\nthe 2025 election, voted aye for Mason Ruder as mayor and Alaina\nCunningham as vice mayor, and moved approval of the commission rules\nconsent agenda.",
          "sourceIds": [
            "s-hays-minutes-01082026"
          ]
        },
        {
          "id": "a-reelected-2025-four-year-term",
          "date": "2025-11-04",
          "body": "Jacobs was re-elected to the Hays City Commission in 2025. Hays Post\nreported Jacobs and Shaun Musil would receive four-year terms; the\nofficial Ellis County results PDF is the primary result path, though it\nis image-based and local text extraction was blank.",
          "sourceIds": [
            "s-ellis-election-results",
            "s-ellis-2025-official-results",
            "s-hayspost-election-2025-story"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-facebook-page-presence",
          "platform": "Facebook",
          "observation": "Prior logged-out harvest found a Sandy Jacobs - Hays City Commission page with 257 visible likes, but no usable post feed, post dates, reactions, comments, shares, follows, or issue-bearing content.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-facebook-local-harvest"
          ],
          "mappedToIssueId": "i-civic-style-public-presence"
        },
        {
          "id": "ss-linkedin-preview",
          "platform": "LinkedIn",
          "observation": "Prior public preview showed a likely Sandy Jacobs profile in Hays with City of Hays experience and 246 followers/244 connections; full profile and activity were not accessible and liked content was not treated as campaign messaging.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-linkedin-local-harvest"
          ],
          "mappedToIssueId": "i-civic-style-public-presence"
        },
        {
          "id": "ss-goodparty-unclaimed",
          "platform": "GoodParty",
          "observation": "GoodParty marks the profile unclaimed and shows no candidate-filled occupation or top issues; platform pledge text should not be attributed to Jacobs.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-goodparty-jacobs"
          ],
          "mappedToIssueId": "i-civic-style-public-presence"
        }
      ]
    },
    {
      "id": "i-covid-era-public-health",
      "title": "COVID-era public health ordinance",
      "stated": {
        "text": "The COVID-era mask evidence should be kept narrow. Hays Post reported\nthat Jacobs voted yes on the October 2020 Hays mask-ordinance extension.\nThis supports a specific local ordinance vote, not a broader inference\nabout later health mandates, vaccines, state/federal policy, or private\nhealth beliefs.",
        "sourceIds": [
          "s-hayspost-mask-oct-2020"
        ]
      },
      "actions": [
        {
          "id": "a-mask-extension-yes-2020-10-02",
          "date": "2020-10-02",
          "body": "Hays Post reported the October 2020 mask-ordinance extension passed\n3-1, with Jacobs, Shaun Musil, and Michael Berges voting yes, Mason\nRuder voting no, and Lance Mellick absent.",
          "sourceIds": [
            "s-hayspost-mask-oct-2020"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "What was observed: Hays Post reported that the October 2020 special-meeting mask ordinance extension passed 3-1, with Jacobs, Shaun Musil, and Michael Berges voting yes and Mason Ruder voting no. Existing local notes say Jacobs voted with the majority to extend the ordinance. Keep this as a COVID-era local public-health ordinance vote, not a broad inference about later public-health views.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-local-harvest"
          ],
          "mappedToIssueId": "i-covid-era-public-health"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The 2020 mask extension should be narrowly framed. Hays Post reports Jacobs voted yes on an extension. Do not use this to infer broad views on vaccines, federal policy, later public-health mandates, or personal health beliefs.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-local-harvest"
          ],
          "mappedToIssueId": "i-covid-era-public-health"
        }
      ],
      "gap": {
        "summary": "Underlying 2020 city minutes were not pulled in this pass. The vote is\nsupported by Hays Post secondary coverage and should be upgraded if a\nprimary minute record is later attached.",
        "evidenceIds": [
          "a-mask-extension-yes-2020-10-02"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No clean online donor list, campaign-finance total, treasurer appointment, exemption affidavit, PAC support, independent expenditure record, or itemized contribution report for Sandy Jacobs was located in reviewed public sources.",
    "narrative": "No clean online donor list, campaign-finance total, treasurer appointment, exemption affidavit, PAC support, independent expenditure record, or itemized contribution report for Sandy Jacobs was located in reviewed public sources.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Campaign Finance"
  },
  "sources": [
    {
      "id": "s-ellis-election-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/435/Election-Results",
      "title": "Election Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County publishes official 2025 General Election results and prior city/school election results"
      ]
    },
    {
      "id": "s-ellis-2025-official-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5892/Official-Results-2025-General-Election",
      "title": "Official Results - 2025 General Election",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official 2025 general election results PDF is the primary source path for the Hays City Commission result",
        "Search/OCR snippet for the official scanned PDF lists Sandy Jacobs with 1,552 votes",
        "Local text extraction returned blank because the PDF is image-based"
      ]
    },
    {
      "id": "s-hays-minutes-01082026",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01082026-1589",
      "title": "Hays City Commission Minutes - January 8, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Roll call listed Sandy Jacobs present",
        "Jami Breit administered the oath of office to Shaun Musil, Sandy Jacobs, and David Vilaysing",
        "Jacobs voted aye to elect Mason Ruder mayor and Alaina Cunningham vice mayor",
        "Jacobs moved to approve the consent agenda adopting commission rules of procedure"
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
        "Packet includes September 11, 2025 minutes with Jacobs present as mayor",
        "Minutes say the city found a path to remain revenue neutral at 24.382 mills",
        "Minutes say maintaining revenue neutral would not affect operations or capital projects",
        "Jacobs voted aye on the 2026 city budget action",
        "Jacobs voted aye on nuisance-abatement resolutions"
      ]
    },
    {
      "id": "s-hays-minutes-02192026",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_02192026-1596",
      "title": "Hays City Commission Work Session Minutes - February 19, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Jacobs was present for the work session",
        "Work session discussed the Exit 157 24-7 Travel Plaza TIF, CID, and IRB request",
        "Travel-plaza investment was listed at $11.1 million",
        "CID sales tax was proposed at 2.00 percent",
        "Commissioners thanked the developer and were excited for the project"
      ]
    },
    {
      "id": "s-hays-minutes-03262026",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_03262026-1603",
      "title": "Hays City Commission Minutes - March 26, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Jacobs was present",
        "Jacobs voted aye on sanitary sewer cleaning and inspection not to exceed $150,000",
        "Jacobs moved centrifuge maintenance at $48,572.28",
        "Jacobs seconded adoption of the 2024 International Fire Code",
        "Jacobs moved adoption of the 2024 International Property Maintenance Code",
        "Jacobs seconded adoption of the 2023 National Electrical Code",
        "Jacobs seconded Resolution 2026-004 for Chick-fil-A IRB intent",
        "Chick-fil-A project requested a construction sales-tax exemption and no property-tax abatement"
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
        "Agenda included letters of support to waive development fees for eligible 2026 LIHTC projects",
        "The city letter for Pioneer Run cited a housing study identifying 189 low-income units needed by 2030",
        "The city committed to waive the lesser of $80,000 or 100 percent of combined impact, utility, and other fees if the project received LIHTC",
        "Agenda included Resolution 2026-005 evidencing intent to issue IRBs for Pioneer Run",
        "Included April 9 minutes list Sandy Jacobs absent from final Exit 157 24-7 TIF/CID votes"
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
        "Agenda included Resolution 2026-006 for Willow Grove IRBs",
        "Agenda included Resolution 2026-007 for Wheatland Commons IRBs",
        "Agenda included a $94,400 street reconstruction design contract for 22nd Street, General Hays Road, and Oak Street"
      ]
    },
    {
      "id": "s-hays-r9-ranch",
      "tier": "primary",
      "url": "https://www.haysusa.com/1007/R9-Ranch",
      "title": "R9 Ranch",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "City calls R9 Ranch a 6,900-acre property dedicated to sustainable water management, public recreation, and responsible stewardship",
        "City says the property was acquired to secure a long-term, sustainable water supply",
        "City links the R9 Water Project as a plan to secure water for generations"
      ]
    },
    {
      "id": "s-hayspost-qa-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
      "title": "Hays City Commission Candidate Q&A: Sandy Jacobs",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Jacobs listed occupation as retired banker",
        "Jacobs said she had served eight years and her passion continued to be for Hays as a native",
        "Jacobs named R9 as unfinished work she wanted to help finish",
        "Jacobs credited housing and incentive districts as impactful commission work",
        "Jacobs said Hays asked for less water than allowed by the state",
        "Jacobs said the first budget goal is to remain revenue neutral",
        "Jacobs named retail development as a priority after maintaining taxes",
        "Observed public online activity mapped to Water security and the R9 Ranch project.",
        "Observed public online activity mapped to City budget, taxes, and service tradeoffs.",
        "Observed public online activity mapped to Retail growth and economic development."
      ]
    },
    {
      "id": "s-hayspost-election-2025-story",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1f1932b8-516a-420d-841e-df378c20a8f2",
      "title": "2 incumbents, 1 newcomer elected to Hays City Commission",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Jacobs and Shaun Musil would receive four-year terms",
        "Hays Post reported David Vilaysing would receive the two-year term"
      ]
    },
    {
      "id": "s-hayspost-election-2025-issues",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
      "title": "Water, retail, housing top issues for newly elected Hays city commissioners",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Jacobs said retail was high on her list and workforce needed attention",
        "Observed public online activity mapped to Retail growth and economic development."
      ]
    },
    {
      "id": "s-hayspost-reorg-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
      "title": "New year, new governing body for city of Hays",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Jacobs was sworn in on January 8, 2026",
        "Jacobs highlighted R9, housing, economic growth, police facility commitment, parks, and airport",
        "Jacobs said leadership is about listening, bringing people together, and keeping the community at the center of decisions"
      ]
    },
    {
      "id": "s-tigermedia-reorg-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=93385",
      "title": "Hays City Commissioners sworn in, Ruder elected mayor",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Prior harvest recorded Jacobs saying titles may change but values do not",
        "Tiger Media quoted Jacobs on servant leadership, listening, bringing people together, and community-centered decisions"
      ]
    },
    {
      "id": "s-hayspost-travel-plaza",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6988fcbc-170e-42d1-9dbd-cb28e017baba",
      "title": "Plans moving forward for I-70 travel plaza north of Hays",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Jacobs called the 24/7 Travel Plaza an exciting project",
        "Jacobs said she was ready to see what the project did to the interchange with alternate routes into town"
      ]
    },
    {
      "id": "s-hayspost-chickfila-worksession",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fd894259-fd52-4ccb-92c6-945bd172e875",
      "title": "Hays City Commission talks economic development incentives for new Chick-fil-A",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Chick-fil-A project was reported at $6.2 million",
        "Estimated construction sales-tax exemption was $66,875",
        "Jacobs linked Vine Street roundabouts to development access for projects like Chick-fil-A"
      ]
    },
    {
      "id": "s-hayspost-budget-prep-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb",
      "title": "Planned travel plaza and 2027 draft budget",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Prior harvest recorded Jacobs asking where money would come from and what people would be willing to give up under budget constraints",
        "Observed public online activity mapped to Housing, affordability, and development incentives."
      ]
    },
    {
      "id": "s-tigermedia-pioneer-run",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=97002",
      "title": "City commission gives nod for assistance to affordable housing project",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Pioneer Run was described as 48 affordable housing units and a clubhouse",
        "IRB sales-tax exemption benefit was estimated at $147,962.50",
        "Jacobs said low-income housing is difficult to make feasible without LIHTC assistance",
        "The commission approved the resolution 5-0"
      ]
    },
    {
      "id": "s-hayspost-low-income-housing-05182026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a21b48bd-451a-42a9-865f-b95cc539b31f",
      "title": "Proposed low-income housing in Hays awaits potential state tax credits",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported commissioners unanimously agreed to two more IRB resolutions for construction sales-tax exemptions",
        "Willow Grove was described as 48 units with a $9.3 million construction cost and about $154,000 IRB value",
        "Wheatland Commons was described as 36 units with a $12.51 million construction cost and about $211,050 IRB value",
        "Jacobs said, 'Let's hope they get it'",
        "Commissioners approved a $94,400 street reconstruction design contract"
      ]
    },
    {
      "id": "s-hayspost-mask-oct-2020",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1a241ad5-d176-4494-9e9a-aa4a286f3bf4",
      "title": "Hays extends mask ordinance after October 2020 special meeting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The October 2020 mask ordinance extension passed 3-1",
        "Jacobs, Musil, and Berges voted yes; Ruder voted no; Mellick was absent"
      ]
    },
    {
      "id": "s-hayspost-2021-profile",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781",
      "title": "5 city commission candidates vying for 3 seats",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Jacobs was described as a retired banker and then-current mayor",
        "Jacobs discussed North Vine reconstruction, roundabouts, traffic flow, safety, business development, and population growth"
      ]
    },
    {
      "id": "s-goodparty-jacobs",
      "tier": "secondary",
      "url": "https://goodparty.org/candidate/sandy-jacobs/hays-city-commission",
      "title": "Sandy Jacobs for Hays City Commission",
      "publisher": "GoodParty.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile is marked unclaimed",
        "Profile lists Jacobs as nonpartisan and links a Facebook page and City of Hays profile",
        "Occupation and top issues are not filled out"
      ]
    },
    {
      "id": "s-facebook-local-harvest",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
      "title": "Sandy Jacobs - Hays City Commission",
      "publisher": "Facebook",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Prior logged-out local harvest found page metadata and 257 visible likes",
        "No reliable post-level feed, comments, reactions, shares, follows, or issue content were accessible"
      ]
    },
    {
      "id": "s-linkedin-local-harvest",
      "tier": "social",
      "url": "https://www.linkedin.com/in/sandy-jacobs-64a43613",
      "title": "Sandy Jacobs LinkedIn profile preview",
      "publisher": "LinkedIn",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Prior public preview showed Sandy Jacobs in Hays, Kansas with City of Hays experience",
        "Prior preview showed 246 followers and 244 connections",
        "Full profile and activity were not accessible"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2017/03/21/foundation-announces-results-of-twice-as-nice-fundraising-program/",
      "title": "Hays Post / Archive.Hayspost",
      "publisher": "Archive.Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to City budget, taxes, and service tradeoffs.",
        "Hays Post Archive: Foundation announces results of Twice as Nice fundraising program"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SANDY_JACOBS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[sandy-jacobs.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
