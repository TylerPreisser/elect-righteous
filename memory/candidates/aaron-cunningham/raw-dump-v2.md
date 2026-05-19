# Aaron Cunningham - Raw Dump V2 (Primary-Tier Deep Scrape)

**Candidate slug:** aaron-cunningham  
**Office:** Ellis County Attorney (Republican, incumbent)  
**Election:** ellis-county-incumbents-off-cycle  
**Date written:** 2026-05-19  
**Agent:** codex (Worker 35, deep-scraper equivalent)  
**Source basis:** Existing local profile, raw dump, social harvest, site profile, in-their-own-words narrative, and current v2 TypeScript stub were used first. Targeted current verification then checked official Ellis County pages, Kansas statute, official county election/filing records, county budget/minutes records, Kansas campaign-finance portals, local news, professional directories, and public social/profile traces.

---

## Methodology Note

This dump prioritizes records that can become `ActionEvidence` or source-anchored issue text in v2:

- Official current office and off-cycle election status.
- Official office mission, priorities, staffing, and budget records.
- Candidate-attributed public statements about prosecution, marijuana enforcement, victim services, rural legal shortages, and treatment/mental-health tradeoffs.
- Public case coverage only where Cunningham is named or quoted in his official role.
- Social/profile records only where publicly accessible or already documented in local harvest; no private accounts, leaked content, or unsupported inference.

Searches covered Ellis County official pages, Ellis County candidate filings, Ellis County election results, Kansas statute, Kansas attorney/prosecutor/professional directories, Hays Post, KWCH, HaysMed, The Guidon, CBS/48 Hours, KPDC/Kansas campaign finance public portals, Google-indexed social/profile traces, and targeted broad web queries for campaign finance, court/legal, business, property, religious/community, endorsements, and public comments.

---

## Source Registry

### Primary Sources

#### s-ellis-attorney-page
- **URL:** https://www.ellisco.net/92/Attorney
- **Publisher:** Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:**
  - Official page lists "Aaron J. Cunningham, Ellis County Attorney (2025 - present)."
  - The office is primarily responsible for misdemeanor and felony criminal prosecution and also handles alcohol/drug care and treatment, child-in-need-of-care, traffic, juvenile offender, and mental-illness matters.
  - Mission language centers enforcement of Kansas law, public safety, truth-seeking, fair/impartial justice, ethical standards, and public confidence.
  - Priorities include cases involving death, child victims including CINC cases, sex crimes, violent person crimes, property crimes, and drug distribution crimes; prosecuting as many cases as possible; and maximizing office efficiency for taxpayers.
- **Issue mapping:** Current role; office scope; prosecution priorities; efficiency/taxpayer stewardship.
- **ActionEvidence candidate:** Official office priority list and role confirmation.

#### s-ellis-staff-directory
- **URL:** https://www.ellisco.net/directory.aspx?eid=101
- **Publisher:** Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:** Staff directory lists Aaron Cunningham, department Attorney, title Ellis County Attorney, phone 785-628-9405.
- **Issue mapping:** Current office verification.

#### s-ks-statute-19-701
- **URL:** https://kslegislature.gov/li_2020/s/statute/019_000_0000_chapter/019_007_0000_article/019_007_0001_section/019_007_0001_k.pdf
- **Publisher:** Kansas Legislature
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpt/paraphrase:** K.S.A. 19-701 states that, except as otherwise provided by law, a county attorney is elected in each county for a four-year term and must be admitted to practice law in Kansas.
- **Issue mapping:** Election-cycle status; qualification context.

#### s-ellis-election-results-page
- **URL:** https://www.ellisco.net/435/Election-Results
- **Publisher:** Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:** Official county page links "2024 General Election Official Results" and "2024 Primary Official Results."
- **Issue mapping:** Official pathway for election results.

