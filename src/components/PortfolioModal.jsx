import { X } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';

export default function PortfolioModal({
  isOpen,
  onClose,
  projects = [],
  categories = [],
  activeFilter = 'All',
  onFilterChange,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative m-2 w-full max-w-5xl rounded-2xl border border-white/10 bg-neutral-950 p-4 sm:m-6 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p className="mt-1 text-sm text-white/70">
              Explore selected work across web, marketing, and automation.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-white/10 p-2 text-white/80 hover:bg-white/20"
            aria-label="Close portfolio"
          >
            <X />
          </button>
        </div>

        {/* Filters */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => onFilterChange?.(c)}
              className={`${
                activeFilter === c
                  ? 'bg-white text-neutral-900'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              } rounded-full border border-white/10 px-3 py-1 text-xs`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          {projects.length === 0 && (
            <div className="col-span-full rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/70">
              No projects match this filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
