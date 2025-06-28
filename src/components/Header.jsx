import React, { useState, useEffect } from "react";
import "./Header.css";
import profileImg from "../assets/profile.jpg";

function Header() {
  const [typingText, setTypingText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    "Front-End Developer",
    "React.js Specialist",
    "UI/UX Enthusiast",
    "Bootstrap Expert",
    "Web Designer"
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (isDeleting) {

        setTypingText(currentText.substring(0, typingText.length - 1));
        setTypingSpeed(100);
      } else {

        setTypingText(currentText.substring(0, typingText.length + 1));
        setTypingSpeed(150);
      }


      if (!isDeleting && typingText === currentText) {

        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typingText === "") {

        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setTypingSpeed(500); 
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, currentTextIndex, isDeleting, texts, typingSpeed]);

  return (
    <header className="header-section">
      <div className="container">
        <div className="profile-container">
          <img
            src={profileImg}
            alt="Mohamed Ebrahim"
            className="profile-img"
          />
          <div className="glow-effect"></div>
        </div>
        
        <h1 className="name-title">Mohamed Ebrahim</h1>
        
        <div className="typing-container">
          <span className="typing-text">{typingText}</span>
          <span className="typing-cursor">|</span>
        </div>
        
        <p className="bio-text">
          I create beautiful, responsive web applications with modern technologies.
          Specializing in React.js, Bootstrap, and clean UI design. Let's build
          something amazing together!
        </p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mohamed-ebrahim-059b90325" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/mohamedibrahimx123" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:mohamedibrahim7113@gmail.com" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        
        <div className="scroll-down">
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;