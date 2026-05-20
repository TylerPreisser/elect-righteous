# Source Audit — steven-jacob — 2026-05-20

## Summary
- Unique source records: 8
- Tier correction flags: 1
- Invalid URL records: 0
- Internal-file-only records: 7

## Source Table
| Source ID             | URL / File                                             | Assigned        | Recommended     | Tier OK | Status           | Rows |
| --------------------- | ------------------------------------------------------ | --------------- | --------------- | ------- | ---------------- | ---- |
| src-steven-jacob-0001 | https://www.fec.gov/data/candidate/H6KS01229/          | primary         | primary         | yes     | not-live-checked | 1    |
| src-steven-jacob-0002 | memory/candidates/steven-jacob/social-harvest.md:20    | social          | internal-memory | no      | internal-file    | 16   |
| src-steven-jacob-0003 | memory/candidates/steven-jacob/v2-issues.yaml:57       | internal-memory | internal-memory | yes     | internal-file    | 52   |
| src-steven-jacob-0004 | ui/src/data/v2/steven-jacob.ts:62                      | internal-memory | internal-memory | yes     | internal-file    | 23   |
| src-steven-jacob-0005 | ui/src/data/elections.ts:76                            | internal-memory | internal-memory | yes     | internal-file    | 42   |
| src-steven-jacob-0006 | memory/candidates/steven-jacob/in-their-own-words.md:1 | internal-memory | internal-memory | yes     | internal-file    | 7    |
| src-steven-jacob-0007 | memory/candidates/steven-jacob/raw-dump-v2.md:1        | internal-memory | internal-memory | yes     | internal-file    | 1    |
| src-steven-jacob-0008 | memory/candidates/steven-jacob/sleuth-pass.md:1        | internal-memory | internal-memory | yes     | internal-file    | 1    |

## Tier Corrections Needed
- src-steven-jacob-0002: assigned social; recommended internal-memory; memory/candidates/steven-jacob/social-harvest.md:20

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
