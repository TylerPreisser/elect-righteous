# Notes — candidate-evidence-miner — sandy-spidel-neumann — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 10110
- Caveat/conflict/source-limitation rows: 39
- Internal-memory rows without URL: 8067

## Files Read
- memory/candidates/sandy-spidel-neumann/in-their-own-words.md
- memory/candidates/sandy-spidel-neumann/raw-dump-v2.md
- memory/candidates/sandy-spidel-neumann/raw-dump.md
- memory/candidates/sandy-spidel-neumann/site-profile.md
- memory/candidates/sandy-spidel-neumann/sleuth-pass.md
- memory/candidates/sandy-spidel-neumann/social-harvest.md
- memory/candidates/sandy-spidel-neumann/v2-issues.yaml
- memory/elections/2026-11-03-us-senate-kansas.md
- reports/2026-kansas-us-senate-race-investigation.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/roger-marshall-complete-dossier.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/sandy-spidel-neumann.ts

## Issue Coverage
- 1. Abortion / life: 84 rows
- 2. LGBT / gender / parental rights: 11 rows
- 3. Education / curriculum / schools: 173 rows
- 4. Religious liberty / church / civic morality: 118 rows
- 5. Taxes / spending / debt: 91 rows
- 6. Economy / jobs / labor: 124 rows
- 7. Guns / Second Amendment: 38 rows
- 8. Immigration / border: 164 rows
- 9. Health care / insurance / Medicaid: 364 rows
- 10. Election integrity / voting / courts: 1301 rows
- 11. Public safety / law enforcement / criminal justice: 447 rows
- 12. Agriculture / rural economy / water: 178 rows
- 13. Local governance / transparency / ethics: 1634 rows
- 14. Environment / energy / land use: 54 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
