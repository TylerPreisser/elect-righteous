# Raw Dump v2 - Cathy Hopkins

**Date**: 2026-05-19
**Agent**: Worker 7 (deep-scraper equivalent)
**Phase / Stage**: Phase 2, Stage 2.b
**Candidate slug**: cathy-hopkins
**Position**: Kansas State Board of Education, District 5
**Election**: sboe-district-5

---

## Scope Note

This is an additive Phase 2 scrape for Cathy Hopkins. There was no existing `memory/candidates/cathy-hopkins/` folder, so this pass used local cross-candidate references, `ui/src/data/v2/cathy-hopkins.ts`, election-memory files, and targeted current web verification. The focus is official status, State Board governance, 2026 filing/finance caveats, board actions, dated questionnaire material, and donor/funding evidence where public records exist.

This dump does not treat dated 2022 questionnaire answers as a 2026 platform, does not infer beliefs from faith references, and does not call Hopkins a filed 2026 candidate without an official filing source.

---

## Source Tiers Used

- **Primary**: official Kansas SOS, KSDE, Kansas Legislature, and KPDC/Kansas.gov records; candidate questionnaire only where it records candidate-submitted answers.
- **Secondary**: local/state news, policy-media coverage, candidate-guide summaries.
- **Social**: public social or platform pages only where visible. No candidate-controlled post corpus was captured.

---

## Source Registry

### s-ksde-state-board

- **Tier**: primary
- **URL**: https://www.ksde.gov/state-board
- **Publisher**: Kansas State Department of Education
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - The State Board oversees public K-12 education, sets policy, adopts academic standards, oversees educator licensure, establishes accreditation, and appoints the commissioner.
  - The board has 10 elected members from districts made of four contiguous senatorial districts.
  - Page identifies Cathy Hopkins as current chair and District 5 representative.
- **Issue mapping**: statewide K-12 governance; official status.

### s-ksde-district-5

- **Tier**: primary
- **URL**: https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5
- **Publisher**: Kansas State Department of Education
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Lists Cathy Hopkins as chair and legislative liaison.
  - Lists phone and KSDE email.
  - Lists years of service on the board as 2023, 2024, 2025, 2026.
  - Committee assignments listed include Coordinating Council, Professional Standards Board Liaison, Teacher Vacancy and Supply Committee, and Governor's Education Council.
  - Biography says Hopkins owned a small business, worked for a local chamber of commerce, worked for a national law firm on administrative-staff training, served at a global ministry headquarters, and lives in Hays with her husband.
  - District 5 page includes Hays USD 489, Ellis USD 388, Victoria USD 432, and many western/central Kansas school districts.
- **Issue mapping**: official status; district scope; board governance; educator workforce.

### s-sos-candidate-info

- **Tier**: primary
- **URL**: https://www.sos.ks.gov/elections/candidate-information.html
- **Publisher**: Kansas Secretary of State
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Democratic and Republican candidates run in the primary; other recognized parties use caucus/convention; independents file by petition.
  - National, state, legislative, and judicial candidates file with the Secretary of State.
  - A candidate is not considered filed until petition/declaration and fee are received.
  - 2026 primary filing deadline is 12:00 p.m. Monday, June 1, 2026.
  - Offices to be elected in 2026 include State Board of Education districts 1, 3, 5, 7, and 9.
  - State Board of Education filing fee total is listed as $95.
- **Issue mapping**: official candidate status; race scope.

### s-sos-candidate-list-blocked

- **Tier**: primary
- **URL**: https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx
- **Publisher**: Kansas Secretary of State
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - The official candidate-list endpoint returned a JavaScript / robot-verification page in this environment.
- **Issue mapping**: official candidate status blocker.

### s-kpdc-edodd-2026

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/BOELinksOdd2026EC.htm
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Document update**: Last updated 2026-03-24
- **Relevant facts/paraphrase**:
  - Page title: Kansas State Board of Education, odd-numbered districts, 2026 election cycle.
  - The index is for campaign-finance forms filed by incumbents and individuals with open campaign accounts.
  - District 5 entries shown: Cunningham, Michelle, with AT link; Wood, Lorie, with AT link.
  - Cathy Hopkins does not appear in the readable 2026 odd-district index as of the page update.
- **Issue mapping**: 2026 campaign-finance status; official status caveat.

### s-kpdc-lorie-wood-at

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/Treasurers/BOE05LW_AT.pdf
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Document date**: executed 2026-01-24; PDF print timestamp 2026-02-27
- **Relevant facts/paraphrase**:
  - Candidate name: Lorie L. Wood.
  - Office sought: State Board of Education, District 5.
  - Treasurer: Melissa White.
