import React from 'react';
import { INVITE } from '../config.js';
import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <section className="section">
      <div className="centered map-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Location
        </motion.h2>
        <motion.div
          className="map-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          <iframe
            src={INVITE.googleMapsEmbedSrc}
            title="Venue Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
