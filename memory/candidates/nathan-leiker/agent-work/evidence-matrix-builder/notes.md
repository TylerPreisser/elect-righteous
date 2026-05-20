# Notes — evidence-matrix-builder — nathan-leiker — 2026-05-20

## Summary
- Raw rows read: 7792
- Final deduplicated rows written: 3141
- Duplicate rows absorbed: 4651
- Rejected rows retained in final matrix: 621
- Use-with-caveat rows: 54
- Source-only rows: 102
- Rows without issue mapping: 1195

## Final Use Decisions
```json
{
  "use": 165,
  "use-with-caveat": 54,
  "source-only": 102,
  "background-only": 2199,
  "reject": 621
}
```

## Final Confidence
```json
{
  "confirmed": 81,
  "likely": 283,
  "weak-signal": 129,
  "contradicted": 5,
  "unknown": 2643
}
```

## Source Tiers
```json
{
  "primary": 84,
  "secondary": 281,
  "social": 129,
  "internal-memory": 2647
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 17   |
| 2     | LGBT / gender / parental rights                    | 9    |
| 3     | Education / curriculum / schools                   | 139  |
| 4     | Religious liberty / church / civic morality        | 304  |
| 5     | Taxes / spending / debt                            | 218  |
| 6     | Economy / jobs / labor                             | 74   |
| 7     | Guns / Second Amendment                            | 4    |
| 8     | Immigration / border                               | 40   |
| 9     | Health care / insurance / Medicaid                 | 120  |
| 10    | Election integrity / voting / courts               | 579  |
| 11    | Public safety / law enforcement / criminal justice | 290  |
| 12    | Agriculture / rural economy / water                | 157  |
| 13    | Local governance / transparency / ethics           | 1188 |
| 14    | Environment / energy / land use                    | 44   |

## Conflict / Caveat Review
- 5 rows are marked contradicted and must not be asserted without explicit caveat.
- 54 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-nathan-leiker-02999: narrative: "Nathan Leiker's public messaging is grounded in county operations and agriculture, not in a large campaign-social presence. The official [Ellis County Commission page](https://www.ellisco.net/120/County-Commi — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-nathan-leiker-02198: No public Leiker-authored statements found in the reviewed set on abortion, LGBTQ issues, school curriculum, national immigration policy, election fraud, or federal partisan issues. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-00610: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02152: | Candidate Q&A / platform | Yes, candidate-authored answers | [Hays Post, Jul. 19, 2022](https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17) | Best source for direct campaign-position language: sales tax, i — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02153: | Local news / public meeting quotations | Yes | Hays Post links below | The most active public signal after election is county-meeting coverage quoting Leiker on roads, subdivisions, budgets, taxes, solar review, and ci — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02163: Counts are based on 18 manually reviewed public, attributed items. Categories are non-exclusive because one item can discuss both infrastructure and development, or budget and tax pressure. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02166: | Budget, taxes, revenue, fiscal restraint | 7 | [Candidate Q&A](https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17), [2025 budget](https://hayspost.com/posts/d81583db-0414-44c6-8dac-7d4ad565ed13), [2026 bud — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02170: | Transparency, accessibility, public participation | 3 | [Candidate Q&A](https://hayspost.com/posts/599cb8a3-fed5-4c96-bb58-7079dcedac17), [2025 budget](https://hayspost.com/posts/d81583db-0414-44c6-8dac-7d4ad565ed13),  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02178: On sales tax, he said the county should leave the sales tax alone and make it permanent before sunset, while using the funds for capital improvements and residents' quality of life. Source: [Hays Post candidate Q&A, Jul. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02180: On economic development, he said the county should be proactive and that stable taxes, available capital, and infrastructure investment would help business follow. Source: [Hays Post candidate Q&A](https://hayspost.com/p — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02187: On the 2025 budget, he said the commission tries to limit tax-dollar impact, but also warned against deferring bridge and road needs until failures or accidents happen. Source: [Hays Post, Oct. 1, 2024](https://hayspost. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02189: On the 2026 budget draft, he said a mill increase gave the county flexibility for a soft landing if state or federal grants were pulled. Source: [Hays Post, Aug. 14, 2025](https://hayspost.com/posts/7c57b3c8-1314-4bd7-85 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02190: On property tax relief, he said counties keep losing tools and then get told they are not doing it right. Source: [Hays Post, Dec. 22, 2025](https://hayspost.com/posts/0dc3bf76-bd9f-4190-a0c7-231ca8172d18). — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02199: Public messaging is concentrated in county operations, agriculture, infrastructure, zoning, public works, taxes, and development rather than social-media campaigning. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02212: [2025 budget with mill levy reduction, Hays Post, Oct. 1, 2024](https://hayspost.com/posts/d81583db-0414-44c6-8dac-7d4ad565ed13) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02218: [2026 budget draft, Hays Post, Aug. 14, 2025](https://hayspost.com/posts/7c57b3c8-1314-4bd7-8501-f559ff7c176d) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02219: [Property tax relief discussion, Hays Post, Dec. 22, 2025](https://hayspost.com/posts/0dc3bf76-bd9f-4190-a0c7-231ca8172d18) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02154: | Agriculture/business profile | Yes | [Ingram's 50 Kansans You Should Know 2021](https://ingrams.com/article/50-kansans-you-should-know-2021/) | Profile-controlled/attributed agriculture remarks on L5 Farms, producer-co — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02155: | Agriculture technology case study | Yes | [MyAnIML case study, Jul. 19, 2023](https://myaniml.com/Kansas_Rancher_Installs_MyAnIML_to_Save.pdf) | Public product case study attributes detailed remarks to Leiker about cat — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-nathan-leiker-02156: | L5 Farms public listings | Yes, business listing only | [Manta Hays crop farms listing](https://www.manta.com/mb_54_C00BX_6QH/general_farms_primarily_crop/hays_ks), [MapQuest L5 Farms](https://www.mapquest.com/us/kansa — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-nathan-leiker-00231: https://www.ellisco.net/425/Election — Clerk Bobbi L. Dreiling's contact (785-628-9410 / bdreiling@ellisco.net). The full Filing Packets index at https://www.ellisco.net/431/Filing-Packets indicates filings exist; they w — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01594: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-02392: url: "https://www.ellisco.net/626/Candidate-Filings" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-nathan-leiker-00895: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-00902: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01641: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01676: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01695: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01752: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01095: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01194: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01382: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01019: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01030: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01043: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01056: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01063: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01079: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01136: [Kobach Religion - WhatReligionIsInfo](https://whatreligionisinfo.com/kobach-religion/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-nathan-leiker-01138: [Sunflower State Journal: Kobach denounces vandalism at his church](https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
