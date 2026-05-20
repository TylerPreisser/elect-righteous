# Notes — master-orchestrator — 2026-05-20

## Inputs Read
- AGENTS.md before replacement
- /Users/tylerpreisser/Downloads/elect-righteous-master-prompt.md
- memory/orchestration/STATE.md
- ui/src/data/elections.ts
- ui/src/data/v2/*.ts
- ui/src/components/v2/CandidateV2Profile.tsx
- ui/src/app/candidates/[slug]/client.tsx
- ui/src/data/candidates.ts

## Observations
- memory/orchestration/agent-runs did not exist before this run.
- Existing v2 data renders and validates under the current TypeScript validator.
- The master prompt requires a stricter evidence matrix pipeline that has not been run yet.
- All 70 candidates have compiled v2 TypeScript files, but none has the required evidence matrix files.
- All 70 candidates currently have fewer than 14 issue entries.
- The forbidden public UI label was present before this run and was patched.

## Decisions
- Installed the downloaded prompt as AGENTS.md because the prompt declares AGENTS.md as the permanent cold-start instruction file.
- Set Current Phase to Phase 2: Evidence Matrixing because that is the earliest incomplete hard requirement under the new master prompt.
- Did not fabricate evidence matrices or auto-pad issue arrays; the prompt requires extraction from source artifacts first.
