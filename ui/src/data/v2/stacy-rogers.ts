/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const STACY_ROGERS_V2: CandidateFullV2 = {
  "slug": "stacy-rogers",
  "name": "Stacy Rogers",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Businesswoman / Former School Board Member",
  "campaignWebsite": "https://stacyrogersforks.com/",
  "issues": [
    {
      "id": "i-official-status-filing",
      "title": "Official Filing Status",
      "stated": {
        "text": "Rogers is running on a Republican Governor / Lieutenant Governor ticket with Michael W. Smith. Government election pages list the ticket for Governor / Lieutenant Governor of Kansas, and a filing-system mirror lists Rogers as filed by fee on December 22, 2025. The SOS candidate-list page itself was blocked in this environment, and the final filing deadline is June 1, 2026, so the careful status is filed Republican primary ticket, not nominee.",
        "sourceIds": [
          "s-sos-candidate-info",
          "s-joco-rogers-smith",
          "s-candidatefiling-rogers",
          "s-kpdc-202601",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "a-filed-ticket-2025",
          "date": "2025-12-22",
          "body": "Filed by fee for Governor & Lt. Governor according to the State of Kansas candidate-filing mirror; campaign says paperwork was filed with the Kansas Secretary of State the same day.",
          "sourceIds": [
            "s-candidatefiling-rogers",
            "s-campaign-home"
          ]
        },
        {
          "id": "a-paid-filing-fee-2025",
          "date": "2025-12-22",
          "body": "Campaign-finance report lists a $2,840 filing-fee expenditure to the Kansas Secretary of State.",
          "sourceIds": [
            "s-kpdc-202601"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "Indexed X metadata identified @stacyrogersks as \"Stacy Rogers for Kansas Governor,\" Kansas, USA, with the campaign website and paid-for disclaimer. TwStalker snippets showed follower counts around 546 and following around 2K in one indexed view, while another older indexed view showed 357 followers and 2K following. Because X itself did not expose reliable logged-out profile counts in this capture, those counts...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-official-status-filing"
        },
        {
          "id": "ss-crossref-3",
          "platform": "stacyrogersforks.com",
          "observation": "Campaign Stacy's Team page, captured 2026-05-11. Key signals: Rogers biography; Lt. Gov. running mate Michael Smith; campaign manager Amanda Pearce; treasurer Archie Macias and Kansans for Life board history. (source) 4. The Rogers Report page, captured 2026-05-11. Key signals: official campaign update/video/policy hub, \"straight talk\" frame, and a visible Business & Beards podcast heading. (source) 5. Campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-team"
          ],
          "mappedToIssueId": "i-official-status-filing"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "This pass extends the existing May 11 social harvest with targeted current verification. It emphasizes official filing status, candidate-controlled issue pages, campaign finance records, and only those social/online signals that are publicly observable without logging in.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linktree"
          ],
          "mappedToIssueId": "i-official-status-filing"
        }
      ],
      "gap": {
        "summary": "Direct SOS candidate-list capture was blocked by JavaScript/captcha; final primary ballot composition cannot be closed before the June 1, 2026 filing deadline.",
        "evidenceIds": [
          "a-filed-ticket-2025"
        ]
      }
    },
    {
      "id": "i-government-accountability-transparency",
      "title": "Government Accountability / Transparency",
      "stated": {
        "text": "Rogers's campaign frames her candidacy around listening to Kansans, restoring trust, fiscal responsibility, government transparency, and people over political insiders. She has also said she would review state departments for inefficiencies, duplications, fraud, and mismanagement.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-meet",
          "s-hayspost-ellis",
          "s-yahoo-capjournal"
        ]
      },
      "actions": [
        {
          "id": "a-ellis-stop-accountability-2025",
          "date": "2025-09-26",
          "body": "At an Ellis campaign stop covered by Hays Post, Rogers discussed searching state departments for inefficiencies, duplications, fraud, and mismanagement.",
          "sourceIds": [
            "s-hayspost-ellis"
          ]
        },
        {
          "id": "a-travel-grassroots-2025",
          "date": "2025-08-21",
          "body": "In a Topeka Capital-Journal interview, Rogers described a grassroots campaign and said she had driven more than 35,000 miles since December to meet voters.",
          "sourceIds": [
            "s-yahoo-capjournal"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-rogers-report-channel",
          "platform": "campaign website",
          "observation": "The campaign presents The Rogers Report as an official source for updates, video messages, press releases, and policy positions, but the visible archive was thin at capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-rogers-report"
          ],
          "mappedToIssueId": "i-government-accountability-transparency"
        },
        {
          "id": "ss-crossref-2",
          "platform": "stacyrogersforks.com",
          "observation": "Rogers' current campaign site uses a direct outsider-and-service frame: \"People Over Politics. Kansas First.\" It says she wants a stronger future for every Kansas community, describes the Rogers-Smith ticket as first to formally enter the 2026 governor's race, and frames the campaign around courage, grassroots leadership, listening to Kansans, fiscal responsibility, small business, public safety, rural values,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-government-accountability-transparency"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Topic buckets overlap. For example, the Meet Stacy page counts both economy and government accountability; podcast appearances count both direct-contact social strategy and policy discussion.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linktree"
          ],
          "mappedToIssueId": "i-government-accountability-transparency"
        }
      ],
      "gap": {
        "summary": "No administrative record exists showing how Rogers has managed a state agency; evidence is campaign statement and public-event/interview record.",
        "evidenceIds": [
          "a-ellis-stop-accountability-2025"
        ]
      }
    },
    {
      "id": "i-economy-small-business-tax-incentives",
      "title": "Economy / Small Business / Tax Incentives",
      "stated": {
        "text": "Rogers's candidate-controlled priorities include sunsetting STAR bonds, returning ALBTR cigarette and alcohol tax revenue to counties, protecting against predatory energy projects, encouraging homegrown business development, fair wages, job training, and incentives for local and small businesses.",
        "sourceIds": [
          "s-campaign-meet",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "a-ellis-business-incentives-2025",
          "date": "2025-09-26",
          "body": "At the Ellis stop, Hays Post reported Rogers opposed statewide payment for large incentive packages that benefit only one county or community, citing Chiefs/Royals incentive packages.",
          "sourceIds": [
            "s-hayspost-ellis"
          ]
        },
        {
          "id": "a-business-owner-background",
          "date": "2025-06-10",
          "body": "Rotary event listing and podcast transcript describe Rogers's business background with Eberly Farm and Kids Closet Consignment Sales.",
          "sourceIds": [
            "s-rotary-west-wichita",
            "s-listennotes-billydees"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Several issue areas were not prominent in the accessible material reviewed. The capture set did not include detailed candidate-controlled positions on Medicaid expansion, marijuana legalization, LGBTQ+ policy, higher education, housing affordability, child care affordability, broadband, road funding, labor policy, state employee pay, or water/Ogallala policy. The campaign provides broad pro-life, pro-family,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linktree"
          ],
          "mappedToIssueId": "i-economy-small-business-tax-incentives"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Issue-mapping note: direct candidate-controlled issue statement; STAR bonds and ALBTR should not be generalized into a full tax platform without more evidence.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linktree"
          ],
          "mappedToIssueId": "i-economy-small-business-tax-incentives"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "On budget/taxes, she said she would search departments for inefficiencies, duplications, fraud, and mismanagement.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linktree"
          ],
          "mappedToIssueId": "i-economy-small-business-tax-incentives"
        }
      ],
      "gap": {
        "summary": "No detailed tax-rate, budget-line, STAR-bond statutory language, or ALBTR implementation plan was found in candidate-controlled sources.",
        "evidenceIds": [
          "a-ellis-business-incentives-2025"
        ]
      }
    },
    {
      "id": "i-education-school-choice-special-needs",
      "title": "Education / School Choice / Special Needs",
      "stated": {
        "text": "Rogers foregrounds school struggles and family experience rather than a detailed education white paper. Public-event coverage reports that she discussed learning challenges, public/private/homeschool experience, an IEP dispute, administrative costs, possible school choice, and money following the student.",
        "sourceIds": [
          "s-campaign-meet",
          "s-hayspost-ellis",
          "s-listennotes-billydees",
          "s-rotary-west-wichita"
        ]
      },
      "actions": [
        {
          "id": "a-ellis-education-comments-2025",
          "date": "2025-09-26",
          "body": "At the Ellis stop, Rogers discussed public, private, and homeschool experience; learning challenges; IEP experience; school administration costs; and a possible form of school choice.",
          "sourceIds": [
            "s-hayspost-ellis"
          ]
        },
        {
          "id": "a-podcast-education-topic-2025",
          "date": "2025-06-13",
          "body": "Billy Dees Podcast episode listing and transcript include education failures and support for students with learning challenges as topics.",
          "sourceIds": [
            "s-listennotes-billydees"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "TikTok",
          "observation": "The richest long-form candidate voice came from podcast appearances rather than platform-native posts. On the Billy Dees Podcast, Rogers said she is on \"Snapchat,\" TikTok, Rumble, YouTube, Truth Social, Facebook, Instagram, LinkedIn, and her website, and said she personally answers text messages, Facebook messages, and email. The same transcript covered special interests, fentanyl and human trafficking,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-education-school-choice-special-needs"
        },
        {
          "id": "ss-crossref-3",
          "platform": "iheart.com",
          "observation": "Billy Dees Podcast episode, June 12/13, 2025. Key signals: candidate says she is accessible across many social platforms; themes include people lacking a voice, special interests, Kansas aerospace/agriculture, fentanyl and human trafficking, foster care, education, term limits, and judicial selection. (source) 14. Politics Not Included podcast listing, March 10, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-education-school-choice-special-needs"
        },
        {
          "id": "ss-crossref-5",
          "platform": "kwch",
          "observation": "Key signals: Rogers as first to announce in November 2024; small-business and constitutional-freedoms identity; quote about leadership that listens and acts on rights, schools, local business, and values. (source) 16. Beautynailhairsalons mirror of her Mary Kay/business social posts. Key signal: Nov. 7, 2024 post linking to the campaign Linktree; business posts overlap with Eberly Farm, Kids Closet Connection,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-education-school-choice-special-needs"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled detailed school-finance, special-education funding, curriculum, or school-choice bill text was found.",
        "evidenceIds": [
          "a-ellis-education-comments-2025"
        ]
      }
    },
    {
      "id": "i-life-family-abortion",
      "title": "Abortion / Family / Life Policy",
      "stated": {
        "text": "The campaign uses the heading Supporting Families, Protecting Life and says Rogers is committed to protecting all life, protecting children, and supporting families. The accessible campaign pages did not provide detailed abortion-exception language or bill commitments.",
        "sourceIds": [
          "s-campaign-meet"
        ]
      },
      "actions": [
        {
          "id": "a-treasurer-team-life-affiliation",
          "date": "2026-05-19",
          "body": "The campaign team page lists treasurer Archie Macias and says he has served on the Kansans for Life board; this is team context, not a substitute for Rogers's own policy statement.",
          "sourceIds": [
            "s-campaign-team"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Detailed policy plans: no candidate-controlled detailed papers found for Medicaid expansion, marijuana legalization, LGBTQ+ policy, higher education, housing, child care, broadband, road/bridge funding, state employee pay, or abortion exceptions.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linktree"
          ],
          "mappedToIssueId": "i-life-family-abortion"
        }
      ],
      "gap": {
        "summary": "No detailed candidate-controlled abortion policy, exception language, pregnancy-resource funding plan, or voting record was found.",
        "evidenceIds": [
          "a-treasurer-team-life-affiliation"
        ]
      }
    },
    {
      "id": "i-constitutional-rights-guns-law-enforcement",
      "title": "Constitutional Rights / Guns / Law Enforcement",
      "stated": {
        "text": "Rogers's Meet Stacy page lists pro-Second Amendment, pro-natural and constitutional rights, pro-law enforcement, supporter of term limits, limiting government overreach, cutting unnecessary regulations, and defending constitutional rights.",
        "sourceIds": [
          "s-campaign-meet",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "a-public-safety-platform",
          "date": "2026-05-19",
          "body": "Campaign homepage lists public safety and community trust as a platform priority.",
          "sourceIds": [
            "s-campaign-home"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No specific firearms bill, policing budget proposal, emergency-powers policy, or law-enforcement endorsement list was found.",
        "evidenceIds": [
          "a-public-safety-platform"
        ]
      }
    },
    {
      "id": "i-public-safety-trafficking-foster-care",
      "title": "Public Safety / Trafficking / Foster Care",
      "stated": {
        "text": "Rogers's long-form interview record discusses fentanyl, human trafficking, foster care, and vulnerable communities. The campaign homepage also lists public safety and community trust as a priority.",
        "sourceIds": [
          "s-listennotes-billydees",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "a-podcast-trafficking-topic-2025",
          "date": "2025-06-13",
          "body": "Billy Dees Podcast transcript includes Rogers discussing fentanyl and human trafficking in Kansas and referencing the I-70/I-35 corridors.",
          "sourceIds": [
            "s-listennotes-billydees"
          ]
        },
        {
          "id": "a-podcast-foster-care-topic-2025",
          "date": "2025-06-13",
          "body": "The same episode lists vulnerable communities and foster care system challenges as discussion topics.",
          "sourceIds": [
            "s-listennotes-billydees"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No detailed law-enforcement, foster-care agency, trafficking task-force, or appropriations plan was found in candidate-controlled pages.",
        "evidenceIds": [
          "a-podcast-trafficking-topic-2025"
        ]
      }
    },
    {
      "id": "i-courts-judicial-selection-term-limits",
      "title": "Courts / Judicial Selection / Term Limits",
      "stated": {
        "text": "Rogers's campaign page lists support for term limits, and her long-form interview record includes discussion of Kansas Supreme Court selection and the 2026 judicial-selection vote. Hays Post also reported that she supported term limits during the Ellis stop.",
        "sourceIds": [
          "s-campaign-meet",
          "s-listennotes-billydees",
          "s-hayspost-ellis"
        ]
      },
      "actions": [
        {
          "id": "a-ellis-term-limits-2025",
          "date": "2025-09-26",
          "body": "Hays Post reported Rogers supported term limits at an Ellis campaign stop.",
          "sourceIds": [
            "s-hayspost-ellis"
          ]
        },
        {
          "id": "a-podcast-judicial-selection-2025",
          "date": "2025-06-13",
          "body": "Billy Dees Podcast transcript includes a discussion of Kansas Supreme Court selection and judicial power.",
          "sourceIds": [
            "s-listennotes-billydees"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No detailed proposed term-limit amendment language or judicial-selection implementation plan was found.",
        "evidenceIds": [
          "a-ellis-term-limits-2025"
        ]
      }
    },
    {
      "id": "i-water-rural-agriculture-energy",
      "title": "Water / Rural Kansas / Agriculture / Energy Projects",
      "stated": {
        "text": "The campaign homepage lists rural Kansas values and agriculture as priorities, and the Meet Stacy page lists state protections from predatory energy projects. At an Ellis stop, Rogers was not familiar with the R9 Ranch project but spoke generally about water preservation and regional differences in Kansas water needs.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-meet",
          "s-hayspost-ellis"
        ]
      },
      "actions": [
        {
          "id": "a-ellis-water-comments-2025",
          "date": "2025-09-26",
          "body": "Hays Post reported Rogers was not familiar with the R9 Ranch project when asked, then discussed water preservation generally and differences between eastern and western Kansas water needs.",
          "sourceIds": [
            "s-hayspost-ellis"
          ]
        },
        {
          "id": "a-campaign-energy-projects",
          "date": "2026-05-19",
          "body": "Meet Stacy page lists state protections from predatory energy projects as a priority.",
          "sourceIds": [
            "s-campaign-meet"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No detailed water-rights, Ogallala aquifer, R9 Ranch, agriculture subsidy, or energy-siting plan was found in candidate-controlled sources.",
        "evidenceIds": [
          "a-ellis-water-comments-2025"
        ]
      }
    }
  ],
  "ownWordsNarrative": "Social research is presence-limited. Campaign website and Linktree are candidate-controlled; several native platforms are login/script-limited. No issue position is inferred from follows, likes, associations, platform choice, faith language, or party label.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Rogers uses Christian language in her public presentation, including describing herself as a \"Child of God,\" but the available record does not name a congregation, denomination, or church website.",
  "campaignFinance": {
    "totalRaised": "The 2025 year-end KPDC/SOS report shows $24,862.65 raised, $11,072.75 spent, $14,470.23 cash on hand, $1,200 in-kind, and $2,747.79 in other transactions/loans. The campaign paid the $2,840 Kansas Secretary of State filing fee on December 22, 2025.",
    "narrative": "The 2025 year-end KPDC/SOS report shows $24,862.65 raised, $11,072.75 spent, $14,470.23 cash on hand, $1,200 in-kind, and $2,747.79 in other transactions/loans. The campaign paid the $2,840 Kansas Secretary of State filing fee on December 22, 2025.",
    "donors": [
      {
        "name": "Panther Investment",
        "amount": "$4,000"
      },
      {
        "name": "Positively GreatBend",
        "amount": "$4,000"
      },
      {
        "name": "Eldridge Fencing",
        "amount": "$2,000"
      },
      {
        "name": "Joyce Corp",
        "amount": "$2,000"
      },
      {
        "name": "Deanna Steffen",
        "amount": "$2,000"
      },
      {
        "name": "Jarrodd Kieffer",
        "amount": "$2,000"
      },
      {
        "name": "Edward Collins",
        "amount": "$1,000"
      },
      {
        "name": "Shae's Point of View (in-kind video services)",
        "amount": "$1,200"
      },
      {
        "name": "Stacy Rogers loans to campaign",
        "amount": "$2,747.79 balance at close"
      }
    ],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "KPDC/SOS 2026 Statewide Campaign Finance Index"
  },
  "sources": [
    {
      "id": "s-sos-candidate-info",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Kansas Secretary of State - Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Statewide candidates file with the Kansas Secretary of State",
        "Primary filing deadline is 12:00 p.m. Monday, June 1, 2026",
        "Governor/Lt. Governor is a 2026 office",
        "Governor/Lt. Governor total filing fee is $2,840"
      ]
    },
    {
      "id": "s-joco-rogers-smith",
      "tier": "primary",
      "url": "https://www.jocoelection.org/candidates-elected-officials/stacy-l-rogers-michael-w-smith",
      "title": "Johnson County Election Office - Stacy L. Rogers / Michael W. Smith",
      "publisher": "Johnson County Election Office",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Stacy L. Rogers / Michael W. Smith listed for Governor / Lieutenant Governor of Kansas",
        "Party listed as Republican",
        "Incumbent listed as No",
        "Office level listed as State Offices"
      ]
    },
    {
      "id": "s-candidatefiling-rogers",
      "tier": "primary",
      "url": "https://candidatefiling.us/Info/Default?c=30052683837&e=2217607272&j=1896963838&s=882402022&st=KS",
      "title": "Candidate Filing Info - State of Kansas",
      "publisher": "Modus Elections Software / Kansas filing-system mirror",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Stacy L. Rogers (R), Wichita, filed for Governor & Lt. Governor by fee on 12/22/2025",
        "Documents filed with the State of Kansas"
      ]
    },
    {
      "id": "s-kpdc-202601",
      "tier": "primary",
      "url": "https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SR_202601.pdf",
      "title": "2025 Year-End Campaign Finance Report - Stacy Rogers",
      "publisher": "Kansas Public Disclosure Commission / Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2025 year-end receipts were $24,862.65",
        "2025 year-end expenditures were $11,072.75",
        "2025 closing cash was $14,470.23",
        "In-kind contributions were $1,200.00",
        "Other transactions/loans were $2,747.79",
        "Kansas Secretary of State filing fee expenditure was $2,840 on 12/22/2025",
        "Large itemized receipts included Panther Investment, Positively GreatBend, Eldridge Fencing, Joyce Corp, Deanna Steffen, Jarrodd Kieffer, and Edward Collins"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://stacyrogersforks.com/",
      "title": "Stacy Rogers for Kansas - Homepage",
      "publisher": "Stacy Rogers for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says Rogers filed paperwork with Kansas Secretary of State on 12/22/2025",
        "Campaign identifies Michael Smith as lieutenant-governor running mate",
        "Campaign priorities include fiscal responsibility, transparency, small businesses, public safety, rural Kansas values, agriculture, and anti-insider government",
        "Observed public online activity mapped to Government Accountability / Transparency."
      ]
    },
    {
      "id": "s-campaign-meet",
      "tier": "primary",
      "url": "https://stacyrogersforks.com/meet-stacy",
      "title": "Meet Stacy",
      "publisher": "Stacy Rogers for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign describes Rogers as lifelong Kansan, Republican, business owner, and mother",
        "Priorities include sunsetting STAR bonds, returning ALBTR revenue to counties, protecting against predatory energy projects, and homegrown business development",
        "Core values include pro-Second Amendment, pro-business, pro-veteran, pro-family, natural and constitutional rights, law enforcement, and term limits",
        "Campaign headings include Supporting Families, Protecting Life; Empowering Citizens, Promoting Growth; Limiting Government, Defending Our Rights"
      ]
    },
    {
      "id": "s-campaign-team",
      "tier": "primary",
      "url": "https://stacyrogersforks.com/stacys-team",
      "title": "Stacy's Team",
      "publisher": "Stacy Rogers for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Michael Smith described as Leavenworth County Commissioner, former Lansing mayor, city administrator, and police chief",
        "Archie Macias listed as treasurer",
        "Macias biography lists board service including Kansans for Life",
        "Observed public online activity mapped to Official Filing Status."
      ]
    },
    {
      "id": "s-rogers-report",
      "tier": "primary",
      "url": "https://stacyrogersforks.com/the-rogers-report",
      "title": "The Rogers Report",
      "publisher": "Stacy Rogers for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign describes page as official source for updates, video messages, press releases, and policy positions",
        "Visible archive was thin at capture"
      ]
    },
    {
      "id": "s-linktree",
      "tier": "social",
      "url": "https://linktr.ee/stacyrogersforkansas",
      "title": "Stacy Rogers for Governor Linktree",
      "publisher": "Linktree / Stacy Rogers for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-controlled directory links donation, website, TikTok, Facebook, LinkedIn, and X",
        "Paid-for line names Archie Macias as treasurer"
      ]
    },
    {
      "id": "s-hayspost-ellis",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/54a43a41-5f58-4499-863d-7844b028f811",
      "title": "Gubernatorial candidate Rogers says she seeks to give voice back to Kansans during Ellis stop",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Rogers campaigned in Ellis during a western Kansas speaking tour",
        "Rogers discussed term limits, business incentives, education, water, budget review, and school choice",
        "Rogers said she was not familiar with the R9 Ranch project"
      ]
    },
    {
      "id": "s-yahoo-capjournal",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html",
      "title": "Stacy Rogers says she's taking a grassroots approach in gubernatorial campaign",
      "publisher": "Topeka Capital-Journal via Yahoo",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Rogers described her campaign as grassroots",
        "Rogers discussed department-by-department review for inefficiencies",
        "Article reports her campaign rationale included Kansas gender-marker policy disputes",
        "Rogers said she had driven more than 35,000 miles since December"
      ]
    },
    {
      "id": "s-listennotes-billydees",
      "tier": "secondary",
      "url": "https://www.listennotes.com/es/podcasts/billy-dees-podcast/stacy-rogers-candidate-for-zobY5rL_GMQ/",
      "title": "Stacy Rogers - Candidate for Governor of Kansas",
      "publisher": "Listen Notes / Billy Dees Podcast transcript",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Episode topics include drug and human trafficking, vulnerable communities, foster care, education failures, term limits, and judicial power",
        "Transcript includes Rogers discussing Eberly Farm and Kids Closet Consignment Sales",
        "Transcript includes Rogers discussing fentanyl and human trafficking",
        "Transcript includes Rogers discussing Kansas Supreme Court selection and term limits"
      ]
    },
    {
      "id": "s-rotary-west-wichita",
      "tier": "secondary",
      "url": "https://rotarywestwichita.org/speakers/75327d55-6106-472b-b6ff-0bbb0e5c0b33",
      "title": "Candidate for Governor - Stacy Rogers",
      "publisher": "Rotary Club of West Wichita",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Event listing describes Rogers as owner of Eberly Farm, owner of Kids Closet Consignment Sales, and franchisor across the United States",
        "Event listing says two children have learning challenges"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://x.com/stacyrogersks",
      "title": "X / X",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Official Filing Status.",
        "Indexed X metadata identified @stacyrogersks as \"Stacy Rogers for Kansas Governor,\" Kansas, USA, with the campaign website and paid-for disclaimer. TwStalker snippets showed follow"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://www.iheart.com/podcast/966-billy-dees-podcast-28826157/episode/stacy-rogers-candidate-for-governor-280748522/",
      "title": "TikTok / Iheart",
      "publisher": "Iheart",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Education / School Choice / Special Needs.",
        "The richest long-form candidate voice came from podcast appearances rather than platform-native posts. On the Billy Dees Podcast, Rogers said she is on \"Snapchat,\" TikTok, Rumble, "
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/05/14/gop-field-already-getting-crowded-bid-flip-kansas-governors-office/",
      "title": "kwch / Kwch",
      "publisher": "Kwch",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Education / School Choice / Special Needs.",
        "Key signals: Rogers as first to announce in November 2024; small-business and constitutional-freedoms identity; quote about leadership that listens and acts on rights, schools, loc"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(STACY_ROGERS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[stacy-rogers.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
