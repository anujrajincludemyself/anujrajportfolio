import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 3, suffix: '+', label: 'Internships' },
  { value: 10, suffix: '+', label: 'Projects Built' },
  { value: 150, suffix: '+', label: 'LeetCode Problems' },
  { value: 15, suffix: '+', label: 'Tech Stack' },
];

const Counter = ({ value, suffix, label }) => {
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
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-panel p-6 rounded-2xl text-center border border-white/5 hover:border-accent-blue/30 transition-all duration-500 group hover:-translate-y-1"
    >
      <div className="text-4xl md:text-5xl font-heading font-black text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-text/60 group-hover:text-text/90 transition-colors">{label}</div>
    </motion.div>
  );
};

const StatsBar = () => (
  <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <Counter key={i} {...s} />
      ))}
    </div>
  </section>
);

export default StatsBar;
