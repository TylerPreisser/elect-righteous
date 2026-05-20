# Notes — candidate-evidence-miner — ruth-ruder — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 5236
- Caveat/conflict/source-limitation rows: 88
- Internal-memory rows without URL: 4471

## Files Read
- memory/candidates/ruth-ruder/in-their-own-words.md
- memory/candidates/ruth-ruder/raw-dump-v2.md
- memory/candidates/ruth-ruder/raw-dump.md
- memory/candidates/ruth-ruder/site-profile.md
- memory/candidates/ruth-ruder/sleuth-pass.md
- memory/candidates/ruth-ruder/v2-issues.yaml
- reports/2026-03-30-education-elections-hays-ks.md
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/ken-brooks-complete-dossier.md
- reports/mason-ruder-complete-dossier.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/ruth-ruder.ts

## Issue Coverage
- 1. Abortion / life: 11 rows
- 2. LGBT / gender / parental rights: 81 rows
- 3. Education / curriculum / schools: 731 rows
- 4. Religious liberty / church / civic morality: 367 rows
- 5. Taxes / spending / debt: 144 rows
- 6. Economy / jobs / labor: 61 rows
- 7. Guns / Second Amendment: 4 rows
- 8. Immigration / border: 23 rows
- 9. Health care / insurance / Medicaid: 50 rows
- 10. Election integrity / voting / courts: 689 rows
- 11. Public safety / law enforcement / criminal justice: 286 rows
- 12. Agriculture / rural economy / water: 44 rows
- 13. Local governance / transparency / ethics: 1479 rows
- 14. Environment / energy / land use: 17 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
