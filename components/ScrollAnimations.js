'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Apply animation classes to elements
    document.querySelectorAll('.section-header').forEach((el) => {
      el.classList.add('animate-fade-up');
    });

    document.querySelectorAll('.philosophy-header').forEach((el) => {
      el.classList.add('animate-fade-up');
    });

    document.querySelectorAll('.philosophy-content').forEach((el) => {
      el.classList.add('animate-fade-up');
    });

    // Hero content
    document.querySelectorAll('.hero-content').forEach((el) => {
      el.classList.add('animate-fade-up');
    });

    // Stagger grids
    document.querySelectorAll(
      '.occasions-grid, .garments-grid, .process-grid, .testimonials-grid, .faq-home-grid, .inspiration-grid'
    ).forEach((el) => {
      el.classList.add('stagger-children');
    });

    // Cards with scale
    document.querySelectorAll(
      '.occasion-card, .garment-category, .testimonial-card, .faq-home-item, .inspiration-item'
    ).forEach((el, index) => {
      el.classList.add('animate-scale');
      el.style.transitionDelay = `${index * 0.08}s`;
    });

    // Process steps
    document.querySelectorAll('.process-step').forEach((el, index) => {
      el.classList.add('animate-fade-up');
      el.style.transitionDelay = `${index * 0.15}s`;
    });

    // CTA section
    document.querySelectorAll('.cta-content').forEach((el) => {
      el.classList.add('animate-scale');
    });

    // Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-30px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-fade-up, .animate-scale, .stagger-children').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
