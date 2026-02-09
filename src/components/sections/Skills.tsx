// ============================================================
// Skills — Technical skills organized by category
// SRP: Responsible only for rendering the skills grid
// ============================================================

import { skills } from "../../data/skills";
import { SectionHeader } from "../common/SectionHeader";
import { TechBadge } from "../common/TechBadge";

export function Skills() {
  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="skills"
          title="Technical Skills"
          subtitle="Tools and technologies I work with every day"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl bg-slate-800/20 border border-slate-800/40 hover:border-cyan-900/30 transition-all group"
            >
              {/* Category header with emoji */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{group.icon}</span>
                <h3 className="text-sm font-semibold text-slate-200 tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
