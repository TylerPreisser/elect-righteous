# Notes — evidence-matrix-builder — steven-johnson — 2026-05-20

## Summary
- Raw rows read: 509
- Final deduplicated rows written: 240
- Duplicate rows absorbed: 269
- Rejected rows retained in final matrix: 42
- Use-with-caveat rows: 4
- Source-only rows: 5
- Rows without issue mapping: 130

## Final Use Decisions
```json
{
  "use": 7,
  "use-with-caveat": 4,
  "source-only": 5,
  "background-only": 182,
  "reject": 42
}
```

## Final Confidence
```json
{
  "confirmed": 2,
  "likely": 10,
  "weak-signal": 16,
  "unknown": 212
}
```

## Source Tiers
```json
{
  "primary": 2,
  "secondary": 10,
  "social": 16,
  "internal-memory": 212
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 0    |
| 2     | LGBT / gender / parental rights                    | 0    |
| 3     | Education / curriculum / schools                   | 2    |
| 4     | Religious liberty / church / civic morality        | 4    |
| 5     | Taxes / spending / debt                            | 2    |
| 6     | Economy / jobs / labor                             | 1    |
| 7     | Guns / Second Amendment                            | 0    |
| 8     | Immigration / border                               | 0    |
| 9     | Health care / insurance / Medicaid                 | 10   |
| 10    | Election integrity / voting / courts               | 78   |
| 11    | Public safety / law enforcement / criminal justice | 5    |
| 12    | Agriculture / rural economy / water                | 2    |
| 13    | Local governance / transparency / ethics           | 91   |
| 14    | Environment / energy / land use                    | 0    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 4 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-steven-johnson-00013: Where they stand on big issues: No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliati — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-steven-johnson-00005: This artifact was created because the candidate-completeness audit found Steven Johnson in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-steven-johnson-00012: Ballot / filing status: Steven Johnson appears in the reviewed official or campaign-finance records connected to Kansas State Treasurer candidate. This profile does not treat that appearance as a final certified ballot u — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-steven-johnson-00014: Donor / funding information: KPDC reports for Johnson include a 202601 receipts-and-expenditures filing. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-steven-johnson-00009: Election grouping: kansas-treasurer-2026 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00008: Position: Kansas State Treasurer candidate — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00024: Incumbent: yes — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00026: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00127: Insurance Commissioner (Vicki Schmidt, R — Daniel Hawkins (R) and Dinah Sykes (D) announced) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00169: | Insurance Commissioner | Vicki Schmidt | R | Running for Governor | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00171: Republican primary: Jeff Colyer (former Gov.), Ty Masterson (Senate President), Vicki Schmidt (Insurance Comm.), Scott Schwab (Sec. of State), Charlotte O'Hara (Johnson Co. Commissioner) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00212: "The open-seat insurance commissioner race currently includes Daniel Hawkins and Dinah Sykes in filing rows, plus Ric Koehn in KPDC campaign-finance records.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00213: "Kansas elects its insurance commissioner, and this office touches rates, claims, consumer complaints, and company oversight. Daniel Hawkins and Dinah Sykes are confirmed in the statewide filing mirror; Ric Koehn is incl — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00010: Incumbent: yes — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00045: "id": "s-state-filing", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00059: "id": "i-ballot-status", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00136: Incumbent: Kris Kobach (R) — since 2023 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00140: Incumbent: Scott Schwab (R) — since 2019 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00143: Incumbent: Steven Johnson (R) — since 2023 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-johnson-00146: Incumbent: Vicki Schmidt (R) — since 2023 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00151: Incumbent: Cathy Hopkins (R) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00166: | Secretary of State | Scott Schwab | R | Running for Governor | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-johnson-00167: | Attorney General | Kris Kobach | R | TBD | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
