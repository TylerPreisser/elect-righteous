# Raw Dump v2 - Kris Kobach

**Date**: 2026-05-19
**Agent**: codex (deep-scraper equivalent)
**Phase / Stage**: Phase 2, all-candidate deepening, Stage 2.b
**Candidate slug**: kris-kobach
**Position**: Kansas Attorney General - incumbent (R)
**Election**: kansas-ag-2026

---

## Brief

This is an additive v2 scrape focused on primary-source anchors for Kris Kobach's 2026 Kansas attorney general re-election profile. Existing local files already contain a broad social harvest and older raw dump. This pass refreshes official status, finance, current office actions, litigation anchors, social limitations, and record items for later issue-card compilation.

Important correction for later compilers: the existing UI v2 object contains stale/mismatched fields, including `campaignWebsite: https://mann.house.gov/about`, and local `site-profile.md` says Kobach is a Republican candidate for governor in 2026. Current accessible sources point to **Kansas Attorney General re-election in 2026**, not governor.

---

## Sweep Coverage

| Source | Tier | Reached | Notes |
|---|---|---|---|
| Kansas SOS candidate-information page | primary | yes | Confirms AG is an office elected in 2026; filing deadlines; statewide filing rules. |
| Kansas SOS live candidate list | primary | blocked | `elections_upcoming_candidate.aspx` returned JS/CloudFront anti-bot block. |
| KPDC statewide 2026 finance page | primary | yes | Lists Kobach under Attorney General Candidates and links reports. |
| KPDC January 2026 report PDF | primary | yes | Cover totals extracted with `pdftotext`. |
| Campaign site | primary/candidate-controlled | yes | Filing statement, biography, sheriff endorsements, older videos/posts. |
| Official AG site | primary/government | yes | Biography, special litigation pages, news releases. |
| FEC MUR #7636 | primary/federal enforcement | yes | Record item from 2020 U.S. Senate campaign. |
| Federal court *Fish v. Kobach* opinion | primary/judicial | yes | Historical election-law record. |
| Existing social-harvest.md | local prior scrape | yes | Used for public social/online signal mapping. |
| X/Facebook/Instagram/YouTube direct feeds | social | limited | Direct logged-out capture not reliable; prior indexed mirror harvest preserved. |

---

## Section 1 - Official Status and Race Scope

### 1.1 Kansas SOS candidate rules and offices

**URL**: https://www.sos.ks.gov/elections/candidate-information.html  
**Tier**: primary  
**Publisher**: Kansas Secretary of State  
**Accessed**: 2026-05-19  
**Date on page**: current election-information page

Relevant source facts:
- State, national, legislative, and judicial candidates file with the Secretary of State.
- A candidate is not considered filed until the petition or declaration and fee is received.
- The 2026 primary filing deadline is 12:00 p.m. Monday, June 1, 2026.
- Offices to be elected or retained in 2026 include Attorney General.
- Attorney General filing fee total listed as $2,367.

Issue mapping:
- Official status / ballot context.

Limit:
- The direct upcoming-candidate list linked from the SOS site could not be fetched because it returned a JavaScript/anti-bot block in this environment.

### 1.2 KPDC statewide 2026 election-cycle page

**URL**: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Accessed**: 2026-05-19  

Relevant source facts:
- The page heading is "Kansas State Wide Office - 2026 Election Cycle."
- Under "ATTORNEY GENERAL CANDIDATES," the page lists "Kobach, Kris" and links appointment-of-treasurer and finance reports.
- The same section lists Chris Mann as another attorney general candidate.

Issue mapping:
- Official status and campaign finance.

### 1.3 Campaign filing statement

**URL**: https://kriskobach.com/kobach-campaign-announces-record-breaking-cash-on-hand-and-official-re-election-filing/  
**Tier**: primary, candidate-controlled  
**Publisher**: Kris Kobach for Attorney General  
**Published**: 2026-01-08  
**Accessed**: 2026-05-19  

Relevant source facts:
- Campaign says Kansas Attorney General Kris Kobach officially filed for re-election on January 8, 2026.
- Campaign reports $502,626 cash on hand as of January 1.
- Campaign says all of the cash-on-hand total was contributed by others and not from Kobach personal money.
- Campaign frames his tenure around constitutional rights, crime rates, immigration enforcement, and consumer protection.

