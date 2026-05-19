/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JAYME_GOETZ_V2: CandidateFullV2 = {
  "slug": "jayme-goetz",
  "name": "Jayme Goetz",
  "party": "NP",
  "position": "Hays USD 489 Board of Education",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "USD 489 Board Member",
  "issues": [
    {
      "id": "i-official-status-election-cycle",
      "title": "Official Status / Election Cycle",
      "stated": {
        "text": "Goetz is a current USD 489 Board Member. This profile should be treated as a current/off-cycle 2026 local officeholder profile, not as a 2026 ballot race profile.",
        "sourceIds": [
          "s-usd489-members",
          "s-usd489-meeting-list",
          "s-hayspost-election-night-2023",
          "s-hayspost-canvass-2023",
          "s-ksrevisor-25-2018",
          "s-ksrevisor-72-713"
        ]
      },
      "actions": [
        {
          "id": "ae-2023-election-canvass",
          "date": "2023-11-14",
          "body": "Hays Post canvass coverage reported Goetz won the final USD 489 seat by three votes after an election-night tie with Craig Pallister.",
          "sourceIds": [
            "s-hayspost-election-night-2023",
            "s-hayspost-canvass-2023"
          ]
        },
        {
          "id": "ae-current-member-portal",
          "date": "2026-05-19",
          "body": "USD 489 public portal listed Jayme Goetz as Board Member.",
          "sourceIds": [
            "s-usd489-members"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Her board seat was decided after the November 2023 election canvass. Hays Post reported that she won the fourth USD 489 seat by three votes over incumbent Craig Pallister and quoted her saying she was looking forward to working with the board to make the district the best it could be. (Hays Post, Nov. 14, 2023)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-canvass-2023"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On the Hays Middle School mascot, Goetz brought the discussion back to the board after receiving emails and questions. Tiger Media reported that she raised the Kansas Board of Education recommendation to phase out Indian mascots and asked whether the board was willing to incur costs later if a recommendation became a mandate. Hays Post later reported she supported the vote to change the middle school mascot to...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-tiger-bathrooms-mascot-2024"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post October 2023 Q&A: transparency, board/administration views, board role, bond accountability, self-funding. (source) 10. Hays Post October 2023 candidate forum: private bathrooms, board relations, Glassman/HVAC conflict recusal. (source) 11. Hays Post November 2023 canvass story: Goetz won final seat by three votes and gave brief post-election quote. (source) 12.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2023"
          ],
          "mappedToIssueId": "i-official-status-election-cycle"
        }
      ],
      "gap": {
        "summary": "The USD 489 public member page leaves the Term field blank; exact term-end date should be confirmed with the board clerk before publishing as a hard date.",
        "evidenceIds": [
          "ae-2023-election-canvass"
        ]
      }
    },
    {
      "id": "i-transparency-board-process",
      "title": "Transparency / Board Process",
      "stated": {
        "text": "Goetz's clearest self-selected improvement area is transparency, paired with a board-role view that policy and accountability belong to the board while daily operations belong to hired professionals.",
        "sourceIds": [
          "s-hayspost-profile-2023",
          "s-hayspost-qa-2023",
          "s-tiger-candidate-guide-2023"
        ]
      },
      "actions": [
        {
          "id": "ae-transparency-qa-2023",
          "date": "2023-10-28",
          "body": "In a Hays Post Q&A, Goetz named district transparency as the one thing she would change and said the board's role is to oversee policy.",
          "sourceIds": [
            "s-hayspost-qa-2023"
          ]
        },
        {
          "id": "ae-board-cohesion-forum-2023",
          "date": "2023-10-18",
          "body": "At the candidate forum, Goetz objected to describing the board as dysfunctional and pointed to board accomplishments while wanting less animosity.",
          "sourceIds": [
            "s-hayspost-forum-2023"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-no-campaign-website",
          "platform": "Public web",
          "observation": "No verified candidate-controlled campaign website surfaced in the public harvest, so Goetz's accessible online message is mostly through questionnaires, board records, and local coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "i-transparency-board-process"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Goetz does not appear to run a visible campaign-social operation. Her accessible public message is concentrated in 2023 candidate questionnaires, a 2023 candidate forum, public board meetings, official district meeting infrastructure, and local coverage of board debates.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linkedin-preview"
          ],
          "mappedToIssueId": "i-transparency-board-process"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Her core candidate identity is local, parent, and teacher-centered. She described herself as a lifelong Hays resident, USD 489 graduate, former Hays High teacher, FHSU math instructor, wife, mother of two, and supporter of education. Her professional identity is confirmed by the FHSU mathematics faculty page, which lists her as an instructor active in Algebra. (Hays Post, July 13, 2023, Tiger Media Network, Oct....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-profile-2023"
          ],
          "mappedToIssueId": "i-transparency-board-process"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled long-form platform was found; most process statements come from local candidate questionnaires and board coverage.",
        "evidenceIds": [
          "ae-transparency-qa-2023"
        ]
      }
    },
    {
      "id": "i-bond-facilities-fiscal-oversight",
      "title": "Bond / Facilities / Fiscal Oversight",
      "stated": {
        "text": "Goetz publicly supports facility improvements for staff and students, but frames bond and construction decisions through accountability, fiscal responsibility, and having the right information before approval.",
        "sourceIds": [
          "s-hayspost-profile-2023",
          "s-hayspost-qa-2023",
          "s-tiger-felten-2026",
          "s-hayspost-felten-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-bond-accountability-qa-2023",
          "date": "2023-10-28",
          "body": "Goetz said bond buildings are for staff and student needs, while accountability and fiscally responsible decisions are priorities.",
          "sourceIds": [
            "s-hayspost-qa-2023"
          ]
        },
        {
          "id": "ae-rnr-no-2025",
          "date": "2025-09-08",
          "body": "Hays Post reported Goetz voted against exceeding the revenue-neutral rate; the budget itself passed with only Allen Park voting no.",
          "sourceIds": [
            "s-hayspost-budget-2025"
          ]
        },
        {
          "id": "ae-felten-information-2026",
          "date": "2026-02-24",
          "body": "Goetz said the board was not refusing approval of Felten work but wanted the right information; Hays Post later reported she felt bullied for wanting to review contract information more closely.",
          "sourceIds": [
            "s-tiger-felten-2026",
            "s-hayspost-felten-2026"
          ]
        },
        {
          "id": "ae-oloughlin-traffic-2026",
          "date": "2026-04-20",
          "body": "Goetz asked when O'Loughlin traffic would be rerouted during a bond/facility update; superintendent said August.",
          "sourceIds": [
            "s-hayspost-felten-sale-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Transparency and communication are the clearest self-selected improvement areas. In the Oct. 2023 Hays Post Q&A, she said the one thing she would change about USD 489 was \"the transparency of the district\" and said the current board had taken strides but she wanted to see more. In the July 2023 profile and Tiger Media guide, she tied transparency to families entrusting the district with children and tax dollars....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2023"
          ],
          "mappedToIssueId": "i-bond-facilities-fiscal-oversight"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Her education message emphasizes quality instruction and staff support. She says her own USD 489 experience gave her relationships, rigor, and relevance, and that teaching at multiple levels showed her how quality instruction benefits students and the community. She said the district should ensure a positive work environment for people educating children. (Hays Post, July 13, 2023, Tiger Media Network)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-profile-2023"
          ],
          "mappedToIssueId": "i-bond-facilities-fiscal-oversight"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "She supports the bond's facility goals but frames them through accountability. In candidate materials, she said improved facilities could foster a growth mindset and keep staff and students safe. In the Oct. 2023 Q&A, she said the bond buildings are for what staff and students need, not for her, but she wanted accountability and fiscally responsible decisions. (Hays Post, July 13, 2023, Hays Post, Oct. 28, 2023)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-profile-2023"
          ],
          "mappedToIssueId": "i-bond-facilities-fiscal-oversight"
        }
      ],
      "gap": {
        "summary": "Some official vote minutes were not statically extractable in this pass; Hays Post and Tiger Media are used for attributed statements and vote reporting.",
        "evidenceIds": [
          "ae-bond-accountability-qa-2023"
        ]
      }
    },
    {
      "id": "i-discipline-handbooks-accountability",
      "title": "Discipline / Handbooks / Accountability",
      "stated": {
        "text": "Goetz has been one of the more visible board voices for clearer written consequences and documentation when student behavior damages school property or raises consistency concerns.",
        "sourceIds": [
          "s-tiger-handbook-2025",
          "s-hayspost-handbook-2025",
          "s-hayspost-bathrooms-vandalism-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-handbook-operational-definitions-2025",
          "date": "2025-07-14",
          "body": "Goetz opposed approving the Hays High handbook without operational definitions and said specific definitions help make consequences equal for students.",
          "sourceIds": [
            "s-tiger-handbook-2025"
          ]
        },
        {
          "id": "ae-handbook-complaints-2025",
          "date": "2025-07-21",
          "body": "Hays Post reported Goetz had at least six complaints about consistency in high-school discipline and argued discipline language was policy.",
          "sourceIds": [
            "s-hayspost-handbook-2025"
          ]
        },
        {
          "id": "ae-bathroom-documentation-2026",
          "date": "2026-04-20",
          "body": "Goetz asked about tracking bathroom messes/vandalism and said intentional destruction that costs the district money needs documentation.",
          "sourceIds": [
            "s-hayspost-bathrooms-vandalism-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Her board-role message accepts administrative day-to-day control while reserving board oversight on policy and accountability. In the Oct. 2023 Q&A, she said the board oversees policy and day-to-day operations are left to hired professionals. In 2025 handbook coverage, however, she argued that the Hays High handbook needed operational definitions so consequences were consistent and teachers could know what would...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-qa-2023"
          ],
          "mappedToIssueId": "i-discipline-handbooks-accountability"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post July 2023 candidate profile: biography, local roots, teacher/parent identity, quality instruction, board unity, stakeholder relations, bond facilities, transparency, tax-dollar accountability. (source) 8. Tiger Media Network October 2023 candidate guide: first-person candidate answers on education, Hays, bond, transparency, questions/research, and support during facility changes. (source) 9.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-profile-2023"
          ],
          "mappedToIssueId": "i-discipline-handbooks-accountability"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post June 2025 board elections/equipment article: Goetz said she would serve another term as vice president if elected; article reported she was then vice president. (source) 19. Tiger Media Network July 2025 high-school handbook article: Goetz pushed for operational definitions and teacher committee input. (source) 20. Hays Post July 2025 high-school handbook article: Goetz requested handbook revisions over...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-discipline-handbooks-accountability"
        }
      ],
      "gap": {
        "summary": "Local reporting captures detailed discussion, but this pass did not reconstruct every official roll-call vote tied to handbook revisions.",
        "evidenceIds": [
          "ae-handbook-operational-definitions-2025"
        ]
      }
    },
    {
      "id": "i-student-privacy-safety-bathrooms",
      "title": "Student Privacy / Safety / Bathrooms",
      "stated": {
        "text": "Goetz's visible bathroom position is supportive of private bathrooms as a student privacy and bullying response, while later questions focused on vandalism tracking and accountability.",
        "sourceIds": [
          "s-hayspost-forum-2023",
          "s-tiger-bathrooms-mascot-2024",
          "s-hayspost-bathrooms-vandalism-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-private-bathrooms-support-2023",
          "date": "2023-10-18",
          "body": "Goetz favored the new private bathroom design, citing privacy, bullying, and student voice.",
          "sourceIds": [
            "s-hayspost-forum-2023"
          ]
        },
        {
          "id": "ae-bathroom-focus-2024",
          "date": "2024-04-09",
          "body": "Tiger Media reported Goetz questioned why bathrooms were the focus and said she did not think bathrooms would change who children are.",
          "sourceIds": [
            "s-tiger-bathrooms-mascot-2024"
          ]
        },
        {
          "id": "ae-bathroom-vandalism-2026",
          "date": "2026-04-20",
          "body": "Goetz and Allen Park asked whether bathroom messes or vandalism are tracked; Goetz tied the question to accountability for community-paid spaces.",
          "sourceIds": [
            "s-hayspost-bathrooms-vandalism-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "On private bathrooms, Goetz's visible position is supportive. At the Oct. 2023 forum, she said students avoiding bathrooms because of privacy and bullying should have a say in what school looks like. In April 2024 board coverage, she questioned why bathrooms were the focus and said she did not think the bathrooms would change who children are. (Hays Post, Oct. 18, 2023, Tiger Media Network, Apr. 9, 2024)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-forum-2023"
          ],
          "mappedToIssueId": "i-student-privacy-safety-bathrooms"
        }
      ],
      "gap": {
        "summary": "Do not infer a broader gender-policy platform from bathroom comments. The reviewed record is about USD 489 facility design, privacy, bullying, vandalism, and accountability.",
        "evidenceIds": [
          "ae-private-bathrooms-support-2023"
        ]
      }
    },
    {
      "id": "i-teachers-instruction-professional-development",
      "title": "Teachers / Instruction / Professional Development",
      "stated": {
        "text": "Goetz's public identity and statements center on her experience as a USD 489 graduate, former district teacher, parent, and FHSU mathematics instructor, with a strong emphasis on quality instruction and staff support.",
        "sourceIds": [
          "s-fhsu-faculty",
          "s-hayspost-profile-2023",
          "s-usd489-calendar-pd",
          "s-tiger-cellphones-2024",
          "s-hayspost-raises-2025"
        ]
      },
      "actions": [
        {
          "id": "ae-pd-days-2024",
          "date": "2024-02-05",
          "body": "Goetz supported full in-service days over early-release professional development, saying full days are better for staff and ultimately students.",
          "sourceIds": [
            "s-usd489-calendar-pd"
          ]
        },
        {
          "id": "ae-cellphones-2024",
          "date": "2024-08-20",
          "body": "Goetz described classroom phone-holder workarounds, called cell phones a school and home problem, and noted positive instructional uses.",
          "sourceIds": [
            "s-tiger-cellphones-2024"
          ]
        },
        {
          "id": "ae-raise-math-2025",
          "date": "2025-06-17",
          "body": "Goetz questioned how a 2.5 percent raise calculation applied when the same dollar increase affected teachers differently depending on salary level.",
          "sourceIds": [
            "s-hayspost-raises-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-linkedin-professional-only",
          "platform": "LinkedIn",
          "observation": "A public LinkedIn preview was found as professional metadata tied to FHSU, but it did not expose a reliable campaign-post inventory.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-linkedin-preview"
          ],
          "mappedToIssueId": "i-teachers-instruction-professional-development"
        }
      ],
      "gap": {
        "summary": "This pass found strong candidate-attributed education statements but did not reconstruct a complete vote history on teacher pay, curriculum, or staffing.",
        "evidenceIds": [
          "ae-pd-days-2024"
        ]
      }
    },
    {
      "id": "i-mascot-community-process",
      "title": "Mascot / Community Process",
      "stated": {
        "text": "Goetz brought the Hays Middle School mascot issue back after constituent contact, initially raising KSBE recommendation and future-cost questions, and later supported changing the middle-school mascot to Indians after reviewing survey responses.",
        "sourceIds": [
          "s-tiger-bathrooms-mascot-2024",
          "s-usd489-mascot-2024",
          "s-hayspost-mascot-vote"
        ]
      },
      "actions": [
        {
          "id": "ae-mascot-agenda-2024",
          "date": "2024-04-08",
          "body": "Goetz raised the mascot discussion after emails/questions and pointed to the KSBE recommendation to phase out Indian mascots and possible future costs.",
          "sourceIds": [
            "s-tiger-bathrooms-mascot-2024",
            "s-usd489-mascot-2024"
          ]
        },
        {
          "id": "ae-mascot-vote-support",
          "date": "2024-04-22",
          "body": "Hays Post reported Goetz supported changing the Hays Middle School mascot to Indians after reviewing survey responses.",
          "sourceIds": [
            "s-hayspost-mascot-vote"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Use careful chronology: Goetz first raised process/cost concerns tied to KSBE guidance, then later supported the mascot change after survey review.",
        "evidenceIds": [
          "ae-mascot-agenda-2024"
        ]
      }
    },
    {
      "id": "i-conflict-recusal-ethics",
      "title": "Conflict / Recusal",
      "stated": {
        "text": "Goetz publicly identified a potential conflict involving HVAC work because her husband works for Glassman Corp. and said she would recuse from those votes.",
        "sourceIds": [
          "s-hayspost-forum-2023"
        ]
      },
      "actions": [
        {
          "id": "ae-glassman-recusal-statement-2023",
          "date": "2023-10-18",
          "body": "At the candidate forum, Goetz said her husband works for Glassman Corp. and she would recuse herself from votes on HVAC contracts.",
          "sourceIds": [
            "s-hayspost-forum-2023"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "This pass did not reconstruct every later HVAC-related vote to confirm each recusal instance.",
        "evidenceIds": [
          "ae-glassman-recusal-statement-2023"
        ]
      }
    }
  ],
  "recordSummary": "USD 489 Board Member",
  "ownWordsNarrative": "status: no_verified_candidate_controlled_campaign_social_feed; checked: Campaign website; Facebook; X/Twitter; Instagram; Threads; Bluesky; TikTok; Truth Social; Gab; Gettr; Substack; Medium; Reddit; Newsletter platforms; LinkedIn public preview; USD 489 official portal; Hays Post; Tiger Media Network; relevance: Use the absence of verified campaign-controlled channels as a footprint signal only. Do not infer private views or platform activity that was not publicly visible.; sourceIds: s-linkedin-preview; s-local-social-harvest",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "Goetz told Hays Post in 2023 that she was self-funded. No online donor list, campaign-finance report, treasurer appointment, or affidavit of exemption was found in this pass. Kansas SOS election standards point most local school-board campaign reporting to the county election officer if reportable.",
    "narrative": "Goetz told Hays Post in 2023 that she was self-funded. No online donor list, campaign-finance report, treasurer appointment, or affidavit of exemption was found in this pass. Kansas SOS election standards point most local school-board campaign reporting to the county election officer if reportable.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Hays USD 489 BOE candidate: Jayme Goetz"
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
        "Jayme Goetz is listed as Board Member",
        "Jayme Goetz is listed among members for board retreat, regular meeting, special board meeting, and work session records",
        "The public Term field for Jayme Goetz is blank"
      ]
    },
    {
      "id": "s-usd489-meeting-list",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/Portal/MeetingInformation.aspx?Id=217",
      "title": "Regular Meeting - Meeting Information",
      "publisher": "Hays USD 489 / Diligent Community",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Public meeting page lists 2025-2026 regular meetings",
        "Member list includes Jayme Goetz"
      ]
    },
    {
      "id": "s-fhsu-faculty",
      "tier": "primary",
      "url": "https://www.fhsu.edu/macs/faculty-and-staff/",
      "title": "Mathematics Faculty and Staff",
      "publisher": "Fort Hays State University",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Jayme Goetz is listed as Instructor",
        "Goetz is listed with M.S., Fort Hays State University",
        "Goetz is listed as active in Algebra"
      ]
    },
    {
      "id": "s-usd489-calendar-pd",
      "tier": "primary",
      "url": "https://www.usd489.com/article/1447496",
      "title": "Hays USD 489 approves calendars with Monday professional development days",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "USD 489 calendars included one Monday off per month for professional development",
        "Goetz was described as a former district teacher",
        "Goetz said early-release days made the transition from teaching to professional development difficult",
        "Goetz acknowledged child-care difficulty but said full in-service days are better for staff and ultimately students"
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
        "School-board members are elected at odd-year school elections for four-year terms"
      ]
    },
    {
      "id": "s-hayspost-profile-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hays USD 489 school board candidate Jayme Goetz",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile describes Goetz as lifelong Hays resident, USD 489 graduate, former Hays High teacher, FHSU math instructor, wife, and mother of two",
        "Goetz emphasized quality instruction, relationships, rigor, and relevance",
        "Goetz emphasized transparency and clear communication",
        "Goetz said board decisions affect someone in the community",
        "Goetz supported improved bond facilities while emphasizing accountability",
        "Observed public online activity mapped to Transparency / Board Process.",
        "Observed public online activity mapped to Bond / Facilities / Fiscal Oversight.",
        "Observed public online activity mapped to Discipline / Handbooks / Accountability."
      ]
    },
    {
      "id": "s-tiger-candidate-guide-2023",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75249",
      "title": "USD 489 School Board Candidate Guide",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate answers emphasized education, Hays, bond, transparency, research/questions, and support for educators/students"
      ]
    },
    {
      "id": "s-hayspost-qa-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f",
      "title": "Hays USD 489 BOE candidate: Jayme Goetz",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz was listed as age 31, FHSU math instructor, and non-incumbent",
        "Goetz said she had children in USD 489",
        "Goetz named district transparency as the one thing she would change",
        "Goetz said the board oversees policy and day-to-day operations are left to hired professionals",
        "Goetz said bond decisions should be accountable, fiscally responsible, and for student betterment",
        "Goetz said she was self-funded",
        "Observed public online activity mapped to Official Status / Election Cycle.",
        "Observed public online activity mapped to Bond / Facilities / Fiscal Oversight.",
        "Observed public online activity mapped to Discipline / Handbooks / Accountability."
      ]
    },
    {
      "id": "s-hayspost-forum-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
      "title": "Hays USD 489 BOE candidates discuss bathrooms, board relations at forum",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz favored the new private bathroom design",
        "Goetz said students were avoiding bathrooms because of privacy and bullying",
        "Goetz said students should have a say in what their school looks like",
        "Goetz said she disliked the term dysfunctional for the board",
        "Goetz said she would recuse from HVAC contract votes because her husband works for Glassman Corp.",
        "Observed public online activity mapped to Student Privacy / Safety / Bathrooms."
      ]
    },
    {
      "id": "s-hayspost-election-night-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ab29cf1d-de84-46f8-a952-2fc825ca1f03",
      "title": "2023 Ellis County election results",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Election-night results showed Goetz and Craig Pallister tied at 1,486 votes",
        "USD 489 race was for four at-large positions"
      ]
    },
    {
      "id": "s-hayspost-canvass-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826",
      "title": "Final Hays USD 489 seat decided by 3 votes during canvass",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Goetz won the fourth USD 489 seat by three votes after canvass",
        "Goetz beat incumbent Craig Pallister for the final seat",
        "Goetz said she looked forward to working with the board to make the district the best it can be",
        "The canvass board unanimously certified the election",
        "Observed public online activity mapped to Official Status / Election Cycle."
      ]
    },
    {
      "id": "s-tiger-bathrooms-mascot-2024",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=78383",
      "title": "Board of Education discusses gender-neutral bathrooms and middle school mascot",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz questioned why bathrooms were the focus",
        "Goetz said she did not think bathrooms would change who children are",
        "Goetz brought the mascot issue back after emails and questions",
        "Goetz referenced the Kansas Board of Education recommendation to phase out Indian mascots",
        "Goetz asked whether the board was willing to incur future costs if the recommendation became a mandate",
        "Observed public online activity mapped to Official Status / Election Cycle."
      ]
    },
    {
      "id": "s-usd489-mascot-2024",
      "tier": "primary",
      "url": "https://www.usd489.com/article/1542245",
      "title": "Hays Middle School mascot discussion",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "District-posted article preserves the mascot-discussion context",
        "Article attributes Goetz's agenda interest to constituent emails and questions"
      ]
    },
    {
      "id": "s-hayspost-mascot-vote",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c",
      "title": "Hays USD 489 BOE votes to change Hays Middle School mascot to Indians",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Goetz supported changing the Hays Middle School mascot to Indians after reviewing survey responses"
      ]
    },
    {
      "id": "s-tiger-cellphones-2024",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=79974",
      "title": "USD 489 discusses cell phone policy",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz said she used phone holders as a Hays High teacher",
        "Goetz said students found ways around phone holders",
        "Goetz called cell phones a problem and a home problem too",
        "Goetz noted cell phones can be used positively in lessons"
      ]
    },
    {
      "id": "s-hayspost-raises-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
      "title": "USD 489 employees receive raises; board members balk at admin pay",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz questioned how a 2.5 percent raise figure was calculated",
        "Article reported the flat-dollar increase affected newer and seasoned teachers differently"
      ]
    },
    {
      "id": "s-tiger-handbook-2025",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=87800",
      "title": "High School handbook fails approval at USD 489 Board of Education meeting",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz's main concern was removal of operational definitions from the high-school handbook",
        "Goetz said definitions help make consequences equal for all students",
        "Goetz wanted a teacher committee to review and provide handbook recommendations",
        "Motion to approve the handbook failed 4-3"
      ]
    },
    {
      "id": "s-hayspost-handbook-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/bc933c79-2f23-4279-8171-bc6dcf391cf0",
      "title": "Hays USD 489 board squabbles over discipline policy in high school handbook",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz requested revisions to the Hays High handbook",
        "Goetz had at least six complaints about consistency in high-school discipline",
        "Goetz said discipline language was policy",
        "Board approved the handbook after discussion"
      ]
    },
    {
      "id": "s-hayspost-budget-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/78d0c0ef-e656-4526-892f-35f245aa0336",
      "title": "Hays USD 489 school board passes budget with tax increase",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The board approved exceeding the revenue-neutral rate 4-2",
        "Goetz and Allen Park voted against exceeding the revenue-neutral rate",
        "The budget itself was approved 5-1 with Park voting no"
      ]
    },
    {
      "id": "s-tiger-felten-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=94701",
      "title": "Felten Elementary project coverage",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz said the board was not refusing approval but trying to make sure it had the right information"
      ]
    },
    {
      "id": "s-hayspost-felten-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f5e69fbd-0165-4db1-b896-07613f7a31ed",
      "title": "Felten Elementary project coverage",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz said she felt bullied for wanting to step back and review the contract more closely"
      ]
    },
    {
      "id": "s-hayspost-felten-sale-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6b81ed76-f535-47bb-83bb-a9f3239ac9ac",
      "title": "Hays USD 489 to set work session to discuss Felten sale",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Board decided to set a special meeting on potential land sale north of Felten Elementary",
        "Goetz asked when O'Loughlin traffic would be rerouted",
        "Superintendent Ron Wilson said traffic rerouting would happen in August at the beginning of the next school year"
      ]
    },
    {
      "id": "s-hayspost-bathrooms-vandalism-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede",
      "title": "USD 489 board members express concerns about bathrooms, vandalism",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Goetz and Allen Park asked whether the school tracks bathroom messes or vandalism",
        "Goetz said intentional destruction of property costing the district money needs documentation",
        "Goetz said students should be held accountable in community-paid spaces"
      ]
    },
    {
      "id": "s-linkedin-preview",
      "tier": "social",
      "url": "https://www.linkedin.com/in/jayme-goetz",
      "title": "Jayme Goetz LinkedIn public preview",
      "publisher": "LinkedIn",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Existing public harvest found professional/profile metadata for Jayme Goetz in Hays with Fort Hays State University",
        "Public preview did not expose a reliable campaign-post inventory"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/17bd928c-22c6-4be8-980e-34e878be6c58",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Discipline / Handbooks / Accountability.",
        "Hays Post June 2025 board elections/equipment article: Goetz said she would serve another term as vice president if elected; article reported she was then vice president. (source) "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JAYME_GOETZ_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jayme-goetz.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
