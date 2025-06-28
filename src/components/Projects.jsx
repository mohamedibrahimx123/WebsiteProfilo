import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Project.css";


import ImageProjcetDragon from '../assets/Dragon.png';
import ImageProjcetFood from '../assets/Food.png';
import ImageProjcetCafeMenu from '../assets/Cafe menu.png';
import ImageProjcetSocailMedia from '../assets/Socail Media.png';
import ImageProjcetTodolist from '../assets/To-do-list.png';
import ImageProjcetHotel from '../assets/Hotel.png';

function Projects() {
  const projects = [
    {
      title: "To-Do List App",
      description: "Task manager application built with React featuring add, complete, and delete functionality with persistent storage.",
      link: "https://mohamedibrahimx123.github.io/T0-DO-List/",
      github: "https://github.com/mohamedibrahimx123/T0-DO-List.git", 
      image: ImageProjcetTodolist,
      tech: ["React", "JavaScript", "CSS"],
      accentColor: "#4f46e5"
    },
    {
      title: "Cafe Menu",
      description: "Feature-rich calculator application supporting arithmetic operations with memory functions and responsive design.",
      link: "https://mohamedibrahimx123.github.io/Cafe-menu/index.html",
      github: "https://github.com/mohamedibrahimx123/Cafe-menu.git", 
      image: ImageProjcetCafeMenu,
      tech: ["HTML","CSS"],
      accentColor: "#10b981"
    },
    {
      title: "Luxury Hotel Website",
      description: "Elegant responsive hotel website with booking interface, room gallery, and amenities showcase.",
      link: "https://mohamedibrahimx123.github.io/Hotel-Website/hotel.html",
      github: "#", 
      image: ImageProjcetHotel,
      tech: ["HTML", "CSS"],
      accentColor: "#f59e0b"
    },
    {
      title: "Social Media Profile",
      description: "Modern social links aggregator with animated transitions and clean minimalist design.",
      link: "https://mohamedibrahimx123.github.io/Social-links-profile/index.html",
      github: "https://github.com/mohamedibrahimx123/Social-links-profile.git", 
      image: ImageProjcetSocailMedia,
      tech: ["HTML", "CSS"],
      accentColor: "#ec4899"
    },
    {
      title: "Dragon Game",
      description: "Interactive JavaScript game with RPG elements, health tracking, and attack mechanics.",
      link: "https://mohamedibrahimx123.github.io/Dragon-repeller-game/index.html",
      github: "https://github.com/mohamedibrahimx123/Dragon-repeller-game.git", 
      image: ImageProjcetDragon,
      tech: ["JavaScript", "HTML5", "CSS3"],
      accentColor: "#ef4444"
    },
    {
      title: "Gourmet Restaurant",
      description: "Food ordering platform with menu filtering, cart functionality, and responsive layout.",
      link: "https://mohamedibrahimx123.github.io/Restaurant_Website/index.html",
      github: "https://github.com/mohamedibrahimx123/Restaurant_Website.git", 
      image: ImageProjcetFood,
      tech: ["HTML", "CSS", "JavaScript"],
      accentColor: "#8b5cf6"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">Explore my latest work and creative solutions</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              data-aos="custom-fade"
              data-aos-delay={index * 150}
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div 
                  className="project-overlay" 
                  style={{ backgroundColor: project.accentColor }}
                >
                  <div className="project-links">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-tag"
                      style={{ 
                        color: project.accentColor, 
                        borderColor: project.accentColor,
                        backgroundColor: `${project.accentColor}10`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;