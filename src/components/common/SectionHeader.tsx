// ============================================================
// SectionHeader — Reusable header for each page section
// SRP: Responsible only for rendering a styled section title
// ============================================================

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-2">
        <span className="text-cyan-400 mr-2">//</span>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-3 h-px w-20 bg-gradient-to-r from-cyan-400 to-transparent" />
    </div>
  );
}
