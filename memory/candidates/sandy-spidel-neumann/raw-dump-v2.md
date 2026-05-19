# Raw Dump v2 - Sandy Spidel Neumann

**Candidate slug:** sandy-spidel-neumann  
**Office:** U.S. Senate, Kansas, Democratic candidate  
**Date written:** 2026-05-19  
**Agent:** Worker 32, deep-scraper/narrative-deepening equivalent  
**Scope:** Phase 2 current-status and issue deepening. Existing `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and `ui/src/data/v2/sandy-spidel-neumann.ts` were used first; this pass adds current FEC/SOS/county/campaign verification and targeted issue mapping.

---

## Status Summary

Sandy Spidel Neumann is federally registered as a Democratic U.S. Senate candidate in Kansas for the 2026 cycle. FEC lists her as "SPIDEL NEUMANN, SANDY," candidate ID `S6KS00262`, a challenger for Kansas Senate. The current FEC Statement of Candidacy version was filed Oct. 15, 2025. FEC lists `SANDY FOR KANSAS`, committee ID `C00923474`, as her active quarterly Senate principal campaign committee.

Kansas SOS confirms the filing framework, but the live SOS candidate-list endpoint was not readable in this environment. The SOS candidate-information page says Democratic and Republican candidates run in the primary, national/state candidates file with the Secretary of State, and a candidate is not considered filed until the petition or declaration and fee are received. The primary filing deadline is noon Monday, June 1, 2026. The Johnson County Election Office candidate page lists Sandy Spidel Neumann as a Democratic U.S. Senate candidate, incumbent "No," city Overland Park, with website `sandyforkansas.com`. Treat her as an active FEC-filed candidate with official county-list evidence, while noting final statewide ballot certification remains pending before the June 1 filing deadline.

Spidel Neumann has not held public office in the reviewed record. Action evidence therefore consists of campaign filings, campaign-controlled issue pages, public interviews, public events, donor/funding records, and social-media output rather than votes or officeholder decisions.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-fec-candidate | primary | https://www.fec.gov/data/candidate/S6KS00262/?cycle=2026&election_full=false | accessed 2026-05-19 | Candidate ID, office, party, challenger status, statement filed 2025-10-15, Q1 2026 totals | status, campaign finance |
| s-fec-committee | primary | https://www.fec.gov/data/committee/C00923474/?cycle=2026 | accessed 2026-05-19 | Active principal committee, committee ID, registration date, treasurer, authorizing candidate, committee address, financial totals | status, campaign finance |
| s-fec-form2 | primary | https://docquery.fec.gov/pdf/730/202510159791595730/202510159791595730.pdf | filed 2025-10-15; accessed 2026-05-19 | FEC Form 2 Statement of Candidacy, candidate name, office, party, principal campaign committee | status |
| s-fec-form1 | primary | https://docquery.fec.gov/pdf/895/202510159791594895/202510159791594895.pdf | filed 2025-10-15; accessed 2026-05-19 | FEC Form 1 Statement of Organization for Sandy for Kansas | committee structure |
| s-sos-candidate-info | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Kansas filing rules, filing deadline, offices up in 2026, filing fees, petition requirements | ballot status |
| s-joco-candidates | primary | https://www.jocoelection.org/candidates-elected-officials/candidates | accessed 2026-05-19 | Official county election-office candidate list, U.S. Senate row for Sandy Spidel Neumann | ballot-status lead |
| s-campaign-home | primary | https://sandyforkansas.com/ | accessed 2026-05-19 | Candidate-controlled homepage, office claim, biography, campaign address, campaign social links | biography, issue overview |
| s-campaign-issues | primary | https://sandyforkansas.com/issues/ | accessed 2026-05-19 | Candidate-controlled issue page: agriculture, healthcare, education, veterans, economic policy | issue positions |
| s-bsky-profile | social | https://bsky.app/profile/speumann.bsky.social | API accessed 2026-05-19 | Public profile metadata: followers, follows, posts, created date, description | social presence |
| s-bsky-ice | social | https://bsky.app/profile/speumann.bsky.social/post/3md77khbaks2q | posted 2026-01-24; API accessed 2026-05-19 | ICE accountability post; engagement 1 like, 0 reposts, 0 replies, 0 quotes | immigration |
| s-bsky-gas | social | https://bsky.app/profile/speumann.bsky.social/post/3mabdqda6fc2e | posted 2025-12-18; API accessed 2026-05-19 | Kansas gas-price post; engagement 4 likes, 1 repost, 0 replies, 0 quotes | economy, costs |
| s-bsky-aca | social | https://bsky.app/profile/speumann.bsky.social/post/3m7t2hxexnk2d | posted 2025-12-12; API accessed 2026-05-19 | ACA premium-tax-credit post; engagement 2 likes, 1 repost, 0 replies, 0 quotes | healthcare |
| s-bsky-shutdown-healthcare | social | https://bsky.app/profile/speumann.bsky.social/post/3m5bryouqls22 | posted 2025-11-10; API accessed 2026-05-19 | Shutdown and Kansas health-insurance premium post; engagement 1 like, 1 repost, 0 replies, 0 quotes | healthcare, economy |
| s-bsky-votevets | social | https://bsky.app/profile/speumann.bsky.social/post/3m4b4gysu5c27 | posted 2025-10-28; API accessed 2026-05-19 | VoteVets economic town hall post; engagement 2 likes, 1 repost, 0 replies, 0 quotes | veterans, economy |
| s-bsky-hays | social | https://bsky.app/profile/speumann.bsky.social/post/3m3iv6zf6522f | posted 2025-10-18; API accessed 2026-05-19 | Hays No Kings protest attendance post; engagement 2 likes, 1 repost, 0 replies, 0 quotes | civic engagement |
| s-bsky-launch | social | https://bsky.app/profile/speumann.bsky.social/post/3m3cpfacsi22a | posted 2025-10-16; API accessed 2026-05-19 | Campaign launch post; engagement 5 likes, 3 reposts, 4 replies, 1 quote | campaign message |
| s-bsky-farms-hospitals | social | https://bsky.app/profile/speumann.bsky.social/post/3m3dgdmmzms2f | posted 2025-10-16; API accessed 2026-05-19 | Farms, hospitals, families post; engagement 0 likes, 0 reposts, 1 reply, 0 quotes | agriculture, healthcare |
| s-bsky-ukraine | social | https://bsky.app/profile/speumann.bsky.social/post/3ljbdu5vwbc2l | posted 2025-02-28; local/API checked 2026-05-19 | Ukraine support post | foreign policy |
| s-bsky-era | social | https://bsky.app/profile/speumann.bsky.social/post/3lawjtoy4js2o | posted 2024-11-14; local harvest accessed 2026-05-19 | Equal Rights Amendment post | civil rights, reproductive-rights context |
| s-kansas-reflector-launch | secondary | https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/ | 2025-10-16; accessed 2026-05-19 | Launch article, biography, reason for running, Medicaid/tariffs/Farm Bill quotes | biography, healthcare, agriculture |
| s-kansas-reflector-profile | secondary | https://kansasreflector.com/2026/04/27/democratic-candidate-for-u-s-senate-touts-business-background-integrity-in-fight-for-kansas-seat/ | 2026-04-27; accessed 2026-05-19 | Interview/profile on business background, ACA, tariffs, immigration, elections, accountability, foreign policy | issue positions |
| s-kcur-guide | secondary | https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates | 2025-12-30; accessed 2026-05-19 | Candidate guide: no public office, Ameriprise career, prior political donations, platform summary | biography, donor history, issues |
| s-kdp-candidates | secondary | https://kansasdems.org/candidates | accessed 2026-05-19 | Kansas Democratic Party candidate list with caveat to reference SOS for filed candidates | party listing |
| s-senate-ethics-disclosure | primary | https://www.ethics.senate.gov/public/index.cfm/financialdisclosure | accessed 2026-05-19 | Senate candidate financial-disclosure filing rules | disclosure rules |
| s-nrsc-complaint | secondary | https://www.nrsc.org/press-releases/nrsc-calls-for-investigation-into-four-kansas-democrat-senate-candidates-for-violating-the-law-2026-03-11/ | 2026-03-11; accessed 2026-05-19 via search/local context | Partisan complaint alleging late personal financial disclosures by several Democratic Senate candidates including Spidel Neumann | disclosure controversy |

---

## Election and Filing Records

### FEC candidate record

**Source:** s-fec-candidate, s-fec-form2, primary.

FEC lists Spidel Neumann as:

- Candidate for Senate, Kansas.
- Candidate ID `S6KS00262`.
- Democratic Party.
- Type of candidacy: challenger.
- Current Statement of Candidacy version `FEC-1921666`, filed Oct. 15, 2025.
- Authorized principal committee: `SANDY FOR KANSAS (C00923474)`.

**Issue mapping:** official candidacy and campaign finance.

### FEC committee record

**Sources:** s-fec-committee, s-fec-form1, primary.

FEC lists `SANDY FOR KANSAS` as:

- Active quarterly Senate principal campaign committee.
- Committee ID `C00923474`.
- Registration date Oct. 15, 2025.
- Mailing address PO Box 2159, Mission, Kansas 66201.
- Treasurer Lauren Decot Lee.
- Authorizing candidate Spidel Neumann.

**Issue mapping:** committee structure and active campaign infrastructure.

### Kansas filing framework and ballot caveat

**Sources:** s-sos-candidate-info, s-joco-candidates, s-kdp-candidates.

Kansas SOS says:

- Democratic and Republican candidates must run in the primary to secure nomination.
- National, state, legislative, and judicial candidates file with the Secretary of State.
- A candidate is not considered filed until the petition or declaration and fee are received.
- Primary filing deadline is noon Monday, June 1, 2026.
- One U.S. Senator is among the offices to be elected in 2026.
- U.S. Senator filing fee total is $1,760, or a petition threshold of 1% party for party candidates.

The Johnson County Election Office candidate page lists Sandy Spidel Neumann under U.S. Senate as a Democratic candidate, incumbent "No," city Overland Park, website `sandyforkansas.com`. The Kansas Democratic Party also lists her under U.S. Senate, but the party page explicitly tells readers to reference the Secretary of State for filed candidates.

**Caveat:** The live Kansas SOS candidate-list endpoint returned a 403 response to this environment. Downstream language should not say final statewide ballot certification is complete before the June 1, 2026 deadline.

---

## Campaign Finance

### FEC summary through March 31, 2026

**Source:** s-fec-candidate, primary.

FEC candidate summary for coverage dates Oct. 14, 2025 to March 31, 2026:

- Total receipts: $187,436.34.
- Total contributions: $87,377.11.
- Total individual contributions: $83,877.11.
- Itemized individual contributions: $48,373.00.
- Unitemized individual contributions: $35,504.11.
- Party committee contributions: $0.00.
- Other committee contributions: $0.00.
- Candidate contributions: $3,500.00.
- Total loans received: $100,000.00.
- Loans made by candidate: $100,000.00.
- Other receipts: $59.23.
- Total disbursements: $149,326.67.
- Operating expenditures: $149,306.67.
- Individual refunds: $20.00.
- Ending cash on hand: $38,109.67.
- Debts/loans owed by committee: $100,000.00.

This updates older local site-profile totals through Dec. 31, 2025, which showed $167,587.11 receipts, $40,660.59 spent, and $126,926.52 cash on hand.

### Donor/funding interpretation limits

FEC summary supports these limited findings:

- The campaign has significant candidate self-funding: $100,000 in candidate loans plus $3,500 in candidate contributions.
- Individual contributions are the non-self-funding base: $83,877.11 total individual contributions through March 31, 2026.
- No party committee or other committee contributions are reported in the FEC summary through March 31, 2026.

**FEC API limitation:** The public `DEMO_KEY` was over its hourly rate limit during this pass, so full itemized receipts/disbursements were not exported. Do not overstate donor patterns, employer patterns, or industry patterns from incomplete data.

### Prior political giving

**Source:** s-kcur-guide, secondary.

KCUR reported that FEC records show Spidel Neumann has made more than 120 donations to Democratic candidates and organizations, including a recent $5,000 donation to the Kansas Democratic Party. This is relevant to political-network context but should be separated from her campaign committee's receipts.

### Disclosure controversy

**Sources:** s-senate-ethics-disclosure, s-nrsc-complaint.

The Senate Ethics financial-disclosure page says Senate candidates must file an initial Candidate Report within 30 days of becoming a candidate or by May 15 of that calendar year, whichever is later, and no later than 30 days before an election.

The NRSC published a March 11, 2026 press release calling for Senate Ethics investigation of several Democratic candidates, including Spidel Neumann, over alleged late Personal Financial Disclosure Forms.

**Could not confirm:** This pass did not confirm any official Senate Ethics disposition, penalty, dismissal, extension, amendment, or candidate response. Treat this as a partisan complaint plus a confirmed disclosure-rule backdrop, not adjudicated misconduct.

---

## Biography and Professional Record

### Candidate-controlled biography

**Sources:** s-campaign-home, s-campaign-issues.

The campaign website identifies Spidel Neumann as a Democrat for U.S. Senate. It says she was born in Topeka, adopted as a newborn, grew up in Johnson County, graduated second in her class at Shawnee Mission North, represented Kansas at Girls State and Girls Nation, earned an economics degree from the University of Chicago, and earned an MBA from Northwestern's Kellogg School of Management while working full time.

The campaign says she built a career in financial services, emphasizes relationships across corporate levels, and says her father had family who homesteaded in Burlingame and cousins who farmed. It gives a personal biography including her husband Neil, dog Izzy, cats Louie and Otie, and support for causes including Great Plains SPCA, No Kid Hungry, KCUR, and the Nelson-Atkins Museum of Art.

### Secondary biography and political-experience context

**Sources:** s-kansas-reflector-launch, s-kansas-reflector-profile, s-kcur-guide.

Kansas Reflector's launch article describes her as a former financial-services executive. KCUR says she has not held public office and recently retired after more than 20 years as an Ameriprise executive. Kansas Reflector's April 2026 profile says she was motivated to run after seeing Sen. Roger Marshall walk out of a town hall and frames her pitch around business principles, data, accountability, and strategy.

**Gap:** No public office voting record was found for Spidel Neumann.

---

## Issue Area 1 - Healthcare, Medicaid, ACA Subsidies, and Drug Prices

### Candidate-stated platform

**Sources:** s-campaign-issues, s-kansas-reflector-launch, s-kansas-reflector-profile, s-kcur-guide.

The campaign issue page says recent policy changes are harming access to healthcare and health insurance, that Medicaid reimbursement cuts threaten rural hospitals, and that expiring ACA premium-tax-credit subsidies threaten middle-class coverage. It says Spidel Neumann supports reinstating Medicaid funding, extending ACA subsidies, keeping government out of women's healthcare decisions, and fighting pharmaceutical companies on drug prices.

Kansas Reflector's launch article says she called Medicaid cuts "the big abomination of a bill" and said reversing them would be a good first step because healthcare is a significant concern in rural Kansas. Kansas Reflector's April profile reports her argument that ACA data should be used to fix what is not working and preserve what is working.

### Action evidence

- **2025-10-16, campaign launch/social:** Launch-day Bluesky post says she is running "to fight for Kansas families"; a second launch-day post says, "Let's fight for our farms, hospitals, and families together." Sources: s-bsky-launch, s-bsky-farms-hospitals.
- **2025-12-12, ACA post:** She posted support for extending ACA premium tax credits while healthcare affordability is addressed. Source: s-bsky-aca.
- **2025-11-10, healthcare premium post:** She posted that Kansas healthcare insurance premiums were expected to rise 75-100% and tied the issue to the shutdown. Source: s-bsky-shutdown-healthcare.
- **2026 campaign issues page:** healthcare plank names Medicaid, ACA subsidies, women's healthcare decisions, and drug prices. Source: s-campaign-issues.

**Issue mapping:** healthcare/Medicaid, Social Security/Medicare adjacency, reproductive healthcare, rural hospitals, drug prices.

---

## Issue Area 2 - Abortion / Reproductive Freedom

### Candidate-stated platform

**Sources:** s-campaign-home, s-campaign-issues, s-kansas-reflector-profile, s-bsky-era.

The campaign biography says she will fight for "protecting reproductive freedom." The issue page places reproductive policy inside healthcare, saying she supports keeping the government out of women's healthcare decisions. In the Kansas Reflector April profile, she tied Kansas judicial-selection changes to women's healthcare, education funding, and voting rights. Existing social harvest includes a Nov. 14, 2024 Bluesky post supporting the Equal Rights Amendment.

### Action evidence

- **Campaign-controlled biography:** names protecting reproductive freedom as a campaign priority. Source: s-campaign-home.
- **Campaign-controlled issue page:** says she supports keeping government out of women's healthcare decisions. Source: s-campaign-issues.
- **2026-04-27 interview:** connects court control concerns with women's healthcare. Source: s-kansas-reflector-profile.

**Issue mapping:** abortion/sanctity-of-life, healthcare, courts.

---

## Issue Area 3 - Agriculture, Tariffs, Food Aid, and Right to Repair

### Candidate-stated platform

**Sources:** s-campaign-issues, s-kansas-reflector-launch, s-kansas-reflector-profile.

The campaign issue page says chaotic tariffs are hurting farmers and ranchers, increasing equipment costs, and reducing access to international markets for crops and livestock. It also says dismantling USAID food-aid programs is reducing demand for Kansas-grown agricultural products. She supports immediate reversal of tariffs, reinstating food aid programs, reopening U.S. agricultural markets, and right-to-repair legislation.

Kansas Reflector's launch article says she entered the race in part over Marshall-endorsed tariffs and says she called for ending "willy-nilly" tariff use and passing a Farm Bill. Kansas Reflector's April profile reports her criticism that tariffs lacked stability and harmed Kansas farmers by closing Chinese markets and raising input costs.

### Action evidence

- **2025-10-16, launch-day social:** posted that Kansas deserves a senator who works for farms, hospitals, and families. Source: s-bsky-farms-hospitals.
- **2025-10-16, launch coverage:** Kansas Reflector reported her tariff and Farm Bill criticism. Source: s-kansas-reflector-launch.
- **2026 campaign issues page:** agriculture plank names tariffs, food aid, markets, equipment costs, and right to repair. Source: s-campaign-issues.

**Issue mapping:** agriculture, tariffs/trade, right to repair, rural economy.

---

## Issue Area 4 - Education and School Safety

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-home.

The campaign issue page says education is a strong investment in the future and supports keeping the Department of Education as a cabinet-level agency, restoring special-education funding, and enacting common-sense gun-safety legislation to keep children and educators safe at school. The campaign biography also lists "working to make kids safer at school" among priorities.

### Action evidence

- **Campaign issue page:** education plank includes Department of Education, special education, and school safety. Source: s-campaign-issues.
- **Campaign biography:** names school safety as a Washington priority. Source: s-campaign-home.

**Issue mapping:** education, school safety, disability/special education, gun policy only in school-safety context.

---

## Issue Area 5 - Veterans and Military Families

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-home, s-bsky-votevets.

The campaign issue page says veteran support should include healthcare access, mental-health services, job opportunities, workforce training programs, small-business grants for veteran entrepreneurs, protections against homelessness, housing assistance, and transition programs. The campaign biography says she will defend Social Security, Medicare, and the VA. A public Bluesky post says she planned to attend a VoteVets Economic Town Hall with Sen. Elissa Slotkin and Rep. Sharice Davids.

### Action evidence

- **Campaign issue page:** veterans plank names healthcare, mental health, jobs, entrepreneurship, homelessness protections, housing, and transition programs. Source: s-campaign-issues.
- **2025-10-28, VoteVets post:** public post about attending VoteVets Economic Town Hall. Source: s-bsky-votevets.

**Issue mapping:** veterans, healthcare, economy.

---

## Issue Area 6 - Economic Policy, Costs, and Fiscal Stewardship

### Candidate-stated platform

**Sources:** s-campaign-home, s-campaign-issues, s-bsky-gas, s-kansas-reflector-profile.

The campaign homepage says she is running to lower costs, defend freedoms, protect Social Security and Medicare, and ensure opportunity for Kansans. The economic-policy plank criticizes national debt, says economic policy should benefit everyone, supports restoring accurate and transparent economic reporting, and supports programs that expand employment opportunities and economic growth. A Dec. 18, 2025 Bluesky post cites AAA gas-price data for Kansas counties. Kansas Reflector's April profile reports her emphasis on business principles, data, and strategic decision-making.

### Action evidence

- **2025-10-16, launch-day social:** posts centered on groceries, gas, housing, kids' futures, farms, hospitals, and families. Sources: s-bsky-launch, s-bsky-farms-hospitals.
- **2025-12-18, gas-price post:** cited statewide average gas price and Finney/Lincoln county comparison. Source: s-bsky-gas.
- **2026 campaign issue page:** economic-policy plank includes debt, transparent economic reporting, employment opportunity, and growth. Source: s-campaign-issues.

**Issue mapping:** cost of living, economy, fiscal stewardship, government reporting.

---

## Issue Area 7 - Immigration, Border Enforcement, and ICE Accountability

### Candidate-stated platform

**Sources:** s-kansas-reflector-profile, s-bsky-ice.

Kansas Reflector's April profile reports Spidel Neumann saying the country needs secure borders but that current ICE handling is not the "American way." The article reports her support for more accountability, training, body cameras, goals based on charges moving forward in court rather than number of arrests, and removal of Kristi Noem as Homeland Security secretary as a first move. Her Jan. 24, 2026 Bluesky post called for the Senate to vote against ICE funding until constitutional/legal operating procedures and training are implemented.

### Action evidence

- **2026-01-24, ICE post:** public Bluesky post calling for no ICE funding until operating procedures and training meet constitutional, federal, and state law standards. Source: s-bsky-ice.
- **2026-04-27, Kansas Reflector profile:** public interview gives detailed immigration and ICE-accountability statements. Source: s-kansas-reflector-profile.

**Issue mapping:** immigration/border, due process, law enforcement accountability.

---

## Issue Area 8 - Elections, Courts, and Voting Access

### Candidate-stated platform

**Source:** s-kansas-reflector-profile.

Kansas Reflector reports Spidel Neumann saying elections are safe, opposing voter intimidation tactics such as ICE officers at polling places, opposing voter ID laws, and opposing eliminating mail-in voting. The same profile reports her criticism of a Kansas judicial-selection change that would move the state Supreme Court from nominating-commission selection toward direct judicial elections.

### Action evidence

- **2026-04-27, Kansas Reflector profile:** interview contains statements on election safety, voting procedures, mail voting, voter ID, and Kansas Supreme Court selection. Source: s-kansas-reflector-profile.

**Issue mapping:** election administration, voting access, courts, judicial selection.

---

## Issue Area 9 - Ethics, Accountability, and Congressional Conduct

### Candidate-stated platform

**Sources:** s-kansas-reflector-profile, s-kansas-reflector-launch, s-campaign-home.

Kansas Reflector's April profile reports Spidel Neumann saying she would like an enforceable code of conduct across all three branches, transparency, no insider trading in any branch, adherence to the oath of office, loyalty to the Constitution, and public accountability. Her campaign biography and launch coverage frame the campaign around integrity, showing up, listening, and fighting for Kansans.

### Action evidence

- **2025-10-16, campaign launch:** campaign launched in response to Roger Marshall's town hall walkout, according to launch coverage and her launch post. Sources: s-kansas-reflector-launch, s-bsky-launch.
- **2026-04-27, Kansas Reflector profile:** interview contains ethics/code-of-conduct/insider-trading statements. Source: s-kansas-reflector-profile.

**Issue mapping:** ethics, accountability, governance, constituent access.

---

## Issue Area 10 - Foreign Policy, War Powers, and Alliances

### Candidate-stated platform

**Sources:** s-kansas-reflector-profile, s-bsky-ukraine.

Kansas Reflector's April profile reports her criticism that the Iran war lacked strategic policy and her concern about NATO and strategic alliances. Bluesky posts from Feb. 28, 2025 expressed support for Ukraine.

### Action evidence

- **2025-02-28, Ukraine post:** public Bluesky post saying "I #StandwithUkraine Pass it on." Source: s-bsky-ukraine.
- **2026-04-27, Kansas Reflector profile:** interview includes Iran war, NATO, and strategic alliance statements. Source: s-kansas-reflector-profile.

**Issue mapping:** foreign policy, war powers, alliances.

---

## Social / Online Record

### Bluesky

**Sources:** s-bsky-profile and listed post URLs.

API readback on 2026-05-19 showed:

- Handle: `speumann.bsky.social`.
- Display name: Sandy Spidel Neumann.
- Followers: 1,260.
- Following: 2,810.
- Posts: 228.
- Created: 2024-11-10.
- Description: "Daughter of Kansas. Businesswoman. Problem solver. Fighter for fairness. Running for U.S. Senate to deliver for Kansas families. 🌻"

The `posts_no_replies` feed returned no original/quote posts newer than Jan. 24, 2026. The visible campaign-period post set overlaps the existing `social-harvest.md`: launch, farms/hospitals/families, Hays protest, VoteVets town hall, expense criticism, Democratic organizing, ACA premiums, gas prices, Army/Navy personal content, and ICE.

### Other platforms

Existing local `social-harvest.md` remains the best structured platform pass:

- Facebook, Instagram, YouTube, X, Threads, and LinkedIn public presences were identified.
- Post-level reliable harvest was limited to Bluesky.
- No candidate-controlled Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was found.

**Use caution:** Social evidence should be used only as observed public activity and mapped to issue areas where the post itself is relevant.

---

## Blockers and Could Not Confirm

- **Kansas SOS live list:** direct `elections_upcoming_candidate.aspx` readback returned CloudFront 403. SOS filing rules are confirmed; direct SOS row was not.
- **Final ballot:** final ballot certification is premature before the June 1, 2026 candidate filing deadline.
- **City/residence wording:** Johnson County Election Office lists city Overland Park, while the campaign gives a PO Box in Mission. Use "Johnson County" unless the downstream profile intentionally distinguishes election-office city from mailing address.
- **Itemized FEC donor export:** FEC public API was rate-limited for `DEMO_KEY`; full donor/disbursement export was not captured.
- **Financial-disclosure complaint outcome:** no official Senate Ethics outcome, penalty, dismissal, extension, amendment, or candidate response was found.
- **Endorsements:** no verified campaign endorsement list was found.
- **Missing issue statements:** no candidate-controlled standalone statement found for marriage/LGBTQ policy, religious liberty, marijuana/drug policy, or broad Second Amendment policy beyond school-safety gun-safety language.
- **Faith affiliation:** no current church affiliation or worship location found.
