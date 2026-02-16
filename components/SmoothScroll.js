'use client';

import { useEffect } from 'react';

function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Ease out cubic for smooth, elegant deceleration
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startPosition + distance * easeOutCubic);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const offset = 100;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

      smoothScrollTo(targetPosition, 1200);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