Issue mapping:
- Official status, campaign finance, public safety, immigration, consumer protection.

### 1.4 Campaign sheriff endorsement statement

**URL**: https://kriskobach.com/51-kansas-sheriffs-endorse-kobach-for-attorney-general/  
**Tier**: primary, candidate-controlled  
**Publisher**: Kris Kobach for Attorney General  
**Published**: 2026-05-14, release dateline May 11, 2026  
**Accessed**: 2026-05-19  

Relevant source facts:
- Campaign says 51 Kansas sheriffs endorsed Kobach's attorney-general re-election.
- The list includes Ellis County Sheriff Scott Braun.
- The release attributes public-safety claims to endorsing sheriffs and to Kobach, including cooperation with sheriffs, KBI enforcement, fentanyl, organized retail crime, and crime-rate claims.

Issue mapping:
- Public safety / law enforcement / fentanyl.

Verification note:
- Treat "lowest crime rate in 56 years" as a campaign claim unless separately confirmed from KBI statistics.

---

## Section 2 - Candidate Biography / Current Office

### 2.1 Official AG biography

**URL**: https://www.ag.ks.gov/about-us/attorney-general-kris-w-kobach  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Accessed**: 2026-05-19  

Relevant source facts:
- Kobach was raised in Topeka and graduated from Washburn Rural High School.
- Education: Harvard undergraduate degree, Oxford Ph.D., Yale J.D.
- Worked as a Tenth Circuit clerk, UMKC constitutional-law professor, White House Fellow, and DOJ counsel to Attorney General John Ashcroft.
- Served as Kansas Secretary of State from 2011 to 2019.
- President Trump tapped him to lead the Presidential Commission on Election Integrity in 2017.
- Elected Kansas's 45th Attorney General in November 2022.
- Official bio says he led and personally argued Biden-administration challenges involving Title IX and Obamacare eligibility for DACA recipients.
- Elected 2024 chair of the Republican Attorneys General Association.
- Lives near Lecompton with his wife, Heather, and five children.

Issue mapping:
- Biography, election integrity, federal-state litigation, gender/Title IX policy, immigration/health benefits, party/legal network.

### 2.2 Campaign biography

**URL**: https://kriskobach.com/meet-kris/  
**Tier**: primary, candidate-controlled  
**Publisher**: Kris Kobach for Attorney General  
**Accessed**: 2026-05-19  

Relevant source facts:
- Campaign biography substantially overlaps with official bio.
- It adds candidate-framed claims about DACA litigation, OSHA vaccine-mandate litigation, DHS/ICE litigation, and Air Force religious-exemption litigation.
- It says Kobach's first four-year term as attorney general began in 2023.

Issue mapping:
- Biography, immigration, religious liberty, federal litigation.

---

## Section 3 - Campaign Finance

### 3.1 KPDC January 2026 receipts/expenditures report

**URL**: https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02KK_202601.pdf  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Report filed**: 2026-01-09 12:53:38 PM  
**Report period**: 2025-01-01 through 2025-12-31  
**Accessed**: 2026-05-19  

Cover totals:
- Cash on hand at beginning of period: $217,854.28
- Total contributions and other receipts: $337,330.24
- Cash available this period: $555,184.52
- Total expenditures and other disbursements: $52,558.52
- Cash on hand at close of period: $502,626.00
- In-kind contributions: $0.00
- Other transactions: $0.00

Issue mapping:
- Campaign finance / viability / funding.

Donor note:
- The contribution schedule is public, but the KPDC page carries a statutory warning against commercial use of contributor names. This pass preserves totals and filing links rather than reproducing donor-name lists.

### 3.2 Appointment of treasurer

**URL**: https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW02KK_AT.pdf  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Executed**: 2023-06-20  
**Accessed**: 2026-05-19  

Relevant source facts:
- Candidate name: Kris W. Kobach.
- Office sought: Attorney General.
- Treasurer: Laura Francis.
- Candidate email listed as `kris@kriskobach.com`.

Issue mapping:
- Official status / finance administration.

### 3.3 FEC MUR #7636 - We Build the Wall / Kobach for Senate

