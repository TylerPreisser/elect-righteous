# Source Audit — lorie-wood — 2026-05-20

## Summary
- Unique source records: 17
- Tier correction flags: 3
- Invalid URL records: 0
- Internal-file-only records: 8

## Source Table
| Source ID           | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ------------------- | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-lorie-wood-0001 | https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/Treasurers/BOE05LW… | primary         | primary         | yes     | not-live-checked | 1    |
| src-lorie-wood-0002 | https://www.fec.gov/data/elections/senate/KS/2026/                               | primary         | primary         | yes     | not-live-checked | 1    |
| src-lorie-wood-0003 | https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to… | secondary       | internal-memory | no      | not-live-checked | 1    |
| src-lorie-wood-0004 | memory/candidates/lorie-wood/social-harvest.md:19                                | social          | internal-memory | no      | internal-file    | 16   |
| src-lorie-wood-0005 | https://www.youtube.com/shorts/YLa4pXvG3rY                                       | social          | social          | yes     | not-live-checked | 1    |
| src-lorie-wood-0006 | https://www.youtube.com/shorts/H7J_Nnc7uyo                                       | social          | social          | yes     | not-live-checked | 1    |
| src-lorie-wood-0007 | https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/         | primary         | primary         | yes     | not-live-checked | 1    |
| src-lorie-wood-0008 | https://www.facebook.com/patrickforkansas/                                       | social          | social          | yes     | not-live-checked | 1    |
| src-lorie-wood-0009 | ui/src/data/candidates.ts:6207                                                   | internal-memory | internal-memory | yes     | internal-file    | 37   |
| src-lorie-wood-0010 | memory/candidates/lorie-wood/v2-issues.yaml:10                                   | internal-memory | internal-memory | yes     | internal-file    | 54   |
| src-lorie-wood-0011 | ui/src/data/v2/lorie-wood.ts:125                                                 | internal-memory | internal-memory | yes     | internal-file    | 23   |
| src-lorie-wood-0012 | ui/src/data/elections.ts:209                                                     | internal-memory | internal-memory | yes     | internal-file    | 36   |
| src-lorie-wood-0013 | memory/candidates/lorie-wood/in-their-own-words.md:1                             | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-lorie-wood-0014 | memory/candidates/lorie-wood/raw-dump-v2.md:1                                    | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-lorie-wood-0015 | memory/candidates/lorie-wood/sleuth-pass.md:1                                    | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-lorie-wood-0016 | https://erikforkansas.com/news/chiefs                                            | secondary       | internal-memory | no      | not-live-checked | 1    |
| src-lorie-wood-0017 | https://www.youtube.com/shorts/7otJxN9_jS8                                       | social          | social          | yes     | not-live-checked | 1    |

## Tier Corrections Needed
- src-lorie-wood-0003: assigned secondary; recommended internal-memory; https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/
- src-lorie-wood-0004: assigned social; recommended internal-memory; memory/candidates/lorie-wood/social-harvest.md:19
- src-lorie-wood-0016: assigned secondary; recommended internal-memory; https://erikforkansas.com/news/chiefs

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
