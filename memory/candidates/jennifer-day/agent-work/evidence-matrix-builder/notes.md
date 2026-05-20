# Notes — evidence-matrix-builder — jennifer-day — 2026-05-20

## Summary
- Raw rows read: 2339
- Final deduplicated rows written: 1261
- Duplicate rows absorbed: 1078
- Rejected rows retained in final matrix: 163
- Use-with-caveat rows: 46
- Source-only rows: 21
- Rows without issue mapping: 524

## Final Use Decisions
```json
{
  "use": 76,
  "use-with-caveat": 46,
  "source-only": 21,
  "background-only": 955,
  "reject": 163
}
```

## Final Confidence
```json
{
  "confirmed": 29,
  "likely": 83,
  "weak-signal": 102,
  "unknown": 1047
}
```

## Source Tiers
```json
{
  "primary": 30,
  "secondary": 82,
  "social": 102,
  "internal-memory": 1047
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 20   |
| 2     | LGBT / gender / parental rights                    | 14   |
| 3     | Education / curriculum / schools                   | 46   |
| 4     | Religious liberty / church / civic morality        | 33   |
| 5     | Taxes / spending / debt                            | 32   |
| 6     | Economy / jobs / labor                             | 90   |
| 7     | Guns / Second Amendment                            | 34   |
| 8     | Immigration / border                               | 21   |
| 9     | Health care / insurance / Medicaid                 | 30   |
| 10    | Election integrity / voting / courts               | 466  |
| 11    | Public safety / law enforcement / criminal justice | 69   |
| 12    | Agriculture / rural economy / water                | 28   |
| 13    | Local governance / transparency / ethics           | 478  |
| 14    | Environment / energy / land use                    | 7    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 46 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-jennifer-day-01124: narrative: "_A summary of what Jennifer Day has publicly said, posted, and amplified across campaign channels and public social media. Drawn from public captures of her campaign website, Bluesky, X/Twitter, Instagram, Fa — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jennifer-day-00027: | s-sos-candidate-list-blocked | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | attempted 2026-05-19 | Official candidate-list endpoint returned JavaScript verification in this environment | b — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jennifer-day-00427: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-jennifer-day-00011: Several issue areas were not prominent in the accessible campaign-controlled material. The reviewed set did not show sustained discussion of abortion, LGBTQ policy, religious liberty, immigration, school choice, marijuan — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00700: Across the accessible public set reviewed, Day's current campaign channels did not show sustained issue coverage on abortion, LGBTQ policy, religious liberty, immigration, school choice, marijuana policy, Medicaid expans — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00044: | s-bsky-hb2452 | social | https://bsky.app/profile/electjenday.bsky.social/post/3mckv72p62c2b | posted 2026-01-16; local capture 2026-05-11 | Post opposing moving city/school elections to even-numbered years | election  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00655: Wichita Public Library Kansas Elections guide listing Jennifer Day among 2026 Kansas Secretary of State candidates. ([source](https://www.wichitalibrary.org/Research/informedvoter/Pages/kansas.aspx)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00660: Bluesky post, 2026-01-16, opposing moving city and school elections to even-numbered years and saying cities and school districts did not support the bill. ([source](https://bsky.app/profile/electjenday.bsky.social/post/ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00669: Bluesky post, 2026-04-06, saying her current LLC report and fee were easier than finding lighting for a residential rehab project. ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mithgio4yc2p)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00004: The social feed most available for post-level review is Bluesky, where the campaign account had 32 followers, 37 following, and 70 posts on May 11, 2026. The accessible feed returned 55 recent entries from Nov. 18, 2025  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00048: | s-bsky-llc | social | https://bsky.app/profile/electjenday.bsky.social/post/3mithgio4yc2p | posted 2026-04-06; local capture 2026-05-11 | LLC filing / business-services post | business services | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00643: The campaign website is the central source and gives the account set its governing frame. It opens with "OUR RIGHT TO VOTE IS FUNDAMENTAL," says Day is "running to safeguard our elections," and says Kansans deserve "a sa — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00650: Campaign website homepage and platform text, captured 2026-05-11. Key issue areas: election integrity, access to voting, public communication against disinformation, county election coordination, business registration, a — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00653: DASS Kansas 2026 page, which describes Day as a businesswoman, community leader, former election worker, and candidate focused on safe, secure, accessible elections, disinformation, participation, and business growth. ([ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00663: Bluesky post, 2026-01-26, citing seven years volunteering at polling places and serving as an election worker. ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mde3smr6pm2i)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00683: | Business-services / LLC / entrepreneurship references | 1 | 2% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00701: The campaign does discuss business services, but in the accessible social feed this appears much less often than voting access and campaign travel. No public account was identified on TikTok, Threads, Truth Social, Gab,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00049: | s-bsky-gun-sense | social | https://bsky.app/profile/electjenday.bsky.social/post/3mk3pnx2lz224 | posted 2026-04-22; local capture 2026-05-11 | Moms Demand Action Gun Sense Candidate distinction | guns/public safety | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00670: Bluesky post, 2026-04-22, announcing a 2026 Gun Sense Candidate distinction from Moms Demand Action. ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mk3pnx2lz224)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-jennifer-day-00684: | Gun-policy validator signal | 1 | 2% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-jennifer-day-00722: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-jennifer-day-00743: url: "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04JD_202601.pdf" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-jennifer-day-00442: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00455: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00451: [Kansas Reflector: Sykes challenges Hawkins](https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00452: [Kansas Reflector: Hawkins launches campaign with pro-Trump rhetoric](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00432: [Kansas Reflector: Ethan Corson enters race](https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00437: [Kansas Reflector: Democrats sharpen attack on Marshall](https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00447: [Kansas Reflector: Pat Proctor declares for SOS](https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00457: [Barb Wasinger campaign site](https://barbforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-01003: https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/ -- Schwab leaving for governor race -- accessed 2026-03-30 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-01011: [KVOE - Rahjes in Emporia](https://kvoe.com/2026/03/16/rahjes-in-emporia-touting-secretary-of-state-bid/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00007: The campaign's everyday posting is more travel-and-field heavy than policy-heavy. In the 55 accessible Bluesky entries, 24 were chiefly about county visits, Democratic events, volunteer or house-party asks, supporter con — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00322: Two reasons: First, the 2022 abortion vote proved that Kansas voters will cross party lines on the right issue. If DOGE cuts hit Kansas hard -- closing rural VA clinics, cutting farm subsidies, eliminating Social Securit — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00342: Kris Kobach (Republican) beat Chris Mann (Democrat) by only 15,000 votes out of 1 million cast -- a 1.6% margin, the closest statewide race that year. Kobach is one of the most polarizing figures in Kansas politics. He i — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00367: Dan Hawkins (Republican): Current Kansas House Speaker, 30 years in the insurance business, runs his own insurance agency. His campaign website leads with "PRO-LIFE. PRO-GUN. PRO-TRUMP." As House Speaker, he proposed cut — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-00335: Colin McRoberts -- University of Kansas business school professor, inspired to run after attending Marshall's contentious town hall in Oakley — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-01062: | Spouse | Diane Hawkins (married 1985, "college sweetheart") | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-01086: Craig Musser: Education, family, and detailed career background remain largely undisclosed — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-jennifer-day-01070: Pat Proctor: No church identified (lives near Fort Leavenworth) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
