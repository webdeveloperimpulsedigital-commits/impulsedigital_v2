const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    { file: 'src/components/CaseStudies.tsx', width: 600, height: 400 },
    { file: 'src/components/Testimonials.tsx', width: 100, height: 100 },
    { file: 'src/components/Logos.tsx', width: 200, height: 100 }
];

for (const { file, width, height } of filesToUpdate) {
    const fullPath = path.join(__dirname, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    const original = content;

    content = content.replace(/<img([^>]+)>/g, (match, p1) => {
        if (p1.includes('width=')) return match; // Skip if already has width
        
        return `<img${p1} width="${width}" height="${height}">`.replace(/>>+/, '>');
    });

    if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Added width and height to: ${file}`);
    }
}
