import React from "react";

function Contact() {
  const linkedInUrl = "https://www.linkedin.com/in/mohamed-ebrahim-awod-70062a392";

  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(950px_520px_at_0%_10%,rgba(76,201,240,0.12),transparent_55%),linear-gradient(180deg,rgba(7,10,18,1),rgba(7,10,18,1))]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Let’s build something premium. Send me a message and I’ll get back to you soon.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
            <div className="text-sm font-extrabold tracking-wide text-white/70">
              Quick Actions
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-extrabold text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10"
                href="mailto:mohamedibrahim7113@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-extrabold text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10"
                href="https://github.com/mohamedibrahimx123"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-extrabold text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-5 text-sm font-semibold text-white/60 leading-relaxed">
              Best response time: usually within 24 hours (weekdays).
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
            <div className="text-sm font-extrabold tracking-wide text-white/70">Message</div>

            <form
              className="mt-4 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! This is a demo form. You can contact via Email.");
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/90 outline-none placeholder:text-white/45"
                  required
                />
                <input
                  placeholder="Your email"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/90 outline-none placeholder:text-white/45"
                  required
                />
              </div>

              <textarea
                placeholder="Write your message..."
                className="min-h-[140px] resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/90 outline-none placeholder:text-white/45"
                required
              />

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-5 py-3 font-black text-black shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

