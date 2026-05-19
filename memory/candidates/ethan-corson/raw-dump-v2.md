# Raw Dump v2 - Ethan Corson

**Candidate slug:** ethan-corson
**Office:** Kansas Governor, Democratic candidate
**Date written:** 2026-05-19
**Agent:** Worker 19, deep-scraper/narrative deepening equivalent
**Scope:** Phase 2 all-candidate deepening. Existing `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and `ui/src/data/v2/ethan-corson.ts` were used first; this pass adds official KPDC/SOS/Legislature verification, current campaign-site readback, donor/funding notes, and issue/action mapping.

---

## Status Summary

Ethan Corson is an active Kansas statewide campaign-finance registrant for Governor in the 2026 cycle and a sitting Kansas state senator. KPDC's 2026 statewide campaign-finance index lists "Corson, Ethan" under gubernatorial candidates and links his Appointment of Treasurer form plus a 202601 receipts-and-expenditures report. The 202601 report lists Candidate Name Ethan Corson and Office Sought Governor.

Kansas SOS confirms the 2026 filing framework: Governor/Lt. Governor is an office to be elected in 2026; national, state, legislative, and judicial candidates file with the Secretary of State; a candidate is not considered filed until the petition or declaration and fee are received; and the primary filing deadline is noon Monday, June 1, 2026. This pass did not directly capture a readable SOS candidate-list row or final ballot certification.

Kansas Legislature lists Corson as Senate District 7, Johnson County, Democrat, Senate Caucus Chair, occupation attorney, and Senate service from 2021-present.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-sos-candidate-info-2026 | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Kansas filing framework; Governor/Lt. Governor office up in 2026; filing deadline June 1, 2026; candidate not filed until petition/declaration and fee received | official status |
| s-kpdc-statewide-2026 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm | accessed 2026-05-19 | KPDC statewide index lists Corson under gubernatorial candidates; page last updated Jan. 22, 2026; links AT and 202601 filings | official status, finance |
| s-kpdc-treasurer | primary | https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01EC_AT.pdf | accessed 2026-05-19 | Appointment of Treasurer PDF link from KPDC index; text extraction was not readable in this environment | official status, finance |
| s-kpdc-202601 | primary | https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01EC_202601.pdf | filed 2026-01-09; accessed 2026-05-19 | Candidate name, Office Sought Governor, 2025 receipts/expenditures/cash/in-kind/other transactions, itemized contributions, treasurer signature Tom Hawk | finance |
| s-ksleg-member | primary | https://www.kslegislature.gov/b2025_26/legislators/sen_corson_ethan_1/ | accessed 2026-05-19 | Senate District 7, Johnson County; Democrat; Senate Caucus Chair; attorney; Senate service 2021-present; committees | officeholder status, record |
| s-ksleg-vote-2025 | primary | https://www.kslegislature.gov/li/b2025_26/members/documents/sen_corson_ethan_1_vote_record_2025.html | accessed 2026-05-19 | Corson's official 2025 Senate vote history | action evidence |
| s-ksleg-hb2062 | primary | https://www.kslegislature.gov/li/b2025_26/measures/hb2062/ | accessed 2026-05-19 | HB 2062 bill history and short title; child support orders for unborn children and unborn/stillborn tax exemptions; veto override | abortion / family |
| s-ksleg-hb2062-final | primary | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20250312153109_776028/ | accessed 2026-05-19 | Senate final action on HB 2062, March 12, 2025; Corson listed among nay votes | abortion / family |
| s-ksleg-hb2062-override | primary | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20250410143859_534870/ | accessed 2026-05-19 | Senate veto override on HB 2062, April 10, 2025; Corson listed among nay votes | abortion / family |
| s-ksleg-hb2729 | primary | https://www.kslegislature.gov/li/b2025_26/measures/hb2729/ | accessed 2026-05-19 | HB 2729 bill page; Woman's-Right-to-Know Act forms/notices; override history | abortion |
| s-ksleg-hb2729-final | primary | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260319131142_107485/ | accessed 2026-05-19 | Senate final action on HB 2729, March 19, 2026; Corson listed among nay votes | abortion |
| s-ksleg-hb2729-override | primary | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260409170632_675107/ | accessed 2026-05-19 | Senate veto override on HB 2729, April 9, 2026; Corson listed among nay votes | abortion |
| s-ksleg-sb63 | primary | https://www.kslegislature.gov/li/b2025_26/measures/sb63/ | accessed 2026-05-19 | Help Not Harm Act; gender-transition care restrictions for minors; veto override | LGBTQ / healthcare |
| s-ksleg-sb244 | primary | https://www.kslegislature.gov/b2025_26/bills/SB244/ | accessed 2026-05-19 | Biological sex / public buildings / driver's licenses / birth certificates bill; veto override | LGBTQ / privacy |
| s-ksleg-sb244-override | primary | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260217132754_470460/print/ | accessed 2026-05-19 | Senate override of SB 244, Feb. 17, 2026; Corson listed among nay votes | LGBTQ / privacy |
| s-ksleg-hb2311 | primary | https://www.kslegislature.gov/li/b2025_26/measures/hb2311/ | accessed 2026-05-19 | Foster-care/custody placement policy concerning sincerely held religious or moral beliefs related to sexual orientation or gender identity | religious liberty / LGBTQ |
| s-ksleg-sb361 | primary | https://www.kslegislature.gov/b2025_26/bills/SB361/ | accessed 2026-05-19 | Federal scholarship-granting organization tax credit participation; veto overridden | education / school choice |
| s-ksleg-sb361-ccr | primary | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260327220310_770542/ | accessed 2026-05-19 | Senate SB 361 conference committee report adopted; Corson listed among nay votes | education / school choice |
| s-ksleg-hb2479 | primary | https://www.kslegislature.gov/li/b2025_26/measures/hb2479/ | accessed 2026-05-19 | Electronic monitoring with victim notification for certain domestic violence/stalking/protective-order defendants; signed by governor | public safety |
| s-ksleg-hb2479-final | primary | https://www.kslegislature.gov/b2025_26/vote/?apn=b2025_26%2Fyear2%2Fsenate%2Flegislative_days%2Fday039_20260310%2Fvote_records%2Fvote_138_HB2479.odt | accessed 2026-05-19 | Senate final action amended on HB 2479, March 10, 2026; 40 yea, Corson yea | public safety |
| s-ksleg-hb2479-ccr | primary | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260326202956_013688/ | accessed 2026-05-19 | Senate adopted HB 2479 conference committee report, March 26, 2026; Corson listed among yea votes | public safety |
| s-ksleg-sb206 | primary | https://www.kslegislature.gov/b2025_26/bills/SB206/ | accessed 2026-05-19 | Bill requested by Sen. Ethan Corson concerning offender registration for certain controlled-substance distribution convictions causing great bodily harm or death | public safety / drugs |
| s-ksleg-sb477 | primary | https://www.kslegislature.gov/li/b2025_26/measures/sb477/ | accessed 2026-05-19 | Corson-sponsored first responder scholarship program bill; died | public safety / education |
| s-ksleg-sb215 | primary | https://www.kslegislature.gov/li/b2025_26/measures/sb215/ | accessed 2026-05-19 | Corson co-sponsored property-tax/homestead refund bill | taxes / cost of living |
| s-ksleg-sb216 | primary | https://www.kslegislature.gov/b2025_26/bills/sb216/ | accessed 2026-05-19 | Corson co-sponsored Kansas paid sick time act; died | labor / affordability |
| s-ksleg-sb313 | primary | https://kslegislature.gov/b2025_26/bills/sb313/ | accessed 2026-05-19 | Corson-sponsored bill prohibiting legislators from trading stocks/securities during legislative sessions; died | ethics |
| s-campaign-home | primary | https://ethanforkansas.com/ | accessed 2026-05-19 | Candidate-controlled biography, issues, embedded X feed, social links, paid-for line | status, biography, issues, social |
| s-campaign-facebook | social | https://www.facebook.com/ethanforkansas | local harvest 2026-05-11 | Public campaign page metadata; 2,027 likes and 220 talking about this at local capture | social |
| s-campaign-instagram | social | https://www.instagram.com/ethanforkansas/ | local harvest 2026-05-11 | Public campaign account metadata; 757 followers, 13 following, 256 posts at local capture | social |
| s-campaign-x | social | https://x.com/ethancorson | campaign-site embed accessed 2026-05-19 | Campaign-linked X handle and current embedded excerpts; direct logged-out X not fully readable | social / issue signals |
| s-ks-reflector-launch | secondary | https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/ | published 2025-07-22; accessed 2026-05-19 | Launch coverage and quote about avoiding partisan cable-news battles | campaign context |
| s-ks-reflector-podcast | secondary | https://kansasreflector.com/2025/09/02/kansas-senator-makes-common-sense-common-ground-pitch-for-democratic-nomination-for-governor/ | published 2025-09-02; accessed 2026-05-19 | "Common sense, common ground" framing | campaign context |
| s-ks-reflector-finance | secondary | https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/ | published 2026-01-09; accessed 2026-05-19 | Secondary finance roundup; small-dollar description | finance context |
| s-ks-reflector-debate | secondary | https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/ | published 2026-03-08; accessed 2026-05-19 | Democratic debate coverage on affordability, healthcare, rural Kansas | healthcare / rural |
| s-kc-star-corecivic | secondary | https://www.kansascity.com/news/politics-government/article315103864.html | published 2026-03-19; accessed via search snippet 2026-05-19 | Reported CoreCivic contribution issue and campaign response | finance / immigration / private detention |

---

## Election and Filing Records

### Kansas SOS filing framework

**Source:** s-sos-candidate-info-2026.

Kansas SOS says Democratic and Republican candidates run in the primary for nomination. Candidates for national, state, legislative, and judicial offices must file with the Secretary of State. A candidate is not considered filed until the petition or declaration and fee are received. The 2026 primary filing deadline is 12:00 p.m. Monday, June 1, 2026. Governor/Lt. Governor is one of the offices to be elected in 2026.

**Caveat:** This pass did not directly capture a readable SOS candidate-list row. Use "campaign-finance-filed and campaign-active" until SOS candidate/ballot certification is checked after the filing deadline.

### KPDC campaign-finance registration

**Sources:** s-kpdc-statewide-2026, s-kpdc-treasurer, s-kpdc-202601.

KPDC statewide index says the 2026 statewide office page was last updated January 22, 2026 and lists "Corson, Ethan" under gubernatorial candidates. The page links his AT and 202601 report. The AT PDF was not text-readable in this environment, but the index, 202601 report, and campaign paid-for line confirm an active campaign-finance trail.

The 202601 report covers January 1, 2025 through December 31, 2025 and was electronically filed January 9, 2026 at 9:36:24 AM. It lists Tom Hawk as candidate or treasurer signature.

### Current officeholder record

**Source:** s-ksleg-member.

Kansas Legislature lists:

- Senate - District 7, Johnson County.
- Ethan Corson.
- Senate Caucus Chair.
- Democrat.
- Occupation: Attorney.
- Senate service: 2021-present.
- Committee roles: ranking minority member on Assessment and Taxation, Judiciary, and Transportation; member/on-call roles on taxation, corrections/juvenile justice oversight, and fiduciary financial institutions oversight.

---

## Campaign Finance

### 2025 year-end KPDC summary

**Source:** s-kpdc-202601.

KPDC report summary:

- Cash on hand at beginning of period: $0.00.
- Total contributions and other receipts: $902,641.13.
- Cash available this period: $902,641.13.
- Total expenditures and other disbursements: $375,665.32.
- Cash on hand at close of period: $526,975.81.
- In-kind contributions: $6,797.37.
- Other transactions: $0.00.

**Source conflict:** Existing local/site-profile material says "$43,019.00 other transactions." The official KPDC 202601 report line 7 says "$0.00." Use the official KPDC figure unless another amended filing is found.

### Contributor examples and cautions

**Source:** s-kpdc-202601.

Visible Schedule A examples include Tony Atterbury ($4,000), Amy Bartak ($250), Mary Becker ($200), Matt Birch ($500), Louis Bornman ($100), William Bradley ($500), Jim Breneman ($25), Randal Carlson ($250 entries), and The Next50 ($4,000 primary and $4,000 general entries). The extracted schedule contains many more contributors and should not be treated as normalized.

KPDC reports include a statutory warning against copying contributor names for commercial purposes. The above is a limited research sample for public-interest voter information, not a donor list for commercial use.

### CoreCivic check

**Sources:** s-kc-star-corecivic; official Senate and statewide PDFs searched in this pass.

Kansas City Star reported March 19, 2026 that Corson faced questions over a $1,000 CoreCivic contribution to his 2024 Senate re-election campaign, and that his gubernatorial campaign said the same amount was donated to a Johnson County food bank. The article also reported Corson said he had not accepted and would not accept CoreCivic contributions in the gubernatorial race.

This pass searched the accessible text of the 2025 gubernatorial KPDC report, 2024 Senate 202401 report, and 2024 Senate 202410 report for `CoreCivic`, `CORECIVIC`, and `Core Civic`; no clean match was found in extracted text. That does not disprove the news report because the official PDFs have OCR/text-extraction defects and the contribution could appear in another report or malformed text. Treat the CoreCivic item as secondary-source reporting pending manual image-level filing verification.

---

## Biography and Public Record

### Candidate-controlled biography

**Source:** s-campaign-home.

The campaign page says Corson is a lifelong Kansan, grew up with values of hard work, giving back, and keeping one's word, and is running for Governor to create opportunities for the next generation of Kansans. It says he currently serves in the State Senate representing the community where he grew up and is known for a common-sense, bipartisan approach. It describes work with both parties on schools, affordability, lower taxes, and business recruitment.

The campaign biography says Corson worked at the U.S. Department of Commerce and as Chief of Staff at the International Trade Administration, helping manage a team of more than 2,200 employees across 75 countries. The campaign connects that experience to recruiting businesses to Kansas and helping Kansas farmers ship products around the world.

The campaign page says he attended Shawnee Mission schools, Garden City Community College on a baseball scholarship, and Washington University in St. Louis, where he continued baseball and earned his law degree. It says he lives in Fairway with wife Jenna and sons Isaac and Aiden.

### Public religious identity

**Sources:** existing local research; Kansas City Jewish Chronicle coverage in local source list.

Local research identifies Corson as publicly Jewish. This pass did not confirm a current synagogue affiliation. The existing UI data includes a church object pointing to Immaculate Heart of Mary Parish; that appears inconsistent with the verified public record for Corson and should not be carried forward without direct correction.

---

## Issue Area 1 - Public Education and School Funding

### Candidate-stated position

**Source:** s-campaign-home.

Education is one of Corson's strongest candidate-controlled themes. The campaign page repeats "Better Schools. Lower Taxes." It says Corson would work with both parties to make Kansas schools among the best in America. It says he is known for strong support for Kansas public schools, and the biography says his own path was made possible by Shawnee Mission teachers and coaches.

### Action evidence

- **2025 vote:** Corson voted yea on SB 44 expanding Kansas Promise Scholarship eligibility and increasing the maximum annual appropriation limit. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted yea on SB 45, requiring the state board of education to calculate graduation rates for accreditation using an alternative calculation. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted nay on SB 47, a school-board governance bill authorizing school board members to add agenda items, engage in public discussion, and access school property. Source: s-ksleg-vote-2025.
- **2026 vote:** Corson voted nay on SB 361, electing Kansas into a federal tax credit for contributions to scholarship-granting organizations. Source: s-ksleg-sb361-ccr.
- **Social evidence:** Current campaign-site X embed showed posts about Shawnee Mission North's State of the School and Shawnee Mission South, his old high school. Source: s-campaign-home.

### Gap / symmetry note

The campaign is specific on public-school support but does not present a full education white paper in the reviewed site readback.

---

## Issue Area 2 - Taxes, Cost of Living, Labor, and Business Recruitment

### Candidate-stated position

**Source:** s-campaign-home.

The campaign says Corson worked with Republican and Democratic colleagues to eliminate the food sales tax, cut property taxes, remove taxes on Social Security, and deliver targeted tax relief for seniors, veterans, and middle-class Kansans. It also says Kansas should be affordable, with lower taxes and thriving new businesses.

### Action evidence

- **Bill sponsorship:** Corson co-sponsored SB 215, a taxation bill concerning homestead property-tax refund changes. Source: s-ksleg-sb215.
- **Bill sponsorship:** Corson co-sponsored SB 216, establishing the Kansas paid sick time act. Source: s-ksleg-sb216.
- **2025 vote:** Corson voted yea on HB 2125, a property-tax notice/revenue-neutral-rate bill with school-property-tax levy provisions. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted nay on HCR 5011, a proposed constitutional amendment to limit valuation increases for real property and mobile-home-classified personal property. Source: s-ksleg-vote-2025.
- **Campaign biography:** Corson connects Commerce/International Trade Administration experience to business recruitment and farmer export markets. Source: s-campaign-home.

### Gap / symmetry note

The campaign claims work on food sales tax, Social Security tax, and property taxes; this pass did not map each claim to a specific bill number and roll call across prior sessions.

---

## Issue Area 3 - Abortion and Reproductive Policy

### Candidate-stated position

**Source:** s-campaign-home.

The current campaign-site embedded X feed included the excerpt: "We've defended reproductive rights before and we'll do it again in August and in November. As governor, I..." No standalone detailed abortion platform page was found.

### Action evidence

- **2025 vote:** Corson voted nay on HB 2062, concerning child support orders for unborn children from conception and unborn/stillborn income-tax exemptions. Source: s-ksleg-hb2062-final.
- **2025 vote:** Corson voted nay on the HB 2062 veto override. Source: s-ksleg-hb2062-override.
- **2026 vote:** Corson voted nay on HB 2729, a Woman's-Right-to-Know Act forms/notices bill. Source: s-ksleg-hb2729-final.
- **2026 vote:** Corson voted nay on the HB 2729 veto override. Source: s-ksleg-hb2729-override.

### Gap / symmetry note

The campaign-site social excerpt is current but truncated by the embed. Do not quote beyond the visible excerpt unless the full X post is captured from the platform or an archive.

---

## Issue Area 4 - Marriage, Family, LGBTQ Policy, and Religious-Liberty-Adjacent Foster-Care Policy

### Candidate-stated position

No candidate-controlled marriage-specific platform was found in the reviewed campaign site, current campaign embed, or local harvest. The evidence below is action-based and should not be expanded into a broader belief statement.

### Action evidence

- **2025 vote:** Corson voted nay on SB 63, the Help Not Harm Act, restricting gender-transition care for minors and related state funding. Source: s-ksleg-vote-2025 / s-ksleg-sb63.
- **2025 vote:** Corson voted nay on SB 76, requiring school and postsecondary employees to use names and pronouns consistent with a student's biological sex and birth certificate. Source: s-ksleg-vote-2025.
- **2026 vote:** Corson voted nay on SB 244 veto override, a biological-sex/public-building/private-space/driver's-license/birth-certificate bill. Source: s-ksleg-sb244-override.
- **2025 vote:** Corson voted nay on HB 2311 and its veto override, concerning foster-care/custody placement policies and sincerely held religious or moral beliefs related to sexual orientation or gender identity. Source: s-ksleg-vote-2025 / s-ksleg-hb2311.

### Gap / symmetry note

No current candidate-controlled statement was found on marriage policy or religious liberty as a standalone issue. The foster-care vote is relevant to religious-liberty-adjacent public policy, but should not be used to infer personal religious views.

---

## Issue Area 5 - Healthcare, Mental Health, and Rural Access

### Candidate-stated position

**Sources:** s-campaign-home, s-ks-reflector-debate.

The campaign page and indexed snippets emphasize mental health, school services, and access to care. Kansas Reflector debate coverage quoted Corson saying Kansans should be able to get care without going broke or driving hours to see a doctor.

### Action evidence

- **2025 vote:** Corson voted yea on SB 67, authorizing registered nurse anesthetists to prescribe, procure, and administer drugs consistent with qualifications. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted yea on SB 82 and HB 2249, concerning physical-environment waivers for certain rural emergency hospitals to provide skilled nursing facility care. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted nay on SB 29, removing local health officers' authority to prohibit public gatherings during infectious-disease control. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted nay on HB 2284, concerning negotiated procurement policies for managed care organizations providing state Medicaid services. Source: s-ksleg-vote-2025.

### Gap / symmetry note

This pass did not find a detailed Medicaid-expansion plank on the current campaign page. Healthcare evidence combines campaign/debate statements with official votes.

---

## Issue Area 6 - Public Safety, First Responders, Domestic Violence, and Drugs

### Candidate-stated position

**Source:** s-campaign-home.

The campaign page says Corson is known for tireless support for Kansas first responders.

### Action evidence

- **Bill sponsorship:** Corson sponsored SB 477, establishing the Kansas first responder scholarship program for certain first responders and dependents. Source: s-ksleg-sb477.
- **2026 vote:** Corson voted yea on HB 2479 final action, authorizing electronic monitoring with victim notification for certain offenders charged with domestic violence, domestic battery, stalking, or violation of a protective order. Source: s-ksleg-hb2479-final.
- **2026 vote:** Corson voted yea on the HB 2479 conference committee report; the bill was later signed by the governor. Source: s-ksleg-hb2479-ccr / s-ksleg-hb2479.
- **Requested bill:** SB 206 was requested by Sen. Ethan Corson and would require certain persons convicted of distribution of a controlled substance causing great bodily harm or death to register under the Kansas offender registration act for 15 years. Source: s-ksleg-sb206.

### Gap / symmetry note

No candidate-controlled gun-policy plank was found. Public safety evidence is stronger for first responders, domestic violence, and controlled-substance harms than for firearms.

---

## Issue Area 7 - Elections, Courts, and Ethics

### Candidate-stated position

**Sources:** s-ks-reflector-launch, s-ks-reflector-podcast.

Corson's public campaign framing emphasizes bipartisan, moderate governance and avoiding cable-news partisan battles. Candidate-controlled issue specifics on election administration or court selection were not found on the campaign page.

### Action evidence

- **2025 vote:** Corson voted nay on SB 4, requiring advance voting ballots be returned by 7:00 p.m. on Election Day, including final action, concurrence, and veto override. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted nay on SB 5, restricting use of federal funds for elections unless approved by the Legislature, including final action, concurrence, and veto override. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted nay on SB 6, prohibiting ranked-choice voting methods. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted nay on SCR 1611, proposing direct election of Kansas Supreme Court justices and abolishing the Supreme Court Nominating Commission. Source: s-ksleg-vote-2025.
- **Bill sponsorship:** Corson sponsored SB 313, prohibiting members of the Legislature from engaging in stock/securities transactions during legislative sessions. Source: s-ksleg-sb313.

### Gap / symmetry note

Do not convert these votes into broad claims about "democracy" or "courts" beyond the measure text and voting record.

---

## Issue Area 8 - Agriculture, Rural Kansas, and Trade

### Candidate-stated position

**Sources:** s-campaign-home, s-ks-reflector-debate, local social harvest.

The campaign biography says Corson's Commerce/International Trade Administration experience gave him perspective on helping farmers ship products around the world. Local harvest and current campaign embed show western Kansas / Garden City biography and rural affordability themes. Debate coverage connected Democratic candidates to rural Kansas, healthcare, and affordability.

### Action evidence

- **2025 vote:** Corson voted yea on SB 36, increasing the cap and matching basis for conservation district state funds. Source: s-ksleg-vote-2025.
- **2025 vote:** Corson voted yea on HB 2255 conference committee report, which included CREP acreage cap and reporting changes in addition to weights/measures language. Source: s-ksleg-vote-2025.
- **Campaign biography:** The campaign says Corson's ITA work informs business recruitment and farmer export markets. Source: s-campaign-home.

### Gap / symmetry note

No standalone agriculture platform page was found. Current evidence is biographical/campaign framing plus selected votes.

---

## Social and Online Relevance

Local social harvest captured a candidate-controlled public footprint centered on campaign travel, affordability, schools, business/economic development, healthcare/mental health, and bipartisan governing style. Current campaign-site readback on 2026-05-19 added more recent embedded X excerpts than the May 11 local harvest, including reproductive-rights language, family/basketball, Tallgrass Creek outreach, Shawnee Mission school posts, Garden City/baseball commentary, Harvey County Democrats, and Johnson County Democrats.

Engagement remains limited by logged-out platform access. Use platform-level metrics from the local harvest only with capture dates: Facebook 2,027 likes and 220 talking about this; Instagram 757 followers, 13 following, and 256 posts; LinkedIn 2K followers and 500+ connections. Do not publish post-level engagement totals unless directly captured.

---

## Blockers / Could Not Confirm

- Direct SOS candidate-list row or ballot certification.
- Running mate for lieutenant governor.
- Current synagogue affiliation.
- Candidate-controlled gun policy, marijuana policy, detailed immigration policy, or religious-liberty platform.
- Full post-level social corpus or engagement counts for X, Facebook, Instagram, and LinkedIn.
- Full donor normalization, PAC/sector totals, employer totals, and geographic totals.
- CoreCivic official filing entry without manual image-level review of the relevant Senate campaign-finance report.
- Exact bill mapping for every campaign claim about food sales tax, Social Security tax, and property-tax cuts across prior sessions.
- The existing UI data's `church` object appears inconsistent with this pass and should be corrected downstream only after orchestrator review.
