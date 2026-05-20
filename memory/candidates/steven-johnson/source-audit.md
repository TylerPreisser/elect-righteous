# Source Audit — steven-johnson — 2026-05-20

## Summary
- Unique source records: 22
- Tier correction flags: 2
- Invalid URL records: 0
- Internal-file-only records: 11

## Source Table
| Source ID               | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ----------------------- | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-steven-johnson-0001 | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/ReceiptsExpenditu… | primary         | primary         | yes     | not-live-checked | 1    |
| src-steven-johnson-0002 | https://ballotpedia.org/Kansas_Treasurer_election,_2026                          | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-steven-johnson-0003 | https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_elect… | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-steven-johnson-0004 | https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election                 | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-steven-johnson-0005 | https://ballotpedia.org/Kansas_2026_ballot_measures                              | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-steven-johnson-0006 | https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(… | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-steven-johnson-0007 | https://www.votenokansas.org/                                                    | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-steven-johnson-0008 | memory/candidates/steven-johnson/social-harvest.md:20                            | social          | internal-memory | no      | internal-file    | 16   |
| src-steven-johnson-0009 | https://candidatefiling.us/Info/Default?det=Y&e=545606222&j=2795522868&pj=26405… | primary         | primary         | yes     | not-live-checked | 1    |
| src-steven-johnson-0010 | https://stevenjohnsonks.com/                                                     | secondary       | internal-memory | no      | not-live-checked | 1    |
| src-steven-johnson-0011 | https://ballotpedia.org/Kansas_state_executive_official_elections,_2026          | secondary       | secondary       | yes     | not-live-checked | 2    |
| src-steven-johnson-0012 | https://ballotpedia.org/Kansas_gubernatorial_election,_2026                      | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-steven-johnson-0013 | memory/elections/2026-11-03-ks-statewide-offices.md:32                           | internal-memory | internal-memory | yes     | internal-file    | 23   |
| src-steven-johnson-0014 | ui/src/data/elections.ts:166                                                     | internal-memory | internal-memory | yes     | internal-file    | 30   |
| src-steven-johnson-0015 | memory/candidates/steven-johnson/v2-issues.yaml:81                               | internal-memory | internal-memory | yes     | internal-file    | 60   |
| src-steven-johnson-0016 | ui/src/data/v2/steven-johnson.ts:63                                              | internal-memory | internal-memory | yes     | internal-file    | 23   |
| src-steven-johnson-0017 | memory/elections/2026-11-03-kansas-treasurer.md:4                                | internal-memory | internal-memory | yes     | internal-file    | 24   |
| src-steven-johnson-0018 | memory/elections/2026-11-03-ks-governor.md:30                                    | internal-memory | internal-memory | yes     | internal-file    | 17   |
| src-steven-johnson-0019 | reports/hays-kansas-election-finder-2026-03-30.md:192                            | internal-memory | internal-memory | yes     | internal-file    | 26   |
| src-steven-johnson-0020 | memory/candidates/steven-johnson/in-their-own-words.md:1                         | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-steven-johnson-0021 | memory/candidates/steven-johnson/raw-dump-v2.md:1                                | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-steven-johnson-0022 | memory/candidates/steven-johnson/sleuth-pass.md:1                                | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-steven-johnson-0008: assigned social; recommended internal-memory; memory/candidates/steven-johnson/social-harvest.md:20
- src-steven-johnson-0010: assigned secondary; recommended internal-memory; https://stevenjohnsonks.com/

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
