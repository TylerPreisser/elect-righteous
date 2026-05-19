# Raw Dump v2 - Roger Marshall

**Date:** 2026-05-19  
**Worker:** Worker 1  
**Phase / stage:** Phase 2 all-candidate deepening, deep-scraper equivalent  
**Candidate slug:** roger-marshall  
**Office:** U.S. Senator, Kansas - incumbent  
**Election:** U.S. Senate, Kansas, 2026

---

## Scope Note

This v2 dump is additive to the existing `profile.md`, `raw-intel.md`, `site-profile.md`, `social-harvest.md`, and `in-their-own-words.md` in this folder. It prioritizes primary-tier anchors, 2026 status verification, issue mapping, and source IDs suitable for the later site-profile-writer pass. It does not edit the UI data.

---

## 1. Official Status and Race Scope

### 1.1 Current office

**Finding:** Congress.gov lists Roger Marshall as a Republican senator from Kansas in the 117th-119th Congresses, 2021-present, with prior House service from Kansas District 1 in the 115th-116th Congresses.

- **URL:** https://www.congress.gov/member/roger-marshall/M001198
- **Tier:** Primary
- **Accessed:** 2026-05-19
- **Relevant lines / paraphrase:** Congress.gov member overview shows party Republican, Senate Kansas 117th-119th (2021-present), House Kansas District 1 115th-116th (2017-2021).
- **Issue mapping:** Biography / office status.

### 1.2 2026 candidacy and ballot-status caveat

**Finding:** FEC confirms federal candidacy for 2026. FEC lists seat "Kansas Senate," type "Incumbent," party "Republican Party," statement of candidacy filed 2026-04-14, and principal committee Kansans for Marshall. The FEC Form 2 image separately lists candidate ID `S0KS00315`, office Senate, state KS, party Republican, election year 2026, and principal campaign committee Kansans for Marshall.

- **URLs:** https://www.fec.gov/data/candidate/S0KS00315/?cycle=2026&election_full=true and https://docquery.fec.gov/pdf/220/202507229764193220/202507229764193220.pdf
- **Tier:** Primary
- **Accessed:** 2026-05-19
- **Issue mapping:** Official status / campaign finance.

**Finding:** Kansas SOS official election calendar lists the candidate filing deadline as 2026-06-01 at noon, the primary as 2026-08-04, and the general as 2026-11-03.

- **URL:** https://sos.ks.gov/elections/important-election-dates.html
- **Tier:** Primary
- **Accessed:** 2026-05-19
- **Issue mapping:** Race status.

**Finding:** Saline County's unofficial candidate PDF updated 2026-05-12 lists Roger Marshall (R) under United States Senate, 1 senator, 6-year term. Because the PDF is marked unofficial and county-level, it should corroborate but not replace the SOS final candidate list.

- **URL:** https://www.salinecountyks.gov/media/Election%20Office/election/PR2026%20Candidates.pdf
- **Tier:** Primary/local government, unofficial list
- **Accessed:** 2026-05-19
- **Issue mapping:** Race status.

**Blocker / caveat:** The Kansas SOS live candidate-list endpoint returned a blank three-line page in the browser tool and a CloudFront 403 through `curl`. Reverify final SOS ballot status after the 2026-06-01 filing deadline.

---

## 2. Biography, Committee Assignments, Faith / Community

### 2.1 Senate official biography and current committees

**Finding:** Marshall's Senate biography says he is a physician, father, grandfather, and U.S. senator for Kansas; graduated from Butler County Community College, Kansas State University, and the University of Kansas School of Medicine; practiced medicine in Great Bend for more than 25 years; served seven years in the Army Reserve; and delivered more than 5,000 babies as an OB-GYN.

- **URL:** https://www.marshall.senate.gov/about/
- **Tier:** Primary
- **Date on page:** Not separately dated; accessed 2026-05-19
- **Issue mapping:** Biography; life/abortion; healthcare.

**Finding:** Current Senate biography lists Senate committee service as Agriculture, Nutrition, and Forestry; Finance; Health, Education, Labor, and Pensions; and Budget. It lists chairmanships of Agriculture Subcommittee on Conservation, Forestry, Natural Resources, and Biotechnology and HELP Subcommittee on Primary Health and Retirement Security.

