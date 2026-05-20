# Notes — candidate-evidence-miner — scott-schwab — 2026-05-20

## Summary
- Files read: 25
- Raw rows extracted: 13261
- Caveat/conflict/source-limitation rows: 91
- Internal-memory rows without URL: 10597

## Files Read
- memory/candidates/scott-schwab/in-their-own-words.md
- memory/candidates/scott-schwab/raw-dump-v2.md
- memory/candidates/scott-schwab/raw-dump.md
- memory/candidates/scott-schwab/site-profile.md
- memory/candidates/scott-schwab/sleuth-pass.md
- memory/candidates/scott-schwab/social-harvest.md
- memory/candidates/scott-schwab/v2-issues.yaml
- memory/elections/2026-11-03-kansas-governor.md
- memory/elections/2026-11-03-kansas-secretary-of-state.md
- memory/elections/2026-11-03-ks-governor.md
- memory/elections/2026-11-03-ks-statewide-offices.md
- reports/KS-01-2026-challengers-investigation.md
- reports/chris-mann-complete-dossier.md
- reports/faith-church-investigation-2026-03-31.md
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/jeff-colyer-complete-dossier.md
- reports/plain-english-voter-guide.md
- reports/scott-schwab-complete-dossier.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- reports/ty-masterson-complete-dossier.md
- reports/vicki-schmidt-complete-dossier.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/scott-schwab.ts

## Issue Coverage
- 1. Abortion / life: 125 rows
- 2. LGBT / gender / parental rights: 17 rows
- 3. Education / curriculum / schools: 300 rows
- 4. Religious liberty / church / civic morality: 604 rows
- 5. Taxes / spending / debt: 229 rows
- 6. Economy / jobs / labor: 161 rows
- 7. Guns / Second Amendment: 36 rows
- 8. Immigration / border: 58 rows
- 9. Health care / insurance / Medicaid: 406 rows
- 10. Election integrity / voting / courts: 1755 rows
- 11. Public safety / law enforcement / criminal justice: 365 rows
- 12. Agriculture / rural economy / water: 226 rows
- 13. Local governance / transparency / ethics: 2095 rows
- 14. Environment / energy / land use: 46 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
