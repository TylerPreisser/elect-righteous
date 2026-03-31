import { Shield, ShieldCheck, ShieldAlert, ShieldOff } from "lucide-react";

type ConsistencyRating = "HIGH" | "MODERATE" | "LOW" | "INSUFFICIENT_DATA";

interface ConsistencyBadgeProps {
  rating: ConsistencyRating;
  className?: string;
}

const config: Record<
  ConsistencyRating,
  {
    bg: string;
    text: string;
    border: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
    sublabel: string;
  }
> = {
  HIGH: {
    bg: "bg-green-flag-bg",
    text: "text-green-flag",
    border: "border-green-flag",
    Icon: ShieldCheck,
    label: "HIGH",
    sublabel: "Consistency",
  },
  MODERATE: {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    border: "border-yellow-400",
    Icon: Shield,
    label: "MODERATE",
    sublabel: "Consistency",
  },
  LOW: {
    bg: "bg-red-flag-bg",
    text: "text-red-flag",
    border: "border-red-flag",
    Icon: ShieldAlert,
    label: "LOW",
    sublabel: "Consistency",
  },
  INSUFFICIENT_DATA: {
    bg: "bg-unknown-bg",
    text: "text-unknown",
    border: "border-unknown",
    Icon: ShieldOff,
    label: "INSUFFICIENT",
    sublabel: "Data",
  },
};

export default function ConsistencyBadge({ rating, className = "" }: ConsistencyBadgeProps) {
  const { bg, text, border, Icon, label, sublabel } =
    config[rating] ?? config.INSUFFICIENT_DATA;

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold font-heading border ${bg} ${text} ${border} ${className}`}
      aria-label={`Consistency rating: ${label}`}
    >
      <Icon size={18} className="shrink-0" aria-hidden="true" />
      <span className="flex flex-col leading-tight">
        <span className="text-xs uppercase tracking-widest opacity-70">{sublabel}</span>
        <span>{label}</span>
      </span>
    </span>
  );
}