- **Issue mapping**: 2026 race field; official status caveat for Hopkins.

### s-kpdc-michelle-cunningham-at

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/Treasurers/BOE05MC_AT.pdf
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Linked as an AT form for Michelle Cunningham in KPDC's 2026 District 5 State Board index.
  - PDF is image-based in local extraction; text details were not OCR-readable in this pass.
- **Issue mapping**: 2026 race field; official status caveat for Hopkins.

### s-sos-2022-primary-results

- **Tier**: primary
- **URL**: https://sos.ks.gov/elections/22elec/2022-Primary-Official-Vote-Totals.pdf
- **Publisher**: Kansas Secretary of State
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - State Board of Education District 5 Republican primary: Jean Clifford 23,475 votes, 45.15%; Cathy Hopkins 28,514 votes, 54.85%.
- **Issue mapping**: election history; current-officeholder background.

### s-sos-2022-general-results

- **Tier**: primary
- **URL**: https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf
- **Publisher**: Kansas Secretary of State
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Official general election vote totals list R-Cathy Hopkins under Member, State Board of Education 5.
  - The PDF text extraction did not surface a competing District 5 general opponent; local and secondary records also describe Hopkins as unopposed in November 2022.
- **Issue mapping**: election history.

### s-sos-2022-certificate

- **Tier**: primary
- **URL**: https://sos.ks.gov/publications/register/volume-41/Issues/Issue-51/12-22-22-50761.html
- **Publisher**: Kansas Secretary of State / Kansas Register
- **Published**: 2022-12-22
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Certificate of Election states the State Board of Canvassers met Dec. 1, 2022, and certified the election.
  - Lists "Member, State Board of Education District 5 - Cathy Hopkins, Hays, Republican."
- **Issue mapping**: official officeholder status; election history.

### s-ksde-jan2025-structured-literacy-chair

- **Tier**: primary
- **URL**: https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Feature-Story/ArtMID/6201/ArticleID/4005/Kansas-State-Board-of-Education-receives-update-on-structured-literacy-licensure-requirements
- **Publisher**: Kansas State Department of Education
- **Published**: January 2025
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Article summarizes structured-literacy licensure requirements beginning in 2028 for certain educators.
  - Reports more than 12,000 educators had completed or were completing approved structured-literacy training.
  - Reports board members elected Cathy Hopkins of Hays, District 5, as chair and Danny Zeck as vice chair.
- **Issue mapping**: literacy; educator licensure; board leadership.

### s-ksde-feb2026-literacy

- **Tier**: primary
- **URL**: https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Feature-Story/ArtMID/6201/ArticleID/4847/Spotlight-on-literacy-highlights-ongoing-work-investment-needed160to-improve-Kansas-childrens-reading-success
- **Publisher**: Kansas State Department of Education
- **Published**: February 2026
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - KSDE story says the State Board aligned literacy initiatives to science of reading and structured literacy, including the Kansas Education Framework for Literacy and a position statement requiring evidence-based methodology aligned with science of reading.
  - Quotes Hopkins during the literacy day event on supporting educators and moving literacy work into classrooms.
- **Issue mapping**: literacy; teacher training; academic outcomes.

### s-ksde-commissioner-finalists

- **Tier**: primary
- **URL**: https://www.ksde.gov/news-center/news-releases/2026/04/14/kansas-state-board-of-education-names-finalists-for-commissioner-of-education
- **Publisher**: Kansas State Department of Education
- **Published**: 2026-03-30
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - KSDE announced three finalists for Kansas commissioner of education: Dr. Lisa Coons, Dr. Reginald Eggleston, and Dr. Jake Steel.
  - KSDE said the board would announce the next commissioner during its April 14 meeting.
  - Quotes State Board Chair Cathy Hopkins thanking candidates and describing the finalist slate.
- **Issue mapping**: commissioner search; board leadership.

### s-ksde-commissioner-retirement

- **Tier**: primary
- **URL**: https://www.ksde.gov/news-center/news-releases/2026/04/14/kansas-education-commissioner-announces-retirement
- **Publisher**: Kansas State Department of Education
- **Published**: 2025-09-10
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports board members voted to accept Commissioner Randy Watson's notice of retirement.
  - Quotes Hopkins as board chair on Watson's work with the board.
- **Issue mapping**: commissioner transition; board leadership.

### s-ksde-commissioner-search-subcommittee

