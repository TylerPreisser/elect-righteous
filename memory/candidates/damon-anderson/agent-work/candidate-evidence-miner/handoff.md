# Handoff — candidate-evidence-miner — damon-anderson — 2026-05-20

## What I Did
Read 9 input files for Damon Anderson and extracted 667 raw evidence rows into memory/candidates/damon-anderson/evidence-matrix-raw.json. The extraction preserved line-level evidence from candidate files, existing v2 YAML, compiled TypeScript, the Senate election file, and relevant reports.

## Key Findings
- Extracted 667 rows.
- Found 5 rows that mention caveats, conflicts, source limitations, blocked readbacks, public absences, or recheck needs.
- Found 597 internal-memory rows without a public URL on the line; these need source anchoring before publication.
- Evidence is deliberately redundant; the matrix-builder should deduplicate and choose the best source.

## Files Created or Modified
- memory/candidates/damon-anderson/evidence-matrix-raw.json: raw extracted evidence rows.
- memory/candidates/damon-anderson/agent-work/candidate-evidence-miner/run-state.json: run state.
- memory/candidates/damon-anderson/agent-work/candidate-evidence-miner/notes.md: extraction notes and counts.
- memory/candidates/damon-anderson/agent-work/candidate-evidence-miner/outputs.md: output list.
- memory/candidates/damon-anderson/agent-work/candidate-evidence-miner/handoff.md: this handoff.

## What the Next Task Should Do
Run evidence-matrix-builder for damon-anderson. Use evidence-matrix-raw.json as input, deduplicate repeated claims, resolve caveats, assign final confidence and use decisions, and write memory/candidates/damon-anderson/evidence-matrix.json.

## Blockers for Next Task
None.

## Decisions I Made That Could Be Questioned
Broad reports were read completely but extracted by candidate section or direct candidate mention, while candidate-folder files were extracted line-by-line because they are already candidate-specific. This keeps the raw matrix focused without pretending broad report sections about other candidates are evidence for Damon Anderson.
