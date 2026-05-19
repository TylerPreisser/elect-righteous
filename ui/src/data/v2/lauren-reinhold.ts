/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const LAUREN_REINHOLD_V2: CandidateFullV2 = {
  "slug": "lauren-reinhold",
  "name": "Lauren Reinhold",
  "party": "D",
  "position": "U.S. House candidate, KS-01",
  "electionSlug": "ks-01-house-2026",
  "incumbent": false,
  "occupation": "Attorney (28 years experience), former federal employee (Social Security Administration)",
  "hometown": "Lawrence, Kansas (Douglas County)",
  "religion": "Christian (per public records)",
  "family": "Has children (raised family in Lawrence)",
  "campaignWebsite": "https://www.laurenforkansas.com/",
  "issues": [
    {
      "id": "i-official-status",
      "title": "Official Filing and Ballot Status",
      "stated": {
        "text": "FEC lists Lauren Reinhold as a Democratic challenger for U.S. House Kansas District 1, candidate ID H6KS01203, with Lauren Reinhold for Kansas as her active principal campaign committee. Kansas SOS confirms U.S. House seats are up in 2026 and that national candidates file with the Secretary of State, but this pass could not directly read the live SOS candidate-list row.",
        "sourceIds": [
          "s-fec-candidate",
          "s-fec-committee",
          "s-fec-form-2",
          "s-fec-form-1",
          "s-sos-candidate-info",
          "s-sos-dates"
        ]
      },
      "actions": [
        {
          "id": "ae-official-1",
          "date": "2026-01-05",
          "body": "Filed FEC Statement of Candidacy for U.S. House Kansas District 1 as a Democratic candidate.",
          "sourceIds": [
            "s-fec-candidate",
            "s-fec-form-2"
          ]
        },
        {
          "id": "ae-official-2",
          "date": "2026-01-08",
          "body": "Lauren Reinhold for Kansas filed its FEC Statement of Organization as the principal campaign committee.",
          "sourceIds": [
            "s-fec-committee",
            "s-fec-form-1"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across the public set captured for Lauren Reinhold, the largest share of candidate-controlled posts is campaign activity: launch events, media appearances, fundraising, merchandise, and campaign-news amplification account for 13 of 27 captured items. The issue frame most often attached to that campaign activity is federal service and work. On January 6, 2026, she posted, \"It’s about time Kansas had a friend in...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-official-status"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "TRACEY MANN’S LARGEST DONORS AREN’T KANSAS FARMERS, TEACHERS, OR LOCAL SMALL BUSINESSES—THEY’RE CORPORATE PACS AND FOREIGN LOBBYISTS.\" (source). The January 6 launch post drew 5 likes and 3 reposts as of May 11, 2026 (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-mann-finance"
          ],
          "mappedToIssueId": "i-official-status"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "On national issues, Reinhold's captured feed addresses voting rules, presidential power, tariffs, federal service, and foreign policy. On April 2, she posted, \"Donald Trump signed an EO restricting mail-in voting, an ESSENTIAL option for voters who are parents/working/disabled/overseas. I support the DNC’s lawsuit to stop this. In Congress, I’ll fight to protect voting rights and defend states from federal...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-voting"
          ],
          "mappedToIssueId": "i-official-status"
        }
      ],
      "gap": {
        "summary": "Direct Kansas SOS candidate-list row and final certified ballot status remain unconfirmed before the June 1, 2026 filing deadline.",
        "evidenceIds": [
          "ae-official-1"
        ]
      }
    },
    {
      "id": "i-campaign-finance",
      "title": "Campaign Finance and Funding",
      "stated": {
        "text": "FEC Q1 2026 data shows $23,710.00 in total receipts, all from individual contributions, with no party committee contributions, other committee contributions, candidate contributions, or loans reported through March 31, 2026. The campaign reported $14,951.92 in disbursements and $8,758.08 cash on hand.",
        "sourceIds": [
          "s-fec-candidate",
          "s-fec-committee"
        ]
      },
      "actions": [
        {
          "id": "ae-finance-1",
          "date": "2026-03-31",
          "body": "Reported $23,710.00 in receipts, $14,951.92 in disbursements, and $8,758.08 ending cash on hand for Q1 2026.",
          "sourceIds": [
            "s-fec-candidate",
            "s-fec-committee"
          ]
        },
        {
          "id": "ae-finance-2",
          "date": "2026-03-31",
          "body": "Reported $16,875.00 in itemized individual contributions and $6,835.00 in unitemized individual contributions; reported $0.00 from party committees, other committees, candidate contributions, and loans.",
          "sourceIds": [
            "s-fec-candidate",
            "s-fec-committee"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-finance-1",
          "platform": "Bluesky",
          "observation": "Local harvest recorded a February 25, 2026 image post criticizing Tracey Mann's donor base; use as campaign rhetoric, not as verification of Mann's donor ledger.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-mann-finance"
          ],
          "mappedToIssueId": "i-campaign-finance"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "2026-02-25 — image-only post; visible image text: \"TRACEY MANN ANSWERS TO DONORS, NOT KANSAS. TRACEY MANN’S LARGEST DONORS AREN’T KANSAS FARMERS, TEACHERS, OR LOCAL SMALL BUSINESSES—THEY’RE CORPORATE PACS AND FOREIGN LOBBYISTS. WHEN YOUR TOP DONOR ISN’T EVEN FROM KANSAS, WHO ARE YOU REALLY WORKING FOR? www.laurenforkansas.com PAID FOR BY LAUREN REINHOLD FOR KANSAS\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-campaign-finance"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Campaign index text captured: \"Lauren Reinhold is a Kansan, attorney, former federal employee, and labor advocate running on a platform centered on affordability, prosperity, and sec...\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-campaign-finance"
        }
      ],
      "gap": {
        "summary": "Itemized donor names, employers, occupations, donor geography, and disbursement recipients were not captured because OpenFEC DEMO_KEY was rate-limited and static FEC pages did not expose transaction rows.",
        "evidenceIds": [
          "ae-finance-1"
        ]
      }
    },
    {
      "id": "i-rural-healthcare",
      "title": "Rural Healthcare",
      "stated": {
        "text": "Reinhold's campaign lists rebuilding rural healthcare as a priority, says rural hospitals are central to community safety and stability, and proposes a rural healthcare global-budgeting model in the Road to Prosperity plan.",
        "sourceIds": [
          "s-campaign-priorities",
          "s-campaign-prosperity",
          "s-campaign-voter-info",
          "s-campaign-oberlin"
        ]
      },
      "actions": [
        {
          "id": "ae-health-1",
          "date": "2026-05-19",
          "body": "Campaign priorities page listed Rebuilding Rural Healthcare as a priority.",
          "sourceIds": [
            "s-campaign-priorities"
          ]
        },
        {
          "id": "ae-health-2",
          "date": "2026-05-19",
          "body": "Road to Prosperity page proposed a rural healthcare global-budgeting model.",
          "sourceIds": [
            "s-campaign-prosperity"
          ]
        },
        {
          "id": "ae-health-3",
          "date": "2026-01-23",
          "body": "Campaign republication of Oberlin Herald interview included Reinhold statements linking Medicaid cuts to rural hospitals.",
          "sourceIds": [
            "s-campaign-oberlin"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Instagram",
          "observation": "Instagram: @laurenforkansas — 273 followers, 325 following, 67 posts; bio text: \"First Congressional District Fighting for KANSAS, not corporations. Rural Hospitals • Labor Rights ✨Your favorite candidate’s favorite candidate✨\" as of 2026-05-11 logged-out capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-rural-healthcare"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Quote captured: \"There's been a complicated series of cuts, mainly to Medicaid, that will affect rural hospitals,\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-rural-healthcare"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Quote captured: \"For rural farmers, I plan to fight for a modernized, stable market farm bill,\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-rural-healthcare"
        }
      ],
      "gap": {
        "summary": "No officeholder votes exist in the reviewed record, and no standalone Bluesky post specifically about rural hospitals was captured.",
        "evidenceIds": [
          "ae-health-1"
        ]
      }
    },
    {
      "id": "i-agriculture-rural-economy",
      "title": "Agriculture, Farm Bill, Tariffs, and Rural Economy",
      "stated": {
        "text": "The campaign says agriculture and rural economies should prioritize producers, family operations, small businesses, and rural infrastructure. Campaign materials call for a modernized stable farm bill, tariff authority returning to Congress, rural broadband, support for small and mid-sized farms, and rural grants.",
        "sourceIds": [
          "s-campaign-priorities",
          "s-campaign-prosperity",
          "s-campaign-oberlin",
          "s-campaign-cjonline"
        ]
      },
      "actions": [
        {
          "id": "ae-ag-1",
          "date": "2026-05-19",
          "body": "Campaign priorities page listed Supporting Agriculture and Rural Economies.",
          "sourceIds": [
            "s-campaign-priorities"
          ]
        },
        {
          "id": "ae-ag-2",
          "date": "2026-05-19",
          "body": "Road to Prosperity page proposed small-farm, broadband, clean-energy, rural healthcare, and federal-grant policies.",
          "sourceIds": [
            "s-campaign-prosperity"
          ]
        },
        {
          "id": "ae-ag-3",
          "date": "2026-01-23",
          "body": "Campaign republication of Oberlin Herald interview included statements on a modernized farm bill, tariffs, farmers, schools, and rural communities.",
          "sourceIds": [
            "s-campaign-oberlin"
          ]
        },
        {
          "id": "ae-ag-4",
          "date": "2026-03-15",
          "body": "Campaign republication of Topeka Capital-Journal coverage included statements on Congress reclaiming tariff authority and farm bill delay.",
          "sourceIds": [
            "s-campaign-cjonline"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-ag-1",
          "platform": "Bluesky",
          "observation": "March 5, 2026 Bluesky post linked the American Middle-Class Prosperity Tax Plan; current public API check recorded 4 likes, 2 reposts, 0 replies, and 0 quotes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-prosperity"
          ],
          "mappedToIssueId": "i-agriculture-rural-economy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Kansas Reflector",
          "observation": "Campaign index text captured: \"Recent reporting from the Kansas Reflector highlights growing interest in the 2026 congressional race in Kansas’ 1st District, including early organizing activity in Lawrence and conversations about how Democrats plan to compete in one of the largest and most rural districts in the country.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-agriculture-rural-economy"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Home page quote: \"I’m fighting for Kansas, not for big corporations or special interests. If anyone in Washington wants to push policies that hurt our farmers, our hospitals, our workers, or our towns, they’ll have to go through me first.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-agriculture-rural-economy"
        }
      ],
      "gap": {
        "summary": "Captured materials did not include candidate-controlled posts specifically about wheat prices, the Ogallala Aquifer, or water rights.",
        "evidenceIds": [
          "ae-ag-1"
        ]
      }
    },
    {
      "id": "i-workers-rights-labor",
      "title": "Workers' Rights and Labor",
      "stated": {
        "text": "Reinhold's campaign lists worker rights as a priority and her biography says she served as a federal union officer and NLRB investigator/election officer. The Road to Prosperity plan frames corporate-tax reform around companies that invest in workers.",
        "sourceIds": [
          "s-campaign-about",
          "s-campaign-priorities",
          "s-campaign-prosperity",
          "s-campaign-former-feds"
        ]
      },
      "actions": [
        {
          "id": "ae-labor-1",
          "date": "2026-05-19",
          "body": "Campaign biography listed service as a federal union officer and NLRB investigator/election officer.",
          "sourceIds": [
            "s-campaign-about"
          ]
        },
        {
          "id": "ae-labor-2",
          "date": "2026-05-19",
          "body": "Campaign priorities page listed Strengthening Worker's Rights.",
          "sourceIds": [
            "s-campaign-priorities"
          ]
        },
        {
          "id": "ae-labor-3",
          "date": "2026-05-19",
          "body": "Road to Prosperity page proposed rewarding companies that invest in worker training and domestic manufacturing.",
          "sourceIds": [
            "s-campaign-prosperity"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-labor-1",
          "platform": "Instagram",
          "observation": "Local harvest recorded campaign Instagram metadata with bio text referencing Rural Hospitals and Labor Rights; no full post corpus was captured.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-workers-rights-labor"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Priorities page topics: Rebuilding Rural Healthcare; Supporting Agriculture and Rural Economies; Strengthening Worker's Rights; Government Integrity and Reform; Worker-First Immigration Reform; Strengthening Social Security.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-workers-rights-labor"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "About page text: \"With more than 25 years of experience in public institutions—including her role as Attorney Advisor at the Social Security Administration —Lauren has dedicated her life helping families navigate federal systems, advocating for fair treatment of workers, and building efficient, people-centered government.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-workers-rights-labor"
        }
      ]
    },
    {
      "id": "i-government-integrity-federal-services",
      "title": "Government Integrity and Federal Services",
      "stated": {
        "text": "Government integrity and federal services are central to Reinhold's campaign materials. The campaign biography connects her candidacy to SSA and DOGE cuts, the priorities page lists government integrity, and campaign news frames former federal workers as candidates focused on public services, transparency, responsiveness, and worker rights.",
        "sourceIds": [
          "s-campaign-about",
          "s-campaign-priorities",
          "s-campaign-govexec",
          "s-campaign-former-feds",
          "s-campaign-cjonline"
        ]
      },
      "actions": [
        {
          "id": "ae-gov-1",
          "date": "2026-05-19",
          "body": "Campaign biography described SSA service and the campaign's DOGE-related origin.",
          "sourceIds": [
            "s-campaign-about"
          ]
        },
        {
          "id": "ae-gov-2",
          "date": "2026-05-19",
          "body": "Campaign priorities page listed Government Integrity and Reform.",
          "sourceIds": [
            "s-campaign-priorities"
          ]
        },
        {
          "id": "ae-gov-3",
          "date": "2026-04-28",
          "body": "Campaign republication of Government Executive quote discussed restoring trust in federal services.",
          "sourceIds": [
            "s-campaign-govexec"
          ]
        },
        {
          "id": "ae-gov-4",
          "date": "2026-03-15",
          "body": "Campaign republication of Topeka Capital-Journal coverage included statements on congressional tariff power, gridlock, and cutting through red tape.",
          "sourceIds": [
            "s-campaign-cjonline"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-gov-1",
          "platform": "Bluesky",
          "observation": "May 6, 2026 PBS NewsHour share about former federal workers and DOGE was the highest-engagement candidate-controlled Bluesky item in current API check: 7 likes, 2 reposts, 1 reply, and 0 quotes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-pbs"
          ],
          "mappedToIssueId": "i-government-integrity-federal-services"
        }
      ]
    },
    {
      "id": "i-immigration-border",
      "title": "Immigration and Border",
      "stated": {
        "text": "The campaign priorities page supports border security, a fair path to citizenship for people already contributing to communities, fixing backlogged courts, stabilizing the agricultural workforce, humane enforcement, and family dignity. Her campaign biography says she practiced immigration law in a legal clinic and private practice.",
        "sourceIds": [
          "s-campaign-priorities",
          "s-campaign-about",
          "s-campaign-cjonline"
        ]
      },
      "actions": [
        {
          "id": "ae-immigration-1",
          "date": "2026-05-19",
          "body": "Campaign priorities page listed Worker-First Immigration Reform.",
          "sourceIds": [
            "s-campaign-priorities"
          ]
        },
        {
          "id": "ae-immigration-2",
          "date": "2026-05-19",
          "body": "Campaign biography said Reinhold practiced immigration law in a legal clinic and private practice.",
          "sourceIds": [
            "s-campaign-about"
          ]
        },
        {
          "id": "ae-immigration-3",
          "date": "2026-03-15",
          "body": "Campaign republication of Topeka Capital-Journal coverage included a brief candidate statement comparing congressional delay on the farm bill and immigration.",
          "sourceIds": [
            "s-campaign-cjonline"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No standalone candidate-owned Bluesky post about immigration was captured.",
        "evidenceIds": [
          "ae-immigration-1"
        ]
      }
    },
    {
      "id": "i-social-security-benefits",
      "title": "Social Security and Benefits Administration",
      "stated": {
        "text": "Reinhold's campaign biography emphasizes SSA and benefits-related work, the priorities page lists strengthening Social Security, and Road to Prosperity proposes Social Security tax changes for high-earning households plus a $200 monthly benefit increase.",
        "sourceIds": [
          "s-campaign-about",
          "s-campaign-priorities",
          "s-campaign-prosperity"
        ]
      },
      "actions": [
        {
          "id": "ae-ss-1",
          "date": "2026-05-19",
          "body": "Campaign biography listed Attorney Advisor work at SSA and advocacy for disabled Kansans seeking Social Security and Medicare benefits.",
          "sourceIds": [
            "s-campaign-about"
          ]
        },
        {
          "id": "ae-ss-2",
          "date": "2026-05-19",
          "body": "Campaign priorities page listed Strengthening Social Security.",
          "sourceIds": [
            "s-campaign-priorities"
          ]
        },
        {
          "id": "ae-ss-3",
          "date": "2026-05-19",
          "body": "Road to Prosperity page proposed applying Social Security tax to some high-earner investment/business income and increasing monthly benefits by $200.",
          "sourceIds": [
            "s-campaign-prosperity"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-taxes-affordability",
      "title": "Taxes, Affordability, and Middle-Class Prosperity",
      "stated": {
        "text": "The campaign's Road to Prosperity page proposes middle-class tax relief, expanded deductions, payroll tax offsets for households under $125,000, tax changes for very high earners and large capital gains, and corporate tax reforms tied to worker investment.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-prosperity",
          "s-bsky-prosperity"
        ]
      },
      "actions": [
        {
          "id": "ae-tax-1",
          "date": "2026-05-19",
          "body": "Road to Prosperity page presented the American Middle-Class Prosperity Tax Plan.",
          "sourceIds": [
            "s-campaign-prosperity"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-ae-tax-2",
          "platform": "Bluesky",
          "observation": "Candidate linked the tax plan on Bluesky.",
          "observedAt": "2026-03-05",
          "sourceIds": [
            "s-bsky-prosperity"
          ],
          "mappedToIssueId": "i-taxes-affordability"
        },
        {
          "id": "ss-tax-1",
          "platform": "Bluesky",
          "observation": "March 5, 2026 tax-plan post had 4 likes, 2 reposts, 0 replies, and 0 quotes in the current public API check.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-prosperity"
          ],
          "mappedToIssueId": "i-taxes-affordability"
        }
      ]
    },
    {
      "id": "i-voting-election-administration",
      "title": "Voting Access and Election Administration",
      "stated": {
        "text": "The only candidate-controlled statement found in this pass was an April 2, 2026 Bluesky post supporting the DNC lawsuit against a Trump executive order on mail-in voting and saying she would protect voting rights and states from federal overreach. No detailed campaign website voting-policy plank was found.",
        "sourceIds": [
          "s-bsky-voting"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-ae-voting-1",
          "platform": "Bluesky",
          "observation": "Posted support for the DNC lawsuit against a Trump mail-in voting executive order.",
          "observedAt": "2026-04-02",
          "sourceIds": [
            "s-bsky-voting"
          ],
          "mappedToIssueId": "i-voting-election-administration"
        },
        {
          "id": "ss-voting-1",
          "platform": "Bluesky",
          "observation": "April 2, 2026 voting post had 3 likes, 3 reposts, 2 replies, and 0 quotes in the current public API check.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-voting"
          ],
          "mappedToIssueId": "i-voting-election-administration"
        }
      ]
    },
    {
      "id": "i-lgbtq-policy",
      "title": "Marriage, Family, and LGBTQ Policy",
      "stated": {
        "text": "No candidate-owned campaign issue plank on marriage, family, or LGBTQ policy was found in reviewed campaign pages. A Bluesky repost of a Kansas Reflector post about transgender Kansans is a social signal only and should not be expanded into a full policy position.",
        "sourceIds": [
          "s-bsky-kansas-reflector-repost"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-lgbtq-1",
          "platform": "Bluesky",
          "observation": "Local harvest recorded a February 28, 2026 repost of a Kansas Reflector post about transgender Kansans.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-kansas-reflector-repost"
          ],
          "mappedToIssueId": "i-lgbtq-policy"
        }
      ],
      "gap": {
        "summary": "No candidate-owned policy page, interview answer, vote, or detailed statement on marriage, family, or LGBTQ policy was found.",
        "evidenceIds": [
          "ss-lgbtq-1"
        ]
      }
    },
    {
      "id": "i-explicit-no-finding-issues",
      "title": "Topics Without Candidate-Controlled Findings",
      "stated": {
        "text": "No candidate-controlled statement or action evidence was found in reviewed materials on abortion / sanctity of life, guns / Second Amendment, religious liberty, school choice or vouchers, marijuana / drug policy, death penalty, foster care, adoption, Fort Riley, Fort Hays State University, or the Ogallala Aquifer / water rights. This page should not infer positions from party label, social follows, reposts, faith descriptions, geography, or associations.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-about",
          "s-campaign-priorities",
          "s-campaign-prosperity"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Some records describe Reinhold as Christian, but no congregation or church website was documented in the accessible material.",
  "sources": [
    {
      "id": "s-fec-candidate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS01203/?cycle=2026",
      "title": "REINHOLD, LAUREN - Candidate overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reinhold is listed as a Democratic candidate for U.S. House Kansas District 1, candidate ID H6KS01203.",
        "FEC lists the candidate as a challenger.",
        "Statement of Candidacy was filed January 5, 2026.",
        "Coverage through March 31, 2026 shows $23,710.00 receipts, $14,951.92 disbursements, and $8,758.08 ending cash on hand."
      ]
    },
    {
      "id": "s-fec-committee",
      "tier": "primary",
      "url": "https://www.fec.gov/data/committee/C00932855/?cycle=2026",
      "title": "LAUREN REINHOLD FOR KANSAS - committee overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Lauren Reinhold for Kansas is an active quarterly House principal campaign committee.",
        "Committee ID is C00932855.",
        "Registration date is January 5, 2026.",
        "Treasurer is Tim Metz.",
        "Committee had $23,710.00 total receipts and $8,758.08 ending cash on hand through March 31, 2026."
      ]
    },
    {
      "id": "s-fec-form-2",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/673/202601059793904673/202601059793904673.pdf",
      "title": "FEC Form 2 - Statement of Candidacy",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Form 2 names Lauren Reinhold as a Democratic House candidate in Kansas District 01 for the 2026 election.",
        "Form 2 designates Lauren Reinhold for Kansas as principal campaign committee."
      ]
    },
    {
      "id": "s-fec-form-1",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/794/202601089793921794/202601089793921794.pdf",
      "title": "FEC Form 1 - Statement of Organization",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Form 1 lists Lauren Reinhold for Kansas as principal campaign committee.",
        "Form 1 lists committee address, website, treasurer Tim Metz, and candidate Lauren Reinhold."
      ]
    },
    {
      "id": "s-sos-candidate-info",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "National, state, legislative, and judicial candidates file with the Secretary of State.",
        "A candidate is not considered filed until petition or declaration and fee is received.",
        "Primary filing deadline is noon Monday, June 1, 2026.",
        "All four U.S. Representatives are among the offices to be elected in 2026."
      ]
    },
    {
      "id": "s-sos-dates",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Important Election Dates",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026 candidate filing deadline is noon June 1, 2026.",
        "2026 primary election is August 4, 2026.",
        "2026 general election is November 3, 2026."
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/",
      "title": "Lauren Reinhold for Congress - Kansas' Big First",
      "publisher": "Lauren Reinhold for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign homepage links X, LinkedIn, TikTok, Facebook, Instagram, Bluesky, ActBlue, events, news, and voter-info pages.",
        "Homepage frames the campaign around rural economic recovery, working families, and corporate donors.",
        "Homepage lists rural healthcare, agriculture, worker rights, government integrity, immigration, and Social Security priorities.",
        "Homepage says Reinhold traveled to Hays, Dodge City, Salina, Hutchinson, and rural towns before announcing."
      ]
    },
    {
      "id": "s-campaign-about",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/about",
      "title": "Meet Lauren",
      "publisher": "Lauren Reinhold for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign biography says Reinhold has been a Kansan for 32 years and an attorney for 28 years.",
        "Campaign biography says she was an Attorney Advisor at the Social Security Administration.",
        "Campaign biography says she served as a federal union officer.",
        "Campaign biography says she served as an investigator and election officer for the National Labor Relations Board.",
        "Campaign biography says she represented low-income Kansans and practiced immigration law."
      ]
    },
    {
      "id": "s-campaign-priorities",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/priorities",
      "title": "Priorities",
      "publisher": "Lauren Reinhold for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Priorities page lists rural healthcare, agriculture, worker rights, government integrity, worker-first immigration reform, and Social Security.",
        "Immigration plank supports border security, fair path to citizenship, fixing backlogged courts, stabilizing agricultural workforce, humane enforcement, and family dignity."
      ]
    },
    {
      "id": "s-campaign-prosperity",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/prosperity",
      "title": "Road to Prosperity",
      "publisher": "Lauren Reinhold for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Road to Prosperity page lays out the American Middle-Class Prosperity Tax Plan.",
        "Page proposes Social Security tax changes for high-earning households and a $200 monthly benefit increase.",
        "Page proposes rural economic policies on small farms, broadband, clean energy, rural healthcare global budgeting, and federal rural grants."
      ]
    },
    {
      "id": "s-campaign-voter-info",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/voter-info",
      "title": "Voter Info",
      "publisher": "Lauren Reinhold for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Voter-info page describes KS-01 district geography and mentions agriculture, energy, manufacturing, transportation, rural hospitals, farms, infrastructure, roads, broadband, and water systems."
      ]
    },
    {
      "id": "s-campaign-oberlin",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/post/the-big-first-district-has-new-democrat-candidate",
      "title": "The Big First District has new Democrat candidate",
      "publisher": "Lauren Reinhold for Kansas campaign / Oberlin Herald republication",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign republication includes interview statements on Medicaid cuts and rural hospitals.",
        "Campaign republication includes interview statements on a modernized, stable farm bill, tariffs, schools, and federal cuts."
      ]
    },
    {
      "id": "s-campaign-cjonline",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/post/our-campaign-was-featured-in-the-topeka-capitol-journal-march-12-2026",
      "title": "Our Campaign was featured in the Topeka Capitol-Journal March 12, 2026",
      "publisher": "Lauren Reinhold for Kansas campaign / Topeka Capital-Journal republication",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign republication includes Reinhold statements on congressional tariff power, farm bill delay, immigration, and public service."
      ]
    },
    {
      "id": "s-campaign-govexec",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/post/lauren-s-congressional-campaign-is-featured-in-gov-exec",
      "title": "Lauren's Congressional Campaign is Featured in Gov Exec",
      "publisher": "Lauren Reinhold for Kansas campaign / Government Executive republication",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign republication includes Reinhold quote on restoring trust in federal services."
      ]
    },
    {
      "id": "s-campaign-former-feds",
      "tier": "primary",
      "url": "https://www.laurenforkansas.com/post/lauren-is-proud-to-join-other-former-feds-running-for-public-office",
      "title": "Lauren is Proud to Join Other Former Feds Running for Public Office",
      "publisher": "Lauren Reinhold for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign post connects former federal employees to public services, government responsiveness, worker rights, and government serving people rather than corporations."
      ]
    },
    {
      "id": "s-bsky-profile",
      "tier": "social",
      "url": "https://bsky.app/profile/laurenforkansas.bsky.social",
      "title": "@laurenforkansas.bsky.social",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Current public API check recorded 247 followers, 153 follows, and 16 posts.",
        "Profile says Kansas First District and running for Congress 2026."
      ]
    },
    {
      "id": "s-bsky-pbs",
      "tier": "social",
      "url": "https://bsky.app/profile/laurenforkansas.bsky.social/post/3ml5n7qmjhk2s",
      "title": "PBS NewsHour share",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reinhold shared a PBS NewsHour appearance about former federal workers and DOGE.",
        "Current public API check recorded 7 likes, 2 reposts, 1 reply, and 0 quotes."
      ]
    },
    {
      "id": "s-bsky-voting",
      "tier": "social",
      "url": "https://bsky.app/profile/laurenforkansas.bsky.social/post/3mik6e53p322h",
      "title": "Mail-in voting post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reinhold posted support for the DNC lawsuit against a Trump mail-in voting executive order.",
        "Current public API check recorded 3 likes, 3 reposts, 2 replies, and 0 quotes.",
        "Observed public online activity mapped to Official Filing and Ballot Status."
      ]
    },
    {
      "id": "s-bsky-prosperity",
      "tier": "social",
      "url": "https://bsky.app/profile/laurenforkansas.bsky.social/post/3mgdqf2wnxc2p",
      "title": "Prosperity Tax Plan post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reinhold linked the American Middle-Class Prosperity Tax Plan.",
        "Current public API check recorded 4 likes, 2 reposts, 0 replies, and 0 quotes."
      ]
    },
    {
      "id": "s-bsky-mann-finance",
      "tier": "social",
      "url": "https://bsky.app/profile/laurenforkansas.bsky.social/post/3mfp3jxxkis23",
      "title": "Tracey Mann donor image post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Local harvest recorded a candidate-controlled image post criticizing Tracey Mann's donor base.",
        "Local harvest recorded 7 likes, 3 reposts, and 0 replies as of 2026-05-11.",
        "Observed public online activity mapped to Official Filing and Ballot Status."
      ]
    },
    {
      "id": "s-bsky-kansas-reflector-repost",
      "tier": "social",
      "url": "https://bsky.app/profile/kansasreflector.com/post/3mfwvwu4gh223",
      "title": "Kansas Reflector transgender Kansans repost",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Local harvest recorded Reinhold reposting a Kansas Reflector post about transgender Kansans."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://www.instagram.com/laurenforkansas/",
      "title": "Instagram / Instagram",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Rural Healthcare.",
        "Instagram: @laurenforkansas — 273 followers, 325 following, 67 posts; bio text: \"First Congressional District Fighting for KANSAS, not corporations. Rural Hospitals • Labor Rights "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(LAUREN_REINHOLD_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[lauren-reinhold.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
