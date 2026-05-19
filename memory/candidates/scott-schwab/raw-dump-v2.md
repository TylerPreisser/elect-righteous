# Raw Dump v2 — Scott Schwab

**Date**: 2026-05-19  
**Agent**: codex (deep-scraper equivalent)  
**Phase / Stage**: Phase 2, Stage 2.b  
**Candidate slug**: scott-schwab  
**Position**: Kansas Secretary of State; Republican candidate for Kansas Governor  
**Election**: kansas-governor-2026

---

## Scope Note

This is an additive Phase 2 scrape. It reads the older local `raw-dump.md`, `social-harvest.md`, `in-their-own-words.md`, `site-profile.md`, and read-only `ui/src/data/v2/scott-schwab.ts`, then refreshes the highest-value current sources for the 2026 governor profile. The focus is primary records, campaign-controlled statements, office records, campaign finance, and local/Hays-relevant issue evidence.

This dump does not repeat every item from the older dossier. It also does not carry forward unsourced faith assessments or inferred belief language from the older raw dump.

---

## Source Tiers Used

- **Primary**: official government pages, campaign-controlled pages, official campaign-finance filings, official legislative bill pages.
- **Secondary**: local/state news coverage, non-official debate transcript, court reporting.
- **Social**: social platforms and public metadata only where visible.

---

## Source Registry

### s-sos-candidate-info

- **Tier**: primary
- **URL**: https://www.sos.ks.gov/elections/candidate-information.html
- **Publisher**: Kansas Secretary of State
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Democratic and Republican candidates run in the primary.
  - National, state, legislative, and judicial candidates file with the Secretary of State.
  - A candidate is not considered filed until the petition or declaration and fee are received.
  - 2026 primary filing deadline is 12:00 p.m. Monday, June 1, 2026.
  - Governor/Lt. Governor is listed among offices to be elected in 2026.
- **Issue mapping**: official status / race scope.

### s-sos-candidate-list-blocked

- **Tier**: primary
- **URL**: https://www.kssos.org/elections/elections_upcoming_candidate.aspx
- **Publisher**: Kansas Secretary of State
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - The linked official candidate-list endpoint returned a JavaScript / not-a-robot gate in this environment.
- **Issue mapping**: official status blocker.

### s-kpdc-statewide-index

- **Tier**: primary
- **URL**: https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Page title: "Kansas State Wide Office / 2026 Election Cycle."
  - Last updated January 22, 2026.
  - Lists "Schwab, Scott" under "GUBERNATORIAL CANDIDATES."
  - Links an AT form and 202601 report for Schwab.
- **Issue mapping**: official campaign-finance status; candidate committee status.

### s-kpdc-schwab-202601

- **Tier**: primary
- **URL**: https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SS_202601.pdf
- **Publisher**: Kansas Public Disclosure Commission / Kansas.gov
- **Accessed**: 2026-05-19
- **Document date**: electronically filed 2026-01-10
- **Relevant facts/paraphrase**:
  - Candidate: Scott J. Schwab.
  - Office sought: Governor.
  - Period: 2025-01-01 through 2025-12-31.
  - Total contributions and other receipts: $1,418,671.56.
  - Total expenditures: $365,533.06.
  - Cash on hand at close of period: $1,053,138.50.
  - In-kind contributions: $142.74.
  - Other transactions: $1,045,000.00.
  - Schedule D shows three Scott Schwab loans: $35,000 on 2025-06-01, $10,000 on 2025-07-01, and $1,000,000 on 2025-12-18.
  - Examples of organizational/PAC receipts found in Schedule A: Evergy PAC $2,000; Bankers Association PAC $1,000; Kansas Automobile Dealers Association PAC $2,500; Kansas Contractors Association PAC $4,000; Bayer PAC $1,000.
- **Issue mapping**: campaign finance / donor funding.

### s-campaign-site

