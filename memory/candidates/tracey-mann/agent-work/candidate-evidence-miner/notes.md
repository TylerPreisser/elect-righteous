# Notes — candidate-evidence-miner — tracey-mann — 2026-05-20

## Summary
- Files read: 17
- Raw rows extracted: 6113
- Caveat/conflict/source-limitation rows: 101
- Internal-memory rows without URL: 5108

## Files Read
- memory/candidates/tracey-mann/profile.md
- memory/candidates/tracey-mann/raw-dump-v2.md
- memory/candidates/tracey-mann/raw-dump.md
- memory/candidates/tracey-mann/site-profile.md
- memory/candidates/tracey-mann/sleuth-pass.md
- memory/candidates/tracey-mann/v2-issues.yaml
- memory/elections/2026-11-03-us-house-ks01.md
- reports/KS-01-2026-challengers-investigation.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/plain-english-voter-guide.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- reports/templates/site-profile-writer-brief.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/tracey-mann.ts

## Issue Coverage
- 1. Abortion / life: 51 rows
- 2. LGBT / gender / parental rights: 9 rows
- 3. Education / curriculum / schools: 205 rows
- 4. Religious liberty / church / civic morality: 397 rows
- 5. Taxes / spending / debt: 86 rows
- 6. Economy / jobs / labor: 81 rows
- 7. Guns / Second Amendment: 10 rows
- 8. Immigration / border: 97 rows
- 9. Health care / insurance / Medicaid: 223 rows
- 10. Election integrity / voting / courts: 1024 rows
- 11. Public safety / law enforcement / criminal justice: 341 rows
- 12. Agriculture / rural economy / water: 216 rows
- 13. Local governance / transparency / ethics: 1202 rows
- 14. Environment / energy / land use: 35 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
