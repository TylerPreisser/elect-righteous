<!-- ARCHIVED 2026-08-27: this is the former root CLAUDE.md, verbatim below the note.
     It is a V1-era (7-agent pipeline) snapshot last updated 2026-05-11 and is STALE in places:
     the current pipeline is the 26-agent V2 spec in AGENTS.md; production is now Cloudflare Pages
     on a custom domain (GitHub Pages is the legacy leg); and every path of the form
     /Users/tylerpreisser/Desktop/elect-righteous/ is wrong — the repo lives at
     /Users/tylerpreisser/Projects/Coding Projects/elect-righteous. Everything else — the candidate
     roster, data model, design system, research findings and glossary — is kept for reference. -->

# Elect Righteous — Complete Project Manual

> **Last updated**: 2026-05-11
> **Location**: `/Users/tylerpreisser/Desktop/elect-righteous/`
> **Live site**: https://tpreisser.github.io/elect-righteous/
> **Repo**: https://github.com/tpreisser/elect-righteous
> **Owner**: Tyler Preisser, Hays, Kansas

---

## WHAT THIS IS

A 7-agent election intelligence pipeline + Next.js editorial website for Hays, Kansas voters. Given a location, the system:
1. **Discovers** every upcoming election (federal, state, local, school, ballot measures)
2. **Identifies** ALL candidates for each race
3. **Scrapes** the internet (15+ parallel passes per candidate) for public record data
4. **Analyzes** candidates against a conservative Protestant/Baptist values framework
5. **Produces** comprehensive editorial articles on GitHub Pages

**Core Philosophy**: Present facts beautifully. NO grading system. No badges, no Strong/Moderate/Weak ratings, no red/green flag color coding. Separate opinion/recommendations from raw data.

**Design**: Inspired by celebratejesus.org (Celebration Community Church, Hays) + Beehiiv newsletter aesthetics.

---

## PROJECT STATUS (2026-05-11)

### PHASE 1: FOUNDATION ✅ COMPLETE
- [x] 7-agent pipeline framework complete (PROMPT.md + soul.md for each agent)
- [x] 54 candidate folders with raw intelligence dumps (127,074 total lines)
- [x] 28 formatted investigation reports (14,000+ lines)
- [x] 24 election discovery files
- [x] Next.js 16 website deployed to GitHub Pages
- [x] 127 static pages pre-rendered and live
- [x] Tracey Mann template candidate with complete data
- [x] Build pipeline working with zero TypeScript errors

### PHASE 2: DATA WIRING 🟠 IN PROGRESS
- [x] All 54 candidate slugs registered in candidates.ts
- [x] Site routing working for all candidate pages
- [ ] Populate real data for 53 candidates (currently: 1 complete, 53 stub)
- [ ] Extract all URLs from reports + raw-dump.md files into sources arrays
- [ ] Verify campaign finance donor tables complete
- [ ] Restructure elections page by category (Federal → State → Local → Ballot Measures)

### PHASE 3: OPPOSITION RESEARCH 🟠 IN PROGRESS
- [x] opposition-research agent PROMPT created
- [ ] Run opposition-research pass for 54 candidates
- [ ] Create opposition-research.md files for each candidate

### PHASES 4-5: MEDIA & INTEGRITY 🔴 PENDING
- [ ] Media Extractor: Find/transcribe videos, audio, interviews
- [ ] Integrity Analyzer: Analyze record vs. values framework

### PHASE 6: REFINEMENT 🔴 PENDING
- [ ] Church Recommendations page (separate faith-based guidance)
- [ ] Delete unused grading components
- [ ] Mobile optimization
- [ ] Print-friendly CSS
- [ ] SEO optimization

### BUILD STATUS ✅ PASSING
```
npm run build: ✓ Passing
TypeScript: ✓ Zero errors
Static pages: 127 generated
Route coverage: 100%
  - Home, About, Elections (12 detail pages)
  - Candidates (54 detail pages + sources pages)
```

---

## TECH STACK

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Framework | Next.js | 16.2.1 | App Router, static export to GitHub Pages |
| React | React | 19.2.4 | UI rendering |
| TypeScript | TypeScript | 6.0.2 | Type safety (strict mode) |
| Styling | Tailwind CSS | 4.2.2 | Utility-first CSS with custom design tokens |
| Animation | Framer Motion | 12.38.0 | Collapsible sections, smooth transitions |
| Icons | Lucide React | 1.7.0 | SVG icons across UI |
| Search | Fuse.js | 7.1.0 | Client-side fuzzy search (not yet implemented) |
| Markdown Parsing | gray-matter | 4.0.3 | Build-time report parsing (for future automation) |
| Deploy | GitHub Pages | - | Static site hosting with auto-deploy via Actions |
| Fonts | Google Fonts | - | Montserrat (headings), Lato (body), Source Serif 4 (quotes) |

