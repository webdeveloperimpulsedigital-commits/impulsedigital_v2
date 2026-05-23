import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { startHeroCopyReveal } from '../utils/heroCopyReveal';

const ContactUs: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page', 'contact-page');

    const { gsap, ScrollTrigger } = window as any;

    const stopHeroReveal = startHeroCopyReveal({
      primary: document.querySelector('.contact-headline'),
      supporting: Array.from(document.querySelectorAll('.contact-lede p')),
      actions: document.querySelector('.contact-shell-form'),
    });

    const waitForGsap = setInterval(() => {
      if ((window as any).gsap && (window as any).ScrollTrigger) {
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
    if (hero && mark && form && (window as any).gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
    if (filterCards.length && (window as any).gsap && (window as any).ScrollTrigger) {
      gsap.set(filterCards, { y: 56 });
      ScrollTrigger.create({
        trigger: '.contact-filter-cards',
        start: 'top 70%',
        once: true,
        onEnter: () => gsap.to(filterCards, { y: 0, duration: 0.9, stagger: 0.16, ease: 'power3.out' })
      });
    }

    const mapShell = document.querySelector('.contact-map-shell');
    if (mapShell && (window as any).gsap && (window as any).ScrollTrigger) {
      gsap.fromTo(mapShell, { clipPath: 'inset(18% 18% 18% 18% round 22px)' }, {
        clipPath: 'inset(0% 0% 0% 0% round 22px)',
        ease: 'power3.out',
        scrollTrigger: { trigger: mapShell, start: 'top 78%', end: 'top 42%', scrub: 0.6 }
      });
    }

    return () => {
      stopHeroReveal();
      document.body.classList.remove('service-page', 'contact-page');
      document.body.style.backgroundColor = ''; // Reset background
      if (hero && (hero as any)._cleanup) {
        (hero as any)._cleanup();
      }
      clearInterval(waitForGsap);

      if ((window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger && t.trigger.closest && t.trigger.closest('.contact-page-wrapper')) {
            t.kill();
          }
        });
      }

      if ((window as any).gsap && (window as any).particlesMaterial) {
        (window as any).gsap.killTweensOf((window as any).particlesMaterial);
        (window as any).gsap.set((window as any).particlesMaterial, { opacity: 0.6 });
      }
    };
  }, []);

  useEffect(() => {
    (window as any).rccallback1132219000000597005 = () => {
      const recap = document.getElementById('recap1132219000000597005');
      if (recap) {
        recap.setAttribute('captcha-verified', 'true');
      }
      const recapErr = document.getElementById('recapErr1132219000000597005');
      if (recapErr) {
        recapErr.style.visibility = 'hidden';
      }
    };

    const renderCaptcha = () => {
      const grecaptcha = (window as any).grecaptcha;
      if (grecaptcha && grecaptcha.render) {
        const container = document.getElementById('recap1132219000000597005');
        if (container && container.innerHTML === '') {
          try {
            grecaptcha.render('recap1132219000000597005', {
              sitekey: '6LdaK0osAAAAADC8CEqZGlK1VgN2CkYB-iRXfn3y',
              theme: 'dark',
              callback: 'rccallback1132219000000597005'
            });
          } catch (e) {
            console.error('Error rendering recaptcha:', e);
          }
        }
      }
    };

    (window as any).onloadRecaptchaCallback = () => {
      renderCaptcha();
    };

    if (!(window as any).grecaptcha) {
      const script = document.createElement('script');
      script.id = 'recaptcha-key-script';
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCallback&render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      renderCaptcha();
    }

    if (!document.getElementById('zsiqscript')) {
      const $zoho = (window as any).$zoho || {};
      (window as any).$zoho = $zoho;
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: 'siqe8e2de51a58ff011f46d1d5718469d24fb1812f710b8e38bd932663adc239364',
        values: {},
        ready: function() {}
      };
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.id = 'zsiqscript';
      s.defer = true;
      s.src = 'https://salesiq.zoho.in/widget';
      document.body.appendChild(s);
    }

    if (!document.getElementById('wf_anal')) {
      const s = document.createElement('script');
      s.id = 'wf_anal';
      s.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=067668c42525f92cfed5f91050cdbfa8489c91874a5a54216702fcf877cd09f2852c07a02518ad7dce00158ab836b3bbgidf49cea193c2cf8b393426a36d01b0ab349078788f5831fbf064b6096965a444dgid0c1d92dd9017ebb9f13e39c13cebbc5bf318167b2b6f826f9a7040e44cc9d9abgidc6e30ae4a0a75b59822449105d7bdf8697ffbb537da4c276848fdfd4b89026a2&tw=6415fe8afd736bd3ade910387402f0e6a9a16c831797ff621152ee2c123cbbf3';
      s.defer = true;
      document.body.appendChild(s);
    }

    return () => {
      delete (window as any).rccallback1132219000000597005;
      delete (window as any).onloadRecaptchaCallback;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const company = form.elements.namedItem('Company') as HTMLInputElement;
    const name = form.elements.namedItem('Last Name') as HTMLInputElement;
    const email = form.elements.namedItem('Email') as HTMLInputElement;
    const phone = form.elements.namedItem('Phone') as HTMLInputElement;

    if (!company || company.value.trim().length === 0) {
      alert('Company cannot be empty');
      company?.focus();
      e.preventDefault();
      return;
    }
    if (!name || name.value.trim().length === 0) {
      alert('Name cannot be empty');
      name?.focus();
      e.preventDefault();
      return;
    }
    if (!email || email.value.trim().length === 0) {
      alert('Email cannot be empty');
      email?.focus();
      e.preventDefault();
      return;
    }
    if (!phone || phone.value.trim().length === 0) {
      alert('Phone cannot be empty');
      phone?.focus();
      e.preventDefault();
      return;
    }

    const uploadedFiles = document.getElementById('theFile1132219000000597005') as HTMLInputElement;
    if (uploadedFiles && uploadedFiles.files) {
      if (uploadedFiles.files.length > 3) {
        alert('You can upload a maximum of three files at a time.');
        uploadedFiles.focus();
        e.preventDefault();
        return;
      }
      let totalFileSize = 0;
      for (let i = 0; i < uploadedFiles.files.length; i++) {
        totalFileSize += uploadedFiles.files[i].size;
      }
      if (totalFileSize > 20971520) {
        alert('Total file(s) size should not exceed 20MB.');
        uploadedFiles.focus();
        e.preventDefault();
        return;
      }
    }

    try {
      const $zoho = (window as any).$zoho;
      if ($zoho && $zoho.salesiq) {
        const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
        if (LDTuvidObj) {
          LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid() || '';
        }

        let fullName = name.value;
        const firstNameObj = form.elements.namedItem('First Name') as HTMLInputElement;
        if (firstNameObj) {
          fullName = firstNameObj.value + ' ' + fullName;
        }
        $zoho.salesiq.visitor.name(fullName);

        if (email) {
          $zoho.salesiq.visitor.email(email.value);
        }
      }
    } catch (err) {
      console.error('Error tracking visitor:', err);
    }

    const emailVal = email.value;
    if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
      const atpos = emailVal.indexOf('@');
      const dotpos = emailVal.lastIndexOf('.');
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert('Please enter a valid email address.');
        email.focus();
        e.preventDefault();
        return;
      }
    }

    const recap = document.getElementById('recap1132219000000597005');
    if (recap && recap.getAttribute('captcha-verified') === 'false') {
      const recapErr = document.getElementById('recapErr1132219000000597005');
      if (recapErr) {
        recapErr.style.visibility = 'visible';
      }
      e.preventDefault();
      return;
    }

    const urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
      const service = urlparams.get('service') as string;
      const smarturlfield = document.createElement('input');
      smarturlfield.setAttribute('type', 'hidden');
      smarturlfield.setAttribute('value', service);
      smarturlfield.setAttribute('name', 'service');
      form.appendChild(smarturlfield);
    }

    const submitBtn = form.querySelector('.contact-submit') as HTMLButtonElement;
    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
    }
  };

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
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/contact-us/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Get In Touch | Impulse Digital" />
<meta name="twitter:description" content="If you are looking for digital marketing solutions for your brand, feel free to submit the inquiry form or give us a call." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
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
            <h1 className="contact-headline hero-copy-reveal">Bring Us the Problem You Can No Longer Ignore.</h1>
            <div className="contact-lede">
              <p className="hero-copy-reveal">Most good conversations do not begin with a service name.</p>
              <p className="hero-copy-reveal">They begin with a problem that has become too expensive to keep carrying.</p>
              <p className="hero-copy-reveal">Tell us what that problem is. We will tell you if we are the right room for it.</p>
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

          <div className="contact-hero-right" id="contact-form">
            <form 
              id="webform1132219000000597005"
              name="WebToLeads1132219000000597005"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              method="POST"
              onSubmit={handleSubmit}
              acceptCharset="UTF-8"
              className="contact-shell-form hero-copy-reveal"
              encType="multipart/form-data"
            >
              <input type="text" style={{display:'none'}} name="xnQsjsdp" value="3fdab897f0bcfb046c089a96653ff3ce3e052ac4ee2710bf1975f74e718c56f5" readOnly />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" style={{display:'none'}} name="xmIwtLD" value="73b678a6bc6723d2f2228f3b5916f3593bf43d1fbc528d305c97cc00bea7dec6afe8822544be20609bd9f6ee44997ec6" readOnly />
              <input type="text" style={{display:'none'}} name="actionType" value="TGVhZHM=" readOnly />
              <input type="text" style={{display:'none'}} name="returnURL" value="https://www.theimpulsedigital.com/thank-you/" readOnly />
              {/* Do not remove this code. */}
              <input type="text" style={{display:'none'}} id="ldeskuid" name="ldeskuid" readOnly />
              <input type="text" style={{display:'none'}} id="LDTuvid" name="LDTuvid" readOnly />
              {/* Do not remove this code. */}
              <input type="text" style={{display: 'none'}} name="aG9uZXlwb3Q" value="" readOnly />

              <div className="contact-form-grid">
                <label>
                  <span>Company name <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="text" id="Company" name="Company" autoComplete="organization" required />
                </label>
                <label>
                  <span>Your name <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="text" id="Last_Name" name="Last Name" autoComplete="name" required />
                </label>
                <label>
                  <span>Email <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="email" id="Email" name="Email" autoComplete="email" required />
                </label>
                <label>
                  <span>Phone number <span style={{color: '#ff4d4d'}}>*</span></span>
                  <input type="tel" id="Phone" name="Phone" autoComplete="tel" required />
                </label>
              </div>
              <label className="contact-message-field">
                <span>Message</span>
                <textarea id="Description" name="Description" rows={5} placeholder="What is the problem you want us to understand?"></textarea>
              </label>
              <label className="contact-upload-field">
                <span>Upload brief, RFQ, deck, or note, optional (Max 3 files, 20MB limit)</span>
                <input type="file" name="theFile" id="theFile1132219000000597005" multiple />
                <strong>Have a brief, RFQ, deck, or note? Attach it here.</strong>
                <em>No brief yet? That is fine. The problem is enough.</em>
              </label>

              <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div id="recap1132219000000597005" {...{ 'captcha-verified': 'false' }}></div>
                <div id="recapErr1132219000000597005" style={{ fontSize: '12px', color: '#ff4d4d', minHeight: '1.2em', visibility: 'hidden' }}>
                  Captcha validation failed. If you are not a robot then please try again.
                </div>
              </div>

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
