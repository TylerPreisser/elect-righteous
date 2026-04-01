#!/usr/bin/env python3
"""
Extract rich candidate content from dossier reports and generate
TypeScript-ready strings for candidates.ts
"""
import re, os, json, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPORTS = os.path.join(BASE, "reports")
CANDIDATES_TS = os.path.join(BASE, "ui/src/data/candidates.ts")

def read_file(path):
    with open(path, 'r', errors='ignore') as f:
        return f.read()

def extract_section(text, heading_pattern, stop_patterns=None):
    """Extract text between a heading and the next heading of same or higher level."""
    lines = text.split('\n')
    capture = False
    level = 0
    result = []
    for line in lines:
        if re.match(r'^#{1,3}\s+.*' + heading_pattern, line, re.IGNORECASE):
            capture = True
            level = len(line) - len(line.lstrip('#'))
            continue
        if capture:
            if re.match(r'^#{1,' + str(level) + r'}\s+', line) and result:
                break
            if stop_patterns and any(re.match(p, line, re.IGNORECASE) for p in stop_patterns):
                break
            result.append(line)
    return '\n'.join(result).strip()

def extract_quotes(text):
    """Extract verbatim quotes from markdown."""
    quotes = []
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if line.startswith('> "') or line.startswith('> \\"') or line.startswith('>"'):
            quote_text = line.lstrip('> ').strip('"').strip()
            source = ""
            for j in range(i+1, min(i+4, len(lines))):
                if lines[j].startswith('> --') or lines[j].startswith('> —'):
                    source = lines[j].lstrip('> ').lstrip('-—').strip()
                    break
            if len(quote_text) > 30:
                quotes.append({"text": quote_text, "source": source})
    return quotes[:6]

def extract_urls(text):
    """Extract all URLs from text."""
    urls = re.findall(r'https?://[^\s\)\]\"\'>,]+', text)
    seen = set()
    unique = []
    for u in urls:
        u = u.rstrip('.')
        if u not in seen:
            seen.add(u)
            unique.append(u)
    return unique

def escape_ts(s):
    """Escape for TypeScript string literal."""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

def make_paragraphs(text, min_chars=200):
    """Split text into readable paragraphs."""
    paragraphs = []
    current = []
    for line in text.split('\n'):
        line = line.strip()
        if not line:
            if current:
                p = ' '.join(current)
                if len(p) > 30:
                    paragraphs.append(p)
                current = []
        elif line.startswith('#') or line.startswith('|') or line.startswith('---'):
            if current:
                p = ' '.join(current)
                if len(p) > 30:
                    paragraphs.append(p)
                current = []
        elif line.startswith('- ') or line.startswith('* '):
            text_part = line.lstrip('-* ').strip()
            if len(text_part) > 20:
                current.append(text_part)
        elif line.startswith('**') and line.endswith('**'):
            continue
        else:
            current.append(line)
    if current:
        p = ' '.join(current)
        if len(p) > 30:
            paragraphs.append(p)
    return '\n\n'.join(paragraphs[:8])

# Read candidates.ts
ts_content = read_file(CANDIDATES_TS)

# Define enrichment data from reports
enrichments = {}

# --- ROGER MARSHALL ---
report = read_file(os.path.join(REPORTS, "roger-marshall-complete-dossier.md"))
bio_section = extract_section(report, r'(Full Bio|Background|Personal)')
record_section = extract_section(report, r'(Voting Record|Political Record|Key Votes|Record)')
church_section = extract_section(report, r'(Church|Faith|Religion)')
finance_section = extract_section(report, r'(Campaign Finance|Finance)')
enrichments["roger-marshall"] = {
    "whoTheyAre": make_paragraphs(bio_section) if bio_section else "",
    "theirRecord": make_paragraphs(record_section) if record_section else "",
    "whereTheyWorship": make_paragraphs(church_section) if church_section else "",
}

# --- SCOTT SCHWAB ---
report = read_file(os.path.join(REPORTS, "scott-schwab-complete-dossier.md"))
enrichments["scott-schwab"] = {
    "whoTheyAre": make_paragraphs(extract_section(report, r'(Biography|Background|Personal|Full Bio)')),
    "theirRecord": make_paragraphs(extract_section(report, r'(Secretary of State|Record|Legislative)')),
    "whereTheyWorship": make_paragraphs(extract_section(report, r'(Church|Faith|LifeMission)')),
}

# --- CHRIS MANN ---
report = read_file(os.path.join(REPORTS, "chris-mann-complete-dossier.md"))
enrichments["chris-mann"] = {
    "whoTheyAre": make_paragraphs(extract_section(report, r'(Man|Bio|Background|Career)')),
    "theirRecord": make_paragraphs(extract_section(report, r'(2022|Record|Platform|Campaign)')),
    "whereTheyWorship": make_paragraphs(extract_section(report, r'(Church|Faith)')),
}

