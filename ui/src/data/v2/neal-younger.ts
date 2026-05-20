/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const NEAL_YOUNGER_V2: CandidateFullV2 = {
  "slug": "neal-younger",
  "name": "Neal Younger",
  "party": "R",
  "position": "Ellis County Commissioner, District 2; current officeholder not on the 2026 county filing PDF",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "Electrician / Plumber",
  "issues": [
    {
      "id": "official-status-and-election-record",
      "title": "Official Status and Election Record",
      "stated": {
        "text": "Official county sources confirm Neal Younger is the Ellis County Commissioner for District 2. January 2026 minutes show he was appointed commission chair and Public Building Commission president for the year. The official 2024 general-election PDF corrects older preliminary vote totals: the canvassed result is 3,653 votes for Younger and 59 write-ins, not the 3,556 preliminary number reported election night.",
        "sourceIds": [
          "s-ellis-commission-page",
          "s-ellis-election-results-page",
          "s-ellis-2024-general-results",
          "s-ellis-2024-primary-results",
          "s-minutes-01132026",
          "s-pbc-minutes-01132026",
          "s-hayspost-2024-prelim",
          "s-ike-lab-2024-general"
        ]
      },
      "actions": [
        {
          "id": "action-2024-primary-result",
          "date": "2024-08-06",
          "body": "Official Ellis County primary-result PDF visually shows Younger with 381 votes in the Republican Commission 2nd District race.",
          "sourceIds": [
            "s-ellis-2024-primary-results"
          ]
        },
        {
          "id": "action-2024-general-result",
          "date": "2024-11-05",
          "body": "Official Ellis County general-result PDF visually shows Younger with 3,653 votes and write-ins with 59 in County Commission 2nd District.",
          "sourceIds": [
            "s-ellis-2024-general-results",
            "s-ike-lab-2024-general"
          ]
        },
        {
          "id": "action-2026-chair",
          "date": "2026-01-13",
          "body": "Commission appointed Younger chair of the Board of County Commissioners for the next year.",
          "sourceIds": [
            "s-minutes-01132026"
          ]
        },
        {
          "id": "action-2026-pbc-president",
          "date": "2026-01-13",
          "body": "Public Building Commission appointed Younger president.",
          "sourceIds": [
            "s-pbc-minutes-01132026"
          ]
        },
        {
          "id": "action-2026-elected-salary-resolution",
          "date": "2026-01-13",
          "body": "Commission adopted Resolution 2026-04 setting 2026 elected-official salary step adjustments, including District 2 commissioner salary at $21,584.",
          "sourceIds": [
            "s-minutes-01132026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-official-profile-not-campaign",
          "platform": "Official county website",
          "observation": "The public page found for Younger is the county commission profile, not a campaign site.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "official-status-and-election-record"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "No 2024 reelection campaign site, platform page, or social account was found in the public source set, despite official 2024 election results showing he was reelected.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "official-status-and-election-record"
        },
        {
          "id": "ss-crossref-4",
          "platform": "YouTube",
          "observation": "Platforms and source types checked: official Ellis County commission page, county agenda/minutes archive, county YouTube/live-stream links, Hays Post and Eagle Radio local coverage, League of Kansas Municipalities profile, official election results, public search for campaign site/social profiles, and major social platforms by name/office searches.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "official-status-and-election-record"
        }
      ],
      "gap": {
        "summary": "The 2024 official election PDFs are image-only for text extraction; vote totals were read visually from the PDF screenshot and cross-checked against IKE Lab. Treat Hays Post's 3,556 figure as preliminary.",
        "evidenceIds": [
          "action-2024-primary-result"
        ]
      }
    },
    {
      "id": "county-budget-taxes-and-service-levels",
      "title": "County Budget, Taxes, and Service Levels",
      "stated": {
        "text": "Younger ran in 2020 with county spending as a top concern and said Ellis County should maintain what it had until normal needs returned. In office, the clearest budget pattern is scrutiny plus service funding: he voted for the 2026 budgets exceeding revenue-neutral rates, and official minutes record him explaining that county spending is tied to many required services with large costs.",
        "sourceIds": [
          "s-hayspost-candidate-2020",
          "s-minutes-09092025",
          "s-hayspost-budget-approved-2025"
        ]
      },
      "actions": [
        {
          "id": "action-2026-budget-rnr",
          "date": "2025-09-09",
          "body": "Younger voted yes by named roll call on 2026 General Fund and Fire District budgets exceeding the revenue-neutral rates and Resolution 2025-14.",
          "sourceIds": [
            "s-minutes-09092025",
            "s-hayspost-budget-approved-2025"
          ]
        },
        {
          "id": "action-health-ehr-purchase",
          "date": "2025-09-09",
          "body": "Younger moved approval of a Patagonia Health electronic health record purchase for the Ellis County Health Department.",
          "sourceIds": [
            "s-minutes-09092025"
          ]
        },
        {
          "id": "action-budget-outside-agency-adjustments",
          "date": "2025-08-07",
          "body": "Hays Post reported Younger supported reducing scholarship funding until the next budget and proposed shifting $5,000 from Grow Hays to the Ellis County Historical Society.",
          "sourceIds": [
            "s-hayspost-budget-readjust-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Economic development: said the county should be more proactive, work with Hays, improve water supply, and pursue \"higher-paying jobs.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "county-budget-taxes-and-service-levels"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Budget stabilization: said Ellis County should maintain what it has until more normal conditions returned.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "county-budget-taxes-and-service-levels"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Voter concern: identified \"Ellis County spending too much money\" as a top concern and said people should be kept involved.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "county-budget-taxes-and-service-levels"
        }
      ],
      "gap": {
        "summary": "The record should not be reduced to either anti-tax or pro-spending. His 2020 spending concern and 2025 budget vote point to a service-justification frame that changed with governing context.",
        "evidenceIds": [
          "action-2026-budget-rnr"
        ]
      }
    },
    {
      "id": "mental-health-public-safety-and-jail-cost-avoidance",
      "title": "Mental Health, Public Safety, and Jail Cost Avoidance",
      "stated": {
        "text": "Younger's clearest mental-health statement is practical rather than ideological: Hays Post reported that he supported the High Plains Mental Health increase because the request was less expensive than building a new jail. Official minutes show the High Plains funding request details, Younger's facility-access question, his later attendance at a High Plains fundraiser, and his motion to fund RePath bond-supervision technology from opioid settlement funds.",
        "sourceIds": [
          "s-minutes-06102025",
          "s-hayspost-budget-tentative-2025",
          "s-minutes-03172026",
          "s-minutes-01062026"
        ]
      },
      "actions": [
        {
          "id": "action-high-plains-budget-discussion",
          "date": "2025-06-10",
          "body": "High Plains Mental Health presented a $378,602.97 request including annual core support and Crisis Intervention Center funding; Younger asked whether some individuals from Larned could enter the facility.",
          "sourceIds": [
            "s-minutes-06102025"
          ]
        },
        {
          "id": "action-hpm-jail-cost-statement",
          "date": "2025-07-16",
          "body": "Hays Post reported Younger said the requested High Plains increase was less expensive than building a new jail.",
          "sourceIds": [
            "s-hayspost-budget-tentative-2025"
          ]
        },
        {
          "id": "action-repath-opioid-funds",
          "date": "2026-01-06",
          "body": "Younger moved a $9,600 opioid-fund transfer for RePath technology used by Court Services for bond-supervision clients, after asking about a mid-year update if treated as a trial run.",
          "sourceIds": [
            "s-minutes-01062026"
          ]
        },
        {
          "id": "action-hpm-fundraiser-attendance",
          "date": "2026-03-17",
          "body": "Official minutes record Younger attending a High Plains Mental Health fundraiser.",
          "sourceIds": [
            "s-minutes-03172026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Public health decision-making: said commissioners should consult the head of EMS and communicate with the medical center before making community health decisions.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "mental-health-public-safety-and-jail-cost-avoidance"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post, Sept. 9, 2025: during 2026 budget approval coverage, Younger defended high county spending as tied to services including ambulance, roads, noxious weeds, and mental health.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-budget-approved-2025"
          ],
          "mappedToIssueId": "mental-health-public-safety-and-jail-cost-avoidance"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post, July 16, 2025: in budget discussion, Younger said the High Plains Mental Health increase was less expensive than building a new jail.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-budget-tentative-2025"
          ],
          "mappedToIssueId": "mental-health-public-safety-and-jail-cost-avoidance"
        }
      ],
      "gap": {
        "summary": "This pass did not locate measurable outcome data showing whether increased mental-health funding reduced jail demand or county costs.",
        "evidenceIds": [
          "action-high-plains-budget-discussion"
        ]
      }
    },
    {
      "id": "roads-water-housing-and-development",
      "title": "Roads, Water, Housing, and Development",
      "stated": {
        "text": "Younger has repeatedly linked growth to physical infrastructure. In 2020 he said the county should work with Hays on water and higher-paying jobs. Later records show him asking practical water and road questions in Big Creek Estates, supporting Commerce Parkway as a route tied to schools, I-70 access and development, and leading/participating in county road-tour and CID discussions.",
        "sourceIds": [
          "s-hayspost-candidate-2020",
          "s-hayspost-commerce-parkway-2024",
          "s-minutes-01062026",
          "s-minutes-02102026",
          "s-minutes-03312026",
          "s-minutes-04142026"
        ]
      },
      "actions": [
        {
          "id": "action-commerce-parkway-statement",
          "date": "2024-08-16",
          "body": "Hays Post reported Younger supporting Commerce Parkway access as useful for school access, interstate access, north Hays traffic, and development.",
          "sourceIds": [
            "s-hayspost-commerce-parkway-2024"
          ]
        },
        {
          "id": "action-big-creek-return",
          "date": "2026-01-06",
          "body": "Younger seconded the motion sending Big Creek Estates preliminary plat back to zoning board for more recommendations after water, road, stormwater, lot-size, and variance issues were discussed.",
          "sourceIds": [
            "s-minutes-01062026",
            "s-hayspost-big-creek-return-2026"
          ]
        },
        {
          "id": "action-big-creek-approval",
          "date": "2026-02-10",
          "body": "Big Creek Estates preliminary plat returned after planning review; Younger asked what would happen if a planned well had to be moved because no water was found.",
          "sourceIds": [
            "s-minutes-02102026",
            "s-hayspost-big-creek-approve-2026"
          ]
        },
        {
          "id": "action-cid-parameters",
          "date": "2026-02-10",
          "body": "Commission discussed CID parameters including two-thirds landowner support, 75% build-out, and road-improvement options; Berges and Younger affirmed adding asphalt road miles.",
          "sourceIds": [
            "s-minutes-02102026"
          ]
        },
        {
          "id": "action-road-tour-2026",
          "date": "2026-03-31",
          "body": "Chair Younger called a special road-tour session covering right-of-way, solar-project road-use issues, culverts, bridges, subdivision roads, water lines in ditches, and transfer-station expansion ideas.",
          "sourceIds": [
            "s-minutes-03312026"
          ]
        },
        {
          "id": "action-stonewood-cid-resolution",
          "date": "2026-04-14",
          "body": "Younger seconded Resolution 2026-08 calling a public hearing on Stonewood Estates CID road-improvement assessments.",
          "sourceIds": [
            "s-minutes-04142026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Hays Post, Oct. 13, 2025: reported Younger asked for clarification on how long AMP Rentals would have access to a county-owned water well while awaiting a rural water meter.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "roads-water-housing-and-development"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post, Jan. 6, 2026: reported Younger suggested Big Creek Estates residents explore forming a rural water district or seeking Hays water.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-big-creek-return-2026"
          ],
          "mappedToIssueId": "roads-water-housing-and-development"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post, Feb. 11, 2026: reported Younger asked what would happen if a Big Creek housing well had to be moved because water was not found at the planned location.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-big-creek-approve-2026"
          ],
          "mappedToIssueId": "roads-water-housing-and-development"
        }
      ],
      "gap": {
        "summary": "The record documents process, questions, and approvals; it does not yet show long-term outcomes for Big Creek water reliability, CID road costs, or whether road-plan changes reduced maintenance burden.",
        "evidenceIds": [
          "action-commerce-parkway-statement"
        ]
      }
    },
    {
      "id": "staffing-departments-and-employee-retention",
      "title": "Staffing, Departments, and Employee Retention",
      "stated": {
        "text": "Younger described a hands-on management style in 2020, saying he would spend meaningful time in county offices and field operations before judging staffing needs. In office, he supported employee compensation actions and framed retention as a practical concern; Hays Post reported his line that the county did not want to be a training center.",
        "sourceIds": [
          "s-hayspost-candidate-2020",
          "s-minutes-06102025",
          "s-hayspost-cola-2025",
          "s-minutes-04082026"
        ]
      },
      "actions": [
        {
          "id": "action-2025-cola",
          "date": "2025-06-10",
          "body": "Younger seconded a motion to implement a 2.5% COLA for Ellis County employees, contract positions, and elected officials.",
          "sourceIds": [
            "s-minutes-06102025",
            "s-hayspost-cola-2025"
          ]
        },
        {
          "id": "action-secured-load-policy",
          "date": "2025-06-10",
          "body": "Younger moved Resolution 2025-10 implementing an Ellis County secured-load policy at the landfill.",
          "sourceIds": [
            "s-minutes-06102025"
          ]
        },
        {
          "id": "action-county-retreat",
          "date": "2026-04-08",
          "body": "Chair Younger called a county retreat where staff discussed department challenges, short-term needs, capital planning, financial future, possible tax tools, and sheriff staffing.",
          "sourceIds": [
            "s-minutes-04082026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "County departments: said he would spend one to two hours in county administrative offices and departments to understand staffing needs.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "staffing-departments-and-employee-retention"
        }
      ],
      "gap": {
        "summary": "No department-level staffing outcome metric was verified for turnover, vacancy rates, or whether the COLA improved retention.",
        "evidenceIds": [
          "action-2025-cola"
        ]
      }
    },
    {
      "id": "communication-public-involvement-and-civic-process",
      "title": "Communication, Public Involvement, and Civic Process",
      "stated": {
        "text": "Younger's 2020 questionnaire emphasized talking with taxpayers, attending surrounding city, town, and fire meetings, and increasing city-county meeting attendance. In office, the public record shows ordinary process work: public hearings, minutes, road tours, board reports, and county retreat participation. This is a process-governance lane, not a campaign-branding lane.",
        "sourceIds": [
          "s-hayspost-candidate-2020",
          "s-ellis-commission-page",
          "s-minutes-09092025",
          "s-minutes-03312026",
          "s-minutes-04082026"
        ]
      },
      "actions": [
        {
          "id": "action-rnr-public-hearing",
          "date": "2025-09-09",
          "body": "Younger presided as vice-chair while the commission opened and closed the public hearing for the 2026 revenue-neutral-rate and budget process.",
          "sourceIds": [
            "s-minutes-09092025"
          ]
        },
        {
          "id": "action-commission-public-access",
          "date": "2026-05-19",
          "body": "County commission page publishes meeting schedule, agenda/minutes access, and meeting-video path for public observation.",
          "sourceIds": [
            "s-ellis-commission-page",
            "s-ellis-agenda-center"
          ]
        },
        {
          "id": "action-public-reports-attendance",
          "date": "2026-03-17",
          "body": "Official minutes record Younger reporting attendance at a weather spotting meeting and High Plains Mental Health fundraiser.",
          "sourceIds": [
            "s-minutes-03172026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-low-campaign-footprint-process-reliance",
          "platform": "Public web search and official county record",
          "observation": "Because no campaign-owned website or public social feed was verified, the accessible record relies heavily on official minutes and local reporting.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page",
            "s-hayspost-candidate-2020"
          ],
          "mappedToIssueId": "communication-public-involvement-and-civic-process"
        }
      ],
      "gap": {
        "summary": "Meeting minutes summarize many actions but do not transcribe every comment; video-only comments not reflected in minutes or local coverage were not transcribed in this pass.",
        "evidenceIds": [
          "action-rnr-public-hearing"
        ]
      }
    },
    {
      "id": "social-online-and-campaign-footprint",
      "title": "Social, Online, and Campaign Footprint",
      "stated": {
        "text": "The online record for Younger is unusually sparse for an incumbent officeholder. This pass verified an official county profile and public meeting records, but no candidate-controlled campaign website or social account. That is relevant to voter accessibility and source transparency, but it should not be overstated as evidence of private beliefs or issue positions.",
        "sourceIds": [
          "s-ellis-commission-page"
        ]
      },
      "actions": [
        {
          "id": "action-social-search-pass",
          "date": "2026-05-19",
          "body": "Reviewed existing May 11 social harvest and current public web search results for candidate-owned campaign/social presence.",
          "sourceIds": [
            "s-ellis-commission-page"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-no-current-campaign-site",
          "platform": "Campaign website search",
          "observation": "No current candidate-controlled campaign website was verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "social-online-and-campaign-footprint"
        },
        {
          "id": "ss-no-verified-social-accounts",
          "platform": "Major social platforms",
          "observation": "No candidate-controlled Facebook, Instagram, X/Twitter, Bluesky, TikTok, Threads, LinkedIn, YouTube, Truth Social, Gab, Gettr, Substack, or Reddit account was verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "social-online-and-campaign-footprint"
        },
        {
          "id": "ss-no-engagement-artifacts",
          "platform": "Major social platforms",
          "observation": "No follows, likes, reposts, comments, or candidate-authored social posts were captured.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "social-online-and-campaign-footprint"
        }
      ],
      "gap": {
        "summary": "This is a visible-public-record absence, not proof that no private, deleted, login-only, or inaccessible accounts exist.",
        "evidenceIds": [
          "action-social-search-pass"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Younger.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "not_located",
    "donors": [],
    "undisclosed": "No reliable itemized campaign-finance report or donor table surfaced for Younger's county races in public web/KPDC searches or existing candidate material. Do not infer no donors or no fundraising from this absence.",
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Candidate v2 issue file"
  },
  "sources": [
    {
      "id": "s-ellis-commission-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "County Commission",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County lists Neal Younger as Second District commissioner",
        "County page provides commission meeting schedule, agenda/minutes access, YouTube meeting access, mission, values, and contact workflow",
        "The page is an official office source, not a candidate campaign website"
      ]
    },
    {
      "id": "s-ellis-agenda-center",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter",
      "title": "Agenda Center",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County publishes county commission agendas and minutes by date",
        "Agenda Center is the official path for meeting records used in this pass"
      ]
    },
    {
      "id": "s-ellis-election-results-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/435/Election-Results",
      "title": "Election Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County publishes official election-result PDFs",
        "The page links 2024 General Election Official Results and 2024 Primary Official Results"
      ]
    },
    {
      "id": "s-ellis-2024-general-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results",
      "title": "2024 General Election Official Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official PDF visual readback page 3 shows County Commission 2nd District Neal Younger (R) with 3,653 votes",
        "Official PDF visual readback page 3 shows write-ins with 59 and total votes cast 3,712",
        "PDF is image-only for text extraction in this environment"
      ]
    },
    {
      "id": "s-ellis-2024-primary-results",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5544/Official-2024-Primary-Results",
      "title": "Official 2024 Primary Results",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official PDF visual readback page 10 shows Republican Commission 2nd District Neal Younger with 381 votes",
        "PDF is image-only for text extraction in this environment"
      ]
    },
    {
      "id": "s-minutes-01132026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01132026-721",
      "title": "Ellis County Board of County Commissioners Minutes - January 13, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Commission appointed Neal Younger chair for the next year by 3-0 voice vote",
        "Resolution 2026-03 waiving GAAP standards was adopted and signed by Younger as chair",
        "Resolution 2026-04 set 2026 elected-official salaries, listing District 2 commissioner at $21,584",
        "Younger was appointed to Northwest Kansas Juvenile Board and Community Corrections in 2026"
      ]
    },
    {
      "id": "s-pbc-minutes-01132026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01132026-722",
      "title": "Ellis County Kansas Public Building Commission Minutes - January 13, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Public Building Commission appointed Neal Younger president by 3-0 voice vote",
        "Nathan Leiker was appointed vice-president"
      ]
    },
    {
      "id": "s-minutes-06102025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06102025-678",
      "title": "Ellis County Board of County Commissioners Minutes - June 10, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "High Plains Mental Health requested $378,602.97 including annual support and Crisis Intervention Center funding",
        "Younger asked whether individuals from Larned could enter the facility",
        "Younger discussed future budgeting for Victoria road approaches and voted against unbudgeted assistance",
        "Younger moved the secured-load landfill policy; it passed 3-0",
        "Younger seconded the 2.5% COLA motion; it passed 2-1"
      ]
    },
    {
      "id": "s-minutes-09092025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_09092025-696",
      "title": "Ellis County Board of County Commissioners Minutes - September 9, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Vice-Chair Younger called the meeting to order while Berges attended by telephone",
        "Public hearing was held for exceeding revenue-neutral rates and 2026 Ellis County budgets",
        "Minutes summarize Younger saying county spending is high because many services carry large costs",
        "Budget approval passed 3-0; named roll call listed Younger yes",
        "Resolution 2025-14 authorized levying above the revenue-neutral rate",
        "Younger moved approval of the Patagonia Health electronic health record purchase"
      ]
    },
    {
      "id": "s-minutes-01062026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01062026-720",
      "title": "Ellis County Board of County Commissioners Minutes - January 6, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Younger asked for a mid-year update if RePath bond-supervision technology was treated as a trial run",
        "Younger moved a $9,600 opioid-fund transfer for RePath; it passed 3-0",
        "Bridge-weight-limit Resolution 2026-01 passed 3-0",
        "Younger asked whether Big Creek Estates had sought City of Hays water or rural water options",
        "Younger seconded the motion sending the Big Creek preliminary plat back to zoning board; it passed 3-0",
        "Tallgrass solar discussion included road-use, pipeline, decommissioning, fire, noxious-weed, and infrastructure conditions"
      ]
    },
    {
      "id": "s-minutes-02102026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02102026-729",
      "title": "Ellis County Board of County Commissioners Minutes - February 10, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Chair Younger called the February 10 meeting to order",
        "Younger asked what would happen if a Big Creek Estates well had to be moved because no water was found",
        "Big Creek Estates preliminary plat approval passed 3-0 with sewer-system written approval condition",
        "CID parameters discussed two-thirds participation, 75% build-out, and road-improvement options",
        "Berges and Younger affirmed adding road miles to the asphalt plan; Younger said it would take a grader off the road",
        "Scholarship discussion shifted toward employee-family recruitment and retention"
      ]
    },
    {
      "id": "s-minutes-03172026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_03172026-738",
      "title": "Ellis County Board of County Commissioners Minutes - March 17, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Chair Younger called the meeting to order",
        "IT Director job-description update passed 3-0",
        "County commissioner report says Younger attended a weather spotting meeting and a High Plains Mental Health fundraiser",
        "Executive sessions discussed proposed Tallgrass solar documents and potential litigation with no action taken"
      ]
    },
    {
      "id": "s-minutes-03312026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_03312026-739",
      "title": "Ellis County Board of County Commissioners Special Road Tour Minutes - March 31, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Chair Younger called the special road-tour session to order",
        "Road tour covered right-of-way, solar-project road-use agreement issues, engineer inspections, escrow for road damage, culverts, bridges, minimal-maintenance roads, subdivision roads, and transfer-station expansion",
        "No formal action was taken"
      ]
    },
    {
      "id": "s-minutes-04082026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_04082026-743",
      "title": "Ellis County Board of County Commissioners Special Meeting Minutes - April 8, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Chair Younger called the county retreat to order",
        "Retreat covered department needs, county financial future, capital plan, solar-farm implications, transient guest tax, fairgrounds/Historical Society funding, and sheriff staffing"
      ]
    },
    {
      "id": "s-minutes-04142026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_04142026-744",
      "title": "Ellis County Board of County Commissioners Minutes - April 14, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Chair Younger called the meeting to order",
        "Younger seconded Stonewood North Addition CID Petition public-hearing notice Resolution 2026-08",
        "Resolution 2026-08 passed 2-0 and set a public hearing for Stonewood Estates road-improvement assessment financing"
      ]
    },
    {
      "id": "s-hayspost-candidate-2020",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "CANDIDATE PROFILE Ellis County Commission: Neal Younger",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Younger gave candidate-attributed answers on public health, economic development, county departments, city-county communication, budget stabilization, public service, voter concerns, roads, personal experience, staffing, employee pay, and county attorney staffing",
        "Younger described himself as an electrician and plumber with construction experience",
        "Younger identified Ellis County spending as a top voter concern in 2020"
      ]
    },
    {
      "id": "s-hayspost-2024-prelim",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "2024 General Election Ellis County results, all precincts reporting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post election-night article listed results as preliminary, pending canvass",
        "Article listed Neal Younger with 3,556 votes",
        "This conflicts with official canvassed PDF and should not be used as final vote total"
      ]
    },
    {
      "id": "s-hayspost-budget-tentative-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fbac2993-56a7-4ebb-b494-5a194944d2c2",
      "title": "Ellis County Commission tentatively agrees to raise tax rate by 1 mill",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported High Plains Mental Health Center funding increase request for the Crisis Intervention Center",
        "Hays Post reported Younger said the requested increase was less expensive than building a new jail",
        "Hays Post reported the commission moved to preserve the legal option to exceed revenue neutral",
        "Observed public online activity mapped to Mental Health, Public Safety, and Jail Cost Avoidance."
      ]
    },
    {
      "id": "s-hayspost-budget-approved-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
      "title": "Ellis County Commission approves 2026 budget, mill levy increase",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported 2026 budget approval with a 1.96 mill increase",
        "Hays Post reported general fund expenditures at $34.7 million",
        "Hays Post reported Younger tied county spending to services including ambulance, road and bridge, noxious weeds, and mental health",
        "Observed public online activity mapped to Mental Health, Public Safety, and Jail Cost Avoidance."
      ]
    },
    {
      "id": "s-hayspost-cola-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f411c2a9-c20a-4cf3-963d-d834ddb0f613",
      "title": "Ellis County Commission approves cost of living adjustment",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported the commission approved a 2.5% COLA for employees, elected officials, and contract positions",
        "Hays Post quoted Younger saying the county did not want to be a training center",
        "Hays Post reported the Victoria road assistance request failed 2-1 with Berges and Younger dissenting"
      ]
    },
    {
      "id": "s-hayspost-budget-readjust-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/214198c7-e910-476d-b7b7-6c39644d6eb9",
      "title": "Ellis County Commission readjusts 2026 funding; discuss 1 mill tax hike",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Younger supported reducing scholarship funding until the next budget",
        "Hays Post reported Younger proposed reducing Grow Hays by $5,000 and reallocating that amount to Ellis County Historical Society",
        "Hays Post reported the budget draft, outside-agency funding, mill levy increase proposal, and capital-project bonding discussion"
      ]
    },
    {
      "id": "s-hayspost-big-creek-return-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ee851b27-fd93-4943-b1ba-e924696a0982",
      "title": "Ellis County Commission sends housing development plat back to planning commission",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported commission returned Big Creek Third Addition preliminary plat for further review",
        "Coverage described water, stormwater, lot-size, zoning, and roadway concerns",
        "Hays Post reported Younger suggested residents explore rural water district formation or seeking Hays water",
        "Observed public online activity mapped to Roads, Water, Housing, and Development."
      ]
    },
    {
      "id": "s-hayspost-big-creek-approve-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6ba197c2-04b6-4e73-8650-431120cea10f",
      "title": "Ellis County Commission approves preliminary plat for Big Creek housing",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported commission approved the Big Creek Estates Third Addition preliminary plat",
        "Hays Post reported water would come from individual private wells",
        "Hays Post reported Younger asked what would happen if a planned well had to be moved",
        "Hays Post reported future CID parameters around two-thirds support and 75% parcel development",
        "Observed public online activity mapped to Roads, Water, Housing, and Development."
      ]
    },
    {
      "id": "s-hayspost-commerce-parkway-2024",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2584b551-eb90-4e5b-abbf-fd3ef6cab0bc",
      "title": "Hays, Ellis County commissioners agree to collaborate on road projects north of I-70",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported joint city/county collaboration on road projects north of I-70",
        "Hays Post reported Younger supported Commerce Parkway access as useful for school access, interstate access, north Hays traffic, and future development"
      ]
    },
    {
      "id": "s-ike-lab-2024-general",
      "tier": "secondary",
      "url": "https://www.ike-lab.com/complete_elex_2024_gen_cotwp_Ellis.html",
      "title": "2024 General - County and Township Elections - Ellis County",
      "publisher": "IKE Lab",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Text mirror lists County Commission District 2: Neal Younger (R) 3,653 and other/write-in 59",
        "Used only as accessible text corroboration for official image-only PDF"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/769b9cc3-43f2-4772-9389-e5a962d9a36a",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Roads, Water, Housing, and Development.",
        "Hays Post, Oct. 13, 2025: reported Younger asked for clarification on how long AMP Rentals would have access to a county-owned water well while awaiting a rural water meter."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(NEAL_YOUNGER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[neal-younger.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
