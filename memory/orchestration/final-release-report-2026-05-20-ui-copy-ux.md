# Final Release Report — UI Copy and Profile UX — 2026-05-20

## Shipped

- Removed visible assistant/process/internal copy from the public website.
- Changed issue expanders to `See more`.
- Kept `Where They Stand on Big Issues` collapsed by default.
- Moved `Who They Are` above the issue section.
- Simplified issue-card language into readable voter-facing prose while preserving social/online observations as caveated signals.
- Reworked donor/funding display into a compact finance snapshot.
- Shortened candidate and election tiles.
- Restored desktop Preisser Solutions badge without blocking mobile content.
- Regenerated favicon/app icons with transparent corners.
- Captured desktop and mobile screenshots for the main page types.

## Validation

- YAML parse: pass
- Phase 2 inventory: pass
- V2 validation: pass, 81 candidates
- TypeScript: pass
- Static build: pass, 266 generated pages
- Cloudflare root build: pass, 266 generated pages
- Targeted public text leak scan: pass, 0 matches

## Deploy

- GitHub Pages preview: verified
  - `https://tylerpreisser.github.io/elect-righteous/`
  - GitHub Actions run `26201557536` succeeded.
- Cloudflare Pages: verified
  - `https://e230d8cb.elect-righteous.pages.dev/`
  - `https://elect-righteous.pages.dev/`
- Production: verified
  - `https://electrighteous.com/`
  - `https://www.electrighteous.com/`
  - Both return HTTP 200.
  - Production metadata uses `https://electrighteous.com/`.

## Correction Form

The correction form is wired to `tyler@preissersolutions.com`, but FormSubmit returned an activation-required response and says it sent an activation email to that address.

Next step: click the FormSubmit activation email in Tyler's inbox, then rerun the form submission test.

## Remaining Caveats

- Manual editorial/legal/symmetry review is still listed as incomplete in `STATE.md`.
- Thin-record candidates remain documented in `STATE.md`.
- Future Cloudflare DNS changes require a Cloudflare profile/token with DNS read/edit access. The current token can deploy Pages and the production domains now resolve, but it still lacks DNS edit permission.
