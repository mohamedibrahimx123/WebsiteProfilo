import React from "react";
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail, MdArrowUpward } from "react-icons/md";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030303] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 py-12">
        {/* Back to top floating button */}
        <button
          className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-[#090b14] text-white transition-all hover:border-cyan-400 hover:text-cyan-300 hover:scale-110 shadow-xl"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <MdArrowUpward size={18} />
        </button>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-2">
          <a
            href="mailto:mohamedibrahim7113@gmail.com"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 transition-all hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </a>
          <a
            href="https://github.com/mohamedibrahimx123"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 transition-all hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ebrahim-awod-70062a392"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 transition-all hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://statcode.tech/"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 transition-all hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
            title="STAT-Code Official Platform"
          >
            <FaExternalLinkAlt size={14} />
          </a>
        </div>

        <div className="mt-6 text-center text-sm text-white/70">
          <span className="font-extrabold text-white">Mohamed Ibrahim</span> — Senior Frontend Engineer &{" "}
          <a
            href="https://statcode.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-bold hover:underline"
          >
            Team Leader @ STAT-Code
          </a>
        </div>

        <div className="mt-2 text-center text-xs text-white/40">
          Built with React 19, Three.js, Framer Motion & Tailwind CSS • &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
