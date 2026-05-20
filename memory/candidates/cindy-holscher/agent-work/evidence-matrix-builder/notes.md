# Notes — evidence-matrix-builder — cindy-holscher — 2026-05-20

## Summary
- Raw rows read: 6287
- Final deduplicated rows written: 2529
- Duplicate rows absorbed: 3758
- Rejected rows retained in final matrix: 490
- Use-with-caveat rows: 61
- Source-only rows: 47
- Rows without issue mapping: 961

## Final Use Decisions
```json
{
  "use": 179,
  "use-with-caveat": 61,
  "source-only": 47,
  "background-only": 1752,
  "reject": 490
}
```

## Final Confidence
```json
{
  "confirmed": 54,
  "likely": 263,
  "weak-signal": 165,
  "unknown": 2047
}
```

## Source Tiers
```json
{
  "primary": 56,
  "secondary": 261,
  "social": 165,
  "internal-memory": 2047
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 46   |
| 2     | LGBT / gender / parental rights                    | 34   |
| 3     | Education / curriculum / schools                   | 227  |
| 4     | Religious liberty / church / civic morality        | 294  |
| 5     | Taxes / spending / debt                            | 94   |
| 6     | Economy / jobs / labor                             | 96   |
| 7     | Guns / Second Amendment                            | 23   |
| 8     | Immigration / border                               | 51   |
| 9     | Health care / insurance / Medicaid                 | 177  |
| 10    | Election integrity / voting / courts               | 670  |
| 11    | Public safety / law enforcement / criminal justice | 92   |
| 12    | Agriculture / rural economy / water                | 119  |
| 13    | Local governance / transparency / ethics           | 828  |
| 14    | Environment / energy / land use                    | 16   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 61 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-cindy-holscher-02336: narrative: "*A summary of what Cindy Holscher has publicly said, posted, and amplified across campaign-controlled channels and credible indexed coverage. Drawn from her campaign website, campaign news page, Linktree, Blu — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-cindy-holscher-00029: | s-sos-candidate-list-blocked | primary | https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx | attempted 2026-05-19 | Official candidate-list endpoint returned JavaScript/CloudFront blocking in this envi — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-cindy-holscher-01251: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-cindy-holscher-01616: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-cindy-holscher-01856: KMUW / Kansas Reflector coverage of an April 26, 2026 forum reported that Holscher cast herself as the anti-establishment Democrat, criticized Republican "culture war" bills, attacked CoreCivic-linked donations to her op — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01881: The captured Bluesky feed strongly features education, affordability, healthcare, redistricting, tariffs/agriculture, and campaign outreach. It contains less sustained original discussion of gun policy, water policy/Ogal — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01871: Civil rights, LGBTQ policy, immigration/migrant care, religious-community references, political violence, and innocence/public-safety topics not already captured above: 6 posts (1%). — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-00010: Audience response on measurable social media was modest and concentrated on labor, education, and anti-redistricting posts. Her highest-like original Bluesky post in the capture was a December 2, 2025 post about union wo — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-00047: | s-bsky-running-mate | social | https://bsky.app/profile/cindyforkansas.bsky.social/post/3mltsfpocu22x | posted 2026-05-14; API read 2026-05-19 | Running-mate post; 11 likes, 1 repost, 0 replies, 0 quotes at readback |  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-00051: | s-bsky-education-2025 | social | https://bsky.app/profile/cindyforkansas.bsky.social/post/3m4e2gws2hc2m | posted 2025-10-29; local harvest | Public education and vouchers | education | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01786: Substack: no official campaign Substack confirmed; education writer Josh Cowen featured Holscher in a newsletter that she amplified on Bluesky. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01813: 2025-12-16 -- Holscher promoted a conversation with Josh Cowen on public education, red districts, values, and the Brownback tax experiment. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01815: Topic: Public education / campaign biography — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01833: 2025-10-29 -- "I've always believed in public education... I'll always fight to fund our schools, stop vouchers, and put our kids first." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01835: Topic: Public education / vouchers — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01847: 2025-04-06 -- "SCHOOL CHOICE/VOUCHERS are a scam! It's a transfer of wealth from the working class to the rich!" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01848: Topic: Vouchers / public education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01850: The [about page](https://cindyforkansas.com/about/) emphasizes a working-class biography: daughter of a union construction worker and an elementary school custodian, raised on a farm, first-generation college graduate, w — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01851: The [priorities page](https://cindyforkansas.com/priorities/) lists a "Common Sense & Lower Costs" agenda: lowering healthcare, childcare, grocery, and gas costs; minimum wage; paid sick time; property-tax relief; Medica — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-cindy-holscher-01858: Johnson County Post coverage from March 13, 2023 remains a useful pre-campaign benchmark for her voucher message; she called school-choice rhetoric a transfer of taxpayer money to wealthier families ([source](https://joh — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-cindy-holscher-01910: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-cindy-holscher-00031: | s-kpdc-treasurer | primary | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01CH_AT.pdf | executed 2025-06-12; accessed 2026-05-19 | Candidate name, office sought Governor, treasurer Lynn Ro — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00317: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00324: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-01630: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00519: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00618: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-01126: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-01282: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-01643: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-02399: narrative: "*A summary of what Marty Tuley has publicly said, posted, and promoted through campaign-controlled pages, social profiles, and indexed public coverage. Drawn from public campaign pages, campaign-linked social — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00443: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00454: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00467: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00480: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00487: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00503: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00560: [Kobach Religion - WhatReligionIsInfo](https://whatreligionisinfo.com/kobach-religion/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00562: [Sunflower State Journal: Kobach denounces vandalism at his church](https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-cindy-holscher-00576: [Christian Post: Caleb Schwab attended church with family hours before death](https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
