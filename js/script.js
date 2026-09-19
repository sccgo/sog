// ===========================================================
// عزنا بسبتمبر — Shared behaviour
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- top bar shadow on scroll ---- */
  const topbar = document.querySelector('.topbar');
  const onScroll = () => {
    if (!topbar) return;
    topbar.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- mark current page in nav ---- */
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });

  /* ---- reveal on scroll ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---- animated counters (stats) ---- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const countIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const locale = window.currentLang === 'en' ? 'en' : 'ar';
          el.textContent = Math.round(eased * target).toLocaleString(locale) + suffix;
          if (p < 1) {
            requestAnimationFrame(tick);
          } else {
            el.dataset.done = '1';
          }
        };
        requestAnimationFrame(tick);
        countIo.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countIo.observe(el));
  }

  /* ---- gentle falling sparkles: populates any [data-sparkle-count] field ---- */
  document.querySelectorAll('[data-sparkle-count]').forEach(container => {
    const count = parseInt(container.dataset.sparkleCount, 10) || 14;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'sparkle';
      const size = (1.5 + Math.random() * 2).toFixed(1);
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.left = (Math.random() * 100).toFixed(1) + '%';
      s.style.animationDuration = (9 + Math.random() * 8).toFixed(1) + 's';
      s.style.animationDelay = (Math.random() * -14).toFixed(1) + 's';
      container.appendChild(s);
    }
  });

  /* ---- hero logo video: play once, freeze on last frame, never loop ---- */
  document.querySelectorAll('.hero-logo-media').forEach(video => {
    video.loop = false;
    video.addEventListener('ended', () => {
      try { video.currentTime = video.duration; } catch (e) { /* no-op */ }
      video.pause();
    });
  });

  /* ---- presidents page: succession timeline <-> card sync ---- */
  const successionNodes = document.querySelectorAll('.succession-node');
  if (successionNodes.length) {
    const setActive = (target, on) => {
      const node = document.querySelector(`.succession-node[data-target="${target}"]`);
      const card = document.getElementById(target);
      if (node) node.classList.toggle('is-active', on);
      if (card) card.classList.toggle('is-active', on);
    };
    successionNodes.forEach(node => {
      const target = node.dataset.target;
      node.addEventListener('mouseenter', () => setActive(target, true));
      node.addEventListener('mouseleave', () => setActive(target, false));
      node.addEventListener('focus', () => setActive(target, true));
      node.addEventListener('blur', () => setActive(target, false));
      node.addEventListener('click', () => {
        const card = document.getElementById(target);
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
    document.querySelectorAll('.person-card').forEach(card => {
      card.addEventListener('mouseenter', () => setActive(card.id, true));
      card.addEventListener('mouseleave', () => setActive(card.id, false));
    });
  }

  /* ---- contact form (front-end only, no backend) ---- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      if (status) {
        status.textContent = window.currentLang === 'en'
          ? 'Your message has been sent successfully. We\u2019ll get back to you soon.'
          : 'تم إرسال رسالتك بنجاح، سنعاود التواصل معك قريبًا.';
      }
      form.reset();
    });
  }

  /* =========================================================
     Bilingual engine (Arabic default / English toggle)
     Any element carrying data-ar (and optionally data-en) gets
     its text swapped; <title> and <meta name="description">
     use the same data-ar / data-en attributes; images/links can
     carry data-alt-ar / data-alt-en for translated alt text.
     ========================================================= */

  const langToggle = document.getElementById('lang-toggle');
  const stored = localStorage.getItem('site-lang');
  window.currentLang = (stored === 'en') ? 'en' : 'ar';

  function applyLanguage(lang) {
    window.currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.body.classList.toggle('lang-en', lang === 'en');

    document.querySelectorAll('[data-ar]').forEach(el => {
      const val = lang === 'en' ? (el.dataset.en || el.dataset.ar) : el.dataset.ar;
      el.textContent = val;
    });

    document.querySelectorAll('[data-alt-ar]').forEach(el => {
      const val = lang === 'en' ? (el.dataset.altEn || el.dataset.altAr) : el.dataset.altAr;
      el.setAttribute('alt', val);
    });

    const titleEl = document.querySelector('title[data-ar]');
    if (titleEl) {
      document.title = lang === 'en' ? (titleEl.dataset.en || titleEl.dataset.ar) : titleEl.dataset.ar;
    }
    const metaDesc = document.querySelector('meta[name="description"][data-ar]');
    if (metaDesc) {
      metaDesc.setAttribute('content', lang === 'en' ? (metaDesc.dataset.en || metaDesc.dataset.ar) : metaDesc.dataset.ar);
    }

    // re-render any already-finished counters in the new numeral locale
    document.querySelectorAll('[data-count][data-done="1"]').forEach(el => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || '';
      const locale = lang === 'en' ? 'en' : 'ar';
      el.textContent = target.toLocaleString(locale) + suffix;
    });

    if (langToggle) {
      langToggle.textContent = lang === 'en' ? 'العربية' : 'EN';
      langToggle.setAttribute('aria-label', lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English');
    }

    localStorage.setItem('site-lang', lang);
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(window.currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  applyLanguage(window.currentLang);

});
