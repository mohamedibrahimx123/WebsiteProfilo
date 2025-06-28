import React from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle">Have a project in mind or want to connect? Reach out!</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container" data-aos="fade-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Hi Mohamed, I'd like to talk about..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane className="icon" />
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info" data-aos="fade-left">
            <div className="info-card">
              <div className="info-icon">
                <MdEmail size={24} />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <a href="mailto:mohamedibrahim7113@gmail.com">mohamedibrahim7113@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaGithub size={24} />
              </div>
              <div className="info-content">
                <h3>GitHub</h3>
                <a 
                  href="https://github.com/mohamedibrahimx123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  github.com/mohamedibrahimx123
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaLinkedin size={24} />
              </div>
              <div className="info-content">
                <h3>LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/mohamed-ebrahim-059b90325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/mohamed-ebrahim
                </a>
              </div>
            </div>

            <div className="social-links">
              <a 
                href="https://github.com/mohamedibrahimx123" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-ebrahim-059b90325" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:mohamedibrahim7113@gmail.com" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MdEmail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;