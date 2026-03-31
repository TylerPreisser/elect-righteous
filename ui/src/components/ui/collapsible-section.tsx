"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
  headingLevel?: "h2" | "h3" | "h4";
}

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
  className = "",
  headingLevel: Heading = "h3",
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleId = `collapsible-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={toggleId}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-white hover:bg-light transition-colors duration-200 text-left"
      >
        <Heading className="font-heading font-bold text-navy text-base leading-snug">
          {title}
        </Heading>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="shrink-0 text-teal"
          aria-hidden="true"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      {/* Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            id={toggleId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            aria-label={title}
          >
            <div className="px-5 py-4 border-t border-gray-200 bg-white">
              {children}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
