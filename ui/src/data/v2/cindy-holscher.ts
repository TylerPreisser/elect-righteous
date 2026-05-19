/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CINDY_HOLSCHER_V2: CandidateFullV2 = {
  "slug": "cindy-holscher",
  "name": "Cindy Holscher",
  "party": "D",
  "position": "Kansas Governor",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Kansas Senate District 8; Senate Minority Whip",
  "campaignWebsite": "https://cindyforkansas.com/",
  "issues": [
    {
      "id": "education-public-schools-vouchers",
      "title": "Public Education, School Funding, and Vouchers",
      "stated": {
        "text": "Holscher's campaign biography and priorities make public education a central issue: the campaign cites her 2016 school-funding walks, says she helped reverse Brownback-era school cuts, calls for fully funding general and special education, and opposes vouchers.",
        "sourceIds": [
          "s-campaign-about",
          "s-campaign-priorities",
          "s-campaign-lower-costs",
          "s-bsky-education-2025"
        ]
      },
      "actions": [
        {
          "id": "edu-action-sb142",
          "date": "2025-02-03",
          "body": "Sponsored SB 142, authorizing each school district to include a teacher representative as a nonvoting member of the board of education.",
          "sourceIds": [
            "s-ksleg-sb142"
          ]
        },
        {
          "id": "edu-action-service",
          "date": "2026-05-19",
          "body": "Kansas Legislature confirms Holscher's House service from 2017-2020 and Senate service from 2021-present, matching the period the campaign cites for Brownback-era school-finance work.",
          "sourceIds": [
            "s-ksleg-member",
            "s-campaign-about"
          ]
        },
        {
          "id": "edu-action-sb47",
          "date": "2025-02-19",
          "body": "Voted nay on SB 47, a school-board governance bill authorizing local board-member agenda powers and public interaction changes.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "edu-social-bluesky-topic-share",
          "platform": "Bluesky",
          "observation": "Local harvest coded public education, school funding, special education, teachers, vouchers, students, and Department of Education cuts as 77 of 431 original Bluesky posts, or 18%.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "education-public-schools-vouchers"
        },
        {
          "id": "edu-social-post",
          "platform": "Bluesky",
          "observation": "October 29, 2025 post discussed public education, school funding, vouchers, and children.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-education-2025"
          ],
          "mappedToIssueId": "education-public-schools-vouchers"
        },
        {
          "id": "ss-crossref-3",
          "platform": "cindyforkansas.com",
          "observation": "Campaign website: cindyforkansas.com -- active. The site frames the campaign around \"Real Solutions for Real Kansans,\" affordability, public schools, healthcare, working families, housing, Medicaid expansion, medical marijuana, and election reform (about, priorities).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "education-public-schools-vouchers"
        }
      ],
      "gap": {
        "summary": "The education position is well-supported, but this pass did not capture committee testimony or floor-speech transcripts for SB 142.",
        "evidenceIds": [
          "edu-action-sb142"
        ]
      }
    },
    {
      "id": "affordability-taxes-labor-housing",
      "title": "Affordability, Taxes, Labor, and Housing",
      "stated": {
        "text": "The campaign's lower-costs agenda proposes raising the minimum wage, paid sick time, repeal of right-to-work, property-tax relief, free school lunches, tax relief on essential products, housing-security measures, and a property-tax task force.",
        "sourceIds": [
          "s-campaign-priorities",
          "s-campaign-lower-costs"
        ]
      },
      "actions": [
        {
          "id": "affordability-action-sb69",
          "date": "2025-03-19",
          "body": "Voted yea on SB 69, extending rural opportunity zone benefits and adding down-payment assistance and childcare reimbursement options.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "affordability-action-hb2231",
          "date": "2025-03-19",
          "body": "Voted yea on HB 2231, a package including income-tax and homestead/property-tax changes for head-of-household filers, seniors, and disabled veterans.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "affordability-action-platform-release",
          "date": "2026-02-03",
          "body": "Released the Common Sense and Lower Costs agenda at the Kansas State Capitol.",
          "sourceIds": [
            "s-campaign-lower-costs"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "affordability-social-topic-share",
          "platform": "Bluesky",
          "observation": "Local harvest coded cost of living, agriculture, tariffs, food assistance, housing, taxes, and household economics as 76 of 431 original Bluesky posts, or 18%.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "affordability-taxes-labor-housing"
        },
        {
          "id": "affordability-social-union",
          "platform": "Bluesky",
          "observation": "The highest-like original Bluesky post in the local capture discussed union workers, fair wages, and safe working conditions, with 16 likes and 4 reposts at capture.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "affordability-taxes-labor-housing"
        },
        {
          "id": "ss-crossref-3",
          "platform": "cindyforkansas.com",
          "observation": "Campaign news page: cindyforkansas.com/news -- active; visible releases through April 29, 2026, including voting-rights, CoreCivic, legislative-session, cell-phone-ban, ICE detention, Chiefs stadium, lower-costs agenda, polling, health-care, and redistricting items.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-news"
          ],
          "mappedToIssueId": "affordability-taxes-labor-housing"
        }
      ],
      "gap": {
        "summary": "The agenda is broad; not every plank was matched to a specific 2026 bill number in this pass.",
        "evidenceIds": [
          "affordability-action-sb69"
        ]
      }
    },
    {
      "id": "healthcare-medicaid-reproductive-care",
      "title": "Healthcare, Medicaid, Rural Hospitals, and Reproductive Care",
      "stated": {
        "text": "Campaign priorities support Medicaid expansion, healthcare affordability, and shoring up rural hospitals. Forum coverage reported Holscher supported reproductive healthcare access.",
        "sourceIds": [
          "s-campaign-priorities",
          "s-campaign-lower-costs",
          "s-kansas-reflector-debate",
          "s-kmuw-corecivic-forum"
        ]
      },
      "actions": [
        {
          "id": "health-action-committee",
          "date": "2026-05-19",
          "body": "Kansas Legislature lists Holscher as ranking minority member on Public Health and Welfare.",
          "sourceIds": [
            "s-ksleg-member"
          ]
        },
        {
          "id": "health-action-sb67",
          "date": "2025-02-19",
          "body": "Voted yea on SB 67, authorizing registered nurse anesthetists to prescribe, procure, and administer drugs consistent with qualifications.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "health-action-sb29",
          "date": "2025-02-19",
          "body": "Voted nay on SB 29, which removed local health officers' authority to prohibit public gatherings when necessary for contagious-disease control.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "health-action-hb2062",
          "date": "2025-03-12",
          "body": "Voted nay on HB 2062, concerning child support orders for unborn children and unborn/stillborn income-tax exemptions.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "health-social-aca",
          "platform": "Bluesky",
          "observation": "January 8, 2026 post addressed rising healthcare costs and extension of ACA subsidies.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-aca-2026"
          ],
          "mappedToIssueId": "healthcare-medicaid-reproductive-care"
        },
        {
          "id": "health-social-topic-share",
          "platform": "Bluesky",
          "observation": "Local harvest coded healthcare, Medicaid, ACA subsidies, hospitals, disability services, mental health, vaccines, and federal health agencies as 50 of 431 original posts, or 12%.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "healthcare-medicaid-reproductive-care"
        },
        {
          "id": "ss-crossref-3",
          "platform": "cindyforkansas.com",
          "observation": "The news page shows campaign press activity through April 29, 2026. The latest visible items focused on voting rights, CoreCivic, the legislative session, cell-phone policy, ICE detention, the Chiefs stadium deal, lower costs, polling, working-family affordability, redistricting, and ACA costs.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-news"
          ],
          "mappedToIssueId": "healthcare-medicaid-reproductive-care"
        }
      ],
      "gap": {
        "summary": "Reproductive healthcare is supported by forum coverage and vote evidence, but abortion was not a high-frequency original Bluesky topic in the measured local harvest.",
        "evidenceIds": [
          "health-action-committee"
        ]
      }
    },
    {
      "id": "democracy-elections-redistricting-campaign-finance",
      "title": "Democracy, Elections, Redistricting, and Money in Politics",
      "stated": {
        "text": "The campaign calls for an independent redistricting panel, a ban on mid-decade redistricting, term limits, and limits on corporate PAC money.",
        "sourceIds": [
          "s-campaign-priorities",
          "s-campaign-lower-costs"
        ]
      },
      "actions": [
        {
          "id": "democracy-action-sb136",
          "date": "2025-01-31",
          "body": "Sponsored SB 136, limiting independent-expenditure political committee contributions and adding accounting, reporting, and audit requirements.",
          "sourceIds": [
            "s-ksleg-sb136"
          ]
        },
        {
          "id": "democracy-action-sb143",
          "date": "2025-02-03",
          "body": "Sponsored SB 143, imposing legislative term limits with additional terms conditioned on primary-election support.",
          "sourceIds": [
            "s-ksleg-sb143"
          ]
        },
        {
          "id": "democracy-action-sb4",
          "date": "2025-02-05",
          "body": "Voted nay on SB 4, requiring advance voting ballots to be returned by 7:00 p.m. on election day; also voted nay on concurrence and veto override entries.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "democracy-action-sb5",
          "date": "2025-02-11",
          "body": "Voted nay on SB 5, restricting use of federal funds for elections/election-related activities unless approved by the Legislature; also voted nay on concurrence and override entries.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "democracy-social-topic-share",
          "platform": "Bluesky",
          "observation": "Local harvest coded democracy, redistricting, courts, voting, elections, privacy, and election officials as 35 of 431 original posts, or 8%.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "democracy-elections-redistricting-campaign-finance"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Kansas Reflector",
          "observation": "KMUW / Kansas Reflector coverage of an April 26, 2026 forum reported that Holscher cast herself as the anti-establishment Democrat, criticized Republican \"culture war\" bills, attacked CoreCivic-linked donations to her opponent, said she had never taken CoreCivic money and never would, supported making voting easier and reproductive health care access, and described a coalition of nurses, teachers, neighbors,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kmuw-corecivic-forum"
          ],
          "mappedToIssueId": "democracy-elections-redistricting-campaign-finance"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Democracy, redistricting, courts, voting, elections, privacy, and Kansas election officials: 35 posts (8%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "democracy-elections-redistricting-campaign-finance"
        }
      ],
      "gap": {
        "summary": "The official SOS candidate-list row remains blocked; do not use that blocker as evidence for or against the campaign's election-administration claims.",
        "evidenceIds": [
          "democracy-action-sb136"
        ]
      }
    },
    {
      "id": "immigration-corecivic-private-detention",
      "title": "Immigration, CoreCivic, and Private Detention",
      "stated": {
        "text": "Campaign news and social posts oppose the Leavenworth CoreCivic/ICE detention project and present CoreCivic money as a campaign-finance issue. This pass did not find a broader candidate-controlled immigration platform.",
        "sourceIds": [
          "s-campaign-news",
          "s-bsky-corecivic",
          "s-kansas-reflector-corecivic-forum",
          "s-kmuw-corecivic-forum"
        ]
      },
      "actions": [
        {
          "id": "immigration-action-hb2020",
          "date": "2025-03-19",
          "body": "Voted nay on HB 2020, requiring quarterly reports listing certain noncitizens issued Kansas driver's licenses.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "immigration-action-campaign-releases",
          "date": "2026-03-10",
          "body": "Campaign news page lists March 2026 releases urging rejection of the ICE detention center and criticizing the Leavenworth/CoreCivic decision.",
          "sourceIds": [
            "s-campaign-news"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "immigration-social-corecivic",
          "platform": "Bluesky",
          "observation": "March 20, 2026 CoreCivic money post had 4 likes, 1 repost, 1 reply, and 0 quotes at API readback.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-corecivic"
          ],
          "mappedToIssueId": "immigration-corecivic-private-detention"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Federal/national politics, Trump/Musk administration, immigration/ICE, war, and national Republican figures: 24 posts (6%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "immigration-corecivic-private-detention"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Civil rights, LGBTQ policy, immigration/migrant care, religious-community references, political violence, and innocence/public-safety topics not already captured above: 6 posts (1%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "immigration-corecivic-private-detention"
        }
      ],
      "gap": {
        "summary": "A literal text search of the 2025 KPDC report found no CoreCivic/Core Civic match, but this is not a full affiliate, executive, lobbyist, or employee-donor audit.",
        "evidenceIds": [
          "immigration-action-hb2020"
        ]
      }
    },
    {
      "id": "marriage-family-lgbtq-policy",
      "title": "Marriage, Family, and LGBTQ Policy",
      "stated": {
        "text": "No candidate-controlled marriage-specific plank was found. LGBTQ-related evidence in this pass comes from official vote records rather than a dedicated campaign page.",
        "sourceIds": [
          "s-ksleg-vote-2025"
        ]
      },
      "actions": [
        {
          "id": "lgbtq-action-sb63",
          "date": "2025-01-29",
          "body": "Voted nay on SB 63, restricting gender-transition care for minors and related public funding/provider discipline provisions; also voted nay on the override entry.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "lgbtq-action-sb76",
          "date": "2025-02-19",
          "body": "Voted nay on SB 76, requiring school employees to use names/pronouns consistent with a student's biological sex and birth certificate and creating a cause of action.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Marriage, family, and LGBTQ policy: Vote record shows Holscher voted nay on SB 63, the 2025 gender-transition-care restriction bill, and nay on SB 76, the school name/pronoun bill. No candidate-controlled marriage-specific plank was found.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "marriage-family-lgbtq-policy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Manual local coding of 431 original Bluesky posts found top categories: campaign events/positioning (83 posts, 19%); public education (77, 18%); cost of living/agriculture/tariffs/food/housing/taxes (76, 18%); healthcare (50, 12%); democracy/redistricting/courts/voting/elections/privacy (35, 8%); federal/national politics/immigration/war/national figures (24, 6%); labor (4, 1%); civil...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "marriage-family-lgbtq-policy"
        }
      ],
      "gap": {
        "summary": "Do not infer a marriage-policy position from party label or LGBTQ-related votes.",
        "evidenceIds": [
          "lgbtq-action-sb63"
        ]
      }
    },
    {
      "id": "guns-second-amendment-public-safety",
      "title": "Guns, Second Amendment, and Public Safety",
      "stated": {
        "text": "No candidate-controlled gun-policy plank was found in reviewed campaign pages, campaign news, or the measured Bluesky corpus.",
        "sourceIds": [
          "s-campaign-priorities",
          "s-campaign-news",
          "s-bsky-profile"
        ]
      },
      "actions": [
        {
          "id": "safety-action-sb71",
          "date": "2025-02-19",
          "body": "Voted yea on SB 71, increasing penalties for buying sexual relations and requiring educational or treatment programs.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "safety-action-hb2479",
          "date": "2026-03-10",
          "body": "Voted yea on HB 2479, a domestic-violence/stalking/protective-order and privacy-crime package.",
          "sourceIds": [
            "s-ksleg-hb2479-rollcall"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "The captured Bluesky feed strongly features education, affordability, healthcare, redistricting, tariffs/agriculture, and campaign outreach. It contains less sustained original discussion of gun policy, water policy/Ogallala depletion, abortion policy after launch, or detailed state-budget mechanics than the website priorities and news coverage do.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "guns-second-amendment-public-safety"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "The captured record has notable gaps. The Bluesky feed and campaign pages give much more attention to schools, affordability, healthcare, labor, redistricting, and federal cuts than to gun policy, water policy, the Ogallala Aquifer, or detailed state-budget mechanics (harvest).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "guns-second-amendment-public-safety"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Guns / Second Amendment: No candidate-controlled gun-policy plank was found in reviewed campaign pages or the measured Bluesky corpus. Vote record includes many public-safety votes, but no clean, candidate-stated gun-policy issue card was confirmed in this pass.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "guns-second-amendment-public-safety"
        }
      ],
      "gap": {
        "summary": "Public-safety voting exists, but a gun-policy issue card should remain cautious until a candidate-controlled statement or clear firearm-specific voting evidence is added.",
        "evidenceIds": [
          "safety-action-sb71"
        ]
      }
    },
    {
      "id": "agriculture-rural-economy-tariffs-water",
      "title": "Agriculture, Rural Economy, Tariffs, and Water",
      "stated": {
        "text": "The campaign biography emphasizes Holscher's farm upbringing, and campaign/social/news evidence connects her rural-economy message to tariffs, crop prices, rural hospitals, and cost pressure.",
        "sourceIds": [
          "s-campaign-about",
          "s-kansas-reflector-debate",
          "s-bsky-tariffs-2025"
        ]
      },
      "actions": [
        {
          "id": "ag-action-sb36",
          "date": "2025-02-11",
          "body": "Voted yea on SB 36, increasing caps and matching support for conservation districts.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ag-action-sb69",
          "date": "2025-03-19",
          "body": "Voted yea on SB 69, extending rural opportunity zone eligibility and adding benefit options.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ag-social-tariffs",
          "platform": "Bluesky",
          "observation": "September 10, 2025 post criticized tariff effects on Kansas crop economics.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-tariffs-2025"
          ],
          "mappedToIssueId": "agriculture-rural-economy-tariffs-water"
        }
      ],
      "gap": {
        "summary": "No sustained water-policy or Ogallala Aquifer platform was confirmed.",
        "evidenceIds": [
          "ag-action-sb36"
        ]
      }
    },
    {
      "id": "medical-marijuana-drug-policy",
      "title": "Medical Marijuana and Drug Policy",
      "stated": {
        "text": "Campaign priorities support legalizing medical marijuana, link it to treatment access and special-education revenue, and call for studying effects of recreational legalization in neighboring states.",
        "sourceIds": [
          "s-campaign-priorities",
          "s-campaign-lower-costs"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "religious-liberty-faith-public-life",
      "title": "Religious Liberty, Faith, and Public Life",
      "stated": {
        "text": "No current church affiliation or religious-liberty policy plank was confirmed in reviewed public sources.",
        "sourceIds": [
          "s-campaign-about",
          "s-bsky-profile"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "faith-social-occasional",
          "platform": "Bluesky",
          "observation": "Local harvest found occasional faith or religious-community references, but not a biographical church affiliation or religious-liberty policy statement.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "religious-liberty-faith-public-life"
        }
      ],
      "gap": {
        "summary": "Do not infer faith belief, church membership, or religious-liberty position from holiday posts, campaign-event locations, or issue commentary.",
        "evidenceIds": [
          "faith-social-occasional"
        ]
      }
    }
  ],
  "recordSummary": "Kansas Senate District 8; Senate Minority Whip",
  "ownWordsNarrative": "summary: Public social evidence is strongest on Bluesky. Local harvest and fresh API read show an active but modest-engagement campaign feed centered on education, affordability, healthcare, redistricting/democracy, agriculture/tariffs, and campaign outreach.; platformsChecked: Campaign website; Campaign news page; Linktree; Bluesky; Facebook; Instagram; TikTok; X / Twitter; Threads; YouTube; LinkedIn; Truth Social; Gab; Gettr; Substack; Reddit; measuredCorpus: sourceIds: s-bsky-profile; notes: Local harvest captured 596 Bluesky feed items, including 431 original posts and 165 replies, from February 24, 2025 through March 20, 2026.; Fresh May 19, 2026 API read added May 14 running-mate post and May 19 southwest Kansas wildfire post.; Facebook, Instagram, TikTok, X, and Threads were linked/confirmed but did not expose reliable logged-out post-level datasets.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "sourceIds: s-kpdc-statewide-2026; s-kpdc-treasurer; s-kpdc-202601; reportingPeriod: 2025-01-01 through 2025-12-31; filed: 2026-01-13; totalRaised: $397,952.07; totalSpent: $218,060.34; cashOnHand: $179,891.73; inKind: $2,949.82; otherTransactions: $0.00; treasurer: Lynn Rogers",
    "narrative": "sourceIds: s-kpdc-statewide-2026; s-kpdc-treasurer; s-kpdc-202601; reportingPeriod: 2025-01-01 through 2025-12-31; filed: 2026-01-13; totalRaised: $397,952.07; totalSpent: $218,060.34; cashOnHand: $179,891.73; inKind: $2,949.82; otherTransactions: $0.00; treasurer: Lynn Rogers",
    "donors": [],
    "undisclosed": "Visible Schedule A examples include Thomas Adrian ($500), Quinta Avance ($50), Elizabeth Bishop ($100), Archie Blumhorst ($250 and later entries), Rick Blumhorst (multiple entries), Ross Boelling ($200 and later entries), and William Bradley ($500).; Visible PAC names in PDF text extraction include AT&T Kansas PAC, Kansas Bankers Association PAC State, and Kansas Anesthesiologist Assistant PAC; verify exact amounts from the original PDF before publishing PAC-specific amounts.; Literal PDF text search found no CoreCivic/Core Civic match; this is not a full affiliate or executive-donor audit.",
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Candidate v2 issue file"
  },
  "sources": [
    {
      "id": "s-ksleg-member",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/legislators/sen_holscher_cindy_1/",
      "title": "Cindy Holscher - Kansas Legislature",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Holscher represents Senate District 8, Johnson County",
        "She is a Democrat and Senate Minority Whip",
        "House service is listed as 2017-2020 and Senate service as 2021-Present",
        "Committee roles include ranking minority member on Government Efficiency and Public Health and Welfare"
      ]
    },
    {
      "id": "s-ksleg-vote-2025",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/vote-record/sen_holscher_cindy_1/2025/",
      "title": "Senate Voting - Holscher 2025",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Holscher's official 2025 Senate vote record",
        "Includes votes on election administration, public health, education, LGBTQ policy, reproductive-care-adjacent legislation, public assistance, taxes, and public safety"
      ]
    },
    {
      "id": "s-ksleg-hb2479-rollcall",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/vote/?apn=b2025_26%2Fyear2%2Fsenate%2Flegislative_days%2Fday039_20260310%2Fvote_records%2Fvote_138_HB2479.odt",
      "title": "Roll Call #138 - HB 2479",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "March 10, 2026 Senate roll call shows Holscher voted yea on HB 2479",
        "HB 2479 concerned electronic monitoring with victim notification, domestic violence, stalking, protective orders, breach of privacy, blackmail, unlawful sexual relations, and child endangerment penalties"
      ]
    },
    {
      "id": "s-ksleg-sb136",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/bills/SB136/",
      "title": "SB 136",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Original and current sponsor is Sen. Cindy Holscher",
        "Bill would limit independent-expenditure political committee contributions and require accounting, reporting, and auditing"
      ]
    },
    {
      "id": "s-ksleg-sb142",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb142/",
      "title": "SB 142",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Original and current sponsor is Sen. Cindy Holscher",
        "Bill would authorize each school district to include a nonvoting teacher representative on the board of education"
      ]
    },
    {
      "id": "s-ksleg-sb143",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb143/",
      "title": "SB 143",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Current and original sponsor is Senator Holscher",
        "Bill would impose legislative term limits with additional terms conditioned on a primary-election vote"
      ]
    },
    {
      "id": "s-campaign-about",
      "tier": "primary",
      "url": "https://cindyforkansas.com/about/",
      "title": "About Cindy Holscher",
      "publisher": "Cindy Holscher for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign biography emphasizes farm background, parents' work, public-school family, and Kansas residence",
        "Campaign says Holscher walked from Shawnee to Topeka in 2016 over school funding",
        "Campaign says she co-founded the Women's Bipartisan Caucus and helped reverse the Brownback tax experiment"
      ]
    },
    {
      "id": "s-campaign-priorities",
      "tier": "primary",
      "url": "https://cindyforkansas.com/priorities/",
      "title": "Priorities",
      "publisher": "Cindy Holscher for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign priorities include lower costs, Medicaid expansion, free school lunches, essential-products tax relief, special-education funding, housing, medical marijuana, redistricting, term limits, and corporate PAC limits"
      ]
    },
    {
      "id": "s-campaign-news",
      "tier": "primary",
      "url": "https://cindyforkansas.com/news/",
      "title": "News",
      "publisher": "Cindy Holscher for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign news page lists releases through May 14, 2026",
        "Visible releases include running mate, voting-rights, CoreCivic, legislative-session, cell-phone-ban, ICE detention, Chiefs stadium, lower-costs, polling, healthcare, and redistricting items",
        "Observed public online activity mapped to Affordability, Taxes, Labor, and Housing.",
        "Observed public online activity mapped to Healthcare, Medicaid, Rural Hospitals, and Reproductive Care."
      ]
    },
    {
      "id": "s-campaign-lower-costs",
      "tier": "primary",
      "url": "https://cindyforkansas.com/sen-cindy-holscher-unveils-2026-common-sense-and-lower-costs-agenda-focused-on-working-families/",
      "title": "Sen. Cindy Holscher Unveils 2026 Common Sense and Lower Costs Agenda",
      "publisher": "Cindy Holscher for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign agenda includes minimum wage, paid sick time, repeal right-to-work, property-tax relief, Medicaid expansion, free school lunches, essential-products tax relief, special education, housing security, medical marijuana, redistricting, term limits, and corporate PAC limits"
      ]
    },
    {
      "id": "s-bsky-profile",
      "tier": "social",
      "url": "https://bsky.app/profile/cindyforkansas.bsky.social",
      "title": "Cindy Holscher Bluesky profile",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Public API resolved the campaign profile to DID did:plc:ei6fueazsxvhhjvbr53hr63f",
        "Local harvest captured 596 feed items, including 431 original posts and 165 replies, from February 24, 2025 through March 20, 2026"
      ]
    },
    {
      "id": "s-bsky-corecivic",
      "tier": "social",
      "url": "https://bsky.app/profile/cindyforkansas.bsky.social/post/3mhhbtc2uqs2g",
      "title": "CoreCivic money post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Holscher posted that she would not take CoreCivic money",
        "Engagement at readback was 4 likes, 1 repost, 1 reply, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-aca-2026",
      "tier": "social",
      "url": "https://bsky.app/profile/cindyforkansas.bsky.social/post/3mbx4kgkl6227",
      "title": "ACA subsidies post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Holscher posted about healthcare costs and extending ACA subsidies"
      ]
    },
    {
      "id": "s-bsky-education-2025",
      "tier": "social",
      "url": "https://bsky.app/profile/cindyforkansas.bsky.social/post/3m4e2gws2hc2m",
      "title": "Public education post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Local harvest captured Holscher posting about public education, school funding, vouchers, and children"
      ]
    },
    {
      "id": "s-bsky-tariffs-2025",
      "tier": "social",
      "url": "https://bsky.app/profile/cindyforkansas.bsky.social/post/3lyig37yee22v",
      "title": "Tariffs and Kansas farmers post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Local harvest captured Holscher posting about tariffs and Kansas crop economics"
      ]
    },
    {
      "id": "s-kansas-reflector-debate",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Democrats in governor's race use debate stage to spotlight affordability, health care, rural Kansas",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Debate coverage tied Holscher's campaign to affordability, healthcare, and rural Kansas"
      ]
    },
    {
      "id": "s-kansas-reflector-corecivic-forum",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/04/26/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum/",
      "title": "Kansas Democrats running for governor clash on CoreCivic, party establishment in forum",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Forum coverage addressed CoreCivic, party-establishment conflict, and reproductive healthcare access"
      ]
    },
    {
      "id": "s-kmuw-corecivic-forum",
      "tier": "secondary",
      "url": "https://www.kmuw.org/politics/2026-04-29/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum",
      "title": "Kansas Democrats running for governor clash on CoreCivic, party establishment in forum",
      "publisher": "KMUW / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KMUW republication reported Holscher's anti-establishment framing, CoreCivic contrast, and support for reproductive healthcare access",
        "Observed public online activity mapped to Democracy, Elections, Redistricting, and Money in Politics."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/",
      "title": "cindyforkansas.com / Cindyforkansas",
      "publisher": "Cindyforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Public Education, School Funding, and Vouchers.",
        "Campaign website: cindyforkansas.com -- active. The site frames the campaign around \"Real Solutions for Real Kansans,\" affordability, public schools, healthcare, working families, "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CINDY_HOLSCHER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[cindy-holscher.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
