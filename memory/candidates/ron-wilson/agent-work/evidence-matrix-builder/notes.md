# Notes — evidence-matrix-builder — ron-wilson — 2026-05-20

## Summary
- Raw rows read: 9051
- Final deduplicated rows written: 2011
- Duplicate rows absorbed: 7040
- Rejected rows retained in final matrix: 413
- Use-with-caveat rows: 51
- Source-only rows: 26
- Rows without issue mapping: 700

## Final Use Decisions
```json
{
  "use": 107,
  "use-with-caveat": 51,
  "source-only": 26,
  "background-only": 1414,
  "reject": 413
}
```

## Final Confidence
```json
{
  "confirmed": 48,
  "likely": 178,
  "weak-signal": 99,
  "unknown": 1686
}
```

## Source Tiers
```json
{
  "primary": 52,
  "secondary": 174,
  "social": 99,
  "internal-memory": 1686
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 11   |
| 2     | LGBT / gender / parental rights                    | 65   |
| 3     | Education / curriculum / schools                   | 506  |
| 4     | Religious liberty / church / civic morality        | 281  |
| 5     | Taxes / spending / debt                            | 92   |
| 6     | Economy / jobs / labor                             | 22   |
| 7     | Guns / Second Amendment                            | 7    |
| 8     | Immigration / border                               | 12   |
| 9     | Health care / insurance / Medicaid                 | 84   |
| 10    | Election integrity / voting / courts               | 376  |
| 11    | Public safety / law enforcement / criminal justice | 177  |
| 12    | Agriculture / rural economy / water                | 30   |
| 13    | Local governance / transparency / ethics           | 649  |
| 14    | Environment / energy / land use                    | 6    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 51 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-ron-wilson-01713: narrative: "_A summary of what Ken Brooks has publicly said, posted, and had attributed to him across USD 489 board pages, election records, local candidate Q&As, local news, public meeting coverage, civic/church profile — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ron-wilson-01864: narrative: "_A summary of what Ron Wilson has publicly said, posted, testified, and had attributed to him across official USD 489 pages, the USD 489 public board portal, USD 489 live feed, Kansas Legislature testimony, l — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ron-wilson-01101: Official USD 489 news pages show his facilities case developing before the 2022 bond. In April 2021, Wilson said a facilities survey could not predict a bond outcome but could show whether people were ready to look at th — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ron-wilson-01950: "observation": "Official USD 489 news pages show his facilities case developing before the 2022 bond. In April 2021, Wilson said a facilities survey could not predict a bond outcome but could show whether people were rea — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ron-wilson-01177: The accessible set does not show Wilson centering national partisan campaign issues such as Donald Trump, Joe Biden, abortion, guns, immigration, partisan elections, judicial politics, Medicaid expansion, rural hospitals — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01110: On bathrooms and vandalism, Wilson's public posture is administrative enforcement plus skepticism toward social-media claims. Hays Post and Tiger Media Network quoted him saying schools struggle with vandalism, that stud — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01125: Tiger Media Network article on Felten naming and bathroom agenda context, August 22, 2023. Source: https://tigermedianet.com/?p=73743 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01127: Tiger Media Network article on gender-neutral bathrooms and mascot discussion, April 9, 2024. Source: https://tigermedianet.com/?p=78383 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01171: 2026: Wilson pushed back on Facebook-driven bathroom claims and said vandalism is a districtwide operational issue. Sources: https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede and https://tigermedianet.com/? — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-00017: The accessible professional social footprint is thin. A LinkedIn public preview identifies Ron Wilson with USD 489 Hays Public Schools, Kansas State University, 4 followers, and 2 connections, but no reliable public acti — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01071: Election slug: usd-489-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01073: Capture mode: logged-out public web capture of official USD 489 pages, USD 489 public board portal, USD 489 live feed, public legislative testimony, public professional-profile previews, local board/news coverage, and pl — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01087: | Citizen Journal | FOUND, SECONDARY | Summarizes March 2026 board-meeting takeaways, including mental-health funding, special education funding, and HB 2468 private-school tax-credit concerns. Used as a supplemental loc — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01088: | LinkedIn | FOUND, LIMITED | Public preview identifies "Ron Wilson," Wichita, Kansas Metropolitan Area, USD 489 Hays Public Schools, Kansas State University, 4 followers and 2 connections. No visible post archive was av — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01089: | Facebook personal/campaign | NOT VERIFIED | No clearly profile-controlled public Ron Wilson superintendent page or campaign-style Facebook feed surfaced. USD 489 official live feed and local coverage reference district — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01090: | X / Twitter | NOT FOUND | No clearly attributable Ron Wilson personal/superintendent X account surfaced. USD 489 live-feed text references district Twitter accounts in 2020, not Wilson's personal account. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01099: Wilson's accessible public messaging is administrative and district-operational. The clearest themes are facilities, bond implementation, school capacity, student support, public health, and trust in the district's admin — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01100: The earliest located superintendent-candidate profile, published by Hays Post archive on February 7, 2019, framed Wilson's pitch around what is best for students, consensus-building, teacher relationships, interest-based — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01106: In 2024-2026 coverage, Wilson's message stays focused on getting the bond and capital projects finished. He defended using the existing construction manager and district administration team instead of adding another proj — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ron-wilson-01108: His later construction and capital-outlay remarks are pragmatic and schedule-driven. In 2025-2026 he argued for capital purchases because students and staff were moving into new buildings, said Hays Middle School furnitu — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-ron-wilson-00411: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00209: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00216: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00510: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-01820: narrative: "*A summary of what Allen Park has publicly said, written, and been quoted saying in campaign questionnaires, USD 489 official pages, local board coverage, and civic media through 2026-05-11. No verified campa — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00335: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00346: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00359: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00372: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00379: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00625: [USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00626: [Hays USD Candidate Q&A: Curt Vajnar](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00627: [Teacher of the Month: Vajnar says goodbye to HHS](https://hayspost.com/posts/5e878e4beb7f170536019f51) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00651: [Hays USD 489 School Board Candidate: Ruth Ruder](https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00652: [Hays USD 489 BOE Candidate: Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00671: [USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00672: [USD 489 Candidate Q&A: Ken Brooks](https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00691: [Hays USD 489 School Board Candidate: Derek Yarmer](https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00692: [Hays USD 489 BOE Candidate: Derek Yarmer](https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ron-wilson-00723: [Hays USD 489 School Board Candidate: Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
