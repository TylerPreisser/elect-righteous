# Customer Feedback Local Fixes — 2026-05-20

## Inputs

Customer screenshots raised four concrete issues:

- County pages appeared to list commissioners who were not actually up this cycle.
- Candidate/official history and involvement felt incomplete, especially local officials.
- USD 489 pages used "voting record" language when some items were sourced from local reporting or social/media captures rather than official minutes.
- Ken Brooks corrected two profile details: he is not a Hays High graduate, and he used a Facebook page titled "Ken Brooks for Hays USD 489 School Board" during his first campaign before leaving social media by the second campaign.

## Primary-Source Roster Recheck

Sources checked during this pass:

- Kansas SOS candidate information: `https://sos.ks.gov/elections/candidate-information.html`
- Kansas SOS important dates: `https://sos.ks.gov/elections/important-election-dates.html`
- Ellis County 2026 candidate filings PDF: `https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings`
- Ellis County Commission official page: `https://www.ellisco.net/120/County-Commission`
- USD 489 Board of Education page: `https://www.usd489.com/page/board-of-education`

Findings:

- Kansas SOS lists the 2026 primary filing deadline as 12:00 p.m. Monday, June 1, 2026, and independent nominations as 12:00 p.m. Monday, August 3, 2026.
- The Ellis County 2026 candidate filing PDF currently lists `Commission District 1 / Republican Michael Berges`.
- The Ellis County Commission official page lists the current three commissioners as Michael Berges, Neal Younger, and Nathan Leiker.
- No additional Ellis County Commission candidates were found in the current official 2026 filing PDF during this pass. Because the filing deadline has not passed, this requires another official recheck after June 1, 2026.

## Product Fixes Applied

- Added `ui/src/lib/profile-status.ts` so the UI no longer treats every profile as a "candidate" by default.
- Candidate pages now distinguish:
  - `On current 2026 filing list`
  - `Current official, not on 2026 ballot`
  - `Appointed administrator`
  - `Current officeholder profile`
  - `Filing conflict / recheck needed`
- Hays City and USD 489 election/group copy now separates elected offices from appointed administrators.
- USD 489 group now says it profiles seven elected board members plus the appointed superintendent.
- Hays City group now says it profiles elected commissioners plus the appointed city manager.
- Election detail sidebars now include the earlier candidate filing deadlines for people interested in running.
- Candidate metadata now says "public record" instead of "voting record."
- Issue cards now label actions as "documented or reported" where applicable instead of implying official roll-call records in every case.
- Ken Brooks memory profile corrected the Hays High claim and replaced the forbidden `What You Should Know` heading with `Key Public Record Notes`.
- Ken Brooks YAML social note corrected the Facebook page from `NOT FOUND` to `FOUND, LIMITED` / presence-only.

## Remaining Work

- Full local record audit is still required for USD 489, Hays City Commission, and Ellis County Commission:
  - Official minutes / BoardDocs / agenda packet record
  - Date
  - Motion or action
  - Vote/result
  - Whether the candidate/official directly acted
  - Secondary reporting cross-check
- Allen Park should receive the first stated-position-vs-observed-action rewrite because customer feedback specifically flagged his board governance framing.
- Post-deadline roster recheck is required after June 1, 2026 at noon and again after August 3, 2026 at noon for independent nominations.

## Correction Form Test

Controlled FormSubmit tests were attempted on 2026-05-20:

- AJAX endpoint: `https://formsubmit.co/ajax/tyler@preissersolutions.com`
- HTML fallback endpoint: `https://formsubmit.co/tyler@preissersolutions.com`

Result: both returned Cloudflare/FormSubmit `522` timeout responses from this environment. The code remains wired to `tyler@preissersolutions.com`, but this pass did not prove live delivery. Because the provider itself returned 522 at its root and submit endpoints, this is currently a provider availability / reachability blocker, not a confirmed application-code failure.

Next form action: retry from a browser/network outside this environment or switch to a provider with an account/API key under Preisser Solutions control before launch.

