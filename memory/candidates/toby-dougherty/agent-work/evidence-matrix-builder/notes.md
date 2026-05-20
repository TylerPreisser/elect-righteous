# Notes — evidence-matrix-builder — toby-dougherty — 2026-05-20

## Summary
- Raw rows read: 9033
- Final deduplicated rows written: 3057
- Duplicate rows absorbed: 5976
- Rejected rows retained in final matrix: 635
- Use-with-caveat rows: 49
- Source-only rows: 80
- Rows without issue mapping: 1166

## Final Use Decisions
```json
{
  "use": 156,
  "use-with-caveat": 49,
  "source-only": 80,
  "background-only": 2137,
  "reject": 635
}
```

## Final Confidence
```json
{
  "confirmed": 66,
  "likely": 267,
  "weak-signal": 120,
  "unknown": 2604
}
```

## Source Tiers
```json
{
  "primary": 68,
  "secondary": 265,
  "social": 120,
  "internal-memory": 2604
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 15   |
| 2     | LGBT / gender / parental rights                    | 5    |
| 3     | Education / curriculum / schools                   | 133  |
| 4     | Religious liberty / church / civic morality        | 327  |
| 5     | Taxes / spending / debt                            | 173  |
| 6     | Economy / jobs / labor                             | 84   |
| 7     | Guns / Second Amendment                            | 6    |
| 8     | Immigration / border                               | 22   |
| 9     | Health care / insurance / Medicaid                 | 74   |
| 10    | Election integrity / voting / courts               | 552  |
| 11    | Public safety / law enforcement / criminal justice | 264  |
| 12    | Agriculture / rural economy / water                | 250  |
| 13    | Local governance / transparency / ethics           | 1141 |
| 14    | Environment / energy / land use                    | 35   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 49 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-toby-dougherty-02714: narrative: "Toby Dougherty's public voice is administrative, not electoral. He is the appointed Hays city manager, and the official city profile says he has held that role since Aug. 1, 2007, after serving as assistant c — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-toby-dougherty-01088: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-toby-dougherty-02084: No public faith/church messaging surfaced in the reviewed administrator-attributed material. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02052: | Budget, revenue-neutral policy, fiscal sustainability, maintenance-first operations | 7 | Public comments stress cost inflation, sales-tax dependence, maintaining existing services, reserves, and avoiding expansion tha — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02065: 2015/2016 Strong Towns fiscal lens: In a city-submitted Strong Towns entry, Dougherty and city staff described Hays as geographically isolated, increasingly multi-modal, and focused on sewer-system data, local boards, ci — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02073: 2025 commission retreat: Dougherty said Hays did not have much budget "fluff"; in capital planning discussion, he noted an eastside fire station would mean more capital, equipment, and six firefighters, and suggested cur — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02074: 2025 maintenance budget: Dougherty called the 2026 budget a cautious maintenance budget, citing inflation, federal grant programs drying up, tariff/recession concerns, and the need to take care of existing services rathe — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02075: 2025 revised budget: Dougherty explained the transient guest tax estimate adjustment and noted staff confidence based on recent disbursements. Source: [Hays Post, Aug. 9, 2025](https://hayspost.com/posts/e6a3f3e1-515d-4a — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02077: 2026 budget/service standards: During 2027 budget discussion, Dougherty said Hays has maintained high service standards, but if they are not sustainable, the city has to find a way to continue while reducing some level o — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02088: I searched Toby Dougherty with Hays, Hays City Manager, City Manager's Office, haysusa, Hays Post, KAYS, Post Podcast, Forward Ever, Strong Towns, R9 Ranch, water transfer, WaterPACK, Edwards County, Build Kansas grant,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02095: [Hays Post - City manager: 2026 Hays budget will not expand](https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02096: [Hays Post - 2025 budget and revenue-neutral hearing](https://hayspost.com/posts/ab25d617-c481-467e-92ce-1a3ba104f7ac) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02097: [Hays Post - city commissioners keep eyes on budget during retreat](https://hayspost.com/posts/909306ea-6223-4960-bd5f-99c19bb83817) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02098: [Hays Post - 2027 draft budget and travel plaza](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02027: Election slug: hays-city-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02076: 2026 R9 design: Dougherty said Supreme Court arguments went well and expressed hope that a favorable ruling would end that challenge. Source: [Hays Post, Jan. 24, 2026](https://hayspost.com/posts/453a68e6-0628-44ef-bb99- — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02069: 2024 revenue-neutral debate: Dougherty said staying revenue neutral was impractical because city costs increase, using police-department funding over time as his example. Source: [Hays Post, Sept. 14, 2024](https://haysp — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02030: Public date range found: August 1, 2007 official appointment history through May 4, 2026 regional water coverage, with strongest administrator-attributed messaging from 2015 through May 2026. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02050: | Water supply, R9 Ranch, water-transfer litigation, long-term survival | 11 | Dominant and most durable theme. Dougherty frames R9 as essential to Hays and Russell's future, defends the state water-transfer process, emp — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-toby-dougherty-02051: | Water conservation, reuse, drought adaptation | 5 | Repeatedly describes Hays as a conservation leader forced to borrow ideas from Las Vegas, Tucson, Phoenix, Utah, and other arid-region communities. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-toby-dougherty-02892: narrative: "Rebecca Herzog's public messaging is not a conventional campaign-social record. The accessible record through May 11, 2026 is almost entirely official-office language and directory/election documentation for  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-01549: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00273: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00280: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00765: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00811: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00839: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00475: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00574: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-01119: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-01335: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00399: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00410: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00423: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00436: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00443: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-00459: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-02653: narrative: "Shaun Musil's public messaging is not built around a fully visible campaign-social operation. Through May 11, 2026, the clearest record comes from Hays Post candidate interviews, candidate forums, city meetin — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-02868: narrative: "*A summary of what Neal Younger has publicly said or been attributed as saying in candidate questionnaires, official county records, public meeting coverage, and local news. Drawn from public sources through  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-toby-dougherty-02925: narrative: "Vernon Ruder Jr.'s public messaging is administrative, local, and practical rather than ideological. The strongest candidate-controlled source is his signed 2020 Hays Post letter, and the strongest attributed — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
