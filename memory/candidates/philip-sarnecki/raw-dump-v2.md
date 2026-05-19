# Raw Dump v2 - Philip Sarnecki

**Date:** 2026-05-19  
**Agent:** Worker 30, deep-scraper equivalent  
**Phase / Stage:** Phase 2 all-candidate deepening  
**Candidate slug:** philip-sarnecki  
**Position:** Kansas Governor candidate, Republican  
**Election:** kansas-governor-2026  

## Brief

This is an additive v2 scrape for Philip Sarnecki. Existing local files already captured a broad campaign biography, a May 11 social harvest, a v1-style site profile, and an own-words narrative. This pass refreshes official status, KPDC finance, candidate-controlled campaign text, available debate/property-tax issue evidence, social limitations, and blockers for downstream `CandidateFullV2` compilation.

Important correction for later compilers: the current UI v2 object has `campaignWebsite` pointing to a Jeff Colyer House bio PDF. The current candidate-controlled campaign website is `https://philipsarnecki.org/`.

## Sweep Coverage

| Source | Tier | Reached | Notes |
|---|---|---|---|
| Kansas SOS candidate-information page | primary | yes | Confirms Governor/Lt. Governor is an office elected in 2026 and gives state-office filing rules/deadline. |
| Kansas SOS important election dates | primary | yes | Confirms June 1 filing deadline, August 4 primary, November 3 general. |
| Kansas SOS live candidate list | primary | blocked | `elections_upcoming_candidate.aspx` returned JavaScript / robot-verification text. |
| KPDC statewide 2026 finance page | primary | yes | Lists Sarnecki under Gubernatorial Candidates and links AT / 202601 report. |
| KPDC appointment of treasurer | primary | yes | Candidate name Philip Sarnecki; office sought Governor; committee and treasurer appointed August 27, 2025. |
| KPDC January 2026 report | primary | yes | Cover totals, self-loan, in-kind totals, and donor examples extracted with `pdftotext`. |
| Campaign site | candidate-controlled primary | yes | Homepage, About, launch release, contact/volunteer pages. |
| Social platforms | social | limited | Existing logged-out harvest has usable campaign site, public mirror/snippet, and profile metadata; full native feeds were not captured. |
| News / transcript sources | secondary | yes | Used for debate statements, property-tax special-session request, launch coverage, and interview context. |

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-sos-candidate-info | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Statewide filing rules, Governor/Lt. Governor on 2026 office list, noon June 1 filing deadline | official status |
| s-sos-election-dates | primary | https://sos.ks.gov/elections/important-election-dates.html | accessed 2026-05-19 | June 1 candidate deadline, August 4 primary, November 3 general | official status |
| s-sos-candidate-list | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | accessed 2026-05-19 | Official candidate-list endpoint returned JavaScript / robot-verification text in this environment | blocker |
| s-sos-deadline-release | primary | https://www.sos.ks.gov/media/press-releases/2026/05-01-26-one-month-countdown-until-candidate-filing-deadline.html | 2026-05-01; accessed 2026-05-19 | SOS says state and statewide candidates file in person by noon June 1; Governor/Lt. Governor on office list | official status |
| s-kpdc-statewide-2026 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm | page last updated 2026-01-22; accessed 2026-05-19 | Sarnecki listed under gubernatorial candidates; AT and 202601 report links | status, finance |
| s-kpdc-treasurer | primary | https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01PS_AT.pdf | executed 2025-09-02; accessed 2026-05-19 | Appointment of treasurer / candidate committee, office sought Governor, treasurer Julia Samaniego | status, finance |
| s-kpdc-jan2026-report | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01PS_202601.pdf | electronically filed 2026-01-12; accessed 2026-05-19 | 2025 receipts, expenditures, cash, in-kind, self-loan, donor examples | campaign finance |
| s-campaign-home | primary-candidate | https://philipsarnecki.org/ | accessed 2026-05-19 | Active campaign site and plan language: taxes, jobs, Trump, parental rights, woke policies, accountability, red tape | status, taxes, education, biography |
| s-campaign-about | primary-candidate | https://philipsarnecki.org/about/ | accessed 2026-05-19 | Biography, RPS Financial, 513 Films, Athletes in Action, Finseca, family, faith, values | biography, faith |
| s-campaign-launch | primary-candidate | https://philipsarnecki.org/business-executive-philip-sarnecki-announces-run-for-kansas-governor/ | published 2025-09-05; accessed 2026-05-19 | Launch release, outsider/business frame, Trump comparison, career-politician critique | campaign identity |
| s-campaign-volunteer | primary-candidate | https://philipsarnecki.org/volunteer/ | accessed 2026-05-19 | Volunteer roles including doors, phone banking, sign waving, events, election integrity, digital outreach | campaign infrastructure |
| s-washburn-debate-archive | secondary | https://www.washburn.edu/news/2026/01/Washburn-University-to-Host-2026-Kansas-Gubernatorial-Forum.html | 2026-01-15; accessed 2026-05-19 | Washburn announced Jan. 30, 2026 Republican gubernatorial forum and listed Sarnecki as a participating candidate | debate status |
| s-freestate-debate-pt1 | secondary | https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/ | 2026-02-17; accessed 2026-05-19 | Unofficial cleaned debate transcript: taxes, economy, jobs, property taxes, state/federal cooperation | taxes, economy, SNAP/federal cooperation |
| s-freestate-debate-pt2 | secondary | https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/ | 2026-02-20; accessed 2026-05-19 | Unofficial cleaned debate transcript: judicial selection, education, marijuana, abortion, immigration, energy | courts, education, abortion, drug policy, immigration |
| s-kansas-informer-debate | secondary | https://kaninfo.com/news/gop-governor-candidates-spar-on-unity-careerism-star-bonds-in-first-big-pitch-for-states-highest-office/ | 2026-02-02; accessed 2026-05-19 | Debate coverage: career politician contrast, STAR bond discussion, abortion quote, unity questions | debate context |
| s-hppr-property-special-session | secondary | https://www.hppr.org/hppr-news/2026-05-12/kansas-contemplates-special-legislative-session-to-rekindle-debate-on-property-taxes | 2026-05-12; accessed 2026-05-19 | Reports Sarnecki among GOP candidates urging property-tax special session | property tax |
| s-kspress-launch | secondary | https://kspress.com/news/2025/09/02/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor | 2025-09-02; accessed 2026-05-19 | Launch coverage: Bucyrus/Johnson County businessman, career-politician field, immigration/crime language | status, immigration |
| s-realmedia-interview | secondary | https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/ | 2025-09-19; accessed 2026-05-19 | Long interview/transcript on business, faith, family, housing, cost of living, government bloat | biography, economy |
| s-culture-shield-endorsement | secondary | https://www.cultureshield.com/culture-shield-action-endorses-philip-sarnecki-for-governor/ | accessed 2026-05-19 | Endorsement page with conservative Christian/family/pro-life language; not used to infer positions where direct statements exist | endorsement context |
| s-social-harvest-local | social | memory/candidates/philip-sarnecki/social-harvest.md | captured 2026-05-11; accessed 2026-05-19 | Local logged-out harvest of campaign site, public X mirror/snippets, social presence, topic share, visible engagement, absences | social mapping |

