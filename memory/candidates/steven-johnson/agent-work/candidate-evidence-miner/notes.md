# Notes — candidate-evidence-miner — steven-johnson — 2026-05-20

## Summary
- Files read: 11
- Raw rows extracted: 509
- Caveat/conflict/source-limitation rows: 0
- Internal-memory rows without URL: 476

## Files Read
- memory/candidates/steven-johnson/in-their-own-words.md
- memory/candidates/steven-johnson/raw-dump-v2.md
- memory/candidates/steven-johnson/sleuth-pass.md
- memory/candidates/steven-johnson/social-harvest.md
- memory/candidates/steven-johnson/v2-issues.yaml
- memory/elections/2026-11-03-kansas-treasurer.md
- memory/elections/2026-11-03-ks-governor.md
- memory/elections/2026-11-03-ks-statewide-offices.md
- reports/hays-kansas-election-finder-2026-03-30.md
- ui/src/data/elections.ts
- ui/src/data/v2/steven-johnson.ts

## Issue Coverage
- 1. Abortion / life: 0 rows
- 2. LGBT / gender / parental rights: 0 rows
- 3. Education / curriculum / schools: 2 rows
- 4. Religious liberty / church / civic morality: 8 rows
- 5. Taxes / spending / debt: 2 rows
- 6. Economy / jobs / labor: 1 rows
- 7. Guns / Second Amendment: 0 rows
- 8. Immigration / border: 0 rows
- 9. Health care / insurance / Medicaid: 10 rows
- 10. Election integrity / voting / courts: 133 rows
- 11. Public safety / law enforcement / criminal justice: 8 rows
- 12. Agriculture / rural economy / water: 2 rows
- 13. Local governance / transparency / ethics: 162 rows
- 14. Environment / energy / land use: 0 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
