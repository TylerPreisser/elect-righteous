"use client";

import { useState, useEffect } from "react";

const HOOKS = [
  "Need a Website Like This?",
  "Want More Customers Finding You Online?",
  "Tired of Doing Everything by Hand?",
  "Is Your Website Costing You Business?",
  "Need Help Getting Found on Google?",
  "Want Tech That Actually Makes Sense?",
  "Too Busy to Handle It All Yourself?",
  "Ready to Stop Losing Customers Online?",
  "Need a Local Team You Can Trust?",
  "We Built This. We Can Build Yours.",
];

const CYCLE_MS = 4000;

export default function BuiltByBadge() {
  const basePath = process.env.NODE_ENV === "production" ? "/elect-righteous" : "";
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      // Fade out, swap text, fade in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % HOOKS.length);
        setAnimating(false);
      }, 300);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-50 no-print">
      <a
        href="https://preissersolutions.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.04]"
        style={{
          backgroundColor: "rgba(16, 64, 93, 0.95)",
          border: "1px solid rgba(28, 195, 175, 0.25)",
        }}
        aria-label="Visit Preisser Solutions — custom websites, apps, and AI for Kansas businesses"
      >
        <img
          src={`${basePath}/preisser-solutions-logo.png`}
          alt=""
          width={30}
          height={30}
          className="rounded-md flex-shrink-0"
          aria-hidden="true"
        />
        <div className="flex flex-col leading-tight min-w-0">
          <span
            className={`text-[13px] font-heading font-bold text-white tracking-wide group-hover:text-teal transition-all duration-300 whitespace-nowrap ${
              animating ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            {HOOKS[index]}
          </span>
          <span className="text-[11px] font-body text-white/55">
            Preisser Solutions &mdash; Right Here in Kansas
          </span>
        </div>

        {/* Arrow */}
        <svg
          className="w-4 h-4 text-teal opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>

        {/* Glow on hover */}
        <span
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "0 0 25px rgba(28, 195, 175, 0.2)",
          }}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
