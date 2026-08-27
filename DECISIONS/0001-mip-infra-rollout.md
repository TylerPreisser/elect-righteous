# ADR-0001: Adopt MIP infra rollout (CLAUDE.md, path-scoped rules, REVIEW.md, plans/thoughts scaffolding)
Status: Accepted — 2026-08-26 (MIP build, GLOBAL ADR-0007) — Owner: Tyler Preisser
Supersedes / Superseded by: —

## Context
- Tyler ran a Master Infrastructure Prompt rollout across every repo on this Mac on
  2026-08-26 (GLOBAL ADR-0007), standardizing `CLAUDE.md`, `.claude/rules/`, `REVIEW.md`, a
  `DECISIONS/` ADR record of the adoption itself, and `plans/ACTIVE.md` + `thoughts/`
  scaffolding across all his repos.
- Tyler explicitly chose scope "All repos incl. client" for this rollout — elect-righteous
  is a personal repo and is in scope under that decision.
- This repo already had an agent-kit `DECISIONS/` folder (`0000-template.md`, `README.md`,
  no numbered ADRs yet) and hook-enforced ADR immutability
  (`.claude/hooks/protect-adr-and-secrets.sh`), so this adoption is recorded here per that
  existing convention rather than as a bare `decisions.md`.
- The prior `CLAUDE.md` (1014 lines) was frozen at 2026-05-11 and materially stale versus
  live state — wrong repo path (`~/Desktop/elect-righteous/` vs. the actual
  `Projects/Coding Projects/elect-righteous`), wrong candidate counts, and a deploy story
  that said "GitHub Pages only, no custom domain" when Cloudflare (`electrighteous.com`) is
  now the live production target per `AGENTS.md:1060-1075`.

## Decision
1. `CLAUDE.md`, `.claude/rules/*.md`, `REVIEW.md`, `plans/ACTIVE.md`, and `thoughts/` are
   adopted per the MIP spec: `CLAUDE.md` is capped near 120 lines and WHAT/WHY/HOW
   structured; rules files are path-scoped and cover only conventions actually observed in
   the code. Because this is a UI repo (Next.js under `ui/`), a pinned Playwright
   `.mcp.json` entry is also adopted.
2. What is explicitly NOT allowed: inventing conventions not observed in the code; dropping
   any repo-specific fact, warning, or contract that existed in the prior `CLAUDE.md` (they
   were compressed into the new `CLAUDE.md` and the path-scoped rules, not deleted — see the
   non-negotiable content rules and anti-patterns sections).
3. No exception carved out.

## Consequences
- Future sessions read the new `CLAUDE.md` and `.claude/rules/*.md` instead of the old
  ~1000-line `CLAUDE.md`; the old file's stale facts (deploy story, repo path, candidate
  counts) are corrected, not carried forward as fact.
- Review agents use `REVIEW.md`'s evidence bar and repo-specific must-checks going forward.
- No cost beyond the one-time rewrite; public interfaces and code are untouched.

## Open / not yet decided
- Whether the compressed non-negotiable content rules in `CLAUDE.md` should eventually be
  lifted into their own ADR (so they get ADR immutability) is not decided here — they remain
  documentation, not a binding ADR, until Tyler says otherwise.

## Status note for review agents
This is an ACCEPTED decision: binding. Conformance to this adoption (code and docs that
follow the new `CLAUDE.md`/`REVIEW.md` instead of the old `CLAUDE.md`) is CONFORMANT, not a
defect.

## Revisit criteria
- Tyler explicitly changes the MIP spec (GLOBAL ADR-0007) or asks for this repo's infra
  files to be reworked.

## Sources
- GLOBAL ADR-0007 (MIP build, 2026-08-26)
- Rollout brief for this repo, MIP phase 5, 2026-08-26
