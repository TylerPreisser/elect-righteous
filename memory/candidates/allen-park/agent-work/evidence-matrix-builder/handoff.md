# Handoff — evidence-matrix-builder — allen-park — 2026-05-20

## What I Did
Read 3714 raw evidence rows and wrote 1799 deduplicated, reconciled rows to evidence-matrix.json.

## Key Findings
- 1915 duplicate raw rows were absorbed into canonical rows.
- 111 rows are marked use.
- 36 rows are marked use-with-caveat.
- No rows are marked contradicted.
- 32 rows are source-only.
- 402 rows are retained as reject for auditability.
- 528 rows currently have no issue mapping and should be treated as background/source-trail material unless later mapped by a specialist.

## Files Created or Modified
- memory/candidates/allen-park/evidence-matrix.json: final reconciled evidence matrix.
- memory/candidates/allen-park/agent-work/evidence-matrix-builder/notes.md: deduplication, confidence, issue-coverage, and rejection notes.
- memory/candidates/allen-park/agent-work/evidence-matrix-builder/run-state.json: execution metadata.
- memory/candidates/allen-park/agent-work/evidence-matrix-builder/handoff.md: this handoff.

## What the Next Task Should Do
Run social-footprint-analyst for allen-park, using social-harvest.md plus social/social-like/social-follow/social-comment/public-absence rows from evidence-matrix.json. Then run source-tier-validator for this same candidate.

## Blockers
- None.

## Assumptions
- Final matrix keeps rejected/non-substantive rows with useDecision=reject so future reviewers can see what was filtered and why.
- Existing raw source tier labels were used as the starting point and only behaviorally downgraded through confidence/useDecision here; full URL health and tier correction belongs to source-tier-validator.
