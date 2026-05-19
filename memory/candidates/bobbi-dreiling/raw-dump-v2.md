# Bobbi Dreiling - Raw Dump V2 (Primary-Tier Deep Scrape)

**Candidate slug:** bobbi-dreiling
**Office:** Ellis County Clerk / Election Officer (Republican incumbent)
**Election:** `ellis-county-incumbents-off-cycle`; county clerk was reelected November 5, 2024 and is not listed as a 2026 county-clerk race.
**Date written:** 2026-05-19
**Agent:** Codex Worker 38, deep-scraper equivalent
**Source basis:** Existing `raw-dump.md`, `site-profile.md`, `social-harvest.md`, `in-their-own-words.md`, and `ui/src/data/v2/bobbi-dreiling.ts`, then targeted verification from official Ellis County pages, official county PDFs/packets, Kansas county-clerk directories, KPDC guidance, Hays Post, Tiger Media Network, Kansas Reflector, and ACLU of Kansas.

---

## Executive correction for downstream agents

Older shared research contains a dangerous same-name conflation: a BobJane "Bobbi" Dreiling obituary was used to infer that the Ellis County Clerk had died in October 2024 and to assign a Catholic faith profile. That conflicts with current official Ellis County pages, the 2024 post-election interview, 2025 election notices, 2026 commission packets, and county clerk/election-official listings naming Bobbi L. Dreiling as the active clerk/election officer.

**Do not use the obituary for this candidate.** Do not carry forward "Roman Catholic (devout)," a parish, a death note, or obituary biography. Current church affiliation remains unverified.

---

## Official current status and election cycle

### Record 1 - Current county clerk page

- **Date accessed:** 2026-05-19
- **URL:** https://ellisco.net/93/Clerk
- **Source tier:** PRIMARY
- **What it confirms:** Bobbi L. Dreiling is listed as County Clerk with county email, address, phone, and hours. The page says county clerk is an elected four-year office and lists clerk duties.
- **Relevant official duties from page:** secretary to Board of Commissioners; tax-roll certification; county commission minutes; election officer conducting Ellis County elections; budgetary accountant/accounts payable; setting tax levies; issuing orders approved by the board.
- **Use in v2:** Current status; county-clerk duties; property-tax administration; election administration.

### Record 2 - Current county election page

- **Date accessed:** 2026-05-19
- **URL:** https://ellisco.net/425/Election
- **Source tier:** PRIMARY
- **What it confirms:** Bobbi L. Dreiling is listed as County Clerk/Election Official. The page gives voter registration, advance voting, VoterView, mail-ballot, and election contact information.
- **Use in v2:** Current election-official status; public voter-access resources; advance voting and VoterView.

### Record 3 - 2026 Primary Candidate Filings

- **Date accessed:** 2026-05-19
- **URL:** https://www.ellisco.net/626/Candidate-Filings
- **PDF URL:** https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings
- **Source tier:** PRIMARY
- **What it confirms:** The 2026 primary filings PDF lists Commission District 1, township clerk offices, Ellis City Council, and precinct committee offices. County clerk is not listed as a 2026 candidate office.
- **Use in v2:** Official status: off-cycle incumbent, not a 2026 county-clerk ballot candidate.

### Record 4 - 2024 official county clerk result

- **Date accessed:** 2026-05-19
- **URL:** https://www.ellisco.net/435/Election-Results
- **PDF URL:** https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results
- **Source tier:** PRIMARY
- **What it confirms:** Official Ellis County 2024 general results list County Clerk: REP Bobbi L. Dreiling 10,211; DEM Laura Allen 3,060; write-in totals 12.
- **Use in v2:** Use official totals rather than election-night unofficial Hays Post totals.
- **Extraction note:** Local `pdftotext` did not extract this PDF cleanly because of encoding, but the official PDF and indexed official-result text show the county clerk table.

### Record 5 - Kansas County Clerks and Election Officials Association

- **Date accessed:** 2026-05-19
- **URL:** https://www.kcceoa.org/county-clerks/northwest
- **Source tier:** PRIMARY/professional directory
- **What it confirms:** The Northwest district listing names Bobbi Dreiling as Ellis County Clerk and says "In office since: 2021."
- **Use in v2:** Tenure start date cross-check.

---

## Primary-source action evidence

### Action 1 - Signed voter-registration close-of-books notice

- **Date:** 2025-08-20
- **URL:** https://www.ellisco.net/DocumentCenter/View/5797/Close-of-Books-Notice-of-Places---Copy
- **Source tier:** PRIMARY
- **Action:** Dreiling signed a close-of-books notice as Ellis County Clerk/Election Officer. The notice says voter registration closes 21 days before every election, gives the county election officer address and phone number, and says application forms are available from the election officer.
- **Issue mapping:** Voter registration / election administration / public notice.

### Action 2 - Published public DS200 scanner demonstration notice

