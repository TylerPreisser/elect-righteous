# Agent Development Sequence

## Overview

This document outlines the order in which agents should be developed, tested, and integrated. Each agent builds on the previous one's output.

## Development Order

### Sprint 1: Foundation Agents

**Agent 1: Election Finder**
- Develop and test independently
- First test: "Find all upcoming elections for Hays, Kansas"
- Validation: Cross-reference output against manually researched elections
- Success criteria: Finds ALL known upcoming elections with correct dates

**Agent 2: Candidate Profiler**
- Depends on: Election Finder output
- First test: Use Election Finder output from Sprint 1
- Validation: Verify all candidates found against official filings
- Success criteria: 100% of filed candidates discovered, all social media accounts found

### Sprint 2: Intelligence Agents

**Agent 3: Deep Scraper**
- Depends on: Candidate Profiler output (needs candidate names + handles)
- First test: Pick one candidate, run all 15 passes
- Validation: Manual spot-check of source URLs and fact accuracy
- Success criteria: >100 unique sources found per candidate, all URLs valid, zero fabricated claims

**Agent 4: Media Extractor**
- Can develop in parallel with Deep Scraper
- Depends on: Candidate Profiler output (needs names + handles)
- First test: Pick one candidate known to have video content
- Validation: Compare extracted quotes against original recordings
- Success criteria: All findable media discovered, transcripts are accurate, quotes are verbatim

### Sprint 3: Analysis & Output

**Agent 5: Integrity Analyzer**
- Depends on: Deep Scraper + Media Extractor output
- First test: Analyze one candidate with full intelligence package
- Validation: Have a human review the analysis for fairness and accuracy
- Success criteria: Every claim cited, both red and green flags identified, no unsupported conclusions

**Agent 6: Report Generator**
- Depends on: All previous agents' output
- First test: Generate all 4 report formats for one candidate
- Validation: Review readability, source citations, formatting
- Success criteria: Reports are readable by average voter, all sources linked, print-friendly

### Sprint 4: Integration

**Full Pipeline Test**
- Run complete pipeline: "Investigate all upcoming elections for Hays, Kansas"
- Measure: Total runtime, completeness, accuracy
- Fix: Any integration issues between agents
- Target: Complete pipeline in under 60 minutes

### Sprint 5: Web UI

**Build and deploy the public-facing UI**
- Implement design system from ui-plan.md
- Build all pages
- Connect to report JSON output
- Deploy to Cloudflare Pages
- Mobile optimization pass

---

## Testing Protocol

For each agent:

1. **Unit test**: Run the agent in isolation with known input
2. **Output validation**: Manually verify a sample of outputs
3. **Edge case test**: What happens with candidates who have almost no online presence?
4. **Integration test**: Does the output format match what the next agent expects?
5. **Performance test**: How long does the agent take? Can it be parallelized better?

## Quality Gates

Before an agent is considered "done":
- [ ] PROMPT.md is complete and tested
- [ ] soul.md has been updated with learnings from testing
- [ ] Output format matches what downstream agents expect
- [ ] At least 3 test runs completed successfully
- [ ] Manual validation of output accuracy performed
- [ ] Edge cases documented
