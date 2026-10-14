import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaAngular, FaJsSquare, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaGithub, FaAws, FaRocket, FaCheckDouble, 
  FaSyncAlt, FaLayerGroup, FaCode, FaTools 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiRedux, SiJest, 
  SiTailwindcss, SiBootstrap, SiVite, SiVitest 
} from "react-icons/si";
import TiltCard from "./TiltCard";

const TECH_CATEGORIES = [
  {
    id: "core",
    name: "Core Languages & Foundations",
    icon: <FaCode className="text-cyan-400" />,
    skills: [
      { name: "JavaScript (ES6+)", desc: "Modern syntax, async/await, closures, prototypes", level: "Expert" },
      { name: "TypeScript", desc: "Strict typing, generics, interfaces, scalable codebases", level: "Advanced" },
      { name: "HTML5", desc: "Semantic markup, SEO optimization, accessibility (a11y)", level: "Expert" },
      { name: "CSS3", desc: "Flexbox, CSS Grid, custom properties, animations", level: "Expert" },
      { name: "OOP (Object-Oriented Programming)", desc: "Encapsulation, inheritance, design patterns", level: "Advanced" },
      { name: "Data Structures", desc: "Trees, graphs, hash maps, complexity analysis (O(n))", level: "Advanced" },
    ]
  },
  {
    id: "frameworks",
    name: "Frameworks & Modern UI",
    icon: <FaReact className="text-cyan-400" />,
    skills: [
      { name: "React.js", desc: "React 18/19, Custom Hooks, Server Components, Concurrent", level: "Expert" },
      { name: "Next.js", desc: "App Router, SSR, SSG, ISR, API Routes, Edge Runtime", level: "Advanced" },
      { name: "Angular", desc: "Component architecture, dependency injection, RxJS", level: "Proficient" },
      { name: "Tailwind CSS", desc: "Utility-first design, custom configurations, Tailwind v4", level: "Expert" },
      { name: "Bootstrap 5", desc: "Rapid grid prototyping, responsive mobile systems", level: "Expert" },
      { name: "Framer Motion", desc: "3D physics, layoutId transitions, gesture animations", level: "Advanced" },
    ]
  },
  {
    id: "state_realtime",
    name: "State & Real-Time Protocols",
    icon: <FaSyncAlt className="text-indigo-400" />,
    skills: [
      { name: "RealTime Web (gRPC Protocols)", desc: "Protobuf, low-latency streaming, collision prevention", level: "Specialist" },
      { name: "Redux Toolkit", desc: "Slices, RTK Query, normalized state management", level: "Advanced" },
      { name: "Zustand", desc: "Lightweight, unopinionated, reactive global state", level: "Expert" },
      { name: "Context API", desc: "Scoped React state providers, theme & auth management", level: "Expert" },
      { name: "WebSockets & Event Streams", desc: "Instant bi-directional client-server communication", level: "Advanced" },
    ]
  },
  {
    id: "testing_quality",
    name: "Testing & Code Quality",
    icon: <FaCheckDouble className="text-purple-400" />,
    skills: [
      { name: "Unit Testing (Jest)", desc: "Automated test suites, snapshot testing, mocking", level: "Advanced" },
      { name: "Vitest", desc: "Blazing fast Vite-native testing, coverage analysis", level: "Advanced" },
      { name: "React Testing Library", desc: "User-centric integration and interaction testing", level: "Advanced" },
      { name: "Clean Code Principles", desc: "DRY, SOLID, readable and maintainable codebase", level: "Core Philosophy" },
      { name: "Code Reviewing", desc: "Mentoring engineers, enforcing best practices, PR reviews", level: "Lead Level" },
      { name: "Production-Ready Thinking", desc: "Resilient error boundaries, fallback UIs, edge cases", level: "Lead Level" },
    ]
  },
  {
    id: "devops_perf",
    name: "Performance & DevOps",
    icon: <FaRocket className="text-pink-400" />,
    skills: [
      { name: "Lazy Loading & Code Splitting", desc: "Dynamic imports, bundle optimization, tree-shaking", level: "Advanced" },
      { name: "Performance Optimization", desc: "Core Web Vitals, memoization, render profiling", level: "Expert" },
      { name: "Git & GitHub", desc: "Gitflow, merge conflicts, interactive rebasing, actions", level: "Expert" },
      { name: "GitHub Pages & Vercel", desc: "Automated branch deployment, custom domains, CI", level: "Expert" },
      { name: "AWS Cloud", desc: "S3 hosting, CloudFront CDN, serverless configurations", level: "Proficient" },
      { name: "Workflow & CI/CD Deployment", desc: "Automated pipelines, build validation, linting gates", level: "Advanced" },
    ]
  }
];

function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories = activeFilter === "all" 
    ? TECH_CATEGORIES 
    : TECH_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="tech-stack" className="relative py-16 md:py-24 bg-[#030303] min-h-screen text-white">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_520px_at_10%_0%,rgba(34,211,238,0.1),transparent_55%),radial-gradient(900px_520px_at_90%_90%,rgba(168,85,247,0.08),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-cyan-400">
            ⚡ Complete Technical Competencies
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed text-base sm:text-lg font-normal">
            A comprehensive overview of my core engineering capabilities, real-time protocols, state management libraries, and production-tested standards.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === "all"
                ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/20"
                : "bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            All Competencies
          </button>
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === cat.id
                  ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/20"
                  : "bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-10 flex flex-col gap-8">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/5 bg-[#090b14]/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="text-xl">{category.icon}</div>
                <h3 className="text-lg sm:text-xl font-black text-white">{category.name}</h3>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <TiltCard key={skill.name} maxRotation={6} className="h-full">
                    <div className="h-full rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-cyan-400/30 hover:bg-cyan-500/[0.04] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-black text-white">{skill.name}</h4>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full shrink-0">
                            {skill.level}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-white/60 leading-relaxed font-semibold">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <TiltCard maxRotation={3}>
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-950/20 via-[#0a0d16] to-indigo-950/20 p-6 sm:p-8 backdrop-blur-xl">
              <div className="grid gap-6 sm:grid-cols-3 text-center sm:text-left">
                <div>
                  <div className="text-xs font-black uppercase text-cyan-400 tracking-wider">⚡ Real-Time Architecture</div>
                  <p className="mt-2 text-xs text-white/65 leading-relaxed font-semibold">
                    Specialized in gRPC and WebSocket protocols ensuring concurrent users experience instantaneous data updates without latency.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-indigo-400 tracking-wider">🛡️ Clean Code & Reviewing</div>
                  <p className="mt-2 text-xs text-white/65 leading-relaxed font-semibold">
                    Enforcing maintainable code standards, OOP principles, and robust unit testing with Jest, Vitest, and RTL.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-pink-400 tracking-wider">🚀 Production-Ready Thinking</div>
                  <p className="mt-2 text-xs text-white/65 leading-relaxed font-semibold">
                    Designing resilient fallback states, lazy-loading optimizations, and high-performance Web Vitals out of the box.
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
