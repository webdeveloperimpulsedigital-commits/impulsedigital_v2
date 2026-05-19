const fs = require('fs');
const path = require('path');

function findFiles(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? findFiles(dirPath, callback) : callback(dirPath);
  });
}

let replaced = 0;
findFiles('src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const regex = /(link:\s*|href=|to=)([\'\`\"])\#connect([\'\`\"])/g;
    if (regex.test(content)) {
      content = content.replace(regex, '$1$2/contact-us/$3');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
      replaced++;
    }
  }
});
console.log(`Updated ${replaced} files.`);
