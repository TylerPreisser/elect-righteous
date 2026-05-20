# Notes — candidate-evidence-miner — nathan-leiker — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 7792
- Caveat/conflict/source-limitation rows: 128
- Internal-memory rows without URL: 6388

## Files Read
- memory/candidates/nathan-leiker/in-their-own-words.md
- memory/candidates/nathan-leiker/raw-dump-v2.md
- memory/candidates/nathan-leiker/raw-dump.md
- memory/candidates/nathan-leiker/site-profile.md
- memory/candidates/nathan-leiker/sleuth-pass.md
- memory/candidates/nathan-leiker/social-harvest.md
- memory/candidates/nathan-leiker/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/nathan-leiker.ts

## Issue Coverage
- 1. Abortion / life: 26 rows
- 2. LGBT / gender / parental rights: 23 rows
- 3. Education / curriculum / schools: 194 rows
- 4. Religious liberty / church / civic morality: 446 rows
- 5. Taxes / spending / debt: 259 rows
- 6. Economy / jobs / labor: 85 rows
- 7. Guns / Second Amendment: 12 rows
- 8. Immigration / border: 52 rows
- 9. Health care / insurance / Medicaid: 141 rows
- 10. Election integrity / voting / courts: 653 rows
- 11. Public safety / law enforcement / criminal justice: 344 rows
- 12. Agriculture / rural economy / water: 193 rows
- 13. Local governance / transparency / ethics: 1799 rows
- 14. Environment / energy / land use: 48 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
