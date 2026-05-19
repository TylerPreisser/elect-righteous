# Raw Dump v2 - Erik Murray

**Candidate slug:** erik-murray
**Office:** U.S. Senate, Kansas, Democratic candidate
**Date written:** 2026-05-19
**Agent:** Worker 18, deep-scraper equivalent
**Scope:** Phase 2 current-status and issue deepening. Existing `raw-dump.md`, `social-harvest.md`, `site-profile.md`, `in-their-own-words.md`, and `ui/src/data/v2/erik-murray.ts` were used first; this pass adds current FEC/SOS verification, the now-expanded campaign issue page, current campaign-link hub/RSS checks, and updated source caveats.

---

## Status Summary

Erik Murray is federally registered as a Democratic U.S. Senate candidate in Kansas for the 2026 cycle. FEC lists him as "MURRAY, ERIK," candidate ID `S6KS00270`, candidate for Senate in Kansas, Democratic Party, type of candidacy "Challenger." His current Statement of Candidacy was filed Dec. 3, 2025. FEC lists `ERIK MURRAY FOR KANSAS`, committee ID `C00929240`, as his active Senate principal campaign committee.

Kansas SOS confirms the filing framework and 2026 election dates, but a direct candidate-list row was not readable in this environment. The SOS candidate-information page says national candidates file with the Secretary of State and are not considered filed until the declaration or petition and fee are received. The primary filing deadline is noon Monday, June 1, 2026. The SOS important-dates page lists the primary election on Aug. 4, 2026 and the general election on Nov. 3, 2026. The live SOS upcoming-candidate page returned a JavaScript/anti-bot gate here. Treat Murray as an active FEC-filed candidate with a live campaign, while noting that direct SOS candidate-list confirmation and final ballot certification remain unresolved.

Murray has no legislative voting record in the reviewed sources. His action evidence is campaign filing activity, campaign platform/public statements, campaign travel/events, and his professional/development record, especially the Indian Springs/Midtown Station redevelopment negotiations in Kansas City, Kansas.

---

## Source Register

