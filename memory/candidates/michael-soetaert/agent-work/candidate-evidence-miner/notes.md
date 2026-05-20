# Notes — candidate-evidence-miner — michael-soetaert — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 9840
- Caveat/conflict/source-limitation rows: 50
- Internal-memory rows without URL: 7818

## Files Read
- memory/candidates/michael-soetaert/in-their-own-words.md
- memory/candidates/michael-soetaert/raw-dump-v2.md
- memory/candidates/michael-soetaert/raw-dump.md
- memory/candidates/michael-soetaert/site-profile.md
- memory/candidates/michael-soetaert/sleuth-pass.md
- memory/candidates/michael-soetaert/social-harvest.md
- memory/candidates/michael-soetaert/v2-issues.yaml
- reports/2026-kansas-us-senate-race-investigation.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/roger-marshall-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/michael-soetaert.ts

## Issue Coverage
- 1. Abortion / life: 133 rows
- 2. LGBT / gender / parental rights: 48 rows
- 3. Education / curriculum / schools: 138 rows
- 4. Religious liberty / church / civic morality: 144 rows
- 5. Taxes / spending / debt: 73 rows
- 6. Economy / jobs / labor: 82 rows
- 7. Guns / Second Amendment: 32 rows
- 8. Immigration / border: 90 rows
- 9. Health care / insurance / Medicaid: 258 rows
- 10. Election integrity / voting / courts: 1296 rows
- 11. Public safety / law enforcement / criminal justice: 365 rows
- 12. Agriculture / rural economy / water: 178 rows
- 13. Local governance / transparency / ethics: 1918 rows
- 14. Environment / energy / land use: 28 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
