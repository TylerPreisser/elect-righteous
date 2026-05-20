# Source Audit — doug-billings — 2026-05-20

## Summary
- Unique source records: 12
- Tier correction flags: 3
- Invalid URL records: 0
- Internal-file-only records: 9

## Source Table
| Source ID              | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ---------------------- | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-doug-billings-0001 | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm  | primary         | primary         | yes     | not-live-checked | 1    |
| src-doug-billings-0002 | memory/candidates/doug-billings/social-harvest.md:20                             | social          | internal-memory | no      | internal-file    | 16   |
| src-doug-billings-0003 | https://dougbillingsforkansas.com/                                               | secondary       | internal-memory | no      | not-live-checked | 1    |
| src-doug-billings-0004 | https://www.kctv5.com/2025/05/05/conservative-podcaster-run-kansas-governor-202… | secondary       | internal-memory | no      | not-live-checked | 1    |
| src-doug-billings-0005 | memory/candidates/doug-billings/v2-issues.yaml:111                               | internal-memory | internal-memory | yes     | internal-file    | 77   |
| src-doug-billings-0006 | reports/vicki-schmidt-complete-dossier.md:430                                    | internal-memory | internal-memory | yes     | internal-file    | 25   |
| src-doug-billings-0007 | ui/src/data/v2/doug-billings.ts:61                                               | internal-memory | internal-memory | yes     | internal-file    | 26   |
| src-doug-billings-0008 | ui/src/data/elections.ts:109                                                     | internal-memory | internal-memory | yes     | internal-file    | 38   |
| src-doug-billings-0009 | reports/jeff-colyer-complete-dossier.md:779                                      | internal-memory | internal-memory | yes     | internal-file    | 32   |
| src-doug-billings-0010 | memory/candidates/doug-billings/in-their-own-words.md:1                          | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-doug-billings-0011 | memory/candidates/doug-billings/raw-dump-v2.md:1                                 | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-doug-billings-0012 | memory/candidates/doug-billings/sleuth-pass.md:1                                 | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-doug-billings-0002: assigned social; recommended internal-memory; memory/candidates/doug-billings/social-harvest.md:20
- src-doug-billings-0003: assigned secondary; recommended internal-memory; https://dougbillingsforkansas.com/
- src-doug-billings-0004: assigned secondary; recommended internal-memory; https://www.kctv5.com/2025/05/05/conservative-podcaster-run-kansas-governor-2026/

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
