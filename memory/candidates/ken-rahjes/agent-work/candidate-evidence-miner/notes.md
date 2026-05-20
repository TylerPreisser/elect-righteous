# Notes — candidate-evidence-miner — ken-rahjes — 2026-05-20

## Summary
- Files read: 13
- Raw rows extracted: 2933
- Caveat/conflict/source-limitation rows: 15
- Internal-memory rows without URL: 2534

## Files Read
- memory/candidates/ken-rahjes/in-their-own-words.md
- memory/candidates/ken-rahjes/raw-dump-v2.md
- memory/candidates/ken-rahjes/raw-dump.md
- memory/candidates/ken-rahjes/site-profile.md
- memory/candidates/ken-rahjes/sleuth-pass.md
- memory/candidates/ken-rahjes/social-harvest.md
- memory/candidates/ken-rahjes/v2-issues.yaml
- memory/elections/2026-11-03-kansas-secretary-of-state.md
- reports/plain-english-voter-guide.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/ken-rahjes.ts

## Issue Coverage
- 1. Abortion / life: 26 rows
- 2. LGBT / gender / parental rights: 27 rows
- 3. Education / curriculum / schools: 91 rows
- 4. Religious liberty / church / civic morality: 41 rows
- 5. Taxes / spending / debt: 66 rows
- 6. Economy / jobs / labor: 114 rows
- 7. Guns / Second Amendment: 20 rows
- 8. Immigration / border: 21 rows
- 9. Health care / insurance / Medicaid: 61 rows
- 10. Election integrity / voting / courts: 582 rows
- 11. Public safety / law enforcement / criminal justice: 110 rows
- 12. Agriculture / rural economy / water: 178 rows
- 13. Local governance / transparency / ethics: 663 rows
- 14. Environment / energy / land use: 15 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