#### s-ellis-2024-official-results-pdf
- **URL:** https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results
- **Publisher:** Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:** Official scanned PDF is image-based. Web search/OCR extraction for the same URL shows the County Attorney table with REP Aaron J. Cunningham receiving 11,379 votes and write-ins receiving 146 votes. Local `pdftotext` extraction returned blank text because the PDF appears scanned.
- **Issue mapping:** 2024 election result; incumbent status.
- **Caution:** Use the official PDF URL as the source path and IKE Lab/Hays Post only for readable result text unless OCR is created.

#### s-ellis-2026-candidate-filings-page
- **URL:** https://www.ellisco.net/626/Candidate-Filings
- **Publisher:** Ellis County Clerk / Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:** Page links "2026 Primary Election Candidates."
- **Issue mapping:** Current ballot/filing status.

#### s-ellis-2026-candidate-filings-pdf
- **URL:** https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings
- **Publisher:** Ellis County Clerk / Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:** PDF lists Commission District 1, township clerk offices, Ellis City Council, and precinct committee offices. It does not list County Attorney as a 2026 filing position.
- **Issue mapping:** Off-cycle status; confirms Cunningham is not a current 2026 county-attorney filing.

#### s-ellis-2025-budget-book
- **URL:** https://www.ellisco.net/DocumentCenter/View/5645/2025-Budget-Book
- **Publisher:** Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:**
  - County officials section lists County Attorney Aaron Cunningham with official email/phone.
  - Staffing table lists the Attorney department with 10 positions, including County Attorney, three Assistant County Attorneys, three Legal Assistants, Administrative Coordinator, Traffic Clerk, and Victim/Witness Coordinator.
  - Attorney budget section lists "Responsible Party: Aaron Cunningham, County Attorney (elected by Ellis County voters)."
  - Attorney department proposed 2025 expenditure total is shown as $1,160,716.
- **Issue mapping:** Office staffing; office budget; official role.

#### s-ellis-jan-2025-agenda-packet
- **URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_01212025-649
- **Publisher:** Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Meeting context:** January 2025 commission agenda packet/minutes content.
- **Relevant excerpts/paraphrases:**
  - County Attorney Aaron Cunningham gave commissioners an update as newly elected county attorney.
  - Cunningham asked for approval of a Victim Witness Coordinator job description for the County Attorney's Office.
  - Packet notes HR review, budget effects tied to assistant county attorney hiring timing, and 2026 budget process timing.
  - Motion to approve the Victim Witness Coordinator job description passed 3-0.
- **Issue mapping:** Victim services; office staffing; budget planning.
- **ActionEvidence candidate:** Cunningham requested approval of Victim Witness Coordinator job description; commission approved 3-0.

#### s-ellis-dec-2024-transition-minutes
- **URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_01072025-644
- **Publisher:** Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Meeting context:** December 17, 2024 minutes included in January 7, 2025 packet.
- **Relevant excerpts/paraphrases:** Then-County Attorney Robert Anderson told commissioners his term was up January 13, 2025 and said incoming County Attorney Aaron Cunningham would be a good fit.
- **Issue mapping:** Transition/took-office timing.

#### s-ellis-jul-2025-budget-minutes
- **URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07212025-686
- **Publisher:** Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Meeting date:** 2025-07-21 budget session
- **Relevant excerpts/paraphrases:**
  - County Attorney Aaron Cunningham presented the County Attorney budget, listed at $1,117,207 in the minutes header.
  - Cunningham said the office had enough staff to keep everyone busy and that attorneys have the biggest impact on efficiencies.
  - Minutes say overall the attorney budget was under budget from 2025.
  - Cunningham said felony conviction numbers were up.
  - Discussion included service agreements for appeals, loss of the victim coordinator position, and possible future cybercrime expertise needs.
- **Issue mapping:** Office capacity; budget; case outcomes; appeals/cybercrime pressure; victim-services staffing.
- **ActionEvidence candidate:** Presented 2026 attorney budget and discussed staffing/efficiency.

#### s-ellis-victim-info
- **URL:** https://www.ellisco.net/119/Victim-Information
- **Publisher:** Ellis County Attorney's Office / Ellis County, Kansas
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:** Victims have the right to be notified and appear at public hearings involving the defendant; the office will make efforts to notify victims by phone/text, email, and/or mail; victims can request restitution; after law enforcement investigates, reports go to the County Attorney's Office for review and charging decisions.
- **Issue mapping:** Victim services; prosecutorial process.

