# Notes — candidate-evidence-miner — daniel-hawkins — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 3093
- Caveat/conflict/source-limitation rows: 21
- Internal-memory rows without URL: 2688

## Files Read
- memory/candidates/daniel-hawkins/in-their-own-words.md
- memory/candidates/daniel-hawkins/raw-dump-v2.md
- memory/candidates/daniel-hawkins/raw-dump.md
- memory/candidates/daniel-hawkins/site-profile.md
- memory/candidates/daniel-hawkins/sleuth-pass.md
- memory/candidates/daniel-hawkins/social-harvest.md
- memory/candidates/daniel-hawkins/v2-issues.yaml
- memory/elections/2026-11-03-kansas-insurance-commissioner.md
- memory/elections/2026-11-03-ks-governor.md
- memory/elections/2026-11-03-ks-statewide-offices.md
- reports/Kansas-2026-Senate-Insurance-Commissioner-Investigation.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/daniel-hawkins.ts

## Issue Coverage
- 1. Abortion / life: 66 rows
- 2. LGBT / gender / parental rights: 45 rows
- 3. Education / curriculum / schools: 48 rows
- 4. Religious liberty / church / civic morality: 45 rows
- 5. Taxes / spending / debt: 90 rows
- 6. Economy / jobs / labor: 54 rows
- 7. Guns / Second Amendment: 44 rows
- 8. Immigration / border: 45 rows
- 9. Health care / insurance / Medicaid: 402 rows
- 10. Election integrity / voting / courts: 615 rows
- 11. Public safety / law enforcement / criminal justice: 141 rows
- 12. Agriculture / rural economy / water: 34 rows
- 13. Local governance / transparency / ethics: 741 rows
- 14. Environment / energy / land use: 12 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
