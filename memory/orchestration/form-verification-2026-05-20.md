# Correction Form Verification — 2026-05-20

## Status

Partial pass with activation blocker.

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
- No live test submission was sent in this pass to avoid generating an unsolicited correction email without a dedicated test protocol.

## Required Follow-Up

1. Confirm `tyler@preissersolutions.com` has activated FormSubmit for this form endpoint.
2. Search the recipient mailbox for prior FormSubmit messages with subjects containing `Elect Righteous - Correction`.
3. If no activation email exists, submit a controlled test correction and complete FormSubmit's activation flow from the recipient inbox.