#### s-kpdc-campaign-finance-data
- **URL:** https://www.kansas.gov/campaign-finance/
- **Publisher:** Kansas Public Disclosure Commission / Kansas.gov
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:** Public landing page offers searchable campaign-finance categories for Quick Statistics, Itemized Contributions, List of Contributors, and Lists of Candidates, with groups limited in the landing form to Kansas House, Kansas Senate, statewide races, and Board of Education.
- **Issue mapping:** Campaign finance search boundary.
- **Caution:** Does not establish absence of local county filings; it only documents the public data interface checked.

#### s-kssos-campaign-finance
- **URL:** https://www.kssos.org/elections/campaign-finance-ethics-filings.html
- **Publisher:** Kansas Secretary of State
- **Accessed:** 2026-05-19
- **Tier:** Primary
- **Relevant excerpts/paraphrases:** Secretary of State page says the office receives and files reports from candidates, PACs, and other entities involved in politics at the state level, and directs readers to KPDC for more information. Federal reports are filed with the FEC.
- **Issue mapping:** Campaign finance search boundary.

### Candidate-Attributed / News / Secondary Sources

#### s-hayspost-2024-candidate-list
- **URL:** https://hayspost.com/posts/71fc45b0-c8c1-41af-87da-6b86c8a8170b
- **Publisher:** Hays Post
- **Published:** 2024-06-04
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** Article lists County Attorney candidate "Aaron J Cunningham" as Republican after the 2024 filing deadline.
- **Issue mapping:** 2024 candidacy context.

#### s-ike-lab-2024-results
- **URL:** https://www.ike-lab.com/complete_elex_2024_gen_cotwp_Ellis.html
- **Publisher:** IKE Lab
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** Readable 2024 Ellis County general-election results copy shows County Attorney: Aaron J. Cunningham (R), 11,379; write-ins, 146.
- **Issue mapping:** Readable vote totals; pairs with official Ellis County result PDF.

#### s-hayspost-2025-profile
- **URL:** https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1
- **Publisher:** Hays Post
- **Published:** 2025-02-17
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:**
  - Cunningham returned to Hays to serve his hometown, graduated from Washburn Law in 2019, interned under Tom Drees, and worked DUI/drug cases.
  - He ran unopposed and took office in January 2025.
  - He said there were still likely hundreds of backlogged cases and that the office usually has four attorneys handling about 1,500 reports from seven law enforcement agencies per year.
  - He said whether something is a crime is up to the Legislature and that he has an obligation to enforce the law as written.
  - He said he would consider filing charges on hemp-derived products such as Delta-8 and Delta-10.
  - He said resource limits mean the office prioritizes cases and a nonlocal traveler with only a marijuana pipe may not be prosecuted if not an imminent local threat.
  - He described the Victim/Witness Coordinator as a major help in victim communication, restitution, victim impact statements, and court expectations.
  - He discussed rural attorney shortages, public defender shortages, plea-bargaining, jail waits, Recovery Court, treatment, mental health care, a holistic approach, and wanting to help people.
- **Issue mapping:** Marijuana/drug enforcement; office role; case prioritization; victim services; rural legal workforce; treatment/mental health.
- **ActionEvidence candidate:** Publicly announced return to filing some marijuana cases; explained office priorities and resource triage.

#### s-hayspost-2022-delta8-anderson
- **URL:** https://hayspost.com/posts/9397fb25-5dc6-4443-a340-6aae96abc594
- **Publisher:** Hays Post
- **Published:** 2022-01-05
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** Article concerns then-County Attorney Robert Anderson warning businesses that Delta-8 products were illegal after Kansas Attorney General guidance and a local district-court case. This is context for local THC enforcement, not a Cunningham action.
- **Issue mapping:** Drug-enforcement context; attribution caution.

