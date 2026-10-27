export default function FeaturedBanner() {
  return (
    <section className="feature-banner">
      <p className="eyebrow no-lines">Featured Collection</p>
      <h2>The Nikkah Edit</h2>
      <p>Delicate ivory ensembles for the most sacred of moments.</p>
      <a href="#collections" className="btn btn-outline" style={{ borderColor: 'var(--gold)', color: 'var(--ivory)' }}>
        Explore the Collection
      </a>
    </section>
  );
}