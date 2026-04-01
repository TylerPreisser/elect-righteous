"use client";

import { useState } from "react";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import Container from "@/components/layout/container";
import ElectionCard from "@/components/ui/election-card";
import { ELECTIONS, ElectionLevel } from "@/data/elections";

type FilterTab = "All" | ElectionLevel;

const FILTER_TABS: FilterTab[] = [
  "All",
  "Federal",
  "State",
  "Local",
  "Ballot Measure",
];

export default function ElectionsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const filtered =
    activeFilter === "All"
      ? ELECTIONS
      : ELECTIONS.filter((e) => e.level === activeFilter);

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        {/* ── Page Header ──────────────────────────────────────────── */}
        <section
          className="section-navy"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          aria-labelledby="elections-heading"
        >
          <Container>
            <div className="max-w-2xl">
              <p
                className="text-xs font-heading font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-teal)" }}
              >
                Hays, Kansas &mdash; 2026 Cycle
              </p>
              <h1
                id="elections-heading"
                className="font-heading font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                2026 Elections
              </h1>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(246,246,246,0.80)" }}
              >
                Every race on the ballot for Hays, Kansas voters. We searched
                everywhere, verified everything, and wrote it in plain English
                so you can decide.
              </p>
            </div>
          </Container>
        </section>

        {/* ── Filter Tabs + Grid ───────────────────────────────────── */}
        <section className="section-light" aria-labelledby="elections-grid-label">
          <Container>
            {/* Screen-reader label */}
            <h2 id="elections-grid-label" className="sr-only">
              Election list
            </h2>

            {/* Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter elections by level"
              className="flex flex-wrap gap-2 mb-10"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab;
                const count =
                  tab === "All"
                    ? ELECTIONS.length
                    : ELECTIONS.filter((e) => e.level === tab).length;

                return (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(tab)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-heading font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal ${
                      isActive
                        ? "text-white shadow-md"
                        : "hover:shadow-sm"
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: "var(--color-navy)" }
                        : {
                            backgroundColor: "white",
                            color: "var(--color-slate)",
                            border: "1.5px solid #e2e8f0",
                          }
                    }
                  >
                    {tab}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Results count */}
            <p
              className="text-sm font-body mb-6"
              style={{ color: "var(--color-slate)" }}
              aria-live="polite"
              aria-atomic="true"
            >
              Showing{" "}
              <span className="font-semibold" style={{ color: "var(--color-navy)" }}>
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "election" : "elections"}
              {activeFilter !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <span className="font-semibold" style={{ color: "var(--color-navy)" }}>
                    {activeFilter}
                  </span>
                </>
              )}
            </p>

            {/* Grid */}
            {filtered.length > 0 ? (
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                role="list"
                aria-label="Elections"
              >
                {filtered.map((election) => (
                  <li key={election.slug}>
                    <ElectionCard
                      name={election.name}
                      date={election.date}
                      type={election.level}
                      candidateCount={election.candidateCount}
                      jurisdiction={election.jurisdiction}
                      slug={election.slug}
                      plainEnglish={election.plainEnglish}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-16">
                <p
                  className="font-heading font-bold text-xl mb-2"
                  style={{ color: "var(--color-navy)" }}
                >
                  No elections found
                </p>
                <p className="text-sm" style={{ color: "var(--color-slate)" }}>
                  Try selecting a different filter above.
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
