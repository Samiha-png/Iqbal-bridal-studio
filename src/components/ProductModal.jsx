import { X, Heart, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, wishlist, toggleWishlist, addToBag } = useStore();
  if (!selectedProduct) return null;

  const isWished = wishlist.includes(selectedProduct.id);

  return (
    <div className="overlay" onClick={() => setSelectedProduct(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelectedProduct(null)}><X size={18} /></button>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <div className="modal-body">
          <p className="p-eyebrow">{selectedProduct.category}</p>
          <h2 style={{ fontSize: '2.2rem', margin: '0.5rem 0 1rem', fontFamily: 'var(--serif-display)' }}>{selectedProduct.name}</h2>
          <div className="ornament" style={{ margin: '1rem 0', justifyContent: 'flex-start' }}>
            <span className="ornament-diamond" />
          </div>
          <p style={{ color: 'var(--taupe)', marginBottom: '1.5rem', lineHeight: 1.8, fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic' }}>{selectedProduct.desc}</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '2rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>{selectedProduct.price}</p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <button className="btn btn-solid" onClick={() => { addToBag(selectedProduct); setSelectedProduct(null); }}>
              <ShoppingBag size={16} /> <span>Add to Bag</span>
            </button>
            <button className="btn btn-outline" onClick={() => toggleWishlist(selectedProduct.id)}>
              <Heart size={16} fill={isWished ? 'currentColor' : 'none'} /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}