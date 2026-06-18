(() => {
  const header = document.getElementById('site-header');
  const form = document.getElementById('booking-form');
  const submitBtn = document.getElementById('form-submit');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  // Sticky header background on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Thank you — I’ll be in touch ✓';
    submitBtn.classList.add('submitted');
  });

  // Mobile menu toggle
  mobileBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    mobileBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();
