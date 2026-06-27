import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

function Project({ project }) {
  const accent = project.accent || "#22d3ee";

  return (
    <motion.div variants={cardVariants} className="h-full">
      <TiltCard maxRotation={10} className="h-full rounded-3xl">
        <article
          className={[
            "group h-full relative overflow-hidden rounded-3xl border bg-[#0d0f17]/45 backdrop-blur-md shadow-2xl transition-all duration-500 flex flex-col justify-between",
            project.best
              ? "border-purple-500/30 hover:border-purple-500/50"
              : "border-white/5 hover:border-cyan-400/30"
          ].join(" ")}
          style={{
            boxShadow: project.best ? "0 10px 30px -10px rgba(168,85,247,0.15)" : undefined
          }}
        >
          {/* Top visual block */}
          <div>
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Glowing overlay filter */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-black/30 to-transparent" />

              {/* Best Project Tag */}
              {project.best && (
                <div className="absolute left-4 top-4 z-20">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-md">
                    ★ Best Project
                  </div>
                </div>
              )}

              {/* Dynamic Actions overlay visible on hover */}
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-3 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-black uppercase tracking-widest text-black shadow-lg transition-transform hover:scale-105"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 border border-white/10 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-black leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60 font-semibold">
                {project.description}
              </p>
            </div>
          </div>

          {/* Bottom details block */}
          <div className="p-6 pt-0">
            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white/70"
                  style={{ borderColor: `${accent}40` }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Core features listing */}
            <div className="mt-5 grid gap-2 grid-cols-2">
              {project.features.slice(0, 4).map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-black/35 px-3 py-2 text-xs font-bold text-white/65"
                >
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
                  />
                  <span className="truncate">{f}</span>
                </div>
              ))}
            </div>

            {project.features.length > 4 && (
              <div className="mt-3 text-right text-[10px] font-black uppercase tracking-wider text-white/40">
                +{project.features.length - 4} more features
              </div>
            )}
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}

export default Project;
