"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  className?: string;
  durationMs?: number;
  value: number;
};

export default function CountUp({ className, durationMs = 980, value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * eased));

        if (progress < 1) {
          frame = window.requestAnimationFrame(step);
        }
      };

      frame = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        run();
        observer.disconnect();
      },
      { threshold: 0.28 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [durationMs, value]);

  return (
    <span ref={ref} className={className} aria-label={value.toLocaleString()}>
      {displayValue.toLocaleString()}
    </span>
  );
}
