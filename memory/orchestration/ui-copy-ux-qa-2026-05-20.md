# UI Copy, Profile UX, and Deploy QA — 2026-05-20

## Scope

- Removed public-facing process/internal wording that read like the build system talking to Tyler.
- Reworked candidate profile flow so `Who They Are` appears before issues and `Where They Stand on Big Issues` stays collapsed by default.
- Changed issue-card expansion language to `See more`.
- Shortened candidate/election cards and cleaned CTA labels.
- Reworked campaign-finance display into a compact finance snapshot.
- Restored the Preisser Solutions bottom-left badge on desktop while removing the fixed overlay from mobile so it does not cover profile controls or forms.
- Regenerated favicon and app icons with transparent corners.

## Public Text Leak Scan

Built HTML/text scan returned `0` matches for targeted leaked/internal phrases:

- `[object Object]`
- `missing-roster pass`
- `The reviewed public record did not identify a source-backed`
- `Social/online observations are public signals`
- `Documented public record:`
- `Candidate statement:`
- `Public evidence:`
- `issue dossier`
- `Open dossier`
- `Empty issues`

## Validation Gates

- YAML parse: pass
- Phase 2 inventory: pass, 81 rendered v2 candidates
- V2 runtime validation: pass, 81 candidates
- TypeScript: pass
- Static build: pass, 266 generated pages
- Root-domain Cloudflare build: pass, 266 generated pages

## Screenshot QA

Screenshots were captured from a root-domain static build on `http://localhost:4173`.

Desktop and mobile screenshots are stored under:

`memory/orchestration/ui-qa-2026-05-20-current/`

Captured routes:

- `/`
- `/candidates/`
- `/elections/`
- `/about/`
- `/elections/ks-01-house-2026/`
- `/candidates/steven-jacob/`
- `/candidates/ken-brooks/`
- `/candidates/scott-schwab/`
- `/candidates/steven-jacob/sources/`

## Correction Form Test

The correction form code is routed to `tyler@preissersolutions.com`.

Controlled POST test to `https://formsubmit.co/ajax/tyler@preissersolutions.com` returned:

```json
{
  "success": "false",
  "message": "This form needs Activation. We've sent you an email containing an 'Activate Form' link. Just click it and your form will be actived!"
}
```

Action needed: open the FormSubmit activation email sent to `tyler@preissersolutions.com`, click the activation link, and rerun the form test.

## Cloudflare Login / DNS

Wrangler login was restarted twice for the requested profile switch. Both OAuth attempts timed out before Wrangler received the authorization callback.

Current Wrangler token remains:

- Email: `tylerpreisser@gmail.com`
- Account: `Tylerpreisser@gmail.com's Account`
- Pages write: present
- Zone read: present
- DNS edit/read: not present

Cloudflare Pages deploy can still run with the current token. Custom-domain DNS edits for `electrighteous.com` remain blocked until a Cloudflare token/profile with DNS read/edit access to the zone is active.