- **Tier**: primary
- **URL**: https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Standards-and-Instruction/ArtMID/6191/ArticleID/4594/State-Board-begins-process-of-searching-for-a-new-education-commissioner
- **Publisher**: Kansas State Department of Education
- **Published**: 2025-09-25
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports the State Board voted to form a commissioner-search subcommittee made up of Hopkins, Danny Zeck, and Michelle Dombrosky.
  - Says the subcommittee would recommend a process for hiring Watson's successor.
  - Reports Hopkins said the selected search firm would work with the whole board, and that the board was not required to use a search firm.
- **Issue mapping**: commissioner search; board leadership; process.

### s-kmuw-commissioner-steel

- **Tier**: secondary
- **URL**: https://www.kmuw.org/news/2026-04-14/kansas-boe-names-jake-steel-as-states-next-education-commissioner
- **Publisher**: KMUW / Kansas News Service
- **Published**: 2026-04-14
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports the State Board named Jake Steel as the next education commissioner.
  - Reports Steel will begin in June.
  - Quotes Hopkins's release statement that Steel has a clear vision and that the board looks forward to working with him.
  - Reports seven of ten members supported the selection; Michelle Dombrosky voted no, Debby Potter and Connie O'Brien did not vote.
- **Issue mapping**: commissioner selection; board leadership.

### s-hb2468-minutes

- **Tier**: primary
- **URL**: https://www.kslegislature.gov/minutes/agenda_item_2026021720537638081
- **Publisher**: Kansas Legislature
- **Published/updated**: 2026-05-01 page update visible
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - House Education minutes identify HB 2468 as a private-school funding / federal program issue in committee testimony.
  - Minutes state Cathy Hopkins and Beryl New, legislative liaisons for the State Board, said the board voted to prioritize only using public funds for public schools in its 2026 legislative priorities.
  - Minutes say the liaisons stated the bill was counter to that priority by providing funding otherwise available for public schools to families choosing private schools.
- **Issue mapping**: public-school funding; school choice/voucher-adjacent policy; legislative liaison role.

### s-hb2468-testimony

- **Tier**: primary
- **URL**: https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_ed_1/documents/testimony/20260217_23.pdf
- **Publisher**: Kansas Legislature / State Board legislative liaisons
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Written testimony by Hopkins and Beryl New as legislative liaisons opposes HB 2468.
  - It says the State Board voted to prioritize only using public funds for public schools in 2026 legislative priorities.
- **Issue mapping**: public-school funding; legislative priorities.
- **Access caveat**: Source link was referenced through Legislature minutes; direct PDF text was not separately extracted in this pass.

### s-hb2129-testimony

- **Tier**: primary
- **URL**: https://kslegislature.gov/li/b2025_26/committees/ctte_h_financial_institutions_and_pensions_1/documents/testimony/20250205_03.pdf
- **Publisher**: Kansas Legislature / State Board legislative liaisons
- **Published**: 2025-02-05
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Proponent testimony by Cathy Hopkins and Danny Zeck as State Board liaisons for HB 2129.
  - Says the State Board voted to prioritize moving Kansas school employees on KPERS 3 to KPERS 2 and that HB 2129 begins by transferring teachers.
- **Issue mapping**: teacher workforce; school employee benefits.

### s-hb2194-testimony

- **Tier**: primary
- **URL**: https://kslegislature.gov/li/b2025_26/committees/ctte_h_financial_institutions_and_pensions_1/documents/testimony/20250214_05.pdf
- **Publisher**: Kansas Legislature / State Board legislative liaisons
- **Published**: 2025-02-12
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Proponent testimony by Cathy Hopkins and Danny Zeck as State Board liaisons for HB 2194.
  - Says the State Board voted to prioritize reducing wait time after retirement to return to teaching and reducing or eliminating the financial penalty.
- **Issue mapping**: teacher workforce; school employee benefits.

### s-sb441-testimony

- **Tier**: primary
- **URL**: https://kslegislature.gov/li/b2025_26/committees/ctte_s_ed_1/misc_documents/download_testimony/ctte_s_ed_1_20260225_23_testimony.html
- **Publisher**: Kansas Legislature / State Board legislative liaisons
- **Published**: 2026-02-25
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Opponent testimony by Cathy Hopkins and Beryl New as State Board liaisons on SB 441, applied behavior analysis services.
  - Testimony says federal law currently ensures students receive services necessary for a free appropriate public education, and that the bill would require districts to allow private providers even if service is not necessary to access education.
  - It says the State Board had concerns about the bill's directive not to evaluate educational necessity.
- **Issue mapping**: special education / student services; local district administration.

### s-ivoterguide-hopkins

