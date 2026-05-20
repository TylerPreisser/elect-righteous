# Public Wording Cleanup Notes

## What Changed
- Replaced long no-evidence issue-card language with the concise sentence Tyler requested: "The reviewed public record did not identify a source-backed candidate statement or documented action for [issue]."
- Removed the public-facing "Official / Reported Actions" label and standardized issue/card action labels around "Public Record" and "public record item."
- Changed issue-card social sections to "Social / Online Observations."
- If an issue has social observations but no public-record actions, the social observation section is shown without forcing an empty action section above it.
- Shortened the empty action fallback to "No source-backed public action was identified for this issue."
- Added generator sanitizers for process phrases and first-person research notes so regenerated candidate data does not surface language like "this pass," "on disk," "rendered profile," "I did not find," or "I treated it as."
- Regenerated all 81 `ui/src/data/v2/*.ts` files from the YAML sources.

## Validation
- YAML parse passed.
- `node scripts/phase2-inventory.mjs` passed: 81 rendered v2 candidate pages, no missing UI entries.
- `validateCandidateV2` passed for 81 candidates.
- `npx tsc --noEmit --incremental false` passed.
- `npm run build` passed and generated 266 static pages.
- Targeted scan of `ui/src/data/v2`, active components, app source, and built `ui/out` HTML/TXT found no targeted internal/process phrases. The remaining "do not imply" occurrence is a legitimate public-source disclaimer: "Retweets do not imply endorsement."

## Residual Caveats
- This pass fixed the public wording and leakage layer. It did not perform a full manual record audit against USD 489 minutes or every local government primary record.
- Correction form delivery is still not proven because the last controlled FormSubmit live test returned Cloudflare/FormSubmit 521.
