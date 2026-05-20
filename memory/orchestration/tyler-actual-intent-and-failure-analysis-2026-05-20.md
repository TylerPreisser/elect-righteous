# Tyler's Actual Intent and Failure Analysis

Date: 2026-05-20

Repo: `/Users/tylerpreisser/Desktop/elect-righteous`

Purpose: this document preserves what Tyler was actually asking for after repeated chat drift, partial execution, wrong-link confusion, and quality failures. Future agents must read this before planning, generating prompts, editing UI, hydrating candidates, or claiming completion.

## The Short Version

Tyler was not asking for a prettier demo page, a five-candidate proof of concept, or a handful of superficial UI edits.

Tyler was asking for Elect Righteous to become a complete, premium, source-backed voter intelligence platform for every candidate and election relevant to Hays, Kansas and Kansas voters, with all existing research preserved, intelligently matrixed, written into usable candidate profiles, rendered beautifully, verified for accuracy, pushed to the correct public destinations, and made durable enough that work can resume after chat compaction.

The central failure pattern was that agents kept treating the request as local patchwork instead of full-system completion.

## What Tyler Actually Wanted

### 1. Work in the Correct Project and Publish the Correct Thing

The work belongs in:

`/Users/tylerpreisser/Desktop/elect-righteous`

The expected public preview is:

`https://tylerpreisser.github.io/elect-righteous/`

The expected production domain is:

`https://electrighteous.com/`

Tyler expected every meaningful change to be committed and pushed. He also expected the public link he was given to reflect the actual current work, not an old instance, a different deployment, or a broken static export.

### 2. Complete Every Candidate, Not a Sample Batch

Tyler expected every candidate to be redone or completed, not only the candidates who texted/commented, not only screenshots, and not only the five v2 proof-of-concept candidates.

The expectation was:

- Verify every relevant race and candidate for Hays, Kansas and Kansas voters.
- Identify whether any candidates are missing.
- Confirm which candidates are actually running, which are incumbents/off-cycle, which are historical/context-only, and which should appear on the site.
- Hydrate every candidate profile with accurate, sourced, useful information.
- Avoid saying "complete" until all candidates have gone through the same quality pipeline.

### 3. Preserve and Use All Existing Research

Tyler expected the system to use all available local research before launching more research.

Relevant existing materials include:

- `memory/candidates/<slug>/`
- `reports/`
- `ui/src/data/`
- old v1 `candidates.ts`
- v2 candidate files
- raw dumps
- social media captures
- election investigations
- source lists
- prior dossier work

The failure was repeatedly dropping prior information about who candidates are, their records, past context, social information, public statements, and local background instead of extracting it, deduplicating it, classifying it, and writing it into the new profile format.

### 4. Build a Fixed Issue Matrix Across Every Candidate

Tyler expected a constant list of major issues for every candidate. Each profile should answer the same issue list, even when the answer is "no relevant public evidence found."

The issue matrix should include at least:

1. Abortion / life
2. LGBT / gender / parental rights
3. Education / curriculum / schools
4. Religious liberty / church / civic morality
5. Taxes / spending / debt
6. Economy / jobs / labor
7. Guns / Second Amendment
8. Immigration / border
9. Health care / insurance / Medicaid
10. Election integrity / voting / courts
11. Public safety / law enforcement / criminal justice
12. Agriculture / rural economy / water
13. Local governance / transparency / ethics
14. Environment / energy / land use

For each issue, the profile should classify evidence as one or more of:

- Candidate-stated position
- Documented record action
- Vote / meeting / public office record
- Donor / organization / endorsement signal
- Social or online signal
- Background-only weak signal
- No relevant public evidence found

Tyler did not want fake certainty. He wanted intelligent, caveated interpretation. For example: do not say a candidate definitely supports a policy merely because they follow a page, liked a post, or have a family connection. Instead say what the evidence is, what it may suggest, and what cannot be concluded.

### 5. Use Social Media Correctly

Tyler did not want social media research deleted. He wanted it demoted from being the whole profile into one useful input layer.

The site should still examine:

- Who candidates follow
- What they like
- What they comment on
- What pages/groups/accounts they interact with
- What those posts actually said
- Whether social interactions are relevant to issues such as abortion, LGBT/gender, education, local governance, public safety, faith, etc.

But the social evidence should be used carefully:

- It should not dominate the profile.
- It should not become a wall of giant quote cards.
- It should feed the issue matrix where relevant.
- It should be separated from primary record evidence.
- It should include caveats when the evidence is only a weak signal.
- It should be omitted from issue conclusions when there is no meaningful relevance.

### 6. Keep the Right Candidate Page Sections

Tyler wanted the candidate profile organized into clear, premium, expandable sections.

Expected sections:

- Who They Are
- Where They Stand on Big Issues
- Their Record
- Where They Worship / Faith and Community
- Donor / Funding Information
- Social and Online Signals
- Source Trail / Sources
- Correction or feedback form

