# Specialist Profile Writers Handoff — 2026-05-20

## What Changed

- Extended `scripts/compile-v2-yaml.mjs` to derive conservative narrative sections from evidence matrices.
- Regenerated all 70 rendered v2 candidate TypeScript files.
- Every candidate now has:
  - `whoTheyAre`
  - `recordSummary`
  - `campaignFinance`
  - `whereTheyWorship`
  - `socialResearchNote`
  - 14 rendered issue cards

## Guardrails Added

- Sparse biography and record sections now say the record is thin instead of inventing details.
- Faith/worship text explicitly states that no policy position is inferred.
- Campaign finance fallbacks state that no total/donor ledger was safely separated when the evidence is thin.
- Social notes keep social evidence framed as observation, not belief.
- Metadata-like rows such as generated timestamps, source-field labels, and internal normalization comments are filtered out of fallback narrative text.

## Validation

- YAML parse: pass.
- Phase 2 inventory: pass.
- Runtime validation: pass for 70 candidates.
- Narrative presence check: pass, 0 missing narrative sections.
- TypeScript: pass.
- Production build: pass, 232 static pages.

## Remaining Work

- Run professional narrative editing, legal/accuracy review, and symmetry review across all rendered profiles.
- Run live URL/source-health checks for source audit records.
- Verify correction form routing.
- Do not deploy until editorial/legal/form/source-health gates are resolved or explicitly documented.
