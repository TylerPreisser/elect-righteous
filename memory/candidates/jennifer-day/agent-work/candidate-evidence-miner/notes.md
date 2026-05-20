# Notes — candidate-evidence-miner — jennifer-day — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 2339
- Caveat/conflict/source-limitation rows: 15
- Internal-memory rows without URL: 1992

## Files Read
- memory/candidates/jennifer-day/in-their-own-words.md
- memory/candidates/jennifer-day/raw-dump-v2.md
- memory/candidates/jennifer-day/raw-dump.md
- memory/candidates/jennifer-day/site-profile.md
- memory/candidates/jennifer-day/sleuth-pass.md
- memory/candidates/jennifer-day/social-harvest.md
- memory/candidates/jennifer-day/v2-issues.yaml
- memory/elections/2026-11-03-kansas-secretary-of-state.md
- reports/plain-english-voter-guide.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/jennifer-day.ts

## Issue Coverage
- 1. Abortion / life: 22 rows
- 2. LGBT / gender / parental rights: 15 rows
- 3. Education / curriculum / schools: 53 rows
- 4. Religious liberty / church / civic morality: 36 rows
- 5. Taxes / spending / debt: 38 rows
- 6. Economy / jobs / labor: 112 rows
- 7. Guns / Second Amendment: 51 rows
- 8. Immigration / border: 23 rows
- 9. Health care / insurance / Medicaid: 40 rows
- 10. Election integrity / voting / courts: 598 rows
- 11. Public safety / law enforcement / criminal justice: 105 rows
- 12. Agriculture / rural economy / water: 33 rows
- 13. Local governance / transparency / ethics: 625 rows
- 14. Environment / energy / land use: 7 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
