# Notes — evidence-matrix-builder — derek-yarmer — 2026-05-20

## Summary
- Raw rows read: 3836
- Final deduplicated rows written: 1955
- Duplicate rows absorbed: 1881
- Rejected rows retained in final matrix: 384
- Use-with-caveat rows: 40
- Source-only rows: 38
- Rows without issue mapping: 642

## Final Use Decisions
```json
{
  "use": 109,
  "use-with-caveat": 40,
  "source-only": 38,
  "background-only": 1384,
  "reject": 384
}
```

## Final Confidence
```json
{
  "confirmed": 38,
  "likely": 195,
  "weak-signal": 80,
  "unknown": 1642
}
```

## Source Tiers
```json
{
  "primary": 38,
  "secondary": 195,
  "social": 80,
  "internal-memory": 1642
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 8    |
| 2     | LGBT / gender / parental rights                    | 38   |
| 3     | Education / curriculum / schools                   | 447  |
| 4     | Religious liberty / church / civic morality        | 254  |
| 5     | Taxes / spending / debt                            | 111  |
| 6     | Economy / jobs / labor                             | 16   |
| 7     | Guns / Second Amendment                            | 2    |
| 8     | Immigration / border                               | 8    |
| 9     | Health care / insurance / Medicaid                 | 83   |
| 10    | Election integrity / voting / courts               | 430  |
| 11    | Public safety / law enforcement / criminal justice | 131  |
| 12    | Agriculture / rural economy / water                | 17   |
| 13    | Local governance / transparency / ethics           | 701  |
| 14    | Environment / energy / land use                    | 1    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 40 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-derek-yarmer-01843: narrative: "*A summary of what Allen Park has publicly said, written, and been quoted saying in campaign questionnaires, USD 489 official pages, local board coverage, and civic media through 2026-05-11. No verified campa — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-derek-yarmer-01808: narrative: "*A summary of what Derek Yarmer has publicly said, written, and been quoted saying in campaign questionnaires, a published written statement, USD 489 board coverage, school/public pages, and professional prof — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-derek-yarmer-01751: On the March 2026 reconsideration of the proposed sale of 7.3 acres north of Felten Elementary, Ruder said, "If we sit on the land, we get nothing," and "I don't think we can just say no," urging the board to invite bidd — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-derek-yarmer-01194: Race: USD 489 Board Member, Hays USD 489 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01195: Election slug: usd-489-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01199: Derek Yarmer's accessible public messaging is not centered on a campaign website or active campaign social accounts. The usable record is primarily attributed local-news questionnaires and quotes, a published written sta — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01202: | Campaign website | No verified current campaign site found | Searched by name, office, campaign terms, and Hays/USD 489 terms. No official candidate-controlled campaign site was verified. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01210: | Local news / Q&A | [Hays Post 2023 Q&A](https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649), [Hays Post 2021 vacancy letter](https://hayspost.com/posts/f743144f-86f5-409f-af1d-729253115b28) | Candidate-aut — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01212: | Local board coverage | Hays Post and Tiger Media Network articles from 2024-2026 | Attributed comments on budgets, bond/capital outlay, administrator contracts, special education funding, mental health/social-emotional — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01215: 2021 USD 489 Vacancy Application — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01216: In a 2021 application letter published by Hays Post, Yarmer wrote that educating children is "one of the most important responsibilities we have as parents" and said he wanted to be active in the education of his daughte — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01219: In the 2023 Hays Post candidate questionnaire, Yarmer described himself as a 39-year-old ER doctor with children in USD 489 schools. His campaign financing answer was: "My campaign is 100 percent personally financed." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01222: Board transparency: he said all school board meetings should be broadcast, agendas should be released at least a week in advance, and board members should be able to add agenda items easily. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01227: Hays Post published a Yarmer email statement in full after asking him to elaborate on concerns that the community was not receiving what residents expected from the bond projects. Yarmer argued that the district was usin — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01230: He wrote that "the school's administration has failed to follow through on its promise to the taxpayers of USD 489 regarding its use of the bond money." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01231: He wrote that the school board shared blame for "reckless spending" because of insufficient oversight. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01238: | 2025-02-20 | [Hays Post](https://hayspost.com/posts/753ae9c5-9a0b-4bc2-b319-57e7fc4efdeb) | Special education funding and district spending | Said the district could "work a little leaner," questioned whether requested — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01248: HaysMed's provider page identifies Yarmer as an Emergency Department physician, with medical school at the University of Kansas School of Medicine and emergency medicine residency at the University of Missouri-Kansas Cit — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01255: Student education, core academics, special education, mental health/social-emotional learning, and what schools should teach: 5 source items. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-derek-yarmer-01256: Parent/student safety, pandemic response, bathrooms, vandalism, cameras, and health/safety: 4 source items. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-derek-yarmer-01340: url: "https://www.ellisco.net/DocumentCenter/View/5815/OFFICIAL-RESULTS-2023-CITY-SCHOOL-GENERAL-ELECTION" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-derek-yarmer-00344: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00351: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00262: Source: [Kansas Legislature: SB 75](https://www.kslegislature.gov/li/b2025_26/measures/sb75/) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-derek-yarmer-00546: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00645: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-01752: Two contextual notes are visible in the harvested record. First, Ruder is identified in multiple local pieces as a member of what local coverage refers to as the Ruder family network in Hays government — her husband Vern — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-01750: In office, Ruder's quoted positions on operational questions cluster around two themes: a non-micromanagement posture toward administration and a priority-setting frame that flags time spent on non-academic issues. On sc — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00470: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00481: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00494: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00507: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00514: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00530: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00760: [USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00761: [Hays USD Candidate Q&A: Curt Vajnar](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00762: [Teacher of the Month: Vajnar says goodbye to HHS](https://hayspost.com/posts/5e878e4beb7f170536019f51) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00786: [Hays USD 489 School Board Candidate: Ruth Ruder](https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00787: [Hays USD 489 BOE Candidate: Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-derek-yarmer-00806: [USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
