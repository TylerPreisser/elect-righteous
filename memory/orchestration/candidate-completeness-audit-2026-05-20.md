# Candidate Completeness Audit - 2026-05-20

Purpose: separate roster verification from UI polishing so Elect Righteous can answer the basic question: "Do we actually have every Hays/Kansas-relevant candidate profile represented?"

## Result

Not complete before this audit. The site had 56 v2 profiles but missed several current public-record names and one whole statewide race. This pass added 14 individual candidate profiles and corrected 3 race groupings.

New v2 total after this pass: 70 candidate profiles.

## Federal

| Race | Missing / conflicted before | Action |
| --- | --- | --- |
| U.S. Senate | Damon Anderson, Kevin Latz, Noah Taylor, Adam Hamilton were not all represented in the v2 roster/election group. | Added individual v2 artifacts and TypeScript profiles; added all four to `us-senate-2026`. |
| U.S. Senate | Chase LaPorte has conflicting Senate / KS-03 House evidence. | Kept visible with conflict language; do not treat as clean without final-list readback. |
| KS-01 U.S. House | Steven Robert Jacob was missing. | Added individual v2 artifacts and TypeScript profile; added to `ks-01-house-2026`. |

Primary/current sources used:

- FEC 2026 candidate bulk data: `https://www.fec.gov/files/bulk-downloads/2026/cn26.zip`
- Kansas U.S. Senate candidate filing mirror: `https://candidatefiling.us/Info/Default?c=181035409877&e=545606222&j=2795522868&s=802933811&st=KS`
- FEC Noah Taylor candidate page: `https://www.fec.gov/data/candidate/S6KS00296/`
- FEC Adam Hamilton candidate page: `https://www.fec.gov/data/candidate/S6KS00312/`
- FEC Steven Robert Jacob candidate page: `https://www.fec.gov/data/candidate/H6KS01229/`

## Statewide / SBOE

| Race | Missing / conflicted before | Action |
| --- | --- | --- |
| Kansas State Treasurer | Race missing entirely. Steven Johnson confirmed in statewide filing mirror; Eric Lund present in KPDC account index. | Added `kansas-treasurer-2026`; added Steven Johnson and Eric Lund profiles. |
| Kansas Governor | Brandon Adams, Doug Billings, Mark Lane, Sharilyn Ray present in KPDC account index but missing from roster. | Added individual v2 profiles and added to governor grouping as KPDC/campaign-account records pending final ballot readback. |
| Kansas Insurance Commissioner | Ric Koehn present in KPDC account index but missing from roster. | Added individual v2 profile and added to insurance grouping as KPDC account record pending final ballot readback. |
| SBOE District 5 | Site treated Cathy Hopkins as the 2026 field; KPDC District 5 index lists Michelle Cunningham and Lorie Wood. | Added Michelle Cunningham and Lorie Wood; changed election grouping to those two. Hopkins remains a current-officeholder profile and is explicitly not confirmed filed for 2026. |

Primary/current sources used:

- Statewide filing mirror: `https://candidatefiling.us/Info/Default?det=Y&e=545606222&j=2795522868&pj=26405586&s=802933811&st=KS`
- KPDC statewide 2026 index: `https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm`
- KPDC State Board of Education odd-district 2026 index: `https://www.kansas.gov/ethics/CFAScanned/EdOdd/2026ElecCycle/BOELinksOdd2026EC.htm`

## Local

| Race | Problem before | Action |
| --- | --- | --- |
| Ellis County Commission - 2026 ballot | The site listed Nathan Leiker and Michael Berges as 2026 ballot candidates. | Corrected to Michael Berges only because the current Ellis County 2026 filing PDF lists Commission District 1 / Michael Berges only. |
| Ellis County current/off-cycle officials | Nathan Leiker needed to stay visible, but not as a 2026 filed candidate. | Moved Leiker into `ellis-county-incumbents-off-cycle` as a current-officeholder profile. |
| Ellis County off-cycle slug mismatch | Scott Braun and Neal Younger used `ellis-county-current`, which did not match the election grouping. | Recompiled both to `ellis-county-incumbents-off-cycle`. |
| USD 489 | Ken Brooks was still labeled Board President in compiled v2 metadata. | Recompiled to `USD 489 Board Member`; Vajnar remains the Board President source-backed profile. |

Primary/current sources used:

- Ellis County 2026 candidate filings PDF: `https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings`
- Ellis County Commission page: `https://www.ellisco.net/120/County-Commission`
- Hays USD 489 Board of Education page / public records already captured in candidate files.

## Remaining Recheck

This audit should be rerun after the Kansas 2026 filing deadline and after final county/SOS lists are posted. The site now distinguishes:

- confirmed filing rows,
- FEC federal candidate records,
- KPDC campaign-finance account records,
- current officeholders who are not currently shown as 2026 filed candidates.

That distinction is necessary because KPDC accounts can exist before, after, or without a final certified ballot slot.
