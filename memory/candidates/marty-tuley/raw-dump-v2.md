# Raw Dump v2 - Marty Tuley

**Candidate slug:** marty-tuley
**Office:** Kansas Governor, Democratic candidate
**Date written:** 2026-05-19
**Agent:** Worker 26, deep-scraper/narrative deepening equivalent
**Scope:** Phase 2 all-candidate deepening. Existing `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and `ui/src/data/v2/marty-tuley.ts` were used first; this pass adds current KPDC/SOS/campaign-site/news verification and issue/action mapping.

---

## Status Summary

Marty Tuley is an active Kansas statewide campaign-finance registrant for Governor in the 2026 cycle. KPDC's 2026 statewide campaign-finance index lists "Tuley, Marty" under gubernatorial candidates and links his Appointment of Treasurer form and 202601 receipts-and-expenditures report. His campaign site is active and identifies the campaign as "Tuley for Governor 2026."

Kansas SOS confirms the 2026 filing framework: Governor/Lt. Governor is an office to be elected in 2026; national, state, legislative, and judicial candidates file with the Secretary of State; and a candidate is not considered filed until the petition or declaration and fee are received. The primary filing deadline is noon Monday, June 1, 2026. The live SOS candidate-list endpoint could not be read directly in this environment because it returned CloudFront 403. Treat Tuley as campaign-finance-filed and campaign-active, with direct SOS candidate-list/ballot certification still unconfirmed in this pass.

No elected-office voting record was found in the reviewed local memory or current verification pass. Tuley's public record for v2 issue cards is therefore mostly candidate-stated platform material, campaign finance filings, and news/forum coverage rather than legislative votes or official-meeting minutes.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-sos-candidate-info-2026 | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Kansas filing framework; Governor/Lt. Governor office up in 2026; primary filing deadline June 1, 2026; candidate not filed until petition/declaration and fee received | official status |
| s-sos-election-dates-2026 | primary | https://www.sos.ks.gov/elections/important-election-dates.html | accessed 2026-05-19 | June 1, 2026 filing deadline; August 4 primary; November 3 general; certification dates | official status |
| s-sos-candidate-list-blocked | primary | https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx | attempted 2026-05-19 | Official candidate-list endpoint returned CloudFront 403 in this environment | blocker |
| s-kpdc-statewide-2026 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm | accessed 2026-05-19 | KPDC statewide index lists Tuley under gubernatorial candidates and links AT/202601 forms; page last updated January 22, 2026 | official status, finance |
| s-kpdc-treasurer | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01MT_AT.pdf | executed 2025-05-30; accessed 2026-05-19 | Candidate name, office sought Governor, Douglas County, treasurer Marcie Wainright, appointment/execution date | official status, finance |
| s-kpdc-202601 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01MT_202601.pdf | filed 2026-01-12; accessed 2026-05-19 | 2025 year-end receipts, expenditures, cash-on-hand, itemized contributors, itemized disbursements | finance |
| s-campaign-home | primary | https://www.tuley4gov2026.com/ | accessed 2026-05-19 | Active campaign homepage, campaign identity, broad platform preview, donation/support language | biography, status, platform |
| s-campaign-meet | primary | https://www.tuley4gov2026.com/meet-marty | accessed 2026-05-19 | Current-nav biography page: practical leadership, listening, economy, education, safety, accountability, family/community | biography, governance |
| s-campaign-platform | primary | https://www.tuley4gov2026.com/platform | accessed 2026-05-19 | Current-nav platform page: education, health, economy, infrastructure/energy, accountable leadership | platform |
| s-campaign-about-old | primary | https://www.tuley4gov2026.com/about-marty | accessed 2026-05-19 | Still-live older biography page; fourth-generation Kansan; farmers/teachers/working family; public schools/local economy/freedoms | biography |
| s-campaign-todo-old | primary | https://www.tuley4gov2026.com/to-do-list | accessed 2026-05-19 | Still-live older platform page; detailed bullet list including transgender-rights/sports language and electronic voting options | platform, website-version caveat |
| s-campaign-public-schools-old | primary | https://www.tuley4gov2026.com/public-schools | accessed 2026-05-19 | Still-live older public-schools page: teacher pay, meals, tuition, support staff, no vouchers/private-school tax breaks | education |
| s-ein-launch | primary | https://www.einpresswire.com/article/824455910/invest-in-kansas-tuley-s-platform-to-rebuild-schools-health-and-economy | published 2025-06-30; accessed 2026-05-19 | Campaign-distributed release with platform bullets, media contact, and social links | platform, social |
| s-wibw-launch | secondary | https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/ | published/updated 2025-07-28; accessed 2026-05-19 | Launch coverage; Tuley described as Lawrence Democrat/educator/parent/lifelong Kansan; priorities and quotes | campaign context, education, health, athletics |
| s-kcur-guide | secondary | https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates | published 2025-07-24; accessed 2026-05-19 | Kansas News Service/KCUR candidate guide; Tuley described as author/personal trainer; platform summary | campaign context |
| s-kansas-reflector-debate | secondary | https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/ | published 2026-03-08; accessed 2026-05-19 | Democratic governor forum coverage; affordability, healthcare, rural Kansas, outsider positioning | debate/forum context |
| s-social-harvest-local | social | memory/candidates/marty-tuley/social-harvest.md | captured 2026-05-11; reviewed 2026-05-19 | Local logged-out harvest of campaign website, Facebook, TikTok, Instagram, YouTube, X, and platform absences | social/online presence |
| s-facebook | social | https://www.facebook.com/martytuley/ | captured locally 2026-05-11; reviewed 2026-05-19 | Campaign-linked Facebook page shell; post-level content blocked/gated | social presence |
| s-tiktok | social | https://www.tiktok.com/@tuley_for_gov | captured locally 2026-05-11; reviewed 2026-05-19 | Campaign-linked TikTok account metadata: followers/following/likes/video count; post-level text unavailable | social presence |
| s-instagram | social | https://www.instagram.com/tuley_for_gov | captured locally 2026-05-11; reviewed 2026-05-19 | Campaign-linked Instagram username; post-level content unavailable | social presence |
| s-youtube | social | https://www.youtube.com/@MartyTuley | captured locally 2026-05-11; reviewed 2026-05-19 | Campaign-linked YouTube shell/channel lead; post-level video metadata unavailable | social presence |
| s-x-adjacent | social | https://x.com/TuleyMarty | captured locally 2026-05-11; reviewed 2026-05-19 | Identity-adjacent X profile not linked from campaign site; local capture showed 0 statuses | social absence |

---

## Election and Filing Records

### Kansas SOS filing framework

**Sources:** s-sos-candidate-info-2026, s-sos-election-dates-2026.

Kansas SOS says Democratic and Republican candidates run in the primary for nomination; national, state, legislative, and judicial candidates file with the Secretary of State; and a candidate is not considered filed until the petition or declaration and fee are received. Governor/Lt. Governor is listed among offices to be elected or retained in 2026. The 2026 primary filing deadline is noon Monday, June 1, 2026. The 2026 primary election is August 4, 2026, and the general election is November 3, 2026.

**Blocked:** s-sos-candidate-list-blocked. Direct `curl` readback of `https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx` returned HTTP 403 from CloudFront. No direct SOS candidate-table row was captured.

### KPDC campaign-finance registration

**Sources:** s-kpdc-statewide-2026, s-kpdc-treasurer, s-kpdc-202601.

KPDC statewide index says the 2026 statewide office page was last updated January 22, 2026 and lists Tuley under gubernatorial candidates. Appointment of Treasurer form lists:

- Candidate: Marty Tuley.
- Address/city/county: Lawrence, Douglas County.
- Office sought: Governor.
- Treasurer: Marcie Wainright.
- Treasurer date appointed: May 30, 2025.
- Executed: May 30, 2025 at 4:49:50 PM.

The 202601 report covers January 1, 2025 through December 31, 2025 and was electronically filed January 12, 2026 at 2:25:45 PM.

---

## Campaign Finance

### 2025 year-end KPDC summary

**Source:** s-kpdc-202601.

KPDC report summary:

- Cash on hand at beginning of period: $0.00.
- Total contributions and other receipts: $2,600.00.
- Cash available this period: $2,600.00.
- Total expenditures and other disbursements: $193.89.
- Cash on hand at close of period: $2,406.11.
- In-kind contributions: $0.00.
- Other transactions: $0.00.

### Itemized contributors

**Source:** s-kpdc-202601.

All receipts in the 2025 year-end report were itemized. Schedule A lists:

| Date | Contributor | City/state in report | Occupation if listed | Amount |
|---|---|---|---|---:|
| 2025-12-12 | Todd Decuir | Lenexa, KS | construction | $500.00 |
| 2025-10-16 | George Grieb | Lawrence, KS | electrician owner | $500.00 |
| 2025-09-23 | Ernesto Hodison | Lawrence, KS | not listed | $100.00 |
| 2025-07-24 | William England | Overland Park, KS | retired | $50.00 |
| 2025-07-23 | Paul Popiel | Lawrence, KS | university dean | $100.00 |
| 2025-07-22 | Susan Millstein | Lawrence, KS | retired | $500.00 |
| 2025-06-05 | Tami Pool | Meriden, KS | sales | $250.00 |
| 2025-05-31 | Keith Ely | Lawrence, KS | dealership management | $250.00 |
| 2025-05-31 | Deanna Dibble | Lawrence, KS | realtor | $250.00 |
| 2025-05-30 | Kirk Fischer | Niwot, CO | not listed | $100.00 |

Schedule A reports $2,600.00 total itemized receipts, $0 unitemized contributions, $0 sale of political materials, $0 contributions when contributor not known, and $2,600.00 total receipts this period.

### Itemized expenditures

**Source:** s-kpdc-202601.

Schedule C lists $193.89 total itemized expenditures, $0 unitemized expenditures, and $193.89 total expenditures/disbursements. Items include:

- $16.12 to 24/7 Travel, Lawrence, for meeting/travel fuel on December 18, 2025.
- $16.35 to Dillons Gas Station, Lawrence, for meeting/travel gas on December 18, 2025.
- $83.02 to Copy Co, Lawrence, for printing handout materials on December 6, 2025.
- Multiple Wix processing fees ranging from $1.75 to $14.80.

No loans, PAC contributions, in-kind contributions, or large institutional expenditures were visible in the 2025 year-end report.

---

## Biography and Public Record

### Candidate-controlled biography

**Sources:** s-campaign-home, s-campaign-meet, s-campaign-about-old.

The campaign home page identifies the campaign as "Tuley for Governor 2026" and frames the campaign around "Building a Kansas Worth Investing In." The current `meet-marty` page says Tuley is running for Governor to bring practical leadership and real solutions, and lists economy/local business, education/opportunity, safe/supported communities, accountability, and transparency as reasons for running.

The older still-live `about-marty` page supplies the fuller biographical language: Tuley describes himself as a fourth-generation Kansan with family roots in farming, public-school teaching, and working people. It says he was not born into politics and built a life, family, and career in the real world. It states support for strong public schools, local economic growth, and personal freedoms.

### Public-office record

**Sources:** existing local memory, s-kansas-reflector-debate, s-wibw-launch, s-kcur-guide.

No elected-office voting record, committee record, or government-meeting minutes record was found for Tuley. Existing memory and current news/campaign verification consistently frame him as an outsider/non-legislative candidate rather than an incumbent officeholder. KCUR/Kansas News Service describes him as an author and personal trainer in Lawrence; WIBW describes him as an educator, parent, and lifelong Kansan.

---

## Issue Area 1 - Public Education, School Funding, and School Choice

### Candidate-stated position

**Sources:** s-campaign-platform, s-campaign-public-schools-old, s-campaign-todo-old, s-ein-launch, s-wibw-launch.

Education is the densest candidate-controlled issue area. The current platform page says strong public schools are the foundation of healthy communities and a strong economy, and calls for teacher pay in the top 25 nationally, improved benefits, two healthy meals each day for every public-school student, fully funded junior-college and technical-school tuition, reduced administrative bloat, and more investment in teachers/support staff. It says public dollars should stay in public schools and opposes vouchers, privatization, and tax breaks that pull resources away from classrooms.

The still-live public-schools page repeats the teacher-pay, meal, tuition, support-staff, cell-phone, and no-voucher/private-school-tax-break themes. The still-live to-do-list page adds specific bullets on cell-phone limits, evaluating school size, and no athletic competition between public and private schools.

### Action evidence

- **2025-06-30:** Campaign-distributed EIN Presswire release publicly listed education priorities including top-25 teacher pay, two healthy meals per public-school student, school cell-phone limits, legal cannabis revenue for schools, and opposition to private schools receiving taxpayer funds or competing in public-school athletics. Sources: s-ein-launch.
- **2025-07-28:** WIBW launch coverage summarized Tuley's priorities as including public-school teacher pay, school meals, legal cannabis revenue for schools, opposition to taxpayer funds for private schools, and school-athletics positions. Sources: s-wibw-launch.

### Gap / caution

No governing action record was found. The issue card should not imply he has voted on, sponsored, or administered education policy.

---

## Issue Area 2 - Health, Fitness, and Prevention

### Candidate-stated position

**Sources:** s-campaign-platform, s-campaign-todo-old, s-ein-launch, s-kcur-guide.

The current platform page says Kansas should shift from treating illness to building a culture of health, fitness, and personal responsibility. It calls for daily physical education in public schools, farm-to-table nutrition, prevention-focused obesity policy, support for personal freedom in healthcare decisions, and lowering long-term costs through healthier lifestyles and stronger community habits.

The older to-do-list page adds a specific proposal to eliminate padded football for children under age 13 and uses the phrase "My joy, my decisions" under personal healthcare freedom. KCUR/Kansas News Service summarized Tuley's platform around daily PE, banning padded football for children under 13, and cannabis revenue for health and education.

### Action evidence

- **2025-06-30:** Campaign-distributed release listed obesity prevention, farm-to-table food systems, daily activity, and health-program revenue as platform themes. Sources: s-ein-launch.
- **2025-07-24:** KCUR/Kansas News Service guide summarized Tuley's campaign as emphasizing daily physical education and banning padded football under age 13. Sources: s-kcur-guide.

### Gap / caution

No government action record or administrative implementation record was found for these health proposals.

---

## Issue Area 3 - Marijuana, Tax Policy, and Local Economic Development

### Candidate-stated position

**Sources:** s-campaign-home, s-campaign-platform, s-campaign-todo-old, s-ein-launch, s-wibw-launch.

Tuley's campaign says Kansas should build a state businesses want to join by investing in education, workforce development, and local growth rather than corporate giveaways. The current platform page calls for legalizing marijuana and reinvesting tax revenue into education and health programs, reforming the corporate tax code, eliminating excessive incentives for out-of-state corporations, prioritizing Kansas-based businesses through balanced taxation/supportive regulation, and focusing on long-term economic growth rather than short-term political tax cuts.

### Action evidence

- **2025-06-30:** Campaign-distributed release included legal cannabis revenue for schools, Kansas-grown business prioritization, corporate-tax incentive reform, and opposition to tax cuts as a political tool. Sources: s-ein-launch.
- **2025-07-28:** WIBW launch coverage included legal cannabis revenue for schools and Tuley's quote that Kansas can lead in education, agriculture, energy, and small business. Sources: s-wibw-launch.

### Gap / caution

No official tax-policy vote, agency record, or enacted-policy role was found for Tuley.

---

## Issue Area 4 - School Athletics and LGBTQ Policy

### Candidate-stated position

**Sources:** s-campaign-todo-old, s-campaign-platform, s-ein-launch, s-wibw-launch.

The older still-live to-do-list page states: "Support transgender rights but oppose transgender girls competing in sports with biological girls." The campaign-distributed release states opposition to transgender girls competing in girls' sports and frames the position around fairness and safety. WIBW reported the same sports position in launch coverage.

The newer current-nav platform page uses less specific wording, listing "Ensure fair and consistent standards in school athletics" under education key priorities. Both pages are active, so downstream language should identify which source is being used and should not infer a broader LGBTQ platform beyond the stated school-athletics issue.

### Action evidence

- **2025-06-30:** Campaign-distributed release included opposition to transgender girls competing in girls' sports. Sources: s-ein-launch.
- **2025-07-28:** WIBW launch coverage included opposition to transgender girls competing in girls' sports among Tuley's stated priorities. Sources: s-wibw-launch.

### Gap / caution

There is no legislative vote or administrative action record. There is a wording difference between active campaign pages: the older page is explicit; the newer platform page is broader.

---

## Issue Area 5 - Infrastructure, Energy, and Sustainability

### Candidate-stated position

**Sources:** s-campaign-home, s-campaign-platform, s-campaign-todo-old, s-ein-launch.

The campaign home page lists "Invest in Kansas" as a platform preview and connects it to infrastructure, clean energy, modern systems, and local economic growth. The current platform page calls for infrastructure projects using Kansas labor, wind and solar energy development, reduced plastic use, sustainable practices, and paperless state government operations.

### Action evidence

- **2025-06-30:** Campaign-distributed release listed support for wind and solar energy, reduced plastic use statewide, and paperless state government. Sources: s-ein-launch.

### Gap / caution

No public-office voting record or implementation record was found for infrastructure, energy, or sustainability policy.

---

## Issue Area 6 - Voting Access, Executive Power, and Government Accountability

### Candidate-stated position

**Sources:** s-campaign-meet, s-campaign-platform, s-campaign-todo-old, s-ein-launch.

The current meet page says Tuley is running on practical leadership, listening, accountability, and transparency. The current platform page says government should be transparent, responsible, and focused on the people it serves; it calls for limiting executive orders and pardons as political tools, making voting more accessible while maintaining secure/reliable systems, and focusing on long-term investment rather than austerity or short-term cuts.

The older to-do-list page uses more specific language on voting access: "Make voting easy and accessible, including electronic options."

### Action evidence

- **2025-06-30:** Campaign-distributed release listed making voting easy and accessible, including electronic options. Sources: s-ein-launch.
- **2026-05-19:** Current campaign platform page remained live with governance priorities on executive orders/pardons, accessible voting, immigration language, and long-term investment. Sources: s-campaign-platform.

### Gap / caution

No officeholder action record was found. "Electronic options" appears in the older still-live platform page and launch release; the newer current-nav platform page does not use that exact phrase.

---

## Issue Area 7 - Immigration / Border

### Candidate-stated position

**Sources:** s-campaign-platform, s-campaign-todo-old, s-ein-launch.

The current platform page says Tuley supports practical, balanced immigration policies that are both secure and humane. The older to-do-list page says he supports "a secure but accessible border for hardworking individuals and families." The campaign-distributed release used "Secure but accessible borders."

### Action evidence

- **2025-06-30:** Campaign-distributed release included "Secure but accessible borders" as a platform priority. Sources: s-ein-launch.
- **2026-05-19:** Current campaign platform page remained live with secure/humane immigration wording. Sources: s-campaign-platform.

### Gap / caution

No detailed implementation plan, enforcement position, federal/state division-of-authority statement, or public-office action record was confirmed.

---

## Social / Online Evidence

**Sources:** s-social-harvest-local, s-facebook, s-tiktok, s-instagram, s-youtube, s-x-adjacent, s-ein-launch.

Local social harvest captured the campaign's public footprint as centered on the campaign website and four campaign-linked social accounts: Facebook, TikTok, Instagram, and YouTube. The campaign-distributed EIN Presswire release also linked Instagram, YouTube, and TikTok.

TikTok was the strongest measurable public account-level signal in the local logged-out harvest: `@tuley_for_gov` showed 1,936 followers, 132 following, 10.4K likes, and 185 videos as of May 11, 2026. Its visible bio/signature said, "Hi, my name is Martin Tuley, and I'm fighting for Kansas!" The local capture did not expose reliable video captions, dates, or per-video engagement.

Facebook, Instagram, and YouTube confirmed presence but did not expose reliable post-level text or engagement in the logged-out harvest. A YouTube shell resolved but did not expose reliable video metadata. An X profile, `@TuleyMarty`, was not linked from the campaign site and showed 0 statuses in local capture, so it should not be treated as a campaign channel without further confirmation.

No candidate-controlled account was confirmed on LinkedIn, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, or Reddit. Platform absence should be reported as availability of evidence, not as a character or policy signal.

---

## Coverage / Public Appearances

**Sources:** s-wibw-launch, s-kcur-guide, s-kansas-reflector-debate.

WIBW reported on July 28, 2025 that Tuley, a Democrat from Lawrence, announced his candidacy for Kansas governor. The article described him as an educator, parent, and lifelong Kansan and summarized priorities including teacher pay, school meals, legal cannabis revenue for schools, opposition to public money for private schools, obesity policy, and transgender girls' sports.

KCUR/Kansas News Service's 2026 governor guide described Tuley as an author and personal trainer in Lawrence and summarized his platform around recreational cannabis, education and health revenue, corporate incentives, daily physical education, and banning padded football for children under 13.

Kansas Reflector's March 8, 2026 Democratic governor forum coverage reported Tuley appearing with Cindy Holscher and Ethan Corson at the Kansas Democratic Party convention. Existing local harvest notes that Tuley acknowledged being a "third wheel" against two legislative candidates and presented himself as a different kind of Democrat with a nontraditional background. The same coverage discussed affordability, healthcare, and rural Kansas.

---

## Faith / Church / Religious Liberty

No public church membership, denomination, or current worship-community affiliation was verified in the reviewed local memory, campaign pages, KPDC records, or current web verification. No candidate-controlled religious-liberty policy plank was confirmed.

---

## Issue Areas With No Confirmed Candidate-Controlled Statement

No detailed candidate-controlled statements were confirmed on:

- Abortion / reproductive policy.
- Gun policy / Second Amendment.
- Religious liberty.
- Medicaid expansion.
- Rural hospitals beyond forum/news references.
- Water policy / Ogallala Aquifer.
- Property taxes.
- Child care.
- Foster care.
- Policing, prisons, or corrections.
- Tribal issues.
- Kansas Supreme Court selection.

Do not infer these positions from party label, occupation, campaign associations, social-platform presence/absence, or broad "personal freedom" language.

---

## Website Versioning / Source Conflict Notes

The campaign site currently exposes two overlapping sets of pages:

- New/current-nav pages: `/`, `/meet-marty`, `/platform`, `/contact`.
- Older still-live pages: `/about-marty`, `/to-do-list`, `/public-schools`, `/health-and-fitness`, `/economics`.

Both sets are candidate-controlled and accessible on May 19, 2026. They are broadly consistent on education, health, economic investment, cannabis revenue, and government accountability, but they do not use identical wording. The older `/to-do-list` page is more explicit about transgender rights/sports and electronic voting options. The newer `/platform` page uses broader wording on school athletics and voting access. Downstream artifacts should cite exact URLs and avoid harmonizing the text into a statement that appears nowhere on a cited page.

---

## Blockers / Could Not Confirm

- Direct SOS candidate-list row or final ballot certification.
- Running mate / lieutenant-governor partner.
- Elected-office voting record or government-meeting action record.
- Reliable post-level social corpus for Facebook, Instagram, TikTok, or YouTube.
- Current church affiliation or religious-liberty policy statement.
- Candidate-controlled detailed positions on abortion, gun policy, Medicaid expansion, rural hospitals, water/Ogallala, property taxes, child care, foster care, policing/prisons, tribal issues, or Kansas Supreme Court selection.
- Court/property/business/professional-license sweep was outside this constrained deepening pass and remains incomplete.

---

## Statistics

- **Total source records logged:** 21.
- **Primary/candidate-controlled/government sources used:** 13.
- **Secondary news sources used:** 3.
- **Social/local-harvest sources used:** 5.
- **Time period covered by confirmed campaign activity:** May 30, 2025 through May 19, 2026.
- **Official status confidence:** KPDC campaign-finance registration confirmed; direct SOS candidate-list/ballot status unconfirmed due to endpoint blocking and pre-deadline timing.
