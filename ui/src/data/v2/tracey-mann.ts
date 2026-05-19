/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const TRACEY_MANN_V2: CandidateFullV2 = {
  "slug": "tracey-mann",
  "name": "Tracey Mann",
  "party": "R",
  "position": "U.S. Representative, Kansas's 1st Congressional District",
  "electionSlug": "ks-01-house-2026",
  "incumbent": true,
  "occupation": "Farmer / real estate broker; U.S. Representative",
  "born": "December 17, 1976",
  "hometown": "Quinter, Kansas",
  "religion": "Christian (Evangelical Covenant)",
  "education": "Kansas State University, B.S. Business Administration",
  "family": "Married to Audra Mann; four children",
  "district": "KS-01",
  "margin2024": "Won re-election 2024 with 66.2% of the vote",
  "issues": [
    {
      "id": "i-agriculture-food-coalitions",
      "title": "Agriculture, food aid, and bipartisan farm coalitions",
      "stated": {
        "text": "Mann's strongest public lane is agriculture. He presents himself as a\nBig First farm-district member, chairs the House Agriculture livestock\nsubcommittee, and has formal bipartisan food-and-agriculture caucus\nroles. The v2 scrape materially widens the picture from a simple\nconservative-caucus profile: on agriculture and hunger, he has worked\nin named bipartisan structures with Democrats including Jimmy Panetta,\nJim McGovern, Marcy Kaptur, and Sherrod Brown.",
        "sourceIds": [
          "s-mann-committees-caucuses",
          "s-ffa-caucus-members",
          "s-ksffa-ffa-reestablish",
          "s-mcgovern-hunger-caucus",
          "s-mann-kaptur-farmer-first"
        ]
      },
      "actions": [
        {
          "id": "a-kaptur-biofuels-2024-09-24",
          "date": "2024-09-24",
          "body": "Co-led a bipartisan, bicameral biofuels effort with Rep. Marcy Kaptur\nand Senators Roger Marshall and Sherrod Brown, focused on Clean Fuel\nProduction Credit eligibility for domestically produced feedstocks.",
          "sourceIds": [
            "s-mann-kaptur-farmer-first"
          ]
        },
        {
          "id": "a-food-for-peace-hr1207-2025-02-11",
          "date": "2025-02-11",
          "body": "Introduced H.R. 1207, a bill to transfer Food for Peace Act functions\nfrom USAID to USDA. At a Colby town hall, he framed the idea as\nsending Kansas-grown commodities and said he wanted to see it\ncodified into law.",
          "sourceIds": [
            "s-congress-hr1207",
            "s-congress-hr1207-pdf",
            "s-indivisible-colby-townhall-2026"
          ]
        },
        {
          "id": "a-ffa-caucus-cochair",
          "date": "2023-01-27",
          "body": "Reestablished the Congressional FFA Caucus with Rep. Jimmy Panetta.\nKansas FFA reported that Mann and Panetta co-founded the caucus on\nDecember 2, 2021, and the current caucus member page lists Mann and\nPanetta as chairs.",
          "sourceIds": [
            "s-ffa-caucus-members",
            "s-ksffa-ffa-reestablish"
          ]
        },
        {
          "id": "a-hunger-caucus-relaunch",
          "date": "2023-02-09",
          "body": "Relaunched the bipartisan House Hunger Caucus with Rep. Jim McGovern,\nserving as the Republican co-chair in a caucus focused on domestic\nand international hunger and food insecurity.",
          "sourceIds": [
            "s-mcgovern-hunger-caucus"
          ]
        },
        {
          "id": "a-nawg-wheat-leader-2026",
          "date": "2026-01-30",
          "body": "Accepted NAWG 2025 Wheat Leader of the Year recognition at the Kansas\nCommodity Classic in Salina, with coverage tying the award to his\nFood for Peace work and wheat advocacy.",
          "sourceIds": [
            "s-little-apple-nawg-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Mann was recognized as the National Association of Wheat Growers (NAWG) \"Wheat Leader of the Year\" at the Kansas Commodity Classic in Salina on 2026-01-30. He used the platform to recap 2025 accomplishments and Farm Bill progress.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-agriculture-food-coalitions"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Issue-mapping rationale: The stepped-up basis quote → Agriculture IssueCard. The $34T debt quote → Federal Spending / Appropriations IssueCard. The immigration framing → Immigration IssueCard.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-agriculture-food-coalitions"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Issue-mapping rationale: The DOGE quote → Federal Spending / Government Reform IssueCard. The Ogallala/water quote → an issue card the v1 entry currently lacks but should likely add (water policy in KS-01) — flag for narrative-writer in stage 2.c.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-agriculture-food-coalitions"
        }
      ]
    },
    {
      "id": "i-healthcare-medicaid",
      "title": "Healthcare, Medicaid, and safety-net programs",
      "stated": {
        "text": "Before the H.R. 1 vote, Mann told KWCH it was a false narrative to say\nRepublicans were going to cut Medicaid and said Medicaid would be\npreserved for the people it was intended for. At a Colby town hall, he\nalso said Medicare and Social Security cuts were not being discussed in\nmeetings he was part of and that those programs were off the table.",
        "sourceIds": [
          "s-kwch-medicaid-2025",
          "s-indivisible-colby-townhall-2026"
        ]
      },
      "actions": [
        {
          "id": "a-hr1-yea-2025-05-22",
          "date": "2025-05-22",
          "body": "Voted yes on House passage of H.R. 1, the One Big Beautiful Bill Act,\nin a 215-214 vote. The deep scrape uses the Clerk and Congress.gov\nvote pages as canonical primary anchors, with Mann's yea vote\nconfirmed through multiple independent mirrors because clerk XML was\nfetch-blocked in this environment.",
          "sourceIds": [
            "s-clerk-hr1-2025-145",
            "s-congress-hr1-2025-145"
          ]
        },
        {
          "id": "a-obbba-medicaid-statement-2025-06-09",
          "date": "2025-06-09",
          "body": "In his own post-vote statement, Mann said Medicaid and SNAP had been\nexploited and expanded beyond their initial intent and defended work\nor volunteer requirements for able-bodied adults without young\nchildren.",
          "sourceIds": [
            "s-mann-obbba-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "In May 2025, before the House vote, Mann told KSNT-TV (Topeka): \"I strongly believe we must strengthen Medicaid to protect benefits for the thousands of vulnerable Kansans who rely on it.\" On 2025-05-22 he voted YES on the One Big Beautiful Bill Act, which passed the House 215-214. The Alliance for a Healthy Kansas estimates Kansas hospitals would lose up to $2.65 billion over 10 years and Kansas would lose...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-healthcare-medicaid"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Observation 2.B — Colby town hall, 2026-02-19, exchange on Medicare/Social Security.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-healthcare-medicaid"
        },
        {
          "id": "ss-crossref-5",
          "platform": "substack",
          "observation": "At the Feb 19, 2025 Colby, KS town hall (per Indivisible MHK substack transcript), a constituent raised concerns about potential Medicare/Social Security cuts. Mann's verbatim response: \"There are no cuts being discussed in any meeting I've been a part of. President Trump has made it very clear that those programs are off the table.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-healthcare-medicaid"
        }
      ],
      "gap": {
        "summary": "Readers can compare Mann's pre-vote assurance that proposed Medicaid\nchanges were not cuts with his later yea vote on H.R. 1 and his own\npost-vote statement saying Medicaid and SNAP had been expanded beyond\ntheir initial intent. The page should present both statements without\ndeciding whether the change is a contradiction, a narrower definition\nof cuts, or consistent eligibility-policy framing.",
        "evidenceIds": [
          "a-hr1-yea-2025-05-22",
          "a-obbba-medicaid-statement-2025-06-09"
        ]
      }
    },
    {
      "id": "i-aviation-rotor-act",
      "title": "Aviation safety and the ROTOR Act",
      "stated": {
        "text": "Mann's office said aviation safety is a top priority and argued that\nthe ROTOR Act moved too quickly: it was drafted before the NTSB final\nreport and did not move through the normal Transportation and\nInfrastructure Committee process. That rationale closes the earlier v1\ngap that Mann had not publicly explained his vote.",
        "sourceIds": [
          "s-kwch-rotor-2026",
          "s-rollcall-rotor-2026"
        ]
      },
      "actions": [
        {
          "id": "a-rotor-act-nay-2026-02-24",
          "date": "2026-02-24",
          "body": "Voted no on S. 2503, the ROTOR Act. The bill failed 264-133, one vote\nshort of the two-thirds threshold under suspension of the rules. Mann\nwas the only Kansas House member to vote no, while his vote also fit\na broader Republican opposition pattern that included 132 Republican\nno votes.",
          "sourceIds": [
            "s-clerk-rotor-2026-72",
            "s-congress-rotor-2026",
            "s-kwch-rotor-2026",
            "s-rollcall-rotor-2026",
            "s-kansas-reflector-rotor-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "The v1 entry is the most complete of any candidate. My pass focuses on observable behaviors NOT captured there: caucus/affiliation memberships, bipartisan co-leadership, specific exchanges at the Colby and Hays town halls, his own stated rationale for the ROTOR Act vote (the existing entry says \"Mann has not offered detailed public comment on the vote\" — that gap can now be closed), recent press-release co-led...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-aviation-rotor-act"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Observation 3.A — Voted NO on ROTOR Act 2026-02-24; House vote 264-133, fell one vote short of needed threshold.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-aviation-rotor-act"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "Per the Kansas Reflector / Lawrence Journal-World coverage of the vote, Mann stated that while he appreciates the intent behind the ROTOR Act, \"it was drafted prior to the release of the National Transportation Safety Board's investigation and recommendations.\" He also noted \"the legislation did not move through the normal Transportation and Infrastructure Committee process, where complex aviation policy is...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-aviation-rotor-act"
        }
      ]
    },
    {
      "id": "i-immigration-border-labor",
      "title": "Immigration, border security, and agricultural labor",
      "stated": {
        "text": "Mann's town-hall language combines border-security emphasis with an\nacknowledgement that agriculture depends on workers in the country to\ndo farm jobs. In Hays and Colby, he framed the border as a common-sense\nsecurity issue while also saying agriculture has to have people in the\ncountry to do the work.",
        "sourceIds": [
          "s-hayspost-townhall-2024",
          "s-indivisible-colby-townhall-2026"
        ]
      },
      "actions": [
        {
          "id": "a-hays-townhall-border-2024-07-02",
          "date": "2024-07-02",
          "body": "At a Hays town hall, answered constituent questions on immigration\nand border security as part of his 60-county listening-tour cadence.\nHays Post carried direct quotes from the exchange.",
          "sourceIds": [
            "s-hayspost-townhall-2024"
          ]
        },
        {
          "id": "a-colby-townhall-immigration-2026-02-19",
          "date": "2026-02-19",
          "body": "At a Colby town hall, said the country needed common sense and a\nborder, said enforcement priority would focus on convicted criminals,\nand said agriculture needs workers in the country to do jobs.",
          "sourceIds": [
            "s-indivisible-colby-townhall-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "KAKE",
          "observation": "Engagement metrics on individual posts (the 10/14/25 border-security FB post: 2,900 reactions / 343 comments / 79 shares; 6/20/25 KAKE Iran-strike repost: visible dissent)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-immigration-border-labor"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Mann's documented topics at the Hays event: stepped-up basis tax provision for farms (\"I have taken the lead in Congress in fighting the fight to maintain the stepped-up basis\"), $34 trillion national debt (\"We cannot continue to spend money like we are federally and think that we're not going to reap the consequences\"), and immigration/border (\"makes no sense at all\").",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-immigration-border-labor"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "U.S. Rep. Mann's addresses immigration, national debt in Hays (Hays Post) — accessed 2026-05-20",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-townhall-2024"
          ],
          "mappedToIssueId": "i-immigration-border-labor"
        }
      ]
    },
    {
      "id": "i-election-certification-jan6",
      "title": "2020 election certification and January 6 objections",
      "stated": {
        "text": "Mann's January 6 record is historical rather than a fresh 2026\ncampaign message in the v2 scrape. The reason it remains in the v2\nprofile is that the official Congressional Record and vote mirrors give\nprimary anchors for a major early congressional action already covered\nin the v1 dossier.",
        "sourceIds": [
          "s-congressional-record-jan6",
          "s-govinfo-jan6"
        ]
      },
      "actions": [
        {
          "id": "a-az-objection-yea-2021-01-06",
          "date": "2021-01-06",
          "body": "Voted yea on the Arizona electoral objection, meaning he voted to\nsustain the objection to Arizona's electoral votes. The objection was\nrejected by the House.",
          "sourceIds": [
            "s-congressional-record-jan6",
            "s-govinfo-jan6",
            "s-govtrack-az-objection"
          ]
        },
        {
          "id": "a-pa-objection-yea-2021-01-07",
          "date": "2021-01-07",
          "body": "Voted yea on the Pennsylvania electoral objection, meaning he voted\nto sustain the objection to Pennsylvania's electoral votes. The\nobjection was rejected by the House.",
          "sourceIds": [
            "s-congressional-record-jan6",
            "s-govinfo-jan6",
            "s-govtrack-pa-objection"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-constituent-access-townhalls",
      "title": "Constituent access and town halls",
      "stated": {
        "text": "Mann has made town halls and listening tours a visible part of his\ncongressional identity. The v2 scrape anchors both the quantitative\nclaim from his own X account and specific town-hall exchanges in Hays\nand Colby, while treating the oppositional framing around the Colby\ntranscript as non-admissible.",
        "sourceIds": [
          "s-hayspost-townhall-2024",
          "s-indivisible-colby-townhall-2026"
        ]
      },
      "actions": [
        {
          "id": "a-hays-townhall-2024-07-02",
          "date": "2024-07-02",
          "body": "Held a Hays town hall at Hays Public Library as part of the 60-county\nMann Listening Tour. Hays Post captured direct exchanges on stepped-up\nbasis, national debt, immigration, and the Biden administration.",
          "sourceIds": [
            "s-hayspost-townhall-2024"
          ]
        },
        {
          "id": "a-colby-townhall-2026-02-19",
          "date": "2026-02-19",
          "body": "Took questions at a Colby town hall covering Medicare, Social\nSecurity, DOGE, immigration, water, and Food for Peace. The source is\nan oppositional transcript, so only verbatim Mann quotes are used.",
          "sourceIds": [
            "s-indivisible-colby-townhall-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-townhall-count-x-2024",
          "platform": "X",
          "observation": "Mann's verified congressional account stated on August 22, 2024 that\nhe had hosted 246 town halls across Kansas since 2021 and completed\nthat year's 60-county listening tour.",
          "observedAt": "2024-08-22",
          "sourceIds": [
            "s-x-mann-townhalls-2024"
          ],
          "mappedToIssueId": "i-constituent-access-townhalls"
        }
      ]
    },
    {
      "id": "i-federal-spending-government-reform",
      "title": "Federal spending and government reform",
      "stated": {
        "text": "Mann's public spending language emphasizes debt, waste, fraud, abuse,\nand agency accountability. At a Colby town hall he defended DOGE-style\nscrutiny by saying it was finding things Congress had been requesting,\nand in Hays he spoke about the national debt in the same constituent\naccess setting.",
        "sourceIds": [
          "s-hayspost-townhall-2024",
          "s-indivisible-colby-townhall-2026",
          "s-mann-obbba-2025"
        ]
      },
      "actions": [
        {
          "id": "a-hays-debt-townhall-2024-07-02",
          "date": "2024-07-02",
          "body": "Addressed federal spending and the national debt at the Hays town\nhall, where Hays Post captured direct quotes on a $34 trillion debt\nframe and related budget concerns.",
          "sourceIds": [
            "s-hayspost-townhall-2024"
          ]
        },
        {
          "id": "a-colby-doge-townhall-2026-02-19",
          "date": "2026-02-19",
          "body": "At the Colby town hall, defended DOGE-related federal scrutiny by\nsaying it was finding things Congress had been requesting and calling\nsome federal spending indefensible.",
          "sourceIds": [
            "s-indivisible-colby-townhall-2026"
          ]
        },
        {
          "id": "a-obbba-tax-spending-frame-2025-06-09",
          "date": "2025-06-09",
          "body": "In his own H.R. 1 statement, framed the bill as tax cuts, border\nsecurity, farm-safety-net investment, FAA modernization, and social\nsafety-net stewardship.",
          "sourceIds": [
            "s-mann-obbba-2025"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whereTheyWorship": "Mann attends First Covenant Church in Salina, Kansas, affiliated with the Evangelical Covenant Church denomination — a theologically centrist Protestant tradition with roots in Swedish pietism. Before his congressional career, Mann served as Senior Program Director for the National Student Leadership Forum on Faith and Values, a Washington-based nonprofit that runs faith-oriented leadership programs for high school and college students. His public statements frequently invoke faith as a personal anchor, though he does not typically make church policy a campaign centerpiece.",
  "campaignFinance": {
    "totalRaised": "$1,220,354.74",
    "narrative": "FEC data for the 2025-2026 cycle showed $1,220,354.74 raised,\n$415,221.50 spent, $2,558,830.08 cash on hand, and no debt as of the\nfetched reporting period. The deep scrape calculated that PAC committees\nplus transfers from authorized committees made up roughly 71 percent of\ntotal receipts in the partial cycle, compared with the v1 2023-2024 figure\nof 56.71 percent PAC share.",
    "donors": [],
    "undisclosed": "Itemized donor tables were not extracted in this pass; use the FEC committee page for donor-by-donor review.",
    "reportingPeriod": "2025-2026 cycle; reported through 2026-03-31 in the v2 scrape",
    "source": "Federal Election Commission candidate page H0KS01123 and committee page C00460659"
  },
  "socialResearchNote": "Candidate-controlled social is handled issue-by-issue. The v2 scrape uses\nMann's own X post on 246 town halls as a social signal mapped to\nconstituent access. It does not use Reddit or oppositional commentary as\nevidence of Mann's beliefs; only verbatim candidate statements and public\nrecords are carried into issue cards.\n",
  "sources": [
    {
      "id": "s-clerk-hr1-2025-145",
      "tier": "primary",
      "url": "https://clerk.house.gov/Votes/2025145",
      "title": "Roll Call 145 - H.R. 1, 119th Congress",
      "publisher": "Clerk of the U.S. House of Representatives",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The House voted on passage of H.R. 1 on May 22, 2025",
        "The final tally was 215 yeas, 214 nays, 1 present, and 2 not voting",
        "Mann's yea vote was confirmed through multiple mirrors when clerk XML was blocked"
      ]
    },
    {
      "id": "s-congress-hr1-2025-145",
      "tier": "primary",
      "url": "https://www.congress.gov/votes/house/119-1/145",
      "title": "House Vote 145 - H.R. 1",
      "publisher": "Congress.gov",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Congress.gov carries the House vote page for H.R. 1 passage"
      ]
    },
    {
      "id": "s-mann-obbba-2025",
      "tier": "primary",
      "url": "https://mann.house.gov/media/press-releases/rep-mann-applauds-one-big-beautiful-bill-acts-wins-america",
      "title": "Rep. Mann Applauds the One Big Beautiful Bill Act's Wins for America",
      "publisher": "Office of Rep. Tracey Mann",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann publicly supported H.R. 1 after the May 22, 2025 House vote",
        "Mann described Medicaid and SNAP as exploited and expanded beyond their initial intent",
        "Mann framed work requirements as stewardship of taxpayer generosity"
      ]
    },
    {
      "id": "s-kwch-medicaid-2025",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/05/15/its-false-narrative-rep-mann-says-proposed-medicaid-changes-arent-cuts/",
      "title": "It's a false narrative: Rep. Mann says proposed Medicaid changes aren't cuts",
      "publisher": "KWCH",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann said it was a false narrative to say Republicans were going to cut Medicaid",
        "Mann said Medicaid would be preserved for the people it was intended for",
        "Mann repeated waste, fraud, and abuse framing"
      ]
    },
    {
      "id": "s-clerk-rotor-2026-72",
      "tier": "primary",
      "url": "https://clerk.house.gov/Votes/202672",
      "title": "Roll Call 72 - S. 2503, ROTOR Act",
      "publisher": "Clerk of the U.S. House of Representatives",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The House voted on S. 2503, the ROTOR Act, on February 24, 2026",
        "The bill failed 264-133, one vote short of the two-thirds suspension threshold",
        "Mann's nay vote was confirmed by multiple Kansas and national reports"
      ]
    },
    {
      "id": "s-congress-rotor-2026",
      "tier": "primary",
      "url": "https://www.congress.gov/bill/119th-congress/senate-bill/2503",
      "title": "S. 2503 - ROTOR Act",
      "publisher": "Congress.gov",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "S. 2503 was the Rotorcraft Operations Transparency and Oversight Reform Act"
      ]
    },
    {
      "id": "s-kwch-rotor-2026",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/24/rotor-act-requiring-aircraft-locator-systems-that-ntsb-recommends-prevent-midair-collisions-fails-house/",
      "title": "ROTOR Act requiring aircraft locator systems fails in House",
      "publisher": "KWCH",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "KWCH reported Mann as the only Kansas House member to vote no",
        "Mann's office said aviation safety is a top priority",
        "Mann's office said the bill was drafted before the NTSB final report and did not go through normal T&I committee process"
      ]
    },
    {
      "id": "s-rollcall-rotor-2026",
      "tier": "secondary",
      "url": "https://rollcall.com/2026/02/24/senate-aviation-safety-bill-rejected-by-house/",
      "title": "Senate aviation safety bill rejected by House",
      "publisher": "Roll Call",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Roll Call reported the 264-133 ROTOR Act tally",
        "Roll Call reported 132 Republican no votes and one Democratic no vote",
        "House Transportation and Infrastructure Chair Sam Graves and Armed Services Chair Mike Rogers urged opposition"
      ]
    },
    {
      "id": "s-kansas-reflector-rotor-2026",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/25/u-s-rep-tracey-mann-lone-kansas-vote-against-federal-aviation-safety-bill-tied-to-d-c-crash/",
      "title": "Tracey Mann lone Kansas vote against federal aviation safety bill tied to D.C. crash",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann was the lone Kansas delegation no vote on the ROTOR Act",
        "The bill responded to the 2025 Washington, D.C. midair collision involving a flight from Wichita"
      ]
    },
    {
      "id": "s-congressional-record-jan6",
      "tier": "primary",
      "url": "https://www.congress.gov/congressional-record/volume-167/issue-4/house-section/article/H76-4",
      "title": "Congressional Record, January 6, 2021 House Proceedings",
      "publisher": "Congress.gov",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The Congressional Record anchors the January 6, 2021 electoral-objection proceedings"
      ]
    },
    {
      "id": "s-govinfo-jan6",
      "tier": "primary",
      "url": "https://www.govinfo.gov/content/pkg/CREC-2021-01-06/html/CREC-2021-01-06-pt1-PgH76-4.htm",
      "title": "Congressional Record - January 6, 2021",
      "publisher": "GovInfo",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "GovInfo hosts the official Congressional Record text for January 6, 2021"
      ]
    },
    {
      "id": "s-govtrack-az-objection",
      "tier": "primary",
      "url": "https://www.govtrack.us/congress/votes/117-2021/h10",
      "title": "Arizona Electoral Objection Vote",
      "publisher": "GovTrack",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann voted yea on the Arizona electoral objection"
      ]
    },
    {
      "id": "s-govtrack-pa-objection",
      "tier": "primary",
      "url": "https://www.govtrack.us/congress/votes/117-2021/h11",
      "title": "Pennsylvania Electoral Objection Vote",
      "publisher": "GovTrack",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann voted yea on the Pennsylvania electoral objection"
      ]
    },
    {
      "id": "s-mann-committees-caucuses",
      "tier": "primary",
      "url": "https://mann.house.gov/about/committees-and-caucuses",
      "title": "Committees and Caucuses",
      "publisher": "Office of Rep. Tracey Mann",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann's official office page identifies committee and caucus roles",
        "Search-accessible text identifies Mann as co-founder and co-chair of the House Congressional FFA Caucus"
      ]
    },
    {
      "id": "s-mann-kaptur-farmer-first",
      "tier": "primary",
      "url": "https://mann.house.gov/media/press-releases/reps-mann-kaptur-and-sens-marshall-brown-introduce-bicameral-legislation-put",
      "title": "Mann, Kaptur, Marshall, Brown introduce Farmer First Fuel Incentives Act",
      "publisher": "Office of Rep. Tracey Mann",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann and Kaptur co-led a bipartisan, bicameral biofuels effort with Senators Marshall and Brown",
        "The effort concerned Clean Fuel Production Credit eligibility for domestically produced feedstocks"
      ]
    },
    {
      "id": "s-congress-hr1207",
      "tier": "primary",
      "url": "https://www.congress.gov/bill/119th-congress/house-bill/1207/all-info",
      "title": "H.R. 1207 - Food for Peace transfer to USDA",
      "publisher": "Congress.gov",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann introduced H.R. 1207 on February 11, 2025",
        "H.R. 1207 would transfer USAID Food for Peace functions to USDA"
      ]
    },
    {
      "id": "s-congress-hr1207-pdf",
      "tier": "primary",
      "url": "https://www.congress.gov/119/bills/hr1207/BILLS-119hr1207ih.pdf",
      "title": "H.R. 1207 Introduced Text",
      "publisher": "Congress.gov",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The introduced bill text names the Food for Peace transfer framework"
      ]
    },
    {
      "id": "s-ffa-caucus-members",
      "tier": "primary",
      "url": "https://ffacaucus-mann.house.gov/about/members",
      "title": "FFA Caucus Members",
      "publisher": "House Congressional FFA Caucus",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Tracey Mann and Jimmy Panetta are listed as chairs of the FFA Caucus"
      ]
    },
    {
      "id": "s-ksffa-ffa-reestablish",
      "tier": "secondary",
      "url": "https://www.ksffa.org/news/reps-mann-panetta-reestablish-congressional-ffa-caucus-in-118th-congress/",
      "title": "Reps. Mann, Panetta Reestablish Congressional FFA Caucus",
      "publisher": "Kansas FFA",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann and Panetta co-founded the caucus on December 2, 2021",
        "Mann described the caucus as bipartisan and focused on the next generation of agricultural leaders"
      ]
    },
    {
      "id": "s-mcgovern-hunger-caucus",
      "tier": "primary",
      "url": "https://mcgovern.house.gov/news/documentsingle.aspx?DocumentID=398957",
      "title": "McGovern and Mann Announce Relaunch of Bipartisan House Hunger Caucus",
      "publisher": "Office of Rep. Jim McGovern",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "McGovern and Mann relaunched the bipartisan House Hunger Caucus on February 9, 2023",
        "Mann served as the Republican co-chair in the relaunched caucus"
      ]
    },
    {
      "id": "s-hayspost-townhall-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1e4f8e0c-4dcd-446f-a66b-a191d2a56966",
      "title": "U.S. Rep. Mann addresses immigration, national debt in Hays",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann held a Hays town hall at Hays Public Library on July 2, 2024",
        "Mann gave direct quotes on stepped-up basis, national debt, immigration, and border security",
        "Observed public online activity mapped to Immigration, border security, and agricultural labor."
      ]
    },
    {
      "id": "s-indivisible-colby-townhall-2026",
      "tier": "secondary",
      "url": "https://indivisiblemhk.substack.com/p/transcript-of-rep-tracey-manns-town",
      "title": "Transcript of Rep. Tracey Mann's Town Hall in Colby",
      "publisher": "Indivisible MHK",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "The transcript carries Mann quotes on Medicare, Social Security, DOGE, immigration, water, and Food for Peace",
        "The source is oppositional; verbatim quotes are usable but editorial framing is not"
      ]
    },
    {
      "id": "s-x-mann-townhalls-2024",
      "tier": "social",
      "url": "https://x.com/RepMann/status/1826719239861919945",
      "title": "Mann X post on 246 town halls",
      "publisher": "X / Rep. Tracey Mann",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann stated he had hosted 246 town halls across Kansas since 2021",
        "Mann stated he completed a 60-county listening tour in 2024"
      ]
    },
    {
      "id": "s-little-apple-nawg-2026",
      "tier": "secondary",
      "url": "https://littleapplepost.com/posts/bdad41f3-c25e-4dfe-ad71-4743c631cb18",
      "title": "Mann named Wheat Leader of the Year",
      "publisher": "Little Apple Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Mann was announced as NAWG 2025 Wheat Leader of the Year",
        "Mann gave an acceptance quote about Kansas and American farmers"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(TRACEY_MANN_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[tracey-mann.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