- **Tier**: secondary
- **URL**: https://ivoterguide.com/candidate/70910/race/17825/election/987
- **Publisher**: iVoterGuide
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Public candidate-guide profile for Hopkins's 2022 State Board District 5 general race.
  - Lists Hopkins as Republican, 2022 general, non-incumbent at that time, with education/work biography.
  - Links Hays Post 2021 NEA questionnaire parts from the USD 489 school board race.
  - Candidate responses include dated statements supporting local school-board/parent control, opposing Common Core, supporting parental permission before sex education or SEL, opposing mandatory vaccinations and mask mandates, supporting teachers with carry licenses carrying guns with additional training/background checks, and describing faith/spiritual beliefs.
- **Issue mapping**: dated candidate questionnaire; local control; curriculum; parental authority; school safety; health mandates; faith self-description.
- **Caveat**: Candidate-guide archive is 2022 material. Do not present as a 2026 platform unless re-confirmed.

### s-ballotready-hopkins

- **Tier**: secondary
- **URL**: https://www.ballotready.org/people/cathy-hopkins-38ee9c54-a131-4cf2-88f5-2d5fad9c2f4e
- **Publisher**: BallotReady
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Lists Hopkins as currently holding Kansas State Board of Education District 5 until January 11, 2027.
  - Lists 2022 State Board candidacy and summarizes education-related positions from candidate questionnaires.
- **Issue mapping**: officeholder background; dated questionnaire summary.

### s-hayspost-ksreflector-core-subjects

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/eee8fa4b-005e-4c47-8558-a0c9729e7bd0
- **Publisher**: Hays Post republication of Kansas Reflector
- **Published**: 2025-04-10
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports Hopkins and other conservative State Board members discussed streamlining mandates so local districts could focus on reading, writing, and math.
  - Reports Hopkins said the board had placed burdensome responsibilities on teachers and administrators.
  - Reports Hopkins's two-year personal agenda centered on helping students excel in reading and writing.
- **Issue mapping**: local control; core academics; board priorities.

### s-thepitch-ksreflector-priorities

- **Tier**: secondary
- **URL**: https://www.thepitchkc.com/kansas-state-board-of-education-establishes-four-priorities-heading-into-2024-election-cycle/
- **Publisher**: The Pitch republication of Kansas Reflector
- **Published**: 2023-01
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports the State Board established four priorities for an 18-month period.
  - Reports Hopkins said regulatory mandates and paperwork burdened districts with modest staffing.
  - Includes Hopkins quote about streamlining requirements so districts are less overwhelmed.
- **Issue mapping**: local control; regulation/mandates; board priorities.

### s-sentinel-cut-scores

- **Tier**: secondary
- **URL**: https://sentinelksmo.org/ks-board-of-ed-reduces-proficiency-standards/
- **Publisher**: The Sentinel / Kansas Policy Institute
- **Published**: 2025-08-21
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports the State Board voted 7-3 to accept new proficiency standards for a new state assessment test.
  - Reports Hopkins supported the new standards and opposed the characterization that expectations, standards, or rigor were being lowered.
  - Lists Hopkins among supporting members and Connie O'Brien, Debby Potter, and Michelle Dombrosky as opposing.
- **Issue mapping**: assessment standards; academic transparency; public controversy.
- **Caveat**: Secondary/policy-media source with a critical frame. Use neutral attribution and pair with official KSDE records where possible.

### s-sentinel-proficiency-sb458

- **Tier**: secondary
- **URL**: https://sentinelksmo.org/lowering-proficiency-standards-sb-458/
- **Publisher**: The Sentinel / Kansas Policy Institute
- **Published**: 2026-03
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports Hopkins defended the new standards against claims that standards were reduced to raise proficiency results.
  - Attributes to Hopkins a view that new assessments and cut scores were intended to align expectations and keep expectations high.
- **Issue mapping**: assessment standards; academic outcomes.
- **Caveat**: Secondary/policy-media source; use for attributed public statements only.

### s-kansasreflector-board-pay

- **Tier**: secondary
- **URL**: https://kansasreflector.com/2025/07/09/kansas-state-board-of-education-votes-to-increase-pay-after-being-left-behind-by-legislators/
- **Publisher**: Kansas Reflector
- **Published**: 2025-07-09
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports the State Board voted to increase pay after legislators increased their own pay.
  - Reports Debby Potter was the only no vote.
  - Reports Hopkins said she was not willing to cut the board-pay item and had lobbied the Legislature for board raises.
- **Issue mapping**: board governance; compensation; budget/process.

### s-lawrence-times-cellphone

