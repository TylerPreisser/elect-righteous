# Raw Dump v2 - Chris Mann

**Date**: 2026-05-19  
**Agent**: codex (deep-scraper equivalent)  
**Phase / Stage**: Phase 2, all-candidate deepening, Stage 2.b  
**Candidate slug**: chris-mann  
**Position**: Kansas Attorney General candidate, Democrat  
**Election**: kansas-ag-2026

---

## Brief

This is an additive v2 scrape focused on primary-source anchors for Chris Mann's 2026 Kansas attorney general profile. Existing local files already contain a broad social harvest, site profile, and older raw dump. This pass refreshes official status, campaign finance, current campaign statements, AG-office scope, social limitations, issue mapping, and blockers.

Important correction for later compilers: existing `site-profile.md` has stray source links from other candidates and some stale/copy-paste language. Use this v2 raw dump, `sleuth-pass.md`, and claim-anchored primary sources as the cleaner source set.

---

## Sweep Coverage

| Source | Tier | Reached | Notes |
|---|---|---|---|
| Kansas SOS candidate-information page | primary | yes | Confirms AG is a 2026 office, statewide candidates file with SOS, and primary filing deadline is June 1, 2026. |
| Kansas SOS live candidate list | primary | blocked | `elections_upcoming_candidate.aspx` returned CloudFront 403. |
| KPDC statewide 2026 finance page | primary | yes | Lists Mann under Attorney General Candidates and links AT plus 2024/2025/2026 reports. |
| KPDC amended appointment-of-treasurer PDF | primary | yes | PDF image reviewed; shows Chris D. Mann, office sought Attorney General, treasurer Jill Docking. |
| KPDC January 2026 report PDF | primary | yes | Cover totals extracted with `pdftotext`; Schedule A donor list available but not reproduced. |
| Miami County unofficial 2026 candidate list | primary/county, unofficial | yes | Supplemental county list shows Chris Mann under Kansas Attorney General as of May 18, 2026. |
| Campaign site | primary/candidate-controlled | yes | Homepage, Meet Chris, News, RSS, donation/social links. |
| DAGA endorsement page | organizational / secondary | yes | May 6, 2026 endorsement and candidate quote; not candidate-controlled, but includes candidate statement. |
| WIBW / KWCH launch coverage | secondary | yes | July 30, 2025 launch coverage with campaign statement quotes. |
| Liberal First interview | secondary | yes | August 26, 2025 extended issue interview, especially rural law enforcement and victim services. |
| Kansas SOS 2022 official results | primary | yes | Official 2022 AG vote totals. |
| Kansas Legislature 2017 testimony | primary | yes | Christopher Mann and LeAnn Briggs testimony for MADD opposing SB123. |
| Kansas AG office divisions/about pages | primary/government | yes | Used only to define office scope and responsibilities. |
| Direct X/Facebook/Instagram feeds | social | limited | Existing local harvest remains the best public/logged-out inventory. |

---

## Section 1 - Official Status and Race Scope

### 1.1 Kansas SOS candidate rules and offices

**URL**: https://www.sos.ks.gov/elections/candidate-information.html  
**Tier**: primary  
**Publisher**: Kansas Secretary of State  
**Accessed**: 2026-05-19

Relevant source facts:
- Democratic and Republican candidates run in the primary to secure party nomination.
- Candidates for national, state, legislative, and judicial offices must file candidacy with the Secretary of State.
- A candidate is not considered filed until petition or declaration and fee is received by the Secretary of State.
- 2026 primary filing deadline is 12:00 p.m. Monday, June 1, 2026.
- Offices to be elected or retained in 2026 include Attorney General.
- Attorney General filing fee total listed as $2,367.

Issue mapping:
- Official status / ballot context.

Limit:
- The direct upcoming-candidate list linked from this SOS page returned a CloudFront 403 block in this environment.

### 1.2 KPDC statewide 2026 election-cycle page

