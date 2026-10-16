import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ArrowDown, Trophy } from 'lucide-react';

// Inline SVG icons for tech stacks (coloured)
const techStack = [
  {
    name: 'C# / .NET',
    color: '#9B4F96',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0L1.75 6v12L12 24l10.25-6V6zm-.99 4.285l.99-.57.99.57V7.43l-.99.57-.99-.57zm0 6l.99-.57.99.57v3.143l-.99.57-.99-.57zM4.5 7.43l.99-.57.99.57v3.143l-.99.57-.99-.57zm0 6l.99-.57.99.57v3.143l-.99.57-.99-.57zm14.01 0l.99-.57.99.57v3.143l-.99.57-.99-.57zm0-6l.99-.57.99.57v3.143l-.99.57-.99-.57z"/>
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078C12.643 23.916 12.324 24 11.998 24z"/>
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#3776AB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
  },
  {
    name: 'PyTorch',
    color: '#EE4C2C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.005 0L4.952 7.053a9.865 9.865 0 0 0 0 13.99 9.866 9.866 0 0 0 13.99 0 9.865 9.865 0 0 0 0-13.99zm0 2.36l5.91 5.908a8.355 8.355 0 0 1 0 11.81 8.356 8.356 0 0 1-11.82 0 8.355 8.355 0 0 1 0-11.81zM15.54 5.31a1.17 1.17 0 0 0-1.17 1.17 1.17 1.17 0 0 0 1.17 1.17 1.17 1.17 0 0 0 1.17-1.17 1.17 1.17 0 0 0-1.17-1.17z"/>
      </svg>
    ),
  },
];

const Hero = () => {
  const nameChars = 'Anuj Raj.'.split('');

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Noise overlay */}
      <div className="noise absolute inset-0 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 animate-blob"
        style={{ background: 'radial-gradient(circle, rgba(0,255,255,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"
        style={{ background: 'radial-gradient(circle, rgba(0,128,255,0.10) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] -z-10 animate-blob animation-delay-4000"
        style={{ background: 'radial-gradient(circle, rgba(155,79,150,0.08) 0%, transparent 70%)' }} />

      <div className="relative mx-auto max-w-7xl px-6 py-28 w-full">
        <div className="max-w-5xl">

          {/* Availability badge + Adobe achievement */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm"
              style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-white/70">Open to opportunities</span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm"
              style={{ borderColor: 'rgba(255,213,79,0.3)', background: 'rgba(255,213,79,0.06)', color: '#FFD54F' }}
            >
              <Trophy className="w-3.5 h-3.5" />
              Adobe Hackathon — 12th / 3,00,000+
            </motion.span>
          </div>

          {/* Big heading */}
          <h1 className="font-heading font-bold leading-none mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="inline-block text-white"
            >
              Hi, I'm
            </motion.span>
            <br />
            <span className="text-gradient inline-block">
              {nameChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.06, type: 'spring', stiffness: 100 }}
                  className={char === ' ' ? 'inline-block w-6 md:w-10' : 'inline-block'}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Bio — updated to match resume */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-6 text-lg md:text-xl max-w-3xl leading-relaxed"
            style={{ color: 'rgba(229,231,235,0.65)' }}
          >
            B.Tech IT @ RTU · Full-stack &{' '}
            <span className="font-semibold" style={{ color: '#9B4F96' }}>.NET developer</span> with production experience in{' '}
            <span className="font-semibold" style={{ color: '#00ffff' }}>C# / .NET</span>,{' '}
            <span className="font-semibold" style={{ color: '#61DAFB' }}>React</span>, &{' '}
            <span className="font-semibold" style={{ color: '#3776AB' }}>Python</span>. I integrate{' '}
            <span className="font-semibold" style={{ color: '#EE4C2C' }}>LLMs & deep learning</span>{' '}
            into industrial workflows and build products people actually ship.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {techStack.map((tech, idx) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 2.2 + idx * 0.07 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="group relative cursor-default flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                <span style={{ color: tech.color }} className="transition-colors duration-300">
                  {tech.icon}
                </span>
                <span className="transition-colors duration-300 group-hover:text-white">{tech.name}</span>
                <span
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-md group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="relative group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-black overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #00ffff, #0080ff)' }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="https://github.com/anujrajincludemyself"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>

            <div className="flex items-center gap-3">
              {[
                { href: 'https://www.linkedin.com/in/anujrajmish', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                { href: 'mailto:anujraj24go@gmail.com', icon: <Mail className="w-5 h-5" />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="p-3 rounded-full transition-all duration-300 group"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.6)' }}
                >
                  <span className="group-hover:text-white transition-colors duration-300">{icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
