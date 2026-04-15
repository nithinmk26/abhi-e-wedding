import React from 'react';
import { INVITE } from '../config.js';
import { motion } from 'framer-motion';
import Heart from './Heart.jsx';
import CountdownSection from './CountdownSection.jsx';

// Displays the union text, heart, and countdown
export default function WedsBanner() {
  return (
    <section className="section weds-banner" aria-label="Union Banner" style={{ padding: '2.5rem 0 1.2rem' }}>
      <div className="centered" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}
        >
          <div className="unite-text weds-unite" style={{ color: 'var(--text-dark)', textShadow: 'none' }}>
            <span className="weds-name weds-groom" style={{ fontWeight: 600 }}>{INVITE.groomName}</span>
            <span className="weds-name weds-weds" aria-hidden="true">&nbsp;Weds&nbsp;</span>
            <span className="weds-name weds-bride" style={{ fontWeight: 600 }}>{INVITE.brideName}</span>
            <Heart />
          </div>
          <CountdownSection />
        </motion.div>
      </div>
    </section>
  );
}