- **Tier**: secondary
- **URL**: https://lawrencekstimes.com/2026/01/16/kr-ksleg-cellphone-ban-debate/
- **Publisher**: The Lawrence Times republication of Kansas Reflector
- **Published**: 2026-01-16
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports Hopkins and Beryl New testified neutrally on a proposed statewide school cellphone ban.
  - Says they pointed to the 2024 Blue Ribbon Task Force on Screen Time and to district-level policies developed with community collaboration.
- **Issue mapping**: local control; student cellphone/screen-time policy.

### s-ksnt-steel

- **Tier**: secondary
- **URL**: https://www.kwch.com/2026/04/14/kansas-state-board-education-selects-its-next-commissioner/
- **Publisher**: KWCH/WIBW/KSNT wire-style coverage
- **Published**: 2026-04-14
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports the State Board selected Jake Steel as next commissioner, effective June 1.
  - Quotes Hopkins saying Steel has a clear vision and ability to lead complex statewide work.
- **Issue mapping**: commissioner selection; board leadership.

### s-kpdc-edodd-2022-index

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAScanned/EdOdd/2022ElecCycle/BOELinksOdd2022EC.htm
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Document update**: Last updated 2024-05-16
- **Relevant facts/paraphrase**:
  - Lists Hopkins, Cathy, District 5, with AT, amended 202207, PLF, amended 202210, and 202301 reports for the 2022 election cycle.
- **Issue mapping**: 2022 campaign finance.

### s-kpdc-hopkins-202207

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAScanned/EdOdd/2022ElecCycle/202207/BOE05CH_amend2207.pdf
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Document date**: 2022-07-25; electronically filed 2022-11-15 amended
- **Relevant facts/paraphrase**:
  - Candidate: Cathy A. Hopkins.
  - Office sought: State Board of Education District 5.
  - Period: 2022-01-01 through 2022-07-21.
  - Total contributions and other receipts: $3,855.00.
  - Total expenditures: $2,870.76.
  - Cash on hand close: $984.24.
  - In-kind contributions: $168.19.
  - Notable itemized receipts visible in extraction include Lawrence Macha $1,000, Mark Steffen $500, Joe Wilkerson $300, and Ellis County Kansas Republican Party.
- **Issue mapping**: 2022 campaign finance.

### s-kpdc-hopkins-202210

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAScanned/EdOdd/2022ElecCycle/202210/BOE05CH_amend2210.pdf
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Document date**: 2022-10-31; electronically filed 2022-11-15 amended
- **Relevant facts/paraphrase**:
  - Candidate: Cathy A. Hopkins.
  - Office sought: State Board of Education District 5.
  - Period: 2022-07-22 through 2022-10-27.
  - Total contributions and other receipts: $13,210.00.
  - Total expenditures: $13,591.86.
  - Cash on hand close: $602.38.
  - In-kind contributions: $1,783.58.
  - Notable itemized receipts visible in extraction include Cindy Bauer $1,000; Crossland Heavy Contractors $1,000; Ivan Crossland Jr. $1,000; Life Force Ventures $1,000; Deanna Steffen $1,000; Mark Steffen $500; Colleen Steffen $500; Pop Up For Production LLC $1,000; Lite Em Up Fireworks LLC $1,000; Virginia Macha $1,000; American Made LLC $1,000; Sue McCray Bickle $500; Drussell Inc. $300; Steffens Family Natl Resources $1,000.
- **Issue mapping**: 2022 campaign finance.
- **Use caveat**: This is historical 2022 funding, not evidence of 2026 fundraising.

### s-kpdc-hopkins-202301

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAScanned/EdOdd/2022ElecCycle/202301/BOE05CH_202301.pdf
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Document date**: 2023-01-10; electronically filed 2023-01-17
- **Relevant facts/paraphrase**:
  - Period: 2022-10-28 through 2022-12-31.
  - Beginning cash on hand: $602.38.
  - Total contributions and other receipts: $0.00.
  - Total expenditures: $0.00.
  - Cash on hand close: $602.38.
- **Issue mapping**: 2022 campaign finance closeout.

---

## Local Research Read First

- `ui/src/data/v2/cathy-hopkins.ts` already had a corrective v2 profile identifying Hopkins as District 5 officeholder/chair, with issues around statewide governance, local control/questionnaire archive, and commissioner search.
- `memory/elections/2026-11-03-kansas-sboe-district-5.md` identified District 5 as a 2026 office, Hopkins as current incumbent, and noted no official candidates had filed as of the March 30, 2026 research date.
- `reports/2026-03-30-education-elections-hays-ks.md` identified the State Board District 5 race as the main 2026 education race for Hays/Ellis County and Hopkins as current chair/incumbent.
- Cross-candidate `raw-dump.md` files repeatedly carried the same education-election summary, but did not provide candidate-specific Hopkins research beyond office/race context.

