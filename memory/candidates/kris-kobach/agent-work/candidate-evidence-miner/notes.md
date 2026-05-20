# Notes — candidate-evidence-miner — kris-kobach — 2026-05-20

## Summary
- Files read: 23
- Raw rows extracted: 12133
- Caveat/conflict/source-limitation rows: 97
- Internal-memory rows without URL: 9860

## Files Read
- memory/candidates/kris-kobach/in-their-own-words.md
- memory/candidates/kris-kobach/raw-dump-v2.md
- memory/candidates/kris-kobach/raw-dump.md
- memory/candidates/kris-kobach/site-profile.md
- memory/candidates/kris-kobach/sleuth-pass.md
- memory/candidates/kris-kobach/social-harvest.md
- memory/candidates/kris-kobach/v2-issues.yaml
- memory/elections/2026-08-04-kansas-supreme-court-amendment.md
- memory/elections/2026-11-03-kansas-attorney-general.md
- memory/elections/2026-11-03-ks-governor.md
- memory/elections/2026-11-03-ks-statewide-offices.md
- reports/2026-kansas-ballot-measures-investigation.md
- reports/Kris-Kobach-Complete-Dossier.md
- reports/chris-mann-complete-dossier.md
- reports/faith-church-investigation-2026-03-31.md
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/jeff-colyer-complete-dossier.md
- reports/plain-english-voter-guide.md
- reports/scott-schwab-complete-dossier.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/kris-kobach.ts

## Issue Coverage
- 1. Abortion / life: 155 rows
- 2. LGBT / gender / parental rights: 109 rows
- 3. Education / curriculum / schools: 323 rows
- 4. Religious liberty / church / civic morality: 551 rows
- 5. Taxes / spending / debt: 134 rows
- 6. Economy / jobs / labor: 131 rows
- 7. Guns / Second Amendment: 64 rows
- 8. Immigration / border: 210 rows
- 9. Health care / insurance / Medicaid: 332 rows
- 10. Election integrity / voting / courts: 2345 rows
- 11. Public safety / law enforcement / criminal justice: 868 rows
- 12. Agriculture / rural economy / water: 130 rows
- 13. Local governance / transparency / ethics: 2179 rows
- 14. Environment / energy / land use: 25 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
