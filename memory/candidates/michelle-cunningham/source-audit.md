# Source Audit — michelle-cunningham — 2026-05-20

## Summary
- Unique source records: 8
- Tier correction flags: 1
- Invalid URL records: 0
- Internal-file-only records: 7

## Source Table
| Source ID                    | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ---------------------------- | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-michelle-cunningham-0001 | https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/Treasurers/BOE05MC… | primary         | primary         | yes     | not-live-checked | 1    |
| src-michelle-cunningham-0002 | memory/candidates/michelle-cunningham/social-harvest.md:19                       | social          | internal-memory | no      | internal-file    | 16   |
| src-michelle-cunningham-0003 | memory/candidates/michelle-cunningham/v2-issues.yaml:10                          | internal-memory | internal-memory | yes     | internal-file    | 54   |
| src-michelle-cunningham-0004 | ui/src/data/v2/michelle-cunningham.ts:125                                        | internal-memory | internal-memory | yes     | internal-file    | 24   |
| src-michelle-cunningham-0005 | ui/src/data/elections.ts:209                                                     | internal-memory | internal-memory | yes     | internal-file    | 36   |
| src-michelle-cunningham-0006 | memory/candidates/michelle-cunningham/in-their-own-words.md:1                    | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-michelle-cunningham-0007 | memory/candidates/michelle-cunningham/raw-dump-v2.md:1                           | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-michelle-cunningham-0008 | memory/candidates/michelle-cunningham/sleuth-pass.md:1                           | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-michelle-cunningham-0002: assigned social; recommended internal-memory; memory/candidates/michelle-cunningham/social-harvest.md:19

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
