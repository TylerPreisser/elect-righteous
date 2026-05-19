# Alaina Cunningham - Raw Dump v2 (P2.b deep scrape)

- **Candidate**: Alaina Cunningham (slug: `alaina-cunningham`)
- **Office**: Hays Vice Mayor / Hays City Commissioner
- **Election context**: Current/off-cycle local official. Not a 2026 Hays City Commission ballot candidate in official Ellis County 2026 filings.
- **Compiled**: 2026-05-19
- **Agent**: Worker 36, deep-scraper equivalent
- **Inputs read**: `IDENTITY.md`, `plans/v2-orchestration.md`, `agents/deep-scraper/PROMPT.md`, `agents/narrative-writer/PROMPT.md`, existing `memory/candidates/alaina-cunningham/*`, and `ui/src/data/v2/alaina-cunningham.ts`.

---

## Primary-tier Corrections / Guardrails

1. **Current status**: The City of Hays lists Cunningham as vice mayor, not merely commissioner. Official January 8, 2026 minutes show she was elected vice mayor by the commission.
2. **Election cycle**: Ellis County's current 2026 candidate filing PDF does not list Hays City Commission as a 2026 primary race. Treat this profile as current/off-cycle, not an active 2026 candidate campaign.
3. **City vs. county budget**: The official City of Hays September 2025 minutes show a revenue-neutral 2026 city budget at 24.382 mills. Do not conflate this with Ellis County budget or mill-levy actions.
4. **Source contamination**: Existing `ui/src/data/v2/alaina-cunningham.ts` includes Aaron Cunningham, Aaron's LinkedIn/Avvo/about.me, and broad multi-official source spillover. Those source IDs should not be used for Alaina without cleaning.
5. **Social evidence**: No candidate-controlled public campaign social feed was verified. Existing social-harvest observations should be integrated only as "public online absence / local-media attribution," not as post-level social behavior.

---

## Official Status and Election Records

### Current office
- **Finding**: City of Hays current commission page lists Mason Ruder as mayor and Alaina Cunningham as vice mayor.
- **Primary source**: https://www.haysusa.com/269/City-Commission
- **Accessed**: 2026-05-19
- **Notes**: The page also states Hays uses a commission-manager form of government, that the commission is a policy-making body, and that commissioners are elected at large every two years.

### January 8, 2026 reorganization
- **Finding**: Official minutes show the governing body met January 8, 2026. Cunningham moved to elect Ruder mayor; Ruder then moved to elect Cunningham vice mayor. Both votes passed with Ruder, Cunningham, Musil, Jacobs, and Vilaysing voting aye.
- **Primary source**: https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01082026-1589
- **Accessed**: 2026-05-19
- **Use**: Strong status/role evidence.

### 2026 filings
- **Finding**: Ellis County's 2026 candidate filing PDF lists 2026 primary filings, including Ellis County Commission District 1 and other local positions, but not Hays City Commission and not Alaina Cunningham.
- **Primary source**: https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings
- **Accessed**: 2026-05-19
- **Use**: Off-cycle status evidence.

### 2023 election
- **Finding**: Ellis County posts the official 2023 City/School General Election results PDF. The PDF is image-only in local text extraction. Secondary coverage reports Cunningham won a four-year Hays City Commission seat with about 26.74-27 percent of the vote.
- **Primary sources**:
  - https://www.ellisco.net/435/Election-Results
  - https://www.ellisco.net/DocumentCenter/View/5815/OFFICIAL-RESULTS-2023-CITY-SCHOOL-GENERAL-ELECTION
- **Secondary sources**:
  - https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31
  - https://tigermedianet.com/?p=76291
- **Use**: Election-history evidence. Use secondary source for readable vote share.

---

## Primary-tier Action Evidence

### A1 - Elected vice mayor by the Hays City Commission
- **Date**: 2026-01-08
- **Issue mapping**: Official role / governance status
- **Body**: At the January 8, 2026 reorganization meeting, Mayor Ruder moved and Commissioner Vilaysing seconded that Cunningham be elected vice mayor. The vote was unanimous among the five listed commissioners.
- **Primary sources**:
  - https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01082026-1589
  - https://www.haysusa.com/269/City-Commission
