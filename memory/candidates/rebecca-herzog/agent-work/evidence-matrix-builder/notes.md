# Notes — evidence-matrix-builder — rebecca-herzog — 2026-05-20

## Summary
- Raw rows read: 4389
- Final deduplicated rows written: 2642
- Duplicate rows absorbed: 1747
- Rejected rows retained in final matrix: 579
- Use-with-caveat rows: 32
- Source-only rows: 81
- Rows without issue mapping: 1000

## Final Use Decisions
```json
{
  "use": 159,
  "use-with-caveat": 32,
  "source-only": 81,
  "background-only": 1791,
  "reject": 579
}
```

## Final Confidence
```json
{
  "confirmed": 98,
  "likely": 239,
  "weak-signal": 94,
  "contradicted": 3,
  "unknown": 2208
}
```

## Source Tiers
```json
{
  "primary": 99,
  "secondary": 238,
  "social": 94,
  "internal-memory": 2211
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 11   |
| 2     | LGBT / gender / parental rights                    | 7    |
| 3     | Education / curriculum / schools                   | 136  |
| 4     | Religious liberty / church / civic morality        | 278  |
| 5     | Taxes / spending / debt                            | 112  |
| 6     | Economy / jobs / labor                             | 28   |
| 7     | Guns / Second Amendment                            | 6    |
| 8     | Immigration / border                               | 30   |
| 9     | Health care / insurance / Medicaid                 | 51   |
| 10    | Election integrity / voting / courts               | 569  |
| 11    | Public safety / law enforcement / criminal justice | 217  |
| 12    | Agriculture / rural economy / water                | 51   |
| 13    | Local governance / transparency / ethics           | 1087 |
| 14    | Environment / energy / land use                    | 10   |

## Conflict / Caveat Review
- 3 rows are marked contradicted and must not be asserted without explicit caveat.
- 32 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-rebecca-herzog-01189: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-rebecca-herzog-02176: No direct public statements were found on abortion, guns, immigration, election administration, taxes, schools, LGBTQ issues, Donald Trump, Joe Biden, or national partisan issues. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-00448: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02177: No public church affiliation was verified from the reviewed source set. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02161: Dominant accessible signal: a low-profile administrative official whose public record is about the register of deeds office's statutory functions, public service, accurate land indexes, records preservation, fee-based do — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02180: I searched for Rebecca Herzog, Becky Herzog, Ellis County Register of Deeds, Ellis County registrar, Hays Post mentions, Tiger Media Network voter-guide references, Ellis County official pages, county staff directory ent — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02130: Election context: ellis-county-current. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02132: Harvest focus: official register of deeds pages, public staff/professional listings, election coverage, local voter guides, public meeting/elected-official references, and obvious social/platform absences. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02133: Important source correction: no verified campaign website was found. Any existing project campaignWebsite value should be treated as unverified unless it is separately confirmed from official county, election, or candida — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02139: | Kansas Register of Deeds Association | Yes | [Ellis County KRDA listing](https://ksrods.com/contact-information/ellis-county-el-nc-district/) | Professional association listing names Rebecca Herzog for Ellis County and — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02141: | Hays Post election results | Yes | [2024 Ellis County results](https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496) | Shows incumbent Rebecca Herzog, Republican, receiving 7,074 votes for Ellis County Regis — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02159: | Incumbency/election status | 3 | [2020 voter guide](https://tigermedianet.com/?p=56543), [2021 swearing-in story](https://hayspost.com/posts/3278d618-1e26-4ad5-8ceb-e19b22b25a44), [2024 results](https://hayspost.com/po — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02163: Electoral: Hays Post reported Herzog received 7,074 votes as the incumbent Republican candidate for Ellis County Register of Deeds in the 2024 general election. Source: [Hays Post, Nov. 6, 2024](https://hayspost.com/post — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02165: Local-media visibility was minimal: the accessible record found election-result and swearing-in mentions, not issue interviews or campaign-profile quotations. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02186: [Hays Post 2024 Ellis County general-election results](https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-00285: [Facebook -- Commissioner Ellis County 1st District](https://www.facebook.com/EllisCountyDistrict1/) -- Active public page for his commissioner seat — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-00288: [Facebook Page](https://www.facebook.com/p/Bobbi-Dreiling-for-Ellis-County-Clerk-100067810926476/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-01697: Facebook (Official): [musilcomish](https://www.facebook.com/musilcomish/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02030: [Facebook -- Commissioner Ellis County 1st District](https://www.facebook.com/EllisCountyDistrict1/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-rebecca-herzog-02129: Candidate/profile: Rebecca Herzog, Republican, Ellis County Register of Deeds. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-rebecca-herzog-01652: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00732: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00739: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-01699: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-01734: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-01753: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-01810: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-02323: url: "https://kpdc.kansas.gov/campaign-finance/" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-rebecca-herzog-00932: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-01031: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-01220: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-01440: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00856: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00867: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00880: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00893: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00900: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00916: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00973: [Kobach Religion - WhatReligionIsInfo](https://whatreligionisinfo.com/kobach-religion/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-rebecca-herzog-00975: [Sunflower State Journal: Kobach denounces vandalism at his church](https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
