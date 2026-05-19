/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const BOBBI_DREILING_V2: CandidateFullV2 = {
  "slug": "bobbi-dreiling",
  "name": "Bobbi Dreiling",
  "party": "R",
  "position": "Ellis County Clerk / Election Officer",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "County Clerk / Election Officer",
  "religion": "Roman Catholic (devout)",
  "issues": [
    {
      "id": "i-election-administration-security",
      "title": "Election Administration and Security",
      "stated": {
        "text": "Dreiling presents her clerk record as one of accurate, secure election administration. She has pointed to paper ballots, election-equipment testing, post-election audits, poll-worker training, ballot-count matching, an election security/process manual, and cameras covering the drop box, ballot-counting room, and election-equipment room.",
        "sourceIds": [
          "s-hayspost-2024-profile",
          "s-tiger-forum-2024",
          "s-ellis-clerk-page",
          "s-ellis-election-page"
        ]
      },
      "actions": [
        {
          "id": "a-ds200-public-test-2025",
          "date": "2025-10-06",
          "body": "Dreiling signed a public notice for an October 6, 2025 public demonstration of the DS200 election ballot scanner in the Ellis County Administrative Building Commission Chambers.",
          "sourceIds": [
            "s-ellis-ds200-public-test"
          ]
        },
        {
          "id": "a-canvass-provisional-2024",
          "date": "2024-11-19",
          "body": "Hays Post reported that Dreiling presented 309 provisional ballots to the 2024 canvassing board; 224 were accepted and counted, 81 were rejected because voters were not registered in Ellis County, and no races changed.",
          "sourceIds": [
            "s-hayspost-canvass-2024"
          ]
        },
        {
          "id": "a-reelection-official-result-2024",
          "date": "2024-11-05",
          "body": "Official Ellis County results list Dreiling winning the 2024 county clerk race with 10,211 votes to Laura Allen's 3,060, with 12 write-in votes.",
          "sourceIds": [
            "s-ellis-2024-official-results"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-official-footprint-security",
          "platform": "Official county web",
          "observation": "Dreiling's most reliable current online footprint is official county infrastructure: clerk page, election page, election notices, agenda packets, and results documents, not campaign-style social posting.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-clerk-page",
            "s-ellis-election-page"
          ],
          "mappedToIssueId": "i-election-administration-security"
        },
        {
          "id": "ss-crossref-2",
          "platform": "ellisco.net",
          "observation": "Dreiling's strongest public presence is official and administrative, not campaign-style social media. The county clerk page says the clerk serves as secretary to the Board of Commissioners and conducts all Ellis County elections, while the election page directs voters to registration, advance voting, mail ballot, and VoterView resources. Both official pages list Dreiling as the current public contact. (clerk...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-election-administration-security"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Her campaign and public remarks center on experience, office accuracy, election security, cost control, and service. In her 2020 Hays Post candidate profile, she said she was running because she knew the office, enjoyed serving the public, and believed the clerk role required experience. In 2024, she framed reelection around \"eight elections with perfect counts, audits and recounts,\" Saturday early voting,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-election-administration-security"
        }
      ]
    },
    {
      "id": "i-voting-access-polling-logistics",
      "title": "Voting Access and Polling Logistics",
      "stated": {
        "text": "Dreiling says her office offers advance voting, mail ballots, Saturday early voting, voter notifications, voter information for students, and VoterView tools. On the FHSU polling-location dispute, she has cited turnout, cost, ADA compliance, parking/navigation, and the need to serve the whole precinct.",
        "sourceIds": [
          "s-ellis-election-page",
          "s-hayspost-2024-profile",
          "s-kansasreflector-fhsu-2023"
        ]
      },
      "actions": [
        {
          "id": "a-fhsu-polling-location-choice",
          "date": "2023-11-06",
          "body": "Kansas Reflector reported that Dreiling closed the 601 Main polling place near FHSU because of low turnout, closed another site because it was not ADA compliant, and accepted a contract with Messiah Lutheran Church before students returned with another campus option.",
          "sourceIds": [
            "s-kansasreflector-fhsu-2023"
          ]
        },
        {
          "id": "a-aclu-fhsu-petition",
          "date": "2024-04-16",
          "body": "ACLU of Kansas said local leaders planned to hand-deliver a petition to Dreiling seeking a Fort Hays State University campus polling location.",
          "sourceIds": [
            "s-aclu-fhsu-petition-2024"
          ]
        },
        {
          "id": "a-drop-box-centralization",
          "date": "2024-10-18",
          "body": "Hays Post reported that Dreiling removed Ellis and Victoria ballot drop boxes after testing the required security procedures in November 2023 and seeing no ballots dropped there, while retaining the camera-monitored administration-center drop box.",
          "sourceIds": [
            "s-hayspost-2024-profile"
          ]
        },
        {
          "id": "a-close-books-notice-2025",
          "date": "2025-08-20",
          "body": "Dreiling signed a voter-registration close-of-books notice that directed voters to the county election officer for registration forms and listed the 21-day registration-close rule.",
          "sourceIds": [
            "s-ellis-close-books-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-facebook-limited-voting-access",
          "platform": "Facebook",
          "observation": "A candidate Facebook page is referenced by public sources, but native logged-out access did not allow post-level verification of Dreiling's statements or engagement metrics on the FHSU polling-location dispute.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-campaign-page"
          ],
          "mappedToIssueId": "i-voting-access-polling-logistics"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Tiger Media Network",
          "observation": "Her election-security message is specific and procedural. She has described paper ballots, post-election audits, poll-pad and USB/result matching, ballot counts matching before ballots leave the clerk's office, cameras at the drop box and ballot-counting/equipment rooms, worker training, and membership in federal election-security information sharing through the Department of Homeland Security. (2020 profile,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-voting-access-polling-logistics"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Key signal: professional listing, Ellis County county clerk, last updated 2026-01-05. (source) 5. Kansas County Clerks and Election Officials Association northwest district listing. Key signal: Bobbi Dreiling, Ellis County clerk, in office since 2021. (source) 6. Hays Post 2020 candidate profile. Key signal: experience, service, election security, voter outreach, audit/accuracy, and corrected-ballot-error...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-voting-access-polling-logistics"
        }
      ],
      "gap": {
        "summary": "Dreiling's stated voting-access record emphasizes outreach, advance voting, mail ballots, Saturday hours, and student information, while the documented dispute centers on her decision not to place a polling site on the FHSU campus and to remove two offsite drop boxes based on cost, usage, and security procedures. This is a difference in access method, not evidence of motive.",
        "evidenceIds": [
          "a-fhsu-polling-location-choice",
          "a-aclu-fhsu-petition",
          "a-drop-box-centralization"
        ]
      }
    },
    {
      "id": "i-property-tax-records-administration",
      "title": "Property Tax and County Records Administration",
      "stated": {
        "text": "Dreiling's public record on taxes is administrative rather than ideological. The official clerk page lists tax-roll certification, tax levies, accounts payable, county commission minutes, and board-approved orders among clerk duties, and Dreiling has said she handled abstracts, mill levy, and revenue-neutral-rate work before becoming clerk.",
        "sourceIds": [
          "s-ellis-clerk-page",
          "s-hayspost-2024-profile",
          "s-ellis-rnr-page"
        ]
      },
      "actions": [
        {
          "id": "a-rnr-mailings-claim",
          "date": "2024-10-18",
          "body": "Dreiling told Hays Post she was the first Ellis County clerk to prepare revenue-neutral-rate mailings and also handled redistricting.",
          "sourceIds": [
            "s-hayspost-2024-profile"
          ]
        },
        {
          "id": "a-tax-levy-official-duty",
          "date": "2026-05-19",
          "body": "The official county clerk page lists computing and certifying the tax roll, serving as budgetary accountant/accounts payable clerk, and setting tax levies as county-clerk responsibilities.",
          "sourceIds": [
            "s-ellis-clerk-page"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-no-social-tax-record",
          "platform": "Public web/social search",
          "observation": "No candidate-controlled social posts about property-tax ideology or broader tax policy were verified; available evidence is official-duty and local-reporting evidence about clerk administration.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-clerk-page",
            "s-hayspost-2024-profile"
          ],
          "mappedToIssueId": "i-property-tax-records-administration"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Kansas Reflector",
          "observation": "The most contested public topic is FHSU polling access. Dreiling's stated rationale is turnout, cost, ADA logistics, and whole-precinct service rather than student-only service. She told Kansas Reflector she was not dealing only with students and had a whole community to consider. In Hays Post, she said the numbers did not support spending taxpayer dollars for an on-campus polling location and that she would...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kansasreflector-fhsu-2023"
          ],
          "mappedToIssueId": "i-property-tax-records-administration"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Tiger Media Network",
          "observation": "Key signal: eight elections, perfect counts/audits/recounts claim, township consolidation, budget savings, Saturday early voting, FHSU polling rationale, ballot drop-box security, cameras, and no-proven-fraud posture. (source) 8. Tiger Media Network October 2024 forum coverage. Key signal: public debate remarks on free/fair/secure elections, taxes/levies, paper ballots, and election fraud. (source) 9. Hays Post...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2024-profile"
          ],
          "mappedToIssueId": "i-property-tax-records-administration"
        }
      ]
    },
    {
      "id": "i-civic-education-voter-outreach",
      "title": "Civic Education and Voter Outreach",
      "stated": {
        "text": "Dreiling's recent voter-outreach evidence is local and civic-education focused. In a 2026 county packet, she described a student-designed I Voted sticker contest as a way to encourage students, inspire future voters, and give teachers material for civics lessons.",
        "sourceIds": [
          "s-ellis-agenda-02032026",
          "s-ellis-agenda-04072026"
        ]
      },
      "actions": [
        {
          "id": "a-sticker-contest-launch",
          "date": "2026-02-03",
          "body": "Dreiling presented an informational agenda item launching a grades 6-12 I Voted sticker contest with nonpartisan design requirements and no AI-generated designs.",
          "sourceIds": [
            "s-ellis-agenda-02032026"
          ]
        },
        {
          "id": "a-sticker-contest-results",
          "date": "2026-04-07",
          "body": "Dreiling reported 60 total student entries for the I Voted sticker contest and selected three winning designs after county employees reviewed submissions.",
          "sourceIds": [
            "s-ellis-agenda-04072026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-low-social-civic-outreach",
          "platform": "Official county packets",
          "observation": "The newest public voter-outreach material came through official county agenda packets rather than campaign social platforms.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-agenda-02032026",
            "s-ellis-agenda-04072026"
          ],
          "mappedToIssueId": "i-civic-education-voter-outreach"
        },
        {
          "id": "ss-crossref-2",
          "platform": "ellisco.net",
          "observation": "The most recent public outreach item found was civic-engagement oriented: a 2026 student-designed \"I Voted\" sticker contest. In the February 3, 2026 commission packet, Dreiling wrote that she hoped the contest would inspire future voters and help teachers incorporate civics lessons. In the April 7, 2026 packet, she reported 60 entries and selected three designs rather than one because there were many good...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-agenda-02032026"
          ],
          "mappedToIssueId": "i-civic-education-voter-outreach"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Kansas Reflector",
          "observation": "Key signal: reelection result, flawless-office framing, continuing current approach, staff/poll-worker thanks, and no polling-location issues reported. (source) 10. Kansas Reflector November 2023 FHSU polling-location article. Key signal: Dreiling's rationale on community-wide service, turnout, location selection, and communication frustrations. (source) 11. Kansas Reflector April 2024 petition article.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-win-2024"
          ],
          "mappedToIssueId": "i-civic-education-voter-outreach"
        }
      ]
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Family and obituary material in the source record points to a Catholic background, but the file does not support naming a current parish.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "No complete candidate donor ledger or receipts-and-expenditures report was verified online in this pass.; KPDC guidance says local candidates file Appointment of Treasurer forms with county clerks or county election commissioners.; Existing local memory mentions county Republican committee expenditures of $999 for a text broadcast and $50 for room rental, but the underlying source/PDF was not recovered; do not treat those amounts as confirmed until sourced.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Campaign Finance"
  },
  "sources": [
    {
      "id": "s-ellis-clerk-page",
      "tier": "primary",
      "url": "https://ellisco.net/93/Clerk",
      "title": "Clerk",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bobbi L. Dreiling is listed as Ellis County Clerk",
        "County clerk is an elected four-year office",
        "County clerk duties include county commission minutes, tax-roll certification, county election officer duties, accounts payable, tax levies, and issuing board-approved orders"
      ]
    },
    {
      "id": "s-ellis-election-page",
      "tier": "primary",
      "url": "https://ellisco.net/425/Election",
      "title": "Election",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bobbi L. Dreiling is listed as County Clerk/Election Official",
        "Ellis County election page provides voter registration, advance voting, mail-ballot, and VoterView information"
      ]
    },
    {
      "id": "s-ellis-2024-official-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results",
      "title": "2024 General Election Official Results",
      "publisher": "Ellis County Clerk / Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official county clerk result: REP Bobbi L. Dreiling 10,211; DEM Laura Allen 3,060; write-in totals 12"
      ]
    },
    {
      "id": "s-ellis-agenda-02032026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_02032026-726",
      "title": "Ellis County Commission Agenda Packet - February 3, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dreiling presented an informational item for a grades 6-12 I Voted sticker contest",
        "Dreiling wrote that the contest could inspire future voters and support civics lessons",
        "Contest rules required nonpartisan artwork and prohibited AI-generated designs",
        "Observed public online activity mapped to Civic Education and Voter Outreach."
      ]
    },
    {
      "id": "s-ellis-agenda-04072026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_04072026-741",
      "title": "Ellis County Commission Agenda Packet - April 7, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dreiling reported 39 entries from USD 432, 20 from USD 388, and one from USD 489 for the I Voted sticker contest",
        "Dreiling selected three winning designs"
      ]
    },
    {
      "id": "s-ellis-ds200-public-test",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5809/public-test",
      "title": "Public Demonstration of the DS200 Election Ballot Scanner",
      "publisher": "Ellis County Clerk / Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dreiling signed a public notice for an October 6, 2025 DS200 election ballot scanner demonstration"
      ]
    },
    {
      "id": "s-ellis-close-books-2025",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5797/Close-of-Books-Notice-of-Places---Copy",
      "title": "Close of Books Notice of Places",
      "publisher": "Ellis County Clerk / Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dreiling signed an August 20, 2025 voter registration close-of-books notice",
        "The notice identifies her as Ellis County Clerk/Election Officer"
      ]
    },
    {
      "id": "s-ellis-rnr-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/729/Revenue-Neutral-Rate",
      "title": "Revenue Neutral Rate",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County publishes revenue-neutral-rate information through the county website"
      ]
    },
    {
      "id": "s-hayspost-2024-profile",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3",
      "title": "Republican Dreiling touts election security in run for Ellis County Clerk reelection",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dreiling described eight elections with perfect counts, audits, and recounts",
        "Dreiling cited township consolidation, smaller mail-ballot envelopes, poll-pad lease savings, revenue-neutral-rate mailings, Saturday early voting, and text/email notifications",
        "Dreiling explained her FHSU polling-location decision using turnout, cost, ADA, and logistics",
        "Dreiling described removing Ellis and Victoria drop boxes and keeping a camera-monitored central drop box",
        "Dreiling described election-security cameras, post-election audits, poll-worker training, and ballot-count matching",
        "Observed public online activity mapped to Property Tax and County Records Administration."
      ]
    },
    {
      "id": "s-tiger-forum-2024",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=82423",
      "title": "County Clerk debate addresses election integrity and voter turnout",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dreiling said Ellis County elections had been free, fair, and secure",
        "Dreiling discussed 100 percent paper ballots and ExpressVote ADA paper-ballot output",
        "Dreiling said she had no proof of election fraud and invited people to inspect the election process"
      ]
    },
    {
      "id": "s-hayspost-win-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78",
      "title": "Ellis County Clerk responds after win in heated race",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Dreiling won a second term",
        "Dreiling said she would continue her current office approach and continue to look at voter turnout",
        "Dreiling said there were no polling-location issues on Election Day",
        "Observed public online activity mapped to Civic Education and Voter Outreach."
      ]
    },
    {
      "id": "s-hayspost-canvass-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0c4a7379-b39d-4948-a0f3-91abbf78b149",
      "title": "No changes after Ellis County general election canvass",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dreiling presented 309 provisional ballots to the canvassing board",
        "224 provisional ballots were accepted and 81 were rejected because voters were not registered in Ellis County",
        "No races changed after provisional ballots"
      ]
    },
    {
      "id": "s-kansasreflector-fhsu-2023",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/06/students-county-clerk-embroiled-in-monthslong-clash-over-fort-hays-polling-location/",
      "title": "Students, county clerk embroiled in monthslong clash over Fort Hays polling location",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Dreiling closed the 601 Main polling place near FHSU because of low turnout",
        "Dreiling closed another site because it was not ADA compliant",
        "Dreiling told Kansas Reflector she had a whole community to consider, not just students",
        "Students advocated for an FHSU campus polling place",
        "Observed public online activity mapped to Property Tax and County Records Administration."
      ]
    },
    {
      "id": "s-aclu-fhsu-petition-2024",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/",
      "title": "Hundreds in Ellis County Sign Petition for Polling Location at FHSU",
      "publisher": "ACLU of Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "ACLU of Kansas said local leaders planned to deliver a petition to Dreiling seeking an FHSU campus polling location",
        "The press release framed the request as a voting-access issue"
      ]
    },
    {
      "id": "s-facebook-campaign-page",
      "tier": "social",
      "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/",
      "title": "Bobbi Dreiling for Ellis County Clerk",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "A candidate Facebook page exists or existed, but native logged-out access did not support post inventory or engagement claims"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "primary",
      "url": "https://www.ellisco.net/93/Clerk",
      "title": "ellisco.net / Ellisco",
      "publisher": "Ellisco",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Election Administration and Security.",
        "Dreiling's strongest public presence is official and administrative, not campaign-style social media. The county clerk page says the clerk serves as secretary to the Board of Commi"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Election Administration and Security.",
        "Her campaign and public remarks center on experience, office accuracy, election security, cost control, and service. In her 2020 Hays Post candidate profile, she said she was runni",
        "Observed public online activity mapped to Voting Access and Polling Logistics."
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.lkm.org/members/?id=72664620",
      "title": "Hays Post / Lkm",
      "publisher": "Lkm",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Voting Access and Polling Logistics.",
        "Key signal: professional listing, Ellis County county clerk, last updated 2026-01-05. (source) 5. Kansas County Clerks and Election Officials Association northwest district listing"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(BOBBI_DREILING_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[bobbi-dreiling.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
