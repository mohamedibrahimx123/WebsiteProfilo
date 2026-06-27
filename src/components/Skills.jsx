import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const SKILLS = {
  "Core Front-End": ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI"],
  "Styling & UI": ["Tailwind", "Bootstrap", "Design Systems", "Accessibility", "Typography"],
  "Frameworks & Tools": ["Next.js", "Vite", "Git & GitHub", "Component Architecture"],
  "3D & Motion": ["Three.js", "React Three Fiber", "Framer Motion", "CSS Keyframes", "Micro-interactions"]
};

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-black min-h-screen">
      {/* Background glow overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_520px_at_10%_0%,rgba(34,211,238,0.1),transparent_55%),radial-gradient(900px_520px_at_90%_90%,rgba(168,85,247,0.06),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-400">
            🛠️ My Capabilities
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
            Skills <span className="text-cyan-400">& Tools</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed text-lg">
            I build modern interfaces and care deeply about motion, responsiveness, layout flow, and user experience.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {Object.entries(SKILLS).map(([group, items]) => (
            <motion.div key={group} variants={cardVariants} className="h-full">
              <TiltCard maxRotation={8} className="h-full rounded-3xl">
                <div className="h-full rounded-3xl border border-white/5 bg-[#090b11]/50 p-6 shadow-2xl backdrop-blur-md transition-colors hover:border-cyan-400/30 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-cyan-400">
                      {group}
                    </div>
                    <motion.div
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      }}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {items.map((s) => (
                        <motion.span
                          key={s}
                          variants={tagVariants}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black tracking-wide text-white/80 transition hover:bg-cyan-500/10 hover:border-cyan-400/35 hover:text-cyan-300"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                  <div className="mt-6 border-t border-white/5 pt-4 text-[10px] font-black uppercase tracking-wider text-white/30">
                    High Proficiency
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Bottom Accent Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <TiltCard maxRotation={4}>
            <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-950/20 via-black/40 to-pink-950/20 p-8 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
                What you get when we work together
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { title: "Premium UI Polish", desc: "Pixel perfect layouts, HSL color harmony, and gorgeous aesthetics." },
                  { title: "Smooth Animations", desc: "Framer Motion, 3D physics, and reactive transitions." },
                  { title: "Responsive Fluidity", desc: "Flawless rendering across phones, tablets, and wide screens." },
                  { title: "Clean Modular Code", desc: "Dry component architecture and reusable hooks." }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/5 bg-black/40 p-4 transition-colors hover:border-cyan-400/30">
                    <div className="text-sm font-black text-white">{item.title}</div>
                    <div className="mt-2 text-xs text-white/50 leading-relaxed font-semibold">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
