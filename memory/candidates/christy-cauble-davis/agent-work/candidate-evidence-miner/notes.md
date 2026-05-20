# Notes — candidate-evidence-miner — christy-cauble-davis — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 7666
- Caveat/conflict/source-limitation rows: 42
- Internal-memory rows without URL: 5933

## Files Read
- memory/candidates/christy-cauble-davis/in-their-own-words.md
- memory/candidates/christy-cauble-davis/raw-dump-v2.md
- memory/candidates/christy-cauble-davis/raw-dump.md
- memory/candidates/christy-cauble-davis/site-profile.md
- memory/candidates/christy-cauble-davis/sleuth-pass.md
- memory/candidates/christy-cauble-davis/social-harvest.md
- memory/candidates/christy-cauble-davis/v2-issues.yaml
- memory/elections/2026-11-03-us-senate-kansas.md
- reports/2026-kansas-us-senate-race-investigation.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/roger-marshall-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/christy-cauble-davis.ts

## Issue Coverage
- 1. Abortion / life: 74 rows
- 2. LGBT / gender / parental rights: 11 rows
- 3. Education / curriculum / schools: 163 rows
- 4. Religious liberty / church / civic morality: 122 rows
- 5. Taxes / spending / debt: 53 rows
- 6. Economy / jobs / labor: 90 rows
- 7. Guns / Second Amendment: 27 rows
- 8. Immigration / border: 130 rows
- 9. Health care / insurance / Medicaid: 237 rows
- 10. Election integrity / voting / courts: 977 rows
- 11. Public safety / law enforcement / criminal justice: 234 rows
- 12. Agriculture / rural economy / water: 288 rows
- 13. Local governance / transparency / ethics: 1398 rows
- 14. Environment / energy / land use: 12 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
