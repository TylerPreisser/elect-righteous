import ValuesBadge from "./values-badge";

type ValuesRating = "Strong" | "Moderate" | "Weak" | "Unknown";

// The 8 pillars from the Judeo-Christian values framework in CLAUDE.md
const PILLAR_LABELS: Record<string, string> = {
  sanctityOfLife: "Sanctity of Life",
  protectionOfFamily: "Protection of Family",
  religiousLiberty: "Religious Liberty",
  honestyAndIntegrity: "Honesty & Integrity",
  careForVulnerable: "Care for the Vulnerable",
  justiceAndRuleOfLaw: "Justice & Rule of Law",
  stewardshipOfResources: "Stewardship of Resources",
  communityAndNeighborlyLove: "Community & Neighborly Love",
};

interface ValuesObject {
  sanctityOfLife?: ValuesRating;
  protectionOfFamily?: ValuesRating;
  religiousLiberty?: ValuesRating;
  honestyAndIntegrity?: ValuesRating;
  careForVulnerable?: ValuesRating;
  justiceAndRuleOfLaw?: ValuesRating;
  stewardshipOfResources?: ValuesRating;
  communityAndNeighborlyLove?: ValuesRating;
  [key: string]: ValuesRating | undefined;
}

interface ValuesAlignmentChartProps {
  values: ValuesObject;
  className?: string;
}

export default function ValuesAlignmentChart({
  values,
  className = "",
}: ValuesAlignmentChartProps) {
  const pillars = Object.keys(PILLAR_LABELS);

  return (
    <div
      className={`rounded-lg border border-gray-200 overflow-hidden ${className}`}
      aria-label="Values alignment chart"
    >
      {/* Header */}
      <div className="bg-navy px-5 py-3">
        <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
          Judeo-Christian Values Alignment
        </h3>
      </div>

      {/* Pillar rows */}
      <dl className="divide-y divide-gray-100">
        {pillars.map((key) => {
          const rating: ValuesRating = values[key] ?? "Unknown";
          const label = PILLAR_LABELS[key];
          return (
            <div
              key={key}
              className="flex items-center justify-between gap-4 px-5 py-3.5 bg-white hover:bg-light transition-colors duration-150"
            >
              <dt className="font-body text-sm text-charcoal font-medium leading-snug">
                {label}
              </dt>
              <dd className="shrink-0">
                <ValuesBadge rating={rating} />
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