---

## DIRECTORY STRUCTURE

```
elect-righteous/
│
├── CLAUDE.md                          # THIS FILE — master project reference
├── AGENTS.md                          # Build rules, code conventions, data model
├── CODEX-PROMPT.md                    # Starting prompt for Claude (orchestrator role)
├── .github/workflows/deploy.yml       # GitHub Pages auto-deploy on push
│
├── agents/                            # 7-agent pipeline definitions
│   ├── election-finder/
│   │   ├── PROMPT.md                  # 10-pass protocol to discover all elections
│   │   └── soul.md                    # Learnings evolved from each run
│   ├── candidate-profiler/
│   │   ├── PROMPT.md                  # Identify all candidates per election
│   │   └── soul.md
│   ├── deep-scraper/
│   │   ├── PROMPT.md                  # 15-pass internet scrub per candidate
│   │   └── soul.md
│   ├── opposition-research/
│   │   ├── PROMPT.md                  # Separate adverse public-record research
│   │   └── soul.md
│   ├── media-extractor/
│   │   ├── PROMPT.md                  # Find/transcribe video, audio, interviews
│   │   └── soul.md
│   ├── integrity-analyzer/
│   │   ├── PROMPT.md                  # Analyze record vs. values framework
│   │   └── soul.md
│   ├── report-generator/
│   │   ├── PROMPT.md                  # Compile editorial dossiers
│   │   └── soul.md
│   └── site-profile-writer/           # NEW: Write reports → candidates.ts format
│       ├── PROMPT.md
│       └── soul.md
│
├── memory/
│   ├── elections/                     # 24 election discovery files
│   │   ├── SUMMARY-2026-hays-kansas.md
│   │   └── 2026-*.md (one per race/amendment)
│   ├── candidates/                    # 54 candidate folders (one per slug)
│   │   └── {slug}/
│   │       ├── raw-dump.md            # MASTER: ALL intel from deep-scraper consolidated
│   │       ├── opposition-research.md # SEPARATE: Adverse public record findings
│   │       ├── profile.md             # Initial profile (from some candidates)
│   │       └── [other agent outputs]
│   └── knowledge/
│       ├── judeo-christian-framework.md  # Values analysis rubric
│       ├── kansas-election-law.md     # KS election procedures, key dates
│       ├── source-reliability.md      # Which news outlets are trustworthy
│       └── ruder-family-network.md    # Key family/network connections
│
├── reports/                           # 28 formatted investigation reports
│   ├── *-complete-dossier.md          # Per-candidate dossiers (800-1000 lines each)
│   ├── *-investigation.md             # Multi-candidate investigations
│   ├── plain-english-voter-guide.md   # All races explained at 8th-grade level
│   ├── faith-church-investigation-2026-03-31.md
│   └── templates/                     # Report templates (legacy)
│
├── plans/
│   ├── PLAN.md                        # Master implementation plan
│   ├── ui-plan.md                     # Original UI design plan
│   ├── agent-development.md           # Agent dev sequence
│   └── website-build-plan.md          # Detailed website architecture
│
├── scripts/
│   ├── launch.command                 # One-click pipeline runner (./launch.command "Hays, Kansas")
│   └── consolidate-intel.sh           # Merge reports + raw intel into raw-dump.md files
│
├── ui/                                # Next.js website (the entire frontend)
│   ├── package.json                   # npm scripts, dependencies
│   ├── package-lock.json
│   ├── next.config.ts                 # Static export + basePath="/elect-righteous"
│   ├── tsconfig.json                  # Strict mode, path aliases @/*
│   ├── postcss.config.mjs             # Tailwind CSS processing
│   ├── .gitignore
│   │
│   ├── design-extraction/             # Reference design documents
│   │   ├── celebratejesus-analysis.md
│   │   └── beehiiv-article-patterns.md
│   │
│   ├── src/
│   │   ├── app/                       # Next.js App Router pages
│   │   │   ├── layout.tsx             # Root layout (header, footer, fonts)
│   │   │   ├── globals.css            # Tailwind + design tokens + utilities
│   │   │   ├── page.tsx               # Homepage (/)
│   │   │   ├── about/page.tsx         # About page
│   │   │   ├── elections/
│   │   │   │   ├── page.tsx           # Elections listing (to be restructured)
│   │   │   │   └── [slug]/page.tsx    # Election detail page
│   │   │   ├── candidates/
│   │   │   │   ├── page.tsx           # Candidates listing
│   │   │   │   └── [slug]/
│   │   │   │       ├── page.tsx       # Server wrapper (generateStaticParams)
│   │   │   │       ├── client.tsx     # Client article component
│   │   │   │       └── sources/page.tsx # Candidate sources list
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── site-header.tsx    # Top navigation
│   │   │   │   ├── site-footer.tsx    # Footer with links
│   │   │   │   └── container.tsx      # Max-width container
│   │   │   └── ui/
│   │   │       ├── quote-block.tsx    # Pull quote with decorative marks
│   │   │       ├── candidate-card.tsx # Card preview for listings
│   │   │       ├── election-card.tsx  # Election card for listings
│   │   │       ├── badge.tsx          # Generic badge (marked for deletion)
│   │   │       ├── search-bar.tsx     # Search input (not yet active)
│   │   │       ├── collapsible-section.tsx # Framer Motion collapsible
│   │   │       ├── source-citation.tsx    # Numbered source footnotes
│   │   │       ├── scripture-verse.tsx    # Quote from Scripture
│   │   │       ├── built-by-badge.tsx    # "Built by..." watermark
│   │   │       ├── markdown-renderer.tsx  # Markdown → React
│   │   │       └── index.ts           # Named exports
│   │   │
│   │   ├── data/
│   │   │   ├── candidates.ts          # 54 candidates, typed as CandidateFull[]
│   │   │   └── elections.ts           # 12 elections, typed as Election[]
│   │   │
│   │   ├── lib/
│   │   │   └── [utilities]
│   │   │
│   │   ├── pages/                     # Legacy (empty in App Router)
│   │   └── styles/                    # Legacy (empty in App Router)
│   │
│   └── out/                           # Built static site (gitignored)
│
├── data/                              # Raw data directories
│   ├── sources/
│   ├── transcripts/
│   └── quotes/
│
└── {top-level reports}
    ├── Kansas-2026-Constitutional-Amendments-Investigation.md
    ├── Kansas-2026-Election-Deep-Investigation.md
    ├── Kansas-2026-Race-Investigation.md
    ├── TRACEY-MANN-DOSSIER.md
    └── [other top-level research]
```

