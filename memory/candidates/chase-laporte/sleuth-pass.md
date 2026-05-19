# Sleuth Pass: Chase LaPorte

**Worker:** Worker 10  
**Compiled:** 2026-05-19  
**Candidate slug:** chase-laporte  
**Primary current-status finding:** The existing UI label of "U.S. Senate candidate" is conflicted. FEC has a September 12, 2025 Senate Statement of Candidacy, but the current official Johnson County Election Office candidate page lists LaPorte for **U.S. Representative, Kansas 3rd District**, and later FEC paperwork filed October 7, 2025 also lists House KS-03. Do not compile as a clean Senate profile without resolving this conflict.

## Scope Notes

- Public web, official election pages, FEC records, candidate/issue aggregators, and logged-out social/profile surfaces were reviewed.
- Private or login-walled material was not accessed.
- The Kansas Secretary of State candidate-list endpoint was attempted but returned a JavaScript/robot verification page in the text browser. Official Kansas SOS candidate-information pages were still usable for filing rules and dates.
- Social signals are recorded only as observed public behavior or platform presence/absence. No position is inferred from party label, follows, likes, organization membership, or lack of posting.

## Official Status Signals

### U.S. Representative KS-03 - current official/local listing

- Johnson County Election Office candidate detail page lists Chase LaPorte as:
  - Incumbent: No
  - City: Mission
  - Party: Republican
  - Office Level: National Offices
  - Office Jurisdiction: U.S. Representative
  - Office Position: U.S. Representative 3rd District
  - Term: 2 year
- Johnson County Election Office's candidate list places LaPorte under "U.S. Representative 3rd District," with Sarah Preu and incumbent Sharice Davids also in that section. It does not list LaPorte under the U.S. Senate section on the captured page.
- Johnson County Republican Party's "2026 Candidates (Currently Filed)" page lists "US Senate: Dr Roger Marshall" and "US Representative: Chase LaPorte."
- Kansas Reflector reported on May 11, 2026 that Sarah Preu and Republican Chase LaPorte of Mission had filed for the 3rd District seat in Congress.
- WIBW reported on May 11, 2026 that Democrat Sarah Preu and Republican Chase Laporte had also filed for the third district seat.

**Issue mapping note:** This belongs in a profile-status / election-status note rather than a policy issue. It affects whether later UI should put LaPorte in the U.S. Senate race or KS-03 House race.

### FEC filing trail - multiple federal candidacies in same cycle

- FEC candidate page H6KS03258 lists LaPorte as a 2026 House KS-03 challenger, Republican, filed January 23, 2025, with no 2025-2026 financial summary available.
- FEC Form 2 image 202501239747740195 lists the January 23, 2025 candidacy as House, Kansas District 03, with "LaPorte for a Brighter America" as principal campaign committee.
- FEC candidate page S6KS00254 lists LaPorte as a 2026 Kansas Senate challenger, Republican, filed September 12, 2025, with no 2025-2026 financial summary available.
- FEC Form 2 image 202509129790051703 lists the September 12, 2025 candidacy as Senate, Kansas, with "LaPorte for a Brighter America" as principal campaign committee.
- FEC candidate page H6KS03274 lists LaPorte as a 2026 House KS-03 challenger, Republican, filed October 7, 2025, with no 2025-2026 financial summary available.
- FEC Form 2 image 202510079790706549 lists the October 7, 2025 candidacy as House, Kansas District 03, with the Mission address and "LaPorte for a Brighter America" as principal campaign committee.
- FEC search/API output, before DEMO_KEY rate limits were reached, returned four LaPorte candidate IDs: H6KS03258, H6KS03274, S6KS00254, and a 2024 presidential ID P40013633. All 2026 federal IDs had `has_raised_funds: false` in that result.

**Issue mapping note:** This should be a blocker/source-conflict item. If the UI keeps him in U.S. Senate, it must explain that later official sources put him in KS-03.

## Public Social / Online Footprint

### X / Twitter

- No identifiable candidate-controlled X account was found in the existing local social harvest or current targeted search.
- No candidate-controlled X posts, replies, reposts, or engagement metrics were captured.

**Issue mapping note:** No issue mapping. Absence does not imply a position.

### Facebook

- The Green Papers and some candidate-listing surfaces previously linked candidate names to Facebook, but no logged-out public candidate post feed was captured locally.
- No current public Facebook post text, comments, reactions, or shares were captured in this pass.

**Issue mapping note:** No issue mapping. Absence does not imply a position.

### LinkedIn

