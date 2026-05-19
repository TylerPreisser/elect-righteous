# Raw Dump v2 - Craig Pallister

**Date:** 2026-05-19  
**Agent:** Worker 39 (deep-scraper equivalent)  
**Phase / Stage:** Phase 2, all-candidate deepening  
**Candidate slug:** craig-pallister  
**Position:** Hays USD 489 Board of Education  
**Election/status:** Current/off-cycle USD 489 board member; elected in 2025 regular-term school-board election

---

## Scope Note

This is an additive Phase 2 scrape for Craig Pallister. It uses the existing candidate memory, `ui/src/data/v2/craig-pallister.ts`, official USD 489/Diligent pages, Ellis County election documents, Kansas election-law sources, and targeted local coverage. It does not update UI/data/shared/STATE files.

The key correction from the earlier profile is status precision: Pallister is not a 2026 ballot candidate in the reviewed evidence. He is a current USD 489 board member elected in the November 4, 2025 local school-board election. Official canvassed results show 1,962 votes, while election-night news coverage used unofficial 1,948 totals.

## Source Tiers Used

- **Primary:** USD 489/Diligent board portal and meeting pages; Ellis County election notice and official results; Kansas Revisor statute.
- **Secondary:** Hays Post and Tiger Media Network local reporting; GoodParty only as an unclaimed profile shell.
- **Social:** No verified candidate-controlled post corpus. Social/online findings are mostly documented absences.

---

## Source Registry

### s-usd489-board-page

- **Tier:** primary
- **URL:** https://www.usd489.com/page/board-of-education
- **Publisher:** Hays USD 489
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Official district board page is public but logged-out text capture exposed mostly navigation and district contact information.
  - Page identifies USD 489 contact details and board clerk email.
- **Issue mapping:** official-status lead; blocker because member detail was not visible in text capture.

### s-usd489-diligent-members

- **Tier:** primary
- **URL:** https://usd489.community.highbond.com/portal/members.aspx?id=18
- **Publisher:** Hays USD 489 / Diligent Community
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Public portal lists Craig Pallister.
  - Pallister's role is shown as "Board Member."
  - Portal links him to Board Retreat, Regular Meeting, Special Board Meeting, and Work Session categories.
  - Other current board/meeting participants visible include Curt Vajnar, Ken Brooks, Jayme Goetz, Ruth Ruder, Derek Yarmer, and Allen Park, with Jess Reling as board clerk and Ron Wilson as superintendent.
  - The "Term:" field is present but blank in the public capture.
- **Issue mapping:** current official status; term caveat.

### s-usd489-diligent-regular-meetings

- **Tier:** primary
- **URL:** https://usd489.community.highbond.com/Portal/MeetingInformation.aspx?Id=358
- **Publisher:** Hays USD 489 / Diligent Community
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Regular Meeting page lists current/recent 2026 meetings including May 12, Apr. 20, Apr. 6, Mar. 9, Feb. 23, Feb. 9, and Jan. 19.
  - Feb. 9, 2026 regular-meeting page includes Craig Pallister in the member list.
  - Embedded agenda document for Feb. 9 includes motions for an activity bus, Hays Middle School kitchen equipment, and Felten asbestos removal.
- **Issue mapping:** official meeting participation; facilities/operations action context.

### s-usd489-diligent-apr27-worksession

- **Tier:** primary
- **URL:** https://usd489.community.highbond.com/Portal/MeetingInformation.aspx?Id=370
- **Publisher:** Hays USD 489 / Diligent Community
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - April 27, 2026 special work session page lists Craig Pallister among members.
  - Confirms public portal remains current after the 2025 election and before May 19, 2026.
- **Issue mapping:** current official status.

### s-ellis-2025-notice-489

