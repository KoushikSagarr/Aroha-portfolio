import { motion } from 'framer-motion';
import { booking, socials, contact } from '../data/bandData';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import './BookUs.css';

export default function BookUs() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="book" className="book">
      {/* Background glow */}
      <div className="book__glow" />

      <motion.div
        ref={ref}
        className="section book__inner"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={fadeUp}>
          <p className="section-label">Let's Work Together</p>
          <h2 className="section-title book__title">{booking.cta}</h2>
          <p className="section-subtitle">{booking.subtitle}</p>
        </motion.div>

        <motion.div className="book__methods" variants={staggerContainer}>
          {booking.methods.map((method, i) => (
            <motion.a
              key={i}
              href={method.url}
              target={method.type === 'email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="book__method glass-card"
              variants={fadeUp}
            >
              <span className="book__method-icon">{method.icon}</span>
              <span className="book__method-label">{method.label}</span>
              <svg className="book__method-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="book__availability" variants={fadeUp}>
          <div className="book__pulse" />
          <p>{booking.availability}</p>
        </motion.div>

        {/* Contact info */}
        <motion.div className="book__contact" variants={fadeUp}>
          <div className="book__contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <div className="book__contact-phones">
              {contact.phones.map((phone, i) => (
                <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="book__contact-link">
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div className="book__contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <a href={`mailto:${contact.email}`} className="book__contact-link">
              {contact.email}
            </a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div className="book__socials" variants={fadeUp}>
          <a
            href={socials.bandInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="book__social-link"
            aria-label="AROHA Music Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @aroha_music_
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
