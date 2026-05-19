/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CHASE_LAPORTE_V2: CandidateFullV2 = {
  "slug": "chase-laporte",
  "name": "Chase LaPorte",
  "party": "R",
  "position": "U.S. Representative candidate, Kansas 3rd District (current official/local listing); conflicting FEC Senate filing also exists",
  "electionSlug": "us-house-ks-03-2026",
  "incumbent": false,
  "occupation": "Business administrator / Army veteran (per existing local profile material; current official bio not found)",
  "born": "Carthage, Missouri",
  "issues": [
    {
      "id": "i-official-status-campaign-footprint",
      "title": "Official filing status and campaign footprint",
      "stated": {
        "text": "LaPorte's current office status is conflicted across official records.\nFEC shows a September 12, 2025 Statement of Candidacy for U.S. Senate,\nKansas, but Johnson County Election Office currently lists him as a\nRepublican, non-incumbent candidate for U.S. Representative, Kansas\n3rd District. FEC also has House KS-03 filings from January 23, 2025\nand October 7, 2025, making the October House filing later than the\nSenate filing. Johnson County GOP and May 11, 2026 news coverage also\nplace him in the KS-03 House race.",
        "sourceIds": [
          "s-joco-laporte",
          "s-joco-candidates",
          "s-fec-senate",
          "s-fec-senate-f2",
          "s-fec-house-jan",
          "s-fec-house-jan-f2",
          "s-fec-house-oct",
          "s-fec-house-oct-f2",
          "s-joco-gop",
          "s-kansas-reflector-davids-2026",
          "s-wibw-davids-2026"
        ]
      },
      "actions": [
        {
          "id": "a-house-filing-jan2025",
          "date": "2025-01-23",
          "body": "Filed FEC Form 2 as a Republican candidate for U.S. House, Kansas\nDistrict 03, candidate ID H6KS03258, with LaPorte for a Brighter\nAmerica listed as principal campaign committee.",
          "sourceIds": [
            "s-fec-house-jan",
            "s-fec-house-jan-f2"
          ]
        },
        {
          "id": "a-senate-filing-sep2025",
          "date": "2025-09-12",
          "body": "Filed FEC Form 2 as a Republican candidate for U.S. Senate, Kansas,\ncandidate ID S6KS00254, with LaPorte for a Brighter America listed\nas principal campaign committee.",
          "sourceIds": [
            "s-fec-senate",
            "s-fec-senate-f2"
          ]
        },
        {
          "id": "a-house-filing-oct2025",
          "date": "2025-10-07",
          "body": "Filed a later FEC Form 2 as a Republican candidate for U.S. House,\nKansas District 03, candidate ID H6KS03274, with LaPorte for a\nBrighter America listed as principal campaign committee.",
          "sourceIds": [
            "s-fec-house-oct",
            "s-fec-house-oct-f2"
          ]
        },
        {
          "id": "a-current-joco-house-listing",
          "date": "2026-05-19",
          "body": "Johnson County Election Office's current candidate detail page\nlisted LaPorte as a Republican, non-incumbent candidate for U.S.\nRepresentative 3rd District, city Mission.",
          "sourceIds": [
            "s-joco-laporte"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-no-current-campaign-site",
          "platform": "Public web",
          "observation": "No current candidate-controlled 2026 House or Senate campaign\nwebsite was found in the reviewed record. The older\nlaporte4ksgov.com URL from prior UI data did not resolve during\nthis pass.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-opencampaign-house",
            "s-laporte4ksgov-dns-attempt"
          ],
          "mappedToIssueId": "i-official-status-campaign-footprint"
        },
        {
          "id": "ss-crossref-2",
          "platform": "LinkedIn",
          "observation": "LinkedIn: Chase LaPorte - public search preview showed 187 followers and 186 connections, CSC - Contemporary Services Corporation, Wichita State University, and volunteer/campaign entries including \"Republican candidate for KS-03\" under Chase LaPorte 2026. Logged-out page fetch was blocked by robots.txt.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-official-status-campaign-footprint"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Context: Archived 2022 Kansas governor campaign website excerpt.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-official-status-campaign-footprint"
        }
      ],
      "gap": {
        "summary": "The UI should not treat LaPorte as a clean U.S. Senate candidate\nunless the source conflict is resolved. The strongest current public\nevidence points to KS-03 House, while a valid FEC Senate filing also\nexists.",
        "evidenceIds": [
          "a-house-filing-jan2025"
        ]
      }
    },
    {
      "id": "i-term-limits-transparency",
      "title": "Term limits and government transparency",
      "stated": {
        "text": "The clearest current-cycle federal issue item is the U.S. Term Limits\npledge published May 28, 2025. U.S. Term Limits said LaPorte, described\nthere as a 2026 U.S. House candidate for Kansas District 3, signed a\npledge to \"cosponsor and vote for\" a constitutional amendment limiting\nHouse members to three terms and senators to two terms. In archived\n2022 campaign-site material, OnTheIssues recorded LaPorte's government\nreform line as: \"Transparency in government keep officials\naccountable.\"",
        "sourceIds": [
          "s-term-limits",
          "s-oti-summary"
        ]
      },
      "actions": [
        {
          "id": "a-term-limits-pledge-2025",
          "date": "2025-05-28",
          "body": "U.S. Term Limits published that LaPorte signed its congressional\nterm-limits pledge for the 2026 Kansas District 3 House race.",
          "sourceIds": [
            "s-term-limits"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "Across the accessible public social record, the harvest found no original campaign-post feed for LaPorte on X, Facebook, YouTube, Instagram, Truth Social, Gab, Gettr, Substack, Reddit, or TikTok. The accessible candidate-controlled record is instead concentrated in filings, pledge records, and archived issue excerpts: 0 original social posts, 0 reposts, and 7 public candidate-controlled issue, pledge, or filing...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-term-limits-transparency"
        },
        {
          "id": "ss-crossref-3",
          "platform": "ontheissues.org",
          "observation": "On national-policy subjects, the public record contains short issue lines rather than a current campaign feed. The term-limits pledge is the dated federal-policy item in the 2025-2026 record. OnTheIssues' archived 2022 campaign-site excerpts also record LaPorte writing, \"I believe in maintaining a strong National Guard presence.\" (source) The same archive records his health-care line as \"Freedom of choice for...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-oti-summary"
          ],
          "mappedToIssueId": "i-term-limits-transparency"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Date range covered: June 24, 2022 to May 11, 2026. Platforms surveyed: X, Facebook, YouTube, Instagram, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok, plus FEC, Johnson County Election Office, The Green Papers, U.S. Term Limits, OnTheIssues, and Abdallah Shriners public pages; approximately 0 original social posts, 0 reposts, 7 LinkedIn visible liked items, and 7 public candidate-controlled issue,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-term-limits-transparency"
        }
      ],
      "gap": {
        "summary": "No current candidate-controlled issue page, speech, or social post was\nfound expanding the term-limits pledge into a broader congressional\nreform platform.",
        "evidenceIds": [
          "a-term-limits-pledge-2025"
        ]
      }
    },
    {
      "id": "i-abortion-sanctity-of-life",
      "title": "Abortion / sanctity of life",
      "stated": {
        "text": "OnTheIssues archived a 2022 gubernatorial-campaign statement from\nLaPorte saying: \"As a Christian, I believe God's word directs us to\npreserve and protect human life, especially the unborn and innocent.\"\nThis is direct candidate-position evidence, but it is dated June 2022\nand comes from the prior governor campaign, not from a current 2026\ncongressional campaign site.",
        "sourceIds": [
          "s-oti-abortion",
          "s-oti-summary"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-marriage-family-public-faith",
      "title": "Marriage, family, and public faith statements",
      "stated": {
        "text": "OnTheIssues archived a 2022 campaign-site statement saying LaPorte\nbelieved in \"the Biblical standard for marriage, the traditional\nfamily unit, as well as the Biblical model for parenting.\" In a\nseparate 2022 principles statement, the archive recorded him describing\nhimself as a \"Christian Conservative\" and saying he had built his core\nvalues on the Holy Bible. These statements can be reported as public\nself-descriptions from the 2022 campaign; they should not be used to\ncertify church membership or infer unspoken policy details.",
        "sourceIds": [
          "s-oti-civil-rights",
          "s-oti-principles"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-abdallah-civic-role",
          "platform": "Public organization web",
          "observation": "Abdallah Shriners' public 2026 pages list LaPorte as Marshal and as\nDivan Rep for Blue Racers and Escorts. This supports a civic\ninvolvement note only; it is not evidence of a policy position.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-abdallah-divan",
            "s-abdallah-units"
          ],
          "mappedToIssueId": "i-marriage-family-public-faith"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "No current 2026 candidate-controlled education platform was found. No current statement was found on school choice, federal education funding, student loans, Title IX, or parental-rights legislation.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-marriage-family-public-faith"
        }
      ],
      "gap": {
        "summary": "No current church affiliation, current religious-liberty platform, or\ncurrent congressional LGBTQ-policy statement was confirmed.",
        "evidenceIds": [
          "ss-abdallah-civic-role"
        ]
      }
    },
    {
      "id": "i-education",
      "title": "Education",
      "stated": {
        "text": "OnTheIssues archived a 2022 campaign-site statement in which LaPorte\nsaid Kansas schools were \"inadequately staffed and under-funded\" and\nthat many schools lacked resources and technology. The same statement\nsaid he would identify deficiencies and advocate for updates to close\nacademic gaps and create a positive learning environment.",
        "sourceIds": [
          "s-oti-education",
          "s-oti-summary"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Mapping reason: Direct education statement. Not a current House/Senate platform unless dated and contextualized.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-education"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "The statement said many schools lacked resources and technology and that he would identify deficiencies and advocate for updates.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-education"
        }
      ]
    },
    {
      "id": "i-health-care-medical-choice",
      "title": "Health care and medical choice",
      "stated": {
        "text": "OnTheIssues archived a 2022 campaign-site statement framing pandemic\nand medical-care questions as matters of personal choice. The archived\nstatement said: \"No government or organization has the right to\nregulate or direct your medical care or the care of your children.\"\nThe record reviewed does not show a current 2026 health-care platform.",
        "sourceIds": [
          "s-oti-health"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across the captured period the feed contains no harvestable public posts about agriculture, the Farm Bill, tariffs, rural hospitals, Medicare, Medicaid, Social Security, veterans' benefits, immigration, border enforcement, water policy, the Ogallala Aquifer, Fort Riley, Fort Hays State University, Ukraine, Israel, China, Iran, or federal spending votes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-health-care-medical-choice"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Across the captured period the feed contains no posts about agriculture, the Farm Bill, wheat prices, rural hospitals, Medicaid, Medicare, Social Security, veterans' benefits, immigration, border enforcement, water policy, the Ogallala Aquifer, Fort Riley, Fort Hays State University, or county-level Kansas issues. The accessible public record also contains no visible corrections, replies, retractions, long-form...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-health-care-medical-choice"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Could not confirm current positions on immigration, guns, marijuana, rural hospitals, Medicare, Medicaid, Social Security, water, agriculture, tariffs, farm policy, Ukraine, Israel, China, Iran, or federal spending votes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-health-care-medical-choice"
        }
      ]
    },
    {
      "id": "i-public-safety-national-guard",
      "title": "Public safety and the National Guard",
      "stated": {
        "text": "OnTheIssues archived a 2022 campaign-site statement saying: \"I believe\nin maintaining a strong National Guard presence.\" No current 2026\ncongressional statement was found expanding that line into crime,\npolicing, homeland-security, defense, or foreign-policy positions.",
        "sourceIds": [
          "s-oti-summary"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-economy-work-commerce",
      "title": "Economy, work, and commerce",
      "stated": {
        "text": "OnTheIssues archived a 2022 campaign-site statement saying \"The\nAmerican dream was built on a model of hard work and freedom of\ncommerce\" and that LaPorte would work toward economic restoration.\nThe statement was from the 2022 governor campaign and does not provide\ncurrent federal-policy detail.",
        "sourceIds": [
          "s-oti-principles"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "No candidate-controlled current statements were found on guns, immigration, marijuana, farm policy, agriculture, water, rural hospitals, Medicare, Medicaid, Social Security, VA/veterans benefits, tariffs, foreign policy, or federal budget votes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-economy-work-commerce"
        }
      ]
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No processed 2025-2026 FEC financial summary was available for LaPorte\nunder the reviewed 2026 House IDs H6KS03258 and H6KS03274 or Senate ID\nS6KS00254. FEC search/API output returned has_raised_funds=false for the\n2026 federal IDs before rate limiting. A Kansas party-committee PDF\nsurfaced in search snippets with Chase LaPorte's name, but it appears to\nbe a party committee receipt report rather than LaPorte campaign receipts;\ndo not use those names as LaPorte donor evidence.",
    "narrative": "No processed 2025-2026 FEC financial summary was available for LaPorte\nunder the reviewed 2026 House IDs H6KS03258 and H6KS03274 or Senate ID\nS6KS00254. FEC search/API output returned has_raised_funds=false for the\n2026 federal IDs before rate limiting. A Kansas party-committee PDF\nsurfaced in search snippets with Chase LaPorte's name, but it appears to\nbe a party committee receipt report rather than LaPorte campaign receipts;\ndo not use those names as LaPorte donor evidence.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "LAPORTE, CHASE - Candidate overview H6KS03258"
  },
  "sources": [
    {
      "id": "s-joco-laporte",
      "tier": "primary",
      "url": "https://www.jocoelection.org/candidates-elected-officials/chase-laporte",
      "title": "Chase LaPorte",
      "publisher": "Johnson County Election Office",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "LaPorte is listed as non-incumbent, city Mission, party Republican",
        "Office jurisdiction is U.S. Representative",
        "Office position is U.S. Representative 3rd District",
        "Term is 2 years"
      ]
    },
    {
      "id": "s-joco-candidates",
      "tier": "primary",
      "url": "https://www.jocoelection.org/candidates-elected-officials/candidates",
      "title": "Candidates",
      "publisher": "Johnson County Election Office",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "LaPorte appears under U.S. Representative 3rd District",
        "The U.S. Senate section on the captured page does not list LaPorte"
      ]
    },
    {
      "id": "s-fec-house-jan",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS03258/",
      "title": "LAPORTE, CHASE - Candidate overview H6KS03258",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate for House Kansas - 03",
        "Challenger, Republican Party",
        "Filed 2025-01-23",
        "FEC does not have a 2025-2026 financial summary for LaPorte under this ID"
      ]
    },
    {
      "id": "s-fec-house-jan-f2",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/195/202501239747740195/202501239747740195.pdf",
      "title": "FEC Form 2 - H6KS03258",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "LaPorte filed for House, KS District 03",
        "Principal campaign committee listed as LaPorte for a Brighter America"
      ]
    },
    {
      "id": "s-fec-senate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00254/",
      "title": "LAPORTE, CHASE - Candidate overview S6KS00254",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate for Senate Kansas",
        "Challenger, Republican Party",
        "Filed 2025-09-12",
        "FEC does not have a 2025-2026 financial summary for LaPorte under this ID"
      ]
    },
    {
      "id": "s-fec-senate-f2",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
      "title": "FEC Form 2 - S6KS00254",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "LaPorte filed for Senate, KS",
        "Principal campaign committee listed as LaPorte for a Brighter America"
      ]
    },
    {
      "id": "s-fec-house-oct",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS03274/",
      "title": "LAPORTE, CHASE - Candidate overview H6KS03274",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate for House Kansas - 03",
        "Challenger, Republican Party",
        "Filed 2025-10-07",
        "FEC does not have a 2025-2026 financial summary for LaPorte under this ID"
      ]
    },
    {
      "id": "s-fec-house-oct-f2",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/549/202510079790706549/202510079790706549.pdf",
      "title": "FEC Form 2 - H6KS03274",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "LaPorte filed for House, KS District 03",
        "Principal campaign committee listed as LaPorte for a Brighter America"
      ]
    },
    {
      "id": "s-joco-gop",
      "tier": "secondary",
      "url": "https://jcrpks.org/",
      "title": "Johnson County Republican Party homepage",
      "publisher": "Johnson County Republican Party",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026 Currently Filed list places Roger Marshall under US Senate",
        "2026 Currently Filed list places Chase LaPorte under US Representative"
      ]
    },
    {
      "id": "s-kansas-reflector-davids-2026",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/05/11/kansas-democrat-makes-reelection-campaign-for-u-s-house-seat-official/",
      "title": "Kansas Democrat makes reelection campaign for U.S. House seat official",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas Reflector reported Republican Chase LaPorte of Mission filed for the 3rd District seat in Congress"
      ]
    },
    {
      "id": "s-wibw-davids-2026",
      "tier": "secondary",
      "url": "https://www.wibw.com/2026/05/11/rep-sharice-davids-files-re-election-states-third-congressional-district/",
      "title": "Rep. Sharice Davids files for re-election for state's third congressional district",
      "publisher": "WIBW",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "WIBW reported Democrat Sarah Preu and Republican Chase Laporte have also filed for the third district seat"
      ]
    },
    {
      "id": "s-term-limits",
      "tier": "secondary",
      "url": "https://termlimits.com/chase-laporte-pledges-to-support-term-limits-on-congress/",
      "title": "Chase LaPorte Pledges to Support Term Limits on Congress",
      "publisher": "U.S. Term Limits",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "U.S. Term Limits says LaPorte signed its congressional term-limits pledge",
        "Release describes LaPorte as a 2026 U.S. House candidate for Kansas District 3",
        "Pledge text says signers will cosponsor and vote for an amendment limiting House members to three terms and senators to two terms"
      ]
    },
    {
      "id": "s-oti-summary",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Chase_LaPorte.htm",
      "title": "Chase LaPorte on the Issues",
      "publisher": "OnTheIssues",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "OnTheIssues archived June 2022 campaign-site issue excerpts",
        "Summary includes abortion, civil rights, crime, education, government reform, health care, and principles excerpts",
        "Page last updated July 11, 2022",
        "Observed public online activity mapped to Term limits and government transparency."
      ]
    },
    {
      "id": "s-oti-abortion",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Governor/Chase_LaPorte_Abortion.htm",
      "title": "Chase LaPorte on Abortion",
      "publisher": "OnTheIssues",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Archived 2022 campaign-site statement says God's word directs preservation and protection of human life, especially unborn and innocent"
      ]
    },
    {
      "id": "s-oti-civil-rights",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Governor/Chase_LaPorte_Civil_Rights.htm",
      "title": "Chase LaPorte on Civil Rights",
      "publisher": "OnTheIssues",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Archived 2022 campaign-site statement says LaPorte believes in the Biblical standard for marriage, traditional family unit, and Biblical model for parenting"
      ]
    },
    {
      "id": "s-oti-principles",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Governor/Chase_LaPorte_Principles_%2B_Values.htm",
      "title": "Chase LaPorte on Principles & Values",
      "publisher": "OnTheIssues",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Archived 2022 campaign-site statement says LaPorte described himself as a Christian Conservative and said he built core values on the Holy Bible",
        "Archived 2022 campaign-site statement says the American dream was built on hard work and freedom of commerce"
      ]
    },
    {
      "id": "s-oti-health",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Governor/Chase_LaPorte_Health_Care.htm",
      "title": "Chase LaPorte on Health Care",
      "publisher": "OnTheIssues",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Archived 2022 campaign-site statement says no government or organization has the right to regulate or direct medical care or children's care"
      ]
    },
    {
      "id": "s-oti-education",
      "tier": "secondary",
      "url": "https://ontheissues.org/Governor/Chase_LaPorte_Education.htm",
      "title": "Chase LaPorte on Education",
      "publisher": "OnTheIssues",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Archived 2022 campaign-site statement says Kansas schools are inadequately staffed and under-funded",
        "Statement says many schools lack resources and technology"
      ]
    },
    {
      "id": "s-opencampaign-house",
      "tier": "secondary",
      "url": "https://www.opencampaign.com/politicians-in-united-states/196381/chase-laporte",
      "title": "Chase Laporte 3 - Running for U.S. House",
      "publisher": "OpenCampaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "OpenCampaign lists LaPorte as running for U.S. House District 3 in Kansas in 2026"
      ]
    },
    {
      "id": "s-laporte4ksgov-dns-attempt",
      "tier": "secondary",
      "url": "https://www.laporte4ksgov.com/",
      "title": "laporte4ksgov.com DNS check",
      "publisher": "Prior campaign URL / local DNS attempt",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The older laporte4ksgov.com URL from prior UI data did not resolve during this pass"
      ]
    },
    {
      "id": "s-abdallah-divan",
      "tier": "secondary",
      "url": "https://abdallahshriners.com/2026-divan",
      "title": "2026 Divan",
      "publisher": "Abdallah Shriners",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Abdallah Shriners lists Chase LaPorte as Marshal on the 2026 Divan page"
      ]
    },
    {
      "id": "s-abdallah-units",
      "tier": "secondary",
      "url": "https://abdallahshriners.com/units",
      "title": "Units",
      "publisher": "Abdallah Shriners",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Abdallah Shriners lists Chase LaPorte as Divan Rep for Blue Racers",
        "Abdallah Shriners lists Chase LaPorte as Divan Rep for Escorts"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://www.linkedin.com/in/chase-laporte-06285b281",
      "title": "LinkedIn / Linkedin",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Official filing status and campaign footprint.",
        "LinkedIn: Chase LaPorte - public search preview showed 187 followers and 186 connections, CSC - Contemporary Services Corporation, Wichita State University, and volunteer/campaign "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CHASE_LAPORTE_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[chase-laporte.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