- **Secondary corroboration**:
  - https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08
- **Confidence**: HIGH.

### A2 - Voted for the 2026 Hays city revenue-neutral budget
- **Date**: 2025-09-11 meeting, published in September 25, 2025 packet
- **Issue mapping**: Budget / taxes / city services
- **Body**: September 2025 official minutes state the city identified a path to stay revenue-neutral at 24.382 mills. The motion to approve the amended 2026 budget with the revenue-neutral rate passed with Cunningham listed among the ayes.
- **Primary source**:
  - https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_09252025-1571
- **Secondary corroboration**:
  - https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69
- **Candidate quote from secondary**: "You brought us a constrained budget which is what we asked for."
- **Confidence**: HIGH for vote and rate; HIGH for quote as secondary.

### A3 - Voted for nuisance abatement actions
- **Date**: 2025-09-11 meeting, published in September 25, 2025 packet
- **Issue mapping**: City services / code enforcement
- **Body**: The September 2025 minutes show Cunningham moved Resolution No. 2025-017 for abatement at 515 East 11th Street; she also seconded Resolution No. 2025-019 for abatement at 231 East 12th Street. Both votes passed with Cunningham in the ayes.
- **Primary source**:
  - https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_09252025-1571
- **Confidence**: HIGH.

### A4 - Voted for Exit 157 24-7 TIF and CID actions
- **Date**: 2026-04-09 minutes, included in April 23, 2026 packet
- **Issue mapping**: Economic development incentives / sales-tax districts
- **Body**: The April 9 minutes show Cunningham present by Zoom and voting aye on Ordinance No. 4097 adopting the TIF project plan/development agreement and Ordinance No. 4098 establishing the CID and levying a 2.0% CID sales tax for the Exit 157 24-7 development.
- **Primary source**:
  - https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_04232026-1609
- **Confidence**: HIGH.

### A5 - Voted for Pioneer Run affordable-housing IRB resolution
- **Date**: 2026-04-23 minutes, included in May 14, 2026 packet
- **Issue mapping**: Housing / development incentives
- **Body**: The April 23 minutes show Cunningham present and voting aye on Resolution No. 2026-005, an intent to issue Industrial Revenue Bonds for the Pioneer Run project by Overland Property Group. The packet describes the project as an affordable multifamily complex and says the IRB resolution can assist the developer's Low Income Housing Tax Credit application by granting up to 10 additional points.
- **Primary source**:
  - https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_05142026-1611
- **Confidence**: HIGH.

### A6 - Supported LIHTC fee-waiver letters for affordable-housing projects
- **Date**: 2026-04-23 minutes, included in May 14, 2026 packet
- **Issue mapping**: Housing / affordability
- **Body**: The April 23 minutes show Cunningham voting aye on the consent agenda that included letters of support to waive development fees for eligible Low Income Housing Tax Credit projects in 2026. The packet includes letters for Pioneer Run, Willow Grove, Wheatland Commons, and Magnolia Estates; each letter says the proposed project would fill a substantial housing need and cites a city housing study identifying 189 low-income units needed by 2030.
- **Primary source**:
  - https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_05142026-1611
- **Confidence**: HIGH.

---

## Secondary-tier Stated Positions and Quotes

### Water / R9
- Hays Post candidate Q&A, October 25, 2023: Cunningham named securing a sustainable water source as one of the top issues, praised conservation, and described R9 as the framework for a long-term pipeline supply. Source: https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055
- Hays Post, August 29, 2025: Cunningham said, "This is about sustainability and survival," and "without it, we don't survive." Source: https://hayspost.com/posts/72cef8d3-79bf-4085-b070-bccbdc589f9d
- Hays Post, November 15, 2023: Cunningham asked how many property owners would need to be worked with along the 67-mile R9 pipeline. Source: https://hayspost.com/posts/9c981d45-80ed-4135-b051-8be7b0481957

