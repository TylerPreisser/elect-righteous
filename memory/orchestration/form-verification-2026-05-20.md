# Correction Form Verification — 2026-05-20

## Status

Partial pass with provider-delivery blocker.

## Code Path Verified

- Component: `ui/src/components/ui/correction-form.tsx`
- Config: `ui/src/lib/config.ts`
- Recipient constant: `FEEDBACK_EMAIL = "tyler@preissersolutions.com"`
- Primary submit action: `https://formsubmit.co/ajax/tyler@preissersolutions.com`
- HTML fallback action: `https://formsubmit.co/tyler@preissersolutions.com`
- Direct email fallback: `mailto:tyler@preissersolutions.com`
- Hidden fields set by the form:
  - `_subject`: `Elect Righteous - Correction for <candidate name>`
  - `_captcha`: `false`
  - `_template`: `table`
  - `candidate`: current candidate name

## What This Confirms

The rendered correction form is wired to Tyler's `@preissersolutions.com` email address in both JavaScript submit and non-JavaScript fallback paths.

## What Is Not Confirmed

- FormSubmit activation is not confirmed from the repo. FormSubmit commonly requires first-time recipient activation via an email confirmation.
- Old submissions were not investigated in this pass because no mailbox/FormSubmit dashboard access is available in the repo context.
- 2026-05-20 update: a controlled live test submission was attempted after Tyler requested a test. Both the AJAX endpoint (`https://formsubmit.co/ajax/tyler@preissersolutions.com`) and HTML fallback endpoint (`https://formsubmit.co/tyler@preissersolutions.com`) returned Cloudflare/FormSubmit `522` timeout responses from this environment. The provider root also returned `522`. This pass did not prove live delivery.
- 2026-05-20 roster-delta update: a second controlled AJAX test was sent after the missing-candidate update using subject `Elect Righteous - Correction form delivery test 2026-05-20`. FormSubmit/Cloudflare returned HTTP `521` (`error code: 521`). Delivery still is not proven from this environment.
- 2026-05-20 public-wording update: a third controlled AJAX test was sent after the public wording cleanup using subject `Elect Righteous - Correction form delivery retest 2026-05-20 22:31 UTC`. FormSubmit/Cloudflare again returned HTTP `521` (`error code: 521`). Delivery remains unproven; the issue is with the external FormSubmit endpoint/reachability, not the site-side recipient wiring.

## Required Follow-Up

1. Confirm `tyler@preissersolutions.com` has activated FormSubmit for this form endpoint.
2. Search the recipient mailbox for prior FormSubmit messages with subjects containing `Elect Righteous - Correction`.
3. Retry the controlled test from a normal browser/network, or replace FormSubmit with a provider/account under Preisser Solutions control if the `522` condition persists.
