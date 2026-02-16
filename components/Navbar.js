'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const navbarRef = useRef(null);
  const menuBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="nav-container">
          <a href="/" className="logo">
            <Image
              src="/assets/Logos/AltarAtelier.svg"
              alt="Altar Atelier"
              width={36}
              height={36}
              className="logo-icon"
            />
            <span className="logo-text">Altar Atelier</span>
          </a>
          <div className="nav-links">
            <a href="#occasions">Collections</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <a href="#contact" className="btn-nav">Begin Your Design</a>
          </div>
          <button
            className={`mobile-menu-btn${menuOpen ? ' active' : ''}`}
            ref={menuBtnRef}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`} ref={mobileMenuRef}>
        <div className="mobile-menu-links">
          <a href="#occasions" onClick={closeMenu}>Collections</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="mobile-cta" onClick={closeMenu}>Begin Your Design</a>
        </div>
      </div>
    </>
  );
}
