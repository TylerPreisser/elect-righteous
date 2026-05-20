# Notes — evidence-matrix-builder — sam-lane — 2026-05-20

## Summary
- Raw rows read: 2485
- Final deduplicated rows written: 1317
- Duplicate rows absorbed: 1168
- Rejected rows retained in final matrix: 145
- Use-with-caveat rows: 66
- Source-only rows: 22
- Rows without issue mapping: 563

## Final Use Decisions
```json
{
  "use": 98,
  "use-with-caveat": 66,
  "source-only": 22,
  "background-only": 986,
  "reject": 145
}
```

## Final Confidence
```json
{
  "confirmed": 40,
  "likely": 96,
  "weak-signal": 165,
  "unknown": 1016
}
```

## Source Tiers
```json
{
  "primary": 42,
  "secondary": 94,
  "social": 165,
  "internal-memory": 1016
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 31   |
| 2     | LGBT / gender / parental rights                    | 14   |
| 3     | Education / curriculum / schools                   | 46   |
| 4     | Religious liberty / church / civic morality        | 28   |
| 5     | Taxes / spending / debt                            | 32   |
| 6     | Economy / jobs / labor                             | 28   |
| 7     | Guns / Second Amendment                            | 21   |
| 8     | Immigration / border                               | 26   |
| 9     | Health care / insurance / Medicaid                 | 33   |
| 10    | Election integrity / voting / courts               | 480  |
| 11    | Public safety / law enforcement / criminal justice | 58   |
| 12    | Agriculture / rural economy / water                | 33   |
| 13    | Local governance / transparency / ethics           | 522  |
| 14    | Environment / energy / land use                    | 12   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 66 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-sam-lane-00035: Direct readback of the SOS live candidate list at https://sos.ks.gov/elections/elections_upcoming_candidate.aspx was blocked in this environment by JavaScript/robot verification in the text browser and by CloudFront 403  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-sam-lane-00487: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-sam-lane-00616: The live Kansas SOS candidate-list endpoint could not be read directly in this environment: https://sos.ks.gov/elections/elections_upcoming_candidate.aspx returned JavaScript/robot verification in the text browser and a  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-sam-lane-00815: No candidate-controlled post taking a detailed position on abortion policy was found in the captured set; related content appears mainly through broader civil-liberties/authoritarianism frames and a DASS-style democracy  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00816: No sustained platform plank was found on taxes, Medicaid, school finance, agriculture, guns, or abortion, beyond scattered social commentary. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00735: LGBTQ / gender / pronouns / identity documents: 7 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00793: 2025-11-08 - Asked why sex is listed on passports if it does not reliably identify people, especially people who do not conform to gender norms. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00796: Topic: LGBTQ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00800: 2025-06-17 - Mocked gender-affirming-care bans with a joke about "truck nuts." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00742: Biography page: Lane describes a working-class background, a University of Kansas psychology degree, construction inspection/material testing work, retail/shipping/food-service jobs, and time connected to Haskell Indian  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00818: No paid-ad library evidence was captured in this pass. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00814: No church affiliation was found in candidate-controlled material reviewed. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00005: His public persona is unusually personal for a statewide candidate. He leans into being a working person and an outsider, not a polished party recruit. On April 12, 2026, he said he had a full-time job outside politics b — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00733: Kansas local issues, schools, small business, weather, road safety, local candidates: 16 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00737: Economy, corporate power, health insurance, surveillance pricing, campaign finance: 11 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00741: Secretary-of-state explainer: Lane describes the office as mostly administrative, including business registration and legal records, but emphasizes its role overseeing elections; he says Kansas cannot allow voter suppres — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00736: Guns, policing, protest tactics, public safety: 8 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00004: Lane also speaks in a strongly anti-authoritarian register. His Bluesky profile says due process and checks and balances are in the Constitution, but the people's voice only matters if elections are fair and accurate ([s — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00729: Anti-authoritarian / Trump / due process / civil liberties / ICE: 45 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sam-lane-00734: Immigration and immigrant rights: 10 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-sam-lane-00024: Source: https://sos.ks.gov/media/press-releases/2026/05-01-26-one-month-countdown-until-candidate-filing-deadline.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sam-lane-00052: Source: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04SL_202601.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sam-lane-00846: url: "https://sos.ks.gov/media/press-releases/2026/05-01-26-one-month-countdown-until-candidate-filing-deadline.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sam-lane-00502: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00515: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00511: [Kansas Reflector: Sykes challenges Hawkins](https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00512: [Kansas Reflector: Hawkins launches campaign with pro-Trump rhetoric](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00492: [Kansas Reflector: Ethan Corson enters race](https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00497: [Kansas Reflector: Democrats sharpen attack on Marshall](https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00507: [Kansas Reflector: Pat Proctor declares for SOS](https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00517: [Barb Wasinger campaign site](https://barbforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-01115: https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/ -- Schwab leaving for governor race -- accessed 2026-03-30 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00037: Source: https://www.jocoelection.org/candidates-elected-officials/samuel-lane — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sam-lane-00164: Source: https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=voiceinavacuum.bsky.social — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sam-lane-00694: Tier: T2 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sam-lane-00795: 2025-10-03 - Posted that Kansas should begin accepting driver's-license sex-marker amendments and criticized Kobach's position. — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00382: Two reasons: First, the 2022 abortion vote proved that Kansas voters will cross party lines on the right issue. If DOGE cuts hit Kansas hard -- closing rural VA clinics, cutting farm subsidies, eliminating Social Securit — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00402: Kris Kobach (Republican) beat Chris Mann (Democrat) by only 15,000 votes out of 1 million cast -- a 1.6% margin, the closest statewide race that year. Kobach is one of the most polarizing figures in Kansas politics. He i — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-00427: Dan Hawkins (Republican): Current Kansas House Speaker, 30 years in the insurance business, runs his own insurance agency. His campaign website leads with "PRO-LIFE. PRO-GUN. PRO-TRUMP." As House Speaker, he proposed cut — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sam-lane-01068: "id": "abortion-policy", — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
