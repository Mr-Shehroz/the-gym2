"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ── animation helpers ── */
const slideUp   = { hidden:{opacity:0,y:"100%"}, visible:{opacity:1,y:0} };
const fadeUp    = { hidden:{opacity:0,y:28},     visible:{opacity:1,y:0} };
const fadeLeft  = { hidden:{opacity:0,x:40},     visible:{opacity:1,x:0} };
const ease      = [0.4,0,0.2,1] as const;

const stats = [
  { value:40,  suffix:"+",  label:"Years Experience" },
  { value:9,   suffix:"+",  label:"Locations"        },
  { value:10,  suffix:"K+", label:"Members"          },
  { value:100, suffix:"%",  label:"Commitment"       },
];

const cards = [
  { label:"Fastest Growing", value:"Top 10", sub:"US fitness brands",    accent:true  },
  { label:"Next Opening",    value:"2025",   sub:"Location #10",         accent:false },
  { label:"Freedom",         value:"Always", sub:"Your choice, your pace",accent:false },
];

const marqueeItems = [
  "Mental Health","Physical Health","Freedom of Choice",
  "Est. 1985","9+ Locations","Cut The Fat","No Fluff",
];

/* ── animated counter ── */
function useCounter(target:number, trigger:boolean, duration=1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const step = (ts:number) => {
      const p  = Math.min((ts - start) / duration, 1);
      const ep = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(ep * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return val;
}

function StatItem({ value, suffix, label, trigger }:
  { value:number; suffix:string; label:string; trigger:boolean }) {
  const count = useCounter(value, trigger);
  return (
    <div className="pr-6">
      <p
        className="text-yellow-400 leading-none mb-1.5 transition-transform duration-300 hover:scale-105"
        style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(40px,4vw,52px)" }}
      >
        {count}{suffix}
      </p>
      <p className="text-[10px] font-semibold tracking-[2.5px] uppercase text-white/25">
        {label}
      </p>
    </div>
  );
}

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">

        {/* ── Background image with zoom-in ── */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            initial={{ scale:1.08 }}
            animate={{ scale:1.0 }}
            transition={{ duration:10, ease:"easeOut" }}
          />
          {/* dual gradient overlay */}
          <div className="absolute inset-0"
            style={{
              background: `
                linear-gradient(105deg,rgba(8,8,8,1) 0%,rgba(8,8,8,0.92) 35%,rgba(8,8,8,0.58) 60%,rgba(8,8,8,0.14) 100%),
                linear-gradient(to top,rgba(8,8,8,1) 0%,rgba(8,8,8,0.38) 20%,transparent 50%)
              `
            }}
          />
        </div>

        {/* ── Vertical accent line ── */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none hidden xl:block"
          style={{
            left:"48%", width:"1px",
            background:"linear-gradient(to bottom,transparent,rgba(234,179,8,0.2) 25%,rgba(234,179,8,0.2) 75%,transparent)"
          }}
        >
          {/* animated glow dot */}
          <motion.div
            className="absolute -left-[2px] w-[5px] h-[5px] rounded-full bg-yellow-400"
            style={{ boxShadow:"0 0 12px rgba(234,179,8,0.9)" }}
            animate={{ top:["20%","75%","20%"] }}
            transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
          />
        </div>

        {/* ── Main layout ── */}
        <div
          className="
            relative z-20
            max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-10
            md:pt-44 pt-[15vh] pb-20
            grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center
          "
        >
          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity:0, x:-28 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.65, delay:0.15, ease }}
            >
              <span className="w-9 h-px bg-yellow-400 flex-shrink-0" />
              <span className="text-[10.5px] font-bold tracking-[4px] uppercase text-yellow-400">
                Est. 1985 · Fitness Redefined
              </span>
            </motion.div>

           {/* Heading — each line clips from bottom */}
            <h1
              className="leading-[0.9] tracking-wide mb-3 h1"
              style={{ fontFamily:"'Bebas Neue',sans-serif", }}
            >
              {/* Line 1: CUT THE FAT. — all on one line */}
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-white"
                  variants={slideUp} initial="hidden" animate="visible"
                  transition={{ duration:0.7, delay:0.35, ease }}
                >
                  CUT THE <em className="text-yellow-400 not-italic">FAT.</em>
                </motion.span>
              </span>
 
              {/* Line 2: NO FLUFF. outline */}
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  style={{ WebkitTextStroke:"1.5px rgba(255,255,255,0.18)", color:"transparent" }}
                  variants={slideUp} initial="hidden" animate="visible"
                  transition={{ duration:0.7, delay:0.55, ease }}
                >
                  NO FLUFF.
                </motion.span>
              </span>
            </h1>

            {/* Sub */}
            <motion.p
              className="text-white/20 mb-3"
              style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(32px,4vw,56px)", letterSpacing:"3px" }}
              variants={fadeUp} initial="hidden" animate="visible"
              transition={{ duration:0.6, delay:0.82, ease }}
            >
              Culture Driven
            </motion.p>

            {/* Yellow divider */}
            {/* <motion.div
              className="h-0.5 bg-yellow-400 mb-7"
              initial={{ width:0 }} animate={{ width:52 }}
              transition={{ duration:0.55, delay:0.98, ease }}
            /> */}

            {/* Description */}
            <motion.p
              className="text-[15px] text-white/42 leading-[1.85] max-w-[420px] mb-11"
              variants={fadeUp} initial="hidden" animate="visible"
              transition={{ duration:0.6, delay:1.1, ease }}
            >
              Among the fastest-growing fitness brands in the United States. Nine
              locations built on three principles — Mental Health, Physical Health,
              and Freedom of Choice.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-16"
              variants={fadeUp} initial="hidden" animate="visible"
              transition={{ duration:0.6, delay:1.25, ease }}
            >
              {/* Primary — shimmer on hover */}
              <button
                className="
                  relative overflow-hidden
                  text-[10.5px] font-black tracking-[2.5px] uppercase
                  bg-yellow-400 text-black px-10 py-4
                  hover:-translate-y-0.5 active:translate-y-0
                  transition-transform duration-200
                  group
                "
                style={{ clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}
              >
                <span className="relative z-10">Discover More</span>
                {/* shimmer */}
                <span className="
                  absolute inset-0 -translate-x-full
                  bg-gradient-to-r from-transparent via-white/30 to-transparent
                  group-hover:translate-x-full transition-transform duration-500
                " />
              </button>

              <button className="
                text-[10.5px] font-bold tracking-[2.5px] uppercase
                text-white/55 px-10 py-4
                border border-white/18
                hover:border-yellow-400 hover:text-yellow-400
                hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-250
              ">
                Open A Gym
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="
                grid grid-cols-4 sm:grid-cols-4 grid-cols-2
                border-t border-white/7 pt-9
                gap-y-6
              "
              variants={fadeUp} initial="hidden" animate="visible"
              transition={{ duration:0.6, delay:1.42, ease }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`${i > 0 ? "pl-6 border-l border-white/7" : ""} pr-6`}
                >
                  <StatItem {...s} trigger={triggered} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — floating cards */}
          <motion.div
            className="hidden md:flex flex-col gap-3.5"
            variants={fadeLeft} initial="hidden" animate="visible"
            transition={{ duration:0.8, delay:0.75, ease }}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className={`
                  w-52 p-[22px_24px] border cursor-default
                  transition-all duration-300 relative overflow-hidden
                  hover:-translate-x-1
                  ${c.accent
                    ? "bg-yellow-400 border-yellow-400 hover:scale-[1.02]"
                    : "bg-white/[0.035] border-white/7 backdrop-blur-xl hover:border-yellow-400/30"
                  }
                `}
              >
                {!c.accent && (
                  <span className="
                    absolute inset-0 bg-yellow-400/[0.05] opacity-0
                    hover:opacity-100 transition-opacity duration-300
                  " />
                )}
                <p className={`text-[9.5px] font-bold tracking-[2.5px] uppercase mb-2.5
                  ${c.accent ? "text-black/45" : "text-white/28"}`}>
                  {c.label}
                </p>
                <p
                  className={`leading-none mb-1 ${c.accent ? "text-black" : "text-white"}`}
                  style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"38px" }}
                >
                  {c.value}
                </p>
                <p className={`text-[12px] ${c.accent ? "text-black/45" : "text-white/35"}`}>
                  {c.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20
                     flex flex-col items-center gap-2.5"
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ delay:1.8, duration:0.6 }}
        >
          <span className="text-[9px] font-bold tracking-[3px] uppercase text-white/22">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-yellow-400 to-transparent"
            animate={{ scaleY:[0.4,1,0.4], opacity:[0.3,1,0.3] }}
            transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }}
            style={{ transformOrigin:"top" }}
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-yellow-400 py-4 overflow-hidden">
        <div
          className="flex whitespace-nowrap w-max"
          style={{ animation:"marquee 20s linear infinite" }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-10 text-black"
              style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"20px", letterSpacing:"3px" }}
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-black/25 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}