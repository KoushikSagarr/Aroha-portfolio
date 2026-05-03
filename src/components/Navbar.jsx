import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logos } from '../data/bandData';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Band', href: '#band' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Repertoire', href: '#repertoire' },
  { label: 'Book Us', href: '#book' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
            <img src={logos.white} alt="AROHA Music" />
          </a>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="navbar__cta btn-primary"
            onClick={(e) => handleNavClick(e, '#book')}
          >
            Book Now
          </a>

          <button
            className={`navbar__burger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu__content"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#book"
                className="btn-primary mobile-menu__cta"
                onClick={(e) => handleNavClick(e, '#book')}
              >
                Book Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