**URL**: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Accessed**: 2026-05-19  
**Page last updated**: 2026-01-22

Relevant source facts:
- The page heading is "Kansas State Wide Office - 2026 Election Cycle."
- Under "ATTORNEY GENERAL CANDIDATES," the page lists "Mann, Chris."
- The same row links the amended appointment-of-treasurer form and 202401, 202501, and 202601 reports.
- The same section lists "Kobach, Kris."
- The page includes a statutory warning against copying contributor names for commercial use.

Issue mapping:
- Official status, campaign finance, race scope.

### 1.3 KPDC amended appointment of treasurer

**URL**: https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW02CM_amendAT.pdf  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Executed**: 2025-07-24 7:38:41 PM  
**Accessed**: 2026-05-19

Relevant source facts:
- Candidate name: Chris D. Mann.
- Candidate address: PO Box 4005, Overland Park, KS 66204.
- Candidate business phone: (785) 764-5960.
- Candidate email: info@chrismannforkansas.com.
- Office sought: Attorney General.
- Treasurer date appointed: 2025-07-24.
- Treasurer name: Jill Docking.
- Treasurer email: compliance@chrismannforkansas.com.
- The document is marked as an amended statement.

Issue mapping:
- Official status / campaign administration.

### 1.4 Miami County unofficial candidate list

**URL**: https://www.copsfortots.com/DocumentCenter/View/14387/26PR-Unofficial-Candidate-List-4-24?bidId=  
**Tier**: primary/county, unofficial  
**Publisher**: Miami County, Kansas document text  
**Updated**: 2026-05-18 12:00 p.m.  
**Accessed**: 2026-05-19

Relevant source facts:
- The PDF title text says "MIAMI COUNTY, KANSAS ** UNOFFICIAL CANDIDATE LIST FOR PRIMARY 2026 **."
- Under state offices, it lists "Kansas Attorney General Chris Mann Democratic Lawrence KS" and "Kris Kobach Republican Lecompton KS."

Issue mapping:
- Supplemental ballot/context check.

Verification note:
- The hosting URL is not the statewide SOS endpoint and the list is explicitly unofficial. Use only as supplemental evidence that county election materials were carrying Mann as a Democratic AG candidate by May 18, 2026.

---

## Section 2 - Candidate Biography / Public Record

### 2.1 Campaign homepage

**URL**: https://chrismannforkansas.com/  
**Tier**: primary, candidate-controlled  
**Publisher**: Chris Mann for Kansas  
**Accessed**: 2026-05-19  
**Metadata modified**: 2026-04-09 in page JSON-LD

Relevant source facts:
- Site navigation includes Meet Chris, News, Volunteer, Donate.
- Homepage states that Mann's career has included service as a police officer and prosecutor.
- Homepage frames his AG campaign around defending the Constitution, protecting the rule of law, and Kansas family safety.
- The site links ActBlue donation pages, Facebook, X, and Instagram.
- Footer address: PO Box 4005, Overland Park, KS 66204.
- Footer says paid for by Chris Mann for Kansas, Jill S. Docking Treasurer.
- Homepage embeds the YouTube video `7291se4b1Sw`.

Issue mapping:
- Public safety, rule of law, constitutional rights, family/community safety, campaign infrastructure.

### 2.2 Campaign biography

**URL**: https://chrismannforkansas.com/meet-chris/  
**Tier**: primary, candidate-controlled  
**Publisher**: Chris Mann for Kansas  
**Accessed**: 2026-05-19

