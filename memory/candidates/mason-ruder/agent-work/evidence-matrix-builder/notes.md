# Notes — evidence-matrix-builder — mason-ruder — 2026-05-20

## Summary
- Raw rows read: 8062
- Final deduplicated rows written: 4005
- Duplicate rows absorbed: 4057
- Rejected rows retained in final matrix: 714
- Use-with-caveat rows: 49
- Source-only rows: 152
- Rows without issue mapping: 1520

## Final Use Decisions
```json
{
  "use": 286,
  "use-with-caveat": 49,
  "source-only": 152,
  "background-only": 2804,
  "reject": 714
}
```

## Final Confidence
```json
{
  "confirmed": 104,
  "likely": 484,
  "weak-signal": 140,
  "contradicted": 1,
  "unknown": 3276
}
```

## Source Tiers
```json
{
  "primary": 106,
  "secondary": 482,
  "social": 140,
  "internal-memory": 3277
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 9    |
| 2     | LGBT / gender / parental rights                    | 16   |
| 3     | Education / curriculum / schools                   | 342  |
| 4     | Religious liberty / church / civic morality        | 370  |
| 5     | Taxes / spending / debt                            | 198  |
| 6     | Economy / jobs / labor                             | 73   |
| 7     | Guns / Second Amendment                            | 3    |
| 8     | Immigration / border                               | 31   |
| 9     | Health care / insurance / Medicaid                 | 117  |
| 10    | Election integrity / voting / courts               | 869  |
| 11    | Public safety / law enforcement / criminal justice | 416  |
| 12    | Agriculture / rural economy / water                | 180  |
| 13    | Local governance / transparency / ethics           | 1448 |
| 14    | Environment / energy / land use                    | 21   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 49 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-mason-ruder-03768: narrative: "_A summary of what Alaina Cunningham has publicly said, posted, and had attributed to her across city pages, public meeting records, local candidate Q&As, local news, podcast listings, and public profile trac — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-mason-ruder-03741: narrative: "Mason Ruder's public messaging is not built around a visible campaign-social apparatus. Through May 11, 2026, the clearest public record comes from Hays City Commission meetings, Hays Post reporting, a 2023 c — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-mason-ruder-03833: narrative: "Vernon Ruder Jr.'s public messaging is administrative, local, and practical rather than ideological. The strongest candidate-controlled source is his signed 2020 Hays Post letter, and the strongest attributed — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-mason-ruder-03866: On the March 2026 reconsideration of the proposed sale of 7.3 acres north of Felten Elementary, Ruder said, "If we sit on the land, we get nothing," and "I don't think we can just say no," urging the board to invite bidd — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-mason-ruder-01681: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-mason-ruder-00588: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03101: | Catholic education, faith, family, local roots, philanthropy | 5 | Public employer/civic profile is anchored in TMP-Marian/Hays Catholic Schools advancement and local Catholic community ties. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03113: 2022 Hays Catholic Schools role: Ruder said joining Hays Catholic Schools was a way to help his community, school, and family, and said his Catholic-community relationships would be an asset. Source: [TMP-Marian, Nov. 30 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03117: 2024 Catholic education fundraising: Ruder said TMP-Marian was blessed by alumni and community generosity, including donors who did not attend the school, and described carrying forward earlier generations' work as a pri — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03147: [Hays Post - Catholic education/ACE auction](https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03116: 2023 re-election: Ruder said city decisions affect residents almost immediately, interpreted his re-election as public faith that Hays was on the right track, and said, "Let's keep growing Hays. We have a lot of work to  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03093: | Local news quotes | Found | Hays Post provides the richest set of candidate-attributed remarks from 2019-2026, especially around water, housing, development, airport service, transportation, taxes, and Catholic schools — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03097: | Housing, workforce, growth, economic development, business incentives, property-tax structure | 9 | Repeatedly frames Hays growth as tied to housing supply, business partnerships, retail/visitor development, developmen — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03119: 2025 airport funding: Ruder said replacing a federal Essential Air Service subsidy cut would require a mill levy increase from 25 to 44 mills. Source: [Hays Post, May 24, 2025](https://hayspost.com/posts/2730c5cd-1026-40 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03121: 2025 property tax discussion: Ruder said Kansas' vacant-land valuation structure incentivizes holding land rather than building, and suggested marijuana tax revenue could offset property taxes and help sales-tax-reliant  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03151: [Hays Post - housing, property taxes, marijuana tax discussion](https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03115: 2023 candidate forum: Ruder prioritized the R9 water transfer and said Hays should focus on partnerships with business leaders, Grow Hays, and others to grow the workforce and develop housing. Source: [Hays Post, Oct. 18 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03085: | LinkedIn | Found, public preview only | Public search preview identifies [Mason Ruder, CPM](https://www.linkedin.com/in/mason-ruder-cpm-1aa36455), Hays, Kansas, with 151 followers and 131 connections. Previewed activit — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03102: | Pandemic/masks and public health governance | 1 | Public record shows he voted against mask ordinance extension and called for a plan for future handling. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-mason-ruder-03078: Election slug: hays-city-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-mason-ruder-01545: [City of Hays: Toby Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-02140: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-00871: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-00878: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01358: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01404: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01432: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-02269: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01071: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01170: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01712: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01927: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-03797: narrative: "Sandy Jacobs' accessible public messaging is local, civic, and operational. The strongest public record is not a modern social feed; it is a trail of candidate letters, Hays Post Q&As, city-meeting coverage,  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-00995: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01019: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01032: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01039: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-01055: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-02454: [USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-mason-ruder-02455: [Hays USD Candidate Q&A: Curt Vajnar](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
