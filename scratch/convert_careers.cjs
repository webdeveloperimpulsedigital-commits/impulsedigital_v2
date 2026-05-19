const fs = require('fs');

const htmlContent = fs.readFileSync('html/careers.html', 'utf8');

const mainMatch = htmlContent.match(/<main id="main-content">([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.error('Could not find main content');
  process.exit(1);
}

let jsxContent = mainMatch[1];

// HTML to JSX conversions
jsxContent = jsxContent.replace(/class="/g, 'className="');
jsxContent = jsxContent.replace(/<br>/g, '<br />');
jsxContent = jsxContent.replace(/<hr>/g, '<hr />');
jsxContent = jsxContent.replace(/<img(.*?)>/g, (match, attrs) => {
  if (!attrs.endsWith('/')) {
    return `<img${attrs} />`;
  }
  return match;
});
// Replace style strings with style objects for specific inline styles (I can see some style="...;...")
jsxContent = jsxContent.replace(/style="font-style:italic;font-weight:300;color:var\(--impulse-violet\);"/g, 'style={{ fontStyle: "italic", fontWeight: 300, color: "var(--impulse-violet)" }}');
jsxContent = jsxContent.replace(/style="text-align:center; max-width: 880px; margin: 0 auto 4rem;"/g, 'style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto 4rem" }}');

// Replace relative image paths
jsxContent = jsxContent.replace(/src="images\/([^"]*)"/g, 'src={`${import.meta.env.BASE_URL}images/$1`}');
// Also handle Career Images directory
jsxContent = jsxContent.replace(/src="Career Images\/([^"]*)"/g, 'src={`${import.meta.env.BASE_URL}images/Career Images/$1`}');


// Convert HTML comments to JSX comments
jsxContent = jsxContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

// Extract the JS animation logic from the script tag at the bottom
const scriptMatch = htmlContent.match(/<script>\s*\(\s*function[\s\S]*?<\/script>/);
let jsLogic = "";
if (scriptMatch) {
  jsLogic = scriptMatch[0];
  // Extract just the inner logic of document.addEventListener('DOMContentLoaded', function () { ... })
  const dclMatch = jsLogic.match(/document\.addEventListener\('DOMContentLoaded',\s*function\s*\(\)\s*\{([\s\S]*)\}\);\s*<\/script>/);
  if (dclMatch) {
    jsLogic = dclMatch[1];
  }
}

const template = `import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const Careers: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page', 'careers-page');

    const { gsap, ScrollTrigger, SplitType } = window as any;

    ${jsLogic}

    return () => {
      document.body.classList.remove('service-page', 'careers-page');
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <main id="main-content" className="careers-page-container">
      <Helmet>
        <title>Careers | Impulse Digital</title>
        <meta name="description" content="For people who want more from the work. Not just a job that fills the day. Impulse is for people who want their work to mean something." />
        <meta property="og:title" content="Careers | Impulse Digital" />
        <meta property="og:description" content="For people who want more from the work. Not just a job that fills the day. Impulse is for people who want their work to mean something." />
        <meta property="og:url" content="https://www.theimpulsedigital.com/careers" />
      </Helmet>
      
      ${jsxContent}

      <Contact />
    </main>
  );
};

export default Careers;
`;

fs.writeFileSync('src/pages/Careers.tsx', template);
console.log('Successfully wrote to Careers.tsx');
