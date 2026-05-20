# Notes — candidate-evidence-miner — barb-wasinger — 2026-05-20

## Summary
- Files read: 20
- Raw rows extracted: 5056
- Caveat/conflict/source-limitation rows: 87
- Internal-memory rows without URL: 4129

## Files Read
- memory/candidates/barb-wasinger/in-their-own-words.md
- memory/candidates/barb-wasinger/profile.md
- memory/candidates/barb-wasinger/raw-dump-v2.md
- memory/candidates/barb-wasinger/raw-dump.md
- memory/candidates/barb-wasinger/site-profile.md
- memory/candidates/barb-wasinger/sleuth-pass.md
- memory/candidates/barb-wasinger/social-harvest.md
- memory/candidates/barb-wasinger/v2-issues.yaml
- memory/elections/2026-11-03-kansas-house-district-111.md
- memory/elections/2026-11-03-ks-house-111.md
- reports/barb-wasinger-complete-dossier.md
- reports/barb-wasinger-district-111-deep-investigation.md
- reports/faith-church-investigation-2026-03-31.md
- reports/hays-city-commission-deep-investigation-2026-03-30.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/mason-ruder-complete-dossier.md
- reports/plain-english-voter-guide.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/barb-wasinger.ts

## Issue Coverage
- 1. Abortion / life: 49 rows
- 2. LGBT / gender / parental rights: 58 rows
- 3. Education / curriculum / schools: 250 rows
- 4. Religious liberty / church / civic morality: 426 rows
- 5. Taxes / spending / debt: 220 rows
- 6. Economy / jobs / labor: 95 rows
- 7. Guns / Second Amendment: 13 rows
- 8. Immigration / border: 15 rows
- 9. Health care / insurance / Medicaid: 134 rows
- 10. Election integrity / voting / courts: 944 rows
- 11. Public safety / law enforcement / criminal justice: 308 rows
- 12. Agriculture / rural economy / water: 185 rows
- 13. Local governance / transparency / ethics: 1258 rows
- 14. Environment / energy / land use: 11 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
