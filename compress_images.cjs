const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (stat.isFile() && stat.size > 1024 * 1024) { // > 1MB
            const ext = path.extname(fullPath).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                console.log(`Compressing: ${fullPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
                const tempPath = fullPath + '.tmp';
                
                try {
                    let image = sharp(fullPath).resize({ width: 1920, withoutEnlargement: true });
                    
                    if (ext === '.jpg' || ext === '.jpeg') {
                        image = image.jpeg({ quality: 80, progressive: true });
                    } else if (ext === '.png') {
                        image = image.png({ quality: 80, compressionLevel: 9 });
                    }
                    
                    await image.toFile(tempPath);
                    fs.unlinkSync(fullPath);
                    fs.renameSync(tempPath, fullPath);
                    
                    const newStat = fs.statSync(fullPath);
                    console.log(` -> Done: ${(newStat.size / 1024 / 1024).toFixed(2)} MB`);
                } catch (err) {
                    console.error(`Failed to compress ${fullPath}:`, err);
                }
            }
        }
    }
}

const publicDir = path.join(__dirname, 'public');
processDirectory(publicDir).then(() => {
    console.log("Image compression complete.");
});
