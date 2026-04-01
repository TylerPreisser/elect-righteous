#!/bin/bash
# ============================================
# Consolidate all intelligence into per-candidate raw dump files
# Scans all reports/ files and extracts sections mentioning each candidate
# ============================================

set -e
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REPORTS_DIR="$PROJECT_DIR/reports"
CANDIDATES_DIR="$PROJECT_DIR/memory/candidates"
DATE=$(date +%Y-%m-%d)

echo "Consolidating intelligence from reports/ into per-candidate raw dumps..."
echo "Date: $DATE"
echo ""

# Map of candidate slugs to search patterns (name variations)
declare -A CANDIDATES=(
  ["tracey-mann"]="Tracey Mann|Rep. Mann|Mann"
  ["roger-marshall"]="Roger Marshall|Sen. Marshall|Marshall, M.D."
  ["barb-wasinger"]="Barb Wasinger|Barbara Wasinger|Wasinger"
  ["kris-kobach"]="Kris Kobach|Kobach"
  ["scott-schwab"]="Scott Schwab|Schwab"
  ["vicki-schmidt"]="Vicki Schmidt|Schmidt"
  ["ty-masterson"]="Ty Masterson|Masterson"
  ["jeff-colyer"]="Jeff Colyer|Colyer"
  ["mason-ruder"]="Mason Ruder"
  ["scott-braun"]="Scott Braun|Sheriff Braun"
  ["aaron-cunningham"]="Aaron Cunningham|County Attorney Cunningham"
  ["ken-brooks"]="Ken Brooks"
  ["alaina-cunningham"]="Alaina Cunningham|Vice Mayor Cunningham"
  ["shaun-musil"]="Shaun Musil"
  ["sandy-jacobs"]="Sandy Jacobs"
  ["david-vilaysing"]="David Vilaysing|Vilaysing"
  ["toby-dougherty"]="Toby Dougherty|City Manager Dougherty"
  ["neal-younger"]="Neal Younger"
  ["nathan-leiker"]="Nathan Leiker"
  ["bobbi-dreiling"]="Bobbi Dreiling"
  ["rebecca-herzog"]="Rebecca Herzog"
  ["vernon-ruder-jr"]="Vernon Ruder"
  ["pat-proctor"]="Pat Proctor"
  ["ken-rahjes"]="Ken Rahjes"
  ["daniel-hawkins"]="Daniel Hawkins|Speaker Hawkins"
  ["dinah-sykes"]="Dinah Sykes"
  ["chris-mann"]="Chris Mann"
  ["ethan-corson"]="Ethan Corson"
  ["cindy-holscher"]="Cindy Holscher"
  ["colin-mcroberts"]="Colin McRoberts"
  ["lauren-reinhold"]="Lauren Reinhold"
  ["craig-musser"]="Craig Musser"
  ["jason-hart"]="Jason Hart"
  ["patrick-schmidt"]="Patrick Schmidt"
  ["christy-cauble-davis"]="Christy Cauble Davis"
  ["sandy-spidel-neumann"]="Sandy Spidel Neumann"
  ["erik-murray"]="Erik Murray"
  ["philip-sarnecki"]="Philip Sarnecki"
  ["charlotte-ohara"]="Charlotte O'Hara|O'Hara"
)

# For each candidate, find their dedicated dossier + all mentions in other reports
for slug in "${!CANDIDATES[@]}"; do
  DUMP_FILE="$CANDIDATES_DIR/$slug/raw-dump.md"
  pattern="${CANDIDATES[$slug]}"

  echo "Processing: $slug"

  # Start the dump file
  cat > "$DUMP_FILE" << HEADER
# RAW INTELLIGENCE DUMP: $(echo "$slug" | tr '-' ' ' | sed 's/\b\(.\)/\u\1/g')
## Last consolidated: $DATE
## Search patterns: $pattern

---

HEADER

  # First: include any dedicated dossier file
  for dossier in "$REPORTS_DIR"/*"${slug}"* "$REPORTS_DIR"/*"$(echo $slug | tr '-' ' ')"*; do
    if [ -f "$dossier" ]; then
      echo "## SOURCE: $(basename "$dossier")" >> "$DUMP_FILE"
      echo "" >> "$DUMP_FILE"
      cat "$dossier" >> "$DUMP_FILE"
      echo "" >> "$DUMP_FILE"
      echo "---" >> "$DUMP_FILE"
      echo "" >> "$DUMP_FILE"
    fi
  done

  # Then: include existing profile.md and raw-intel.md if they exist
  for existing in "$CANDIDATES_DIR/$slug/profile.md" "$CANDIDATES_DIR/$slug/raw-intel.md" "$CANDIDATES_DIR/$slug/analysis.md"; do
    if [ -f "$existing" ]; then
      echo "## SOURCE: $(basename "$existing")" >> "$DUMP_FILE"
      echo "" >> "$DUMP_FILE"
      cat "$existing" >> "$DUMP_FILE"
      echo "" >> "$DUMP_FILE"
      echo "---" >> "$DUMP_FILE"
      echo "" >> "$DUMP_FILE"
    fi
  done

  lines=$(wc -l < "$DUMP_FILE")
  echo "  -> $DUMP_FILE ($lines lines)"
done

echo ""
echo "Consolidation complete."
echo "Total candidate folders: $(ls "$CANDIDATES_DIR" | wc -l)"
echo "Candidates with raw dumps: $(find "$CANDIDATES_DIR" -name "raw-dump.md" | wc -l)"
