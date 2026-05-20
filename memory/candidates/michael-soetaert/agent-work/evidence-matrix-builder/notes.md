# Notes — evidence-matrix-builder — michael-soetaert — 2026-05-20

## Summary
- Raw rows read: 9840
- Final deduplicated rows written: 3361
- Duplicate rows absorbed: 6479
- Rejected rows retained in final matrix: 592
- Use-with-caveat rows: 34
- Source-only rows: 89
- Rows without issue mapping: 1416

## Final Use Decisions
```json
{
  "use": 182,
  "use-with-caveat": 34,
  "source-only": 89,
  "background-only": 2464,
  "reject": 592
}
```

## Final Confidence
```json
{
  "confirmed": 81,
  "likely": 299,
  "weak-signal": 156,
  "unknown": 2825
}
```

## Source Tiers
```json
{
  "primary": 83,
  "secondary": 297,
  "social": 156,
  "internal-memory": 2825
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 101  |
| 2     | LGBT / gender / parental rights                    | 33   |
| 3     | Education / curriculum / schools                   | 104  |
| 4     | Religious liberty / church / civic morality        | 103  |
| 5     | Taxes / spending / debt                            | 65   |
| 6     | Economy / jobs / labor                             | 54   |
| 7     | Guns / Second Amendment                            | 30   |
| 8     | Immigration / border                               | 70   |
| 9     | Health care / insurance / Medicaid                 | 216  |
| 10    | Election integrity / voting / courts               | 942  |
| 11    | Public safety / law enforcement / criminal justice | 285  |
| 12    | Agriculture / rural economy / water                | 135  |
| 13    | Local governance / transparency / ethics           | 1126 |
| 14    | Environment / energy / land use                    | 26   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 34 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-michael-soetaert-00026: | s-sos-candidate-list-blocked | primary | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | accessed 2026-05-19 | Official candidate-list endpoint could not be read directly in this environment | blocker  — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-michael-soetaert-00702: IMPORTANT CAVEAT: Contact the Ellis County Clerk (785-628-9410) to confirm exactly which offices appear on the 2026 ballot. The Candidate Filings page at [ellisco.net/626](https://www.ellisco.net/626/Candidate-Filings) w — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-michael-soetaert-00006: National-policy content appeared mostly through issue labels and video titles. The campaign site labels included reproductive rights, affordability, voting rights, Department of Peace, LGBTQIAP2S+ equality, campaign fina — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-00038: | s-instagram | social | https://www.instagram.com/michael.soetaert1/ | captured in local harvest 2026-05-11 | Public profile metadata, follower/post counts, bio tags | social, abortion, LGBTQ | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-00040: | s-bluesky | social | https://bsky.app/profile/michaelsoetaert.bsky.social | captured in local harvest 2026-05-11 | Public profile metadata, account creation, follower/following/write counts, description tags | social,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02631: YouTube: https://www.youtube.com/@mikeforkansas was the strongest post-level source in the local social harvest. Public channel capture on May 11, 2026 showed 30 visible videos from roughly November 2025 through February — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02632: Instagram: https://www.instagram.com/michael.soetaert1/ public metadata in local harvest showed 52 followers, 0 following, and 205 posts, with bio tags for progressive Democrat, Kansas, gay, LGBTQIAP2S+, reproductive fre — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02682: The campaign site metadata describes Soetaert this way: ["Michael Soetaert PROGRESSIVE DEMOCRAT for U.S. Senate respecting reproductive rights. He's also a GAY LGBTQIAP2S+ activist advocate & ally for the Equality Act."] — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02683: The campaign site issue tiles link to YouTube videos or clips labeled reproductive rights, affordability, voting rights, Department of Peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02701: | [REPRODUCTIVE RIGHTS](https://www.youtube.com/watch?v=-SnGefBi50Y) | Michael Soetaert for United States Senate representing Kansas REPRODUCTIVE RIGHTS michael-soetaert | 15 | 3mo ago | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02742: Bluesky profile metadata as captured on 2026-05-11 listed the display name "Michael Soetaert for United States Senate 2026 KS" and the handle [michaelsoetaert.bsky.social](https://bsky.app/profile/michaelsoetaert.bsky.so — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02747: Civil rights, identity, reproductive rights, voting, ballot access, registration, and campaign finance: 9 of 30. — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02750: The issue labels repeated across the campaign site and YouTube were reproductive rights, affordability, voting rights, peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS. The Kansas-local Yo — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-03319: "observation": "YouTube: https://www.youtube.com/@mikeforkansas was the strongest post-level source in the local social harvest. Public channel capture on May 11, 2026 showed 30 visible videos from roughly November 2025  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-03322: "observation": "Instagram: https://www.instagram.com/michael.soetaert1/ public metadata in local harvest showed 52 followers, 0 following, and 205 posts, with bio tags for progressive Democrat, Kansas, gay, LGBTQIAP2S+,  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02752: The public harvest did not capture detailed candidate-authored posts on water, the Ogallala Aquifer, Farm Bill policy, crop prices, ethanol, rural hospital closures, Fort Riley, veterans' facilities, Medicare, Social Sec — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02695: The ActBlue page says: ["Michael Soetaert is the ONLY PROGRESSIVE DEMOCRATIC candidate for United States Senate representing Kansas who is declared and filed with the KSSOS. Mike is challenging the Republican incumbent S — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-00005: Audience response is easiest to measure on YouTube, because that platform exposed post titles, view counts, and date labels. The visible channel page showed [30 videos](social-harvest.md#youtube-videos) from roughly Nove — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02667: Michael Soetaert has a current public campaign footprint centered on a campaign site, ActBlue, YouTube, Instagram, Threads, Bluesky, Facebook, X, and a TikTok link. The campaign site links out to the social accounts, Act — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-michael-soetaert-02670: | Campaign site | [mikeforkansas.my.canva.site](https://mikeforkansas.my.canva.site/) | Active campaign landing page with issue tiles, social links, ActBlue, FEC, KSSOS, vote.gov, and store links. | — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-michael-soetaert-01248: [Daniel Hawkins Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-01249: [Dinah Sykes Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-01250: [Patrick Schmidt Legislature Page](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-02118: [FEC: LaPorte filing](https://www.fec.gov/data/candidate/H6KS03258/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-02787: url: "https://www.sos.ks.gov/elections/22elec/2022-Primary-Official-Vote-Totals.pdf" — Rejected as generated metadata, structural residue, or non-substantive source scaffolding rather than a voter-facing factual claim.
- em-michael-soetaert-00190: Campaign Finance: As the incumbent senator, Marshall has access to a substantial war chest and national Republican fundraising apparatus. Specific 2026 cycle totals should be checked at [FEC.gov](https://www.fec.gov/data — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-00307: FEC Page: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-00561: Sandy Spidel Neumann (D) - [FEC ID: S6KS00262](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-01221: [FEC: Roger Marshall Candidate Page](https://www.fec.gov/data/candidate/S0KS00315/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-01222: [FEC: Sandy Spidel Neumann Candidate Page](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-01809: [FEC - Kansans for Marshall](https://www.fec.gov/data/committee/C00576173/?cycle=2026) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-02166: City Page: [haysusa.com/273/Shaun-Musil](https://haysusa.com/273/Shaun-Musil) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-02201: City Page: [haysusa.com/270/Sandy-Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-02221: [City of Hays: Sandy Jacobs](https://haysusa.com/270/Sandy-Jacobs) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-02278: [City of Hays: Dougherty](https://www.haysusa.com/directory.aspx?eid=6) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-02548: [FEC - Sandy Spidel Neumann (S6KS00262)](https://www.fec.gov/data/candidate/S6KS00262/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-00289: [Patrick Schmidt - Kansas Legislature](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-00734: [KS Legislature: Rep. Wasinger](https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-01807: [Marshall Senate Website](https://www.marshall.senate.gov/about/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-michael-soetaert-01923: [KS Legislature: Schmidt](https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