| ID | Tier | URL | Date / access | What it anchors | Issue mapping |
|---|---|---|---|---|---|
| s-fec-candidate | primary | https://www.fec.gov/data/candidate/S6KS00270/?cycle=2026&election_full=false | accessed 2026-05-19 | Candidate ID, office, party, challenger status, Statement of Candidacy filed 2025-12-03, finance totals through 2026-03-31 | status, campaign finance |
| s-fec-committee | primary | https://www.fec.gov/data/committee/C00929240/?cycle=2026 | accessed 2026-05-19 | Active Senate principal campaign committee, committee ID, treasurer, mailing address, Statement of Organization, finance totals | status, campaign finance |
| s-fec-form2 | primary | https://docquery.fec.gov/pdf/588/202512039793359588/202512039793359588.pdf | filed 2025-12-03; accessed 2026-05-19 | FEC Form 2 Statement of Candidacy for Murray, Erik, Senate, KS, Democratic Party, principal committee designation | official candidacy |
| s-fec-form1 | primary | https://docquery.fec.gov/pdf/572/202512039793359572/202512039793359572.pdf | filed 2025-12-03; accessed 2026-05-19 | FEC Form 1 Statement of Organization for Erik Murray for Kansas | committee structure |
| s-ks-sos-candidate-info | primary | https://www.sos.ks.gov/elections/candidate-information.html | accessed 2026-05-19 | Kansas filing rules, filing deadline, U.S. Senate office up in 2026, filing fee/petition requirements | ballot status |
| s-ks-sos-dates | primary | https://sos.ks.gov/elections/important-election-dates.html | accessed 2026-05-19 | 2026 Kansas primary and general election dates | election dates |
| s-ks-sos-upcoming-candidates | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | accessed 2026-05-19 | Returned JavaScript/anti-bot gate; direct candidate-list row not readable | blocker |
| s-campaign-home | primary | https://www.erikforkansas.com/ | accessed 2026-05-19 | Candidate-controlled homepage, office claim, biography preview, news links, donation/social/contact links | biography, campaign activity |
| s-campaign-bio | primary | https://www.erikforkansas.com/meet-erik | accessed 2026-05-19 | Candidate-controlled biography, family, education, Indian Springs project, Top 13 summary | biography, issue overview |
| s-campaign-issues | primary | https://www.erikforkansas.com/issues | accessed 2026-05-19 | Candidate-controlled "13 Areas of Focus" issue platform | all stated issue areas |
| s-campaign-tornado | primary | https://www.erikforkansas.com/news/tornado-relief | 2026-04-14; accessed 2026-05-19 | Campaign says statewide/local donations for one week would be redirected to Kansas tornado relief | disaster relief, campaign conduct |
| s-campaign-chiefs | primary | https://www.erikforkansas.com/news/chiefs | 2026-03-12; accessed 2026-05-19 | Candidate-controlled press release on Chiefs stadium deal and Wyandotte community investment | local development, governance |
| s-campaign-launch | primary | https://www.erikforkansas.com/news/launch | 2025-12-03; accessed 2026-05-19 | Launch placeholder, paid-for footer, campaign contact/social links | campaign presence |
| s-join-home | primary | https://join.erikforkansas.com/ | accessed 2026-05-19 | Campaign link hub; official website, donate, volunteer, supporter, events, KS House tracker, Students for Erik, register to vote; embedded videos and news links | online organizing |
| s-join-feed | primary | https://join.erikforkansas.com/feed.xml | lastBuildDate 2026-05-19; accessed 2026-05-19 | RSS feed of campaign issue articles on agriculture, housing, Wyandotte development, estate tax priorities | issue activity |
| s-youtube-channel | social | https://www.youtube.com/@Erik4KS | accessed 2026-05-19 | Campaign YouTube channel identity and channel ID `UC8B-vmJtB0AKoiOF8tKJPNg` | social presence |
| s-youtube-rss | social | https://www.youtube.com/feeds/videos.xml?channel_id=UC8B-vmJtB0AKoiOF8tKJPNg | accessed 2026-05-19 | Public RSS video list, publication dates, titles, descriptions, view/rating counts | social issue signals |
| s-social-harvest-local | primary-local | memory/candidates/erik-murray/social-harvest.md | captured 2026-05-11; reviewed 2026-05-19 | Local logged-out social/campaign harvest across website, YouTube, Facebook, Instagram, X, LinkedIn, platform absence checks | social mapping |
| s-kdp-candidates | secondary | https://kansasdems.org/candidates | accessed 2026-05-19 | Kansas Democratic Party lists Murray under U.S. Senate, with caveat to reference SOS for filed candidates | party listing |
| s-iola-register | secondary | https://www.iolaregister.com/news/local-news/senate-hopeful-pays-visit-to-iola-3 | 2026-02-11; accessed 2026-05-19 | Iola/Humboldt campaign visit, first-time candidate, campaign themes, individual-funded quote, issue statements | campaign trail, finance, issues |
| s-kansas-reflector-profile | secondary | https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/ | 2026-03-16; accessed 2026-05-19 | Profile/interview, Indian Springs context, 105-county tour, healthcare/education/economy focus, immigration/tariff remarks | biography, issue statements |
| s-kansas-reflector-forum | secondary | https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-focus-on-defeating-gop-incumbent/ | 2026-03-08; accessed 2026-05-19 | Democratic candidate forum; Murray remarks on immigration, tariffs/tax policy, rural hospitals, schools | campaign forum |
| s-kshb-indian-springs | secondary | https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan | 2026; accessed 2026-05-19 | Indian Springs/Midtown Station plan, UG dispute, financing, land price, transparency statements | action record, local development |
| s-nrsc-complaint | secondary | https://www.nrsc.org/press-releases/nrsc-calls-for-investigation-into-four-kansas-democrat-senate-candidates-for-violating-the-law-2026-03-11/ | 2026-03-11; accessed 2026-05-19 | Partisan complaint alleging late Senate personal financial disclosures by several Kansas Democratic Senate candidates including Murray | disclosure controversy |
| s-senate-ethics-disclosure | primary | https://www.ethics.senate.gov/public/index.cfm/financialdisclosure | accessed 2026-05-19 | Senate financial disclosure rules and public disclosure search location | disclosure rules |

---

## Election and Filing Records

### FEC candidate record

**Sources:** s-fec-candidate, s-fec-form2.

FEC lists Murray as:

- Candidate for Senate, Kansas.
- Candidate ID `S6KS00270`.
- Democratic Party.
- Type of candidacy: challenger.
- Current Statement of Candidacy `FEC-1927330`, filed Dec. 3, 2025.
- Authorized principal committee: `ERIK MURRAY FOR KANSAS (C00929240)`.

