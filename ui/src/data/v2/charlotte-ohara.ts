/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CHARLOTTE_OHARA_V2: CandidateFullV2 = {
  "slug": "charlotte-ohara",
  "name": "Charlotte O'Hara",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Activist / Former Local Official",
  "campaignWebsite": "https://oharaforkansas.com/",
  "issues": [
    {
      "id": "taxes-spending-incentives",
      "title": "Taxes, Spending, and Development Incentives",
      "stated": {
        "text": "O'Hara's most developed campaign theme is opposition to high property taxes, government spending growth, and development incentives. Her homepage says she would bring DOGE-style spending restraint to Kansas and stop tax incentives, while her May 5 property-tax post proposes sunsetting STAR bonds, TIFs, IRBs, HPIP, and PEAK, stopping tax exemptions and credits, prohibiting local-government lobbyists, and pursuing property-tax elimination through spending cuts and audits.",
        "sourceIds": [
          "s-campaign-home",
          "s-property-tax-shift"
        ]
      },
      "actions": [
        {
          "id": "action-cnano-no-vote",
          "date": "2023-06",
          "body": "Johnson County official recap records O'Hara as the only no vote on CNANO/New Century Commerce Center industrial revenue bonds up to $34.15 million and related tax abatement/PILOT.",
          "sourceIds": [
            "s-joco-june-2023"
          ]
        },
        {
          "id": "action-fy2024-budget-no-vote",
          "date": "2023-06",
          "body": "O'Hara voted no on publication of the proposed FY2024 Johnson County budget.",
          "sourceIds": [
            "s-joco-june-2023"
          ]
        },
        {
          "id": "action-pay-table-no-vote",
          "date": "2023-06",
          "body": "O'Hara voted no on county pay-table changes and market pay adjustment.",
          "sourceIds": [
            "s-joco-june-2023"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-site-tax-category",
          "platform": "campaign_website",
          "observation": "Campaign WordPress category metadata showed 31 Taxes posts, 23 JoCo Spending posts, 19 Property Taxes posts, and 12 JoCo Budget posts out of 73 public posts; categories overlap.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-categories"
          ],
          "mappedToIssueId": "taxes-spending-incentives"
        },
        {
          "id": "ss-crossref-2",
          "platform": "oharaforkansas.com",
          "observation": "The campaign website is the dominant candidate-controlled platform. It combines a governor campaign landing page, a donation page, and an unusually large first-person opinion archive. The homepage says she is running to make Kansas a place \"to come home to,\" bring DOGE-style spending restraint to Kansas, stop tax incentives that she says increase property taxes, demand transparency, elect judges in direct...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "taxes-spending-incentives"
        },
        {
          "id": "ss-crossref-4",
          "platform": "oharaforkansas.com",
          "observation": "The campaign archive contained 71 public posts in the WordPress API on capture. The earliest listed post was \"A Sobering Look at Abortion Statistics in Kansas\" on 2025-01-14; the latest listed post was \"The Great Property Tax Shift\" on 2026-05-05. (archive source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-archive"
          ],
          "mappedToIssueId": "taxes-spending-incentives"
        }
      ],
      "gap": {
        "summary": "Her gubernatorial tax plan is mostly campaign-post level. Specific bill language, fiscal estimates, and executive feasibility are not yet available.",
        "evidenceIds": [
          "action-cnano-no-vote"
        ]
      }
    },
    {
      "id": "education-local-control-dei",
      "title": "Education, Local Control, and DEI/CRT",
      "stated": {
        "text": "O'Hara's education message combines parental/local control, opposition to DEI/WOKE/CRT language, and criticism of state/federal education bureaucracy. Her homepage says public schools should have freedom to learn and replace DEI/WOKE/CRT with reading, writing, history, and science. Her Apr. 28 post proposes stopping federal education funds, closing the Kansas State Department of Education, and putting curriculum decisions at the local level.",
        "sourceIds": [
          "s-campaign-home",
          "s-education-post",
          "s-campaign-about"
        ]
      },
      "actions": [
        {
          "id": "action-dei-coalition-no-vote",
          "date": "2023-06",
          "body": "Johnson County official recap records O'Hara voting no on creation of the county Diversity, Equity and Inclusion Coalition.",
          "sourceIds": [
            "s-joco-june-2023"
          ]
        },
        {
          "id": "action-education-post-policy",
          "date": "2026-04-28",
          "body": "O'Hara published a candidate-controlled post proposing local curriculum control, stopping federal funds, and closing KSDE.",
          "sourceIds": [
            "s-education-post"
          ]
        },
        {
          "id": "action-house-parental-rights-record",
          "date": "2011-2012",
          "body": "Kansas Legislature archive lists O'Hara-sponsored parental-rights and school-choice resolutions during her House term.",
          "sourceIds": [
            "s-ksleg-archive"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-site-education-post",
          "platform": "campaign_website",
          "observation": "The campaign archive includes the Apr. 28, 2026 post 'Dismantling the Kansas Department of Education,' mapping education to local-control and anti-DEI/CRT themes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-archive",
            "s-education-post"
          ],
          "mappedToIssueId": "education-local-control-dei"
        },
        {
          "id": "ss-crossref-2",
          "platform": "oharaforkansas.com",
          "observation": "The March 24, 2026 post \"Election Integrity: the Ghost of 2020\" tied election-integrity messaging to opposition to the sports authority/STAR bond package and asked readers to contact state senators. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-election-integrity-post"
          ],
          "mappedToIssueId": "education-local-control-dei"
        },
        {
          "id": "ss-crossref-4",
          "platform": "oharaforkansas.com",
          "observation": "The April 28, 2026 post \"Dismantling the Kansas Department of Education\" argues education should be local and criticizes what she describes as tax-incentive funded candidates and the state education bureaucracy. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-education-post"
          ],
          "mappedToIssueId": "education-local-control-dei"
        }
      ],
      "gap": {
        "summary": "No detailed gubernatorial education implementation plan beyond the campaign homepage and posts was found.",
        "evidenceIds": [
          "action-dei-coalition-no-vote"
        ]
      }
    },
    {
      "id": "elections-transparency-judicial-selection",
      "title": "Elections, Transparency, and Judicial Selection",
      "stated": {
        "text": "O'Hara's campaign repeatedly links election administration, transparency, and judicial selection. Her homepage calls for direct partisan election of judges and says the Kansas Bar Association's role in judicial selection should end. Her March 24 election-integrity post supports proof-of-citizenship requirements through the SAVE Act and paper ballots. Her May 19 post urges support for an August 4 constitutional amendment for direct election of Kansas Supreme Court justices.",
        "sourceIds": [
          "s-campaign-home",
          "s-election-integrity-post",
          "s-bar-association-post"
        ]
      },
      "actions": [
        {
          "id": "action-sb366-testimony",
          "date": "2024-01-24",
          "body": "Senate Federal and State Affairs minutes list O'Hara as proponent oral testimony for SB 366 on advance-ballot application mailings.",
          "sourceIds": [
            "s-ksleg-sb366-minutes"
          ]
        },
        {
          "id": "action-hb2206-opponent-testimony",
          "date": "2025-03-12",
          "body": "Kansas Legislature HB 2206 page lists O'Hara as private-citizen opponent/in-person testimony.",
          "sourceIds": [
            "s-ksleg-hb2206",
            "s-ksleg-hb2206-testimony"
          ]
        },
        {
          "id": "action-koma-complaint",
          "date": "2023-07-06",
          "body": "Johnson County notice says O'Hara filed a KOMA complaint with the Kansas Attorney General regarding a June 29, 2023 executive session.",
          "sourceIds": [
            "s-joco-koma"
          ]
        },
        {
          "id": "action-judicial-selection-post",
          "date": "2026-05-19",
          "body": "O'Hara posted in support of the August 4 constitutional amendment for direct election of Kansas Supreme Court justices.",
          "sourceIds": [
            "s-bar-association-post"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-site-elections-categories",
          "platform": "campaign_website",
          "observation": "Campaign WordPress category metadata showed 52 Elections posts, 47 Voting posts, and 59 Transparency posts out of 73 public posts; categories overlap.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-categories"
          ],
          "mappedToIssueId": "elections-transparency-judicial-selection"
        },
        {
          "id": "ss-crossref-2",
          "platform": "oharaforkansas.com",
          "observation": "The highest-frequency campaign-archive themes are Kansas issues, transparency, elections/voting, taxes, Johnson County spending, public safety, and property taxes. WordPress category counts are overlapping because most posts carry multiple categories: Kansas Issues 70, Transparency 57, Elections 50, Voting 45, Taxes 31, JoCo Spending 23, Public Safety 20, Property Taxes 19, Safety 15, JoCo Budget 12, BOCC 4,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-categories"
          ],
          "mappedToIssueId": "elections-transparency-judicial-selection"
        },
        {
          "id": "ss-crossref-4",
          "platform": "oharaforkansas.com",
          "observation": "Campaign-site category metadata, captured 2026-05-11: 70 Kansas Issues posts; 57 Transparency; 50 Elections; 45 Voting; 31 Taxes; 23 JoCo Spending; 20 Public Safety; 19 Property Taxes; 15 Safety; 12 JoCo Budget; 4 BOCC; 1 Podcasts; 1 Uncategorized. (source) 5. \"The Great Property Tax Shift,\" 2026-05-05. Recent anchor post on property taxes, economic-development incentives, COVID funding, local/state spending,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-categories"
          ],
          "mappedToIssueId": "elections-transparency-judicial-selection"
        }
      ],
      "gap": {
        "summary": "Need official ballot-measure text and final August 2026 election results later. Current official SOS filed-candidate list for her own race was not confirmed.",
        "evidenceIds": [
          "action-sb366-testimony"
        ]
      }
    },
    {
      "id": "abortion-life-issues",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "O'Hara states a pro-life position in campaign-controlled material. Her biography lists 'Life' among promises she says she would bring Kansas back to. Her Feb. 17 poem 'When Did You Begin' argues dignity and worth begin at conception. Her May 19 judicial-selection post frames the Kansas Supreme Court selection issue through abortion.",
        "sourceIds": [
          "s-campaign-about",
          "s-when-did-you-begin",
          "s-bar-association-post"
        ]
      },
      "actions": [
        {
          "id": "action-house-abortion-sponsorship-history",
          "date": "2011-2012",
          "body": "Kansas Legislature archive lists O'Hara-sponsored bills on late-term/partial-birth abortion regulation and abortion regulation based on capacity of unborn child to feel pain.",
          "sourceIds": [
            "s-ksleg-archive"
          ]
        },
        {
          "id": "action-prolife-poem",
          "date": "2026-02-17",
          "body": "O'Hara published 'When Did You Begin,' a poem arguing human dignity begins at conception.",
          "sourceIds": [
            "s-when-did-you-begin"
          ]
        },
        {
          "id": "action-judicial-selection-abortion-frame",
          "date": "2026-05-19",
          "body": "O'Hara's judicial-selection post asks clergy to support direct election of Supreme Court justices and links the issue to abortion.",
          "sourceIds": [
            "s-bar-association-post"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-site-abortion-posts",
          "platform": "campaign_website",
          "observation": "Campaign archive includes 'A Sobering Look at Abortion Statistics in Kansas' as the earliest exposed post on Jan. 14, 2025 and 'When Did You Begin' on Feb. 17, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-archive",
            "s-when-did-you-begin"
          ],
          "mappedToIssueId": "abortion-life-issues"
        },
        {
          "id": "ss-crossref-2",
          "platform": "oharaforkansas.com",
          "observation": "The Feb. 17, 2026 post \"When Did You Begin\" is a pro-life poem that asks when human dignity begins, reinforcing abortion as a recurring campaign theme. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-when-did-you-begin"
          ],
          "mappedToIssueId": "abortion-life-issues"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Kansas Reflector",
          "observation": "O'Hara attacked what she called a \"vast sea of RINOs\" in the Republican Party; the piece also reports broad GOP debate agreement on abortion opposition, marijuana opposition, and elected Supreme Court justices. (source) 17. Kansas Reflector, Feb.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ksreflector-debate"
          ],
          "mappedToIssueId": "abortion-life-issues"
        }
      ],
      "gap": {
        "summary": "No current endorsement/rating from abortion-policy advocacy groups was confirmed in this pass.",
        "evidenceIds": [
          "action-house-abortion-sponsorship-history"
        ]
      }
    },
    {
      "id": "covid-health-freedom-public-health",
      "title": "COVID, Health Freedom, and Public-Health Authority",
      "stated": {
        "text": "O'Hara makes COVID-era opposition to masks, vaccines, school closures, and business shutdowns part of her biography. Her May 5 property-tax post repeats that as a Johnson County commissioner she refused a mask and shot and voted no on closing schools and businesses. Her July 2025 ivermectin post says she is not a doctor but supports the health freedom movement.",
        "sourceIds": [
          "s-campaign-about",
          "s-property-tax-shift",
          "s-ivermectin-post"
        ]
      },
      "actions": [
        {
          "id": "action-covid-biography-statement",
          "date": "2026",
          "body": "Campaign biography states she refused mask and shot and opposed school/business closures during COVID.",
          "sourceIds": [
            "s-campaign-about"
          ]
        },
        {
          "id": "action-ivermectin-post",
          "date": "2025-07-22",
          "body": "O'Hara published a post supporting the health freedom movement in the ivermectin debate while saying she is not a doctor.",
          "sourceIds": [
            "s-ivermectin-post"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-site-covid-post",
          "platform": "campaign_website",
          "observation": "The campaign archive includes the July 22, 2025 post 'The Wonder Drug War - Ivermectin, COVID and Politics!'",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-archive",
            "s-ivermectin-post"
          ],
          "mappedToIssueId": "covid-health-freedom-public-health"
        },
        {
          "id": "ss-crossref-2",
          "platform": "oharaforkansas.com",
          "observation": "The July 22, 2025 post \"The Wonder Drug War - Ivermectin, COVID and Politics!\" says she is not a doctor but supports the \"health freedom movement\" in the politics around ivermectin. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ivermectin-post"
          ],
          "mappedToIssueId": "covid-health-freedom-public-health"
        },
        {
          "id": "ss-crossref-4",
          "platform": "oharaforkansas.com",
          "observation": "Key signals: former contractor/developer, small-business owner, COVID-shutdown experience, Kansas House, Johnson County Commission, mother/grandmother, faith and family language. (source) 3. Campaign-site archive/API, captured 2026-05-11: 71 posts from 2025-01-14 to 2026-05-05. (source) 4.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "covid-health-freedom-public-health"
        }
      ],
      "gap": {
        "summary": "County meeting-level primary records for each COVID-era closure/mask vote were not pulled in this pass; use as candidate-stated record unless separately verified.",
        "evidenceIds": [
          "action-covid-biography-statement"
        ]
      }
    },
    {
      "id": "property-rights-energy-china-public-safety",
      "title": "Property Rights, Industrial Energy, China/CNANO, and Public Safety",
      "stated": {
        "text": "O'Hara's homepage says she would protect land and quality of life from industrial wind and solar facilities, lithium-ion battery manufacturing plants, battery storage, transmission lines, and eminent-domain takings. Johnson County records provide a concrete local action anchor: she was the lone no vote on CNANO/New Century Commerce Center industrial revenue bonds and tax abatement/PILOT in June 2023. Her May 2026 kratom post adds a public-safety/donor-scrutiny theme, but its opponent-donor claims require separate verification before being treated as fact beyond her statement.",
        "sourceIds": [
          "s-campaign-home",
          "s-joco-june-2023",
          "s-kratom-post"
        ]
      },
      "actions": [
        {
          "id": "action-cnano-no-vote-repeat",
          "date": "2023-06",
          "body": "O'Hara voted no on CNANO/New Century Commerce Center industrial revenue bonds and related tax abatement/PILOT.",
          "sourceIds": [
            "s-joco-june-2023"
          ]
        },
        {
          "id": "action-sustainability-coalition-no-vote",
          "date": "2023-06",
          "body": "O'Hara voted no on creation of the Johnson County Sustainability Coalition.",
          "sourceIds": [
            "s-joco-june-2023"
          ]
        },
        {
          "id": "action-kratom-donor-post",
          "date": "2026-05-13",
          "body": "O'Hara published a post criticizing 7-OH/kratom-related donors to Republican gubernatorial opponents.",
          "sourceIds": [
            "s-kratom-post"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-site-public-safety-category",
          "platform": "campaign_website",
          "observation": "Campaign category metadata showed 22 Public Safety posts and 17 Safety posts out of 73 public posts; categories overlap.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-categories"
          ],
          "mappedToIssueId": "property-rights-energy-china-public-safety"
        }
      ],
      "gap": {
        "summary": "Need direct verification of the cited opponent campaign-finance reports and kratom legislation before converting the May 13 post into opponent-comparison fact claims.",
        "evidenceIds": [
          "action-cnano-no-vote-repeat"
        ]
      }
    }
  ],
  "ownWordsNarrative": "sourceIds: s-campaign-archive; s-campaign-categories; s-facebook-page; platformSummary: platform: campaign website; status: active; observedAt: 2026-05-19; details: WordPress API exposed 73 public posts from 2025-01-14 through 2026-05-19.; platform: Facebook; status: page-level metadata only; observedAt: 2026-05-11; details: Local harvest captured O'Hara for Kansas page with 1,513 likes and 389 talking about this. Current logged-out access blocked post inventory.; platform: X/Twitter; status: not confirmed; observedAt: 2026-05-19; details: No clear candidate-controlled current account found.; platform: Instagram / YouTube / TikTok / Bluesky / Truth Social / Gab / Gettr / Substack / Reddit / LinkedIn; status: not confirmed; observedAt: 2026-05-19; details: No clear candidate-controlled current account found.; blockers: No candidate-controlled Facebook post-level likes/comments/shares were accessible.; No reliable public comment-section inventory was accessible.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. O'Hara's campaign biography says she grew up in a family tradition of faith, but the source material does not name a current congregation or church website.",
  "campaignFinance": {
    "totalRaised": "totalContributionsAndReceipts: $589,550.97; totalExpenditures: $78,652.57; cashOnHandClose: $510,898.40; inKind: $10,416.96; otherTransactions: $485,000.00",
    "narrative": "totalContributionsAndReceipts: $589,550.97; totalExpenditures: $78,652.57; cashOnHandClose: $510,898.40; inKind: $10,416.96; otherTransactions: $485,000.00",
    "donors": [
      {
        "name": "Charlotte O'Hara",
        "amount": "$193,000.00"
      },
      {
        "name": "Victor Wirtz",
        "amount": "$104.10"
      },
      {
        "name": "Ralph Yaple",
        "amount": "$100.00"
      },
      {
        "name": "Sandra Nider",
        "amount": "$35.00"
      },
      {
        "name": "Nancy Czinege",
        "amount": "$104.10"
      },
      {
        "name": "Pam and Robb Ferguson",
        "amount": "$260.25"
      }
    ],
    "reportingPeriod": "2025 year-end report, Jan. 1-Dec. 31, 2025",
    "source": "Campaign Finance Receipts and Expenditures Report - Charlotte I O'Hara"
  },
  "sources": [
    {
      "id": "s-ksleg-archive",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2012/b2011_12/members/rep_ohara_charlotte_1/",
      "title": "Representative Charlotte O'Hara",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "O'Hara represented House District 27 as a Republican, first term 2011",
        "Committee assignments included Insurance, Agriculture and Natural Resources, Federal and State Affairs, and Financial Institutions",
        "Sponsored-bill list included abortion regulation, voter photo ID, court appointment changes, health care freedom, and parental-rights/school-choice resolutions"
      ]
    },
    {
      "id": "s-joco-june-2023",
      "tier": "primary",
      "url": "https://www.jocogov.org/newsroom/board-county-commissioners-monthly-recap-june-2023",
      "title": "Board of County Commissioners Monthly Recap: June 2023",
      "publisher": "Johnson County Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "O'Hara voted no on publication of proposed FY2024 Johnson County budget",
        "O'Hara voted no on pay-table/market pay adjustments",
        "O'Hara voted no on creation of Sustainability Coalition and Diversity, Equity and Inclusion Coalition",
        "O'Hara was the only no vote on CNANO/New Century Commerce Center industrial revenue bonds and tax abatement/PILOT",
        "O'Hara voted no on several zoning/planning items, Sunflower Fire Station funding, and opioid settlement allocation"
      ]
    },
    {
      "id": "s-joco-koma",
      "tier": "primary",
      "url": "https://www.jocogov.org/newsroom/information-and-next-steps-regarding-koma-complaint",
      "title": "Information and next steps regarding a KOMA complaint",
      "publisher": "Johnson County Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "O'Hara filed a KOMA complaint with the Kansas Attorney General on July 6, 2023",
        "County notice says four allegations were closed and one allegation had more information requested by the AG"
      ]
    },
    {
      "id": "s-ksleg-hb2206",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/HB2206/",
      "title": "HB 2206",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2206 concerned campaign-finance law and renaming the ethics commission to the Kansas Public Disclosure Commission",
        "O'Hara is listed as a private citizen opponent/in-person presenter on Mar. 12, 2025"
      ]
    },
    {
      "id": "s-ksleg-hb2206-testimony",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/committees/testimony/pdf/?apn=b2025_26/year2/senate/committees/ctte_s_fed_st_1/testimony/published/ctte_s_fed_st_1_20250312_03_testimony.html",
      "title": "Testimony for HB 2206 - Charlotte O'Hara",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "O'Hara opposed moving campaign-finance bills while ethics issues were unresolved",
        "O'Hara described alleged campaign-finance issues in both parties and said reform should wait until investigations settled"
      ]
    },
    {
      "id": "s-ksleg-sb366-minutes",
      "tier": "primary",
      "url": "https://kslegislature.gov/li_2024/b2023_24/committees/ctte_s_fed_st_1/documents/minutes/20240124.pdf",
      "title": "Senate Federal and State Affairs Minutes - Jan. 24, 2024",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "O'Hara, then Johnson County commissioner, testified as private citizen proponent for SB 366",
        "Minutes summarize her concerns about advance-ballot application mailer costs, personal information, and ballot security"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://oharaforkansas.com/",
      "title": "Home - Charlotte O'Hara for Kansas Governor",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Homepage identifies Charlotte O'Hara for Governor and 2026 Kansas Gubernatorial Primary Election",
        "Homepage lists seven priorities including spending restraint, stopping tax incentives, transparency, direct partisan election of judges, education changes, and opposition to industrial energy/eminent-domain projects",
        "Homepage biography describes general contractor/developer, small-business owner, Kansas House, Johnson County Commission, mother/grandmother, and COVID-shutdown experience",
        "Observed public online activity mapped to Taxes, Spending, and Development Incentives.",
        "Observed public online activity mapped to COVID, Health Freedom, and Public-Health Authority."
      ]
    },
    {
      "id": "s-campaign-about",
      "tier": "primary",
      "url": "https://oharaforkansas.com/about-charlotte-ohara/",
      "title": "About Charlotte O'Hara",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Biography says she was raised in Bourbon County, graduated from KU, worked as a general contractor, homeschooled two youngest children, and has a small manufacturing company with two sons",
        "Biography says she refused mask, shot, and school/business closures during COVID",
        "Biography uses faith/family language but does not name a current congregation"
      ]
    },
    {
      "id": "s-campaign-archive",
      "tier": "primary",
      "url": "https://oharaforkansas.com/wp-json/wp/v2/posts?per_page=100&_fields=date,slug,link,title.rendered,categories",
      "title": "Campaign WordPress Posts API",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "API exposed 73 public posts from Jan. 14, 2025 through May 19, 2026",
        "Newest posts were May 13, 2026 kratom/donor post and May 19, 2026 Kansas Bar Association/judicial-selection post",
        "Observed public online activity mapped to Taxes, Spending, and Development Incentives."
      ]
    },
    {
      "id": "s-campaign-categories",
      "tier": "primary",
      "url": "https://oharaforkansas.com/wp-json/wp/v2/categories?per_page=100",
      "title": "Campaign WordPress Categories API",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Category counts include Kansas Issues 72, Transparency 59, Elections 52, Voting 47, Taxes 31, JoCo Spending 23, Public Safety 22, Property Taxes 19, Safety 17, JoCo Budget 12, BOCC 4",
        "Observed public online activity mapped to Elections, Transparency, and Judicial Selection."
      ]
    },
    {
      "id": "s-property-tax-shift",
      "tier": "primary",
      "url": "https://oharaforkansas.com/the-great-property-tax-shift/",
      "title": "The Great Property Tax Shift",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Post criticizes STAR bonds, TIFs, IRBs, HPIP, PEAK, COVID spending, and local/state budget growth",
        "Post proposes prohibiting local governments from hiring lobbyists, sunsetting incentive programs, stopping tax exemptions/credits, and eliminating property taxes through spending cuts/audits"
      ]
    },
    {
      "id": "s-education-post",
      "tier": "primary",
      "url": "https://oharaforkansas.com/dismantling-the-kansas-department-of-education/",
      "title": "Dismantling the Kansas Department of Education",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Post proposes stopping federal education funds, closing the Kansas State Department of Education, and placing curriculum decisions at the local level",
        "Observed public online activity mapped to Education, Local Control, and DEI/CRT."
      ]
    },
    {
      "id": "s-election-integrity-post",
      "tier": "primary",
      "url": "https://oharaforkansas.com/election-integrity-the-ghost-of-2020/",
      "title": "Election Integrity: the Ghost of 2020",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Post supports SAVE Act proof-of-citizenship election requirements and paper ballots",
        "Post ties election-integrity messaging to sports-authority/STAR bond opposition",
        "Observed public online activity mapped to Education, Local Control, and DEI/CRT."
      ]
    },
    {
      "id": "s-when-did-you-begin",
      "tier": "primary",
      "url": "https://oharaforkansas.com/when-did-you-begin/",
      "title": "When Did You Begin",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-controlled poem argues dignity and worth begin at conception",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-bar-association-post",
      "tier": "primary",
      "url": "https://oharaforkansas.com/we-the-people-vs-the-kansas-bar-association/",
      "title": "We the People vs. the Kansas Bar Association",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Post urges support for an August 4 constitutional amendment on direct election of Kansas Supreme Court justices",
        "Post asks pastors and priests to support the amendment and frames the issue through abortion"
      ]
    },
    {
      "id": "s-kratom-post",
      "tier": "primary",
      "url": "https://oharaforkansas.com/gas-station-heroin-distributors-campaign-contributors/",
      "title": "Gas Station Heroin Distributors, Campaign Contributors",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Post criticizes 7-OH/kratom-related donors to two Republican governor opponents",
        "Post references 2026 Kansas legislation reclassifying 7-OH as a Schedule 1 controlled substance"
      ]
    },
    {
      "id": "s-ivermectin-post",
      "tier": "primary",
      "url": "https://oharaforkansas.com/the-wonder-drug-war-ivermectin-covid-and-politics/",
      "title": "The Wonder Drug War - Ivermectin, COVID and Politics",
      "publisher": "O'Hara for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Post says O'Hara is not a doctor but supports the health freedom movement in the ivermectin debate",
        "Observed public online activity mapped to COVID, Health Freedom, and Public-Health Authority."
      ]
    },
    {
      "id": "s-ksreflector-debate",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Six Kansas GOP candidates for governor toss haymakers in first debate",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Debate coverage reports broad Republican candidate agreement on abortion opposition, marijuana opposition, praise for President Trump, and elected Kansas Supreme Court justices",
        "Coverage reports O'Hara criticized what she called a vast sea of RINOs in the Republican Party",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CHARLOTTE_OHARA_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[charlotte-ohara.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