#### s-hayspost-2024-jail
- **URL:** https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d
- **Publisher:** Hays Post
- **Published:** 2024-07-11
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** Sheriff Scott Braun told commissioners that Assistant County Attorney Aaron Cunningham was the only filed candidate for county attorney and, barring a successful write-in campaign, would take over in January. Braun predicted Cunningham would be "a little bit harder" and said that could affect jail numbers; this is Braun's expectation, not Cunningham's own statement.
- **Issue mapping:** Pre-term public expectation; jail/court-system context.
- **Caution:** Do not present Braun's prediction as Cunningham's policy pledge.

#### s-hayspost-2026-threats-sentencing
- **URL:** https://hayspost.com/posts/a5f579fa-6c33-44fd-921e-5a8435208d58
- **Publisher:** Hays Post
- **Published:** 2026-03-26
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** In a criminal-threat/aggravated-assault sentencing story, Hays Post reported Cunningham opposed probation and argued against allowing the defendant to justify his actions based on allegations against another person. He said allowing probation would signal that people can take matters into their own hands rather than use established investigative and court systems.
- **Issue mapping:** Formal legal process; violent threats; sentencing posture.
- **ActionEvidence candidate:** Opposed probation in violent-threat case; argued for court/investigative systems over private retaliation.

#### s-guidon-2019-career-speaker
- **URL:** https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/
- **Publisher:** The Guidon Online / Hays High School
- **Published:** 2019-10-26
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** Cunningham, described as a 2012 Hays High graduate and assistant county attorney, told students he earned a bachelor's degree at Kansas State and attended Washburn for law school; he linked law to writing, advocacy, justice, servant-hearted practice, and helping victims.
- **Issue mapping:** Biography; legal-service framing; victim focus.

#### s-haysmed-human-trafficking-panel
- **URL:** https://www.haysmed.com/haysmed-panel-sheds-light-on-human-trafficking-at-chamber-luncheon/
- **Publisher:** HaysMed
- **Published:** 2025-07-03
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** HaysMed says the June 27, 2025 chamber luncheon panel included Ellis County Attorney Aaron Cunningham, HaysMed Forensic Program Coordinator Trisha Haskell, Hays Police Department Sergeant Detective Aaron Larson, and retired KBI Special Agent Colleen Brooks. Event focused on human trafficking awareness and local/regional impact.
- **Issue mapping:** Public safety; human trafficking awareness; community education.

#### s-kwch-2026-infant-overdose-conviction
- **URL:** https://www.kwch.com/2026/02/11/father-convicted-murder-approaching-2-years-after-hays-infants-fatal-meth-overdose/
- **Publisher:** KWCH
- **Published:** 2026-02-11
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** KWCH reported that Ellis County Attorney Aaron Cunningham confirmed a second-degree murder conviction in the case of Abraham Duran Leon, connected to the April 2024 methamphetamine-overdose death of an infant.
- **Issue mapping:** Drug-related fatality; violent/serious case prosecution.

#### s-cbs-trickle-48hours
- **URL:** https://www.cbsnews.com/news/kristen-trickle-colby-trickle-kansas-psychological-autopsy-criminal-case-to-determine-mindset-of-fatal-shooting-victim-48-hours/
- **Publisher:** CBS News / 48 Hours
- **Updated:** 2025-02-09; originally aired 2024-04-27
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** CBS/48 Hours identifies Ellis County Attorney's Office materials and includes Cunningham as an attributed professional voice in coverage of the Kristen Trickle / Colby Trickle case. This is professional case context, not campaign messaging.
- **Issue mapping:** Public professional profile; serious criminal case context.

#### s-ecba-member-directory
- **URL:** https://www.elliscountyksbar.org/members
- **Publisher:** Ellis County Bar Association
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** Member directory lists Cunningham, Aaron, as Ellis County Attorney at the Ellis County Attorney's Office.
- **Issue mapping:** Professional identity.

