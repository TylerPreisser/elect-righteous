"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import Container from "@/components/layout/container";
import CandidateCard from "@/components/ui/candidate-card";
import { V2_CANDIDATES } from "@/data/v2";
import { ELECTIONS } from "@/data/elections";
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

const ELECTION_BY_SLUG = new Map(ELECTIONS.map((election) => [election.slug, election]));
const ELECTION_ORDER = new Map(ELECTIONS.map((election, index) => [election.slug, index]));

function getOfficeValue(candidate: (typeof V2_CANDIDATES)[number]): string {
  return candidate.electionSlug || `position:${candidate.position}`;
}

function getOfficeLabel(candidate: (typeof V2_CANDIDATES)[number]): string {
  return ELECTION_BY_SLUG.get(candidate.electionSlug)?.name ?? candidate.position;
}

export default function CandidatesPage() {
  const [query, setQuery] = useState("");
  const [officeFilter, setOfficeFilter] = useState("All");
  const [partyFilter, setPartyFilter] = useState<PartyFilter>("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const officeOptions = useMemo(() => {
    const counts = new Map<string, { label: string; count: number; order: number }>();

    V2_CANDIDATES.forEach((candidate) => {
      const value = getOfficeValue(candidate);
      const existing = counts.get(value);
      counts.set(value, {
        label: existing?.label ?? getOfficeLabel(candidate),
        count: (existing?.count ?? 0) + 1,
        order: ELECTION_ORDER.get(candidate.electionSlug) ?? 10_000,
      });
    });

    return [...counts.entries()]
      .map(([value, item]) => ({ value, ...item }))
      .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));
  }, []);

  const filtered = useMemo(() => {
    return V2_CANDIDATES.filter((c) => {
      // Text search: name or position
      if (query.trim()) {
        const q = query.toLowerCase();
        const officeLabel = getOfficeLabel(c).toLowerCase();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesPosition = c.position.toLowerCase().includes(q);
        const matchesOccupation = c.occupation.toLowerCase().includes(q);
        if (!matchesName && !matchesPosition && !matchesOccupation && !officeLabel.includes(q)) return false;
      }

      // Office filter
      if (officeFilter !== "All" && getOfficeValue(c) !== officeFilter) return false;

      // Party filter
      if (partyFilter !== "All" && c.party !== partyFilter) return false;

      // Status filter
      if (statusFilter === "Incumbent" && !c.incumbent) return false;
      if (statusFilter === "Challenger" && c.incumbent) return false;

      return true;
    });
  }, [query, officeFilter, partyFilter, statusFilter]);

  const hasActiveFilters =
    query.trim() !== "" ||
    officeFilter !== "All" ||
    partyFilter !== "All" ||
    statusFilter !== "All";

  function clearFilters() {
    setQuery("");
    setOfficeFilter("All");
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
                Search every profile in the public record file, then narrow the list by office,
                party, or current officeholder status.
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
              Profile list
            </h2>

            {/* Search + Filters bar */}
            <div className="er-panel mb-8 rounded-lg p-4 md:sticky md:top-20 md:z-20">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="er-kicker mb-1">Find a profile</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--er-muted)" }}>
                    Filter by the office or public role first, then narrow by party or status.
                  </p>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md border px-3 text-sm font-heading font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                    style={{ borderColor: "var(--er-border-strong)", color: "var(--color-teal)" }}
                  >
                    <X size={13} aria-hidden="true" />
                    Clear
                  </button>
                )}
              </div>

              <div className="grid gap-3 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,1fr)_12rem_12rem]">
                {/* Search input */}
                <div className="min-w-0">
                  <label
                    htmlFor="candidate-search"
                    className="mb-1.5 block text-xs font-heading font-bold uppercase tracking-wider"
                    style={{ color: "var(--er-muted-soft)" }}
                  >
                    Search
                  </label>
                  <div className="relative">
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
                      placeholder="Name, office, role, or keyword"
                      className="min-h-12 w-full pl-9 pr-11 rounded-md border text-base font-body transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-teal md:text-sm"
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
                </div>

                {/* Office filter */}
                <div className="min-w-0">
                  <label
                    htmlFor="office-filter"
                    className="mb-1.5 block text-xs font-heading font-bold uppercase tracking-wider"
                    style={{ color: "var(--er-muted-soft)" }}
                  >
                    Office / position
                  </label>
                  <select
                    id="office-filter"
                    value={officeFilter}
                    onChange={(e) => setOfficeFilter(e.target.value)}
                    className="min-h-12 w-full rounded-md border px-3 text-base font-body transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-teal md:text-sm cursor-pointer"
                    style={{
                      borderColor: "var(--er-border-strong)",
                      color: "var(--er-text-strong)",
                      backgroundColor: "var(--er-input-bg)",
                    }}
                  >
                    <option value="All">All offices and roles</option>
                    {officeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label} ({opt.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Party filter */}
                <div className="min-w-0">
                  <label
                    htmlFor="party-filter"
                    className="mb-1.5 block text-xs font-heading font-bold uppercase tracking-wider"
                    style={{ color: "var(--er-muted-soft)" }}
                  >
                    Party
                  </label>
                  <select
                    id="party-filter"
                    value={partyFilter}
                    onChange={(e) => setPartyFilter(e.target.value as PartyFilter)}
                    className="min-h-12 w-full rounded-md border px-3 text-base font-body transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-teal md:text-sm cursor-pointer"
                    style={{
                      borderColor: "var(--er-border-strong)",
                      color: "var(--er-text-strong)",
                      backgroundColor: "var(--er-input-bg)",
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
                  <label
                    htmlFor="status-filter"
                    className="mb-1.5 block text-xs font-heading font-bold uppercase tracking-wider"
                    style={{ color: "var(--er-muted-soft)" }}
                  >
                    Status
                  </label>
                  <select
                    id="status-filter"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                    className="min-h-12 w-full rounded-md border px-3 text-base font-body transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-teal md:text-sm cursor-pointer"
                    style={{
                      borderColor: "var(--er-border-strong)",
                      color: "var(--er-text-strong)",
                      backgroundColor: "var(--er-input-bg)",
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
                of {V2_CANDIDATES.length} profiles
              </p>

              <span className="text-sm" style={{ color: "var(--er-muted-soft)" }}>
                Office filter:{" "}
                <span style={{ color: "var(--er-text-strong)" }}>
                  {officeFilter === "All"
                    ? "All offices"
                    : officeOptions.find((opt) => opt.value === officeFilter)?.label ?? "Selected office"}
                </span>
              </span>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-6"
                role="list"
                aria-label="Candidate and official profiles"
              >
                {filtered.map((candidate, index) => (
                  <li key={candidate.slug} className={`h-full er-reveal er-reveal-delay-${Math.min(index % 4, 3)}`}>
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
                  No profiles match your search
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
