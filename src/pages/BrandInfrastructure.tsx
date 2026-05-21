import { Helmet } from 'react-helmet-async';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useServicePageBackground } from '../hooks/useServicePageBackground';

/* ── Impulse mark path ─────────────────────────────────── */
const MARK =
  'M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z';

/* ── Services ─────────────────────────────────────────── */
const SERVICES = [
  {
    index: '01',
    label: 'Dominate traditional search.',
    title: 'Search & Visibility',
    desc: 'Advanced organic growth and technical optimization to ensure your brand dominates traditional search engine results pages.',
    to: '/brand-infrastructure/search-engine-optimisation',
  },
  {
    index: '02',
    label: 'Revenue-driven organic growth.',
    title: 'eCommerce SEO',
    desc: 'Scalable organic growth strategies designed specifically for online stores to increase product visibility and maximize sales.',
    to: '/brand-infrastructure/search-engine-optimisation/ecommerce-seo',
  },
  {
    index: '03',
    label: 'Large-scale SEO infrastructure.',
    title: 'Enterprise SEO',
    desc: 'Robust SEO infrastructure and technical optimizations designed for massive websites with thousands of pages.',
    to: '/brand-infrastructure/search-engine-optimisation/enterprise-seo',
  },
  {
    index: '04',
    label: 'Pipeline-focused visibility.',
    title: 'B2B SEO',
    desc: 'Targeted search visibility focused on high-intent B2B buyers to generate qualified leads and drive pipeline growth.',
    to: '/brand-infrastructure/search-engine-optimisation/b2b-seo',
  },
  {
    index: '05',
    label: 'Dominate the local neighborhood.',
    title: 'Local SEO',
    desc: 'Hyper-targeted local search strategies to dominate the map pack and capture high-intent neighborhood searches.',
    to: '/brand-infrastructure/search-engine-optimisation/local-seo',
  },
  {
    index: '06',
    label: 'High-performance experiences.',
    title: 'Website Development',
    desc: 'Lightning-fast, immersive, and high-performance modern web experiences built to convert visitors into loyal customers.',
    to: '/brand-infrastructure/website-development',
  },
  {
    index: '07',
    label: 'Community-driven strategies.',
    title: 'Social Media',
    desc: 'Engaging, community-driven social strategies that build brand loyalty and foster meaningful interactions.',
    to: '/brand-infrastructure/social-media-marketing',
  },
  {
    index: '08',
    label: 'Visual assets that command attention.',
    title: 'Video Production',
    desc: 'Stunning visual assets and video production that command attention and elevate your brand storytelling.',
    to: '/brand-infrastructure/video-production',
  },
  {
    index: '09',
    label: 'Identities with impact.',
    title: 'Brand Identity',
    desc: 'Powerful, memorable brand identities and design systems that ensure your brand commands attention in any market.',
    to: '/brand-infrastructure/branding',
  },
  {
    index: '10',
    label: 'Attract the industry\'s top talent.',
    title: 'Employer Branding',
    desc: 'Strategic positioning and cultural storytelling to attract, engage, and retain the industry\'s very best talent.',
    to: '/brand-infrastructure/employer-branding',
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
const BrandInfrastructure: React.FC = () => {
  const pageRef = useRef<HTMLElement>(null);
  useServicePageBackground('.gi2-split');

  useEffect(() => {
    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger || !pageRef.current) return;

    /* ── Cards reveal ── */
    const cards = pageRef.current.querySelectorAll('.gi2-card');
    let cardsTrigger: any = null;
    if (cards.length) {
      cardsTrigger = ScrollTrigger.create({
        trigger: '.gi2-split',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(cards, { opacity: 1, y: 0, duration: 1.0, stagger: 0.14, ease: 'power3.out' });
        },
      });
    }

    /* ── Stroke-trace logo on hover ── */
    cards.forEach((card) => {
      const path = card.querySelector('.gi2-card-mark path') as SVGPathElement | null;
      if (!path) return;
      const len = path.getTotalLength?.() ?? 2000;
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      card.addEventListener('mouseenter', () =>
        gsap.to(path, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.out' })
      );
      card.addEventListener('mouseleave', () =>
        gsap.to(path, { strokeDashoffset: len, duration: 1.0, ease: 'power2.in' })
      );
    });

    /* ── Magnetic 3D Tilt on hover ── */
    cards.forEach((card) => {
      card.addEventListener('pointermove', (e: any) => {
        if (window.innerWidth <= 900) return; // Disable on mobile
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 1000,
          transformOrigin: 'center center',
        });
      });
      card.addEventListener('pointerleave', () =>
        gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.8, ease: 'elastic.out(1,0.5)' })
      );
    });

    return () => {
      if (cardsTrigger) cardsTrigger.kill();
    };
  }, []);

  return (
    <main id="main-content" ref={pageRef}>
      <Helmet>
        <title>Brand Infrastructure | Impulse Digital</title>
        <meta name="description" content="A premium brand demands an unbreakable foundation. We architect authoritative digital footprints that dominate search and command absolute trust." />
        <link rel="canonical" href="https://www.theimpulsedigital.com/brand-infrastructure/" />
      </Helmet>

      {/* ══ SPLIT LAYOUT ═══════════════════════════════════ */}
      <section className="gi2-split" id="warp-start">
        {/* Left: Sticky Title */}
        <div className="gi2-split-left">
          <h1 className="gi2-main-title">Brand<br />Infrastructure.</h1>
          <p className="gi2-main-desc">Architect authoritative digital footprints that dominate search and command absolute trust.</p>
        </div>

        {/* Right: Scrolling List */}
        <div className="gi2-split-right">
          <div className="gi2-list">
            {SERVICES.map((svc, i) => (
              <Link
                key={i}
                to={svc.to}
                className="gi2-card"
                data-cursor="EXPLORE"
                style={{ opacity: 0, transform: 'translateY(60px)' }}
              >
                {/* Hover bg wash */}
                <div className="gi2-card-bg" aria-hidden="true" />

                {/* Hover glow */}
                <div className="gi2-card-glow" aria-hidden="true" />

                {/* Impulse mark — traces on hover */}
                <div className="gi2-card-mark" aria-hidden="true">
                  <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path d={MARK} />
                  </svg>
                </div>

                {/* Number */}
                <div className="gi2-card-left">
                  <span className="gi2-card-index">{svc.index}</span>
                </div>

                {/* Content */}
                <div className="gi2-card-center">
                  <h2 className="gi2-card-title">{svc.title}</h2>
                  <p className="gi2-card-desc">{svc.desc}</p>
                  
                  {/* CTA */}
                  <div className="gi2-card-cta-wrapper" aria-hidden="true">
                    <span className="btn-nav">Know More</span>
                  </div>
                </div>

                {/* Hover bottom line */}
                <div className="gi2-card-line" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandInfrastructure;
