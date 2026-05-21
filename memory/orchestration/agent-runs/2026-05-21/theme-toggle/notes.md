# Theme Toggle Notes

- Added an inline first-paint theme script in `ui/src/app/layout.tsx` so the site chooses `light` or `dark` from `localStorage` when present, otherwise from `prefers-color-scheme`.
- Added a desktop text toggle and a mobile top-nav icon toggle in `ui/src/components/layout/site-header.tsx`; the full mobile menu also keeps a wide theme toggle.
- Converted the dark redesign shell, header, footer, cards, candidate profile panels, correction form, and listing pages to theme variables so light devices do not get the dark-only palette.
- Browser QA verified the root-domain static build loads in system dark mode on this machine, toggles to light from the nav, has 0 horizontal overflow, and has no current-page browser console errors.
- Forced-color-scheme screenshots were captured for desktop light/dark and mobile light/dark in `memory/orchestration/theme-qa-2026-05-21/`.
