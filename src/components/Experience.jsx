import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "MediHut",
    duration: "Jan 2026 – Apr 2026",
    color: "#3B82F6",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    points: [
      "Engineered cross-platform Rider Delivery App (React Native, Node.js, Prisma, PostgreSQL, Redis) — cut dispatch latency ~35% via Redis caching.",
      "Built Pharmacy Console CRM serving 2+ live pharmacies — trimmed API response from ~120KB to under 30KB (60% gain).",
      "Shipped responsive pharmacy website with 40% load improvement + full Admin Panel."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Jesty CRM",
    duration: "Dec 2025 – Jan 2026",
    color: "#F97316",
    icon: <TrendingUp className="w-4 h-4 text-white" />,
    points: [
      "Developed React.js components with REST APIs; optimised Node.js/MongoDB backend for a SaaS CRM platform.",
      "Accelerated lead-management workflows by 25% via query optimisation and improved rendering performance."
    ]
  },
  {
    role: "Research Intern",
    company: "IIT Patna",
    duration: "Jun 2025 – Jul 2025",
    color: "#22C55E",
    icon: <MapPin className="w-4 h-4 text-white" />,
    points: [
      "Built multi-constraint exam seating allocator (Python, Streamlit) with sparse/dense fill modes and building-adjacency optimisation.",
      "Engineered automated clash detection via roll-number set intersections; produced structured Excel outputs."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-4 block"
        >
          ◈ Career
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Professional <span className="text-accent-blue">Experience</span>
        </h2>
        <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto"></div>
      </motion.div>

      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent origin-top"
        />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg"
                style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}
              >
                {exp.icon}
              </motion.div>

              {/* Spacer for mobile */}
              <div className="w-16 md:w-1/2 shrink-0" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4, boxShadow: `0 20px 40px ${exp.color}20` }}
                transition={{ duration: 0.3 }}
                className="flex-1 glass-panel p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden ml-6 md:ml-0"
              >
                {/* Side accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                  style={{ background: `linear-gradient(180deg, transparent, ${exp.color}, transparent)` }}
                />

                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1">{exp.role}</h3>
                    <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                  </div>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap shrink-0"
                    style={{ background: exp.color + '20', color: exp.color, border: `1px solid ${exp.color}40` }}
                  >
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="text-sm text-text/70 flex gap-3 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: exp.color }} />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
