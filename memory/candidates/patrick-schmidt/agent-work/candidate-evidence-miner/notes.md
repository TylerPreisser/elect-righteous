# Notes — candidate-evidence-miner — patrick-schmidt — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 9914
- Caveat/conflict/source-limitation rows: 50
- Internal-memory rows without URL: 7826

## Files Read
- memory/candidates/patrick-schmidt/in-their-own-words.md
- memory/candidates/patrick-schmidt/raw-dump-v2.md
- memory/candidates/patrick-schmidt/raw-dump.md
- memory/candidates/patrick-schmidt/site-profile.md
- memory/candidates/patrick-schmidt/sleuth-pass.md
- memory/candidates/patrick-schmidt/social-harvest.md
- memory/candidates/patrick-schmidt/v2-issues.yaml
- reports/2026-kansas-us-senate-race-investigation.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/roger-marshall-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- reports/ty-masterson-complete-dossier.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/patrick-schmidt.ts

## Issue Coverage
- 1. Abortion / life: 90 rows
- 2. LGBT / gender / parental rights: 11 rows
- 3. Education / curriculum / schools: 140 rows
- 4. Religious liberty / church / civic morality: 116 rows
- 5. Taxes / spending / debt: 207 rows
- 6. Economy / jobs / labor: 119 rows
- 7. Guns / Second Amendment: 33 rows
- 8. Immigration / border: 96 rows
- 9. Health care / insurance / Medicaid: 300 rows
- 10. Election integrity / voting / courts: 1257 rows
- 11. Public safety / law enforcement / criminal justice: 403 rows
- 12. Agriculture / rural economy / water: 155 rows
- 13. Local governance / transparency / ethics: 1530 rows
- 14. Environment / energy / land use: 15 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
