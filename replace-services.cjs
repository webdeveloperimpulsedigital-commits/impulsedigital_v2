const fs = require('fs');
const path = require('path');

function findFiles(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? findFiles(dirPath, callback) : callback(dirPath);
  });
}

let totalReplaced = 0;
findFiles('src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace React Router absolute paths: "/services/something" -> "/something"
    // This matches double quotes, single quotes, and backticks.
    const regex1 = /([\'\`\"])\/services\//g;
    if (regex1.test(content)) {
      content = content.replace(regex1, '$1/');
      modified = true;
    }
    
    // Replace hardcoded metadata URLs: "theimpulsedigital.com/services/something" -> "theimpulsedigital.com/something"
    const regex2 = /theimpulsedigital\.com\/services\//g;
    if (regex2.test(content)) {
      content = content.replace(regex2, 'theimpulsedigital.com/');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
      totalReplaced++;
    }
  }
});
console.log(`Successfully updated ${totalReplaced} files.`);
