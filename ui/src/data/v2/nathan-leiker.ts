/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const NATHAN_LEIKER_V2: CandidateFullV2 = {
  "slug": "nathan-leiker",
  "name": "Nathan Leiker",
  "party": "R",
  "position": "Ellis County Commissioner, District 3",
  "electionSlug": "ellis-county-2026-ballot",
  "incumbent": true,
  "occupation": "Vice President, L5 Farms Inc.; farmer / rancher",
  "issues": [
    {
      "id": "i-subdivision-rural-land-use",
      "title": "Subdivision growth, rural land use, and infrastructure capacity",
      "stated": {
        "text": "Leiker's 2022 candidate Q&A presented a limited-government view of\nlocal land use. He said government should have \"very little\nauthority\" over what people do on private property apart from illegal\nactions, while also saying the county should recruit business by\nkeeping taxes stable and showing it can maintain infrastructure. After\nthe 2022 canvass, he said he wanted more focus on roads, bridges, and\nthe infrastructure needed to grow Ellis County.",
        "sourceIds": [
          "s-hayspost-leiker-qa-2022",
          "s-hayspost-2022-canvass"
        ]
      },
      "actions": [
        {
          "id": "a-fairview-no-2025",
          "date": "2025-07-01",
          "body": "Cast the lone no vote on the Fairview Patch final plat. The motion\npassed 2-1, with Berges and Younger voting yes. Hays Post coverage\nof the same issue records Leiker saying the location worked against\nthe comprehensive plan and that the proposal was \"getting far from\nlocalized subdivision patterns.\"",
          "sourceIds": [
            "s-minutes-07012025",
            "s-hayspost-fairview-may2025",
            "s-hayspost-fairview-jul2025"
          ]
        },
        {
          "id": "a-big-creek-rhid-start-2025",
          "date": "2025-06-03",
          "body": "Voted yes to approve Resolution 2025-08, starting the RHID process\nfor Big Creek Estates. The motion passed 3-0. During the discussion,\nLeiker asked about specials versus a RHID and said he had no problem\nsigning the resolution to start the process but would do additional\nhomework before it returned to the commission.",
          "sourceIds": [
            "s-minutes-06032025",
            "s-hayspost-rhid-june2025"
          ]
        },
        {
          "id": "a-big-creek-rhid-final-2025",
          "date": "2025-09-16",
          "body": "Made the motion to approve Resolution 2025-16 establishing the Big\nCreek Estates 3rd Addition RHID, adopting the development plan, and\napproving the development agreement. The motion passed 3-0 after a\npublic hearing where township opposition and resident concerns about\nwater, sewer rates, and roads were recorded in the minutes.",
          "sourceIds": [
            "s-minutes-09162025"
          ]
        },
        {
          "id": "a-big-creek-plat-condition-2026",
          "date": "2026-02-10",
          "body": "Seconded the motion approving the Big Creek Estates preliminary plat\nwith a condition that the developer obtain written approval from the\nBig Creek Improvement District to tie into its sewer system. The\ncondition came from Leiker's discussion-stage request and the motion\npassed 3-0.",
          "sourceIds": [
            "s-minutes-02102026"
          ]
        },
        {
          "id": "a-subdivision-road-standards-2025",
          "date": "2025-08-19",
          "body": "Participated in the county's subdivision road standards discussion,\nraising questions about right-of-way, minimum road standards, and\nhow standards would translate into public-facing documents. The\nsame road-infrastructure thread later shaped CID and subdivision\nmaintenance discussions in early 2026.",
          "sourceIds": [
            "s-minutes-08192025",
            "s-minutes-02102026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Harvest focus: candidate/profile-controlled or attributed messaging, official county commission pages and minutes, public meeting/video references, public social/account signals, agriculture/professional profiles, local news quoting Leiker, and visible absences.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "i-subdivision-rural-land-use"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On why he ran, Leiker cited zoning board, Cottonwood Extension, oil-industry, rural-fire, and family-farm experience, saying he was proud to be from Ellis County and looked forward to serving it. Source: Hays Post, Apr. 12, 2022.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-leiker-announcement-2022"
          ],
          "mappedToIssueId": "i-subdivision-rural-land-use"
        },
        {
          "id": "ss-crossref-5",
          "platform": "myaniml.com",
          "observation": "On cattle technology, he said MyAnIML could spread cattle-health expertise across the farm and that low-stress, less-invasive management drew him to the tool. Source: MyAnIML case study, Jul. 19, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-myaniml-leiker-2023"
          ],
          "mappedToIssueId": "i-subdivision-rural-land-use"
        }
      ],
      "gap": {
        "summary": "Leiker's 2022 private-property language was more limited-government\nthan his 2025-2026 commission record on subdivisions. In office, he\nused comprehensive-plan, infrastructure, RHID, and sewer-condition\ntools to oppose, condition, or structure development rather than\ntreating private-property use as outside county authority.",
        "evidenceIds": [
          "a-fairview-no-2025",
          "a-big-creek-rhid-final-2025",
          "a-big-creek-plat-condition-2026"
        ]
      }
    },
    {
      "id": "i-budget-taxes-services",
      "title": "County budget, taxes, employee retention, and capital projects",
      "stated": {
        "text": "In his 2022 candidate Q&A, Leiker said the county should leave the\nsales tax alone and use those funds for infrastructure, saying Ellis\nCounty was \"too far behind\" to use them in another manner. In 2025\nbudget discussions, he framed county government as a service industry\nand said the county should be respectful in its use of tax dollars.\nHe also said a proposed mill increase could create a \"soft landing\"\nif state or federal grants were pulled.",
        "sourceIds": [
          "s-hayspost-leiker-qa-2022",
          "s-minutes-07082025",
          "s-hayspost-budget-soft-landing"
        ]
      },
      "actions": [
        {
          "id": "a-2026-budget-rnr-2025",
          "date": "2025-09-09",
          "body": "Made the motions to open and close the 2026 Revenue Neutral Rate\nand budget hearing, then made the motion to approve the 2026 General\nFund and Fire District budgets exceeding the revenue-neutral rates.\nThe final budget vote passed 3-0 by named roll call: Berges yes,\nYounger yes, Leiker yes. Leiker said commissioners had spent more\nthan 13 hours going line by line through the budget.",
          "sourceIds": [
            "s-minutes-09092025",
            "s-hayspost-salary-2026"
          ]
        },
        {
          "id": "a-cola-retention-2025",
          "date": "2025-06-10",
          "body": "Made the motion to approve budget adjustments, pay scale updates,\nand Resolution 2025-11 implementing a 2.5 percent COLA for county\nemployees, contract positions, and elected officials. The motion\npassed 2-1, with Berges dissenting. Leiker said he understood the\nconcerns, but that it was easier to retain good employees than to\nreplace them because replacement costs more.",
          "sourceIds": [
            "s-minutes-06102025"
          ]
        },
        {
          "id": "a-budget-proposals-2025",
          "date": "2025-08-05",
          "body": "During the 2026 budget review, proposed full funding for DSNWK and\nHigh Plains Mental Health, full funding of the HPMH CIC from sales\ntax, reevaluation of the scholarship program, contingency rather\nthan line-item treatment for Ameritowne, support for fully funding\nthe Conservation District's original request, and avoiding value\nengineering on capital projects.",
          "sourceIds": [
            "s-minutes-08052025"
          ]
        },
        {
          "id": "a-pbc-bonds-2026",
          "date": "2026-02-03",
          "body": "Made the motion approving Resolution 2026-05 authorizing the sale\nof building project bonds through the Ellis County Public Building\nCommission, with up to $11 million authorized for the Law\nEnforcement Center remodel, EMS Building, Courthouse HVAC,\nAdministrative Building HVAC, and Fire Services Storage Building.\nThe motion passed 3-0.",
          "sourceIds": [
            "s-minutes-02032026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "On sales tax, he said the county should leave the sales tax alone and make it permanent before sunset, while using the funds for capital improvements and residents' quality of life. Source: Hays Post candidate Q&A, Jul. 19, 2022.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-leiker-qa-2022"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On economic development, he said the county should be proactive and that stable taxes, available capital, and infrastructure investment would help business follow. Source: Hays Post candidate Q&A.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-leiker-qa-2022"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "On the 2025 budget, he said the commission tries to limit tax-dollar impact, but also warned against deferring bridge and road needs until failures or accidents happen. Source: Hays Post, Oct. 1, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        }
      ]
    },
    {
      "id": "i-mental-health-jail-costs",
      "title": "Mental health funding and jail-cost avoidance",
      "stated": {
        "text": "Leiker's clearest public mental-health position appears in the 2026\ncounty budget process. Hays Post coverage framed the mental-health\nincrease as \"less expensive than building a new jail,\" while the\nofficial minutes show Leiker proposing full funding for High Plains\nMental Health and the Crisis Intervention Center, with the CIC funded\nfrom sales tax.",
        "sourceIds": [
          "s-hayspost-budget-2026",
          "s-minutes-08052025"
        ]
      },
      "actions": [
        {
          "id": "a-hpmh-cic-budget-2025",
          "date": "2025-08-05",
          "body": "During the 2026 budget review, proposed fully funding High Plains\nMental Health and fully funding the High Plains Mental Health Crisis\nIntervention Center from sales tax. The official minutes record the\nspecific funding preference, while the related Hays Post budget\ncoverage supplies the jail-cost comparison.",
          "sourceIds": [
            "s-minutes-08052025",
            "s-hayspost-budget-2026"
          ]
        },
        {
          "id": "a-hpmh-alternate-2026",
          "date": "2026-01-13",
          "body": "Accepted appointment as the commission's alternate representative\nto the High Plains Mental Health Board for 2026. The same minutes\nidentify Bill Ring as the primary voting member, correcting any\nshorthand that treats Leiker as the primary board representative.",
          "sourceIds": [
            "s-minutes-01132026"
          ]
        },
        {
          "id": "a-budget-rollcall-mental-health-2025",
          "date": "2025-09-09",
          "body": "Voted yes by named roll call on the 2026 county budget after the\nAugust budget-review process that included his HPMH and CIC funding\nproposals. The budget exceeded the revenue-neutral rate and passed\n3-0.",
          "sourceIds": [
            "s-minutes-09092025",
            "s-minutes-08052025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "On the 2026 budget draft, he said a mill increase gave the county flexibility for a soft landing if state or federal grants were pulled. Source: Hays Post, Aug. 14, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-budget-soft-landing"
          ],
          "mappedToIssueId": "i-mental-health-jail-costs"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On property tax relief, he said counties keep losing tools and then get told they are not doing it right. Source: Hays Post, Dec. 22, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-mental-health-jail-costs"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Public messaging is concentrated in county operations, agriculture, infrastructure, zoning, public works, taxes, and development rather than social-media campaigning.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "i-mental-health-jail-costs"
        }
      ]
    },
    {
      "id": "i-process-expertise-procurement",
      "title": "Process discipline, outside expertise, and procurement",
      "stated": {
        "text": "Leiker's public governing style is process-heavy. In 2022 he warned\nthat transparency could become \"less transparent\" and be abused. In\nthe 2025 mill-levy discussion, he said county government is a service\nindustry and that commissioners should be respectful in their use of\ntax dollars. In 2026, during the Tallgrass solar review, he said the\ncommissioners were not experts and were seeking expertise to guide\ntheir decisions.",
        "sourceIds": [
          "s-hayspost-leiker-qa-2022",
          "s-minutes-07082025",
          "s-minutes-01132026",
          "s-hayspost-salary-2026"
        ]
      },
      "actions": [
        {
          "id": "a-solar-expertise-2026",
          "date": "2026-02-03",
          "body": "Made the motion approving agreements with Tallgrass Development,\nFoulston Attorneys, and AcreStrong to assist with review,\ndocumentation, and negotiations for the Tallgrass solar project.\nThe agreement required Tallgrass to reimburse the county up to\n$110,000 for legal and consulting services. Leiker said the motion\nwas not accepting the project but protecting the county.",
          "sourceIds": [
            "s-minutes-02032026",
            "s-hayspost-solar-feb2026"
          ]
        },
        {
          "id": "a-bridge-homework-2025",
          "date": "2025-05-20",
          "body": "During the 12th Street Bridge and O'Loughlin Elementary discussion,\nsaid the county needed to partner with the City of Hays because\ntraffic patterns would change, and said commissioners needed to do\nmore homework before deciding whether to close the bridge. The\ncommission decided not to include 12th Street for closure on the\nSaline River bridge grant application.",
          "sourceIds": [
            "s-minutes-05202025"
          ]
        },
        {
          "id": "a-verizon-procurement-2025",
          "date": "2025-07-01",
          "body": "Made the motion to approve a two-year Verizon cell phone contract.\nThe motion passed 3-0. The staff presentation framed the switch as\nnet savings compared with Nex-Tech Wireless plus additional\nsecondary savings.",
          "sourceIds": [
            "s-minutes-07012025"
          ]
        },
        {
          "id": "a-road-grader-bidding-2025",
          "date": "2025-07-01",
          "body": "Made the motion to purchase a 2025 Caterpillar road grader through\nSourcewell government pricing, and during discussion asked when the\nnext machine would be rebid. Leiker said he wanted the next fall\npurchase opened to competitive bidding.",
          "sourceIds": [
            "s-minutes-07012025"
          ]
        },
        {
          "id": "a-public-works-restructure-2025",
          "date": "2025-07-01",
          "body": "Made the motion approving the Public Works department restructure\nand attached job descriptions. The 3-0 vote created or revised job\npathways including heavy equipment operator, mechanic, and noxious\nweed succession structures.",
          "sourceIds": [
            "s-minutes-07012025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Plat approval process, Hays Post, Mar. 3, 2026",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-plat-process-mar2026"
          ],
          "mappedToIssueId": "i-process-expertise-procurement"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post — plat approval process update (Mar 3, 2026) — secondary",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-plat-process-mar2026"
          ],
          "mappedToIssueId": "i-process-expertise-procurement"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "What was observed: During the 2026 budget process Leiker publicly tied county mental-health spending to jail-cost avoidance. In the same January 2026 reorganization, he accepted the commission's appointment to the High Plains Mental Health board for 2026. (Younger used very similar phrasing in the same coverage; the framing appears to have been a shared commission position rather than a Leiker original, but he is...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-commission-page"
          ],
          "mappedToIssueId": "i-process-expertise-procurement"
        }
      ]
    }
  ],
  "whereTheyWorship": "No confirmed current church affiliation surfaced in public sources. Prior\nresearch points strongly to Catholic background through TMP-Marian and\nfamily ties, but current parish membership is not verified and should not\nbe stated as fact.\n",
  "campaignFinance": {
    "totalRaised": "Not itemized in public web records",
    "narrative": "County commission races do not appear in FEC data, and Kansas state\ncampaign-finance portals do not expose county-office itemized records in\nthe same way state/federal races do. Ellis County Clerk filings would need\nto be requested locally if the actual appointment-of-treasurer or\nbelow-threshold affidavit is needed. Do not imply hidden donors from this\nabsence.",
    "donors": [],
    "undisclosed": "No donor-by-donor public web ledger was found in the reviewed local records.",
    "reportingPeriod": "Most recent local cycle reviewed",
    "source": "Candidate memory v2 issue file and local filing-system notes"
  },
  "socialResearchNote": "No verified candidate-controlled campaign website, Facebook page, X,\nInstagram, Threads, TikTok, YouTube, or Substack surfaced in the reviewed\npublic record. The county commission page and county minutes are therefore\nthe most reliable current public record of Leiker's governing voice.\n",
  "sources": [
    {
      "id": "s-ellis-commission-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellis County Commission - Official Page",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Nathan Leiker serves as Ellis County Commissioner for District 3",
        "Ellis County publishes commission agendas, minutes, and meeting livestream links"
      ]
    },
    {
      "id": "s-minutes-05202025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_05202025-674",
      "title": "Ellis County Board of County Commissioners Minutes - May 20, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "12th Street Bridge and O'Loughlin Elementary discussion",
        "Leiker said the county needed to partner with the City of Hays on traffic changes",
        "Leiker said the commission needed to do more homework before deciding whether to close the bridge",
        "Initial subdivision road infrastructure discussion"
      ]
    },
    {
      "id": "s-minutes-06032025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06032025-676",
      "title": "Ellis County Board of County Commissioners Minutes - June 3, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Big Creek Estates RHID Resolution 2025-08 approved 3-0 to start the process",
        "Leiker said he had no problem starting the RHID process but would do additional homework",
        "Discharge of fireworks resolution passed 3-0 with Leiker seconding"
      ]
    },
    {
      "id": "s-minutes-06102025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06172025-678",
      "title": "Ellis County Board of County Commissioners Minutes - June 10, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Secured Loads Policy passed 3-0 with Leiker seconding",
        "Victoria road improvement initial motion failed 1-2 with Leiker as lone yes",
        "2.5 percent COLA and Resolution 2025-11 passed 2-1 with Berges dissenting",
        "Leiker said retaining good employees costs less than replacing them"
      ]
    },
    {
      "id": "s-minutes-07012025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07012025-681",
      "title": "Ellis County Board of County Commissioners Minutes - July 1, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Fairview Patch final plat passed 2-1 with Leiker as the no vote",
        "Verizon two-year cell phone contract passed 3-0 with Leiker as motion-maker",
        "Public Works restructure passed 3-0 with Leiker as motion-maker",
        "Road grader purchase passed 3-0 with Leiker as motion-maker",
        "Leiker asked for the next grader purchase to be opened to competitive bidding"
      ]
    },
    {
      "id": "s-minutes-07082025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07082025-683",
      "title": "Ellis County Board of County Commissioners Minutes - July 8, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "2026 mill levy discussion",
        "Leiker said county government is a service industry",
        "Leiker said the county should be respectful in its use of tax dollars",
        "Leiker cited pressure from oil and agriculture downturns"
      ]
    },
    {
      "id": "s-minutes-08052025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08052025-689",
      "title": "Ellis County Board of County Commissioners Minutes - August 5, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Big Creek RHID hearing-setting Resolution 2025-13 passed 3-0 with Leiker seconding",
        "Leiker asked whether an entity veto would stop the RHID process",
        "Leiker proposed fully funding DSNWK and High Plains Mental Health",
        "Leiker proposed fully funding the High Plains Mental Health CIC from sales tax",
        "Leiker supported fully funding the Conservation District's original request",
        "Leiker said he did not want to value engineer capital projects"
      ]
    },
    {
      "id": "s-minutes-08192025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08192025-693",
      "title": "Ellis County Board of County Commissioners Minutes - August 19, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Subdivision road standards and road-infrastructure discussion continued",
        "Leiker raised right-of-way and minimum-standard implementation questions"
      ]
    },
    {
      "id": "s-minutes-09092025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_09092025-696",
      "title": "Ellis County Board of County Commissioners Minutes - September 9, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "2026 General Fund and Fire District budgets exceeded the revenue-neutral rate",
        "Budget approval passed 3-0 with named roll call: Berges yes, Younger yes, Leiker yes",
        "Leiker was motion-maker on opening the hearing, closing the hearing, and approving the budget",
        "Leiker said commissioners spent over 13 hours reviewing line items",
        "Resolution 2025-14 set the General Fund levy at 35.595 mills"
      ]
    },
    {
      "id": "s-minutes-09162025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_09162025-698",
      "title": "Ellis County Board of County Commissioners Minutes - September 16, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Big Creek Estates RHID Resolution 2025-16 approved 3-0",
        "Leiker made the motion establishing the RHID and approving the development agreement",
        "Public comments and Big Creek Township opposition were recorded in the minutes",
        "Leiker asked about water-study requirements and platting process"
      ]
    },
    {
      "id": "s-minutes-01132026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01132026-721",
      "title": "Ellis County Board of County Commissioners Minutes - January 13, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker appointed Ellis County Commission Vice-Chair for 2026",
        "Leiker appointed High Plains Mental Health Board alternate",
        "Bill Ring listed as High Plains Mental Health primary voting member",
        "Leiker said commissioners are not experts and were seeking expertise for the Tallgrass solar review",
        "GAAP waiver Resolution 2026-03 passed 3-0",
        "Elected Official Salaries Resolution 2026-04 passed with Leiker as motion-maker"
      ]
    },
    {
      "id": "s-minutes-02032026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02032026-726",
      "title": "Ellis County Board of County Commissioners Minutes - February 3, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Tallgrass solar reimbursement, Foulston Attorneys, and AcreStrong agreements approved 3-0",
        "Leiker made the motion to approve the solar review agreements",
        "Leiker said the agreements were not accepting the project but protecting the county",
        "Building project bond-sale Resolution 2026-05 passed 3-0 with Leiker as motion-maker",
        "Resolution 2026-05 authorized up to $11 million in public building commission bonds"
      ]
    },
    {
      "id": "s-minutes-02102026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02102026-729",
      "title": "Ellis County Board of County Commissioners Minutes - February 10, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Big Creek Estates preliminary plat approved 3-0",
        "Leiker asked that written approval from the Big Creek Improvement District for sewer tie-in be included",
        "Leiker seconded the preliminary plat motion with the sewer-tie-in condition",
        "CID parameters and subdivision road standards discussion continued"
      ]
    },
    {
      "id": "s-hayspost-leiker-qa-2022",
      "tier": "primary",
      "url": "https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17",
      "title": "Hays Post Candidate Q&A: Nathan Leiker",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker said the county should leave the sales tax alone",
        "Leiker said infrastructure funds should not be used for other purposes because the county was too far behind",
        "Leiker said the county should be proactive in recruiting new business",
        "Leiker opposed expanding the county commission from three members to five",
        "Leiker said government should have very little authority over what people do on private property apart from illegal actions",
        "Leiker said transparency could become less transparent and be abused",
        "Observed public online activity mapped to County budget, taxes, employee retention, and capital projects."
      ]
    },
    {
      "id": "s-hayspost-leiker-announcement-2022",
      "tier": "primary",
      "url": "https://hayspost.com/posts/aedbf614-0ea1-4a7c-8932-156b271a4709",
      "title": "Nathan Leiker Campaign Announcement",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker presented himself as a local farm and ranch operator",
        "Leiker cited zoning, Extension, oil-field, and rural-fire experience",
        "Leiker said he was proud to be from Ellis County",
        "Observed public online activity mapped to Subdivision growth, rural land use, and infrastructure capacity."
      ]
    },
    {
      "id": "s-hayspost-2022-canvass",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
      "title": "Berges, Leiker presumptive new commissioners after canvass",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker won the 2022 Republican primary for Ellis County Commission District 3",
        "Leiker said he wanted focus on roads, bridges, and infrastructure needed to grow the county",
        "Leiker said the county should work with Hays on water and higher-paying jobs"
      ]
    },
    {
      "id": "s-hayspost-fairview-may2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f685bbb-15b3-4649-acc2-fae5a0efb0bd",
      "title": "Fairview Patch preliminary plat coverage",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker said the Fairview Patch location worked against the comprehensive plan"
      ]
    },
    {
      "id": "s-hayspost-fairview-jul2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fa81e374-6f44-4875-8984-b7869e10c11d",
      "title": "Fairview Patch final plat coverage",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker said Fairview Patch was getting far from localized subdivision patterns",
        "Leiker cast the lone no vote on the final plat"
      ]
    },
    {
      "id": "s-hayspost-rhid-june2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/f77c1ad9-bc7d-4028-9135-866e1584176c",
      "title": "Big Creek Estates RHID coverage",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker said he had no problem seeing the RHID start but was not sure he would support it after the public hearing",
        "Leiker said he would be doing more homework on the RHID"
      ]
    },
    {
      "id": "s-hayspost-budget-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
      "title": "Ellis County approves 2026 budget and mill levy",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Hays Post reported the 2026 budget and mill-levy increase",
        "Mental-health increase was framed in coverage as less expensive than building a new jail"
      ]
    },
    {
      "id": "s-hayspost-budget-soft-landing",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7c57b3c8-1314-4bd7-8501-f559ff7c176d",
      "title": "Ellis County budget draft and mill levy discussion",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker said the proposed mill increase could provide a soft landing if state or federal grants were pulled",
        "Observed public online activity mapped to Mental health funding and jail-cost avoidance."
      ]
    },
    {
      "id": "s-hayspost-salary-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Ellis County salary adjustments and commission reorganization",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker quoted on nearly 13 hours of budget review",
        "Leiker quoted on commissioners not being experts in solar review",
        "Leiker identified as vice-chair after 2026 reorganization"
      ]
    },
    {
      "id": "s-hayspost-solar-feb2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ad9fcb9-1308-464e-8cf4-d3de9e986b40",
      "title": "Ellis County solar review agreements and bond projects",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "County considered Tallgrass solar review reimbursement and consultant agreements",
        "Leiker framed the agreements as protecting the county"
      ]
    },
    {
      "id": "s-hayspost-plat-process-mar2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d4ad7eb6-4af1-419c-b0ec-e8786acdca3d",
      "title": "Ellis County plat approval process update",
      "publisher": "Hays Post",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker suggested pausing further zoning certificate approvals to reevaluate the regulatory framework",
        "Observed public online activity mapped to Process discipline, outside expertise, and procurement."
      ]
    },
    {
      "id": "s-myaniml-leiker-2023",
      "tier": "secondary",
      "url": "https://myaniml.com/Kansas_Rancher_Installs_MyAnIML_to_Save.pdf",
      "title": "Kansas Rancher Installs MyAnIML Case Study",
      "publisher": "MyAnIML",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "Leiker discussed cattle-health technology in terms of labor limits, earlier treatment, and low-stress handling",
        "Observed public online activity mapped to Subdivision growth, rural land use, and infrastructure capacity."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d81583db-0414-44c6-8dac-7d4ad565ed13",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to County budget, taxes, employee retention, and capital projects.",
        "On the 2025 budget, he said the commission tries to limit tax-dollar impact, but also warned against deferring bridge and road needs until failures or accidents happen. Source: Hay"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0dc3bf76-bd9f-4190-a0c7-231ca8172d18",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Mental health funding and jail-cost avoidance.",
        "On property tax relief, he said counties keep losing tools and then get told they are not doing it right. Source: Hays Post, Dec. 22, 2025."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(NATHAN_LEIKER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[nathan-leiker.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
