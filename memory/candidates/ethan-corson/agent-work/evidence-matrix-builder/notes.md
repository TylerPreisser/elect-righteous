# Notes — evidence-matrix-builder — ethan-corson — 2026-05-20

## Summary
- Raw rows read: 11399
- Final deduplicated rows written: 2524
- Duplicate rows absorbed: 8875
- Rejected rows retained in final matrix: 462
- Use-with-caveat rows: 44
- Source-only rows: 54
- Rows without issue mapping: 1016

## Final Use Decisions
```json
{
  "use": 185,
  "use-with-caveat": 44,
  "source-only": 54,
  "background-only": 1779,
  "reject": 462
}
```

## Final Confidence
```json
{
  "confirmed": 68,
  "likely": 253,
  "weak-signal": 124,
  "unknown": 2078,
  "contradicted": 1
}
```

## Source Tiers
```json
{
  "primary": 69,
  "secondary": 252,
  "social": 124,
  "internal-memory": 2079
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 51   |
| 2     | LGBT / gender / parental rights                    | 35   |
| 3     | Education / curriculum / schools                   | 189  |
| 4     | Religious liberty / church / civic morality        | 288  |
| 5     | Taxes / spending / debt                            | 98   |
| 6     | Economy / jobs / labor                             | 82   |
| 7     | Guns / Second Amendment                            | 19   |
| 8     | Immigration / border                               | 25   |
| 9     | Health care / insurance / Medicaid                 | 117  |
| 10    | Election integrity / voting / courts               | 662  |
| 11    | Public safety / law enforcement / criminal justice | 100  |
| 12    | Agriculture / rural economy / water                | 108  |
| 13    | Local governance / transparency / ethics           | 814  |
| 14    | Environment / energy / land use                    | 18   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 44 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-ethan-corson-02354: narrative: "*A summary of what Cindy Holscher has publicly said, posted, and amplified across campaign-controlled channels and credible indexed coverage. Drawn from her campaign website, campaign news page, Linktree, Blu — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ethan-corson-01231: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ethan-corson-01596: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-ethan-corson-01833: The captured candidate-controlled social material did not show sustained original posts on abortion, LGBTQ+ policy, gun policy, immigration, marijuana, water rights, energy policy, or religious-liberty policy. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-00005: The captured X feed embedded on Corson's campaign site shows a candidate physically campaigning across Democratic organizations, counties, and local events in late April and early May 2026. On May 9, 2026, the embedded f — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01781: 2026-05-07 -- "I had a great chat with the Garden City Telegram when I was back in my college town last month. I'm runnin..." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01796: LinkedIn's public search preview showed Ethan Corson with 2K followers and 500+ connections. Recent indexed activity emphasized economic development, business outreach, and public-school biography: — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01799: "Last week, I was back at Shawnee Mission South, my old high school. Walking the halls again and talking with students brought back a lot of memories..." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01806: Indexed campaign-site snippets also surfaced posts or modules beginning "Cutting mental health services in our schools and failing to fund special education services..." and "From parents to first responders and farmers, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01811: Democratic forum coverage, November 25, 2025: Corson was described as emphasizing his Kansas public-school path, Garden City Community College, legislative work, and ability to deliver under Republican supermajorities. ( — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01813: 2019 Senate campaign quote: "Every opportunity I've had in my life is due to the education I received from attending Shawnee Mission public schools." ([Kansas City Jewish Chronicle](https://kcjc.com/section-blog/1819-new — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01820: | Education / public schools / special education | 4 | 19% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01834: Faith/religion appeared in external biographical coverage identifying Corson as Jewish, but not as a campaign-message theme in the captured 2025-2026 campaign social material. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01752: Campaign website: [ethanforkansas.com](https://ethanforkansas.com/) -- active. The site's public metadata frames the campaign around "Opportunities for the next generation of Kansans, so they can build a life right here, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01802: Visible campaign-site and indexed official-site language repeatedly centers on opportunity, schools, taxes, affordability, business growth, and mental health: — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01803: "It's about kitchen table issues. Better Schools. Lower Taxes." ([campaign site](https://ethanforkansas.com/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01819: | Affordability / taxes / cost of living | 5 | 24% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01790: Topic: Affordability / cost of living — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01800: Topic classification for the three visible LinkedIn preview items: economic development / business outreach (2), public schools / biography (1). — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-ethan-corson-01822: | Economic development / business outreach | 2 | 10% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-ethan-corson-00599: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00298: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00305: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-01610: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00500: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-01262: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-01623: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00424: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00435: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00448: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00461: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00468: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00484: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-01111: [Johnson County Post: Holscher school voucher critique (March 13, 2023)](https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00541: [Kobach Religion - WhatReligionIsInfo](https://whatreligionisinfo.com/kobach-religion/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00543: [Sunflower State Journal: Kobach denounces vandalism at his church](https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00557: [Christian Post: Caleb Schwab attended church with family hours before death](https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-00622: [Cindy Holscher for Governor](https://cindyforkansas.com/about/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-01157: [Real Media KC: Sarnecki podcast](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-ethan-corson-02174: [Jeff Colyer - Wikipedia](https://en.wikipedia.org/wiki/Jeff_Colyer) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
