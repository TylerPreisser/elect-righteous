# Notes — candidate-evidence-miner — vicki-schmidt — 2026-05-20

## Summary
- Files read: 23
- Raw rows extracted: 11631
- Caveat/conflict/source-limitation rows: 81
- Internal-memory rows without URL: 9325

## Files Read
- memory/candidates/vicki-schmidt/in-their-own-words.md
- memory/candidates/vicki-schmidt/raw-dump-v2.md
- memory/candidates/vicki-schmidt/raw-dump.md
- memory/candidates/vicki-schmidt/site-profile.md
- memory/candidates/vicki-schmidt/sleuth-pass.md
- memory/candidates/vicki-schmidt/social-harvest.md
- memory/candidates/vicki-schmidt/v2-issues.yaml
- memory/elections/2026-11-03-kansas-governor.md
- memory/elections/2026-11-03-kansas-insurance-commissioner.md
- memory/elections/2026-11-03-ks-governor.md
- memory/elections/2026-11-03-ks-statewide-offices.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/jeff-colyer-complete-dossier.md
- reports/plain-english-voter-guide.md
- reports/scott-schwab-complete-dossier.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- reports/ty-masterson-complete-dossier.md
- reports/vicki-schmidt-complete-dossier.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/vicki-schmidt.ts

## Issue Coverage
- 1. Abortion / life: 163 rows
- 2. LGBT / gender / parental rights: 28 rows
- 3. Education / curriculum / schools: 263 rows
- 4. Religious liberty / church / civic morality: 491 rows
- 5. Taxes / spending / debt: 222 rows
- 6. Economy / jobs / labor: 110 rows
- 7. Guns / Second Amendment: 27 rows
- 8. Immigration / border: 59 rows
- 9. Health care / insurance / Medicaid: 647 rows
- 10. Election integrity / voting / courts: 1391 rows
- 11. Public safety / law enforcement / criminal justice: 257 rows
- 12. Agriculture / rural economy / water: 162 rows
- 13. Local governance / transparency / ethics: 1777 rows
- 14. Environment / energy / land use: 25 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
