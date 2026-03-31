import { ReactNode } from "react";

type PartyKey = "R" | "D" | "I" | string;
type StatusKey = "Incumbent" | "Challenger" | string;

interface BadgeProps {
  variant: "party" | "status" | "type";
  children: ReactNode;
  className?: string;
}

function partyClasses(value: string): string {
  switch (value) {
    case "R":
    case "Republican":
      return "bg-red-100 text-red-800";
    case "D":
    case "Democrat":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

function statusClasses(value: string): string {
  switch (value) {
    case "Incumbent":
      return "bg-teal/10 text-teal";
    case "Challenger":
      return "bg-gold/10 text-gold";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function Badge({ variant, children, className = "" }: BadgeProps) {
  const text = typeof children === "string" ? children : "";

  let variantClasses = "";
  if (variant === "party") {
    variantClasses = partyClasses(text);
  } else if (variant === "status") {
    variantClasses = statusClasses(text);
  } else {
    // type variant — generic navy style
    variantClasses = "bg-navy/10 text-navy";
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-heading tracking-wide ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}
