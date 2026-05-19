# Raw Dump v2 - Vernon Ruder Jr.

**Date**: 2026-05-19  
**Agent**: codex (deep-scraper equivalent)  
**Phase / Stage**: Phase 2 individual v2 pass  
**Candidate slug**: `vernon-ruder-jr`  
**Position**: Ellis County Treasurer  
**Election**: Ellis County current officeholder; last re-elected 2024

## Scope Note

This is an additive Phase 2 scrape for Vernon Ruder Jr. It uses existing local memory in `memory/candidates/vernon-ruder-jr/`, then verifies against current official pages and accessible news records. The pass prioritizes official county/KCTA/election/budget records, then Hays Post candidate-attributed reporting, then social/online presence. It does not use inaccessible or unverified social content, and it does not infer beliefs from family, school, or church-adjacent context.

## Source Tiers Used

- **Primary**: Ellis County official pages, staff directory, official election-results index, commission minutes, county budget book, Kansas County Treasurers Association, KPDC/Kansas county-office campaign-finance guidance.
- **Secondary**: Hays Post candidate profile, signed letter publication, election-night reporting, office-policy reporting, salary/oath/civic-event coverage.
- **Social / online**: No verified candidate-controlled social post corpus. Online signal is limited to official profiles/directories and candidate-attributed local coverage.

## Source Registry

### s-ellis-treasury

- **Tier**: primary
- **URL**: https://www.ellisco.net/566/Treasury
- **Publisher**: Ellis County, Kansas
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - The treasurer office handles tax billing, collection, and distribution for the state, county, cities, and other taxing entities.
  - The treasurer also handles other county monies directed by law to the treasurer.
  - The office acts as agent for the Kansas Department of Revenue, Division of Motor Vehicles, for titling, registration, and other motor-vehicle transactions for Ellis County residents.
  - The page lists QLess options: SMS text, mobile app, home kiosk link, and office kiosk with estimated wait times.
  - Contact block lists Vernon Ruder Jr. as treasurer.
- **Issue mapping**: office duties; motor-vehicle administration; customer-flow modernization.

### s-ellis-staff-directory

- **Tier**: primary
- **URL**: https://www.ellisco.net/directory.aspx?EID=129
- **Publisher**: Ellis County, Kansas
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Staff directory lists Vernon Ruder Jr.; title: Treasurer.
  - Provides office phone, address, fax numbers, and public office hours.
- **Issue mapping**: official status.

### s-kcta-ellis

- **Tier**: primary
- **URL**: https://kansastreasurers.org/index.php/directory/ellis-county/
- **Publisher**: Kansas County Treasurers Association
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Lists Vernon Ruder Jr. for Ellis County.
  - Says he took office in 2021.
  - Lists county population 28,452, office contact information, office hours, and services including online tax payments, escrow/partial payment programs, ACH/wire property-tax payments, notary services, and 24-hour drop box.
- **Issue mapping**: official status; service menu; access.

### s-ellis-election-results-index

- **Tier**: primary
- **URL**: https://www.ellisco.net/435/Election-Results
- **Publisher**: Ellis County, Kansas
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Official county page links 2024 General Election Official Results, 2024 Primary Official Results, 2020 General Election Official Results, and 2020 Primary Election Official Results.
  - The result PDFs were not cleanly text-extractable for the relevant treasurer lines in this pass, but the official index establishes the county source location.
- **Issue mapping**: election record; official source path.

### s-ellis-2025-budget-book

- **Tier**: primary
- **URL**: https://www.ellisco.net/DocumentCenter/View/5645/2025-Budget-Book
- **Publisher**: Ellis County, Kansas
- **Accessed**: 2026-05-19
- **Document context**: 2025 budget, adopted 2024-09-10.
- **Relevant facts/paraphrase**:
  - County administrator letter says 2025 budget was adopted September 10, 2024.
  - Lists county government and elected county positions, including county treasurer.
  - Dept. 24 - Treasurer identifies responsible party as Vernon Ruder Jr., County Treasurer.
  - 2025 proposed Treasurer lines include interest on investments at $1,600,000, elected official salary at $78,271, classified employees at $262,651, and 2025 proposed revenue total for the department at approximately negative $1,605,175.
- **Issue mapping**: treasury budget; investment/revenue administration; salary context.

