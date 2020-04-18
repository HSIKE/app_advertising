const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const zlib = require('zlib');

const envs = process.argv.slice(2);
const root = path.join(__dirname, envs[0] || 'public')

http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  const acceptEncoding = req.headers['accept-encoding'] || '';
  let raw;

  try {
    raw = fs.createReadStream(path.resolve(root, pathname.replace(/^\//, '') || 'index.html'));

    raw.on('error', (err) => {
      console.log(err);

      if (err.code === 'ENOENT') {
        res.writeHeader(404, { 'content-type': 'text/html;charset="utf-8"' });
        res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        res.end();
      }
    });

    if (acceptEncoding.match(/\bgzip\b/)) {
      res.writeHead(200, { 'Content-Encoding': 'gzip' });
      raw.pipe(zlib.createGzip()).pipe(res);
    } else if (acceptEncoding.match(/\bdeflate\b/)) {
      res.writeHead(200, { 'Content-Encoding': 'deflate' });
      raw.pipe(zlib.createDeflate()).pipe(res);
    } else {
      res.writeHead(200, {});
      raw.pipe(res);
    }
  } catch (e) {
    console.log(e);
  }
}).listen(8080);
