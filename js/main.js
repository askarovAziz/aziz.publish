const LANG_STORAGE_KEY = 'lang';

function updateUrlLanguage(language) {
  if (typeof window === 'undefined') {
    return;
  }

  const url = new URL(window.location.href);
  if (language === 'RU') {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', language.toLowerCase());
  }

  const nextPath = `${url.pathname}${url.search}${url.hash}`;
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (nextPath !== currentPath) {
    window.history.replaceState({}, '', nextPath);
  }
}

function getLanguageFromUrl() {
  if (typeof window === 'undefined') {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (!langParam) {
    return null;
  }

  return langParam.toUpperCase() === 'EN' ? 'EN' : 'RU';
}

function applyLanguage(language, options = {}) {
  const { persist = true, syncUrl = true } = options;
  const root = document.documentElement;
  if (!root) {
    return;
  }

  const normalized = typeof language === 'string' && language.toUpperCase() === 'EN' ? 'EN' : 'RU';
  root.setAttribute('data-current-lang', normalized);
  root.setAttribute('lang', normalized.toLowerCase());
  if (persist) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, normalized);
    } catch (error) {
      console.warn('Unable to persist language preference', error);
    }
  }

  if (syncUrl) {
    updateUrlLanguage(normalized);
  }

  const langButton = document.getElementById('langBtn');
  if (langButton) {
    langButton.textContent = normalized;
  }

  document.querySelectorAll('[data-aria-label-en], [data-aria-label-ru]').forEach((element) => {
    const label = normalized === 'EN' ? element.getAttribute('data-aria-label-en') : element.getAttribute('data-aria-label-ru');
    if (label) {
      element.setAttribute('aria-label', label);
    }
  });

  document.querySelectorAll('[data-href-en], [data-href-ru]').forEach((element) => {
    const href = normalized === 'EN' ? element.getAttribute('data-href-en') : element.getAttribute('data-href-ru');
    if (href) {
      element.setAttribute('href', href);
    }
  });
}

function initLanguageToggle() {
  const urlLanguage = getLanguageFromUrl();
  const stored = (() => {
    try {
      return localStorage.getItem(LANG_STORAGE_KEY);
    } catch (error) {
      console.warn('Unable to read language preference', error);
      return null;
    }
  })();

  const initialLanguage = urlLanguage || stored || 'EN';
  applyLanguage(initialLanguage, {
    persist: true,
    syncUrl: Boolean(urlLanguage),
  });

  const langButton = document.getElementById('langBtn');
  if (!langButton) {
    return;
  }

  langButton.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-current-lang') === 'EN' ? 'EN' : 'RU';
    const nextLanguage = current === 'EN' ? 'RU' : 'EN';
    applyLanguage(nextLanguage, { persist: true, syncUrl: true });
  });
}

function initFaqAccordion() {
  const faqDetails = Array.from(document.querySelectorAll('#faq details'));
  if (!faqDetails.length) {
    return;
  }

  faqDetails.forEach((detail) => {
    const summary = detail.querySelector('summary');
    if (!summary) {
      return;
    }

    const setAriaState = (isExpanded) => {
      summary.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    };

    setAriaState(detail.open);
    summary.setAttribute('role', 'button');
    summary.setAttribute('tabindex', '0');

    const toggleDetail = () => {
      const willOpen = !detail.open;

      faqDetails.forEach((other) => {
        if (other !== detail) {
          other.open = false;
          const otherSummary = other.querySelector('summary');
          if (otherSummary) {
            otherSummary.setAttribute('aria-expanded', 'false');
          }
        }
      });

      detail.open = willOpen;
      setAriaState(willOpen);
    };

    summary.addEventListener('click', (event) => {
      event.preventDefault();
      toggleDetail();
    });

    summary.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleDetail();
      }
    });
  });
}

