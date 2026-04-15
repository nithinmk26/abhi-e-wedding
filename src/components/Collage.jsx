import React from 'react';
import { motion } from 'framer-motion';
import img3 from '../assets/image3.jpeg';
import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';

const images = [
  img3,
  img1,
  img2
];

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' } })
};

export default function Collage() {
  return (
    <section className="section">
      <div className="centered">
        <h2>Memories & Moments</h2>
        <div className="collage-grid">
          {images.map((src, i) => (
            <motion.div
              className="collage-item"
              key={src}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariant}
            >
              <img src={src} alt={`Memory ${i + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