#### s-kcdaa-member-profile
- **URL:** https://kcdaa.org/Sys/PublicProfile/52134000
- **Publisher:** Kansas County & District Attorneys Association
- **Accessed:** 2026-05-19
- **Tier:** Secondary
- **Relevant excerpts/paraphrases:** KCDAA profile lists Aaron Cunningham at the Ellis County Attorney's Office but shows job title "Assistant County Attorney"; treat as stale professional-directory metadata, not current-title proof.
- **Issue mapping:** Professional identity; stale-title caution.

### Social / Profile Sources

#### s-aboutme-local-harvest
- **URL:** https://about.me/aaron.cunningham
- **Publisher:** about.me
- **Accessed in local harvest:** 2026-05-11
- **Tier:** Social
- **Relevant excerpts/paraphrases from local harvest:** Existing `social-harvest.md` reports the page as candidate/profile-controlled, listing Hays/Manhattan, Hays High, Kansas State University, Christianity, Calvinism, music, scouting, and X/Twitter handle `Sinfonian24601`.
- **Issue mapping:** Personal identity metadata only.
- **Caution:** Current targeted search did not return a crawlable matching about.me page. Re-capture before quoting exact self-description.

#### s-linkedin-local-harvest
- **URL:** https://www.linkedin.com/in/aaron-cunningham-653b3094
- **Publisher:** LinkedIn
- **Accessed in local harvest:** 2026-05-11
- **Tier:** Social
- **Relevant excerpts/paraphrases from local harvest:** Public preview reportedly matched Kansas State University, Washburn University School of Law, and a Hays work trail, with 246 followers and 245 connections. Direct fetch was blocked and no public activity feed was visible.
- **Issue mapping:** Professional metadata only.

#### s-x-local-harvest
- **URL:** https://x.com/Sinfonian24601
- **Publisher:** X / Twitter
- **Accessed in local harvest:** 2026-05-11
- **Tier:** Social
- **Relevant excerpts/paraphrases from local harvest:** Handle was linked from about.me, but logged-out direct fetch returned a script shell without readable post inventory, dates, follower count, or engagement.
- **Issue mapping:** Platform-presence lead only; no issue evidence.

---

## Pass Findings

### Pass 1: Identity & Name Variations

**Findings:**
- Core name in official records: Aaron J. Cunningham / Aaron Cunningham.
- Kansas attorney directory search result in local harvest identified "Aaron Joseph Cunningham" with registration number 28250 and active Kansas attorney status; direct current browser extraction did not return usable page text in this pass.
- Current official title is Ellis County Attorney. KCDAA profile still says Assistant County Attorney and should be treated as stale.

**Sources:** s-ellis-attorney-page; s-ellis-staff-directory; s-ellis-2025-budget-book; s-ecba-member-directory; s-kcdaa-member-profile.

### Pass 2: Campaign Finance

**Findings:**
- No itemized donors, total raised, total spent, treasurer, or campaign committee record was found in accessible online sources for the 2024 Ellis County Attorney race.
- KPDC's public campaign-finance data interface checked through the landing page exposes statewide/legislative/Board of Education groupings, not a county attorney search grouping.
- Kansas SOS campaign-finance page describes state-level campaign finance reports and points to KPDC; it does not resolve local county-office filing availability.
- Targeted Ellis County searches did not surface local campaign finance reports for Cunningham.

**Sources:** s-kpdc-campaign-finance-data; s-kssos-campaign-finance; targeted search logs in sleuth pass.

**Could not confirm:** Any donor/funding data.

### Pass 3: Property & Business Records

**Findings:**
- No property, business-entity, tax-lien, foreclosure, or LLC/officer issue was confirmed in this pass.
- This pass did not complete official county real-property or Kansas Secretary of State business-entity searches to a record-level conclusion, so do not characterize this as a clean-record certification.

**Sources:** Targeted public web search only; no usable record-level source.

### Pass 4: Court & Legal Records

**Findings:**
- No adverse personal court/legal record was confirmed.
- Professional case coverage includes Cunningham as prosecutor/county attorney in public criminal matters, including the Harwick sentencing story, infant overdose murder conviction confirmation, and CBS/48 Hours Trickle case coverage.

**Sources:** s-hayspost-2026-threats-sentencing; s-kwch-2026-infant-overdose-conviction; s-cbs-trickle-48hours.

