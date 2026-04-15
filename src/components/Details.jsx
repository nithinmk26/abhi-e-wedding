import React from 'react';
import { INVITE } from '../config.js';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Details() {
  return (
    <section className="section">
      <div className="centered">
        <motion.div
          className="details-card"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.h2 variants={cardVariant}>Ceremony Details</motion.h2>
          <motion.div className="details-grid" variants={containerVariant}>
            <motion.div className="detail-block" variants={cardVariant}>
              <h3>Reception</h3>
              <p>{INVITE.receptionDate}<br />{INVITE.receptionTime}</p>
            </motion.div>
            <motion.div className="detail-block" variants={cardVariant}>
              <h3>Muhurtha</h3>
              <p>{INVITE.muhurthaDate}<br />{INVITE.muhurthaTime}</p>
            </motion.div>
            <motion.div className="detail-block" variants={cardVariant}>
              <h3>Beegara Oota</h3>
              <p>May 10, 2026<br />12:30 PM<br />Mayigonahalli</p>
            </motion.div>
            <motion.div className="detail-block" variants={cardVariant}>
              <h3>Venue</h3>
              <p>
                <strong>{INVITE.venue}</strong><br />
              </p>
            </motion.div>
          </motion.div>
          <motion.p className="invite-message" variants={cardVariant}>
            {INVITE.shortMessage}
          </motion.p>
          <motion.div className="details-grid" variants={containerVariant} style={{ marginTop: '1.5rem' }}>
            <motion.div className="detail-block" variants={cardVariant} style={{ gridColumn: '1 / -1' }}>
              <h3>Contact</h3>
              {INVITE.contacts && INVITE.contacts.map((c, i) => (
                <div key={i} style={{ marginTop: '.35rem' }}>
                  <strong>{c.name}:</strong> {c.phone}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
