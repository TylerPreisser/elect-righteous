# Notes — evidence-matrix-builder — marty-tuley — 2026-05-20

## Summary
- Raw rows read: 6108
- Final deduplicated rows written: 1678
- Duplicate rows absorbed: 4430
- Rejected rows retained in final matrix: 252
- Use-with-caveat rows: 33
- Source-only rows: 36
- Rows without issue mapping: 753

## Final Use Decisions
```json
{
  "use": 110,
  "use-with-caveat": 33,
  "source-only": 36,
  "background-only": 1247,
  "reject": 252
}
```

## Final Confidence
```json
{
  "confirmed": 35,
  "likely": 149,
  "weak-signal": 107,
  "contradicted": 1,
  "unknown": 1386
}
```

## Source Tiers
```json
{
  "primary": 38,
  "secondary": 146,
  "social": 107,
  "internal-memory": 1387
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 18   |
| 2     | LGBT / gender / parental rights                    | 42   |
| 3     | Education / curriculum / schools                   | 135  |
| 4     | Religious liberty / church / civic morality        | 54   |
| 5     | Taxes / spending / debt                            | 64   |
| 6     | Economy / jobs / labor                             | 63   |
| 7     | Guns / Second Amendment                            | 17   |
| 8     | Immigration / border                               | 21   |
| 9     | Health care / insurance / Medicaid                 | 122  |
| 10    | Election integrity / voting / courts               | 481  |
| 11    | Public safety / law enforcement / criminal justice | 38   |
| 12    | Agriculture / rural economy / water                | 67   |
| 13    | Local governance / transparency / ethics           | 640  |
| 14    | Environment / energy / land use                    | 36   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 33 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-marty-tuley-00037: | s-campaign-todo-old | primary | https://www.tuley4gov2026.com/to-do-list | accessed 2026-05-19 | Still-live older platform page; detailed bullet list including transgender-rights/sports language and electronic voting o — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-marty-tuley-00029: | s-sos-candidate-list-blocked | primary | https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx | attempted 2026-05-19 | Official candidate-list endpoint returned CloudFront 403 in this environment | blocke — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-marty-tuley-00053: Blocked: s-sos-candidate-list-blocked. Direct curl readback of https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx returned HTTP 403 from CloudFront. No direct SOS candidate-table row was captured. — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-marty-tuley-00802: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-marty-tuley-01137: Across candidate-controlled site/platform text and indexed public coverage, no detailed candidate-controlled statements were captured on abortion, gun policy, religious liberty, Medicaid expansion, rural hospitals, water — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01120: | Education and public schools | 10 | Teacher pay, teacher benefits, junior college and technical school tuition, two school meals, cell phone limits, transgender-rights language paired with opposition to transgender gir — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01128: WIBW reported on 2025-07-28 that Tuley announced as a Democratic candidate from Lawrence and summarized his priorities as teacher pay, school meals, legal cannabis revenue for schools, opposition to private-school public — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01131: KSNT's candidate guide characterized Tuley as a moderate Democrat and summarized his visible issue set as teacher pay, farm-to-table public health, transgender girls' sports, cannabis revenue for schools and health progr — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01086: | Campaign platform | [tuley4gov2026.com/to-do-list](https://www.tuley4gov2026.com/to-do-list) and [public schools page](https://www.tuley4gov2026.com/public-schools) | Candidate-controlled platform text indexed publicly — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01103: The campaign's "Meet Marty" page describes him as a candidate focused on practical leadership, listening, accountability, transparency, local business, education, public safety, family, and community ([source](https://ww — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01122: | Economic and tax policy | 4 | Marijuana legalization with revenue for education and health, corporate tax-code reform, Kansas-grown businesses, opposition to tax cuts as a political tool. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01125: The campaign's [public schools page](https://www.tuley4gov2026.com/public-schools) repeats and condenses the education agenda: top-25 national teacher pay, improved benefits, meals, junior college and technical school tu — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01130: KCUR / Kansas News Service's governor race guide described Tuley as an author and personal trainer in Lawrence and summarized his platform around recreational cannabis, education and health revenue, corporate incentives, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01123: | Infrastructure and energy | 3 | Infrastructure built with Kansas labor, wind and solar, reduced plastic use, paperless state government. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01126: The campaign launch release distributed through EIN Presswire on 2025-06-30 lists many of the same platform priorities and identifies Tuley as an educator, parent, and lifelong Kansan running for governor ([source](https — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01124: | Governance and values | 4 | Restraint on executive orders and pardons, easier voting including electronic options, secure but accessible border, prosperity through investment rather than austerity. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01121: | Health and fitness | 6 | Daily PE, no padded football under age 13, farm-to-table food, obesity prevention, personal health-care freedom, culture of wellness. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01129: Kansas Reflector covered the March 8, 2026 Democratic governor forum and described Tuley as acknowledging he was a "third wheel" against two legislative candidates while presenting himself as a different kind of Democrat — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-01080: Election slug: kansas-governor-2026 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-marty-tuley-00009: The public social footprint is broad enough to confirm official channels, but uneven in what it exposes. The campaign site links Facebook, TikTok, Instagram, and YouTube ([harvest](social-harvest.md#official-campaign-sit — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-marty-tuley-01164: url: "https://www.sos.ks.gov/elections/important-election-dates.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-marty-tuley-00676: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00834: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00682: [Johnson County Post: Holscher school voucher critique (March 13, 2023)](https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00728: [Real Media KC: Sarnecki podcast](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00717: [Wichita Chamber: Eakins podcast (Jan 2023)](https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00664: [Kansas Reflector: Corson enters race (July 22, 2025)](https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00666: [Kansas Reflector: Sebelius endorses Corson (Jan 2026)](https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00675: [Johnson County Post: Corson enters race (July 22, 2025)](https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00679: [Kansas Reflector: Holscher enters race (June 12, 2025)](https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00711: [Riley County Republicans: Meet Rogers](https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00715: [KSN: Eakins announces bid](https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00722: [Kansas Reflector: Sarnecki launches campaign (Sept 2025)](https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00725: [WIBW: Sarnecki announces (Sept 2, 2025)](https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00727: [Bott Radio Network: Sarnecki interview (Oct 3, 2025)](https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00779: [Hays Post: Berges Candidate Profile](https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00670: [KC Jewish Chronicle: Corson Senate candidacy](https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00716: [KAKE: Eakins discusses run](https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00833: [Barb Wasinger Official Site](https://barbforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-marty-tuley-00625: IMDB: [Philip Sarnecki | Producer](https://www.imdb.com/name/nm3671154/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