## Official Status and Race Scope

### Kansas SOS candidate rules and dates

**Sources:** `s-sos-candidate-info`, `s-sos-election-dates`, `s-sos-deadline-release`, `s-sos-candidate-list`.

Kansas SOS says candidates for state office file with the Secretary of State and are not considered filed until petition or declaration and fee are received. Governor/Lt. Governor is an office to be elected or retained in 2026. The candidate filing deadline is 12:00 p.m. Monday, June 1, 2026. The 2026 primary election date is August 4, 2026, and the general election date is November 3, 2026.

The May 1, 2026 SOS press release says individuals seeking state or statewide office must file in person by noon on June 1 and that an updated 2026 candidate list is available on the SOS website and will be updated after the deadline.

**Limit:** The linked live candidate list returned a JavaScript / robot-verification block in this environment. Do not say a direct SOS candidate-list row was confirmed.

### KPDC gubernatorial campaign account

**Sources:** `s-kpdc-statewide-2026`, `s-kpdc-treasurer`, `s-kpdc-jan2026-report`.

The KPDC statewide 2026 election-cycle page lists `Sarnecki, Philip` under `Gubernatorial Candidates`. The appointment-of-treasurer / candidate-committee PDF lists Philip Sarnecki, office sought Governor, candidate committee appointed August 27, 2025, treasurer Julia Samaniego, and execution date September 2, 2025. The January 2026 receipts/expenditures report lists office sought Governor and was electronically filed by Julia Samaniego on January 12, 2026.