The Form 2 PDF lists the office sought as Senate, state as KS, district as `00`, party as Democratic Party, 2026 election, and `Erik Murray for Kansas` as the principal campaign committee.

### FEC committee record

**Sources:** s-fec-committee, s-fec-form1.

FEC lists `ERIK MURRAY FOR KANSAS` as:

- Senate committee.
- Principal campaign committee.
- Committee ID `C00929240`.
- Treasurer Andrew Madras.
- Mailing address: PO Box 3032, 2200 W 36th Ave, Kansas City, KS 66103.
- Authorizing candidate Murray, Erik.
- Current Statement of Organization `FEC-1927327`, filed Dec. 3, 2025.

### Kansas filing framework and ballot caveat

**Sources:** s-ks-sos-candidate-info, s-ks-sos-dates, s-ks-sos-upcoming-candidates, s-kdp-candidates.

Kansas SOS says:

- Democratic and Republican candidates must run in the primary to secure nomination.
- Candidates for national, state, legislative, and judicial offices must file with the Secretary of State.
- A candidate is not considered filed until petition or declaration and fee is received.
- Primary filing deadline is noon Monday, June 1, 2026.
- Independent nomination deadline is noon Monday, Aug. 3, 2026.
- One U.S. Senator is among the offices to be elected in 2026.
- U.S. Senator filing fee total is $1,760, or a petition threshold of 1% party for party candidates.
- 2026 primary election date is Aug. 4, 2026.
- 2026 general election date is Nov. 3, 2026.

The SOS upcoming-candidate page returned: "JavaScript is disabled. In order to continue, we need to verify that you're not a robot." Therefore, this pass did not directly confirm the official SOS candidate-list row.

Kansas Democratic Party lists Murray among U.S. Senate candidates but states that its list is to the best of party knowledge and that readers should reference the Secretary of State for filed candidates.

---

## Campaign Finance

### FEC summary through March 31, 2026

**Sources:** s-fec-candidate, s-fec-committee.

FEC financial summary for coverage dates Nov. 23, 2025 to March 31, 2026:

- Total receipts: $179,817.62.
- Total contributions: $179,817.62.
- Total individual contributions: $179,817.62.
- Itemized individual contributions: $169,925.00.
- Unitemized individual contributions: $9,892.62.
- Party committee contributions: $0.00.
- Other committee contributions: $0.00.
- Candidate contributions: $0.00.
- Transfers from other authorized committees: $0.00.
- Total loans received: $0.00.
- Loans made by candidate: $0.00.
- Other loans: $0.00.
- Offsets to operating expenditures: $0.00.
- Other receipts: $0.00.
- Total disbursements: $134,230.89.
- Operating expenditures: $134,230.89.
- Ending cash on hand: $45,586.73.
- Debts/loans owed to committee: $0.00.
- Debts/loans owed by committee: $0.00.

This updates the older local site-profile total through Dec. 31, 2025, which showed $124,598.62 raised, $15,625.69 spent, and $108,972.93 cash on hand.

### Donor and funding notes

**Sources:** s-fec-candidate, s-fec-committee, s-iola-register.

FEC aggregates show all receipts through March 31, 2026 as individual contributions, with no party committee, other committee, candidate, transfer, or loan receipts. The Iola Register reported Murray said his campaign money came from individuals and that no funding came from PACs or corporations.

**Use caution:** this pass did not capture a full itemized donor export. The OpenFEC API returned an `OVER_RATE_LIMIT` error for `DEMO_KEY`, and the FEC web transaction pages did not render transaction rows server-side. Do not summarize donor geography, employer/occupation patterns, or top contributors until an export is available.

### Disclosure controversy

**Sources:** s-nrsc-complaint, s-senate-ethics-disclosure.

The Senate Ethics financial-disclosure page says Senate candidates must file required financial disclosure reports and points to the Secretary of the Senate public eFD search. The NRSC published a March 11, 2026 press release calling for a Senate Ethics investigation of Erik Murray, Sandy Spidel Neumann, Christy Davis, and Anne Parelkar for allegedly failing to file Personal Financial Disclosure Forms within 30 days of becoming candidates.

