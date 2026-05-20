# Notes — evidence-matrix-builder — tracey-mann — 2026-05-20

## Summary
- Raw rows read: 6113
- Final deduplicated rows written: 3228
- Duplicate rows absorbed: 2885
- Rejected rows retained in final matrix: 554
- Use-with-caveat rows: 15
- Source-only rows: 87
- Rows without issue mapping: 1322

## Final Use Decisions
```json
{
  "use": 201,
  "use-with-caveat": 15,
  "source-only": 87,
  "background-only": 2371,
  "reject": 554
}
```

## Final Confidence
```json
{
  "confirmed": 89,
  "likely": 313,
  "weak-signal": 53,
  "contradicted": 3,
  "unknown": 2770
}
```

## Source Tiers
```json
{
  "primary": 92,
  "secondary": 310,
  "social": 53,
  "internal-memory": 2773
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 44   |
| 2     | LGBT / gender / parental rights                    | 7    |
| 3     | Education / curriculum / schools                   | 148  |
| 4     | Religious liberty / church / civic morality        | 298  |
| 5     | Taxes / spending / debt                            | 75   |
| 6     | Economy / jobs / labor                             | 65   |
| 7     | Guns / Second Amendment                            | 9    |
| 8     | Immigration / border                               | 80   |
| 9     | Health care / insurance / Medicaid                 | 189  |
| 10    | Election integrity / voting / courts               | 854  |
| 11    | Public safety / law enforcement / criminal justice | 256  |
| 12    | Agriculture / rural economy / water                | 179  |
| 13    | Local governance / transparency / ethics           | 884  |
| 14    | Environment / energy / land use                    | 35   |

## Conflict / Caveat Review
- 3 rows are marked contradicted and must not be asserted without explicit caveat.
- 15 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-tracey-mann-00925: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-tracey-mann-01596: FEC Filing Status: Campaign active; specific FEC candidate ID not confirmed in search results. Committee details available at [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/ — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-tracey-mann-02011: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-tracey-mann-01636: FEC committee details not confirmed via search results. Check [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/) for most current filings. — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-tracey-mann-02908: On national and foreign-policy questions, Mann's posting cadence is lower than on agriculture but consistent in direction. In November 2024 he [posted condemning antisemitic violence against Israeli soccer fans in Amster — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-tracey-mann-02907: Engagement on Mann's content is not evenly distributed across topics. His October 14, 2025 border-security Facebook post drew [2,900 reactions, 343 comments, and 79 shares](https://www.facebook.com/TraceyMannKS/posts/kan — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-tracey-mann-02905: Across the public record on X, Facebook, and YouTube, Mann's most frequent topic is agriculture policy. He posts about the Farm Bill, commodity producers, ag trade promotion, and the operational mechanics of U.S. food ai — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-tracey-mann-02909: For the KS-01 district itself, Mann's local content centers on agriculture and on in-person constituent contact. In August 2024 he [posted a tally citing 246 town halls and a 60-county Mann Listening Tour](https://x.com/ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-tracey-mann-01634: Facebook Video: Spoke at Douglas County Democrats meeting about exploratory campaign ([facebook.com/dgcodems](https://www.facebook.com/dgcodems/videos/2299093513898616/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-tracey-mann-01775: [Douglas County Democrats Facebook - Exploratory Campaign Video](https://www.facebook.com/dgcodems/videos/2299093513898616/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-tracey-mann-02911: Mann's platform footprint is concentrated. He maintains an [official Facebook page with 5,413 likes](https://www.facebook.com/RepTraceyMann) and a [campaign Facebook page with 5,012 likes](https://www.facebook.com/Tracey — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-tracey-mann-03071: The highest-response candidate-controlled Bluesky items were small in absolute scale, reflecting a profile with 244 followers as of the May 11, 2026 capture. The May 6 PBS NewsHour share drew 7 likes, 2 reposts, and 1 re — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-tracey-mann-02724: "Medicaid gap wording avoids deciding whether the evidence proves contradiction; it asks readers to compare statements and actions." — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.
- em-tracey-mann-03190: "summary": "Readers can compare Mann's pre-vote assurance that proposed Medicaid\nchanges were not cuts with his later yea vote on H.R. 1 and his own\npost-vote statement saying Medicaid and SNAP had been expanded beyond — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.
- em-tracey-mann-02586: deciding whether the change is a contradiction, a narrower definition — Use only with caveat because the raw matrix flagged conflicting or contradictory source language.

## Representative Rejected Rows
- em-tracey-mann-00211: Subsequent kaptur.house.gov press release "Kaptur, Mann, Brown, Marshall Lead Bipartisan and Bicameral Legislation Fighting For American Farmers": https://kaptur.house.gov/media-center/press-releases/kaptur-mann-brown-ma — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-02264: [Kaptur–Mann–Brown–Marshall Bicameral Legislation (kaptur.house.gov)](https://kaptur.house.gov/media-center/press-releases/kaptur-mann-brown-marshall-lead-bipartisan-and-bicameral-legislation) — accessed 2026-05-20 — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-00308: Source: FEC.gov candidate page, https://www.fec.gov/data/candidate/H0KS01123/ — PRIMARY-TIER. Direct fetch succeeded (only government-source fetch that did succeed in this environment). — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-tracey-mann-00466: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-00473: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-01459: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-01460: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-01461: [FEC: Michael Soetaert Candidate Page](https://www.fec.gov/data/candidate/S2KS00097/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-03102: Musser's platform footprint is concentrated on an official campaign website and a small Facebook page. No candidate-controlled X, Instagram, YouTube, Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was foun — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-00767: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-00955: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-01489: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-01490: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-01491: [Patrick Schmidt Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-02038: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-02993: "source": "Roger Marshall Senate biography, accessed April 2, 2026, https://www.marshall.senate.gov/about/", — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-00262: Source: Hays Post — "U.S. Rep. Mann's addresses immigration, national debt in Hays" (https://hayspost.com/posts/1e4f8e0c-4dcd-446f-a66b-a191d2a56966). Town hall held at Hays Public Library, 1205 Main St., on July 2, 2024 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-tracey-mann-00592: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-00603: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-tracey-mann-00616: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
