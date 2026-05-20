# Final Release Report — Roster Delta — 2026-05-20

## Commit

- Commit: `259f245`
- Message: `[roster] add missing 2026 candidates`
- GitHub Actions run: `26192822073`
- GitHub Pages result: pass

## Public Preview

- Preview URL: `https://tylerpreisser.github.io/elect-righteous/`
- Verified pages:
  - `https://tylerpreisser.github.io/elect-righteous/candidates/david-c-graham/`
  - `https://tylerpreisser.github.io/elect-righteous/elections/ks-house-110/`
  - `https://tylerpreisser.github.io/elect-righteous/elections/sboe-district-5/`

## Production

- Production URL: `https://electrighteous.com/`
- Status: blocked. The domain did not resolve from this environment after the successful GitHub Pages deploy.
- Required action: check Cloudflare/DNS configuration outside the repo.

## Roster Delta Shipped

- Candidate-like slugs: 81
- Active 2026 candidate slugs: 59
- Rendered v2 candidate pages: 81
- Race entries: 16

## People Added

- David C. Graham — U.S. Senate
- Scott E. Morgan — Kansas Secretary of State
- Kelly Ancar — SBOE District 5
- Mark Schaukowitch — KS House District 110
- Max L. Dibble — KS House District 110
- Marvin Matchett — KS House District 110
- Cody Ward — KS House District 110
- Michael W. Smith — lieutenant-governor running mate / Kansas Governor race
- Renee Duxler — lieutenant-governor running mate / Kansas Governor race
- KC Ohaebosim — lieutenant-governor running mate / Kansas Governor race
- Joe Newland — lieutenant-governor running mate / Kansas Governor race

## Corrected

- Eric Lund is now treated as a Kansas SOS 2026 General Libertarian filing for state treasurer, not KPDC-only/account-only.
- Ric Koehn is now treated as a Kansas SOS 2026 General Libertarian filing for insurance commissioner, not KPDC-only/account-only.
- Ken Brooks legacy artifacts no longer label him as USD 489 Board President.

## Validation Results

- YAML parse: pass
- Phase 2 inventory: pass
- Runtime v2 validation: pass, 81 candidates
- Fixed issue count: pass, all 81 candidates have 14 issues
- TypeScript: pass
- Static build: pass, 266 pages
- GitHub Pages deploy: pass

## Form Routing

- Code routes to `tyler@preissersolutions.com`.
- A controlled FormSubmit AJAX test after the roster delta returned HTTP `521`; earlier controlled attempts returned `522`.
- Live delivery is still not proven. Recipient activation/mailbox review remains required.

## Remaining Caveats

- The 11 new roster-delta profiles have the required artifact chain, but many need a second deeper public-source/social harvest.
- No additional confirmed named Hays/Ellis local 2026 candidates were found in current official local filing sources during this pass.
- Local/SOS filings must be rechecked after the June 1, 2026 noon filing deadline and after the relevant independent nomination deadline.
