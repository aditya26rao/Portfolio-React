import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="about-section motion-perspective">
      <motion.div
        className="about-box motion-3d-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        whileHover={{ rotateX: 5, rotateY: -5, y: -6 }}
      >
        <h2>About Me</h2>
        <p>
          I focus on real-world full-stack development: responsive frontend, secure backend APIs,
          and deployable software architecture.
        </p>
      </motion.div>

      <motion.div
        className="about-box motion-3d-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        whileHover={{ rotateX: 5, rotateY: -5, y: -6 }}
      >
        <h2>Engineering Style</h2>
        <p>
          I value clean code, modular components, and practical solutions that improve reliability,
          performance, and user experience.
        </p>
      </motion.div>
    </section>
  );
}
