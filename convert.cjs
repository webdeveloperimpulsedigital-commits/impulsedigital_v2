const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const files = [
    { html: 'generative-search-optimisation.html', page: 'GenerativeSearchOptimisation' },
    { html: 'website-development.html', page: 'WebsiteDevelopment' },
    { html: 'social-media-management.html', page: 'SocialMediaManagement' },
    { html: 'employer-branding.html', page: 'EmployerBranding' },
    { html: 'branding.html', page: 'Branding' },
    { html: 'search-engine-optimisation.html', page: 'SearchEngineOptimisation' }
];

function htmlToJsxString(html) {
    let jsx = html;
    jsx = jsx.replace(/class=\"/g, 'className=\"');
    jsx = jsx.replace(/for=\"/g, 'htmlFor=\"');
    jsx = jsx.replace(/stroke-width=\"/g, 'strokeWidth=\"');
    jsx = jsx.replace(/stroke-linecap=\"/g, 'strokeLinecap=\"');
    jsx = jsx.replace(/stroke-linejoin=\"/g, 'strokeLinejoin=\"');
    jsx = jsx.replace(/clip-rule=\"/g, 'clipRule=\"');
    jsx = jsx.replace(/fill-rule=\"/g, 'fillRule=\"');
    jsx = jsx.replace(/stroke-miterlimit=\"/g, 'strokeMiterlimit=\"');
    jsx = jsx.replace(/clip-path=\"/g, 'clipPath=\"');
    
    // Self-close tags
    const selfClosing = ['img', 'br', 'hr', 'source', 'input'];
    selfClosing.forEach(tag => {
        const regex = new RegExp(`<${tag}([^>]*)>`, 'g');
        jsx = jsx.replace(regex, (match, p1) => {
            if(p1.trim().endsWith('/')) return match;
            return `<${tag}${p1} />`;
        });
    });

    // Replace images to use BASE_URL
    jsx = jsx.replace(/src=\"images\//g, 'src={`${import.meta.env.BASE_URL}images/');
    jsx = jsx.replace(/\.svg\"/g, '.svg`}');
    jsx = jsx.replace(/\.png\"/g, '.png`}');
    jsx = jsx.replace(/\.jpg\"/g, '.jpg`}');
    jsx = jsx.replace(/\.jpeg\"/g, '.jpeg`}');
    jsx = jsx.replace(/\.mp4\"/g, '.mp4`}');
    jsx = jsx.replace(/\.webp\"/g, '.webp`}');

    // Remove comments
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

    // Convert styles style="left: 16%; top: 14%;" to style={{ left: '16%', top: '14%' }}
    // Make sure we don't accidentally match empty style=""
    jsx = jsx.replace(/style=\"([^\"]+)\"/g, (match, p1) => {
        const parts = p1.split(';').filter(p => p.trim() !== '');
        const obj = {};
        parts.forEach(part => {
            let [key, val] = part.split(':');
            if (key && val) {
                key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                // escape single quotes in val if any
                val = val.replace(/'/g, "\\'");
                obj[key] = val.trim();
            }
        });
        return `style={{${Object.entries(obj).map(([k, v]) => `${k}: '${v}'`).join(', ')}}}`;
    });

    // some specific fixes
    jsx = jsx.replace(/autocomplete=\"/g, 'autoComplete=\"');
    jsx = jsx.replace(/tabindex=\"/g, 'tabIndex=\"');
    
    return jsx;
}

for (const file of files) {
    const htmlPath = path.join(__dirname, 'html', file.html);
    if (!fs.existsSync(htmlPath)) continue;
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;
    
    // Extract main
    const main = doc.querySelector('main');
    if (!main) continue;
    
    main.querySelectorAll('script').forEach(s => s.remove());

    const logos = main.querySelector('.logos');
    if (logos) logos.outerHTML = '<Logos title="Trusted by Teams That Expect Thinking Before Execution" />';
    
    const testimonials = main.querySelector('.testimonials');
    if (testimonials) testimonials.outerHTML = '<Testimonials />';
    
    const contact = main.querySelector('.contact');
    if (contact) contact.outerHTML = '<Contact />';
    
    // Some SVGs have inline styles with html entities or weird stuff? Let's hope not.
    
    const mainHtml = main.innerHTML; // get inner, not outer
    const jsxString = htmlToJsxString(mainHtml);

    const tsxCode = `import React, { useEffect } from 'react';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const { gsap, ScrollTrigger } = window as any;

const ${file.page}: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    
    const initAnimations = () => {
        if (!gsap || !ScrollTrigger) return;
        
        // Stats
        const statsSection = document.querySelector('.svc-stats');
        if (statsSection) {
          ScrollTrigger.create({
            trigger: statsSection,
            start: 'top 80%',
            once: true,
            onEnter: () => {
              document.querySelectorAll('.svc-stat-number').forEach((el: any) => {
                const target = parseFloat(el.getAttribute('data-stat-target') || '0');
                const decimals = parseInt(el.getAttribute('data-stat-decimals') || '0', 10);
                const suffix = el.getAttribute('data-stat-suffix') || '';
                let obj = { val: 0 };
                gsap.to(obj, {
                  val: target,
                  duration: 2,
                  ease: 'power3.out',
                  onUpdate: () => {
                    el.innerHTML = obj.val.toFixed(decimals) + suffix;
                  }
                });
              });
            }
          });
        }

        // Problem gaps
        const gaps = document.querySelectorAll('.svc-problem-gaps li');
        if (gaps.length) {
          gsap.set(gaps, { opacity: 0, x: -16 });
          ScrollTrigger.create({
            trigger: '.svc-problem-gaps',
            start: 'top 65%',
            once: true,
            onEnter: () => {
              gsap.to(gaps, {
                opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out'
              });
              gaps.forEach((gap, i) => {
                setTimeout(() => gap.classList.add('lit'), i * 100 + 200);
              });
            }
          });
        }

        // Uses Cards
        const useCards = document.querySelectorAll('.svc-use-card');
        if (useCards.length) {
          gsap.set(useCards, { opacity: 0, y: 40 });
          ScrollTrigger.create({
            trigger: '.svc-uses-grid',
            start: 'top 65%',
            once: true,
            onEnter: () => {
              gsap.to(useCards, {
                opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out'
              });
            }
          });
        }

        // Process scrub
        const scrubItems = document.querySelectorAll('.scrub-item');
        if (scrubItems.length) {
          scrubItems.forEach((item: any, i: number) => {
            const svgPath = item.querySelector('.service-mark-svg-path');
            if (svgPath) {
              const len = svgPath.getTotalLength();
              gsap.set(svgPath, { strokeDasharray: len, strokeDashoffset: len });
              ScrollTrigger.create({
                trigger: item,
                start: 'top 75%',
                once: true,
                onEnter: () => {
                  const tl = gsap.timeline();
                  tl.to(item, {
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    duration: 0.6,
                    ease: 'power2.out'
                  })
                  .add(() => item.classList.add('active'), '-=0.3')
                  .to(svgPath, {
                      strokeDashoffset: 0,
                      duration: 1.15,
                      ease: 'power2.inOut'
                  }, '+=0.2');
                }
              });
            }
          });
        }

        // Vs section
        const vsSection = document.querySelector('.svc-vs');
        if (vsSection) {
          const lineQuiet = vsSection.querySelector('.line-quiet');
          const lineLoud = vsSection.querySelector('.svc-vs-line:not(.line-quiet)');
          const strike = vsSection.querySelector('.svc-vs-strike') as HTMLElement;
          const highlight = vsSection.querySelector('.svc-vs-highlight') as HTMLElement;
          const closing = vsSection.querySelector('.svc-vs-closing');
          
          gsap.set([lineQuiet, lineLoud, closing], { opacity: 0, y: 28 });
          
          ScrollTrigger.create({
            trigger: vsSection,
            start: 'top 55%',
            once: true,
            onEnter: () => {
              const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
              if (lineQuiet) tl.to(lineQuiet, { opacity: 0.7, y: 0, duration: 0.7 });
              tl.add(() => {
                  if(!strike) return;
                  let prog = { v: 0 };
                  gsap.to(prog, {
                    v: 108, duration: 0.65, ease: 'power2.inOut',
                    onUpdate: () => strike.style.setProperty('--strike-w', prog.v + '%')
                  });
                }, '+=0.2')
              if (lineLoud) tl.to(lineLoud, { opacity: 1, y: 0, duration: 0.8 }, '+=0.85');
              tl.add(() => {
                  if(!highlight) return;
                  let prog = { v: 0 };
                  gsap.to(prog, {
                    v: 100, duration: 0.7, ease: 'power3.out',
                    onUpdate: () => highlight.style.setProperty('--hl-w', prog.v + '%')
                  });
                }, '+=0.2')
              if (closing) tl.to(closing, { opacity: 1, y: 0, duration: 0.7 }, '+=1.0');
            }
          });
          
          if (!document.getElementById('svc-vs-strike-style')) {
            const strikeStyle = document.createElement('style');
            strikeStyle.id = 'svc-vs-strike-style';
            strikeStyle.textContent = '.svc-vs-strike::after { width: var(--strike-w, 0%) !important; } .svc-vs-highlight::after { width: var(--hl-w, 0%) !important; }';
            document.head.appendChild(strikeStyle);
          }
        }

        const vsSteps = document.querySelectorAll('.svc-vs-step');
        if (vsSteps.length) {
          gsap.set(vsSteps, { opacity: 0, x: -16 });
          ScrollTrigger.create({
            trigger: '.svc-vs-pipeline',
            start: 'top 65%',
            once: true,
            onEnter: () => {
              vsSteps.forEach((step, i) => {
                gsap.to(step, {
                  opacity: 1, x: 0, duration: 0.6, delay: i * 0.22, ease: 'power3.out',
                  onStart: () => { setTimeout(() => step.classList.add('lit'), 250); }
                });
              });
            }
          });
        }

        // Channels / Orbit
        const orbit = document.querySelector('.svc-channels-orbit');
        const chips = document.querySelectorAll('.svc-channel-chip');
        if (orbit && chips.length) {
          gsap.set(chips, { opacity: 0, scale: 0.8 });
          ScrollTrigger.create({
            trigger: orbit,
            start: 'top 65%',
            once: true,
            onEnter: () => {
              gsap.to(chips, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.2)' });
              gsap.to(orbit, { rotation: 360, duration: 120, repeat: -1, ease: 'none' });
              gsap.to(chips, { rotation: -360, duration: 120, repeat: -1, ease: 'none' });
            }
          });
        }

        // Final CTA path
        const finalMarkPath = document.querySelector('.svc-final-cta-path') as SVGPathElement;
        if (finalMarkPath) {
          const finalLen = finalMarkPath.getTotalLength();
          gsap.set(finalMarkPath, { strokeDasharray: finalLen, strokeDashoffset: finalLen });
          ScrollTrigger.create({
            trigger: '.svc-final-cta',
            start: 'top 75%',
            once: true,
            onEnter: () => {
              gsap.to(finalMarkPath, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' });
            }
          });
        }
        
        // Fit List
        const fitItems = document.querySelectorAll('.svc-fit-list li');
        if (fitItems.length) {
          gsap.set(fitItems, { opacity: 0, x: -12 });
          ScrollTrigger.create({
            trigger: '.svc-fit-list',
            start: 'top 65%',
            once: true,
            onEnter: () => {
              gsap.to(fitItems, {
                opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out'
              });
            }
          });
        }
    };
    
    setTimeout(initAnimations, 100);

    return () => {
      document.body.classList.remove('service-page');
    };
  }, []);

  return (
    <main id="main-content">
      ${jsxString}
    </main>
  );
};

export default ${file.page};
`;

    fs.writeFileSync(path.join(__dirname, 'src', 'pages', file.page + '.tsx'), tsxCode);
    console.log('Converted ' + file.page);
}
