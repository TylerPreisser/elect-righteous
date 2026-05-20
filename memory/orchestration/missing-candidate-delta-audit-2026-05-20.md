# Missing Candidate Delta Audit — 2026-05-20

## Why This Pass Ran

Customer feedback said the site appeared to be missing candidates and that some commissioner/local material was wrong or not relevant to Hays. Tyler then instructed that every newly found person must receive the same evidence, social/source, 14-issue, profile, and rendered-data treatment as existing candidates.

## Sources Checked

- Kansas Secretary of State candidate filing pages and public candidate-list endpoint.
- Kansas SOS candidate-information page for filing rules and timing.
- FEC 2026 candidate master data for U.S. Senate and U.S. House KS-01.
- KPDC statewide, House, and SBOE 2026 election-cycle indexes.
- Ellis County 2026 candidate filing PDF.
- Saline County mirror of statewide 2026 candidate filings.
- Public reporting and candidate/campaign pages used only after official roster leads identified a person.

## Confirmed Missing People Added

| Person | Race / Role | Classification | Action |
|---|---|---|---|
| David C. Graham | U.S. Senate | Kansas SOS 2026 General Libertarian filing, found by federal/state roster check; no FEC ID found in this pass | Added candidate folder, evidence matrix, social matrix, source audit, 14 fixed issues, v2 YAML, rendered v2 TS, and Senate race entry |
| Scott E. Morgan | Kansas Secretary of State | Kansas SOS 2026 General United Kansas filing, filed 2026-05-20 | Added complete artifact chain and SOS race entry |
| Kelly Ancar | SBOE District 5 | Kansas SOS 2026 Primary Republican filing from Hays, filed 2026-05-08 | Added complete artifact chain and SBOE District 5 race entry |
| Mark Schaukowitch | Kansas House District 110 | Official HD110 candidate from state roster audit; KPDC account/report present | Added complete artifact chain and new HD110 race |
| Max L. Dibble | Kansas House District 110 | Official HD110 candidate from state roster audit | Added complete artifact chain and new HD110 race |
| Marvin Matchett | Kansas House District 110 | Official HD110 candidate from state roster audit | Added complete artifact chain and new HD110 race |
| Cody Ward | Kansas House District 110 | Official HD110 candidate from state roster audit; KPDC treasurer appointment present | Added complete artifact chain and new HD110 race |

## Governor Ticket Additions

The site now also renders named lieutenant-governor running mates where public sources identified them, because a governor/lieutenant-governor ticket is a paired candidacy and the earlier site only profiled top-ticket names.

| Person | Ticket / Source Status | Action |
|---|---|---|
| Michael W. Smith | Stacy Rogers ticket; official county filing mirror listed Rogers / Smith | Added complete artifact chain and governor race entry |
| Renee Duxler | Ethan Corson ticket; public reporting announced Corson / Duxler | Added complete artifact chain and governor race entry |
| KC Ohaebosim | Cindy Holscher ticket; public reporting identified Holscher / Ohaebosim | Added complete artifact chain and governor race entry |
| Joe Newland | Vicki Schmidt ticket; campaign/reporting identify Schmidt / Newland, with filing timing still caveated | Added complete artifact chain and governor race entry |

## Confirmed Existing Entries Corrected

| Person | Prior Problem | Correction |
|---|---|---|
| Eric Lund | Profile and race copy treated him as KPDC/account-only | Updated to Libertarian Kansas SOS 2026 General filing for State Treasurer, filed 2026-05-12, while preserving KPDC finance-source caveat |
| Ric Koehn | Profile and race copy treated him as KPDC/account-only | Updated to Libertarian Kansas SOS 2026 General filing for Insurance Commissioner, filed 2026-05-12, while preserving KPDC finance-source caveat |
| Ken Brooks | Legacy data still labeled him as USD 489 Board President in one path | Corrected legacy V1 position and artifact wording to Board Member / prior vice-president context; campaign Facebook presence is preserved as social evidence with caveats |

## Local Hays / Ellis Result

No additional confirmed named 2026 Hays City Commission, Ellis County Commission, or USD 489 school-board candidates were found in the current official local online filing sources during this pass.

Important caveat: this is not final. The official Kansas filing deadline for party candidates is June 1, 2026 at noon, and independent nomination timing extends later. Local filing records must be rechecked immediately after those deadlines.

Current official-local finding:

- Ellis County 2026 candidate filing PDF listed County Commission District 1 with Michael Berges as the named local county commission filing during the prior pass.
- Existing county commissioners and USD 489 board members remain profiled as current/off-cycle officials, not 2026 ballot candidates unless official filing records change.

## Excluded / Not Added As Candidates

| Person / Category | Reason |
|---|---|
| Ellace Henderson, HD110 KPDC account | KPDC account appeared in House District 110 records, but the state auditor did not find SOS filing confirmation; not added as a filed candidate in this pass |
| Collin Bielser / Jess Reling local admin names | Useful local office/admin context, but not candidate filings |
| Michelle Cunningham status replacement | Kelly Ancar was added as SOS-filed SBOE candidate; Michelle Cunningham remains present but caveated as source/KPDC record until final ballot list is rechecked |

## Artifact Standard Applied

For every new profile listed above, the pass wrote:

- `raw-dump.md`
- `raw-dump-v2.md`
- `sleuth-pass.md`
- `social-harvest.md`
- `in-their-own-words.md`
- `site-profile.md`
- `evidence-matrix-raw.json`
- `evidence-matrix.json`
- `social-evidence-matrix.json`
- `source-audit.json`
- `source-audit.md`
- `social-analysis.md`
- `issue-matrix.md`
- `v2-issues.yaml`
- `ui/src/data/v2/<slug>.ts`
- agent-work handoff folders for evidence, source, social, issue, and assembly passes

## Social Evidence Handling

This pass did not delete social evidence. For new people, it explicitly records that no reliable candidate-controlled post/like/follow/comment inventory was harvested in the quick roster-delta pass unless the source list names a public social/campaign page. Social rows are preserved as signal-only material and are not rendered as confirmed beliefs.

## Roster Patch Summary

- U.S. Senate count: 13 → 14 with `david-c-graham`.
- Kansas Governor count: 15 → 19 with named running mates.
- Kansas Secretary of State count: 4 → 5 with `scott-e-morgan`.
- Kansas Treasurer copy corrected for `eric-lund`.
- Kansas Insurance copy corrected for `ric-koehn`.
- Added new `ks-house-110` race with 4 candidates.
- SBOE District 5 count: 2 → 3 with `kelly-ancar`.
- Candidate counts checked against `candidateSlugs.length`: pass for 16 races.

## Remaining Recheck Items

- Recheck Kansas SOS final filing lists after June 1, 2026 at noon.
- Recheck independent/general nomination lists after the relevant independent deadline.
- Recheck Ellis County local filing PDF after the deadline.
- Manually verify any SOS rows that were accessed through subagent/browser work because the CLI request to the SOS dynamic candidate endpoint returned a CloudFront/403-style blocker in this environment.
- Expand social/source harvests for the newly added candidates beyond this initial roster-delta standard if richer candidate-controlled social accounts appear.