- **URL:** https://www.marshall.senate.gov/about/
- **Tier:** Primary
- **Issue mapping:** Agriculture; healthcare; budget.

**Finding:** The same biography says Marshall and Laina taught Sunday school for over 25 years, and that he served as elder, deacon, and board chairman of his church. It also lists GOP Doctors Caucus, Pro-Life Caucus, Western Caucus, Friends of Australia Caucus, Congressional Rare Disease Caucus, and Senate Hunger Caucus.

- **URL:** https://www.marshall.senate.gov/about/
- **Tier:** Primary
- **Issue mapping:** Faith/community metadata; life; healthcare; agriculture/food.

### 2.2 Source conflict - campaign committee assignments

**Finding:** The campaign homepage says Marshall serves on Agriculture, Energy & Natural Resources, HELP, and Small Business. This conflicts with the current Senate biography's Agriculture, Finance, HELP, and Budget list. Use the Senate biography for current office data because it is official office content and appears updated for the current Congress.

- **URL:** https://kansansformarshall.com/
- **Tier:** Primary/campaign
- **Accessed:** 2026-05-19
- **Issue mapping:** Blocker / source conflict, not an issue card.

---

## 3. Campaign Finance

### 3.1 Committee totals

**Finding:** FEC committee summary for Kansans for Marshall (`C00576173`) for 2025-2026, coverage 2025-01-01 to 2026-03-31:

- Total receipts: $3,331,963.38
- Total contributions: $2,756,321.57
- Total individual contributions: $1,461,071.57
- Party committee contributions: $62,000.00
- Other committee contributions: $1,233,250.00
- Transfers from other authorized committees: $519,607.86
- Total disbursements: $255,723.24
- Ending cash on hand: $4,781,258.78
- Debts/loans owed by committee: $0.00

**Source:** https://www.fec.gov/data/committee/C00576173/?tab=summary&cycle=2026  
**Tier:** Primary  
**Accessed:** 2026-05-19  
**Issue mapping:** Campaign finance.

### 3.2 PAC / committee receipts examples

**Finding:** FEC API itemized receipts for line 11C, 2025-2026, show examples of other committee contributions, including:

- Mississippi Farm Bureau Federation Furthering Agriculture for Rural Mississippians Fund PAC: $10,000 on 2025-05-23, plus $5,000 redesignation entry.
- Nutrien Ag Solutions Employee Citizenship Fund PAC: $10,000 on 2025-01-29.
- Senate Conservatives Fund: $5,000 on 2025-05-23.
- Dairy Farmers of America Inc. PAC: $5,000 on 2025-06-30.
- Seaboard Corporation PAC: $5,000 on 2026-02-02.
- Microsoft Corporation PAC: $5,000 on 2026-03-24.
- United Parcel Service Inc. PAC: $5,000 on 2026-03-31.
- American Dental Association PAC, American College of Radiology Association PAC, and other health-sector PACs at $5,000-level examples.

**Source:** FEC schedule A API, `committee_id=C00576173`, `two_year_transaction_period=2026`, `line_number=F3-11C`, accessed 2026-05-19.  
**Tier:** Primary  
**Issue mapping:** Campaign finance; agriculture; healthcare; business/transportation.

**Caveat:** This is an example list from top/large itemized committee receipts, not a comprehensive donor ranking. Use FEC totals for comprehensive summary.

---

## 4. Issue Records

### 4.1 Life / abortion

**Candidate-controlled stated position:** The campaign life page says Marshall's position is that "abortion is wrong at any stage" and ties the statement to his OB-GYN background and lifetime membership in the American Association of Pro-Life OB/GYNs.

- **URL:** https://kansansformarshall.com/life
- **Tier:** Primary/campaign
- **Accessed:** 2026-05-19
- **Issue mapping:** Life / abortion.

**Action evidence:** On 2025-01-17, Marshall and Sen. James Lankford introduced the Born-Alive Abortion Survivors Protection Act, according to Marshall's Senate office. The release says the bill would add care expectations, hospital-transfer requirements, mandatory reporting, private rights of action, and criminal penalties for health-care professionals who violate the law.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senators-marshall-risch-and-senate-gop-colleagues-introduce-bill-to-protect-babies-born-after-botched-abortions-from-infanticide/
- **Tier:** Primary
- **Date:** 2025-01-17
- **Issue mapping:** Life / abortion.

