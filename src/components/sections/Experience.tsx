// ============================================================
// Experience — Work history as a vertical timeline
// SRP: Responsible only for rendering work experience
// ============================================================

import { experience } from "../../data/experience";
import { SectionHeader } from "../common/SectionHeader";

export function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          subtitle="From plant management to AI leadership"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-800/40 via-slate-700/30 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-14">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-4 top-1.5 w-2 h-2 rounded-full -translate-x-[3px] ${
                    i === 0 ? "bg-cyan-400 ring-4 ring-cyan-400/20" : "bg-slate-600"
                  }`}
                />

                {/* Card */}
                <div className="p-5 rounded-xl bg-slate-800/20 border border-slate-800/40 hover:border-slate-700/60 transition-all">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-slate-400">{exp.company}</p>
                      {exp.location && (
                        <p className="text-xs text-slate-500">{exp.location}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span className="text-sm text-cyan-400 font-mono whitespace-nowrap">
                        {exp.period}
                      </span>
                      {exp.badge && (
                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md bg-emerald-950/40 text-emerald-400 border border-emerald-800/30">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mt-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-[14px] text-slate-400 leading-relaxed">
                        <span className="text-cyan-600 mt-1.5 flex-shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
