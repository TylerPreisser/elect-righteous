# Christy Cauble Davis — Sleuth Pass (P2.a)

**Date:** 2026-05-19  
**Agent:** Worker 12 (online-sleuth/deepening pass)  
**Candidate slug:** christy-cauble-davis  
**Race:** U.S. Senate, Kansas — Democratic candidate/challenger

## Scope and Guardrails

This pass used existing local research first (`raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and current v2 UI data), then targeted web verification for current official status, candidate-controlled positions, FEC finance, USDA role status, and online/social relevance. Primary sources were prioritized: FEC, Kansas Secretary of State pages, USDA, campaign website, Kansas SOS official results, and candidate-controlled social. News sources were used for event quotes and public forum context. Social signals are recorded only as observed public behavior, not as belief inference.

## Official Status Observations

- **Federal candidacy confirmed by FEC.** The FEC candidate page lists **DAVIS, CHRISTY**, candidate ID `S6KS00247`, as a **Democratic Party** candidate for **Senate, Kansas**, type of candidacy **Challenger**. The current Statement of Candidacy is listed as filed **2025-08-05**.  
  - Issue-mapping note: status evidence belongs in the profile/status block, not an issue card.
  - Source: FEC candidate page — `https://www.fec.gov/data/candidate/S6KS00247/?cycle=2026`

- **Principal campaign committee confirmed by FEC.** FEC lists `CHRISTY DAVIS FOR KANSAS 2026`, committee ID `C00915934`, as an **Active - Quarterly Senate - Principal campaign committee**, registration date **2025-08-13**, treasurer **Jose Lara**, mailing address **715 1st St., Cottonwood Falls, KS 66845**.  
  - Issue-mapping note: finance/profile status, not a policy issue.
  - Source: FEC committee page — `https://www.fec.gov/data/committee/C00915934/?cycle=2026`

- **Kansas SOS filing process verified, candidate-list access blocked.** The Kansas Secretary of State says candidates for national, state, legislative, and judicial offices must file with the Secretary of State, and a candidate is not considered filed until petition/declaration and fee are received. The same page lists the 2026 primary filing deadline as **12:00 p.m. Monday, June 1, 2026**. The SOS candidate-list endpoint (`elections_upcoming_candidate.aspx`) returned a CloudFront 403 in this environment, so I could not independently confirm the live Kansas SOS candidate-list entry.  
  - Issue-mapping note: official ballot/filing caveat for status block.
  - Source: Kansas SOS candidate information — `https://www.sos.ks.gov/elections/candidate-information.html`
  - Source: Kansas SOS candidate list endpoint — `https://sos.ks.gov/elections/elections_upcoming_candidate.aspx`

- **Election dates verified by Kansas SOS.** Kansas SOS lists the 2026 primary election on **August 4, 2026** and general election on **November 3, 2026**.  
  - Source: Kansas SOS important election dates — `https://sos.ks.gov/elections/important-election-dates.html`

## Observations (Issue-Mapped)

### Issue: Rural development, local control, and community infrastructure

- The campaign homepage says Davis would bring decision-making back to Kansas by restoring federal offices, investing in infrastructure, and trusting local leaders. It also lists affordable housing, broadband, clean water, hospitals, farmers, and small businesses in broad platform language.  
  - Issue-mapping note: belongs to rural development/community infrastructure because the campaign frames federal resources, infrastructure, local leaders, housing, broadband, water, hospitals, farmers, and small businesses as connected local-capacity issues.
  - Source: campaign homepage — `https://www.christydavisforkansas.com/`

- The campaign launch post says Davis worked in all 105 Kansas counties and would focus on rural healthcare, public education, inflation, immigration, and accountability.  
  - Issue-mapping note: rural-development profile evidence and issue-statement evidence; not a voting record.
  - Source: campaign launch — `https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u`

- USDA's current leadership pages show Davis is **not** the current Kansas Rural Development state director; Gimmie Jo Jansonius is listed/announced as the current state director in May 2025.  
  - Issue-mapping note: profile/status correction. Use "former Kansas state director" in narrative, not current.
  - Source: USDA current state director announcement — `https://www.rd.usda.gov/newsroom/news-release/usda-announces-new-presidential-appointee-serve-rural-kansas`
  - Source: USDA state directors — `https://www.rd.usda.gov/about-rd/leadership/state-directors`

### Issue: Healthcare, Medicaid, rural hospitals, and public benefits

- The campaign homepage says Davis will defend Social Security, Medicare, Medicaid, and public education from cuts and privatization. It also says she will fight for affordable housing, clean water, and hospitals.  
  - Issue-mapping note: belongs to healthcare/public benefits because Medicaid, Medicare, rural hospitals, and public programs are named in the candidate's own platform.
  - Source: campaign homepage — `https://www.christydavisforkansas.com/`

- KCUR reported that Davis said by email she wants to restore funding for Medicaid, special education, and affordable housing programs.  
  - Issue-mapping note: belongs to healthcare/public benefits and education/housing; source is secondary but candidate-attributed.
  - Source: KCUR candidate guide — `https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates`

### Issue: Education and public schools

- The campaign homepage pairs "strong communities" with fully funded public schools and says Davis will defend public education from cuts and privatization.  
  - Issue-mapping note: belongs to public education because the campaign directly names schools, public education, and cuts/privatization.
  - Source: campaign homepage — `https://www.christydavisforkansas.com/`

- The campaign launch post lists public education among "issues that matter most to Kansans" and frames strong public schools as part of her campaign focus.  
  - Issue-mapping note: candidate-controlled stated position, not action evidence.
  - Source: campaign launch — `https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u`

### Issue: Immigration and due process

- The campaign homepage says Davis would push for immigration reform that honors work, offers legal pathways, ends inhumane detention, and protects people who keep the economy alive.  
  - Issue-mapping note: belongs to immigration because it is direct candidate-controlled platform text.
  - Source: campaign homepage — `https://www.christydavisforkansas.com/`

- KCUR reported the campaign website language as support for immigration reform that provides a pathway to citizenship and ends policies the campaign characterizes as terrorizing families and depriving Kansans of due process.  
  - Issue-mapping note: secondary summary of campaign-controlled language; useful as a cross-check.
  - Source: KCUR candidate guide — `https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates`

### Issue: Trade, tariffs, agriculture, and small business

- The campaign homepage says Davis will support farmers and small businesses with fair policies, financing, and job training that works for Kansans.  
  - Issue-mapping note: belongs to agriculture/economy because farmers, small businesses, financing, and job training are named.
  - Source: campaign homepage — `https://www.christydavisforkansas.com/`

- KCUR reported Davis said President Trump's tariffs were causing instability for farmers and rural communities.  
  - Issue-mapping note: belongs to tariffs/agriculture/economy; secondary source, candidate-attributed by email.
  - Source: KCUR candidate guide — `https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates`

### Issue: Abortion / reproductive rights

- News From The States/Kansas Reflector coverage of the March 8, 2026 Kansas Democratic Party convention reported Davis discussing Chase County's 2022 abortion amendment vote and saying rural Kansas could not be counted out. The same article says the candidates supported women choosing what happens with their bodies.  
  - Issue-mapping note: belongs to reproductive rights because the quote appeared under the article's reproductive-rights section and concerns the Kansas abortion-rights vote. It is not a detailed policy plan.
  - Source: News From The States — `https://www.newsfromthestates.com/article/kansas-democrats-us-senate-campaign-focus-defeating-gop-incumbent`

- The campaign homepage reviewed on 2026-05-19 did **not** use the word abortion in the accessible text; the v2 UI's older phrase "protecting reproductive freedom" should be kept only if the compiler can re-anchor it to a candidate-controlled page or launch/blog page.  
  - Issue-mapping note: blocker/caution for narrative writer. Do not overstate a detailed abortion position beyond the convention quote and any verified campaign text.

### Issue: Voting rights, democracy, and government accountability

- The campaign homepage says Davis will protect voting rights, fight for transparency, and make sure government works for all rather than the wealthy and well-connected.  
  - Issue-mapping note: belongs to democracy/accountability because voting rights and transparency are explicitly named.
  - Source: campaign homepage — `https://www.christydavisforkansas.com/`

- Bluesky post on 2026-03-20 says: "Roger Marshall doesn't want voter ID. He wants voter suppression. And Kansas has seen this ALLLLL before. I’ll fight like hell to protect your right to vote."  
  - Issue-mapping note: social signal belongs to voting rights because it is candidate-controlled public posting about voter ID/voter suppression.
  - Source: Bluesky post — `https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mhirokptnk2u`

- The campaign launch says Davis argues Congress has power to fund constituent programs and hold the Executive Branch to account.  
  - Issue-mapping note: belongs to government accountability and federal-program stewardship.
  - Source: campaign launch — `https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u`

## Online and Social Signals

- **Campaign website** is active and links to Instagram, Facebook, X/Twitter, and Bluesky. Accessible website text includes broad issue language on local control, public schools, healthcare/public benefits, farmers/small business, immigration, and voting rights.  
  - Source: `https://www.christydavisforkansas.com/`

- **Bluesky** is candidate-controlled and publicly accessible through the API. On 2026-05-19, `@cdavis4kansas.bsky.social` displayed name "Christy Davis for Kansas," description "Paid for by Christy Davis for Kansas, José Lara, Treasurer," 120 followers, 18 following, and 46 posts. This is one post more than the local May 11 harvest, which had 45 posts.  
  - Source: `https://bsky.app/profile/cdavis4kansas.bsky.social`
  - API checked: `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=cdavis4kansas.bsky.social`

- **Newest Bluesky post after local harvest:** 2026-05-12 fundraising post: "Chip in today and help us keep building a campaign Kansas can be proud of." Engagement at 2026-05-19 API check: 1 like, 1 repost, 0 replies.  
  - Issue-mapping note: campaign/fundraising signal only; does not change policy mapping.
  - Source URL form: `https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mloq4emgys2c`

- **Facebook and Instagram**: local harvest captured page/profile metadata only. I did not obtain logged-out post bodies or comments during this pass. Treat those platforms as presence-only unless a later browser-authenticated harvest captures post text.  
  - Facebook: `https://www.facebook.com/christydavisforkansas`
  - Instagram: `https://www.instagram.com/cdavis4kansas/`

- **X/Twitter**: campaign website links `@CDavis4Kansas`; logged-out post body remained inaccessible in the local harvest. No issue claims should rest on X unless post content is directly captured.

- **Faith/religion online relevance:** Hays Post reported Davis saying she attended church three times a week growing up, publicly identifying with Christianity, and describing a church experience she objected to. This is attributable public speech, but it should not be used to infer policy positions or spiritual status.  
  - Source: Hays Post Democracy Fest coverage — `https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9`

## Funding Signals

- FEC committee summary updated since the local v2 UI data: through **2026-03-31**, `CHRISTY DAVIS FOR KANSAS 2026` reported **$137,068.03** total receipts, **$137,068.03** total individual contributions, **$130,543.03** itemized individual contributions, **$6,525.00** unitemized individual contributions, **$0.00** party committee contributions, **$0.00** other committee contributions, **$0.00** candidate contributions, **$77,796.18** total disbursements, **$59,271.85** ending cash on hand, and **$0.00** debts/loans owed by the committee.  
  - Source: FEC committee page — `https://www.fec.gov/data/committee/C00915934/?cycle=2026`

- Itemized donor names were not reliably extracted in this environment. The FEC website exposes transaction pages, but the OpenFEC API `DEMO_KEY` was over rate limit during this pass; the FEC HTML transaction tables did not render donor rows server-side.  
  - Blocker note: downstream compiler should cite aggregate FEC totals and avoid naming "top donors" unless a later pass exports Schedule A from FEC.

## Unmapped Observations

- 2020 prior candidacy is official and relevant to experience/history, not a current issue stance. Kansas SOS official results show Davis received **9,962 votes (37.40%)** in the 2020 Democratic primary for U.S. House District 1, losing to Kali Barnett.  
  - Source: Kansas SOS 2020 Primary Official Vote Totals — `https://sos.ks.gov/elections/20elec/2020_Primary_Official_Vote_Totals.pdf`

- Davis has no legislative voting record in the local or verified source set. Action evidence for issues therefore consists mostly of public administration background, campaign filing, campaign speech, event statements, and candidate-controlled platform language, not roll-call votes.

## Could Not Confirm / Blockers

- Could not confirm Davis on the live Kansas SOS candidate list because the candidate-list endpoint returned CloudFront 403 to this environment. FEC federal candidacy and committee status are confirmed.
- Could not extract FEC itemized donor rows or top donors because OpenFEC API access via `DEMO_KEY` was over rate limit and FEC transaction tables did not render server-side rows.
- Could not verify Facebook comments, Instagram post text, or X post text from a logged-out path; keep those as presence-only unless authenticated/browser capture is available.
- Could not find a candidate-controlled detailed statement on guns, marriage/LGBTQ policy, religious liberty, marijuana/drug policy, foster care/adoption, capital punishment, or a detailed Farm Bill/Ogallala Aquifer plan in the verified accessible sources.

## Downstream Cautions

1. Use "former Kansas USDA Rural Development state director" rather than current state director; USDA currently lists Gimmie Jo Jansonius.
2. Do not infer positions from party label, religious self-description, follows, attendance at Democratic events, or associations. Use only candidate statements and documented actions.
3. Update campaign finance from the older $80,478.96 figure to FEC's current $137,068.03 receipts through 2026-03-31 if the UI compiler is using current FEC.
4. Treat social posts as observed public communications. Map them only to the issue actually discussed in the post.
