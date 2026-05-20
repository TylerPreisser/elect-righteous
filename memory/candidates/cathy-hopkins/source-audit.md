# Source Audit — cathy-hopkins — 2026-05-20

## Summary
- Unique source records: 29
- Tier correction flags: 2
- Invalid URL records: 0
- Internal-file-only records: 9

## Source Table
| Source ID              | URL / File                                                                       | Assigned        | Recommended     | Tier OK | Status           | Rows |
| ---------------------- | -------------------------------------------------------------------------------- | --------------- | --------------- | ------- | ---------------- | ---- |
| src-cathy-hopkins-0001 | https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5            | primary         | primary         | yes     | not-live-checked | 2    |
| src-cathy-hopkins-0002 | https://www.ellisco.net/425/Election                                             | primary         | primary         | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0003 | https://www.sos.ks.gov/elections/candidate-information.html                      | primary         | primary         | yes     | not-live-checked | 2    |
| src-cathy-hopkins-0004 | https://www.kansasregents.gov/about/meet_the_board                               | primary         | primary         | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0005 | https://www.kdor.ks.gov/Apps/VoterReg/                                           | primary         | primary         | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0006 | https://www.change.org/decision-makers/cathy-hopkins-kansas-state-board-of-educ… | secondary       | internal-memory | no      | not-live-checked | 1    |
| src-cathy-hopkins-0007 | https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026           | secondary       | secondary       | yes     | not-live-checked | 2    |
| src-cathy-hopkins-0008 | https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic                             | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0009 | https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-sh… | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0010 | https://hayspost.com/posts/eee8fa4b-005e-4c47-8558-a0c9729e7bd0                  | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0011 | https://www.kasb.org/boe-elections                                               | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0012 | https://www.kwch.com/2026/04/14/kansas-state-board-education-selects-its-next-c… | secondary       | internal-memory | no      | not-live-checked | 1    |
| src-cathy-hopkins-0013 | https://ballotpedia.org/Kansas_State_Board_of_Education                          | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0014 | https://myvoteinfo.voteks.org/                                                   | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0015 | https://en.wikipedia.org/wiki/Kansas_Board_of_Regents                            | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0016 | https://ballotpedia.org/Kansas_state_executive_official_elections,_2026          | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0017 | https://ballotpedia.org/Cathy_Hopkins                                            | secondary       | secondary       | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0018 | memory/candidates/cathy-hopkins/raw-dump-v2.md:659                               | internal-memory | internal-memory | yes     | internal-file    | 345  |
| src-cathy-hopkins-0019 | reports/plain-english-voter-guide.md:381                                         | internal-memory | internal-memory | yes     | internal-file    | 23   |
| src-cathy-hopkins-0020 | memory/candidates/cathy-hopkins/sleuth-pass.md:6                                 | internal-memory | internal-memory | yes     | internal-file    | 45   |
| src-cathy-hopkins-0021 | memory/candidates/cathy-hopkins/v2-issues.yaml:6                                 | internal-memory | internal-memory | yes     | internal-file    | 189  |
| src-cathy-hopkins-0022 | ui/src/data/v2/cathy-hopkins.ts:453                                              | internal-memory | internal-memory | yes     | internal-file    | 188  |
| src-cathy-hopkins-0023 | memory/elections/2026-11-03-kansas-sboe-district-5.md:11                         | internal-memory | internal-memory | yes     | internal-file    | 24   |
| src-cathy-hopkins-0024 | memory/elections/2026-11-03-ks-statewide-offices.md:32                           | internal-memory | internal-memory | yes     | internal-file    | 17   |
| src-cathy-hopkins-0025 | reports/2026-03-30-education-elections-hays-ks.md:59                             | internal-memory | internal-memory | yes     | internal-file    | 59   |
| src-cathy-hopkins-0026 | ui/src/data/elections.ts:209                                                     | internal-memory | internal-memory | yes     | internal-file    | 35   |
| src-cathy-hopkins-0027 | https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Feature-Story/ArtMI… | primary         | primary         | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0028 | https://sos.ks.gov/elections/22elec/2022-Primary-Official-Vote-Totals.pdf        | primary         | primary         | yes     | not-live-checked | 1    |
| src-cathy-hopkins-0029 | https://www.kansas.gov/ethics/CFAScanned/EdOdd/2022ElecCycle/202207/BOE05CH_ame… | primary         | primary         | yes     | not-live-checked | 1    |

## Tier Corrections Needed
- src-cathy-hopkins-0006: assigned secondary; recommended internal-memory; https://www.change.org/decision-makers/cathy-hopkins-kansas-state-board-of-education-district-5
- src-cathy-hopkins-0012: assigned secondary; recommended internal-memory; https://www.kwch.com/2026/04/14/kansas-state-board-education-selects-its-next-commissioner/

## Unsupported / Internal-Only Caveat
- Internal memory rows are useful for preservation and context, but downstream profile claims should prefer public URL-backed rows whenever possible.
- URLs were classified by domain/tier in this pass. Full live HTTP verification can be run as a later high-latency sweep if needed; blocked social/government pages should not be treated as factual failures without manual review.
