import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const htmlDir = path.join(import.meta.dirname, 'html');
const dataDir = path.join(import.meta.dirname, 'src', 'data');
const pagesDir = path.join(import.meta.dirname, 'src', 'pages');

const files = [
    { html: 'generative-search-optimisation.html', name: 'generativeSearchOptimisation', page: 'GenerativeSearchOptimisation' },
    { html: 'website-development.html', name: 'websiteDevelopment', page: 'WebsiteDevelopment' },
    { html: 'social-media-management.html', name: 'socialMediaManagement', page: 'SocialMediaManagement' },
    { html: 'employer-branding.html', name: 'employerBranding', page: 'EmployerBranding' },
    { html: 'branding.html', name: 'branding', page: 'Branding' },
    { html: 'search-engine-optimisation.html', name: 'searchEngineOptimisation', page: 'SearchEngineOptimisation' }
];

function cleanText(txt) {
    return txt.replace(/\s+/g, ' ').trim();
}

for (const file of files) {
    const htmlPath = path.join(htmlDir, file.html);
    if (!fs.existsSync(htmlPath)) {
        console.log(`Skipping ${file.html}`);
        continue;
    }

    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    const data = {
        hero: {
            headlineParts: [],
            headlineAccent: '',
            description: '',
            buttons: []
        },
        stats: {
            title: '',
            metrics: [],
            footnote: ''
        },
        problem: {
            title: '',
            introText: [],
            points: [],
            closingText: []
        },
        vs: {
            title: '',
            leftSide: { label: '', statement: '' },
            rightSide: { label: '', statement: '' },
            steps: [],
            closing: ''
        },
        uses: {
            title: '',
            cards: []
        },
        whenToUse: {
            title: '',
            intro: [],
            channels: [],
            closing: []
        },
        guardrails: {
            title: '',
            intro: [],
            pills: [],
            punchline: { left: '', right: '' }
        },
        process: {
            title: '',
            steps: [],
            closing: { top: '', bottom: '' }
        },
        fit: {
            title: '',
            points: [],
            closer: []
        },
        finalCta: {
            title: '',
            body: '',
            buttons: [],
            footnote: ''
        },
        faq: []
    };

    // --- Hero ---
    const heroH1 = document.querySelector('.svc-hero-headline');
    if (heroH1) {
        // extract parts separated by <br> or just get text
        const nodes = Array.from(heroH1.childNodes);
        let currentPart = '';
        nodes.forEach(n => {
            if (n.nodeName === 'BR') {
                if (currentPart.trim()) data.hero.headlineParts.push(currentPart.trim());
                currentPart = '';
            } else {
                currentPart += n.textContent;
            }
        });
        if (currentPart.trim()) data.hero.headlineParts.push(currentPart.trim());
        // Just arbitrarily make the last part the accent
        if (data.hero.headlineParts.length > 0) {
            data.hero.headlineAccent = data.hero.headlineParts[data.hero.headlineParts.length - 1];
        }
    }
    const heroDesc = document.querySelector('.svc-hero-page-desc');
    if (heroDesc) data.hero.description = heroDesc.innerHTML.trim();
    
    document.querySelectorAll('.svc-hero-cta-row .btn').forEach(btn => {
        data.hero.buttons.push({
            text: btn.querySelector('.btn-text')?.textContent.trim() || '',
            link: btn.getAttribute('href') || '#',
            cursor: btn.getAttribute('data-cursor') || ''
        });
    });

    // --- Stats ---
    const statsH2 = document.querySelector('.svc-stats .svc-h2');
    if (statsH2) data.stats.title = cleanText(statsH2.textContent);
    document.querySelectorAll('.svc-stat').forEach(stat => {
        const numEl = stat.querySelector('.svc-stat-number');
        data.stats.metrics.push({
            target: numEl ? parseFloat(numEl.getAttribute('data-stat-target') || '0') : 0,
            suffix: numEl ? numEl.getAttribute('data-stat-suffix') || '' : '',
            decimals: numEl ? parseInt(numEl.getAttribute('data-stat-decimals') || '0') : 0,
            desc: cleanText(stat.querySelector('.svc-stat-desc')?.textContent || '')
        });
    });
    const statsFootnote = document.querySelector('.svc-stats-footnote p');
    if (statsFootnote) data.stats.footnote = cleanText(statsFootnote.textContent);

    // --- Problem ---
    const probH2 = document.querySelector('.svc-problem .svc-h2');
    if (probH2) data.problem.title = cleanText(probH2.textContent);
    
    const probBodyPs = Array.from(document.querySelectorAll('.svc-problem-body > p'));
    const pivotIdx = probBodyPs.findIndex(p => p.classList.contains('pivot'));
    if (pivotIdx !== -1) {
        data.problem.introText = probBodyPs.slice(0, pivotIdx).map(p => cleanText(p.textContent));
        data.problem.closingText = probBodyPs.slice(pivotIdx).map(p => cleanText(p.textContent));
    } else {
        data.problem.introText = probBodyPs.map(p => cleanText(p.textContent));
    }
    document.querySelectorAll('.svc-problem-gaps .gap-text').forEach(g => {
        data.problem.points.push(cleanText(g.textContent));
    });

    // --- Vs ---
    const vsH2 = document.querySelector('.svc-vs .svc-h2');
    if (vsH2) data.vs.title = cleanText(vsH2.textContent);
    const vsLines = document.querySelectorAll('.svc-vs-line');
    if (vsLines.length >= 2) {
        data.vs.leftSide = {
            label: cleanText(vsLines[0].querySelector('.svc-vs-label')?.textContent || ''),
            statement: cleanText(vsLines[0].querySelector('.svc-vs-statement')?.textContent || '')
        };
        data.vs.rightSide = {
            label: cleanText(vsLines[1].querySelector('.svc-vs-label')?.textContent || ''),
            statement: vsLines[1].querySelector('.svc-vs-statement')?.innerHTML || ''
        };
    }
    document.querySelectorAll('.svc-vs-step').forEach(step => {
        const num = cleanText(step.querySelector('.step-num')?.textContent || '');
        const label = step.querySelector('.step-label')?.innerHTML || '';
        data.vs.steps.push({ num, label });
    });
    const vsClosing = document.querySelector('.svc-vs-closing');
    if (vsClosing) data.vs.closing = vsClosing.innerHTML;

    // --- Uses ---
    const usesH2 = document.querySelector('.svc-uses .svc-h2');
    if (usesH2) data.uses.title = cleanText(usesH2.textContent);
    document.querySelectorAll('.svc-use-card').forEach(card => {
        data.uses.cards.push({
            title: cleanText(card.querySelector('h3')?.textContent || ''),
            bodyPoints: Array.from(card.querySelectorAll('.svc-use-body')).map(p => cleanText(p.textContent)),
            outcome: cleanText(card.querySelector('.svc-use-outcome')?.textContent || '').replace(/^Output:\s*/, '')
        });
    });

    // --- WhenToUse (Channels) ---
    const chH2 = document.querySelector('.svc-channels .svc-h2');
    if (chH2) data.whenToUse.title = cleanText(chH2.textContent);
    
    let isIntro = true;
    document.querySelectorAll('.svc-channels .svc-channels-intro').forEach(p => {
        const t = cleanText(p.textContent);
        if (p.nextElementSibling && p.nextElementSibling.classList.contains('svc-channels-stage')) {
            data.whenToUse.intro.push(t);
            isIntro = false;
        } else if (isIntro) {
            data.whenToUse.intro.push(t);
        } else {
            data.whenToUse.closing.push(p.innerHTML);
        }
    });
    document.querySelectorAll('.svc-channel-chip').forEach(chip => {
        data.whenToUse.channels.push({
            label: cleanText(chip.textContent),
            pos: { left: chip.style.left, top: chip.style.top }
        });
    });

    // --- Guardrails (Connected Systems) ---
    const sysH2 = document.querySelector('.svc-systems-intro .svc-h2');
    if (sysH2) data.guardrails.title = cleanText(sysH2.textContent);
    document.querySelectorAll('.svc-systems-intro p:not(.closer)').forEach(p => {
        data.guardrails.intro.push(cleanText(p.textContent));
    });
    document.querySelectorAll('.svc-system-pill').forEach(pill => {
        data.guardrails.pills.push({
            bold: cleanText(pill.querySelector('strong')?.textContent || ''),
            text: cleanText(pill.querySelector('span')?.textContent || '')
        });
    });
    const pLine1 = document.querySelectorAll('.svc-guard-punchline-line .inner')[0];
    const pLine2 = document.querySelectorAll('.svc-guard-punchline-line .inner')[1];
    if (pLine1) data.guardrails.punchline.left = cleanText(pLine1.textContent);
    if (pLine2) data.guardrails.punchline.right = cleanText(pLine2.textContent);

    // --- Process ---
    const procH2 = document.querySelector('#process .section-heading');
    if (procH2) data.process.title = cleanText(procH2.textContent);
    document.querySelectorAll('.scrub-item').forEach(item => {
        data.process.steps.push({
            num: cleanText(item.querySelector('.service-num')?.textContent || '').replace('.', ''),
            title: cleanText(item.querySelector('.scrub-title')?.textContent || ''),
            desc: cleanText(item.querySelector('.scrub-desc')?.textContent || '')
        });
    });
    const procClosingTop = document.querySelector('#process > .container > div:last-child > p:first-child');
    const procClosingBottom = document.querySelector('#process > .container > div:last-child > p:last-child');
    if (procClosingTop) data.process.closing.top = cleanText(procClosingTop.textContent);
    if (procClosingBottom) data.process.closing.bottom = cleanText(procClosingBottom.textContent);

    // --- Fit ---
    const fitH2 = document.querySelector('.svc-fit .svc-h2');
    if (fitH2) data.fit.title = cleanText(fitH2.textContent);
    document.querySelectorAll('.svc-fit-list li').forEach(li => {
        data.fit.points.push(cleanText(li.textContent));
    });
    document.querySelectorAll('.svc-fit-closer p').forEach(p => {
        data.fit.closer.push(cleanText(p.textContent));
    });

    // --- Final CTA ---
    const ctaH2 = document.querySelector('.svc-final-cta h2');
    if (ctaH2) data.finalCta.title = cleanText(ctaH2.textContent);
    const ctaBody = document.querySelector('.svc-final-cta-body');
    if (ctaBody) data.finalCta.body = ctaBody.innerHTML;
    document.querySelectorAll('.svc-final-cta-actions .btn').forEach(btn => {
        data.finalCta.buttons.push({
            text: btn.querySelector('.btn-text')?.textContent.trim() || '',
            link: btn.getAttribute('href') || '#',
            cursor: btn.getAttribute('data-cursor') || ''
        });
    });
    const ctaFoot = document.querySelector('.svc-final-cta-footnote');
    if (ctaFoot) data.finalCta.footnote = cleanText(ctaFoot.textContent);


    // WRITE DATA FILE
    const dataContent = "export const " + file.name + "Data = " + JSON.stringify(data, null, 2) + ";";
    fs.writeFileSync(path.join(dataDir, file.name + 'Data.ts'), dataContent);

    // WRITE PAGE FILE
    const pageContent = "import React, { useEffect } from 'react';\n" +
"import ServiceHero from '../components/Service/ServiceHero';\n" +
"import ServiceHandoff from '../components/Service/ServiceHandoff';\n" +
"import Logos from '../components/Logos';\n" +
"import Testimonials from '../components/Testimonials';\n" +
"import Contact from '../components/Contact';\n\n" +
"import { ServiceProblem, ServiceVs, ServiceUses, ServiceWhenToUse, ServiceGuardrails, ServiceProcess, ServiceFit, ServiceFinalCTA, ServiceFAQ } from '../components/Service/ServiceTemplate';\n\n" +
"import { " + file.name + "Data } from '../data/" + file.name + "Data';\n\n" +
"const { gsap, ScrollTrigger } = window as any;\n\n" +
"const " + file.page + ": React.FC = () => {\n" +
"  useEffect(() => {\n" +
"    document.body.classList.add('service-page');\n" +
"    return () => {\n" +
"      document.body.classList.remove('service-page');\n" +
"    };\n" +
"  }, []);\n\n" +
"  return (\n" +
"    <main id=\"main-content\">\n" +
"      <ServiceHero \n" +
"        headlineParts={" + file.name + "Data.hero.headlineParts}\n" +
"        headlineAccent={" + file.name + "Data.hero.headlineAccent}\n" +
"        description={" + file.name + "Data.hero.description}\n" +
"        buttons={" + file.name + "Data.hero.buttons}\n" +
"      />\n\n" +
"      <section className=\"svc-stats\" id=\"warp-start\">\n" +
"        <div className=\"container\">\n" +
"          <h2 className=\"svc-h2 split-text\">{" + file.name + "Data.stats.title}</h2>\n" +
"          <div className=\"svc-stats-grid\">\n" +
"            {" + file.name + "Data.stats.metrics.map((stat, i) => (\n" +
"              <div className=\"svc-stat\" key={i}>\n" +
"                <div className=\"svc-stat-mark mark-glyph\"><svg viewBox=\"801 344 274 272\"><use href=\"#impulse-mark\" /></svg></div>\n" +
"                <div className=\"svc-stat-number\" data-stat-target={stat.target} data-stat-suffix={stat.suffix} data-stat-decimals={stat.decimals}>{stat.target}{stat.suffix}</div>\n" +
"                <p className=\"svc-stat-desc\">{stat.desc}</p>\n" +
"              </div>\n" +
"            ))}\n" +
"          </div>\n" +
"          <p className=\"svc-stats-footnote\">{" + file.name + "Data.stats.footnote}</p>\n" +
"        </div>\n" +
"      </section>\n\n" +
"      <ServiceHandoff />\n" +
"      <ServiceProblem data={" + file.name + "Data.problem} />\n" +
"      <ServiceHandoff />\n" +
"      <ServiceVs data={" + file.name + "Data.vs} />\n" +
"      <ServiceHandoff />\n" +
"      <ServiceUses data={" + file.name + "Data.uses} />\n" +
"      <ServiceHandoff />\n" +
"      <ServiceWhenToUse data={" + file.name + "Data.whenToUse} />\n" +
"      <ServiceHandoff />\n" +
"      <ServiceGuardrails data={" + file.name + "Data.guardrails} />\n" +
"      <ServiceHandoff />\n" +
"      <ServiceProcess data={" + file.name + "Data.process} />\n" +
"      \n" +
"      <Logos title=\"Trusted by Teams That Expect Thinking Before Execution\" />\n" +
"      <Testimonials />\n" +
"      \n" +
"      <ServiceHandoff />\n" +
"      <ServiceFit data={" + file.name + "Data.fit} />\n" +
"      <ServiceHandoff />\n" +
"      <ServiceFinalCTA data={" + file.name + "Data.finalCta} />\n" +
"      <Contact />\n" +
"    </main>\n" +
"  );\n" +
"};\n\n" +
"export default " + file.page + ";\n";

    fs.writeFileSync(path.join(pagesDir, file.page + '.tsx'), pageContent);
    console.log("Successfully generated " + file.page + ".tsx and " + file.name + "Data.ts");
}
