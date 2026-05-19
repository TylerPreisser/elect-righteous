/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ROGER_MARSHALL_V2: CandidateFullV2 = {
  "slug": "roger-marshall",
  "name": "Roger Marshall",
  "party": "R",
  "position": "U.S. Senator, Kansas",
  "electionSlug": "us-senate-2026",
  "incumbent": true,
  "occupation": "Obstetrician / U.S. Senator",
  "born": "August 9, 1960, El Dorado, Kansas",
  "hometown": "Great Bend, Kansas",
  "religion": "Christian Church (Disciples of Christ) / Non-denominational",
  "family": "Laina Marshall — married 40+ years",
  "campaignWebsite": "https://kansansformarshall.com/",
  "issues": [
    {
      "id": "i-life-abortion",
      "title": "Life / abortion",
      "stated": {
        "text": "Marshall's campaign presents him as strongly pro-life and says his\nposition is that abortion is wrong at any stage. The page ties that\nposition to his OB-GYN background, delivery of more than 5,000 babies,\nand lifetime membership in the American Association of Pro-Life OB/GYNs.",
        "sourceIds": [
          "s-campaign-life",
          "s-senate-about"
        ]
      },
      "actions": [
        {
          "id": "a-born-alive-2025",
          "date": "2025-01-17",
          "body": "Marshall introduced the Born-Alive Abortion Survivors Protection Act with Sen. James Lankford, according to his Senate office.",
          "sourceIds": [
            "s-born-alive"
          ]
        },
        {
          "id": "a-unborn-child-support-2025",
          "date": "2025-01-25",
          "body": "Marshall and Sen. Kevin Cramer reintroduced the Unborn Child Support Act, according to his Senate office.",
          "sourceIds": [
            "s-unborn-child-support"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-agriculture-food-rural-economy",
      "title": "Agriculture, food, and rural economy",
      "stated": {
        "text": "Marshall's official record centers heavily on agriculture and rural\nKansas. His Senate biography lists Agriculture Committee service and a\nsubcommittee chairmanship. Recent official materials connect his work to\nschool milk, fertilizer input costs, year-round E15, farmers, ranchers,\nand rural mental-health access.",
        "sourceIds": [
          "s-senate-about",
          "s-congress-s222",
          "s-fertilizer-bill",
          "s-cost-living-interview"
        ]
      },
      "actions": [
        {
          "id": "a-whole-milk-law-2026",
          "date": "2026-01-14",
          "body": "S.222, the Whole Milk for Healthy Kids Act of 2025, introduced by Marshall, became Public Law 119-69.",
          "sourceIds": [
            "s-congress-s222",
            "s-whitehouse-s222"
          ]
        },
        {
          "id": "a-fertilizer-bill-2026",
          "date": "2026-04-28",
          "body": "Marshall introduced the Lowering Input Costs for American Farmers Act to remove tariffs and countervailing duties on phosphate fertilizer imports from Morocco.",
          "sourceIds": [
            "s-fertilizer-bill"
          ]
        },
        {
          "id": "a-e15-comments-2026",
          "date": "2026-05-18",
          "body": "Marshall said year-round E15 would consume another 2 billion bushels of corn and framed the issue as a farmer-versus-oil dispute.",
          "sourceIds": [
            "s-cost-living-interview"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-whole-milk-post",
          "platform": "X / public-news embed",
          "observation": "The local social harvest captured a 2026-01-14 post saying 'Whole milk is back!' Exact engagement totals were unavailable.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-agriculture-food-rural-economy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "2026-01-14 Whole Milk post: Tagged President Trump indirectly through the post text and was framed around a bill led with Sen. Peter Welch in official and news coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-aca-post"
          ],
          "mappedToIssueId": "i-agriculture-food-rural-economy"
        },
        {
          "id": "ss-crossref-4",
          "platform": "YouTube",
          "observation": "2026-04-20 — Senate site linked YouTube remarks from the HHS mental-health roundtable. Quote captured from official transcript: \"We lose more farmers every year to suicide than farm accidents.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-aca-post"
          ],
          "mappedToIssueId": "i-agriculture-food-rural-economy"
        }
      ]
    },
    {
      "id": "i-healthcare-mental-health",
      "title": "Healthcare and mental health",
      "stated": {
        "text": "Marshall frames healthcare through his physician and hospital background.\nHis current public materials emphasize health-cost reduction through\nprice transparency, PBM reform, prior authorization reform, and Medicare\nAdvantage changes. His mental-health materials name military families,\nfarmers, ranchers, rural Kansans, FRSAN, 988, and CCBHCs.",
        "sourceIds": [
          "s-senate-about",
          "s-medicare-advantage",
          "s-mental-health",
          "s-cost-living-interview"
        ]
      },
      "actions": [
        {
          "id": "a-medicare-advantage-2026",
          "date": "2026-04-27",
          "body": "Marshall and Sen. Sheldon Whitehouse introduced the Medicare Advantage Improvement Act.",
          "sourceIds": [
            "s-medicare-advantage"
          ]
        },
        {
          "id": "a-mental-health-roundtable-2026",
          "date": "2026-05-08",
          "body": "Marshall participated in a Junction City military-family mental-health roundtable and listed support for FRSAN, 988, and CCBHCs.",
          "sourceIds": [
            "s-mental-health"
          ]
        },
        {
          "id": "a-health-cost-interview-2026",
          "date": "2026-05-18",
          "body": "Marshall said price transparency, PBM reform, and prior authorization were healthcare-cost bills he wanted to finish.",
          "sourceIds": [
            "s-cost-living-interview"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-aca-post-2025",
          "platform": "X",
          "observation": "The local harvest captured a 2025-11-10 X post saying 'Up to 40% of Obamacare enrollees never file a claim.' X oEmbed did not return engagement totals.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-x-aca-post"
          ],
          "mappedToIssueId": "i-healthcare-mental-health"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Substack",
          "observation": "Substack: No candidate-controlled Substack found. The official Senate newsletter is A Doctor's Note.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-healthcare-mental-health"
        },
        {
          "id": "ss-crossref-4",
          "platform": "YouTube",
          "observation": "URL: Senate official transcript and YouTube link",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-healthcare-mental-health"
        }
      ]
    },
    {
      "id": "i-immigration-border",
      "title": "Immigration and border security",
      "stated": {
        "text": "Marshall's official materials support stricter border enforcement,\nincluding Secure the Border Act provisions on border-wall construction,\nasylum standards, more Border Patrol agents, parole limits, E-Verify,\nCBP One limits, and restrictions on federal funds used by NGOs for\nmigrant transport or lodging.",
        "sourceIds": [
          "s-secure-border",
          "s-manufacturing-border-defense"
        ]
      },
      "actions": [
        {
          "id": "a-secure-border-2023",
          "date": "2023-09-15",
          "body": "Marshall cosponsored the Secure the Border Act of 2023, according to his Senate office.",
          "sourceIds": [
            "s-secure-border"
          ]
        },
        {
          "id": "a-border-funding-2026",
          "date": "2026-05-18",
          "body": "Marshall said Congress would work to fund ICE and Border Patrol after a Senate parliamentarian issue.",
          "sourceIds": [
            "s-manufacturing-border-defense"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-border-sample",
          "platform": "X / public-news embeds",
          "observation": "The local social harvest identified four border, immigration, or DHS items in the 28-item captured sample. Direct engagement totals were unavailable.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-immigration-border"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "2026-04-02 — Fox News video, \"Sen Roger Marshall: We can’t even get the bipartisan Farm Bill passed, much less immigration reform.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-aca-post"
          ],
          "mappedToIssueId": "i-immigration-border"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Topic distribution in the captured sample: healthcare and mental health — 7 of 28 (25%); agriculture, food, and rural producers — 6 of 28 (21%); budget, tax, and economic messages naming Trump — 6 of 28 (21%); border, immigration, and DHS — 4 of 28 (14%); foreign policy and national security — 3 of 28 (11%); public safety and technology-platform oversight — 2 of 28 (7%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-aca-post"
          ],
          "mappedToIssueId": "i-immigration-border"
        }
      ]
    },
    {
      "id": "i-guns-second-amendment",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Marshall's official statements oppose red flag laws and describe\nfirearms access as a constitutional-rights issue. His office has also\nannounced legislation on interstate firearms transactions.",
        "sourceIds": [
          "s-gun-vote-statement",
          "s-firearms-commerce"
        ]
      },
      "actions": [
        {
          "id": "a-gun-bill-no-2022",
          "date": "2022-06-24",
          "body": "Marshall's office said he voted against the 2022 federal gun reform legislation and released a statement objecting to red flag laws.",
          "sourceIds": [
            "s-gun-vote-statement"
          ]
        },
        {
          "id": "a-firearms-commerce-2024",
          "date": "2024-07-12",
          "body": "Marshall joined Sen. Kevin Cramer in introducing the Firearms Interstate Commerce Reform Act.",
          "sourceIds": [
            "s-firearms-commerce"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "marshall.senate.gov",
          "observation": "Gun-policy action: Marshall's office said he voted against the 2022 gun reform bill and released a statement opposing red flag laws. His office also lists 2024 cosponsorship of the Firearms Interstate Commerce Reform Act. Sources: https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-votes-against-gun-grabbing-scheme/ and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-gun-vote-statement"
          ],
          "mappedToIssueId": "i-guns-second-amendment"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Action evidence: On 2022-06-24, Marshall's office said he voted against the federal gun reform bill and released a statement saying he would not support what he called a \"gun grabbing scheme.\" The release specifically objected to red flag laws.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-aca-post"
          ],
          "mappedToIssueId": "i-guns-second-amendment"
        }
      ]
    },
    {
      "id": "i-budget-cost-of-living",
      "title": "Federal spending and cost of living",
      "stated": {
        "text": "Marshall's current materials connect cost of living to healthcare prices,\ncredit-card swipe fees, fuel/E15, housing, child care, and federal budget\nprocess. His budget-process release calls for structural changes to CBO\ntransparency, baselines, biennial budgeting, deadline enforcement, and\nzero-based budgeting with Social Security, Medicare, and Medicaid exempted.",
        "sourceIds": [
          "s-budget-reform",
          "s-credit-card-competition",
          "s-cost-living-interview"
        ]
      },
      "actions": [
        {
          "id": "a-budget-reform-2025",
          "date": "2025-06-17",
          "body": "Marshall introduced the Budget Reform Act of 2025, according to his Senate office.",
          "sourceIds": [
            "s-budget-reform"
          ]
        },
        {
          "id": "a-credit-card-competition-2026",
          "date": "2026-01-13",
          "body": "Marshall and Sen. Dick Durbin reintroduced the Credit Card Competition Act.",
          "sourceIds": [
            "s-credit-card-competition"
          ]
        },
        {
          "id": "a-cost-living-interview-2026",
          "date": "2026-05-18",
          "body": "Marshall said his focus was cost of living and named gas, groceries, housing, child care, health care, swipe fees, and year-round E15.",
          "sourceIds": [
            "s-cost-living-interview"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-credit-card-trump-support",
          "platform": "X / public-news embed",
          "observation": "The local social harvest captured a 2026-01-13 post thanking President Trump for support of the Credit Card Competition Act. Exact engagement totals were unavailable.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-budget-cost-of-living"
        },
        {
          "id": "ss-crossref-2",
          "platform": "KWCH",
          "observation": "Context: KWCH covered Marshall’s Lowering Input Costs for American Farmers Act.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-aca-post"
          ],
          "mappedToIssueId": "i-budget-cost-of-living"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Across the captured sample the feed contains direct local content about rural hospitals, mental health, farmers, ranchers, small businesses, western Kansas, southeast Kansas, Fort Riley military families, fertilizer costs, and school milk.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-aca-post"
          ],
          "mappedToIssueId": "i-budget-cost-of-living"
        }
      ]
    },
    {
      "id": "i-foreign-policy-defense",
      "title": "Foreign policy and defense spending",
      "stated": {
        "text": "Marshall's official statement on H.R. 815 opposed additional Ukraine aid,\nwhile later 2026 official interview material said he would be a hard sell\non an additional Pentagon supplemental and connected that view to the\nnational debt.",
        "sourceIds": [
          "s-foreign-aid-statement",
          "s-manufacturing-border-defense"
        ]
      },
      "actions": [
        {
          "id": "a-foreign-aid-nay-2024",
          "date": "2024-04-23",
          "body": "Marshall voted nay on concurring in the House amendment to H.R. 815; the motion passed 79-18.",
          "sourceIds": [
            "s-senate-foreign-aid-2024",
            "s-foreign-aid-statement"
          ]
        },
        {
          "id": "a-defense-supplemental-comments-2026",
          "date": "2026-05-18",
          "body": "Marshall said he would be a hard sell on an additional Pentagon supplemental and named the national debt as a concern.",
          "sourceIds": [
            "s-manufacturing-border-defense"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-foreign-policy-sample",
          "platform": "X / public-news embeds",
          "observation": "The local social harvest identified three foreign-policy or national-security items in the 28-item captured sample. Direct engagement totals were unavailable.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-foreign-policy-defense"
        },
        {
          "id": "ss-crossref-2",
          "platform": "kshb.com",
          "observation": "On national and foreign-policy questions, Marshall’s captured posts name Trump or administration officials on Ukraine, Iran, border enforcement, federal spending, and Senate procedure. After the February 2025 Oval Office meeting with Ukrainian President Volodymyr Zelenskyy, he posted, \"Thank you, @POTUS and @VP, for standing up for America\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-foreign-policy-defense"
        },
        {
          "id": "ss-crossref-4",
          "platform": "marshall.senate.gov",
          "observation": "For Kansas-specific engagement, Marshall’s official feed and Senate site include rural healthcare, small business tax policy, agriculture, cattle, school milk, fertilizer, and in-person stops across the state. On April 28, 2026, his office quoted him saying, \"Kansas farmers are getting hit by a fertilizer market that’s working against them\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-fertilizer-bill"
          ],
          "mappedToIssueId": "i-foreign-policy-defense"
        }
      ]
    },
    {
      "id": "i-election-certification-public-trust",
      "title": "Election certification and public trust",
      "stated": {
        "text": "Marshall's Senate voting record includes yea votes on sustaining\nobjections to Arizona and Pennsylvania electoral votes on January 6-7,\n2021. This issue card records the roll-call actions without inferring\nmotive.",
        "sourceIds": [
          "s-senate-az-objection",
          "s-senate-pa-objection"
        ]
      },
      "actions": [
        {
          "id": "a-az-objection-2021",
          "date": "2021-01-06",
          "body": "Marshall voted yea on sustaining the Arizona electoral-vote objection; the objection failed 6-93.",
          "sourceIds": [
            "s-senate-az-objection"
          ]
        },
        {
          "id": "a-pa-objection-2021",
          "date": "2021-01-07",
          "body": "Marshall voted yea on sustaining the Pennsylvania electoral-vote objection; the objection failed 7-92.",
          "sourceIds": [
            "s-senate-pa-objection"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-constituent-access-town-halls",
      "title": "Constituent access and town-hall record",
      "stated": {
        "text": "Marshall's official site and social materials include Kansas visits and\ncounty-tour messaging. The most documented conflict in the reviewed\nrecord is the March 2025 Oakley town hall, where a candidate-controlled\nsocial post and later reported statement can be compared directly.",
        "sourceIds": [
          "s-lawrence-townhall"
        ]
      },
      "actions": [
        {
          "id": "a-oakley-townhall-coverage-2025",
          "date": "2025-03-07",
          "body": "Kansas News Service reported that attendees at the Oakley town hall said they were Kansans concerned about federal funding cuts, agriculture, layoffs, tariffs, veterans issues, and other topics.",
          "sourceIds": [
            "s-lawrence-townhall"
          ]
        },
        {
          "id": "a-no-firsthand-evidence-2025",
          "date": "2025-03-07",
          "body": "Kansas News Service reported Marshall later said he did not have firsthand evidence for the paid-attendee account.",
          "sourceIds": [
            "s-lawrence-townhall"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-townhall-can-confirm",
          "platform": "X",
          "observation": "The local harvest captured Marshall's 2025-03-03 X post saying 'Can confirm' in response to a Trump Truth Social post about paid troublemakers at Republican town halls. X oEmbed did not return engagement totals.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-x-townhall-post"
          ],
          "mappedToIssueId": "i-constituent-access-town-halls"
        }
      ],
      "gap": {
        "summary": "Marshall's social post said 'Can confirm' about paid town-hall attendees; Kansas News Service later reported him saying he did not have firsthand evidence.",
        "evidenceIds": [
          "ss-townhall-can-confirm",
          "a-no-firsthand-evidence-2025"
        ]
      }
    },
    {
      "id": "i-faith-community-and-caucuses",
      "title": "Faith, community, and caucus memberships",
      "stated": {
        "text": "Marshall's Senate biography says he and Laina taught Sunday school for\nmore than 25 years and that he served as elder, deacon, and board\nchairman of his church. It also lists GOP Doctors Caucus, Pro-Life\nCaucus, Western Caucus, Friends of Australia Caucus, Congressional Rare\nDisease Caucus, and Senate Hunger Caucus. This is descriptive public\nrecord, not a basis for inferring private belief.",
        "sourceIds": [
          "s-senate-about"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "ownWordsNarrative": "Social research is included only as observed public behavior. The local\nsocial harvest covered X, Facebook, YouTube, Instagram, LinkedIn, Truth\nSocial, Gab, Gettr, Substack, Reddit, TikTok, official Senate site, and\npublic-news embeds. Direct X/Facebook/Instagram engagement totals were not\nvisible. No current candidate-controlled Truth Social, Gab, Reddit, TikTok,\nSubstack, or accessible Gettr activity was confirmed.",
  "whereTheyWorship": "Marshall's church is First Christian Church in Great Bend, a Disciples of Christ congregation. Public records tie him to the church as an elder, deacon, board chair, and Sunday school teacher, making his involvement long-running and public rather than incidental.",
  "campaignFinance": {
    "totalRaised": "$3,331,963.38 receipts for 2025-2026 coverage through 2026-03-31; $4,781,258.78 ending cash on hand.",
    "narrative": "FEC records show a large incumbent Senate committee. Through 2026-03-31,\nKansans for Marshall reported $3.33 million in receipts, $255,723.24 in\ndisbursements, and $4.78 million cash on hand. Other committee contributions\nexceeded $1.23 million, with visible agriculture, health, business, logistics,\ntechnology, and ideological PAC examples in itemized receipts. The example\ndonor list is not a comprehensive ranking.",
    "donors": [
      {
        "name": "Other committee contributions",
        "amount": "$1,233,250.00 total"
      },
      {
        "name": "Total individual contributions",
        "amount": "$1,461,071.57 total"
      },
      {
        "name": "Transfers from other authorized committees",
        "amount": "$519,607.86 total"
      },
      {
        "name": "Mississippi Farm Bureau Federation Furthering Agriculture for Rural Mississippians Fund PAC",
        "amount": "$10,000 itemized receipt example on 2025-05-23, plus redesignation entry"
      },
      {
        "name": "Nutrien Ag Solutions Employee Citizenship Fund PAC",
        "amount": "$10,000 itemized receipt example on 2025-01-29"
      },
      {
        "name": "Dairy Farmers of America Inc. PAC",
        "amount": "$5,000 itemized receipt example on 2025-06-30"
      },
      {
        "name": "Senate Conservatives Fund",
        "amount": "$5,000 itemized receipt example on 2025-05-23"
      }
    ],
    "reportingPeriod": "2025-01-01 through 2026-03-31",
    "source": "FEC committee summary for Kansans for Marshall, C00576173"
  },
  "sources": [
    {
      "id": "s-senate-about",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/about/",
      "title": "About Doc",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall practiced medicine in Great Bend for more than 25 years",
        "Marshall delivered more than 5,000 babies as an OB-GYN",
        "Marshall served seven years in the Army Reserve",
        "Marshall currently serves on Agriculture, Finance, HELP, and Budget",
        "Marshall's official biography lists church leadership and caucus memberships"
      ]
    },
    {
      "id": "s-campaign-life",
      "tier": "primary",
      "url": "https://kansansformarshall.com/life",
      "title": "A Pro-Life Leader in Congress",
      "publisher": "Kansans for Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign page states Marshall's position that abortion is wrong at any stage",
        "Campaign page connects the life issue to his OB-GYN background and AAPLOG membership"
      ]
    },
    {
      "id": "s-born-alive",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senators-marshall-risch-and-senate-gop-colleagues-introduce-bill-to-protect-babies-born-after-botched-abortions-from-infanticide/",
      "title": "Born-Alive Abortion Survivors Protection Act Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall introduced the Born-Alive Abortion Survivors Protection Act with Sen. James Lankford",
        "The release describes care, transfer, reporting, private-rights, and penalty provisions"
      ]
    },
    {
      "id": "s-unborn-child-support",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senators-marshall-cramer-introduce-bill-allowing-child-support-for-pregnant-mothers/",
      "title": "Unborn Child Support Act Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall and Sen. Kevin Cramer reintroduced the Unborn Child Support Act on 2025-01-25"
      ]
    },
    {
      "id": "s-congress-s222",
      "tier": "primary",
      "url": "https://www.congress.gov/bill/119th-congress/senate-bill/222",
      "title": "S.222 - Whole Milk for Healthy Kids Act of 2025",
      "publisher": "Congress.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall introduced S.222 on 2025-01-23",
        "S.222 became Public Law 119-69 on 2026-01-14"
      ]
    },
    {
      "id": "s-whitehouse-s222",
      "tier": "primary",
      "url": "https://www.whitehouse.gov/briefings-statements/2026/01/congressional-bill-s-222-signed-into-law/",
      "title": "Congressional Bill S.222 Signed into Law",
      "publisher": "The White House",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "President signed S.222, the Whole Milk for Healthy Kids Act of 2025, into law on 2026-01-14"
      ]
    },
    {
      "id": "s-fertilizer-bill",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-drops-bill-to-cut-fertilizer-costs-for-american-farmers/",
      "title": "Lowering Input Costs for American Farmers Act Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall introduced fertilizer legislation on 2026-04-28",
        "The bill would eliminate tariffs and countervailing duties on phosphate fertilizer imports from Morocco",
        "The release lists farm-organization support",
        "Observed public online activity mapped to Foreign policy and defense spending."
      ]
    },
    {
      "id": "s-medicare-advantage",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senators-marshall-whitehouse-introduce-bill-to-fix-medicare-advantage-for-seniors/",
      "title": "Medicare Advantage Improvement Act Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall and Sen. Sheldon Whitehouse introduced the Medicare Advantage Improvement Act on 2026-04-27",
        "The release describes prior-authorization, denial, reporting, and network-adequacy provisions"
      ]
    },
    {
      "id": "s-mental-health",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-recognizes-national-mental-health-awareness-month/",
      "title": "National Mental Health Awareness Month Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall participated in a Military Family Mental Health Roundtable in Junction City on 2026-05-08",
        "Marshall advocated FRSAN, 988, and CCBHC support",
        "The release ties mental-health access to military families, farmers, ranchers, and rural Kansans"
      ]
    },
    {
      "id": "s-cost-living-interview",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-we-have-solutions-to-bring-down-costs-now-we-have-to-finish-the-job/",
      "title": "Marshall Interview on Cost of Living",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall discussed cost of living, health costs, credit-card swipe fees, and year-round E15 on 2026-05-18",
        "Marshall said year-round E15 could consume another 2 billion bushels of corn",
        "Marshall said price transparency, PBM reform, and prior authorization were health-cost priorities"
      ]
    },
    {
      "id": "s-credit-card-competition",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/marshall-durbin-reintroduce-credit-card-competition-act-backed-by-president-trump/",
      "title": "Credit Card Competition Act Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall and Sen. Dick Durbin reintroduced the Credit Card Competition Act on 2026-01-13",
        "The release frames the bill around swipe fees, competition, small businesses, and consumer costs"
      ]
    },
    {
      "id": "s-budget-reform",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-introduces-comprehensive-bill-to-reform-americas-dysfunctional-budget-process/",
      "title": "Budget Reform Act of 2025 Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall introduced the Budget Reform Act of 2025 on 2025-06-17",
        "The release describes CBO transparency, zero-based budgeting, biennial budgeting, enforcement, baselines, and deadline reforms"
      ]
    },
    {
      "id": "s-secure-border",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-supports-secure-the-border-act/",
      "title": "Secure the Border Act Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall cosponsored the Secure the Border Act of 2023",
        "The release describes border wall, asylum, Border Patrol, parole, CBP One, E-Verify, and NGO funding provisions"
      ]
    },
    {
      "id": "s-manufacturing-border-defense",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-manufacturing-is-booming-in-kansas/",
      "title": "Marshall Interview on Manufacturing, DHS Funding, Iran, and Defense Spending",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall discussed ICE and Border Patrol funding on 2026-05-18",
        "Marshall discussed Kansas manufacturing and tariffs",
        "Marshall said he was a hard sell on an additional Pentagon supplemental and named national debt as a concern"
      ]
    },
    {
      "id": "s-gun-vote-statement",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-votes-against-gun-grabbing-scheme/",
      "title": "Statement on Gun Reform Legislation",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall's office said he voted against the 2022 gun reform legislation",
        "Marshall's statement objected to red flag laws",
        "Observed public online activity mapped to Guns / Second Amendment."
      ]
    },
    {
      "id": "s-firearms-commerce",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senators-introduce-legislation-to-allow-interstate-firearm-sales/",
      "title": "Firearms Interstate Commerce Reform Act Release",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall joined Sen. Kevin Cramer in introducing the Firearms Interstate Commerce Reform Act on 2024-07-12"
      ]
    },
    {
      "id": "s-senate-az-objection",
      "tier": "primary",
      "url": "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00001.htm",
      "title": "Senate Roll Call Vote 117-1-00001 - Arizona Electoral Objection",
      "publisher": "U.S. Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall voted yea on sustaining the Arizona electoral-vote objection on 2021-01-06",
        "The objection failed 6-93"
      ]
    },
    {
      "id": "s-senate-pa-objection",
      "tier": "primary",
      "url": "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00002.htm",
      "title": "Senate Roll Call Vote 117-1-00002 - Pennsylvania Electoral Objection",
      "publisher": "U.S. Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall voted yea on sustaining the Pennsylvania electoral-vote objection on 2021-01-07",
        "The objection failed 7-92"
      ]
    },
    {
      "id": "s-senate-foreign-aid-2024",
      "tier": "primary",
      "url": "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00154.htm",
      "title": "Senate Roll Call Vote 118-2-00154 - H.R. 815",
      "publisher": "U.S. Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall voted nay on concurring in the House amendment to H.R. 815 on 2024-04-23",
        "The motion passed 79-18"
      ]
    },
    {
      "id": "s-foreign-aid-statement",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-releases-statement-on-foreign-aid-bill/",
      "title": "Statement on Foreign Aid Bill",
      "publisher": "Office of U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall's office said he would vote against the foreign aid bill",
        "The statement objected to additional Ukraine aid"
      ]
    },
    {
      "id": "s-lawrence-townhall",
      "tier": "secondary",
      "url": "https://lawrencekstimes.com/2025/03/07/marshall-paid-ops-concerned-kansans/",
      "title": "Roger Marshall called them 'paid Democratic operatives.' They say they're just concerned Kansans",
      "publisher": "The Lawrence Times / Kansas News Service",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Marshall shared a Trump post about paid town-hall attendees and wrote 'Can confirm'",
        "Marshall later said he did not have firsthand evidence",
        "Kansas News Service reported attendees who described themselves as Kansans concerned about federal funding, agriculture, layoffs, tariffs, veterans issues, and other topics"
      ]
    },
    {
      "id": "s-x-aca-post",
      "tier": "social",
      "url": "https://x.com/RogerMarshallMD/status/1987679877470810388",
      "title": "X post on ACA enrollees",
      "publisher": "X / RogerMarshallMD",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "The local social harvest captured a 2025-11-10 X post: 'Up to 40% of Obamacare enrollees never file a claim'",
        "X oEmbed did not return engagement totals"
      ]
    },
    {
      "id": "s-x-townhall-post",
      "tier": "social",
      "url": "https://x.com/RogerMarshallMD/status/1896583775557243254",
      "title": "X post: Can confirm",
      "publisher": "X / RogerMarshallMD",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "The local social harvest captured Marshall's 2025-03-03 X post saying 'Can confirm'",
        "X oEmbed did not return engagement totals"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/",
      "title": "Substack / Marshall.Senate",
      "publisher": "Marshall.Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Healthcare and mental health.",
        "Substack: No candidate-controlled Substack found. The official Senate newsletter is A Doctor's Note."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-we-must-treat-the-root-cause-of-mental-health-not-just-medicate-it/",
      "title": "YouTube / Marshall.Senate",
      "publisher": "Marshall.Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Healthcare and mental health.",
        "URL: Senate official transcript and YouTube link"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/kansas-missouri-political-leaders-offer-reaction-to-trump-zelenskyy-oval-office-meeting",
      "title": "kshb.com / Kshb",
      "publisher": "Kshb",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Foreign policy and defense spending.",
        "On national and foreign-policy questions, Marshall’s captured posts name Trump or administration officials on Ukraine, Iran, border enforcement, federal spending, and Senate proced"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ROGER_MARSHALL_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[roger-marshall.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
