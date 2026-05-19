# Sleuth Pass - Chris Mann

**Date**: 2026-05-19  
**Agent**: codex (internet-investigator / online-sleuth fallback)  
**Phase / Stage**: Phase 2, all-candidate deepening, Stage 2.a  
**Candidate slug**: chris-mann  
**Position**: Kansas Attorney General candidate, Democrat  
**Election**: kansas-ag-2026

---

## Official Status

- **Current office**: Chris Mann is not an incumbent officeholder in the sources reviewed. His public record is professional, campaign, and advocacy-based rather than legislative or executive-office-based.
- **2026 office on ballot**: The Kansas Secretary of State candidate-information page lists Attorney General among offices to be elected or retained in 2026. The same page says Democratic and Republican candidates run in the primary and must file with the Secretary of State.
- **Filing deadline**: The Kansas SOS candidate-information page lists the 2026 primary filing deadline as 12:00 p.m. Monday, June 1, 2026. As of this pass on May 19, 2026, that deadline has not passed.
- **Candidate finance/status trail**: The Kansas Public Disclosure Commission statewide 2026 election-cycle page lists "Mann, Chris" under **Attorney General Candidates** and links his appointment-of-treasurer document and 2026 receipts/expenditures report. The amended treasurer form shows candidate name Chris D. Mann, office sought Attorney General, date appointed July 24, 2025, treasurer Jill Docking, and execution by Chris Mann on July 24, 2025.
- **Supplemental county list**: A Miami County "unofficial candidate list for primary 2026," updated May 18, 2026, lists Chris Mann, Democratic, Lawrence KS, under Kansas Attorney General. This is a county-published unofficial list, not a replacement for the blocked live SOS candidate-list endpoint.
- **Direct SOS candidate-list limitation**: The SOS candidate-list endpoint at `elections_upcoming_candidate.aspx` returned a CloudFront 403 block in this environment. Final filed-candidate list status should be checked manually by the operator or a browser worker before publication.

Primary anchors:
- Kansas SOS candidate information: https://www.sos.ks.gov/elections/candidate-information.html
- KPDC statewide 2026 filings page: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm
- KPDC Mann January 2026 report: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02CM_202601.pdf
- KPDC amended appointment of treasurer: https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW02CM_amendAT.pdf

---

## Context From Existing Local Files

Existing local files already captured:

- Campaign site, website RSS, Facebook, X/Twitter, Instagram, and YouTube presence from a logged-out May 11, 2026 capture.
- Public platform limitations: direct X, Facebook, and Instagram timelines were not fully harvestable without login/script access, so the existing social harvest used campaign-site links, public metadata, indexed snippets, allied public posts, and credible public coverage.
- Current topic mix: public safety, law enforcement, rule of law, constitutional rights, family/community safety, DUI/victim advocacy, rural law-enforcement support, consumer protection, and contrast with Kris Kobach.
- Visible absences in the logged-out capture: no detailed campaign issue page and no sustained candidate-controlled social thread on abortion, LGBTQ policy, guns, school choice, marijuana, Medicaid expansion, taxes, or judicial selection.
- Local data quality warning: `site-profile.md` contains stray source links from other candidates and a few copy/paste errors. Treat the current v2 pass and cited primary sources as the cleaner source set.

---

## Social / Online Presence Leads

| Platform / source | Status | Notes |
|---|---|---|
| Campaign site | Found | `chrismannforkansas.com`; active, with biography, news/RSS, volunteer, donation, Facebook, X, Instagram, and embedded YouTube video. |
| Facebook | Found / direct feed limited | Campaign site links `facebook.com/ChrisMannKS/`. Existing logged-out harvest captured page metadata and bio but not full post history. |
| X / Twitter | Found / direct feed limited | Campaign site links `x.com/ChrisMannKS`. Existing harvest captured indexed snippets and account-level metadata but not a full direct timeline. |
| Instagram | Found / direct feed limited | Campaign site links `instagram.com/chrismannks/`. Existing logged-out harvest captured account metadata but not reliable post captions or engagement counts. |
| YouTube | Found / sparse | Campaign homepage embeds `Chris Mann - For Kansas` from `@ChrisMann-Kansas`; existing harvest found sparse channel metadata. |
| LinkedIn | Found in prior local research / limited | Existing project source identified a public profile, but logged-out post metadata was not reliably harvestable. |
| Bluesky / TikTok / Truth Social / Gab / Gettr / Substack / Reddit | Not found | No clear candidate-controlled account surfaced in public/logged-out search or the existing harvest. |

