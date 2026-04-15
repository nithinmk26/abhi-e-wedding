import React from 'react';
import { motion } from 'framer-motion';
import NamesReveal from './NamesReveal.jsx';
import bgImage from '../assets/abhi_anitha.jpeg';

const fadeIn = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.2 } }
};

export default function Hero() {
  return (
    <section className="hero section" aria-label="Invitation Hero">
      {/* Background image layer */}
      <div className="hero-bg" style={{ backgroundImage: `url(${bgImage})` }} />
      {/* Top-right minimal heading */}
      <motion.div
        className="hero-badge"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <span className="hero-badge-text">Wedding Invitation</span>
      </motion.div>
      {/* Center names reveal embedded */}
      <NamesReveal embedded />
    </section>
  );
}
