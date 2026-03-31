# Elect Righteous - Local Election Intelligence System

## What This Is

A multi-agent intelligence system that helps citizens make informed voting decisions for local, state, and federal elections. Given a location (e.g., "Hays, Kansas"), the system:

1. **Discovers** every upcoming election relevant to that location
2. **Identifies** every candidate running in those elections
3. **Investigates** each candidate exhaustively across the entire internet
4. **Produces** comprehensive, source-cited intelligence reports
5. **Deploys** reports via a beautiful faith-themed web UI for public access

The system is designed for transparency, truth, and accountability — helping voters see past campaign facades to understand who candidates really are based on their full public record.

---

## Architecture Overview

### 6-Agent Pipeline

The system runs 6 specialized agents sequentially (with parallelism within stages):

```
Phase 1: DISCOVER  → Election Finder Agent
Phase 2: IDENTIFY  → Candidate Profiler Agent (parallel per election)
Phase 3: SCRUB     → Deep Scraper Agent (parallel per candidate)
Phase 4: EXTRACT   → Media Extractor Agent (parallel per candidate)
Phase 5: ANALYZE   → Integrity Analyzer Agent (parallel per candidate)
Phase 6: REPORT    → Report Generator Agent (one comprehensive output)
```

### Agent Descriptions

#### Agent 1: Election Finder (`agents/election-finder/`)
- **Purpose**: Given a location, find EVERY upcoming election (city, county, school board, state, federal)
- **Sources**: State Secretary of State websites, county clerk databases, vote.org, ballotpedia.org, local government sites, state election commission APIs
- **Output**: `memory/elections/YYYY-MM-DD-{election-name}.md` — structured election data with dates, positions, filing deadlines, districts

#### Agent 2: Candidate Profiler (`agents/candidate-profiler/`)
- **Purpose**: For each election, identify every candidate (declared, filed, rumored, write-in)
- **Sources**: Official filings, ballotpedia, local newspaper announcements, campaign websites, FEC filings, state campaign finance databases
- **Output**: `memory/candidates/{candidate-slug}/profile.md` — name, party, position sought, campaign website, social media handles, initial bio

#### Agent 3: Deep Scraper (`agents/deep-scraper/`)
- **Purpose**: The workhorse. For each candidate, scrub the ENTIRE internet systematically
- **Search Strategy** (minimum 15 parallel search passes per candidate):
  1. Full legal name + variations + maiden names + aliases
  2. Campaign finance records (FEC, state databases, OpenSecrets)
  3. Property records, business filings, corporate registrations
  4. Court records (civil, criminal, bankruptcy, divorce if public)
  5. Social media deep dive (Facebook, Twitter/X, Instagram, LinkedIn, TikTok, YouTube, Reddit, Nextdoor)
  6. Archived/deleted social media posts (Wayback Machine, cached pages)
  7. News articles (local papers, state papers, national, TV stations)
  8. Blog posts, op-eds, letters to the editor they've written
  9. Church/religious organization affiliations and statements
  10. Professional associations, board memberships, lobbying connections
  11. Voting record (if incumbent — every vote, every bill)
  12. Public meeting minutes (city council, school board, county commission)
  13. Endorsements given AND received
  14. Campaign donor analysis (who funds them, patterns, dark money)
  15. Community involvement, charitable work, volunteering
- **Output**: `memory/candidates/{candidate-slug}/raw-intel.md` — everything found, with source URLs and timestamps

#### Agent 4: Media Extractor (`agents/media-extractor/`)
- **Purpose**: Find and transcribe every video, audio, and interview involving the candidate
- **Capabilities**:
  - Find YouTube videos, podcast appearances, news interviews, public meeting recordings
  - Extract transcripts from video/audio (use available transcription services)
  - Capture verbatim quotes with timestamps and source links
  - Find written interviews and extract Q&A content
  - Locate debate footage and extract candidate-specific statements
- **Output**: `data/transcripts/{candidate-slug}/` and `data/quotes/{candidate-slug}/`

