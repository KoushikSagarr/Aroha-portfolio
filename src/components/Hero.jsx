import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { logos } from '../data/bandData';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Rotate based on mouse position (parallax effect)
  const rotateX = useTransform(mouseY, [-500, 500], [15, -15]);
  const rotateY = useTransform(mouseX, [-500, 500], [-15, 15]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX - innerWidth / 2;
    const y = clientY - innerHeight / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Snap back to 0 when mouse leaves
    animate(mouseX, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(mouseY, 0, { type: "spring", stiffness: 300, damping: 20 });
  };

  return (
    <section id="hero" className="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Ambient glow effects */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />

      {/* Floating Particles Overlay */}
      <div className="hero__particles">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i} 
            className="hero__particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              transform: `scale(${0.5 + Math.random()})`
            }} 
          />
        ))}
      </div>

      <div className="hero__content">
        {/* Logo — big and prominent with 3D tilt */}
        <motion.div
          className="hero__logo-wrap"
          style={{ rotateX, rotateY, perspective: 1000, transformStyle: "preserve-3d" }}
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

      {/* Animated Scroll Down Indicator */}
      <motion.div 
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="hero__scroll-text">Scroll Down</span>
        <ChevronDown size={20} className="hero__scroll-icon" strokeWidth={2} />
      </motion.div>
    </section>
  );
}
