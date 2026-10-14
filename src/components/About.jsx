import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaUsersCog, FaProjectDiagram, FaCode, FaCheckCircle } from "react-icons/fa";
import TiltCard from "./TiltCard";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative bg-[#030303] overflow-hidden py-16 md:py-24 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(34,211,238,0.08),transparent_55%),radial-gradient(820px_520px_at_90%_80%,rgba(168,85,247,0.06),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-cyan-400">
            👨‍💻 Leadership & Background
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
            Senior Frontend Engineer & <span className="text-cyan-400">Team Leader</span>
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed text-base sm:text-lg font-normal">
            Currently leading frontend engineering at <strong className="text-white font-bold">STAT-Code</strong>. I specialize in turning complex product specifications into ultra-fast, scalable, and responsive web applications with a production-first mindset.
          </p>
        </motion.div>

        {/* STAT-Code Leadership Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <TiltCard maxRotation={4}>
            <div className="rounded-3xl border border-cyan-400/25 bg-gradient-to-r from-cyan-950/30 via-[#0a0d16] to-purple-950/20 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xl">
                    <FaUsersCog />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Current Position</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Team Leader @ STAT-Code
                    </h3>
                  </div>
                </div>

                <a
                  href="https://statcode.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-5 py-2.5 text-xs font-black text-black uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md shadow-cyan-400/20"
                >
                  <span>Visit STAT-Code Platform</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 border-t border-white/5 pt-6">
                <div>
                  <div className="text-xs font-black uppercase text-cyan-300 tracking-wider">Engineering Leadership</div>
                  <p className="mt-2 text-xs text-white/65 leading-relaxed font-semibold">
                    Mentoring frontend engineers, conducting rigorous code reviews, and maintaining consistent architectural patterns.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-black uppercase text-indigo-300 tracking-wider">Corporate Design System</div>
                  <p className="mt-2 text-xs text-white/65 leading-relaxed font-semibold">
                    Designed and built the official <a href="https://statcode.tech/" target="_blank" rel="noreferrer" className="text-cyan-400 underline">statcode.tech</a> platform with modern animations and high accessibility.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-black uppercase text-purple-300 tracking-wider">Real-Time Innovation</div>
                  <p className="mt-2 text-xs text-white/65 leading-relaxed font-semibold">
                    Implemented production gRPC protocol integration for instant concurrent synchronization in mission-critical applications.
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Mind Map / Core Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1: Technical Focus */}
          <motion.div variants={itemVariants}>
            <TiltCard maxRotation={8} className="h-full">
              <div className="h-full rounded-3xl border border-white/5 bg-[#090b12]/60 p-6 shadow-xl backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-cyan-400">
                    <FaCode />
                    <span>Core Focus</span>
                  </div>
                  <h4 className="mt-3 text-lg font-black text-white">Full-Spectrum Frontend</h4>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    Extensive experience developing scalable user interfaces with React, Next.js, and Angular, backed by TypeScript and clean state management.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["React.js", "Next.js", "Angular", "TypeScript"].map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Real-Time & Performance */}
          <motion.div variants={itemVariants}>
            <TiltCard maxRotation={8} className="h-full">
              <div className="h-full rounded-3xl border border-white/5 bg-[#090b12]/60 p-6 shadow-xl backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-indigo-400">
                    <FaProjectDiagram />
                    <span>Real-Time Web</span>
                  </div>
                  <h4 className="mt-3 text-lg font-black text-white">gRPC & Micro-Synchronization</h4>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    Engineering real-time concurrent synchronization systems where concurrent updates eliminate race conditions without user refresh.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["gRPC Protocols", "WebSockets", "Zero-Lag Sync"].map((t) => (
                    <span key={t} className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-bold text-indigo-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 3: Engineering Standards */}
          <motion.div variants={itemVariants}>
            <TiltCard maxRotation={8} className="h-full">
              <div className="h-full rounded-3xl border border-white/5 bg-[#090b12]/60 p-6 shadow-xl backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-purple-400">
                    <FaCheckCircle />
                    <span>Standards & Quality</span>
                  </div>
                  <h4 className="mt-3 text-lg font-black text-white">Production-Ready Mindset</h4>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    Prioritizing clean code, peer reviews, OOP patterns, automated unit testing (Jest, Vitest), and continuous bundle performance optimization.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["Clean Code", "Code Reviews", "Unit Testing", "CI/CD"].map((t) => (
                    <span key={t} className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-[11px] font-bold text-purple-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>

        {/* Education & Languages Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 grid gap-5 sm:grid-cols-2"
        >
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl border border-white/5 bg-[#090b12]/50 p-6 backdrop-blur-md">
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400">🎓 Education</span>
              <h4 className="mt-2 text-lg font-black text-white">B.Sc. in Computer Science</h4>
              <p className="mt-1 text-sm text-white/60">
                6th of October University (Graduating 2025)
              </p>
              <div className="mt-4 text-xs text-white/70 font-semibold leading-relaxed">
                Strong academic foundation in Data Structures, Algorithms, Software Engineering, Database Systems, and Object-Oriented Programming (OOP).
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="rounded-3xl border border-white/5 bg-[#090b12]/50 p-6 backdrop-blur-md">
              <span className="text-xs font-black uppercase tracking-widest text-pink-400">🌍 Languages & Communication</span>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="text-sm font-black text-white">Arabic</div>
                  <div className="text-xs font-bold text-cyan-400 mt-1">Native Language</div>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="text-sm font-black text-white">English</div>
                  <div className="text-xs font-bold text-pink-400 mt-1">Professional Working</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
