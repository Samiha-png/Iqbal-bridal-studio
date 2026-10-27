import { motion } from 'framer-motion';
import { journal } from '../data/journal';

export default function BridalJournal() {
  return (
    <section className="section container" id="journal">
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p className="eyebrow">The Bridal Journal</p>
        <h2 className="section-title" style={{ marginTop: '1rem' }}>Notes & <em>Inspiration</em></h2>
        <div className="ornament"><span className="ornament-diamond" /></div>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--taupe)', fontSize: '0.95rem' }}>
          Sample editorial content for preview only.
        </p>
      </div>
      <div className="journal-grid">
        {journal.map((j, i) => (
          <motion.article key={j.id} className="journal-card"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: i * 0.08 }}>
            <img src={j.image} alt={j.title} />
            <div>
              <p className="j-meta">{j.date}</p>
              <h3>{j.title}</h3>
              <p>{j.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}