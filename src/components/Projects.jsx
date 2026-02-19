import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Projects({ projects, githubProfile }) {
  return (
    <section id="projects" className="projects-section motion-perspective">
      <motion.div
        className="section-head section-head-inline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p>GitHub Portfolio</p>
          <h2>Projects with README-based descriptions and repo links</h2>
        </div>
        <motion.a
          href={githubProfile}
          target="_blank"
          rel="noreferrer"
          className="profile-link"
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaGithub /> github.com/aditya26rao
        </motion.a>
      </motion.div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card motion-3d-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.38, delay: index * 0.06 }}
            whileHover={{ rotateX: 6, rotateY: -6, y: -8 }}
          >
            <span className="project-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>

            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-footer">
              <span className="project-stack">{project.stack}</span>
              <div className="project-links">
                <motion.a href={project.repo} target="_blank" rel="noreferrer" whileHover={{ y: -2 }}>
                  <FaGithub /> Repo
                </motion.a>
                {project.live && (
                  <motion.a href={project.live} target="_blank" rel="noreferrer" whileHover={{ y: -2 }}>
                    <FaExternalLinkAlt /> Live
                  </motion.a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
