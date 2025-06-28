import React from "react";
import { FaReact, FaCode, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import "./About.css";

function About() {
  return (
    <section
      className="py-5 text-white"
      id="about"
      style={{
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
            <div
              className="d-inline-flex justify-content-center align-items-center rounded-circle shadow mb-4 animate-icon"
              style={{
                width: "80px",
                height: "80px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(6px)",
              }}
            >
              <FaCode size={36} color="#fff" />
            </div>

            <h2 className="fw-bold display-5 mb-4">About Me</h2>

            <p className="lead" style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              I'm <strong>Mohamed Ebrahim</strong>, a passionate Front-End Developer based in Egypt.
              I love building visually appealing, fast, and responsive websites using modern technologies.
              Whether it's crafting a pixel-perfect UI or implementing smart interactions, I enjoy every step
              of turning a vision into a functional product.
            </p>

            <p className="text-white-50 mt-3">
              With a solid understanding of <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>, and
              <strong> Bootstrap</strong>, I aim to deliver interactive web experiences that users love to engage with.
              I'm constantly learning and pushing my skills further.
            </p>
          </div>
        </div>

        <div className="row justify-content-center text-center">
          <div className="col-lg-8 mb-4">
            <h4 className="fw-bold mb-3">Technologies I Use</h4>
            <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
              <div className="tech-icon rotate-hover">
                <FaHtml5 size={50} color="#e34c26" title="HTML5" />
              </div>
              <div className="tech-icon rotate-hover">
                <FaCss3Alt size={50} color="#2965f1" title="CSS3" />
              </div>
              <div className="tech-icon rotate-hover">
                <SiJavascript size={50} color="#f0db4f" title="JavaScript" />
              </div>
              <div className="tech-icon rotate-hover">
                <FaReact size={50} color="#61DBFB" title="React.js" />
              </div>
              <div className="tech-icon rotate-hover">
                <FaBootstrap size={50} color="#563d7c" title="Bootstrap" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