**URL**: https://www.fec.gov/data/legal/matter-under-review/7636/  
**Tier**: primary  
**Publisher**: Federal Election Commission  
**Disposition date visible**: 2022-12-01 conciliation and settlement documents; 2022-12-22 civil-penalty/disgorgement documents  
**Accessed**: 2026-05-19  

Relevant source facts:
- Respondents included We Build the Wall, Kris Kobach, Kobach for Senate, and the campaign treasurer.
- FEC summary says the Commission found reason to believe We Build the Wall made a corporate contribution by renting an email list below market value to Kobach/Kobach for Senate, and that Kobach/Kobach for Senate knowingly accepted it.
- Disposition table lists pre-probable-cause conciliation involving Kobach, Kobach for Senate, We Build the Wall, and the treasurer.

Issue mapping:
- Record item / campaign-finance compliance.

Narrative caution:
- This is a past federal Senate-campaign record, not a current AG re-election finance record.

---

## Section 4 - Public Safety, Fentanyl, Victim Services

### 4.1 Campaign public-safety release

**URL**: https://kriskobach.com/51-kansas-sheriffs-endorse-kobach-for-attorney-general/  
**Tier**: primary, candidate-controlled  
**Published**: 2026-05-14  
**Accessed**: 2026-05-19  

Relevant source facts:
- 51 sheriffs endorsed Kobach, including Ellis County Sheriff Scott Braun.
- Release centers law enforcement, KBI responsiveness, fentanyl, organized retail crime, and prosecutorial posture.

Issue mapping:
- Public safety and law enforcement.

### 4.2 Current AG release list

**URL**: https://www.ag.ks.gov/media-center/news-releases  
**Tier**: primary, government  
**Accessed**: 2026-05-19  

Relevant current items visible on the release index:
- May 11, 2026: State Child Death Review Board promotes infant safe sleep.
- April 16, 2026: AG office recognizes honorees for assistance to crime victims.
- April 1, 2026: AG office obtains prison sentence for abuse/neglect of elderly mother.
- March 18, 2026: victim assistance grant opportunities open.

Issue mapping:
- Victim services, elder protection, child safety.

---

## Section 5 - Consumer Protection, Antitrust, Technology

### 5.1 Live Nation / Ticketmaster monopolization case

**URL**: https://www.ag.ks.gov/Home/Components/News/News/306/1292  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published**: 2026-04-15  
**Accessed**: 2026-05-19  

Relevant source facts:
- AG release says Kobach and 33 other attorneys general won a lawsuit after a jury found Live Nation/Ticketmaster violated federal and state antitrust laws.
- The release says Kobach and the coalition rejected a DOJ/eight-state settlement and continued litigation.
- It says remedies and penalties would proceed to a separate bench trial.

Issue mapping:
- Consumer protection / antitrust / cost of living.

### 5.2 AI chatbot risks PSA

**URL**: https://www.ag.ks.gov/Home/Components/News/News/304/  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published**: 2026-04-14  
**Accessed**: 2026-05-19  

Relevant source facts:
- AG office announced a Digital Citizens Alliance PSA featuring Kobach.
- Release says the PSA warns parents and families about AI chatbot risks, particularly to children and teenagers.
- Kobach said he is committed to holding AI companies legally responsible and keeping families informed.

Issue mapping:
- Child safety / technology / consumer protection.

### 5.3 Apple / CSAM letter

**URL**: https://www.ag.ks.gov/Home/Components/News/News/294/  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published**: 2026-03-20  
**Accessed**: 2026-05-19  

Relevant source facts:
- AG release says Kobach demanded Apple implement safeguards related to CSAM distribution on iCloud.
- Release says letter required Apple to respond by April 17, 2026.
- Associated PDF: https://www.ag.ks.gov/home/showpublisheddocument/25447

Issue mapping:
- Child safety / technology accountability / consumer protection.

### 5.4 Fake traffic violation scam alert

**URL**: https://www.ag.ks.gov/Home/Components/News/News/296/  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published**: 2026-03-26  
**Accessed**: 2026-05-19  

Relevant source facts:
- AG release warns Kansans about fraudulent traffic-violation notices sent by text/email.
- Kobach warns courts do not serve legal documents by text or email.

Issue mapping:
- Consumer protection / fraud prevention.

