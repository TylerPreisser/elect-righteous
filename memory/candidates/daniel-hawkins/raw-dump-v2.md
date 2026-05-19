# Raw Dump v2 - Daniel Hawkins

**Date**: 2026-05-19
**Agent**: codex (deep-scraper equivalent)
**Phase / Stage**: Phase 2, all-candidate deepening, Stage 2.b
**Candidate slug**: daniel-hawkins
**Position**: Kansas Commissioner of Insurance candidate (R)
**Election**: kansas-insurance-2026

---

## Brief

This is an additive v2 scrape focused on primary-source anchors for Daniel Hawkins' 2026 Kansas Commissioner of Insurance profile. Existing local files already contain an older raw dump, a site profile, and a May 11 social harvest. This pass refreshes official status, live campaign copy, KPDC finance, legislative voting/action evidence, and current blockers.

Important correction for later compilers: `danhawkinskansas.com/about/`, used in older local files, now redirects to a Bluehost "Account Suspended!" page. Current issue language should primarily use `hawkinsforinsurance.com`, official legislature records, KPDC records, and documented news/source captures.

---

## Sweep Coverage

| Source | Tier | Reached | Notes |
|---|---|---|---|
| Kansas SOS candidate-information page | primary | yes | Confirms Commissioner of Insurance is elected in 2026 and gives filing rules/deadline. |
| Kansas SOS live candidate list | primary | blocked | `elections_upcoming_candidate.aspx` returned JavaScript/anti-bot page. |
| Douglas County/state candidate filing PDF | government/county export | yes | Lists Daniel Hawkins (R) filed for Commissioner of Insurance on 5/13/2025 for August 4, 2026 primary. |
| KPDC statewide 2026 finance page | primary | yes | Lists Hawkins under Insurance Commissioner Candidates. |
| KPDC appointment of treasurer | primary | yes | Office sought: Insurance Commissioner; executed 5/13/2025. |
| KPDC January 2026 report | primary | yes | Cover totals and issue-relevant contribution categories extracted with `pdftotext`. |
| Kansas Legislature profile | primary | yes | Confirms House Speaker, District 100, Republican, occupation insurance agent. |
| Kansas Legislature vote record / bill pages | primary | yes | 2025 Hawkins vote record; SB 20/SB 360/HB 2043/SB 244 pages and roll calls. |
| Current campaign site | candidate-controlled | yes | Insurance priorities, biography, accomplishments, social links. |
| Older campaign site | candidate-controlled historical | blocked/suspended | Now shows account-suspended page. |
| Social platforms | social | limited | Campaign site links X/Instagram/Facebook; direct full timelines not reliably accessible. |
| News coverage | secondary | yes | Used for PBM maneuvering, redistricting, campaign launch/SSI detail, property-tax and Medicaid context. |

---

## Section 1 - Official Status and Race Scope

### 1.1 Kansas SOS candidate rules and offices

**URL**: https://www.sos.ks.gov/elections/candidate-information.html  
**Tier**: primary  
**Publisher**: Kansas Secretary of State  
**Accessed**: 2026-05-19

Relevant source facts:
- Democratic and Republican candidates run in the primary to secure party nomination.
- Candidates for state office file candidacy with the Secretary of State.
- A candidate is not considered filed until the petition/declaration and fee are received.
- 2026 primary filing deadline: 12:00 p.m. Monday, June 1, 2026.
- Offices to be elected in 2026 include Commissioner of Insurance.
- Commissioner of Insurance filing fee total listed as $2,280.

Issue mapping:
- Official status / ballot context.

Limit:
- The linked live SOS "Candidate List" page returned a JavaScript/anti-bot block in this environment.

### 1.2 Douglas County / State of Kansas candidate filing PDF