### Housing, growth, and incentives
- Hays Post candidate Q&A, October 25, 2023: Cunningham tied growth to housing shortage, diversified housing, developer incentives, workforce, youth retention, retiree needs, and a possible new community center. Source: https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055
- Hays Post candidate forum, October 18, 2023: Housing and business development dominated the forum; Cunningham identified retaining young people as a top priority. Source: https://hayspost.com/posts/686c41a0-31e3-415a-8fdf-3df810e7f5be
- Hays Post development agreements: Cunningham said, "We've all agreed that growth is what we want," and supported giving the first developer a way to recoup infrastructure costs. Source: https://hayspost.com/posts/eeb37c70-d05e-427e-bdb6-b673010bd8af
- Hays Post Agiliti incentives, November 2025: Cunningham said the economic benefit from Agiliti's expansion made the incentive valuable to the community. Source: https://hayspost.com/posts/4d49c8ec-b445-4b28-a49c-d154c709104f
- Hays Post incentives story: Cunningham said conversations with developers showed that "without incentives, we just can't get anyone here." Source: https://hayspost.com/posts/a308442f-a0fc-49ea-b6a1-b905513a368b

### Budget, taxes, and services
- Hays Post 2026 budget: Cunningham told staff, "You brought us a constrained budget which is what we asked for." The article describes the city budget as $54.3 million and revenue-neutral at 24.382 mills. Source: https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69
- Hays Post property-tax-relief discussion: Cunningham warned, "When we eliminate sources of funding, we're just shifting the burden." Source: https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9
- Hays Post April 2026 budget-prep coverage: Cunningham said residents should know early that property-tax caps can affect city services and amenities. Source: https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb
- Hays Post fireworks survey: Cunningham called fireworks a "hot topic" and asked residents to provide feedback. Source: https://hayspost.com/posts/26608269-25e1-4f29-b80f-d2edbb3bba3d

### Biography / civic involvement
- Hays Post appointment story: Cunningham was unanimously appointed to fill Michael Berges' vacated city commission seat and was described as a registered nurse with Downtown Hays, HaysMed Foundation, Hays Academic Booster Club, and O'Loughlin PTA involvement. Source: https://hayspost.com/posts/c8cd14ed-94b7-4507-8a9c-ad71038ac5b6
- Tiger Media candidate profile: Cunningham said she moved to Hays in August 2010, has three children, and is a practicing registered nurse and group fitness instructor. Source: https://tigermedianet.com/?p=75270
- HaysMed Center for Health Improvement page: lists Alaina Cunningham under group fitness instructors. Source: https://www.haysmed.com/services/chi-what-we-offer/
- Downtown Hays board page: lists Alaina Cunningham as a 2023 emeritus board member. Source: https://www.downtownhays.com/staff-and-board

---

## Social / Online Inventory

| Platform/source | Status | Use in narrative |
|---|---|---|
| Official City of Hays page | Found | Use as current status and official role source. |
| City agenda/minutes/video links | Found | Use for votes, attendance, and role actions. |
| Hays Post / Tiger Media | Found | Use for direct quotes and extractable context when official minutes are silent. |
| Personal Facebook | Found in prior local harvest, limited | Do not cite for issue claims; logged-out public content not reviewable. |
| Campaign Facebook/page | Not found | Absence only. |
| LinkedIn | Ambiguous | Do not use; possible false attribution. |
| X/Twitter | Not found | Absence only. |
| Instagram/TikTok/YouTube/Bluesky/Threads/Truth Social/Gab/Gettr/Substack/Medium/Reddit | Not found | Absence only; no verified candidate-controlled messaging. |

No verified social-post engagement metrics were available. The highest visible public attention metric remains electoral: the 2023 Hays City Commission result reported by Hays Post/Tiger Media, anchored to Ellis County's official results page/PDF.

---

## Campaign Finance / Donor Information

### What was checked
- Kansas campaign-finance data portal: https://www.kansas.gov/campaign-finance/
- Kansas Public Disclosure Commission campaign-finance overview: https://ethics.kansas.gov/campaign-finance/
- Kansas Secretary of State campaign-finance filing overview: https://sos.ks.gov/elections/campaign-finance-ethics-filings.html
- Ellis County candidate filing/election pages.

