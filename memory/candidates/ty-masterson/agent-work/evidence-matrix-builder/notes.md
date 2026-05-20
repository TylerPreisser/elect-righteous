# Notes — evidence-matrix-builder — ty-masterson — 2026-05-20

## Summary
- Raw rows read: 11653
- Final deduplicated rows written: 4568
- Duplicate rows absorbed: 7085
- Rejected rows retained in final matrix: 841
- Use-with-caveat rows: 48
- Source-only rows: 107
- Rows without issue mapping: 2138

## Final Use Decisions
```json
{
  "use": 233,
  "use-with-caveat": 48,
  "source-only": 107,
  "background-only": 3339,
  "reject": 841
}
```

## Final Confidence
```json
{
  "confirmed": 68,
  "likely": 437,
  "weak-signal": 149,
  "contradicted": 2,
  "unknown": 3912
}
```

## Source Tiers
```json
{
  "primary": 69,
  "secondary": 436,
  "social": 149,
  "internal-memory": 3914
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 85   |
| 2     | LGBT / gender / parental rights                    | 64   |
| 3     | Education / curriculum / schools                   | 265  |
| 4     | Religious liberty / church / civic morality        | 413  |
| 5     | Taxes / spending / debt                            | 230  |
| 6     | Economy / jobs / labor                             | 105  |
| 7     | Guns / Second Amendment                            | 20   |
| 8     | Immigration / border                               | 61   |
| 9     | Health care / insurance / Medicaid                 | 229  |
| 10    | Election integrity / voting / courts               | 1075 |
| 11    | Public safety / law enforcement / criminal justice | 196  |
| 12    | Agriculture / rural economy / water                | 85   |
| 13    | Local governance / transparency / ethics           | 1240 |
| 14    | Environment / energy / land use                    | 13   |

## Conflict / Caveat Review
- 2 rows are marked contradicted and must not be asserted without explicit caveat.
- 48 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-ty-masterson-04389: narrative: "*A summary of what Cindy Holscher has publicly said, posted, and amplified across campaign-controlled channels and credible indexed coverage. Drawn from her campaign website, campaign news page, Linktree, Blu — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ty-masterson-04409: narrative: "_A summary of what Charlotte O'Hara has publicly said, posted, and amplified across campaign channels, public Facebook metadata, indexed public records, and credible news coverage. Drawn from public captures  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ty-masterson-04249: narrative: "_A summary of what Ty Masterson has publicly said, posted, and amplified across campaign channels, indexed social media, official public records, and credible public-news captures. Drawn from public captures  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ty-masterson-01364: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ty-masterson-02354: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ty-masterson-03539: The campaign biography page presents Masterson as a "husband, father, pa, results-oriented conservative, and fighter for working Kansans." It says his family attends NewSpring Church and claims he championed a $2 billion — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03546: Campaign biography page, captured 2026-05-11. The biography ties Masterson's public identity to faith, family, Butler County roots, Senate leadership, GoCreate, NewSpring Church, and anti-DEI / anti-transgender policy cl — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03579: | Education, free speech, anti-"woke" messaging, DEI/transgender policy, and Charlie Kirk-related education politics | 7 | 23% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03537: The official campaign site is the campaign's strongest candidate-controlled channel. It frames the race around taking back Kansas, lower taxes, jobs, public safety, education outcomes, anti-"woke" policy, and conservativ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03544: Campaign homepage, captured 2026-05-11. Masterson says Kansas is home, accuses Democratic governors and Laura Kelly/Joe Biden alignment of breaking Kansas's promise, cites violent crime, school proficiency, tax burden, a — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03557: 2026-01 indexed X sample: Charlie Kirk and classroom speech. Masterson wrote that Charlie Kirk was "martyred for freedom of speech," connected the issue to K-12 education reform, and said legislation was being drafted to — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03558: 2026-01 indexed X sample: Joseph Claeys endorsement. Masterson highlighted Claeys' background as a school psychologist and "student-focused education." ([source](https://w.twstalker.com/TyMastersonKS)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03571: 2026-01 indexed X sample: Brad Starnes endorsement. Masterson praised Starnes on blocking foreign adversaries such as Communist China from buying land near Fort Riley, education, and property-tax reform. ([source](https: — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03572: 2025-12-05 indexed X status: Scott Hill endorsement. Search-indexed X status showed Masterson praising Hill on education funding, property taxes, and Salina law-enforcement training; visible X snippet listed 702 views, 5 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03574: 2025-10 Kansas Reflector public-employee speech coverage. Kansas Reflector quoted Masterson's X post urging the education commissioner to remove Katie Allen from the Kansas Department of Education after a social-media co — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03591: | Charlie Kirk classroom-speech / K-12 reform post | About 2K views and 40 likes displayed by the public mirror. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03596: The reviewed set contained multiple references to schools, but the visible education material focused on proficiency, parental say, accountability, anti-"woke" language, free speech, device/social-media rules, and studen — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03552: 2025-10-30 Israel / antisemitism interview. Combat Antisemitism Movement published a Q&A with Masterson after a state-lawmakers delegation visit to Israel, including comments on state authority, IHRA antisemitism definit — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03555: 2026-01 indexed X sample: Ron Bryce endorsement. Masterson praised Rep. Ron Bryce as a physician, conservative, author of *Fingerprint of God*, and someone whose "Christian worldview" guides work in Topeka. Visible mirro — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ty-masterson-03556: 2026-01 indexed X sample: Martin Luther King Jr. Day. Masterson wrote that people should be judged by "content of his character" rather than immutable quality, ethnicity, or faith. Visible mirror metrics: 373 views and s — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-ty-masterson-00729: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-00030: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ty-masterson-00428: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-00435: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-02368: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-00630: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-01238: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-01395: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-02079: [Jeff Colyer - Kansas Historical Society (Kansapedia)](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-02381: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-02558: Source: [Kansas Secretary of State press release, October 10, 2024](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ty-masterson-02868: [Kansas Secretary of State -- Schwab Biography](https://sos.ks.gov/about/schwab-biography.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-02870: [Kansas Legislature -- Rep. Schwab Profile](https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-02899: [Kansas SOS Press Release: Schwab satisfied with DeJoy call](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-04379: narrative: "_A summary of what Jeff Colyer has publicly said, posted, and amplified across campaign channels, indexed social media, and credible public coverage. Drawn from public captures of campaign websites, X-indexed — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-04461: narrative: "_A summary of what Stacy Rogers has publicly said, posted, linked, and amplified across her campaign site, campaign social directory, LinkedIn, X, Facebook, Instagram, YouTube, TikTok, Truth Social references — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-00554: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-00565: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-00578: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ty-masterson-00591: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