**Action evidence:** On 2025-01-25, Marshall and Sen. Kevin Cramer reintroduced the Unborn Child Support Act, according to Marshall's Senate office.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senators-marshall-cramer-introduce-bill-allowing-child-support-for-pregnant-mothers/
- **Tier:** Primary
- **Date:** 2025-01-25
- **Issue mapping:** Life / family policy.

### 4.2 Agriculture, food, and rural economy

**Action evidence:** Congress.gov lists S.222, the Whole Milk for Healthy Kids Act of 2025, as introduced by Marshall on 2025-01-23 and becoming Public Law 119-69 on 2026-01-14.

- **URL:** https://www.congress.gov/bill/119th-congress/senate-bill/222
- **Tier:** Primary
- **Issue mapping:** Agriculture / school nutrition / dairy.

**Action evidence:** White House statement says President Trump signed S.222, the Whole Milk for Healthy Kids Act of 2025, into law on 2026-01-14.

- **URL:** https://www.whitehouse.gov/briefings-statements/2026/01/congressional-bill-s-222-signed-into-law/
- **Tier:** Primary
- **Issue mapping:** Agriculture / school nutrition.

**Action evidence:** On 2026-04-28, Marshall introduced the Lowering Input Costs for American Farmers Act to eliminate tariffs and countervailing duties on phosphate fertilizer imports from Morocco. The release says the bill is supported by the National Corn Growers Association, American Soybean Association, American Farm Bureau Federation, National Cotton Council, USA Rice, Sorghum Growers, and the National Association of Wheat Growers.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-drops-bill-to-cut-fertilizer-costs-for-american-farmers/
- **Tier:** Primary
- **Issue mapping:** Agriculture / input costs.

**Action evidence:** On 2026-05-18, Marshall told Mundo in the Morning that year-round E15 would consume another 2 billion bushels of corn and framed the issue as "big oil versus the farmer."

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-we-have-solutions-to-bring-down-costs-now-we-have-to-finish-the-job/
- **Tier:** Primary
- **Issue mapping:** Agriculture / fuel / cost of living.

### 4.3 Healthcare and mental health

**Stated / action evidence:** On 2026-04-27, Marshall and Sen. Sheldon Whitehouse introduced the Medicare Advantage Improvement Act. Marshall's office described it as bipartisan and said it would address prior authorization, retroactive denials, automated denials, network adequacy, and reporting.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senators-marshall-whitehouse-introduce-bill-to-fix-medicare-advantage-for-seniors/
- **Tier:** Primary
- **Issue mapping:** Healthcare / Medicare Advantage.

**Action evidence:** On 2026-05-08, Marshall's office described a Military Family Mental Health Roundtable in Junction City and listed appropriations/support for FRSAN, 988, and CCBHCs. It also identified farmer/rancher and military-family mental health as priorities.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-recognizes-national-mental-health-awareness-month/
- **Tier:** Primary
- **Issue mapping:** Mental health / rural healthcare / military families.

**Stated position:** On 2026-05-18, Marshall said he was focused on cost of living and listed price transparency, PBM reform, and prior authorization as health-cost bills he wanted to finish.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-we-have-solutions-to-bring-down-costs-now-we-have-to-finish-the-job/
- **Tier:** Primary
- **Issue mapping:** Healthcare costs.

**Social signal:** The local social harvest captured a 2025-11-10 X post saying "Up to 40% of Obamacare enrollees never file a claim." Exact engagement totals were unavailable.

- **URL:** https://x.com/RogerMarshallMD/status/1987679877470810388
- **Tier:** Social
- **Captured:** 2026-05-11 in `social-harvest.md`
- **Issue mapping:** Healthcare / ACA critique.

### 4.4 Immigration and border security

**Action evidence:** On 2023-09-15, Marshall's office said he cosponsored the Secure the Border Act of 2023. The release described provisions including resuming border-wall construction, tightening asylum standards, increasing Border Patrol agents, criminalizing visa overstays, restricting DHS parole, stopping NGOs from using tax dollars to transport/lodge people, requiring E-Verify, and restricting CBP One.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-supports-secure-the-border-act/
- **Tier:** Primary
- **Issue mapping:** Immigration / border.

