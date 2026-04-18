import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    icon: "⌨️",
    items: ["C++", "Python", "JavaScript", "TypeScript", "Kotlin"],
    color: "#3B82F6",
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: ["React.js", "Next.js", "Tailwind CSS", "React Native"],
    color: "#22C55E",
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "Prisma ORM", "Socket.io"],
    color: "#F97316",
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    color: "#EF4444",
  },
  {
    category: "Tools & Core",
    icon: "🛠️",
    items: ["Git", "Docker", "Postman", "Mapbox", "Figma", "DSA", "System Design"],
    color: "#A78BFA",
  }
];

const Skills = () => {
  const [hoveredGroup, setHoveredGroup] = useState(null);

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
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
          className="text-accent-green text-sm font-medium tracking-widest uppercase mb-4 block"
        >
          ◈ Arsenal
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Technical <span className="text-accent-green">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-accent-green rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            onHoverStart={() => setHoveredGroup(idx)}
            onHoverEnd={() => setHoveredGroup(null)}
            className="relative glass-panel p-6 rounded-2xl overflow-hidden cursor-default transition-all duration-500"
            style={{ borderColor: hoveredGroup === idx ? group.color + '50' : 'rgba(255,255,255,0.05)', borderWidth: 1, borderStyle: 'solid' }}
          >
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
              style={{
                background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
                opacity: hoveredGroup === idx ? 1 : 0.3,
                transition: 'opacity 0.4s'
              }}
            />
            {/* Background glow blob */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
              style={{ background: group.color, opacity: hoveredGroup === idx ? 0.18 : 0.06, transition: 'opacity 0.4s' }}
            />

            <div className="flex items-center gap-3 mb-5 relative z-10">
              <motion.span
                animate={{ rotate: hoveredGroup === idx ? [0, -10, 10, 0] : 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl"
              >{group.icon}</motion.span>
              <h3 className="text-lg font-heading font-bold" style={{ color: group.color }}>
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {group.items.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 + i * 0.05 }}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-default"
                  style={{
                    background: group.color + '18',
                    border: `1px solid ${group.color}35`,
                    color: group.color
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
