import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo">
              <Image
                src="/assets/Logos/AltarAtelier.svg"
                alt="Altar Atelier"
                width={32}
                height={32}
                className="footer-logo-icon"
              />
              <span className="logo-text">Altar Atelier</span>
            </a>
            <p className="footer-tagline">Custom bridal apparel for moments worth remembering.</p>
            <p className="footer-stitched">A <a href="https://gostitched.com" target="_blank" rel="noopener noreferrer">Stitched</a> Brand</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigate</h4>
              <a href="#occasions">Collections</a>
              <a href="/catalog">Catalog</a>
              <a href="#garments">What We Create</a>
              <a href="#process">Process</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <a href="mailto:hello@altaratelier.com">hello@altaratelier.com</a>
              <a href="#contact">Start a Project</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Altar Atelier. All rights reserved.</p>
          <a href="https://gostitched.com" target="_blank" rel="noopener noreferrer">A Stitched Brand</a>
        </div>
      </div>
    </footer>
  );
}
