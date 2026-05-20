# Notes — evidence-matrix-builder — alaina-cunningham — 2026-05-20

## Summary
- Raw rows read: 9899
- Final deduplicated rows written: 3257
- Duplicate rows absorbed: 6642
- Rejected rows retained in final matrix: 686
- Use-with-caveat rows: 47
- Source-only rows: 118
- Rows without issue mapping: 1251

## Final Use Decisions
```json
{
  "use": 195,
  "use-with-caveat": 47,
  "source-only": 118,
  "background-only": 2211,
  "reject": 686
}
```

## Final Confidence
```json
{
  "confirmed": 82,
  "likely": 341,
  "weak-signal": 142,
  "unknown": 2692
}
```

## Source Tiers
```json
{
  "primary": 85,
  "secondary": 338,
  "social": 142,
  "internal-memory": 2692
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 15   |
| 2     | LGBT / gender / parental rights                    | 7    |
| 3     | Education / curriculum / schools                   | 155  |
| 4     | Religious liberty / church / civic morality        | 301  |
| 5     | Taxes / spending / debt                            | 175  |
| 6     | Economy / jobs / labor                             | 59   |
| 7     | Guns / Second Amendment                            | 10   |
| 8     | Immigration / border                               | 36   |
| 9     | Health care / insurance / Medicaid                 | 82   |
| 10    | Election integrity / voting / courts               | 698  |
| 11    | Public safety / law enforcement / criminal justice | 292  |
| 12    | Agriculture / rural economy / water                | 158  |
| 13    | Local governance / transparency / ethics           | 1226 |
| 14    | Environment / energy / land use                    | 30   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 47 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-alaina-cunningham-02994: narrative: "_A summary of what Alaina Cunningham has publicly said, posted, and had attributed to her across city pages, public meeting records, local candidate Q&As, local news, podcast listings, and public profile trac — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-alaina-cunningham-01534: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-alaina-cunningham-02600: The accessible set does not show Cunningham using social platforms to run a sustained public persuasion campaign. It also does not show public candidate-controlled posts on abortion, guns, immigration, national parties,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-00438: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02580: | Resident feedback, procedural listening, surveys, ordinance education, public safety reminders | 4 | 22% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02544: Her 2023 candidate Q&A is the densest first-person source. She framed her run around public service, saying she wanted to make positive change and that she tries to apply the motto "Do Good" in all areas of life. Her sta — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02549: On budget and tax tradeoffs, she is visible as a constrained-budget voice. During 2026 budget approval, she told staff, "You brought us a constrained budget which is what we asked for." ([Hays Post, Sep. 12, 2025](https: — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02554: Hays Post candidate Q&A: first-person platform on water, housing, economic growth, retirees, budget, infrastructure, and "Do Good." ([source](https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02562: Hays Post 2026 budget story: constrained-budget quote and 2026 revenue-neutral budget context. ([source](https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02566: Hays Post December 2025 property-tax-relief discussion: quote about shifting burden when funding sources are eliminated. ([source](https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02569: Hays Post April 2026 budget-prep story: quote on property-tax caps, city impacts, amenities, and early public awareness. ([source](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02577: | Budget, property taxes, revenue neutrality, funding tradeoffs, and city services | 5 | 28% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02582: Dominant accessible signal: pragmatic city-management messaging around growth, housing, incentives, water security, and budget tradeoffs. There is no visible partisan or culture-war campaign feed in the public capture. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02595: "You (staff) brought us a constrained budget which is what we asked for." ([Hays Post, Sep. 12, 2025](https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02597: "While it's great to cap your property taxes, it's going to affect the city in other ways." ([Hays Post, Apr. 6, 2026](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02556: Hays Post candidate forum: housing and business development dominated the forum; Cunningham identified youth retention as a top priority. ([source](https://hayspost.com/posts/686c41a0-31e3-415a-8fdf-3df810e7f5be)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02576: | Housing, economic growth, development incentives, workforce/youth retention, retail/business attraction | 8 | 44% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02571: HaysMed public page: lists Alaina Cunningham among Center for Health Improvement group fitness instructors. ([source](https://www.haysmed.com/services/chi-what-we-offer/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02516: Election slug: hays-city-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-alaina-cunningham-02524: | Candidate Q&A / local media | Hays Post and Tiger Media Network | FOUND | Most candidate-attributed issue messaging appears in 2023 Q&As, forum coverage, election-night coverage, meeting stories, and podcasts. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-alaina-cunningham-02634: url: "https://www.ellisco.net/DocumentCenter/View/5815/OFFICIAL-RESULTS-2023-CITY-SCHOOL-GENERAL-ELECTION" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-alaina-cunningham-01211: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-01992: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00723: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00730: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-01257: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-01285: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-01398: [City of Hays: Toby Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-02121: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00923: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-01022: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-01564: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-01779: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-03124: narrative: "_A summary of what Bobbi Dreiling has publicly said, published, linked, or been directly quoted saying across official Ellis County pages, public candidate/forum coverage, professional directories, county com — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00847: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00858: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00871: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00884: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00891: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-alaina-cunningham-00907: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
