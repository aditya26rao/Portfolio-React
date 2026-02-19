import { FaFileAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero({ profileImage }) {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Full Stack Developer</p>
        <h1>
          Crafting product-grade apps with <span>React, Django, and MERN</span>
        </h1>
        <p className="hero-copy">
          I am Bonthapalli Aditya Rao. I build clean frontend interfaces, reliable backend systems,
          and complete end-to-end web products.
        </p>
        <div className="hero-actions">
          <motion.a className="btn btn-primary" href="#projects" whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            Explore Projects <FaArrowRight />
          </motion.a>
          <motion.a
            className="btn btn-ghost"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Resume <FaFileAlt />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual motion-perspective"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <motion.div className="image-wrap motion-3d-card" whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}>
          <img src={profileImage} alt="B. Aditya Rao" />
        </motion.div>
        <motion.div className="hero-card" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>
          Available for Full-Time and Internship Roles
        </motion.div>
      </motion.div>
    </section>
  );
}
