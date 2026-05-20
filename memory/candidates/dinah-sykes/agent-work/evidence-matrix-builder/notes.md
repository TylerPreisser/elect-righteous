# Notes — evidence-matrix-builder — dinah-sykes — 2026-05-20

## Summary
- Raw rows read: 4843
- Final deduplicated rows written: 1877
- Duplicate rows absorbed: 2966
- Rejected rows retained in final matrix: 261
- Use-with-caveat rows: 55
- Source-only rows: 47
- Rows without issue mapping: 703

## Final Use Decisions
```json
{
  "use": 142,
  "use-with-caveat": 55,
  "source-only": 47,
  "background-only": 1372,
  "reject": 261
}
```

## Final Confidence
```json
{
  "confirmed": 48,
  "likely": 180,
  "weak-signal": 116,
  "unknown": 1533
}
```

## Source Tiers
```json
{
  "primary": 49,
  "secondary": 179,
  "social": 116,
  "internal-memory": 1533
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 67   |
| 2     | LGBT / gender / parental rights                    | 39   |
| 3     | Education / curriculum / schools                   | 91   |
| 4     | Religious liberty / church / civic morality        | 60   |
| 5     | Taxes / spending / debt                            | 72   |
| 6     | Economy / jobs / labor                             | 56   |
| 7     | Guns / Second Amendment                            | 18   |
| 8     | Immigration / border                               | 36   |
| 9     | Health care / insurance / Medicaid                 | 283  |
| 10    | Election integrity / voting / courts               | 604  |
| 11    | Public safety / law enforcement / criminal justice | 168  |
| 12    | Agriculture / rural economy / water                | 46   |
| 13    | Local governance / transparency / ethics           | 621  |
| 14    | Environment / energy / land use                    | 16   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 55 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-dinah-sykes-01673: narrative: "_A summary of what Dinah Sykes has publicly said, posted, and amplified across campaign channels, official legislative pages, social profile metadata, indexed public posts, and public news/interview items. Dr — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-dinah-sykes-00031: | s-sos-candidate-list-blocked | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | accessed 2026-05-19 | Official candidate-list endpoint was not directly readable in this environment | blocker | — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-dinah-sykes-00811: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-dinah-sykes-01494: [Kansas Reflector - SB 360 blocked](https://kansasreflector.com/2026/03/22/kansas-house-speaker-desperately-maneuvers-to-sabotage-vote-on-senate-bill-capping-drug-costs/) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-dinah-sykes-01080: Kansas Reflector, Apr. 29, 2024: Sykes spoke at a reproductive-rights rally and vowed to knock on doors to break the supermajority after abortion-related veto override activity. ([source](https://kansasreflector.com/2024 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01081: Johnson County Post, Feb. 13, 2023: Sykes's candidate-attributed Capitol Update criticized public-health limits, anti-trans bills, abortion restrictions, vouchers, Medicaid refusal, and flat-tax policy. ([source](https:/ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01091: | Health care access, Medicaid, breast-cancer screening, reproductive rights, and gender-affirming care | 6 | 29% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01109: Abortion rally: "We're going to knock on every damn door..." ([source](https://kansasreflector.com/2024/04/29/with-veto-override-attempt-underway-kansas-abortion-rights-supporters-sound-alarm/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01115: Within the accessible material reviewed, no sustained campaign-controlled 2026 insurance messaging centered guns, immigration/border policy, marijuana policy, rural broadband, road and bridge funding, water policy, the O — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01079: Advocate, Apr. 3, 2024: Sykes discussed anti-LGBTQ+ legislation and gender-affirming care, saying legislation targeting trans Kansans was "filled with hate" and warning about effects on children. ([source](https://www.ad — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01108: LGBTQ+ interview: "It's just filled with hate..." about gender-affirming care restrictions. ([source](https://www.advocate.com/politics/kansas-lgbtq-laws)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01069: Kansas Senate Democrats profile, captured 2026-05-11: first woman to serve as Kansas Senate Democratic leader; profile emphasizes public school funding, early childhood education, survivor protections, courage, compassio — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01074: WIBW, Jan. 14, 2025: Democratic leaders identified minimum wage, health care access, public education, and tax relief as priorities. Sykes said Republican priorities should be tested by whether they make life more afford — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01090: | Public schools, early childhood, education leadership, and PTA/community biography | 5 | 24% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01083: Yahoo/Kansas City Star opinion, May 21, 2023: Sykes wrote as a Christian, mother, and daughter who lost her mother to breast cancer, linking those experiences to public schools, health care, justice, and mercy. ([source] — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01076: Kansas Reflector, Feb. 20, 2024: Sykes criticized a flat-tax plan and called for responsible tax cuts that support working families. ([source](https://kansasreflector.com/2024/02/20/kansas-house-republicans-fail-to-overr — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01077: TwStalker indexed X repost, 2024-era: Sykes thanked Gov. Kelly for vetoing a "reckless flat tax" and called for affordable tax cuts for working families. This was indexed from X via a third-party page, not captured from  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01084: WIBW, Jan. 8, 2024: Sykes backed a bipartisan tax package and described the child-care tax credit as a "win-win" for families, employers, and workforce participation. ([source](https://www.wibw.com/2024/01/08/gov-kelly-s — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01089: | Cost of living, tax relief, minimum wage, paid leave, child care, and working-family affordability | 7 | 33% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-dinah-sykes-01106: Indexed X post: "Thank you @GovLauraKelly for vetoing a reckless flat tax that would take us back to Brownback while doing next to nothing for the middle class." ([source](https://twstalker.com/RepSydneyCarlin)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-dinah-sykes-00593: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00595: [Patrick Schmidt Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-01137: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-dinah-sykes-00563: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00564: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00565: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00826: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00839: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-01749: narrative: "Barb Wasinger's public messaging is built around a practical incumbent identity: a Hays small-business owner and former local official who says she is focused on results for Ellis County. Her newer campaign s — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-01737: "whereTheyWorship": "Wasinger publicly identifies as a member of St. Joseph Catholic Church in Hays, and her campaign biography says she serves there as a lector and an notable Minister of Holy Communion. Church website: — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00574: [Sunflower State Journal: Hawkins reveals fundraising](https://sunflowerstatejournal.com/hawkins-reveals-campaign-fundraising-for-insurance-commissioner/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00836: [Kansas Reflector: Hawkins launches campaign with pro-Trump rhetoric](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-01497: [Hawkins for Insurance - Campaign Website](https://www.hawkinsforinsurance.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-01540: [Kansas Reflector - Senate minority leader challenges Hawkins](https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00559: [Heartland Signal: Kansas Republicans defy Hawkins, pass prescription drug bill](https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bi — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00568: [Ballotpedia: Daniel Hawkins](https://ballotpedia.org/Daniel_Hawkins_(Kansas)) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00570: [Ballotpedia: Patrick Schmidt](https://ballotpedia.org/Patrick_Schmidt) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00584: [Jason Hart: hartforsenate.com](https://hartforsenate.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00585: [Christy Davis: christydavisforkansas.com](https://www.christydavisforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-dinah-sykes-00586: [Sandy Spidel Neumann: sandyforkansas.com](https://sandyforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
