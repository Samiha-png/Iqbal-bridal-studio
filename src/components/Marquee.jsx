import { motion } from 'framer-motion';

export default function Marquee() {
  const words = ['Handcrafted Couture', 'Bridal Atelier', 'Made to Order', 'Bespoke Design', 'Timeless Elegance'];
  return (
    <div
      style={{
        background: 'var(--ink)',
        color: 'var(--champagne)',
        padding: '1.5rem 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(201,169,97,0.2)',
        borderBottom: '1px solid rgba(201,169,97,0.2)',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          display: 'flex', gap: '3rem', whiteSpace: 'nowrap',
          fontFamily: 'var(--serif)', fontSize: '1.1rem',
          fontStyle: 'italic', letterSpacing: '0.1em',
        }}
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '3rem' }}>
            {w}
            <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}