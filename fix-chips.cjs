const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('src/pages');
files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  if (code.includes('style={{ left: item.pos.left, top: item.pos.top }}')) {
    code = code.replace(/style=\{\{\s*left:\s*item\.pos\.left,\s*top:\s*item\.pos\.top\s*\}\}/g, "style={{ '--chip-left': item.pos.left, '--chip-top': item.pos.top } as React.CSSProperties}");
    fs.writeFileSync(file, code);
    console.log('Updated ' + file);
  }
});
