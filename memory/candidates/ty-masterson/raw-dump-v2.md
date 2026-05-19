# Raw Dump v2 -- Ty Masterson

**Date:** 2026-05-19
**Agent:** codex (deep-scraper equivalent)
**Candidate slug:** ty-masterson
**Position:** Kansas Senate President; Republican candidate for Kansas Governor
**Election:** kansas-governor-2026

---

## Brief

This v2 dump deepens the existing `raw-dump.md`, `social-harvest.md`, `in-their-own-words.md`, `site-profile.md`, and current UI v2 object. It prioritizes official status, official records, candidate-controlled sources, and current verification.

Key corrections / additions:

1. Campaign finance and office-sought status are confirmed through KPDC/SOS reports, but formal SOS ballot filing could not be confirmed because the official candidate-list endpoint was CloudFront/JavaScript-gated.
2. Candidate-controlled campaign site is `https://www.mastersonforgovernor.com/`; current UI has an unrelated `mann.house.gov` campaignWebsite value.
3. Church metadata should point to NewSpring Church, not IHM Church.
4. The strongest new primary-source issue anchors are SB 63, SB 244, SCR 1611, SB 4, SB 5, HCR 5011, the official Senate profile/vote record, and KPDC/SOS finance filings.
5. HCR 5011 is action evidence for Masterson's property-tax agenda, but not an enacted/ballot-success item; the official page marks it died.

---

## Source Log

### Official candidate / election status

**Kansas Secretary of State -- Candidate Information**  
URL: https://www.sos.ks.gov/elections/candidate-information.html  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Democratic and Republican candidates must run in the primary for nomination.
- Candidates for national, state, legislative, and judicial offices file with the Secretary of State.
- A candidate is not considered filed until petition/declaration and fee are received.
- 2026 primary filing deadline: 12:00 p.m. Monday, 2026-06-01.
- Governor/Lt. Governor is among offices to be elected in 2026.
Issue mapping: official status / race scope.

**Kansas SOS candidate list endpoint**  
URL: https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx  
Tier: primary  
Accessed: 2026-05-19  
Result: blocked by JavaScript/CloudFront challenge in browserless fetch. The page could not be used to confirm ballot filing status.  
Issue mapping: could_not_confirm / race scope.

**KPDC/SOS statewide-office index, 2026 cycle**  
URL: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Page title: Kansas State Wide Office, 2026 Election Cycle.
- Section: gubernatorial candidates.
- Row lists "Masterson, Ty" with Appointment of Treasurer and 202601 report.
- Last updated: 2026-01-22.
Issue mapping: official finance/campaign committee status.

**Appointment of Treasurer, Ty Masterson**  
URL: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01TM_AT.pdf  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Candidate name: Ty Masterson.
- Office sought: Governor.
- County: Butler.
- Treasurer: Tom Devlin.
- Executed: 2025-07-22.
Issue mapping: official campaign committee / race status.

### Official legislative profile and votes

**Kansas Legislature profile -- Ty Masterson**  
URL: https://www.kslegislature.gov/legislators/sen_masterson_ty_1/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Senate District 16, Butler County.
- President of the Senate.
- Republican.
- Terms: House 2005-2008; Senate 2009-present.
- Committees include Leadership, Interstate Cooperation, Organization/Calendar/Rules, Statewide Broadband Expansion Planning Task Force, Legislative Coordinating Council, Child Welfare System Task Force, Confirmation Oversight, Legislative Task Force on Dyslexia.
Issue mapping: biography / record / governance role.

