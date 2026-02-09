// ============================================================
// About — Bio section with summary and key stats
// SRP: Responsible only for the personal introduction content
// ============================================================

import { profile } from "../../data/profile";
import { SectionHeader } from "../common/SectionHeader";

// Key stats shown as highlight cards
const stats = [
  { value: "10+", label: "Years Industry Experience" },
  { value: "80+", label: "Kaggle Notebooks" },
  { value: "18", label: "LLMs Benchmarked" },
  { value: "90%", label: "Efficiency Gains Delivered" },
];

export function About() {
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
          <div className="md:col-span-3 space-y-4">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats grid — takes 2 columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 self-start">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-slate-800/30 border border-slate-800/50 text-center hover:border-cyan-800/30 transition-colors"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
