# Notes — candidate-evidence-miner — shaun-musil — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 11948
- Caveat/conflict/source-limitation rows: 128
- Internal-memory rows without URL: 9319

## Files Read
- memory/candidates/shaun-musil/in-their-own-words.md
- memory/candidates/shaun-musil/raw-dump-v2.md
- memory/candidates/shaun-musil/raw-dump.md
- memory/candidates/shaun-musil/site-profile.md
- memory/candidates/shaun-musil/sleuth-pass.md
- memory/candidates/shaun-musil/social-harvest.md
- memory/candidates/shaun-musil/v2-issues.yaml
- memory/elections/2027-NO-ELECTION-hays-city-commission.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-city-commission-deep-investigation-2026-03-30.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/shaun-musil.ts

## Issue Coverage
- 1. Abortion / life: 10 rows
- 2. LGBT / gender / parental rights: 3 rows
- 3. Education / curriculum / schools: 180 rows
- 4. Religious liberty / church / civic morality: 441 rows
- 5. Taxes / spending / debt: 165 rows
- 6. Economy / jobs / labor: 161 rows
- 7. Guns / Second Amendment: 4 rows
- 8. Immigration / border: 18 rows
- 9. Health care / insurance / Medicaid: 101 rows
- 10. Election integrity / voting / courts: 675 rows
- 11. Public safety / law enforcement / criminal justice: 229 rows
- 12. Agriculture / rural economy / water: 250 rows
- 13. Local governance / transparency / ethics: 1649 rows
- 14. Environment / energy / land use: 32 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
