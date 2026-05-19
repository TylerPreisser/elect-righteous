/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const BARB_WASINGER_V2: CandidateFullV2 = {
  "slug": "barb-wasinger",
  "name": "Barb Wasinger",
  "party": "R",
  "position": "KS House District 111",
  "electionSlug": "ks-house-111",
  "incumbent": true,
  "occupation": "Business owner",
  "religion": "Roman Catholic -- active member, St. Joseph Catholic Church, Hays",
  "family": "Tom Wasinger; Spouse: Tom",
  "district": "Kansas House District 111",
  "campaignWebsite": "https://barbwasinger.com/",
  "issues": [
    {
      "id": "water-local-infrastructure",
      "title": "Water and Local Infrastructure",
      "stated": {
        "text": "Wasinger's local record is strongest on water and Hays-area infrastructure. Her older campaign site says she worked during her first House term to bring state and federal attention to the Northwest Corridor project and cites $1 million from Kansas plus a $6.5 million federal BUILD grant. In 2026, HB 2433 became her clearest district-specific legislative action: the official bill page lists her as original and current sponsor of a bill clarifying state authority over water transfers, and Hays Post tied the bill to the Hays/Russell R9 Ranch dispute.",
        "sourceIds": [
          "s-campaign-old",
          "s-hb2433",
          "s-hays-hb2433-signed"
        ]
      },
      "actions": [
        {
          "id": "action-hb2433-sponsor",
          "date": "2026-01-09",
          "body": "HB 2433 was introduced by Rep. Wasinger and the official bill page lists her as original and current sponsor.",
          "sourceIds": [
            "s-hb2433"
          ]
        },
        {
          "id": "action-hb2433-house-vote",
          "date": "2026-02-10",
          "body": "Wasinger voted yea on House final action for HB 2433.",
          "sourceIds": [
            "s-hb2433-house-vote"
          ]
        },
        {
          "id": "action-hb2433-signed",
          "date": "2026-03-20",
          "body": "Hays Post reported Gov. Kelly signed HB 2433 and described Wasinger as the sponsor and champion.",
          "sourceIds": [
            "s-hays-hb2433-signed"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Hays Post coverage of HB 2433 and the R9 water dispute marks her most district-specific policy win by 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-sherman"
          ],
          "mappedToIssueId": "water-local-infrastructure"
        },
        {
          "id": "ss-crossref-3",
          "platform": "barbwasinger.com",
          "observation": "Newer campaign site: Wasinger says her approach is to \"talk less, listen more, and work together to actually get things done,\" and says she will stand strong for \"farmers, ranchers, and hardworking families\" and \"heartland values.\" Source: barbwasinger.com.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-new"
          ],
          "mappedToIssueId": "water-local-infrastructure"
        },
        {
          "id": "ss-crossref-5",
          "platform": "barbforkansas.com",
          "observation": "Older campaign note: she framed her first term around \"getting things done for Ellis County,\" especially the Northwest Corridor, and said she stood for tax, life, farmers, small businesses, citizens, and reduced regulations. Source: barbforkansas.com.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-old"
          ],
          "mappedToIssueId": "water-local-infrastructure"
        }
      ],
      "gap": {
        "summary": "HB 2433 is well-supported by primary records, but the profile should also mention that the bill drew opposition from Edwards County/water stakeholders when discussing the R9 dispute.",
        "evidenceIds": [
          "action-hb2433-sponsor"
        ]
      }
    },
    {
      "id": "taxes-spending-budget",
      "title": "Taxes, Spending, and Budget",
      "stated": {
        "text": "Wasinger states a results-focused tax and spending message: her current campaign site lists lowered property, sales, and income taxes, elimination of state taxes on Social Security benefits and groceries, and reining in government growth. Hays Post reported that her 2026 priorities included controlling spending, balancing the state budget, and addressing taxes, with property taxes a focus. Her current committee role as chair of General Government Budget gives this issue direct institutional relevance.",
        "sourceIds": [
          "s-campaign-new",
          "s-hays-tax-2026",
          "s-ksleg-profile"
        ]
      },
      "actions": [
        {
          "id": "action-budget-chair",
          "date": "2025-2026",
          "body": "Wasinger chairs the House General Government Budget Committee and sits on Appropriations.",
          "sourceIds": [
            "s-ksleg-profile"
          ]
        },
        {
          "id": "action-property-tax-local-meetings",
          "date": "2025-12",
          "body": "Hays Post reported Wasinger spoke with Ellis County Commission and Hays City Commission in December about property-tax solutions.",
          "sourceIds": [
            "s-hays-tax-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "barbwasinger.com",
          "observation": "Newer campaign site result list: \"Lowered Property, Sales, and Income Taxes,\" eliminated state taxes on Social Security benefits and groceries, acted on fentanyl and online pornography, funded K-12/special education, championed FHSU, improved Medicaid/foster care, fought overregulation, and defended \"Common-Sense Kansas Values.\" Source: barbwasinger.com.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-new"
          ],
          "mappedToIssueId": "taxes-spending-budget"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2024 Hays Post questionnaire: property tax reduction and school funding were top issues; she named cybersecurity and administrative rules/regulations as priorities; she opposed Medicaid expansion as likely to remove \"well bodied Kansans\" from the job market and lengthen IDD waiting lists. Source: Hays Post, Oct. 30, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "taxes-spending-budget"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2024 Hays Post election-night story: she emphasized property tax relief, cybersecurity, water, private water ownership through LEMAs, seniors, and education funding. Source: Hays Post, Nov. 7, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "taxes-spending-budget"
        }
      ],
      "gap": {
        "summary": "Campaign claims about lowered taxes need specific bill and roll-call citations before being treated as action evidence.",
        "evidenceIds": [
          "action-budget-chair"
        ]
      }
    },
    {
      "id": "education-fhsu-judiciary",
      "title": "Education, FHSU, and Judicial Selection",
      "stated": {
        "text": "Wasinger's campaign materials cite record K-12 funding, special-education funding, and advocacy for Fort Hays State University. In Hays Post's 2026 preview, she questioned whether higher state education spending had produced reading and math results. The same article reports she supports the 2026 amendment to elect Kansas Supreme Court justices.",
        "sourceIds": [
          "s-campaign-new",
          "s-campaign-old",
          "s-hays-tax-2026"
        ]
      },
      "actions": [
        {
          "id": "action-fhsu-campaign-priority",
          "date": "2023-2026",
          "body": "Campaign sites list FHSU advocacy and K-12/special-education funding as priorities or results.",
          "sourceIds": [
            "s-campaign-new",
            "s-campaign-old"
          ]
        },
        {
          "id": "action-judicial-selection-statement",
          "date": "2026-01-09",
          "body": "Hays Post reported Wasinger supports electing Kansas Supreme Court justices.",
          "sourceIds": [
            "s-hays-tax-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Hays Post's 2024 questionnaire and 2024 election-night coverage are strong local media signals. Wasinger won re-election in 2024 with 7,548 votes to 2,744 for Joseph Lantz in Hays Post's report.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-sherman"
          ],
          "mappedToIssueId": "education-fhsu-judiciary"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "2024 sugaring deregulation: she argued Board of Cosmetology rules were blocking a constituent from starting a flexible business. Source: Kansas Reflector, Apr. 1, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "education-fhsu-judiciary"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "2026 nursing faculty bill: Kansas Reflector reported she carried the bill on the House floor and rejected claims it would lower standards or undermine accreditation. Source: Kansas Reflector, Mar. 19, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "education-fhsu-judiciary"
        }
      ],
      "gap": {
        "summary": "Need primary legislative vote/source for the judicial-selection amendment and for the education funding claims if these become core issue cards.",
        "evidenceIds": [
          "action-fhsu-campaign-priority"
        ]
      }
    },
    {
      "id": "healthcare-medicaid-nursing-workforce",
      "title": "Healthcare, Medicaid, Foster Care, and Nursing Workforce",
      "stated": {
        "text": "Wasinger's campaign sites say she supports practical healthcare solutions, improved Medicaid and foster care, expanded APRN/pharmacist practices, and reduced foster-care regulations. Prior local research also records her opposition to Medicaid expansion in a 2024 Hays Post questionnaire. In 2026, SB 334 provides a primary-source action anchor on nursing workforce: the bill became law without signature and concerns instructor education levels for nursing schools.",
        "sourceIds": [
          "s-campaign-new",
          "s-campaign-old",
          "s-sb334"
        ]
      },
      "actions": [
        {
          "id": "action-sb334-vote",
          "date": "2026-03-18",
          "body": "Wasinger is listed among yea votes on House emergency final action for SB 334.",
          "sourceIds": [
            "s-sb334-house-vote",
            "s-sb334"
          ]
        },
        {
          "id": "action-healthcare-campaign-claims",
          "date": "2026",
          "body": "Campaign site claims improved Medicaid and foster care to help those most in need.",
          "sourceIds": [
            "s-campaign-new"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2025 legislative coffee: she said Kansas had been overspending and needed to stop, discussed CPI/valuation incentives for property tax restraint, and described unused agency programs and Medicaid fraud concerns. Source: Hays Post, Mar. 10, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "healthcare-medicaid-nursing-workforce"
        },
        {
          "id": "ss-crossref-3",
          "platform": "barbwasinger.com",
          "observation": "Barb Wasinger's public messaging is built around a practical incumbent identity: a Hays small-business owner and former local official who says she is focused on results for Ellis County. Her newer campaign site opens with a quote about \"talk less, listen more\" and working together to \"actually get things done,\" then frames the work as lower taxes, stronger schools, FHSU advocacy, Medicaid and foster care...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-new"
          ],
          "mappedToIssueId": "healthcare-medicaid-nursing-workforce"
        },
        {
          "id": "ss-crossref-5",
          "platform": "barbforkansas.com",
          "observation": "The older campaign site is more issue-list driven. Wasinger promised work on school reopening and safety, health care, foster care rules, senior tax relief, lower food taxes, FHSU funding, business deregulation, and child placement. In a personal note, she described her first term as \"getting things done for Ellis County,\" especially the Northwest Corridor funding, and said she had stood up for Kansans on tax,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-old"
          ],
          "mappedToIssueId": "healthcare-medicaid-nursing-workforce"
        }
      ],
      "gap": {
        "summary": "Direct readback needed for the 2024 Hays Post Medicaid questionnaire quote before using the precise wording in UI. Kansas Reflector nursing-floor coverage was not fetchable in this pass, so floor-carrier details should be cited with access caveat or replaced by official bill/vote records.",
        "evidenceIds": [
          "action-sb334-vote"
        ]
      }
    },
    {
      "id": "regulation-executive-authority-process",
      "title": "Regulation, Executive Authority, and Legislative Process",
      "stated": {
        "text": "Wasinger presents herself as a regulatorily conservative legislator. Her current campaign site says she fought government overreach and overregulation to support job creation. Her older site says she supported limiting governors' emergency power over businesses and churches. The official Legislature page lists her as vice chair of Joint Committee on Administrative Rules and Regulations, and the Kansas Truth Caucus lists her as vice-chair.",
        "sourceIds": [
          "s-campaign-new",
          "s-campaign-old",
          "s-ksleg-profile",
          "s-truth-caucus"
        ]
      },
      "actions": [
        {
          "id": "action-admin-rules-role",
          "date": "2025-2026",
          "body": "Wasinger serves as vice chair of Joint Committee on Administrative Rules and Regulations.",
          "sourceIds": [
            "s-ksleg-profile"
          ]
        },
        {
          "id": "action-truth-caucus-vice-chair",
          "date": "2026",
          "body": "Kansas Truth Caucus lists Wasinger as vice-chair.",
          "sourceIds": [
            "s-truth-caucus"
          ]
        },
        {
          "id": "action-sb244-previous-question",
          "date": "2026-02-18",
          "body": "Kansas Press/Kansas Reflector reported Wasinger made a motion of the previous question during the SB 244 veto override debate.",
          "sourceIds": [
            "s-kspress-sb244-process",
            "s-sb244-override"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-sherman-bsky-sb244",
          "platform": "Bluesky",
          "observation": "Sherman Smith, Kansas Reflector editor in chief, posted that Wasinger had initiated a procedural move to end debate and go to the vote.",
          "observedAt": "2026-02-18",
          "sourceIds": [
            "s-bluesky-sherman"
          ],
          "mappedToIssueId": "regulation-executive-authority-process"
        }
      ],
      "gap": {
        "summary": "For procedural details, primary House Journal or video would be stronger than news reporting. The official roll-call confirms the override vote but not the motion language.",
        "evidenceIds": [
          "action-admin-rules-role"
        ]
      }
    },
    {
      "id": "sex-gender-policy-and-life-issues",
      "title": "Sex/Gender Policy and Life Issues",
      "stated": {
        "text": "The clearest primary action evidence is SB 244: the official bill page describes a measure concerning biological-sex designation in public facilities, statutory construction, driver's licenses, and birth certificates, and the override roll call lists Wasinger among yea votes. On abortion/life issues, her older campaign site says she worked to protect human life, and Kansas Truth Caucus lists her as vice-chair of a caucus whose self-description includes defending the unborn.",
        "sourceIds": [
          "s-sb244",
          "s-sb244-override",
          "s-campaign-old",
          "s-truth-caucus"
        ]
      },
      "actions": [
        {
          "id": "action-sb244-override",
          "date": "2026-02-18",
          "body": "Wasinger voted yea on the House motion to override Gov. Kelly's veto of SB 244.",
          "sourceIds": [
            "s-sb244-override",
            "s-sb244"
          ]
        },
        {
          "id": "action-life-campaign-statement",
          "date": "2023-2026",
          "body": "Older campaign site says Wasinger worked to protect human life.",
          "sourceIds": [
            "s-campaign-old"
          ]
        },
        {
          "id": "action-truth-caucus-life-affiliation",
          "date": "2026",
          "body": "Kansas Truth Caucus lists Wasinger as vice-chair and says the caucus advocates defending the unborn.",
          "sourceIds": [
            "s-truth-caucus"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-reddit-sb244-reaction",
          "platform": "Reddit",
          "observation": "A public r/kansas thread criticized Wasinger after SB 244 and linked local coverage. This is community reaction, not candidate-controlled speech or proof of conduct.",
          "observedAt": "2026-03",
          "sourceIds": [
            "s-reddit-sb244"
          ],
          "mappedToIssueId": "sex-gender-policy-and-life-issues"
        }
      ],
      "gap": {
        "summary": "Prior local research quotes iVoterGuide on life beginning at conception and flags a reported LGBTQ nondiscrimination answer. This pass did not directly verify that questionnaire, so those details should remain caveated until read back from source.",
        "evidenceIds": [
          "action-sb244-override"
        ]
      }
    }
  ],
  "ownWordsNarrative": "candidateControlled: platform: Campaign website; status: active; url: https://barbwasinger.com/; notes: Links Facebook and Instagram; no native engagement metrics.; platform: Older campaign website; status: active; url: https://barbforkansas.com/; notes: Links Facebook, Twitter/X, LinkedIn, and Instagram; latest tweets did not render in accessible HTML.; platform: Facebook; status: identified, content blocked; url: https://www.facebook.com/electbarbwasinger/; notes: No reliable public post corpus or metrics captured.; platform: Instagram; status: linked, content blocked; url: https://www.instagram.com/; notes: Campaign link exists; no readable post corpus captured.; platform: X/Twitter; status: likely account identified locally, content blocked; url: https://x.com/BarbWasinger; notes: No readable timeline or engagement metrics captured.; publicReaction: id: social-sherman-bsky-sb244; platform: Bluesky; issueId: regulation-executive-authority-process; sourceIds: s-bluesky-sherman; notes: Journalist post corroborates public attention to the SB 244 floor-procedure action.; id: social-reddit-sb244; platform: Reddit; issueId: sex-gender-policy-and-life-issues; sourceIds: s-reddit-sb244; notes: Community criticism of Wasinger after SB 244; do not use as factual proof beyond public reaction.",
  "whereTheyWorship": "Wasinger publicly identifies as a member of St. Joseph Catholic Church in Hays, and her campaign biography says she serves there as a lector and an notable Minister of Holy Communion. Church website: https://www.stj-church.com/.",
  "campaignFinance": {
    "totalRaised": "totalContributions: $11,134.20; totalExpenditures: $31,179.60; cashOnHandClose: $17,133.63; inKind: $6,000.00",
    "narrative": "totalContributions: $11,134.20; totalExpenditures: $31,179.60; cashOnHandClose: $17,133.63; inKind: $6,000.00",
    "donors": [
      {
        "name": "Barbara Wasinger",
        "amount": "$2,792.50"
      },
      {
        "name": "DoorDash, Inc.",
        "amount": "$500.00"
      },
      {
        "name": "Operating Engineers Local 101",
        "amount": "$500.00"
      },
      {
        "name": "POM of Kansas LLC",
        "amount": "$500.00"
      },
      {
        "name": "Kansas Livestock",
        "amount": "$500.00"
      },
      {
        "name": "Kansas Bankers Association PAC",
        "amount": "$500.00"
      },
      {
        "name": "Blue Cross Blue Shield Kansas",
        "amount": "$500.00"
      },
      {
        "name": "Kansas Contractors",
        "amount": "$500.00"
      },
      {
        "name": "Steve Wasinger",
        "amount": "$500.00"
      },
      {
        "name": "Dorothy Wasinger",
        "amount": "$500.00"
      },
      {
        "name": "PhRMA",
        "amount": "$250.00"
      },
      {
        "name": "LeadingAge Kansas",
        "amount": "$250.00"
      }
    ],
    "undisclosed": "Donor and expenditure records are public campaign-finance facts. They should not be described as influence or motive without separate evidence.",
    "reportingPeriod": "2025 year-end report, Jan. 1-Dec. 31, 2025",
    "source": "Campaign Finance Receipts and Expenditures Report - Barbara K Wasinger"
  },
  "sources": [
    {
      "id": "s-ksleg-profile",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Representative Barb Wasinger",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Barb Wasinger is the Republican House member for District 111, Ellis County",
        "House service is listed as 2019-present",
        "Wasinger chairs General Government Budget and serves as vice chair of Joint Committee on Administrative Rules and Regulations"
      ]
    },
    {
      "id": "s-hb2433",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2433/",
      "title": "HB 2433",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2433 clarifies county authority over water transfers and appropriation",
        "Rep. Barb Wasinger is listed as original and current sponsor",
        "Bill status is signed by governor"
      ]
    },
    {
      "id": "s-hb2433-house-vote",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260210111405_891879/",
      "title": "HB 2433 House Final Action",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "House final action passed 116-6 on Feb. 10, 2026",
        "Wasinger is listed among yea votes"
      ]
    },
    {
      "id": "s-sb334",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/measures/sb334/",
      "title": "SB 334",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 334 concerns nursing workforce development and education levels for nursing-school instructors",
        "Bill became law without signature"
      ]
    },
    {
      "id": "s-sb334-house-vote",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260318155214_530485/",
      "title": "SB 334 House Emergency Final Action",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "House emergency final action passed 81-43 on Mar. 18, 2026",
        "Wasinger is listed among yea votes in the search-visible roll call"
      ]
    },
    {
      "id": "s-sb244",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/year2/measures/sb244/",
      "title": "H Sub for SB 244",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 244 concerns biological-sex designation, multiple-occupancy private spaces in public buildings, driver's licenses, and birth certificates",
        "Bill status is veto overridden"
      ]
    },
    {
      "id": "s-sb244-override",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260218120124_975402/",
      "title": "SB 244 House Motion to Override Veto",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "House motion to override veto prevailed 87-37 on Feb. 18, 2026",
        "Wasinger is listed among yea votes"
      ]
    },
    {
      "id": "s-campaign-new",
      "tier": "primary",
      "url": "https://barbwasinger.com/",
      "title": "Home - Barb Wasinger",
      "publisher": "Barb Wasinger campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign site states approach of listening, working together, and getting things done",
        "Campaign site lists results on taxes, education, fentanyl, online pornography, FHSU, Medicaid/foster care, overregulation, and Kansas values",
        "Campaign site links Facebook and Instagram",
        "Observed public online activity mapped to Water and Local Infrastructure.",
        "Observed public online activity mapped to Taxes, Spending, and Budget.",
        "Observed public online activity mapped to Healthcare, Medicaid, Foster Care, and Nursing Workforce."
      ]
    },
    {
      "id": "s-campaign-old",
      "tier": "primary",
      "url": "https://barbforkansas.com/",
      "title": "Barb Wasinger - Kansas State Representative",
      "publisher": "Barb Wasinger campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Older campaign site lists promises made and promises kept",
        "Older campaign site cites Northwest Corridor funding",
        "Older campaign site says Wasinger worked to protect human life and reduce regulations",
        "Observed public online activity mapped to Water and Local Infrastructure.",
        "Observed public online activity mapped to Healthcare, Medicaid, Foster Care, and Nursing Workforce."
      ]
    },
    {
      "id": "s-truth-caucus",
      "tier": "secondary",
      "url": "https://www.kansastruthcaucus.org/about",
      "title": "About the Kansas Truth Caucus",
      "publisher": "Kansas Truth Caucus",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas Truth Caucus lists Rep. Barb Wasinger as vice-chair",
        "Caucus describes itself around limited government, individual liberty, free enterprise, traditional values, tax reform, education, and defending the unborn"
      ]
    },
    {
      "id": "s-hays-tax-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2b738882-c918-4672-aacb-cccdbceb383a",
      "title": "Local legislators to prioritize property taxes during 2026 session",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wasinger said top priorities included controlling spending, balancing the state budget, and addressing taxes",
        "Wasinger said Kansas needs a more equitable way to impose property taxes",
        "Wasinger questioned whether increased education spending is producing reading and math results",
        "Wasinger said she supports electing Kansas Supreme Court justices"
      ]
    },
    {
      "id": "s-hays-hb2433-signed",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ec8a0c28-4cb0-4994-90ba-3919fcadd4a0",
      "title": "Gov. Kelly signs water bill affecting water transfers",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Gov. Kelly signed HB 2433 on Mar. 20, 2026",
        "Hays Post describes Wasinger as sponsor and champion of the bill",
        "Article ties the bill to Edwards County water-transfer regulations and the Hays/Russell R9 Ranch dispute"
      ]
    },
    {
      "id": "s-kspress-sb244-process",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/04/13/kansas-legislature%E2%80%99s-gop-supermajority-embraces-rule-that-skirts-debate-muffles",
      "title": "Kansas Legislature's GOP supermajority embraces rule that skirts debate, muffles dissent",
      "publisher": "Kansas Press Association / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Article reports Wasinger made a motion of the previous question during the SB 244 veto override debate",
        "Article reports the House passed the motion and then completed the override 87-37"
      ]
    },
    {
      "id": "s-bluesky-sherman",
      "tier": "social",
      "url": "https://bsky.app/profile/journalist-sherman.bsky.social/post/3mf5m5og2w22o",
      "title": "Sherman Smith Bluesky post on SB 244 debate",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Sherman Smith posted on Feb. 18, 2026 that Wasinger had initiated a procedural move to end debate and go to the vote"
      ]
    },
    {
      "id": "s-reddit-sb244",
      "tier": "social",
      "url": "https://www.reddit.com/r/kansas/comments/1riwz14/sounds_like_barb_wasinger_was_too_much_of_a/",
      "title": "r/kansas thread on Wasinger and SB 244",
      "publisher": "Reddit",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Public Reddit thread criticized Wasinger after SB 244 and linked to local coverage",
        "Used only as community-reaction lead, not as proof of candidate conduct"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2e2efa2c-4a4a-4590-b7a5-0aeabf7be52b",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes, Spending, and Budget.",
        "2024 Hays Post questionnaire: property tax reduction and school funding were top issues; she named cybersecurity and administrative rules/regulations as priorities; she opposed Med"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0467451d-0b49-4f89-830e-7107584885fc",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes, Spending, and Budget.",
        "2024 Hays Post election-night story: she emphasized property tax relief, cybersecurity, water, private water ownership through LEMAs, seniors, and education funding. Source: Hays P"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/04/01/kansas-legislature-decides-sugaring-including-intimate-hair-removal-shouldnt-be-regulated/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Education, FHSU, and Judicial Selection.",
        "2024 sugaring deregulation: she argued Board of Cosmetology rules were blocking a constituent from starting a flexible business. Source: Kansas Reflector, Apr. 1, 2024."
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/19/kansas-legislature-resets-academic-expectation-for-hiring-faculty-in-college-nursing-programs/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Education, FHSU, and Judicial Selection.",
        "2026 nursing faculty bill: Kansas Reflector reported she carried the bill on the House floor and rejected claims it would lower standards or undermine accreditation. Source: Kansas"
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f53b3db9-b85b-42ff-accd-ae5f0c823f59",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Healthcare, Medicaid, Foster Care, and Nursing Workforce.",
        "2025 legislative coffee: she said Kansas had been overspending and needed to stop, discussed CPI/valuation incentives for property tax restraint, and described unused agency progra"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(BARB_WASINGER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[barb-wasinger.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
