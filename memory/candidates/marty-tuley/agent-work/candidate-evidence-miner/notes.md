# Notes — candidate-evidence-miner — marty-tuley — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 6108
- Caveat/conflict/source-limitation rows: 21
- Internal-memory rows without URL: 4850

## Files Read
- memory/candidates/marty-tuley/in-their-own-words.md
- memory/candidates/marty-tuley/raw-dump-v2.md
- memory/candidates/marty-tuley/raw-dump.md
- memory/candidates/marty-tuley/site-profile.md
- memory/candidates/marty-tuley/sleuth-pass.md
- memory/candidates/marty-tuley/social-harvest.md
- memory/candidates/marty-tuley/v2-issues.yaml
- memory/elections/2026-11-03-kansas-governor.md
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/hays-kansas-election-finder-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/marty-tuley.ts

## Issue Coverage
- 1. Abortion / life: 23 rows
- 2. LGBT / gender / parental rights: 58 rows
- 3. Education / curriculum / schools: 188 rows
- 4. Religious liberty / church / civic morality: 83 rows
- 5. Taxes / spending / debt: 80 rows
- 6. Economy / jobs / labor: 100 rows
- 7. Guns / Second Amendment: 23 rows
- 8. Immigration / border: 30 rows
- 9. Health care / insurance / Medicaid: 171 rows
- 10. Election integrity / voting / courts: 906 rows
- 11. Public safety / law enforcement / criminal justice: 53 rows
- 12. Agriculture / rural economy / water: 123 rows
- 13. Local governance / transparency / ethics: 1206 rows
- 14. Environment / energy / land use: 58 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
