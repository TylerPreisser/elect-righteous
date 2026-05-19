/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const MICHAEL_SOETAERT_V2: CandidateFullV2 = {
  "slug": "michael-soetaert",
  "name": "Michael Soetaert",
  "party": "D",
  "position": "U.S. Senate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "Former/recent Wellington City Council member; 2026 Democratic U.S. Senate candidate",
  "hometown": "Wellington, KS (Sumner County -- south-central Kansas)",
  "issues": [
    {
      "id": "i-status-ballot-access",
      "title": "Official Filing / Ballot Access",
      "stated": {
        "text": "Soetaert is a filed Democratic candidate for Kansas U.S. Senate in the 2026 primary based on FEC records and a county election-office export showing State of Kansas filing. Because the Kansas filing deadline is June 1, 2026 and the live SOS list could not be read directly here, final ballot status should be rechecked after the deadline.",
        "sourceIds": [
          "s-sos-candidate-info",
          "s-sos-candidate-list-blocked",
          "s-douglas-candidate-export",
          "s-fec-candidate",
          "s-fec-form2"
        ]
      },
      "actions": [
        {
          "id": "ae-status-1",
          "date": "2025-06-23",
          "body": "Douglas County election-office export lists Soetaert as filed for U.S. Senator, Democratic, by fee, with documents filed with the State of Kansas.",
          "sourceIds": [
            "s-douglas-candidate-export"
          ]
        },
        {
          "id": "ae-status-2",
          "date": "2025-09-22",
          "body": "FEC Form 2 filed for Michael Soetaert, Democratic candidate for U.S. Senate in Kansas, naming Michael Soetaert for Senate as principal campaign committee.",
          "sourceIds": [
            "s-fec-form2"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-status-1",
          "platform": "ActBlue",
          "observation": "ActBlue page says Soetaert is filed with both the Federal Election Commission and Kansas Secretary of State.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-actblue"
          ],
          "mappedToIssueId": "i-status-ballot-access"
        },
        {
          "id": "ss-crossref-2",
          "platform": "YouTube",
          "observation": "Michael Soetaert has a current public campaign footprint centered on a campaign site, ActBlue, YouTube, Instagram, Threads, Bluesky, Facebook, X, and a TikTok link. The campaign site links out to the social accounts, ActBlue, the FEC candidate page, the Kansas Secretary of State candidate page, vote.gov, and a merchandise page.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-status-ballot-access"
        },
        {
          "id": "ss-crossref-4",
          "platform": "YouTube",
          "observation": "The campaign site issue tiles link to YouTube videos or clips labeled reproductive rights, affordability, voting rights, Department of Peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-status-ballot-access"
        }
      ]
    },
    {
      "id": "i-campaign-finance",
      "title": "Campaign Finance / Donor Posture",
      "stated": {
        "text": "Soetaert's ActBlue page presents a small-dollar posture, displays a $49.99 maximum donation request, and says he boycotts special-interest PACs, super PACs, and canary PACs. FEC confirms his candidacy but shows no 2025-2026 financial summary at access, so donor/funding patterns are not confirmed.",
        "sourceIds": [
          "s-actblue",
          "s-fec-candidate",
          "s-fec-form2"
        ]
      },
      "actions": [
        {
          "id": "ae-finance-1",
          "date": "2025-09-22",
          "body": "FEC Form 2 designated Michael Soetaert for Senate as principal campaign committee.",
          "sourceIds": [
            "s-fec-form2"
          ]
        },
        {
          "id": "ae-finance-2",
          "date": "2026-05-19",
          "body": "FEC candidate overview showed no available 2025-2026 financial-summary data for Soetaert.",
          "sourceIds": [
            "s-fec-candidate"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-finance-1",
          "platform": "ActBlue",
          "observation": "Donation page says Soetaert boycotts special-interest PACs, super PACs, and canary PACs and displays a $49.99 maximum donation request.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-actblue"
          ],
          "mappedToIssueId": "i-campaign-finance"
        },
        {
          "id": "ss-finance-2",
          "platform": "YouTube",
          "observation": "Visible campaign video titles include Citizens United and ballot-box/voter-registration themes.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-campaign-finance"
        },
        {
          "id": "ss-crossref-3",
          "platform": "YouTube",
          "observation": "The issue labels repeated across the campaign site and YouTube were reproductive rights, affordability, voting rights, peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS. The Kansas-local YouTube labels were Wellington, Johnson and Sumner, affordability/safety, World Wheat Capital, and America's Breadbasket.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-campaign-finance"
        }
      ]
    },
    {
      "id": "i-abortion-reproductive-policy",
      "title": "Abortion / Reproductive Policy",
      "stated": {
        "text": "Current campaign-controlled metadata and social bios identify reproductive rights or reproductive freedom as a campaign theme. KCUR/Kansas News Service reports that his website says he changed his mind on abortion after 'Kansans voted for bodily autonomy.'",
        "sourceIds": [
          "s-campaign-home",
          "s-instagram",
          "s-threads",
          "s-bluesky",
          "s-kcur-guide"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-abortion-1",
          "platform": "Campaign site",
          "observation": "Campaign-site metadata describes Soetaert as a progressive Democrat for U.S. Senate respecting reproductive rights.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-abortion-reproductive-policy"
        },
        {
          "id": "ss-abortion-2",
          "platform": "Instagram / Threads / Bluesky",
          "observation": "Public profile metadata included reproductive freedom, women's rights, ERA, or reproductive-rights tags; post bodies were not available in logged-out capture.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-instagram",
            "s-threads",
            "s-bluesky"
          ],
          "mappedToIssueId": "i-abortion-reproductive-policy"
        },
        {
          "id": "ss-abortion-3",
          "platform": "YouTube",
          "observation": "Visible YouTube titles included a reproductive-rights video label.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-abortion-reproductive-policy"
        }
      ]
    },
    {
      "id": "i-marriage-lgbtq-policy",
      "title": "Marriage & Family / LGBTQ+ Policy",
      "stated": {
        "text": "Candidate-controlled materials foreground Soetaert's gay/LGBTQIAP2S+ identity and Equality Act advocacy. Secondary coverage reports he supported the Respect for Marriage Act in 2022 and has described himself or been described as the first openly gay candidate to run for a U.S. Senate seat from Kansas.",
        "sourceIds": [
          "s-campaign-home",
          "s-instagram",
          "s-threads",
          "s-bluesky",
          "s-iola-2022",
          "s-kcur-guide",
          "s-kofo-2025"
        ]
      },
      "actions": [
        {
          "id": "ae-lgbtq-1",
          "date": "2022-07-28",
          "body": "Iola Register interview reported Soetaert cited unsuccessful outreach to Kansas senators for Equality Act support as part of his party-switch explanation.",
          "sourceIds": [
            "s-iola-2022"
          ]
        },
        {
          "id": "ae-lgbtq-2",
          "date": "2025-12-30",
          "body": "KCUR/Kansas News Service reported Soetaert supported the Respect for Marriage Act in 2022.",
          "sourceIds": [
            "s-kcur-guide"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-lgbtq-1",
          "platform": "Campaign site",
          "observation": "Campaign-site metadata describes Soetaert as gay/LGBTQIAP2S+ and an activist/advocate/ally for the Equality Act.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-marriage-lgbtq-policy"
        },
        {
          "id": "ss-lgbtq-2",
          "platform": "YouTube",
          "observation": "Visible YouTube titles included LGBTQIAP2S+ SALT and identity-politics labels.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-marriage-lgbtq-policy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "mikeforkansas.my.canva.site",
          "observation": "The campaign site metadata describes Soetaert this way: \"Michael Soetaert PROGRESSIVE DEMOCRAT for U.S. Senate respecting reproductive rights. He's also a GAY LGBTQIAP2S+ activist advocate & ally for the Equality Act.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-marriage-lgbtq-policy"
        }
      ]
    },
    {
      "id": "i-local-governance-stewardship",
      "title": "Local Governance / Office Stewardship",
      "stated": {
        "text": "Soetaert's recent local-government record includes brief Wellington City Council service followed by a December 2025 resignation accepted by the city council. The City of Wellington release says he requested the action and that the seat was declared vacant.",
        "sourceIds": [
          "s-wellington-resignation",
          "s-kcur-guide"
        ]
      },
      "actions": [
        {
          "id": "ae-governance-1",
          "date": "2025-12-12",
          "body": "City release says Soetaert submitted a request for the governing body to place his resignation on the agenda.",
          "sourceIds": [
            "s-wellington-resignation"
          ]
        },
        {
          "id": "ae-governance-2",
          "date": "2025-12-16",
          "body": "Wellington City Council adopted Resolution 6412 accepting the resignation and declaring the seat vacant.",
          "sourceIds": [
            "s-wellington-resignation"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "YouTube",
          "observation": "Kansas and local-place signals were present, but lighter than the national issue and self-definition signals. Visible YouTube titles named Wellington, Johnson and Sumner, affordability and safety, World Wheat Capital, and America's Breadbasket. Examples included \"Michael Soetaert for United States Senate in Wellington, Kansas michael-soetaert\", \"Michael Soetaert for United States Senate representing Kansas...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-local-governance-stewardship"
        },
        {
          "id": "ss-crossref-3",
          "platform": "YouTube",
          "observation": "YouTube: https://www.youtube.com/@mikeforkansas was the strongest post-level source in the local social harvest. Public channel capture on May 11, 2026 showed 30 visible videos from roughly November 2025 through February 2026. Topic labels included reproductive rights, Citizens United, voting/ballot box, affordability/safety, Department of Peace/peace, LGBTQIAP2S+ equality, Kansas wheat/food-place language, and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-local-governance-stewardship"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Instagram",
          "observation": "Instagram: https://www.instagram.com/michael.soetaert1/ public metadata in local harvest showed 52 followers, 0 following, and 205 posts, with bio tags for progressive Democrat, Kansas, gay, LGBTQIAP2S+, reproductive freedom, women's rights, and ERA. Individual post bodies were not available in the logged-out capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-local-governance-stewardship"
        }
      ]
    },
    {
      "id": "i-public-health-campaign-method",
      "title": "Public Health / Campaign Method",
      "stated": {
        "text": "In a 2022 interview, Soetaert explained an online-only or pandemic campaign and linked his party switch to pandemic management, Jan. 6, and LGBTQ issues. This is a 2022 candidate-statement record, not a detailed 2026 public-health platform.",
        "sourceIds": [
          "s-iola-2022"
        ]
      },
      "actions": [
        {
          "id": "ae-health-1",
          "date": "2022-07-28",
          "body": "Iola Register reported Soetaert was eschewing in-person campaigning during the COVID-19 pandemic and quoted him saying he would choose voter health and safety over in-person campaigning.",
          "sourceIds": [
            "s-iola-2022"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-health-1",
          "platform": "Campaign site / social footprint",
          "observation": "Current 2026 campaign presence is broad online through Canva, ActBlue, YouTube, Instagram, Threads, Bluesky, Facebook, X, TikTok, and vote.gov/FEC/SOS links; no reason for platform choices is inferred.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-public-health-campaign-method"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "The public harvest did not capture detailed candidate-authored posts on water, the Ogallala Aquifer, Farm Bill policy, crop prices, ethanol, rural hospital closures, Fort Riley, veterans' facilities, Medicare, Social Security, tribal issues, higher education, or county-by-county service delivery. This is a limitation of the accessible public record reviewed, not a statement about private posts, deleted posts, or...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-public-health-campaign-method"
        },
        {
          "id": "ss-crossref-4",
          "platform": "secure.actblue.com",
          "observation": "Mike is challenging the Republican incumbent Senator, Doctor Roger Marshall.\"](https://secure.actblue.com/donate/michael-soetaert) The same page says he is filed with \"BOTH the Federal Election Commission and the Kansas Secretary of State.\" No public endorsements, surrogate networks, or recurring allied accounts were captured in the accessible post-level record.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-actblue"
          ],
          "mappedToIssueId": "i-public-health-campaign-method"
        }
      ]
    },
    {
      "id": "i-rural-kansas-affordability-agriculture",
      "title": "Rural Kansas / Affordability / Agriculture-Adjacent Themes",
      "stated": {
        "text": "Soetaert's visible campaign labels reference Wellington, Johnson & Sumner, affordability/safety, World Wheat Capital, and America's Breadbasket. The accessible record did not contain a detailed Farm Bill, water, rural hospital, crop-price, ethanol, or county-service plan.",
        "sourceIds": [
          "s-youtube-channel",
          "s-votesmart"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-rural-1",
          "platform": "YouTube",
          "observation": "Visible video titles included Wellington, Johnson & Sumner, affordability/safety, World Wheat Capital, and America's Breadbasket.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-rural-kansas-affordability-agriculture"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Instagram",
          "observation": "Michael Soetaert's current public campaign record presents a small-dollar, platform-heavy Senate campaign whose clearest repeated themes are reproductive rights, LGBTQIAP2S+ equality, voting, affordability, campaign finance, and peace. His campaign site describes him as \"Michael Soetaert PROGRESSIVE DEMOCRAT for U.S. Senate respecting reproductive rights. He's also a GAY LGBTQIAP2S+ activist advocate & ally for...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-rural-kansas-affordability-agriculture"
        },
        {
          "id": "ss-crossref-4",
          "platform": "YouTube",
          "observation": "The campaign site labels included reproductive rights, affordability, voting rights, Department of Peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS, while YouTube titles included \"Michael Soetaert for United States Senate representing Kansas CITIZENS UNITED michael-soetaert\", \"Michael Soetaert for United States Senate representing Kansas AFFORDABILITY SAFETY michael-soetaert\", and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-rural-kansas-affordability-agriculture"
        }
      ]
    },
    {
      "id": "i-religious-liberty-faith-signal",
      "title": "Religious Liberty / Faith Signal",
      "stated": {
        "text": "Vote Smart lists Soetaert's religion as Christian, but no current church affiliation or candidate-controlled religious-liberty platform was verified. No issue position is inferred from the biographical religion field.",
        "sourceIds": [
          "s-votesmart"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Faith / religious liberty: Vote Smart lists religion as Christian, and local raw research references a Roman Catholic adoptive-family background. No current church affiliation or candidate-controlled religious-liberty platform was verified. Do not infer policy positions from faith self-description.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-channel"
          ],
          "mappedToIssueId": "i-religious-liberty-faith-signal"
        }
      ]
    },
    {
      "id": "i-unconfirmed-issue-areas",
      "title": "Unconfirmed Public Positions",
      "stated": {
        "text": "No current candidate-controlled detailed position or action evidence was confirmed for guns, immigration/border policy, marijuana/drug policy, Farm Bill or water policy, rural hospitals, Medicare, Social Security, veterans, broadband, higher education, or energy. Do not infer positions from party label, identity, social tags, or broad Vote Smart issue categories.",
        "sourceIds": [
          "s-votesmart"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "recordSummary": "Former/recent Wellington City Council member; 2026 Democratic U.S. Senate candidate",
  "ownWordsNarrative": "summary: Broad candidate-controlled online footprint, strongest post-level evidence on YouTube; profile metadata only on Instagram, Threads, and Bluesky; limited or blocked post access on Facebook, X, and TikTok.; platforms: platform: Campaign site; status: Active; sourceIds: s-campaign-home; platform: ActBlue; status: Active fundraising page; sourceIds: s-actblue; platform: YouTube; status: 30 visible videos captured 2026-05-11; sourceIds: s-youtube-channel; s-social-harvest-local; platform: Instagram; status: Public metadata only; 52 followers, 0 following, 205 posts at capture; sourceIds: s-instagram; platform: Threads; status: Public metadata only; 3 followers, 225 Threads at capture; sourceIds: s-threads; platform: Bluesky; status: Public metadata only; 22,749 followers, 2,380 following, 235 writes/posts at capture; sourceIds: s-bluesky; platform: Facebook / X / TikTok; status: Linked by campaign, but reliable post-level logged-out harvest was not available; sourceIds: s-social-harvest-local",
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Soetaert. The available record describes him as Christian and references a Roman Catholic adoptive-family background, but no congregation or denomination is named in his current public materials.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records",
    "narrative": "No itemized donors, total raised, cash on hand, debts, PAC receipts, or independent-expenditure totals were confirmed in this pass.",
    "donors": [],
    "reportingPeriod": "Most recent public filing reviewed",
    "source": "SOETAERT, MICHAEL - Candidate overview"
  },
  "sources": [
    {
      "id": "s-sos-candidate-info",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Kansas Secretary of State - Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "National candidates file with the Secretary of State",
        "A candidate is not considered filed until petition/declaration and fee are received",
        "The 2026 primary filing deadline is 12:00 p.m. Monday, June 1, 2026",
        "One U.S. Senator is an office to be elected in 2026"
      ]
    },
    {
      "id": "s-sos-candidate-list-blocked",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections_upcoming_candidate.aspx",
      "title": "Candidate List",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The official candidate-list endpoint could not be directly read in this environment"
      ]
    },
    {
      "id": "s-douglas-candidate-export",
      "tier": "primary",
      "url": "https://candidatefiling.us/Info/CFPdf?c=181035409877&e=545606222&j=2795522868&s=802933811&st=KS",
      "title": "2026 Primary Election Candidate Filing Information",
      "publisher": "Douglas County, Kansas election office export",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "U.S. Senator listing includes Michael \"Mike\" Soetaert (D), Wellington",
        "Filing date listed as 2025-06-23",
        "Filing method listed as fee",
        "Filed documents listed as filed with the State of Kansas"
      ]
    },
    {
      "id": "s-fec-candidate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S2KS00097/",
      "title": "SOETAERT, MICHAEL - Candidate overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate for Senate, Kansas",
        "Candidate ID S2KS00097",
        "Democratic Party",
        "Challenger",
        "No 2025-2026 financial summary available at access",
        "Current statement of candidacy FEC-1916441 filed 2025-09-22"
      ]
    },
    {
      "id": "s-fec-form2",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/862/202509229790380862/202509229790380862.pdf",
      "title": "FEC Form 2 - Statement of Candidacy",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate name Michael Soetaert",
        "Office sought Senate",
        "State KS",
        "Party Democratic Party",
        "Principal campaign committee Michael Soetaert for Senate"
      ]
    },
    {
      "id": "s-wellington-resignation",
      "tier": "primary",
      "url": "https://www.cityofwellington.net/newsview.aspx?nid=6940",
      "title": "Media Release: Wellington City Council Accepts Resignation of Council Member Michael \"Mike\" Soetaert",
      "publisher": "City of Wellington",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Soetaert was a Wellington City Council member",
        "Soetaert requested that his resignation be placed on the agenda on 2025-12-12",
        "Council accepted the resignation on 2025-12-16",
        "Resolution 6412 declared the seat vacant",
        "City release states he was pursuing higher office"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://mikeforkansas.my.canva.site/",
      "title": "Michael Soetaert for Senate",
      "publisher": "Michael Soetaert for Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign-controlled website is active",
        "Site metadata describes Soetaert as a progressive Democrat for U.S. Senate",
        "Site metadata references reproductive rights and LGBTQ+/Equality Act advocacy",
        "Site links ActBlue, FEC, Kansas SOS, vote.gov, and social accounts",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "Observed public online activity mapped to Rural Kansas / Affordability / Agriculture-Adjacent Themes."
      ]
    },
    {
      "id": "s-actblue",
      "tier": "primary",
      "url": "https://secure.actblue.com/donate/michael-soetaert",
      "title": "Mike Soetaert for Senate",
      "publisher": "ActBlue / Michael Soetaert for Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Active donation page for Mike Soetaert for Senate",
        "Page says Soetaert is filed with FEC and Kansas Secretary of State",
        "Page says Soetaert boycotts special-interest PACs, super PACs, and canary PACs",
        "Page displays a $49.99 maximum donation request",
        "Observed public online activity mapped to Public Health / Campaign Method."
      ]
    },
    {
      "id": "s-youtube-channel",
      "tier": "social",
      "url": "https://www.youtube.com/@mikeforkansas",
      "title": "Mike for Kansas YouTube channel",
      "publisher": "YouTube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Visible video titles include reproductive rights, Citizens United, ballot box, register to vote, affordability/safety, peace, LGBTQIAP2S+ SALT, World Wheat Capital, and America's Breadbasket",
        "Highest-viewed captured item was 'about the BALLOT BOX' with 1.5K visible views at capture"
      ]
    },
    {
      "id": "s-instagram",
      "tier": "social",
      "url": "https://www.instagram.com/michael.soetaert1/",
      "title": "@michael.soetaert1",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile metadata listed 52 followers, 0 following, and 205 posts",
        "Profile text included tags for progressive Democrat, Kansas, gay, LGBTQIAP2S+, reproductive freedom, women's rights, and ERA"
      ]
    },
    {
      "id": "s-threads",
      "tier": "social",
      "url": "https://www.threads.com/@michael.soetaert1",
      "title": "@michael.soetaert1",
      "publisher": "Threads",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile metadata listed 3 followers and 225 Threads",
        "Profile text referenced progressive Democrat, U.S. Senate, Kansas, gay, LGBTQIAP2S+, and reproductive freedom"
      ]
    },
    {
      "id": "s-bluesky",
      "tier": "social",
      "url": "https://bsky.app/profile/michaelsoetaert.bsky.social",
      "title": "@michaelsoetaert.bsky.social",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Profile metadata listed 22,749 followers, 2,380 following, and 235 writes/posts",
        "Profile description listed tags including U.S. Senate, LGBTQIAP2S+, Equality Act, Kansas, peace, SOGI, DEIA, women's rights, ERA, reproductive freedom, and vote.gov"
      ]
    },
    {
      "id": "s-votesmart",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192430/michael-soetaert",
      "title": "Michael Soetaert's Biography",
      "publisher": "Vote Smart",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Full name Michael Soetaert",
        "Birth place Wellington, Kansas",
        "Home city Wellington, Kansas",
        "Religion field lists Christian",
        "Prior candidacies listed for Kansas Senate District 32, President, U.S. Senate Kansas, and U.S. House Kansas District 1",
        "Priority issues field lists broad issue topics"
      ]
    },
    {
      "id": "s-iola-2022",
      "tier": "secondary",
      "url": "https://www.iolaregister.com/news/candidate-eschews-in-person-campaign",
      "title": "Candidate eschews in-person campaign",
      "publisher": "The Iola Register",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Soetaert ran for U.S. Senate as a Democrat in 2022",
        "Article says he was a former Republican who switched parties because of pandemic, Jan. 6, and LGBTQ issues",
        "Article says he was the first openly gay candidate to run for a U.S. Senate seat from Kansas",
        "Interview quotes discuss online/pandemic campaign and Equality Act outreach"
      ]
    },
    {
      "id": "s-kcur-guide",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Who's running to represent Kansas in the U.S. Senate in 2026?",
      "publisher": "KCUR / Kansas News Service",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Soetaert was until recently a Wellington city council member",
        "Former Republican; has run for various local, state, and federal offices",
        "Grew up in Spring Hill, Kansas",
        "Website says he changed his mind on abortion after 'Kansans voted for bodily autonomy'",
        "Soetaert supported the Respect for Marriage Act in 2022"
      ]
    },
    {
      "id": "s-kofo-2025",
      "tier": "secondary",
      "url": "https://kofo.com/2025/10/31/mico-native-to-run-for-senate-2/",
      "title": "MICO Native to Run for Senate",
      "publisher": "KOFO Radio",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Spring Hill native Michael Soetaert filed to run for U.S. Senate in 2026",
        "Report says he touted himself as the first openly gay candidate to run for U.S. Senate representing Kansas"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=iB74LF3KHAc",
      "title": "YouTube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Local Governance / Office Stewardship.",
        "Kansas and local-place signals were present, but lighter than the national issue and self-definition signals. Visible YouTube titles named Wellington, Johnson and Sumner, affordabi"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.youtube.com/@mikeforkansas`",
      "title": "YouTube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Local Governance / Office Stewardship.",
        "YouTube: https://www.youtube.com/@mikeforkansas was the strongest post-level source in the local social harvest. Public channel capture on May 11, 2026 showed 30 visible videos fro"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "social",
      "url": "https://www.instagram.com/michael.soetaert1/`",
      "title": "Instagram / Instagram",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Local Governance / Office Stewardship.",
        "Instagram: https://www.instagram.com/michael.soetaert1/ public metadata in local harvest showed 52 followers, 0 following, and 205 posts, with bio tags for progressive Democrat, Ka"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=FvgZQTEDBac",
      "title": "YouTube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Rural Kansas / Affordability / Agriculture-Adjacent Themes.",
        "The campaign site labels included reproductive rights, affordability, voting rights, Department of Peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS,"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(MICHAEL_SOETAERT_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[michael-soetaert.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
