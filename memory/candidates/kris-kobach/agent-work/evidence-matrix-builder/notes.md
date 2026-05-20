# Notes — evidence-matrix-builder — kris-kobach — 2026-05-20

## Summary
- Raw rows read: 12133
- Final deduplicated rows written: 5235
- Duplicate rows absorbed: 6898
- Rejected rows retained in final matrix: 812
- Use-with-caveat rows: 72
- Source-only rows: 132
- Rows without issue mapping: 2325

## Final Use Decisions
```json
{
  "use": 294,
  "use-with-caveat": 72,
  "source-only": 132,
  "background-only": 3925,
  "reject": 812
}
```

## Final Confidence
```json
{
  "confirmed": 81,
  "likely": 511,
  "weak-signal": 163,
  "contradicted": 2,
  "unknown": 4478
}
```

## Source Tiers
```json
{
  "primary": 83,
  "secondary": 509,
  "social": 163,
  "internal-memory": 4480
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 108  |
| 2     | LGBT / gender / parental rights                    | 57   |
| 3     | Education / curriculum / schools                   | 248  |
| 4     | Religious liberty / church / civic morality        | 411  |
| 5     | Taxes / spending / debt                            | 112  |
| 6     | Economy / jobs / labor                             | 110  |
| 7     | Guns / Second Amendment                            | 50   |
| 8     | Immigration / border                               | 138  |
| 9     | Health care / insurance / Medicaid                 | 234  |
| 10    | Election integrity / voting / courts               | 1510 |
| 11    | Public safety / law enforcement / criminal justice | 564  |
| 12    | Agriculture / rural economy / water                | 106  |
| 13    | Local governance / transparency / ethics           | 1508 |
| 14    | Environment / energy / land use                    | 22   |

## Conflict / Caveat Review
- 2 rows are marked contradicted and must not be asserted without explicit caveat.
- 72 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-kris-kobach-04934: narrative: "_A summary of what Kris Kobach has publicly said, posted, and amplified across campaign channels, official attorney general channels, indexed social media, LinkedIn, and credible public coverage. Drawn from p — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-kris-kobach-00010: The still-live campaign video archive reinforces Kobach's older AG campaign frame. The campaign site embeds videos about Congress testimony, attacks on Chris Mann, family safety, sheriff/law-enforcement support, qualific — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-kris-kobach-00023: Important correction for later compilers: the existing UI v2 object contains stale/mismatched fields, including campaignWebsite: https://mann.house.gov/about, and local site-profile.md says Kobach is a Republican candida — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-kris-kobach-01572: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-kris-kobach-02992: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-kris-kobach-04270: summary: "Existing compiled UI context contains stale/mismatched fields: campaignWebsite points to Tracey Mann's House page, and local site-profile prose says Kobach is running for governor. Later compiler should correct — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-kris-kobach-03915: The accessible X mirror exposed a limited amplification sample. Kobach amplified RAGA on the Lyon County K-9 grant and an Eric W. post praising his AG office's connection to Trump administration legal staffing. The issue — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03924: Abortion is prominent in the broader candidate profile and older campaign record, but it was not a meaningful topic in the accessible current social sample captured for this harvest. Guns/Second Amendment appeared throug — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-04753: Hart's public alignment signal is built more through events and organizations than through reposts. The captured Bluesky feed contains no reposts from other accounts and no shared posts from Democratic primary opponents. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03874: 4 weeks ago -- State of the Union post opposing in-state tuition rates for undocumented immigrants. Engagement: 24 replies, 42 reposts, 252 likes, 6K views, 2 quotes. Topic: immigration / higher education. ([source](http — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03877: 1 month ago -- Naloxone distribution box at Pratt Community College. Engagement on official post quoted by Kobach: 10 replies, 4 reposts, 14 likes, 1K views, 0 quotes. Topic: fentanyl / public health. ([source](https://t — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03885: Official X mirror item: naloxone distribution at Pratt Community College. Engagement: 10 replies, 4 reposts, 14 likes, 984 views, 0 quotes. Topic: fentanyl / naloxone. ([source](https://mobile.twstalker.com/KSAGOffice)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03887: Official X mirror item: AG opinion on in-state tuition for undocumented immigrants. Engagement: 23 replies, 57 reposts, 282 likes, 10K views, 2 quotes. Topic: immigration / higher education / AG opinion. ([source](https: — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03923: Across the accessible reviewed set, Kobach's current public posting did not show sustained attention to Medicaid expansion, rural hospital finance, prescription drug affordability, child care costs, housing affordability — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-04756: For Kansas-specific issues, Hart's feed names rural healthcare, agriculture, severe-weather forecasting, and county-level campaign stops. On April 22, he wrote that he heard from farmers "across the political spectrum" ( — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03910: | Federal overreach, constitutional litigation, Title IX, DACA, ATF/Second Amendment, Pfizer/COVID, and special litigation | 7 | 19% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03876: 4 weeks ago -- State of the Union post praising President Trump's tariff approach and criticizing income taxes. Engagement: 26 replies, 22 reposts, 93 likes, 2K views, 0 quotes. Topic: tariffs / taxes / Trump alignment.  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03892: Official X mirror item: Johnson County sales-tax court ruling. Engagement: 12 replies, 8 reposts, 37 likes, 6K views, 1 quote. Topic: local government authority / tax. ([source](https://twstalker.com/KSAGOffice)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03913: | Taxes, tariffs, property rights, energy/ranching, and rural economy | 2 | 6% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-kris-kobach-03843: | X / Twitter | https://x.com/KrisKobach1787 | FOUND / INDEXED | Campaign/personal account. Public X mirror lists 2K tweets, 26K followers, 533 following, 632 likes; bio says he is the 45th Kansas AG, fighting government — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-kris-kobach-00039: URL: https://www.sos.ks.gov/elections/candidate-information.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kris-kobach-00635: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-00642: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-03006: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-00837: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-00936: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-01446: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-01603: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-02287: [Jeff Colyer - Kansas Historical Society (Kansapedia)](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-03019: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-03196: Source: [Kansas Secretary of State press release, October 10, 2024](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-kris-kobach-03505: [Kansas Secretary of State -- Schwab Biography](https://sos.ks.gov/about/schwab-biography.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-03507: [Kansas Legislature -- Rep. Schwab Profile](https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-03536: [Kansas SOS Press Release: Schwab satisfied with DeJoy call](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-04794: narrative: "_A summary of what Vicki Schmidt has publicly said, posted, and amplified across campaign channels, official social pages, public profile metadata, and indexed public records. Drawn from public captures of he — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-04841: narrative: "_A summary of what Jeff Colyer has publicly said, posted, and amplified across campaign channels, indexed social media, and credible public coverage. Drawn from public captures of campaign websites, X-indexed — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-04900: narrative: "*A summary of what Ethan Corson has publicly said, posted, and amplified across candidate-controlled public channels and credible indexed public coverage. Drawn from his campaign website, embedded X feed, Fac — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-00761: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-00772: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-kris-kobach-00785: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