function initRevealObserver() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const animateCounter = (element) => {
    if (!element || element.dataset.animated) {
      return;
    }

    const target = parseFloat(element.dataset.counter);
    if (Number.isNaN(target)) {
      return;
    }

    element.dataset.animated = 'true';
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    const decimals = element.dataset.decimals
      ? parseInt(element.dataset.decimals, 10)
      : ((element.dataset.counter || '').includes('.')
        ? (element.dataset.counter.split('.')[1] || '').length
        : 0);
    const duration = 1800;
    const startTime = performance.now();
    const startValue = 0;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      let current = startValue + (target - startValue) * eased;
      if (progress === 1) {
        current = target;
      }
      const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
      element.textContent = `${prefix}${formatted}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        if (entry.target.classList.contains('counter')) {
          animateCounter(entry.target);
        }
        entry.target.querySelectorAll('.counter').forEach(animateCounter);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '0px 0px -10% 0px',
  });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function initWhatsAppForm() {
  const form = document.querySelector('[data-whatsapp-form]');
  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'https://wa.me/971561927597?text=Здравствуйте%2C%20Азиз!%20Нужна%20помощь%20с%20рекламой%2Fсайтом%2FSEO.';
  });
}

function initMobileMenu() {
  const toggleButton = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!toggleButton || !mobileNav) {
    return;
  }

  const closeMenu = () => {
    mobileNav.classList.add('hidden');
    toggleButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-nav-open');
  };

  const openMenu = () => {
    mobileNav.classList.remove('hidden');
    toggleButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-nav-open');
  };

  const toggleMenu = () => {
    const willOpen = toggleButton.getAttribute('aria-expanded') !== 'true';
    if (willOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  toggleButton.addEventListener('click', toggleMenu);

  mobileNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.matches('a')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
}

function initSlider(slider) {
  if (!slider) {
    return;
  }

  const track = slider.querySelector('[data-slider-track]');
  const prevButton = slider.querySelector('[data-slider-prev]');
  const nextButton = slider.querySelector('[data-slider-next]');
  const slides = track
    ? Array.from(track.children).filter((child) => child instanceof HTMLElement)
    : [];

  if (!track || !prevButton || !nextButton || slides.length === 0) {
    slider.classList.add('is-static');
    return;
  }

  const getSlidesPerView = () => {
    const computed = window.getComputedStyle(track);
    const value = parseFloat(computed.getPropertyValue('--slides-per-view'));
    if (Number.isFinite(value) && value > 0) {
      return Math.round(value);
    }
    return 1;
  };

  const getGap = () => {
    const computed = window.getComputedStyle(track);
    const gap = parseFloat(computed.getPropertyValue('gap'));
    return Number.isFinite(gap) ? gap : 0;
  };

  const getMaxIndex = () => {
    const perView = Math.min(getSlidesPerView(), slides.length) || 1;
    return Math.max(slides.length - perView, 0);
  };

  const clampIndex = (index) => {
    const maxIndex = getMaxIndex();
    if (index < 0) {
      return 0;
    }
    if (index > maxIndex) {
      return maxIndex;
    }
    return index;
  };

  const getStepSize = () => 1;

  const getTargetOffset = (index) => {
    const targetSlide = slides[index];
    if (!targetSlide) {
      return null;
    }
    const firstSlide = slides[0];
    const baseOffset = firstSlide ? firstSlide.offsetLeft : 0;
    return targetSlide.offsetLeft - baseOffset;
  };

  const scrollToIndex = (index, smooth = true) => {
    const offset = getTargetOffset(index);
    if (offset === null) {
      return;
    }
    track.scrollTo({
      left: offset,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  let currentIndex = 0;

  const updateUi = () => {
    const maxIndex = getMaxIndex();
    slider.classList.toggle('is-static', maxIndex === 0);
    slider.classList.toggle('is-at-start', currentIndex <= 0);
    slider.classList.toggle('is-at-end', currentIndex >= maxIndex);
    prevButton.disabled = false;
    nextButton.disabled = false;
  };

  const goToIndex = (index, smooth = true) => {
    const maxIndex = getMaxIndex();
    if (index < 0) index = maxIndex;
    else if (index > maxIndex) index = 0;
    currentIndex = index;
    scrollToIndex(currentIndex, smooth);
    updateUi();
  };

  prevButton.addEventListener('click', () => {
    goToIndex(currentIndex - getStepSize());
  });

  nextButton.addEventListener('click', () => {
    goToIndex(currentIndex + getStepSize());
  });

  let isSyncScheduled = false;
  track.addEventListener('scroll', () => {
    if (isSyncScheduled) {
      return;
    }
    isSyncScheduled = true;
    window.requestAnimationFrame(() => {
      const slideWidth = slides[0]?.offsetWidth || 0;
      if (slideWidth > 0) {
        const approxIndex = Math.round(track.scrollLeft / (slideWidth + getGap()));
        currentIndex = clampIndex(approxIndex);
        updateUi();
      }
      isSyncScheduled = false;
    });
  });

  const handleResize = () => {
    currentIndex = clampIndex(currentIndex);
    scrollToIndex(currentIndex, false);
    updateUi();
  };

  window.addEventListener('resize', handleResize);

  // Autoplay every 2s with hover/touch pause
  let __autoTimer = null;
  const __startAuto = () => { __stopAuto(); __autoTimer = setInterval(() => { goToIndex(currentIndex + 1); }, 2000); };
  const __stopAuto = () => { if (__autoTimer) { clearInterval(__autoTimer); __autoTimer = null; } };
  slider.addEventListener('mouseenter', __stopAuto);
  slider.addEventListener('mouseleave', __startAuto);
  track.addEventListener('touchstart', __stopAuto, { passive: true });
  track.addEventListener('touchend', __startAuto, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) __stopAuto(); else __startAuto(); });
  __startAuto();


  updateUi();
}

function initSliders() {
  const sliders = document.querySelectorAll('[data-slider]');
  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => initSlider(slider));
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initFaqAccordion();
  initRevealObserver();
  initWhatsAppForm();
  initMobileMenu();
  initSliders();
});
