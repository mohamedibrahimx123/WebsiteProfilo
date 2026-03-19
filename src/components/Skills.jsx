import React from "react";

const SKILLS = {
  "Core Front-End": ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI"],
  "Styling & UI": ["Tailwind", "Bootstrap", "Design Systems", "Accessibility", "Typography"],
  "Frameworks": ["Next.js", "Vite", "Component Architecture"],
  "Motion": ["CSS Animations", "Framer Motion", "Micro-interactions", "Page Transitions"]
};

function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_10%_0%,rgba(76,201,240,0.12),transparent_55%),radial-gradient(820px_520px_at_90%_0%,rgba(247,37,133,0.10),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Skills <span className="text-cyan-400">& Tools</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I build modern interfaces and I care about motion, polish, and user experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div
              key={group}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
            >
              <div className="text-sm font-extrabold tracking-wide text-white/70">
                {group}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-bold text-white/80 transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-pink-500/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="text-lg font-black">What you get</div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-white/75 font-semibold">
              Premium UI polish
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-white/75 font-semibold">
              Smooth animations
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-white/75 font-semibold">
              Responsive, clean layout
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-white/75 font-semibold">
              Professional project structure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