### 5.5 Out-of-state contractor judgments

**URL**: https://www.ag.ks.gov/Home/Components/News/News/316/1292  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published**: 2026-05-12  
**Accessed**: 2026-05-19  

Relevant source facts:
- AG release says the office secured judgments and permanent bans against M.GC Construction, LLC and operators.
- Release frames the case as protection against financial exploitation of seniors and Kansas consumers.

Issue mapping:
- Consumer protection / elder protection.

---

## Section 6 - Immigration, Public Benefits, Election Integrity

### 6.1 DACA / Obamacare lawsuit

**URL**: https://www.ag.ks.gov/divisions/special-litigation-unit/daca-obamacare  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published on page**: 2024-08-08  
**Accessed**: 2026-05-19  

Relevant source facts:
- Page says Kobach filed a federal lawsuit to stop the Biden-Harris administration from giving Obamacare to DACA recipients.
- Page says he was joined by attorneys general from other states.
- Page says 4,350 DACA recipients in Kansas would be included in the federal rule's effect.

Issue mapping:
- Immigration / public benefits / federal-state litigation.

### 6.2 Noncitizen-voting amicus brief

**URL**: https://www.ag.ks.gov/Home/Components/News/News/298/  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published**: 2026-03-30  
**Accessed**: 2026-05-19  

Relevant source facts:
- AG release says Kobach led 25 states in an amicus brief urging the U.S. Supreme Court to take and reverse Ninth Circuit decisions involving Arizona election laws.
- The release says the Arizona laws require proof of citizenship for full voter registration and restrict federal-only ballots where proof is not provided.
- The release says Kobach's office is prosecuting multiple noncitizens who voted in Kansas elections.
- Associated brief: https://www.ag.ks.gov/home/showpublisheddocument/25449/639104756883800000

Issue mapping:
- Election integrity / immigration / noncitizen voting.

### 6.3 Executive order on election integrity

**URL**: https://www.ag.ks.gov/Home/Components/News/News/310/  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published**: 2026-04-22  
**Accessed**: 2026-05-19  

Relevant source facts:
- AG release says Kansas joined 10 states in a motion to intervene to defend a presidential executive order related to citizenship verification and voter-registration list verification.
- Release frames the order as preventing noncitizens from voting.

Issue mapping:
- Election integrity / citizenship verification.

### 6.4 Fish v. Kobach historical record

**URL**: https://ecf.ksd.uscourts.gov/cgi-bin/show_public_doc?2016cv2105-542  
**Tier**: primary, federal district court  
**Court / date**: U.S. District Court for the District of Kansas, 2018 opinion  
**Accessed**: 2026-05-19  

Additional appellate anchor:
- Tenth Circuit opinion: https://www.ca10.uscourts.gov/sites/ca10/files/opinions/010110366503.pdf

Relevant source facts:
- Federal courts struck down Kansas's documentary proof-of-citizenship voter-registration requirement advanced during Kobach's secretary-of-state tenure.
- This is a major historical record item when describing Kobach's election-law posture.

Issue mapping:
- Election law / record item / gap or context.

Narrative caution:
- Use court findings directly; do not rely on partisan summaries.

---

## Section 7 - Federal-State Litigation / Constitutional Litigation

### 7.1 Special Litigation Unit overview

**URL**: https://www.ag.ks.gov/divisions/special-litigation-unit  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Accessed**: 2026-05-19  

Relevant source facts:
- Page says Kobach created the division.
- Page says the unit handles constitutional issues and policy priorities.
- High-profile examples include suing the federal government over regulations, defending Kansas laws, and forcing governments/agencies to comply with law.
- Page highlights Title IX, DACA/Obamacare, and ATF/Second Amendment cases.

Issue mapping:
- Federal-state litigation / attorney-general office philosophy.

### 7.2 Title IX lawsuit

**URL**: https://www.ag.ks.gov/divisions/special-litigation-unit/title-ix  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published on page**: 2024-05-14  
**Accessed**: 2026-05-19  

Relevant source facts:
- Page says Kansas sued the Biden administration over a Title IX rule that replaces "sex" with "gender identity."
- Page quotes Kobach's view that the Department of Education lacked authority.
- Page says the rule raised concerns about girls' facilities, due process, and First Amendment/religious-belief conflicts for teachers and school employees.
- Page says the case is under appeal in the 10th Circuit.

