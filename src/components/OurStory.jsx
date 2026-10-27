import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section className="section container" id="story">
      <div className="story">
        <motion.div className="story-visual"
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="story-frame" />
          <img className="story-img"
            src="/images/bridal-wear.jpg"
            alt="Craftsmanship" />
          <div className="story-badge">
            <span>Hand<br />Crafted<br />with Love</span>
          </div>
        </motion.div>

        <motion.div className="story-text"
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <p className="eyebrow">Our Story</p>
          <h2 className="section-title" style={{ margin: '1rem 0 2rem' }}>The Art of<br /><em>Bridal Craft</em></h2>
          <p>[Editable placeholder — introduce the studio's craftsmanship, design philosophy, and fabric selection here. Awaiting authentic brand details.]</p>
          <p>[Editable placeholder — describe embroidery techniques, personalized bridal experience, and the studio's approach to custom couture.]</p>
          <a href="#appointment" className="btn btn-ghost" style={{ marginTop: '1rem' }}>Book a Consultation →</a>
        </motion.div>
      </div>
    </section>
  );
}