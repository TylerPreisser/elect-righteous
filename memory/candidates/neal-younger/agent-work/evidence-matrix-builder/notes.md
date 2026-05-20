# Notes — evidence-matrix-builder — neal-younger — 2026-05-20

## Summary
- Raw rows read: 8482
- Final deduplicated rows written: 3378
- Duplicate rows absorbed: 5104
- Rejected rows retained in final matrix: 661
- Use-with-caveat rows: 56
- Source-only rows: 87
- Rows without issue mapping: 1274

## Final Use Decisions
```json
{
  "use": 145,
  "use-with-caveat": 56,
  "source-only": 87,
  "background-only": 2429,
  "reject": 661
}
```

## Final Confidence
```json
{
  "confirmed": 67,
  "likely": 261,
  "weak-signal": 127,
  "contradicted": 1,
  "unknown": 2922
}
```

## Source Tiers
```json
{
  "primary": 69,
  "secondary": 259,
  "social": 127,
  "internal-memory": 2923
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 12   |
| 2     | LGBT / gender / parental rights                    | 5    |
| 3     | Education / curriculum / schools                   | 152  |
| 4     | Religious liberty / church / civic morality        | 306  |
| 5     | Taxes / spending / debt                            | 175  |
| 6     | Economy / jobs / labor                             | 60   |
| 7     | Guns / Second Amendment                            | 3    |
| 8     | Immigration / border                               | 36   |
| 9     | Health care / insurance / Medicaid                 | 136  |
| 10    | Election integrity / voting / courts               | 658  |
| 11    | Public safety / law enforcement / criminal justice | 281  |
| 12    | Agriculture / rural economy / water                | 143  |
| 13    | Local governance / transparency / ethics           | 1350 |
| 14    | Environment / energy / land use                    | 25   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 56 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-neal-younger-01407: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-neal-younger-00666: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02479: [Hays Post, Feb. 17, 2025](https://hayspost.com/posts/6d241a34-335a-4d56-8c0e-25fd345db003): reported Younger requested review of turn signals at Highway 40 and Canterbury Drive ahead of increased traffic from the new hi — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02483: [Hays Post, Aug. 16, 2024](https://hayspost.com/posts/2584b551-eb90-4e5b-abbf-fd3ef6cab0bc): quoted Younger supporting Commerce Parkway access as a route to the new school, I-70, and future development. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02484: [Hays Post, Sept. 30, 2024](https://hayspost.com/posts/fd6be90b-bcb4-49d7-bf9a-20194a876c3c): at a voter-education event, Younger said listening to constituents and fellow leaders matters for staying connected. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02494: | Communication, listening, and public involvement | 5 | City-county meeting attendance; taxpayers and town/fire meetings; voter-education remarks; department communication; meeting attendance as governing style. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02497: | Public safety and risk management | 3 | Mental-health funding as jail-cost avoidance; campground safety concern in older coverage; traffic signal review near new school. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02498: | Community/civic institutions | 3 | Historical Society funding; voter-education event; weather spotting and High Plains Mental Health fundraiser attendance. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02503: No public church-affiliation statement by Younger was located in this harvest. Family obituary material mentions a parent's church, but that is not a candidate statement and should not be treated as his affiliation. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02458: Budget stabilization: said Ellis County should maintain what it has until more normal conditions returned. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02460: Voter concern: identified "Ellis County spending too much money" as a top concern and said people should be kept involved. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02475: [Hays Post, Sept. 9, 2025](https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec): during 2026 budget approval coverage, Younger defended high county spending as tied to services including ambulance, roads, nox — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02476: [Hays Post, July 16, 2025](https://hayspost.com/posts/fbac2993-56a7-4ebb-b494-5a194944d2c2): in budget discussion, Younger said the High Plains Mental Health increase was less expensive than building a new jail. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02478: [Hays Post, June 11, 2025](https://hayspost.com/posts/f411c2a9-c20a-4cf3-963d-d834ddb0f613): in cost-of-living adjustment coverage, Younger said, "We don't want to be a training center." He also said a Victoria approach- — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02486: [Hays Post, Apr. 3, 2025](https://greatbendpost.com/posts/abf8f598-5bf6-4fe2-b37b-60984c3b87c9): after former County Attorney Robert Anderson apologized for a budget overrun, Younger said it took a real person to apologi — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02491: | County finances, taxes, and budget process | 8 | 2020 spending concern; maintaining services; sales-tax/property-tax context; 2026 budget; scholarship/Grow Hays changes; COLA; road funding timing; county salary/reorgan — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02495: | Public health, mental health, and emergency services | 4 | EMS/medical-center consultation in 2020; High Plains Mental Health funding; health department interim leadership; ambulance/mental-health service spending. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02455: Economic development: said the county should be more proactive, work with Hays, improve water supply, and pursue "higher-paying jobs." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02496: | Economic development and jobs | 3 | Higher-paying jobs; water and growth; Commerce Parkway/development access. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-neal-younger-02454: Public health decision-making: said commissioners should consult the head of EMS and communicate with the medical center before making community health decisions. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-neal-younger-01870: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-00950: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-00957: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01917: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01952: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01971: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-02028: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01150: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01249: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01438: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01658: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01074: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01085: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01098: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01111: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01118: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01134: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01043: [Marilyn (Klaus) Leiker Obituary](https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01191: [Kobach Religion - WhatReligionIsInfo](https://whatreligionisinfo.com/kobach-religion/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-neal-younger-01193: [Sunflower State Journal: Kobach denounces vandalism at his church](https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
