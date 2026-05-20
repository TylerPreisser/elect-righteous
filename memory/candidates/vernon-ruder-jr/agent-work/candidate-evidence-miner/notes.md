# Notes — candidate-evidence-miner — vernon-ruder-jr — 2026-05-20

## Summary
- Files read: 16
- Raw rows extracted: 5657
- Caveat/conflict/source-limitation rows: 165
- Internal-memory rows without URL: 4701

## Files Read
- memory/candidates/vernon-ruder-jr/in-their-own-words.md
- memory/candidates/vernon-ruder-jr/raw-dump-v2.md
- memory/candidates/vernon-ruder-jr/raw-dump.md
- memory/candidates/vernon-ruder-jr/site-profile.md
- memory/candidates/vernon-ruder-jr/sleuth-pass.md
- memory/candidates/vernon-ruder-jr/social-harvest.md
- memory/candidates/vernon-ruder-jr/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/mason-ruder-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/vernon-ruder-jr.ts

## Issue Coverage
- 1. Abortion / life: 10 rows
- 2. LGBT / gender / parental rights: 16 rows
- 3. Education / curriculum / schools: 449 rows
- 4. Religious liberty / church / civic morality: 460 rows
- 5. Taxes / spending / debt: 339 rows
- 6. Economy / jobs / labor: 63 rows
- 7. Guns / Second Amendment: 2 rows
- 8. Immigration / border: 34 rows
- 9. Health care / insurance / Medicaid: 76 rows
- 10. Election integrity / voting / courts: 905 rows
- 11. Public safety / law enforcement / criminal justice: 365 rows
- 12. Agriculture / rural economy / water: 75 rows
- 13. Local governance / transparency / ethics: 1778 rows
- 14. Environment / energy / land use: 9 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
