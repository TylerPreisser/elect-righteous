# Sleuth Pass - Kris Kobach

**Date**: 2026-05-19
**Agent**: codex (internet-investigator / online-sleuth fallback)
**Phase / Stage**: Phase 2, all-candidate deepening, Stage 2.a
**Candidate slug**: kris-kobach
**Position**: Kansas Attorney General - incumbent, Republican
**Election**: kansas-ag-2026

---

## Official Status

- **Current office**: Kansas Attorney General. The official Kansas AG biography says Kobach was elected Kansas's 45th attorney general in November 2022 and began his first four-year term in 2023.
- **2026 office on ballot**: Kansas Secretary of State candidate-information page lists Attorney General among offices to be elected in 2026 and gives the statewide filing deadline as 12:00 p.m. Monday, June 1, 2026.
- **Candidate filing / race status**: Kobach's campaign site says he "officially filed for re-election" on January 8, 2026. The Kansas Public Disclosure Commission statewide 2026 election-cycle page lists "Kobach, Kris" under **Attorney General Candidates** and links his appointment-of-treasurer and January 2026 finance report.
- **Primary election**: The Kansas SOS page says Democratic and Republican candidates run in the primary; statewide primary filing deadline is June 1, 2026.
- **Direct SOS candidate-list limitation**: The SOS "upcoming candidate" list endpoint returned a JavaScript/CloudFront anti-bot block in this environment. I could not independently view the live SOS filed-candidates list. I therefore used the accessible SOS candidate-information page, KPDC candidate finance listing, and candidate-controlled filing statement as the status chain.

Primary anchors:
- Kansas SOS candidate information: https://www.sos.ks.gov/elections/candidate-information.html
- KPDC statewide 2026 filings page: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm
- Campaign filing statement: https://kriskobach.com/kobach-campaign-announces-record-breaking-cash-on-hand-and-official-re-election-filing/
- Official AG biography: https://www.ag.ks.gov/about-us/attorney-general-kris-w-kobach

---

## Context From Existing Local Files

Existing local files already captured:

- Public web/social footprint from a logged-out May 11, 2026 capture: campaign site, official AG site, X mirrors, official AG X mirror, Facebook presence but login-walled, LinkedIn office page, YouTube campaign channel, and absent/unconfirmed TikTok/Bluesky/Truth Social/Gab/Gettr/Substack/Reddit candidate accounts.
- Current topic mix in the social harvest: immigration and noncitizen voting; law enforcement/fentanyl/naloxone/K-9 grants; federal overreach and constitutional litigation; judicial selection; consumer protection/AI/fraud; and a smaller rural-economy/property-rights signal.
- Campaign finance cover totals from the January 2026 KPDC report: $337,330.24 raised in 2025, $52,558.52 spent, $502,626.00 cash on hand at close of period.
- Potential stale data conflicts in compiled UI context: the existing v2 TypeScript object points `campaignWebsite` to Tracey Mann's House page, and local `site-profile.md` says "candidate for governor in 2026" even though campaign, KPDC, and SOS-accessible sources point to Attorney General re-election.

---

## Social / Online Presence Leads

| Platform / source | Status | Notes |
|---|---|---|
| Campaign site | Found | `kriskobach.com`; active AG re-election branding, May 2026 sheriff endorsement post, Jan. 2026 filing/cash-on-hand post, WinRed/store/volunteer/email links. |
| Official AG site | Found | `ag.ks.gov`; official biography, news releases, special-litigation pages, consumer-protection and victim-services resources. |
| X personal/campaign | Found / direct feed limited | `@KrisKobach1787`; direct X access is script/login-limited, but public indexed mirrors showed recent posts and metrics in the existing harvest. |
| X official office | Found / direct feed limited | `@KSAGOffice`; Kansas.gov and AG site link official social accounts; indexed mirror showed office updates. |
| Facebook campaign | Found / login-walled | Campaign and BallotReady identify `facebook.com/KrisKobach1787`; logged-out post inventory not reliable. |
| Facebook official office | Found / login-walled | `facebook.com/OAGKansas`; linked by official channels; logged-out post inventory not reliable. |
| LinkedIn | Found | Kansas Attorney General company page; office-controlled, not campaign-controlled. |
| YouTube | Found / limited | Campaign site links a YouTube channel and embeds older videos; official AG site also links YouTube. |
| Instagram | Found / limited | BallotReady listed Instagram, but current logged-out inventory not reliable. |
| TikTok / Bluesky / Truth Social / Gab / Gettr / Substack / Reddit | Not found | No clear candidate-controlled account surfaced in public search or existing harvest. |

Issue-mapping notes:
- X/current public mirrors map mainly to immigration/election integrity, public safety/fentanyl, judicial selection, and federal litigation.
- Official AG news pages map to consumer protection, child online safety, crime-victim services, antitrust, elder/fraud protection, and office administration.
- Campaign site and sheriff endorsement map to public safety, law enforcement, and re-election positioning.
- Religious-liberty and Second Amendment signals are present as litigation records, not as repeated current social themes.

---

## Primary-Source Leads By Issue

### Public Safety / Fentanyl / Law Enforcement

- May 14, 2026 campaign release lists 51 sheriff endorsements and says Kobach is running for re-election. The same release attributes crime-rate and fentanyl/criminal-penalty claims to the campaign and endorsing sheriffs.
- Campaign January 8, 2026 filing release says Kobach's tenure included "cracking down on fentanyl trafficking and reducing fentanyl overdoses."
- Official AG site and social harvest show naloxone distribution boxes and K-9 grants as recurring office signals.

