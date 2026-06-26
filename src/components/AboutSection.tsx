// components/AboutSection.tsx
"use client";
import { motion } from "framer-motion";
import { Brain, Dumbbell, Compass } from "lucide-react";

// Animation variants matching your Hero section
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const ease = [0.4, 0, 0.2, 1] as const;

export default function AboutSection() {
  return (
    <section id="revolution" className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      
      {/* Subtle background watermark */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-20 pointer-events-none opacity-[0.02] hidden lg:block select-none"
        style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "40vw", lineHeight: 1, color: "#fff" }}
      >
        TG
      </div>

      {/* Glow effect behind image */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-10 relative z-10">
        
        {/* ── TOP: TEXT & IMAGE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          
          {/* LEFT: Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
            >
              <span className="w-9 h-px bg-yellow-400 flex-shrink-0" />
              <span className="text-[10.5px] font-bold tracking-[4px] uppercase text-yellow-400">
                Est. 1985 · Our Philosophy
              </span>
            </motion.div>

            {/* Heading */}
            <h2
              className="leading-[0.9] tracking-wide mb-6"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(50px, 6vw, 90px)" }}
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-white"
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} transition={{ duration: 0.7, ease }}
                >
                  CUT THE <em className="text-yellow-400 not-italic">FAT.</em>
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)", color: "transparent" }}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease }}
                >
                  NO FLUFF.
                </motion.span>
              </span>
            </h2>

            {/* Subheading */}
            <motion.p
              className="text-white/20 mb-6"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "3px" }}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              Culture Driven Concept
            </motion.p>

            {/* Paragraphs */}
            <motion.div
              className="space-y-5 mb-10"
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.45, ease }}
            >
              <p className="text-[15px] text-white/42 leading-[1.85] max-w-[520px]">
                THE GYM is among the <span className="text-white font-semibold">fastest-growing fitness brands</span> in the United States. Currently, we have <span className="text-yellow-400 font-semibold">nine locations</span>. Our foundation is focused on three basic principles: <span className="text-white font-semibold">Mental Health</span>, <span className="text-white font-semibold">Physical Health</span>, and the idea that everyone has <span className="text-yellow-400 font-semibold">Freedom of Choice</span>.
              </p>
              <p className="text-[15px] text-white/42 leading-[1.85] max-w-[520px]">
                We believe and advocate these principles to improve the lives of the people we serve. We have stood with these principles since day ONE. At THE GYM, the best way to achieve mental and physical health is through the <span className="text-yellow-400 font-semibold">freedom of choice</span> and a gym culture driven by <span className="text-white font-bold">YOU!</span>
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <div className="relative overflow-hidden border border-white/7">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                alt="THE GYM Interior"
                className="w-full h-[500px] lg:h-[600px] object-cover grayscale-[0.2] contrast-[1.1]"
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 to-transparent" />

              {/* TG Logo Overlay (Bottom Left) - Matches Navbar Hexagon */}
              <div className="absolute bottom-6 left-6">
                <div
                  className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400 flex items-center justify-center shadow-2xl"
                  style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
                >
                  <span
                    className="text-black text-3xl md:text-4xl font-black tracking-wider"
                    style={{ fontFamily: "'Bebas Neue',sans-serif" }}
                  >
                    TG
                  </span>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-yellow-400/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-yellow-400/40" />
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM: THREE PRINCIPLES ── */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="text-[10.5px] font-bold tracking-[4px] uppercase text-white/25">
              The Three Pillars
            </span>
            <span className="flex-1 h-px bg-white/7" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Mental Health",
                desc: "Training the mind to be as resilient as the body. Fitness is a mental game.",
                icon: Brain,
                num: "01"
              },
              {
                title: "Physical Health",
                desc: "Building strength, endurance, and vitality. No shortcuts, just hard work.",
                icon: Dumbbell,
                num: "02"
              },
              {
                title: "Freedom of Choice",
                desc: "Your journey, your rules. We provide the environment, you bring the drive.",
                icon: Compass,
                num: "03"
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease }}
                  className="
                    group relative p-8 border border-white/7 bg-white/[0.02] backdrop-blur-xl
                    hover:border-yellow-400/30 transition-all duration-300 overflow-hidden
                  "
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-yellow-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-bold tracking-[2px] text-white/20">
                        {p.num}
                      </span>
                      <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-yellow-400/50 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-white/40 group-hover:text-yellow-400 transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3
                      className="text-white text-2xl md:text-3xl mb-4 tracking-wide"
                      style={{ fontFamily: "'Bebas Neue',sans-serif" }}
                    >
                      {p.title.toUpperCase()}
                    </h3>

                    <p className="text-[14px] text-white/35 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}