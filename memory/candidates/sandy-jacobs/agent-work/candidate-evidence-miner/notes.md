# Notes — candidate-evidence-miner — sandy-jacobs — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 12375
- Caveat/conflict/source-limitation rows: 111
- Internal-memory rows without URL: 9785

## Files Read
- memory/candidates/sandy-jacobs/in-their-own-words.md
- memory/candidates/sandy-jacobs/raw-dump-v2.md
- memory/candidates/sandy-jacobs/raw-dump.md
- memory/candidates/sandy-jacobs/site-profile.md
- memory/candidates/sandy-jacobs/sleuth-pass.md
- memory/candidates/sandy-jacobs/social-harvest.md
- memory/candidates/sandy-jacobs/v2-issues.yaml
- memory/elections/2027-NO-ELECTION-hays-city-commission.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-city-commission-deep-investigation-2026-03-30.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/sandy-jacobs.ts

## Issue Coverage
- 1. Abortion / life: 17 rows
- 2. LGBT / gender / parental rights: 8 rows
- 3. Education / curriculum / schools: 199 rows
- 4. Religious liberty / church / civic morality: 449 rows
- 5. Taxes / spending / debt: 216 rows
- 6. Economy / jobs / labor: 91 rows
- 7. Guns / Second Amendment: 9 rows
- 8. Immigration / border: 23 rows
- 9. Health care / insurance / Medicaid: 92 rows
- 10. Election integrity / voting / courts: 733 rows
- 11. Public safety / law enforcement / criminal justice: 259 rows
- 12. Agriculture / rural economy / water: 279 rows
- 13. Local governance / transparency / ethics: 1981 rows
- 14. Environment / energy / land use: 22 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
