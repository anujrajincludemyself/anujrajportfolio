import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Trophy } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'TASDEEQ',
    subtitle: 'AI Fake News Detection',
    description:
      'Full-stack AI platform detecting fake news in text and video using FastAPI, Express, TF-IDF vectorisation, and video forensics ML models. Ranked Top 15 of 100+ teams at ReKon Hackathon. Implemented JWT authentication and a multi-provider NLP fallback so verdicts stay available if one provider fails.',
    tech: ['FastAPI', 'Express', 'React', 'TF-IDF', 'JWT', 'ML'],
    github: 'https://github.com/anujrajincludemyself/fake-news-detection',
    live: 'https://fake-news-detection-seven-delta.vercel.app/',
    accent: '#00ffff',
    status: 'Active',
    badge: '🏆 Top 15 / 100+ Teams',
    featured: true,
  },
  {
    number: '02',
    title: 'Khilao',
    subtitle: 'AI Recipe Sharing Platform',
    description:
      'Full-stack recipe platform (React 19, Vite, Node.js, Express, MongoDB) with JWT auth, Cloudinary CDN image uploads, and community recipe browsing. Integrated AI for on-demand recipe generation with private per-user history; reduced bundle size by 48% via code splitting and cut DB query time by 30–50% via indexing.',
    tech: ['React 19', 'Vite', 'Node.js', 'Express', 'MongoDB', 'AI'],
    github: 'https://github.com/anujrajincludemyself',
    live: 'https://khilao-com.vercel.app',
    accent: '#22C55E',
    status: 'Live',
    featured: true,
  },
  {
    number: '03',
    title: 'NPCL Website',
    subtitle: 'Freelance · Company Website',
    description:
      'Delivered a production-ready, SEO-optimised company website using Next.js and TypeScript. Achieved high Core Web Vitals scores with a scalable component architecture — fully client-handed.',
    tech: ['Next.js', 'TypeScript', 'SEO', 'Core Web Vitals'],
    live: '#',
    accent: '#3178C6',
    status: 'Shipped',
    featured: false,
  },
  {
    number: '04',
    title: 'Adobe Hackathon Solution',
    subtitle: 'AI Brand Visibility · Rank 12 / 3,00,000+',
    description:
      'Composable multi-skill AI solution and interactive prototype for brand-visibility insights. Cleared four rounds: assessment, brand-visibility case study, development, and prototype. Finals pending.',
    tech: ['AI', 'Multi-skill Agent', 'Prototype', 'Brand Analytics'],
    accent: '#EE4C2C',
    status: 'Finals',
    badge: '🏆 12th / 3,00,000+',
    featured: false,
  },
];

const hackathons = [
  { name: 'Adobe Hackathon 2026', result: '12th / 3,00,000+', color: '#EE4C2C', note: 'Finals pending — 4 rounds cleared' },
  { name: 'Amazon ML Challenge 2025', result: '79% accuracy', color: '#F97316', note: 'Product entity-value extraction' },
  { name: 'HackCrux 2025', result: 'Top 20 / 200+ teams', color: '#A78BFA', note: 'AI Digital Twin — real-time simulation' },
  { name: 'ReKon Hackathon', result: 'Top 15 / 100+ teams', color: '#00ffff', note: 'TASDEEQ AI fake-news platform' },
];

