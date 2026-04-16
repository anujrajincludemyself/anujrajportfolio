import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './index.css';

function App() {
  const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1RNn1AMplo79xbv8-4TQmTEO2aSvLVj5y';

  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('resume-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return 'dark';
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('resume-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('anujraj24go@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemHoverProps = {
    whileHover: { 
      scale: 1.015, 
      x: 4,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  return (
    <>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      
      <main className="resume-shell">
        <div className="ambient-layer" aria-hidden="true">
          <span className="orb orb-a"></span>
          <span className="orb orb-b"></span>
          <span className="orb orb-c"></span>
          <span className="particle p1"></span>
          <span className="particle p2"></span>
          <span className="particle p3"></span>
          <span className="particle p4"></span>
          <span className="particle p5"></span>
          <span className="particle p6"></span>
        </div>

        <motion.article 
          className="resume-paper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.header className="resume-header" variants={headerVariants}>
            <p className="status-pill">Open to SDE and Full Stack opportunities</p>
            <h1>ANUJ RAJ</h1>
            <p className="role">Software Engineer</p>
            <div className="meta-badges">
              <span>3 Production Systems</span>
              <span>Top 15 / 100+ ReKon</span>
              <span>8.6 CGPA</span>
              <span>150+ LeetCode</span>
            </div>
            <div className="resume-actions">
              <button type="button" className="action-btn action-btn-theme" onClick={toggleTheme}>
                {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
              </button>
              <a className="action-btn action-btn-download" href={resumeDownloadUrl} target="_blank" rel="noreferrer" download>
                Download Resume
              </a>
            </div>
            <p className="contact-line">
              <a href="mailto:anujraj24go@gmail.com" onClick={handleCopyEmail} className="copy-email-link">
                {copied ? 'Copied to clipboard! ✓' : 'anujraj24go@gmail.com'}
              </a>
              <span>|</span>
              <a href="tel:+919199453566">+91-9199455366</a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/anujrajmish" target="_blank" rel="noreferrer">LinkedIn</a>
              <span>|</span>
              <a href="https://github.com/anujrajincludemyself" target="_blank" rel="noreferrer">GitHub</a>
              <span>|</span>
              <a href="https://anujraj.me" target="_blank" rel="noreferrer">Portfolio</a>
              <span>|</span>
              <a href="https://leetcode.com/u/anujsolveproblem24242/" target="_blank" rel="noreferrer">LeetCode</a>
            </p>
          </motion.header>

          <section className="resume-grid">
            <div className="resume-column resume-column-left">
              <motion.section 
                className="resume-section"
                variants={sectionVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileInView="visible"
                initial="hidden"
              >
                <h2>Experience</h2>

                <motion.article className="resume-item" {...itemHoverProps}>
                  <div className="item-heading">
                    <h3>Software Development Engineer (SDE) Intern</h3>
                    <span>Jan 2026 - Present</span>
                  </div>
                  <div className="item-subheading project-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.06rem 0 0.18rem' }}>
                    <span>MediHut</span>
                    <p>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://www.medihut.in/" target="_blank" rel="noreferrer">Website</motion.a>
                    </p>
                  </div>
                  <ul>
                    <li>Engineered a cross-platform Rider Delivery App (React Native, Node.js, Prisma, PostgreSQL, Redis) with live dispatch and GPS tracking; cut dispatch latency by ~35% via Redis caching and row-level mutex locking.</li>
                    <li>Built Pharmacy Console CRM serving 2+ live pharmacies with real-time inventory, order intake, and prescription workflows; achieved 50% performance gain by reducing API response payloads from ~120KB to under 30KB with field projection, removal of nested redundant objects, and lazy pagination.</li>
                    <li>Shipped a responsive pharmacy website (React.js, TypeScript) with 40% load improvement and built a full admin panel for riders, orders, and inventory.</li>
                  </ul>
                </motion.article>

                <motion.article className="resume-item" {...itemHoverProps}>
                  <div className="item-heading">
                    <h3>Full Stack Developer Intern</h3>
                    <span>Dec 2025 - Jan 2026</span>
                  </div>
                  <div className="item-subheading project-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.06rem 0 0.18rem' }}>
                    <span>Jesty CRM</span>
                    <p>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://jestycrm.com/" target="_blank" rel="noreferrer">Website</motion.a>
                    </p>
                  </div>
                  <ul>
                    <li>Developed React.js components with REST APIs and optimized Node.js/MongoDB backend workflows for a SaaS CRM platform.</li>
                    <li>Accelerated lead-management workflows by 25% through query optimization and rendering improvements.</li>
                  </ul>
                </motion.article>

                <motion.article className="resume-item" {...itemHoverProps}>
                  <div className="item-heading">
                    <h3>Research Intern</h3>
                    <span>Jun 2025 - Jul 2025</span>
                  </div>
                  <p className="item-subheading">IIT Patna (under Prof. Mayank Agarwal, Dept. of CSE)</p>
                  <ul>
                    <li>Built a multi-constraint exam seating allocator (Python, Streamlit) handling sparse/dense fill modes, per-room buffer capacity, and building-adjacency optimization to minimize faculty movement; deployed live on Streamlit.</li>
                    <li>Engineered automated clash detection via roll-number set intersections and produced structured Excel outputs (overall_seating + seats_left) with full try/catch recovery and Python logging to errors.txt.</li>
                  </ul>
                </motion.article>
              </motion.section>

              <motion.section 
                className="resume-section"
                variants={sectionVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileInView="visible"
                initial="hidden"
              >
                <h2>Projects</h2>

                <motion.article className="resume-item" {...itemHoverProps}>
                  <div className="item-heading project-heading">
                    <h3>TASDEEQ - AI Fake News Detection</h3>
                    <p>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://github.com/anujrajincludemyself/fake-news-detection" target="_blank" rel="noreferrer">GitHub</motion.a>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://fake-news-detection-seven-delta.vercel.app/" target="_blank" rel="noreferrer">Live</motion.a>
                    </p>
                  </div>
                  <ul>
                    <li>Built a full-stack AI platform detecting fake news in text and video using FastAPI, Express, TF-IDF vectorization, and video-forensics ML models; ranked Top 15 of 100+ teams at ReKon Hackathon.</li>
                    <li>Implemented JWT authentication, multi-provider NLP fallback, and an interactive analytics dashboard for confidence reporting.</li>
                  </ul>
                </motion.article>

                <motion.article className="resume-item" {...itemHoverProps}>
                  <div className="item-heading project-heading">
                    <h3>Bihavo Foods - Full-Stack E-commerce Platform</h3>
                    <p>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://bihavo.vercel.app/" target="_blank" rel="noreferrer">Live</motion.a>
                    </p>
                  </div>
                  <ul>
                    <li>Developed a production-ready food commerce platform with customer and admin portals using React, Vite, Next.js, Node.js, Express, and MongoDB.</li>
                    <li>Built secure APIs with JWT auth and Google OAuth; added real-time order tracking via Socket.IO; deployed on Vercel and Render with environment-based configuration.</li>
                  </ul>
                </motion.article>

                <motion.article className="resume-item" {...itemHoverProps}>
                  <div className="item-heading project-heading">
                    <h3>Khilao - AI Recipe Sharing Platform</h3>
                    <p>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://github.com/anujrajincludemyself" target="_blank" rel="noreferrer">GitHub</motion.a>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://khilao-com.vercel.app" target="_blank" rel="noreferrer">Live</motion.a>
                    </p>
                  </div>
                  <ul>
                    <li>Built a full-stack recipe platform (React 19, Vite, Node.js, Express, MongoDB) with JWT auth, Cloudinary CDN image uploads, and community recipe browsing; deployed on Vercel and Render.</li>
                    <li>Integrated AI for on-demand recipe generation with private per-user history; optimized bundle by 48% via code splitting and cut DB query time by 30-50% via indexing.</li>
                  </ul>
                </motion.article>

                <motion.article className="resume-item" {...itemHoverProps}>
                  <div className="item-heading project-heading">
                    <h3>TruthLens - Chrome Extension</h3>
                    <p>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://github.com/anujrajincludemyself/fake-news-detection" target="_blank" rel="noreferrer">GitHub</motion.a>
                    </p>
                  </div>
                  <ul>
                    <li>Shipped a Chrome extension detecting misinformation, bias, and clickbait in real-time with multi-provider AI fallback and inline content highlighting for seamless in-browser fact-checking.</li>
                  </ul>
                </motion.article>
              </motion.section>
            </div>

            <div className="resume-column resume-column-right">
              <motion.section 
                className="resume-section"
                variants={sectionVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileInView="visible"
                initial="hidden"
              >
                <h2>Education</h2>
                <motion.article className="resume-item compact-item" {...itemHoverProps}>
                  <div className="item-heading">
                    <h3>Rajasthan Technical University</h3>
                    <span>2023 - Present</span>
                  </div>
                  <p>B.Tech in Information Technology</p>
                  <p>CGPA: <strong>8.6</strong> (maintained across all 6 semesters)</p>
                </motion.article>
              </motion.section>

              <motion.section 
                className="resume-section"
                variants={sectionVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileInView="visible"
                initial="hidden"
              >
                <h2>Skills</h2>
                <motion.article className="resume-item compact-item skills-grid" {...itemHoverProps}>
                  <p><strong>Languages:</strong> C++, Python, JavaScript, TypeScript, Kotlin</p>
                  <p><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, React Native</p>
                  <p><strong>Backend:</strong> Node.js, Express.js, Prisma ORM, Socket.IO</p>
                  <p><strong>Databases:</strong> MongoDB, PostgreSQL, Redis, Firebase</p>
                  <p><strong>Tools:</strong> Git, Postman, Swagger, Mapbox, MSG91, Figma</p>
                  <p><strong>Core:</strong> DSA, System Design, DBMS, OOP, OS, CN</p>
                </motion.article>
              </motion.section>

              <motion.section 
                className="resume-section"
                variants={sectionVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileInView="visible"
                initial="hidden"
              >
                <h2>Hackathons</h2>
                <motion.article className="resume-item compact-item" {...itemHoverProps}>
                  <h3>Amazon ML Challenge 2025</h3>
                  <p>Achieved 79% accuracy on product entity-value extraction, placing competitively among thousands of national university participants.</p>
                </motion.article>
                <motion.article className="resume-item compact-item" {...itemHoverProps}>
                  <h3>HackCrux 2025</h3>
                  <p>Secured Top 20 of 200+ teams for an AI Digital Twin solution with real-time simulation capabilities.</p>
                </motion.article>
                <motion.article className="resume-item compact-item" {...itemHoverProps}>
                  <h3>ReKon Hackathon</h3>
                  <p>Ranked Top 15 of 100+ teams with Tasdeeq AI, a real-time fake content detection platform.</p>
                </motion.article>
              </motion.section>

              <motion.section 
                className="resume-section"
                variants={sectionVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileInView="visible"
                initial="hidden"
              >
                <h2>Freelance</h2>
                <motion.article className="resume-item compact-item" {...itemHoverProps}>
                  <div className="item-heading project-heading">
                    <h3>NPCL - Company Website</h3>
                    <p>
                      <motion.a whileHover={{ scale: 1.05 }} href="https://www.ncplorg.com/" target="_blank" rel="noreferrer">Live</motion.a>
                    </p>
                  </div>
                  <p>Delivered a production-ready, SEO-optimized company website using Next.js and TypeScript with strong Core Web Vitals and scalable component architecture.</p>
                </motion.article>
              </motion.section>

              <motion.section 
                className="resume-section"
                variants={sectionVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileInView="visible"
                initial="hidden"
              >
                <h2>Achievements</h2>
                <motion.article className="resume-item compact-item" {...itemHoverProps}>
                  <ul>
                    <li>Shipped 3 production systems used by real businesses: a live pharmacy CRM, a rider delivery app in beta, and a freelance company website.</li>
                    <li>Solved 150+ problems on LeetCode across arrays, graphs, dynamic programming, and system design patterns.</li>
                    <li>Maintained an 8.6 CGPA at RTU while balancing internships and side projects.</li>
                  </ul>
                </motion.article>
              </motion.section>

              <motion.section 
                className="resume-section"
                variants={sectionVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileInView="visible"
                initial="hidden"
              >
                <h2>Professional Development</h2>
                <motion.article className="resume-item compact-item" {...itemHoverProps}>
                  <ul>
                    <li>Completed Android and Kotlin Development Masterclass (Udemy) and built production-ready Android applications.</li>
                    <li>Actively exploring system design and distributed systems through hands-on projects and research.</li>
                  </ul>
                </motion.article>
              </motion.section>
            </div>
          </section>
        </motion.article>
      </main>
    </>
  );
}

export default App;
