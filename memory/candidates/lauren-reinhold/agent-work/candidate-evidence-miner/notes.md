# Notes — candidate-evidence-miner — lauren-reinhold — 2026-05-20

## Summary
- Files read: 15
- Raw rows extracted: 4540
- Caveat/conflict/source-limitation rows: 24
- Internal-memory rows without URL: 3634

## Files Read
- memory/candidates/lauren-reinhold/in-their-own-words.md
- memory/candidates/lauren-reinhold/raw-dump-v2.md
- memory/candidates/lauren-reinhold/raw-dump.md
- memory/candidates/lauren-reinhold/site-profile.md
- memory/candidates/lauren-reinhold/sleuth-pass.md
- memory/candidates/lauren-reinhold/social-harvest.md
- memory/candidates/lauren-reinhold/v2-issues.yaml
- memory/elections/2026-11-03-us-house-ks01.md
- reports/KS-01-2026-challengers-investigation.md
- reports/hays-kansas-election-finder-2026-03-30.md
- reports/plain-english-voter-guide.md
- reports/sos-insurance-ks01-all-candidates-complete.md
- ui/src/data/candidates.ts
- ui/src/data/elections.ts
- ui/src/data/v2/lauren-reinhold.ts

## Issue Coverage
- 1. Abortion / life: 28 rows
- 2. LGBT / gender / parental rights: 34 rows
- 3. Education / curriculum / schools: 82 rows
- 4. Religious liberty / church / civic morality: 51 rows
- 5. Taxes / spending / debt: 94 rows
- 6. Economy / jobs / labor: 134 rows
- 7. Guns / Second Amendment: 12 rows
- 8. Immigration / border: 71 rows
- 9. Health care / insurance / Medicaid: 115 rows
- 10. Election integrity / voting / courts: 1080 rows
- 11. Public safety / law enforcement / criminal justice: 214 rows
- 12. Agriculture / rural economy / water: 156 rows
- 13. Local governance / transparency / ethics: 1249 rows
- 14. Environment / energy / land use: 19 rows

## Extraction Notes
- Extraction is intentionally broad and line-level so downstream agents can deduplicate rather than lose existing research.
- Candidate folders are read first. Election files, reports, old V1 data, and the candidate's v2 TypeScript file are included when they mention the candidate by slug or name.
- Generated matrix/audit artifacts are excluded to avoid self-referential evidence loops.
