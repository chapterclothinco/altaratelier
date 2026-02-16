export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-eyebrow">Weddings &amp; Bridal</p>
            <h1 className="hero-title">
              <span>Bridal Apparel Your</span>
              <span>Party Will <span className="accent">Actually Keep</span></span>
            </h1>
            <p className="hero-description">
              From silk getting-ready robes to reception exit jackets — every piece designed around your vision, crafted in premium materials, made to treasure long after the last dance.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-large">Begin Your Design</a>
              <a href="#process" className="btn btn-secondary btn-large">See Our Process</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              {/* Add your hero image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy has-texture" id="about">
        <div className="container">
          <div className="philosophy-layout">
            <div className="philosophy-header">
              <span className="section-tag">Our Philosophy</span>
              <h2 className="section-title">The Altar Atelier <em>Approach</em></h2>
            </div>
            <div className="philosophy-content">
              <p className="philosophy-lead">
                Your wedding deserves more than decorated blanks with a monogram slapped on.
              </p>
              <p className="philosophy-body">
                Every piece we create is fully custom — designed from scratch to reflect your aesthetic, cut from premium materials, and crafted to become keepsakes your bridal party will treasure for years.
              </p>
              <p className="philosophy-body">
                Whether you&apos;re envisioning matching silk robes for the morning of, coordinated loungewear for the bachelorette, or custom jackets for the reception exit — we bring your vision to life with intention and artistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="occasions" id="occasions">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Collections</span>
            <h2 className="section-title">Crafted for Every <em>Moment</em></h2>
            <p className="section-description">
              From the first toast of the bachelorette to the last sparkler send-off, we create pieces for every chapter of your celebration.
            </p>
          </div>
          <div className="occasions-grid">
            <div className="occasion-card">
              <div className="occasion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="occasion-title">Getting Ready</h3>
              <ul className="occasion-items">
                <li>Custom silk robes with embroidery</li>
                <li>Matching pajama sets</li>
                <li>Personalized button-downs</li>
                <li>Luxe loungewear coordinates</li>
              </ul>
            </div>
            <div className="occasion-card">
              <div className="occasion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M8 2v4m8-4v4" />
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                </svg>
              </div>
              <h3 className="occasion-title">The Celebration</h3>
              <ul className="occasion-items">
                <li>Custom bridal party jackets</li>
                <li>Reception exit outerwear</li>
                <li>Coordinated cover-ups</li>
                <li>Elevated personalized pieces</li>
              </ul>
            </div>
            <div className="occasion-card">
              <div className="occasion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91" />
                  <path d="M2 2l20 20" />
                  <path d="M17 2l4 4-4 4" />
                </svg>
              </div>
              <h3 className="occasion-title">The Getaway</h3>
              <ul className="occasion-items">
                <li>Honeymoon pieces</li>
                <li>&ldquo;Just Married&rdquo; premium apparel</li>
                <li>Travel-ready coordinates</li>
                <li>Resort-wear sets</li>
              </ul>
            </div>
            <div className="occasion-card">
              <div className="occasion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M8 22h8" />
                  <path d="M12 11V2" />
                  <path d="M16 7l-4-4-4 4" />
                  <path d="M12 17a5 5 0 0 0 5-5c0-2-2-4-5-7-3 3-5 5-5 7a5 5 0 0 0 5 5z" />
                </svg>
              </div>
              <h3 className="occasion-title">Bachelorette &amp; Beyond</h3>
              <ul className="occasion-items">
                <li>Destination matching sets</li>
                <li>Party weekend coordinates</li>
                <li>Premium basics</li>
                <li>Subtle personalization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Garments Section */}
      <section className="garments" id="garments">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Create</span>
            <h2 className="section-title">If You Can Dream It, We Can <em>Craft</em> It</h2>
          </div>
          <p className="garments-intro">
            Because we&apos;re a cut-and-sew operation — not a decoration shop — we can create virtually any garment from scratch. No limitations, no templates. Here&apos;s what our brides love most:
          </p>
          <div className="garments-grid">
            <div className="garment-category">
              <h3>Robes &amp; Loungewear</h3>
              <ul className="garment-list">
                <li>Silk robes</li>
                <li>Satin robes</li>
                <li>Waffle-knit robes</li>
                <li>Kimono wraps</li>
                <li>PJ sets</li>
                <li>Sleep shirts</li>
              </ul>
            </div>
            <div className="garment-category">
              <h3>Tops &amp; Layers</h3>
              <ul className="garment-list">
                <li>Button-downs</li>
                <li>Cropped hoodies</li>
                <li>Crewnecks</li>
                <li>Tank tops</li>
                <li>Off-shoulder tops</li>
                <li>Cardigans</li>
              </ul>
            </div>
            <div className="garment-category">
              <h3>Outerwear &amp; Jackets</h3>
              <ul className="garment-list">
                <li>Denim jackets</li>
                <li>Bomber jackets</li>
                <li>Varsity jackets</li>
                <li>Blazers</li>
                <li>Leather jackets</li>
                <li>Shackets</li>
              </ul>
            </div>
            <div className="garment-category">
              <h3>Bottoms</h3>
              <ul className="garment-list">
                <li>Joggers</li>
                <li>Matching shorts</li>
                <li>Bike shorts</li>
                <li>Wide-leg pants</li>
                <li>Pajama pants</li>
              </ul>
            </div>
            <div className="garment-category">
              <h3>Dresses &amp; One-Pieces</h3>
              <ul className="garment-list">
                <li>T-shirt dresses</li>
                <li>Slip dresses</li>
                <li>Rompers</li>
                <li>Jumpsuits</li>
                <li>Cover-ups</li>
              </ul>
            </div>
            <div className="garment-category">
              <h3>Swimwear &amp; Resort</h3>
              <ul className="garment-list">
                <li>One-piece swimsuits</li>
                <li>Bikini sets</li>
                <li>Sarongs</li>
                <li>Resort coordinates</li>
              </ul>
            </div>
            <div className="garment-category">
              <h3>Accessories</h3>
              <ul className="garment-list">
                <li>Tote bags</li>
                <li>Makeup bags</li>
                <li>Sleep masks</li>
                <li>Scrunchies</li>
                <li>Bandanas</li>
              </ul>
            </div>
          </div>
          <div className="garments-cta">
            <p>Don&apos;t see exactly what you&apos;re imagining? That&apos;s the beauty of custom. If you can describe it, we can design and produce it.</p>
            <a href="#contact" className="btn btn-primary">Have something specific in mind? Let&apos;s talk</a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">How We <em>Work</em></h2>
            <p className="section-description">
              From first conversation to final delivery, we make creating custom bridal apparel effortless.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span className="step-number">01</span>
              <h3 className="step-title">Discovery</h3>
              <p className="step-description">
                Share your vision, your wedding aesthetic, and your timeline. We listen to what makes your celebration unique before designing anything.
              </p>
            </div>
            <div className="process-step">
              <span className="step-number">02</span>
              <h3 className="step-title">Design</h3>
              <p className="step-description">
                Our team creates fully custom concepts tailored to your vision — color palettes that match your florals, silhouettes your party will actually want to wear.
              </p>
            </div>
            <div className="process-step">
              <span className="step-number">03</span>
              <h3 className="step-title">Production</h3>
              <p className="step-description">
                Premium materials, expert construction, meticulous quality control. Every piece is cut-and-sew manufactured — never printed on blanks.
              </p>
            </div>
            <div className="process-step">
              <span className="step-number">04</span>
              <h3 className="step-title">Delivery</h3>
              <p className="step-description">
                Seamless logistics with your timeline in mind. Delivered beautifully packaged, ready for your big moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials has-texture">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Real Stories</span>
            <h2 className="section-title">Real Weddings, Real <em>Moments</em></h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">The quality was unbelievable. Our bachelorette crew didn&apos;t want to take them off all weekend. Worth every penny.</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <span className="author-name">Sarah M.</span>
                  <span className="author-event">Bachelorette Weekend, Party of 10</span>
                  <span className="author-date">September 2025</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">Finally, bridal robes that photograph beautifully AND feel amazing. My bridesmaids still wear theirs months later.</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <span className="author-name">Jessica K.</span>
                  <span className="author-event">Garden Wedding, Party of 8</span>
                  <span className="author-date">October 2025</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">They understood our boho aesthetic perfectly — the pieces felt like part of the wedding design, not an afterthought.</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <span className="author-name">Amanda L.</span>
                  <span className="author-event">Vineyard Wedding, Sonoma</span>
                  <span className="author-date">August 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Inspiration Section */}
      <section className="inspiration" id="inspiration">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Design Inspo</span>
            <h2 className="section-title">Get <em>Inspired</em></h2>
            <p className="section-description">
              Browse our mood boards, past projects, and design details. Every piece starts with a vision.
            </p>
          </div>
          <div className="inspiration-grid">
            <div className="inspiration-item inspiration-item--tall">
              <div className="inspiration-placeholder">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span>Silk Robes</span>
              </div>
            </div>
            <div className="inspiration-item">
              <div className="inspiration-placeholder">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span>Color Palette</span>
              </div>
            </div>
            <div className="inspiration-item">
              <div className="inspiration-placeholder">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span>Embroidery Detail</span>
              </div>
            </div>
            <div className="inspiration-item inspiration-item--wide">
              <div className="inspiration-placeholder">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span>Bridal Party</span>
              </div>
            </div>
            <div className="inspiration-item">
              <div className="inspiration-placeholder">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span>Fabric Swatches</span>
              </div>
            </div>
            <div className="inspiration-item">
              <div className="inspiration-placeholder">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                <span>Getting Ready</span>
              </div>
            </div>
          </div>
          <div className="inspiration-cta">
            <p>Have a Pinterest board or vision in mind? We&apos;d love to see it.</p>
            <a href="#contact" className="btn btn-secondary">Share Your Inspiration</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-home-section" id="faq">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
          </div>
          <div className="faq-home-grid">
            <div className="faq-home-item">
              <h4>What&apos;s the minimum order?</h4>
              <p>We start at just 8 pieces for bridal parties — perfect for intimate weddings or full wedding parties.</p>
            </div>
            <div className="faq-home-item">
              <h4>How far in advance should I order?</h4>
              <p>We recommend starting 6-8 weeks before your event. Rush orders (4 weeks) are available for an additional fee.</p>
            </div>
            <div className="faq-home-item">
              <h4>Can you match my wedding colors?</h4>
              <p>Absolutely. We work with Pantone colors and can match your exact palette — whether that&apos;s dusty blue, terracotta, or anything in between.</p>
            </div>
            <div className="faq-home-item">
              <h4>Do you offer samples?</h4>
              <p>Yes! We can create sample pieces so you can feel the quality before placing your full order.</p>
            </div>
            <div className="faq-home-item">
              <h4>Can my bridesmaids be different sizes?</h4>
              <p>Of course. Every piece is custom, so we accommodate all sizes seamlessly — that&apos;s the beauty of made-to-order.</p>
            </div>
            <div className="faq-home-item">
              <h4>What sets you apart from other bridal apparel?</h4>
              <p>Everything is cut-and-sew manufactured from scratch — not decorated blanks. Premium materials, real design, keepsake quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="trust-stats">
        <div className="container">
          <div className="trust-stats-grid">
            <div className="trust-stat">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span className="trust-number">500+</span>
              <span className="trust-label">Happy Bridal Parties</span>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="trust-number">4.9</span>
              <span className="trust-label">Average Rating</span>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="trust-number">100%</span>
              <span className="trust-label">Custom Cut-and-Sew</span>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <span className="trust-number">98%</span>
              <span className="trust-label">Would Recommend</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Create Something <em>Worth Keeping?</em></h2>
            <p className="cta-description">Let&apos;s design custom pieces your bridal party will treasure long after the last dance.</p>
            <a href="mailto:hello@altaratelier.com" className="btn btn-primary btn-large">Start Your Consultation</a>
            <p className="cta-email">or email us at <a href="mailto:hello@altaratelier.com">hello@altaratelier.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