#### Agent 5: Integrity Analyzer (`agents/integrity-analyzer/`)
- **Purpose**: Analyze ALL gathered intelligence to identify patterns, contradictions, and character signals
- **Analysis Framework**:
  - **Consistency Check**: Do their words match their actions? Do old statements contradict new ones?
  - **Follow the Money**: Who funds them? What do donors expect in return?
  - **Public Record vs. Campaign Promises**: What have they actually done vs. what they say they'll do?
  - **Character Signals**: How do they treat people when cameras aren't rolling? Community reputation.
  - **Values Alignment**: Compare stated positions and actual record against Judeo-Christian moral framework:
    - Sanctity of life
    - Protection of family
    - Religious liberty
    - Honesty and integrity
    - Care for the vulnerable
    - Justice and rule of law
    - Stewardship of resources
    - Community and neighborly love
  - **Red Flags**: Identify lies, facade, flip-flops, conflicts of interest, hypocrisy
  - **Green Flags**: Identify consistency, sacrifice, integrity, community service, faith in action
- **Output**: `memory/candidates/{candidate-slug}/analysis.md` — structured integrity assessment with evidence citations

#### Agent 6: Report Generator (`agents/report-generator/`)
- **Purpose**: Compile everything into beautiful, readable, source-cited reports
- **Output Formats**:
  - Full candidate dossier (comprehensive, every detail)
  - Election comparison guide (side-by-side candidates per race)
  - Executive summary (1-page per candidate)
  - Web-ready content (for the UI deployment)
- **Output**: `reports/YYYY-MM-DD/` — all report formats

---

## Execution Protocol

### Running the System

```bash
# Full pipeline for a location
claude -p "Investigate all upcoming elections for Hays, Kansas"

# Single candidate deep dive
claude -p "Deep investigation on [Candidate Name] running for [Position]"

# Update existing research
claude -p "Update research for upcoming [Election Name]"
```

### Pipeline Sequence

1. **Phase 1 - DISCOVER**: Election Finder runs first. Cannot proceed without knowing what elections exist.
2. **Phase 2 - IDENTIFY**: Candidate Profiler runs for each discovered election. Parallel per election.
3. **Phase 3 - SCRUB**: Deep Scraper launches parallel sub-agents per candidate (this is the longest phase). ALL 15 search passes run in parallel per candidate, and multiple candidates run in parallel.
4. **Phase 4 - EXTRACT**: Media Extractor runs parallel per candidate. Can overlap with Phase 3 as early results come in.
5. **Phase 5 - ANALYZE**: Integrity Analyzer runs per candidate after Phases 3+4 complete for that candidate.
6. **Phase 6 - REPORT**: Report Generator compiles after all candidates in an election are analyzed.

### Parallelism Strategy

- Elections discovered → fan out to parallel candidate identification
- Candidates identified → fan out to parallel deep scraping (15 passes each, all parallel)
- Media extraction can start as soon as candidate profiles exist
- Analysis waits for both scraping + extraction to complete per candidate
- Report generation is the final convergence point

---

## Data Sources Registry

### Election Discovery Sources
- Kansas Secretary of State: https://sos.ks.gov/elections/
- Ellis County Clerk: county election office
- Ballotpedia: https://ballotpedia.org/
- Vote.org: https://www.vote.org/
- Vote Smart: https://justfacts.votesmart.org/
- Local government websites for Hays, KS

### Candidate Research Sources
- FEC.gov (federal campaign finance)
- Kansas Governmental Ethics Commission (state campaign finance)
- OpenSecrets.org
- FollowTheMoney.org
- Court records (PACER for federal, Kansas courts portal)
- Kansas Corporation Commission (business filings)
- County property records (Ellis County)
- Social media platforms (all major)
- Wayback Machine / Internet Archive
- Local newspapers: Hays Daily News, Salina Journal, Wichita Eagle, Topeka Capital-Journal, Kansas City Star
- Kansas Legislature website (voting records)
- City of Hays meeting minutes
- USD 489 (Hays school district) board minutes

---

## File Structure

