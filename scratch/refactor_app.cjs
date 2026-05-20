const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace React import
content = content.replace(
  /import React, \{ useEffect, useLayoutEffect \} from 'react';/,
  "import React, { useEffect, useLayoutEffect, lazy, Suspense } from 'react';"
);

// Replace page imports with lazy
content = content.replace(
  /import ([A-Za-z0-9_]+) from '\.\/pages\/([A-Za-z0-9_]+)';/g,
  "const $1 = lazy(() => import('./pages/$2'));"
);

// Wrap Routes with Suspense
content = content.replace(
  /<Routes>/,
  "<Suspense fallback={<div style={{ minHeight: '100vh', background: '#020018' }}></div>}>\n        <Routes>"
);
content = content.replace(
  /<\/Routes>/,
  "</Routes>\n        </Suspense>"
);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx updated successfully.');
