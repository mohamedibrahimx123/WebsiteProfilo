import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Project({ project }) {
  const accent = project.accent || "#a855f7";

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl border bg-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.40)] transition-all duration-500 ease-out",
        project.best
          ? "border-purple-300/25 hover:border-purple-300/35"
          : "border-white/10 hover:border-cyan-300/20 hover:-translate-y-[2px]"
      ].join(" ")}
      style={{
        borderColor: project.best ? "rgba(168,85,247,0.35)" : undefined
      }}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
        />

        {/* Luxury sheen: subtle shimmer moving across the image */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        >
          <div
            className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-18deg] opacity-90 transition-transform duration-1200 group-hover:translate-x-[260%]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        <div className="absolute left-4 top-4">
          {project.best && (
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/25 to-cyan-400/15 px-4 py-2 text-sm font-extrabold text-white/90">
              🟡 Best Project
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-[10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="flex flex-wrap gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 font-extrabold text-white/95 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <FaExternalLinkAlt /> Live
            </a>
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-black/25 px-4 py-2 font-extrabold text-white/90 ring-1 ring-white/10 transition hover:bg-black/30"
              >
                <FaGithub /> Code
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-black leading-tight transition-colors duration-300 group-hover:text-white/95">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/75"
              style={{ borderColor: `${accent}55` }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {project.features.slice(0, 4).map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/15 px-3 py-2 text-sm font-semibold text-white/75"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: accent }}
              />
              {f}
            </div>
          ))}
        </div>

        {project.features.length > 4 && (
          <div className="mt-3 text-xs text-white/55">
            +{project.features.length - 4} more
          </div>
        )}
      </div>
    </article>
  );
}

export default Project;

