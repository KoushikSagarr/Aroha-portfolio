import { motion } from 'framer-motion';
import { logos, socials, bandInfo, contact } from '../data/bandData';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import { Mail, Phone, Heart, Music } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import './Footer.css';

export default function Footer() {
  const [ref, controls] = useScrollAnimation(0.1);

  return (
    <footer className="footer">
      <motion.div
        ref={ref}
        className="section footer__inner"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="footer__top" variants={fadeUp}>
          <img src={logos.white} alt="AROHA Music" className="footer__logo" loading="lazy" decoding="async" />
          <p className="footer__tagline">{bandInfo.tagline}</p>
          <div className="footer__social-links">
            <a
              href={socials.bandInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AROHA Music Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={socials.leadInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mihira Ramana Instagram"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </motion.div>

        {/* Contact strip */}
        <motion.div className="footer__contact" variants={fadeUp}>
          <a href={`mailto:${contact.email}`} className="footer__contact-link">
            <Mail size={16} strokeWidth={1.5} />
            {contact.email}
          </a>
          {contact.phones.map((phone, i) => (
            <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="footer__contact-link">
              <Phone size={16} strokeWidth={1.5} />
              {phone}
            </a>
          ))}
        </motion.div>

        <motion.div className="footer__bottom" variants={fadeUp}>
          <p>© {new Date().getFullYear()} AROHA Music. All rights reserved.</p>
          <p className="footer__made">
            Made with <Heart size={14} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'text-bottom', color: '#e25555', fill: '#e25555' }} /> and lots of <Music size={14} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'text-bottom', color: 'var(--accent-primary)' }} />
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
