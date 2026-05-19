# Raw Dump v2 - Joy Eakins

**Date:** 2026-05-19  
**Agent:** Worker 23, deep-scraper equivalent  
**Phase / Stage:** Phase 2 all-candidate deepening  
**Candidate slug:** joy-eakins  
**Position:** Kansas Governor candidate, Republican  
**Election:** kansas-governor-2026  

## Brief

This is an additive v2 scrape for Joy Eakins. Existing local files already captured broad campaign biography, a May 11 social harvest, and a v1-style site profile. This pass refreshes official status, KPDC finance, candidate-controlled issue pages, available public-record action evidence, and current blockers for downstream `CandidateFullV2` compilation.

Important correction for later compilers: the current UI v2 object contains bad copied URLs, including `campaignWebsite` pointing to a Jeff Colyer House bio PDF and `church.url` pointing to a Philip Sarnecki Bott Radio page. Current candidate-controlled sources point to `https://www.kansascomeback.com/` and River Community Church at `https://www.rivercc.org/`.

## Sweep Coverage

| Source | Tier | Reached | Notes |
|---|---|---|---|
| Kansas SOS candidate-information page | primary | yes | Confirms Governor/Lt. Governor is an office elected in 2026 and gives filing rules/deadline. |
| Kansas SOS important election dates | primary | yes | Confirms June 1 filing deadline, August 4 primary, November 3 general. |
| Kansas SOS live candidate list | primary | blocked | `elections_upcoming_candidate.aspx` returned JavaScript / CloudFront anti-bot block. |
| KPDC statewide 2026 finance page | primary | yes | Lists Eakins under Gubernatorial Candidates and links AT / 202601 report. |
| KPDC appointment of treasurer | primary | yes | Candidate name Joy Eakins; office sought Governor; treasurer Kim Borchers; executed 2025-01-17. |
| KPDC January 2026 report | primary | yes | Cover totals, self-loan, and examples extracted with `pdftotext`. |
| Sedgwick County 2013 official results | primary/local government | yes | Confirms 2013 USD 259 District 2 school-board win. |
| Kansas Legislature HB2466 minutes | primary | yes | Records Eakins as proponent conferee for computer-science education. |
| Campaign site | candidate-controlled primary | yes | About, Education, Property Tax Reform, News reposts. |
| Social platforms | social | limited | Existing logged-out harvest has metadata only for Facebook/X/LinkedIn; no reliable post/comment corpus. |
| News / transcript sources | secondary | yes | Used for debate, town hall, and campaign guide context. |

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-sos-candidate-info | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Statewide filing rules, June 1 filing deadline, Governor/Lt. Governor on 2026 office list | official status |
| s-sos-election-dates | primary | https://sos.ks.gov/elections/important-election-dates.html | accessed 2026-05-19 | June 1 candidate deadline, August 4 primary, November 3 general | official status |
| s-sos-deadline-release | primary | https://www.sos.ks.gov/media/press-releases/2026/05-01-26-one-month-countdown-until-candidate-filing-deadline.html | 2026-05-01; accessed 2026-05-19 | SOS says state/statewide candidates file in person by noon June 1; Governor/Lt. Governor on office list | official status |
| s-kpdc-statewide-2026 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm | page last updated 2026-01-22; accessed 2026-05-19 | Eakins listed under gubernatorial candidates; AT and 202601 report links | status, finance |
| s-kpdc-treasurer | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01JK_AT.pdf | executed 2025-01-17; accessed 2026-05-19 | Appointment of treasurer, office sought Governor, treasurer Kim Borchers | status, finance |
| s-kpdc-jan2026-report | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JE_202601.pdf | filed 2026-01-09; accessed 2026-05-19 | 2025 receipts, expenditures, cash, in-kind, self-loan, donor examples | campaign finance |
| s-campaign-home | primary-candidate | https://www.kansascomeback.com/ | accessed 2026-05-19 | Active campaign site and footer; links navigation, donate, treasurer | status |
| s-campaign-about | primary-candidate | https://www.kansascomeback.com/about | accessed 2026-05-19 | Biography, Cornerstone Data, school-board service, family, River Community Church | biography, faith, education |
| s-campaign-education | primary-candidate | https://www.kansascomeback.com/education | accessed 2026-05-19 | Education platform, school choice, finance formula, union negotiation, school-board record claims, COVID reopening data claim | education |
| s-campaign-property-tax | primary-candidate | https://www.kansascomeback.com/propertytaxreform | accessed 2026-05-19 | Appraisal caps, assessment appeals, relief funds, local-government spending frame | property tax |
| s-campaign-kake-repost | primary-candidate / secondary original | https://www.kansascomeback.com/news/joy-eakins-discusses-her-run-for-the-governors-office | 2025-06-19; accessed 2026-05-19 | KAKE interview repost: opportunity, education outcomes, school choice, government getting out of the way | economy, education |
| s-sedgwick-2013-results | primary/local government | https://www.sedgwickcounty.org/elections/election-results/2013-general/?altTemplate=race&race=161 | official results last updated 2013-04-08; accessed 2026-05-19 | Joy Leigh Eakins won USD 259 District 2 school-board race by 46 votes | office history |
| s-ksleg-hb2466-minutes | primary | https://www.kslegislature.gov/li/b2021_22/measures/minutes/agenda_item_2022012646029990241 | 2022-02-01 minutes; accessed 2026-05-19 | Eakins testified as proponent on computer-science education bill; identified as Wichita school-board and KSDE CS task-force alum | education, workforce |
| s-ksleg-2024-cs-testimony | primary | https://www.kslegislature.gov/li/b2023_24/committees/ctte_h_ed_1/documents/testimony/20240118_05.pdf | 2024-01-18; accessed 2026-05-19 | Eakins written testimony on computer-science / PACK Act | education, workforce |
| s-ljworld-local-elections | secondary | https://www2.ljworld.com/news/2015/feb/11/bill-move-local-elections-november-draws-crowded-h/ | 2015-02-11; accessed 2026-05-19 | Eakins supported moving local election timing; quote on early board approvals | local governance |
| s-sentinel-transparency | secondary | https://sentinelksmo.org/transparency-becomes-focus-of-wichita-school-board-campaigns/ | 2017-10-23; accessed 2026-05-19 | Reports Eakins' Wichita Eagle letter on school-board transparency; original Eagle not directly readable here | transparency |
| s-kcur-guide | secondary | https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates | updated 2025-12-24; accessed 2026-05-19 | Candidate guide: school-board service, Cornerstone Data, taxes/regulation/budgets, medical-decision language | status, platform |
| s-hayspost-ellis-townhall | secondary | https://hayspost.com/posts/2c52043f-2180-461b-9a64-4fd75c91236f | 2026-04-13; accessed 2026-05-19 | Ellis town hall: appraisal cap, education bill, Medicaid reimbursement comments, church/family note | property tax, education, healthcare |
| s-freestate-debate-pt1 | secondary | https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/ | 2026-02-17; accessed 2026-05-19 | Unofficial debate transcript: opening, property taxes, incentives, SNAP/federal compliance, COVID data | property tax, economy, education |
| s-freestate-debate-pt2 | secondary | https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/ | 2026-02-20; accessed 2026-05-19 | Unofficial debate transcript: judicial selection, education, marijuana, abortion, immigration, energy | courts, education, abortion, drug policy, immigration, energy |
| s-kansas-reflector-finance | secondary | https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/ | 2026-01-19; accessed 2026-05-19 | Reporting on millionaire/self-funded candidates and Eakins' $1 million loan | finance |
| s-kansas-reflector-debate | secondary | https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/ | 2026-01-30; accessed 2026-05-19 | Debate coverage: shared positions on abortion, marijuana, court elections, Trump praise | issue context |
| s-facebook-page | social | https://www.facebook.com/JoyforKS/ | prior local capture 2026-05-11 | Campaign Facebook metadata only: page name, likes/talking count | social presence |
| s-x-campaign | social | https://x.com/JoyforKS | prior local capture 2026-05-11 | Campaign X profile metadata only: creation date, follower/status/media counts | social presence |
| s-linkedin-profile | social | https://www.linkedin.com/in/joyeakins/ | prior local capture 2026-05-11 | LinkedIn profile preview, follower/connection count, activity snippets | social presence, biography |

