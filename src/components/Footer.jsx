export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-main">IQBAL'S</div>
            <div className="brand-sub">Bridal Studio</div>
            <p>Thoughtfully designed bridal couture for moments that become memories.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 5L2 7"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#journal">Journal</a></li>
              <li><a href="#appointment">Book Appointment</a></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>[Studio Address Placeholder]</li>
              <li>[City, Pakistan]</li>
              <li>[Phone Placeholder]</li>
              <li>[Email Placeholder]</li>
            </ul>
          </div>
          <div>
            <h4>Care</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Care Instructions</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Iqbal's Bridal Studio</span>
          <span>Demo Website · Placeholder Content</span>
        </div>
      </div>
    </footer>
  );
}