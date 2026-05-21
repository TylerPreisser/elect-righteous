"use client";

import { withSiteBasePath } from "@/lib/site-env";

export default function BuiltByBadge() {
  return (
    <div className="fixed bottom-5 left-5 z-50 hidden md:block no-print">
      <a
        href="https://www.preissersolutions.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="built-by-badge-link group flex h-[3.25rem] max-w-[calc(100vw-1.5rem)] items-center gap-3 overflow-hidden rounded-xl pl-3 pr-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:max-w-[18.5rem]"
        aria-label="Visit Preisser Solutions"
      >
        <img
          src={withSiteBasePath("/preisser-solutions-logo.webp")}
          alt=""
          width={30}
          height={30}
          className="h-[30px] w-[30px] flex-shrink-0 rounded-md"
          aria-hidden="true"
        />
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="truncate text-[12px] sm:text-[13px] font-heading font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-teal">
            Built by Preisser Solutions
          </span>
          <span className="truncate text-[10px] sm:text-[11px] font-body text-white/60">
            Websites, SEO, AI search, CRM, dashboards
          </span>
        </div>

        <svg
          className="ml-0.5 h-4 w-4 flex-shrink-0 text-teal transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>

        <span
          className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "0 0 25px rgba(28, 195, 175, 0.2)",
          }}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
