# Roster Delta Auditor Handoff — 2026-05-20

## What Changed

- Added confirmed missing candidate profiles and race wiring for David C. Graham, Scott E. Morgan, Kelly Ancar, Mark Schaukowitch, Max Dibble, Marvin Matchett, Cody Ward, Michael W. Smith, Renee Duxler, KC Ohaebosim, and Joe Newland.
- Added new `ks-house-110` race because House District 110 includes parts of Ellis County.
- Updated U.S. Senate, Governor, Secretary of State, Treasurer, Insurance Commissioner, and SBOE District 5 race counts/copy.
- Corrected Eric Lund and Ric Koehn from KPDC/account-only status to Kansas SOS 2026 General Libertarian filing status while retaining KPDC as a finance-source layer.
- Corrected lingering Ken Brooks Board President wording in legacy/current artifacts and preserved his campaign Facebook page as caveated social presence evidence.
- Retested correction form delivery; FormSubmit returned HTTP 521, so delivery is still not proven.

## Validation

- YAML parse: pass.
- Phase 2 inventory: pass — 81 candidate-like slugs, 59 active 2026, 81 rendered v2, no missing UI entries.
- Runtime validation: pass — 81 v2 candidates.
- Fixed issue count: pass — all 81 candidates have 14 issues.
- TypeScript: pass.
- Static build: pass — 266 static pages.

## Important Caveats

- The 11 new roster-delta profiles have the required artifacts, but many are still source-thin compared with the deeply researched older profiles. They need a second-pass social/source harvest if richer public records appear.
- No additional confirmed local Hays/Ellis candidates were found in current official online local sources. This must be rechecked after the June 1, 2026 noon filing deadline and later independent-nomination deadlines.
- The Kansas SOS dynamic candidate endpoint was not reliably accessible from CLI/browser automation in this environment; official rows were taken from auditor/browser/source passes and should be rechecked after final lists publish.
- FormSubmit is wired to Tyler's email in code, but the live provider test failed with Cloudflare 521. Mailbox activation/delivery still needs confirmation outside this environment.

## Next Task

Commit this roster-delta work, push it, verify GitHub Pages, then continue with a deeper second-pass source/social harvest for the new roster-delta profiles and a local official-record audit for USD 489/commission profiles.
