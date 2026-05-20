# Notes — candidate-evidence-miner — jason-hart — 2026-05-20

## Extraction Scope
Read 16 input files completely from disk and extracted candidate-relevant non-empty evidence lines into evidence-matrix-raw.json. Candidate-folder files and candidate-specific compiled files were extracted line-by-line. Broad reports were read completely and extracted by candidate section or direct candidate mention.

## Row Counts
- Raw evidence rows: 5407
- Input files read: 16
- Caveat/conflict/source-limitation rows: 47
- Internal-memory rows without public URL on the line: 3773

## Evidence Type Counts
- ballot status: 533
- biography: 2675
- campaign statement: 466
- church/worship: 121
- controversy: 39
- donor/funding: 323
- endorsement: 72
- legal/court: 221
- meeting record: 27
- public absence: 67
- public office: 177
- social comment: 5
- social follow: 27
- social post: 446
- voting record: 208

## Source Tier Counts
- internal-memory: 4107
- primary: 286
- secondary: 539
- social: 475

## Issue Mapping Counts
- Issue 1: 100
- Issue 2: 51
- Issue 3: 214
- Issue 4: 133
- Issue 5: 122
- Issue 6: 191
- Issue 7: 47
- Issue 8: 461
- Issue 9: 486
- Issue 10: 536
- Issue 11: 217
- Issue 12: 221
- Issue 13: 766
- Issue 14: 25

## Matrix-Builder Watch Items
- Many rows are intentionally duplicated across raw-dump, raw-dump-v2, v2-issues.yaml, and compiled TypeScript; deduplicate by source quality and claim specificity.
- Internal-memory rows should not be public-facing until tied to a primary, candidate-controlled, reliable secondary, or social source.
- Rows marked use-with-caveat contain filing-status caveats, source limitations, blocked readbacks, public absences, or possible conflicts.
