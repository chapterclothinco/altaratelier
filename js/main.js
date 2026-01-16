// ================================
// Altar Atelier - Wedding & Bridal
// Custom Apparel for Moments Worth Keeping
// ================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    createParticles();
});

// ================================
// Floating Particles (Rose Gold)
// ================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    // Fewer, more delicate particles for wedding aesthetic
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size (slightly larger for elegance)
        const size = Math.random() * 5 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Slower, more gentle animation for wedding feel
        particle.style.animationDuration = (Math.random() * 25 + 15) + 's';
        particle.style.animationDelay = (Math.random() * 12) + 's';

        container.appendChild(particle);
    }
}

// ================================
// Navbar Scroll Effect
// ================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ================================
// Mobile Menu
// ================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;

    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ================================
// Smooth Scroll
// ================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const offset = 100;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            smoothScrollTo(targetPosition, 1200);
        });
    });
}

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

// ================================
// Scroll Animations
// ================================
function initScrollAnimations() {
    // Apply animation classes to elements
    document.querySelectorAll('.section-header').forEach(el => {
        el.classList.add('animate-fade-up');
    });

    document.querySelectorAll('.philosophy-header').forEach(el => {
        el.classList.add('animate-fade-up');
    });

    document.querySelectorAll('.philosophy-content').forEach(el => {
        el.classList.add('animate-fade-up');
    });

    // Hero content
    document.querySelectorAll('.hero-content').forEach(el => {
        el.classList.add('animate-fade-up');
    });

    // Stagger grids
    document.querySelectorAll('.occasions-grid, .garments-grid, .process-grid, .testimonials-grid, .faq-home-grid, .inspiration-grid').forEach(el => {
        el.classList.add('stagger-children');
    });

    // Cards with scale
    document.querySelectorAll('.occasion-card, .garment-category, .testimonial-card, .faq-home-item, .inspiration-item').forEach((el, index) => {
        el.classList.add('animate-scale');
        el.style.transitionDelay = `${index * 0.08}s`;
    });

    // Process steps
    document.querySelectorAll('.process-step').forEach((el, index) => {
        el.classList.add('animate-fade-up');
        el.style.transitionDelay = `${index * 0.15}s`;
    });

    // CTA section
    document.querySelectorAll('.cta-content').forEach(el => {
        el.classList.add('animate-scale');
    });

    // Intersection Observer with generous threshold for elegant reveals
    const observerOptions = {
        root: null,
        rootMargin: '-30px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-fade-up, .animate-scale, .stagger-children').forEach(el => {
        observer.observe(el);
    });
}