Relevant source facts:
- Campaign biography identifies Mann as a cop, prosecutor, and victims' advocate.
- It says he became a police officer at 21 and was struck by a drunk driver during a 2002 traffic stop.
- It says he went to Washburn University School of Law on a full-ride Koch Public Service Scholarship.
- It says he became a prosecutor in the Wyandotte County District Attorney's Office and prosecuted cases from DUI to murder.
- It says he served as MADD Kansas Advisory Board Chair in 2011, joined the MADD National Board in 2014, and served as Board Chair until 2020.
- It says he played a role in advocacy and passage of Kansas drunk-driving legislation, including ignition interlocks for all DUI offenders.
- It says he later prosecuted for the Kansas Securities Commission, helping protect consumers and seniors by holding white-collar criminals accountable.
- It says that in 2016 he opened Mann Law Firm, P.A.
- It says in 2019 he returned focus primarily to representing victims of drunk driving and their families in lawsuits against drunk drivers.
- It identifies wife Ashley Mann as a cardiothoracic surgeon in Olathe and says they live in Lawrence with two children.

Issue mapping:
- Public safety, prosecution, DUI, victim advocacy, consumer protection, white-collar crime, family/biography.

### 2.3 FRST Midwest advisory committee biography

**URL**: https://frstmidwest.org/board-advisory-committee  
**Tier**: secondary / community organization  
**Publisher**: FRST Midwest  
**Accessed**: 2026-05-19

Relevant source facts:
- The advisory committee page lists Chris Mann in a legal role.
- It describes him as a medically retired Lawrence police officer injured in a 2002 traffic stop by a drunk driver.
- It says he opened Mann Law Firm, P.A. focusing on victims of drunk driving and their families.
- It says he helped promote significant Kansas drunk-driving and public-safety legislation, including ignition interlocks.
- It says he was appointed to chair the MADD National Board of Directors in 2014.

Issue mapping:
- DUI, victim advocacy, law enforcement, community involvement.

---

## Section 3 - Current Campaign Statements and Issue Signals

### 3.1 Campaign news/RSS

**URL**: https://chrismannforkansas.com/feed/  
**Tier**: primary, candidate-controlled  
**Publisher**: Chris Mann for Kansas / WordPress RSS  
**Accessed**: 2026-05-19  
**Last build date**: 2026-01-09

Relevant source facts:
- RSS contains three visible campaign-news items.
- July 30, 2025 item excerpts Kansas Reflector coverage of Mann declaring for AG in 2026.
- August 26, 2025 item excerpts Liberal First coverage and includes Mann's explanation that he wanted the AG office focused on rule of law, support for law enforcement statewide, especially rural communities, and Kansas family safety.
- January 9, 2026 item says Mann filed a report showing about $537,000 raised in 2025, compared with roughly $205,000 at the comparable point in his 2022 AG race.

Issue mapping:
- Campaign launch, public safety, rural law enforcement, rule of law, campaign finance.

### 3.2 WIBW launch coverage

**URL**: https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/  
**Tier**: secondary  
**Publisher**: WIBW  
**Published**: 2025-07-30  
**Accessed**: 2026-05-19

Relevant source facts:
- Reports Mann announced on July 30, 2025 that he was running again for Kansas Attorney General in 2026.
- Reports his campaign would focus on public safety and law enforcement.
- Reports Jill Docking would join the campaign as treasurer.
- Reports Mann's wife Ashley is a cardiothoracic surgeon practicing in Olathe and that the family lives in Lawrence.
- Reports 2022 official vote totals as Kobach 506,817 and Mann 490,925; official SOS source independently confirms those totals.

Candidate-attributed issue statement:
- Mann said Kansas families need "a law enforcement officer defending our communities and our rights."
- Mann said he would refocus the office on law-enforcement basics, rule of law, rights, families, and safety.

Issue mapping:
- Public safety, rule of law, constitutional rights, family/community safety, campaign launch.

### 3.3 KWCH launch coverage

**URL**: https://www.kwch.com/2025/07/30/former-prosecutor-chris-mann-announces-candidacy-attorney-general/  
**Tier**: secondary  
**Publisher**: KWCH  
**Published**: 2025-07-30  
**Accessed**: 2026-05-19

