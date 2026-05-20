# Notes — evidence-matrix-builder — pat-proctor — 2026-05-20

## Summary
- Raw rows read: 2519
- Final deduplicated rows written: 1183
- Duplicate rows absorbed: 1336
- Rejected rows retained in final matrix: 187
- Use-with-caveat rows: 8
- Source-only rows: 23
- Rows without issue mapping: 482

## Final Use Decisions
```json
{
  "use": 81,
  "use-with-caveat": 8,
  "source-only": 23,
  "background-only": 884,
  "reject": 187
}
```

## Final Confidence
```json
{
  "confirmed": 39,
  "likely": 83,
  "weak-signal": 6,
  "unknown": 1055
}
```

## Source Tiers
```json
{
  "primary": 40,
  "secondary": 82,
  "social": 6,
  "internal-memory": 1055
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 20   |
| 2     | LGBT / gender / parental rights                    | 9    |
| 3     | Education / curriculum / schools                   | 41   |
| 4     | Religious liberty / church / civic morality        | 44   |
| 5     | Taxes / spending / debt                            | 23   |
| 6     | Economy / jobs / labor                             | 57   |
| 7     | Guns / Second Amendment                            | 12   |
| 8     | Immigration / border                               | 18   |
| 9     | Health care / insurance / Medicaid                 | 27   |
| 10    | Election integrity / voting / courts               | 452  |
| 11    | Public safety / law enforcement / criminal justice | 63   |
| 12    | Agriculture / rural economy / water                | 27   |
| 13    | Local governance / transparency / ethics           | 451  |
| 14    | Environment / energy / land use                    | 5    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 8 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-pat-proctor-01042: narrative: "_A summary of what Ken Rahjes has publicly said, posted, and amplified across campaign channels, public social metadata, official records, and credible indexed public coverage. Drawn from public captures of h — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-pat-proctor-00122: Kansas SOS live candidate list: https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx (blocked) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-pat-proctor-00391: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-pat-proctor-00003: Across the harvested public record on X ([@RealPatProctor](https://x.com/RealPatProctor)), Facebook ([@PatProctorKS](https://www.facebook.com/PatProctorKS/)), YouTube ([Pat Proctor for Kansas](https://www.youtube.com/@pa — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-pat-proctor-00007: For the Leavenworth district itself, Proctor's local content is less voluminous than his statewide-elections content but is present. An October 5, 2025 [YouTube video](https://www.youtube.com/@patproctorforkansas655) add — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-pat-proctor-00004: Proctor's public alignment network on his own feed centers on Kansas Republican officeholders, election-policy organizations, and his own legislative work product. His Facebook page features a campaign video titled ["Kri — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-pat-proctor-00005: Engagement on Proctor's content is not evenly distributed. His Facebook page hosts the highest-engagement videos when they touch enforcement of election law and ballot-integrity claims, including the [Kobach-framed enfor — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-pat-proctor-01153: "url": "https://www.facebook.com/PatProctorKS/posts/as-the-chairman-of-your-house-elections-committee-and-as-your-next-secretary-of-/1227794369167664/", — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-pat-proctor-00035: URL: https://www.sos.ks.gov/elections/candidate-information.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-pat-proctor-00086: Source: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04PP_202601.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-pat-proctor-00542: Sources: https://www.sos.ks.gov/elections/candidate-information.html and https://sos.ks.gov/elections/important-election-dates.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-pat-proctor-00406: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00419: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00538: Source: https://www.eac.gov/sites/default/files/2026-02/BOA_Roster_for_Website_022426.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-pat-proctor-00549: Sources: https://www.kslegislature.gov/li/b2025_26/measures/hcr5004/ and https://www.kslegislature.gov/b2025_26/resolutions/HCR5004/history/?filter=votes&per_page=20 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-pat-proctor-00415: [Kansas Reflector: Sykes challenges Hawkins](https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00416: [Kansas Reflector: Hawkins launches campaign with pro-Trump rhetoric](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00396: [Kansas Reflector: Ethan Corson enters race](https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00401: [Kansas Reflector: Democrats sharpen attack on Marshall](https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00421: [Barb Wasinger campaign site](https://barbforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00558: Source: https://kansasreflector.com/2025/06/13/kansas-republican-exploits-fear-of-imaginary-axis-of-ballot-harvesting-to-gain-political-advantage/ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-pat-proctor-00820: https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/ -- Schwab leaving for governor race -- accessed 2026-03-30 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-01041: "source": "Ken Rahjes campaign website, accessed April 1, 2026, https://kenforkansas.com/", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00286: Two reasons: First, the 2022 abortion vote proved that Kansas voters will cross party lines on the right issue. If DOGE cuts hit Kansas hard -- closing rural VA clinics, cutting farm subsidies, eliminating Social Securit — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00306: Kris Kobach (Republican) beat Chris Mann (Democrat) by only 15,000 votes out of 1 million cast -- a 1.6% margin, the closest statewide race that year. Kobach is one of the most polarizing figures in Kansas politics. He i — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00331: Dan Hawkins (Republican): Current Kansas House Speaker, 30 years in the insurance business, runs his own insurance agency. His campaign website leads with "PRO-LIFE. PRO-GUN. PRO-TRUMP." As House Speaker, he proposed cut — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00299: Colin McRoberts -- University of Kansas business school professor, inspired to run after attending Marshall's contentious town hall in Oakley — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-pat-proctor-00931: Craig Musser: Education, family, and detailed career background remain largely undisclosed — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
