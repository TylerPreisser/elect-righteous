# Elect Righteous — CLAUDE.md

## WHAT
Personal local-election intelligence system for Hays, Kansas: a multi-agent research pipeline
scrapes public records and statements per candidate, reconciles evidence, and renders static
voter-guide pages (no grading, no partisan framing) for Kansas races. 54 candidates across
federal/state/local races; the site pre-renders ~127 static pages (home, about, 12 elections,
54 candidate pages, 54 sources pages). The UI is a static-export Next.js site deployed to
Cloudflare Pages (custom domain, **current production**) and GitHub Pages
(`https://tylerpreisser.github.io/elect-righteous/`, legacy, still auto-deploys on push to `main`).
Repo: `https://github.com/TylerPreisser/elect-righteous`. Design inspiration: celebratejesus.org
(Celebration Community Church, Hays) + a Beehiiv newsletter aesthetic — Montserrat headings,
Lato body, Source Serif 4 quotes.

## WHY
Present verifiable facts about every candidate — incumbent or long-shot — with equal depth
and identical scrutiny, so a voter reads primary sources instead of a score. Judeo-Christian
values shape *what gets researched*, never *how it's voiced*: no scripture on the page, no
"biblical/unbiblical" labels, no partisan vocabulary. See `IDENTITY.md`, `AGENTS.md:381-490`.

## STACK
- UI: Next.js 16 (App Router, `output: "export"`), React 19, TypeScript 6, Tailwind 4 —
  `ui/package.json`. Static export only: no server runtime, no API routes.
- Also in `ui/`: Framer Motion (collapsibles/transitions), Lucide React (icons), Fuse.js
  (client-side fuzzy search, not yet implemented), gray-matter (build-time report parsing).
- Root pipeline: standalone Node scripts (`scripts/*.mjs`) and one orphaned stdlib-only
  Python script (`scripts/enrich-candidates.py`) — no root `package.json`, no task runner,
  no Python venv anywhere in the repo.
- `memory/orchestration/STATE.md` is the single source of truth for pipeline state.

## COMMANDS (real, from `ui/package.json`)
- `cd ui && npm run dev` — local dev server (localhost:3000, hot reload).
- `cd ui && npm run build` — GitHub Pages build (`basePath: /elect-righteous`).
- `cd ui && npm run build:cloudflare` — custom-domain build (`NEXT_PUBLIC_SITE_URL` set,
  no basePath) — this is the current production build.
- `cd ui && npm run deploy:cloudflare` — `wrangler pages deploy out --project-name
  elect-righteous`. LIVE DEPLOY — hook-blocked without `ALLOW_DEPLOY=1`
  (`.claude/hooks/block-live-deploy.sh`).
- GitHub Pages leg auto-deploys on push to `main` via `.github/workflows/deploy.yml`
  (`npm ci` → `npx next build` → upload `ui/out/`).
- `./scripts/launch.command "Hays, Kansas"` — one-click pipeline launch (dated output dirs,
  agents run sequentially). `bash scripts/consolidate-intel.sh` merges report findings into
  `memory/candidates/{slug}/raw-dump.md`.
- No `lint` script exists (eslint is a devDependency but unwired). No test framework.
- `cd ui && npx tsc --noEmit` — verified clean during this rollout (2026-08-26). The build
  must compile with zero TypeScript errors.
- Declared, not executed in rollout — full validation gate per `AGENTS.md:992-1019`:
  `node scripts/phase2-inventory.mjs`, a `validateCandidateV2()` referential-integrity
  check, then `npm run build`.

## KEY DIRECTORIES
- `memory/orchestration/STATE.md` — current phase, candidate matrix, blockers; read first.
- `AGENTS.md` — the authoritative 26-agent V2 pipeline spec (evidence-matrix → source-tier
  validation → specialist writers → assembly → editorial → deploy). This file does not
  duplicate it — read AGENTS.md before touching the pipeline.
- `memory/elections/*.md`, `memory/candidates/{slug}/` (`profile.md`, `raw-dump.md`,
  `opposition-research.md`) — all raw research data.
- `ui/src/data/v2/` — per-candidate compiled TS modules (`<slug>.ts` exports a
  `<SLUG>_V2` constant), barrel-exported from `index.ts`; `types-v2.ts` holds
  `validateCandidateV2()`.
