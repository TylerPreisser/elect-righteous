/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const REBECCA_HERZOG_V2: CandidateFullV2 = {
  "slug": "rebecca-herzog",
  "name": "Rebecca Herzog",
  "party": "R",
  "position": "Ellis County Register of Deeds",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "title: Registrar / Register of Deeds; address: 718 Main St., Hays, KS 67601; phone: 785-628-9450; sourceIds: s-ellis-register-page; s-ellis-staff-directory; s-ellis-staff-entry",
  "issues": [
    {
      "id": "i-land-records-public-access",
      "title": "Land Records, Public Access, and Property Notice",
      "stated": {
        "text": "Herzog's public-facing office message is administrative: the Register of Deeds records real-estate documents, records qualified public documents, maintains accurate county land-ownership indexes, and keeps most office records open to the public within stated legal exceptions.",
        "sourceIds": [
          "s-ellis-register-page",
          "s-ks-leg-19-1204",
          "s-ellis-recorded-documents",
          "s-ellis-recording-process"
        ]
      },
      "actions": [
        {
          "id": "a-current-office-page-records-access",
          "date": "2026-05-19",
          "body": "The official Ellis County Register of Deeds page lists Herzog as Registrar and describes the office's state-required recording and land-index duties, plus public access to most Register of Deeds records.",
          "sourceIds": [
            "s-ellis-register-page"
          ]
        },
        {
          "id": "a-recording-process-indexing",
          "date": "2026-05-19",
          "body": "The county Document Recording Process page explains that documents are reviewed for apparent errors, assigned recording information, and indexed by name and legal description for users who rely on accurate land records.",
          "sourceIds": [
            "s-ellis-recording-process"
          ]
        },
        {
          "id": "a-rns-property-notification",
          "date": "2026-05-19",
          "body": "The county Register of Deeds site advertises a free Recording Notification Service for property owners to receive alerts when documents are recorded against their property.",
          "sourceIds": [
            "s-ellis-rns"
          ]
        },
        {
          "id": "a-budget-book-preservation-e-recording",
          "date": "2025",
          "body": "The 2025 budget book says the office does e-recording through Simplifile and CSC, preserves county records, has records dating to the 1800s, and has fraud alert notification in its software.",
          "sourceIds": [
            "s-ellis-2025-budget-book"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-official-web-footprint",
          "platform": "Official county web",
          "observation": "The strongest visible online signal is official county infrastructure for recording, indexing, public access, fees, and property notification, not candidate-controlled campaign posting.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-register-page",
            "s-ellis-recorded-documents",
            "s-ellis-recording-process",
            "s-ellis-rns"
          ],
          "mappedToIssueId": "i-land-records-public-access"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Harvest focus: official register of deeds pages, public staff/professional listings, election coverage, local voter guides, public meeting/elected-official references, and obvious social/platform absences.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-register-page"
          ],
          "mappedToIssueId": "i-land-records-public-access"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "No verified candidate-controlled social account exposed public follower counts, post counts, reactions, shares, or comments.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-register-page"
          ],
          "mappedToIssueId": "i-land-records-public-access"
        }
      ]
    },
    {
      "id": "i-budget-staffing-technology",
      "title": "Office Budget, Staffing, Fees, and Technology Stewardship",
      "stated": {
        "text": "The public record shows Herzog managing a small fee-based records office with three allocated positions, county-approved budgeting, e-recording, record-preservation duties, and a technology fund connected to recorded-document fees.",
        "sourceIds": [
          "s-ks-leg-19-1202",
          "s-ellis-fee-schedule",
          "s-ellis-2025-budget-book",
          "s-ellis-minutes-2025-07-21",
          "s-ellis-minutes-2022-07-28"
        ]
      },
      "actions": [
        {
          "id": "a-2025-budget-book-staffing",
          "date": "2025",
          "body": "The 2025 budget book lists 3.0 allocated Register of Deeds positions, names Rebecca Herzog as responsible party, and shows 2025 proposed revenue of $203,000 and proposed expenditures of $263,049 for the department.",
          "sourceIds": [
            "s-ellis-2025-budget-book"
          ]
        },
        {
          "id": "a-2026-budget-request",
          "date": "2025-07-21",
          "body": "Herzog presented a $299,142 proposed Register of Deeds budget; minutes say only salaries increased, revenue was expected to stay stable, and she may hire someone mid-year.",
          "sourceIds": [
            "s-ellis-minutes-2025-07-21"
          ]
        },
        {
          "id": "a-tech-fund-helped-offices",
          "date": "2025-07-21",
          "body": "The same minutes say Herzog reviewed the tech fund, had helped other offices, and must keep $50,000 in the fund for her office before other county uses.",
          "sourceIds": [
            "s-ellis-minutes-2025-07-21"
          ]
        },
        {
          "id": "a-2022-tech-fund-and-storage",
          "date": "2022-07-28",
          "body": "Herzog told commissioners the office received $2 per recorded document for a technology fund, discussed about $158,000 in the fund, planned storage-room renovation, and said multi-factor authentication fit fund guidelines.",
          "sourceIds": [
            "s-ellis-minutes-2022-07-28"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-budget-records-not-social-posts",
          "platform": "County minutes and budget books",
          "observation": "Budget, staffing, and technology evidence comes from official minutes and budget documents; no candidate social posts about office finance or technology were verified.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-2025-budget-book",
            "s-ellis-minutes-2025-07-21",
            "s-ellis-minutes-2022-07-28"
          ],
          "mappedToIssueId": "i-budget-staffing-technology"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Hays Post",
          "observation": "I searched for Rebecca Herzog, Becky Herzog, Ellis County Register of Deeds, Ellis County registrar, Hays Post mentions, Tiger Media Network voter-guide references, Ellis County official pages, county staff directory entries, Kansas Register of Deeds Association listings, League of Kansas Municipalities directory previews, county budget books, election results, Facebook, X/Twitter, Instagram, YouTube, LinkedIn,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-register-page"
          ],
          "mappedToIssueId": "i-budget-staffing-technology"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Facebook",
          "observation": "There are important absences. I found no verified candidate-controlled Facebook, X/Twitter, Instagram, Threads, TikTok, YouTube, LinkedIn, Bluesky, Substack, Medium, Reddit, Truth Social, Gab, or Gettr account with accessible public messaging. I also found no public statements from Herzog on abortion, guns, immigration, taxes, schools, election fraud, LGBTQ issues, Donald Trump, Joe Biden, or national partisan...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-register-page"
          ],
          "mappedToIssueId": "i-budget-staffing-technology"
        }
      ],
      "gap": {
        "summary": "The July 21, 2025 minutes appear to print an ambiguous tech-fund amount as '$62,50'; do not publish that exact figure without checking the original agenda/audio or county staff.",
        "evidenceIds": [
          "a-tech-fund-helped-offices"
        ]
      }
    },
    {
      "id": "i-election-status-public-footprint",
      "title": "Election Status and Public Footprint",
      "stated": {
        "text": "Herzog's election record is that of a low-profile, long-running county records official. Public sources identify her as an incumbent in 2020, sworn in for another term in 2021, re-elected in 2024, and not listed as a 2026 candidate officeholder.",
        "sourceIds": [
          "s-tiger-2020-voter-guide",
          "s-hayspost-2021-swearing-in",
          "s-ellis-2024-official-results",
          "s-ellis-2026-filings-pdf"
        ]
      },
      "actions": [
        {
          "id": "a-2020-incumbent-unopposed",
          "date": "2020-10-08",
          "body": "Tiger Media Network identified Herzog as the incumbent Republican candidate for Ellis County Register of Deeds running unopposed in 2020.",
          "sourceIds": [
            "s-tiger-2020-voter-guide"
          ]
        },
        {
          "id": "a-2021-sworn-another-term",
          "date": "2021-01-12",
          "body": "Hays Post coverage of Ellis County elected officials said Register of Deeds Rebecca Herzog was sworn in for another term.",
          "sourceIds": [
            "s-hayspost-2021-swearing-in"
          ]
        },
        {
          "id": "a-2024-official-result",
          "date": "2024-11-05",
          "body": "The official Ellis County result PDF/OCR lists Rebecca A. Herzog with 11,455 votes for County Register of Deeds, 103 write-ins, and 11,558 total votes cast.",
          "sourceIds": [
            "s-ellis-2024-official-results"
          ]
        },
        {
          "id": "a-2026-not-listed",
          "date": "2026-05-19",
          "body": "The 2026 Primary Candidate Filings PDF lists other Ellis County offices and party positions but not Register of Deeds.",
          "sourceIds": [
            "s-ellis-2026-filings-pdf"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-no-verified-campaign-social",
          "platform": "Public web and major social-platform search",
          "observation": "No verified candidate campaign website or candidate-controlled Facebook, X/Twitter, Instagram, Threads, TikTok, YouTube, LinkedIn, Bluesky, Substack, Medium, Reddit, Truth Social, Gab, or Gettr account with accessible public messaging surfaced in this pass.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-register-page",
            "s-lkm-herzog",
            "s-krda-ellis"
          ],
          "mappedToIssueId": "i-election-status-public-footprint"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Important source correction: no verified campaign website was found. Any existing project campaignWebsite value should be treated as unverified unless it is separately confirmed from official county, election, or candidate-controlled sources.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-register-page"
          ],
          "mappedToIssueId": "i-election-status-public-footprint"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "Electoral: Hays Post reported Herzog received 7,074 votes as the incumbent Republican candidate for Ellis County Register of Deeds in the 2024 general election. Source: Hays Post, Nov. 6, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2024-election-night"
          ],
          "mappedToIssueId": "i-election-status-public-footprint"
        }
      ],
      "gap": {
        "summary": "Public silence on national issues is an absence of verified material, not evidence of private belief. The Register of Deeds role itself is administrative and does not create a record on abortion, guns, immigration, schools, LGBTQ issues, Donald Trump, Joe Biden, or national partisan disputes.",
        "evidenceIds": [
          "a-2020-incumbent-unopposed",
          "a-2024-official-result"
        ]
      }
    }
  ],
  "recordSummary": "title: Registrar / Register of Deeds; address: 718 Main St., Hays, KS 67601; phone: 785-628-9450; sourceIds: s-ellis-register-page; s-ellis-staff-directory; s-ellis-staff-entry",
  "whereTheyWorship": "Public sources do not identify a current church affiliation, denomination, or parish website for Herzog.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "No complete donor ledger, receipts-and-expenditures report, or affidavit of exemption was verified online in this pass.; KPDC guidance says local candidates file Appointment of Treasurer forms with county clerks or county election commissioners.; The public Kansas campaign-finance portal's visible categories are House, Senate, statewide races, and Board of Education, so a county Register of Deeds filing may require a county records request.; Do not describe the absence of an online donor table as proof that no campaign-finance filing exists.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Campaign Finance"
  },
  "sources": [
    {
      "id": "s-ellis-register-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Register of Deeds",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Rebecca Herzog is listed as Registrar",
        "The office files and records documents that pertain to real estate",
        "State-required functions include recording qualified public documents and maintaining accurate land-ownership indexes",
        "Most Register of Deeds records are described as open to the public, with a Sales Validation Questionnaire exception",
        "Official office address is 718 Main St., Hays, KS 67601, with phone 785-628-9450"
      ]
    },
    {
      "id": "s-ks-leg-19-1202",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/statute/019_000_0000_chapter/019_012_0000_article/019_012_0002_section/019_012_0002_k/",
      "title": "K.S.A. 19-1202 - Deputy registers of deeds; duties; meetings and seminars; budget; limitation of personnel action",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The register may appoint deputies and assistants and supervises their duties",
        "The register submits the office budget to county commissioners for approval",
        "Personnel actions are subject to county personnel policies, pay plans, agreements, civil service systems, and budget limits"
      ]
    },
    {
      "id": "s-ks-leg-19-1204",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/statute/019_000_0000_chapter/019_012_0000_article/019_012_0004_section/019_012_0004_k/",
      "title": "K.S.A. 19-1204 - Custody and recording of documents",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The register of deeds has custody of books, records, deeds, maps, papers, and microphotographs kept in the office",
        "The register records deeds, mortgages, maps, instruments, and writings authorized by law",
        "Records may be kept in books, electronically accessed media, or another authorized manner"
      ]
    },
    {
      "id": "s-ellis-recorded-documents",
      "tier": "primary",
      "url": "https://www.ellisco.net/159/Recorded-Documents",
      "title": "Recorded Documents",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The office records several hundred document types",
        "Listed examples include cemetery records, corporation records, military discharge records, mortgages and liens, oil and gas leases, plats, powers of attorney, and county school records"
      ]
    },
    {
      "id": "s-ellis-recording-process",
      "tier": "primary",
      "url": "https://www.ellisco.net/160/Document-Recording-Process",
      "title": "Document Recording Process",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Documents are examined for apparent errors, assigned time/book/page information, and indexed by name and legal description",
        "Title companies, attorneys, buyers, financial institutions, landlords, developers, sellers, surveyors, tenants, county appraiser, and county clerk rely on accurate register records"
      ]
    },
    {
      "id": "s-ellis-fee-schedule",
      "tier": "primary",
      "url": "https://www.ellisco.net/153/Fee-Schedule",
      "title": "Fee Schedule",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Register of Deeds services are fee-based",
        "Fees are set by state statute",
        "Income is deposited into the county general fund and administered by county commissioners"
      ]
    },
    {
      "id": "s-ellis-rns",
      "tier": "primary",
      "url": "https://www.ellisco.net/765/Recording-Notification-Service-RNS",
      "title": "Recording Notification Service (RNS)",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The office announces a free property-owner notification service for documents recorded against property",
        "The office phone is listed for RNS questions"
      ]
    },
    {
      "id": "s-ellis-2025-budget-book",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5645/2025-Budget-Book",
      "title": "Ellis County 2025 Budget Book",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "County officials section lists Register of Deeds Rebecca Herzog",
        "Register of Deeds department lists 3.0 allocated positions",
        "Responsible Party is Rebecca Herzog, Registrar, elected by Ellis County voters",
        "Department section describes e-recording through Simplifile and CSC",
        "Department section describes records dating to the 1800s, public-record exceptions for sensitive records, fraud alert notification, and fee-based services",
        "2025 proposed Register of Deeds revenue is shown as $203,000 and proposed expenditures as $263,049"
      ]
    },
    {
      "id": "s-ellis-minutes-2025-07-21",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07212025-686",
      "title": "Ellis County Commission Minutes - July 21, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Herzog presented a $299,142 proposed Register of Deeds budget",
        "Minutes say the only increased item was salaries",
        "Minutes say revenue was expected to stay stable",
        "Minutes say Herzog may hire someone mid-year",
        "Minutes say she reviewed the tech fund and had helped other offices"
      ]
    },
    {
      "id": "s-ellis-minutes-2022-07-28",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07282022-487",
      "title": "Ellis County Commission Minutes - July 28, 2022",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Herzog presented the Register of Deeds proposed budget",
        "Minutes say the office collected $2 per recorded document for a technology fund",
        "Minutes say Herzog believed the total fund was about $158,000",
        "Minutes say funds above the required office reserve could help other offices with technology or storage",
        "Minutes say Herzog planned a storage-room renovation and said multi-factor authentication fit the tech-fund guidelines"
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
        "Official county PDF/OCR lists REP Rebecca A. Herzog with 11,455 votes for County Register of Deeds",
        "Official county PDF/OCR lists write-in totals of 103 and total votes cast of 11,558 for the Register of Deeds race",
        "PDF is image-based in local extraction, so exact result text came from web/OCR indexing of the county PDF"
      ]
    },
    {
      "id": "s-ellis-2026-filings-pdf",
      "tier": "primary",
      "url": "https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings",
      "title": "2026 Primary Candidate Filings",
      "publisher": "Ellis County Clerk / Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026 filing PDF lists Commission District 1, township clerk offices, Ellis City Council, and precinct committee offices",
        "Register of Deeds is not listed as a 2026 candidate office"
      ]
    },
    {
      "id": "s-krda-ellis",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-elnc-district/",
      "title": "Ellis County (EL) NC District",
      "publisher": "Kansas Register of Deeds Association",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KRDA lists Rebecca Herzog for Ellis County",
        "KRDA lists bdeed@ellisco.net and 785-628-9450",
        "KRDA listing appears to use Hays ZIP 67901, which conflicts with official county pages using 67601"
      ]
    },
    {
      "id": "s-lkm-herzog",
      "tier": "secondary",
      "url": "https://www.lkm.org/members/?id=41503078",
      "title": "Rebecca Herzog, Register of Deeds, Ellis County",
      "publisher": "League of Kansas Municipalities",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "LKM profile preview identifies Rebecca Herzog as Register of Deeds, Ellis County",
        "Preview lists last updated May 28, 2024"
      ]
    },
    {
      "id": "s-tiger-2020-voter-guide",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=56543",
      "title": "2020 Ellis County Voter Guide",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Herzog was identified as the incumbent Republican candidate for Ellis County Register of Deeds in 2020",
        "Article said she was running unopposed",
        "Article's office-duty description appears imprecise and is not used for office-function claims"
      ]
    },
    {
      "id": "s-hayspost-2021-swearing-in",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3278d618-1e26-4ad5-8ceb-e19b22b25a44",
      "title": "Ellis County elected officials sworn in Monday",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post captioned Herzog as Register of Deeds sworn in for another term in January 2021"
      ]
    },
    {
      "id": "s-hayspost-2024-election-night",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "2024 General Election Ellis County results, all precincts reporting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post's election-night page listed incumbent Rebecca Herzog, Republican, with 7,074 votes",
        "This conflicts with the official county result PDF/OCR and should not control the final result",
        "Observed public online activity mapped to Election Status and Public Footprint."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(REBECCA_HERZOG_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[rebecca-herzog.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
