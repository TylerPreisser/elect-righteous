# Notes — evidence-matrix-builder — charlotte-ohara — 2026-05-20

## Summary
- Raw rows read: 4139
- Final deduplicated rows written: 1525
- Duplicate rows absorbed: 2614
- Rejected rows retained in final matrix: 262
- Use-with-caveat rows: 39
- Source-only rows: 22
- Rows without issue mapping: 720

## Final Use Decisions
```json
{
  "use": 90,
  "use-with-caveat": 39,
  "source-only": 22,
  "background-only": 1112,
  "reject": 262
}
```

## Final Confidence
```json
{
  "confirmed": 24,
  "likely": 125,
  "weak-signal": 88,
  "unknown": 1288
}
```

## Source Tiers
```json
{
  "primary": 24,
  "secondary": 125,
  "social": 88,
  "internal-memory": 1288
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 62   |
| 2     | LGBT / gender / parental rights                    | 21   |
| 3     | Education / curriculum / schools                   | 77   |
| 4     | Religious liberty / church / civic morality        | 49   |
| 5     | Taxes / spending / debt                            | 125  |
| 6     | Economy / jobs / labor                             | 42   |
| 7     | Guns / Second Amendment                            | 6    |
| 8     | Immigration / border                               | 6    |
| 9     | Health care / insurance / Medicaid                 | 88   |
| 10    | Election integrity / voting / courts               | 455  |
| 11    | Public safety / law enforcement / criminal justice | 76   |
| 12    | Agriculture / rural economy / water                | 29   |
| 13    | Local governance / transparency / ethics           | 512  |
| 14    | Environment / energy / land use                    | 20   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 39 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-charlotte-ohara-01352: narrative: "_A summary of what Charlotte O'Hara has publicly said, posted, and amplified across campaign channels, public Facebook metadata, indexed public records, and credible news coverage. Drawn from public captures  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-charlotte-ohara-00005: That anti-incentive theme is also central to her launch coverage. Johnson County Post reported on March 10, 2025 that O'Hara made property taxes a focus of the campaign and was already known locally for skepticism toward — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-charlotte-ohara-00361: The campaign archive contained 71 public posts in the WordPress API on capture. The earliest listed post was "A Sobering Look at Abortion Statistics in Kansas" on 2025-01-14; the latest listed post was "The Great Propert — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00366: The Feb. 17, 2026 post "When Did You Begin" is a pro-life poem that asks when human dignity begins, reinforcing abortion as a recurring campaign theme. ([source](https://oharaforkansas.com/when-did-you-begin/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00379: "When Did You Begin," 2026-02-17. Pro-life poem and religious/moral framing. ([source](https://oharaforkansas.com/when-did-you-begin/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00387: Kansas Reflector, Jan. 30, 2026: first GOP debate coverage. O'Hara attacked what she called a "vast sea of RINOs" in the Republican Party; the piece also reports broad GOP debate agreement on abortion opposition, marijua — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00388: Kansas Reflector, Feb. 16, 2026: profile/podcast coverage describing her campaign as a "true conservative" pitch and summarizing her views on abortion, education, taxes, elections, rural background, and career-politician — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00406: Manual review of titles and selected article text shows a tighter set of recurring message clusters: property taxes and incentive programs; election integrity, voter rolls, and partisan elections; anti-establishment atta — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00383: "Men in Women's YMCA Locker Rooms?," 2025-05-02. Social-conservative gender/locker-room issue framing. ([source](https://oharaforkansas.com/men-in-womens-ymca-locker-rooms/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00344: | Campaign site | https://oharaforkansas.com/ | FOUND | Current candidate-controlled site. Homepage frames the campaign as "WOKE and BROKE Out...Common Sense IN for Kansas" and lists seven priorities including DOGE-style — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00365: The April 28, 2026 post "Dismantling the Kansas Department of Education" argues education should be local and criticizes what she describes as tax-incentive funded candidates and the state education bureaucracy. ([source — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00372: Campaign homepage, captured 2026-05-11. Key signals: "WOKE and BROKE Out...Common Sense IN for Kansas"; DOGE must come to Kansas; stop tax incentives; transparency; partisan judicial elections; anti-DEI/CRT education lan — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00376: "The Great Property Tax Shift," 2026-05-05. Recent anchor post on property taxes, economic-development incentives, COVID funding, local/state spending, school-board/city/county activism, and proposed property-tax elimina — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00377: "Dismantling the Kansas Department of Education," 2026-04-28. Education-localism and anti-state-education-bureaucracy signal. ([source](https://oharaforkansas.com/dismantling-the-kansas-department-of-education/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00413: Issue absences are more limited because O'Hara's archive is large. In the accessible set reviewed, no dominant candidate-controlled messaging centered Medicaid expansion, hospital finance, child care, foster care, housin — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00360: The site biography presents O'Hara as a former general contractor/developer, small-business owner, former Kansas House member, former Johnson County commissioner, mother, grandmother, and person whose faith is central to — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00373: Campaign homepage biography, captured 2026-05-11. Key signals: former contractor/developer, small-business owner, COVID-shutdown experience, Kansas House, Johnson County Commission, mother/grandmother, faith and family l — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00359: The campaign website is the dominant candidate-controlled platform. It combines a governor campaign landing page, a donation page, and an unusually large first-person opinion archive. The homepage says she is running to  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00362: The highest-frequency campaign-archive themes are Kansas issues, transparency, elections/voting, taxes, Johnson County spending, public safety, and property taxes. WordPress category counts are overlapping because most p — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-charlotte-ohara-00363: The campaign's May 5, 2026 post "The Great Property Tax Shift" is a representative recent piece. O'Hara argues residential homeowners are carrying a larger share of Johnson County property-tax revenue, attacks STAR bonds — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-charlotte-ohara-00429: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-charlotte-ohara-00904: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-01123: [Kansas Secretary of State -- Schwab Biography](https://sos.ks.gov/about/schwab-biography.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-01125: [Kansas Legislature -- Rep. Schwab Profile](https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00009: Abortion and religious/moral language recur throughout the campaign archive. Her Feb. 17, 2026 post "When Did You Begin" is a pro-life poem asking when a person's value and dignity begin. A Jan. 14, 2025 post on Kansas a — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-01409: narrative: "_A summary of what Stacy Rogers has publicly said, posted, linked, and amplified across her campaign site, campaign social directory, LinkedIn, X, Facebook, Instagram, YouTube, TikTok, Truth Social references — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00948: [Real Media KC: Sarnecki podcast](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00937: [Wichita Chamber: Eakins podcast (Jan 2023)](https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00007: In the January 2026 GOP debate, Kansas Reflector reported that O'Hara opened by attacking a "vast sea of RINOs" in the Republican Party and directly criticized Vicki Schmidt and Ty Masterson as too close to Democrats. Th — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00892: [Kansas Reflector: Corson enters race (July 22, 2025)](https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00894: [Kansas Reflector: Sebelius endorses Corson (Jan 2026)](https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00903: [Johnson County Post: Corson enters race (July 22, 2025)](https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00907: [Kansas Reflector: Holscher enters race (June 12, 2025)](https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00931: [Riley County Republicans: Meet Rogers](https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00935: [KSN: Eakins announces bid](https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00942: [Kansas Reflector: Sarnecki launches campaign (Sept 2025)](https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00945: [WIBW: Sarnecki announces (Sept 2, 2025)](https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-00947: [Bott Radio Network: Sarnecki interview (Oct 3, 2025)](https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-01127: [Scott Schwab Campaign Website](https://scottschwab.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-charlotte-ohara-01404: "source": "Stacy Rogers campaign website, 2026-04-01, https://stacyrogersforks.com/", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
