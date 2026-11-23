#!/usr/bin/env bash
# Deploy origin/main to Cloudflare Pages (project elect-righteous -> https://electrighteous.com) from this machine.
# Mirrors .github/workflows/deploy-cloudflare.yml (the GitHub Pages leg in deploy.yml is legacy and is NOT mirrored).
# Usage: _workspace/tools/deploy.sh <repo dir> <sha> [--dry-run]    (the launcher exports CLOUDFLARE_API_TOKEN/ACCOUNT_ID)
set -euo pipefail

SHA_ARG=""; DRY=0
for a in "$@"; do
  case "$a" in
    --dry-run) DRY=1 ;;
    -*) echo "unknown flag: $a (usage: deploy-from-clean-checkout.sh <sha on origin/main> [--dry-run])" >&2; exit 2 ;;
    *) [ -z "$SHA_ARG" ] || { echo "only one sha" >&2; exit 2; }; SHA_ARG="$a" ;;
  esac
done
[ -n "$SHA_ARG" ] || { echo "usage: deploy-from-clean-checkout.sh <sha on origin/main> [--dry-run]" >&2; exit 2; }

REPO="$(cd "$(dirname "$0")/.." && pwd)"
HOST="https://electrighteous.com"
PROJECT="elect-righteous"
GH_REPO="TylerPreisser/elect-righteous"
WRANGLER="wrangler@4.53.0"
: "${CLOUDFLARE_API_TOKEN:?FATAL: CLOUDFLARE_API_TOKEN is unset; run through _workspace/tools/deploy.sh}"
: "${CLOUDFLARE_ACCOUNT_ID:?FATAL: CLOUDFLARE_ACCOUNT_ID is unset; run through _workspace/tools/deploy.sh}"

REFUSALS=0
refuse() {
  if [ "$DRY" = 1 ]; then echo "DRY-RUN would refuse: $*" >&2; REFUSALS=$((REFUSALS + 1)); else echo "FATAL: $*" >&2; exit 1; fi
}
[ "$DRY" = 1 ] && echo "== DRY RUN: nothing will be changed in production"

LOCK="${TMPDIR:-/tmp}/elect-righteous-deploy.lock"
exec 9>"$LOCK"
flock -n 9 || { echo "FATAL: another elect-righteous deploy holds $LOCK; one deployer at a time" >&2; exit 1; }

# ---- gates: on origin/main, green ci-local -----------------------------------------------------------------------------
git -C "$REPO" fetch -q origin main
SHA="$(git -C "$REPO" rev-parse "${SHA_ARG}^{commit}")"
git -C "$REPO" merge-base --is-ancestor "$SHA" origin/main || refuse "$SHA is not on origin/main (push it first)"
GH_TOKEN="$(gh auth token --user TylerPreisser 2>/dev/null || true)"; export GH_TOKEN
STATUS_LINE="$(gh api "repos/$GH_REPO/commits/$SHA/status" --jq '[.statuses[] | select(.context=="ci-local")][0] | "\(.state)\t\(.description)"' 2>/dev/null || true)"
STATE="${STATUS_LINE%%$'\t'*}"
if [ "$STATE" = "success" ]; then
  echo "ci-local green for $SHA: ${STATUS_LINE#*$'\t'}"
else
  refuse "$SHA has no green ci-local status (found '${STATE:-none}'); run _workspace/tools/ci-local/run.sh --repo $REPO --status $SHA and wait"
fi
unset GH_TOKEN

# ---- clean scratch worktree of exactly $SHA ----------------------------------------------------------------------------
SCRATCH="$(mktemp -d)"; WT="$SCRATCH/deploy"
git -C "$REPO" worktree add --detach "$WT" "$SHA" >/dev/null
cleanup() { git -C "$REPO" worktree remove --force "$WT" >/dev/null 2>&1 || true; rm -rf "$SCRATCH"; }
trap cleanup EXIT
BUILD_SHA="$(git -C "$WT" rev-parse HEAD)"
[ "$BUILD_SHA" = "$SHA" ] || { echo "FATAL: worktree HEAD $BUILD_SHA != requested $SHA" >&2; exit 1; }
TS="$(date -u +%Y%m%dT%H%M%SZ)"
VERSION_TAG="${BUILD_SHA:0:7}-$TS"

