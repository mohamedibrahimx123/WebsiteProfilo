import React from "react";
import Project from "./Project";

import ImageProjectPerfume from "../assets/Screenshot 2026-03-18 163216.png";
import ImageProjectFood from "../assets/Food.png";
import ImageProjectDelivery from "../assets/Delivery-dashboard.png";
import ImageProjectTask from "../assets/Task-management.png";

import ImageProjectDragon from "../assets/Dragon.png";
import ImageProjectRestaurant from "../assets/Food.png";

function Projects() {
  const projects = [
    {
      title: "Perfume E-commerce Store (Best Project)",
      live: "https://mohamedibrahimx123.github.io/Templete-Perfume-Website/",
      github: "https://github.com/mohamedibrahimx123/Templete-Perfume-Website",
      description:
        "A premium perfume e-commerce demo with modern UI and smooth animations.",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      features: [
        "Add to Cart",
        "Toast Notifications",
        "Animations",
        "Responsive Design",
        "Luxury UI",
        "Gold Theme",
        "Smooth Experience"
      ],
      image: ImageProjectPerfume,
      accent: "#a855f7",
      best: true
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

  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_520px_at_10%_0%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(900px_520px_at_95%_10%,rgba(76,201,240,0.10),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            A curated set of projects showing my UI skills, animation polish, and practical frontend experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Project key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