### Pass 5: Facebook

**Findings:**
- No verified candidate-controlled campaign Facebook page or public personal profile with readable public content was confirmed.
- Generic Facebook search/direct checks in local harvest were not attributable enough for issue evidence.

**Sources:** Existing `social-harvest.md`; targeted searches.

### Pass 6: X / Twitter

**Findings:**
- Existing local harvest linked `Sinfonian24601` through about.me, but no logged-out public timeline or post inventory was captured.
- No posts, replies, likes, follows, engagement counts, or issue content should be used.

**Sources:** s-x-local-harvest; s-aboutme-local-harvest.

### Pass 7: Other Social Media

**Findings:**
- LinkedIn preview surfaced only professional metadata; direct fetch was blocked and no activity feed was visible.
- No verified candidate-controlled Instagram, TikTok, YouTube, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, newsletter, or Reddit presence was found.

**Sources:** s-linkedin-local-harvest; existing `social-harvest.md`.

### Pass 8: News Coverage

**Findings:**
- Hays Post is the main local issue source: 2024 candidate list, 2024 jail preview, 2025 profile/interview, 2026 sentencing story.
- KWCH gives a 2026 case-outcome confirmation.
- CBS/48 Hours gives broader professional visibility from the Trickle case.

**Sources:** s-hayspost-2024-candidate-list; s-hayspost-2024-jail; s-hayspost-2025-profile; s-hayspost-2026-threats-sentencing; s-kwch-2026-infant-overdose-conviction; s-cbs-trickle-48hours.

### Pass 9: Written Record

**Findings:**
- No op-eds, letters to the editor, blog posts, academic papers, books, newsletters, Substack/Medium posts, or candidate-authored policy pages were verified.
- Public writing/voice consists mostly of attributed news quotes and official office text.

**Sources:** Targeted searches; existing `social-harvest.md`.

### Pass 10: Public Meetings & Government Record

**Findings:**
- Official office page and 2025 budget book establish office functions, priorities, staff, and responsible party.
- January 2025 county packet records Cunningham requesting approval of a Victim Witness Coordinator job description; motion passed 3-0.
- July 21, 2025 budget minutes record Cunningham presenting the County Attorney budget, discussing staffing/efficiency, felony conviction numbers up, appeals service agreements, loss of victim coordinator, and possible cybercrime needs.

**Sources:** s-ellis-attorney-page; s-ellis-2025-budget-book; s-ellis-jan-2025-agenda-packet; s-ellis-jul-2025-budget-minutes.

### Pass 11: Religious & Community Involvement

**Findings:**
- Existing local harvest reports about.me as containing Christian/Calvinist self-description. Current targeted search did not return a crawlable matching page, so use as profile metadata with caution.
- No current congregation or church membership was confirmed.
- Community/professional involvement includes HaysMed human-trafficking awareness panel and prior Hays High career-speaker appearance.

**Sources:** s-aboutme-local-harvest; s-haysmed-human-trafficking-panel; s-guidon-2019-career-speaker.

### Pass 12: Professional & Association Records

**Findings:**
- Ellis County Bar Association lists Cunningham as Ellis County Attorney.
- KCDAA lists Cunningham at the Ellis County Attorney's Office but with stale assistant-title metadata.
- Existing local harvest records Kansas Rural Justice Initiative involvement and Kansas attorney registration, but the current pass used official/news excerpts primarily where accessible.

**Sources:** s-ecba-member-directory; s-kcdaa-member-profile; existing `social-harvest.md`.

### Pass 13: Endorsements & Political Connections

**Findings:**
- No endorsements by organizations, unions, PACs, elected officials, or political committees were verified.
- Hays Post listed him as the Republican candidate in 2024; the race appears uncontested aside from write-ins.
- No party-office role was confirmed.

**Sources:** s-hayspost-2024-candidate-list; s-ellis-2024-official-results-pdf; s-ike-lab-2024-results.

### Pass 14: Archived & Deleted Content

