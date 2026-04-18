import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "Kotlin"],
    color: "text-accent-blue focus:ring-accent-blue"
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "React Native"],
    color: "text-accent-green focus:ring-accent-green"
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Prisma ORM", "Socket.io"],
    color: "text-accent-orange focus:ring-accent-orange"
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    color: "text-accent-red focus:ring-accent-red"
  },
  {
    category: "Tools & Core",
    items: ["Git", "Postman", "Docker", "Mapbox", "Figma", "DSA", "System Design"],
    color: "text-white focus:ring-white"
  }
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Technical <span className="text-accent-green">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-accent-green rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-6 rounded-2xl border border-white/5"
          >
            <h3 className={`text-xl font-heading font-bold mb-6 ${skillGroup.color.split(' ')[0]}`}>
              {skillGroup.category}
            </h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skillGroup.items.map((skill, i) => (
                <motion.span
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-text/80 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