Relevant source facts:
- Reports Mann announced his candidacy for attorney general on July 30, 2025.
- Reports Mann was the first person to declare for the race in that coverage.
- Reports he was a former Wyandotte County prosecutor, a Lawrence police officer injured in a 2002 traffic stop, national chair for MADD, and private-practice attorney for nine years.
- Includes candidate and opponent statements from the 2026 launch context.

Issue mapping:
- Public safety, DUI/victim advocacy, campaign contrast.

### 3.4 Liberal First interview

**URL**: https://liberalfirst.com/index.php/en/news/3094-chris-mann-announces-candidacy-for-kansas-attorney-general  
**Tier**: secondary  
**Publisher**: Liberal First / Leader & Times  
**Published**: 2025-08-26  
**Accessed**: 2026-05-19

Relevant source facts:
- Identifies Kansas Attorney General as a major 2026 office and Mann as one candidate.
- Mann described wanting the AG office to focus on rule of law, law enforcement statewide, rural communities, and Kansas family safety.
- Mann criticized the AG office budget and said rural communities were receiving fewer law-enforcement and prosecution services.
- Mann discussed fentanyl deaths, grant spending, life-saving medications, and other assistance.
- Mann named rural law-enforcement/prosecutorial support, victims of crime, domestic-violence victims, and safe environments/shelters as areas where the AG office could help.
- Mann said he wanted to travel to communities including Dodge City, Hays, Colby, and Liberal.

Issue mapping:
- Rural law enforcement, prosecution support, victim services, domestic violence, fentanyl, regional outreach.

### 3.5 DAGA endorsement and candidate statement

**URL**: https://dems.ag/daga-endorses-chris-mann-for-kansas-attorney-general/  
**Tier**: secondary / political organization, includes candidate quote  
**Publisher**: Democratic Attorneys General Association  
**Published**: 2026-05-06  
**Accessed**: 2026-05-19

Relevant source facts:
- DAGA endorsed Chris Mann for Kansas Attorney General on May 6, 2026.
- DAGA described Mann's service as law enforcement officer, prosecutor in Wyandotte County, Kansas Securities Commission prosecutor, and drunk-driving victim advocate.
- Candidate statement said public safety, constitutional rights, consumer protection from fraud, accountability, and law-enforcement/prosecutor resources would be priorities.

Issue mapping:
- Endorsements, public safety, constitutional rights, consumer protection, law-enforcement/prosecutor resources.

### 3.6 DAGA follow-up / polling memo

**URL**: https://dems.ag/icymi-daga-endorses-early-in-two-key-ag-races/  
**Tier**: secondary / political organization  
**Publisher**: Democratic Attorneys General Association  
**Published**: 2026-05-07  
**Accessed**: 2026-05-19

Relevant source facts:
- DAGA said it endorsed Mann and Iowa candidate Nate Willems as early target races.
- DAGA cited a Politico Playbook report and polling memo saying Mann trailed Kobach by 2 points in DAGA polling.

Issue mapping:
- Endorsements, campaign viability.

Narrative caution:
- Treat this as partisan-organizational polling and race targeting, not independent polling.

---

## Section 4 - Campaign Finance

### 4.1 KPDC January 2026 receipts/expenditures report

**URL**: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02CM_202601.pdf  
**Tier**: primary  
**Publisher**: Kansas Public Disclosure Commission / Kansas.gov  
**Report filed**: 2026-01-08 1:05:23 PM  
**Report period**: 2025-01-01 through 2025-12-31  
**Accessed**: 2026-05-19

Cover totals:
- Cash on hand at beginning of period: $659.00
- Total contributions and other receipts: $536,639.57
- Cash available this period: $537,298.57
- Total expenditures and other disbursements: $280,041.49
- Cash on hand at close of period: $257,257.08
- In-kind contributions: $7,655.77
- Other transactions: $0.00

Issue mapping:
- Campaign finance / viability / funding.

