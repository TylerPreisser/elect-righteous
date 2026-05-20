# Notes — candidate-evidence-miner — david-vilaysing — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 4832
- Caveat/conflict/source-limitation rows: 160
- Internal-memory rows without URL: 3998

## Files Read
- memory/candidates/david-vilaysing/in-their-own-words.md
- memory/candidates/david-vilaysing/raw-dump-v2.md
- memory/candidates/david-vilaysing/raw-dump.md
- memory/candidates/david-vilaysing/site-profile.md
- memory/candidates/david-vilaysing/sleuth-pass.md
- memory/candidates/david-vilaysing/social-harvest.md
- memory/candidates/david-vilaysing/v2-issues.yaml
- memory/elections/2027-NO-ELECTION-hays-city-commission.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-city-commission-deep-investigation-2026-03-30.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/david-vilaysing.ts

## Issue Coverage
- 1. Abortion / life: 6 rows
- 2. LGBT / gender / parental rights: 5 rows
- 3. Education / curriculum / schools: 239 rows
- 4. Religious liberty / church / civic morality: 404 rows
- 5. Taxes / spending / debt: 143 rows
- 6. Economy / jobs / labor: 80 rows
- 7. Guns / Second Amendment: 0 rows
- 8. Immigration / border: 14 rows
- 9. Health care / insurance / Medicaid: 64 rows
- 10. Election integrity / voting / courts: 601 rows
- 11. Public safety / law enforcement / criminal justice: 271 rows
- 12. Agriculture / rural economy / water: 180 rows
- 13. Local governance / transparency / ethics: 1375 rows
- 14. Environment / energy / land use: 17 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