- **Tier**: primary
- **URL**: https://scottschwab.com/
- **Publisher**: Schwab for Governor
- **Accessed**: 2026-05-19
- **Relevant excerpts/paraphrases**:
  - Presents "Scott Schwab / Governor."
  - Biography: grew up in Great Bend, graduated from Fort Hays State University, small business owner, elected to Kansas House in 2002, elected Kansas Secretary of State in 2018 and 2022.
  - Says he championed election-integrity bills including voter ID.
  - Says he served as president of the National Association of Secretaries of State in 2023 and as chairman of the Election Assistance Commission.
  - Quote on campaign frame: "I want to be your Governor to lower costs for families, protect our military bases from communist China, and return to the values and principles that have always guided us."
  - Jobs/taxes statement: as governor he would cut taxes and costs, cut regulations, and bring jobs to rural Kansas.
  - Security statement: would ban communist China from buying land near military bases, fund public safety, work with the Trump administration on immigration-law enforcement, and protect Second Amendment rights.
  - Values statement: "As a Christian, my faith has guided me at home and in my work as Secretary of State"; would protect women's sports and strengthen Kansas families.
  - Paid-for line: Schwab for Governor, Jib Felter, Treasurer, PO Box 2818, Olathe.
- **Issue mapping**: campaign identity; taxes/regulation; rural jobs; election administration; immigration; public safety; guns; family/women's sports; faith self-description.

### s-sos-bio

- **Tier**: primary
- **URL**: https://www.kssos.org/about/schwab-biography.html
- **Publisher**: Kansas Secretary of State
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Current office page identifies Scott Schwab as Kansas Secretary of State.
  - Grew up in Great Bend and graduated from Fort Hays State University.
  - First elected to Kansas House in 2002.
  - Served as Chair of House Elections Committee, Chair of House Financial Institutions Committee, Vice Chair of Taxation, Vice Chair of Commerce and Labor, and Speaker Pro Tempore.
  - Elected Secretary of State in 2018 and re-elected in 2022.
  - Office priorities include support and guidance to county election officials, business filing system improvement, IT security, and election integrity.
  - Served as NASS President and was selected a Rodel Fellow.
- **Issue mapping**: biography; election administration record.

### s-sos-jan2026-agenda

- **Tier**: primary
- **URL**: https://www.sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html
- **Publisher**: Kansas Secretary of State
- **Published**: 2026-01-07
- **Accessed**: 2026-05-19
- **Relevant excerpts/paraphrases**:
  - Announced a legislative agenda to improve election administration, strengthen business services, and reduce costs.
  - Schwab quote: "Our approach is strategic."
  - Agenda items: voter roll maintenance, secure data checks, voter-registration data protections, signature verification clarification, election-law cleanup, regulatory modernization, expanded online filings, reduced fees, and combating business fraud.
  - Schwab quote: "Good government isn't about how much government does"; "It's about making smart, practical improvements that save money and serve Kansans better."
- **Issue mapping**: election administration; business services; agency modernization; regulatory process.

### s-sos-apr2026-hb2437-release

- **Tier**: primary
- **URL**: https://www.sos.ks.gov/media/press-releases/2026/04-09-26-secretary-schwabs-voter-roll-maintenance-bill-becomes-law-after-veto-override.html
- **Publisher**: Kansas Secretary of State
- **Published**: 2026-04-09
- **Accessed**: 2026-05-19
- **Relevant excerpts/paraphrases**:
  - Says HB 2437 was Secretary Schwab's primary election-policy initiative.
  - Says the bill became law after the Legislature overrode Governor Kelly's veto.
  - Lists tools: DMV change-of-address records, expanded Social Security Administration Death Master File access, family affidavits with proof for voter death, twice-yearly de-duplication, quarterly DMV residence data review, SAVE database comparison with legislative reporting, and public-release restriction for unverified/preliminary data.
  - Schwab quote: "This legislation reflects our commitment to maintaining accurate voter rolls while protecting the rights of every eligible Kansas voter for decades to come."
- **Issue mapping**: voter roll maintenance; voter privacy; election administration; public records.

### s-sos-apr2026-congress-testimony

- **Tier**: primary
- **URL**: https://www.sos.ks.gov/media/press-releases/2026/04-16-26-secretary-scott-schwab-testifies-before-congress-regarding-voter-roll-maintenance.html
- **Publisher**: Kansas Secretary of State
- **Published**: 2026-04-16
- **Accessed**: 2026-05-19
- **Relevant excerpts/paraphrases**:
  - Says Schwab testified before the U.S. House Committee on House Administration on Kansas voter-roll maintenance practices and new data tools.
  - Search-accessible text quotes Schwab saying he was proud his office proposed the SAVE Kansas Act and that DMV, KDHE, KDADS, and DCF data would be shared to improve voter-roll accuracy.
