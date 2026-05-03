import { motion } from 'framer-motion';
import { members } from '../data/bandData';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import './BandMembers.css';

export default function BandMembers() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="band" className="band">
      <motion.div
        ref={ref}
        className="section band__inner"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={fadeUp}>
          <p className="section-label">Meet the Band</p>
          <h2 className="section-title">The People Behind the Music</h2>
          <p className="section-subtitle">
            Each member brings their unique talent and passion to create unforgettable live experiences.
          </p>
        </motion.div>

        <motion.div className="band__grid" variants={staggerContainer}>
          {members.map((member) => (
            <motion.div key={member.id} className="band__card glass-card" variants={fadeUp}>
              <div className="band__card-img-wrap">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="band__card-img"
                  loading="lazy"
                />
                <div className="band__card-overlay" />
              </div>
              <div className="band__card-info">
                <h3 className="band__card-name">{member.name}</h3>
                <p className="band__card-role">{member.role}</p>
                <p className="band__card-bio">{member.bio}</p>
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="band__card-social"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
