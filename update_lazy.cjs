const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'src/components/Logos.tsx',
    'src/components/Testimonials.tsx',
    'src/components/CaseStudies.tsx',
    'src/components/Footer.tsx'
];

for (const relPath of filesToUpdate) {
    const fullPath = path.join(__dirname, relPath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let original = content;

    content = content.replace(/<img([^>]+)>/g, (match, p1) => {
        // Don't add if it already has lazy loading
        if (p1.includes('loading="lazy"')) return match;
        
        // Add loading="lazy" decoding="async" just before the closing >
        return `<img${p1} loading="lazy" decoding="async" />`.replace(/\/\s*loading="lazy"/, 'loading="lazy"');
    });

    if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Added lazy loading to: ${relPath}`);
    }
}
