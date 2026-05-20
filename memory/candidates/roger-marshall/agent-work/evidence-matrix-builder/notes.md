# Notes — evidence-matrix-builder — roger-marshall — 2026-05-20

## Summary
- Raw rows read: 10037
- Final deduplicated rows written: 6188
- Duplicate rows absorbed: 3849
- Rejected rows retained in final matrix: 1082
- Use-with-caveat rows: 140
- Source-only rows: 202
- Rows without issue mapping: 2193

## Final Use Decisions
```json
{
  "use": 371,
  "use-with-caveat": 140,
  "source-only": 202,
  "background-only": 4393,
  "reject": 1082
}
```

## Final Confidence
```json
{
  "confirmed": 136,
  "likely": 1230,
  "weak-signal": 265,
  "unknown": 4550,
  "contradicted": 7
}
```

## Source Tiers
```json
{
  "primary": 374,
  "secondary": 1069,
  "internal-memory": 4480,
  "social": 265
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 141  |
| 2     | LGBT / gender / parental rights                    | 32   |
| 3     | Education / curriculum / schools                   | 325  |
| 4     | Religious liberty / church / civic morality        | 357  |
| 5     | Taxes / spending / debt                            | 238  |
| 6     | Economy / jobs / labor                             | 247  |
| 7     | Guns / Second Amendment                            | 77   |
| 8     | Immigration / border                               | 597  |
| 9     | Health care / insurance / Medicaid                 | 827  |
| 10    | Election integrity / voting / courts               | 1498 |
| 11    | Public safety / law enforcement / criminal justice | 282  |
| 12    | Agriculture / rural economy / water                | 297  |
| 13    | Local governance / transparency / ethics           | 1937 |
| 14    | Environment / energy / land use                    | 52   |

## Conflict / Caveat Review
- 7 rows are marked contradicted and must not be asserted without explicit caveat.
- 140 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-roger-marshall-02408: Church**: Married at St. Michael's Episcopal Church, Kansas City, KS. Reported attendance at Open Door Baptist Church, Kansas City, KS (as of 2018; current status unverified). — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-01223: IMPORTANT CAVEAT:** Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-02940: FEC Filing Status**: Campaign active; specific FEC candidate ID not confirmed in search results. Committee details available at [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/202 — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-03575: The confrontation:** Constituents immediately began peppering Marshall with angry questions about DOGE cuts, the Ukraine conflict, hollowing of federal agencies, and rural healthcare. The crowd booed and shouted. — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-00078: Finding:** Saline County's unofficial candidate PDF updated 2026-05-12 lists Roger Marshall (R) under United States Senate, 1 senator, 6-year term. Because the PDF is marked unofficial and county-level, it should corrobo — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-00080: Tier:** Primary/local government, unofficial list — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-02979: FEC committee details not confirmed via search results. Check [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/) for most current filings. — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-03357: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-05317: County filing-list corroboration:** Saline County's "2026 Candidate Filings - UNOFFICIAL" PDF updated 2026-05-12 lists "Roger Marshall (R)" under United States Senate, 1 senator, 6-year term. This is county-level and mar — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-05541: title: "2026 Saline County Candidate Filings - Unofficial" — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-05543: "The county-level unofficial list updated 2026-05-12 lists Roger Marshall (R) under United States Senate" — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-06164: "text": "Marshall's official site and social materials include Kansas visits and\ncounty-tour messaging. The most documented conflict in the reviewed\nrecord is the March 2025 Oakley town hall, where a candidate-controll — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-roger-marshall-00003: Across the [28-item captured sample](social-harvest.md), Marshall’s largest category is healthcare and mental health, with 7 items, or 25 percent of the harvest; agriculture, food, and rural producers follow with 6 items — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-roger-marshall-05452: 2026-05-08** — Mental health: "Kansans take pride in serving others first, but sometimes care isn’t available when they finally need it for themselves." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-roger-marshall-00004: Marshall’s public alignment network is concentrated around President Trump, Senate Republicans, Kansas agriculture groups, and selected bipartisan health or food-policy partners. In the [captured sample](social-harvest.m — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-roger-marshall-00007: For Kansas-specific engagement, Marshall’s official feed and Senate site include rural healthcare, small business tax policy, agriculture, cattle, school milk, fertilizer, and in-person stops across the state. On April 2 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-roger-marshall-00008: Across the captured period the feed contains no visible original posts about the Ogallala Aquifer, water rights, foster care, adoption, Medicaid expansion, local county election administration, or prescription opioid res — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-roger-marshall-05423: 2026-01-14** — "Whole milk is back!" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-roger-marshall-05424: Capture source: [WIBW article embedding the post](https://www.wibw.com/2026/01/14/president-trump-signs-senator-marshalls-bill-allowing-schools-serve-whole-milk/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-roger-marshall-05428: 2026-01-14 Whole Milk post:** Tagged President Trump indirectly through the post text and was framed around a bill led with Sen. Peter Welch in official and news coverage. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-roger-marshall-05326: Sources: https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-votes-against-gun-grabbing-scheme/ and https://www.marshall.senate.gov/newsroom/press-releases/senators-introduce-legislation-to-allow-interst — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-roger-marshall-05318: Source: https://www.salinecountyks.gov/media/Election%20Office/election/PR2026%20Candidates.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-roger-marshall-05335: Source: https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-supports-secure-the-border-act/ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-roger-marshall-05329: Source: https://www.marshall.senate.gov/newsroom/press-releases/senators-marshall-whitehouse-introduce-bill-to-fix-medicare-advantage-for-seniors/ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-roger-marshall-05333: Source: https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-recognizes-national-mental-health-awareness-month/ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-roger-marshall-00107: Source: https://www.fec.gov/data/candidate/S0KS00315/?cycle=2026&election_full=true — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-roger-marshall-02468: [ACLU: Court's Ruling Holding Kobach in Contempt](https://www.aclu.org/news/voting-rights/courts-ruling-holding-kobach-contempt-well-deserved) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-02551: [Kansas Reflector: Kelly v. Kobach](https://kansasreflector.com/2026/03/27/kansas-governor-attorney-general-both-declare-victory-in-supreme-court-decision-on-executive-power/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-02638: [ProPublica: Kris Kobach's Lucrative Trail of Courtroom Defeats](https://www.propublica.org/article/kris-kobachs-lucrative-trail-of-courtroom-defeats) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-04243: [Ballotpedia: Chase LaPorte](https://ballotpedia.org/Chase_LaPorte) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-04244: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-05314: Source: https://sos.ks.gov/elections/important-election-dates.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-roger-marshall-05518: url: "https://www.fec.gov/data/candidate/S0KS00315/?cycle=2026&election_full=true" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-roger-marshall-00383: FEC Page:** [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-00638: Sandy Spidel Neumann (D) - [FEC ID: S6KS00262](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-00991: [Barb Wasinger Official Site](https://barbforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-02365: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-02366: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-03147: [FEC - Tracey Mann Candidate Page](https://www.fec.gov/data/candidate/H0KS01123/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-roger-marshall-03371: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
