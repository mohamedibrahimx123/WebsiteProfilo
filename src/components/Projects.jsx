import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

import ImageProjectYonnesPerfumes from "../assets/yonnes_perfumes.png";
import ImageProjectPerfume from "../assets/Screenshot 2026-03-18 163216.png";
import ImageProjectFood from "../assets/Food.png";
import ImageProjectDelivery from "../assets/Delivery-dashboard.png";
import ImageProjectTask from "../assets/Task-management.png";
import ImageProjectDragon from "../assets/Dragon.png";
import ImageProjectRestaurant from "../assets/Food.png";

function Projects() {
  const projects = [
    {
      title: "Younis Perfumes Store",
      live: "https://yonnes-perfumes-frontend.vercel.app",
      github: "https://github.com/mohamedibrahimx123/yonnes-perfumes-frontend",
      description:
        "A premium Arabic perfume e-commerce store with dark luxury design, product catalog, cart drawer, and fluid animation flows.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      features: [
        "Product Catalog & Filters",
        "Dynamic Drawer Cart System",
        "Luxury Gold & Purple Theme",
        "Fully Responsive Grid",
        "Fluid Scroll Transitions",
        "Arabic UX Localisation"
      ],
      image: ImageProjectYonnesPerfumes,
      accent: "#a855f7",
      best: true
    },
    {
      title: "Perfume E-commerce Store",
      live: "https://mohamedibrahimx123.github.io/Templete-Perfume-Website/",
      github: "https://github.com/mohamedibrahimx123/Templete-Perfume-Website",
      description:
        "A premium perfume e-commerce demo with modern gold UI and hover physics.",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      features: [
        "Add to Cart",
        "Toast Notifications",
        "Hover Transitions",
        "Gold Luxury Styling"
      ],
      image: ImageProjectPerfume,
      accent: "#d97706",
      best: false
    },
    {
      title: "E-commerce Food Website",
      live: "https://mohamedibrahimx123.github.io/E-commerce-Food-website",
      github: "https://github.com/mohamedibrahimx123/E-commerce-Food-website",
      description: "Food ordering UI with a cart system, product grid, and responsive design.",
      tech: ["React", "Tailwind"],
      features: ["Cart System", "Product Grid", "Responsive UI"],
      image: ImageProjectFood,
      accent: "#f97316"
    },
    {
      title: "Dragon Repeller Game",
      live: "https://mohamedibrahimx123.github.io/Dragon-repeller-game",
      github: "https://github.com/mohamedibrahimx123/Dragon-repeller-game",
      description: "Interactive JavaScript game with RPG elements, enemy system, and score mechanics.",
      tech: ["JavaScript"],
      features: ["Player Actions", "Enemy System", "Score System", "DOM & Events"],
      image: ImageProjectDragon,
      accent: "#ef4444"
    },
    {
      title: "Restaurant Website",
      live: "https://mohamedibrahimx123.github.io/Restaurant_Website",
      github: "https://github.com/mohamedibrahimx123/Restaurant_Website",
      description: "Restaurant landing page with menu, smooth scrolling, and responsive UI.",
      tech: ["HTML / CSS"],
      features: ["Landing Page", "Smooth Scroll", "Responsive Design"],
      image: ImageProjectRestaurant,
      accent: "#8b5cf6"
    },
    {
      title: "Task Management App",
      live: "https://mohamedibrahimx123.github.io/Task-mangement/",
      github: "https://github.com/mohamedibrahimx123/Task-mangement",
      description: "Task management app built with React and TypeScript.",
      tech: ["React", "TypeScript"],
      features: ["Task Management", "Responsive UI", "Productive Workflow"],
      image: ImageProjectTask,
      accent: "#06b6d4"
    },
    {
      title: "Delivery Dashboard",
      live: "https://mohamedibrahimx123.github.io/Delivery-dashboard/",
      github: "https://github.com/mohamedibrahimx123/Delivery-dashboard",
      description: "A React-based delivery dashboard with clean analytics-style UI.",
      tech: ["React"],
      features: ["Dashboard Layout", "Delivery Tracking", "Responsive Design"],
      image: ImageProjectDelivery,
      accent: "#22c55e"
    }
  ];

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
    <section id="projects" className="relative py-16 md:py-24 bg-black min-h-screen">
      {/* Glow shapes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_520px_at_10%_0%,rgba(168,85,247,0.1),transparent_55%),radial-gradient(900px_520px_at_95%_80%,rgba(34,211,238,0.06),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-400">
            💻 My Portfolio
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed text-lg">
            A curated set of projects showing my UI skills, animation polish, and practical frontend experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <Project key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
