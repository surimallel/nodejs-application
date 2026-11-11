const http = require('node:http');
const path = require('node:path');
const { readFileSync } = require('node:fs');

function createServer() {
  const indexHtml = readFileSync(path.join(__dirname, 'public', 'index.html'));

  return http.createServer((request, response) => {
    const { pathname } = new URL(request.url, 'http://localhost');

    if (pathname === '/health') {
      response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ status: 'ok' }));
      return;
    }

    if (pathname === '/') {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      response.end(indexHtml);
      return;
    }

    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not Found');
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  createServer().listen(port, () => {
    console.log(`Demo app listening on http://localhost:${port}`);
  });
}

module.exports = { createServer };
