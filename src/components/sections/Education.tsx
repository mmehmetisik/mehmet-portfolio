// ============================================================
// Education — Education history and certifications
// SRP: Responsible only for rendering education & certs
// ============================================================

import { education, certifications } from "../../data/education";
import { SectionHeader } from "../common/SectionHeader";

export function Education() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="education"
          title="Education & Certifications"
          subtitle="Continuous learning from engineering to AI"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-800/20 border border-slate-800/40"
                >
                  <h4 className="text-[15px] font-semibold text-slate-100 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-slate-400">{edu.institution}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-cyan-400 font-mono">
                      {edu.period}
                    </span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-500 mt-2">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Training & Certifications
            </h3>
            <div className="space-y-2">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/15 border border-slate-800/30 hover:border-slate-700/50 transition-colors"
                >
                  <div>
                    <p className="text-sm text-slate-200">{cert.name}</p>
                    <p className="text-xs text-slate-500">{cert.provider}</p>
                  </div>
                  <span className="text-xs text-slate-600 font-mono flex-shrink-0 ml-3">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
