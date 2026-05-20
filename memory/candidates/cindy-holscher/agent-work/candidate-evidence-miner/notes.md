# Notes — candidate-evidence-miner — cindy-holscher — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 6287
- Caveat/conflict/source-limitation rows: 93
- Internal-memory rows without URL: 5011

## Files Read
- memory/candidates/cindy-holscher/in-their-own-words.md
- memory/candidates/cindy-holscher/raw-dump-v2.md
- memory/candidates/cindy-holscher/raw-dump.md
- memory/candidates/cindy-holscher/site-profile.md
- memory/candidates/cindy-holscher/sleuth-pass.md
- memory/candidates/cindy-holscher/social-harvest.md
- memory/candidates/cindy-holscher/v2-issues.yaml
- memory/elections/2026-11-03-kansas-governor.md
- reports/faith-church-investigation-2026-03-31.md
- reports/governor-2026-all-remaining-candidates-complete.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/plain-english-voter-guide.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/cindy-holscher.ts

## Issue Coverage
- 1. Abortion / life: 61 rows
- 2. LGBT / gender / parental rights: 44 rows
- 3. Education / curriculum / schools: 306 rows
- 4. Religious liberty / church / civic morality: 403 rows
- 5. Taxes / spending / debt: 115 rows
- 6. Economy / jobs / labor: 114 rows
- 7. Guns / Second Amendment: 30 rows
- 8. Immigration / border: 64 rows
- 9. Health care / insurance / Medicaid: 245 rows
- 10. Election integrity / voting / courts: 1016 rows
- 11. Public safety / law enforcement / criminal justice: 124 rows
- 12. Agriculture / rural economy / water: 179 rows
- 13. Local governance / transparency / ethics: 1246 rows
- 14. Environment / energy / land use: 17 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
