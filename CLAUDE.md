# Elect Righteous — CLAUDE.md

## WHAT
Personal local-election intelligence system: a multi-agent research pipeline scrapes public
records and statements per candidate, reconciles evidence, and renders static voter-guide
pages (no grading, no partisan framing) for Kansas races. The UI is a static-export Next.js
site deployed to Cloudflare Pages (custom domain, current production) and GitHub Pages
(legacy, still auto-deploys on push to `main`).

## WHY
Present verifiable facts about every candidate — incumbent or long-shot — with equal depth
and identical scrutiny, so a voter reads primary sources instead of a score. Judeo-Christian
values shape *what gets researched*, never *how it's voiced*: no scripture on the page, no
"biblical/unbiblical" labels, no partisan vocabulary. See `IDENTITY.md`, `AGENTS.md:381-490`.

## STACK
- UI: Next.js 16 (App Router, `output: "export"`), React 19, TypeScript 6, Tailwind 4 —
  `ui/package.json`. Static export only: no server runtime, no API routes.
- Root pipeline: standalone Node scripts (`scripts/*.mjs`) and one orphaned stdlib-only
  Python script (`scripts/enrich-candidates.py`) — no root `package.json`, no task runner,
  no Python venv anywhere in the repo.
- `memory/orchestration/STATE.md` is the single source of truth for pipeline state.

## COMMANDS (real, from `ui/package.json`)
- `cd ui && npm run dev` — local dev server.
- `cd ui && npm run build` — GitHub Pages build (`basePath: /elect-righteous`).
- `cd ui && npm run build:cloudflare` — custom-domain build (`NEXT_PUBLIC_SITE_URL` set,
  no basePath) — this is the current production build.
- `cd ui && npm run deploy:cloudflare` — `wrangler pages deploy out --project-name
  elect-righteous`. LIVE DEPLOY — hook-blocked without `ALLOW_DEPLOY=1`
  (`.claude/hooks/block-live-deploy.sh`).
- GitHub Pages leg auto-deploys on push to `main` via `.github/workflows/deploy.yml`.
- No `lint` script exists (eslint is a devDependency but unwired). No test framework.
- `cd ui && npx tsc --noEmit` — verified clean during this rollout (2026-08-26).
- Declared, not executed in rollout — full validation gate per `AGENTS.md:992-1019`:
  `node scripts/phase2-inventory.mjs`, a `validateCandidateV2()` referential-integrity
  check, then `npm run build`.

## KEY DIRECTORIES
- `memory/orchestration/STATE.md` — current phase, candidate matrix, blockers; read first.
- `AGENTS.md` — the authoritative 26-agent V2 pipeline spec (evidence-matrix → source-tier
  validation → specialist writers → assembly → editorial → deploy). This file does not
  duplicate it — read AGENTS.md before touching the pipeline.
- `ui/src/data/v2/` — per-candidate compiled TS modules (`<slug>.ts` exports a
  `<SLUG>_V2` constant), barrel-exported from `index.ts`; `types-v2.ts` holds
  `validateCandidateV2()`.
- `scripts/*.mjs` — pipeline build tools, invoked as `node scripts/<name>.mjs` from repo
  root (no task runner).
- `DECISIONS/` — repo-scoped ADRs (agent-kit format); GLOBAL `~/.claude-shared/DECISIONS/`
  wins on conflict.

## CONVENTIONS
- Kebab-case candidate slug/file ↔ `SCREAMING_SNAKE_CASE_V2` exported constant
  (`ui/src/data/v2/index.ts`).
- Every pipeline script computes its own root via `import.meta.url`, never `process.cwd()`
  — keep new scripts runnable from any directory.
- Every agent task writes `run-state.json` + `handoff.md` before stopping — the next task's
  only context (`AGENTS.md:180-233`).

## NON-NEGOTIABLE CONTENT RULES (full text: `AGENTS.md:381-490`)
- No grading system: no badges, scores, or Strong/Moderate/Weak labels anywhere.
- Every claim traces to a cited URL with publication + date; no citation by title alone.
- Verbatim quotes only — never paraphrase and present it as a direct quote.
- Zero scripture quotes and no "biblical/unbiblical" labels in candidate-facing text.
- Symmetry test on every narrative sentence: would it read identically about the
  opposite-party candidate given the same evidence? (`CODEX_HANDOFF.md:174-180`)
- A KPDC account alone is NOT proof of candidacy — a recurring past error (`AGENTS.md:368`).
- "In Their Own Words" sections are banned (`AGENTS.md:445`) — don't resurrect them.

## ANTI-PATTERNS
- Don't reintroduce server routes/APIs — this is a static export site.
- Don't run a real Cloudflare deploy or force-push `main` without `ALLOW_DEPLOY=1` —
  hook-blocked.
- Don't edit an Accepted ADR in `DECISIONS/` — write a superseding one
  (`ADR_SUPERSEDE=1` only, owner's say-so).
- Don't treat the old `agents/*/PROMPT.md` V1 folders as current architecture — AGENTS.md's
  V2 26-agent spec supersedes them; the V1 folders are legacy, not deleted.

## GLOBALLY WIRED (no per-repo setup needed)
GitHub MCP and Context7 MCP are connected globally. graphify knowledge graph is wired
(`graphify-out/`, gitignored) — query it first for codebase-structure questions.