Tyler specifically wanted these removed:

- Standalone "In Their Own Words"
- "What You Should Know"

Candidate quotes, posts, and public statements should not disappear. They should be redistributed into the relevant sections, especially issue positions, record, biography, and social/online signals.

### 7. Make the UI Premium, Beautiful, and Mobile-Optimized

Tyler was unhappy with solid HTML boxes, oversized quote cards, awkward metrics, bad hierarchy, and pages that looked like raw text dumped into a template.

The expected UI is:

- Premium and polished
- Mobile-first
- Beautiful on candidate pages
- Uniform across all candidate cards
- Accordion/dropdown sections where appropriate
- Easy to scan
- Dense enough to be useful
- Not a marketing landing page
- Not ugly gray boxes
- Not huge social-media quote blocks
- Not filled with irrelevant top metrics such as "Issue Areas", "Record Items", and "Sources" unless those metrics are genuinely useful
- Source links preserved and clickable

Tyler liked some later organization better, but wanted it to retain the strong big headers from the earlier version.

### 8. Correct Branding and Site-Wide CTA

All references to "Preisser Tech" should become "Preisser Solutions."

The site should use this snippet for the small footer or floating advertisement/CTA:

> Preisser Solutions builds world-class systems behind modern businesses: high-converting websites, local SEO, AI search visibility, CRM workflows, dashboards, and automations that reduce manual work and increase qualified leads.

Tyler also wanted one consistent logo/icon/fav icon/social share media treatment across the entire site.

### 9. Fix Form Submission

Tyler expected the correction/contact form to route to his email.

The required work includes:

- Verify where form submissions go.
- Ensure submissions route to Tyler's email.
- Check whether any old failed submissions could be cached or recoverable.
- Do not claim FormSubmit activation happened if no activation email was generated.
- Treat live form verification as a required release gate.

### 10. Build Durable Multi-Agent Infrastructure

Tyler wanted the work to survive automatic chat compaction and long-running execution.

Core rule:

If it is not written to disk, it does not exist.

Every agent should keep its own folder and output files. Every candidate should have durable files showing what was read, what was extracted, what was decided, what is blocked, and what still needs review.

Expected durable structure includes:

- Project-level orchestration state
- Per-run state
- Per-agent state
- Per-candidate evidence matrices
- Per-candidate issue matrices
- Per-candidate social evidence matrices
- Source audits
- Writer outputs
- Legal/accuracy reviews
- Symmetry reviews
- UI QA notes
- Deployment state
- Handoff files

The system must be able to resume after compaction by reading these files, not by relying on chat memory.

## What Kept Failing

### Failure 1: Treating the Task as UI Tweaks Instead of Data Completion

Agents repeatedly changed layout, cards, or labels while leaving most candidates empty or thin. Tyler expected the underlying candidate data to be completed first and then rendered beautifully.

### Failure 2: Completing Only a Few Candidates

The system focused on Tracey Mann, Allen Park, or a five-candidate wave and then talked as if the site was broadly improved. Tyler expected every candidate to go through the same deep pipeline.

### Failure 3: Losing Existing Research

Prior research about records, biography, past public activity, social behavior, worship/community, donors, and source findings was not consistently carried forward. Tyler saw profiles with less information than before and correctly treated that as a regression.

### Failure 4: No Constant Issue List

Some candidate pages lacked "Where They Stand on Big Issues" entirely, or used vague counts/metrics instead of a consistent issue matrix. Tyler expected every candidate to have the same big-issue list, with sourced findings or explicit "no relevant evidence found."

### Failure 5: Social Evidence Was Mishandled

The social-media research was either overemphasized as giant quote cards or underused/removed. Tyler wanted social signals analyzed intelligently and used as one evidence layer in the issue matrix.

### Failure 6: Source-Thin Profiles Were Treated as Acceptable

Some profiles had only one or two public sources. Tyler expected agents to dig through existing files and external sources until either meaningful evidence was found or the profile clearly documented that the public record is thin.

### Failure 7: Wrong Deployment / Wrong Instance Confusion

Tyler was given a public link that did not reflect the expected current work. This created the impression, accurately from his perspective, that work had happened in the wrong instance or had not been deployed.

### Failure 8: Removing or Renaming Sections Against Instructions

The system failed to keep the section structure Tyler wanted. It also failed to remove "What You Should Know" consistently and did not properly remove the standalone "In Their Own Words" section while preserving useful quotes elsewhere.

### Failure 9: UI Quality Was Not at the Expected Bar

Large solid boxes, huge text cards, poor mobile behavior, awkward candidate pages, and inconsistent tiles made the site feel unfinished and low-quality.

### Failure 10: Not Verifying Candidate/Race Accuracy

