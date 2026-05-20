# Notes — candidate-evidence-miner — craig-musser — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 3616
- Caveat/conflict/source-limitation rows: 24
- Internal-memory rows without URL: 2872

## Files Read
- memory/candidates/craig-musser/in-their-own-words.md
- memory/candidates/craig-musser/raw-dump-v2.md
- memory/candidates/craig-musser/raw-dump.md
- memory/candidates/craig-musser/site-profile.md
- memory/candidates/craig-musser/sleuth-pass.md
- memory/candidates/craig-musser/social-harvest.md
- memory/candidates/craig-musser/v2-issues.yaml
- memory/elections/2026-11-03-us-house-ks01.md
- reports/KS-01-2026-challengers-investigation.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/craig-musser.ts

## Issue Coverage
- 1. Abortion / life: 10 rows
- 2. LGBT / gender / parental rights: 17 rows
- 3. Education / curriculum / schools: 89 rows
- 4. Religious liberty / church / civic morality: 64 rows
- 5. Taxes / spending / debt: 79 rows
- 6. Economy / jobs / labor: 36 rows
- 7. Guns / Second Amendment: 13 rows
- 8. Immigration / border: 24 rows
- 9. Health care / insurance / Medicaid: 103 rows
- 10. Election integrity / voting / courts: 674 rows
- 11. Public safety / law enforcement / criminal justice: 184 rows
- 12. Agriculture / rural economy / water: 76 rows
- 13. Local governance / transparency / ethics: 778 rows
- 14. Environment / energy / land use: 27 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
