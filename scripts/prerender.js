import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/about-us/',
  '/growth-intelligence/',
  '/growth-intelligence/consumer-intelligence/',
  '/growth-intelligence/market-intelligence/',
  '/growth-intelligence/always-on-intelligence/',
  '/growth-intelligence/campaign-intelligence/',
  '/ai-marketing-systems/',
  '/ai-marketing-systems/archer-ai/',
  '/ai-marketing-systems/agentic-ai/',
  '/ai-marketing-systems/ai-video-production/',
  '/ai-marketing-systems/generative-search-optimisation/',
  '/brand-infrastructure/',
  '/brand-infrastructure/search-engine-optimisation/',
  '/brand-infrastructure/search-engine-optimisation/local-seo/',
  '/brand-infrastructure/search-engine-optimisation/ecommerce-seo/',
  '/brand-infrastructure/search-engine-optimisation/enterprise-seo/',
  '/brand-infrastructure/search-engine-optimisation/b2b-seo/',
  '/brand-infrastructure/search-engine-optimisation/airoli/',
  '/brand-infrastructure/search-engine-optimisation/andheri/',
  '/brand-infrastructure/search-engine-optimisation/bandra/',
  '/brand-infrastructure/search-engine-optimisation/borivali/',
  '/brand-infrastructure/search-engine-optimisation/dadar/',
  '/brand-infrastructure/search-engine-optimisation/ghansoli/',
  '/brand-infrastructure/search-engine-optimisation/ghatkopar/',
  '/brand-infrastructure/search-engine-optimisation/goregaon/',
  '/brand-infrastructure/search-engine-optimisation/jogeshwari/',
  '/brand-infrastructure/search-engine-optimisation/kandivali/',
  '/brand-infrastructure/search-engine-optimisation/kharghar/',
  '/brand-infrastructure/search-engine-optimisation/koparkhairane/',
  '/brand-infrastructure/search-engine-optimisation/malad/',
  '/brand-infrastructure/search-engine-optimisation/mansarovar/',
  '/brand-infrastructure/search-engine-optimisation/mira-road/',
  '/brand-infrastructure/search-engine-optimisation/mulund/',
  '/brand-infrastructure/search-engine-optimisation/mumbai/',
  '/brand-infrastructure/search-engine-optimisation/navi-mumbai/',
  '/brand-infrastructure/search-engine-optimisation/nerul/',
  '/brand-infrastructure/search-engine-optimisation/panvel/',
  '/brand-infrastructure/search-engine-optimisation/sanpada/',
  '/brand-infrastructure/search-engine-optimisation/turbhe/',
  '/brand-infrastructure/search-engine-optimisation/vashi/',
  '/brand-infrastructure/social-media-marketing/',
  '/brand-infrastructure/website-development/',
  '/brand-infrastructure/branding/',
  '/brand-infrastructure/employer-branding/',
  '/brand-infrastructure/video-production/',
  '/services/',
  '/case-studies/',
  '/case-studies/uppercase/',
  '/case-studies/qure-ai/',
  '/case-studies/mastercard/',
  '/case-studies/lg-hing/',
  '/case-studies/dmart/',
  '/case-studies/hul/',
  '/case-studies/fours-for-good/',
  '/case-studies/electromech/',
  '/case-studies/abg-brut-india/',
  '/case-studies/abg-kbc/',
  '/case-studies/automag-bajaj-auto/',
  '/case-studies/automag-india/',
  '/case-studies/employer-branding/',
  '/case-studies/shaking-things-up/',
  '/case-studies/tata-soulfull/',
  '/case-studies/tcpl/',
  '/case-studies/chings-kurkure/',
  '/case-studies/chings-foodfarmer/',
  '/careers/',
  '/contact-us/',
  '/thank-you/',
  '/digital-marketing-agency-in-india/',
  '/digital-marketing-agency-in-thane/',
  '/digital-marketing-agency-in-navi-mumbai/',
  '/digital-marketing-agency-in-pune/'
];

const PORT = 4173;
const DIST_DIR = path.resolve(__dirname, '../dist');