**Stated position:** On 2026-05-18, Marshall told Fox Business that he expected Congress to fund ICE and Border Patrol after a Senate parliamentarian issue.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-manufacturing-is-booming-in-kansas/
- **Tier:** Primary
- **Issue mapping:** Immigration / DHS funding.

**Social signal:** The local social harvest captured multiple border/DHS posts, including 2024-08-09 and 2024-10-15 X posts surfaced through public embeds. Direct engagement totals were unavailable.

- **Source:** `memory/candidates/roger-marshall/social-harvest.md`
- **Tier:** Local harvest / social source mapping
- **Issue mapping:** Immigration / border.

### 4.5 Guns / Second Amendment

**Action evidence:** On 2022-06-24, Marshall's office said he voted against the federal gun reform bill and released a statement saying he would not support what he called a "gun grabbing scheme." The release specifically objected to red flag laws.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-votes-against-gun-grabbing-scheme/
- **Tier:** Primary
- **Issue mapping:** Guns / Second Amendment.

**Action evidence:** On 2024-07-12, Marshall joined Sen. Kevin Cramer in introducing the Firearms Interstate Commerce Reform Act to change federal rules on interstate firearms transactions.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senators-introduce-legislation-to-allow-interstate-firearm-sales/
- **Tier:** Primary
- **Issue mapping:** Guns / interstate commerce.

**Additional leads:** Marshall's Senate office also lists No REGISTRY Rights Act, SHUSH Act, and Modern Firearms Safety Act releases. These can be added if the final issue card needs more gun-policy breadth.

### 4.6 Federal spending, cost of living, and credit-card competition

**Action evidence:** On 2025-06-17, Marshall introduced the Budget Reform Act of 2025, a federal budget-process bill. His office described reforms including CBO transparency, zero-based budgeting excluding Social Security/Medicare/Medicaid, biennial budgeting, stronger enforcement, revised baselines, and enforced deadlines.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-introduces-comprehensive-bill-to-reform-americas-dysfunctional-budget-process/
- **Tier:** Primary
- **Issue mapping:** Federal spending / budget process.

**Action evidence:** On 2026-01-13, Marshall and Sen. Dick Durbin reintroduced the Credit Card Competition Act. Marshall's office said the bill would require large banks to enable at least two unaffiliated card networks and framed it as a swipe-fee/cost-of-living measure.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/marshall-durbin-reintroduce-credit-card-competition-act-backed-by-president-trump/
- **Tier:** Primary
- **Issue mapping:** Cost of living / small business / finance.

**Stated position:** On 2026-05-18, Marshall told Mundo in the Morning that his focus was cost of living, including gas, groceries, housing, child care, health care, swipe fees, and year-round E15.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-we-have-solutions-to-bring-down-costs-now-we-have-to-finish-the-job/
- **Tier:** Primary
- **Issue mapping:** Cost of living / economy.

### 4.7 Foreign policy and defense

**Action evidence:** Senate roll-call Vote 118-2-00154 shows Marshall voted nay on the motion to concur in the House amendment to the Senate amendment to H.R. 815 on 2024-04-23. The motion passed 79-18.

- **URL:** https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00154.htm
- **Tier:** Primary
- **Date:** 2024-04-23
- **Issue mapping:** Foreign aid / defense / Ukraine, Israel, Taiwan supplemental.

**Stated position:** Marshall's 2024-04-24 statement said he would vote against the foreign aid bill and objected to additional Ukraine aid.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-releases-statement-on-foreign-aid-bill/
- **Tier:** Primary
- **Issue mapping:** Foreign aid / federal spending.

**Stated position:** On 2026-05-18, Marshall told Fox Business he was a "hard sell" on an additional Pentagon supplemental and said the national debt was America's biggest challenge in that context.

- **URL:** https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-manufacturing-is-booming-in-kansas/
- **Tier:** Primary
- **Issue mapping:** Defense spending / budget.

### 4.8 Election certification and public trust

