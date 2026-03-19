import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClass = (path) => {
    const active = location.pathname === path;
    return [
      "relative",
      "after:content-['']",
      "after:absolute after:bottom-[-7px] after:left-0 after:h-[3px] after:w-full after:rounded-full",
      "after:bg-gradient-to-r after:from-cyan-400 after:to-pink-500",
      "after:opacity-0 after:transition-opacity",
      active ? "text-white after:opacity-100" : "text-white/70 hover:text-white hover:after:opacity-100",
      "font-semibold",
      "transition-colors"
    ].join(" ");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          className="font-black tracking-tight text-white"
          to="/"
          aria-label="Go to home"
        >
          Mohamed Ibrahim
        </Link>

        <div className="flex items-center gap-5">
          <Link className={linkClass("/")} to="/">
            Home
          </Link>
          <Link className={linkClass("/skills")} to="/skills">
            Skills
          </Link>
          <Link className={linkClass("/projects")} to="/projects">
            Projects
          </Link>
          <Link className={linkClass("/certificates")} to="/certificates">
            Certificates
          </Link>
          <Link className={linkClass("/contact")} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

