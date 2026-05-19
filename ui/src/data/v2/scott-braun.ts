/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SCOTT_BRAUN_V2: CandidateFullV2 = {
  "slug": "scott-braun",
  "name": "Scott J. Braun",
  "party": "R",
  "position": "Ellis County Sheriff",
  "electionSlug": "ellis-county-current",
  "incumbent": true,
  "occupation": "Ellis County Sheriff",
  "religion": "Roman Catholic (Diocese of Salina)",
  "education": "Victoria High School graduate (Victoria, KS -- small town in Ellis County)",
  "issues": [
    {
      "id": "i-official-status-election-cycle",
      "title": "Official Status / Election Cycle",
      "stated": {
        "text": "Braun is the incumbent Republican Ellis County Sheriff, re-elected in 2024. This should be treated as a current-officeholder/off-cycle profile rather than a 2026 ballot profile.",
        "sourceIds": [
          "s-ellis-2024-results",
          "s-ellis-results-page",
          "s-sos-election-standards-ch4"
        ]
      },
      "actions": [
        {
          "id": "ae-reelection-2024",
          "date": "2024-11-05",
          "body": "Re-elected Ellis County Sheriff with 11,797 official votes; write-ins received 117.",
          "sourceIds": [
            "s-ellis-2024-results"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "No public statements found in the reviewed source set on abortion, school curriculum, LGBTQ issues, election administration, or most non-law-enforcement state policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linkedin-braun"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Use official Ellis County 2024 general result: Scott J. Braun, Republican, 11,797 votes for county sheriff; write-ins, 117. Hays Post election-night coverage used the earlier unofficial 11,524 figure. If final UI needs a current election note, use \"re-elected 2024; next regular sheriff cycle 2028,\" not \"2026 candidate.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linkedin-braun"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Braun repeatedly links jail population and law-enforcement workload to mental-health placement. Hays Post quotes him saying sheriffs statewide struggle with mental-health issues and reports his support for increased High Plains Mental Health Center crisis-intervention funding as an alternative or supplement to incarceration. His LinkedIn profile also lists founding board work with Ellis County Crisis Intervention...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linkedin-braun"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        }
      ],
      "gap": {
        "summary": "No 2026 filing for Braun surfaced in reviewed sources; next regular sheriff cycle is inferred as 2028 from county-office cycle rather than from a candidate filing.",
        "evidenceIds": [
          "ae-reelection-2024"
        ]
      }
    },
    {
      "id": "i-jail-capacity-public-safety-operations",
      "title": "Jail Capacity / Public Safety Operations",
      "stated": {
        "text": "Braun frames jail capacity and public-safety infrastructure as operational needs tied to usable beds, out-of-county housing, transport costs, liability, public safety, and long-term county planning.",
        "sourceIds": [
          "s-ellis-sheriff-page",
          "s-hayspost-jail-assessment-2023",
          "s-hayspost-jail-need-2024",
          "s-ellis-may08-2025-retreat"
        ]
      },
      "actions": [
        {
          "id": "ae-jail-assessment-2023",
          "date": "2023-12-19",
          "body": "Commission approved a full jail assessment; coverage attributed to Braun concerns about usable capacity, out-of-county housing, transport costs, and liability.",
          "sourceIds": [
            "s-hayspost-jail-assessment-2023"
          ]
        },
        {
          "id": "ae-lec-retreat-2025",
          "date": "2025-05-08",
          "body": "Discussed Law Enforcement Center remodel and future jail needs at commission retreat; no action taken.",
          "sourceIds": [
            "s-ellis-may08-2025-retreat"
          ]
        },
        {
          "id": "ae-tyler-jms-2026",
          "date": "2026-01-20",
          "body": "Asked with Communications Director Jeff Ridgway for Tyler public-safety cloud migration and sheriff jail-management-system upgrade; commission approved $348,076 PO by 2-0 voice vote.",
          "sourceIds": [
            "s-ellis-jan20-2026-minutes"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "In his 2019 candidacy announcement, Braun framed his sheriff campaign around \"Dedication, Experience and Integrity\" after describing his long law-enforcement career, Rotary service, St. Nicholas of Myra Church Council role, Knights of Columbus membership, and professional boards. Source: Hays Post archive, Oct. 31, 2019.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2019-announcement"
          ],
          "mappedToIssueId": "i-jail-capacity-public-safety-operations"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On mental health, he said every Kansas sheriff is struggling with mental-health issues and questioned whether people with serious mental illness should be in county facilities. Source: Hays Post, Jan. 11, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-ksa-forfeiture"
          ],
          "mappedToIssueId": "i-jail-capacity-public-safety-operations"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "On jail capacity, he said the proposed jail is not something he wants personally: \"We need a jail. I don't want it. We need it...\" Source: Hays Post, July 11, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-jail-need-2024"
          ],
          "mappedToIssueId": "i-jail-capacity-public-safety-operations"
        }
      ],
      "gap": {
        "summary": "Official minutes anchor the 2025/2026 actions, while detailed jail-capacity rationale is mostly from Hays Post meeting coverage.",
        "evidenceIds": [
          "ae-jail-assessment-2023"
        ]
      }
    },
    {
      "id": "i-ice-detainers-immigration-enforcement",
      "title": "ICE Detainers / Immigration Enforcement",
      "stated": {
        "text": "Braun supports Ellis County participation in ICE-detainer cooperation for people already in local custody, while publicly emphasizing a 48-hour legal limit and saying deputies are not conducting street-level immigration investigations.",
        "sourceIds": [
          "s-hayspost-ice-2025",
          "s-ksleg-hb2771",
          "s-hayspost-hb2771-2026",
          "s-marshall-border-release-2025"
        ]
      },
      "actions": [
        {
          "id": "ae-border-visit-2025",
          "date": "2025-05-31",
          "body": "After a border visit with Sen. Roger Marshall and Kansas law-enforcement officials, Braun tied border security to narcotics and human trafficking affecting Kansas.",
          "sourceIds": [
            "s-marshall-border-release-2025"
          ]
        },
        {
          "id": "ae-ice-mou-explained-2025",
          "date": "2025-11-20",
          "body": "Explained Ellis County ICE memorandum, saying detainers apply to people already jailed on local charges and cannot exceed the 48-hour window after local custody.",
          "sourceIds": [
            "s-hayspost-ice-2025"
          ]
        },
        {
          "id": "ae-hb2771-testimony-2026",
          "date": "2026-02-25",
          "body": "Listed by Kansas Legislature as oral proponent testimony for HB 2771 on ICE detainers, insurance coverage, legal representation, and sheriff agreement authority.",
          "sourceIds": [
            "s-ksleg-hb2771",
            "s-ksleg-hb2771-docs",
            "s-hayspost-hb2771-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "marshall.senate.gov",
          "observation": "After visiting the Arizona-Mexico border, Braun said a secure border is critical to stopping trafficking of narcotics and human beings and tied fentanyl and trafficking threats back to Kansas communities. Source: Sen. Roger Marshall release, May 31, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-marshall-border-release-2025"
          ],
          "mappedToIssueId": "i-ice-detainers-immigration-enforcement"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On the ICE memorandum, Braun emphasized that Ellis County cannot hold someone beyond the legal detainer window and that deputies are not stopping people on the street for immigration investigations. Source: Hays Post, Nov. 20, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-ice-2025"
          ],
          "mappedToIssueId": "i-ice-detainers-immigration-enforcement"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "In HB 2771 testimony coverage, Braun framed the bill as liability clarity, fiscal responsibility, and taxpayer protection, while also saying community safety remained the main reason for staying in the ICE program. Source: Hays Post, Mar. 6, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-hb2771-2026"
          ],
          "mappedToIssueId": "i-ice-detainers-immigration-enforcement"
        }
      ],
      "gap": {
        "summary": "The official bill page verifies Braun's testimony entry; direct machine-readable text of Braun's own testimony PDF was not available in this pass, so Hays Post is used for testimony content.",
        "evidenceIds": [
          "ae-border-visit-2025"
        ]
      }
    },
    {
      "id": "i-drug-forfeiture-opioid-fentanyl",
      "title": "Drug Forfeiture / Opioid and Fentanyl Enforcement",
      "stated": {
        "text": "Braun argues that local drug-forfeiture funds support equipment and enforcement operations and has sought opioid-settlement resources for law-enforcement training.",
        "sourceIds": [
          "s-hayspost-ksa-forfeiture",
          "s-hayspost-opioid-training-2025",
          "s-ellis-nov05-2024-minutes"
        ]
      },
      "actions": [
        {
          "id": "ae-forfeiture-ksa-2024",
          "date": "2024-01-11",
          "body": "As KSA president, opposed diverting drug-forfeiture proceeds from local law enforcement and argued loss of funds would affect taxpayers.",
          "sourceIds": [
            "s-hayspost-ksa-forfeiture"
          ]
        },
        {
          "id": "ae-opioid-aeds-2024",
          "date": "2024-11-05",
          "body": "Asked commission to use opioid funds to purchase AEDs.",
          "sourceIds": [
            "s-ellis-nov05-2024-minutes"
          ]
        },
        {
          "id": "ae-opioid-training-2025",
          "date": "2025-04-14",
          "body": "Planned to request about $800 from opioid settlement funds for travel costs for fentanyl/opioid-overdose death investigation training.",
          "sourceIds": [
            "s-hayspost-opioid-training-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "On the sheriff app, he said the office needed a direct way to push information to the community, especially during road and weather emergencies. Source: Hays Post, Jan. 6, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-app-2025"
          ],
          "mappedToIssueId": "i-drug-forfeiture-opioid-fentanyl"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On scam calls, Braun said the sheriff's office will not call, text, or email people demanding money or personal information. Source: Hays Post, Mar. 14, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-scam-2025"
          ],
          "mappedToIssueId": "i-drug-forfeiture-opioid-fentanyl"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "No verified campaign website was found. The apparent elliscountysheriff.com source is a Texas sheriff site and should not be used for Braun.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linkedin-braun"
          ],
          "mappedToIssueId": "i-drug-forfeiture-opioid-fentanyl"
        }
      ],
      "gap": {
        "summary": "This pass did not locate itemized local forfeiture balances or a complete official opioid-settlement spending ledger.",
        "evidenceIds": [
          "ae-forfeiture-ksa-2024"
        ]
      }
    },
    {
      "id": "i-mental-health-crisis-response",
      "title": "Mental Health / Crisis Response",
      "stated": {
        "text": "Braun links jail operations to mental-health placement and supports crisis-intervention capacity as a law-enforcement and community need.",
        "sourceIds": [
          "s-hayspost-ksa-forfeiture",
          "s-hayspost-jail-need-2024",
          "s-hayspost-crisis-funding-2025",
          "s-linkedin-braun"
        ]
      },
      "actions": [
        {
          "id": "ae-mental-health-ksa-2024",
          "date": "2024-01-11",
          "body": "Said sheriffs statewide struggle with mental-health issues and questioned whether people with serious mental illness should be in county jail facilities.",
          "sourceIds": [
            "s-hayspost-ksa-forfeiture"
          ]
        },
        {
          "id": "ae-crisis-center-support-2025",
          "date": "2025-07-16",
          "body": "Supported High Plains Mental Health Center crisis-intervention funding, saying it would help the sheriff's office and other local agencies.",
          "sourceIds": [
            "s-hayspost-crisis-funding-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-linkedin-cit",
          "platform": "LinkedIn",
          "observation": "Profile lists Braun as founding board member of Ellis County Crisis Intervention Team and visible likes include mental-health/public-service items.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linkedin-braun"
          ],
          "mappedToIssueId": "i-mental-health-crisis-response"
        }
      ],
      "gap": {
        "summary": "Mental-health evidence is largely candidate-attributed statements and budget coverage; no separate Braun vote exists because sheriff is not a commissioner.",
        "evidenceIds": [
          "ae-mental-health-ksa-2024"
        ]
      }
    },
    {
      "id": "i-public-communication-consumer-protection",
      "title": "Public Communication / Consumer Protection",
      "stated": {
        "text": "Braun emphasizes direct public alerts and scam prevention through office communication tools.",
        "sourceIds": [
          "s-hayspost-app-2025",
          "s-hayspost-scam-2025",
          "s-ellis-sheriff-page"
        ]
      },
      "actions": [
        {
          "id": "ae-sheriff-app-2025",
          "date": "2025-01-06",
          "body": "Promoted sheriff's office app for alerts, crime tips, inmate information, offender map, vacation patrol, weather updates, and direct public communication.",
          "sourceIds": [
            "s-hayspost-app-2025"
          ]
        },
        {
          "id": "ae-scam-warning-2025",
          "date": "2025-03-14",
          "body": "Warned residents that the sheriff's office will not request money or personal information through unsolicited call, text, or email.",
          "sourceIds": [
            "s-hayspost-scam-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-office-facebook-x",
          "platform": "Official office Facebook/X",
          "observation": "Ellis County official sheriff page links Facebook and Twitter/X office accounts, but accessible post archives were not available here.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-sheriff-page"
          ],
          "mappedToIssueId": "i-public-communication-consumer-protection"
        }
      ],
      "gap": {
        "summary": "Office Facebook/X links were verified, but post-level audit and engagement metrics could not be captured.",
        "evidenceIds": [
          "ae-sheriff-app-2025"
        ]
      }
    },
    {
      "id": "i-civic-faith-professional-identity",
      "title": "Civic / Faith / Professional Identity",
      "stated": {
        "text": "Braun's public biography emphasizes long law-enforcement service, professional association leadership, civic service, and Catholic parish/Knights of Columbus involvement.",
        "sourceIds": [
          "s-hayspost-2019-announcement",
          "s-linkedin-braun",
          "s-ksa-ellis-listing"
        ]
      },
      "actions": [
        {
          "id": "ae-2020-campaign-announcement",
          "date": "2019-10-31",
          "body": "Announced 2020 sheriff candidacy with biography covering law-enforcement timeline, civic service, St. Nicholas Church Council, Knights of Columbus, and campaign phrase 'Dedication, Experience and Integrity.'",
          "sourceIds": [
            "s-hayspost-2019-announcement"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-linkedin-professional",
          "platform": "LinkedIn",
          "observation": "Profile-controlled professional page lists credentials, KSA leadership, volunteer roles, and visible likes; activity is not a campaign platform.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linkedin-braun"
          ],
          "mappedToIssueId": "i-civic-faith-professional-identity"
        }
      ],
      "gap": {
        "summary": "Faith/civic affiliations are biographical facts only. Do not infer issue positions from church membership or Knights of Columbus role.",
        "evidenceIds": [
          "ae-2020-campaign-announcement"
        ]
      }
    }
  ],
  "recordSummary": "Ellis County Sheriff",
  "ownWordsNarrative": "status: limited_verified_presence; checked: Campaign website; Official Ellis County sheriff page; Official sheriff Facebook; Official sheriff X/Twitter; LinkedIn; Instagram; Threads; TikTok; YouTube; Bluesky; Substack; Kansas Sheriffs' Association; Hays Post; findings: No verified campaign-controlled website found.; Official county sheriff page links office Facebook and X/Twitter accounts.; LinkedIn public profile is visible and profile-controlled; visible activity is mostly likes.; No reliable candidate-controlled Instagram, Threads, TikTok, YouTube, Bluesky, or Substack found.; sourceIds: s-ellis-sheriff-page; s-linkedin-braun; s-ksa-ellis-listing; relevance: Use official office channels and LinkedIn as online-presence signals only; do not infer policy from inaccessible posts or observed likes.",
  "whereTheyWorship": "Braun is publicly tied to St. Nicholas of Myra Catholic Church in Hays. The parish website is https://stn-church.com/, and the diocesan listing is https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/.",
  "campaignFinance": {
    "totalRaised": "No online donor list, receipts/expenditures report, treasurer appointment, or affidavit of exemption for Braun was located. KPDC states county offices are covered by the Campaign Finance Act and local candidates file treasurer forms with the county clerk/election commissioner.",
    "narrative": "No online donor list, receipts/expenditures report, treasurer appointment, or affidavit of exemption for Braun was located. KPDC states county offices are covered by the Campaign Finance Act and local candidates file treasurer forms with the county clerk/election commissioner.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Campaign Finance"
  },
  "sources": [
    {
      "id": "s-ellis-sheriff-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/102/Sheriff",
      "title": "Ellis County Sheriff's Office",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official sheriff page describes patrol, courthouse, jail, investigation, and K-9 duties.",
        "Ellis County jail is described as a 20,000-square-foot, 72-bed facility.",
        "Official page links sheriff Facebook and Twitter/X pages."
      ]
    },
    {
      "id": "s-ellis-2024-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results",
      "title": "2024 Official Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "REP Scott J Braun received 11,797 votes for county sheriff.",
        "Write-in totals for county sheriff were 117."
      ]
    },
    {
      "id": "s-ellis-results-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/435/Election-Results",
      "title": "Election Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County publishes official election results links, including 2024 and 2020."
      ]
    },
    {
      "id": "s-ellis-jan20-2026-minutes",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01202026-724",
      "title": "County Commission Minutes - Jan. 20, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Jeff Ridgway and Sheriff Scott Braun requested Tyler Technologies public-safety cloud migration and SaaS agreement.",
        "Agreement includes sheriff's office jail-management-system upgrade.",
        "Commission approved PO 7984 for $348,076 by a 2-0 voice vote.",
        "Braun said the system replacement was inevitable while recognizing the request was large."
      ]
    },
    {
      "id": "s-ellis-may08-2025-retreat",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_05082025-670",
      "title": "County Commission Retreat Minutes - May 8, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun discussed Law Enforcement Center remodel after Hays Police Department move estimated in 2026.",
        "Minutes say the remodel would not address possible future jail needs.",
        "No action was taken."
      ]
    },
    {
      "id": "s-ellis-nov05-2024-minutes",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_11052024-630",
      "title": "County Commission Minutes - Nov. 5, 2024",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun asked for approval to use opioid funds to purchase automated external defibrillators."
      ]
    },
    {
      "id": "s-ksleg-hb2771",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/hb2771/",
      "title": "HB 2771",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2771 concerned county sheriff enforcement of ICE detainers, insurance coverage, state payment of certain judgments, attorney-general representation, and sheriff authority to enter interlocal agreements.",
        "Bill page lists Scott Braun, Sheriff, Ellis County, as Feb. 25, 2026 oral proponent testimony.",
        "Bill status is died."
      ]
    },
    {
      "id": "s-ksleg-hb2771-docs",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_fed_st_1/documents/?date_choice=2026-02-25",
      "title": "House Federal and State Affairs Committee Documents - Feb. 25, 2026",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Committee document index lists Scott Braun testimony on HB 2771."
      ]
    },
    {
      "id": "s-sos-election-standards-ch4",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/election-standards/Kansas-Election-Standards-Chapter-IV-Candidates.pdf",
      "title": "Kansas Election Standards - Chapter IV, Candidates",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidates for county offices file with their county election officers.",
        "Sheriff qualifications include high-school graduate, fingerprint/background check, and absence of listed disqualifying convictions."
      ]
    },
    {
      "id": "s-hayspost-2019-announcement",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Undersheriff Braun announces run for Ellis County Sheriff in 2020",
      "publisher": "Hays Post Archive",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun announced 2020 sheriff candidacy.",
        "Article describes Victoria High School, Barton County Community College, Fort Hays State University, law-enforcement timeline, civic roles, and faith/civic memberships.",
        "Campaign message used 'Dedication, Experience and Integrity.'",
        "Observed public online activity mapped to Jail Capacity / Public Safety Operations."
      ]
    },
    {
      "id": "s-hayspost-ksa-forfeiture",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e9ec24b-53c4-40ff-9c9d-36bfbdf8808a",
      "title": "Legislature to consider drug forfeiture changes; top sheriff says seized funds needed by local law enforcement",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun served as Kansas Sheriff's Association president for 2024.",
        "Braun opposed diverting seized drug funds away from local law enforcement.",
        "Braun discussed statewide sheriff mental-health concerns and VINE.",
        "Observed public online activity mapped to Jail Capacity / Public Safety Operations."
      ]
    },
    {
      "id": "s-hayspost-jail-assessment-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/bc5f6d5c-cc32-4e29-8666-c9d7f0edd70e",
      "title": "Ellis County Commission approves contract to assess jail expansion",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Commission voted to hire consultant for full jail assessment.",
        "Braun discussed usable bed limits, out-of-county housing, transport costs, liability, and mental-health work."
      ]
    },
    {
      "id": "s-hayspost-jail-need-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d",
      "title": "Ellis County Sheriff: New jail need, not a want",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun previewed jail assessment and discussed no quick fix.",
        "Justice Planners recommendation described need for 95 beds by next year.",
        "Braun linked jail planning to public safety and mental-health issues.",
        "Observed public online activity mapped to Jail Capacity / Public Safety Operations."
      ]
    },
    {
      "id": "s-hayspost-app-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4de7954a-f04e-4832-9c84-46b4aaf24657",
      "title": "Ellis County Sheriff's Office launches new app to enhance safety, communication",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Sheriff app provides alerts, tips, inmate information, offender map, vacation patrol requests, weather updates, and cyber-safety resources.",
        "Braun said the office needed a direct channel to push information.",
        "Observed public online activity mapped to Drug Forfeiture / Opioid and Fentanyl Enforcement."
      ]
    },
    {
      "id": "s-hayspost-scam-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/df831461-e829-4c10-8fc1-2e905e69de88",
      "title": "Phone scams impersonating law enforcement plaguing Ellis County residents",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun warned that the sheriff's office will not request money or personal information through unsolicited call, text, or email.",
        "Observed public online activity mapped to Drug Forfeiture / Opioid and Fentanyl Enforcement."
      ]
    },
    {
      "id": "s-hayspost-opioid-training-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f373c9f4-8c84-4f33-8102-f67d7ce2927a",
      "title": "Ellis County Commission to hear report on housing incentives",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun planned to request about $800 from opioid settlement funds for fentanyl/opioid-overdose death investigation training travel costs."
      ]
    },
    {
      "id": "s-marshall-border-release-2025",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-visits-southern-border-alongside-kansas-law-enforcement-officials/",
      "title": "Senator Marshall Visits Southern Border Alongside Kansas Law Enforcement Officials",
      "publisher": "U.S. Senator Roger Marshall",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Release lists Braun among Kansas law-enforcement officials who visited the Arizona-Mexico border.",
        "Release identifies Braun as Ellis County Sheriff and Kansas Sheriffs' Association President.",
        "Release includes Braun-attributed statement tying border security to narcotics and human trafficking affecting Kansas.",
        "Observed public online activity mapped to ICE Detainers / Immigration Enforcement."
      ]
    },
    {
      "id": "s-hayspost-crisis-funding-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fbac2993-56a7-4ebb-b494-5a194944d2c2",
      "title": "Ellis County Commission tentatively agrees to raise tax rate by 1 mill",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun said Ellis County Jail is not best equipped for individuals with mental-health issues.",
        "Braun said High Plains crisis-intervention facility would help the sheriff's office and other local law-enforcement agencies."
      ]
    },
    {
      "id": "s-hayspost-ice-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
      "title": "Ellis County Sheriff explains agreement with ICE",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Braun explained Ellis County's ICE memorandum and 48-hour hold limit.",
        "Braun said holds apply to people already incarcerated on local charges.",
        "Braun said sheriff's officers are not trained for, and would not conduct, street-level immigration investigations.",
        "Observed public online activity mapped to ICE Detainers / Immigration Enforcement."
      ]
    },
    {
      "id": "s-hayspost-hb2771-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/69131eb8-04ac-4b1d-9561-e24c9309ad07",
      "title": "Ellis County Sheriff supports bill on ICE detainers, liability protections",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reports Braun testified on HB 2771 before House Federal and State Affairs on Feb. 25, 2026.",
        "Braun framed the bill around ICE-detainer liability, funding risk, county protection, and taxpayer protection.",
        "Observed public online activity mapped to ICE Detainers / Immigration Enforcement."
      ]
    },
    {
      "id": "s-linkedin-braun",
      "tier": "social",
      "url": "https://www.linkedin.com/in/scott-braun-cpm-62833366",
      "title": "Scott Braun, CPM",
      "publisher": "LinkedIn",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile lists Ellis County Sheriff role and Fort Hays State University.",
        "Profile lists Heartland Certified Public Manager, FBI-LEEDA credentials, KSA leadership, civic roles, and visible likes."
      ]
    },
    {
      "id": "s-ksa-ellis-listing",
      "tier": "secondary",
      "url": "https://www.kansassheriffs.org/county_map/county/914",
      "title": "Ellis County Sheriff Listing",
      "publisher": "Kansas Sheriffs' Association",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KSA listing connects Scott Braun to Ellis County sheriff office."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SCOTT_BRAUN_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[scott-braun.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
