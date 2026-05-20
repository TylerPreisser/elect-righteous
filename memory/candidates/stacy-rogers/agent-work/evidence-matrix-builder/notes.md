# Notes — evidence-matrix-builder — stacy-rogers — 2026-05-20

## Summary
- Raw rows read: 7918
- Final deduplicated rows written: 2949
- Duplicate rows absorbed: 4969
- Rejected rows retained in final matrix: 485
- Use-with-caveat rows: 32
- Source-only rows: 62
- Rows without issue mapping: 1442

## Final Use Decisions
```json
{
  "use": 196,
  "use-with-caveat": 32,
  "source-only": 62,
  "background-only": 2174,
  "reject": 485
}
```

## Final Confidence
```json
{
  "confirmed": 48,
  "likely": 302,
  "weak-signal": 126,
  "unknown": 2473
}
```

## Source Tiers
```json
{
  "primary": 50,
  "secondary": 300,
  "social": 126,
  "internal-memory": 2473
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 66   |
| 2     | LGBT / gender / parental rights                    | 26   |
| 3     | Education / curriculum / schools                   | 161  |
| 4     | Religious liberty / church / civic morality        | 101  |
| 5     | Taxes / spending / debt                            | 150  |
| 6     | Economy / jobs / labor                             | 127  |
| 7     | Guns / Second Amendment                            | 19   |
| 8     | Immigration / border                               | 27   |
| 9     | Health care / insurance / Medicaid                 | 176  |
| 10    | Election integrity / voting / courts               | 752  |
| 11    | Public safety / law enforcement / criminal justice | 127  |
| 12    | Agriculture / rural economy / water                | 90   |
| 13    | Local governance / transparency / ethics           | 845  |
| 14    | Environment / energy / land use                    | 26   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 32 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-stacy-rogers-02758: narrative: "_A summary of what Stacy Rogers has publicly said, posted, linked, and amplified across her campaign site, campaign social directory, LinkedIn, X, Facebook, Instagram, YouTube, TikTok, Truth Social references — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-stacy-rogers-00269: | s-sos-candidate-list-blocked | primary/blocker | Kansas SOS Candidate List | https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx | 2026-05-19 | Direct page blocked by JavaScript/captcha | — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-stacy-rogers-01631: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-stacy-rogers-02269: Kansas Secretary of State - 2026 Candidate List - https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx - accessed 2026-05-19 - tier: primary, blocked by JavaScript/captcha — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-stacy-rogers-02344: | Pro-life/family/faith/constitutional-rights framing, 2nd Amendment, natural rights, and religious language | 4 | 25% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02353: Across the accessible public set reviewed, no reviewed item centered Medicaid expansion, water policy or the Ogallala aquifer, higher-education affordability, housing affordability, child care affordability as a standalo — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02317: The richest long-form candidate voice came from podcast appearances rather than platform-native posts. On the Billy Dees Podcast, Rogers said she is on "Snapchat," TikTok, Rumble, YouTube, Truth Social, Facebook, Instagr — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02331: Billy Dees Podcast episode, June 12/13, 2025. Key signals: candidate says she is accessible across many social platforms; themes include people lacking a voice, special interests, Kansas aerospace/agriculture, fentanyl a — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02342: | Education, school struggle, homeschooling, learning challenges, and parental/family perspective | 4 | 25% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02310: Rogers' current campaign site uses a direct outsider-and-service frame: "People Over Politics. Kansas First." It says she wants a stronger future for every Kansas community, describes the Rogers-Smith ticket as first to  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02311: The Meet Stacy page is the clearest candidate-controlled issue summary. It identifies Rogers as a lifelong Kansan, Republican, business owner, mother, and non-career politician. It lists priorities including sunsetting S — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02319: Campaign homepage, captured 2026-05-11. Key signals: people-over-politics frame; first-to-file/first-to-enter claim for Rogers-Smith ticket; fiscal responsibility, small business, public safety, rural Kansas, agriculture — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02312: The Rogers Report page is positioned as a candidate-controlled update channel with campaign updates, event announcements, video messages, press releases, policy positions, and "behind-the-scenes" material. It explicitly  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02314: LinkedIn was the highest visible engagement/presence signal in the logged-out capture set. The public LinkedIn profile listed roughly 2K followers and 500+ connections, with the profile name "Stacy Rogers For Governor, ( — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02320: Campaign Meet Stacy page, captured 2026-05-11. Key signals: lifelong Kansan, proud Republican, business owner, mother, servant-leader framing; STAR bonds; ALBTR revenue; predatory energy projects; homegrown business; 2nd — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02322: The Rogers Report page, captured 2026-05-11. Key signals: official campaign update/video/policy hub, "straight talk" frame, and a visible Business & Beards podcast heading. ([source](https://stacyrogersforks.com/the-roge — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02333: KWCH May 14, 2025 article on the GOP governor field. Key signals: Rogers as first to announce in November 2024; small-business and constitutional-freedoms identity; quote about leadership that listens and acts on rights, — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02334: Beautynailhairsalons mirror of her Mary Kay/business social posts. Key signal: Nov. 7, 2024 post linking to the campaign Linktree; business posts overlap with Eberly Farm, Kids Closet Connection, and Mary Kay activity. T — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02336: This topic read is based on 16 accessible public items: campaign pages, candidate-controlled social directory, indexed profile metadata, podcast listings/transcripts, local news coverage, and an indexed business/social m — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-stacy-rogers-02340: | Economy, small business, local business, fair wages/job training, STAR bonds, ALBTR revenue, and rural/agriculture development | 7 | 44% | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-stacy-rogers-00039: URL: https://www.sos.ks.gov/elections/candidate-information.html — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-stacy-rogers-01646: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-00050: URL: https://candidatefiling.us/Info/Default?c=30052683837&e=2217607272&j=1896963838&s=882402022&st=KS — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-stacy-rogers-00733: [KS Legislature: Sen. Corson](https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-01353: [Jeff Colyer - Kansas Historical Society (Kansapedia)](https://www.kansashistory.gov/kansapedia/jeff-colyer/20011) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-01659: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-02815: narrative: "_A summary of what Joy Eakins has publicly said, posted, and amplified across campaign-controlled pages, public social profile metadata, LinkedIn previews, public news coverage, and indexed debate transcripts — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-02732: narrative: "_A summary of what Ty Masterson has publicly said, posted, and amplified across campaign channels, indexed social media, official public records, and credible public-news captures. Drawn from public captures  — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-00739: [Johnson County Post: Holscher school voucher critique (March 13, 2023)](https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-02066: [KU News: Vicki Schmidt earns pharmacy school's top honor (April 2019)](https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-00785: [Real Media KC: Sarnecki podcast](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-02721: "whereTheyWorship": "Public sources identify Masterson with NewSpring Church in Wichita, and the church website is https://www.newspring.org/. His campaign biography and faith language make religion a visible part of his — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-02807: "whereTheyWorship": "Eakins' campaign biography says she is a faithful member of River Community Church. The church website is https://www.rivercc.org/, and that is the clearest public church tie in the available record. — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-00774: [Wichita Chamber: Eakins podcast (Jan 2023)](https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-01399: [NKC Health - Jeffrey W. Colyer, M.D.](https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-01400: [WebMD - Dr. Jeffrey Colyer](https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-01655: [Kansas Reflector: Sykes challenges Hawkins](https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-01656: [Kansas Reflector: Hawkins launches campaign with pro-Trump rhetoric](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-02045: [Schmidt initiates Republican campaign for governor (July 9, 2025)](https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-stacy-rogers-02046: [Schmidt blends personal experience, advocacy on breast cancer bill (Feb 3, 2026)](https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
