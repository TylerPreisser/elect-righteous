# Notes — evidence-matrix-builder — jeff-colyer — 2026-05-20

## Summary
- Raw rows read: 13312
- Final deduplicated rows written: 4560
- Duplicate rows absorbed: 8752
- Rejected rows retained in final matrix: 838
- Use-with-caveat rows: 38
- Source-only rows: 120
- Rows without issue mapping: 2123

## Final Use Decisions
```json
{
  "use": 254,
  "use-with-caveat": 38,
  "source-only": 120,
  "background-only": 3310,
  "reject": 838
}
```

## Final Confidence
```json
{
  "confirmed": 78,
  "likely": 474,
  "weak-signal": 142,
  "contradicted": 2,
  "unknown": 3864
}
```

## Source Tiers
```json
{
  "primary": 80,
  "secondary": 472,
  "social": 142,
  "internal-memory": 3866
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 104  |
| 2     | LGBT / gender / parental rights                    | 61   |
| 3     | Education / curriculum / schools                   | 259  |
| 4     | Religious liberty / church / civic morality        | 404  |
| 5     | Taxes / spending / debt                            | 164  |
| 6     | Economy / jobs / labor                             | 112  |
| 7     | Guns / Second Amendment                            | 28   |
| 8     | Immigration / border                               | 78   |
| 9     | Health care / insurance / Medicaid                 | 269  |
| 10    | Election integrity / voting / courts               | 1051 |
| 11    | Public safety / law enforcement / criminal justice | 225  |
| 12    | Agriculture / rural economy / water                | 111  |
| 13    | Local governance / transparency / ethics           | 1257 |
| 14    | Environment / energy / land use                    | 20   |

## Conflict / Caveat Review
- 2 rows are marked contradicted and must not be asserted without explicit caveat.
- 38 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-jeff-colyer-04330: narrative: "_A summary of what Jeff Colyer has publicly said, posted, and amplified across campaign channels, indexed social media, and credible public coverage. Drawn from public captures of campaign websites, X-indexed — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jeff-colyer-00028: | s-sos-candidate-list-blocked | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | accessed 2026-05-19 | official candidate-list endpoint returned JS/robot verification in text capture | blocker/ — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jeff-colyer-01185: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jeff-colyer-02621: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jeff-colyer-03773: | Campaign site | https://jeffcolyer.com/ | FOUND | Public site links X, Instagram, Facebook, and YouTube. Homepage pushes actions on critical race theory, private property rights, abortion, medical innovation, and oil/g — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03774: | Campaign site | https://www.colyerforgovernor.com/ | FOUND | 2026-specific campaign site. Frames the race around "Faith & Family First," Trump alignment, lower costs, public safety, school choice, abortion, rural healt — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03789: Colyer's active campaign footprint is split between an older campaign domain, [jeffcolyer.com](https://jeffcolyer.com/), and a 2026-specific domain, [colyerforgovernor.com](https://www.colyerforgovernor.com/). The older  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03815: [jeffcolyer.com homepage](https://jeffcolyer.com/), captured 2026-05-11. Key visible signals: critical race theory pledge, private property rights letter, abortion announcement, KU stem-cell research criticism, oil/gas c — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03816: [jeffcolyer.com/about](https://www.jeffcolyer.com/about), captured 2026-05-11. Key visible signals: Hays biography, family, surgeon identity, humanitarian war-zone work, pro-life record, KanCare, budget/stability claims, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03818: [jeffcolyer.com/announcements.html](https://www.jeffcolyer.com/announcements.html), captured 2026-05-11. The announcements page is largely a 2021 archive, but it remains live and visible from the campaign site; recurring — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03819: [colyerforgovernor.com](https://www.colyerforgovernor.com/), captured 2026-05-11. Key visible signals: Trump quote, "Faith & Family First," lower costs, public safety, school choice, abortion, Second Amendment, religious — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03829: | Health, rural healthcare, medical biography, KanCare, abortion, and adult stem-cell research | 5 | 17% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03838: Across the accessible reviewed set, Colyer's current campaign material and indexed social feed did not show sustained attention to child care costs, foster care, housing affordability, water rights, the Ogallala Aquifer, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03799: a week ago -- Parents and medical decisions post. Engagement: 1 reply, 2 reposts, 28 likes, 590 views, 0 quotes. Topic: parental rights / minors' healthcare. ([source](https://mobile.twstalker.com/DrJeffColyer)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03820: [KCUR/KMUW campaign launch coverage](https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race), published 2025-05-16. Key visible signals: Trump comparison — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03827: | Education, parental rights, anti-woke schools, youth healthcare, campus/school conflict, and public safety | 7 | 24% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03795: 2 days ago -- Greensburg classroom visit. Message: Kansas's future starts in classrooms; emphasis on phonics-based reading, math, writing, tech skills, and career preparation. Engagement: 3 replies, 1 repost, 12 likes, 5 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03797: 5 days ago -- Anti-woke education post: "EDUCATION NOT INDOCTRINATION," with reading, writing, math, technology skills, and "real-world preparation." Engagement: 16 replies, 6 reposts, 38 likes, 1K views, 1 quote. Topic: — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03822: [Kansas Reflector commentary on Katie Allen/Kansas Department of Education firing](https://kansasreflector.com/2025/10/14/kansas-officials-zeal-for-firing-state-employee-over-post-leaves-agency-taxpayers-in-the-lurch/),  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jeff-colyer-03832: The accessible X mirror exposed a limited amplification sample. The most visible amplification was a quote-post of Libs of TikTok about an Olathe anti-ICE student walkout and students holding Trump flags; Colyer used it  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-jeff-colyer-00249: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-00256: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-02635: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-00451: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-01059: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-01216: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-02648: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-02825: Source: [Kansas Secretary of State press release, October 10, 2024](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-jeff-colyer-03134: [Kansas Secretary of State -- Schwab Biography](https://sos.ks.gov/about/schwab-biography.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-03136: [Kansas Legislature -- Rep. Schwab Profile](https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-03165: [Kansas SOS Press Release: Schwab satisfied with DeJoy call](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-04425: narrative: "_A summary of what Stacy Rogers has publicly said, posted, linked, and amplified across her campaign site, campaign social directory, LinkedIn, X, Facebook, Instagram, YouTube, TikTok, Truth Social references — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-02246: [Kansas Reflector: Judge Rebukes Kobach with $1 Fine](https://kansasreflector.com/2026/01/20/kansas-judge-rebukes-ag-kris-kobach-in-gender-marker-case-issues-symbolic-1-fine/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-00375: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-00386: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-00399: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-00412: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-00419: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-00435: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jeff-colyer-01065: [Johnson County Post: Holscher school voucher critique (March 13, 2023)](https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
