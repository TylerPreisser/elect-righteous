# Notes — candidate-evidence-miner — philip-sarnecki — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 7912
- Caveat/conflict/source-limitation rows: 27
- Internal-memory rows without URL: 6332

## Files Read
- memory/candidates/philip-sarnecki/in-their-own-words.md
- memory/candidates/philip-sarnecki/raw-dump-v2.md
- memory/candidates/philip-sarnecki/raw-dump.md
- memory/candidates/philip-sarnecki/site-profile.md
- memory/candidates/philip-sarnecki/sleuth-pass.md
- memory/candidates/philip-sarnecki/social-harvest.md
- memory/candidates/philip-sarnecki/v2-issues.yaml
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/jeff-colyer-complete-dossier.md
- reports/scott-schwab-complete-dossier.md
- reports/ty-masterson-complete-dossier.md
- reports/vicki-schmidt-complete-dossier.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/philip-sarnecki.ts

## Issue Coverage
- 1. Abortion / life: 120 rows
- 2. LGBT / gender / parental rights: 40 rows
- 3. Education / curriculum / schools: 183 rows
- 4. Religious liberty / church / civic morality: 268 rows
- 5. Taxes / spending / debt: 182 rows
- 6. Economy / jobs / labor: 199 rows
- 7. Guns / Second Amendment: 14 rows
- 8. Immigration / border: 79 rows
- 9. Health care / insurance / Medicaid: 218 rows
- 10. Election integrity / voting / courts: 1001 rows
- 11. Public safety / law enforcement / criminal justice: 135 rows
- 12. Agriculture / rural economy / water: 98 rows
- 13. Local governance / transparency / ethics: 1266 rows
- 14. Environment / energy / land use: 41 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