**Kansas Senate vote history -- Masterson, 2025 session**  
URL: https://www.kslegislature.gov/b2025_26/vote-record/sen_masterson_ty_1/2025/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Lists Masterson's recorded 2025 votes.
- Confirms yea on SB 4 final action, concurrence, and override.
- Confirms yea on SB 5 emergency final action, concurrence, and override.
- Confirms yea on SB 63 final action and veto override.
- Confirms yea on SB 244 concurrence and veto override via measure vote pages.
- Confirms yea on SCR 1611 final action.
- Confirms yea votes on HCR 5011 Senate substitute / conference-related votes, with one failed adoption vote and later passed adoption vote.
Issue mapping: action evidence across elections, LGBTQ+ policy, judicial selection, property taxes.

### Candidate-controlled campaign sources

**Campaign homepage**  
URL: https://www.mastersonforgovernor.com/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Presents Kansas as failing on safety, affordability, schools, taxes, and out-migration.
- States Masterson is running for governor to "Take Back Kansas."
- Claims tax cuts, anti-DEI/transgender-policy actions, election-integrity measures, and Senate leadership experience.
- Links to Facebook, Instagram, and X.
Issue mapping: stated positions for taxes, education, public safety, elections, LGBTQ+ policy, campaign identity.

**Campaign issue page**  
URL: https://www.mastersonforgovernor.com/about  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Tax plank: Kansas has the 16th highest tax burden; Masterson led a $2 billion tax cut; he says he would continue cutting taxes.
- Jobs plank: calls for lower taxes, fewer regulations, and pro-growth policy.
- Public-safety plank: says he would stand with law enforcement, back tough-on-crime policy, and fund police.
- Education plank: says Kansas students are underperforming in reading/math; promises teacher pay for "good teachers," parent say, and accountability.
- Values plank: cites DEI in higher education, transgender participation in women's sports, and gender-transition care for minors.
Issue mapping: taxes, jobs/regulation, law enforcement, education, LGBTQ+ policy.

**Campaign biography page**  
URL: https://www.mastersonforgovernor.com/services  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Says Masterson is a husband, father, grandfather, conservative, and fighter for working Kansans.
- Says he was born and raised in Butler County.
- Says he ran for Andover City Commission more than twenty years ago.
- Says he was elected to the state legislature in 2004.
- Says he became Senate President in 2021.
- Says he leads GoCreate at Wichita State.
- Says he and his family attend NewSpring Church.
Issue mapping: biography, church metadata, taxes, education, LGBTQ+ policy, election integrity.

### Issue-specific official records

**SB 63 -- Help Not Harm Act official bill page**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/sb63/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Enacts the Help Not Harm Act.
- Restricts state funds for gender-transitioning promotion.
- Prohibits providers from providing gender-transition care to minors whose gender identity is inconsistent with sex.
- Authorizes civil action and professional discipline for violations.
- Bill progress: veto overridden.
Issue mapping: Marriage & Family / LGBTQ+ policy; children's healthcare policy.

**SB 63 Senate final action vote**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20250129163959_218903/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Senate emergency final action passed as amended on 2025-01-29.
- Vote: 32 yea, 8 nay.
- Masterson listed among yeas.
Issue mapping: action evidence for LGBTQ+ policy.

**SB 63 Senate veto override vote**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20250218144343_606615/print/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Senate motion to override veto prevailed on 2025-02-18.
- Vote: 31 yea, 9 nay.
- Masterson listed among yeas.
Issue mapping: action evidence for LGBTQ+ policy.

**SB 244 official bill page**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/sb244/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Requires multiple-occupancy private spaces in public buildings for use by only one sex.
- Defines gender as biological sex at birth for statutory construction.
- Directs driver's-license and birth-certificate reissuance when necessary to correct gender/sex identification.
- Bill progress: veto overridden.
Issue mapping: Marriage & Family / LGBTQ+ policy; public buildings; civil/criminal penalties.

**SB 244 Senate concurrence vote**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260128180000_355454/print/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Senate concurred with amendments on 2026-01-28.
- Vote: 30 yea, 9 nay, 1 absent.
- Masterson listed among yeas.
Issue mapping: action evidence for LGBTQ+ policy.

