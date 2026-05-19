/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const DINAH_SYKES_V2: CandidateFullV2 = {
  "slug": "dinah-sykes",
  "name": "Dinah Sykes",
  "party": "D",
  "position": "Kansas Commissioner of Insurance",
  "electionSlug": "kansas-insurance-2026",
  "incumbent": false,
  "occupation": "Kansas Senate District 21; Senate Minority Leader",
  "born": "April 10, 1977",
  "hometown": "Lenexa, KS (Johnson County)",
  "family": "Jeffrey Sykes; Two sons: William and Tyler",
  "campaignWebsite": "https://www.dinahsykes.com/",
  "issues": [
    {
      "id": "insurance-affordability-consumer-protection",
      "title": "Insurance Affordability and Consumer Protection",
      "stated": {
        "text": "Sykes's current campaign for Kansas Commissioner of Insurance centers affordability, fairness, consumer protection, transparency, and accountability for insurance companies.",
        "sourceIds": [
          "s-campaign-home",
          "s-kansas-reflector-launch"
        ]
      },
      "actions": [
        {
          "id": "act-insurance-filed",
          "date": "2026-01-08",
          "body": "Sykes filed campaign paperwork for Insurance Commissioner and appointed Kevin Moriarty as treasurer.",
          "sourceIds": [
            "s-kpdc-sykes-treasurer",
            "s-douglas-candidate-export"
          ]
        },
        {
          "id": "act-insurance-pledge",
          "date": "2026-01-08",
          "body": "Launch coverage reported Sykes pledged not to take campaign contributions from the insurance industry.",
          "sourceIds": [
            "s-kansas-reflector-launch"
          ]
        },
        {
          "id": "act-insurance-former-commissioners",
          "date": "2026-01-08",
          "body": "Campaign and launch coverage list former Kansas Insurance Commissioners Sandy Praeger and Kathleen Sebelius as endorsers.",
          "sourceIds": [
            "s-campaign-home",
            "s-kansas-reflector-launch"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-insurance-web-footprint",
          "platform": "Campaign website / Facebook / Instagram",
          "observation": "The current campaign site links ActBlue, Facebook, and Instagram and uses insurance affordability and consumer protection as its main public message. Existing logged-out harvest found no campaign-site links to X, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, or Reddit.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "insurance-affordability-consumer-protection"
        },
        {
          "id": "ss-crossref-2",
          "platform": "dinahsykes.com",
          "observation": "The verified 2026 campaign website frames Sykes around \"Fighting for Affordable Insurance and Protecting Kansas Families\" and says Kansas deserves an insurance commissioner \"who puts people first.\" Its core issues are affordability, consumer protection, transparency, and fairness. The site says Sykes wants to hold the insurance industry accountable when companies deny payment or block treatment. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "insurance-affordability-consumer-protection"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Facebook",
          "observation": "The campaign site links Facebook and Instagram, but not X, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Reddit, or LinkedIn. It lists ActBlue fundraising, a campaign email, and endorsements from former insurance commissioners Sandy Praeger and Kathleen Sebelius. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "insurance-affordability-consumer-protection"
        }
      ]
    },
    {
      "id": "health-care-access-coverage",
      "title": "Health Care Access and Coverage",
      "stated": {
        "text": "Sykes links the insurance-commissioner race to health-insurance costs and coverage problems, and her caucus biography describes work on expanding health-care access.",
        "sourceIds": [
          "s-campaign-home",
          "s-kansas-reflector-launch",
          "s-kssenatedems-profile"
        ]
      },
      "actions": [
        {
          "id": "act-breast-cancer-screening",
          "date": "2025",
          "body": "Kansas Legislature lists Sykes among sponsors of SB 219 concerning insurance coverage for supplemental and diagnostic breast examinations.",
          "sourceIds": [
            "s-ksleg-sb219"
          ]
        },
        {
          "id": "act-health-cost-launch",
          "date": "2026-01-08",
          "body": "Launch coverage quoted Sykes saying the cost of health insurance in Kansas is simply out of control.",
          "sourceIds": [
            "s-kansas-reflector-launch"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "The campaign Facebook page metadata identified the page as \"Senator Dinah Sykes,\" with 3,401 likes and 105 talking about this. Its public description says she is Senate Democratic Leader for Kansas Senate District 21 and a candidate for Kansas Insurance Commissioner, with a paid-for-by line for Sykes for Insurance Commissioner. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "health-care-access-coverage"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Instagram",
          "observation": "The campaign Instagram page metadata identified @dinah_sykes as \"Senator Dinah Sykes,\" with 1,411 followers, 86 following, and 222 posts. Its bio says: \"Kansas State Senator, Candidate for Kansas Insurance Commissioner. Paid for by Sykes for Insurance Commissioner- Kevin Moriarty, Treasurer.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "health-care-access-coverage"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Facebook",
          "observation": "1. Campaign homepage, captured 2026-05-11. Key signals: affordable insurance, protecting Kansas families, consumer protection, transparency, fairness, industry accountability, and endorsements from Sandy Praeger and Kathleen Sebelius. (source) 2. Campaign Facebook metadata, captured 2026-05-11: 3,401 likes, 105 talking about this, Senate Democratic Leader, candidate for Kansas Insurance Commissioner, campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "health-care-access-coverage"
        }
      ]
    },
    {
      "id": "working-family-affordability",
      "title": "Working-Family Affordability, Wages, and Taxes",
      "stated": {
        "text": "Sykes's public record connects affordability to wages, paid sick time, taxes, and cost-of-living pressure.",
        "sourceIds": [
          "s-campaign-home",
          "s-governor-minwage"
        ]
      },
      "actions": [
        {
          "id": "act-minimum-wage-statement",
          "date": "2025-02-05",
          "body": "In an official Governor's Office release, Sykes joined Gov. Laura Kelly and Rep. Brandon Woodard in calling for a $15 Kansas minimum wage.",
          "sourceIds": [
            "s-governor-minwage"
          ]
        },
        {
          "id": "act-paid-sick-time",
          "date": "2025",
          "body": "Kansas Legislature lists Sykes among sponsors of SB 216 concerning paid sick time.",
          "sourceIds": [
            "s-ksleg-sb216"
          ]
        },
        {
          "id": "act-minimum-wage-bill",
          "date": "2025",
          "body": "Kansas Legislature lists Sykes among sponsors of SB 218 concerning the Kansas minimum wage.",
          "sourceIds": [
            "s-ksleg-sb218"
          ]
        },
        {
          "id": "act-social-security-tax",
          "date": "2025",
          "body": "Kansas Legislature lists Sykes among sponsors of SB 217 concerning exclusion of Social Security payments from Kansas adjusted gross income.",
          "sourceIds": [
            "s-ksleg-sb217"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-affordability-indexed-x",
          "platform": "Public web / candidate-attributed column",
          "observation": "Existing local harvest found candidate-attributed writing criticizing flat-tax policy and tying affordability to working families. Treat it as public web context, not current campaign social-post evidence.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-joc-post-2023"
          ],
          "mappedToIssueId": "working-family-affordability"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Facebook",
          "observation": "Kansas Senate Democrats profile, captured 2026-05-11: first woman to serve as Kansas Senate Democratic leader; profile emphasizes public school funding, early childhood education, survivor protections, courage, compassion, and common sense. (source) 7. Kansas Senate Democrats candidate page, captured 2026-05-11: links campaign website, fundraising page, and Facebook page; biography emphasizes public schools,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kssenatedems-profile"
          ],
          "mappedToIssueId": "working-family-affordability"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Kansas Reflector",
          "observation": "Kansas Legislature profile, captured 2026-05-11: confirms Senate Minority Leader, Senate District 21, Democrat, committee roles, and sponsored bills including child tax credit, paid sick time, minimum wage, property tax, and breast-cancer screening coverage. (source) 9. Kansas Reflector, Jan. 8, 2026: launch coverage says Sykes will decline insurance-industry contributions and focus on lowering costs, consumer...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksleg-profile"
          ],
          "mappedToIssueId": "working-family-affordability"
        }
      ]
    },
    {
      "id": "public-schools-education",
      "title": "Public Schools and Education",
      "stated": {
        "text": "The Kansas Senate Democrats profile says Sykes has focused on public-school funding and early childhood education. Her official legislative page lists her as Ranking Minority Member on the Senate Education Committee.",
        "sourceIds": [
          "s-kssenatedems-profile",
          "s-ksleg-profile"
        ]
      },
      "actions": [
        {
          "id": "act-education-committee",
          "date": "2025-2026",
          "body": "Kansas Legislature lists Sykes as Ranking Minority Member of the Senate Committee on Education.",
          "sourceIds": [
            "s-ksleg-profile"
          ]
        },
        {
          "id": "act-sb75-tax-credit-vote",
          "date": "2025",
          "body": "Sykes's official 2025 vote record lists her voting against SB 75, described in the roll-call record as an income-tax-credit bill.",
          "sourceIds": [
            "s-ksleg-vote-record-2025"
          ]
        },
        {
          "id": "act-hb2045-education-savings-vote",
          "date": "2025",
          "body": "Sykes's official 2025 vote record lists her voting against HB 2045, described in the roll-call record as an education savings account bill.",
          "sourceIds": [
            "s-ksleg-vote-record-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "14, 2025: Democratic leaders identified minimum wage, health care access, public education, and tax relief as priorities. Sykes said Republican priorities should be tested by whether they make life more affordable and improve quality of life. (source) 12. Governor's office, Feb. 5, 2025: joint statement with Gov. Laura Kelly and House Minority Leader Brandon Woodard backing a $15 minimum wage and saying Kansas...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "public-schools-education"
        },
        {
          "id": "ss-crossref-3",
          "platform": "kcur",
          "observation": "17, 2025: interview after the assassination of Minnesota Rep. Melissa Hortman. Sykes discussed safety concerns, divisiveness, and the need to go after policy rather than people. (source) 20. Yahoo/Kansas City Star opinion, May 21, 2023: Sykes wrote as a Christian, mother, and daughter who lost her mother to breast cancer, linking those experiences to public schools, health care, justice, and mercy. (source) 21....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kcur-safety-2025"
          ],
          "mappedToIssueId": "public-schools-education"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Within the accessible material reviewed, no sustained campaign-controlled 2026 insurance messaging centered guns, immigration/border policy, marijuana policy, rural broadband, road and bridge funding, water policy, the Ogallala aquifer, energy policy, farm policy, or election administration. Sykes has public legislative material on LGBTQ+ policy, abortion/reproductive rights, public schools, taxes, health care,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-threadreader-redistricting-2022"
          ],
          "mappedToIssueId": "public-schools-education"
        }
      ]
    },
    {
      "id": "abortion-reproductive-policy",
      "title": "Abortion and Reproductive Policy",
      "stated": {
        "text": "Public coverage and candidate-attributed writing place Sykes on the side opposing abortion restrictions and supporting reproductive-rights access. This page does not infer beyond cited statements and votes.",
        "sourceIds": [
          "s-reflector-abortion-2024",
          "s-joc-post-2023"
        ]
      },
      "actions": [
        {
          "id": "act-sb63-vote",
          "date": "2025",
          "body": "Sykes's official 2025 vote record lists her voting against SB 63, described in the record as concerning an abortion-coercion crime, abortion reporting, and ultrasound-related provisions.",
          "sourceIds": [
            "s-ksleg-vote-record-2025"
          ]
        },
        {
          "id": "act-abortion-rally",
          "date": "2024-04-29",
          "body": "Kansas Reflector reported Sykes spoke at a reproductive-rights rally during abortion-related veto-override activity.",
          "sourceIds": [
            "s-reflector-abortion-2024"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-reproductive-rights-coverage",
          "platform": "Public web / news",
          "observation": "Existing local harvest maps the 2024 rally coverage and 2023 Capitol Update to reproductive-rights policy. These are public web signals, not standalone campaign social posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-reflector-abortion-2024",
            "s-joc-post-2023"
          ],
          "mappedToIssueId": "abortion-reproductive-policy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "KCUR",
          "observation": "29, 2024: Sykes spoke at a reproductive-rights rally and vowed to knock on doors to break the supermajority after abortion-related veto override activity. (source) 18. Johnson County Post, Feb. 13, 2023: Sykes's candidate-attributed Capitol Update criticized public-health limits, anti-trans bills, abortion restrictions, vouchers, Medicaid refusal, and flat-tax policy. (source) 19. KCUR, Jun.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-reflector-abortion-2024"
          ],
          "mappedToIssueId": "abortion-reproductive-policy"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Kansas Reflector",
          "observation": "On civil rights and social issues, the visible record is sharper and more confrontational. In 2024, Sykes told The Advocate that anti-trans legislation was \"filled with hate\" and said decisions about gender-affirming care involve children, families, mental-health counseling, and physicians. At an April 2024 reproductive-rights rally, Kansas Reflector quoted her vowing to knock on doors and break the Republican...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-advocate-2024"
          ],
          "mappedToIssueId": "abortion-reproductive-policy"
        }
      ]
    },
    {
      "id": "lgbtq-policy",
      "title": "LGBTQ Policy",
      "stated": {
        "text": "Sykes has publicly opposed anti-trans legislation and discussed gender-affirming care in public coverage. No marriage-specific candidate-controlled statement was found in the reviewed material.",
        "sourceIds": [
          "s-joc-post-2023",
          "s-advocate-2024"
        ]
      },
      "actions": [
        {
          "id": "act-sb76-vote",
          "date": "2025",
          "body": "Sykes's official 2025 vote record lists her voting against SB 76, described in the record as concerning eligibility for public assistance for persons engaged in a gender reassignment service.",
          "sourceIds": [
            "s-ksleg-vote-record-2025"
          ]
        },
        {
          "id": "act-advocate-interview",
          "date": "2024-04-03",
          "body": "The Advocate quoted Sykes discussing anti-trans legislation and gender-affirming care.",
          "sourceIds": [
            "s-advocate-2024"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-lgbtq-public-web",
          "platform": "Public web / interview",
          "observation": "Existing local harvest maps the 2023 Capitol Update and 2024 Advocate interview to LGBTQ policy. No native platform timeline was reliably captured for current campaign posts on this issue.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-joc-post-2023",
            "s-advocate-2024"
          ],
          "mappedToIssueId": "lgbtq-policy"
        }
      ]
    },
    {
      "id": "governance-civility-political-process",
      "title": "Governance, Civility, and Political Process",
      "stated": {
        "text": "Sykes's public record includes statements about policy-focused disagreement and votes on political-process questions such as judicial selection. Use recorded actions rather than inferred motive.",
        "sourceIds": [
          "s-kcur-safety-2025",
          "s-ksleg-vote-record-2025"
        ]
      },
      "actions": [
        {
          "id": "act-scr1611-vote",
          "date": "2025",
          "body": "Sykes's official 2025 vote record lists her voting against SCR 1611, a proposed constitutional amendment changing Kansas Supreme Court selection to elections.",
          "sourceIds": [
            "s-ksleg-vote-record-2025"
          ]
        },
        {
          "id": "act-political-safety-interview",
          "date": "2025-06-17",
          "body": "KCUR interviewed Sykes after the assassination of Minnesota Rep. Melissa Hortman; the existing harvest records her discussing safety concerns and policy-focused disagreement.",
          "sourceIds": [
            "s-kcur-safety-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-redistricting-thread-archive",
          "platform": "X / Thread Reader archive",
          "observation": "Existing local harvest found a 2022 archived @dinah_sykes thread on redistricting and fair maps. Treat as archived/indexed social evidence, not a current campaign feed.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-threadreader-redistricting-2022"
          ],
          "mappedToIssueId": "governance-civility-political-process"
        }
      ]
    },
    {
      "id": "faith-religious-liberty",
      "title": "Faith and Religious Liberty",
      "stated": {
        "text": "No current church affiliation or religious-liberty platform statement was found in the reviewed public record. A 2023 candidate-attributed opinion describes Sykes as a Christian, mother, and daughter who lost her mother to breast cancer.",
        "sourceIds": [
          "s-yahoo-opinion-2023"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-faith-self-description",
          "platform": "Candidate-attributed opinion",
          "observation": "The faith reference appears in a 2023 opinion article, not in the current insurance campaign. It should be treated as public self-description only and not used to infer policy positions or church affiliation.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-yahoo-opinion-2023"
          ],
          "mappedToIssueId": "faith-religious-liberty"
        }
      ]
    },
    {
      "id": "issue-areas-not-confirmed",
      "title": "Topics Not Confirmed in Current Campaign Material",
      "stated": {
        "text": "No current candidate-controlled insurance-campaign statement was found on guns, immigration/border policy, marijuana/drug policy, water, energy, broadband, farm policy, or election administration.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-platform-absence",
          "platform": "Campaign website and logged-out public web search",
          "observation": "The current campaign site focuses on insurance affordability and consumer protection and does not link several major platforms. Absence is recorded only as an observed public-web absence, not as evidence of a private position.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "issue-areas-not-confirmed"
        }
      ]
    }
  ],
  "recordSummary": "Kansas Senate District 21; Senate Minority Leader",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "KPDC lists Sykes as an Insurance Commissioner candidate.; Appointment of treasurer identifies Kevin Moriarty as treasurer and Main Street Credit Union as depository.; Kansas Reflector reports Sykes pledged not to take insurance-industry contributions.",
    "narrative": "Treasurer appointment confirmed; no receipts-and-expenditures report visible on KPDC statewide 2026 index at access.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Kansas State Wide Office - 2026 Election Cycle"
  },
  "sources": [
    {
      "id": "s-douglas-candidate-export",
      "tier": "primary",
      "url": "https://candidatefiling.us/Info/CFPdf?c=118926085287&e=545606222&j=2795522868&s=802933811&st=KS",
      "title": "2026 Primary Election Candidate List",
      "publisher": "Douglas County, Kansas election office export",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The export says statewide-office candidates listed have filed documents with the State of Kansas",
        "Commissioner of Insurance listing includes Sykes, Dinah, Democratic, Lenexa, filed 2026-01-08"
      ]
    },
    {
      "id": "s-kpdc-sykes-treasurer",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DS_AT.pdf",
      "title": "Dinah Sykes Appointment of Treasurer",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate name Dinah Sykes",
        "Office sought Insurance Commissioner",
        "Party Democratic",
        "Treasurer Kevin Moriarty"
      ]
    },
    {
      "id": "s-ksleg-profile",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/",
      "title": "Senator Dinah Sykes",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Sykes is a Democratic senator for District 21",
        "Sykes is Senate Minority Leader",
        "Profile lists committee assignments and sponsored-bill links",
        "Observed public online activity mapped to Working-Family Affordability, Wages, and Taxes."
      ]
    },
    {
      "id": "s-ksleg-vote-record-2025",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/members/documents/sen_sykes_dinah_1_vote_record_2025.html",
      "title": "Dinah Sykes 2025 Vote Record",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official 2025 roll-call votes for Sykes",
        "Vote record includes SB 63, SB 75, SB 76, HB 2036, HB 2045, and SCR 1611 votes"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://www.dinahsykes.com/",
      "title": "Dinah Sykes for Insurance Commissioner",
      "publisher": "Sykes for Insurance Commissioner",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign site presents Sykes as running for Kansas Insurance Commissioner",
        "Campaign frames the race around affordability, fairness, consumer protection, transparency, and accountability",
        "Campaign site links ActBlue, Facebook, Instagram, and email",
        "Campaign site lists endorsements from Sandy Praeger and Kathleen Sebelius",
        "Observed public online activity mapped to Insurance Affordability and Consumer Protection.",
        "Observed public online activity mapped to Health Care Access and Coverage."
      ]
    },
    {
      "id": "s-kansas-reflector-launch",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansas Senate minority leader challenges GOP House speaker for state insurance commissioner",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Sykes launched a campaign for Insurance Commissioner",
        "Coverage quotes Sykes saying health insurance cost in Kansas is out of control",
        "Coverage says Sykes pledged not to take insurance-industry money",
        "Coverage reports endorsements from Sandy Praeger and Kathleen Sebelius"
      ]
    },
    {
      "id": "s-kssenatedems-profile",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/dinah-sykes",
      "title": "Dinah Sykes",
      "publisher": "Kansas Senate Democrats",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile says Sykes is the first woman to serve as Kansas Senate Democratic leader",
        "Profile describes public-school funding, early childhood education, survivor protections, and health-care access work",
        "Observed public online activity mapped to Working-Family Affordability, Wages, and Taxes."
      ]
    },
    {
      "id": "s-governor-minwage",
      "tier": "primary",
      "url": "https://www.governor.ks.gov/Home/Components/News/News/537/56",
      "title": "Governor Laura Kelly, Democratic Leaders Call for Passage of Legislation to Raise Kansas Minimum Wage",
      "publisher": "Office of Kansas Governor Laura Kelly",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official joint statement with Gov. Kelly, Sykes, and Woodard backing a $15 minimum wage",
        "Sykes said Kansas workers should not make less than workers in Missouri"
      ]
    },
    {
      "id": "s-ksleg-sb216",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb216/",
      "title": "SB 216",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bill concerning paid sick time",
        "Sykes is listed among sponsors"
      ]
    },
    {
      "id": "s-ksleg-sb218",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb218/",
      "title": "SB 218",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bill concerning the Kansas minimum wage",
        "Sykes is listed among sponsors"
      ]
    },
    {
      "id": "s-ksleg-sb219",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb219/",
      "title": "SB 219",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bill concerning coverage for supplemental and diagnostic breast examinations",
        "Sykes is listed among sponsors"
      ]
    },
    {
      "id": "s-ksleg-sb217",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb217/",
      "title": "SB 217",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bill concerning exclusion of Social Security payments from Kansas adjusted gross income",
        "Sykes is listed among sponsors"
      ]
    },
    {
      "id": "s-joc-post-2023",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2023/02/13/capitol-update-sen-dinah-sykes-gop-harmful-193705/",
      "title": "Capitol Update from Sen. Dinah Sykes",
      "publisher": "Johnson County Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-attributed column criticizes public-health limits, anti-trans bills, abortion restrictions, vouchers, Medicaid refusal, and flat-tax policy"
      ]
    },
    {
      "id": "s-advocate-2024",
      "tier": "secondary",
      "url": "https://www.advocate.com/politics/kansas-lgbtq-laws",
      "title": "Kansas lawmaker speaks on anti-LGBTQ+ legislation",
      "publisher": "The Advocate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage quotes Sykes on anti-trans legislation and gender-affirming care",
        "Observed public online activity mapped to Abortion and Reproductive Policy."
      ]
    },
    {
      "id": "s-reflector-abortion-2024",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/04/29/with-veto-override-attempt-underway-kansas-abortion-rights-supporters-sound-alarm/",
      "title": "Kansas abortion-rights supporters sound alarm",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage reports Sykes remarks at reproductive-rights rally during veto-override activity",
        "Observed public online activity mapped to Abortion and Reproductive Policy."
      ]
    },
    {
      "id": "s-kcur-safety-2025",
      "tier": "secondary",
      "url": "https://www.kcur.org/podcast/up-to-date/2025-06-17/dinah-sykes-kansas-senate-democrat-hartman-assassination",
      "title": "Kansas Senate Democrat Dinah Sykes on political safety",
      "publisher": "KCUR",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Interview after Minnesota lawmaker assassination discussed safety concerns and policy-focused disagreement",
        "Observed public online activity mapped to Public Schools and Education."
      ]
    },
    {
      "id": "s-yahoo-opinion-2023",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/kansas-republicans-religion-fuel-hate-101700931.html",
      "title": "Kansas Republicans use religion to fuel hate",
      "publisher": "Yahoo / Kansas City Star opinion",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-attributed opinion describes Sykes as a Christian, mother, and daughter who lost her mother to breast cancer"
      ]
    },
    {
      "id": "s-threadreader-redistricting-2022",
      "tier": "social",
      "url": "https://threadreaderapp.com/thread/1489374594314211338.html",
      "title": "Archived @dinah_sykes thread on Ad Astra 2",
      "publisher": "Thread Reader App",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Existing local harvest captured an archived @dinah_sykes thread on redistricting and fair-map process"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://www.facebook.com/Sykes4KS/",
      "title": "Facebook / Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Health Care Access and Coverage.",
        "The campaign Facebook page metadata identified the page as \"Senator Dinah Sykes,\" with 3,401 likes and 105 talking about this. Its public description says she is Senate Democratic "
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.instagram.com/dinah_sykes/",
      "title": "Instagram / Instagram",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Health Care Access and Coverage.",
        "The campaign Instagram page metadata identified @dinah_sykes as \"Senator Dinah Sykes,\" with 1,411 followers, 86 following, and 222 posts. Its bio says: \"Kansas State Senator, Candi"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/01/15/kansas-democrats-outline-legislative-priorities/",
      "title": "Kansas Reflector / Wibw",
      "publisher": "Wibw",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Public Schools and Education.",
        "14, 2025: Democratic leaders identified minimum wage, health care access, public education, and tax relief as priorities. Sykes said Republican priorities should be tested by wheth"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(DINAH_SYKES_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[dinah-sykes.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
