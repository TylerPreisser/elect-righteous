/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CATHY_HOPKINS_V2: CandidateFullV2 = {
  "slug": "cathy-hopkins",
  "name": "Cathy Hopkins",
  "party": "R",
  "position": "Kansas State Board of Education District 5 member/chair",
  "electionSlug": "sboe-district-5",
  "incumbent": true,
  "occupation": "Kansas State Board of Education District 5 member/chair",
  "issues": [
    {
      "id": "statewide-k12-governance",
      "title": "Statewide K-12 Education Governance",
      "stated": {
        "text": "Hopkins's clearest current role is statewide education governance. KSDE identifies the State Board as the body that sets K-12 policy, standards, educator licensure, accreditation, and commissioner appointment, and lists Hopkins as the current chair and District 5 member. Her official District 5 page lists service years 2023-2026 and assignments touching educator standards, teacher vacancies, and statewide education councils.",
        "sourceIds": [
          "s-ksde-state-board",
          "s-ksde-district-5"
        ]
      },
      "actions": [
        {
          "id": "action-current-chair-district-5",
          "date": "2026-05-19",
          "body": "KSDE lists Hopkins as current State Board chair and District 5 representative.",
          "sourceIds": [
            "s-ksde-state-board",
            "s-ksde-district-5"
          ]
        },
        {
          "id": "action-committee-assignments",
          "date": "2025-2026",
          "body": "KSDE District 5 page lists Hopkins on Coordinating Council, Professional Standards Board Liaison, Teacher Vacancy and Supply Committee, and Governor's Education Council.",
          "sourceIds": [
            "s-ksde-district-5"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "Public online commentary: Kansas Reflector/Hays Post, The Sentinel/Kansas Policy Institute, Kansas News Service/KMUW, and State Affairs have coverage quoting or describing Hopkins on core academics, assessment cut scores, board pay, cell-phone policy, commissioner search, and public-school funding. These are secondary-source issue leads, not candidate-controlled social signals.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "statewide-k12-governance"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "KSDE said the board would announce the next commissioner during its April 14 meeting.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "statewide-k12-governance"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Reports Hopkins said the selected search firm would work with the whole board, and that the board was not required to use a search firm.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "statewide-k12-governance"
        }
      ],
      "gap": {
        "summary": "The office is up in 2026, but Hopkins's own 2026 filing was not confirmed. SOS live candidate list was blocked, and KPDC's readable 2026 index did not list Hopkins.",
        "evidenceIds": [
          "action-current-chair-district-5"
        ]
      }
    },
    {
      "id": "commissioner-selection-board-leadership",
      "title": "Commissioner Selection and Board Leadership",
      "stated": {
        "text": "As chair, Hopkins was directly tied to the 2025-2026 commissioner transition. KSDE reported the board formed a search subcommittee including Hopkins, Danny Zeck, and Michelle Dombrosky, later announced three finalists, and quoted Hopkins as board chair. Kansas News Service/KMUW reported the board selected Jake Steel with seven members in support.",
        "sourceIds": [
          "s-ksde-commissioner-search-subcommittee",
          "s-ksde-commissioner-finalists",
          "s-kmuw-commissioner-steel"
        ]
      },
      "actions": [
        {
          "id": "action-search-subcommittee",
          "date": "2025-09-25",
          "body": "The State Board voted to form a commissioner-search subcommittee made up of Hopkins, Danny Zeck, and Michelle Dombrosky.",
          "sourceIds": [
            "s-ksde-commissioner-search-subcommittee"
          ]
        },
        {
          "id": "action-finalists-announced",
          "date": "2026-03-30",
          "body": "KSDE announced commissioner finalists and quoted Hopkins as State Board chair.",
          "sourceIds": [
            "s-ksde-commissioner-finalists"
          ]
        },
        {
          "id": "action-jake-steel-selected",
          "date": "2026-04-14",
          "body": "KMUW/Kansas News Service reported the board named Jake Steel as next education commissioner and that seven of ten members supported the selection.",
          "sourceIds": [
            "s-kmuw-commissioner-steel"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Minutes state Cathy Hopkins and Beryl New, legislative liaisons for the State Board, said the board voted to prioritize only using public funds for public schools in its 2026 legislative priorities.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "commissioner-selection-board-leadership"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Links Hays Post 2021 NEA questionnaire parts from the USD 489 school board race.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "commissioner-selection-board-leadership"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Reports Hopkins said the board had placed burdensome responsibilities on teachers and administrators.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "commissioner-selection-board-leadership"
        }
      ],
      "gap": {
        "summary": "Primary KSDE board minutes for the final commissioner vote would be the strongest vote source; current structured evidence uses KSDE releases plus Kansas News Service vote reporting.",
        "evidenceIds": [
          "action-search-subcommittee"
        ]
      }
    },
    {
      "id": "literacy-standards-assessment",
      "title": "Literacy, Standards, and Assessment",
      "stated": {
        "text": "The strongest official evidence on academic priorities is KSDE's literacy record: the department reported structured-literacy licensure requirements, science-of-reading alignment, and Hopkins's public comments at a literacy event. Secondary coverage also reports Hopkins supported new proficiency standards and disputed the criticism that standards or rigor were being lowered.",
        "sourceIds": [
          "s-ksde-jan2025-structured-literacy-chair",
          "s-ksde-feb2026-literacy",
          "s-sentinel-cut-scores"
        ]
      },
      "actions": [
        {
          "id": "action-structured-literacy-update",
          "date": "2025-01",
          "body": "KSDE reported the board received an update on structured-literacy licensure requirements and that more than 12,000 educators had completed or were completing approved training.",
          "sourceIds": [
            "s-ksde-jan2025-structured-literacy-chair"
          ]
        },
        {
          "id": "action-literacy-day-statement",
          "date": "2026-02",
          "body": "KSDE quoted Hopkins during a literacy day event about supporting educators and moving literacy work into Kansas classrooms.",
          "sourceIds": [
            "s-ksde-feb2026-literacy"
          ]
        },
        {
          "id": "action-assessment-cut-scores-secondary",
          "date": "2025-08",
          "body": "The Sentinel reported the board voted 7-3 to accept new proficiency standards and listed Hopkins among supporters.",
          "sourceIds": [
            "s-sentinel-cut-scores"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Secondary coverage reports a 7-3 State Board vote on new assessment/proficiency standards with Hopkins in support; this should be upgraded to official board minutes/video before final UI if the vote becomes a central action item.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "literacy-standards-assessment"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "KSDE reports structured-literacy licensure work, science-of-reading alignment, and Hopkins's literacy-event comments.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "literacy-standards-assessment"
        }
      ],
      "gap": {
        "summary": "Use official KSDE minutes/video before making the cut-score vote a primary action card. The current cut-score vote evidence is secondary and published from a policy-media source with a critical frame.",
        "evidenceIds": [
          "action-structured-literacy-update"
        ]
      }
    },
    {
      "id": "local-control-core-academics-state-mandates",
      "title": "Local Control, Core Academics, and State Mandates",
      "stated": {
        "text": "Hopkins's dated 2022 questionnaire emphasized local boards, parents, and limited state/federal control over K-12 funding and academics. Later secondary coverage reports she discussed reducing state-board mandates and focusing on core reading, writing, and math. In 2026 cellphone-ban testimony, Hopkins and Beryl New were reported as pointing lawmakers back toward local district policy-making.",
        "sourceIds": [
          "s-ivoterguide-hopkins",
          "s-hayspost-ksreflector-core-subjects",
          "s-thepitch-ksreflector-priorities",
          "s-lawrence-times-cellphone"
        ]
      },
      "actions": [
        {
          "id": "action-2022-local-control-questionnaire",
          "date": "2022",
          "body": "iVoterGuide's 2022 archive attributes to Hopkins answers favoring local school-board and parent control and opposing Common Core, SEL/sex-education without opt-in, mandatory vaccinations, and mask mandates.",
          "sourceIds": [
            "s-ivoterguide-hopkins"
          ]
        },
        {
          "id": "action-2025-core-subjects-coverage",
          "date": "2025-04-10",
          "body": "Hays Post/Kansas Reflector reported Hopkins said state-board requirements burdened teachers and administrators and that her agenda centered on reading and writing.",
          "sourceIds": [
            "s-hayspost-ksreflector-core-subjects"
          ]
        },
        {
          "id": "action-2026-cellphone-local-control",
          "date": "2026-01-16",
          "body": "Lawrence Times/Kansas Reflector reported Hopkins and Beryl New testified neutrally on a statewide cellphone-ban bill and pointed to local district policies developed with community collaboration.",
          "sourceIds": [
            "s-lawrence-times-cellphone"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-questionnaire-archive-local-control",
          "platform": "Candidate questionnaire archive",
          "observation": "The public iVoterGuide archive contains Hopkins's 2022 responses on local control, parental opt-in, Common Core, school safety, and health mandates.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ivoterguide-hopkins"
          ],
          "mappedToIssueId": "local-control-core-academics-state-mandates"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Kansas Reflector",
          "observation": "Local control / core academics / federal-state role: Hopkins's 2022 iVoterGuide questionnaire and 2025 Kansas Reflector/Hays Post coverage map to local control, core academics, parental opt-in, and state-mandate streamlining. Keep all questionnaire material dated.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "local-control-core-academics-state-mandates"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Reports Hopkins said regulatory mandates and paperwork burdened districts with modest staffing.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "local-control-core-academics-state-mandates"
        }
      ],
      "gap": {
        "summary": "Questionnaire responses are useful but dated; confirm any 2026 campaign statement before presenting them as current campaign priorities.",
        "evidenceIds": [
          "action-2022-local-control-questionnaire"
        ]
      }
    },
    {
      "id": "public-school-funding-school-choice",
      "title": "Public-School Funding and School Choice / Voucher-Adjacent Policy",
      "stated": {
        "text": "The clearest 2026 legislative-priority record is official House Education minutes for HB 2468. Those minutes state that Hopkins and Beryl New, as State Board legislative liaisons, said the board voted to prioritize only using public funds for public schools and that HB 2468 ran counter to that priority by making funds otherwise available for public schools available to families choosing private schools.",
        "sourceIds": [
          "s-hb2468-minutes"
        ]
      },
      "actions": [
        {
          "id": "action-hb2468-opponent-testimony",
          "date": "2026-02-17",
          "body": "Hopkins and Beryl New were recorded in House Education minutes as opposing HB 2468 in their State Board legislative-liaison capacity.",
          "sourceIds": [
            "s-hb2468-minutes"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Reports Hopkins said she was not willing to cut the board-pay item and had lobbied the Legislature for board raises.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksde-state-board"
          ],
          "mappedToIssueId": "public-school-funding-school-choice"
        },
        {
          "id": "ss-crossref-3",
          "platform": "kwch",
          "observation": "URL: https://www.kwch.com/2026/04/14/kansas-state-board-education-selects-its-next-commissioner/",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "public-school-funding-school-choice"
        }
      ],
      "gap": {
        "summary": "Frame this as State Board liaison testimony, not as a solo Hopkins campaign position. Direct written testimony PDF should be captured if final UI uses quotation-level detail.",
        "evidenceIds": [
          "action-hb2468-opponent-testimony"
        ]
      }
    },
    {
      "id": "teacher-workforce-licensure-benefits",
      "title": "Teacher Workforce, Licensure, and School Employee Benefits",
      "stated": {
        "text": "Hopkins's official assignments include the Teacher Vacancy and Supply Committee and Professional Standards Board Liaison. In 2025 written testimony, Hopkins and Danny Zeck supported bills that aligned with State Board priorities on moving teachers from KPERS 3 to KPERS 2 and reducing barriers for retired teachers returning to the classroom.",
        "sourceIds": [
          "s-ksde-district-5",
          "s-hb2129-testimony",
          "s-hb2194-testimony"
        ]
      },
      "actions": [
        {
          "id": "action-hb2129-kpers",
          "date": "2025-02-05",
          "body": "Hopkins and Zeck submitted proponent testimony for HB 2129, saying it supported the State Board priority to move Kansas school employees on KPERS 3 to KPERS 2.",
          "sourceIds": [
            "s-hb2129-testimony"
          ]
        },
        {
          "id": "action-hb2194-return-to-work",
          "date": "2025-02-12",
          "body": "Hopkins and Zeck submitted proponent testimony for HB 2194 on reducing wait time and penalties for retired teachers returning to work.",
          "sourceIds": [
            "s-hb2194-testimony"
          ]
        },
        {
          "id": "action-professional-standards-teacher-vacancy",
          "date": "2025-2026",
          "body": "KSDE lists Hopkins as Professional Standards Board Liaison and on the Teacher Vacancy and Supply Committee.",
          "sourceIds": [
            "s-ksde-district-5"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Need final bill outcome checks if these testimony items become claims about enacted policy rather than board priorities.",
        "evidenceIds": [
          "action-hb2129-kpers"
        ]
      }
    },
    {
      "id": "student-services-special-education-administration",
      "title": "Student Services and Special Education Administration",
      "stated": {
        "text": "In 2026, Hopkins and Beryl New submitted opponent testimony on SB 441, an applied-behavior-analysis services bill. The testimony said federal law already ensures services necessary for a free appropriate public education, and raised concerns about requiring districts to allow private providers without evaluating educational necessity.",
        "sourceIds": [
          "s-sb441-testimony"
        ]
      },
      "actions": [
        {
          "id": "action-sb441-opponent-testimony",
          "date": "2026-02-25",
          "body": "Hopkins and New opposed SB 441 as State Board legislative liaisons.",
          "sourceIds": [
            "s-sb441-testimony"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Need bill-status check before saying whether the Legislature adopted, amended, or rejected the SB 441 approach.",
        "evidenceIds": [
          "action-sb441-opponent-testimony"
        ]
      }
    }
  ],
  "ownWordsNarrative": "candidateControlled: found: KSDE official board profile and contact page; 2022 iVoterGuide questionnaire archive; notConfirmed: Current 2026 Hopkins campaign website; Candidate-controlled Facebook page; Candidate-controlled X/Twitter account; Candidate-controlled Instagram account; Candidate-controlled LinkedIn profile; Native post engagement metrics, likes, comments, shares, follows, or reposts; observedSignals: id: online-questionnaire-2022; platform: iVoterGuide; type: candidate_questionnaire_archive; mappedToIssueId: local-control-core-academics-state-mandates; summary: 2022 questionnaire responses are the only substantial candidate-authored issue corpus surfaced in this pass.; sourceIds: s-ivoterguide-hopkins",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "Campaign finance details were not fully itemized in the reviewed public records.",
    "donors": [],
    "undisclosed": "Do not use 2022 donors as evidence of 2026 funding unless a current Hopkins 2026 committee/report is later found.",
    "reportingPeriod": "No Hopkins 2026 report found; historical 2022 State Board campaign reports reviewed",
    "source": "Kansas State Board of Education Odd Numbered Districts 2026 Election Cycle"
  },
  "sources": [
    {
      "id": "s-ksde-state-board",
      "tier": "primary",
      "url": "https://www.ksde.gov/state-board",
      "title": "State Board",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The State Board oversees public K-12 education, standards, licensure, accreditation, and commissioner appointment",
        "Cathy Hopkins is current State Board chair and District 5 representative"
      ]
    },
    {
      "id": "s-ksde-district-5",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Kansas State Board of Education District 5",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hopkins is listed as chair and legislative liaison",
        "Years of service on the board are 2023, 2024, 2025, and 2026",
        "Committee assignments include Coordinating Council, Professional Standards Board Liaison, Teacher Vacancy and Supply Committee, and Governor's Education Council",
        "District 5 includes Hays USD 489 and other western/central Kansas districts"
      ]
    },
    {
      "id": "s-ksde-jan2025-structured-literacy-chair",
      "tier": "primary",
      "url": "https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Feature-Story/ArtMID/6201/ArticleID/4005/Kansas-State-Board-of-Education-receives-update-on-structured-literacy-licensure-requirements",
      "title": "Kansas State Board of Education receives update on structured literacy licensure requirements",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Board received update on structured-literacy licensure requirements",
        "Board members elected Cathy Hopkins as chair for 2025-2026"
      ]
    },
    {
      "id": "s-ksde-feb2026-literacy",
      "tier": "primary",
      "url": "https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Feature-Story/ArtMID/6201/ArticleID/4847/Spotlight-on-literacy-highlights-ongoing-work-investment-needed160to-improve-Kansas-childrens-reading-success",
      "title": "Spotlight on literacy highlights ongoing work, investment needed to improve Kansas children's reading success",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KSDE described literacy initiatives aligned to science of reading and structured literacy",
        "Hopkins was quoted as chair during literacy day event"
      ]
    },
    {
      "id": "s-ksde-commissioner-search-subcommittee",
      "tier": "primary",
      "url": "https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Standards-and-Instruction/ArtMID/6191/ArticleID/4594/State-Board-begins-process-of-searching-for-a-new-education-commissioner",
      "title": "State Board begins process of searching for a new education commissioner",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Board voted to form commissioner-search subcommittee including Hopkins, Danny Zeck, and Michelle Dombrosky",
        "Hopkins discussed search-firm and full-board selection process"
      ]
    },
    {
      "id": "s-ksde-commissioner-finalists",
      "tier": "primary",
      "url": "https://www.ksde.gov/news-center/news-releases/2026/04/14/kansas-state-board-of-education-names-finalists-for-commissioner-of-education",
      "title": "Kansas State Board of Education names finalists for commissioner of education",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KSDE announced finalists for commissioner of education",
        "KSDE quoted State Board Chair Cathy Hopkins in the finalist announcement"
      ]
    },
    {
      "id": "s-kmuw-commissioner-steel",
      "tier": "secondary",
      "url": "https://www.kmuw.org/news/2026-04-14/kansas-boe-names-jake-steel-as-states-next-education-commissioner",
      "title": "Kansas BOE names Jake Steel as state's next education commissioner",
      "publisher": "KMUW / Kansas News Service",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "State Board selected Jake Steel as next commissioner",
        "Seven of ten board members supported Steel; Michelle Dombrosky voted no and Debby Potter and Connie O'Brien did not vote",
        "Hopkins was quoted in release statement on Steel"
      ]
    },
    {
      "id": "s-hb2468-minutes",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/minutes/agenda_item_2026021720537638081",
      "title": "House Education minutes - HB 2468",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hopkins and Beryl New, State Board legislative liaisons, said the State Board voted to prioritize only using public funds for public schools in 2026 legislative priorities",
        "The liaisons said HB 2468 was counter to that priority"
      ]
    },
    {
      "id": "s-hb2129-testimony",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/committees/ctte_h_financial_institutions_and_pensions_1/documents/testimony/20250205_03.pdf",
      "title": "Proponent Testimony for HB 2129",
      "publisher": "Kansas Legislature / State Board legislative liaisons",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hopkins and Danny Zeck supported HB 2129 as aligned with State Board priority to move Kansas school employees from KPERS 3 to KPERS 2"
      ]
    },
    {
      "id": "s-hb2194-testimony",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/committees/ctte_h_financial_institutions_and_pensions_1/documents/testimony/20250214_05.pdf",
      "title": "Proponent Testimony for HB 2194",
      "publisher": "Kansas Legislature / State Board legislative liaisons",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hopkins and Danny Zeck supported HB 2194 as aligned with reducing wait time and financial penalties for retired teachers returning to work"
      ]
    },
    {
      "id": "s-sb441-testimony",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/committees/ctte_s_ed_1/misc_documents/download_testimony/ctte_s_ed_1_20260225_23_testimony.html",
      "title": "Opponent Testimony for SB 441",
      "publisher": "Kansas Legislature / State Board legislative liaisons",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hopkins and Beryl New opposed SB 441 on applied behavior analysis services as written",
        "Testimony cited free appropriate public education and educational-necessity concerns"
      ]
    },
    {
      "id": "s-ivoterguide-hopkins",
      "tier": "secondary",
      "url": "https://ivoterguide.com/candidate/70910/race/17825/election/987",
      "title": "Cathy Hopkins candidate-guide questionnaire archive",
      "publisher": "iVoterGuide",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2022 candidate profile and questionnaire archive for Hopkins",
        "Questionnaire includes dated positions on local control, Common Core, parental opt-in, school safety, health mandates, and faith self-description"
      ]
    },
    {
      "id": "s-hayspost-ksreflector-core-subjects",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eee8fa4b-005e-4c47-8558-a0c9729e7bd0",
      "title": "KS Board of Education's conservative wing emphasizes desire to focus on core subjects",
      "publisher": "Hays Post / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reports Hopkins discussed streamlining state-board mandates and focusing on reading and writing"
      ]
    },
    {
      "id": "s-thepitch-ksreflector-priorities",
      "tier": "secondary",
      "url": "https://www.thepitchkc.com/kansas-state-board-of-education-establishes-four-priorities-heading-into-2024-election-cycle/",
      "title": "Kansas State Board of Education establishes four priorities heading into 2024 election cycle",
      "publisher": "The Pitch / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reports Hopkins said regulatory mandates and paperwork burdened districts with modest staffing"
      ]
    },
    {
      "id": "s-sentinel-cut-scores",
      "tier": "secondary",
      "url": "https://sentinelksmo.org/ks-board-of-ed-reduces-proficiency-standards/",
      "title": "Seven members of Kansas Board of Education vote to reduce proficiency standards",
      "publisher": "The Sentinel / Kansas Policy Institute",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reports State Board voted 7-3 to accept new proficiency standards",
        "Reports Hopkins supported the standards and disputed that standards or rigor were being lowered"
      ]
    },
    {
      "id": "s-lawrence-times-cellphone",
      "tier": "secondary",
      "url": "https://lawrencekstimes.com/2026/01/16/kr-ksleg-cellphone-ban-debate/",
      "title": "Kansas legislators hear divided testimony on proposed school cellphone ban",
      "publisher": "The Lawrence Times / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Reports Hopkins and Beryl New testified neutrally on a proposed statewide cellphone ban and pointed to local policy-making"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/04/14/kansas-state-board-education-selects-its-next-commissioner/",
      "title": "kwch / Kwch",
      "publisher": "Kwch",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Public-School Funding and School Choice / Voucher-Adjacent Policy.",
        "URL: https://www.kwch.com/2026/04/14/kansas-state-board-education-selects-its-next-commissioner/"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CATHY_HOPKINS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[cathy-hopkins.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
