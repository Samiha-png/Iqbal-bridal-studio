import { useState } from 'react';
import { X } from 'lucide-react';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen, setSelectedProduct } = useStore();
  const [query, setQuery] = useState('');
  if (!searchOpen) return null;

  const results = query
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="search-overlay">
      <button
        className="modal-close"
        style={{ top: '2rem', right: '2rem' }}
        onClick={() => { setSearchOpen(false); setQuery(''); }}>
        <X size={20} />
      </button>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p className="eyebrow">Search the Atelier</p>
      </div>

      <input
        className="search-input"
        placeholder="Search designs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />

      <div className="search-results">
        {query && results.length === 0 && (
          <p style={{ color: 'var(--taupe)', textAlign: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem' }}>
            No results found for "{query}"
          </p>
        )}
        {results.map(p => (
          <div
            key={p.id}
            onClick={() => { setSelectedProduct(p); setSearchOpen(false); setQuery(''); }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              padding: '1.2rem 0',
              borderBottom: '1px solid var(--line)',
              cursor: 'pointer',
              alignItems: 'center',
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <img src={p.image} alt={p.name} style={{ width: 70, height: 88, objectFit: 'cover' }} />
            <div>
              <p className="p-eyebrow">{p.category}</p>
              <p style={{ fontFamily: 'var(--serif-display)', fontSize: '1.3rem', marginTop: '0.3rem' }}>{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}