### s-ellis-minutes-2024-07-18

- **Tier**: primary
- **URL**: https://ellisco.net/AgendaCenter/ViewFile/Minutes/_07182024-611
- **Publisher**: Ellis County, Kansas
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Minutes state Treasurer Vern Ruder presented the Treasury budget.
  - He asked to transfer one salary out of General and take another salary out of Motor Vehicle, increasing the general fund budget by about $20,000.
  - Minutes record discussion of contractual fees, interest, and an unbalanced escrow account.
  - Ruder said about $20 million was tied up for interest.
- **Issue mapping**: budget presentation; transparency/financial operations.

### s-kpdc-campaign-finance-overview

- **Tier**: primary
- **URL**: https://kpdc.kansas.gov/campaign-finance/
- **Publisher**: Kansas Public Disclosure Commission
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - KPDC administers the Campaign Finance Act for state offices and local offices including county offices.
  - Candidates for local office file Appointment of Treasurer forms with the county clerk/county election commissioner.
  - Candidates/committees must file either an affidavit of exemption or periodic receipts and expenditures reports, as applicable.
- **Issue mapping**: campaign finance filing expectations; donor/funding caveat.

### s-kansas-county-office-cf-forms

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAForms/CountyForms.htm
- **Publisher**: Kansas.gov / KPDC forms
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - County-office candidates must appoint a treasurer or candidate committee not later than 10 days after becoming a candidate.
  - Affidavit of exemption may be filed if the candidate anticipates receiving and spending less than $1,000 in the primary period and less than $1,000 in the general period.
  - Page lists county-office receipts and expenditures report forms and schedules.
- **Issue mapping**: campaign finance filing expectations; donor/funding caveat.

### s-hayspost-profile-2020

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4
- **Publisher**: Hays Post
- **Published**: 2020-07-31
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Profile says Ruder was head of Ellis County solid waste division/landfill for three years, previously worked as financial advisor and E.A. Sween district manager.
  - Ruder said he ran after seeing turnover and spending issues in the treasurer office and believed he could decrease spending and increase efficiencies.
  - He said the landfill had a $1.2 million budget, ran only on collected fees, and did not receive taxpayer money.
  - He proposed after-hours kiosk access for tags/taxes and an app for wait times.
  - He said he would present monthly financial reports to commissioners about where money was and how it was invested.
  - He said he would be a working elected official, learn every job, and avoid conflict.
  - Article reports Schlegel attacked him over Mason Ruder's county work/city commission role; Ruder and Public Works Director Bill Ring disputed nepotism claims and described equal-level division-head roles.
- **Issue mapping**: campaign biography; efficiency; customer flow; transparency; family-network conflict context.

### s-hayspost-ruder-letter-2020

- **Tier**: secondary / candidate-authored
- **URL**: https://hayspost.com/posts/3a069c69-9317-434a-8454-26da7a61d342
- **Publisher**: Hays Post
- **Published**: 2020-10-13
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Signed by Vern Ruder as Republican candidate for Ellis County Treasurer.
  - Ruder thanked primary voters and described bringing "30+ years" of private-sector knowledge to county work.
  - He described growing up in Hays, raising his family there, graduating from Thomas More Prep and NCK-Tech, financial-advisor work, Pepsi sales, and E.A. Sween district manager work.
  - The accessible page confirms the early biographical section; existing local memory captured additional policy claims from this letter.
- **Issue mapping**: candidate biography; candidate-controlled message; local roots.

### s-hayspost-mv-fee-2023

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494
- **Publisher**: Hays Post
- **Published**: 2023-11-20
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports Ellis County Treasurer Vern Ruder implemented a $2.50 fee for walk-in customers for each title registration renewal transaction.
  - Ruder said Kansas allows county treasurers to use a facility fee to fund motor-vehicle operations.
  - Ruder said the state no longer purchases the office's computers or printers.
  - Ruder said the motor-vehicle department should be funded with motor-vehicle money and framed this as reducing burden on property taxpayers.
  - He estimated the added fee would probably generate more than $50,000 that year.
  - Hays Post reported he recently told commissioners he reduced the treasury budget from $452,000 in 2022 to $367,000 in 2023, an $85,000 reduction.
  - Article says residents can avoid the walk-in fee by using the drop box; online credit-card payments carry a 2.5 percent fee.
