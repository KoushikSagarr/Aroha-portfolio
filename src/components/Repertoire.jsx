import { motion } from 'framer-motion';
import { repertoire } from '../data/bandData';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import './Repertoire.css';

export default function Repertoire() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="repertoire" className="repertoire">
      <motion.div
        ref={ref}
        className="section repertoire__inner"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={fadeUp}>
          <p className="section-label">What We Play</p>
          <h2 className="section-title">Our Repertoire</h2>
          <p className="section-subtitle">
            From soulful Bollywood melodies to Tollywood chart-toppers to international hits — we've got your event covered.
          </p>
        </motion.div>

        <motion.div className="repertoire__genres" variants={staggerContainer}>
          {repertoire.map((genre, i) => (
            <motion.div key={i} className="repertoire__genre glass-card" variants={fadeUp}>
              <div className="repertoire__genre-header">
                <span className="repertoire__genre-icon">{genre.icon}</span>
                <h3 className="repertoire__genre-name">{genre.genre}</h3>
              </div>
              <div className="repertoire__songs">
                {genre.songs.map((song, j) => (
                  <span key={j} className="repertoire__song">{song}</span>
                ))}
              </div>
              <p className="repertoire__more">+ many more</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p className="repertoire__note" variants={fadeUp}>
          💡 Custom setlists available — tell us your favorites and we'll tailor the experience to your event!
        </motion.p>
      </motion.div>
    </section>
  );
}