## Official Status and Race Scope

### Kansas SOS candidate rules and dates

**Sources:** `s-sos-candidate-info`, `s-sos-election-dates`, `s-sos-deadline-release`.

Kansas SOS says candidates for state office file with the Secretary of State and are not considered filed until petition or declaration and fee are received. Governor/Lt. Governor is an office to be elected or retained in 2026. The candidate filing deadline is 12:00 p.m. Monday, June 1, 2026. The 2026 primary election date is August 4, 2026, and the general election date is November 3, 2026.

The May 1, 2026 SOS press release says individuals seeking state or statewide office must file in person by noon on June 1 and that an updated 2026 candidate list is available on the SOS website and will be updated after the deadline.

**Limit:** The linked live candidate list returned a JavaScript / CloudFront block in this environment. Do not say a direct SOS candidate-list row was confirmed.

### KPDC gubernatorial campaign account

**Sources:** `s-kpdc-statewide-2026`, `s-kpdc-treasurer`, `s-kpdc-jan2026-report`.

The KPDC statewide 2026 election-cycle page lists `Eakins, Joy` under `Gubernatorial Candidates`. The appointment-of-treasurer PDF lists Joy Eakins, office sought Governor, treasurer Kim Borchers, and execution date January 17, 2025. The January 2026 receipts/expenditures report lists office sought Governor and was electronically filed by Kim Borchers on January 9, 2026.

