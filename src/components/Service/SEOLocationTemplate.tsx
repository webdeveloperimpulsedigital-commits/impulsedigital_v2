import React, { useState, useEffect } from 'react';
import { SEOLocationsGrid } from './SEOLocationsGrid';
import ServiceHandoff from './ServiceHandoff';

interface SEOData {
  location: string;
  services: { title: string; items: { title: string; text: string[] }[] };
  whyUs: { title: string; items: { title: string; text: string[] }[] };
  process: { title: string; items: { title: string; text: string[] }[] };
  deliverables: { title: string; items: { title: string; text: string[] }[] };
  faq: { title: string; items: { question: string; answer: string[] }[] };
}

const SEOLocationTemplate: React.FC<{ data: SEOData }> = ({ data }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = window as any;
    if (!gsap || !ScrollTrigger) return;
    
    let ctx = gsap.context(() => {
      // Grid Cards
      const cards = document.querySelectorAll('.seo-loc-card');
    if (cards.length) {
      gsap.set(cards, { opacity: 0, y: 40 });
      ScrollTrigger.batch('.seo-loc-card', {
        onEnter: (elements: any) => {
          gsap.to(elements, {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out'
          });
        }
      });
    }

    // Fit List
    const fitItems = document.querySelectorAll('.svc-text-list-wrapper .svc-fit-list li');
    if (fitItems.length) {
      gsap.set(fitItems, { opacity: 0, x: -12 });
      ScrollTrigger.create({
        trigger: '.svc-text-list-wrapper',
        start: 'top 65%',
        once: true,
        onEnter: () => {
          gsap.to(fitItems, {
            opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out'
          });
        }
      });
    }

    // Scrubber Process
    const textFills = gsap.utils.toArray('.scrub-container .text-fill');
    textFills.forEach((fill: any) => {
      gsap.to(fill, {
        backgroundPositionX: '0%', ease: 'none',
        scrollTrigger: { trigger: fill, scrub: 1, start: 'top 80%', end: 'top 20%' }
      });
    });


    
    }); // End of gsap.context

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
    setTimeout(() => {
      const { ScrollTrigger } = window as any;
      if (ScrollTrigger) ScrollTrigger.refresh();
    }, 350);
  };

  return (
    <>
      {/* Section 1: Services (Grid Layout) */}
      {data.services && data.services.items && data.services.items.length > 0 && (
        <section className="svc-uses glass-panel" id="loc-services">
          <div className="container">
            {data.services.title && <h2 className="svc-h2 split-text">{data.services.title}</h2>}
            <div className="svc-uses-grid">
              {data.services.items.map((item, i) => (
                item.title && (
                  <div className="svc-use-card seo-loc-card" data-cursor="DEFAULT" key={i}>
                    <div className="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
                    <h3 className="svc-use-title">{item.title}</h3>
                    {item.text.map((p, j) => (
                      <p className="svc-use-body" key={j}>{p}</p>
                    ))}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Why Us (Fit List Layout) */}
      {data.whyUs && data.whyUs.items && data.whyUs.items.length > 0 && (
        <>
          <ServiceHandoff />
          <section className="svc-fit svc-text-list-wrapper">
            <div className="container">
              <div className="svc-fit-grid">
                <div>
                  {data.whyUs.title && <h2 className="svc-h2 split-text">{data.whyUs.title}</h2>}
                </div>
                <div>
                  <ul className="svc-fit-list">
                    {data.whyUs.items.map((item, i) => (
                      <li key={i}>
                        <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--impulse-violet)' }}>{item.title}</strong>
                        {item.text.map((p, j) => (
                          <p key={j} style={{ color: 'var(--soft-grey)' }}>{p}</p>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Section 3: Process (Scrubber Layout) */}
      {data.process && data.process.items && data.process.items.length > 0 && (
        <>
          <ServiceHandoff />
          <section className="services glass-panel" id="loc-process">
            <div className="container">
              {data.process.title && <h2 className="section-heading split-text">{data.process.title}</h2>}
              <div className="scrub-container">
                {data.process.items.map((step, i) => (
                  <div className="scrub-item" key={i}>
                    <div className="scrub-left">
                      <div className="service-mark-draw" aria-hidden="true">
                        <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path className="service-mark-svg-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" stroke="#543D98" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="service-num">{(i + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <div className="scrub-right">
                      <h3 className="scrub-title text-fill" data-text={step.title}>{step.title}</h3>
                      {step.text.map((p, j) => (
                        <p className="scrub-desc" key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Section 4: Deliverables (Guardrails / Grid Layout with different styling) */}
      {data.deliverables && data.deliverables.items && data.deliverables.items.length > 0 && (
        <>
          <ServiceHandoff />
          <section className="svc-guardrails">
            <div className="container">
              {data.deliverables.title && <h2 className="svc-h2 split-text">{data.deliverables.title}</h2>}
              <div className="svc-guard-list">
                {data.deliverables.items.map((item, i) => (
                  <div className="svc-guard-row" key={i}>
                    <span className="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
                    <div className="svc-guard-title">{item.title}</div>
                    <div className="svc-guard-desc">
                      {item.text.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Premium FAQ */}
      {data.faq && data.faq.items && data.faq.items.length > 0 && (
        <>
          <ServiceHandoff />
          <section className="faq glass-panel" id="faq">
            <div className="container">
              <h2 className="section-heading split-text">{data.faq.title || "FAQ's Curious Much?"}</h2>
              <div className="accordion">
                {data.faq.items.map((item, i) => {
                  const isActive = activeFaq === i;
                  return (
                    <div className={`acc-item ${isActive ? 'active' : ''}`} key={i}>
                      <div 
                        className="acc-header" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => toggleFaq(i)}
                      >
                        <h3>{item.question}</h3>
                        <span className="acc-icon" style={{ transform: isActive ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                      </div>
                      <div 
                        className="acc-content" 
                        style={{ 
                          maxHeight: isActive ? '1000px' : '0px', 
                          overflow: 'hidden', 
                          transition: 'max-height 0.4s ease' 
                        }}
                      >
                        {item.answer.map((ans, j) => (
                          <p key={j} dangerouslySetInnerHTML={{ __html: ans }}></p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      <SEOLocationsGrid currentLocation={data.location} />
    </>
  );
};

export default SEOLocationTemplate;