**Findings:**
- No archived/deleted campaign website, removed post, deleted social content, or changed platform content was verified.
- Existing local harvest found a public profile/social lead that current search did not cleanly rediscover; that is a recapture gap, not proof of deletion.

**Sources:** Existing `social-harvest.md`; targeted searches.

### Pass 15: Community Reputation

**Findings:**
- No Google Reviews, BBB, Glassdoor/Indeed, Yelp, community forum, neighborhood group, or parent/teacher group reputation record was verified as candidate-relevant.
- Public reputation evidence is limited to official role, local case coverage, Hays High career talk, and public safety/community panel participation.

**Sources:** Targeted searches; s-guidon-2019-career-speaker; s-haysmed-human-trafficking-panel.

---

## Issue Areas for Narrative Writer

1. **Official status / off-cycle role:** Incumbent Ellis County Attorney, elected in 2024, took office January 2025, county-attorney term is four years, not on current 2026 county filing list.
2. **Role of county attorney / statutory enforcement:** Cunningham publicly frames the job as enforcing Kansas law as written, with legalization questions belonging to the Legislature.
3. **Marijuana and THC enforcement:** He resumed charging some marijuana cases after predecessor nonfiling practices and said he would consider hemp-derived Delta-8/Delta-10 charges. Resource limits temper blanket prosecution.
4. **Case prioritization and office capacity:** Official priorities and public interview both emphasize deaths, child victims/CINC, sex crimes, violent crimes, property crimes, drug distribution, backlog, and attorney scarcity.
5. **Victim services and public safety:** Victim/Witness Coordinator request, official Victim Information page, human-trafficking panel, and serious case coverage map here.
6. **Rural legal workforce / court delays / treatment:** Hays Post interview connects prosecutor/public defender shortages to delayed cases and jail waits, while also naming Recovery Court, treatment, and mental-health care as useful.
7. **Formal legal process:** Harwick sentencing story shows Cunningham arguing against private retaliation and for established investigative/court systems.

---

## Key Quotes (Short, Verbatim)

> "I have an obligation to enforce the law as it's written." - Cunningham, Hays Post, 2025-02-17.

> "The goal of this job is to correct poor behavior and help the victims." - Cunningham, The Guidon, 2019-10-26.

> "I do genuinely want to help people." - Cunningham, Hays Post, 2025-02-17.

> "Two wrongs don't make a right." - Cunningham, Hays Post, 2026-03-26.

Quote-use note: Keep Hays Post/The Guidon quotes short and source-linked in UI. Do not quote about.me text without direct recapture.

---

## Red Flags / Corrections Identified

- **Attribution correction:** The January 2022 Delta-8 warning article is Robert Anderson's action, not Cunningham's. It may be used only as local context for hemp-derived THC enforcement; Cunningham's own record begins with the 2025 Hays Post statement that he would consider filing charges on Delta-8/Delta-10.
- **Campaign website correction:** No Cunningham campaign website was found. Use the Ellis County Attorney page as official profile; do not use unrelated URLs.
- **Social-content limitation:** No public issue-bearing candidate social posts were captured. Social/profile material should not become a stand-alone narrative silo.

---

## Gaps & Missing Information

- Official OCR/text extraction of the Ellis County 2024 General Election Official Results PDF.
- Local campaign finance reports, if any, from Ellis County Clerk/KPDC/local filing records.
- Direct recapture of about.me page and linked X handle.
- Any verified current campaign-controlled social feed.
- Any current church affiliation.
- Any underlying court filings/dockets for cases covered by news.
- Any official Kansas attorney directory readback from the active registration page; local harvest has this, but current browser extraction did not.

---

## Statistics

- **Total source classes checked:** 15 deep-scraper categories plus current official status verification.
- **Total sources with usable findings:** 22 named source records in registry, plus existing local harvest files.
- **Primary-source records used:** 12.
- **Secondary/news/professional sources used:** 10.
- **Social/profile sources used:** 3, all limited to metadata or leads.
- **Time period covered:** October 26, 2019 through May 19, 2026.

---

**End of raw dump v2.**