**SB 244 Senate veto override vote**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260217132754_470460/print/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Senate motion to override veto prevailed on 2026-02-17.
- Vote: 31 yea, 9 nay.
- Masterson listed among yeas.
Issue mapping: action evidence for LGBTQ+ policy.

**SCR 1611 official page**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/scr1611/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Proposed constitutional amendment for direct election of Supreme Court justices and abolition of the Supreme Court Nominating Commission.
- Page shows adopted House and filed with Secretary of State.
- Testimony includes Ty Masterson as proponent on 2025-02-25.
Issue mapping: judicial selection / courts.

**Ty Masterson proponent testimony on SCR 1611**  
URL: https://www.kslegislature.gov/b2025_26/committees/testimony/pdf/?apn=b2025_26%2Fyear2%2Fsenate%2Fcommittees%2Fctte_s_fed_st_1%2Ftestimony%2Fpublished%2Fctte_s_fed_st_1_20250225_02_testimony.html  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Masterson said Kansas has little voter input over who sits on the state Supreme Court.
- He criticized the nominating commission as lawyer-dominated and private.
- He argued every system is political and direct elections would make that dynamic explicit.
- He urged support for SCR 1611.
Issue mapping: judicial selection; direct candidate statement.

**SB 4 official page**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/sb4/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Requires advance voting ballots to be returned by 7:00 p.m. on Election Day.
- Bill progress: veto overridden.
- Masterson's 2025 vote record lists yea on final action, concurrence, and override.
Issue mapping: elections / voting rules.

**SB 5 official page**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/sb5/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Prohibits use of federal funds for election/election-related activities unless approved by the Legislature.
- Masterson's 2025 vote record lists yea on final action and concurrence/override steps.
Issue mapping: elections / legislative oversight of election administration.

**HCR 5011 official page**  
URL: https://www.kslegislature.gov/li/b2025_26/measures/hcr5011/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Senate substitute proposed a constitutional amendment limiting property-tax valuation increases for real property and mobile homes.
- Official page marks status as died.
- Masterson's 2025 vote record lists yea votes on the Senate substitute / conference-related votes, including a final 2025-03-27 yea on adoption after a prior failed adoption vote.
Issue mapping: property taxes; action evidence with status caveat.

**SB 361 official bill page**  
URL: https://www.kslegislature.gov/b2025_26/bills/SB361/  
Tier: primary  
Accessed: 2026-05-19  
Relevant facts:
- Electing to participate in the federal tax credit for individual contributions to scholarship-granting organizations.
- Bill progress: veto overridden.
Issue mapping: school choice / private-school scholarship tax credits. Masterson vote should be verified from official vote record before use as individual action evidence.

### Secondary reporting / candidate appearances

**KVOE interview coverage, 2026-05-15**  
URL: https://kvoe.com/2026/05/15/masterson-outlines-run-for-governor-during-kvoe-stop/  
Tier: secondary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Masterson said governor's race is not a time for on-the-job training.
- He described property taxes as a crisis and said Kansas should trim spending.
- He said education funding may not change materially but should be revisited.
- He said state spending accelerated after COVID aid and the answer is slowing spending growth.
- KVOE listed current Republican and Democratic gubernatorial fields and the 2026-06-01 filing deadline.
Issue mapping: taxes/spending, education, campaign identity.

**Salina Post debate summary, 2026-02-03**  
URL: https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e  
Tier: secondary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Six GOP candidates participated in the 2026-01-30 Kansas GOP gubernatorial debate: Charlotte O'Hara, Jeff Colyer, Scott Schwab, Ty Masterson, Joy Eakins, Philip Sarnecki.
- Masterson described himself as a battle-tested leader and career fighter.
- On taxes, he emphasized income and property-tax reform and said a governor's signature would matter.
- On STAR bonds/economic development, he defended use of STAR bonds for the Kansas City Chiefs stadium effort and said he wanted things built in Kansas.
- On education, he advocated school choice.
- Debate coverage says the candidates reached platform consensus on judicial selection reform, marijuana, abortion, support for ICE/federal law enforcement, energy, and cooperation with federal government.
Issue mapping: campaign statements across taxes, school choice, judicial selection, marijuana, abortion, immigration/public safety.

