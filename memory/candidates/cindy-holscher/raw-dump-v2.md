# Raw Dump v2 - Cindy Holscher

**Candidate slug:** cindy-holscher
**Office:** Kansas Governor, Democratic candidate
**Date written:** 2026-05-19
**Agent:** Worker 13, deep-scraper/narrative deepening equivalent
**Scope:** Phase 2 all-candidate deepening. Existing `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and `ui/src/data/v2/cindy-holscher.ts` were used first; this pass adds official KPDC/SOS/Legislature verification, current campaign-site readback, current Bluesky readback, and issue/action mapping.

---

## Status Summary

Cindy Holscher is an active Kansas statewide campaign-finance registrant for Governor in the 2026 cycle and a sitting Kansas state senator. KPDC's 2026 statewide campaign-finance index lists "Holscher, Cindy" under gubernatorial candidates. Her KPDC Appointment of Treasurer form lists Office Sought as Governor, treasurer Lynn Rogers, and execution date June 12, 2025. Her campaign site says she is running for governor and, on May 14, 2026, announced Rep. KC Ohaebosim as her running mate for lieutenant governor.

Kansas SOS confirms the 2026 filing framework: Governor/Lt. Governor is an office to be elected in 2026; national, state, legislative, and judicial candidates file with the Secretary of State; and a candidate is not considered filed until the petition or declaration and fee are received. The primary filing deadline is noon Monday, June 1, 2026. The live SOS candidate-list page could not be read directly in this environment because it returned JavaScript/CloudFront blocking. Treat Holscher as campaign-finance-filed and campaign-active, with direct SOS candidate-list/ballot certification still unconfirmed in this pass.

Kansas Legislature lists Holscher as Senate District 8, Johnson County, Democrat, Senate Minority Whip, with House service from 2017-2020 and Senate service from 2021-present.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-sos-candidate-info-2026 | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Kansas filing framework; Governor/Lt. Governor office up in 2026; primary filing deadline June 1, 2026; candidate not filed until petition/declaration and fee received | official status |
| s-sos-candidate-list-blocked | primary | https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx | attempted 2026-05-19 | Official candidate-list endpoint returned JavaScript/CloudFront blocking in this environment | blocker |
| s-kpdc-statewide-2026 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm | accessed 2026-05-19 | KPDC statewide index lists Holscher under gubernatorial candidates and links AT/202601 forms | official status, finance |
| s-kpdc-treasurer | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01CH_AT.pdf | executed 2025-06-12; accessed 2026-05-19 | Candidate name, office sought Governor, treasurer Lynn Rogers, campaign contact | official status, finance |
| s-kpdc-202601 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CH_202601.pdf | filed 2026-01-13; accessed 2026-05-19 | 2025 year-end receipts, expenditures, cash-on-hand, in-kind, itemized schedule | finance |
| s-ksleg-member | primary | https://www.kslegislature.gov/b2025_26/legislators/sen_holscher_cindy_1/ | accessed 2026-05-19 | Senate District 8, Johnson County; Democrat; Senate Minority Whip; House 2017-2020; Senate 2021-present; committees | officeholder status, record |
| s-ksleg-vote-2025 | primary | https://www.kslegislature.gov/b2025_26/vote-record/sen_holscher_cindy_1/2025/ | accessed 2026-05-19 | Holscher's 2025 Senate vote history | action evidence |
| s-ksleg-hb2479-rollcall | primary | https://www.kslegislature.gov/b2025_26/vote/?apn=b2025_26%2Fyear2%2Fsenate%2Flegislative_days%2Fday039_20260310%2Fvote_records%2Fvote_138_HB2479.odt | accessed 2026-05-19 | March 10, 2026 Senate roll call showing Holscher yea on HB 2479 | public safety |
| s-ksleg-sb136 | primary | https://www.kslegislature.gov/bills/SB136/ | accessed 2026-05-19 | Holscher-sponsored bill limiting independent-expenditure political committee contributions and adding reporting/audit requirements | democracy, campaign finance |
| s-ksleg-sb142 | primary | https://www.kslegislature.gov/li/b2025_26/measures/sb142/ | accessed 2026-05-19 | Holscher-sponsored bill allowing teacher representatives on school boards | education |
| s-ksleg-sb143 | primary | https://www.kslegislature.gov/li/b2025_26/measures/sb143/ | accessed 2026-05-19 | Holscher-sponsored legislative term-limits bill | governance |
| s-ksleg-calendar-sb144 | primary | https://www.kslegislature.gov/documents/view/?apn=b2025_26%2Fyear1%2Fready_for_publication%2Fcalendar%2Fdaily_calendar_senate_20250203181126.odt | accessed 2026-05-19 | Calendar lists SB 144 by Senator Holscher on rooftop solar covenants | energy/property rights |
| s-campaign-home | primary | https://cindyforkansas.com/ | accessed 2026-05-19 | Candidate-controlled homepage and campaign identity | biography, status |
| s-campaign-about | primary | https://cindyforkansas.com/about/ | accessed 2026-05-19 | Biography, family, public schools, Brownback-era school-funding narrative, legislative service | biography, education, taxes |
| s-campaign-priorities | primary | https://cindyforkansas.com/priorities/ | accessed 2026-05-19 | Common Sense and Lower Costs agenda; Medicaid, school funding, labor, housing, marijuana, redistricting, term limits, corporate PAC limits | platform |
| s-campaign-news | primary | https://cindyforkansas.com/news/ | accessed 2026-05-19 | Current campaign press releases and clips through May 14, 2026 | campaign activity |
| s-campaign-running-mate | primary | https://cindyforkansas.com/holscher-announces-running-mate-kc-ohaebosim/ | published 2026-05-14; accessed 2026-05-19 | Running mate KC Ohaebosim; campaign emphasis on affordability, schools, healthcare, jobs | official campaign status |
| s-campaign-lower-costs | primary | https://cindyforkansas.com/sen-cindy-holscher-unveils-2026-common-sense-and-lower-costs-agenda-focused-on-working-families/ | published 2026-02-03; accessed 2026-05-19 | Lower-costs agenda and issue specifics | platform |
| s-bsky-profile | social | https://bsky.app/profile/cindyforkansas.bsky.social | API read 2026-05-19 | Public campaign profile, DID, latest posts and engagement | social evidence |
| s-bsky-running-mate | social | https://bsky.app/profile/cindyforkansas.bsky.social/post/3mltsfpocu22x | posted 2026-05-14; API read 2026-05-19 | Running-mate post; 11 likes, 1 repost, 0 replies, 0 quotes at readback | campaign status, education, healthcare |
| s-bsky-wildfires | social | https://bsky.app/profile/cindyforkansas.bsky.social/post/3mm6dk33nu22o | posted 2026-05-19; API read 2026-05-19 | Southwest Kansas wildfire post; 1 like, 0 reposts, 0 replies, 0 quotes at readback | public safety, rural/community |
| s-bsky-corecivic | social | https://bsky.app/profile/cindyforkansas.bsky.social/post/3mhhbtc2uqs2g | posted 2026-03-20; API read 2026-05-19 | CoreCivic money pledge/call; 4 likes, 1 repost, 1 reply, 0 quotes at readback | immigration, campaign finance |
| s-bsky-aca-2026 | social | https://bsky.app/profile/cindyforkansas.bsky.social/post/3mbx4kgkl6227 | posted 2026-01-08; API read 2026-05-19 | ACA subsidies and healthcare costs | healthcare |
| s-bsky-education-2025 | social | https://bsky.app/profile/cindyforkansas.bsky.social/post/3m4e2gws2hc2m | posted 2025-10-29; local harvest | Public education and vouchers | education |
| s-bsky-tariffs-2025 | social | https://bsky.app/profile/cindyforkansas.bsky.social/post/3lyig37yee22v | posted 2025-09-10; local harvest | Tariffs and Kansas farmers | agriculture |
| s-linktree | primary | https://linktr.ee/cindyforkansas | accessed in local harvest 2026-05-11 | Campaign social/presence links | online presence |
| s-kansas-reflector-launch | secondary | https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/ | published 2025-06-12; accessed 2026-05-19 | Launch coverage; schools and kitchen-table issues | campaign context |
| s-kansas-reflector-debate | secondary | https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/ | published 2026-03-08; accessed 2026-05-19 | Democratic debate coverage on affordability, healthcare, rural Kansas | healthcare, affordability |
| s-kansas-reflector-corecivic-forum | secondary | https://kansasreflector.com/2026/04/26/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum/ | published 2026-04-26; accessed 2026-05-19 | Forum coverage on CoreCivic, establishment tensions, reproductive healthcare access | immigration, abortion, campaign posture |
| s-kmuw-corecivic-forum | secondary | https://www.kmuw.org/politics/2026-04-29/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum | published 2026-04-29; accessed locally 2026-05-19 | KMUW republication of forum coverage | immigration, abortion |
| s-joco-vouchers | secondary | https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/ | published 2023-03-13; local harvest | Voucher/school-choice column | education |
| s-kwch-running-mate | secondary | https://www.kwch.com/2026/05/14/kansas-gubernatorial-candidate-picks-wichita-representative-running-mate/ | published 2026-05-14; accessed 2026-05-19 | Running mate coverage | current campaign |

---

## Election and Filing Records

### Kansas SOS filing framework

**Source:** s-sos-candidate-info-2026.

Kansas SOS says Democratic and Republican candidates run in the primary for nomination; national, state, legislative, and judicial candidates file with the Secretary of State; and a candidate is not considered filed until the petition or declaration and fee are received. The 2026 primary filing deadline is noon Monday, June 1, 2026. Governor/Lt. Governor is one of the offices to be elected in 2026.

**Blocked:** s-sos-candidate-list-blocked. The live candidate-list endpoint returned JavaScript verification in web fetch and CloudFront 403 in direct curl. No direct SOS candidate-table row was captured.

### KPDC campaign-finance registration

**Sources:** s-kpdc-statewide-2026, s-kpdc-treasurer, s-kpdc-202601.

KPDC statewide index says the 2026 statewide office page was last updated January 22, 2026 and lists Holscher under gubernatorial candidates. Appointment of Treasurer form lists:

- Candidate: Cindy Holscher.
- Office sought: Governor.
- Treasurer: Lynn Rogers.
- Date appointed: June 12, 2025.
- Executed: June 12, 2025.

The 202601 report covers January 1, 2025 through December 31, 2025 and was electronically filed January 13, 2026.

### Current officeholder record

**Source:** s-ksleg-member.

Kansas Legislature lists:

- Senate - District 8, Johnson County.
- Cindy Holscher.
- Senate Minority Whip.
- Democrat.
- House service 2017-2020.
- Senate service 2021-present.
- Ranking minority member, Government Efficiency and Public Health and Welfare.
- Member/on-call roles include Ways and Means, Utilities, Legislative Post Audit, Health Care Stabilization Fund Oversight, Joint Committee on Child Welfare System Oversight, Corrections and Public Safety Subcommittee, and related committees.

---

## Campaign Finance

### 2025 year-end KPDC summary

**Source:** s-kpdc-202601.

KPDC report summary:

- Cash on hand at beginning of period: $0.00.
- Total contributions and other receipts: $397,952.07.
- Cash available this period: $397,952.07.
- Total expenditures and other disbursements: $218,060.34.
- Cash on hand at close of period: $179,891.73.
- In-kind contributions: $2,949.82.
- Other transactions: $0.00.

### Contributor examples and cautions

**Source:** s-kpdc-202601.

Visible Schedule A examples include Thomas Adrian ($500), Quinta Avance ($50), Elizabeth Bishop ($100), Archie Blumhorst ($250 and later entries), Rick Blumhorst (multiple entries including $100 and $1,000 entries), Ross Boelling ($200 and later entries), and William Bradley ($500). The extracted first pages also show many individual contributors with occupations such as not employed, retired, technician, physician, healthcare, and union.

Visible PAC names from the extracted text include AT&T Kansas PAC, Kansas Bankers Association PAC State, and Kansas Anesthesiologist Assistant PAC. Exact PAC amounts should be checked against the original PDF display before publication because the PDF text extraction separates columns awkwardly.

### CoreCivic check

**Sources:** s-kpdc-202601, s-bsky-corecivic, s-campaign-news.

Holscher's campaign and social feed make CoreCivic a live issue. A local text search of the KPDC PDF for `CoreCivic` and `Core Civic` returned no literal matches. This supports only the narrow statement that the literal names were not found in the 2025 year-end PDF text extraction; it does not constitute a full affiliate, executive, lobbyist, or employee-donor audit.

---

## Biography and Public Record

### Candidate-controlled biography

**Sources:** s-campaign-about, s-campaign-running-mate.

Campaign biography says Holscher was raised on a farm, is the daughter of a veteran/construction worker/union member/farmer and an elementary-school custodian, became the first college graduate in her family, has lived in Kansas for over 25 years with husband Greg, and has three children who graduated from Kansas public schools.

The campaign says she entered the Legislature after joining 2016 education advocates who walked from Shawnee to Topeka over Brownback-era public-school funding. It says she was elected to the House later in 2016, co-founded the Women's Bipartisan Caucus, helped reverse the Brownback tax experiment, and won a Senate seat in 2020.

### Current ticket

**Sources:** s-campaign-running-mate, s-bsky-running-mate, s-kwch-running-mate.

On May 14, 2026, the campaign announced State Rep. KC Ohaebosim as Holscher's running mate for lieutenant governor. The campaign release frames the ticket around affordability, public schools, healthcare, good jobs, worker protections, and government responsiveness. Bluesky post the same day announced the pick and had 11 likes and 1 repost at May 19 API readback.

---

## Issue Area 1 - Public Education, School Funding, and Vouchers

### Candidate-stated position

**Sources:** s-campaign-about, s-campaign-priorities, s-campaign-lower-costs, s-bsky-education-2025, s-joco-vouchers.

Education is the strongest overlap between biography, legislative work, platform, and social posting. Campaign pages emphasize Holscher's 2016 school-funding walks, reversal of Brownback-era fiscal policy, fully funded general and special education, free school lunches, and opposition to vouchers. Her lower-costs agenda says special education remains underfunded and proposes using Medicaid-expansion savings plus medical-marijuana revenue for special education.

### Action evidence

- **2017-2020 / 2021-present legislative service:** Legislature confirms House and Senate service. Source: s-ksleg-member.
- **2025 bill sponsorship:** SB 142, sponsored by Holscher, would authorize districts to include a teacher representative as a nonvoting member on school boards. Source: s-ksleg-sb142.
- **2025 vote:** Holscher voted nay on SB 47, a school-board governance bill authorizing board-member agenda powers and public interaction changes. Source: s-ksleg-vote-2025.
- **Social evidence:** October 29, 2025 Bluesky post said she would fight to fund schools, stop vouchers, and put children first. Source: s-bsky-education-2025.

### Gap / symmetry note

The campaign and social feed are highly specific on public-school funding and vouchers. Direct floor speeches, amendment explanations, or committee testimony from Holscher on SB 142 were not captured in this pass.

---

## Issue Area 2 - Affordability, Taxes, Labor, and Housing

### Candidate-stated position

**Sources:** s-campaign-priorities, s-campaign-lower-costs, s-campaign-about, s-bsky-running-mate.

The campaign lower-costs agenda includes raising the minimum wage, allowing municipalities to set higher local minimum wages, paid sick time, repealing right-to-work, lowering residential property assessment rates from 11.5% to 9.0%, a property-tax task force, free school lunches, tax exemptions for essential products for women and babies, housing-security measures, and limiting late-rent penalties.

Campaign biography says Holscher's legislative efforts lowered costs by ending the food sales tax, removing the tax on Social Security, and implementing childcare tax credits.

### Action evidence

- **2025 vote:** Holscher voted yea on SB 69, extending rural opportunity zone benefits and adding down-payment assistance and childcare reimbursement options. Source: s-ksleg-vote-2025.
- **2025 vote:** Holscher voted yea on HB 2231, a package with head-of-household exemptions and property-tax homestead changes for seniors and disabled veterans. Source: s-ksleg-vote-2025.
- **2025 social:** Highest-like original Bluesky post in the local harvest discussed union workers, fair wages, and safe working conditions, with 16 likes and 4 reposts at May 11 capture. Source: social-harvest.md / s-bsky-profile.

### Gap / symmetry note

The campaign's lower-costs agenda is broad. This pass did not reconcile each plank with introduced bill numbers in the 2026 session, except where already tied to visible campaign news clips or official vote records.

---

## Issue Area 3 - Healthcare, Medicaid, Rural Hospitals, and Reproductive Care

### Candidate-stated position

**Sources:** s-campaign-priorities, s-campaign-lower-costs, s-bsky-aca-2026, s-kansas-reflector-debate, s-kansas-reflector-corecivic-forum, s-kmuw-corecivic-forum.

Campaign priorities call for Medicaid expansion and say expansion would lower costs, expand access, and shore up rural hospitals. The Feb. 3, 2026 release includes expanding Medicaid as a lower-costs plank. Social posts focus on ACA subsidies and healthcare affordability. Forum coverage reported Holscher supported access to reproductive healthcare.

### Action evidence

- **Officeholder role:** Legislature lists Holscher as ranking minority member on Public Health and Welfare. Source: s-ksleg-member.
- **2025 vote:** Holscher voted yea on SB 67, authorizing registered nurse anesthetists to prescribe/procure/administer drugs consistent with qualifications. Source: s-ksleg-vote-2025.
- **2025 vote:** Holscher voted nay on SB 29, removing local health officers' authority to prohibit public gatherings during contagious-disease control. Source: s-ksleg-vote-2025.
- **2025 abortion-adjacent vote:** Holscher voted nay on HB 2062, concerning unborn-child support orders and unborn/stillborn income-tax exemptions. Source: s-ksleg-vote-2025.
- **2026 social:** January 8, 2026 Bluesky post called for extending ACA subsidies and addressed Kansans facing rising healthcare costs. Source: s-bsky-aca-2026.

### Gap / symmetry note

Reproductive healthcare appears in forum/news coverage and legislative voting but was not a high-frequency original Bluesky topic in the local May 11 harvest.

---

## Issue Area 4 - Democracy, Elections, Redistricting, and Money in Politics

### Candidate-stated position

**Sources:** s-campaign-priorities, s-campaign-lower-costs, s-ksleg-sb136, s-ksleg-sb143.

Campaign priorities call for an independent redistricting panel, a ban on mid-decade redistricting, term limits, and limiting corporate PAC money. SB 136 and SB 143 provide official legislative-action anchors for campaign-finance and term-limit themes.

### Action evidence

- **2025 bill sponsorship:** SB 136, sponsored by Holscher, would limit contributions to political committees for independent expenditures and require accounting/reporting/auditing. Source: s-ksleg-sb136.
- **2025 bill sponsorship:** SB 143, sponsored by Holscher, would impose legislative term limits with additional terms conditioned on primary-election support. Source: s-ksleg-sb143.
- **2025 vote:** Holscher voted nay on SB 4, requiring advance voting ballots to be returned by 7:00 p.m. on election day, including final action/concur/override entries. Source: s-ksleg-vote-2025.
- **2025 vote:** Holscher voted nay on SB 5, prohibiting use of federal funds for elections/election-related activity unless approved by the Legislature. Source: s-ksleg-vote-2025.
- **2025 social:** Local harvest captured posts opposing mid-decade redistricting and Republican map changes. Source: social-harvest.md.

### Gap / symmetry note

The issue is well-supported by candidate pages and official bill sponsorship. The live SOS candidate-list block is itself a status-verification blocker, not an issue position.

---

## Issue Area 5 - Immigration, CoreCivic, and Private Detention

### Candidate-stated position

**Sources:** s-campaign-news, s-bsky-corecivic, s-kansas-reflector-corecivic-forum, s-kmuw-corecivic-forum.

Campaign news page includes March 2026 releases opposing the Leavenworth CoreCivic/ICE detention project. Bluesky post from March 20, 2026 says she would never take CoreCivic money and called on politicians who have taken it to return it. April 2026 forum coverage reported CoreCivic became a point of contrast between Holscher and Ethan Corson.

### Action evidence

- **2025 vote:** Holscher voted nay on HB 2020, requiring quarterly driver-license reports listing certain noncitizens issued driver's licenses. Source: s-ksleg-vote-2025.
- **2026 campaign release activity:** Campaign news page includes March 10 and March 11, 2026 releases about Leavenworth/ICE/CoreCivic. Source: s-campaign-news.
- **2026 social:** March 20 Bluesky CoreCivic money post had 4 likes, 1 repost, 1 reply, 0 quotes at May 19 API readback. Source: s-bsky-corecivic.

### Gap / symmetry note

This pass did not verify a comprehensive immigration platform beyond the CoreCivic/ICE detention controversy and related votes/social posts.

---

## Issue Area 6 - Marriage, Family, and LGBTQ Policy

### Candidate-stated position

No candidate-controlled marriage-specific plank was found in the reviewed campaign pages. Do not infer a marriage policy from party label or associations.

### Action evidence

- **2025 vote:** Holscher voted nay on SB 63, the bill restricting gender-transition care for minors and related public funding/provider discipline provisions. Source: s-ksleg-vote-2025.
- **2025 vote:** Holscher voted nay on SB 76, requiring school employees to use names/pronouns consistent with a student's biological sex and birth certificate and creating a cause of action. Source: s-ksleg-vote-2025.

### Gap / symmetry note

LGBTQ policy is supported by official vote evidence. Marriage policy is not separately confirmed.

---

## Issue Area 7 - Guns / Second Amendment and Public Safety

### Candidate-stated position

No candidate-controlled gun-policy plank was found in reviewed campaign pages, campaign news, or the measured Bluesky evidence.

### Action evidence

- **2025 vote:** Holscher voted yea on SB 71, increasing criminal penalties for buying sexual relations and requiring treatment/education programs. Source: s-ksleg-vote-2025.
- **2026 vote:** Holscher voted yea on HB 2479, a domestic-violence/stalking/protective-order and privacy-crime package. Source: s-ksleg-hb2479-rollcall.
- **2025 vote:** Holscher voted yea on SB 9 conference report language involving foreign principals, military-installation-adjacent real estate, drones, and economic-development benefits. Source: s-ksleg-vote-2025.

### Gap / symmetry note

Public safety voting exists, but a clean gun-policy issue card remains underdeveloped because no candidate-controlled statement was confirmed.

---

## Issue Area 8 - Agriculture, Rural Economy, Tariffs, and Water

### Candidate-stated position

**Sources:** s-campaign-about, s-bsky-tariffs-2025, s-kansas-reflector-debate.

The campaign biography emphasizes farm upbringing. Social posts and debate coverage connect Holscher's campaign to rural affordability, tariffs, crop prices, healthcare access, and rural hospitals.

### Action evidence

- **2025 social:** September 10, 2025 Bluesky post criticized tariff effects on Kansas farmers and crops. Source: s-bsky-tariffs-2025.
- **2025 vote:** Holscher voted yea on SB 36, increasing state matching/distribution support for conservation districts. Source: s-ksleg-vote-2025.
- **2025 vote:** Holscher voted yea on SB 69, rural opportunity zone benefits. Source: s-ksleg-vote-2025.

### Gap / symmetry note

The captured record did not show sustained water/Ogallala policy discussion. Do not inflate rural/agriculture messaging into a detailed water platform without more evidence.

---

## Issue Area 9 - Medical Marijuana / Drug Policy

### Candidate-stated position

**Sources:** s-campaign-priorities, s-campaign-lower-costs.

Campaign priorities support legalizing medical marijuana, describe it as a treatment-access and cost issue, propose using revenue to fund special education, and call for studying effects of recreational legalization in neighboring states.

### Action evidence

No direct vote or bill sponsorship specific to medical marijuana was captured in this pass. Use the campaign platform as the anchor unless later legislative evidence is added.

---

## Issue Area 10 - Religious Liberty / Faith and Community Signals

### Confirmed record

Public sources reviewed here do not identify a current church affiliation. Local social harvest found occasional religious-community references, including Jewish holiday greetings and criticism of Kansas Catholic Conference immigration stance, but no current congregation or religious-liberty plank.

### Gap / symmetry note

Do not infer faith belief, church membership, or religious-liberty policy from attendance at campaign/community events, holiday greetings, or issue commentary.

---

## Social / Online Evidence Update

### Bluesky profile and current posts

**Source:** s-bsky-profile.

Public API resolved `cindyforkansas.bsky.social` to DID `did:plc:ei6fueazsxvhhjvbr53hr63f`. Local harvest captured 596 total Bluesky feed items, including 431 original posts and 165 replies, from February 24, 2025 through March 20, 2026. Fresh May 19, 2026 API read found newer original posts:

- May 19, 2026: southwest Kansas wildfire post; 1 like, 0 reposts, 0 replies, 0 quotes.
- May 14, 2026: running-mate announcement for KC Ohaebosim; 11 likes, 1 repost, 0 replies, 0 quotes.
- March 20, 2026: CoreCivic money post; 4 likes, 1 repost, 1 reply, 0 quotes.

### Topic pattern from local harvest

**Source:** local `social-harvest.md`.

Manual local coding of 431 original Bluesky posts found top categories: campaign events/positioning (83 posts, 19%); public education (77, 18%); cost of living/agriculture/tariffs/food/housing/taxes (76, 18%); healthcare (50, 12%); democracy/redistricting/courts/voting/elections/privacy (35, 8%); federal/national politics/immigration/war/national figures (24, 6%); labor (4, 1%); civil rights/LGBTQ/immigration/religious-community/public-safety miscellany (6, 1%); personal/community/holiday/uncategorized (76, 18%).

### Platform limitations

Campaign-controlled Facebook, Instagram, TikTok, X, and Threads were linked/confirmed but did not yield reliable logged-out post corpuses. No candidate-controlled YouTube, LinkedIn campaign account, Truth Social, Gab, Gettr, Substack, or Reddit corpus was confirmed.

---

## Blockers / Could Not Confirm

- Direct readable SOS candidate-list row for Holscher.
- Final ballot certification, especially because the primary filing deadline is June 1, 2026.
- Full itemized donor categorization by industry/employer/PAC geography.
- Exact amounts for all PAC contributors named in the KPDC PDF text extraction.
- Comprehensive CoreCivic affiliate/executive/lobbyist/employee donor audit.
- Court/property/business-entity records.
- Full Facebook/Instagram/TikTok/X/Threads post-level corpus and engagement.
- Current church affiliation.
- Candidate-controlled gun-policy statement, marriage-specific policy statement, or detailed water/Ogallala policy statement.

---

## Source URLs Checked

- https://www.sos.ks.gov/elections/candidate-information.html
- https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx
- https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm
- https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01CH_AT.pdf
- https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CH_202601.pdf
- https://www.kslegislature.gov/b2025_26/legislators/sen_holscher_cindy_1/
- https://www.kslegislature.gov/b2025_26/vote-record/sen_holscher_cindy_1/2025/
- https://www.kslegislature.gov/b2025_26/vote/?apn=b2025_26%2Fyear2%2Fsenate%2Flegislative_days%2Fday039_20260310%2Fvote_records%2Fvote_138_HB2479.odt
- https://www.kslegislature.gov/bills/SB136/
- https://www.kslegislature.gov/li/b2025_26/measures/sb142/
- https://www.kslegislature.gov/li/b2025_26/measures/sb143/
- https://cindyforkansas.com/
- https://cindyforkansas.com/about/
- https://cindyforkansas.com/priorities/
- https://cindyforkansas.com/news/
- https://cindyforkansas.com/holscher-announces-running-mate-kc-ohaebosim/
- https://cindyforkansas.com/sen-cindy-holscher-unveils-2026-common-sense-and-lower-costs-agenda-focused-on-working-families/
- https://bsky.app/profile/cindyforkansas.bsky.social
- https://linktr.ee/cindyforkansas
- https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/
- https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/
- https://kansasreflector.com/2026/04/26/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum/
- https://www.kmuw.org/politics/2026-04-29/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum
- https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/
- https://www.kwch.com/2026/05/14/kansas-gubernatorial-candidate-picks-wichita-representative-running-mate/
