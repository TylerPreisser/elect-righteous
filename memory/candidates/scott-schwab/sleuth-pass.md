# Sleuth Pass — Scott Schwab

**Date**: 2026-05-19  
**Agent**: codex (online-sleuth fallback)  
**Phase / Stage**: Phase 2, Stage 2.a  
**Candidate slug**: scott-schwab  
**Position**: Kansas Secretary of State; Republican candidate for Kansas Governor  
**Election**: kansas-governor-2026

---

## Official Status

- **Current office**: Kansas Secretary of State. The official Secretary of State biography says Schwab was elected in 2018 and re-elected in 2022.
- **Governor race status**: Campaign-controlled site presents him as "Scott Schwab / Governor" and includes "Paid for by Schwab for Governor."
- **Ballot status caveat**: The Kansas Secretary of State candidate-information page says a candidate is not considered filed until the petition or declaration and fee are received by the Secretary of State. The same page lists the 2026 primary filing deadline as **12:00 p.m. Monday, June 1, 2026**. As of this pass on 2026-05-19, the official candidate-list endpoint was JavaScript/bot-check blocked, so I could not independently confirm final ballot placement from the live candidate-list page.
- **Campaign-finance status**: The Kansas Public Disclosure Commission/SOS statewide-office index lists "Schwab, Scott" under **GUBERNATORIAL CANDIDATES** with an Appointment of Treasurer and a 202601 Receipts & Expenditures report.

Primary anchors:
- Kansas SOS candidate information: https://www.sos.ks.gov/elections/candidate-information.html
- Kansas SOS candidate list endpoint (blocked in this environment): https://www.kssos.org/elections/elections_upcoming_candidate.aspx
- Kansas statewide office campaign-finance index: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm
- Schwab campaign site: https://scottschwab.com/
- Kansas SOS biography: https://www.kssos.org/about/schwab-biography.html

---

## Local Research Already Present

Existing local files reviewed:

- `memory/candidates/scott-schwab/raw-dump.md`
- `memory/candidates/scott-schwab/social-harvest.md`
- `memory/candidates/scott-schwab/in-their-own-words.md`
- `memory/candidates/scott-schwab/site-profile.md`
- `ui/src/data/v2/scott-schwab.ts` as read-only context

The local social harvest already captured a compact public platform footprint: campaign site, campaign Facebook, campaign Instagram, personal/campaign X, office X, Kansas SOS YouTube, and LinkedIn URL. It also marked TikTok, Truth Social, Gab, Gettr, Substack, and Reddit as not found in a logged-out public-web check.

Important local caveat: the older raw dump contains faith-assessment prose that is too inferential for Phase 2. For v2, preserve only sourced facts: campaign site self-identification as Christian; funeral/church references only if tied to a cited public source; no claims about sincerity, depth, or heart-state.

---

## Primary-Source Anchors

### Identity / Biography

- **Kansas SOS biography**: Great Bend upbringing, Fort Hays State University, Kansas House service beginning in 2002, Speaker Pro Tempore, Secretary of State election in 2018 and re-election in 2022, NASS presidency and Rodel Fellow selection.
- **Campaign biography**: Similar biography plus campaign framing around business regulation, election law, taxes, rural Kansas, and federal election authority.

Issue mapping: biography and role context; not an issue card by itself.

### Campaign Finance

- **202601 campaign-finance report**: Candidate name Scott J. Schwab; office sought Governor; period 2025-01-01 to 2025-12-31; filed 2026-01-10.
- Summary totals: $1,418,671.56 contributions/receipts; $365,533.06 expenditures; $1,053,138.50 cash on hand; $142.74 in-kind; $1,045,000 other transactions.
- Loan detail: three Schwab loans totaling $1,045,000, including $1,000,000 on 2025-12-18, $10,000 on 2025-07-01, and $35,000 on 2025-06-01.
- Examples of organizational/PAC receipts visible in the filing include Evergy PAC ($2,000), Bankers Association PAC ($1,000), Kansas Automobile Dealers Association PAC ($2,500), Kansas Contractors Association PAC ($4,000), and Bayer PAC ($1,000).

Issue mapping: donor/funding narrative; also relevant to any "campaign viability / self-funding" profile section.

### Election Administration / Voter Rolls

- **Jan. 7, 2026 SOS release**: Schwab announced a legislative agenda on election administration, business services, regulations, and agency modernization.
- **Apr. 9, 2026 SOS release**: Secretary Schwab's voter-roll maintenance bill, HB 2437 / SAVE Kansas Act, became law after veto override.
- **Kansas Legislature HB 2437 page and brief**: official legislative materials describe HB 2437 as establishing the SAVE Kansas Act, authorizing additional resources for verifying voter-registration records, imposing restrictions on some online voter-registration websites, removing disqualified individuals from records, and creating an open-records exemption for certain related information.
- **Apr. 16, 2026 SOS release**: Schwab testified before the U.S. House Committee on House Administration on voter-roll maintenance and said his office proposed the bill.

Issue mapping: core IssueCard for election administration / voter rolls / government records.

### Government Transparency / KORA

- **Hammet v. Schwab / KORA litigation**: KCUR/Kansas News Service reported that the Kansas Court of Appeals ruled in 2022 that Schwab violated KORA by directing a vendor to disable a report feature for provisional-ballot data. This is older than the 2026 campaign, but it is directly tied to his election-administration record and should be retained as a record item with date context.

Issue mapping: record item under election administration / transparency.

---

## Issue-Mapped Leads

### Property Taxes / State Spending

