import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Code, Award, ExternalLink } from 'lucide-react';

const Extras = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Beyond <span className="text-accent-red">Code</span>
        </h2>
        <div className="h-1 w-20 bg-accent-red rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Education Span 2 columns */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass-panel p-8 rounded-3xl border border-white/5 md:col-span-2 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <GraduationCap className="w-32 h-32 text-accent-blue" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-heading font-bold mb-2">Rajasthan Technical University</h3>
            <p className="text-accent-blue font-medium mb-4">B.Tech in Information Technology • 2023 - Present</p>
            <div className="inline-block px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-lg w-max">
              <span className="text-lg font-bold text-white">8.6 CGPA</span>
              <span className="text-white/60 text-sm ml-2">Maintained across 6 semesters</span>
            </div>
          </div>
        </motion.div>

        {/* Hackathons 1 column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Code className="w-24 h-24 text-accent-orange" />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-heading font-bold mb-4 text-accent-orange">Hackathons</h3>
            <ul className="space-y-4">
              <li>
                <strong className="block text-white">Amazon ML Challenge '25</strong>
                <span className="text-sm text-text/70">79% accuracy on entity extraction</span>
              </li>
              <li>
                <strong className="block text-white">HackCrux '25</strong>
                <span className="text-sm text-text/70">Top 20 of 200+ teams (AI Digital Twin)</span>
              </li>
              <li>
                <strong className="block text-white">ReKon Hackathon</strong>
                <span className="text-sm text-text/70">Top 15 of 100+ teams (Tasdeeq AI)</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Freelance 1 column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-xl font-heading font-bold mb-2 text-accent-green">Freelance</h3>
            <strong className="text-lg mb-2">NPCL Company Website</strong>
            <p className="text-sm text-text/70 mb-4 flex-grow">
              Production-ready, SEO-optimised company website using Next.js and TypeScript.
            </p>
            <a href="https://www.ncplorg.com/" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-accent-green hover:text-white transition-colors">
              Visit Live Site <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>

        {/* Achievements Span 2 columns */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-8 rounded-3xl border border-white/5 md:col-span-2 relative overflow-hidden group"
        >
          <div className="absolute top-1/2 -translate-y-1/2 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <Trophy className="w-40 h-40 text-accent-red" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-heading font-bold mb-6 text-accent-red">Key Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-accent-red shrink-0"><Award className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">3 Production Systems</h4>
                  <p className="text-sm text-text/70">Shipped and maintained systems actively used by real world businesses.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-accent-red shrink-0"><Code className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">150+ LeetCode</h4>
                  <p className="text-sm text-text/70">Consistent problem solver across DSA and system-design patterns.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start sm:col-span-2">
                <div className="p-3 bg-white/5 rounded-xl text-accent-red shrink-0"><GraduationCap className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Android & Kotlin Masterclass</h4>
                  <p className="text-sm text-text/70">Built and shipped production-ready robust mobile applications.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Extras;
