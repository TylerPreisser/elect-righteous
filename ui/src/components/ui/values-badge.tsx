import { CheckCircle, Minus, AlertTriangle, HelpCircle } from "lucide-react";

type ValuesRating = "Strong" | "Moderate" | "Weak" | "Unknown";

interface ValuesBadgeProps {
  rating: ValuesRating;
  className?: string;
}

const config: Record<
  ValuesRating,
  {
    bg: string;
    text: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
  }
> = {
  Strong: {
    bg: "bg-green-flag-bg",
    text: "text-green-flag",
    Icon: CheckCircle,
    label: "Strong",
  },
  Moderate: {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    Icon: Minus,
    label: "Moderate",
  },
  Weak: {
    bg: "bg-red-flag-bg",
    text: "text-red-flag",
    Icon: AlertTriangle,
    label: "Weak",
  },
  Unknown: {
    bg: "bg-unknown-bg",
    text: "text-unknown",
    Icon: HelpCircle,
    label: "Unknown",
  },
};

export default function ValuesBadge({ rating, className = "" }: ValuesBadgeProps) {
  const { bg, text, Icon, label } = config[rating] ?? config.Unknown;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold font-heading ${bg} ${text} ${className}`}
      aria-label={`Values alignment: ${label}`}
    >
      <Icon size={14} className="shrink-0" aria-hidden="true" />
      {label}
    </span>
  );
}
