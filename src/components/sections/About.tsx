// ============================================================
// About — Bio section with summary and key stats
// SRP: Responsible only for the personal introduction content
// Includes scroll reveal + counter animation for stats
// ============================================================

import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { SectionHeader } from "../common/SectionHeader";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";

// Key stats shown as highlight cards
const stats = [
  { value: "10+", label: "Years Industrial & Engineering Experience", numeric: 10 },
  { value: "120+", label: "Kaggle Notebooks", numeric: 120 },
  { value: "20+", label: "LLMs Benchmarked", numeric: 20 },
  { value: "90%", label: "Efficiency Gains Delivered", numeric: 90 },
];

// Custom hook: animate a number from 0 to target
function useCountUp(target: number, trigger: boolean, duration: number = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out curve for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [trigger, target, duration]);

  return count;
}

// Individual stat card with counter animation
function StatCard({ stat, trigger }: { stat: typeof stats[number]; trigger: boolean }) {
  const count = useCountUp(stat.numeric, trigger);
  const suffix = stat.value.includes("%") ? "%" : "+";

  return (
    <div className="stagger-item p-4 rounded-xl bg-slate-800/30 border border-slate-800/50 text-center hover:border-cyan-800/30 transition-colors">
      <div className="text-2xl font-bold text-cyan-400 mb-1">
        {trigger ? `${count}${suffix}` : stat.value}
      </div>
      <div className="text-xs text-slate-500 leading-tight">
        {stat.label}
      </div>
    </div>
  );
}

export function About() {
  const bioRef = useScrollReveal<HTMLDivElement>();
  const statsRef = useStaggerReveal<HTMLDivElement>();
  const [statsVisible, setStatsVisible] = useState(false);
  const statsObserverRef = useRef<HTMLDivElement>(null);

  // Separate observer for triggering counter animation
  useEffect(() => {
    const el = statsObserverRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          subtitle="The intersection of engineering and AI"
        />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Bio text — takes 3 columns */}
          <div ref={bioRef} className="md:col-span-3 space-y-4">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats grid — takes 2 columns */}
          <div
            ref={(node) => {
              // Merge both refs
              (statsRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
              (statsObserverRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }}
            className="md:col-span-2 grid grid-cols-2 gap-3 self-start"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} trigger={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
