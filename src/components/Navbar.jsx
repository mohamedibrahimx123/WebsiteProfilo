import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
  FaHome,
  FaLaptopCode,
  FaFolderOpen,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Tech Stack", path: "/skills", icon: FaLaptopCode },
    { name: "Projects", path: "/projects", icon: FaFolderOpen },
    { name: "Certificates", path: "/certificates", icon: FaCertificate },
    { name: "Contact", path: "/contact", icon: FaEnvelope },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#030303]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo / Brand with Team Leader Badge */}
        <Link
          className="group flex items-center gap-3"
          to="/"
          aria-label="Mohamed Ibrahim Portfolio"
          onClick={() => setIsOpen(false)}
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

        {/* Desktop Navigation Items (hidden on mobile, visible on md and up) */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2 md:gap-3">
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

        {/* Mobile Toggle Button (visible only on small screens) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <FaTimes className="text-lg text-cyan-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <FaBars className="text-lg" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden md:hidden border-t border-white/10 bg-[#06080e]/95 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-1 px-4 pt-3 pb-6">
              {navItems.map((item, index) => {
                const active = location.pathname === item.path;
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        active
                          ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/10 text-cyan-300 border border-cyan-400/30 shadow-lg shadow-cyan-500/10"
                          : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`p-2 rounded-lg text-xs ${
                            active
                              ? "bg-cyan-400/20 text-cyan-300"
                              : "bg-white/5 text-white/50"
                          }`}
                        >
                          <IconComponent />
                        </span>
                        <span>{item.name}</span>
                      </div>

                      {active && (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          Active
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile link to STAT-Code company */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.04, duration: 0.2 }}
                className="pt-2 mt-2 border-t border-white/5"
              >
                <a
                  href="https://statcode.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 hover:bg-cyan-400/15 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>STAT-Code Official Platform</span>
                  </div>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
