/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CHRISTY_CAUBLE_DAVIS_V2: CandidateFullV2 = {
  "slug": "christy-cauble-davis",
  "name": "Christy Cauble Davis",
  "party": "D",
  "position": "U.S. Senate, Kansas",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "Rural Development Administrator",
  "born": "Kansas. Fifth-generation Kansan",
  "hometown": "Cottonwood Falls, KS (Chase County)",
  "campaignWebsite": "https://www.christydavisforkansas.com/",
  "issues": [
    {
      "id": "i-rural-development-local-control",
      "title": "Rural Development / Local Control / Infrastructure",
      "stated": {
        "text": "Davis's campaign frames rural development as a central theme. Her website says she would bring decision-making back to Kansas by restoring federal offices, investing in infrastructure, and trusting local leaders. It also says she would fight for affordable housing, broadband, strong schools, clean water, and hospitals, and support farmers and small businesses with fair policies, financing, and job training.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-launch"
        ]
      },
      "actions": [
        {
          "id": "a-former-usda-rd-role",
          "date": "2022-2025",
          "body": "Davis previously served as Kansas state director for USDA Rural Development, according to local source material and secondary reporting. Current USDA pages confirm she no longer holds that role because Gimmie Jo Jansonius is now listed as Kansas state director.",
          "sourceIds": [
            "s-usda-current-director-release",
            "s-usda-state-directors",
            "s-kcur-guide"
          ]
        },
        {
          "id": "a-prior-house-run-2020",
          "date": "2020-08-04",
          "body": "Ran in the 2020 Democratic primary for Kansas's 1st Congressional District and received 9,962 votes, 37.40%, losing to Kali Barnett.",
          "sourceIds": [
            "s-ks-sos-2020-primary"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-local-presence-hays-democracyfest",
          "platform": "Hays Post",
          "observation": "Hays Post reported that Davis highlighted her work across rural Kansas, including projects in downtown Hays, and said Kansas has a unique culture and history that affects how issues should be addressed.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-democracyfest"
          ],
          "mappedToIssueId": "i-rural-development-local-control"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Kansas Reflector",
          "observation": "2025-08-18 — \"I’m proud to share my story with the Kansas Reflector. Kansans deserve a real voice in Washington—one that shows up, listens, and fights for our communities, from rural towns to our biggest cities.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-rural-development-local-control"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Bluesky",
          "observation": "Across the captured Bluesky period, the feed contains no posts focused on Social Security, Medicare, detailed farm bill text, the Ogallala Aquifer, abortion policy details beyond convention coverage, foster care, adoption, capital punishment, housing policy specifics beyond campaign-site language, or district-level water policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-rural-development-local-control"
        }
      ]
    },
    {
      "id": "i-healthcare-public-benefits",
      "title": "Healthcare / Medicaid / Medicare / Public Benefits",
      "stated": {
        "text": "Davis's campaign says she would defend Social Security, Medicare, Medicaid, and public education from cuts and privatization. KCUR reported that Davis said by email she wants to restore funding for Medicaid, special education, and affordable housing programs.",
        "sourceIds": [
          "s-campaign-home",
          "s-kcur-guide"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "2025-09-15 — \"I caught up with Daisy, my mom’s insurance agent from El Dorado who has known her for a lifetime. I met two of my sister’s former art students from Maize High—he’s now an accountant, she’s a social worker.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-healthcare-public-benefits"
        },
        {
          "id": "ss-crossref-3",
          "platform": "KCUR",
          "observation": "2025-12-30 — Davis said in an email that she wants \"to restore funding for Medicaid, special education and affordable housing programs\"; KCUR also reported that her website says she will \"fight for immigration reform that provides a pathway to citizenship and ends inhumane policies that terrorize families and unconstitutionally deprive Kansans of due process.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-healthcare-public-benefits"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "The candidate website issue page addresses healthcare, education, immigration, and agriculture in broad terms; the Bluesky feed contains fewer issue-specific policy posts than event, accountability, and campaign-presence posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-healthcare-public-benefits"
        }
      ]
    },
    {
      "id": "i-education-public-schools",
      "title": "Education / Public Schools",
      "stated": {
        "text": "The campaign homepage connects strong communities with fully funded public schools and says Davis would defend public education from cuts and privatization. Her campaign launch also listed public education and strong public schools among the issues she would focus on.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-launch",
          "s-kcur-guide"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "The highest-engagement post by likes in the captured Bluesky set was a March 29 post from Wyandotte County, with 8 likes, 0 reposts, 1 reply, and 0 quotes as of the May 11, 2026 capture. It read, \"Kansans stood up today alongside millions across the country. In Wyandotte County, I stood with parents, veterans, teachers, union members, small business owners, and neighbors. And we don't do kings\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-education-public-schools"
        },
        {
          "id": "ss-crossref-3",
          "platform": "newsfromthestates.com",
          "observation": "At the Kansas Democratic Party convention, News From The States reported that she said, \"Only 2% of the folks who live in rural America are engaged in production agriculture\" (source); the same coverage said she named health care, mental health care, and education as rural issues.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-nfts-convention"
          ],
          "mappedToIssueId": "i-education-public-schools"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Across the captured Bluesky period the feed contains no posts focused on Social Security, Medicare, detailed Farm Bill text, the Ogallala Aquifer, foster care, adoption, capital punishment, or district-level water policy. The campaign website does address health care, education, immigration, agriculture, Social Security, Medicare, Medicaid, public schools, affordable housing, broadband, clean water, hospitals,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-education-public-schools"
        }
      ]
    },
    {
      "id": "i-immigration-due-process",
      "title": "Immigration / Due Process",
      "stated": {
        "text": "Davis's campaign says she would push for immigration reform that honors work, offers legal pathways, ends inhumane detention, and protects the people who keep the economy alive. KCUR also reported campaign website language saying she supports immigration reform that provides a pathway to citizenship and ends policies the campaign described as terrorizing families and depriving Kansans of due process.",
        "sourceIds": [
          "s-campaign-home",
          "s-kcur-guide"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "The campaign launch post says Davis worked in all 105 Kansas counties and would focus on rural healthcare, public education, inflation, immigration, and accountability.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-immigration-due-process"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Issue-mapping note: belongs to immigration because it is direct candidate-controlled platform text.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-immigration-due-process"
        },
        {
          "id": "ss-crossref-5",
          "platform": "KCUR",
          "observation": "KCUR reported the campaign website language as support for immigration reform that provides a pathway to citizenship and ends policies the campaign characterizes as terrorizing families and depriving Kansans of due process.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-immigration-due-process"
        }
      ]
    },
    {
      "id": "i-economy-tariffs-agriculture",
      "title": "Economy / Tariffs / Agriculture / Small Business",
      "stated": {
        "text": "Davis's campaign says she would support farmers and small businesses with fair policies, financing, and job training. KCUR reported that Davis says President Trump's tariffs are causing instability for farmers and rural communities.",
        "sourceIds": [
          "s-campaign-home",
          "s-kcur-guide"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Topic distribution of Bluesky posts by manual coding: federal accountability / opposition to named national figures — 16 posts (35.6%); Kansas local events, local economy, and community presence — 14 posts (31.1%); veterans, public safety, political violence, and national tragedies — 8 posts (17.8%); fundraising and campaign asks — 3 posts (6.7%); personal, family, and cultural observances — 4 posts (8.9%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-profile"
          ],
          "mappedToIssueId": "i-economy-tariffs-agriculture"
        }
      ]
    },
    {
      "id": "i-abortion-reproductive-rights",
      "title": "Abortion / Reproductive Rights",
      "stated": {
        "text": "No detailed federal abortion-policy plan was found in the candidate-controlled sources accessible on 2026-05-19. News From The States/Kansas Reflector reported Davis discussing Chase County's 2022 Kansas abortion amendment vote under a reproductive-rights section and saying rural Kansas could not be counted out; the same article summarized the Democratic candidates as supporting women choosing what happens with their bodies.",
        "sourceIds": [
          "s-nfts-convention"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-reproductive-rights-convention",
          "platform": "News From The States / Kansas Reflector",
          "observation": "At the March 8, 2026 Kansas Democratic Party convention, Davis discussed Chase County's abortion amendment vote and said rural Kansas could not be counted out.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-nfts-convention"
          ],
          "mappedToIssueId": "i-abortion-reproductive-rights"
        }
      ]
    },
    {
      "id": "i-voting-rights-accountability",
      "title": "Voting Rights / Democracy / Government Accountability",
      "stated": {
        "text": "The campaign homepage says Davis would protect voting rights, fight for transparency, and make sure government works for all rather than the wealthy and well-connected. Her launch post says Congress has power to fund constituent programs and hold the Executive Branch to account.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-launch"
        ]
      },
      "actions": [
        {
          "id": "a-fec-candidacy-filing",
          "date": "2025-08-05",
          "body": "Filed a Statement of Candidacy with the FEC for the 2026 Kansas U.S. Senate race.",
          "sourceIds": [
            "s-fec-candidate"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-bluesky-voting-rights",
          "platform": "Bluesky",
          "observation": "On 2026-03-20 Davis posted about voter ID, voter suppression, and protecting the right to vote.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-bluesky-voting-rights"
          ],
          "mappedToIssueId": "i-voting-rights-accountability"
        }
      ]
    },
    {
      "id": "i-religion-public-identity",
      "title": "Religion / Public Identity",
      "stated": {
        "text": "Public sources reviewed did not identify a current church affiliation. Hays Post reported that Davis said she attended church three times a week growing up and publicly identified with Christianity. This is recorded only as attributable public speech and should not be used to infer policy positions or spiritual status.",
        "sourceIds": [
          "s-hayspost-democracyfest"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-no-confirmed-position-set",
      "title": "Issues Without Confirmed Candidate-Controlled Detail",
      "stated": {
        "text": "No candidate-controlled detailed position was found in the verified accessible sources for guns, marriage and family/LGBTQ policy, religious liberty as a legal-policy issue, marijuana/drug policy, foster care/adoption, capital punishment, detailed Farm Bill text, the Ogallala Aquifer, or district-level water policy. This page should not infer positions on those issues from party label, faith language, follows, events, or associations.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-launch",
          "s-kcur-guide"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "ownWordsNarrative": "platforms_checked: Campaign website; Bluesky; Facebook; Instagram; X/Twitter; LinkedIn from local harvest; YouTube from local harvest; Truth Social/Gab/Gettr/Substack/Reddit/TikTok from local harvest; summary: The public Bluesky profile is the only platform with post text and engagement accessible during this pass. Facebook, Instagram, and X/Twitter are presence-only from logged-out capture unless a later browser-authenticated harvest captures post text. Bluesky API showed 46 posts on 2026-05-19, one more than the May 11 local harvest.; sourceIds: s-campaign-home; s-bluesky-profile; s-bluesky-fundraising-20260512",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "$137,068.03",
    "narrative": "FEC aggregate data shows all receipts as individual contributions: $130,543.03 itemized and $6,525.00 unitemized; party committee, other committee, candidate contributions, transfers, and loans were $0.00.",
    "donors": [],
    "undisclosed": "Itemized donor names/top donors were not extracted because OpenFEC DEMO_KEY was over rate limit and transaction rows did not render server-side.",
    "reportingPeriod": "2025-07-01 to 2026-03-31",
    "source": "CHRISTY DAVIS FOR KANSAS 2026 - committee overview"
  },
  "sources": [
    {
      "id": "s-fec-candidate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00247/?cycle=2026",
      "title": "DAVIS, CHRISTY - Candidate overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Christy Davis is listed as a Democratic candidate for U.S. Senate in Kansas",
        "FEC candidate ID is S6KS00247",
        "Type of candidacy is Challenger",
        "Current Statement of Candidacy was filed 2025-08-05"
      ]
    },
    {
      "id": "s-ks-sos-2020-primary",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/20elec/2020_Primary_Official_Vote_Totals.pdf",
      "title": "2020 Primary Election Official Vote Totals",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "In the 2020 U.S. House District 1 Democratic primary, Christy Cauble Davis received 9,962 votes, 37.40%",
        "Kali Barnett received 16,671 votes, 62.60%"
      ]
    },
    {
      "id": "s-usda-current-director-release",
      "tier": "primary",
      "url": "https://www.rd.usda.gov/newsroom/news-release/usda-announces-new-presidential-appointee-serve-rural-kansas",
      "title": "USDA Announces New Presidential Appointee to Serve Rural Kansas",
      "publisher": "USDA Rural Development",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "USDA announced Gimmie Jo Jansonius as Kansas Rural Development state director on 2025-05-06",
        "State directors serve as the chief executive officer of USDA Rural Development in states and territories"
      ]
    },
    {
      "id": "s-usda-state-directors",
      "tier": "primary",
      "url": "https://www.rd.usda.gov/about-rd/leadership/state-directors",
      "title": "State Directors",
      "publisher": "USDA Rural Development",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Current USDA Rural Development state directors page lists Gimmie Jo Jansonius for Kansas"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://www.christydavisforkansas.com/",
      "title": "Home",
      "publisher": "Christy Davis for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says Davis is a fifth-generation Kansan",
        "Campaign lists local control, infrastructure, affordable housing, broadband, strong schools, clean water, hospitals, Social Security, Medicare, Medicaid, public education, farmers, small businesses, immigration reform, voting rights, and transparency",
        "Campaign footer says paid for by Christy Davis for Kansas, Jose Lara, Treasurer",
        "Campaign website links Instagram, Facebook, X/Twitter, and Bluesky",
        "Observed public online activity mapped to Education / Public Schools."
      ]
    },
    {
      "id": "s-campaign-launch",
      "tier": "primary",
      "url": "https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u",
      "title": "Christy Davis Launches Campaign for U.S. Senate",
      "publisher": "Christy Davis for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says Davis formally launched her U.S. Senate campaign",
        "Campaign says Davis worked in every Kansas county",
        "Campaign says she is focused on rural healthcare, public education, inflation, immigration, economic policy, and Washington accountability",
        "Davis says Congress has power to fund programs and hold the Executive Branch to account"
      ]
    },
    {
      "id": "s-bluesky-profile",
      "tier": "social",
      "url": "https://bsky.app/profile/cdavis4kansas.bsky.social",
      "title": "Christy Davis for Kansas",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Display name is Christy Davis for Kansas",
        "Description says paid for by Christy Davis for Kansas, Jose Lara, Treasurer",
        "Public API returned 120 followers, 18 following, and 46 posts on 2026-05-19"
      ]
    },
    {
      "id": "s-bluesky-voting-rights",
      "tier": "social",
      "url": "https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mhirokptnk2u",
      "title": "Bluesky post on voter ID / voter suppression",
      "publisher": "Bluesky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Davis posted about voter ID, voter suppression, and protecting the right to vote on 2026-03-20"
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
        "KCUR describes Davis as from Cottonwood Falls and former Kansas director for USDA rural development",
        "KCUR says Davis ran unsuccessfully for Kansas's 1st Congressional District in 2020",
        "KCUR reports Davis wants to restore funding for Medicaid, special education, and affordable housing programs",
        "KCUR reports Davis says tariffs are causing instability for farmers and rural communities",
        "KCUR reports campaign website language on immigration reform and due process"
      ]
    },
    {
      "id": "s-nfts-convention",
      "tier": "secondary",
      "url": "https://www.newsfromthestates.com/article/kansas-democrats-us-senate-campaign-focus-defeating-gop-incumbent",
      "title": "Kansas Democrats in U.S. Senate campaign focus on defeating GOP incumbent",
      "publisher": "News From The States / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Coverage quotes Davis on rural Kansas and Chase County's abortion amendment vote",
        "Coverage quotes Davis on working with Rep. Pat Proctor on an issue they agreed on",
        "Observed public online activity mapped to Education / Public Schools."
      ]
    },
    {
      "id": "s-hayspost-democracyfest",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
      "title": "Kansas Democrats wrap up Democracy Fest in Hays",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reports Davis highlighted work across rural Kansas, including downtown Hays projects",
        "Hays Post quotes Davis saying Kansas has a unique culture and history",
        "Hays Post reports Davis publicly identified with Christianity and described a church experience she objected to",
        "Faith-related remarks are attributable public speech, not policy inference"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mi5ubacwqc2p",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Education / Public Schools.",
        "The highest-engagement post by likes in the captured Bluesky set was a March 29 post from Wyandotte County, with 8 likes, 0 reposts, 1 reply, and 0 quotes as of the May 11, 2026 ca"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CHRISTY_CAUBLE_DAVIS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[christy-cauble-davis.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
