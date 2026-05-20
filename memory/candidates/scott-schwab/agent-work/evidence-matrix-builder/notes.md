# Notes — evidence-matrix-builder — scott-schwab — 2026-05-20

## Summary
- Raw rows read: 13261
- Final deduplicated rows written: 4689
- Duplicate rows absorbed: 8572
- Rejected rows retained in final matrix: 820
- Use-with-caveat rows: 32
- Source-only rows: 119
- Rows without issue mapping: 2207

## Final Use Decisions
```json
{
  "use": 244,
  "use-with-caveat": 32,
  "source-only": 119,
  "background-only": 3474,
  "reject": 820
}
```

## Final Confidence
```json
{
  "confirmed": 88,
  "likely": 434,
  "weak-signal": 148,
  "contradicted": 1,
  "unknown": 4018
}
```

## Source Tiers
```json
{
  "primary": 91,
  "secondary": 431,
  "social": 148,
  "internal-memory": 4019
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 85   |
| 2     | LGBT / gender / parental rights                    | 15   |
| 3     | Education / curriculum / schools                   | 231  |
| 4     | Religious liberty / church / civic morality        | 387  |
| 5     | Taxes / spending / debt                            | 161  |
| 6     | Economy / jobs / labor                             | 130  |
| 7     | Guns / Second Amendment                            | 28   |
| 8     | Immigration / border                               | 47   |
| 9     | Health care / insurance / Medicaid                 | 227  |
| 10    | Election integrity / voting / courts               | 1125 |
| 11    | Public safety / law enforcement / criminal justice | 227  |
| 12    | Agriculture / rural economy / water                | 135  |
| 13    | Local governance / transparency / ethics           | 1343 |
| 14    | Environment / energy / land use                    | 34   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 32 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-scott-schwab-04494: narrative: "*A summary of what Cindy Holscher has publicly said, posted, and amplified across campaign-controlled channels and credible indexed coverage. Drawn from her campaign website, campaign news page, Linktree, Blu — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-schwab-04531: narrative: "_A summary of what Ken Rahjes has publicly said, posted, and amplified across campaign channels, public social metadata, official records, and credible indexed public coverage. Drawn from public captures of h — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-schwab-01338: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-schwab-02216: FEC Filing Status: Campaign active; specific FEC candidate ID not confirmed in search results. Committee details available at [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/ — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-schwab-02629: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-schwab-03747: Kansas SOS candidate list endpoint (blocked in this environment): https://www.kssos.org/elections/elections_upcoming_candidate.aspx — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-schwab-02255: FEC committee details not confirmed via search results. Check [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/) for most current filings. — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-scott-schwab-03893: Across the accessible public set reviewed, no reviewed item centered Medicaid expansion, rural hospital closures, child care, K-12 school finance, higher education affordability, foster care, housing costs, water policy, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-03858: The campaign website frames the candidacy around state governance, tax costs, business regulation, rural Kansas, election administration, and federal election authority. Its visible social links route to Facebook, X, and — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-03864: Campaign site homepage and priorities page, captured 2026-05-11. Key visible issue areas: governor campaign, tax costs, business regulation, rural Kansas, election administration, public safety, and federal election auth — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-03870: Jan. 8, 2025 campaign launch coverage with Schwab quotes on Kansas, property taxes, rural communities, election administration, and federal/state authority. ([source](https://www.kcur.org/politics-elections-and-governmen — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-03879: | Governor campaign frame, tax costs, business regulation, and rural Kansas | 3 | 27% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-03871: Mar. 21, 2025 public social-media health update quoted by KCTV/WIBW. Schwab wrote, "My doctors have confirmed it was found very early, and no further treatment will be required post-surgery. I will make a full recovery." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-03881: | Personal health update | 1 | 9% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-03878: | Election administration, voter rolls, election security, and federal/state election authority | 5 | 45% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-00005: The public platform footprint is compact and mostly campaign- or office-directed. The campaign site links Facebook, X, and Instagram. Public Facebook metadata listed 1,759 likes and 63 talking about this on May 11, 2026, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-00006: The X presence separates personal/campaign and office accounts. The @ScottSchwabKS profile metadata described him as, "Husband. Father. Honored to serve as Kansas' 32nd @kansassos." ([source](https://x.com/ScottSchwabKS) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-00239: YouTube: https://www.youtube.com/@kansassecretaryofstate; office channel metadata accessible. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-02253: Facebook Video: Spoke at Douglas County Democrats meeting about exploratory campaign ([facebook.com/dgcodems](https://www.facebook.com/dgcodems/videos/2299093513898616/)) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-scott-schwab-02392: [Douglas County Democrats Facebook - Exploratory Campaign Video](https://www.facebook.com/dgcodems/videos/2299093513898616/) — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-scott-schwab-00028: URL: https://www.sos.ks.gov/elections/candidate-information.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-scott-schwab-00094: URL: https://www.sos.ks.gov/media/press-releases/2026/04-09-26-secretary-schwabs-voter-roll-maintenance-bill-becomes-law-after-veto-override.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-scott-schwab-00402: [Shaun Musil - City of Hays Profile](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-00409: [Sandy Jacobs - City of Hays Profile](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-02416: [FEC - Tracey Mann Candidate Page](https://www.fec.gov/data/candidate/H0KS01123/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-02643: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-00604: [Tracey Mann - About (House.gov)](https://mann.house.gov/about) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-00703: [Jeff Colyer - Kansas Historical Society](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-01212: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-01369: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-02053: [Jeff Colyer - Kansas Historical Society (Kansapedia)](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-02656: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-02833: Source: [Kansas Secretary of State press release, October 10, 2024](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-scott-schwab-00528: [HaysPost USD 489 Candidate Profile: Curt Vajnar](https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-00539: [HaysPost: USD 489 BOE candidate Ruth Ruder](https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-00552: [HaysPost USD 489 Candidate Profile: Ken Brooks](https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-00565: [HaysPost: USD 489 school board candidate Allen Park](https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-00572: [HaysPost: USD 489 school board candidate Jayme Goetz](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-00588: [Guidon Online: School board approves Ron Wilson as superintendent](https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-scott-schwab-01218: [Johnson County Post: Holscher school voucher critique (March 13, 2023)](https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