**Status language for downstream:** "Philip Sarnecki has an active KPDC-listed gubernatorial campaign account and candidate-controlled governor campaign site. Direct live SOS candidate-list confirmation was blocked in this environment; final ballot certification should be rechecked after June 1, 2026."

## Biography / Public Record

### Candidate-controlled biography

**Source:** `s-campaign-about`.

The campaign About page says Sarnecki is a businessman, husband, father, Christian, job creator, former chair of the national board for Athletes in Action, former board member for Finseca, youth baseball coach, Bucyrus resident, and owner of a Franklin County farm. It says he founded RPS Financial Group in 2011, expanded it to 18 offices including 12 in Kansas, served clients in all 50 states, and built or invested in ventures including Strickland Brothers quick-lube franchises and 513 Films.

### Launch identity

**Sources:** `s-campaign-launch`, `s-kspress-launch`.

The campaign launch release compares Sarnecki to President Trump as a first-time candidate/businessman and argues Kansas Republicans keep losing governor races because of a "career politician mindset." Kansas Press Association / Kansas Reflector launch coverage describes him as a Johnson County businessman from Bucyrus who joined a field dominated by career politicians and criticized Democratic leaders on immigration and crime language.

## Campaign Finance

### Cover totals

**Source:** `s-kpdc-jan2026-report`.

Report period: January 1, 2025 through December 31, 2025. Electronically filed January 12, 2026.

- Cash on hand at beginning: $0.00.
- Total contributions and other receipts: $2,528,715.73.
- Cash available this period: $2,528,715.73.
- Total expenditures and other disbursements: $209,667.81.
- Cash on hand at close: $2,319,047.92.
- In-kind contributions: $215,543.04.
- Other transactions: $0.00.

### Self-funding, donors, and in-kind support

**Source:** `s-kpdc-jan2026-report`.

- Schedule A lists a December 31, 2025 loan from Philip Sarnecki for $2,000,000.00.
- Total itemized receipts for the period were $2,528,715.73 and total unitemized contributions were $0.00.
- Schedule B lists total in-kind contributions of $215,543.04. Many entries are from Sarnecki for staff salary and travel expenses; examples from other contributors include David Gabbay and Maya Gabbay for catering and venue rental.
- Visible itemized donor examples include Jaci Hakes ($4,164.06), Creighton Hardy ($4,164.06), Zack Henderson ($4,164.06), Tomlinson Daniel LLC ($4,000), Scott Gulledge ($4,000), Kathleen Gulledge ($4,000), Amy Miller ($4,000), David Browne ($4,000), John Goodwin ($2,500), Eric Haymes ($2,082.03), Ronda Anderson ($260.25), Jim Burt ($250), Eben Fowler ($100), and Lenin Guerra ($100). KPDC's page carries a K.S.A. 25-4154(d) warning against commercial use of contributor names.

Issue mapping: campaign finance / self-funding.

## Candidate-Controlled Issue Material

### Homepage plan

**Source:** `s-campaign-home`.

The campaign homepage presents Sarnecki as "Kansas Dad - Husband - Businessman" and lists problems including high regional taxes, out-of-control property taxes, a high corporate tax rate, "radical hiring policies instead of merit," education elites replacing parents, young Kansans leaving for opportunity, and Republican losses under a Democratic governor. The plan list says he would stand with President Trump, create jobs, lower taxes, restore parental rights, end woke policies, create opportunity for young Kansans, bring business-style accountability to government, and cut red tape for small businesses.

### About page biography and faith/family language

**Source:** `s-campaign-about`.

The About page says Sarnecki is guided by faith in God and committed to conservative values including faith, family, hard work, and accountability. It gives business and board-service biography but does not name a current church affiliation.

### Volunteer / campaign infrastructure

**Source:** `s-campaign-volunteer`.

The volunteer page asks supporters to help with door knocking, phone banking, sign waving, events, election integrity, and digital outreach. This is campaign infrastructure evidence only; do not treat "election integrity" volunteer options as a detailed election-policy platform.

## Public Action Evidence

### Property-tax special-session request

**Source:** `s-hppr-property-special-session`.

HPPR/Kansas Reflector reported on May 12, 2026 that Sarnecki was among GOP gubernatorial candidates asking Gov. Laura Kelly to call a special legislative session on property taxes after the Legislature did not pass a proposed constitutional amendment. This is a campaign/political action, not an officeholder vote.

**ActionEvidence candidate:** public campaign call for special session on property taxes.

