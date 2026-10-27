import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function NewArrivals() {
  const { wishlist, toggleWishlist, setSelectedProduct } = useStore();
  const items = products.slice(2, 5);

  return (
    <section className="section container">
      <div style={{ textAlign: 'center' }}>
        <p className="eyebrow">New Arrivals</p>
        <h2 className="section-title" style={{ marginTop: '1rem' }}>Just <em>Unveiled</em></h2>
        <div className="ornament"><span className="ornament-diamond" /></div>
      </div>

      <div className="product-grid">
        {items.map((p, i) => (
          <motion.div key={p.id} className="product-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="p-img-wrap">
              <img src={p.image} alt={p.name} />
              <button
                className={`wish-btn ${wishlist.includes(p.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(p.id)}
                aria-label="Wishlist">
                <Heart size={16} fill={wishlist.includes(p.id) ? 'currentColor' : 'none'} strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-info">
              <p className="p-eyebrow">{p.category}</p>
              <p className="p-name">{p.name}</p>
              <p className="p-price">{p.price}</p>
              <button className="p-link" onClick={() => setSelectedProduct(p)}>
                View Details <span>→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}