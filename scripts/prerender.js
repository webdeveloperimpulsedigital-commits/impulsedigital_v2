import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/about',
  '/services/consumer-intelligence',
  '/services/market-intelligence',
  '/services/always-on-intelligence',
  '/services/campaign-intelligence',
  '/services/archer-ai',
  '/services/agentic-ai',
  '/services/generative-search-optimisation',
  '/services/search-engine-optimisation',
  '/services/search-engine-optimisation/local-seo',
  '/services/search-engine-optimisation/ecommerce-seo',
  '/services/search-engine-optimisation/enterprise-seo',
  '/services/search-engine-optimisation/b2b-seo',
  '/services/social-media-management',
  '/services/website-development',
  '/services/branding',
  '/services/employer-branding',
  '/services/social-media-video-production',
  '/services/ai-video-production',
  '/contact',
  '/digital-marketing-agency-in-india',
  '/digital-marketing-agency-in-thane',
  '/digital-marketing-agency-in-navi-mumbai',
  '/digital-marketing-agency-in-pune'
];

const PORT = 4173;
const DIST_DIR = path.resolve(__dirname, '../dist');

// Start static server
const app = express();
app.use(express.static(DIST_DIR));

// Fallback to index.html for SPA routing
app.use((req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

const server = app.listen(PORT, async () => {
  console.log(`Starting prerender process...`);
  
  try {
    const browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Prevent loading external assets and API calls to speed up and stabilize prerendering in CI
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      const resourceType = req.resourceType();
      
      // Block all external resources (analytics, fonts, etc.)
      if (!url.startsWith(`http://localhost:${PORT}`) && !url.startsWith(`http://127.0.0.1:${PORT}`)) {
        req.abort();
      } else if (['image', 'media', 'font', 'stylesheet'].includes(resourceType)) {
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
      
      // Remove any injected scripts that shouldn't run again on the client, if necessary
      // For now, React will hydrate cleanly over the static HTML

      const routeDir = path.join(DIST_DIR, route === '/' ? '' : route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }

      const filePath = path.join(routeDir, 'index.html');
      fs.writeFileSync(filePath, html);
      console.log(`Saved ${filePath}`);
    }

    await browser.close();
    console.log('Prerendering completed successfully!');
  } catch (error) {
    console.error('Error during prerendering:', error);
    process.exit(1);
  } finally {
    server.close();
  }
});
