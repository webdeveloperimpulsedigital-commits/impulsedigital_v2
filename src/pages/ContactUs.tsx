import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';

const ContactUs: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page', 'contact-page');

    const { gsap, ScrollTrigger } = window as any;

    const runContactIntro = () => {
      if (!gsap) return;
      const headline = document.querySelector('.contact-headline');
      const lede = document.querySelector('.contact-lede');
      const form = document.querySelector('.contact-shell-form');

      if (headline) {
        gsap.fromTo(headline,
          { y: 34 },
          { y: 0, duration: 1.05, ease: 'power3.out', delay: 0.12 }
        );
      }

      if (lede) {
        gsap.fromTo(lede.querySelectorAll('p'), { y: 24 }, { y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.75 });
      }
      if (form) {
        gsap.fromTo(form, { y: 38, scale: 0.985 }, { y: 0, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.45 });
      }
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runContactIntro);
    } else {
      setTimeout(runContactIntro, 120);
    }

    const waitForGsap = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(waitForGsap);
        const trigger = document.querySelector('#warp-start');
        if (!trigger) return;

        gsap.to(document.body, {
          backgroundColor: '#000000',
          scrollTrigger: { trigger: trigger, start: 'top bottom', end: 'top top', scrub: true }
        });

        if ((window as any).particlesMaterial) {
          gsap.fromTo((window as any).particlesMaterial,
            { opacity: 0.68 },
            { opacity: 0, scrollTrigger: { trigger: trigger, start: 'top 85%', end: 'top 25%', scrub: true } }
          );
        }
      }
    }, 80);
    setTimeout(() => clearInterval(waitForGsap), 6000);

    const hero = document.querySelector('.contact-hero');
    const mark = document.querySelector('.contact-hero-mark');
    const form = document.querySelector('.contact-shell-form');
    if (hero && mark && form && window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let cx = 0, cy = 0, tx = 0, ty = 0;
      const moveHandler = (event: MouseEvent) => {
        const rect = hero.getBoundingClientRect();
        tx = ((event.clientX - rect.left) / rect.width) - 0.5;
        ty = ((event.clientY - rect.top) / rect.height) - 0.5;
      };
      hero.addEventListener('mousemove', moveHandler as EventListener);
      
      const tickerHandler = () => {
        cx += (tx - cx) * 0.08;
        cy += (ty - cy) * 0.08;
        gsap.set(mark, { x: cx * -34, y: cy * -28, rotate: cx * 4 });
        gsap.set(form, { x: cx * 8, y: cy * 6 });
      };
      gsap.ticker.add(tickerHandler);
      
      // Cleanup for this effect
      (hero as any)._cleanup = () => {
        hero.removeEventListener('mousemove', moveHandler as EventListener);
        gsap.ticker.remove(tickerHandler);
      };
    }

    document.querySelectorAll('.contact-shell-form input, .contact-shell-form textarea').forEach((field) => {
      const inputField = field as HTMLInputElement | HTMLTextAreaElement;
      field.addEventListener('focus', () => field.closest('label')?.classList.add('active'));
      field.addEventListener('blur', () => field.closest('label')?.classList.toggle('active', Boolean(inputField.value)));
    });

    const filterCards = document.querySelectorAll('.contact-filter-card');
    if (filterCards.length && window.gsap && window.ScrollTrigger) {
      gsap.set(filterCards, { y: 56 });
      ScrollTrigger.create({
        trigger: '.contact-filter-cards',
        start: 'top 70%',
        once: true,
        onEnter: () => gsap.to(filterCards, { y: 0, duration: 0.9, stagger: 0.16, ease: 'power3.out' })
      });
    }

    const mapShell = document.querySelector('.contact-map-shell');
    if (mapShell && window.gsap && window.ScrollTrigger) {
      gsap.fromTo(mapShell, { clipPath: 'inset(18% 18% 18% 18% round 22px)' }, {
        clipPath: 'inset(0% 0% 0% 0% round 22px)',
        ease: 'power3.out',
        scrollTrigger: { trigger: mapShell, start: 'top 78%', end: 'top 42%', scrub: 0.6 }
      });
    }

    return () => {
      document.body.classList.remove('service-page', 'contact-page');
      document.body.style.backgroundColor = ''; // Reset background
      if (hero && (hero as any)._cleanup) {
        (hero as any)._cleanup();
      }
      clearInterval(waitForGsap);
    };
  }, []);

  return (
    <main id="main-content" className="contact-page-wrapper">
      <Helmet>
        <title>Get In Touch | Impulse Digital</title>
<meta name="description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta name="keywords" content="contact us, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/contact-us/" />
<meta property="og:title" content="Get In Touch | Impulse Digital" />
<meta property="og:description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:url" content="https://www.theimpulsedigital.com/contact-us/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Get In Touch | Impulse Digital" />
<meta name="twitter:description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:site" content="@impulsedigi" />
      </Helmet>

      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <defs>
          <symbol id="impulse-mark" viewBox="801 344 274 272">
            <path
              d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
          </symbol>
        </defs>
      </svg>

      <section className="contact-hero">
        <div className="contact-hero-mark" aria-hidden="true">
          <svg viewBox="801 344 274 272">
            <use href="#impulse-mark" />
          </svg>
        </div>
        <div className="contact-hero-grid">
          <div className="contact-hero-copy">
            <h1 className="contact-headline">Bring Us the Problem You Can No Longer Ignore.</h1>
            <div className="contact-lede">
              <p>Most good conversations do not begin with a service name.</p>
              <p>They begin with a problem that has become too expensive to keep carrying.</p>
              <p>Tell us what that problem is. We will tell you if we are the right room for it.</p>
            </div>
          </div>

          <div className="contact-filter-cards" id="warp-start">
            <article className="contact-filter-card">
              <h2>We Only Take Work We Can Do Justice To.</h2>
              <p>We are not built to say yes to everything.</p>
              <p>There is work we can do extremely well, and there is work someone else may be better suited for.</p>
              <p>So we will look at what you share and respond honestly.</p>
            </article>

            <article className="contact-filter-card contact-filter-card-alert">
              <h2>This Form Is Not for Job Applications.</h2>
              <p>If you are applying for a role, do not use this form.</p>
              <p>Applications sent here will not reach HR. They will not be reviewed. They will not be considered.</p>
              <p>Please apply only through the Careers page or the hiring email mentioned there.</p>
              <p>This form is for business enquiries only.</p>
            </article>
          </div>

          <div className="contact-hero-right">
            <form className="contact-shell-form" id="contact-form" encType="multipart/form-data">
              <div className="contact-form-grid">
                <label>
                  <span>Company name <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="text" name="company" autoComplete="organization" required />
                </label>
                <label>
                  <span>Your name <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  <span>Email <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                  <span>Phone number <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="tel" name="phone" autoComplete="tel" required />
                </label>
              </div>
              <label className="contact-message-field">
                <span>Message</span>
                <textarea name="message" rows={5} placeholder="What is the problem you want us to understand?"></textarea>
              </label>
              <label className="contact-upload-field">
                <span>Upload brief, RFQ, deck, or note, optional</span>
                <input type="file" name="brief" />
                <strong>Have a brief, RFQ, deck, or note? Attach it here.</strong>
                <em>No brief yet? That is fine. The problem is enough.</em>
              </label>
              <button type="submit" className="contact-submit">
                <span>Start a Conversation</span>
                <svg viewBox="801 344 274 272" aria-hidden="true">
                  <use href="#impulse-mark" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="container contact-location-grid">
          <div className="contact-info-row">
            <div className="contact-direct-copy">
              <p className="contact-kicker">Prefer To Connect Directly?</p>
              <p className="contact-address" style={{ marginBottom: '2rem' }}>For business enquiries, you can also reach us here.</p>
              <div className="contact-direct-links">
                <a href="mailto:collabs@theimpulsedigital.com" className="contact-direct-link">
                  <span className="contact-direct-label">Email</span>
                  <span className="contact-direct-value">collabs@theimpulsedigital.com</span>
                </a>
                <a href="tel:+919769285224" className="contact-direct-link">
                  <span className="contact-direct-label">Phone</span>
                  <span className="contact-direct-value">+91-9769285224</span>
                </a>
              </div>
            </div>

            <div className="contact-location-copy">
              <p className="contact-kicker">Where You'll Find Us</p>
              <p className="contact-address">304/305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate, Thane (W), 400604.</p>
            </div>
          </div>
          <div className="contact-map-shell" aria-label="Map embed placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.423719830889!2d72.9554104!3d19.1984954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92138bc5b4b%3A0x6b63e795c6c8eec9!2sImpulse%20Digital!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0, zIndex: 2, filter: 'grayscale(100%) invert(90%) opacity(0.8)' }}
              allowFullScreen={true} loading="lazy"></iframe>
            <div className="contact-map-grid" aria-hidden="true" style={{ zIndex: 1 }}></div>
            <svg viewBox="801 344 274 272" aria-hidden="true" style={{ zIndex: 3, pointerEvents: 'none', opacity: 0.5 }}>
              <use href="#impulse-mark" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
