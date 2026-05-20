# Notes — evidence-matrix-builder — aaron-cunningham — 2026-05-20

## Summary
- Raw rows read: 10962
- Final deduplicated rows written: 3028
- Duplicate rows absorbed: 7934
- Rejected rows retained in final matrix: 647
- Use-with-caveat rows: 61
- Source-only rows: 87
- Rows without issue mapping: 1126

## Final Use Decisions
```json
{
  "use": 151,
  "use-with-caveat": 61,
  "source-only": 87,
  "background-only": 2082,
  "reject": 647
}
```

## Final Confidence
```json
{
  "confirmed": 69,
  "likely": 265,
  "weak-signal": 138,
  "unknown": 2556
}
```

## Source Tiers
```json
{
  "primary": 71,
  "secondary": 263,
  "social": 138,
  "internal-memory": 2556
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 10   |
| 2     | LGBT / gender / parental rights                    | 6    |
| 3     | Education / curriculum / schools                   | 168  |
| 4     | Religious liberty / church / civic morality        | 316  |
| 5     | Taxes / spending / debt                            | 85   |
| 6     | Economy / jobs / labor                             | 39   |
| 7     | Guns / Second Amendment                            | 5    |
| 8     | Immigration / border                               | 31   |
| 9     | Health care / insurance / Medicaid                 | 74   |
| 10    | Election integrity / voting / courts               | 726  |
| 11    | Public safety / law enforcement / criminal justice | 430  |
| 12    | Agriculture / rural economy / water                | 104  |
| 13    | Local governance / transparency / ethics           | 1214 |
| 14    | Environment / energy / land use                    | 14   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 61 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-aaron-cunningham-02900: narrative: "_A summary of what Aaron Cunningham has publicly said, posted, and had attributed to him across official county pages, public professional profiles, public social/profile previews, local news, public legal/ci — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-aaron-cunningham-00343: The public record shows explicit Christian self-description, including references to the sovereignty of God and redeeming grace, but I could not verify a specific Hays church or denomination from the sources reviewed in  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-aaron-cunningham-01382: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-aaron-cunningham-02452: No candidate-controlled public messaging was found on abortion, guns, immigration, Donald Trump, Joe Biden, national partisan identity, LGBTQ issues, school curriculum, or election fraud. The visible record is almost ent — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-00013: LinkedIn surfaced a matching public profile preview with Kansas State University, Washburn University School of Law, a Hays work trail, 246 followers, and 245 connections, but direct fetch was blocked and no public activ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-00641: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02374: | LinkedIn | https://www.linkedin.com/in/aaron-cunningham-653b3094 | FOUND, LIMITED | Public preview matches education and Hays work trail: Kansas State University, Washburn University School of Law, 246 followers and 24 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02378: | Public civic/professional pages | FHSU, HaysMed, Kansas Courts Rural Justice Initiative, Phi Alpha Delta | FOUND | Public pages place him in civic/legal education contexts, rural justice work, and a human-trafficking a — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02397: LinkedIn is present but limited. The public preview identifies him with Kansas State University and Washburn University School of Law and shows 246 followers and 245 connections. It did not expose a public post timeline  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02410: LinkedIn public preview: education/work metadata; direct fetch blocked. ([source](https://www.linkedin.com/in/aaron-cunningham-653b3094)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02418: HaysMed human-trafficking panel page: public safety/community education appearance. ([source](https://www.haysmed.com/haysmed-panel-sheds-light-on-human-trafficking-at-chamber-luncheon/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02431: | Local biography, Hays return, education, professional formation | 6 | 40% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02396: The about.me page is the most personal candidate-controlled profile found. It presents him in explicitly Christian and Calvinist terms, lists Hays and Manhattan, Kansas, Hays High and Kansas State University, and links X — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02432: | Faith/self-description and personal identity | 1 | 7% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02395: That same interview gives the main public tension in his message: strict law enforcement, but limited resources and some space for treatment. He said the Legislature decides what is criminal and that he must enforce the  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02414: Hays Post February 2025 profile: marijuana prosecution, case priorities, attorney shortage, victim/witness coordination, treatment/mental-health comments. ([source](https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf15 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02430: | Treatment, Recovery Court, mental health, holistic approach | 2 | 13% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02361: Election slug: ellis-county-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02377: | Hays Post / local news | Hays Post, KWCH, CBS/48 Hours, Salina Post | FOUND | Most attributable messaging appears in local/public coverage: post-election profile, marijuana prosecution interview, legal-case statements, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-aaron-cunningham-02389: Hays Post's June 4, 2024 candidate filing coverage listed "Aaron J Cunningham" as the Republican candidate for Ellis County Attorney. ([Hays Post](https://hayspost.com/posts/71fc45b0-c8c1-41af-87da-6b86c8a8170b)) IKE Lab — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-aaron-cunningham-00084: URL: https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-aaron-cunningham-01845: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-00065: URL: https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-aaron-cunningham-00105: URL: https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07212025-686 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-aaron-cunningham-00925: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-00932: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01892: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01927: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01946: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-02003: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01125: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01224: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01413: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01633: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01049: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01060: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01073: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01086: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01093: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-aaron-cunningham-01109: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
