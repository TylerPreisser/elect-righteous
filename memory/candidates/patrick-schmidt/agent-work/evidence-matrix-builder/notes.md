# Notes — evidence-matrix-builder — patrick-schmidt — 2026-05-20

## Summary
- Raw rows read: 9914
- Final deduplicated rows written: 3387
- Duplicate rows absorbed: 6527
- Rejected rows retained in final matrix: 579
- Use-with-caveat rows: 28
- Source-only rows: 85
- Rows without issue mapping: 1452

## Final Use Decisions
```json
{
  "use": 151,
  "use-with-caveat": 28,
  "source-only": 85,
  "background-only": 2544,
  "reject": 579
}
```

## Final Confidence
```json
{
  "confirmed": 98,
  "likely": 277,
  "weak-signal": 148,
  "unknown": 2864
}
```

## Source Tiers
```json
{
  "primary": 98,
  "secondary": 277,
  "social": 148,
  "internal-memory": 2864
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 77   |
| 2     | LGBT / gender / parental rights                    | 11   |
| 3     | Education / curriculum / schools                   | 98   |
| 4     | Religious liberty / church / civic morality        | 86   |
| 5     | Taxes / spending / debt                            | 144  |
| 6     | Economy / jobs / labor                             | 90   |
| 7     | Guns / Second Amendment                            | 31   |
| 8     | Immigration / border                               | 76   |
| 9     | Health care / insurance / Medicaid                 | 226  |
| 10    | Election integrity / voting / courts               | 943  |
| 11    | Public safety / law enforcement / criminal justice | 297  |
| 12    | Agriculture / rural economy / water                | 115  |
| 13    | Local governance / transparency / ethics           | 979  |
| 14    | Environment / energy / land use                    | 15   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 28 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-patrick-schmidt-00006: On national and foreign-policy questions, Schmidt's public record centers on military service, January 6, the Middle East, tariffs, and institutional accountability. His 2021 launch release said, "During my service on th — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-patrick-schmidt-02691: Across the captured campaign-controlled public items, no posts or pages were found addressing Kansas water policy, the Ogallala Aquifer, wheat prices, Farm Bill details, Fort Riley, rural hospital closures by facility na — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02660: Kansas Senate Democrats profile: Lists campaign website, fundraising page, Facebook page, and Instagram for Patrick Schmidt. The profile text emphasizes Navy service, public-school-teacher parents, family roots, and serv — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02658: 2026-05-11 capture — "I promise that the only non-negotiable requirement necessary for me to sign on to any trade deal or tax policy will be whether it puts workers first in Kansas." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02666: Context: Kansas Reflector podcast interview on Schmidt's first legislative session and property tax relief. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02671: 2025-03-03 — "I would love to see real property tax relief for Kansans." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02672: Context: Schmidt discussed Senate Concurrent Resolution 1603 and property tax policy. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02679: Context: Interview on a child-support bill and his amendment related to the child tax credit. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02682: 2026-05-08 — "We have a very regressive tax structure." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02683: Context: Interview on tax policy, healthcare costs, and the U.S. Senate campaign. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02687: Topic distribution across the 8 campaign-controlled items: biography/service/family roots — 5 of 8 (63%); working families/economic costs — 4 of 8 (50%); healthcare — 1 of 8 (13%); labor/trade/tax policy — 1 of 8 (13%);  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02608: Instagram: [@patrickforks](https://www.instagram.com/patrickforks/) — 93 followers / 5 following / 4 posts; bio text: "Kansan, Navy Veteran, and candidate for KS-02. Running to invest in Kansas families and rebuild our e — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02643: Bio text: "Kansan, Navy Veteran, and candidate for KS-02. Running to invest in Kansas families and rebuild our economy." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02655: 2026-05-11 capture — "Strong unions built the middle class and created a healthy economy in Kansas." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02657: Topic: Labor — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02652: 2026-05-11 capture — "I believe wholeheartedly that every American deserves access to affordable health care." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02654: Topic: Healthcare — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02678: 2026-05-08 — "I did not write that bill. I did not vote for that bill. I did not support that bill." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-02667: 2025-03-03 — "I was close enough to smell the tear gas and bear spray and to see the people violently assaulting law enforcement officers." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-patrick-schmidt-00009: Schmidt's platform footprint is concentrated on an official campaign website, Facebook, X, Instagram, and a YouTube channel. The Facebook page lists him as "Kansan, Navy Veteran, Kansas State Senator, and Candidate for U — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-patrick-schmidt-00077: Source: https://www.sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-00096: Source: https://www.sos.ks.gov/elections/24elec/2024-General-Election-Official-Vote-Totals.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-00128: Source: https://kansas.gov/ethics/CFAScanned/Senate/2024ElecCycle/LastMinute/S19PS_2024GLF.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-00186: Source: https://www.kslegislature.gov/b2025_26/legislators/sen_schmidt_patrick_1/bills/?bfilter=resolution&page=1 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-01146: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-patrick-schmidt-01147: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-patrick-schmidt-02016: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-patrick-schmidt-02496: Source: Kansas SOS candidate information - https://www.sos.ks.gov/elections/candidate-information.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02497: Source: Kansas SOS important election dates - https://sos.ks.gov/elections/important-election-dates.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02511: Source: Kansas Legislature 2025 vote record - https://www.kslegislature.gov/b2025_26/vote-record/sen_schmidt_patrick_1/2025/ — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02531: Source: sponsored resolutions list - https://www.kslegislature.gov/b2025_26/legislators/sen_schmidt_patrick_1/bills/?bfilter=resolution&page=1 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02542: Source: Schmidt floor amendment HTML - https://www.kslegislature.gov/b2025_26/documents/view-leg/?apn=b2025_26/year1/ready_for_publication/floor_amendments/1837/fa_2025_hb2062_s_1837.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02575: Source: October 2024 report - https://kansas.gov/ethics/CFAScanned/Senate/2024ElecCycle/202410/S19PS_202410.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02576: Source: January 2025 report - https://kansas.gov/ethics/CFAScanned/Senate/2024ElecCycle/202501/S19PS_202501.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02581: Source: 2024 primary official totals - https://www.sos.ks.gov/elections/24elec/2024-Primary-Official-Vote-Totals.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02582: Source: 2024 general official totals - https://www.sos.ks.gov/elections/24elec/2024-General-Election-Official-Vote-Totals.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02584: Source: 2022 general official totals - https://www.sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02586: Source: KGEC agenda - https://ethics.kansas.gov/wp-content/uploads/2024/11/11-20-2024-Draft-Agenda.pdf — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02746: url: "https://www.sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-patrick-schmidt-02753: url: "https://www.sos.ks.gov/elections/24elec/2024-General-Election-Official-Vote-Totals.pdf" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
