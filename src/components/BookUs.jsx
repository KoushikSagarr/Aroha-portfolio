import { motion } from 'framer-motion';
import { booking, socials, contact } from '../data/bandData';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import { Mic, Mail, ArrowUpRight, Phone } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import './BookUs.css';

const iconMap = {
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  mail: Mail,
};

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
          {booking.methods.map((method, i) => {
            const IconComponent = iconMap[method.icon];
            return (
              <motion.a
                key={i}
                href={method.url}
                target={method.type === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="book__method glass-card"
                variants={fadeUp}
              >
                <span className="book__method-icon">
                  {IconComponent && <IconComponent size={20} strokeWidth={1.5} />}
                </span>
                <span className="book__method-label">{method.label}</span>
                <ArrowUpRight size={18} strokeWidth={2} className="book__method-arrow" />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div className="book__availability" variants={fadeUp}>
          <div className="book__pulse" />
          <p>{booking.availability}</p>
        </motion.div>

        {/* Contact info */}
        <motion.div className="book__contact" variants={fadeUp}>
          <div className="book__contact-item">
            <Phone size={18} strokeWidth={1.5} />
            <div className="book__contact-phones">
              {contact.phones.map((phone, i) => (
                <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="book__contact-link">
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div className="book__contact-item">
            <Mail size={18} strokeWidth={1.5} />
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
            <InstagramIcon size={20} />
            @aroha_music_
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