**URL**: https://candidatefiling.us/Info/CFPdf?c=118926085287&e=545606222&j=2795522868&s=802933811&st=KS  
**Tier**: government/county export  
**Publisher**: Douglas County candidate filing report, referencing State of Kansas filings  
**Printed**: 2026-05-19 3:52 PM  
**Accessed**: 2026-05-19

Relevant source facts:
- Report heading: "State of Kansas" and "Commissioner of Insurance, State of Kansas."
- Candidate row: Daniel Hawkins (R), Wichita, date filed 5/13/2025, filing method fee.
- Contact row includes `info@hawkinsforinsurance.com` and `hawkinsforinsurance.com`.
- Report identifies "August 4, 2026 Primary Election."
- Footer note says the PDF includes current information provided to Douglas County and that some listed candidates' documents are filed with another county or the Kansas Secretary of State's office.

Issue mapping:
- Candidate filing / primary status.

### 1.3 KPDC statewide 2026 election-cycle page

**URL**: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Accessed**: 2026-05-19  
**Last updated on page**: 2026-01-22

Relevant source facts:
- Page heading: "Kansas State Wide Office - 2026 Election Cycle."
- Under "INSURANCE COMMISSIONER CANDIDATES," the page lists Hawkins, Daniel; Koehn, Ric; Schmidt, Vicki; and Sykes, Dinah.
- Hawkins row links an appointment-of-treasurer form and a 202601 receipts/expenditures report.
- Page includes statutory warning against copying contributor names for commercial use.

Issue mapping:
- Candidate finance / official campaign account / race field.

### 1.4 Appointment of treasurer

**URL**: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DH_AT.pdf  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Executed**: 2025-05-13 10:53:08 AM  
**Accessed**: 2026-05-19

Relevant source facts:
- Candidate name: Daniel Hawkins.
- Office sought: Insurance Commissioner.
- Candidate email: `info@hawkinsforinsurance.com`.
- Treasurer: Mary Eisenhower.
- Candidate signature line: Daniel Hawkins.

Issue mapping:
- Official status / finance administration.

### 1.5 Kansas Legislature profile

**URL**: https://www.kslegislature.gov/b2025_26/legislators/rep_hawkins_daniel_1/  
**Tier**: primary  
**Publisher**: Kansas Legislature  
**Accessed**: 2026-05-19

Relevant source facts:
- Daniel Hawkins is listed as House District 100, Sedgwick County.
- Title: Speaker of the House.
- Party: Republican.
- Spouse: Diane.
- Occupation: Insurance Agent.
- Terms: House 2013-present; House 2025-2026.
- Committee/leadership roles include Leadership, Interstate Cooperation chair, Legislative Coordinating Council chair, Calendar and Printing vice chair, and Legislative Budget (House) on call.

Issue mapping:
- Biography, office, leadership, insurance-industry background.

---

## Section 2 - Candidate-Controlled Campaign Site

### 2.1 Hawkins for Insurance

**URL**: https://www.hawkinsforinsurance.com/  
**Tier**: candidate-controlled  
**Publisher**: Dan Hawkins for Insurance Commissioner  
**Accessed**: 2026-05-19

Relevant source facts:
- The page brands Hawkins as "Pro-Life. Pro-Gun. Pro-Trump. Conservative Republican."
- Title: "DAN HAWKINS FOR INSURANCE COMMISSIONER."
- Accomplishment claims include food sales tax elimination, Social Security income tax elimination, state income tax reduction, state property tax reduction, pro-Second Amendment measures, veto overrides on pro-life bills, girls' sports and gender-transition surgery restrictions, election-integrity veto overrides, opposition to Medicaid/Obamacare expansion, ending COVID lockdowns, sanctuary-city ban, Ike Transportation Plan, budget-process savings, and reduced rules/regulations for small business.
- Insurance priorities: fair/transparent insurance system, reducing unnecessary costs, eliminating bureaucratic obstacles, standing with President Trump, lower insurance costs by increasing options, taxpayer-friendly Kansas Department of Insurance, and protecting Kansans from insurance and securities fraud.
- Biography says Hawkins spent early childhood on a Harper County dairy farm; served in the Kansas Army National Guard; married Diane in 1985; has two daughters and four grandchildren; started first business with his father in 1991; entered insurance in 1995; specialized in employee benefits; has represented House District 100 since 2013; chaired House Health Committee; became Majority Leader in 2019; became Speaker in 2023.
- Footer says paid for by Dan Hawkins for Insurance Commissioner, Mary Jean Eisenhower, Treasurer.
- Site links X, Instagram, and Facebook.

