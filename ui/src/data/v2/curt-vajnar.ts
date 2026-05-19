/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CURT_VAJNAR_V2: CandidateFullV2 = {
  "slug": "curt-vajnar",
  "name": "Curt C. Vajnar",
  "party": "NP",
  "position": "Hays USD 489 Board of Education",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "USD 489 Board President",
  "religion": "Roman Catholic (Diocese of Salina)",
  "issues": [
    {
      "id": "i-official-status-election-cycle",
      "title": "Official Status / Election Cycle",
      "stated": {
        "text": "Vajnar is a current USD 489 Board President and current board member. He is not on a 2026 USD 489 ballot in the reviewed official sources; he won a 2025 regular-term at-large seat, and Kansas school-board elections run in odd-numbered years.",
        "sourceIds": [
          "s-usd489-members",
          "s-usd489-jan19-2026-minutes",
          "s-ellis-2025-filings",
          "s-ellis-2025-notice",
          "s-ellis-2025-results",
          "s-ellis-2026-filings",
          "s-ksrevisor-25-2018",
          "s-ksrevisor-72-713"
        ]
      },
      "actions": [
        {
          "id": "ae-status-2025-election",
          "date": "2025-11-04",
          "body": "Won one of three regular-term USD 489 Board of Education at-large seats with 2,549 official votes.",
          "sourceIds": [
            "s-ellis-2025-results"
          ]
        },
        {
          "id": "ae-status-president-2026",
          "date": "2026-01-19",
          "body": "Elected USD 489 BOE President on a 4-3 vote.",
          "sourceIds": [
            "s-usd489-jan19-2026-minutes"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "The clearest electoral attention signal is the 2025 result: Hays Post reported Vajnar was re-elected with 2,531 votes, the top total in the USD 489 race. Source: Hays Post, Nov. 5, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-election-unofficial"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2025 bond management: Vajnar supported looking into another bond-project manager, joining the losing side of a 3-4 vote, while Hays Post also reported his view that hiring one was late in the process. Source: Hays Post, Mar. 28, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-project-manager"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "No public candidate-controlled statements were found in the reviewed source set on abortion, national partisan politics, election administration, foreign policy, or most non-school-board state/federal issues.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-members"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        }
      ],
      "gap": {
        "summary": "USD 489's public member page leaves the Term field blank, so the exact term-end date is inferred from the 2025 regular-term election and Kansas four-year school-board term law rather than directly printed on the member page.",
        "evidenceIds": [
          "ae-status-2025-election"
        ]
      }
    },
    {
      "id": "i-bond-fiscal-oversight",
      "title": "Bond / Fiscal Oversight",
      "stated": {
        "text": "Vajnar's public record shows support for improved facilities paired with scrutiny of bond-management, contract-review, and taxpayer-accountability questions.",
        "sourceIds": [
          "s-hayspost-2021-profile",
          "s-hayspost-2025-qa",
          "s-hayspost-gmp",
          "s-hayspost-project-manager"
        ]
      },
      "actions": [
        {
          "id": "ae-gmp-no-2023",
          "date": "2023-10-04",
          "body": "Voted no on approving the Nabholz GMP contract as presented for Hays High/Roosevelt work; the motion carried.",
          "sourceIds": [
            "s-usd489-oct04-2023",
            "s-hayspost-gmp"
          ]
        },
        {
          "id": "ae-project-manager-2025",
          "date": "2025-03-24",
          "body": "Voted yes on a failed motion to look into hiring a project manager for the remainder of the bond under board supervision.",
          "sourceIds": [
            "s-usd489-mar24-2025-minutes",
            "s-hayspost-project-manager"
          ]
        },
        {
          "id": "ae-bond-contingency-2026",
          "date": "2026-01-19",
          "body": "Voted yes to return $101,708.87 in unallocated Hays Middle School project contingencies/allowances to remaining bond projects; motion carried 7-0.",
          "sourceIds": [
            "s-usd489-jan19-2026-minutes"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Harvest focus: candidate/profile-controlled or clearly candidate-attributed messaging from school-board Q&As, candidate forums, USD 489 board pages and meeting portal, public meeting/news coverage, student/local media, and visible campaign/social-platform absences.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-members"
          ],
          "mappedToIssueId": "i-bond-fiscal-oversight"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The strongest issue-attention signals are facility/bond coverage and the Golden Belt Bank naming-rights debate, which appeared in Hays Post and Tiger Media Network coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-members"
          ],
          "mappedToIssueId": "i-bond-fiscal-oversight"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2021 reason for running: Vajnar said he wanted the best possible education for all USD 489 students, including his own children in the district. Source: Hays Post, Oct. 5, 2021.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2021-profile"
          ],
          "mappedToIssueId": "i-bond-fiscal-oversight"
        }
      ],
      "gap": {
        "summary": "Official minutes confirm votes but do not capture all discussion detail; use Hays Post only for attributed explanations.",
        "evidenceIds": [
          "ae-gmp-no-2023"
        ]
      }
    },
    {
      "id": "i-transparency-board-process",
      "title": "Transparency / Board Process",
      "stated": {
        "text": "Vajnar has framed the board's role around policy, review, chain of command, and public accountability rather than daily administration.",
        "sourceIds": [
          "s-hayspost-2021-profile",
          "s-hayspost-2025-qa",
          "s-hayspost-2025-forum"
        ]
      },
      "actions": [
        {
          "id": "ae-hvac-table-2026",
          "date": "2026-01-19",
          "body": "Voted yes on tabling HVAC preventive-maintenance agreement updates until Feb. 9, 2026; motion carried 4-2.",
          "sourceIds": [
            "s-usd489-jan19-2026-minutes"
          ]
        },
        {
          "id": "ae-agenda-as-presented-2025",
          "date": "2025-08-18",
          "body": "Seconded and voted yes on approving the agenda as presented after a motion to add HHS football-field naming failed.",
          "sourceIds": [
            "s-usd489-aug18-2025-minutes"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2021 qualifications: He cited 31 years teaching in USD 489, Kansas Teacher of the Year, National Board Certification, and endorsements in agriculture education, biology, drivers education, and administration. Source: Hays Post, Oct. 5, 2021.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2021-profile"
          ],
          "mappedToIssueId": "i-transparency-board-process"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2021 public-education problems: He named teacher shortages and retention, COVID learning loss, curriculum, facility quality, and access to classrooms for educators. Source: Hays Post, Oct. 5, 2021.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2021-profile"
          ],
          "mappedToIssueId": "i-transparency-board-process"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2021 core belief: His decision test was whether a decision is best for USD 489 students. Source: Hays Post, Oct. 5, 2021.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2021-profile"
          ],
          "mappedToIssueId": "i-transparency-board-process"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled platform or full meeting-transcript archive was found; process claims rely on public Q&As and official action records.",
        "evidenceIds": [
          "ae-hvac-table-2026"
        ]
      }
    },
    {
      "id": "i-nepotism-hiring-ethics",
      "title": "Hiring / Nepotism Policy",
      "stated": {
        "text": "Vajnar has raised concerns about hiring-process scrutiny, including the 2023 dispute over hiring the superintendent's wife through personnel approval.",
        "sourceIds": [
          "s-usd489-apr24-2023",
          "s-hayspost-nepotism",
          "s-hayspost-2025-qa"
        ]
      },
      "actions": [
        {
          "id": "ae-personnel-no-2023",
          "date": "2023-04-24",
          "body": "Voted no on the personnel-transactions item that Hays Post reported included the superintendent's wife and prompted nepotism-policy debate; the item passed.",
          "sourceIds": [
            "s-usd489-apr24-2023",
            "s-hayspost-nepotism"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2023 nepotism debate: Hays Post reported Vajnar and Allen Park objected to hiring the superintendent's wife through routine personnel approval, prompting debate over the district nepotism policy. Source: Hays Post, Apr. 26, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-nepotism"
          ],
          "mappedToIssueId": "i-nepotism-hiring-ethics"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2024 iPad/graduation policy: Hays Post reported a graduation-policy revision was tabled because Vajnar wanted a list of electives that would meet the new STEM requirement. Source: Hays Post, Mar. 5, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-nepotism-hiring-ethics"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2025 naming-rights policy: Vajnar argued facility names belong to Hays citizens, said the offer was not enough for a 10-year term, and favored earmarking naming-rights revenue for field maintenance. Source: Hays Post, Sept. 11, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-naming-sept"
          ],
          "mappedToIssueId": "i-nepotism-hiring-ethics"
        }
      ],
      "gap": {
        "summary": "Official minutes show the personnel vote and names in the transaction list; Hays Post supplies the nepotism-policy context. Do not state motive beyond the reported objection.",
        "evidenceIds": [
          "ae-personnel-no-2023"
        ]
      }
    },
    {
      "id": "i-naming-rights-sponsorships",
      "title": "Naming Rights / Sponsorship Revenue",
      "stated": {
        "text": "Vajnar has argued that USD 489 should control naming-rights terms, consider value and competition, and avoid simply reacting to a first offer.",
        "sourceIds": [
          "s-usd489-aug18-2025-minutes",
          "s-tiger-naming",
          "s-hayspost-naming-sept",
          "s-hayspost-2025-forum"
        ]
      },
      "actions": [
        {
          "id": "ae-naming-agenda-no-2025",
          "date": "2025-08-18",
          "body": "Voted no on adding naming of the HHS football field to the agenda; that motion failed 3-3.",
          "sourceIds": [
            "s-usd489-aug18-2025-minutes",
            "s-tiger-naming"
          ]
        },
        {
          "id": "ae-naming-agenda-presented-2025",
          "date": "2025-08-18",
          "body": "Seconded and voted yes on approving the agenda as presented after the naming-rights addition failed.",
          "sourceIds": [
            "s-usd489-aug18-2025-minutes"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-naming-local-media",
          "platform": "Local/student media",
          "observation": "The naming-rights issue drew local online coverage from Tiger Media Network and Hays Post, preserving Vajnar-attributed comments even though no campaign-controlled social feed was found.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-tiger-naming",
            "s-hayspost-naming-sept"
          ],
          "mappedToIssueId": "i-naming-rights-sponsorships"
        }
      ],
      "gap": {
        "summary": "Official minutes anchor the agenda votes; Tiger Media Network and Hays Post supply the Golden Belt Bank context and candidate-attributed explanations.",
        "evidenceIds": [
          "ae-naming-agenda-no-2025"
        ]
      }
    },
    {
      "id": "i-teacher-retention-student-support",
      "title": "Teacher Retention / Student Support",
      "stated": {
        "text": "Vajnar has tied teacher recruitment and retention to competitive pay, class size, facilities, and student outcomes.",
        "sourceIds": [
          "s-hayspost-2021-profile",
          "s-hayspost-2025-qa",
          "s-hayspost-2025-forum"
        ]
      },
      "actions": [
        {
          "id": "ae-felten-support-2026",
          "date": "2026-01-19",
          "body": "Voted yes on approving a Student Support Specialist position at Felten Elementary starting in the 2026-27 school year; motion carried 6-1.",
          "sourceIds": [
            "s-usd489-jan19-2026-minutes"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "The strongest retention evidence is candidate-attributed Q&A/forum text rather than a full itemized voting record on teacher pay.",
        "evidenceIds": [
          "ae-felten-support-2026"
        ]
      }
    },
    {
      "id": "i-school-safety-operations-curriculum",
      "title": "Safety / Operations / Practical Curriculum",
      "stated": {
        "text": "Vajnar's public comments favor practical operational decisions, including SRO coverage, safer transportation, researched device purchases, and real-world learning.",
        "sourceIds": [
          "s-hayspost-2025-qa",
          "s-hayspost-2025-forum"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "recordSummary": "USD 489 Board President",
  "ownWordsNarrative": "status: no_verified_candidate_controlled_social_feed; checked: Campaign website; Facebook; X/Twitter; Instagram; Threads; Bluesky; TikTok; Substack; LinkedIn; YouTube; USD 489 official portal; Hays Post; Tiger Media Network; relevance: Use official portal and local reporting as online-source evidence; do not create issue claims from unverified profiles or platform absence.; sourceIds: s-usd489-members; s-hayspost-2025-qa; s-tiger-naming",
  "whereTheyWorship": "Vajnar is publicly identified with Our Lady, Help of Christians Catholic Church in Antonino, where the source record says he has served on the parish council. Church website: https://www.ihm-church.com/.",
  "campaignFinance": {
    "totalRaised": "No online donor list, campaign-finance report, affidavit of exemption, or treasurer appointment for Vajnar was found. Kansas SOS Election Standards point most local school-board campaign reports to the county election officer when reportable, while KPDC's central local coverage does not include ordinary USD 489 school board races.",
    "narrative": "No online donor list, campaign-finance report, affidavit of exemption, or treasurer appointment for Vajnar was found. Kansas SOS Election Standards point most local school-board campaign reports to the county election officer when reportable, while KPDC's central local coverage does not include ordinary USD 489 school board races.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Kansas Election Standards - Chapter IV, Candidates"
  },
  "sources": [
    {
      "id": "s-usd489-members",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
      "title": "Hays USD 489 public portal - Members",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Curt Vajnar is listed as Board President",
        "Curt Vajnar is listed among members for board retreat, regular meeting, special board meeting, and work session records",
        "The public Term field for Curt Vajnar is blank"
      ]
    },
    {
      "id": "s-usd489-jan19-2026-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/92cb04a6-52e1-4e26-a3a5-f9d6ebaa6e4e",
      "title": "Regular Meeting - Jan. 19, 2026 - Minutes",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vajnar was elected BOE President 4-3",
        "Vajnar voted yes on returning $101,708.87 in Hays Middle School project contingencies/allowances to remaining bond projects",
        "Vajnar voted yes on tabling HVAC preventive-maintenance agreement updates until Feb. 9, 2026",
        "Vajnar voted yes on a Felten Elementary Student Support Specialist position"
      ]
    },
    {
      "id": "s-usd489-oct04-2023",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/4829/File.html?handle=A0DFBF6EDEF046AC8AEE014F8DBA33CC",
      "title": "Special Board Meeting - Oct. 4, 2023 - Meeting output",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The Nabholz GMP contract motion passed",
        "Vajnar voted no on the Nabholz GMP contract"
      ]
    },
    {
      "id": "s-usd489-apr24-2023",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/5247/File.html?handle=60377C16A47E41CD9EC1D888C53D7FBA",
      "title": "Regular Meeting - Apr. 24, 2023 - Meeting output",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Personnel transactions passed",
        "Vajnar and Allen Park voted no on the personnel-transactions item"
      ]
    },
    {
      "id": "s-usd489-mar24-2025-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/58b62a8d-8fc5-4292-9392-8a873dcee103",
      "title": "Regular Meeting - Mar. 24, 2025 - Minutes",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Motion to look into hiring a project manager for the remainder of the bond failed 3-4",
        "Vajnar voted yes on looking into hiring a project manager"
      ]
    },
    {
      "id": "s-usd489-aug18-2025-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/c09e2d70-0e67-423b-a08c-34ec0406fbf4",
      "title": "Regular Meeting - Aug. 18, 2025 - Minutes",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Motion to add naming the HHS football field to the agenda failed 3-3",
        "Vajnar voted no on adding the naming item",
        "Vajnar seconded and voted yes on approving the agenda as presented"
      ]
    },
    {
      "id": "s-ellis-2025-filings",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5736/2025-Candidate-Filings",
      "title": "2025 City/School/Improvement District/Extension Candidate Filings",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Curt C. Vajnar is listed under USD 489 - 3 at-large positions"
      ]
    },
    {
      "id": "s-ellis-2025-notice",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5814/Notice-of-Election-with-Names-489",
      "title": "Notice of General School Election - Unified School District 489",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Nov. 4, 2025 general school election included USD 489 Board of Education member regular term, vote for three",
        "Curt C. Vajnar was listed as a candidate"
      ]
    },
    {
      "id": "s-ellis-2025-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5892/Official-Results-2025-General-Election",
      "title": "Official Results - 2025 General Election",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Curt C. Vajnar received 2,549 votes for USD 489 Board of Education member",
        "Ken Brooks and Craig Pallister each received 1,962 votes",
        "Vote for three regular-term USD 489 seats"
      ]
    },
    {
      "id": "s-ellis-2026-filings",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Candidate Filings",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County links a 2026 Primary Election Candidates PDF",
        "The 2026 PDF lists county/party offices and does not list USD 489 board seats"
      ]
    },
    {
      "id": "s-ksrevisor-25-2018",
      "tier": "primary",
      "url": "https://www.ksrevisor.gov/statutes/chapters/ch25/025_020_0018.html",
      "title": "K.S.A. 25-2018",
      "publisher": "Kansas Revisor of Statutes",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "School-board election notices are published in odd-numbered years"
      ]
    },
    {
      "id": "s-ksrevisor-72-713",
      "tier": "primary",
      "url": "https://ksrevisor.gov/statutes/chapters/ch72/072_007_0013.html",
      "title": "K.S.A. 72-713",
      "publisher": "Kansas Revisor of Statutes",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Thereafter at school elections in odd-numbered years board members are elected to serve four-year terms"
      ]
    },
    {
      "id": "s-hayspost-2021-profile",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a",
      "title": "USD 489 Candidate Profile: Curt Vajnar",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vajnar described 31 years teaching in USD 489 and Kansas Teacher of the Year recognition",
        "Vajnar identified teacher shortages/retention, COVID learning loss, curriculum, facility quality, and educator classroom access as concerns",
        "Vajnar said his decision test was whether a decision is best for USD 489 students",
        "Vajnar supported improving facilities and passing a bond",
        "Observed public online activity mapped to Bond / Fiscal Oversight.",
        "Observed public online activity mapped to Transparency / Board Process."
      ]
    },
    {
      "id": "s-hayspost-2025-qa",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8",
      "title": "Hays USD candidate Q&A: Curt Vajnar",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vajnar said he ran again to keep good things going, finish improved facilities, and support teachers",
        "Vajnar discussed teacher pay, taxes, fixed-income residents, and class size as tradeoffs",
        "Vajnar said he helped push for the first SRO and would continue pushing for a second",
        "Vajnar discussed vehicle leasing, laptop decision-making, and hiring process questions"
      ]
    },
    {
      "id": "s-hayspost-2025-forum",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e326ecf7-cf47-4f86-8ab8-57f7169f8536",
      "title": "Hays USD candidates answer questions at forum",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Forum coverage reports Vajnar supported a full-time grant writer",
        "Forum coverage reports Vajnar discussed sponsorships/naming rights",
        "Forum coverage reports Vajnar described district chain of command and board discussion among different perspectives"
      ]
    },
    {
      "id": "s-hayspost-nepotism",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
      "title": "USD 489 BOE debates nepotism again",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Vajnar and Allen Park objected to hiring the superintendent's wife through the personnel process",
        "The article framed the discussion as another debate over district nepotism policy",
        "Observed public online activity mapped to Hiring / Nepotism Policy."
      ]
    },
    {
      "id": "s-hayspost-gmp",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
      "title": "Hays school board approves HHS, Roosevelt contract; discussion heated",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Vajnar's explanation for opposing the HHS/Roosevelt GMP contract"
      ]
    },
    {
      "id": "s-hayspost-project-manager",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "Hays USD 489 board votes not to add another manager for bond work",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported the failed bond-project-manager vote and quoted Vajnar/others on fiscal accountability, trust, and timing",
        "Observed public online activity mapped to Official Status / Election Cycle."
      ]
    },
    {
      "id": "s-tiger-naming",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=88429",
      "title": "USD 489 receives offer for football field naming rights",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Tiger Media Network reported Golden Belt Bank offered to buy naming rights for the new Hays High football field",
        "Tiger reported Vajnar said he removed and rescheduled the offer for later discussion",
        "Tiger quoted Vajnar saying the district should be in charge of naming and supporting businesses should have an opportunity"
      ]
    },
    {
      "id": "s-hayspost-naming-sept",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/aefb9f40-2e86-4bb2-976e-2f731e7ce14f",
      "title": "Hays USD 489 delays football-field naming decision",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported additional naming-rights discussion and postponement",
        "Hays Post attributed comments to Vajnar about facility names belonging to Hays citizens, offer value, and maintenance earmarking",
        "Observed public online activity mapped to Hiring / Nepotism Policy."
      ]
    },
    {
      "id": "s-hayspost-election-unofficial",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
      "title": "3 veterans elected to Hays USD 489 school board",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Vajnar was re-elected and described him as current president",
        "Hays Post reported unofficial 2,531 vote total, which conflicts with official Ellis County 2,549 total",
        "Observed public online activity mapped to Official Status / Election Cycle."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4186bd0a-c7d1-4fe4-8622-6b0204fed740",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Hiring / Nepotism Policy.",
        "2024 iPad/graduation policy: Hays Post reported a graduation-policy revision was tabled because Vajnar wanted a list of electives that would meet the new STEM requirement. Source: "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CURT_VAJNAR_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[curt-vajnar.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