**Action evidence:** Senate roll-call Vote 117-1-00001 shows Marshall voted yea on sustaining the Arizona electoral-vote objection on 2021-01-06. The objection was not sustained, 6 yeas to 93 nays.

- **URL:** https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00001.htm
- **Tier:** Primary
- **Issue mapping:** Election certification / public trust.

**Action evidence:** Senate roll-call Vote 117-1-00002 shows Marshall voted yea on sustaining the Pennsylvania electoral-vote objection on 2021-01-07. The objection was not sustained, 7 yeas to 92 nays.

- **URL:** https://www.senate.gov/legislative/LIS/roll_call_votes/vote1171/vote_117_1_00002.htm
- **Tier:** Primary
- **Issue mapping:** Election certification / public trust.

### 4.9 Constituent access and town-hall record

**Action / social evidence:** Kansas News Service coverage republished by The Lawrence Times reported that after the Oakley town-hall incident Marshall shared a Trump Truth Social post about paid troublemakers and wrote "Can confirm" on X. The same article reported Marshall later said on a Kansas City talk show, "I don't have firsthand evidence."

- **URL:** https://lawrencekstimes.com/2025/03/07/marshall-paid-ops-concerned-kansans/
- **Tier:** Secondary
- **Date:** 2025-03-07
- **Issue mapping:** Constituent access / public trust / social signal.

**Context:** The same article reported that several attendees said they were Kansas residents concerned about federal funding cuts, layoffs, agriculture, tariffs, transgender policy, and veterans issues. Present those as attendee claims reported by Kansas News Service, not as adjudicated facts about every attendee.

---

## 5. Social / Online Dump

### 5.1 Controlled and official accounts

- Campaign site: https://kansansformarshall.com/
- Senate site: https://www.marshall.senate.gov/
- X: https://x.com/RogerMarshallMD
- Facebook: https://www.facebook.com/RogerMarshallMD/
- Instagram: https://www.instagram.com/senrogermarshall/
- Senate site links to YouTube and Rumble.

**Tier:** Primary/social depending on account.  
**Mapping:** Cross-issue; only use specific posts where issue-mapped.

### 5.2 Harvested sample from local `social-harvest.md`

**Finding:** The existing harvest captured a 28-item public sample from 2024-07-28 through 2026-05-08: 15 X posts, 4 video items, 7 official-site/newsletter items, 2 local-news quote items, and about 5 repost/share signals. Topic distribution:

- Healthcare / mental health: 7 of 28
- Agriculture / food / rural producers: 6 of 28
- Budget / tax / economic messages naming Trump: 6 of 28
- Border / immigration / DHS: 4 of 28
- Foreign policy / national security: 3 of 28
- Public safety / technology oversight: 2 of 28

**Source:** `memory/candidates/roger-marshall/social-harvest.md`  
**Tier:** Local harvested social evidence; underlying sources listed there.  
**Mapping:** Use only issue-scoped signals.

### 5.3 Platform access gaps

Direct X, Facebook, Instagram, and LinkedIn surfaces were walled or blocked during the prior capture. Exact likes, shares, replies, views, and comment totals should be listed as unavailable unless captured by a specific public embed or news article. No current candidate-controlled Truth Social, Gab, Reddit, TikTok, Substack, or accessible Gettr activity was confirmed.

---

## 6. Could Not Confirm / Blockers

- **Kansas SOS final candidate-list capture:** Live SOS candidate-list page could not be captured here. Reverify final state ballot status after 2026-06-01.
- **Campaign-site stale committee list:** Campaign site and Senate official bio conflict on current committee assignments. Use Senate official bio for current office; mention conflict if needed.
- **Direct social metrics:** X/Facebook/Instagram direct metrics were not available. Do not claim likes/comments/shares without a visible source.
- **Truth Social / Gettr:** Trump Truth Social posts about Marshall are visible through news and Marshall's own releases, but no candidate-controlled current Truth Social account was confirmed. Gettr account was historically announced but current activity was inaccessible.
- **No legal/court refresh performed in this v2 pass:** Existing `raw-intel.md` contains historical legal/financial-disclosure leads; this pass prioritized current office/race and issue evidence. If later narrative uses historical legal items, reverify directly from public court/ethics records first.
