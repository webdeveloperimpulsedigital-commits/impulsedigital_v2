const fs = require('fs');
const glob = require('glob');

glob('src/pages/**/*.tsx', (err, files) => {
  files.forEach(file => {
    let code = fs.readFileSync(file, 'utf8');
    if (code.includes('style={{ left: item.pos.left, top: item.pos.top }}')) {
      code = code.replace(/style=\{\{\s*left:\s*item\.pos\.left,\s*top:\s*item\.pos\.top\s*\}\}/g, "style={{ '--chip-left': item.pos.left, '--chip-top': item.pos.top } as React.CSSProperties}");
      fs.writeFileSync(file, code);
      console.log('Updated ' + file);
    }
  });
});
