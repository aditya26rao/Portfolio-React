import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact({ links }) {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Let us connect</h2>
      <p>For full-time roles, internships, and collaborations.</p>
      <div className="contact-links">
        <motion.a href={links.email} whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <FaEnvelope /> Email
        </motion.a>
        <motion.a href={links.github} target="_blank" rel="noreferrer" whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <FaGithub /> GitHub
        </motion.a>
        <motion.a href={links.linkedin} target="_blank" rel="noreferrer" whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <FaLinkedin /> LinkedIn
        </motion.a>
      </div>
    </motion.section>
  );
}