```
elect-righteous/
├── CLAUDE.md                          # This file — master orchestrator
├── PLAN.md                            # Implementation plan with phases
│
├── agents/
│   ├── election-finder/
│   │   ├── PROMPT.md                  # Agent protocol
│   │   └── soul.md                    # Agent learnings (evolves)
│   ├── candidate-profiler/
│   │   ├── PROMPT.md
│   │   └── soul.md
│   ├── deep-scraper/
│   │   ├── PROMPT.md
│   │   └── soul.md
│   ├── media-extractor/
│   │   ├── PROMPT.md
│   │   └── soul.md
│   ├── integrity-analyzer/
│   │   ├── PROMPT.md
│   │   └── soul.md
│   └── report-generator/
│       ├── PROMPT.md
│       └── soul.md
│
├── memory/
│   ├── elections/                      # Discovered elections
│   ├── candidates/                    # Per-candidate intelligence folders
│   │   └── {candidate-slug}/
│   │       ├── profile.md             # Basic info + social handles
│   │       ├── raw-intel.md           # Everything scraped
│   │       ├── analysis.md            # Integrity analysis
│   │       └── sources.md             # All source URLs with timestamps
│   ├── knowledge/
│   │   ├── kansas-election-law.md     # Kansas-specific election rules
│   │   ├── judeo-christian-framework.md  # Values assessment framework
│   │   └── source-reliability.md      # Source trust ratings
│   └── internal-log/                  # System learning logs
│
├── data/
│   ├── sources/                       # Raw source data cache
│   ├── transcripts/                   # Video/audio transcripts per candidate
│   └── quotes/                        # Extracted verbatim quotes per candidate
│
├── reports/
│   ├── templates/
│   │   ├── candidate-dossier.md       # Full report template
│   │   ├── election-guide.md          # Side-by-side comparison template
│   │   └── executive-summary.md       # Quick summary template
│   └── YYYY-MM-DD/                    # Generated reports by date
│
├── plans/
│   ├── PLAN.md                        # Master implementation plan
│   ├── ui-plan.md                     # Web UI design & deployment plan
│   └── agent-development.md           # Agent creation sequence
│
├── ui/                                # Web UI (CelebrateJesus-themed)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
│
└── scripts/
    ├── launch.command                 # One-click full pipeline runner
    └── deploy-ui.sh                   # UI build & deploy script
```

---

## Design System (CelebrateJesus-Inspired)

The web UI follows the design language of celebratejesus.org:

### Colors
- **Primary**: `#10405D` (deep navy blue — authority, trust)
- **Secondary**: `#2a2929` (dark charcoal)
- **Accent**: Warm gold/amber for highlights and CTAs
- **Background**: Clean white with dark navy sections
- **Text**: White on dark, dark charcoal on light
- **Overlays**: Black at 0.92 opacity for hero sections

### Typography
- **Headings**: Bold, responsive scaling `clamp(2rem, 4.5vw, 5rem)`
- **Body**: Clean sans-serif, 0.875rem-1rem
- **Buttons**: UPPERCASE, font-weight 600

### Components
- Full-width hero sections with background images + dark overlay
- Card-based layouts (25% flex-basis grid)
- Smooth 200ms cubic-bezier transitions
- Rounded corners consistent throughout
- Subtle shadows for depth
- Mobile-first responsive (breakpoint at 769px)

### Faith-Forward Aesthetic
- Professional and authoritative, not "churchy"
- Clean, modern, trustworthy
- Scripture references where appropriate (not preachy)
- Cross/dove/light iconography used sparingly and tastefully

---

## Critical Principles

1. **TRUTH ABOVE ALL**: Never fabricate, assume, or speculate. Every claim must have a source URL. If something can't be verified, say so explicitly.

2. **EXHAUSTIVE SEARCH**: The value of this system is completeness. A 10-minute Google search is worthless. The system must systematically search EVERY source category for EVERY candidate. No shortcuts.

3. **VERBATIM QUOTES**: When quoting someone, use their EXACT words with source citation. Never paraphrase and present as a quote.

4. **SOURCE EVERYTHING**: Every single fact, claim, quote, and data point must include:
   - Source URL
   - Date accessed
   - Original publication date (if known)
   - Source reliability rating

5. **PARALLEL EXECUTION**: Time is the enemy. Run as many agents in parallel as possible. A candidate with 15 search categories should have 15 parallel searches, not sequential.

6. **NO POLITICAL BIAS**: Present facts. The Judeo-Christian values framework is for the ANALYZER agent only, and it compares record against stated values — it does not endorse candidates. Let voters decide.

7. **EVOLVING INTELLIGENCE**: Each agent has a `soul.md` that captures what it learns about effective searching, reliable sources, and Kansas-specific patterns. These evolve after every run.

8. **PRIVACY RESPECT**: Only use publicly available information. Do not attempt to access private records, hack accounts, or obtain information through deception. Public record only.

9. **FRESHNESS MATTERS**: Always check when information was published. Campaign positions from 10 years ago matter but should be labeled as historical. Recent positions get priority.

10. **FULL TRANSPARENCY**: The reports must show their work. Every conclusion must trace back to specific evidence. Readers should be able to verify everything themselves.