### January 30, 2026 Republican gubernatorial forum

**Sources:** `s-washburn-debate-archive`, `s-freestate-debate-pt1`, `s-freestate-debate-pt2`, `s-kansas-informer-debate`.

Washburn University announced the January 30, 2026 Kansas gubernatorial forum and listed Sarnecki as one of the participating candidates. Free State News published unofficial cleaned transcripts. Kansas Informer published debate coverage.

Use debate material as secondary/unofficial direct-speech evidence. Issue areas captured from the transcript include jobs/economy, property taxes, state/federal cooperation on benefits and immigration, judicial selection, education, marijuana, abortion, immigration, and energy/data centers.

**ActionEvidence candidate:** debate statements with transcript caveat.

## Issue-Specific Findings

### Taxes / property taxes / economy

Strongest candidate-controlled source is the campaign homepage. It names high taxes, property taxes, corporate tax comparison, jobs, red tape, business accountability, and young Kansans leaving for opportunity. Secondary evidence includes the property-tax special-session coverage and debate transcript.

### Education / parental rights / school choice

Campaign homepage explicitly says Sarnecki would restore parental rights and end woke policies. The debate transcript records support for school choice and criticism of DEI/gender ideology. Existing social harvest also captured X posts about classroom agendas and the Charlie Kirk / Trump role-model controversy.

### Abortion / sanctity of life

Existing social harvest captured a pro-life X post. The debate transcript and Kansas Informer coverage record direct anti-abortion debate statements. No standalone candidate-controlled abortion issue page was found.

### Immigration / public safety / federal cooperation

Launch coverage and the debate transcript record enforcement-oriented immigration language. Existing social harvest captured a post about an ICE officer assault sentence and deporting violent illegal immigrants. No standalone candidate-controlled immigration page was found.

### Marijuana / drug policy

The debate transcript records Sarnecki opposing legalization. No standalone candidate-controlled marijuana/drug-policy page was found.

### Judicial selection

The debate transcript records Sarnecki supporting the 2026 constitutional amendment to elect Kansas Supreme Court justices. No candidate-controlled courts page was found.

### SNAP / welfare fraud / Trump alignment

Existing social harvest captured X posts tying Kansas SNAP data to Minnesota fraud allegations and saying Sarnecki would release data to President Trump. Debate transcript also records a state/federal cooperation answer. Treat the X mirror as social/mirror evidence, not official platform analytics.

### Faith / family / biography

Candidate-controlled biography uses Christian/faith/family language. The reviewed record did not identify a specific church. Do not infer policy from faith identity unless a direct statement ties faith to a policy position, as in captured abortion statements.

### Social / online relevance

Existing `social-harvest.md` remains the source of record for social metadata. It found campaign site, Facebook, Instagram, YouTube, X, LinkedIn, IMDb, and indexed X mirror/snippet material. Direct logged-out Facebook, Instagram, YouTube, and X timelines were limited. Engagement was only available from public mirror/snippet fields and should not be treated as audited platform analytics.

## Gaps / Could Not Confirm

- Live SOS candidate-list row for Philip Sarnecki: blocked by JavaScript / robot-verification challenge.
- Final ballot certification: not available before the June 1, 2026 filing deadline.
- Running mate / lieutenant governor partner: not confirmed in reviewed accessible sources.
- Current church affiliation or church website: not found.
- Full native social post/comment inventories and reliable engagement counts: not captured logged out.
- Candidate-controlled detailed issue pages were not found for healthcare, Medicaid expansion, rural hospitals, agriculture, water/Ogallala, broadband, roads/bridges, child care, foster care/adoption, disabilities, veterans, gun policy, marriage/LGBTQ policy, or religious-liberty policy.
- No public officeholder voting record was found because Sarnecki is running as a non-incumbent/business candidate.
- Fresh exhaustive court/property/business-record searches were not completed beyond existing local biography/business leads and current campaign/finance verification.

## Downstream Recommendations

- Correct UI/candidate website URL to `https://philipsarnecki.org/`.
- Treat official status as "KPDC-listed gubernatorial campaign account; direct SOS candidate-list row not confirmed in this environment."
- Treat finance as heavily self-funded: $2,000,000 candidate loan on a $2,528,715.73 receipts report, plus $215,543.04 in in-kind contributions.
- Use debate transcripts only with caveat: secondary/unofficial cleaned transcript.
- Do not infer missing issue positions from party label, faith language, endorsement sources, or social affiliations.
