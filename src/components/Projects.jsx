import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "TASDEEQ",
    subtitle: "AI Fake News Detection",
    description: "Full-stack AI platform detecting fake news in text and video using FastAPI, Express, TF-IDF vectorisation, and video forensics ML models. Ranked Top 15/100+.",
    tech: ["FastAPI", "Express", "React", "ML", "JWT"],
    github: "https://github.com/anujrajincludemyself/fake-news-detection",
    live: "https://fake-news-detection-seven-delta.vercel.app/",
    color: "group-hover:border-accent-blue"
  },
  {
    title: "Bihavo Foods",
    subtitle: "Full-Stack E-commerce",
    description: "Production-ready food commerce platform with customer and admin portals. Built secure APIs with JWT auth, Google OAuth, and real-time order tracking via Socket.IO.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Socket.IO"],
    live: "https://bihavo.vercel.app/",
    color: "group-hover:border-accent-orange"
  },
  {
    title: "Khilao",
    subtitle: "AI Recipe Sharing Platform",
    description: "Built a full-stack recipe platform with AI for on-demand recipe generation. Optimised bundle by 48% and cut DB query time by 30-50% via indexing.",
    tech: ["React 19", "Vite", "Node.js", "Express", "AI"],
    github: "https://github.com/anujrajincludemyself",
    live: "https://khilao-com.vercel.app",
    color: "group-hover:border-accent-green"
  },
  {
    title: "TruthLens",
    subtitle: "Chrome Extension",
    description: "Shipped a Chrome extension detecting misinformation, bias, and clickbait in real-time with multi-provider AI fallback and inline content highlighting.",
    tech: ["JavaScript", "Chrome API", "AI Fallback"],
    github: "https://github.com/anujrajincludemyself/fake-news-detection",
    color: "group-hover:border-accent-red"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Featured <span className="text-accent-orange">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-accent-orange rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative glass-panel p-8 rounded-3xl border border-white/5 transition-all duration-500 hover:-translate-y-2 ${project.color} overflow-hidden`}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm font-medium">{project.subtitle}</p>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-text/70 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/80 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
