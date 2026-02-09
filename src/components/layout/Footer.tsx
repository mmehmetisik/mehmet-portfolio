// ============================================================
// Footer — Site footer with copyright and social links
// SRP: Responsible only for footer content
// ============================================================

import { profile } from "../../data/profile";
import { SocialIcon } from "../common/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved
        </p>
        <div className="flex items-center gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label={s.platform}
            >
              <SocialIcon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
