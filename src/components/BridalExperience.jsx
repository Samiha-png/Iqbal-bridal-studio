import { Scissors, Sparkles, Calendar, Heart } from 'lucide-react';

const items = [
  { icon: Scissors, title: 'Customization', desc: 'Personal design details tailored to your vision.' },
  { icon: Sparkles, title: 'Consultation', desc: 'Private sessions to explore fabrics and silhouettes.' },
  { icon: Calendar, title: 'Fittings', desc: 'Multiple fitting appointments for perfect drape.' },
  { icon: Heart, title: 'Personalized Support', desc: 'Dedicated guidance throughout your bridal journey.' },
];

export default function BridalExperience() {
  return (
    <section className="section container">
      <div style={{ textAlign: 'center' }}>
        <p className="eyebrow">The Bridal Experience</p>
        <h2 className="section-title" style={{ marginTop: '1rem' }}>A Personal <em>Journey</em></h2>
        <div className="ornament"><span className="ornament-diamond" /></div>
      </div>
      <div className="exp-grid">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="exp-item">
            <div className="exp-icon-wrap"><Icon size={22} strokeWidth={1.5} /></div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}