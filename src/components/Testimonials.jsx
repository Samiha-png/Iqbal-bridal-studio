import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="section container">
      <div style={{ textAlign: 'center' }}>
        <p className="eyebrow">Real Bridal Experience</p>
        <h2 className="section-title" style={{ marginTop: '1rem' }}>Words from <em>Our Brides</em></h2>
        <div className="ornament"><span className="ornament-diamond" /></div>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--taupe)', fontSize: '0.9rem' }}>
          Demo content — not real customer reviews.
        </p>
      </div>
      <div className="testi-grid">
        {testimonials.map(t => (
          <div key={t.id} className="testi">
            <p>{t.quote}</p>
            <span className="t-name">{t.name}</span>
            <span className="t-tag">{t.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}