# Legal Accuracy Reviewer Handoff — 2026-05-20

## What Changed

- Added guards in `scripts/compile-v2-yaml.mjs` so public issue cards do not use internal-only evidence as stated-position text.
- Filtered table-like source rows and `narrative:` rows out of rendered action/social evidence.
- Added a candidate-relevance URL guard to stop one candidate's rendered card from using another candidate's article URL.
- Added a stricter lawsuit/source guard: lawsuit-style URLs are not rendered unless the URL names the current candidate.
- Regenerated all 70 rendered v2 candidate files.

## Validation

- `validateCandidateV2`: pass for 70 candidates.
- Narrative presence check: pass for all required sections.
- Cross-candidate lawsuit URL scan: 0 suspect rendered references.
- `npx tsc --noEmit --incremental false`: pass.
- `npm run build`: pass, 232 static pages.

## Remaining Risk

- This is not a full human legal review. It removes a concrete class of unsafe rendering but does not certify every claim.
- Some risk terms remain in valid contexts, such as election fraud statements, illegal immigration, law enforcement, criminal justice issue labels, and source titles.
- Full professional narrative edit, legal read, and symmetry test still need to run before deployment.
