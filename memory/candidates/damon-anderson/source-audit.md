# Source Audit — damon-anderson — 2026-05-20

## Summary
- Unique source records: 17
- Tier correction flags: 3
- Invalid URL records: 0
- Internal-file-only records: 8

## Source Table
| Source ID               | URL / File                                                                       | Assigned                          | Recommended     | Tier OK | Status           | Rows |
| ----------------------- | -------------------------------------------------------------------------------- | --------------------------------- | --------------- | ------- | ---------------- | ---- |
| src-damon-anderson-0001 | https://candidatefiling.us/Info/Default?c=181035409877&e=545606222&j=2795522868… | primary                           | primary         | yes     | not-live-checked | 1    |
| src-damon-anderson-0002 | https://www.fec.gov/data/elections/senate/KS/2026/                               | primary                           | primary         | yes     | not-live-checked | 1    |
| src-damon-anderson-0003 | https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026            | secondary                         | secondary       | yes     | not-live-checked | 1    |
| src-damon-anderson-0004 | https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-… | secondary                         | secondary       | yes     | not-live-checked | 1    |
| src-damon-anderson-0005 | https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Kansas       | internal-memory                   | secondary       | no      | not-live-checked | 1    |
| src-damon-anderson-0006 | memory/candidates/damon-anderson/in-their-own-words.md:22                        | social                            | internal-memory | no      | internal-file    | 16   |
| src-damon-anderson-0007 | https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-… | secondary                         | secondary       | yes     | not-live-checked | 1    |
| src-damon-anderson-0008 | https://www.andersonforkansas.com/                                               | internal-memory                   | internal-memory | yes     | not-live-checked | 1    |
| src-damon-anderson-0009 | https://www.andersonforkansas.com/issues                                         | internal-memory                   | internal-memory | yes     | not-live-checked | 1    |
| src-damon-anderson-0010 | https://www.andersonforkansas.com/systemfix                                      | internal-memory                   | internal-memory | yes     | not-live-checked | 1    |
| src-damon-anderson-0011 | ui/src/data/elections.ts:344                                                     | primary,internal-memory           | internal-memory | yes     | internal-file    | 204  |
| src-damon-anderson-0012 | memory/candidates/damon-anderson/v2-issues.yaml:17                               | primary,internal-memory,secondary | internal-memory | yes     | internal-file    | 64   |
| src-damon-anderson-0013 | ui/src/data/v2/damon-anderson.ts:114                                             | primary,internal-memory           | internal-memory | yes     | internal-file    | 14   |
| src-damon-anderson-0014 | memory/candidates/damon-anderson/raw-dump-v2.md:8                                | primary,internal-memory           | internal-memory | yes     | internal-file    | 2    |
| src-damon-anderson-0015 | memory/elections/2026-11-03-us-senate-kansas.md:46                               | secondary,internal-memory         | internal-memory | yes     | internal-file    | 32   |
| src-damon-anderson-0016 | memory/candidates/damon-anderson/social-harvest.md:1                             | social                            | internal-memory | no      | internal-file    | 1    |
| src-damon-anderson-0017 | memory/candidates/damon-anderson/sleuth-pass.md:1                                | internal-memory                   | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-damon-anderson-0005: assigned internal-memory; recommended secondary; https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Kansas
- src-damon-anderson-0006: assigned social; recommended internal-memory; memory/candidates/damon-anderson/in-their-own-words.md:22
- src-damon-anderson-0016: assigned social; recommended internal-memory; memory/candidates/damon-anderson/social-harvest.md:1

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