Tyler repeatedly asked whether the system actually had all candidates and the right elections. The work did not clearly prove that with a primary-source roster audit before proceeding.

### Failure 11: Suggesting Instead of Executing

The prior agent sometimes asked for approval or suggested sequencing when Tyler had already said to proceed. Tyler wanted execution, not repeated optional planning.

### Failure 12: No Reliable Disk-Based Handoff

Because state was not consistently written to project files, compaction and context limits caused repeated loss of intent. Tyler had to restate the same requirements many times.

## Tyler's Expected Output

### A. A Verified Election and Candidate Roster

Expected deliverable:

- A primary-source-backed roster of every relevant Hays/Kansas race
- Every candidate categorized correctly
- Missing candidates identified and added
- Off-cycle or non-running public officials separated from active candidates
- A race audit file for each race
- A clear answer to: "Do we actually have the relevant and accurate candidates?"

### B. A Complete Profile for Every Candidate

Each candidate should have:

- Name
- Office/race
- Candidate/election status
- Election date/context
- Who They Are
- Where They Stand on Big Issues
- Their Record
- Where They Worship / Faith and Community, only if sourced or clearly caveated
- Donor / Funding Information
- Social and Online Signals
- Source Trail
- Correction form

Each profile should preserve useful prior research and cite sources.

### C. A Candidate Evidence Matrix

Each candidate should have a machine-readable and human-readable evidence matrix showing:

- Source
- Source tier
- Claim
- Evidence summary
- Issue mapping
- Confidence
- Whether it is used, rejected, background-only, or caveated
- Reason for the decision
- Linked source IDs

### D. A Fixed Issue Matrix for Every Candidate

Each candidate must have the same issue list. Every issue should contain either:

- A sourced candidate statement
- A sourced public record action
- A sourced social/online signal with caveat
- A sourced donor/endorsement/organization signal with caveat
- A clear statement that no relevant public evidence was found

### E. A Premium Website

Expected site behavior:

- Beautiful candidate pages
- Mobile-optimized accordions/dropdowns
- Uniform candidate listing cards
- Consistent brand/favicon/share image
- Correct Preisser Solutions CTA
- No "What You Should Know"
- No standalone "In Their Own Words"
- Source links retained
- No giant ugly social-media boxes
- No raw dump feeling

### F. Verified Form Routing

Expected deliverable:

- Working correction/contact form
- Submissions route to Tyler's email
- Form activation status documented
- Any possible old failed/cached submissions investigated

### G. Correct Deployment

Expected deliverable:

- Git changes committed
- Git changes pushed
- GitHub Pages preview updated
- Cloudflare production domain prepared or deployed
- Public links verified in browser
- No wrong-instance links

### H. A Durable Resume System

Expected deliverable:

- Project state files
- Run state files
- Agent state files
- Candidate work folders
- Evidence and issue matrices on disk
- Handoff files after every major step
- Clear blockers and next actions

The next agent should be able to resume by reading disk, not by asking Tyler to repeat everything.

## Correct Operating Model Going Forward

1. Read the orchestration files and this file first.
2. Verify the candidate/race roster from primary sources.
3. Inventory all existing research before launching new research.
4. Build evidence matrices per candidate.
5. Build fixed issue matrices per candidate.
6. Write candidate profiles from the matrices, not directly from memory.
7. Review every profile for accuracy, symmetry, and source strength.
8. Implement the UI after the data model is real.
9. Validate build, mobile, source links, forms, SEO/share media, and public deployment.
10. Commit and push.
11. Update state files so compaction does not erase progress.

## Definition of Done

Do not claim the work is complete until all of the following are true:

- Every relevant race has a verified roster.
- Every candidate has a complete profile or documented thin-public-record caveat.
- Every candidate has all fixed issues filled.
- Every candidate has source-backed sections.
- Social evidence has been analyzed and either used with caveat or rejected as irrelevant.
- Old research has been preserved or intentionally superseded with a reason.
- UI is polished on desktop and mobile.
- Candidate tiles are uniform.
- "What You Should Know" is gone.
- Standalone "In Their Own Words" is gone.
- Preisser Solutions branding is correct.
- Footer/floating CTA uses the approved snippet.
- Favicon/share media are consistent.
- Correction form routing is verified or explicitly blocked.
- GitHub Pages preview is verified.
- Cloudflare production deployment is verified or explicitly blocked.
- All changes are committed and pushed.
- State, handoff, validation, and release notes are written to disk.

## The Plain-English Takeaway

Tyler wanted a finished, trustworthy, premium voter-intelligence product.

The repeated failure was producing partial code/UI changes while the actual product remained under-hydrated, under-verified, inconsistently structured, and not reliably deployed.

The correct next move is not another cosmetic pass. The correct next move is disciplined completion: roster verification, evidence matrixing, candidate hydration, issue matrix writing, editorial review, premium UI implementation, form/deploy verification, and durable handoff.
