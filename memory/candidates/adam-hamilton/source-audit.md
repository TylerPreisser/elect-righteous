# Source Audit — adam-hamilton — 2026-05-20

## Summary
- Unique source records: 9
- Tier correction flags: 2
- Invalid URL records: 0
- Internal-file-only records: 7

## Source Table
| Source ID              | URL / File                                              | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ---------------------- | ------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-adam-hamilton-0001 | https://www.fec.gov/data/candidate/S6KS00312/           | primary         | primary         | yes     | not-live-checked | 1    |
| src-adam-hamilton-0002 | memory/candidates/adam-hamilton/social-harvest.md:20    | social          | internal-memory | no      | internal-file    | 16   |
| src-adam-hamilton-0003 | https://hamiltonforkansas.com/                          | secondary       | internal-memory | no      | not-live-checked | 2    |
| src-adam-hamilton-0004 | memory/candidates/adam-hamilton/v2-issues.yaml:12       | internal-memory | internal-memory | yes     | internal-file    | 62   |
| src-adam-hamilton-0005 | ui/src/data/elections.ts:49                             | internal-memory | internal-memory | yes     | internal-file    | 41   |
| src-adam-hamilton-0006 | ui/src/data/v2/adam-hamilton.ts:83                      | internal-memory | internal-memory | yes     | internal-file    | 26   |
| src-adam-hamilton-0007 | memory/candidates/adam-hamilton/in-their-own-words.md:1 | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-adam-hamilton-0008 | memory/candidates/adam-hamilton/raw-dump-v2.md:1        | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-adam-hamilton-0009 | memory/candidates/adam-hamilton/sleuth-pass.md:1        | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-adam-hamilton-0002: assigned social; recommended internal-memory; memory/candidates/adam-hamilton/social-harvest.md:20
- src-adam-hamilton-0003: assigned secondary; recommended internal-memory; https://hamiltonforkansas.com/

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
