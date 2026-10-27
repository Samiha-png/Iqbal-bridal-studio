import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

const images = [
  '/images/bridal-wear.jpg',
  '/images/red-bridal-wear.jpg',
  '/images/walima-gown.jpg',
  '/images/white-nikkah-dress.jpg',
  '/images/pink-gown.jpg',
  '/images/blue-gharara.jpg',
  '/images/burgundy-bridal-wear.jpg',
  '/images/bridal-wear.jpg', // Repeated to fill the grid symmetrically if needed
];

export default function InstagramGallery() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <section className="section container">
      <div style={{ textAlign: 'center' }}>
        <p className="eyebrow">Follow Our Journey</p>
        <h2 className="section-title" style={{ marginTop: '1rem' }}>@iqbalsbridalstudio</h2>
        <div className="ornament"><span className="ornament-diamond" /></div>
      </div>
      <div className="insta-grid">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            onClick={() => setLightbox(src)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          />
        ))}
      </div>
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}