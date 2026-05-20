# Notes — evidence-matrix-builder — ruth-ruder — 2026-05-20

## Summary
- Raw rows read: 5236
- Final deduplicated rows written: 3075
- Duplicate rows absorbed: 2161
- Rejected rows retained in final matrix: 541
- Use-with-caveat rows: 17
- Source-only rows: 58
- Rows without issue mapping: 1161

## Final Use Decisions
```json
{
  "use": 225,
  "use-with-caveat": 17,
  "source-only": 58,
  "background-only": 2234,
  "reject": 541
}
```

## Final Confidence
```json
{
  "confirmed": 38,
  "likely": 353,
  "weak-signal": 20,
  "contradicted": 7,
  "unknown": 2657
}
```

## Source Tiers
```json
{
  "primary": 38,
  "secondary": 353,
  "social": 20,
  "internal-memory": 2664
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 9    |
| 2     | LGBT / gender / parental rights                    | 64   |
| 3     | Education / curriculum / schools                   | 539  |
| 4     | Religious liberty / church / civic morality        | 273  |
| 5     | Taxes / spending / debt                            | 119  |
| 6     | Economy / jobs / labor                             | 46   |
| 7     | Guns / Second Amendment                            | 4    |
| 8     | Immigration / border                               | 20   |
| 9     | Health care / insurance / Medicaid                 | 43   |
| 10    | Election integrity / voting / courts               | 642  |
| 11    | Public safety / law enforcement / criminal justice | 257  |
| 12    | Agriculture / rural economy / water                | 32   |
| 13    | Local governance / transparency / ethics           | 1137 |
| 14    | Environment / energy / land use                    | 17   |

## Conflict / Caveat Review
- 7 rows are marked contradicted and must not be asserted without explicit caveat.
- 17 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-ruth-ruder-02935: narrative: "_A summary of what Ken Brooks has publicly said, posted, and had attributed to him across USD 489 board pages, election records, local candidate Q&As, local news, public meeting coverage, civic/church profile — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ruth-ruder-00006: On the March 2026 reconsideration of the proposed sale of 7.3 acres north of Felten Elementary, Ruder said, "If we sit on the land, we get nothing," and "I don't think we can just say no," urging the board to invite bidd — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ruth-ruder-02912: narrative: "Vernon Ruder Jr.'s public messaging is administrative, local, and practical rather than ideological. The strongest candidate-controlled source is his signed 2020 Hays Post letter, and the strongest attributed — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ruth-ruder-00743: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ruth-ruder-00003: At time of harvest, Ruth Ruder does not maintain a detectable personal public social-media presence. No campaign Facebook page, no X / Twitter account, no Instagram account, no public LinkedIn profile, no YouTube channel — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ruth-ruder-00580: [Facebook -- Commissioner Ellis County 1st District](https://www.facebook.com/EllisCountyDistrict1/) -- Active public page for his commissioner seat — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ruth-ruder-00583: [Facebook Page](https://www.facebook.com/p/Bobbi-Dreiling-for-Ellis-County-Clerk-100067810926476/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ruth-ruder-01804: [Facebook -- Commissioner Ellis County 1st District](https://www.facebook.com/EllisCountyDistrict1/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ruth-ruder-01902: U-1: No detectable personal social-media footprint. Per the in-their-own-words harvest, Ruth Ruder maintains no detectable personal Facebook page, X / Twitter account, Instagram, LinkedIn, YouTube channel, Substack, Trut — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ruth-ruder-02930: "url": "https://www.facebook.com/HaysDailyNews/posts/ellis-county-commission-chair-michael-berges-asserted-that-commissioners-are-not/1509240304362171/" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ruth-ruder-01933: No halt conditions triggered. No dossier contradiction detected (this sleuth-pass adds detail to but does not contradict the existing site-profile.md or raw-dump.md). No legal / sensitivity red flag rising to sensitivity — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.
- em-ruth-ruder-02626: vote directly contradicts that stated position when read carefully: — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.
- em-ruth-ruder-01882: Note for narrative-writer: These are two observations of the same board member articulating different posture on what is arguably the same underlying transaction at different stages — initially cautioning against specula — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.
- em-ruth-ruder-01968: honestly assert a stated-position contradiction. — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.
- em-ruth-ruder-02257: # engage — not a contradiction. Sleuth-pass R-4 explicitly flagged — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.
- em-ruth-ruder-02634: evidence that the stated position is contradicted by both votes. — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.
- em-ruth-ruder-02720: contradiction; that bar is not met. Sleuth-pass also flagged Issue 4 — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.

## Representative Rejected Rows
- em-ruth-ruder-01026: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01033: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-00252: | s-usd489-highbond-members | https://usd489.community.highbond.com/portal/members.aspx?id=18 | Fetched; shows current officer roles (Vajnar President, Brooks VP) | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-00424: Source: [Kansas Legislature: SB 75](https://www.kslegislature.gov/li/b2025_26/measures/sb75/) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ruth-ruder-01226: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01325: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01887: Source: Hays Post, April 2026 bathroom/vandalism coverage, https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede — tier: secondary. — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ruth-ruder-00076: SECONDARY (corroborates Park/Yarmer scrutiny pattern): Citizen Journal, "Takeaways from Hays USD 489 Education Board Meeting," https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/ — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-00195: Source: Hays Post Hays USD 489 BOE candidate forum coverage, https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df (published October 18, 2023) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ruth-ruder-01150: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01174: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01187: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01194: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01210: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01440: [USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01441: [Hays USD Candidate Q&A: Curt Vajnar](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01442: [Teacher of the Month: Vajnar says goodbye to HHS](https://hayspost.com/posts/5e878e4beb7f170536019f51) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01486: [USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01487: [USD 489 Candidate Q&A: Ken Brooks](https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ruth-ruder-01506: [Hays USD 489 School Board Candidate: Derek Yarmer](https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
