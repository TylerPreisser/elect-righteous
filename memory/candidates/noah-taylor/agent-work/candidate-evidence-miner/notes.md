# Notes — candidate-evidence-miner — noah-taylor — 2026-05-20

## Summary
- Files read: 8
- Raw rows extracted: 552
- Caveat/conflict/source-limitation rows: 2
- Internal-memory rows without URL: 497

## Files Read
- memory/candidates/noah-taylor/in-their-own-words.md
- memory/candidates/noah-taylor/raw-dump-v2.md
- memory/candidates/noah-taylor/sleuth-pass.md
- memory/candidates/noah-taylor/social-harvest.md
- memory/candidates/noah-taylor/v2-issues.yaml
- reports/2026-kansas-us-senate-race-investigation.md
- ui/src/data/elections.ts
- ui/src/data/v2/noah-taylor.ts

## Issue Coverage
- 1. Abortion / life: 1 rows
- 2. LGBT / gender / parental rights: 0 rows
- 3. Education / curriculum / schools: 1 rows
- 4. Religious liberty / church / civic morality: 8 rows
- 5. Taxes / spending / debt: 4 rows
- 6. Economy / jobs / labor: 4 rows
- 7. Guns / Second Amendment: 0 rows
- 8. Immigration / border: 3 rows
- 9. Health care / insurance / Medicaid: 3 rows
- 10. Election integrity / voting / courts: 218 rows
- 11. Public safety / law enforcement / criminal justice: 160 rows
- 12. Agriculture / rural economy / water: 6 rows
- 13. Local governance / transparency / ethics: 118 rows
- 14. Environment / energy / land use: 0 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
