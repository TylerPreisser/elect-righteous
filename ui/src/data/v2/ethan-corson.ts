/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ETHAN_CORSON_V2: CandidateFullV2 = {
  "slug": "ethan-corson",
  "name": "Ethan Corson",
  "party": "D",
  "position": "Kansas Governor",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Kansas Senate District 7; Senate Caucus Chair",
  "campaignWebsite": "https://ethanforkansas.com/",
  "issues": [
    {
      "id": "i-public-education-school-funding",
      "title": "Public Education / School Funding",
      "stated": {
        "text": "Corson's campaign leads with public schools, saying the race is about kitchen-table issues including better schools and that he would work with both parties to make Kansas schools among the best in America.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-education-sb44-2025",
          "date": "2025-02-19",
          "body": "Voted yea on SB 44 expanding Kansas Promise Scholarship eligibility and increasing the maximum annual appropriation limit.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-education-sb47-2025",
          "date": "2025-02-19",
          "body": "Voted nay on SB 47, a school-board governance bill authorizing agenda, public interaction, and property-access changes.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-education-sb361-2026",
          "date": "2026-03-27",
          "body": "Voted nay on the SB 361 conference committee report electing Kansas into a federal scholarship-granting organization tax credit program.",
          "sourceIds": [
            "s-ksleg-sb361-ccr"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-education-embed-2026",
          "platform": "Campaign-site X embed",
          "observation": "Current embedded X excerpts included posts about Shawnee Mission North's State of the School and Shawnee Mission South.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-public-education-school-funding"
        },
        {
          "id": "ss-crossref-2",
          "platform": "ethanforkansas.com",
          "observation": "Campaign website: ethanforkansas.com -- active. The site's public metadata frames the campaign around \"Opportunities for the next generation of Kansans, so they can build a life right here,\" and the visible homepage/donation copy says \"Better Schools. Lower Taxes.\" The WordPress feed had no article items at capture; the page itself was last modified September 19, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-public-education-school-funding"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Facebook",
          "observation": "Kansas Senate Democrats profile: Senator Ethan Corson -- official legislative/caucus profile. It links the campaign website, ActBlue fundraising page, and Facebook page.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-public-education-school-funding"
        }
      ],
      "gap": {
        "summary": "No full education white paper was found on the current campaign site; the clearest candidate-controlled message is public-school support and affordability.",
        "evidenceIds": [
          "ae-education-sb44-2025"
        ]
      }
    },
    {
      "id": "i-taxes-cost-living-business",
      "title": "Taxes / Cost of Living / Business Recruitment",
      "stated": {
        "text": "The campaign says Corson worked with both parties to eliminate the food sales tax, cut property taxes, remove taxes on Social Security, and provide targeted tax relief while recruiting businesses to Kansas.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-tax-sb215-sponsor",
          "date": "2025",
          "body": "Co-sponsored SB 215, a taxation bill concerning homestead property-tax refund changes.",
          "sourceIds": [
            "s-ksleg-sb215"
          ]
        },
        {
          "id": "ae-labor-sb216-sponsor",
          "date": "2025",
          "body": "Co-sponsored SB 216, establishing the Kansas paid sick time act; the bill died.",
          "sourceIds": [
            "s-ksleg-sb216"
          ]
        },
        {
          "id": "ae-tax-hcr5011-2025",
          "date": "2025-03-21",
          "body": "Voted nay on HCR 5011, a proposed constitutional amendment limiting valuation increases for real property and mobile-home-classified personal property.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-affordability-harvest-2026",
          "platform": "Campaign-site X embed / local harvest",
          "observation": "Local harvest and current campaign embed show repeated affordability, rising costs, business outreach, and chamber/event travel signals, but no reliable logged-out post-level engagement counts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-taxes-cost-living-business"
        },
        {
          "id": "ss-crossref-2",
          "platform": "LinkedIn",
          "observation": "LinkedIn Public Preview LinkedIn's public search preview showed Ethan Corson with 2K followers and 500+ connections. Recent indexed activity emphasized economic development, business outreach, and public-school biography:",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-taxes-cost-living-business"
        },
        {
          "id": "ss-crossref-4",
          "platform": "LinkedIn",
          "observation": "Topic classification for the three visible LinkedIn preview items: economic development / business outreach (2), public schools / biography (1).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-taxes-cost-living-business"
        }
      ],
      "gap": {
        "summary": "This pass did not map every campaign tax claim to a specific roll call across prior sessions.",
        "evidenceIds": [
          "ae-tax-sb215-sponsor"
        ]
      }
    },
    {
      "id": "i-abortion-reproductive-policy",
      "title": "Abortion / Reproductive Policy",
      "stated": {
        "text": "A current campaign-site embedded X excerpt says, 'We've defended reproductive rights before and we'll do it again in August and in November. As governor, I...' No standalone detailed abortion platform page was found.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-abortion-hb2062-final",
          "date": "2025-03-12",
          "body": "Voted nay on HB 2062 final action, concerning child support orders for unborn children and unborn/stillborn income-tax exemptions.",
          "sourceIds": [
            "s-ksleg-hb2062-final"
          ]
        },
        {
          "id": "ae-abortion-hb2062-override",
          "date": "2025-04-10",
          "body": "Voted nay on the HB 2062 veto override.",
          "sourceIds": [
            "s-ksleg-hb2062-override"
          ]
        },
        {
          "id": "ae-abortion-hb2729-final",
          "date": "2026-03-19",
          "body": "Voted nay on HB 2729 final action, concerning Woman's-Right-to-Know Act forms and notices.",
          "sourceIds": [
            "s-ksleg-hb2729-final"
          ]
        },
        {
          "id": "ae-abortion-hb2729-override",
          "date": "2026-04-09",
          "body": "Voted nay on the HB 2729 veto override.",
          "sourceIds": [
            "s-ksleg-hb2729-override"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-reproductive-rights-embed",
          "platform": "Campaign-site X embed",
          "observation": "The campaign-site embed surfaced a reproductive-rights excerpt, but the text was truncated and did not expose engagement counts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-abortion-reproductive-policy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "The captured candidate-controlled social material did not show sustained original posts on abortion, LGBTQ+ policy, gun policy, immigration, marijuana, water rights, energy policy, or religious-liberty policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-abortion-reproductive-policy"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Across the captured period, the candidate-controlled public footprint does not show sustained social posting on abortion, LGBTQ+ policy, gun policy, immigration, marijuana, water rights, energy policy, or religious-liberty policy. Those may exist in questionnaires, legislative votes, interviews, private/platform-limited content, or future campaign material, but they were not prominent in the visible...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-abortion-reproductive-policy"
        }
      ],
      "gap": {
        "summary": "Do not quote beyond the visible truncated social excerpt unless the full post is captured from X or an archive.",
        "evidenceIds": [
          "ae-abortion-hb2062-final"
        ]
      }
    },
    {
      "id": "i-lgbtq-family-religious-liberty",
      "title": "Marriage & Family / LGBTQ Policy / Religious-Liberty-Adjacent Foster Care",
      "stated": {
        "text": "No candidate-controlled marriage-specific or religious-liberty platform was found. The issue record is action-based and should not be expanded into a personal belief claim.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-lgbtq-sb63-2025",
          "date": "2025-01-29",
          "body": "Voted nay on SB 63, the Help Not Harm Act restricting gender-transition care for minors and related state funding.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-lgbtq-sb76-2025",
          "date": "2025-02-19",
          "body": "Voted nay on SB 76, requiring school and postsecondary employees to use names and pronouns consistent with a student's biological sex and birth certificate.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-lgbtq-sb244-override-2026",
          "date": "2026-02-17",
          "body": "Voted nay on the SB 244 veto override concerning biological sex, public buildings, driver's licenses, and birth certificates.",
          "sourceIds": [
            "s-ksleg-sb244-override"
          ]
        },
        {
          "id": "ae-fostercare-hb2311-2025",
          "date": "2025-03-21",
          "body": "Voted nay on HB 2311 concerning foster-care/custody placement policy and sincerely held religious or moral beliefs related to sexual orientation or gender identity.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Faith/religion appeared in external biographical coverage identifying Corson as Jewish, but not as a campaign-message theme in the captured 2025-2026 campaign social material.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-lgbtq-family-religious-liberty"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Candidate-controlled positions on guns, marijuana, religious liberty, and marriage policy beyond legislative votes or visible absences noted above.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-lgbtq-family-religious-liberty"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled marriage policy, current synagogue affiliation, or religious-liberty platform was confirmed.",
        "evidenceIds": [
          "ae-lgbtq-sb63-2025"
        ]
      }
    },
    {
      "id": "i-healthcare-mental-health-rural-access",
      "title": "Healthcare / Mental Health / Rural Access",
      "stated": {
        "text": "Corson's visible healthcare message emphasizes access and rural distance. Debate coverage quoted him saying Kansans should be able to get care without going broke or driving hours to see a doctor.",
        "sourceIds": [
          "s-ks-reflector-debate",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-health-sb67-2025",
          "date": "2025-02-19",
          "body": "Voted yea on SB 67 authorizing registered nurse anesthetists to prescribe, procure, and administer drugs consistent with qualifications.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-health-rural-waivers-2025",
          "date": "2025",
          "body": "Voted yea on rural emergency hospital physical-environment waiver measures, including SB 82/HB 2249.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-health-sb29-2025",
          "date": "2025-02-19",
          "body": "Voted nay on SB 29 removing local health officers' authority to prohibit public gatherings during infectious-disease control.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-mental-health-campaign-snippets",
          "platform": "Campaign site / indexed snippets",
          "observation": "Local harvest captured campaign-site snippets about school mental-health services and mental health concerns for parents, first responders, and farmers.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-healthcare-mental-health-rural-access"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Campaign Website Issue Language Visible campaign-site and indexed official-site language repeatedly centers on opportunity, schools, taxes, affordability, business growth, and mental health:",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-healthcare-mental-health-rural-access"
        },
        {
          "id": "ss-crossref-4",
          "platform": "ethanforkansas.com",
          "observation": "Indexed campaign-site snippets also surfaced posts or modules beginning \"Cutting mental health services in our schools and failing to fund special education services...\" and \"From parents to first responders and farmers, mental health is a top concern across Kansas...\" (campaign site).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-healthcare-mental-health-rural-access"
        }
      ],
      "gap": {
        "summary": "No detailed Medicaid-expansion plank was found on the current campaign page in this pass.",
        "evidenceIds": [
          "ae-health-sb67-2025"
        ]
      }
    },
    {
      "id": "i-public-safety-first-responders",
      "title": "Public Safety / First Responders / Domestic Violence",
      "stated": {
        "text": "The campaign page says Corson is known for support for Kansas first responders.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-public-safety-sb477",
          "date": "2026",
          "body": "Sponsored SB 477 establishing the Kansas first responder scholarship program; the bill died.",
          "sourceIds": [
            "s-ksleg-sb477"
          ]
        },
        {
          "id": "ae-public-safety-hb2479-final",
          "date": "2026-03-10",
          "body": "Voted yea on HB 2479 final action amended, authorizing electronic monitoring with victim notification for certain domestic violence, domestic battery, stalking, and protective-order defendants.",
          "sourceIds": [
            "s-ksleg-hb2479-final"
          ]
        },
        {
          "id": "ae-public-safety-hb2479-ccr",
          "date": "2026-03-26",
          "body": "Voted yea on the HB 2479 conference committee report.",
          "sourceIds": [
            "s-ksleg-hb2479-ccr"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Public safety / first responders: Campaign site says Corson supports first responders. Official action evidence includes SB 477, sponsored by Corson, establishing a Kansas first responder scholarship program; HB 2479, where Corson voted yea on domestic-violence/stalking/protective-order electronic monitoring with victim notification; and SB 206, requested by Corson, concerning distribution of controlled...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-public-safety-first-responders"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "No candidate-controlled gun-policy plank was found. Public safety evidence is stronger for first responders, domestic violence, and controlled-substance harms than for firearms.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-public-safety-first-responders"
        }
      ],
      "gap": {
        "summary": "No candidate-controlled gun-policy plank was found; public-safety evidence is stronger for first responders, domestic violence, and controlled-substance harms.",
        "evidenceIds": [
          "ae-public-safety-sb477"
        ]
      }
    },
    {
      "id": "i-elections-courts-ethics",
      "title": "Elections / Courts / Ethics",
      "stated": {
        "text": "Corson's public campaign framing emphasizes bipartisan, moderate governance; the current campaign page did not present a detailed elections or court-selection platform.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-elections-sb4-2025",
          "date": "2025",
          "body": "Voted nay on SB 4, requiring advance ballots to be returned by 7:00 p.m. on Election Day, including final action, concurrence, and veto override.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-elections-sb5-2025",
          "date": "2025",
          "body": "Voted nay on SB 5, restricting use of federal funds for election activities unless approved by the Legislature, including final action, concurrence, and veto override.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-courts-scr1611-2025",
          "date": "2025-03-06",
          "body": "Voted nay on SCR 1611, proposing direct election of Kansas Supreme Court justices and abolition of the Supreme Court Nominating Commission.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-ethics-sb313",
          "date": "2025",
          "body": "Sponsored SB 313 prohibiting legislators from engaging in stock/securities transactions during legislative sessions; the bill died.",
          "sourceIds": [
            "s-ksleg-sb313"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Do not convert these votes into claims beyond the measure text and official vote record.",
        "evidenceIds": [
          "ae-elections-sb4-2025"
        ]
      }
    },
    {
      "id": "i-agriculture-rural-trade",
      "title": "Agriculture / Rural Kansas / Trade",
      "stated": {
        "text": "The campaign biography connects Corson's Commerce and International Trade Administration work to recruiting businesses and helping Kansas farmers ship products around the world.",
        "sourceIds": [
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-ag-sb36-2025",
          "date": "2025-02-11",
          "body": "Voted yea on SB 36 increasing conservation-district funding caps and matching-basis provisions.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        },
        {
          "id": "ae-ag-hb2255-2025",
          "date": "2025-03-27",
          "body": "Voted yea on the HB 2255 conference committee report, which included CREP acreage cap and reporting changes along with weights/measures language.",
          "sourceIds": [
            "s-ksleg-vote-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-rural-garden-city-embed",
          "platform": "Campaign-site X embed",
          "observation": "Current embedded X excerpts included Garden City Community College/baseball biography and rural/statewide campaign travel signals.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-agriculture-rural-trade"
        }
      ],
      "gap": {
        "summary": "No standalone agriculture platform page was found; current evidence is biographical/campaign framing plus selected votes.",
        "evidenceIds": [
          "ae-ag-sb36-2025"
        ]
      }
    }
  ],
  "recordSummary": "Kansas Senate District 7; Senate Caucus Chair",
  "whereTheyWorship": "Public sources identify Corson as Jewish, but they do not identify a current synagogue affiliation.",
  "campaignFinance": {
    "totalRaised": "$902,641.13",
    "narrative": "KPDC 2026 statewide gubernatorial report confirmed",
    "donors": [],
    "undisclosed": "Visible Schedule A examples include Tony Atterbury, Amy Bartak, Mary Becker, Matt Birch, Louis Bornman, William Bradley, Jim Breneman, Randal Carlson, and The Next50.; Examples are not a full donor analysis; verify original PDF before publication.; KPDC reports warn against copying contributor names for commercial purposes.; Kansas City Star reported a $1,000 CoreCivic contribution to Corson's 2024 Senate campaign and a campaign response; this pass did not independently locate a clean CoreCivic text match in searched official PDFs.",
    "reportingPeriod": "2025 year-end, covering 2025-01-01 through 2025-12-31",
    "source": "Kansas State Wide Office - 2026 Election Cycle"
  },
  "sources": [
    {
      "id": "s-sos-candidate-info-2026",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Governor/Lt. Governor is listed among offices to be elected or retained in 2026",
        "Candidates for national, state, legislative, and judicial offices file with the Secretary of State",
        "A candidate is not considered filed until the petition or declaration and fee are received",
        "Primary election filing deadline is 12:00 p.m. Monday, June 1, 2026"
      ]
    },
    {
      "id": "s-ksleg-vote-2025",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/documents/sen_corson_ethan_1_vote_record_2025.html",
      "title": "Senate Voting - Corson 2025",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Corson's official 2025 Senate vote record",
        "Includes votes on election administration, public health, education, LGBTQ policy, reproductive-care-adjacent legislation, public assistance, taxes, courts, and public safety"
      ]
    },
    {
      "id": "s-ksleg-hb2062-final",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20250312153109_776028/",
      "title": "HB 2062 Senate Final Action",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2062 concerned child support for unborn children and unborn/stillborn income-tax exemptions",
        "March 12, 2025 Senate final action shows Corson among nay votes"
      ]
    },
    {
      "id": "s-ksleg-hb2062-override",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20250410143859_534870/",
      "title": "HB 2062 Senate Veto Override",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "April 10, 2025 Senate veto override on HB 2062 prevailed",
        "Corson was listed among nay votes"
      ]
    },
    {
      "id": "s-ksleg-hb2729-final",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260319131142_107485/",
      "title": "HB 2729 Senate Final Action",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2729 concerned Woman's-Right-to-Know Act forms and notices",
        "March 19, 2026 Senate final action shows Corson among nay votes"
      ]
    },
    {
      "id": "s-ksleg-hb2729-override",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260409170632_675107/",
      "title": "HB 2729 Senate Veto Override",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "April 9, 2026 Senate veto override on HB 2729 prevailed",
        "Corson was listed among nay votes"
      ]
    },
    {
      "id": "s-ksleg-sb244-override",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260217132754_470460/print/",
      "title": "SB 244 Senate Veto Override",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 244 concerned biological sex, public buildings, driver's licenses, and birth certificates",
        "February 17, 2026 Senate veto override shows Corson among nay votes"
      ]
    },
    {
      "id": "s-ksleg-sb361-ccr",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260327220310_770542/",
      "title": "SB 361 Senate Conference Committee Report",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 361 elected Kansas to participate in a federal tax credit for individual contributions to scholarship-granting organizations",
        "Corson was listed among nay votes on the Senate conference committee report"
      ]
    },
    {
      "id": "s-ksleg-hb2479-final",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/vote/?apn=b2025_26%2Fyear2%2Fsenate%2Flegislative_days%2Fday039_20260310%2Fvote_records%2Fvote_138_HB2479.odt",
      "title": "Roll Call #138 - HB 2479",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2479 concerned electronic monitoring with victim notification for certain domestic violence, domestic battery, stalking, and protective-order defendants",
        "March 10, 2026 Senate final action amended was 40 yea, 0 nay; Corson voted yea"
      ]
    },
    {
      "id": "s-ksleg-hb2479-ccr",
      "tier": "primary",
      "url": "https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260326202956_013688/",
      "title": "HB 2479 Senate Conference Committee Report",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "March 26, 2026 Senate conference committee report vote shows Corson among yea votes"
      ]
    },
    {
      "id": "s-ksleg-sb477",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb477/",
      "title": "SB 477",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Original and current sponsor is Sen. Ethan Corson",
        "Bill would establish the Kansas first responder scholarship program",
        "Bill died"
      ]
    },
    {
      "id": "s-ksleg-sb215",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb215/",
      "title": "SB 215",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Corson was an original and current sponsor",
        "Bill concerned taxation and homestead property-tax refund changes"
      ]
    },
    {
      "id": "s-ksleg-sb216",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/sb216/",
      "title": "SB 216",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Corson was an original and current sponsor",
        "Bill would establish the Kansas paid sick time act",
        "Bill died"
      ]
    },
    {
      "id": "s-ksleg-sb313",
      "tier": "primary",
      "url": "https://kslegislature.gov/b2025_26/bills/sb313/",
      "title": "SB 313",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Original and current sponsor is Sen. Ethan Corson",
        "Bill would prohibit legislators from stock/securities transactions during legislative sessions",
        "Bill died"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethan for Kansas",
      "publisher": "Ethan for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says Corson is running for Governor",
        "Campaign headline says Better Schools and Lower Taxes",
        "Campaign biography emphasizes public schools, affordability, lower taxes, business recruitment, first responders, and Commerce/International Trade Administration work",
        "Campaign paid-for line lists Ethan for Kansas and Tom Hawk, Treasurer",
        "Campaign site links Facebook, X, and Instagram",
        "Embedded X feed surfaced a current reproductive-rights excerpt and campaign travel/school/biography excerpts",
        "Observed public online activity mapped to Public Education / School Funding."
      ]
    },
    {
      "id": "s-ks-reflector-debate",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Democrats in governor's race use debate stage to spotlight affordability, health care, rural Kansas",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Debate coverage quoted Corson on access to care without going broke or driving hours"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson-1",
      "title": "Facebook / Kssenatedems",
      "publisher": "Kssenatedems",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Public Education / School Funding.",
        "Kansas Senate Democrats profile: Senator Ethan Corson -- official legislative/caucus profile. It links the campaign website, ActBlue fundraising page, and Facebook page."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/about",
      "title": "ethanforkansas.com / Ethanforkansas",
      "publisher": "Ethanforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Healthcare / Mental Health / Rural Access.",
        "Indexed campaign-site snippets also surfaced posts or modules beginning \"Cutting mental health services in our schools and failing to fund special education services...\" and \"From "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ETHAN_CORSON_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ethan-corson.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