**HPPR / Kansas Reflector on White House praise letter, 2026-05-07**  
URL: https://www.hppr.org/hppr-news/2026-05-07/kansas-senate-president-welcomes-praise-for-2026-legislatures-work-on-trump-agenda?_amp=true  
Tier: secondary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Masterson and House Speaker Dan Hawkins received a letter from White House Intergovernmental Affairs praising 2026 Kansas legislative action on Trump priorities.
- Masterson publicly shared the letter.
- Coverage quotes Masterson saying the mission was to advance President Trump's agenda in Kansas.
- Article lists actions on spending/data matching, election rules, first-responder buffer zone, sheriff/ICE agreements, and private-school tax-credit participation.
Issue mapping: Trump alignment, election administration, welfare/spending, law enforcement/immigration, school choice.

**Kansas Reflector finance report, 2026-01-19**  
URL: https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/  
Tier: secondary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Masterson did not make a personal campaign loan in 2025.
- He ended 2025 with about $687,000 in campaign cash.
- He said nearly all donations arrived in final three months after staff changes.
- He said Take Back Kansas had $700,000 in an account that did not have to identify donors.
Issue mapping: campaign finance, outside/undisclosed money.

**Washington Examiner on Trump-aligned campaign infrastructure, 2025-11-11**  
URL: https://www.washingtonexaminer.com/news/campaigns/state/3883028/trumpworld-gets-behind-ty-masterson-kansas-governor-race/  
Tier: secondary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Existing local artifact says article reported Trump 2024 orbit consultants and outside groups backing Masterson through Take Back Kansas / Take Back Kansas Action.
Issue mapping: campaign alignment / funding ecosystem.

**Kansas City Star / Kansas Reflector Young Republicans reporting, 2025-10-14**  
URLs:
- https://www.kansascity.com/news/politics-government/article312507806.html
- https://kansasreflector.com/2025/10/14/kansas-young-republicans-shut-down-after-politico-report-on-racist-violent-encrypted-chat/
Tier: secondary  
Accessed: 2026-05-19  
Relevant facts / paraphrases:
- Reporting says Kansas Young Republicans were deactivated after Politico reported racist, violent, and antisemitic encrypted chat messages involving Kansas Young Republican leaders.
- Dwyer and Hendrix were photographed in a small group with Masterson at his campaign kickoff.
- Star snippet quotes Masterson denying association with them and saying neither was staff nor a volunteer.
Issue mapping: campaign-affiliation scrutiny; social/online relevance. Do not infer belief or responsibility from a photo.

### Social / indexed public sources

**X / TwStalker indexed mirror for @TyMastersonKS**  
URL: https://w.twstalker.com/TyMastersonKS  
Tier: social / secondary mirror  
Accessed: 2026-05-19  
Relevant facts from existing social-harvest:
- Campaign site links @TyMastersonKS.
- Existing public mirror metadata listed about 527 tweets, 3K followers, 61 following, 78 likes.
- Indexed items included property-tax posts, law enforcement appreciation, ICE/Trump post, Charlie Kirk/classroom-speech post, endorsements, agriculture/community stops, and newsletter/signup requests.
- Engagement figures are mirror-visible only and not official platform analytics.
Issue mapping: property taxes, law enforcement/immigration, education/free speech, campaign endorsements.

**Facebook TyMastersonKansas**  
URL: https://www.facebook.com/TyMastersonKansas  
Tier: social  
Accessed: 2026-05-19  
Relevant facts:
- Campaign site links this page.
- Direct logged-out capture did not expose reliable post inventory or engagement counts.
Issue mapping: online presence only; no issue-specific signal without captured posts.

