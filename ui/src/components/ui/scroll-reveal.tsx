"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      root.classList.add("er-reduced-motion");
      document.querySelectorAll<HTMLElement>(".er-reveal").forEach((item) => {
        item.classList.add("is-visible");
      });
      return;
    }

    root.classList.add("er-scroll-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    const observed = new WeakSet<HTMLElement>();

    const observeItem = (item: HTMLElement) => {
      if (item.classList.contains("is-visible") || observed.has(item)) return;
      observer.observe(item);
      observed.add(item);
    };

    const observeTree = (node: ParentNode) => {
      if (node instanceof HTMLElement && node.matches(".er-reveal")) {
        observeItem(node);
      }

      node.querySelectorAll<HTMLElement>(".er-reveal").forEach(observeItem);
    };

    const animationFrame = window.requestAnimationFrame(() => {
      observeTree(document);
    });

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          observeTree(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
