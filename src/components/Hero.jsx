import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCode, FaGlobe } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const socialLinks = [
        { icon: FaEnvelope, href: 'mailto:anujraj24go@gmail.com', label: 'Email' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anujrajmish', label: 'LinkedIn' },
        { icon: FaGithub, href: 'https://github.com/anujrajincludemyself', label: 'GitHub' },
        { icon: SiLeetcode, href: 'https://leetcode.com/u/anujsolveproblem24242/', label: 'LeetCode' },
        { icon: FaGlobe, href: 'https://anujrajincludemyself.github.io/', label: 'Portfolio' }
    ];

    return (
        <section className="hero-section" id="home">
            <div className="hero-background"></div>

            <motion.div
                className="hero-content container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-badge" variants={itemVariants}>
                    <span className="pulse-dot"></span>
                    <span>Open for Opportunities</span>
                </motion.div>

                <motion.div
                    className="hero-profile-image"
                    variants={itemVariants}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img src="/profile.png" alt="Anuj Raj" />
                </motion.div>

                <motion.h1 className="hero-title" variants={itemVariants}>
                    Hey, I'm <span className="gradient-text">Anuj Raj</span>
                </motion.h1>

                <motion.p className="hero-subtitle" variants={itemVariants}>
                    Full Stack Developer | Problem Solver | Tech Enthusiast
                </motion.p>

                <motion.p className="hero-description" variants={itemVariants}>
                    Building innovative web applications with full stack technologies and exploring the endless possibilities of code.
                    Currently studying Information Technology at RTU Kota while crafting exceptional digital experiences.
                </motion.p>

                {/* <motion.div className="hero-stats" variants={itemVariants}>
                    <div className="stat-item">
                        <h3>8.8</h3>
                        <p>CGPA</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <h3>100+</h3>
                        <p>LeetCode</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <h3>3+</h3>
                        <p>Internships</p>
                    </div>
                </motion.div> */}

                <motion.div className="hero-social" variants={itemVariants}>
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div className="hero-cta" variants={itemVariants}>
                    <a href="#projects" className="btn btn-primary">
                        View My Work
                    </a>
                    <a
                        href="https://buymeacoffee.com/anujraj24gb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        ☕ Buy Me a Coffee
                    </a>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    variants={itemVariants}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="scroll-line"></div>
                    <span>Scroll to explore</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