- **Tier:** primary
- **URL:** https://www.ellisco.net/DocumentCenter/View/5814/Notice-of-Election-with-Names-489
- **Publisher:** Ellis County Election Officer
- **Document date:** 2025-08-20
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Notice of General School Election for Unified School District 489.
  - Pursuant to K.S.A. 25-2018, election held November 4, 2025.
  - Office: USD 489 Board of Education Member - Regular Term, vote for three.
  - Candidates listed: Kelly Ancar, Ken Brooks, Craig Pallister, Curt C. Vajnar, Meagan Zampieri-Lillpopp.
- **Issue mapping:** election/status; regular-term caveat.

### s-ellis-2025-official-results

- **Tier:** primary
- **URL:** https://www.ellisco.net/DocumentCenter/View/5892/Official-Results-2025-General-Election
- **Publisher:** Ellis County
- **Published/generated:** official report after November 2025 canvass
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Official results for USD 489 Board of Education show Curt C. Vajnar 2,549, Ken Brooks 1,962, Craig Pallister 1,962, Kelly Ancar 1,617, and Meagan Zampieri-Lillpopp 1,302.
  - Total votes cast for the USD 489 contest: 9,422.
  - Search extraction exposed the relevant official-result table; local PDF text extraction was image/corruption-prone.
- **Issue mapping:** election/status; source conflict with unofficial election-night totals.

### s-ksrevisor-25-21a01

- **Tier:** primary
- **URL:** https://ksrevisor.gov/statutes/chapters/ch25/025_021a_0001.html
- **Publisher:** Kansas Office of Revisor of Statutes
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Municipal general elections, including school districts, occur on the Tuesday succeeding the first Monday in November of odd-numbered years.
  - School districts are included in the statute's definition of municipality.
- **Issue mapping:** election-cycle status; off-cycle clarification.

### s-hayspost-2025-election-night

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d
- **Publisher:** Hays Post
- **Published:** 2025-11-05
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Reports two incumbents and former board member Pallister were elected.
  - Uses unofficial election-night totals: Vajnar 2,531; Brooks and Pallister 1,948 each.
  - Describes Pallister as a retired educator and former Hays Middle School principal who served four years on the board and narrowly lost reelection two years earlier.
  - Reports all three winning candidates focused comments on completing bond projects.
  - Says candidates begin new terms in January and results were not final until canvassing.
- **Issue mapping:** election history; bond completion; source-conflict note.

### s-hayspost-2025-q-and-a

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43
- **Publisher:** Hays Post
- **Published:** 2025-10-15
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Q&A lists Pallister as age 72, occupation retired teacher and principal.
  - Pallister described 21 years as middle-school principal, three years as assistant principal, prior bus-driver/teacher/principal experience, and family ties to USD 489.
  - Said he ran again because he wanted to see bond projects through to a positive end.
  - Favored the five-year capital plan while noting later years can change as needs develop.
  - Said board members set policy and bring community voice while administrators and teachers handle day-to-day work.
  - Described budgeting as a year-round process.
  - Said he had no district policy he was running for or against.
  - Stated decision test: whether a vote is good for kids and makes them more successful.
- **Issue mapping:** facilities/bond; governance; budget; student outcomes.

### s-hayspost-2025-sponsored

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/94f59897-4370-450a-b4ed-f5ebbf54a523
- **Publisher:** Hays Post sponsored candidate material
- **Published:** 2025-10-20
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Sponsored article says Pallister announced candidacy for USD 489 Board of Education.
  - Says he previously served as vice president for two one-year terms and president for one one-year term.
  - Says he was principal at Hays Middle School for 21 years, assistant principal for four years, and previously teacher/assistant principal in USD 443.
  - Platform statements include smaller class sizes, more individual attention, course offerings for college/workforce paths, additional counselors, completing facilities, competitive pay/benefits, and state/federal advocacy on special education funding.
  - Provides contact email but no committee/donor/payment details.
- **Issue mapping:** student learning; staffing; facilities; special-education funding; finance caveat.