- **Date:** 2025-10-06 demonstration date; public notice captured 2026-05-19
- **URL:** https://www.ellisco.net/DocumentCenter/View/5809/public-test
- **Source tier:** PRIMARY
- **Action:** The public announcement says a public demonstration of the DS200 election ballot scanner would take place at 8:30 a.m. October 6, 2025, in the Administrative Building Commission Chambers, signed by Bobbi L. Dreiling, Ellis County Clerk/Election Officer.
- **Issue mapping:** Election security / equipment transparency.

### Action 3 - Placed "I Voted" sticker contest before county commission

- **Date:** 2026-02-03
- **URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_02032026-726
- **Source tier:** PRIMARY
- **Action:** Dreiling presented an informational agenda item for a student-designed "I Voted" sticker contest. Her letter invited grades 6-12 to submit original, nonpartisan designs and said the contest could inspire future voters and help teachers incorporate civics lessons.
- **Issue mapping:** Voter education / civic outreach.
- **Key detail:** The packet says the design must include "I Voted" or "I Voted in Ellis County" and that AI-generated designs are not allowed.

### Action 4 - Reported "I Voted" sticker contest results

- **Date:** 2026-04-07
- **URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_04072026-741
- **Source tier:** PRIMARY
- **Action:** Dreiling reported the contest results: 39 entries from USD 432, 20 from the 6th grade of USD 388, and one from USD 489. She selected three designs after county employees picked winning designs.
- **Issue mapping:** Voter education / civic outreach.

### Action 5 - Presented 2024 provisional ballots to canvassing board

- **Date:** 2024-11-18/2024-11-19 coverage
- **URL:** https://hayspost.com/posts/0c4a7379-b39d-4948-a0f3-91abbf78b149
- **Source tier:** SECONDARY, reporting on official canvass
- **Action:** Hays Post reported Dreiling presented 309 provisional ballots to the canvassing board; 224 were accepted and counted, 81 were rejected because voters were not registered in Ellis County, and four were rejected because voters did not live in Ellis County. No races changed after provisional ballots.
- **Issue mapping:** Election administration / canvass / provisional ballots.
- **Upgrade path:** Find the official county canvass minutes if a primary record is required for this action.

### Action 6 - Reelection result and post-election continuity statement

- **Date:** 2024-11-05 election; 2024-11-06 reporting
- **Official result URL:** https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results
- **Hays Post URL:** https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78
- **Source tier:** PRIMARY for official result; SECONDARY/direct quote for post-election remarks
- **Action:** Dreiling won reelection. Hays Post reported election-night unofficial results and quoted Dreiling saying she would continue her current office approach and continue to look at voter turnout.
- **Issue mapping:** Official status / voting access debate / election administration.

---

## Secondary/direct-quote issue evidence

### Election security and accuracy

- **Hays Post 2024 profile:** https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3
- **Tiger Media forum coverage:** https://tigermedianet.com/?p=82423
- **Key captured facts:**
  - Dreiling said she had run eight elections with perfect counts, audits, and recounts.
  - She cited paper ballots, ADA ExpressVote paper output, poll-worker training, equipment testing, post-election audits, and matching ballot counts.
  - She said she had no proof of election fraud and invited people to come see Ellis County's process.
  - Tiger Media reported her saying Ellis County elections had been free, fair, and secure and that tax/value-setting work had been done with 100 percent accuracy.

### Voting access / FHSU polling location

- **Kansas Reflector:** https://kansasreflector.com/2023/11/06/students-county-clerk-embroiled-in-monthslong-clash-over-fort-hays-polling-location/
- **ACLU of Kansas:** https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/
- **Hays Post 2024 profile:** https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3
- **Hays Post post-election:** https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78
- **Key captured facts:**
  - Dreiling closed the 601 Main polling site near FHSU, citing low voter turnout.
  - Another site was closed for ADA issues; the combined precincts moved to Messiah Lutheran Church.
  - Dreiling's stated rationale included cost, eligible-voter numbers, parking/navigation, and whole-precinct service.
  - Students and the ACLU argued for an FHSU campus polling place and delivered a petition in April 2024.
  - After reelection, Dreiling said she would continue to look at voter turnout.

### Drop boxes / access channels

- **Hays Post 2024 profile:** https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3
- **Official election page:** https://ellisco.net/425/Election
- **Key captured facts:**
  - Dreiling implemented Saturday early voting and text/email election notifications.
  - Dreiling removed offsite drop boxes in Ellis and Victoria, citing required security procedures, bipartisan staffing/key handling, zero observed usage in a November 2023 test, and budget limits.
  - The county administration-center drop box remained and was fitted with a camera that allowed 24/7 access, per Hays Post reporting.
  - The official election page directs voters to advance voting, mail-ballot applications, and VoterView.

### Property tax and revenue-neutral-rate administration

- **Official clerk page:** https://ellisco.net/93/Clerk
- **Revenue Neutral Rate page:** https://www.ellisco.net/729/Revenue-Neutral-Rate
- **Hays Post 2024 profile:** https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3
- **Key captured facts:**
  - Official duties include certifying tax rolls, setting tax levies, and budgetary accounting/accounts payable.
  - Dreiling said she handled July and November abstracts, mill levy, and revenue-neutral-rate work before becoming clerk.
  - Dreiling said she was the first Ellis County clerk to prepare revenue-neutral-rate mailings.