Issue mapping:
- Marriage/family/gender policy, religious liberty, education, federal-state litigation.

### 7.3 ATF / Second Amendment lawsuit

**URL**: https://www.ag.ks.gov/divisions/special-litigation-unit/atf  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published on page**: 2024-05-06  
**Accessed**: 2026-05-19  

Relevant source facts:
- Page says Kobach led a coalition challenging an ATF rule alleged to violate the Second Amendment.
- Page says the coalition argued the rule did not clearly define profit and could treat individual sellers as firearms dealers.

Issue mapping:
- Guns / Second Amendment / federal-state litigation.

---

## Section 8 - Marriage / Family / Gender-Marker Policy

### 8.1 Driver's-license sex-marker case

**URL**: https://www.ag.ks.gov/Home/Components/News/News/35/1292?arch=1&npage=3  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published**: 2024-03-11  
**Accessed**: 2026-05-19  

Relevant source facts:
- AG release says Shawnee County District Court issued a temporary injunction in *State of Kansas ex rel. Kris Kobach v. David Harper, et al.*
- Release says the court held Kansas driver's licenses are required to list sex at birth.
- Release says Kobach served as lead counsel for the state in the January 2024 trial.
- Release says the lawsuit sought to compel Kelly administration officials to comply with SB 180/K.S.A. 77-207.

Issue mapping:
- Marriage/family/gender policy / state-law enforcement.

Secondary context:
- AP, KCUR, PBS, ACLU, and Kansas Reflector covered the policy effects and litigation posture. Use only for affected-party context, not as a substitute for the AG release or court order.

---

## Section 9 - Abortion / Pro-Life Student Speech / Religious Liberty

### 9.1 Pro-life student First Amendment amicus

**URL**: https://www.ag.ks.gov/media-center/news-releases  
**Tier**: primary, government  
**Publisher**: Kansas Attorney General  
**Published on index**: 2026-03-09/2026-03-12 item visible  
**Accessed**: 2026-05-19  

Relevant source facts:
- News-release index says Kobach led fourteen states urging the U.S. Supreme Court to vindicate rights of a high-school student forbidden from hanging flyers for a pro-life student group.
- Direct release URL did not surface through clicked links in this pass, but the indexed title and summary were visible on the official AG release page.

Issue mapping:
- Abortion/pro-life, student speech, religious liberty/First Amendment.

Limit:
- Later compiler should click/open the exact release URL from a browser session if source ID needs a direct page rather than release-index anchor.

### 9.2 Air Force religious-exemption lawsuit

**URL**: https://kriskobach.com/meet-kris/  
**Tier**: primary, candidate-controlled  
**Accessed**: 2026-05-19  

Relevant source facts:
- Campaign biography says Kobach filed suit in federal court to stop the Air Force from expelling pilots at McConnell Air Force Base for exercising religious beliefs.

Related older campaign archive:
- https://kriskobach.com/kobach-defends-religious-freedom-in-federal-court/

Issue mapping:
- Religious liberty / military vaccine mandate litigation.

---

## Section 10 - Judicial Selection

### 10.1 Kansas Legislature testimony

**URL**: https://www.kslegislature.gov/li/b2025_26/committees/ctte_s_fed_st_1/documents/testimony/20250225_03.pdf  
**Tier**: primary  
**Publisher**: Kansas Legislature / testimony submitted by Attorney General Kris Kobach  
**Date**: 2025-02-25  
**Accessed**: 2026-05-19  

Relevant source facts:
- Kobach submitted testimony supporting changes to Kansas Supreme Court selection.
- Existing local raw dump includes his public statements supporting direct election of Kansas Supreme Court justices.

Issue mapping:
- Judicial selection / constitutional amendment / courts.

Narrative caution:
- Existing local ballot-measure writeup contains advocacy language from both sides. V2 profile should only state Kobach's role and position, and separate his evidence from opponent arguments.

---

## Section 11 - Social and Online Signals

### 11.1 Existing May 11, 2026 social harvest

**Local file**: memory/candidates/kris-kobach/social-harvest.md  
**Tier**: local prior scrape using public web/social mirrors  
**Capture date**: 2026-05-11  

