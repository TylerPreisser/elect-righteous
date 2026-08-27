---
paths: ["ui/**"]
---

# Frontend conventions (ui/)

- Static export only (`output: "export"` in `ui/next.config.ts`). Never add a server route,
  `getServerSideProps`, or any dynamic API handler — it breaks both deploy targets.
- Two build variants, not one: `npm run build` sets `basePath: /elect-righteous` for GitHub
  Pages; `npm run build:cloudflare` overrides `NEXT_PUBLIC_SITE_BASE_PATH`/`NEXT_PUBLIC_SITE_URL`
  for the Cloudflare custom domain. Test the variant you actually intend to deploy.
- No `lint` script and no test framework exist in `ui/`. Don't assume one and don't invent a
  gate that doesn't run — use `npx tsc --noEmit` for type checking (verified clean 2026-08-26).
- Candidate data naming: kebab-case file/slug ↔ `SCREAMING_SNAKE_CASE_V2` exported constant
  (`ui/src/data/v2/index.ts`), barrel-exported into `index.ts`.
- Any edit to `ui/src/data/v2/*.ts` must keep `validateCandidateV2()`
  (`ui/src/data/types-v2.ts`) passing: every `sourceId` and `mappedToIssueId` must resolve to
  a real entry, no `gap` without at least one `evidenceIds` entry, no `ActionEvidence` backed
  only by a `social`-tier source.
- Legacy V1 routes (`ui/src/app/candidates/`) and V2 routes (`ui/src/app/candidates-v2/[slug]/`)
  coexist — check which tree a change belongs to before editing.