// Backup the original index.html so we can use it as a clean template for SPA routing
const originalIndexPath = path.resolve(DIST_DIR, 'index.html');
const templatePath = path.resolve(DIST_DIR, 'template.html');
if (fs.existsSync(originalIndexPath)) {
  fs.copyFileSync(originalIndexPath, templatePath);
  // Create a clean fallback for the server so it doesn't serve the home page HTML for unknown routes
  fs.copyFileSync(originalIndexPath, path.resolve(DIST_DIR, '200.html'));
}

// Start static server
const app = express();
app.use(express.static(DIST_DIR));

// Fallback to template.html for SPA routing
app.use((req, res) => {
  res.sendFile(templatePath);
});

const server = app.listen(PORT, async () => {
  console.log(`Starting prerender process...`);
  
  try {
    const browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Log console messages and errors
    page.on('console', msg => {
      const text = msg.text();
      // Filter out noisy warnings if any, but log general logs
      if (!text.includes('Failed to load resource')) {
        console.log('BROWSER LOG:', text);
      }
    });
    page.on('pageerror', err => console.error('BROWSER ERROR:', err.message));
    
    // Prevent loading external assets but allow essential CDNs (GSAP, Three.js, etc.)
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      const resourceType = req.resourceType();
      
      const allowedCDNs = [
        'cdnjs.cloudflare.com',
        'cdn.jsdelivr.net',
        'unpkg.com'
      ];
      
      const isAllowedCDN = allowedCDNs.some(cdn => url.includes(cdn));
      
      if (!url.startsWith(`http://localhost:${PORT}`) && !url.startsWith(`http://127.0.0.1:${PORT}`) && !isAllowedCDN) {
        req.abort();
      } else if (['image', 'media', 'font'].includes(resourceType)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });
      
      // Wait for React Helmet to inject tags
      await page.waitForFunction(() => {
        return document.querySelector('title') !== null && 
               document.title !== 'Impulse Digital Mumbai | AI-Native Growth Intelligence' &&
               document.querySelector('meta[name="description"]');
      }, { timeout: 5000 }).catch(() => {}); // catch timeout if title doesn't change

      // Give a tiny buffer for GSAP or any final DOM updates
      await new Promise(resolve => setTimeout(resolve, 500));

      let html = await page.content();
      
      // Remove the dynamically injected script.js tag so it doesn't execute twice/early on client load
      html = html.replace(/<script[^>]*src="[^"]*js\/script\.js[^"]*"[^>]*><\/script>/gi, '');

      // Clean up duplicate SEO tags and ensure they match React 19's native layout (without data-rh="true" attributes)
      let titleCount = 0;
      html = html.replace(/<title[^>]*>(.*?)<\/title>/gi, (match, content) => {
        titleCount++;
        return titleCount === 1 ? `<title>${content}</title>` : '';
      });

      let canonicalCount = 0;
      html = html.replace(/<link([^>]*rel=["']canonical["'][^>]*)>/gi, (match, attrs) => {
        canonicalCount++;
        if (canonicalCount === 1) {
          const cleanAttrs = attrs.replace(/\s*data-rh=["']true["']/gi, '').trim();
          return `<link ${cleanAttrs}>`;
        }
        return '';
      });

      // Ensure meta tags managed by React 19 have no data-rh="true" to prevent client hydration mismatch
      html = html.replace(/<meta([^>]*?(?:name|property)=["'](?:description|keywords|robots|og:|twitter:)[^>]*?)>/gi, (match, attrs) => {
        const cleanAttrs = attrs.replace(/\s*data-rh=["']true["']/gi, '').trim();
        return `<meta ${cleanAttrs}>`;
      });


      const routeDir = path.join(DIST_DIR, route === '/' ? '' : route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }

      const filePath = path.join(routeDir, 'index.html');
      fs.writeFileSync(filePath, html);
      console.log(`Saved ${filePath}`);
    }

    await browser.close();
    
    // Clean up template.html
    if (fs.existsSync(templatePath)) {
      fs.unlinkSync(templatePath);
    }
    
    console.log('Prerendering completed successfully!');
  } catch (error) {
    console.error('Error during prerendering:', error);
    process.exit(1);
  } finally {
    server.close();
  }
});
