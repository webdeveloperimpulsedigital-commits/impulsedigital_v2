const fs = require('fs');
const path = require('path');

function replaceExtensions(filePath) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/\.png/g, '.webp')
            .replace(/\.jpg/g, '.webp')
            .replace(/\.jpeg/g, '.webp')
            .replace(/Aditya Birla Group\.svg/g, 'Aditya Birla Group.webp');
            
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
            replaceExtensions(fullPath);
        }
    }
}

walkDir(path.join(__dirname, 'src'));
console.log('Extensions updated.');
