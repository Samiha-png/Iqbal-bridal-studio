import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { collections } from '../data/collections';

export default function CollectionShowcase() {
  return (
    <section className="section container" id="collections">
      <div className="collection-head">
        <p className="eyebrow">Our Collections</p>
        <h2 className="section-title">Designed for<br /><em>Every Moment</em></h2>
        <div className="ornament"><span className="ornament-diamond" /></div>
        <p className="section-lead">
          Six distinct collections, each telling its own chapter of your wedding story.
        </p>
      </div>

      <div className="collection-grid">
        {collections.map((c, i) => (
          <motion.figure key={c.id} className="collection-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <img src={c.image} alt={c.name} />
            <figcaption>
              <div>
                <span className="c-num">0{i + 1}</span>
                <div className="c-name">{c.name}</div>
              </div>
              <span className="c-arrow"><ArrowUpRight size={14} /></span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}