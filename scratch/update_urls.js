import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routeMap = {
  '/consumer-intelligence': '/services/consumer-intelligence',
  '/market-intelligence': '/services/market-intelligence',
  '/always-on-intelligence': '/services/always-on-intelligence',
  '/campaign-intelligence': '/services/campaign-intelligence',
  '/archer-ai': '/services/archer-ai',
  '/agentic-ai': '/services/agentic-ai',
  '/ai-video-production': '/services/ai-video-production',
  '/generative-search-optimisation': '/services/generative-search-optimisation',
  '/search-engine-optimisation': '/services/search-engine-optimisation',
  '/ecommerce-seo': '/services/search-engine-optimisation/ecommerce-seo',
  '/local-seo': '/services/search-engine-optimisation/local-seo',
  '/enterprise-seo': '/services/search-engine-optimisation/enterprise-seo',
  '/b2b-seo': '/services/search-engine-optimisation/b2b-seo',
  '/social-media-management': '/services/social-media-management',
  '/website-development': '/services/website-development',
  '/branding': '/services/branding',
  '/employer-branding': '/services/employer-branding'
};

const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};

const updateFile = (filePath) => {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Sort keys by length descending to prevent partial replacements (e.g. replacing /local-seo before /local-seo-something)
    const keys = Object.keys(routeMap).sort((a, b) => b.length - a.length);

    for (const key of keys) {
        const newValue = routeMap[key];
        
        // For App.tsx Routes: path="/..."
        content = content.replace(new RegExp(`path="${escapeRegex(key)}"`, 'g'), `path="${newValue}"`);
        
        // For Links: to="/..."
        content = content.replace(new RegExp(`to="${escapeRegex(key)}"`, 'g'), `to="${newValue}"`);
        
        // For Helmet meta tags
        content = content.replace(new RegExp(`content="https://www.theimpulsedigital.com${escapeRegex(key)}"`, 'g'), `content="https://www.theimpulsedigital.com${newValue}"`);
        content = content.replace(new RegExp(`href="https://www.theimpulsedigital.com${escapeRegex(key)}"`, 'g'), `href="https://www.theimpulsedigital.com${newValue}"`);

        // For prerender script
        content = content.replace(new RegExp(`'${escapeRegex(key)}'`, 'g'), `'${newValue}'`);
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
};

// Files to update
updateFile(path.join(__dirname, '../src/App.tsx'));
updateFile(path.join(__dirname, '../src/components/Navbar.tsx'));
updateFile(path.join(__dirname, '../src/pages/ServicesIndex.tsx'));
updateFile(path.join(__dirname, '../scripts/prerender.js'));

// Update all pages for the Helmet tags
const pagesDir = path.join(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
files.forEach(file => {
    updateFile(path.join(pagesDir, file));
});

console.log('All URLs updated successfully.');
