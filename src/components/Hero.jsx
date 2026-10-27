import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div className="hero-text"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <p className="hero-label">Bridal Couture · Atelier 2026</p>
          <h1 className="hero-title">
            Your Story,<br />
            Woven in <em>Elegance</em>
          </h1>
          <p className="hero-sub">
            Thoughtfully designed bridal couture for moments that become memories.
          </p>
          <div className="hero-btns">
            <a href="#collections" className="btn btn-solid"><span>Discover Our Designs</span></a>
            <a href="#appointment" className="btn btn-ghost">Begin Your Bridal Journey</a>
          </div>
        </motion.div>

        <motion.div className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero-frame" />
          
          {/* MAIN HERO IMAGE */}
          <img className="hero-img-main"
            src="/images/bridal-wear.jpg"
            alt="Bridal couture main" />
            
          {/* SMALL OVERLAPPING IMAGE */}
          <img className="hero-img-small"
            src="/images/blue-gharara.jpg"
            alt="Bridal detail" />
            
          <span className="hero-caption">Handcrafted · Lahore</span>
        </motion.div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}