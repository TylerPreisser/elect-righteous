# Notes — candidate-evidence-miner — bobbi-dreiling — 2026-05-20

## Summary
- Files read: 14
- Raw rows extracted: 8655
- Caveat/conflict/source-limitation rows: 111
- Internal-memory rows without URL: 6961

## Files Read
- memory/candidates/bobbi-dreiling/in-their-own-words.md
- memory/candidates/bobbi-dreiling/raw-dump-v2.md
- memory/candidates/bobbi-dreiling/raw-dump.md
- memory/candidates/bobbi-dreiling/site-profile.md
- memory/candidates/bobbi-dreiling/sleuth-pass.md
- memory/candidates/bobbi-dreiling/social-harvest.md
- memory/candidates/bobbi-dreiling/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/bobbi-dreiling.ts

## Issue Coverage
- 1. Abortion / life: 33 rows
- 2. LGBT / gender / parental rights: 26 rows
- 3. Education / curriculum / schools: 256 rows
- 4. Religious liberty / church / civic morality: 512 rows
- 5. Taxes / spending / debt: 167 rows
- 6. Economy / jobs / labor: 84 rows
- 7. Guns / Second Amendment: 20 rows
- 8. Immigration / border: 61 rows
- 9. Health care / insurance / Medicaid: 100 rows
- 10. Election integrity / voting / courts: 1009 rows
- 11. Public safety / law enforcement / criminal justice: 312 rows
- 12. Agriculture / rural economy / water: 134 rows
- 13. Local governance / transparency / ethics: 1932 rows
- 14. Environment / energy / land use: 19 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
