"use client";
import { useEffect, useRef, useState } from "react";

type Stat = { target: number; suffix: string; label: string };

const stats: Stat[] = [
  { target: 9, suffix: "+", label: "Locations" },
  { target: 40, suffix: "+", label: "Years in Business" },
  { target: 1985, suffix: "", label: "Founded" },
  { target: 100, suffix: "%", label: "Freedom" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

function StatItem({ target, suffix, label, active }: Stat & { active: boolean }) {
  const count = useCountUp(target, 1800, active);
  return (
    <div className="flex-1 px-10 py-16 border-r border-white/[0.06] last:border-r-0 text-center relative group overflow-hidden">
      <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/[0.04] transition-colors duration-500" />
      <span
        className="block text-yellow-500 leading-none text-[72px] relative"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {count}{suffix}
      </span>
      <span className="block text-[#555] text-[11px] font-bold tracking-[4px] uppercase mt-2 relative">
        {label}
      </span>
      <div className="w-7 h-0.5 bg-yellow-500 mx-auto mt-2.5 relative" />
    </div>
  );
}

export default function StatsSection() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#080808] flex divide-x divide-white/[0.06]">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} active={active} />
      ))}
    </div>
  );
}