# Notes — candidate-evidence-miner — dinah-sykes — 2026-05-20

## Summary
- Files read: 17
- Raw rows extracted: 4843
- Caveat/conflict/source-limitation rows: 30
- Internal-memory rows without URL: 3929

## Files Read
- memory/candidates/dinah-sykes/in-their-own-words.md
- memory/candidates/dinah-sykes/raw-dump-v2.md
- memory/candidates/dinah-sykes/raw-dump.md
- memory/candidates/dinah-sykes/site-profile.md
- memory/candidates/dinah-sykes/sleuth-pass.md
- memory/candidates/dinah-sykes/social-harvest.md
- memory/candidates/dinah-sykes/v2-issues.yaml
- memory/elections/2026-11-03-kansas-insurance-commissioner.md
- memory/elections/2026-11-03-ks-governor.md
- memory/elections/2026-11-03-ks-statewide-offices.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/chris-mann-complete-dossier.md
- reports/plain-english-voter-guide.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/dinah-sykes.ts

## Issue Coverage
- 1. Abortion / life: 90 rows
- 2. LGBT / gender / parental rights: 51 rows
- 3. Education / curriculum / schools: 122 rows
- 4. Religious liberty / church / civic morality: 73 rows
- 5. Taxes / spending / debt: 87 rows
- 6. Economy / jobs / labor: 66 rows
- 7. Guns / Second Amendment: 21 rows
- 8. Immigration / border: 42 rows
- 9. Health care / insurance / Medicaid: 389 rows
- 10. Election integrity / voting / courts: 835 rows
- 11. Public safety / law enforcement / criminal justice: 232 rows
- 12. Agriculture / rural economy / water: 51 rows
- 13. Local governance / transparency / ethics: 880 rows
- 14. Environment / energy / land use: 17 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
