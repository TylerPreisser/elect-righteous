/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const PAT_PROCTOR_V2: CandidateFullV2 = {
  "slug": "pat-proctor",
  "name": "Pat Proctor",
  "party": "R",
  "position": "Kansas Secretary of State",
  "electionSlug": "kansas-sos-2026",
  "incumbent": false,
  "occupation": "Kansas House of Representatives, District 41 (Leavenworth) -- assumed January 11, 2021",
  "hometown": "Historic Leavenworth, KS",
  "family": "Aree Proctor",
  "campaignWebsite": "https://patproctor4ks.com/",
  "issues": [
    {
      "id": "election-administration-voter-eligibility",
      "title": "Election Administration / Voter Eligibility",
      "stated": {
        "text": "Proctor's campaign centers the Secretary of State race on restoring confidence in Kansas elections. His campaign says the office's election duty is securing and accurately executing elections, and says his legislative work has included only U.S. citizens voting, Election Day as the deadline for casting ballots, and stronger paper audits.",
        "sourceIds": [
          "s-campaign-home",
          "s-leg-profile"
        ]
      },
      "actions": [
        {
          "id": "action-hcr5004-sponsor-vote",
          "date": "2025-02-05",
          "body": "Sponsored and voted yea on HCR 5004, the constitutional amendment proposal requiring Kansas voters to be U.S. citizens, at least 18, and residents of the voting area.",
          "sourceIds": [
            "s-hcr5004",
            "s-hcr5004-votes",
            "s-proctor-2025-vote-record"
          ]
        },
        {
          "id": "action-hb2453-advance-voting",
          "date": "2026-02-18",
          "body": "Voted yea on HB 2453, which would have moved advance-ballot application, in-person advance voting, ballot-transmittal, and voter-registration deadlines. The bill passed the House and died in Senate committee.",
          "sourceIds": [
            "s-hb2453",
            "s-hb2453-history",
            "s-hb2453-rollcall"
          ]
        },
        {
          "id": "action-eac-board",
          "date": "2026-02-24",
          "body": "Listed on the U.S. Election Assistance Commission Board of Advisors roster as a National Conference of State Legislatures designee from the Kansas House.",
          "sourceIds": [
            "s-eac-board",
            "s-eac-roster-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-women-voters-comment",
          "platform": "public video / secondary report",
          "observation": "Kansas Reflector reported Proctor's public remarks about 20- to 30-year-old women voters in the August 2022 election and also reported his later statement that the video was cut to misrepresent him. Present both the quote and response if used.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-reflector-ballot-harvesting"
          ],
          "mappedToIssueId": "election-administration-voter-eligibility"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "Across the harvested public record on X (@RealPatProctor), Facebook (@PatProctorKS), YouTube (Pat Proctor for Kansas), and Instagram (@patproctor4ks), Proctor's dominant topic is election administration.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "election-administration-voter-eligibility"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Instagram",
          "observation": "The same phrase recurs across every platform: his Instagram bio reads \"Fighting to restore confidence in our elections,\" his Facebook page lists him as \"fighting to restore confidence in our elections,\" and his April 2025 campaign-launch YouTube video opens with the line \"Job one is restoring confidence in our elections.\" A second recurring frame is foreign money in Kansas elections. On May 6, 2025, Proctor...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "election-administration-voter-eligibility"
        }
      ],
      "gap": {
        "summary": "The record strongly supports Proctor's focus on stricter election rules. The public voter-access implications should be described through bill text, vote history, and stated rationale rather than inferred motives.",
        "evidenceIds": [
          "action-hcr5004-sponsor-vote"
        ]
      }
    },
    {
      "id": "constitutional-amendment-campaign-finance",
      "title": "Campaign Finance / Foreign Money in Ballot Measures",
      "stated": {
        "text": "Proctor's campaign frames election security as including threats from foreign and domestic actors. His public messaging and legislative record connect that concern to constitutional-amendment campaign finance and outside funding.",
        "sourceIds": [
          "s-campaign-home",
          "s-hb2106"
        ]
      },
      "actions": [
        {
          "id": "action-hb2106-foreign-national-ban",
          "date": "2025-04-10",
          "body": "As House Elections chair, advanced a committee-sponsored bill banning foreign-national contributions in Kansas constitutional-amendment campaigns; he voted yea, the House passed it 94-25, the Senate passed it 39-0, and it became law without the governor's signature.",
          "sourceIds": [
            "s-hb2106",
            "s-hb2106-votes",
            "s-proctor-2025-vote-record"
          ]
        },
        {
          "id": "action-campaign-contrib-transparency-committee",
          "date": "2026-05-19",
          "body": "Kansas Legislature lists Proctor as vice chair of the 2025 Special Committee on Campaign Contributions and Transparency.",
          "sourceIds": [
            "s-leg-profile"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-foreign-funding-rhetoric",
          "platform": "X / campaign email / prior local harvest",
          "observation": "Prior local harvest captured Proctor language accusing advocacy groups involved in election-law and constitutional-amendment fights of using money from George Soros and foreign billionaires. Map this signal to campaign-finance and ballot-measure funding, not to a standalone abortion-policy card.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-reflector-ballot-harvesting"
          ],
          "mappedToIssueId": "constitutional-amendment-campaign-finance"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Facebook",
          "observation": "Proctor's public alignment network on his own feed centers on Kansas Republican officeholders, election-policy organizations, and his own legislative work product. His Facebook page features a campaign video titled \"Kris Kobach Wanted This 20-Year-Old To Go To Jail For…\" framing his own enforcement stance against Attorney General Kris Kobach's.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "constitutional-amendment-campaign-finance"
        },
        {
          "id": "ss-crossref-4",
          "platform": "facebook",
          "observation": "A separate page post identifies him as \"the chairman of your House Elections Committee and as your next Secretary of State\" (source). An October 2025 YouTube video records his endorsement of Steve Clay for Leavenworth City Commission, the only down-ballot endorsement visible in the harvested set. The harvested set contains no posts amplifying, tagging, or appearing alongside his Republican primary opponent for...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "constitutional-amendment-campaign-finance"
        }
      ],
      "gap": {
        "summary": "HB 2106 is clear action evidence. Claims about specific organizations' funding should be sourced and attributed as Proctor's statements or secondary reporting unless independently verified.",
        "evidenceIds": [
          "action-hb2106-foreign-national-ban"
        ]
      }
    },
    {
      "id": "business-services-economic-development",
      "title": "Business Services / Economic Development",
      "stated": {
        "text": "Proctor says the Secretary of State is also the key agency for helping Kansas businesses form and operate. His campaign connects that office function to his experience as a small-business owner and to a broader goal of growing Kansas's economy.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "action-business-owner-bio",
          "date": "2026-05-19",
          "body": "Campaign biography says Proctor and his wife Aree own Baan Thai Restaurant and have built it into the largest Thai restaurant chain in Kansas.",
          "sourceIds": [
            "s-campaign-home"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Several policy areas affecting Kansas households do not appear at meaningful frequency in Proctor's harvested public feeds during the captured period. Healthcare access, Medicaid, hospital closures, K–12 education funding, agricultural commodity policy, the Ogallala Aquifer, child care, opioids, and veterans' services other than his own veteran identification are either absent or appear only as single passing...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "business-services-economic-development"
        }
      ],
      "gap": {
        "summary": "No primary-source legislative action specific to Secretary of State business-services modernization was found in this pass. Keep this card framed as stated priorities and biography unless later evidence is added.",
        "evidenceIds": [
          "action-business-owner-bio"
        ]
      }
    },
    {
      "id": "government-security-election-security",
      "title": "Government Security / Election Security",
      "stated": {
        "text": "Proctor's campaign presents him as a homeland and election security candidate, citing his House Elections chairmanship, Wichita State teaching on homeland-security threats, Joint Committee on Kansas Security chairmanship, and EAC Board of Advisors membership.",
        "sourceIds": [
          "s-campaign-home",
          "s-leg-profile",
          "s-eac-roster-2026"
        ]
      },
      "actions": [
        {
          "id": "action-joint-security-chair",
          "date": "2026-05-19",
          "body": "Kansas Legislature lists Proctor as chair of the Joint Committee on Kansas Security.",
          "sourceIds": [
            "s-leg-profile"
          ]
        },
        {
          "id": "action-eac-board-security",
          "date": "2026-02-24",
          "body": "EAC roster lists Proctor as a Board of Advisors member through the National Conference of State Legislatures.",
          "sourceIds": [
            "s-eac-roster-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "Engagement on Proctor's content is not evenly distributed. His Facebook page hosts the highest-engagement videos when they touch enforcement of election law and ballot-integrity claims, including the Kobach-framed enforcement video. Critical engagement is also concentrated there: the activist account Loud Light reposts and challenges his statements at video-length, including a clip titled [\"Rep.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "government-security-election-security"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "On national and federal-policy questions, Proctor's feed engages selectively and through a state-elections lens. He frames opposition to federal mail-in-ballot deadlines, election-related litigation, and nonprofit-funded ballot measures as state sovereignty questions. On April 11, 2025 his House-carried HB 2106 foreign-funding ban was enacted, and he posted on the bill's significance from his X account.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "government-security-election-security"
        },
        {
          "id": "ss-crossref-5",
          "platform": "YouTube",
          "observation": "For the Leavenworth district itself, Proctor's local content is less voluminous than his statewide-elections content but is present. An October 5, 2025 YouTube video addresses bringing jobs and opportunity back to Leavenworth. His campaign and legislative biographies foreground his co-ownership with his wife Aree of Baan Thai Restaurant in Leavenworth. The April 2025 Wichita State University listing identifies...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-6"
          ],
          "mappedToIssueId": "government-security-election-security"
        }
      ],
      "gap": {
        "summary": "The security framing is candidate-controlled and office/committee-based. Specific operational plans for Secretary of State election security beyond vigilance and coordination language were not found.",
        "evidenceIds": [
          "action-joint-security-chair"
        ]
      }
    },
    {
      "id": "guns-second-amendment",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No Secretary of State campaign statement focused on gun policy was found. Separate from the race's office scope, Proctor sponsored HCR 5006, a proposed Kansas constitutional amendment treating the right to bear arms as a fundamental right and subjecting restrictions to strict scrutiny.",
        "sourceIds": [
          "s-hcr5006"
        ]
      },
      "actions": [
        {
          "id": "action-hcr5006-sponsor",
          "date": "2025-01-23",
          "body": "Listed as a sponsor of HCR 5006. The resolution died on the House calendar on 2026-04-10 without recorded votes.",
          "sourceIds": [
            "s-hcr5006"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Use this only if the profile includes non-office-scope values cards. It should not be treated as a Secretary of State administrative proposal.",
        "evidenceIds": [
          "action-hcr5006-sponsor"
        ]
      }
    },
    {
      "id": "religious-liberty-faith-public-action",
      "title": "Religious Liberty / Faith-Adjacent Public Action",
      "stated": {
        "text": "No public church affiliation or candidate-controlled religious-liberty platform was confirmed. Legislative records show Proctor sponsored HR 6016, a resolution denouncing a planned satanic worship ritual.",
        "sourceIds": [
          "s-hr6016"
        ]
      },
      "actions": [
        {
          "id": "action-hr6016-sponsor",
          "date": "2025-03-20",
          "body": "Sponsored HR 6016; the House adopted it 101-15. This is public action evidence, not evidence of church membership or denomination.",
          "sourceIds": [
            "s-hr6016",
            "s-hr6016-votes"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Religious liberty / faith: Public church affiliation not confirmed. HR 6016 sponsorship exists but is not enough to infer personal faith, denomination, or a generalized religious-liberty platform.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "religious-liberty-faith-public-action"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "No public church membership or denominational affiliation confirmed.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "religious-liberty-faith-public-action"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Finding: HR 6016 denounced a planned satanic worship ritual scheduled for March 28, 2025. Kansas Legislature lists Proctor as an original/current sponsor. House emergency final action on March 20, 2025 adopted the resolution 101-15, Absent 9. This is public legislative conduct but is not enough by itself to infer a church affiliation or comprehensive religious-liberty platform.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "religious-liberty-faith-public-action"
        }
      ],
      "gap": {
        "summary": "Do not infer personal faith, church affiliation, or a comprehensive religious-liberty position from this resolution alone.",
        "evidenceIds": [
          "action-hr6016-sponsor"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Proctor. His campaign and legislative biographies emphasize military service, elections, and business ownership rather than church membership or denomination.",
  "campaignFinance": {
    "totalRaised": "reportingPeriod: 2025-01-01 through 2025-12-31; totalContributionsAndReceipts: $312,046.74; totalExpenditures: $102,663.46; cashOnHandClose: $209,383.28; inKindContributions: $2,650.22; otherTransactions: $134,000.00; sourceIds: s-kpdc-202601",
    "narrative": "reportingPeriod: 2025-01-01 through 2025-12-31; totalContributionsAndReceipts: $312,046.74; totalExpenditures: $102,663.46; cashOnHandClose: $209,383.28; inKindContributions: $2,650.22; otherTransactions: $134,000.00; sourceIds: s-kpdc-202601",
    "donors": [],
    "undisclosed": "Readable Schedule A examples include John Lahnes ($250), Dennis White ($250), John Jacob Kotzman ($100), Mike Lehnherr ($100), Chad Stafford ($100), John Donovan ($100), George Pogge ($50), and Michelle Cebe ($50).; Readable entity/PAC examples include Kansas Bankers Association PAC and Shelter Insurance Kansas PAC, but full donor categorization was not completed due to PDF extraction quality.",
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Kansas State Wide Office - 2026 Election Cycle"
  },
  "sources": [
    {
      "id": "s-leg-profile",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_proctor_pat_1/",
      "title": "Pat Proctor",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Proctor represents House District 41, Leavenworth County",
        "House service listed as 2021-present",
        "Committee roles include Elections chair and Joint Committee on Kansas Security chair",
        "Business information lists occupation Professor"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://patproctor4ks.com/",
      "title": "Home - Colonel Pat Proctor",
      "publisher": "Proctor for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign headline says Restoring Confidence in Our Elections, Growing Our Economy",
        "Campaign says Secretary of State has election and business-services duties",
        "Campaign says Proctor has worked on only U.S. citizens voting, Election Day ballot deadline, and paper audits",
        "Campaign biography lists Army service, Baan Thai ownership, House election, committee chairmanships, and Wichita State teaching"
      ]
    },
    {
      "id": "s-eac-board",
      "tier": "primary",
      "url": "https://www.eac.gov/about/board_of_advisors",
      "title": "Board of Advisors",
      "publisher": "U.S. Election Assistance Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "EAC Board of Advisors includes representatives from election and government organizations"
      ]
    },
    {
      "id": "s-eac-roster-2026",
      "tier": "primary",
      "url": "https://www.eac.gov/sites/default/files/2026-02/BOA_Roster_for_Website_022426.pdf",
      "title": "Board of Advisors Roster",
      "publisher": "U.S. Election Assistance Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Roster lists Representative Pat Proctor, Kansas House of Representatives, under National Conference of State Legislatures"
      ]
    },
    {
      "id": "s-hcr5004",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hcr5004/",
      "title": "HCR 5004",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Resolution proposes requiring Kansas voters to be U.S. citizens, at least 18, and residents of the voting area",
        "Proctor is listed among sponsors"
      ]
    },
    {
      "id": "s-hcr5004-votes",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/resolutions/HCR5004/history/?filter=votes&per_page=20",
      "title": "HCR 5004 Vote History",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "House adopted HCR 5004 on 2025-02-05, 90-28",
        "Senate adopted HCR 5004 on 2025-03-25, 37-3"
      ]
    },
    {
      "id": "s-proctor-2025-vote-record",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/download/?apn=b2025_26/year2/ready_for_publication/vote_record/rep_proctor_pat_1_vote_record_2025.pdf",
      "title": "Rep. Pat Proctor 2025 Vote Record",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Proctor voted yea on HCR 5004 final action",
        "Proctor voted yea on HB 2106 final action"
      ]
    },
    {
      "id": "s-hb2453",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2453/",
      "title": "HB 2453",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bill concerns advance-ballot applications, in-person advance voting deadline, ballot transmittal, and voter registration deadline"
      ]
    },
    {
      "id": "s-hb2453-history",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/HB2453/history/",
      "title": "HB 2453 History",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "House passed HB 2453 on 2026-02-18, 86-38",
        "HB 2453 died in Senate committee on 2026-04-10"
      ]
    },
    {
      "id": "s-hb2453-rollcall",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/vote/?apn=b2025_26/year2/house/legislative_days/day027_20260218/vote_records/0094_HB2453.odt",
      "title": "House Roll Call #0094 - HB 2453",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Rep. Proctor voted yea on HB 2453"
      ]
    },
    {
      "id": "s-hb2106",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2106/",
      "title": "HB 2106",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bill bans contributions from foreign nationals for support or defeat of proposed Kansas constitutional amendments",
        "Original/current sponsor is House Committee on Elections",
        "Requested by Representative Waggoner",
        "Bill became law without Governor's signature on 2025-04-10"
      ]
    },
    {
      "id": "s-hb2106-votes",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/HB2106/history/?filter=votes&per_page=20",
      "title": "HB 2106 Vote History",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "House passed HB 2106 on 2025-02-14, 94-25",
        "Senate passed HB 2106 on 2025-03-13, 39-0"
      ]
    },
    {
      "id": "s-hcr5006",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hcr5006/",
      "title": "HCR 5006",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Resolution proposed a right-to-bear-arms constitutional amendment subjecting restrictions to strict scrutiny",
        "Proctor is listed as a sponsor",
        "Resolution died on calendar on 2026-04-10"
      ]
    },
    {
      "id": "s-hr6016",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hr6016/",
      "title": "HR 6016",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Resolution denounced a planned satanic worship ritual",
        "Proctor is listed as a sponsor"
      ]
    },
    {
      "id": "s-hr6016-votes",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/resolutions/HR6016/history/?filter=votes&per_page=20",
      "title": "HR 6016 Vote History",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "House adopted HR 6016 on 2025-03-20, 101-15"
      ]
    },
    {
      "id": "s-reflector-ballot-harvesting",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/13/kansas-republican-exploits-fear-of-imaginary-axis-of-ballot-harvesting-to-gain-political-advantage/",
      "title": "Kansas Republican exploits fear of imaginary 'axis of ballot harvesting' to gain political advantage",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Article reports Proctor's public comments about women voters in the August 2022 election",
        "Article reports Proctor's later response at an April 19, 2025 town hall",
        "Article reports Proctor fundraising/email statements about States Newsroom/Kansas Reflector funding"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://x.com/RealPatProctor",
      "title": "X / X",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Election Administration / Voter Eligibility.",
        "Across the harvested public record on X (@RealPatProctor), Facebook (@PatProctorKS), YouTube (Pat Proctor for Kansas), and Instagram (@patproctor4ks), Proctor's dominant topic is e"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=8oGPhVyuYfs",
      "title": "Instagram / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Election Administration / Voter Eligibility.",
        "The same phrase recurs across every platform: his Instagram bio reads \"Fighting to restore confidence in our elections,\" his Facebook page lists him as \"fighting to restore confide"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "social",
      "url": "https://www.facebook.com/PatProctorKS/videos/enforcing-our-election-laws/1920239725529443/",
      "title": "Facebook / Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Campaign Finance / Foreign Money in Ballot Measures.",
        "Proctor's public alignment network on his own feed centers on Kansas Republican officeholders, election-policy organizations, and his own legislative work product. His Facebook pag",
        "Observed public online activity mapped to Government Security / Election Security."
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "social",
      "url": "https://www.facebook.com/PatProctorKS/posts/as-the-chairman-of-your-house-elections-committee-and-as-your-next-secretary-of-/1227794369167664/",
      "title": "facebook / Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Campaign Finance / Foreign Money in Ballot Measures.",
        "A separate page post identifies him as \"the chairman of your House Elections Committee and as your next Secretary of State\" (source). An October 2025 YouTube video records his endo"
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/04/11/indiana-joins-kansas-kentucky-and-wyoming-in-enacting-laws-to-restrict-foreign-contributions-to-ballot-measure-campaigns-the-highest-number-passed-in-a-single-year/",
      "title": "X / News.Ballotpedia",
      "publisher": "News.Ballotpedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Government Security / Election Security.",
        "On national and federal-policy questions, Proctor's feed engages selectively and through a state-elections lens. He frames opposition to federal mail-in-ballot deadlines, election-"
      ]
    },
    {
      "id": "s-social-crossref-6",
      "tier": "social",
      "url": "https://www.youtube.com/@patproctorforkansas655",
      "title": "YouTube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Government Security / Election Security.",
        "For the Leavenworth district itself, Proctor's local content is less voluminous than his statewide-elections content but is present. An October 5, 2025 YouTube video addresses brin"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(PAT_PROCTOR_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[pat-proctor.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
