import { Database, FileCheck2, Landmark, Search } from "lucide-react";

const SIGNALS = [
  { label: "Filings", icon: <Landmark size={15} strokeWidth={1.7} /> },
  { label: "Records", icon: <FileCheck2 size={15} strokeWidth={1.7} /> },
  { label: "Sources", icon: <Database size={15} strokeWidth={1.7} /> },
  { label: "Review", icon: <Search size={15} strokeWidth={1.7} /> },
];

export default function KineticDossier() {
  return (
    <div className="er-kinetic-stage" aria-hidden="true">
      <div className="er-kinetic-ring">
        <span />
        <span />
        <span />
      </div>

      <div className="er-kinetic-stack">
        {SIGNALS.map((signal, index) => (
          <div
            key={signal.label}
            className="er-kinetic-card"
            style={{ ["--er-card-index" as string]: index }}
          >
            <span className="er-kinetic-card-icon">{signal.icon}</span>
            <span>{signal.label}</span>
          </div>
        ))}
      </div>

      <div className="er-kinetic-thread er-kinetic-thread-a" />
      <div className="er-kinetic-thread er-kinetic-thread-b" />
      <div className="er-kinetic-marker" />
    </div>
  );
}
