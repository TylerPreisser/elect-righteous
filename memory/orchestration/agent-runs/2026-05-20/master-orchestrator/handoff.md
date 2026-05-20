# Handoff — master-orchestrator — 2026-05-20

## What I Did
Installed the downloaded master prompt as AGENTS.md, created the first required agent-run folder, ran the master prompt validation gates, patched the remaining forbidden public UI label, wrote the master plan, and rebuilt STATE.md into the required structure.

## Key Findings
The repo is build-clean and has 70 rendered v2 candidate profiles, but it is not compliant with the new master prompt pipeline. No candidate has evidence-matrix-raw.json, evidence-matrix.json, social-evidence-matrix.json, or source-audit.md. Every v2 candidate currently has fewer than the required 14 fixed issue entries.

## Files Created or Modified
- AGENTS.md: replaced with the master prompt.
- memory/orchestration/STATE.md: converted to the required state format.
- memory/orchestration/master-plan-2026-05-20.md: wrote phase assessment and next worker map.
- memory/orchestration/agent-runs/2026-05-20/master-orchestrator/*: created run-state, notes, outputs, blockers, and handoff.
- ui/src/components/v2/CandidateV2Profile.tsx: changed public section title to Relevant Social / Online Signals.
- ui/src/app/candidates/[slug]/client.tsx: changed legacy public section title/comment.
- ui/src/data/candidates.ts: changed legacy comment.

## What the Next Task Should Do
Run candidate-evidence-miner for roger-marshall, damon-anderson, and jason-hart. Read every candidate artifact listed in AGENTS.md for those slugs, plus relevant report and election files, and write evidence-matrix-raw.json plus each candidate-specific agent-work/candidate-evidence-miner folder.

## Blockers for Next Task
None for the first candidate-evidence-miner batch. Do not run deploy or final validation until the evidence matrix and fixed 14-issue pipeline has been completed.

## Decisions I Made That Could Be Questioned
I set Current Phase to Phase 2: Evidence Matrixing even though the site already has compiled v2 profiles, because the new master prompt makes evidence matrices a prerequisite and the repo has zero evidence-matrix.json files. I did not auto-generate placeholder matrices or pad issue arrays because that would violate the prompt's file-first evidence extraction requirement.
