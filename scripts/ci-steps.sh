#!/usr/bin/env bash
# THIS REPO'S CI GATE: the ui/ build steps of both deploy workflows, in their order.
#   .github/workflows/deploy.yml (GitHub Pages, legacy leg):            npm ci, npx next build
#   .github/workflows/deploy-cloudflare.yml (production, electrighteous.com): npm ci, npm run build:cloudflare,
#     then "Check build has no GitHub Pages basePath" (out/index.html exists, no /elect-righteous/_next/ in it)
# npm ci runs once (same command, same lockfile). Run by the canonical runner (_workspace/tools/ci-local/run.sh,
# through the global pre-push hook) inside a CLEAN worktree ($WT); the first failing step ends the gate, as the
# workflow stops. The deploy steps are not mirrored. Keep it in step with both workflows.
# Helpers: run <name> <dir> <command...>; $CI_PYTHON3 is /usr/bin/python3 (3.9); $LOG is the gate's log.
CI_NODE=22
check_no_basepath() {  # deploy-cloudflare.yml "Check build has no GitHub Pages basePath", verbatim
  test -f out/index.html || { echo "no out/index.html"; return 1; }
  if grep -q '/elect-righteous/_next/' out/index.html; then
    echo "out/index.html references /elect-righteous/_next/ - GitHub Pages build, refusing to deploy"; return 1
  fi
}
ci_steps() {
  run npm-ci ui npm ci --no-audit --no-fund
  run next-build-pages ui npx next build
  run next-build-cloudflare ui npm run build:cloudflare
  run check-no-basepath ui check_no_basepath
}
ci_summary() { printf 'next build (pages + cloudflare) green; out %s files' "$(find "$WT/ui/out" -type f | wc -l | tr -d ' ')"; }
