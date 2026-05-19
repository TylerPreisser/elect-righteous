/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const RUTH_RUDER_V2: CandidateFullV2 = {
  "slug": "ruth-ruder",
  "name": "Ruth Ruder",
  "party": "NP",
  "position": "USD 489 Board of Education member",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "Vice President, Golden Plains Credit Union (Hays branch); USD 489 Board of Education member",
  "hometown": "Hays, Kansas (graduated Hays High School, 1988)",
  "education": "Hays High School graduate, 1988",
  "family": "Married 34 years to Vernon Ruder Jr.; three children",
  "district": "USD 489 — Hays, Kansas (Ellis County)",
  "issues": [
    {
      "id": "i-superintendent-oversight",
      "title": "Board oversight of the superintendent and administrators",
      "stated": {
        "text": "During her 2023 campaign, Ruth Ruder said she would not micromanage\nthe administration. In her October 2023 candidate Q&A she wrote: \"I\nwould not micromanage. I will review policy and ensure that it is\nbeing abided by and changed if need be. Communication is key.\" She\nadded that she would like \"to improve the relationship between the\nboard and the administration in working on policies and procedures\ntogether as a team.\" From the dais in July 2025, during the Hays High\nSchool student-handbook discussion, she repeated the same boundary\nin her own words: \"The board hires the superintendent, and it is up\nto the superintendent to manage his staff and the principals to\nmanage their schools, not the board. I do not want to be involved\nin every disciplinary action that any kid has at Hays High School.\"",
        "sourceIds": [
          "s-hayspost-ruder-qa-oct2023",
          "s-hayspost-discipline-handbook-jul2025"
        ]
      },
      "actions": [
        {
          "id": "a-handbook-vote-2025",
          "date": "2025-07-21",
          "body": "Voted yes on a 6-1 motion approving the 2025-26 Hays High School\nstudent handbook, which contained the discipline-policy framework\npresented by Principal Shawn Henderson. Allen Park cast the lone\nno vote. During the discussion preceding the vote, Ruder said\n\"Every scenario is going to be different,\" that until she had\nreason to do otherwise she was \"on the administration's side,\"\nand that handling disciplinary matters was \"[Henderson's] job to\nhandle discipline, not ours.\"",
          "sourceIds": [
            "s-hayspost-discipline-handbook-jul2025",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-admin-contracts-2024",
          "date": "2024-01-22",
          "body": "Voted yes on a 5-1-1 motion approving one-year contract extensions\nfor four district administrators — Superintendent Ron Wilson,\nAssistant Superintendent / Director of Curriculum Shanna Dinkel,\nAssistant Superintendent of Business Services Chris Hipp, and\nDirector of Special Education Kyle Carlin — by blanket motion.\nAllen Park voted no. Derek Yarmer abstained. Park had moved to\nevaluate each administrator's contract individually before the\nfinal vote; that motion failed. Park had also moved to enter\nexecutive session on the superintendent's contract; that motion\nalso failed.",
          "sourceIds": [
            "s-hayspost-admin-contracts-jan2024",
            "s-citizenjournal-board-takeaways",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-admin-contracts-feb2026",
          "date": "2026-02-24",
          "body": "At the February 24, 2026 meeting, the board considered two motions\non district administrator and director contracts. Ruder voted no\non a 3-3 motion (which failed) to push the contract decision to\nMarch 9, 2026. She also voted no on a 4-2 motion (which passed)\nto extend the administrator contracts to March 9. On the same\nnight, she voted yes on a 3-2 motion (which failed) to approve\nHVAC service agreement amendments with Glassman Corp for Roosevelt\nElementary and Hays Middle School (Park and Yarmer no; Goetz\nabstained because her husband works for Glassman; Vajnar absent),\nand yes on the subsequent unanimous motion to instead solicit\ndistrictwide preventive-maintenance RFPs.",
          "sourceIds": [
            "s-hayspost-hvac-contracts-feb2026",
            "s-hayspost-felten-construction-feb2026",
            "s-usd489-boarddocs"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "*A summary of what Ruth Ruder has publicly said and where her statements have appeared. Drawn from her 2023 candidate questionnaires and local news coverage of USD 489 Board of Education meetings between July 2023 and April 2026. We report patterns; we do not interpret intent.*",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-boarddocs"
          ],
          "mappedToIssueId": "i-superintendent-oversight"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The harvested record consists of two 2023 candidate questionnaires published by Hays Post and a recurring set of board-meeting quotes captured by Hays Post over the 2024 to 2026 period. Voters who want to read her own direct statements will find them almost exclusively in board-meeting coverage, not on a candidate-controlled feed.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-boarddocs"
          ],
          "mappedToIssueId": "i-superintendent-oversight"
        },
        {
          "id": "ss-crossref-5",
          "platform": "hayspost.com",
          "observation": "In her 2023 candidate questionnaire (source), Ruder described her motivation in district-and-children terms: \"My first obligation, if elected, will be to the children in our district by providing them through the staff, the resources necessary to allow them to obtain quality educational opportunities.\" She framed her fiscal posture as taxpayer-facing: \"I will do my best at representing the taxpayer in being...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-ruder-profile-jul2023"
          ],
          "mappedToIssueId": "i-superintendent-oversight"
        }
      ]
    },
    {
      "id": "i-board-civility",
      "title": "Communication and civility among board members",
      "stated": {
        "text": "Ruth Ruder ran in 2023 on a communication-and-civility theme. From\nher October 2023 candidate Q&A: \"I would change the current\ncommunication. Working and communicating together in a civil and\norganized manner is how I believe we can accomplish our mission\nmoving forward.\" And: \"I feel like there is not enough communication\nand respect on the current school board.\" She added: \"Even in\ndisagreements, we must be civil and compromise to make the best\ndecisions for our students.\"",
        "sourceIds": [
          "s-hayspost-ruder-qa-oct2023"
        ]
      },
      "actions": [
        {
          "id": "a-civility-exchange-2025",
          "date": "2025-09-22",
          "body": "At a regular board meeting where a $69,480 contract with ACM\nRemoval LLC for asbestos abatement at the new Hays Middle School\nbuilding and a separate $88,347 change order for the new Hays\nHigh School both passed with Allen Park as the lone dissenting\nvote, Ruder publicly addressed Park's vote pattern from the dais.\nHer statements on the floor: \"What would have happened if we had\nall voted no? Would we be in trouble from the health and human\nservices department for not removing asbestos that is known?\";\n\"Are you just voting no to [satisfy] the public, because you're\nnot spending money?\"; and \"Every week we come here and we get\nthese no votes on things that should not be voted no on just to\n[satisfy] the taxpayer to say, 'I didn't vote no on it.' You have\na right to vote the way you want, but I am sick and tired of\ncoming here every week and there's a no vote on something. That\nisn't right for the public.\" Park replied: \"I'm not voting that\nwe shouldn't do it. I'm voting this process to do this. I'm No.\n1 on safety.\" Ken Brooks asked Park what he would have changed\nhad he had the change orders in advance.",
          "sourceIds": [
            "s-hayspost-asbestos-sept2025",
            "s-hayspost-asbestos-preview-sept2025",
            "s-usd489-boarddocs"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "hayspost.com",
          "observation": "They are the experts,\" adding that she would \"review policy and ensure that it is being abided by.\" In a second 2023 profile (source) she described the incumbent board dynamic as: \"I feel like there is not enough communication and respect on the current school board\" and stated that board members \"must be civil and compromise to make the best decisions for our students.\" She reported receiving no money or in-kind...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-ruder-qa-oct2023"
          ],
          "mappedToIssueId": "i-board-civility"
        },
        {
          "id": "ss-crossref-3",
          "platform": "hayspost.com",
          "observation": "In office, Ruder's quoted positions on operational questions cluster around two themes: a non-micromanagement posture toward administration and a priority-setting frame that flags time spent on non-academic issues. On school discipline she said, \"The board hires the superintendent, and it is up to the superintendent to manage his staff and the principals to manage their schools, not the board. I do not want to be...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-discipline-handbook-jul2025"
          ],
          "mappedToIssueId": "i-board-civility"
        },
        {
          "id": "ss-crossref-5",
          "platform": "hayspost.com",
          "observation": "On the April 22, 2026 bathroom-closure and vandalism discussion she said, \"I agreed with the group bathrooms remaining closed,\" and, \"We are acting like vandalism isn't new. It's been going on since the beginning of time. … It boils down to how you parent your children\" (source). On board priorities in the same meeting she said, \"If we would talk on test scores instead of restrooms all of the time, what a...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-bathroom-vandalism-apr2026"
          ],
          "mappedToIssueId": "i-board-civility"
        }
      ]
    },
    {
      "id": "i-bond-facilities",
      "title": "Bond projects, facility construction, and asbestos remediation",
      "stated": {
        "text": "In her October 2023 candidate Q&A, Ruth Ruder said: \"I think the\nboard should have a vital role in the bond moving forward, ensuring\nthat communication is key.\" She also said she would \"do my best at\nrepresenting the taxpayer in being fiscally responsible in the\ndistrict but also identifying smart growth.\" In her July 2023\ncandidate profile, she said her \"first obligation, if elected, will\nbe to the children in our district by providing them through the\nstaff, the resources necessary to allow them to obtain quality\neducational opportunities.\"",
        "sourceIds": [
          "s-hayspost-ruder-qa-oct2023",
          "s-hayspost-ruder-profile-jul2023"
        ]
      },
      "actions": [
        {
          "id": "a-oloughlin-mgp-2024",
          "date": "2024-09-09",
          "body": "Voted yes on a 5-2 motion to table approval of a $14.49 million\nmaximum guaranteed price for O'Loughlin Elementary School\nrenovations until the next board meeting. Ken Brooks and Meagan\nZampieri-Lillpopp voted no. Ruder was joined in the yes-to-table\nmajority by Derek Yarmer, Curt Vajnar, Jayme Goetz, and Allen\nPark. From the floor, Ruder asked: \"Could the sale of Lincoln\nElementary School and Rockwell Administration Center be used to\npay for bond projects?\"",
          "sourceIds": [
            "s-hayspost-oloughlin-mgp-sept2024",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-hhs-change-orders-2024",
          "date": "2024-12-19",
          "body": "Voted yes on a 5-1 special-meeting motion approving change orders\nfor the new Hays High School construction project. Allen Park\ncast the lone no vote; Derek Yarmer was absent. During the\ndiscussion Ruder said she thought it was unfair to insinuate\nthat Nabholz or DLR were trying to cheat the district.",
          "sourceIds": [
            "s-hayspost-hhs-changes-dec2024",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-athletic-facilities-feb2025",
          "date": "2025-02-19",
          "body": "Voted yes across a sequence of athletic-facility capital purchases\nat a single meeting: a $66,364 digital marquee from Golden Rule\nSigns (6-1, Yarmer no), $146,710 in weight-room equipment from\nBSN Sports (7-0 unanimous), $777,680 in video scoreboards (5-2,\nPark and Yarmer no), $687,937 for tennis courts from Stallbaumer\nConstruction (6-1, Yarmer no), and $57,714 for wrestling mats\nfrom Resilite (5-2, Park and Yarmer no). During the tennis-court\ndiscussion Ruder said: \"Do you know how much revenue that brings\nto the city? Do you know how much revenue that one tournament\nbrings to our city?\"",
          "sourceIds": [
            "s-tigermedia-feb2025-expenditures",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-bond-project-manager-2025",
          "date": "2025-03-24",
          "body": "Voted no on a 3-4 motion (which failed) by Derek Yarmer to\ninvestigate hiring an additional project manager for the\nremainder of the $143.5 million bond program. Yarmer, Allen Park,\nand Curt Vajnar voted yes; Ruder, Jayme Goetz, and two other\nmembers voted no. From the floor Ruder said: \"We should have\nlooked at this beforehand, not when we are almost done with the\nbond.\" Park said in the same discussion: \"We have half of the\nbond left. I agree we are way late. It doesn't hurt. Let's see\nwhat we can do.\"",
          "sourceIds": [
            "s-hayspost-bond-pm-mar2025",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-felten-flooring-dec2025",
          "date": "2025-12-15",
          "body": "Voted yes on a 4-2 motion to replace flooring and abate asbestos\nat the former middle school. Park and Yarmer voted no. The board\nalso accepted an Integrated Solutions bid of $110,315 for the\nasbestos abatement. From the floor Ruder said any future flooring\nwork could disrupt students and teachers, and that the cost of\nthe work will only increase in the future.",
          "sourceIds": [
            "s-hayspost-felten-tile-dec2025",
            "s-hayspost-felten-dec-agenda",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-felten-construction-feb2026",
          "date": "2026-02-24",
          "body": "Voted yes on a motion approving a $5.7 million maximum-guaranteed-\nprice contract with Nabholz Construction for renovations at\nFelten Elementary School. Allen Park and Derek Yarmer voted no.\nFrom the floor Ruder said she \"was confused as to why other\nboard members wanted to delay, since they knew, since the bond\nissue was approved, what the scope of work and cost of\nrenovations would be for the new elementary school.\"",
          "sourceIds": [
            "s-hayspost-felten-construction-feb2026",
            "s-usd489-boarddocs"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "hayspost.com",
          "observation": "On the March 2026 reconsideration of the proposed sale of 7.3 acres north of Felten Elementary, Ruder said, \"If we sit on the land, we get nothing,\" and \"I don't think we can just say no,\" urging the board to invite bidders to a meeting to discuss their projects further and referencing community-housing demand and potential residential-tax revenue (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-felten-reconsider-mar2026"
          ],
          "mappedToIssueId": "i-bond-facilities"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Across the captured Hays Post coverage, board-coverage articles consistently describe her vote alignment with the administration majority, alongside Ken Brooks and Jayme Goetz, contrasted with the fiscal-oversight bloc of Allen Park and Derek Yarmer. The harvested coverage contains no direct quotes from her on the Kansas constitutional amendments on the 2026 ballot, on state-level education-funding litigation, on...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-boarddocs"
          ],
          "mappedToIssueId": "i-bond-facilities"
        },
        {
          "id": "ss-crossref-5",
          "platform": "hayspost.com",
          "observation": "Two contextual notes are visible in the harvested record. First, Ruder is identified in multiple local pieces as a member of what local coverage refers to as the Ruder family network in Hays government — her husband Vernon Ruder Jr. serves as Ellis County Treasurer, and her son Mason Ruder serves as Mayor of Hays (source). Second, the candidate-profiler raw intelligence from this project records that no reliable...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-ruder-profile-jul2023"
          ],
          "mappedToIssueId": "i-bond-facilities"
        }
      ]
    },
    {
      "id": "i-district-land-use",
      "title": "District land sales and property decisions",
      "stated": {
        "text": "In her October 2023 candidate Q&A, Ruth Ruder framed her fiscal\napproach as: \"I will do my best at representing the taxpayer in\nbeing fiscally responsible in the district but also identifying\nsmart growth.\" She also said: \"I believe USD 489 can be the\nhighlight of our community, and with the development and growth...\nHays will be seen as one of the best districts in the state of\nKansas.\" Her on-the-record statements during the Felten land\ndiscussion in December 2025 through April 2026 articulated her\nown working framework: when discussing a possible sale, she\nurged the board to require buyers to specify the property's\nintended use in their bid proposals.",
        "sourceIds": [
          "s-hayspost-ruder-qa-oct2023",
          "s-hayspost-felten-tax-deduction-dec2025"
        ]
      },
      "actions": [
        {
          "id": "a-felten-bid-process-dec2025",
          "date": "2025-12-15",
          "body": "Voted yes on a 5-1 motion authorizing the district to solicit\nbids on 7.3 acres of district-owned land north of Felten\nElementary School (the former Hays Middle School football-field\narea). Allen Park voted no. Meagan Zampieri-Lillpopp was absent.\nIn the discussion Ruder expressed concern that someone might\npurchase the land for a tax deduction while leaving it vacant,\nand urged the board to require bidders to specify the property's\nintended use in their proposals.",
          "sourceIds": [
            "s-hayspost-felten-bid-process-dec2025",
            "s-hayspost-felten-tax-deduction-dec2025",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-felten-rejection-mar2026",
          "date": "2026-03-10",
          "body": "At a board meeting reviewing the four bids received for the\n7.23 acres north of Felten Elementary — all of which came in\nbetween $200,000 and $250,000, well below the property's\n$630,000 appraisal — the board rejected all four bids. From\nthe floor Ruder said: \"We're not saying no. We want to see\nwhat the future holds.\" The board followed up with a work\nsession on March 23, 2026 to hear from the four bidders on\ntheir proposed projects.",
          "sourceIds": [
            "s-hayspost-felten-rejection-mar2026",
            "s-hayspost-felten-worksession-mar2026",
            "s-hayspost-felten-reconsider-mar2026",
            "s-usd489-boarddocs"
          ]
        },
        {
          "id": "a-felten-reconsideration-apr2026",
          "date": "2026-04-07",
          "body": "At a continued discussion on the Felten land sale, the board\nheard developer presentations including from Matt Allen of PWC.\nNo formal motion was recorded; the board agreed to continue\ndiscussing the property. In coverage of this and the prior\nMarch meeting, Ruder is quoted reflecting on the financial\nmath of the bids: \"It just doesn't pencil out. If you were\nable to get that kind of money for that lot, you would end up\nwith $80,000 to $90,000 per lot before you start construction.\"\nShe also said in the March reconsideration coverage: \"If we\nsit on the land, we get nothing,\" and \"I don't think we can\njust say no.\"",
          "sourceIds": [
            "s-tigermedia-felten-housing-apr2026",
            "s-hayspost-housing-plans-apr2026",
            "s-hayspost-felten-reconsider-mar2026",
            "s-usd489-boarddocs"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Ruder's platform footprint at the time of this harvest is effectively zero personal accounts and several institutional surfaces where she appears as a representative of Golden Plains Credit Union, where she serves as Vice-President of the Hays branch, or as a USD 489 board member. Voters seeking direct statements from Ruth Ruder will find them in Hays Post candidate questionnaires, in Hays Post and KAYS Radio...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-boarddocs"
          ],
          "mappedToIssueId": "i-district-land-use"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "SECONDARY (anchors date + final vote tally + Park's process motions): Hays Post, \"Hays USD 489 district administrators' contracts extended another year,\" https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-admin-contracts-jan2024"
          ],
          "mappedToIssueId": "i-district-land-use"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "1. Superintendent oversight / board-administration scope (AE-1, AE-4, AE-13 admin-contract subset, AE-14 stated) 2. Board civility / VP-role behavior / public-comment posture (AE-2, AE-14 stated on communication) 3. Bond projects / facilities / asbestos remediation (AE-3, AE-5 flooring subset, AE-10, AE-11, AE-12, AE-13 Felten subset, AE-14 stated on bond) 4. District land use / property decisions (AE-5 land-sale...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-boarddocs"
          ],
          "mappedToIssueId": "i-district-land-use"
        }
      ]
    },
    {
      "id": "i-curriculum-parental-rights",
      "title": "Curriculum, parental rights, and operational decisions",
      "stated": {
        "text": "In her October 2023 candidate forum, asked about the then-planned\nbathroom design at the new Hays High School, Ruth Ruder said:\n\"The children voiced to me that nobody asks us. They are very\nexcited with the way it's planned now to have a choice between\nthe way it is now and a separate bathroom for privacy.\" She also\nsaid at the same forum that the board should \"review board\npolicies\" and \"ask advice from the board attorney when\nappropriate and have additional work sessions.\"",
        "sourceIds": [
          "s-hayspost-forum-oct2023",
          "s-hayspost-ruder-qa-oct2023"
        ]
      },
      "actions": [
        {
          "id": "a-bathroom-vandalism-apr2026",
          "date": "2026-04-20",
          "body": "At a board discussion (no formal motion or vote) of the group\nbathroom closures at the new Hays High School — closures that\nbegan in August 2025 following vandalism of sinks and sensors\nand continued after further vandalism that included flush-valve\nsensors removed by unidentified persons — Ruder said: \"I would\nlike to use the bathroom where I want to use the bathroom when\nI need to use the bathroom.\" She added: \"I agreed with the\ngroup bathrooms remaining closed.\" On the broader question of\nvandalism she said: \"We are acting like vandalism isn't new.\nIt's been going on since the beginning of time. ... It boils\ndown to how you parent your children.\" She also said: \"If we\nwould talk on test scores instead of restrooms all of the time,\nwhat a wonderful world it would be.\" Ken Brooks, in the same\ndiscussion, said: \"We've had this discussion many times in the\npast... and you keep saying the same things, over and over and\nover...\" Curt Vajnar said the public had been told during\nconstruction that students would have a choice between\nindividual and group bathrooms. The exact date of the meeting\nis ambiguous between April 20 (a Monday and the regular meeting\ndate) and April 21 (a Tuesday); the contemporaneous article\nrefers to \"Monday night\" and the BoardDocs record would resolve.",
          "sourceIds": [
            "s-hayspost-bathroom-vandalism-apr2026",
            "s-citizenjournal-bathroom-vandalism-apr2026",
            "s-usd489-boarddocs"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-sponsorship-commercial-revenue",
      "title": "Naming rights and commercial-revenue policy",
      "stated": {
        "text": "Ruth Ruder did not address commercial sponsorships or naming\nrights in her 2023 candidate forum or Q&A. Her on-the-record\nstatements during the August–October 2025 Golden Belt Bank\nnaming-rights discussion form the available articulation of her\nposition. She framed the bank's $200,000 offer at the August 4,\n2025 board retreat as \"funds in our pocket. It's free funds. To\nme, that's positivity for the community,\" and \"We just won the\nlottery, and you guys don't want to capitalize on it.\" At the\nsame retreat she also said: \"It belongs to the town and the\nschool, not to some business,\" and \"You can only sell your soul\nso many times.\"",
        "sourceIds": [
          "s-hayspost-naming-pause-aug2025",
          "s-hayspost-naming-postpone-sept2025"
        ]
      },
      "actions": [
        {
          "id": "a-naming-rights-procedural-aug2025",
          "date": "2025-08-04",
          "body": "At an August 4, 2025 board retreat, Ken Brooks made a motion\nto add a vote on accepting Golden Belt Bank's $200,000\nnaming-rights offer for the Hays High School football field\nto the agenda of the upcoming Monday regular meeting. The\nprocedural motion failed 3-3, for lack of a fourth yes vote;\nDerek Yarmer was absent. Ruder voted yes on the motion to add\nthe item to the agenda, along with Brooks and Meagan\nZampieri-Lillpopp. Board President Curt Vajnar subsequently\nremoved the naming-rights item from the September 8, 2025\nregular meeting agenda, rescheduling discussion to an October\n27 work session. Golden Belt Bank's offer expiration deadline\nwas September 15, 2025; no formal board vote on accepting\nthe offer was held before that date, and the offer effectively\nexpired. The board later created a committee to draft a\nnaming-rights policy.",
          "sourceIds": [
            "s-hayspost-naming-pause-aug2025",
            "s-hayspost-naming-postpone-sept2025",
            "s-hayspost-naming-agenda-sept2025",
            "s-hayspost-capital-outlay-oct2025",
            "s-hayspost-sponsorship-oct2025",
            "s-usd489-boarddocs"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whereTheyWorship": "Public sources do not identify Ruth Ruder's church home or denomination.",
  "sources": [
    {
      "id": "s-usd489-boarddocs",
      "tier": "primary",
      "url": "https://go.boarddocs.com/ks/usd489/Board.nsf/Public",
      "title": "USD 489 BoardDocs — Public Meeting Portal",
      "publisher": "Unified School District 489 (Hays, KS)",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "USD 489 board meeting minutes and agenda packets are publicly available",
        "Roll-call votes are recorded in BoardDocs",
        "Hays High School student handbook approval vote (2025-07-21)",
        "Administrator contracts blanket extension vote (2024-01-22)",
        "HVAC contracts and administrator-contract extension votes (2026-02-24)",
        "Asbestos abatement contract vote and HHS change order vote (2025-09-22)",
        "O'Loughlin Elementary MGP tabling motion (2024-09-09)",
        "Hays High School change orders special-meeting vote (2024-12-19)",
        "Athletic facility capital purchases multi-vote sequence (2025-02-19)",
        "Bond project manager motion that failed 3-4 (2025-03-24)",
        "Felten Elementary flooring + asbestos abatement vote (2025-12-15)",
        "Felten Elementary $5.7M Nabholz construction contract vote (2026-02-24)",
        "Felten land sale bid-process authorization 5-1 (2025-12-15)",
        "Felten land sale bid rejection (2026-03-10)",
        "Felten land sale work session (2026-03-23)",
        "Felten land sale continued discussion (2026-04-07)",
        "Bathroom-vandalism discussion (no motion, 2026-04-20 or 2026-04-21)",
        "Golden Belt Bank naming-rights add-to-agenda procedural vote 3-3 (2025-08-04 retreat)"
      ]
    },
    {
      "id": "s-hayspost-discipline-handbook-jul2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/bc933c79-2f23-4279-8171-bc6dcf391cf0",
      "title": "Hays USD 489 board squabbles over discipline policy in high school handbook",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Hays High student handbook approved 6-1, July 21, 2025",
        "Allen Park cast the lone no vote",
        "Ruder verbatim 'Every scenario is going to be different'",
        "Ruder verbatim 'Until I do, I'm on the administration's side'",
        "Ruder verbatim '[Henderson's] job to handle discipline, not ours'",
        "Ruder verbatim 'The board hires the superintendent... not the board'",
        "Observed public online activity mapped to Communication and civility among board members."
      ]
    },
    {
      "id": "s-hayspost-asbestos-sept2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
      "title": "Board member calls out fellow member after repeated no votes",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder's September 22, 2025 floor remarks directed at Park's vote pattern",
        "Asbestos abatement contract and HHS change order both passed with Park lone no",
        "Park's reply about voting on process, not safety",
        "Brooks asked Park what he would have changed had he had docs in advance"
      ]
    },
    {
      "id": "s-hayspost-asbestos-preview-sept2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7330e366-e683-4062-94e7-523a905418e7",
      "title": "Hays USD 489 board to consider change order for Hays High, asbestos removal for HMS",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "September 22, 2025 meeting agenda included $69,480 ACM Removal contract",
        "September 22, 2025 meeting agenda included $88,347 HHS change order"
      ]
    },
    {
      "id": "s-hayspost-bond-pm-mar2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "Hays USD 489 board votes not to add another manager for bond work",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Yarmer motion to investigate adding a bond project manager failed 3-4",
        "Yes votes: Yarmer, Park, Vajnar",
        "No votes included Ruder and Goetz",
        "Ruder verbatim 'We should have looked at this beforehand'",
        "Park verbatim 'We have half of the bond left. I agree we are way late.'"
      ]
    },
    {
      "id": "s-hayspost-admin-contracts-jan2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
      "title": "Hays USD 489 district administrators' contracts extended another year",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "January 22, 2024 vote: 5-1-1 to extend contracts for Wilson, Dinkel, Hipp, Carlin",
        "Allen Park voted no; Derek Yarmer abstained",
        "Park moved to evaluate each contract individually; motion failed",
        "Park moved to enter executive session on superintendent contract; motion failed",
        "Observed public online activity mapped to District land sales and property decisions."
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
        "Administrator contract scrutiny by Park and Yarmer at January 2024 meeting",
        "Park's motion for individual contract review"
      ]
    },
    {
      "id": "s-hayspost-felten-bid-process-dec2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/909a410b-bf64-406d-a98b-01417d221495",
      "title": "Hays USD 489 school board approves sale of land next to middle school",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "December 15, 2025 vote: 5-1 to authorize bid solicitation for 7.3 acres north of Felten Elementary",
        "Allen Park voted no; Meagan Zampieri-Lillpopp absent",
        "Ruder urged buyers be required to specify intended use in bid proposals"
      ]
    },
    {
      "id": "s-hayspost-felten-tile-dec2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/965dbfb4-fc96-4377-b6f3-7f5050176e21",
      "title": "Hays USD 489 votes to replace tile at former middle school, abate asbestos",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "December 15, 2025 vote: 4-2 to replace flooring and abate asbestos",
        "Park and Yarmer voted no",
        "Ruder verbatim about future flooring work disrupting students",
        "Ruder verbatim that cost of work will only increase"
      ]
    },
    {
      "id": "s-hayspost-felten-dec-agenda",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64a4da48-1310-42ab-a846-49362978fc82",
      "title": "Hays USD 489 December 15 2025 agenda coverage",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Integrated Solutions bid of $110,315 for asbestos abatement"
      ]
    },
    {
      "id": "s-hayspost-felten-tax-deduction-dec2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fc95a5ee-b8b3-4d06-b876-7cba2008d1cb",
      "title": "Hays USD 489 land-sale coverage (Ruder tax-deduction concern)",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder December 2025 concern that a buyer might purchase land for tax deduction while leaving it vacant",
        "Ruder urged board to require bidders to specify intended use"
      ]
    },
    {
      "id": "s-hayspost-felten-rejection-mar2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9146c4ed-6933-436d-bb49-1c8b48fb7b0a",
      "title": "Hays USD 489 rejects all bids for land purchase",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "March 10, 2026 board rejected all four Felten land bids (between $200,000 and $250,000)",
        "Felten land appraised at $630,000",
        "Ruder verbatim 'We're not saying no. We want to see what the future holds.'"
      ]
    },
    {
      "id": "s-hayspost-felten-worksession-mar2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6b81ed76-f535-47bb-83bb-a9f3239ac9ac",
      "title": "Hays USD 489 to set work session to discuss Felten sale",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Board scheduled a March 23, 2026 work session to hear from bidders"
      ]
    },
    {
      "id": "s-hayspost-felten-reconsider-mar2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/13cbc154-8d45-445c-8557-acc25fb643e5",
      "title": "Hays USD 489 school board to take another look at land sale",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder verbatim 'If we sit on the land, we get nothing'",
        "Ruder verbatim 'I don't think we can just say no'",
        "Observed public online activity mapped to Bond projects, facility construction, and asbestos remediation."
      ]
    },
    {
      "id": "s-tigermedia-felten-housing-apr2026",
      "tier": "secondary",
      "url": "http://tigermedianet.com/?p=96373",
      "title": "Groups propose housing options for Felten land up for sale",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "April 7, 2026 board meeting heard developer presentations including Matt Allen of PWC",
        "Ruder verbatim 'It just doesn't pencil out... $80,000 to $90,000 per lot before you start construction'"
      ]
    },
    {
      "id": "s-hayspost-housing-plans-apr2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/10c0daa9-bd99-44dc-a50d-a1f65ff0dbeb",
      "title": "Hays USD 489 board sees plans on potential housing developments",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "April 7, 2026 board heard housing-developer presentations on Felten land",
        "Board agreed to continue discussing the property"
      ]
    },
    {
      "id": "s-hayspost-bathroom-vandalism-apr2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede",
      "title": "USD 489 board members express concerns about bathrooms, vandalism",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Group bathrooms at Hays High closed since August following vandalism",
        "Continued vandalism including removed flush-valve sensors",
        "Ruder verbatim 'I would like to use the bathroom where I want'",
        "Ruder verbatim 'I agreed with the group bathrooms remaining closed'",
        "Ruder verbatim 'It boils down to how you parent your children'",
        "Ruder verbatim 'If we would talk on test scores instead of restrooms'",
        "Brooks verbatim 'We've had this discussion many times'",
        "Vajnar verbatim about construction-era public expectation",
        "Ruder identified in this article as 'Board Member'",
        "Observed public online activity mapped to Communication and civility among board members."
      ]
    },
    {
      "id": "s-citizenjournal-bathroom-vandalism-apr2026",
      "tier": "secondary",
      "url": "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting-4/",
      "title": "Takeaways from Hays USD 489 Education Board Meeting (#4)",
      "publisher": "Citizen Journal",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Corroboration of April 2026 bathroom-vandalism discussion"
      ]
    },
    {
      "id": "s-hayspost-naming-pause-aug2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a90fb672-f7e5-4826-b5f3-1decd214e83c",
      "title": "Hays USD 489 pauses Hays High football field naming rights donation discussion",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "August 4, 2025 retreat: Brooks motion to add naming-rights vote to agenda failed 3-3",
        "Yes votes: Ruder, Brooks, Zampieri-Lillpopp; Yarmer absent",
        "Ruder verbatim 'free funds... positivity for the community'",
        "Ruder verbatim 'We just won the lottery'"
      ]
    },
    {
      "id": "s-hayspost-naming-postpone-sept2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/aefb9f40-2e86-4bb2-976e-2f731e7ce14f",
      "title": "Hays USD 489 postpones naming rights decision, despite bank's deadline",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "September 8, 2025 board meeting: Vajnar removed naming-rights item from agenda",
        "Rescheduled to October 27 work session",
        "Bank's $200,000 offer expiration deadline was September 15, 2025",
        "No formal accept-the-offer board vote occurred before deadline",
        "Vajnar verbatim 'The naming of USD 489 facilities belongs to the citizens'",
        "Brooks verbatim 'I don't think this is a bad plan'"
      ]
    },
    {
      "id": "s-hayspost-naming-agenda-sept2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/503eb02d-36b5-42df-bb16-d5d61da241a7",
      "title": "Hays USD 489 September 8 2025 agenda preview",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "September 8, 2025 agenda corroboration"
      ]
    },
    {
      "id": "s-hayspost-capital-outlay-oct2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ba693a3b-a883-44c5-adbf-1ef99308d44c",
      "title": "Hays USD 489 October 27 work session agenda preview",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Naming-rights discussion rescheduled to October 27 work session"
      ]
    },
    {
      "id": "s-hayspost-sponsorship-oct2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0330d54b-d2ee-4dcc-a4d5-995fd0f53307",
      "title": "Hays USD 489 school board to delay decision on facility sponsorships until spring",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "October 28, 2025 work session: sponsorship policy decision delayed to spring",
        "Naming-rights policy committee subsequently formed"
      ]
    },
    {
      "id": "s-hayspost-oloughlin-mgp-sept2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87f9b442-e928-4c9d-bb85-03acad9d2a3f",
      "title": "Hays USD 489 board scrutinizes bond budget",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "September 9, 2024 vote: 5-2 to table $14.49M O'Loughlin Elementary MGP",
        "Yes-to-table: Yarmer, Vajnar, Ruder, Goetz, Park",
        "No (against tabling): Brooks, Zampieri-Lillpopp",
        "Ruder verbatim about Lincoln Elementary and Rockwell Administration sale"
      ]
    },
    {
      "id": "s-hayspost-hhs-changes-dec2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b2976df-a6d0-4414-bce5-d81cae678365",
      "title": "Hays USD 489 school board approves change orders for Hays High School",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "December 19, 2024 special-meeting vote: 5-1 on HHS change orders",
        "Allen Park voted no; Derek Yarmer absent",
        "Ruder said it was unfair to insinuate Nabholz or DLR were trying to cheat the district"
      ]
    },
    {
      "id": "s-tigermedia-feb2025-expenditures",
      "tier": "secondary",
      "url": "http://tigermedianet.com/?p=85000",
      "title": "USD 489 Board of Education votes on high school expenditures",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "February 19, 2025: Digital marquee approved 6-1 ($66,364 Golden Rule Signs)",
        "February 19, 2025: Weight-room equipment approved 7-0 ($146,710 BSN Sports)",
        "February 19, 2025: Video scoreboards approved 5-2 ($777,680)",
        "February 19, 2025: Tennis courts approved 6-1 ($687,937 Stallbaumer Construction)",
        "February 19, 2025: Wrestling mats approved 5-2 ($57,714 Resilite)",
        "Ruder verbatim about tennis tournament revenue to the city"
      ]
    },
    {
      "id": "s-hayspost-felten-construction-feb2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f5e69fbd-0165-4db1-b896-07613f7a31ed",
      "title": "Hays USD 489 board approves construction contract for Felten Elementary",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "February 24, 2026: $5.7M Nabholz Construction MGP for Felten Elementary approved",
        "Allen Park and Derek Yarmer voted no",
        "Ruder verbatim 'I was confused as to why other board members wanted to delay'",
        "Ruder identified in this article as 'Board Vice President'"
      ]
    },
    {
      "id": "s-hayspost-hvac-contracts-feb2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0c27e966-61e9-4c00-b6d7-7f37f6d3bba7",
      "title": "Hays BOE approves HVAC contract; admin. contracts on hold",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "February 24, 2026: Glassman HVAC amendments motion 3-2 (failed)",
        "Yes: Pallister, Brooks, Ruder; No: Park, Yarmer; Abstain: Goetz (conflict — husband works for Glassman); Absent: Vajnar",
        "Subsequent unanimous motion for districtwide RFP for preventive maintenance",
        "Motion to push director-contract decision to March 9 failed 3-3 (Ruder voted no)",
        "Motion to extend administrator contracts to March 9 passed 4-2 (Ruder voted no with Brooks)"
      ]
    },
    {
      "id": "s-hayspost-forum-oct2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
      "title": "Hays USD 489 BOE candidate forum coverage (October 2023)",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder verbatim at the candidate forum on the then-planned bathroom design",
        "Ruder said the board should 'review board policies' and 'ask advice from the board attorney'"
      ]
    },
    {
      "id": "s-hayspost-ruder-qa-oct2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hays USD 489 School Board Candidate: Ruth Ruder (October 2023 Q&A)",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder stated she would change current communication on the board",
        "Ruder stated 'even in disagreements, we must be civil and compromise'",
        "Ruder stated 'I would not micromanage. I will review policy'",
        "Ruder stated 'I think the board should have a vital role in the bond'",
        "Ruder stated 'I would do my best at representing the taxpayer in being fiscally responsible'",
        "Ruder stated 'identifying smart growth'",
        "Observed public online activity mapped to Communication and civility among board members."
      ]
    },
    {
      "id": "s-hayspost-ruder-profile-jul2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
      "title": "Hays Post candidate profile: Ruth Ruder (July 2023)",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Ruder married to Vernon Ruder Jr. for 34 years; three children",
        "Ruder born in Hays; Hays High School graduate 1988",
        "Ruder employed with Golden Plains Credit Union for 30 years; VP of Hays branch over 15 years",
        "Ruder stated first obligation 'will be to the children in our district'",
        "Observed public online activity mapped to Board oversight of the superintendent and administrators.",
        "Observed public online activity mapped to Bond projects, facility construction, and asbestos remediation."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(RUTH_RUDER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ruth-ruder.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
