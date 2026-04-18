import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-2xl
        ${scrolled ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'bg-transparent'}
      `}
      style={{ width: 'min(720px, 96vw)' }}
    >
      <nav className="flex items-center justify-between px-6 py-3">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="font-heading font-bold text-lg text-gradient"
        >
          AR.
        </motion.a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-xl transition-colors duration-300
                  ${active === item.label ? 'text-white' : 'text-text/60 hover:text-white'}`}
              >
                {active === item.label && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="mailto:anujraj24go@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-4 py-1.5 text-sm font-semibold bg-accent-blue/20 border border-accent-blue/40 text-accent-blue rounded-xl hover:bg-accent-blue/30 transition-colors"
        >
          Hire Me
        </motion.a>

        <button
          className="md:hidden p-2 text-white/70 flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-5 h-0.5 bg-white origin-center transition-all" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-0.5 bg-white" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-5 h-0.5 bg-white origin-center transition-all" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <ul className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => { setActive(item.label); setMenuOpen(false); }}
                    className="block px-4 py-2 text-sm text-text/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
