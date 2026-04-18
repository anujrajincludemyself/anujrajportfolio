import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Development Engineer (SDE) Intern",
    company: "MediHut",
    duration: "Jan 2026 – April 2026",
    color: "bg-accent-blue",
    points: [
      "Engineered a cross-platform Rider Delivery App (React Native, Node.js, Prisma, PostgreSQL, Redis) with live dispatch and GPS tracking; cut dispatch latency by ~35% via Redis caching and row-level mutex locking.",
      "Built Pharmacy Console CRM serving 2+ live pharmacies — real-time inventory, order intake, and prescription workflows; achieved 50% performance gain by trimming API response payloads from ~120KB to under 30KB.",
      "Shipped responsive pharmacy website (React.js, TypeScript) with 40% load improvement; built full Admin Panel for riders, orders, and inventory."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Jesty CRM",
    duration: "Dec 2025 – Jan 2026",
    color: "bg-accent-orange",
    points: [
      "Developed React.js components with REST APIs; optimised Node.js/MongoDB backend for a SaaS CRM platform.",
      "Accelerated lead-management workflows by 25% via query optimisation and improved rendering performance."
    ]
  },
  {
    role: "Research Intern",
    company: "IIT Patna",
    duration: "Jun 2025 – Jul 2025",
    color: "bg-accent-green",
    points: [
      "Built a multi-constraint exam seating allocator (Python, Streamlit) handling sparse/dense fill modes, per-room buffer capacity, and building-adjacency optimisation.",
      "Engineered automated clash detection via roll-number set intersections across slots; produced structured Excel outputs with full try/catch recovery."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Professional <span className="text-accent-blue">Experience</span>
        </h2>
        <div className="h-1 w-20 bg-accent-blue rounded-full"></div>
      </motion.div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 md:-translate-x-1/2 ${exp.color}`}>
              <Briefcase className="w-4 h-4 text-white" />
            </div>

            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold font-heading">{exp.role}</h3>
                  <p className="text-white/60 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm px-3 py-1 bg-white/5 rounded-full text-white/80 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm text-text/70 flex gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${exp.color}`}></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
