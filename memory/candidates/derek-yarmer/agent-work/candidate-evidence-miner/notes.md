# Notes — candidate-evidence-miner — derek-yarmer — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 3836
- Caveat/conflict/source-limitation rows: 75
- Internal-memory rows without URL: 3230

## Files Read
- memory/candidates/derek-yarmer/in-their-own-words.md
- memory/candidates/derek-yarmer/raw-dump-v2.md
- memory/candidates/derek-yarmer/raw-dump.md
- memory/candidates/derek-yarmer/site-profile.md
- memory/candidates/derek-yarmer/sleuth-pass.md
- memory/candidates/derek-yarmer/social-harvest.md
- memory/candidates/derek-yarmer/v2-issues.yaml
- reports/2026-03-30-education-elections-hays-ks.md
- reports/faith-church-investigation-2026-03-31.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/derek-yarmer.ts

## Issue Coverage
- 1. Abortion / life: 9 rows
- 2. LGBT / gender / parental rights: 50 rows
- 3. Education / curriculum / schools: 626 rows
- 4. Religious liberty / church / civic morality: 345 rows
- 5. Taxes / spending / debt: 139 rows
- 6. Economy / jobs / labor: 18 rows
- 7. Guns / Second Amendment: 2 rows
- 8. Immigration / border: 9 rows
- 9. Health care / insurance / Medicaid: 94 rows
- 10. Election integrity / voting / courts: 436 rows
- 11. Public safety / law enforcement / criminal justice: 148 rows
- 12. Agriculture / rural economy / water: 28 rows
- 13. Local governance / transparency / ethics: 982 rows
- 14. Environment / energy / land use: 1 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
