# Notes — evidence-matrix-builder — craig-pallister — 2026-05-20

## Summary
- Raw rows read: 3558
- Final deduplicated rows written: 1791
- Duplicate rows absorbed: 1767
- Rejected rows retained in final matrix: 382
- Use-with-caveat rows: 53
- Source-only rows: 20
- Rows without issue mapping: 534

## Final Use Decisions
```json
{
  "use": 118,
  "use-with-caveat": 53,
  "source-only": 20,
  "background-only": 1218,
  "reject": 382
}
```

## Final Confidence
```json
{
  "confirmed": 41,
  "likely": 186,
  "weak-signal": 91,
  "unknown": 1472,
  "contradicted": 1
}
```

## Source Tiers
```json
{
  "primary": 41,
  "secondary": 186,
  "social": 91,
  "internal-memory": 1473
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 10   |
| 2     | LGBT / gender / parental rights                    | 41   |
| 3     | Education / curriculum / schools                   | 510  |
| 4     | Religious liberty / church / civic morality        | 253  |
| 5     | Taxes / spending / debt                            | 72   |
| 6     | Economy / jobs / labor                             | 14   |
| 7     | Guns / Second Amendment                            | 5    |
| 8     | Immigration / border                               | 9    |
| 9     | Health care / insurance / Medicaid                 | 44   |
| 10    | Election integrity / voting / courts               | 445  |
| 11    | Public safety / law enforcement / criminal justice | 155  |
| 12    | Agriculture / rural economy / water                | 18   |
| 13    | Local governance / transparency / ethics           | 683  |
| 14    | Environment / energy / land use                    | 3    |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 53 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-craig-pallister-01610: narrative: "_A summary of what Ken Brooks has publicly said, posted, and had attributed to him across USD 489 board pages, election records, local candidate Q&As, local news, public meeting coverage, civic/church profile — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-pallister-01645: narrative: "_A summary of what Jayme Goetz has publicly said, posted, and had attributed to her across USD 489 board pages, USD 489 meeting/video records, local candidate Q&As, local news, school coverage, public profess — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-pallister-01677: narrative: "_A summary of what Craig Pallister has publicly said, posted, and had attributed to him across USD 489 board pages, election records, local candidate Q&As, a sponsored candidate announcement, local news, publ — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-pallister-00012: In 2026 board coverage, Pallister's votes and comments generally favored continuity on operations and projects. He supported a local HVAC maintenance vendor, voted with Brooks and Ruder on district director contract exte — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-pallister-01358: The accessible set does not show Pallister centering national partisan issues, Donald Trump, Joe Biden, abortion, guns, immigration, Medicaid expansion, rural hospitals, water/Ogallala policy, roads, broadband, policing, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01274: | Local board coverage | Hays Post, USD 489 republished Hays Post articles, and searchable public meeting coverage | FOUND | Includes Pallister comments or attributed positions on facilities, bond planning, COVID mask ch — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01300: On school bathrooms and vandalism, Pallister's visible comments are practical and administrator-experience based rather than ideological. In April 2026 coverage, he said bathroom issues existed when he was a high-school  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01302: On the Hays High/Hays Middle mascot issue in February 2023, Hays Post reported that Pallister supported keeping the Hays High Indians mascot after hearing community pride, supported eliminating racist or hurtful images,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01325: Hays Post 2026 bathroom/vandalism article: Pallister comments from principal experience. ([source](https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01331: | Educator identity, USD 489 family ties, retired principal experience, Hays/community pride, and prior board service | 8 | 44% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01261: Race: USD 489 Board of Education (NP) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01262: Election slug: usd-489-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01264: Capture mode: logged-out public web capture, USD 489 official/board-portal pages, Ellis County election records, Hays Post candidate Q&As and sponsored candidate material, local school-board coverage, GoodParty profile s — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01272: | Hays Post candidate Q&As | 2019, 2023, and 2025 Hays Post candidate profiles/Q&As | FOUND | Densest candidate-attributed issue messaging: bond/facilities, class offerings, student focus, staff/admin retention, board ro — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01273: | Hays Post sponsored candidate announcement | https://hayspost.com/posts/94f59897-4370-450a-b4ed-f5ebbf54a523 | FOUND | Candidate/promotional material with contact email and platform statements on smaller classes, cours — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01275: | GoodParty.org profile | https://goodparty.org/candidate/craig-pallister/hays-usd-489-school-board | FOUND, LIMITED | Public civic profile lists Pallister as nonpartisan for Hays USD 489 School Board, election date Nov. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01278: | Personal Facebook | Public web/search check | NOT VERIFIED | No publicly reviewable, attributable Pallister school-board personal profile or post inventory was confirmed in logged-out capture. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01279: | LinkedIn | Public web/search check | NOT VERIFIED | Search results surfaced other Craig Pallister profiles outside Kansas/education contexts; no verified Hays/USD 489 Pallister LinkedIn profile was confirmed. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01282: | YouTube | Public web/search check | NOT FOUND | No candidate-controlled channel surfaced. USD 489 meeting video links are public meeting records, not a Pallister-controlled channel. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-pallister-01289: Pallister is a USD 489 Board of Education member after winning a seat in the November 4, 2025 general election. Hays Post described him as a retired educator and former school-board member who had served four years, narr — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-craig-pallister-00062: URL: https://www.ellisco.net/DocumentCenter/View/5892/Official-Results-2025-General-Election — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-craig-pallister-00417: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00424: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00044: URL: https://usd489.community.highbond.com/Portal/MeetingInformation.aspx?Id=358 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-craig-pallister-00335: Source: [Kansas Legislature: SB 75](https://www.kslegislature.gov/li/b2025_26/measures/sb75/) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-craig-pallister-00619: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00718: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00543: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00554: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00567: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00580: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00587: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00603: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00833: [USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00834: [Hays USD Candidate Q&A: Curt Vajnar](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00835: [Teacher of the Month: Vajnar says goodbye to HHS](https://hayspost.com/posts/5e878e4beb7f170536019f51) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00859: [Hays USD 489 School Board Candidate: Ruth Ruder](https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00860: [Hays USD 489 BOE Candidate: Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00879: [USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-pallister-00880: [USD 489 Candidate Q&A: Ken Brooks](https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
