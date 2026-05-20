# Notes — evidence-matrix-builder — scott-braun — 2026-05-20

## Summary
- Raw rows read: 5863
- Final deduplicated rows written: 2774
- Duplicate rows absorbed: 3089
- Rejected rows retained in final matrix: 580
- Use-with-caveat rows: 52
- Source-only rows: 90
- Rows without issue mapping: 1070

## Final Use Decisions
```json
{
  "use": 182,
  "use-with-caveat": 52,
  "source-only": 90,
  "background-only": 1870,
  "reject": 580
}
```

## Final Confidence
```json
{
  "confirmed": 86,
  "likely": 286,
  "weak-signal": 117,
  "contradicted": 2,
  "unknown": 2283
}
```

## Source Tiers
```json
{
  "primary": 88,
  "secondary": 285,
  "social": 117,
  "internal-memory": 2284
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 9    |
| 2     | LGBT / gender / parental rights                    | 7    |
| 3     | Education / curriculum / schools                   | 138  |
| 4     | Religious liberty / church / civic morality        | 283  |
| 5     | Taxes / spending / debt                            | 54   |
| 6     | Economy / jobs / labor                             | 27   |
| 7     | Guns / Second Amendment                            | 2    |
| 8     | Immigration / border                               | 103  |
| 9     | Health care / insurance / Medicaid                 | 101  |
| 10    | Election integrity / voting / courts               | 527  |
| 11    | Public safety / law enforcement / criminal justice | 458  |
| 12    | Agriculture / rural economy / water                | 51   |
| 13    | Local governance / transparency / ethics           | 1045 |
| 14    | Environment / energy / land use                    | 24   |

## Conflict / Caveat Review
- 2 rows are marked contradicted and must not be asserted without explicit caveat.
- 52 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-scott-braun-00004: The dominant theme since then is jail capacity. In [December 2023 coverage](https://hayspost.com/posts/bc5f6d5c-cc32-4e29-8666-c9d7f0edd70e), Braun argued that the 72-bed jail could not always function as a true 72-bed f — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-braun-02655: narrative: "Scott Braun's public messaging is almost entirely the voice of an incumbent sheriff and law-enforcement administrator, not a conventional campaign brand. The clearest official source is the [Ellis County, Kan — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-braun-01189: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-braun-02203: No public statements found in the reviewed source set on abortion, school curriculum, LGBTQ issues, election administration, or most non-law-enforcement state policy. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-00449: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02181: | Civic, faith, and professional identity | 3 | [2019 campaign announcement](https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/), [LinkedIn profile](https://www.lin — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02187: In his 2019 candidacy announcement, Braun framed his sheriff campaign around "Dedication, Experience and Integrity" after describing his long law-enforcement career, Rotary service, St. Nicholas of Myra Church Council ro — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02174: Counts are based on a manually reviewed set of 17 public, attributed items. Categories are non-exclusive because several items cover jail capacity, mental health, drug enforcement, and budget risk at the same time. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02195: In HB 2771 testimony coverage, Braun framed the bill as liability clarity, fiscal responsibility, and taxpayer protection, while also saying community safety remained the main reason for staying in the ICE program. Sourc — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02220: [Crisis center budget coverage, Hays Post, July 16, 2025](https://hayspost.com/posts/fbac2993-56a7-4ebb-b494-5a194944d2c2) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02170: | Kansas Legislature/public meeting | Yes | [HB 2771 tracking and testimony listing](https://fastdemocracy.com/bill-search/ks/2025-2026/bills/KSB00012057/), [Hays Post hearing coverage](https://hayspost.com/posts/69131eb — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02178: | Drug enforcement, forfeiture, fentanyl/opioids | 4 | [Jan. 11, 2024 forfeiture](https://hayspost.com/posts/5e9ec24b-53c4-40ff-9c9d-36bfbdf8808a), [May 31, 2025 border release](https://www.marshall.senate.gov/newsroom/p — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02194: On the ICE memorandum, Braun emphasized that Ellis County cannot hold someone beyond the legal detainer window and that deputies are not stopping people on the street for immigration investigations. Source: [Hays Post, N — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02221: [ICE agreement explanation, Hays Post, Nov. 20, 2025](https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-00010: The largest visible social-audience marker found was his [LinkedIn profile](https://www.linkedin.com/in/scott-braun-cpm-62833366), which publicly showed 455 followers and 452 connections during review. That profile reinf — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02179: | Mental health and crisis response | 4 | [Jan. 11, 2024 KSA priorities](https://hayspost.com/posts/5e9ec24b-53c4-40ff-9c9d-36bfbdf8808a), [July 11, 2024 jail/mental health](https://hayspost.com/posts/3f35aea3-a505-43de- — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02189: On mental health, he said every Kansas sheriff is struggling with mental-health issues and questioned whether people with serious mental illness should be in county facilities. Source: [Hays Post, Jan. 11, 2024](https:// — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02155: Election context: ellis-county-current. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-00086: | s-linkedin-braun | candidate_controlled | https://www.linkedin.com/in/scott-braun-cpm-62833366 | 2026-05-19 | Public profile: Ellis County Sheriff, FHSU, Heartland Certified Public Manager, KSA president, volunteer rol — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-braun-02154: Candidate/profile: Scott J. Braun, Republican, Ellis County Sheriff. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-scott-braun-02145: Sen. Roger Marshall May 2025 border release: https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-visits-southern-border-alongside-kansas-law-enforcement-officials/ — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-02177: | Immigration, ICE detainers, border enforcement | 4 | [May 31, 2025 Marshall release](https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-visits-southern-border-alongside-kansas-law-enforcement-offi — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-02219: [Marshall border visit release, May 31, 2025](https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-visits-southern-border-alongside-kansas-law-enforcement-officials/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-01652: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-00733: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-00740: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-01699: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-01734: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-01753: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-01810: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-02302: url: "https://kpdc.kansas.gov/campaign-finance/" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-scott-braun-00933: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-01032: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-01220: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-01440: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-00857: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-00868: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-00881: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-00894: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-braun-00901: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
