import { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const links = ['Home', 'Collections', 'Bridal Wear', 'Festive Wear', 'Our Story', 'Journal', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { setSearchOpen, setBagOpen, bag } = useStore();

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <button className="icon-btn mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="brand">
          <div className="brand-main">IQBAL'S</div>
          <div className="brand-sub">Bridal Studio</div>
        </div>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button className="icon-btn" onClick={() => setBagOpen(true)} aria-label="Bag">
            <ShoppingBag size={19} strokeWidth={1.5} />
            {bag.length > 0 && <span className="badge">{bag.reduce((s, i) => s + i.qty, 0)}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}