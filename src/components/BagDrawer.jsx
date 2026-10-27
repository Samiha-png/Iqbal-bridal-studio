import { X, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function BagDrawer() {
  const { bagOpen, setBagOpen, bag, removeFromBag, setCheckoutOpen } = useStore();
  if (!bagOpen) return null;

  const handleCheckout = () => {
    setBagOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <>
      <div className="overlay" onClick={() => setBagOpen(false)} style={{ zIndex: 205 }} />
      <div className="drawer">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--line)' }}>
          <div>
            <p className="eyebrow no-lines" style={{ marginBottom: '0.4rem' }}>Your Bag</p>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--serif-display)' }}>Shopping Bag</h3>
          </div>
          <button className="icon-btn" onClick={() => setBagOpen(false)}><X size={20} /></button>
        </div>

        {bag.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--taupe)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem' }}>
              Your bag is empty.
            </p>
            <button className="btn btn-ghost" style={{ marginTop: '1.5rem' }} onClick={() => setBagOpen(false)}>
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            <div style={{ flex: 1 }}>
              {bag.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--line)' }}>
                  <img src={item.image} alt={item.name} style={{ width: 80, height: 100, objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'var(--serif-display)', fontSize: '1.15rem', marginBottom: '0.3rem' }}>{item.name}</p>
                    <p style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>Qty: {item.qty}</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--taupe)', marginTop: '0.4rem', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>{item.price}</p>
                  </div>
                  <button className="icon-btn" onClick={() => removeFromBag(item.id)}><Trash2 size={16} strokeWidth={1.5} /></button>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)' }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--mauve)', marginBottom: '1.2rem', fontStyle: 'italic', fontFamily: 'var(--serif)', textAlign: 'center' }}>
                Demo bag — pricing on request, no payment processed.
              </p>
              <button className="btn btn-solid" style={{ width: '100%', justifyContent: 'center' }} onClick={handleCheckout}>
                <span>Proceed to Checkout</span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}