- **Issue mapping**: motor-vehicle facility fee; property-tax/user-fee framing; budget claims.

### s-hayspost-2020-results

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/fd0105da-9c9e-469c-a595-d2221ee9b2fb
- **Publisher**: Hays Post
- **Published**: 2020-11-04
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Preliminary results, pending canvass, from Ellis County Clerk's office.
  - Ellis County Treasurer: Vernon Ruder Jr., R, 8,517; Julie Mercer, D, 2,871; write-ins, 1,528.
- **Issue mapping**: election history.

### s-hayspost-2024-results

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496
- **Publisher**: Hays Post
- **Published**: 2024-11-06
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Preliminary all-precinct results, pending canvass.
  - Registered voters: 20,431; ballots cast: 13,297; turnout: 65.08%.
  - Ellis County Treasurer: incumbent Vernon Ruder Jr., R, 11,278.
  - No opponent listed for county treasurer in the article.
- **Issue mapping**: 2024 re-election; public mandate.

### s-hayspost-oath-2025

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/769b9cc3-43f2-4772-9389-e5a962d9a36a
- **Publisher**: Hays Post
- **Published**: 2025-10-13
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports Ellis County Clerk Bobbi Dreiling administered the oath of office to re-elected County Treasurer Vern Ruder.
  - Says Ruder was re-elected in November 2024.
- **Issue mapping**: officeholder timeline; re-election confirmation.

### s-hayspost-tmp-voter-event-2024

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/2cb7cdcf-1199-4696-8356-6849a960b247
- **Publisher**: Hays Post
- **Published**: 2024-02-22
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Ruder was one of several officials at a TMP-Marian junior high mock election/voter education event.
  - He told students voting can make a difference in county and city government by putting people in office who can do a good job.
- **Issue mapping**: civic education; public statements.

### s-hayspost-hms-voter-event-2024

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/fd6be90b-bcb4-49d7-bf9a-20194a876c3c
- **Publisher**: Hays Post
- **Published**: 2024-09-30
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Hays Middle School voter event panel included Vernon Ruder, Mason Ruder, Ruth Ruder, and other local officials.
  - Story identifies Vernon as Mason Ruder's father and Ruth Ruder as Mason's mother.
  - Ruder recommended students get involved in community and local politics early.
- **Issue mapping**: civic education; family-office context.

### s-hayspost-salary-2026

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6
- **Publisher**: Hays Post
- **Published**: 2026-01-13
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Reports Ellis County Commission approved a resolution increasing elected-official step salaries for 2026 after a countywide pay study and 2024 compensation policy.
  - County treasurer salary listed at $81,828, up from $78,271 in 2025.
- **Issue mapping**: salary context; not a Ruder action.

## Issue Notes

### Treasurer Office Administration

The most reliable baseline is official: Ruder is the current treasurer, the office collects/distributes taxes and handles motor-vehicle work, and KCTA lists him as taking office in 2021. This office is administrative rather than legislative, so most public evidence concerns service design, budget presentation, fees, and elections rather than ideological issue positions.

### Motor-Vehicle Facility Fee

The strongest policy-action story is the $2.50 walk-in fee for title/registration renewal transactions. It is not framed by Ruder as anti-fee; it is framed as a service-user fee to fund the motor-vehicle department and reduce reliance on property taxpayers. Hays Post quotes are direct enough for "in their own words," but independent primary verification of the budget effect should be added before using the claimed $85,000 reduction as final outcome language.

### Customer Flow

There is a clean before/after pattern but not a complete causation record:

- 2020 profile: Ruder proposed after-hours kiosk access and a wait-time app.
- Current Ellis County Treasury page: office uses QLess by text, app, home kiosk link, and office kiosk.

The safe phrasing is "the office now offers..." or "official page now describes..." rather than "Ruder implemented..." unless a county implementation record is later found.

### Transparency / Budget

Ruder campaigned on monthly reporting and budget transparency. Primary county minutes show him presenting the Treasury budget in July 2024 and discussing interest, salary allocation, contractual fees, and escrow. The 2025 budget book confirms the treasurer department is attached to him as responsible party and shows investment-interest revenue lines.

### Election Record

The official county result index confirms where official result PDFs live, but text extraction was weak. Hays Post provides the clean extracted election-night numbers:

