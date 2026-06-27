import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#030303]/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          className="relative text-xl font-black tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
          to="/"
          aria-label="Go to home"
        >
          Mohamed Ibrahim
        </Link>

        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                className={`relative px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  active ? "text-white" : "text-white/60 hover:text-white/90"
                }`}
                to={item.path}
              >
                <span className="relative z-10">{item.name}</span>
                {active && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20"
                    style={{ originY: "0px" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {active && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
