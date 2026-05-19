/**
 * Shared animation initializer for editorial case study pages.
 * Mirrors the page-specific <script> logic from the HTML source files.
 */
export function initCaseStudyAnimations(): () => void {
  const { gsap, ScrollTrigger, SplitType } = window as any;

  // Feature image scroll reveal
  const featureWrapper = document.querySelector('.cs-feature-wrapper') as HTMLElement;
  const featureImage = document.querySelector('.cs-feature-image') as HTMLElement;
  const featureImg = document.querySelector('.cs-feature-image img') as HTMLElement;
  const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktopReveal = window.matchMedia('(min-width: 769px)').matches;
  let scrollListener: (() => void) | null = null;
  let resizeListener: (() => void) | null = null;

  if (featureWrapper && featureImage && featureImg && motionAllowed && desktopReveal) {
    const updateReveal = () => {
      const rect = featureWrapper.getBoundingClientRect();
      const scrollable = Math.max(1, featureWrapper.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const eased = 1 - Math.pow(1 - progress, 3);
      const clipStart = 25 * (1 - eased);
      const clipEnd = 75 + 25 * eased;
      const scale = 1.35 - 0.35 * eased;
      featureImage.style.clipPath = `polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;
      featureImg.style.transform = `scale(${scale})`;
    };
    updateReveal();
    scrollListener = updateReveal;
    resizeListener = updateReveal;
    window.addEventListener('scroll', updateReveal, { passive: true });
    window.addEventListener('resize', updateReveal);
  }

  if (!gsap || !ScrollTrigger) {
    return () => {
      if (scrollListener) window.removeEventListener('scroll', scrollListener);
      if (resizeListener) window.removeEventListener('resize', resizeListener);
    };
  }

  // Background transition
  const cosmosTrigger = document.querySelector('#warp-start');
  if (cosmosTrigger) {
    gsap.to(document.body, {
      backgroundColor: '#000000',
      scrollTrigger: { trigger: cosmosTrigger, start: 'top bottom', end: 'top top', scrub: true },
    });
    if ((window as any).particlesMaterial) {
      gsap.fromTo(
        (window as any).particlesMaterial,
        { opacity: 0.7 },
        { opacity: 0, scrollTrigger: { trigger: cosmosTrigger, start: 'top 80%', end: 'top 20%', scrub: true } }
      );
    }
  }

  // Split text reveals
  if (SplitType) {
    document.querySelectorAll('.split-text').forEach((text: Element) => {
      if (!text.classList.contains('cs-hero-title') && !text.classList.contains('cs-hero-subtitle')) {
        const split = new SplitType(text, { types: 'lines, words' });
        split.lines?.forEach((line: HTMLElement) => {
          const w = document.createElement('div');
          w.classList.add('line-wrapper');
          line.parentNode?.insertBefore(w, line);
          w.appendChild(line);
        });
        gsap.fromTo(
          split.words,
          { yPercent: 100, opacity: 0 },
          { scrollTrigger: { trigger: text, start: 'top 90%' }, yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power3.out' }
        );
      }
    });
  }

  // Counter animations
  document.querySelectorAll('.counter').forEach((counter: Element, index: number) => {
    ScrollTrigger.create({
      trigger: '.cs-results-module',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const el = counter as HTMLElement;
        const targetText = el.getAttribute('data-target') || '0';
        const target = parseFloat(targetText);
        const decimals = targetText.includes('.') ? targetText.split('.')[1].length : 0;
        const state = { value: 0 };
        gsap.to(state, {
          value: target, duration: 2.2, delay: index * 0.08, ease: 'power4.out',
          onUpdate: () => {
            el.textContent = state.value.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
          },
        });
      },
    });
  });

  // Fade-up animations
  document.querySelectorAll('.gsap-fade-up, .gsap-item').forEach((item: Element) => {
    gsap.fromTo(
      item,
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: item, start: 'top 90%' }, y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  });

  // CTA SVG stroke drawing
  const ctaMark = document.querySelector('.svc-final-cta-path') as SVGPathElement | null;
  if (ctaMark) {
    const len = ctaMark.getTotalLength();
    gsap.set(ctaMark, { strokeDasharray: len, strokeDashoffset: len });
    ScrollTrigger.create({
      trigger: '.svc-final-cta', start: 'top 60%', once: true,
      onEnter: () => gsap.to(ctaMark, { strokeDashoffset: 0, duration: 3.5, ease: 'power2.inOut' }),
    });
  }

  ScrollTrigger.refresh();

  return () => {
    if (scrollListener) window.removeEventListener('scroll', scrollListener);
    if (resizeListener) window.removeEventListener('resize', resizeListener);
    gsap.to(document.body, { backgroundColor: '', duration: 0 });
    ScrollTrigger.getAll().forEach((t: any) => t.kill());
  };
}

export function cleanupCaseStudyAnimations() {
  // Legacy export kept for compatibility
}
