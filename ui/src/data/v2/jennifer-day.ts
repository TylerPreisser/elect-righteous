/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JENNIFER_DAY_V2: CandidateFullV2 = {
  "slug": "jennifer-day",
  "name": "Jennifer Day",
  "party": "D",
  "position": "Kansas Secretary of State",
  "electionSlug": "kansas-sos-2026",
  "incumbent": false,
  "occupation": "Former Kansas House District 48 representative",
  "family": "Jesse Day; Not specifically enumerated in available sources",
  "campaignWebsite": "https://www.electjenday.com/",
  "issues": [
    {
      "id": "election-administration-voting-access",
      "title": "Election Administration / Voting Access",
      "stated": {
        "text": "Day's campaign centers the Secretary of State race on safe, secure, accessible elections, voting access for eligible Kansans, transparent public communication, county-election coordination, and countering disinformation. This is her strongest campaign-controlled issue area.",
        "sourceIds": [
          "s-campaign-home",
          "s-dass-kansas"
        ]
      },
      "actions": [
        {
          "id": "action-hb2452-testimony",
          "date": "2026-01-20",
          "body": "Day submitted written-only opponent testimony on moving municipal elections to even-numbered years, citing ballot length, undervotes, voter disengagement, confusion, and delays.",
          "sourceIds": [
            "s-day-hb2452-testimony",
            "s-ksleg-hb2452"
          ]
        },
        {
          "id": "action-election-worker",
          "date": "2026-01-20",
          "body": "In official House Elections Committee testimony, Day identified herself as a Kansas citizen who had worked elections in her county for the past eight years.",
          "sourceIds": [
            "s-day-hb2452-testimony"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-action-county-clerks",
          "platform": "Bluesky",
          "observation": "Campaign account posted that Day had been meeting with county clerks responsible for voting and elections in their communities.",
          "observedAt": "2026-03-16",
          "sourceIds": [
            "s-bsky-county-clerks"
          ],
          "mappedToIssueId": "election-administration-voting-access"
        },
        {
          "id": "social-mail-ballots",
          "platform": "Bluesky",
          "observation": "The February 14, 2026 mail-ballot post was the highest visible Bluesky engagement item in the May 11 capture, with 4 likes and 2 reposts.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-mail-ballots"
          ],
          "mappedToIssueId": "election-administration-voting-access"
        },
        {
          "id": "social-topic-share-election-admin",
          "platform": "Bluesky / local harvest",
          "observation": "Local topic coding found 16 of 55 accessible Bluesky entries, or 29%, focused on voting access, election administration, mail ballots, early voting, federal/state control, voter data, or January 6.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "election-administration-voting-access"
        }
      ],
      "gap": {
        "summary": "The campaign message is specific and sustained. The main caution is status language: direct SOS candidate-list readback was blocked, and final ballot certification should not be stated before certification.",
        "evidenceIds": [
          "action-hb2452-testimony"
        ]
      }
    },
    {
      "id": "election-integrity-public-trust-data",
      "title": "Election Integrity / Public Trust / Voter Data",
      "stated": {
        "text": "Day frames election integrity as accurate, transparent, reliable election systems, public communication, coordination with county officials, and protection from political influence, disinformation, and fearmongering.",
        "sourceIds": [
          "s-campaign-home",
          "s-dass-kansas"
        ]
      },
      "actions": [
        {
          "id": "action-hb2452-process-concern",
          "date": "2026-01-20",
          "body": "Day's HB 2452 testimony tied election-process design to voter experience, ballot length, undervotes, and confusion.",
          "sourceIds": [
            "s-day-hb2452-testimony"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-action-voter-data-post",
          "platform": "Bluesky",
          "observation": "Campaign account addressed protection of voter data and votes when federal officials seek unredacted voter rolls.",
          "observedAt": "2026-02-16",
          "sourceIds": [
            "s-bsky-voter-data"
          ],
          "mappedToIssueId": "election-integrity-public-trust-data"
        },
        {
          "id": "social-county-clerks",
          "platform": "Bluesky",
          "observation": "March 16, 2026 post said Day had been meeting with county clerks responsible for voting and elections.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-county-clerks"
          ],
          "mappedToIssueId": "election-integrity-public-trust-data"
        },
        {
          "id": "ss-crossref-3",
          "platform": "electjenday.com",
          "observation": "The campaign website is the central source and gives the account set its governing frame. It opens with \"OUR RIGHT TO VOTE IS FUNDAMENTAL,\" says Day is \"running to safeguard our elections,\" and says Kansans deserve \"a safe, secure and accessible voting experience for all who are eligible.\" (source) The same site says voting \"should not be a partisan political issue\" and defines her platform as election integrity,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "election-integrity-public-trust-data"
        }
      ],
      "gap": {
        "summary": "Day's integrity language focuses on trust, data, systems, and disinformation rather than voter-fraud prosecution. No current officeholder voting record exists for the 2026 cycle because she is not currently in office.",
        "evidenceIds": [
          "action-hb2452-process-concern"
        ]
      }
    },
    {
      "id": "business-services-entrepreneurship",
      "title": "Business Services / Entrepreneurship",
      "stated": {
        "text": "Day says the Secretary of State office should make it easier to start and operate a business in Kansas by modernizing and streamlining registration and giving founders clearer guidance and timely support.",
        "sourceIds": [
          "s-campaign-home",
          "s-dass-kansas"
        ]
      },
      "actions": [
        {
          "id": "action-business-background",
          "date": "2026-05-19",
          "body": "Campaign-controlled and campaign-aligned biographies describe Day's experience in technology, real estate, finance, and small-business work.",
          "sourceIds": [
            "s-campaign-home",
            "s-dass-kansas"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-action-llc-post",
          "platform": "Bluesky",
          "observation": "Campaign account connected the business-services issue to Day's own current LLC filing/report experience.",
          "observedAt": "2026-04-06",
          "sourceIds": [
            "s-bsky-llc"
          ],
          "mappedToIssueId": "business-services-entrepreneurship"
        },
        {
          "id": "social-business-share",
          "platform": "Bluesky / local harvest",
          "observation": "Business services accounted for one of 55 accessible Bluesky entries, while the campaign site gives it a full platform plank.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "business-services-entrepreneurship"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "1. Campaign website homepage and platform text, captured 2026-05-11. Key issue areas: election integrity, access to voting, public communication against disinformation, county election coordination, business registration, and business support. (source) 2. Campaign site social-link inventory, captured 2026-05-11: Bluesky, X/Twitter, Instagram, Facebook, ActBlue, press kit, and footer LinkedIn icon. (source) 3.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "business-services-entrepreneurship"
        }
      ],
      "gap": {
        "summary": "The campaign site gives business services clear placement, but social evidence is sparse and no detailed administrative implementation plan beyond modernization/streamlining was confirmed.",
        "evidenceIds": [
          "action-business-background"
        ]
      }
    },
    {
      "id": "guns-public-safety-criminal-justice",
      "title": "Guns / Public Safety / Criminal Justice",
      "stated": {
        "text": "No full current gun-policy plank was found in candidate-controlled campaign material. The evidence comes from Day's legislative record and a 2026 campaign social post announcing a Moms Demand Action Gun Sense Candidate distinction.",
        "sourceIds": [
          "s-bsky-gun-sense",
          "s-ksleg-hb2140",
          "s-ksleg-vote-2021"
        ]
      },
      "actions": [
        {
          "id": "action-hb2140-sponsor",
          "date": "2021-01-26",
          "body": "Day sponsored HB 2140, which would prohibit concealed handguns in the state capitol; the bill died in committee.",
          "sourceIds": [
            "s-ksleg-hb2140"
          ]
        },
        {
          "id": "action-hb2058-nay",
          "date": "2021-03-04",
          "body": "Day voted nay on HB 2058 final action, a concealed-carry reciprocity bill; later HB 2058 votes also show nay votes on related motions.",
          "sourceIds": [
            "s-ksleg-vote-2021"
          ]
        },
        {
          "id": "action-hb2089-nay",
          "date": "2021-03-18",
          "body": "Day voted nay on HB 2089, standardizing firearm safety education training programs in school districts.",
          "sourceIds": [
            "s-ksleg-vote-2021"
          ]
        },
        {
          "id": "action-hb2300-sponsor",
          "date": "2021-02-09",
          "body": "Day sponsored HB 2300, abolishing the death penalty and creating aggravated murder; the bill died in committee.",
          "sourceIds": [
            "s-ksleg-hb2300"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-gun-sense",
          "platform": "Bluesky",
          "observation": "April 22, 2026 campaign post announced a 2026 Gun Sense Candidate distinction from Moms Demand Action.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-bsky-gun-sense"
          ],
          "mappedToIssueId": "guns-public-safety-criminal-justice"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Guns / Second Amendment / public safety: Campaign did not publish a full gun-policy plank in reviewed sources. Action evidence exists: as a legislator Day sponsored HB 2140, which would prohibit concealed handguns in the state capitol; she voted nay on HB 2058, a concealed-carry reciprocity / 18-to-20 license bill; and the campaign posted a 2026 Moms Demand Action Gun Sense Candidate distinction.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-mail-ballots"
          ],
          "mappedToIssueId": "guns-public-safety-criminal-justice"
        }
      ],
      "gap": {
        "summary": "Do not describe a complete current gun-policy platform from the available evidence. Use narrow bill/vote language and the Gun Sense Candidate post as a social validator signal.",
        "evidenceIds": [
          "action-hb2140-sponsor"
        ]
      }
    },
    {
      "id": "civic-legislative-record",
      "title": "Civic / Legislative Record Beyond the Current Campaign",
      "stated": {
        "text": "Day's current campaign centers election administration and business services, but her archived House record includes sponsored bills and resolutions on public safety, death penalty policy, ceremonial recognitions, and Kansas-Taiwan sister-state ties.",
        "sourceIds": [
          "s-ksleg-member"
        ]
      },
      "actions": [
        {
          "id": "action-hr6014",
          "date": "2021-05-04",
          "body": "Day sponsored HR 6014, strengthening sister-state ties between Kansas and Taiwan; it was adopted without roll call and enrolled.",
          "sourceIds": [
            "s-ksleg-hr6014"
          ]
        },
        {
          "id": "action-former-house-service",
          "date": "2020-2021",
          "body": "Kansas Legislature archived profile lists Day as a Democrat representing House District 48 with House service from 2020 to 2021.",
          "sourceIds": [
            "s-ksleg-member"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Bluesky is the clearest post-level record captured. The account description says, \"I'm running for Secretary of State because the people of Kansas deserve a safe, secure and accessible voting experience for all who are eligible.\" (source) Public API metadata on 2026-05-11 listed 32 followers, 37 following, and 70 posts. The accessible feed returned 55 recent entries from 2025-11-18 through 2026-05-08, including...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "civic-legislative-record"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Bluesky fundraising post, 2025-11-30, announcing the campaign had raised more than $50,000 since launch and linking the campaign mission to \"free and fair\" elections. (source) 10. Bluesky post, 2026-01-06, linking January 6 to the resolve of secretaries of state and saying the campaign is important because that resolve would be tested in 2026 and beyond. (source) 11.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "civic-legislative-record"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Bluesky post, 2026-04-06, saying her current LLC report and fee were easier than finding lighting for a residential rehab project. (source) 21. Bluesky post, 2026-04-22, announcing a 2026 Gun Sense Candidate distinction from Moms Demand Action. (source) 22. Bluesky post, 2026-05-05, announcing Gov.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-llc"
          ],
          "mappedToIssueId": "civic-legislative-record"
        }
      ],
      "gap": {
        "summary": "House service was brief and should be used as background rather than overstated as the main policy basis for the Secretary of State race.",
        "evidenceIds": [
          "action-hr6014"
        ]
      }
    },
    {
      "id": "visible-absences-no-inference",
      "title": "Visible Absences / No Inference",
      "stated": {
        "text": "Reviewed campaign-controlled material did not confirm sustained candidate-specific positions on abortion, marriage/LGBTQ policy, religious liberty, immigration, school choice, Medicaid, rural hospitals, water, marijuana, housing, broadband, roads, or veterans policy. This should be reported as absence of confirmed evidence, not as a position.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "social-visible-absences",
          "platform": "Public web / local harvest",
          "observation": "Local harvest found no sustained issue coverage across several non-Secretary-of-State policy areas in accessible campaign-controlled material.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "visible-absences-no-inference"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "This had the highest visible Bluesky post-level engagement in the captured feed: 4 likes and 2 reposts. (source) 17. Bluesky post, 2026-02-16, saying Kansas deserves a secretary of state who will protect voter data and the vote when the federal government seeks unredacted voter rolls. (source) 18.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-mail-ballots"
          ],
          "mappedToIssueId": "visible-absences-no-inference"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Topic coding is based on 55 accessible Bluesky feed entries returned by public API from 2025-11-18 to 2026-05-08, plus the campaign website and profile metadata. Multi-topic posts were assigned to their dominant visible subject.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-mail-ballots"
          ],
          "mappedToIssueId": "visible-absences-no-inference"
        }
      ],
      "gap": {
        "summary": "Do not infer positions from party label, endorsements, follows, likes, or silence. If downstream UI includes these issue areas, use neutral no-confirmed-statement language.",
        "evidenceIds": [
          "social-visible-absences"
        ]
      }
    }
  ],
  "recordSummary": "Former Kansas House District 48 representative",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Her public message is framed in civic and administrative terms, and the accessible campaign and legislative material does not tie her to a named congregation.",
  "campaignFinance": {
    "totalRaised": "totalRaised: $84,304.87; totalSpent: $69,564.35; cashOnHand: $14,740.52; inKind: $0.00; otherTransactions: $43,019.00; reportingPeriod: 2025 year-end; January 1, 2025 through December 31, 2025; sourceIds: s-kpdc-202601",
    "narrative": "totalRaised: $84,304.87; totalSpent: $69,564.35; cashOnHand: $14,740.52; inKind: $0.00; otherTransactions: $43,019.00; reportingPeriod: 2025 year-end; January 1, 2025 through December 31, 2025; sourceIds: s-kpdc-202601",
    "donors": [
      {
        "name": "James D. Childers",
        "amount": "$25 and another visible $1,000 entry"
      },
      {
        "name": "Louis Bornman",
        "amount": "$100"
      },
      {
        "name": "Michael Tourtellot",
        "amount": "$100"
      },
      {
        "name": "Dan Wancura",
        "amount": "$50"
      },
      {
        "name": "David Lambertson",
        "amount": "$250"
      },
      {
        "name": "Dan Osman",
        "amount": "$250"
      }
    ],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Candidate v2 issue file"
  },
  "sources": [
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://www.electjenday.com/",
      "title": "Jennifer Day for Secretary of State",
      "publisher": "Jen Day for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign centers the Secretary of State race on election administration, voting access, election security, public trust, and business services",
        "Campaign site lists endorsements from Laura Kelly, Brandon Woodard, Nikki McDonald, Dan Osman, Jerry Stogsdill, Mike Kelly, and Dawn Rattan",
        "Campaign site links Bluesky, X/Twitter, Instagram, Facebook, ActBlue, and a press kit",
        "Observed public online activity mapped to Election Integrity / Public Trust / Voter Data.",
        "Observed public online activity mapped to Business Services / Entrepreneurship."
      ]
    },
    {
      "id": "s-dass-kansas",
      "tier": "primary",
      "url": "https://demsofstate.org/kansas-2026/",
      "title": "Kansas 2026",
      "publisher": "Democratic Association of Secretaries of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "DASS describes Day as a businesswoman, community leader, public servant, League of Women Voters volunteer, and former election worker",
        "DASS frames her campaign around safe, secure, accessible elections, fighting disinformation, voting rights, participation, and business growth"
      ]
    },
    {
      "id": "s-ksleg-member",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/rep_day_jennifer_1/",
      "title": "Representative Jennifer Day",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Day represented House District 48 as a Democrat",
        "House service is listed as 2020-2021",
        "The page lists sponsored bills HB 2140 and HB 2300 and sponsored resolutions HR 6008, HR 6013, HR 6014, and HR 6016"
      ]
    },
    {
      "id": "s-ksleg-vote-2021",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/documents/rep_day_jennifer_1_vote_record_2021.pdf",
      "title": "Kansas House of Representatives 2021 Session Voter History - Day",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official 2021 vote record for Day",
        "Includes votes on concealed carry, firearm safety education, criminal justice, budgets, veterans, victims, and other measures"
      ]
    },
    {
      "id": "s-ksleg-hb2140",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2022/b2021_22/measures/hb2140/",
      "title": "HB 2140",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Day was a sponsor of HB 2140",
        "HB 2140 would prohibit carrying a concealed handgun in the state capitol",
        "The bill died in committee"
      ]
    },
    {
      "id": "s-ksleg-hb2300",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2022/b2021_22/measures/hb2300/",
      "title": "HB 2300",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Day was a sponsor of HB 2300",
        "HB 2300 would abolish the death penalty and create aggravated murder",
        "The bill died in committee"
      ]
    },
    {
      "id": "s-ksleg-hr6014",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2022/b2021_22/measures/hr6014/",
      "title": "HR 6014",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Day was a sponsor of HR 6014",
        "HR 6014 strengthened sister-state ties between Kansas and Taiwan",
        "The resolution was adopted without roll call on May 4, 2021 and enrolled May 6, 2021"
      ]
    },
    {
      "id": "s-ksleg-hb2452",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2452/",
      "title": "HB 2452",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2452 would change the timing of city, school, community college, and certain municipal elections to even-numbered years",
        "The bill was stricken from the House calendar by Rule 1507 on February 19, 2026"
      ]
    },
    {
      "id": "s-day-hb2452-testimony",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_electns_1/documents/testimony/20260120_21.pdf",
      "title": "Jennifer Day Testimony to House Elections Committee on HB 2452",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Day submitted opponent written-only testimony on HB 2452",
        "Day identified herself as a Kansas citizen and election worker in her county for the past eight years",
        "Her testimony raised concerns about longer ballots, undervotes, voter disengagement, confusion, and voting-process delays"
      ]
    },
    {
      "id": "s-bsky-mail-ballots",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social/post/3mes2wul5yr2e",
      "title": "Mail-ballot post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Local harvest identified this as the highest visible Bluesky post-level engagement in the captured feed, with 4 likes and 2 reposts",
        "Post named military families overseas, seniors, rural voters, and working parents as mail-ballot users",
        "Observed public online activity mapped to Visible Absences / No Inference."
      ]
    },
    {
      "id": "s-bsky-voter-data",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social/post/3meyy2k67iu2z",
      "title": "Voter-data post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Post addressed protection of voter data and votes"
      ]
    },
    {
      "id": "s-bsky-county-clerks",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social/post/3mh76kh4iwc2h",
      "title": "County clerks post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Post said Day had been meeting with county clerks responsible for voting and elections"
      ]
    },
    {
      "id": "s-bsky-llc",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social/post/3mithgio4yc2p",
      "title": "LLC filing post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Post connected the business-services issue to Day's current LLC filing/report experience",
        "Observed public online activity mapped to Civic / Legislative Record Beyond the Current Campaign."
      ]
    },
    {
      "id": "s-bsky-gun-sense",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social/post/3mk3pnx2lz224",
      "title": "Gun Sense Candidate post",
      "publisher": "Bluesky",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Post announced a 2026 Gun Sense Candidate distinction from Moms Demand Action"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Civic / Legislative Record Beyond the Current Campaign.",
        "Bluesky is the clearest post-level record captured. The account description says, \"I'm running for Secretary of State because the people of Kansas deserve a safe, secure and access"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social/post/3m6uucxngja2t",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Civic / Legislative Record Beyond the Current Campaign.",
        "Bluesky fundraising post, 2025-11-30, announcing the campaign had raised more than $50,000 since launch and linking the campaign mission to \"free and fair\" elections. (source) 10. "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JENNIFER_DAY_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jennifer-day.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
