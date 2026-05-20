# Notes — candidate-evidence-miner — rebecca-herzog — 2026-05-20

## Summary
- Files read: 14
- Raw rows extracted: 4389
- Caveat/conflict/source-limitation rows: 107
- Internal-memory rows without URL: 3635

## Files Read
- memory/candidates/rebecca-herzog/in-their-own-words.md
- memory/candidates/rebecca-herzog/raw-dump-v2.md
- memory/candidates/rebecca-herzog/raw-dump.md
- memory/candidates/rebecca-herzog/site-profile.md
- memory/candidates/rebecca-herzog/sleuth-pass.md
- memory/candidates/rebecca-herzog/social-harvest.md
- memory/candidates/rebecca-herzog/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/rebecca-herzog.ts

## Issue Coverage
- 1. Abortion / life: 13 rows
- 2. LGBT / gender / parental rights: 8 rows
- 3. Education / curriculum / schools: 179 rows
- 4. Religious liberty / church / civic morality: 382 rows
- 5. Taxes / spending / debt: 163 rows
- 6. Economy / jobs / labor: 33 rows
- 7. Guns / Second Amendment: 7 rows
- 8. Immigration / border: 36 rows
- 9. Health care / insurance / Medicaid: 54 rows
- 10. Election integrity / voting / courts: 699 rows
- 11. Public safety / law enforcement / criminal justice: 250 rows
- 12. Agriculture / rural economy / water: 63 rows
- 13. Local governance / transparency / ethics: 1490 rows
- 14. Environment / energy / land use: 11 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