Donor note:
- The PDF includes a 142-page Schedule A contribution list. The KPDC index page carries a statutory warning against copying contributor names for commercial use. This pass records totals and links rather than reproducing donor names. Review the schedule for issue-specific conflicts only if a later worker has a concrete noncommercial research question.

### 4.2 Campaign/news fundraising summaries

**URLs**:
- https://chrismannforkansas.com/mann-more-than-doubles-fundraising-from-22-attorney-generals-race/
- https://sunflowerstatejournal.com/new-mann-makes-race-for-attorney-general-official/

**Tier**: primary/candidate-controlled for campaign page; secondary for Sunflower State Journal  
**Accessed**: 2026-05-19

Relevant source facts:
- Campaign site January 9, 2026 post says Mann reported raising about $537,000 during 2025 and compares that to roughly $205,000 at the same point in his 2022 AG race.
- Sunflower State Journal reported on July 30, 2025 that Mann had been raising money for another AG race for months.

Issue mapping:
- Campaign finance, campaign viability.

---

## Section 5 - Public Safety, DUI, Victims, and Rural Prosecution

### 5.1 Kansas Legislature 2017 SB123 testimony

**URL**: https://www.kslegislature.gov/li_2018/b2017_18/committees/ctte_s_jud_1/documents/testimony/20170214_03.pdf  
**Tier**: primary  
**Publisher**: Kansas Legislature  
**Submitted**: 2017-02-14  
**Accessed**: 2026-05-19

Relevant source facts:
- Testimony in opposition to SB123 was submitted by Christopher Mann and LeAnn Briggs.
- The signers are identified as MADD volunteers and drunk-driving victims.
- The testimony says MADD urged the Senate Judiciary Committee to vote against SB123.
- The testimony said SB123 would weaken Kansas's ignition-interlock law established in July 2011.
- It reported that interlocks had stopped 60,000 attempts in Kansas to drive drunk with an illegal BAC of .08 or greater.
- It cited research that ignition interlocks reduce repeat drunk-driving offenses by 67 percent.
- Signature block identifies Christopher Mann as Board of Directors - MADD.

Issue mapping:
- DUI prevention, ignition interlock, public safety, victim advocacy.

### 5.2 Campaign biography on DUI and MADD

See Section 2.2.

Relevant source facts:
- Mann's campaign biography uses the 2002 drunk-driving crash as the pivot from police work to law school and legal advocacy.
- It connects his MADD service to Kansas ignition-interlock advocacy and later representation of drunk-driving victims.

Issue mapping:
- DUI, victim advocacy, law enforcement, civil litigation for victims.

### 5.3 Rural law enforcement and victim services

See Section 3.4.

Relevant source facts:
- Liberal First interview is the most detailed current 2026 issue source for rural prosecutorial support, domestic-violence victim resources, safe shelters, fentanyl, and direct community outreach.

Issue mapping:
- Rural communities, law enforcement, prosecution, victim services, domestic violence, fentanyl.

---

## Section 6 - Consumer Protection / White-Collar Crime

### 6.1 Campaign biography

See Section 2.2.

Relevant source facts:
- Campaign biography says Mann worked as a prosecutor for the Kansas Securities Commission and helped protect consumers and seniors by holding white-collar criminals accountable.

Issue mapping:
- Consumer protection, financial crime, senior protection.

### 6.2 DAGA candidate statement

See Section 3.5.

Relevant source facts:
- Candidate statement says he would protect consumers from fraud and hold bad actors accountable.

Issue mapping:
- Consumer protection, fraud, accountability.

### 6.3 AG office scope

**URL**: https://www.ag.ks.gov/divisions  
**Tier**: primary/government  
**Publisher**: Kansas Attorney General  
**Accessed**: 2026-05-19

