import { motion } from 'framer-motion';
import { logos } from '../data/bandData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Ambient glow effects */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />

      <div className="hero__content">
        {/* Logo — big and prominent */}
        <motion.div
          className="hero__logo-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={logos.dark3D} alt="AROHA Music" className="hero__logo" />
        </motion.div>

        {/* Two-line headline */}
        <motion.div
          className="hero__headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero__title-line1">Live Music</h1>
          <p className="hero__title-line2">Unforgettable Moments</p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          Bringing soul to every stage — Hotels · Bars · Clubs · Events
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#book" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Book Your Event
          </a>
          <a href="#about" className="btn-outline" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
}
