/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const AARON_CUNNINGHAM_V2: CandidateFullV2 = {
  "slug": "aaron-cunningham",
  "name": "Aaron Cunningham",
  "party": "R",
  "position": "Ellis County Attorney",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "County Attorney / Attorney",
  "hometown": "Hays, Kansas",
  "education": "2012 Hays High School graduate (born/raised in Hays)",
  "issues": [
    {
      "id": "i-official-status-office-scope",
      "title": "Official Status and Office Scope",
      "stated": {
        "text": "Cunningham is the current Ellis County Attorney, listed by the county as serving from 2025 to present. County attorneys serve four-year terms under Kansas law, and Ellis County's current 2026 filing list does not include County Attorney, so this is an off-cycle incumbent profile rather than a 2026 ballot race.",
        "sourceIds": [
          "s-ellis-attorney-page",
          "s-ellis-staff-directory",
          "s-ks-statute-19-701",
          "s-ellis-candidate-filings-page",
          "s-ellis-2026-candidate-filings-pdf"
        ]
      },
      "actions": [
        {
          "id": "ae-status-2024-election",
          "date": "2024-11-05",
          "body": "Won the 2024 Ellis County Attorney race as the Republican candidate; readable result copies show 11,379 votes for Cunningham and 146 write-ins.",
          "sourceIds": [
            "s-ellis-election-results-page",
            "s-ellis-2024-official-results-pdf",
            "s-ike-lab-2024-results"
          ]
        },
        {
          "id": "ae-status-2026-filing-check",
          "date": "2026-05-19",
          "body": "Checked Ellis County's current 2026 candidate filings; County Attorney is not listed as a filing position.",
          "sourceIds": [
            "s-ellis-candidate-filings-page",
            "s-ellis-2026-candidate-filings-pdf"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Cunningham's public footprint is thin on campaign social media and stronger in official/professional pages and attributed news coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-aboutme-local-harvest"
          ],
          "mappedToIssueId": "i-official-status-office-scope"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "His clearest policy interview is the February 17, 2025 Hays Post profile after he took office. He said he returned to Hays to serve his hometown, described hundreds of likely backlogged cases, said the office usually had four attorneys handling about 1,500 law-enforcement reports per year, and announced a return to marijuana and hemp-derived THC enforcement under Kansas law. (Hays Post)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2025-profile"
          ],
          "mappedToIssueId": "i-official-status-office-scope"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "No campaign website surfaced. The project data's current campaignWebsite value is unrelated to Cunningham and was rejected after checking official county and public sources.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-aboutme-local-harvest"
          ],
          "mappedToIssueId": "i-official-status-office-scope"
        }
      ],
      "gap": {
        "summary": "The official 2024 results PDF is image-based and did not text-extract locally; use the official PDF as the source path and readable IKE Lab/search-OCR result text for vote totals until OCR is produced.",
        "evidenceIds": [
          "ae-status-2024-election"
        ]
      }
    },
    {
      "id": "i-role-of-county-attorney-enforcement",
      "title": "Role of the County Attorney and Law Enforcement",
      "stated": {
        "text": "Cunningham frames the county attorney's role as enforcing Kansas law as written rather than deciding which laws should exist. In his clearest public interview, he said the Legislature decides what is criminal and that he does not choose which laws matter.",
        "sourceIds": [
          "s-hayspost-2025-profile"
        ]
      },
      "actions": [
        {
          "id": "ae-official-priority-list",
          "date": "2025-2026",
          "body": "The official county attorney page sets the office priority order around deaths, child victims including CINC cases, sex crimes, violent person crimes, property crimes, and drug distribution crimes, with goals of prosecuting as many cases as possible and maximizing efficiency.",
          "sourceIds": [
            "s-ellis-attorney-page",
            "s-ellis-2025-budget-book"
          ]
        },
        {
          "id": "ae-harwick-sentencing",
          "date": "2026-03-26",
          "body": "In a criminal-threat/aggravated-assault sentencing case, Cunningham opposed probation and argued that private retaliation should not replace established investigative and court systems.",
          "sourceIds": [
            "s-hayspost-2026-threats-sentencing"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "That same interview gives the main public tension in his message: strict law enforcement, but limited resources and some space for treatment. He said the Legislature decides what is criminal and that he must enforce the law as written; he also said a person stopped with only a marijuana pipe on the interstate might not be prosecuted if not an imminent local threat. He said Recovery Court, treatment, and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2025-profile"
          ],
          "mappedToIssueId": "i-role-of-county-attorney-enforcement"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Public case coverage shows him emphasizing systems, victims, and consequences. In March 2026 sentencing coverage, Hays Post reported that Cunningham argued against probation in a criminal-threat/aggravated-assault case and warned that vigilante action would signal people could bypass established investigative and court systems. (Hays Post)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2026-threats-sentencing"
          ],
          "mappedToIssueId": "i-role-of-county-attorney-enforcement"
        },
        {
          "id": "ss-crossref-5",
          "platform": "KWCH",
          "observation": "He also appears in public safety and victim-focused community contexts. HaysMed listed him as a panelist in a June 27, 2025 human-trafficking awareness luncheon with HaysMed, police, and a retired KBI agent. (HaysMed) KWCH reported in February 2026 that Cunningham confirmed a second-degree murder conviction in an infant methamphetamine-overdose case. (KWCH)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-haysmed-human-trafficking-panel"
          ],
          "mappedToIssueId": "i-role-of-county-attorney-enforcement"
        }
      ],
      "gap": {
        "summary": "Cunningham has no legislative voting record; issue evidence is official office text, county records, and attributed prosecutor statements.",
        "evidenceIds": [
          "ae-official-priority-list"
        ]
      }
    },
    {
      "id": "i-marijuana-thc-drug-enforcement",
      "title": "Marijuana, THC, and Drug Enforcement",
      "stated": {
        "text": "Cunningham said he would resume charging some marijuana cases that his predecessor had not filed and would consider filing charges involving hemp-derived products such as Delta-8 and Delta-10. He tied that posture to Kansas law, while also acknowledging that limited resources require case triage.",
        "sourceIds": [
          "s-hayspost-2025-profile"
        ]
      },
      "actions": [
        {
          "id": "ae-resumed-marijuana-charging",
          "date": "2025-02-17",
          "body": "Hays Post reported Cunningham would resume charging pot cases after the prior office had not filed certain small-possession cases.",
          "sourceIds": [
            "s-hayspost-2025-profile"
          ]
        },
        {
          "id": "ae-thc-attribution-correction",
          "date": "2026-05-19",
          "body": "Source review separated Cunningham's 2025 Delta-8/Delta-10 statement from Robert Anderson's 2022 Delta-8 warning to local businesses.",
          "sourceIds": [
            "s-hayspost-2025-profile",
            "s-hayspost-2022-delta8-anderson"
          ]
        },
        {
          "id": "ae-infant-overdose-conviction",
          "date": "2026-02-11",
          "body": "KWCH reported Cunningham confirmed a second-degree murder conviction connected to an infant methamphetamine-overdose death.",
          "sourceIds": [
            "s-kwch-2026-infant-overdose-conviction"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "IKE Lab 2024 general-election results: 11,379 votes for Cunningham, 146 write-ins. (source) 10. Hays Post July 2024 jail story: sheriff's public expectation that Cunningham would be \"a little bit harder\" as incoming county attorney. (source) 11. Hays Post February 2025 profile: marijuana prosecution, case priorities, attorney shortage, victim/witness coordination, treatment/mental-health comments. (source) 12.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ike-lab-2024-results"
          ],
          "mappedToIssueId": "i-marijuana-thc-drug-enforcement"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "His most direct issue messaging came after he took office. In a February 2025 Hays Post profile, Cunningham described the job as a return to his hometown and said he inherited likely hundreds of backlogged cases. He emphasized that Kansas law, not his personal preference, decides what is criminal, and he announced that the office would resume marijuana and hemp-derived THC enforcement that had been paused or...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2025-profile"
          ],
          "mappedToIssueId": "i-marijuana-thc-drug-enforcement"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "That same interview also shows his limits-and-triage message. Cunningham said the office receives about 1,500 reports a year from seven law-enforcement agencies and does not have enough attorneys to prosecute everything. He described prioritizing deaths, crimes against children, sex crimes, violent crimes, property crimes, and drug distribution, while noting that a minor marijuana-pipe stop involving a nonlocal...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2025-profile"
          ],
          "mappedToIssueId": "i-marijuana-thc-drug-enforcement"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled social posts about drug policy were captured. The public record comes from official office text and news interviews/case coverage.",
        "evidenceIds": [
          "ae-resumed-marijuana-charging"
        ]
      }
    },
    {
      "id": "i-office-capacity-case-prioritization",
      "title": "Office Capacity and Case Prioritization",
      "stated": {
        "text": "Cunningham has said the office cannot prosecute everything with the resources it has. He described likely hundreds of remaining backlogged cases, four attorneys handling about 1,500 law-enforcement reports from seven agencies, and a need to prioritize serious cases.",
        "sourceIds": [
          "s-hayspost-2025-profile",
          "s-ellis-attorney-page"
        ]
      },
      "actions": [
        {
          "id": "ae-2025-budget-book-staffing",
          "date": "2025",
          "body": "Ellis County's 2025 budget book lists the Attorney department at 10 positions, including the County Attorney, three assistant county attorneys, and a Victim/Witness Coordinator.",
          "sourceIds": [
            "s-ellis-2025-budget-book"
          ]
        },
        {
          "id": "ae-2026-budget-presentation",
          "date": "2025-07-21",
          "body": "Cunningham presented the County Attorney budget, told commissioners the office had enough staff to keep everyone busy, said attorneys drive efficiency, and discussed appeals costs, felony convictions being up, loss of the victim coordinator, and possible cybercrime expertise needs.",
          "sourceIds": [
            "s-ellis-jul-2025-budget-minutes"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "No candidate-controlled public messaging was found on abortion, guns, immigration, Donald Trump, Joe Biden, national partisan identity, LGBTQ issues, school curriculum, or election fraud. The visible record is almost entirely local and professional: prosecution, Kansas law, public safety, victims, office capacity, rural attorney shortages, treatment/mental-health tradeoffs, faith identity, and Hays biography.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-aboutme-local-harvest"
          ],
          "mappedToIssueId": "i-office-capacity-case-prioritization"
        },
        {
          "id": "ss-crossref-3",
          "platform": "ellisco.net",
          "observation": "Cunningham's accessible public message is not built around a campaign website or a campaign social feed. The official Ellis County Attorney page is the clearest current source: it lists Aaron J. Cunningham as county attorney from 2025 to present and frames the office around enforcing Kansas law, public safety, truth-seeking, fair and impartial justice, and efficient use of taxpayer resources. Its stated...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-attorney-page"
          ],
          "mappedToIssueId": "i-office-capacity-case-prioritization"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Rural legal capacity is a recurring professional theme. Kansas Courts lists Cunningham, attorney, Hays, on the Kansas Rural Justice Initiative Committee roster, and the final report search result identifies him as a newer-attorney panelist during a Dodge City listening session. In the Hays Post profile, he connected the shortage of rural attorneys and qualified defense counsel to slower cases, longer jail waits,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-office-capacity-case-prioritization"
        }
      ],
      "gap": {
        "summary": "The record does not include a full case-by-case filing dataset, so the profile should not quantify prosecution changes beyond the public statements and minutes.",
        "evidenceIds": [
          "ae-2025-budget-book-staffing"
        ]
      }
    },
    {
      "id": "i-victims-public-safety-treatment",
      "title": "Victims, Public Safety, and Treatment",
      "stated": {
        "text": "Cunningham pairs enforcement language with victim-services and treatment language. He publicly praised the Victim/Witness Coordinator, described victim communication and restitution work, and said Recovery Court, treatment, and mental-health care have value.",
        "sourceIds": [
          "s-hayspost-2025-profile",
          "s-ellis-victim-info"
        ]
      },
      "actions": [
        {
          "id": "ae-victim-witness-coordinator",
          "date": "2025-01",
          "body": "As newly elected county attorney, Cunningham asked commissioners to approve a Victim Witness Coordinator job description; the commission approved it 3-0.",
          "sourceIds": [
            "s-ellis-jan-2025-agenda-packet"
          ]
        },
        {
          "id": "ae-victim-info-page",
          "date": "2026-05-19",
          "body": "The official Victim Information page states that the office notifies victims of hearings, handles restitution requests, and receives law-enforcement reports for charging review.",
          "sourceIds": [
            "s-ellis-victim-info"
          ]
        },
        {
          "id": "ae-human-trafficking-panel",
          "date": "2025-06-27",
          "body": "HaysMed listed Cunningham as a human-trafficking awareness panel participant with medical, law-enforcement, and retired KBI participants.",
          "sourceIds": [
            "s-haysmed-human-trafficking-panel"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "The July 2025 budget minutes say the office was losing the victim coordinator position; later status of that position was not confirmed in this pass.",
        "evidenceIds": [
          "ae-victim-witness-coordinator"
        ]
      }
    },
    {
      "id": "i-rural-legal-workforce",
      "title": "Rural Legal Workforce and Court Delay",
      "stated": {
        "text": "Cunningham has described the shortage of prosecutors and qualified defense attorneys as a practical barrier in rural Kansas. He connected attorney scarcity to slower cases, scheduling difficulty, jail waits, and pressure on defendants and courts.",
        "sourceIds": [
          "s-hayspost-2025-profile"
        ]
      },
      "actions": [
        {
          "id": "ae-public-shortage-comments",
          "date": "2025-02-17",
          "body": "In the Hays Post profile, Cunningham said Kansas is not producing enough attorneys or doing enough to incentivize them to stay in the state or go rural, and said only a small number of western Kansas attorneys qualify for upper-level felony defense.",
          "sourceIds": [
            "s-hayspost-2025-profile"
          ]
        },
        {
          "id": "ae-hays-high-career-path",
          "date": "2019-10-26",
          "body": "The Guidon reported Cunningham telling students he was drawn to law through writing, advocacy, justice, and helping victims.",
          "sourceIds": [
            "s-guidon-2019-career-speaker"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-aboutme-profile-metadata",
          "platform": "about.me",
          "observation": "Existing local harvest reported a candidate/profile-controlled page with Hays/Kansas education metadata, Christian/Calvinist self-description, and X handle Sinfonian24601. Because current search did not return a crawlable matching page, use only as profile metadata unless recaptured.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-aboutme-local-harvest"
          ],
          "mappedToIssueId": "i-rural-legal-workforce"
        },
        {
          "id": "ss-linkedin-profile-metadata",
          "platform": "LinkedIn",
          "observation": "Existing local harvest reported a matching LinkedIn preview with Kansas State University, Washburn University School of Law, and Hays work history, but no public activity feed.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-linkedin-local-harvest"
          ],
          "mappedToIssueId": "i-rural-legal-workforce"
        }
      ],
      "gap": {
        "summary": "No current candidate-controlled platform posts about rural legal workforce issues were captured; public evidence comes from interview and professional/biographical sources.",
        "evidenceIds": [
          "ae-public-shortage-comments"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Cunningham does describe himself publicly in explicitly Christian terms on his about.me page, including references to God's sovereignty and Christ's salvation, but the source material does not tie him to a current church.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "No itemized donor table, campaign committee report, total raised, total spent, treasurer filing, or committee balance was found in accessible online sources for Cunningham's 2024 county-attorney race. KPDC's public campaign-finance data landing page did not expose a county-attorney race grouping in the visible form, and targeted Ellis County searches did not surface local campaign-finance reports.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Campaign Finance Data"
  },
  "sources": [
    {
      "id": "s-ellis-attorney-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/92/Attorney",
      "title": "Attorney",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Aaron J. Cunningham is listed as Ellis County Attorney (2025-present)",
        "The County Attorney's Office handles misdemeanor and felony criminal prosecution, alcohol/drug care and treatment cases, child-in-need-of-care cases, traffic violations, juvenile offender cases, and mental-illness matters",
        "Office priorities include deaths, child victims including CINC cases, sex crimes, violent person crimes, property crimes, drug distribution crimes, effective prosecution, and office efficiency for taxpayers",
        "Observed public online activity mapped to Office Capacity and Case Prioritization."
      ]
    },
    {
      "id": "s-ellis-staff-directory",
      "tier": "primary",
      "url": "https://www.ellisco.net/directory.aspx?eid=101",
      "title": "Staff Directory - Aaron Cunningham",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Staff directory lists Aaron Cunningham with the title Ellis County Attorney"
      ]
    },
    {
      "id": "s-ks-statute-19-701",
      "tier": "primary",
      "url": "https://kslegislature.gov/li_2020/s/statute/019_000_0000_chapter/019_007_0000_article/019_007_0001_section/019_007_0001_k.pdf",
      "title": "K.S.A. 19-701 - County attorney; election, term, bond; qualifications",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "County attorneys are elected for four-year terms unless otherwise provided by law",
        "County attorney candidates must be admitted to practice law in Kansas"
      ]
    },
    {
      "id": "s-ellis-election-results-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/435/Election-Results",
      "title": "Election Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County publishes the official source path for 2024 General Election Official Results"
      ]
    },
    {
      "id": "s-ellis-2024-official-results-pdf",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results",
      "title": "2024 General Election Official Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official Ellis County 2024 general-election results PDF is the primary source path for the County Attorney result",
        "PDF is image-based; local text extraction was blank, while web search/OCR showed Aaron J. Cunningham with 11,379 votes and write-ins with 146"
      ]
    },
    {
      "id": "s-ike-lab-2024-results",
      "tier": "secondary",
      "url": "https://www.ike-lab.com/complete_elex_2024_gen_cotwp_Ellis.html",
      "title": "Complete Ellis County 2024 General Election Results",
      "publisher": "IKE Lab",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Readable 2024 Ellis County result copy lists Aaron J. Cunningham (R) with 11,379 votes and write-ins with 146 in the County Attorney race",
        "Observed public online activity mapped to Marijuana, THC, and Drug Enforcement."
      ]
    },
    {
      "id": "s-ellis-candidate-filings-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Candidate Filings",
      "publisher": "Ellis County Clerk / Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Current county candidate-filings page links the 2026 Primary Election Candidates PDF"
      ]
    },
    {
      "id": "s-ellis-2026-candidate-filings-pdf",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings",
      "title": "2026 Primary Candidate Filings",
      "publisher": "Ellis County Clerk / Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026 filing PDF lists Commission District 1, township clerk offices, Ellis City Council, and precinct committee offices",
        "2026 filing PDF does not list County Attorney"
      ]
    },
    {
      "id": "s-ellis-2025-budget-book",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5645/2025-Budget-Book",
      "title": "Ellis County 2025 Budget Book",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "County officials section lists County Attorney Aaron Cunningham",
        "Attorney staffing table lists 10 positions including County Attorney, three Assistant County Attorneys, three Legal Assistants, Administrative Coordinator, Traffic Clerk, and Victim/Witness Coordinator",
        "Attorney budget section lists Responsible Party: Aaron Cunningham, County Attorney (elected by Ellis County voters)",
        "Attorney department proposed 2025 expenditure total is $1,160,716"
      ]
    },
    {
      "id": "s-ellis-jan-2025-agenda-packet",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_01212025-649",
      "title": "Ellis County Commission Agenda Packet - January 21, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "County Attorney Aaron Cunningham gave commissioners an update as newly elected county attorney",
        "Cunningham asked for approval of a Victim Witness Coordinator job description",
        "Commission approved the Victim Witness Coordinator job description 3-0"
      ]
    },
    {
      "id": "s-ellis-jul-2025-budget-minutes",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07212025-686",
      "title": "Ellis County Commission Minutes - July 21, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "County Attorney Aaron Cunningham presented the County Attorney budget",
        "Cunningham said the office had enough staff to keep everyone busy",
        "Cunningham said attorneys make a big impact on efficiencies",
        "Minutes say felony conviction numbers were up",
        "Discussion included appeals service agreements, losing the victim coordinator position, and potential future cybercrime expertise needs"
      ]
    },
    {
      "id": "s-ellis-victim-info",
      "tier": "primary",
      "url": "https://www.ellisco.net/119/Victim-Information",
      "title": "Victim Information",
      "publisher": "Ellis County Attorney's Office / Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Victims have a right to be notified and appear at public hearings involving the defendant",
        "The County Attorney's Office will make efforts to notify victims by phone/text, email, and/or mail",
        "After law enforcement investigates, reports go to the County Attorney's Office for review and charging decisions",
        "Victims can request restitution"
      ]
    },
    {
      "id": "s-hayspost-2025-profile",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "New Ellis County Attorney to resume charging pot cases; lack of attorneys still issue",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham returned to Hays to serve his hometown",
        "Cunningham ran unopposed and took office in January 2025",
        "Cunningham said the office likely still had hundreds of backlogged cases",
        "Cunningham said the office usually has four attorneys handling about 1,500 law-enforcement reports from seven agencies per year",
        "Cunningham said whether something is a crime is up to the Legislature and that he has an obligation to enforce the law as written",
        "Cunningham said he would consider filing charges on hemp-derived products such as Delta-8 and Delta-10",
        "Cunningham said resource limits mean case prioritization matters",
        "Cunningham praised the Victim/Witness Coordinator and discussed victim communication, restitution, impact statements, and court expectations",
        "Cunningham discussed rural attorney shortages, qualified defense-counsel shortages, and delays for incarcerated defendants",
        "Cunningham said he sees value in Recovery Court, treatment, mental-health care, and a holistic approach",
        "Observed public online activity mapped to Official Status and Office Scope.",
        "Observed public online activity mapped to Role of the County Attorney and Law Enforcement.",
        "Observed public online activity mapped to Marijuana, THC, and Drug Enforcement."
      ]
    },
    {
      "id": "s-hayspost-2022-delta8-anderson",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9397fb25-5dc6-4443-a340-6aae96abc594",
      "title": "Ellis Co. Attorney warns Delta-8 illegal; pulled from area stores",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Article concerns then-County Attorney Robert Anderson's Delta-8 warning, not a Cunningham action",
        "Useful only as local context for hemp-derived THC enforcement"
      ]
    },
    {
      "id": "s-hayspost-2026-threats-sentencing",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a5f579fa-6c33-44fd-921e-5a8435208d58",
      "title": "Ellis man sentenced to 2 years for threats",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham opposed probation in a criminal-threat/aggravated-assault case",
        "Cunningham argued against allowing the defendant to justify his actions based on allegations against another person",
        "Cunningham said probation would signal that people could take matters into their own hands rather than use established investigative and court systems",
        "Observed public online activity mapped to Role of the County Attorney and Law Enforcement."
      ]
    },
    {
      "id": "s-guidon-2019-career-speaker",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Assistant Ellis County Attorney Aaron Cunningham speaks to students about career in law",
      "publisher": "The Guidon Online",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cunningham was described as a 2012 Hays High graduate",
        "Cunningham earned a bachelor's degree from Kansas State University and attended Washburn law school",
        "Cunningham linked law to writing, advocacy, justice, servant-hearted practice, and helping victims"
      ]
    },
    {
      "id": "s-haysmed-human-trafficking-panel",
      "tier": "secondary",
      "url": "https://www.haysmed.com/haysmed-panel-sheds-light-on-human-trafficking-at-chamber-luncheon/",
      "title": "Panel Sheds Light on Human Trafficking at Chamber Luncheon",
      "publisher": "HaysMed",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HaysMed listed Ellis County Attorney Aaron Cunningham as a June 27, 2025 human-trafficking awareness panel participant",
        "Observed public online activity mapped to Role of the County Attorney and Law Enforcement."
      ]
    },
    {
      "id": "s-kwch-2026-infant-overdose-conviction",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/11/father-convicted-murder-approaching-2-years-after-hays-infants-fatal-meth-overdose/",
      "title": "Father convicted of murder approaching 2 years after Hays infant's fatal meth overdose",
      "publisher": "KWCH",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KWCH reported Cunningham confirmed a second-degree murder conviction in an infant methamphetamine-overdose case"
      ]
    },
    {
      "id": "s-aboutme-local-harvest",
      "tier": "social",
      "url": "https://about.me/aaron.cunningham",
      "title": "about.me profile",
      "publisher": "about.me",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Existing local harvest reported a candidate/profile-controlled page with Hays/Kansas education metadata, Christian/Calvinist self-description, and X handle Sinfonian24601",
        "Current targeted search did not return a crawlable matching page, so exact copy should be recaptured before quotation"
      ]
    },
    {
      "id": "s-linkedin-local-harvest",
      "tier": "social",
      "url": "https://www.linkedin.com/in/aaron-cunningham-653b3094",
      "title": "LinkedIn profile preview",
      "publisher": "LinkedIn",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Existing local harvest reported a matching LinkedIn preview with Kansas State University, Washburn University School of Law, and Hays work history",
        "No public activity feed was visible"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "primary",
      "url": "https://kscourts.gov/About-the-Courts/Court-Administration/Committees/Kansas-Rural-Justice-Initiative-Committee",
      "title": "Hays Post / Kscourts",
      "publisher": "Kscourts",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Office Capacity and Case Prioritization.",
        "Rural legal capacity is a recurring professional theme. Kansas Courts lists Cunningham, attorney, Hays, on the Kansas Rural Justice Initiative Committee roster, and the final repor"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(AARON_CUNNINGHAM_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[aaron-cunningham.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
