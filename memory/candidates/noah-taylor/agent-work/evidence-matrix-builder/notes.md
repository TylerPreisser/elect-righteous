# Notes — evidence-matrix-builder — noah-taylor — 2026-05-20

## Summary
- Raw rows read: 552
- Final deduplicated rows written: 311
- Duplicate rows absorbed: 241
- Rejected rows retained in final matrix: 83
- Use-with-caveat rows: 4
- Source-only rows: 0
- Rows without issue mapping: 103

## Final Use Decisions
```json
{
  "use": 19,
  "use-with-caveat": 4,
  "background-only": 205,
  "reject": 83
}
```

## Final Confidence
```json
{
  "confirmed": 2,
  "likely": 35,
  "weak-signal": 16,
  "unknown": 258
}
```

## Source Tiers
```json
{
  "primary": 2,
  "secondary": 35,
  "social": 16,
  "internal-memory": 258
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 1    |
| 2     | LGBT / gender / parental rights                    | 0    |
| 3     | Education / curriculum / schools                   | 1    |
| 4     | Religious liberty / church / civic morality        | 4    |
| 5     | Taxes / spending / debt                            | 4    |
| 6     | Economy / jobs / labor                             | 4    |
| 7     | Guns / Second Amendment                            | 0    |
| 8     | Immigration / border                               | 3    |
| 9     | Health care / insurance / Medicaid                 | 3    |
| 10    | Election integrity / voting / courts               | 180  |
| 11    | Public safety / law enforcement / criminal justice | 155  |
| 12    | Agriculture / rural economy / water                | 6    |
| 13    | Local governance / transparency / ethics           | 55   |
| 14    | Environment / energy / land use                    | 0    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 4 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-noah-taylor-00013: Where they stand on big issues: No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliati — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-noah-taylor-00005: This artifact was created because the candidate-completeness audit found Noah Taylor in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-noah-taylor-00012: Ballot / filing status: Noah Taylor appears in the reviewed official or campaign-finance records connected to U.S. Senate candidate, Kansas. This profile does not treat that appearance as a final certified ballot until t — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-noah-taylor-00014: Donor / funding information: FEC reports a processed 2026 first-quarter finance summary for Noah Taylor for Kansas. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-noah-taylor-00213: [Anne Parelkar Announcement (Aug 25, 2025)](https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00221: [KMAN Radio - Anne Parelkar Interview (Mar 2026)](https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00128: [Michael Soetaert - Ballotpedia](https://ballotpedia.org/Michael_Soetaert) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00211: [Erik Murray Profile (Mar 16, 2026)](https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00212: [Jason Hart Profile (Mar 23, 2026)](https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00214: [Christy Davis Profile (Aug 18, 2025)](https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00215: [Sandy Spidel Neumann Launch](https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00219: [KMUW - Jason Hart Profile (Mar 25, 2026)](https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00220: [WIBW - Patrick Schmidt Files (Feb 5, 2026)](https://www.wibw.com/2026/02/05/kansas-state-senator-files-us-senate/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00223: [Emporia Gazette - Christy Davis Announcement](https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00224: [Sunflower State Journal - Erik Murray Filing](https://sunflowerstatejournal.com/kck-developer-announces-for-u-s-senate-as-democratic-primary-grows-to-five/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00228: [Christy Davis for Kansas](https://www.christydavisforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00229: [Patrick Schmidt for US Senate](https://patrickforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00230: [Sandy Spidel Neumann for Kansas](https://sandyforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00231: [Anne Parelkar for Senate](https://www.anneforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00232: [Erik Murray for Kansas](https://erikforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00233: [Jason Hart for U.S. Senate](https://hartforsenate.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00234: [Michael Soetaert for Senate](https://mikeforkansas.my.canva.site/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-noah-taylor-00009: Election grouping: us-senate-2026 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-noah-taylor-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
