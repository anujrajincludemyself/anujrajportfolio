import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const experiences = [
  {
    role: '.NET Developer Intern',
    badge: 'AI / ML',
    company: 'ColorJet India Ltd',
    duration: 'May 2026 – Aug 2026',
    color: '#9B4F96',
    emoji: '🏭',
    points: [
      'Developed the frontend and backend of ColorJet\'s RIP software end-to-end in C#/.NET, owning full feature delivery for an industrial fabric-printing workflow.',
      'Integrated Ollama into the RIP software via C#/.NET and C++ to run local LLMs inside the application; fine-tuned LLMs using Unsloth for domain-specific tasks.',
      'Solved geometric distortion correction for deformed fabric prints; benchmarked 7 model architectures before finalising a two-model pipeline (nnUNet + U-Net Regressor) with accurate deformation vector-field predictions.',
    ],
  },
  {
    role: 'SDE Intern',
    badge: 'Full Stack',
    company: 'MediHut',
    duration: 'Jan 2026 – May 2026',
    color: '#00ffff',
    emoji: '🏥',
    points: [
      'Engineered cross-platform Rider Delivery App (React Native, Node.js, Prisma, PostgreSQL, Redis) with live dispatch & GPS tracking; cut dispatch latency ~35% via Redis caching + mutex locking.',
      'Built Pharmacy Console CRM serving 2+ live pharmacies; reduced API payloads ~75% (~120KB → <30KB) via field projection and lazy pagination — 50% performance gain.',
    ],
  },
  {
    role: 'Full Stack Intern',
    badge: 'SaaS',
    company: 'Jesty CRM',
    duration: 'Dec 2025 – Jan 2026',
    color: '#F97316',
    emoji: '💼',
    points: [
      'Developed React.js components with REST APIs; optimised Node.js/MongoDB backend for a SaaS CRM platform.',
      'Accelerated lead-management workflows by 25% via query optimisation and improved rendering performance.',
    ],
  },
  {
    role: 'Research Intern',
    badge: 'Research',
    company: 'IIT Patna',
    duration: 'Jun 2025 – Jul 2025',
    color: '#22C55E',
    emoji: '🎓',
    points: [
      'Built a multi-constraint exam seating allocator (Python, Streamlit) handling sparse/dense fill modes, per-room buffer capacity, and building-adjacency optimisation; deployed live.',
      'Engineered automated clash detection via roll-number set intersections across exam slots.',
    ],
  },
];

// Individual card with mouse-follow spotlight glow
const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-500 group"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${isHovered ? exp.color + '35' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: isHovered ? `0 24px 60px ${exp.color}15` : 'none',
      }}
    >
      {/* Mouse-follow spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) =>
              `radial-gradient(300px circle at ${x}px ${y}px, ${exp.color}12, transparent 70%)`
          ),
        }}
      />

      {/* Top color bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, ${exp.color}, ${exp.color}40, transparent)` }}
      />

      <div className="p-7 md:p-8 relative z-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            {/* Company emoji in colored circle */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: `${exp.color}18`, border: `1px solid ${exp.color}30` }}
            >
              {exp.emoji}
            </motion.div>

            <div>
              {/* Role + badge */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-heading font-bold text-white text-lg leading-tight">{exp.role}</h3>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}35` }}
                >
                  {exp.badge}
                </span>
              </div>
              {/* Company */}
              <p className="font-semibold text-base" style={{ color: exp.color }}>{exp.company}</p>
            </div>
          </div>

          {/* Duration chip */}
          <span
            className="text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap shrink-0 self-start sm:self-center"
            style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}25` }}
          >
            {exp.duration}
          </span>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-5 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, ${exp.color}30, transparent)`,
            opacity: isHovered ? 1 : 0.4,
          }}
        />

        {/* Bullet points */}
        <ul className="space-y-3">
          {exp.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 + i * 0.08 }}
              className="flex gap-3 text-sm leading-relaxed"
              style={{ color: 'rgba(229,231,235,0.68)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-[0.44rem] shrink-0 transition-all duration-300"
                style={{
                  background: exp.color,
                  boxShadow: isHovered ? `0 0 6px ${exp.color}` : 'none',
                }}
              />
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" className="relative py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="text-sm font-medium uppercase tracking-widest mb-3 block" style={{ color: '#00ffff' }}>
          Career
        </span>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-heading font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff' }}>
            Professional <span className="text-gradient">Experience</span>
          </h2>
          {/* Journey indicator */}
          <div className="flex items-center gap-2 mb-1">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}80` }}
              />
            ))}
            <span className="text-xs ml-1" style={{ color: 'rgba(229,231,235,0.35)' }}>4 roles</span>
          </div>
        </div>
      </motion.div>

      {/* Cards — 2-col on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>

    </div>
  </section>
);

export default Experience;