### s-hayspost-2025-forum

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/e326ecf7-cf47-4f86-8ab8-57f7169f8536
- **Publisher:** Hays Post
- **Published:** 2025-10-07
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Reports all five USD 489 candidates participated in an October 2025 forum.
  - Pallister pointed to the USD 489 Foundation as a grant/resource source.
  - Said the superintendent answers to students, teachers, parents, and the board/community channels.
  - Said bond promises had been delivered and some change orders improved conditions for teachers and students.
  - Discussed resource reallocation for lower-grade class sizes.
  - Framed board relations around voting for what is good for students.
- **Issue mapping:** governance; facilities/bond; class sizes; board collaboration.

### s-hayspost-2023-q-and-a

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab
- **Publisher:** Hays Post
- **Published:** 2023-10-26
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - 2023 candidate questionnaire identifies Pallister as retired teacher/principal, incumbent, vice president two terms and president one term.
  - Supported new class offerings for college-bound and technical/training paths.
  - Described the board role as setting policy and oversight, not making day-to-day operational decisions.
  - Said board's bond role is to review, discuss, oversee, then vote.
  - Candidate-reported no money or in-kind donations from individuals, businesses, groups, or PACs outside the school district.
- **Issue mapping:** student learning; governance; facilities; funding/donor caveat.

### s-hayspost-2023-canvass

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826
- **Publisher:** Hays Post
- **Published:** 2023-11-14
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Reports Pallister lost the fourth USD 489 seat by three votes after the 2023 canvass.
  - Pallister spoke positively about Jayme Goetz and said it had been an honor to work on facilities and the bond issue.
  - Reports canvass board certified the election.
- **Issue mapping:** election history; temperament/board relations; facilities.

### s-hayspost-2023-mascot

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/b03de214-a1e1-44df-8ea5-f597e5e62646
- **Publisher:** Hays Post
- **Published:** 2023-02-22
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - As board president, Pallister supported keeping the Hays High Indians mascot after community input.
  - He supported eliminating racist or hurtful images and said major changes were needed if the district kept the mascot.
  - He did not support adding the Indian mascot at the middle school.
- **Issue mapping:** community identity; student/community climate; dated prior board action.

### s-hayspost-2026-hvac-bus-asbestos

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/8eeba75c-7a82-4bf4-983a-15ce03bd6f7f
- **Publisher:** Hays Post
- **Published:** 2026-02-10
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Board approved a $234,604 activity bus, $20,700 Hays Middle School steamers, and $26,199 Felten asbestos change order.
  - HVAC maintenance agreement with Glassman for Roosevelt and Hays Middle School failed 2-3.
  - Pallister said there are benefits to having a local company maintain equipment.
  - Pallister and Ken Brooks voted for the HVAC contract; Park, Yarmer, and Vajnar voted against.
- **Issue mapping:** facilities/operations; local vendor/maintenance; budget.

### s-hayspost-2026-felten

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/f5e69fbd-0165-4db1-b896-07613f7a31ed
- **Publisher:** Hays Post
- **Published:** 2026-02-25
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Board approved a $5.7 million maximum guaranteed price for Felten Elementary renovations.
  - Article says Felten was the last project to be bid in the current slate of bond-funded projects.
  - Allen Park and Derek Yarmer voted against the Felten contract because they wanted more time.
  - Pallister opposed delay, saying he did not want to hurt students and teachers over a procedural conflict.
- **Issue mapping:** facilities/bond completion; student/staff impact; governance.

### s-hayspost-2026-hvac-contracts

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/0c27e966-61e9-4c00-b6d7-7f37f6d3bba7
- **Publisher:** Hays Post
- **Published:** 2026-02-26
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Board revisited HVAC maintenance and unanimously passed a revised motion including current maintenance through Dec. 31 and a districtwide RFP by late November.
  - Pallister, Brooks, and Ruder initially supported the Glassman agreement motion.
  - Pallister, Brooks, and Ruder opposed delaying district director contract extensions; they then supported a motion to extend contracts, which failed.
  - Pallister voted yes to delay administrator contract extensions until March 9.
