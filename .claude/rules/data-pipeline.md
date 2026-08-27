---
paths: ["scripts/**", "AGENTS.md", "memory/**", "agents/**"]
---

# Data-pipeline conventions

- Read `memory/orchestration/STATE.md` (current phase, candidate matrix, blockers) and the
  latest `handoff.md` before doing any pipeline work — every task is a cold start with zero
  memory of prior tasks (`AGENTS.md:15-90`).
- Every agent task writes `run-state.json` (`inputs_read`, `files_written`, `commands_run`,
  `blockers`, `next_steps`) and a prose `handoff.md` before stopping — it is the *only*
  context the next task inherits (`AGENTS.md:180-233`). On an unresolved error, write
  `blockers.md`, update STATE.md, commit, and stop — never guess past a blocker.
- Source priority order for any claim: official filings > candidate-controlled statements >
  reliable reporting > social/online signals > internal memory files (pointer-only, never a
  primary source) (`AGENTS.md:409-416`).
- Social-media evidence must be framed as signal, never as a confirmed position — no
  "[Candidate] supports [Policy]" unless there's an explicit statement, vote, or action
  behind it (`AGENTS.md:418-432`).
- "No Fake Completion": a thin profile is only acceptable with a documented search trail and
  an explicit in-profile disclosure sentence — never silently ship a stub
  (`AGENTS.md:399-407`).
- `scripts/*.mjs` are invoked directly as `node scripts/<name>.mjs` from repo root — no task
  runner. New scripts should compute their own root via `import.meta.url`, not
  `process.cwd()`, so they stay runnable from anywhere (established pattern in every existing
  script).
- The V1 `agents/<name>/PROMPT.md` folders are the legacy 7-agent pipeline; the current
  26-agent V2 architecture is defined entirely inline in `AGENTS.md` and has no folders of
  its own — don't confuse the two when asked to "update an agent."
