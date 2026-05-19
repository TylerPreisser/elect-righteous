# Christy Cauble Davis — Raw Dump v2

**Date:** 2026-05-19  
**Agent:** Worker 12 (deep-scraper/narrative equivalent)  
**Candidate slug:** christy-cauble-davis  
**Race:** U.S. Senate, Kansas — Democratic primary candidate/challenger  
**Purpose:** Primary-first confirmation and v2 narrative source dump for `v2-issues.yaml`.

## Source Priority Summary

Primary/candidate-controlled sources used:

- FEC candidate page for `S6KS00247`
- FEC committee page for `C00915934`
- FEC statement of organization PDF for `CHRISTY DAVIS FOR KANSAS 2026`
- Kansas Secretary of State candidate-information page and 2026 election-dates page
- Kansas Secretary of State 2020 Primary Official Vote Totals
- USDA Rural Development current leadership/current Kansas state director pages
- Christy Davis campaign website and campaign launch post
- Candidate-controlled Bluesky public API/profile/posts

Secondary sources used:

- KCUR / Kansas News Service 2026 candidate guide
- News From The States / Kansas Reflector convention coverage
- Hays Post Democracy Fest coverage
- Local harvest files already in candidate memory

## Official Status

### FEC candidate status

- **Candidate:** DAVIS, CHRISTY
- **FEC candidate ID:** `S6KS00247`
- **Office:** Senate
- **State:** Kansas
- **Party:** Democratic Party
- **Type of candidacy:** Challenger
- **Current Statement of Candidacy:** FEC-1910289, filed **2025-08-05**
- **Source:** `https://www.fec.gov/data/candidate/S6KS00247/?cycle=2026`

### FEC committee status

- **Committee:** CHRISTY DAVIS FOR KANSAS 2026
- **FEC committee ID:** `C00915934`
- **Status/type:** Active - Quarterly; Senate; Principal campaign committee
- **Registration date:** **2025-08-13**
- **Treasurer:** Jose Lara
- **Mailing address:** 715 1st St., Cottonwood Falls, KS 66845
- **Authorizing candidate:** Davis, Christy; Senate candidate; Kansas; Democratic Party
- **Statement of Organization:** FEC-1911050, filed **2025-08-13**
- **Source:** `https://www.fec.gov/data/committee/C00915934/?cycle=2026`
- **PDF source:** `https://docquery.fec.gov/pdf/057/202508139789468057/202508139789468057.pdf`

### Kansas SOS status and election dates

- Kansas SOS states that national, state, legislative, and judicial candidates must file with the Secretary of State, and that a candidate is not considered filed until petition/declaration and fee are received.
- Kansas SOS lists the 2026 primary filing deadline as **12:00 p.m. Monday, June 1, 2026**.
- Kansas SOS lists the 2026 primary election date as **August 4, 2026** and general election date as **November 3, 2026**.
- The live Kansas SOS candidate-list endpoint returned **403 / CloudFront blocked** in this environment; therefore, live SOS candidate-list confirmation is a blocker.
- **Sources:**
  - Candidate information: `https://www.sos.ks.gov/elections/candidate-information.html`
  - Important election dates: `https://sos.ks.gov/elections/important-election-dates.html`
  - Candidate list endpoint attempted: `https://sos.ks.gov/elections/elections_upcoming_candidate.aspx`

## Biography and Public-Record Background

### Candidate-controlled/campaign biography

The campaign homepage describes Davis as a fifth-generation Kansan and public servant focused on working families, honest government, and strong communities. It gives the campaign tagline "Rooted in Kansas. Ready to Rebuild." The site footer lists the campaign address as **715 1st Street, Cottonwood Falls, KS 66845** and says it is paid for by Christy Davis for Kansas, Jose Lara, Treasurer.

**Source:** `https://www.christydavisforkansas.com/`

### Former USDA Rural Development role

