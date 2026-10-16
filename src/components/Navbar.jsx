import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? 'bg-[#0D0D0F]/85 backdrop-blur-xl border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
              : 'bg-[#0D0D0F]/40 backdrop-blur-md border border-white/[0.05]'
          }`}
        >
          {/* Logo */}
          <a href="#" className="group relative block">
            <span className="text-xl font-bold tracking-tight font-heading">
              <span className="text-gradient">A</span>
              <span className="text-white">nuj</span>
              <span className="text-gradient"> Raj</span>
            </span>
            <div
              className="absolute -inset-2 -z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
              style={{ background: 'radial-gradient(circle, rgba(0,255,255,0.2) 0%, transparent 70%)' }}
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 block rounded-lg group"
                  style={{ color: active === item.label ? '#fff' : 'rgba(255,255,255,0.55)' }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active === item.label && (
                    <motion.div
                      layoutId="nav-active-bg"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {/* Cyan underline on hover */}
                  <span
                    className="absolute bottom-1 left-4 right-4 h-px rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: 'linear-gradient(to right, #00ffff, #0080ff)' }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00ffff, #0080ff)' }}
          >
            <Sparkles className="w-4 h-4" />
            Get in Touch
            <div
              className="absolute inset-0 -z-10 opacity-0 hover:opacity-100 blur-xl transition-opacity duration-300"
              style={{ background: 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%)' }}
            />
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 rounded-2xl bg-[#0D0D0F]/95 backdrop-blur-xl border border-white/[0.07] p-4"
            >
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => { setActive(item.label); setMenuOpen(false); }}
                      className="block px-4 py-2.5 text-sm rounded-lg transition-colors"
                      style={{ color: active === item.label ? '#00ffff' : 'rgba(255,255,255,0.65)', background: active === item.label ? 'rgba(0,255,255,0.08)' : 'transparent' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold text-black" style={{ background: 'linear-gradient(135deg, #00ffff, #0080ff)' }}>
                    <Sparkles className="w-4 h-4" /> Get in Touch
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
