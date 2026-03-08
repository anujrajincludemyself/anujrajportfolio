import { motion } from 'framer-motion';
import {
    SiJavascript, SiPython, SiCplusplus, SiKotlin, SiC, SiTypescript,
    SiReact, SiTailwindcss, SiBootstrap, SiJetpackcompose,
    SiNodedotjs, SiExpress, SiFlask, SiPrisma, SiSqlalchemy,
    SiPostgresql, SiRedis, SiFirebase, SiSupabase, SiMysql,
    SiPostman, SiSwagger, SiJest, SiFigma, SiNgrok
} from 'react-icons/si';
import { FaCode, FaBrain, FaChartBar, FaLaptopCode, FaMobileAlt, FaCogs, FaDatabase, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <FaLaptopCode />,
            skills: [
                { name: 'C++', icon: SiCplusplus, level: 90 },
                { name: 'JavaScript', icon: SiJavascript, level: 85 },
                { name: 'TypeScript', icon: SiTypescript, level: 80 },
                { name: 'Python (Programming Language)', icon: SiPython, level: 80 },
                { name: 'Kotlin', icon: SiKotlin, level: 75 },
                { name: 'C (Programming Language)', icon: SiC, level: 80 },
                { name: 'SQL', icon: SiMysql, level: 85 }
            ]
        },
        {
            title: 'Frontend & Mobile',
            icon: <FaMobileAlt />,
            skills: [
                { name: 'React.js', icon: SiReact, level: 90 },
                { name: 'React Native', icon: SiReact, level: 80 },
                { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
                { name: 'Bootstrap (Framework)', icon: SiBootstrap, level: 80 },
                { name: 'Compose', icon: SiJetpackcompose, level: 70 }
            ]
        },
        {
            title: 'Backend',
            icon: <FaCogs />,
            skills: [
                { name: 'Node.js', icon: SiNodedotjs, level: 85 },
                { name: 'Express.js', icon: SiExpress, level: 85 },
                { name: 'Flask', icon: SiFlask, level: 75 },
                { name: 'Prisma ORM', icon: SiPrisma, level: 80 },
                { name: 'SQLAlchemy', icon: SiSqlalchemy, level: 75 }
            ]
        },
        {
            title: 'Database & Cloud',
            icon: <FaDatabase />,
            skills: [
                { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
                { name: 'Redis', icon: SiRedis, level: 70 },
                { name: 'Firebase', icon: SiFirebase, level: 80 },
                { name: 'Supabase', icon: SiSupabase, level: 75 }
            ]
        },
        {
            title: 'Tools & Testing',
            icon: <FaTools />,
            skills: [
                { name: 'Postman API', icon: SiPostman, level: 85 },
                { name: 'Swagger API', icon: SiSwagger, level: 75 },
                { name: 'Jest', icon: SiJest, level: 75 },
                { name: 'Figma', icon: SiFigma, level: 75 },
                { name: 'Ngrok', icon: SiNgrok, level: 80 }
            ]
        },
        {
            title: 'Concepts & AI',
            icon: <FaBrain />,
            skills: [
                { name: 'Large Language Models (LLM)', icon: FaBrain, level: 75 },
                { name: 'Data Analysis', icon: FaChartBar, level: 80 },
                { name: 'Object-Oriented Programming (OOP)', icon: FaCode, level: 85 }
            ]
        }
    ];

    const interests = [
        'Full-Stack Development',
        'Backend Systems',
        'Problem Solving',
        'Mobile Development',
        'UI/UX Design'
    ];

    const personalAchievements = [
        'Completed Android 14 & Kotlin Development Masterclass (Udemy)',
        'CGPA: 8.8 (Till 5th Semester), B.Tech IT',
        'Solved 150+ questions on LeetCode'
    ];

    return (
        <section className="skills-section section" id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">
                        Technologies I work with and love
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="skill-category card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="skill-info">
                                            <skill.icon className="skill-icon" />
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interests */}
                <motion.div
                    className="interests-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="subsection-title gradient-text">Interests</h3>
                    <div className="interests-tags">
                        {interests.map((interest, index) => (
                            <motion.span
                                key={index}
                                className="interest-tag"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {interest}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Personal Achievements */}
                <motion.div
                    className="personal-achievements"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="subsection-title gradient-text">Achievements</h3>
                    <div className="achievements-list">
                        {personalAchievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="achievement-item card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 10 }}
                            >
                                <span className="achievement-check">✓</span>
                                <span>{achievement}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
