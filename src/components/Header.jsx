import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaRocket, FaCodeBranch, FaShieldAlt } from "react-icons/fa";
import ThreeScene from "./ThreeScene";
import TiltCard from "./TiltCard";

import heroPhoto from "../assets/WhatsApp Image 2026-03-18 at 10.50.36 PM.jpeg";

function Header() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio_intro_shown_2026") !== "1";
    } catch {
      return false;
    }
  });
  
  const [introProgress, setIntroProgress] = useState(0);

  useEffect(() => {
    if (!showIntro) return;

    try {
      window.localStorage.setItem("portfolio_intro_shown_2026", "1");
    } catch {
      // ignore
    }

    const duration = 2000;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      setIntroProgress(progress);

      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          setShowIntro(false);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [showIntro]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <header className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#030303] text-white py-12 md:py-20">
      {/* 3D Background Canvas */}
      <ThreeScene />

      {/* Futuristic Welcome Screen (First-time visitor) */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030308]"
            role="status"
            aria-live="polite"
          >
            <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_40%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(800px_520px_at_80%_80%,rgba(168,85,247,0.12),transparent_50%)]" />

            <div className="relative mx-auto grid w-[min(1050px,92vw)] grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl max-w-sm">
                  <img
                    src={heroPhoto}
                    alt="Mohamed Ibrahim"
                    className="relative z-10 aspect-[12/14] w-full rounded-2xl object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/40" />
                </div>
              </div>

              <div className="relative text-left px-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 font-bold tracking-widest text-cyan-400 text-xs uppercase">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  Senior Frontend Engineer
                </span>
                <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                  Mohamed Ibrahim
                </h1>
                <p className="mt-3 text-cyan-300 font-bold text-base">
                  Team Leader @ STAT-Code
                </p>
                <p className="mt-3 max-w-[480px] text-white/70 leading-relaxed text-sm">
                  Architecting production-ready real-time systems, scalable frontend architecture, and high-performance digital products.
                </p>

                <div className="mt-6">
                  <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 transition-[width] duration-75"
                      style={{ width: `${introProgress * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-white/40 tracking-wider uppercase font-semibold">
                    Launching Portfolio Experience...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-12"
        >
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-cyan-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                Team Leader @ STAT-Code
              </span>

              <a
                href="https://statcode.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 hover:text-white hover:border-cyan-400/40 transition-colors"
              >
                <span>statcode.tech</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight"
            >
              Building <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-500 bg-clip-text text-transparent">Real-Time</span> Web & Scalable Systems.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed font-normal"
            >
              I am <strong className="text-white font-bold">Mohamed Ibrahim</strong>, Senior Frontend Engineer and <strong className="text-cyan-300 font-bold">Team Leader at STAT-Code</strong>. I architect production-ready web platforms, real-time synchronization systems using <span className="text-cyan-400 font-semibold">gRPC Protocols</span>, and resilient multi-category e-commerce solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-black text-black shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <FaRocket />
                View Featured Projects
              </Link>

              <Link
                to="/skills"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md px-6 py-3.5 text-sm font-black text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <FaCodeBranch />
                Explore Tech Stack
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-transparent px-5 py-3.5 text-sm font-bold text-white/80 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </motion.div>

            {/* Production Highlights Grid */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              <div className="rounded-2xl border border-white/5 bg-[#090b12]/60 backdrop-blur-md p-3.5 transition-colors hover:border-cyan-400/30">
                <div className="text-xs font-black uppercase text-cyan-400 tracking-wider">Role</div>
                <div className="text-sm font-bold text-white mt-1">Team Leader</div>
                <div className="text-[11px] text-white/50">@ STAT-Code</div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#090b12]/60 backdrop-blur-md p-3.5 transition-colors hover:border-indigo-400/30">
                <div className="text-xs font-black uppercase text-indigo-400 tracking-wider">Architecture</div>
                <div className="text-sm font-bold text-white mt-1">RealTime Web</div>
                <div className="text-[11px] text-white/50">gRPC Protocols</div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#090b12]/60 backdrop-blur-md p-3.5 transition-colors hover:border-purple-400/30">
                <div className="text-xs font-black uppercase text-purple-400 tracking-wider">Standards</div>
                <div className="text-sm font-bold text-white mt-1">Clean Code</div>
                <div className="text-[11px] text-white/50">Code Reviews</div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#090b12]/60 backdrop-blur-md p-3.5 transition-colors hover:border-pink-400/30">
                <div className="text-xs font-black uppercase text-pink-400 tracking-wider">Mindset</div>
                <div className="text-sm font-bold text-white mt-1">Production</div>
                <div className="text-[11px] text-white/50">Ready Thinking</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              variants={itemVariants}
              className="w-full max-w-sm sm:max-w-md relative"
            >
              {/* Ambient backlight */}
              <div className="absolute inset-[-15px] rounded-[40px] bg-gradient-to-tr from-cyan-400/20 via-indigo-500/20 to-pink-500/20 blur-2xl animate-pulse" />

              <TiltCard maxRotation={8} className="relative z-10">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090b14]/80 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="relative aspect-[14/15] overflow-hidden rounded-2xl">
                    <img
                      src={heroPhoto}
                      alt="Mohamed Ibrahim"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-transparent to-transparent" />
                    
                    {/* Live Status Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 backdrop-blur-md p-3">
                      <div>
                        <div className="text-xs font-black text-white">Mohamed Ibrahim</div>
                        <div className="text-[11px] text-cyan-300 font-semibold">Team Leader @ STAT-Code</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Core stack tags below photo */}
                  <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                    {["React.js", "Next.js", "Angular", "TypeScript", "gRPC Web", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-white/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
