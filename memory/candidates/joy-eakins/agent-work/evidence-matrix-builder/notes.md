# Notes — evidence-matrix-builder — joy-eakins — 2026-05-20

## Summary
- Raw rows read: 7795
- Final deduplicated rows written: 3122
- Duplicate rows absorbed: 4673
- Rejected rows retained in final matrix: 540
- Use-with-caveat rows: 43
- Source-only rows: 60
- Rows without issue mapping: 1588

## Final Use Decisions
```json
{
  "use": 168,
  "use-with-caveat": 43,
  "source-only": 60,
  "background-only": 2311,
  "reject": 540
}
```

## Final Confidence
```json
{
  "confirmed": 45,
  "likely": 290,
  "weak-signal": 136,
  "contradicted": 1,
  "unknown": 2650
}
```

## Source Tiers
```json
{
  "primary": 46,
  "secondary": 289,
  "social": 136,
  "internal-memory": 2651
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 75   |
| 2     | LGBT / gender / parental rights                    | 19   |
| 3     | Education / curriculum / schools                   | 247  |
| 4     | Religious liberty / church / civic morality        | 165  |
| 5     | Taxes / spending / debt                            | 150  |
| 6     | Economy / jobs / labor                             | 115  |
| 7     | Guns / Second Amendment                            | 18   |
| 8     | Immigration / border                               | 36   |
| 9     | Health care / insurance / Medicaid                 | 203  |
| 10    | Election integrity / voting / courts               | 638  |
| 11    | Public safety / law enforcement / criminal justice | 91   |
| 12    | Agriculture / rural economy / water                | 68   |
| 13    | Local governance / transparency / ethics           | 817  |
| 14    | Environment / energy / land use                    | 29   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 43 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-joy-eakins-00060: | s-freestate-debate-pt2 | secondary | https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/ | 2026-02-20; accessed 2026-05-19 | Unofficial debate transcript: judicial selection, education, marij — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-joy-eakins-02449: The Free State News debate transcript records Eakins answering a question about abortion by saying she was "passionate about this issue" and connecting the issue to her own biography. This is a direct debate statement in — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-joy-eakins-02963: narrative: "_A summary of what Joy Eakins has publicly said, posted, and amplified across campaign-controlled pages, public social profile metadata, LinkedIn previews, public news coverage, and indexed debate transcripts — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-joy-eakins-00059: | s-freestate-debate-pt1 | secondary | https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/ | 2026-02-17; accessed 2026-05-19 | Unofficial debate transcript: opening, prop — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-joy-eakins-02443: The Free State News debate transcript, an unofficial cleaned transcript, records Eakins describing rising appraisals as a backdoor tax increase and saying government should bear the burden of proof when appraisals increa — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-joy-eakins-02422: Candidate-list limitation: The SOS live candidate-list endpoint (https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx) returned a JavaScript / CloudFront anti-bot block in this environment. I could not dire — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-joy-eakins-02448: The Free State News debate transcript records Eakins supporting the 2026 constitutional amendment to move Kansas Supreme Court justices from the current selection system to elections. Treat the transcript as secondary/un — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-joy-eakins-02522: Kansas Reflector Jan. 30, 2026 debate article: GOP debate coverage; Eakins says established politicians "have been stewarding our decline"; candidates aligned on abortion, marijuana opposition, Supreme Court elections, a — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02524: Free State News Feb. 20, 2026 debate transcript part 2: Eakins' remarks on judicial selection, education, marijuana, abortion, immigration/ICE cooperation, energy, and closing statement. This transcript is not an officia — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02537: | Abortion, marijuana, judicial selection, immigration/ICE, energy, and other debate-specific conservative policy issues | 5 | 29% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02546: Across the accessible reviewed set, no candidate-controlled item centered water policy, the Ogallala Aquifer, Medicaid expansion, rural hospitals, child care, foster care, broadband, roads/bridges, public safety beyond I — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02487: | Campaign site | https://www.kansascomeback.com/ | FOUND | Candidate-controlled site for "Joy Eakins for Kansas Governor." Public pages accessible for About, Education, Property Tax Reform, News, Volunteer, and Donate.  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02503: The campaign website frames Eakins as a "strong conservative and America First patriot" who founded Cornerstone Data, served on the Wichita Board of Education, fought for parents' rights and fiscal responsibility, and be — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02504: The campaign site's Education page is the largest candidate-controlled issue page in the capture. It says Kansas needs a comeback in education, lists NAEP proficiency/ranking figures, and argues parents "know best" and s — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02509: LinkedIn public preview listed [Joy Eakins](https://www.linkedin.com/in/joyeakins/) as Wichita-based, with 1K followers and 500+ connections, and websites for joyeakins.com and the campaign site. Visible activity preview — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02511: Campaign homepage/current metadata: official campaign site; title and description position Eakins as a conservative Kansas Comeback candidate focused on education reform, economic growth, and family values. The page's Op — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02513: Campaign Education page: NAEP frame, school choice, civics, teacher-union negotiation repeal, school finance formula, reading/math outcomes, school-board training, COVID reopening/data-analytics claim. ([source](https:// — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02516: Campaign repost of KAKE interview: opportunity, brain drain, school outcomes, school choice, financial cliff, affordable/appropriate housing, outsider pitch, and "government to get out of their way" line. ([source](https — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02525: Salina Post Feb. 3, 2026 debate summary: Eakins described school choice, tax and spending reform, and resistance to government incentives for business/entrepreneurs. ([source](https://salinapost.com/posts/68a90d33-8d9a-4 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-joy-eakins-02526: Hays Post Apr. 13, 2026 town hall article: Ellis event focused on education reform and property tax relief; Eakins said, "Kansas should be the best place to live the American dream." ([source](https://hayspost.com/posts/ — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-joy-eakins-02562: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-joy-eakins-00639: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-01260: [Jeff Colyer - Kansas Historical Society (Kansapedia)](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-01494: Source: [Kansas Secretary of State press release, October 10, 2024](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-joy-eakins-01806: [Kansas Secretary of State -- Schwab Biography](https://sos.ks.gov/about/schwab-biography.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-01808: [Kansas Legislature -- Rep. Schwab Profile](https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-01838: [Kansas SOS Press Release: Schwab satisfied with DeJoy call](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-00645: [Johnson County Post: Holscher school voucher critique (March 13, 2023)](https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-02284: [KU News: Vicki Schmidt earns pharmacy school's top honor (April 2019)](https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-00024: Important correction for later compilers: the current UI v2 object contains bad copied URLs, including campaignWebsite pointing to a Jeff Colyer House bio PDF and church.url pointing to a Philip Sarnecki Bott Radio page. — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-00691: [Real Media KC: Sarnecki podcast](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-01819: [Kansas Reflector: Schwab certain voting secure, eager to cut property taxes](https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-01306: [NKC Health - Jeffrey W. Colyer, M.D.](https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-01307: [WebMD - Dr. Jeffrey Colyer](https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-02263: [Schmidt initiates Republican campaign for governor (July 9, 2025)](https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-02264: [Schmidt blends personal experience, advocacy on breast cancer bill (Feb 3, 2026)](https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-02274: [KFL PAC Statement on Schmidt (Oct 27, 2025)](https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-02282: [At The Core: Spotlight on Insurance Commissioner Vicki Schmidt (Nov 14, 2024)](https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-02290: [WebMD: Dr. Michael Schmidt, MD](https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-joy-eakins-02291: [MD.com: Michael J. Schmidt, MD](https://www.md.com/doctor/michael-j-schmidt-md) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
