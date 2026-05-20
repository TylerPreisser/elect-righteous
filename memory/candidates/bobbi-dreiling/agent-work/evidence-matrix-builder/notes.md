# Notes — evidence-matrix-builder — bobbi-dreiling — 2026-05-20

## Summary
- Raw rows read: 8655
- Final deduplicated rows written: 3204
- Duplicate rows absorbed: 5451
- Rejected rows retained in final matrix: 699
- Use-with-caveat rows: 58
- Source-only rows: 121
- Rows without issue mapping: 1176

## Final Use Decisions
```json
{
  "use": 190,
  "use-with-caveat": 58,
  "source-only": 121,
  "background-only": 2136,
  "reject": 699
}
```

## Final Confidence
```json
{
  "confirmed": 109,
  "likely": 306,
  "weak-signal": 121,
  "contradicted": 2,
  "unknown": 2666
}
```

## Source Tiers
```json
{
  "primary": 114,
  "secondary": 301,
  "social": 121,
  "internal-memory": 2668
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 24   |
| 2     | LGBT / gender / parental rights                    | 12   |
| 3     | Education / curriculum / schools                   | 193  |
| 4     | Religious liberty / church / civic morality        | 346  |
| 5     | Taxes / spending / debt                            | 142  |
| 6     | Economy / jobs / labor                             | 78   |
| 7     | Guns / Second Amendment                            | 13   |
| 8     | Immigration / border                               | 49   |
| 9     | Health care / insurance / Medicaid                 | 92   |
| 10    | Election integrity / voting / courts               | 788  |
| 11    | Public safety / law enforcement / criminal justice | 268  |
| 12    | Agriculture / rural economy / water                | 117  |
| 13    | Local governance / transparency / ethics           | 1312 |
| 14    | Environment / energy / land use                    | 19   |

## Conflict / Caveat Review
- 2 rows are marked contradicted and must not be asserted without explicit caveat.
- 58 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-bobbi-dreiling-02983: narrative: "_A summary of what Bobbi Dreiling has publicly said, published, linked, or been directly quoted saying across official Ellis County pages, public candidate/forum coverage, professional directories, county com — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-bobbi-dreiling-03111: narrative: "Vernon Ruder Jr.'s public messaging is administrative, local, and practical rather than ideological. The strongest candidate-controlled source is his signed 2020 Hays Post letter, and the strongest attributed — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-bobbi-dreiling-00008: The FHSU polling-location dispute is the most visible conflict around her office. Dreiling's own rationale focuses on turnout numbers, cost, ADA compliance, parking/navigation, and service to the full precinct rather tha — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-bobbi-dreiling-00011: After her 2024 reelection, Dreiling interpreted the result as voter trust in her first four years as clerk and said she would continue the approach that had worked. She thanked voters, staff, and poll workers, calling th — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-bobbi-dreiling-01224: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-bobbi-dreiling-02277: The accessible candidate-controlled or attributed material does not show detailed positions on abortion, guns, immigration, education policy beyond voter/civic education, taxes beyond clerk-administered levies and revenu — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-00483: [LinkedIn](https://www.linkedin.com/in/aaron-cunningham-653b3094/) -- lists K-State education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02230: The most contested public topic is FHSU polling access. Dreiling's stated rationale is turnout, cost, ADA logistics, and whole-precinct service rather than student-only service. She told Kansas Reflector she was not deal — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02258: | Youth/civic engagement, voter education, student outreach, "I Voted" sticker contest | 4 | 24% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02240: Hays Post 2024 reelection profile. Key signal: eight elections, perfect counts/audits/recounts claim, township consolidation, budget savings, Saturday early voting, FHSU polling rationale, ballot drop-box security, camer — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02241: Tiger Media Network October 2024 forum coverage. Key signal: public debate remarks on free/fair/secure elections, taxes/levies, paper ballots, and election fraud. ([source](https://tigermedianet.com/?p=82423)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02255: | Public service, office experience, staff competence, county-clerk duties, tax/levy/revenue-neutral-rate work | 7 | 41% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02257: | Budget/cost control, township consolidation, envelope/postage/poll-pad savings, drop-box staffing cost | 4 | 24% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02261: Topic buckets overlap. For example, the 2024 Hays Post reelection profile counts under election security, voting-access logistics, budget/cost control, and office experience. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02231: Her election-security message is specific and procedural. She has described paper ballots, post-election audits, poll-pad and USB/result matching, ballot counts matching before ballots leave the clerk's office, cameras a — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02242: Hays Post November 2024 post-election response. Key signal: reelection result, flawless-office framing, continuing current approach, staff/poll-worker thanks, and no polling-location issues reported. ([source](https://ha — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02260: | Post-election thanks, staff/poll-worker recognition, continuity after reelection | 2 | 12% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02139: | Kansas County Clerks and Election Officials Association | https://www.kcceoa.org/county-clerks/northwest | FOUND | Northwest district listing identifies Bobbi Dreiling, Ellis County clerk, in office since 2021. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02202: Race: Ellis County Clerk / Election Officer (R) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-bobbi-dreiling-02203: Election slug: ellis-county-current — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-bobbi-dreiling-03083: narrative: "Rebecca Herzog's public messaging is not a conventional campaign-social record. The accessible record through May 11, 2026 is almost entirely official-office language and directory/election documentation for  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-00036: url: "https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-bobbi-dreiling-01687: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-00063: URL: https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_02032026-726 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-bobbi-dreiling-00767: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-00774: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-01734: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-01769: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-01788: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-01845: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-00967: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-01066: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-01255: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-01475: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-02831: narrative: "Sandy Jacobs' accessible public messaging is local, civic, and operational. The strongest public record is not a modern social feed; it is a trail of candidate letters, Hays Post Q&As, city-meeting coverage,  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-02955: narrative: "_A summary of what Aaron Cunningham has publicly said, posted, and had attributed to him across official county pages, public professional profiles, public social/profile previews, local news, public legal/ci — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-03035: narrative: "Nathan Leiker's public messaging is grounded in county operations and agriculture, not in a large campaign-social presence. The official [Ellis County Commission page](https://www.ellisco.net/120/County-Commi — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-00891: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-00902: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-bobbi-dreiling-00915: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