Issue mapping:
- Insurance regulation, taxes/budget, abortion, guns, gender policy, election integrity, immigration, Medicaid/healthcare, COVID authority, biography.

Live-site caution:
- The current page includes stray footer/template text ("ALEN BLANCO HARNANDEZ 2035"). It appears unrelated to candidate policy and should not be treated as candidate messaging without confirmation.

### 2.2 Older Hawkins for Kansas site

**URL**: https://danhawkinskansas.com/about/  
**Tier**: candidate-controlled historical / currently unavailable  
**Accessed**: 2026-05-19

Relevant source facts:
- Current live response redirects to `/cgi-sys/suspendedpage.cgi`.
- The page displays "Account Suspended! Please contact our support team for further assistance."

Issue mapping:
- Source conflict / blocker.

Use note:
- Older local captures can support historical campaign messaging if clearly labeled with capture dates. Do not cite this URL as a live source for current issue copy.

---

## Section 3 - Campaign Finance

### 3.1 KPDC January 2026 receipts/expenditures report

**URL**: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW03DH_202601.pdf  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Report filed**: 2026-01-09 7:38:42 AM  
**Report period**: 2025-01-01 through 2025-12-31  
**Accessed / parsed**: 2026-05-19

Cover totals:
- Cash on hand at beginning of period: $0.00
- Total contributions and other receipts: $417,305.07
- Cash available this period: $417,305.07
- Total expenditures and other disbursements: $33,295.22
- Cash on hand at close of period: $384,009.85
- In-kind contributions: $565.68
- Other transactions: $10,000.00

Schedule D:
- Daniel Hawkins loan dated 2025-05-13: $10,000.00 balance at close of period.

Issue-relevant contribution signals from the public report:
- Insurance / insurance-adjacent: NAIFA Kansas PAC, Shelter Insurance Kansas PAC, Blue Cross Blue Shield of Kansas City PAC, BlueCross BlueShield Kansas, Lockton Management LLC, New Century Insurance Group, Assured Partners, individual donors with insurance occupations/titles.
- Health/pharmaceutical/PBM-adjacent: Pharmaceutical Care Management Association, UnitedHealth Group PAC, CVS Health, Bristol Myers Squibb, Kansas Pharmacists Association PAC, American Society of Anesthesiologists PAC, Kansas Anesthesiologist Assistant PAC, PAC of Kansas Ophthalmologists, KHCAPAC, Recover-Care Healthcare, Elevance Health.
- Other categories visible in sampled pages: rail/transportation, realtors, construction/builders, utilities, tribal entities, lobbying/government affairs, public-affairs firms, labor PAC.

Issue mapping:
- Campaign finance, insurance/PBM conflict context, healthcare/pharmaceutical policy context.

Legal/use note:
- KPDC page includes a statutory warning against copying contributor names for commercial use. This pass uses finance information for public-interest candidate research and avoids bulk reproduction of individual donor lists.

### 3.2 Statement of substantial interest / insurance income

**Source reached**: Kansas Reflector campaign-launch coverage; SOS SSI system not directly retrieved in this pass.  
**URL**: https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/  
**Tier**: secondary  
**Published**: 2025-05-13  
**Accessed**: 2026-05-19