- 2020 general: Ruder 8,517; Julie Mercer 2,871; write-ins 1,528.
- 2024 general: incumbent Ruder 11,278; no opponent listed.

The old memory claim that he defeated Mercer in 2024 should be corrected to 2020.

### Civic Education

Ruder appears in two 2024 youth voter-education stories. The comments are not policy-heavy but show a repeated public-service message around voting and local involvement.

### Family Network

Hays Post directly identifies Vernon as Mason Ruder's father and Ruth Ruder as Mason's mother in the 2024 Hays Middle School voter event article. The 2020 candidate profile also records campaign conflict over Mason's county employment and city role, with Ruder/Bill Ring denying nepotism and describing equal-level division-head status. This belongs under context/gaps/conflicts, not as an issue card alleging wrongdoing.

## Donor / Funding Info

- KPDC says county offices are covered by Kansas campaign finance law, but local-office Appointment of Treasurer forms are filed with the county clerk/county election commissioner.
- Kansas county-office forms allow an affidavit of exemption from receipts/expenditures reports if a candidate expects under $1,000 in receipts and under $1,000 in expenditures in each election period.
- No Ruder donor list, receipts/expenditures report, current campaign committee, fundraising page, or campaign website was located online.
- Actionable next step: request Ruder's 2020 and 2024 campaign-finance file from Ellis County Election Office / County Clerk.

## Public Statements / In Their Own Words

- 2020 candidate profile: Ruder said he could decrease spending and increase efficiencies in the treasurer office.
- 2020 candidate profile: Ruder said he ran the landfill like it was his own money.
- 2020 candidate profile: Ruder proposed kiosk/wait-time technology.
- 2020 candidate profile: Ruder said a financial report would lay out the county's money and investments.
- 2020 candidate profile: Ruder said he solves problems and does not create conflict.
- 2020 signed letter: Ruder described himself as bringing a fresh eye and 30-plus years of private-sector knowledge.
- 2023 motor-vehicle fee article: Ruder said state law allows county treasurers to help fund motor-vehicle operations with a facility fee.
- 2023 motor-vehicle fee article: Ruder said the motor-vehicle department should be funded with motor-vehicle money.
- 2024 TMP event: Ruder said voting can make a difference in county and city government by putting competent people in office.
- 2024 Hays Middle School event: Ruder recommended early involvement in community and local politics.

## Social / Online Signals

### Verified / usable

- Official Ellis County Treasury page and staff directory.
- KCTA directory page.
- Hays Post candidate-attributed record.
- Hays Post published candidate-authored 2020 letter.

### Not verified

- Current campaign website.
- Current campaign Facebook page.
- Public personal Facebook profile usable for civic/political activity.
- LinkedIn activity.
- X/Twitter, Instagram, Threads, Bluesky, TikTok, YouTube, Substack, Reddit, or podcast feed.
- Public follows, likes, comments, shares, reposts, or follower counts.

### Interpretation guardrail

Because no usable social post corpus was verified, do not build issue evidence from social media. The absence of public social presence is an online signal about campaign visibility, not proof of privacy preferences, lack of engagement, or voter support.

## Gaps / Conflicts

- Official result PDFs need manual visual extraction/OCR if final vote totals must be primary-only.
- 2023 budget-reduction claim should be corroborated with county budgets/minutes before final outcome language.
- Campaign finance records likely require county-file retrieval; no online donor ledger surfaced.
- Ruder's current church/parish membership was not verified.
- No current campaign platform or website was found.
- No public social engagement metrics were found.
- Family-network context is public and relevant but must stay descriptive and non-accusatory without additional evidence.

## Resolved Source IDs

- s-ellis-treasury
- s-ellis-staff-directory
- s-kcta-ellis
- s-ellis-election-results-index
- s-ellis-2025-budget-book
- s-ellis-minutes-2024-07-18
- s-kpdc-campaign-finance-overview
- s-kansas-county-office-cf-forms
- s-hayspost-profile-2020
- s-hayspost-ruder-letter-2020
- s-hayspost-mv-fee-2023
- s-hayspost-2020-results
- s-hayspost-2024-results
- s-hayspost-oath-2025
- s-hayspost-tmp-voter-event-2024
- s-hayspost-hms-voter-event-2024
- s-hayspost-salary-2026
