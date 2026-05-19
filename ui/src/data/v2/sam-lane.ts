/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SAM_LANE_V2: CandidateFullV2 = {
  "slug": "sam-lane",
  "name": "Sam Lane",
  "party": "D",
  "position": "Kansas Secretary of State",
  "electionSlug": "kansas-sos-2026",
  "incumbent": false,
  "occupation": "No current elected office confirmed",
  "campaignWebsite": "https://www.samuellane.org/",
  "issues": [
    {
      "id": "election-administration-voter-access",
      "title": "Election Administration / Voter Access",
      "stated": {
        "text": "Lane's campaign centers the Secretary of State race on fair and accurate elections, county election-office support, voter access, and opposition to registration or ballot rules he describes as voter suppression. His website says the Secretary of State oversees Kansas elections, says Kansas cannot allow voter suppression or voter fraud, and says he has already met with several county election officials and would visit all 105 county election offices if elected.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-sos-explainer",
          "s-campaign-issues",
          "s-sos-candidate-info"
        ]
      },
      "actions": [
        {
          "id": "a-filed-campaign",
          "date": "2025-04-25",
          "body": "Lane publicly posted that he had filed paperwork to run for Kansas Secretary of State; official Johnson County and KPDC records later list him in the Secretary of State race.",
          "sourceIds": [
            "s-bsky-filing",
            "s-joco-candidate",
            "s-kpdc-index"
          ]
        },
        {
          "id": "a-county-officials-meetings",
          "date": "2026-05-19",
          "body": "Lane's campaign home page says he has met with several county election commissioners or county clerks to learn local issues and resource needs; this is a candidate-controlled statement, not an independently verified meeting log.",
          "sourceIds": [
            "s-campaign-home"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-a-oberlin-travel",
          "platform": "Bluesky",
          "observation": "Lane publicly posted that he drove six hours each way to Oberlin, Decatur County, while holding a full-time nonpolitical job, and connected that travel to meeting people face-to-face to keep polling locations open.",
          "observedAt": "2026-04-12",
          "sourceIds": [
            "s-bsky-oberlin"
          ],
          "mappedToIssueId": "election-administration-voter-access"
        },
        {
          "id": "ss-bsky-profile-elections",
          "platform": "Bluesky",
          "observation": "Profile display name self-identifies as Sam Lane for KS Sec. of State; profile text links due process, checks and balances, and fair and accurate elections.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "election-administration-voter-access"
        },
        {
          "id": "ss-hb2438-post",
          "platform": "Bluesky",
          "observation": "Local harvest records a January 16, 2026 post discussing HB 2438 and warning that voter-registration restrictions can appear harmless while creating barriers.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-hb2438",
            "s-ksleg-hb2438"
          ],
          "mappedToIssueId": "election-administration-voter-access"
        },
        {
          "id": "ss-save-act-post",
          "platform": "Bluesky",
          "observation": "On March 25, 2026, Lane posted opposition to the SAVE Act / SAVE America Act and linked an explainer; live May 19 API read showed 1 like and no reposts, replies, or quotes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-save-act"
          ],
          "mappedToIssueId": "election-administration-voter-access"
        },
        {
          "id": "ss-poll-hours-post",
          "platform": "Bluesky",
          "observation": "Local harvest records Lane saying on November 4, 2025 that some Kansas counties close polls at 5 p.m. and calling that something he wants to change.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-poll-hours"
          ],
          "mappedToIssueId": "election-administration-voter-access"
        }
      ]
    },
    {
      "id": "election-security-paper-trail",
      "title": "Election Security / Paper Trail",
      "stated": {
        "text": "Lane says Kansas does not appear to have a current voter-fraud or election-security problem, but argues the system still needs review and maintenance. His issues page says he would seek a thorough, unbroken paper trail at every election site for every vote and references full logic and accuracy testing before ballot processing.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-sos-explainer"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-paper-ballots",
          "platform": "Bluesky",
          "observation": "Local harvest records an October 19, 2025 post saying Kansas is a paper-ballot state and urging voters to check machine-printed ballots before submission.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-paper-ballots"
          ],
          "mappedToIssueId": "election-security-paper-trail"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "Public harvest base: campaign website pages, public Bluesky AT Protocol API, indexed search results, Johnson County Election Office, DASS, and Ballotpedia.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "election-security-paper-trail"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Profile text: \"Due Process is in the Constitution. So is Checks and Balances...\" and says elections must be \"fair and accurate,\" followed by samuellane.org.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "election-security-paper-trail"
        }
      ]
    },
    {
      "id": "ballot-sites-county-resources",
      "title": "Ballot Sites / County Resources",
      "stated": {
        "text": "Lane's issues page says ballot-location closures, ballot-drop-box safety, bomb-threat planning, and county election budgets are practical Secretary of State concerns. He says Kansas counties pay for their own elections with limited state support, so election-site safety and access require county coordination and resources.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "a-county-offices-plan",
          "date": "2026-05-19",
          "body": "Campaign home says Lane would visit the election office of every Kansas county, all 105, if elected, to hear resource needs and review election rules and procedures.",
          "sourceIds": [
            "s-campaign-home"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-oberlin-polling-locations",
          "platform": "Bluesky",
          "observation": "On April 12, 2026, Lane posted that he drove to Oberlin, Decatur County, and connected statewide travel to keeping polling locations open; live May 19 API read showed no visible likes, reposts, replies, or quotes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-oberlin"
          ],
          "mappedToIssueId": "ballot-sites-county-resources"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "Bluesky Posts - Campaign and Election Administration",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "ballot-sites-county-resources"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "2025-11-04 - Urged voting in local elections, linked Kansas VoterView, and said some counties close polls at 5 rather than 7, \"something I want to change.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "ballot-sites-county-resources"
        }
      ]
    },
    {
      "id": "civil-liberties-privacy-identity-documents",
      "title": "Civil Liberties / Privacy / Identity Documents",
      "stated": {
        "text": "Lane frames due process, checks and balances, digital privacy, and identity-document rules as civil-liberties concerns that can affect voter registration and election administration. His campaign issues page discusses SB 244 in the context of driver's-license sex-marker changes and documentation problems for voter registration.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-other-views",
          "s-ksleg-sb244"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-privacy-post",
          "platform": "Bluesky",
          "observation": "Local harvest records a January 30, 2026 post saying digital privacy is a value Lane would bring into the Secretary of State office.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-privacy"
          ],
          "mappedToIssueId": "civil-liberties-privacy-identity-documents"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "2026-01-30 - Said digital privacy is a big deal and \"a value I intend to take into the Secretary of State's office.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "civil-liberties-privacy-identity-documents"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Bluesky Posts - Civil Liberties, Immigration, and Anti-Authoritarian Signals",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "civil-liberties-privacy-identity-documents"
        }
      ]
    },
    {
      "id": "abortion-policy",
      "title": "Abortion Policy",
      "stated": {
        "text": "Lane's candidate-controlled 'My Other Views' page says this area is not as immediately relevant to the Secretary of State office, but includes an abortion tab. In that tab he says he does not like to dwell on personal feelings about abortion and criticizes abortion bans for their effects on medical practice and emergency care. No elected-office action by Lane on abortion was found.",
        "sourceIds": [
          "s-campaign-other-views"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "No candidate-controlled post taking a detailed position on abortion policy was found in the captured set; related content appears mainly through broader civil-liberties/authoritarianism frames and a DASS-style democracy frame.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "abortion-policy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "No sustained platform plank was found on taxes, Medicaid, school finance, agriculture, guns, or abortion, beyond scattered social commentary.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "abortion-policy"
        },
        {
          "id": "ss-crossref-5",
          "platform": "samuellane.org",
          "observation": "Campaign \"My Other Views\" page says Lane does not like to dwell on personal feelings about abortion, calls abortion policy the less complicated part for him, and criticizes abortion bans for their effect on medical practice. Source: https://www.samuellane.org/my-other-views",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-other-views"
          ],
          "mappedToIssueId": "abortion-policy"
        }
      ]
    },
    {
      "id": "guns-second-amendment",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Lane's candidate-controlled 'My Other Views' page says he includes gun rights when he talks about civil liberties. The same page says that if he were running for a lawmaker office he would be alright with some basic gun-control legislation such as closing background-check loopholes, while noting that he is not running for a lawmaker office. No elected-office action by Lane on firearms was found.",
        "sourceIds": [
          "s-campaign-other-views"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "campaign-finance-organization",
      "title": "Campaign Finance / Organization",
      "stated": {
        "text": "Lane's early public campaign-finance record shows a very small statewide campaign. The 2025 KPDC report lists $590.91 in total contributions and receipts, $0.00 in expenditures, and $590.91 cash on hand, with $580.27 itemized from Samuel Lane and $10.64 unitemized. No PAC, institutional, or large donor line item was found in that report.",
        "sourceIds": [
          "s-kpdc-index",
          "s-kpdc-202601",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "a-kpdc-self-contribution",
          "date": "2025-10-28",
          "body": "KPDC Schedule A records Samuel Lane contributing $580.27 to the campaign by credit card, with occupation listed as construction.",
          "sourceIds": [
            "s-kpdc-202601"
          ]
        },
        {
          "id": "a-kpdc-2025-report",
          "date": "2026-01-10",
          "body": "Lane's 2025 KPDC receipts-and-expenditures report was electronically filed, showing $590.91 receipts, $0.00 expenditures, and $590.91 cash on hand at close of period.",
          "sourceIds": [
            "s-kpdc-202601"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "No visible endorsement list, major institutional endorsement page, or large donor/social influencer amplification network was found.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "campaign-finance-organization"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "The feed is not a conventional consultant-managed campaign channel. It includes jokes, holiday greetings, language asides, foreign-policy reactions, posts about India, Kansas weather, school lunch debt, road markings, books, and personal discomfort with \"posh\" political settings. That informality is part of the signal. It makes Lane look more like a politically engaged ordinary Kansan trying to bootstrap a...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "campaign-finance-organization"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Social issue relevance is strongest on election administration, voter access, privacy, and civil liberties. It is weaker or absent for taxes, agriculture, Medicaid, school finance, and broad economic policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile-api"
          ],
          "mappedToIssueId": "campaign-finance-organization"
        }
      ]
    }
  ],
  "recordSummary": "No current elected office confirmed",
  "ownWordsNarrative": "summary: Public social research found one candidate-controlled Bluesky account and no candidate-owned public X/Twitter, Facebook, Instagram, TikTok, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, or YouTube account. Social evidence is most relevant to election administration, voter access, privacy, and civil liberties; it is sparse or absent for taxes, agriculture, Medicaid, school finance, and broad economic policy.; sourceIds: s-bsky-profile-api; s-social-harvest-local",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "KPDC 2025 reporting shows $590.91 in total contributions and receipts, $0.00 in expenditures, and $590.91 cash on hand. The only itemized receipt was $580.27 from Samuel Lane; $10.64 was unitemized. No PAC, institutional, or large donor line item was found in that report.",
    "narrative": "KPDC 2025 reporting shows $590.91 in total contributions and receipts, $0.00 in expenditures, and $590.91 cash on hand. The only itemized receipt was $580.27 from Samuel Lane; $10.64 was unitemized. No PAC, institutional, or large donor line item was found in that report.",
    "donors": [
      {
        "name": "Samuel Lane",
        "amount": "$580.27"
      }
    ],
    "reportingPeriod": "2025-01-01 through 2025-12-31",
    "source": "Campaign Finance Receipts and Expenditures Report - Samuel Lane"
  },
  "sources": [
    {
      "id": "s-sos-candidate-info",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Democratic and Republican candidates must run in the primary to secure party nomination",
        "Statewide candidates file with the Kansas Secretary of State",
        "A candidate is not considered filed until the petition or declaration and fee are received",
        "Primary election filing deadline is noon on June 1, 2026",
        "Secretary of State is among offices to be elected in 2026"
      ]
    },
    {
      "id": "s-joco-candidate",
      "tier": "primary",
      "url": "https://www.jocoelection.org/candidates-elected-officials/samuel-lane",
      "title": "Samuel Lane",
      "publisher": "Johnson County Election Office",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Samuel Lane is listed for the August 4, 2026 primary election",
        "Incumbent: No",
        "Elected Official: No",
        "Party: Democratic",
        "Office Level: State Offices",
        "Office Jurisdiction and Position: Secretary of State",
        "Term: 4 year; Term End: 2031"
      ]
    },
    {
      "id": "s-kpdc-index",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas State Wide Office 2026 Election Cycle",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The index lists Lane, Samuel under Secretary of State candidates",
        "The index links Lane's Appointment of Treasurer and 202601 receipts-and-expenditures report",
        "The index was last updated January 22, 2026"
      ]
    },
    {
      "id": "s-kpdc-202601",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04SL_202601.pdf",
      "title": "Campaign Finance Receipts and Expenditures Report - Samuel Lane",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate name is Samuel Lane",
        "Office sought is Secretary of State",
        "Report covers January 1, 2025 through December 31, 2025",
        "Total contributions and other receipts were $590.91",
        "Total expenditures and other disbursements were $0.00",
        "Cash on hand at close of period was $590.91",
        "Schedule A itemizes Samuel Lane contributing $580.27 on October 28, 2025 by credit card",
        "Total unitemized contributions of $50 or less were $10.64"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://www.samuellane.org/",
      "title": "Sam Lane for Kansas Secretary of State",
      "publisher": "Samuel Lane for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Lane identifies himself as a lifelong Kansan and lifelong independent running as a Democrat for Secretary of State",
        "Campaign centers the race on fair elections, election oversight, and safeguarding Kansas",
        "Campaign says Lane has met with several county election commissioners/county clerks",
        "Campaign says he would visit all 105 county election offices if elected",
        "Footer says paid for by Samuel Lane for Kansas, Erika Ashley treasurer"
      ]
    },
    {
      "id": "s-campaign-sos-explainer",
      "tier": "primary",
      "url": "https://www.samuellane.org/what-does-the-secretary-of-state-do",
      "title": "What does the Secretary of State do?",
      "publisher": "Samuel Lane for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Page describes Secretary of State duties including business registration, legal publications, and election oversight",
        "Page says the office should keep Kansas elections fair and accurate",
        "Page says Kansas cannot allow voter suppression or voter fraud"
      ]
    },
    {
      "id": "s-campaign-issues",
      "tier": "primary",
      "url": "https://www.samuellane.org/issues",
      "title": "Issues",
      "publisher": "Samuel Lane for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Page addresses voter fraud, voter suppression, HB 2438, mail-ballot deadlines, SAVE Act/SAVE America Act, SB 244, ballot-location security, and ballot-location closures",
        "Page says evidence indicates current Kansas voter-fraud/election-security systems work but should be maintained",
        "Page says Lane would seek an unbroken paper trail at every election site for every vote",
        "Page says Lane wants to protect ballot drop boxes and ballot locations while recognizing county funding limits",
        "Page says some counties close polls before 7 p.m. and Lane wants full 7 a.m. to 7 p.m. access for in-person voters"
      ]
    },
    {
      "id": "s-campaign-other-views",
      "tier": "primary",
      "url": "https://www.samuellane.org/my-other-views",
      "title": "My Other Views",
      "publisher": "Samuel Lane for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Page says these views are not as immediately relevant to the Secretary of State office",
        "Abortion tab criticizes abortion bans and their effect on medical practice",
        "Guns tab says Lane includes gun rights in civil liberties and would be alright with some basic gun-control legislation if he were running for a lawmaker office",
        "Civil-liberties content discusses due process, search and seizure, and keeping elections fair",
        "Observed public online activity mapped to Abortion Policy."
      ]
    },
    {
      "id": "s-ksleg-hb2438",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2438/",
      "title": "HB 2438",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Short title: imposing restrictions on websites that can accept and transmit voter-registration applications",
        "House final action passed as amended 86-36 on February 10, 2026",
        "Referred to Senate Committee on Federal and State Affairs on February 11, 2026"
      ]
    },
    {
      "id": "s-ksleg-sb244",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb244/",
      "title": "H Sub for SB 244",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Bill requires designation of multiple-occupancy private spaces in public buildings for use by only one sex",
        "Bill defines gender as biological sex at birth for statutory construction",
        "Bill directs driver-license and birth-certificate correction/reissuance when necessary",
        "Bill status: veto overridden by House"
      ]
    },
    {
      "id": "s-bsky-profile-api",
      "tier": "social",
      "url": "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=voiceinavacuum.bsky.social",
      "title": "Bluesky profile API - voiceinavacuum.bsky.social",
      "publisher": "Bluesky public API",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile display name is Sam Lane for KS Sec. of State",
        "Profile links samuellane.org",
        "Profile description names due process, checks and balances, and fair and accurate elections",
        "Profile counts on May 19, 2026: 35 followers, 14 follows, 195 posts"
      ]
    },
    {
      "id": "s-bsky-filing",
      "tier": "social",
      "url": "https://bsky.app/profile/voiceinavacuum.bsky.social/post/3lno763t2js24",
      "title": "Bluesky filing post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Local harvest records Lane announcing filing paperwork for Kansas Secretary of State"
      ]
    },
    {
      "id": "s-bsky-paper-ballots",
      "tier": "social",
      "url": "https://bsky.app/profile/voiceinavacuum.bsky.social/post/3m3lgre7oik23",
      "title": "Kansas paper-ballot post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Local harvest records Lane posting that Kansas is a paper-ballot state and urging voters to check machine-printed ballots"
      ]
    },
    {
      "id": "s-bsky-poll-hours",
      "tier": "social",
      "url": "https://bsky.app/profile/voiceinavacuum.bsky.social/post/3m4remghm3c2s",
      "title": "Local-election voting post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Local harvest records Lane linking Kansas VoterView and saying some counties close polls at 5 p.m., something he wants to change"
      ]
    },
    {
      "id": "s-bsky-hb2438",
      "tier": "social",
      "url": "https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mclbirfacs2w",
      "title": "HB 2438 voter-registration post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Local harvest records Lane warning that voter-suppression schemes can look harmless while discussing HB 2438"
      ]
    },
    {
      "id": "s-bsky-privacy",
      "tier": "social",
      "url": "https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mdm7fwsvqc2c",
      "title": "Digital privacy post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Local harvest records Lane saying digital privacy is a value he would take into the Secretary of State office"
      ]
    },
    {
      "id": "s-bsky-save-act",
      "tier": "social",
      "url": "https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mhw77rifik2s",
      "title": "SAVE Act post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Lane posted opposition to the SAVE Act / SAVE America Act and linked an explainer",
        "Live May 19 API read showed 1 like, 0 reposts, 0 replies, 0 quotes"
      ]
    },
    {
      "id": "s-bsky-oberlin",
      "tier": "social",
      "url": "https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mjbey3c4as2m",
      "title": "Oberlin county-travel post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Lane posted that he drove six hours each way to Oberlin while working a full-time nonpolitical job",
        "Lane connected the trip to meeting people face-to-face to keep polling locations open",
        "Live May 19 API read showed 0 likes, 0 reposts, 0 replies, 0 quotes"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SAM_LANE_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[sam-lane.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
