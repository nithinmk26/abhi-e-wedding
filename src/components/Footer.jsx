import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <motion.p
        className="footer-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        Crafted with ❤️ by NITHIN
      </motion.p>
    </footer>
  );
}