# Process multi-candidate reports
def extract_candidate_block(text, name_pattern):
    """Extract block about a specific candidate from a multi-candidate report."""
    lines = text.split('\n')
    capture = False
    result = []
    for i, line in enumerate(lines):
        if re.search(name_pattern, line, re.IGNORECASE) and (line.startswith('#') or line.startswith('**')):
            capture = True
            continue
        if capture:
            if (line.startswith('## ') or line.startswith('### ')) and not re.search(name_pattern, line, re.IGNORECASE):
                if len(result) > 5:
                    break
            result.append(line)
    return '\n'.join(result).strip()

# --- From sos-insurance-ks01 report ---
report = read_file(os.path.join(REPORTS, "sos-insurance-ks01-all-candidates-complete.md"))
for slug, pattern in [
    ("dinah-sykes", r"Dinah Sykes"),
    ("daniel-hawkins", r"Daniel Hawkins"),
    ("jennifer-day", r"Jennifer Day"),
    ("sam-lane", r"Sam Lane"),
]:
    block = extract_candidate_block(report, pattern)
    enrichments[slug] = {
        "whoTheyAre": make_paragraphs(block),
        "theirRecord": "",
        "whereTheyWorship": "",
    }

# --- From governor report ---
report = read_file(os.path.join(REPORTS, "governor-2026-all-remaining-candidates-complete.md"))
for slug, pattern in [
    ("cindy-holscher", r"Cindy Holscher"),
    ("charlotte-ohara", r"Charlotte O.Hara"),
    ("philip-sarnecki", r"Philip Sarnecki"),
    ("joy-eakins", r"Joy Eakins"),
    ("marty-tuley", r"Marty Tuley"),
]:
    block = extract_candidate_block(report, pattern)
    enrichments[slug] = {
        "whoTheyAre": make_paragraphs(block),
        "theirRecord": "",
        "whereTheyWorship": "",
    }

# --- From ellis county report ---
report = read_file(os.path.join(REPORTS, "ellis-county-elected-officials-deep-investigation.md"))
for slug, pattern in [
    ("bobbi-dreiling", r"Bobbi Dreiling"),
    ("rebecca-herzog", r"Rebecca Herzog"),
    ("neal-younger", r"Neal Younger"),
    ("nathan-leiker", r"Nathan Leiker"),
]:
    block = extract_candidate_block(report, pattern)
    enrichments[slug] = {
        "whoTheyAre": make_paragraphs(block),
        "theirRecord": "",
        "whereTheyWorship": "",
    }

# --- From hays city commission report ---
report = read_file(os.path.join(REPORTS, "hays-city-commission-deep-investigation-2026-03-30.md"))
for slug, pattern in [
    ("david-vilaysing", r"David Vilaysing"),
    ("sandy-jacobs", r"Sandy Jacobs"),
    ("shaun-musil", r"Shaun Musil"),
    ("alaina-cunningham", r"Alaina Cunningham"),
    ("toby-dougherty", r"Toby Dougherty"),
]:
    block = extract_candidate_block(report, pattern)
    enrichments[slug] = {
        "whoTheyAre": make_paragraphs(block),
        "theirRecord": "",
        "whereTheyWorship": "",
    }

# Now apply enrichments to candidates.ts
updated = ts_content
count = 0
for slug, data in enrichments.items():
    who = data.get("whoTheyAre", "")
    if len(who) < 100:
        # Try raw-dump as fallback
        dump_path = os.path.join(BASE, f"memory/candidates/{slug}/raw-dump.md")
        if os.path.exists(dump_path):
            dump = read_file(dump_path)
            who = make_paragraphs(dump[:5000])

    if len(who) < 100:
        print(f"SKIP {slug}: not enough content ({len(who)} chars)")
        continue

    # Find the current whoTheyAre for this slug and replace it
    pattern = f'"slug": "{slug}"'
    pos = updated.find(pattern)
    if pos == -1:
        print(f"SKIP {slug}: not found in candidates.ts")
        continue

    # Find whoTheyAre field after this slug
    who_start = updated.find('"whoTheyAre":', pos)
    if who_start == -1 or who_start > pos + 3000:
        print(f"SKIP {slug}: whoTheyAre not found near slug")
        continue

    # Find the value bounds
    val_start = updated.find('"', who_start + 13) + 1
    # Find closing quote (handle escaped quotes)
    i = val_start
    while i < len(updated):
        if updated[i] == '\\':
            i += 2
            continue
        if updated[i] == '"':
            break
        i += 1
    val_end = i

    old_who = updated[val_start:val_end]
    new_who = escape_ts(who)

    if len(new_who) > len(old_who) + 50:
        updated = updated[:val_start] + new_who + updated[val_end:]
        count += 1
        print(f"ENRICHED {slug}: {len(old_who)} -> {len(new_who)} chars")
    else:
        print(f"SKIP {slug}: new content not significantly longer ({len(old_who)} vs {len(new_who)})")

# Write back
with open(CANDIDATES_TS, 'w') as f:
    f.write(updated)

print(f"\nDone. Enriched {count} candidates.")
