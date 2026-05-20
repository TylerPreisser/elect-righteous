# Notes — candidate-evidence-miner — erik-murray — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 8716
- Caveat/conflict/source-limitation rows: 42
- Internal-memory rows without URL: 7086

## Files Read
- memory/candidates/erik-murray/in-their-own-words.md
- memory/candidates/erik-murray/raw-dump-v2.md
- memory/candidates/erik-murray/raw-dump.md
- memory/candidates/erik-murray/site-profile.md
- memory/candidates/erik-murray/sleuth-pass.md
- memory/candidates/erik-murray/social-harvest.md
- memory/candidates/erik-murray/v2-issues.yaml
- memory/elections/2026-11-03-us-senate-kansas.md
- reports/2026-kansas-us-senate-race-investigation.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/roger-marshall-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/erik-murray.ts

## Issue Coverage
- 1. Abortion / life: 77 rows
- 2. LGBT / gender / parental rights: 13 rows
- 3. Education / curriculum / schools: 195 rows
- 4. Religious liberty / church / civic morality: 140 rows
- 5. Taxes / spending / debt: 121 rows
- 6. Economy / jobs / labor: 150 rows
- 7. Guns / Second Amendment: 45 rows
- 8. Immigration / border: 142 rows
- 9. Health care / insurance / Medicaid: 264 rows
- 10. Election integrity / voting / courts: 1197 rows
- 11. Public safety / law enforcement / criminal justice: 379 rows
- 12. Agriculture / rural economy / water: 176 rows
- 13. Local governance / transparency / ethics: 1609 rows
- 14. Environment / energy / land use: 45 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
