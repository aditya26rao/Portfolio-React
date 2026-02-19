import { motion } from 'framer-motion';

export function Skills({ skills }) {
  const getInitials = (name) =>
    name
      .replace(/[^A-Za-z0-9 ]/g, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');

  return (
    <section id="skills" className="skills-section motion-perspective">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <p>Core Capabilities</p>
        <h2>Technologies I use for shipping scalable products</h2>
      </motion.div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.article
            key={skill.name}
            className="skill-pill motion-3d-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            whileHover={{ rotateX: 7, rotateY: -7, y: -6 }}
          >
            {skill.image ? (
              <img src={skill.image} alt={skill.name} className="skill-icon" loading="lazy" />
            ) : (
              <div className="skill-icon skill-icon-fallback" aria-hidden="true">
                {getInitials(skill.name)}
              </div>
            )}
            <span>{skill.name}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
