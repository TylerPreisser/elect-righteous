/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const PHILIP_SARNECKI_V2: CandidateFullV2 = {
  "slug": "philip-sarnecki",
  "name": "Philip Sarnecki",
  "party": "R",
  "position": "Kansas Governor",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Businessman",
  "campaignWebsite": "https://philipsarnecki.org/",
  "issues": [
    {
      "id": "i-taxes-property-economy",
      "title": "Taxes, Property Taxes, Economy, and Red Tape",
      "stated": {
        "text": "Sarnecki's campaign makes taxes, property taxes, business growth, jobs, opportunity, accountability, and red-tape reduction central themes. The homepage says Kansas has the highest taxes in the region, out-of-control property taxes, a high corporate tax rate compared with border states, and young Kansans leaving for opportunity; the plan says he would create jobs, lower taxes, bring business-style accountability, and cut red tape for small businesses.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-property-special-session-2026",
          "date": "2026-05-12",
          "body": "HPPR/Kansas Reflector reported Sarnecki was among GOP candidates urging Gov. Laura Kelly to call a special legislative session on property taxes.",
          "sourceIds": [
            "s-hppr-property-special-session"
          ]
        },
        {
          "id": "ae-economy-debate-2026",
          "date": "2026-01-30",
          "body": "The Free State News unofficial debate transcript records Sarnecki arguing Kansas needed more prosperity, job creation, business recruitment, lower taxes, and less regulation.",
          "sourceIds": [
            "s-freestate-debate-pt1"
          ]
        },
        {
          "id": "ae-finance-self-loan-2025",
          "date": "2025-12-31",
          "body": "KPDC Schedule A shows a $2,000,000 loan from Philip Sarnecki to his campaign, making self-funding the dominant finance fact in the 2025 year-end report.",
          "sourceIds": [
            "s-kpdc-jan2026-report"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-economy-topic-share",
          "platform": "Public web / X mirror",
          "observation": "The local social harvest found taxes, property taxes, economy, jobs, cost of living, government spending, red tape, regulation, and housing/opportunity were the largest visible topic bucket: 11 of 34 accessible items, or 32 percent.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-taxes-property-economy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "philipsarnecki.org",
          "observation": "The official campaign site is Sarnecki's central candidate-controlled channel. It frames him as a \"Kansas Dad,\" husband, businessman, job creator, Christian, and political outsider. The site says Kansas is suffering from high taxes, out-of-control property taxes, \"radical hiring policies instead of merit,\" education elites replacing parents, young Kansans leaving for opportunity, and Republican losses under a...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-taxes-property-economy"
        },
        {
          "id": "ss-crossref-4",
          "platform": "X",
          "observation": "The visible X sample is sharply message-disciplined. The dominant posts attack \"career politicians,\" high taxes, property taxes, government spending, Kansas's economy, red tape, Republican leadership, Democratic Gov. Laura Kelly, SNAP data, immigration enforcement, education \"indoctrination,\" Charlie Kirk / Trump role-model controversy, and congressional redistricting. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-taxes-property-economy"
        }
      ],
      "gap": {
        "summary": "No gubernatorial or legislative officeholder record exists for Sarnecki on taxes; evidence is campaign plan, public campaign action, debate statements, and social/mirror captures.",
        "evidenceIds": [
          "ae-property-special-session-2026"
        ]
      }
    },
    {
      "id": "i-education-parental-rights",
      "title": "Education, School Choice, and Parental Rights",
      "stated": {
        "text": "The campaign homepage says Sarnecki would restore parental rights and end woke policies, and it says education elites are trying to replace parents. The Free State News unofficial debate transcript records him supporting school choice, saying funding should follow families and children, and criticizing DEI and gender-identity content in schools.",
        "sourceIds": [
          "s-campaign-home",
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-education-debate-2026",
          "date": "2026-01-30",
          "body": "Sarnecki answered an education question in the GOP governor debate transcript, including school-choice and parental-rights language.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-education-x-posts",
          "platform": "X mirror",
          "observation": "The local harvest captured X mirror samples in which Sarnecki criticized classrooms for pushing agendas instead of basics and described a Charlie Kirk / Trump school role-model controversy as indoctrination.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-education-parental-rights"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "The public X mirror identifies @Philip_Sarnecki as \"CEO; Business Owner; Board Member; Movie Producer; 2026 Republican Candidate for Governor of Kansas,\" linked to the campaign site, located in Kansas, and joined in June 2025. It displayed about 85 tweets and 3K followers. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-education-parental-rights"
        },
        {
          "id": "ss-crossref-4",
          "platform": "X",
          "observation": "1. Campaign homepage, captured 2026-05-11. The homepage says \"Let's turn Kansas around together,\" \"It's our time to win,\" and \"Kansas Dad - Husband - Businessman,\" then contrasts a \"radical Democrat governor\" with \"Philip's Plan.\" (source) 2. Campaign homepage issue list, captured 2026-05-11. The site lists highest regional taxes, second-highest corporate tax rate among border states, property taxes, DEI-style...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-education-parental-rights"
        }
      ],
      "gap": {
        "summary": "No standalone candidate-controlled education issue page or detailed school-finance plan was found.",
        "evidenceIds": [
          "ae-education-debate-2026"
        ]
      }
    },
    {
      "id": "i-abortion-sanctity-life",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "The Free State News unofficial debate transcript records Sarnecki saying abortion was his number one issue and that he would be the most pro-life governor in Kansas history. Kansas Informer debate coverage also reported Sarnecki's religious framing and anti-abortion statement.",
        "sourceIds": [
          "s-freestate-debate-pt2",
          "s-kansas-informer-debate"
        ]
      },
      "actions": [
        {
          "id": "ae-abortion-debate-2026",
          "date": "2026-01-30",
          "body": "Sarnecki gave a direct anti-abortion answer in the GOP governor debate transcript.",
          "sourceIds": [
            "s-freestate-debate-pt2",
            "s-kansas-informer-debate"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-abortion-x-prolife",
          "platform": "X mirror",
          "observation": "The local harvest captured a visible X post in which Sarnecki said he is pro-life and tied that statement to God creating every person in His image.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-abortion-sanctity-life"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "Visible mirror metrics for the reposted item: 1, 8, 7, 347 views, 0. (source) 25. X sample: SNAP cover-up / Trump. Sarnecki alleged an active cover-up, demanded release of SNAP data, and said Kansas needed a governor supporting President Trump. Visible mirror metrics: 61, about 1K, about 4K, about 143K views, 108. (source) 26. X sample: pro-life Christmas message. Sarnecki said he is pro-life because life is...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-life"
        },
        {
          "id": "ss-crossref-4",
          "platform": "X",
          "observation": "Faith and family are part of Sarnecki's public identity. The campaign biography says he is guided by faith in God and committed to conservative values including faith, family, hard work, and accountability. (source) Real Media KC's interview page says he is guided by Christian faith and conservative values and presents his business story alongside family, 513 Films, Athletes in Action, and blue-collar roots....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-about"
          ],
          "mappedToIssueId": "i-abortion-sanctity-life"
        }
      ],
      "gap": {
        "summary": "No standalone candidate-controlled abortion issue page was found on the campaign site.",
        "evidenceIds": [
          "ae-abortion-debate-2026"
        ]
      }
    },
    {
      "id": "i-immigration-public-safety",
      "title": "Immigration, Public Safety, and Federal Enforcement",
      "stated": {
        "text": "Kansas Press Association / Kansas Reflector launch coverage reported Sarnecki criticizing Democratic leaders for failing to distinguish illegal immigration from legal immigration and criminals from crime victims. The Free State News unofficial debate transcript records Sarnecki praising President Trump's border approach, calling for cooperation with ICE, and opposing state benefits for people in the country illegally.",
        "sourceIds": [
          "s-kspress-launch",
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-immigration-debate-2026",
          "date": "2026-01-30",
          "body": "Sarnecki answered an immigration-enforcement question at the GOP governor debate.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        },
        {
          "id": "ae-immigration-launch-2025",
          "date": "2025-09-02",
          "body": "Launch coverage reported Sarnecki's immigration and crime language as part of his campaign announcement.",
          "sourceIds": [
            "s-kspress-launch"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-immigration-x-ice",
          "platform": "X mirror",
          "observation": "The local harvest captured an X mirror sample in which Sarnecki cited a sentence for attacking an ICE officer in Wichita and said Kansas needed a governor who would work with the administration to deport violent illegal immigrants.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-immigration-public-safety"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "Visible mirror metrics: 20, 7, 66, about 2K views, 0. (source) 22. X sample: ICE assault / deportation. Sarnecki cited an illegal immigrant's 20-year sentence for attacking an ICE officer in Wichita and said Kansas needed a governor who would work with the administration to deport violent illegal immigrants.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-immigration-public-safety"
        },
        {
          "id": "ss-crossref-4",
          "platform": "X",
          "observation": "Visible mirror metrics: 4, 8, 24, 866 views, 0. (source) 28. Indexed X sample: property taxes, 2026-03-11. WLT Report / 100PercentFedUp embedded Sarnecki's X post saying property taxes are out of control in Kansas, seniors are being forced out of homes, and working families are squeezed. (source) 29. Indexed X sample: Virginia redistricting / Kansas opportunity, 2026-03-13. WLT Report embedded Sarnecki's post...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-immigration-public-safety"
        }
      ],
      "gap": {
        "summary": "No standalone candidate-controlled immigration or public-safety issue page was found.",
        "evidenceIds": [
          "ae-immigration-debate-2026"
        ]
      }
    },
    {
      "id": "i-marijuana-drug-policy",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "The Free State News unofficial debate transcript records Sarnecki saying he was against legalizing marijuana, citing health and mental-health concerns and saying he did not want Kansas to become like Colorado.",
        "sourceIds": [
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-marijuana-debate-2026",
          "date": "2026-01-30",
          "body": "Sarnecki opposed marijuana legalization in the GOP governor debate transcript.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Several issue areas were not visible in the accessible material reviewed. The public set did not include captured items centered on Medicaid expansion, rural hospital closures, hospital finance, child care, foster care, veterans services, broadband deployment, water policy, the Ogallala aquifer, affordable rental housing details, state employee pay, disability services, transportation infrastructure, or...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "This pass used existing local research first: raw-dump.md, social-harvest.md, site-profile.md, in-their-own-words.md, and ui/src/data/v2/philip-sarnecki.ts. Targeted current verification then checked Kansas Secretary of State election pages, Kansas Public Disclosure Commission filings, candidate-controlled campaign pages, public debate/transcript coverage, and selected reporting. Social and online observations...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy"
        },
        {
          "id": "ss-crossref-5",
          "platform": "freestatenews.net",
          "observation": "The Free State News debate transcript records Sarnecki saying he was against legalization of marijuana because drug use creates health and mental-health problems, and because he did not want Kansas to become like Colorado. Source: https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy"
        }
      ],
      "gap": {
        "summary": "No standalone candidate-controlled marijuana or broader drug-policy issue page was found.",
        "evidenceIds": [
          "ae-marijuana-debate-2026"
        ]
      }
    },
    {
      "id": "i-judicial-selection",
      "title": "Judicial Selection",
      "stated": {
        "text": "The Free State News unofficial debate transcript records Sarnecki supporting the 2026 constitutional amendment to move Kansas Supreme Court justice selection toward elections.",
        "sourceIds": [
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-judicial-debate-2026",
          "date": "2026-01-30",
          "body": "Sarnecki supported changing Kansas Supreme Court selection to elections in the GOP governor debate transcript.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "The reviewed public set also shows a campaign trying to look financially and organizationally serious. The campaign site asks for donations, volunteers, email signups, SMS opt-ins, and specific volunteer roles including door knocking, phone banking, sign waving, events, election integrity, and digital outreach. (source) In the X sample, Sarnecki claimed contributions supporting him reached $3 million and said he...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-volunteer"
          ],
          "mappedToIssueId": "i-judicial-selection"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled courts or judicial-selection issue page was found.",
        "evidenceIds": [
          "ae-judicial-debate-2026"
        ]
      }
    },
    {
      "id": "i-snap-welfare-federal-cooperation",
      "title": "SNAP, Welfare Fraud, and State/Federal Cooperation",
      "stated": {
        "text": "The local social harvest captured X mirror posts tying Kansas SNAP data to Minnesota fraud allegations and saying Sarnecki would release data to President Trump and cut waste, fraud, and abuse. The Free State News unofficial debate transcript also records Sarnecki saying states should cooperate with federal requests for records in the context of benefits and people in the country illegally.",
        "sourceIds": [
          "s-freestate-debate-pt1"
        ]
      },
      "actions": [
        {
          "id": "ae-federal-cooperation-debate-2026",
          "date": "2026-01-30",
          "body": "Sarnecki answered a debate question on state cooperation with federal requests and benefit records.",
          "sourceIds": [
            "s-freestate-debate-pt1"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-snap-x-posts",
          "platform": "X mirror",
          "observation": "The local harvest captured X mirror samples about Minnesota fraud allegations, Kansas SNAP data, releasing data to President Trump, and cutting waste, fraud, and abuse.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-snap-welfare-federal-cooperation"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled welfare/SNAP issue page or official audit record was found; evidence is debate and social/mirror messaging.",
        "evidenceIds": [
          "ae-federal-cooperation-debate-2026"
        ]
      }
    },
    {
      "id": "i-energy-data-centers",
      "title": "Energy, Data Centers, and Economic Development",
      "stated": {
        "text": "The Free State News unofficial debate transcript records Sarnecki saying the state should not rush to promote data centers in a way that creates special deals and should be mindful of water usage and energy costs for citizens.",
        "sourceIds": [
          "s-freestate-debate-pt2"
        ]
      },
      "actions": [
        {
          "id": "ae-energy-data-centers-debate-2026",
          "date": "2026-01-30",
          "body": "Sarnecki discussed data centers, water usage, energy costs, and special economic-development deals in the debate transcript.",
          "sourceIds": [
            "s-freestate-debate-pt2"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No candidate-controlled energy, water, agriculture, or data-center issue page was found.",
        "evidenceIds": [
          "ae-energy-data-centers-debate-2026"
        ]
      }
    },
    {
      "id": "i-faith-family-biography",
      "title": "Faith, Family, and Biography",
      "stated": {
        "text": "The campaign About page says Sarnecki is guided by faith in God and committed to conservative values including faith, family, hard work, and accountability. It identifies his wife Heidi, three children, Bucyrus residence, Franklin County farm, RPS Financial Group, 513 Films, Athletes in Action, Finseca, and youth baseball coaching.",
        "sourceIds": [
          "s-campaign-about"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-faith-family-campaign-identity",
          "platform": "Campaign website / public profiles",
          "observation": "The local harvest found the campaign site and public profiles present Sarnecki as a Kansas dad, husband, businessman, Christian, and political outsider. This is biography evidence, not a policy inference.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-faith-family-biography"
        }
      ],
      "gap": {
        "summary": "No current church affiliation or church website was identified in reviewed public sources.",
        "evidenceIds": [
          "ss-faith-family-campaign-identity"
        ]
      }
    },
    {
      "id": "i-campaign-infrastructure-election-integrity",
      "title": "Campaign Infrastructure and Election Integrity",
      "stated": {
        "text": "The campaign volunteer page lists election integrity as one volunteer option alongside door knocking, phone banking, sign waving, events, and digital outreach. This is campaign infrastructure evidence only and does not provide a detailed election-policy agenda.",
        "sourceIds": [
          "s-campaign-volunteer"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whereTheyWorship": "Public materials identify Sarnecki as Christian, but public sources do not name a current church affiliation or church website. His campaign is faith-forward, but the available record stops short of tying him to a specific congregation.",
  "campaignFinance": {
    "totalRaised": "$2,528,715.73",
    "narrative": "The report is dominated by candidate self-funding: Schedule A shows a $2,000,000 loan from Philip Sarnecki dated 2025-12-31. Schedule B lists $215,543.04 in in-kind contributions, with many entries from Sarnecki for staff salary and travel expenses. Visible itemized examples include Jaci Hakes, Creighton Hardy, Zack Henderson, Tomlinson Daniel LLC, Scott Gulledge, Kathleen Gulledge, Amy Miller, David Browne, John Goodwin, Eric Haymes, Ronda Anderson, Jim Burt, Eben Fowler, and Lenin Guerra; use names carefully because KPDC carries a statutory noncommercial-use warning.",
    "donors": [],
    "reportingPeriod": "2025-01-01 to 2025-12-31",
    "source": "Philip Sarnecki Campaign Finance Receipts and Expenditures Report - January 2026"
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
        "Candidates for state office file with the Secretary of State.",
        "A candidate is not considered filed until the petition or declaration and fee is received.",
        "Primary election candidate filing deadline is 12:00 p.m. Monday, June 1, 2026.",
        "Governor/Lt. Governor is listed among offices to be elected or retained in 2026."
      ]
    },
    {
      "id": "s-kpdc-jan2026-report",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01PS_202601.pdf",
      "title": "Philip Sarnecki Campaign Finance Receipts and Expenditures Report - January 2026",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Report covers 2025-01-01 through 2025-12-31.",
        "Total contributions and other receipts were $2,528,715.73.",
        "Total expenditures and other disbursements were $209,667.81.",
        "Cash on hand at close was $2,319,047.92.",
        "In-kind contributions were $215,543.04.",
        "Other transactions were $0.00.",
        "Schedule A shows a $2,000,000 loan from Philip Sarnecki dated 2025-12-31."
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://philipsarnecki.org/",
      "title": "Philip Sarnecki for Kansas Governor",
      "publisher": "Philip Sarnecki for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign site identifies Sarnecki as Kansas Dad, husband, and businessman.",
        "Campaign site says Kansas faces high regional taxes, out-of-control property taxes, high corporate taxes, radical hiring policies, parental displacement in education, young Kansans leaving, and repeated Republican governor losses.",
        "Campaign plan says Sarnecki would stand with President Trump, create jobs, lower taxes, restore parental rights, end woke policies, bring business-style accountability, and cut red tape.",
        "Observed public online activity mapped to Taxes, Property Taxes, Economy, and Red Tape.",
        "Observed public online activity mapped to Education, School Choice, and Parental Rights."
      ]
    },
    {
      "id": "s-campaign-about",
      "tier": "primary",
      "url": "https://philipsarnecki.org/about/",
      "title": "About Philip Sarnecki",
      "publisher": "Philip Sarnecki for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign biography says Sarnecki founded RPS Financial Group and built or invested in multiple businesses.",
        "Campaign biography lists 513 Films, Athletes in Action board service, Finseca board service, youth baseball coaching, wife Heidi, three children, Bucyrus residence, and a Franklin County farm.",
        "Campaign biography says Sarnecki is guided by faith in God and committed to conservative values including faith, family, hard work, and accountability.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-campaign-volunteer",
      "tier": "primary",
      "url": "https://philipsarnecki.org/volunteer/",
      "title": "Volunteer",
      "publisher": "Philip Sarnecki for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Volunteer page lists doors, phone banking, sign waving, events, election integrity, and digital outreach.",
        "Observed public online activity mapped to Judicial Selection."
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
        "Unofficial cleaned transcript records Sarnecki on Kansas losing people, jobs, prosperity, business recruitment, taxes, regulation, property taxes, and state/federal cooperation."
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
        "Unofficial cleaned transcript records Sarnecki on judicial selection, education, marijuana, abortion, immigration, energy, and data centers."
      ]
    },
    {
      "id": "s-kansas-informer-debate",
      "tier": "secondary",
      "url": "https://kaninfo.com/news/gop-governor-candidates-spar-on-unity-careerism-star-bonds-in-first-big-pitch-for-states-highest-office/",
      "title": "GOP governor candidates spar on unity, careerism, STAR bonds in first big pitch for state's highest office",
      "publisher": "Kansas Informer",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Debate coverage describes Sarnecki's career-politician contrast and debate remarks.",
        "Coverage reports Sarnecki's abortion answer and religious framing."
      ]
    },
    {
      "id": "s-hppr-property-special-session",
      "tier": "secondary",
      "url": "https://www.hppr.org/hppr-news/2026-05-12/kansas-contemplates-special-legislative-session-to-rekindle-debate-on-property-taxes",
      "title": "Kansas contemplates special legislative session to rekindle debate on property taxes",
      "publisher": "HPPR / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage reports Sarnecki among GOP candidates urging Gov. Laura Kelly to call a property-tax special session."
      ]
    },
    {
      "id": "s-kspress-launch",
      "tier": "secondary",
      "url": "https://kspress.com/news/2025/09/02/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor",
      "title": "Johnson County businessman launches campaign to win GOP nomination for governor",
      "publisher": "Kansas Press Association / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage describes Sarnecki as a Johnson County businessman from Bucyrus.",
        "Coverage reports Sarnecki joined a field dominated by career politicians.",
        "Coverage reports Sarnecki's immigration and crime language from launch."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki",
      "title": "X / Ngntipkolamrenang.Twstalker",
      "publisher": "Ngntipkolamrenang.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes, Property Taxes, Economy, and Red Tape.",
        "The visible X sample is sharply message-disciplined. The dominant posts attack \"career politicians,\" high taxes, property taxes, government spending, Kansas's economy, red tape, Re",
        "Observed public online activity mapped to Education, School Choice, and Parental Rights.",
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Observed public online activity mapped to Immigration, Public Safety, and Federal Enforcement."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/`",
      "title": "freestatenews.net / Freestatenews",
      "publisher": "Freestatenews",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marijuana / Drug Policy.",
        "The Free State News debate transcript records Sarnecki saying he was against legalization of marijuana because drug use creates health and mental-health problems, and because he di"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(PHILIP_SARNECKI_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[philip-sarnecki.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
