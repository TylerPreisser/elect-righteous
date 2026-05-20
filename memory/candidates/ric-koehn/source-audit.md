# Source Audit — ric-koehn — 2026-05-20

## Summary
- Unique source records: 8
- Tier correction flags: 1
- Invalid URL records: 0
- Internal-file-only records: 7

## Source Table
| Source ID          | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ------------------ | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-ric-koehn-0001 | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03RK… | primary         | primary         | yes     | not-live-checked | 1    |
| src-ric-koehn-0002 | memory/candidates/ric-koehn/social-harvest.md:20                                 | social          | internal-memory | no      | internal-file    | 16   |
| src-ric-koehn-0003 | ui/src/data/elections.ts:206                                                     | internal-memory | internal-memory | yes     | internal-file    | 33   |
| src-ric-koehn-0004 | memory/candidates/ric-koehn/v2-issues.yaml:69                                    | internal-memory | internal-memory | yes     | internal-file    | 54   |
| src-ric-koehn-0005 | ui/src/data/v2/ric-koehn.ts:77                                                   | internal-memory | internal-memory | yes     | internal-file    | 26   |
| src-ric-koehn-0006 | memory/candidates/ric-koehn/in-their-own-words.md:1                              | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-ric-koehn-0007 | memory/candidates/ric-koehn/raw-dump-v2.md:1                                     | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-ric-koehn-0008 | memory/candidates/ric-koehn/sleuth-pass.md:1                                     | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-ric-koehn-0002: assigned social; recommended internal-memory; memory/candidates/ric-koehn/social-harvest.md:20

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