- `scripts/*.mjs` — pipeline build tools, invoked as `node scripts/<name>.mjs` from repo
  root (no task runner).
- `docs/PROJECT_MANUAL-2026-05.md` — the archived 983-line project manual (former root
  CLAUDE.md). **Stale in places** (V1 7-agent pipeline, GitHub-Pages-only deploy, Desktop
  paths) but it is the only record of the candidate roster, `CandidateFull`/`Elections` data
  model, design system, deployment checklist, per-candidate research findings and glossary.
  Read it for those; trust this file and `AGENTS.md` over it on architecture and deploy.
- `DECISIONS/` — repo-scoped ADRs.

## CONVENTIONS
- Kebab-case candidate slug/file ↔ `SCREAMING_SNAKE_CASE_V2` exported constant
  (`ui/src/data/v2/index.ts`).
- Every pipeline script computes its own root via `import.meta.url`, never `process.cwd()`
  — keep new scripts runnable from any directory.
- Every agent task writes `run-state.json` + `handoff.md` before stopping — the next task's
  only context (`AGENTS.md:180-233`).
- Broad profile research goes to `raw-dump.md`; adverse public-record research to a separate
  `opposition-research.md`. Both feed the article — don't amplify controversies over
  achievements.

## NON-NEGOTIABLE CONTENT RULES (full text: `AGENTS.md:381-490`)
- No grading system: no badges, scores, Strong/Moderate/Weak labels, or red/green flags
  anywhere. The dead grading components are `values-badge.tsx`, `consistency-badge.tsx`,
  `flag-alert.tsx`, `values-alignment-chart.tsx`, `comparison-table.tsx` — don't wire them back.
- **Equal treatment:** a long-shot Democrat in KS-01 gets the same research depth as the
  Republican incumbent. Nobody is skipped or left on stub data.
- Every claim traces to a cited URL with publication + date; no citation by title alone.
  Benchmark: the Tracey Mann template candidate carries 40+ sources; every candidate should.
- Verbatim quotes only — never paraphrase and present it as a direct quote. Carry text,
  source, date (YYYY-MM-DD), url, topic; `[sic]` only for obvious errors.
- Church affiliation links go to the church's own official site (`ChurchInfo.url`), never a
  third-party profile.
- Campaign finance = narrative paragraph **plus** a structured `Name | Amount | [Description]`
  table, plus an undisclosed-data note when incomplete. Prose alone is not enough.
- Plain English at an 8th-grade level: no insider jargon, expand every acronym on first use.
- Zero scripture quotes and no "biblical/unbiblical" labels in candidate-facing text.
- Symmetry test on every narrative sentence: would it read identically about the
  opposite-party candidate given the same evidence? (`CODEX_HANDOFF.md:174-180`)
- A KPDC account alone is NOT proof of candidacy — a recurring past error (`AGENTS.md:368`).
- "In Their Own Words" sections are banned (`AGENTS.md:445`) — don't resurrect them.

## KANSAS ELECTION CALENDAR (hard-won; don't re-derive)
Primaries are the first Tuesday in August; general elections the first Tuesday after the first
Monday in November. **All 125 KS House seats are up every 2 years; all 40 KS Senate seats are up
in 2028, NOT 2026.** Municipal and school-board elections run in odd years — 2027 for Hays and
USD 489.

## ANTI-PATTERNS
- Don't reintroduce server routes/APIs — this is a static export site.
- Don't run a real Cloudflare deploy or force-push `main` without `ALLOW_DEPLOY=1` —
  hook-blocked.
- Don't edit an Accepted ADR in `DECISIONS/` — write a superseding one
  (`ADR_SUPERSEDE=1` only, owner's say-so).
- Don't treat the old `agents/*/PROMPT.md` V1 folders as current architecture — AGENTS.md's
  V2 26-agent spec supersedes them; the V1 folders are legacy, not deleted.
- Don't trust any `/Users/tylerpreisser/Desktop/elect-righteous/` path in older docs — the
  repo lives at `/Users/tylerpreisser/Projects/Coding Projects/elect-righteous`.

## GLOBALLY WIRED (no per-repo setup needed)
GitHub MCP and Context7 MCP are connected globally. graphify knowledge graph is wired
(`graphify-out/`, gitignored) — query it first for codebase-structure questions.
