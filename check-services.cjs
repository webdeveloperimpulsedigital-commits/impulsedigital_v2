const fs = require('fs');
const path = require('path');

function findFiles(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? findFiles(dirPath, callback) : callback(dirPath);
  });
}

let totalMatches = 0;
findFiles('src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match "/services/something" or '/services/something' or `/services/something`
    const regex1 = /[\'\`\"]\/services\//g;
    const matches1 = content.match(regex1) || [];
    
    // Match "theimpulsedigital.com/services/something"
    const regex2 = /theimpulsedigital\.com\/services\//g;
    const matches2 = content.match(regex2) || [];
    
    if (matches1.length > 0 || matches2.length > 0) {
      console.log('File:', filePath, '->', matches1.length + matches2.length, 'replacements');
      totalMatches += matches1.length + matches2.length;
    }
  }
});
console.log('Total replacements to make:', totalMatches);
