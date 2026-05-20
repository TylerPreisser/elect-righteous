# Notes — evidence-matrix-builder — kevin-latz — 2026-05-20

## Summary
- Raw rows read: 403
- Final deduplicated rows written: 150
- Duplicate rows absorbed: 253
- Rejected rows retained in final matrix: 39
- Use-with-caveat rows: 4
- Source-only rows: 1
- Rows without issue mapping: 102

## Final Use Decisions
```json
{
  "use": 1,
  "use-with-caveat": 4,
  "source-only": 1,
  "background-only": 105,
  "reject": 39
}
```

## Final Confidence
```json
{
  "confirmed": 2,
  "weak-signal": 16,
  "unknown": 132
}
```

## Source Tiers
```json
{
  "primary": 2,
  "social": 16,
  "internal-memory": 132
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 0    |
| 2     | LGBT / gender / parental rights                    | 0    |
| 3     | Education / curriculum / schools                   | 0    |
| 4     | Religious liberty / church / civic morality        | 4    |
| 5     | Taxes / spending / debt                            | 3    |
| 6     | Economy / jobs / labor                             | 0    |
| 7     | Guns / Second Amendment                            | 0    |
| 8     | Immigration / border                               | 0    |
| 9     | Health care / insurance / Medicaid                 | 2    |
| 10    | Election integrity / voting / courts               | 35   |
| 11    | Public safety / law enforcement / criminal justice | 1    |
| 12    | Agriculture / rural economy / water                | 4    |
| 13    | Local governance / transparency / ethics           | 41   |
| 14    | Environment / energy / land use                    | 0    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 4 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-kevin-latz-00013: Where they stand on big issues: No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliati — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kevin-latz-00005: This artifact was created because the candidate-completeness audit found Kevin Latz in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kevin-latz-00012: Ballot / filing status: Kevin Latz appears in the reviewed official or campaign-finance records connected to U.S. Senate candidate, Kansas. This profile does not treat that appearance as a final certified ballot until th — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kevin-latz-00014: Donor / funding information: Campaign-finance information is limited to the public filing or committee-account record captured in this pass. Donor-by-donor interpretation is not inferred beyond the public report. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-kevin-latz-00009: Election grouping: us-senate-2026 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00008: Position: U.S. Senate candidate, Kansas — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00024: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00026: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00010: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00043: "id": "s-ks-filing-senate", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00053: "id": "i-ballot-status", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00106: "Roger Marshall faces a crowded field of Democratic challengers plus Republican-side filing activity in one of Kansas's highest-profile races.", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kevin-latz-00123: "If you live in Hays, this is your U.S. House race. Tracey Mann is the incumbent, and Colin McRoberts, Lauren Reinhold, Craig Musser, and Steven Robert Jacob have all appeared in the contest to represent western and cent — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kevin-latz-00070: "id": "i-donor-funding", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00015: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00049: "id": "s-saline-unofficial-list", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00052: "issues": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00057: "sourceIds": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00061: "id": "a-record-appearance", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00064: "socialSignals": [] — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00065: "id": "i-public-issue-record", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00068: "id": "a-platform-gap", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kevin-latz-00073: "id": "a-finance-record", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
