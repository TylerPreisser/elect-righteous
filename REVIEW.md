# REVIEW.md — evidence bar for elect-righteous

Every finding needs a concrete failing scenario and file:line citations, confidence 0–100,
discard anything under 80. Read the implementation, not just the diff; trace callers;
discard a finding if the behavior is guarded, intentional, or undemonstrable.

EXCLUDED: style, speculative risk, feature requests, generated code (compiled
`ui/src/data/v2/*.ts` modules where the finding is about the compiler, not the data),
lockfiles, anything a linter would catch. Conformance to an Accepted ADR
(`DECISIONS/`) is never a defect — see `DECISIONS/README.md`.

## Repo-specific must-checks

1. **Sourcing integrity** — any new or changed claim in `ui/src/data/v2/*.ts` or
   `reports/*.md` must resolve to a real `Source` entry. An orphaned `sourceId` or
   `mappedToIssueId`, or a `gap` with zero `evidenceIds`, is a real defect —
   `validateCandidateV2()` in `ui/src/data/types-v2.ts` is the ground truth to check against.
2. **Static-export violations** — any server route, `getServerSideProps`, or dynamic API
   handler added under `ui/` breaks both the Cloudflare and GitHub Pages static deploys;
   flag it as a defect, not a style preference.
3. **Grading/scoring reintroduction** — any badge, star rating, color-coded score, or
   Strong/Moderate/Weak label in a candidate-facing component is a banned-pattern defect
   (see `CLAUDE.md` non-negotiable content rules), not a nit.
4. **Editorial bias/symmetry** — narrative text using partisan shorthand, scripture quotes,
   an "In Their Own Words" section, or framing that would read differently for the opposite
   party given the same evidence is a real defect per `AGENTS.md:409-490`, not a subjective
   style call.
