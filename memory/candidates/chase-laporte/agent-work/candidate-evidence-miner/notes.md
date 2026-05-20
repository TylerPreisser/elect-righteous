# Notes — candidate-evidence-miner — chase-laporte — 2026-05-20

## Summary
- Files read: 16
- Raw rows extracted: 8166
- Caveat/conflict/source-limitation rows: 54
- Internal-memory rows without URL: 6614

## Files Read
- memory/candidates/chase-laporte/in-their-own-words.md
- memory/candidates/chase-laporte/raw-dump-v2.md
- memory/candidates/chase-laporte/raw-dump.md
- memory/candidates/chase-laporte/site-profile.md
- memory/candidates/chase-laporte/sleuth-pass.md
- memory/candidates/chase-laporte/social-harvest.md
- memory/candidates/chase-laporte/v2-issues.yaml
- memory/elections/2026-11-03-us-senate-kansas.md
- reports/2026-kansas-us-senate-race-investigation.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/roger-marshall-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/chase-laporte.ts

## Issue Coverage
- 1. Abortion / life: 78 rows
- 2. LGBT / gender / parental rights: 11 rows
- 3. Education / curriculum / schools: 169 rows
- 4. Religious liberty / church / civic morality: 144 rows
- 5. Taxes / spending / debt: 92 rows
- 6. Economy / jobs / labor: 108 rows
- 7. Guns / Second Amendment: 27 rows
- 8. Immigration / border: 80 rows
- 9. Health care / insurance / Medicaid: 249 rows
- 10. Election integrity / voting / courts: 1094 rows
- 11. Public safety / law enforcement / criminal justice: 276 rows
- 12. Agriculture / rural economy / water: 196 rows
- 13. Local governance / transparency / ethics: 1744 rows
- 14. Environment / energy / land use: 26 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
