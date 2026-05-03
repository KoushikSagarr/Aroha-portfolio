import { motion } from 'framer-motion';
import { bandInfo } from '../data/bandData';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="about" className="about">
      <motion.div
        ref={ref}
        className="section about__inner"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={fadeUp}>
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">More Than Just a Band</h2>
          <p className="section-subtitle">{bandInfo.description}</p>
        </motion.div>

        <motion.div className="about__usps" variants={staggerContainer}>
          {bandInfo.usp.map((item, i) => (
            <motion.div key={i} className="about__usp glass-card" variants={fadeUp}>
              <span className="about__usp-icon">{item.icon}</span>
              <h3 className="about__usp-title">{item.title}</h3>
              <p className="about__usp-text">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Event types ticker — outside .section for full-width */}
      <div className="about__events">
        <p className="about__events-label">We perform at</p>
        <div className="about__events-ticker">
          <div className="about__events-track">
            {[...Array(6)].map((_, loopIdx) => (
              <div key={loopIdx} className="about__events-set">
                {['Corporate Events', 'Private Parties', 'Weddings & Sangeets', 'Café & Lounge Gigs', 'College Fests', 'Cultural Events'].map((event, i) => (
                  <span key={`${loopIdx}-${i}`} className="about__event-tag">
                    {event}
                    <span className="about__event-dot">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
