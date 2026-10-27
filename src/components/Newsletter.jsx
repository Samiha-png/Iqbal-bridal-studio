import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <section className="newsletter">
      <p className="eyebrow">Newsletter</p>
      <h2 className="section-title" style={{ marginTop: '1rem' }}>Join the <em>Atelier List</em></h2>
      <div className="ornament"><span className="ornament-diamond" /></div>
      <p style={{ color: 'var(--taupe)', maxWidth: 460, margin: '0 auto', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem' }}>
        Be the first to know about new collections and bridal events.
      </p>
      {done ? (
        <p style={{ marginTop: '2rem', color: 'var(--rose)', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>
          Demo signup — no email was stored.
        </p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}>
          <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required />
          <button type="submit"><ArrowRight size={20} strokeWidth={1.5} /></button>
        </form>
      )}
    </section>
  );
}