# Notes — evidence-matrix-builder — ric-koehn — 2026-05-20

## Summary
- Raw rows read: 404
- Final deduplicated rows written: 139
- Duplicate rows absorbed: 265
- Rejected rows retained in final matrix: 23
- Use-with-caveat rows: 4
- Source-only rows: 0
- Rows without issue mapping: 80

## Final Use Decisions
```json
{
  "use": 1,
  "use-with-caveat": 4,
  "background-only": 111,
  "reject": 23
}
```

## Final Confidence
```json
{
  "confirmed": 1,
  "weak-signal": 16,
  "unknown": 122
}
```

## Source Tiers
```json
{
  "primary": 1,
  "social": 16,
  "internal-memory": 122
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 1    |
| 2     | LGBT / gender / parental rights                    | 0    |
| 3     | Education / curriculum / schools                   | 5    |
| 4     | Religious liberty / church / civic morality        | 4    |
| 5     | Taxes / spending / debt                            | 3    |
| 6     | Economy / jobs / labor                             | 1    |
| 7     | Guns / Second Amendment                            | 1    |
| 8     | Immigration / border                               | 0    |
| 9     | Health care / insurance / Medicaid                 | 18   |
| 10    | Election integrity / voting / courts               | 31   |
| 11    | Public safety / law enforcement / criminal justice | 3    |
| 12    | Agriculture / rural economy / water                | 2    |
| 13    | Local governance / transparency / ethics           | 48   |
| 14    | Environment / energy / land use                    | 0    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 4 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-ric-koehn-00013: Where they stand on big issues: No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliati — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ric-koehn-00012: Ballot / filing status: KPDC lists Ric Koehn under Insurance Commissioner candidates; this pass did not verify a current Secretary-of-State filing-row entry or candidate-controlled platform. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ric-koehn-00005: This artifact was created because the candidate-completeness audit found Ric Koehn in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ric-koehn-00014: Donor / funding information: Campaign-finance information is limited to the public filing or committee-account record captured in this pass. Donor-by-donor interpretation is not inferred beyond the public report. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-ric-koehn-00008: Position: Kansas Insurance Commissioner campaign-finance account holder — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00009: Election grouping: kansas-insurance-2026 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00024: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00026: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00107: "House District 111 is one of the most directly local state races for Hays-area voters. Barb Wasinger is the incumbent, and this race affects the laws and budget choices that hit closest to home.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ric-koehn-00010: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00051: "id": "i-ballot-status", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00106: "Barb Wasinger currently anchors the House District 111 race on the site as the district's incumbent representative.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ric-koehn-00043: "id": "s-kpdc-statewide", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00048: "id": "s-kpdc-at", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00068: "id": "i-donor-funding", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00015: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00050: "issues": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00055: "sourceIds": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00059: "id": "a-record-appearance", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00062: "socialSignals": [] — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00063: "id": "i-public-issue-record", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00066: "id": "a-platform-gap", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ric-koehn-00071: "id": "a-finance-record", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
