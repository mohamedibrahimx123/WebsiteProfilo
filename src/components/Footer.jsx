import React from "react";
import { FaGithub, FaLinkedin, FaHeart, FaCode } from "react-icons/fa";
import { MdEmail, MdArrowUpward } from "react-icons/md";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-10">
        <button
          className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <MdArrowUpward size={20} />
        </button>

        <div className="flex items-center gap-3">
          <a
            href="mailto:mohamedibrahim7113@gmail.com"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </a>
          <a
            href="https://github.com/mohamedibrahimx123"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ebrahim-awod-70062a392"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <div className="mt-5 text-center text-white/70">
          Built with <FaCode className="inline" /> <FaHeart className="inline text-pink-500" /> by{" "}
          <span className="font-extrabold text-white/90">Mohamed Ibrahim</span>
        </div>

        <div className="mt-2 text-center text-white/50">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

