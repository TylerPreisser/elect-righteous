# Notes — candidate-evidence-miner — eric-lund — 2026-05-20

## Summary
- Files read: 7
- Raw rows extracted: 393
- Caveat/conflict/source-limitation rows: 2
- Internal-memory rows without URL: 373

## Files Read
- memory/candidates/eric-lund/in-their-own-words.md
- memory/candidates/eric-lund/raw-dump-v2.md
- memory/candidates/eric-lund/sleuth-pass.md
- memory/candidates/eric-lund/social-harvest.md
- memory/candidates/eric-lund/v2-issues.yaml
- ui/src/data/elections.ts
- ui/src/data/v2/eric-lund.ts

## Issue Coverage
- 1. Abortion / life: 0 rows
- 2. LGBT / gender / parental rights: 0 rows
- 3. Education / curriculum / schools: 1 rows
- 4. Religious liberty / church / civic morality: 8 rows
- 5. Taxes / spending / debt: 2 rows
- 6. Economy / jobs / labor: 1 rows
- 7. Guns / Second Amendment: 0 rows
- 8. Immigration / border: 0 rows
- 9. Health care / insurance / Medicaid: 6 rows
- 10. Election integrity / voting / courts: 67 rows
- 11. Public safety / law enforcement / criminal justice: 4 rows
- 12. Agriculture / rural economy / water: 2 rows
- 13. Local governance / transparency / ethics: 117 rows
- 14. Environment / energy / land use: 0 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
