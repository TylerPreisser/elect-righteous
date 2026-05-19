/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SHAUN_MUSIL_V2: CandidateFullV2 = {
  "slug": "shaun-musil",
  "name": "Shaun Musil",
  "party": "NP",
  "position": "Hays City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Account representative for Nex-Tech; former Paisley Pear co-owner",
  "issues": [
    {
      "id": "i-office-status",
      "title": "Office Status / Election Context",
      "stated": {
        "text": "Musil is a current Hays City Commissioner and 2025 re-election winner, not a 2026 ballot candidate in reviewed records.",
        "sourceIds": [
          "s-city-commission",
          "s-ellis-filings-2025",
          "s-goodparty",
          "s-hayspost-election-2025",
          "s-hayspost-reorg-2026"
        ]
      },
      "actions": [
        {
          "id": "a-filed-2025",
          "date": "2025-06-02",
          "body": "Listed by Ellis County as a 2025 Hays City Commission candidate for a contest with two four-year terms and one two-year term.",
          "sourceIds": [
            "s-ellis-filings-2025"
          ]
        },
        {
          "id": "a-reelected-2025",
          "date": "2025-11-04",
          "body": "Re-elected to Hays City Commission. Hays Post reported Musil and Sandy Jacobs won four-year terms; official Ellis County result extraction appears to list Musil at 1,788 votes, while election-night reporting used 1,772.",
          "sourceIds": [
            "s-ellis-results-page",
            "s-ellis-results-2025",
            "s-hayspost-election-2025"
          ]
        },
        {
          "id": "a-sworn-2026",
          "date": "2026-01-08",
          "body": "Sworn in with Sandy Jacobs and David Vilaysing after the November 2025 city election.",
          "sourceIds": [
            "s-hayspost-reorg-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2025 election result: Hays Post reported Musil won re-election with 1,772 votes, the top total among Hays City Commission candidates, with 22.56% voter turnout. Source: Hays Post, Nov. 6, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-election-2025"
          ],
          "mappedToIssueId": "i-office-status"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2021 re-election profile: Musil said the community cared even when it disagreed, described face-to-face constituent access at his business, defended North Vine roundabouts as safer for future growth, and said Hays must keep growing. Source: Hays Post, Oct. 31, 2021.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-office-status"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2025 election night: Musil said he felt blessed, said officials have to listen to people who do not like what they are doing, and said Hays was on the right path. Source: Hays Post, Nov. 6, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-election-2025"
          ],
          "mappedToIssueId": "i-office-status"
        }
      ]
    },
    {
      "id": "i-water-r9",
      "title": "Water Security / R9 Ranch",
      "stated": {
        "text": "Musil frames the R9 Ranch water project as Hays' major unfinished business and a long-term regional priority. He supports completing the approval process, continuing conservation, and presenting Hays as a good neighbor to Kinsley/Edwards County.",
        "sourceIds": [
          "s-hayspost-q-and-a",
          "s-hayspost-forum-2025",
          "s-hayspost-r9-2024",
          "s-hayspost-r9-2025"
        ]
      },
      "actions": [
        {
          "id": "a-r9-2024-ruling-response",
          "date": "2024-02-08",
          "body": "As mayor, responded to a favorable administrative-law ruling by calling it a major win for Hays, Russell, and the region, while saying conservation would continue and Hays wanted to be good neighbors to Kinsley.",
          "sourceIds": [
            "s-hayspost-r9-2024"
          ]
        },
        {
          "id": "a-r9-2025-campaign",
          "date": "2025-10-24",
          "body": "In his 2025 Q&A, said he was running because of unfinished business, mainly the water project, and expected the approval process to advance during the next term.",
          "sourceIds": [
            "s-hayspost-q-and-a"
          ]
        },
        {
          "id": "a-r9-2025-forum",
          "date": "2025-10-06",
          "body": "At the 2025 candidate forum, said he believed R9 would happen, that Hays was not taking water away from Kinsley, and that Hays had low per-person water use.",
          "sourceIds": [
            "s-hayspost-forum-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2024 R9 ruling: As mayor, Musil called the favorable R9 water-transfer ruling a huge win for Hays, Russell, and the region, said conservation would continue, and emphasized being good neighbors to Kinsley. Source: Hays Post, Feb. 8, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-r9-2024"
          ],
          "mappedToIssueId": "i-water-r9"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2025 candidate forum: Musil said he believed R9 would happen, that Hays had the state's lowest per-person water usage, that parks should be reprioritized, that more housing should open up affordability, and that funding nonprofits more would probably require a mill levy increase. Source: Hays Post, Oct. 8, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-forum-2025"
          ],
          "mappedToIssueId": "i-water-r9"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2025 Q&A: Musil said he was running because of unfinished business, mainly the water project; called water, housing, and retail the hardest issues he had handled; said he had no thought of raising the mill levy in the next few years; and closed by saying he would listen and represent the whole community. Source: Hays Post, Oct. 24, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-q-and-a"
          ],
          "mappedToIssueId": "i-water-r9"
        }
      ]
    },
    {
      "id": "i-housing",
      "title": "Housing / RHID / Affordability",
      "stated": {
        "text": "Musil supports using RHIDs and development tools to increase housing supply, while acknowledging the resulting housing may not perfectly match affordability needs.",
        "sourceIds": [
          "s-hayspost-q-and-a",
          "s-hayspost-forum-2025",
          "s-hayspost-grow-hays-2026"
        ]
      },
      "actions": [
        {
          "id": "a-rhid-statement-2025",
          "date": "2025-10-24",
          "body": "Identified relaxed RHID policy as one of the most impactful recent commission actions because it helped get more houses built.",
          "sourceIds": [
            "s-hayspost-q-and-a"
          ]
        },
        {
          "id": "a-affordable-housing-forum-2025",
          "date": "2025-10-06",
          "body": "Said developers had sought city letters of support for affordable-housing grant applications but had been turned down by agencies, and said the goal was to build more houses to open up affordability.",
          "sourceIds": [
            "s-hayspost-forum-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2021 Grow Hays funding: Musil called Grow Hays the best economic development program since he had been on the commission and said Hays could not go backwards. Source: Hays Post, Jun. 11, 2021.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-grow-hays-2021"
          ],
          "mappedToIssueId": "i-housing"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2023 budget: Musil said lowering the mill levy was easier said than done, acknowledged residents and business owners were feeling cost pressure, and said he wanted efficiencies without putting a future commission in dire need. Source: Hays Post, Sep. 16, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-housing"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2025 airport service: Musil said cutting Essential Air Service was not wasteful spending and argued that airport service keeps Hays relevant for doctors, FHSU international students, and regional access. Source: Hays Post, May 24, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-airport-2025"
          ],
          "mappedToIssueId": "i-housing"
        }
      ]
    },
    {
      "id": "i-economic-development-retail",
      "title": "Economic Development / Retail / Incentives",
      "stated": {
        "text": "Musil is openly pro-growth and pro-retail. He connects retail recruitment, Grow Hays, and development incentives with Hays' sales-tax base and long-term growth.",
        "sourceIds": [
          "s-hayspost-grow-hays-2021",
          "s-hayspost-i70-land-2024",
          "s-hayspost-grow-hays-2026",
          "s-hayspost-chickfila-2026"
        ]
      },
      "actions": [
        {
          "id": "a-grow-hays-funding-2021",
          "date": "2021-06-10",
          "body": "Supported stable Grow Hays funding and called Grow Hays the best economic-development program since he had been on the commission.",
          "sourceIds": [
            "s-hayspost-grow-hays-2021"
          ]
        },
        {
          "id": "a-i70-land-retail-2024",
          "date": "2024-12-05",
          "body": "Said city-owned land north of I-70 showed Hays was serious about development, said retail was a priority, and suggested a convention center there.",
          "sourceIds": [
            "s-hayspost-i70-land-2024"
          ]
        },
        {
          "id": "a-chickfila-incentives-2026",
          "date": "2026-03-19",
          "body": "During discussion of Chick-fil-A economic-development incentives, credited Grow Hays and city staff and asked what would come next.",
          "sourceIds": [
            "s-hayspost-chickfila-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2024 retail development: Musil said city-owned land north of I-70 showed Hays was serious about development and said retail was a priority. Source: Hays Post, Dec. 7, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-i70-land-2024"
          ],
          "mappedToIssueId": "i-economic-development-retail"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2026 economic development: After a Grow Hays annual review, Musil was described as pleased with 2025 economic-development momentum. Source: Hays Post, Jan. 17, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-grow-hays-2026"
          ],
          "mappedToIssueId": "i-economic-development-retail"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2026 Chick-fil-A incentives: Musil credited Grow Hays and city staff, then asked, \"Chick-fil-A now; what's next?\" Source: Hays Post, Mar. 21, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-chickfila-2026"
          ],
          "mappedToIssueId": "i-economic-development-retail"
        }
      ]
    },
    {
      "id": "i-budget-taxes-services",
      "title": "Budget / Taxes / Service Continuity",
      "stated": {
        "text": "Musil presents budget policy as a balance between avoiding unnecessary mill-levy increases, maintaining services, and recognizing rising costs.",
        "sourceIds": [
          "s-hayspost-q-and-a",
          "s-hayspost-forum-2025",
          "s-hayspost-budget-2026"
        ]
      },
      "actions": [
        {
          "id": "a-mill-levy-q-and-a-2025",
          "date": "2025-10-24",
          "body": "Said he had no thought of raising the mill levy in the next few years, while cautioning that officials should never say never.",
          "sourceIds": [
            "s-hayspost-q-and-a"
          ]
        },
        {
          "id": "a-nonprofit-funding-forum-2025",
          "date": "2025-10-06",
          "body": "Said increasing city support for local nonprofits would probably require a mill levy increase.",
          "sourceIds": [
            "s-hayspost-forum-2025"
          ]
        },
        {
          "id": "a-budget-prep-nonprofits-2026",
          "date": "2026-04-02",
          "body": "During 2027 budget preparation, worried that nonprofit agencies would request more money and asked what happens if reduced funding causes services to disappear.",
          "sourceIds": [
            "s-hayspost-budget-2026"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-public-health-covid",
      "title": "Public Health / COVID-Era Governance",
      "stated": {
        "text": "As mayor in 2020, Musil backed extending and enforcing the Hays mask ordinance, framing the goal as keeping schools and businesses open.",
        "sourceIds": [
          "s-hayspost-mask-2020",
          "s-hayspost-pandemic-2021"
        ]
      },
      "actions": [
        {
          "id": "a-mask-extension-2020",
          "date": "2020-08-27",
          "body": "Hays Post reported the commission voted 3-2 to extend the mask ordinance. Musil supported enforcement and said his goal was to keep schools and businesses open.",
          "sourceIds": [
            "s-hayspost-mask-2020"
          ]
        },
        {
          "id": "a-pandemic-reflection-2021",
          "date": "2021-01-14",
          "body": "After his 2020 mayoral year, thanked staff and his wife, with Hays Post reporting pandemic strain on his family and business.",
          "sourceIds": [
            "s-hayspost-pandemic-2021"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-infrastructure-airport-parks",
      "title": "Infrastructure / Airport / Parks",
      "stated": {
        "text": "Musil supports maintaining regional infrastructure that keeps Hays economically connected, including airport service, and has called for reprioritizing park spending.",
        "sourceIds": [
          "s-hayspost-airport-2025",
          "s-hayspost-forum-2025"
        ]
      },
      "actions": [
        {
          "id": "a-essential-air-service-2025",
          "date": "2025-05-22",
          "body": "Opposed proposed Essential Air Service cuts by saying the program was not wasteful spending and kept Hays relevant for doctors, FHSU international students, and regional access.",
          "sourceIds": [
            "s-hayspost-airport-2025"
          ]
        },
        {
          "id": "a-parks-forum-2025",
          "date": "2025-10-06",
          "body": "Said Hays needed to reprioritize what it maintains and installs in parks.",
          "sourceIds": [
            "s-hayspost-forum-2025"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-business-community-identity",
      "title": "Business / Community Identity",
      "stated": {
        "text": "Musil's public identity combines city service, sales/business work at Nex-Tech, and former downtown small-business ownership.",
        "sourceIds": [
          "s-nextech",
          "s-fhsu-paisley-pear",
          "s-hayspost-pandemic-2021"
        ]
      },
      "actions": [
        {
          "id": "a-paisley-pear-fhsu-2018",
          "date": "2018-08-29",
          "body": "As Paisley Pear owner, welcomed Fort Hays State University students downtown and described the business as a place students used to study and relax.",
          "sourceIds": [
            "s-fhsu-paisley-pear"
          ]
        },
        {
          "id": "a-nextech-profile",
          "date": "2026-05-19",
          "body": "Nex-Tech profile presents Musil as a business/sales professional serving education and government clients and as a Hays city commissioner.",
          "sourceIds": [
            "s-nextech"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "sources": [
    {
      "id": "s-city-commission",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "City Commission",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "City of Hays lists Shaun Musil among current commission members",
        "Hays uses a commission-manager form of government",
        "Commission members are elected at-large every two years"
      ]
    },
    {
      "id": "s-ellis-filings-2025",
      "tier": "primary",
      "url": "https://ellisco.net/DocumentCenter/View/5707/2025-Candidate-Filings",
      "title": "2025 City/School/Improvement Districts/Extension Candidate Filings",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Shaun Musil was listed for Hays City Commission in 2025 candidate filings",
        "The Hays City Commission contest had two four-year terms and one two-year term"
      ]
    },
    {
      "id": "s-ellis-results-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/435/Election-Results",
      "title": "Election Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County links 2025 General Election Official Results"
      ]
    },
    {
      "id": "s-ellis-results-2025",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5892/Official-Results-2025-General-Election",
      "title": "Official Results 2025 General Election",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official Ellis County 2025 results PDF exists",
        "Search extraction listed Shaun Musil with 1,788 votes for Hays City Commissioner"
      ]
    },
    {
      "id": "s-goodparty",
      "tier": "social",
      "url": "https://goodparty.org/candidate/shaun-musil/hays-city-commission",
      "title": "Shaun Musil for Hays City Commission",
      "publisher": "GoodParty.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "GoodParty profile is unclaimed",
        "Profile lists Hays City Commission",
        "Profile lists election date November 4, 2025",
        "Profile lists party as Nonpartisan",
        "Profile links Facebook, LinkedIn, and City of Hays page",
        "Issue fields are not filled out"
      ]
    },
    {
      "id": "s-nextech",
      "tier": "secondary",
      "url": "https://www.nex-tech.com/business/shaun/",
      "title": "Shaun",
      "publisher": "Nex-Tech",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Nex-Tech describes Musil as having over 30 years of business and sales experience",
        "Nex-Tech says Musil serves as City Commissioner in Hays, Kansas",
        "Profile says he works with educational institutions and government entities",
        "Profile references small-business-owner background and marriage to an educator"
      ]
    },
    {
      "id": "s-hayspost-q-and-a",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hays City Commission Candidate Q&A: Shaun Musil",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musil was age 53 and an account representative for Nex-Tech",
        "Musil said he was running because of unfinished business, mainly the water project",
        "Musil said relaxed RHID policy had allowed more houses to be built",
        "Musil said he had no thought of raising the mill levy in the next few years but never say never",
        "Observed public online activity mapped to Water Security / R9 Ranch."
      ]
    },
    {
      "id": "s-hayspost-forum-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1afb725b-f6c4-4d09-93de-94b9008ba5ae",
      "title": "City commission candidates talk housing, budget, R9 water project",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musil said he believed R9 would happen",
        "Musil said Hays was not taking away from Kinsley",
        "Musil said Hays had the state's lowest water usage rate per person",
        "Musil said parks should be reprioritized",
        "Musil said the housing goal was to build more houses to open up affordability",
        "Musil said more nonprofit funding would probably require a mill levy increase",
        "Observed public online activity mapped to Water Security / R9 Ranch."
      ]
    },
    {
      "id": "s-hayspost-election-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
      "title": "Water, retail, housing top issues for newly elected Hays city commissioners",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Musil re-elected with 1,772 unofficial votes",
        "Musil and Sandy Jacobs would serve four-year terms",
        "Voter turnout was reported at 22.56%",
        "Musil said he felt blessed",
        "Musil said officials have to listen to people who do not like what they are doing",
        "Observed public online activity mapped to Office Status / Election Context."
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
        "Musil, Sandy Jacobs, and David Vilaysing were sworn in on January 8, 2026",
        "Hays Post reported Mason Ruder elected mayor and Alaina Cunningham vice-mayor"
      ]
    },
    {
      "id": "s-hayspost-r9-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8d8e87f6-e3c9-4950-bcea-9cac40e269bd",
      "title": "Judge rules in favor of Hays', Russell's R9 Ranch water transfer request",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Administrative law judge issued favorable initial order on R9 transfer application",
        "Musil called the ruling a huge win for Hays, Russell, and the region",
        "Musil said Hays would continue water conservation",
        "Musil emphasized being good neighbors to Kinsley",
        "The project cost was estimated at $140 million in the article",
        "Observed public online activity mapped to Water Security / R9 Ranch."
      ]
    },
    {
      "id": "s-hayspost-r9-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1c6734f4-a3cc-4aa1-abb3-6827856793d8",
      "title": "R9 2025 update",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Existing local harvest recorded Musil framing R9 as regional and not taking from Edwards County/Kinsley"
      ]
    },
    {
      "id": "s-hayspost-mask-2020",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/71b2e036-1db2-45b6-86a9-c9d86520f000",
      "title": "City commission extends face mask ordinance after emotional discussion",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Commission voted 3-2 to extend the face mask ordinance",
        "Musil was mayor during the meeting",
        "Musil supported enforcement and said his goal was to keep schools and businesses open",
        "Musil discussed business closures caused by employee illness"
      ]
    },
    {
      "id": "s-hayspost-pandemic-2021",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
      "title": "City commission reorganized; past mayor Musil thankful for support during pandemic",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musil thanked staff and his wife after his 2020 mayoral year",
        "Article says Shaun and Heather Musil co-owned Paisley Pear",
        "Article says the Musil family experienced coronavirus and quarantines",
        "Article lists 2020 projects supported or approved by the commission"
      ]
    },
    {
      "id": "s-hayspost-grow-hays-2021",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ff990305-fdea-40c2-a1c9-1e07624baf77",
      "title": "Mayor retracts idea for eco devo mill levy increase; still supports more funding",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musil said Grow Hays must have stable funding",
        "Musil called Grow Hays the best economic-development program since he had been on the commission",
        "Musil said Hays could not go backwards",
        "Observed public online activity mapped to Housing / RHID / Affordability."
      ]
    },
    {
      "id": "s-hayspost-i70-land-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
      "title": "Hays city commissioners discuss uses for land north of I-70",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musil said the city-owned land showed Hays was serious about development",
        "Musil said retail was a priority",
        "Musil wanted a convention center at that location",
        "Observed public online activity mapped to Economic Development / Retail / Incentives."
      ]
    },
    {
      "id": "s-hayspost-airport-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2730c5cd-1026-4098-9e5f-ebf15c8fd949",
      "title": "Hays faces loss of federal air funds",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musil said Essential Air Service was not wasteful spending",
        "Musil said airport service keeps Hays relevant",
        "Musil mentioned doctors and FHSU international students as airport-service users",
        "Observed public online activity mapped to Housing / RHID / Affordability."
      ]
    },
    {
      "id": "s-hayspost-grow-hays-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/25729bbf-6cf9-4d9e-a74e-e7a60f5e43e9",
      "title": "Grow Hays report: 2025 filled with momentum in economic development",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post described Musil as pleased with 2025 economic-development momentum",
        "Grow Hays reported eight multi-unit housing projects and 17 single-family home permits underway or approved",
        "Observed public online activity mapped to Economic Development / Retail / Incentives."
      ]
    },
    {
      "id": "s-hayspost-chickfila-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fd894259-fd52-4ccb-92c6-945bd172e875",
      "title": "Hays City Commission talks economic development incentives for new Chick-fil-A",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musil credited Grow Hays and city staff for behind-the-scenes work",
        "Musil said Chick-fil-A now; what's next?",
        "The developer requested IRB-related tax incentives for a $6.2 million project",
        "Observed public online activity mapped to Economic Development / Retail / Incentives."
      ]
    },
    {
      "id": "s-hayspost-budget-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb",
      "title": "Hays City Commission hears more on planned travel plaza, 2027 draft budget",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musil worried outside nonprofit agencies would ask for more money",
        "Musil asked what happens if city funding falls and agencies stop providing services",
        "Coverage describes general-fund sales-tax dependence and cost pressures"
      ]
    },
    {
      "id": "s-fhsu-paisley-pear",
      "tier": "secondary",
      "url": "https://www.fhsu.edu/news/2018/08/marching-together-to-main-and-to-friends",
      "title": "Marching together to Main and to friends",
      "publisher": "Fort Hays State University",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "FHSU coverage identified Musil as Paisley Pear owner",
        "Musil welcomed FHSU students downtown"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Office Status / Election Context.",
        "2021 re-election profile: Musil said the community cared even when it disagreed, described face-to-face constituent access at his business, defended North Vine roundabouts as safer"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0013a2b9-05a4-4aae-9794-ed48359742f0",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Housing / RHID / Affordability.",
        "2023 budget: Musil said lowering the mill levy was easier said than done, acknowledged residents and business owners were feeling cost pressure, and said he wanted efficiencies wit"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SHAUN_MUSIL_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[shaun-musil.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