- **Issue mapping**: election administration; federal testimony.

### s-ksleg-hb2437

- **Tier**: primary
- **URL**: https://www.kslegislature.gov/li/b2025_26/measures/hb2437/
- **Publisher**: Kansas Legislature
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Bill page description: establishing the SAVE Kansas Act, authorizing additional resources for verifying voter registration records, imposing restrictions on websites that can accept and transmit voter-registration applications, removing disqualified individuals from records, and providing an open-records request exemption for certain related information.
- **Issue mapping**: voter-roll law; online voter-registration restrictions; records exemption.

### s-ksleg-hb2437-brief

- **Tier**: primary
- **URL**: https://www.kslegislature.gov/documents/view-leg/?apn=b2025_26%2Fds_docs_li%2Fccrb_hb2437_02_03240800.pdf
- **Publisher**: Kansas Legislature
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Conference committee report brief says HB 2437 would enact the SAVE Kansas Act concerning voter-registration record maintenance and restrictions for online voter-registration websites.
  - It says proponent testimony in House committee came from a representative of the Office of the Secretary of State, who said federal law mandates voter-roll maintenance and the bill would improve maintenance procedures and ensure voter privacy.
- **Issue mapping**: voter-roll maintenance; legislative process.

### s-hayspost-jeans

- **Tier**: secondary
- **URL**: https://hayspost.com/posts/1eca7cdb-2b48-400f-a610-7af08aff7ee8
- **Publisher**: Hays Post
- **Published**: 2026-03-22
- **Accessed**: 2026-05-19
- **Relevant excerpts/paraphrases**:
  - Reports Schwab was in Hays promoting the Jobs, Education, Agriculture, Networking and Sustainability plan.
  - Schwab quote: "Property taxes are crushing people."
  - Schwab quote: "I don't think the problem is the mill. I think it's the appraisal process."
  - Schwab said a hard cap on property taxes in the Kansas Constitution would not work; quote: "You can't put a static cap on a dynamic market."
  - Schwab said he favored all property tax increases going to voters.
  - Schwab quote on local tax questions: "If they want it, they'll vote for it. If they don't, then it's OK to hold those local units of government accountable."
  - Schwab said some counties have "mission creep."
  - Schwab said he supported a combination of water regulation and voluntary conservation.
  - Article states agriculture accounts for about 85% of groundwater consumption; Schwab did not address ag use in detail.
  - Schwab discussed community-college job training, local manufacturing, Highway 83 four-laning, all forms of energy production, rural schools, rural hospitals, and leveraging Kansas agriculture.
- **Issue mapping**: property taxes; local government accountability; water; agriculture; rural hospitals; rural schools; energy; workforce.

### s-wichitaeagle-jan2026-gop-debate

- **Tier**: secondary
- **URL**: https://www.kansas.com/news/politics-government/election/article314520177.html
- **Publisher**: Wichita Eagle republication of Kansas Reflector
- **Published**: 2026-01-30
- **Accessed**: 2026-05-19
- **Relevant excerpts/paraphrases**:
  - Six Republican candidates participated in a Kansas GOP gubernatorial debate; Vicki Schmidt was absent and objected to the state party's $10,000 requirement.
  - Schwab quote on experience: "Having experience to understand the terrain has always been a plus in America."
  - Story says the candidates found common ground on reducing abortions, rejecting marijuana legalization, and endorsing a proposed amendment to elect Kansas Supreme Court justices.
  - Schwab abortion/court quote: "It is frustration that the court hates its Legislature"; "That's unholy"; "I feel horrible that a young woman can be manipulated to have an abortion, and there's no recourse."
- **Issue mapping**: abortion; judicial selection; marijuana; campaign frame / experience.

### s-freestate-debate-transcript