- Existing local social harvest captured a logged-out LinkedIn search preview for `linkedin.com/in/chase-laporte-06285b281`. It identified Chase LaPorte in the Kansas City Metropolitan Area, with 187 followers and 186 connections, CSC - Contemporary Services Corporation, Wichita State University, VFW, American Legion, Abdallah Shriners, and a "Republican candidate for KS-03" entry under Chase LaPorte 2026.
- Current direct fetch of the LinkedIn profile was blocked by robots.txt. The LinkedIn signal should therefore be used only as a logged-out search-preview observation preserved in `social-harvest.md`, not as a fully reviewed feed.

**Issue mapping note:** The KS-03 phrase maps to official-status context, not policy. The civic/veterans entries may support a biographical/civic-involvement note if sourced carefully, but they should not be used to infer policy views.

### Civic / community pages

- Abdallah Shriners' 2026 Divan page lists Chase LaPorte as Marshal.
- Abdallah Shriners' Units page lists Chase LaPorte as Divan Rep for Blue Racers and Escorts.

**Issue mapping note:** Civic involvement / community record. Do not infer religious affiliation or policy commitments from this.

### Campaign website / candidate-controlled current site

- `laporte4ksgov.com`, listed in older UI data as campaignWebsite, did not resolve by DNS during this pass.
- No current candidate-controlled website for the 2026 House or Senate campaign was found.

**Issue mapping note:** Campaign-footprint gap; not a policy position.

## Issue-Mapped Public Statements

The current issue record is mostly 2022 gubernatorial material archived by OnTheIssues, plus the 2025 U.S. Term Limits pledge. These are useful direct statements, but the date and prior-office context should be visible wherever used.

### Abortion / sanctity of life

- OnTheIssues archived a 2022 campaign-site statement: "As a Christian, I believe God's word directs us to preserve and protect human life, especially the unborn and innocent."

**Mapping reason:** Direct statement on abortion/sanctity of life, but from 2022 governor campaign, not a current 2026 congressional issue page.

### Marriage / family / LGBTQ-related policy

- OnTheIssues archived a 2022 campaign-site statement: "I believe in the Biblical standard for marriage, the traditional family unit, as well as the Biblical model for parenting."

**Mapping reason:** Direct statement on marriage/family. Do not expand it beyond the words used or infer detailed LGBTQ policy.

### Religious liberty / public faith

- OnTheIssues archived a 2022 principles statement: "As a Christian Conservative I believe the Holy Bible is God's written word to us and I have built my core values upon that foundation. Additionally, I believe in the essential nature of regularly meeting together for worship and fellowship."

**Mapping reason:** Direct public faith/value statement. It may support a "religion in public life / values" issue card, but do not certify church membership or inner belief.

### Education

- OnTheIssues archived a 2022 education statement saying, in part, "Kansas schools are inadequately staffed and under-funded" and that he would identify deficiencies and advocate for updates.

**Mapping reason:** Direct education statement. Not a current House/Senate platform unless dated and contextualized.

### Health care / medical choice

- OnTheIssues archived a 2022 health-care statement saying "No government or organization has the right to regulate or direct your medical care or the care of your children."

**Mapping reason:** Direct health-care / pandemic-era medical-choice statement. Does not establish positions on Medicare, Medicaid, rural hospitals, or ACA details.

### Government transparency and term limits

- OnTheIssues archived a 2022 government-reform statement: "Transparency in government keep officials accountable."
- U.S. Term Limits published on May 28, 2025 that LaPorte signed its congressional term-limits pledge for Kansas District 3. The pledge text says a member of Congress would cosponsor and vote for an amendment limiting House members to three terms and senators to two terms.

**Mapping reason:** Direct government-reform issue. The 2025 pledge is current-cycle and federal-office relevant.

### Public safety / National Guard

- OnTheIssues archived a 2022 statement: "I believe in maintaining a strong National Guard presence."

**Mapping reason:** Direct statement related to National Guard / public safety. It does not establish detailed positions on crime, policing, defense spending, or foreign policy.

### Economy / work and commerce

- OnTheIssues archived a 2022 statement that "The American dream was built on a model of hard work and freedom of commerce" and that he would work for economic restoration.

**Mapping reason:** Direct economic values statement. It does not establish current positions on tariffs, farm policy, inflation legislation, or tax votes.

## Funding / Donor Signals

- FEC pages for S6KS00254, H6KS03258, and H6KS03274 each state that FEC does not have a 2025-2026 financial summary for LaPorte under those candidate IDs.
- FEC search/API output returned `has_raised_funds: false` for the 2026 House and Senate IDs before rate limiting.
- No current processed donor ledger for a 2026 House or Senate campaign was confirmed in this pass.
- A Kansas party-committee PDF surfaced in search snippets with names including Chase LaPorte, Ty Masterson, and others, but that appears to be a party committee receipt report, not LaPorte campaign receipts. Do not treat those names as LaPorte donors without a campaign committee report tying them to LaPorte.

