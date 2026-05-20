# Notes — candidate-evidence-miner — doug-billings — 2026-05-20

## Summary
- Files read: 9
- Raw rows extracted: 544
- Caveat/conflict/source-limitation rows: 3
- Internal-memory rows without URL: 518

## Files Read
- memory/candidates/doug-billings/in-their-own-words.md
- memory/candidates/doug-billings/raw-dump-v2.md
- memory/candidates/doug-billings/sleuth-pass.md
- memory/candidates/doug-billings/social-harvest.md
- memory/candidates/doug-billings/v2-issues.yaml
- reports/jeff-colyer-complete-dossier.md
- reports/vicki-schmidt-complete-dossier.md
- ui/src/data/elections.ts
- ui/src/data/v2/doug-billings.ts

## Issue Coverage
- 1. Abortion / life: 9 rows
- 2. LGBT / gender / parental rights: 0 rows
- 3. Education / curriculum / schools: 11 rows
- 4. Religious liberty / church / civic morality: 3 rows
- 5. Taxes / spending / debt: 14 rows
- 6. Economy / jobs / labor: 2 rows
- 7. Guns / Second Amendment: 8 rows
- 8. Immigration / border: 0 rows
- 9. Health care / insurance / Medicaid: 3 rows
- 10. Election integrity / voting / courts: 107 rows
- 11. Public safety / law enforcement / criminal justice: 4 rows
- 12. Agriculture / rural economy / water: 0 rows
- 13. Local governance / transparency / ethics: 150 rows
- 14. Environment / energy / land use: 1 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