**Instagram senator.tymasterson**  
URL: http://instagram.com/senator.tymasterson  
Tier: social  
Accessed: 2026-05-19  
Relevant facts:
- Campaign site links this handle.
- Logged-out capture did not expose reliable post inventory or engagement counts.
Issue mapping: online presence only; no issue-specific signal without captured posts.

---

## Campaign Finance Detail

**Official report:** `SW01TM_202601.pdf`  
URL: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01TM_202601.pdf  
Tier: primary  
Accessed: 2026-05-19  
Reporting period: 2025-01-01 through 2025-12-31  

Summary:
- Cash on hand at beginning: $0.00
- Total contributions and other receipts: $695,998.16
- Cash available: $695,998.16
- Total expenditures and other disbursements: $8,476.06
- Cash on hand at close: $687,522.10
- In-kind contributions: $24,120.24
- Other transactions: $0.00
- Electronically filed: 2026-01-12

Visible itemized contribution examples from the first schedule page:
- David Murfin/Murfm, $8,000 total split primary/general in report extraction
- Janet Murfin/Murfm, $8,000 total split primary/general in report extraction
- Shaman Botanicals LLC, $8,000 total split primary/general in report extraction
- Rick Kloos, $1,000
- Pennie Kloos, $1,000
- Brad Starnes, $104.10

Notes:
- OCR alternates "Murfin" and "Murfm"; do not publish without rechecking the PDF image.
- Kansas campaign-finance pages include a statutory warning against commercial use of contributor names. Use donor details only for civic reporting and with source context.
- Wichita Eagle snippet flags scrutiny of the Shaman Botanicals contribution; full article was not reviewed in this pass, so treat as a lead, not a finding.

---

## Issue Mapping

### Taxes / Property Tax / Spending

Stated sources:
- Campaign issue page: lower taxes, fewer regulations, affordability.
- KVOE interview: property-tax crisis, trim spending, slow spending growth.

Action evidence:
- HCR 5011 vote record shows Masterson supported the Senate substitute property-tax valuation-cap amendment attempt.
- Official page marks HCR 5011 died; do not describe as enacted.

Social / online:
- Existing X mirror sample captured a January 2026 property-tax post as the highest visible-engagement item in the sample.

Gaps:
- No full gubernatorial budget plan found beyond tax/spending messaging and interview summaries.
- HCR 5011 outcome is procedurally complex; final compiler should verify whether and why it died.

### Jobs / Economic Development / Regulation

Stated sources:
- Campaign issue page promises lower taxes, fewer regulations, and more opportunities.
- Salina Post debate says Masterson defended STAR bonds for the Kansas City Chiefs stadium effort and said he wanted things built in Kansas.

Action evidence:
- Candidate record as Senate President is relevant, but this pass did not pull a complete STAR bond vote/action chain.

Gaps:
- No detailed rural economic-development plan, workforce plan, or incentive-accountability plan found in candidate-controlled sources.

### Education / School Choice / Parental Rights

Stated sources:
- Campaign site emphasizes reading/math, teacher pay, parental say, accountability, and anti-DEI/anti-"woke" language.
- Salina Post debate says he advocated school choice.

Action evidence:
- SB 361 official page confirms federal scholarship tax-credit participation became law through veto override; Masterson's individual vote still needs official vote-page confirmation before conversion to ActionEvidence.
- Campaign bio claims he fought DEI in higher education and preserved election integrity; use official bill/action sources for those claims downstream.

Social / online:
- X mirror sample includes Charlie Kirk/classroom-speech legislation reference.

Gaps:
- No detailed school-finance formula plan or special-education funding plan found.

### Marriage & Family / LGBTQ+ Policy

Stated sources:
- Campaign issue page and bio list DEI, women's sports, and gender-transition care for minors as record claims.

