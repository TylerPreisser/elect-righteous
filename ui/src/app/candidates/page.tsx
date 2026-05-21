"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import Container from "@/components/layout/container";
import CandidateCard from "@/components/ui/candidate-card";
import { V2_CANDIDATES } from "@/data/v2";
import { getProfileMetrics } from "@/lib/profile-metrics";

type PartyFilter = "All" | "R" | "D" | "I" | "NP";
type StatusFilter = "All" | "Incumbent" | "Challenger";

const PARTY_OPTIONS: { value: PartyFilter; label: string }[] = [
  { value: "All", label: "All Parties" },
  { value: "R", label: "Republican" },
  { value: "D", label: "Democrat" },
  { value: "I", label: "Independent" },
  { value: "NP", label: "Nonpartisan" },
];

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "All", label: "Any Status" },
  { value: "Incumbent", label: "Currently in Office" },
  { value: "Challenger", label: "Challenger" },
];

export default function CandidatesPage() {
  const [query, setQuery] = useState("");
  const [partyFilter, setPartyFilter] = useState<PartyFilter>("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const filtered = useMemo(() => {
    return V2_CANDIDATES.filter((c) => {
      // Text search: name or position
      if (query.trim()) {
        const q = query.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesPosition = c.position.toLowerCase().includes(q);
        const matchesOccupation = c.occupation.toLowerCase().includes(q);
        if (!matchesName && !matchesPosition && !matchesOccupation) return false;
      }

      // Party filter
      if (partyFilter !== "All" && c.party !== partyFilter) return false;

      // Status filter
      if (statusFilter === "Incumbent" && !c.incumbent) return false;
      if (statusFilter === "Challenger" && c.incumbent) return false;

      return true;
    });
  }, [query, partyFilter, statusFilter]);

  const hasActiveFilters =
    query.trim() !== "" ||
    partyFilter !== "All" ||
    statusFilter !== "All";

  function clearFilters() {
    setQuery("");
    setPartyFilter("All");
    setStatusFilter("All");
  }

  return (
    <>

      <main id="main-content" className="er-shell min-h-screen">
        <div className="er-grid-bg" aria-hidden="true" />
        {/* ── Page Header ──────────────────────────────────────────── */}
        <section
          className="section-navy relative"
          style={{ paddingTop: "3rem", paddingBottom: "3.25rem" }}
          aria-labelledby="candidates-heading"
        >
          <Container className="relative z-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
              <p
                className="text-xs font-heading font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-teal)" }}
              >
                Hays, Kansas &mdash; 2026 Cycle
              </p>
              <h1
                id="candidates-heading"
                className="font-heading font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Candidate and Official Profiles
              </h1>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--er-muted)" }}
              >
                {V2_CANDIDATES.length} officials and candidates researched -
                backgrounds, public actions, faith/community ties where public, campaign finance, and
                sourced reporting in plain English.
              </p>
              </div>

              <div className="er-panel grid grid-cols-3 gap-2 rounded-lg p-3 text-white">
                <div>
                  <p className="font-heading text-2xl font-bold">{V2_CANDIDATES.length}</p>
                  <p className="text-xs uppercase tracking-wide text-white/60">profiles</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">
                    {V2_CANDIDATES.reduce((sum, c) => sum + c.sources.length, 0).toLocaleString()}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-white/60">sources</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">14</p>
                  <p className="text-xs uppercase tracking-wide text-white/60">issues each</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Search, Filters, and Grid ────────────────────────────── */}
        <section className="section-light relative" aria-labelledby="candidates-grid-label">
          <Container className="relative z-10">
            <h2 id="candidates-grid-label" className="sr-only">
              Candidate list
            </h2>

            {/* Search + Filters bar */}
            <div
              className="er-panel sticky top-16 z-20 mb-8 grid gap-3 rounded-lg p-3 md:grid-cols-[minmax(0,1fr)_auto_auto]"
            >
              {/* Search input */}
              <div className="relative flex-1">
                <label htmlFor="candidate-search" className="sr-only">
                  Search candidates by name, position, or occupation
                </label>
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "var(--er-muted-soft)" }}
                  aria-hidden="true"
                />
                <input
                  id="candidate-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, position, or office…"
                  className="min-h-11 w-full pl-9 pr-11 rounded-md border text-sm font-body transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-teal"
                  style={{
                    borderColor: "var(--er-border-strong)",
                    color: "var(--er-text-strong)",
                    backgroundColor: "var(--er-input-bg)",
                  }}
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded transition-colors duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    style={{ color: "var(--er-muted)" }}
                    aria-label="Clear search"
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                )}
              </div>

              {/* Party filter */}
              <div className="min-w-0">
                <label htmlFor="party-filter" className="sr-only">
                  Filter by party
                </label>
                <select
                  id="party-filter"
                  value={partyFilter}
                  onChange={(e) => setPartyFilter(e.target.value as PartyFilter)}
                  className="min-h-11 w-full rounded-md border px-3 text-sm font-body transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-teal md:w-auto cursor-pointer"
                  style={{
                    borderColor: "var(--er-border-strong)",
                    color: "var(--er-text-strong)",
                    backgroundColor: "var(--er-input-bg)",
                    minWidth: "10.5rem",
                  }}
                >
                  {PARTY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status filter */}
              <div className="min-w-0">
                <label htmlFor="status-filter" className="sr-only">
                  Filter by incumbent status
                </label>
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                  className="min-h-11 w-full rounded-md border px-3 text-sm font-body transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-teal md:w-auto cursor-pointer"
                  style={{
                    borderColor: "var(--er-border-strong)",
                    color: "var(--er-text-strong)",
                    backgroundColor: "var(--er-input-bg)",
                    minWidth: "11.5rem",
                  }}
                >
                  {STATUS_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results bar */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p
                className="text-sm font-body"
                style={{ color: "var(--er-muted)" }}
                aria-live="polite"
                aria-atomic="true"
              >
                Showing{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--er-text-strong)" }}
                >
                  {filtered.length}
                </span>{" "}
                of {V2_CANDIDATES.length} candidates
              </p>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded px-1"
                  style={{ color: "var(--color-teal)" }}
                >
                  <X size={13} aria-hidden="true" />
                  Clear filters
                </button>
              )}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-6"
                role="list"
                aria-label="Candidates"
              >
                {filtered.map((candidate) => (
                  <li key={candidate.slug} className="h-full">
                    {(() => {
                      const metrics = getProfileMetrics(candidate);
                      return (
                        <CandidateCard
                          name={candidate.name}
                          position={candidate.position}
                          party={candidate.party}
                          incumbent={candidate.incumbent}
                          occupation={candidate.occupation}
                          slug={candidate.slug}
                          sourceCount={metrics.sourceCount}
                          issueCount={metrics.issueCount}
                          actionCount={metrics.actionCount}
                          socialCount={metrics.socialCount}
                        />
                      );
                    })()}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-20">
                <p
                className="font-heading font-bold text-xl mb-2"
                  style={{ color: "var(--er-text-strong)" }}
                >
                  No candidates match your search
                </p>
                <p
                  className="text-sm mb-5"
                  style={{ color: "var(--er-muted)" }}
                >
                  Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </Container>
        </section>
      </main>

    </>
  );
}
