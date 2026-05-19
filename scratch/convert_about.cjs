const fs = require('fs');

const htmlContent = fs.readFileSync('html/about.html', 'utf8');

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

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page', 'about-page');

    const { gsap, ScrollTrigger, SplitType } = window as any;

    ${jsLogic}

    return () => {
      document.body.classList.remove('service-page', 'about-page');
    };
  }, []);

  return (
    <main id="main-content" className="about-page-container">
      <Helmet>
        <title>About Us | Impulse Digital</title>
        <meta name="description" content="Impulse Digital helps brands turn ambition into commercial momentum by bringing strategy, creativity, content, search, performance, technology, AI, and execution into formation." />
        <meta property="og:title" content="About Us | Impulse Digital" />
        <meta property="og:description" content="Impulse Digital helps brands turn ambition into commercial momentum by bringing strategy, creativity, content, search, performance, technology, AI, and execution into formation." />
        <meta property="og:url" content="https://www.theimpulsedigital.com/about-us" />
      </Helmet>
      
      ${jsxContent}

      <Contact />
    </main>
  );
};

export default AboutUs;
`;

fs.writeFileSync('src/pages/AboutUs.tsx', template);
console.log('Successfully wrote to AboutUs.tsx');
