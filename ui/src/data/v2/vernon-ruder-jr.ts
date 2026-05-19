/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const VERNON_RUDER_JR_V2: CandidateFullV2 = {
  "slug": "vernon-ruder-jr",
  "name": "Vernon Ruder Jr.",
  "party": "R",
  "position": "Ellis County Treasurer",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "County Treasurer",
  "religion": "Roman Catholic (strong indicators)",
  "family": "Vernon Ruder Sr. -- Patriarch (deceased). Obituary confirms the family lineage",
  "issues": [
    {
      "id": "treasurer-office-duties",
      "title": "Treasurer Office Duties and Service Scope",
      "stated": {
        "text": "The official office record defines Ruder's role as administrative and finance-facing: tax billing, collection, distribution, county monies, and Kansas Department of Revenue motor-vehicle agency work. KCTA lists him as taking office in 2021 and describes payment and service options including online tax payments, escrow/partial payments, ACH/wire payment, notary services, and a 24-hour drop box.",
        "sourceIds": [
          "s-ellis-treasury",
          "s-ellis-staff-directory",
          "s-kcta-ellis"
        ]
      },
      "actions": [
        {
          "id": "action-current-treasurer",
          "date": "2026-05-19",
          "body": "Ellis County official pages list Vernon Ruder Jr. as county treasurer.",
          "sourceIds": [
            "s-ellis-treasury",
            "s-ellis-staff-directory"
          ]
        },
        {
          "id": "action-kcta-service-list",
          "date": "2026-05-19",
          "body": "KCTA lists Ruder as taking office in 2021 and lists current Ellis County treasurer services.",
          "sourceIds": [
            "s-kcta-ellis"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Public date range found: July 31, 2020 Hays Post candidate profile through Oct. 13, 2025 re-election oath coverage, plus current official county/treasurer directory pages visible in May 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-treasury"
          ],
          "mappedToIssueId": "treasurer-office-duties"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Harvest focus: candidate-controlled or candidate-attributed public messaging, official county treasurer pages, election results, public meeting/civic event coverage, local news quotes, professional/civic pages, and visible platform absences. Existing candidate data reportedly has a bad campaignWebsite value, so no campaign website was used unless independently verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-treasury"
          ],
          "mappedToIssueId": "treasurer-office-duties"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "The most visible public reach is institutional/local-news reach: Hays Post candidate coverage, Hays Post office-policy coverage, Ellis County official pages, KCTA directory listing, and civic-event reporting.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-treasury"
          ],
          "mappedToIssueId": "treasurer-office-duties"
        }
      ],
      "gap": {
        "summary": "No current campaign platform was found; the official role record is stronger than campaign-position material.",
        "evidenceIds": [
          "action-current-treasurer"
        ]
      }
    },
    {
      "id": "motor-vehicle-fee-user-funded-office",
      "title": "Motor-Vehicle Facility Fee and User-Funded Office Costs",
      "stated": {
        "text": "Ruder's clearest office-policy record is the $2.50 walk-in motor-vehicle transaction fee. He defended it as a state-authorized facility fee and said motor-vehicle work should be funded with motor-vehicle money rather than leaning more on property taxpayers.",
        "sourceIds": [
          "s-hayspost-mv-fee-2023"
        ]
      },
      "actions": [
        {
          "id": "action-250-mv-fee",
          "date": "2023-11-20",
          "body": "Hays Post reported Ruder implemented a $2.50 fee for walk-in customers for each title registration renewal transaction.",
          "sourceIds": [
            "s-hayspost-mv-fee-2023"
          ]
        },
        {
          "id": "action-fee-property-tax-framing",
          "date": "2023-11-20",
          "body": "Ruder said the state allows facility fees to help fund motor-vehicle operations and that motor-vehicle work should be funded with motor-vehicle money.",
          "sourceIds": [
            "s-hayspost-mv-fee-2023"
          ]
        },
        {
          "id": "action-fee-budget-claim",
          "date": "2023-11-20",
          "body": "Hays Post reported Ruder estimated the fee would probably generate more than $50,000 and said he reduced the treasury budget from $452,000 in 2022 to $367,000 in 2023.",
          "sourceIds": [
            "s-hayspost-mv-fee-2023"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2020 candidate profile: Ruder said he ran after noticing turnover and spending issues in the treasurer's office and said he could decrease spending and increase efficiencies. Source: Hays Post, July 31, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-profile-2020"
          ],
          "mappedToIssueId": "motor-vehicle-fee-user-funded-office"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2020 efficiency ideas: Ruder proposed a kiosk for after-hours tag and tax payments and an app to tell visitors office wait times. Source: Hays Post, July 31, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-profile-2020"
          ],
          "mappedToIssueId": "motor-vehicle-fee-user-funded-office"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2020 professionalism pitch: Ruder said he solves problems, does not create conflict, and wanted professionalism in the office. Source: Hays Post, July 31, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-profile-2020"
          ],
          "mappedToIssueId": "motor-vehicle-fee-user-funded-office"
        }
      ],
      "gap": {
        "summary": "The fee and Ruder's statements are well sourced to local reporting; the claimed budget reduction still needs primary county budget/minutes corroboration.",
        "evidenceIds": [
          "action-250-mv-fee"
        ]
      }
    },
    {
      "id": "customer-flow-access-modernization",
      "title": "Customer Flow and Office Access",
      "stated": {
        "text": "Ruder campaigned in 2020 on practical office-access changes, including a kiosk for after-hours tag/tax payments and an app showing wait times. The current official Treasury page now describes QLess access by SMS, mobile app, home kiosk, and office kiosk. The safe connection is that his campaign concern is now reflected in current office service design; direct implementation authorship should not be overstated without a county implementation record.",
        "sourceIds": [
          "s-hayspost-profile-2020",
          "s-ellis-treasury"
        ]
      },
      "actions": [
        {
          "id": "action-2020-kiosk-waittime-pitch",
          "date": "2020-07-31",
          "body": "Ruder proposed a kiosk for after-hours tags/taxes and an app showing office wait times.",
          "sourceIds": [
            "s-hayspost-profile-2020"
          ]
        },
        {
          "id": "action-current-qless",
          "date": "2026-05-19",
          "body": "Ellis County Treasury page describes QLess options by text, app, home kiosk link, and office kiosk.",
          "sourceIds": [
            "s-ellis-treasury"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2023 motor-vehicle fee: Ruder said Kansas allows county treasurers to help fund motor-vehicle operations with a facility fee, and that the state no longer buys the office's computers or printers. Source: Hays Post, Nov. 20, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-mv-fee-2023"
          ],
          "mappedToIssueId": "customer-flow-access-modernization"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2024 TMP voter event: Ruder told students voting could make a difference in the county and city by putting people in office who can do a good job for them. Source: Hays Post, Feb. 22, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-tmp-voter-event-2024"
          ],
          "mappedToIssueId": "customer-flow-access-modernization"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "This harvest reflects accessible public, candidate-controlled, official-office, or candidate-attributed messaging found through May 11, 2026. It is not a complete archive of private social media, deleted posts, login-only activity, every county meeting statement, or every local-news mention.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-treasury"
          ],
          "mappedToIssueId": "customer-flow-access-modernization"
        }
      ],
      "gap": {
        "summary": "Do not claim Ruder personally created QLess unless a direct implementation source is found.",
        "evidenceIds": [
          "action-2020-kiosk-waittime-pitch"
        ]
      }
    },
    {
      "id": "transparency-budget-investment-reporting",
      "title": "Transparency, Budget Presentation, and Investment Reporting",
      "stated": {
        "text": "Ruder's 2020 profile emphasized monthly financial reporting and clarity about county investments. Primary county records later show him presenting the Treasury budget and discussing salary allocation, contractual fees, investment interest, and an escrow issue during the July 18, 2024 budget process. The 2025 budget book formally lists him as responsible party for the treasurer department.",
        "sourceIds": [
          "s-hayspost-profile-2020",
          "s-ellis-minutes-2024-07-18",
          "s-ellis-2025-budget-book"
        ]
      },
      "actions": [
        {
          "id": "action-monthly-financial-reporting-pitch",
          "date": "2020-07-31",
          "body": "Ruder said he would present monthly financial reports explaining where county money was and how it was invested.",
          "sourceIds": [
            "s-hayspost-profile-2020"
          ]
        },
        {
          "id": "action-presented-2024-treasury-budget",
          "date": "2024-07-18",
          "body": "Ellis County minutes state Treasurer Vern Ruder presented the Treasury budget and discussed salary allocation, contractual fees, interest, and an escrow issue.",
          "sourceIds": [
            "s-ellis-minutes-2024-07-18"
          ]
        },
        {
          "id": "action-2025-budget-responsible-party",
          "date": "2024-09-10",
          "body": "The 2025 budget book lists Dept. 24 - Treasurer with Vernon Ruder Jr. as responsible party and shows proposed revenue and salary lines.",
          "sourceIds": [
            "s-ellis-2025-budget-book"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2020 landfill/management pitch: Ruder said he ran the landfill like his own money and said he knew he could decrease spending by thousands in the treasurer department. Source: Hays Post, July 31, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-profile-2020"
          ],
          "mappedToIssueId": "transparency-budget-investment-reporting"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2020 signed letter: Ruder said he was running to ensure sound investments of taxpayer money, decrease spending, restore trust and professionalism, increase efficiency, work full time, and improve accuracy/ease of transactions without increased taxpayer cost. Source: Hays Post, Oct. 13, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-ruder-letter-2020"
          ],
          "mappedToIssueId": "transparency-budget-investment-reporting"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2023 tax-burden framing: Ruder said motor-vehicle operations should be funded with motor-vehicle money and estimated the added fee would generate more than $50,000 while helping reduce the treasury budget from $452,000 in 2022 to $367,000 in 2023. Source: Hays Post, Nov. 20, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-mv-fee-2023"
          ],
          "mappedToIssueId": "transparency-budget-investment-reporting"
        }
      ],
      "gap": {
        "summary": "The record confirms budget presentation and department responsibility, but this pass did not verify whether promised monthly reports are consistently delivered as a separate recurring publication.",
        "evidenceIds": [
          "action-monthly-financial-reporting-pitch"
        ]
      }
    },
    {
      "id": "election-record-officeholder-timeline",
      "title": "Election Record and Officeholder Timeline",
      "stated": {
        "text": "Ruder first won the treasurer office in the 2020 cycle and KCTA lists him as taking office in 2021. Hays Post reported the 2020 general result as Ruder over Democrat Julie Mercer and write-ins. In 2024, Hays Post listed incumbent Ruder with 11,278 votes and no opponent listed, and later reported that he was sworn in for his next term.",
        "sourceIds": [
          "s-kcta-ellis",
          "s-ellis-election-results-index",
          "s-hayspost-2020-results",
          "s-hayspost-2024-results",
          "s-hayspost-oath-2025"
        ]
      },
      "actions": [
        {
          "id": "action-2020-general-win",
          "date": "2020-11-04",
          "body": "Hays Post preliminary 2020 results listed Vernon Ruder Jr. at 8,517 votes, Julie Mercer at 2,871, and write-ins at 1,528.",
          "sourceIds": [
            "s-hayspost-2020-results",
            "s-ellis-election-results-index"
          ]
        },
        {
          "id": "action-2021-took-office",
          "date": "2021",
          "body": "KCTA lists Ruder's took-office year as 2021.",
          "sourceIds": [
            "s-kcta-ellis"
          ]
        },
        {
          "id": "action-2024-reelection",
          "date": "2024-11-06",
          "body": "Hays Post 2024 all-precinct results listed incumbent Ruder with 11,278 votes and did not list a treasurer opponent.",
          "sourceIds": [
            "s-hayspost-2024-results",
            "s-ellis-election-results-index"
          ]
        },
        {
          "id": "action-2025-oath",
          "date": "2025-10-13",
          "body": "Hays Post reported Clerk Bobbi Dreiling administered the oath of office to re-elected County Treasurer Vern Ruder.",
          "sourceIds": [
            "s-hayspost-oath-2025"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Official Ellis County result PDFs were linked but not cleanly text-extractable in this pass. Use manual PDF visual/OCR review before rendering exact official vote totals as primary-source data.",
        "evidenceIds": [
          "action-2020-general-win"
        ]
      }
    },
    {
      "id": "civic-education-local-involvement",
      "title": "Civic Education and Local Involvement",
      "stated": {
        "text": "Ruder's non-office public statements located in this pass were civic-education comments to students. He encouraged voting as a way to choose competent local officials and recommended early involvement in community and local politics.",
        "sourceIds": [
          "s-hayspost-tmp-voter-event-2024",
          "s-hayspost-hms-voter-event-2024"
        ]
      },
      "actions": [
        {
          "id": "action-tmp-voter-event",
          "date": "2024-02-22",
          "body": "Ruder told TMP-Marian students voting can make a difference in county and city government by putting good officials in office.",
          "sourceIds": [
            "s-hayspost-tmp-voter-event-2024"
          ]
        },
        {
          "id": "action-hms-voter-event",
          "date": "2024-09-30",
          "body": "Ruder recommended Hays Middle School students get involved in community and local politics early.",
          "sourceIds": [
            "s-hayspost-hms-voter-event-2024"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "These statements are useful for voice/temperament but should not be stretched into policy claims.",
        "evidenceIds": [
          "action-tmp-voter-event"
        ]
      }
    },
    {
      "id": "family-network-context-campaign-conflict",
      "title": "Family-Network Context and 2020 Campaign Conflict",
      "stated": {
        "text": "The public record ties Vernon Ruder to a family network of local officeholders: Hays Post identifies him as Mason Ruder's father and Ruth Ruder as Mason's mother. The 2020 campaign profile also records opponent criticism around Mason's county employment and city commission role; Ruder and Public Works Director Bill Ring disputed nepotism claims and described father and son as equal-level division heads under a policy preventing family supervision.",
        "sourceIds": [
          "s-hayspost-profile-2020",
          "s-hayspost-hms-voter-event-2024"
        ]
      },
      "actions": [
        {
          "id": "action-2020-nepotism-claim-context",
          "date": "2020-07-31",
          "body": "Hays Post reported Lisa Schlegel attacked Ruder over Mason Ruder's county employment and city commission role; Ruder denied nepotism and Ring said policy prevented family members from supervising one another.",
          "sourceIds": [
            "s-hayspost-profile-2020"
          ]
        },
        {
          "id": "action-2024-family-office-context",
          "date": "2024-09-30",
          "body": "Hays Post identified Vernon as Mason Ruder's father and Ruth Ruder as Mason's mother during voter-education coverage involving multiple local officials.",
          "sourceIds": [
            "s-hayspost-hms-voter-event-2024"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No public record found in this pass showing improper coordination among Vernon, Ruth, and Mason Ruder. Treat the family network as context unless additional evidence emerges.",
        "evidenceIds": [
          "action-2020-nepotism-claim-context"
        ]
      }
    }
  ],
  "ownWordsNarrative": "candidateControlled: found: Ellis County Treasury official profile/contact page; Ellis County staff directory; Kansas County Treasurers Association directory; 2020 candidate-authored Hays Post letter; presenceClues: Ruder's 2020 Hays Post letter referenced a Facebook page and campaign Gmail address, but no usable public Facebook post corpus was verified.; notConfirmed: Current campaign website; Current campaign Facebook page with public posts; Personal Facebook civic/political post archive; LinkedIn profile/activity; X/Twitter account; Instagram account; Threads, Bluesky, TikTok, YouTube, Substack, Reddit, or podcast feed; Public follows, likes, comments, shares, reposts, or follower counts; observedSignals: id: online-low-campaign-footprint; platform: Searchable public web; type: absence_signal; mappedToIssueId: treasurer-office-duties; summary: The accessible public record is office-directory and local-news heavy, with no verified active campaign-social operation.; sourceIds: s-ellis-treasury; s-kcta-ellis; s-hayspost-profile-2020; caveat: Social absence is not evidence of support, belief, or private activity. No social follows/likes/comments were verified or interpreted.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Vernon Ruder Jr. The public record does point to a Catholic family and school background in Hays, but no current parish participation is clearly documented under his own name.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "No current Ruder campaign website, donation page, campaign-finance report, or donor list was located online in this pass.",
    "donors": [],
    "undisclosed": "Do not infer donor influence or campaign funding patterns until county-file campaign-finance records are obtained.",
    "reportingPeriod": "2020 and 2024 county treasurer cycles searched at high level; no online donor ledger captured",
    "source": "Campaign Finance"
  },
  "sources": [
    {
      "id": "s-ellis-treasury",
      "tier": "primary",
      "url": "https://www.ellisco.net/566/Treasury",
      "title": "Treasury",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The treasurer office handles tax billing, collection, and distribution for state, county, city, and other taxing entities",
        "The office acts as agent for Kansas Department of Revenue motor-vehicle titling and registration transactions",
        "The page describes QLess queue access by SMS, app, home kiosk link, and office kiosk",
        "The page lists Vernon Ruder Jr. as treasurer"
      ]
    },
    {
      "id": "s-ellis-staff-directory",
      "tier": "primary",
      "url": "https://www.ellisco.net/directory.aspx?EID=129",
      "title": "Staff Directory - Vernon Ruder, Jr.",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vernon Ruder Jr. is listed with title Treasurer",
        "Office contact details and hours are listed"
      ]
    },
    {
      "id": "s-kcta-ellis",
      "tier": "primary",
      "url": "https://kansastreasurers.org/index.php/directory/ellis-county/",
      "title": "Ellis County",
      "publisher": "Kansas County Treasurers Association",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KCTA lists Vernon Ruder Jr. for Ellis County",
        "KCTA lists took office as 2021",
        "KCTA lists services including online tax payments, escrow/partial payments, ACH/wire payments, notary services, and a 24-hour drop box"
      ]
    },
    {
      "id": "s-ellis-election-results-index",
      "tier": "primary",
      "url": "https://www.ellisco.net/435/Election-Results",
      "title": "Election Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official county page links 2024 General Election Official Results",
        "Official county page links 2020 General Election Official Results and 2020 Primary Election Official Results"
      ]
    },
    {
      "id": "s-ellis-2025-budget-book",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5645/2025-Budget-Book",
      "title": "Ellis County 2025 Budget Book",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The 2025 budget was adopted September 10, 2024",
        "Dept. 24 - Treasurer lists responsible party Vernon Ruder Jr., County Treasurer",
        "2025 proposed treasurer department lines include interest on investments and salary lines"
      ]
    },
    {
      "id": "s-ellis-minutes-2024-07-18",
      "tier": "primary",
      "url": "https://ellisco.net/AgendaCenter/ViewFile/Minutes/_07182024-611",
      "title": "Ellis County Commission Minutes - July 18, 2024",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Treasurer Vern Ruder presented the Treasury budget",
        "Minutes record discussion of salary allocation, contractual fees, interest, and an unbalanced escrow account",
        "Ruder said about $20 million was tied up for interest"
      ]
    },
    {
      "id": "s-hayspost-profile-2020",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Candidate Profile Ellis County Treasurer: Vernon Ruder Jr.",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ruder said he could decrease spending and increase efficiencies",
        "Ruder proposed kiosk and wait-time app access",
        "Ruder said he would present monthly financial reports showing where money was invested",
        "Hays Post reported 2020 campaign conflict over Mason Ruder's county employment and city commission role",
        "Observed public online activity mapped to Motor-Vehicle Facility Fee and User-Funded Office Costs.",
        "Observed public online activity mapped to Transparency, Budget Presentation, and Investment Reporting."
      ]
    },
    {
      "id": "s-hayspost-ruder-letter-2020",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3a069c69-9317-434a-8454-26da7a61d342",
      "title": "LETTER: Ruder discusses run for treasurer's office",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ruder described himself as bringing 30-plus years of private-sector knowledge",
        "Ruder described Hays roots, TMP and NCK-Tech education, financial-advisor work, Pepsi sales, and E.A. Sween management work",
        "Observed public online activity mapped to Transparency, Budget Presentation, and Investment Reporting."
      ]
    },
    {
      "id": "s-hayspost-mv-fee-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
      "title": "Ellis County motor vehicle fees reduce treasurer's budget, balance tax burden",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ruder implemented a $2.50 fee for walk-in title registration renewal transactions",
        "Ruder framed the facility fee as state-authorized funding for motor-vehicle operations",
        "Ruder said motor-vehicle operations should be funded with motor-vehicle money",
        "Ruder estimated the added fee would probably generate more than $50,000",
        "Hays Post reported Ruder said he reduced the treasury budget from $452,000 in 2022 to $367,000 in 2023",
        "Observed public online activity mapped to Customer Flow and Office Access.",
        "Observed public online activity mapped to Transparency, Budget Presentation, and Investment Reporting."
      ]
    },
    {
      "id": "s-hayspost-2020-results",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fd0105da-9c9e-469c-a595-d2221ee9b2fb",
      "title": "Ellis County 2020 preliminary election results",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Preliminary 2020 treasurer results listed Vernon Ruder Jr. with 8,517, Julie Mercer with 2,871, and write-ins with 1,528"
      ]
    },
    {
      "id": "s-hayspost-2024-results",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "2024 General Election Ellis County results, all precincts reporting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Preliminary 2024 all-precinct results listed incumbent Vernon Ruder Jr. with 11,278 votes",
        "The article did not list an opponent for Ellis County Treasurer"
      ]
    },
    {
      "id": "s-hayspost-oath-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/769b9cc3-43f2-4772-9389-e5a962d9a36a",
      "title": "Ellis County Commission approves bridge replacement agreement",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County Clerk Bobbi Dreiling administered the oath of office to re-elected County Treasurer Vern Ruder",
        "Hays Post said Ruder was re-elected in November 2024"
      ]
    },
    {
      "id": "s-hayspost-tmp-voter-event-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2cb7cdcf-1199-4696-8356-6849a960b247",
      "title": "TMP junior high students hear from elected officials on importance of voting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ruder participated in a TMP-Marian junior high voter education event",
        "Ruder told students voting can make a difference in county and city government by putting good officials in office",
        "Observed public online activity mapped to Customer Flow and Office Access."
      ]
    },
    {
      "id": "s-hayspost-hms-voter-event-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fd6be90b-bcb4-49d7-bf9a-20194a876c3c",
      "title": "Leaders talk importance of voting, community service with Hays Middle School students",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ruder participated in a Hays Middle School voter education event",
        "Ruder recommended students get involved in community and local politics early",
        "The article identifies Vernon Ruder as Mason Ruder's father and Ruth Ruder as Mason's mother"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(VERNON_RUDER_JR_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[vernon-ruder-jr.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
