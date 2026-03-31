"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  BookOpen,
  Shield,
  Star,
  List,
  User,
} from "lucide-react";
import Container from "@/components/layout/container";
import Badge from "@/components/ui/badge";
import ConsistencyBadge from "@/components/ui/consistency-badge";
import ValuesBadge from "@/components/ui/values-badge";
import QuoteBlock from "@/components/ui/quote-block";
import type { CandidateFull } from "@/data/candidates";

function CollapsibleSection({
  id, title, icon, defaultOpen = true, children,
}: {
  id: string; title: string; icon: React.ReactNode; defaultOpen?: boolean; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section aria-labelledby={`${id}-heading`} className="border rounded-xl overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
      <button
        id={`${id}-heading`}
        className="w-full flex items-center justify-between gap-3 px-6 py-5 text-left transition-colors duration-150 hover:bg-light focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal"
        style={{ backgroundColor: open ? "var(--color-light)" : "white" }}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-controls={`${id}-content`}
      >
        <span className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0" style={{ backgroundColor: "var(--color-navy)", color: "white" }} aria-hidden="true">{icon}</span>
          <span className="font-heading font-bold text-lg" style={{ color: "var(--color-navy)" }}>{title}</span>
        </span>
        {open ? <ChevronUp size={18} className="flex-shrink-0 opacity-60" style={{ color: "var(--color-navy)" }} /> : <ChevronDown size={18} className="flex-shrink-0 opacity-60" style={{ color: "var(--color-navy)" }} />}
      </button>
      <div id={`${id}-content`} hidden={!open} className="px-6 py-6 border-t" style={{ borderColor: "#e2e8f0" }}>{children}</div>
    </section>
  );
}

