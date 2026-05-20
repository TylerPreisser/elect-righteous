# Notes — evidence-matrix-builder — steven-jacob — 2026-05-20

## Summary
- Raw rows read: 362
- Final deduplicated rows written: 143
- Duplicate rows absorbed: 219
- Rejected rows retained in final matrix: 37
- Use-with-caveat rows: 4
- Source-only rows: 0
- Rows without issue mapping: 98

## Final Use Decisions
```json
{
  "use": 1,
  "use-with-caveat": 4,
  "background-only": 101,
  "reject": 37
}
```

## Final Confidence
```json
{
  "confirmed": 1,
  "weak-signal": 16,
  "unknown": 126
}
```

## Source Tiers
```json
{
  "primary": 1,
  "social": 16,
  "internal-memory": 126
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 0    |
| 2     | LGBT / gender / parental rights                    | 0    |
| 3     | Education / curriculum / schools                   | 0    |
| 4     | Religious liberty / church / civic morality        | 4    |
| 5     | Taxes / spending / debt                            | 1    |
| 6     | Economy / jobs / labor                             | 0    |
| 7     | Guns / Second Amendment                            | 0    |
| 8     | Immigration / border                               | 0    |
| 9     | Health care / insurance / Medicaid                 | 0    |
| 10    | Election integrity / voting / courts               | 26   |
| 11    | Public safety / law enforcement / criminal justice | 0    |
| 12    | Agriculture / rural economy / water                | 2    |
| 13    | Local governance / transparency / ethics           | 39   |
| 14    | Environment / energy / land use                    | 0    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 4 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-steven-jacob-00013: Where they stand on big issues: No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliati — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-steven-jacob-00005: This artifact was created because the candidate-completeness audit found Steven Robert Jacob in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-steven-jacob-00012: Ballot / filing status: Steven Robert Jacob appears in the reviewed official or campaign-finance records connected to U.S. House candidate, Kansas 1st District. This profile does not treat that appearance as a final cert — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-steven-jacob-00014: Donor / funding information: Campaign-finance information is limited to the public filing or committee-account record captured in this pass. Donor-by-donor interpretation is not inferred beyond the public report. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-steven-jacob-00009: Election grouping: ks-01-house-2026 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00008: Position: U.S. House candidate, Kansas 1st District — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00024: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00026: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00010: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00049: "id": "i-ballot-status", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00044: "id": "s-fec-candidate", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00065: "id": "i-donor-funding", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00015: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00048: "issues": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00053: "sourceIds": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00056: "id": "a-record-appearance", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00059: "socialSignals": [] — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00060: "id": "i-public-issue-record", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00063: "id": "a-platform-gap", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00068: "id": "a-finance-record", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-steven-jacob-00086: "tracey-mann", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-jacob-00087: "colin-mcroberts", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-steven-jacob-00088: "lauren-reinhold", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
