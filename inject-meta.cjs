const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Manual map from Excel URL path to our file path inside src/pages/
const urlToFileMap = {
  "/": "Home.tsx",
  "/about-us/": "AboutUs.tsx",
  "/services/": "ServicesIndex.tsx",
  "/casestudies/": "CaseStudiesPage.tsx",
  "/careers/": "Careers.tsx",
  "/contact-us/": "ContactUs.tsx",
  "/casestudies/amazon-eb/": "EmployerBrandingCaseStudy.tsx", 
  "/casestudies/hul/": "HULCaseStudy.tsx",
  "/casestudies/d-mart/": "DMartCaseStudy.tsx",
  "/casestudies/mastercard/": "MastercardCaseStudy.tsx",
  "/casestudies/brutindia/": "ABGBrutIndiaCaseStudy.tsx",
  "/casestudies/fourseforgood/": "FoursForGoodCaseStudy.tsx",
  "/services/agentic-ai/": "AgenticAI.tsx",
  "/services/search-engine-optimization/": "SearchEngineOptimisation.tsx",
  "/services/website-development/": "WebsiteDevelopment.tsx",
  "/services/social-media-video-production/": "VideoProduction.tsx",
  "/services/social-media-marketing/": "SocialMediaManagement.tsx",
  "/services/employer-branding-agency/": "EmployerBranding.tsx",
  "/services/branding/": "Branding.tsx",
  // Ignore resources for now unless we have pages
  "/digital-marketing-agency-in-india/": "IndiaLocation.tsx",
  "/digital-marketing-agency-in-thane/": "ThaneLocation.tsx",
  "/digital-marketing-agency-in-navi-mumbai/": "NaviMumbaiLocation.tsx",
  "/digital-marketing-agency-in-pune/": "PuneLocation.tsx",
  "/services/video-production/": "VideoProduction.tsx", 
  "/casestudies/crafting-the-employer-value-proposition-for-amazon-india/": "EmployerBrandingCaseStudy.tsx", // Maps to same as above?
  "/casestudies/automag-india/": "AutomagIndiaCaseStudy.tsx",
  "/casestudies/electromech/": "ElectroMechCaseStudy.tsx",
  "/casestudies/laljee-godhoo/": "LGHingCaseStudy.tsx",
  "/services/video-production/ai-video-production/": "AIVideoProduction.tsx",
  "/services/search-engine-optimization/ai-seo-agency/": "GenerativeSearchOptimisation.tsx",
  "/services/search-engine-optimization/enterprise-seo-services/": "EnterpriseSEO.tsx",
  "/services/search-engine-optimization/ecommerce-seo-services/": "ECommerceSEO.tsx",
  "/services/search-engine-optimization/b2b-seo-services/": "B2BSEO.tsx",
  "/services/search-engine-optimization/local-seo-services/": "LocalSEO.tsx",
  "/services/consumer-intelligence/": "ConsumerIntelligence.tsx",
  "/services/services/archer-ai/": "ArcherAI.tsx",
  "/services/campaign-performance-intelligence/": "CampaignIntelligence.tsx",
  "/services/always-on-intelligence/": "AlwaysOnIntelligence.tsx",
  "/services/market-competitive-intelligence/": "MarketIntelligence.tsx"
};

function parseHTMLToJSX(htmlString) {
  if (!htmlString) return '';
  // Fix cases where meta tags are not self-closing or missing closing slash
  let processed = htmlString.replace(/<meta([^>]+)(?<!\/)>/gi, '<meta$1 />');
  processed = processed.replace(/<link([^>]+)(?<!\/)>/gi, '<link$1 />');
  // Fix attributes that are invalid in JSX
  processed = processed.replace(/charset=/gi, 'charSet=');
  processed = processed.replace(/class=/gi, 'className=');
  return processed.trim();
}

function processFile() {
  const workbook = xlsx.readFile('public/Meta Tag for New website - Impulse.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  let updatedCount = 0;
  let unmapped = [];

  for (const row of data) {
    let url = row.URL;
    if (!url) continue;

    // Standardize URL to get path
    let urlPath = url.replace('https://www.theimpulsedigital.com', '').replace(/\/$/, '') + '/';
    if (urlPath === '//') urlPath = '/';

    const fileName = urlToFileMap[urlPath];
    if (!fileName) {
      unmapped.push(urlPath);
      continue;
    }

    const filePath = path.join('src', 'pages', fileName);
    if (!fs.existsSync(filePath)) {
      console.log(`Missing file: ${filePath}`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const jsxMeta = parseHTMLToJSX(row['Meta Tags (HTML)']);

    // Check if Helmet is imported
    if (!content.includes('react-helmet-async')) {
      content = `import { Helmet } from 'react-helmet-async';\n` + content;
    }

    // Check if <Helmet> exists. If it does, replace its contents.
    const helmetRegex = /<Helmet>([\s\S]*?)<\/Helmet>/i;
    if (helmetRegex.test(content)) {
      content = content.replace(helmetRegex, `<Helmet>\n        ${jsxMeta}\n      </Helmet>`);
    } else {
      // Find the first main tag or first div after return
      const returnRegex = /return\s*\(\s*(<[A-Za-z]+[^>]*>)/;
      content = content.replace(returnRegex, (match, p1) => {
        return `return (\n    <>\n      <Helmet>\n        ${jsxMeta}\n      </Helmet>\n      ${p1.replace('<>', '')}`;
      });
      // We might need to close the fragment at the end, but wrapping return might be tricky.
      // Better way: Just insert Helmet right after the opening tag of the root element if possible.
      // E.g., <main ...> or <div ...>
      const rootMatch = content.match(/return\s*\(\s*(<[A-Za-z]+[^>]*>)/);
      if(rootMatch && !content.includes('<Helmet>')) {
          content = content.replace(rootMatch[1], rootMatch[1] + `\n      <Helmet>\n        ${jsxMeta}\n      </Helmet>`);
      }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${fileName} with new Meta Tags`);
    updatedCount++;
  }

  console.log(`\nSuccessfully updated ${updatedCount} files.`);
  if (unmapped.length > 0) {
    console.log(`Unmapped URLs (No matching React component mapped in script):`);
    unmapped.forEach(u => console.log(u));
  }
}

processFile();
