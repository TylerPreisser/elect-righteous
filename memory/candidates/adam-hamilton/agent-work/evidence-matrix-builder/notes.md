# Notes — evidence-matrix-builder — adam-hamilton — 2026-05-20

## Summary
- Raw rows read: 426
- Final deduplicated rows written: 157
- Duplicate rows absorbed: 269
- Rejected rows retained in final matrix: 39
- Use-with-caveat rows: 4
- Source-only rows: 2
- Rows without issue mapping: 97

## Final Use Decisions
```json
{
  "use": 1,
  "use-with-caveat": 4,
  "source-only": 2,
  "background-only": 111,
  "reject": 39
}
```

## Final Confidence
```json
{
  "confirmed": 1,
  "weak-signal": 16,
  "likely": 2,
  "unknown": 138
}
```

## Source Tiers
```json
{
  "primary": 1,
  "social": 16,
  "secondary": 2,
  "internal-memory": 138
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 0    |
| 2     | LGBT / gender / parental rights                    | 0    |
| 3     | Education / curriculum / schools                   | 0    |
| 4     | Religious liberty / church / civic morality        | 6    |
| 5     | Taxes / spending / debt                            | 3    |
| 6     | Economy / jobs / labor                             | 0    |
| 7     | Guns / Second Amendment                            | 0    |
| 8     | Immigration / border                               | 0    |
| 9     | Health care / insurance / Medicaid                 | 5    |
| 10    | Election integrity / voting / courts               | 32   |
| 11    | Public safety / law enforcement / criminal justice | 1    |
| 12    | Agriculture / rural economy / water                | 7    |
| 13    | Local governance / transparency / ethics           | 50   |
| 14    | Environment / energy / land use                    | 3    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 4 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-adam-hamilton-00013: Where they stand on big issues: Hamilton's campaign says he is focused on listening to Kansans, addressing high costs for food, energy, and health care, building bridges across party lines, and restoring decency and shar — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-adam-hamilton-00005: This artifact was created because the candidate-completeness audit found Adam Hamilton in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-adam-hamilton-00012: Ballot / filing status: Hamilton's campaign site presents him as a U.S. Senate candidate, and FEC candidate data identifies him as a Democratic candidate for Kansas Senate. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-adam-hamilton-00014: Donor / funding information: Hamilton's campaign site links ActBlue donation flows. This pass did not capture a processed FEC financial summary for the committee. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-adam-hamilton-00009: Election grouping: us-senate-2026 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00008: Position: U.S. Senate candidate, Kansas — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00024: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00026: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00010: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00048: "id": "s-campaign-home", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00059: "id": "i-ballot-status", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00067: "id": "a-campaign-launch", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00073: "id": "i-campaign-themes", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00106: "Roger Marshall faces a crowded field of Democratic challengers plus Republican-side filing activity in one of Kansas's highest-profile races.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-adam-hamilton-00128: "If you live in Hays, this is your U.S. House race. Tracey Mann is the incumbent, and Colin McRoberts, Lauren Reinhold, Craig Musser, and Steven Robert Jacob have all appeared in the contest to represent western and cent — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-adam-hamilton-00055: "id": "s-fec-candidate", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00070: "id": "a-fec-record", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00078: "id": "i-donor-funding", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00081: "id": "a-actblue-donation-flow", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00015: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00058: "issues": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00063: "sourceIds": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-adam-hamilton-00072: "socialSignals": [] — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
