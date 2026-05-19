# Raw Dump v2 - Michael Soetaert

**Candidate slug:** michael-soetaert  
**Office:** U.S. Senate, Kansas, Democratic candidate  
**Date written:** 2026-05-19  
**Agent:** Worker 27, deep-scraper equivalent  
**Scope:** Phase 2 current-status and issue deepening. Existing local `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and `ui/src/data/v2/michael-soetaert.ts` were used first; this pass adds current official/FEC/Kansas election/city verification and issue-scoped narrative evidence.

---

## Status Summary

Michael Soetaert is a Democratic candidate for U.S. Senate from Wellington, Kansas. FEC confirms a federal Senate candidacy: `SOETAERT, MICHAEL`, candidate ID `S2KS00097`, Democratic Party, challenger, Kansas Senate. The current FEC Form 2 was filed Sept. 22, 2025 and names "Michael Soetaert for Senate" as principal campaign committee.

Kansas SOS's candidate-information page confirms that national candidates file with the Secretary of State and that a candidate is not considered filed until the declaration/petition and fee are received. The live SOS candidate list could not be read directly here because it returned a JavaScript/bot challenge or blocked response. A Douglas County election-office export printed May 19, 2026 lists Michael "Mike" Soetaert, Democratic, Wellington, for U.S. Senator, filed June 23, 2025 by fee, and says documents were filed with the State of Kansas. Because the Kansas primary filing deadline is noon June 1, 2026, downstream language should say "filed/running" rather than nominee or final ballot language until a post-deadline official list is checked.

City of Wellington confirms Soetaert's recent local-office link and resignation. Its Dec. 17, 2025 release says the City Council accepted Council Member Michael "Mike" Soetaert's resignation after he requested that the governing body place the matter on the agenda; Resolution 6412 declared the seat vacant.

FEC does not show a 2025-2026 financial summary for Soetaert at access. Donor/funding information is therefore limited to the existence of an FEC candidate page, Form 2, and an active ActBlue page. ActBlue displays a campaign-requested maximum of $49.99 per donation and says Soetaert boycotts special-interest PACs, super PACs, and "canary pacs," but no filed receipts were available to verify donor patterns.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-sos-candidate-info | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | National candidates file with SOS; candidate not considered filed until declaration/petition and fee received; 2026 filing deadline; U.S. Senate office up | status |
| s-sos-candidate-list-blocked | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | accessed 2026-05-19 | Official candidate-list endpoint could not be read directly in this environment | blocker |
| s-douglas-candidate-export | primary | https://candidatefiling.us/Info/CFPdf?c=181035409877&e=545606222&j=2795522868&s=802933811&st=KS | printed/accessed 2026-05-19 | County election-office export lists Michael "Mike" Soetaert (D), Wellington, U.S. Senator, filed 2025-06-23 by fee; documents filed with State of Kansas | status |
| s-fec-candidate | primary | https://www.fec.gov/data/candidate/S2KS00097/ | accessed 2026-05-19 | FEC candidate ID, office, party, challenger status, no 2025-2026 financial summary, Form 2 filed 2025-09-22 | status, campaign finance |
| s-fec-form2 | primary | https://docquery.fec.gov/pdf/862/202509229790380862/202509229790380862.pdf | filed 2025-09-22; accessed 2026-05-19 | Statement of candidacy; principal campaign committee "Michael Soetaert for Senate" | status |
| s-wellington-resignation | primary | https://www.cityofwellington.net/newsview.aspx?nid=6940 | posted 2025-12-17; accessed 2026-05-19 | City Council accepted Soetaert resignation; Resolution 6412 declared vacancy; release says he was pursuing higher office | local governance |
| s-sos-2020-primary | primary | https://www.sos.ks.gov/elections/20elec/2020_Primary_Official_Vote_Totals.pdf | accessed 2026-05-19 | 2020 KS-01 Republican primary: R-Michael Soetaert 5,756 votes, 4.77% | candidacy history |
| s-sos-2022-primary | primary | https://www.sos.ks.gov/elections/22elec/2022-Primary-Official-Vote-Totals.pdf | accessed 2026-05-19 | 2022 Democratic U.S. Senate primary: D-Michael Soetaert 9,464 votes, 3.55% | candidacy history |
| s-sos-2024-primary | primary | https://www.sos.ks.gov/elections/24elec/2024-Primary-Official-Vote-Totals.pdf | accessed 2026-05-19 | 2024 Kansas Senate District 32 Democratic primary: Michael "Mike" Soetaert 366 votes, 32.50% | candidacy history |
| s-campaign-home | primary | https://mikeforkansas.my.canva.site/ | accessed 2026-05-19 | Candidate-controlled site metadata and issue/link structure; progressive Democrat, reproductive rights, LGBTQ+ advocacy, social links | issues, social |
| s-actblue | primary | https://secure.actblue.com/donate/michael-soetaert | accessed 2026-05-19 | Active donation page; says filed with FEC and KSSOS; PAC/super PAC boycott language; $49.99 maximum ask; mailing/check instructions | campaign finance |
| s-social-harvest-local | social | memory/candidates/michael-soetaert/social-harvest.md | captured 2026-05-11; read 2026-05-19 | Local harvest of campaign site, ActBlue, YouTube, Instagram, Threads, Bluesky, Facebook, X, TikTok, and search results | social, issues |
| s-youtube-channel | social | https://www.youtube.com/@mikeforkansas | captured in local harvest 2026-05-11 | 30 visible YouTube videos with titles, view counts, relative dates | social, issues |
| s-instagram | social | https://www.instagram.com/michael.soetaert1/ | captured in local harvest 2026-05-11 | Public profile metadata, follower/post counts, bio tags | social, abortion, LGBTQ |
| s-threads | social | https://www.threads.com/@michael.soetaert1 | captured in local harvest 2026-05-11 | Public profile metadata and bio text | social, abortion, LGBTQ |
| s-bluesky | social | https://bsky.app/profile/michaelsoetaert.bsky.social | captured in local harvest 2026-05-11 | Public profile metadata, account creation, follower/following/write counts, description tags | social, abortion, LGBTQ, peace |
| s-votesmart | secondary | https://justfacts.votesmart.org/candidate/biography/192430/michael-soetaert | accessed 2026-05-19 | Name, gender, birth place, home city, religion field, prior candidacies, priority issues field | biography, prior races, faith signal |
| s-iola-2022 | secondary | https://www.iolaregister.com/news/candidate-eschews-in-person-campaign | published 2022-07-28; accessed 2026-05-19 | Interview on party switch, pandemic campaign, first openly gay Kansas U.S. Senate candidate distinction, Equality Act contacts | public health, LGBTQ |
| s-kcur-guide | secondary | https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates | published 2025-12-30; accessed 2026-05-19 | Candidate guide: former Republican, former Wellington city council member, abortion-position shift, Respect for Marriage Act support | biography, abortion, LGBTQ |
| s-kofo-2025 | secondary | https://kofo.com/2025/10/31/mico-native-to-run-for-senate-2/ | published 2025-10-31; accessed 2026-05-19 | Spring Hill native; filed for U.S. Senate; first openly gay candidate framing | biography, LGBTQ |

---

## Official Filing and Election Records

### Kansas filing framework

**Source:** s-sos-candidate-info.

Kansas SOS says Democratic and Republican candidates run in the primary to secure their party's nomination. It says candidates for national offices must file with the Secretary of State and are not considered filed until their petition or declaration and fee are received. The 2026 primary filing deadline is noon Monday, June 1, 2026. The office list includes one U.S. Senator.

### Candidate-list readback

**Sources:** s-sos-candidate-list-blocked, s-douglas-candidate-export.

The direct SOS candidate-list endpoint could not be read in this environment. A Douglas County election-office export printed May 19, 2026 lists:

- U.S. Senator, US Federal Government.
- Michael "Mike" Soetaert.
- Democratic.
- Wellington.
- Filed June 23, 2025.
- Filing method: fee.
- Documents filed with the State of Kansas.

Treat this as government election-office corroboration of filing status, with the direct-SOS-readback caveat.

### FEC candidate status

**Sources:** s-fec-candidate, s-fec-form2.

FEC lists Soetaert as a Democratic challenger for Kansas Senate, candidate ID `S2KS00097`. The current Form 2 was filed Sept. 22, 2025 for the 2026 election and designates "Michael Soetaert for Senate" as the principal campaign committee. FEC does not show a 2025-2026 financial summary at access.

### Prior candidacy record

**Sources:** s-sos-2020-primary, s-sos-2022-primary, s-sos-2024-primary, s-votesmart.

Kansas SOS official election-result PDFs confirm:

- 2020 Republican primary, U.S. House Kansas District 1: R-Michael Soetaert received 5,756 votes, 4.77%.
- 2022 Democratic primary, U.S. Senate: D-Michael Soetaert received 9,464 votes, 3.55%.
- 2024 Democratic primary, Kansas Senate District 32: Michael "Mike" Soetaert received 366 votes, 32.50%.

Vote Smart also lists Soetaert as a candidate for Kansas Senate District 32 in 2024, President of the United States in 2024, U.S. Senate Kansas in 2022, and U.S. House Kansas District 1 in 2020. Treat Vote Smart as secondary biography context; use SOS results for vote totals.

### Wellington City Council

**Source:** s-wellington-resignation.

City of Wellington's official release says Soetaert was a council member and that the council accepted his resignation at its regular meeting on Dec. 16, 2025. The release says Soetaert submitted a Dec. 12 request to place his resignation on the agenda, Mayor Soria clarified that the council was not asking or forcing him to resign, and Resolution 6412 accepted the resignation and declared the seat vacant.

---

## Campaign Finance

**Federal filings:** FEC candidate page and Form 2 confirm candidacy and principal committee, but the FEC overview says no 2025-2026 financial-summary data is available for Soetaert. No itemized donor data or receipts report was found in the accessible FEC view.

**Candidate fundraising page:** ActBlue page is active for "Mike Soetaert for Senate." It says Soetaert is filed with both the FEC and Kansas Secretary of State. It displays a campaign-requested maximum of $49.99 per donation and asks mailed checks to be made out to Michael Soetaert for Senate. It also says Soetaert "boycotts ALL special interest political action committees, super pacs and canary pacs."

**Use caution:** The ActBlue statement is a candidate-controlled claim. Without FEC receipts/disbursements data, this pass cannot verify total raised, donor names, employer/occupation data, PAC support or absence, debts, refunds, or independent spending.

---

## Biography and Public Role

**Sources:** s-douglas-candidate-export, s-fec-candidate, s-fec-form2, s-votesmart, s-iola-2022, s-kcur-guide, s-kofo-2025, s-wellington-resignation.

Soetaert is listed by official/government sources as a Wellington-based Democratic candidate for U.S. Senate. Vote Smart lists full name Michael Soetaert, birth place Wellington, Kansas, home city Wellington, Kansas, and religion as Christian. It does not list education, professional experience, or organizational memberships.

Secondary sources and local research describe him as a former Republican, a former/recent Wellington City Council member, and a repeat candidate for local, state, and federal offices. Iola Register reported in 2022 that he was the first openly gay candidate to run for a U.S. Senate seat from Kansas; KOFO used similar framing in 2025.

---

## Issue Evidence

### Ballot access, voting rights, and democratic participation

**Candidate-controlled signal:** Campaign site links vote.gov and Kansas SOS. YouTube/video labels in the local harvest include "about the BALLOT BOX," "REGISTER TO VOTE NOW," and "CITIZENS UNITED."

**Action / public evidence:**

- Soetaert filed federal Form 2 and Kansas state filing paperwork for the 2026 Senate race.
- Local YouTube harvest captured 30 visible videos, including campaign-finance and voting-themed titles.
- ActBlue page says he is filed with FEC and Kansas Secretary of State.

**Source IDs:** s-sos-candidate-info, s-douglas-candidate-export, s-fec-candidate, s-fec-form2, s-actblue, s-social-harvest-local, s-youtube-channel.

### Campaign finance and donor posture

**Candidate-controlled signal:** ActBlue says Soetaert boycotts special-interest PACs, super PACs, and "canary pacs." It displays a $49.99 maximum donation request.

**Action / public evidence:**

- FEC confirms the candidate ID and current Form 2.
- No FEC financial summary is available for 2025-2026 at access.
- No donor ledger, donor categories, PAC receipts, cash-on-hand, or debts were confirmed.

**Source IDs:** s-fec-candidate, s-fec-form2, s-actblue.

### Abortion / reproductive policy

**Candidate-controlled signal:** Campaign-site metadata and social profile tags emphasize reproductive rights/freedom, women's rights, and ERA. KCUR/Kansas News Service reports that his website says he changed his position on abortion after "Kansans voted for bodily autonomy."

**Action / public evidence:**

- Current campaign site and social bios frame reproductive rights as a repeated campaign theme.
- The accessible record documents a stated position change, not legislative votes or officeholder action on abortion policy.

**Source IDs:** s-campaign-home, s-instagram, s-threads, s-bluesky, s-kcur-guide.

### Marriage, LGBTQ+ policy, and Equality Act advocacy

**Candidate-controlled signal:** Campaign metadata and social bios present Soetaert as gay/LGBTQIAP2S+ and reference Equality Act advocacy.

**Action / public evidence:**

- Iola Register reported in 2022 that Soetaert was the first openly gay candidate to run for a U.S. Senate seat from Kansas and that a centerpiece of his campaign was dignity, respect, and equality for all.
- Iola Register also reported he cited unsuccessful attempts to reach Kansas senators about support for the Equality Act as a reason in his party-switch explanation.
- KCUR/Kansas News Service reports he supported the Respect for Marriage Act in 2022.
- KOFO reported in 2025 that Soetaert described himself as the first openly gay candidate to run for U.S. Senate representing Kansas.

**Source IDs:** s-campaign-home, s-instagram, s-threads, s-bluesky, s-iola-2022, s-kcur-guide, s-kofo-2025.

### Public health and campaign method

**Candidate-controlled / interview signal:** In a 2022 Iola Register interview, Soetaert described his campaign as online/pandemic-focused and said he would choose voter health and safety over in-person campaigning.

**Action / public evidence:**

- Iola Register reported that his 2022 campaign consisted mostly of website and Twitter activity due to COVID concerns.
- The current 2026 online footprint is also broad across low-cost web/social platforms, but this pass does not infer the reason for current platform choices.

**Source IDs:** s-iola-2022, s-campaign-home, s-social-harvest-local.

### Local governance and office stewardship

**Official record:** City of Wellington confirms Soetaert served as a council member and that the governing body accepted his resignation in December 2025.

**Action / public evidence:**

- City release says he requested that the resignation be placed on the agenda on Dec. 12, 2025.
- The city says Resolution 6412 formally accepted the resignation and declared the seat vacant on Dec. 16, 2025.
- The release quotes the mayor saying the city was not asking or forcing the resignation and saying Soetaert was pursuing higher office.

**Source ID:** s-wellington-resignation.

### Rural Kansas, affordability, food, and agriculture-adjacent themes

**Candidate-controlled signal:** YouTube titles and campaign labels include Wellington, Johnson & Sumner, affordability/safety, World Wheat Capital, and America's Breadbasket.

**Action / public evidence:**

- Local social harvest captured these as video titles/labels, not detailed issue papers.
- No current candidate-controlled Farm Bill, crop-price, water, Ogallala Aquifer, ethanol, rural hospital, or county-service plan was captured.

**Source IDs:** s-social-harvest-local, s-youtube-channel.

### Faith / religious liberty

**Public record:** Vote Smart lists Soetaert's religion as Christian. Existing local research references a Roman Catholic adoptive-family background, but no current church affiliation was verified.

**Use caution:** Treat the Vote Smart entry as a biographical field only. Do not infer denomination, worship attendance, theology, religious-liberty policy, or issue positions from it.

**Source ID:** s-votesmart.

### Guns, immigration, marijuana/drug policy, federal spending, health care, education, energy, and environmental regulation

**Public record:** Vote Smart's biography page has a "Priority Issues" field listing broad topics including agriculture/subsidies, criminal justice reform, education reform/student aid, election integrity, environmental regulations/energy, federal spending/monetary policy, civil rights/constitutional government, labor policy, and health care.

**Use caution:** Vote Smart does not provide detailed candidate text on those issue areas in the accessible page, and this pass did not verify current candidate-controlled policy detail for guns, immigration/border, marijuana/drug policy, federal spending, health care, education, energy, or environmental regulation.

**Source ID:** s-votesmart.

---

## Social and Online Relevance

Soetaert's current online footprint is broad but uneven. The campaign-controlled hub is a Canva site linking ActBlue, FEC, Kansas SOS, vote.gov, and multiple social platforms. The strongest post-level harvest is YouTube: 30 visible videos captured May 11, 2026, with titles and visible views. The highest-viewed visible item was "about the BALLOT BOX" at 1.5K views as captured; other higher-view items included one 873-view campaign-style title, "WHAT COULD I DO?" at 324 views, "CAMPAIGN COMPILATION" at 233 views, and "LGBTQIAP2S+ SALT" at 228 views.

Instagram, Threads, and Bluesky exposed profile metadata but not reliable post bodies in the logged-out capture. Facebook and X were campaign-linked but not post-readable in the public capture. TikTok was campaign-linked but returned a shell/status block. No clear current LinkedIn, Truth Social, Gab, Gettr, Substack, or Reddit candidate-controlled account was found.

Issue mapping should use social/online signals only where tied to campaign-controlled text or visible titles: reproductive rights, LGBTQ+ equality, voting/ballot access, campaign finance/Citizens United, peace, affordability/safety, and Kansas place/food/wheat language. Do not infer positions from follows, likes, identity labels, or platform presence alone.

---

## Blockers and Could Not Confirm

- Direct readable Kansas SOS candidate-list row from `sos.ks.gov` was blocked by JavaScript/bot protection or 403-style response.
- Final post-deadline Kansas candidate-list/ballot status remains pending until after the June 1, 2026 filing deadline.
- FEC has no visible 2025-2026 financial summary for Soetaert at access; donor names, totals, cash on hand, debts, PAC receipts, and spending cannot be confirmed.
- No receipts data was available to test the ActBlue PAC/super PAC boycott claim or $49.99 campaign maximum ask.
- No endorsements were confirmed.
- No current church affiliation was verified.
- No candidate-controlled detailed policy text was confirmed for guns, immigration/border, marijuana/drug policy, Farm Bill/water/agriculture, rural hospitals, Medicare, Social Security, veterans, broadband, or higher education.
- No court/legal record, business-entity record, property-record finding, or professional-license finding was verified in this pass.