Relevant source facts:
- Kansas Reflector reported Hawkins' April 22 statement of substantial interest disclosed commissions from six insurance companies and payroll from the Hawkins Group and Conrade Insurance Group.
- The same story reported Hawkins' current legislative term expires at the end of 2026 and that he would seek the GOP nomination.

Issue mapping:
- Insurance-industry conflict context.

Blocker:
- Direct SOS SSI filing was not independently retrieved here.

---

## Section 4 - Legislative Record and Issue Anchors

### 4.1 2025 Hawkins vote record

**URL**: https://www.kslegislature.gov/li/b2025_26/members/documents/rep_hawkins_daniel_1_vote_record_2025.pdf  
**Tier**: primary  
**Publisher**: Kansas House of Representatives  
**Printed**: 2025-05-20 02:25 PM  
**Accessed**: 2026-05-19

Selected issue-relevant votes:
- HB 2043 emergency final action amended, 2025-02-07: Hawkins Yea. Subject then concerned insurance commissioner inquiries and rebate pilot programs.
- HB 2052 final action / concurrence, 2025-02-20 and 2025-03-24: Hawkins Yea. Subject included concealed-handgun licensing and off-duty law enforcement entry rules.
- HB 2062 final action / CCR / veto consideration, 2025-02-19, 2025-03-27, 2025-04-10: Hawkins Yea. Subject included child-support orders for unborn children from conception and related tax/medical/pregnancy-expense provisions.
- HB 2016 final action / concurrence, 2025-02-19 and 2025-03-20: Hawkins Yea. Subject included removal of deceased voters from rolls and poll-worker/advance-voting provisions.
- HB 2020 final action / concurrence, 2025-02-06 and 2025-03-20: Hawkins Yea. Subject included reports on certain noncitizens issued driver's licenses.
- HB 2311 final action / concurrence / veto consideration, 2025-02-20, 2025-03-24, 2025-04-10: Hawkins Yea. Subject prohibited DCF policies for placement/custody/custodian appointments conflicting with sincerely held religious or moral beliefs regarding sexual orientation or gender identity and created a right of action.
- SB 29 final action / veto consideration, 2025-03-19 and 2025-04-10: Hawkins Yea. Subject removed local health officer authority to prohibit public gatherings for infectious/contagious disease control.
- SB 63 final action / veto consideration, 2025-01-31 and 2025-02-18: Hawkins Yea. Subject was the Help Not Harm Act restricting gender-transition care for minors and related state funding/liability/professional discipline provisions.

Issue mapping:
- Abortion, family/gender policy, religious liberty, guns, election integrity, immigration, public health authority, insurance.

### 4.2 SB 20 and SB 360 - pharmacy benefit managers / prescription-drug costs

**SB 20 URL**: https://kslegislature.gov/b2025_26/bills/sb20/  
**SB 360 URL**: https://kslegislature.gov/b2025_26/bills/sb360/  
**Tier**: primary  
**Publisher**: Kansas Legislature  
**Accessed**: 2026-05-19

SB 20 official facts:
- Short title: Enacting the Kansas consumer prescription protection and accountability act and providing for regulation and registration of pharmacy benefits managers.
- Status: Signed by Governor.
- Conference committee report dated 2026-03-23.
- Associated bill: SB 360.

SB 360 official facts:
- Same short title: Enacting the Kansas consumer prescription protection and accountability act and providing for regulation and registration of pharmacy benefits managers.
- Status: Died.
- Bill history includes 2026 committee movements including withdrawal/rereferral between House committees.
- Testimony included Kansas Department of Insurance proponent testimony, independent pharmacy proponent testimony, and opponent testimony from Blue Cross and Blue Shield of Kansas, Kansas Chamber, Pharmaceutical Care Management Association, Prime Therapeutics, and others.

Secondary context:
- KMUW/High Plains Public Radio reported the PBM bill language was inserted into SB 20 during a conference committee hearing and passed the House 104-17.
- The same report said SB 360 was the original bill and that it had appeared Hawkins would make sure the bill did not move forward that session.
- Heartland Signal reported Republicans joined Democrats to pass the PBM bill despite Hawkins' opposition and linked that opposition to his 30 years in insurance.

