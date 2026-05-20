const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'src/components/CaseStudies.tsx',
    'src/components/Testimonials.tsx',
    'src/components/Logos.tsx'
];

for (const relPath of filesToUpdate) {
    const fullPath = path.join(__dirname, relPath);
    if (!fs.existsSync(fullPath)) continue;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    const original = content;

    // Fix malformed tags like ` / width="200" height="100">` 
    // to ` width="200" height="100" />`
    content = content.replace(/\/\s*(width="\d+"\s*height="\d+")\s*>/g, ' $1 />');
    
    // Also fix any `/>>` or `> >`
    content = content.replace(/>\s*>/g, '>');

    if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed syntax in: ${relPath}`);
    }
}