---

## Social / online relevance

Dreiling's visible online footprint is low-surface and official. The strongest current sources are county pages, county election notices, official packets, and local reporting quoting her. A campaign Facebook page exists or existed and is referenced by public sources, but native logged-out access was not reliable enough to inventory posts, followers, engagement, comments, likes, reposts, or old corrections.

No verified candidate-controlled campaign website, X/Twitter, Instagram, TikTok, YouTube, Threads, Bluesky, Substack, Reddit, or personal LinkedIn account surfaced in this pass. This is relevant as a communications-style fact, not evidence of policy views.

**Social source:**
- https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/

**Do not overuse social:** Facebook references should be mapped only where they illuminate a documented issue, such as the public dispute over voting eligibility information. Do not infer beliefs from platform absence.

---

## Donor / funding record

No complete donor ledger or candidate campaign-finance report for Bobbi Dreiling was verified online in this pass.

The Kansas Public Disclosure Commission states that candidates for local office file appointment-of-treasurer forms with the county clerk/county election commissioner, and that covered candidates and committees must file either an affidavit of exemption or receipts-and-expenditures reports. The public statewide campaign-finance portal did not yield a usable Bobbi Dreiling county-clerk donor table.

Existing local memory mentions a county Republican committee expenditure trail with a $999 text broadcast for "Clerk Bobbi Dreiling" and a $50 room rental tied to race activity. Because the underlying PDF/source URL was not recovered in this pass, those amounts should be treated as unverified until the report is located.

**Sources:**
- https://kpdc.kansas.gov/campaign-finance/
- https://www.kansas.gov/campaign-finance/

---

## Issue-area synthesis for narrative writer

1. **Official status and role:** Current Ellis County Clerk/Election Officer; off-cycle after 2024 reelection; not a 2026 ballot candidate.
2. **Election security and accuracy:** Strongest stated theme; backed by direct quotes and some primary procedural notices.
3. **Voting access and polling logistics:** Most contested issue; show Dreiling's turnout/cost/ADA/whole-precinct rationale next to student/ACLU petition evidence.
4. **Drop boxes / early voting / voter notifications:** Mixed access record: Saturday early voting and notifications expanded; offsite drop boxes removed; central 24/7 camera-monitored drop box retained.
5. **Property-tax and county records administration:** Official duties and Dreiling's claimed revenue-neutral-rate work are administrative, not broad tax ideology.
6. **Civic education:** Current 2026 "I Voted" sticker contest is the newest primary-source evidence of voter outreach.

---

## Could not confirm

- Current church, parish, or denomination for Bobbi L. Dreiling.
- A complete local campaign-finance donor ledger or exemption/report filing.
- Full native Facebook post inventory and engagement metrics.
- Dreiling-authored public comments in Hays Post, Hays Daily News, or Facebook comment threads.
- Primary official county canvass minutes for the November 2024 provisional-ballot canvass; Hays Post reporting is used pending primary upgrade.

---

## Source registry for downstream use

**Primary**
- `s-ellis-clerk-page` - https://ellisco.net/93/Clerk
- `s-ellis-election-page` - https://ellisco.net/425/Election
- `s-ellis-staff-directory` - https://www.ellisco.net/directory.aspx?EID=19
- `s-ellis-candidate-filings-page` - https://www.ellisco.net/626/Candidate-Filings
- `s-ellis-2026-filings-pdf` - https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings
- `s-ellis-election-results-page` - https://www.ellisco.net/435/Election-Results
- `s-ellis-2024-official-results` - https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results
- `s-kcceoa-northwest` - https://www.kcceoa.org/county-clerks/northwest
- `s-ellis-agenda-02032026` - https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_02032026-726
- `s-ellis-agenda-04072026` - https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_04072026-741
- `s-ellis-ds200-public-test` - https://www.ellisco.net/DocumentCenter/View/5809/public-test
- `s-ellis-close-books-2025` - https://www.ellisco.net/DocumentCenter/View/5797/Close-of-Books-Notice-of-Places---Copy
- `s-kpdc-campaign-finance` - https://kpdc.kansas.gov/campaign-finance/
- `s-kansas-campaign-finance-portal` - https://www.kansas.gov/campaign-finance/

**Secondary**
- `s-hayspost-2020-profile` - https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531
- `s-hayspost-2024-profile` - https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3
- `s-tiger-forum-2024` - https://tigermedianet.com/?p=82423
- `s-hayspost-win-2024` - https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78
- `s-hayspost-canvass-2024` - https://hayspost.com/posts/0c4a7379-b39d-4948-a0f3-91abbf78b149
- `s-kansasreflector-fhsu-2023` - https://kansasreflector.com/2023/11/06/students-county-clerk-embroiled-in-monthslong-clash-over-fort-hays-polling-location/
- `s-aclu-fhsu-petition-2024` - https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/
- `s-hayspost-allen-letter-2024` - https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1

**Social**
- `s-facebook-campaign-page` - https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/

