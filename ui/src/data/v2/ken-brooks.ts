/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const KEN_BROOKS_V2: CandidateFullV2 = {
  "slug": "ken-brooks",
  "name": "Ken Brooks",
  "party": "NP",
  "position": "USD 489 Board President",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "Loss-control safety specialist at Insurance Planning, Inc. (Hays / Great Bend / Russell); LinkedIn credentials list CSP (Certified Safety Professional) and CFPS (Certified Fire Protection Specialist); approximately 18 years tenure as of 2025",
  "hometown": "Hays, Kansas",
  "religion": "Non-denominational / Evangelical",
  "education": "University of Central Oklahoma (per LinkedIn). NOT a Hays High graduate.",
  "issues": [
    {
      "id": "i-supt-nepotism",
      "title": "Superintendent hiring and the nepotism policy",
      "stated": {
        "text": "Brooks has said the board's job is oversight, not day-to-day management of\nthe district. In his 2025 candidate Q&A he said, \"I don't think that we\nneed to micromanage our school district,\" and \"There's only one employee\nin the district who answers to the board, and that's our superintendent.\"\nAsked whether he disagreed with the district administration on any\nissue, he answered, \"I can't think of anything.\" On the underlying\nnepotism debate that began in 2023 over the hire of the superintendent's\nwife as a teacher, Brooks framed the matter as a policy-text question\nrather than a personnel one, saying at the April 2023 meeting, \"This is\nthe same discussion we had last month that got out of hand. You should\nhave asked for something to be put on the agenda.\"",
        "sourceIds": [
          "s-hayspost-brooks-qa-2025",
          "s-hayspost-nepotism-debate-2023",
          "s-tigermedia-nepotism-2023"
        ]
      },
      "actions": [
        {
          "id": "a-personnel-transactions-2023",
          "date": "2023-04-24",
          "body": "Voted yes on the personnel transactions consent item that had been\npulled from the prior month's consent agenda for separate discussion.\nThe motion passed 4-2. Vajnar and Park voted no; Hertel was absent.\nOn the record Brooks said the discussion should have been raised\nthrough a formal agenda request rather than re-opened at the meeting.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-nepotism-debate-2023",
            "s-tigermedia-nepotism-2023"
          ]
        },
        {
          "id": "a-admin-contracts-2024",
          "date": "2024-01-22",
          "body": "Voted yes on one-year contract extensions for the district's\nadministrators. The motion passed 5-1-1. Park voted no; Yarmer\nabstained. Brooks said on the record that the board was telling the\nadministrators it would look at their contracts in the future and was\nrecommending extension because the board wanted to keep the staff in\nplace.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-admin-contracts-2024"
          ]
        },
        {
          "id": "a-admin-contracts-2026-03-10",
          "date": "2026-03-10",
          "body": "Made the motion to extend the district administrators' contracts\nthrough the 2027-2028 school year. The motion passed 5-2. He then\nmade the motion to extend the district directors' contracts through\nthe same school year, which passed 7-0. On the record he said the\nadministrators had \"brought everything that you asked for for us to\nbe able to vote\" and that \"we have an incredible administrative staff,\nthere's no reason why we wouldn't approve every single one of them.\"",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-tigermedia-admin-contracts-2026",
            "s-citizenjournal-board-takeaways"
          ]
        },
        {
          "id": "a-non-renew-hibbs-2026-03-10",
          "date": "2026-03-10",
          "body": "At the same March 10, 2026 meeting, voted yes on the motion to\nindicate intent to non-renew teacher Silas Hibbs's contract for the\n2026-2027 school year. The motion passed 5-2 after two executive\nsessions.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-tigermedia-admin-contracts-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Role records changed during the capture period and should not be inferred from stale candidate data. Hays Post's November 5, 2025 election story called Brooks the current vice president and said he would serve a second four-year term. Tiger Media Network reported on July 16, 2025 that Curt Vajnar was re-elected board president and Brooks was elected board vice president. After the January 2026 reorganization,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-fb-brooks-numeric"
          ],
          "mappedToIssueId": "i-supt-nepotism"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The Hays Chamber member page likewise lists Brooks as \"Board Member,\" Ruder as \"Board Vice President,\" and Vajnar as \"Board President.\" The USD 489 Diligent public portal still listed Brooks as \"Vice-President\" in the accessible capture, so it appears stale relative to January 2026 coverage and the Chamber page. This harvest therefore treats Brooks as a USD 489 board member, with prior vice-president status, not...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-supt-nepotism"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Brooks' accessible public message is not organized around campaign social media. It is concentrated in Hays Post candidate Q&As, local school-board coverage, official board/election records, and limited public profile previews.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-fb-brooks-numeric"
          ],
          "mappedToIssueId": "i-supt-nepotism"
        }
      ]
    },
    {
      "id": "i-budget-facilities",
      "title": "USD 489 budget, bond projects, and facilities",
      "stated": {
        "text": "In his October 2025 candidate Q&A, Brooks said, \"I do feel they manage\ntheir budget adequately,\" referring to Superintendent Ron Wilson and\nAssistant Superintendent Chris Hipp. He said he supports the remaining\nbond projects, supports the district's five-year capital outlay plan\nas a useful planning tool, and wants to continue lowering enrollment\nfees. He also said he approved extra sewage line funding for\nO'Loughlin Elementary. In 2021 he said he did not have \"an agenda so\nmuch\" but wanted to see the bond passed.",
        "sourceIds": [
          "s-hayspost-brooks-qa-2025",
          "s-hayspost-brooks-qa-2021"
        ]
      },
      "actions": [
        {
          "id": "a-fy25-budget-2024-09-09",
          "date": "2024-09-09",
          "body": "Voted yes on the FY25 USD 489 budget approval and on the motion to\nexceed the revenue-neutral rate at the budget hearing where taxpayers\nJohn Pyle and Kent Kennedy raised concerns. Roll-call totals were\nnot enumerated by name in available reporting; Brooks's yes is\nunambiguous from the board majority and the absence of any reported\ndissent from him.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-budget-2024"
          ]
        },
        {
          "id": "a-bond-pm-motion-2025-03-24",
          "date": "2025-03-24",
          "body": "Voted no on Yarmer's motion to look into hiring an outside project\nmanager for the remainder of the bond program, including interviewing\na prospective manager. The motion failed 3-4; Yarmer, Park, and\nVajnar voted yes.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-bond-pm-2025"
          ]
        },
        {
          "id": "a-naming-rights-motion-2025-08-04",
          "date": "2025-08-04",
          "body": "At the August 4, 2025 board retreat, moved to add discussion of\nGolden Belt Bank's $200,000, 10-year naming-rights offer for the new\nHays High football field to an upcoming regular-meeting agenda. The\nmotion failed 3-3 for lack of a fourth yes; Brooks, Ruder, and\nZampieri-Lillpopp voted yes; Yarmer was absent. Brooks said the bank\ndid not have \"any ill intentions\" and was \"trying to help our\ncommunity and help our school district,\" and noted that board policy\nallows three members to request a special meeting. Board President\nVajnar later pulled the item from the September 8 agenda; the bank's\noffer expired September 15, 2025 without a board accept vote.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-naming-rights-1",
            "s-hayspost-naming-rights-2"
          ]
        },
        {
          "id": "a-asbestos-hms-2025-09-22",
          "date": "2025-09-22",
          "body": "Voted yes on the $69,480 contract with ACM Removal LLS to remove\nfloor tile and abate non-friable asbestos-containing mastic in\nhallway areas of the new Hays Middle School building at 2300 13th\nStreet. The motion passed 6-1; Park was the lone no vote. Brooks\nasked Park what he would have changed if he had received the\nchange-order documentation in advance.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-asbestos-hms-preview",
            "s-hayspost-asbestos-hms-vote"
          ]
        },
        {
          "id": "a-land-sale-2025-12-15",
          "date": "2025-12-15",
          "body": "Voted yes on the sealed-bid sale of 7.23 acres of district-owned\nproperty at 201 W. 29th Street, north of the current Hays Middle\nSchool football field. The motion passed 5-1; Park voted no;\nZampieri-Lillpopp was absent. An earlier motion by Park to table the\nsale had failed.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-land-sale-2025"
          ]
        },
        {
          "id": "a-asbestos-felten-2025-12-16",
          "date": "2025-12-16",
          "body": "Voted yes on the $110,315 contract with Integrated Solutions to\nremove asbestos floor tile, adhesive, and window glazing at Felten\nElementary. The motion passed 4-2; Park and Yarmer voted no.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-asbestos-felten-vote"
          ]
        },
        {
          "id": "a-felten-gmp-2026-02-24",
          "date": "2026-02-24",
          "body": "Voted yes on the Felten Elementary bond project Guaranteed Maximum\nPrice and called for the vote in his procedural role. The motion\npassed 4-2; Park and Yarmer voted no.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-tigermedia-felten-gmp-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-fb-campaign-presence-budget",
          "platform": "Facebook",
          "observation": "A campaign Facebook page titled \"Ken Brooks for Hays USD 489 School\nBoard\" exists at two URL forms (a numeric-ID page and a vanity URL)\nas of 2026-05-20. Content on both pages is gated to logged-out users\nand no post content was observable from this capture. Presence of\nthe page is recorded as an observation; no post-level behavior is\nattributed.",
          "observedAt": "2026-05-20",
          "sourceIds": [
            "s-fb-brooks-numeric",
            "s-fb-brooks-vanity"
          ],
          "mappedToIssueId": "i-budget-facilities"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "The 2025 Hays Post Q&A is the strongest first-person source. Brooks said he ran because of love for the community and kids, described himself as a listener, and said he studies board materials before votes. He tied his first term to the bond, the new high school, lower enrollment fees, and replacing inconvenient early-release days with teacher planning time. (Hays Post, Oct. 16, 2025)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-brooks-qa-2025"
          ],
          "mappedToIssueId": "i-budget-facilities"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "His 2025 policy posture is pro-facilities and pro-administration. He supported the five-year capital outlay plan and remaining bond projects, said the bond work was keeping pace, and said the board should provide oversight while administrators and teachers handle day-to-day operations. (Hays Post, Oct. 16, 2025)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-brooks-qa-2025"
          ],
          "mappedToIssueId": "i-budget-facilities"
        }
      ]
    },
    {
      "id": "i-board-process",
      "title": "Public comment process and board–administration relations",
      "stated": {
        "text": "Brooks has consistently described the board's role as oversight, with\nday-to-day operations handled by the superintendent, administrators,\nand teachers. In his 2025 candidate Q&A he said, \"I don't think that\nwe need to micromanage our school district,\" and \"There's only one\nemployee in the district who answers to the board, and that's our\nsuperintendent.\" On a 2025 motion to table the Hays High student\nhandbook for further board review, he said on the record, \"We're not\nmicromanaging that whole team there. They've done a terrific job and\nthere's no reason why we should put this on hold.\"",
        "sourceIds": [
          "s-hayspost-brooks-qa-2025",
          "s-tigermedia-handbook-2025"
        ]
      },
      "actions": [
        {
          "id": "a-budget-hearing-reply-2024-09-09",
          "date": "2024-09-09",
          "body": "At the September 9, 2024 FY25 budget hearing, after taxpayers John\nPyle and Kent Kennedy raised budget concerns and fellow member\nAllen Park said, \"Budget is our lane. We don't spend enough time\nwith it,\" Brooks's on-record reply was, \"The board works and votes\non items in the budget throughout the year.\"",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-hayspost-budget-2024"
          ]
        },
        {
          "id": "a-handbook-discussion-2025-07-14",
          "date": "2025-07-14",
          "body": "At the July 14, 2025 board meeting, the motion on the Hays High\nhandbook failed 4-3. Brooks argued against tabling the handbook for\nfurther board review, saying on the record, \"We're not micromanaging\nthat whole team there. They've done a terrific job and there's no\nreason why we should put this on hold.\"",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-tigermedia-handbook-2025"
          ]
        },
        {
          "id": "a-bathrooms-discussion-2026-04-21",
          "date": "2026-04-21",
          "body": "At the April 21, 2026 board meeting, during a discussion of Hays\nHigh single-stall bathroom design and vandalism reports raised by\nPark, Brooks said on the record, \"We've had this discussion many\ntimes in the past, and you keep saying the same things, over and\nover and over, and they have been answered for you.\" He also said,\n\"The administrators just felt all of them attacked. We don't\nmicromanage. That's not our job here on the board, so they\nshouldn't feel like it's us versus them,\" and \"If you want the\ninformation, ask it, but let's end this, because there is nothing\nmore to discuss right now.\" Tiger Media Network separately\nrecorded Brooks saying, \"You make up data. Go ahead and give it\nto us if you have data.\" No formal motion was taken on the item.",
          "sourceIds": [
            "s-usd489-boarddocs",
            "s-usd489-highbond",
            "s-hayspost-bathrooms-2026",
            "s-tigermedia-bathrooms-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "His budget message defends the district. In the 2025 Q&A, he said the district manages its budget adequately, described the administration as trustworthy, and said the board needed proven leadership to remain fiscally responsible while helping Hays grow. He also flagged uncertainty in national and state funding and said special education had never been fully funded by the state. (Hays Post, Oct. 16, 2025)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-brooks-qa-2025"
          ],
          "mappedToIssueId": "i-board-process"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The 2021 Hays Post profile adds older but still relevant self-description. Brooks listed Kiwanis, nearly 14 years helping lead children's ministry at Celebration Community Church, and coordination of the Thanksgiving Community Food Drive with ECMA and First Call For Help since 2008. He supported the 2017 bond after opposing the 2016 version, wanted needed facility improvements, emphasized community information,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-brooks-qa-2021"
          ],
          "mappedToIssueId": "i-board-process"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Post-election messaging was short and bond-focused. After the November 2025 election, Hays Post reported Brooks and Craig Pallister tied with 1,948 unofficial votes; the official Ellis County result later listed Brooks at 1,962. Brooks told Hays Post he hoped to keep the district on track while finishing the bond project and thanked Curt Vajnar, Craig Pallister, and Meagan Zampieri-Lillpopp. (Hays Post, Nov. 5,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-board-process"
        }
      ]
    }
  ],
  "whereTheyWorship": "Celebration Community Church (Hays campus, 5790 230th Ave)",
  "campaignFinance": {
    "totalRaised": "Not itemized in public web records",
    "narrative": "Kansas Public Disclosure Commission scope excludes USD 489 (only the\nWichita school board is within KPDC's school-board scope among Kansas\nlocals). USD 489 candidates file with the Ellis County Clerk. Per K.S.A.\n25-4145 et seq., candidates spending and receiving less than $1,000 file\nonly an affidavit, not an itemized contribution report. Brooks publicly\nself-attested in his 2021 Hays Post Q&A that he received no outside money\nor in-kind PAC support, consistent with the sub-$1,000 affidavit-only\nstatutory pathway. No itemized donor list exists on the public web for\neither his 2021 or 2025 cycle as of 2026-05-20.",
    "donors": [],
    "undisclosed": "No donor-by-donor public web ledger was found in the reviewed local records.",
    "reportingPeriod": "Most recent local cycle reviewed",
    "source": "Candidate memory v2 issue file and local filing-system notes"
  },
  "sources": [
    {
      "id": "s-usd489-boarddocs",
      "tier": "primary",
      "url": "https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic",
      "title": "USD 489 BoardDocs — Public Meeting Portal",
      "publisher": "Unified School District 489 (Hays, KS)",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "USD 489 board meeting minutes, agenda packets, and roll-call votes are publicly recorded in BoardDocs",
        "2023-04-24 personnel transactions motion (passed 4-2; Vajnar and Park no; Hertel absent)",
        "2024-01-22 administrator contract one-year extensions motion (passed 5-1-1; Park no; Yarmer abstain)",
        "2024-04-22 Hays Middle School mascot change to 'Indians' motion (passed 5-2; Brooks and Zampieri-Lillpopp no)",
        "2024-09-09 FY25 budget approval and exceed-revenue-neutral-rate motions (both passed)",
        "2025-03-24 outside bond project manager motion (failed 3-4; Yarmer, Park, Vajnar yes)",
        "2025-07-14 Hays High handbook motion (failed 4-3)",
        "2025-08-04 Golden Belt Bank naming-rights add-to-agenda motion (failed 3-3; Brooks, Ruder, Zampieri-Lillpopp yes; Yarmer absent)",
        "2025-09-22 HMS hallway mastic asbestos removal contract with ACM Removal LLS for $69,480 (passed 6-1; Park no)",
        "2025-12-15 sale of 7.23 acres at 201 W. 29th St. by sealed-bid (passed 5-1; Park no; Zampieri-Lillpopp absent)",
        "2025-12-16 Felten Elementary tile and window-glazing asbestos contract with Integrated Solutions for $110,315 (passed 4-2; Park and Yarmer no)",
        "2026-02-24 Felten Elementary bond Guaranteed Maximum Price motion (passed 4-2; Brooks called for the vote; Park and Yarmer no)",
        "2026-03-10 administrator contract extension through 2027–2028 (passed 5-2; Brooks mover)",
        "2026-03-10 director contract extension through 2027–2028 (passed 7-0; Brooks mover)",
        "2026-03-10 intent to non-renew teacher Silas Hibbs (passed 5-2)"
      ]
    },
    {
      "id": "s-usd489-highbond",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/Portal/",
      "title": "USD 489 Diligent / HighBond — District Meeting Video and Document Portal",
      "publisher": "Unified School District 489 (Hays, KS)",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "USD 489 maintains district-controlled meeting video recordings for board meetings",
        "2026-04-21 Hays High bathrooms and vandalism discussion video record"
      ]
    },
    {
      "id": "s-hayspost-brooks-qa-2025",
      "tier": "primary",
      "url": "https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220",
      "title": "USD 489 candidate Q&A: Ken Brooks (October 16, 2025)",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Brooks stated he does not think the board should micromanage the school district",
        "Brooks stated only one district employee answers to the board — the superintendent",
        "Brooks stated he believes the administration manages the district budget adequately",
        "Brooks stated he supports the remaining bond projects",
        "Brooks stated he approved extra sewage line funding for O'Loughlin Elementary",
        "Brooks stated he supports the five-year capital outlay plan as a useful planning tool",
        "Brooks stated he could not think of any issue on which he disagreed with the district administration",
        "Brooks stated he wants to continue lowering enrollment fees",
        "Brooks identified as a loss-control safety specialist at Insurance Planning for 18 years",
        "Brooks identified as a single father whose three daughters all graduated from Hays High",
        "Observed public online activity mapped to USD 489 budget, bond projects, and facilities.",
        "Observed public online activity mapped to Public comment process and board–administration relations."
      ]
    },
    {
      "id": "s-hayspost-brooks-qa-2021",
      "tier": "primary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "USD 489 candidate profile: Ken Brooks (October 20, 2021)",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Brooks self-attested no outside money or in-kind PAC support for his 2021 campaign",
        "Brooks self-identified as 14-year leader of Celebration Community Church Hays children's ministry as of 2021",
        "Brooks coordinated the Thanksgiving Community Food Drive since 2008 with Ellis County Ministerial Alliance and First Call For Help",
        "Brooks identified as a Kiwanis International member",
        "Brooks said he did not have 'an agenda so much' but wanted the bond passed",
        "Observed public online activity mapped to Public comment process and board–administration relations."
      ]
    },
    {
      "id": "s-hayspost-nepotism-debate-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
      "title": "Hays USD 489 BOE debates nepotism again at Monday meeting",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "April 24, 2023 personnel transactions vote passed 4-2",
        "Vajnar and Park voted no; Hertel absent",
        "Brooks said on the record: 'This is the same discussion we had last month that got out of hand. You should have asked for something to be put on the agenda.'"
      ]
    },
    {
      "id": "s-tigermedia-nepotism-2023",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=72830",
      "title": "USD 489 Board continues discussion on nepotism policy",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "April 24, 2023 board meeting continued nepotism-policy debate",
        "Brooks took the administration's position that the question was about policy text, not personnel"
      ]
    },
    {
      "id": "s-hayspost-admin-contracts-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
      "title": "Hays USD 489 district administrators' contracts extended another year",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "January 22, 2024 administrator contract extensions vote passed 5-1-1",
        "Park voted no; Yarmer abstained",
        "Brooks said on the record: 'What we're doing here today is letting them know that we will be looking at their contracts in the future, and we're recommending that their contract be extended because we do want to keep this staff here.'"
      ]
    },
    {
      "id": "s-tigermedia-admin-contracts-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=95549",
      "title": "USD 489 Board approves administrator and director contracts (March 2026)",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "March 10, 2026 administrator contract extension through 2027-2028 passed 5-2; Brooks was mover",
        "March 10, 2026 director contract extension through 2027-2028 passed 7-0; Brooks was mover",
        "March 10, 2026 intent to non-renew teacher Silas Hibbs passed 5-2",
        "Brooks said on the record: 'They brought everything that you asked for for us to be able to vote.'",
        "Brooks said on the record: 'We have an incredible administrative staff, there's no reason why we wouldn't approve every single one of them.'"
      ]
    },
    {
      "id": "s-citizenjournal-board-takeaways",
      "tier": "secondary",
      "url": "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/",
      "title": "Takeaways from Hays USD 489 Education Board Meeting",
      "publisher": "Citizen Journal",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "March 2026 board meeting administrator/director contract motions were contested by Park and Yarmer",
        "Brooks moved to approve administrator and director contracts as presented"
      ]
    },
    {
      "id": "s-hayspost-asbestos-hms-preview",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7330e366-e683-4062-94e7-523a905418e7",
      "title": "Hays USD 489 board to consider change order for Hays High, asbestos removal for HMS",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "September 22, 2025 meeting agenda included ACM Removal LLS contract for $69,480 to remove floor tile and abate non-friable asbestos-containing mastic in hallway areas of the new Hays Middle School building"
      ]
    },
    {
      "id": "s-hayspost-asbestos-hms-vote",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
      "title": "Board member calls out fellow member after repeated no votes, including 1 on asbestos removal",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "September 22, 2025 HMS asbestos removal contract passed 6-1; Park voted no",
        "Brooks asked Park what he would have changed if he had received the change-order documentation in advance"
      ]
    },
    {
      "id": "s-hayspost-asbestos-felten-vote",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/965dbfb4-fc96-4377-b6f3-7f5050176e21",
      "title": "Hays USD 489 votes to replace tile at former middle school, abate asbestos",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "December 16, 2025 Felten Elementary asbestos contract with Integrated Solutions for $110,315 passed 4-2",
        "Park and Yarmer voted no"
      ]
    },
    {
      "id": "s-hayspost-land-sale-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/909a410b-bf64-406d-a98b-01417d221495",
      "title": "Hays USD 489 school board approves sale of land next to middle school",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "December 15, 2025 sale of 7.23 acres at 201 W. 29th St. by sealed bid passed 5-1",
        "Park voted no; Zampieri-Lillpopp absent",
        "Earlier motion by Park to table the sale failed"
      ]
    },
    {
      "id": "s-tigermedia-felten-gmp-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=94701",
      "title": "Felten Elementary GMP vote (February 2026)",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "February 24, 2026 Felten Elementary bond Guaranteed Maximum Price motion passed 4-2",
        "Brooks called for the vote",
        "Park and Yarmer voted no"
      ]
    },
    {
      "id": "s-hayspost-bond-pm-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "Hays USD 489 board votes not to add another manager for bond work",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "March 24, 2025 motion to look into hiring an outside bond project manager failed 3-4",
        "Yarmer, Park, and Vajnar voted yes; the four-member majority included Brooks"
      ]
    },
    {
      "id": "s-hayspost-naming-rights-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a90fb672-f7e5-4826-b5f3-1decd214e83c",
      "title": "Hays USD 489 pauses Hays High football field naming rights donation discussion",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Golden Belt Bank offered $200,000 for 10-year naming rights to the new Hays High football field",
        "August 4, 2025 motion by Brooks to add the naming-rights discussion to a regular meeting agenda failed 3-3",
        "Brooks, Ruder, and Zampieri-Lillpopp voted yes; Yarmer was absent",
        "Brooks said the bank did not have 'any ill intentions' and was 'trying to help our community and help our school district'",
        "Brooks said 'school board policy says that three board members can request a special board meeting'"
      ]
    },
    {
      "id": "s-hayspost-naming-rights-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/aefb9f40-2e86-4bb2-976e-2f731e7ce14f",
      "title": "Hays USD 489 postpones naming rights decision, despite bank's deadline",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Board President Vajnar pulled the naming-rights item from the September 8, 2025 regular meeting agenda",
        "Golden Belt Bank's offer expired September 15, 2025 without a board accept vote"
      ]
    },
    {
      "id": "s-hayspost-budget-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a7ced49b-b60e-48aa-a295-c52204c7a0b6",
      "title": "Hays USD 489 approves budget; taxpayers express concerns",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "September 9, 2024 FY25 budget approval and revenue-neutral-rate hearing",
        "Taxpayers John Pyle and Kent Kennedy raised budget concerns at the hearing",
        "Brooks replied: 'The board works and votes on items in the budget throughout the year.'"
      ]
    },
    {
      "id": "s-tigermedia-handbook-2025",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=87800",
      "title": "Hays High handbook discussion (July 2025)",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "July 14, 2025 Hays High handbook vote (4-3 failed)",
        "Brooks said on the record: 'We're not micromanaging that whole team there. They've done a terrific job and there's no reason why we should put this on hold.'"
      ]
    },
    {
      "id": "s-hayspost-bathrooms-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede",
      "title": "USD 489 board members express concerns about bathrooms, vandalism (April 2026)",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "April 21, 2026 board discussion of Hays High bathroom design and vandalism (no formal vote)",
        "Brooks said on the record: 'We've had this discussion many times in the past, and you keep saying the same things, over and over and over, and they have been answered for you.'",
        "Brooks said on the record: 'The administrators just felt all of them attacked. We don't micromanage. That's not our job here on the board, so they shouldn't feel like it's us versus them.'",
        "Brooks said on the record: 'If you want the information, ask it, but let's end this, because there is nothing more to discuss right now.'"
      ]
    },
    {
      "id": "s-tigermedia-bathrooms-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=96863",
      "title": "Bathroom and vandalism discussion (April 2026)",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "April 21, 2026 board discussion of Hays High bathroom design and vandalism",
        "Brooks said on the record: 'You make up data. Go ahead and give it to us if you have data.'",
        "Brooks said on the record: 'That's not our job.'"
      ]
    },
    {
      "id": "s-fb-brooks-numeric",
      "tier": "social",
      "url": "https://www.facebook.com/Ken-Brooks-for-Hays-USD-489-School-Board-106283281672831/",
      "title": "Ken Brooks for Hays USD 489 School Board — campaign Facebook page (numeric ID)",
      "publisher": "Facebook (page metadata)",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "A campaign Facebook page bearing the title 'Ken Brooks for Hays USD 489 School Board' exists at this URL as of 2026-05-20",
        "Page content is gated to logged-out users; no post content is observable from this fetch"
      ]
    },
    {
      "id": "s-fb-brooks-vanity",
      "tier": "social",
      "url": "https://www.facebook.com/kenbrooksforusd489",
      "title": "Ken Brooks for Hays USD 489 School Board — campaign Facebook page (vanity URL)",
      "publisher": "Facebook (page metadata)",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "A campaign Facebook page bearing the title 'Ken Brooks for Hays USD 489 School Board' exists at this vanity URL as of 2026-05-20",
        "Page content is gated to logged-out users; no post content is observable from this fetch"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Superintendent hiring and the nepotism policy.",
        "The Hays Chamber member page likewise lists Brooks as \"Board Member,\" Ruder as \"Board Vice President,\" and Vajnar as \"Board President.\" The USD 489 Diligent public portal still lis",
        "Observed public online activity mapped to Public comment process and board–administration relations."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(KEN_BROOKS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ken-brooks.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
