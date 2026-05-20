# Notes — candidate-evidence-miner — curt-vajnar — 2026-05-20

## Summary
- Files read: 14
- Raw rows extracted: 3009
- Caveat/conflict/source-limitation rows: 63
- Internal-memory rows without URL: 2460

## Files Read
- memory/candidates/curt-vajnar/in-their-own-words.md
- memory/candidates/curt-vajnar/raw-dump-v2.md
- memory/candidates/curt-vajnar/raw-dump.md
- memory/candidates/curt-vajnar/site-profile.md
- memory/candidates/curt-vajnar/sleuth-pass.md
- memory/candidates/curt-vajnar/social-harvest.md
- memory/candidates/curt-vajnar/v2-issues.yaml
- reports/2026-03-30-education-elections-hays-ks.md
- reports/faith-church-investigation-2026-03-31.md
- reports/ken-brooks-complete-dossier.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/curt-vajnar.ts

## Issue Coverage
- 1. Abortion / life: 7 rows
- 2. LGBT / gender / parental rights: 13 rows
- 3. Education / curriculum / schools: 576 rows
- 4. Religious liberty / church / civic morality: 262 rows
- 5. Taxes / spending / debt: 78 rows
- 6. Economy / jobs / labor: 26 rows
- 7. Guns / Second Amendment: 0 rows
- 8. Immigration / border: 4 rows
- 9. Health care / insurance / Medicaid: 33 rows
- 10. Election integrity / voting / courts: 369 rows
- 11. Public safety / law enforcement / criminal justice: 45 rows
- 12. Agriculture / rural economy / water: 26 rows
- 13. Local governance / transparency / ethics: 841 rows
- 14. Environment / energy / land use: 3 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
