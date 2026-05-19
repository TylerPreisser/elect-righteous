/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JEFF_COLYER_V2: CandidateFullV2 = {
  "slug": "jeff-colyer",
  "name": "Jeff Colyer",
  "party": "R",
  "position": "Kansas Governor",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Physician / Former Governor",
  "religion": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
  "campaignWebsite": "https://www.colyerforgovernor.com/",
  "issues": [
    {
      "id": "taxes-affordability-fraud",
      "title": "Taxes, Affordability, Fraud, and Property Taxes",
      "stated": {
        "text": "Colyer's current campaign makes taxes, affordability, fraud, and property taxes a first-tier issue. The 25-point plan says he would end welfare fraud, make Kansas a high-wage and low-tax state, put a real lid on property taxes, deliver fiscal responsibility and balanced budgets, and bring high-paying manufacturing and technology jobs to Kansas.",
        "sourceIds": [
          "s-campaign-commitment",
          "s-campaign-current"
        ]
      },
      "actions": [
        {
          "id": "action-2025-campaign-plan-economy",
          "date": "2026-05-19",
          "body": "Current campaign plan lists welfare fraud, low taxes, property-tax limits, balanced budgets, and manufacturing/tech jobs under the economic-strength pillar.",
          "sourceIds": [
            "s-campaign-commitment"
          ]
        },
        {
          "id": "action-launch-tax-record-claim",
          "date": "2025-05-15",
          "body": "KCUR/KMUW reported Colyer said at launch that, as governor, he held the line on taxes including property taxes and ended long-running school litigation.",
          "sourceIds": [
            "s-kcur-launch"
          ]
        },
        {
          "id": "action-finance-self-funding",
          "date": "2026-01-09",
          "body": "KPDC 202601 filing showed $2,070,322.09 in total contributions and other receipts, $1,884,509.78 cash on hand, and multiple visible candidate loan entries totaling at least $1,055,481.00.",
          "sourceIds": [
            "s-kpdc-202601"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-tax-topic-share",
          "platform": "X/campaign_web",
          "observation": "Local social harvest coded taxes, affordability, property taxes, government spending, fraud, regulation, and property rights as 8 of 29 accessible reviewed items, or 28%.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "taxes-affordability-fraud"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "Colyer's active campaign footprint is split between an older campaign domain, jeffcolyer.com, and a 2026-specific domain, colyerforgovernor.com. The older site links his public X, Instagram, Facebook, and YouTube accounts and foregrounds action items on critical race theory, private property rights, abortion, KU stem-cell funding, and oil/gas policy. The homepage identifies him as a fifth-generation Kansan from...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "taxes-affordability-fraud"
        },
        {
          "id": "ss-crossref-4",
          "platform": "colyerforgovernor.com",
          "observation": "The 2026 campaign site is more polished and explicitly primary-oriented. It leads with Trump validation, \"Faith & Family First,\" Colyer's status as Kansas's 47th governor, his appointment by Trump to a rural-health advisory role, and his service as Trump's 2024 Kansas chair. It lists five campaign pillars: lower costs/higher pay, safer communities, freedom to thrive, healthy rural Kansas, and honest accountable...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-current"
          ],
          "mappedToIssueId": "taxes-affordability-fraud"
        }
      ],
      "gap": {
        "summary": "Campaign material names tax and fraud priorities but this pass did not locate draft legislation, fiscal estimates, or implementation detail for property-tax caps or fraud enforcement.",
        "evidenceIds": [
          "action-2025-campaign-plan-economy"
        ]
      }
    },
    {
      "id": "education-parental-rights",
      "title": "Education, Parental Rights, and Youth Policy",
      "stated": {
        "text": "Colyer's education message combines curriculum focus, parental rights, and school options. His 25-point plan says schools should focus on math, reading, technology, STEM, and adulthood preparation; it also says families should have better options if a school fails them and says parental rights should be strengthened.",
        "sourceIds": [
          "s-campaign-commitment"
        ]
      },
      "actions": [
        {
          "id": "action-2025-campaign-plan-education",
          "date": "2026-05-19",
          "body": "Current campaign plan lists getting 'woke' out of schools, academic/tech focus, STEM/adulthood preparation, school options, and parental rights.",
          "sourceIds": [
            "s-campaign-commitment"
          ]
        },
        {
          "id": "action-launch-youth-health",
          "date": "2025-05-15",
          "body": "KCUR/KMUW reported Colyer said he wanted to prevent gender-affirming care for minors.",
          "sourceIds": [
            "s-kcur-launch"
          ]
        },
        {
          "id": "action-2018-school-litigation-claim",
          "date": "2025-05-15",
          "body": "KCUR/KMUW reported Colyer said he ended 50 years of school litigation while governor.",
          "sourceIds": [
            "s-kcur-launch"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-education-topic-share",
          "platform": "X/campaign_web",
          "observation": "Local social harvest coded education, parental rights, youth healthcare, school conflict, and public safety as 7 of 29 accessible reviewed items, or 24%. Indexed X examples included classroom, academic-skills, and 'EDUCATION NOT INDOCTRINATION' posts.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "education-parental-rights"
        },
        {
          "id": "ss-crossref-2",
          "platform": "mobile.twstalker.com",
          "observation": "1. 2 days ago -- Greensburg classroom visit. Message: Kansas's future starts in classrooms; emphasis on phonics-based reading, math, writing, tech skills, and career preparation. Engagement: 3 replies, 1 repost, 12 likes, 553 views, 0 quotes. Topic: education. (source) 2. 3 days ago -- Kansas City Chiefs / Kenneth Walker III post. Engagement: 0 replies, 0 reposts, 10 likes, 463 views, 0 quotes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "education-parental-rights"
        },
        {
          "id": "ss-crossref-4",
          "platform": "mobile.twstalker.com",
          "observation": "Topic: sports / Kansas identity. (source) 3. 5 days ago -- Anti-woke education post: \"EDUCATION NOT INDOCTRINATION,\" with reading, writing, math, technology skills, and \"real-world preparation.\" Engagement: 16 replies, 6 reposts, 38 likes, 1K views, 1 quote. Topic: education / anti-woke schools. (source) 4. 6 days ago -- Governor campaign post tying higher wages, lower taxes, small business, and President Trump....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "education-parental-rights"
        }
      ],
      "gap": {
        "summary": "No detailed 2026 school-finance, special-education, teacher-workforce, higher-education affordability, or local-board implementation plan was found.",
        "evidenceIds": [
          "action-2025-campaign-plan-education"
        ]
      }
    },
    {
      "id": "faith-family-life-religious-liberty",
      "title": "Faith, Family, Abortion, Guns, and Religious Liberty",
      "stated": {
        "text": "Colyer's current campaign groups abortion, gun owners and hunters, farmers, God-given rights, sex/gender policy, and honest work under a 'Faith & Family First' pillar. The plan says he would protect the unborn and provide options for young mothers, protect lawful gun owners and hunters, and protect God-given rights.",
        "sourceIds": [
          "s-campaign-commitment",
          "s-campaign-current"
        ]
      },
      "actions": [
        {
          "id": "action-sb284-approved-by-governor",
          "date": "2018-05-18",
          "body": "Kansas Legislature bill history records SB 284, creating the Adoption Protection Act and updating adoption law, as approved by the governor on May 18, 2018.",
          "sourceIds": [
            "s-ksleg-sb284",
            "s-ksleg-sb284-enrolled"
          ]
        },
        {
          "id": "action-2026-life-guns-plan",
          "date": "2026-05-19",
          "body": "Current 25-point plan says Colyer would protect the unborn, provide options for young mothers, protect God-given rights, and protect lawful gun owners and hunters.",
          "sourceIds": [
            "s-campaign-commitment"
          ]
        },
        {
          "id": "action-older-abortion-archive",
          "date": "2021",
          "body": "Older still-live campaign announcements archive includes Colyer statements on abortion and adult stem-cell research.",
          "sourceIds": [
            "s-campaign-old-announcements"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-faith-family-site-signal",
          "platform": "campaign_website",
          "observation": "Current campaign plan labels one pillar 'Faith & Family First' and places abortion, guns, farmers, God-given rights, and sex/gender policy in that pillar.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-commitment"
          ],
          "mappedToIssueId": "faith-family-life-religious-liberty"
        },
        {
          "id": "ss-crossref-2",
          "platform": "mobile.twstalker.com",
          "observation": "Engagement: 24 replies, 2 reposts, 69 likes, 2K views, 0 quotes. Topic: military / patriotism. (source) 8. 2 weeks ago -- Short faith-coded reply, \"Big amen.\" Engagement: 4 replies, 2 reposts, 29 likes, 585 views, 0 quotes. Topic: faith / affirmation. (source) 9. 2 weeks ago -- \"God bless and protect our troops.\" Engagement: 4 replies, 4 reposts, 43 likes, 1K views, 1 quote. Topic: military / patriotism. (source)...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "faith-family-life-religious-liberty"
        },
        {
          "id": "ss-crossref-4",
          "platform": "jeffcolyer.com",
          "observation": "1. jeffcolyer.com homepage, captured 2026-05-11. Key visible signals: critical race theory pledge, private property rights letter, abortion announcement, KU stem-cell research criticism, oil/gas criticism, bio, and social links. 2. jeffcolyer.com/about, captured 2026-05-11. Key visible signals: Hays biography, family, surgeon identity, humanitarian war-zone work, pro-life record, KanCare, budget/stability claims,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "faith-family-life-religious-liberty"
        }
      ],
      "gap": {
        "summary": "Current church affiliation was not verified. Do not infer present worship community or policy position from Catholic-school/Hays background, campaign faith language, or social signals.",
        "evidenceIds": [
          "action-sb284-approved-by-governor"
        ]
      }
    },
    {
      "id": "healthcare-rural-health-kancare",
      "title": "Health Care, Rural Health, Medical Biography, and KanCare",
      "stated": {
        "text": "Colyer's public profile and campaign message lean heavily on his physician identity and prior health-policy record. His older campaign biography says he created KanCare, Kansas's privatized integrated Medicaid system, and his current campaign frames rural health as a major pillar.",
        "sourceIds": [
          "s-campaign-current",
          "s-campaign-old-about",
          "s-kansapedia"
        ]
      },
      "actions": [
        {
          "id": "action-kancare-record-claim",
          "date": "2011-2018",
          "body": "Older campaign biography credits Colyer with creating KanCare and presents it as a Medicaid integration and taxpayer-savings achievement.",
          "sourceIds": [
            "s-campaign-old-about"
          ]
        },
        {
          "id": "action-medical-biography",
          "date": "2026-05-19",
          "body": "Kansas Historical Society identifies Colyer as a physician/surgeon with international humanitarian medical work; current campaign uses medical biography in the 2026 pitch.",
          "sourceIds": [
            "s-kansapedia",
            "s-campaign-current"
          ]
        },
        {
          "id": "action-cancer-campaign-history",
          "date": "2025-05-16",
          "body": "KCUR/KMUW launch coverage notes this is Colyer's third governor bid and references his prior prostate-cancer campaign suspension and recovery comments.",
          "sourceIds": [
            "s-kcur-launch"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-health-topic-share",
          "platform": "campaign_web/social_harvest",
          "observation": "Local harvest coded health, rural healthcare, medical biography, KanCare, abortion, and adult stem-cell research as 5 of 29 accessible reviewed items, or 17%.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "healthcare-rural-health-kancare"
        },
        {
          "id": "ss-crossref-2",
          "platform": "mobile.twstalker.com",
          "observation": "Topic: campaign / taxes / economy / Trump alignment. (source) 5. a week ago -- Parents and medical decisions post. Engagement: 1 reply, 2 reposts, 28 likes, 590 views, 0 quotes. Topic: parental rights / minors' healthcare. (source) 6. a week ago -- Condolence post for Rep. John Resman. Engagement: 0 replies, 0 reposts, 15 likes, 475 views, 0 quotes. Topic: condolence / Kansas politics. (source) 7. 2 weeks ago --...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "healthcare-rural-health-kancare"
        },
        {
          "id": "ss-crossref-4",
          "platform": "mobile.twstalker.com",
          "observation": "Engagement: 9 replies, 8 reposts, 74 likes, 2K views, 2 quotes. Topic: welfare fraud / government efficiency. (source) 11. 2 weeks ago -- Topeka event post: working families, faithful values, conservative leadership, and lower taxes. Engagement: 4 replies, 1 repost, 14 likes, 848 views, 0 quotes. Topic: campaign event / taxes / values. (source) 12. 2 weeks ago -- Lesser prairie chicken delisting, property rights,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "healthcare-rural-health-kancare"
        }
      ],
      "gap": {
        "summary": "No detailed 2026 Medicaid expansion stance, rural hospital finance plan, insurance plan, maternal health plan, or behavioral-health platform was found beyond broad rural-health positioning and KanCare record claims.",
        "evidenceIds": [
          "action-kancare-record-claim"
        ]
      }
    },
    {
      "id": "public-safety-immigration-accountability",
      "title": "Public Safety, Immigration, Foster Care, Veterans, and Accountability",
      "stated": {
        "text": "Colyer's current plan says he would combat cybercrime targeting seniors and children, make Kansas a state of law and safety, keep criminal illegal aliens out of Kansas, restore accountability across state government, reduce foster children missing or sleeping in offices to zero, support veterans, and invest in Kansas businesses.",
        "sourceIds": [
          "s-campaign-commitment"
        ]
      },
      "actions": [
        {
          "id": "action-2026-public-safety-plan",
          "date": "2026-05-19",
          "body": "Current 25-point plan lists cybercrime, law/order/safety, immigration, foster-care, veterans, and government-accountability commitments.",
          "sourceIds": [
            "s-campaign-commitment"
          ]
        },
        {
          "id": "action-launch-immigration-priorities",
          "date": "2025-05-15",
          "body": "KCUR/KMUW reported Colyer listed securing the border and deporting undocumented immigrants who are criminals among launch priorities.",
          "sourceIds": [
            "s-kcur-launch"
          ]
        },
        {
          "id": "action-2018-primary-history",
          "date": "2018-08-07",
          "body": "Official Kansas SOS results show Colyer/Mann lost the 2018 Republican governor primary by 336 votes.",
          "sourceIds": [
            "s-sos-2018-primary-results"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-olathe-anti-ice-engagement",
          "platform": "X indexed mirror",
          "observation": "Highest visible engagement in the accessible X sample was a quote-post about an Olathe anti-ICE student walkout and students with Trump flags: 42 replies, 32 reposts, 223 likes, 18K views, and 6 quotes.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "public-safety-immigration-accountability"
        },
        {
          "id": "ss-crossref-2",
          "platform": "TikTok",
          "observation": "Topic: agriculture / property rights / regulation. (source) 13. 2 weeks ago -- Wyandotte County State of the Union watch party; SNAP and unemployment-insurance fraud, household affordability, and regulation. Engagement: 4 replies, 7 reposts, 25 likes, 2K views, 2 quotes. Topic: campaign event / fraud / affordability. (source) 14. 2 weeks ago -- Quote-post of Libs of TikTok item about Olathe students, anti-ICE...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "public-safety-immigration-accountability"
        },
        {
          "id": "ss-crossref-4",
          "platform": "mobile.twstalker.com",
          "observation": "Topic: schools / immigration protest / public safety / partisan conflict. (source) 15. 3 weeks ago -- Miracle on Ice anniversary / USA post. Engagement: 2 replies, 0 reposts, 24 likes, 778 views, 0 quotes. Topic: patriotism / sports. (source) 16. 3 weeks ago -- Retweet of USA Hockey Winter Olympics gold post. Topic: sports / patriotism. (source) 17. 3 weeks ago -- Sedgwick County property valuations, mill levies,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "public-safety-immigration-accountability"
        }
      ],
      "gap": {
        "summary": "No detailed foster-care administrative plan, fentanyl plan, corrections plan, veterans-services plan, or cybercrime enforcement plan was found in this pass.",
        "evidenceIds": [
          "action-2026-public-safety-plan"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation. His public background points to a Catholic upbringing in Hays, including attendance at Thomas More Prep and family ties to St. Joseph's Catholic Church, but the available record does not identify a present-day parish.",
  "campaignFinance": {
    "totalRaised": "$2,070,322.09 (2025 year-end / 202601 report)",
    "narrative": "Visible extracted Schedule A loan entries from Jeffrey Colyer total at least $1,055,481.00.; Full donor-industry clustering was not completed; visible sample contributors include physicians, attorneys, real estate professionals, retirees, business owners/executives, finance/private-equity figures, Wichita-area business entities, and PAC entries.",
    "donors": [],
    "reportingPeriod": "2025-01-01 through 2025-12-31",
    "source": "Campaign Finance Receipts and Expenditures Report - Jeff Colyer"
  },
  "sources": [
    {
      "id": "s-kpdc-202601",
      "tier": "primary",
      "url": "https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
      "title": "Campaign Finance Receipts and Expenditures Report - Jeff Colyer",
      "publisher": "Kansas Public Disclosure Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Report covers Jan. 1 through Dec. 31, 2025",
        "Total contributions and other receipts were $2,070,322.09",
        "Total expenditures were $185,812.31",
        "Cash on hand at close was $1,884,509.78",
        "In-kind contributions were $17,493.28",
        "Other transactions were $63,346.68",
        "Schedule A includes multiple candidate loans from Jeffrey Colyer totaling at least $1,055,481.00 in visible extracted entries"
      ]
    },
    {
      "id": "s-kansapedia",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Jeff Colyer",
      "publisher": "Kansas Historical Society",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Colyer was Kansas's 47th governor and was sworn in Jan. 31, 2018",
        "Colyer served in the Kansas House, Kansas Senate, and as lieutenant governor",
        "Biography identifies his medical education and surgeon/humanitarian record"
      ]
    },
    {
      "id": "s-sos-2018-primary-results",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/18elec/PrimaryElectionOfficialResults.pdf",
      "title": "2018 Primary Election Official Results",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Republican governor primary: Kobach/Hartman 128,543 votes, 40.58%; Colyer/Mann 128,207 votes, 40.47%",
        "Official margin between Kobach/Hartman and Colyer/Mann was 336 votes"
      ]
    },
    {
      "id": "s-ksleg-sb284",
      "tier": "primary",
      "url": "https://kslegislature.gov/li_2018/b2017_18/measures/sb284/",
      "title": "SB 284",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Short title: creating the adoption protection act and updating the Kansas adoption and relinquishment act",
        "Bill history records approval by the governor on May 18, 2018"
      ]
    },
    {
      "id": "s-ksleg-sb284-enrolled",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2018/b2017_18/measures/documents/sb284_enrolled.pdf",
      "title": "Senate Bill No. 284 - Enrolled",
      "publisher": "Kansas State Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Enrolled text states no child-placement agency shall be required to participate in a placement that would violate sincerely held religious beliefs, within limits of federal law",
        "Law effective July 1, 2018"
      ]
    },
    {
      "id": "s-campaign-current",
      "tier": "primary",
      "url": "https://www.colyerforgovernor.com/",
      "title": "Jeff Colyer for Governor",
      "publisher": "Colyer for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Current campaign site identifies Colyer as running for Kansas governor in 2026",
        "Site frames campaign around Faith & Family First, lower costs, safer communities, freedom to thrive, healthy rural Kansas, and accountable government",
        "Observed public online activity mapped to Taxes, Affordability, Fraud, and Property Taxes."
      ]
    },
    {
      "id": "s-campaign-commitment",
      "tier": "primary",
      "url": "https://colyerforgovernor.com/colyer-commitment",
      "title": "The Colyer Commitment to Kansas",
      "publisher": "Colyer for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "25-point plan includes welfare fraud, low taxes, property-tax cap, fiscal responsibility, manufacturing/tech jobs",
        "Plan includes cybercrime, law/order/safety, and keeping criminal illegal aliens out of Kansas",
        "Plan includes school curriculum focus, STEM, school options, and parental rights",
        "Plan includes abortion, gun owners/hunters, farmers, foster kids, veterans, and accountable government"
      ]
    },
    {
      "id": "s-campaign-old-about",
      "tier": "primary",
      "url": "https://www.jeffcolyer.com/about",
      "title": "About Jeff",
      "publisher": "Jeff Colyer campaign site",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Older campaign biography describes Hays background, family, surgeon identity, humanitarian work, KanCare, budget, and education/workforce claims"
      ]
    },
    {
      "id": "s-campaign-old-announcements",
      "tier": "primary",
      "url": "https://www.jeffcolyer.com/announcements.html",
      "title": "Announcements",
      "publisher": "Jeff Colyer campaign site",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Still-live 2021 archive contains candidate-controlled statements on abortion, KU adult stem-cell research, oil/gas, COVID-era closures, and conservative identity"
      ]
    },
    {
      "id": "s-kcur-launch",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
      "title": "Former Kansas governor Jeff Colyer jumps into 2026 race",
      "publisher": "KCUR / KMUW",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Colyer formally entered the 2026 race at a Wichita rally",
        "Coverage reports launch priorities including tax cuts, small business, farmers, border/deportation, gender-affirming care for minors, and tech/manufacturing jobs",
        "Coverage says this is Colyer's third bid for governor and references the prior prostate-cancer campaign suspension"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/",
      "title": "X / Jeffcolyer",
      "publisher": "Jeffcolyer",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes, Affordability, Fraud, and Property Taxes.",
        "Colyer's active campaign footprint is split between an older campaign domain, jeffcolyer.com, and a 2026-specific domain, colyerforgovernor.com. The older site links his public X, ",
        "Observed public online activity mapped to Faith, Family, Abortion, Guns, and Religious Liberty."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://mobile.twstalker.com/DrJeffColyer",
      "title": "mobile.twstalker.com / Mobile.Twstalker",
      "publisher": "Mobile.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Education, Parental Rights, and Youth Policy.",
        "1. 2 days ago -- Greensburg classroom visit. Message: Kansas's future starts in classrooms; emphasis on phonics-based reading, math, writing, tech skills, and career preparation. E",
        "Observed public online activity mapped to Faith, Family, Abortion, Guns, and Religious Liberty.",
        "Observed public online activity mapped to Health Care, Rural Health, Medical Biography, and KanCare.",
        "Observed public online activity mapped to Public Safety, Immigration, Foster Care, Veterans, and Accountability."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JEFF_COLYER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jeff-colyer.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
