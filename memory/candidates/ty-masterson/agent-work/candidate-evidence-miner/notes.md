# Notes — candidate-evidence-miner — ty-masterson — 2026-05-20

## Summary
- Files read: 19
- Raw rows extracted: 11653
- Caveat/conflict/source-limitation rows: 85
- Internal-memory rows without URL: 9408

## Files Read
- memory/candidates/ty-masterson/in-their-own-words.md
- memory/candidates/ty-masterson/raw-dump-v2.md
- memory/candidates/ty-masterson/raw-dump.md
- memory/candidates/ty-masterson/site-profile.md
- memory/candidates/ty-masterson/sleuth-pass.md
- memory/candidates/ty-masterson/social-harvest.md
- memory/candidates/ty-masterson/v2-issues.yaml
- memory/elections/2026-11-03-kansas-governor.md
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
- ui/src/data/v2/ty-masterson.ts

## Issue Coverage
- 1. Abortion / life: 114 rows
- 2. LGBT / gender / parental rights: 85 rows
- 3. Education / curriculum / schools: 355 rows
- 4. Religious liberty / church / civic morality: 539 rows
- 5. Taxes / spending / debt: 280 rows
- 6. Economy / jobs / labor: 130 rows
- 7. Guns / Second Amendment: 23 rows
- 8. Immigration / border: 82 rows
- 9. Health care / insurance / Medicaid: 325 rows
- 10. Election integrity / voting / courts: 1479 rows
- 11. Public safety / law enforcement / criminal justice: 264 rows
- 12. Agriculture / rural economy / water: 114 rows
- 13. Local governance / transparency / ethics: 1796 rows
- 14. Environment / energy / land use: 16 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