---

## DATA MODEL (TypeScript)

Located at: `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/candidates.ts`

### CandidateFull Interface

```typescript
interface CandidateFull extends CandidateCard {
  // Metadata
  slug: string;                         // kebab-case identifier
  name: string;
  party: "R" | "D" | "I" | "NP";       // Republican, Democrat, Independent, No Party
  position: string;                     // "U.S. Representative, KS-01"
  electionSlug: string;                 // Links to Election.slug
  incumbent: boolean;
  occupation: string;

  // At-a-Glance Info (optional)
  born?: string;                        // "December 17, 1976"
  hometown?: string;
  religion?: string;                    // "Christian (Evangelical Covenant)"
  education?: string;                   // "Kansas State University, B.S. Business Admin"
  family?: string;                      // "Married to Audra Mann; four children"
  district?: string;                    // "KS-01 (R+16) — western and central Kansas"
  margin2024?: string;                  // "Won re-election 2024 with 66.2% of the vote"
  campaignWebsite?: string;

  // Article Body Sections (strings)
  whoTheyAre: string;                   // Narrative biography
  theirRecord: string;                  // Political/professional record
  whatYouShouldKnow: string[];          // Array of key facts (numbered)
  whereTheyWorship: string;             // Faith narrative

  // Structured Data
  church?: ChurchInfo;                  // { name, denomination?, url?, details? }
  quotes: Quote[];                      // Array of verbatim quotes
  campaignFinance?: CampaignFinance;    // Narrative + donor table
  sources: Source[];                    // EVERY URL found by agents
}

interface ChurchInfo {
  name: string;
  denomination?: string;
  url?: string;                         // MUST include church website
  details?: string;
}

interface Quote {
  text: string;                         // Verbatim quote (never paraphrase)
  source: string;                       // Speaker/publication
  date?: string;                        // YYYY-MM-DD
  url?: string;                         // Link to original
  topic?: string;                       // Category (e.g., "January 6", "Agriculture")
}

interface CampaignFinance {
  totalRaised: string;                  // "$1.4M (2023–2024 cycle)"
  narrative: string;                    // Prose explaining funding sources
  donors: Donor[];                      // Table of name + amount
  undisclosed?: string;                 // Note about missing data
  reportingPeriod: string;              // "2023–2024 election cycle"
  source: string;                       // "OpenSecrets.org / FEC"
}

interface Source {
  title: string;
  url: string;
  publication: string;                  // Where it came from
  date: string;                         // YYYY-MM-DD
}
```

### Elections Interface

Located at: `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/elections.ts`