# ---- BUILD (custom-domain build: empty base path) ----------------------------------------------------------------------
echo "== building $BUILD_SHA ($VERSION_TAG) in $WT"
cd "$WT/ui"
npm ci --no-audit --no-fund > "$SCRATCH/ci.log" 2>&1 || { cat "$SCRATCH/ci.log"; exit 1; }
npm run build:cloudflare
test -f out/index.html || { echo "FATAL: out/index.html missing; not deploying" >&2; exit 1; }
if grep -q '/elect-righteous/_next/' out/index.html; then
  echo "FATAL: out/index.html references /elect-righteous/_next/ (GitHub Pages build); not deploying" >&2; exit 1
fi
[ -z "$(git -C "$WT" status --porcelain)" ] || { echo "FATAL: tree is dirty after the build: $(git -C "$WT" status --porcelain | head -5)" >&2; exit 1; }

# ---- prove the token, record the rollback target BEFORE rolling out ----------------------------------------------------
cd "$WT"
npx --yes "$WRANGLER" whoami > "$SCRATCH/whoami.txt" 2>&1 || true
grep -q "$CLOUDFLARE_ACCOUNT_ID" "$SCRATCH/whoami.txt" || { echo "FATAL: the Cloudflare token cannot see account $CLOUDFLARE_ACCOUNT_ID" >&2; cat "$SCRATCH/whoami.txt" >&2; exit 1; }
echo "cloudflare token ok for account $CLOUDFLARE_ACCOUNT_ID"

API="https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$PROJECT"
curl -fsS -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" "$API" > "$SCRATCH/project.json" || { echo "FATAL: cannot read Pages project $PROJECT" >&2; exit 1; }
PREV_ID="$(python3 -c 'import json,sys;print((json.load(open(sys.argv[1]))["result"].get("canonical_deployment") or {}).get("id",""))' "$SCRATCH/project.json")"
[ -n "$PREV_ID" ] || { echo "FATAL: no current production deployment id found; no rollback target" >&2; exit 1; }
ROLLBACK="curl -fsS -X POST -H \"Authorization: Bearer \$CLOUDFLARE_API_TOKEN\" $API/deployments/$PREV_ID/rollback"
echo "ROLLBACK target: deployment $PREV_ID"
echo "ROLLBACK command (needs CLOUDFLARE_API_TOKEN from the vault via _workspace/tools/deploy.sh env): $ROLLBACK"

# Asset proof: a build-unique hashed chunk referenced by the built page.
ASSET="$(grep -o '/_next/static/chunks/[A-Za-z0-9_.~%-]*\.js' "$WT/ui/out/index.html" | head -1)"
[ -n "$ASSET" ] || { echo "FATAL: built index.html references no hashed chunk; cannot prove the live build" >&2; exit 1; }
ASSET_SHA="$(sha256sum "$WT/ui/out$ASSET" | cut -d' ' -f1)"
echo "proof asset: $ASSET sha256 $ASSET_SHA"

if [ "$DRY" = 1 ]; then
  echo "== DRY RUN: would run: npx $WRANGLER pages deploy ui/out --project-name $PROJECT --branch main --commit-hash $BUILD_SHA"
  echo "== DRY RUN: would then fetch $HOST$ASSET and require sha256 $ASSET_SHA"
  echo "DRY-RUN COMPLETE for $BUILD_SHA: $REFUSALS gate(s) would refuse; nothing was deployed. Rollback: $ROLLBACK"
  exit 0
fi

# ---- ROLLOUT (a separate command from the build above) -----------------------------------------------------------------
npx --yes "$WRANGLER" pages deploy ui/out --project-name "$PROJECT" --branch main --commit-hash "$BUILD_SHA" --commit-message "deploy $VERSION_TAG"

# ---- prove the LIVE host serves this build -----------------------------------------------------------------------------
fail() { echo "FAILED: $1" >&2; echo "ROLLBACK: $ROLLBACK" >&2; exit 1; }
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  got="$(curl -fsS -H 'cache-control: no-cache' "$HOST$ASSET?v=$TS$i" 2>/dev/null | sha256sum | cut -d' ' -f1 || true)"
  [ "$got" = "$ASSET_SHA" ] && break
  sleep 5
done
[ "$got" = "$ASSET_SHA" ] || fail "$HOST$ASSET does not match the built chunk"
# Read the page whole before matching: with pipefail, `curl | grep -q` fails (curl exit 23) when grep stops reading early.
home="$(curl -fsS -H 'cache-control: no-cache' "$HOST/")" || fail "could not fetch live $HOST/"
grep -qF "$ASSET" <<<"$home" || fail "live $HOST/ does not reference $ASSET"
echo "DEPLOYED $BUILD_SHA ($VERSION_TAG) to $HOST; previous deployment $PREV_ID"
echo "ROLLBACK: $ROLLBACK"