Issue mapping:
- Insurance regulation, prescription-drug costs, legislative process, potential conflict context.

Narrative caution:
- Use official pages for bill status and secondary reporting for claims about Hawkins' maneuvers or opposition. Do not state motive.

### 4.3 HB 2043 - property tax protest petition

**URL**: https://www.kslegislature.gov/b2025_26/bills/hb2043/  
**Tier**: primary  
**Publisher**: Kansas Legislature  
**Accessed**: 2026-05-19

Relevant source facts:
- Current short title: Providing a protest petition to contest certain increases in property tax revenues and continuing reimbursements from the taxpayer notification costs fund for an additional five years.
- Status: Vetoed by Governor.
- Enrolled version dated 2026 session.
- Earlier bill versions involved insurance commissioner inquiry deadlines and rebate pilot programs before conference-committee content changes.

Secondary context:
- WIBW/Kansas Reflector and other local outlets quoted Hawkins criticizing the veto and framing HB 2043 as a taxpayer voice/property-tax bill.

Issue mapping:
- Taxes / property tax / legislative process.

### 4.4 SB 244 - biological sex / public spaces / IDs

**Final action vote URL**: https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260128172436_774228/  
**Bill URL**: https://www.kslegislature.gov/b2025_26/bills/SB244/  
**Tier**: primary  
**Publisher**: Kansas Legislature  
**Accessed**: 2026-05-19

Relevant source facts:
- House emergency final action on 2026-01-28 passed 87-36; Hawkins appears in the yea column.
- Bill description: identification of biological sex; sex-designated multiple-occupancy private spaces in public buildings; criminal and civil penalties; cause of action; Women's Bill of Rights amendments; gender definition as biological sex at birth for statutory construction; driver's license and birth certificate corrections; Help Not Harm Act amendment.
- Search-indexed official veto-override page (`je_20260218120124_975402`) also lists Hawkins in the yea column for the 2026-02-18 House motion to override veto.

Issue mapping:
- Marriage/family/LGBTQ+ policy, gender policy, public facilities, state IDs.

### 4.5 Redistricting / leadership governance

**KCUR/The Beacon URL**: https://www.kcur.org/politics-elections-and-government/2026-01-06/kansas-republicans-redistricting-congress-sharice-davids  
**Tier**: secondary  
**Published**: 2026-01-06  
**Accessed**: 2026-05-19

Relevant source facts:
- KCUR/The Beacon reported Hawkins said redistricting was a priority but that Republicans were about 20 votes short of overriding a veto on maps affecting the Kansas City-area congressional district.
- Article reported Gov. Laura Kelly had vowed to veto such a bill.

**Kansas Reflector / News From The States URL**: https://kansasreflector.com/2025/11/07/kansas-house-speaker-punishes-gop-colleagues-for-not-supporting-special-session/  
**Tier**: secondary  
**Published**: 2025-11-07  
**Accessed**: 2026-05-19 via search snippet; direct page returned 403 in this environment.

Relevant source facts from search result:
- Kansas Reflector reported Hawkins stripped three Republican colleagues of committee chairmanships after they refused to sign a petition calling for a special legislative session to redraw congressional boundaries.

Issue mapping:
- Governance / legislative leadership / redistricting.

Blocker:
- Direct Kansas Reflector page fetch returned 403. Use a reachable syndication if compiler needs full article text.

---

## Section 5 - Social / Online Signals

### 5.1 Local social harvest

**Local file**: `memory/candidates/daniel-hawkins/social-harvest.md`  
**Tier**: local prior scrape / social  
**Captured**: public material visible through 2026-05-11  
**Reviewed**: 2026-05-19

