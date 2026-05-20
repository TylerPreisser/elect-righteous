# Source Audit — eric-lund — 2026-05-20

## Summary
- Unique source records: 8
- Tier correction flags: 1
- Invalid URL records: 0
- Internal-file-only records: 7

## Source Table
| Source ID          | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ------------------ | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-eric-lund-0001 | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW05EL… | primary         | primary         | yes     | not-live-checked | 1    |
| src-eric-lund-0002 | memory/candidates/eric-lund/social-harvest.md:20                                 | social          | internal-memory | no      | internal-file    | 16   |
| src-eric-lund-0003 | ui/src/data/elections.ts:166                                                     | internal-memory | internal-memory | yes     | internal-file    | 31   |
| src-eric-lund-0004 | memory/candidates/eric-lund/v2-issues.yaml:69                                    | internal-memory | internal-memory | yes     | internal-file    | 54   |
| src-eric-lund-0005 | ui/src/data/v2/eric-lund.ts:66                                                   | internal-memory | internal-memory | yes     | internal-file    | 24   |
| src-eric-lund-0006 | memory/candidates/eric-lund/in-their-own-words.md:1                              | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-eric-lund-0007 | memory/candidates/eric-lund/raw-dump-v2.md:1                                     | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-eric-lund-0008 | memory/candidates/eric-lund/sleuth-pass.md:1                                     | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-eric-lund-0002: assigned social; recommended internal-memory; memory/candidates/eric-lund/social-harvest.md:20

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
