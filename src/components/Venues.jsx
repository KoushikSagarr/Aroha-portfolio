import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import {
  Wine, Music, Martini, Beer, MapPin,
  Building2, Plane, CloudFog, Trophy, ArrowUpRight
} from 'lucide-react';
import './Venues.css';

const venues = [
  {
    name: 'Whisky SAMBA',
    area: 'Sattva Knowledge City',
    type: 'Bar & Lounge',
    mapUrl: 'https://www.google.com/maps/search/Whisky+Samba+Sattva+Knowledge+City+Hyderabad',
    Icon: Wine,
  },
  {
    name: 'TRICK',
    area: 'Nallagandla',
    type: 'Bar & Kitchen',
    mapUrl: 'https://www.google.com/maps/search/Trick+Bar+%26+Kitchen+Nallagandla+Hyderabad',
    Icon: Martini,
  },
  {
    name: 'WESTIN',
    area: 'Mindspace',
    type: 'Luxury Hotel',
    mapUrl: 'https://www.google.com/maps/search/The+Westin+Hyderabad+Mindspace',
    Icon: Building2,
  },
  {
    name: 'NOVOTEL',
    area: 'Hyderabad Airport',
    type: 'Hotel',
    mapUrl: 'https://www.google.com/maps/search/Novotel+Hyderabad+Airport',
    Icon: Plane,
  },
  {
    name: 'HAZE',
    area: 'Gachibowli',
    type: 'Kitchen & Bar',
    mapUrl: 'https://www.google.com/maps/search/Haze+Kitchen+%26+Bar+Gachibowli+Hyderabad',
    Icon: CloudFog,
  },
  {
    name: 'ZERO-40',
    area: 'Financial District',
    type: 'Brewing',
    mapUrl: 'https://www.google.com/maps/search/Zero40+Brewing+Financial+District+Hyderabad',
    Icon: Beer,
  },
  {
    name: 'Fire Water Neo',
    area: 'Financial District',
    type: 'Bar & Kitchen',
    mapUrl: 'https://www.google.com/maps/search/Firewater+Neo+Bar+%26+Kitchen+Financial+District+Hyderabad',
    Icon: Wine,
  },
  {
    name: 'TAKI',
    area: 'Kokapet',
    type: 'Live Music Lounge',
    mapUrl: 'https://www.google.com/maps/search/Taki+Live+Kokapet+Hyderabad',
    Icon: Music,
  },
  {
    name: 'Jamming GOAT',
    area: 'Kokapet',
    type: 'Live Music Café',
    mapUrl: 'https://www.google.com/maps/search/Jamming+Goat+Kokapet+Hyderabad',
    Icon: Music,
  },
  {
    name: 'UNDERDOGS',
    area: 'Sattva Knowledge City',
    type: 'Sports Bar & Grill',
    mapUrl: 'https://www.google.com/maps/search/Underdoggs+Sports+Bar+Sattva+Knowledge+City+Hyderabad',
    Icon: Trophy,
  },
];

export default function Venues() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="venues" className="venues">
      <motion.div
        ref={ref}
        className="section venues__inner"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={fadeUp}>
          <p className="section-label">Our Stage</p>
          <h2 className="section-title">Where We Perform</h2>
          <p className="section-subtitle">
            Catch AROHA Music live at Hyderabad's finest venues — from premium lounges to luxury hotels.
          </p>
        </motion.div>

        <motion.div className="venues__map-badge" variants={fadeUp}>
          <MapPin size={16} className="venues__map-badge-icon" />
          <span>Hyderabad, India</span>
        </motion.div>

        <motion.div className="venues__grid" variants={staggerContainer}>
          {venues.map((venue, i) => (
            <motion.a
              key={i}
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="venues__card glass-card"
              variants={fadeUp}
            >
              <div className="venues__card-icon">
                <venue.Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="venues__card-info">
                <h3 className="venues__card-name">{venue.name}</h3>
                <p className="venues__card-type">{venue.type}</p>
              </div>
              <div className="venues__card-location">
                <MapPin size={13} strokeWidth={2} />
                <span>{venue.area}</span>
              </div>
              <div className="venues__card-arrow">
                <ArrowUpRight size={16} strokeWidth={2} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p className="venues__note" variants={fadeUp}>
          <Music size={16} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} />
          Want us at your venue? <a href="#book">Get in touch</a> — we're always looking for new stages to light up!
        </motion.p>
      </motion.div>
    </section>
  );
}
