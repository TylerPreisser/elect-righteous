/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const MICHAEL_BERGES_V2: CandidateFullV2 = {
  "slug": "michael-berges",
  "name": "Michael Berges",
  "party": "R",
  "position": "Ellis County Commissioner, District 1",
  "electionSlug": "ellis-county-2026-ballot",
  "incumbent": true,
  "occupation": "",
  "issues": [
    {
      "id": "i-budget-taxes-services",
      "title": "County budget, taxes, employee pay, and service levels",
      "stated": {
        "text": "Berges's 2022 candidate answers treated the county sales-tax sunset\nas a long-range budget question rather than a fixed promise. He said\nfuture options could include cutting services, cutting employees,\noffsetting with mill-levy increases, asking voters for a 10-year\nextension, or considering a permanent sales tax. He also said the\nsales taxes had helped stabilize the county budget and that the path\nforward should be worked through with administrators, commissioners,\nand the community.",
        "sourceIds": [
          "s-hayspost-berges-qa-2022"
        ]
      },
      "actions": [
        {
          "id": "a-mill-levy-discussion-2025",
          "date": "2025-07-08",
          "body": "Presented the county's 2026 mill-levy discussion. The official\nagenda cover sheet says Berges asked commissioners to consider\nadding one to two mills to prepare for capital projects and preserve\ncurrent service levels if state legislation limited local-government\nrevenue tools.",
          "sourceIds": [
            "s-agenda-07082025"
          ]
        },
        {
          "id": "a-budget-publication-2025",
          "date": "2025-08-19",
          "body": "Moved to allow the County Clerk to publish the 2026 Ellis County\nGeneral Fund and Fire District budgets for the September 9 budget\nhearings. The motion passed 3-0.",
          "sourceIds": [
            "s-minutes-08192025"
          ]
        },
        {
          "id": "a-2026-budget-rnr-2025",
          "date": "2025-09-09",
          "body": "Voted yes by named roll call on the 2026 General Fund and Fire\nDistrict budgets exceeding the revenue-neutral rates and on\nResolution 2025-14. The motion passed 3-0 after public comments\nfrom residents at the hearing.",
          "sourceIds": [
            "s-minutes-09092025",
            "s-hayspost-budget-approved-2025"
          ]
        },
        {
          "id": "a-salary-resolution-2026",
          "date": "2026-01-13",
          "body": "Seconded and voted for Resolution 2026-04 setting 2026 salary step\nadjustments for Ellis County elected officials. The resolution\nlisted County Commissioner District 1 at Pay Grade 35, Step 4,\n$20,746, and passed 3-0.",
          "sourceIds": [
            "s-minutes-01132026"
          ]
        },
        {
          "id": "a-2025-budget-explanation",
          "date": "2024-10-01",
          "body": "In coverage of the 2025 county budget, which reduced the mill levy\nwhile exceeding revenue neutral, Berges connected budget increases\nmainly to employee wages and benefits and criticized treating\nrevenue neutral as a simple taxpayer protection.",
          "sourceIds": [
            "s-hayspost-budget-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "LinkedIn",
          "observation": "LinkedIn / professional web: No verified candidate-controlled LinkedIn profile surfaced in search results. The strongest professional identity source is the Northwest Kansas Economic Innovation Center staff page, which lists Berges as Business Services Director.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Observation 7 - Candidate-attested 2022 platform centered infrastructure, budget stabilization, sheriff/jail, Grow Hays, and intergovernmental cooperation",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "What was observed: In the 2022 Hays Post candidate profile, Berges supported earmarking sales-tax revenue for infrastructure upkeep, named bridges and roads, described sales-tax extension/permanent-sales-tax questions as future options, identified sheriff/jail facility needs as a major project, supported more proactive economic development funding through Grow Hays, and discussed cooperation with Ellis, Hays,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-budget-taxes-services"
        }
      ],
      "gap": {
        "summary": "Berges's fiscal record is best described as service-and-capital\nplanning rather than a simple tax-cut or tax-increase frame. He has\nsupported mill-levy and salary actions in office while publicly tying\nthem to infrastructure, service levels, and employee retention. No\ndonor evidence was found that would support a funding-influence claim.",
        "evidenceIds": [
          "a-mill-levy-discussion-2025",
          "a-2026-budget-rnr-2025",
          "a-salary-resolution-2026"
        ]
      }
    },
    {
      "id": "i-infrastructure-roads-land-use",
      "title": "Roads, bridges, subdivisions, and infrastructure growth",
      "stated": {
        "text": "Berges said in 2022 that he supported continuing to earmark portions\nof the county sales tax for infrastructure upkeep, naming bridges,\nroads, and possibly railroad crossings. He also said Ellis County\nshould build infrastructure reserves so it can address failures,\npursue grants, and take care of multiple projects when needed.",
        "sourceIds": [
          "s-hayspost-berges-qa-2022"
        ]
      },
      "actions": [
        {
          "id": "a-fairview-patch-yes-2025",
          "date": "2025-07-01",
          "body": "Seconded and voted with the majority to approve the Fairview Patch\nfinal plat and Resolution 2025-12. The motion passed 2-1, with\nLeiker recorded as the no vote.",
          "sourceIds": [
            "s-minutes-07012025"
          ]
        },
        {
          "id": "a-subdivision-road-discussion-2025",
          "date": "2025-08-19",
          "body": "Opened the continued discussion on county-maintained subdivision\nroads, identified 21 subdivisions for which the county is\nresponsible, and asked staff to return later with cost estimates for\n280th Ave after public input and right-of-way discussion.",
          "sourceIds": [
            "s-minutes-08192025"
          ]
        },
        {
          "id": "a-ellis-road-support-letter-2025",
          "date": "2025-08-19",
          "body": "Asked the commissioners to sign a support letter for the City of\nEllis road project. The city was applying for a cost-share grant for\nWest 2nd Street, and the minutes say all commissioners agreed to\nsign the letter.",
          "sourceIds": [
            "s-minutes-08192025"
          ]
        },
        {
          "id": "a-right-of-way-update-2026",
          "date": "2026-02-17",
          "body": "During road-tour discussion, asked for an update on the right-of-way\nproject. Staff described a systematic process beginning in Township\n11 and projected a September update to the commission.",
          "sourceIds": [
            "s-minutes-02172026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Infrastructure: He said yes, he would continue earmarking sales-tax portions for infrastructure upkeep, mainly bridges, roads, and possibly railroad crossings, and favored building reserves to match grants and address failures.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-infrastructure-roads-land-use"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Economic development: He said the commission should be more proactive, especially through stable funding for Grow Hays and related groups, while also considering tax incentives, zoning changes, infrastructure, and rural water access.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-infrastructure-roads-land-use"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "2022 Q&A on infrastructure: Berges said he would continue favoring earmarked sales-tax funds for infrastructure because bridges, roads, and possibly railroad crossings needed attention. Source: s-hayspost-berges-qa-2022.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-infrastructure-roads-land-use"
        }
      ],
      "gap": {
        "summary": "The record aligns with Berges's 2022 infrastructure emphasis, but it\nalso places him on the pro-approval side of at least one subdivision\nvote where Leiker dissented. That contrast is a land-use and\ncomprehensive-planning difference between the two county commission\nincumbents, not evidence of motive.",
        "evidenceIds": [
          "a-fairview-patch-yes-2025",
          "a-subdivision-road-discussion-2025"
        ]
      }
    },
    {
      "id": "i-public-safety-courts-recovery",
      "title": "Public safety, sheriff facilities, courts, and recovery services",
      "stated": {
        "text": "In 2022, Berges identified sheriff's department facility needs as a\nmajor county issue. He discussed the possibility that a Hays police\nrelocation could affect shared space, said he would be open to\nexpansion or a new law/judicial/detention center in the direction\nfavored by the sheriff, and noted county costs for housing inmates\nelsewhere.",
        "sourceIds": [
          "s-hayspost-berges-qa-2022"
        ]
      },
      "actions": [
        {
          "id": "a-opioid-funds-training-2026",
          "date": "2026-02-17",
          "body": "Seconded and voted for use of approximately $1,828.29 in opioid\nfunds to send three sheriff's officers to the Kansas Narcotics\nOfficers Association yearly conference. The motion passed 3-0.",
          "sourceIds": [
            "s-minutes-02172026"
          ]
        },
        {
          "id": "a-recovery-court-grant-2026",
          "date": "2026-02-17",
          "body": "Was present when the commission received information on a $25,211.50\nSpecialty Court Funding award for recovery court. The minutes record\nthat the award would help with training, a software app, fuel\nincentives, other incentives, gift cards, and behavior therapy.",
          "sourceIds": [
            "s-minutes-02172026"
          ]
        },
        {
          "id": "a-retreat-sheriff-staffing-2026",
          "date": "2026-04-08",
          "body": "Attended the county retreat where sheriff staffing was discussed.\nThe minutes record an undersheriff proposal for three additional\nstaff, with one position funded by fingerprint fees and two needing\nbudget funding.",
          "sourceIds": [
            "s-minutes-04082026"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Berges's public-safety record includes smaller concrete actions on\nopioid-fund training and recovery-court grant context, while the\nlarger jail or law-enforcement facility question remains open in the\nreviewed record. No final vote on a jail expansion or new detention\nfacility was confirmed in this pass.",
        "evidenceIds": [
          "a-opioid-funds-training-2026",
          "a-retreat-sheriff-staffing-2026"
        ]
      }
    },
    {
      "id": "i-economic-development-housing-growth",
      "title": "Economic development, housing, and intergovernmental cooperation",
      "stated": {
        "text": "Berges said in 2022 that the county commission should be more\nproactive in economic development, especially through stable funding\nfor Grow Hays and related organizations. He also named tax incentives,\nzoning changes, infrastructure, and rural water access as tools that\ncould affect business, housing, and growth. He described city-county\ncooperation as important because city residents are also county\nresidents.",
        "sourceIds": [
          "s-hayspost-berges-qa-2022",
          "s-hayspost-berges-announcement-2022"
        ]
      },
      "actions": [
        {
          "id": "a-grow-hays-funding-2025",
          "date": "2025-08-14",
          "body": "Hays Post reported that Berges said Grow Hays contacted the\ncommission after a budget discussion and asked that $5,000 be\nreinstated. The commission later reinstated Grow Hays' $165,000\nrequest and maintained the Ellis County Historical Society\nallocation at $115,000.",
          "sourceIds": [
            "s-hayspost-budget-draft-2025"
          ]
        },
        {
          "id": "a-ellis-road-cooperation-2025",
          "date": "2025-08-19",
          "body": "Asked commissioners to sign a support letter for the City of Ellis\nroad project cost-share grant, a concrete city-county cooperation\naction tied to road infrastructure.",
          "sourceIds": [
            "s-minutes-08192025"
          ]
        },
        {
          "id": "a-professional-economic-development-role",
          "date": "2026-05-19",
          "body": "Northwest Kansas Economic Innovation Center lists Berges as Business\nServices Director, describing work to support businesses across a\n26-county service area. This is professional background rather than\nan official county vote.",
          "sourceIds": [
            "s-nwkeici-staff"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Searches covered official county pages, Ellis County agenda/minutes PDFs, Hays Post archives, Northwest Kansas Economic Innovation Center, League of Kansas Municipalities, Kansas Public Disclosure Commission web search results, FEC-style/campaign-finance queries, Facebook/search-indexed social traces, and general web searches for professional, property/business, court/legal, news, written-record,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-economic-development-housing-growth"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Findings: NWKEICI staff page lists Berges as Business Services Director at the Innovation Center with economic-development and business-services duties across 26 counties. Hays Post 2022 materials list prior work with Development Services of Northwest Kansas and experience in financial advice, nonprofits, grants, and city commission service.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-economic-development-housing-growth"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Findings: No 2026 endorsements surfaced. 2022 Hays Post announcement says Berges stated he was encouraged to run by many who knew his interest in community/county issues; no endorsing individuals or organizations are listed. His professional/community network includes NWKEICI/Innovation Center, Grow Hays policy discussions, ARC of Central Plains, Tiger Takedown Club, St. Joseph/First United Methodist context, and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-economic-development-housing-growth"
        }
      ],
      "gap": {
        "summary": "Berges's economic-development profile combines public office and\nprofessional work in regional business services. The reviewed record\ndoes not provide donor data or business-interest records that would\nsupport a conflict or influence claim. Keep the overlap descriptive\nunless later filings add specific evidence.",
        "evidenceIds": [
          "a-grow-hays-funding-2025",
          "a-professional-economic-development-role"
        ]
      }
    },
    {
      "id": "i-public-communication-social-footprint",
      "title": "Public communication and limited campaign-controlled social footprint",
      "stated": {
        "text": "Berges's accessible public message is preserved more through meeting\nrecords, candidate Q&A, and local news than through a verified current\ncampaign-controlled social feed. His 2022 Q&A gave detailed answers on\ncounty operations, and a 2020 Hays city-commission article records him\nmaking a personal public-health plea while stopping short of asking\nfor a city ordinance.",
        "sourceIds": [
          "s-hayspost-berges-qa-2022",
          "s-hayspost-city-mask-2020"
        ]
      },
      "actions": [
        {
          "id": "a-budget-hearing-public-response-2025",
          "date": "2025-09-09",
          "body": "After the 2026 budget hearing, the official minutes say Berges\nthanked those who spoke, apologized for not being present in person,\nsaid he took their comments seriously, and invited the public to a\nSeptember 23 work session.",
          "sourceIds": [
            "s-minutes-09092025"
          ]
        },
        {
          "id": "a-city-mask-public-plea-2020",
          "date": "2020-07-10",
          "body": "As a Hays city commissioner before his county term, Berges made a\npersonal plea for mask-wearing during COVID-19 coverage while saying\nhe was not at the point of asking fellow commissioners for a city\nordinance.",
          "sourceIds": [
            "s-hayspost-city-mask-2020"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "Facebook: Search surfaced references to a public facebook.com/EllisCountyDistrict1/ page in another candidate's sleuth pass, but this pass could not verify page content or candidate-controlled post history from logged-out browser/search results. Do not treat the page as evidence of posts, likes, follows, or comments unless a later worker captures visible content directly.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-public-communication-social-footprint"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Campaign site: No dedicated 2026 campaign website surfaced. 2022 campaign material is mainly preserved through Hays Post's filing announcement and candidate Q&A.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-public-communication-social-footprint"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Other platforms: No verified candidate-controlled X/Twitter, Instagram, Threads, TikTok, YouTube, Reddit, or newsletter presence surfaced in targeted searches.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ellis-candidate-filings-page"
          ],
          "mappedToIssueId": "i-public-communication-social-footprint"
        }
      ],
      "gap": {
        "summary": "No verified current candidate-controlled posts, comments, likes,\nfollows, or engagement metrics were captured. A possible District 1\nFacebook page and a Hays Daily News Facebook reference remain leads,\nbut they should not be used as evidence until content is directly\ncaptured.",
        "evidenceIds": [
          "a-budget-hearing-public-response-2025"
        ]
      }
    }
  ],
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "No itemized donor table, treasurer filing, or 2026 campaign-finance report\nfor Berges's county commission campaign was found in the reviewed public\nweb sources. This should be treated as a records gap, not as evidence that\nno contributions exist.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Candidate Filings"
  },
  "sources": [
    {
      "id": "s-ellis-candidate-filings-page",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Candidate Filings",
      "publisher": "Ellis County Clerk / Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County publishes current candidate filings through the county election office",
        "The page links the 2026 Primary Election Candidates PDF"
      ]
    },
    {
      "id": "s-minutes-07012025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07012025-681",
      "title": "Ellis County Board of County Commissioners Minutes - July 1, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Berges served as chair for the July 1, 2025 meeting",
        "Fairview Patch final plat and Resolution 2025-12 passed 2-1",
        "Berges seconded the Fairview Patch final plat motion; Leiker was the no vote"
      ]
    },
    {
      "id": "s-agenda-07082025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_07082025-683",
      "title": "Ellis County Commission Agenda Packet - July 8, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026 Mill Levy Discussion was presented by Michael Berges",
        "Agenda cover sheet says Berges asked commissioners to consider adding one to two mills for capital projects and service-level risk"
      ]
    },
    {
      "id": "s-minutes-08192025",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08192025-693",
      "title": "Ellis County Board of County Commissioners Minutes - August 19, 2025",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Berges moved to authorize publication of the 2026 Ellis County General Fund and Fire District budgets",
        "Berges asked commissioners to sign a support letter for the City of Ellis road project",
        "Berges opened continued discussion on county-maintained subdivision roads",
        "Berges identified 21 subdivisions for which the county is responsible"
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
        "2026 General Fund and Fire District budgets exceeded revenue-neutral rates",
        "Budget approval passed 3-0 by named roll call: Berges yes, Younger yes, Leiker yes",
        "Berges thanked hearing participants, apologized for remote attendance, and invited public participation in a later work session"
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
        "Berges seconded Resolution 2026-04 setting elected-official salary step adjustments",
        "County Commissioner District 1 salary was listed at Pay Grade 35, Step 4, $20,746",
        "Neal Younger was selected chair, Nathan Leiker vice-chair, and Berges was listed as member for 2026"
      ]
    },
    {
      "id": "s-minutes-02172026",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02172026-730",
      "title": "Ellis County Board of County Commissioners Minutes - February 17, 2026",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Berges was present for recovery court grant presentation",
        "Berges seconded opioid-fund use for three sheriff's officers to attend Kansas Narcotics Officers Association training",
        "Berges asked for right-of-way project update during road-tour discussion"
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
        "Berges attended the April 8, 2026 county retreat",
        "Retreat discussion included possible transient guest tax, fairgrounds/Historical Society funding, motor-vehicle fee, and sheriff staffing"
      ]
    },
    {
      "id": "s-hayspost-berges-announcement-2022",
      "tier": "primary",
      "url": "https://hayspost.com/posts/cc38c04a-09f2-41be-8708-04cc33013376",
      "title": "Hays commissioner announces run for Ellis County seat",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Berges announced he had filed for the 2022 Ellis County Commission District 1 race",
        "Berges identified housing, roads and bridges, facility plans, growth, emergency services, economic vitality, innovation, and cooperation as campaign themes",
        "The article identified Berges as Hays vice-mayor, Development Services of Northwest Kansas employee, ARC of Central Plains treasurer, Tiger Takedown Club chair, St. Joseph Catholic Church member, and participant at First United Methodist Church"
      ]
    },
    {
      "id": "s-hayspost-berges-qa-2022",
      "tier": "primary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Candidate Profile: Ellis County Commission - Michael Berges",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Berges discussed sales-tax sunset options, including cuts, mill-levy offset, voter-approved extension, or permanent sales tax",
        "Berges said he supported earmarking sales-tax revenue for infrastructure upkeep",
        "Berges identified sheriff's department facility needs and outside inmate-housing costs as a major issue",
        "Berges said the commission should be more proactive in economic development through Grow Hays funding, incentives, zoning changes, infrastructure, and water access",
        "Berges discussed intergovernmental cooperation with Ellis, Hays, Victoria, USD 489, and grant coalitions",
        "Berges cited city commission budget cycles, financial-advice experience, nonprofit grant writing, and public-service experience"
      ]
    },
    {
      "id": "s-hayspost-budget-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d81583db-0414-44c6-8dac-7d4ad565ed13",
      "title": "Ellis County Commission approves 2025 budget with reduction in mill levy",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The 2025 budget reduced the mill levy by 0.639 mills while exceeding the revenue-neutral rate",
        "Berges connected budget increases to employee wages and benefits",
        "Berges criticized revenue-neutral-rate framing"
      ]
    },
    {
      "id": "s-hayspost-budget-draft-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7c57b3c8-1314-4bd7-8501-f559ff7c176d",
      "title": "Ellis County Commission discuss final budget draft with mill levy increase",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Draft 2026 budget had a proposed general-fund mill levy increase",
        "Berges said Grow Hays had asked for $5,000 to be reinstated",
        "Commission reinstated Grow Hays' $165,000 and maintained Historical Society allocation at $115,000"
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
        "Hays Post reported the 2026 budget approval with a 1.96 mill increase",
        "Public hearing included residents urging revenue-neutral budgeting and warning about tax burdens"
      ]
    },
    {
      "id": "s-hayspost-city-mask-2020",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/69f1b5b1-a69e-4dab-80b1-ee8c00201441",
      "title": "City commissioners plea for residents to wear face masks, despite no county enforcement",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "As a Hays city commissioner, Berges made a personal plea for residents to wear masks",
        "Berges said he was not asking for a city ordinance at that point"
      ]
    },
    {
      "id": "s-nwkeici-staff",
      "tier": "primary",
      "url": "https://nwkeici.org/about/innovation-center-staff/",
      "title": "Innovation Center Staff",
      "publisher": "Northwest Kansas Economic Innovation Center",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Michael Berges is listed as Business Services Director at the Innovation Center",
        "The staff biography describes his work supporting businesses across a 26-county service area",
        "The biography describes experience in hotel management, foundation development, and financial and investment management"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(MICHAEL_BERGES_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[michael-berges.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
