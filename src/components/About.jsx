import React from "react";
import { motion } from "framer-motion";
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative bg-black overflow-hidden py-16 md:py-24">
      {/* Background radial gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(34,211,238,0.08),transparent_55%),radial-gradient(820px_520px_at_90%_80%,rgba(236,72,153,0.06),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* About Me Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-400">
            🧠 About Me
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
            Final Year <span className="text-cyan-400">Frontend</span> Builder
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed text-lg">
            Final year Computer Science student at 6th of October University with a strong
            focus on building modern, responsive, and user-friendly web applications using
            ReactJS.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed text-lg">
            I enjoy turning ideas into clean, scalable, and interactive interfaces with
            real-world usability.
          </p>
        </motion.div>

        {/* Mind Map + Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {/* Mind Map Panel */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-white/5 bg-[#090b11]/50 p-6 shadow-2xl backdrop-blur-md">
              <div className="text-xs font-black uppercase tracking-widest text-cyan-400">
                🧭 Mind Map — Who I Am
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <TiltCard maxRotation={10}>
                  <div className="h-full rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-cyan-400/20">
                    <div className="font-black text-white/95 text-base">Mohamed Ibrahim</div>
                    <div className="mt-2 text-sm text-white/60 leading-relaxed">
                      Turning ideas into clean, scalable, interactive interfaces.
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxRotation={10}>
                  <div className="h-full rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-cyan-400/20">
                    <div className="font-black text-white/95 text-base">🎓 Education</div>
                    <div className="mt-2 text-sm text-white/60 leading-relaxed">
                      Computer Science (Final Year - 2025)
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxRotation={8} className="sm:col-span-2">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-cyan-400/20">
                    <div className="font-black text-white/95 text-base">💻 Frontend Skills</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["ReactJS", "JavaScript (ES6+)", "HTML5 / CSS3"].map((skill) => (
                        <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxRotation={10}>
                  <div className="h-full rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-cyan-400/20">
                    <div className="font-black text-white/95 text-base">🎨 Styling</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Tailwind CSS", "Bootstrap"].map((style) => (
                        <span key={style} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxRotation={10}>
                  <div className="h-full rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-cyan-400/20">
                    <div className="font-black text-white/95 text-base">⚙️ Tools</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Git & GitHub", "Vite"].map((tool) => (
                        <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxRotation={8} className="sm:col-span-2">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-cyan-400/20">
                    <div className="font-black text-white/95 text-base">🧠 Strengths</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Clean Code", "Component Architecture", "UI/UX Focus", "Responsive Design"].map((strength) => (
                        <span key={strength} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxRotation={8} className="sm:col-span-2">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-cyan-400/20">
                    <div className="font-black text-white/95 text-base">🎯 Goals</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Remote Work", "Freelancing", "Real-world Projects"].map((goal) => (
                        <span key={goal} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Right Column */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/5 bg-[#090b11]/50 p-6 shadow-2xl backdrop-blur-md">
              <div className="text-xs font-black uppercase tracking-widest text-violet-400">
                🛠️ Tech Stack
              </div>

              <div className="mt-6 divide-y divide-white/5 rounded-2xl border border-white/5 bg-black/30 overflow-hidden">
                <div className="grid grid-cols-2 gap-3 p-4 text-xs font-black text-white/50 uppercase tracking-wider">
                  <div>Category</div>
                  <div className="text-right">Tech</div>
                </div>

                {[
                  { cat: "Frontend", val: "ReactJS, ES6+, HTML5, CSS3" },
                  { cat: "Styling", val: "Tailwind CSS, Bootstrap" },
                  { cat: "Tools", val: "Git, GitHub, Vite" },
                  { cat: "Other", val: "REST APIs, Responsive UI" }
                ].map((row) => (
                  <div key={row.cat} className="grid grid-cols-2 gap-3 p-4 text-sm text-white/80 items-center">
                    <div className="font-bold text-white/90">{row.cat}</div>
                    <div className="text-right text-xs font-semibold text-white/60">{row.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <TiltCard maxRotation={12} className="flex-1">
              <div className="h-full rounded-3xl border border-white/5 bg-[#090b11]/50 p-6 shadow-2xl backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-pink-400">
                    📚 Learning Journey
                  </div>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed font-semibold">
                    Learned from top-tier sources like Bro Code, SuperSimple Dev, and Route Academy.
                  </p>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    Always applied everything directly in real projects — because true frontend mastery requires building, not just watching.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/5 pt-4 text-xs text-white/40 font-bold uppercase tracking-wider">
                  Continuous growth
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>

        {/* Featured Projects Highlight Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <TiltCard maxRotation={4}>
            <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-purple-950/20 via-black/40 to-cyan-950/20 p-8 shadow-2xl backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-purple-400">
                    📌 Featured Projects
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Younis Perfumes Store (Best Project)
                  </h3>
                </div>

                <a
                  href="https://yonnes-perfumes-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-6 py-3 text-xs font-black text-black uppercase tracking-wider shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105"
                >
                  Open Perfume Live
                </a>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-black/40 p-5">
                  <p className="text-sm text-white/70 leading-relaxed font-semibold">
                    A luxury perfume e-commerce store with modern interactive UI, sleek dark purple themes, shopping cart capabilities, and fluid animated transitions.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                      <div className="text-xs font-black uppercase tracking-wider text-purple-300">Perfume Store Pages</div>
                      <div className="mt-2 text-xs text-white/60 leading-relaxed">
                        • Home & Product Catalog<br />
                        • Interactive Cart Drawer<br />
                        • Client & Admin Support<br />
                        • Gold/Purple Premium Theme
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                      <div className="text-xs font-black uppercase tracking-wider text-cyan-300">Technical Highlights</div>
                      <div className="mt-2 text-xs text-white/60 leading-relaxed">
                        • Responsive Tailwind CSS Grid<br />
                        • Custom Framer Motion animations<br />
                        • Optimized React component design<br />
                        • Instant Vercel Edge caching
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-black/40 p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-white/70">Other Core Works</div>
                    <div className="mt-4 flex flex-col gap-3">
                      <div className="text-xs font-bold text-white/75 bg-white/5 border border-white/5 rounded-xl p-3">
                        🍔 E-commerce Food Website
                      </div>
                      <div className="text-xs font-bold text-white/75 bg-white/5 border border-white/5 rounded-xl p-3">
                        🎮 Dragon Repeller Game
                      </div>
                      <div className="text-xs font-bold text-white/75 bg-white/5 border border-white/5 rounded-xl p-3">
                        ⚙️ Task Management System
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Languages + Contact Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 grid gap-6 lg:grid-cols-3"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-white/5 bg-[#090b11]/50 p-6 shadow-2xl backdrop-blur-md">
              <div className="text-xs font-black uppercase tracking-widest text-cyan-400">🌍 Languages</div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <TiltCard maxRotation={10}>
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-cyan-400/20">
                    <div className="text-sm font-black text-white/90 uppercase tracking-wider">Arabic</div>
                    <div className="mt-2 text-sm font-bold text-cyan-400">Native</div>
                  </div>
                </TiltCard>
                <TiltCard maxRotation={10}>
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-pink-400/20">
                    <div className="text-sm font-black text-white/90 uppercase tracking-wider">English</div>
                    <div className="mt-2 text-sm font-bold text-pink-400">Professional Working</div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TiltCard maxRotation={12} className="h-full">
              <div className="h-full rounded-3xl border border-white/5 bg-[#090b11]/50 p-6 shadow-2xl backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-cyan-400">📫 Contact</div>
                  <div className="mt-4 text-sm text-white/70 leading-relaxed font-semibold">
                    Email:{" "}
                    <a
                      href="mailto:mohamedibrahim7113@gmail.com"
                      className="font-black text-cyan-400 hover:underline"
                    >
                      mohamedibrahim7113@gmail.com
                    </a>
                    <br />
                    <br />
                    GitHub:{" "}
                    <a
                      href="https://github.com/mohamedibrahimx123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-cyan-400 hover:underline"
                    >
                      github.com/mohamedibrahimx123
                    </a>
                  </div>
                </div>
                <div className="mt-6 text-xs text-white/40 font-bold uppercase tracking-wider">
                  ⭐ Open to collaboration & hiring
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
