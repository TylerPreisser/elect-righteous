/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const DAVID_VILAYSING_V2: CandidateFullV2 = {
  "slug": "david-vilaysing",
  "name": "David Vilaysing",
  "party": "NP",
  "position": "Hays City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Owner of DXI Training Solutions; retired Hays Police Department sergeant",
  "hometown": "Hays, Kansas",
  "religion": "Not publicly verified",
  "issues": [
    {
      "id": "i-water-r9-long-term-supply",
      "title": "Water security and the R9 long-term supply",
      "stated": {
        "text": "Vilaysing's public water position is direct: in the 2025 candidate Q&A,\nhe named water and housing as the city's most pressing issues, called\nfor a secure source of water, and said R9 was a great start but not the\npermanent answer by itself. He also asked for clearer public visibility\ninto R9 progress. City records independently show R9 as an official\nlong-term water-security project for Hays.",
        "sourceIds": [
          "s-hayspost-qa",
          "s-hays-r9-ranch",
          "s-hays-r9-property"
        ]
      },
      "actions": [
        {
          "id": "a-r9-forum-game-plan-2025-10-08",
          "date": "2025-10-08",
          "body": "At the city commission forum, Vilaysing said that if elected he would\nmeet with all parties involved in R9, figure out the current status,\nand develop a game plan to push forward within four years. This is a\ncandidate commitment, not an official vote.",
          "sourceIds": [
            "s-hayspost-forum"
          ]
        },
        {
          "id": "a-washington-briefing-trip-2026-04-23",
          "date": "2026-04-23",
          "body": "April 23 minutes, embedded in the May 14 city packet, state that\nVilaysing joined Mayor Mason Ruder and city staff in Washington, DC,\nfor a Western Kansas Congressional Staff Briefing and Reception to\nupdate Kansas federal offices on Hays priorities. The minutes do not\nname R9 in that sentence, so this is recorded as city-priority\nadvocacy context rather than a Vilaysing-specific R9 vote.",
          "sourceIds": [
            "s-hays-agenda-05142026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-water-no-campaign-feed",
          "platform": "Public web / social search",
          "observation": "No verified campaign social feed was found for water/R9 messaging; the strongest evidence is candidate-attributed Q&A/forum material plus official city R9 pages.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa",
            "s-hayspost-forum"
          ],
          "mappedToIssueId": "i-water-r9-long-term-supply"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "Candidate Q&A, Oct. 25, 2025: He described water and housing as the most pressing city issues and said Hays needs a secure water source, transparency on R9 progress, and housing options for low- to medium-income residents. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa"
          ],
          "mappedToIssueId": "i-water-r9-long-term-supply"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Election-night quote, Nov. 6, 2025: He said he was \"a little surprised\" and \"very eager to get to work,\" and called water supply and affordable housing top issues. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-election-night"
          ],
          "mappedToIssueId": "i-water-r9-long-term-supply"
        }
      ],
      "gap": {
        "summary": "No Vilaysing-specific R9 roll-call vote was found after he took office.\nThe available record shows a strong stated position and city-priority\nadvocacy context, but not yet a completed R9 action unique to him.",
        "evidenceIds": [
          "a-r9-forum-game-plan-2025-10-08"
        ]
      }
    },
    {
      "id": "i-housing-workforce-development",
      "title": "Housing, workforce growth, and development incentives",
      "stated": {
        "text": "Vilaysing ties housing to working residents and future workforce\nretention. He has said low- and medium-income residents struggle to\nafford homes, supported looking at city land or discounted land for\nqualifying housing if available, suggested RHID conditions that would\nrequire qualifying homes, and proposed connecting the city, employers,\nHays High, and Fort Hays State through a workforce council.",
        "sourceIds": [
          "s-hayspost-qa",
          "s-hayspost-forum",
          "s-tigermedia-forum"
        ]
      },
      "actions": [
        {
          "id": "a-lihtc-fee-waiver-support-2026-04-23",
          "date": "2026-04-23",
          "body": "Voted aye on the April 23 consent agenda that included letters of\nsupport to waive development fees for eligible 2026 Low-Income Housing\nTax Credit projects.",
          "sourceIds": [
            "s-hays-agenda-05142026"
          ]
        },
        {
          "id": "a-pioneer-run-irb-intent-2026-04-23",
          "date": "2026-04-23",
          "body": "Voted aye on Resolution No. 2026-005, an intent to issue Industrial\nRevenue Bonds for Overland Property Group's Pioneer Run affordable\nmultifamily project. The packet says the IRB would enable a sales-tax\nexemption and provide LIHTC application points; no property-tax\nabatement was requested.",
          "sourceIds": [
            "s-hays-agenda-05142026"
          ]
        },
        {
          "id": "a-exit157-tif-cid-2026-04-09",
          "date": "2026-04-09",
          "body": "Voted aye on Ordinance No. 4097 adopting the Exit 157 24-7 TIF\nproject plan and development agreement, and on Ordinance No. 4098\ncreating the related CID with a 2.0 percent CID sales tax. During the\ndiscussion he asked whether the TIF had an incentive matrix like other\nincentives and asked for transparency to customers about the special\ntax districts.",
          "sourceIds": [
            "s-hays-agenda-04232026"
          ]
        },
        {
          "id": "a-willow-wheatland-irb-secondary-2026-05-14",
          "date": "2026-05-14",
          "body": "Tiger Media reported that the commission unanimously approved IRB\nintent resolutions for Willow Grove and Wheatland Commons, two\naffordable-housing projects seeking Low-Income Housing Tax Credits.\nBecause official May 14 minutes were not yet published in this pass,\nthis item is secondary-source action evidence.",
          "sourceIds": [
            "s-hays-agenda-05142026",
            "s-tigermedia-affordable-housing-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-goodparty-unclaimed-housing",
          "platform": "GoodParty.org",
          "observation": "GoodParty lists Vilaysing as a nonpartisan Hays City Commission candidate, but the page is explicitly unclaimed; do not treat pledge language as candidate-controlled housing or funding evidence.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-goodparty-unclaimed"
          ],
          "mappedToIssueId": "i-housing-workforce-development"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Tiger Media Network",
          "observation": "Candidate forum, Oct. 8, 2025: He proposed a Hays workforce development council connecting the city commission, local businesses, high school administrators, and FHSU administrators. Source: Tiger Media Network.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-tigermedia-forum"
          ],
          "mappedToIssueId": "i-housing-workforce-development"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Tiger Media Network",
          "observation": "The most consistent city-policy themes are water, housing, and cost discipline. Vilaysing calls the R9 water project important but not enough by itself, saying Hays needs both a secure near-term source and a permanent long-term answer. On housing, he talks about low- and middle-income residents, city land, developer partnerships, and practical ways to make qualifying homes possible. On taxes and budgets, he...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-tigermedia-budget-2025"
          ],
          "mappedToIssueId": "i-housing-workforce-development"
        }
      ]
    },
    {
      "id": "i-budget-taxes-operations",
      "title": "Budget, taxes, transparency, and city operations",
      "stated": {
        "text": "Vilaysing's budget language is cost-discipline and operations-oriented.\nBefore taking office he opposed a mill levy increase, asked the city to\nstay revenue neutral if possible, and said residents were heavily taxed\nand burdened. His governing comments continue the same pattern: talk to\nfrontline workers, find what the city does not need to do, maintain what\nthe city already owns, and review whether existing ordinances still make\noperational sense.",
        "sourceIds": [
          "s-hayspost-qa",
          "s-tigermedia-budget-2025",
          "s-hayspost-budget-prep",
          "s-hayspost-chickfila-worksession"
        ]
      },
      "actions": [
        {
          "id": "a-pet-tag-review-request-2026-02-12",
          "date": "2026-02-12",
          "body": "Asked for the Pet Tag Ordinance to be discussed at a future work\nsession. Hays Post reported that he connected the review to a small\nfee stream, existing owner tags/microchips, and time spent by the\ncity clerk, police, and dispatch.",
          "sourceIds": [
            "s-hays-agenda-02262026",
            "s-hayspost-pet-tags"
          ]
        },
        {
          "id": "a-frontline-budget-input-2026-04-06",
          "date": "2026-04-06",
          "body": "During 2027 budget preparation, challenged department heads to ask\nfrontline staff for budget input because those workers know what the\ncity is doing that it does not need to do.",
          "sourceIds": [
            "s-hayspost-budget-prep"
          ]
        },
        {
          "id": "a-audit-acceptance-second-2026-04-09",
          "date": "2026-04-09",
          "body": "Seconded the motion to accept the 2025 City of Hays audit as presented\nby Adams Brown and voted aye.",
          "sourceIds": [
            "s-hays-agenda-04232026"
          ]
        },
        {
          "id": "a-economic-policy-review-request-2026-04-09",
          "date": "2026-04-09",
          "body": "Stated during commission comments that he had reviewed the city's\neconomic development policy and that it says the policy needs to be\nreviewed every three years. The city manager said it could be placed\non a future work-session agenda.",
          "sourceIds": [
            "s-hays-agenda-04232026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-budget-no-national-platform",
          "platform": "Public web / social search",
          "observation": "No substantial candidate-controlled national partisan budget or tax platform was found; the visible record is local budget, fee, incentive, and operations discussion.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa",
            "s-tigermedia-budget-2025"
          ],
          "mappedToIssueId": "i-budget-taxes-operations"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "Candidate Q&A, Oct. 25, 2025: On taxes, he said he did not think a mill levy increase was needed and wanted creative budgeting to remain revenue neutral. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa"
          ],
          "mappedToIssueId": "i-budget-taxes-operations"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Tiger Media Network",
          "observation": "Public comment, Sept. 12, 2025: At a revenue-neutral budget hearing, he said residents were \"heavily taxed\" and \"burdened\" and asked the city to provide relief if possible. Source: Tiger Media Network.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-tigermedia-budget-2025"
          ],
          "mappedToIssueId": "i-budget-taxes-operations"
        }
      ]
    },
    {
      "id": "i-public-safety-deescalation-civic-conflict",
      "title": "Public safety, de-escalation, and civic conflict",
      "stated": {
        "text": "Vilaysing's public identity is rooted in law enforcement and training,\nbut his emphasis is de-escalation rather than a simple tough-on-crime\nframe. DXI describes responsible conflict management, de-escalation,\nself-awareness, and tactical communication. In campaign/forum settings,\nhe connected those skills to city leadership, saying commissioners need\nto lead by example and manage conflict when it arises.",
        "sourceIds": [
          "s-hayspost-qa",
          "s-tigermedia-forum",
          "s-dxi-home",
          "s-dxi-about",
          "s-ileeta-dxi"
        ]
      },
      "actions": [
        {
          "id": "a-hpd-service-record-2005-2020",
          "date": "2020-11-15",
          "body": "Hays Post's city service-award coverage says Vilaysing began with the\nHays Police Department in 2005, was promoted to corporal in 2014, and\nhad been promoted to police sergeant in 2020.",
          "sourceIds": [
            "s-hayspost-service-awards"
          ]
        },
        {
          "id": "a-deescalation-training-public-2026-02-04",
          "date": "2026-02-04",
          "body": "In Hays Post coverage of de-escalation training, Vilaysing said the\ntraining was meant to give first responders better tools and make law\nenforcement, civilians, and everyone safer. He also emphasized officer\nself-control and understanding oneself before understanding others.",
          "sourceIds": [
            "s-hayspost-deescalation"
          ]
        },
        {
          "id": "a-political-violence-forum-answer-2025-10-08",
          "date": "2025-10-08",
          "body": "At the city commission forum, when candidates discussed political\nviolence, Vilaysing said commissioners have to lead by example and\nmanage conflict when it arises or they have no business holding those\nseats.",
          "sourceIds": [
            "s-tigermedia-forum"
          ]
        },
        {
          "id": "a-bicycle-safety-public-education-2023-06-15",
          "date": "2023-06-15",
          "body": "As a Hays Police Department sergeant and bicycle officer, gave public\nbicycle-safety guidance on equipment, rules of the road, bike lanes,\nand accountability for bicyclists. This predates elected office but\nillustrates his public-safety communication style.",
          "sourceIds": [
            "s-hayspost-bicycle-safety"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-dxi-social-footprint",
          "platform": "DXI website / Facebook",
          "observation": "DXI links Facebook, Instagram, TikTok, and YouTube; public Facebook metadata identifies the page as DXI Training Solutions LLC in Hays with 125 likes and a veteran-owned conflict-management description. No reliable post-level engagement, follows, or comments were extracted.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-dxi-home",
            "s-dxi-facebook"
          ],
          "mappedToIssueId": "i-public-safety-deescalation-civic-conflict"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "Candidate Q&A, Oct. 25, 2025: He said he had 22 years of combined Hays Police Department and military police experience and missed \"giving back to my community.\" Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa"
          ],
          "mappedToIssueId": "i-public-safety-deescalation-civic-conflict"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Pet licensing, Feb. 14, 2026: He asked city staff to research changes to pet licensing because many pets already have owner tags or microchips, and said it could save city staff, police, and dispatch time. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-pet-tags"
          ],
          "mappedToIssueId": "i-public-safety-deescalation-civic-conflict"
        }
      ]
    },
    {
      "id": "i-library-materials-parental-oversight",
      "title": "Library materials and parental oversight",
      "stated": {
        "text": "The only sourced Vilaysing-specific library-materials signal in this\npass is a public Facebook post quoted by The Guidon before he took\noffice. The post reportedly said parents had raised concerns about books\nin the young-adult section, that he inspected the area, and that he\nfound graphic material he believed encouraged inappropriate behavior in\nchildren. This should be treated as a public social signal and a local\ngovernance concern, not as a complete library platform.",
        "sourceIds": [
          "s-guidon-library-facebook",
          "s-hayspost-library-meeting",
          "s-hays-library-board"
        ]
      },
      "actions": [
        {
          "id": "a-library-board-context-2025-10-15",
          "date": "2025-10-15",
          "body": "Hays Post reported a standing-room-only library board meeting after\nsocial-media criticism of a banned-books display. This is included for\ncontext around the public controversy; the article does not quote\nVilaysing.",
          "sourceIds": [
            "s-hayspost-library-meeting"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-a-facebook-library-board-call-2025-10-12",
          "platform": "The Guidon",
          "observation": "The Guidon reported that Vilaysing's accompanying Facebook video\nencouraged residents to attend the October 15, 2025 Hays Public\nLibrary Board meeting. The original Facebook post URL was not\nindependently verified in this pass.",
          "observedAt": "2025-10-12",
          "sourceIds": [
            "s-guidon-library-facebook"
          ],
          "mappedToIssueId": "i-library-materials-parental-oversight"
        },
        {
          "id": "ss-guidon-facebook-library-post",
          "platform": "Facebook post quoted by The Guidon",
          "observation": "The Guidon quoted a public Oct. 12, 2025 Facebook post by Vilaysing about young-adult library books and reported that his video encouraged attendance at the Oct. 15 library board meeting. The original Facebook URL was not verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-guidon-library-facebook"
          ],
          "mappedToIssueId": "i-library-materials-parental-oversight"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Facebook",
          "observation": "Public Facebook post captured by third party: The Guidon quoted a public Oct. 12, 2025 Facebook post by Vilaysing about Hays Public Library books and an accompanying video urging attendance at the library board meeting.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-dxi-home"
          ],
          "mappedToIssueId": "i-library-materials-parental-oversight"
        }
      ],
      "gap": {
        "summary": "No city commission action, campaign platform page, or original public\nFacebook URL was verified for this issue. Do not infer a broad view on\ncensorship, LGBTQ policy, public libraries, or faith from this single\nquoted social post.",
        "evidenceIds": [
          "a-library-board-context-2025-10-15"
        ]
      }
    }
  ],
  "whereTheyWorship": "No current church affiliation or explicit public faith statement was verified in reviewed sources.",
  "campaignFinance": {
    "totalRaised": "Same as donorFunding: no online donor/funding detail was verified.",
    "narrative": "Same as donorFunding: no online donor/funding detail was verified.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Campaign Finance"
  },
  "sources": [
    {
      "id": "s-hays-r9-ranch",
      "tier": "primary",
      "url": "https://www.haysusa.com/1007/R9-Ranch",
      "title": "R9 Ranch",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The City of Hays describes R9 Ranch as an official water-security asset",
        "The page frames R9 as long-term sustainable water supply infrastructure"
      ]
    },
    {
      "id": "s-hays-r9-property",
      "tier": "primary",
      "url": "https://www.haysusa.com/879/R9-Property",
      "title": "R9 Property",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The R9 property page describes pipeline/easement planning",
        "The page states R9 has 8,000 acre-feet of water rights and potential for 4,800 acre-feet annually"
      ]
    },
    {
      "id": "s-hays-agenda-02262026",
      "tier": "primary",
      "url": "https://haysusa.com/AgendaCenter/ViewFile/Agenda/_02262026-1597",
      "title": "Hays City Commission Agenda Packet - February 26, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The packet includes February 12 minutes noting Vilaysing's request to discuss the Pet Tag Ordinance"
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
        "The packet includes April 9 minutes showing Vilaysing seconded acceptance of the 2025 audit",
        "Vilaysing asked whether the Exit 157 TIF had a matrix like other incentives",
        "Vilaysing asked for transparency to customers about special tax districts",
        "Vilaysing requested review of the city economic development policy"
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
        "The packet includes April 23 minutes showing Vilaysing voted aye on LIHTC fee-waiver support letters",
        "The packet includes April 23 minutes showing Vilaysing voted aye on Pioneer Run IRB intent",
        "The packet includes April 23 minutes stating Vilaysing joined a Washington, DC briefing trip with city officials",
        "The May 14 agenda placed Willow Grove and Wheatland Commons IRB intent resolutions before the commission"
      ]
    },
    {
      "id": "s-hays-library-board",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Public Library Board",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The Hays Public Library Board is appointed and the mayor is ex officio",
        "The page says library policy includes the ALA Freedom to Read Policy, Library Bill of Rights, and confidentiality of borrower records"
      ]
    },
    {
      "id": "s-hayspost-qa",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hays City Commission Candidate Q&A: David Vilaysing",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vilaysing named water and housing as top city issues",
        "Vilaysing opposed a mill levy increase and favored revenue-neutral budgeting",
        "Vilaysing said city leaders should talk to frontline employees",
        "Vilaysing described his law-enforcement and military-police experience",
        "Observed public online activity mapped to Water security and the R9 long-term supply.",
        "Observed public online activity mapped to Budget, taxes, transparency, and city operations.",
        "Observed public online activity mapped to Public safety, de-escalation, and civic conflict."
      ]
    },
    {
      "id": "s-hayspost-forum",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1afb725b-f6c4-4d09-93de-94b9008ba5ae",
      "title": "City commission candidates talk housing, budget, R9 water project",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vilaysing said he would meet R9 parties and push a game plan forward",
        "Vilaysing wanted more out of existing city resources",
        "Vilaysing suggested RHID stipulations for low- and medium-income housing",
        "Vilaysing said commissioners should do the job without payment"
      ]
    },
    {
      "id": "s-tigermedia-forum",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=90544",
      "title": "City Commission candidates debate at forum",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vilaysing said commissioners should lead by example and manage conflict when political violence is discussed",
        "Vilaysing proposed a Hays Workforce Development Council",
        "Observed public online activity mapped to Housing, workforce growth, and development incentives."
      ]
    },
    {
      "id": "s-tigermedia-budget-2025",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=89367",
      "title": "City Commission approves revenue neutral budget",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vilaysing told commissioners residents were heavily taxed and burdened during the revenue-neutral-rate hearing",
        "Observed public online activity mapped to Housing, workforce growth, and development incentives.",
        "Observed public online activity mapped to Budget, taxes, transparency, and city operations."
      ]
    },
    {
      "id": "s-hayspost-election-night",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
      "title": "Water, retail, housing top issues for newly elected Hays city commissioners",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Election-night coverage reported unofficial Vilaysing vote count of 1,340",
        "Vilaysing said he was eager to get to work and named water and affordable housing as top issues",
        "Observed public online activity mapped to Water security and the R9 long-term supply."
      ]
    },
    {
      "id": "s-hayspost-pet-tags",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/603fb2e8-f14d-4075-a541-c9522b43ef76",
      "title": "Hays city commissioners approve almost $1M in 2026 street improvements",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vilaysing asked city staff to research pet licensing changes",
        "He connected the issue to owner tags, microchips, and city staff/police/dispatch time",
        "Observed public online activity mapped to Public safety, de-escalation, and civic conflict."
      ]
    },
    {
      "id": "s-hayspost-budget-prep",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb",
      "title": "Hays City Commission hears more on planned travel plaza, 2027 draft budget",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vilaysing challenged department heads to ask frontline staff what the city does not need to do"
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
        "Vilaysing challenged department heads to maintain existing assets and make them last longer for financial responsibility"
      ]
    },
    {
      "id": "s-tigermedia-affordable-housing-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=97394",
      "title": "City commission eyes assistance for affordable housing projects",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Tiger Media reported unanimous approval of Willow Grove and Wheatland Commons IRB intent resolutions",
        "Willow Grove was described as 48 affordable units",
        "Wheatland Commons was described as a 36-unit affordable complex"
      ]
    },
    {
      "id": "s-hayspost-deescalation",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Officer on de-escalation training: We just want to make everyone safer",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vilaysing said de-escalation training is meant to make law enforcement, civilians, and everyone safer",
        "Vilaysing said officer self-control is the most important factor in de-escalation"
      ]
    },
    {
      "id": "s-hayspost-service-awards",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/40e17885-6833-42a5-9562-0abd9f173b21",
      "title": "Longtime city employees honored by city commission",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The 2020 city service-award article says Vilaysing began with HPD in 2005 and was promoted to police sergeant in 2020"
      ]
    },
    {
      "id": "s-hayspost-bicycle-safety",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b0e6ef58-d106-4a7d-b110-9d8fb7ab3af2",
      "title": "Hays PD: Bicyclists must follow rules of road",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "As a Hays Police Department sergeant and bicycle officer, Vilaysing gave public bicycle-safety guidance"
      ]
    },
    {
      "id": "s-hayspost-library-meeting",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/40bf9fa4-1286-48e0-9681-271ec72cc112",
      "title": "Hays residents support, denounce Banned Book Week display during library meeting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The library board meeting followed social-media criticism of a banned-books display",
        "The article provides context for the public controversy but does not quote Vilaysing"
      ]
    },
    {
      "id": "s-dxi-home",
      "tier": "social",
      "url": "https://dxitrainingsolutions.com/",
      "title": "DXI Training Solutions",
      "publisher": "DXI Training Solutions",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "DXI says it provides responsible conflict management skills and tools",
        "DXI lists training for law enforcement, businesses, individuals, and health/wellness",
        "DXI links Facebook, Instagram, TikTok, and YouTube accounts"
      ]
    },
    {
      "id": "s-dxi-about",
      "tier": "social",
      "url": "https://dxitrainingsolutions.com/about-us/",
      "title": "About DXI Training Solutions",
      "publisher": "DXI Training Solutions",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "DXI states the vision to leave the world better than we found it",
        "DXI states the mission to provide responsible conflict management skills",
        "DXI describes Sgt. David Vilaysing's USAR military police and law-enforcement background"
      ]
    },
    {
      "id": "s-ileeta-dxi",
      "tier": "secondary",
      "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
      "title": "DXI Training Solutions LLC",
      "publisher": "ILEETA",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "ILEETA says DXI was founded by Sgt. David Vilaysing",
        "ILEETA describes DXI training in de-escalation, tactical communication, and emotional control"
      ]
    },
    {
      "id": "s-goodparty-unclaimed",
      "tier": "secondary",
      "url": "https://goodparty.org/candidate/david-vilaysing/hays-city-commission",
      "title": "David Vilaysing for Hays City Commission",
      "publisher": "GoodParty.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "GoodParty lists David Vilaysing as a nonpartisan Hays City Commission candidate",
        "The profile is explicitly marked unclaimed"
      ]
    },
    {
      "id": "s-dxi-facebook",
      "tier": "social",
      "url": "https://www.facebook.com/people/DXI-Training-Solutions-LLC/61553945955697/",
      "title": "DXI Training Solutions LLC Facebook page",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Public metadata identifies DXI Training Solutions LLC in Hays",
        "Public metadata showed 125 likes and a veteran-owned conflict-management description"
      ]
    },
    {
      "id": "s-guidon-library-facebook",
      "tier": "social",
      "url": "https://hayshighguidon.com/wp-content/uploads/2025/11/Guidon_11-25_CombinedReduced.pdf",
      "title": "The Guidon - November 2025",
      "publisher": "The Guidon",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The Guidon quoted an Oct. 12, 2025 public Facebook post by David Vilaysing about young-adult library books",
        "The Guidon reported that Vilaysing's accompanying video encouraged residents to attend the Oct. 15 library board meeting",
        "The original Facebook post URL was not independently verified in this pass"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(DAVID_VILAYSING_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[david-vilaysing.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
