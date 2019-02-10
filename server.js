const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');

const certOptions = {
  key: fs.readFileSync(path.resolve('build/server.key')),
  cert: fs.readFileSync(path.resolve('build/server.crt')),
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
});

const server = https.createServer(certOptions, app).listen(4000);