---

## Findings by Pass

### Pass 1: Identity & Name Variations

**Findings**

- Primary records identify the candidate as Cathy Hopkins, Cathy A. Hopkins, and Cathy Hopkins of Hays.
- KSDE uses "Cathy Hopkins"; KPDC 2022 reports use "Cathy A Hopkins"; Kansas SOS certificate lists "Cathy Hopkins, Hays, Republican."
- The District 5 page says she and her husband live in Hays and have six children and 13 grandchildren.

**Sources**

- s-ksde-district-5
- s-sos-2022-certificate
- s-kpdc-hopkins-202207
- s-kpdc-hopkins-202210

### Pass 2: Campaign Finance

**Findings**

- No Hopkins 2026 campaign-finance entry was found in KPDC's readable odd-numbered State Board 2026 index. District 5 entries in that index were Michelle Cunningham and Lorie Wood.
- Hopkins's 2022 campaign-finance record is available. The 202207 amended report shows $3,855.00 contributions, $2,870.76 expenditures, $984.24 closing cash, and $168.19 in-kind contributions.
- The 202210 amended report shows $13,210.00 contributions, $13,591.86 expenditures, $602.38 closing cash, and $1,783.58 in-kind contributions.
- The 202301 report shows no new receipts or expenditures and $602.38 cash on hand.
- Notable 2022 itemized receipts included local Hays-area individuals plus business/organized donors including Crossland Heavy Contractors, Life Force Ventures, Pop Up For Production LLC, Lite Em Up Fireworks LLC, American Made LLC, and Ellis County Kansas Republican Party.

**Sources**

- s-kpdc-edodd-2026
- s-kpdc-edodd-2022-index
- s-kpdc-hopkins-202207
- s-kpdc-hopkins-202210
- s-kpdc-hopkins-202301

### Pass 3: Property & Business Records

**Findings**

- KSDE biography says Hopkins owned a small business for nine years, worked for a local chamber of commerce, and worked for a national law firm. iVoterGuide biography says she worked at BP-Cleanrite in Hays during the 2022 profile period.
- No Kansas Secretary of State business-entity filing or county property record was independently verified in this pass.

**Sources**

- s-ksde-district-5
- s-ivoterguide-hopkins

### Pass 4: Court & Legal Records

**Findings**

- No court, criminal, bankruptcy, ethics complaint, or civil-record item tied to Hopkins was found or verified in this pass.
- iVoterGuide records a candidate answer of "NO" to a question about felony convictions or civil/criminal sexual misconduct penalties, but that is candidate questionnaire material, not an independent court search.

**Sources**

- s-ivoterguide-hopkins

### Pass 5: Facebook

**Findings**

- No verified candidate-controlled public Facebook page with readable post history or engagement counts was confirmed.
- Search results surfaced articles that link publisher social accounts, not Hopkins-controlled feeds.

**Sources**

- Search performed 2026-05-19; no verified candidate-controlled result captured.

### Pass 6: X / Twitter

**Findings**

- No verified Hopkins-controlled X account or public timeline was confirmed.
- News articles include author or publisher X links, not Hopkins-controlled account evidence.

**Sources**

- Search performed 2026-05-19; no verified candidate-controlled result captured.

### Pass 7: Other Social Media

**Findings**

- No verified Instagram, TikTok, Reddit, YouTube, Bluesky, or LinkedIn account controlled by Hopkins was confirmed.
- Change.org lists petitions targeting Hopkins as a State Board decision-maker, which is useful as constituent-contact context only.

**Sources**

- https://www.change.org/decision-makers/cathy-hopkins-kansas-state-board-of-education-district-5

### Pass 8: News Coverage

**Findings**

- Hays Post/Kansas Reflector coverage reports Hopkins and other conservative board members discussed streamlining state mandates and focusing on reading, writing, and math.
- The Pitch/Kansas Reflector coverage from 2023 reports Hopkins said regulatory mandates and paperwork could burden districts with modest staffing.
- KMUW/Kansas News Service and KWCH/KSNT coverage report Hopkins's chair role in selecting Jake Steel as commissioner.
- The Sentinel/Kansas Policy Institute coverage criticizes the board's assessment/cut-score decisions and reports Hopkins supported new proficiency standards while rejecting the claim that standards or rigor were being lowered.
- Kansas Reflector coverage reports Hopkins supported a State Board compensation increase after legislative pay changes.
- Lawrence Times/Kansas Reflector coverage reports Hopkins and Beryl New testified neutrally on proposed statewide cellphone-ban legislation while pointing to local policy-making.

