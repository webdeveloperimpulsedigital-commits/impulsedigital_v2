const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('html/branding.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

function clean(el) {
  if (!el) return '';
  const clone = el.cloneNode(true);
  clone.querySelectorAll('br').forEach(br => br.replaceWith(' '));
  return clone.textContent.trim().replace(/\s+/g, ' ');
}

function extractData() {
  const data = {};

  const heroH1 = document.querySelector('.svc-hero-headline');
  const heroDesc = document.querySelector('.svc-hero-page-desc');
  const heroBtns = Array.from(document.querySelectorAll('.svc-hero-cta-row .btn')).map(b => ({
    text: clean(b.querySelector('.btn-text')),
    link: b.getAttribute('href') || '',
    cursor: b.getAttribute('data-cursor') || ''
  }));

  data.hero = {
    headlineHtml: clean(heroH1),
    headlineParts: [],
    headlineAccent: '',
    description: clean(heroDesc),
    buttons: heroBtns
  };

  const statsSection = document.querySelector('.svc-stats');
  if (statsSection) {
    const title = clean(statsSection.querySelector('.svc-h2'));
    const metrics = Array.from(statsSection.querySelectorAll('.svc-stat')).map(s => {
      const numEl = s.querySelector('.svc-stat-number');
      return {
        target: parseInt(numEl?.getAttribute('data-stat-target') || '0'),
        divisor: parseInt(numEl?.getAttribute('data-stat-divisor') || '1'),
        suffix: numEl?.getAttribute('data-stat-suffix') || '',
        decimals: parseInt(numEl?.getAttribute('data-stat-display-decimals') || '0'),
        trimZero: numEl?.getAttribute('data-stat-trim-zero') === 'true',
        desc: clean(s.querySelector('.svc-stat-desc'))
      };
    });
    const footnote = clean(statsSection.querySelector('.svc-stats-footnote'));
    data.stats = { title, metrics, footnote };
  }

  const problemSection = document.querySelector('.svc-problem');
  if (problemSection) {
    const title = clean(problemSection.querySelector('.svc-h2'));
    const intro = Array.from(problemSection.querySelectorAll('.svc-problem-body p:not(.pivot):not([class])')).map(p => clean(p));
    const pivot = clean(problemSection.querySelector('.pivot'));
    const gaps = Array.from(problemSection.querySelectorAll('.gap-text')).map(g => clean(g));
    const outro = Array.from(problemSection.querySelectorAll('.svc-problem-body p:last-of-type')).map(p => clean(p));
    data.problem = { title, intro, pivot, gaps, outro };
  }

  const vsSection = document.querySelector('.svc-vs');
  if (vsSection) {
    const title = clean(vsSection.querySelector('.svc-h2'));
    const leftLabel = clean(vsSection.querySelector('.line-quiet .svc-vs-label'));
    const leftStrike = clean(vsSection.querySelector('.svc-vs-strike'));
    const rightLabel = clean(vsSection.querySelector('.line-loud .svc-vs-label'));
    
    const rightTextEl = vsSection.querySelector('.svc-vs-statement-loud');
    let rightText = '';
    let rightHighlight = '';
    if (rightTextEl) {
      const hl = rightTextEl.querySelector('.svc-vs-highlight');
      if (hl) {
        rightHighlight = clean(hl);
        rightText = rightTextEl.textContent.replace(hl.textContent, '').trim();
      } else {
        rightText = clean(rightTextEl);
      }
    }
    
    const closing = clean(vsSection.querySelector('.svc-vs-closing'));
    const steps = Array.from(vsSection.querySelectorAll('.svc-vs-step')).map(s => ({
      num: clean(s.querySelector('.step-num')),
      text: clean(s.querySelector('.step-label'))
    }));
    data.vs = { title, leftLabel, leftStrike, rightLabel, rightText, rightHighlight, closing, steps };
  }

  const usesSection = document.querySelector('#use-cases, .svc-uses');
  if (usesSection) {
    const title = clean(usesSection.querySelector('.svc-h2'));
    const intro = clean(usesSection.querySelector('.svc-uses-intro p'));
    const cards = Array.from(usesSection.querySelectorAll('.svc-use-card')).map(c => ({
      title: clean(c.querySelector('.svc-use-title')),
      body: clean(c.querySelector('.svc-use-body')),
      outcome: clean(c.querySelector('.svc-use-outcome'))
    }));
    data.uses = { title, intro, cards };
  }

  const processSection = document.querySelector('#process, .svc-process, .services.glass-panel');
  if (processSection) {
    const title = clean(processSection.querySelector('.section-heading, .svc-h2'));
    const steps = Array.from(processSection.querySelectorAll('.scrub-item')).map(s => ({
      num: clean(s.querySelector('.service-num, .scrub-num')),
      title: clean(s.querySelector('.scrub-title')),
      desc: clean(s.querySelector('.scrub-desc'))
    }));
    const f1 = clean(processSection.querySelectorAll('div[style*="text-align: center"] p')[0]);
    const f2 = clean(processSection.querySelectorAll('div[style*="text-align: center"] p')[1]);
    data.process = { title, steps, footer: f1 ? f1 + (f2 ? '\n\n' + f2 : '') : '' };
  }

  const guardSection = document.querySelector('.svc-guardrails');
  if (guardSection) {
    const title = clean(guardSection.querySelector('.svc-h2'));
    const intro = clean(guardSection.querySelector('.svc-guard-intro p'));
    const rows = Array.from(guardSection.querySelectorAll('.svc-guard-row')).map(r => ({
      title: clean(r.querySelector('.svc-guard-title')),
      desc: clean(r.querySelector('.svc-guard-desc'))
    }));
    const pl1 = clean(guardSection.querySelectorAll('.svc-guard-punchline .inner')[0]);
    const pl2 = clean(guardSection.querySelectorAll('.svc-guard-punchline .inner')[1]);
    data.guardrails = { title, intro, rows, punchlineLine1: pl1, punchlineLine2: pl2 };
  }

  const fitSection = document.querySelector('.svc-fit');
  if (fitSection) {
    const title = clean(fitSection.querySelector('.svc-h2'));
    const intro = clean(fitSection.querySelector('.svc-fit-intro p'));
    const list = Array.from(fitSection.querySelectorAll('.svc-fit-list li')).map(l => clean(l));
    data.fit = { title, intro, list };
  }

  const ctaSection = document.querySelector('.svc-final-cta');
  if (ctaSection) {
    const title = clean(ctaSection.querySelector('.split-text'));
    const body = clean(ctaSection.querySelector('.svc-final-cta-body'));
    const buttons = Array.from(ctaSection.querySelectorAll('.btn')).map(b => ({
      text: clean(b.querySelector('.btn-text')),
      link: b.getAttribute('href') || '',
      cursor: b.getAttribute('data-cursor') || '',
      primary: false
    }));
    const footnote = clean(ctaSection.querySelector('.svc-final-cta-footnote'));
    data.finalCta = { title, body, buttons, footnote };
  }

  const faqSection = document.querySelector('.faq');
  data.faq = { items: [] };
  if (faqSection) {
    data.faq.title = clean(faqSection.querySelector('.section-heading')) || 'Frequently Asked Questions';
    const items = Array.from(faqSection.querySelectorAll('.acc-item')).map(item => ({
      q: clean(item.querySelector('.acc-header h3')),
      a: clean(item.querySelector('.acc-content p'))
    }));
    data.faq.items = items;
  }
  
  return data;
}

const parsedData = extractData();
fs.writeFileSync('src/data/brandingData.ts', 'export const brandingData = ' + JSON.stringify(parsedData, null, 2) + ';\n');
