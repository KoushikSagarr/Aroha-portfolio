<div align="center">

# 🎸 AROHA Music Portfolio

**Live Music That Moves You**
<br>
*Bollywood · Tollywood · English Hits*

[![React](https://img.shields.io/badge/React-19.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0+-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A premium, high-performance portfolio website built for **AROHA Music**, a high-energy live band. Designed to act as an interactive press kit for client outreach and event bookings.

</div>

---

## ✨ Features

- **Premium Dark Aesthetic:** Immersive dark mode design with elegant gold (`#d4a853`) and amber accents, inspired by concert stage lighting.
- **Dynamic Animations:** Scroll-triggered fade-ups, smooth staggering, and interactive hover states powered by `framer-motion`.
- **Infinite Marquee Ticker:** A seamless edge-to-edge CSS infinite scroll showcasing the types of events the band plays.
- **Glassmorphism UI:** Modern frosted-glass cards with subtle borders and blurred backgrounds (`backdrop-filter`) for a highly professional look.
- **Interactive Photo Collage:** A customized 12-column CSS grid gallery mimicking a creative collage, complete with a fully navigable, animated lightbox.
- **Centralized Data Layer:** All band information, member bios, social links, and gallery data are managed from a single `bandData.js` file for easy updates without touching UI components.
- **Fully Responsive:** Meticulously crafted to look stunning on ultra-wide desktop monitors down to mobile screens.

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) via [Vite](https://vitejs.dev/) for lightning-fast HMR and optimized builds.
- **Styling:** Vanilla CSS with custom CSS variables (Design Tokens) to maintain a strict, cohesive aesthetic without the overhead of heavy styling libraries.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid, spring-based interactions and scroll visibility detection.
- **Routing:** [React Router v7](https://reactrouter.com/) (ready for multi-page expansion if needed).

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/aroha-port.git
   cd aroha-port
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open your browser and navigate to `http://localhost:5173`.

## 📁 Project Structure

```text
src/
├── assets/         # Images, logos, and raw media files
├── components/     # React UI components (Hero, About, Gallery, etc.)
│   ├── Hero.jsx    # Animated landing section
│   ├── About.jsx   # Infinite marquee & band USPs
│   ├── Gallery.jsx # Interactive 12-col collage & Lightbox
│   └── BookUs.jsx  # Call-to-action & contact integration
├── data/           
│   └── bandData.js # 🧠 Single Source of Truth for all text/media content
├── hooks/          
│   └── useScrollAnimation.js # Reusable intersection observer hook
├── App.jsx         # Main layout assembler
└── index.css       # Global design tokens and resets
```

## 📝 Updating Content

The application is designed for easy maintenance. If you need to update a band member's bio, change an Instagram link, or add a new photo to the gallery, simply edit `src/data/bandData.js`. The UI will automatically reflect the changes across the entire site.

## 📱 Contact / Booking

**AROHA Music**
- ✉️ **Email:** [aroha.music1@gmail.com](mailto:aroha.music1@gmail.com)
- 📞 **Phone:** +91 91827 19956 | +91 63042 45679
- 📸 **Instagram:** [@aroha_music_](https://www.instagram.com/aroha_music_)

<div align="center">
  <i>Made with ❤️ and lots of 🎵</i>
</div>