Issue-mapping notes:
- Campaign site and social bios map primarily to public safety, law enforcement, rule of law, and family/community safety.
- The Liberal First interview maps to rural law-enforcement support, victim services/domestic violence resources, fentanyl, and communication with rural communities.
- DAGA's May 2026 endorsement statement maps to public safety, consumer protection, constitutional rights, and law-enforcement/prosecutor resources.
- Older 2022 debate coverage maps to abortion/constitutional rights and immigration/criminal-justice trust, but those are not the dominant 2026 campaign themes in candidate-controlled material.

---

## Primary-Source Leads By Issue

### Public Safety / Law Enforcement / Rural Prosecution Support

- Campaign homepage states that Mann's public biography runs from police officer to prosecutor and frames the AG office around constitutional defense, rule of law, and Kansas family safety.
- The campaign biography says Mann became a police officer at 21, was struck by a drunk driver during a 2002 traffic stop, later became a Wyandotte County prosecutor, prosecuted cases from DUI to murder, served at the Kansas Securities Commission, and opened Mann Law Firm in 2016.
- Liberal First's August 26, 2025 article quotes Mann at length on refocusing the AG office on rural law-enforcement and prosecution support. Use the article for issue detail but keep it tiered as secondary/news.
- DAGA's May 6, 2026 endorsement page includes a candidate statement naming public safety, constitutional rights, consumer fraud, and resources for law enforcement and prosecutors as priorities.

### DUI / Victims / Ignition Interlock

- Campaign biography says Mann was hit by a drunk driver in 2002, later volunteered with MADD, served as Kansas Advisory Board Chair in 2011, joined the MADD National Board in 2014, and served as Board Chair until 2020.
- Kansas Legislature 2017 Senate Judiciary testimony opposing SB123 was submitted by Christopher Mann and LeAnn Briggs as MADD volunteers and drunk-driving victims. The testimony opposed changes that MADD said would weaken Kansas's ignition-interlock law.
- FRST Midwest's advisory committee biography repeats the same police-injury, private-practice, MADD, and ignition-interlock advocacy arc. Treat as community/organizational, not candidate-controlled.

### Consumer Protection / White-Collar Crime

- Campaign biography says Mann became a prosecutor for the Kansas Securities Commission, helping protect consumers and seniors by holding white-collar criminals accountable.
- DAGA's 2026 endorsement statement includes a candidate quote saying he would protect consumers from fraud and hold bad actors accountable.
- The Kansas AG official divisions page describes consumer protection and victim services as within the attorney general office's current responsibilities; this supports office-scope relevance, not Mann's personal record.

### Rule of Law / Constitutional Rights / AG Role

- Campaign homepage and current launch coverage repeatedly pair "rule of law" and constitutional rights with public safety.
- WIBW's July 30, 2025 launch coverage reports Mann's second bid and quotes a campaign release saying he would refocus the office on law-enforcement basics, rule of law, rights, and family safety.
- DAGA's May 2026 endorsement statement includes a candidate quote on defending constitutional rights and applying law fairly and consistently.

### Abortion / Constitutional Rights

- Current 2026 campaign website and RSS do not expose a detailed abortion issue page.
- Kansas Reflector's September 23, 2022 debate coverage reported Mann saying he would defend laws but would not use office resources to attack women's constitutional rights. This is a candidate-attributed 2022 statement from debate coverage, not a current 2026 campaign page.
- No candidate-controlled 2026 abortion statement was found in the current campaign site, RSS, or public/logged-out social capture.

### Immigration / Criminal-Justice Trust

