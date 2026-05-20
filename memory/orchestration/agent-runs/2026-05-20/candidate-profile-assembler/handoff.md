# Candidate Profile Assembler Handoff — 2026-05-20

## What Changed

- Patched `scripts/compile-v2-yaml.mjs` so rendered v2 candidate data consumes `fixed_issue_matrix` and `source-audit.json`.
- Regenerated all 70 files under `ui/src/data/v2/*.ts`.
- Every rendered candidate now has exactly 14 issue cards, matching the required fixed issue list.
- Source IDs in rendered issue statements, actions, and social signals now resolve against public URL-backed source registry entries.
- Social signals without public source links remain preserved on disk but are not surfaced as public UI source-backed social evidence in this compiler pass.

## Validation

- YAML parse: pass.
- Phase 2 inventory: pass, 70 rendered v2 candidates.
- Runtime v2 validation: pass, 70 candidates, 0 source-reference errors, 0 bad issue counts.
- Forbidden active UI labels: pass under `ui/src`, `ui/public`, and active compile scripts.
- TypeScript: pass.
- Production build: pass, 232 static pages generated.

## Caveats

- This is the mechanical assembler pass for rendered 14-issue cards, not the final narrative-writing pass.
- The following candidates remain thin after public-source-backed assembly and need explicit editorial/research follow-up: `adam-hamilton`, `brandon-adams`, `doug-billings`, `eric-lund`, `kevin-latz`, `mark-lane`, `michelle-cunningham`, `ric-koehn`, `sharilyn-ray`, `steven-jacob`.
- Live HTTP URL checking still has not been run; current source-tier validation is structural/domain based.
- Narrative profile specialist outputs remain pending: biography, record, funding, faith/worship, then legal/symmetry review.

## Next

Run biography-writer, record-writer, donor-funding-analyst, and faith-worship-researcher enrichment for all 70 candidates without disturbing the fixed 14-issue issue-card structure now rendered in `ui/src/data/v2`.
