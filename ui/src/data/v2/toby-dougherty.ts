/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const TOBY_DOUGHERTY_V2: CandidateFullV2 = {
  "slug": "toby-dougherty",
  "name": "Toby Dougherty",
  "party": "NP",
  "position": "Hays City Manager",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "City Manager",
  "issues": [
    {
      "id": "i-appointed-administration",
      "title": "Appointed Administration / Role Scope",
      "stated": {
        "text": "Dougherty is the appointed Hays city manager, not an elected candidate in the reviewed record. Official city pages describe him as chief administrative officer, serving at the pleasure of the City Commission, responsible for daily city administration, hiring employees, advising commissioners, enforcing policy, and preparing the proposed budget.",
        "sourceIds": [
          "s-hays-staff-profile",
          "s-hays-manager-office",
          "s-hays-commission-page"
        ]
      },
      "actions": [
        {
          "id": "ae-assistant-manager-2005",
          "date": "2005-03",
          "body": "City staff profile says Dougherty began serving as assistant city manager in March 2005.",
          "sourceIds": [
            "s-hays-staff-profile"
          ]
        },
        {
          "id": "ae-appointed-manager-2007",
          "date": "2007-08-01",
          "body": "City staff profile says Dougherty was appointed Hays City Manager on August 1, 2007.",
          "sourceIds": [
            "s-hays-staff-profile"
          ]
        },
        {
          "id": "ae-official-process-2026",
          "date": "2026-04-23",
          "body": "A current agenda packet shows the city-manager office embedded in Hays' public meeting and agenda process, including notices, financial statements, appointments, and project materials.",
          "sourceIds": [
            "s-hays-apr-2026-agenda"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-official-web-presence",
          "platform": "Official city website",
          "observation": "The verified online footprint is primarily official city pages and meeting infrastructure, not a campaign feed.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-staff-profile",
            "s-hays-commission-page"
          ],
          "mappedToIssueId": "i-appointed-administration"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "No campaign website was used or verified; the position is appointed rather than electoral.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-staff-profile"
          ],
          "mappedToIssueId": "i-appointed-administration"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "I searched Toby Dougherty with Hays, Hays City Manager, City Manager's Office, haysusa, Hays Post, KAYS, Post Podcast, Forward Ever, Strong Towns, R9 Ranch, water transfer, WaterPACK, Edwards County, Build Kansas grant, budget, revenue neutral, housing, travel plaza, city commission, agenda packets, minutes, YouTube, Facebook, LinkedIn, X/Twitter, Instagram, and 2026. I prioritized official/city sources and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-staff-profile"
          ],
          "mappedToIssueId": "i-appointed-administration"
        }
      ],
      "gap": {
        "summary": "No campaign filing, campaign website, or candidate finance trail was found. Treat him as an appointed administrator unless later evidence establishes candidacy.",
        "evidenceIds": [
          "ae-assistant-manager-2005"
        ]
      }
    },
    {
      "id": "i-r9-water-supply",
      "title": "R9 Ranch / Water Supply",
      "stated": {
        "text": "Dougherty's dominant public issue is the R9 Ranch water project for Hays and Russell. Official KDA records anchor the change-application process, while 2026 local and regional coverage shows Dougherty defending the project as a long-term survival issue and awaiting final legal and transfer-panel steps.",
        "sourceIds": [
          "s-kda-hays-change",
          "s-hays-r9-flyer",
          "s-hayspost-r9-design-2026",
          "s-hppr-klc-r9-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-r9-purchase-context",
          "date": "1995",
          "body": "KDA says Hays purchased the approximately 7,000-acre R9 Ranch and 30 water rights in 1995 for future Hays/Russell public water supply.",
          "sourceIds": [
            "s-kda-hays-change"
          ]
        },
        {
          "id": "ae-r9-chief-engineer-approval",
          "date": "2019-03-27",
          "body": "KDA says the Chief Engineer contingently approved applications to convert R9 irrigation rights to municipal use.",
          "sourceIds": [
            "s-kda-hays-change"
          ]
        },
        {
          "id": "ae-r9-design-complete",
          "date": "2026-01-24",
          "body": "Hays Post reported R9 pipeline and wellfield designs complete and 115 of 130 easements acquired; Dougherty said the city hoped a favorable Supreme Court ruling would end that challenge.",
          "sourceIds": [
            "s-hayspost-r9-design-2026"
          ]
        },
        {
          "id": "ae-r9-survival-framing",
          "date": "2026-05-04",
          "body": "HPPR/KLC Journal reported Dougherty describing R9 as hugely important and existential to Hays and Russell, while also reporting WaterPACK and Edwards County sustainability concerns.",
          "sourceIds": [
            "s-hppr-klc-r9-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-r9-attention-signal",
          "platform": "Local/regional news ecosystem",
          "observation": "Existing local harvest found the highest visible public-attention signal around Dougherty is R9 coverage across Hays Post, HPPR/KLC Journal, Kansas Reflector, KWCH, and Kansas News Service, not engagement on a personal feed.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hppr-klc-r9-2026"
          ],
          "mappedToIssueId": "i-r9-water-supply"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "The highest visible public-attention signal is issue-based rather than social: the R9 Ranch water dispute generated repeated local, regional, and state coverage, including Hays Post, KWCH, Kansas Reflector/Kansas News Service, HPPR/KLC Journal, and public meeting/video references.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-staff-profile"
          ],
          "mappedToIssueId": "i-r9-water-supply"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "2020 water conservation: In Kansas News Service/Hays Post coverage, Dougherty said Hays borrowed conservation ideas from western cities and Utah, including landscaping regulations, cash-for-grass, demonstration gardens, wastewater reuse, and customer conservation tools. Source: Hays Post/Kansas News Service.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-r9-water-supply"
        }
      ],
      "gap": {
        "summary": "No final 2026 Kansas Supreme Court decision was found as of this pass. R9 is contested; city-controlled materials should be paired with WaterPACK/Edwards County concerns.",
        "evidenceIds": [
          "ae-r9-purchase-context"
        ]
      }
    },
    {
      "id": "i-water-governance-state-local-authority",
      "title": "Water Governance / State-Local Authority",
      "stated": {
        "text": "Dougherty publicly argues water appropriations and transfers belong to state authority, not county zoning. Hays Post coverage of HB 2433 reports his support for statutory clarification that counties cannot duplicate or usurp state water law through local zoning.",
        "sourceIds": [
          "s-hayspost-hb2433-2026",
          "s-kda-hays-change"
        ]
      },
      "actions": [
        {
          "id": "ae-hb2433-testimony",
          "date": "2026-03-19",
          "body": "Hays Post reported HB 2433 included testimony in support from Mayor Mason Ruder and City Manager Toby Dougherty.",
          "sourceIds": [
            "s-hayspost-hb2433-2026"
          ]
        },
        {
          "id": "ae-state-control-statement",
          "date": "2026-03-19",
          "body": "Dougherty said state statute controls water appropriations and transfers and argued Edwards County zoning attempted to duplicate state water authority.",
          "sourceIds": [
            "s-hayspost-hb2433-2026"
          ]
        },
        {
          "id": "ae-hb2433-signed-context",
          "date": "2026-03-28",
          "body": "HPPR/KLC Journal later reported HB 2433 was signed on March 28, 2026, stripping counties of power to block state-approved water transfers.",
          "sourceIds": [
            "s-hppr-klc-r9-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2023 R9 delay/costs: Dougherty told commissioners the R9 process had been slowed by appeals, said Hays and Russell were moving forward, and explained that converted irrigation rights are reduced to protect neighboring water rights and the aquifer. Source: Hays Post, Jan. 16, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-water-governance-state-local-authority"
        },
        {
          "id": "ss-crossref-3",
          "platform": "KWCH",
          "observation": "2025 Build Kansas grant: Dougherty told KWCH the R9 project mattered because Hays and Russell lacked adequate local water supplies and said grant money would buy down the total project cost and help pay it off faster. Source: KWCH, Apr. 3, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-water-governance-state-local-authority"
        },
        {
          "id": "ss-crossref-5",
          "platform": "hppr.org",
          "observation": "2026 R9 survival framing: HPPR/KLC Journal quoted Dougherty saying the project is hugely important, that Hays and Russell are frustrated by opposition, that the project is existential to the cities' survival, and that they are following rules and going beyond them. Source: HPPR/KLC Journal, May 4, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hppr-klc-r9-2026"
          ],
          "mappedToIssueId": "i-water-governance-state-local-authority"
        }
      ],
      "gap": {
        "summary": "This card records Dougherty's and the city's legal/policy argument. It does not resolve the legal merits of Edwards County's opposing position.",
        "evidenceIds": [
          "ae-hb2433-testimony"
        ]
      }
    },
    {
      "id": "i-water-conservation-reuse",
      "title": "Water Conservation / Reuse",
      "stated": {
        "text": "Dougherty's water record is not only new supply. KCUR/Kansas News Service and local materials show Hays presenting itself as a conservation-oriented city using western-state ideas such as cash-for-grass, drought-tolerant demonstration gardens, landscaping rules, reuse studies, customer tools, and rate structures.",
        "sourceIds": [
          "s-kcur-water-conservation-2022"
        ]
      },
      "actions": [
        {
          "id": "ae-western-conservation-benchmarking",
          "date": "2022-10-11",
          "body": "KCUR/Kansas News Service reported Dougherty saying Hays had looked to Las Vegas, Tucson, Phoenix, and Utah for conservation ideas.",
          "sourceIds": [
            "s-kcur-water-conservation-2022"
          ]
        },
        {
          "id": "ae-conservation-toolkit",
          "date": "2022-10-11",
          "body": "Coverage described Hays water-conservation tools including cash-for-grass, drought-tolerant demonstration gardens, landscaping rules, wastewater reuse study, and customer conservation tools.",
          "sourceIds": [
            "s-kcur-water-conservation-2022"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-conservation-topic-count",
          "platform": "Local public web footprint",
          "observation": "Existing local harvest coded water conservation, reuse, and drought adaptation as a recurring but secondary theme behind R9 supply and litigation.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-water-conservation-reuse"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "Hays Post/Kansas News Service - California of Kansas water conservation",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-conservation-reuse"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Toby Dougherty's public voice is administrative, not electoral. He is the appointed Hays city manager, and the official city profile says he has held that role since Aug. 1, 2007, after serving as assistant city manager since March 2005. The richest public record is not a campaign feed; it is city pages, commission agendas and meeting recaps, Hays Post reporting and podcasts, regional water coverage, Strong Towns...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-staff-profile"
          ],
          "mappedToIssueId": "i-water-conservation-reuse"
        }
      ],
      "gap": {
        "summary": "This pass did not independently audit program uptake, water-savings outcomes, or household impacts of conservation measures.",
        "evidenceIds": [
          "ae-western-conservation-benchmarking"
        ]
      }
    },
    {
      "id": "i-budget-service-levels",
      "title": "Budget / Service Levels",
      "stated": {
        "text": "Dougherty's budget posture is maintenance-first and risk-aware. Local coverage shows him warning against expansion, citing inflation and grant uncertainty, defending the need for revenue growth when costs rise, and acknowledging that service levels may need adjustment if current standards become unsustainable.",
        "sourceIds": [
          "s-hayspost-retreat-2025",
          "s-hayspost-budget-2026",
          "s-hayspost-budget-2027",
          "s-hayspost-rnr-2024"
        ]
      },
      "actions": [
        {
          "id": "ae-rnr-budget-2024",
          "date": "2024-09-14",
          "body": "Hays Post coverage captured Dougherty's view that static tax collections are impractical when city costs increase.",
          "sourceIds": [
            "s-hayspost-rnr-2024"
          ]
        },
        {
          "id": "ae-retreat-budget-fluff",
          "date": "2025-03-06",
          "body": "At a commission retreat, Dougherty said Hays did not have much budget fluff and takes care of what it has.",
          "sourceIds": [
            "s-hayspost-retreat-2025"
          ]
        },
        {
          "id": "ae-maintenance-budget-2026",
          "date": "2025-06-22",
          "body": "Dougherty said the 2026 preliminary budget would focus on maintenance and not expand in scope, citing inflation, grant uncertainty, tariffs, vehicle costs, and recession risk.",
          "sourceIds": [
            "s-hayspost-budget-2026"
          ]
        },
        {
          "id": "ae-service-standards-2027",
          "date": "2026-04-06",
          "body": "During 2027 budget discussion, Dougherty said Hays had maintained high service standards but may need to reduce service somewhat if current standards are not sustainable.",
          "sourceIds": [
            "s-hayspost-budget-2027"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2024 revenue-neutral debate: Dougherty said staying revenue neutral was impractical because city costs increase, using police-department funding over time as his example. Source: Hays Post, Sept. 14, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-rnr-2024"
          ],
          "mappedToIssueId": "i-budget-service-levels"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2025 commission retreat: Dougherty said Hays did not have much budget \"fluff\"; in capital planning discussion, he noted an eastside fire station would mean more capital, equipment, and six firefighters, and suggested curbside refuse collection might reduce wear and help avoid a rate increase. Source: Hays Post, Mar. 6, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-retreat-2025"
          ],
          "mappedToIssueId": "i-budget-service-levels"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2025 maintenance budget: Dougherty called the 2026 budget a cautious maintenance budget, citing inflation, federal grant programs drying up, tariff/recession concerns, and the need to take care of existing services rather than expand. Source: Hays Post, Jun. 22, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-budget-2026"
          ],
          "mappedToIssueId": "i-budget-service-levels"
        }
      ],
      "gap": {
        "summary": "No full multi-year budget analysis was completed. This card maps publicly attributed statements and meeting coverage rather than independently assessing fiscal condition.",
        "evidenceIds": [
          "ae-rnr-budget-2024"
        ]
      }
    },
    {
      "id": "i-infrastructure-economic-development",
      "title": "Infrastructure / Economic Development",
      "stated": {
        "text": "Dougherty's public administrator record includes infrastructure planning, economic-development mechanics, and staff appointments. Evidence includes R9 design/funding, travel-plaza incentives, downtown street-cost analysis, CVB leadership, and older Strong Towns material on civic/infrastructure planning.",
        "sourceIds": [
          "s-hayspost-r9-design-2026",
          "s-hayspost-budget-2027",
          "s-hayspost-cvb-2026",
          "s-strongtowns-dougherty-2016"
        ]
      },
      "actions": [
        {
          "id": "ae-travel-plaza-incentives",
          "date": "2026-04-06",
          "body": "Hays Post reported city discussion of TIF, CID, and IRB incentives for a planned 24/7 Travel Store at I-70 Exit 159, alongside 2027 budget preparation.",
          "sourceIds": [
            "s-hayspost-budget-2027"
          ]
        },
        {
          "id": "ae-cvb-director-appointment",
          "date": "2026-05-15",
          "body": "City of Hays named Michelle Nikki Brown as CVB director; Dougherty said the CVB supports tourism, local business activity, and the broader community profile.",
          "sourceIds": [
            "s-hayspost-cvb-2026"
          ]
        },
        {
          "id": "ae-strongtowns-public-conversation",
          "date": "2016-05-26",
          "body": "Strong Towns described Dougherty as Hays city manager and quoted him on challenging paradigms and having difficult public conversations.",
          "sourceIds": [
            "s-strongtowns-dougherty-2016"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-strongtowns-engagement-artifact",
          "platform": "Strong Towns",
          "observation": "The 2016 Strong Towns page showed 0 Likes in page chrome; this is only a page-level artifact and not evidence of public support or opposition.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-strongtowns-dougherty-2016"
          ],
          "mappedToIssueId": "i-infrastructure-economic-development"
        }
      ],
      "gap": {
        "summary": "Economic-development incentive merits, fiscal return, and long-term infrastructure liabilities were not independently modeled in this pass.",
        "evidenceIds": [
          "ae-travel-plaza-incentives"
        ]
      }
    },
    {
      "id": "i-communication-transparency",
      "title": "Communication / Public Process",
      "stated": {
        "text": "Dougherty's public process record is largely institutional: agenda packets, open meetings, official pages, public recaps, and staff communication roles. Existing local research also captured his stated rationale for a public relations manager role to improve public information about city initiatives and services.",
        "sourceIds": [
          "s-hays-commission-page",
          "s-hays-apr-2026-agenda",
          "s-hayspost-pr-manager-2025"
        ]
      },
      "actions": [
        {
          "id": "ae-public-meeting-infrastructure",
          "date": "2026-05-19",
          "body": "City Commission page links agendas, minutes, live meeting video, archived meeting video, and audio.",
          "sourceIds": [
            "s-hays-commission-page"
          ]
        },
        {
          "id": "ae-pr-manager-role",
          "date": "2025-01-23",
          "body": "Existing local research captured Dougherty's explanation that a public relations manager role would improve community information about city initiatives, activities, and services.",
          "sourceIds": [
            "s-hayspost-pr-manager-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-city-controlled-communications",
          "platform": "Official city / local news channels",
          "observation": "Public administrator-attributed messaging appears through city pages, meeting infrastructure, city releases, and Hays Post recaps rather than a personal social account.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-commission-page"
          ],
          "mappedToIssueId": "i-communication-transparency"
        }
      ],
      "gap": {
        "summary": "No complete transcript-level review of all meetings, podcasts, or archived video was completed.",
        "evidenceIds": [
          "ae-public-meeting-infrastructure"
        ]
      }
    },
    {
      "id": "i-r9-wildfire-land-stewardship",
      "title": "R9 Wildfire / Land Stewardship",
      "stated": {
        "text": "The April 2026 R9-area wildfire is an unresolved stewardship and public-accountability issue. Hays Post/Kansas Reflector reported a 1,500-acre fire after a city controlled burn, but the State Fire Marshal deemed the cause undetermined and did not connect the two fires. Dougherty said the city would wait for both state and city-retained reports before further comment.",
        "sourceIds": [
          "s-hayspost-r9-wildfire-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-controlled-burn",
          "date": "2026-04-15",
          "body": "Coverage reported a 400-acre controlled burn on city-owned R9 Ranch land, beginning around 8:20 a.m. and finishing around 1:30 p.m.",
          "sourceIds": [
            "s-hayspost-r9-wildfire-2026"
          ]
        },
        {
          "id": "ae-new-fire-response",
          "date": "2026-04-16",
          "body": "Coverage reported a new fire was called in around 4 p.m. the next day and ultimately scorched more than 1,500 acres, with more than 24 agencies helping fight it.",
          "sourceIds": [
            "s-hayspost-r9-wildfire-2026"
          ]
        },
        {
          "id": "ae-fire-cause-undetermined",
          "date": "2026-04-29",
          "body": "The Kansas State Fire Marshal's Office deemed the cause undetermined and did not draw a connection between the controlled burn and later fire.",
          "sourceIds": [
            "s-hayspost-r9-wildfire-2026"
          ]
        },
        {
          "id": "ae-dougherty-wildfire-comment",
          "date": "2026-05-07",
          "body": "Dougherty said the city had not seen the final state fire marshal report and the city-retained investigator had not completed a report, so no comment would be made until both were received and reviewed.",
          "sourceIds": [
            "s-hayspost-r9-wildfire-2026"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No final city-retained investigator report was found. Do not state causation beyond the official undetermined finding.",
        "evidenceIds": [
          "ae-controlled-burn"
        ]
      }
    }
  ],
  "ownWordsNarrative": "status: no_verified_candidate_controlled_campaign_social_feed; checked: Official City of Hays staff profile; City Manager's Office; City Commission agendas/minutes/video/audio infrastructure; Hays Post; HPPR / KLC Journal; Kansas Reflector; KCUR / Kansas News Service; Strong Towns; Facebook public search / city statements; LinkedIn public previews; X/Twitter; Instagram; Threads; Bluesky; TikTok; Substack; YouTube; Reddit; relevance: Use visible absence of a verified personal/campaign feed as a footprint signal only. Do not infer private views, follows, likes, or platform activity.; sourceIds: s-local-social-harvest",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. The public record around Dougherty is overwhelmingly professional and administrative, with very little reporting on his personal or religious life.",
  "campaignFinance": {
    "totalRaised": "No campaign committee, treasurer appointment, donation page, KPDC filing, local campaign-finance report, donor list, or candidate fundraising total was verified for Dougherty. This fits the reviewed record identifying him as an appointed city manager rather than an electoral candidate.",
    "narrative": "No campaign committee, treasurer appointment, donation page, KPDC filing, local campaign-finance report, donor list, or candidate fundraising total was verified for Dougherty. This fits the reviewed record identifying him as an appointed city manager rather than an electoral candidate.",
    "donors": [],
    "undisclosed": "R9 project funding and grant/federal support are municipal project funding, not campaign donations.; No issue-relevant personal donor conflict was confirmed.",
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Staff Directory - Toby Dougherty"
  },
  "sources": [
    {
      "id": "s-hays-staff-profile",
      "tier": "primary",
      "url": "https://www.haysusa.com/directory.aspx?EID=6",
      "title": "Staff Directory - Toby Dougherty",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Toby Dougherty is Hays City Manager",
        "He was appointed city manager on 2007-08-01",
        "He previously served as assistant city manager since March 2005",
        "The city manager is chief administrative officer, appointed by and serving at the pleasure of the City Commission",
        "The city manager is responsible for daily operation and administration and hires employees",
        "Observed public online activity mapped to Water Conservation / Reuse."
      ]
    },
    {
      "id": "s-hays-manager-office",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "City Manager's Office",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "City management staff administer City Commission policies by coordinating, directing, and reviewing municipal operations",
        "The office page lists Toby Dougherty as City Manager",
        "The office page lists Collin Bielser as Deputy City Manager"
      ]
    },
    {
      "id": "s-hays-commission-page",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "City Commission",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays uses a commission-manager form of government",
        "Commission meetings and work sessions are open to the public",
        "The page links agendas, minutes, live meetings, recorded meetings, and audio",
        "The commission hires the city manager",
        "The city manager advises commissioners, enforces policies, and prepares a proposed budget"
      ]
    },
    {
      "id": "s-hays-apr-2026-agenda",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_04232026-1609",
      "title": "City Commission Meeting Agenda, April 23, 2026",
      "publisher": "City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official agenda packet confirms current meeting/agenda process",
        "Meeting notices direct disability accommodation requests to the City Manager's Office",
        "Packet includes city financial statements, consent agenda items, board appointments, and project materials"
      ]
    },
    {
      "id": "s-kda-hays-change",
      "tier": "primary",
      "url": "https://www.agriculture.ks.gov/divisions-programs/division-of-water-resources/water-appropriation/change-applications/hays-change",
      "title": "City of Hays / Russell Change Applications",
      "publisher": "Kansas Department of Agriculture, Division of Water Resources",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays purchased the approximately 7,000-acre R9 Ranch and 30 water rights in 1995 for future Hays/Russell public water supply",
        "On 2019-03-27 the Chief Engineer contingently approved change applications to convert irrigation rights to municipal use",
        "WaterPACK filed judicial-review litigation in 2019",
        "In 2022 the district court modified one aspect of the order and otherwise denied WaterPACK challenges",
        "The Kansas Supreme Court accepted transfer of WaterPACK's appeal in 2022"
      ]
    },
    {
      "id": "s-hays-r9-flyer",
      "tier": "primary",
      "url": "https://www.haysusa.com/DocumentCenter/View/6355/R9-Flyer?bidId=",
      "title": "Hays & Russell R9 Ranch Flyer",
      "publisher": "City of Hays / City of Russell",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "City-controlled R9 public-information material frames R9 as a sustainable source",
        "The flyer says Hays and Russell have owned the R9 Ranch and its water rights since 1995",
        "The flyer presents municipal-use and sustainable-yield figures"
      ]
    },
    {
      "id": "s-hayspost-r9-design-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/453a68e6-0628-44ef-bb99-a9d4831ab6fa",
      "title": "Hays water project manager: R9 pipeline, wellfield designs complete",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "R9 pipeline and wellfield designs were complete",
        "115 of 130 easements had been acquired",
        "If final approval arrived by mid-year, bidding could occur by year-end, construction could begin in April 2027, and completion could come in summer 2029",
        "Dougherty said Supreme Court arguments went very well and hoped a positive ruling would end that challenge",
        "Mayor Mason Ruder reported federal funding support for Hays and Russell"
      ]
    },
    {
      "id": "s-hayspost-hb2433-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c6a0184d-7e96-4157-ba49-d5e49a49e54c",
      "title": "Water bill awaits governor's signature, solidifies state control of water transfers",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2433 passed the Kansas House and Senate and awaited the governor's signature",
        "The bill included testimony in support from Mayor Mason Ruder and Toby Dougherty",
        "Dougherty said state law controls water appropriations and transfers",
        "Dougherty argued Edwards County's zoning regulations attempted to duplicate or usurp state water authority",
        "The article said a Supreme Court ruling was expected within a few months"
      ]
    },
    {
      "id": "s-hppr-klc-r9-2026",
      "tier": "secondary",
      "url": "https://www.hppr.org/hppr-news/2026-05-04/long-battle-over-west-kansas-water-nears-end-the-stakes-survival",
      "title": "Long battle over west Kansas water nears end. The stakes? Survival",
      "publisher": "HPPR / KLC Journal",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "R9 is described as a $140 million project still delayed by legal challenges",
        "Hays had spent $11 million over 11 years, including $8 million in legal fees",
        "Dougherty described R9 as hugely important and existential to Hays and Russell",
        "The article includes WaterPACK and Edwards County concerns about sustainability and local impact",
        "HB 2433 was signed on 2026-03-28",
        "A Kansas Supreme Court decision was expected in summer 2026",
        "Observed public online activity mapped to Water Governance / State-Local Authority."
      ]
    },
    {
      "id": "s-hayspost-r9-wildfire-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7629c5a0-96c2-4130-998b-315447ac2651",
      "title": "Kansas wildfire scorched 1,500 acres after city's burn; official cause undetermined",
      "publisher": "Hays Post / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "A 1,500-acre Edwards County fire followed an April 15 controlled burn on city-owned R9 Ranch land",
        "The Kansas State Fire Marshal deemed the cause undetermined and did not draw a connection between the two fires",
        "The controlled burn began around 8:20 a.m. and finished by 1:30 p.m. on April 15",
        "A new fire was reported around 4 p.m. the next day",
        "Dougherty said the city had not yet seen a final state fire marshal report and the city-retained investigator had not completed a report",
        "Dougherty said no comment would be made until both reports were received and reviewed"
      ]
    },
    {
      "id": "s-hayspost-retreat-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/909306ea-6223-4960-bd5f-99c19bb83817",
      "title": "Hays city commissioners keep eyes on the budget during retreat",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dougherty said Hays did not have much budget fluff and takes care of what it has",
        "The retreat discussed future costs including an eastside fire station and refuse collection",
        "Observed public online activity mapped to Budget / Service Levels."
      ]
    },
    {
      "id": "s-hayspost-budget-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
      "title": "City manager: 2026 Hays budget will not expand; federal grant programs drying up",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dougherty said the 2026 preliminary budget would be maintenance-focused and non-expansionary",
        "He cited inflation, federal grant uncertainty, tariffs, vehicle costs, and recession risk",
        "He said Hays remained in good financial shape and the budget maintained staffing, programs, and operations",
        "Observed public online activity mapped to Budget / Service Levels."
      ]
    },
    {
      "id": "s-hayspost-budget-2027",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb",
      "title": "Hays City Commission hears more on planned travel plaza, 2027 draft budget",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "City staff discussed 2027 budget preparation, cost increases, and sales-tax growth lagging inflation",
        "Dougherty said Hays has maintained high service standards",
        "Dougherty said service levels may need to be reduced somewhat if current standards are not sustainable",
        "The story covered travel-plaza incentives and downtown street-conversion costs"
      ]
    },
    {
      "id": "s-hayspost-rnr-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ab25d617-c481-467e-92ce-1a3ba104f7ac",
      "title": "2025 budget and revenue-neutral hearing",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dougherty defended exceeding the revenue-neutral rate by arguing city costs increase over time",
        "Existing local research summarized his view that static tax collections are not sustainable",
        "Observed public online activity mapped to Budget / Service Levels."
      ]
    },
    {
      "id": "s-kcur-water-conservation-2022",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-10-11/this-city-in-kansas-really-conserves-its-water-but-that-still-might-not-be-enough-to-survive",
      "title": "This city in Kansas really conserves its water, but that still might not be enough to survive",
      "publisher": "KCUR / Kansas News Service",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dougherty said Hays had looked to Las Vegas, Tucson, Phoenix, and Utah for water-conservation ideas",
        "The article describes cash-for-grass, drought-tolerant demonstration gardens, landscaping rules, wastewater reuse, and customer conservation tools"
      ]
    },
    {
      "id": "s-strongtowns-dougherty-2016",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2016/5/26/toby-dougherty",
      "title": "Toby Dougherty",
      "publisher": "Strong Towns",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Strong Towns described Dougherty as Hays city manager",
        "The page quoted him on difficult public conversations and challenging paradigms",
        "The page chrome showed 0 Likes"
      ]
    },
    {
      "id": "s-hayspost-cvb-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a98fc165-98a3-4c58-b42d-6cc9d9d867ed",
      "title": "City of Hays names new director of Convention and Visitors Bureau",
      "publisher": "Hays Post / City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The City of Hays named Michelle Nikki Brown as CVB director beginning June 15",
        "Dougherty said Brown's background and community connections positioned her to promote Hays",
        "Dougherty said the CVB supports tourism, local business activity, and the broader community"
      ]
    },
    {
      "id": "s-hayspost-pr-manager-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f848b341-7c85-4e1f-ad84-3819123827c7",
      "title": "City of Hays names new public relations manager",
      "publisher": "Hays Post / City of Hays",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Existing local research captured Dougherty's explanation that a PR manager role would improve public communication about city initiatives, activities, and services"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to R9 Ranch / Water Supply.",
        "2020 water conservation: In Kansas News Service/Hays Post coverage, Dougherty said Hays borrowed conservation ideas from western cities and Utah, including landscaping regulations,",
        "Observed public online activity mapped to Water Conservation / Reuse."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water Governance / State-Local Authority.",
        "2023 R9 delay/costs: Dougherty told commissioners the R9 process had been slowed by appeals, said Hays and Russell were moving forward, and explained that converted irrigation righ"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
      "title": "KWCH / Kwch",
      "publisher": "Kwch",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water Governance / State-Local Authority.",
        "2025 Build Kansas grant: Dougherty told KWCH the R9 project mattered because Hays and Russell lacked adequate local water supplies and said grant money would buy down the total pro"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(TOBY_DOUGHERTY_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[toby-dougherty.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
