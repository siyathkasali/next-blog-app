const express = require('express');
const next = require('next');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, `./env/${process.env.ENV_FILE}`) });

const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

function createServer() {
  const server = express();

  server.get('*', (req, res) => {
    req.url = req.url.replace(/\/$/, '');
    if (req.url === '') { req.url = '/'; }
    handle(req, res);
  });

  server.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  return server;
}

if (dev) {
  app.prepare().then(() => {
    const server = createServer();

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${PORT}`);
    });
  });
} else {
  const server = createServer();

  module.exports = server;
}