- Campaign site says Schwab would cut taxes and costs for Kansas families and reduce business regulations.
- Hays Post interview, 2026-03-22: Schwab said property taxes were "crushing people"; said he did not think a hard constitutional cap would work; favored all property tax increases going to voters; and described the appraisal process as the problem.
- Same Hays Post article: Schwab said some counties have "mission creep" and should return to what counties are supposed to do.

Issue mapping: taxes / local government / state spending.

### Rural Kansas / Agriculture / Water / Hospitals / Energy

- Campaign site labels one priority "J.E.A.N.S: Jobs, Education, Agriculture, Networking and Sustainability."
- Hays Post interview: Schwab promoted the JEANS plan in Hays; discussed community-college job training, small manufacturing in rural communities, Highway 83 expansion, water regulation plus voluntary conservation, all forms of energy, rural schools, rural hospitals, and agriculture as a seventh of Kansas's economy.
- This is one of the strongest local/Hays-relevant sources because it ties statewide campaign themes to western Kansas concerns.

Issue mapping: rural economic development / agriculture / water / energy / rural services.

### Education / School Choice

- Campaign site says Schwab worked in the Kansas House to bring local control to Kansas schools.
- Free State News transcript of the January 2026 GOP debate records Schwab supporting elimination of the federal Department of Education, school choice/competition, removing cell phones from classrooms, and saying the highest paid person in the building should be the teacher.
- Source caveat: Free State News transcript is not an official transcript; use as secondary transcript evidence unless a campaign video or party transcript is later captured.

Issue mapping: education / school choice / federal-state governance.

### Abortion / Kansas Supreme Court

- Kansas Reflector story republished by Wichita Eagle says six Republican candidates at the January 2026 debate found harmony on reducing abortions and changing Kansas Supreme Court selection.
- Same story quotes Schwab: "It is frustration that the court hates its Legislature," "That's unholy," and "I feel horrible that a young woman can be manipulated to have an abortion, and there's no recourse."
- Kansas Reflector June 2025 story, available in search snippets, reported Schwab said he remained an opponent of abortion and described implantation as the point at which he personally believed constitutional/legal protection should attach. Because direct fetch was blocked, use this carefully and prefer the accessible Wichita Eagle/Kansas Reflector republication for the Jan. 2026 debate.

Issue mapping: abortion / judicial selection.

### Marijuana / Drug Policy

- Wichita Eagle/Kansas Reflector reported that the GOP debate candidates rejected legalization of medicinal or recreational marijuana.
- Free State News transcript attributes a longer marijuana answer to Schwab: FDA-approved research/dispensing only, concern over variable strength, lack of rapid THC testing, and traffic-safety concerns.

Issue mapping: marijuana / drug policy / public safety.

### Immigration / Public Safety / Federal Cooperation

- Campaign site says Schwab would work with the Trump administration on enforcing immigration laws and fully fund public safety.
- Free State News transcript records Schwab saying governors should work with the president regardless of party and that he had worked with CISA, FBI, and Homeland Security on election security.

Issue mapping: immigration / public safety / federal-state relations.

### Guns / Second Amendment

- Campaign site says, "We will protect our Second Amendment rights."

Issue mapping: guns / Second Amendment. No gubernatorial action record found beyond campaign statement.

### Women's Sports / Family / Faith Language

- Campaign site says, "As a Christian, my faith has guided me at home and in my work as Secretary of State" and says he would "protect women's sports" and "strengthen Kansas families."
- Use as candidate-controlled statement only. Do not infer policy details or personal belief beyond the quoted text.

Issue mapping: family policy / gender policy / faith self-description.

---

## Social / Online-Presence Leads

Use only observed public behavior:

- Campaign site links Facebook, X, and Instagram.
- Local social harvest captured Facebook page metadata on 2026-05-11: 1,759 likes and 63 talking about this; page description opened, "Kansas has a decision to make: Which path will we take?"
- Local social harvest captured Instagram metadata on 2026-05-11: 184 followers, 167 following, 57 posts; bio included "2026 Candidate for Kansas Governor."
- Local social harvest captured X profile metadata for @ScottSchwabKS and @KansasSOS, but logged-out access did not expose reliable post-level feed, repost, like, or follow inventory.
- Web re-check on 2026-05-19: Facebook, Instagram, and YouTube were throttled; X loaded only an empty shell. No current post-level engagement should be reported from this re-check.

Issue mapping: social signals belong under campaign identity/election administration only where the account content is actually visible. No likes/follows/comments should be inferred.

---

## Gaps

- Official candidate-list page was JavaScript/bot-check blocked. The filing deadline is June 1, 2026, so final ballot status may not yet be settled.
- No official Kansas GOP debate transcript found. Free State News transcript is useful but should remain a secondary transcript source.
- No post-level Facebook, Instagram, X, YouTube, or LinkedIn content was accessible in the logged-out current re-check.
- No current church membership verification from a church-controlled source was found in this pass.
- No candidate-controlled detailed plan pages were accessible beyond the campaign homepage excerpts and linked priority labels.
- No official endorsements page found on the campaign site during this pass.

---

## Could Not Confirm

- Final certified 2026 Republican primary ballot placement for Schwab as of 2026-05-19.
- Lt. governor running mate, if any.
- Current church membership or attendance from a church-controlled page.
- Post-level social media likes, comments, reposts, follows, or audience responses after the 2026-05-11 local harvest.
- Whether the campaign has published full JEANS and property-tax plan documents separate from the homepage and Hays Post interview.
- Any candidate-controlled statement on Medicaid expansion, foster care, housing, veterans services, or broadband beyond the broad rural/community framing in Hays Post.
