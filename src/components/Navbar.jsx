import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tech Stack", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo / Brand with Team Leader Badge */}
        <Link
          className="group flex items-center gap-3"
          to="/"
          aria-label="Mohamed Ibrahim Portfolio"
        >
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider uppercase bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-500 bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform">
              Mohamed Ibrahim
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Team Leader @ STAT-Code
            </span>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                className={`relative px-3 py-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  active ? "text-white font-bold" : "text-white/60 hover:text-white"
                }`}
                to={item.path}
              >
                <span className="relative z-10">{item.name}</span>
                {active && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-400/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {active && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-[-16px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Quick link to company */}
          <a
            href="https://statcode.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 ml-2 px-3 py-1.5 text-xs font-bold rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 hover:bg-cyan-400/15 transition-all"
            title="STAT-Code Official Platform"
          >
            <span>STAT-Code</span>
            <FaExternalLinkAlt className="text-[9px]" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
