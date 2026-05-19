/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JASON_HART_V2: CandidateFullV2 = {
  "slug": "jason-hart",
  "name": "Jason Hart",
  "party": "D",
  "position": "U.S. Senate, Kansas",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "U.S. Senate candidate",
  "hometown": "Wichita, KS",
  "family": "Married with family. Describes himself as a husband and father.",
  "campaignWebsite": "https://hartforsenate.com/",
  "issues": [
    {
      "id": "i-official-candidacy-accountability",
      "title": "Official Candidacy / Public Accountability",
      "stated": {
        "text": "Hart is running as a Democratic candidate for U.S. Senate in Kansas. His campaign frames the run around public service, accountability, and representing Kansas rather than party leadership.",
        "sourceIds": [
          "s-fec-candidate",
          "s-campaign-home",
          "s-campaign-about",
          "s-kmuw-profile"
        ]
      },
      "actions": [
        {
          "id": "a-fec-candidate-filing",
          "date": "2026-03-23",
          "body": "Hart filed his FEC Statement of Candidacy for U.S. Senate in Kansas as a Democratic challenger.",
          "sourceIds": [
            "s-fec-candidate"
          ]
        },
        {
          "id": "a-committee-registration",
          "date": "2026-03-06",
          "body": "Hart for Senate registered with the FEC as Hart's principal campaign committee.",
          "sourceIds": [
            "s-fec-committee"
          ]
        },
        {
          "id": "a-state-filing-table",
          "date": "2026-03-16",
          "body": "The Douglas County candidate-filing table lists Jason Hart (D), Wichita, filed by fee for U.S. Senator, with documents filed with the State of Kansas.",
          "sourceIds": [
            "s-douglas-filing-table"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-filing-post",
          "platform": "Bluesky",
          "observation": "On 2026-03-16, Hart's campaign account posted that he had filed to run for U.S. Senate and listed family costs, health, veterans, immigration, Big Tech, and AI as focus areas; API readback showed 7 likes and 1 repost.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-filing-post"
          ],
          "mappedToIssueId": "i-official-candidacy-accountability"
        },
        {
          "id": "ss-crossref-2",
          "platform": "YouTube",
          "observation": "YouTube: Hart for Kansas / @kansanshavehart — 7 public Shorts in RSS, channel published 2026-03-10; subscriber count not exposed in RSS/logged-out capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-official-candidacy-accountability"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Instagram",
          "observation": "Instagram: @kansanshavehart — account located; logged-out page exposed username but not reliable public counts in capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-official-candidacy-accountability"
        }
      ]
    },
    {
      "id": "i-child-safety-public-safety-technology",
      "title": "Child Safety / Public Safety / Technology",
      "stated": {
        "text": "Hart's campaign biography centers his work prosecuting child abuse, domestic violence, sex trafficking, and complex crimes. His issues page calls for holding Big Tech accountable for children's safety, privacy, exploitation, and AI guardrails.",
        "sourceIds": [
          "s-campaign-about",
          "s-campaign-issues",
          "s-kcur-guide"
        ]
      },
      "actions": [
        {
          "id": "a-doj-lacy",
          "date": "2025-07-28",
          "body": "The U.S. Attorney's Office for the District of Kansas reported that Assistant U.S. Attorney Jason Hart prosecuted a child-sexual-abuse-materials production case resulting in a 30-year sentence.",
          "sourceIds": [
            "s-doj-lacy"
          ]
        },
        {
          "id": "a-doj-follett",
          "date": "2025-08-14",
          "body": "The U.S. Attorney's Office for the District of Kansas reported that Assistant U.S. Attorney Jason Hart prosecuted a child-sexual-abuse-materials distribution case resulting in a 126-month sentence.",
          "sourceIds": [
            "s-doj-follett"
          ]
        },
        {
          "id": "a-kcur-big-tech-position",
          "date": "2026-05-19",
          "body": "KCUR reports Hart wants Congress to more aggressively regulate Big Tech on privacy, children, exploitation, radicalization, and misinformation.",
          "sourceIds": [
            "s-kcur-guide"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-ict-sos",
          "platform": "Bluesky",
          "observation": "On 2026-03-31, Hart's campaign account posted that he attended ICT SOS's anniversary event and had worked with the organization on prevention education and, as a prosecutor, on sex-offender accountability and survivor support.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-ict-sos"
          ],
          "mappedToIssueId": "i-child-safety-public-safety-technology"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Bluesky",
          "observation": "Visible audience response is small on Bluesky and larger on YouTube Shorts. The most-engaged Bluesky item was the March 16 filing post, with 7 likes, 1 repost, 0 replies, and 0 quotes as of the May 11, 2026 capture (source). Two issue-and-record posts each had 2 likes and 2 reposts: the April 23 rural-healthcare post (source) and the March 26 prosecutor-record post (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-filing-post"
          ],
          "mappedToIssueId": "i-child-safety-public-safety-technology"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "March 31 Bluesky post says he worked with ICT SOS on prevention education and, as prosecutor, on sex-offender accountability and survivor support.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-child-safety-public-safety-technology"
        }
      ]
    },
    {
      "id": "i-congressional-authority-tariffs-foreign-policy",
      "title": "Congressional Authority / Tariffs / Foreign Policy",
      "stated": {
        "text": "Hart's campaign issues page calls for asserting congressional authority, stopping conflicts with allies and enemies, stopping tariff and market-destabilizing chaos, and holding administration officials accountable.",
        "sourceIds": [
          "s-campaign-issues",
          "s-kcur-guide",
          "s-kmuw-profile"
        ]
      },
      "actions": [
        {
          "id": "a-kcur-oversight-trade",
          "date": "2026-05-19",
          "body": "KCUR reports Hart said he wants to reassert congressional oversight against executive overreach, specifically on immigration and trade policy.",
          "sourceIds": [
            "s-kcur-guide"
          ]
        },
        {
          "id": "a-kmuw-foreign-policy-tariffs",
          "date": "2026-03-25",
          "body": "KMUW/Kansas Reflector reports Hart criticized foreign policy, tariffs, and dismantling the U.S. Department of Education.",
          "sourceIds": [
            "s-kmuw-profile"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-foreign-policy-thread",
          "platform": "Bluesky",
          "observation": "On 2026-05-11, Hart's campaign account posted a thread opposing the Iran war and calling for investigation and accountability.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-foreign-policy-thread"
          ],
          "mappedToIssueId": "i-congressional-authority-tariffs-foreign-policy"
        },
        {
          "id": "ss-tariffs-thread",
          "platform": "Bluesky",
          "observation": "On 2026-05-11, Hart's campaign account posted that he opposed tariffs and said Congress should curtail presidential tariff power.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-tariffs-thread"
          ],
          "mappedToIssueId": "i-congressional-authority-tariffs-foreign-policy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "hartforsenate.com",
          "observation": "Issues page: hartforsenate.com/issues lists ten issue areas: Assert Congressional Authority; Provide for Our Veterans; Provide for Kansans' Health; Promote Rational Immigration Solutions; Help Rural Kansas; Recognize Our Shared Dignity; Protect Public Education; Protecting Reproductive Rights; Hold Big Tech Accountable; Promote Democratic Values.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-congressional-authority-tariffs-foreign-policy"
        }
      ]
    },
    {
      "id": "i-healthcare-veterans",
      "title": "Healthcare / Veterans",
      "stated": {
        "text": "Hart's issues page supports expanding Medicare and Medicaid, breaking up vertically integrated healthcare markets, separating health insurance from employment, fully funding and staffing VA service providers, expanding Tricare coverage for surviving children, and increasing transitional services.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "a-healthcare-platform",
          "date": "2026-05-19",
          "body": "Hart's campaign issues page published healthcare and veterans policy priorities including Medicare/Medicaid expansion and VA staffing.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-rural-health",
          "platform": "Bluesky",
          "observation": "On 2026-04-23, Hart's campaign account posted support for increasing healthcare providers in rural Kansas; API readback showed 2 likes and 2 reposts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-rural-health"
          ],
          "mappedToIssueId": "i-healthcare-veterans"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Website issue bullets include \"Incentivize and Reward Water Conservation Efforts,\" \"Re-open Foreign Markets for Kansas Farmers/Ranchers,\" \"Expand Medicare and Medicaid,\" \"Fully Fund and Staff Our VA Service Providers,\" \"Support Kansans' 2022 Vote,\" and \"Take the Target Off Our Children.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-healthcare-veterans"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Across 35 captured Bluesky posts, Hart's largest single category is policy and issue statements, with 14 posts, or 40 percent of the captured original feed. The March 16 opening post wrote, \"Jason Hart has filed to run for U.S. Senate\" (source), then listed family bills, health, veterans, immigration, and children online as the opening frame. On April 23, he wrote, \"Rural Kansas needs real access to healthcare...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-filing-post"
          ],
          "mappedToIssueId": "i-healthcare-veterans"
        }
      ]
    },
    {
      "id": "i-immigration-border",
      "title": "Immigration / Border",
      "stated": {
        "text": "Hart's issues page calls for rational immigration solutions, says cruelty is not an American solution, calls for stopping shifting requirements for lawful entry, and supports engaging businesses and NGOs in sponsorship.",
        "sourceIds": [
          "s-campaign-issues",
          "s-kcur-guide",
          "s-kmuw-profile"
        ]
      },
      "actions": [
        {
          "id": "a-kmuw-pretti-immigration",
          "date": "2026-03-25",
          "body": "KMUW/Kansas Reflector reports Hart linked Alex Pretti's killing to his decision to run and to his concerns about immigration enforcement.",
          "sourceIds": [
            "s-kmuw-profile"
          ]
        },
        {
          "id": "a-kcur-immigration-oversight",
          "date": "2026-05-19",
          "body": "KCUR reports Hart identified immigration policy as one area where he wants Congress to reassert oversight against executive overreach.",
          "sourceIds": [
            "s-kcur-guide"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-immigration-post",
          "platform": "Bluesky",
          "observation": "On 2026-04-29, Hart's campaign account posted that immigration policy should be safe and fair, protect communities, and create clear lawful pathways for workforce and economic contribution.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-immigration"
          ],
          "mappedToIssueId": "i-immigration-border"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Most-used tags: #HartForKansas, #KansansHaveHart, #Democrats, #Senate. Issue tags appeared on immigration enforcement, Pride, Iran, and ICT SOS posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-immigration-border"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Kansas Reflector",
          "observation": "On immigration enforcement, he wrote, \"Renée Good and Alex Pretti were killed, and five‑year‑old Liam Ramos was taken into ICE custody during a federal enforcement operation\" (source). In the KMUW/Kansas Reflector interview, he said, \"That service has been as an advocate for your interests\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-immigration-border"
        }
      ]
    },
    {
      "id": "i-rural-kansas-agriculture-water",
      "title": "Rural Kansas / Agriculture / Water",
      "stated": {
        "text": "Hart's issues page supports water-conservation incentives, reopening foreign markets for Kansas farmers and ranchers, and breaking up vertically integrated markets.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "a-rural-platform",
          "date": "2026-05-19",
          "body": "Hart's campaign issues page published a rural Kansas platform focused on water conservation, farm/ranch markets, and market concentration.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-farm-bureau-event",
          "platform": "Bluesky",
          "observation": "On 2026-04-22, Hart's campaign account posted that he attended Harvey County Farm Bureau Association's Politics and Pastries event in Hesston and heard from farmers across the political spectrum.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-farm-bureau"
          ],
          "mappedToIssueId": "i-rural-kansas-agriculture-water"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "2026-04-22 — \"I’m grateful to Melissa Drzymalla and the Harvey County Farm Bureau Association for hosting Politics and Pastries in Hesston. I appreciated hearing from farmers across the political spectrum who share concerns about being overlooked and unheard. Thank you to everyone who showed up and engaged.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-rural-kansas-agriculture-water"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Across the captured Bluesky period the feed contains no posts about the Farm Bill by name, Fort Riley by name, higher-education affordability, housing costs, child care costs, or the Ogallala Aquifer by name.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-profile"
          ],
          "mappedToIssueId": "i-rural-kansas-agriculture-water"
        }
      ]
    },
    {
      "id": "i-education-special-education",
      "title": "Education / Special Education",
      "stated": {
        "text": "Hart's issues page supports equal access, students with disabilities, and low-income districts. KMUW/Kansas Reflector reports he criticized dismantling the U.S. Department of Education.",
        "sourceIds": [
          "s-campaign-issues",
          "s-kmuw-profile"
        ]
      },
      "actions": [
        {
          "id": "a-education-platform",
          "date": "2026-05-19",
          "body": "Hart's campaign issues page published education priorities on equal access, students with disabilities, and low-income districts.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-education-thread",
          "platform": "Bluesky",
          "observation": "On 2026-05-11, Hart's campaign account posted that he opposes vouchers and would pursue full funding of special education.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-education-thread"
          ],
          "mappedToIssueId": "i-education-special-education"
        },
        {
          "id": "ss-crossref-2",
          "platform": "hartforsenate.com",
          "observation": "His events feed includes Dodge City, Pittsburg, Harvey County, Kingman County, Riley County, Manhattan, Hesston, and Wichita. His official issues page separately lists water conservation, foreign markets for farmers and ranchers, Medicaid and Medicare expansion, VA staffing, and public education as policy priorities (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-education-special-education"
        }
      ]
    },
    {
      "id": "i-reproductive-rights",
      "title": "Reproductive Rights",
      "stated": {
        "text": "Hart's issues page supports Kansans' 2022 vote, bodily autonomy, and longer paid leave. KMUW/Kansas Reflector reports Hart said he is pro-choice on abortion.",
        "sourceIds": [
          "s-campaign-issues",
          "s-kmuw-profile"
        ]
      },
      "actions": [
        {
          "id": "a-reproductive-platform",
          "date": "2026-05-19",
          "body": "Hart's campaign issues page published reproductive-rights priorities including support for Kansans' 2022 vote and bodily autonomy.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        },
        {
          "id": "a-kmuw-abortion-position",
          "date": "2026-03-25",
          "body": "KMUW/Kansas Reflector reports Hart said he is pro-choice on abortion.",
          "sourceIds": [
            "s-kmuw-profile"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-lgbtq-civil-rights",
      "title": "LGBTQ / Civil Rights",
      "stated": {
        "text": "Hart's issues page calls for supporting LGBTQ+ children and neighbors, promoting civil rights, and stopping distraction from real issues.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "a-shared-dignity-platform",
          "date": "2026-05-19",
          "body": "Hart's campaign issues page published a shared-dignity section naming LGBTQ+ children and neighbors and civil rights.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-little-apple-pride",
          "platform": "Bluesky",
          "observation": "On 2026-04-28, Hart's campaign account posted that his family attended Little Apple Pride and described the event as a community and inclusion setting.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bsky-pride"
          ],
          "mappedToIssueId": "i-lgbtq-civil-rights"
        }
      ]
    },
    {
      "id": "i-campaign-finance-democratic-values",
      "title": "Campaign Finance / Democratic Values",
      "stated": {
        "text": "Hart's issues page supports overturning Citizens United, publicly funded elections, and prohibiting insider trading.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "a-fec-first-summary",
          "date": "2026-03-31",
          "body": "FEC aggregate data for Hart for Senate showed $10,741.42 in receipts, $5,372.27 in disbursements, $5,369.15 cash on hand, $0.00 party committee contributions, and $0.00 other committee contributions through March 31, 2026.",
          "sourceIds": [
            "s-fec-candidate",
            "s-fec-committee"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whereTheyWorship": "Public sources identify Hart as Christian, but they do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "$10,741.42",
    "narrative": "FEC aggregate data shows small-dollar/unitemized and itemized individual receipts, plus candidate contributions and candidate loans; the summary shows $0.00 from party committees and other committees.",
    "donors": [],
    "undisclosed": "Itemized donor names/top donors were not extracted because FEC transaction rows did not render server-side and OpenFEC DEMO_KEY was over rate limit.",
    "reportingPeriod": "2026-01-01 to 2026-03-31",
    "source": "HART, JASON - Candidate overview"
  },
  "sources": [
    {
      "id": "s-fec-candidate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00304/",
      "title": "HART, JASON - Candidate overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hart is listed as a Democratic candidate for U.S. Senate in Kansas",
        "FEC candidate ID is S6KS00304",
        "Type of candidacy is Challenger",
        "Current Statement of Candidacy was filed 2026-03-23",
        "FEC financial summary covers 2026-01-01 through 2026-03-31"
      ]
    },
    {
      "id": "s-fec-committee",
      "tier": "primary",
      "url": "https://www.fec.gov/data/committee/C00942391/",
      "title": "HART FOR SENATE - committee overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hart for Senate is Hart's principal campaign committee",
        "Committee ID is C00942391",
        "Registration date is 2026-03-06",
        "Treasurer is Richard L. Gaskill",
        "Aggregate receipts were $10,741.42 through 2026-03-31",
        "Aggregate disbursements were $5,372.27 through 2026-03-31",
        "Ending cash on hand was $5,369.15 through 2026-03-31",
        "Party committee and other committee contributions were $0.00 in the FEC summary period"
      ]
    },
    {
      "id": "s-douglas-filing-table",
      "tier": "primary",
      "url": "https://candidatefiling.us/Info/Default?c=181035409877&e=545606222&j=2795522868&s=802933811&st=KS",
      "title": "Candidate Filing Information - August 4, 2026 Primary Election",
      "publisher": "Douglas County / Modus Elections Software",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "U.S. Senator table lists Jason Hart (D), Wichita",
        "Date filed is 2026-03-16",
        "Filing method is Fee",
        "Filed documents column says documents filed with the State of Kansas"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://hartforsenate.com/",
      "title": "Jason Hart for U.S. Senate",
      "publisher": "Hart for Senate campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Homepage identifies Hart as running for U.S. Senate",
        "Homepage says Hart has spent 21+ years serving Kansans, prosecuting child abuse, advocating for families, and mentoring the next generation",
        "Homepage lists the campaign's ten policy-priority headings",
        "Footer says paid for by the Hart For Senate Committee",
        "Footer links Facebook, Instagram, Bluesky, X, TikTok, and YouTube"
      ]
    },
    {
      "id": "s-campaign-about",
      "tier": "primary",
      "url": "https://hartforsenate.com/about/",
      "title": "About Jason Hart",
      "publisher": "Hart for Senate campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Biography says Hart grew up in Russell, Beloit, Wellington, and Dodge City",
        "Biography says Hart earned scholarships to the University of Kansas for college and law school",
        "Biography says Hart worked in Dodge City, Shawnee County District Attorney's Office, Kansas Attorney General's Office, and as an Assistant U.S. Attorney",
        "Biography says Hart prosecuted child abuse, domestic violence, sex trafficking, and complex multi-jurisdictional crimes",
        "Biography says Hart and wife Julia are raising two sons and served as guardians to three additional children"
      ]
    },
    {
      "id": "s-campaign-issues",
      "tier": "primary",
      "url": "https://hartforsenate.com/issues/",
      "title": "Issues That Matter to Kansans",
      "publisher": "Hart for Senate campaign",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign lists congressional authority, veterans, healthcare, immigration, rural Kansas, shared dignity, education, reproductive rights, Big Tech, and democratic values",
        "Healthcare section supports expanding Medicare and Medicaid, breaking up vertically integrated markets, and separating health insurance from employment",
        "Rural Kansas section supports water conservation incentives, foreign markets for farmers/ranchers, and breaking up vertically integrated markets",
        "Veterans section supports fully funding and staffing VA providers",
        "Immigration section says cruelty is not an American solution and supports business/NGO sponsorship",
        "Shared dignity section supports LGBTQ+ kids and neighbors and civil rights",
        "Reproductive rights section supports Kansans' 2022 vote and bodily autonomy",
        "Democratic values section supports overturning Citizens United, public financing, and prohibiting insider trading"
      ]
    },
    {
      "id": "s-bsky-profile",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social",
      "title": "Hart for Kansas Bluesky profile",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "API readback showed display name Hart for Kansas",
        "API readback showed 6 followers, 2 follows, and 59 posts",
        "API readback showed account creation date 2026-03-06"
      ]
    },
    {
      "id": "s-bsky-filing-post",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mh7eajrwos2f",
      "title": "Bluesky filing post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-03-16 post says Hart filed to run for U.S. Senate",
        "Post names family bills, health, veterans, immigration, Big Tech, and AI as focus areas",
        "API readback showed 7 likes and 1 repost",
        "Observed public online activity mapped to Child Safety / Public Safety / Technology.",
        "Observed public online activity mapped to Healthcare / Veterans."
      ]
    },
    {
      "id": "s-bsky-ict-sos",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3miegj7xaa22s",
      "title": "ICT SOS post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-03-31 post says Hart attended ICT SOS's 15th Anniversary Celebration",
        "Post says he worked with ICT SOS on prevention education and, as a prosecutor, on sex-offender accountability and survivor support"
      ]
    },
    {
      "id": "s-bsky-rural-health",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk6fxkfosc2x",
      "title": "Rural healthcare post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-04-23 post supports increasing healthcare providers in rural Kansas",
        "API readback showed 2 likes and 2 reposts"
      ]
    },
    {
      "id": "s-bsky-farm-bureau",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk4bhpgo4c2p",
      "title": "Harvey County Farm Bureau Association post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-04-22 post says Hart attended Politics and Pastries in Hesston hosted by Harvey County Farm Bureau Association",
        "Post says he heard from farmers across the political spectrum"
      ]
    },
    {
      "id": "s-bsky-immigration",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mkndqn52ts25",
      "title": "Immigration policy post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-04-29 post supports immigration policy that is safe, fair, protects communities, and creates lawful pathways"
      ]
    },
    {
      "id": "s-bsky-pride",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mklf7g4loc22",
      "title": "Little Apple Pride post",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-04-28 post says Hart's family attended Little Apple Pride",
        "Post says everyone should feel safe and supported being themselves"
      ]
    },
    {
      "id": "s-bsky-education-thread",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mllpw6ufzs2y",
      "title": "Education and special education thread",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-05-11 thread says Hart opposes vouchers",
        "Thread says Hart would pursue full funding of special education"
      ]
    },
    {
      "id": "s-bsky-foreign-policy-thread",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mllpes72os2y",
      "title": "Iran and accountability thread",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-05-11 thread says Hart opposes the war in Iran",
        "Thread calls for investigation and accountability"
      ]
    },
    {
      "id": "s-bsky-tariffs-thread",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mllphgogis2y",
      "title": "Tariffs and congressional authority thread",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026-05-11 thread says Hart opposes tariffs",
        "Thread says Congress should curtail presidential tariff power"
      ]
    },
    {
      "id": "s-kmuw-profile",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Democratic candidate in U.S. Senate race opens arms to Kansas Republicans lost 'in the wilderness'",
      "publisher": "KMUW / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Article reports Hart quit his Assistant U.S. Attorney job in early March 2026",
        "Article reports Hart moved from independent to Republican in February 2026 and later to Democrat",
        "Article reports Hart worked in Dodge City, Shawnee County DA's office, Kansas AG's office, and U.S. Attorney's Office",
        "Article reports Hart described himself as pro-law-enforcement and friendly to the Second Amendment",
        "Article reports Hart said he was pro-choice on abortion",
        "Article reports Hart criticized tariffs and dismantling the U.S. Department of Education",
        "Article reports Hart linked Alex Pretti's killing to his decision to run"
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
        "Guide identifies Hart as a Wichita Democrat and former federal prosecutor",
        "Guide says Hart worked under Democratic and Republican officials and was an assistant attorney general in Kansas",
        "Guide says Hart specialized in child exploitation and cybercrime cases",
        "Guide reports Hart wants to reassert congressional oversight on immigration and trade policy",
        "Guide reports Hart wants Congress to regulate Big Tech on privacy, children, exploitation, radicalization, and misinformation"
      ]
    },
    {
      "id": "s-doj-lacy",
      "tier": "primary",
      "url": "https://www.justice.gov/usao-ks/pr/kansas-man-sentenced-30-years-prison-child-porn-production",
      "title": "Kansas man sentenced to 30 years in prison for child pornography production",
      "publisher": "U.S. Attorney's Office, District of Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "DOJ says Assistant U.S. Attorney Jason Hart prosecuted a Kansas child-sexual-abuse-materials production case",
        "Release was published 2025-07-28"
      ]
    },
    {
      "id": "s-doj-follett",
      "tier": "primary",
      "url": "https://www.justice.gov/usao-ks/pr/el-dorado-man-sentenced-child-pornography-distribution",
      "title": "El Dorado man sentenced for child pornography distribution",
      "publisher": "U.S. Attorney's Office, District of Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "DOJ says Assistant U.S. Attorney Jason Hart prosecuted a child-sexual-abuse-materials distribution case",
        "Release was published 2025-08-14"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://www.youtube.com/@kansanshavehart",
      "title": "YouTube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Official Candidacy / Public Accountability.",
        "YouTube: Hart for Kansas / @kansanshavehart — 7 public Shorts in RSS, channel published 2026-03-10; subscriber count not exposed in RSS/logged-out capture."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.instagram.com/kansanshavehart/",
      "title": "Instagram / Instagram",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Official Candidacy / Public Accountability.",
        "Instagram: @kansanshavehart — account located; logged-out page exposed username but not reliable public counts in capture."
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hartforsenate.com/issues",
      "title": "hartforsenate.com / Hartforsenate",
      "publisher": "Hartforsenate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Congressional Authority / Tariffs / Foreign Policy.",
        "Issues page: hartforsenate.com/issues lists ten issue areas: Assert Congressional Authority; Provide for Our Veterans; Provide for Kansans' Health; Promote Rational Immigration Sol",
        "Observed public online activity mapped to Education / Special Education."
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mj3eahdcyc2p",
      "title": "Kansas Reflector / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Border.",
        "On immigration enforcement, he wrote, \"Renée Good and Alex Pretti were killed, and five‑year‑old Liam Ramos was taken into ICE custody during a federal enforcement operation\" (sour"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JASON_HART_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jason-hart.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
