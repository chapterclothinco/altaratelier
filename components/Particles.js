'use client';

import { useEffect } from 'react';

export default function Particles() {
  useEffect(() => {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 5 + 3;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';

      particle.style.animationDuration = (Math.random() * 25 + 15) + 's';
      particle.style.animationDelay = (Math.random() * 12) + 's';

      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div className="particles" id="particles"></div>;
}
