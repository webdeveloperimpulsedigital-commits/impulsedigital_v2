const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const formatTitle = (filename) => {
  const name = filename.replace('.tsx', '').replace(/([A-Z])/g, ' $1').trim();
  return `${name} | Impulse Digital`;
};

const formatUrl = (filename) => {
  const name = filename.replace('.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return `https://www.theimpulsedigital.com/${name}`;
};

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if it already has Helmet imported
  if (content.includes('react-helmet-async')) {
    // try to remove existing SEO component if we injected it
    content = content.replace(/<SEO\s+[^>]*\/>/g, '');
  } else {
    content = `import { Helmet } from 'react-helmet-async';\n` + content;
  }

  // Remove existing <SEO /> usage
  content = content.replace(/import\s+SEO\s+from\s+['"]\.\.\/components\/SEO['"];?\n?/g, '');
  content = content.replace(/<SEO[\s\S]*?\/>\n?/g, '');

  const title = formatTitle(file);
  const url = formatUrl(file);

  const helmetBlock = `
      <Helmet>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>${title}</title>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English" />
        <meta name="generator" content="N/A" />

        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="${url}" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@impulsedigi" />
        <meta name="twitter:creator" content="@impulsedigi" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://www.theimpulsedigital.com/img/impulse-logo.jpg" />
        <meta name="twitter:url" content="${url}" />

        <link rel="canonical" href="${url}" />
      </Helmet>`;

  // Inject inside the top-level main or div
  if (content.includes('<main id="main-content">')) {
    content = content.replace(/<main id="main-content">/, `<main id="main-content">${helmetBlock}`);
  } else if (content.includes('<main>')) {
    content = content.replace(/<main>/, `<main>${helmetBlock}`);
  } else if (content.includes('<div className="page-wrapper">')) {
    content = content.replace(/<div className="page-wrapper">/, `<div className="page-wrapper">${helmetBlock}`);
  } else if (content.includes('return (')) {
     // fallback injection right after the first containing element
     content = content.replace(/(return\s*\(\s*<[a-zA-Z]+[^>]*>)/, `$1${helmetBlock}`);
  }

  fs.writeFileSync(filePath, content);
});

console.log('Successfully injected Helmet blocks into all pages.');
