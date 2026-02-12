// ============================================================
// Hero Landing section with name, title, and call-to-action
// SRP: Responsible only for the first-impression landing area
// ============================================================

import { profile } from "../../data/profile";
import { SocialIcon } from "../common/SocialIcon";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl text-center">
        {/* Greeting tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-sm text-slate-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-4">
          {profile.name.split(" ")[0]}
          <span className="text-cyan-400">.</span>
          <br />
          <span className="text-slate-400 text-3xl md:text-4xl font-light">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-4 tracking-wide">
          {profile.title}
        </p>

        {/* Tagline */}
        <p className="text-base text-slate-500 max-w-xl mx-auto mb-10">
          {profile.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-700 hover:border-cyan-500/50 text-slate-300 rounded-lg transition-all hover:bg-slate-800/50"
          >
            Get in Touch
          </a>
          <a
            href="/Mehmet_ISIK_CV.pdf"
            download
            className="px-6 py-3 border border-slate-700 hover:border-emerald-500/50 text-slate-300 rounded-lg transition-all hover:bg-slate-800/50 inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          {profile.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-400 transition-all hover:-translate-y-0.5"
              aria-label={s.platform}
            >
              <SocialIcon name={s.icon} size={22} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}