Relevant source facts:
- The AG office divisions page says the office provides legal services to state agencies and boards, promotes open/accountable government, issues AG opinions, protects consumers from fraud, assists crime victims, and defends the state in civil proceedings.
- It says Consumer Protection attorneys educate consumers and businesses and sue over deceptive and unconscionable practices.

Issue mapping:
- Office-scope context for consumer protection and victim-services claims.

Narrative caution:
- This page describes the office generally, not Mann's personal action record.

---

## Section 7 - Abortion, Immigration, and 2022 Debate Record

### 7.1 Kansas Reflector 2022 AG debate coverage

**URL**: https://kansasreflector.com/2022/09/23/kansas-attorney-general-candidates-split-on-voter-fraud-abortion-rights-immigration/  
**Tier**: secondary  
**Publisher**: Kansas Reflector  
**Published**: 2022-09-23  
**Accessed**: 2026-05-19

Relevant source facts:
- Reports Mann and Kobach debated at the Wichita Crime Commission Forum.
- Reports both candidates said the federal government failed to do enough on immigration.
- Reports Mann argued crime-related cooperation is affected when undocumented people are afraid to speak with police, and said the state needs a statewide approach to bring people into the criminal-justice system.
- Reports Mann said he would defend laws but would not use office resources to attack women's constitutional rights.
- Reports Mann mentioned a Kansas Livestock Association endorsement during the 2022 debate.

Issue mapping:
- Immigration/criminal-justice trust, abortion/constitutional rights, law enforcement, endorsements.

Narrative caution:
- These are 2022 debate positions. Do not present them as current 2026 campaign statements unless the 2026 campaign repeats them.

### 7.2 Current 2026 visible absences

Relevant current-source result:
- Current campaign site, campaign RSS, and existing logged-out public social harvest did not surface a detailed 2026 issue page or sustained candidate-controlled content on abortion, LGBTQ policy, guns, school choice, marijuana, Medicaid expansion, taxes, or judicial selection.

Issue mapping:
- Absence / could-not-confirm notes for issue cards.

---

## Section 8 - 2022 Election Record

### 8.1 Kansas SOS official 2022 results

**URL**: https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf  
**Tier**: primary  
**Publisher**: Kansas Secretary of State  
**Election**: 2022 General Election  
**Accessed**: 2026-05-19

Relevant source facts:
- Attorney General result:
  - R-Kris Kobach: 506,817 votes, 50.80%.
  - D-Chris Mann: 490,925 votes, 49.20%.
- Total AG votes for those two candidates: 997,742.
- Margin from official totals: 15,892 votes.

Issue mapping:
- Electoral record, rematch context.

### 8.2 Existing local social harvest on vote counting

**Local file**: memory/candidates/chris-mann/social-harvest.md  
**Tier**: local prior scrape of social/news  
**Captured**: 2026-05-11

Relevant source facts:
- Existing harvest captured Mann's November 9, 2022 too-close-to-call post saying mailed ballots should be counted as the law allows.
- KWCH embedded/reported the post in 2022 election coverage.

Issue mapping:
- Election administration, rule of law, vote counting.

---

## Section 9 - Social / Online Research

### 9.1 Campaign-linked platforms

**Source**: campaign homepage footer and existing social-harvest.md  
**Accessed**: 2026-05-19 for website; local harvest captured 2026-05-11

Relevant source facts from website:
- Campaign site links Facebook: https://www.facebook.com/ChrisMannKS/
- Campaign site links X: https://x.com/ChrisMannKS
- Campaign site links Instagram: https://www.instagram.com/chrismannks/
- Campaign homepage embeds YouTube video `https://www.youtube.com/embed/7291se4b1Sw`.

Relevant source facts from local harvest:
- Facebook metadata captured 2,730 likes and 1,083 talking about this.
- Instagram metadata captured 739 followers, 21 following, and 99 posts.
- X previews showed about 2K followers.
- YouTube channel metadata showed 3 subscribers.
- Highest visible post/video metric found was an allied Douglas County Democrats Facebook video featuring Mann with 1.8K views and 59 reactions.
- Highest indexed X post metric found was an official filing/fundraising post with 11 replies, 4 reposts, 20 likes, and 1K views.