```typescript
interface Election {
  slug: string;                         // kebab-case (e.g., "us-senate-2026")
  name: string;                         // "U.S. Senate"
  level: "Federal" | "State" | "Local" | "Ballot Measure";
  date: string;                         // "2026-11-03"
  jurisdiction: string;                 // "State of Kansas"
  seats: number;                        // Seats up for election
  status: "Open Seat" | "Incumbent Running" | "N/A";
  candidateCount: number;
  candidateSlugs: string[];             // Links to CandidateFull.slug
  description: string;                  // Short summary
  plainEnglish: string;                 // 8th-grade explanation
  whyItMatters: string;                 // Why voters should care
  jobDescription: string;               // What the office does
}
```

---

## DESIGN SYSTEM

### Inspiration
- **Primary**: celebratejesus.org (Celebration Community Church, Hays, KS)
- **Secondary**: Beehiiv newsletter aesthetic (narrow columns, pull quotes, clean typography)

### Color Palette

```css
--color-navy: #10405D                   (Primary: headers, hero backgrounds)
--color-navy-light: #1a5a82             (Lighter variant for hover states)
--color-navy-dark: #0a2d42              (Darker variant for text)
--color-teal: #1cc3af                   (Accent: CTAs, links, border highlights)
--color-teal-dark: #17a594              (Darker accent for hover states)
--color-gold: #C4922A                   (Warm accent, highlights)
--color-charcoal: #1b1c1c               (Body text)
--color-dark: #2a2929                   (Footer background)
--color-slate: #4a4a4a                  (Secondary text, captions)
--color-light: #f6f6f6                  (Light backgrounds, subtle sections)
```

### Typography

- **Headings**: Montserrat 700/800 (via `font-heading` class)
- **Body**: Lato 400/700, 18px (text-lg), line-height 1.75 (via `font-body`)
- **Quotes**: Source Serif 4 italic (via `font-serif`)
- **Reading Column Width**: max-w-2xl (672px) centered

### Article Layout (Beehiiv-Inspired)

- **Narrow reading column** for long-form readability
- **Pull quotes** with decorative quotation marks + teal left border
- **Key Facts box**: Subtle gray background, two-column grid
- **Section dividers**: Thin lines with generous vertical spacing
- **Sources**: Numbered footnotes at article end
- **NO badges, NO color-coded ratings, NO integrity scores**

### Tailwind v4 Custom Utilities

Defined in `src/app/globals.css`:

```css
.btn-primary       /* Teal CTA button */
.btn-secondary     /* Navy button */
.btn-outline       /* White outline button */
.section-navy      /* Navy background section */
.section-light     /* Light gray background section */
.section-white     /* White background section */
.card              /* White card with shadow */
.container-main    /* Max-width 7xl with responsive padding */
.footer-nav-link   /* Light text with teal hover */
.hero-overlay      /* Dark gradient overlay for hero images */
```

---

## ROUTING & PAGES

### Pre-Rendered Routes

```
/                           Homepage
/about                      About page
/elections                  All elections listing
/elections/[slug]           Single election detail (12 pages)
  /us-senate-2026
  /ks-01-house-2026
  /kansas-governor-2026
  /kansas-ag-2026
  /kansas-sos-2026
  /kansas-insurance-2026
  /ks-house-111
  /sboe-district-5
  /hays-city-current
  /hays-city-new
  /ellis-county-elections
  /usd489-school-board

/candidates                 All candidates listing
/candidates/[slug]         Single candidate detail (54 pages)
/candidates/[slug]/sources Candidate's full sources list (54 pages)
```

**Total**: 127 pages pre-rendered at build time.

---

## CODE CONVENTIONS

### TypeScript & React

- **Strict mode**: Enabled (`strict: true` in tsconfig.json)
- **Imports**: Use path alias `@/*` → `./src/*`
- **"use client"**: Only in components with state, event handlers, or hooks
- **generateStaticParams**: MUST be in server page.tsx, NOT in "use client" files
- **Types**: Export as named exports (no default exports of types)

### File & Variable Naming

| Category | Pattern | Example |
|----------|---------|---------|
| Files | kebab-case | `site-header.tsx`, `candidate-card.tsx` |
| Components | PascalCase | `SiteHeader`, `CandidateCard` |
| Functions/Variables | camelCase | `getFullCandidateBySlug()`, `handleSubmit` |
| Interfaces | PascalCase | `CandidateFull`, `ChurchInfo` |
| Candidate Slugs | kebab-case | `tracey-mann`, `jeff-colyer`, `ken-brooks` |
| Election Slugs | kebab-case | `us-senate-2026`, `ks-01-house-2026` |

### Component Structure Example

```typescript
"use client";

import { useState } from "react";
import Link from "next/link";
import type { CandidateFull } from "@/data/candidates";

export default function CandidateCard({ candidate }: { candidate: CandidateFull }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card p-6">
      <h3 className="font-heading font-bold text-xl text-navy">
        {candidate.name}
      </h3>
      <p className="text-slate">{candidate.position}</p>
      {/* ... */}
    </div>
  );
}
```

### Tailwind Usage

