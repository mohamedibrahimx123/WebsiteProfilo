import React from "react";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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
      <TiltCard maxRotation={8} className="h-full rounded-3xl">
        <article
          className="group h-full relative overflow-hidden rounded-3xl border border-white/5 bg-[#0d0f17]/60 backdrop-blur-xl shadow-2xl transition-all duration-400 flex flex-col justify-between hover:border-cyan-400/30"
          style={{
            boxShadow: `0 12px 35px -15px ${accent}25`
          }}
        >
          {/* Card Top: Image + Badges */}
          <div>
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-black/25 to-transparent" />

              {/* Project Badge */}
              {project.badge && (
                <div className="absolute left-4 top-4 z-20">
                  <div 
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white backdrop-blur-md shadow-md"
                    style={{
                      backgroundColor: `${accent}25`,
                      border: `1px solid ${accent}50`
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    {project.badge}
                  </div>
                </div>
              )}

              {/* Hover Action Buttons */}
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2.5 scale-95 group-hover:scale-100 transition-transform duration-300">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-lg transition-transform hover:scale-105"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#121622] border border-white/10 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-105"
                    >
                      <FaGithub /> Source
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-xl bg-black/70 border border-white/10 px-3.5 py-2 text-[11px] font-bold text-white/50"
                      title="Proprietary / Enterprise System"
                    >
                      <FaLock className="text-[10px]" /> Private
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-black leading-tight text-white group-hover:text-cyan-300 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/70 font-normal">
                {project.description}
              </p>
            </div>
          </div>

          {/* Card Bottom: Tech Stack & Key Features */}
          <div className="p-5 sm:p-6 pt-0">
            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/75"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Core features preview */}
            {project.features && (
              <div className="mt-4 grid grid-cols-2 gap-1.5 border-t border-white/5 pt-3.5">
                {project.features.slice(0, 4).map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-1.5 text-[11px] font-medium text-white/60 truncate"
                  >
                    <FaCheckCircle className="text-[9px] shrink-0" style={{ color: accent }} />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Direct Action Links Bar */}
            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Open Platform</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              ) : (
                <span className="text-xs text-white/40 font-semibold">Production Platform</span>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-white/60 hover:text-white transition-colors"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/40">
                  <FaLock className="text-[9px]" />
                  <span>Production System</span>
                </span>
              )}
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}

export default Project;
