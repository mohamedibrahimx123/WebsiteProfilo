import React from "react";

import ImgFreeCodeCamp from "../assets/Screenshot 2026-03-14 164126.png";
import ImgArabic from "../assets/Screenshot 2026-03-14 200443.png";
import ImgRouteIT from "../assets/Screenshot 2026-03-18 215234.png";
import ImgTyping from "../assets/Screenshot 2026-03-18 225515.png";

function Certificates() {
  const certificates = [
    {
      title: "freeCodeCamp - Legacy Responsive Web Design V8",
      subtitle: "Developer Certification (June 14, 2025)",
      image: ImgFreeCodeCamp,
      accent: "#4cc9f0"
    },
    {
      title: "Route IT Training Center - Frontend Diploma",
      subtitle: "Certificate of Completion (May 2, 2026)",
      image: ImgRouteIT,
      accent: "#10b981"
    },
    {
      title: "Tuwaiq Academy - Front-End Development Diploma",
      subtitle: "CSS & modern UI skills",
      image: ImgArabic,
      accent: "#a855f7"
    },
    {
      title: "typing.com - Advanced Assessment",
      subtitle: "Typing speed + accuracy achievement",
      image: ImgTyping,
      accent: "#f59e0b"
    }
  ];

  return (
    <section id="certificates" className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_15%_0%,rgba(76,201,240,0.10),transparent_55%),radial-gradient(820px_520px_at_90%_0%,rgba(168,85,247,0.10),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Certificates <span className="text-cyan-400">& Achievements</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Proof of learning, completion, and continuous improvement.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {certificates.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.35)] transition hover:-translate-y-1"
              style={{ borderColor: `${c.accent}55` }}
            >
              <div className="relative">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-4 top-4 rounded-full px-4 py-2 text-sm font-extrabold text-white/90"
                  style={{ backgroundColor: `${c.accent}33`, border: `1px solid ${c.accent}55` }}
                >
                  Verified
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black leading-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;

