# Notes — evidence-matrix-builder — sandy-jacobs — 2026-05-20

## Summary
- Raw rows read: 12375
- Final deduplicated rows written: 3074
- Duplicate rows absorbed: 9301
- Rejected rows retained in final matrix: 673
- Use-with-caveat rows: 54
- Source-only rows: 77
- Rows without issue mapping: 1177

## Final Use Decisions
```json
{
  "use": 140,
  "use-with-caveat": 54,
  "source-only": 77,
  "background-only": 2130,
  "reject": 673
}
```

## Final Confidence
```json
{
  "confirmed": 57,
  "likely": 258,
  "weak-signal": 135,
  "unknown": 2624
}
```

## Source Tiers
```json
{
  "primary": 59,
  "secondary": 256,
  "social": 135,
  "internal-memory": 2624
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 16   |
| 2     | LGBT / gender / parental rights                    | 8    |
| 3     | Education / curriculum / schools                   | 136  |
| 4     | Religious liberty / church / civic morality        | 311  |
| 5     | Taxes / spending / debt                            | 175  |
| 6     | Economy / jobs / labor                             | 61   |
| 7     | Guns / Second Amendment                            | 9    |
| 8     | Immigration / border                               | 21   |
| 9     | Health care / insurance / Medicaid                 | 81   |
| 10    | Election integrity / voting / courts               | 621  |
| 11    | Public safety / law enforcement / criminal justice | 196  |
| 12    | Agriculture / rural economy / water                | 165  |
| 13    | Local governance / transparency / ethics           | 1167 |
| 14    | Environment / energy / land use                    | 21   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 54 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-sandy-jacobs-02779: narrative: "Sandy Jacobs' accessible public messaging is local, civic, and operational. The strongest public record is not a modern social feed; it is a trail of candidate letters, Hays Post Q&As, city-meeting coverage,  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-sandy-jacobs-02729: narrative: "Mason Ruder's public messaging is not built around a visible campaign-social apparatus. Through May 11, 2026, the clearest public record comes from Hays City Commission meetings, Hays Post reporting, a 2023 c — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-sandy-jacobs-02819: narrative: "Toby Dougherty's public voice is administrative, not electoral. He is the appointed Hays city manager, and the official city profile says he has held that role since Aug. 1, 2007, after serving as assistant c — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-sandy-jacobs-01168: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-sandy-jacobs-02132: | National partisan/social-policy issues | 0 | 0% | No sustained candidate-controlled/candidate-attributed messaging found on abortion, guns, immigration, national parties, LGBTQ policy, school curriculum, or religious-l — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02168: No public candidate-controlled/candidate-attributed material found in this harvest centered abortion, guns, immigration, national party identity, Donald Trump, Joe Biden, LGBTQ policy, school curriculum, or religious-lib — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02137: | 2019-11-14 | [Hays Post: New city water rebates more inclusive](https://hayspost.com/posts/5e5871c7b0e3671763224d5c) | Meeting quote | Water conservation outreach, praise for public education and social-media water mes — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02139: | 2021-10-14 | [Hays Post: city commission candidates agree Hays needs to grow](https://hayspost.com/posts/26583ec1-c757-4e20-9de0-62af6beffcd2) | Forum coverage | Infrastructure, school bond, city staff, growth. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02169: No public church affiliation was found in this messaging harvest. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02123: I coded 18 accessible candidate-controlled or candidate-attributed items. Categories are non-exclusive because one interview answer or meeting quote often covered water, budget, and development together. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02127: | Budget, taxes, mill levy, fiscal sustainability | 7 | 39% | Revenue neutral budgeting, 25 mills, line-item review, property-tax cap concerns, sustainable budgeting. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02138: | 2021-06-01 | [Hays Post: Jacobs announces filing](https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf) | Candidate letter | Public service, lifetime Hays resident, sustainable planned growth, fiscal respons — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02143: | 2025-10-22 | [Hays Post: Sandy Jacobs Q&A](https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f) | Candidate Q&A | R9, housing, RHIDs, property taxes, retail, parks, ACCESS transit, fiscal responsibility, qu — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02147: | 2026-04-06 | [Hays Post: travel plaza and 2027 draft budget](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb) | Meeting quotes | Property-tax limits, budget tradeoffs, resident/business input. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02152: "My first goal, other than maintaining taxes, would be retail development." Source: [Hays Post Q&A, Oct. 22, 2025](https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f). — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02188: [Hays Post: Planned travel plaza and 2027 draft budget](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02129: | Collaboration, listening, servant leadership, resident input | 5 | 28% | Bringing people to the table, common solutions, listening to residents, resident/business input on budgets. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02140: | 2021-10-31 | [Hays Post: 5 city commission candidates vying](https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781) | Candidate profile/forum | North Vine reconstruction, traffic roundabouts, business develop — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02141: | 2025-07-15 | [Lawrence Times/Kansas Reflector: water crisis task force](https://lawrencekstimes.com/2025/07/15/ksleg-water-crisis-solutions/) | Public civic remarks | Hays water conservation, water quality/quantity, ag — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-jacobs-02098: Election slug: hays-city-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-sandy-jacobs-02932: narrative: "Rebecca Herzog's public messaging is not a conventional campaign-social record. The accessible record through May 11, 2026 is almost entirely official-office language and directory/election documentation for  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00353: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00045: URL: https://www.ellisco.net/DocumentCenter/View/5892/Official-Results-2025-General-Election — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sandy-jacobs-01629: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00030: URL: https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01082026-1589 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sandy-jacobs-00845: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-01032: [City of Hays: Toby Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-01758: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00555: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00654: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-01199: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-01415: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00479: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00490: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00503: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00516: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00523: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00539: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-02813: narrative: "David Vilaysing's public messaging is built around service, practical city management, and conflict control. In his [Hays Post candidate Q&A](https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de),  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-jacobs-00596: [Kobach Religion - WhatReligionIsInfo](https://whatreligionisinfo.com/kobach-religion/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
