# Notes — evidence-matrix-builder — chris-mann — 2026-05-20

## Summary
- Raw rows read: 6022
- Final deduplicated rows written: 2821
- Duplicate rows absorbed: 3201
- Rejected rows retained in final matrix: 477
- Use-with-caveat rows: 50
- Source-only rows: 70
- Rows without issue mapping: 1323

## Final Use Decisions
```json
{
  "use": 162,
  "use-with-caveat": 50,
  "source-only": 70,
  "background-only": 2062,
  "reject": 477
}
```

## Final Confidence
```json
{
  "confirmed": 38,
  "likely": 288,
  "weak-signal": 168,
  "contradicted": 1,
  "unknown": 2326
}
```

## Source Tiers
```json
{
  "primary": 38,
  "secondary": 288,
  "social": 168,
  "internal-memory": 2327
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 52   |
| 2     | LGBT / gender / parental rights                    | 37   |
| 3     | Education / curriculum / schools                   | 106  |
| 4     | Religious liberty / church / civic morality        | 62   |
| 5     | Taxes / spending / debt                            | 62   |
| 6     | Economy / jobs / labor                             | 53   |
| 7     | Guns / Second Amendment                            | 17   |
| 8     | Immigration / border                               | 67   |
| 9     | Health care / insurance / Medicaid                 | 75   |
| 10    | Election integrity / voting / courts               | 786  |
| 11    | Public safety / law enforcement / criminal justice | 345  |
| 12    | Agriculture / rural economy / water                | 95   |
| 13    | Local governance / transparency / ethics           | 945  |
| 14    | Environment / energy / land use                    | 11   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 50 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-chris-mann-02537: narrative: "_A summary of what Kris Kobach has publicly said, posted, and amplified across campaign channels, official attorney general channels, indexed social media, LinkedIn, and credible public coverage. Drawn from p — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-chris-mann-00313: Miami County unofficial candidate list: https://www.copsfortots.com/DocumentCenter/View/14387/26PR-Unofficial-Candidate-List-4-24?bidId= — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-chris-mann-01477: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-chris-mann-01842: No sustained candidate-controlled social thread was found in this capture on abortion, LGBTQ policy, guns, immigration, school choice, marijuana, Medicaid expansion, taxes, or judicial selection. These may exist behind p — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01761: Biography signals: father was a police officer; Mann became a cop at 21; was struck by a drunk driver during a 2002 traffic stop; went to Washburn University School of Law on a Koch Public Service Scholarship; prosecuted — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01728: Election slug: kansas-ag-2026 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01731: Campaign website: [chrismannforkansas.com](https://chrismannforkansas.com/) -- active. Homepage metadata says Mann "dedicated his life to serving and protecting Kansas communities" and will "defend the Constitution, prot — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01753: Latest indexed campaign-social item found in the 2026 cycle: fundraising / official-filing X post indexed as roughly March 2026 in TwStalker search previews. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01756: Message: "Chris Mann dedicated his life to serving and protecting Kansas communities - first as a police officer and then as a prosecutor. He will defend the Constitution, protect the rule of law and ensure Kansas famili — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01763: News post, July 30, 2025 -- [Kansas election for attorney general in 2026 may become a repeat of 2022 showdown](https://chrismannforkansas.com/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-show — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01774: 2026-cycle filing / fundraising post -- indexed roughly March 2026. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01778: Topic: Filing / fundraising — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01789: November 9, 2022 too-close-to-call post -- [embedded by KWCH](https://www.kwch.com/2022/11/09/kansas-attorney-generals-race-still-too-close-call-2/) and [The Beacon](https://thebeaconnews.org/stories/2022/11/09/kansas-mi — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01790: Text: "This race is still too close to call. There are tens of thousands of Kansas voters who mailed their ballots in before election day. They deserve for their votes to be counted as the law allows. That is essential t — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01791: Topic: Election integrity / vote counting / democracy — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01825: | Rule of law / Constitution / rights | 7 | 41% | Common in homepage, launch press, X announcement, and AG-role framing. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01830: | Vote counting / democracy | 1 | 6% | November 9, 2022 too-close-to-call post. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01836: Highest indexed X post metric: official filing / fundraising post with 11 replies, 4 reposts, 20 likes, and 1K views in TwStalker preview. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01732: Website biography: [Meet Chris](https://chrismannforkansas.com/meet-chris/) -- active. Metadata modified May 5, 2026. The page foregrounds police, prosecutor, victims' advocate, DUI crash survivor, MADD service, and priv — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chris-mann-01734: Facebook: [Chris Mann](https://www.facebook.com/ChrisMannKS/) -- campaign-linked and active. Logged-out metadata captured 2,730 likes and 1,083 talking about this, with the bio: "Former police officer and prosecutor runn — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-chris-mann-02276: Confidence Level: MEDIUM -- Ellis County was not among Mann's five winning counties, meaning Kobach carried it. Ellis County is historically Republican. The Kansas Secretary of State's official 2022 General Election vote — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-01492: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00753: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-01505: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-02504: narrative: "*A summary of what Cindy Holscher has publicly said, posted, and amplified across campaign-controlled channels and credible indexed coverage. Drawn from her campaign website, campaign news page, Linktree, Blu — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-01097: [Kansas Reflector: Judge Rebukes Kobach with $1 Fine](https://kansasreflector.com/2026/01/20/kansas-judge-rebukes-ag-kris-kobach-in-gender-marker-case-issues-symbolic-1-fine/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00759: [Johnson County Post: Holscher school voucher critique (March 13, 2023)](https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00805: [Real Media KC: Sarnecki podcast](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00794: [Wichita Chamber: Eakins podcast (Jan 2023)](https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-01501: [Kansas Reflector: Sykes challenges Hawkins](https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-01502: [Kansas Reflector: Hawkins launches campaign with pro-Trump rhetoric](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00005: The second major signal is contrast with Kris Kobach. In his 2026 launch coverage, Mann said Kansas families need "a law enforcement officer defending our communities and our rights, not a politician focused on their own — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00009: The clearest 2022 election-integrity statement in the capture came after Election Day, when Mann posted that the attorney general race was still too close to call and that mailed ballots deserved to be counted "as the la — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00741: [Kansas Reflector: Corson enters race (July 22, 2025)](https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00743: [Kansas Reflector: Sebelius endorses Corson (Jan 2026)](https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00752: [Johnson County Post: Corson enters race (July 22, 2025)](https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00756: [Kansas Reflector: Holscher enters race (June 12, 2025)](https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00788: [Riley County Republicans: Meet Rogers](https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00792: [KSN: Eakins announces bid](https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chris-mann-00799: [Kansas Reflector: Sarnecki launches campaign (Sept 2025)](https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