- Kansas Reflector's 2022 debate coverage reported Mann saying the federal government had not done enough on immigration and that crime-related cooperation is affected when undocumented people are afraid to speak with police. This is older debate coverage, not a current 2026 campaign plank.
- No current candidate-controlled 2026 immigration issue page or sustained social thread was found.

### Election Administration / 2022 Vote Counting

- Existing local social harvest captured Mann's November 9, 2022 post saying mailed ballots should be counted as the law allows. KWCH also embedded and reported the too-close-to-call statement.
- Kansas SOS official 2022 general-election results list Kobach at 506,817 votes, 50.80%, and Mann at 490,925 votes, 49.20%.

### Campaign Finance / Donor Signals

- KPDC January 2026 report covers January 1, 2025 through December 31, 2025.
- Cover totals: beginning cash $659.00; contributions/receipts $536,639.57; cash available $537,298.57; expenditures/disbursements $280,041.49; ending cash $257,257.08; in-kind contributions $7,655.77; other transactions $0.00.
- The report is 142 pages of Schedule A contributions. Because KPDC displays a statutory warning against copying contributor names for commercial use, this pass preserves totals and filing links rather than reproducing donor lists. The schedule remains available for conflict checks if the operator needs issue-specific donor review.
- Campaign website/news and Sunflower State Journal state Mann raised about $537,000 during 2025, more than the comparable point in his 2022 AG race. Treat campaign/news summaries as secondary to the KPDC report totals.

---

## Online / Social Signals That Map To Issues

- **Public safety / law enforcement**: Campaign site, Facebook bio, Instagram bio, X snippets, and YouTube campaign video metadata repeatedly use former-police-officer/former-prosecutor framing.
- **Rural law enforcement**: Campaign-site RSS excerpt from Liberal First and the full Liberal First interview contain the clearest current rural law-enforcement support language.
- **Consumer protection**: Campaign biography and DAGA candidate quote connect Mann's Securities Commission work and proposed AG priorities to consumer fraud and accountability.
- **DUI / victims**: Campaign biography, Kansas Legislature testimony, MADD press material, and FRST Midwest bio all support issue mapping to drunk-driving prevention and victim advocacy.
- **Social-issue absences**: The existing logged-out social harvest did not find sustained current candidate-controlled posting on abortion, LGBTQ policy, guns, school choice, marijuana, Medicaid expansion, taxes, or judicial selection. Do not infer positions from party label or from DAGA/Kansas Democratic Party affiliation.

---

## Gaps

- Direct SOS live filed-candidate list was blocked by CloudFront 403 in this environment. The accessible SOS candidate-information page, KPDC candidate finance listing, treasurer form, campaign site, and county unofficial candidate list support AG-candidate status, but final official filed status should be checked manually.
- Direct X/Facebook/Instagram timelines were not fully accessible without login/script support. Existing harvest uses public metadata and indexed snippets, not platform exports.
- No complete Facebook comment-section inventory was available.
- No current candidate-controlled issue page found beyond biography/news/volunteer/donation flows.
- No public current church/congregation affiliation was confirmed. The campaign biography uses faith language about legal service, but no congregation is named.
- No public official court/attorney-registration profile for Mann was captured in this pass; the Kansas Courts attorney directory requires direct directory lookup that was not extractable through search.
- No public property-record or court-record sweep was completed beyond broad search; nothing issue-relevant surfaced in targeted current checks.

---

## Could Not Confirm

- Whether the Kansas SOS live candidate list currently marks Mann as filed, because the endpoint was inaccessible from this environment.
- Whether any candidate-controlled Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, or Reddit account exists.
- Current full post-level engagement on Facebook, X, Instagram, or YouTube.
- Any current candidate-controlled 2026 statements on LGBTQ policy, guns, school choice, marijuana, Medicaid expansion, taxes, judicial selection, water, rural hospitals, or broadband.
- Any issue-relevant donor conflict in the 142-page KPDC contribution schedule. The schedule is public and should be reviewed only for a specific, noncommercial research purpose.
