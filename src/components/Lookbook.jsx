import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

const looks = [
  '/images/red-bridal-wear.jpg',
  '/images/walima-gown.jpg',
  '/images/pink-gown.jpg',
  '/images/burgundy-bridal-wear.jpg',
];

export default function Lookbook() {
  const [lb, setLb] = useState(null);
  return (
    <section className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="eyebrow">Lookbook</p>
        <h2 className="section-title" style={{ marginTop: '1rem' }}>The <em>Editorial</em></h2>
        <div className="ornament"><span className="ornament-diamond" /></div>
        <p className="section-lead">
          A curated visual story from the atelier archive.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {looks.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Look ${i + 1}`}
            onClick={() => setLb(src)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              aspectRatio: '3/4',
              objectFit: 'cover',
              cursor: 'pointer',
              width: '100%',
              transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.filter = 'brightness(0.9)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
          />
        ))}
      </div>
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </section>
  );
}