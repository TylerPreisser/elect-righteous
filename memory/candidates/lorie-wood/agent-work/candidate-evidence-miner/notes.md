# Notes — candidate-evidence-miner — lorie-wood — 2026-05-20

## Summary
- Files read: 8
- Raw rows extracted: 507
- Caveat/conflict/source-limitation rows: 0
- Internal-memory rows without URL: 464

## Files Read
- memory/candidates/lorie-wood/in-their-own-words.md
- memory/candidates/lorie-wood/raw-dump-v2.md
- memory/candidates/lorie-wood/sleuth-pass.md
- memory/candidates/lorie-wood/social-harvest.md
- memory/candidates/lorie-wood/v2-issues.yaml
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/lorie-wood.ts

## Issue Coverage
- 1. Abortion / life: 1 rows
- 2. LGBT / gender / parental rights: 0 rows
- 3. Education / curriculum / schools: 57 rows
- 4. Religious liberty / church / civic morality: 9 rows
- 5. Taxes / spending / debt: 2 rows
- 6. Economy / jobs / labor: 3 rows
- 7. Guns / Second Amendment: 1 rows
- 8. Immigration / border: 1 rows
- 9. Health care / insurance / Medicaid: 2 rows
- 10. Election integrity / voting / courts: 63 rows
- 11. Public safety / law enforcement / criminal justice: 4 rows
- 12. Agriculture / rural economy / water: 5 rows
- 13. Local governance / transparency / ethics: 145 rows
- 14. Environment / energy / land use: 1 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
