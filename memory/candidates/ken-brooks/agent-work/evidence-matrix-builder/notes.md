# Notes — evidence-matrix-builder — ken-brooks — 2026-05-20

## Summary
- Raw rows read: 4126
- Final deduplicated rows written: 2330
- Duplicate rows absorbed: 1796
- Rejected rows retained in final matrix: 438
- Use-with-caveat rows: 61
- Source-only rows: 32
- Rows without issue mapping: 783

## Final Use Decisions
```json
{
  "use": 171,
  "use-with-caveat": 61,
  "source-only": 32,
  "background-only": 1628,
  "reject": 438
}
```

## Final Confidence
```json
{
  "confirmed": 37,
  "likely": 269,
  "weak-signal": 98,
  "contradicted": 3,
  "unknown": 1923
}
```

## Source Tiers
```json
{
  "primary": 40,
  "secondary": 266,
  "social": 99,
  "internal-memory": 1925
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 9    |
| 2     | LGBT / gender / parental rights                    | 41   |
| 3     | Education / curriculum / schools                   | 531  |
| 4     | Religious liberty / church / civic morality        | 315  |
| 5     | Taxes / spending / debt                            | 134  |
| 6     | Economy / jobs / labor                             | 16   |
| 7     | Guns / Second Amendment                            | 3    |
| 8     | Immigration / border                               | 8    |
| 9     | Health care / insurance / Medicaid                 | 50   |
| 10    | Election integrity / voting / courts               | 476  |
| 11    | Public safety / law enforcement / criminal justice | 122  |
| 12    | Agriculture / rural economy / water                | 34   |
| 13    | Local governance / transparency / ethics           | 852  |
| 14    | Environment / energy / land use                    | 7    |

## Conflict / Caveat Review
- 3 rows are marked contradicted and must not be asserted without explicit caveat.
- 61 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-ken-brooks-02145: narrative: "_A summary of what Ken Brooks has publicly said, posted, and had attributed to him across USD 489 board pages, election records, local candidate Q&As, local news, public meeting coverage, civic/church profile — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ken-brooks-00014: Role records should be handled carefully. The user-facing profile labels Brooks as USD 489 Board President, but verified public sources did not support that as of May 11, 2026. Tiger Media Network reported in July 2025 t — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ken-brooks-00027: USD 489 official site (https://www.usd489.com/page/board-of-education, …/page/boe-board-of-education) — first URL returned a truncated response, second URL 404. Member roster, term expirations, and meeting-archive index  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ken-brooks-00033: Primary record location: USD 489 BoardDocs portal (https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic) for April 2023 meeting — DIRECT FETCH BLOCKED (403). Underlying primary record exists per portal structure; not ret — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ken-brooks-02226: On the March 2026 reconsideration of the proposed sale of 7.3 acres north of Felten Elementary, Ruder said, "If we sit on the land, we get nothing," and "I don't think we can just say no," urging the board to invite bidd — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ken-brooks-00011: After the November 2025 election, Brooks kept his public comments focused on the board's work. Hays Post reported that Brooks and Craig Pallister tied with 1,948 unofficial votes; official Ellis County results later list — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ken-brooks-00283: Why primary not confirmed: HighBond/Diligent portal (https://usd489.community.highbond.com/Portal/) loads its archive list via client-side JavaScript that does not execute under non-browser fetch. The Hays Post April 202 — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ken-brooks-01488: The accessible set does not show Brooks centering national partisan issues, Donald Trump, Joe Biden, abortion, guns, immigration, LGBTQ policy, partisan judicial politics, Medicaid, rural hospitals, water/Ogallala policy — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01435: In 2025-2026 board coverage, Brooks repeatedly pushed against board micromanagement. Tiger Media Network quoted him opposing delay on the Hays High handbook because administrators had done a strong job. In April 2026 bat — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01454: Hays Post Apr. 2026 bathroom/vandalism story: Brooks pushed back on repeated bathroom arguments and said the board should not micromanage administrators. ([source](https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e928 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01455: Tiger Media Network Apr. 2026 bathroom/vandalism story: Brooks challenged unsupported data claims and said administrators should not feel attacked. ([source](https://tigermedianet.com/?p=96863)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-00013: The accessible social footprint is thin. A LinkedIn public preview identifies Allen Ken Brooks in Hays with Insurance Planning, Inc., University of Central Oklahoma, CSP and CFPS credentials, 234 followers, and 238 conne — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01354: https://www.facebook.com/Ken-Brooks-for-Hays-USD-489-School-Board-106283281672831/ (numeric-ID page, likely the original 2021-cycle campaign page) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01381: Facebook — *Ken Brooks for Hays USD 489 School Board (numeric-ID page)* — https://www.facebook.com/Ken-Brooks-for-Hays-USD-489-School-Board-106283281672831/ — accessed 2026-05-20 — preliminary tier: social (presence only — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01400: Race: USD 489 Board of Education (NP) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01401: Election slug: usd-489-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01403: Capture mode: logged-out public web capture, USD 489 official/board-portal pages, public election records, local news, candidate-attributed Q&A material, public profile previews, church/civic pages, and platform/search c — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01410: | Hays Post candidate Q&As | 2021 and 2025 Hays Post profiles | FOUND | Densest candidate-attributed issue messaging: bond, fees, budget, board role, special education funding, community service, church, COVID mitigation — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01413: | GoodParty.org profile | https://goodparty.org/candidate/ken-brooks/hays-usd-489-school-board | FOUND, LIMITED | Public civic profile for Ken Brooks, Hays USD 489 School Board, party nonpartisan. It states the candidate — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ken-brooks-01416: | Campaign Facebook page | Public web/search check | NOT FOUND | No clearly candidate-controlled campaign Facebook page surfaced. Public discussion of USD 489 bathrooms on Facebook was reported by local media, but no Bro — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-ken-brooks-00509: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00516: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00427: Source: [Kansas Legislature: SB 75](https://www.kslegislature.gov/li/b2025_26/measures/sb75/) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-ken-brooks-00711: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00810: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-02227: Two contextual notes are visible in the harvested record. First, Ruder is identified in multiple local pieces as a member of what local coverage refers to as the Ruder family network in Hays government — her husband Vern — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-02225: In office, Ruder's quoted positions on operational questions cluster around two themes: a non-micromanagement posture toward administration and a priority-setting frame that flags time spent on non-academic issues. On sc — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00025: USD 489 BoardDocs portal (https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic, …/Public, https://www.boarddocs.com/ks/usd489/Board.nsf, and deep-link …/goto?open=&id=BHXSFC6C436A) — all four URL forms returned HTTP 403  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00635: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00646: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00672: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00679: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00695: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00925: [USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00926: [Hays USD Candidate Q&A: Curt Vajnar](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00927: [Teacher of the Month: Vajnar says goodbye to HHS](https://hayspost.com/posts/5e878e4beb7f170536019f51) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00951: [Hays USD 489 School Board Candidate: Ruth Ruder](https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00952: [Hays USD 489 BOE Candidate: Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00991: [Hays USD 489 School Board Candidate: Derek Yarmer](https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ken-brooks-00992: [Hays USD 489 BOE Candidate: Derek Yarmer](https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
