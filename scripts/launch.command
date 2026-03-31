#!/bin/bash
# ============================================
# Elect Righteous - Full Pipeline Launcher
# ============================================
# Usage: ./launch.command "Hays, Kansas"
# Or: double-click to run with default location
# ============================================

set -e

# Default location
LOCATION="${1:-Hays, Kansas}"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DATE=$(date +%Y-%m-%d)

echo "============================================"
echo "  ELECT RIGHTEOUS — Election Intelligence"
echo "  Location: $LOCATION"
echo "  Date: $DATE"
echo "============================================"
echo ""

cd "$PROJECT_DIR"

# Create output directories for today
mkdir -p "reports/$DATE"
mkdir -p "$HOME/Desktop/Elect-Righteous-Reports/$DATE"

echo "Starting full pipeline for: $LOCATION"
echo "Project directory: $PROJECT_DIR"
echo ""

# Run the full pipeline via Claude
claude -p "

## ELECT RIGHTEOUS — FULL PIPELINE EXECUTION

**Location**: $LOCATION
**Date**: $DATE
**Project Directory**: $PROJECT_DIR

Execute the complete 6-phase pipeline as defined in CLAUDE.md:

### Phase 1: DISCOVER
Run the Election Finder agent (agents/election-finder/PROMPT.md).
Find ALL upcoming elections for $LOCATION.
Write results to memory/elections/.

### Phase 2: IDENTIFY
Run the Candidate Profiler agent (agents/candidate-profiler/PROMPT.md).
For each election discovered, identify ALL candidates.
Write results to memory/candidates/{candidate-slug}/profile.md.

### Phase 3: SCRUB
Run the Deep Scraper agent (agents/deep-scraper/PROMPT.md).
For each candidate, execute ALL 15 search passes IN PARALLEL.
Write results to memory/candidates/{candidate-slug}/raw-intel.md.

### Phase 4: EXTRACT
Run the Media Extractor agent (agents/media-extractor/PROMPT.md).
Find and transcribe all media for each candidate.
Write to data/transcripts/ and data/quotes/.

### Phase 5: ANALYZE
Run the Integrity Analyzer agent (agents/integrity-analyzer/PROMPT.md).
Analyze all gathered intelligence per candidate.
Write to memory/candidates/{candidate-slug}/analysis.md.

### Phase 6: REPORT
Run the Report Generator agent (agents/report-generator/PROMPT.md).
Compile all reports:
- Full dossiers → reports/$DATE/
- Comparison guides → reports/$DATE/
- Executive summaries → reports/$DATE/
- Copy to ~/Desktop/Elect-Righteous-Reports/$DATE/

After all phases, update each agent's soul.md with learnings from this run.

GO.
"

echo ""
echo "============================================"
echo "  Pipeline complete!"
echo "  Reports: ~/Desktop/Elect-Righteous-Reports/$DATE/"
echo "============================================"