**Could not confirm:** no official Senate Ethics disposition, penalty, dismissal, extension, amended filing, or candidate response was found in this pass. Treat this as a partisan complaint plus a confirmed disclosure-rule backdrop, not as adjudicated misconduct.

---

## Biography and Professional Record

### Candidate-controlled biography

**Sources:** s-campaign-home, s-campaign-bio, s-join-home.

Campaign materials say Murray:

- Was born at KU Med and raised in Kansas City, Kansas.
- Attended Fellowship Christian Church with his grandmother while growing up.
- Attended St. Patrick's Catholic School.
- Graduated from Sumner Academy.
- Is an entrepreneur, husband, and father.
- Lives in Wyandotte County with his wife, Nicole, and has four children, two of whom still live at home and attend Sumner Academy.
- Started in construction crews and built multimillion-dollar businesses, according to campaign language.
- Identified the former Indian Springs Mall site as a redevelopment opportunity including housing, retail, job training, childcare, and public transportation.

**Use caution:** childhood church and Catholic-school references are biographical only. They do not confirm current church membership or religious-liberty policy.

### Professional/development record

**Sources:** s-kshb-indian-springs, s-kansas-reflector-profile, s-iola-register.

KSHB identifies Murray as managing partner of Eastside Innovation and reports the proposed Midtown Station development at the former Indian Springs Mall site would include 2,000 multifamily units, 63 single-family homes, 150 townhomes, affordable housing, childcare, retail, a hotel, and a grocery store. KSHB reports the project remained in limbo because Eastside Innovation and the Unified Government were far apart on land price, financing/capital-stack questions, tax-credit deadlines, outside-counsel funding-agreement costs, and transparency around negotiations.

Kansas Reflector reports Murray said the Indian Springs project shaped his understanding of the disconnect "between what capital wants and what community wants," as well as local/state/federal governance problems. The Iola Register describes him as a real estate developer who founded Eastside Innovation LLC, a commercial real estate and clean energy infrastructure development firm.

---

## Issue Area 1 - Healthcare

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-home, s-social-harvest-local, s-youtube-rss, s-kansas-reflector-profile, s-iola-register.

Campaign issue page supports universal healthcare, restoring ACA cuts, protecting and expanding Medicaid, and building toward universal coverage. The homepage says healthcare has become less accessible and more expensive. Local social harvest captured YouTube descriptions stating healthcare is a fundamental need/right. Kansas Reflector and Iola Register both identify healthcare as one of Murray's main campaign themes.

### Action evidence

- **2026 campaign issue page:** states healthcare platform and specific ACA/Medicaid steps. Source: s-campaign-issues.
- **2026-02-27 YouTube post:** "HEALTHCARE is a RIGHT" was one of the higher-engagement captured YouTube items in local harvest and RSS. Sources: s-social-harvest-local, s-youtube-rss.
- **2026-02-11 Iola visit:** Iola Register reports Murray said his campaign hinges on healthcare, education, and affordability. Source: s-iola-register.

### Gap / caution

No legislative votes or public administrative decisions on healthcare were found. The platform is candidate-stated.

---

## Issue Area 2 - Education

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-bio, s-social-harvest-local, s-youtube-rss, s-iola-register.

Campaign issue page supports fully funding public education, special education, trades training, and college pathways. Campaign biography says Murray's mother was a public-school teacher and administrator and says education is part of his family story. YouTube posts discuss three generations of his family attending Sumner Academy and thank Kansas for facilitating education for families.

### Action evidence

- **2026 campaign issue page:** lists fully funded education as one of the "13 Areas of Focus." Source: s-campaign-issues.
- **2026-04-19 YouTube post:** discusses Sumner Academy and public education as a multigenerational family institution. Sources: s-social-harvest-local, s-youtube-rss.
- **2026-02-11 Iola visit:** Iola Register reports Murray said he would focus on fully funding public education. Source: s-iola-register.

### Gap / caution

No school-board, legislative, or education-administration voting record was found.

---

## Issue Area 3 - Housing and Community Development

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-bio, s-campaign-chiefs, s-kshb-indian-springs, s-join-feed.

Campaign issue page supports building more housing, reducing excessive red tape, incentivizing new construction, and investing in infrastructure that makes neighborhoods possible. Campaign biography points to the Indian Springs redevelopment concept as a public example of his building/development record.

### Action evidence

