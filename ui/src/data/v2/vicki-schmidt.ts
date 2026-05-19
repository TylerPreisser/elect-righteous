/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const VICKI_SCHMIDT_V2: CandidateFullV2 = {
  "slug": "vicki-schmidt",
  "name": "Vicki Schmidt",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Insurance Commissioner / Pharmacist",
  "born": "September 15, 1955",
  "hometown": "Topeka, Kansas (40+ years)",
  "religion": "Christian (denomination unconfirmed; references \"faith\" in campaign materials)",
  "family": "Two sons (names not publicly identified)",
  "district": "20 (Shawnee and Wabaunsee counties)",
  "campaignWebsite": "https://vickiforgovernor.com/",
  "issues": [
    {
      "id": "insurance-consumer-protection-executive-record",
      "title": "Insurance Consumer Protection and Executive Record",
      "stated": {
        "text": "Schmidt's strongest official record is as Kansas Insurance Commissioner. The Department says it recovered $56.7 million for Kansans in 2025 and more than $202.7 million since she took office in 2019. Her campaign connects that official record to a broader executive-competence argument, citing Medicaid rebate recoveries, money returned to Kansas families, lowered costs of doing business, and her pharmacist background.",
        "sourceIds": [
          "s-kdoi-2025-recoveries",
          "s-kdoi-about",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "action-2025-consumer-recoveries",
          "date": "2026-01-15",
          "body": "Kansas Insurance Department announced $56.7 million recovered for Kansans in 2025 and more than $202.7 million recovered since Schmidt took office in 2019.",
          "sourceIds": [
            "s-kdoi-2025-recoveries"
          ]
        },
        {
          "id": "action-current-insurance-commissioner",
          "date": "2019-present",
          "body": "Kansas Insurance Department biography identifies Schmidt as the 27th Kansas Insurance Commissioner, first elected in 2018 and reelected in 2022.",
          "sourceIds": [
            "s-kdoi-about"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-office-linkedin-consumer-protection",
          "platform": "LinkedIn",
          "observation": "Local logged-out harvest found the Department LinkedIn page visibly emphasized consumer protection topics including fraud/scam prevention, storm-damage claims, financial education, and NAIC participation.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "insurance-consumer-protection-executive-record"
        },
        {
          "id": "ss-crossref-2",
          "platform": "vickiforgovernor.com",
          "observation": "The campaign website frames Schmidt as a lifelong Kansan, Republican, pharmacist, former state senator, breast-cancer survivor, and sitting insurance commissioner. Its lead line says, \"It's time Kansans have a governor that works as hard as they do.\" It emphasizes finding Medicaid drug-rebate errors that led to more than $391 million recouped for the state, autism coverage, cancer-care access, more than $206...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "insurance-consumer-protection-executive-record"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Facebook",
          "observation": "Kansas.gov's social-media directory lists Insurance Commissioner Vicki Schmidt with official Facebook and Twitter/X links. The Department's website footer also links official Instagram, Facebook, X, and LinkedIn accounts. (Kansas.gov source, Department source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "insurance-consumer-protection-executive-record"
        }
      ],
      "gap": {
        "summary": "Campaign totals above the Department release totals should be attributed to campaign claims unless independently matched to Department records.",
        "evidenceIds": [
          "action-2025-consumer-recoveries"
        ]
      }
    },
    {
      "id": "fees-cost-reduction-agency-administration",
      "title": "Fees, Cost Reduction, and Agency Administration",
      "stated": {
        "text": "Schmidt frames her Insurance Department record around lower costs and efficient service. The Department's Nov. 20, 2025 release says she announced a 2026 fee schedule reducing fees by an estimated $1.1 million. HB 2050 provides a legislative anchor for Department fee modernization: the official bill page says the bill concerned Insurance Department fees and operations, was requested by the Department, and was approved by the governor in 2025.",
        "sourceIds": [
          "s-kdoi-fee-2026",
          "s-hb2050",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "action-2026-fee-schedule",
          "date": "2025-11-20",
          "body": "Schmidt announced a 2026 Department fee schedule lowering fees by an estimated $1.1 million.",
          "sourceIds": [
            "s-kdoi-fee-2026"
          ]
        },
        {
          "id": "action-hb2050-department-request",
          "date": "2025-04-23",
          "body": "HB 2050, requested on behalf of the Kansas Department of Insurance, concerned Department fees and operations.",
          "sourceIds": [
            "s-hb2050"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "1. Campaign homepage and about text, captured 2026-05-11. Key signals: hardworking governor frame; pharmacist identity; Medicaid rebate recoveries; autism coverage; cancer-care access; insurance recoveries; fee/cost reductions; breast-cancer survivor narrative. (source) 2. Campaign-site July 21, 2025 repost of Kansas Reflector interview summary: Schmidt says she is seeking the GOP nomination to \"fully represent...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "fees-cost-reduction-agency-administration"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "Campaign-site July 21, 2025 repost of Kansas Reflector article on taxes and abortion. The page includes Schmidt's quote on the 2012 Brownback tax vote: \"It is a vote I regret.\" (source) 4. Campaign-site July 25, 2025 repost of Kansas Reflector governor-race commentary describing Schmidt as \"moderate and overwhelmingly popular among voters.\" (source) 5.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-reflector-tax-abortion"
          ],
          "mappedToIssueId": "fees-cost-reduction-agency-administration"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Topic buckets can overlap. For example, the campaign homepage counts both campaign identity and administrative/cost-reduction messaging. The social-metadata bucket is separated because many platform captures exposed only account-level signals, not post bodies.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info"
          ],
          "mappedToIssueId": "fees-cost-reduction-agency-administration"
        }
      ],
      "gap": {
        "summary": "HB 2050 is Department-requested legislation and should not be described as Schmidt casting a legislative vote.",
        "evidenceIds": [
          "action-2026-fee-schedule"
        ]
      }
    },
    {
      "id": "prescription-drug-costs-pbm-regulation",
      "title": "Prescription Drug Costs and PBM Regulation",
      "stated": {
        "text": "Schmidt has used her Insurance Department office to support pharmacy benefit manager reform. The Department says she testified for SB 360 in February 2026, arguing that PBMs should not threaten Kansas patients, local businesses, or rural communities. Official Legislature records show SB 360 would enact the Community Pharmacy Protection Act and had passed the Senate before later House committee action and rereferral.",
        "sourceIds": [
          "s-kdoi-pbm",
          "s-sb360"
        ]
      },
      "actions": [
        {
          "id": "action-sb360-testimony",
          "date": "2026-02-12",
          "body": "Kansas Insurance Department release says Schmidt testified before the Senate Financial Institutions and Insurance Committee in support of SB 360.",
          "sourceIds": [
            "s-kdoi-pbm"
          ]
        },
        {
          "id": "action-sb360-senate-passage",
          "date": "2026-02-26",
          "body": "Official SB 360 page records Senate passage 32-8.",
          "sourceIds": [
            "s-sb360"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-office-linkedin-pbm",
          "platform": "LinkedIn",
          "observation": "Local social harvest found PBM reform among the visible Department LinkedIn update topics.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "prescription-drug-costs-pbm-regulation"
        },
        {
          "id": "ss-crossref-2",
          "platform": "vickiforgovernor.com",
          "observation": "Across the accessible set reviewed, Schmidt's public profile is built around administrative competence, insurance consumer assistance, and a pharmacist's health-care biography. Her campaign homepage opens with, \"It's time Kansans have a governor that works as hard as they do,\" and ties that pitch to Medicaid drug-rebate recoveries, autism coverage, cancer-care access, insurance recoveries, and lower business...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "prescription-drug-costs-pbm-regulation"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Several issue areas were not visible in the accessible material reviewed. The public set did not include reviewed items centered on guns, immigration or border policy, LGBTQ+ policy, religious liberty, school choice, K-12 finance, higher-education affordability, child care, foster care, housing, road and bridge funding, broadband, water policy, or the Ogallala aquifer. The available record is therefore strongest...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info"
          ],
          "mappedToIssueId": "prescription-drug-costs-pbm-regulation"
        }
      ],
      "gap": {
        "summary": "Official bill page captured May 19 does not show SB 360 enacted. Avoid shorthand that the bill became law unless later official status confirms it.",
        "evidenceIds": [
          "action-sb360-testimony"
        ]
      }
    },
    {
      "id": "taxes-property-tax-affordability-efficiency",
      "title": "Taxes, Property Taxes, Affordability, and Efficiency",
      "stated": {
        "text": "Schmidt's campaign emphasizes efficient government more than a detailed tax platform. The campaign reposted a 2025 Kansas Reflector interview/article in which Schmidt said her 2012 Brownback-era tax vote was a vote she regrets. In 2026 KVOE coverage, she identified property taxes as a top issue and linked affordability to education finance, local government funding, business development, and housing.",
        "sourceIds": [
          "s-campaign-reflector-tax-abortion",
          "s-kvoe-interview",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "action-tax-vote-regret-statement",
          "date": "2025-07-21",
          "body": "Campaign repost of Kansas Reflector article includes Schmidt's statement that the 2012 tax vote is a vote she regrets.",
          "sourceIds": [
            "s-campaign-reflector-tax-abortion"
          ]
        },
        {
          "id": "action-property-tax-interview",
          "date": "2026-04-23",
          "body": "KVOE reported Schmidt identified property taxes as a top issue in her gubernatorial campaign.",
          "sourceIds": [
            "s-kvoe-interview"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "The campaign site amplifies three Kansas Reflector pieces in its News section: a July 21 interview item, a July 21 article on her record/taxes/abortion, and a July 25 early race analysis. The office LinkedIn page amplifies NASAA content, NAIC participation, K-State financial-education work, Department news releases, and consumer-protection resources. Logged-out X and Facebook capture did not expose a reliable...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info"
          ],
          "mappedToIssueId": "taxes-property-tax-affordability-efficiency"
        },
        {
          "id": "ss-crossref-3",
          "platform": "insurance.kansas.gov",
          "observation": "Cost reduction and government efficiency are the second major theme. On Nov. 20, 2025, Schmidt announced a 2026 fee schedule reducing Department fees by an estimated $1.1 million. She said Kansans know she is a \"fiscal hawk,\" delivering more efficient, accessible, and less expensive services. The same release said the Department had lowered fees and reduced the cost of doing business by more than $76 million...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kdoi-fee-2026"
          ],
          "mappedToIssueId": "taxes-property-tax-affordability-efficiency"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "Schmidt's most substantive campaign interview found in the harvest was the July 21, 2025 Kansas Reflector piece. On the 2012 Brownback-era tax cuts, she said, \"It is a vote I regret.\" On abortion, she said the U.S. Supreme Court did the right thing by returning the issue to states, said she does not believe in \"abortion on demand,\" and said she does believe in reasonable exceptions. On leadership, she said it is...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "taxes-property-tax-affordability-efficiency"
        }
      ],
      "gap": {
        "summary": "No official roll-call citation for the 2012 tax vote or detailed current tax plan was captured in this pass.",
        "evidenceIds": [
          "action-tax-vote-regret-statement"
        ]
      }
    },
    {
      "id": "abortion-and-life-issues",
      "title": "Abortion and Life Issues",
      "stated": {
        "text": "Abortion was not a dominant visible topic in the accessible campaign and social set. The clearest current-cycle source is the campaign repost of a July 2025 Kansas Reflector interview/article, which reports Schmidt saying the U.S. Supreme Court was right to return abortion to the states, that she does not believe in abortion on demand, and that she believes in reasonable exceptions.",
        "sourceIds": [
          "s-campaign-reflector-tax-abortion"
        ]
      },
      "actions": [
        {
          "id": "action-abortion-interview-statement",
          "date": "2025-07-21",
          "body": "Campaign repost includes current-cycle interview comments on abortion, state authority, and reasonable exceptions.",
          "sourceIds": [
            "s-campaign-reflector-tax-abortion"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-abortion-limited-visibility",
          "platform": "Campaign/social harvest",
          "observation": "Local harvest counted abortion and tax-record accountability together as 2 of 17 accessible campaign/profile/public-record/news items and did not identify abortion as a dominant visible campaign theme.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "abortion-and-life-issues"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Kansas Reflector",
          "observation": "Kansas Reflector July 21, 2025 candidate interview/article. Accessible quotes include her abortion position, the need for governors to tell the truth, and her plan to run on her record. (source) 6. Campaign Facebook profile metadata, captured 2026-05-11: 3,403 likes; 1,496 talking about this; campaign identity and disclaimer. (source) 7.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "abortion-and-life-issues"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Kansas Reflector",
          "observation": "Abortion and life issues: The campaign reposted a July 21, 2025 Kansas Reflector interview/article in which Schmidt discussed abortion and reasonable exceptions. Use as candidate-controlled amplification of secondary reporting unless the original interview is cited directly. No current campaign platform page making abortion central was found.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info"
          ],
          "mappedToIssueId": "abortion-and-life-issues"
        }
      ],
      "gap": {
        "summary": "No current campaign issues page centered abortion was found, and no recent gubernatorial-platform plank was verified beyond the interview/repost.",
        "evidenceIds": [
          "action-abortion-interview-statement"
        ]
      }
    },
    {
      "id": "rural-agriculture-water-running-mate",
      "title": "Rural Kansas, Agriculture, Water, and Running-Mate Signal",
      "stated": {
        "text": "Schmidt's clearest current rural/agriculture signal is her May 18, 2026 selection of Joe Newland as lieutenant-governor running mate. Campaign materials identify Newland as Kansas Farm Bureau president, a lifelong farmer and rancher, and a former state representative from Wilson County. The Meet Joe page references water, energy, property taxes, and shrinking rural services.",
        "sourceIds": [
          "s-campaign-newland",
          "s-campaign-meet-joe"
        ]
      },
      "actions": [
        {
          "id": "action-newland-selection",
          "date": "2026-05-18",
          "body": "Campaign announced Kansas Farm Bureau President Joe Newland as Schmidt's lieutenant-governor selection.",
          "sourceIds": [
            "s-campaign-newland"
          ]
        },
        {
          "id": "action-newland-rural-profile",
          "date": "2026-05-18",
          "body": "Campaign biography describes Newland as a farmer, rancher, Kansas Farm Bureau president, and former state representative.",
          "sourceIds": [
            "s-campaign-meet-joe"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Running-mate selection is evidence of campaign positioning and team composition, not a detailed Schmidt policy plan on water, agriculture, or energy.",
        "evidenceIds": [
          "action-newland-selection"
        ]
      }
    }
  ],
  "ownWordsNarrative": "candidateControlled: platform: Campaign website; status: active; url: https://vickiforgovernor.com/; notes: Links Facebook and X; current site includes Newland running-mate announcement.; platform: Facebook; status: identified, post-level content limited; url: https://www.facebook.com/VickiSchmidtKS; notes: Local May 11 logged-out harvest recorded 3,403 likes and 1,496 talking about this; native post inventory was login/script-limited.; platform: X/Twitter; status: identified, post-level content limited; url: https://x.com/VickiSchmidtKS; notes: Campaign site links account; direct timeline was not reliably captured logged out.; officialOffice: platform: Kansas.gov social directory / Department website; status: official office channels identified; url: https://portal.kansas.gov/social-media/; notes: Office Facebook, X, Instagram, and LinkedIn identified through official government sources/local harvest.; platform: LinkedIn; status: visible office updates; url: https://www.linkedin.com/company/kansas-department-of-insurance; notes: Most accessible office feed; local harvest found consumer protection, PBM reform, NAIC, financial education, storm claims, and hiring topics.; notFoundOrNotLinked: No clear candidate-controlled YouTube, TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, or Reddit account found in local harvest.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Her campaign uses faith language, but the available record does not name a parish, congregation, or church website.",
  "campaignFinance": {
    "totalRaised": "totalContributions: $980,372.71; totalExpenditures: $52,211.35; cashOnHandClose: $928,161.36; inKind: $4,227.95; otherTransactions: $81,500.00",
    "narrative": "totalContributions: $980,372.71; totalExpenditures: $52,211.35; cashOnHandClose: $928,161.36; inKind: $4,227.95; otherTransactions: $81,500.00",
    "donors": [
      {
        "name": "Eldridge-associated entities and individuals",
        "amount": "Multiple $4,000 entries visible in late December 2025"
      },
      {
        "name": "Blue Cross Blue Shield of Kansas",
        "amount": "$4,000.00 visible entry"
      },
      {
        "name": "Security Benefit Life Insurance PAC",
        "amount": "$4,000.00 visible entry"
      },
      {
        "name": "NAIFA Kansas Political Action Committee",
        "amount": "visible entry; amount requires direct schedule row readback before UI use"
      },
      {
        "name": "BEKC, LLC dba The Mint",
        "amount": "$1,100.00 in-kind"
      },
      {
        "name": "Mary Birch",
        "amount": "$3,127.95 in-kind"
      }
    ],
    "undisclosed": "Donor and expenditure records are public campaign-finance facts. They should not be described as influence, motive, or improper conduct without separate evidence.",
    "reportingPeriod": "2025 year-end report, Jan. 1-Dec. 31, 2025",
    "source": "Campaign Finance Receipts and Expenditures Report - Vicki L Schmidt"
  },
  "sources": [
    {
      "id": "s-sos-candidate-info",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Governor/Lt. Governor is a 2026 office",
        "Candidate filing deadline is noon on June 1, 2026",
        "A candidate is not considered filed until petition/declaration and fee are received"
      ]
    },
    {
      "id": "s-kdoi-about",
      "tier": "primary",
      "url": "https://insurance.kansas.gov/about-us/",
      "title": "About Us",
      "publisher": "Kansas Insurance Department",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vicki Schmidt is the 27th Kansas Insurance Commissioner",
        "She was first elected in 2018 and reelected in 2022",
        "She served 14 years in the Kansas Senate",
        "She is the first pharmacist to hold statewide elected office in Kansas"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vicki for Governor",
      "publisher": "Vicki Schmidt campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign frames Schmidt as pharmacist, mother, grandmother, former state senator, and insurance commissioner",
        "Campaign cites Medicaid rebate recoveries, insurance recoveries, cost reductions, autism coverage, and cancer-care access",
        "Campaign links Facebook and X",
        "Observed public online activity mapped to Insurance Consumer Protection and Executive Record.",
        "Observed public online activity mapped to Fees, Cost Reduction, and Agency Administration.",
        "Observed public online activity mapped to Prescription Drug Costs and PBM Regulation."
      ]
    },
    {
      "id": "s-campaign-newland",
      "tier": "primary",
      "url": "https://vickiforgovernor.com/2026/05/18/vicki-schmidt-selects-kansas-farm-bureau-president-joe-newland-as-her-lieutenant-governor/",
      "title": "Vicki Schmidt Selects Kansas Farm Bureau President Joe Newland as Her Lieutenant Governor",
      "publisher": "Vicki Schmidt campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign announced Joe Newland as lieutenant-governor selection on May 18, 2026",
        "Campaign says Schmidt and Newland will officially file together on June 1",
        "Campaign frames Newland as Kansas Farm Bureau president and rural/agriculture leader"
      ]
    },
    {
      "id": "s-campaign-meet-joe",
      "tier": "primary",
      "url": "https://vickiforgovernor.com/meet-joe/",
      "title": "Meet Joe",
      "publisher": "Vicki Schmidt campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Joe Newland is described as a farmer, rancher, Kansas Farm Bureau president, and former state representative",
        "Page references water, energy, property taxes, and rural services"
      ]
    },
    {
      "id": "s-kdoi-2025-recoveries",
      "tier": "primary",
      "url": "https://www.insurance.kansas.gov/Home/Components/News/News/226/16",
      "title": "The Kansas Department of Insurance recovers $56.7 million for Kansans in 2025",
      "publisher": "Kansas Insurance Department",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Department recovered $56.7 million for Kansans in 2025",
        "Department recovered more than $202.7 million since Schmidt took office in 2019"
      ]
    },
    {
      "id": "s-kdoi-fee-2026",
      "tier": "primary",
      "url": "https://www.insurance.kansas.gov/Home/Components/News/News/70/16",
      "title": "Commissioner Schmidt lowers fees by an estimated $1.1 million in 2026 Fee Schedule",
      "publisher": "Kansas Insurance Department",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Schmidt announced a 2026 fee schedule lowering fees by an estimated $1.1 million",
        "Release says it is the seventh year of lowering costs at the Department",
        "Observed public online activity mapped to Taxes, Property Taxes, Affordability, and Efficiency."
      ]
    },
    {
      "id": "s-hb2050",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2050/",
      "title": "HB 2050",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2050 concerns Insurance Department fees and operations",
        "Bill requester was Eric Turek on behalf of the Kansas Department of Insurance",
        "Bill was approved by governor April 23, 2025"
      ]
    },
    {
      "id": "s-kdoi-pbm",
      "tier": "primary",
      "url": "https://www.insurance.kansas.gov/Home/Components/News/News/233/16?widgetId=41",
      "title": "Kansas Insurance Commissioner Vicki Schmidt advocates for pharmacy benefit manager reform",
      "publisher": "Kansas Insurance Department",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Department says Schmidt testified in support of SB 360",
        "Release describes SB 360 as PBM reform"
      ]
    },
    {
      "id": "s-sb360",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb360/",
      "title": "SB 360",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 360 concerns pharmacy benefits managers and the Community Pharmacy Protection Act",
        "Senate passed SB 360 32-8 on Feb. 26, 2026",
        "House rereferred the bill to Health and Human Services after Insurance Committee activity"
      ]
    },
    {
      "id": "s-kvoe-interview",
      "tier": "secondary",
      "url": "https://kvoe.com/2026/04/23/kansas-insurance-commissioner-vicki-schmidt-details-run-for-governor-during-kvoe-news-interview/",
      "title": "Kansas Insurance Commissioner Vicki Schmidt details run for Governor during KVOE News interview",
      "publisher": "KVOE",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Interview coverage says Schmidt identified property taxes as a top issue",
        "Interview coverage reports business development, housing, and Medicaid-expansion review comments"
      ]
    },
    {
      "id": "s-campaign-reflector-tax-abortion",
      "tier": "primary",
      "url": "https://vickiforgovernor.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "Kansas Republican Vicki Schmidt anchors 2026 campaign for governor on record of service",
      "publisher": "Vicki Schmidt campaign repost of Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign repost includes Schmidt statement that her 2012 tax vote is a vote she regrets",
        "Campaign repost includes Schmidt comments on abortion and reasonable exceptions",
        "Observed public online activity mapped to Fees, Cost Reduction, and Agency Administration."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "primary",
      "url": "https://portal.kansas.gov/social-media/",
      "title": "Facebook / Portal.Kansas",
      "publisher": "Portal.Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Insurance Consumer Protection and Executive Record.",
        "Kansas.gov's social-media directory lists Insurance Commissioner Vicki Schmidt with official Facebook and Twitter/X links. The Department's website footer also links official Insta"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes, Property Taxes, Affordability, and Efficiency.",
        "Schmidt's most substantive campaign interview found in the harvest was the July 21, 2025 Kansas Reflector piece. On the 2012 Brownback-era tax cuts, she said, \"It is a vote I regre",
        "Observed public online activity mapped to Abortion and Life Issues."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(VICKI_SCHMIDT_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[vicki-schmidt.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
