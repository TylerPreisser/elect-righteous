# Notes — evidence-matrix-builder — damon-anderson — 2026-05-20

## Summary
- Raw rows read: 667
- Final deduplicated rows written: 343
- Duplicate rows absorbed: 324
- Rejected rows retained in final matrix: 108
- Use-with-caveat rows: 5
- Source-only rows: 4
- Rows without issue mapping: 147

## Final Use Decisions
```json
{
  "use": 5,
  "use-with-caveat": 5,
  "source-only": 4,
  "background-only": 221,
  "reject": 108
}
```

## Final Confidence
```json
{
  "confirmed": 2,
  "likely": 24,
  "weak-signal": 17,
  "unknown": 300
}
```

## Source Tiers
```json
{
  "primary": 21,
  "secondary": 5,
  "internal-memory": 300,
  "social": 17
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 8    |
| 2     | LGBT / gender / parental rights                    | 7    |
| 3     | Education / curriculum / schools                   | 24   |
| 4     | Religious liberty / church / civic morality        | 1    |
| 5     | Taxes / spending / debt                            | 25   |
| 6     | Economy / jobs / labor                             | 12   |
| 7     | Guns / Second Amendment                            | 1    |
| 8     | Immigration / border                               | 38   |
| 9     | Health care / insurance / Medicaid                 | 27   |
| 10    | Election integrity / voting / courts               | 133  |
| 11    | Public safety / law enforcement / criminal justice | 28   |
| 12    | Agriculture / rural economy / water                | 16   |
| 13    | Local governance / transparency / ethics           | 154  |
| 14    | Environment / energy / land use                    | 2    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 5 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-damon-anderson-00015: LGBTQ and reproductive-rights positions: Anderson's campaign states support for the LGBTQ+ community and says he is pro-choice while also saying he respects those who disagree. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-damon-anderson-00014: Where they stand on big issues: Anderson's campaign states support for affordable health care and prescription drugs, public education investments, tech-sector growth with guardrails, AI regulation, strong-border immigra — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-damon-anderson-00013: Money in politics / ethics reform: Anderson's campaign says Washington answers too much to corporate donors, lobbyists, and party leadership; his reform list includes overturning Citizens United, limiting leadership PACs — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-damon-anderson-00017: Primary sources are treated first. Candidate-controlled campaign pages are used for stated positions. Social-media or online-presence observations are not used to infer belief unless the observed item itself is issue-rel — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-damon-anderson-00012: Ballot / filing status: Anderson is presented in the reviewed Kansas filing source as a Democratic U.S. Senate candidate for the 2026 cycle. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-damon-anderson-00297: "Ellis County's non-commission elected offices run the day-to-day operations of county government. The sheriff commands all county law enforcement and runs the jail. The county attorney prosecutes crimes. The county cler — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00294: "These Ellis County officeholders are current county officials not shown on the current 2026 county filing PDF. Nathan Leiker is grouped here as a current District 3 commissioner until official county filing records show — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00295: "Not every county office is on the ballot every two years. This page profiles the current county officials who matter to Ellis County voters even when they are not on the current 2026 filing list: Nathan Leiker, Sheriff  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00228: "The treasurer race was missing from the site. It now includes the confirmed statewide filing row for incumbent Steven Johnson and the KPDC account record for Eric Lund, with final ballot status still subject to official — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-damon-anderson-00008: Position: U.S. Senate candidate, Kansas — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-damon-anderson-00009: Election grouping: us-senate-2026 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-damon-anderson-00010: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-damon-anderson-00016: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-damon-anderson-00254: "The State Board of Education helps decide statewide standards, curriculum fights, accreditation, and major school policy. District 5 includes Hays and much of western Kansas. The site now separates current-officeholder  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00245: "House District 111 is one of the most directly local state races for Hays-area voters. Barb Wasinger is the incumbent, and this race affects the laws and budget choices that hit closest to home.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00220: "Scott Schwab is leaving the office to run for governor, which opens a four-candidate contest over who will manage Kansas elections and business filings.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00115: 3. **Sandy Spidel Neumann** -- Retired financial services executive (20+ years at Ameriprise). No prior public office. — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00116: 4. **Anne Parelkar** -- Immigration attorney. No prior public office. — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00213: "The attorney general is Kansas's top lawyer and one of its most visible statewide offices. Kris Kobach is the incumbent, and Chris Mann is the main challenger on the board right now.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00236: "Kansas elects its insurance commissioner, and this office touches rates, claims, consumer complaints, and company oversight. Daniel Hawkins and Dinah Sykes are confirmed in the statewide filing mirror; Ric Koehn is incl — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00253: "District 5 covers western Kansas, including Ellis County. The KPDC 2026 odd-district index currently lists Michelle Cunningham and Lorie Wood for District 5; current officeholder Cathy Hopkins remains profiled separatel — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00111: 2. **Chase LaPorte** -- Republican challenger. Limited public profile information available. — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00127: Marshall's approval ratings and any primary challenge from LaPorte could be factors. — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-damon-anderson-00235: "The open-seat insurance commissioner race currently includes Daniel Hawkins and Dinah Sykes in filing rows, plus Ric Koehn in KPDC campaign-finance records.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
