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
    
    // Look for <Link to="/path"> where path does not end with /
    const regex1 = /to=[\'\`\"](\/[a-zA-Z0-9\-\/]*[a-zA-Z0-9\-])[\'\`\"]/g;
    const matches1 = [...content.matchAll(regex1)];
    
    // Look for path: "/path"
    const regexPath = /path:\s*[\'\`\"](\/[a-zA-Z0-9\-\/]*[a-zA-Z0-9\-])[\'\`\"]/g;
    const matchesPath = [...content.matchAll(regexPath)];

    // Look for theimpulsedigital.com/path
    const regex2 = /theimpulsedigital\.com(\/[a-zA-Z0-9\-\/]*[a-zA-Z0-9\-])[\'\`\"]/g;
    const matches2 = [...content.matchAll(regex2)];
    
    if (matches1.length > 0 || matches2.length > 0 || matchesPath.length > 0) {
      console.log(filePath, matches1.length, matchesPath.length, matches2.length);
      totalMatches += matches1.length + matchesPath.length + matches2.length;
    }
  }
});
console.log('Total URLs to append slash:', totalMatches);
