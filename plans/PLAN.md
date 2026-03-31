# Elect Righteous - Master Implementation Plan

## Project Vision

Build a multi-agent local election intelligence system that gives citizens complete, verified, source-cited information about every candidate running in their local elections. Themed around faith-based values with a professional web UI inspired by celebratejesus.org.

---

## Phase 1: Foundation (Current Phase)

### 1.1 Project Structure
- [x] Create directory structure
- [x] Write CLAUDE.md (master orchestrator)
- [x] Write PLAN.md (this file)
- [x] Create agent directories with PROMPT.md and soul.md files
- [x] Create knowledge base files
- [x] Create report templates
- [x] Create launch script

### 1.2 Agent Prompts
- [x] Election Finder PROMPT.md
- [x] Candidate Profiler PROMPT.md
- [x] Deep Scraper PROMPT.md
- [x] Media Extractor PROMPT.md
- [x] Integrity Analyzer PROMPT.md
- [x] Report Generator PROMPT.md

### 1.3 Knowledge Base
- [x] Kansas election law reference
- [x] Judeo-Christian values assessment framework
- [x] Source reliability ratings
- [x] Report templates

---

## Phase 2: Agent Development & Testing

### 2.1 Election Finder Agent
- [ ] Build search protocol for Kansas elections
- [ ] Test with Hays, KS as first target
- [ ] Validate against known upcoming elections
- [ ] Add support for all election types (city, county, school, state, federal)

### 2.2 Candidate Profiler Agent
- [ ] Build candidate discovery protocol
- [ ] Test with known candidates in current elections
- [ ] Validate completeness (are we finding everyone?)
- [ ] Add write-in and rumored candidate detection

### 2.3 Deep Scraper Agent
- [ ] Build 15-pass parallel search protocol
- [ ] Test each pass independently
- [ ] Test parallel execution of all passes
- [ ] Validate source capture and URL logging
- [ ] Add Wayback Machine integration for deleted content
- [ ] Add social media deep dive capability

### 2.4 Media Extractor Agent
- [ ] Build video/podcast discovery protocol
- [ ] Integrate transcript extraction
- [ ] Build quote extraction with attribution
- [ ] Test with candidates who have video presence

### 2.5 Integrity Analyzer Agent
- [ ] Build consistency-checking algorithm
- [ ] Build campaign-finance analysis framework
- [ ] Build values-alignment scoring
- [ ] Test with known candidates (verify against manual research)
- [ ] Calibrate red flag / green flag detection

### 2.6 Report Generator Agent
- [ ] Build full dossier template rendering
- [ ] Build side-by-side comparison rendering
- [ ] Build executive summary rendering
- [ ] Build web-ready HTML/JSON output
- [ ] Test output quality and readability

---

## Phase 3: Integration & Pipeline

### 3.1 End-to-End Pipeline
- [ ] Build launch.command orchestrator
- [ ] Implement phase sequencing with parallelism
- [ ] Build progress tracking and logging
- [ ] Test full pipeline: location → reports
- [ ] Performance optimization (target: full run in under 60 minutes)

### 3.2 Data Management
- [ ] Build candidate folder structure auto-creation
- [ ] Build source deduplication
- [ ] Build incremental update capability (don't re-scrape what hasn't changed)
- [ ] Build data freshness tracking

---

## Phase 4: Web UI — CelebrateJesus.org Clone → Elect Righteous

### 4.0 Design Extraction (IN PROGRESS)
- [x] Deploy internet investigators to forensically extract celebratejesus.org
- [x] Extract full CSS: colors, fonts, spacing, animations, breakpoints
- [x] Extract component inventory: hero, cards, nav, footer, CTAs, forms
- [x] Crawl every page: homepage, about, sermons, events, connect, give, staff
- [x] Identify platform (WordPress/Squarespace/custom), theme, plugins
- [ ] Document exact hex codes, font stacks, border-radius, shadows, transitions
- [ ] Screenshot key sections for pixel-perfect reference

