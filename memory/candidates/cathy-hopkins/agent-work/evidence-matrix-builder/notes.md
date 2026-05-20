# Notes — evidence-matrix-builder — cathy-hopkins — 2026-05-20

## Summary
- Raw rows read: 2045
- Final deduplicated rows written: 948
- Duplicate rows absorbed: 1097
- Rejected rows retained in final matrix: 158
- Use-with-caveat rows: 0
- Source-only rows: 2
- Rows without issue mapping: 399

## Final Use Decisions
```json
{
  "use": 17,
  "source-only": 2,
  "background-only": 771,
  "reject": 158
}
```

## Final Confidence
```json
{
  "confirmed": 10,
  "likely": 13,
  "unknown": 925
}
```

## Source Tiers
```json
{
  "primary": 10,
  "secondary": 13,
  "internal-memory": 925
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 1    |
| 2     | LGBT / gender / parental rights                    | 1    |
| 3     | Education / curriculum / schools                   | 173  |
| 4     | Religious liberty / church / civic morality        | 6    |
| 5     | Taxes / spending / debt                            | 13   |
| 6     | Economy / jobs / labor                             | 15   |
| 7     | Guns / Second Amendment                            | 1    |
| 8     | Immigration / border                               | 0    |
| 9     | Health care / insurance / Medicaid                 | 4    |
| 10    | Election integrity / voting / courts               | 199  |
| 11    | Public safety / law enforcement / criminal justice | 10   |
| 12    | Agriculture / rural economy / water                | 5    |
| 13    | Local governance / transparency / ethics           | 464  |
| 14    | Environment / energy / land use                    | 6    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 0 rows require caveat language if used downstream.

## Representative Caveated Rows

## Representative Rejected Rows
- em-cathy-hopkins-00018: URL: https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Feature-Story/ArtMID/6201/ArticleID/4005/Kansas-State-Board-of-Education-receives-update-on-structured-literacy-licensure-requirements — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00035: URL: https://www.sos.ks.gov/elections/candidate-information.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00045: URL: https://sos.ks.gov/elections/22elec/2022-Primary-Official-Vote-Totals.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00049: URL: https://www.kansas.gov/ethics/CFAScanned/EdOdd/2022ElecCycle/202207/BOE05CH_amend2207.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00006: Position: Kansas State Board of Education, District 5 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00019: Publisher: Kansas State Department of Education — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00089: Issue mapping: literacy; teacher training; academic outcomes. — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00122: Issue mapping: public-school funding; school choice/voucher-adjacent policy; legislative liaison role. — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00127: Issue mapping: public-school funding; legislative priorities. — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00133: Issue mapping: teacher workforce; school employee benefits. — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00143: Issue mapping: special education / student services; local district administration. — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00150: Issue mapping: dated candidate questionnaire; local control; curriculum; parental authority; school safety; health mandates; faith self-description. — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00197: Issue mapping: local control; student cellphone/screen-time policy. — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00436: "KPDC index links Michelle Cunningham AT form for State Board of Education District 5" — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cathy-hopkins-00589: "id": "public-school-funding-school-choice", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00598: "id": "teacher-workforce-licensure-benefits", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00609: "id": "action-professional-standards-teacher-vacancy", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00613: "id": "student-services-special-education-administration", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cathy-hopkins-00627: "Lorie Wood - AT form lists State Board of Education District 5" — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cathy-hopkins-00749: Ellis County falls within Kansas State Board of Education District 5, which covers the entire western third of Kansas (40+ counties including Ellis, Russell, Trego, Rooks, Graham, Norton, Phillips, Smith, Jewell, Republi — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
