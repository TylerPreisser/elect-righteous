# Notes — evidence-matrix-builder — philip-sarnecki — 2026-05-20

## Summary
- Raw rows read: 7912
- Final deduplicated rows written: 3124
- Duplicate rows absorbed: 4788
- Rejected rows retained in final matrix: 527
- Use-with-caveat rows: 57
- Source-only rows: 64
- Rows without issue mapping: 1603

## Final Use Decisions
```json
{
  "use": 163,
  "use-with-caveat": 57,
  "source-only": 64,
  "background-only": 2313,
  "reject": 527
}
```

## Final Confidence
```json
{
  "confirmed": 41,
  "likely": 291,
  "weak-signal": 154,
  "contradicted": 1,
  "unknown": 2637
}
```

## Source Tiers
```json
{
  "primary": 42,
  "secondary": 290,
  "social": 154,
  "internal-memory": 2638
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 81   |
| 2     | LGBT / gender / parental rights                    | 35   |
| 3     | Education / curriculum / schools                   | 131  |
| 4     | Religious liberty / church / civic morality        | 200  |
| 5     | Taxes / spending / debt                            | 148  |
| 6     | Economy / jobs / labor                             | 146  |
| 7     | Guns / Second Amendment                            | 14   |
| 8     | Immigration / border                               | 59   |
| 9     | Health care / insurance / Medicaid                 | 168  |
| 10    | Election integrity / voting / courts               | 636  |
| 11    | Public safety / law enforcement / criminal justice | 95   |
| 12    | Agriculture / rural economy / water                | 62   |
| 13    | Local governance / transparency / ethics           | 787  |
| 14    | Environment / energy / land use                    | 21   |

## Conflict / Caveat Review
- 1 rows are marked contradicted and must not be asserted without explicit caveat.
- 57 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-philip-sarnecki-00052: | s-freestate-debate-pt2 | secondary | https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/ | 2026-02-20; accessed 2026-05-19 | Unofficial cleaned debate transcript: judicial selection, educatio — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-philip-sarnecki-02404: The Free State News debate transcript records Sarnecki saying abortion was his number one issue and telling the audience he would be "the most pro-life governor in our state's history." Treat this as secondary/unofficial — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-philip-sarnecki-02981: narrative: "_A summary of what Philip Sarnecki has publicly said, posted, and amplified across campaign channels, indexed social media, interviews, and credible public-news captures. Drawn from public captures of the cam — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-philip-sarnecki-02402: The Free State News debate transcript records Sarnecki supporting school choice, arguing funding should follow families and children, and criticizing DEI and "radical gender ideology" in schools. Treat this as secondary/ — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-philip-sarnecki-00051: | s-freestate-debate-pt1 | secondary | https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/ | 2026-02-17; accessed 2026-05-19 | Unofficial cleaned debate transcript: taxes — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-philip-sarnecki-02398: Free State News' unofficial January 30, 2026 debate transcript records Sarnecki arguing Kansas needed "prosperity" and stronger job creation, saying Kansas was losing residents, and tying his answer to business recruitme — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-philip-sarnecki-02380: Candidate-list limitation: The SOS live candidate-list endpoint (https://sos.ks.gov/elections/elections_upcoming_candidate.aspx) returned a JavaScript / robot-verification block in this environment. I could not directly  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-philip-sarnecki-02501: X sample: pro-life Christmas message. Sarnecki said he is pro-life because life is precious and God created every person in His image. Visible mirror metrics: 2, 4, 20, 340 views, 0. ([source](https://ngntipkolamrenang.t — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02517: | Faith, family, Christian identity, pro-life message, and family-values framing | 3 | 9% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02469: The campaign's plan page language is compact and repetitive: stand with President Trump, create jobs, lower taxes, restore parental rights, end woke policies, keep kids and grandkids in Kansas, bring business-style accou — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02478: Campaign homepage plan list, captured 2026-05-11. The plan says Sarnecki would stand with Trump, create jobs, lower taxes, restore parental rights, end woke policies, create opportunity for young Kansans, bring business  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02516: | Education, parental rights, anti-"woke" / anti-indoctrination messaging, and Charlie Kirk / Trump school-role-model controversy | 4 | 12% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02468: The official campaign site is Sarnecki's central candidate-controlled channel. It frames him as a "Kansas Dad," husband, businessman, job creator, Christian, and political outsider. The site says Kansas is suffering from — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02473: The visible X sample is sharply message-disciplined. The dominant posts attack "career politicians," high taxes, property taxes, government spending, Kansas's economy, red tape, Republican leadership, Democratic Gov. Lau — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02477: Campaign homepage issue list, captured 2026-05-11. The site lists highest regional taxes, second-highest corporate tax rate among border states, property taxes, DEI-style hiring, parental displacement in education, and y — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02487: X sample: Charlie Kirk / Trump school role-model controversy. Sarnecki wrote that students being barred from naming Charlie Kirk or President Trump as role models was "indoctrination." Visible mirror metrics: 293, about  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02526: | Charlie Kirk / Trump role-model school post | About 302K views in the X mirror, with visible interaction fields of 293, about 4K, about 10K, and 626. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02532: Across the accessible candidate-controlled and indexed public set reviewed, no reviewed item centered Medicaid expansion, rural hospital closures, hospital finance, child care, foster care, veterans services, broadband d — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02470: The biography page emphasizes the son-of-a-janitor-and-secretary story, RPS Financial Group, Strickland Brothers quick-lube franchises, 513 Films, Athletes in Action, Finseca, youth baseball coaching, faith in God, conse — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-philip-sarnecki-02474: Credible public coverage and interviews reinforce the same candidate-controlled message. Kansas Reflector/Kansas Press Association described Sarnecki as weary of Republicans losing governor races and joining a field domi — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-philip-sarnecki-00593: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-01214: [Jeff Colyer - Kansas Historical Society (Kansapedia)](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-01448: Source: [Kansas Secretary of State press release, October 10, 2024](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-philip-sarnecki-01760: [Kansas Secretary of State -- Schwab Biography](https://sos.ks.gov/about/schwab-biography.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-01762: [Kansas Legislature -- Rep. Schwab Profile](https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-01792: [Kansas SOS Press Release: Schwab satisfied with DeJoy call](https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02926: narrative: "_A summary of what Joy Eakins has publicly said, posted, and amplified across campaign-controlled pages, public social profile metadata, LinkedIn previews, public news coverage, and indexed debate transcripts — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-00599: [Johnson County Post: Holscher school voucher critique (March 13, 2023)](https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02238: [KU News: Vicki Schmidt earns pharmacy school's top honor (April 2019)](https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02914: "whereTheyWorship": "Eakins' campaign biography says she is a faithful member of River Community Church. The church website is https://www.rivercc.org/, and that is the clearest public church tie in the available record. — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-01773: [Kansas Reflector: Schwab certain voting secure, eager to cut property taxes](https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-00634: [Wichita Chamber: Eakins podcast (Jan 2023)](https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-01260: [NKC Health - Jeffrey W. Colyer, M.D.](https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-01261: [WebMD - Dr. Jeffrey Colyer](https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02217: [Schmidt initiates Republican campaign for governor (July 9, 2025)](https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02218: [Schmidt blends personal experience, advocacy on breast cancer bill (Feb 3, 2026)](https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02228: [KFL PAC Statement on Schmidt (Oct 27, 2025)](https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02236: [At The Core: Spotlight on Insurance Commissioner Vicki Schmidt (Nov 14, 2024)](https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02244: [WebMD: Dr. Michael Schmidt, MD](https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-philip-sarnecki-02245: [MD.com: Michael J. Schmidt, MD](https://www.md.com/doctor/michael-j-schmidt-md) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
