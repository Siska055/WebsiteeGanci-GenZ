// ===================================================
//   KawatLucu – main.js
//   Navbar, Filter, Scroll Effects, Animations
// ===================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR SCROLL ----
  const navbar = document.getElementById('navbar');
  const handleNavScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ---- MOBILE HAMBURGER ----
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const bars = hamburger.querySelectorAll('span');
    const isOpen = navLinks.classList.contains('open');
    bars[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    bars[1].style.opacity   = isOpen ? '0' : '1';
    bars[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const bars = hamburger.querySelectorAll('span');
      bars[0].style.transform = '';
      bars[1].style.opacity   = '1';
      bars[2].style.transform = '';
    });
  });

  // ---- PRODUCT FILTER ----
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeSlideIn 0.35s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ---- SCROLL ANIMATIONS (IntersectionObserver) ----
  const observeTargets = document.querySelectorAll(
    '.about-card, .product-card, .contact-card, .testi-card, .step, .order-note'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Add initial hidden state via JS (graceful degradation if JS disabled)
  observeTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${(i % 4) * 0.08}s, transform 0.5s ease ${(i % 4) * 0.08}s`;
    observer.observe(el);
  });

  // When "anim-in" class is added, reveal the element
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .anim-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleTag);

  // ---- ACTIVE NAV LINK ON SCROLL ----
  const sections = document.querySelectorAll('section[id]');
  const navAnchorLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchorLinks.forEach(a => {
            a.classList.toggle('nav-active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(sec => sectionObserver.observe(sec));

  // Inject nav-active style
  const navActiveStyle = document.createElement('style');
  navActiveStyle.textContent = `.nav-links a.nav-active { color: var(--pink-deep) !important; } .nav-links a.nav-active::after { width: 100% !important; }`;
  document.head.appendChild(navActiveStyle);

  // ---- FLOATING WA BUTTON – Hide on top, Show on scroll ----
  const floatWa = document.querySelector('.float-wa');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      floatWa.style.opacity = '1';
      floatWa.style.pointerEvents = 'auto';
    } else {
      floatWa.style.opacity = '0';
      floatWa.style.pointerEvents = 'none';
    }
  }, { passive: true });
  floatWa.style.transition = 'opacity 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease';
  floatWa.style.opacity = '0';
  floatWa.style.pointerEvents = 'none';

  // ---- HERO CARD STAGGERED ANIMATION ----
  const floatingCards = document.querySelectorAll('.floating-card');
  floatingCards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.15}s`;
  });

  // ---- SMOOTH ANCHOR SCROLL ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- COUNTER ANIMATION (Hero Stats) ----
  const statNums = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent;
          const isPercent = text.includes('%');
          const hasPlus   = text.includes('+');
          const target    = parseInt(text.replace(/[^0-9]/g, ''), 10);
          let current     = 0;
          const step      = Math.ceil(target / 60);

          const tick = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + (hasPlus ? '+' : isPercent ? '%' : '');
            if (current >= target) clearInterval(tick);
          }, 25);

          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.8 }
  );
  statNums.forEach(num => counterObserver.observe(num));

  console.log('🐾 KawatLucu website loaded successfully!');
});