- **Issue mapping:** facilities/maintenance; staff/admin retention; governance/process.

### s-hayspost-2026-bathrooms

- **Tier:** secondary
- **URL:** https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede
- **Publisher:** Hays Post
- **Published:** 2026-04-22
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Reports board discussion of bathroom use, vandalism, sensor theft, cleaning, and monitoring at Hays High.
  - Pallister, described as a former Hays Middle School principal, said bathroom issues existed when he was a student and during his years as principal.
  - He said principals would prefer not to monitor bathrooms but do.
- **Issue mapping:** student safety/discipline; operations; administrator perspective.

### s-goodparty-shell

- **Tier:** secondary
- **URL:** https://goodparty.org/candidate/craig-pallister/hays-usd-489-school-board
- **Publisher:** GoodParty.org
- **Accessed:** 2026-05-19
- **Relevant facts/paraphrase:**
  - Unclaimed profile shell for Craig Pallister, Hays USD 489 School Board, election date November 4, 2025.
  - Profile fields were not candidate-filled and should not be used as platform text.
- **Issue mapping:** online presence only.

---

## Official Status Synthesis

Pallister is a current USD 489 Board of Education member. The strongest current official source is the USD 489 Diligent/HighBond members page, which lists "Craig Pallister - Board Member." Ellis County election documents establish that he ran for one of three regular-term USD 489 Board of Education seats in the November 4, 2025 local school election and won with 1,962 official votes after canvass.

The public record reviewed does not place him on a 2026 ballot. Kansas school-district elections are municipal local elections held in November of odd-numbered years. The next regular USD 489 election cycle after 2025 would be 2027 for seats not elected in 2025. Pallister's exact USD 489-posted term expiration was not visible because the Diligent "Term:" field was blank.

## Issue Area Findings

### Facilities, Bond Projects, and Capital Planning

Facilities are the densest issue area. Pallister's 2025 Q&A says he ran to see current bond projects through: Roosevelt, Hays High, the new middle school, O'Loughlin, Wilson/Felten, and the administration building. In 2025 forum coverage, he said bond promises had been delivered and that some change orders improved conditions for teachers and students. In February 2026, he opposed delaying the $5.7 million Felten Elementary contract, saying delay would hurt students and teachers.

Action evidence:
- 2026-02-09 regular meeting agenda included a Felten asbestos change-order motion, activity bus purchase, and Hays Middle School kitchen steamer purchase.
- 2026-02-10 Hays Post reported the board approved the activity bus, steamers, and Felten asbestos change order.
- 2026-02-25 Hays Post reported Pallister supported moving the Felten Elementary contract forward.

### Student Learning, Class Sizes, Course Offerings, and Counselors

Pallister's 2025 sponsored announcement supported smaller class sizes, lower teacher-to-student ratios, more individual attention, new course offerings for college and workforce paths, and additional counselors at all grade levels. His 2023 Q&A similarly supported additional class offerings for college-bound students and students going into technical/training curricula.

Action evidence is mostly stated-position evidence, not post-election votes. The record reviewed does not show a specific 2026 Pallister vote creating new class-size, course-offering, or counselor policy.

### Teacher, Staff, and Administrator Retention

Pallister repeatedly describes teachers, staff, paras, and administrators as central to district success. The 2025 sponsored announcement says the next focus after facilities should be hiring and retaining the best teachers and staff with competitive pay and benefits. In 2023, he said retaining outstanding administrators was key to continual improvement and consistency.

Action evidence:
- 2026-02-26 Hays Post reported Pallister opposed delaying district director contract extensions and supported a motion to extend those contracts, which failed.
- The same report says Pallister voted yes to delay district administrator contract extensions to March 9 so board president Curt Vajnar could be present.

### Board Governance, Policy, and Day-to-Day Administration

Pallister's governance frame is consistent across 2023 and 2025 materials. He says the board sets policy, reviews/oversees, votes, and brings community voice while administrators and teachers handle day-to-day operations. This is reinforced in 2026 bathroom/vandalism coverage, where his comments were grounded in principal experience and the difficulty of monitoring bathrooms.

