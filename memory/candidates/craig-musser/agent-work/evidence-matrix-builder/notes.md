# Notes — evidence-matrix-builder — craig-musser — 2026-05-20

## Summary
- Raw rows read: 3616
- Final deduplicated rows written: 1409
- Duplicate rows absorbed: 2207
- Rejected rows retained in final matrix: 161
- Use-with-caveat rows: 42
- Source-only rows: 44
- Rows without issue mapping: 620

## Final Use Decisions
```json
{
  "use": 73,
  "use-with-caveat": 42,
  "source-only": 44,
  "background-only": 1089,
  "reject": 161
}
```

## Final Confidence
```json
{
  "confirmed": 32,
  "likely": 111,
  "weak-signal": 150,
  "unknown": 1116
}
```

## Source Tiers
```json
{
  "primary": 37,
  "secondary": 106,
  "social": 150,
  "internal-memory": 1116
}
```

## Issue Coverage
| Issue | Title                                              | Rows |
| ----- | -------------------------------------------------- | ---- |
| 1     | Abortion / life                                    | 7    |
| 2     | LGBT / gender / parental rights                    | 13   |
| 3     | Education / curriculum / schools                   | 60   |
| 4     | Religious liberty / church / civic morality        | 52   |
| 5     | Taxes / spending / debt                            | 59   |
| 6     | Economy / jobs / labor                             | 28   |
| 7     | Guns / Second Amendment                            | 11   |
| 8     | Immigration / border                               | 17   |
| 9     | Health care / insurance / Medicaid                 | 75   |
| 10    | Election integrity / voting / courts               | 429  |
| 11    | Public safety / law enforcement / criminal justice | 121  |
| 12    | Agriculture / rural economy / water                | 56   |
| 13    | Local governance / transparency / ethics           | 482  |
| 14    | Environment / energy / land use                    | 21   |

## Conflict / Caveat Review
- No final rows were marked contradicted by the builder.
- 42 rows require caveat language if used downstream.

## Representative Caveated Rows
- em-craig-musser-00052: Kansas Secretary of State candidate list endpoint, blocked in this environment, accessed 2026-05-19: https://sos.ks.gov/elections/elections_upcoming_candidate.aspx — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-musser-00204: Kansas Secretary of State, candidate list endpoint blocked: https://sos.ks.gov/elections/elections_upcoming_candidate.aspx — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-musser-00319: FEC Filing Status: Campaign active; specific FEC candidate ID not confirmed in search results. Committee details available at [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/ — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-musser-00738: Kansas Secretary of State live candidate list endpoint, blocked in this environment, accessed 2026-05-19: https://sos.ks.gov/elections/elections_upcoming_candidate.aspx — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-musser-00359: FEC committee details not confirmed via search results. Check [fec.gov/data/elections/house/KS/01/2026](https://www.fec.gov/data/elections/house/KS/01/2026/) for most current filings. — Usable with explicit caveat because the raw evidence notes a source limitation, preliminary status, or verification gap.
- em-craig-musser-00815: Undated; captured 2026-05-11 — "If elected, I intend to uphold and defend the rights of citizens to privacy and bodily autonomy by equally supporting all members of our community regardless of race, religion, sexual orie — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00802: Undated; captured 2026-05-11 — "My family immigrated from Germany over a century ago. I grew up in Pennsylvania in a middle-class family where I went to public school and attended Church of the Brethren. My parents taugh — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00821: Undated; captured 2026-05-11 — "Pay for educators, training, and continuing education: More public funds need to be allocated to attract, educate, and continuously train quality teachers. We need to emphasize the importa — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00822: Topic: Education — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00824: Undated; captured 2026-05-11 — "Student loans and college debt: The student loan system needs to be reformed so that students and parents aren’t required to take out high-interest loans to fund the education they need to — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00847: Topic distribution among the 24 candidate-controlled website statements: healthcare — 5 statements (21%); representation / biography / campaign theme — 7 statements (29%); personal freedoms and child welfare — 4 statemen — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00852: Across the captured campaign website, the issues page contains statements about healthcare, privacy and bodily autonomy, women, children, Social Security, education, budget and taxes, and agriculture. It does not include — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00005: Audience response is mostly unavailable because the accessible social record contains one Facebook page/post metadata item and no public post body with visible reactions, comments, shares, or views. The campaign Facebook — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00785: Additional public metadata line from Facebook card: "Applying Kitchen Table Economics for Pragmatic Budget Solutions" — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00812: Undated; captured 2026-05-11 — "Access to healthy food and physical fitness: The government should ensure citizens have access to healthy food and physical fitness. The state of Kansas and the nation should work to ensur — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00819: Undated; captured 2026-05-11 — "It’s mandatory that we maintain social security to ensure everyone who has paid in gets the income and benefits their money has provided others. To do that, we must maintain a substantial  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00825: Undated; captured 2026-05-11 — "Using taxes to invest in our future: President Eisenhower had the foresight to invest in our infrastructure in ways that few people understood. Several presidents and Congresses have made  — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00826: Topic: Budget and taxes — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00827: Undated; captured 2026-05-11 — "Taxes and the IRS: The tax code and the way funds are directed need to be simplified, and at the same time, the IRS needs to function primarily as a service. That means making well-trained — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.
- em-craig-musser-00804: Undated; captured 2026-05-11 — "I have worked a full-time job since starting my chemical engineering degree. I have experience working in various industries like housing materials, mining, and manufacturing operations. I — Usable only as an observed public social/online signal, not as a confirmed policy position or belief.