- **Tier**: secondary
- **URL**: https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/
- **Publisher**: Free State News
- **Published**: 2026-03 (page crawl showed transcript part 2)
- **Accessed**: 2026-05-19
- **Relevant excerpts/paraphrases**:
  - Transcript attributes to Schwab support for electing justices statewide and concern that current Kansas Supreme Court selection cedes power to lawyers.
  - Education: transcript attributes to Schwab support for eliminating the federal Department of Education, school choice/competition, removing cell phones from public classrooms, and making teachers the highest-paid person in the building.
  - Marijuana: transcript attributes to Schwab support for research and FDA-approved dispensing but opposition to medical/recreational legalization in current form, citing strength variability and lack of rapid THC testing.
  - Immigration/public safety: transcript attributes to Schwab a federal-cooperation frame, saying governors should work with the president regardless of party and referencing CISA, FBI, and Homeland Security election-security work.
  - Energy/rural manufacturing: transcript attributes to Schwab a broad "every resource" energy posture and tie to manufacturing costs and rural opportunities.
  - Property taxes: transcript attributes to Schwab a closing line about fixing the appraisal process and avoiding another real estate bubble.
- **Source caveat**: Not an official transcript. Use only as secondary transcript evidence unless campaign video or state-party transcript is later captured.
- **Issue mapping**: education; marijuana; immigration; energy; property taxes; judicial selection.

### s-kcur-kora-2022

- **Tier**: secondary
- **URL**: https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents
- **Publisher**: KCUR / Kansas News Service
- **Published**: 2022-07-22
- **Accessed**: 2026-05-19
- **Relevant excerpts/paraphrases**:
  - Reports Kansas Court of Appeals ruled Schwab broke state law by taking action to prevent provisional-ballot information from becoming public.
  - Reports Schwab told a private company in 2020 to switch off a software feature that gave the office easy access to provisional-ballot data.
  - Court quote as reported by KCUR: "That action — choosing to conceal rather than reveal public records — violates KORA."
  - Reports the court concluded that by turning off report capability, the secretary denied reasonable public access to the record and information within it.
- **Issue mapping**: election administration; transparency; public records record item.

### s-findlaw-hammet-v-schwab

- **Tier**: primary
- **URL**: https://caselaw.findlaw.com/court/ks-court-of-appeals/2180584.html
- **Publisher**: FindLaw mirror of Kansas Court of Appeals opinion
- **Accessed**: 2026-05-19
- **Relevant facts/paraphrase**:
  - Case caption: Hammet v. Schwab, Kansas Court of Appeals, 2022.
  - Search-accessible summary says the case concerned whether provisional-ballot report functionality/data was public under KORA and rejected a "functionality exception."
- **Issue mapping**: public records / transparency primary-law anchor.

### s-social-harvest-local

- **Tier**: social
- **URL**: local file `memory/candidates/scott-schwab/social-harvest.md`
- **Publisher**: Elect Righteous local harvest
- **Captured**: 2026-05-11
- **Relevant facts/paraphrase**:
  - Campaign site found and linked Facebook, X, Instagram.
  - Campaign Facebook page metadata captured: 1,759 likes and 63 talking about this.
  - Campaign Instagram metadata captured: 184 followers, 167 following, and 57 posts.
  - @ScottSchwabKS and @KansasSOS X profiles found, but logged-out capture did not expose dependable post-level inventory.
  - YouTube office channel found.
  - LinkedIn profile URL identified but login wall limited details.
  - TikTok, Truth Social, Gab, Gettr, Substack, and official Reddit account not found.
- **Issue mapping**: public platform footprint; social metadata only.

---

## Issue Notes

### 1. Official Race Status / Ballot Caveat

**What is confirmed**:

- Campaign-controlled site and state campaign-finance materials identify Schwab as a governor candidate.
- The 202601 filing lists office sought as Governor.
- The statewide-office campaign finance index lists Schwab under gubernatorial candidates.

**What is not confirmed**:

- Final official ballot placement as of 2026-05-19. The SOS page says the filing deadline is June 1, 2026 and that candidates are not considered filed until declaration/petition and fee are received. The official candidate list endpoint was blocked by a JS/bot gate.

**Issue mapping**: This is a profile status note, not a voter issue card.

---

### 2. Election Administration / Voter Rolls / Transparency

**Stated / campaign-controlled**:

- Campaign site says Schwab "championed several election integrity bills that are now state law, including requiring voter ID."
- Campaign site says he opposed federal legislation that would eliminate voter ID, use tax dollars for political campaigns, and federalize state elections.

**Official actions / records**:

- Jan. 7, 2026 office release: agenda to improve election administration, voter-roll maintenance, secure data checks, voter-registration data protections, signature verification clarification, and election-law cleanup.
- Apr. 9, 2026 office release: HB 2437 became law after veto override; Schwab's office called it his primary election-policy initiative.
- Kansas Legislature page: HB 2437 / SAVE Kansas Act concerns voter-registration record maintenance, online voter-registration website restrictions, removal of disqualified individuals, and an open-records exemption for certain records.
- Apr. 16, 2026 office release: Schwab testified before Congress on voter-roll maintenance.

**Record item**:

- 2022 KORA case: Kansas Court of Appeals ruled that Schwab violated KORA by disabling access to a provisional-ballot report function. Keep with date context: this predates the 2026 campaign but directly concerns his election-administration record.

**Narrative note**:

- This issue has both positive agency-performance claims and a transparency/legal record. Present side by side without resolving motive.

---

### 3. Taxes / Appraisals / Local Government Accountability

**Stated**:

- Campaign site: lower costs, cut taxes, cut regulations.
- Hays Post: property taxes are "crushing people"; appraisal process is the problem; hard constitutional cap would not work; all property tax increases should go to voters.

**Issue detail**:

- Schwab's property-tax frame is not simply "cap everything." He rejected a hard static constitutional cap in the Hays Post interview and instead emphasized appraisal process and voter approval for increases.

**Narrative note**:

- Useful gap to avoid: do not describe him as supporting a hard cap; he explicitly said a static cap on a dynamic market would not work.

---

### 4. Rural Kansas / Agriculture / Water / Hospitals / Energy

**Stated**:

- Campaign site priority label: JEANS, "Jobs, Education, Agriculture, Networking and Sustainability."
- Hays Post: community-college training for local jobs; small manufacturers in rural communities; Kansas as agricultural epicenter; U.S. Highway 83 four-laning; water regulation plus voluntary conservation; all forms of energy; rural communities need to keep schools and hospitals; agriculture is a seventh of Kansas's economy.

**Source-specific caveat**:

- Hays Post noted agriculture accounts for about 85% of groundwater consumption and said Schwab did not address ag water use in detail in that interview. This is a useful precision point for any water-policy card.

**Narrative note**:

- This is the strongest local/Hays relevance source. It gives enough to build an issue card on rural economic development, but not a fully detailed water plan.

---

### 5. Education / School Choice

**Stated**:

- Campaign site says Schwab worked in the Kansas House to bring local control and funding/control to Kansas schools.
- Free State News debate transcript attributes to Schwab support for ending the federal Department of Education, school choice/competition, removing cell phones from classrooms, and teacher pay priority.

**Caveat**:

- No official transcript found. Use Free State News as secondary transcript only.

---

### 6. Abortion / Judicial Selection

**Stated**:

- Wichita Eagle/Kansas Reflector: Schwab and other GOP debate participants sought to reduce abortions and supported a judicial-selection amendment.
- Quote from debate coverage: "I feel horrible that a young woman can be manipulated to have an abortion, and there's no recourse."

**Context**:

- Debate coverage also describes the 2019 Kansas Supreme Court bodily-autonomy ruling and the 2022 defeat of the constitutional amendment that would have nullified that court decision.

**Narrative note**:

- The issue is intertwined with judicial selection in Schwab's debate language; do not separate entirely if the later card uses the Jan. 2026 debate.

---

### 7. Marijuana / Drug Policy

**Stated**:

- Wichita Eagle/Kansas Reflector: GOP debate participants rejected medical or recreational marijuana legalization.
- Free State News transcript: Schwab supports research and FDA-approved dispensing, but not medical/recreational legalization as currently proposed; he cited variable product strength and lack of rapid THC testing.

**Caveat**:

- Use accessible debate story as main source for general stance; transcript for details with caveat.

---

### 8. Immigration / Public Safety / Guns

**Stated**:

- Campaign site: work with the Trump administration on immigration-law enforcement; fully fund public safety; protect Second Amendment rights.
- Free State News transcript: Schwab said governors should work with the president regardless of party and referenced federal partnerships with CISA, FBI, and Homeland Security in election security.

**Narrative note**:

- No gubernatorial action record exists because he is not governor. Treat as campaign statement and related official experience with federal agencies, not as implemented governor policy.

---

### 9. Family / Women's Sports / Faith Self-Description

**Stated**:

- Campaign site: "As a Christian, my faith has guided me at home and in my work as Secretary of State."
- Campaign site: would "protect women's sports" and "strengthen Kansas families."

**Boundary**:

- Do not infer denomination, current church membership, or policy details beyond campaign text unless a primary source is added.

---

## Social / Online Presence

**Local harvest, captured 2026-05-11**:

- Campaign site: found.
- Facebook: https://www.facebook.com/SchwabforGovernor; metadata 1,759 likes / 63 talking about this; post inventory limited.
- Instagram: https://www.instagram.com/scottschwabks/; metadata 184 followers / 167 following / 57 posts; post inventory limited.
- X: https://x.com/ScottSchwabKS and https://x.com/KansasSOS; profile metadata accessible, post inventory limited.
- YouTube: https://www.youtube.com/@kansassecretaryofstate; office channel metadata accessible.
- LinkedIn: https://www.linkedin.com/in/scott-schwab-8306713/; URL identified, login wall limited details.
- No clear TikTok, Truth Social, Gab, Gettr, Substack, or official Reddit account surfaced.

**Current re-check, 2026-05-19**:

- Facebook, Instagram, and YouTube fetches were throttled.
- X opened an empty shell without reliable post content.
- Therefore, no new post-level likes/comments/reposts/follows are added.

**Issue mapping**:

- Keep social as platform-footprint metadata unless post-level content is later captured.

---

## Donor / Funding Notes

**Summary**:

- The campaign was substantially self-financed by the end of 2025. Reported receipts were $1,418,671.56 and Schedule D reported $1,045,000 in Schwab loans. Cash on hand was $1,053,138.50.

**Examples of max or notable individual entries visible near the top of Schedule A**:

- Jenni Prochnow: $4,000, homemaker.
- Frankie Giudicessi: $4,000, builder.
- Vamshi Vaddiraja: $4,000, co-founder and CEO.
- Dastagir Nobel: $4,000, CEO.
- Cory Davis: $4,000, owner/CEO.
- Scott Foote: two $4,000 entries visible on the same page sequence; needs aggregation check before using as total.

**Examples of PAC/organizational receipts visible in the filing**:

- Evergy PAC: $2,000.
- Bankers Association PAC: $1,000.
- Kansas Automobile Dealers Association PAC: $2,500.
- Kansas Contractors Association PAC: $4,000.
- Bayer PAC: $1,000.

**Expenditure notes**:

- Schedule C includes Republican Governors Association entries of $35,000 and $35,000 on 2025-06-24, Kansas Young Republicans event sponsorship $2,000, and KS GOP summer convention $5,000.

**Caveat**:

- The PDF is 235 pages. This pass captured high-salience examples and totals but did not aggregate every contributor by occupation or industry. Do not present industry percentages without a separate spreadsheet extraction.

---

## Could Not Confirm / Blockers

- Official final ballot placement because the SOS candidate-list endpoint was JS/bot-check blocked and the filing deadline had not yet arrived.
- Lt. governor running mate.
- Full current social feed, likes, comments, reposts, follows, or engagement beyond local 2026-05-11 profile metadata.
- Current church membership from a church-controlled source.
- Official debate transcript or video for the January 2026 GOP governor debate.
- Full campaign plan documents for JEANS and property taxes separate from the campaign homepage and Hays Post coverage.
- Detailed candidate-controlled positions on Medicaid expansion, foster care, housing affordability, veterans services, or broadband.

---

## Statistics

- **Primary/government/campaign sources checked**: 11
- **Secondary sources checked**: 5
- **Social/platform endpoints checked or inherited from local harvest**: 12
- **Unique URLs captured in this v2 pass**: 18
- **Time period covered by refreshed sources**: 2022-07-22 through 2026-05-19
