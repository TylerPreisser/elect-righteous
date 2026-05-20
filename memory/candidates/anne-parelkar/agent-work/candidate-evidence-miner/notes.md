# Notes — candidate-evidence-miner — anne-parelkar — 2026-05-20

## Summary
- Files read: 17
- Raw rows extracted: 9237
- Caveat/conflict/source-limitation rows: 44
- Internal-memory rows without URL: 7243

## Files Read
- memory/candidates/anne-parelkar/in-their-own-words.md
- memory/candidates/anne-parelkar/raw-dump-v2.md
- memory/candidates/anne-parelkar/raw-dump.md
- memory/candidates/anne-parelkar/site-profile.md
- memory/candidates/anne-parelkar/sleuth-pass.md
- memory/candidates/anne-parelkar/social-harvest.md
- memory/candidates/anne-parelkar/v2-issues.yaml
- memory/elections/2026-11-03-us-senate-kansas.md
- reports/2026-kansas-us-senate-race-investigation.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/plain-english-voter-guide.md
- reports/roger-marshall-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/anne-parelkar.ts

## Issue Coverage
- 1. Abortion / life: 81 rows
- 2. LGBT / gender / parental rights: 57 rows
- 3. Education / curriculum / schools: 204 rows
- 4. Religious liberty / church / civic morality: 150 rows
- 5. Taxes / spending / debt: 79 rows
- 6. Economy / jobs / labor: 128 rows
- 7. Guns / Second Amendment: 34 rows
- 8. Immigration / border: 281 rows
- 9. Health care / insurance / Medicaid: 307 rows
- 10. Election integrity / voting / courts: 1516 rows
- 11. Public safety / law enforcement / criminal justice: 403 rows
- 12. Agriculture / rural economy / water: 192 rows
- 13. Local governance / transparency / ethics: 1960 rows
- 14. Environment / energy / land use: 46 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
