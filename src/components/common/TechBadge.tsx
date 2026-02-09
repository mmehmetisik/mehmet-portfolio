// ============================================================
// TechBadge — Small styled tag for technologies
// SRP: Responsible only for rendering a single tech tag
// ============================================================

interface TechBadgeProps {
  label: string;
  variant?: "default" | "accent" | "muted";
}

export function TechBadge({ label, variant = "default" }: TechBadgeProps) {
  const styles = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/50",
    accent: "bg-cyan-950/40 text-cyan-300 border-cyan-800/40",
    muted: "bg-slate-800/40 text-slate-500 border-slate-700/30",
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-md border ${styles[variant]} transition-colors`}
    >
      {label}
    </span>
  );
}
