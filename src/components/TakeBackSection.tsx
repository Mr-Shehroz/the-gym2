// components/TakeBackSection.tsx
"use client";
import { motion } from "framer-motion";

// Animation variants matching your previous sections
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const ease = [0.4, 0, 0.2, 1] as const;

export default function TakeBackSection() {
  const steps = [
    {
      title: "The 1st Step",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      description:
        "Get off the couch and come visit a TG to see what all the Hype is about! It is something you truly need to experience. You won't be let down GUARANTEED!",
    },
    {
      title: "The Market",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
      description:
        "Our Model is so unique. Every community deserves a TG. The world is your playground!",
    },
    {
      title: "The Empire",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80",
      description:
        "In Business for yourself but not by yourself. Over 40 years in the making, we have the sauce that will make you and your business the staple of influence within your community!",
    },
  ];

  return (
    <section id="locations" className="relative py-24 bg-[#080808] overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-10 relative z-10">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            <span className="w-9 h-px bg-yellow-400 flex-shrink-0" />
            <span className="text-[10.5px] font-bold tracking-[4px] uppercase text-yellow-400">
              The Process · 3 Steps
            </span>
            <span className="w-9 h-px bg-yellow-400 flex-shrink-0" />
          </motion.div>

          {/* Heading */}
          <h2
            className="leading-[0.9] tracking-wide"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px, 5vw, 80px)" }}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block text-white"
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.7, ease }}
              >
                TAKE BACK THE
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-yellow-400"
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease }}
              >
                INDUSTRY
              </motion.span>
            </span>
          </h2>
        </div>

        {/* ── STEPS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease }}
              className="
                group relative border border-white/7 bg-white/[0.02] backdrop-blur-xl
                hover:border-yellow-400/30 transition-all duration-300 overflow-hidden
              "
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 to-transparent" />

                {/* Step Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-yellow-400 text-black text-[10px] font-black tracking-[2px] px-3 py-1.5 block">
                    STEP 0{index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <h3
                  className="text-white text-2xl md:text-3xl mb-4 tracking-wide"
                  style={{ fontFamily: "'Bebas Neue',sans-serif" }}
                >
                  {step.title.toUpperCase()}
                </h3>
                <p className="text-[14px] text-white/35 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}