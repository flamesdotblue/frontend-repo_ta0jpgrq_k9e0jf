import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
      {/* Visual placeholder */}
      <div className="h-32 w-full rounded-lg bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/30 to-cyan-400/30"></div>

      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h4 className="text-base font-semibold">{project.title}</h4>
          <p className="mt-1 text-xs text-white/70">{project.description}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white/80">
          {project.category}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags?.map((t) => (
          <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-[10px] text-white/80">
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm text-white/80 underline-offset-4 hover:underline"
        >
          Visit project <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
