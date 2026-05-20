# Notes — candidate-evidence-miner — alaina-cunningham — 2026-05-20

## Summary
- Files read: 16
- Raw rows extracted: 9899
- Caveat/conflict/source-limitation rows: 122
- Internal-memory rows without URL: 7700

## Files Read
- memory/candidates/alaina-cunningham/in-their-own-words.md
- memory/candidates/alaina-cunningham/raw-dump-v2.md
- memory/candidates/alaina-cunningham/raw-dump.md
- memory/candidates/alaina-cunningham/site-profile.md
- memory/candidates/alaina-cunningham/sleuth-pass.md
- memory/candidates/alaina-cunningham/social-harvest.md
- memory/candidates/alaina-cunningham/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-city-commission-deep-investigation-2026-03-30.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/mason-ruder-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/alaina-cunningham.ts

## Issue Coverage
- 1. Abortion / life: 16 rows
- 2. LGBT / gender / parental rights: 7 rows
- 3. Education / curriculum / schools: 201 rows
- 4. Religious liberty / church / civic morality: 404 rows
- 5. Taxes / spending / debt: 217 rows
- 6. Economy / jobs / labor: 100 rows
- 7. Guns / Second Amendment: 10 rows
- 8. Immigration / border: 40 rows
- 9. Health care / insurance / Medicaid: 104 rows
- 10. Election integrity / voting / courts: 796 rows
- 11. Public safety / law enforcement / criminal justice: 342 rows
- 12. Agriculture / rural economy / water: 221 rows
- 13. Local governance / transparency / ethics: 1809 rows
- 14. Environment / energy / land use: 32 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
