const fs = require('fs');
const path = require('path');

function findImgTags(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            findImgTags(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const imgRegex = /<img[^>]*>/g;
            let match;
            while ((match = imgRegex.exec(content)) !== null) {
                console.log(`FILE: ${fullPath.replace(__dirname, '')}`);
                console.log(`TAG: ${match[0]}\n`);
            }
        }
    }
}

findImgTags(path.join(__dirname, 'src'));