The local file set described Davis as a former Kansas state director of USDA Rural Development. Current USDA pages confirm that she is **not** the current state director: USDA announced Gimmie Jo Jansonius as the Kansas Rural Development state director on **2025-05-06**, and the current USDA state-directors page lists **Gimmie Jo Jansonius — Kansas**.

This confirms the correct current phrasing is **former Kansas state director of USDA Rural Development**, not current director.

**Sources:**

- `https://www.rd.usda.gov/newsroom/news-release/usda-announces-new-presidential-appointee-serve-rural-kansas`
- `https://www.rd.usda.gov/about-rd/leadership/state-directors`

### 2020 prior candidacy

Kansas SOS official 2020 primary results list:

- United States House of Representatives 001, Democratic primary:
  - Kali Barnett: 16,671 votes, 62.60%
  - Christy Cauble Davis: 9,962 votes, 37.40%

**Source:** `https://sos.ks.gov/elections/20elec/2020_Primary_Official_Vote_Totals.pdf`

## Campaign Finance

### FEC aggregate totals through 2026-03-31

FEC committee page for `CHRISTY DAVIS FOR KANSAS 2026` (`C00915934`) shows the following coverage period and totals:

- **Coverage dates:** 2025-07-01 to 2026-03-31
- **Total receipts:** $137,068.03
- **Total contributions:** $137,068.03
- **Total individual contributions:** $137,068.03
- **Itemized individual contributions:** $130,543.03
- **Unitemized individual contributions:** $6,525.00
- **Party committee contributions:** $0.00
- **Other committee contributions:** $0.00
- **Candidate contributions:** $0.00
- **Transfers from other authorized committees:** $0.00
- **Total loans received:** $0.00
- **Total disbursements:** $77,796.18
- **Operating expenditures:** $77,796.18
- **Ending cash on hand:** $59,271.85
- **Debts/loans owed by committee:** $0.00

**Source:** `https://www.fec.gov/data/committee/C00915934/?cycle=2026`

### Earlier local-file finance note superseded

The existing UI file used an older FEC coverage period through **2025-12-31** with **$80,478.96** total receipts, **$38,100.53** disbursements, and **$42,378.43** cash on hand. That was accurate for the older coverage period but is superseded by the FEC page's current coverage through **2026-03-31**.

### Donor extraction blocker

The FEC website exposes itemized transaction links, but rows did not render server-side in the logged-out HTML. The OpenFEC API attempt with `DEMO_KEY` returned over-rate-limit errors during this pass. Do **not** name top donors or industries from this pass. It is safe to use the aggregate FEC totals above.

## Candidate-Controlled Stated Positions

### Local control / infrastructure / rural development

Campaign homepage:

- "I’ll bring decision-making back to Kansas by restoring federal offices, investing in infrastructure, and trusting local leaders to lead."
- "I’ll fight for affordable housing, broadband, strong schools, clean water, and hospitals so every Kansan—no matter where they live—can thrive."
- "I’ll support farmers and small businesses with fair policies, financing, and job training that works for real Kansans."

**Source:** `https://www.christydavisforkansas.com/`

### Healthcare / Medicaid / Medicare / Social Security

Campaign homepage:

- "I’ll defend Social Security, Medicare, Medicaid, and public education from cuts and privatization."

KCUR, based on Davis email:

- Davis wants to restore funding for Medicaid, special education, and affordable housing programs.

**Sources:**

- Campaign homepage: `https://www.christydavisforkansas.com/`
- KCUR candidate guide: `https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates`

### Education

Campaign homepage:

- The campaign pairs "Strong Communities" with "Built on Truth, Opportunity, and Fully Funded Public Schools."
- The site says Davis will defend public education from cuts and privatization.

Campaign launch:

- The launch says Davis is focused on public education and funding strong public schools.

**Sources:**

- `https://www.christydavisforkansas.com/`
- `https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u`

### Immigration

Campaign homepage:

- "I’ll push for immigration reform that honors work, offers legal pathways, ends inhumane detention, and protects the people who keep our economy alive."

KCUR:

