# Notes — candidate-evidence-miner — toby-dougherty — 2026-05-20

## Summary
- Files read: 14
- Raw rows extracted: 9033
- Caveat/conflict/source-limitation rows: 119
- Internal-memory rows without URL: 7301

## Files Read
- memory/candidates/toby-dougherty/in-their-own-words.md
- memory/candidates/toby-dougherty/raw-dump-v2.md
- memory/candidates/toby-dougherty/raw-dump.md
- memory/candidates/toby-dougherty/site-profile.md
- memory/candidates/toby-dougherty/sleuth-pass.md
- memory/candidates/toby-dougherty/social-harvest.md
- memory/candidates/toby-dougherty/v2-issues.yaml
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-city-commission-deep-investigation-2026-03-30.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/toby-dougherty.ts

## Issue Coverage
- 1. Abortion / life: 21 rows
- 2. LGBT / gender / parental rights: 8 rows
- 3. Education / curriculum / schools: 189 rows
- 4. Religious liberty / church / civic morality: 447 rows
- 5. Taxes / spending / debt: 230 rows
- 6. Economy / jobs / labor: 98 rows
- 7. Guns / Second Amendment: 8 rows
- 8. Immigration / border: 25 rows
- 9. Health care / insurance / Medicaid: 81 rows
- 10. Election integrity / voting / courts: 702 rows
- 11. Public safety / law enforcement / criminal justice: 312 rows
- 12. Agriculture / rural economy / water: 423 rows
- 13. Local governance / transparency / ethics: 1792 rows
- 14. Environment / energy / land use: 44 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
