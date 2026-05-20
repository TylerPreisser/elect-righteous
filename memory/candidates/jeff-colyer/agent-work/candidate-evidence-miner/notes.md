# Notes — candidate-evidence-miner — jeff-colyer — 2026-05-20

## Summary
- Files read: 20
- Raw rows extracted: 13312
- Caveat/conflict/source-limitation rows: 106
- Internal-memory rows without URL: 10444

## Files Read
- memory/candidates/jeff-colyer/in-their-own-words.md
- memory/candidates/jeff-colyer/raw-dump-v2.md
- memory/candidates/jeff-colyer/raw-dump.md
- memory/candidates/jeff-colyer/site-profile.md
- memory/candidates/jeff-colyer/sleuth-pass.md
- memory/candidates/jeff-colyer/social-harvest.md
- memory/candidates/jeff-colyer/v2-issues.yaml
- memory/elections/2026-11-03-kansas-governor.md
- reports/Kris-Kobach-Complete-Dossier.md
- reports/faith-church-investigation-2026-03-31.md
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/jeff-colyer-complete-dossier.md
- reports/plain-english-voter-guide.md
- reports/scott-schwab-complete-dossier.md
- reports/ty-masterson-complete-dossier.md
- reports/vicki-schmidt-complete-dossier.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/jeff-colyer.ts

## Issue Coverage
- 1. Abortion / life: 137 rows
- 2. LGBT / gender / parental rights: 77 rows
- 3. Education / curriculum / schools: 362 rows
- 4. Religious liberty / church / civic morality: 559 rows
- 5. Taxes / spending / debt: 210 rows
- 6. Economy / jobs / labor: 145 rows
- 7. Guns / Second Amendment: 37 rows
- 8. Immigration / border: 105 rows
- 9. Health care / insurance / Medicaid: 433 rows
- 10. Election integrity / voting / courts: 1598 rows
- 11. Public safety / law enforcement / criminal justice: 314 rows
- 12. Agriculture / rural economy / water: 152 rows
- 13. Local governance / transparency / ethics: 1971 rows
- 14. Environment / energy / land use: 23 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
