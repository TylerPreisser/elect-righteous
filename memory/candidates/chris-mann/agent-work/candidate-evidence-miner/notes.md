# Notes — candidate-evidence-miner — chris-mann — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 6022
- Caveat/conflict/source-limitation rows: 33
- Internal-memory rows without URL: 4919

## Files Read
- memory/candidates/chris-mann/in-their-own-words.md
- memory/candidates/chris-mann/raw-dump-v2.md
- memory/candidates/chris-mann/raw-dump.md
- memory/candidates/chris-mann/site-profile.md
- memory/candidates/chris-mann/sleuth-pass.md
- memory/candidates/chris-mann/social-harvest.md
- memory/candidates/chris-mann/v2-issues.yaml
- memory/elections/2026-11-03-kansas-attorney-general.md
- reports/Kris-Kobach-Complete-Dossier.md
- reports/chris-mann-complete-dossier.md
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/plain-english-voter-guide.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/chris-mann.ts

## Issue Coverage
- 1. Abortion / life: 75 rows
- 2. LGBT / gender / parental rights: 54 rows
- 3. Education / curriculum / schools: 122 rows
- 4. Religious liberty / church / civic morality: 71 rows
- 5. Taxes / spending / debt: 76 rows
- 6. Economy / jobs / labor: 57 rows
- 7. Guns / Second Amendment: 22 rows
- 8. Immigration / border: 95 rows
- 9. Health care / insurance / Medicaid: 102 rows
- 10. Election integrity / voting / courts: 1206 rows
- 11. Public safety / law enforcement / criminal justice: 486 rows
- 12. Agriculture / rural economy / water: 126 rows
- 13. Local governance / transparency / ethics: 1374 rows
- 14. Environment / energy / land use: 14 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
