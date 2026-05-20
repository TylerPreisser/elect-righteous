# Notes — evidence-matrix-builder — shaun-musil — 2026-05-20

## Summary
- Raw rows read: 11948
- Final deduplicated rows written: 2850
- Duplicate rows absorbed: 9098
- Rejected rows retained in final matrix: 567
- Use-with-caveat rows: 48
- Source-only rows: 98
- Rows without issue mapping: 1145

## Final Use Decisions
```json
{
  "use": 151,
  "use-with-caveat": 48,
  "source-only": 98,
  "background-only": 1986,
  "reject": 567
}
```

## Final Confidence
```json
{
  "confirmed": 65,
  "likely": 279,
  "weak-signal": 126,
  "contradicted": 1,
  "unknown": 2379
}
```

## Source Tiers
```json
{
  "primary": 66,
  "secondary": 278,
  "social": 126,
  "internal-memory": 2380
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 9    |
| 2     | LGBT / gender / parental rights                    | 3    |
| 3     | Education / curriculum / schools                   | 133  |
| 4     | Religious liberty / church / civic morality        | 305  |
| 5     | Taxes / spending / debt                            | 135  |
| 6     | Economy / jobs / labor                             | 111  |
| 7     | Guns / Second Amendment                            | 4    |
| 8     | Immigration / border                               | 16   |
| 9     | Health care / insurance / Medicaid                 | 82   |
| 10    | Election integrity / voting / courts               | 538  |
| 11    | Public safety / law enforcement / criminal justice | 179  |
| 12    | Agriculture / rural economy / water                | 147  |
| 13    | Local governance / transparency / ethics           | 1026 |
| 14    | Environment / energy / land use                    | 32   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 48 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-shaun-musil-02616: narrative: "Shaun Musil's public messaging is not built around a fully visible campaign-social operation. Through May 11, 2026, the clearest record comes from Hays Post candidate interviews, candidate forums, city meetin — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-shaun-musil-00007: His COVID-era comments are the sharpest example of his governing style under pressure. As mayor in 2020, Musil backed mask rules and enforcement while saying his goal was to keep schools and businesses open. After his ma — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-shaun-musil-01032: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-shaun-musil-02019: | COVID, masks, public health, public conflict | 4 | As mayor in 2020, backed local masking rules, enforcement, and school/business continuity; later described being scared by the decisions but convinced the commission d — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02029: 2018 downtown/FHSU connection: As Paisley Pear owner, Musil said students used the back room to study and relax, adding, "We love the college kids and welcome them to downtown anytime." Source: [FHSU, Aug. 29, 2018](http — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02052: No public faith/church messaging surfaced in the reviewed candidate-attributed material. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02016: | Economic development, retail, sales tax, Grow Hays, business recruitment | 8 | Repeatedly says Hays needs retail, new businesses, a strong sales-tax base, stable Grow Hays funding, and projects such as Chick-fil-A, tra — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02018: | Budget, mill levy, sustainability, city operations | 7 | Favors careful scrutiny, sustainability, staff efficiency, and service continuity. He generally avoids near-term mill levy increases but says future increases ma — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02034: 2023 budget: Musil said lowering the mill levy was easier said than done, acknowledged residents and business owners were feeling cost pressure, and said he wanted efficiencies without putting a future commission in dire — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02038: 2025 airport service: Musil said cutting Essential Air Service was not wasteful spending and argued that airport service keeps Hays relevant for doctors, FHSU international students, and regional access. Source: [Hays Po — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02039: 2025 candidate forum: Musil said he believed R9 would happen, that Hays had the state's lowest per-person water usage, that parks should be reprioritized, that more housing should open up affordability, and that funding  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02040: 2025 Q&A: Musil said he was running because of unfinished business, mainly the water project; called water, housing, and retail the hardest issues he had handled; said he had no thought of raising the mill levy in the ne — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02044: 2026 budget/nonprofits: During 2027 budget preparation, Musil worried that outside nonprofit agencies would ask for more money and asked what would happen if city funding fell and those services disappeared. Source: [Hay — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02063: [Hays Post - 2024 budget](https://hayspost.com/posts/0013a2b9-05a4-4aae-9794-ed48359742f0) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02072: [Hays Post - 2027 draft budget/travel plaza](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-01997: Harvest focus: candidate-controlled or candidate-attributed public messaging, including social previews, city materials, public meeting/video references, candidate forums, civic/business pages, and local news quotes. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02011: | Local news quotes | Found | Hays Post, FHSU, and other public local coverage provide the richest candidate-attributed messaging, especially on R9 water, housing, retail growth, budgets, public health, airport service,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02015: | Water security, R9 Ranch, conservation, regional growth | 7 | His most consistent policy lane. He frames R9 as unfinished business, a long-term supply for Hays/Russell, and a regional project that should not be seen as — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02021: | Business/community identity | 4 | Public remarks as former Paisley Pear co-owner emphasize downtown hospitality, FHSU students, local shopping, small-business pressure during COVID, and community events. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-shaun-musil-02032: 2021 re-election profile: Musil said the community cared even when it disagreed, described face-to-face constituent access at his business, defended North Vine roundabouts as safer for future growth, and said Hays must k — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-shaun-musil-00226: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00756: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-01493: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00784: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00897: [City of Hays: Toby Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-01622: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-02145: url: "https://kpdc.kansas.gov/campaign-finance/" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-shaun-musil-00421: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00520: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-01063: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-01279: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-02653: narrative: "Sandy Jacobs' accessible public messaging is local, civic, and operational. The strongest public record is not a modern social feed; it is a trail of candidate letters, Hays Post Q&As, city-meeting coverage,  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00345: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00356: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00369: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00382: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00389: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00405: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00462: [Kobach Religion - WhatReligionIsInfo](https://whatreligionisinfo.com/kobach-religion/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-shaun-musil-00464: [Sunflower State Journal: Kobach denounces vandalism at his church](https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