- KCUR reported that Davis's website says she will fight for immigration reform that provides a pathway to citizenship and ends inhumane policies that terrorize families and unconstitutionally deprive Kansans of due process.

**Sources:**

- `https://www.christydavisforkansas.com/`
- `https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates`

### Trade / tariffs / agriculture / small business

Campaign homepage:

- Davis says she will support farmers and small businesses with fair policies, financing, and job training.

KCUR:

- KCUR reported Davis says President Trump's tariffs are causing instability for farmers and rural communities.

**Sources:**

- `https://www.christydavisforkansas.com/`
- `https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates`

### Voting rights / transparency / government accountability

Campaign homepage:

- "I’ll protect voting rights, fight for transparency, and make sure government shows up and works for all of us—not just the wealthy and well-connected."

Campaign launch:

- Davis says Congress has power to fund programs for constituents and hold the Executive Branch to account.

Bluesky:

- 2026-03-20 post about voter ID and voter suppression: `https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mhirokptnk2u`

**Sources:**

- `https://www.christydavisforkansas.com/`
- `https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u`
- `https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mhirokptnk2u`

### Reproductive rights / abortion

Candidate-controlled campaign homepage text accessible on 2026-05-19 did not include detailed abortion-policy text in the scraped lines. News From The States/Kansas Reflector convention coverage did include Davis in a reproductive-rights section, saying rural Kansas could not be counted out based on Chase County's 2022 abortion amendment vote.

This is evidence of public positioning in favor of the reproductive-rights side of the Kansas debate, but not a detailed federal abortion-policy plan.

**Source:** `https://www.newsfromthestates.com/article/kansas-democrats-us-senate-campaign-focus-defeating-gop-incumbent`

## Social / Online Harvest Update

### Bluesky

Local `social-harvest.md` captured 45 original Bluesky posts through 2026-03-29. On 2026-05-19, public Bluesky API returned:

- Handle: `cdavis4kansas.bsky.social`
- Display name: Christy Davis for Kansas
- Description: Paid for by Christy Davis for Kansas, José Lara, Treasurer
- Followers: 120
- Following: 18
- Posts: 46
- Created: 2025-07-27T18:48:24.997Z
- DID: `did:plc:zllwgxxq7gfcbvkxwgu7n2ce`

Newest post after the local harvest:

- **2026-05-12:** "Chip in today and help us keep building a campaign Kansas can be proud of." Linked ActBlue. Engagement at 2026-05-19 check: 1 like, 1 repost, 0 replies.
- URL: `https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mloq4emgys2c`

### Facebook / Instagram / X

Campaign website links:

- Instagram: `https://www.instagram.com/cdavis4kansas/`
- Facebook: `https://www.facebook.com/christydavisforkansas`
- X/Twitter: `https://x.com/CDavis4Kansas`
- Bluesky: `https://bsky.app/profile/cdavis4kansas.bsky.social`

Local harvest captured Facebook and Instagram metadata but not post bodies. Logged-out X did not expose post text. No new post-level evidence from those platforms was added in this pass.

## Public Forum / News Quotes

### Kansas Democratic Party convention, March 8, 2026

News From The States/Kansas Reflector reported Davis saying:

- "What that says to me is we can’t count rural Kansas out"
- "We need to work statewide.There are more people who agree on issues than disagree."
- "I’ve also navigated this landscape in my advocacy work in the state Legislature"
- "I worked with Pat Proctor on an issue that we agreed on. If I’m able, as a woman and a leader, to work with Pat Proctor on issues, I can work with anyone."

**Source:** `https://www.newsfromthestates.com/article/kansas-democrats-us-senate-campaign-focus-defeating-gop-incumbent`

### Hays Democracy Fest, October 2025 coverage

Hays Post reported Davis:

- highlighted her work across rural Kansas, including downtown Hays projects
- said Kansans deserve representatives who show up and listen
- said, "Kansas is different than any other state in the nation. We have a unique culture and history that changes the way we need to address things."
- said she attended church three times a week growing up, publicly identified with Christianity, and discussed leaving a sermon she considered hate speech

