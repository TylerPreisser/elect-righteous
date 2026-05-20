# Master Plan — 2026-05-20

## Role
master-orchestrator

## Execution Decision
The operator instructed Codex to obey the downloaded master prompt exactly. The repo did not yet have the master prompt installed as AGENTS.md and did not yet have the required agent-run folder structure. This run installs the master prompt, creates the first agent-run handoff, rewrites STATE.md into the required structure, and records validation gate results.

## Phase Assessment
Phase 1 roster coverage is usable for the current pre-filing state because the May 20 candidate completeness audit added 70 rendered v2 profiles and corrected race groupings. Phase 2 evidence matrixing is the required next phase under the master prompt because no candidate has evidence-matrix-raw.json, evidence-matrix.json, social-evidence-matrix.json, or source-audit.md.

## Go / No-Go
No-go for deploy under the master prompt. Automated build gates pass, but the manual gates fail on required evidence matrices and fixed 14-issue coverage.

## Worker Assignment Map
Start with federal active 2026 races. Run candidate-evidence-miner on roger-marshall, damon-anderson, and jason-hart as the first small batch. After each raw evidence matrix exists, run evidence-matrix-builder, social-footprint-analyst, and source-tier-validator for the same slug before expanding the batch.

## Blocker Policy
Do not deploy. Do not mark profiles complete under the new master prompt until each candidate has a matrixed evidence chain and all 14 fixed issue entries.
