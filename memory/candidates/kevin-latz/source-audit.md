# Source Audit — kevin-latz — 2026-05-20

## Summary
- Unique source records: 9
- Tier correction flags: 1
- Invalid URL records: 0
- Internal-file-only records: 7

## Source Table
| Source ID           | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ------------------- | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-kevin-latz-0001 | https://www.salinecountyks.gov/media/Election%20Office/election/PR2026%20Candid… | primary         | primary         | yes     | not-live-checked | 1    |
| src-kevin-latz-0002 | memory/candidates/kevin-latz/social-harvest.md:20                                | social          | internal-memory | no      | internal-file    | 16   |
| src-kevin-latz-0003 | https://candidatefiling.us/Info/Default?c=181035409877&e=545606222&j=2795522868… | primary         | primary         | yes     | not-live-checked | 1    |
| src-kevin-latz-0004 | memory/candidates/kevin-latz/v2-issues.yaml:69                                   | internal-memory | internal-memory | yes     | internal-file    | 55   |
| src-kevin-latz-0005 | ui/src/data/v2/kevin-latz.ts:66                                                  | internal-memory | internal-memory | yes     | internal-file    | 24   |
| src-kevin-latz-0006 | ui/src/data/elections.ts:49                                                      | internal-memory | internal-memory | yes     | internal-file    | 44   |
| src-kevin-latz-0007 | memory/candidates/kevin-latz/in-their-own-words.md:1                             | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-kevin-latz-0008 | memory/candidates/kevin-latz/raw-dump-v2.md:1                                    | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-kevin-latz-0009 | memory/candidates/kevin-latz/sleuth-pass.md:1                                    | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-kevin-latz-0002: assigned social; recommended internal-memory; memory/candidates/kevin-latz/social-harvest.md:20

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
