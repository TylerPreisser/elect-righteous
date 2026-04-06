"use client";

export default function BuiltByBadge() {
  const basePath = process.env.NODE_ENV === "production" ? "/elect-righteous" : "";

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
        aria-label="Need a website like this? Visit Preisser Solutions"
      >
        <img
          src={`${basePath}/preisser-solutions-logo.png`}
          alt=""
          width={30}
          height={30}
          className="rounded-md flex-shrink-0"
          aria-hidden="true"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-heading font-bold text-white tracking-wide group-hover:text-teal transition-colors duration-300">
            Need a Website Like This?
          </span>
          <span className="text-[11px] font-body text-white/55">
            Preisser Solutions &mdash; Websites, Apps &amp; AI
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
