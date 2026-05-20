# Notes — candidate-evidence-miner — ken-brooks — 2026-05-20

## Summary
- Files read: 14
- Raw rows extracted: 4126
- Caveat/conflict/source-limitation rows: 115
- Internal-memory rows without URL: 3428

## Files Read
- memory/candidates/ken-brooks/in-their-own-words.md
- memory/candidates/ken-brooks/raw-dump-v2.md
- memory/candidates/ken-brooks/raw-dump.md
- memory/candidates/ken-brooks/site-profile.md
- memory/candidates/ken-brooks/sleuth-pass.md
- memory/candidates/ken-brooks/social-harvest.md
- memory/candidates/ken-brooks/v2-issues.yaml
- reports/2026-03-30-education-elections-hays-ks.md
- reports/faith-church-investigation-2026-03-31.md
- reports/ken-brooks-complete-dossier.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/ken-brooks.ts

## Issue Coverage
- 1. Abortion / life: 11 rows
- 2. LGBT / gender / parental rights: 50 rows
- 3. Education / curriculum / schools: 715 rows
- 4. Religious liberty / church / civic morality: 429 rows
- 5. Taxes / spending / debt: 169 rows
- 6. Economy / jobs / labor: 18 rows
- 7. Guns / Second Amendment: 3 rows
- 8. Immigration / border: 8 rows
- 9. Health care / insurance / Medicaid: 63 rows
- 10. Election integrity / voting / courts: 525 rows
- 11. Public safety / law enforcement / criminal justice: 142 rows
- 12. Agriculture / rural economy / water: 46 rows
- 13. Local governance / transparency / ethics: 1107 rows
- 14. Environment / energy / land use: 7 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
