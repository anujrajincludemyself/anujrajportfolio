import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Coffee, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10 px-4 mt-24 overflow-hidden">
      {/* Big background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-blue tracking-widest uppercase text-sm font-medium mb-4">Let's work together</p>
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
            Have a project? <br />
            <span className="text-gradient">Let's talk.</span>
          </h2>
          <motion.a
            href="mailto:anujraj24go@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent-blue text-white font-bold rounded-full text-lg transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            anujraj24go@gmail.com
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-gradient mb-1">Anuj Raj</h3>
            <p className="text-text/50 text-sm">Full Stack Developer · Kota, Rajasthan</p>
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="https://www.buymeacoffee.com/anujraj"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#FFDD00]/10 text-[#FFDD00] border border-[#FFDD00]/25 rounded-full hover:bg-[#FFDD00]/20 transition-colors font-medium text-sm"
            >
              <Coffee className="w-4 h-4" />
              Buy me a coffee
            </motion.a>

            {[
              { href: "mailto:anujraj24go@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
              { href: "https://github.com/anujrajincludemyself", icon: <Github className="w-5 h-5" />, label: "GitHub", external: true },
              { href: "https://www.linkedin.com/in/anujrajmish", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", external: true },
              { href: "https://leetcode.com/u/anujsolveproblem24242/", icon: <ExternalLink className="w-5 h-5" />, label: "LeetCode", external: true },
            ].map(({ href, icon, label, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                whileHover={{ scale: 1.15, y: -3 }}
                aria-label={label}
                className="p-3 bg-white/5 rounded-full hover:bg-white/15 transition-colors border border-white/10 hover:border-white/20"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text/40 text-xs">
          <p>© {new Date().getFullYear()} Anuj Raj. Crafted with ❤️ and a lot of ☕</p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex items-center gap-2 text-text/50 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
