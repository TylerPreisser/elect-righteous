# Notes — candidate-evidence-miner — scott-braun — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 5863
- Caveat/conflict/source-limitation rows: 88
- Internal-memory rows without URL: 4735

## Files Read
- memory/candidates/scott-braun/in-their-own-words.md
- memory/candidates/scott-braun/profile.md
- memory/candidates/scott-braun/raw-dump-v2.md
- memory/candidates/scott-braun/raw-dump.md
- memory/candidates/scott-braun/site-profile.md
- memory/candidates/scott-braun/sleuth-pass.md
- memory/candidates/scott-braun/social-harvest.md
- memory/candidates/scott-braun/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/scott-braun.ts

## Issue Coverage
- 1. Abortion / life: 9 rows
- 2. LGBT / gender / parental rights: 7 rows
- 3. Education / curriculum / schools: 163 rows
- 4. Religious liberty / church / civic morality: 336 rows
- 5. Taxes / spending / debt: 60 rows
- 6. Economy / jobs / labor: 30 rows
- 7. Guns / Second Amendment: 2 rows
- 8. Immigration / border: 144 rows
- 9. Health care / insurance / Medicaid: 117 rows
- 10. Election integrity / voting / courts: 597 rows
- 11. Public safety / law enforcement / criminal justice: 596 rows
- 12. Agriculture / rural economy / water: 59 rows
- 13. Local governance / transparency / ethics: 1398 rows
- 14. Environment / energy / land use: 25 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
