# Notes — candidate-evidence-miner — cathy-hopkins — 2026-05-20

## Summary
- Files read: 9
- Raw rows extracted: 2045
- Caveat/conflict/source-limitation rows: 18
- Internal-memory rows without URL: 1946

## Files Read
- memory/candidates/cathy-hopkins/raw-dump-v2.md
- memory/candidates/cathy-hopkins/sleuth-pass.md
- memory/candidates/cathy-hopkins/v2-issues.yaml
- memory/elections/2026-11-03-kansas-sboe-district-5.md
- memory/elections/2026-11-03-ks-statewide-offices.md
- reports/2026-03-30-education-elections-hays-ks.md
- reports/plain-english-voter-guide.md
- ui/src/data/elections.ts
- ui/src/data/v2/cathy-hopkins.ts

## Issue Coverage
- 1. Abortion / life: 1 rows
- 2. LGBT / gender / parental rights: 1 rows
- 3. Education / curriculum / schools: 251 rows
- 4. Religious liberty / church / civic morality: 7 rows
- 5. Taxes / spending / debt: 13 rows
- 6. Economy / jobs / labor: 18 rows
- 7. Guns / Second Amendment: 1 rows
- 8. Immigration / border: 0 rows
- 9. Health care / insurance / Medicaid: 6 rows
- 10. Election integrity / voting / courts: 213 rows
- 11. Public safety / law enforcement / criminal justice: 23 rows
- 12. Agriculture / rural economy / water: 5 rows
- 13. Local governance / transparency / ethics: 653 rows
- 14. Environment / energy / land use: 6 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
