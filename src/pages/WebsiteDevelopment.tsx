import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ServiceHero from '../components/Service/ServiceHero';
import ServiceHandoff from '../components/Service/ServiceHandoff';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import MobileSignalRail from '../components/Service/MobileSignalRail';
import { useServicePageBackground } from '../hooks/useServicePageBackground';

import {
  ServiceStats,
  ServiceProblem,
  ServiceVs,
  ServiceUses,
  ServiceWhenToUse,
  ServiceGuardrails,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ
} from '../components/Service/ServiceTemplate';

import { websiteDevelopmentData as data } from '../data/websiteDevelopmentData';

const { gsap, ScrollTrigger } = window as any;

const WebsiteDevelopment: React.FC = () => {
  useServicePageBackground();

  useEffect(() => {
    document.body.classList.add('website-page');
    
    // Channels orbit animation
    const stage = document.getElementById('channels-stage');
    const linesSvg = document.getElementById('channels-orbit-lines');
    const centerEl = document.querySelector('.svc-channels-center');
    const centerPath = centerEl ? centerEl.querySelector('path') : null;

    let pulseTimer: any = null;
    let convergenceActive = false;
    let measureTimeout1: any, measureTimeout2: any;
    let sectionObs: IntersectionObserver | null = null;
    let measureFn: () => void = () => {};

    const isMobileChannels = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobileChannels && stage && linesSvg && centerEl && centerPath && gsap && ScrollTrigger) {
      let chipPositions: any[] = [];
      let cx = 0, cy = 0;
      let markRadius = 80;

      measureFn = () => {
        const sr = stage.getBoundingClientRect();
        linesSvg.setAttribute('viewBox', `0 0 ${sr.width} ${sr.height}`);
        cx = sr.width / 2;
        cy = sr.height / 2;
        const centerRect = centerEl.getBoundingClientRect();
        markRadius = Math.min(centerRect.width, centerRect.height) * 0.46;

        chipPositions = [...stage.querySelectorAll('.svc-channel-chip')].map((chip) => {
          const cr = chip.getBoundingClientRect();
          const x = cr.left - sr.left + cr.width / 2;
          const y = cr.top - sr.top + cr.height / 2;
          const dx = cx - x;
          const dy = cy - y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const tx = x + dx * ((dist - markRadius) / dist);
          const ty = y + dy * ((dist - markRadius) / dist);
          return { x, y, tx, ty };
        });

        linesSvg.querySelectorAll('line').forEach(l => l.remove());
        chipPositions.forEach((p) => {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', p.x);
          line.setAttribute('y1', p.y);
          line.setAttribute('x2', p.tx);
          line.setAttribute('y2', p.ty);
          linesSvg.appendChild(line);
        });
      };

      const flashCenter = () => {
        gsap.fromTo(centerPath,
          { strokeWidth: 6, stroke: 'rgba(138, 92, 246, 0.85)' },
          {
            strokeWidth: 11,
            stroke: 'rgba(220, 200, 255, 1)',
            duration: 0.18,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out'
          }
        );
      };

      const emitPulse = () => {
        if (!chipPositions.length) return;
        const idx = Math.floor(Math.random() * chipPositions.length);
        const p = chipPositions[idx];
        const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        pulse.setAttribute('cx', String(p.x));
        pulse.setAttribute('cy', String(p.y));
        pulse.setAttribute('r', '4.5');
        pulse.setAttribute('class', 'svc-channels-pulse');
        linesSvg.appendChild(pulse);

        gsap.timeline({ onComplete: () => pulse.remove() })
          .fromTo(pulse, { opacity: 0, attr: { r: 2 } }, { opacity: 1, attr: { r: 5 }, duration: 0.35, ease: 'power2.out' })
          .to(pulse, {
            attr: { cx: p.tx, cy: p.ty },
            duration: 1.3,
            ease: 'power2.in'
          }, 0)
          .to(pulse, { opacity: 0, attr: { r: 2 }, duration: 0.2, ease: 'power2.in' }, '-=0.18')
          .add(flashCenter, '-=0.18');
      };

      const startConvergence = () => {
        if (convergenceActive) return;
        convergenceActive = true;
        gsap.fromTo(centerPath,
          { opacity: 0.15, strokeWidth: 4 },
          { opacity: 1, strokeWidth: 6, duration: 1.6, ease: 'power2.out' }
        );
        pulseTimer = setInterval(emitPulse, 380);
      };

      const stopConvergence = () => {
        convergenceActive = false;
        if (pulseTimer) { clearInterval(pulseTimer); pulseTimer = null; }
      };

      measureFn();
      measureTimeout1 = setTimeout(measureFn, 250);
      measureTimeout2 = setTimeout(measureFn, 800);
      window.addEventListener('resize', measureFn);

      sectionObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startConvergence();
          else stopConvergence();
        });
      }, { threshold: 0.2 });
      sectionObs.observe(stage);

      gsap.set(centerPath, { opacity: 0.15 });
    }

    return () => {
      document.body.classList.remove('website-page');
      window.removeEventListener('resize', measureFn);
      if (pulseTimer) clearInterval(pulseTimer);
      clearTimeout(measureTimeout1);
      clearTimeout(measureTimeout2);
      if (sectionObs) sectionObs.disconnect();
    };
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>Website Design Company in Thane | Website Development | Impulse Digital</title>
<meta name="description" content="Impulse Digital is a trusted website development company in Thane delivering fast, scalable, and conversion-focused websites for growing businesses. We are also a leading website design company in Thane creating modern, user-friendly interfaces that enhance engagement & performance." />
<meta name="keywords" content="website design company in thane, website development company in thane, web design service, website development service, mumbai, india, impulse digital" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://www.theimpulsedigital.com/brand-infrastructure/website-development/" />
<meta property="og:title" content="Website Design Company in Thane | Website Development | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is a trusted website development company in Thane delivering fast, scalable, and conversion-focused websites for growing businesses. We are also a leading website design company in Thane creating modern, user-friendly interfaces that enhance engagement & performance." />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta property="og:url" content="https://www.theimpulsedigital.com/services/website-development/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Impulse Digital" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Website Design Company in Thane | Website Development | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is a trusted website development company in Thane delivering fast, scalable, and conversion-focused websites for growing businesses. We are also a leading website design company in Thane creating modern, user-friendly interfaces that enhance engagement & performance." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.webp" />
<meta name="twitter:site" content="@impulsedigi" />
      


      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/brand-infrastructure/website-development/#service","name":"Website Development Services","url":"https://www.theimpulsedigital.com/brand-infrastructure/website-development/","description":"Impulse Digital provides website development services including responsive web design, UI UX design, CMS development, SEO-ready website architecture, landing pages, performance optimisation, and conversion-focused digital experiences.","serviceType":["Website Development","Website Design","UI UX Design","Responsive Web Development","CMS Development","Landing Page Development","SEO-Friendly Website Development"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}}) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","@id":"https://www.theimpulsedigital.com/brand-infrastructure/website-development/#faq","url":"https://www.theimpulsedigital.com/brand-infrastructure/website-development/","mainEntity":[{"@type":"Question","name":"What does Impulse Digital offer in website design & development services?","acceptedAnswer":{"@type":"Answer","text":"As a full-service website development company, we cover every phase of discovery, information architecture, design, development, content support, testing, launch, and post-launch maintenance. Each step is aligned to your goals such as brand credibility, performance, SEO readiness, and lead conversion. Our website design and development services ensure your digital presence is visually engaging and performance-driven."}},{"@type":"Question","name":"How do you decide on the right platform or CMS for our site?","acceptedAnswer":{"@type":"Answer","text":"We evaluate your goals, content workflows, integration needs, and budget. Based on these insights, we recommend the right platform such as WordPress, Shopify, React, or a custom build, outlining trade-offs for scalability, security, and ease of management."}},{"@type":"Question","name":"How do you ensure fast load times and strong performance?","acceptedAnswer":{"@type":"Answer","text":"Performance is a core part of our web services. We optimize images and code, manage scripts efficiently, implement caching, and follow clean coding standards. Core Web Vitals are tracked during development and post-launch to ensure speed and responsiveness."}},{"@type":"Question","name":"Will the website be mobile-friendly and cross-browser compatible?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We follow a mobile-first approach and test across modern browsers and devices. Interfaces are optimized for touch gestures, various screen sizes, and accessibility for a consistent experience across platforms."}},{"@type":"Question","name":"How do you make the website search-ready at launch?","acceptedAnswer":{"@type":"Answer","text":"We integrate on-page SEO best practices from day one optimized structure, metadata, internal linking, image alt text, analytics, and Google Search Console setup. XML sitemaps are submitted and guidance is provided for content strategy and organic growth."}},{"@type":"Question","name":"What is your approach to security and data protection?","acceptedAnswer":{"@type":"Answer","text":"Security is built into our development process. We implement secure coding practices, SSL, software updates, backups, CDN, and strict access controls to ensure data privacy for both you and your users."}},{"@type":"Question","name":"Can you handle content migration and redirects from an existing site?","acceptedAnswer":{"@type":"Answer","text":"Yes. We manage content migration and URL mapping to preserve SEO equity. Redirects are tested to ensure a seamless experience for visitors and search engines."}},{"@type":"Question","name":"Do you provide hosting and domain support?","acceptedAnswer":{"@type":"Answer","text":"We can recommend or provision hosting, manage domain setup, and configure SSL certificates, ensuring stable performance, security, and clear ownership of digital assets."}},{"@type":"Question","name":"What happens after the site goes live?","acceptedAnswer":{"@type":"Answer","text":"Post-launch, our maintenance program covers monitoring, updates, performance reviews, small enhancements, uptime tracking, and traffic analysis. This ensures long-term reliability and continuous improvement of your website."}},{"@type":"Question","name":"How long will the project take and what affects the timeline?","acceptedAnswer":{"@type":"Answer","text":"Timelines depend on scope, integrations, and feedback cycles. During discovery, we share a detailed milestone plan and provide regular updates to keep you informed. Our structured process ensures a transparent and efficient journey from concept to completion."}},{"@type":"Question","name":"Do you create custom designs or use templates?","acceptedAnswer":{"@type":"Answer","text":"We focus on custom designs tailored to your brand and audience. Templates may be used for rapid prototyping, but the final design is always unique and aligned with your business goals."}},{"@type":"Question","name":"Can you integrate third-party tools and APIs?","acceptedAnswer":{"@type":"Answer","text":"Yes. We handle integrations with CRMs, payment gateways, analytics, marketing tools, and other APIs to extend your website’s functionality and business impact."}}]}) }} />
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org","@type": "FAQPage","@id": "https://www.theimpulsedigital.com/brand-infrastructure/website-development/#faq","url": "https://www.theimpulsedigital.com/brand-infrastructure/website-development/","mainEntity": [{"@type": "Question","name": "What does Impulse Digital offer in website design & development services?","acceptedAnswer": {"@type": "Answer","text": "As a full-service website development company, we cover every phase of discovery, information architecture, design, development, content support, testing, launch, and post-launch maintenance. Each step is aligned to your goals such as brand credibility, performance, SEO readiness, and lead conversion. Our website design and development services ensure your digital presence is visually engaging and performance-driven."}},{"@type": "Question","name": "How do you decide on the right platform or CMS for our site?","acceptedAnswer": {"@type": "Answer","text": "We evaluate your goals, content workflows, integration needs, and budget. Based on these insights, we recommend the right platform such as WordPress, Shopify, React, or a custom build, outlining trade-offs for scalability, security, and ease of management."}},{"@type": "Question","name": "How do you ensure fast load times and strong performance?","acceptedAnswer": {"@type": "Answer","text": "Performance is a core part of our web services. We optimize images and code, manage scripts efficiently, implement caching, and follow clean coding standards. Core Web Vitals are tracked during development and post-launch to ensure speed and responsiveness."}},{"@type": "Question","name": "Will the website be mobile-friendly and cross-browser compatible?","acceptedAnswer": {"@type": "Answer","text": "Absolutely. We follow a mobile-first approach and test across modern browsers and devices. Interfaces are optimized for touch gestures, various screen sizes, and accessibility for a consistent experience across platforms."}},{"@type": "Question","name": "How do you make the website search-ready at launch?","acceptedAnswer": {"@type": "Answer","text": "We integrate on-page SEO best practices from day one optimized structure, metadata, internal linking, image alt text, analytics, and Google Search Console setup. XML sitemaps are submitted and guidance is provided for content strategy and organic growth."}},{"@type": "Question","name": "What is your approach to security and data protection?","acceptedAnswer": {"@type": "Answer","text": "Security is built into our development process. We implement secure coding practices, SSL, software updates, backups, CDN, and strict access controls to ensure data privacy for both you and your users."}},{"@type": "Question","name": "Can you handle content migration and redirects from an existing site?","acceptedAnswer": {"@type": "Answer","text": "Yes. We manage content migration and URL mapping to preserve SEO equity. Redirects are tested to ensure a seamless experience for visitors and search engines."}},{"@type": "Question","name": "Do you provide hosting and domain support?","acceptedAnswer": {"@type": "Answer","text": "We can recommend or provision hosting, manage domain setup, and configure servers based on your project requirements. Alternatively, we can deploy the site on your existing infrastructure if preferred."}}]}) }} />        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org","@type": "FAQPage","@id": "https://www.theimpulsedigital.com/brand-infrastructure/website-development/#faq","url": "https://www.theimpulsedigital.com/brand-infrastructure/website-development/","mainEntity": [{"@type": "Question","name": "What does Impulse Digital offer in website design & development services?","acceptedAnswer": {"@type": "Answer","text": "As a full-service website development company, we cover every phase of discovery, information architecture, design, development, content support, testing, launch, and post-launch maintenance. Each step is aligned to your goals such as brand credibility, performance, SEO readiness, and lead conversion. Our website design and development services ensure your digital presence is visually engaging and performance-driven."}},{"@type": "Question","name": "How do you decide on the right platform or CMS for our site?","acceptedAnswer": {"@type": "Answer","text": "We evaluate your goals, content workflows, integration needs, and budget. Based on these insights, we recommend the right platform such as WordPress, Shopify, React, or a custom build, outlining trade-offs for scalability, security, and ease of management."}},{"@type": "Question","name": "How do you ensure fast load times and strong performance?","acceptedAnswer": {"@type": "Answer","text": "Performance is a core part of our web services. We optimize images and code, manage scripts efficiently, implement caching, and follow clean coding standards. Core Web Vitals are tracked during development and post-launch to ensure speed and responsiveness."}},{"@type": "Question","name": "Will the website be mobile-friendly and cross-browser compatible?","acceptedAnswer": {"@type": "Answer","text": "Absolutely. We follow a mobile-first approach and test across modern browsers and devices. Interfaces are optimized for touch gestures, various screen sizes, and accessibility for a consistent experience across platforms."}},{"@type": "Question","name": "How do you make the website search-ready at launch?","acceptedAnswer": {"@type": "Answer","text": "We integrate on-page SEO best practices from day one optimized structure, metadata, internal linking, image alt text, analytics, and Google Search Console setup. XML sitemaps are submitted and guidance is provided for content strategy and organic growth."}},{"@type": "Question","name": "What is your approach to security and data protection?","acceptedAnswer": {"@type": "Answer","text": "Security is built into our development process. We implement secure coding practices, SSL, software updates, backups, CDN, and strict access controls to ensure data privacy for both you and your users."}},{"@type": "Question","name": "Can you handle content migration and redirects from an existing site?","acceptedAnswer": {"@type": "Answer","text": "Yes. We manage content migration and URL mapping to preserve SEO equity. Redirects are tested to ensure a seamless experience for visitors and search engines."}},{"@type": "Question","name": "Do you provide hosting and domain support?","acceptedAnswer": {"@type": "Answer","text": "We can recommend or provision hosting, manage domain setup, and configure servers based on your project requirements. Alternatively, we can deploy the site on your existing infrastructure if preferred."}}]}) }} />\n      </Helmet>
      <ServiceHero 
        headlineParts={data.hero.headlineParts}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        buttons={data.hero.buttons}
      />

      {data.stats && <ServiceStats data={data.stats} />}
      <ServiceHandoff />
      
      {data.problem && <ServiceProblem data={data.problem} />}
      <ServiceHandoff />
      
      {data.vs && <ServiceVs data={data.vs} />}
      <ServiceHandoff />
      
      {data.uses && <ServiceUses data={data.uses} />}
      <ServiceHandoff />
      
      {/* CHANNELS */}
      {data.channels && (
        <section className="svc-channels has-mobile-signal">
          <div className="container">
            <h2 className="svc-h2 split-text">{data.channels.title}</h2>
            <p className="svc-channels-intro">{data.channels.intro}</p>
            <div className="svc-channels-stage" id="channels-stage">
              <svg className="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
              <div className="svc-channels-center" aria-hidden="true">
                <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                </svg>
              </div>
              <div className="svc-channels-orbit">
                {data.channels.list.map((item: any, i: number) => (
                  <span key={i} className="svc-channel-chip" style={{ '--chip-left': item.pos.left, '--chip-top': item.pos.top } as React.CSSProperties}>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <MobileSignalRail items={data.channels.list.map((item: any) => item.label)} />
          </div>
        </section>
      )}

      <ServiceHandoff />
      
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />

      {data.guardrails && <ServiceGuardrails data={data.guardrails} />}
      <ServiceHandoff />

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Teams That Need Websites Built for Decisions" />
      
      <Testimonials />
      <ServiceHandoff />
      
      {data.fit && <ServiceFit data={data.fit} />}
      <ServiceHandoff />
      
      {data.finalCta && <ServiceFinalCTA data={data.finalCta} />}
      <Contact />
      {data.faq && data.faq.length > 0 && <ServiceFAQ data={data.faq} />}
    </main>
  );
};

export default WebsiteDevelopment;