- **Utility-first**: Use Tailwind classes, not custom CSS where possible
- **Custom tokens**: CSS variables in `globals.css` for design system colors
- **Font classes**: `font-heading`, `font-body`, `font-serif` (NOT font names directly)
- **Responsive**: `sm:`, `md:`, `lg:` prefixes for breakpoints
- **Dark mode**: Via `dark:` prefix (if theme supports it)

### Page/Component Patterns

**Server Page with generateStaticParams:**
```typescript
// page.tsx (server component)
export function generateStaticParams() {
  return getAllCandidateSlugs().map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const candidate = getFullCandidateBySlug(slug);
  return <CandidateDetailClient candidate={candidate} />;
}
```

**Client Component:**
```typescript
// client.tsx ("use client")
import { useState } from "react";

export default function CandidateDetailClient({ candidate }: Props) {
  const [openSections, setOpenSections] = useState<string[]>([]);
  // ...
}
```

---

## CRITICAL RULES (NON-NEGOTIABLE)

### Content Rules

1. **NO GRADING SYSTEM**
   - Zero badges, ratings, Strong/Moderate/Weak indicators, red/green flags, color-coded integrity scores
   - Components to delete: `values-badge.tsx`, `consistency-badge.tsx`, `flag-alert.tsx`, `values-alignment-chart.tsx`, `comparison-table.tsx`

2. **EVERY CANDIDATE GETS EQUAL TREATMENT**
   - A long-shot Democrat in KS-01 gets the same research depth as the Republican incumbent
   - Nobody is skipped or left with stub data
   - "Partial" dossiers must be completed before site goes live

3. **EVERY SOURCE CITED**
   - Every claim must trace to a URL
   - Every URL the agents found goes in the sources array
   - Tracey Mann has 40+ sources; every other candidate should too
   - No citations by URL title alone; include publication + date

4. **VERBATIM QUOTES ONLY**
   - Never paraphrase and present as a quote
   - Include: text, source, date (YYYY-MM-DD), url, topic
   - Quote marks are required; square brackets [sic] for obvious errors only

5. **CHURCH WEBSITES LINKED**
   - If a candidate worships somewhere with a website, include `ChurchInfo.url`
   - Link directly to the church's official website, not a third-party profile

6. **DONOR TABLE FORMAT**
   - Campaign finance section shows:
     1. Narrative paragraph (prose summary of funding sources)
     2. Clean table: Name | Amount | [Description if needed]
     3. Undisclosed note (if data is incomplete)
   - Not just prose; must have structured donor list

7. **PLAIN ENGLISH**
   - Write for 8th-grade reading level
   - No political insider jargon, no acronyms without expansion
   - Expand all technical terms: "Farm Bill" (Agricultural Act of 2014), "PEAD" (Post-Earnings-Announcement Drift)

8. **SEPARATE OPPOSITION RESEARCH**
   - Broad profile research → `raw-dump.md`
   - Adverse public-record research → `opposition-research.md`
   - Both sources inform final article
   - Balance: Don't amplify controversies over achievements; present both

9. **STATIC EXPORT ONLY**
   - No server runtime, no API routes
   - All data baked in at build time
   - `output: "export"` in next.config.ts
   - Candidate data must be in `candidates.ts` and `elections.ts`

10. **GITHUB PAGES DEPLOYMENT**
    - `basePath: "/elect-righteous"` in production
    - Auto-deploy on push to main via `.github/workflows/deploy.yml`
    - No custom domain (using tpreisser.github.io/elect-righteous/)
    - Build must have zero TypeScript errors

---

## BUILD & DEPLOYMENT

### Local Development

```bash
cd /Users/tylerpreisser/Desktop/elect-righteous/ui
npm install          # First time only
npm run dev          # Local dev at localhost:3000 with hot reload
npm run build        # Static export to out/ directory
```

### Deployment

```bash
cd /Users/tylerpreisser/Desktop/elect-righteous
git add -A
git commit -m "description of changes"
git push origin main  # Auto-triggers GitHub Actions workflow
```

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
1. Trigger: Push to `main` branch
2. Run: `npm ci` (clean install in ui/)
3. Run: `npx next build`
4. Upload: `ui/out/` directory as Pages artifact
5. Deploy: Static site to https://tpreisser.github.io/elect-righteous/

### Build Verification

The build must:
- ✅ Compile with zero TypeScript errors
- ✅ Generate 127 static pages (home, about, 12 elections, 54 candidates, 54 sources pages)
- ✅ Produce valid HTML/CSS in `out/` directory

Current status: **PASSING** (verified 2026-05-11)

---

## RUNNING THE INVESTIGATION PIPELINE

### One-Click Launch

```bash
cd /Users/tylerpreisser/Desktop/elect-righteous
./scripts/launch.command "Hays, Kansas"
```

