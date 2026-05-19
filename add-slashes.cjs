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

    // First handle specific renames (without trailing slashes to catch everything, slashes added later)
    const specificRenames = [
      { regex: /([\'\`\"])\/about([\'\`\"])/g, repl: '$1/about-us$2' },
      { regex: /theimpulsedigital\.com\/about([\'\`\"])/g, repl: 'theimpulsedigital.com/about-us$1' },
      { regex: /([\'\`\"])\/contact([\'\`\"])/g, repl: '$1/contact-us$2' },
      { regex: /theimpulsedigital\.com\/contact([\'\`\"])/g, repl: 'theimpulsedigital.com/contact-us$1' },
    ];

    specificRenames.forEach(r => {
      if (r.regex.test(content)) {
        content = content.replace(r.regex, r.repl);
        modified = true;
      }
    });

    // Now append trailing slash to any URL that doesn't have one
    // Look for <Link to="/path"> or path: "/path" or path="/path"
    // Also include href="/path" or src="/path" if it's an internal route? We only care about routes.
    // So we match (to=|path: |path=) followed by quote, then a path starting with /, ending with alphanumeric or hyphen, then quote.
    const regex1 = /(to=|path:\s*|path=)([\'\`\"])(\/[a-zA-Z0-9\-\/]*[a-zA-Z0-9\-])([\'\`\"])/g;
    if (regex1.test(content)) {
      content = content.replace(regex1, '$1$2$3/$4');
      modified = true;
    }

    // Look for theimpulsedigital.com/path
    const regex2 = /theimpulsedigital\.com(\/[a-zA-Z0-9\-\/]*[a-zA-Z0-9\-])([\'\`\"])/g;
    if (regex2.test(content)) {
      content = content.replace(regex2, 'theimpulsedigital.com$1/$2');
      modified = true;
    }
    
    // Look for canonical tags href="https://www.theimpulsedigital.com/path"
    const regex3 = /href=([\'\`\"])https:\/\/www\.theimpulsedigital\.com(\/[a-zA-Z0-9\-\/]*[a-zA-Z0-9\-])([\'\`\"])/g;
    if (regex3.test(content)) {
      content = content.replace(regex3, 'href=$1https://www.theimpulsedigital.com$2/$3');
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
