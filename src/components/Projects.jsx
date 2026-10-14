import React, { useState } from "react";
import { motion } from "framer-motion";
import Project from "./Project";

import ImageProjectDocTime from "../assets/project_doctime.jpg";
import ImageProjectStatCode from "../assets/project_statcode.jpg";
import ImageProjectYonnesPerfumes from "../assets/project_younis.jpg";
import ImageProjectMobileStore from "../assets/project_mobile_store.jpg";
import ImageProjectFood from "../assets/project_dessert.jpg";

function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "doctime",
      category: "realtime",
      badge: "Real-Time Production",
      title: "DocTime — Real-Time Patient Booking System",
      live: "https://doctime.statcode.tech/",
      github: null, // Private production system
      description:
        "Production real-time doctor appointment platform using gRPC protocols. Instantaneously syncs slot reservation across concurrent patients without page reload to prevent double-booking collisions.",
      tech: ["React", "TypeScript", "gRPC Web", "WebSockets", "Tailwind CSS"],
      features: [
        "Real-Time gRPC Sync",
        "Collision Prevention",
        "Doctor Search & Filter",
        "Instant Slot Updates"
      ],
      image: ImageProjectDocTime,
      accent: "#10b981"
    },
    {
      id: "statcode",
      category: "corporate",
      badge: "Corporate Platform",
      title: "STAT-Code Software Company Platform",
      live: "https://statcode.tech/",
      github: null, // Corporate official website
      description:
        "Official corporate platform for STAT-Code software company. Engineered high-performance modern UI/UX, responsive brand layout, and scalable component architecture as Team Leader.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
      features: [
        "Corporate Brand Showcase",
        "Performance Tuning",
        "Responsive Grid Layout",
        "Interactive Motion"
      ],
      image: ImageProjectStatCode,
      accent: "#3b82f6"
    },
    {
      id: "yonnes",
      category: "ecommerce",
      badge: "Serverless E-Commerce",
      title: "Younis Perfumes (Younnes-Perfume.com)",
      live: "https://younnes-perfumes.vercel.app/",
      github: "https://github.com/mohamedibrahimx123/Younnes-Perfume.com",
      description:
        "Luxury serverless perfume e-commerce platform with fast in-memory product search, real-time cart & wishlist, WhatsApp order integration with auto-stock decrement, and an admin dashboard.",
      tech: ["React 19", "Vite", "Bootstrap 5", "Framer Motion", "Firebase", "Vercel"],
      features: [
        "In-Memory Product Search",
        "WhatsApp Order Dispatch",
        "Bilingual RTL & LTR",
        "Admin Dashboard & CRUD"
      ],
      image: ImageProjectYonnesPerfumes,
      accent: "#a855f7"
    },
    {
      id: "mobile-store",
      category: "ecommerce",
      badge: "Tech E-Commerce",
      title: "Hazem Store (mobile-store.com)",
      live: "https://mobile-store-com.vercel.app/",
      github: "https://github.com/mohamedibrahimx123/mobile-store.com",
      description:
        "Modern multi-category tech e-commerce platform for phones, smartwatches, and accessories with variant management, color-specific image galleries, and one-click WhatsApp order dispatch.",
      tech: ["React 18", "React Router 7", "Framer Motion", "GSAP", "Tailwind CSS", "Firebase"],
      features: [
        "Variant & RAM Management",
        "Color-Specific Galleries",
        "Installment Calculator",
        "Persistent State System"
      ],
      image: ImageProjectMobileStore,
      accent: "#06b6d4"
    },
    {
      id: "dessert",
      category: "web-apps",
      badge: "Modern Web App",
      title: "Dessert & Bakery Website",
      live: "https://dessert-website-phi.vercel.app/",
      github: "https://github.com/mohamedibrahimx123/Dessert-website",
      description:
        "Modern dessert and bakery landing web application with a responsive product showcase, fluid micro-interactions, clean component architecture, and smooth user experience.",
      tech: ["Angular", "Tailwind CSS", "Firebase", "TypeScript"],
      features: [
        "Responsive Bakery Showcase",
        "Fluid Micro-Interactions",
        "Clean Component Design",
        "Mobile-First Layout"
      ],
      image: ImageProjectFood,
      accent: "#f97316"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[#030303] min-h-screen text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_520px_at_10%_0%,rgba(168,85,247,0.1),transparent_55%),radial-gradient(900px_520px_at_95%_80%,rgba(34,211,238,0.06),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-cyan-400">
            💻 Production & SaaS Showcase
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed text-base sm:text-lg font-normal">
            Real-world web applications spanning real-time gRPC medical systems, multi-category e-commerce platforms, corporate architecture, and Angular products.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Projects" },
            { id: "realtime", label: "Real-Time / Production" },
            { id: "ecommerce", label: "E-Commerce" },
            { id: "corporate", label: "Corporate" },
            { id: "web-apps", label: "Web Applications" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === btn.id
                  ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/20"
                  : "bg-white/5 border border-white/5 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((p) => (
            <Project key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
