/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const COLIN_MCROBERTS_V2: CandidateFullV2 = {
  "slug": "colin-mcroberts",
  "name": "Colin McRoberts",
  "party": "D",
  "position": "U.S. House candidate, KS-01",
  "electionSlug": "ks-01-house-2026",
  "incumbent": false,
  "occupation": "Associate Teaching Professor of Law, University of Kansas School of Business",
  "hometown": "Lawrence, Kansas (Douglas County)",
  "family": "A professor at the University of Kansas (scientist and bestselling author -- name not confirmed in sources); Yes, raised family in Lawrence (number not specified)",
  "campaignWebsite": "https://colinforkansas.com/",
  "issues": [
    {
      "id": "abortion-reproductive-policy",
      "title": "Abortion / Reproductive Policy",
      "stated": {
        "text": "McRoberts' campaign issues page now has a candidate-controlled Personal Freedom plank saying Kansas voted no on a constitutional amendment that would have removed abortion protections, and that he would vote against a federal abortion ban and work to protect privacy for people seeking reproductive healthcare. This updates earlier local notes that found no detailed public position.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "action-abortion-platform",
          "date": "2026-05-19",
          "body": "Campaign issues page published opposition to a federal abortion ban and support for reproductive-healthcare privacy.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-abortion-absence",
          "platform": "Bluesky",
          "observation": "Local harvest found no original Bluesky posts about abortion policy during the captured period; do not infer beyond the campaign issue page.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "abortion-reproductive-policy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "Reposted ACOG, 2025-09-22: \"ACOG reaffirms that acetaminophen is safe for managing pain and fever during pregnancy...\" Engagement: Likes 2,011, Reposts 1,137, Replies 22, Quotes 64.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "abortion-reproductive-policy"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Across the captured Bluesky period, the feed contains no original posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medicaid expansion.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "abortion-reproductive-policy"
        }
      ]
    },
    {
      "id": "immigration-federal-law-enforcement",
      "title": "Immigration, Federal Law Enforcement, and Due Process",
      "stated": {
        "text": "McRoberts' campaign issues and policy pages call for reducing wasteful ICE spending, returning to bipartisan immigration reform with realistic paths to residence and citizenship, and amending 42 U.S.C. 1983 so federal agents can be sued for rights violations. A candidate-authored Capital-Journal/Yahoo opinion column repeats the Section 1983 proposal.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-policies",
          "s-yahoo-ice-opinion"
        ]
      },
      "actions": [
        {
          "id": "action-section-1983-policy",
          "date": "2026-05-19",
          "body": "Campaign policy page proposed amending 42 U.S.C. 1983 to apply to ICE and other federal agencies.",
          "sourceIds": [
            "s-campaign-policies"
          ]
        },
        {
          "id": "action-ice-opinion",
          "date": "2026-02-01",
          "body": "McRoberts authored an opinion column arguing that federal agents should be held to the same civil-liability standard as local police.",
          "sourceIds": [
            "s-yahoo-ice-opinion"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-action-ice-explainer",
          "platform": "Bluesky",
          "observation": "McRoberts posted a campaign-linked ICE explainer using a Lego example.",
          "observedAt": "2026-02-24",
          "sourceIds": [
            "s-bsky-2026-02-24"
          ],
          "mappedToIssueId": "immigration-federal-law-enforcement"
        },
        {
          "id": "ss-ice-local-police",
          "platform": "Bluesky",
          "observation": "On Jan. 13, 2026, McRoberts posted about holding ICE to the same standard as local police; local harvest recorded 6 likes, 3 reposts, 2 replies, and 1 quote.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-2026-01-13"
          ],
          "mappedToIssueId": "immigration-federal-law-enforcement"
        },
        {
          "id": "ss-section-1983-link",
          "platform": "Bluesky",
          "observation": "On Feb. 4, 2026, McRoberts linked his Section 1983 / ICE op-ed; local harvest recorded 4 likes, 3 reposts, 0 replies, and 0 quotes.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-2026-02-04"
          ],
          "mappedToIssueId": "immigration-federal-law-enforcement"
        }
      ]
    },
    {
      "id": "agriculture-tariffs-usaid-rural-economy",
      "title": "Agriculture, Tariffs, USAID, and Rural Economy",
      "stated": {
        "text": "McRoberts' campaign materials call for returning tariff power to Congress, small-farm tariff offsets, a proximate-ownership test for farm benefits, restoring USAID food-purchase functions, rehiring USDA experts, passing a farm bill, and federal right-to-repair legislation for farm equipment and other property.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-policies",
          "s-campaign-press-0916"
        ]
      },
      "actions": [
        {
          "id": "action-agriculture-launch-priorities",
          "date": "2025-09-16",
          "body": "Campaign launch release listed tariff, USAID, farm bill, USDA, and right-to-repair priorities.",
          "sourceIds": [
            "s-campaign-press-0916"
          ]
        },
        {
          "id": "action-agriculture-policy-page",
          "date": "2026-05-19",
          "body": "Campaign policy page published small-farm tariff offset, proximate ownership, and presidential tariff-power proposals.",
          "sourceIds": [
            "s-campaign-policies"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-action-kansas-rural-center",
          "platform": "Bluesky",
          "observation": "McRoberts posted from the Kansas Rural Center Food and Farm Conference and named rural cooperative and employee-ownership proposals.",
          "observedAt": "2026-02-14",
          "sourceIds": [
            "s-bsky-2026-02-14"
          ],
          "mappedToIssueId": "agriculture-tariffs-usaid-rural-economy"
        },
        {
          "id": "ss-agriculture-topic-share",
          "platform": "Bluesky",
          "observation": "Local harvest coded 10 of 62 original Bluesky posts, or 16%, as agriculture, tariffs, rural economy, or food aid.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "agriculture-tariffs-usaid-rural-economy"
        },
        {
          "id": "ss-usaid-agriculture",
          "platform": "Bluesky",
          "observation": "On Jan. 7, 2026, McRoberts posted about USAID and Kansas agriculture; local harvest recorded 4 likes, 1 repost, 0 replies, and 0 quotes.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-2026-01-07"
          ],
          "mappedToIssueId": "agriculture-tariffs-usaid-rural-economy"
        }
      ]
    },
    {
      "id": "healthcare-medicare-medicaid-social-security",
      "title": "Healthcare, Medicare, Medicaid, Social Security, and Rural Hospitals",
      "stated": {
        "text": "McRoberts' campaign issues page says the current federal budget threatens Kansans who rely on Medicare, Medicaid, and Social Security, connects Medicaid and CHIP reductions to rural hospital risk, and says he would work with Democrats and Republicans to prevent those cuts from taking effect.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "action-healthcare-platform",
          "date": "2026-05-19",
          "body": "Campaign issues page published Medicare, Medicaid, Social Security, and rural-hospital language.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-healthcare-social-limited",
          "platform": "Bluesky",
          "observation": "Local harvest found healthcare appeared mostly through ICE, research funding, disease/science reposts, and the campaign issue page rather than a frequent original social-feed thread.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "healthcare-medicare-medicaid-social-security"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "And they can't pretend to stand for farmers while destroying programs like Feed the Future.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "healthcare-medicare-medicaid-social-security"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Reposted Legal Reuters, 2026-04-29: \"The Trump administration rejected all four women farmers chosen by their peers to represent them in an industry group called the United Soybean Board earlier this year...\" Engagement: Likes 1,995, Reposts 1,016, Replies 82, Quotes 203.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "healthcare-medicare-medicaid-social-security"
        }
      ]
    },
    {
      "id": "government-accountability-congress-representation",
      "title": "Government Accountability, Congress, and Representation",
      "stated": {
        "text": "McRoberts' most repeated campaign theme is Congress as a check on executive power. Campaign materials call for uncapping the House, federal-agency accountability, limiting presidential tariff powers, banning federal officials from monetizing official-duty social posts, and restoring congressional oversight over appropriations and law enforcement.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-policies",
          "s-hays-democracy-fest"
        ]
      },
      "actions": [
        {
          "id": "action-house-expansion-platform",
          "date": "2026-05-19",
          "body": "Campaign issues page published an Uncapping the House of Representatives plank.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        },
        {
          "id": "action-hays-executive-overreach",
          "date": "2025-10-20",
          "body": "Hays Post reported McRoberts spoke at Democracy Fest in Hays and cited executive-overreach examples.",
          "sourceIds": [
            "s-hays-democracy-fest"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-action-redistricting-post",
          "platform": "Bluesky",
          "observation": "McRoberts posted that he opposed redistricting even if it would likely help him.",
          "observedAt": "2025-09-26",
          "sourceIds": [
            "s-bsky-2025-09-26"
          ],
          "mappedToIssueId": "government-accountability-congress-representation"
        },
        {
          "id": "ss-accountability-topic-share",
          "platform": "Bluesky",
          "observation": "Local harvest coded 24 of 62 original Bluesky posts, or 39%, as federal accountability / executive power / rule-of-law issues.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "government-accountability-congress-representation"
        },
        {
          "id": "ss-hays-highest-engagement",
          "platform": "Bluesky",
          "observation": "The Oct. 18, 2025 Hays district-travel post was the highest-engagement original Bluesky post in the harvest, with 550 likes, 75 reposts, 6 replies, and 1 quote.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-2025-10-18"
          ],
          "mappedToIssueId": "government-accountability-congress-representation"
        }
      ]
    },
    {
      "id": "research-funding-universities-education",
      "title": "Research Funding, Universities, and Education",
      "stated": {
        "text": "The campaign issues page calls for restoring NIH and NSF funding, defending basic research, strengthening the Department of Education, supporting teachers and students, protecting academic freedom, and working across parties to alleviate student-loan debt. KU lists McRoberts as an Associate Teaching Professor in Marketing and Business Law.",
        "sourceIds": [
          "s-campaign-issues",
          "s-ku-profile"
        ]
      },
      "actions": [
        {
          "id": "action-research-education-platform",
          "date": "2026-05-19",
          "body": "Campaign issues page published research-funding and education planks.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        },
        {
          "id": "action-ku-profile",
          "date": "2026-05-19",
          "body": "KU profile lists McRoberts as Associate Teaching Professor in Marketing and Business Law, with Harvard Law and Trinity University degrees.",
          "sourceIds": [
            "s-ku-profile"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-research-education-limited",
          "platform": "Bluesky",
          "observation": "Local harvest found some science/research references, but these were less frequent than accountability, campaign travel, and agriculture.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "research-funding-universities-education"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "Topic distribution among 62 original Bluesky posts: federal accountability / executive power / rule-of-law issues -- 24 posts (39%); campaign travel, events, and outreach -- 14 posts (23%); agriculture, tariffs, rural economy, and food aid -- 10 posts (16%); democracy, redistricting, representation, and election reform -- 8 posts (13%); personal / family / horses / sports / weather / media -- 6 posts (10%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "research-funding-universities-education"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Healthcare appears mostly through ICE, research funding, disease / science reposts, and the campaign issue page; detailed healthcare delivery policy was not a frequent social-feed topic in the captured posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "research-funding-universities-education"
        }
      ]
    },
    {
      "id": "labor-workers-bargaining",
      "title": "Labor, Workers, and Bargaining",
      "stated": {
        "text": "McRoberts' campaign labor plank says his negotiation experience made him pro-union and calls protecting fair bargaining a platform cornerstone as AI, tariffs, and other disruptions affect jobs.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "action-labor-platform",
          "date": "2026-05-19",
          "body": "Campaign issues page published worker-bargaining and labor-rights language.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-labor-social-limited",
          "platform": "Bluesky",
          "observation": "Labor was present on the campaign site but was not one of the most frequent original Bluesky topics in the local harvest.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "labor-workers-bargaining"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "The campaign website lists Medicare, Medicaid, and Social Security; personal freedom; labor; education; and equality as issue headings, but those topics were not as frequent in original Bluesky posts as accountability, Congress, agriculture, tariffs, and campaign travel.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "labor-workers-bargaining"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Across the captured period the feed contains no original Bluesky posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medicaid expansion (harvest). Healthcare appears mainly through immigration enforcement, scientific research, and agency-accountability posts rather than a sustained district-healthcare thread. The...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "labor-workers-bargaining"
        }
      ]
    },
    {
      "id": "equality-disability-lgbtq-policy",
      "title": "Equality, Disability, and LGBTQ Policy",
      "stated": {
        "text": "The campaign equality plank says McRoberts would prioritize rights and safety for Kansans regardless of race, religion, gender, orientation, or other characteristics, and says he supports the Disability Plank of the Kansas Democratic Party Platform. No marriage-specific candidate-controlled statement was found.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "action-equality-platform",
          "date": "2026-05-19",
          "body": "Campaign issues page published equality and disability-policy language.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-marriage-social-absence",
          "platform": "Bluesky",
          "observation": "Local harvest found no original Bluesky posts about marriage policy during the captured period.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "equality-disability-lgbtq-policy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "LGBTQ / equality: campaign issues page says he would prioritize rights and safety regardless of race, religion, gender, orientation, or other characteristics and supports the Disability Plank of the Kansas Democratic Party Platform. No marriage-specific candidate-controlled statement was found.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "equality-disability-lgbtq-policy"
        }
      ]
    },
    {
      "id": "religious-liberty-faith-signals",
      "title": "Religious Liberty and Faith Signals",
      "stated": {
        "text": "No current church affiliation, candidate-controlled worship claim, or religious-liberty policy plank was found in reviewed sources. Do not infer a position from party label, geography, family references, or social follows.",
        "sourceIds": [
          "s-campaign-meet"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-religious-liberty-absence",
          "platform": "Bluesky",
          "observation": "Local harvest found no original Bluesky posts about religious-liberty policy during the captured period.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "religious-liberty-faith-signals"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Religious liberty / worship: no current church affiliation or religious-liberty policy plank was found in reviewed sources. Do not infer from party, family, geography, or social follows.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "religious-liberty-faith-signals"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Any candidate-controlled platform statement on gun policy, marijuana/drug policy, school choice/vouchers beyond general public-education language, current church membership, or Fort Riley.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "religious-liberty-faith-signals"
        }
      ]
    },
    {
      "id": "guns-second-amendment",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No candidate-controlled issue plank or standalone public statement on guns / Second Amendment policy was found in the reviewed campaign pages, public-writing sources, or local social harvest.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-policies"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Guns / Second Amendment and marijuana / drug policy: no candidate-controlled issue plank found in reviewed materials.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "guns-second-amendment"
        }
      ]
    },
    {
      "id": "marijuana-drug-policy",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "No candidate-controlled issue plank or standalone public statement on marijuana or drug policy was found in the reviewed campaign pages, public-writing sources, or local social harvest.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-policies"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "ownWordsNarrative": "official_accounts: platform: Campaign website; url: https://colinforkansas.com/; evidence: Active campaign website with campaign-paid footer and links to Facebook, Instagram, TikTok, and Bluesky.; sourceIds: s-campaign-home; platform: Bluesky; url: https://bsky.app/profile/colinmcroberts.bsky.social; evidence: Local harvest on 2026-05-11 recorded 201 followers, 65 following, 97 posts, and campaign bio language.; sourceIds: s-bsky-profile; s-social-harvest; platform: Instagram; url: https://www.instagram.com/colinforkansas/; evidence: Local logged-out metadata on 2026-05-11 recorded 349 followers, 97 following, and 98 posts.; sourceIds: s-social-harvest; platform: YouTube; url: https://www.youtube.com/@ColinforKansas; evidence: Local harvest captured four campaign-linked videos.; sourceIds: s-social-harvest; platform: Facebook; url: https://www.facebook.com/profile.php?id=61579491833979; evidence: Linked from campaign website, but logged-out harvest returned access wall.; sourceIds: s-campaign-home; s-social-harvest; platform: TikTok; url: https://www.tiktok.com/@colinforcongress; evidence: Linked from campaign website, but public search did not expose reliable post/count metadata.; sourceIds: s-campaign-home; s-social-harvest; topic_distribution: sourceIds: s-social-harvest; originalBlueskyPostsExamined: 62; federalAccountabilityExecutivePowerRuleOfLaw: 24 posts (39%); campaignTravelEventsOutreach: 14 posts (23%); agricultureTariffsRuralEconomyFoodAid: 10 posts (16%); democracyRedistrictingRepresentationElectionReform: 8 posts (13%); personalFamilyHorsesSportsWeatherMedia: 6 posts (10%); absences: No candidate-controlled Truth Social, Gab, Gettr, Substack, or Reddit account was found.; Facebook, TikTok, LinkedIn, and detailed Instagram post corpuses were not accessible in logged-out review.; Local Bluesky harvest found no original posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medicaid expansion; treat this as a social-feed observation, not a policy inference.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "sourceIds: s-fec-candidate; coverageStart: 2025-07-01; coverageEnd: 2026-03-31; totalReceipts: 40747.79; totalContributions: 40428.5; totalIndividualContributions: 40079.9; itemizedIndividualContributions: 30989; unitemizedIndividualContributions: 9090.9; partyCommitteeContributions: 0; otherCommitteeContributions: 0; candidateContributions: 348.6; transfersFromOtherAuthorizedCommittees: 0; totalLoansReceived: 0; candidateLoans: 0; offsetsToOperatingExpenditures: 319.29; totalDisbursements: 32967.12; operatingExpenditures: 32967.12; endingCashOnHand: 7780.67; debtsOwedToCommittee: 0; debtsOwedByCommittee: 1248.75",
    "narrative": "sourceIds: s-fec-candidate; coverageStart: 2025-07-01; coverageEnd: 2026-03-31; totalReceipts: 40747.79; totalContributions: 40428.5; totalIndividualContributions: 40079.9; itemizedIndividualContributions: 30989; unitemizedIndividualContributions: 9090.9; partyCommitteeContributions: 0; otherCommitteeContributions: 0; candidateContributions: 348.6; transfersFromOtherAuthorizedCommittees: 0; totalLoansReceived: 0; candidateLoans: 0; offsetsToOperatingExpenditures: 319.29; totalDisbursements: 32967.12; operatingExpenditures: 32967.12; endingCashOnHand: 7780.67; debtsOwedToCommittee: 0; debtsOwedByCommittee: 1248.75",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Candidate v2 issue file"
  },
  "sources": [
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://colinforkansas.com/",
      "title": "Colin for Kansas",
      "publisher": "Colin for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign homepage identifies McRoberts as running to flip the Kansas First",
        "Homepage links Facebook, Instagram, TikTok, and Bluesky campaign accounts",
        "Footer says paid for by Colin for Kansas Committee with a Lawrence PO Box",
        "Observed public online activity mapped to Labor, Workers, and Bargaining."
      ]
    },
    {
      "id": "s-campaign-meet",
      "tier": "primary",
      "url": "https://colinforkansas.com/meet-colin/",
      "title": "Meet Colin",
      "publisher": "Colin for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign biography says McRoberts was born in Texas and chose Kansas with his wife to start a family",
        "Campaign biography says he teaches law and negotiation at KU School of Business",
        "Campaign biography says Oakley town hall led him to run"
      ]
    },
    {
      "id": "s-campaign-issues",
      "tier": "primary",
      "url": "https://colinforkansas.com/issues/",
      "title": "Issues",
      "publisher": "Colin for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Issue page lists House expansion, healthcare, accountability, research funding, agriculture/USAID, Medicare/Medicaid/Social Security, personal freedom, labor, education, and equality",
        "Personal Freedom plank says he would vote against a federal abortion ban and protect privacy for reproductive healthcare",
        "Medicare/Medicaid/Social Security plank connects federal cuts to rural hospital risk"
      ]
    },
    {
      "id": "s-campaign-policies",
      "tier": "primary",
      "url": "https://colinforkansas.com/policies/",
      "title": "Policies",
      "publisher": "Colin for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Policy page proposes small-farm tariff offsets",
        "Policy page proposes a proximate-ownership test for farm benefits",
        "Policy page proposes ending or sharply limiting presidential tariff powers",
        "Policy page proposes amending 42 U.S.C. 1983 to apply to federal officials",
        "Policy page proposes banning federal officials from receiving payment for social media posts made while in office"
      ]
    },
    {
      "id": "s-campaign-press-0916",
      "tier": "primary",
      "url": "https://colinforkansas.com/mcroberts-files-for-1st-congressional-district-seat/",
      "title": "McRoberts files for 1st Congressional District seat",
      "publisher": "Colin for Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign announcement says McRoberts announced candidacy for Kansas's 1st Congressional District",
        "Announcement lists priorities on tariffs, USAID, small-business tariff exemptions, right to repair, farm bill, USDA employees, law-enforcement funding, immigration reform, and research funding"
      ]
    },
    {
      "id": "s-ku-profile",
      "tier": "primary",
      "url": "https://business.ku.edu/people/colin-mcroberts",
      "title": "Colin McRoberts",
      "publisher": "University of Kansas School of Business",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KU lists McRoberts as Associate Teaching Professor in Marketing and Business Law",
        "KU lists J.D. Harvard Law School 2004 and B.A. Trinity University 2001",
        "KU lists selected publications on conspiracy theory and pseudolaw"
      ]
    },
    {
      "id": "s-hays-democracy-fest",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
      "title": "Kansas Democrats wrap up Democracy Fest in Hays",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported McRoberts appeared at Democracy Fest in Hays",
        "Hays Post reported he framed himself as a businessman and negotiator",
        "Hays Post reported he cited executive-overreach examples"
      ]
    },
    {
      "id": "s-yahoo-ice-opinion",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/articles/hold-ice-same-standard-local-100516689.html",
      "title": "Hold ICE to same standard as local police. Here's how",
      "publisher": "Yahoo / Topeka Capital-Journal",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-authored opinion column argues for amending Section 1983 to cover federal agents",
        "Column identifies McRoberts as a Democrat running in the 1st Congressional District"
      ]
    },
    {
      "id": "s-bsky-profile",
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social",
      "title": "@colinmcroberts.bsky.social",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Local harvest recorded profile as active with 201 followers, 65 following, and 97 posts on 2026-05-11"
      ]
    },
    {
      "id": "s-bsky-2026-02-24",
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social/post/3mfkyz7pz5k2n",
      "title": "ICE explainer post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "McRoberts linked an ICE / constitutional-rights explainer using his son's Lego creation",
        "Local harvest recorded 3 likes, 3 reposts, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-2026-02-14",
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social/post/3metjptksrc2s",
      "title": "Kansas Rural Center Food and Farm Conference post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "McRoberts posted from the Kansas Rural Center Food and Farm Conference",
        "Local harvest recorded 3 likes, 0 reposts, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-2026-02-04",
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social/post/3mdzafhenpk2s",
      "title": "Section 1983 / ICE post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "McRoberts posted that ICE violence could be curbed by amending Section 1983",
        "Local harvest recorded 4 likes, 3 reposts, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-2026-01-13",
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social/post/3mcdfu5g7kc2q",
      "title": "ICE local-police standard post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "McRoberts posted about holding ICE to the same standard as local police",
        "Local harvest recorded 6 likes, 3 reposts, 2 replies, 1 quote"
      ]
    },
    {
      "id": "s-bsky-2026-01-07",
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social/post/3mbuexlp3pk2h",
      "title": "USAID / agriculture post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "McRoberts posted about USAID, Kansas agriculture, and his opponent",
        "Local harvest recorded 4 likes, 1 repost, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-2025-10-18",
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social/post/3m3i7nw6at22t",
      "title": "Hays district-travel post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "McRoberts posted from Hays during district travel",
        "Local harvest recorded 550 likes, 75 reposts, 6 replies, 1 quote"
      ]
    },
    {
      "id": "s-bsky-2025-09-26",
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social/post/3lzqqe6cbzs2q",
      "title": "Redistricting post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "McRoberts posted that he opposed redistricting even if it would help him",
        "Local harvest recorded 11 likes, 3 reposts, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://bsky.app/profile/acog.org/post/3lzhdskbh432y",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Reproductive Policy.",
        "Reposted ACOG, 2025-09-22: \"ACOG reaffirms that acetaminophen is safe for managing pain and fever during pregnancy...\" Engagement: Likes 2,011, Reposts 1,137, Replies 22, Quotes 64"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://bsky.app/profile/legal.reuters.com/post/3mkn4nc2a6d2d",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Healthcare, Medicare, Medicaid, Social Security, and Rural Hospitals.",
        "Reposted Legal Reuters, 2026-04-29: \"The Trump administration rejected all four women farmers chosen by their peers to represent them in an industry group called the United Soybean"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(COLIN_MCROBERTS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[colin-mcroberts.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
