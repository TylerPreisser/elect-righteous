# Notes — candidate-evidence-miner — michael-berges — 2026-05-20

## Summary
- Files read: 12
- Raw rows extracted: 3564
- Caveat/conflict/source-limitation rows: 49
- Internal-memory rows without URL: 3112

## Files Read
- memory/candidates/michael-berges/raw-dump-v2.md
- memory/candidates/michael-berges/sleuth-pass.md
- memory/candidates/michael-berges/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-city-commission-deep-investigation-2026-03-30.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/mason-ruder-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/michael-berges.ts

## Issue Coverage
- 1. Abortion / life: 4 rows
- 2. LGBT / gender / parental rights: 1 rows
- 3. Education / curriculum / schools: 36 rows
- 4. Religious liberty / church / civic morality: 153 rows
- 5. Taxes / spending / debt: 165 rows
- 6. Economy / jobs / labor: 40 rows
- 7. Guns / Second Amendment: 2 rows
- 8. Immigration / border: 4 rows
- 9. Health care / insurance / Medicaid: 19 rows
- 10. Election integrity / voting / courts: 486 rows
- 11. Public safety / law enforcement / criminal justice: 308 rows
- 12. Agriculture / rural economy / water: 24 rows
- 13. Local governance / transparency / ethics: 816 rows
- 14. Environment / energy / land use: 5 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
