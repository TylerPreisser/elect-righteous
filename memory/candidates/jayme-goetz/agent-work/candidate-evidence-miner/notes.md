# Notes — candidate-evidence-miner — jayme-goetz — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 3876
- Caveat/conflict/source-limitation rows: 82
- Internal-memory rows without URL: 3217

## Files Read
- memory/candidates/jayme-goetz/in-their-own-words.md
- memory/candidates/jayme-goetz/raw-dump-v2.md
- memory/candidates/jayme-goetz/raw-dump.md
- memory/candidates/jayme-goetz/site-profile.md
- memory/candidates/jayme-goetz/sleuth-pass.md
- memory/candidates/jayme-goetz/social-harvest.md
- memory/candidates/jayme-goetz/v2-issues.yaml
- reports/2026-03-30-education-elections-hays-ks.md
- reports/faith-church-investigation-2026-03-31.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/jayme-goetz.ts

## Issue Coverage
- 1. Abortion / life: 12 rows
- 2. LGBT / gender / parental rights: 51 rows
- 3. Education / curriculum / schools: 708 rows
- 4. Religious liberty / church / civic morality: 338 rows
- 5. Taxes / spending / debt: 117 rows
- 6. Economy / jobs / labor: 18 rows
- 7. Guns / Second Amendment: 5 rows
- 8. Immigration / border: 10 rows
- 9. Health care / insurance / Medicaid: 37 rows
- 10. Election integrity / voting / courts: 487 rows
- 11. Public safety / law enforcement / criminal justice: 155 rows
- 12. Agriculture / rural economy / water: 28 rows
- 13. Local governance / transparency / ethics: 944 rows
- 14. Environment / energy / land use: 6 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
