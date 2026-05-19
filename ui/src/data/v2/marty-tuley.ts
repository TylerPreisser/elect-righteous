/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const MARTY_TULEY_V2: CandidateFullV2 = {
  "slug": "marty-tuley",
  "name": "Marty Tuley",
  "party": "D",
  "position": "Kansas Governor",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "No elected office confirmed",
  "campaignWebsite": "https://www.tuley4gov2026.com/",
  "issues": [
    {
      "id": "i-official-status",
      "title": "Official Status / Ballot Access",
      "stated": {
        "text": "Tuley is an active campaign-finance registrant for Governor in the 2026 Kansas cycle, and his campaign site identifies him as running for Governor in 2026. Direct SOS candidate-list or final ballot certification was not confirmed in this pass because the live candidate-list endpoint returned CloudFront blocking and the June 1, 2026 filing deadline has not yet passed.",
        "sourceIds": [
          "s-kpdc-statewide-2026",
          "s-kpdc-treasurer",
          "s-kpdc-202601",
          "s-campaign-home",
          "s-sos-candidate-info-2026",
          "s-sos-candidate-list-blocked"
        ]
      },
      "actions": [
        {
          "id": "a-status-1",
          "date": "2025-05-30",
          "body": "Tuley executed a KPDC Appointment of Treasurer form for the office of Governor, naming Marcie Wainright as treasurer.",
          "sourceIds": [
            "s-kpdc-treasurer"
          ]
        },
        {
          "id": "a-status-2",
          "date": "2026-01-12",
          "body": "Tuley's treasurer electronically filed a 2025 year-end KPDC receipts-and-expenditures report for the Governor race.",
          "sourceIds": [
            "s-kpdc-202601"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "KCUR",
          "observation": "KCUR / Kansas News Service's governor race guide described Tuley as an author and personal trainer in Lawrence and summarized his platform around recreational cannabis, education and health revenue, corporate incentives, daily physical education, and banning padded football for children under 13 (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kcur-guide"
          ],
          "mappedToIssueId": "i-official-status"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Across candidate-controlled site/platform text and indexed public coverage, no detailed candidate-controlled statements were captured on abortion, gun policy, religious liberty, Medicaid expansion, rural hospitals, water policy, the Ogallala Aquifer, property taxes, child care, foster care, policing, prisons, higher education beyond junior colleges and technical schools, tribal issues, or Kansas Supreme Court...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-official-status"
        },
        {
          "id": "ss-crossref-5",
          "platform": "tuley4gov2026.com",
          "observation": "Marty Tuley's public campaign record is built less around a long elected-office record and more around a candidate-controlled platform: public schools, health and fitness, marijuana legalization, Kansas-centered economic development, energy, voting access, and restrained executive power. His campaign home page frames the race as \"Building a Kansas Worth Investing In\" and says Kansas should lead through schools,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-official-status"
        }
      ],
      "gap": {
        "summary": "Campaign-finance filing and active campaign materials are confirmed, but this pass did not confirm a directly readable SOS candidate-list row or final ballot certification.",
        "evidenceIds": [
          "a-status-1",
          "a-status-2"
        ]
      }
    },
    {
      "id": "i-public-education-school-funding",
      "title": "Public Education / School Funding",
      "stated": {
        "text": "Tuley's campaign places public education at the center of his platform. Candidate-controlled pages call for top-25 teacher pay, better teacher benefits, fully funded junior-college and technical-school tuition, two healthy meals daily for public-school students, reduced administrative bloat, support-staff investment, school cell-phone limits, and keeping public dollars in public schools through opposition to vouchers, privatization, and private-school tax breaks.",
        "sourceIds": [
          "s-campaign-platform",
          "s-campaign-public-schools-old",
          "s-campaign-todo-old",
          "s-ein-launch",
          "s-wibw-launch"
        ]
      },
      "actions": [
        {
          "id": "a-edu-1",
          "date": "2025-06-30",
          "body": "The campaign-distributed launch release publicly listed education priorities including top-25 teacher pay, two healthy meals per student, school cell-phone limits, cannabis revenue for schools, and opposition to taxpayer funding for private schools.",
          "sourceIds": [
            "s-ein-launch"
          ]
        },
        {
          "id": "a-edu-2",
          "date": "2025-07-28",
          "body": "WIBW's launch coverage summarized Tuley's education priorities as teacher pay, school meals, legal cannabis revenue for schools, and opposition to private schools receiving taxpayer funds.",
          "sourceIds": [
            "s-wibw-launch"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-edu-1",
          "platform": "Campaign website",
          "observation": "Education is the largest candidate-controlled platform cluster in the local harvest: the older to-do-list page contains ten education/public-school bullets, more than any other issue cluster.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-public-education-school-funding"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Instagram",
          "observation": "The campaign launch release distributed through EIN Presswire on 2025-06-30 lists many of the same platform priorities and identifies Tuley as an educator, parent, and lifelong Kansan running for governor (source). The release also links social media at the platform level: Instagram, YouTube, and TikTok.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ein-launch"
          ],
          "mappedToIssueId": "i-public-education-school-funding"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Kansas Reflector",
          "observation": "Kansas Reflector covered the March 8, 2026 Democratic governor forum and described Tuley as acknowledging he was a \"third wheel\" against two legislative candidates while presenting himself as a different kind of Democrat with a nontraditional background (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kansas-reflector-debate"
          ],
          "mappedToIssueId": "i-public-education-school-funding"
        }
      ]
    },
    {
      "id": "i-health-fitness-prevention",
      "title": "Health, Fitness, and Prevention",
      "stated": {
        "text": "Tuley's campaign connects health policy to prevention, school physical activity, nutrition, and personal health decisions. Candidate-controlled pages call for daily physical education, farm-to-table nutrition in schools, treating obesity as a primary public-health issue, eliminating padded football for children under age 13, and supporting personal freedom in healthcare decisions.",
        "sourceIds": [
          "s-campaign-platform",
          "s-campaign-todo-old",
          "s-ein-launch",
          "s-kcur-guide"
        ]
      },
      "actions": [
        {
          "id": "a-health-1",
          "date": "2025-06-30",
          "body": "The campaign-distributed release listed obesity prevention, farm-to-table food systems, daily activity, and health-program funding among Tuley's priorities.",
          "sourceIds": [
            "s-ein-launch"
          ]
        },
        {
          "id": "a-health-2",
          "date": "2025-07-24",
          "body": "KCUR/Kansas News Service summarized Tuley's campaign as supporting daily physical education and banning padded football for children under age 13.",
          "sourceIds": [
            "s-kcur-guide"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-health-1",
          "platform": "Campaign website",
          "observation": "The local harvest found six health-and-fitness bullets on the older candidate-controlled to-do-list page, making health and fitness the second-largest platform cluster after education.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-health-fitness-prevention"
        },
        {
          "id": "ss-crossref-2",
          "platform": "player.kmaj1440.com",
          "observation": "KSNT's candidate guide characterized Tuley as a moderate Democrat and summarized his visible issue set as teacher pay, farm-to-table public health, transgender girls' sports, cannabis revenue for schools and health programs, and opposition to large tax breaks for out-of-state corporations (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-health-fitness-prevention"
        },
        {
          "id": "ss-crossref-4",
          "platform": "KCUR",
          "observation": "Health and fitness are the second strongest candidate-controlled signal, reflecting Tuley's identity as an author and personal trainer. The campaign platform calls for daily physical education, farm-to-table school food, prevention-focused obesity policy, and a broader culture of wellness (source). KCUR / Kansas News Service summarized his campaign in similar terms, noting his support for daily physical education...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-todo-old"
          ],
          "mappedToIssueId": "i-health-fitness-prevention"
        }
      ]
    },
    {
      "id": "i-marijuana-tax-economy",
      "title": "Marijuana, Tax Policy, and Local Economic Development",
      "stated": {
        "text": "Tuley's campaign supports legalizing marijuana and directing tax revenue to education and health programs. His economic platform calls for reforming corporate tax incentives for out-of-state corporations, prioritizing Kansas-based businesses through balanced taxation and supportive regulation, investing in education/workforce/local growth, and focusing on long-term economic growth rather than short-term political tax cuts.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-platform",
          "s-campaign-todo-old",
          "s-ein-launch",
          "s-wibw-launch"
        ]
      },
      "actions": [
        {
          "id": "a-econ-1",
          "date": "2025-06-30",
          "body": "The campaign-distributed launch release included legal cannabis revenue for schools, Kansas-grown business priorities, corporate-tax incentive reform, and opposition to tax cuts as a political tool.",
          "sourceIds": [
            "s-ein-launch"
          ]
        },
        {
          "id": "a-econ-2",
          "date": "2025-07-28",
          "body": "WIBW's launch coverage reported Tuley's support for legal cannabis with tax revenue invested in Kansas schools.",
          "sourceIds": [
            "s-wibw-launch"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "tuley4gov2026.com",
          "observation": "Education is the clearest and most repeated issue cluster. Tuley's platform calls for top-25 national teacher pay, better benefits, fully funded junior college and technical school tuition, two healthy meals per day for public school students, no cell phones during public school hours, reduced administrative bloat, higher support-staff pay, and opposition to vouchers (source). His public schools page condenses...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-todo-old"
          ],
          "mappedToIssueId": "i-marijuana-tax-economy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "einpresswire.com",
          "observation": "The campaign-distributed EIN Presswire release also put obesity prevention, school food systems, and health-program funding in the launch platform (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ein-launch"
          ],
          "mappedToIssueId": "i-marijuana-tax-economy"
        },
        {
          "id": "ss-crossref-5",
          "platform": "tuley4gov2026.com",
          "observation": "On cultural and family-policy issues, Tuley's most visible distinctive position is his statement that he supports transgender rights but opposes transgender girls competing in sports with biological girls (source). The campaign launch release stated the same sports position and framed it around fairness and safety (source). WIBW included the position in its announcement story, and KSNT's candidate guide...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-todo-old"
          ],
          "mappedToIssueId": "i-marijuana-tax-economy"
        }
      ]
    },
    {
      "id": "i-school-athletics-lgbtq-policy",
      "title": "School Athletics / LGBTQ Policy",
      "stated": {
        "text": "The older still-live campaign to-do-list page says Tuley supports transgender rights but opposes transgender girls competing in sports with biological girls. The campaign-distributed release and WIBW launch coverage also reported opposition to transgender girls competing in girls' sports. The newer current-nav platform page uses broader wording on fair and consistent standards in school athletics, so downstream prose should cite the exact source version used and avoid expanding this into a broader LGBTQ-policy claim.",
        "sourceIds": [
          "s-campaign-todo-old",
          "s-campaign-platform",
          "s-ein-launch",
          "s-wibw-launch"
        ]
      },
      "actions": [
        {
          "id": "a-athletics-1",
          "date": "2025-06-30",
          "body": "The campaign-distributed release listed opposition to transgender girls competing in girls' sports as a platform priority.",
          "sourceIds": [
            "s-ein-launch"
          ]
        },
        {
          "id": "a-athletics-2",
          "date": "2025-07-28",
          "body": "WIBW launch coverage included opposition to transgender girls competing in girls' sports among Tuley's stated priorities.",
          "sourceIds": [
            "s-wibw-launch"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-athletics-1",
          "platform": "Campaign website",
          "observation": "Two active campaign pages use different wording: the older to-do-list page is explicit about transgender rights and girls' sports, while the newer platform page says fair and consistent standards in school athletics.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-todo-old",
            "s-campaign-platform"
          ],
          "mappedToIssueId": "i-school-athletics-lgbtq-policy"
        },
        {
          "id": "ss-crossref-2",
          "platform": "TikTok",
          "observation": "Candidate-controlled items examined: official campaign home page, meet page, platform/to-do-list page, public schools page, official social links, TikTok account metadata, Facebook page shell, Instagram page shell, YouTube channel shell, X profile state, and campaign-distributed press release. Topic counts are from 27 candidate-controlled platform bullets on the indexed campaign platform page, not from...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-school-athletics-lgbtq-policy"
        },
        {
          "id": "ss-crossref-4",
          "platform": "KCUR",
          "observation": "Tuley's economic message is less technocratic than investment-oriented. His campaign home page says Kansas should attract businesses by investing in education, workforce development, and local growth rather than relying on corporate giveaways (source). The platform calls for legal marijuana with revenue directed to education and health, reforming corporate tax incentives for out-of-state companies, prioritizing...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-school-athletics-lgbtq-policy"
        }
      ],
      "gap": {
        "summary": "The campaign's still-live pages are not identical on this issue: the older page states the transgender-rights/sports position explicitly, while the newer platform page uses broader school-athletics wording.",
        "evidenceIds": [
          "ss-athletics-1"
        ]
      }
    },
    {
      "id": "i-infrastructure-energy-sustainability",
      "title": "Infrastructure, Energy, and Sustainability",
      "stated": {
        "text": "Tuley's campaign supports infrastructure projects using Kansas labor, wind and solar energy development, reduced plastic use, sustainable practices, and transitioning state government operations toward a paperless system.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-platform",
          "s-campaign-todo-old",
          "s-ein-launch"
        ]
      },
      "actions": [
        {
          "id": "a-energy-1",
          "date": "2025-06-30",
          "body": "The campaign-distributed launch release listed support for wind and solar energy, reduced plastic use statewide, and paperless state government.",
          "sourceIds": [
            "s-ein-launch"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-voting-governance-accountability",
      "title": "Voting Access / Governance and Accountability",
      "stated": {
        "text": "Tuley's campaign says government should be transparent, responsible, and focused on the people it serves. Candidate-controlled pages call for limiting the use of executive orders and pardons as political tools, making voting more accessible while maintaining secure and reliable systems, and focusing on long-term investment rather than austerity or short-term cuts. The older still-live to-do-list page and launch release use the more specific phrase 'electronic options' for voting access.",
        "sourceIds": [
          "s-campaign-meet",
          "s-campaign-platform",
          "s-campaign-todo-old",
          "s-ein-launch"
        ]
      },
      "actions": [
        {
          "id": "a-governance-1",
          "date": "2025-06-30",
          "body": "The campaign-distributed launch release listed making voting easy and accessible, including electronic options.",
          "sourceIds": [
            "s-ein-launch"
          ]
        },
        {
          "id": "a-governance-2",
          "date": "2026-05-19",
          "body": "The current campaign platform page remained live with priorities on executive orders/pardons, accessible voting with secure systems, immigration language, and long-term investment.",
          "sourceIds": [
            "s-campaign-platform"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-governance-1",
          "platform": "Campaign website",
          "observation": "The older to-do-list page says accessible voting should include electronic options, while the newer platform page says voting should be more accessible while maintaining secure and reliable systems.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-todo-old",
            "s-campaign-platform"
          ],
          "mappedToIssueId": "i-voting-governance-accountability"
        }
      ],
      "gap": {
        "summary": "The campaign's older and newer active pages use different levels of specificity on voting access; the electronic-options phrase appears on the older page and launch release, not on the newer current-nav platform page.",
        "evidenceIds": [
          "ss-governance-1"
        ]
      }
    },
    {
      "id": "i-immigration-border",
      "title": "Immigration / Border",
      "stated": {
        "text": "Tuley's campaign uses broad language supporting a border policy that is secure and accessible/practical/humane for hardworking individuals and families. No detailed implementation plan, enforcement proposal, or federal/state division-of-authority statement was confirmed in this pass.",
        "sourceIds": [
          "s-campaign-platform",
          "s-campaign-todo-old",
          "s-ein-launch"
        ]
      },
      "actions": [
        {
          "id": "a-border-1",
          "date": "2025-06-30",
          "body": "The campaign-distributed launch release listed 'Secure but accessible borders' as a platform priority.",
          "sourceIds": [
            "s-ein-launch"
          ]
        },
        {
          "id": "a-border-2",
          "date": "2026-05-19",
          "body": "The current campaign platform page remained live with language supporting practical, balanced immigration policies that are both secure and humane.",
          "sourceIds": [
            "s-campaign-platform"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-abortion-sanctity-of-life",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "No detailed candidate-controlled statement was found in the reviewed public record for this issue. This page should not infer a position from party label, broad personal-freedom language, social-platform presence, or associations.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-platform",
          "s-campaign-todo-old"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-abortion-1",
          "platform": "Public web / local harvest",
          "observation": "The local harvest and current verification found no detailed candidate-controlled statement on abortion or reproductive policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "i-abortion-sanctity-of-life"
        }
      ]
    },
    {
      "id": "i-guns-second-amendment",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No detailed candidate-controlled gun-policy statement was found in the reviewed public record. This page should not infer a position from party label or general public-safety language.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-platform",
          "s-campaign-todo-old"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-guns-1",
          "platform": "Public web / local harvest",
          "observation": "The local harvest and current verification found no detailed candidate-controlled statement on gun policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [],
          "mappedToIssueId": "i-guns-second-amendment"
        }
      ]
    },
    {
      "id": "i-religious-liberty-faith",
      "title": "Religious Liberty / Faith",
      "stated": {
        "text": "No current church affiliation, denomination, worship-community affiliation, or religious-liberty policy plank was confirmed in reviewed public sources.",
        "sourceIds": [
          "s-campaign-about-old",
          "s-campaign-meet"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-rural-healthcare-medicaid",
      "title": "Rural Healthcare / Medicaid Expansion",
      "stated": {
        "text": "No detailed candidate-controlled Medicaid-expansion or rural-hospital platform plank was confirmed. Kansas Reflector debate coverage reported Tuley participating in a forum focused on affordability, healthcare, and rural Kansas, and local memory notes a rural-hospital discussion from that coverage, but this pass did not confirm a detailed candidate-controlled plan.",
        "sourceIds": [
          "s-kansas-reflector-debate",
          "s-campaign-platform",
          "s-campaign-todo-old"
        ]
      },
      "actions": [
        {
          "id": "a-rural-health-1",
          "date": "2026-03-08",
          "body": "Kansas Reflector reported Tuley appeared at a Democratic governor forum where candidates discussed affordability, healthcare, and rural Kansas.",
          "sourceIds": [
            "s-kansas-reflector-debate"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "recordSummary": "No elected office confirmed",
  "ownWordsNarrative": "platform: TikTok; handle: @tuley_for_gov; relevance: Campaign-linked account with measurable account-level metadata in local harvest; no reliable post-level captions or engagement captured.; metrics: 1,936 followers; 132 following; 10.4K likes; 185 videos; captured 2026-05-11; sourceIds: s-social-harvest-local; platform: Facebook; handle: facebook.com/martytuley; relevance: Campaign-linked page shell confirmed, but logged-out capture did not expose reliable posts or engagement.; sourceIds: s-social-harvest-local; platform: Instagram; handle: @tuley_for_gov; relevance: Campaign-linked account confirmed by campaign site/local harvest/EIN release, but logged-out capture did not expose reliable captions or engagement.; sourceIds: s-social-harvest-local; s-ein-launch; platform: YouTube; handle: @MartyTuley; relevance: Campaign-linked channel lead confirmed, but logged-out capture did not expose reliable video metadata.; sourceIds: s-social-harvest-local; s-ein-launch; platform: X; handle: @TuleyMarty; relevance: Identity-adjacent profile found locally, not linked from campaign site, and showed 0 statuses at capture; do not treat as a campaign channel without additional confirmation.; sourceIds: s-social-harvest-local",
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Tuley. His campaign language leans heavily on values, family, and Kansas roots, but the available public record does not name a congregation or denomination.",
  "campaignFinance": {
    "totalRaised": "totalRaised: $2,600.00; totalSpent: $193.89; cashOnHand: $2,406.11; inKind: $0.00; otherTransactions: $0.00; reportingPeriod: January 1, 2025 through December 31, 2025; filed: 2026-01-12 2:25:45 PM; treasurer: Marcie Wainright; sourceIds: s-kpdc-202601; s-kpdc-treasurer",
    "narrative": "totalRaised: $2,600.00; totalSpent: $193.89; cashOnHand: $2,406.11; inKind: $0.00; otherTransactions: $0.00; reportingPeriod: January 1, 2025 through December 31, 2025; filed: 2026-01-12 2:25:45 PM; treasurer: Marcie Wainright; sourceIds: s-kpdc-202601; s-kpdc-treasurer",
    "donors": [
      {
        "name": "Todd Decuir",
        "amount": "$500.00"
      },
      {
        "name": "George Grieb",
        "amount": "$500.00"
      },
      {
        "name": "Ernesto Hodison",
        "amount": "$100.00"
      },
      {
        "name": "William England",
        "amount": "$50.00"
      },
      {
        "name": "Paul Popiel",
        "amount": "$100.00"
      },
      {
        "name": "Susan Millstein",
        "amount": "$500.00"
      },
      {
        "name": "Tami Pool",
        "amount": "$250.00"
      },
      {
        "name": "Keith Ely",
        "amount": "$250.00"
      },
      {
        "name": "Deanna Dibble",
        "amount": "$250.00"
      },
      {
        "name": "Kirk Fischer",
        "amount": "$100.00"
      }
    ],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "Candidate v2 issue file"
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
      "id": "s-sos-candidate-list-blocked",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx",
      "title": "Candidate List",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Attempted official candidate-list readback returned CloudFront 403 in this environment"
      ]
    },
    {
      "id": "s-kpdc-statewide-2026",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas State Wide Office - 2026 Election Cycle",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Tuley, Marty is listed under Gubernatorial Candidates",
        "The page links his Appointment of Treasurer and 202601 receipts-and-expenditures report",
        "The page says it was last updated January 22, 2026"
      ]
    },
    {
      "id": "s-kpdc-treasurer",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01MT_AT.pdf",
      "title": "Appointment of Treasurer or Candidate Committee Form",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate Name: Marty Tuley",
        "Office Sought: Governor",
        "County: Douglas",
        "Treasurer Name: Marcie Wainright",
        "Treasurer Date Appointed: 05/30/2025",
        "Executed May 30, 2025"
      ]
    },
    {
      "id": "s-kpdc-202601",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01MT_202601.pdf",
      "title": "Campaign Finance Receipts and Expenditures Report - Marty Tuley",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Report covers January 1, 2025 through December 31, 2025",
        "Total contributions and other receipts were $2,600.00",
        "Total expenditures and other disbursements were $193.89",
        "Cash on hand at close of period was $2,406.11",
        "In-kind contributions were $0.00",
        "Other transactions were $0.00",
        "Itemized contributors include Todd Decuir, George Grieb, Ernesto Hodison, William England, Paul Popiel, Susan Millstein, Tami Pool, Keith Ely, Deanna Dibble, and Kirk Fischer"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://www.tuley4gov2026.com/",
      "title": "Tuley for Governor 2026",
      "publisher": "Tuley for Governor 2026",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign site is active and identifies Tuley for Governor 2026",
        "Home page frames campaign around building a Kansas worth investing in",
        "Home page previews education, accountable leadership, health, infrastructure, clean energy, and local economic growth",
        "Observed public online activity mapped to Official Status / Ballot Access.",
        "Observed public online activity mapped to School Athletics / LGBTQ Policy."
      ]
    },
    {
      "id": "s-campaign-meet",
      "tier": "primary",
      "url": "https://www.tuley4gov2026.com/meet-marty",
      "title": "Meet Marty Tuley",
      "publisher": "Tuley for Governor 2026",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Current-nav biography page says Tuley is running for Governor",
        "Page emphasizes practical leadership, listening, local businesses, education, safety, accountability, transparency, family, and community"
      ]
    },
    {
      "id": "s-campaign-platform",
      "tier": "primary",
      "url": "https://www.tuley4gov2026.com/platform",
      "title": "Tuley Platform",
      "publisher": "Tuley for Governor 2026",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Current-nav platform page states education, health, economic, infrastructure/energy, governance, voting, and immigration priorities",
        "Page says public dollars should stay in public schools with no vouchers, privatization, or private-school tax breaks",
        "Page calls for legal marijuana with revenue for education and health programs",
        "Page uses broad language on fair and consistent standards in school athletics"
      ]
    },
    {
      "id": "s-campaign-about-old",
      "tier": "primary",
      "url": "https://www.tuley4gov2026.com/about-marty",
      "title": "About Marty",
      "publisher": "Tuley for Governor 2026",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Still-live older biography page says Tuley is a fourth-generation Kansan",
        "Page says his family includes farmers, public school teachers, and working people",
        "Page says he supports strong public schools, growing the local economy, and protecting personal freedoms"
      ]
    },
    {
      "id": "s-campaign-todo-old",
      "tier": "primary",
      "url": "https://www.tuley4gov2026.com/to-do-list",
      "title": "My Platform",
      "publisher": "Tuley for Governor 2026",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Still-live older platform page lists detailed bullets on education, health and fitness, economics and tax policy, infrastructure and energy, and governance",
        "Page says Tuley supports transgender rights but opposes transgender girls competing in sports with biological girls",
        "Page says he supports making voting easy and accessible, including electronic options",
        "Observed public online activity mapped to Health, Fitness, and Prevention.",
        "Observed public online activity mapped to Marijuana, Tax Policy, and Local Economic Development."
      ]
    },
    {
      "id": "s-campaign-public-schools-old",
      "tier": "primary",
      "url": "https://www.tuley4gov2026.com/public-schools",
      "title": "Public Schools",
      "publisher": "Tuley for Governor 2026",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Still-live older public-schools page calls for top-25 teacher pay, teacher benefits, school meals, junior-college/technical-school tuition, support staff, and no vouchers/private-school tax breaks"
      ]
    },
    {
      "id": "s-ein-launch",
      "tier": "primary",
      "url": "https://www.einpresswire.com/article/824455910/invest-in-kansas-tuley-s-platform-to-rebuild-schools-health-and-economy",
      "title": "Invest in Kansas: Tuley's Platform to Rebuild Schools, Health, and Economy",
      "publisher": "Marty Tuley via EIN Presswire",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign-distributed release lists education, cannabis, private-school funding, rural economy, border, obesity, tax, energy, voting, transgender-athlete sports, and investment priorities",
        "Release links campaign social channels on Instagram, YouTube, and TikTok",
        "Observed public online activity mapped to Public Education / School Funding.",
        "Observed public online activity mapped to Marijuana, Tax Policy, and Local Economic Development."
      ]
    },
    {
      "id": "s-wibw-launch",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
      "title": "Democrat Marty Tuley announces candidacy for 2026 Kansas governor",
      "publisher": "WIBW",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "WIBW reported Tuley, a Democrat from Lawrence, announced his candidacy for Kansas governor",
        "WIBW described him as an educator, parent, and lifelong Kansan",
        "WIBW summarized campaign priorities including teacher pay, school meals, cannabis revenue, private-school funding, obesity, and transgender girls' sports"
      ]
    },
    {
      "id": "s-kcur-guide",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Who's running for Kansas governor in 2026? Here's a guide to the candidates",
      "publisher": "KCUR / Kansas News Service",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KCUR/Kansas News Service described Tuley as an author and personal trainer in Lawrence",
        "Guide summarized cannabis, education/health revenue, corporate incentives, daily PE, and padded football positions",
        "Observed public online activity mapped to Official Status / Ballot Access."
      ]
    },
    {
      "id": "s-kansas-reflector-debate",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Democrats in governor's race use debate stage to spotlight affordability, health care, rural Kansas",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas Reflector reported Tuley appeared with Cindy Holscher and Ethan Corson at a Democratic governor forum",
        "Coverage discussed affordability, healthcare, rural Kansas, and Tuley's outsider/nontraditional-candidate framing",
        "Observed public online activity mapped to Public Education / School Funding."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://player.kmaj1440.com/2025/08/01/who-is-running-for-governor-in-kansas-for-2026/",
      "title": "player.kmaj1440.com / Player.Kmaj1440",
      "publisher": "Player.Kmaj1440",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Health, Fitness, and Prevention.",
        "KSNT's candidate guide characterized Tuley as a moderate Democrat and summarized his visible issue set as teacher pay, farm-to-table public health, transgender girls' sports, canna"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(MARTY_TULEY_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[marty-tuley.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
