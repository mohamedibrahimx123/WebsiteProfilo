import React from "react";

function About() {
  return (
    <section id="about" className="relative bg-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(76,201,240,0.14),transparent_55%),radial-gradient(820px_520px_at_90%_0%,rgba(247,37,133,0.10),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {/* About Me */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-extrabold text-white/80">
            🧠 About Me
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
            Final Year <span className="text-cyan-400">Frontend</span> Builder
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Final year Computer Science student at 6th of October University with a strong
            focus on building modern, responsive, and user-friendly web applications using
            ReactJS.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            I enjoy turning ideas into clean, scalable, and interactive interfaces with
            real-world usability.
          </p>
        </div>

        {/* Mind Map + Tech Stack */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
              <div className="text-sm font-extrabold tracking-wide text-white/70">
                🧭 Mind Map — Who I Am
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-extrabold text-white/90">Mohamed Ibrahim</div>
                  <div className="mt-2 text-sm text-white/65">
                    Turning ideas into clean, scalable, interactive interfaces.
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-extrabold text-white/90">🎓 Education</div>
                  <div className="mt-2 text-sm text-white/65">
                    Computer Science (Final Year - 2025)
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4 sm:col-span-2">
                  <div className="font-extrabold text-white/90">💻 Frontend Skills</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      ReactJS
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      JavaScript (ES6+)
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      HTML5 / CSS3
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-extrabold text-white/90">🎨 Styling</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Tailwind CSS
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Bootstrap
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-extrabold text-white/90">⚙️ Tools</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Git & GitHub
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Vite
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4 sm:col-span-2">
                  <div className="font-extrabold text-white/90">🧠 Strengths</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Clean Code
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Component Architecture
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      UI/UX Focus
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Responsive Design
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4 sm:col-span-2">
                  <div className="font-extrabold text-white/90">🎯 Goals</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Remote Work
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Freelancing
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      Real-world Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
              <div className="text-sm font-extrabold tracking-wide text-white/70">
                🛠️ Tech Stack
              </div>

              <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-black/20">
                <div className="grid grid-cols-2 gap-3 p-3 text-xs font-extrabold text-white/80">
                  <div>Category</div>
                  <div className="text-right">Technologies</div>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 text-sm text-white/75">
                  <div className="font-bold text-white/85">Frontend</div>
                  <div className="text-right">ReactJS, JavaScript (ES6+), HTML5, CSS3</div>
                </div>
                <div className="grid grid-cols-2 gap-3 p-3 text-sm text-white/75">
                  <div className="font-bold text-white/85">Styling</div>
                  <div className="text-right">Tailwind CSS, Bootstrap</div>
                </div>
                <div className="grid grid-cols-2 gap-3 p-3 text-sm text-white/75">
                  <div className="font-bold text-white/85">Tools</div>
                  <div className="text-right">Git, GitHub, Vite</div>
                </div>
                <div className="grid grid-cols-2 gap-3 p-3 text-sm text-white/75">
                  <div className="font-bold text-white/85">Other</div>
                  <div className="text-right">REST APIs, Responsive Design</div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-extrabold text-white/85">📚 Learning Journey</div>
                <div className="mt-2 text-sm text-white/65 leading-relaxed">
                  Bro Code, SuperSimple Dev, Route Academy.
                  <br />
                  Applied everything through real projects — because tutorials alone don't build
                  skills.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm font-extrabold tracking-wide text-white/70">
                📌 Featured Projects
              </div>
              <div className="mt-2 text-xl font-black text-white/95">
                🟡 Perfume E-commerce Store (Best Project)
              </div>
            </div>

            <a
              href="https://mohamedibrahimx123.github.io/Templete-Perfume-Website/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-4 py-2 text-sm font-black text-black shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
            >
              Open Perfume Live
            </a>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-white/70 leading-relaxed">
                A premium perfume e-commerce demo with modern UI and smooth animations.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-extrabold text-white/85">Perfume Store</div>
                  <div className="mt-2 text-sm text-white/65">
                    Pages: Home, Products, Admin, Support
                    <br />
                    Features: Add to Cart, Toast Notifications, Animations, Responsive Design
                    <br />
                    UI/UX: Luxury Design, Gold Theme, Smooth Experience
                    <br />
                    Tech: React, Tailwind, Framer Motion, Vite
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-extrabold text-white/85">Highlights</div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-white/65 leading-relaxed">
                    <li>Luxury UI design</li>
                    <li>Smooth animations</li>
                    <li>Add-to-cart system</li>
                    <li>Responsive layout</li>
                    <li>Component-based structure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-extrabold text-white/85">More Projects</div>
              <div className="mt-3 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="font-black text-white/95 text-sm">🍔 E-commerce Food Website</div>
                  <div className="mt-1 text-sm text-white/65">Cart System + Product Grid + Responsive UI</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="font-black text-white/95 text-sm">🌐 Portfolio Website</div>
                  <div className="mt-1 text-sm text-white/65">Clean personal branding + smooth animations</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="font-black text-white/95 text-sm">🎮 Dragon Repeller Game</div>
                  <div className="mt-1 text-sm text-white/65">DOM & events + score system + interactive gameplay</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="font-black text-white/95 text-sm">🍽️ Restaurant Website</div>
                  <div className="mt-1 text-sm text-white/65">Landing page + smooth scrolling + responsive design</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages + Contact summary */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <div className="text-sm font-extrabold tracking-wide text-white/70">🌍 Languages</div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-black text-white/90">Arabic</div>
                <div className="mt-2 text-sm font-bold text-white/60">Native</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-black text-white/90">English</div>
                <div className="mt-2 text-sm font-bold text-white/60">
                  Professional Working Proficiency
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <div className="text-sm font-extrabold tracking-wide text-white/70">📫 Contact</div>
            <div className="mt-3 text-sm text-white/70 leading-relaxed">
              Email:{" "}
              <a
                href="mailto:mohamedibrahim7113@gmail.com"
                className="font-bold text-cyan-300 hover:underline"
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
                className="font-bold text-cyan-300 hover:underline"
              >
                github.com/mohamedibrahimx123
              </a>
            </div>
            <div className="mt-4 text-sm text-white/60 font-semibold">
              ⭐ Always open to collaboration, freelance work, and new opportunities.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

