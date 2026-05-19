const fs = require('fs');
const path = require('path');

function findFiles(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? findFiles(dirPath, callback) : callback(dirPath);
  });
}

const mappings = {
  // Growth Intelligence
  'consumer-intelligence': 'growth-intelligence/consumer-intelligence',
  'market-intelligence': 'growth-intelligence/market-intelligence',
  'always-on-intelligence': 'growth-intelligence/always-on-intelligence',
  'campaign-intelligence': 'growth-intelligence/campaign-intelligence',

  // AI Marketing Systems
  'archer-ai': 'ai-marketing-systems/archer-ai',
  'agentic-ai': 'ai-marketing-systems/agentic-ai',
  'ai-video-production': 'ai-marketing-systems/ai-video-production',
  'generative-search-optimisation': 'ai-marketing-systems/generative-search-optimisation',

  // Brand Infrastructure
  'search-engine-optimisation': 'brand-infrastructure/search-engine-optimisation',
  'social-media-management': 'brand-infrastructure/social-media-management',
  'video-production': 'brand-infrastructure/video-production',
  'website-development': 'brand-infrastructure/website-development',
  'branding': 'brand-infrastructure/branding',
  'employer-branding': 'brand-infrastructure/employer-branding'
};

let totalReplaced = 0;

findFiles('src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // We process paths from longest to shortest to prevent partial matches
    // But since we are mapping specific keys, we can just iterate.
    
    // Sort keys by length descending to replace longest first (e.g. search-engine-optimisation/local-seo BEFORE search-engine-optimisation)
    // Wait, local-seo already has search-engine-optimisation in its path, but let's handle the direct map.
    // Actually, local-seo currently is /search-engine-optimisation/local-seo.
    // If we replace /search-engine-optimisation with /brand-infrastructure/search-engine-optimisation,
    // then /search-engine-optimisation/local-seo automatically becomes /brand-infrastructure/search-engine-optimisation/local-seo !
    
    for (const [key, value] of Object.entries(mappings)) {
      // 1. React Router paths and absolute links: "/key" -> "/value"
      // Wait, we need to match carefully to not replace something like "/brand-infrastructure/search-engine-optimisation" again.
      // If we use negative lookbehind or just carefully check, since currently none of them have the category prefixes (we removed /services/ in the last step).
      
      // Match "/key" where it's preceded by a quote or backtick.
      // But avoid matching if it already has the category prefix!
      const regex1 = new RegExp(`([\\'\\\`\\"])\/${key}(?!\\w|-\\w)`, 'g');
      if (regex1.test(content)) {
        content = content.replace(regex1, `$1/${value}`);
        modified = true;
      }

      // 2. Metadata URLs: "theimpulsedigital.com/key" -> "theimpulsedigital.com/value"
      const regex2 = new RegExp(`theimpulsedigital\\.com\\/${key}(?!\\w|-\\w)`, 'g');
      if (regex2.test(content)) {
        content = content.replace(regex2, `theimpulsedigital.com/${value}`);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
      totalReplaced++;
    }
  }
});
console.log(`Successfully updated ${totalReplaced} files.`);