**Sources**

- s-hayspost-ksreflector-core-subjects
- s-thepitch-ksreflector-priorities
- s-kmuw-commissioner-steel
- s-ksnt-steel
- s-sentinel-cut-scores
- s-sentinel-proficiency-sb458
- s-kansasreflector-board-pay
- s-lawrence-times-cellphone

### Pass 9: Written Record

**Findings**

- Official written testimony appears in Kansas Legislature records with Hopkins as State Board legislative liaison. Items found: HB 2129 (KPERS 3 to KPERS 2 for teachers), HB 2194 (retired-teacher return-to-work), HB 2468 (opposition to federal/private-school funding diversion), and SB 441 (applied behavior analysis services).
- iVoterGuide contains extensive 2022 candidate questionnaire answers in Hopkins's own words.

**Sources**

- s-hb2129-testimony
- s-hb2194-testimony
- s-hb2468-minutes
- s-hb2468-testimony
- s-sb441-testimony
- s-ivoterguide-hopkins

### Pass 10: Public Meetings & Government Record

**Findings**

- KSDE articles confirm Hopkins as chair, legislative liaison, commissioner-search subcommittee member, and participant in literacy and commissioner-transition actions.
- Legislature minutes for HB 2468 identify Hopkins and Beryl New as State Board legislative liaisons presenting the board's 2026 public-funds-for-public-schools priority.
- Secondary coverage reports a 7-3 State Board vote on new assessment/proficiency standards with Hopkins in support; this should be upgraded to official board minutes/video before final UI if the vote becomes a central action item.

**Sources**

- s-ksde-state-board
- s-ksde-district-5
- s-ksde-jan2025-structured-literacy-chair
- s-ksde-feb2026-literacy
- s-ksde-commissioner-search-subcommittee
- s-ksde-commissioner-finalists
- s-kmuw-commissioner-steel
- s-hb2468-minutes
- s-sentinel-cut-scores

### Pass 11: Religious & Community Involvement

**Findings**

- KSDE biography says Hopkins served at a global ministry headquarters for six years, including three years as executive director of the international association branch.
- iVoterGuide includes Hopkins's 2022 faith self-description and says she identified the Bible as a major influence.
- These are public self-description/biographical data. Do not infer policy positions from faith references beyond what specific questionnaire answers say.

**Sources**

- s-ksde-district-5
- s-ivoterguide-hopkins

### Pass 12: Professional & Association Records

**Findings**

- KSDE biography lists small-business ownership, chamber work, national law-firm administrative training/curriculum work, staff supervision, and ministry-administration experience.
- KSDE District 5 page lists official committee assignments.
- No separate professional license or LinkedIn record was verified.

**Sources**

- s-ksde-district-5

### Pass 13: Endorsements & Political Connections

**Findings**

- iVoterGuide says Hopkins was Republican in the 2022 State Board race and links to a Kansans for Life PAC note that she was pro-life/supports VTB. This was not independently opened in this pass and should remain secondary/linked questionnaire-archive evidence.
- KPDC 2022 finance reports show Ellis County Kansas Republican Party as a contributor.
- No current 2026 endorsements were verified.

**Sources**

- s-ivoterguide-hopkins
- s-kpdc-hopkins-202207

### Pass 14: Archived & Deleted Content

**Findings**

- No deleted/archived candidate site was retrieved.
- BallotReady indicates a verified "Cathy Hopkins" website in its 2022 profile, but this pass did not resolve a durable campaign URL.

**Sources**

- s-ballotready-hopkins

### Pass 15: Community Reputation

**Findings**

- No business reviews or BBB/Glassdoor/Indeed review records were verified for Hopkins.
- Change.org petitions targeting the District 5 State Board member are issue-contact leads only.
- Public commentary from secondary sources is issue-specific and should be mapped to specific board actions rather than treated as a general reputation finding.

**Sources**

- https://www.change.org/decision-makers/cathy-hopkins-kansas-state-board-of-education-district-5
- s-hayspost-ksreflector-core-subjects
- s-sentinel-cut-scores

---

## Issue Mapping

### Statewide K-12 Education Governance

- KSDE pages establish that the State Board sets statewide K-12 policy, standards, licensure, accreditation, and appoints the commissioner.
- Hopkins is current chair and District 5 member.
- District 5 covers Hays-area districts and a wide western/central Kansas footprint.

**Sources**: s-ksde-state-board, s-ksde-district-5, s-sos-candidate-info

### Commissioner Search and Board Leadership

- Board voted to create a search subcommittee including Hopkins.
- KSDE named finalists and quoted Hopkins as chair.
- Secondary coverage reports the board selected Jake Steel, seven of ten supported, and Hopkins provided the release statement.

