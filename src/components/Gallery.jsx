import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/bandData';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import './Gallery.css';

export default function Gallery() {
  const [ref, controls] = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = (img, idx) => {
    setSelectedImage(img);
    setLightboxIdx(idx);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (direction, e) => {
    e.stopPropagation();
    const newIdx = (lightboxIdx + direction + galleryImages.length) % galleryImages.length;
    setLightboxIdx(newIdx);
    setSelectedImage(galleryImages[newIdx]);
  };

  return (
    <section id="gallery" className="gallery">
      <motion.div
        ref={ref}
        className="section gallery__inner"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={fadeUp}>
          <p className="section-label">Gallery</p>
          <h2 className="section-title">Moments That Matter</h2>
          <p className="section-subtitle">
            Snapshots from our live performances, backstage moments, and the energy we bring to every event.
          </p>
        </motion.div>

        {/* Collage Grid */}
        <motion.div className="collage" variants={fadeUp}>
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              className={`collage__item collage__item--${idx + 1}`}
              onClick={() => openLightbox(img, idx)}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" draggable="false" />
              <div className="collage__overlay">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Lightbox with navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox__content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} decoding="async" />
              <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => navigateLightbox(-1, e)} aria-label="Previous">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="lightbox__nav lightbox__nav--next" onClick={(e) => navigateLightbox(1, e)} aria-label="Next">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <div className="lightbox__counter">
                {lightboxIdx + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