### Finding
No clean online donor list, campaign-finance total, committee report, or itemized contribution record for Alaina Cunningham was located.

### Filing context
Kansas Public Disclosure Commission guidance says local candidates file appointment-of-treasurer forms with the county clerk/county election commissioner. Kansas statute and guidance indicate local candidate reports are filed with the county election officer. The online KPDC data portal primarily exposes state-level race categories in its public interface. Therefore, the proper narrative is "not available in reviewed online sources," not "none exists."

### Could not confirm
- Whether Cunningham filed an affidavit of exemption.
- Whether she received or spent above reporting thresholds.
- Any donor names, amounts, PAC support, or independent expenditures.

---

## Issue Card Recommendations

1. **Water and R9 long-term supply**
   - Stated evidence: 2023 Q&A, 2025 R9 survival quote.
   - Action evidence: R9 implementation question; city-level continuing attention to R9. No primary roll-call R9 vote located in this pass for Cunningham specifically.
   - Gap: strongest direct Cunningham water evidence is secondary.

2. **Housing, workforce growth, and development incentives**
   - Stated evidence: 2023 Q&A/forum; development-agreement quotes; incentive quotes.
   - Action evidence: April 2026 TIF/CID votes, Pioneer Run IRB vote, LIHTC fee-waiver support letters.
   - Gap: none material for action evidence; official minutes anchor recent votes.

3. **Budget, taxes, and city services**
   - Stated evidence: constrained-budget quote, property-tax-burden quote, fireworks/resident-feedback quote.
   - Action evidence: 2026 revenue-neutral budget vote, nuisance abatement motions, financial statement approvals.
   - Gap: city budget action is clean; broader tax-policy views are mostly secondary coverage.

## Blockers / Could Not Confirm

- Campaign donor/funding data not located online.
- Personal Facebook was not publicly reviewable; no social-post inventory or engagement metrics.
- LinkedIn attribution conflict unresolved.
- Official Ellis County 2023 results PDF is image-only for local extraction.
- No candidate-controlled campaign website found.
- No current church affiliation found in public sources.

## Source List

Primary:
- https://www.haysusa.com/269/City-Commission
- https://www.haysusa.com/AgendaCenter
- https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01082026-1589
- https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_09252025-1571
- https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_04232026-1609
- https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_05142026-1611
- https://www.ellisco.net/626/Candidate-Filings
- https://www.ellisco.net/DocumentCenter/View/5736/2026-Candidate-Filings
- https://www.ellisco.net/435/Election-Results
- https://www.ellisco.net/DocumentCenter/View/5815/OFFICIAL-RESULTS-2023-CITY-SCHOOL-GENERAL-ELECTION
- https://haysusa.com/Archive/ViewFile/Item/128
- https://www.kansas.gov/campaign-finance/
- https://ethics.kansas.gov/campaign-finance/
- https://sos.ks.gov/elections/campaign-finance-ethics-filings.html

Secondary:
- https://hayspost.com/posts/c8cd14ed-94b7-4507-8a9c-ad71038ac5b6
- https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055
- https://tigermedianet.com/?p=75270
- https://hayspost.com/posts/686c41a0-31e3-415a-8fdf-3df810e7f5be
- https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31
- https://tigermedianet.com/?p=76291
- https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08
- https://hayspost.com/posts/9c981d45-80ed-4135-b051-8be7b0481957
- https://hayspost.com/posts/72cef8d3-79bf-4085-b070-bccbdc589f9d
- https://hayspost.com/posts/eeb37c70-d05e-427e-bdb6-b673010bd8af
- https://hayspost.com/posts/4d49c8ec-b445-4b28-a49c-d154c709104f
- https://hayspost.com/posts/a308442f-a0fc-49ea-b6a1-b905513a368b
- https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69
- https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9
- https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb
- https://hayspost.com/posts/26608269-25e1-4f29-b80f-d2edbb3bba3d
- https://www.haysmed.com/services/chi-what-we-offer/
- https://www.downtownhays.com/staff-and-board