**Status language for downstream:** "Joy Eakins has an active KPDC-listed gubernatorial campaign account and candidate-controlled governor campaign site. Direct live SOS candidate-list confirmation was blocked in this environment; final ballot certification should be rechecked after June 1, 2026."

## Biography / Public Record

### Candidate-controlled biography

**Source:** `s-campaign-about`.

The campaign About page says Joy Eakins is a "strong conservative and America First patriot," built Cornerstone Data, Inc. as a Kansas data-analytics firm with nationwide reach, and served on the Wichita Board of Education. It says she has been married to Eric for 31 years, has one biological son serving in the U.S. Air Force, has a bonus son in Chicago, is a devout Christian, and is a faithful member of River Community Church.

### 2013 Wichita school-board election

**Source:** `s-sedgwick-2013-results`.

Sedgwick County official results for the April 2, 2013 general election show:

- Office: School Board Member District 2, USD 259 Wichita.
- Results were official and 153 of 153 eligible precincts were counted.
- Joy Leigh Eakins: 4,654 votes, 49.9 percent.
- Scott B. Poor: 4,608 votes, 49.4 percent.
- Write-in: 60 votes, 0.6 percent.

Issue mapping: biography / public service record.

### Local election timing testimony / comments

**Source:** `s-ljworld-local-elections`.

Lawrence Journal-World reported in 2015 that Eakins, as a recently elected Wichita school-board member, supported changing local election timing. The article quoted her saying that in her first three meetings she was asked to approve a $639 million budget, a superintendent's contract, and union contracts, while the spring work behind those approvals had occurred before new board members had input.

Issue mapping: local governance, transparency, school-board process.

### School-board transparency secondary lead

**Source:** `s-sentinel-transparency`.

The Sentinel reported in 2017 that Eakins, then not seeking re-election, wrote a Wichita Eagle letter saying transparency was a problem on the Wichita Board of Education and describing pressure against 6-1 or 5-2 votes. The article also summarized a response by Lynn Rogers and a Wichita Eagle editorial. Because the original Eagle material was not directly readable here, use as secondary context only.

Issue mapping: school-board transparency; do not overstate beyond the source.

## Campaign Finance

### Cover totals

**Source:** `s-kpdc-jan2026-report`.

Report period: January 1, 2025 through December 31, 2025. Filed January 9, 2026.

- Cash on hand at beginning: $0.00.
- Total contributions and other receipts: $1,142,759.55.
- Cash available this period: $1,142,759.55.
- Total expenditures and other disbursements: $116,268.91.
- Cash on hand at close: $1,026,490.64.
- In-kind contributions: $2,488.73.
- Other transactions: $1,000,000.00.

### Self-funding and donor examples

**Source:** `s-kpdc-jan2026-report`.

