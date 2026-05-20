# Notes — evidence-matrix-builder — jason-hart — 2026-05-20

## Summary
- Raw rows read: 5407
- Final deduplicated rows written: 3561
- Duplicate rows absorbed: 1846
- Rejected rows retained in final matrix: 631
- Use-with-caveat rows: 117
- Source-only rows: 97
- Rows without issue mapping: 1258

## Final Use Decisions
```json
{
  "use": 186,
  "use-with-caveat": 117,
  "source-only": 97,
  "background-only": 2530,
  "reject": 631
}
```

## Final Confidence
```json
{
  "confirmed": 76,
  "likely": 495,
  "weak-signal": 281,
  "unknown": 2709
}
```

## Source Tiers
```json
{
  "primary": 231,
  "internal-memory": 2689,
  "secondary": 360,
  "social": 281
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 87   |
| 2     | LGBT / gender / parental rights                    | 39   |
| 3     | Education / curriculum / schools                   | 176  |
| 4     | Religious liberty / church / civic morality        | 97   |
| 5     | Taxes / spending / debt                            | 123  |
| 6     | Economy / jobs / labor                             | 159  |
| 7     | Guns / Second Amendment                            | 36   |
| 8     | Immigration / border                               | 385  |
| 9     | Health care / insurance / Medicaid                 | 466  |
| 10    | Election integrity / voting / courts               | 935  |
| 11    | Public safety / law enforcement / criminal justice | 227  |
| 12    | Agriculture / rural economy / water                | 194  |
| 13    | Local governance / transparency / ethics           | 1199 |
| 14    | Environment / energy / land use                    | 28   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 117 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-jason-hart-02753: The live Kansas SOS candidate-list endpoint was blocked by JavaScript/anti-bot in this environment. A Douglas County Modus Elections candidate-filing table for the August 4, 2026 primary lists Jason Hart (D), Wichita, fi — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jason-hart-02971: "Kansas SOS filing rules and election dates are verified; the live SOS candidate-list endpoint was blocked, so candidate-list status is triangulated through a Douglas County filing table that says Hart filed by fee on 20 — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jason-hart-03112: sos_status: "Kansas SOS filing rules/dates confirmed; direct SOS candidate-list page blocked. Douglas County filing table lists Hart filed by fee on 2026-03-16 with documents filed with the State of Kansas." — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jason-hart-00768: Social media accounts not confirmed in available sources — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jason-hart-02812: Could not directly read the Kansas SOS live candidate-list page because it returned a JavaScript/anti-bot gate in browser search and a 403 in `curl`; used SOS candidate-information/dates pages plus Douglas County's filin — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jason-hart-01348: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jason-hart-02572: | Jason Hart | 21yr child abuse prosecutor, party-switch story | No campaign manager, first-time candidate | Lifelong (Wichita) | Unknown | — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jason-hart-00003: Across [35 captured Bluesky posts](social-harvest.md), Hart's largest single category is policy and issue statements, with 14 posts, or 40 percent of the captured original feed. The March 16 opening post wrote, "Jason Ha — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-00008: Across the captured social period the feed contains no posts about the Farm Bill by name, Fort Riley by name, higher-education affordability, housing costs, child care costs, or the Ogallala Aquifer by name. Across the c — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-00213: Social evidence: no lengthy abortion-focused Bluesky post found in the reviewed feed; avoid overstating social emphasis. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-02941: Issues page: [hartforsenate.com/issues](https://hartforsenate.com/issues) lists ten issue areas: Assert Congressional Authority; Provide for Our Veterans; Provide for Kansans' Health; Promote Rational Immigration Solutio — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-02958: Across the captured Bluesky period the feed contains no post-length discussion of abortion; the official issues page lists "Protecting Reproductive Rights" and "Support Kansans' 2022 Vote." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-00004: Hart's public alignment signal is built more through events and organizations than through reposts. The captured Bluesky feed contains no reposts from other accounts and no shared posts from Democratic primary opponents. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-00216: Social evidence: April 23 and April 28 Bluesky posts discuss Little Apple Pride; May 11 thread says people should stand up for LGBTQ+ neighbors and neighbors of color. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-02788: April 23 and April 28 Bluesky posts discuss attending Little Apple Pride. May 11 thread says people like Hart should stand up for LGBTQ+ neighbors and neighbors of color. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-02802: Current Bluesky posts after May 11 include Dodge City/Topeka events, campaign travel, immigration/accountability, education, tariffs, Iran, Ukraine/NATO, Israel/Palestinians, LGBTQ/civil rights, and Epstein-file oversigh — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-02858: 2026-04-28** — "My family attended Little Apple Pride this weekend, and it was a positive experience seeing the community come together. It’s important that everyone feels safe and supported being their authentic selves. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-02860: Topic: LGBTQ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-02861: 2026-04-23** — "This weekend, my family and I will be in Manhattan for Little Apple Pride, celebrating community, inclusion, and the freedom to live loud and proud. The parade begins at 11 a.m., and we’ll be at our table — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jason-hart-02909: Most-used tags: #HartForKansas, #KansansHaveHart, #Democrats, #Senate. Issue tags appeared on immigration enforcement, Pride, Iran, and ICT SOS posts. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-jason-hart-00049: Source: https://www.justice.gov/usao-ks/pr/registered-sex-offender-sentenced-22-years-prison-child-pornography — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-jason-hart-00042: Source: https://www.sos.ks.gov/elections/candidate-information.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-jason-hart-00292: Campaign Finance:** As the incumbent senator, Marshall has access to a substantial war chest and national Republican fundraising apparatus. Specific 2026 cycle totals should be checked at [FEC.gov](https://www.fec.gov/da — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-02249: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-02996: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-jason-hart-00021: Source: https://www.fec.gov/data/candidate/S6KS00304/ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-jason-hart-00409: FEC Page:** [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-00664: Sandy Spidel Neumann (D) - [FEC ID: S6KS00262](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01103: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01104: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01105: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01363: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01940: [FEC - Kansans for Marshall](https://www.fec.gov/data/committee/C00576173/?cycle=2026) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-02681: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-00391: [Patrick Schmidt - Kansas Legislature](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01132: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01133: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01134: [Patrick Schmidt Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01376: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jason-hart-01938: [Marshall Senate Website](https://www.marshall.senate.gov/about/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
