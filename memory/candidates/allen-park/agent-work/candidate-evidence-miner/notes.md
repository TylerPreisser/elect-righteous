# Notes — candidate-evidence-miner — allen-park — 2026-05-20

## Summary
- Files read: 14
- Raw rows extracted: 3714
- Caveat/conflict/source-limitation rows: 83
- Internal-memory rows without URL: 3024

## Files Read
- memory/candidates/allen-park/in-their-own-words.md
- memory/candidates/allen-park/raw-dump-v2.md
- memory/candidates/allen-park/raw-dump.md
- memory/candidates/allen-park/site-profile.md
- memory/candidates/allen-park/sleuth-pass.md
- memory/candidates/allen-park/social-harvest.md
- memory/candidates/allen-park/v2-issues.yaml
- reports/2026-03-30-education-elections-hays-ks.md
- reports/faith-church-investigation-2026-03-31.md
- reports/ken-brooks-complete-dossier.md
- reports/usd489-board-deep-investigation-2026-03-30.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/allen-park.ts

## Issue Coverage
- 1. Abortion / life: 14 rows
- 2. LGBT / gender / parental rights: 31 rows
- 3. Education / curriculum / schools: 690 rows
- 4. Religious liberty / church / civic morality: 358 rows
- 5. Taxes / spending / debt: 117 rows
- 6. Economy / jobs / labor: 25 rows
- 7. Guns / Second Amendment: 7 rows
- 8. Immigration / border: 20 rows
- 9. Health care / insurance / Medicaid: 48 rows
- 10. Election integrity / voting / courts: 564 rows
- 11. Public safety / law enforcement / criminal justice: 195 rows
- 12. Agriculture / rural economy / water: 40 rows
- 13. Local governance / transparency / ethics: 998 rows
- 14. Environment / energy / land use: 3 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
