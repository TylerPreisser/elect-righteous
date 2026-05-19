# Raw Dump v2 - Lauren Reinhold

**Candidate slug:** lauren-reinhold  
**Office:** U.S. House, Kansas District 1, Democratic candidate  
**Date written:** 2026-05-19  
**Agent:** Worker 25, deep-scraper / narrative-writer equivalent  
**Scope:** Phase 2 current-status and issue deepening. Existing `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and read-only `ui/src/data/v2/lauren-reinhold.ts` were used first; this pass adds current FEC/SOS verification, campaign issue/policy pages, current public Bluesky check, and corrected finance/status notes.

---

## Status Summary

Lauren Reinhold is federally registered as a Democratic U.S. House candidate in Kansas District 1 for the 2026 cycle. FEC lists her under "REINHOLD, LAUREN," candidate ID `H6KS01203`, as a challenger for Kansas House District 1. Her current Statement of Candidacy was filed January 5, 2026. FEC lists `LAUREN REINHOLD FOR KANSAS`, committee ID `C00932855`, as her active quarterly House principal campaign committee, registered January 5, 2026.

Kansas SOS confirms the filing framework and that all four U.S. Representative seats are up in 2026. The SOS candidate-information page says Democratic and Republican candidates run in the primary, national candidates file with the Secretary of State, and a candidate is not considered filed until the declaration or petition and fee are received. The primary filing deadline is noon Monday, June 1, 2026. The SOS important-dates page lists the 2026 primary on August 4 and general election on November 3. The live SOS candidate-list endpoint returned a CloudFront 403 / JavaScript access barrier in this environment, so final state filing-row readback remains unresolved.

Reinhold has not held elected office in the reviewed record. Action evidence therefore comes from federal filings, candidate-controlled platform pages, campaign appearances, campaign news posts, professional biography, and public social-media output rather than votes or officeholder decisions.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-fec-candidate | primary | https://www.fec.gov/data/candidate/H6KS01203/?cycle=2026 | accessed 2026-05-19 | FEC candidate ID, House KS-01, party, challenger status, Statement of Candidacy filed 2026-01-05, Q1 2026 financial summary | status, campaign finance |
| s-fec-committee | primary | https://www.fec.gov/data/committee/C00932855/?cycle=2026 | accessed 2026-05-19 | Active quarterly House principal committee, committee ID, treasurer Tim Metz, registration date, address, authorizing candidate, Q1 totals | status, campaign finance |
| s-fec-form-2 | primary | https://docquery.fec.gov/pdf/673/202601059793904673/202601059793904673.pdf | filed 2026-01-05; accessed 2026-05-19 | Statement of Candidacy naming House KS-01, Democratic Party, 2026 election, and principal committee | official filing |
| s-fec-form-1 | primary | https://docquery.fec.gov/pdf/794/202601089793921794/202601089793921794.pdf | filed 2026-01-08; accessed 2026-05-19 | Statement of Organization, committee address, website, treasurer, assistant treasurer, principal committee designation | committee structure |
| s-fec-election | primary | https://www.fec.gov/data/elections/house/KS/01/2026/ | accessed 2026-05-19 | 2026 Kansas House District 01 federal election page | race status |
| s-sos-candidate-info | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Kansas filing rules, filing deadline, all four U.S. House seats up, U.S. Representative filing fee | ballot status |
| s-sos-dates | primary | https://sos.ks.gov/elections/important-election-dates.html | accessed 2026-05-19 | 2026 filing deadline, primary election date, general election date | ballot calendar |
| s-campaign-home | primary | https://www.laurenforkansas.com/ | accessed 2026-05-19 | Campaign homepage, social links, district travel, issue index, paid-for footer | biography, campaign themes |
| s-campaign-about | primary | https://www.laurenforkansas.com/about | accessed 2026-05-19 | Candidate-controlled biography, federal service, SSA role, NLRB work, union role, legal background, family raised in Lawrence | biography, labor, federal services |
| s-campaign-priorities | primary | https://www.laurenforkansas.com/priorities | accessed 2026-05-19 | Priorities: rural healthcare, agriculture, worker rights, government integrity, immigration, Social Security | issue platform |
| s-campaign-prosperity | primary | https://www.laurenforkansas.com/prosperity | accessed 2026-05-19 | Middle-class tax plan, Social Security plan, rural economic plan, broadband, rural healthcare, grants | economy, Social Security, agriculture, healthcare |
| s-campaign-voter-info | primary | https://www.laurenforkansas.com/voter-info | accessed 2026-05-19 | District description, rural hospitals, family farms, infrastructure, water systems, campaign travel map area | district context |
| s-campaign-oberlin | primary | https://www.laurenforkansas.com/post/the-big-first-district-has-new-democrat-candidate | posted 2026-01-23; accessed 2026-05-19 | Campaign republication of Oberlin Herald interview on rural hospitals, farm bill, tariffs, schools, federal cuts | healthcare, agriculture, education |
| s-campaign-cjonline | primary | https://www.laurenforkansas.com/post/our-campaign-was-featured-in-the-topeka-capitol-journal-march-12-2026 | posted 2026-03-15; accessed 2026-05-19 | Campaign republication of Topeka Capital-Journal coverage on tariffs, congressional power, farm bill, immigration, gridlock | government accountability, agriculture, immigration |
| s-campaign-govexec | primary | https://www.laurenforkansas.com/post/lauren-s-congressional-campaign-is-featured-in-gov-exec | posted 2026-04-28; accessed 2026-05-19 | Campaign republication of Government Executive quote on trust in federal services | federal services |
| s-campaign-former-feds | primary | https://www.laurenforkansas.com/post/lauren-is-proud-to-join-other-former-feds-running-for-public-office | posted 2026-03-15; accessed 2026-05-19 | Campaign post connecting former federal workers to public service, transparency, accountability, workers' rights | federal services, labor |
| s-social-harvest | social | memory/candidates/lauren-reinhold/social-harvest.md | local capture 2026-05-11; referenced 2026-05-19 | Local harvest of Bluesky, campaign news, Instagram/TikTok metadata, platform access limits, topic counts | social summary |
| s-bsky-profile | social | https://bsky.app/profile/laurenforkansas.bsky.social | public API checked 2026-05-19 | Bluesky profile: 247 followers, 153 follows, 16 posts; latest visible original post May 6, 2026 | social presence |
| s-bsky-pbs | social | https://bsky.app/profile/laurenforkansas.bsky.social/post/3ml5n7qmjhk2s | posted 2026-05-06; harvested 2026-05-11; checked 2026-05-19 | PBS NewsHour share about former federal workers; 7 likes, 2 reposts, 1 reply, 0 quotes at current API check | federal services, media |
| s-bsky-voting | social | https://bsky.app/profile/laurenforkansas.bsky.social/post/3mik6e53p322h | posted 2026-04-02; harvested 2026-05-11; checked 2026-05-19 | Mail-in voting / DNC lawsuit post; 3 likes, 3 reposts, 2 replies, 0 quotes at current API check | voting access |
| s-bsky-prosperity | social | https://bsky.app/profile/laurenforkansas.bsky.social/post/3mgdqf2wnxc2p | posted 2026-03-05; harvested 2026-05-11; checked 2026-05-19 | Post linking American Middle-Class Prosperity Tax Plan; 4 likes, 2 reposts, 0 replies, 0 quotes | economy |
| s-bsky-mann-finance | social | https://bsky.app/profile/laurenforkansas.bsky.social/post/3mfp3jxxkis23 | posted 2026-02-25; harvested 2026-05-11 | Image post criticizing Tracey Mann donor base; local harvest recorded 7 likes, 3 reposts, 0 replies | campaign finance rhetoric |
| s-bsky-kansas-reflector-repost | social | https://bsky.app/profile/kansasreflector.com/post/3mfwvwu4gh223 | reposted 2026-02-28; harvested 2026-05-11 | Repost of Kansas Reflector post about transgender Kansans | LGBTQ social signal |
| s-bsky-george-conway | social | https://bsky.app/profile/laurenforkansas.bsky.social/post/3mfx2heclcc2q | posted 2026-02-28; harvested 2026-05-11 | Candidate quote-post agreeing with George Conway and referencing foreign policy | foreign policy / national politics |

---

## Election and Filing Records

### FEC candidate record

**Source:** s-fec-candidate, s-fec-form-2.

FEC lists Reinhold as:

- Candidate for House, Kansas District 1.
- Candidate ID `H6KS01203`.
- Democratic Party.
- Type of candidacy: challenger.
- Statement of Candidacy: current version `FEC-1930697`, filed January 5, 2026.
- Authorized principal committee: `LAUREN REINHOLD FOR KANSAS (C00932855)`.

The Form 2 PDF also lists the 2026 election year, House office sought, Kansas District 01, and `LAUREN REINHOLD FOR KANSAS` as principal campaign committee.

### FEC committee record

**Sources:** s-fec-committee, s-fec-form-1.

FEC lists `LAUREN REINHOLD FOR KANSAS` as:

- Active quarterly House principal campaign committee.
- Committee ID `C00932855`.
- Registration date January 5, 2026.
- Mailing address: 4000 W 6th St Ste B #241, Lawrence, Kansas 66049.
- Treasurer: Tim Metz.
- Assistant treasurer / custodian data appears in the Form 1 PDF.
- Website in Form 1: `www.laurenforkansas.com`.
- Authorizing candidate: Reinhold, Lauren.

### Kansas filing framework and ballot caveat

**Sources:** s-sos-candidate-info, s-sos-dates, s-fec-election.

Kansas SOS says:

- Democratic and Republican candidates must run in the primary to secure nomination.
- National, state, legislative, and judicial candidates file with the Secretary of State.
- A candidate is not considered filed until the petition or declaration and fee are received.
- Primary filing deadline is noon Monday, June 1, 2026.
- All four U.S. Representatives are among offices to be elected in 2026.
- U.S. Representative filing fee total is $1,760.
- 2026 primary election is August 4; 2026 general election is November 3.

**Caveat:** Direct live SOS candidate-list readback failed because the `elections_upcoming_candidate.aspx` endpoint returned a CloudFront 403 / JavaScript access barrier. Downstream profile language should say "FEC-filed candidate" or "active Democratic candidate" unless direct SOS row readback is later obtained.

---

## Campaign Finance

### FEC summary through March 31, 2026

**Sources:** s-fec-candidate, s-fec-committee.

FEC financial summary for coverage dates January 1, 2026 to March 31, 2026:

- Total receipts: $23,710.00.
- Total contributions: $23,710.00.
- Total individual contributions: $23,710.00.
- Itemized individual contributions: $16,875.00.
- Unitemized individual contributions: $6,835.00.
- Party committee contributions: $0.00.
- Other committee contributions: $0.00.
- Candidate contributions: $0.00.
- Transfers from other authorized committees: $0.00.
- Total loans received: $0.00.
- Loans made by candidate: $0.00.
- Other loans: $0.00.
- Offsets to operating expenditures: $0.00.
- Other receipts: $0.00.
- Total disbursements: $14,951.92.
- Operating expenditures: $14,601.92.
- Total contribution refunds: $100.00.
- Other disbursements: $250.00.
- Ending cash on hand: $8,758.08.
- Debts/loans owed to committee: $0.00.
- Debts/loans owed by committee: $0.00.

This updates older local material that said the accessible FEC summary was too thin or showed no 2025-2026 finance data.

### Donor / funding notes

The FEC summary shows all reported Q1 2026 contributions came from individual contributions, with no party-committee contributions, no other-committee contributions, no candidate contributions, and no loans. Itemized individual contributions were $16,875.00 and unitemized individual contributions were $6,835.00.

**Could not capture:** OpenFEC API calls using the public `DEMO_KEY` returned `OVER_RATE_LIMIT`, and the static FEC HTML page did not expose transaction rows or donor names. Do not infer donor industries, employer patterns, donor geography, PAC support, or "dark money" without a later itemized export.

---

## Biography and Professional Record

### Candidate-controlled biography

**Source:** s-campaign-about.

The campaign biography says Reinhold:

- Has been a Kansan for 32 years.
- Has been an attorney for 28 years.
- Was a longtime federal employee and workers' rights advocate.
- Served as an Attorney Advisor at the Social Security Administration.
- Worked on federal workforce modernization and employee support.
- Served as a federal union officer.
- Served as an investigator and election officer for the National Labor Relations Board.
- Represented low-income Kansans in legal-aid organizations.
- Practiced immigration law in a legal clinic and private practice.
- Advocated for disabled Kansans seeking Social Security and Medicare benefits.
- Raised her family in Lawrence.

The campaign states that DOGE cuts at SSA changed her federal career plans and that she resigned from SSA.

### Prior local raw notes requiring caution

Older local `raw-dump.md` includes DOB, marital status, and public-record/religion claims from public-record aggregators. This pass did not verify those facts from an official or candidate-controlled source. Do not carry them into v2 except as "not confirmed" unless separately sourced.

---

## Issue Area 1 - Rural Healthcare

### Candidate-stated platform

**Sources:** s-campaign-priorities, s-campaign-prosperity, s-campaign-oberlin, s-campaign-voter-info.

The campaign priorities page lists "Rebuilding Rural Healthcare" and says rural hospitals are central to community safety and stability. Road to Prosperity says the campaign would move rural healthcare toward a "Global Budgeting" model to stabilize costs and prevent rural hospital closures. The voter-info page describes rural hospitals as central to local economies.

In the campaign republication of an Oberlin Herald interview, Reinhold said Medicaid cuts would affect rural hospitals and tied rural hospitals to federal funding decisions.

### Action evidence

- **2026 priorities page:** candidate-controlled rural healthcare plank. Source: s-campaign-priorities.
- **2026 Road to Prosperity page:** rural healthcare / global budgeting proposal. Source: s-campaign-prosperity.
- **2026-01-23 campaign republication:** Oberlin Herald interview on Medicaid cuts and rural hospitals. Source: s-campaign-oberlin.

### Social relevance

The local harvest found rural healthcare as a recurring website/campaign theme but did not capture a standalone Bluesky post specifically about rural hospitals beyond broader district and prosperity framing.

---

## Issue Area 2 - Agriculture, Farm Bill, Tariffs, and Rural Economy

### Candidate-stated platform

**Sources:** s-campaign-priorities, s-campaign-prosperity, s-campaign-oberlin, s-campaign-cjonline.

The campaign priorities page lists "Supporting Agriculture and Rural Economies," with emphasis on producers, family operations, small businesses, and opposition to corporate monopolies. Road to Prosperity calls for making small and mid-sized farming profitable again, reforming subsidies toward family operations, supporting next-generation farmers, rural broadband, ag-tech, clean energy, rural grid modernization, and a one-stop shop for federal rural grants.

The Oberlin Herald republication says Reinhold plans to fight for a modernized, stable farm bill and calls tariffs a major problem. The Topeka Capital-Journal republication quotes her saying Congress should reclaim tariff authority and criticizes delay on the farm bill.

### Action evidence

- **2026 priorities page:** candidate-controlled agriculture/rural-economy plank. Source: s-campaign-priorities.
- **2026 Road to Prosperity page:** rural economic plan with farm, broadband, energy, healthcare, and grant-administration elements. Source: s-campaign-prosperity.
- **2026-01-23 campaign republication:** farm bill, tariffs, small farmers, schools, and rural communities. Source: s-campaign-oberlin.
- **2026-03-15 campaign republication:** candidate statement on congressional tariff power and farm bill delay. Source: s-campaign-cjonline.

### Social relevance

The local harvest recorded a March 5 Bluesky post linking the American Middle-Class Prosperity Tax Plan, with 4 likes and 2 reposts as of the current API check. The harvested feed did not contain posts specifically about wheat prices, the Ogallala Aquifer, or water rights.

---

## Issue Area 3 - Workers' Rights and Labor

### Candidate-stated platform

**Sources:** s-campaign-about, s-campaign-priorities, s-campaign-prosperity, s-campaign-former-feds.

The campaign priorities page lists "Strengthening Worker's Rights" and frames worker dignity against corporate monopoly power. The about page says Reinhold served as a federal union officer, advocated for worker protections and fair wages, and served as an investigator and election officer for the National Labor Relations Board. Road to Prosperity says the tax framework would reward companies that invest in domestic manufacturing, clean energy, research and development, and worker training.

### Action evidence

- **Campaign biography:** federal union officer and NLRB investigator/election officer experience. Source: s-campaign-about.
- **2026 priorities page:** worker-rights plank. Source: s-campaign-priorities.
- **2026 Road to Prosperity page:** corporate-tax and worker-investment language. Source: s-campaign-prosperity.
- **2026-03-15 campaign post:** former federal workers and protecting workers' rights. Source: s-campaign-former-feds.

### Social relevance

Instagram profile metadata captured locally described the campaign around "Rural Hospitals" and "Labor Rights." Full Instagram post content was not captured, so this should be used only as a profile metadata signal.

---

## Issue Area 4 - Government Integrity, Federal Services, and Executive Power

### Candidate-stated platform

**Sources:** s-campaign-about, s-campaign-priorities, s-campaign-govexec, s-campaign-former-feds, s-campaign-cjonline.

The campaign biography says Reinhold worked at SSA and changed course after DOGE cuts at SSA. The priorities page lists "Government Integrity and Reform." The Government Executive republication quotes her saying she wants to restore trust in federal services. The former-feds post ties former federal worker candidacies to public services, transparency, responsiveness, worker rights, and government serving people rather than corporations.

The Topeka Capital-Journal republication includes her statements on Congress reclaiming tariff authority and getting through red tape.

### Action evidence

- **FEC filings:** formal federal candidacy and principal committee. Sources: s-fec-candidate, s-fec-committee, s-fec-form-2, s-fec-form-1.
- **Campaign biography:** SSA / federal-service background and DOGE-related campaign origin. Source: s-campaign-about.
- **2026-04-28 campaign republication:** Government Executive quote on federal services. Source: s-campaign-govexec.
- **2026-03-15 campaign republication:** statements on Congress, tariffs, and gridlock. Source: s-campaign-cjonline.

### Social relevance

The May 6 Bluesky PBS NewsHour share is the highest-engagement candidate-controlled Bluesky post in the local harvest/current API check, with 7 likes, 2 reposts, and 1 reply. The post asks readers to watch former federal workers discuss DOGE.

---

## Issue Area 5 - Immigration and Border

### Candidate-stated platform

**Sources:** s-campaign-priorities, s-campaign-about, s-campaign-cjonline.

The priorities page lists "Worker-First Immigration Reform" and supports border security, a fair path to citizenship for people already contributing to communities, fixing backlogged courts, stabilizing the agricultural workforce, humane enforcement, and the dignity of families. The about page says Reinhold practiced immigration law in a legal clinic and private practice. The Topeka Capital-Journal republication includes a brief statement that Congress is avoiding solutions on immigration.

### Action evidence

- **2026 priorities page:** candidate-controlled worker-first immigration reform plank. Source: s-campaign-priorities.
- **Campaign biography:** immigration-law practice experience. Source: s-campaign-about.
- **2026-03-15 campaign republication:** candidate statement connecting immigration to congressional avoidance of solutions. Source: s-campaign-cjonline.

### Social relevance

No standalone candidate-owned Bluesky post about immigration was captured. Facebook was access-walled and should not be treated as issue evidence.

---

## Issue Area 6 - Social Security, Medicare, and Benefits Administration

### Candidate-stated platform

**Sources:** s-campaign-about, s-campaign-priorities, s-campaign-prosperity.

The campaign biography says Reinhold was an Attorney Advisor at SSA and advocated for disabled Kansans seeking Social Security and Medicare benefits. The priorities page lists "Strengthening Social Security." Road to Prosperity contains a Social Security Fair Share Plan that would apply Social Security tax to some investment and business income for high-earning households, extend solvency, and increase monthly benefits by $200 for current and new retirees.

### Action evidence

- **Campaign biography:** SSA role and benefits-related legal work. Source: s-campaign-about.
- **2026 priorities page:** Social Security plank. Source: s-campaign-priorities.
- **2026 Road to Prosperity page:** Social Security Fair Share Plan. Source: s-campaign-prosperity.

### Social relevance

The local social harvest captured campaign website/news material on Social Security but no standalone Bluesky post focused only on Social Security.

---

## Issue Area 7 - Taxes, Affordability, and Middle-Class Prosperity

### Candidate-stated platform

**Sources:** s-campaign-home, s-campaign-prosperity, s-bsky-prosperity.

The campaign homepage frames the campaign around rural economic recovery, working families, and corporate donors. Road to Prosperity lays out the American Middle-Class Prosperity Tax Plan, including lower taxes for working families, expanded deductions, payroll tax offsets for households under $125,000, changes for very high earners and large capital gains, and corporate tax reforms tied to worker investment. Reinhold linked that plan on Bluesky on March 5, 2026.

### Action evidence

- **Campaign homepage:** rural economic recovery / working families theme. Source: s-campaign-home.
- **2026 Road to Prosperity page:** tax and economic framework. Source: s-campaign-prosperity.
- **2026-03-05 Bluesky post:** candidate-controlled social link to the tax plan. Source: s-bsky-prosperity.

### Social relevance

The March 5 Bluesky post linking the prosperity plan had 4 likes, 2 reposts, 0 replies, and 0 quotes in the current API check.

---

## Issue Area 8 - Voting Access / Election Administration

### Candidate-stated platform

**Source:** s-bsky-voting.

The only candidate-controlled statement found in this pass was a Bluesky post supporting the DNC lawsuit against a Trump executive order on mail-in voting and saying she would protect voting rights and states from federal overreach. No detailed campaign website voting-policy plank was found.

### Action evidence

- **2026-04-02 Bluesky post:** candidate statement on mail-in voting and federal overreach. Source: s-bsky-voting.

### Social relevance

The April 2 post had 3 likes, 3 reposts, 2 replies, and 0 quotes in the current public API check.

---

## Issue Area 9 - LGBTQ / Equality

### Candidate-stated platform

No candidate-owned campaign issue plank on marriage, family, or LGBTQ policy was found in the reviewed campaign pages.

### Action evidence

- No non-social action evidence found.

### Social relevance

The local harvest captured a February 28, 2026 Bluesky repost of a Kansas Reflector post about transgender Kansans. Because the observed action is a repost of a third-party post, use it only as a social signal and do not convert it into a full policy position.

---

## Explicit No-Finding Issue Areas

The reviewed materials did not locate candidate-controlled statements or action evidence on:

- Abortion / sanctity of life.
- Guns / Second Amendment.
- Religious liberty.
- Current church membership or worship affiliation.
- School choice / vouchers / parental-rights-specific education policy.
- Marijuana / drug policy.
- Death penalty / criminal justice policy beyond NLRB, immigration law, and government-service biography.
- Foster care or adoption.
- Fort Riley.
- Fort Hays State University.
- Ogallala Aquifer / water rights.

Do not infer these from party label, faith descriptions, reposts, follows, campaign geography, or associations.

---

## Online and Social Notes

The local social harvest counted 27 candidate-controlled captured items (16 Bluesky posts/replies plus 11 campaign website/news posts) and 3 Bluesky reposts. Campaign activity, launch, fundraising, merchandise, and media appearances were the largest category at 13 of 27 candidate-controlled items. Federal services / government operations / worker rights / Social Security / economic policy accounted for 7 of 27. Rural-district issues including rural hospitals, agriculture, schools, and district identity accounted for 5 of 27.

Current public Bluesky API check on 2026-05-19:

- Handle: `laurenforkansas.bsky.social`.
- Display name: Lauren For Kansas.
- DID: `did:plc:5w2zhf7cwzbkfyl6ukq6lgze`.
- Created: 2025-12-08.
- Followers: 247.
- Follows: 153.
- Posts: 16.
- Latest visible original post remains May 6, 2026.

Platform access limits remain: Facebook, X, and LinkedIn were not readable as public logged-out corpora; Instagram and TikTok were metadata-only; no candidate-owned YouTube channel was found.

---

## Blockers / Could Not Confirm

- Direct Kansas SOS candidate-list row for Reinhold.
- Final certified state ballot status after the June 1, 2026 filing deadline.
- Itemized FEC donor and disbursement ledger because OpenFEC public `DEMO_KEY` was rate-limited and the static FEC page did not expose transaction rows.
- Current church affiliation or religious community.
- Full public post corpora for Facebook, X, LinkedIn, Instagram, and TikTok.
- Any prior elected-office voting record.
- Candidate-controlled statements on abortion, guns, religious liberty, school choice/vouchers, marijuana/drug policy, Fort Riley, Fort Hays State, and Ogallala/water issues.