Relevant captured facts:
- Current campaign site, older campaign site, X account, Facebook embedded feed, Instagram link, and YouTube channel were identified.
- Topic-share count from 27 public items emphasized conservative/Trump/GOP alignment, anti-Kelly contrast, taxes/budget/property tax relief, insurance affordability/consumer navigation/anti-fraud, abortion/family/religious liberty/gender policy, law-and-order/child welfare/public safety/seniors, immigration/election integrity/COVID authority, and economic development/workforce/transportation.
- Direct X/Facebook/Instagram engagement counts were not consistently public due platform access limits.

Refresh:
- The older site that exposed the embedded Facebook feed is now suspended. Any Facebook-feed observations from that local harvest should carry the 2026-05-11 capture date and not be presented as live current content.

Issue mapping:
- Social/online evidence for each issue area; not a proxy for private belief.

### 5.2 Current live links

**URL**: https://www.hawkinsforinsurance.com/  
**Tier**: candidate-controlled  
**Accessed**: 2026-05-19

Relevant source facts:
- Footer links X, Instagram, and Facebook.
- Direct content harvest remains limited to campaign-site copy; direct platform timelines were not compiled here.

---

## Sources Index

Primary / official:
- Kansas SOS candidate information: https://www.sos.ks.gov/elections/candidate-information.html
- KPDC statewide 2026 filings: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm
- KPDC Hawkins appointment of treasurer: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DH_AT.pdf
- KPDC Hawkins January 2026 report: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW03DH_202601.pdf
- Kansas Legislature Hawkins profile: https://www.kslegislature.gov/b2025_26/legislators/rep_hawkins_daniel_1/
- Hawkins 2025 vote record: https://www.kslegislature.gov/li/b2025_26/members/documents/rep_hawkins_daniel_1_vote_record_2025.pdf
- SB 20: https://kslegislature.gov/b2025_26/bills/sb20/
- SB 360: https://kslegislature.gov/b2025_26/bills/sb360/
- HB 2043: https://www.kslegislature.gov/b2025_26/bills/hb2043/
- SB 244 final action vote: https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260128172436_774228/
- Douglas County/state candidate filing PDF: https://candidatefiling.us/Info/CFPdf?c=118926085287&e=545606222&j=2795522868&s=802933811&st=KS

Candidate-controlled:
- Hawkins for Insurance: https://www.hawkinsforinsurance.com/
- Older Hawkins for Kansas about page, now suspended: https://danhawkinskansas.com/about/

Secondary:
- Kansas Reflector campaign launch / SSI detail: https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/
- KMUW / HPPR PBM bill report: https://www.kmuw.org/government/2026-03-26/kansas-house-passes-bill-providing-stricter-regulation-of-prescription-drug-middlemen
- Heartland Signal PBM article: https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bill/
- KCUR/The Beacon redistricting article: https://www.kcur.org/politics-elections-and-government/2026-01-06/kansas-republicans-redistricting-congress-sharice-davids
- Kansas Reflector redistricting/committee-chair article: https://kansasreflector.com/2025/11/07/kansas-house-speaker-punishes-gop-colleagues-for-not-supporting-special-session/

Local prior scrape:
- `memory/candidates/daniel-hawkins/social-harvest.md`
- `memory/candidates/daniel-hawkins/raw-dump.md`
- `memory/candidates/daniel-hawkins/site-profile.md`

---

## Blockers / Could Not Confirm

- Live SOS filed-candidates list was inaccessible because of JavaScript/anti-bot protection.
- Direct SOS statement-of-substantial-interest filing was not retrieved; insurance-commission/payroll detail comes from Kansas Reflector reporting.
- Current direct X/Facebook/Instagram/YouTube post inventories and engagement counts were not reliably accessible without platform login/script execution.
- Older `danhawkinskansas.com` source is now suspended.
- Full 2026 per-member vote record PDF for Hawkins was not found; individual 2026 vote pages were used where available.
- No verified current church affiliation found.