- **Indian Springs/Midtown Station project:** KSHB reports Eastside Innovation's proposed development includes multifamily housing, single-family homes, townhomes, affordable housing, childcare, retail, a hotel, and grocery store. Source: s-kshb-indian-springs.
- **Unified Government negotiations:** KSHB reports disputes over land price, financing, tax-credit timing, and outside-counsel payment. Source: s-kshb-indian-springs.
- **Chiefs/Wyandotte release:** campaign says Murray supported negotiating a Chiefs deal but objected to leaving Wyandotte neighborhoods behind. Source: s-campaign-chiefs.
- **Campaign issue RSS:** campaign link-hub RSS includes issue articles on the Chiefs stadium deal and mortgage/housing affordability. Source: s-join-feed.

### Gap / caution

The Indian Springs record is a private/public development-negotiation record, not a completed legislative record. The public reporting includes both Murray's position and Unified Government concerns; both should remain visible.

---

## Issue Area 4 - Immigration and Border Administration

### Candidate-stated platform

**Sources:** s-campaign-issues, s-kansas-reflector-profile, s-kansas-reflector-forum.

The new campaign issue page says immigration is an economic engine and supports secure, orderly borders; a humane, efficient system; clear pathways; real enforcement; and a system built for the 21st-century economy. Kansas Reflector profile and forum coverage include Murray remarks criticizing current immigration conditions and calling for a functioning system.

### Action evidence

- **2026 campaign issue page:** gives direct candidate-controlled immigration plank. Source: s-campaign-issues.
- **2026-03-16 Kansas Reflector profile:** quotes Murray on immigration system problems and constitutional/humanity concerns. Source: s-kansas-reflector-profile.
- **2026-03-08 candidate forum:** Kansas Reflector reports Murray connected immigration with tariffs/tax policy and community concerns. Source: s-kansas-reflector-forum.

### Gap / caution

No detailed border staffing, asylum, visa-category, or enforcement-budget proposal was found beyond the broad campaign language.

---

## Issue Area 5 - Taxes, Wages, Tariffs, and Affordability

### Candidate-stated platform

**Sources:** s-campaign-issues, s-iola-register, s-kansas-reflector-profile, s-kansas-reflector-forum, s-social-harvest-local.

Campaign issue page supports cutting taxes on working families, exploring exempting the first $75,000 to $100,000 of income from federal taxes, requiring corporations and the ultra-wealthy to pay a fair share, raising the federal minimum wage to at least $15 per hour, and ending broad tariffs. It says tariffs are a tax paid at the register, grain elevator, and parts counter, and calls for targeted tariffs only in specific national-interest cases with clear criteria and sunset provisions.

### Action evidence

- **2026 campaign issue page:** lists tax, minimum wage, and tariff planks. Source: s-campaign-issues.
- **2026-02-11 Iola visit:** Iola Register reports Murray said he would ban congressional stock trading, undo Trump tariff policy, and raise the minimum wage. Source: s-iola-register.
- **2026-03-16 Kansas Reflector profile:** reports Murray supports raising the minimum wage and says tariffs are a tax. Source: s-kansas-reflector-profile.
- **2026 local social harvest:** YouTube posts connect tariffs to farmers, rural hospitals, and small businesses. Source: s-social-harvest-local.

### Gap / caution

No budget score, legislative language, tax-rate schedule, or phase-in timetable beyond campaign statements was found.

---

## Issue Area 6 - Monopoly / Antitrust / Small Business

### Candidate-stated platform

**Sources:** s-campaign-issues, s-campaign-home, s-campaign-bio, s-social-harvest-local.

Campaign issue page supports enforcing antitrust law and protecting workers, small businesses, and consumers from large companies that fix prices or crush competition. Homepage and biography center Murray's business/development identity and small-business/economic-development claims. Social harvest captured "extractive economy" and local business/community-investment posts.

### Action evidence

- **2026 campaign issue page:** lists "Break Up Monopolies" plank. Source: s-campaign-issues.
- **2026-04-20 YouTube post:** describes extractive economies, local value, underinvestment, and locally rooted business. Sources: s-social-harvest-local, s-youtube-rss.
- **2026-05-10 YouTube post:** discusses Trox as art, mentorship, memory, small business, and community. Sources: s-social-harvest-local, s-youtube-rss.

### Gap / caution

No specific federal antitrust bill endorsements or sector-by-sector proposals were found.

