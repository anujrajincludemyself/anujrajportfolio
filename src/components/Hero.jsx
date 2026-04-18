import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Background ambient elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[100px] -z-10 animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-green/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-4000" />

      <div className="w-full max-w-7xl z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-16 md:mt-0">
        
        {/* Left Content Area */}
        <motion.div 
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <Code2 className="text-accent-blue w-6 h-6" />
            <span className="font-heading text-accent-blue tracking-widest uppercase text-sm">Full Stack Developer</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-gradient">Anuj Raj.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text/70 max-w-xl mb-10 leading-relaxed"
          >
            I build high-performance, cross-platform applications and scalable backend systems.
            Passionate about AI, distributed systems, and crafting best-in-class user experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a 
              href="#projects"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Projects
            </a>
            <a href="mailto:anujraj24go@gmail.com" className="p-4 glass-panel rounded-full hover:bg-white/10 transition-colors group">
              <Mail className="w-5 h-5 group-hover:text-accent-orange transition-colors" />
            </a>
            <a href="https://github.com/anujrajincludemyself" target="_blank" rel="noreferrer" className="p-4 glass-panel rounded-full hover:bg-white/10 transition-colors group">
              <Github className="w-5 h-5 group-hover:text-accent-green transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/anujrajmish" target="_blank" rel="noreferrer" className="p-4 glass-panel rounded-full hover:bg-white/10 transition-colors group">
              <Linkedin className="w-5 h-5 group-hover:text-accent-blue transition-colors" />
            </a>
            <a href="https://leetcode.com/u/anujsolveproblem24242/" target="_blank" rel="noreferrer" className="p-4 glass-panel rounded-full hover:bg-white/10 transition-colors group">
              <ExternalLink className="w-5 h-5 group-hover:text-accent-red transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image Area */}
        <motion.div
          className="flex-1 w-full max-w-xs sm:max-w-sm mx-auto md:mr-0 relative mt-10 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          {/* Decorative background behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue to-accent-green rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          
          <div className="relative glass-panel p-2 rounded-3xl border border-white/10 overflow-hidden transform hover:-rotate-1 hover:scale-[1.02] transition-all duration-500 w-full max-w-[300px]">
            <img 
              src="/profile.jpg" 
              alt="Anuj Raj" 
              className="w-full h-auto object-cover rounded-2xl aspect-[4/5] sm:aspect-square md:aspect-[4/5] grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Optional overlay gradient for the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11]/80 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
