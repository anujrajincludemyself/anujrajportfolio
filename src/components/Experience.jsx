import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaTrophy, FaMedal } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'SDE Intern',
            company: 'MediHut',
            period: 'Present',
            current: true,
            highlights: [
                'Built frontend from using Next.js 14, TypeScript, Tailwind CSS and Reactjs',
                'Developing backend services and APIs using NestJS'
            ],
            color: '#10b981'
        },
        {
            role: 'Full Stack Developer Intern',
            company: 'Bucket List',
            period: 'Present',
            highlights: [
                'Built the complete frontend from scratch using Next.js 14, TypeScript, and Tailwind CSS',
                'Implemented responsive layouts, Currently developing backend services using NestJS'
            ],
            color: '#6366f1'
        },
        {
            role: 'Full Stack Developer Intern',
            company: 'Maximize Media',
            period: 'Jan 2026',
            highlights: [
                'Working on a SaaS CRM platform built with React, Node.js, and REST APIs',
                'Mainly making frontend and improving Backend APIs and features of Leads'
            ],
            color: '#8b5cf6'
        },
        {
            role: 'Research Intern',
            company: 'IIT Patna',
            period: 'Jun 2025 -- Jul 2025',
            highlights: [
                'Conducted ML-based analysis for network security',
                'Built an exam seating system using Python and Streamlit (95% accuracy)'
            ],
            color: '#ec4899'
        }
    ];

    const achievements = [
        {
            title: 'Amazon ML Challenge 2025',
            organization: 'Amazon India',
            period: 'Jun–Jul / Oct 2025',
            achievement: 'Achieved 79% accuracy; ranked 82 nationally'
        },
        {
            title: 'HackCrux 2025',
            organization: 'GDG, LNMIT Jaipur',
            period: '2025',
            achievement: 'Secured 2nd Runner-Up for AI-powered Digital Twin solution'
        }
    ];

    return (
        <section className="experience-section section" id="experience">
            <div className="container">
                {/* Internships */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Professional Journey</h2>
                    <p className="section-subtitle">
                        Gaining hands-on experience across diverse tech domains
                    </p>
                </motion.div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-marker" style={{ background: exp.color }}>
                                <FaBriefcase />
                            </div>

                            <div className="timeline-content card">
                                {exp.current && (
                                    <div className="current-badge">
                                        <span className="pulse"></span>
                                        Currently Working
                                    </div>
                                )}

                                <div className="timeline-header">
                                    <h3 className="role-title">{exp.role}</h3>
                                    <div className="company-period">
                                        <span className="company">{exp.company}</span>
                                        <span className="period">
                                            <FaCalendar /> {exp.period}
                                        </span>
                                    </div>
                                </div>

                                <ul className="highlights-list">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Hackathons & Achievements */}
                <motion.div
                    className="achievements-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="subsection-title gradient-text">Hackathons & Competitions</h3>

                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="achievement-card card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="achievement-icon">
                                    {index === 0 ? <FaTrophy style={{ color: '#facc15', fontSize: '1.5rem' }} /> : <FaMedal style={{ color: '#60a5fa', fontSize: '1.5rem' }} />}
                                </div>
                                <h4 className="achievement-title">{achievement.title}</h4>
                                <p className="achievement-org">{achievement.organization}</p>
                                <p className="achievement-period">{achievement.period}</p>
                                <p className="achievement-text">{achievement.achievement}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
