# Notes — candidate-evidence-miner — joy-eakins — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 7795
- Caveat/conflict/source-limitation rows: 23
- Internal-memory rows without URL: 6226

## Files Read
- memory/candidates/joy-eakins/in-their-own-words.md
- memory/candidates/joy-eakins/raw-dump-v2.md
- memory/candidates/joy-eakins/raw-dump.md
- memory/candidates/joy-eakins/site-profile.md
- memory/candidates/joy-eakins/sleuth-pass.md
- memory/candidates/joy-eakins/social-harvest.md
- memory/candidates/joy-eakins/v2-issues.yaml
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/jeff-colyer-complete-dossier.md
- reports/scott-schwab-complete-dossier.md
- reports/ty-masterson-complete-dossier.md
- reports/vicki-schmidt-complete-dossier.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/joy-eakins.ts

## Issue Coverage
- 1. Abortion / life: 98 rows
- 2. LGBT / gender / parental rights: 20 rows
- 3. Education / curriculum / schools: 320 rows
- 4. Religious liberty / church / civic morality: 216 rows
- 5. Taxes / spending / debt: 186 rows
- 6. Economy / jobs / labor: 170 rows
- 7. Guns / Second Amendment: 19 rows
- 8. Immigration / border: 48 rows
- 9. Health care / insurance / Medicaid: 260 rows
- 10. Election integrity / voting / courts: 976 rows
- 11. Public safety / law enforcement / criminal justice: 116 rows
- 12. Agriculture / rural economy / water: 122 rows
- 13. Local governance / transparency / ethics: 1319 rows
- 14. Environment / energy / land use: 50 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
