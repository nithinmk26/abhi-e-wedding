import React, { useState, useEffect } from 'react';
import { INVITE } from '../config.js';
import { motion } from 'framer-motion';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    // Use INVITE.date and INVITE.time for dynamic config
    // Parse date string to get month, day, year
    const [monthName, day, year] = INVITE.date.replace(',', '').split(' ');
    const monthMap = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };
    const month = monthMap[monthName];
    const hour = 19; // 7 PM
    const minute = 0;
    const targetDate = new Date(Number(year), month, Number(day), hour, minute, 0);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'd', value: timeLeft.days || 0 },
    { label: 'h', value: timeLeft.hours || 0 },
    { label: 'm', value: timeLeft.minutes || 0 },
    { label: 's', value: timeLeft.seconds || 0 }
  ];

  return (
    <section className="section countdown-section">
      <div className="centered">
        <motion.div
          className="countdown-container"
        >
          <motion.p
            className="join-us-text"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join us in
          </motion.p>
          <motion.div
            className="countdown-timer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {timeUnits.map((unit, index) => (
              <motion.span
                key={unit.label}
                className="time-unit"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: 'spring', stiffness: 200 }}
              >
                {unit.value}{unit.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
