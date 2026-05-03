// ─── AROHA MUSIC — STATIC DATA ─────────────────────────────────────────────
// All content in one place. Update here, site updates everywhere.

// ── Images ──────────────────────────────────────────────────────────────────
import logoWhite from '../assets/images/Aroha final Logo-whte.png';
import logo3D from '../assets/images/Aroha final Logo- 3D blck.png';
import mihiraPhoto from '../assets/images/Mihira.JPG';
import deepakPhoto from '../assets/images/Deepak.JPG';

// Performance & gig photos
import gig1 from '../assets/images/_DEV9107.JPG';
import gig2 from '../assets/images/DSC_0738.JPG';
import gig3 from '../assets/images/DSC_0739 (1).JPG';
import gig4 from '../assets/images/IMG-20250607-WA0025.jpg';
import gig5 from '../assets/images/IMG-20250824-WA0014.jpg';
import gig6 from '../assets/images/IMG-20250824-WA0020.jpg';
import gig7 from '../assets/images/IMG-20251227-WA0008.jpg';
import gig8 from '../assets/images/IMG-20260111-WA0014(1).jpg';
import gig9 from '../assets/images/IMG-20260122-WA0005.jpg';
import gig10 from '../assets/images/IMG_20260218_161941_194.jpg';
import gig11 from '../assets/images/IMG_20260218_161956_432.jpg';

// ── Logos ────────────────────────────────────────────────────────────────────
export const logos = {
  white: logoWhite,
  dark3D: logo3D,
};

// ── Band Info ───────────────────────────────────────────────────────────────
export const bandInfo = {
  name: 'AROHA Music',
  tagline: 'Live Music That Moves You',
  subtitle: 'Bollywood · Tollywood · English Hits',
  description:
    "We're AROHA Music — a high-energy live band bringing the best of Bollywood, Tollywood, and English hits to your events. What sets us apart? We're IT professionals by day, so you can expect top-notch reliability, punctuality, and a stress-free show every single time.",
  usp: [
    {
      icon: '🎵',
      title: 'Versatile Setlists',
      text: 'From soulful Bollywood melodies to Tollywood bangers to chart-topping English hits — we read the room and deliver.',
    },
    {
      icon: '💼',
      title: 'Professional & Reliable',
      text: 'IT pros by day, musicians by passion. Expect punctuality, clear communication, and zero drama.',
    },
    {
      icon: '🔥',
      title: 'High-Energy Performances',
      text: 'We don\'t just play music — we create experiences. Crowd interaction, energy, and vibes guaranteed.',
    },
  ],
};

// ── Band Members ────────────────────────────────────────────────────────────
export const members = [
  {
    id: 1,
    name: 'Mihira Ramana',
    role: 'Lead Vocalist',
    photo: mihiraPhoto,
    instagram: 'https://www.instagram.com/mihiraramana.music',
    bio: 'The voice that carries the soul of AROHA. Mihira brings raw emotion and electrifying energy to every performance.',
  },
  {
    id: 2,
    name: 'Deepak',
    role: 'Guitarist',
    photo: deepakPhoto,
    instagram: 'https://www.instagram.com/stringsaga.live?igsh=MW40OWFua3V3Y3kydA==',
    bio: 'Master of strings and vibes. Deepak weaves melodies that make every song unforgettable.',
  },
  {
    id: 3,
    name: 'Shravani',
    role: 'Drums & Percussion',
    photo: gig4,
    instagram: 'https://www.instagram.com/shravs28/',
    bio: 'The heartbeat of AROHA. Shravani keeps the rhythm tight and the energy high from start to finish.',
  },
];

// ── Gallery ─────────────────────────────────────────────────────────────────
export const galleryImages = [
  { id: 1, src: gig1, alt: 'AROHA Music — Duo performance at a venue', category: 'live' },
  { id: 2, src: gig2, alt: 'AROHA Music — Mihira performing live', category: 'live' },
  { id: 3, src: gig3, alt: 'AROHA Music — Live vocal performance', category: 'live' },
  { id: 4, src: gig5, alt: 'AROHA Music — Drums in action', category: 'live' },
  { id: 5, src: gig6, alt: 'AROHA Music — Mihira singing passionately', category: 'live' },
  { id: 6, src: gig7, alt: 'AROHA Music — Band together after a show', category: 'offstage' },
  { id: 7, src: gig8, alt: 'AROHA Music — Event performance', category: 'live' },
  { id: 8, src: gig9, alt: 'AROHA Music — Traditional performance', category: 'live' },
  { id: 9, src: gig10, alt: 'AROHA Music — Mihira candid portrait', category: 'portrait' },
  { id: 10, src: gig11, alt: 'AROHA Music — Duo at a lounge gig', category: 'live' },
];

// ── Repertoire ──────────────────────────────────────────────────────────────
export const repertoire = [
  {
    genre: 'Bollywood',
    icon: '🎬',
    songs: [
      'Tum Hi Ho', 'Kesariya', 'Raataan Lambiyan', 'Channa Mereya',
      'Agar Tum Saath Ho', 'Apna Bana Le', 'Tere Vaaste', 'Phir Aur Kya Chahiye',
    ],
  },
  {
    genre: 'Tollywood',
    icon: '🌟',
    songs: [
      'Buttabomma', 'Samajavaragamana', 'Srivalli', 'Natu Natu',
      'Inkem Inkem', 'Butta Bomma', 'Oo Antava', 'Ranjithame',
    ],
  },
  {
    genre: 'English',
    icon: '🎸',
    songs: [
      'Perfect', 'Shape of You', 'Someone Like You', 'Blinding Lights',
      'Señorita', 'Stay', 'Photograph', 'All of Me',
    ],
  },
];

// ── Social Links ────────────────────────────────────────────────────────────
export const socials = {
  bandInstagram: 'https://www.instagram.com/aroha_music_',
  leadInstagram: 'https://www.instagram.com/mihiraramana.music',
};

// ── Booking ─────────────────────────────────────────────────────────────────
export const booking = {
  cta: 'Book Us For Your Event',
  subtitle: "Ready to make your event unforgettable? Let's talk!",
  methods: [
    {
      type: 'instagram',
      label: 'DM on Instagram',
      url: 'https://www.instagram.com/aroha_music_',
      icon: '📸',
    },
    {
      type: 'instagram',
      label: 'DM Mihira Directly',
      url: 'https://www.instagram.com/mihiraramana.music',
      icon: '🎤',
    },
    {
      type: 'email',
      label: 'Email Us',
      url: 'mailto:aroha.music1@gmail.com',
      icon: '✉️',
    },
  ],
  availability: 'Now accepting bookings — reach out to lock your date!',
};

// ── Contact ─────────────────────────────────────────────────────────────────
export const contact = {
  email: 'aroha.music1@gmail.com',
  phones: ['+91 91827 19956', '+91 63042 45679'],
};

// ── Event Types ─────────────────────────────────────────────────────────────
export const eventTypes = [
  'Corporate Events',
  'Private Parties',
  'Weddings & Sangeets',
  'Café & Lounge Gigs',
  'College Fests',
  'Cultural Events',
];
