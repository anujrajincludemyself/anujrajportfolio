import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 4, suffix: '+', label: 'Internships' },
  { value: 12, suffix: '+', label: 'Projects Built' },
  { value: 170, suffix: '+', label: 'LeetCode (C++)' },
  { value: 3, suffix: 'L+', label: 'Hackathon Pool' },
];

const Counter = ({ value, suffix, label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 25);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="relative group rounded-2xl p-6 text-center transition-all duration-400 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'linear-gradient(90deg, transparent, #00ffff, transparent)' }}
      />
      <div
        className="font-heading font-black mb-1.5 text-gradient"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
      >
        {count}{suffix}
      </div>
      <div
        className="text-sm font-medium transition-colors duration-300"
        style={{ color: 'rgba(229,231,235,0.55)' }}
      >
        {label}
      </div>
    </motion.div>
  );
};

const StatsBar = () => (
  <section className="py-16 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <Counter key={i} {...s} index={i} />
      ))}
    </div>
  </section>
);

export default StatsBar;
