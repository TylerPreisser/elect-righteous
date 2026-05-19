/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const DANIEL_HAWKINS_V2: CandidateFullV2 = {
  "slug": "daniel-hawkins",
  "name": "Daniel Hawkins",
  "party": "R",
  "position": "Kansas Commissioner of Insurance",
  "electionSlug": "kansas-insurance-2026",
  "incumbent": false,
  "occupation": "Kansas House Speaker, District 100",
  "family": "Diane Hawkins (married 1985, \"college sweetheart\")",
  "campaignWebsite": "https://www.hawkinsforinsurance.com/",
  "issues": [
    {
      "id": "i-insurance-affordability-regulation-pbm",
      "title": "Insurance Affordability / Regulation / Prescription Drug Costs",
      "stated": {
        "text": "Hawkins' insurance campaign says he wants a fair and transparent insurance system, lower costs by increasing options, less red tape, a taxpayer-friendly Kansas Department of Insurance, and stronger action against insurance and securities fraud. The campaign also presents his 30 years in employee-benefits insurance as a core qualification.",
        "sourceIds": [
          "s-campaign-insurance",
          "s-leg-profile"
        ]
      },
      "actions": [
        {
          "id": "ae-insurance-1",
          "date": "2025-05-13",
          "body": "KPDC appointment-of-treasurer form lists Daniel Hawkins as a candidate for Insurance Commissioner with Mary Eisenhower as treasurer.",
          "sourceIds": [
            "s-kpdc-treasurer"
          ]
        },
        {
          "id": "ae-insurance-2",
          "date": "2026-01-09",
          "body": "KPDC January 2026 report showed $417,305.07 in contributions/receipts, $33,295.22 in expenditures, $384,009.85 cash on hand, $565.68 in-kind, and a $10,000 candidate loan.",
          "sourceIds": [
            "s-kpdc-jan2026"
          ]
        },
        {
          "id": "ae-insurance-3",
          "date": "2026-03-23",
          "body": "SB 20, the Kansas consumer prescription protection and accountability act regulating pharmacy benefit managers, was signed by the governor; Kansas Legislature lists SB 360 as an associated bill.",
          "sourceIds": [
            "s-leg-sb20",
            "s-leg-sb360"
          ]
        },
        {
          "id": "ae-insurance-4",
          "date": "2026-03-26",
          "body": "KMUW/High Plains Public Radio reported SB 360 was the original PBM bill, that the PBM language was inserted into SB 20, and that the House passed the measure 104-17 after reporting that Hawkins had appeared set to keep SB 360 from moving.",
          "sourceIds": [
            "s-kmuw-pbm"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-insurance-1",
          "platform": "Campaign website",
          "observation": "The active campaign site centers the insurance race around accessibility, affordability, more options, less regulation, a taxpayer-friendly department, and fraud/securities enforcement.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-insurance"
          ],
          "mappedToIssueId": "i-insurance-affordability-regulation-pbm"
        },
        {
          "id": "ss-insurance-2",
          "platform": "Local prior social harvest",
          "observation": "The May 11 logged-out harvest coded four of 27 public items as insurance affordability, consumer navigation, or anti-fraud, but direct platform engagement counts were limited.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-insurance-affordability-regulation-pbm"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Daniel Hawkins has an active candidate-controlled web presence anchored by the insurance commissioner site, an older House campaign site, and a public X account. The insurance site links to X, Instagram, and Facebook. The older House campaign site links to Facebook, X/Twitter, YouTube, and Instagram, and includes a visible Facebook feed under \"News.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-insurance-affordability-regulation-pbm"
        }
      ],
      "gap": {
        "summary": "The campaign's lower-cost framing rests on deregulation/more options, while the public legislative record includes reported opposition to a PBM regulation bill that supporters framed as prescription-drug-cost relief. Present this as documented record contrast, not as motive.",
        "evidenceIds": [
          "ae-insurance-1"
        ]
      }
    },
    {
      "id": "i-campaign-finance-industry-funding",
      "title": "Campaign Finance / Industry Funding",
      "stated": {
        "text": "Hawkins' campaign finance record shows a well-funded statewide campaign account for the insurance commissioner race. Issue-relevant contributors in the public KPDC report include insurance, health care, pharmaceutical/PBM, professional, business, labor, and public-affairs entities.",
        "sourceIds": [
          "s-kpdc-statewide-2026",
          "s-kpdc-jan2026"
        ]
      },
      "actions": [
        {
          "id": "ae-finance-1",
          "date": "2026-01-09",
          "body": "Filed the January 2026 receipts/expenditures report for the 2025 reporting period with $384,009.85 cash on hand.",
          "sourceIds": [
            "s-kpdc-jan2026"
          ]
        },
        {
          "id": "ae-finance-2",
          "date": "2025-12-31",
          "body": "Public report includes contributions from NAIFA Kansas PAC, Shelter Insurance Kansas PAC, Pharmaceutical Care Management Association, UnitedHealth Group PAC, CVS Health, Blue Cross Blue Shield of Kansas City PAC, BlueCross BlueShield Kansas, Lockton Management, New Century Insurance Group, Kansas Pharmacists Association PAC, and other health/insurance-linked entities.",
          "sourceIds": [
            "s-kpdc-jan2026"
          ]
        },
        {
          "id": "ae-finance-3",
          "date": "2025-05-13",
          "body": "Schedule D lists a $10,000 loan from Daniel Hawkins to the campaign.",
          "sourceIds": [
            "s-kpdc-jan2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "Latest visible candidate-controlled material: the older campaign site's embedded Facebook feed showed relative timestamps within days of access on May 11, 2026, including posts on legislative wrap-up, United WE, Moody's, law enforcement valor awards, White House recognition, Butler County GOP, SNAP audit, property tax relief, senior crypto scams, and pro-life/religious-freedom wins.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-campaign-finance-industry-funding"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "News amplification: the launch message was picked up by Kansas Reflector; later statements were republished or quoted by outlets including WIBW and HPPR/Kansas Reflector.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kr-launch"
          ],
          "mappedToIssueId": "i-campaign-finance-industry-funding"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Facebook",
          "observation": "\"We're going to lower costs, cut through the complexity, and make insurance more accessible for Kansans.\" - visible \"Speaker Dan Hawkins\" Facebook-feed item embedded on Hawkins for Kansas, relative timestamp 18 hours in indexed preview accessed May 11, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-campaign-finance-industry-funding"
        }
      ],
      "gap": {
        "summary": "KPDC's page warns against copying contributor names for commercial use. This profile should cite totals and issue-relevant funding categories rather than reproduce bulk donor lists.",
        "evidenceIds": [
          "ae-finance-1"
        ]
      }
    },
    {
      "id": "i-taxes-budget-property-tax",
      "title": "Taxes / Budget / Property Tax",
      "stated": {
        "text": "Hawkins' campaign lists tax-cut and budget-process accomplishments, including eliminating the food sales tax, eliminating state income tax on Social Security, lowering the state income tax, reducing the state portion of the property tax, and implementing a budgeting process the campaign says saved more than $210 million in the first year.",
        "sourceIds": [
          "s-campaign-insurance"
        ]
      },
      "actions": [
        {
          "id": "ae-tax-1",
          "date": "2026-04",
          "body": "Kansas Legislature page for HB 2043 describes a property-tax protest-petition bill and marks it vetoed by the governor.",
          "sourceIds": [
            "s-leg-hb2043"
          ]
        },
        {
          "id": "ae-tax-2",
          "date": "2025-03-19",
          "body": "2025 vote record shows Hawkins voting yea on SB 35 emergency final action, a bill discontinuing state property tax levies for the Kansas educational building fund and state institutions building fund and financing them from the state general fund.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        },
        {
          "id": "ae-tax-3",
          "date": "2025-03-07",
          "body": "2025 vote record shows Hawkins voting yea on HB 2318 final action, a bill making future income and privilege tax rate decreases contingent on revenue triggers.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-tax-1",
          "platform": "Local prior social harvest",
          "observation": "The May 11 harvest coded six of 27 public items as taxes, budget, spending, or property-tax relief, including visible/publicly reported property-tax messaging.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-taxes-budget-property-tax"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Facebook",
          "observation": "\"HB 2043 gives taxpayers a way to fight back against skyrocketing property taxes.\" - visible \"Speaker Dan Hawkins\" Facebook-feed item embedded on Hawkins for Kansas, relative timestamp two days in indexed preview accessed May 11, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-taxes-budget-property-tax"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Kansas Reflector",
          "observation": "Kansas Reflector: Medicaid/budget interview coverage",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-taxes-budget-property-tax"
        }
      ],
      "gap": {
        "summary": "The campaign's specific $210 million budget-process savings claim was not independently audited in this pass.",
        "evidenceIds": [
          "ae-tax-1"
        ]
      }
    },
    {
      "id": "i-healthcare-medicaid-public-health",
      "title": "Healthcare / Medicaid / Public Health Authority",
      "stated": {
        "text": "Hawkins' campaign says he has led the effort for more than a decade to prevent expansion of Obamacare in Kansas, and older local research captured his public opposition to Medicaid expansion.",
        "sourceIds": [
          "s-campaign-insurance"
        ]
      },
      "actions": [
        {
          "id": "ae-health-1",
          "date": "2025-04-10",
          "body": "2025 vote record shows Hawkins voting yea on SB 29 veto consideration, a bill removing local health officers' authority to prohibit public gatherings for infectious or contagious disease control.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        },
        {
          "id": "ae-health-2",
          "date": "2026-03-23",
          "body": "SB 20, signed by the governor, created the Kansas consumer prescription protection and accountability act regulating pharmacy benefit managers; this overlaps healthcare costs and insurance regulation.",
          "sourceIds": [
            "s-leg-sb20"
          ]
        },
        {
          "id": "ae-health-3",
          "date": "2024-04-18",
          "body": "Existing local raw dump captured Kansas Reflector coverage of Hawkins making the case against Medicaid expansion in Plainville; use as secondary context pending any official transcript.",
          "sourceIds": [
            "s-campaign-insurance"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-health-1",
          "platform": "Campaign website",
          "observation": "The active campaign site includes anti-Medicaid/Obamacare-expansion language among legislative accomplishments rather than as a detailed insurance commissioner platform section.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-insurance"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-public-health"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Earliest candidate-controlled item used for the current insurance campaign: May 13, 2025 campaign launch coverage quoting Hawkins' statement and describing his campaign site.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-public-health"
        },
        {
          "id": "ss-crossref-4",
          "platform": "X",
          "observation": "Counts are hand-coded from 27 public, candidate-controlled or candidate-attributed items: the insurance site's 14 accomplishment/priorities bullets, the older site's issue statement and five visible feed posts, plus eight indexed/quoted X/news items. One item can be counted once by dominant topic.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-public-health"
        }
      ],
      "gap": {
        "summary": "No current candidate-controlled detailed Medicaid, rural hospital, or insurance-market implementation plan was found beyond anti-expansion and lower-cost/more-options framing.",
        "evidenceIds": [
          "ae-health-1"
        ]
      }
    },
    {
      "id": "i-abortion-family-gender-religious-liberty",
      "title": "Abortion / Family / Gender Policy / Religious Liberty",
      "stated": {
        "text": "Hawkins' campaign describes him as pro-life and says legislative leadership helped override vetoes on pro-life bills, protect girls' sports, ban gender-transition surgeries on Kansas children, and pass religious-liberty/foster-care protections.",
        "sourceIds": [
          "s-campaign-insurance"
        ]
      },
      "actions": [
        {
          "id": "ae-family-1",
          "date": "2025-04-10",
          "body": "2025 vote record shows Hawkins voting yea on HB 2062 veto consideration, a bill concerning child-support orders for unborn children and related tax/medical/pregnancy-expense provisions.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        },
        {
          "id": "ae-family-2",
          "date": "2025-02-18",
          "body": "2025 vote record shows Hawkins voting yea on SB 63 veto consideration, the Help Not Harm Act restricting gender-transition care for minors and related state funding, liability, and professional-discipline provisions.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        },
        {
          "id": "ae-family-3",
          "date": "2025-04-10",
          "body": "2025 vote record shows Hawkins voting yea on HB 2311 veto consideration, a foster-care placement/custody bill involving sincerely held religious or moral beliefs regarding sexual orientation or gender identity.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        },
        {
          "id": "ae-family-4",
          "date": "2026-01-28",
          "body": "Official SB 244 final-action roll call lists Hawkins in the yea column on a bill concerning biological sex, public multiple-occupancy private spaces, driver's licenses, birth certificates, and statutory gender definitions.",
          "sourceIds": [
            "s-leg-sb244-final"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-family-1",
          "platform": "Local prior social harvest",
          "observation": "The May 11 harvest coded four of 27 public items as abortion, family, religious liberty, or gender policy, including campaign-site and prior embedded-feed observations.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-abortion-family-gender-religious-liberty"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Facebook",
          "observation": "His older Hawkins for Kansas site supplies the ideological baseline: unchecked government expansion limits freedom and hurts business growth; he says he is dedicated to defending life, strengthening the family, and protecting rights. That site's public Facebook feed shows the day-to-day version of the same message: legislative wrap-ups with chambers of commerce and GOP groups, property-tax pressure on Kelly,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-family-gender-religious-liberty"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Website and prior social signals map mainly to insurance affordability, taxes/property taxes, anti-Kelly contrast, Trump alignment, abortion/gender policy, guns, election integrity, immigration, and anti-Medicaid-expansion messaging.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-abortion-family-gender-religious-liberty"
        }
      ],
      "gap": {
        "summary": "No current church affiliation was verified. Do not infer faith practice from policy positions or party label.",
        "evidenceIds": [
          "ae-family-1"
        ]
      }
    },
    {
      "id": "i-guns-election-immigration-covid",
      "title": "Guns / Election Integrity / Immigration / COVID Authority",
      "stated": {
        "text": "Hawkins' campaign brands him as pro-gun and lists election-integrity veto overrides, a sanctuary-city ban, provisions supporting the Trump administration on illegal immigration, and ending COVID lockdowns as legislative accomplishments.",
        "sourceIds": [
          "s-campaign-insurance"
        ]
      },
      "actions": [
        {
          "id": "ae-geic-1",
          "date": "2025-03-24",
          "body": "2025 vote record shows Hawkins voting yea on HB 2052 concurrence, a bill updating concealed-handgun licensing provisions and rules for off-duty law enforcement entering buildings while armed.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        },
        {
          "id": "ae-geic-2",
          "date": "2025-03-20",
          "body": "2025 vote record shows Hawkins voting yea on HB 2016 concurrence, a voter-roll/election administration bill involving deceased-voter removal, poll-worker citizenship/residency, and advance-voting application provisions.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        },
        {
          "id": "ae-geic-3",
          "date": "2025-03-20",
          "body": "2025 vote record shows Hawkins voting yea on HB 2020 concurrence, requiring quarterly reports on certain noncitizens issued driver's licenses.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        },
        {
          "id": "ae-geic-4",
          "date": "2025-04-10",
          "body": "2025 vote record shows Hawkins voting yea on SB 29 veto consideration, removing local health officer authority to prohibit gatherings for infectious or contagious disease control.",
          "sourceIds": [
            "s-leg-vote-record-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-geic-1",
          "platform": "Campaign website",
          "observation": "The campaign site presents guns, election integrity, immigration, and COVID authority as accomplishments in the same campaign identity frame as pro-Trump positioning.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-insurance"
          ],
          "mappedToIssueId": "i-guns-election-immigration-covid"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "Earliest candidate-attributed social item found in public articles: May 3, 2021, when KSRA PAC thanked @DanHawkinsKS as House majority leader in an embedded X post about election-integrity and concealed-carry veto overrides.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-guns-election-immigration-covid"
        },
        {
          "id": "ss-crossref-4",
          "platform": "x",
          "observation": "The highest visible engagement signal is not a single viral post but the durability of his public platforms. Indexed profile previews put @DanHawkinsKS at about 2,000 followers, while the older campaign site embeds his Facebook feed and the YouTube political channel appears small at roughly 57-58 subscribers. The campaign's earned-media amplification is stronger than its visible video footprint: Kansas Reflector...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-guns-election-immigration-covid"
        }
      ],
      "gap": {
        "summary": "This pass did not independently verify every campaign-listed immigration/election/COVID accomplishment against final enacted bills; selected 2025 vote-record anchors are included.",
        "evidenceIds": [
          "ae-geic-1"
        ]
      }
    },
    {
      "id": "i-governance-redistricting-legislative-leadership",
      "title": "Governance / Redistricting / Legislative Leadership",
      "stated": {
        "text": "Hawkins is not running as an outsider; the official Legislature profile lists him as Speaker of the House and in multiple leadership roles. His campaign presents legislative leadership as proof he can run the insurance department.",
        "sourceIds": [
          "s-leg-profile",
          "s-campaign-insurance"
        ]
      },
      "actions": [
        {
          "id": "ae-governance-1",
          "date": "2026-01-06",
          "body": "KCUR/The Beacon reported Hawkins said congressional redistricting was a priority but that House Republicans were about 20 votes short of overriding a veto.",
          "sourceIds": [
            "s-kcur-redistricting"
          ]
        },
        {
          "id": "ae-governance-2",
          "date": "2025-11-07",
          "body": "Kansas Reflector/News From The States reported Hawkins stripped three Republican colleagues of committee chairmanships after they refused to sign a special-session petition for congressional redistricting.",
          "sourceIds": [
            "s-kr-redistricting"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-governance-1",
          "platform": "Local prior social harvest",
          "observation": "Prior logged-out capture included a public X mirror/snippet saying 'Sharice Davids does not represent Kansas values. Time to redraw our maps! #ksleg'; direct X verification remains limited.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-governance-redistricting-legislative-leadership"
        }
      ],
      "gap": {
        "summary": "Redistricting evidence is mostly secondary reporting and public social snippets, not a candidate issue page. Present as leadership/governance behavior, not insurance-policy substance.",
        "evidenceIds": [
          "ae-governance-1"
        ]
      }
    }
  ],
  "whoTheyAre": "Accessible official and government-adjacent sources support treating Hawkins as a Republican candidate for Kansas Commissioner of Insurance in 2026. Kansas SOS confirms the office is on the 2026 ballot and the June 1, 2026 filing deadline; KPDC lists Hawkins under Insurance Commissioner Candidates and his treasurer filing says office sought is Insurance Commissioner; a current Douglas County/state candidate filing PDF lists Daniel Hawkins (R) as filed on May 13, 2025 for the August 4, 2026 primary. The live SOS candidate-list endpoint was blocked in this environment.",
  "recordSummary": "Kansas House Speaker, District 100",
  "ownWordsNarrative": "Social research is included as observed public behavior, not as a proxy for belief. Current campaign site links X, Instagram, and Facebook; direct platform timelines were limited by scripts/login walls. The older site used in prior local harvest is now suspended, so prior embedded Facebook observations should retain their May 11, 2026 capture label.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "$417,305.07",
    "narrative": "Hawkins' January 2026 KPDC report shows a substantial early statewide campaign account and includes issue-relevant funding from insurance, health care, pharmaceutical/PBM, professional, business, labor, and public-affairs entities. Because the office sought regulates insurance, the insurance/PBM/health donor pattern should be disclosed neutrally alongside his insurance-industry work history and any statement-of-substantial-interest context.",
    "donors": [],
    "reportingPeriod": "2025-01-01 through 2025-12-31",
    "source": "Daniel Hawkins January 2026 Receipts and Expenditures Report"
  },
  "sources": [
    {
      "id": "s-sos-candidate-info-2026",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Kansas Secretary of State - Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Commissioner of Insurance is an office to be elected in 2026.",
        "State candidates file with the Secretary of State.",
        "Primary filing deadline is 12:00 p.m. Monday, June 1, 2026."
      ]
    },
    {
      "id": "s-kpdc-statewide-2026",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas State Wide Office - 2026 Election Cycle",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Daniel Hawkins is listed under Insurance Commissioner Candidates.",
        "KPDC links Hawkins' treasurer form and January 2026 report.",
        "Page carries statutory warning on contributor-name use."
      ]
    },
    {
      "id": "s-kpdc-treasurer",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DH_AT.pdf",
      "title": "Daniel Hawkins Appointment of Treasurer",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate name Daniel Hawkins.",
        "Office sought Insurance Commissioner.",
        "Treasurer Mary Eisenhower; executed May 13, 2025."
      ]
    },
    {
      "id": "s-kpdc-jan2026",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW03DH_202601.pdf",
      "title": "Daniel Hawkins January 2026 Receipts and Expenditures Report",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2025 finance totals, cash on hand, in-kind contributions, and candidate loan.",
        "Issue-relevant insurance, health, pharmaceutical/PBM, and professional PAC/entity contributions."
      ]
    },
    {
      "id": "s-leg-profile",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/legislators/rep_hawkins_daniel_1/",
      "title": "Kansas Legislature - Daniel Hawkins",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hawkins is House Speaker, Republican, District 100.",
        "Occupation listed as Insurance Agent.",
        "House service 2013-present and 2025-2026."
      ]
    },
    {
      "id": "s-campaign-insurance",
      "tier": "primary",
      "url": "https://www.hawkinsforinsurance.com/",
      "title": "Dan Hawkins for Insurance Commissioner",
      "publisher": "Dan Hawkins for Insurance Commissioner",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign branding and issue statements.",
        "Insurance affordability/regulation priorities.",
        "Biography and legislative accomplishment claims."
      ]
    },
    {
      "id": "s-leg-vote-record-2025",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/documents/rep_hawkins_daniel_1_vote_record_2025.pdf",
      "title": "Kansas House of Representatives - Hawkins 2025 Vote Record",
      "publisher": "Kansas House of Representatives",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Selected 2025 votes on insurance, guns, election administration, noncitizen driver-license reporting, unborn-child support, foster care/religious beliefs, public health authority, and Help Not Harm Act."
      ]
    },
    {
      "id": "s-leg-sb20",
      "tier": "primary",
      "url": "https://kslegislature.gov/b2025_26/bills/sb20/",
      "title": "SB 20 - Kansas Consumer Prescription Protection and Accountability Act",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "PBM regulation bill signed by governor.",
        "Associated with SB 360."
      ]
    },
    {
      "id": "s-leg-sb360",
      "tier": "primary",
      "url": "https://kslegislature.gov/b2025_26/bills/sb360/",
      "title": "SB 360 - Kansas Consumer Prescription Protection and Accountability Act",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Original PBM regulation bill status died.",
        "Committee testimony and bill history."
      ]
    },
    {
      "id": "s-leg-hb2043",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/hb2043/",
      "title": "HB 2043 - Property Tax Protest Petition",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Property-tax protest-petition bill vetoed by governor."
      ]
    },
    {
      "id": "s-leg-sb244-final",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260128172436_774228/",
      "title": "SB 244 House Emergency Final Action Roll Call",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hawkins listed in yea column on SB 244 final action."
      ]
    },
    {
      "id": "s-kmuw-pbm",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-26/kansas-house-passes-bill-providing-stricter-regulation-of-prescription-drug-middlemen",
      "title": "Kansas House passes bill providing stricter regulation of prescription drug middlemen",
      "publisher": "KMUW / High Plains Public Radio",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "PBM language inserted into SB 20; House passed measure 104-17.",
        "Reported Hawkins appeared set to keep SB 360 from moving."
      ]
    },
    {
      "id": "s-kr-launch",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansas House speaker launches campaign for insurance commissioner with pro-Trump rhetoric",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign launch context.",
        "Reported statement-of-substantial-interest insurance commissions/payroll.",
        "Observed public online activity mapped to Campaign Finance / Industry Funding."
      ]
    },
    {
      "id": "s-kcur-redistricting",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-06/kansas-republicans-redistricting-congress-sharice-davids",
      "title": "Kansas Republicans don't have the votes for redistricting in 2026, house speaker says",
      "publisher": "KCUR / The Beacon",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hawkins said redistricting was a priority but lacked votes for veto override."
      ]
    },
    {
      "id": "s-kr-redistricting",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/07/kansas-house-speaker-punishes-gop-colleagues-for-not-supporting-special-session/",
      "title": "Kansas House speaker punishes GOP colleagues for not supporting special session",
      "publisher": "Kansas Reflector / News From The States",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reported committee-chair removals after redistricting special-session petition dispute."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://danhawkinskansas.com/",
      "title": "Facebook / Danhawkinskansas",
      "publisher": "Danhawkinskansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Campaign Finance / Industry Funding.",
        "\"We're going to lower costs, cut through the complexity, and make insurance more accessible for Kansans.\" - visible \"Speaker Dan Hawkins\" Facebook-feed item embedded on Hawkins for",
        "Observed public online activity mapped to Taxes / Budget / Property Tax.",
        "Observed public online activity mapped to Abortion / Family / Gender Policy / Religious Liberty."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/kansas-house-speaker-wants-to-slash-200-million-from-state-budget-target-medicaid-for-cuts/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes / Budget / Property Tax.",
        "Kansas Reflector: Medicaid/budget interview coverage"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "social",
      "url": "https://x.com/DanHawkinsKS",
      "title": "x / X",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Guns / Election Integrity / Immigration / COVID Authority.",
        "The highest visible engagement signal is not a single viral post but the durability of his public platforms. Indexed profile previews put @DanHawkinsKS at about 2,000 followers, wh"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(DANIEL_HAWKINS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[daniel-hawkins.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