- Schedule A lists a December 29, 2025 loan from Joy Eakins for $1,000,000.00.
- Schedule D lists a $1,000,000.00 loan payable from Joy Eakins at close of period.
- Schedule A also shows a July 1, 2025 check from Joy Eakins for $60,000.00.
- Visible itemized examples include Ryan Baty ($1,041.02), Kim & Tim Borchers ($2,082.03 and $2,000.00 entries), Fred Berry ($2,958.00 and $1,041.02 entries), Walter and Polly Berry ($4,000.00), and multiple smaller individual entries. Do not use the contributor list for commercial purposes; KPDC's page carries a K.S.A. 25-4154(d) warning.

Issue mapping: campaign finance / self-funding.

## Candidate-Controlled Issue Pages

### Education

**Source:** `s-campaign-education`.

The Education page frames education as Eakins' largest issue page. It cites NAEP reading and math proficiency/ranking claims, says parents know best what their child needs, and lists proposed actions:

- Pass robust school-choice legislation.
- Improve civics education.
- Focus on reading and math outcomes.
- Repeal the law mandating school districts negotiate with teachers' unions.
- Pass a new school-finance formula focused on student outcomes and classroom teacher pay.
- Provide training for school-board members and get conservatives elected.
- Train teachers on student outcomes, especially reading and math.

The page also says Eakins advanced parents' rights and school choice on the Wichita school board, pushed for student outcomes rather than spending, opposed suing the state for more money, opposed longer school days, opposed large superintendent raises, and used her data analytics firm to argue Kansas could return children to classrooms safely during COVID.

**Verification limit:** Specific school-board roll calls referenced by the campaign were not fully reconstructed in this pass.

### Property tax

**Source:** `s-campaign-property-tax`.

The Property Tax Reform page proposes:

- Annual appraisal increases capped at 3 percent or inflation, whichever is less, with sale review.
- Ban appraisal systems using comparables from outside Kansas.
- Reward community enhancements with exemptions.
- Four-year "Olympic average" in assessments.
- More time and simpler processes for appeals.
- Regional assessment-dispute sessions.
- Appraisers must show their work and government bears the burden of proof.
- Public disclosure of taxable property lost to abatements / TIFs or similar projects.
- Three-year appraisal lock plus fee recovery for successful disputes.
- Local property-tax relief funds for families, seniors, and veterans.

### Economy / opportunity / outsider frame

**Source:** `s-campaign-kake-repost`.

The campaign's KAKE repost includes Eakins' statements on Kansas needing a comeback, young people leaving Kansas, school spending with worsening outcomes, school choice, financial cliff concerns, housing, an outsider pitch, and government getting out of the way of families and businesses.

## Public Action Evidence

### Computer-science education

**Source:** `s-ksleg-hb2466-minutes`.

Kansas Legislature minutes for HB2466 say Eakins testified as a proponent. The minutes identify her as a small business owner who served on the Wichita school board and Kansas State Department of Education CS task force. The minutes summarize her position: Kansas was falling behind other states in computer science, students needed a basic understanding of how computers work, technology affected retail/agriculture/sports/health and other fields, and CS was "not just coding or robotics." She urged support for the bill.

**ActionEvidence candidate:** Public testimony in favor of computer-science education expansion.

### 2024 computer-science testimony

**Source:** `s-ksleg-2024-cs-testimony`.

Search results and linked PDF identify a January 18, 2024 House Education Committee testimony PDF associated with Joy Eakins and the Computer Science / PACK Act. This should be read directly in a later pass if the compiler needs exact lines beyond the 2022 minutes.

**ActionEvidence candidate:** Continued public testimony on CS education / workforce preparation.

### Property-tax and education town hall

**Source:** `s-hayspost-ellis-townhall`.

Hays Post reported that Eakins held an Ellis town hall in April 2026 focused on property-tax relief and education reform. The article reports her appraisal cap proposal, local relief funds, education package, school choice, performance-based teacher pay, teacher protections, and classroom-discipline comments. It also reports her rural hospital answer: Medicaid expansion was not currently viable and she would focus on Medicaid reimbursement rates.

**ActionEvidence candidate:** Campaign town hall statements; secondary, not official action.

### Debate statements

**Sources:** `s-freestate-debate-pt1`, `s-freestate-debate-pt2`, `s-kansas-reflector-debate`.