### Immigration / Election Integrity / Noncitizen Voting

- Official AG biography highlights DACA litigation, Trump election-integrity commission service, and a lawsuit over Obamacare eligibility for DACA recipients.
- March 30, 2026 AG release says Kobach led a 25-state amicus brief to the U.S. Supreme Court in cases involving Arizona proof-of-citizenship and noncitizen-voting safeguards.
- April 22, 2026 AG release says Kansas joined other states to defend a presidential election-integrity executive order.
- Historical record item: *Fish v. Kobach* struck down Kansas's proof-of-citizenship registration requirement; the federal district court opinion and Tenth Circuit opinion are primary anchors.

### Federal-State Litigation / Constitutional Litigation

- AG Special Litigation Unit page says Kobach created the unit for lawsuits and regulatory comments involving constitutional issues and policy priorities.
- The same page lists high-profile cases involving Title IX, DACA/Obamacare, and ATF/Second Amendment.
- Official AG biography says Kobach led and personally argued challenges to Biden administration actions.

### Consumer Protection / Antitrust / Technology

- April 15, 2026 AG release says Kobach and a coalition won a Live Nation/Ticketmaster monopolization jury verdict.
- April 14, 2026 AG release says the office distributed a PSA warning about AI chatbot risks to children and teenagers.
- March 20, 2026 AG release says Kobach demanded Apple implement safeguards against CSAM distribution on iCloud.
- March 26, 2026 AG release warns consumers about fake traffic-violation scams.
- May 12, 2026 AG release says the office secured judgments and bans against out-of-state contractors targeting Kansas consumers.

### Marriage / Family / Gender-Marker Policy

- March 11, 2024 AG release says Kobach prevailed in a driver's-license sex-marker case, with the court requiring licenses to list sex at birth during the temporary-injunction phase.
- This belongs under family/gender policy because it is a documented legal action, not inferred belief from party or faith affiliation.

### Religious Liberty

- Campaign biography says Kobach represented 36 Air Force and Air National Guard members denied religious exemptions to the Biden vaccine mandate.
- Title IX special-litigation page says the rule violated First Amendment rights of teachers and school employees with sincerely held religious beliefs.
- Campaign 2022 "religious freedom" post remains live but is older campaign archive material.

### Guns / Second Amendment

- AG ATF special-litigation page says Kobach led a coalition challenging a Biden-Harris administration ATF rule; the page quotes his Second Amendment rationale.
- This is a direct action-evidence item.

### Abortion / Pro-Life / Student Speech

- March 9/12, 2026 AG release says Kobach led a 14-state coalition in support of a high-school student's First Amendment claim involving flyers for a pro-life student group.
- Existing UI/local profile references older abortion positions, but the current official primary anchor most visible in this pass is the student-speech amicus, not a broad AG abortion-policy filing.

### Judicial Selection

- Kansas Legislature testimony PDF and AG/campaign statements make Kobach one of the visible supporters of the 2026 constitutional amendment to elect Kansas Supreme Court justices.
- Existing local raw-dump contained detailed ballot-measure research. Use care: some of that local file was issue advocacy in tone; v2 should state Kobach's position and action without adopting either campaign's framing.

### Campaign Finance / Donor Signals

- KPDC January 2026 report: beginning cash $217,854.28; contributions/receipts $337,330.24; expenditures $52,558.52; ending cash $502,626.00; in-kind and other transactions $0.00.
- Campaign release says the cash balance contained no personal contribution or self-loan by Kobach.
- KPDC contribution schedules are public but include contributor names and a statutory noncommercial-use warning. I did not reproduce donor names here; later compilers can cite totals and, if necessary, review contributors for issue-relevant conflicts.
- FEC MUR #7636 remains a record item from Kobach's 2020 U.S. Senate campaign: FEC accepted conciliation agreements involving We Build the Wall, Kobach, and Kobach for Senate over a below-market email-list rental treated as a corporate contribution/in-kind reporting issue.

---

## Gaps

- Could not access live SOS filed-candidates list due CloudFront/JavaScript block. The accessible chain strongly supports AG re-election status, but the direct list should be checked manually by the operator or a browser worker.
- Could not access direct X, Facebook, Instagram, or YouTube post inventories without login/script support; used prior logged-out harvest and public mirrors only.
- No reliable current candidate-controlled Facebook comment inventory found.
- No official campaign issue page beyond biography, filing release, videos, endorsements, and older posts surfaced on the campaign site.
- Campaign finance donor schedule was available as PDF but was not mined for individual donor names because no issue-relevant conflict was apparent and the KPDC page includes a statutory noncommercial-use warning.
- No current candidate-controlled statement found on Medicaid expansion, rural hospitals, housing, water/Ogallala, broadband, child care, foster care, adoption, or veterans services in the accessible current set.

---

## Could Not Confirm

- Whether the SOS live filed-candidates list currently marks Kobach as filed, because the endpoint was inaccessible in this environment.
- Any current candidate-controlled account on TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, or Reddit.
- Current Facebook/Instagram/YouTube engagement counts.
- Whether older campaign claims about crime rates, fentanyl overdoses, and "lowest crime rate in 56 years" are independently confirmed by current KBI data. Treat those as campaign/endorser claims unless verified separately.
- Any current church membership or regular worship attendance beyond older public reporting tying Kobach to Morning Star Church in Lawrence. Do not infer current faith practice from that lead.
