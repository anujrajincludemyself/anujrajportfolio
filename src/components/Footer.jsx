import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowUp, Sparkles, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative border-t pt-24 pb-10 px-6 mt-16 overflow-hidden"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-sm font-medium tracking-widest uppercase mb-5"
            style={{ color: '#00ffff' }}
          >
            Let's work together
          </p>
          <h2
            className="font-heading font-black mb-10 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', color: '#fff' }}
          >
            Have a project?{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient">Let's talk.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:anujraj24go@gmail.com"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-black font-bold text-base relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #00ffff, #0080ff)' }}
            >
              <Sparkles className="w-5 h-5" />
              anujraj24go@gmail.com
            </motion.a>

            <motion.a
              href="tel:+919199455366"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <Phone className="w-5 h-5" />
              +91 9199 455 366
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mb-10"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-gradient mb-1">Anuj Raj</h3>
            <p className="text-sm" style={{ color: 'rgba(229,231,235,0.45)' }}>
              Full Stack &amp; .NET Developer · Kota, Rajasthan
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(229,231,235,0.3)' }}>
              B.Tech IT · Rajasthan Technical University · 2023–2027
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: 'mailto:anujraj24go@gmail.com', icon: <Mail className="w-5 h-5" />, label: 'Email' },
              { href: 'https://github.com/anujrajincludemyself', icon: <Github className="w-5 h-5" />, label: 'GitHub', external: true },
              { href: 'https://www.linkedin.com/in/anujrajmish', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', external: true },
              { href: 'https://leetcode.com/u/anujsolveproblem24242/', icon: <ExternalLink className="w-5 h-5" />, label: 'LeetCode', external: true },
            ].map(({ href, icon, label, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                whileHover={{ scale: 1.15, y: -3 }}
                aria-label={label}
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'rgba(229,231,235,0.6)',
                }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ color: 'rgba(229,231,235,0.35)' }}
        >
          <p>© {new Date().getFullYear()} Anuj Raj. Crafted with ❤️ and a lot of ☕</p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <ArrowUp className="w-4 h-4" /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
