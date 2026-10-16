import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    icon: '⌨️',
    items: ['C#', 'C++ (170+ LC)', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Kotlin'],
    color: '#3B82F6',
    desc: 'Fluent in systems & web languages with deep DSA roots in C++.',
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    items: ['Ollama', 'LLamaSharp', 'LLM Fine-tuning', 'Unsloth', 'Deep Learning', 'Computer Vision', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'nnUNet'],
    color: '#EE4C2C',
    desc: 'Local LLM integration, fine-tuning, and computer vision pipelines for production workflows.',
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'React Native'],
    color: '#61DAFB',
    desc: 'Building pixel-perfect, performant UIs across web and mobile.',
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', '.NET / C#', 'Prisma ORM', 'Socket.io', 'FastAPI'],
    color: '#9B4F96',
    desc: 'Scalable APIs, real-time systems, and industrial software with .NET.',
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    color: '#22C55E',
    desc: 'From document stores to caching layers — picked for the job.',
  },
  {
    category: 'Core CS',
    icon: '🧠',
    items: ['DSA (C++)', 'System Design', 'DBMS', 'OOP', 'OS', 'CN'],
    color: '#A78BFA',
    desc: 'Strong fundamentals that sit behind every architecture decision.',
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: ['Git', 'Docker', 'Postman', 'Swagger', 'Figma', 'Mapbox', 'MSG91'],
    color: '#F97316',
    desc: 'The everyday toolkit: version control, APIs, design, and comms.',
  },
];

// Stagger variants for skill pills
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};
const pillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  exit: { opacity: 0, scale: 0.75, y: -8, transition: { duration: 0.15 } },
};

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = skillsData[activeIdx];

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-sm font-medium uppercase tracking-widest mb-3 block" style={{ color: '#00ffff' }}>
            Arsenal
          </span>
          <h2 className="font-heading font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff' }}>
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6">

          {/* ── Left: Category tabs ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-x-visible"
          >
            {skillsData.map((group, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className="relative flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 shrink-0 lg:shrink group overflow-hidden"
                  style={{
                    background: isActive ? `${group.color}15` : 'rgba(255,255,255,0.025)',
                    border: `1px solid ${isActive ? group.color + '40' : 'rgba(255,255,255,0.07)'}`,
                  }}
                >
                  {/* Active left bar */}
                  <div
                    className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-300"
                    style={{
                      background: group.color,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                    }}
                  />
                  <span className="text-xl">{group.icon}</span>
                  <span
                    className="text-sm font-semibold font-heading transition-colors duration-300 whitespace-nowrap"
                    style={{ color: isActive ? group.color : 'rgba(229,231,235,0.55)' }}
                  >
                    {group.category}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 -z-10 rounded-xl"
                      style={{ background: `${group.color}08` }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* ── Right: Skill display ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl p-8 overflow-hidden min-h-[320px] flex flex-col"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Ambient glow in active color */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx + '-glow'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                style={{ background: active.color, opacity: 0.1 }}
              />
            </AnimatePresence>

            {/* Top accent line */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx + '-line'}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 right-0 h-[2px] origin-left rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${active.color}, transparent)` }}
              />
            </AnimatePresence>

            {/* Category header */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx + '-header'}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="mb-6 relative z-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{active.icon}</span>
                  <h3 className="font-heading font-bold text-2xl" style={{ color: active.color }}>
                    {active.category}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(229,231,235,0.5)' }}>
                  {active.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Skill pills — staggered re-entry */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-wrap gap-3 relative z-10"
              >
                {active.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="relative cursor-default px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 group"
                    style={{
                      background: `${active.color}14`,
                      border: `1px solid ${active.color}30`,
                      color: active.color,
                    }}
                  >
                    {/* Shine sweep on hover */}
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
                      style={{
                        background: `linear-gradient(105deg, transparent 40%, ${active.color}20 50%, transparent 60%)`,
                      }}
                    />
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Item count badge */}
            <div className="mt-auto pt-6 flex items-center gap-2 relative z-10">
              <div
                className="h-1 rounded-full flex-1"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <motion.div
                  key={activeIdx}
                  initial={{ width: 0 }}
                  animate={{ width: `${(active.items.length / 11) * 100}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${active.color}, ${active.color}60)` }}
                />
              </div>
              <span className="text-xs font-medium shrink-0" style={{ color: 'rgba(229,231,235,0.4)' }}>
                {active.items.length} skills
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
