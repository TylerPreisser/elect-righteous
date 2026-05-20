# Notes — evidence-matrix-builder — anne-parelkar — 2026-05-20

## Summary
- Raw rows read: 9237
- Final deduplicated rows written: 3985
- Duplicate rows absorbed: 5252
- Rejected rows retained in final matrix: 698
- Use-with-caveat rows: 90
- Source-only rows: 102
- Rows without issue mapping: 1694

## Final Use Decisions
```json
{
  "use": 212,
  "use-with-caveat": 90,
  "source-only": 102,
  "background-only": 2883,
  "reject": 698
}
```

## Final Confidence
```json
{
  "confirmed": 84,
  "likely": 351,
  "weak-signal": 314,
  "unknown": 3236
}
```

## Source Tiers
```json
{
  "primary": 85,
  "secondary": 350,
  "social": 314,
  "internal-memory": 3236
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 69   |
| 2     | LGBT / gender / parental rights                    | 38   |
| 3     | Education / curriculum / schools                   | 148  |
| 4     | Religious liberty / church / civic morality        | 106  |
| 5     | Taxes / spending / debt                            | 71   |
| 6     | Economy / jobs / labor                             | 94   |
| 7     | Guns / Second Amendment                            | 32   |
| 8     | Immigration / border                               | 167  |
| 9     | Health care / insurance / Medicaid                 | 253  |
| 10    | Election integrity / voting / courts               | 1103 |
| 11    | Public safety / law enforcement / criminal justice | 318  |
| 12    | Agriculture / rural economy / water                | 164  |
| 13    | Local governance / transparency / ethics           | 1296 |
| 14    | Environment / energy / land use                    | 33   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 90 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-anne-parelkar-00058: | s-kdp-candidates | secondary | https://kansasdems.org/candidates | accessed 2026-05-19 | KDP lists Parelkar under US Senate with campaign website, with caveat to reference SOS for filed candidates | party listing | — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-anne-parelkar-00851: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-anne-parelkar-01610: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-anne-parelkar-00049: | s-bsky-2026-03-31-trans | social | https://bsky.app/profile/anneforkansas.bsky.social/post/3miep53rkns2n | posted 2026-03-31; accessed 2026-05-19 | Post to trans Kansans | LGBTQ policy | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-00050: | s-bsky-2026-03-31-tdov | social | https://bsky.app/profile/anneforkansas.bsky.social/post/3miep2pwhl52b | posted 2026-03-31; accessed 2026-05-19 | Transgender Day of Visibility post | LGBTQ policy | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03103: 2026-03-31 — "To all the trans Kansans who are feeling unsafe or afraid in our state right now: I see you, I hear you, and I will fight for you. Always. 🩷🤍🩵 #AnneForKansas" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03104: Topic: LGBTQ policy — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03105: 2026-03-31 — "We celebrate our trans friends every day for who they are. Today we want to emphasize the importance of fostering solidarity, promoting understanding, and continuing to advocate for equality. #TransgenderDa — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03287: Approximate Bluesky topic distribution among the 51 cataloged originals: local outreach and public access — 22 posts (43%); government accountability, unity, campaign finance, and party independence — 10 posts (20%); hea — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-00008: Across the captured period the feed contains no standalone posts centered on gun policy, Fort Riley, or water policy including the Ogallala Aquifer. The captured Bluesky feed contains one agriculture post and a linked ca — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03265: Campaign issue page index lists Labor, Agriculture, Health Care Access, Government Accountability, Public Education, Immigration, and Transparency. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03269: Education page says: "Meet the 40 percent IDEA commitment so districts are not forced to cut general education programs to cover legally required services." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-00054: | s-bsky-2026-04-06-faith | social | https://bsky.app/profile/anneforkansas.bsky.social/post/3mis3newg5s2h | posted 2026-04-06; accessed 2026-05-19 | Personal faith reference | faith signal | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03094: Thought I'd share this clip from one of our upcoming podcasts where I talk about my faith and a conversation I had recently about that very same message." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03095: Topic: Personal / faith reference — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-00006: On national and foreign-policy questions, Parelkar posts less often than she posts about campaign events and public access, but the captured feed includes immigration enforcement, voting, Russia, Iran, Gaza, federal labo — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-00007: For Kansas-specific policy, Parelkar's feed combines statewide stops with issue planks on agriculture, health care, public schools, local communities, and worker protections. On March 25, 2026, she posted, "Happy #Nation — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03151: 2026-02-25 — "If the state of the union is strong, why are so many Kansas families working harder than ever and still falling behind? #AnneForKansas #StateoftheUnion" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03153: Topic: Cost of living — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-anne-parelkar-03184: 2025-12-13 — "I had the pleasure of meeting Ms. Carole Blackwood, social worker with the KC Indian Center yesterday. We had a great conversation about Native American history and current issues and I look forward to coll — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-anne-parelkar-02510: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-03336: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-anne-parelkar-03451: url: "https://www.ethics.senate.gov/public/index.cfm/financialdisclosure" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-anne-parelkar-00339: Campaign Finance: As the incumbent senator, Marshall has access to a substantial war chest and national Republican fundraising apparatus. Specific 2026 cycle totals should be checked at [FEC.gov](https://www.fec.gov/data — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-00456: FEC Page: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-00710: Sandy Spidel Neumann (D) - [FEC ID: S6KS00262](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-01370: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-01371: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-01372: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-01624: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-02201: [FEC - Kansans for Marshall](https://www.fec.gov/data/committee/C00576173/?cycle=2026) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-02558: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-02593: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-02613: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-02670: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-02943: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-03314: url: "https://www.fec.gov/data/candidate/S6KS00239/?cycle=2026&election_full=false" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-anne-parelkar-00438: [Patrick Schmidt - Kansas Legislature](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-00883: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-anne-parelkar-01397: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