Action evidence:
- 2025 Q&A: board role stated as policy and community voice, with administrators/teachers handling daily work.
- 2025 forum: superintendent accountability discussed as running through students, teachers, parents, administrators, and board/community channels.
- 2026 bathroom/vandalism article: Pallister contextualized bathroom monitoring as a recurring administrator duty.

### Budget, Funding, and Local Operations

Pallister frames district budgeting as continuous annual planning. In 2019/2025 materials already captured locally, he supported advocacy for adequate K-12 funding and special-education funding. In 2026 HVAC coverage, he argued there are benefits to having a local company maintain specialized district HVAC equipment, then joined unanimous support for a revised maintenance/RFP path.

Action evidence:
- 2026-02-10: Pallister and Brooks voted for a Glassman HVAC maintenance contract that failed 2-3.
- 2026-02-26: revised motion including current maintenance and a districtwide RFP passed unanimously.

### Mascot / Community Identity

This is a dated prior board issue, not a current campaign centerpiece. In February 2023, while serving as board president, Pallister supported keeping the Hays High Indians mascot after community input, supported eliminating racist/hurtful imagery, and did not support extending the Indian mascot to the middle school.

## Funding / Donor Evidence

- No official local campaign-finance report for Pallister's 2025 USD 489 race was located online.
- Hays Post's 2025 sponsored article is paid/promotional candidate material but does not disclose payer, cost, donor, committee, or treasurer.
- In the 2023 Hays Post questionnaire, Pallister said he had received no money or in-kind donations from individuals, businesses, groups, or PACs outside the school district. This is candidate-reported and applies to the 2023 campaign context only.
- GoodParty profile is unclaimed and should not be used for fundraising claims.

## Social / Online Relevance

No verified candidate-controlled social feed was found. The online record is local-media and public-record heavy: USD 489/Diligent official pages, Ellis County election documents, Hays Post candidate Q&As, Hays Post sponsored material, Hays Post meeting coverage, Tiger Media forum coverage, and an unclaimed GoodParty shell.

Because there is no verified public post corpus, there are no reliable follower counts, engagement counts, reposts, likes, comments, or platform-audience patterns to map. Social absence itself is relevant only as a sourcing limitation.

## Source Conflicts

- **Vote totals:** Hays Post election-night reporting and Ellis County unofficial results showed Pallister at 1,948 votes. Ellis County official results after canvass show Pallister at 1,962 votes. Use 1,962 for final/canvassed references and mention 1,948 only as an unofficial election-night figure if needed.
- **Term expiration:** Hays Post says winning candidates begin terms in January and describes comparable seats as four-year terms. Ellis County notice says regular term. USD 489 portal's term field is blank. Do not print a hard expiration date unless the board clerk or another official source confirms it.
- **Campaign finance:** Candidate-reported 2023 no-outside-donation statement is not the same as an official 2025 finance filing.

## Blockers / Could Not Confirm

- Exact official USD 489 term expiration for Pallister.
- Any 2025 campaign-finance totals, donors, expenditures, treasurer, or cash-on-hand.
- Any candidate-controlled campaign website or social-media account.
- Any current public church affiliation.
- Any verified 2026 ballot/candidate status; evidence supports current off-cycle officeholder only.
- Full vote-by-vote official minutes for every 2026 board action; BoardDocs/Diligent pages were available, but signed-minutes extraction was not clean for all meetings.

## Research Statistics

- **Primary source URLs used:** 5
- **Secondary source URLs used:** 11
- **Social/civic shell URLs used:** 1
- **Date range covered:** 2019-10-17 through 2026-05-19, with current-status verification on 2026-05-19
- **Strongest evidence domains:** official current status, 2025 election result, facilities/bond issue, governance philosophy, staffing/retention statements
- **Weakest evidence domains:** campaign finance, candidate-controlled social, faith/church affiliation
