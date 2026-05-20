# Notes — candidate-evidence-miner — roger-marshall — 2026-05-20

## Extraction Scope
Read 24 input files completely from disk and extracted candidate-relevant non-empty evidence lines into evidence-matrix-raw.json. Candidate-folder files and candidate-specific compiled files were extracted line-by-line. Broad reports were read completely and extracted by candidate section or direct candidate mention.

## Row Counts
- Raw evidence rows: 10037
- Input files read: 24
- Caveat/conflict/source-limitation rows: 113
- Internal-memory rows without public URL on the line: 6811

## Evidence Type Counts
- ballot status: 888
- biography: 5390
- campaign statement: 546
- church/worship: 397
- controversy: 70
- donor/funding: 550
- endorsement: 128
- legal/court: 231
- meeting record: 107
- public absence: 133
- public office: 391
- social comment: 32
- social follow: 37
- social post: 471
- voting record: 666

## Source Tier Counts
- internal-memory: 7698
- primary: 558
- secondary: 1412
- social: 369

## Issue Mapping Counts
- Issue 1: 212
- Issue 2: 34
- Issue 3: 355
- Issue 4: 463
- Issue 5: 314
- Issue 6: 332
- Issue 7: 139
- Issue 8: 785
- Issue 9: 981
- Issue 10: 1133
- Issue 11: 141
- Issue 12: 398
- Issue 13: 1166
- Issue 14: 61

## Matrix-Builder Watch Items
- Many rows are intentionally duplicated across raw-dump, raw-dump-v2, v2-issues.yaml, and compiled TypeScript; deduplicate by source quality and claim specificity.
- Internal-memory rows should not be public-facing until tied to a primary, candidate-controlled, reliable secondary, or social source.
- Rows marked use-with-caveat contain filing-status caveats, source limitations, blocked readbacks, public absences, or possible conflicts.