## Representative Rejected Rows
- em-craig-musser-00521: [FEC - Tracey Mann Candidate Page](https://www.fec.gov/data/candidate/H0KS01123/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00291: KU Faculty Page: [business.ku.edu/people/colin-mcroberts](https://business.ku.edu/people/colin-mcroberts) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00622: [business.ku.edu/people/colin-mcroberts](https://business.ku.edu/people/colin-mcroberts) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00374: [Salina Post - "Reinhold, 1st Congressional District candidate to speak in Salina"](https://salinapost.com/posts/25bbb2eb-ae15-4419-8096-972bb919a48a) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00455: OpenSecrets Profile: [opensecrets.org/members-of-congress/tracey-mann/summary?cid=N00030743](https://www.opensecrets.org/members-of-congress/tracey-mann/summary?cid=N00030743) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00500: [Kansas Reflector - Lauren Reinhold Archives](https://kansasreflector.com/tag/lauren-reinhold/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-01141: [OpenSecrets - Tracey Mann](https://www.opensecrets.org/members-of-congress/tracey-mann/summary?cid=N00030743) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-01142: [Lauren Reinhold for Congress - Campaign Website](https://www.laurenforkansas.com) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00481: [KWCH - "Colin McRoberts files for 1st Congressional District seat" (Sept 17, 2025)](https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00290: Personal/Consulting Website: [colin-mcroberts.com](https://www.colin-mcroberts.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00293: Take Back Congress Profile: [take-bac-congress.us/team/colin-mcroberts](https://www.take-bac-congress.us/team/colin-mcroberts) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00478: [Colin McRoberts - Ballotpedia](https://ballotpedia.org/Colin_McRoberts) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00484: [Take Back Congress - Colin McRoberts Profile](https://www.take-bac-congress.us/team/colin-mcroberts) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00487: [Vasher McRoberts LLC](https://www.colin-mcroberts.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00488: [Aeon Magazine - Colin McRoberts Author Page](https://aeon.co/users/colin-mcroberts) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00491: [State Bar of Texas - Kenneth Colin McRoberts](https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=281096) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00492: [Rate My Professors - Colin McRoberts](https://www.ratemyprofessors.com/professor/2506562) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00520: [OpenSecrets - Tracey Mann](https://www.opensecrets.org/members-of-congress/tracey-mann/summary?cid=N00030743) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00621: [colin-mcroberts.com](https://www.colin-mcroberts.com/) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.
- em-craig-musser-00624: [take-bac-congress.us/team/colin-mcroberts](https://www.take-bac-congress.us/team/colin-mcroberts) — Rejected as likely cross-candidate contamination from a broad raw report; the claim names another project candidate and not the assigned candidate.

## Builder Decisions
- Deduplication key used normalized claim text, falling back to evidence type/source/summary when claim text was too short.
- Primary sources outrank secondary sources, which outrank social sources, which outrank internal-memory rows.
- Social rows are preserved as use-with-caveat when issue-relevant; the downstream social-footprint-analyst must classify signal strength before publication.
- Internal-memory rows without a public URL are preserved as background-only rather than used as standalone public claims.
- Non-substantive source scaffolding and generated metadata are retained with useDecision=reject so the rejection is auditable.
