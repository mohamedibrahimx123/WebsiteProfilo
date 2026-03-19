import React from "react";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import Contact from "./pages/Contact";
import CertificatesPage from "./pages/Certificates";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;