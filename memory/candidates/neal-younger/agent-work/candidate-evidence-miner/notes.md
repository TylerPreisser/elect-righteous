# Notes — candidate-evidence-miner — neal-younger — 2026-05-20

## Summary
- Files read: 14
- Raw rows extracted: 8482
- Caveat/conflict/source-limitation rows: 142
- Internal-memory rows without URL: 7082

## Files Read
- memory/candidates/neal-younger/in-their-own-words.md
- memory/candidates/neal-younger/raw-dump-v2.md
- memory/candidates/neal-younger/raw-dump.md
- memory/candidates/neal-younger/site-profile.md
- memory/candidates/neal-younger/sleuth-pass.md
- memory/candidates/neal-younger/social-harvest.md
- memory/candidates/neal-younger/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/neal-younger.ts

## Issue Coverage
- 1. Abortion / life: 20 rows
- 2. LGBT / gender / parental rights: 19 rows
- 3. Education / curriculum / schools: 207 rows
- 4. Religious liberty / church / civic morality: 429 rows
- 5. Taxes / spending / debt: 230 rows
- 6. Economy / jobs / labor: 71 rows
- 7. Guns / Second Amendment: 10 rows
- 8. Immigration / border: 48 rows
- 9. Health care / insurance / Medicaid: 160 rows
- 10. Election integrity / voting / courts: 830 rows
- 11. Public safety / law enforcement / criminal justice: 335 rows
- 12. Agriculture / rural economy / water: 185 rows
- 13. Local governance / transparency / ethics: 2109 rows
- 14. Environment / energy / land use: 30 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