Issue mapping:
- Social presence; public safety/law-enforcement message repetition.

### 9.2 Visible absences and conflicts

Relevant facts:
- Existing harvest found no candidate-controlled Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, or Reddit account.
- Liberal First quotes Mann saying people can follow the campaign "on all the platforms." This should be read colloquially; the public/logged-out research did not confirm all major platforms.
- No complete comment-section harvest was possible from Facebook, X, Instagram, or YouTube.

Issue mapping:
- Social limitations; no unsupported inference.

---

## Section 10 - Gaps, Blockers, and Could Not Confirm

### Gaps

- Direct SOS live candidate list blocked by CloudFront 403.
- Attorney-registration directory status was not captured from Kansas Courts; search only surfaced the general attorney-registration page.
- Direct social timelines were not fully accessible without login/script support.
- No complete Facebook comments or group activity inventory.
- No public current church affiliation or worship attendance confirmed.
- No current candidate-controlled 2026 issue page on several common state issues.
- No issue-relevant donor conflict check completed from the 142-page KPDC Schedule A.
- No property/court/business-record sweep beyond targeted web searches and campaign-professional claims.

### Could Not Confirm

- Final official filed-candidate status from the SOS live candidate list.
- Any candidate-controlled account on Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, or Reddit.
- Current post-level engagement counts on Facebook, Instagram, X, or YouTube.
- Current 2026 candidate-controlled positions on LGBTQ policy, guns, school choice, marijuana, Medicaid expansion, taxes, judicial selection, water, rural hospitals, broadband, foster care, or adoption.
- Whether the campaign's "all platforms" quote means more than the publicly linked Facebook, X, Instagram, and YouTube presence.

---

## Source Index

- Kansas SOS candidate information: https://www.sos.ks.gov/elections/candidate-information.html
- KPDC statewide 2026 index: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm
- KPDC Mann 202601 report: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02CM_202601.pdf
- KPDC Mann amended AT: https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW02CM_amendAT.pdf
- Miami County unofficial candidate list: https://www.copsfortots.com/DocumentCenter/View/14387/26PR-Unofficial-Candidate-List-4-24?bidId=
- Campaign homepage: https://chrismannforkansas.com/
- Campaign biography: https://chrismannforkansas.com/meet-chris/
- Campaign news: https://chrismannforkansas.com/news/
- Campaign RSS: https://chrismannforkansas.com/feed/
- Campaign fundraising post: https://chrismannforkansas.com/mann-more-than-doubles-fundraising-from-22-attorney-generals-race/
- WIBW launch coverage: https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/
- KWCH launch coverage: https://www.kwch.com/2025/07/30/former-prosecutor-chris-mann-announces-candidacy-attorney-general/
- Liberal First interview: https://liberalfirst.com/index.php/en/news/3094-chris-mann-announces-candidacy-for-kansas-attorney-general
- DAGA endorsement: https://dems.ag/daga-endorses-chris-mann-for-kansas-attorney-general/
- DAGA ICYMI/polling post: https://dems.ag/icymi-daga-endorses-early-in-two-key-ag-races/
- Kansas SOS 2022 results: https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf
- Kansas Legislature SB123 testimony: https://www.kslegislature.gov/li_2018/b2017_18/committees/ctte_s_jud_1/documents/testimony/20170214_03.pdf
- Kansas AG divisions: https://www.ag.ks.gov/divisions
- Kansas AG about the office: https://www.ag.ks.gov/about-us
- FRST Midwest advisory committee: https://frstmidwest.org/board-advisory-committee
- Kansas Reflector 2022 debate coverage: https://kansasreflector.com/2022/09/23/kansas-attorney-general-candidates-split-on-voter-fraud-abortion-rights-immigration/
