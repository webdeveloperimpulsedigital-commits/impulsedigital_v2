// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const Careers: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page', 'careers-page');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { gsap, ScrollTrigger, SplitType } = window as any;



      // --- HERO ENTRY ---
      const runHero = () => {
        if (!gsap || !SplitType) return;
        const headline = document.querySelector('.car-hero-headline');
        const sub = document.querySelector('.car-hero-sub');
        const desc = document.querySelector('.car-hero-desc');
        const anchor = document.querySelector('.car-hero-anchor');
        const ctas = document.querySelectorAll('.car-hero .svc-hero-cta-row .btn');

        [headline, sub, desc, anchor].forEach(el => { if (el) el.style.visibility = 'visible'; });

        if (headline) {
          const split = new SplitType(headline, { types: 'lines, words' });
          split.lines.forEach((line: any) => {
            const w = document.createElement('div');
            w.classList.add('line-wrapper');
            line.parentNode.insertBefore(w, line);
            w.appendChild(line);
          });
          gsap.set(split.words, { yPercent: 120, opacity: 0 });
          gsap.to(split.words, {
            yPercent: 0, opacity: 1,
            duration: 1.4, stagger: 0.07,
            ease: 'power4.out', delay: 0.25
          });
        }

        [sub, desc, anchor].forEach((el: any, i: number) => {
          if (!el) return;
          const split = new SplitType(el, { types: 'lines' });
          split.lines.forEach((line: any) => {
            const w = document.createElement('div');
            w.classList.add('line-wrapper');
            line.parentNode.insertBefore(w, line);
            w.appendChild(line);
          });
          gsap.set(split.lines, { y: 30, opacity: 0 });
          gsap.to(split.lines, {
            y: 0, opacity: 1,
            duration: 0.9, stagger: 0.06,
            ease: 'power3.out',
            delay: 1.1 + i * 0.18
          });
        });

        if (ctas.length) {
          gsap.set(ctas, { scale: 0.9, opacity: 0 });
          gsap.to(ctas, {
            scale: 1, opacity: 1,
            duration: 0.8, stagger: 0.12,
            ease: 'back.out(1.6)',
            delay: 2.0,
            onComplete: () => { if (ScrollTrigger) ScrollTrigger.refresh(); }
          });
        }
      };

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(runHero);
      } else {
        setTimeout(runHero, 100);
      }

      // --- BACKGROUND TRANSITION — purple → black, drift fades ---
      const waitForGsap = setInterval(() => {
        if (gsap && ScrollTrigger) {
          clearInterval(waitForGsap);
          const trigger = document.querySelector('#warp-start');
          if (!trigger) return;

          gsap.to(document.body, {
            backgroundColor: '#000000',
            scrollTrigger: {
              trigger: trigger,
              start: 'top bottom',
              end: 'top top',
              scrub: true
            }
          });

          if ((window as any).particlesMaterial) {
            gsap.fromTo((window as any).particlesMaterial,
              { opacity: 0.7 },
              {
                opacity: 0,
                scrollTrigger: {
                  trigger: trigger,
                  start: 'top 80%',
                  end: 'top 20%',
                  scrub: true
                }
              }
            );
          }
        }
      }, 80);
      setTimeout(() => clearInterval(waitForGsap), 6000);

      // --- HANDOFFS — same activation pattern as service pages ---
      const handoffs = document.querySelectorAll('.svc-handoff');
      if (handoffs.length) {
        const handoffObs = new IntersectionObserver((entries) => {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              handoffObs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        handoffs.forEach((h) => handoffObs.observe(h));
      }

      // --- QUESTION LIST — illuminate sequentially ---
      const qs = document.querySelectorAll('.car-q');
      if (qs.length && gsap && ScrollTrigger) {
        gsap.set(qs, { opacity: 0, x: -20 });
        ScrollTrigger.create({
          trigger: '.car-questions',
          start: 'top 70%',
          once: true,
          onEnter: () => {
            qs.forEach((q, i) => {
              gsap.to(q, {
                opacity: 1, x: 0,
                duration: 0.6,
                delay: i * 0.18,
                ease: 'power3.out',
                onStart: () => setTimeout(() => q.classList.add('lit'), 220)
              });
            });
          }
        });
      }

      // --- TRANSLATION ROWS — reveal with stagger ---
      const tRows = document.querySelectorAll('.car-translate-row');
      if (tRows.length && gsap && ScrollTrigger) {
        gsap.set(tRows, { opacity: 0, y: 24 });
        ScrollTrigger.create({
          trigger: '.car-translate-list',
          start: 'top 65%',
          once: true,
          onEnter: () => {
            gsap.to(tRows, {
              opacity: 1, y: 0,
              duration: 0.7, stagger: 0.1,
              ease: 'power3.out'
            });
          }
        });
      }

      // --- VALUE CARDS — cascade in ---
      const values = document.querySelectorAll('.car-value');
      if (values.length && gsap && ScrollTrigger) {
        gsap.set(values, { opacity: 0, y: 40 });
        ScrollTrigger.create({
          trigger: '.car-values-grid',
          start: 'top 60%',
          once: true,
          onEnter: () => {
            gsap.to(values, {
              opacity: 1, y: 0,
              duration: 0.9, stagger: 0.15,
              ease: 'power3.out'
            });
          }
        });
      }

      // --- EXPECT LIST — reveal each row ---
      const exItems = document.querySelectorAll('.car-expect-list li');
      if (exItems.length && gsap && ScrollTrigger) {
        gsap.set(exItems, { opacity: 0, x: -18 });
        ScrollTrigger.create({
          trigger: '.car-expect-list',
          start: 'top 65%',
          once: true,
          onEnter: () => {
            gsap.to(exItems, {
              opacity: 1, x: 0,
              duration: 0.6, stagger: 0.12,
              ease: 'power3.out'
            });
          }
        });
      }

      // --- GALLERY — staggered reveal + light parallax ---
      const gImgs = document.querySelectorAll('.car-life-img');
      if (gImgs.length && gsap && ScrollTrigger) {
        gsap.set(gImgs, { opacity: 0, y: 60, scale: 0.96 });
        ScrollTrigger.create({
          trigger: '.car-life-gallery',
          start: 'top 70%',
          once: true,
          onEnter: () => {
            gsap.to(gImgs, {
              opacity: 1, y: 0, scale: 1,
              duration: 1.1, stagger: 0.12,
              ease: 'power3.out'
            });
          }
        });

        // Light parallax: each image drifts upward slightly while in view
        gImgs.forEach((img, i) => {
          const depth = (i % 3) * 18 + 12;
          gsap.to(img, {
            y: -depth,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          });
        });
      }

      // --- FIT LIST ---
      const fitItems = document.querySelectorAll('.car-fit-list li');
      if (fitItems.length && gsap && ScrollTrigger) {
        gsap.set(fitItems, { opacity: 0, x: -14 });
        ScrollTrigger.create({
          trigger: '.car-fit-list',
          start: 'top 65%',
          once: true,
          onEnter: () => {
            gsap.to(fitItems, {
              opacity: 1, x: 0,
              duration: 0.55, stagger: 0.1,
              ease: 'power3.out'
            });
          }
        });
      }

      // --- APPETITE BLOCK ---
      const appetite = document.querySelector('.car-appetite');
      if (appetite && gsap && ScrollTrigger) {
        const lines = appetite.querySelectorAll('p');
        gsap.set(lines, { opacity: 0, y: 22 });
        ScrollTrigger.create({
          trigger: appetite,
          start: 'top 70%',
          once: true,
          onEnter: () => {
            gsap.to(lines, {
              opacity: 1, y: 0,
              duration: 0.8, stagger: 0.18,
              ease: 'power3.out'
            });
          }
        });
      }

      // --- FINAL CARD reveal ---
      const finalCard = document.querySelector('.car-final-card');
      if (finalCard && gsap && ScrollTrigger) {
        gsap.set(finalCard, { opacity: 0, y: 50 });
        ScrollTrigger.create({
          trigger: finalCard,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            gsap.to(finalCard, {
              opacity: 1, y: 0,
              duration: 1.0,
              ease: 'power3.out'
            });
          }
        });
      }

      // =====================================================
      // IMMERSIVE LAYER — pointer spotlights, scroll rails,
      // magnetic CTAs, watermark drift, scrubbed illumination.
      // =====================================================
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isDesktop = window.innerWidth > 900;

      // --- Hero: faint watermark fade-in + drift parallax ---
      const heroWm = document.querySelector('.car-hero-watermark');
      const heroSection = document.querySelector('.car-hero');
      if (heroWm && gsap) {
        gsap.to(heroWm, { opacity: 0.07, duration: 2.4, delay: 0.6, ease: 'power2.out' });
      }
      if (heroSection && gsap && !prefersReduced && isDesktop) {
        const heroContent = heroSection.querySelector('.svc-hero-page-content');
        let hx = 0, hy = 0, tx = 0, ty = 0;
        heroSection.addEventListener('mousemove', (e) => {
          const r = heroSection.getBoundingClientRect();
          tx = ((e.clientX - r.left) / r.width - 0.5);
          ty = ((e.clientY - r.top) / r.height - 0.5);
        });
        gsap.ticker.add(() => {
          hx += (tx - hx) * 0.08;
          hy += (ty - hy) * 0.08;
          if (heroWm) gsap.set(heroWm, { x: hx * -40, y: hy * -40 });
          if (heroContent) gsap.set(heroContent, { x: hx * 10, y: hy * 8 });
        });
      }

      // --- Questions: scroll-progress rail fill ---
      const rail = document.querySelector('.car-questions-rail');
      const railFill = document.querySelector('.car-questions-rail-fill');
      const questionsList = document.querySelector('.car-questions');
      if (rail && railFill && questionsList && gsap && ScrollTrigger) {
        ScrollTrigger.create({
          trigger: questionsList,
          start: 'top 75%',
          end: 'bottom 55%',
          scrub: 0.4,
          onUpdate: (self) => {
            (railFill as any).style.setProperty('--rail-progress', (self.progress * 100) + '%');
          }
        });
      }

      // --- Translate rows: scroll-scrubbed illumination per row ---
      document.querySelectorAll('.car-translate-row').forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: 'top 70%',
          end: 'bottom 30%',
          onEnter: () => row.classList.add('lit'),
          onEnterBack: () => row.classList.add('lit'),
          onLeave: () => {},
          onLeaveBack: () => row.classList.remove('lit')
        });
      });

      // --- Value cards: pointer spotlight + VanillaTilt ---
      const valueCards = document.querySelectorAll('.car-value');
      valueCards.forEach((card: any) => {
        card.addEventListener('mousemove', (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
          card.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
        });
      });
      if ((window as any).VanillaTilt && isDesktop && valueCards.length) {
        (window as any).VanillaTilt.init(valueCards, {
          max: 4,
          speed: 600,
          glare: false,
          perspective: 1400,
          scale: 1.012,
          'reset-to-start': true
        });
      }

      // --- Final card: pointer spotlight tracking ---
      if (finalCard && !prefersReduced) {
        finalCard.addEventListener('mousemove', (e) => {
          const r = finalCard.getBoundingClientRect();
          finalCard.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
          finalCard.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
        });
      }

      // Note: gallery hover/dim is handled in CSS to avoid conflicts
      // with the GSAP parallax tweens on .car-life-img.

      // --- "Life at Impulse" jab: scroll-triggered strikethrough sequence ---
      // Sequence: corporate label fades in faintly → thick line draws L→R
      // through it (rejection) → "The Part You Actually Join" slams up.
      const jabWrap = document.querySelector('.car-life-jab');
      const jabText = document.querySelector('.car-life-jab-text');
      const jabStrike = document.querySelector('.car-life-jab-strike');
      const lifeTitle = document.querySelector('.car-life-title');
      if (jabWrap && jabStrike && lifeTitle && gsap && ScrollTrigger) {
        // Inject CSS custom property driver for strike width
        const strikeStyleTag = document.createElement('style');
        strikeStyleTag.textContent = '.car-life-jab-strike { width: var(--strike-w, 0%); }';
        document.head.appendChild(strikeStyleTag);

        ScrollTrigger.create({
          trigger: '.car-life-header',
          start: 'top 60%',
          once: true,
          onEnter: () => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            gsap.set(jabWrap, { y: 18 });

            // 1. Corporate label arrives first, large enough to feel deliberate.
            tl.to(jabWrap, { opacity: 1, y: 0, duration: 0.65 })

            // 2. The Impulse purple strike rejects the corporate line.
              .add(() => {
                const prog = { v: 0 };
                gsap.to(prog, {
                  v: 106,
                  duration: 0.58,
                  ease: 'power3.inOut',
                  onUpdate: () => jabStrike.style.setProperty('--strike-w', prog.v + '%')
                });
              }, '+=0.35')
              .to(jabText, {
                opacity: 0.38,
                duration: 0.28,
                ease: 'power2.out'
              }, '+=0.35')

            // 3. The real title appears in Impulse purple.
              .to(lifeTitle, {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: 'power4.out'
              }, '-=0.05');
          }
        });
      }

      // --- Open positions: hover preview, click/tap lock, center mark reveal ---
      const positionsSection = document.querySelector('.car-positions');
      const jobCards = document.querySelectorAll('[data-job-card]');
      if (jobCards.length) {
        jobCards.forEach((card: any) => {
          const toggle = card.querySelector('.car-job-toggle');
          const setOpen = (open: any) => {
            card.classList.toggle('is-open', open);
            if (toggle) toggle.setAttribute('aria-expanded', String(open));
            if (ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 320);
          };

          if (toggle) {
            toggle.addEventListener('click', (event: any) => {
              event.preventDefault();
              const shouldOpen = !card.classList.contains('is-open');
              jobCards.forEach((other) => {
                if (other !== card) {
                  other.classList.remove('is-open');
                  const otherToggle = other.querySelector('.car-job-toggle');
                  if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
                }
              });
              setOpen(shouldOpen);
            });
          }

          const markPath = card.querySelector('.car-job-mark-path');
          if (markPath && gsap) {
            const pathLen = markPath.getTotalLength();
            gsap.set(markPath, { strokeDasharray: pathLen, strokeDashoffset: pathLen });

            const drawMark = () => {
              gsap.killTweensOf(markPath);
              gsap.to(markPath, {
                strokeDashoffset: 0,
                duration: 1.05,
                ease: 'power2.inOut'
              });
            };

            const resetMark = () => {
              gsap.killTweensOf(markPath);
              gsap.to(markPath, {
                strokeDashoffset: pathLen,
                duration: 0.35,
                ease: 'power2.out'
              });
            };

            card.addEventListener('mouseenter', drawMark);
            card.addEventListener('mouseleave', resetMark);
            card.addEventListener('focusin', drawMark);
            card.addEventListener('focusout', (event: any) => {
              if (!card.contains(event.relatedTarget)) resetMark();
            });
          }
        });

        if (gsap && ScrollTrigger) {
          ScrollTrigger.create({
            trigger: '.car-jobs-list',
            start: 'top 72%',
            once: true,
            onEnter: () => {
              gsap.from(jobCards, {
                y: 30,
                duration: 0.95,
                stagger: 0.12,
                clearProps: 'transform',
                ease: 'power3.out'
              });
            }
          });
        }
      }

      if (positionsSection) {
        if (ScrollTrigger) {
          ScrollTrigger.create({
            trigger: positionsSection,
            start: 'top 68%',
            end: 'bottom 35%',
            onEnter: () => positionsSection.classList.add('mark-visible'),
            onEnterBack: () => positionsSection.classList.add('mark-visible'),
            onLeave: () => positionsSection.classList.remove('mark-visible'),
            onLeaveBack: () => positionsSection.classList.remove('mark-visible')
          });
        } else {
          const markObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry: any) => positionsSection.classList.toggle('mark-visible', entry.isIntersecting));
          }, { threshold: 0.2 });
          markObserver.observe(positionsSection);
        }
      }

      // --- Section title: split-line stagger reveal on enter ---
      // Exclude .car-life-title — it is handled by the jab sequence above.
      document.querySelectorAll('.car-section-title').forEach((el: any) => {
        if (!SplitType || !gsap || !ScrollTrigger) return;
        if (el.closest('.car-positions')) return;
        const split = new SplitType(el, { types: 'lines, words' });
        split.lines.forEach((line: any) => {
          const w = document.createElement('div');
          w.classList.add('line-wrapper');
          line.parentNode.insertBefore(w, line);
          w.appendChild(line);
        });
        gsap.set(split.words, { yPercent: 110, opacity: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(split.words, {
              yPercent: 0, opacity: 1,
              duration: 1.0, stagger: 0.05,
              ease: 'power4.out'
            });
          }
        });
      });

    

    

    return () => {
      document.body.classList.remove('service-page', 'careers-page');
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <main id="main-content" className="careers-page-container">
      <Helmet>
        <title>Careers at Impulse Digital</title>
<meta name="description" content="At Impulse Digital, we always look forward to hire creative minds. Check out our current openings and apply right away to be the part of Impulse Digital team." />
<meta name="keywords" content="career at impulse digital, thane, mumbai, job, hiring" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/careers/" />
<meta property="og:title" content="Careers at Impulse Digital" />
<meta property="og:description" content="At Impulse Digital, we always look forward to hire creative minds. Check out our current openings and apply right away to be the part of Impulse Digital team." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:url" content="https://www.theimpulsedigital.com/careers/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Careers at Impulse Digital" />
<meta name="twitter:description" content="At Impulse Digital, we always look forward to hire creative minds. Check out our current openings and apply right away to be the part of Impulse Digital team." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>
      
      

    {/* ============================================================
         HERO
         ============================================================ */}
    <section className="svc-hero-page car-hero" id="hero">
      <div className="car-hero-watermark" aria-hidden="true">
        <svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg>
      </div>
      <div className="svc-hero-page-content">
        <h1 className="svc-hero-headline car-hero-headline">
          For people who want<br />
          more from the work.
        </h1>
        <p className="car-hero-sub">Not just a job that fills the day.</p>
        <p className="svc-hero-page-desc car-hero-desc">
          We are interested in people who want to think harder, take ownership, ask better questions, and leave behind work they are proud of.
        </p>
        <p className="car-hero-anchor">Impulse is for people who want their work to mean something.</p>
        <div className="svc-hero-cta-row">
          <a href="#how-we-work" className="btn" data-cursor="EXPLORE">
            <span className="btn-text">See how we work</span>
            <div className="btn-fill"></div>
          </a>
          <a href="/contact-us/" className="btn" data-cursor="WRITE">
            <span className="btn-text">Write to us</span>
            <div className="btn-fill"></div>
          </a>
        </div>
      </div>
    </section>

    {/* ============================================================
         BETTER WORK — five questions
         ============================================================ */}
    <section className="car-better" id="warp-start">
      <div className="container car-better-grid">
        <div className="car-better-left">
          <p className="car-statement car-statement-lg">
            <span className="car-line">Some work keeps you busy.</span>
            <span className="car-line car-line-loud">Some work makes you better.</span>
          </p>
          <p className="car-statement car-statement-mid">
            <span className="car-line">We are interested in the second kind.</span>
          </p>
          <p className="car-statement">
            <span className="car-line">The kind where you stop asking only, &ldquo;What needs to be done?&rdquo;</span>
            <span className="car-line">And start asking better questions.</span>
          </p>
        </div>

        <div className="car-better-right">
          <div className="car-questions-rail" aria-hidden="true"><span className="car-questions-rail-fill"></span></div>
          <ul className="car-questions" aria-label="Better questions">
            <li className="car-q"><span className="car-q-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span><span className="car-q-text">Why will someone care?</span></li>
            <li className="car-q"><span className="car-q-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span><span className="car-q-text">What is the real problem here?</span></li>
            <li className="car-q"><span className="car-q-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span><span className="car-q-text">What are we trying to change?</span></li>
            <li className="car-q"><span className="car-q-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span><span className="car-q-text">Is this clear?</span></li>
            <li className="car-q"><span className="car-q-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span><span className="car-q-text">Is this good enough to put our name on?</span></li>
          </ul>
        </div>
      </div>

      <div className="container car-better-closing">
        <p className="car-statement">
          <span className="car-line">That is the kind of work we want people to experience here.</span>
          <span className="car-line car-line-dim">Not because it is always easy.</span>
          <span className="car-line car-line-loud">Because it changes the way you think.</span>
        </p>
      </div>
    </section>

    <div className="svc-handoff" aria-hidden="true">
      <div className="svc-handoff-line"></div>
      <div className="svc-handoff-mark"><svg viewBox="801 344 274 272">
          <use href="#impulse-mark" />
        </svg></div>
    </div>

    {/* ============================================================
         CLOSE TO BUSINESS — six translations
         ============================================================ */}
    <section className="car-translate" id="how-we-work">
      <div className="container">
        <div className="car-translate-intro">
          <p className="car-statement car-statement-lg">
            <span className="car-line car-line-loud">The work sits close to business.</span>
            <span className="car-line">We do not make things just to finish a list.</span>
          </p>
        </div>

        <ul className="car-translate-list" aria-label="What the work has to do">
          <li className="car-translate-row">
            <span className="car-translate-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span className="car-translate-text">A post has to say something.</span>
          </li>
          <li className="car-translate-row">
            <span className="car-translate-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span className="car-translate-text">A website has to make action easier.</span>
          </li>
          <li className="car-translate-row">
            <span className="car-translate-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span className="car-translate-text">A search strategy has to build demand.</span>
          </li>
          <li className="car-translate-row">
            <span className="car-translate-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span className="car-translate-text">A film has to make a story travel.</span>
          </li>
          <li className="car-translate-row">
            <span className="car-translate-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span className="car-translate-text">A report has to make the next decision clearer.</span>
          </li>
          <li className="car-translate-row">
            <span className="car-translate-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span className="car-translate-text">An AI workflow has to save time without killing judgment.</span>
          </li>
        </ul>

        <div className="car-translate-outro">
          <p className="car-line car-line-dim">The format may change.</p>
          <p className="car-line car-line-loud">The point does not.</p>
          <p className="car-trio">
            <span>Make the work clearer.</span>
            <span>Make it sharper.</span>
            <span>Make it useful.</span>
          </p>
        </div>
      </div>
    </section>

    <div className="svc-handoff" aria-hidden="true">
      <div className="svc-handoff-line"></div>
      <div className="svc-handoff-mark"><svg viewBox="801 344 274 272">
          <use href="#impulse-mark" />
        </svg></div>
    </div>

    {/* ============================================================
         WHAT WE VALUE — four panels
         ============================================================ */}
    <section className="car-values" id="values">
      <div className="car-values-watermark" aria-hidden="true">
        <svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg>
      </div>
      <div className="container">
        <h2 className="car-section-title">What we value</h2>

        <div className="car-values-grid">
          <article className="car-value">
            <div className="car-value-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
            <h3 className="car-value-title">Care before someone checks.</h3>
            <p className="car-value-body">The best people here do not wait for someone senior to find the mistake.</p>
            <p className="car-value-body car-value-loud">They see it first.</p>
            <ul className="car-value-list">
              <li>A weak line.</li>
              <li>A careless typo.</li>
              <li>A lazy reference.</li>
              <li>A confusing update.</li>
              <li>A missing follow-up.</li>
            </ul>
            <p className="car-value-foot">Small things say a lot about how seriously someone takes the work.</p>
          </article>

          <article className="car-value">
            <div className="car-value-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
            <h3 className="car-value-title">Think before you make.</h3>
            <p className="car-value-body">Speed matters here.</p>
            <p className="car-value-body">But fast work without thought usually creates more work for everyone else.</p>
            <p className="car-value-body car-value-loud">Before the file opens, the thinking should begin.</p>
            <ul className="car-value-list">
              <li>Who is this for?</li>
              <li>Why should they care?</li>
              <li>What needs to change?</li>
              <li>What would make this better?</li>
            </ul>
          </article>

          <article className="car-value">
            <div className="car-value-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
            <h3 className="car-value-title">Use AI. Do not hide behind it.</h3>
            <p className="car-value-body">AI is part of how we work.</p>
            <p className="car-value-body">It helps us research faster, explore more routes, reduce repetitive work, and build better systems.</p>
            <p className="car-value-body">But AI does not know when a line is technically correct and still completely dead.</p>
            <p className="car-value-body car-value-loud">That part is human.</p>
            <p className="car-value-body car-value-loud">That part is yours.</p>
          </article>

          <article className="car-value">
            <div className="car-value-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
            <h3 className="car-value-title">Take feedback without falling apart.</h3>
            <p className="car-value-body">Your first draft may not survive.</p>
            <ul className="car-value-list">
              <li>Your idea may be questioned.</li>
              <li>Your line may be rewritten.</li>
              <li>Your structure may be pulled apart.</li>
            </ul>
            <p className="car-value-body car-value-dim">That is not personal.</p>
            <p className="car-value-body car-value-loud">That is the work asking to become better.</p>
            <p className="car-value-body">People who grow here are not the ones who get everything right the first time.</p>
            <p className="car-value-body car-value-loud">They are the ones who come back sharper the next time.</p>
          </article>
        </div>
      </div>
    </section>

    <div className="svc-handoff" aria-hidden="true">
      <div className="svc-handoff-line"></div>
      <div className="svc-handoff-mark"><svg viewBox="801 344 274 272">
          <use href="#impulse-mark" />
        </svg></div>
    </div>

    {/* ============================================================
         WHAT YOU CAN EXPECT
         ============================================================ */}
    <section className="car-expect">
      <div className="container car-expect-grid">
        <div className="car-expect-left">
          <h2 className="car-section-title">What you can expect here</h2>
          <p className="car-statement car-statement-lg">
            <span className="car-line car-line-loud">You can expect real work.</span>
          </p>
          <ul className="car-expect-nots">
            <li>Not fake responsibility.</li>
            <li>Not exposure that means nothing.</li>
            <li>Not learning that only exists in onboarding slides.</li>
          </ul>
        </div>

        <div className="car-expect-right">
          <ul className="car-expect-list">
            <li>
              <span className="car-expect-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
              <span>You will see how serious brands think.</span>
            </li>
            <li>
              <span className="car-expect-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
              <span>You will understand why some ideas survive and others die in the room.</span>
            </li>
            <li>
              <span className="car-expect-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
              <span>You will learn why clarity beats decoration.</span>
            </li>
            <li>
              <span className="car-expect-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
              <span>You will see why speed needs structure.</span>
            </li>
            <li>
              <span className="car-expect-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
              <span>You will understand how client trust is built in small moments, not big speeches.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container car-expect-closing">
        <p className="car-line car-line-dim">Some days will be heavy.</p>
        <p className="car-line">That is the honest part.</p>
        <p className="car-line">The promise is not that this place will always be comfortable.</p>
        <p className="car-line car-line-loud">The promise is that the work will ask more of you, and you will get better if you meet it properly.</p>
      </div>
    </section>

    <div className="svc-handoff" aria-hidden="true">
      <div className="svc-handoff-line"></div>
      <div className="svc-handoff-mark"><svg viewBox="801 344 274 272">
          <use href="#impulse-mark" />
        </svg></div>
    </div>

    {/* ============================================================
         LIFE AT IMPULSE — gallery
         ============================================================ */}
    <section className="car-life" id="life">
      <div className="container">
        <div className="car-life-header">
          {/* "Life at Impulse" is the corporate cliché being rejected.
               It appears first, then a thick strike draws through it,
               then "The Part You Actually Join" reveals as the truth. */}
          <div className="car-life-jab" aria-label="Life at Impulse — struck through">
            <span className="car-life-jab-text" aria-hidden="true">Life at Impulse</span>
            <span className="car-life-jab-strike" aria-hidden="true"></span>
          </div>
          <h2 className="car-life-title">The Part You Actually Join</h2>
        </div>

        <div className="car-life-grid">
          <div className="car-life-copy">
            <p className="car-line car-line-loud">You do not just join a company.</p>
            <ul className="car-life-list">
              <li>You join the people.</li>
              <li>The pace.</li>
              <li>The pressure.</li>
              <li>The jokes between reviews.</li>
              <li>The small saves before deadlines.</li>
              <li>The honest feedback.</li>
              <li>The strange satisfaction of making something better than it was yesterday.</li>
            </ul>
            <p className="car-line">That is the real part.</p>
            <p className="car-line car-line-dim">Not the culture line.</p>
            <p className="car-line car-line-loud">The room.</p>
          </div>

          <div className="car-life-gallery" aria-label="Life at Impulse Digital">
            <figure className="car-life-img car-life-img-1">
              <img src={`${import.meta.env.BASE_URL}images/Career Images/ChatGPT Image May 16, 2026, 10_17_32 AM (2).png`} alt="Impulse Digital Team Collaborating at Mumbai Office - Digital Marketing Agency" loading="lazy" />
            </figure>
            <figure className="car-life-img car-life-img-2">
              <img src={`${import.meta.env.BASE_URL}images/Career Images/ChatGPT Image May 16, 2026, 10_17_35 AM (5).png`} alt="Impulse Digital Team Collaborating at Mumbai Office - Digital Marketing Agency" loading="lazy" />
            </figure>
            <figure className="car-life-img car-life-img-3">
              <img src={`${import.meta.env.BASE_URL}images/Career Images/ChatGPT Image May 16, 2026, 10_17_37 AM (9).png`} alt="Impulse Digital Team Collaborating at Mumbai Office - Digital Marketing Agency" loading="lazy" />
            </figure>
            <figure className="car-life-img car-life-img-4">
              <img src={`${import.meta.env.BASE_URL}images/Career Images/ChatGPT Image May 16, 2026, 10_17_38 AM (10).png`} alt="Impulse Digital Team Collaborating at Mumbai Office - Digital Marketing Agency" loading="lazy" />
            </figure>
            <figure className="car-life-img car-life-img-5">
              <img src={`${import.meta.env.BASE_URL}images/Career Images/ChatGPT Image May 16, 2026, 11_16_44 AM (5).png`} alt="Impulse Digital Team Collaborating at Mumbai Office - Digital Marketing Agency" loading="lazy" />
            </figure>
            <figure className="car-life-img car-life-img-6">
              <img src={`${import.meta.env.BASE_URL}images/Career Images/ChatGPT Image May 16, 2026, 11_16_44 AM (6).png`} alt="Impulse Digital Team Collaborating at Mumbai Office - Digital Marketing Agency" loading="lazy" />
            </figure>
            <figure className="car-life-img car-life-img-7">
              <img src={`${import.meta.env.BASE_URL}images/Career Images/ChatGPT Image May 16, 2026, 11_16_44 AM (7).png`} alt="Impulse Digital Team Collaborating at Mumbai Office - Digital Marketing Agency" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <div className="svc-handoff" aria-hidden="true">
      <div className="svc-handoff-line"></div>
      <div className="svc-handoff-mark"><svg viewBox="801 344 274 272">
          <use href="#impulse-mark" />
        </svg></div>
    </div>

    {/* ============================================================
         FIT — You may fit here if
         ============================================================ */}
    <section className="car-fit" id="fit">
      <div className="container">
        <h2 className="car-section-title">You may fit here if</h2>
        <p className="car-fit-lead">You want to get better at what you do.</p>

        <ul className="car-fit-list">
          <li>
            <span className="car-fit-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span>You like being trusted.</span>
          </li>
          <li>
            <span className="car-fit-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span>You ask questions before making assumptions.</span>
          </li>
          <li>
            <span className="car-fit-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span>You care about the reason behind the work.</span>
          </li>
          <li>
            <span className="car-fit-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span>You can take feedback without turning it into a personal injury.</span>
          </li>
          <li>
            <span className="car-fit-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span>You are curious about brands, people, culture, technology, and growth.</span>
          </li>
          <li>
            <span className="car-fit-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span>You want to use AI to do better work, not to avoid thinking.</span>
          </li>
          <li>
            <span className="car-fit-mark"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <span>You do not need someone watching you every hour to care about quality.</span>
          </li>
        </ul>

        <div className="car-appetite">
          <div className="car-appetite-mark" aria-hidden="true"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
          <p className="car-line car-line-loud car-appetite-loud">You have appetite.</p>
          <p className="car-line car-line-dim">It can be quiet.</p>
          <p className="car-line car-line-dim">It can be loud.</p>
          <p className="car-line">But it has to be there.</p>
          <p className="car-appetite-final">Bring appetite. We will bring the standard.</p>
        </div>
      </div>
    </section>

    <div className="svc-handoff" aria-hidden="true">
      <div className="svc-handoff-line"></div>
      <div className="svc-handoff-mark"><svg viewBox="801 344 274 272">
          <use href="#impulse-mark" />
        </svg></div>
    </div>

    {/* ============================================================
         FINAL CTA — Send us / Email
         ============================================================ */}
    <section className="car-final" id="connect">
      <div className="container car-final-grid">
        <div className="car-final-copy">
          <p className="car-statement car-statement-lg">
            <span className="car-line car-line-loud">We are not looking for people who are simply available.</span>
            <span className="car-line">We are looking for people who read this and feel something familiar.</span>
          </p>
          <ul className="car-final-feels">
            <li>A little discomfort.</li>
            <li>A little excitement.</li>
            <li>A little sense that this place may ask more of them than their current one does.</li>
          </ul>
          <p className="car-line car-line-dim">That is intentional.</p>
          <p className="car-line">Impulse is not being built for people who only want a place to work.</p>
          <p className="car-line car-line-loud">It is being built for people who want a place that makes them harder to ignore.</p>
        </div>

        <aside className="car-final-card">
          <div className="car-final-spotlight" aria-hidden="true"></div>
          <p className="car-final-instruction">Send us your resume, portfolio, or a short note about the kind of work you want to do.</p>
          <p className="car-final-warn">Do not send a template.</p>
          <ul className="car-final-tells">
            <li>Tell us what you are good at.</li>
            <li>Tell us what you are trying to get better at.</li>
            <li>Tell us why this feels like the kind of room you want to be in.</li>
          </ul>

          <a className="car-final-contact" href="mailto:hr@theimpulsedigital.com?subject=I%20want%20the%20room%20that%20refuses%20average">
            <div className="car-final-row">
              <span className="car-final-label">Email</span>
              <span className="car-final-value">hr@theimpulsedigital.com</span>
            </div>
            <div className="car-final-row">
              <span className="car-final-label">Subject line</span>
              <span className="car-final-value car-final-subject">I want the room that refuses average</span>
            </div>
          </a>

        </aside>
      </div>
    </section>

    {/* ============================================================
         OPEN POSITIONS
         ============================================================ */}
    <section className="car-positions" id="open-positions" aria-labelledby="car-positions-title">
      <div className="car-positions-scroll-mark" aria-hidden="true">
        <svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg>
      </div>

      <div className="container">
        <div className="car-positions-head">
          <h2 className="car-section-title" id="car-positions-title">Open Positions</h2>
        </div>

        <div className="car-jobs-list" aria-label="Open positions">
          <article className="car-job-card" data-job-card>
            <div className="car-job-visual" aria-hidden="true">
              <span className="car-job-index">01</span>
              <svg className="car-job-mark" viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path className="car-job-mark-path"
                  d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="car-job-main">
              <h3>Social Media Content Writer</h3>
              <div className="car-job-tags">
                <span>Full-Time</span>
                <span>Mumbai, India</span>
                <span>4+ years</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <div className="car-job-actions">
                <a className="car-job-apply-btn" href="mailto:hr@theimpulsedigital.com?subject=Social%20Media%20Content%20Writer">Apply</a>
                <button className="car-job-toggle" type="button" aria-expanded="false" aria-controls="job-social-writer" aria-label="Toggle Social Media Content Writer details">
                  <svg viewBox="0 0 10 6" aria-hidden="true" focusable="false">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="car-job-details" id="job-social-writer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.</p>
              <div className="car-job-detail-grid">
                <div>
                  <h4>KEY RESPONSIBILITIES</h4>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Praesent mauris fusce nec tellus sed augue semper porta.</li>
                    <li>Curabitur sodales ligula in libero sed dignissim lacinia.</li>
                  </ul>
                </div>
                <div>
                  <h4>CANDIDATE REQUIREMENTS</h4>
                  <ul>
                    <li>Class aptent taciti sociosqu ad litora torquent per conubia.</li>
                    <li>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in.</li>
                    <li>Morbi lectus risus, iaculis vel, suscipit quis, luctus non.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="car-job-card" data-job-card>
            <div className="car-job-visual" aria-hidden="true">
              <span className="car-job-index">02</span>
              <svg className="car-job-mark" viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path className="car-job-mark-path"
                  d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="car-job-main">
              <h3>SEO Executive</h3>
              <div className="car-job-tags">
                <span>Full-time</span>
                <span>Mumbai, India</span>
                <span>2-3 years</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <div className="car-job-actions">
                <a className="car-job-apply-btn" href="mailto:hr@theimpulsedigital.com?subject=SEO%20Executive">Apply</a>
                <button className="car-job-toggle" type="button" aria-expanded="false" aria-controls="job-seo-executive" aria-label="Toggle SEO Executive details">
                  <svg viewBox="0 0 10 6" aria-hidden="true" focusable="false">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="car-job-details" id="job-seo-executive">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.</p>
              <div className="car-job-detail-grid">
                <div>
                  <h4>KEY RESPONSIBILITIES</h4>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Praesent mauris fusce nec tellus sed augue semper porta.</li>
                    <li>Curabitur sodales ligula in libero sed dignissim lacinia.</li>
                  </ul>
                </div>
                <div>
                  <h4>CANDIDATE REQUIREMENTS</h4>
                  <ul>
                    <li>Class aptent taciti sociosqu ad litora torquent per conubia.</li>
                    <li>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in.</li>
                    <li>Morbi lectus risus, iaculis vel, suscipit quis, luctus non.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="car-job-card" data-job-card>
            <div className="car-job-visual" aria-hidden="true">
              <span className="car-job-index">03</span>
              <svg className="car-job-mark" viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path className="car-job-mark-path"
                  d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="car-job-main">
              <h3>HR Executive</h3>
              <div className="car-job-tags">
                <span>Full-time</span>
                <span>Mumbai, India</span>
                <span>1-2 years</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <div className="car-job-actions">
                <a className="car-job-apply-btn" href="mailto:hr@theimpulsedigital.com?subject=HR%20Executive">Apply</a>
                <button className="car-job-toggle" type="button" aria-expanded="false" aria-controls="job-hr-executive" aria-label="Toggle HR Executive details">
                  <svg viewBox="0 0 10 6" aria-hidden="true" focusable="false">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="car-job-details" id="job-hr-executive">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.</p>
              <div className="car-job-detail-grid">
                <div>
                  <h4>KEY RESPONSIBILITIES</h4>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Praesent mauris fusce nec tellus sed augue semper porta.</li>
                    <li>Curabitur sodales ligula in libero sed dignissim lacinia.</li>
                  </ul>
                </div>
                <div>
                  <h4>CANDIDATE REQUIREMENTS</h4>
                  <ul>
                    <li>Class aptent taciti sociosqu ad litora torquent per conubia.</li>
                    <li>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in.</li>
                    <li>Morbi lectus risus, iaculis vel, suscipit quis, luctus non.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="car-job-card" data-job-card>
            <div className="car-job-visual" aria-hidden="true">
              <span className="car-job-index">04</span>
              <svg className="car-job-mark" viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                <path className="car-job-mark-path"
                  d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
              </svg>
            </div>
            <div className="car-job-main">
              <h3>Social Media Intern</h3>
              <div className="car-job-tags">
                <span>Internship</span>
                <span>Mumbai, India</span>
                <span>Fresher</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <div className="car-job-actions">
                <a className="car-job-apply-btn" href="mailto:hr@theimpulsedigital.com?subject=Social%20Media%20Intern">Apply</a>
                <button className="car-job-toggle" type="button" aria-expanded="false" aria-controls="job-social-intern" aria-label="Toggle Social Media Intern details">
                  <svg viewBox="0 0 10 6" aria-hidden="true" focusable="false">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="car-job-details" id="job-social-intern">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.</p>
              <div className="car-job-detail-grid">
                <div>
                  <h4>KEY RESPONSIBILITIES</h4>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Praesent mauris fusce nec tellus sed augue semper porta.</li>
                    <li>Curabitur sodales ligula in libero sed dignissim lacinia.</li>
                  </ul>
                </div>
                <div>
                  <h4>CANDIDATE REQUIREMENTS</h4>
                  <ul>
                    <li>Class aptent taciti sociosqu ad litora torquent per conubia.</li>
                    <li>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in.</li>
                    <li>Morbi lectus risus, iaculis vel, suscipit quis, luctus non.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

  

      <Contact />
    </main>
  );
};

export default Careers;
