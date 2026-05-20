# Notes — candidate-evidence-miner — ron-wilson — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 9051
- Caveat/conflict/source-limitation rows: 86
- Internal-memory rows without URL: 7131

## Files Read
- memory/candidates/ron-wilson/in-their-own-words.md
- memory/candidates/ron-wilson/raw-dump-v2.md
- memory/candidates/ron-wilson/raw-dump.md
- memory/candidates/ron-wilson/site-profile.md
- memory/candidates/ron-wilson/sleuth-pass.md
- memory/candidates/ron-wilson/social-harvest.md
- memory/candidates/ron-wilson/v2-issues.yaml
- reports/faith-church-investigation-2026-03-31.md
- reports/ken-brooks-complete-dossier.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/ron-wilson.ts

## Issue Coverage
- 1. Abortion / life: 12 rows
- 2. LGBT / gender / parental rights: 102 rows
- 3. Education / curriculum / schools: 814 rows
- 4. Religious liberty / church / civic morality: 586 rows
- 5. Taxes / spending / debt: 107 rows
- 6. Economy / jobs / labor: 25 rows
- 7. Guns / Second Amendment: 7 rows
- 8. Immigration / border: 13 rows
- 9. Health care / insurance / Medicaid: 156 rows
- 10. Election integrity / voting / courts: 547 rows
- 11. Public safety / law enforcement / criminal justice: 202 rows
- 12. Agriculture / rural economy / water: 99 rows
- 13. Local governance / transparency / ethics: 1128 rows
- 14. Environment / energy / land use: 6 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
