/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ANNE_PARELKAR_V2: CandidateFullV2 = {
  "slug": "anne-parelkar",
  "name": "Anne Parelkar",
  "party": "D",
  "position": "U.S. Senate candidate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "Community Advocate",
  "hometown": "Overland Park, KS (Johnson County)",
  "campaignWebsite": "https://www.anneforkansas.com/",
  "issues": [
    {
      "id": "immigration-border-work-visas",
      "title": "Immigration, Border Administration, and Work Visas",
      "stated": {
        "text": "Parelkar's strongest candidate-controlled issue is immigration. Her campaign page calls for humane and orderly border enforcement, modern processing, lawful pathways, an independent review of ICE operations, funding tied to training and oversight, and work-visa rules meant to protect local wages and domestic recruitment.",
        "sourceIds": [
          "s-campaign-immigration",
          "s-kansas-reflector-profile",
          "s-bsky-2026-02-17-immigration"
        ]
      },
      "actions": [
        {
          "id": "action-immigration-platform",
          "date": "2026-05-19",
          "body": "Campaign immigration page published specific planks on border processing, lawful pathways, ICE review, and work-visa reform.",
          "sourceIds": [
            "s-campaign-immigration"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-action-women-for-kansas-immigration",
          "platform": "Bluesky",
          "observation": "Parelkar posted that she joined Women for Kansas in Lawrence to give a presentation on immigration law.",
          "observedAt": "2026-02-17",
          "sourceIds": [
            "s-bsky-2026-02-17-immigration"
          ],
          "mappedToIssueId": "immigration-border-work-visas"
        },
        {
          "id": "ss-immigration-presentation",
          "platform": "Bluesky",
          "observation": "On Feb. 17, 2026, Parelkar posted that she joined Women for Kansas to give a presentation on immigration law; local harvest recorded 1 like, 0 reposts, 0 replies, and 0 quotes as of May 11, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-2026-02-17-immigration"
          ],
          "mappedToIssueId": "immigration-border-work-visas"
        },
        {
          "id": "ss-crossref-3",
          "platform": "YouTube",
          "observation": "2026-02-17 — \"Last weekend we took our roundtable tour to #Lawrence! I had a lovely time meeting everyone, and on Saturday morning I joined #WomenForKansas to give a presentation on #immigration law, which is now up on YouTube so please check it out! www.youtube.com/watch?v=6TLY...\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "immigration-border-work-visas"
        }
      ]
    },
    {
      "id": "healthcare-children-reproductive-care",
      "title": "Healthcare, Children, and Reproductive Care",
      "stated": {
        "text": "The campaign healthcare page proposes Medicare for all children as an incremental step toward broader universal care, ending surprise billing, requiring real price transparency, and investing in prevention, reproductive care, early care, family support, and long-term condition management. The same page explicitly says the campaign would protect women's right to choose.",
        "sourceIds": [
          "s-campaign-healthcare"
        ]
      },
      "actions": [
        {
          "id": "action-healthcare-platform",
          "date": "2026-05-19",
          "body": "Campaign healthcare page published planks on child coverage, universal-care path, surprise billing, price transparency, prevention, reproductive care, and abortion-rights language.",
          "sourceIds": [
            "s-campaign-healthcare"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-aca-shutdown",
          "platform": "Bluesky",
          "observation": "Local 2026-05-11 harvest identified a Nov. 17, 2025 ACA subsidy/shutdown post as the most-reposted Parelkar-authored post in the captured Bluesky set, with 2 likes, 4 reposts, 0 replies, and 0 quotes.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "healthcare-children-reproductive-care"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "Approximate Bluesky topic distribution among the 51 cataloged originals: local outreach and public access — 22 posts (43%); government accountability, unity, campaign finance, and party independence — 10 posts (20%); health care, labor, child care, consumer costs, agriculture, and veterans — 8 posts (16%); immigration, LGBTQ policy, voting, and civil rights — 6 posts (12%); foreign policy, war, Russia, Iran, and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "healthcare-children-reproductive-care"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Most-reposted Parelkar-authored Bluesky post in the captured set: 2025-11-17 ACA subsidy post — Likes 2, Reposts 4, Replies 0, Quotes 0 as of 2026-05-11 capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "healthcare-children-reproductive-care"
        }
      ]
    },
    {
      "id": "government-reform-campaign-finance",
      "title": "Government Reform and Money in Politics",
      "stated": {
        "text": "Parelkar's government-reform page calls for stronger antitrust enforcement, restrictions on officials becoming lobbyists or trading stocks, congressional approval for major tariff actions, Citizens United reversal, public financing and small-donor matching, and expanding the House of Representatives.",
        "sourceIds": [
          "s-campaign-govreform",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "action-govreform-platform",
          "date": "2026-05-19",
          "body": "Campaign government-reform page published anti-corruption, campaign-finance, tariff-authority, and representation planks.",
          "sourceIds": [
            "s-campaign-govreform"
          ]
        },
        {
          "id": "action-listening-tour",
          "date": "2025-06",
          "body": "Campaign release said Parelkar launched a statewide listening tour to meet directly with residents while exploring a U.S. Senate run.",
          "sourceIds": [
            "s-campaign-listening-tour"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-virtual-roundtable",
          "platform": "Bluesky",
          "observation": "On May 12, 2026, Parelkar invited Kansans to a virtual campaign roundtable; API readback on May 19 showed 0 likes, 0 reposts, 0 replies, and 0 quotes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-2026-05-12-roundtable"
          ],
          "mappedToIssueId": "government-reform-campaign-finance"
        },
        {
          "id": "ss-joco-coffee",
          "platform": "Bluesky",
          "observation": "On May 12, 2026, Parelkar promoted weekly coffee meetups in Johnson County; API readback on May 19 showed 0 likes, 0 reposts, 0 replies, and 0 quotes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-2026-05-12-coffee"
          ],
          "mappedToIssueId": "government-reform-campaign-finance"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "2026-03-23 — The Iola Register reported that Parelkar spoke to the Allen County Blue Dot Club and said the biggest issue facing the United States was the influence of money in politics.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "government-reform-campaign-finance"
        }
      ]
    },
    {
      "id": "agriculture-antitrust-rural-economy",
      "title": "Agriculture, Antitrust, and Rural Economy",
      "stated": {
        "text": "The campaign farmers page says family farmers should not be squeezed out by consolidation and calls for antitrust enforcement in seed, fertilizer, meatpacking, and equipment markets, fair producer prices, contract protections, local processing, credit, crop insurance, and disaster support.",
        "sourceIds": [
          "s-campaign-farmers"
        ]
      },
      "actions": [
        {
          "id": "action-farmers-platform",
          "date": "2026-05-19",
          "body": "Campaign farmers page published agriculture-market and farm-support planks.",
          "sourceIds": [
            "s-campaign-farmers"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-national-ag-day",
          "platform": "Bluesky",
          "observation": "On March 25, 2026, Parelkar posted for National Ag Day and linked to the campaign farmers page; local harvest recorded 2 likes, 0 reposts, 0 replies, and 0 quotes as of May 11, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-2026-03-25-ag"
          ],
          "mappedToIssueId": "agriculture-antitrust-rural-economy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "Across the captured period the Bluesky feed contains no posts about water policy or the Ogallala Aquifer.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "agriculture-antitrust-rural-economy"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Across the captured period the Bluesky feed contains no detailed post about the Farm Bill, though it does include an agriculture post and the campaign website includes an agriculture plank.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "agriculture-antitrust-rural-economy"
        }
      ]
    },
    {
      "id": "consumer-protection-ownership",
      "title": "Consumer Protection, Pricing, and Ownership",
      "stated": {
        "text": "Parelkar's consumer pages call for one clear price, a ban on data-driven price discrimination using personal information, refund or cancellation options when services change, Robinson-Patman protections, subscription-pausing rules, a national right to repair, plain-language user agreements, digital-purchase ownership protections, and a ban on planned obsolescence.",
        "sourceIds": [
          "s-campaign-price",
          "s-campaign-ownership"
        ]
      },
      "actions": [
        {
          "id": "action-consumer-platform",
          "date": "2026-05-19",
          "body": "Campaign price and ownership pages published consumer-protection and right-to-repair planks.",
          "sourceIds": [
            "s-campaign-price",
            "s-campaign-ownership"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-subscription-post",
          "platform": "Bluesky",
          "observation": "On March 21, 2026, Parelkar posted about subscription practices and linked to The People's Deal; local harvest recorded 2 likes, 1 repost, 0 replies, and 0 quotes as of May 11, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-2026-03-21-consumer"
          ],
          "mappedToIssueId": "consumer-protection-ownership"
        },
        {
          "id": "ss-crossref-2",
          "platform": "anneforkansas.com",
          "observation": "Her campaign website's issue page says, \"In Washington, Anne will fight for parity pricing, cooperative strength, and a fair marketplace that rewards the people who feed our nation\" (source). The campaign's health-care page says, \"Guarantee Medicare for all children as the first incremental step toward a universal system that puts families ahead of insurance company profits\" (source), and a campaign newsroom post...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-issues"
          ],
          "mappedToIssueId": "consumer-protection-ownership"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Health care, labor, child care, consumer costs, agriculture, and veterans: 8 posts / 16%.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "consumer-protection-ownership"
        }
      ]
    },
    {
      "id": "labor-workers-economic-mobility",
      "title": "Labor, Workers, and Economic Mobility",
      "stated": {
        "text": "The campaign workers page supports the PRO Act, wage-theft enforcement, stronger labor standards, Job Corps and retraining programs, and transportation support for people without reliable job access. The immigration page also connects work-visa reform to local wage protections and domestic recruitment.",
        "sourceIds": [
          "s-campaign-workers",
          "s-campaign-immigration"
        ]
      },
      "actions": [
        {
          "id": "action-workers-platform",
          "date": "2026-05-19",
          "body": "Campaign workers page published labor-rights, enforcement, retraining, and transportation-access planks.",
          "sourceIds": [
            "s-campaign-workers"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "On national and foreign-policy questions, Parelkar posts less often than she posts about campaign events and public access, but the captured feed includes immigration enforcement, voting, Russia, Iran, Gaza, federal labor policy, and the government shutdown. On March 1, 2026, she wrote, \"Politicians fight and we the people pay the price. #Trump #Iran\" (source). On November 29, 2025, she posted, \"Today is the...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "labor-workers-economic-mobility"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Across the captured period the feed contains no standalone posts centered on gun policy, Fort Riley, or water policy including the Ogallala Aquifer. The captured Bluesky feed contains one agriculture post and a linked campaign agriculture plank, but no detailed Farm Bill post. Veterans appear in a Veterans Day post, \"Our Veterans served us selflessly. Now it's our turn to serve them\" (source), but the captured...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "labor-workers-economic-mobility"
        }
      ]
    },
    {
      "id": "education-public-schools",
      "title": "Education and Public Schools",
      "stated": {
        "text": "The campaign education page calls for competitive teacher pay and benefits, pension protection, stopping vouchers, smaller classes, more support staff, reduced testing and paperwork, academic freedom, collective bargaining, and full federal IDEA funding.",
        "sourceIds": [
          "s-campaign-education"
        ]
      },
      "actions": [
        {
          "id": "action-education-platform",
          "date": "2026-05-19",
          "body": "Campaign education page published public-school, teacher, voucher, and special-education funding planks.",
          "sourceIds": [
            "s-campaign-education"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "For Kansas-specific policy, Parelkar's feed combines statewide stops with issue planks on agriculture, health care, public schools, local communities, and worker protections. On March 25, 2026, she posted, \"Happy #NationalAgDay, everyone. I hear politicians talk a lot about supporting farmers. I say, enough talk. We need action. It's time to break the corporate stranglehold on agriculture and put power back in...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-2026-03-25-ag"
          ],
          "mappedToIssueId": "education-public-schools"
        }
      ]
    },
    {
      "id": "lgbtq-policy-civil-rights",
      "title": "LGBTQ Policy and Civil Rights",
      "stated": {
        "text": "The reviewed campaign issue pages did not include a marriage-specific plank, but Parelkar made candidate-controlled public posts on March 31, 2026 supporting trans Kansans and marking Transgender Day of Visibility.",
        "sourceIds": [
          "s-bsky-2026-03-31-trans",
          "s-bsky-2026-03-31-tdov"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-action-trans-day-posts",
          "platform": "Bluesky",
          "observation": "Parelkar posted two Bluesky messages addressing trans Kansans and Transgender Day of Visibility.",
          "observedAt": "2026-03-31",
          "sourceIds": [
            "s-bsky-2026-03-31-trans",
            "s-bsky-2026-03-31-tdov"
          ],
          "mappedToIssueId": "lgbtq-policy-civil-rights"
        },
        {
          "id": "ss-trans-kansans",
          "platform": "Bluesky",
          "observation": "The March 31, 2026 post to trans Kansans had 1 like, 0 reposts, 0 replies, and 0 quotes in the local May 11 harvest.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-2026-03-31-trans"
          ],
          "mappedToIssueId": "lgbtq-policy-civil-rights"
        },
        {
          "id": "ss-tdov",
          "platform": "Bluesky",
          "observation": "The March 31, 2026 Transgender Day of Visibility post had 0 likes, 0 reposts, 1 reply, and 0 quotes in the local May 11 harvest.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-2026-03-31-tdov"
          ],
          "mappedToIssueId": "lgbtq-policy-civil-rights"
        }
      ]
    },
    {
      "id": "foreign-policy-war-powers",
      "title": "Foreign Policy and War Powers",
      "stated": {
        "text": "The campaign issue index lists responsible foreign policy and opposition to more forever wars. Parelkar's Bluesky posts include comments on Iran, Gaza/Palestinians, U.S. weapons to Israel, and child-care spending in contrast with war spending.",
        "sourceIds": [
          "s-campaign-issues",
          "s-bsky-2026-05-15"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-action-nakba-day-post",
          "platform": "Bluesky",
          "observation": "Parelkar posted about Nakba Day, U.S. weapons to Israel, and Palestinian self-determination.",
          "observedAt": "2026-05-15",
          "sourceIds": [
            "s-bsky-2026-05-15"
          ],
          "mappedToIssueId": "foreign-policy-war-powers"
        },
        {
          "id": "ss-nakba-day",
          "platform": "Bluesky",
          "observation": "The May 15, 2026 Nakba Day post had 1 like, 0 reposts, 0 replies, and 0 quotes at API readback on May 19.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-2026-05-15"
          ],
          "mappedToIssueId": "foreign-policy-war-powers"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Across the captured period the Bluesky feed contains no standalone posts centered on gun policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "foreign-policy-war-powers"
        }
      ]
    },
    {
      "id": "environment-local-communities",
      "title": "Environment, Land, Water, and Local Communities",
      "stated": {
        "text": "The environment page calls for cleanup of polluted sites and waterways, cleanup bonds, conservation payments, and locally designed drought, flood, wildfire, and grid resilience. The local-communities page calls for local business competition, simplified grants, revitalization, local-media grants, and more flexible federal programs for towns and counties.",
        "sourceIds": [
          "s-campaign-environment",
          "s-campaign-local"
        ]
      },
      "actions": [
        {
          "id": "action-environment-local-platform",
          "date": "2026-05-19",
          "body": "Campaign environment and local-communities pages published cleanup, conservation, resilience, grant, local-media, and local-flexibility planks.",
          "sourceIds": [
            "s-campaign-environment",
            "s-campaign-local"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "religious-liberty-faith-signals",
      "title": "Religious Liberty and Faith Signals",
      "stated": {
        "text": "The campaign about page says Parelkar grew up in First Presbyterian Church of Pine Bluff, and an April 6, 2026 Bluesky post references Christ's teachings and says she talked about her faith in a podcast clip. No religious-liberty policy plank or current congregation was found in reviewed sources.",
        "sourceIds": [
          "s-campaign-about",
          "s-bsky-2026-04-06-faith"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-faith-reference",
          "platform": "Bluesky",
          "observation": "On April 6, 2026, Parelkar posted an Easter/faith reference; local harvest recorded 1 like, 0 reposts, 0 replies, and 0 quotes as of May 11, 2026.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-2026-04-06-faith"
          ],
          "mappedToIssueId": "religious-liberty-faith-signals"
        }
      ]
    }
  ],
  "ownWordsNarrative": "official_accounts: platform: Campaign website; url: https://www.anneforkansas.com/; evidence: Active campaign website with campaign-paid footer and links to Facebook, Instagram, Bluesky, TikTok, and YouTube.; sourceIds: s-campaign-home; platform: Bluesky; url: https://bsky.app/profile/anneforkansas.bsky.social; evidence: Public API on 2026-05-19 showed 109 followers, 35 follows, 131 posts, and account created 2025-03-26.; sourceIds: s-bsky-profile; platform: Facebook; url: https://www.facebook.com/AnneForKansas/; evidence: Linked from campaign footer; direct logged-out post metrics not captured.; sourceIds: s-campaign-home; platform: Instagram; url: https://www.instagram.com/anneforkansas; evidence: Linked from campaign footer; direct logged-out post metrics not captured.; sourceIds: s-campaign-home; platform: TikTok; url: https://www.tiktok.com/@anneforkansas; evidence: Linked from campaign footer; direct logged-out post metrics not captured.; sourceIds: s-campaign-home; platform: YouTube; url: https://www.youtube.com/@AnneForKansas; evidence: Linked from campaign footer; Bluesky posts link to campaign YouTube videos.; sourceIds: s-campaign-home; recent_bluesky_posts_after_local_harvest: date: 2026-05-18; issueMapping: online organizing; observation: Post linked campaign website and community server; 0 likes, 0 reposts, 0 replies, 0 quotes at 2026-05-19 API readback.; sourceIds: s-bsky-profile; date: 2026-05-15; issueMapping: foreign policy; observation: Nakba Day / Israel weapons funding / Palestinian self-determination post; 1 like, 0 reposts, 0 replies, 0 quotes at 2026-05-19 API readback.; sourceIds: s-bsky-2026-05-15; date: 2026-05-12; issueMapping: constituent access; observation: Virtual roundtable and Johnson County coffee meetup posts; both had 0 likes and 0 reposts at 2026-05-19 API readback.; sourceIds: s-bsky-2026-05-12-roundtable; s-bsky-2026-05-12-coffee; absences: No campaign X/Twitter, Truth Social, Gab, Gettr, Substack, or Reddit account was confirmed.; Facebook, Instagram, TikTok, YouTube, and LinkedIn direct post corpuses or engagement counts were not captured in logged-out review.; No candidate-controlled likes/follows/comments outside Bluesky profile data were captured.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Parelkar has spoken publicly about being raised Presbyterian in Arkansas, but the source material does not identify a current Kansas congregation.",
  "campaignFinance": {
    "totalRaised": "sourceIds: s-fec-candidate; s-fec-committee; coverageStart: 2025-03-03; coverageEnd: 2026-03-31; totalReceipts: 19898; totalContributions: 14398; totalIndividualContributions: 14398; itemizedIndividualContributions: 9676; unitemizedIndividualContributions: 4722; partyCommitteeContributions: 0; otherCommitteeContributions: 0; totalLoansReceived: 5500; candidateLoans: 5500; totalDisbursements: 19707.85; operatingExpenditures: 19707.85; endingCashOnHand: 190.15; debtsOwedByCommittee: 5500",
    "narrative": "sourceIds: s-fec-candidate; s-fec-committee; coverageStart: 2025-03-03; coverageEnd: 2026-03-31; totalReceipts: 19898; totalContributions: 14398; totalIndividualContributions: 14398; itemizedIndividualContributions: 9676; unitemizedIndividualContributions: 4722; partyCommitteeContributions: 0; otherCommitteeContributions: 0; totalLoansReceived: 5500; candidateLoans: 5500; totalDisbursements: 19707.85; operatingExpenditures: 19707.85; endingCashOnHand: 190.15; debtsOwedByCommittee: 5500",
    "donors": [],
    "undisclosed": "summary: NRSC alleged on March 11, 2026 that Parelkar and three other Kansas Democratic Senate candidates failed to timely file personal financial disclosure reports. Senate Ethics confirms candidate disclosure timing rules, but this pass did not confirm an official disposition or candidate response.; sourceIds: s-senate-ethics-disclosure; s-nrsc-complaint",
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Candidate v2 issue file"
  },
  "sources": [
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/",
      "title": "Anne Parelkar for Senate",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Homepage identifies Anne Parelkar as a Kansas attorney running for U.S. Senate",
        "Homepage says elected officials should answer to the people rather than party leaders or political donors",
        "Homepage links Facebook, Instagram, Bluesky, TikTok, and YouTube campaign accounts"
      ]
    },
    {
      "id": "s-campaign-about",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/about",
      "title": "About Anne",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Biography says Parelkar was born in Pine Bluff, Arkansas and raised in White Hall",
        "Biography says she attended Lyon College and the William H. Bowen School of Law",
        "Biography says she is licensed in Arkansas, Missouri, and Kansas",
        "Biography says she has lived in Overland Park since 2017",
        "Biography says she grew up in First Presbyterian Church of Pine Bluff"
      ]
    },
    {
      "id": "s-campaign-issues",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/issues",
      "title": "The People's Deal",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Issue index lists healthcare, farmers, immigration/workers, government reform, education, price manipulation, ownership, local communities, environment, and foreign policy",
        "Observed public online activity mapped to Consumer Protection, Pricing, and Ownership."
      ]
    },
    {
      "id": "s-campaign-healthcare",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/healthcare",
      "title": "Build a Healthcare System That Works for Everyone",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for Medicare for all children as an incremental step",
        "Campaign calls for ending surprise billing and requiring price transparency",
        "Campaign supports reproductive care and protecting women's right to choose"
      ]
    },
    {
      "id": "s-campaign-immigration",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/immigration",
      "title": "Fix Immigration and Protect Workers",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for humane, orderly border enforcement",
        "Campaign calls for modern processing and lawful pathways",
        "Campaign calls for independent investigation of ICE operations",
        "Campaign calls for work-visa reform tied to local wages and domestic recruitment"
      ]
    },
    {
      "id": "s-campaign-farmers",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/farmers",
      "title": "Stand With Farmers",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for stronger antitrust enforcement in seed, fertilizer, meatpacking, and equipment markets",
        "Campaign calls for fair producer prices, contract protections, local processing, credit, crop insurance, and disaster support"
      ]
    },
    {
      "id": "s-campaign-govreform",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/governmentreform",
      "title": "Put Power Back Where It Belongs",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for antitrust enforcement, lobbyist and stock-trading restrictions, congressional tariff authority, Citizens United reversal, public financing, and House expansion"
      ]
    },
    {
      "id": "s-campaign-education",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/education",
      "title": "Respect Teachers Improve Education",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for higher teacher pay, pension protection, stopping vouchers, smaller classes, less testing and paperwork, academic freedom, collective bargaining, and full IDEA funding"
      ]
    },
    {
      "id": "s-campaign-workers",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/workers",
      "title": "Empower Workers",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign supports the PRO Act, wage-theft enforcement, labor standards, Job Corps/retraining, and transportation support"
      ]
    },
    {
      "id": "s-campaign-price",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/endpricemanipulation",
      "title": "End Price Manipulation",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for one clear price, a ban on data-driven price discrimination, subscription protections, and Robinson-Patman protections"
      ]
    },
    {
      "id": "s-campaign-ownership",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/restoreownership",
      "title": "Restore Real Ownership",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for a national right to repair, plain-language user agreements, digital-purchase protections, and a ban on planned obsolescence"
      ]
    },
    {
      "id": "s-campaign-local",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/localcommunities",
      "title": "Support Local Communities",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for local business competition, simpler grant processes, revitalization, local-media grants, and local flexibility in federal programs"
      ]
    },
    {
      "id": "s-campaign-environment",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/environment",
      "title": "Protect the Land and Safeguard the Future",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for cleanup of polluted sites and waterways, cleanup bonds, conservation payments, drought/flood/wildfire/grid resilience, and domestic power-component manufacturing"
      ]
    },
    {
      "id": "s-campaign-listening-tour",
      "tier": "primary",
      "url": "https://www.anneforkansas.com/newsroom/anne-parelkar-begins-listening-tour-across-kansas",
      "title": "Anne Begins Listening Tour Across Kansas",
      "publisher": "Anne for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign release says Parelkar launched a statewide listening tour while exploring a U.S. Senate run",
        "Release says the tour would include town halls and one-on-one meetings"
      ]
    },
    {
      "id": "s-bsky-profile",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social",
      "title": "Anne Parelkar for Kansas Bluesky profile",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile had 109 followers, 35 follows, and 131 posts at API readback",
        "Profile was created March 26, 2025",
        "Profile bio identifies Parelkar as an attorney licensed in Kansas, Arkansas, and Missouri and as a 2026 U.S. Senate candidate"
      ]
    },
    {
      "id": "s-bsky-2026-05-15",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mlwbobpi222e",
      "title": "Nakba Day post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar posted on May 15, 2026 about Nakba Day, U.S. weapons to Israel, and Palestinian self-determination",
        "Engagement at API readback was 1 like, 0 reposts, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-2026-05-12-roundtable",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mlocrf726k26",
      "title": "Virtual campaign roundtable post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar invited Kansans to a virtual campaign roundtable",
        "Engagement at API readback was 0 likes, 0 reposts, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-2026-05-12-coffee",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mlodg6je7s2q",
      "title": "Johnson County coffee meetup post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar promoted weekly Wednesday coffee meetups in Johnson County",
        "Engagement at API readback was 0 likes, 0 reposts, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-2026-03-31-trans",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3miep53rkns2n",
      "title": "Post to trans Kansans",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar posted a message of support to trans Kansans on March 31, 2026"
      ]
    },
    {
      "id": "s-bsky-2026-03-31-tdov",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3miep2pwhl52b",
      "title": "Transgender Day of Visibility post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar posted on Transgender Day of Visibility about solidarity, understanding, and equality"
      ]
    },
    {
      "id": "s-bsky-2026-03-25-ag",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mhtzhs7hyk2c",
      "title": "National Ag Day post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar posted on National Ag Day and linked to the campaign farmers page",
        "Observed public online activity mapped to Education and Public Schools."
      ]
    },
    {
      "id": "s-bsky-2026-03-21-consumer",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mhjqh7yhtk2s",
      "title": "Subscription and corporate-practices post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar posted about subscription practices and linked to The People's Deal"
      ]
    },
    {
      "id": "s-bsky-2026-02-17-immigration",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mf37k7cpxc25",
      "title": "Women for Kansas immigration-law presentation post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar posted that she joined Women for Kansas in Lawrence to give an immigration-law presentation"
      ]
    },
    {
      "id": "s-bsky-2026-04-06-faith",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mis3newg5s2h",
      "title": "Faith reference post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Parelkar posted an Easter/faith reference and said she discussed faith in an upcoming podcast clip"
      ]
    },
    {
      "id": "s-kansas-reflector-profile",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
      "title": "Democratic immigration lawyer wants to fix broken system with run for U.S. Senate in Kansas",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas Reflector profiled Parelkar as an Overland Park immigration attorney running for U.S. Senate",
        "Article reports 2026 is her first campaign for elected office",
        "Article ties her campaign to immigration-system concerns and a Roger Marshall town hall"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mfxk5laymk2i",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Labor, Workers, and Economic Mobility.",
        "On national and foreign-policy questions, Parelkar posts less often than she posts about campaign events and public access, but the captured feed includes immigration enforcement, "
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3m5efumlyih2b",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Labor, Workers, and Economic Mobility.",
        "Across the captured period the feed contains no standalone posts centered on gun policy, Fort Riley, or water policy including the Ogallala Aquifer. The captured Bluesky feed conta"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ANNE_PARELKAR_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[anne-parelkar.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
