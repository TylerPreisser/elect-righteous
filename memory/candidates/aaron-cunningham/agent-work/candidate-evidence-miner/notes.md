# Notes — candidate-evidence-miner — aaron-cunningham — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 10962
- Caveat/conflict/source-limitation rows: 109
- Internal-memory rows without URL: 8646

## Files Read
- memory/candidates/aaron-cunningham/in-their-own-words.md
- memory/candidates/aaron-cunningham/profile.md
- memory/candidates/aaron-cunningham/raw-dump-v2.md
- memory/candidates/aaron-cunningham/raw-dump.md
- memory/candidates/aaron-cunningham/site-profile.md
- memory/candidates/aaron-cunningham/sleuth-pass.md
- memory/candidates/aaron-cunningham/social-harvest.md
- memory/candidates/aaron-cunningham/v2-issues.yaml
- reports/ellis-county-elected-officials-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/senate-challengers-local-officials-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/aaron-cunningham.ts

## Issue Coverage
- 1. Abortion / life: 11 rows
- 2. LGBT / gender / parental rights: 6 rows
- 3. Education / curriculum / schools: 242 rows
- 4. Religious liberty / church / civic morality: 489 rows
- 5. Taxes / spending / debt: 112 rows
- 6. Economy / jobs / labor: 55 rows
- 7. Guns / Second Amendment: 5 rows
- 8. Immigration / border: 38 rows
- 9. Health care / insurance / Medicaid: 89 rows
- 10. Election integrity / voting / courts: 951 rows
- 11. Public safety / law enforcement / criminal justice: 510 rows
- 12. Agriculture / rural economy / water: 143 rows
- 13. Local governance / transparency / ethics: 1920 rows
- 14. Environment / energy / land use: 14 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
