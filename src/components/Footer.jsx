import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaHeart } from "react-icons/fa";
import { MdEmail, MdArrowUpward } from "react-icons/md";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">

        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <MdArrowUpward size={20} />
        </button>


        <div className="social-links">
          <a
            href="mailto:mohamedibrahim7113@gmail.com"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </a>
          <a
            href="https://github.com/mohamedibrahimx123"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ebrahim-059b90325"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <div className="footer-text">
          <p>
            Built with <FaCode className="icon" /> and <FaHeart className="icon heart" /> by Mohamed Ebrahim
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;