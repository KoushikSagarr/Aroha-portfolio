import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import { Film, Guitar, Sparkles, Lightbulb, ArrowUpRight } from 'lucide-react';
import './Repertoire.css';

const reels = [
  {
    language: 'Hindi',
    Icon: Film,
    song: 'Hindi Cover',
    url: 'https://www.instagram.com/reel/DUPqa3okfAe/',
    embedUrl: 'https://www.instagram.com/reel/DUPqa3okfAe/embed/',
  },
  {
    language: 'English',
    Icon: Guitar,
    song: 'Señorita',
    url: 'https://www.instagram.com/reel/DWWKFRWEUcZ/',
    embedUrl: 'https://www.instagram.com/reel/DWWKFRWEUcZ/embed/',
  },
  {
    language: 'Telugu',
    Icon: Sparkles,
    song: 'Telugu Cover',
    url: 'https://www.instagram.com/reel/DTX7gEZkRdp/',
    embedUrl: 'https://www.instagram.com/reel/DTX7gEZkRdp/embed/',
  },
];

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

        <motion.div className="repertoire__reels" variants={staggerContainer}>
          {reels.map((reel, i) => (
            <motion.div key={i} className="repertoire__reel glass-card" variants={fadeUp}>
              <div className="repertoire__reel-header">
                <div className="repertoire__reel-icon">
                  <reel.Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="repertoire__reel-language">{reel.language}</h3>
                  <p className="repertoire__reel-song">{reel.song}</p>
                </div>
              </div>
              <div className="repertoire__reel-embed">
                <iframe
                  src={reel.embedUrl}
                  title={`AROHA Music — ${reel.language} performance`}
                  allowFullScreen
                  loading="lazy"
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="repertoire__reel-link"
              >
                <span>Watch on Instagram</span>
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p className="repertoire__note" variants={fadeUp}>
          <Lightbulb size={16} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px', color: 'var(--accent-primary)' }} />
          Custom setlists available — tell us your favorites and we'll tailor the experience to your event!
        </motion.p>
      </motion.div>
    </section>
  );
}