This script:
1. Creates output directories dated `YYYY-MM-DD`
2. Invokes Claude with the full 7-phase pipeline prompt
3. Agents run sequentially:
   - Phase 1: Election Finder discovers all races
   - Phase 2: Candidate Profiler identifies all candidates
   - Phase 3: Deep Scraper (15-pass) scrapes internet per candidate
   - Phase 4: Opposition Research (separate pass) on adverse records
   - Phase 5: Media Extractor finds video/audio/interviews
   - Phase 6: Integrity Analyzer scores vs. values framework
   - Phase 7: Report Generator compiles editorial dossiers

### Manual Invocation

```bash
claude -p "
## ELECT RIGHTEOUS — FULL PIPELINE EXECUTION

**Location**: Hays, Kansas
**Date**: $(date +%Y-%m-%d)

Execute the complete 7-phase pipeline as defined in CLAUDE.md...
"
```

### Data Consolidation

After reports are generated:
```bash
bash /Users/tylerpreisser/Desktop/elect-righteous/scripts/consolidate-intel.sh
```

This merges report findings into `memory/candidates/{slug}/raw-dump.md` files for each candidate.

---

## AGENT ARCHITECTURE

Each agent has a PROMPT.md (task protocol) and soul.md (learnings file that evolves).

| Agent | Purpose | Status | Key Output |
|-------|---------|--------|------------|
| **Election Finder** | Discover ALL elections for location (10-pass) | ✅ Complete | `memory/elections/*.md` files |
| **Candidate Profiler** | Identify ALL candidates per election | ✅ Complete | `memory/candidates/{slug}/profile.md` |
| **Deep Scraper** | 15-pass internet scrub per candidate | ✅ Complete | `memory/candidates/{slug}/raw-dump.md` |
| **Opposition Research** | Separate adverse public-record research | ✅ Prompt ready | `memory/candidates/{slug}/opposition-research.md` |
| **Media Extractor** | Find/transcribe videos, audio, interviews | 🔴 Not yet run | Media files + transcripts |
| **Integrity Analyzer** | Analyze record vs. values framework | 🔴 Not yet run | Scoring + analysis |
| **Report Generator** | Compile editorial dossiers | 🔴 Manual instead | `reports/*-complete-dossier.md` |
| **Site Profile Writer** | Transform reports → TypeScript candidates | 🔴 Not yet run | Populate `candidates.ts` |

### Agent Knowledge (from soul.md files)

**Election Finder** knows:
- Kansas primaries: First Tuesday in August
- General elections: First Tuesday after first Monday in November
- ALL 125 KS House seats up every 2 years
- ALL 40 KS Senate seats up in 2028 (NOT 2026)
- Municipal elections in odd years (2027 for Hays)
- School board elections in odd years (2027 for USD 489)

**Deep Scraper** knows:
- 15-pass parallel internet scrub per candidate
- Covers: biography, career, faith, quotes, voting record, controversies, finances, media
- Consolidates findings into raw-dump.md

**Opposition Research** knows:
- SEPARATE from profile research
- Focuses on: controversies, lawsuits, ethics issues, conflicts, contradictions, deleted content
- Five search passes: controversy queries, courts/discipline, donor conflicts, contradictions, social media

---

## CANDIDATE ROSTER (54 Total)

### Federal Elections (13 candidates)

**KS-01 U.S. House** (4)
- Tracey Mann (R, incumbent) ✅ COMPLETE
- Colin McRoberts (D)
- Lauren Reinhold (D)
- Craig Musser (I)

**U.S. Senate** (9)
- Roger Marshall (R, incumbent) ✅ COMPLETE
- Jason Hart (D)
- Patrick Schmidt (D)
- Christy Cauble Davis (D)
- Sandy Spidel Neumann (D)
- Erik Murray (D)
- Anne Parelkar (D)
- Michael Soetaert (D)
- Chase LaPorte (R)

### State Elections (20 candidates)

**Governor** (11, open seat)
- Scott Schwab (R) ✅ COMPLETE
- Vicki Schmidt (R) ✅ COMPLETE
- Ty Masterson (R) ✅ COMPLETE
- Jeff Colyer (R) ✅ COMPLETE
- Philip Sarnecki (R)
- Charlotte O'Hara (R)
- Stacy Rogers (R)
- Joy Eakins (R)
- Ethan Corson (D)
- Cindy Holscher (D)
- Marty Tuley (D)

**Attorney General** (2)
- Kris Kobach (R) ✅ COMPLETE
- Chris Mann (D) ✅ COMPLETE

**Secretary of State** (4, open seat)
- Pat Proctor (R)
- Ken Rahjes (R)
- Jennifer Day (D)
- Sam Lane (D)

