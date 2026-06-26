// components/ProgramsSection.tsx
"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    step: "01",
    title: "The First Step",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    desc: "Get off the couch and come visit a TG to see what all the Hype is about. You won't be let down — GUARANTEED!",
  },
  {
    step: "02",
    title: "The Market",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    desc: "Our Model is so unique. Every community deserves a TG. The world is your playground!",
  },
  {
    step: "03",
    title: "The Empire",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80",
    desc: "In Business for yourself but not by yourself. 40+ years in the making — we have the sauce!",
  },
  {
    step: "04",
    title: "The Culture",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    desc: "40 years of culture, community, and iron. This isn't just a gym — it's a movement!",
  },
  {
    step: "05",
    title: "The Win",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
    desc: "We know what it takes to WIN! Join the fastest-growing fitness brand and build something legendary.",
  },
];

export default function ProgramsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % programs.length);
  const prev = () => setCurrent((prev) => (prev - 1 + programs.length) % programs.length);

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-4">
            <div className="w-8 h-0.5 bg-orange-500" />
            The Opportunity
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Take Back The <span className="text-orange-500">Industry</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {programs.map((program) => (
                <div key={program.step} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative h-64 lg:h-full min-h-[400px]">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
                        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full">
                          <span className="text-orange-500 font-bold">
                            Step {program.step}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">
                          {program.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {program.desc}
                        </p>
                        <button className="self-start bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {programs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === current
                      ? "bg-orange-500 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}