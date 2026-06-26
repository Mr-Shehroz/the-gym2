// components/WhyPartnerSection.tsx
"use client";
import { motion } from "framer-motion";
import { Clock, Users, Scroll, DollarSign } from "lucide-react";

// Animation variants matching your Hero & About sections
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const ease = [0.4, 0, 0.2, 1] as const;

export default function WhyPartnerSection() {
  const features = [
    {
      icon: Clock,
      title: "The History",
      description:
        "The TG brand is different, we are woven into the DNA of American bodybuilding. Our history takes us back to a time when gyms weren't ruled by Investment Bankers and life revolved around the weight room.",
      num: "01",
    },
    {
      icon: Users,
      title: "The Movement",
      description:
        "Our members & Brand partners are the secret sauce that bond our communities together! With over 40 years of experience in the fitness industry, we know what it takes to WIN, and WIN BIG.",
      num: "02",
    },
    {
      icon: Scroll,
      title: "The Promise",
      description:
        "We are ambassadors of freedom. We believe in maintaining the power of choice for our Brand partners. We used the United States Constitution as a template for Freedom within YOUR business.",
      num: "03",
    },
    {
      icon: DollarSign,
      title: "The Bi-Product",
      description:
        "With culture comes community, with community comes connection, with connection comes influence. You will become the centerpiece for your community, and the flood gates of opportunity will open.",
      num: "04",
    },
  ];

  return (
    <section id="business" className="relative py-24 bg-[#080808]">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-400/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-10 relative z-10">
        
        {/* ── HEADER ── */}
        <div className="mb-16 md:mb-20">
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
              The Business · Partnership
            </span>
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
                WHY PARTNER WITH
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-yellow-400"
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease }}
              >
                THE GYM?
              </motion.span>
            </span>
          </h2>
        </div>

        {/* ── FEATURES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease }}
                className="
                  group relative p-8 md:p-10 border border-white/7 bg-white/[0.02] backdrop-blur-xl
                  hover:border-yellow-400/30 transition-all duration-300 overflow-hidden
                "
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-yellow-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-bold tracking-[2px] text-white/20">
                      {feature.num}
                    </span>
                    <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-yellow-400/50 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-white/40 group-hover:text-yellow-400 transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3
                    className="text-white text-2xl md:text-3xl mb-4 tracking-wide"
                    style={{ fontFamily: "'Bebas Neue',sans-serif" }}
                  >
                    {feature.title.toUpperCase()}
                  </h3>

                  <p className="text-[14px] text-white/35 leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <button
            className="
              relative overflow-hidden
              text-[11px] font-black tracking-[2.5px] uppercase
              bg-yellow-400 text-black px-12 py-5
              hover:-translate-y-0.5 active:translate-y-0
              transition-transform duration-200 group
            "
            style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}
          >
            <span className="relative z-10">Contact Us Now</span>
            {/* shimmer */}
            <span className="
              absolute inset-0 -translate-x-full
              bg-gradient-to-r from-transparent via-white/30 to-transparent
              group-hover:translate-x-full transition-transform duration-500
            " />
          </button>
        </motion.div>

      </div>
    </section>
  );
}