---

## Issue Area 7 - Democracy, Civil Rights, Reproductive Freedom, and Privacy

### Candidate-stated platform

**Sources:** s-campaign-issues, s-iola-register.

Campaign issue page supports holding every branch of government accountable, transparency, voting-rights protection, easier voting access, women's rights, privacy rights, restoring reproductive freedom, and equal protection regardless of gender, race, age, orientation, or zip code. This direct candidate-controlled language updates the older local data, which had no candidate-specific abortion or LGBTQ policy statement.

### Action evidence

- **2026 campaign issue page:** "Protect Democracy & Civil Rights" plank includes voting rights, reproductive freedom, privacy rights, and equal protection. Source: s-campaign-issues.
- **2026-02-11 Iola visit:** Iola Register reports Murray criticized redistricting efforts and supported congressional term limits. Source: s-iola-register.

### Gap / caution

No specific abortion-limit, federal statutory text, court-reform, or voting-rights bill citation was found. No marriage-specific policy statement was found beyond equal-protection/orientation language.

---

## Issue Area 8 - Government Reform and Ethics

### Candidate-stated platform

**Sources:** s-campaign-issues, s-iola-register, s-social-harvest-local.

Campaign issue page supports ending Citizens United, banning congressional stock trading, passing/enforcing a code of ethics across all three branches, reforming lobbying and the revolving door, and restoring trust/accountability. Iola Register reports Murray said he wants congressional term limits and would ban congressional stock trading. Local YouTube harvest shows "There SHOULD be TERM LIMITS" was the highest-engagement YouTube item in the captured set.

### Action evidence

- **2026 campaign issue page:** "People First Reforms" plank lists campaign-finance, stock-trading, ethics, and lobbying reforms. Source: s-campaign-issues.
- **2026-02-11 Iola visit:** reports term-limit and stock-trading-ban positions. Source: s-iola-register.
- **2026-02-22 YouTube post:** term-limits video was highest-engagement in local harvest. Source: s-social-harvest-local.

### Gap / caution

No personal-office ethics record exists because Murray has not held elected office in the sourced record. The NRSC disclosure complaint remains unadjudicated in this pass.

---

## Issue Area 9 - Agriculture and Rural Communities

### Candidate-stated platform

**Sources:** s-campaign-issues, s-join-feed, s-social-harvest-local, s-kansas-reflector-profile.

Campaign issue page ties tariffs to Kansas farmers, ranchers, manufacturers, and consumers. Join-site RSS includes farm-bankruptcy and rural Kansas issue articles. YouTube/social harvest includes posts on farm closures, rural hospitals, and tariffs. Kansas Reflector reports Murray discussed rural hospital risk and the farm effects of tariff/foreign-policy decisions.

### Action evidence

- **2026 campaign issue page:** tariff plank directly references Kansas farmers and ranchers. Source: s-campaign-issues.
- **2026-02-13 campaign RSS item:** issue article on farm bankruptcies and mental-health crisis. Source: s-join-feed.
- **2026-03-08 YouTube posts:** local harvest captured "America's Broken Promises" and "FARMERS are Losing their Farms." Source: s-social-harvest-local.
- **2026-03-16 Kansas Reflector profile:** reports Murray discussed rural hospitals and agriculture effects. Source: s-kansas-reflector-profile.

### Gap / caution

No farm-bill title-by-title platform, crop insurance plank, water-policy plank, or Ogallala Aquifer policy was found.

---

## Issue Area 10 - Veterans and Public Service

### Candidate-stated platform

**Sources:** s-campaign-issues, s-social-harvest-local.

Campaign issue page supports a fully funded VA, scholarships, childcare, job training, and reduced barriers for veterans, teachers, first responders, and healthcare workers. Social harvest includes a March 11 YouTube post titled "We Have MONEY for WAR but NOT VETERANS."

### Action evidence

- **2026 campaign issue page:** "Honor Those Who Serve" plank. Source: s-campaign-issues.
- **2026-03-11 YouTube post:** veterans/war spending post captured in local harvest. Source: s-social-harvest-local.

### Gap / caution

No detailed VA policy, veterans benefits proposal, or military-installation plan was found. No Fort Riley-specific candidate statement was found.

---

## Issue Area 11 - Energy and Technology

### Candidate-stated platform

