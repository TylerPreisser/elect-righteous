# Notes — evidence-matrix-builder — allen-park — 2026-05-20

## Summary
- Raw rows read: 3714
- Final deduplicated rows written: 1799
- Duplicate rows absorbed: 1915
- Rejected rows retained in final matrix: 402
- Use-with-caveat rows: 36
- Source-only rows: 32
- Rows without issue mapping: 528

## Final Use Decisions
```json
{
  "use": 111,
  "use-with-caveat": 36,
  "source-only": 32,
  "background-only": 1218,
  "reject": 402
}
```

## Final Confidence
```json
{
  "confirmed": 41,
  "likely": 206,
  "weak-signal": 71,
  "unknown": 1481
}
```

## Source Tiers
```json
{
  "primary": 42,
  "secondary": 205,
  "social": 71,
  "internal-memory": 1481
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 13   |
| 2     | LGBT / gender / parental rights                    | 24   |
| 3     | Education / curriculum / schools                   | 481  |
| 4     | Religious liberty / church / civic morality        | 258  |
| 5     | Taxes / spending / debt                            | 87   |
| 6     | Economy / jobs / labor                             | 21   |
| 7     | Guns / Second Amendment                            | 7    |
| 8     | Immigration / border                               | 18   |
| 9     | Health care / insurance / Medicaid                 | 40   |
| 10    | Election integrity / voting / courts               | 473  |
| 11    | Public safety / law enforcement / criminal justice | 165  |
| 12    | Agriculture / rural economy / water                | 26   |
| 13    | Local governance / transparency / ethics           | 708  |
| 14    | Environment / energy / land use                    | 3    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 36 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-allen-park-01597: narrative: "_A summary of what Ken Brooks has publicly said, posted, and had attributed to him across USD 489 board pages, election records, local candidate Q&As, local news, public meeting coverage, civic/church profile — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-allen-park-01704: narrative: "*A summary of what Allen Park has publicly said, written, and been quoted saying in campaign questionnaires, USD 489 official pages, local board coverage, and civic media through 2026-05-11. No verified campa — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-allen-park-01717: narrative: "_A summary of what Jayme Goetz has publicly said, posted, and had attributed to her across USD 489 board pages, USD 489 meeting/video records, local candidate Q&As, local news, school coverage, public profess — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-allen-park-01632: narrative: "Curt Vajnar's public voice is local, school-specific, and governance-focused. I found no verified campaign website or campaign social feed for him. The strongest source set is Hays Post candidate Q&As and for — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-allen-park-01641: On the March 2026 reconsideration of the proposed sale of 7.3 acres north of Felten Elementary, Ruder said, "If we sit on the land, we get nothing," and "I don't think we can just say no," urging the board to invite bidd — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-allen-park-01324: The accessible record did not show clear candidate-authored positions on state or national partisan issues such as abortion, guns, immigration, federal elections, or partisan education debates outside USD 489 operations. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01262: Race: USD 489 Board Member, Hays USD 489 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01263: Election slug: usd-489-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01267: Allen Park's accessible public messaging is not centered on a verified campaign website or public campaign social account. The usable record is primarily candidate questionnaires, attributed local-news quotes, USD 489 bo — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01270: | Campaign website | No verified current campaign site found | Searched by name, office, campaign terms, Hays/USD 489 terms, and quote text from known questionnaires. No official Park-controlled campaign site was verifie — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01271: | Facebook | No verified public candidate/campaign page found | Searches did not surface a reliable public Allen Park for USD 489 or similar candidate-controlled page. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01280: | Civic/professional pages | Hays Post archive and KLC Journal | Public material describes Park's education background, Leadership Hays, Hays Sunrise Rotary, Cottonwood Extension District student-development committee, R — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01283: The 2019 KLC Journal survey presented Park as a longtime Hays resident and former para, teacher, coach, and school administrator. He said he wanted to join a board team that puts "kids and families first" and identified  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01285: Hays Post's 2019 profile quoted Park on facilities and community involvement. He supported previous bond issues, said anything that helps kids deserves support, and argued that bond planning should invite community, teac — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01288: In the July 2023 Hays Post profile, Park described himself as a retired USD 489 elementary principal, licensed insurance agent, part-time UPS worker, incumbent board member, and parent of four Hays High graduates. He emp — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01291: Keep class sizes manageable and reduce student fees where possible. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01292: Support district technology and teacher training. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01300: He also said he had not received money outside the school district; donations came from family, friends, and community members, with remaining expenses paid personally. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01309: | 2025-09-23 | [Hays Post](https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17) | Asbestos removal and change-order process | Said his no vote was about process, not opposition to safety; said he was "No. 1 o — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-allen-park-01310: | 2025-11-11 | [Tiger Media Network](https://tigermedianet.com/?p=92038) | Property sale north of Hays Middle School | Asked why the board was rushing the sale, wanted an appraisal completed, and asked what water rights  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-allen-park-00050: URL: https://www.ellisco.net/DocumentCenter/View/5815/OFFICIAL-RESULTS-2023-CITY-SCHOOL-GENERAL-ELECTION — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-allen-park-01308: | 2024-02-06 | [USD 489 calendar article](https://www.usd489.com/article/1447496) | Professional-development calendar | Asked whether the district was giving parents support on student days off; voted against calendars w — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00068: URL: https://ethics.kansas.gov/campaign-finance/blank-forms/ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-allen-park-00392: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00399: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00310: Source: [Kansas Legislature: SB 75](https://www.kslegislature.gov/li/b2025_26/measures/sb75/) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-allen-park-00594: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00693: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-01642: Two contextual notes are visible in the harvested record. First, Ruder is identified in multiple local pieces as a member of what local coverage refers to as the Ruder family network in Hays government — her husband Vern — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-01640: In office, Ruder's quoted positions on operational questions cluster around two themes: a non-micromanagement posture toward administration and a priority-setting frame that flags time spent on non-academic issues. On sc — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-01680: narrative: "*A summary of what Derek Yarmer has publicly said, written, and been quoted saying in campaign questionnaires, a published written statement, USD 489 board coverage, school/public pages, and professional prof — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00011: Park's education-policy messaging is local and operational, not partisan. He has publicly supported technology needs and teacher training, smaller or manageable class sizes, reduced student fees, strong staff, safe facil — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00518: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00529: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00542: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00562: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00578: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00808: [USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00809: [Hays USD Candidate Q&A: Curt Vajnar](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-allen-park-00810: [Teacher of the Month: Vajnar says goodbye to HHS](https://hayspost.com/posts/5e878e4beb7f170536019f51) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
