import { motion } from 'framer-motion';
import {
    SiJavascript, SiPython, SiCplusplus, SiKotlin,
    SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss,
    SiMongodb, SiMysql, SiGit, SiGithub,
    SiFigma, SiPostman
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: [
                { name: 'C++', icon: SiCplusplus, level: 90 },
                { name: 'JavaScript', icon: SiJavascript, level: 85 },
                { name: 'Python', icon: SiPython, level: 80 },
                { name: 'Kotlin', icon: SiKotlin, level: 75 }
            ]
        },
        {
            title: 'Web Development',
            icon: '🌐',
            skills: [
                { name: 'React.js', icon: SiReact, level: 90 },
                { name: 'Next.js', icon: SiNextdotjs, level: 85 },
                { name: 'Node.js', icon: SiNodedotjs, level: 85 },
                { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 }
            ]
        },
        {
            title: 'Database',
            icon: '🗄️',
            skills: [
                { name: 'MongoDB', icon: SiMongodb, level: 85 },
                { name: 'MySQL', icon: SiMysql, level: 80 }
            ]
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: [
                { name: 'Git', icon: SiGit, level: 85 },
                { name: 'GitHub', icon: SiGithub, level: 85 },
                { name: 'VS Code', icon: FaCode, level: 90 },
                { name: 'Figma', icon: SiFigma, level: 75 },
                { name: 'Postman', icon: SiPostman, level: 80 }
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
        `'CGPA: 8.8 (Till 5th Semester), B.Tech IT'`,
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