## Could Not Confirm / Blockers

- Could not confirm from the live Kansas SOS candidate-list endpoint because it returned a JavaScript/robot verification page. Johnson County Election Office and Johnson County GOP pages both point to KS-03; FEC filing trail also has a later KS-03 filing.
- Could not find a current candidate-controlled 2026 website. The older `laporte4ksgov.com` URL did not resolve.
- Could not review LinkedIn beyond existing logged-out search-preview text; direct fetch was robots-blocked.
- Could not identify candidate-controlled public X, Instagram, YouTube, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, or public Facebook feeds.
- Could not confirm a current church affiliation. Do not use 2022 public faith-language as church-membership evidence.
- Could not confirm current positions on immigration, guns, marijuana, rural hospitals, Medicare, Medicaid, Social Security, water, agriculture, tariffs, farm policy, Ukraine, Israel, China, Iran, or federal spending votes.

## Source List

- Kansas Secretary of State, "Candidate Information," accessed 2026-05-19: https://www.sos.ks.gov/elections/candidate-information.html
- Kansas Secretary of State, "Important Election Dates," accessed 2026-05-19: https://www.sos.ks.gov/elections/important-election-dates.html
- Johnson County Election Office, "Chase LaPorte," accessed 2026-05-19: https://www.jocoelection.org/candidates-elected-officials/chase-laporte
- Johnson County Election Office, "Candidates," accessed 2026-05-19: https://www.jocoelection.org/candidates-elected-officials/candidates
- Federal Election Commission, Candidate H6KS03258, accessed 2026-05-19: https://www.fec.gov/data/candidate/H6KS03258/
- FEC Form 2 image 202501239747740195, filed 2025-01-23: https://docquery.fec.gov/pdf/195/202501239747740195/202501239747740195.pdf
- Federal Election Commission, Candidate S6KS00254, accessed 2026-05-19: https://www.fec.gov/data/candidate/S6KS00254/
- FEC Form 2 image 202509129790051703, filed 2025-09-12: https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf
- Federal Election Commission, Candidate H6KS03274, accessed 2026-05-19: https://www.fec.gov/data/candidate/H6KS03274/
- FEC Form 2 image 202510079790706549, filed 2025-10-07: https://docquery.fec.gov/pdf/549/202510079790706549/202510079790706549.pdf
- Johnson County Republican Party, homepage candidate list, accessed 2026-05-19: https://jcrpks.org/
- Kansas Reflector, "Kansas Democrat makes reelection campaign for U.S. House seat official," 2026-05-11, accessed 2026-05-19: https://kansasreflector.com/2026/05/11/kansas-democrat-makes-reelection-campaign-for-u-s-house-seat-official/
- WIBW, "Rep. Sharice Davids files for re-election for state's third congressional district," 2026-05-11, accessed 2026-05-19: https://www.wibw.com/2026/05/11/rep-sharice-davids-files-re-election-states-third-congressional-district/
- U.S. Term Limits, "Chase LaPorte Pledges to Support Term Limits on Congress," 2025-05-28, accessed 2026-05-19: https://termlimits.com/chase-laporte-pledges-to-support-term-limits-on-congress/
- OnTheIssues, "Chase LaPorte on the Issues," page last updated 2022-07-11, accessed 2026-05-19: https://www.ontheissues.org/Chase_LaPorte.htm
- OnTheIssues, "Chase LaPorte on Abortion," accessed 2026-05-19: https://www.ontheissues.org/Governor/Chase_LaPorte_Abortion.htm
- OnTheIssues, "Chase LaPorte on Civil Rights," accessed 2026-05-19: https://www.ontheissues.org/Governor/Chase_LaPorte_Civil_Rights.htm
- OnTheIssues, "Chase LaPorte on Principles & Values," accessed 2026-05-19: https://www.ontheissues.org/Governor/Chase_LaPorte_Principles_%2B_Values.htm
- OnTheIssues, "Chase LaPorte on Health Care," accessed 2026-05-19: https://www.ontheissues.org/Governor/Chase_LaPorte_Health_Care.htm
- Abdallah Shriners, "2026 Divan," accessed 2026-05-19: https://abdallahshriners.com/2026-divan
- Abdallah Shriners, "Units," accessed 2026-05-19: https://abdallahshriners.com/units
