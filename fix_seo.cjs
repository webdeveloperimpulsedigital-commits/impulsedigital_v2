const fs = require('fs');
const path = require('path');

const appTsxPath = path.join(__dirname, 'src', 'App.tsx');
const appContent = fs.readFileSync(appTsxPath, 'utf8');

// Build component to route map
const routeRegex = /<Route\s+path="([^"]+)"\s+element={<([A-Za-z0-9_]+)\s*\/>}/g;
const componentToRoute = {};
let match;
while ((match = routeRegex.exec(appContent)) !== null) {
    const route = match[1];
    const comp = match[2];
    // prefer routes that do not have spaces/are standard
    if (!componentToRoute[comp] || !route.includes('%20')) {
        componentToRoute[comp] = route;
    }
}

// Ensure Home is mapped to /
componentToRoute['Home'] = '/';

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let modifiedCount = 0;

files.forEach(file => {
    const compName = file.replace('.tsx', '');
    let route = componentToRoute[compName];
    if (!route) {
        console.warn(`No route found for ${compName}`);
        return;
    }
    
    // Ensure route ends with a slash if it's a directory structure, or it is exactly what's in App.tsx
    // The App.tsx routes mostly end with /
    
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let originalContent = content;
    
    // Process Helmet block
    const helmetRegex = /<Helmet>([\s\S]*?)<\/Helmet>/;
    const helmetMatch = content.match(helmetRegex);
    
    if (helmetMatch) {
        let helmetInner = helmetMatch[1];
        
        // 1. Deduplicate <title>
        const titleMatches = [...helmetInner.matchAll(/<title>([\s\S]*?)<\/title>/g)];
        if (titleMatches.length > 1) {
            console.log(`${compName}: found ${titleMatches.length} title tags`);
            let firstTitle = titleMatches[0][0];
            // Remove all title tags
            helmetInner = helmetInner.replace(/<title>[\s\S]*?<\/title>\s*/g, '');
            // Put the first one back at the top
            helmetInner = `\n        ${firstTitle}` + helmetInner;
        }
        
        // 2. Fix Canonical URL
        const canonicalUrl = `https://www.theimpulsedigital.com${route}`;
        const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/;
        if (canonicalRegex.test(helmetInner)) {
            helmetInner = helmetInner.replace(canonicalRegex, `<link rel="canonical" href="${canonicalUrl}" />`);
        } else {
            // Add canonical tag if missing
            helmetInner += `\n        <link rel="canonical" href="${canonicalUrl}" />\n      `;
        }
        
        // 3. Fix canonical tags that might be outside of standard formatting or duplicated
        const multipleCanonical = [...helmetInner.matchAll(/<link\s+rel="canonical"/g)];
        if (multipleCanonical.length > 1) {
           // Remove all, insert one
           helmetInner = helmetInner.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>\s*/g, '');
           helmetInner += `\n        <link rel="canonical" href="${canonicalUrl}" />\n      `;
        }
        
        content = content.replace(helmetRegex, `<Helmet>${helmetInner}</Helmet>`);
        
        // Let's also check for any malformed tags like the one in the user's error message
        content = content.replace(/rel="\s+canonical"/g, 'rel="canonical"');
        content = content.replace(/href="https:\/\/www\.theimpulsedigital\.com\/services\/agentic-ai\/"/g, `href="${canonicalUrl}"`);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${compName}`);
        modifiedCount++;
    }
});

console.log(`Finished processing. Modified ${modifiedCount} files.`);