**Insurance Commissioner** (2, open seat)
- Daniel Hawkins (R)
- Dinah Sykes (D)

**State House 111** (1)
- Barb Wasinger (R) ✅ COMPLETE

### Local Elections (21 candidates)

**Hays City Commission** (6)
- Mason Ruder (Mayor) ✅ COMPLETE
- Alaina Cunningham (Vice Mayor)
- Shaun Musil (Commissioner)
- Sandy Jacobs (Commissioner)
- David Vilaysing (Commissioner)
- Toby Dougherty (City Manager)

**Ellis County** (8)
- Scott Braun (Sheriff)
- Aaron Cunningham (County Attorney)
- Bobbi Dreiling (Clerk/Election Officer)
- Michael Berges (Commissioner D1)
- Neal Younger (Commissioner D2)
- Nathan Leiker (Commissioner D3)
- Vernon Ruder Jr (Treasurer)
- Rebecca Herzog (Register of Deeds)

**USD 489 School Board** (7)
- Ken Brooks (President) ✅ COMPLETE
- Curt Vajnar (Vice President)
- Ruth Ruder (Member)
- Derek Yarmer (Member)
- Allen Park (Member)
- Jayme Goetz (Member)
- Craig Pallister (Member)
- Ron Wilson (Superintendent)

**Status**: 1 COMPLETE (full data), 53 STUB (slugs registered, minimal data)

---

## PENDING WORK (PRIORITY ORDER)

### P0: DATA WIRING (BLOCKING PHASE 2)

1. **Parse all reports into TypeScript**
   - Build `scripts/transform-dossiers.mjs` (or similar)
   - Parse 28 markdown report files + raw-dump.md files
   - Transform into CandidateFull TypeScript objects
   - Output to `candidates.ts` array

2. **Populate all 54 candidates in candidates.ts**
   - Currently: 1 complete (Tracey Mann), 53 stub
   - Each candidate needs: whoTheyAre, theirRecord, whatYouShouldKnow, whereTheyWorship, church, quotes, campaignFinance, sources
   - Source extraction: Mine every URL from reports + raw-dump.md
   - Campaign finance: Extract donor lists from reports and format as Donor[] table

3. **Source completeness**
   - Tracey Mann: 8 sources (need 40+)
   - Roger Marshall, Kris Kobach, etc.: 5-10 sources (need 40+)
   - Goal: Extract ALL URLs from agent outputs, not just featured ones

4. **Re-run deep-scraper for thin candidates**
   - Candidates with <200 lines of intelligence need another pass
   - Add to launch.command for next full run

### P1: OPPOSITION RESEARCH PHASE

5. **Run opposition-research agent for 54 candidates**
   - Currently: 0 opposition-research.md files exist
   - Agent focuses on controversies, lawsuits, ethics issues, contradictions
   - Output: `memory/candidates/{slug}/opposition-research.md`

6. **Balance opposition data in articles**
   - Avoid amplifying controversies over achievements
   - Present both profile and opposition findings
   - Let readers decide significance

### P2: ELECTIONS PAGE RESTRUCTURE

7. **Rewrite elections/page.tsx**
   - Current: All elections listed flat
   - New structure:
     - **Federal Elections** (collapsible section)
     - **State Elections** (collapsible section)
     - **Local Elections** (collapsible section)
     - **Ballot Measures** (collapsible section, at bottom)

8. **Show all candidates per election**
   - KS-01: 4 candidates (currently only Mann shown in routing)
   - U.S. Senate: 9 candidates
   - Governor: 11 candidates
   - All other races: complete rosters

9. **Add plain English explanations for ballot measures**
   - Supreme Court Amendment needs conservative Protestant explanation
   - School bonds, county measures: "What this means for you" language

### P3: CHURCH RECOMMENDATIONS PAGE

10. **Create separate "Faith-Based Guide" or "Church Recommendations" page**
    - Apply conservative Protestant/Baptist lens separately
    - Make clear: This is OPINION, separate from data
    - Reference candidate's record against framework

### P4: CLEANUP & POLISH

11. **Delete unused grading components**
    - `values-badge.tsx`
    - `consistency-badge.tsx`
    - `flag-alert.tsx`
    - `values-alignment-chart.tsx`
    - `comparison-table.tsx`
    - Any badge or scoring UI

12. **Mobile optimization pass**
    - Test on iPhone, Android
    - Ensure readable columns, tap targets, spacing

13. **Print-friendly CSS**
    - Hide navigation, footer, interactive elements
    - Expand collapsible sections
    - Optimize colors for black/white printing

14. **SEO optimization**
    - Meta tags per candidate page (already done)
    - OG image generation for social sharing
    - Structured data (Schema.org) for candidates/elections

---

## KEY DISCOVERIES & INSIGHTS

### Major Findings

