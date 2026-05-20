# UI/UX Redesign Notes - 2026-05-20

## What Changed
- Built a stronger dossier-style visual system around dark intelligence headers, source metrics, compact source-mix bars, and scannable issue cards.
- Made the candidate index and election pages more data-rich without adding marketing-style filler.
- Reworked source trails into grouped evidence libraries instead of long flat link lists.
- Improved mobile touch targets in issue cards, source chips, correction form controls, election cards, and candidate cards.
- Removed the floating Preisser badge and kept the approved Preisser Solutions CTA in the footer.
- Added a shared profile-metrics helper used by cards, election rows, and dossier headers.
- Sanitized compiler output so public v2 data no longer exposes process/tool language such as "this environment" or worker/orchestrator notes.

## QA Findings
- Initial overflow sweep found 26 failures, all in mobile source trail pages.
- Root cause was source-card content forcing max-content width in grid/flex children.
- Fixed by adding min-width/max-width constraints and anywhere wrapping to source page sections/cards/claims.
- Final overflow sweep passed 534 viewport checks with 0 failures.

## Screenshot Archive
- Full-page mobile and desktop screenshots exist for all 267 generated routes.
- Final screenshot archive: `memory/orchestration/ui-screenshots-2026-05-20/after/`.
- The archive is about 467 MB and was not staged for commit.
