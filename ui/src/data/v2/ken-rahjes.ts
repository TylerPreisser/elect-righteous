/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const KEN_RAHJES_V2: CandidateFullV2 = {
  "slug": "ken-rahjes",
  "name": "Ken Rahjes",
  "party": "R",
  "position": "Secretary of State candidate",
  "electionSlug": "kansas-sos-2026",
  "incumbent": false,
  "occupation": "Kansas House of Representatives, District 110 -- assumed January 11, 2016",
  "hometown": "Agra, Kansas (family farm/ranch)",
  "family": "Lori (Hoopingarner) Rahjes, originally from Manter, Kansas; Four grown children, one granddaughter",
  "campaignWebsite": "https://kenforkansas.com/",
  "issues": [
    {
      "id": "official-status-and-office-scope",
      "title": "Official Status and Office Scope",
      "stated": {
        "text": "Rahjes presents himself as a Republican candidate for Kansas Secretary of State and his campaign says he officially filed. Official records confirm two separate things: he is a current Kansas House member for District 110 and KPDC/Kansas.gov lists a Secretary of State campaign-finance committee and 2025 report for Kenneth J. Rahjes. The official SOS candidate-list page could not be read in this environment, so ballot-list confirmation remains a blocker until the candidate list is captured directly.",
        "sourceIds": [
          "s-ksleg-profile",
          "s-sos-candidates-info",
          "s-sos-candidate-list-blocked",
          "s-sos-deadline",
          "s-kpdc-index",
          "s-kpdc-at",
          "s-campaign-filing"
        ]
      },
      "actions": [
        {
          "id": "action-kpdc-at-filed",
          "date": "2026-01-06",
          "body": "Rahjes executed an Appointment of Treasurer form for a Secretary of State campaign with Denis Miller as treasurer.",
          "sourceIds": [
            "s-kpdc-at"
          ]
        },
        {
          "id": "action-kpdc-2025-year-end",
          "date": "2026-01-10",
          "body": "Rahjes' committee filed a 2025 year-end receipts and expenditures report for the Secretary of State race.",
          "sourceIds": [
            "s-kpdc-202601"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "_A summary of what Ken Rahjes has publicly said, posted, and amplified across campaign channels, public social metadata, official records, and credible indexed public coverage. Drawn from public captures of his campaign site, Facebook, X, Kansas Legislature records, PBS/Smoky Hills listings, Kansas Ag Report listings, Hays Post, and KVOE from 2016 through May 2026, with the campaign-period read centered on 2025...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-muckrack"
          ],
          "mappedToIssueId": "official-status-and-office-scope"
        },
        {
          "id": "ss-crossref-3",
          "platform": "kenforkansas.com",
          "observation": "The clearest candidate-controlled secretary-of-state statement is the July 2025 filing post on his campaign site. Rahjes framed the office through business filings and election administration, saying Kansas should streamline business filings, improve the One Stop portal, continue security initiatives for election officials and poll workers, increase election-audit transparency, and produce fast, accurate results....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-filing"
          ],
          "mappedToIssueId": "official-status-and-office-scope"
        },
        {
          "id": "ss-crossref-5",
          "platform": "hayspost.com",
          "observation": "Local coverage of his campaign stops repeats the same two-part argument. At a November 2025 Hays event, Rahjes said, \"I believe I'm most effective by looking you in the eye and having a conversation,\" and tied his run to county clerks, voter ID, ending the three-day mail-ballot grace period, and civic education in schools. On the business side, he described the secretary of state's office as the \"front door\" for...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-campaign-stop"
          ],
          "mappedToIssueId": "official-status-and-office-scope"
        }
      ],
      "gap": {
        "summary": "Official SOS candidate-list / ballot status could not be confirmed because the candidate-list page was JavaScript/bot-check gated. Do not describe him as ballot-certified from this pass alone.",
        "evidenceIds": [
          "action-kpdc-at-filed"
        ]
      }
    },
    {
      "id": "elections-administration-and-voter-confidence",
      "title": "Elections Administration and Voter Confidence",
      "stated": {
        "text": "Rahjes' Secretary of State campaign centers election confidence, county election officials, voter ID, audits, and faster election results. His campaign filing post says he would continue security initiatives for election officials and poll workers, increase audit transparency, and secure fast and accurate results. His homepage says Kansans want fair and honest elections and confidence that votes are counted.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-filing",
          "s-hays-campaign-stop"
        ]
      },
      "actions": [
        {
          "id": "action-sb4-final-action",
          "date": "2025-02-27",
          "body": "Rahjes voted yea on House emergency final action for SB 4, requiring advance voting ballots to be returned by 7:00 p.m. on Election Day.",
          "sourceIds": [
            "s-sb4",
            "s-sb4-house-journal-final"
          ]
        },
        {
          "id": "action-sb4-veto-override",
          "date": "2025-03-25",
          "body": "Rahjes voted yea on the House motion to override the governor's veto of SB 4.",
          "sourceIds": [
            "s-sb4",
            "s-sb4-house-journal-override"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-campaign-social-routing-elections",
          "platform": "Campaign website",
          "observation": "The campaign site routes voters to Facebook and X for future updates, but post-level timelines were not reliably accessible logged-out.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home",
            "s-x",
            "s-facebook"
          ],
          "mappedToIssueId": "elections-administration-and-voter-confidence"
        },
        {
          "id": "ss-crossref-2",
          "platform": "kenforkansas.com",
          "observation": "The campaign's July 2025 filing post is the clearest candidate-controlled secretary-of-state message. It says Rahjes filed as a Republican candidate, frames his business-services priority as streamlining filings and improving the One Stop online portal, and frames the elections priority as security initiatives for election officials and poll workers, transparency in election audits, and accurate results. Rahjes...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-filing"
          ],
          "mappedToIssueId": "elections-administration-and-voter-confidence"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Key themes: speaking directly with voters, county clerks, voter ID, ending the mail-ballot grace period, school civic education, business filings, property taxes, and review of rules and regulations. (source) 8. Mar. 16, 2026 KVOE Emporia coverage. Key themes: statewide campaign travel, secure/counted votes, business filings, entrepreneurs, and continuing Scott Schwab's business-owner service work. (source) 9....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hays-campaign-stop"
          ],
          "mappedToIssueId": "elections-administration-and-voter-confidence"
        }
      ],
      "gap": {
        "summary": "No detailed candidate-controlled plan was found for audit design, county-clerk funding, voting technology, cybersecurity, or county implementation costs.",
        "evidenceIds": [
          "action-sb4-final-action"
        ]
      }
    },
    {
      "id": "business-services-and-economic-development",
      "title": "Business Services and Economic Development",
      "stated": {
        "text": "Rahjes links the Secretary of State's office to business formation and growth. His campaign says he wants to streamline business filings and improve the One Stop portal; his homepage says the office should be business-friendly, welcoming, expedited, and not an obstacle to people starting, expanding, or moving a business to Kansas.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-filing",
          "s-hays-campaign-stop",
          "s-kvoe-emporia"
        ]
      },
      "actions": [
        {
          "id": "action-campaign-business-services-platform",
          "date": "2025-07-08",
          "body": "Campaign filing announcement identified business filings and the One Stop online portal as Secretary of State priorities.",
          "sourceIds": [
            "s-campaign-filing"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "kenforkansas.com",
          "observation": "Rahjes' campaign site is the central candidate-controlled channel. The homepage introduces him as a farm-and-ranch Kansan from Agra, says he lives there with his wife Lori, and connects his public identity to trust, integrity, rural Kansas, small business, agriculture communications, and legislative service. The site's current slogan block reads \"TRUST...BUT VERIFY\" and \"Securing Your Future with Trust and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "business-services-and-economic-development"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "The X handle exists because it is linked by the campaign site and indexed by Muck Rack. Muck Rack describes the account as Rahjes' personal account and summarizes the bio as, \"Small Business Owner, Agriculture Broadcaster, Kansas State representative 110th District (Retweets do not imply endorsement.).\" (source) Direct X post inventory, reposts, follower counts, and post-level engagement were not reliably visible...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-muckrack"
          ],
          "mappedToIssueId": "business-services-and-economic-development"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Facebook",
          "observation": "1. Campaign homepage, captured 2026-05-11. Key visible frames: trust, integrity, rural Kansas biography, agriculture communications, small business, legislative service, and social links to Facebook and X. (source) 2. Campaign news archive, captured 2026-05-11. Current public archive shows one 2025 secretary-of-state filing post, one 2024 relaunch note, 2021 legislative updates, and older legislative/campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "business-services-and-economic-development"
        }
      ],
      "gap": {
        "summary": "No implementation detail was found for One Stop portal cost, agency integration, statutory changes, staffing, or timeline.",
        "evidenceIds": [
          "action-campaign-business-services-platform"
        ]
      }
    },
    {
      "id": "agriculture-water-and-rural-infrastructure",
      "title": "Agriculture, Water, and Rural Infrastructure",
      "stated": {
        "text": "Rahjes' strongest non-election record is agriculture and water. His campaign site describes agriculture as central to Kansas, says water must be used wisely, and points to his Water Task Force work. The Legislature identifies him as chair of Agriculture and Natural Resources and a Water Program Task Force member.",
        "sourceIds": [
          "s-campaign-home",
          "s-ksleg-profile",
          "s-hb2172",
          "s-governor-hb2172",
          "s-kansas-ag-report"
        ]
      },
      "actions": [
        {
          "id": "action-hb2172-requested-by-rahjes",
          "date": "2025-02-10",
          "body": "The official HB 2172 page identifies the bill as requested by Representative Rahjes.",
          "sourceIds": [
            "s-hb2172"
          ]
        },
        {
          "id": "action-hb2172-floor-amendment",
          "date": "2025-02-19",
          "body": "Rep. Ken Rahjes offered a floor amendment to HB 2172.",
          "sourceIds": [
            "s-hb2172"
          ]
        },
        {
          "id": "action-hb2172-house-vote",
          "date": "2025-02-20",
          "body": "Rahjes voted yea on House final action for HB 2172.",
          "sourceIds": [
            "s-hb2172-house-journal"
          ]
        },
        {
          "id": "action-hb2172-signed",
          "date": "2025-04-08",
          "body": "Governor Kelly signed Senate Substitute for HB 2172 and the governor's office quoted Rahjes on water, agriculture, and rural communities.",
          "sourceIds": [
            "s-hb2172",
            "s-governor-hb2172"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-kansas-ag-report",
          "platform": "Kansas Ag Report",
          "observation": "Kansas Ag Report identifies Rahjes as host of a weekly agriculture television program covering agriculture law and policy for Kansas farmers and ranchers.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kansas-ag-report"
          ],
          "mappedToIssueId": "agriculture-water-and-rural-infrastructure"
        },
        {
          "id": "ss-muckrack-ag",
          "platform": "Muck Rack / X profile metadata",
          "observation": "Muck Rack indexes Rahjes as a Kansas House member and Kansas Ag Report host; it describes the linked account as a personal account for a small business owner, agriculture broadcaster, and Kansas state representative.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-muckrack"
          ],
          "mappedToIssueId": "agriculture-water-and-rural-infrastructure"
        },
        {
          "id": "ss-crossref-3",
          "platform": "kenforkansas.com",
          "observation": "Key themes: election integrity and security, business filings, One Stop portal, campaign prayer/support/vote ask. (source) 4. Jan. 20, 2024 campaign-site relaunch post. Rahjes said he had filed for reelection to the Kansas House and continued to serve as chair of Agriculture and Natural Resources and on appropriations, higher education budget, and special claims committees. (source) 5. May 12, 2021 campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-filing"
          ],
          "mappedToIssueId": "agriculture-water-and-rural-infrastructure"
        }
      ],
      "gap": {
        "summary": "The record is strong on task-force creation and water planning structure; this pass did not evaluate measurable water outcomes or whether task-force recommendations have been implemented.",
        "evidenceIds": [
          "action-hb2172-requested-by-rahjes"
        ]
      }
    },
    {
      "id": "life-family-and-firearms",
      "title": "Life, Family Policy, and Firearms",
      "stated": {
        "text": "Rahjes' campaign site states that life starts at conception, says he will continue to be a voice for the unborn, and says he is an NRA member who will defend firearm ownership. Hays Post also records Rahjes discussing minor-focused gender-transition legislation in 2025. These are stated positions and reported statements; this pass does not infer positions from party label or faith affiliation.",
        "sourceIds": [
          "s-campaign-home",
          "s-hays-2025-coffee",
          "s-sb63"
        ]
      },
      "actions": [
        {
          "id": "action-sb63-status-only",
          "date": "2025-02-18",
          "body": "SB 63 / Help Not Harm Act is official legislative context for Rahjes' Hays Post comments on minor-focused gender-transition limits.",
          "sourceIds": [
            "s-sb63",
            "s-hays-2025-coffee"
          ]
        },
        {
          "id": "action-kpdc-life-firearms-expenditures",
          "date": "2025-09-22",
          "body": "Rahjes' 2025 campaign-finance report itemizes disbursements to Kansans for Life and Kansas Rifle Association Inc.",
          "sourceIds": [
            "s-kpdc-202601"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Key themes: Value Them Both, property-tax transparency, Kansas Promise Scholarship Act, COVID liability protections, unemployment-system overhaul, budget work, and constituent contact. (source) 6. July 1, 2025 Hays Post filing coverage carrying the campaign announcement.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "life-family-and-firearms"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The accessible reviewed set did not include meaningful candidate-controlled social posting on abortion after the older 2021 Value Them Both reference, immigration, border policy, guns, crime beyond AI/campaign misuse and stalking minors in a 2021 legislative update, Medicaid expansion, child care, housing costs, broadband deployment, veterans services, or federal Trump/Biden national-politics messaging....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-muckrack"
          ],
          "mappedToIssueId": "life-family-and-firearms"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Several issue areas do not appear at meaningful frequency in the accessible material reviewed. The public set did not include repeated candidate-controlled posts centered on Medicaid expansion, child care, housing costs, broadband, veterans services, immigration, border policy, guns, crime, federal foreign policy, or abortion beyond the older 2021 Value Them Both legislative update. Gender-transition policy,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-muckrack"
          ],
          "mappedToIssueId": "life-family-and-firearms"
        }
      ],
      "gap": {
        "summary": "Official Rahjes roll-call confirmation for SB 63 was not retrieved in this pass. Candidate site provides stated positions on life and firearms; campaign disbursements are financial records, not endorsement records.",
        "evidenceIds": [
          "action-sb63-status-only"
        ]
      }
    },
    {
      "id": "education-local-control-and-civic-formation",
      "title": "Education, Local Control, and Civic Formation",
      "stated": {
        "text": "Rahjes says he believes in public education and schools of all sizes, opposes forced consolidation without a viable factual plan, supports vocational education and higher-education research, and wants young people taught the importance of voting in local races. In 2025 local coverage, he questioned federal education control and argued local school boards should decide what works for local children.",
        "sourceIds": [
          "s-campaign-home",
          "s-hays-campaign-stop",
          "s-hays-2025-coffee"
        ]
      },
      "actions": [
        {
          "id": "action-civic-education-campaign-statement",
          "date": "2025-11-24",
          "body": "Hays Post reported Rahjes saying election education should start as early as grade school and the Secretary of State should visit schools to teach voting participation.",
          "sourceIds": [
            "s-hays-campaign-stop"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No single official education bill vote or detailed state education finance plan was verified for this issue in this pass.",
        "evidenceIds": [
          "action-civic-education-campaign-statement"
        ]
      }
    },
    {
      "id": "health-care-rural-services-and-opportunity",
      "title": "Health Care, Rural Services, and Opportunity",
      "stated": {
        "text": "Rahjes' campaign site says Kansas needs strong hospitals, fact-based health-care answers, long-term funding sources, better mental-health treatment and funding, affordable housing and child care in underserved communities, and reliable broadband. Hays Post 2026 legislative-coffee coverage records discussion of rural senior transportation, HaysMed reimbursement, conservation, and AI campaign misuse.",
        "sourceIds": [
          "s-campaign-home",
          "s-hays-2026-coffee"
        ]
      },
      "actions": [
        {
          "id": "action-rural-services-legislative-coffee",
          "date": "2026-02-09",
          "body": "Hays Post recorded Rahjes discussing rural senior transportation processes, HaysMed reimbursement discussions, conservation/water, and AI campaign-misuse concerns.",
          "sourceIds": [
            "s-hays-2026-coffee"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No official health-care, broadband, housing, or child-care bill action was verified in this pass.",
        "evidenceIds": [
          "action-rural-services-legislative-coffee"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public records identify Rahjes and his wife as members of the United Presbyterian Church in Phillipsburg. Public sources reviewed for this profile did not provide a verified church website.",
  "campaignFinance": {
    "totalRaised": "$24,070.30",
    "narrative": "$24,070.30",
    "donors": [
      {
        "name": "Scott Foote",
        "amount": "$3,300"
      },
      {
        "name": "Dennis Mullin",
        "amount": "$2,500"
      },
      {
        "name": "Kansas Sorghum Producers Association",
        "amount": "$2,000"
      },
      {
        "name": "Kansas Bankers Association PAC",
        "amount": "$1,000"
      },
      {
        "name": "Mark Hutton",
        "amount": "$1,000"
      },
      {
        "name": "Mary Hutton",
        "amount": "$1,000"
      },
      {
        "name": "Michael McClellan",
        "amount": "$1,000"
      },
      {
        "name": "Clay Scott",
        "amount": "$500"
      },
      {
        "name": "Craig Meeker",
        "amount": "$500"
      },
      {
        "name": "Richard Porter",
        "amount": "$500"
      },
      {
        "name": "HP Defense LLC",
        "amount": "$480.30"
      },
      {
        "name": "Kent Glasscock",
        "amount": "$100"
      }
    ],
    "undisclosed": "KPDC PDF text extraction compressed some rows; visually verify donor rows before UI publication. Disbursements to Kansans for Life and Kansas Rifle Association are expenditures, not endorsements.",
    "reportingPeriod": "2025 year-end (1/1/2025 through 12/31/2025)",
    "source": "Campaign Finance Receipts and Expenditures Report - Kenneth J Rahjes"
  },
  "sources": [
    {
      "id": "s-ksleg-profile",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/legislators/rep_rahjes_ken_1/",
      "title": "Ken Rahjes",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ken Rahjes is a Republican House member for District 110, Phillips County",
        "House terms are listed as 2015-present",
        "Occupation is Agricultural Communications",
        "Rahjes chairs Agriculture and Natural Resources and serves on Appropriations, Agriculture and Natural Resources Budget, Joint Committee on Special Claims Against the State, and Water Program Task Force"
      ]
    },
    {
      "id": "s-sos-candidates-info",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/candidates.html",
      "title": "Candidates",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Statewide candidates file candidacy with the Kansas Secretary of State",
        "A candidate is not considered filed until petition or declaration and fee is received"
      ]
    },
    {
      "id": "s-sos-candidate-list-blocked",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections_upcoming_candidate.aspx",
      "title": "Candidate List",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-list page returned a JavaScript / robot-check block in this research environment"
      ]
    },
    {
      "id": "s-sos-deadline",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2026/05-01-26-one-month-countdown-until-candidate-filing-deadline.html",
      "title": "One Month Countdown Until Candidate Filing Deadline",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Statewide candidates must file by noon on June 1, 2026",
        "Secretary of State is among offices up for election in 2026",
        "Updated 2026 candidate list is to be updated after filing deadline day"
      ]
    },
    {
      "id": "s-kpdc-index",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Statewide 2026 Election Cycle Candidate Reports",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Secretary of State candidates list includes Rahjes, Ken",
        "Rahjes has Appointment of Treasurer and 202601 report links"
      ]
    },
    {
      "id": "s-kpdc-at",
      "tier": "primary",
      "url": "https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW04KR_AT.pdf",
      "title": "Appointment of Treasurer or Candidate Committee Form - Kenneth J Rahjes",
      "publisher": "Kansas Public Disclosure Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate name Kenneth J Rahjes",
        "Office sought is Secretary of State",
        "Treasurer is Denis Miller",
        "Executed January 6, 2026"
      ]
    },
    {
      "id": "s-kpdc-202601",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04KR_202601.pdf",
      "title": "Campaign Finance Receipts and Expenditures Report - Kenneth J Rahjes",
      "publisher": "Kansas Public Disclosure Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2025 total contributions and other receipts were $24,070.30",
        "2025 total expenditures and other disbursements were $1,442.98",
        "Cash on hand at close was $22,627.32",
        "In-kind contributions were $900.00",
        "Other transactions were $8,025.50",
        "Itemized receipts include Scott Foote, Kansas Sorghum Producers Association, Dennis Mullin, Kansas Bankers Association PAC, Mark Hutton, Mary Hutton, Michael McClellan, Clay Scott, Craig Meeker, Richard Porter, HP Defense LLC, Kent Glasscock, Johnson Farms, and Kent Winter",
        "Expenditures include $1,000 to Kansans for Life and $250 to Kansas Rifle Association Inc."
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://kenforkansas.com/",
      "title": "Ken For Kansas",
      "publisher": "Ken For Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign biography links Rahjes to Agra, agriculture, Authentic Ag Inc., Kansas Ag Report, United Presbyterian Church in Phillipsburg, Farm Bureau, Rotary, Huck Boyd Institute, and Kansas Foundation for Agriculture in the Classroom",
        "Campaign issues include life, Second Amendment, agriculture, elections, taxes, economic development, education, transportation and safety, health care, and opportunity",
        "Campaign site links Facebook and X only",
        "Observed public online activity mapped to Business Services and Economic Development."
      ]
    },
    {
      "id": "s-campaign-filing",
      "tier": "primary",
      "url": "https://kenforkansas.com/news/rahjes-files-for-secretary-of-state/",
      "title": "Rahjes files for Secretary of State",
      "publisher": "Ken For Kansas campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says Rahjes officially filed as a Republican candidate for Kansas Secretary of State",
        "Campaign says Rahjes intends to streamline business filings and improve the One Stop online portal",
        "Campaign says Rahjes would continue security initiatives for election officials and poll workers, increase audit transparency, and secure fast and accurate election results",
        "Campaign lists statewide primary day as August 4, 2026",
        "Observed public online activity mapped to Official Status and Office Scope.",
        "Observed public online activity mapped to Elections Administration and Voter Confidence.",
        "Observed public online activity mapped to Agriculture, Water, and Rural Infrastructure."
      ]
    },
    {
      "id": "s-sb4",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb4/",
      "title": "SB 4",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 4 requires return of advance voting ballots by 7:00 p.m. on Election Day",
        "Bill status is veto overridden by House",
        "Bill summary states deadline changed from the third day after election to 7:00 p.m. on Election Day beginning January 1, 2026"
      ]
    },
    {
      "id": "s-sb4-house-journal-final",
      "tier": "primary",
      "url": "https://kslegislature.gov/documents/view/?apn=b2025_26%2Fyear1%2Fready_for_publication%2Fjournal%2Fdaily_journal_house_20250227131205.odt",
      "title": "Daily House Journal - February 27, 2025",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 4 House emergency final action passed as amended",
        "Rahjes is listed among yea votes"
      ]
    },
    {
      "id": "s-sb4-house-journal-override",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/chamber/documents/daily_journal_house_20250325111406.pdf",
      "title": "Daily House Journal - March 25, 2025",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 4 House motion to override veto prevailed 84-41",
        "Rahjes is listed among yea votes in the official journal/search-visible text"
      ]
    },
    {
      "id": "s-hb2172",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2172/",
      "title": "S Sub for HB 2172",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2172 establishes the water program task force and water planning work group",
        "Bill status is effective April 24, 2025",
        "Rep. Ken Rahjes offered a floor amendment on February 19, 2025",
        "Bill identification says requested by Representative Rahjes"
      ]
    },
    {
      "id": "s-hb2172-house-journal",
      "tier": "primary",
      "url": "https://kslegislature.gov/documents/view/?apn=b2025_26%2Fyear1%2Fready_for_publication%2Fjournal%2Fdaily_journal_house_20250220113728.odt",
      "title": "Daily House Journal - February 20, 2025",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2172 House final action passed 109-12",
        "Rahjes is listed among yea votes"
      ]
    },
    {
      "id": "s-governor-hb2172",
      "tier": "primary",
      "url": "https://www.governor.ks.gov/Home/Components/News/News/606/56",
      "title": "Governor Kelly Signs Bipartisan Bill Establishing Task Force to Tackle Kansas' Water Challenges",
      "publisher": "Kansas Office of the Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Governor signed Senate Substitute for HB 2172",
        "Governor press release quotes Rahjes on the water task force, agriculture, rural areas, and securing Kansas' water supply"
      ]
    },
    {
      "id": "s-sb63",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb63/",
      "title": "SB 63",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 63 enacts the Help Not Harm Act",
        "Bill restricts gender-transition care for children and related state funding, civil liability, and professional discipline provisions",
        "Bill status is veto overridden by House"
      ]
    },
    {
      "id": "s-hays-campaign-stop",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d7c59a6a-6884-4ac9-aad1-7c9d728f5f5f",
      "title": "Secretary of state candidate Rahjes calls for election security, business growth",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Rahjes discussed county clerks, voter ID, ending the three-day mail-ballot grace period, school civic education, business filings, property taxes, and rules/regulations review",
        "Observed public online activity mapped to Official Status and Office Scope.",
        "Observed public online activity mapped to Elections Administration and Voter Confidence."
      ]
    },
    {
      "id": "s-kvoe-emporia",
      "tier": "secondary",
      "url": "https://kvoe.com/2026/03/16/rahjes-in-emporia-touting-secretary-of-state-bid/",
      "title": "Rahjes in Emporia touting Secretary of State bid",
      "publisher": "KVOE",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Rahjes highlighted election security and business filings in Emporia",
        "KVOE reported Republican primary opponent Pat Proctor and Democratic candidates Jennifer Day and Samuel Lane"
      ]
    },
    {
      "id": "s-hays-2026-coffee",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/93f5e63a-dd1b-411a-98f8-c3ca8b2c187a",
      "title": "Local legislators discuss rural issues, conservation",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Rahjes discussed rural senior transportation, conservation, water, AI campaign misuse, and NIL funding",
        "Rahjes said local decision-making matters for water and conservation"
      ]
    },
    {
      "id": "s-hays-2025-coffee",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c009ea47-7cfc-4c71-bad9-7dae18a389c6",
      "title": "Local legislators highlight cost saving measures, support Hays water conservations",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Rahjes discussed state spending, education local control, minor-focused gender-transition legislation, rural attorney shortages, and ethanol infrastructure"
      ]
    },
    {
      "id": "s-kansas-ag-report",
      "tier": "primary",
      "url": "https://kansasagreport.net/about",
      "title": "Kansas Ag Report",
      "publisher": "Kansas Ag Report / Authentic Ag Inc.",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas Ag Report is hosted by Ken Rahjes",
        "Show covers agriculture law and policy issues affecting Kansas farmers and ranchers"
      ]
    },
    {
      "id": "s-muckrack",
      "tier": "social",
      "url": "https://muckrack.com/ken-rahjes",
      "title": "Ken Rahjes's Profile",
      "publisher": "Muck Rack",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Muck Rack lists Rahjes as Kansas House member and Kansas Ag Report host",
        "Profile text describes a personal account for a small business owner, agriculture broadcaster, and Kansas state representative and says retweets do not imply endorsement",
        "Observed public online activity mapped to Business Services and Economic Development."
      ]
    },
    {
      "id": "s-x",
      "tier": "social",
      "url": "https://twitter.com/kenrahjes",
      "title": "X/Twitter kenrahjes",
      "publisher": "X / Twitter",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign site links this account",
        "Post-level timeline was not reliably accessible logged-out"
      ]
    },
    {
      "id": "s-facebook",
      "tier": "social",
      "url": "https://www.facebook.com/kenforkansas/",
      "title": "Ken For Kansas",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign site links this page",
        "Post-level timeline was not reliably accessible logged-out"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://kenforkansas.com/news/first-adjournment-is-here/",
      "title": "Hays Post / Kenforkansas",
      "publisher": "Kenforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Life, Family Policy, and Firearms.",
        "Key themes: Value Them Both, property-tax transparency, Kansas Promise Scholarship Act, COVID liability protections, unemployment-system overhaul, budget work, and constituent cont"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(KEN_RAHJES_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ken-rahjes.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
