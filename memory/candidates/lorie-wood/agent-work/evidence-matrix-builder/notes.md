# Notes — evidence-matrix-builder — lorie-wood — 2026-05-20

## Summary
- Raw rows read: 507
- Final deduplicated rows written: 184
- Duplicate rows absorbed: 323
- Rejected rows retained in final matrix: 31
- Use-with-caveat rows: 6
- Source-only rows: 1
- Rows without issue mapping: 109

## Final Use Decisions
```json
{
  "use": 3,
  "use-with-caveat": 6,
  "source-only": 1,
  "background-only": 143,
  "reject": 31
}
```

## Final Confidence
```json
{
  "confirmed": 3,
  "likely": 2,
  "weak-signal": 20,
  "unknown": 159
}
```

## Source Tiers
```json
{
  "primary": 3,
  "secondary": 2,
  "social": 20,
  "internal-memory": 159
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 1    |
| 2     | LGBT / gender / parental rights                    | 0    |
| 3     | Education / curriculum / schools                   | 22   |
| 4     | Religious liberty / church / civic morality        | 5    |
| 5     | Taxes / spending / debt                            | 2    |
| 6     | Economy / jobs / labor                             | 3    |
| 7     | Guns / Second Amendment                            | 1    |
| 8     | Immigration / border                               | 1    |
| 9     | Health care / insurance / Medicaid                 | 2    |
| 10    | Election integrity / voting / courts               | 30   |
| 11    | Public safety / law enforcement / criminal justice | 1    |
| 12    | Agriculture / rural economy / water                | 5    |
| 13    | Local governance / transparency / ethics           | 67   |
| 14    | Environment / energy / land use                    | 1    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 6 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-lorie-wood-00012: Ballot / filing status: KPDC lists Lorie Wood in the State Board of Education District 5 finance index; this pass did not verify a final certified candidate list. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-lorie-wood-00088: National and foreign-policy posts appear in a smaller part of the feed. A March 8 YouTube description said, "We have a President who promised to end foreign wars on day one, and now he’s launching another one. At the sam — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-lorie-wood-00013: Where they stand on big issues: No candidate-controlled issue platform was found in the reviewed public record for this pass. The page therefore does not infer positions from party label, name appearance, faith affiliati — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-lorie-wood-00086: Murray's candidate-controlled accounts point readers back to the same campaign network: the campaign website links to Facebook, Instagram, YouTube, and X, while YouTube descriptions repeatedly list ErikForKansas.com and  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-lorie-wood-00005: This artifact was created because the candidate-completeness audit found Lorie Wood in an official filing, FEC, KPDC, or current election source that was not yet represented as an individual v2 candidate page. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-lorie-wood-00014: Donor / funding information: Campaign-finance information is limited to the public filing or committee-account record captured in this pass. Donor-by-donor interpretation is not inferred beyond the public report. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-lorie-wood-00089: Local-district engagement centers on Kansas City, Kansas, Wyandotte County, Sumner Academy, and the Indian Springs Mall redevelopment record. In a March 12 campaign press release on the Chiefs stadium negotiations, Murra — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-lorie-wood-00008: Position: Kansas State Board of Education District 5 campaign-finance account holder — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00009: Election grouping: sboe-district-5 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00085: Across 17 captured substantive candidate-controlled items, Murray's feed most often returns to local investment, housing, small business, affordability, and economic development: 6 items, or 35 percent of the set ([harve — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-lorie-wood-00003: Agent: codex candidate-completeness generator — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00024: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00026: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00043: "id": "s-kpdc-sboe-index", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00140: "The State Board of Education helps decide statewide standards, curriculum fights, accreditation, and major school policy. District 5 includes Hays and much of western Kansas. The site now separates current-officeholder  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-lorie-wood-00010: Incumbent: no — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00051: "id": "i-ballot-status", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00084: narrative: *A summary of what Erik Murray has publicly said, posted, and amplified across social media. Drawn from public posts on YouTube, Facebook, Instagram, X, and campaign-published updates between February 22, 2026 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-lorie-wood-00091: Murray maintains public campaign presences on Facebook, Instagram, YouTube, and X; his LinkedIn profile was visible as an identity check ([harvest](social-harvest.md#presence-detector)). Facebook showed 2,168 likes and 2 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-lorie-wood-00048: "id": "s-kpdc-at", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00068: "id": "i-donor-funding", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00101: "narrative": "Public FEC summary data cited in the raw material showed Murray with $124,598.62 in receipts, $15,625.69 in disbursements, and $108,972.93 cash on hand through December 31, 2025. The same summary described  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-lorie-wood-00015: Source handling — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00050: "issues": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00055: "sourceIds": [ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-lorie-wood-00059: "id": "a-record-appearance", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
