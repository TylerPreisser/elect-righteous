# Notes — candidate-evidence-miner — colin-mcroberts — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 4899
- Caveat/conflict/source-limitation rows: 25
- Internal-memory rows without URL: 3864

## Files Read
- memory/candidates/colin-mcroberts/in-their-own-words.md
- memory/candidates/colin-mcroberts/raw-dump-v2.md
- memory/candidates/colin-mcroberts/raw-dump.md
- memory/candidates/colin-mcroberts/site-profile.md
- memory/candidates/colin-mcroberts/sleuth-pass.md
- memory/candidates/colin-mcroberts/social-harvest.md
- memory/candidates/colin-mcroberts/v2-issues.yaml
- memory/elections/2026-11-03-us-house-ks01.md
- reports/KS-01-2026-challengers-investigation.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/plain-english-voter-guide.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/colin-mcroberts.ts

## Issue Coverage
- 1. Abortion / life: 53 rows
- 2. LGBT / gender / parental rights: 18 rows
- 3. Education / curriculum / schools: 124 rows
- 4. Religious liberty / church / civic morality: 53 rows
- 5. Taxes / spending / debt: 53 rows
- 6. Economy / jobs / labor: 133 rows
- 7. Guns / Second Amendment: 18 rows
- 8. Immigration / border: 105 rows
- 9. Health care / insurance / Medicaid: 111 rows
- 10. Election integrity / voting / courts: 1014 rows
- 11. Public safety / law enforcement / criminal justice: 265 rows
- 12. Agriculture / rural economy / water: 150 rows
- 13. Local governance / transparency / ethics: 1204 rows
- 14. Environment / energy / land use: 18 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