1. **Ruder Family Dynasty**
   - Mason Ruder: Mayor
   - Ruth Ruder: School Board Vice President (relative)
   - Vernon Ruder Jr: County Treasurer (relative)
   - One family, three government positions

2. **Ken Brooks + Celebration Community Church**
   - USD 489 Board President
   - 14-19 year Children's Ministry leader at Celebration Community Church (celebratejesus.org)
   - The project's home church

3. **Jeff Colyer: Hays Connection**
   - Governor candidate who GREW UP IN HAYS
   - Father was a Hays dentist
   - TMP-Marian graduate
   - Deep local roots

4. **Kris Kobach: Legal Troubles**
   - Held in contempt of court
   - $26K in sanctions
   - Ordered to take remedial law classes
   - $4M+ taxpayer cost from lost lawsuits

5. **Tracey Mann: January 6 Objector**
   - Voted to object AZ + PA electoral votes (2021-01-07)
   - One of 147 House Republicans to maintain objection after Capitol breach
   - Only Kansas member of delegation on ROTOR Act vote

6. **Roger Marshall: Combative Style**
   - Owns $1.2M Sarasota house vs. Kansas cabin
   - Walked out of own Oakley town hall (March 2025)
   - Called constituents "paid operatives"

7. **Supreme Court Amendment: Dark Money**
   - Plan B after 2022 abortion amendment failed 59-41
   - Dark money group spent $802K without disclosing donors
   - Came after same-sex marriage language removal

### Analysis Notes

- **Conservative Protestant Framework**: Non-denominational, Baptist-leaning, 2-3 point Calvinist
- **Church Affiliations Verified**: 15+ candidates have confirmed church memberships (especially Ken Brooks at Celebration)
- **Voting Record Data**: January 6, ROTOR Act, abortion, border security most salient for KS voters
- **Campaign Finance Patterns**: Large PAC funding dominates; small-dollar support rare

---

## DEPLOYMENT CHECKLIST

Before going live:

- [ ] All 54 candidates have full TypeScript data (whoTheyAre, theirRecord, etc.)
- [ ] All 54 candidates have 40+ sources
- [ ] Build passes with zero TypeScript errors
- [ ] 127 static pages pre-render correctly
- [ ] Candidate pages render without missing data
- [ ] No unused grading components in codebase
- [ ] Elections page restructured by category
- [ ] Church recommendations section complete (or marked as pending)
- [ ] Mobile responsive verified
- [ ] SEO meta tags verified
- [ ] GitHub Pages deployment tested
- [ ] No console errors in production build

---

## SUPPORT & MAINTENANCE

### For Future Agents

1. **Always read CLAUDE.md + AGENTS.md first** — They define conventions and critical rules
2. **Check memory/elections/ and memory/candidates/** — All raw data lives there
3. **Build locally**: `cd ui && npm run build` to verify no regressions
4. **Deploy carefully**: Push to main only when 127 pages build successfully
5. **Run launch.command** to refresh candidate data after major changes

### Common Tasks

| Task | Command | Notes |
|------|---------|-------|
| **Build locally** | `cd ui && npm run build` | Must have zero TS errors |
| **Dev server** | `cd ui && npm run dev` | Hot reload on localhost:3000 |
| **Run pipeline** | `./scripts/launch.command "Hays, Kansas"` | Agents run sequentially |
| **Consolidate intel** | `bash scripts/consolidate-intel.sh` | Merges reports → raw-dump.md |
| **Deploy** | `git push origin main` | Auto-triggers GitHub Actions |
| **Check live site** | https://tpreisser.github.io/elect-righteous/ | Production deployment |

---

## GLOSSARY

| Term | Definition |
|------|-----------|
| **raw-dump.md** | Master consolidated intel file for one candidate (from deep-scraper) |
| **opposition-research.md** | Separate adverse public-record research for one candidate |
| **soul.md** | Agent learnings file that evolves after each run |
| **basePath** | Next.js config for GitHub Pages subdirectory deployment |
| **CandidateFull** | TypeScript interface for complete candidate data |
| **generateStaticParams** | Next.js function to pre-render dynamic routes at build time |
| **Beehiiv aesthetic** | Newsletter design: narrow column, pull quotes, clean typography |
| **celebratejesus.org** | Celebration Community Church (Hays) website — design inspiration |

---

## VERSION HISTORY

| Date | Author | Changes |
|------|--------|---------|
| 2026-05-11 | Codebase Cartographer | Complete audit: Phase 1 verified complete, Phase 2 data wiring in progress, 54/54 candidate slugs registered, build passing |
| 2026-04-01 | Tyler Preisser | Initial CLAUDE.md creation |

---

**End of Document**

*This file is the master reference for the Elect Righteous project. Keep it updated as new decisions are made or phases are completed. Every agent should reference it before beginning work.*