**Sources:** s-social-harvest-local, s-youtube-rss, s-kshb-indian-springs.

The main issue page does not include a detailed energy or technology plank. YouTube RSS and local harvest include posts on alternative energy/windfarms and AI. KSHB reports the Indian Springs project included a proposed solar array/microgrid and investment tax credits tied to that infrastructure.

### Action evidence

- **2026-05-10 YouTube post:** "We NEED Alternatives Types of ENERGY (Windfarms?)" discusses energy options. Sources: s-youtube-rss, s-social-harvest-local.
- **2026-05-10 YouTube post:** "What we NEED to Think ABOUT AI" asks about AI. Sources: s-youtube-rss, s-social-harvest-local.
- **Indian Springs project:** KSHB reports the project sought a solar array/microgrid and related tax credits. Source: s-kshb-indian-springs.

### Gap / caution

No detailed energy, grid, permitting, AI regulation, or technology-workforce platform was found.

---

## Issue Area 12 - Religious Liberty / Faith-Related Public Record

### Candidate-stated platform

**Sources:** s-campaign-bio, s-campaign-issues.

Campaign biography says Murray attended Fellowship Christian Church with his grandmother while growing up and attended St. Patrick's Catholic School. No current church affiliation or religious-liberty policy plank was found in campaign materials.

### Gap / caution

Do not infer current faith commitments, church membership, or policy from childhood church/school references. No religious-liberty issue card should state a policy position beyond "no candidate-controlled statement found" unless later evidence emerges.

---

## Issue Area 13 - Guns / Second Amendment

### Candidate-stated platform

No candidate-controlled gun-policy plank was found in the reviewed campaign issue page, homepage, social harvest, or current RSS checks.

### Gap / caution

Do not infer a gun-policy position from party affiliation or from the Kansas Democratic Party platform.

---

## Social / Online Relevance

**Sources:** s-social-harvest-local, s-youtube-rss, s-campaign-home, s-join-home.

Local harvest and current checks show campaign-controlled public presences on the campaign website, campaign link hub, Facebook, Instagram, YouTube, and X. LinkedIn exists as an identity lead. No candidate-controlled Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was confirmed.

Issue-relevant social signals:

- **Local investment / small business:** YouTube posts on extractive economies and Trox/community investment.
- **Education:** Sumner Academy/public education post.
- **Healthcare:** "HEALTHCARE is a RIGHT" and related healthcare text.
- **Government reform:** term-limits post.
- **Agriculture / rural hospitals / tariffs:** farm closures, rural hospitals, and tariffs posts.
- **Energy / AI:** wind/energy and AI posts.

Avoid using profile-level follower counts as issue evidence. Use them only as account-presence context.

---

## Could Not Confirm / Blockers

- Direct Kansas SOS upcoming-candidate row for Murray, because the SOS page returned a JavaScript/anti-bot gate.
- Final official ballot status, because the Kansas filing deadline is June 1, 2026 and final certification has not occurred as of this pass.
- Kansas Democratic Party lists Murray under U.S. Senate but its website link uses `erikmurray.com`; the active candidate-controlled sites verified in this pass are `erikforkansas.com` and `join.erikforkansas.com`.
- Full itemized FEC donor and disbursement exports, because OpenFEC `DEMO_KEY` was rate-limited and FEC web tables did not render transaction rows server-side.
- Any official Senate Ethics disposition or candidate response to the NRSC personal-financial-disclosure complaint.
- Any current church membership.
- Any candidate-controlled position on guns, marijuana/drug policy, detailed water policy, Fort Riley, Fort Hays State University, or the Ogallala Aquifer.
- Logged-out full post corpuses for Facebook, Instagram, and X.

---

## Suggested Downstream Profile Updates

- Update campaign finance from Dec. 31, 2025 totals to March 31, 2026 FEC totals.
- Replace older "no specific personal statement found" language on abortion/reproductive freedom, LGBTQ/civil-rights policy, and immigration with the new candidate-controlled issue-page language where appropriate.
- Preserve "no statement found" for guns, religious liberty, marijuana/drug policy, water, and Fort Riley/FHSU-specific issues.
- Keep Indian Springs as action evidence, with both Murray's transparency/development claims and the Unified Government's land-price/financing/stewardship concerns.
- Treat NRSC complaint as unresolved partisan allegation unless official Senate Ethics action is later confirmed.
