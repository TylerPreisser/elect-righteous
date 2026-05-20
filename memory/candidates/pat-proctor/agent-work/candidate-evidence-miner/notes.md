# Notes — candidate-evidence-miner — pat-proctor — 2026-05-20

## Summary
- Files read: 12
- Raw rows extracted: 2519
- Caveat/conflict/source-limitation rows: 17
- Internal-memory rows without URL: 2183

## Files Read
- memory/candidates/pat-proctor/in-their-own-words.md
- memory/candidates/pat-proctor/raw-dump-v2.md
- memory/candidates/pat-proctor/raw-dump.md
- memory/candidates/pat-proctor/site-profile.md
- memory/candidates/pat-proctor/sleuth-pass.md
- memory/candidates/pat-proctor/v2-issues.yaml
- memory/elections/2026-11-03-kansas-secretary-of-state.md
- reports/plain-english-voter-guide.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/pat-proctor.ts

## Issue Coverage
- 1. Abortion / life: 24 rows
- 2. LGBT / gender / parental rights: 11 rows
- 3. Education / curriculum / schools: 53 rows
- 4. Religious liberty / church / civic morality: 56 rows
- 5. Taxes / spending / debt: 30 rows
- 6. Economy / jobs / labor: 71 rows
- 7. Guns / Second Amendment: 17 rows
- 8. Immigration / border: 20 rows
- 9. Health care / insurance / Medicaid: 41 rows
- 10. Election integrity / voting / courts: 649 rows
- 11. Public safety / law enforcement / criminal justice: 109 rows
- 12. Agriculture / rural economy / water: 30 rows
- 13. Local governance / transparency / ethics: 609 rows
- 14. Environment / energy / land use: 5 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
