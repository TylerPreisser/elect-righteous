# Cloudflare Deploy - 2026-05-20

## Result
- Created Cloudflare Pages project: `elect-righteous`.
- Built a root-domain static export with:
  - `NEXT_PUBLIC_SITE_BASE_PATH=`
  - `NEXT_PUBLIC_SITE_URL=https://electrighteous.com`
- Deployed `ui/out` to Cloudflare Pages with Wrangler.
- Cloudflare Pages URL verified: `https://elect-righteous.pages.dev/`.

## Deployment
- Wrangler account: `Tylerpreisser@gmail.com's Account`.
- Account ID: `af76b8aeaa433c3fd3c17ce77375062f`.
- Project: `elect-righteous`.
- Pages deployment URL returned by Wrangler: `https://7e3db27b.elect-righteous.pages.dev`.
- Stable Pages URL verified with HTTP 200: `https://elect-righteous.pages.dev/`.

## Production-Domain Status
- Added custom domains through the Cloudflare Pages API:
  - `electrighteous.com`
  - `www.electrighteous.com`
- Domain status after add:
  - `electrighteous.com`: `initializing`, verification `pending`, error `CNAME record not set`
  - `www.electrighteous.com`: `pending`, verification `pending`, error `CNAME record not set`
- DNS lookups still fail for both hostnames:
  - `electrighteous.com`
  - `www.electrighteous.com`

## Blocker
The current Wrangler OAuth token has Pages write and zone read access, but not DNS record write access. Attempts to list/create DNS records under the `electrighteous.com` zone returned Cloudflare API 403 authentication errors.

Required DNS records:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `electrighteous.com` | `elect-righteous.pages.dev` | Proxied |
| CNAME | `www` | `elect-righteous.pages.dev` | Proxied |

Once those DNS records exist, retry Pages custom-domain validation with the Cloudflare Pages domain API or dashboard.

## Verification
- Root Pages build sample checked clean:
  - contains `https://electrighteous.com` production metadata
  - contains root `/_next/` assets
  - does not contain `/elect-righteous/`
  - does not contain targeted forbidden/internal phrases
- Stable Pages URL HTML fetched successfully and matched the expected root-domain build.
