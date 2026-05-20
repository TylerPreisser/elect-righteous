# Notes — evidence-matrix-builder — sandy-spidel-neumann — 2026-05-20

## Summary
- Raw rows read: 10110
- Final deduplicated rows written: 3205
- Duplicate rows absorbed: 6905
- Rejected rows retained in final matrix: 592
- Use-with-caveat rows: 31
- Source-only rows: 79
- Rows without issue mapping: 1349

## Final Use Decisions
```json
{
  "use": 156,
  "use-with-caveat": 31,
  "source-only": 79,
  "background-only": 2347,
  "reject": 592
}
```

## Final Confidence
```json
{
  "confirmed": 63,
  "likely": 277,
  "weak-signal": 152,
  "unknown": 2713
}
```

## Source Tiers
```json
{
  "primary": 63,
  "secondary": 277,
  "social": 152,
  "internal-memory": 2713
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 70   |
| 2     | LGBT / gender / parental rights                    | 10   |
| 3     | Education / curriculum / schools                   | 118  |
| 4     | Religious liberty / church / civic morality        | 86   |
| 5     | Taxes / spending / debt                            | 76   |
| 6     | Economy / jobs / labor                             | 89   |
| 7     | Guns / Second Amendment                            | 34   |
| 8     | Immigration / border                               | 97   |
| 9     | Health care / insurance / Medicaid                 | 263  |
| 10    | Election integrity / voting / courts               | 905  |
| 11    | Public safety / law enforcement / criminal justice | 335  |
| 12    | Agriculture / rural economy / water                | 141  |
| 13    | Local governance / transparency / ethics           | 959  |
| 14    | Environment / energy / land use                    | 40   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 31 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-sandy-spidel-neumann-00047: | s-kdp-candidates | secondary | https://kansasdems.org/candidates | accessed 2026-05-19 | Kansas Democratic Party candidate list with caveat to reference SOS for filed candidates | party listing | — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-sandy-spidel-neumann-00043: | s-bsky-era | social | https://bsky.app/profile/speumann.bsky.social/post/3lawjtoy4js2o | posted 2024-11-14; local harvest accessed 2026-05-19 | Equal Rights Amendment post | civil rights, reproductive-rights context | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02541: | Facebook | Yes | https://www.facebook.com/people/Sandy-for-Kansas/61582078721885/ | Official site /facebook redirects here. Logged-out metadata: "Sandy for Kansas, Overland Park. 2,974 likes · 1,505 talking about this. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02542: | Instagram | Yes | https://www.instagram.com/speumann/ | Logged-out metadata: "949 Followers, 3,751 Following, 233 Posts - See Instagram photos and videos from Sandy Spidel Neumann (@speumann)"; profile text includes "D — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00036: | s-bsky-aca | social | https://bsky.app/profile/speumann.bsky.social/post/3m7t2hxexnk2d | posted 2025-12-12; API accessed 2026-05-19 | ACA premium-tax-credit post; engagement 2 likes, 1 repost, 0 replies, 0 quotes | hea — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00003: Across the [14 campaign-period original or quote Bluesky posts](./social-harvest.md#summary-counts) captured after her Oct. 16, 2025 launch, Sandy Spidel Neumann's repeated campaign subjects are Kansas costs, healthcare, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00035: | s-bsky-gas | social | https://bsky.app/profile/speumann.bsky.social/post/3mabdqda6fc2e | posted 2025-12-18; API accessed 2026-05-19 | Kansas gas-price post; engagement 4 likes, 1 repost, 0 replies, 0 quotes | economy,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00037: | s-bsky-shutdown-healthcare | social | https://bsky.app/profile/speumann.bsky.social/post/3m5bryouqls22 | posted 2025-11-10; API accessed 2026-05-19 | Shutdown and Kansas health-insurance premium post; engagement 1 like — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00038: | s-bsky-votevets | social | https://bsky.app/profile/speumann.bsky.social/post/3m4b4gysu5c27 | posted 2025-10-28; API accessed 2026-05-19 | VoteVets economic town hall post; engagement 2 likes, 1 repost, 0 replies, 0 qu — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02574: | 2025-10-16 | Post | Costs / opportunity | 0 likes, 0 reposts, 0 replies, 0 quotes | "Every Kansan deserves a fair shot: to afford groceries, gas, housing, and a future for their kids. That’s what I’m fighting for: lowe — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02603: Kansas Reflector candidate article and podcast, 2026-04-27: https://kansasreflector.com/2026/04/27/democratic-candidate-for-u-s-senate-touts-business-background-integrity-in-fight-for-kansas-seat/ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00006: On national and foreign-policy issues, her feed includes ICE, Ukraine, the Equal Rights Amendment, vaccines, cabinet nominations, and healthcare subsidies. On Jan. 24, 2026, she posted, "Another senseless killing by ICE  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00034: | s-bsky-ice | social | https://bsky.app/profile/speumann.bsky.social/post/3md77khbaks2q | posted 2026-01-24; API accessed 2026-05-19 | ICE accountability post; engagement 1 like, 0 reposts, 0 replies, 0 quotes | immigra — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02564: | 2026-01-24 | Post | ICE / federal enforcement | 1 like, 0 reposts, 0 replies, 0 quotes | "Another senseless killing by ICE in Mpls this morning. The Senate must vote against funding for ICE until the Admin removes ICE  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00004: Her public alignment signals in the harvested feed run through Democratic accounts and VoteVets events. She wrote, "I'm attending the VoteVets Economic Town Hall with Senator Elissa Slotkin and featuring Representative S — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-00041: | s-bsky-farms-hospitals | social | https://bsky.app/profile/speumann.bsky.social/post/3m3dgdmmzms2f | posted 2025-10-16; API accessed 2026-05-19 | Farms, hospitals, families post; engagement 0 likes, 0 reposts, 1 reply, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02568: | 2025-11-10 | Post | Healthcare / shutdown | 1 like, 1 repost, 0 replies, 0 quotes | "@danpfeiffer.bsky.social makes strong points here, but it doesn't make the caving by 8 Senate Dems any more palatable. GOP's still re — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02545: | Threads | Yes, public metadata | https://www.threads.com/@speumann | Metadata: "748 Followers • 791 Threads • Defender of Democracy | sports & politics nut | mother of fur babies, wife of saint | #UChicago & #KelloggMB — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02580: | 2025-01-18 | Post | Personal / travel refund | 41 likes, 0 reposts, 1 reply, 0 quotes | "Began our 20th year of annual girls’ wknds — typically we do one over MLK wknd. We had planned to go to DC for the inauguration,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-sandy-spidel-neumann-02582: | 2024-11-14 | Post | Equal Rights Amendment | 4 likes, 1 repost, 0 replies, 0 quotes | "I sent mine. Let’s generate some momentum for the #ERAnow. Equality under the Constitution matters. Send yours to comments@whitehou — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-sandy-spidel-neumann-00367: [Patrick Schmidt - Kansas Legislature](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01104: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01105: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01106: [Patrick Schmidt Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01974: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-02644: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sandy-spidel-neumann-02723: url: "https://www.ethics.senate.gov/public/index.cfm/financialdisclosure" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-sandy-spidel-neumann-00268: Campaign Finance: As the incumbent senator, Marshall has access to a substantial war chest and national Republican fundraising apparatus. Specific 2026 cycle totals should be checked at [FEC.gov](https://www.fec.gov/data — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01077: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01079: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01665: [FEC - Kansans for Marshall](https://www.fec.gov/data/committee/C00576173/?cycle=2026) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-02022: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-02057: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-02077: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-02134: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01663: [Marshall Senate Website](https://www.marshall.senate.gov/about/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-01779: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-02455: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-02457: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-sandy-spidel-neumann-00676: [Anne Parelkar Announcement (Aug 25, 2025)](https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