Action evidence:
- SB 63 final action and veto override: Masterson listed among yea votes.
- SB 244 concurrence and veto override: Masterson listed among yea votes.

Gaps:
- No candidate-controlled statement found on marriage definition specifically. Do not infer from party platform or church affiliation.

### Judicial Selection / Courts

Stated sources:
- Masterson's proponent testimony on SCR 1611.
- Salina Post debate coverage says candidates encouraged approval of the judicial-selection amendment.

Action evidence:
- SCR 1611 official page shows adopted House and filed with Secretary of State.
- Masterson was a proponent witness and his vote record lists yea on final action.

Gaps:
- Verify official ballot title and exact election date for the amendment from SOS before public UI publication.

### Elections / Voting Rules

Stated sources:
- Campaign bio says he preserved election integrity.

Action evidence:
- SB 4: advance ballots due by 7 p.m. Election Day; veto overridden; Masterson vote record lists yea.
- SB 5: federal election funds require legislative approval; Masterson vote record lists yea.

Gaps:
- No detailed candidate-controlled election-administration plan found beyond campaign bio and legislative record.

### Public Safety / Law Enforcement / Immigration

Stated sources:
- Campaign site promises to stand with law enforcement, back tough-on-crime policies, and fund police.
- Existing X mirror sample includes an ICE/Trump alignment post.
- HPPR/Kansas Reflector says Masterson shared White House praise for first-responder buffer-zone and sheriff/ICE-agreement bills.

Action evidence:
- Specific 2026 bill numbers and Masterson member votes for buffer-zone / sheriff-ICE provisions need final verification.

Gaps:
- No comprehensive immigration plan found beyond law-enforcement/ICE alignment.
- No detailed criminal-justice plan found beyond policing/funding/tough-on-crime messaging.

### Abortion / Sanctity of Life

Stated sources:
- Salina Post debate summary says all six candidates supported the right-to-life platform.
- Kansas Reflector snippets say Masterson spoke at the 2026 March for Life rally and connected courts to abortion.

Action evidence:
- This pass did not pull a current abortion-specific bill/vote record for Masterson; use prior raw-dump only with source verification.

Gaps:
- Need primary or direct candidate-controlled source for detailed abortion policy, exceptions, and executive actions.

### Marijuana / Drug Policy

Stated sources:
- Salina Post debate says Masterson supported federal marijuana reclassification for research into damaging effects, while the field did not support Kansas legalization.

Action evidence:
- None pulled in this pass.

Gaps:
- No candidate-controlled written marijuana platform found.

### Healthcare / Medicaid / Social Services

Stated sources:
- Campaign site does not provide a detailed healthcare platform.
- HPPR/Kansas Reflector coverage of the White House-praise letter mentions eligibility data matching for food and medical assistance.

Action evidence:
- Specific data-matching bill and Masterson vote need final verification.

Gaps:
- No detailed positions found on Medicaid expansion, rural hospitals, child care, foster care, disability services, veterans services, water policy, broadband deployment beyond committee role, or state employee pay.

---

## Could Not Confirm

- Formal ballot filing on the SOS candidate-list page as of 2026-05-19.
- Running mate / lieutenant governor candidate.
- Complete social-media post inventory from Facebook, Instagram, and direct X.
- Candidate-controlled YouTube, LinkedIn, TikTok, Truth Social, Gab, Gettr, Substack, or Reddit accounts.
- Detailed healthcare, water, rural hospital, broadband, child care, foster care, veterans, or state workforce policy.
- Exact official ballot title/date for SCR 1611 from SOS.
- Whether every legislative action praised in the May 2026 White House letter maps to a personally recorded Masterson yea vote.

## Source Count

- Total sources checked / used: 32
- Primary sources with findings: 18
- Secondary sources with findings: 9
- Social / mirror sources with findings: 3
- Blocked primary sources: 1 (SOS candidate list endpoint)
- Time period covered: 2005 legislative service background through sources accessed 2026-05-19
