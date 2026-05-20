# Notes — candidate-evidence-miner — stacy-rogers — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 7918
- Caveat/conflict/source-limitation rows: 15
- Internal-memory rows without URL: 6286

## Files Read
- memory/candidates/stacy-rogers/in-their-own-words.md
- memory/candidates/stacy-rogers/raw-dump-v2.md
- memory/candidates/stacy-rogers/raw-dump.md
- memory/candidates/stacy-rogers/site-profile.md
- memory/candidates/stacy-rogers/sleuth-pass.md
- memory/candidates/stacy-rogers/social-harvest.md
- memory/candidates/stacy-rogers/v2-issues.yaml
- memory/elections/2026-11-03-kansas-governor.md
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/jeff-colyer-complete-dossier.md
- reports/plain-english-voter-guide.md
- reports/vicki-schmidt-complete-dossier.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/stacy-rogers.ts

## Issue Coverage
- 1. Abortion / life: 81 rows
- 2. LGBT / gender / parental rights: 32 rows
- 3. Education / curriculum / schools: 208 rows
- 4. Religious liberty / church / civic morality: 136 rows
- 5. Taxes / spending / debt: 183 rows
- 6. Economy / jobs / labor: 179 rows
- 7. Guns / Second Amendment: 26 rows
- 8. Immigration / border: 34 rows
- 9. Health care / insurance / Medicaid: 224 rows
- 10. Election integrity / voting / courts: 1196 rows
- 11. Public safety / law enforcement / criminal justice: 166 rows
- 12. Agriculture / rural economy / water: 149 rows
- 13. Local governance / transparency / ethics: 1407 rows
- 14. Environment / energy / land use: 48 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