const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay: index * 0.15 }}
    className="group relative overflow-hidden rounded-2xl border transition-colors duration-500"
    style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
  >
    <div
      className="pointer-events-none absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
      style={{ boxShadow: `inset 0 0 0 1px ${project.accent}30` }}
    />

    <div className="grid lg:grid-cols-2">
      {/* Decorative panel */}
      <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[360px]">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.accent}08 0%, transparent 60%)` }} />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${project.number}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${project.number})`} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm"
            style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
          >
            <ExternalLink className="h-6 w-6" style={{ color: `${project.accent}80` }} />
          </div>
        </div>
        <div className="absolute bottom-6 left-8">
          <span
            className="font-heading font-bold leading-none select-none"
            style={{ fontSize: '7rem', color: 'rgba(255,255,255,0.04)' }}
            aria-hidden="true"
          >
            {project.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 lg:p-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border"
            style={{ borderColor: `${project.accent}40`, color: project.accent, background: `${project.accent}10` }}
          >
            Featured
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border"
            style={{ borderColor: '#22C55E40', color: '#4ADE80', background: '#22C55E10' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            {project.status}
          </span>
          {project.badge && (
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{ background: 'rgba(255,213,79,0.1)', color: '#FFD54F', border: '1px solid rgba(255,213,79,0.25)' }}
            >
              {project.badge}
            </span>
          )}
        </div>

        <h3
          className="font-heading font-bold tracking-tight mb-2 transition-colors duration-300 group-hover:text-[#00ffff]"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: '#fff' }}
        >
          {project.title}
        </h3>
        <p className="text-sm font-medium mb-4" style={{ color: project.accent }}>{project.subtitle}</p>
        <p className="leading-relaxed mb-6" style={{ color: 'rgba(229,231,235,0.6)', fontSize: '0.93rem' }}>
          {project.description}
        </p>

        <div className="relative z-20 flex flex-wrap gap-2 mb-7">
          {project.tech.map((t) => (
            <span
              key={t}
              className="flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm"
              style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.04)', color: 'rgba(229,231,235,0.7)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative z-20 flex items-center gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.65)' }}>
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:brightness-110"
              style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}30` }}>
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const SmallCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
    className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-500"
    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
  >
    <div
      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-30 group-hover:opacity-80 transition-opacity duration-500"
      style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
    />
    <span
      className="absolute bottom-4 right-6 font-heading font-bold leading-none select-none"
      style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.03)' }}
    >
      {project.number}
    </span>

    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-[#00ffff] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm font-medium" style={{ color: project.accent }}>{project.subtitle}</p>
        </div>
        <div className="flex gap-2 ml-4 shrink-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <Github className="w-5 h-5 hover:text-white" />
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <ArrowUpRight className="w-5 h-5 hover:text-white" />
            </a>
          )}
        </div>
      </div>

      {project.badge && (
        <span
          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mb-3"
          style={{ background: 'rgba(255,213,79,0.1)', color: '#FFD54F', border: '1px solid rgba(255,213,79,0.25)' }}
        >
          {project.badge}
        </span>
      )}

      <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(229,231,235,0.55)' }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: `${project.accent}12`, color: project.accent, border: `1px solid ${project.accent}25` }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Projects header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="text-sm font-medium uppercase tracking-widest mb-3 block" style={{ color: '#00ffff' }}>
              Portfolio
            </span>
            <h2 className="font-heading font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff' }}>
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>
          <a href="https://github.com/anujrajincludemyself" target="_blank" rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-sm transition-colors group" style={{ color: 'rgba(255,255,255,0.5)' }}>
            View all on GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Featured large cards */}
        <div className="space-y-6 mb-10">
          {featured.map((p, i) => <FeaturedCard key={p.number} project={p} index={i} />)}
        </div>

        {/* Smaller cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {rest.map((p, i) => <SmallCard key={p.number} project={p} index={i} />)}
        </div>

        {/* ── Hackathons ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-sm font-medium uppercase tracking-widest mb-3 block" style={{ color: '#00ffff' }}>
            Competitive
          </span>
          <h2 className="font-heading font-bold leading-tight mb-10" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff' }}>
            Hackathon <span className="text-gradient">Highlights</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hackathons.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-400"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(90deg, transparent, ${h.color}, transparent)` }}
                />
                {/* Glow */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-3xl pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-400"
                  style={{ background: h.color }}
                />

                <Trophy className="w-5 h-5 mb-4" style={{ color: h.color }} />
                <h4 className="font-heading font-bold text-sm text-white mb-1 leading-snug">{h.name}</h4>
                <p
                  className="font-bold text-lg font-heading mb-2"
                  style={{ color: h.color }}
                >
                  {h.result}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(229,231,235,0.5)' }}>
                  {h.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