**Sources**: s-ksde-commissioner-search-subcommittee, s-ksde-commissioner-finalists, s-kmuw-commissioner-steel, s-ksnt-steel

### Literacy, Academic Standards, and Assessments

- KSDE reports structured-literacy licensure work, science-of-reading alignment, and Hopkins's literacy-event comments.
- Secondary coverage reports Hopkins supported new assessment/proficiency standards and disputed the claim that standards/rigor were being lowered.
- Use secondary assessment sources with caveat until primary board minutes are retrieved.

**Sources**: s-ksde-jan2025-structured-literacy-chair, s-ksde-feb2026-literacy, s-sentinel-cut-scores, s-sentinel-proficiency-sb458

### Local Control, Core Academics, and State Mandates

- 2022 questionnaire archive states Hopkins's local-control positions on K-12 funding, academics, parents, Common Core, SEL/sex education opt-in, and federal/state involvement.
- Kansas Reflector/Hays Post and The Pitch coverage reports Hopkins supported streamlining mandates and focusing on core academics.
- Lawrence Times/Kansas Reflector reports Hopkins and Beryl New emphasized district-level policy-making in cellphone-ban testimony.

**Sources**: s-ivoterguide-hopkins, s-hayspost-ksreflector-core-subjects, s-thepitch-ksreflector-priorities, s-lawrence-times-cellphone

### Public-School Funding and School Choice / Voucher-Adjacent Policy

- House Education minutes say Hopkins and Beryl New, as State Board liaisons, stated the Board voted to prioritize only using public funds for public schools.
- They said HB 2468 was counter to that priority by providing funds otherwise available for public schools to families choosing private schools.

**Sources**: s-hb2468-minutes, s-hb2468-testimony

### Teacher Workforce, Licensure, and School Employee Benefits

- Hopkins's official committee assignments include Teacher Vacancy and Supply Committee and Professional Standards Board Liaison.
- Hopkins/Zeck testimony supported moving teachers from KPERS 3 to KPERS 2 and reducing return-to-work barriers for retired teachers.
- KSDE structured-literacy article maps to educator licensure/training.

**Sources**: s-ksde-district-5, s-hb2129-testimony, s-hb2194-testimony, s-ksde-jan2025-structured-literacy-chair

### Student Services / Special Education Administration

- Hopkins/New SB 441 testimony opposed a bill on applied behavior analysis services and cited free appropriate public education and educational-necessity concerns.

**Sources**: s-sb441-testimony

### Campaign Finance and Political Network

- 2026 Hopkins finance record not found; KPDC 2026 index lists other District 5 accounts.
- 2022 Hopkins finance reports show modest local/individual and business donor activity, with largest visible receipts at $1,000.
- Use the 2022 finance record as historical context only.

**Sources**: s-kpdc-edodd-2026, s-kpdc-edodd-2022-index, s-kpdc-hopkins-202207, s-kpdc-hopkins-202210, s-kpdc-hopkins-202301

---

## Key Quotes / Verbatim Excerpts

- SOS candidate information: "A candidate is not considered filed until their petition or declaration and fee is received by the Secretary of State." Source: s-sos-candidate-info.
- KSDE commissioner finalists release quotes Hopkins: "Each finalist brings diverse experience and a shared commitment to advance educational outcomes across Kansas." Source: s-ksde-commissioner-finalists.
- KMUW/KNS quotes Hopkins on Jake Steel: "The board looks forward to working with him to continue the progress underway and keep moving this work forward for Kansas students." Source: s-kmuw-commissioner-steel.
- iVoterGuide 2022 questionnaire: "Effective Government is always closest to the people." Source: s-ivoterguide-hopkins.

---

## Gaps & Missing Information

- Official SOS live candidate-list readback for 2026 District 5 was blocked by JavaScript robot verification.
- No 2026 Hopkins filed-candidate record, campaign committee, or finance report was confirmed.
- No current candidate-controlled 2026 campaign site or social feed was confirmed.
- No public engagement counts, likes, follows, comments, or shares from Hopkins-controlled accounts were captured.
- Direct official KSDE minutes for the assessment/cut-score vote should be retrieved before treating that vote as a central action item in UI.
- Cunningham AT form details were image-only in local extraction, though the official KPDC index confirms her District 5 AT link.

---

## Statistics

- **Total Sources Checked / Logged:** 32
- **Total Sources With Candidate-Specific Findings:** 25
- **Total Unique URLs Captured:** 32
- **Time Period Covered:** 2022-01-01 through 2026-05-19
