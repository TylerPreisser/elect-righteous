# Notes — candidate-evidence-miner — damon-anderson — 2026-05-20

## Extraction Scope
Read 9 input files completely from disk and extracted candidate-relevant non-empty evidence lines into evidence-matrix-raw.json. Candidate-folder files and candidate-specific compiled files were extracted line-by-line. Broad reports were read completely and extracted by candidate section or direct candidate mention.

## Row Counts
- Raw evidence rows: 667
- Input files read: 9
- Caveat/conflict/source-limitation rows: 5
- Internal-memory rows without public URL on the line: 597

## Evidence Type Counts
- ballot status: 127
- biography: 381
- campaign statement: 57
- donor/funding: 39
- endorsement: 1
- legal/court: 14
- public absence: 2
- public office: 27
- social follow: 2
- social post: 6
- voting record: 11

## Source Tier Counts
- internal-memory: 604
- primary: 23
- secondary: 6
- social: 34

## Issue Mapping Counts
- Issue 1: 16
- Issue 2: 16
- Issue 3: 27
- Issue 4: 1
- Issue 5: 33
- Issue 6: 21
- Issue 7: 1
- Issue 8: 54
- Issue 9: 37
- Issue 10: 87
- Issue 11: 23
- Issue 12: 21
- Issue 13: 151
- Issue 14: 1

## Matrix-Builder Watch Items
- Many rows are intentionally duplicated across raw-dump, raw-dump-v2, v2-issues.yaml, and compiled TypeScript; deduplicate by source quality and claim specificity.
- Internal-memory rows should not be public-facing until tied to a primary, candidate-controlled, reliable secondary, or social source.
- Rows marked use-with-caveat contain filing-status caveats, source limitations, blocked readbacks, public absences, or possible conflicts.
