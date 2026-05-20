# Notes — candidate-evidence-miner — craig-pallister — 2026-05-20

## Summary
- Files read: 14
- Raw rows extracted: 3558
- Caveat/conflict/source-limitation rows: 85
- Internal-memory rows without URL: 2937

## Files Read
- memory/candidates/craig-pallister/in-their-own-words.md
- memory/candidates/craig-pallister/raw-dump-v2.md
- memory/candidates/craig-pallister/raw-dump.md
- memory/candidates/craig-pallister/site-profile.md
- memory/candidates/craig-pallister/sleuth-pass.md
- memory/candidates/craig-pallister/social-harvest.md
- memory/candidates/craig-pallister/v2-issues.yaml
- reports/2026-03-30-education-elections-hays-ks.md
- reports/faith-church-investigation-2026-03-31.md
- reports/ken-brooks-complete-dossier.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/craig-pallister.ts

## Issue Coverage
- 1. Abortion / life: 11 rows
- 2. LGBT / gender / parental rights: 47 rows
- 3. Education / curriculum / schools: 712 rows
- 4. Religious liberty / church / civic morality: 347 rows
- 5. Taxes / spending / debt: 94 rows
- 6. Economy / jobs / labor: 16 rows
- 7. Guns / Second Amendment: 5 rows
- 8. Immigration / border: 9 rows
- 9. Health care / insurance / Medicaid: 50 rows
- 10. Election integrity / voting / courts: 501 rows
- 11. Public safety / law enforcement / criminal justice: 179 rows
- 12. Agriculture / rural economy / water: 29 rows
- 13. Local governance / transparency / ethics: 932 rows
- 14. Environment / energy / land use: 3 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
