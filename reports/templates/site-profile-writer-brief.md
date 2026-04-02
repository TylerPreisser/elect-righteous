# Site Profile Writer Brief

Use this brief when rewriting `memory/candidates/{slug}/site-profile.md` from a candidate's raw research.

## Core Standard

Write like a veteran political journalist, not a campaign operative and not a research assistant.

- Be concrete.
- Be neutral.
- Be readable.
- Be precise.

The benchmark is the hand-built `TRACEY_MANN_FULL` block in `ui/src/data/candidates.ts`.

## Required Inputs

For each candidate, read:

- `raw-dump.md`
- any sibling files in the same candidate folder
- `reports/templates/site-profile.md`

## Required Output

Rewrite the full `site-profile.md` in this exact section order:

1. `## Who They Are`
2. `## Their Record`
3. `## What You Should Know`
4. `## Where They Worship`
5. `## Campaign Finance`
6. `## Quotes`
7. `## Sources`

## Section Rules

### Who They Are

- 2 to 4 paragraphs
- explain where the person comes from
- explain what jobs, offices, or roles define them
- include family or community context only when verified
- no campaign fluff

### Their Record

- 2 to 4 paragraphs
- cover actual votes, bills, lawsuits, projects, disputes, investigations, controversies, business dealings, or governing actions
- name the bill, project, lawsuit, office, dispute, or decision

### What You Should Know

- at least 5 bullets
- every bullet must stand on its own
- every bullet must say what happened and why it matters
- no strategist language

Do not write phrases like:

- attack line
- liability
- gives opponents an angle
- profile
- corroborates
- electability

### Where They Worship

- 1 to 2 short paragraphs
- if a current church is verified, name it and include the URL in prose
- if it is not verified, say plainly: `Public sources do not identify a current church affiliation.`
- include faith background only when sourced

### Campaign Finance

- 1 to 3 short paragraphs
- include totals, cash on hand, self-funding, donor patterns, or notable donors when public
- if no finance data exists online, say plainly: `No campaign finance data available online.`

### Quotes

- include at least 3 meaningful quotes when possible
- use full quotes, not fragments
- no tiny slogan snippets unless they are truly central
- every quote needs a source line with publication/outlet, date, and URL

## Hard Bans

Never publish process language like:

- research file says
- I verified
- I did not find
- reviewed in this pass
- public record reviewed here
- repo notes
- placeholder

The voter should never feel like they are reading internal notes.
