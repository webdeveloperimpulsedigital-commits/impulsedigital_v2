const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'public', 'css', 'styles.css');
let content = fs.readFileSync(cssFile, 'utf8');
const original = content;

content = content.replace(/(@font-face\s*{[^}]+)}/g, (match, p1) => {
    if (p1.includes('font-display')) return match;
    return `${p1}  font-display: swap;\n}`;
});

if (content !== original) {
    fs.writeFileSync(cssFile, content, 'utf8');
    console.log('Added font-display: swap; to styles.css');
} else {
    console.log('No changes needed or font-display already present.');
}
