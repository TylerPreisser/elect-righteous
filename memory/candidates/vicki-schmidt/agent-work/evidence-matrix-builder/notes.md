# Notes — evidence-matrix-builder — vicki-schmidt — 2026-05-20

## Summary
- Raw rows read: 11631
- Final deduplicated rows written: 4205
- Duplicate rows absorbed: 7426
- Rejected rows retained in final matrix: 737
- Use-with-caveat rows: 49
- Source-only rows: 99
- Rows without issue mapping: 1895

## Final Use Decisions
```json
{
  "use": 242,
  "use-with-caveat": 49,
  "source-only": 99,
  "background-only": 3078,
  "reject": 737
}
```

## Final Confidence
```json
{
  "confirmed": 95,
  "likely": 381,
  "weak-signal": 127,
  "contradicted": 1,
  "unknown": 3601
}
```

## Source Tiers
```json
{
  "primary": 97,
  "secondary": 379,
  "social": 127,
  "internal-memory": 3602
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 111  |
| 2     | LGBT / gender / parental rights                    | 18   |
| 3     | Education / curriculum / schools                   | 201  |
| 4     | Religious liberty / church / civic morality        | 343  |
| 5     | Taxes / spending / debt                            | 167  |
| 6     | Economy / jobs / labor                             | 93   |
| 7     | Guns / Second Amendment                            | 21   |
| 8     | Immigration / border                               | 49   |
| 9     | Health care / insurance / Medicaid                 | 381  |
| 10    | Election integrity / voting / courts               | 983  |
| 11    | Public safety / law enforcement / criminal justice | 193  |
| 12    | Agriculture / rural economy / water                | 100  |
| 13    | Local governance / transparency / ethics           | 1244 |
| 14    | Environment / energy / land use                    | 21   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 49 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-vicki-schmidt-03890: narrative: "_A summary of what Vicki Schmidt has publicly said, posted, and amplified across campaign channels, official social pages, public profile metadata, and indexed public records. Drawn from public captures of he — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-vicki-schmidt-03978: narrative: "_A summary of what Charlotte O'Hara has publicly said, posted, and amplified across campaign channels, public Facebook metadata, indexed public records, and credible news coverage. Drawn from public captures  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-vicki-schmidt-00030: | s-sos-candidate-list-blocked | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | accessed 2026-05-19 | official candidate-list endpoint returned JS/robot verification | blocker/status caveat | — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-vicki-schmidt-00707: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-vicki-schmidt-02113: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-vicki-schmidt-03323: Campaign-site July 21, 2025 repost of Kansas Reflector article on taxes and abortion. The page includes Schmidt's quote on the 2012 Brownback tax vote: "It is a vote I regret." ([source](https://vickiforgovernor.com/2025 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03325: Kansas Reflector July 21, 2025 candidate interview/article. Accessible quotes include her abortion position, the need for governors to tell the truth, and her plan to run on her record. ([source](https://kansasreflector. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03345: | Abortion and tax-record accountability | 2 | 12% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03352: The campaign site amplifies three Kansas Reflector pieces in its News section: a July 21 interview item, a July 21 article on her record/taxes/abortion, and a July 25 early race analysis. The office LinkedIn page amplifi — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03354: Across the accessible public set reviewed, no reviewed item centered guns, immigration/border policy, LGBTQ+ policy, religious liberty, school choice, K-12 finance, higher-education affordability, child care, foster care — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-00010: The Department LinkedIn page gives the clearest view of ongoing social-content priorities. Visible posts centered hiring, real-life scam education, PBM reform, National Agriculture Day, NAIC participation, financial educ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03319: The office LinkedIn page was the richest accessible social feed. It listed 623 followers and a government-administration profile for the Kansas Department of Insurance. Visible updates emphasized hiring, fraud and scam p — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03341: | Insurance consumer assistance, recoveries, claims help, storm damage, fraud/scam prevention, and securities education | 7 | 41% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03321: Campaign homepage and about text, captured 2026-05-11. Key signals: hardworking governor frame; pharmacist identity; Medicaid rebate recoveries; autism coverage; cancer-care access; insurance recoveries; fee/cost reducti — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03343: | Cost reduction, fees, fiscal efficiency, Medicaid rebate recovery, and administrative competence | 4 | 24% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03312: The campaign website frames Schmidt as a lifelong Kansan, Republican, pharmacist, former state senator, breast-cancer survivor, and sitting insurance commissioner. Its lead line says, "It's time Kansans have a governor t — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-00009: The office footprint is broader than the campaign footprint. Kansas.gov lists official Insurance Commissioner Facebook and X accounts, while the Department website footer links Instagram, Facebook, X, and LinkedIn. The o — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-02756: | LinkedIn | [vicki-schmidt-50b11810](https://www.linkedin.com/in/vicki-schmidt-50b11810/) | Listed as "Insurance Commissioner - State of Kansas" | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03301: | Office LinkedIn | https://www.linkedin.com/company/kansas-department-of-insurance | FOUND | Public page and recent updates accessible logged out: 623 followers; visible post-level likes on some updates. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-vicki-schmidt-03317: The office Facebook page metadata captured publicly on 2026-05-11 listed 1,960 likes, 33 talking about this, and 115 check-ins for "Kansas Insurance Department, Topeka." ([source](https://www.facebook.com/KSinsurancedept — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-vicki-schmidt-00032: | s-kpdc-at-gov | primary | https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01VS_AT.pdf | executed 2025-07-09; accessed 2026-05-19 | Appointment of Treasurer; office sought Governor; treasurer Brad — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-00248: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-00255: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-01870: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-01871: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-01872: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-02127: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-00450: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-00549: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-00738: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-01426: [Jeff Colyer - Kansas Historical Society (Kansapedia)](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-01899: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-01900: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-02140: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-02318: Source: [Kansas Secretary of State press release, October 10, 2024](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-vicki-schmidt-02630: [Kansas Secretary of State -- Schwab Biography](https://sos.ks.gov/about/schwab-biography.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-02632: [Kansas Legislature -- Rep. Schwab Profile](https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-02661: [Kansas SOS Press Release: Schwab satisfied with DeJoy call](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-04026: narrative: "_A summary of what Stacy Rogers has publicly said, posted, linked, and amplified across her campaign site, campaign social directory, LinkedIn, X, Facebook, Instagram, YouTube, TikTok, Truth Social references — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-vicki-schmidt-00374: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
