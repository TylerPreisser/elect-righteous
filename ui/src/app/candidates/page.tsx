"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import Container from "@/components/layout/container";
import CandidateCard from "@/components/ui/candidate-card";
import { CANDIDATE_CARDS, PartyKey } from "@/data/candidates";

type PartyFilter = "All" | PartyKey;
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
  { value: "Incumbent", label: "Incumbent" },
  { value: "Challenger", label: "Challenger" },
];

export default function CandidatesPage() {
  const [query, setQuery] = useState("");
  const [partyFilter, setPartyFilter] = useState<PartyFilter>("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const filtered = useMemo(() => {
    return CANDIDATE_CARDS.filter((c) => {
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
      <SiteHeader />

      <main id="main-content">
        {/* ── Page Header ──────────────────────────────────────────── */}
        <section
          className="section-navy"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          aria-labelledby="candidates-heading"
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
                id="candidates-heading"
                className="font-heading font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                All Candidates
              </h1>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(246,246,246,0.80)" }}
              >
                50+ officials and candidates researched — backgrounds, voting
                records, campaign finance, and values alignment.
              </p>
            </div>
          </Container>
        </section>

        {/* ── Search, Filters, and Grid ────────────────────────────── */}
        <section className="section-light" aria-labelledby="candidates-grid-label">
          <Container>
            <h2 id="candidates-grid-label" className="sr-only">
              Candidate list
            </h2>

            {/* Search + Filters bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {/* Search input */}
              <div className="relative flex-1">
                <label htmlFor="candidate-search" className="sr-only">
                  Search candidates by name, position, or occupation
                </label>
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "var(--color-slate)" }}
                  aria-hidden="true"
                />
                <input
                  id="candidate-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, position, or office…"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm font-body bg-white transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1"
                  style={{
                    borderColor: "#e2e8f0",
                    color: "var(--color-charcoal)",
                  }}
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded transition-colors duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    style={{ color: "var(--color-slate)" }}
                    aria-label="Clear search"
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                )}
              </div>

              {/* Party filter */}
              <div>
                <label htmlFor="party-filter" className="sr-only">
                  Filter by party
                </label>
                <select
                  id="party-filter"
                  value={partyFilter}
                  onChange={(e) => setPartyFilter(e.target.value as PartyFilter)}
                  className="h-full px-3 py-2.5 rounded-lg border text-sm font-body bg-white transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 cursor-pointer"
                  style={{
                    borderColor: "#e2e8f0",
                    color: "var(--color-charcoal)",
                    minWidth: "140px",
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
              <div>
                <label htmlFor="status-filter" className="sr-only">
                  Filter by incumbent status
                </label>
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                  className="h-full px-3 py-2.5 rounded-lg border text-sm font-body bg-white transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 cursor-pointer"
                  style={{
                    borderColor: "#e2e8f0",
                    color: "var(--color-charcoal)",
                    minWidth: "140px",
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
            <div className="flex items-center justify-between mb-6">
              <p
                className="text-sm font-body"
                style={{ color: "var(--color-slate)" }}
                aria-live="polite"
                aria-atomic="true"
              >
                Showing{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-navy)" }}
                >
                  {filtered.length}
                </span>{" "}
                of {CANDIDATE_CARDS.length} candidates
              </p>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded px-1"
                  style={{ color: "var(--color-teal-dark)" }}
                >
                  <X size={13} aria-hidden="true" />
                  Clear filters
                </button>
              )}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                role="list"
                aria-label="Candidates"
              >
                {filtered.map((candidate) => (
                  <li key={candidate.slug}>
                    <CandidateCard
                      name={candidate.name}
                      position={candidate.position}
                      party={candidate.party}
                      incumbent={candidate.incumbent}
                      occupation={candidate.occupation}
                      consistencyRating={candidate.consistencyRating}
                      slug={candidate.slug}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-20">
                <p
                  className="font-heading font-bold text-xl mb-2"
                  style={{ color: "var(--color-navy)" }}
                >
                  No candidates match your search
                </p>
                <p
                  className="text-sm mb-5"
                  style={{ color: "var(--color-slate)" }}
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

      <SiteFooter />
    </>
  );
}
