"use client";

import { useState, useEffect } from "react";

export default function BuiltByBadge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const basePath = process.env.NODE_ENV === "production" ? "/elect-righteous" : "";

  // Show badge after a short delay so it doesn't compete with page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 no-print transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      <a
        href="https://preissersolutions.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 pl-2.5 pr-3.5 py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
        style={{
          backgroundColor: "rgba(16, 64, 93, 0.92)",
          border: "1px solid rgba(28, 195, 175, 0.2)",
        }}
        aria-label="This website was built by Preisser Solutions — click to learn more"
      >
        <img
          src={`${basePath}/preisser-solutions-logo.png`}
          alt=""
          width={20}
          height={20}
          className="rounded-sm"
          aria-hidden="true"
        />
        <span className="text-[11px] font-body text-white/80 leading-tight">
          <span className="text-white/50">Built by</span>{" "}
          <span className="font-semibold text-white/90 group-hover:text-teal transition-colors duration-300">
            Preisser Solutions
          </span>
        </span>

        {/* Subtle glow on hover */}
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "0 0 20px rgba(28, 195, 175, 0.15)",
          }}
          aria-hidden="true"
        />
      </a>

      {/* Dismiss button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDismissed(true);
        }}
        className="absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center rounded-full text-white/40 hover:text-white/80 transition-all duration-200 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: "rgba(16, 64, 93, 0.95)", fontSize: "10px" }}
        aria-label="Dismiss badge"
      >
        &times;
      </button>
    </div>
  );
}
