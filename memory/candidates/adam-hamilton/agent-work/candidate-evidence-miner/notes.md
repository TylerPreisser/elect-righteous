# Notes — candidate-evidence-miner — adam-hamilton — 2026-05-20

## Summary
- Files read: 7
- Raw rows extracted: 426
- Caveat/conflict/source-limitation rows: 1
- Internal-memory rows without URL: 404

## Files Read
- memory/candidates/adam-hamilton/in-their-own-words.md
- memory/candidates/adam-hamilton/raw-dump-v2.md
- memory/candidates/adam-hamilton/sleuth-pass.md
- memory/candidates/adam-hamilton/social-harvest.md
- memory/candidates/adam-hamilton/v2-issues.yaml
- ui/src/data/elections.ts
- ui/src/data/v2/adam-hamilton.ts

## Issue Coverage
- 1. Abortion / life: 0 rows
- 2. LGBT / gender / parental rights: 0 rows
- 3. Education / curriculum / schools: 0 rows
- 4. Religious liberty / church / civic morality: 11 rows
- 5. Taxes / spending / debt: 3 rows
- 6. Economy / jobs / labor: 0 rows
- 7. Guns / Second Amendment: 0 rows
- 8. Immigration / border: 0 rows
- 9. Health care / insurance / Medicaid: 9 rows
- 10. Election integrity / voting / courts: 85 rows
- 11. Public safety / law enforcement / criminal justice: 1 rows
- 12. Agriculture / rural economy / water: 11 rows
- 13. Local governance / transparency / ethics: 126 rows
- 14. Environment / energy / land use: 7 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
