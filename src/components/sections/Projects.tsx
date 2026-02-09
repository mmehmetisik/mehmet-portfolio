// ============================================================
// Projects — Filterable project gallery
// SRP: Responsible only for rendering project cards and filter UI
// Includes stagger reveal animation for project cards
// ============================================================

import { useState, useEffect, useRef } from "react";
import { projects, projectCategories, type ProjectCategory } from "../../data/projects";
import { SectionHeader } from "../common/SectionHeader";
import { TechBadge } from "../common/TechBadge";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter projects by selected category
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Show featured 6 first, then expand to show all
  const visible = showAll
    ? filtered
    : activeFilter === "All"
      ? projects.filter((p) => p.featured).slice(0, 6)
      : filtered.slice(0, 6);

  // Re-trigger stagger animation when filter changes or show all toggles
  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".project-card");
    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 80);
    });
  }, [activeFilter, showAll]);

  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="projects"
          title="Projects"
          subtitle="From Kaggle competitions to production AI systems"
        />

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <FilterButton
            label="All"
            count={projects.length}
            active={activeFilter === "All"}
            onClick={() => { setActiveFilter("All"); setShowAll(false); }}
          />
          {projectCategories.map((cat) => {
            const count = projects.filter((p) => p.category === cat).length;
            if (count === 0) return null;
            return (
              <FilterButton
                key={cat}
                label={cat}
                count={count}
                active={activeFilter === cat}
                onClick={() => { setActiveFilter(cat); setShowAll(false); }}
              />
            );
          })}
        </div>

        {/* Project cards grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} project={project} />
          ))}
        </div>

        {/* Show more / less toggle */}
        {filtered.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2.5 text-sm text-slate-400 border border-slate-700 rounded-lg hover:border-cyan-700/50 hover:text-cyan-400 transition-all"
            >
              {showAll ? "Show Less" : `Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Sub-components (private to this file) ──────────────────

/** Filter button used in the category tabs */
function FilterButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
        active
          ? "bg-cyan-950/50 text-cyan-300 border-cyan-700/50"
          : "bg-slate-800/30 text-slate-500 border-slate-800/40 hover:text-slate-300 hover:border-slate-700"
      }`}
    >
      {label}
      <span className="ml-1.5 text-xs opacity-60">{count}</span>
    </button>
  );
}

/** Individual project card */
function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <div className="project-card group p-5 rounded-xl bg-slate-800/20 border border-slate-800/40 hover:border-cyan-900/30 transition-all flex flex-col">
      {/* Top row: category + year */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-cyan-500/70 font-medium">{project.category}</span>
        <span className="text-xs text-slate-600 font-mono">{project.year}</span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="text-xs text-slate-500 mb-2 italic">{project.subtitle}</p>

      {/* Description */}
      <p className="text-[13px] text-slate-400 leading-relaxed mb-3 flex-grow">
        {project.description}
      </p>

      {/* Highlights (if any) */}
      {project.highlights && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="text-[11px] text-emerald-400/80 bg-emerald-950/30 px-2 py-0.5 rounded-md border border-emerald-800/20"
            >
              {h}
            </span>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tags.slice(0, 4).map((tag) => (
          <TechBadge key={tag} label={tag} variant="muted" />
        ))}
        {project.tags.length > 4 && (
          <span className="text-xs text-slate-600">+{project.tags.length - 4}</span>
        )}
      </div>

      {/* Links */}
      {project.links && (
        <div className="flex gap-3 mt-auto pt-2 border-t border-slate-800/30">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {"GitHub \u2192"}
            </a>
          )}
          {project.links.kaggle && (
            <a
              href={project.links.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {"Kaggle \u2192"}
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {"Live Demo \u2192"}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
