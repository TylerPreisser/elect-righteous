import ValuesBadge from "./values-badge";

type ValuesRating = "Strong" | "Moderate" | "Weak" | "Unknown";

interface CandidateValues {
  name: string;
  values: Record<string, ValuesRating | string>;
}

interface ComparisonTableProps {
  candidates: CandidateValues[];
  fields: string[];
  className?: string;
}

function FieldLabel({ field }: { field: string }) {
  // Convert camelCase or snake_case to Title Case with spaces
  const label = field
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim();
  return <>{label}</>;
}

function CellValue({ value }: { value: string }) {
  const ratingsMap: Record<string, ValuesRating> = {
    Strong: "Strong",
    Moderate: "Moderate",
    Weak: "Weak",
    Unknown: "Unknown",
  };

  if (value in ratingsMap) {
    return <ValuesBadge rating={ratingsMap[value]} />;
  }

  return <span className="text-sm text-charcoal">{value}</span>;
}

export default function ComparisonTable({
  candidates,
  fields,
  className = "",
}: ComparisonTableProps) {
  return (
    <div className={className}>
      {/* Desktop: horizontal table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 text-left font-heading font-semibold text-xs uppercase tracking-wider w-48">
                Category
              </th>
              {candidates.map((candidate) => (
                <th
                  key={candidate.name}
                  className="px-4 py-3 text-left font-heading font-semibold"
                >
                  {candidate.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fields.map((field, rowIdx) => (
              <tr
                key={field}
                className={rowIdx % 2 === 0 ? "bg-white" : "bg-light"}
              >
                <td className="px-4 py-3 font-heading font-semibold text-navy text-xs uppercase tracking-wide">
                  <FieldLabel field={field} />
                </td>
                {candidates.map((candidate) => (
                  <td key={candidate.name} className="px-4 py-3">
                    <CellValue value={candidate.values[field] ?? "Unknown"} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.name}
            className="rounded-lg border border-gray-200 overflow-hidden"
          >
            <div className="bg-navy px-4 py-3">
              <h3 className="font-heading font-bold text-white">{candidate.name}</h3>
            </div>
            <dl className="divide-y divide-gray-100">
              {fields.map((field) => (
                <div
                  key={field}
                  className="flex items-center justify-between gap-4 px-4 py-3 bg-white"
                >
                  <dt className="font-heading font-semibold text-xs uppercase tracking-wide text-slate shrink-0">
                    <FieldLabel field={field} />
                  </dt>
                  <dd>
                    <CellValue value={candidate.values[field] ?? "Unknown"} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