export default function CandidateDetailClient({ candidate }: { candidate: CandidateFull }) {
  const partyLabel = candidate.party === "R" ? "Republican" : candidate.party === "D" ? "Democrat" : candidate.party === "NP" ? "Nonpartisan" : "Independent";
  const isFullDossier = candidate.slug === "tracey-mann";

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b" style={{ backgroundColor: "var(--color-light)", borderColor: "#e2e8f0" }}>
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 py-3 text-sm font-body flex-wrap" style={{ color: "var(--color-slate)" }}>
            <Link href="/" className="hover:underline" style={{ color: "var(--color-teal-dark)" }}>Home</Link>
            <ChevronRight size={14} className="opacity-40" />
            <Link href="/candidates" className="hover:underline" style={{ color: "var(--color-teal-dark)" }}>Candidates</Link>
            <ChevronRight size={14} className="opacity-40" />
            <span aria-current="page" style={{ color: "var(--color-charcoal)" }}>{candidate.name}</span>
          </nav>
        </Container>
      </div>

      {/* Header */}
      <section className="section-navy" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <Container>
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="party">{partyLabel}</Badge>
              <Badge variant="status">{candidate.incumbent ? "Incumbent" : "Challenger"}</Badge>
              {!isFullDossier && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-heading tracking-wide" style={{ backgroundColor: "rgba(196,146,42,0.20)", color: "var(--color-gold-light)" }}>Research In Progress</span>}
            </div>
            <h1 className="font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>{candidate.name}</h1>
            <p className="font-heading font-semibold text-lg uppercase tracking-wide" style={{ color: "var(--color-teal)" }}>{candidate.position}</p>
            <p className="text-sm" style={{ color: "rgba(246,246,246,0.70)" }}>{candidate.occupation}</p>
            <div className="mt-1"><ConsistencyBadge rating={candidate.consistencyRating} /></div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <div style={{ backgroundColor: "var(--color-light)", paddingTop: "3rem", paddingBottom: "4rem" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Executive Summary */}
              <section className="bg-white rounded-xl border p-6" style={{ borderColor: "#e2e8f0" }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0" style={{ backgroundColor: "var(--color-navy)", color: "white" }}><User size={16} /></span>
                  <h2 className="font-heading font-bold text-xl" style={{ color: "var(--color-navy)" }}>Executive Summary</h2>
                </div>
                <div className="flex flex-col gap-4">
                  {candidate.executiveSummary.map((p, i) => <p key={i} className="text-base leading-relaxed" style={{ color: "var(--color-charcoal)" }}>{p}</p>)}
                </div>
              </section>

              {candidate.background && candidate.background !== "Research in progress." && (
                <CollapsibleSection id="background" title="Background" icon={<BookOpen size={16} />}>
                  <p className="text-base leading-relaxed whitespace-pre-line" style={{ color: "var(--color-charcoal)" }}>{candidate.background}</p>
                </CollapsibleSection>
              )}

              {candidate.politicalRecord && candidate.politicalRecord !== "Research in progress." && (
                <CollapsibleSection id="political-record" title="Political Record" icon={<List size={16} />} defaultOpen={false}>
                  <p className="text-base leading-relaxed whitespace-pre-line" style={{ color: "var(--color-charcoal)" }}>{candidate.politicalRecord}</p>
                </CollapsibleSection>
              )}

              {candidate.quotes.length > 0 && (
                <CollapsibleSection id="quotes" title="In Their Own Words" icon={<Star size={16} />}>
                  <div className="flex flex-col">{candidate.quotes.map((q, i) => <QuoteBlock key={i} text={q.text} source={q.source} date={q.date} url={q.url} topic={q.topic} />)}</div>
                </CollapsibleSection>
              )}

              {(candidate.flags.length > 0 || isFullDossier) && (
                <CollapsibleSection id="integrity" title="Integrity Assessment" icon={<Shield size={16} />}>
                  {candidate.consistencyNotes && candidate.consistencyNotes !== "Insufficient data at this time." && (
                    <div className="rounded-lg p-4 mb-6 text-sm leading-relaxed" style={{ backgroundColor: "var(--color-light)", color: "var(--color-charcoal)", borderLeft: "3px solid var(--color-teal)" }}>
                      <p className="font-semibold font-heading text-xs uppercase tracking-widest mb-2" style={{ color: "var(--color-teal-dark)" }}>Consistency Analysis</p>
                      <p>{candidate.consistencyNotes}</p>
                    </div>
                  )}
                  {candidate.flags.length > 0 && (
                    <div className="flex flex-col gap-4">
                      {candidate.flags.map((flag, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-lg border" style={{ backgroundColor: flag.type === "red" ? "var(--color-red-flag-bg)" : "var(--color-green-flag-bg)", borderColor: flag.type === "red" ? "var(--color-red-flag)" : "var(--color-green-flag)", borderLeftWidth: "3px" }}>
                          <span className="flex-shrink-0 mt-0.5" style={{ color: flag.type === "red" ? "var(--color-red-flag)" : "var(--color-green-flag)" }}>
                            {flag.type === "red" ? <AlertTriangle size={18} /> : <CheckCircle size={18} />}
                          </span>
                          <div>
                            <p className="font-heading font-bold text-sm mb-1" style={{ color: flag.type === "red" ? "var(--color-red-flag)" : "var(--color-green-flag)" }}>{flag.label}</p>
                            <p className="text-sm leading-relaxed" style={{ color: flag.type === "red" ? "#5a1a1d" : "#1a4a35" }}>{flag.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CollapsibleSection>
              )}

              {candidate.valuesPillars.length > 0 && (
                <CollapsibleSection id="values" title="Values Alignment" icon={<Star size={16} />} defaultOpen={false}>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-slate)" }}>Assessed against 8 pillars of Judeo-Christian moral framework based on public record, votes, statements, and observable conduct.</p>
                  <div className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
                    <table className="w-full text-sm">
                      <thead><tr style={{ backgroundColor: "var(--color-light)" }}>
                        <th className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Pillar</th>
                        <th className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Rating</th>
                        <th className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest hidden md:table-cell" style={{ color: "var(--color-navy)" }}>Notes</th>
                      </tr></thead>
                      <tbody>{candidate.valuesPillars.map((p, i) => (
                        <tr key={i} className="border-t" style={{ borderColor: "#f1f5f9" }}>
                          <td className="px-5 py-4"><span className="font-heading font-semibold text-sm" style={{ color: "var(--color-navy)" }}>{p.pillar}</span></td>
                          <td className="px-5 py-4"><ValuesBadge rating={p.rating} /></td>
                          <td className="px-5 py-4 text-sm hidden md:table-cell" style={{ color: "var(--color-slate)" }}>{p.notes}</td>
                        </tr>
                      ))}</tbody>
                    </table>
                  </div>
                </CollapsibleSection>
              )}

              {candidate.sources.length > 0 && (
                <CollapsibleSection id="sources" title="Sources" icon={<ExternalLink size={16} />} defaultOpen={false}>
                  <p className="text-sm mb-5" style={{ color: "var(--color-slate)" }}>All claims in this dossier are drawn from the publicly available sources listed below.</p>
                  <ol className="flex flex-col gap-3">
                    {candidate.sources.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: "var(--color-charcoal)" }}>
                        <span className="flex-shrink-0 font-heading font-bold text-xs w-5 pt-0.5" style={{ color: "var(--color-slate)" }}>{i + 1}.</span>
                        <div>
                          <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold font-heading inline-flex items-center gap-1 hover:underline" style={{ color: "var(--color-teal-dark)" }}>{s.title} <ExternalLink size={11} /></a>
                          <p className="text-xs mt-0.5" style={{ color: "var(--color-slate)" }}>{s.publication}{s.date && <> &mdash; <time dateTime={s.date}>{new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(s.date + "T12:00:00"))}</time></>}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CollapsibleSection>
              )}
            </div>

            {/* Right column: sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="bg-white rounded-xl border p-6 sticky top-24" style={{ borderColor: "#e2e8f0" }}>
                <h2 className="font-heading font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "var(--color-navy)" }}>At A Glance</h2>
                <dl className="flex flex-col gap-4 text-sm">
                  {[
                    { label: "Born", value: candidate.born },
                    { label: "Hometown", value: candidate.hometown },
                    { label: "Religion", value: candidate.religion },
                    { label: "Education", value: candidate.education },
                    { label: "Family", value: candidate.family },
                    { label: "District", value: candidate.district },
                    { label: "2024 Result", value: candidate.margin2024 },
                  ].filter((f) => f.value).map((f) => (
                    <div key={f.label}>
                      <dt className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--color-teal-dark)" }}>{f.label}</dt>
                      <dd style={{ color: "var(--color-charcoal)" }}>{f.value}</dd>
                    </div>
                  ))}
                </dl>

                {candidate.campaignFinance && (
                  <div className="mt-6 pt-5 border-t" style={{ borderColor: "#e2e8f0" }}>
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSign size={15} style={{ color: "var(--color-teal)" }} />
                      <h3 className="font-heading font-bold text-sm uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Campaign Finance</h3>
                    </div>
                    <dl className="flex flex-col gap-3 text-sm">
                      <div>
                        <dt className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--color-teal-dark)" }}>Total Raised</dt>
                        <dd className="font-heading font-bold text-base" style={{ color: "var(--color-navy)" }}>{candidate.campaignFinance.totalRaised}</dd>
                      </div>
                      <div>
                        <dt className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--color-teal-dark)" }}>Top Donor</dt>
                        <dd style={{ color: "var(--color-charcoal)" }}>{candidate.campaignFinance.topDonor}<span className="block font-heading font-semibold" style={{ color: "var(--color-navy)" }}>{candidate.campaignFinance.topDonorAmount}</span></dd>
                      </div>
                      <div>
                        <dt className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--color-teal-dark)" }}>PAC Funded</dt>
                        <dd>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#e2e8f0" }}>
                              <div className="h-full rounded-full" style={{ width: `${candidate.campaignFinance.pacFundedPercent}%`, backgroundColor: candidate.campaignFinance.pacFundedPercent > 50 ? "var(--color-gold)" : "var(--color-teal)" }} />
                            </div>
                            <span className="font-heading font-bold text-sm" style={{ color: "var(--color-navy)" }}>{candidate.campaignFinance.pacFundedPercent}%</span>
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}

                {candidate.electionSlug && (
                  <div className="mt-6 pt-5 border-t" style={{ borderColor: "#e2e8f0" }}>
                    <Link href={`/elections/${candidate.electionSlug}`} className="text-sm font-semibold font-heading inline-flex items-center gap-1.5" style={{ color: "var(--color-teal)" }}>
                      View election details <ChevronRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}