Key captured signals:
- Campaign site: active AG re-election brand, filing release, RAGA chair post, videos, WinRed/store/volunteer/email.
- Official AG site: naloxone access, Census/immigration lawsuit signal, consumer protection, open government, AG opinions, official social links.
- X mirror `@KrisKobach1787`: 26K followers; topics included immigration, noncitizen voting, in-state tuition, SNAP data, judicial selection, fentanyl/naloxone, federal overreach, property rights, tariffs, legal appointments.
- Official X mirror `@KSAGOffice`: topics included naloxone, in-state tuition, AI chatbots, court scams, consumer settlements, official observances.
- LinkedIn office page: 894 followers; low single-digit engagement on visible items.
- Facebook, Instagram, YouTube confirmed as present/limited but no reliable current engagement inventory.

Issue mapping:
- Immigration/election integrity, public safety, federal litigation, judicial selection, consumer protection/AI.

Methodological caveat:
- Mirrors are not a complete archive. Do not present mirror counts as comprehensive social-media analysis.

---

## Section 12 - Sources Checked With Thin Or No Findings

- TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, Reddit: no clear candidate-controlled accounts surfaced in local harvest or targeted search.
- Current Facebook/Instagram/YouTube: presence confirmed, but reliable current logged-out engagement/post inventory not visible.
- Current campaign issue page: no standalone issues page surfaced; campaign positioning is embedded in biography, filing statement, endorsement release, videos, and older posts.
- Church/faith: older reporting ties Kobach to Morning Star Church in Lawrence; no current official church-membership confirmation found in this pass.
- Medicaid expansion, rural hospitals, housing, water/Ogallala, broadband, child care, foster care, adoption, veterans services: no current candidate-controlled statement found in accessible current materials.

---

## Key Gaps / Blockers

1. **SOS filed-candidate list blocked**: direct official live candidate list was inaccessible. Accessible evidence still supports AG re-election status.
2. **Compiled UI conflict**: existing `ui/src/data/v2/kris-kobach.ts` has a wrong campaignWebsite URL and local `site-profile.md` says governor. Do not carry that forward.
3. **Social limitations**: direct platform post inventories are blocked or incomplete. Use only evidence captured in social-harvest.md and avoid claims about unseen likes/follows/comments.
4. **Crime-rate claim needs independent check**: campaign and sheriff release claim lowest crime rate in 56 years; this pass did not verify against KBI statistical publications.

---

## Issue Mapping Summary

| Issue area | Strongest evidence | Candidate-stated / action evidence |
|---|---|---|
| Official status | SOS candidate info, KPDC listing, campaign filing release | AG re-election in 2026; filed per campaign; KPDC AG candidate listing. |
| Public safety / fentanyl | Campaign sheriff endorsement, AG news, social harvest | Sheriff endorsements; K-9/naloxone/fentanyl emphasis. |
| Immigration / election integrity | AG bio, DACA/Obamacare page, noncitizen-voting amicus, executive-order defense, Fish court record | Led/participated in lawsuits and amicus briefs; historical proof-of-citizenship law struck down. |
| Federal litigation | Special Litigation Unit page, Title IX, ATF, DACA pages | Created/uses special litigation unit for constitutional/federal-policy cases. |
| Consumer protection / antitrust / tech | Live Nation release, AI PSA, Apple CSAM letter, scam alerts, contractor judgments | Multistate antitrust win; child/AI/CSAM warnings; fraud enforcement. |
| Gender policy / family | Driver's-license sex-marker release, Title IX page | Sued to enforce sex-at-birth state-document policy; challenged Title IX rule. |
| Religious liberty | Campaign bio Air Force case; Title IX page First Amendment note | Represented Air Force members denied religious exemptions; tied Title IX to religious-belief conflicts. |
| Guns / Second Amendment | ATF page | Led coalition challenging ATF rule. |
| Abortion / pro-life speech | AG release index on pro-life student flyer case | Led 14-state coalition on student First Amendment case. |
| Judicial selection | Kansas Legislature testimony; local ballot-measure research | Supports electing Kansas Supreme Court justices. |
| Campaign finance / compliance | KPDC report, FEC MUR #7636 | $502,626 cash on hand; past FEC conciliation from Senate campaign. |
