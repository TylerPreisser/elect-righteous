/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JOY_EAKINS_V2: CandidateFullV2 = {
  "slug": "joy-eakins",
  "name": "Joy Eakins",
  "party": "R",
  "position": "Kansas Governor",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Governor candidate",
  "issues": [
    {
      "id": "i-education-school-choice",
      "title": "Education, School Choice, and Parent Role",
      "stated": {
        "text": "Eakins' most detailed candidate-controlled issue page centers education. Her campaign calls for robust school choice, stronger civics education, reading and math outcomes, repeal of the law requiring districts to negotiate with teachers' unions, a new school-finance formula tied to student outcomes and teacher pay, school-board training, and teacher training.",
        "sourceIds": [
          "s-campaign-education"
        ]
      },
      "actions": [
        {
          "id": "ae-education-2013-school-board-win",
          "date": "2013-04-02",
          "body": "Sedgwick County official results show Joy Leigh Eakins won USD 259 Wichita School Board District 2 with 4,654 votes to Scott B. Poor's 4,608.",
          "sourceIds": [
            "s-sedgwick-2013-results"
          ]
        },
        {
          "id": "ae-education-2022-cs-testimony",
          "date": "2022-02-01",
          "body": "Kansas Legislature minutes record Eakins testifying as a proponent of HB2466, the Promoting Advancement in Computing Knowledge bill, and summarize her argument for computer-science education.",
          "sourceIds": [
            "s-ksleg-hb2466-minutes"
          ]
        },
        {
          "id": "ae-education-2026-townhall",
          "date": "2026-04-13",
          "body": "Hays Post reported Eakins' Ellis town hall comments on a first-session education reform bill, school choice, performance-based teacher pay, teacher protections, and classroom discipline.",
          "sourceIds": [
            "s-hayspost-ellis-townhall"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-education-site-dominant",
          "platform": "Campaign website",
          "observation": "The local social harvest found education was the largest candidate-controlled issue page and the dominant accessible topic bucket.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-education-school-choice"
        },
        {
          "id": "ss-crossref-2",
          "platform": "kansascomeback.com",
          "observation": "The campaign website frames Eakins as a \"strong conservative and America First patriot\" who founded Cornerstone Data, served on the Wichita Board of Education, fought for parents' rights and fiscal responsibility, and belongs to River Community Church. It says she has been married to Eric for 31 years, has a biological son serving in the U.S. Air Force, and has a bonus son in Chicago. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-about"
          ],
          "mappedToIssueId": "i-education-school-choice"
        },
        {
          "id": "ss-crossref-4",
          "platform": "kansascomeback.com",
          "observation": "The campaign site's Education page is the largest candidate-controlled issue page in the capture. It says Kansas needs a comeback in education, lists NAEP proficiency/ranking figures, and argues parents \"know best\" and should have choices. The platform includes robust school choice, civics education, reading and math outcomes, repealing the law requiring districts to negotiate with teachers' unions, a new...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-education"
          ],
          "mappedToIssueId": "i-education-school-choice"
        }
      ],
      "gap": {
        "summary": "The campaign makes specific Wichita school-board roll-call claims, but this pass did not fully reconstruct each underlying school-board vote. Treat those as candidate-controlled claims unless minutes are separately matched.",
        "evidenceIds": [
          "ae-education-2013-school-board-win"
        ]
      }
    },
    {
      "id": "i-property-tax-local-spending",
      "title": "Property Taxes, Appraisals, and Local Spending",
      "stated": {
        "text": "Eakins proposes capping annual appraisal increases at 3 percent or inflation, whichever is less; requiring Kansas-based comparables; simplifying and regionalizing appeals; shifting appraisal burden of proof to government; reimbursing successful appeals; and creating local property-tax relief funds for families, seniors, and veterans.",
        "sourceIds": [
          "s-campaign-property-tax"
        ]
      },
      "actions": [
        {
          "id": "ae-property-2026-townhall",
          "date": "2026-04-13",
          "body": "Hays Post reported Eakins' Ellis town hall remarks on property taxes, appraisal caps, appraisal transparency, relief funds, and local-government spending.",
          "sourceIds": [
            "s-hayspost-ellis-townhall"
          ]
        },
        {
          "id": "ae-property-2026-debate",
          "date": "2026-01-30",
          "body": "The Free State News debate transcript records Eakins presenting a property-tax reform plan and arguing that rising appraisals had become a backdoor tax increase.",
          "sourceIds": [
            "s-freestate-debate-pt1"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-property-site-page",
          "platform": "Campaign website",
          "observation": "Property tax reform is one of the campaign site's named issue pages and was a repeated topic in local coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-property-tax",
            "s-hayspost-ellis-townhall"
          ],
          "mappedToIssueId": "i-property-tax-local-spending"
        },
        {
          "id": "ss-crossref-2",
          "platform": "kansascomeback.com",
          "observation": "The Property Tax Reform page says Kansas taxes are \"more like California's than our neighboring states,\" that rising appraisals are a \"backdoor tax increase,\" and proposes capping annual appraisal hikes at 3% or inflation, whichever is less. It also calls for regional assessment-dispute sessions, shifting the burden of proof to government, and property-tax relief funds seeded by local surpluses or efficiencies....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-property-tax"
          ],
          "mappedToIssueId": "i-property-tax-local-spending"
        },
        {
          "id": "ss-crossref-4",
          "platform": "X",
          "observation": "1. Campaign homepage/current metadata: official campaign site; title and description position Eakins as a conservative Kansas Comeback candidate focused on education reform, economic growth, and family values. The page's OpenGraph/Twitter metadata includes \"Joy Eakins for Kansas Governor\" and \"Conservative Leadership for a Kansas Comeback.\" (source) 2. Campaign About page: biography, professional background,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-property-tax-local-spending"
        }
      ],
      "gap": {
        "summary": "No enacted gubernatorial or legislative record exists for Eakins on property taxes; evidence is campaign plan, debate, and town-hall statements.",
        "evidenceIds": [
          "ae-property-2026-townhall"
        ]
      }
    },
    {
      "id": "i-business-economy-incentives",
      "title": "Business, Opportunity, and Economic Incentives",
      "stated": {
        "text": "Eakins' campaign biography emphasizes Cornerstone Data and an outsider/business-owner frame. Her KAKE repost connects her campaign to opportunity, young families leaving Kansas, housing, a financial cliff, school outcomes, and government getting out of the way of families and businesses.",
        "sourceIds": [
          "s-campaign-about",
          "s-campaign-kake-repost"
        ]
      },
      "actions": [
        {
          "id": "ae-business-2026-debate-incentives",
          "date": "2026-01-30",
          "body": "The Free State News debate transcript records Eakins opposing special treatment for particular businesses and criticizing government-underwritten energy/data-center deals.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-business-linkedin",
          "platform": "LinkedIn",
          "observation": "The local harvest found a Wichita-based LinkedIn profile preview with campaign/business snippets, but dates and engagement were not reliable.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-business-economy-incentives"
        },
        {
          "id": "ss-crossref-2",
          "platform": "LinkedIn",
          "observation": "LinkedIn public preview listed Joy Eakins as Wichita-based, with 1K followers and 500+ connections, and websites for joyeakins.com and the campaign site. Visible activity previews included: \"Kansas deserves a leader who never caves. I fought for Wichita kids and families on the School Board. I fought for small business owners on the...\" and \"In America, no one gets to decide your future except YOU. I overcame a...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-business-economy-incentives"
        },
        {
          "id": "ss-crossref-4",
          "platform": "KAKE",
          "observation": "Campaign News page: three media items dated June 17, June 18, and June 19, 2025. (source) 6. Campaign repost of KAKE interview: opportunity, brain drain, school outcomes, school choice, financial cliff, affordable/appropriate housing, outsider pitch, and \"government to get out of their way\" line. (source) 7. Campaign repost of Pete Mundo appearance: launch and Kansas Comeback radio interview reference. (source) 8.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-business-economy-incentives"
        }
      ],
      "gap": {
        "summary": "No detailed candidate-controlled economic-development issue page beyond the KAKE repost and property-tax/education pages was found.",
        "evidenceIds": [
          "ae-business-2026-debate-incentives"
        ]
      }
    },
    {
      "id": "i-healthcare-medicaid-rural-hospitals",
      "title": "Healthcare, Medicaid, and Rural Hospitals",
      "stated": {
        "text": "Hays Post reported that, when asked about rural hospitals, Eakins said Medicaid expansion was not currently viable and pointed instead to Medicaid reimbursement rates, which she said had not been updated in 15 to 20 years. KCUR also reported medical-decision language tied to COVID-era public-health decisions.",
        "sourceIds": [
          "s-hayspost-ellis-townhall",
          "s-kcur-guide"
        ]
      },
      "actions": [
        {
          "id": "ae-healthcare-2026-townhall",
          "date": "2026-04-13",
          "body": "At the Ellis town hall, Hays Post reported Eakins' rural hospital answer and her focus on Medicaid reimbursement rates rather than Medicaid expansion.",
          "sourceIds": [
            "s-hayspost-ellis-townhall"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "KCUR",
          "observation": "13, 2026 town hall article: Ellis event focused on education reform and property tax relief; Eakins said, \"Kansas should be the best place to live the American dream.\" (source) 17. Kansas News Service/KCUR July 24, 2025 candidate guide: summarizes her Wichita school board service, Cornerstone Data role, tax/regulation/budget cuts, and medical-freedom language. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-ellis-townhall"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-rural-hospitals"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Across the accessible reviewed set, no candidate-controlled item centered water policy, the Ogallala Aquifer, Medicaid expansion, rural hospitals, child care, foster care, broadband, roads/bridges, public safety beyond ICE/law-enforcement remarks, gun policy, or LGBTQ+ policy. Abortion, marijuana, judicial selection, immigration/ICE, and energy were visible mainly through debate coverage/transcripts rather than...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-rural-hospitals"
        },
        {
          "id": "ss-crossref-5",
          "platform": "kansascomeback.com",
          "observation": "Her education argument repeatedly uses her Wichita school-board record and her data-business identity. The campaign says she advanced parents' rights, advocated for school choice, opposed suing the state for more money, opposed longer school days that she said prioritized janitors over kids, and used her data analytics firm to show Kansas could return children to classrooms safely during COVID. (source) In the...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-education"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-rural-hospitals"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled healthcare issue page was found. The rural-hospital/Medicaid evidence comes from local reporting of a town-hall answer.",
        "evidenceIds": [
          "ae-healthcare-2026-townhall"
        ]
      }
    },
    {
      "id": "i-abortion-sanctity-life",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "The Free State News debate transcript records Eakins answering an abortion question by saying she was passionate about the issue and connecting it to her own biography. Kansas Reflector reported Republican debate consensus on reducing abortions.",
        "sourceIds": [
          "s-freestate-debate-pt2",
          "s-kansas-reflector-debate"
        ]
      },
      "actions": [
        {
          "id": "ae-abortion-2026-debate",
          "date": "2026-01-30",
          "body": "Eakins gave a direct debate answer opposing abortion in the Free State News unofficial transcript.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "19, 2026 campaign-finance article: Eakins' $1 million self-loan and \"golden age\" frame under President Donald Trump. (source) 12. Kansas Reflector Jan. 30, 2026 debate article: GOP debate coverage; Eakins says established politicians \"have been stewarding our decline\"; candidates aligned on abortion, marijuana opposition, Supreme Court elections, and Trump praise. (source) 13.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-abortion-sanctity-life"
        },
        {
          "id": "ss-crossref-3",
          "platform": "LinkedIn",
          "observation": "Eakins' biography and faith language are part of the public pitch but less frequent than education and taxes. Her About page says she has been married to Eric for 31 years, has a son serving in the U.S. Air Force, has a bonus son in Chicago, is a devout Christian, and is a faithful member of River Community Church. (source) LinkedIn preview shows a shared post beginning, \"I overcame a difficult upbringing through...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-about"
          ],
          "mappedToIssueId": "i-abortion-sanctity-life"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "The visible absences are important. Across the accessible reviewed set, no candidate-controlled item centered water policy, the Ogallala Aquifer, Medicaid expansion, rural hospitals, child care, foster care, broadband, roads and bridges, gun policy, or LGBTQ+ policy. Abortion, marijuana, judicial selection, immigration/ICE, and energy appeared in debate coverage and transcripts rather than as standalone campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-life"
        }
      ],
      "gap": {
        "summary": "No standalone candidate-controlled abortion issue page was found in the accessible campaign site.",
        "evidenceIds": [
          "ae-abortion-2026-debate"
        ]
      }
    },
    {
      "id": "i-marijuana-drug-policy",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "The Free State News debate transcript records Eakins saying she would not support marijuana legalization and arguing that legalization creates service costs and cultural problems.",
        "sourceIds": [
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-marijuana-2026-debate",
          "date": "2026-01-30",
          "body": "Eakins opposed marijuana legalization in the GOP governor debate transcript.",
          "sourceIds": [
            "s-freestate-debate-pt2",
            "s-kansas-reflector-debate"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No standalone candidate-controlled marijuana or broader drug-policy page was found.",
        "evidenceIds": [
          "ae-marijuana-2026-debate"
        ]
      }
    },
    {
      "id": "i-judicial-selection",
      "title": "Judicial Selection",
      "stated": {
        "text": "The Free State News debate transcript records Eakins supporting the 2026 constitutional amendment to move Kansas Supreme Court justice selection away from the current system and toward elections.",
        "sourceIds": [
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-judicial-2026-debate",
          "date": "2026-01-30",
          "body": "Eakins supported changing Kansas Supreme Court selection to elections in the GOP governor debate transcript.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No candidate-controlled courts or judicial-selection issue page was found.",
        "evidenceIds": [
          "ae-judicial-2026-debate"
        ]
      }
    },
    {
      "id": "i-immigration-law-enforcement",
      "title": "Immigration and Law Enforcement Cooperation",
      "stated": {
        "text": "The Free State News debate transcript records Eakins praising border closure, referring to trafficking of women and children, and saying Kansas should work with federal enforcement rather than against it.",
        "sourceIds": [
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-immigration-2026-debate",
          "date": "2026-01-30",
          "body": "Eakins answered an immigration-enforcement question at the GOP governor debate.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No standalone candidate-controlled immigration or public-safety issue page was found.",
        "evidenceIds": [
          "ae-immigration-2026-debate"
        ]
      }
    },
    {
      "id": "i-energy-data-centers-agriculture",
      "title": "Energy, Data Centers, and Agricultural Land",
      "stated": {
        "text": "The Free State News debate transcript records Eakins saying innovation and entrepreneurship should be responsible, that rural communities have concerns about wind and solar projects, and that government should not underwrite data centers or special energy deals.",
        "sourceIds": [
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-energy-2026-debate",
          "date": "2026-01-30",
          "body": "Eakins discussed wind, solar, agricultural land, cut-rate energy deals, data centers, water, electricity, and business self-support in the debate transcript.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No candidate-controlled energy, water, or agriculture issue page was found.",
        "evidenceIds": [
          "ae-energy-2026-debate"
        ]
      }
    },
    {
      "id": "i-faith-family-biography",
      "title": "Faith, Family, and Biography",
      "stated": {
        "text": "The campaign About page says Eakins has been married to Eric for 31 years, has a son serving in the U.S. Air Force and a bonus son in Chicago, is a devout Christian, and is a faithful member of River Community Church. This is biography evidence, not a policy inference.",
        "sourceIds": [
          "s-campaign-about"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-faith-personal-x-linkedin",
          "platform": "Public profile metadata",
          "observation": "The local harvest found a personal X snippet with faith/family/business descriptors and a LinkedIn preview with biography/campaign snippets; neither should be used to infer policy.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-faith-family-biography"
        }
      ],
      "gap": {
        "summary": "River Community Church affiliation is candidate-controlled biography. Denomination and current attendance details were not independently verified.",
        "evidenceIds": [
          "ss-faith-personal-x-linkedin"
        ]
      }
    }
  ],
  "whereTheyWorship": "Eakins' campaign biography says she is a faithful member of River Community Church. The church website is https://www.rivercc.org/, and that is the clearest public church tie in the available record.",
  "campaignFinance": {
    "totalRaised": "$1,142,759.55",
    "narrative": "The report is dominated by candidate self-funding: Schedule A shows a $1,000,000 loan from Joy Eakins dated 2025-12-29 and a $60,000 check from Joy Eakins dated 2025-07-01. Visible itemized individual examples include Ryan Baty, Kim & Tim Borchers, Fred Berry, Walter and Polly Berry, and multiple smaller donors; use names carefully because KPDC carries a statutory noncommercial-use warning.",
    "donors": [],
    "reportingPeriod": "2025-01-01 to 2025-12-31",
    "source": "Joy Eakins Campaign Finance Receipts and Expenditures Report - January 2026"
  },
  "sources": [
    {
      "id": "s-campaign-about",
      "tier": "primary",
      "url": "https://www.kansascomeback.com/about",
      "title": "About Joy Eakins",
      "publisher": "Joy Eakins for Kansas Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign describes Eakins as a strong conservative and America First patriot.",
        "Campaign says Eakins built Cornerstone Data, Inc.",
        "Campaign says she served on the Wichita Board of Education.",
        "Campaign says she is married to Eric, has two sons, and is a faithful member of River Community Church.",
        "Observed public online activity mapped to Education, School Choice, and Parent Role.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-campaign-education",
      "tier": "primary",
      "url": "https://www.kansascomeback.com/education",
      "title": "Joy Eakins' Education Platform",
      "publisher": "Joy Eakins for Kansas Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign calls for robust school choice legislation.",
        "Campaign calls for civics education and reading/math outcomes.",
        "Campaign calls for repealing mandatory negotiation with teachers' unions.",
        "Campaign calls for a new school-finance formula tied to student outcomes and teacher pay.",
        "Campaign says Eakins used her data analytics firm to argue schools could reopen safely during COVID.",
        "Campaign makes school-board record claims that need separate roll-call verification.",
        "Observed public online activity mapped to Education, School Choice, and Parent Role.",
        "Observed public online activity mapped to Healthcare, Medicaid, and Rural Hospitals."
      ]
    },
    {
      "id": "s-campaign-property-tax",
      "tier": "primary",
      "url": "https://www.kansascomeback.com/propertytaxreform",
      "title": "Joy Eakins' Property Tax Reform Plan",
      "publisher": "Joy Eakins for Kansas Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign proposes capping annual appraisal hikes at 3 percent or inflation, whichever is less.",
        "Campaign proposes in-state comparable properties, regional assessment-dispute sessions, and burden of proof on government.",
        "Campaign proposes property-tax relief funds for families, seniors, and veterans.",
        "Observed public online activity mapped to Property Taxes, Appraisals, and Local Spending."
      ]
    },
    {
      "id": "s-campaign-kake-repost",
      "tier": "primary",
      "url": "https://www.kansascomeback.com/news/joy-eakins-discusses-her-run-for-the-governors-office",
      "title": "Joy Eakins discusses her run for the governor's office",
      "publisher": "Joy Eakins for Kansas Governor / KAKE repost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Eakins said Kansas needs a comeback.",
        "Eakins discussed young people leaving Kansas because of opportunity concerns.",
        "Eakins discussed education spending, worsening outcomes, and school choice options.",
        "Eakins said Kansans want government to get out of the way of businesses and families."
      ]
    },
    {
      "id": "s-sedgwick-2013-results",
      "tier": "primary",
      "url": "https://www.sedgwickcounty.org/elections/election-results/2013-general/?altTemplate=race&race=161",
      "title": "School Board Member District 2 USD 259-Wichita - April 2, 2013 General Election",
      "publisher": "Sedgwick County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Results are official.",
        "Joy Leigh Eakins received 4,654 votes, 49.9 percent.",
        "Scott B. Poor received 4,608 votes, 49.4 percent.",
        "Eakins won by 46 votes."
      ]
    },
    {
      "id": "s-ksleg-hb2466-minutes",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2021_22/measures/minutes/agenda_item_2022012646029990241",
      "title": "Minutes for HB2466 - House Committee on Education",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Joy Eakins testified as a proponent of HB2466.",
        "Minutes identify Eakins as a small business owner who served on the Wichita school board and Kansas State Department of Education CS task force.",
        "Minutes summarize Eakins' support for computer-science education expansion."
      ]
    },
    {
      "id": "s-hayspost-ellis-townhall",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2c52043f-2180-461b-9a64-4fd75c91236f",
      "title": "Gubernatorial candidate Joy Eakins seeks to cap appraisal increases",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Eakins hosted an Ellis town hall focused on property-tax relief and education reform.",
        "Eakins discussed capping appraisals at 3 percent or inflation, whichever is lower.",
        "Eakins discussed education reform, school choice, performance-based teacher pay, and teacher protections.",
        "Eakins said Medicaid expansion was not currently viable and pointed to Medicaid reimbursement rates.",
        "Observed public online activity mapped to Healthcare, Medicaid, and Rural Hospitals."
      ]
    },
    {
      "id": "s-freestate-debate-pt1",
      "tier": "secondary",
      "url": "https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/",
      "title": "Transcript of the GOP Governor's Debate January 30, 2026. Part 1",
      "publisher": "Free State News",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Unofficial cleaned transcript of January 30, 2026 GOP governor debate.",
        "Eakins discussed Kansas Comeback, education, property taxes, business, and appraisals."
      ]
    },
    {
      "id": "s-freestate-debate-pt2",
      "tier": "secondary",
      "url": "https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/",
      "title": "GOP Governors Debate Transcript Part 2",
      "publisher": "Free State News",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Unofficial cleaned transcript records Eakins on judicial selection, education, marijuana, abortion, immigration, energy, and data centers."
      ]
    },
    {
      "id": "s-kcur-guide",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Who's running for Kansas governor in 2026?",
      "publisher": "KCUR / Kansas News Service",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KCUR describes Eakins as a Wichita Republican who served on the Wichita School Board from 2013 to 2018.",
        "KCUR describes Eakins as founder and President of Cornerstone Data.",
        "KCUR reports platform language on taxes, regulations, state budgets, and medical decisions."
      ]
    },
    {
      "id": "s-kansas-reflector-debate",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Six Kansas GOP candidates for governor toss haymakers in first debate, find unity on key issues",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas Reflector reported Republican debate consensus on abortion, marijuana opposition, Supreme Court elections, and Trump praise."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com/",
      "title": "X / Kansascomeback",
      "publisher": "Kansascomeback",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Property Taxes, Appraisals, and Local Spending.",
        "1. Campaign homepage/current metadata: official campaign site; title and description position Eakins as a conservative Kansas Comeback candidate focused on education reform, econom"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.linkedin.com/in/joyeakins/",
      "title": "LinkedIn / Linkedin",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Business, Opportunity, and Economic Incentives.",
        "LinkedIn public preview listed Joy Eakins as Wichita-based, with 1K followers and 500+ connections, and websites for joyeakins.com and the campaign site. Visible activity previews "
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com/news",
      "title": "KAKE / Kansascomeback",
      "publisher": "Kansascomeback",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Business, Opportunity, and Economic Incentives.",
        "Campaign News page: three media items dated June 17, June 18, and June 19, 2025. (source) 6. Campaign repost of KAKE interview: opportunity, brain drain, school outcomes, school ch"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "19, 2026 campaign-finance article: Eakins' $1 million self-loan and \"golden age\" frame under President Donald Trump. (source) 12. Kansas Reflector Jan. 30, 2026 debate article: GOP"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JOY_EAKINS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[joy-eakins.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
