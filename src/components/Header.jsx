import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import heroPhoto from "../assets/WhatsApp Image 2026-03-18 at 10.50.36 PM.jpeg";

function Header() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio_intro_shown") !== "1";
    } catch {
      return true;
    }
  });
  const timerRef = useRef(null);
  const introAnimRef = useRef(null);
  const [introProgress, setIntroProgress] = useState(0);

  useEffect(() => {
    if (!showIntro) return;

    try {
      window.localStorage.setItem("portfolio_intro_shown", "1");
    } catch {
      // ignore
    }

    const start = performance.now();
    const durationMs = 3000;

    const raf = () => {
      const t = performance.now() - start;
      const p = Math.max(0, Math.min(1, t / durationMs));
      setIntroProgress(p);
      if (p < 1) introAnimRef.current = requestAnimationFrame(raf);
    };

    introAnimRef.current = requestAnimationFrame(raf);

    timerRef.current = window.setTimeout(() => {
      setShowIntro(false);
    }, durationMs);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (introAnimRef.current) cancelAnimationFrame(introAnimRef.current);
    };
  }, [showIntro]);

  return (
    <header className="relative overflow-hidden bg-black text-white">
      {showIntro && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          role="status"
          aria-live="polite"
        >
          <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(76,201,240,0.25),transparent_55%),radial-gradient(800px_520px_at_85%_15%,rgba(247,37,133,0.18),transparent_50%),linear-gradient(180deg,#05070f,#0b1220)]" />
          <div className="absolute -left-20 -top-20 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl animate-spin" />
          <div className="absolute -right-28 -bottom-28 h-[520px] w-[520px] rounded-full bg-pink-400/20 blur-3xl animate-spin [animation-duration:5200ms]" />

          <div className="relative mx-auto grid w-[min(1100px,92vw)] grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 shadow-[0_50px_140px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(76,201,240,0.35),transparent_55%)] blur-md opacity-60" />
              <img
                src={heroPhoto}
                alt="Mohamed Ebrahim"
                className="relative z-10 aspect-[12/14] w-full rounded-2xl object-cover shadow-[0_25px_90px_rgba(0,0,0,0.55)] animate-bounce [transform-origin:center]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-300/35" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 font-extrabold tracking-wide text-white/80 animate-pulse">
                Front-End Developer
              </div>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Modern UI & Smooth Animations
              </h1>
              <p className="mt-4 max-w-[520px] text-white/70 leading-relaxed">
                I craft premium, responsive interfaces with clean UX and delightful motion.
              </p>

              <div className="mt-6">
                <div className="h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 transition-[width] duration-75"
                    style={{ width: `${introProgress * 100}%` }}
                  />
                </div>
                <div className="mt-2 text-sm text-white/55">
                  Introducing portfolio...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_20%_10%,rgba(76,201,240,0.12),transparent_55%),radial-gradient(820px_520px_at_85%_20%,rgba(247,37,133,0.10),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold text-white/75">
                Available for freelance & full-time
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Mohamed Ibrahim
              </h1>

              <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
                I build modern web experiences with a focus on performance, accessibility, and
                smooth interactions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-5 py-3 font-extrabold shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
                >
                  View Best Project
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-extrabold text-white/90 transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Contact Me
                </Link>
              </div>

              <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-black">+10</div>
                  <div className="text-sm text-white/70 mt-1">UI Projects</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-black">Modern</div>
                  <div className="text-sm text-white/70 mt-1">Motion Design</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-black">Responsive</div>
                  <div className="text-sm text-white/70 mt-1">Everywhere</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(76,201,240,0.35),transparent_55%)] blur-2xl opacity-60" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-300/35" />
                <img
                  src={heroPhoto}
                  alt="Portfolio photo"
                  className="relative z-10 aspect-[16/12] w-full rounded-2xl object-cover animate-bounce"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white/80">
                  Tailwind
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white/80">
                  Next.js
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white/80">
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

