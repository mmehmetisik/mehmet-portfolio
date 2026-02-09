// ============================================================
// useScrollReveal — Custom hook for scroll-triggered animations
// Uses Intersection Observer API (zero dependencies)
// Usage: const ref = useScrollReveal<HTMLDivElement>();
// ============================================================

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(
  threshold: number = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add the hidden class initially
    el.classList.add("scroll-hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-visible");
          el.classList.remove("scroll-hidden");
          observer.unobserve(el); // Only animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

// Hook for staggered children animations (e.g., cards appearing one by one)
export function useStaggerReveal<T extends HTMLElement>(
  threshold: number = 0.1
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(".stagger-item");
    children.forEach((child) => child.classList.add("scroll-hidden"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add("scroll-visible");
              child.classList.remove("scroll-hidden");
            }, i * 100); // 100ms delay between each child
          });
          observer.unobserve(container);
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
