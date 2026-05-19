# Sleuth Pass -- Ty Masterson

**Date:** 2026-05-19
**Agent:** codex (Worker 4; online-sleuth fallback)
**Phase / Stage:** Phase 2, all-candidate deepening, Stage 2.a
**Candidate slug:** ty-masterson
**Office:** Kansas Governor candidate; Kansas Senate President, District 16
**Election:** kansas-governor-2026; Kansas primary date 2026-08-04; general date 2026-11-03

---

## Official Status

| Item | Status | Evidence |
| --- | --- | --- |
| Current office | Confirmed Kansas Senate President, Republican, Senate District 16, Butler County | Kansas Legislature profile lists "President of the Senate," party, district, contact info, terms: House 2005-2008 and Senate 2009-present. |
| Governor campaign committee | Confirmed | KPDC/SOS statewide-office index lists "Masterson, Ty" under gubernatorial candidates for the 2026 cycle with an Appointment of Treasurer and 202601 report. Appointment form lists office sought as Governor and execution date 2025-07-22. |
| Formal ballot filing | Could not confirm from SOS candidate-list endpoint in this environment | Kansas SOS says candidates are not considered filed until petition/declaration and fee are received, and the 2026 primary filing deadline is 12:00 p.m. Monday, 2026-06-01. The SOS candidate-list page was CloudFront/JavaScript-gated during this pass. |
| Campaign website | Confirmed candidate-controlled | mastersonforgovernor.com is paid for by Ty Masterson for Governor, Tom Devlin, Treasurer. |

## Primary-Source Anchors

- Kansas Legislature profile: confirms Senate President role, district, party, terms, committee roles, and 2025 vote-record link.
- Kansas Senate vote history, 2025: confirms Masterson's recorded votes on SB 4, SB 5, SB 63, SB 244, SCR 1611, HCR 5011, and other measures.
- SB 63 official bill page and vote records: Help Not Harm Act, veto overridden; Masterson is listed among Senate yeas on final passage and veto override.
- SB 244 official bill page and vote records: public-building bathroom/ID-sex-definition bill, veto overridden; Masterson is listed among Senate yeas on concurrence and veto override.
- SCR 1611 official page and Masterson proponent testimony: direct election of Kansas Supreme Court justices and abolition of the Supreme Court Nominating Commission; Masterson testified as a proponent on 2025-02-25.
- SB 4 and SB 5 official pages: advance-ballot deadline and federal election-funds approval bills, both veto-overridden; Masterson's vote record lists yea votes.
- HCR 5011 official page: property-tax valuation-cap constitutional amendment attempt; Masterson's vote record lists yea votes, but the measure page currently marks it died.
- KPDC/SOS finance index and PDFs: appointment of treasurer; 2025 receipts/expenditures report.

## Social / Online-Presence Leads

| Platform / surface | Status | Notes / issue mapping |
| --- | --- | --- |
| Campaign site | Found | Strongest candidate-controlled issue source. Maps to taxes, jobs, public safety, education, LGBTQ+ policy, elections, faith/church metadata. |
| X / Twitter @TyMastersonKS | Found by campaign-site link and indexed mirror | Direct X timeline was not fully accessible logged out. Existing social-harvest captured indexed public items on property taxes, ICE/Trump, endorsements, Charlie Kirk/free speech, law enforcement, and campaign travel. |
| Facebook TyMastersonKansas | Found by campaign-site link | Login-gated; no reliable post inventory or engagement counts captured. |
| Instagram senator.tymasterson | Found by campaign-site link | Logged-out capture did not expose reliable post inventory or engagement counts. |
| YouTube / TikTok / Truth Social / Gab / Gettr / Substack / Reddit | No candidate-controlled account confirmed | Reddit contains discussion about Masterson but is not candidate-controlled and should not be treated as his speech. |
| Young Republicans photo controversy | Secondary lead only | Kansas City Star / Kansas Reflector reported Dwyer and Hendrix were photographed at Masterson's kickoff and that Masterson posted a statement denying association with them. This maps to campaign-affiliation scrutiny only; no belief inference. |

## Issue-Mapped Observations

### Taxes / Property Tax / Spending

- Campaign site states Masterson led a nearly $2 billion tax cut and promises more tax cuts as governor.
- KVOE interview coverage on 2026-05-15 says Masterson described a property-tax crisis, said Kansas should trim spending, and argued spending growth should slow.
- Official vote record shows Masterson voted yea on HCR 5011/Senate substitute property-tax valuation-cap votes in 2025. The resolution page now marks the measure died, so this is best framed as a supported-but-not-enacted constitutional amendment attempt.
- Issue mapping: taxes/property tax; action evidence should pair campaign claim with official votes and measure status.

### Education / School Choice / Student Speech / DEI

