# Raw Dump v2 - Jennifer Day

**Candidate slug:** jennifer-day
**Office:** Kansas Secretary of State, Democratic candidate
**Date written:** 2026-05-19
**Agent:** Worker 22, deep-scraper/narrative deepening equivalent
**Scope:** Phase 2 all-candidate deepening. Existing `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and `ui/src/data/v2/jennifer-day.ts` were used first; this pass adds official KPDC/SOS/county/Legislature verification, current campaign-site readback, official testimony, and issue/action mapping.

---

## Status Summary

Jennifer Day is an active Kansas statewide campaign-finance registrant for Secretary of State in the 2026 cycle and a former Kansas House member. KPDC's 2026 statewide campaign-finance index lists "Day, Jennifer" under Secretary of State candidates. Her KPDC Appointment of Treasurer form lists Office Sought as Secretary of State, treasurer Stacey Knoell, and appointment date October 15, 2025. Her 2025 year-end finance report was electronically filed January 10, 2026.

Johnson County Election Office's August 4, 2026 primary candidate page lists Jennifer Day as a Democratic, non-incumbent Secretary of State candidate for a four-year term ending in 2031. Kansas SOS confirms state candidates file with the Secretary of State and that a candidate is not considered filed until petition/declaration and fee are received. The live SOS candidate-list endpoint could not be read directly in this environment because it returned JavaScript verification. Treat Day as campaign-finance-filed and publicly listed by Johnson County for the August 4 primary, with direct SOS candidate-list readback and final ballot certification still unconfirmed in this pass.

Kansas Legislature's archived member page lists Day as Representative Jennifer Day, District 48, Democrat, with House service from 2020-2021.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-sos-candidates-info | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Kansas candidate filing rules; state candidates file with SOS; candidate not filed until petition/declaration and fee received; 2026 Secretary of State office and filing deadline | official status |
| s-sos-candidate-list-blocked | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | attempted 2026-05-19 | Official candidate-list endpoint returned JavaScript verification in this environment | blocker |
| s-joco-candidate | primary | https://www.jocoelection.org/candidates-elected-officials/jennifer-day-0 | accessed 2026-05-19 | Johnson County candidate page: non-incumbent, Democratic, Secretary of State, four-year term ending 2031 | official status |
| s-kpdc-statewide-2026 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm | accessed 2026-05-19; page last updated 2026-01-22 | KPDC statewide index lists Day under Secretary of State candidates and links AT/202601 forms | official status, finance |
| s-kpdc-treasurer | primary | https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW04JD_AT.pdf | executed 2025-10-17; accessed 2026-05-19 | Candidate name, office sought Secretary of State, treasurer Stacey Knoell, treasurer appointed 2025-10-15 | official status, finance |
| s-kpdc-202601 | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04JD_202601.pdf | filed 2026-01-10; accessed 2026-05-19 | 2025 year-end receipts, expenditures, cash-on-hand, other transactions, itemized schedules | finance |
| s-campaign-home | primary | https://www.electjenday.com/ | accessed 2026-05-19 | Candidate-controlled homepage, issue planks, endorsements, social links, campaign contact | platform, biography |
| s-dass-kansas | primary | https://demsofstate.org/kansas-2026/ | accessed 2026-05-19 | Democratic Association of Secretaries of State candidate biography and issue framing | campaign-aligned context |
| s-ksleg-member | primary | https://www.kslegislature.gov/li_2022/b2021_22/members/rep_day_jennifer_1/ | accessed 2026-05-19 | Former House District 48 service, party, sponsored bills/resolutions, 2021 vote record link | officeholder record |
| s-ksleg-vote-2021 | primary | https://www.kslegislature.gov/li_2022/b2021_22/members/documents/rep_day_jennifer_1_vote_record_2021.pdf | accessed 2026-05-19 | Official 2021 House roll-call history for Day | action evidence |
| s-ksleg-hb2140 | primary | https://www.kslegislature.gov/li_2022/b2021_22/measures/hb2140/ | accessed 2026-05-19 | Day listed as sponsor; bill prohibiting concealed handguns in state capitol | guns/public safety |
| s-ksleg-hb2300 | primary | https://www.kslegislature.gov/li_2022/b2021_22/measures/hb2300/ | accessed 2026-05-19 | Day listed as sponsor; bill abolishing death penalty and creating aggravated murder | criminal justice |
| s-ksleg-hr6014 | primary | https://www.kslegislature.gov/li_2022/b2021_22/measures/hr6014/ | accessed 2026-05-19 | Day listed as sponsor; resolution strengthening Kansas-Taiwan sister-state ties | international/civic record |
| s-ksleg-hb2452 | primary | https://www.kslegislature.gov/li/b2025_26/measures/hb2452/ | accessed 2026-05-19 | Bill changing city, school, community college, and certain municipal elections to even-numbered years | election administration |
| s-day-hb2452-testimony | primary | https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_electns_1/documents/testimony/20260120_21.pdf | testimony dated 2026-01-20; accessed 2026-05-19 | Day's written-only opponent testimony on HB 2452; identifies her as Kansas citizen and election worker | election administration |
| s-social-harvest-local | social | memory/candidates/jennifer-day/social-harvest.md | captured 2026-05-11; read 2026-05-19 | Campaign website/social platform inventory; Bluesky topic coding; social engagement metrics | social evidence |
| s-bsky-profile | social | https://bsky.app/profile/electjenday.bsky.social | captured locally 2026-05-11 | Public campaign profile metadata and accessible feed | social evidence |
| s-bsky-launch | social | https://bsky.app/profile/electjenday.bsky.social/post/3m5wsbpac4c2l | posted 2025-11-18; local capture 2026-05-11 | Launch-video post | election administration |
| s-bsky-hb2452 | social | https://bsky.app/profile/electjenday.bsky.social/post/3mckv72p62c2b | posted 2026-01-16; local capture 2026-05-11 | Post opposing moving city/school elections to even-numbered years | election administration |
| s-bsky-mail-ballots | social | https://bsky.app/profile/electjenday.bsky.social/post/3mes2wul5yr2e | posted 2026-02-14; local capture 2026-05-11 | Mail-ballot post naming military families, seniors, rural voters, and working parents; highest visible Bluesky engagement in local capture | voting access |
| s-bsky-voter-data | social | https://bsky.app/profile/electjenday.bsky.social/post/3meyy2k67iu2z | posted 2026-02-16; local capture 2026-05-11 | Voter-data and vote-protection post | election administration |
| s-bsky-county-clerks | social | https://bsky.app/profile/electjenday.bsky.social/post/3mh76kh4iwc2h | posted 2026-03-16; local capture 2026-05-11 | Post saying Day had been meeting with county clerks responsible for voting and elections | election administration |
| s-bsky-llc | social | https://bsky.app/profile/electjenday.bsky.social/post/3mithgio4yc2p | posted 2026-04-06; local capture 2026-05-11 | LLC filing / business-services post | business services |
| s-bsky-gun-sense | social | https://bsky.app/profile/electjenday.bsky.social/post/3mk3pnx2lz224 | posted 2026-04-22; local capture 2026-05-11 | Moms Demand Action Gun Sense Candidate distinction | guns/public safety |
| s-bsky-kelly | social | https://bsky.app/profile/electjenday.bsky.social/post/3ml4yzwe4js2x | posted 2026-05-05; local capture 2026-05-11 | Gov. Laura Kelly endorsement post | endorsements |
| s-wichita-library-guide | secondary | https://www.wichitalibrary.org/Research/informedvoter/Pages/kansas.aspx | accessed in local harvest 2026-05-11 | Indexed election guide listing Day among 2026 SOS candidates | candidate context |
| s-sunflower-launch | secondary | https://sunflowerstatejournal.com/former-lawmaker-kicks-off-campaign-for-secretary-of-state/ | published 2025-10-17; search result accessed 2026-05-19 | Launch coverage; paywall/search snippet only in this pass | campaign context |
| s-cjonline-archive | secondary | https://archive.ph/2025.12.15-205057/https%3A/www.cjonline.com/story/news/politics/state/2025/12/13/jennifer-day-files-candidacy-for-kansas-secretary-of-state/87734035007/ | archived 2025-12-15; search result accessed 2026-05-19 | Secondary report that Day filed candidacy; not relied on for official status | campaign context |

---

## Election and Filing Records

### Kansas SOS filing framework

**Source:** s-sos-candidates-info.

Kansas SOS says Democratic and Republican candidates run in the primary for nomination. It also says candidates for national, state, legislative, and judicial offices file with the Secretary of State, and a candidate is not considered filed until the petition or declaration and fee are received.

**Blocked:** s-sos-candidate-list-blocked. The live candidate-list endpoint returned JavaScript verification in this environment. No direct official SOS candidate-table row was captured.

### Johnson County candidate page

**Source:** s-joco-candidate.

Johnson County Election Office's August 4, 2026 primary page lists:

- Candidate: Jennifer Day.
- Incumbent: No.
- Party: Democratic.
- Office level: State Offices.
- Office jurisdiction: Secretary of State.
- Office position: Secretary of State.
- Term: four years.
- Term end: 2031.

### KPDC campaign-finance registration

**Sources:** s-kpdc-statewide-2026, s-kpdc-treasurer, s-kpdc-202601.

KPDC statewide index says the 2026 statewide office page was last updated January 22, 2026 and lists Day under Secretary of State candidates. Appointment of Treasurer form lists:

- Candidate: Jennifer R Day.
- Office sought: Secretary of State.
- Treasurer: Stacey Knoell.
- Treasurer appointed: October 15, 2025.
- Executed: October 17, 2025.

The 202601 report covers January 1, 2025 through December 31, 2025 and was electronically filed January 10, 2026.

### Former officeholder record

**Source:** s-ksleg-member.

Kansas Legislature lists:

- Representative Jennifer Day.
- District 48.
- Democrat.
- House service: 2020-2021.
- Sponsored bills: HB 2140 and HB 2300.
- Sponsored resolutions: HR 6008, HR 6013, HR 6014, and HR 6016.

---

## Campaign Finance

### 2025 year-end KPDC summary

**Source:** s-kpdc-202601.

KPDC report summary:

- Cash on hand at beginning of period: $0.00.
- Total contributions and other receipts: $84,304.87.
- Cash available this period: $84,304.87.
- Total expenditures and other disbursements: $69,564.35.
- Cash on hand at close of period: $14,740.52.
- In-kind contributions: $0.00.
- Other transactions: $43,019.00.

### Contributor examples and cautions

**Source:** s-kpdc-202601.

Visible Schedule A examples include James D. Childers ($25 and another visible $1,000 entry), Louis Bornman ($100), Michael Tourtellot ($100), Dan Wancura ($50), David Lambertson ($250), Leslie Mark ($25), Diana Stewart ($10), and Dan Osman ($250). The PDF text extraction is column-fragmented, so all donor amounts should be verified against the original PDF before publication.

The available filing supports only a limited funding note: Day reported a modest statewide finance total compared with many statewide Kansas campaigns, with visible examples dominated by individual contributors. This pass did not complete donor-category, employer, geography, PAC, or loan analysis. The $43,019.00 "other transactions" line needs Schedule D parsing before narrative use.

---

## Biography and Public Record

### Candidate-controlled biography

**Sources:** s-campaign-home, s-dass-kansas.

The campaign site presents Day as a businesswoman, community leader, public servant, League of Women Voters volunteer, former election worker, and former House District 48 representative. DASS describes her experience in technology, real estate, and finance and says she spent years volunteering with the League of Women Voters and working as an election worker.

The campaign site says Day's core values for the Secretary of State office are safe, secure, accessible elections and easier business operations. It lists endorsements from Gov. Laura Kelly, House Democratic Leader Brandon Woodard, Reps. Nikki McDonald, Dan Osman, Jerry Stogsdill, Johnson County Commission Chair Mike Kelly, and JCCC Trustee Dawn Rattan.

### Legislative service

**Source:** s-ksleg-member.

Day served in the Kansas House from 2020-2021 and represented District 48 as a Democrat. Her archived legislative page links a 2021 vote record and lists sponsored bills/resolutions.

---

## Issue Area 1 - Election Administration, Voting Access, and Public Trust

### Candidate-stated position

**Sources:** s-campaign-home, s-dass-kansas, s-social-harvest-local.

This is the central campaign issue. Day's campaign site uses a voting-access and election-security frame and says the Secretary of State oversees and protects the electoral process. Her public platform centers protecting election integrity, guarding the right to vote, transparent public communication, county election coordination, and countering disinformation. DASS similarly frames her around safe, secure, accessible elections, fighting disinformation, protecting the right to vote, and increasing participation.

The existing social harvest found that 16 of 55 accessible Bluesky entries centered voting access, election administration, mail ballots, early voting, federal/state control, voter data, or January 6.

### Action evidence

- **Election-worker background:** Day's January 20, 2026 testimony identifies her as an election worker in her county for the past eight years. Source: s-day-hb2452-testimony.
- **HB 2452 testimony:** Day submitted written-only opponent testimony on HB 2452, a bill changing city, school, community college, and certain municipal elections to even-numbered years. She cited concerns about ballot length, undervotes, voter disengagement, confusion, and delays. Sources: s-day-hb2452-testimony, s-ksleg-hb2452.
- **Mail-ballot social evidence:** February 14, 2026 Bluesky post named military families overseas, seniors, rural voters, and working parents as mail-ballot users; it had the highest visible Bluesky post-level engagement in the local capture, 4 likes and 2 reposts. Source: s-bsky-mail-ballots.
- **County-clerk coordination:** March 16, 2026 Bluesky post said Day had been meeting with county clerks responsible for voting and elections. Source: s-bsky-county-clerks.
- **Voter data:** February 16, 2026 Bluesky post said Kansas needs a Secretary of State who protects voter data and the vote. Source: s-bsky-voter-data.

### Gap / symmetry note

The campaign message is specific and sustained on voting access and election administration. It is not matched by a current elected voting record because Day is not presently an officeholder. The strongest non-campaign action evidence is HB 2452 testimony and former election-worker experience, both self-identified in official legislative testimony.

---

## Issue Area 2 - Business Services, Registration, and Entrepreneurship

### Candidate-stated position

**Sources:** s-campaign-home, s-dass-kansas, s-bsky-llc.

The campaign site says the Secretary of State office should improve the ease of running a business and continue or expand modernization and streamlining of business registration. DASS says Day wants to make it easier to start and grow a business in Kansas.

### Action evidence

- **Business background:** Candidate-controlled and DASS biographies describe experience in technology, real estate, and finance, plus small-business work. Sources: s-campaign-home, s-dass-kansas.
- **LLC filing social evidence:** April 6, 2026 Bluesky post tied the business-services issue to Day's own current LLC report and fee experience. Source: s-bsky-llc.

### Gap / symmetry note

The business-services plank is clear on the campaign site but much less frequent in social posting. The local social harvest counted one of 55 accessible Bluesky entries as chiefly business-services related.

---

## Issue Area 3 - Guns, Public Safety, and Criminal Justice

### Candidate-stated position

**Sources:** s-bsky-gun-sense, s-ksleg-hb2140, s-ksleg-vote-2021, s-ksleg-hb2300.

No full candidate-controlled gun-policy platform plank was found. The evidence is from a social validator signal and legislative record.

### Action evidence

- **Gun Sense Candidate post:** April 22, 2026 Bluesky post announced a 2026 Gun Sense Candidate distinction from Moms Demand Action. Source: s-bsky-gun-sense.
- **HB 2140 sponsorship:** Day was a sponsor of HB 2140, which would prohibit concealed handguns in the state capitol. The bill died in committee. Source: s-ksleg-hb2140.
- **HB 2058 votes:** Day voted nay on HB 2058 final action and later motions relating to concealed-carry reciprocity and concealed-carry licenses for individuals 18 to 20 years old. Source: s-ksleg-vote-2021.
- **HB 2089 votes:** Day voted nay on HB 2089, standardizing firearm safety education training programs in school districts. Source: s-ksleg-vote-2021.
- **HB 2300 sponsorship:** Day was a sponsor of HB 2300, abolishing the death penalty and creating aggravated murder. The bill died in committee. Source: s-ksleg-hb2300.
- **Public safety votes:** 2021 vote record shows yea votes on sexual extortion registration, missing and murdered Indigenous people training, stalking penalties, drug-treatment/diversion, victims' compensation, and other criminal justice measures. Source: s-ksleg-vote-2021.

### Gap / symmetry note

Do not turn the Moms Demand Action distinction into a full gun-policy platform. The legislative record supports a narrow claim about specific bills and votes, not a complete current Secretary of State platform on firearms.

---

## Issue Area 4 - Civic / Legislative Record Beyond Current Campaign

### Candidate-stated position

**Sources:** s-ksleg-member, s-ksleg-hr6014.

Day's current campaign leans heavily on election administration and business services, but her short House record includes bills and resolutions outside the Secretary of State office.

### Action evidence

- **HR 6014:** Day sponsored HR 6014, strengthening sister-state ties between Kansas and Taiwan; it was adopted without roll call on May 4, 2021 and enrolled May 6, 2021. Source: s-ksleg-hr6014.
- **HR 6008 / HR 6013 / HR 6016:** Archived legislative page lists resolutions on World War II Medal of Honor state funerals, Music in Our Schools Month, and Michael Mosher Day. Source: s-ksleg-member.
- **Budget votes:** 2021 vote record includes several nay votes on HB 2007 budget conference and veto items. Source: s-ksleg-vote-2021.

### Gap / symmetry note

This record should be used as background, not overstated as the main policy basis for a Secretary of State race. Day's House service was brief, from 2020 to 2021.

---

## Social / Online Pattern Summary

**Source:** s-social-harvest-local.

The May 11 local harvest found:

- Campaign website found and active.
- Bluesky found: 32 followers, 37 following, 70 posts; created September 25, 2025.
- X found: 41 followers, 97 following, 70 statuses, 62 media; created September 25, 2025.
- Instagram found: 122 followers, 81 following, 64 posts.
- Facebook found: 948 likes and 269 talking about this.
- YouTube found: one visible launch video and campaign channel.
- LinkedIn unclear; campaign footer resolved only to LinkedIn home.
- No clear campaign-controlled TikTok, Threads, Truth Social, Gab, Gettr, Substack, or Reddit account surfaced.

Topic coding from 55 accessible Bluesky feed entries:

- Campaign travel, county visits, Democratic events, supporter contact, and volunteer asks: 24 items / 44%.
- Voting access, election administration, mail ballots, early voting, federal/state control, voter data, and January 6 democracy frame: 16 items / 29%.
- Fundraising, ActBlue, launch promotion, and campaign-growth updates: 6 items / 11%.
- Endorsements and allied Democratic validator posts: 6 items / 11%.
- Business-services / LLC / entrepreneurship: 1 item / 2%.
- Gun-policy validator signal: 1 item / 2%.
- Kansas civic history / women's representation: 1 item / 2%.

The highest visible Bluesky post-level engagement was the February 14, 2026 mail-ballot post with 4 likes and 2 reposts. Engagement was low overall and should be treated as platform-visible signal, not total campaign reach.

---

## Visible Absences

Across reviewed campaign-controlled material, this pass did not confirm sustained candidate-specific positions on:

- Abortion / sanctity of life.
- Marriage and family / LGBTQ policy.
- Religious liberty.
- Immigration / border policy.
- School choice / parental rights.
- Medicaid expansion.
- Rural hospital closures.
- Water policy / Ogallala Aquifer.
- Marijuana / drug policy beyond criminal justice votes.
- Housing, child care, broadband, roads, or veterans policy.

This absence should be reported neutrally. Do not infer a position from party label, endorsements, follows, or silence.

---

## Blockers and Could Not Confirm

- Direct official Kansas SOS candidate-list row could not be read because the live candidate-list endpoint returned JavaScript verification.
- Final ballot certification is not confirmed in this pass and should not be stated before the filing deadline/certification process is complete.
- The full KPDC contributor schedule was not normalized into donor categories, employer/industry totals, geographic shares, or PAC/self-funding totals.
- The $43,019.00 reported as other transactions was not parsed from Schedule D.
- No current church affiliation was confirmed.
- No current court/property/business-entity sweep was completed.
- No full logged-out post-level corpus was captured for Facebook, Instagram, X, or LinkedIn.

---

## Key Source URLs

- https://www.sos.ks.gov/elections/candidate-information.html
- https://sos.ks.gov/elections/elections_upcoming_candidate.aspx
- https://www.jocoelection.org/candidates-elected-officials/jennifer-day-0
- https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm
- https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW04JD_AT.pdf
- https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04JD_202601.pdf
- https://www.electjenday.com/
- https://demsofstate.org/kansas-2026/
- https://www.kslegislature.gov/li_2022/b2021_22/members/rep_day_jennifer_1/
- https://www.kslegislature.gov/li_2022/b2021_22/members/documents/rep_day_jennifer_1_vote_record_2021.pdf
- https://www.kslegislature.gov/li_2022/b2021_22/measures/hb2140/
- https://www.kslegislature.gov/li_2022/b2021_22/measures/hb2300/
- https://www.kslegislature.gov/li_2022/b2021_22/measures/hr6014/
- https://www.kslegislature.gov/li/b2025_26/measures/hb2452/
- https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_electns_1/documents/testimony/20260120_21.pdf
- https://bsky.app/profile/electjenday.bsky.social
