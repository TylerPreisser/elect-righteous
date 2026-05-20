# Source Audit — mark-lane — 2026-05-20

## Summary
- Unique source records: 8
- Tier correction flags: 1
- Invalid URL records: 0
- Internal-file-only records: 7

## Source Table
| Source ID          | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ------------------ | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-mark-lane-0001 | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01ML… | primary         | primary         | yes     | not-live-checked | 1    |
| src-mark-lane-0002 | memory/candidates/mark-lane/social-harvest.md:20                                 | social          | internal-memory | no      | internal-file    | 16   |
| src-mark-lane-0003 | ui/src/data/elections.ts:109                                                     | internal-memory | internal-memory | yes     | internal-file    | 36   |
| src-mark-lane-0004 | memory/candidates/mark-lane/v2-issues.yaml:69                                    | internal-memory | internal-memory | yes     | internal-file    | 54   |
| src-mark-lane-0005 | ui/src/data/v2/mark-lane.ts:77                                                   | internal-memory | internal-memory | yes     | internal-file    | 26   |
| src-mark-lane-0006 | memory/candidates/mark-lane/in-their-own-words.md:1                              | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-mark-lane-0007 | memory/candidates/mark-lane/raw-dump-v2.md:1                                     | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-mark-lane-0008 | memory/candidates/mark-lane/sleuth-pass.md:1                                     | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-mark-lane-0002: assigned social; recommended internal-memory; memory/candidates/mark-lane/social-harvest.md:20

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
