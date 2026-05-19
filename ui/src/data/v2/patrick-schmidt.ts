/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const PATRICK_SCHMIDT_V2: CandidateFullV2 = {
  "slug": "patrick-schmidt",
  "name": "Patrick Schmidt",
  "party": "D",
  "position": "U.S. Senate, Kansas",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "State Senator / Navy Veteran",
  "born": "Overland Park, Kansas",
  "campaignWebsite": "https://patrickforkansas.com/",
  "issues": [
    {
      "id": "i-property-tax-relief",
      "title": "Property Taxes / Tax Relief",
      "stated": {
        "text": "Schmidt has made property tax relief one of the clearest themes in his public statehouse record. Kansas Reflector reported him saying he wanted \"real property tax relief for Kansans,\" and his legislative record includes sponsorship of property-tax exemption bills and votes on constitutional-amendment proposals to limit valuation increases.",
        "sourceIds": [
          "s-kansas-reflector-20250303",
          "s-ks-leg-sb90",
          "s-ks-leg-sb201",
          "s-ks-leg-vote-record-2025"
        ]
      },
      "actions": [
        {
          "id": "a-sponsored-sb90",
          "date": "2025-01-28",
          "body": "Sponsored SB 90, which would provide a property tax exemption from local government levies for the first $100,000 of appraised value for certain owner-occupied homes and authorize local governments to propose an opt-out ballot question. The bill died in committee.",
          "sourceIds": [
            "s-ks-leg-sb90"
          ]
        },
        {
          "id": "a-sponsored-sb201",
          "date": "2025-02-06",
          "body": "Sponsored SB 201, a homestead property tax exemption bill for certain veterans and former law enforcement officers with service-connected disabilities. The bill died.",
          "sourceIds": [
            "s-ks-leg-sb201"
          ]
        },
        {
          "id": "a-scr1603-hcr5011-votes",
          "date": "2025-02-06",
          "body": "Voted Yea on SCR 1603, a proposed constitutional amendment limiting property tax valuation increases. He later voted Yea on emergency final action for HCR 5011 on 2025-03-21, then Nay on later HCR 5011 conference committee report adoption attempts on 2025-03-26 and 2025-03-27.",
          "sourceIds": [
            "s-ks-leg-vote-record-2025",
            "s-kansas-reflector-20250303"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Instagram",
          "observation": "Instagram: @patrickforks — 93 followers / 5 following / 4 posts; bio text: \"Kansan, Navy Veteran, and candidate for KS-02. Running to invest in Kansas families and rebuild our economy.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-property-tax-relief"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Facebook",
          "observation": "Kansas Senate Democrats profile: Lists campaign website, fundraising page, Facebook page, and Instagram for Patrick Schmidt. The profile text emphasizes Navy service, public-school-teacher parents, family roots, and service in the Kansas Senate. URL: Kansas Senate Democrats profile",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kssenatedems-profile"
          ],
          "mappedToIssueId": "i-property-tax-relief"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "Source: Kansas Reflector, \"Freshman Kansas senator ‘trying to stop bad stuff’ while pressing for property tax relief\" — URL",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kansas-reflector-20250303"
          ],
          "mappedToIssueId": "i-property-tax-relief"
        }
      ],
      "gap": {
        "summary": "The record is concrete on property-tax relief, but proposals varied by mechanism and stage. Treat SB 90/SB 201 sponsorship, SCR 1603 support, and later HCR 5011 CCR Nay votes as separate actions rather than one uniform position.",
        "evidenceIds": [
          "a-sponsored-sb90"
        ]
      }
    },
    {
      "id": "i-healthcare-medicaid-prescription-drugs",
      "title": "Healthcare / Medicaid / Prescription Drugs",
      "stated": {
        "text": "Schmidt's campaign says every American deserves access to affordable health care. The campaign says he would work to expand Medicaid in Kansas to extend care to 150,000 people statewide, lower prescription drug costs, support legislation like the Lower Drug Costs Now Act, and bring more federally qualified health centers to Kansas.",
        "sourceIds": [
          "s-campaign-healthcare"
        ]
      },
      "actions": [
        {
          "id": "a-sb29-local-health-authority",
          "date": "2025-02-19",
          "body": "Voted Nay on SB 29 final action substitute, concurrence, and veto override. SB 29 removed authority of local health officers or county/joint boards of health to prohibit public gatherings when necessary to control infectious or contagious disease.",
          "sourceIds": [
            "s-ks-leg-vote-record-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across the captured campaign-controlled public items, no posts or pages were found addressing Kansas water policy, the Ogallala Aquifer, wheat prices, Farm Bill details, Fort Riley, rural hospital closures by facility name, abortion policy in Schmidt's own campaign website copy, gun policy, immigration enforcement details, capital punishment, foster care, adoption, or religious liberty.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-prescription-drugs"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "For Kansas-specific issues, the most concrete local policy thread in the captured record is property tax relief, followed by healthcare costs, labor, and trade. In a Kansas Reflector interview, Schmidt said, \"I would love to see real property tax relief for Kansans.\" (source). His campaign health-care page says, \"I believe wholeheartedly that every American deserves access to affordable health care.\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kansas-reflector-20250303"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-prescription-drugs"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Across the captured period the feed contains no accessible campaign-controlled posts about Kansas water policy, the Ogallala Aquifer, wheat prices, Farm Bill details, Fort Riley, rural hospital closures by facility name, gun policy, immigration enforcement details, capital punishment, foster care, adoption, or religious liberty (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-prescription-drugs"
        }
      ],
      "gap": {
        "summary": "The campaign gives clear healthcare goals on Medicaid, prescription costs, and federally qualified health centers. The available legislative action evidence in this pass is strongest on local public-health authority rather than Medicaid expansion itself.",
        "evidenceIds": [
          "a-sb29-local-health-authority"
        ]
      }
    },
    {
      "id": "i-labor-wages-trade-tax-policy",
      "title": "Labor / Wages / Trade / Tax Policy",
      "stated": {
        "text": "Schmidt's campaign says strong unions built the middle class and says he would work to pass the PRO Act and protect collective bargaining rights. The campaign also says he would oppose trade deals and tax policies that do not put workers first in Kansas.",
        "sourceIds": [
          "s-campaign-labor"
        ]
      },
      "actions": [
        {
          "id": "a-sponsored-paid-sick-time",
          "date": "2025-02-13",
          "body": "Co-sponsored SB 216, establishing the Kansas paid sick time act and setting accrual, usage, and employer obligations for earned paid sick time. The bill died.",
          "sourceIds": [
            "s-ks-leg-sb216"
          ]
        },
        {
          "id": "a-sponsored-minimum-wage",
          "date": "2025-02-13",
          "body": "Co-sponsored SB 218, increasing the Kansas minimum wage of employees. The bill died.",
          "sourceIds": [
            "s-ks-leg-sb218"
          ]
        },
        {
          "id": "a-sponsored-labor-constitutional-resolution",
          "date": "2025",
          "body": "Sponsored SCR 1609, a proposed constitutional amendment to repeal the Kansas constitutional provision regarding membership and nonmembership in labor organizations.",
          "sourceIds": [
            "s-ks-leg-sponsored-resolutions"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "Context: Kansas Reflector podcast interview on Schmidt's first legislative session and property tax relief.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-labor-wages-trade-tax-policy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Across the captured public record, Schmidt's dominant theme is service and working-family economics, with biography, family roots, military service, and household costs appearing in five of the eight campaign-controlled public items captured. His campaign home page says, \"Patrick Schmidt is a former Naval Intelligence Officer, husband, and sixth generation Kansan. He comes from a long line of farmers, veterans,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-labor-wages-trade-tax-policy"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Facebook",
          "observation": "The captured public alignment signal is campaign-institutional rather than repost-driven. The official site links to Facebook, X, and Instagram, and its footer lists \"Paid for by Patrick Schmidt for Kansas, Gov. John Carlin, Treasurer.\" (source). The Kansas Senate Democrats profile links Schmidt's campaign website, fundraising page, Facebook page, and Instagram, and says, \"As Senator, Patrick will be guided by...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-labor-wages-trade-tax-policy"
        }
      ],
      "gap": {
        "summary": "Candidate-controlled language is broad on trade and tax policy, while the state legislative record in this pass is more specific on paid sick time, minimum wage, and labor-organization constitutional language.",
        "evidenceIds": [
          "a-sponsored-paid-sick-time"
        ]
      }
    },
    {
      "id": "i-abortion-pregnancy-family-policy",
      "title": "Abortion / Pregnancy / Family Policy",
      "stated": {
        "text": "No detailed first-person abortion-policy page was found on Schmidt's accessible campaign website during this pass. Kansas City Star coverage described Schmidt as an abortion-rights supporter, but the stronger primary-source record here is legislative: he sponsored a paid prenatal leave bill, offered a floor amendment creating a Kansas tax exemption for unborn children, and then voted Nay on HB 2062 final action, conference report adoption, and veto override.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-about",
          "s-ks-leg-sb153",
          "s-ks-leg-hb2062",
          "s-ks-leg-hb2062-schmidt-amendment",
          "s-ks-leg-vote-record-2025",
          "s-kcstar-profile"
        ]
      },
      "actions": [
        {
          "id": "a-sponsored-paid-prenatal-leave",
          "date": "2025-02-05",
          "body": "Sponsored SB 153, establishing the Kansas paid prenatal personal leave act and requiring employers to provide 20 hours of paid prenatal personal leave. The bill died.",
          "sourceIds": [
            "s-ks-leg-sb153"
          ]
        },
        {
          "id": "a-hb2062-floor-amendment",
          "date": "2025-03-11",
          "body": "Offered a floor amendment to HB 2062 that would add a $2,320 Kansas personal exemption for any unborn child as defined in K.S.A. 23-3001 and require applying to the Department of Revenue for a taxpayer identification number for the unborn child.",
          "sourceIds": [
            "s-ks-leg-hb2062",
            "s-ks-leg-hb2062-schmidt-amendment"
          ]
        },
        {
          "id": "a-hb2062-nay-votes",
          "date": "2025-03-12",
          "body": "Voted Nay on HB 2062 final action amended on 2025-03-12, Nay on adoption of the conference committee report on 2025-03-26, and Nay on the veto override on 2025-04-10. The final law concerned child support orders for unborn children and income tax exemptions for unborn and stillborn children, among other child-support enforcement provisions.",
          "sourceIds": [
            "s-ks-leg-vote-record-2025",
            "s-ks-leg-hb2062"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "patrickforkansas.com",
          "observation": "The campaign health-care page addresses Medicaid expansion, prescription drugs, insulin, and federally qualified health centers, but the captured campaign-controlled pages did not include named rural hospital examples (source). The captured campaign-controlled pages also did not include a first-person abortion-policy statement, while a Kansas City Star interview said Schmidt described himself as an...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-healthcare"
          ],
          "mappedToIssueId": "i-abortion-pregnancy-family-policy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "No detailed first-person abortion-policy page was found on the accessible campaign website as of this pass. A Kansas City Star interview (secondary source) described Schmidt as an abortion-rights supporter; use that attribution only with the source and avoid expanding it into a full policy plan without candidate-controlled text.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-pregnancy-family-policy"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Schmidt offered a floor amendment to HB 2062 on 2025-03-11 that would have added a $2,320 Kansas personal exemption for \"any unborn child\" and required a taxpayer identification number for the unborn child. The bill page lists the amendment, and the amendment text is available from Kansas Legislature. Schmidt later voted Nay on final action, conference committee report adoption, and veto override for HB 2062. In...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-pregnancy-family-policy"
        }
      ],
      "gap": {
        "summary": "The HB 2062 record is easy to overstate. The primary record supports saying Schmidt offered an unborn-child tax-exemption amendment, but it also supports saying he did not vote for the final bill. Do not summarize this as simple support for HB 2062.",
        "evidenceIds": [
          "a-sponsored-paid-prenatal-leave"
        ]
      }
    },
    {
      "id": "i-democracy-elections-january-6",
      "title": "Democracy / Elections / January 6",
      "stated": {
        "text": "Schmidt's public record connects his entry into politics with January 6, and he sponsored SR 1706 condemning pardons and commutations for individuals involved in the January 6 attack at the U.S. Capitol. His voting record also includes Nay votes on SB 4, which required advance voting ballots to be returned by 7:00 p.m. on election day.",
        "sourceIds": [
          "s-kansas-reflector-20250303",
          "s-ks-leg-sponsored-resolutions",
          "s-ks-leg-vote-record-2025"
        ]
      },
      "actions": [
        {
          "id": "a-sponsored-sr1706",
          "date": "2025",
          "body": "Sponsored SR 1706, condemning pardons and commutations of sentences for individuals involved in the January 6, 2021 attack at the United States Capitol.",
          "sourceIds": [
            "s-ks-leg-sponsored-resolutions"
          ]
        },
        {
          "id": "a-sb4-advance-ballot-votes",
          "date": "2025-02-05",
          "body": "Voted Nay on SB 4 final action, concurrence, and veto override. SB 4 required advance voting ballots to be returned by 7:00 p.m. on election day.",
          "sourceIds": [
            "s-ks-leg-vote-record-2025"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "January 6 evidence is supported by candidate-attributed news quotes and a sponsored resolution. Election-administration evidence is supported by SB 4 roll calls, but this pass did not find a detailed campaign voting-rights page.",
        "evidenceIds": [
          "a-sponsored-sr1706"
        ]
      }
    },
    {
      "id": "i-immigration-employment-enforcement",
      "title": "Immigration / Employment Enforcement",
      "stated": {
        "text": "No detailed immigration page was found on Schmidt's accessible campaign website during this pass. The clearest primary-source evidence is SCR 1614, which he sponsored; the resolution urges Congress to increase penalties for violations of federal immigration laws and urges ICE to prosecute employers who hire undocumented immigrants.",
        "sourceIds": [
          "s-ks-leg-sponsored-resolutions"
        ]
      },
      "actions": [
        {
          "id": "a-sponsored-scr1614",
          "date": "2025",
          "body": "Sponsored SCR 1614, urging Congress to increase penalties for violations of federal immigration laws and urging U.S. Immigration and Customs Enforcement to prosecute employers who hire undocumented immigrants.",
          "sourceIds": [
            "s-ks-leg-sponsored-resolutions"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Because no detailed campaign immigration platform was found, keep this issue anchored to the resolution text and do not infer a broader immigration program from party label or a single resolution.",
        "evidenceIds": [
          "a-sponsored-scr1614"
        ]
      }
    },
    {
      "id": "i-education-public-schools",
      "title": "Education / Public Schools",
      "stated": {
        "text": "Schmidt's campaign biography emphasizes that both of his parents were public school teachers and worked second jobs, and Kansas Senate Democrats repeats that background. This is biographical evidence rather than a detailed education platform. No current campaign-controlled K-12 school funding, school choice, or parental-rights issue page was found in the accessible campaign pages.",
        "sourceIds": [
          "s-campaign-about",
          "s-kssenatedems-profile"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "ownWordsNarrative": "summary: Schmidt's online footprint is concentrated on his official campaign website plus Facebook, X/Twitter, Instagram, and YouTube. Logged-out harvests did not expose reliable current post-level timelines or engagement, so social platforms should be treated as presence-only unless a later authenticated harvest captures post text. The strongest issue-mapped online evidence is the campaign website's health-care and labor pages.; platform_notes: platform: Campaign website; status: Active; issue pages found for affordable health care and unions/middle class; sourceIds: s-campaign-home; s-campaign-healthcare; s-campaign-labor; platform: X/Twitter; status: Campaign-linked account located; logged-out timeline not reliably accessible; sourceIds: s-social-harvest; platform: Facebook; status: Campaign-linked page located; local harvest captured metadata but not reliable post bodies; sourceIds: s-social-harvest; platform: Instagram; status: Campaign-linked account located; local harvest captured metadata only; sourceIds: s-social-harvest; platform: YouTube; status: Campaign-linked channel/video located through campaign embed; metrics not visible in local harvest; sourceIds: s-social-harvest",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Schmidt's public profile emphasizes service, family history, and Kansas roots rather than a named congregation or denomination.",
  "campaignFinance": {
    "totalRaised": "$177,173.50",
    "narrative": "FEC bulk data shows $164,923.50 in individual contributions and $12,250.00 in other political committee contributions, with $0.00 from party committees, $0.00 candidate contributions, and $0.00 loans.",
    "donors": [],
    "undisclosed": "Federal itemized donor names/top donors were not extracted because OpenFEC DEMO_KEY was over rate limit and itemized rows did not render server-side.",
    "reportingPeriod": "2026-01-01 to 2026-03-31",
    "source": "2026 all candidates bulk data"
  },
  "sources": [
    {
      "id": "s-ks-leg-sponsored-resolutions",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/legislators/sen_schmidt_patrick_1/bills/?bfilter=resolution&page=1",
      "title": "Patrick Schmidt sponsored resolutions",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Sponsored resolutions list includes SCR 1609, SCR 1614, and SR 1706",
        "SCR 1614 urges Congress to increase penalties for federal immigration-law violations and urges ICE to prosecute employers who hire undocumented immigrants",
        "SR 1706 condemns pardons and commutations for individuals involved in the January 6, 2021 attack at the U.S. Capitol"
      ]
    },
    {
      "id": "s-ks-leg-vote-record-2025",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/vote-record/sen_schmidt_patrick_1/2025/",
      "title": "Kansas State Senate voter history - Schmidt (D)",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Schmidt voted Nay on SB 4 final action, concurrence, and override",
        "Schmidt voted Nay on SB 29 final action substitute, concurrence, and override",
        "Schmidt voted Nay on HB 2062 final action amended, CCR adoption, and override",
        "Schmidt voted Yea on SCR 1603 final action",
        "Schmidt voted Yea on HCR 5011 emergency final action and Nay on later CCR adoption attempts"
      ]
    },
    {
      "id": "s-ks-leg-sb90",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/SB90/",
      "title": "SB 90",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 90 provides a property tax exemption for first $100,000 of appraised value for certain owner-occupied homes",
        "Original and current sponsor is Sen. Patrick Schmidt",
        "Bill status is Died"
      ]
    },
    {
      "id": "s-ks-leg-sb153",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/SB153/",
      "title": "SB 153",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 153 establishes the Kansas paid prenatal personal leave act requiring employers to provide 20 hours of paid prenatal personal leave",
        "Original and current sponsor is Sen. Patrick Schmidt",
        "Bill status is Died"
      ]
    },
    {
      "id": "s-ks-leg-sb201",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/SB201/",
      "title": "SB 201",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 201 provides for a homestead property tax exemption for certain veterans and former law enforcement officers with service-connected disabilities",
        "Original and current sponsor is Sen. Patrick Schmidt",
        "Bill status is Died"
      ]
    },
    {
      "id": "s-ks-leg-sb216",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/SB216/",
      "title": "SB 216",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 216 establishes the Kansas paid sick time act",
        "Sen. Patrick Schmidt is among original/current sponsors",
        "Bill status is Died"
      ]
    },
    {
      "id": "s-ks-leg-sb218",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/SB218/",
      "title": "SB 218",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "SB 218 increases the Kansas minimum wage of employees",
        "Sen. Patrick Schmidt is among original/current sponsors",
        "Bill status is Died"
      ]
    },
    {
      "id": "s-ks-leg-hb2062",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/bills/HB2062/",
      "title": "HB 2062",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2062 concerns child support orders for unborn children and income tax exemptions for unborn and stillborn children",
        "HB 2062 became effective 2025-07-01 after veto override",
        "HB 2062 page lists a floor amendment offered by Sen. Patrick Schmidt on 2025-03-11"
      ]
    },
    {
      "id": "s-ks-leg-hb2062-schmidt-amendment",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/b2025_26/documents/view-leg/?apn=b2025_26/year1/ready_for_publication/floor_amendments/1837/fa_2025_hb2062_s_1837.pdf",
      "title": "HB 2062 - Floor Amendment",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Schmidt amendment would add a $2,320 Kansas personal exemption for any unborn child as defined in K.S.A. 23-3001",
        "Amendment would require applying to the Department of Revenue for a taxpayer identification number for the unborn child",
        "Amendment title language adds providing for an income tax exemption for unborn children"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://patrickforkansas.com/",
      "title": "Patrick Schmidt for US Senate",
      "publisher": "Patrick Schmidt for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says Schmidt is a former U.S. Navy Intelligence Officer running for U.S. Senate",
        "Campaign says he is a former Naval Intelligence Officer, husband, and sixth-generation Kansan",
        "Campaign footer says paid for by Patrick Schmidt for Kansas, Gov. John Carlin, Treasurer",
        "Campaign website links Facebook, X/Twitter, Instagram, and ActBlue",
        "Observed public online activity mapped to Labor / Wages / Trade / Tax Policy."
      ]
    },
    {
      "id": "s-campaign-about",
      "tier": "primary",
      "url": "https://patrickforkansas.com/about/",
      "title": "Meet Patrick",
      "publisher": "Patrick Schmidt for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says both parents were public school teachers and worked second jobs",
        "Campaign says Schmidt served as a Naval Intelligence Officer on the USS Ronald Reagan",
        "Campaign says he recently transitioned to the Naval Reserve and returned to Kansas with wife Megan"
      ]
    },
    {
      "id": "s-campaign-healthcare",
      "tier": "primary",
      "url": "https://patrickforkansas.com/issue/affordable-health-care/",
      "title": "Affordable Health Care",
      "publisher": "Patrick Schmidt for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says every American deserves access to affordable health care",
        "Campaign says Schmidt would work to expand Medicaid in Kansas and extend care to 150,000 people statewide",
        "Campaign says he would stand up to the pharmaceutical lobby and lower prescription drug costs",
        "Campaign says he would work to bring more federally qualified health centers to Kansas",
        "Observed public online activity mapped to Abortion / Pregnancy / Family Policy."
      ]
    },
    {
      "id": "s-campaign-labor",
      "tier": "primary",
      "url": "https://patrickforkansas.com/issue/unions-and-the-middle-class/",
      "title": "Unions & The Middle Class",
      "publisher": "Patrick Schmidt for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says strong unions built the middle class",
        "Campaign says Schmidt would work to pass the PRO Act",
        "Campaign says he would protect collective bargaining rights",
        "Campaign says he would judge trade deals and tax policy by whether they put workers first in Kansas"
      ]
    },
    {
      "id": "s-kssenatedems-profile",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/patrick-schmidt",
      "title": "Patrick Schmidt",
      "publisher": "Kansas Senate Democrats",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile repeats campaign biography about Navy service, teacher parents, family roots, and service in the Kansas Senate",
        "Profile links campaign website, fundraising page, Facebook page, and Instagram",
        "Observed public online activity mapped to Property Taxes / Tax Relief."
      ]
    },
    {
      "id": "s-kansas-reflector-20250303",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
      "title": "Freshman Kansas senator 'trying to stop bad stuff' while pressing for property tax relief",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Article quotes Schmidt on property tax relief",
        "Article reports Schmidt broke from party ranks to support SCR 1603",
        "Article quotes Schmidt on witnessing January 6",
        "Article reports Schmidt criticized SB 76 as legalized bullying",
        "Observed public online activity mapped to Property Taxes / Tax Relief.",
        "Observed public online activity mapped to Healthcare / Medicaid / Prescription Drugs."
      ]
    },
    {
      "id": "s-kcstar-profile",
      "tier": "secondary",
      "url": "https://www.kansascity.com/news/politics-government/article315684022.html",
      "title": "Navy veteran turned Democratic lawmaker now wants Roger Marshall's Senate seat",
      "publisher": "Kansas City Star",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Article reports Schmidt raised roughly $177,000 in the first three months of 2026",
        "Local capture includes Schmidt quote that he did not write, vote for, or support HB 2062",
        "Local capture includes national security, tariffs, and January 6 quotes"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://www.instagram.com/patrickforks/",
      "title": "Instagram / Instagram",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Property Taxes / Tax Relief.",
        "Instagram: @patrickforks — 93 followers / 5 following / 4 posts; bio text: \"Kansan, Navy Veteran, and candidate for KS-02. Running to invest in Kansas families and rebuild our econ"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(PATRICK_SCHMIDT_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[patrick-schmidt.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
