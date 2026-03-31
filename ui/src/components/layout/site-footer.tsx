import Link from "next/link";
import Container from "./container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/elections", label: "Elections" },
  { href: "/candidates", label: "Candidates" },
  { href: "/about", label: "About" },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "var(--color-dark)" }}
      className="text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container className="py-12">
        {/* Three-column grid: stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">

          {/* Column 1: Brand + tagline + scripture */}
          <div className="flex flex-col gap-4">
            {/* Logo mark + wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2 w-fit group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
              aria-label="Elect Righteous — Home"
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded flex-shrink-0"
                style={{ backgroundColor: "var(--color-teal)" }}
                aria-hidden="true"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="7.5" y="1" width="3" height="16" fill="white" rx="0.5" />
                  <rect x="2" y="5.5" width="14" height="3" fill="white" rx="0.5" />
                </svg>
              </span>
              <span className="font-heading font-bold text-lg uppercase tracking-widest text-white transition-opacity duration-200 group-hover:opacity-80">
                Elect Righteous
              </span>
            </Link>

            {/* Tagline */}
            <p
              className="font-heading font-semibold text-sm uppercase tracking-wider"
              style={{ color: "var(--color-teal)" }}
            >
              Know Your Candidates. Vote Your Values.
            </p>

            {/* Scripture */}
            <blockquote className="mt-1">
              <p
                className="font-serif italic text-sm leading-relaxed"
                style={{ color: "rgba(246, 246, 246, 0.75)" }}
              >
                &ldquo;When the righteous thrive, the people rejoice.&rdquo;
              </p>
              <footer
                className="mt-1 text-xs font-body font-semibold uppercase tracking-wider"
                style={{ color: "rgba(246, 246, 246, 0.45)" }}
              >
                &mdash; Proverbs 29:2
              </footer>
            </blockquote>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h2
              className="font-heading font-bold text-sm uppercase tracking-widest"
              style={{ color: "var(--color-teal)" }}
            >
              Quick Links
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2" role="list">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="footer-nav-link text-sm font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Location + disclaimer */}
          <div className="flex flex-col gap-4">
            <h2
              className="font-heading font-bold text-sm uppercase tracking-widest"
              style={{ color: "var(--color-teal)" }}
            >
              About This Platform
            </h2>

            {/* Location */}
            <div className="flex items-start gap-2">
              {/* Pin icon */}
              <svg
                className="mt-0.5 flex-shrink-0"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"
                  fill="rgba(246,246,246,0.55)"
                />
              </svg>
              <span
                className="text-sm font-body"
                style={{ color: "rgba(246, 246, 246, 0.70)" }}
              >
                Hays, Kansas
              </span>
            </div>

            {/* Disclaimer */}
            <p
              className="text-xs font-body leading-relaxed"
              style={{ color: "rgba(246, 246, 246, 0.50)" }}
            >
              Elect Righteous is an independent research platform providing
              source-cited public information about candidates and elections.
              All data is drawn from publicly available records. Research is
              updated as new information becomes available.
            </p>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(246, 246, 246, 0.10)" }}
      >
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
            <p
              className="text-xs font-body"
              style={{ color: "rgba(246, 246, 246, 0.40)" }}
            >
              &copy; {currentYear} Elect Righteous. All rights reserved.
            </p>
            <p
              className="text-xs font-body text-center"
              style={{ color: "rgba(246, 246, 246, 0.40)" }}
            >
              This platform does not endorse any candidate.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
