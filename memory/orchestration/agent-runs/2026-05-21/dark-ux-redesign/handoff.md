# Dark UX Redesign Handoff — 2026-05-21

## What Changed
- Reworked the visible product into a unified dark civic-intelligence interface across home, About, candidates, elections, race detail, candidate dossiers, source trails, cards, forms, badges, and header.
- Rewrote the About page around public office, civic trust, source-backed records, and Romans 13:3-4 instead of Isaiah 1:17.
- Replaced the stale Allen Park V2 demo route with the production V2 dossier renderer.
- Preserved the requested content structure: Who They Are appears before the issue matrix, issue dossiers are collapsed by default, candidate/election cards use See more, and source/social signals remain public but caveated.

## QA
- Captured 20 screenshots across 10 representative routes in desktop and mobile viewports.
- Screenshot QA found 0 horizontal-overflow failures and 0 forbidden text hits.
- YAML parse, inventory, V2 validation, TypeScript, npm run build, and npm run build:cloudflare all passed.
- Built output scan found no targeted internal/process copy, no Isaiah 1:17, no forbidden section labels, and no Preisser Tech.

## Files Changed
- `ui/src/app/page.tsx`
- `ui/src/app/about/page.tsx`
- `ui/src/app/candidates/page.tsx`
- `ui/src/app/elections/page.tsx`
- `ui/src/app/elections/[slug]/page.tsx`
- `ui/src/app/candidates/[slug]/sources/page.tsx`
- `ui/src/app/candidates/allen-park-v2/page.tsx`
- `ui/src/components/**`
- `ui/src/app/globals.css`
- `memory/orchestration/ui-qa-2026-05-21-dark/`
- `memory/orchestration/STATE.md`

## Next
- Commit/push these changes.
- Verify GitHub Pages deploy.
- Run Wrangler Cloudflare Pages deploy and verify `https://electrighteous.com/`.
- Continue the separate editorial/legal/local-record backlog in STATE.md; this pass was UI/copy/QA, not a new full candidate-record audit.
