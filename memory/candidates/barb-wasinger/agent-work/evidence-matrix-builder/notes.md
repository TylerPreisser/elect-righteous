# Notes — evidence-matrix-builder — barb-wasinger — 2026-05-20

## Summary
- Raw rows read: 5056
- Final deduplicated rows written: 2887
- Duplicate rows absorbed: 2169
- Rejected rows retained in final matrix: 447
- Use-with-caveat rows: 44
- Source-only rows: 96
- Rows without issue mapping: 1089

## Final Use Decisions
```json
{
  "use": 221,
  "use-with-caveat": 44,
  "source-only": 96,
  "background-only": 2079,
  "reject": 447
}
```

## Final Confidence
```json
{
  "confirmed": 77,
  "likely": 314,
  "weak-signal": 114,
  "unknown": 2382
}
```

## Source Tiers
```json
{
  "primary": 78,
  "secondary": 313,
  "social": 114,
  "internal-memory": 2382
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 41   |
| 2     | LGBT / gender / parental rights                    | 46   |
| 3     | Education / curriculum / schools                   | 179  |
| 4     | Religious liberty / church / civic morality        | 298  |
| 5     | Taxes / spending / debt                            | 168  |
| 6     | Economy / jobs / labor                             | 72   |
| 7     | Guns / Second Amendment                            | 12   |
| 8     | Immigration / border                               | 14   |
| 9     | Health care / insurance / Medicaid                 | 104  |
| 10    | Election integrity / voting / courts               | 809  |
| 11    | Public safety / law enforcement / criminal justice | 260  |
| 12    | Agriculture / rural economy / water                | 150  |
| 13    | Local governance / transparency / ethics           | 929  |
| 14    | Environment / energy / land use                    | 11   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 44 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-barb-wasinger-02663: narrative: "Barb Wasinger's public messaging is built around a practical incumbent identity: a Hays small-business owner and former local official who says she is focused on results for Ellis County. Her newer campaign s — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-barb-wasinger-02859: "ownWordsNarrative": "candidateControlled: platform: Campaign website; status: active; url: https://barbwasinger.com/; notes: Links Facebook and Instagram; no native engagement metrics.; platform: Older campaign website; — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-barb-wasinger-01475: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-barb-wasinger-01840: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-barb-wasinger-02079: | Social conservative issues | 4 | 10% | Abortion/life, transgender sports and facilities policy, "common-sense Kansas values," online pornography. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02108: Kansas Truth Caucus: she is listed as vice-chair of a caucus describing itself around limited government, individual liberty, free enterprise, traditional values, education, tax reform, and defending the unborn. Source:  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02087: Kansas Reflector coverage shows high-salience statewide attention around her role in transgender sports/facilities legislation and the 2026 debate-limiting procedural motion. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02105: 2023 transgender sports bill: Kansas Reflector reported she led the House push and said "Biological men should not be competing against women." Source: [Kansas Reflector, Feb. 23, 2023](https://kansasreflector.com/2023/0 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02133: [Kansas Reflector transgender youth legislation, Feb. 23, 2023](https://kansasreflector.com/2023/02/23/kansas-house-and-senate-both-pass-legislation-targeting-transgender-youth/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02055: | Campaign site, newer | Found | [barbwasinger.com](https://barbwasinger.com/) | Candidate-controlled campaign site with paid-for line, donation link, Facebook and Instagram links, updated messaging on taxes, education,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02077: | Education, schools, FHSU | 5 | 12% | School safety, K-12 funding, special education, education formula, FHSU funding. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02091: Newer campaign site result list: "Lowered Property, Sales, and Income Taxes," eliminated state taxes on Social Security benefits and groceries, acted on fentanyl and online pornography, funded K-12/special education, cha — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02092: Older campaign promises: schools, health care, foster care, seniors, school safety, APRN/pharmacist practice, emergency limits on governors closing businesses/churches, foster care regulations, food sales tax, retirement — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02096: 2024 Hays Post questionnaire: property tax reduction and school funding were top issues; she named cybersecurity and administrative rules/regulations as priorities; she opposed Medicaid expansion as likely to remove "wel — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02097: 2024 Hays Post election-night story: she emphasized property tax relief, cybersecurity, water, private water ownership through LEMAs, seniors, and education funding. Source: [Hays Post, Nov. 7, 2024](https://hayspost.com — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02106: 2026 nursing faculty bill: Kansas Reflector reported she carried the bill on the House floor and rejected claims it would lower standards or undermine accreditation. Source: [Kansas Reflector, Mar. 19, 2026](https://kans — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02127: [Hays Post spending/special education coffee, Mar. 10, 2025](https://hayspost.com/posts/f53b3db9-b85b-42ff-accd-ae5f0c823f59) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02134: [Kansas Reflector nursing faculty bill, Mar. 19, 2026](https://kansasreflector.com/2026/03/19/kansas-legislature-resets-academic-expectation-for-hiring-faculty-in-college-nursing-programs/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02082: | Biography/community/faith | 2 | 5% | Hays family/business biography, St. Joseph Catholic Church, public service record. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-barb-wasinger-02094: Biography/identity: both campaign sites emphasize Hays, her husband Tom, four children, small business ownership, prior city/county service, and St. Joseph Catholic Church. Sources: [barbwasinger.com](https://barbwasinge — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-barb-wasinger-02164: url: "https://kansas.gov/ethics/CFAScanned/House/2026ElecCycle/Treasurers/H111BW_AT.pdf" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-barb-wasinger-00664: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00671: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-01153: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-01199: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-01227: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-01339: [City of Hays: Toby Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-01854: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00866: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00965: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00790: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00801: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00814: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00827: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00834: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00850: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00878: [Kansans for Marshall - Meet Doc](https://kansansformarshall.com/meet-doc/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00879: [Marshall - Federal Watch / KSOpen](https://ksopen.org/marshall) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00907: [Kobach Religion - WhatReligionIsInfo](https://whatreligionisinfo.com/kobach-religion/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-barb-wasinger-00909: [Sunflower State Journal: Kobach denounces vandalism at his church](https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
