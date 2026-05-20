# Notes — evidence-matrix-builder — curt-vajnar — 2026-05-20

## Summary
- Raw rows read: 3009
- Final deduplicated rows written: 1699
- Duplicate rows absorbed: 1310
- Rejected rows retained in final matrix: 332
- Use-with-caveat rows: 52
- Source-only rows: 25
- Rows without issue mapping: 547

## Final Use Decisions
```json
{
  "use": 148,
  "use-with-caveat": 52,
  "source-only": 25,
  "background-only": 1142,
  "reject": 332
}
```

## Final Confidence
```json
{
  "confirmed": 59,
  "likely": 197,
  "weak-signal": 91,
  "contradicted": 3,
  "unknown": 1349
}
```

## Source Tiers
```json
{
  "primary": 60,
  "secondary": 197,
  "social": 91,
  "internal-memory": 1351
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 7    |
| 2     | LGBT / gender / parental rights                    | 12   |
| 3     | Education / curriculum / schools                   | 467  |
| 4     | Religious liberty / church / civic morality        | 229  |
| 5     | Taxes / spending / debt                            | 67   |
| 6     | Economy / jobs / labor                             | 24   |
| 7     | Guns / Second Amendment                            | 0    |
| 8     | Immigration / border                               | 4    |
| 9     | Health care / insurance / Medicaid                 | 30   |
| 10    | Election integrity / voting / courts               | 351  |
| 11    | Public safety / law enforcement / criminal justice | 39   |
| 12    | Agriculture / rural economy / water                | 23   |
| 13    | Local governance / transparency / ethics           | 659  |
| 14    | Environment / energy / land use                    | 3    |

## Conflict / Caveat Review
- 3 rows are marked contradicted and must not be asserted without explicit caveat.
- 52 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-curt-vajnar-01576: narrative: "Curt Vajnar's public voice is local, school-specific, and governance-focused. I found no verified campaign website or campaign social feed for him. The strongest source set is Hays Post candidate Q&As and for — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-curt-vajnar-01178: Hays Post election story using unofficial totals: https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-curt-vajnar-01246: No public candidate-controlled statements were found in the reviewed source set on abortion, national partisan politics, election administration, foreign policy, or most non-school-board state/federal issues. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01186: Election slug: usd-489-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01188: Public date range found: 1999 public teaching-award record through March 2026 USD 489 public meeting portal activity, with strongest candidate-attributed messaging in 2021 and 2025. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01189: Harvest focus: candidate/profile-controlled or clearly candidate-attributed messaging from school-board Q&As, candidate forums, USD 489 board pages and meeting portal, public meeting/news coverage, student/local media, a — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01196: | 2021 candidate questionnaire | Found | Hays Post published Hays NEA questions and candidate-submitted answers. This is the clearest early candidate-controlled school-board platform text. Source: [Hays Post, Oct. 5, 202 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01197: | 2025 candidate Q&A | Found | Hays Post interviewed Vajnar during the 2025 USD 489 race and published his answers in Q&A format. Source: [Hays Post, Oct. 14, 2025](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a8 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01199: | Local/student media coverage | Found | Tiger Media Network covered the August 2025 naming-rights discussion and quoted Vajnar. Source: [Tiger Media Network, Aug. 19, 2025](https://tigermedianet.com/?p=88429). | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01206: | YouTube/video | Found as meeting/forum infrastructure, not personal channel | USD 489 meeting infrastructure exists, and forum/news coverage exists, but no personal Vajnar YouTube channel was found. Transcript-level cl — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01211: | Fiscal oversight, taxes, sponsorship/naming revenue, and budget tradeoffs | 7 | Repeatedly frames decisions through taxpayer accountability, fixed-income residents, competitive teacher salaries, sponsorship value, and  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01212: | Teacher recruitment, retention, morale, pay, and class size | 6 | Draws on his 31-year teaching background, supports qualified teachers, discusses competitive pay, student-teacher pipelines, class-size pressure, and st — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01214: | Student safety and school resource officers | 2 | In 2025 Q&A, he took credit for pushing the first SRO and said he would continue pushing for a second one. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01215: | Technology, transportation, and practical operations | 3 | Supported 1-to-1 technology while asking for stronger tech support; backed safer vehicle leasing; praised laptop decision-making for high school students. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01216: | Curriculum, assessment, and real-world learning | 3 | 2021 answers and 2025 assessment comments stress student-first decisions, real-world math, broad opportunities, and post-secondary preparation. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01217: | Biography, agriculture education, FFA, and community roots | 3 | Public profile is anchored in his Hays High ag-teacher career, Kansas Master Teacher/Teacher of the Year references, ranching/farming/business identity,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01220: The clearest electoral attention signal is the 2025 result: Hays Post reported Vajnar was re-elected with 2,531 votes, the top total in the USD 489 race. Source: [Hays Post, Nov. 5, 2025](https://hayspost.com/posts/ff929 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01223: 2021 reason for running: Vajnar said he wanted the best possible education for all USD 489 students, including his own children in the district. Source: [Hays Post, Oct. 5, 2021](https://hayspost.com/posts/23c8a445-672d- — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01224: 2021 qualifications: He cited 31 years teaching in USD 489, Kansas Teacher of the Year, National Board Certification, and endorsements in agriculture education, biology, drivers education, and administration. Source: [Ha — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-curt-vajnar-01225: 2021 public-education problems: He named teacher shortages and retention, COVID learning loss, curriculum, facility quality, and access to classrooms for educators. Source: [Hays Post, Oct. 5, 2021](https://hayspost.com/ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-curt-vajnar-01334: url: "https://www.sos.ks.gov/elections/election-standards/Kansas-Election-Standards-Chapter-IV-Candidates.pdf" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-curt-vajnar-00320: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00327: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-01365: url: "https://kpdc.kansas.gov/campaign-finance/" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-curt-vajnar-00238: Source: [Kansas Legislature: SB 75](https://www.kslegislature.gov/li/b2025_26/measures/sb75/) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-curt-vajnar-00522: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00621: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00457: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00470: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00483: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00490: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00506: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00762: [Hays USD 489 School Board Candidate: Ruth Ruder](https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00763: [Hays USD 489 BOE Candidate: Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00782: [USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00783: [USD 489 Candidate Q&A: Ken Brooks](https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00802: [Hays USD 489 School Board Candidate: Derek Yarmer](https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00803: [Hays USD 489 BOE Candidate: Derek Yarmer](https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00834: [Hays USD 489 School Board Candidate: Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-curt-vajnar-00851: [Hays USD 489 School Board Candidate: Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
