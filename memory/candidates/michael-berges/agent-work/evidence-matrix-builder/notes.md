# Notes — evidence-matrix-builder — michael-berges — 2026-05-20

## Summary
- Raw rows read: 3564
- Final deduplicated rows written: 1335
- Duplicate rows absorbed: 2229
- Rejected rows retained in final matrix: 298
- Use-with-caveat rows: 5
- Source-only rows: 2
- Rows without issue mapping: 345

## Final Use Decisions
```json
{
  "use": 24,
  "use-with-caveat": 5,
  "source-only": 2,
  "background-only": 1006,
  "reject": 298
}
```

## Final Confidence
```json
{
  "confirmed": 11,
  "likely": 32,
  "weak-signal": 8,
  "unknown": 1284
}
```

## Source Tiers
```json
{
  "primary": 13,
  "secondary": 30,
  "social": 8,
  "internal-memory": 1284
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 4    |
| 2     | LGBT / gender / parental rights                    | 1    |
| 3     | Education / curriculum / schools                   | 35   |
| 4     | Religious liberty / church / civic morality        | 130  |
| 5     | Taxes / spending / debt                            | 131  |
| 6     | Economy / jobs / labor                             | 39   |
| 7     | Guns / Second Amendment                            | 2    |
| 8     | Immigration / border                               | 4    |
| 9     | Health care / insurance / Medicaid                 | 19   |
| 10    | Election integrity / voting / courts               | 480  |
| 11    | Public safety / law enforcement / criminal justice | 278  |
| 12    | Agriculture / rural economy / water                | 23   |
| 13    | Local governance / transparency / ethics           | 594  |
| 14    | Environment / energy / land use                    | 5    |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 5 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-michael-berges-01212: narrative: "_A summary of what Alaina Cunningham has publicly said, posted, and had attributed to her across city pages, public meeting records, local candidate Q&As, local news, podcast listings, and public profile trac — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-michael-berges-01050: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-michael-berges-00178: Source/lead URLs: https://www.facebook.com/EllisCountyDistrict1/ (lead only); https://www.facebook.com/HaysDailyNews/posts/ellis-county-commission-chair-michael-berges-asserted-that-commissioners-are-not/1509240304362171 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-berges-00662: "url": "https://www.facebook.com/HaysDailyNews/posts/ellis-county-commission-chair-michael-berges-asserted-that-commissioners-are-not/1509240304362171/" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-berges-00750: [Hays Daily News -- Berges Commission Comment](https://www.facebook.com/HaysDailyNews/posts/ellis-county-commission-chair-michael-berges-asserted-that-commissioners-are-not/1509240304362171/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-michael-berges-00878: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00034: URL: https://www.ellisco.net/DocumentCenter/View/5378/2024-Budget-Book-Final — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-michael-berges-00018: URL: https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-michael-berges-01102: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00029: URL: https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07012025-681 — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-michael-berges-00879: [HaysPost Candidate Q&A: Shaun Musil](https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00884: [BobJane 'Bobbi' Dreiling Obituary](https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00904: [HaysPost Candidate Profile: Neal Younger](https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00807: [Mason Ruder Elected Mayor -- Hays Daily News](https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00808: [Mason Ruder 9/11 Speech -- Kansas Press Association](https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00821: Source: [Ellis County Commission Adjusts Salaries -- Hays Post](https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-michael-berges-01001: [HaysMed: Alaina Cunningham](https://www.haysmed.com/the-center/alaina-cunningham/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-01101: [Ballotpedia: Chase LaPorte](https://ballotpedia.org/Chase_LaPorte) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-01104: [OpenCampaign: LaPorte positions](https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-01152: Source: [KSN: Candidates under scrutiny](https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-michael-berges-00756: LinkedIn: [linkedin.com/in/scott-braun-cpm-62833366](https://www.linkedin.com/in/scott-braun-cpm-62833366/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-01005: LinkedIn: [Alaina Cunningham](https://www.linkedin.com/in/alaina-cunningham-4436ba1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-01006: Facebook: [Alaina Cunningham](https://www.facebook.com/alaina.cunningham.9/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00938: | 30 | Jeff Colyer | Gov candidate (R) | Unknown (Catholic background) | Catholic background | STRONG INDICATOR | Moderate -- TMP grad, pro-life policy | — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-berges-00960: Solid: Colyer (Catholic background, pro-life record, but no current church named) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
