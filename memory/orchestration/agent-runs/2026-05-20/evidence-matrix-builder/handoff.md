# Handoff — evidence-matrix-builder — 2026-05-20

## What I Did
Built final evidence-matrix.json files for roger-marshall, damon-anderson, jason-hart from the raw line-level matrices produced by candidate-evidence-miner.

## Key Findings
- roger-marshall: 10037 raw rows → 6188 final rows; use decisions {"use":371,"use-with-caveat":140,"source-only":202,"background-only":4393,"reject":1082}.
- damon-anderson: 667 raw rows → 343 final rows; use decisions {"use":5,"use-with-caveat":5,"source-only":4,"background-only":221,"reject":108}.
- jason-hart: 5407 raw rows → 3561 final rows; use decisions {"use":186,"use-with-caveat":117,"source-only":97,"background-only":2530,"reject":631}.

## Files Created or Modified
- memory/candidates/roger-marshall/evidence-matrix.json: final reconciled evidence matrix.
- memory/candidates/damon-anderson/evidence-matrix.json: final reconciled evidence matrix.
- memory/candidates/jason-hart/evidence-matrix.json: final reconciled evidence matrix.
- memory/candidates/roger-marshall/agent-work/evidence-matrix-builder/*: candidate-specific run files.
- memory/candidates/damon-anderson/agent-work/evidence-matrix-builder/*: candidate-specific run files.
- memory/candidates/jason-hart/agent-work/evidence-matrix-builder/*: candidate-specific run files.
- memory/orchestration/agent-runs/2026-05-20/evidence-matrix-builder/*: batch run files.
- scripts/build-evidence-matrix.mjs: reusable builder used for this batch.

## What the Next Task Should Do
Run social-footprint-analyst for roger-marshall, damon-anderson, and jason-hart, then run source-tier-validator for the same three candidates.

## Blockers for Next Task
- None.

## Decisions I Made That Could Be Questioned
The builder retained rejected/non-substantive rows in the final matrix with useDecision=reject rather than deleting them. This makes rejection auditable and avoids losing extracted research, at the cost of larger matrix files.
