import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThreeScene from "./ThreeScene";
import TiltCard from "./TiltCard";

import heroPhoto from "../assets/WhatsApp Image 2026-03-18 at 10.50.36 PM.jpeg";

function Header() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio_intro_shown") !== "1";
    } catch {
      return true;
    }
  });
  
  const [introProgress, setIntroProgress] = useState(0);

  useEffect(() => {
    if (!showIntro) return;

    try {
      window.localStorage.setItem("portfolio_intro_shown", "1");
    } catch {
      // ignore
    }

    const duration = 2500;
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
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [showIntro]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <header className="relative min-h-[92vh] flex items-center overflow-hidden bg-black text-white py-12">
      {/* ThreeJS Background Canvas */}
      <ThreeScene />

      {/* Intro Welcome Screen */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            role="status"
            aria-live="polite"
          >
            <div className="absolute inset-0 bg-[#05070f]" />
            <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_40%,rgba(34,211,238,0.15),transparent_55%),radial-gradient(800px_520px_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)]" />

            <div className="relative mx-auto grid w-[min(1100px,92vw)] grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_50px_140px_rgba(0,0,0,0.6)] max-w-sm">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(34,211,238,0.25),transparent_55%)] blur-md opacity-60" />
                  <img
                    src={heroPhoto}
                    alt="Mohamed Ebrahim"
                    className="relative z-10 aspect-[12/14] w-full rounded-2xl object-cover shadow-[0_25px_90px_rgba(0,0,0,0.55)]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/35" />
                </div>
              </div>

              <div className="relative text-left px-4">
                <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-black tracking-widest text-cyan-400 text-xs uppercase">
                  Front-End Developer
                </span>
                <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                  Modern UI & <br />Smooth Animations
                </h1>
                <p className="mt-4 max-w-[520px] text-white/70 leading-relaxed font-semibold">
                  I craft premium, responsive interfaces with clean UX and delightful motion.
                </p>

                <div className="mt-8">
                  <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 transition-[width] duration-75"
                      style={{ width: `${introProgress * 100}%` }}
                    />
                  </div>
                  <div className="mt-3 text-xs text-white/40 tracking-wider uppercase font-bold">
                    Initializing 3D Environment...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content */}
      <div className="relative mx-auto max-w-7xl px-6 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 md:grid-cols-12"
        >
          {/* Text Left Column */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                Available for freelance & full-time
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-5xl font-black leading-none sm:text-7xl tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
            >
              Mohamed <br className="hidden sm:inline" />
              Ebrahim
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed"
            >
              I build modern web experiences with a focus on 3D animations, performance,
              accessibility, and highly polished interactive interfaces.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-violet-500 to-indigo-600 px-7 py-4 font-black text-black shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                View Best Project
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-7 py-4 font-black text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md p-4 transition-colors hover:border-cyan-400/30">
                <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">+10</div>
                <div className="text-xs font-bold text-white/50 mt-1 uppercase tracking-wider">UI Projects</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md p-4 transition-colors hover:border-violet-400/30">
                <div className="text-2xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">3D Tilt</div>
                <div className="text-xs font-bold text-white/50 mt-1 uppercase tracking-wider">Design</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md p-4 transition-colors hover:border-pink-400/30">
                <div className="text-2xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Responsive</div>
                <div className="text-xs font-bold text-white/50 mt-1 uppercase tracking-wider">Everywhere</div>
              </div>
            </motion.div>
          </div>

          {/* Photo Right Column */}
          <div className="md:col-span-5 relative flex justify-center">
            <motion.div
              variants={itemVariants}
              className="w-full max-w-sm relative"
            >
              {/* Spinning glow circle behind the card */}
              <div className="absolute inset-[-10px] rounded-[36px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-500 opacity-20 blur-xl animate-pulse" />

              <TiltCard maxRotation={12} className="relative z-10">
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#090b11]/70 p-4 shadow-2xl backdrop-blur-md"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_55%)] blur-2xl opacity-60" />
                  <img
                    src={heroPhoto}
                    alt="Portfolio photo"
                    className="relative z-10 aspect-[16/12] w-full rounded-2xl object-cover"
                  />
                </motion.div>
              </TiltCard>

              {/* Tech Tags */}
              <motion.div
                variants={itemVariants}
                className="mt-6 flex flex-wrap gap-2 justify-center"
              >
                {["React.js", "Three.js", "Tailwind CSS", "Framer Motion"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-2 text-xs font-black text-cyan-300 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
