# Handoff — UI Copy / UX / Form / Cloudflare QA

## What changed

- Removed visible internal/process copy from home, candidate profiles, issue cards, source panels, and generated candidate data.
- Added `ui/src/lib/public-copy.ts` and used it in profile renderers to normalize public-facing copy without deleting underlying source/social evidence.
- Moved `Who They Are` above `Where They Stand on Big Issues`.
- Kept issue sections collapsed by default and changed issue-card expansion copy to `See more`.
- Simplified issue-card labels to voter-facing prose: `Where they stand`, `What they have done`, and `Social/online observations`.
- Reworked donor/funding cards into a compact finance snapshot layout.
- Restored the desktop Preisser Solutions badge and prevented it from overlaying mobile content.
- Regenerated favicon/app icon assets with transparent corners.

## Validation

- YAML parse: pass
- Inventory: pass, 81 rendered v2 candidates
- V2 runtime validation: pass, 81 candidates
- TypeScript: pass
- `npm run build`: pass, 266 pages
- `npm run build:cloudflare`: pass, 266 pages
- Built HTML/text targeted leak scan: 0 matches
- Desktop/mobile screenshots captured in `memory/orchestration/ui-qa-2026-05-20-current/`

## Form status

The correction form is wired to `tyler@preissersolutions.com`, but FormSubmit rejected delivery until activation:

`This form needs Activation. We've sent you an email containing an 'Activate Form' link.`

Next step: click the activation email in Tyler's inbox and rerun the form test.

## Cloudflare status

Wrangler login was restarted twice for the requested profile switch. Both OAuth attempts timed out before Wrangler received the callback.

Current token can deploy Pages but lacks DNS edit/read access for custom-domain DNS fixes. Next step is to authenticate the Cloudflare profile/token that owns `electrighteous.com` with DNS read/edit permission, then validate `electrighteous.com` and `www.electrighteous.com`.

## Files changed

- UI layout/components under `ui/src/app`, `ui/src/components`, and `ui/src/lib`
- Generated public candidate data under `ui/src/data/v2`
- Icon assets under `ui/public`
- QA/state files under `memory/orchestration`
- `scripts/compile-v2-yaml.mjs`
