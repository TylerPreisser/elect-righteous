# Notes — candidate-evidence-miner — sam-lane — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 2485
- Caveat/conflict/source-limitation rows: 11
- Internal-memory rows without URL: 1980

## Files Read
- memory/candidates/sam-lane/in-their-own-words.md
- memory/candidates/sam-lane/raw-dump-v2.md
- memory/candidates/sam-lane/raw-dump.md
- memory/candidates/sam-lane/site-profile.md
- memory/candidates/sam-lane/sleuth-pass.md
- memory/candidates/sam-lane/social-harvest.md
- memory/candidates/sam-lane/v2-issues.yaml
- memory/elections/2026-11-03-kansas-secretary-of-state.md
- reports/plain-english-voter-guide.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/sam-lane.ts

## Issue Coverage
- 1. Abortion / life: 38 rows
- 2. LGBT / gender / parental rights: 16 rows
- 3. Education / curriculum / schools: 49 rows
- 4. Religious liberty / church / civic morality: 32 rows
- 5. Taxes / spending / debt: 39 rows
- 6. Economy / jobs / labor: 32 rows
- 7. Guns / Second Amendment: 26 rows
- 8. Immigration / border: 29 rows
- 9. Health care / insurance / Medicaid: 44 rows
- 10. Election integrity / voting / courts: 651 rows
- 11. Public safety / law enforcement / criminal justice: 90 rows
- 12. Agriculture / rural economy / water: 36 rows
- 13. Local governance / transparency / ethics: 713 rows
- 14. Environment / energy / land use: 12 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
