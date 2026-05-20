# Notes — candidate-evidence-miner — mason-ruder — 2026-05-20

## Summary
- Files read: 19
- Raw rows extracted: 8062
- Caveat/conflict/source-limitation rows: 129
- Internal-memory rows without URL: 6500

## Files Read
- memory/candidates/mason-ruder/in-their-own-words.md
- memory/candidates/mason-ruder/profile.md
- memory/candidates/mason-ruder/raw-dump-v2.md
- memory/candidates/mason-ruder/raw-dump.md
- memory/candidates/mason-ruder/raw-intel.md
- memory/candidates/mason-ruder/site-profile.md
- memory/candidates/mason-ruder/sleuth-pass.md
- memory/candidates/mason-ruder/social-harvest.md
- memory/candidates/mason-ruder/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-city-commission-deep-investigation-2026-03-30.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/mason-ruder-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/mason-ruder.ts

## Issue Coverage
- 1. Abortion / life: 11 rows
- 2. LGBT / gender / parental rights: 18 rows
- 3. Education / curriculum / schools: 475 rows
- 4. Religious liberty / church / civic morality: 574 rows
- 5. Taxes / spending / debt: 239 rows
- 6. Economy / jobs / labor: 98 rows
- 7. Guns / Second Amendment: 3 rows
- 8. Immigration / border: 35 rows
- 9. Health care / insurance / Medicaid: 136 rows
- 10. Election integrity / voting / courts: 994 rows
- 11. Public safety / law enforcement / criminal justice: 477 rows
- 12. Agriculture / rural economy / water: 237 rows
- 13. Local governance / transparency / ethics: 2081 rows
- 14. Environment / energy / land use: 21 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
