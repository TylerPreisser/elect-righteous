# Notes — evidence-matrix-builder — doug-billings — 2026-05-20

## Summary
- Raw rows read: 544
- Final deduplicated rows written: 226
- Duplicate rows absorbed: 318
- Rejected rows retained in final matrix: 58
- Use-with-caveat rows: 4
- Source-only rows: 2
- Rows without issue mapping: 141

## Final Use Decisions
```json
{
  "use": 1,
  "use-with-caveat": 4,
  "source-only": 2,
  "background-only": 161,
  "reject": 58
}
```

## Final Confidence
```json
{
  "confirmed": 1,
  "weak-signal": 16,
  "likely": 2,
  "unknown": 207
}
```

## Source Tiers
```json
{
  "primary": 1,
  "social": 16,
  "secondary": 2,
  "internal-memory": 207
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 5    |
| 2     | LGBT / gender / parental rights                    | 0    |
| 3     | Education / curriculum / schools                   | 6    |
| 4     | Religious liberty / church / civic morality        | 2    |
| 5     | Taxes / spending / debt                            | 8    |
| 6     | Economy / jobs / labor                             | 2    |
| 7     | Guns / Second Amendment                            | 4    |
| 8     | Immigration / border                               | 0    |
| 9     | Health care / insurance / Medicaid                 | 3    |
| 10    | Election integrity / voting / courts               | 52   |
| 11    | Public safety / law enforcement / criminal justice | 3    |
| 12    | Agriculture / rural economy / water                | 0    |
| 13    | Local governance / transparency / ethics           | 71   |
| 14    | Environment / energy / land use                    | 1    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 4 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-doug-billings-00013: Where they stand on big issues: Billings's campaign materials and reporting describe a conservative/MAGA platform including state sovereignty, government efficiency, tax and regulation cuts, pro-life and Second Amendment — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-doug-billings-00005: This artifact was created because the candidate-completeness audit found Doug Billings in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-doug-billings-00012: Ballot / filing status: Billings has campaign and KPDC account evidence connected to the 2026 governor race, but reporting says he was removed from the Secretary of State candidate list after a running-mate dispute. Trea — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-doug-billings-00014: Donor / funding information: KPDC records provide a finance-report path for Billings, and reporting separately describes disputed accusations about a contribution; the candidate denied wrongdoing. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-doug-billings-00009: Election grouping: kansas-governor-2026 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00008: Position: Kansas Governor candidate / campaign-finance account holder — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00024: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00026: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00120: | Joy Eakins | Former Wichita school board member | | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-doug-billings-00156: | Maggie's List | National women's organization | "Principles of fiscal responsibility, limited government, and strong national security." Endorsed Schmidt over three other Republican women in the race (Eakins, O'Hara, R — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-doug-billings-00121: | Stacy Rogers | Business owner | | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-doug-billings-00116: | Vicki Schmidt | Insurance Commissioner | Anchors campaign on record of service | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-doug-billings-00010: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00054: "id": "s-campaign-home", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00060: "id": "s-kctv-filed", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00068: "id": "i-ballot-status", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00087: "id": "i-campaign-platform", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00092: "id": "a-campaign-platform", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00114: | Scott Schwab | Secretary of State | Pushed back against election conspiracy theories | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-doug-billings-00118: | Philip Sarnecki | Financial services executive | First-time candidate; attacked career politicians | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-doug-billings-00152: Result: The debate produced no breakout moments for any candidate, suggesting Schmidt lost little by skipping it — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-doug-billings-00047: "id": "s-kpdc-statewide", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-doug-billings-00076: "id": "a-kpdc-account", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
