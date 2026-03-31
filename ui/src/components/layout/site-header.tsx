"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "./container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/elections", label: "Elections" },
  { href: "/candidates", label: "Candidates" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 shadow-md backdrop-blur-sm"
            : "bg-white shadow-sm"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
              aria-label="Elect Righteous — Home"
            >
              {/* Cross icon mark */}
              <span
                className="flex items-center justify-center w-8 h-8 rounded"
                style={{ backgroundColor: "var(--color-navy)" }}
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
                className="text-lg font-heading font-bold tracking-widest uppercase transition-colors duration-200 group-hover:opacity-80"
                style={{ color: "var(--color-navy)" }}
              >
                Elect Righteous
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname != null && (pathname === href || pathname.startsWith(href + "/"));

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-4 py-2 text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                      isActive
                        ? "text-navy"
                        : "text-slate hover:text-navy"
                    }`}
                    style={
                      isActive
                        ? { color: "var(--color-navy)" }
                        : {}
                    }
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

            {/* Mobile hamburger button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal hover:bg-light"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              style={{ color: "var(--color-navy)" }}
            >
              {isMobileMenuOpen ? (
                <X size={22} strokeWidth={2.5} />
              ) : (
                <Menu size={22} strokeWidth={2.5} />
              )}
            </button>
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
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          {/* Panel header */}
          <div
            className="flex items-center justify-between px-6 h-16 border-b"
            style={{ borderColor: "var(--color-light)" }}
          >
            <span
              className="font-heading font-bold text-base uppercase tracking-widest"
              style={{ color: "var(--color-navy)" }}
            >
              Menu
            </span>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal hover:bg-light"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{ color: "var(--color-navy)" }}
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
                    className={`flex items-center gap-3 px-6 py-4 text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal ${
                      isActive
                        ? "bg-light"
                        : "hover:bg-light"
                    }`}
                    style={{
                      color: isActive
                        ? "var(--color-navy)"
                        : "var(--color-charcoal)",
                    }}
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

          {/* Footer tagline inside mobile menu */}
          <div className="mt-auto px-6 py-6 border-t" style={{ borderColor: "var(--color-light)" }}>
            <p
              className="text-xs font-body leading-relaxed"
              style={{ color: "var(--color-slate)" }}
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
