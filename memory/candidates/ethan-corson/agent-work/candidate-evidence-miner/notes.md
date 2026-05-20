# Notes — candidate-evidence-miner — ethan-corson — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 11399
- Caveat/conflict/source-limitation rows: 87
- Internal-memory rows without URL: 8819

## Files Read
- memory/candidates/ethan-corson/in-their-own-words.md
- memory/candidates/ethan-corson/raw-dump-v2.md
- memory/candidates/ethan-corson/raw-dump.md
- memory/candidates/ethan-corson/site-profile.md
- memory/candidates/ethan-corson/sleuth-pass.md
- memory/candidates/ethan-corson/social-harvest.md
- memory/candidates/ethan-corson/v2-issues.yaml
- memory/elections/2026-11-03-kansas-governor.md
- reports/faith-church-investigation-2026-03-31.md
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/plain-english-voter-guide.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/ethan-corson.ts

## Issue Coverage
- 1. Abortion / life: 72 rows
- 2. LGBT / gender / parental rights: 44 rows
- 3. Education / curriculum / schools: 296 rows
- 4. Religious liberty / church / civic morality: 394 rows
- 5. Taxes / spending / debt: 123 rows
- 6. Economy / jobs / labor: 116 rows
- 7. Guns / Second Amendment: 21 rows
- 8. Immigration / border: 29 rows
- 9. Health care / insurance / Medicaid: 189 rows
- 10. Election integrity / voting / courts: 1218 rows
- 11. Public safety / law enforcement / criminal justice: 140 rows
- 12. Agriculture / rural economy / water: 187 rows
- 13. Local governance / transparency / ethics: 1569 rows
- 14. Environment / energy / land use: 30 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
