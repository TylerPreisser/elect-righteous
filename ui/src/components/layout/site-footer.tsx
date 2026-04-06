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

      {/* Preisser Solutions CTA Banner */}
      <div
        className="border-t border-b"
        style={{
          borderColor: "rgba(28, 195, 175, 0.15)",
          background: "linear-gradient(135deg, rgba(16, 64, 93, 0.6) 0%, rgba(42, 41, 41, 0.95) 50%, rgba(16, 64, 93, 0.6) 100%)",
        }}
      >
        <Container>
          <a
            href="https://preissersolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-between gap-5 py-8 sm:py-6"
            aria-label="Visit Preisser Solutions — custom websites, apps, and AI for Kansas businesses"
          >
            {/* Left: Logo + messaging */}
            <div className="flex items-center gap-4">
              <img
                src={`${process.env.NODE_ENV === "production" ? "/elect-righteous" : ""}/preisser-solutions-logo.png`}
                alt="Preisser Solutions"
                width={44}
                height={44}
                className="rounded-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col gap-1">
                <span
                  className="font-heading font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-teal transition-colors duration-300"
                >
                  Preisser Solutions
                </span>
                <span
                  className="text-sm font-body leading-snug"
                  style={{ color: "rgba(246, 246, 246, 0.65)" }}
                >
                  This site was designed &amp; built by us. We build websites, apps &amp; AI for Kansas businesses.
                </span>
              </div>
            </div>

            {/* Right: CTA button */}
            <span
              className="flex items-center gap-2 px-6 py-2.5 rounded-md font-heading font-semibold text-sm uppercase tracking-wider text-white flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-teal)",
              }}
            >
              Get in Touch
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </Container>
      </div>

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
