# Notes — evidence-matrix-builder — chase-laporte — 2026-05-20

## Summary
- Raw rows read: 8166
- Final deduplicated rows written: 3520
- Duplicate rows absorbed: 4646
- Rejected rows retained in final matrix: 626
- Use-with-caveat rows: 23
- Source-only rows: 117
- Rows without issue mapping: 1506

## Final Use Decisions
```json
{
  "use": 198,
  "use-with-caveat": 23,
  "source-only": 117,
  "background-only": 2556,
  "reject": 626
}
```

## Final Confidence
```json
{
  "confirmed": 104,
  "likely": 323,
  "weak-signal": 132,
  "contradicted": 4,
  "unknown": 2957
}
```

## Source Tiers
```json
{
  "primary": 106,
  "secondary": 321,
  "social": 132,
  "internal-memory": 2961
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 65   |
| 2     | LGBT / gender / parental rights                    | 10   |
| 3     | Education / curriculum / schools                   | 120  |
| 4     | Religious liberty / church / civic morality        | 106  |
| 5     | Taxes / spending / debt                            | 84   |
| 6     | Economy / jobs / labor                             | 72   |
| 7     | Guns / Second Amendment                            | 27   |
| 8     | Immigration / border                               | 70   |
| 9     | Health care / insurance / Medicaid                 | 219  |
| 10    | Election integrity / voting / courts               | 912  |
| 11    | Public safety / law enforcement / criminal justice | 225  |
| 12    | Agriculture / rural economy / water                | 146  |
| 13    | Local governance / transparency / ethics           | 1213 |
| 14    | Environment / energy / land use                    | 25   |

## Conflict / Caveat Review
- 4 rows are marked contradicted and must not be asserted without explicit caveat.
- 23 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-chase-laporte-00031: Kansas Secretary of State candidate list endpoint blocked in text browser, accessed 2026-05-19: https://sos.ks.gov/elections/elections_upcoming_candidate.aspx — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-chase-laporte-00742: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-chase-laporte-00078: Ballotpedia, blocked by JavaScript/robot verification in this environment, attempted 2026-05-19: https://ballotpedia.org/Chase_LaPorte — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-chase-laporte-00084: DNS/curl attempt for https://www.laporte4ksgov.com/, accessed 2026-05-19; result: could not resolve host. — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-chase-laporte-02770: Topic distribution among the 7 public candidate-controlled issue, pledge, and filing statements: government structure / campaign identity - 3 of 7 (43%); education - 1 of 7 (14%); health care - 1 of 7 (14%); National Gua — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02774: Across the captured period the feed contains no harvestable public posts about agriculture, the Farm Bill, tariffs, rural hospitals, Medicare, Medicaid, Social Security, veterans' benefits, immigration, border enforcemen — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02753: 2022-06-24 - OnTheIssues archived the 2022 campaign-site line "Freedom of choice for personal healthcare choices." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02715: Current public election listings also show a House filing path. The [Johnson County Election Office candidate list](https://www.jocoelection.org/candidates-elected-officials/candidates) listed Chase LaPorte under "U.S. R — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02744: 2025-05-28 - U.S. Term Limits published that LaPorte had signed its congressional term-limits pledge. The pledge text reads, "I pledge that as a member of Congress, I will cosponsor and vote for the U.S. Term Limits amen — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02749: Context: Candidate filing for U.S. Senate, Kansas, 2026. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02769: Public candidate-controlled issue, pledge, and filing statements examined: 7. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02781: Posts examined: approximately 0 original social posts + 0 reposts; approximately 7 LinkedIn visible liked items; 7 public candidate-controlled issue, pledge, and filing statements. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02782: Local / public records examined: FEC candidate pages and Form 2 PDF; Johnson County Election Office candidate list; The Green Papers Kansas 2026 listing; U.S. Term Limits pledge release; OnTheIssues archived campaign-sit — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-00004: LaPorte's visible alignment signals come from LinkedIn preview data and public organization pages rather than from campaign posts. The only identifiable social profile signal is a LinkedIn preview, which showed CSC - Con — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02732: Visible liked-item topics in the public preview: Sedgwick County Farm Bureau legislative luncheon; Shriners Children's New Year and holiday posts; a Wichita State University degree-progress post; Americans for Prosperity — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02204: Facebook (Official): [musilcomish](https://www.facebook.com/musilcomish/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02730: Public preview details visible in search results as of 2026-05-11: 187 followers; 186 connections; Kansas City Metropolitan Area; CSC - Contemporary Services Corporation; Wichita State University. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02746: Context: Candidate pledge for federal office, described by U.S. Term Limits as signed by LaPorte for the 2026 U.S. House race in Kansas District 3. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-02747: 2025-09-12 - The FEC Statement of Candidacy listed the principal campaign committee as "LaPorte for a Brighter America." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-chase-laporte-03197: "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-chase-laporte-00774: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-02828: url: "https://www.sos.ks.gov/elections/important-election-dates.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-chase-laporte-00233: Campaign Finance: As the incumbent senator, Marshall has access to a substantial war chest and national Republican fundraising apparatus. Specific 2026 cycle totals should be checked at [FEC.gov](https://www.fec.gov/data — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-00348: FEC Page: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-00603: Sandy Spidel Neumann (D) - [FEC ID: S6KS00262](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-01261: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-01262: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-01263: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-01849: [FEC - Kansans for Marshall](https://www.fec.gov/data/committee/C00576173/?cycle=2026) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-02206: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-02241: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-02261: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-02318: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-02560: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-02748: Source: [FEC Form 2, image 202509129790051703](https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-chase-laporte-00330: [Patrick Schmidt - Kansas Legislature](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-01288: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-01289: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-01290: [Patrick Schmidt Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-chase-laporte-01847: [Marshall Senate Website](https://www.marshall.senate.gov/about/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
