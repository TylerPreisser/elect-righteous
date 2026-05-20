# Notes — evidence-matrix-builder — daniel-hawkins — 2026-05-20

## Summary
- Raw rows read: 3093
- Final deduplicated rows written: 1632
- Duplicate rows absorbed: 1461
- Rejected rows retained in final matrix: 209
- Use-with-caveat rows: 38
- Source-only rows: 41
- Rows without issue mapping: 660

## Final Use Decisions
```json
{
  "use": 93,
  "use-with-caveat": 38,
  "source-only": 41,
  "background-only": 1251,
  "reject": 209
}
```

## Final Confidence
```json
{
  "confirmed": 44,
  "likely": 115,
  "weak-signal": 100,
  "contradicted": 2,
  "unknown": 1371
}
```

## Source Tiers
```json
{
  "primary": 44,
  "secondary": 115,
  "social": 100,
  "internal-memory": 1373
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 54   |
| 2     | LGBT / gender / parental rights                    | 36   |
| 3     | Education / curriculum / schools                   | 41   |
| 4     | Religious liberty / church / civic morality        | 38   |
| 5     | Taxes / spending / debt                            | 73   |
| 6     | Economy / jobs / labor                             | 48   |
| 7     | Guns / Second Amendment                            | 33   |
| 8     | Immigration / border                               | 35   |
| 9     | Health care / insurance / Medicaid                 | 299  |
| 10    | Election integrity / voting / courts               | 479  |
| 11    | Public safety / law enforcement / criminal justice | 112  |
| 12    | Agriculture / rural economy / water                | 31   |
| 13    | Local governance / transparency / ethics           | 548  |
| 14    | Environment / energy / land use                    | 12   |

## Conflict / Caveat Review
- 2 rows are marked contradicted and must not be asserted without explicit caveat.
- 38 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-daniel-hawkins-01428: narrative: "Daniel Hawkins' public campaign voice is bluntly Republican and explicitly pro-Trump. His insurance commissioner site opens with the identity stack [\"Pro-Life. Pro-Gun. Pro-Trump. Conservative Republican.\"] — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-daniel-hawkins-00933: [Hawkins for Insurance](https://www.hawkinsforinsurance.com/), which brands the campaign as "Pro-Life. Pro-Gun. Pro-Trump." and lays out accomplishments and insurance priorities. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00952: Latest visible candidate-controlled material: the older campaign site's embedded Facebook feed showed relative timestamps within days of access on May 11, 2026, including posts on legislative wrap-up, United WE, Moody's, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00959: | Abortion, family, religious liberty, and gender policy | 4 | Pro-life bills, "strengthening the family," girls' sports, gender-transition surgery bans, religious freedom/foster care | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00970: "Pro-Life. Pro-Gun. Pro-Trump. Conservative Republican." - [Hawkins for Insurance](https://www.hawkinsforinsurance.com/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00005: The highest visible engagement signal is not a single viral post but the durability of his public platforms. Indexed profile previews put [@DanHawkinsKS](https://x.com/DanHawkinsKS) at about 2,000 followers, while the ol — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00957: | Taxes, budget, spending, and property tax relief | 6 | Food sales tax, Social Security income tax, income/property tax cuts, $210 million budget-process savings, HB 2043 property-tax posts/statements | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00968: News amplification: the launch message was picked up by [Kansas Reflector](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/); later state — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00976: "HB 2043 gives taxpayers a way to fight back against skyrocketing property taxes." - visible "Speaker Dan Hawkins" Facebook-feed item embedded on [Hawkins for Kansas](https://danhawkinskansas.com/), relative timestamp tw — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00977: "The high cost of property taxes in Kansas has reached crisis level and HB 2043 simply gave taxpayers a voice." - Hawkins statement quoted by [WIBW](https://www.wibw.com/2026/04/27/gov-kelly-vetoes-property-tax-protest-b — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00999: [WIBW: HB 2043 veto response](https://www.wibw.com/2026/04/27/gov-kelly-vetoes-property-tax-protest-bill-kansas-house-speaker-responds/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-01002: [Kansas Reflector: Medicaid/budget interview coverage](https://kansasreflector.com/2025/08/25/kansas-house-speaker-wants-to-slash-200-million-from-state-budget-target-medicaid-for-cuts/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00973: "Unchecked government expansion limits our freedom as individuals and hinders the growth of the businesses our state's economy relies on to thrive." - [Hawkins for Kansas](https://danhawkinskansas.com/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00961: | Immigration, election integrity, COVID authority | 3 | Sanctuary cities, election integrity veto overrides, ending COVID lockdowns | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00926: Race: Kansas Insurance Commissioner, 2026 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00927: Election slug: kansas-insurance-2026 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00931: Daniel Hawkins has an active candidate-controlled web presence anchored by the insurance commissioner site, an older House campaign site, and a public X account. The insurance site links to X, Instagram, and Facebook. Th — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00942: | X/Twitter | Found | [@DanHawkinsKS](https://x.com/DanHawkinsKS); campaign site links X; indexed profile preview lists "HawkinsForInsurance.com" and "KS House Speaker & candidate for KS Insurance Commissioner." | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00944: | Instagram | Found but mostly blocked | Insurance site and older campaign site link Instagram; indexed people-search preview identifies [@danhawkinsks](https://www.instagram.com/danhawkinsks/) as "Speaker Dan Hawkins."  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-daniel-hawkins-00951: Earliest candidate-controlled item used for the current insurance campaign: May 13, 2025 campaign launch coverage quoting Hawkins' statement and describing his campaign site. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-daniel-hawkins-00692: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00693: [Patrick Schmidt Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00661: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00662: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00663: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-01504: narrative: "_A summary of what Dinah Sykes has publicly said, posted, and amplified across campaign channels, official legislative pages, social profile metadata, indexed public posts, and public news/interview items. Dr — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00668: [Ballotpedia: Patrick Schmidt](https://ballotpedia.org/Patrick_Schmidt) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00682: [Jason Hart: hartforsenate.com](https://hartforsenate.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00683: [Christy Davis: christydavisforkansas.com](https://www.christydavisforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00684: [Sandy Spidel Neumann: sandyforkansas.com](https://sandyforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00685: [Erik Murray: erikforkansas.com](https://erikforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00686: [Patrick Schmidt: patrickforkansas.com](https://patrickforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00687: [Michael Soetaert: mikeforkansas.my.canva.site](https://mikeforkansas.my.canva.site/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00689: [Dinah Sykes: dinahsykes.com](https://www.dinahsykes.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-01227: url: "https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bill/" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-daniel-hawkins-01328: [Ballotpedia: Dinah Sykes](https://ballotpedia.org/Dinah_Sykes) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-01502: "source": "Dinah Sykes campaign website, April 1, 2026, https://www.dinahsykes.com/", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00465: ActBlue: [donate/michael-soetaert](https://secure.actblue.com/donate/michael-soetaert) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00807: [donate/michael-soetaert](https://secure.actblue.com/donate/michael-soetaert) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-daniel-hawkins-00486: Kansas Senate Democrats page: [kssenatedems.org/patrick-schmidt](https://www.kssenatedems.org/patrick-schmidt) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
