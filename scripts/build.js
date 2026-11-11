const { mkdirSync, copyFileSync } = require('node:fs');
const path = require('node:path');

const projectRoot = path.join(__dirname, '..');
const outputDir = path.join(projectRoot, 'dist');
const publicOutputDir = path.join(outputDir, 'public');

mkdirSync(publicOutputDir, { recursive: true });
copyFileSync(
  path.join(projectRoot, 'src', 'server.js'),
  path.join(outputDir, 'server.js')
);
copyFileSync(
  path.join(projectRoot, 'src', 'public', 'index.html'),
  path.join(publicOutputDir, 'index.html')
);

console.log('Build complete: dist/');