- Campaign site frames education around reading/math proficiency, parent say, teacher pay for "good teachers," and opposition to "woke" policy.
- Campaign bio says Masterson fought DEI in higher education and transgender participation in women's sports.
- Salina Post debate coverage says Masterson advocated school choice and tied education policy to the Working Family Tax Cut Act.
- HPPR/Kansas Reflector coverage says Masterson publicly shared White House praise for veto overrides involving private-school support.
- Issue mapping: school choice / education governance; actions can include SB 361 only if final compiler separately confirms Masterson's member vote from official vote record.

### Marriage & Family / LGBTQ+ Policy

- SB 63 and SB 244 provide the strongest official action anchors. Masterson voted yea on SB 63 final passage and veto override in 2025; he voted yea on SB 244 concurrence and veto override in 2026.
- Campaign site uses these actions as record claims: restrictions on gender-transition care for minors, transgender participation in women's sports, and DEI policy.
- Issue mapping: LGBTQ+ policy and family/children policy. Use official bill descriptions; do not infer motive from faith, party, or social associations.

### Judicial Selection / Courts

- SCR 1611 is the strongest candidate-controlled primary anchor. Masterson testified in favor of direct election of Kansas Supreme Court justices and abolishing the Supreme Court Nominating Commission.
- His testimony framed the current process as insulated from voters and argued that elections would make politics explicit rather than hidden.
- Issue mapping: judicial selection / courts; direct testimony belongs in stated.text, vote/measure status as action evidence.

### Elections / Voting Rules

- Official vote record shows Masterson supported SB 4 (advance ballots must be returned by 7 p.m. Election Day) and SB 5 (federal election funds require legislative approval).
- Campaign bio says he preserved election integrity with "commonsense measures."
- Issue mapping: election administration / ballot rules; action evidence should use official bill pages and vote record.

### Public Safety / Law Enforcement / Immigration

- Campaign site says he will fund police, back tough-on-crime policies, and stand with law enforcement.
- HPPR/Kansas Reflector coverage says 2026 Legislature enacted veto overrides on first-responder buffer-zone legislation and sheriff/ICE agreements; verify bill numbers and Masterson's recorded votes before converting those to ActionEvidence.
- Existing social-harvest captures an indexed X item saying he stood with ICE and President Trump. Treat this as a social signal, not as a complete immigration platform.

### Abortion / Sanctity of Life

- Salina Post debate coverage says all six GOP debate participants supported the conservative platform on the right to life.
- Kansas Reflector snippets say Masterson spoke at the 2026 March for Life rally and described abortion/courts in faith-inflected terms.
- Masterson's Combat Antisemitism interview includes faith language about every life being precious, but that interview's context was Israel/antisemitism; do not over-map it to abortion without the debate/rally sources.

### Marijuana / Drug Policy

- Salina Post debate coverage says Masterson supported federal marijuana reclassification for research into damaging effects, while the candidates did not support Kansas legalization.
- Existing raw file says he would not welcome legalization legislation. This should be sourced to debate coverage, not inferred from Senate control.

### Campaign Finance / Donor Signals

- Official 2025 report: $695,998.16 contributions/receipts, $8,476.06 expenditures, $687,522.10 cash on hand, $24,120.24 in-kind contributions.
- KPDC/SOS index lists the report under 202601.
- Kansas Reflector reported Masterson did not make a personal loan, had $687,000 cash, and said Take Back Kansas had $700,000 in an account that did not disclose donors.
- Wichita Eagle search snippet flags scrutiny of an $8,000 Shaman Botanicals contribution tied to kratom/7-OH policy. Treat as a lead unless the article or official report is reviewed in full.

## Could Not Confirm

- Formal SOS ballot filing as of 2026-05-19; the official candidate-list endpoint was blocked by CloudFront/JavaScript challenge.
- Running mate / lieutenant governor selection.
- Complete direct X, Facebook, and Instagram post inventories or reliable first-party engagement metrics.
- Candidate-controlled LinkedIn, YouTube, TikTok, Truth Social, Gab, Gettr, Substack, or Reddit presence.
- Full 2026 final vote list for every veto override referenced in the May 2026 White House-praise story; several bill pages were identified, but not every member vote was pulled.
- Whether HCR 5011's "died" status reflects failure to reach final ballot after Senate adoption, House nonconcurrence, or another final-disposition rule. Treat as a failed property-tax amendment attempt until final compiler verifies legislative history.

## Gaps For Narrative Writer

- The current UI object has `campaignWebsite` set to `https://mann.house.gov/about`, which is not Ty Masterson's campaign site. This worker is not authorized to edit UI files, so flag for orchestrator/site-profile-writer.
- Existing UI source tiers mark campaign website pages as secondary. Candidate-controlled campaign pages should likely be `primary` in v2 source registry.
- Existing UI church URL points to `ihm-church.com`, but Ty Masterson's campaign bio identifies NewSpring Church. Candidate memory should use https://www.newspring.org/ if church metadata is carried forward.
- Avoid treating party platform positions as Masterson's personal statements where candidate-specific statements or votes are absent.
