# Notes — evidence-matrix-builder — colin-mcroberts — 2026-05-20

## Summary
- Raw rows read: 4899
- Final deduplicated rows written: 2137
- Duplicate rows absorbed: 2762
- Rejected rows retained in final matrix: 309
- Use-with-caveat rows: 82
- Source-only rows: 41
- Rows without issue mapping: 842

## Final Use Decisions
```json
{
  "use": 151,
  "use-with-caveat": 82,
  "source-only": 41,
  "background-only": 1554,
  "reject": 309
}
```

## Final Confidence
```json
{
  "confirmed": 49,
  "likely": 173,
  "weak-signal": 248,
  "contradicted": 2,
  "unknown": 1665
}
```

## Source Tiers
```json
{
  "primary": 52,
  "secondary": 170,
  "social": 248,
  "internal-memory": 1667
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 41   |
| 2     | LGBT / gender / parental rights                    | 13   |
| 3     | Education / curriculum / schools                   | 91   |
| 4     | Religious liberty / church / civic morality        | 43   |
| 5     | Taxes / spending / debt                            | 40   |
| 6     | Economy / jobs / labor                             | 93   |
| 7     | Guns / Second Amendment                            | 15   |
| 8     | Immigration / border                               | 74   |
| 9     | Health care / insurance / Medicaid                 | 90   |
| 10    | Election integrity / voting / courts               | 730  |
| 11    | Public safety / law enforcement / criminal justice | 191  |
| 12    | Agriculture / rural economy / water                | 122  |
| 13    | Local governance / transparency / ethics           | 822  |
| 14    | Environment / energy / land use                    | 17   |

## Conflict / Caveat Review
- 2 rows are marked contradicted and must not be asserted without explicit caveat.
- 82 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-colin-mcroberts-00296: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-colin-mcroberts-00556: FEC Filing Status: Campaign active; specific FEC candidate ID not confirmed in search results. Committee details available at [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/ — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-colin-mcroberts-00972: [Prism News: Kansas law blocked 31,000 eligible voters](https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000) — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-colin-mcroberts-00596: FEC committee details not confirmed via search results. Check [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/) for most current filings. — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-colin-mcroberts-01376: Across the captured Bluesky period, the feed contains no original posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medica — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01965: narrative: "*A summary of what Colin McRoberts has publicly said, posted, and amplified across social media. Drawn from public posts on Bluesky, Instagram, LinkedIn, YouTube, Facebook, and TikTok between September 17, 20 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01350: Profile preview: Lawrence, Kansas; "Colin for Kansas"; Harvard Law School; 1K followers; 500+ connections. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01378: The campaign website lists Medicare, Medicaid, and Social Security; personal freedom; labor; education; and equality as issue headings, but those topics were not as frequent in original Bluesky posts as accountability, C — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01296: 2025-10-01 -- "The GOP can't pretend it's negotiating in good faith when it lies to Dems. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01218: 2026-02-20 -- "Firms are gearing up for the Refund Wars now. We're likely to see billions transferred from government to corporate coffers. And good! The taxes were illegal. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-00003: Across the captured public feed, McRoberts posts most often about federal accountability, executive power, and the role of Congress. In the coded Bluesky harvest, those subjects account for 24 of 62 original posts, or 39 — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01229: Topic: Agriculture / rural economy — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01237: 2026-01-25 -- "The Farmers Union. Planting common sense and growing America for a hundred and twenty two years." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01274: www.wsj.com/economy/the-..." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01313: www.wsj.com/economy/trum..." — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-01371: Topic distribution among 62 original Bluesky posts: federal accountability / executive power / rule-of-law issues -- 24 posts (39%); campaign travel, events, and outreach -- 14 posts (23%); agriculture, tariffs, rural ec — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-00006: On national and foreign-policy issues, McRoberts' feed centers on presidential power, federal law enforcement, courts, research funding, tariffs, food aid, and war powers. On January 13, 2026, he posted, "There's no reas — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-00009: McRoberts' active public footprint is strongest on Bluesky, where the campaign account had 201 followers, 65 following, and 97 posts at capture ([harvest](social-harvest.md#presence-summary)). His Instagram account liste — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-00044: | s-bsky-2026-02-24 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3mfkyz7pz5k2n | posted 2026-02-24; harvested 2026-05-11 | ICE / rights explainer using son's Lego creation, 3 likes / 3 reposts | im — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-colin-mcroberts-00046: | s-bsky-2026-02-04 | social | https://bsky.app/profile/colinmcroberts.bsky.social/post/3mdzafhenpk2s | posted 2026-02-04; harvested 2026-05-11 | Candidate post linking Section 1983 ICE op-ed, 4 likes / 3 reposts | immig — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-colin-mcroberts-01416: url: "https://www.sos.ks.gov/elections/candidate-information.html" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-colin-mcroberts-00759: [FEC - Tracey Mann Candidate Page](https://www.fec.gov/data/candidate/H0KS01123/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00986: [Tracey Mann official site](https://mann.house.gov/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-01996: Musser's platform footprint is concentrated on an official campaign website and a small Facebook page. No candidate-controlled X, Instagram, YouTube, Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was foun — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00328: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00999: [Kansas Legislature: Rep. Barb Wasinger](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-01994: For KS-01 district issues, Musser's local material centers on agriculture, healthcare, education, and a manufacturing-and-safety biography. Agriculture accounts for [2 of 24 candidate-controlled website statements](socia — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-01993: On national policy, Musser's public website addresses domestic federal programs rather than foreign affairs. The issues page states, "It’s mandatory that we maintain social security to ensure everyone who has paid in get — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00995: [Kansas Reflector: Sykes challenges Hawkins](https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00996: [Kansas Reflector: Hawkins launches campaign with pro-Trump rhetoric](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-01990: Across the accessible candidate-controlled record, Musser does not have a conventional social feed with regular public posts; the largest body of material is the campaign website. The harvest examined [24 candidate-contr — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00273: [Hays Post: Berges Candidate Profile](https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00611: [Salina Post - "Reinhold, 1st Congressional District candidate to speak in Salina"](https://salinapost.com/posts/25bbb2eb-ae15-4419-8096-972bb919a48a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00737: [Kansas Reflector - Lauren Reinhold Archives](https://kansasreflector.com/tag/lauren-reinhold/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00977: [Kansas Reflector: Ethan Corson enters race](https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00982: [Kansas Reflector: Democrats sharpen attack on Marshall](https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-00991: [Kansas Reflector: Pat Proctor declares for SOS](https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-01001: [Barb Wasinger campaign site](https://barbforkansas.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-01784: [Craig Musser - Ballotpedia](https://ballotpedia.org/Craig_Musser) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-colin-mcroberts-01785: [ZoomInfo - Craig Musser](https://www.zoominfo.com/p/Craig-Musser/9122088966) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
