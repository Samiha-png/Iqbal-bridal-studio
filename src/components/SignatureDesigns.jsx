import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function SignatureDesigns() {
  const { wishlist, toggleWishlist, setSelectedProduct } = useStore();

  return (
    <section className="section container">
      <div className="products-head">
        <div>
          <p className="eyebrow">Signature Designs</p>
          <h2 className="section-title">The Atelier <em>Selection</em></h2>
        </div>
        <p className="lead" style={{ color: 'var(--taupe)', fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic' }}>
          Each piece is handcrafted to order. Prices available on request.
        </p>
      </div>

      <div className="product-grid">
        {products.slice(0, 3).map((p, i) => (
          <motion.div key={p.id} className={`product-card ${i === 1 ? 'featured' : ''}`}
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