const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertToWebp(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            await convertToWebp(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                console.log(`Converting: ${file}`);
                const webpPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
                
                try {
                    await sharp(fullPath)
                        .webp({ quality: 80, effort: 6 })
                        .toFile(webpPath);
                    fs.unlinkSync(fullPath);
                    console.log(` -> Done: ${webpPath}`);
                } catch (err) {
                    console.error(`Failed to convert ${fullPath}:`, err);
                }
            } else if (ext === '.svg' && stat.size > 1024 * 1024) { // Convert SVGs larger than 1MB
                console.log(`Converting huge SVG: ${file}`);
                const webpPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
                try {
                    await sharp(fullPath, { density: 300 })
                        .resize({ width: 800, withoutEnlargement: true })
                        .webp({ quality: 80, effort: 6 })
                        .toFile(webpPath);
                    fs.unlinkSync(fullPath);
                    console.log(` -> Done: ${webpPath}`);
                } catch (err) {
                    console.error(`Failed to convert huge SVG ${fullPath}:`, err);
                }
            }
        }
    }
}

const publicDir = path.join(__dirname, 'public', 'case studies');
const publicDir2 = path.join(__dirname, 'public', 'brand-doc');

async function run() {
    console.log("Starting missing image conversion...");
    await convertToWebp(publicDir);
    await convertToWebp(publicDir2);
    console.log("Image conversion complete.");
}

run();
