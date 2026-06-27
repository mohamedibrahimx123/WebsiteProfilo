import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

import ImgFreeCodeCamp from "../assets/Screenshot 2026-03-14 164126.png";
import ImgArabic from "../assets/Screenshot 2026-03-14 200443.png";
import ImgRouteIT from "../assets/Screenshot 2026-03-18 215234.png";
import ImgTyping from "../assets/Screenshot 2026-03-18 225515.png";

function Certificates() {
  const certificates = [
    {
      title: "freeCodeCamp - Legacy Responsive Web Design V8",
      subtitle: "Developer Certification (June 14, 2025)",
      image: ImgFreeCodeCamp,
      accent: "#22d3ee"
    },
    {
      title: "Route IT Training Center - Frontend Diploma",
      subtitle: "Certificate of Completion (May 2, 2026)",
      image: ImgRouteIT,
      accent: "#10b981"
    },
    {
      title: "Tuwaiq Academy - Front-End Development Diploma",
      subtitle: "CSS & modern UI skills",
      image: ImgArabic,
      accent: "#a855f7"
    },
    {
      title: "typing.com - Advanced Assessment",
      subtitle: "Typing speed + accuracy achievement",
      image: ImgTyping,
      accent: "#f59e0b"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="certificates" className="relative py-16 md:py-24 bg-black min-h-screen">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_520px_at_15%_0%,rgba(34,211,238,0.1),transparent_55%),radial-gradient(820px_520px_at_90%_90%,rgba(168,85,247,0.06),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-400">
            🏆 Achievements
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
            Certificates <span className="text-cyan-400">& Credentials</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed text-lg font-medium">
            Verified proof of diploma completions, technical training courses, and web building skillsets.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {certificates.map((c) => (
            <motion.div key={c.title} variants={cardVariants} className="h-full">
              <TiltCard maxRotation={8} className="h-full rounded-3xl">
                <article
                  className="group relative h-full overflow-hidden rounded-3xl border bg-[#0d0f17]/40 backdrop-blur-md shadow-2xl transition-all duration-500 flex flex-col justify-between"
                  style={{ borderColor: `${c.accent}33` }}
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-black/20 to-transparent" />
                      
                      {/* Verified Badge */}
                      <div
                        className="absolute left-4 top-4 rounded-full px-4.5 py-1.5 text-xs font-black uppercase tracking-widest text-white backdrop-blur-sm"
                        style={{
                          backgroundColor: `${c.accent}20`,
                          border: `1px solid ${c.accent}45`,
                          textShadow: `0 0 5px ${c.accent}`,
                          boxShadow: `0 0 10px ${c.accent}15`
                        }}
                      >
                        Verified ID
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-black leading-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60 font-semibold">{c.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 text-[10px] font-black uppercase tracking-widest text-white/30 border-t border-white/5 mt-4">
                    Completion Verified
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;
