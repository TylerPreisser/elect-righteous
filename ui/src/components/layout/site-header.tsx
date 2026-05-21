"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import Container from "./container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/elections", label: "Elections" },
  { href: "/candidates", label: "Candidates" },
  { href: "/about", label: "About" },
];

type SiteTheme = "light" | "dark";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<SiteTheme>("light");
  const pathname = usePathname();

  const applyTheme = (nextTheme: SiteTheme) => {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    setTheme(nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = window.localStorage.getItem("er-theme");
    const initialTheme =
      document.documentElement.dataset.theme === "dark" || document.documentElement.dataset.theme === "light"
        ? (document.documentElement.dataset.theme as SiteTheme)
        : stored === "dark" || stored === "light"
        ? stored
        : media.matches
        ? "dark"
        : "light";

    applyTheme(initialTheme);

    const handleSystemChange = (event: MediaQueryListEvent) => {
      const saved = window.localStorage.getItem("er-theme");
      if (saved !== "dark" && saved !== "light") {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("er-theme", nextTheme);
    applyTheme(nextTheme);
  };

  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeLabel = theme === "dark" ? "Light" : "Dark";

  return (
    <>
      <header
        className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "site-header--scrolled shadow-[0_18px_50px_rgba(0,0,0,0.20)]" : ""
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              aria-label="Elect Righteous — Home"
            >
              {/* Cross icon mark */}
              <span
                className="flex items-center justify-center w-8 h-8 rounded"
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
              <span
                className="site-header-title min-w-0 truncate text-base font-heading font-bold uppercase tracking-[0.14em] transition-colors duration-200 group-hover:opacity-80 sm:text-lg"
              >
                Elect Righteous
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <nav aria-label="Primary navigation" className="flex items-center gap-1">
                {NAV_LINKS.map(({ href, label }) => {
                  const isActive =
                    href === "/"
                      ? pathname === "/"
                      : pathname != null && (pathname === href || pathname.startsWith(href + "/"));

                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`site-header-link relative rounded px-4 py-2 text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                        isActive ? "is-active" : ""
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                      {/* Active teal underline */}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                          style={{ backgroundColor: "var(--color-teal)" }}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <ThemeIcon size={16} aria-hidden="true" />
                <span>{themeLabel}</span>
              </button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                className="site-header-icon-button flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                }}
              >
                <ThemeIcon size={19} aria-hidden="true" />
                <span className="sr-only">{themeLabel} mode</span>
              </button>

              {/* Mobile hamburger button */}
              {/* min-w-[44px] min-h-[44px]: Apple HIG 44x44px minimum tap target */}
              <button
                className="site-header-icon-button flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                }}
              >
                {isMobileMenuOpen ? (
                  <X size={22} strokeWidth={2.5} />
                ) : (
                  <Menu size={22} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-charcoal/60 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-out panel */}
        <nav
          className={`site-mobile-nav absolute top-0 right-0 flex h-full w-[min(18rem,calc(100vw-2rem))] flex-col border-l shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          {/* Panel header */}
          <div
            className="site-mobile-nav-border flex items-center justify-between px-6 h-16 border-b"
          >
            <span
              className="site-header-title font-heading font-bold text-base uppercase tracking-widest"
            >
              Menu
            </span>
            {/* min 44×44px tap target per Apple HIG */}
            <button
              className="site-header-icon-button flex items-center justify-center w-11 h-11 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
              }}
            >
              <X size={22} strokeWidth={2.5} />
            </button>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col py-4" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname != null && (pathname === href || pathname.startsWith(href + "/"));

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`site-mobile-link flex items-center gap-3 px-6 py-4 text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal ${
                      isActive ? "is-active" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Active teal indicator bar */}
                    <span
                      className={`w-1 h-5 rounded-full flex-shrink-0 transition-all duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ backgroundColor: "var(--color-teal)" }}
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-6">
            <button
              type="button"
              className="theme-toggle theme-toggle-mobile w-full justify-center"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <ThemeIcon size={16} aria-hidden="true" />
              <span>{themeLabel} mode</span>
            </button>
          </div>

          {/* Footer tagline inside mobile menu */}
          <div className="site-mobile-nav-border mt-auto px-6 py-6 border-t">
            <p
              className="site-mobile-muted text-xs font-body leading-relaxed"
            >
              Know Your Candidates. Vote Your Values.
            </p>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 md:h-18" aria-hidden="true" />
    </>
  );
}
