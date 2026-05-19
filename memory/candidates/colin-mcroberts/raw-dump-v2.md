# Raw Dump v2 - Colin McRoberts

**Candidate slug:** colin-mcroberts  
**Office:** U.S. House, Kansas District 1, Democratic candidate  
**Date written:** 2026-05-19  
**Agent:** Worker 14, deep-scraper / narrative-writer equivalent  
**Scope:** Phase 2 current-status and issue deepening. Existing `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and read-only `ui/src/data/v2/colin-mcroberts.ts` were used first; this pass adds current FEC/SOS verification, campaign issue/policy pages, and corrected finance/status notes.

---

## Status Summary

Colin McRoberts is federally registered as a Democratic U.S. House candidate in Kansas District 1 for the 2026 cycle. FEC lists him under the legal name "MCROBERTS, KENNETH COLIN," candidate ID `H6KS01195`, as a challenger for Kansas House District 1. His Statement of Candidacy was filed September 16, 2025. FEC lists `COLIN FOR KANSAS`, committee ID `C00919860`, as his active principal campaign committee, registered September 16, 2025.

Kansas SOS confirms the filing framework and that all four U.S. Representative seats are up in 2026. The SOS candidate-information page says Democratic and Republican candidates run in the primary, national candidates file with the Secretary of State, and a candidate is not considered filed until the declaration or petition and fee are received. The primary filing deadline is noon Monday, June 1, 2026. The SOS important-dates page lists the 2026 primary on August 4 and general election on November 3. The live SOS candidate-list endpoint returned a JavaScript / bot-verification wall in this environment, so final state filing-row readback remains unresolved.

McRoberts has not held elected office in the reviewed record. Action evidence therefore comes from federal filings, candidate-controlled platform pages, campaign appearances, published writing, professional biography, and public social-media output rather than votes or officeholder decisions.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-fec-candidate | primary | https://www.fec.gov/data/candidate/H6KS01195/?cycle=2026&election_full=true | accessed 2026-05-19 | FEC candidate ID, House KS-01, party, challenger status, Statement of Candidacy filed 2025-09-16, Q1 2026 financial summary | status, campaign finance |
| s-fec-committee | primary | https://www.fec.gov/data/committee/C00919860/?cycle=2026 | accessed 2026-05-19 | Active quarterly House principal committee, committee ID, treasurer, registration date, address, authorizing candidate | status, campaign finance |
| s-fec-election | primary | https://www.fec.gov/data/elections/house/KS/01/2026/ | accessed 2026-05-19 | 2026 Kansas House District 01 election page and federal election context | race status |
| s-sos-candidate-info | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Kansas filing rules, filing deadline, all four U.S. House seats up, U.S. Representative filing fee | ballot status |
| s-sos-dates | primary | https://sos.ks.gov/elections/important-election-dates.html | accessed 2026-05-19 | 2026 primary and general election dates, registration/advance voting deadlines | ballot calendar |
| s-campaign-home | primary | https://colinforkansas.com/ | accessed 2026-05-19 | Campaign homepage, issue index, social links, district language, vote-planning language, paid-for footer | campaign infrastructure |
| s-campaign-meet | primary | https://colinforkansas.com/meet-colin/ | accessed 2026-05-19 | Candidate-controlled biography, family/residence claims, professional background, Oakley town hall origin story | biography, campaign rationale |
| s-campaign-issues | primary | https://colinforkansas.com/issues/ | accessed 2026-05-19 | Candidate-controlled issue planks on House size, healthcare, accountability, research, agriculture, abortion/reproductive privacy, labor, education, equality | issue platform |
| s-campaign-policies | primary | https://colinforkansas.com/policies/ | accessed 2026-05-19 | Policy details on small-farm tariff offsets, proximate ownership, presidential tariff powers, Section 1983, official social-media monetization | detailed policy |
| s-campaign-news | primary | https://colinforkansas.com/news/ | accessed 2026-05-19 | Campaign news index, campaign-selected public coverage and press releases | campaign activity |
| s-campaign-press-0916 | primary | https://colinforkansas.com/mcroberts-files-for-1st-congressional-district-seat/ | 2025-09-16; accessed 2026-05-19 | Campaign announcement, issue priorities, biography, Oakley town hall statement | launch, platform |
| s-ku-profile | primary | https://business.ku.edu/people/colin-mcroberts | accessed 2026-05-19 | KU role, contact, education, selected publications | professional |
| s-kdp-candidates | secondary | https://kansasdems.org/candidates | accessed 2026-05-19 | KDP lists McRoberts under U.S. Congress District 1 and warns readers to reference SOS for filed candidates | party listing |
| s-kwch-launch | secondary | https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/ | 2025-09-17; accessed 2026-05-19 | Launch coverage, KU professor role, Mann seat context, candidate priorities | launch, platform |
| s-hays-democracy-fest | secondary | https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9 | 2025-10-20; accessed 2026-05-19 | Hays Democracy Fest appearance, executive-overreach comments, "businessman and negotiator" framing | public appearance |
| s-kansas-reflector-profile | secondary | https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/ | 2026-01-05; accessed 2026-05-19 | Profile of McRoberts and Lauren Reinhold, district strategy, farm/food-aid/tariff frame | campaign rationale, district |
| s-yahoo-ice-opinion | secondary | https://www.yahoo.com/news/articles/hold-ice-same-standard-local-100516689.html | 2026-02-01; accessed 2026-05-19 | Candidate-authored Capital-Journal opinion column on amending Section 1983 for federal agents | immigration, accountability |
| s-bsky-profile | social | https://bsky.app/profile/colinmcroberts.bsky.social | local harvest 2026-05-11; referenced 2026-05-19 | Bluesky profile, 201 followers, 65 following, 97 posts, candidate bio | social presence |
| s-bsky-2026-05-08 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3mledcmm2ik24 | posted 2026-05-08; harvested 2026-05-11 | Accountability post, 0 likes / 0 reposts / 0 replies / 0 quotes at harvest | accountability |
| s-bsky-2026-02-24 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3mfkyz7pz5k2n | posted 2026-02-24; harvested 2026-05-11 | ICE / rights explainer using son's Lego creation, 3 likes / 3 reposts | immigration, accountability |
| s-bsky-2026-02-14 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3metjptksrc2s | posted 2026-02-14; harvested 2026-05-11 | Kansas Rural Center Food and Farm Conference, rural grants / WORK Act / Main Street Employee Ownership Act | agriculture |
| s-bsky-2026-02-04 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3mdzafhenpk2s | posted 2026-02-04; harvested 2026-05-11 | Candidate post linking Section 1983 ICE op-ed, 4 likes / 3 reposts | immigration, accountability |
| s-bsky-2026-01-13 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3mcdfu5g7kc2q | posted 2026-01-13; harvested 2026-05-11 | ICE standard compared with local police, 6 likes / 3 reposts / 2 replies / 1 quote | immigration |
| s-bsky-2026-01-07 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3mbuexlp3pk2h | posted 2026-01-07; harvested 2026-05-11 | USAID / agriculture post, 4 likes / 1 repost | agriculture, food aid |
| s-bsky-2025-10-18 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3m3i7nw6at22t | posted 2025-10-18; harvested 2026-05-11 | Hays / district travel post, 550 likes / 75 reposts / 6 replies / 1 quote | district engagement |
| s-bsky-2025-09-26 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3lzqqe6cbzs2q | posted 2025-09-26; harvested 2026-05-11 | Redistricting opposition post, 11 likes / 3 reposts | democracy, representation |
| s-social-harvest | social | memory/candidates/colin-mcroberts/social-harvest.md | local 2026-05-11 | Local project social harvest: Bluesky originals/reposts/replies, YouTube videos, Instagram metadata, LinkedIn previews, platform gaps | social summary |

---

## Election and Filing Records

### FEC candidate record

**Source:** s-fec-candidate, primary.

FEC lists McRoberts as:

- Candidate for House, Kansas District 1.
- Candidate ID `H6KS01195`.
- Democratic Party.
- Type of candidacy: challenger.
- Statement of Candidacy: current version `FEC-1915036`, filed September 16, 2025.
- Authorized principal committee: `COLIN FOR KANSAS (C00919860)`.

**Issue mapping:** official candidacy and campaign finance.

### FEC committee record

**Sources:** s-fec-committee, primary.

FEC lists `COLIN FOR KANSAS` as:

- Active quarterly House principal campaign committee.
- Committee ID `C00919860`.
- Registration date September 16, 2025.
- Mailing address: PO Box 326, Lawrence, Kansas 66044.
- Treasurer: Kenneth Colin McRoberts.
- Authorizing candidate: McRoberts, Kenneth Colin.

**Issue mapping:** committee structure and campaign infrastructure.

### Kansas filing framework and ballot caveat

**Sources:** s-sos-candidate-info, s-sos-dates, s-fec-election, s-kdp-candidates.

Kansas SOS says:

- Democratic and Republican candidates must run in the primary to secure nomination.
- National, state, legislative, and judicial candidates file with the Secretary of State.
- A candidate is not considered filed until the petition or declaration and fee are received.
- Primary filing deadline is noon Monday, June 1, 2026.
- All four U.S. Representatives are among offices to be elected in 2026.
- U.S. Representative filing fee total is $1,760.
- 2026 primary election is August 4; 2026 general election is November 3.

The Kansas Democratic Party lists McRoberts under "US Congress / District 1," but the party page explicitly tells readers to reference the Secretary of State for filed candidates.

**Caveat:** Direct live SOS candidate-list readback failed because `elections_upcoming_candidate.aspx` returned a JavaScript / bot-verification wall. Downstream profile language should say "FEC-filed candidate" or "active Democratic candidate" unless direct SOS row readback is later obtained.

---

## Campaign Finance

### FEC summary through March 31, 2026

**Source:** s-fec-candidate.

FEC financial summary for coverage dates July 1, 2025 to March 31, 2026:

- Total receipts: $40,747.79.
- Total contributions: $40,428.50.
- Total individual contributions: $40,079.90.
- Itemized individual contributions: $30,989.00.
- Unitemized individual contributions: $9,090.90.
- Party committee contributions: $0.00.
- Other committee contributions: $0.00.
- Candidate contributions: $348.60.
- Transfers from other authorized committees: $0.00.
- Total loans received: $0.00.
- Loans made by candidate: $0.00.
- Offsets to operating expenditures: $319.29.
- Total disbursements: $32,967.12.
- Operating expenditures: $32,967.12.
- Ending cash on hand: $7,780.67.
- Debts/loans owed to committee: $0.00.
- Debts/loans owed by committee: $1,248.75.

This updates older local material that showed totals only through December 31, 2025: $24,699.29 receipts, $17,243.10 disbursements, and $7,456.19 cash on hand.

### Donor / funding notes

The FEC summary shows the campaign was funded almost entirely by individual contributions through March 31, 2026, with no party-committee or other-committee contributions and no loans. Itemized individual contributions were $30,989.00, unitemized individual contributions were $9,090.90, and candidate contributions were $348.60.

**Could not capture:** OpenFEC API calls using the public `DEMO_KEY` were over hourly rate limit during this pass, and the FEC HTML page did not render the transaction table in this environment. Do not infer donor industries, employer patterns, or geographic concentration until a full export is captured.

---

## Biography and Professional Record

### Candidate-controlled biography

**Sources:** s-campaign-meet, s-campaign-press-0916.

The campaign biography says McRoberts:

- Was born in Texas near the Ogallala Aquifer and later chose Kansas with his wife as the place to start their family.
- Lives in Lawrence with extended family.
- Began as a lawyer and later advised clients on negotiation.
- Teaches law and negotiation at the University of Kansas School of Business.
- Entered the race after attending Sen. Roger Marshall's Oakley town hall earlier in 2025.
- Frames the campaign around giving the First District a more competitive election and a stronger check-and-balance role in Congress.

### University of Kansas profile

**Source:** s-ku-profile, primary.

KU School of Business lists McRoberts as:

- Associate Teaching Professor.
- Marketing and Business Law academic area.
- Education: J.D., Harvard Law School, 2004; B.A. in International Studies, Trinity University, 2001.
- Selected publications include work on conspiracy theories, pseudolaw, and sovereign citizens.

### Secondary launch coverage

**Sources:** s-kwch-launch, s-hays-democracy-fest, s-kansas-reflector-profile.

KWCH reported on September 17, 2025 that McRoberts, a KU School of Business professor, announced a run for Kansas' Big First Congressional seat held by Rep. Tracey Mann. Hays Post covered his October 2025 Democracy Fest appearance in Hays and reported that he framed himself as a businessman and negotiator while criticizing executive overreach. Kansas Reflector profiled McRoberts and Lauren Reinhold in January 2026 and emphasized the unusual Democratic competition for a deeply Republican district after Lawrence was added to KS-01.

---

## Issue Area 1 - Abortion / Reproductive Policy

### Candidate-stated platform

**Source:** s-campaign-issues.

The campaign issues page contains a "Personal Freedom" plank that references Kansas' 2022 abortion-rights constitutional-amendment vote. It says McRoberts would vote against a federal abortion ban and work to protect privacy for people seeking reproductive healthcare.

**Issue mapping:** This is a candidate-controlled position and supersedes older local material that said no detailed public position was found.

### Action evidence

- **2026 campaign issue page:** candidate-controlled issue page states opposition to a federal abortion ban and support for privacy around reproductive healthcare. Source: s-campaign-issues.

### Social relevance

The local Bluesky harvest did not find original posts about abortion policy during the captured period. A repost of ACOG about acetaminophen in pregnancy was captured, but it is not enough to infer an abortion-policy position beyond the campaign issue page.

---

## Issue Area 2 - Immigration, Federal Law Enforcement, and Accountability

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-policies, s-yahoo-ice-opinion.

McRoberts' campaign issues page criticizes federal immigration-enforcement spending and calls for redirecting wasteful ICE spending to agencies that need resources. It also calls for returning to bipartisan immigration reform and creating realistic paths to residence and citizenship.

The campaign policies page proposes amending 42 U.S.C. 1983 so people can sue federal agents, not only state/local officials, for rights violations. McRoberts' candidate-authored Capital-Journal/Yahoo opinion column makes the same Section 1983 argument.

### Action evidence

- **2026 policy page:** candidate-controlled policy page lays out a Section 1983 amendment to apply to ICE and other federal agencies. Source: s-campaign-policies.
- **2026-02-01 opinion column:** McRoberts authored an opinion column arguing for the same federal-agent accountability approach. Source: s-yahoo-ice-opinion.
- **2026-02-23 / 2026-02-24 social/video explainer:** campaign YouTube/Bluesky material used a Lego example to explain ICE and constitutional rights concerns. Sources: s-social-harvest, s-bsky-2026-02-24.

### Social relevance

The Bluesky harvest captured several immigration / accountability posts: Jan. 13, 2026 on holding ICE to local-police standards; Feb. 4, 2026 linking the Section 1983 op-ed; and Feb. 24, 2026 linking the Mr. Technopants ICE explainer. Engagement was modest: the Jan. 13 post had 6 likes / 3 reposts / 2 replies / 1 quote; the Feb. 4 post had 4 likes / 3 reposts; and the Feb. 24 post had 3 likes / 3 reposts as of May 11, 2026.

---

## Issue Area 3 - Agriculture, Tariffs, USAID, and Rural Economy

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-policies, s-campaign-press-0916, s-kwch-launch.

Campaign materials say McRoberts supports:

- Returning tariff power to Congress.
- Small-farm tariff offsets for operations under $400,000 gross cash farm income.
- A "proximate ownership" test favoring agricultural operations owned by people who live on or near the land.
- Restoring USAID food-purchase functions.
- Rehiring USDA experts fired under political targets.
- Working with both parties to pass a farm bill.
- Federal right-to-repair legislation for farm equipment and other property.

### Action evidence

- **2025-09-16 launch release:** campaign announced agriculture, USAID, farm bill, tariff, and right-to-repair priorities. Source: s-campaign-press-0916.
- **2026 policy page:** campaign published small-farm tariff exemption, proximate ownership, and presidential tariff-power proposals. Source: s-campaign-policies.
- **2026-02-14 conference post:** McRoberts posted from the Kansas Rural Center Food and Farm Conference and named Rural Cooperative Development Grants, the WORK Act, and Main Street Employee Ownership Act. Source: s-bsky-2026-02-14.

### Social relevance

Agriculture, tariffs, rural economy, and food aid accounted for 10 of 62 original Bluesky posts in the local harvest, or 16 percent. Captured posts mention USAID, tariffs, fertilizer, food aid, Kansas Rural Center, Farmers Union, foreign markets, and farm costs. The candidate's highest-engagement original post was district-travel content from Hays, not a policy explainer, with 550 likes and 75 reposts as of May 11, 2026.

---

## Issue Area 4 - Healthcare, Medicare, Medicaid, Social Security, and Rural Hospitals

### Candidate-stated platform

**Source:** s-campaign-issues.

The campaign issues page says the current federal budget threatens Kansans who rely on Medicare, Medicaid, and Social Security. It links Medicaid and CHIP cuts to uninsured people and rural hospital closures, criticizes temporary rural-hospital relief as insufficient, and says McRoberts would work with Democrats and Republicans to prevent the cuts from taking effect.

### Action evidence

- **2026 issue page:** campaign published Medicare, Medicaid, Social Security, and rural-hospital language. Source: s-campaign-issues.

### Social relevance

Healthcare was not a frequent original Bluesky topic in the local harvest. It appeared indirectly through ICE/accountability, scientific research, disease/science reposts, and campaign issue-page references rather than a sustained social thread about healthcare delivery.

---

## Issue Area 5 - Government Accountability, Congress, and Representation

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-policies, s-hays-democracy-fest, s-kansas-reflector-profile.

McRoberts' most repeated theme is Congress as a check on executive power. Campaign materials call for uncapping the House of Representatives, holding federal agencies accountable for incompetence and illegality, limiting presidential tariff powers, banning federal officials from receiving payment for social-media posts made while in office, and rebuilding congressional oversight over appropriations and law enforcement.

### Action evidence

- **2026 issue page:** campaign published an "Uncapping the House of Representatives" plank and accountability plank. Source: s-campaign-issues.
- **2026 policy page:** campaign published proposals on presidential tariff powers and social-media monetization by federal officials. Source: s-campaign-policies.
- **2025-10-20 Hays appearance:** Hays Post reported McRoberts criticized executive overreach and listed tariffs, troop deployments, ICE arrests, arrests over speech, and federal employee firings during a shutdown as examples. Source: s-hays-democracy-fest.

### Social relevance

Federal accountability, executive power, and rule-of-law issues accounted for 24 of 62 original Bluesky posts in the local harvest, or 39 percent. Representative posts included May 8, 2026 criticism of the administration and Oct. 23, 2025 language about putting Congress back in order.

---

## Issue Area 6 - Research Funding, Universities, and Education

### Candidate-stated platform

**Sources:** s-campaign-issues, s-ku-profile.

The campaign issues page calls for restoring NIH and NSF funding and frames research funding as tied to cancer cures, Alzheimer's treatments, crop genetics, basic science, and national prosperity. It also calls for strengthening the Department of Education, supporting academic freedom, helping teachers and students, and working across parties on student-loan debt.

McRoberts' KU profile confirms his current teaching role, which is relevant background but should not be treated as a policy position by itself.

### Action evidence

- **2026 issue page:** campaign published research-funding and education planks. Source: s-campaign-issues.
- **Current KU profile:** KU lists McRoberts as an Associate Teaching Professor in Marketing and Business Law. Source: s-ku-profile.

### Social relevance

The social harvest found some research funding / science references, but not as frequently as accountability, campaign travel, or agriculture. Avoid overstating it as the dominant social issue.

---

## Issue Area 7 - Labor, Workers, and Bargaining

### Candidate-stated platform

**Source:** s-campaign-issues.

The campaign labor section says McRoberts' negotiation experience made him strongly pro-union and calls protecting fair bargaining a platform cornerstone, especially as AI, tariffs, and other disruptions affect jobs.

### Action evidence

- **2026 issue page:** campaign published worker-bargaining / labor language. Source: s-campaign-issues.

### Social relevance

Labor was present on the campaign site but was not one of the most frequent original Bluesky topics in the local harvest.

---

## Issue Area 8 - Equality, Disability, LGBTQ Policy, and Religious Liberty

### Candidate-stated platform

**Source:** s-campaign-issues.

The campaign equality section says McRoberts would prioritize rights and safety for Kansans regardless of race, religion, gender, orientation, or other characteristics. It also says he supports the Disability Plank of the Kansas Democratic Party Platform. No candidate-controlled marriage-specific plank was found.

No religious-liberty policy plank or current church affiliation was found in reviewed sources. This page should not infer a personal religious identity or policy stance from party, family, geography, or social follows.

### Action evidence

- **2026 issue page:** campaign published equality and disability-policy language. Source: s-campaign-issues.

### Social relevance

The local Bluesky harvest identified no original posts about marriage policy or religious-liberty policy. Do not map general associations or party label as a candidate's personal stance.

---

## Issue Area 9 - Guns / Second Amendment and Marijuana / Drug Policy

### Candidate-stated platform

No candidate-controlled issue plank or standalone social statement was found on guns / Second Amendment policy or marijuana / drug policy in the reviewed materials.

### Action evidence

None found.

### Social relevance

No relevant candidate-controlled social signal found in the local harvest.

---

## Social and Online Relevance

### Presence summary

**Sources:** s-campaign-home, s-social-harvest.

- Campaign website links Facebook, Instagram, TikTok, and Bluesky.
- Bluesky was the strongest accessible public social corpus: local harvest captured 62 original posts, 35 replies, and 72 reposts between September 17, 2025 and May 11, 2026.
- Instagram logged-out metadata showed 349 followers, 97 following, and 98 posts on May 11, 2026.
- YouTube had four campaign-linked videos in the local harvest.
- LinkedIn previews showed campaign posts but full browsing was limited.
- Facebook returned a logged-out access wall.
- TikTok did not expose reliable metadata in public search.
- No candidate-controlled Truth Social, Gab, Gettr, Substack, or Reddit account was found.

### Topic distribution from local harvest

**Source:** s-social-harvest.

Among 62 original Bluesky posts:

- Federal accountability / executive power / rule-of-law issues: 24 posts (39%).
- Campaign travel, events, and outreach: 14 posts (23%).
- Agriculture, tariffs, rural economy, and food aid: 10 posts (16%).
- Democracy, redistricting, representation, and election reform: 8 posts (13%).
- Personal / family / horses / sports / weather / media: 6 posts (10%).

### Visible absences from local harvest

The captured Bluesky period contained no original posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medicaid expansion. This absence should be read only as a social-feed observation, not as a policy inference, especially because the campaign website now states positions on abortion/reproductive privacy, healthcare/rural hospitals, education, equality, agriculture, and accountability.

---

## Blockers

- **Direct SOS candidate-list row:** Kansas SOS live candidate-list page returned a JavaScript / bot-verification wall. This blocks direct state filing-row verification in this environment.
- **Final ballot certification:** The June 1, 2026 filing deadline had not passed as of this 2026-05-19 pass, so final certified primary/general ballot language is not available.
- **FEC itemized transactions:** OpenFEC public `DEMO_KEY` API was over hourly rate limit. FEC summary totals are usable; full donor/disbursement pattern analysis is not.
- **Logged-out social access:** Facebook, TikTok, LinkedIn, and Instagram detailed post corpuses were limited or inaccessible without login; Bluesky is the only substantial captured social corpus.
- **Campaign issue-page text mismatch:** The campaign issues page has an "Affordability: return the tariff power to Congress" heading followed by healthcare / social-program text. For tariff-specific details, use the campaign policy page and launch release rather than that mismatched issue-page block.

## Could Not Confirm

- Direct official Kansas SOS candidate-table row for McRoberts.
- Certified post-deadline 2026 ballot placement.
- Full itemized FEC donor list, employer/occupation totals, and disbursement list through March 31, 2026.
- Current church membership or religious-liberty policy statement.
- Candidate-controlled statements on gun policy, marijuana/drug policy, Fort Riley, or a detailed water / Ogallala Aquifer plan.
- Reliable candidate-controlled Facebook/TikTok/LinkedIn/Instagram post metrics beyond presence/metadata noted above.
