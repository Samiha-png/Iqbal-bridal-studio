import { X } from 'lucide-react';

export default function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <button
        className="modal-close"
        style={{ top: '2rem', right: '2rem' }}
        onClick={onClose}>
        <X size={22} />
      </button>
      <img
        src={src}
        alt="Lookbook"
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}