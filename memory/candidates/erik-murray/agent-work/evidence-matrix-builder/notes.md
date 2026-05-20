# Notes — evidence-matrix-builder — erik-murray — 2026-05-20

## Summary
- Raw rows read: 8716
- Final deduplicated rows written: 3339
- Duplicate rows absorbed: 5377
- Rejected rows retained in final matrix: 569
- Use-with-caveat rows: 52
- Source-only rows: 85
- Rows without issue mapping: 1401

## Final Use Decisions
```json
{
  "use": 159,
  "use-with-caveat": 52,
  "source-only": 85,
  "background-only": 2474,
  "reject": 569
}
```

## Final Confidence
```json
{
  "confirmed": 64,
  "likely": 285,
  "weak-signal": 156,
  "unknown": 2834
}
```

## Source Tiers
```json
{
  "primary": 64,
  "secondary": 285,
  "social": 156,
  "internal-memory": 2834
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 65   |
| 2     | LGBT / gender / parental rights                    | 11   |
| 3     | Education / curriculum / schools                   | 138  |
| 4     | Religious liberty / church / civic morality        | 101  |
| 5     | Taxes / spending / debt                            | 98   |
| 6     | Economy / jobs / labor                             | 104  |
| 7     | Guns / Second Amendment                            | 39   |
| 8     | Immigration / border                               | 87   |
| 9     | Health care / insurance / Medicaid                 | 225  |
| 10    | Election integrity / voting / courts               | 887  |
| 11    | Public safety / law enforcement / criminal justice | 306  |
| 12    | Agriculture / rural economy / water                | 147  |
| 13    | Local governance / transparency / ethics           | 1041 |
| 14    | Environment / energy / land use                    | 34   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 52 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-erik-murray-00043: | s-kdp-candidates | secondary | https://kansasdems.org/candidates | accessed 2026-05-19 | Kansas Democratic Party lists Murray under U.S. Senate, with caveat to reference SOS for filed candidates | party listing | — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-erik-murray-02657: Across the captured YouTube and campaign-update period, the feed contains no posts about abortion, immigration, guns, religious liberty, Fort Riley, Fort Hays State University, the Ogallala Aquifer, or water policy. The  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-00006: National and foreign-policy posts appear in a smaller part of the feed. A March 8 YouTube description said, "We have a President who promised to end foreign wars on day one, and now he’s launching another one. At the sam — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02599: | 2026-04-19 | My Kids, My Mom and I, ALL went to the same SCHOOL | [source](https://www.youtube.com/shorts/by-pc3VzOIE) | 966 | 22 | Public education, Sumner Academy, family generations. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02602: | 2026-03-08 | America's Broken Promises | [source](https://www.youtube.com/shorts/YLa4pXvG3rY) | 1,261 | 12 | Foreign wars, children, education, healthcare, farms, tariffs. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02606: | 2026-02-23 | STOP DEFUNDING EDUCATION | [source](https://www.youtube.com/shorts/oXIN3dR1kkI) | 260 | 9 | Title references education; description text discusses healthcare costs. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02614: "My kids go to the same public high school I graduated from in 2000. My mom graduated from it in 1967. Three generations. Same school." ([source](https://www.youtube.com/shorts/by-pc3VzOIE)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02616: "Thank you Sumner Academy for giving me, my parents and my kids a world class education." ([source](https://www.youtube.com/shorts/by-pc3VzOIE)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02617: "And thank you Kansas for facilitating an education for families, like mine, to flourish." ([source](https://www.youtube.com/shorts/by-pc3VzOIE)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02618: "We have a President who promised to end foreign wars on day one, and now he’s launching another one. At the same time we’re told there’s no money for feeding poor children, no money for education, and no money for healt — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02646: | Healthcare, education, disaster relief, public services | 4 | 24% | [healthcare](https://www.youtube.com/shorts/cDoxxAT-qIY), [Sumner Academy](https://www.youtube.com/shorts/by-pc3VzOIE), [tornado relief](https://erikf — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02639: "Politician-created problems, such as tariffs and tax policies that benefit billionaires, are tearing apart the fabric of our communities." ([source](https://www.kcur.org/politics-elections-and-government/2025-12-30/demo — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-00003: Across 17 captured substantive candidate-controlled items, Murray's feed most often returns to local investment, housing, small business, affordability, and economic development: 6 items, or 35 percent of the set ([harve — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-00004: Murray's candidate-controlled accounts point readers back to the same campaign network: the campaign website links to Facebook, Instagram, YouTube, and X, while YouTube descriptions repeatedly list ErikForKansas.com and  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02590: Description: "Erik is running for U.S. Senate because he knows it’s time that we stop electing the same old politicians who let our communities falter, the economy decline, and health care become less accessible and more — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02596: | 2026-05-10 | What INVESTING in Community Looks Like! | [source](https://www.youtube.com/shorts/H7J_Nnc7uyo) | 167 | 0 | Small business, arts, local incubator space, Trox. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02598: | 2026-04-20 | EXTRACTIVE Economies and UNDER investment | [source](https://www.youtube.com/shorts/7otJxN9_jS8) | 80 | 2 | Local value, underinvestment, community-rooted business. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02610: "An extractive economy is one that takes more from a place than it puts back. You see it when wealth is generated locally but quickly transferred elsewhere through corporate structures, outside ownership, or policy decis — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02613: "That’s what makes places like this matter. It’s not just coffee. It’s art, mentorship, memory, small business, and community all in one space." ([source](https://www.youtube.com/shorts/H7J_Nnc7uyo)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-erik-murray-02620: "Farms are closing. Rural hospitals are closing. And folks in Washington keep acting like this is just the cost of doing business. It’s not. We need leadership that fights for the people and is accountable to the people" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-erik-murray-01131: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-01132: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-01133: [Patrick Schmidt Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-02001: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-02695: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-erik-murray-02806: url: "https://www.ethics.senate.gov/public/index.cfm/financialdisclosure" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-erik-murray-00295: Campaign Finance: As the incumbent senator, Marshall has access to a substantial war chest and national Republican fundraising apparatus. Specific 2026 cycle totals should be checked at [FEC.gov](https://www.fec.gov/data — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-00412: FEC Page: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-00666: Sandy Spidel Neumann (D) - [FEC ID: S6KS00262](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-01104: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-01105: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-01106: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-01692: [FEC - Kansans for Marshall](https://www.fec.gov/data/committee/C00576173/?cycle=2026) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-02049: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-02084: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-02104: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-02161: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-02437: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-erik-murray-02671: url: "https://www.fec.gov/data/candidate/S6KS00270/?cycle=2026&election_full=false" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-erik-murray-00394: [Patrick Schmidt - Kansas Legislature](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
