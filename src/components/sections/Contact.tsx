// ============================================================
// Contact — Contact information and call-to-action
// SRP: Responsible only for rendering contact details
// Includes scroll reveal animation
// ============================================================

import { profile } from "../../data/profile";
import { SectionHeader } from "../common/SectionHeader";
import { SocialIcon } from "../common/SocialIcon";
import { useStaggerReveal } from "../../hooks/useScrollReveal";

export function Contact() {
  const cardsRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="contact"
          title="Get in Touch"
          subtitle="Let's discuss how I can contribute to your team"
        />

        <div ref={cardsRef} className="max-w-2xl">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href={`mailto:${profile.email}`}
              className="stagger-item flex items-center gap-4 p-4 rounded-xl bg-slate-800/20 border border-slate-800/40 hover:border-cyan-800/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-800/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-900/30 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="text-sm text-slate-300">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="stagger-item flex items-center gap-4 p-4 rounded-xl bg-slate-800/20 border border-slate-800/40 hover:border-cyan-800/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-800/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-900/30 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                <p className="text-sm text-slate-300">{profile.phone}</p>
              </div>
            </a>

            <div className="stagger-item flex items-center gap-4 p-4 rounded-xl bg-slate-800/20 border border-slate-800/40">
              <div className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700/30 flex items-center justify-center text-slate-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Location</p>
                <p className="text-sm text-slate-300">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Social links row */}
          <div className="stagger-item flex items-center gap-4 pt-4 border-t border-slate-800/30">
            <span className="text-xs text-slate-600 uppercase tracking-wider">Find me on</span>
            {profile.socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/30 border border-slate-800/40 text-slate-500 hover:text-cyan-400 hover:border-cyan-800/30 transition-all text-sm"
              >
                <SocialIcon name={s.icon} size={14} />
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
