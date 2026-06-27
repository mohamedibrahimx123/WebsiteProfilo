import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import TiltCard from "./TiltCard";

function Contact() {
  const linkedInUrl = "https://www.linkedin.com/in/mohamed-ebrahim-awod-70062a392";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 15 },
    },
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-black min-h-screen">
      {/* Background glow overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(950px_520px_at_0%_10%,rgba(34,211,238,0.1),transparent_55%),radial-gradient(800px_520px_at_80%_80%,rgba(236,72,153,0.06),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-400">
            📬 Get In Touch
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed text-lg font-medium">
            Let’s build something premium. Send me a message and I’ll get back to you soon.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {/* Quick Actions Column */}
          <motion.div variants={itemVariants}>
            <TiltCard maxRotation={6} className="h-full rounded-3xl">
              <div className="h-full rounded-3xl border border-white/5 bg-[#090b11]/50 p-8 shadow-2xl backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-cyan-400">
                    Quick Channels
                  </div>
                  
                  <div className="mt-8 flex flex-col gap-4">
                    <a
                      href="mailto:mohamedibrahim7113@gmail.com"
                      className="inline-flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm font-black text-white/80 transition-all hover:bg-cyan-500/10 hover:border-cyan-400/35 hover:text-cyan-300 hover:scale-[1.02]"
                    >
                      <FaEnvelope className="text-lg text-cyan-400" />
                      mohamedibrahim7113@gmail.com
                    </a>
                    
                    <a
                      href="https://github.com/mohamedibrahimx123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm font-black text-white/80 transition-all hover:bg-purple-500/10 hover:border-purple-400/35 hover:text-purple-300 hover:scale-[1.02]"
                    >
                      <FaGithub className="text-lg text-purple-400" />
                      github.com/mohamedibrahimx123
                    </a>
                    
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm font-black text-white/80 transition-all hover:bg-indigo-500/10 hover:border-indigo-400/35 hover:text-indigo-300 hover:scale-[1.02]"
                    >
                      <FaLinkedin className="text-lg text-indigo-400" />
                      linkedin.com/in/mohamed-ebrahim
                    </a>
                  </div>
                </div>

                <div className="mt-8 text-xs font-bold text-white/40 uppercase tracking-wider leading-relaxed">
                  ⚡ Best response time: usually within 24 hours (weekdays).
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div variants={itemVariants}>
            <TiltCard maxRotation={4} className="rounded-3xl">
              <div className="rounded-3xl border border-white/5 bg-[#090b11]/50 p-8 shadow-2xl backdrop-blur-md">
                <div className="text-xs font-black uppercase tracking-widest text-pink-400">
                  Write a Message
                </div>

                <form
                  className="mt-8 flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks! This is a demo form. You can reach out directly via Email.");
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/5 bg-black/30 px-5 py-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-cyan-500/5 transition-all duration-300"
                      required
                    />
                    <input
                      placeholder="Your email"
                      type="email"
                      className="w-full rounded-2xl border border-white/5 bg-black/30 px-5 py-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-cyan-500/5 transition-all duration-300"
                      required
                    />
                  </div>

                  <textarea
                    placeholder="Write your message..."
                    className="min-h-[160px] resize-none w-full rounded-2xl border border-white/5 bg-black/30 px-5 py-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-cyan-400/40 focus:bg-cyan-500/5 transition-all duration-300"
                    required
                  />

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-6 py-4 text-xs font-black uppercase tracking-widest text-black shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </form>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