### 4.1 Project Scaffolding
- [ ] Initialize Next.js 15+ project in ui/ directory
- [ ] Configure Tailwind v4 with celebratejesus.org design tokens
- [ ] Set up static export mode (next.config.ts)
- [ ] Configure Framer Motion for transitions
- [ ] Set up Cloudflare Pages wrangler.toml
- [ ] Create design token file (colors, typography, spacing from extraction)

### 4.2 Component Library (Clone + Adapt)
- [ ] Header/Navigation — clone celebratejesus.org nav exactly, replace content
- [ ] Hero Section — full-width background + dark overlay + centered text
- [ ] Card Grid — candidate cards, election cards (based on their card layout)
- [ ] Quote Block — styled verbatim quotes with source citations
- [ ] Values Badge — color-coded alignment indicators (Strong/Moderate/Weak)
- [ ] Red/Green Flag Alert — highlighted concern or positive finding
- [ ] Comparison Table — side-by-side candidate comparison
- [ ] Source Citation — inline link with hover preview
- [ ] Footer — clone layout, replace content
- [ ] CTA Sections — based on their "Connect" / "Give" patterns
- [ ] Mobile hamburger menu

### 4.3 Pages
- [ ] Home page — hero with mission, location search, featured elections, methodology
- [ ] Election page — /elections/[slug] — all candidates in a race, side-by-side
- [ ] Candidate page — /candidates/[slug] — full dossier beautifully rendered
- [ ] About page — mission, Judeo-Christian values framework, methodology
- [ ] Search — find by location, name, election
- [ ] Ballot Measures — /measures/[slug] — amendment analysis pages

### 4.4 Data Pipeline
- [ ] Markdown → JSON transformer script (parse reports into structured data)
- [ ] Static data files generated at build time
- [ ] Candidate profile JSON schema
- [ ] Election comparison JSON schema
- [ ] Source URL index for clickable citations

### 4.5 Features
- [ ] Report rendering from markdown → beautiful web pages
- [ ] Source link verification (every claim is clickable to source)
- [ ] Print-friendly candidate guides (CSS print stylesheet)
- [ ] Share buttons for social media (OG meta tags per candidate)
- [ ] Email signup for election alerts
- [ ] Dark/light mode toggle (next-themes)
- [ ] Mobile-first responsive (celebratejesus.org breakpoints)
- [ ] WCAG 2.1 AA accessibility

### 4.6 Deployment
- [ ] Cloudflare Pages setup
- [ ] Custom domain configuration
- [ ] CI/CD: push to main → auto-deploy
- [ ] Performance optimization (Core Web Vitals targets)
- [ ] SEO: meta tags, structured data, sitemap

### 4.4 Deployment
- [ ] Cloudflare Pages setup
- [ ] Custom domain
- [ ] CI/CD pipeline (push reports → auto-deploy)
- [ ] Performance optimization (Core Web Vitals)

---

## Phase 5: Expansion

### 5.1 Multi-Location Support
- [ ] Generalize beyond Hays, KS
- [ ] Support any US location
- [ ] State-specific source databases
- [ ] Federal election integration

### 5.2 Community Features
- [ ] User-submitted tips/corrections
- [ ] Candidate response/rebuttal section
- [ ] Volunteer research coordination
- [ ] Church group sharing tools

### 5.3 Historical Archive
- [ ] Archive all past election research
- [ ] Track elected officials' post-election record
- [ ] "Did they keep their promises?" follow-up reports

---

## Timeline Estimates

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Foundation | **Complete** |
| Phase 2 | Agent Development | Next |
| Phase 3 | Integration & Pipeline | After Phase 2 |
| Phase 4 | Web UI | Can start in parallel with Phase 3 |
| Phase 5 | Expansion | Future |

---

## First Target

**Location**: Hays, Kansas (Ellis County)
**Known Elections to Discover**:
- Hays City Commission
- Ellis County Commission
- USD 489 School Board
- Kansas State Legislature (if applicable)
- Any special elections or ballot measures
- 2026 statewide races (Governor, AG, SoS, etc.)
- US Congress (KS-01)