Free State News publishes unofficial cleaned transcripts of the January 30, 2026 GOP governor debate. The transcript records Eakins' opening statement, property-tax plan, business-incentive skepticism, judicial-selection answer, education answer, marijuana answer, abortion answer, immigration answer, and energy/data-center answer. Kansas Reflector provides secondary debate coverage.

Use the Free State transcript as secondary direct-speech evidence, not as official transcript.

## Issue-Specific Findings

### Education / school choice / parent role

The strongest evidence is candidate-controlled: `s-campaign-education`, plus Kansas Legislature testimony and town-hall/debate coverage. Eakins' stated agenda includes school choice, reading/math outcomes, civics, a new finance formula, teacher training, school-board training, and repeal of the mandatory negotiation law. Action evidence includes 2022 HB2466 proponent testimony on computer science and the 2026 town-hall/debate statements.

### Property tax / spending

The strongest evidence is candidate-controlled `s-campaign-property-tax`, plus Hays Post and debate transcript corroboration. Her plan centers on appraisal caps, appraisal transparency, burden-of-proof shift, regional appeals, fee recovery, and local relief funds.

### Business / entrepreneurship / incentives

Candidate-controlled biography and KAKE repost tie Eakins' campaign to Cornerstone Data, opportunity, businesses, and a "government out of the way" frame. Debate transcript records skepticism toward targeted incentives and government-underwritten energy/data-center deals.

### Judicial selection

Debate transcript records support for moving away from the current Kansas Supreme Court selection system toward elections. No candidate-controlled issue page on courts was found.

### Abortion / sanctity of life

Debate transcript records a direct answer opposing abortion and connecting the issue to Eakins' biography. Kansas Reflector summarizes Republican candidates' consensus on reducing abortions. No standalone candidate-controlled abortion issue page was found.

### Marijuana / drug policy

Debate transcript records opposition to legalization; Kansas Reflector gives secondary corroboration. No standalone candidate-controlled marijuana/drug-policy page was found.

### Immigration / law enforcement

Debate transcript records support for border enforcement and cooperation with federal enforcement. No standalone candidate-controlled immigration page was found.

### Healthcare / rural hospitals

Hays Post reports Eakins' answer that Medicaid expansion was not currently viable and that Medicaid reimbursement rates should be addressed. KCUR reports medical-decision language tied to COVID public-health decisions. No detailed candidate-controlled healthcare page was found.

### Faith / family

Campaign About page gives family and church affiliation. Keep in biography only unless candidate-controlled policy language explicitly maps it to an issue.

### Social / online relevance

Existing `social-harvest.md` is still the source of record for social metadata. It found campaign site, Facebook, X, personal X snippet, LinkedIn, and WinRed. Direct logged-out post inventories and reliable post-level engagement were not captured. No issue claims should rest on social posts unless a later pass captures post text directly.

## Gaps / Could Not Confirm

- Live SOS candidate-list row for Joy Eakins: blocked by JavaScript / CloudFront challenge.
- Final ballot certification: not available before the June 1, 2026 filing deadline.
- Running mate / lieutenant governor partner: not confirmed in reviewed accessible sources.
- Full Wichita school-board roll-call reconstruction for campaign claims: not completed.
- Direct Facebook/X/LinkedIn post text and comments: not reliably accessible logged out.
- Candidate-controlled statements on guns, LGBTQ policy, religious-liberty policy, water/Ogallala, broadband, roads/bridges, child care, foster care/adoption, detailed public safety, or detailed rural-hospital plan beyond Hays Post town-hall quote.
- No court/legal/property-record finding materially changed the candidate profile in local prior research; this pass did not do a fresh exhaustive court/property search.

## Downstream Recommendations

- Correct UI/candidate website URL to `https://www.kansascomeback.com/`.
- Correct church URL to `https://www.rivercc.org/` if the church field remains.
- Treat finance as heavily self-funded: $1,000,000 loan and $60,000 candidate check are both visible in KPDC report.
- Use action evidence for Eakins' actual public record where possible: 2013 election result, HB2466 testimony, town hall statements, debate answers. Mark school-board roll-call claims as candidate-controlled unless separately verified.
- Recheck the SOS candidate-list endpoint after June 1, 2026 or via a manual browser session.
