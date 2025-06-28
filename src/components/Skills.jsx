import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiBootstrap } from "react-icons/si";
import { MdDevices, MdDesignServices } from "react-icons/md";
import './Skills.css';

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 100, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, level: 85, color: "#F7DF1E" },
    { name: "React.js", icon: <FaReact />, level: 80, color: "#61DAFB" },
    { name: "Bootstrap", icon: <SiBootstrap />, level: 80, color: "#7952B3" },
    { name: "Responsive Design", icon: <MdDevices />, level: 90, color: "#28A745" },
    { name: "Git & GitHub", icon: <FaGitAlt />, level: 75, color: "#F05032" },
    { name: "UI/UX Design", icon: <MdDesignServices />, level: 70, color: "#FF6B6B" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span style={{color:"blue"}} >Skills</span></h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div 
                  className="level-bar"
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
                <span className="level-percent">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;