Faith-related quotes should be treated as attributable public speech only, not as policy inference or spiritual certification.

**Source:** `https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9`

## Issue Areas With No Confirmed Candidate-Controlled Detail

No candidate-controlled detailed position was confirmed in accessible sources for:

- Marriage and family / LGBTQ+ policy
- Religious liberty as a legal-policy issue
- Guns / Second Amendment
- Marijuana / drug policy
- Foster care / adoption
- Capital punishment
- Detailed Farm Bill text
- Ogallala Aquifer or district-level water policy

The narrative compiler should not infer any of these from party label, faith language, events, or associations.

## Blockers and Source Conflicts

- **Kansas SOS candidate-list blocker:** candidate-list endpoint returned 403; FEC status is confirmed, but SOS live candidate-list entry was not independently verified.
- **FEC donor blocker:** aggregate totals confirmed; itemized donor rows/top donors not extracted because OpenFEC `DEMO_KEY` was over rate limit and HTML transaction tables did not render rows.
- **USDA role update:** older local profile describes Davis's USDA role correctly as former by context, but any phrasing implying current role must be corrected. USDA currently lists Gimmie Jo Jansonius as Kansas Rural Development state director.
- **Finance conflict:** local UI's $80,478.96 receipts through 2025-12-31 are outdated relative to FEC's current $137,068.03 through 2026-03-31.
- **Social count update:** local harvest found 45 Bluesky posts through 2026-03-29; public API on 2026-05-19 showed 46 posts, with a 2026-05-12 fundraising post.

## Source Index

- FEC candidate page — `https://www.fec.gov/data/candidate/S6KS00247/?cycle=2026` — primary/official — accessed 2026-05-19
- FEC committee page — `https://www.fec.gov/data/committee/C00915934/?cycle=2026` — primary/official — accessed 2026-05-19
- FEC Statement of Organization PDF — `https://docquery.fec.gov/pdf/057/202508139789468057/202508139789468057.pdf` — primary/official — accessed 2026-05-19
- Kansas SOS Candidate Information — `https://www.sos.ks.gov/elections/candidate-information.html` — primary/official — accessed 2026-05-19
- Kansas SOS Important Election Dates — `https://sos.ks.gov/elections/important-election-dates.html` — primary/official — accessed 2026-05-19
- Kansas SOS 2020 Primary Official Vote Totals — `https://sos.ks.gov/elections/20elec/2020_Primary_Official_Vote_Totals.pdf` — primary/official — accessed 2026-05-19
- USDA current Kansas state director announcement — `https://www.rd.usda.gov/newsroom/news-release/usda-announces-new-presidential-appointee-serve-rural-kansas` — primary/official — accessed 2026-05-19
- USDA State Directors — `https://www.rd.usda.gov/about-rd/leadership/state-directors` — primary/official — accessed 2026-05-19
- Campaign homepage — `https://www.christydavisforkansas.com/` — primary/candidate-controlled — accessed 2026-05-19
- Campaign launch post — `https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u` — primary/candidate-controlled — accessed 2026-05-19
- Bluesky profile — `https://bsky.app/profile/cdavis4kansas.bsky.social` — social/candidate-controlled — accessed 2026-05-19
- Bluesky 2026-05-12 post — `https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mloq4emgys2c` — social/candidate-controlled — accessed 2026-05-19
- Bluesky 2026-03-20 post — `https://bsky.app/profile/cdavis4kansas.bsky.social/post/3mhirokptnk2u` — social/candidate-controlled — accessed 2026-05-19
- KCUR candidate guide — `https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates` — secondary — accessed 2026-05-19
- News From The States / Kansas Reflector convention coverage — `https://www.newsfromthestates.com/article/kansas-democrats-us-senate-campaign-focus-defeating-gop-incumbent` — secondary — accessed 2026-05-19
- Hays Post Democracy Fest coverage — `https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9` — secondary — accessed 2026-05-19
